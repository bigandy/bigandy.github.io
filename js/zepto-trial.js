// lets pull in zeptojs

yepnope({
  test: navigator.appName.match(/Explorer/), // IE?
  yep: '/js/libs/jquery/jquery.min.js',
  nope: '/js/libs/zeptojs/zepto.min.js',
  callback: function() {
  		Zepto(function($){

			var thehtml = $("html"),
				thehtmlHeight = thehtml.height(),
				thehtmlWidth = thehtml.width();

			$("a.lightbox-trigger").on("click", function(e){
				e.preventDefault();

				thehtml.append('<div id="overlay" />');
				var overlay = $("#overlay"),
					$this = $(this),
					overlayContent = $this.data('content');

					$('<div>', {
						text: overlayContent,
						class: 'overlay-inner'
					}).appendTo(overlay);

				overlay.width(thehtmlWidth).height(thehtmlHeight);

			});

		});
  }
});