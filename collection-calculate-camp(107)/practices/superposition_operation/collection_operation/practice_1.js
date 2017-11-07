'use strict';

function hybrid_operation(collection) {
var sum = [];
for(var i = 0;i < collection.length; i++)
{
  collection[i] = collection[i] * 3 + 2;

}
console.log(collection)
return eval(collection.join('+'));
}

module.exports = hybrid_operation;

