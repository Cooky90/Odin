const sumAll = function(number1,number2) {
	var sum_total = 0;
  
  if(number1 < 0 || number2 < 0) {
  	return "ERROR";
  } else if (typeof number1 != "number" || typeof number2 != "number"){
  	return "ERROR";
  }
  var smallest_number = '';
  var largest_number = '';
  
  if(number1 > number2){
  	largest_number = number1;
    smallest_number = number2;
  } else if (number2 > number1) {
    largest_number = number2;
    smallest_number = number1;
  } else {
  	largest_number = number1;
    smallest_number = number2;
  }
  
  while(smallest_number <= largest_number){
    sum_total += smallest_number;
    smallest_number += 1;
  }
  
  return sum_total;
  
}

module.exports = sumAll
