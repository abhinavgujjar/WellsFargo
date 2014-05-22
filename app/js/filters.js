'use strict';

/* Filters */

angular.module('myApp.filters', []).
filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]).
filter('toDollars', function(){
 return function(rupees){
  return rupees / 60;
}
}).
filter("orderByPriority", function() {
  return function(input) {
    var sorted = [];
    if (input) {
      if (!input.$getIndex || typeof input.$getIndex != "function") {
          // input is not an angularFire instance
          if (angular.isArray(input)) {
            // If input is an array, copy it
            sorted = input.slice(0);
          } else if (angular.isObject(input)) {
            // If input is an object, map it to an array
            angular.forEach(input, function(prop) {
              sorted.push(prop);
            });
          }
        } else {
          // input is an angularFire instance
          var index = input.$getIndex();
          if (index.length > 0) {
            for (var i = 0; i < index.length; i++) {
              var val = input[index[i]];
              if (val) {
                if (angular.isObject(val)) {
                  val.$id = index[i];
                }
                sorted.push(val);
              }
            }
          }
        }
      }
      return sorted;
    }})
;
