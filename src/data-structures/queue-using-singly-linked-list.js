// Create a queue using singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// We will use thge push and shift methods of the singly linked list
// to implement the enqueue and dequeue methods of the queue

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // this is push method of singly linked list
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // this is shift method of singly linked list
  dequeue() {
    if (!this.first) return;
    let current = this.first;
    if (this.size === 1) {
      this.tail = null;
    }
    this.first = current.next;
    this.size--;

    return current.val;
  }
}

const queue = new Queue();
queue.enqueue(1); // 1
queue.enqueue(2); // 1 2
queue.enqueue(3); // 1 2 3
queue.enqueue(4); // 1 2 3 4

queue.dequeue(); // 1 will be removed as it is the first element
queue.dequeue(); // 2
queue.dequeue(); // 3
queue.dequeue(); // 4
