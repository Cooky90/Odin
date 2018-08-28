const removeFromArray = function(array,remove_item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == remove_item) {
      delete array[i];
    }
  }
  return array;
}

module.exports = removeFromArray
