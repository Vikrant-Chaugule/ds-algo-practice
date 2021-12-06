// create a doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // push to the end of the list
  push(val) {
    const newNode = new Node(val);

    // list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop from the end of the list
  pop() {
    if (!this.head) return;

    const currentTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
      currentTail.prev = null; // clear the references or it will cause memory leaks
    }

    this.length--;
    return currentTail;
  }

  print() {
    let current = this.head;
    const arr = [];
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

const list = new DoublyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
