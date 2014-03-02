var menuStatus;

window.onload=function(){
	
	jQuery('.profile').on("tap",function(){
		changeMenu();
	});

	jQuery('.pMenu').on("tap",function(){
		jQuery('.pMenu').animate({
			right: "-155px"
        }, 300);
		menuStatus = "closed";
	});
	$('#two').on("swipeleft", function(){
var nextpage = $(this).next('div[data-role="page"]');
if (nextpage.length > 0) {
$.mobile.changePage(nextpage, "slide", false, true);
}
});
$('#three').on("swiperight", function(){
var prevpage = $(this).prev('div[data-role="page"]');
if (prevpage.length > 0) {
$.mobile.changePage(prevpage, {transition: "slide",
reverse: true}, true, true);
}
});
	$('#three').on("swipeleft", function(){
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
};
/*window.pageload=function(){
	
};

window.pagechange = function(){
	jQuery('#profile').on("tap",function(){
		changeMenu();
	});

	jQuery('#pMenu').on("tap",function(){
		jQuery('#pMenu').animate({
			right: "-155px"
        }, 300);
		menuStatus = "closed";
	});
}*/

function changeMenu(){
	if (menuStatus != "open"){
		console.log("open");
		jQuery('.pMenu').animate({
			right: "5px"
       	}, 300);
		menuStatus = "open";
	} else {
		console.log("closed");
		jQuery('.pMenu').animate({
			right: "-155px"
       	}, 300);
		menuStatus = "closed";
	}	
}