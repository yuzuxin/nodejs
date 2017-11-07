'use strict';

function hybrid_operation_to_uneven(collection) {
  var sum = [];
  var result = [];
  for(var i = 0;i < collection.length; i++)
  {
    if(collection[i]%2 != 0)
    {
      collection[i] = collection[i] * 3 + 5;
      result.push(collection[i])
    }
  
  }
  console.log(result)
  return eval(result.join('+'));
  }
  

module.exports = hybrid_operation_to_uneven;

