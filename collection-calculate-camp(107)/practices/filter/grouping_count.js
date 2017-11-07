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
  
    //var i = 0;
   // var info = {};
   
    //while (true){
      //  if(i >= collection.length){
        //  break;
        //}
     //   info[collection[i]] = collection.lastIndexOf(collection[i]) - collection.indexOf(collection[i]) + 1;
       // i = collection.lastIndexOf(collection[i]) + 1;
    //}
}

module.exports = grouping_count;
