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
      .when('/list/:someVariable', {
        controller: 'DetailCtrl',
        templateUrl: 'partials/detail.html',
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
app.controller('ListCtrl', function ($scope, $http) {
  console.log("list controller!")

  $http.get(`list.json`)
  .then(function(val){
    console.log("list.json", val.data)
    $scope.list = val.data.list
    //$scope.list.push("another thing!")
  })

})

app.controller('DetailCtrl', function($scope, $routeParams, $http){
  console.log("detail controller!")
  $scope.thatNumber = $routeParams.someVariable


  $http.get(`list.json`)
  .then(function(val){
    console.log("list.json", val.data)
    let list = val.data.list
    $scope.selectedItem = list[$scope.thatNumber]
  })

})
