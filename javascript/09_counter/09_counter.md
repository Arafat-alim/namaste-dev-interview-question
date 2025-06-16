# Problem name: Make counter

## Companies:

#Meta, #Microsoft, #Google, #PhonePe

## Difficulties

- Easy

## Description:

Create a function makecounter that returns a counter object with methods to increment, decrement, and reset the counter.

The counter should maintain its current value and provide these operations:

- 1. increment() — Increases the counter by 1 and returns the new value.
- 2. decrement() — Decreases the counter by 1 and returns the new value.
- 3. reset() — Resets the counter to its initial value (default:O) and returns the reset value.

The counter should also allow an optional initial value.

## Example Inputs & Outputs

```js
const counter = makeCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
```

## Constraints & Edge Cases

- The counter should handle negative initial values.
- The counter should not expose its internal value directly (encapsulation).
- Methods should be chainable (optional bonus).

---
