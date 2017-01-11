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
    $scope.myVariable = "here it is!"

    $scope.onClickFunction = function(){
      console.log("you clicked the button, didn't you?")
    } 

  })
  app.controller('ListCtrl', function ($scope, $http) {
    console.log("list controller!")

    $http.get(`list.json`)
    .then(function(val){
      console.log("list.json", val.data)
      $scope.list = val.data.list
      //$scope.list.push("another thing!")
    })

  })

//create directives - as many as you want!
app.directive("myDirective", function() {

});

//create factories - as many as you want!
app.factory('myFactory', function($sessionStorage) { 

});