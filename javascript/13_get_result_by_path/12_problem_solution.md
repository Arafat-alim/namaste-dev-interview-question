### 🧠 **Approach (Step-by-Step):**

#### 1. **Validate input**

- If the path is empty or not a string, return `undefined`.

#### 2. **Initialize helper variables**

- `excludeChars = [".", "[", "]"]`: These characters define boundaries between keys or indices.
- `keys = []`: This will store the ordered list of keys/indices.
- `current = ""`: A buffer to collect characters for the current key.

#### 3. **Parse the path using a `for` loop**

- Loop through each character in the path string:

  - If the character is in `excludeChars`:

    - If `current` has collected any characters (a valid key or index), push it into `keys`.
    - Reset `current` to an empty string.

  - Otherwise, add the character to `current`.

- After the loop ends, if `current` still has content, push it into `keys`.

📌 Example:
`"data.results[1].status[0].type"` ➝ `["data", "results", "1", "status", "0", "type"]`

---

#### 4. **Traverse the object using `.reduce()`**

- Start with the original object (`obj`)
- For each key in `keys`:

  - If the current value is not `null` or `undefined`, and the key exists, go deeper.
  - If the current value is `null`, return `null` early (as a valid value).
  - If the key doesn't exist or current value is `undefined`, return `undefined`.

---
