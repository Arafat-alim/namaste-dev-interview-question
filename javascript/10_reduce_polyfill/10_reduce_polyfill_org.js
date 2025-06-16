//! ⚠️ Note: This program wont make use for passing the Namaste Dev question, please check this link: https://github.com/Arafat-alim/namaste-dev-interview-question/blob/main/javascript/10_reduce_polyfill/10_reduce_polyfill.js

// Simplest possible polyfill (WARNING: Does NOT handle edge cases like real reduce)
Array.prototype.mySimpleReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initialValue is provided, the first element becomes the initial accumulator
  // and iteration starts from the second element.
  if (arguments.length < 2) {
    accumulator = this[0]; // Assumes array is not empty
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    // This simple polyfill does NOT skip holes in sparse arrays,
    // and it assumes the callback can handle 'undefined' for hole values.
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Example of what this simple version FAILS to do:
// [].mySimpleReduce(() => {}); // ERROR: Cannot read properties of undefined (reading '0')
// [1,,3].mySimpleReduce((acc, val) => acc + val, 0); // Result: 1 + undefined + 3 = NaN (Should be 4)
