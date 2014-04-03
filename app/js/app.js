'use strict';


// Declare app level module which depends on filters, and services
var cardlistApp = angular.module('cardlistApp', [
   'ngRoute',
   'cardlistControllers'
 ]);

cardlistApp.config(['$routeProvider',
   function($routeProvider) {
     $routeProvider.
       when('/cards', {
         templateUrl: 'partials/card-list.html'
       }).
       when('/cards/:cardId', {
         templateUrl: 'partials/card-detail.html',
         controller: 'CardDetailCtrl'
       }).
       otherwise({
         redirectTo: '/cards'
       });
   }]);