# Udacity Frontend Nanodegree Real Estate App

The goal of this repository is to create a real estate app that shows apartment
listings and provides a number of features when searching for nearby listings.
The app will primarily rely on the Google Maps API.

## Todo

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
* Styling the Map
  * Apply custom map styles upon initialize
  * (DONE) Remove Map Type controls
* Using the Geocoding service
  * Allow the user to enter a location into the browser
  * On a user action, geocode the location to get a lat/lng
  * Bias the geocoding results to the city you are focusing on
  * Update the center and zoom of the map to focus on that location
