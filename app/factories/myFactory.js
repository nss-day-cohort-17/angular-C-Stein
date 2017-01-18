app.factory('myFactory', function($http) { 
  console.log("myFactory"); 

  return {
    getListItems : () => {
        return $http.get(`list.json`)
        .then(function(val){
          console.log("list.json", val.data)
          return val.data
    })
    }
  }

});
