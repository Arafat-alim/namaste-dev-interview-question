function countVowels(str) {
  // Your implementation
  let count = 0;
  const strLower = str.toLowerCase();
  for (let i = 0; i < strLower.length; i++) {
    const character = strLower[i];
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      count++;
    }
  }

  return count;
}

//For the purpose of user debugging.
console.log(countVowels("JavaScript"));

module.exports = countVowels;
