  app.controller('ListCtrl', function ($scope, $routeParams, myFactory) {
    console.log("list controller!")

    $scope.thatNumber = $routeParams.someNumber

    console.log("myFactory", myFactory)

    myFactory.getListItems()
    .then((val)=>{
      console.log("then", val.list)
      $scope.list = val.list
    })


  })