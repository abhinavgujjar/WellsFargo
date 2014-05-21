'use strict';


angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', 'hotelDataProvider', 
	function($scope, hotelDataProvider) {

	$scope.headerName = 'List of Hotels';

	
	$scope.upVote = function(hotel){
		hotel.rating++;
	}

	$scope.downVote= function(hotel){
		hotel.rating--;
	}

	hotelDataProvider.getHotels().then(function (data){
		$scope.hotels = data;
	});

}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);
