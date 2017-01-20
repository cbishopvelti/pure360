var angular = require('angular')

var emailApp = angular.module('emailApp')

emailApp.factory('emailDetailsService', ['$http', '$q', ($http, $q) => {
	var service = {
		// TODO: test
		get: (id) => {

			var deferred = $q.defer();

			$http.get('/api/email-' + id + '.json',{})
				.then((response) => {
					deferred.resolve(
						response.data
					);
				}, (response) => {
					deferred.reject(response);
				});

			return deferred.promise;
		}
	}

	return service
}])