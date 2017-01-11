console.log("main.js here")
//define your app

var app = angular.module('nameOfApp', [])

//create controller(s)- as many as your want!
  app.controller('MainCtrl', function ($scope, $http) {
    console.log("main controller!")
    $scope.myVariable = "my variable"

  })
