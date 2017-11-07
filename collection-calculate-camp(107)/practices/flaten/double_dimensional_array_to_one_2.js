'use strict';

function double_to_one(collection) {
  var res = collection.concat.apply([1, 2, 3], [5, 2, 1, 4], [2, 1]);
  var result = [res[0]];
  for(var i = 1; i < res.length; i++){
   var repeat = false;
   for(var j = 0; j < result.length; j++){
    if(res[i] == result[j]){
     repeat = true;
     break;
    }
   }
   if(!repeat){
    result.push(res[i]);
   }
  }

  console.log(result);
  return result;
}

module.exports = double_to_one;
