function count_same_elements(collection) {
  var result =[];
  for (var i = 0; i < collection.length;)
  {
    var count = 0;
    var arr = {};
    for (var j = i; j < collection.length; j++)
    {
      if (collection[i] == collection[j])
      {
        count++;
      } 
    }
      if(collection[i].indexOf('-') > 0)
      {
          arr["key"] = collection[i].split("-")[0];
          arr["count"] = parseInt(collection[i].split("-")[1]);
          result.push(arr);
          i++;
          continue;
      }
      arr["key"]=collection[i];
      arr["count"]=count;
      result.push(arr);
      i += count;
    }
    return result;
  }
  

module.exports = count_same_elements;
