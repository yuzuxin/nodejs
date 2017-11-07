'use strict';

function amount_even(collection) {
  var sum = [];
  var result = [];
  for(var i = 0;i < collection.length; i++)
  {
    if(collection[i]%2 == 0)
    {
      result.push(collection[i])
    }
  
  }
  console.log(result)
  return eval(result.join('+'));
  }

module.exports = amount_even;
