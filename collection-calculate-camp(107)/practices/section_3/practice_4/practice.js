function create_updated_collection(collection_a, object_b) {
  var result =[]; 
  var collectionC =[];
  for (var i = 0; i < collection_a.length;)
  {
    var count = 0;
    var arr = {};
    for (var j = i; j < collection_a.length; j++)
    {
      if (collection_a[i] == collection_a[j])
      {
        count++;
      } 
    }
      if(collection_a[i].indexOf('-') > 0)
      {
          arr["key"] = collection_a[i].split("-")[0];
          arr["count"] = parseInt(collection_a[i].split("-")[1]);
          collectionC.push(arr);
          i++;
          continue;
      }
      arr["key"]=collection_a[i];
      arr["count"]=count;
      collectionC.push(arr);
      i += count;
    }
    for (var i = 0; i < collectionC.length;i++)
    {
      for (var j = 0; j < object_b["value"].length; j++)
      {
        if (collectionC[i]["key"] == object_b["value"][j])
        {
            collectionC[i]["count"] -= Math.floor(collectionC[i]["count"]/3);
        }
      }
     
      result.push({key:collectionC[i]["key"],count:collectionC[i]["count"]})
    }
      return result;
  }
  

module.exports = create_updated_collection;
