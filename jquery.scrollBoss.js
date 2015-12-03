/*

   ____             ______
  / __/__________  / / / /  ___  ___ ___
 _\ \/ __/ __/ _ \/ / / _ \/ _ \(_-<(_-<
/___/\__/_/  \___/_/_/_.__/\___/___/___/

Version: 1.0.0
Author: James McClean
Website: http://jcjmcclean.github.io
Docs: http://jcjmcclean.github.io/jquery.scrollBoss
Repo: http://github.com/jcjmcclean/jquery.scrollBoss
Issues: http://github.com/jcjmcclean/jquery.scrollBoss/issues

*/

// scrollBoss
(function( scrollBoss, $, undefined ) {

	/*

	Dependencies:
	jQuery
	offsetKitty
	GSAP TweenMax

	*/

	// Do some fancy parallax
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
			var hookPosition = offsetKitty.viewport(settings.hook),
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

}( window.scrollBoss = window.scrollBoss || {}, jQuery ));
