const repeatString = function(string, number) {
	var new_string = '';
    var i;
  for (i = number; i >= 1; i--) {
  	new_string += string;
  }
  return new_string;
}
module.exports = repeatString
