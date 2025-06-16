function flattenArray(arr) {
  // Your implementation

  return arr.flat(Infinity);
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

module.exports = flattenArray;
