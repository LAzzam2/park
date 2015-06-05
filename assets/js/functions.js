// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }
//
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


// remap jQuery to $
(function($){

	function createMap(){
		var newMap;
		if(newMap){
			newMap.kill();
		}

		width = window.innerWidth
		height = window.innerHeight
		newMap = Draggable.create("#map", {
			type:"x,y", 
			throwProps:true,
			bounds:{top:0, left:0, width:width, height:height},
			edgeResistance: .8,
		});
	}

	/* trigger when page is ready */
	$(document).ready(function (){
		createMap();
	});
	
	
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		createMap();
	});
	
	

})(window.jQuery);