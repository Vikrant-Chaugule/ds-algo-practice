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

  // remove from the beginning
  shift() {
    if (!this.head) return;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length <= 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // insert at the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get the node at a given index
  get(index) {
    if (index < 0 || index >= this.length) return;
    let currentNode = this.head;
    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  // set the node at a given index
  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
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

list.unshift(1); // 1->5->10
list.unshift(2); // 2->1->5->10
list.unshift(3); // 3->2->1->5->10
list.print(); // 3->2->1->5->10

list.shift(); // 2->1->5->10
list.shift(); // 1->5->10
list.print(); // 1->5->10

list.get(2); // 10
