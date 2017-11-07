'use strict';

function average_uneven(collection) {
  var sum=0;
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if(collection[i]%2 != 0)
    {
      sum+=parseInt(collection[i]);
      result.push(collection[i]);
    }
      
      
  };
  var avg = Math.ceil(sum / result.length);
  
  return avg;
}

module.exports = average_uneven;
