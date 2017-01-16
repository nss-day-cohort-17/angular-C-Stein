console.log("main.js here")
//define your app

var app = angular.module('nameOfApp', [])

//create controller(s)- as many as your want!
  app.controller('MainCtrl', function ($scope) {
    console.log("main controller!")
    $scope.myVariable = "someone else's variable"

  })
