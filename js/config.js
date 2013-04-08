require.config({
	deps: ['main'],
	paths: {
		'jquery': 'libs/jquery.min',
		// 'use': 'libs/use',
		'backbone': 'libs/backbone',
		'underscore': 'libs/underscore'
	},

	// use: {
	// 	backbone: {
	// 		deps: ['underscore', 'jquery'],
	// 		attach: 'Backbone'
	// 	}
	// }

	// Sets the configuration for your third party scripts that are not AMD compatible
	shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
    	}
    }
});