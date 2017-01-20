var angular = require('angular')

var emailApp = angular.module('emailApp')

emailApp.factory('listEmailsService', ['$http', '$q', function ($http, $q) {
	var service = {
		// TODO: test
		get: () => {

			var deferred = $q.defer();

			$http.get('/api/emails.json',{})
				.then((response) => {
					deferred.resolve(
						response.data.collection.items
					);
				}, (response) => {
					deferred.reject(response);
				});

			return deferred.promise;
		}
	}

	return service
}])