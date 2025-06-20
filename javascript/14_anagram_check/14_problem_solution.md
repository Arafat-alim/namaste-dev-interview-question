### 🧠 **High-Level Approach**:

1. **Normalize** both strings:

   - Convert to lowercase
   - Remove all **non-alphabetic characters** (e.g., spaces, punctuation)

2. **Early exit**: if the lengths of the cleaned strings are different → return `false`

3. **Build character frequency map** from the first string

4. **Subtract character counts** using the second string:

   - If any character is missing or used too many times → return `false`

5. **Final check**:

   - Ensure all character counts are zero → return `true`

---

### 🔍 **Detailed Pseudocode Explanation**:

```plaintext
function isAnagram(str1, str2):

  1. Clean both strings:
     - Convert str1 and str2 to lowercase
     - Remove all characters that are NOT a-z using regex /[^a-z]/g
     - Store in cleanStr1 and cleanStr2

  2. If lengths of cleanStr1 and cleanStr2 are different:
     - Return false (cannot be anagrams)

  3. Initialize an empty object charCount

  4. For each character in cleanStr1:
     - Increment charCount[character] by 1

  5. For each character in cleanStr2:
     - If charCount[character] is not defined or is 0:
         - Return false (more occurrences than in str1)
     - Else:
         - Decrement charCount[character] by 1

  6. For each entry in charCount:
     - If any value is not 0:
         - Return false

  7. Return true (strings are anagrams)
```

---

### 📝 Notes:

- `replace(/[^a-z]/g, "")`: removes everything that's not a letter
- Array `char` is being used like an object (JavaScript allows this)
- The third loop (`for (let count of char)`) is redundant and slightly buggy — better to use `Object.values(char)` or remove it entirely

---
