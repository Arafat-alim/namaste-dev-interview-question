### ✅ **Purpose**:

To **transform a function** that takes multiple arguments into a series of **functions that each take a single argument** — or fewer than the full number — until all arguments are collected.

---

### 📘 **Example Use Case (for clarity)**:

```js
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // returns 6
curriedAdd(1, 2)(3); // also returns 6
curriedAdd(1, 2, 3); // also returns 6
```

---

### 🧠 **High-Level Steps**:

1. Check if the input is a function. If not, throw an error.
2. Get the number of expected arguments (`arity`) from the input function.
3. Create a `curried` helper function that:

   - Collects arguments each time it is called.
   - If the total number of collected arguments is **enough**, it calls the original function.
   - If not, it returns another function to collect more arguments.

4. Return the curried version of the function.

---

### 🔍 **Pseudocode Explanation**:

```plaintext
function curry(fn):
    if fn is not a function:
        throw TypeError

    arity = number of expected parameters of fn

    define curried(...args):
        if length of args >= arity:
            return fn(...args)  // call the original function
        else:
            return function(...nextArgs):
                return curried(...args + nextArgs)  // recursively collect arguments

    return curried
```

---

### 💡 Key Concepts:

- ✅ **Arity**: The number of arguments a function expects (e.g., `fn.length`).
- 🔁 **Recursive Closure**: Keeps returning a function until all arguments are collected.
- ⚙️ **Flexible Calling**: Supports calling the function with any number of arguments at a time.

---

### 📌 Edge Case Handled:

- Throws a clear error if the input is **not a function**, ensuring safe usage.

---
