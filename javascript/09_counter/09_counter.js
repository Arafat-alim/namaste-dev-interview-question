function makeCounter(initialValue = 0) {
  let count = initialValue;
  const originalInitialValue = initialValue;

  return {
    increment: (val = 1) => {
      return (count += val);
    },
    decrement: (val = 1) => {
      return (count -= val);
    },
    reset: () => {
      count = originalInitialValue;
      return count;
    },
  };
}

module.exports = makeCounter;
