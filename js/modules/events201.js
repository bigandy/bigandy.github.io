// events201.js

(function(){ 
	
	console.log("This is jquery201.js");

	var dd = $('dd'),
		dt = $('dt'),
		dl = $('dl');

	// dd.addClass('hide');

	dd.filter(':nth-child(n+4)').addClass('hide');

	// dt.on("mousenter", function...) // if there are 100's of dt this is slow so...

	// we select the parent and then when a dt is "entered" we run the function. Faster!
	dl.on('mouseenter', 'dt', function() { 
		$(this)
			.next() // gets the next item, in this case the dd
				.slideDown(200) // show the next item
				.siblings('dd')
					.slideUp(300); // hide the siblings
	})


})();