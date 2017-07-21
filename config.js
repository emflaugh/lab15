var app = angular.module('madLibs');

app.config(function($routeProvider){

  $routeProvider
  .when('/form', {
    controller: 'inputCtrl',
    templateUrl: 'form.html'
  })
  .when('/display', {
    controller: 'outputCtrl',
    templateUrl: 'display.html'
  })
  .when('/home', {
    controller: 'routeCtrl',
    templateUrl: 'home.html'
  })
  .otherwise({ redirectTo: '/form'});
});
