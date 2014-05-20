'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', function($scope) {
	$scope.headerName = 'List of Hotels';

	$scope.showHotelName = function(hotel)
	{
		alert(hotel.name);
	}

	$scope.hotels = [
	{
		name : 'Taj Banjara',
		rate : 15000,
		location : 'Banjara Hills',
		image: 'http://i.imgur.com/vmviDYS.jpg',
		rating: 10
	},
	{
		name : 'Mariott',
		rate : 35000,
		location : 'Tank Bund',
		image: 'http://i.imgur.com/ib6YKfv.jpg',
		rating: 2
	},
	{
		name : 'West Inn',
		rate : 25000,
		location : 'Mindspace',
		image: 'http://i.imgur.com/e6CnwW4.jpg',
		className: 'red',
		rating: 4
	},
	{
		name : 'Novotel',
		rate : 45000,
		location : 'Hitech City',
		image: 'http://i.imgur.com/fsmniCe.jpg',
		rating: 7
	},

	]

}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);
