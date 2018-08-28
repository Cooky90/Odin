const removeFromArray = function(array, ...args) {
  var new_array = array.filter(num => !args.includes(num));
  return new_array;
}

module.exports = removeFromArray
