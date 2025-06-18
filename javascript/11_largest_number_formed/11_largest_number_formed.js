function formLargestNumber(arr) {
  //write your implementation here
  //! converting the element into a string array
  const strArr = arr.map(String);
  const n = strArr.length;
  // ! checking if all element coming as "0"
  if (strArr.every((s) => s === "0")) {
    return "0";
  }

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      // Comparison ij and ji
      if (strArr[j] + strArr[i] > strArr[i] + strArr[j]) {
        // swap
        let temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
      }
    }
  }
  return strArr.join("");
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);
module.exports = formLargestNumber;
