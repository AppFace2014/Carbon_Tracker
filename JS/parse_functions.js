Parse.initialize("v72tuCZdZwu7boW8XlUFOdfypGS52j1rSMw1YYX7",
                   "a6ngpBpVIAyv3UnXLf8iN0OPQnK3AakxEizLjlYA");

console.log(vehicles_2011.MODEL[0]);

function createUser(){
var user = new Parse.User();
user.set("username", document.getElementById("confirm-name").value);
user.set("email", document.getElementById("confirm-email").value);
user.set("password", document.getElementById("confirm-password").value);

var CarInfo = Parse.Object.extend("CarInfo");
var carInfo = new CarInfo();

carInfo.set("user", document.getElementById("confirm-name").value);
carInfo.set("email", document.getElementById("confirm-email").value);
carInfo.set("carYear", document.getElementById("confirm-year").value);
carInfo.set("carMake", document.getElementById("confirm-make").value);
carInfo.set("carModel", document.getElementById("confirm-model").value);
carInfo.set("carEngine", document.getElementById("confirm-engine").value);



carInfo.save(null, {
  success: function(carInfo) {
    //if save succeeds
    console.log('New object created with objectId: ' + carInfo.id);
  },
  error: function(carInfo, error) {
    //if save fails
    alert('Failed to create new object, with error code: ' + error.description);
  }
});

user.signUp(null, {
success: function(user) {
console.log("Account created!");
location.href = "#six";
},
error: function(user, error) {
// Show the error message somewhere and let the user try again.
alert("Error: " + error.code + " " + error.message);
}
});
}

function loginUser(){
Parse.User.logIn(document.getElementById("login-name").value, document.getElementById("login-password").value, {
  success: function(user) {
   alert("Welcome back!");
   location.href = "#six"
  },
  error: function(user, error) {
    alert("Invalid login information, give it another go!");
  }
});
}
Parse.initialize("v72tuCZdZwu7boW8XlUFOdfypGS52j1rSMw1YYX7",
                   "a6ngpBpVIAyv3UnXLf8iN0OPQnK3AakxEizLjlYA");

function createUser(){
	var user = new Parse.User();
	user.set("username", document.getElementById("confirm-name").value);
	user.set("email", document.getElementById("confirm-email").value);
	user.set("password", document.getElementById("confirm-password").value);

	var CarInfo = Parse.Object.extend("CarInfo");
	var carInfo = new CarInfo();

	carInfo.set("user", document.getElementById("confirm-email").value);
	carInfo.set("carYear", document.getElementById("confirm-year").value);
	carInfo.set("carMake", document.getElementById("confirm-make").value);
	carInfo.set("carModel", document.getElementById("confirm-model").value);
	carInfo.set("carEngine", document.getElementById("confirm-engine").value);



	carInfo.save(null, {
  success: function(carInfo) {
    //if save succeeds
    console.log('New object created with objectId: ' + carInfo.id);
  },
  error: function(carInfo, error) {
    //if save fails
    alert('Failed to create new object, with error code: ' + error.description);
  }
});

	user.signUp(null, {
	  success: function(user) {
	    console.log("Account created!");
	    location.href = "#six";
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

function loginUser(){
	Parse.User.logIn(document.getElementById("login-name").value, document.getElementById("login-password").value, {
  success: function(user) {
  	alert("Welcome back!");
  	location.href = "#six"
  },
  error: function(user, error) {
    alert("Invalid login information, give it another go!");
  }
});
}
function logOut(){
  Parse.User.logOut();
   location.href = "#one"
}
