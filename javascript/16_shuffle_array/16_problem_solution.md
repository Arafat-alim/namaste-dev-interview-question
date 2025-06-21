### ✅ **Purpose**:

Randomly **shuffle the elements** in an array — like shuffling a deck of cards — using the **Fisher-Yates algorithm**.

---

### 🧠 **High-Level Steps**:

1. Return an empty array if the input is empty.
2. Make a **copy** of the input array (to avoid mutating the original).
3. Iterate from the **end of the array to the start**.
4. For each position:

   - Pick a **random index** earlier in the array (including current).
   - **Swap** the element at the current position with the element at the random index.

5. Return the shuffled array.

---

### 🔍 **Pseudocode Explanation**:

```plaintext
function shuffle(array):

1. If array is empty:
   - Return []

2. Create a copy of the input array:
   - newArray = [...array]

3. Initialize currentIndex = array.length

4. While currentIndex is not 0:
   a. Pick a randomIndex from 0 to currentIndex - 1
   b. Decrease currentIndex by 1
   c. Swap:
      - newArray[currentIndex] ↔ newArray[randomIndex]

5. Return newArray
```

---

### 📝 Notes:

- This is the **Fisher–Yates Shuffle** — an efficient and unbiased way to randomize arrays.
- `Math.random()` picks a float between 0 and 1.
- `Math.floor()` ensures we get a whole index value.
- Using the spread operator (`[...array]`) ensures the original array remains unchanged.

---
