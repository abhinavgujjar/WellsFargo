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
		template : "<input type='text' ng-model='sampleInfo' />{{prefix}} {{sampleInfo}} <br/><br/>",
		scope :{
			prefix : '=fix'
		}
	}    
})
.directive('hotelSummary', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/hotelSummary.html',
		scope : {
			targetHotel : "=h"
		}
	}
}).directive('rating', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/rating.html',
		scope: {
			score: "=",
			up : '&',
			down : '&'
		}
	}
}).directive('dateKeys', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            element.on('keydown', function(event) {
               if (isNumericKeyCode(event.keyCode) || isForwardSlashKeyCode(event.keyCode) || isNavigationKeycode(event.keyCode)) {
                   return true;
               }
               return false;
            });
        }

    }

    function isNumericKeyCode(keyCode) {
        return (event.keyCode >= 48 && event.keyCode <= 57)
            || (event.keyCode >= 96 && event.keyCode <= 105);
    }
    function isForwardSlashKeyCode(keyCode) {
        return event.keyCode === 191;
    }
    function isNavigationKeycode(keyCode) {
        switch (keyCode) {
            case 8: //backspace
            case 35: //end
            case 36: //home
            case 37: //left
            case 38: //up
            case 39: //right
            case 40: //down
            case 45: //ins
            case 46: //del
                return true;
            default:
                return false;
        }
    }

})
.directive('preview', function(){
	return {
		restrict : 'E',
		template : '<img width="50px"/>',
		replace: true,
		link: function(scope, element, attrs, controller){
			attrs.$observe('imgLocation', function (newValue, oldValue){
				if ( newValue != oldValue)
				{
					attrs.$set('src', newValue)
				}
			})
		}
	}

});
