function groupBy(arr, key) {
  // Your implementation
  if (!Array.isArray(arr) || !arr.length) {
    return {};
  }

  return arr.reduce((acc, currentItem) => {
    const keyValue = currentItem[key];

    if (!keyValue) {
      return acc;
    }

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(currentItem);

    return acc;
  }, {});
}
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
module.exports = groupBy;
