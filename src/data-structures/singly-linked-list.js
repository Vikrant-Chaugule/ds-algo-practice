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

  // remove from the end
  pop() {
    if (!this.head) return;
    else {
      let currentNode = this.head;
      let secondLastNode = currentNode;
      while (currentNode.next) {
        secondLastNode = currentNode;
        currentNode = currentNode.next;
      }

      this.tail = secondLastNode;
      this.tail.next = null;
      this.length--;
      if (this.length <= 0) {
        this.head = null;
        this.tail = null;
      }
      return currentNode;
    }
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

list.print(); // 5->10->15->20->25

// 5->10->15->20->25
list.pop(); // 5->10->15->20
list.pop(); // 5->10->15
list.pop(); // 5->10
list.print(); // 5->10
