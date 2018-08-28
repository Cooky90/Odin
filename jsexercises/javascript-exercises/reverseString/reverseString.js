const reverseString = function(string) {
  var new_string = '';

  for (var i = string.length - 1; i >= 0; i--) {
    new_string += string[i];
  }
  return new_string;
}

module.exports = reverseString
