'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hotels', {templateUrl: 'partials/hotels.html', controller: 'hotelsController'});
  $routeProvider.when('/details', {templateUrl: 'partials/details.html', controller: 'detailsController'});
  $routeProvider.when('/new', {templateUrl: 'partials/newHotel.html', controller: 'newHotelController'});
  $routeProvider.when('/sample', {templateUrl: 'partials/sample.html', controller: 'sampleController'});
  $routeProvider.otherwise({redirectTo: '/hotels'});
}]);
