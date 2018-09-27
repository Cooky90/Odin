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

function sum () {
	
}

function multiply () {
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}