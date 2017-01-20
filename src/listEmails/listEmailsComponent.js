
var angular = require('angular')

var emailApp = angular.module('emailApp')

emailApp.component('listEmails', {
  	templateUrl: "listEmails/listEmails.html",
  	bindings: {
        emails: '='
  	},
    controller: () => {
  	}
})