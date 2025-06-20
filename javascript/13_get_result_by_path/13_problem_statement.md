# Problem name: `Get Result by Path`

## Companies:

#Amazon, #TCS, #Yahoo!

## Difficulties

- Easy

## Description:

You are given a nested JavaScript object and a string that represents a path to a deeply nested value within that object. The path is dot-separated and may include array indices written in square brackets (e.g., "data. results [0] . status [1] . type"). Write a function getResu1tByPath(path, response) that extracts and returns the value at the given path within the object.

## Input

- path: A string representing the nested path to the target value (dot notation with optional array index, e.g., "data. result. status" or "data. results [1] . status[ø] . type").
- obj: A JavaScript object with potentially nested fields and arrays.

## Output

- The function should return the value located at the given path in the obj. If any part of the path is invalid (i.e., the key or index doesn't exist at any level), the function should return undefined.

## Constraints & Edge Cases

- The path may include both dot-separated keys and array indices in square brackets.
- Assume the object structure is valid but some paths may still return undefined.
- Array indices will always be non-negative integers.
- The object may contain a mix of objects and arrays.

## Example Inputs & Outputs

```js

// Example 1:
Input:
path: "data.results.status"
obj: {
  data: {
    results: {
      status: "completed",
      error: ""
    }
  }
}
Output: "completed"

//Example 2
Input:
path: "data.results[1].status[0].type"
obj: {
  data: {
    results: [
      {
        status: "completed",
        error: ""
      },
      {
        status: [{ type: "done" }, { type: "start" }],
        error: ""
      },
    ]
  }
}
Output: "done"

// Example 3
Input:
path: "user.address.city"
obj: {
  user: {
    profile: {
      name: "Alice",
    },
  },
};
Output: undefined

// Example 4
Input:
path: "config.settings.mode"
obj: {
  config: {
    settings: null,
  },
};
Output: null

// Example 5
Input:
path: "items[1]"
obj: {
  items: [
    { id: 1, name: "Pen" },
    { id: 2, name: "Pencil" },
  ],
};
Output: { id: 2, name: "Pencil" }

```

---
