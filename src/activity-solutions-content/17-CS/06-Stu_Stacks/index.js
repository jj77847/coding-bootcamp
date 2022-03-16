class Stack {
  constructor(container = []) {
    this.container = container;
  }

  addToStack(item) {
    return this.container.push(item);
  }

  removeFromStack() {
    return this.container.pop();
  }
}

module.exports = Stack;
