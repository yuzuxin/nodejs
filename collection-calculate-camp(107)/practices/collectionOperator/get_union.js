'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a.concat(collection_b);
  var res = [result[0]];
  for(var i = 1; i < result.length; i++){
   var repeat = false;
   for(var j = 0; j < res.length; j++){
    if(result[i] == res[j]){
     repeat = true;
     break;
    }
   }
   if(!repeat){
    res.push(result[i]);
   }
  }
  console.log(res);
  return res;
}

module.exports = get_union;

