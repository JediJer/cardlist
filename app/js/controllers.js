'use strict';

/* Controllers */

var cardlistControllers = angular.module('cardlistControllers', []);

cardlistControllers.controller('CardSetCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('cards/sets.json').success(function(data) {
			$scope.sets = data;
		});
	}]);

cardlistControllers.controller('CardListCtrlLS', ['$scope', '$http',
	function($scope, $http) {
  	$http.get('cards/lscards.json').success(function(data) {
    	$scope.cards = data;
	  });
	}]);

cardlistControllers.controller('CardListCtrlDS', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('cards/dscards.json').success(function(data) {
			$scope.cards = data;																								
		});
	}]);

cardlistControllers.controller('CardDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('cards/' +$routeParams.cardId + '.json').success(function(data) {
			$scope.card = data;
		});
	}]);

