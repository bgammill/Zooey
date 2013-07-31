'use strict';

angular.module('clientApp')
  .controller('TagCtrl', function ($scope, $routeParams, tagFactory) {
  	$scope.pities = tagFactory.getPities($routeParams.id);
  });