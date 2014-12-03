"use strict";

var module = angular.module("instagramPhotos",['ngResource', 'instagramFilter', 'ngSanitize']);



module.factory("Instagram", ["$resource", function( $resource){
	
	return $resource('http://www.wtmx.com/test/instagram/includes/ek_instagram.json', {}, {
		query: {method: 'GET'}
		
	});
}]);

module.controller("instagramPhotosController", function( $scope, $http, Instagram ){
	
	$scope.layout = "grid";
	
	$scope.posts = Instagram.query( );
	
	
});

module.directive('colorbox', function( ){
	return {
		restrict: 'AC',
		replace: 'false',
		link: function(scope, elem, attr){
		
			var elementClassObj = attr.class;
			
			var classes = elementClassObj.split(" ");
			
			$("." + classes[0]).colorbox({rel : classes[0], transition : 'fade', width : "75%", height : "75%"});
			
			
		}		
	};
});