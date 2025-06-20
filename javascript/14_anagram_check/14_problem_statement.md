# Problem name: `Anagram Checker`

## Difficulties

- Easy

## Description:

Write a function that checks whether two input strings are anagrams of each other. An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.

## Input:

Two strings stri and str2

## Output:

A boolean value — true if the strings are anagrams, false otherwise.

# Example Inputs & Outputs

```js
// Example 1:
Input: "listen", "silent";
Output: true;

// Example 2:
Input: "hello", "world";
Output: false;

// Example 3:
Input: "Triangle", "Integral";
Output: true;

// Example 4:
Input: "rat", "car";
Output: false;

// Example 5:
Input: "a", "A";
Output: true;

// Example 6:
Input: "dormitory!!", "dirty room";
Output: true;
```

## Constraints & Edge Cases

- The comparison should be case-insensitive.
- Both strings may contain non-alphabetic characters (optional: ignore them).
- Empty strings are valid inputs.
- Strings of different lengths can't be anagrams.
- Whitespaces are ignored and compare only letters

---
