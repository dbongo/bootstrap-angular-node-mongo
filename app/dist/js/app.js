'use strict';

var app = angular.module('app', ['ngRoute', 'appControllers', 'appServices', 'appDirectives', 'appFilters']);
var appControllers = angular.module('appControllers', []);
var appServices = angular.module('appServices', []);
var appDirectives = angular.module('appDirectives', []);
var appFilters = angular.module('appFilters', []);
appControllers.controller('MyCtrl', ['$scope', '$http', '$location',
	function MyCtrl($scope, $http, $location) {
			
	}
]);



appServices.factory('MyService', function() {
	return {};
});