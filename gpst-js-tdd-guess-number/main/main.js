// Write your cade below:
module.exports = function main(random, input){
	let result = "";
	let collectionA = equal(random, input);
    let collectionB = numberEqual(random, input);
    return collectionA + collectionB;
};

//位置数字都相等
function equal(random, input){
	let collectionA = 0;
	for(let i=0;i<random.length;i++){
		if(random[i] === input[i]){
			collectionA++;
		}
    }
	return collectionA+"A";
}
//只有数字相等
function numberEqual(random, input){
	let collectionB = 0;
	for(let i in random){       
		for(let j in input){  
			if(random[i] === input[i]){
				break;
			}else if(random[i] === input[j]){
				collectionB ++;
			}
		}
	}
	return collectionB + "B";
}
