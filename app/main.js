console.log("main.js here")
//define your app

var app = angular.module('nameOfApp', ['ngRoute'])

//configure your app (once)
app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('');

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
//create controller(s)- as many as your want!
  app.controller('MainCtrl', function ($scope, $http) {
    console.log("main controller!")
    $scope.myVariable = "here it is!"

  })
  app.controller('ListCtrl', function ($scope, $http, $routeParams) {
    console.log("list controller!")

    $scope.thatNumber = $routeParams.someNumber


    $http.get(`list.json`)
    .then(function(val){
      console.log("list.json", val.data)
      $scope.list = val.data.list
      //$scope.list.push("another thing!")
    })

})