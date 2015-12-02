// scrollBoss
(function( scrollBoss, $, undefined ) {

	scrollBoss.parallaxMofo = function(options) {
		// Define default settings
		var defaults = {
			property: 'y',
			amount: 0,
			offset: 0,
			duration: 0,
			easing: Power1.linear
		}

		// Update settings with options
		var settings = $.extend({}, defaults, options);

		if($(settings.hook).length > 0) {
			// Set variables
			var hookPosition = scrollBoss.getViewportOffset(settings.hook),
				percentage = 100 - (((hookPosition.top - settings.offset) / $(window).height()) * 100),
				elemY = percentage * (settings.amount / 100) + 'px',
				property = settings.property,
				animationSettings = {};

			//console.log(percentage+' :: '+$(window).scrollTop());

			if (percentage < 100) {
				// Set animation settings
				animationSettings['ease'] = settings.easing
				animationSettings[property] = elemY;
			}
			else {
				// Set animation settings
				animationSettings['ease'] = settings.easing
				animationSettings[property] = settings.amount;
			}

			// Run animation
			TweenMax.to(settings.elem, settings.duration, animationSettings);
		}
	}

	// Find out element's viewport offset
	scrollBoss.getViewportOffset = function($e) {
		var $e = $($e),
			$window = $(window),
			scrollLeft = $window.scrollLeft(),
			scrollTop = $window.scrollTop(),
			offset = $e.offset(),
			rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
			rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
		return {
			left: offset.left - scrollLeft,
			top: offset.top - scrollTop,
			insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
		};
	}

}( window.scrollBoss = window.scrollBoss || {}, jQuery ));
