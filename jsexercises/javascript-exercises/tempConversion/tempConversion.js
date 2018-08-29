const ftoc = function(tempreture) {
  var farenheit = 0;
  
  farenheit = (tempreture - 32) * 5/9;
  return Number(farenheit.toFixed(1));
}

const ctof = function(tempreture) {
  var farenheit = 0;
  
  farenheit = tempreture * 9/5 + 32;
  return Number(farenheit.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
