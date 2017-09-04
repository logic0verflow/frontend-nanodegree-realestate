
var listings = [
    {title: 'L Seven Apartments', position: { lat: 37.773325, lng: -122.409324 }},
    {title: '111 Jones Street Apartments', position: { lat: 37.782158, lng: -122.412385 }},
    {title: 'Plaza East Apartments', position: { lat: 37.782145, lng: -122.428904 }},
    {title: 'Olume', position: { lat: 37.774890, lng: -122.415912 }},
    {title: 'Willie B. Kennedy Apartments', position: { lat: 37.780783, lng: -122.429237 }},
    {title: 'Plaza Ramona Apartments', position: { lat: 37.780864, lng: -122.416324 }}
];

var markers = [];

var map;


function init() {

    var infoWindow = new google.maps.InfoWindow();

    listings.forEach(function(listing) {
        var marker = new google.maps.Marker({
            title: listing.title,
            position: listing.position,
            animation: google.maps.Animation.DROP,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });

        markers.push(marker);

        marker.addListener('click', function() {
            showInfoWindow(this, infoWindow);
        });

        marker.addListener('mouseover', function() {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png');
        });
        marker.addListener('mouseout', function() {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
        });
    });

    document.getElementById('showListing').addEventListener('click', function(e) {
        showListings();
    });

    document.getElementById('hideListing').addEventListener('click', function(e) {
        hideListings();
        // Hide the polygon if the user hides all listings
        polygon.setMap(null);
    });


    /**************** Setup Map Drawing Tools ****************/


    var drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP,
            drawingModes: [google.maps.drawing.OverlayType.POLYGON]
        },
        polygonOptions: {
            editable: true,
            zIndex: 1
        }
    });

    // The one polygon instance that exist on the map
    var polygon;

    // When a polygon is drawn, only show listings that are within it including
    // those that are after the polygon has been edited
    drawingManager.addListener('overlaycomplete', function(event) {
        if (polygon) {
            polygon.setMap(null);
            hideListings();
        }

        drawingManager.setDrawingMode(null);

        polygon = event.overlay;
        polygon.setEditable(true);

        searchOverlayListings();

        // Research polygon for which listings reside within
        polygon.getPath().addListener('set_at', searchOverlayListings);
        polygon.getPath().addListener('insert_at', searchOverlayListings);
    });

    // Unhide listings that are within the drawn polygon, remaining are hidden
    function searchOverlayListings() {
        var containsLocation = google.maps.geometry.poly.containsLocation;
        markers.forEach(function(marker) {
            if (containsLocation(marker.position, polygon)) {
                marker.setMap(map);
            } else {
                marker.setMap(null);
            }
        });
    }

    document.getElementById('toggleDrawingTools').addEventListener('click', function(e) {
        toggleDrawingTools();
    });

    function toggleDrawingTools() {
        if (drawingManager.map !== map) {
            drawingManager.setMap(map);
        } else {
            // Hide the drawing manager
            drawingManager.setMap(null);
            // Remove any drawn polygon and hide listings
            polygon.setMap(null);
            hideListings();
        }
    }

}


// Opens the passed infowindow with the marker as the anchor while displaying
// the title of the marker and presenting a street view if one is available.
function showInfoWindow(marker, infowindow) {
    if (infowindow.marker != marker) {
        // Empty the window and set the anchor
        infowindow.setContent('');
        infowindow.marker = marker;
        // Hide the window when closed by removing anchor
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });

        // The callback function for the getPanorama request
        function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
                // setup the HTML content of the window
                infowindow.setContent(
                    '<div>' + marker.getTitle() + '</div><div id="pano"></div>'
                );
                // Nearest street view location
                var nearLocale = data.location.latLng;
                var heading = google.maps.geometry.spherical.computeHeading(
                    nearLocale, marker.getPosition());
                // Panorama options
                var options = {
                    position: nearLocale,
                    pov: {
                        heading: heading,
                        pitch: 30
                    }
                };
                // Add the panorama to the infowindow
                var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), options);
            } else {
                infowindow.setContent(
                    '<div>' + marker.getTitle() + '</div> ' +
                    '<div>No street view found</div>'
                );
            }
        }

        // Use the StreetViewService to request a panorama of the marker
        var svs = new google.maps.StreetViewService();
        svs.getPanorama({location: marker.getPosition(), radius: 50}, getStreetView);

        infowindow.open(map, marker);
    }
}

function showListings() {
    var bounds = new google.maps.LatLngBounds();
    markers.forEach(function(marker) {
        marker.setMap(map);
        bounds.extend(marker.position);
    });
    map.fitBounds(bounds);
}

function hideListings() {
    markers.forEach(function(marker) {
        marker.setMap(null);
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.776784, lng: -122.416622 },
        zoom: 16,
        mapTypeControl: false
    });

    init();
    // showListings();
}
