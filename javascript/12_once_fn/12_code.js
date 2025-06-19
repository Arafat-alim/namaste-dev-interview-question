function once(fn) {
  let isCalled = false;
  let cachedResult;
  let isAsync = false;

  return function (...args) {
    if (cachedResult) {
      return cachedResult;
    }

    try {
      const result = fn.apply(this, args);
      if (result instanceof Promise) {
        isAsync = true;
        isCalled = true;
        cachedResult = result
          .then((data) => {
            isCalled = true;
            isAsync = false;
            return data;
          })
          .catch((err) => {
            isCalled = false;
            isAsync = false;
            return err;
          });

        return cachedResult;
      } else {
        isCalled = true;
        cachedResult = result;
        return cachedResult;
      }
    } catch (error) {
      throw error;
    }
  };
}
module.exports = once;
