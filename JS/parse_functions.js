Parse.initialize("v72tuCZdZwu7boW8XlUFOdfypGS52j1rSMw1YYX7",
                   "a6ngpBpVIAyv3UnXLf8iN0OPQnK3AakxEizLjlYA");

function createUser(){
	var user = new Parse.User();
	user.set("username", document.getElementById("signup-name").value);
	user.set("email", document.getElementById("signup-email").value);
	user.set("password", document.getElementById("signup-password").value);

	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}
