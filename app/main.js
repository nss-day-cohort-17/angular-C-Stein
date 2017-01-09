console.log("main.js here")
//define your app

var app = angular.module('nameOfApp', ['ngRoute'])

//configure your app (once)
app.config(($routeProvider) => {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html',
      })
      .when('/list', {
        controller: 'ListCtrl',
        templateUrl: 'partials/list.html',
      }) 
      .when('/list/:someNumber', {
        controller: 'ListCtrl',
        templateUrl: 'partials/list.html',
      })
      .otherwise ({
        redirectTo: '/'
      })
  })
