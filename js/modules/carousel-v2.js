/* Carousel v2 */
// don't need document ready, as we're loading the js from the footer

(function($){

	// Set up the variables:
	var carousel 		= $("#carousel"),
		carouselInner 	= carousel.children("div"),
		imgs 			= carouselInner.find("img"),
		imgsWidth 		= imgs[0].width,
		imgsTotal 		= imgs.length,
		current 		= 1,
		totalWidth 		= imgsWidth * imgsTotal,
		sliderNav 		= $("#slider-nav");

		// set widths of containers
		carousel.width(imgsWidth);
		carouselInner.width(totalWidth);

		sliderNav.show().find('button').on("click", function(e) {
			var direction 	= $(this).data("dir"),
				loc 		= imgsWidth;

			e.preventDefault();

			// update current value
			// if ( direction === "next" ) {
			// 	current += 1;
			// } else {
			// 	current -= 1;
			// }
			// can be re-written using ternary operator like so:
			// (query) ? true : false;
			// (direction === "next") ? current +=1 : current-=1;
			// can be further reduced :
			(direction === "next") ? ++current : --current;
			// first image
			if (current === 0) {
				current = imgsTotal;
				direction = "next";
				loc = totalWidth - imgsWidth;
			} else if (current - 1 === imgsTotal) {
				current = 1;
				loc = 0;
			}

			// add border if on last image
			(current === imgsTotal) ? carousel.addClass("funkyBorder") : carousel.removeClass("funkyBorder");

			// call transition function
			transition(carouselInner, loc, direction);
		});


		// define transition function:

		function transition( container, loc, direction) {

			var unit; // -= or +=

			if (direction && loc !== 0) {
				unit = ( direction  === "next" ) ? '-=' : '+=';
			}

			container.animate({
				'margin-left': unit ? ( unit + loc ) : loc
			});

		}





})(jQuery);