# Udacity Frontend Nanodegree Real Estate App

The goal of this repository is to create a real estate app that shows apartment
listings and provides a number of features when searching for nearby listings.
The app will primarily rely on the Google Maps API.

### Todo

* (DONE) Load a Google Map using the Javascript API
* (DONE) Add Markers to the Map
* (DONE) Allow the user to display and hide all the markers on the map. Hiding should not
delete them.
* (DONE) Display data in Infowindows for each marker
  * (DONE) Allow only one infowindow to be open at any moment
  * (DONE) Infowindows should have title, street view panorama, etc.
  * (DONE) Panorama only created when marker is clicked
  * (DONE) Should face the address listing and looking slightly up
  * (DONE) Infowindow should not be recreated if already open on a marker
* (DONE) Using the Drawing and Geometry Libraries
  * (DONE) Display drawing controls, allowing polygons to be drawn
  * (DONE) Allow the user to hide or display drawing controls
  * (DONE) If hidden, clear any shapes drawn
  * (DONE) Allow user to search for listing within polygon
  * (DONE) Show listings within polygon and hide any outside
  * (DONE) If polygon is edited, redo the search
* (DONE) Styling the Map
  * (DONE) Apply custom map styles upon initialize
  * (DONE) Remove Map Type controls
* (DONE) Using the Geocoding service
  * (DONE) Allow the user to enter a location into the browser
  * (DONE) On a user action, geocode the location to get a lat/lng
  * (DONE) Bias the geocoding results to the city you are focusing on
  * (DONE) Update the center and zoom of the map to focus on that location
* Using the Distance Matrix service API
  * Allow user to enter a location, travel mode, and max travel time in minutes
  * Display only the markers based on the previous criteria
  * Hide all other markers not meeting criteria
  * Display journey time in minutes and the distance in miles above each marjker in a infowindow
  * Infowindow should close if marker is clicked
* Using the Directions service API
  * Expand previous infowindow with "Show Route" button
  * Allow user to show route from marker to user-entered point using travel mode
* Using Autocomplete on a text input
  * Update all text input options to use Places autocomplete
  * Bias the autocomplete to within the map area
* Using SearchBox on a text input
  * Add a Places SearchBox input field
  * When a place is selected, execute a places search
  * Bias the places search to within the map area
  * Show the resulting place markers on the map
  * Use the returned place icons as the icon
  * User the Places Name as the title
* Using Places Textsearch
  * Expand the SearchBox with a button to execute a Places Textsearch for places
  * Bias the places search to within the map area
  * Show the resulting place markers on the map
  * Use the returned place icons as the icon
  * User the Places Name as the title
* Making Place Details request
  * Expand previous to execute a place details search whenever a place marker is select, using the place ID
  * Show these details:
    * Place Name
    * Formatted Address
    * Phone
    * Hours
    * First photo in the result
  * Populate the place details into an infowindow
  * Only one infowindow at a time
  * Don't re-execute a plate details request if a marker is clicked with infowindow already open on it

### Todo ADVANCED

* Traffic Layer
  * Add a toggleable traffic layer to the map
* Style map type
  * Name the style created in the course and have it toggleable style map type option
* Directions Display
  * Show the step-by-step directions when the user selects "show route"
  * Create a panel on the right hand of the screen using the directions renderer
  * Allow user to reset the page without refreshing by removing the directions panel and route from the map
* Places Photos capabilities
  * Allow the user to scroll through multiple place PHOTOS in the place details infowindow
  * Add previous and next icons to move between photos
  * Use only the photo reference IDs returned with the place details request
  * Store the place details information returned with the request so the array of place photos are available
  * Hide the previous and next icons when only one photo exist
