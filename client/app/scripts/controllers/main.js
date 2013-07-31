'use strict';

angular.module('clientApp')
  .controller('MainCtrl', function($scope, tagFactory, socketFactory) {

  	$scope.randomTag = tagFactory.getRandomTag();

  	// socketFactory.emit('join:room', {tag: $scope.randomTag});

  	// socketFactory.on('init', function(data) {
  	// 	socketFactory.emit('newUser', data);
  	// 	console.log('init! ' + data);
  	// });

  	// socketFactory.on('newUser', function(data) {
  	// 	console.log('new user! ', data);
  	// });
  });