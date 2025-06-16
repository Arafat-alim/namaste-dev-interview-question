class Stack {
  constructor() {
    // Initialize your stack
    this._items = [];
  }

  push(element) {
    // Add element to the top
    this._items.push(element);
    return this._items.length;
  }

  pop() {
    // Remove and return top element
    if (this.isEmpty(this._items)) {
      return undefined;
    }
    return this._items.pop();
  }

  peek() {
    // Return top element without removing
    if (this.isEmpty(this._items)) {
      return undefined;
    }
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    // Check if stack is empty
    return this._items.length === 0;
  }

  size() {
    // Return number of elements
    return this._items.length;
  }

  clear() {
    // Remove all elements
    this._items = [];
  }
}

module.exports = Stack;
