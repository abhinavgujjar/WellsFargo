'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
value('version', '0.1').
factory('hotelDataProvider', ['$http', '$q', function dataProvider($http, $q){

	var dataProvider = {
		getHotels : function(){

			var deferred = $q.defer();

			$http({method: 'GET', url:'https://blazing-fire-1297.firebaseio.com/hotels.json'}).
			success(function(data, status, headers, config) {
				
				deferred.resolve(data);
			}).
			error(function(data, status, headers, config) {
				deferred.reject();
			});

			return deferred.promise;
		},
		getDetail: function(id){
			var deferred = $q.defer();

			$http({method: 'GET', url:'https://blazing-fire-1297.firebaseio.com/hotels/' + id + '.json'}).
			success(function(data, status, headers, config) {
				
				deferred.resolve(data);
			}).
			error(function(data, status, headers, config) {
				deferred.reject();
			});

			return deferred.promise;	
		}
	}

	return dataProvider;


}]);
