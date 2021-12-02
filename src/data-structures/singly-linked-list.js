// create a singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // insert at the end
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(node.val);
      node = node.next;
    }
  }
}

let list = new SinglyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
