var app = angular.module('app', []);

app.filter('to_trusted', ['$sce', function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}]);

// Add a controller
app.controller( 'AppCtrl', ['$scope', '$http', function( $scope, $http ) {

	// Load posts from the WordPress API
	$http({
		cache: true,
		method: 'GET',
		url: 'https://big-andy.co.uk/wp-json/wp/v2/posts',
		params: {
			'filter[posts_per_page]' : 10
		},
	}).
	success( function( data, status, headers, config ) {
		console.log( data );
		$scope.posts = data;

	}).
	error(function(data, status, headers, config) {});

}]);
