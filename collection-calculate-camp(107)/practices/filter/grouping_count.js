'use strict';

function grouping_count(collection) {
  var result =[]; 
  collection.sort();
  for (var i = 0; i < collection.length;)
  {
    var count = 0;
    for (var j = i; j < collection.length; j++)
    {
      if (collection[i] == collection[j])
      {
        count++;
      }
    }
    result.push(count);
    i += count;
  }
  console.log(result);
    return result;

}

module.exports = grouping_count;
