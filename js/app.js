
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
    listings.forEach(function(listing) {
        markers.push(new google.maps.Marker({
            title: listing.title,
            position: listing.position,
            animation: google.maps.Animation.DROP
        }));
    });
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
    showListings();
}
