'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('echo', function (){
    return {
      restrict : 'AEC',
      template : "<input type='text' ng-model='sampleInfo' />{{sampleInfo}}<br/><br/>",
      scope :{

      }
    }    
  })
  .
  directive('preview', function(){
  	return {
  		restrict: 'AEC',
  		template : '<img width="50px"/>',
      replace: true,
      link: function(scope, element, attrs, controller) {
           attrs.$observe('imgLocation', function(newValue, oldValue) {
               if (newValue !== oldValue) {
                   attrs.$set('src', newValue);
               }
           });
       }
  		// link: function(scope, element, attrs, controller){
  		// 	attrs.$observe('imgLocation', function(newValue, oldValue){
  		// 		if ( newValue != oldValue){
  		// 			attrs.$set('src', newValue);
  		// 		}
  		// 	})
  		// }
  	}
  });
