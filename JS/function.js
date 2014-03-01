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