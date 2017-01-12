app.factory('myFactory', function($http) { 
  console.log("myFactory"); 

  function getListItems() {
    return new Promise(function(resolve, reject) {
      $http.get(`list.json`)
      .then(function(val){
        console.log("list.json", val.data)
        resolve(val.data)
      })
    })
  }

  return getListItems();
});
