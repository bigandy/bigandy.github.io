/* Bootstrap */

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