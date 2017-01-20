var angular = require('angular')

var emailApp = angular.module('emailApp')

emailApp.controller('EmailDetailsController', [
    '$scope' ,
    '$routeParams',
    'emailDetailsService',
    '$window',
    (
        $scope,
        $routeParams,
        emailDetailsService,
        $window
    ) => {

        emailDetailsService.get($routeParams['emailId'])
            .then((data) => {
                $scope.email = data
            }, (response) => {
                $window.alert("Fetch failed")
            });
    }
])