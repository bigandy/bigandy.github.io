// lets pull in zeptojs

yepnope({
  test: navigator.appName.match(/Explorer/), // IE?
  yep: '/js/libs/jquery/jquery.min.js',
  nope: '/js/libs/zeptojs/zepto.min.js',
  callback: function() {
  		Zepto(function($){
			console.log('Ready to Zepto!');

			var thehtml = $("html"),
				thehtmlHeight = thehtml.height(),
				thehtmlWidth = thehtml.width();

				console.log(thehtmlWidth);
				console.log(thehtmlHeight);

			$("a").on("click", function(e){
				e.preventDefault();
				// console.log($(this));	

				thehtml.append('<div id="overlay" />');
				var overlay = $("#overlay");
				overlay.width(thehtmlWidth);
				overlay.height(thehtmlHeight);




				// does this really need to be within this on() ??
				overlay.on("click", function() {
					$(this).remove();
					console.log($(this));
				});
			});

			






		});










  }
});