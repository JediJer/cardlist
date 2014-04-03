'use strict';

/* Controllers */

var cardlistControllers = angular.module('cardlistControllers', []);

cardlistControllers.controller('CardSetCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('cards/sets.json').success(function(data) {
			$scope.sets = data;
			$scope.set = $scope.sets[0];
		});
	}]);

cardlistControllers.controller('CardListCtrlLS', ['$scope', '$http',
	function($scope, $http) {
  	$http.get('cards/Premiere_ls.json').success(function(data) {
    	$scope.cards = data;
	  });
	}]);

cardlistControllers.controller('CardListCtrlDS', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('cards/Premiere_ds.json').success(function(data) {
			$scope.cards = data;																								
		});
	}]);

cardlistControllers.controller('CardDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('cards/' +$routeParams.cardId + '.json').success(function(data) {
			$scope.card = data;
		});
	}]);

