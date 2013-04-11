/* Bootstrap */

require({
	// waitSeconds: 15,
	paths: {
		async: "libs/requirejs-plugins/async",
		font: "libs/requirejs-plugins/font",
	}
});


require(['font!google,families:[Tangerine,Cantarell,Yanone Kaffeesatz:700]'], function(){
    //fonts are loaded

});


require(['modules/movie'], function(Movie) {
	// console.log(Movie);
	var movie = new Movie.Model({
		release: 1996,
		title: 'Contact'
	});

	var movieView = new Movie.View({
		model: movie
	});

	$("body").append(movieView.el)

	// console.log(movieView);
});