function chunkArray(arr, n) {
  // Your implementation
  if (n <= 0) throw new Error("Chunk size must be a positive integer");
  const result = [];
  for (let i = 0; i < arr.length; i = i + n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 5);
module.exports = chunkArray;
