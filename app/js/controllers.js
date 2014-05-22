'use strict';


angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', 'hotelDataProvider', '$rootScope', '$location',
	function($scope, hotelDataProvider, $rootScope, $location) {

		$scope.headerName = 'List of Hotels';


		$scope.upVote = function(hotel){
			hotel.rating++;
		}

		$scope.downVote= function(hotel){
			hotel.rating--;
		}

		// $scope.hotels = [{
		// 	name : 'taj',
		// 	rating : 4},
		// 	{
		// 	name : 'radisson',
		// 	rating : 4}
		// 	];

		hotelDataProvider.getHotels().then(function (data){
			$scope.hotels = data;
		});

		$scope.selectHotel = function(hotel){
			$rootScope.selectedHotel = hotel;
			$location.path('details');
		}

		$scope.orderFunction = function(input)
		{
			return input.rating;
		}


	}])
.controller('newHotelController', ['$scope', '$http', function($scope, $http) {
	$scope.showData = function(hotel, hotelForm)
	{
		if ( hotelForm.$valid)
		{
			console.log(hotel);
			$http.post('https://blazing-fire-1297.firebaseio.com/hotels.json', hotel);
		}
		


	}
}])
.controller('detailsController', ['$scope', '$routeParams','hotelDataProvider', 
	function($scope, $routeParams, hotelDataProvider) {

		$scope.hotel = $scope.selectedHotel;

		// hotelDataProvider.getDetail($routeParams.id).then(function(data){
		// 	$scope.hotel = data;
		// })	
}

])
.controller('sampleController', 
	function() {

	}

	);
