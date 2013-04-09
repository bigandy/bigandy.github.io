console.log("this is it! Requirejs Working");

require.config({
	paths: {
		"jquery": "libs/jquery/jquery.min",
		"underscore": "libs/underscore-amd/underscore",
		"backbone": "libs/backbone-amd/backbone",

	}
});


require(['views/app'], function(AppView) {
	new AppView;
});