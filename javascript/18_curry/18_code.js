function curry(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("Expected a function");
  }
  const arity = fn.length;

  function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  }

  return curried;
}

//For the purpose of user debugging.
//pass appropriate input in below function call
// curry();
module.exports = curry;
