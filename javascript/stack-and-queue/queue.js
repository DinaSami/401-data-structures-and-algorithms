const Node = require('./node');


class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {

    let node = new Node(value)
    if (!this.front) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }




  } dequeue() {
    if (this.isEmpty()) {
      return 'exception';
    }
    let current = this.front;
    this.front = current.next;
    return current.value;
  }
  peek() {
    if (!this.front) {
      return 'exception'
    }
    return this.front.value;
  } isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Queue;