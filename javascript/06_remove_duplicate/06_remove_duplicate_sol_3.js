function removeDuplicates(arr) {
  // your code here
  const seen = new Set();

  return arr.reduce((acc, currentVal) => {
    if (!seen.has(currentVal)) {
      seen.add(currentVal);
      acc.push(currentVal);
    }
    return acc;
  }, []);
}
removeDuplicates([1, 2, 2, 3, 4, 4]);
module.exports = removeDuplicates;
