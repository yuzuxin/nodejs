module.exports = function main(number){
    for(number = 99; number >2 ; number --){
        result += number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
        "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.\n"
    }
}
module.exports = function main(number){
    let result = "";
     if(number == 2){
         result += "2 bottles of beer on the wall, 2 bottles of beer.\n" +
         "Take one down and pass it around, 1 bottle of beer on the wall.\n";
       }
     if(number == 1){
         result += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
         "Take one down and pass it around, no more bottles of beer on the wall.\n";
       }
       if(number == 0){
         result += "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
       }
       return result;
       
   }





// exports.print = function print(number){
// 	let result = (number>=0) ? main(number) : result;
// 	return result;
// }

// exports.test = function test(number) {
//     if(number>1){
//         return number+' bottles of beer on the wall, '+number+' bottles of beer.Take one down and pass it around, '+(number-1)+' bottles of beer on the wall.';
//     }
//     if(number === 1){
//         return number+' bottles of beer on the wall, '+number+' bottles of beer.Take one down and pass it around, no more bottles of beer on the wall.';
//     }
//     if(number === 0){
//         return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
//     }
//     return '';
// };

// exports.print =function print(){
//      var str = '';
//      for(var i =99 ;i>=0 ;i--){
//          str+=this.main(i);
// //         str+='\n';
        
//      }
//      console.log(str);
//  };