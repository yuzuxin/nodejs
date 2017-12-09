 module.exports = function main(inputs) {
     var result = []; 
     var datbase = require('../main/datbase');
     var loadAllItems = datbase.loadAllItems();
     var loadPromotions = datbase.loadPromotions();
     var str = '***<没钱赚商店>购物清单***\n';
     for (var i = 0 ; i < inputs.length ;){
         var arr = {};
         var count = 0;
         for (var j = i; j < inputs.length; j++){
           if (inputs[i] == inputs[j]){
             count++;
           } 
         }
         if(inputs[i].indexOf('-') > 0){
             arr.code = inputs[i].split("-")[0];
             arr.count = parseInt(inputs[i].split("-")[1]);
             result.push(arr);
             i++;
             continue;
         }
         arr.code = inputs[i];
         arr.count = count;
         result.push(arr);
         i += count;
     }
     for(var i = 0; i < result.length; i++){
         for(var j = 0 ; j < loadAllItems.length; j++){
             if(result[i].code == loadAllItems[j].barcode){
                 result[i].sum = result[i].count*loadAllItems[j].price;
                 result[i].unit = loadAllItems[j].unit;
                 result[i].price = loadAllItems[j].price;
                 result[i].name = loadAllItems[j].name;
             }
         }
     }
     return result;
     console.log(result);
      //优惠
      for(var i =0; i < result.length; i++){
          for(var j = 0; j < loadPromotions.length;j++){
              var barcodes = loadPromotions[j].barcodes;
              if(barcodes.indexOf(result[i].code) > 0){
                  result[i].type = loadPromotions[j].type;
              }
          }
      }
      console.log(result);
      return result;
      //打印购物清单
      var sum = 0;
      var promotions = 0;
      for(var i = 0; i < result.length; i++){
          sum += result[i].count * result[i].price;
          if(result[i].type == 'BUY_TWO_GET_ONE_FREE' && result[i].count >= 2){
             var promotion =result[i].price * (result[i].count -1); 
             promotions +=result[i].price;
             str += '名称：'+result[i].name+'，数量：'+result[i].count+result[i].unit+'，单价：'+result[i].price.toFixed(2)+'(元)，小计：'+promotion.toFixed(2)+'(元)\n'
         }else{
             str += '名称：'+result[i].name+'，数量：'+result[i].count+result[i].unit+'，单价：'+result[i].price.toFixed(2)+'(元)，小计：'+(result[i].price* result[i].count).toFixed(2)+'(元)\n'
         }
     }
     str+='----------------------\n' +'挥泪赠送商品：\n';
     for(var i =0 ;i< result.length ;i++){
         if(result[i].type == 'BUY_TWO_GET_ONE_FREE' && result[i].count >= 2){
              str +='名称：'+result[i].name+'，数量：'+1+result[i].unit+'\n'
         }
         
     }
     str+='----------------------\n';
     str+= '总计：'+(sum -promotions).toFixed(2)+'(元)\n';
     str+='节省：'+promotions.toFixed(2)+'(元)\n'
     str+='**********************';
     console.log(str);
    }
