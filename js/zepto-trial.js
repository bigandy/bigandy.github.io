// lets pull in zeptojs

yepnope({
  test: navigator.appName.match(/Explorer/), // IE?
  yep: '/bower_components/jquery/jquery.min.js',
  nope: '/bower_components/zeptojs/zepto.min.js',
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