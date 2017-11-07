'use strict';

function get_letter_interval(number_a, number_b) {
  var words = ['','a','b','c','d','e'];
  var result = [];
  if(number_a < number_b)
  {
    for (var i = number_a;i <= number_b;i++)
    {
      result.push(words[i]);
    }
  }
  else if(number_a > number_b)
  {
    for (i = number_a;i >= number_b;i--)
    {
      result.push(words[i]);
    }
  }
  else if(number_a == number_b)
  {
    result.push(words[number_a]);
  }
    return result;
}

module.exports = get_letter_interval;
