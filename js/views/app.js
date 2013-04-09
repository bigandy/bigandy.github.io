define(['backbone'],function() {
	var App = Backbone.View.extend({
		initialize: function() {
			console.log( 'Wahoo! Backbone is working' );
		}
	});
	return App;
});