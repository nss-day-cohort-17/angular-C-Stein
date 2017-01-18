app.factory('simpleFactory', function(){
  
  var myVariable;

  return {
    //getter
    getVariable: function(){
      if(myVariable){
        return myVariable
      } else {
        return "no variable has been set"
      }
    },
    //setter
    setVariable: function(newVariable){
      myVariable = newVariable;
    }
  }
})