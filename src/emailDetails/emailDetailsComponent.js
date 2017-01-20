var angular = require('angular')

var emailApp = angular.module('emailApp')

emailApp.component('emailDetails', {
    templateUrl: 'emailDetails/emailDetails.html',
    bindings: {
        email: '='
    },
    controller: [ '$scope', ($scope) => {
        $scope.html = true;

        $scope.toggleText = () => {
            $scope.html = false;
        }

        $scope.toggleHtml = () => {
            $scope.html = true;
        }
    }]
})