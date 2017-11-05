'use strict';

module.exports = function countSameElements(collection) {
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
     
    if(collection[i].indexOf('[') >= 0)
      {
          arr["name"] = collection[i].split("[")[0];
          arr["summary"] = parseInt(collection[i].split("[")[1]);
          result.push(arr);        
          i++;
          continue;
      }
      else if(collection[i].indexOf(':') >= 0)
      {
          arr["name"] = collection[i].split(":")[0];
          arr["summary"] = parseInt(collection[i].split(":")[1]);
          result.push(arr);        
          i++;
          continue;
      }
      else if(collection[i].indexOf('-') >= 0)
      {
          arr["name"] = collection[i].split("-")[0];
          arr["summary"] = parseInt(collection[i].split("-")[1]);
          result.push(arr);
          i++;
          continue;
      }
      
      arr["name"]=collection[i];
      arr["summary"]=count;
      result.push(arr);
      i += count;
    }
    var res = [];
    for(var i = 0;i < result.length; ){
        var count = 0;
        var summary=0;
        var arr = {};
        for(var j = i; j < result.length; j++)
        {
            if (result[i]['name'] == result[j]['name'])
            {
                summary += result[j]['summary'];
                count++;
            }
        }
        arr["name"] = result[i]["name"];
        arr["summary"] = summary;
        res.push(arr);
        i += count;
    }
  return res;
  }
  
  
