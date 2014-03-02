var menuStatus;

window.onload=function(){
	
	jQuery('.profile').on("tap",function(){
		changeMenu();

	});

	jQuery('.pMenu').on("tap",function(){
		changeMenu();
	});
	$('#two').on("swipeleft", function(){


	$('#two').on("swipeleft", function(){

	//Set last page signup values
	document.getElementById("confirm-name").value = document.getElementById("signup-name").value;
	document.getElementById("confirm-email").value = document.getElementById("signup-email").value;
	document.getElementById("confirm-password").value = document.getElementById("signup-password").value;
var nextpage = $(this).next('div[data-role="page"]');
if (nextpage.length > 0) {
$.mobile.changePage(nextpage, "slide", false, true);
}
});
$('#three').on("swiperight", function(){

	//Set last page signup values
	document.getElementById("confirm-year").value = document.getElementById("signup-year").value;
	document.getElementById("confirm-make").value = document.getElementById("signup-make").value;
	document.getElementById("confirm-model").value = document.getElementById("signup-model").value;
	document.getElementById("confirm-engine").value = document.getElementById("signup-engine").value;
var prevpage = $(this).prev('div[data-role="page"]');
if (prevpage.length > 0) {
$.mobile.changePage(prevpage, {transition: "slide",
reverse: true}, true, true);
}
});
	$('#three').on("swipeleft", function(){

	//Set last page signup values
	document.getElementById("confirm-year").value = document.getElementById("signup-year").value;
	document.getElementById("confirm-make").value = document.getElementById("signup-make").value;
	document.getElementById("confirm-model").value = document.getElementById("signup-model").value;
	document.getElementById("confirm-engine").value = document.getElementById("signup-engine").value;
var nextpage = $(this).next('div[data-role="page"]');
if (nextpage.length > 0) {
$.mobile.changePage(nextpage, "slide", false, true);
}
});

$('#four').on("swiperight", function(){
var prevpage = $(this).prev('div[data-role="page"]');
if (prevpage.length > 0) {
$.mobile.changePage(prevpage, {transition: "slide",
reverse: true}, true, true);
}
});
}
