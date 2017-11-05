'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var result =[];
  for (var i = 0; i < collectionA.length;i++)
  {
    for (var j = 0; j < objectB["value"].length; j++)
    {
      if (collectionA[i]["key"] == objectB["value"][j])
      {
          collectionA[i]["count"] -= Math.floor(collectionA[i]["count"]/3);
      }
    }
   
    result.push({key:collectionA[i]["key"],count:collectionA[i]["count"]})
  }
    return result;
}

