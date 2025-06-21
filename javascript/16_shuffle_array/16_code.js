function shuffle(array) {
  // Your implementation
  if (!array.length) {
    return [];
  }

  const newArray = [...array];

  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    //! swap
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
}

//For the purpose of user debugging.
shuffle([1, 2, 3, 4, 5]);

module.exports = shuffle;
