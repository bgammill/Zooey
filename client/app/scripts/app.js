'use strict';

angular.module('clientApp', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tag/:id', {
        templateUrl: 'views/tag.html',
        controller: 'TagCtrl'
      })
      .when('/tag/add', {
        templateUrl: 'views/addTag.html',
        controller: 'TagCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
