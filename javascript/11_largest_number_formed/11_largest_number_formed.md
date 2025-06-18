# Problem name: Largest Number Formed

## Companies:

#Amazon

## Difficulties

- Easy

## Description:

Write a function that arranges a list of non-negative integers to form the largest possible number. Given an array of integers, rearrange them such that when concatenated, they produce the maximum possible numeric value.

## Input

- An array arr of non-negative integers.

## Output

- A string representing the largest number that can be formed by arranging the given integers.

## Constraints & Edge Cases

- All integers in the array are non-negative.
- The resulting number may be very large, so return it as a string.
- If all numbers are O, return "o" (not "øøø").
- The array may contain duplicate numbers.
- When comparing numbers for arrangement, treat them as strings:
  - For example,
    - "30" should come after "3" because:
    - "330" > "303" —+ so "3" should come before "30".

## Example Inputs & Outputs

```js

//Example 1:

Input:
const arr = [3, 30, 34, 5, 9]

output: "9534330"


//Example 2:

Input:
const arr3 = [54, 546, 548, 60]

output: "6054854654"

```

## Constraints & Edge Cases

- callback must be a function. If not, throw a TypeError.
- If no initial value is provided and the array is empty, throw a TypeError.
- If no initial value is provided, use the first element of the array as the initial value, and start from the second element.
- Do not use the built-in reduce() method.

---
