    /**
     * https://swapi.co/
     * All the Star Wars data you've ever wanted:
     * Planets, Spaceships, Vehicles, People, Films and Species
     * From all SEVEN Star Wars films
     * Now with The Force Awakens data!
    */
    
(function () {
	'use strict';

	angular.module('starwars')
	.factory('starWarsApi', ['$q', '$http', function ($q, $http) {

		var urlBase = 'http://swapi.co/api/';

		function getPeople(pageNum) {
			var deferred = $q.defer();			
			$http.get(urlBase + 'people?page='+ pageNum).then(function (resp) {
				if (resp.status === 200) {
					deferred.resolve(resp.data);
				}
				else {
					deferred.reject(resp.statusText);
				}
			});		
			return deferred.promise;
		}
		
		function getPerson(id) {
			var deferred = $q.defer();			
			$http.get(urlBase + 'people/' + id).then(function (data) {
				if (resp.status === 200) {
					deferred.resolve(resp.data.results);
				}
				else {
					deferred.reject(resp.statusText);
				}
			});
			
			return deferred.promise;
		}

		return {
			getPeople: getPeople,
			getPerson: getPerson
		};
	}]);
})();