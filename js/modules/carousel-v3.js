/* Carousel v3 */
// don't need document ready, as we're loading the js from the footer

(function($){

	var carousel = $(".carousel"),
		imgs = carousel.find("img");



	// create the constructor function

	function Carousel( container, nav ) {
		this.container = container;
		this.containerInner = this.container.find(".carousel-inner");
		this.nav = nav.show();

		this.imgs = this.container.find("img");
		this.imgsWidth = this.imgs[0].width; // 509px
		this.imgsLen = this.imgs.length; // 12
		this.totalWidth = this.imgsWidth * this.imgsLen; // 509*12 = 6108px

		this.container.width(this.imgsWidth).css("overflow","hidden");
		this.containerInner.width(this.totalWidth);
		this.current = 0;
	};


	Carousel.prototype.transition = function( position ) {
		this.containerInner.animate({
			'margin-left': position || -( this.current * this.imgsWidth )
		});
	};

	Carousel.prototype.setCurrent = function( direction ) {

		var position = this.current;

		position += ( ~~(direction === "next") || -1 );

		// so... this.current+1 for next, or += -1 === this.current-1 for prev

		// var direction = "next";
		// ~~(direction === "next") // 1 : direction === next so true, so 1
		// ~~(direction === "prev") // 0 : direction !== next so false, so 0


		// ( direction === "next" ) ? this.current++ : this.current--;

		// if ( direction === "next" ) {
		// 	this.current++;
		// } else {
		// 	this.current--;
		// }
		this.current = ( position < 0) ? this.imgsLen -1 : position % this.imgsLen;

		// checks to see if this.current is less than 0, if so points to the last image
		// otherwise goes to this.current unless it is greater than this.imgsLen,
		// then it goes to 0

		// 0 % 10 = 0,
		// 1 % 10 = 1,
		// 2 % 10 = 2...

		// 10 % 10 = 0 ... and repeat

		// console.log(this.current);
		return position;
	};


	(function(){
		// calling the above function with parameters
		var slider = new Carousel($('.carousel'), $("#slider-nav"));

		slider.nav.find("a").on("click", function(e){
			e.preventDefault();
			slider.setCurrent( $(this).data('dir') );
			slider.transition();
		});

		// function autoSlider(input) {
		// 	input++;
		// 	console.log(input);
		// }

		// setInterval(autoSlider(3), 300);







	})();





})(jQuery);