# Problem name: Array.prototype.reduce

## Companies:

#PayPal, #Orcale, #Reddit, #PhonePe

## Difficulties

- Easy

## Description:

Implement a custom version of the Array . prototype. reduce method and add it to the Array. prototype object as myReduce. The method should iterate over the array, apply a reducer function to each element,and return a single accumulated value. This function should mimic the behavior of the native reduce() method, including the handling of an optional initial value.

## Example Inputs & Outputs

```js
[1, 2, 3].myReduce((acc, val) => acc + val)
// → 6

[1, 2, 3].myReduce((acc, val) => acc + val, 10)
// → 16

[].myReduce((acc, val) => acc + val, 5)
// → 5

[].myReduce((acc, val) => acc + val)
// → TypeError

[1, , 3].myReduce((acc, val) => acc + val)
// → 4

```

## Constraints & Edge Cases

- callback must be a function. If not, throw a TypeError.
- If no initial value is provided and the array is empty, throw a TypeError.
- If no initial value is provided, use the first element of the array as the initial value, and start from the second element.
- Do not use the built-in reduce() method.

---
