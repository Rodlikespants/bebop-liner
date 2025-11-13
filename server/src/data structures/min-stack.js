class MinStack {
  constructor() {
    this.stack = []; // The main stack to store elements
    this.minStack = []; // The auxiliary stack to store minimums
  }

  /**
   * Pushes an element onto the stack (to the end of array).
   * @param {number} x The element to push.
   */
  push(x) {
    this.stack.push(x);

    // If minStack is empty or x is less than or equal to the current minimum,
    // push x onto minStack (to the end).
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    }
  }

  /**
   * Removes the top element from the stack.
   */
  pop() {
    // If the popped element is the current minimum, also pop from minStack.
    if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    this.stack.pop();
  }

  /**
   * Retrieves the top element of the stack.
   * @return {number} The top element.
   */
  top() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    return undefined; // Or throw an error for an empty stack
  }

  /**
   * Retrieves the minimum element in the stack.
   * @return {number} The minimum element.
   */
  getMin() {
    if (this.minStack.length > 0) {
      return this.minStack[this.minStack.length - 1];
    }
    return undefined; // Or throw an error for an empty stack
  }
}
module.exports = MinStack;