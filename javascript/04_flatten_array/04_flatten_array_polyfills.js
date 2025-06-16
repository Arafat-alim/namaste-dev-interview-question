function flattenArray(arr) {
  // Your implementation
  // considering the depth should be infinity.

  function flatter(arr, depth = Infinity) {
    if (depth <= 0) {
      return arr.slice();
    }

    return arr.reduce((acc, currentValue) => {
      if (Array.isArray(currentValue)) {
        acc.push(...flatter(currentValue, depth - 1));
      } else {
        acc.push(currentValue);
      }
      return acc;
    }, []);
  }

  return flatter(arr);
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);

module.exports = flattenArray;
