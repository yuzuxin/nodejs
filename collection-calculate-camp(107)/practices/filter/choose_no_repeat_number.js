'use strict';

function choose_no_repeat_number(collection) {
  var result = [collection[0]];
  for(var i = 1; i < collection.length; i++){
   var repeat = false;
   for(var j = 0; j < result.length; j++){
    if(collection[i] == result[j]){
     repeat = true;
     break;
    }
   }
   if(!repeat){
    result.push(collection[i]);
   }
  }
  return result;
}

module.exports = choose_no_repeat_number;
