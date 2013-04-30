/* Carousel v3 */
// don't need document ready, as we're loading the js from the footer

(function($){

	var carousel = $(".carousel"),
		imgs = carousel.find("img");



	// create the constructor function

	function Carousel(blob) {
		this.blob = blob;
	}

	Carousel.prototype.doob = function() {
		console.log( "Sentance: '" + this.blob + "'");
	}

	var myCarousel = new Carousel("This whole thing is mighty strange. It'll take a while to get used to!");
	// console.log(myCarousel.blob);
	myCarousel.doob();



})(jQuery);