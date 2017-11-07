'use strict';

function compute_median(collection) {
  var result = []; var result1 = []; var result2 = [];
  for(var i = 0;i < collection.length;i++)
  {
    if(collection[i]%2 == 1)
    {
      result.push(collection[i]);
    }
  }
  var ary = result.sort(function (a,b) {
    return a - b;
    });
    var lowMiddle = Math.floor((ary.length - 1) / 2);
    var highMiddle = Math.ceil((ary.length - 1) / 2);
    console.log(result)
    return (Number(ary[lowMiddle]) + Number(ary[highMiddle])) / 2;
  }
module.exports = compute_median;


