var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  // Sets google map options
  var mapOptions = {
    zoom: 16
  };
  map = new google.maps.Map(document.getElementById('map_canvas'),
      mapOptions);

  directionsDisplay = new google.maps.DirectionsRenderer();

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      map.setCenter(pos);
      
      directionsDisplay.setMap(map);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(43.6533103, -79.3827675),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}



function calcRoute() {
  var start = document.getElementById('routeStart').value;
  var end = document.getElementById('routeEnd').value;
  var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      console.log(response.routes[0].legs[0].distance.value + " meters");
      var distanceinKM = response.routes[0].legs[0].distance.value/1000;
      console.log(distanceinKM + " KMs");

      Parse.User.current().fetch().then(function (user) {
          var userEmail = user.get('email');
          console.log(userEmail);
      });

      var stat1 = document.getElementById('resultsOutput1');
        stat1.innerHTML = '<h2>Distance:</h2> <p>' + distanceinKM + ' Kilometers</p>';
      directionsDisplay.setDirections(response);

      var stat2 = document.getElementById('resultsOutput2');
        stat2.innerHTML = '<h2>Fuel Consumption:</h2> <p>' + distanceinKM + ' Liters</p>';
      directionsDisplay.setDirections(response);

      var stat3 = document.getElementById('resultsOutput3');
        stat3.innerHTML = '<h2>Emissions:</h2> <p>' + distanceinKM + ' Kilograms</p>';
      directionsDisplay.setDirections(response);
    } else {
        alert("Error: please try again")
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);