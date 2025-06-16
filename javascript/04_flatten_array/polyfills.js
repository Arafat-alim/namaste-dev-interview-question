const arr = [1, [12, 32, 12, [12, 45, 123, [54]]]];

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function (depth = 1) {
    function flatter(arr, depth) {
      if (depth < 1) {
        return arr.slice();
      }
      return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
          acc.push(...flatter(val, depth - 1));
        } else {
          acc.push(val);
        }
        return acc;
      }, []);
    }

    return flatter(this, depth);
  };
} else {
  console.log("Flatten method already defined");
}

console.log(arr.flatten(Infinity));
