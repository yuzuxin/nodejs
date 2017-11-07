'use strict';

function double_to_one(collection) {
var result = collection.concat.apply([1,2], [3, 4],collection);
console.log(result);
return result;
}

module.exports = double_to_one;
