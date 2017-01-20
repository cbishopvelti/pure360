var angular = require('angular')
var ngRoute = require('angular-route')
var ngSanitize = require('angular-sanitize')

var emailApp = angular.module('emailApp', ["ngRoute", "ngSanitize"]);

require('./listEmails/listEmailsController');
require('./listEmails/listEmailsService');
require('./listEmails/listEmailsComponent');

require('./emailDetails/emailDetailsController')
require('./emailDetails/emailDetailsService');
require('./emailDetails/emailDetailsComponent');

emailApp.config([
    '$routeProvider',
    '$locationProvider',
    ($routeProvider, $locationProvider) => {
        // TODO: test
        $routeProvider.when("/", {
            template: '<div ng-controller="EmailListController">\
                <list-emails emails="emails"></list-emails>\
            </div>'
        }).when("/details/:emailId", {
            template: '<div ng-controller="EmailDetailsController">\
                <email-details email="email"></email-details>\
            </div>'
        })

        $locationProvider
            .html5Mode({
                enabled: false,
                requireBase: false
            });
    }
])





