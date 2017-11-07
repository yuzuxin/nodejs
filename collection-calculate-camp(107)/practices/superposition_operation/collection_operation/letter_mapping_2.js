'use strict';

function average_to_letter(collection) {
  var words = ['','a','b','c','d','e','f','g','h','i','j'];
  var sum=0;
  for (var i = 0; i < collection.length; i++) {
      sum+=parseInt(collection[i]);
      
  };
  var avg = Math.ceil(sum / collection.length);
  return words[avg];
}


module.exports = average_to_letter;

