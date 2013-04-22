// lets pull in zeptojs

yepnope({
  test: navigator.appName.match(/Explorer/), // IE?
  yep: '/js/libs/jquery/jquery.min.js',
  nope: '/js/libs/zeptojs/zepto.min.js',
  callback: function() {
  		Zepto(function($){
			// console.log('Ready to Zepto!');

			var thehtml = $("html"),
				thehtmlHeight = thehtml.height(),
				thehtmlWidth = thehtml.width();

				// console.log(thehtmlWidth);
				// console.log(thehtmlHeight);

			$("a.lightbox-activator").on("click", function(e){
				e.preventDefault();
				// console.log($(this));

				thehtml.append('<div id="overlay" />');
				var overlay = $("#overlay"),
					$this = $(this),
					overlayContent = $this.data('content');

					$('<div>', {
						text: overlayContent,
						class: 'overlay-inner'
					}).appendTo(overlay);

				overlay.width(thehtmlWidth).height(thehtmlHeight);

				// console.log($("div.overlay-inner").text());




			});

			// console.log(overlay);










		});










  }
});