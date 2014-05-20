'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('hotelsController', ['$scope', function($scope) {

	$scope.hotels = [
	{
		name : 'Taj Banjara',
		rate : 15000,
		location : 'Banjara Hills',
		image: 'http://i.imgur.com/vmviDYS.jpg'
	},
	{
		name : 'Mariott',
		rate : 35000,
		location : 'Tank Bund',
		image: 'http://i.imgur.com/ib6YKfv.jpg'
	},
	{
		name : 'West Inn',
		rate : 25000,
		location : 'Mindspace',
		image: 'http://i.imgur.com/e6CnwW4.jpg'
	},
	{
		name : 'Novotel',
		rate : 45000,
		location : 'Hitech City',
		image: 'http://i.imgur.com/fsmniCe.jpg'
	},

	]

}])
.controller('MyCtrl2', ['$scope', function($scope) {

}]);
