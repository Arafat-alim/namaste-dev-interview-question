### ✅ **Purpose**:

Sort an array that contains a **mix of characters (single-letter strings)** and **numbers**:

- **Characters** should appear **first** in sorted **alphabetical order**
- **Numbers** should appear **after** in sorted **ascending order**

---

### 🧠 **High-Level Steps**:

1. **Return early** if input array is empty
2. **Separate** characters and numbers into different arrays
3. **Sort** both arrays individually using **bubble sort**
4. **Concatenate** the sorted characters and sorted numbers
5. **Return** the final merged array

---

### 🔍 **Pseudocode Explanation**:

```plaintext
function customSort(arr):

1. If arr is empty:
   - Return an empty array []

2. Initialize two arrays:
   - characters = []
   - numbers = []

3. For each element in arr:
   - If it's a string with length 1:
       → Add to characters
   - If it's a number:
       → Add to numbers

4. Sort characters using bubble sort:
   - For i from 0 to characters.length:
     - For j from 0 to characters.length - i - 1:
         - If characters[j] > characters[j + 1]:
             → Swap them

5. Sort numbers using bubble sort:
   - For i from 0 to numbers.length:
     - For j from 0 to numbers.length - i - 1:
         - If numbers[j] > numbers[j + 1]:
             → Swap them

6. Return characters concatenated with numbers
   → [...characters, ...numbers]
```

---

### 📝 Notes:

- **Bubble sort** is simple but not efficient for large datasets; modern JavaScript provides `sort()`, but it's avoided here for manual sorting practice.
- Only **single-letter strings** are accepted as valid characters.
- The result always has **sorted characters first**, then **sorted numbers**.

---
