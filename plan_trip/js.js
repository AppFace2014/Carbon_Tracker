
////////////////////////////////////////
////////////Code for GMAPS/////////////
//////////////////////////////////////

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var userLatLang;

function findUser(position) {

		//Gets user location
		if (navigator.geolocation){
	    	navigator.geolocation.getCurrentPosition(showPosition,createMap);
	    }

	    //If it can't (isn't allowed to retrieve)
	  	else{
	  		x.innerHTML="Geolocation is not supported by this browser.";
	  	}
	  	
	  	//console user coordinates
	  	function showPosition(position){
		  console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
		  createMap(position.coords.latitude, position.coords.longitude);

		}

		//Create map into a div (map_canvas)
		function createMap(lat, long){
			console.log("createMap block reached.");
			directionsDisplay = new google.maps.DirectionsRenderer();
			var userLatLang = new google.maps.LatLng(lat, long);
	  	    var map_canvas = document.getElementById('map_canvas');

        	var map_options = {
	          	center: new google.maps.LatLng(lat, long),
	          	zoom: 16,
	          	mapTypeId: google.maps.MapTypeId.ROADMAP
        	}


        var map = new google.maps.Map(map_canvas, map_options);
        var marker = new google.maps.Marker({
		    position: userLatLang, 
		    map: map, 
		    title:"You"
		});
    	directionsDisplay.setPanel(document.getElementById("directionsOutput"));
	  	}
    }

google.maps.event.addDomListener(window, 'load', findUser);

function calcRoute() {
    var end = document.getElementById("routeEnd").value;
    var start = document.getElementById("routeStart").value;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == 'ZERO_RESULTS') {
        alert('Did you enter something?');
      } 
      else if (status == 'UNKNOWN_ERROR') {
        alert("Something peculiar has happend, that's all I know");
      } 
      else if (status == 'REQUEST_DENIED') {
        alert('Permissions problem, look into your device/browser settings');
      } 
      else if (status == 'NOT_FOUND') {
        alert('Destination not found, sorry.');
      } 
      else{
        alert('Invalid entry, give it another go.');         
      }
    });
  }