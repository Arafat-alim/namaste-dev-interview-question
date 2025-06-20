function isAnagram(str1, str2) {
  // Your implementation
  const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, "");
  if (cleanStr1.length !== cleanStr2.length) return false;
  let char = [];

  for (let charS1 of cleanStr1) {
    char[charS1] = (char[charS1] || 0) + 1;
  }

  for (let charS2 of cleanStr2) {
    if (!char[charS2]) return false;

    char[charS2]--;
  }

  for (let count of char) {
    if (char[count] !== 0) return false;
  }

  return true;
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram;
