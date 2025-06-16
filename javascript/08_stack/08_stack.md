# Problem name: Implement a Stack

## Companies:

#Meta, #TCS

## Difficulties

- Easy

## Description:

Implement a Stack data structure in JavaScript. A stack follow the Last-in-First-Out (LIFO) principle. Your implementation should include the following operations:

- push(element): Add an element to the top of the stack and return size
- pop(): Remove and return the top element from the stack
- peek(): Return the top element without removing it
- isEmpty(): Check if the stack is empty
- size(): Return the number of elements in the stack
- clear(): Remove all elements from the stack

## Example Inputs & Outputs

```js
const stack = new Stack();
stack.isEmpty(); // true
stack.push(10); // 1
stack.push(20); // 2
stack.push(30); // 3
stack.size(); // 3
stack.peek(); // 30
stack.pop(); // 30
stack.peek(); // 20
stack.clear();
stack.isEmpty(); // true
```

## Constraints & Edge Cases

- Handle pop and peek operations on an empty stack.
- Ensure proper memory management (no memory leaks).
- The stack should handle any JavaScript data type as elements.

---
