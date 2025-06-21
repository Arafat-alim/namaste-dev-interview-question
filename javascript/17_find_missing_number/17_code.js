function findMissingNumber(nums) {
  // Your implementation

  //! sum of all natural numbers upto n
  const n = nums.length;
  const s1 = (n * (n + 1)) / 2;

  //! sum of all numbers given in an array
  const s2 = nums.reduce((acc, curr) => acc + curr, 0);
  return Math.abs(s1 - s2);
}

//For the purpose of user debugging.
findMissingNumber([3, 0, 1]);

module.exports = findMissingNumber;
