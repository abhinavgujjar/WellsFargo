'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.test = 'Working';
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
