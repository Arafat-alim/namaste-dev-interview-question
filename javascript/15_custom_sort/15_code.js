function customSort(arr) {
  //write your implementation here
  if (!arr.length) return [];
  const characters = [];
  const numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].length === 1) {
      characters.push(arr[i]);
    } else if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    }
  }

  // bubble sort of characters
  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters.length - 1 - i; j++) {
      if (characters[j] > characters[j + 1]) {
        //swap
        let temp = characters[j];
        characters[j] = characters[j + 1];
        characters[j + 1] = temp;
      }
    }
  }

  // bubble sort of numbers
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        // swap
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return [...characters, ...numbers];
}

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
customSort(input);
module.exports = customSort;
