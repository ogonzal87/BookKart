var MyApp = angular.module('MyApp', ['ngRoute']);

MyApp.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '../views/home.html',
      controller: 'homeController'
    })
    .when('/kart', {
      templateUrl: '../views/kart.html',
      controller: 'kartController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});