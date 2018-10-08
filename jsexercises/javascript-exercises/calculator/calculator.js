function add (...args) {
	let totalSum = args.reduce((pVal,cVal) => cVal += pVal, 0);
	return totalSum;
}

function subtract (...args){
let sum =args.reduce((accumulator,currentValue) =>{
	return accumulator - currentValue;
})
return sum;
}

function sum(array){
var sum = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
return sum;
}

function multiply(array){
var sum = array.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
});
return sum;
}

function power(base, exponent){
	var count = (exponent - 2);
	var initialValue = (base * base);
	while (count > 0){
  		initialValue *= base 
    count -= 1;
	}
  return initialValue;
}

function factorial(number) {
  var count = number;
  var initialValue = (count * (count - 1));
	if (count == 1 || count == 0) {
		return 1;
	} else {
		count -= 2;
		while (count > 1){
			initialValue *= count;
        	count -= 1;
		}
    return initialValue;
	}	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}