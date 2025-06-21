### ✅ **Purpose**:

To find the **missing number** in a sequence of numbers from `0` to `n` (inclusive) where exactly **one number is missing**.

---

### 🧠 **High-Level Steps**:

1. Determine the expected total sum of numbers from `0` to `n` using the formula:

   - `sum = n * (n + 1) / 2`

2. Calculate the actual sum of the numbers in the input array.
3. Subtract the actual sum from the expected sum to find the missing number.
4. Return the result.

---

### 🔍 **Pseudocode Explanation**:

```plaintext
function findMissingNumber(nums):

1. Let n = length of the array (which is actually missing one number)
2. Compute the expected sum (s1) of numbers from 0 to n:
   s1 = n * (n + 1) / 2

3. Compute the actual sum (s2) of elements in nums:
   s2 = sum of all numbers in the array

4. The missing number = s1 - s2

5. Return the absolute value of (s1 - s2)
```

---

### 📝 Example:

```js
Input: [3, 0, 1];
// n = 3 (length = 3, means numbers are from 0 to 3, expected: [0, 1, 2, 3])
// Expected sum: (3 * (3 + 1)) / 2 = 6
// Actual sum: 3 + 0 + 1 = 4
// Missing number: 6 - 4 = 2
```

---

### ✅ Key Concepts:

- Formula `n(n+1)/2` gives sum of first `n` natural numbers.
- Efficient: O(n) time, O(1) space.
- `Math.abs()` is used to ensure the result is always non-negative (though not strictly needed here since s1 > s2 by design).

---
