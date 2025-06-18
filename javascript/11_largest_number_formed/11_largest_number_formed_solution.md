# Problem Name: `Largest Number Formed`

## Problem Discussion

It looks like you're trying to solve the "Largest Number Formed" problem. The core idea behind this problem is to sort the numbers in a custom way, not numerically. Your current implementation tries to compare and push indices, which isn't the right approach for sorting the numbers themselves to form the largest number.

Let's break down the problem and how to fix your code.

---

### Understanding the Custom Sorting Logic

The key insight for this problem is how to compare two numbers, say `a` and `b`, to decide which one should come first when forming the largest number. It's not about whether `a > b` or `b > a` directly. Instead, you need to see which concatenation `ab` or `ba` results in a larger number.

For example, with `3` and `30`:

- If you put `3` then `30`, you get `"330"`.
- If you put `30` then `3`, you get `"303"`. Since `"330"` is greater than `"303"`, `3` should come before `30`.

Another example, with `54` and `546`:

- If you put `54` then `546`, you get `"54546"`.
- If you put `546` then `54`, you get `"54654"`. Since `"54654"` is greater than `"54546"`, `546` should come before `54`.

---
