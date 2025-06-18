# Problem name: `Once(fn)`

## Companies:

#PayPal, #Zomato, #Google

## Difficulties

- Easy

## Description:

Implement the function once(fn) which accepts another function fn and returns a new function. This new function allows fn to be executed only once, no matter how many times it is called. On the first call, fn should be executed normally and its result returned.

On subsequent calls, return the result from the first execution, without re-invoking fn.

## Input

- A function fn (could be synchronous or asynchronous)
- The returned function can take any number of arguments

## Output

- A function that: Calls fn only once. Returns the first result on all calls after the first.

## Edge Cases

- Function with no arguments: fn might be called without any arguments. Ensure your implementation still works.
- Function returning undefined or null: fn may return undefined or null as a valid result. These should be cached and returned on subsequent calls.

- Function throwing errors: If fn throws an error during the first call, subsequent calls should not cache the error but may re-invoke fn (depending on implementation choice).
- Asynchronous function that rejects: If fn returns a Promise that rejects, subsequent calls might retry or return the same rejected Promise, depending on your implementation.
- Multiple calls before the first call resolves (async case): For async fn, if multiple calls are made before the first Promise resolves, all should receive the same Promise.
- fn relies on this context: Your implementation should preserve the original this context when invoking fn.

## Example Inputs & Outputs

```js
// Example 1: Async function
async function fetchData() {
  console.log("Fetching...");
  return "Data";
}

const onceFetch = once(fetchData);

onceFetch().then(console.log); // Logs "Fetching..." then "Data"
onceFetch().then(console.log); // Immediately logs "Data"

// Example 2: Function that throws an error
let count = 0;
function sometimesThrows() {
  if (count === 0) {
    count++;
    throw new Error("Oops!");
  }
  return "Success";
}

const onceThrow = once(sometimesThrows);

try {
  onceThrow(); // Throws error
} catch (e) {
  console.log(e.message); // Output: "Oops!"
}

console.log(onceThrow()); // Output: "Success" (called again)

// Example 3: Function with two arguments
function add(a, b) {
  return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(2, 3)); // Output: 5 (fn executed)
console.log(onceAdd(4, 5)); // Output: 5 (cached result)
console.log(onceAdd(10, 20)); // Output: 5 (cached result)

// Example 4: Simple function
function greet() {
  return "Hello Namaste Dev!";
}

const onceGreet = once(greet);

console.log(onceGreet()); // Output: "Hello!"
console.log(onceGreet()); // Output: "Hello!"

// Example 5: Function returning undefined
function doNothing() {
  return undefined;
}

const onceDoNothing = once(doNothing);

console.log(onceDoNothing()); // Output: undefined
console.log(onceDoNothing()); // Output: undefined
```

---
