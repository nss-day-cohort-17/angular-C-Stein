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
  })
//create controller(s)- as many as your want!
  app.controller('MainCtrl', function ($scope, $http) {
    console.log("main controller!")
    $scope.myVariable = "my variable"

  })
  
  app.controller('ListCtrl', function ($scope, $http) {

    console.log("list controller!")

  })

