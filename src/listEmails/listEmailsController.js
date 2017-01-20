var angular = require('angular')

var emailApp = angular.module('emailApp')

emailApp.controller('EmailListController', [
    '$scope',
    'listEmailsService',
    '$window',
    ($scope, listEmailsService, $window) => {

        listEmailsService.get().then((data) => {
            $scope.emails = data;
        }, () => {
            // TODO
            $window.alert("Fetching emails failed");
        })
    }
])