'use strict';

function compute_average(collection) {
  var sum=0;
  for (var i = 0; i < collection.length; i++) {
      sum+=parseInt(collection[i]);
  };
  var avg=(sum/collection.length);
  return(avg);
}
module.exports = compute_average;

