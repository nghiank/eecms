'use strict';

angular.module('eecmsApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});


angular.module('eecmsApp', ['ngRoute']).run(function($rootScope, $location){
  var routeForEveryOne = [
    '/login'
  ];

  var routeAccessible = function(route) {
    return _.find(routeForEveryOne, function(eachRoute) {
            _.str.startWith(route, eachRoute);
           });
  };
});
