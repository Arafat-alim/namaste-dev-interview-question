function removeDuplicates(arr) {
  // your code here

  return arr.filter((element, index) => arr.indexOf(element) === index);
}
removeDuplicates([1, 2, 2, 3, 4, 4]);
module.exports = removeDuplicates;
