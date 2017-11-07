'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  for(var i = 1; i < collection_a.length; i++){
  for(var j = 0; j < collection_b.length; j++){
  var repeat = false;
  if(collection_a[i] == collection_b[j]){
     repeat = true;
     break;
    }
   }
   if(!repeat){
    result.push(collection_a[i]);
   }
  }
  return result;
}

module.exports = choose_no_common_elements;
