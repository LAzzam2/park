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
		$('#map').width(window.innerWidth*2.5);
		width = window.innerWidth;
		height = window.innerHeight;
		newMap = Draggable.create("#map", {
			type:"x,y", 
			throwProps:true,
			bounds:{top:0, left:0, width:width, height:height},
			edgeResistance: .97
		});
	}

	function enter(){
		var splash = $('#border');
		var button = $('#enter-btn');
		var intro = $('.intro-wrap');
		var credits = $('.credits, .w');
		button.click(function(){
			console.log('click');
			intro.fadeOut(function(){
				splash.css({
					backgroundColor: 'rgba(53,56,59,0)',
					pointerEvents: 'none'
				})

				var tl = new TimelineLite();
				var map = $('#map');

				mapMidX = parseInt(map.width() / 2)-window.innerWidth/2;
				mapMidY = parseInt(map.height() / 2)-window.innerHeight/2;
				speed = 2;
				tl.to(map, speed, {x:-mapMidX, y:-mapMidY, onComplete:introScrollDone});
				tl.play();
				function introScrollDone(){
					credits.addClass('active');

				}
			});
		});

	}

	/* trigger when page is ready */
	$(document).ready(function (){
		createMap();
		enter();
	});
	
	
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		createMap();
	});
	
	

})(window.jQuery);