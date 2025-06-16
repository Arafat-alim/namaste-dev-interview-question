Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;
  const hasInitialValue = arguments.length >= 2;

  let accumulator;
  let startIndex = 0;

  if (array.length === 0 && !hasInitialValue) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  if (hasInitialValue) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    let foundFirstElement = false;
    for (let i = 0; i < array.length; i++) {
      // Check if the property exists at this index (handles sparse arrays)
      if (Object.prototype.hasOwnProperty.call(array, i)) {
        accumulator = array[i];
        startIndex = i + 1;
        foundFirstElement = true;
        break; // Found the first element, so break the loop
      }
    }

    if (!foundFirstElement && array.length > 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
  }

  for (let i = startIndex; i < array.length; i++) {
    if (Object.prototype.hasOwnProperty.call(array, i)) {
      accumulator = callback(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};
