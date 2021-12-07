// Create a stack using singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// To avoid the iteration till the last node in the list, we will use shift and unshift approach
// As they are O(1) operations
// pop() is O(n) for singly linked list

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // this is inserting at the beginning of the list
  // so it's actually shift operation
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  // this is removing from the beginning of the list
  // so it's actually unshift operation
  pop() {
    if (!this.first) return;
    let current = this.first;
    this.first = current.next;
    this.size--;
    if (this.size <= 0) {
      this.tail = null;
    }
    return current.val;
  }
}

const stack = new Stack();
stack.push(10); // 10
stack.push(20); // 20 10
stack.push(30); // 30 20 10
stack.push(40); // 40 30 20 10
stack.push(50); // 50 40 30 20 10

stack.pop(); // 50
stack.pop(); // 40
stack.pop(); // 30
stack.pop(); // 20
stack.pop(); // 10
