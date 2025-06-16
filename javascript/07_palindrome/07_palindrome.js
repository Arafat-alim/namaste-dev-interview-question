function removeNonAlphaNumeric(str) {
  let ans = "";
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (/[a-z0-9]/.test(char)) {
      ans += char;
    }
  }
  return ans;
}

function validatePalindrome(str) {
  const cleanedStr = removeNonAlphaNumeric(str); // Renamed for clarity

  const reversedCleanedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedCleanedStr;
}

//For the purpose of user debugging.
validatePalindrome("race a car");

module.exports = validatePalindrome;
