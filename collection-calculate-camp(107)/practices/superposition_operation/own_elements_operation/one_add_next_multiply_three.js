'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for(var i = 0; i < collection.length - 1; i++){
      result.push((collection[i] + collection[i + 1]) * 3);
  }
  return result;
  return [12,24,36,48,60,72,84,96,108,120];
}
module.exports = one_add_next_multiply_three;
