module.exports = function main(number){
    var str = "";
    for(number = 99; number > 2 ; number --){
        str += number + " bottles of beer on the wall, " + number + " bottles of beer.\n" +
        "Take one down and pass it around, " + (number - 1) + " bottles of beer on the wall.\n"
    }
    console.log(str);
    return str;
}
module.exports = function main(number){
    let result = "";
     if(number === 2){
         result += "2 bottles of beer on the wall, 2 bottles of beer.\n" +
         "Take one down and pass it around, 1 bottle of beer on the wall.\n";
       }
     if(number === 1){
         result += "1 bottle of beer on the wall, 1 bottle of beer.\n" +
         "Take one down and pass it around, no more bottles of beer on the wall.\n";
       }
       if(number === 0){
         result += "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
       }
       return result;
       
   }

