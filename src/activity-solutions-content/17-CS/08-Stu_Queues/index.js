class Queue {
  constructor(container = []) {
    this.container = container;
  }

  addToQueue(item) {
    return this.container.push(item);
  }

  removeFromQueue() {
    return this.container.shift();
  }
}

module.exports = Queue;
