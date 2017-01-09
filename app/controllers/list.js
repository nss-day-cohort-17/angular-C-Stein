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