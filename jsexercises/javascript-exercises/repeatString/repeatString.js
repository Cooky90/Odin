const repeatString = function(string, number) {
	if (number < 0) {
		return "ERROR";
	}
	var new_string = '';
    var i;
  for (i = number; i >= 1; i--) {
  	new_string += string;
  }
  return new_string;
}
module.exports = repeatString
