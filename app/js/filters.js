'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).
  filter('toDollars', ['version', function(version) {
    return function(number) {
      return number / 60;
    };
  }])
  ;
