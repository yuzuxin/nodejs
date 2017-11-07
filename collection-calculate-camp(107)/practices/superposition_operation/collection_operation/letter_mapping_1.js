'use strict';

function even_to_letter(collection) {
  var words = ['','a','b','c','d','e','f','g','h','i','j'];
  var result = [];
  for(var i = 0;i < collection.length;i++)
  {
    if(collection[i]%2 == 0)
    {
      result.push(words[collection[i]]);
    }
  }
  console.log(result);
  return result;
}

module.exports = even_to_letter;
