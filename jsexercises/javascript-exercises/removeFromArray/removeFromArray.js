const removeFromArray = function(array,remove_item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == remove_item) {
      array.splice(array[i] - 1,1);
    }
  }
  return array;
}

module.exports = removeFromArray
