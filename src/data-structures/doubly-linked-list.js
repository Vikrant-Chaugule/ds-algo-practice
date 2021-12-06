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

  // remove from the beginning of the list
  shift() {
    if (!this.head) return;

    const currentHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = currentHead.next;
      this.head.prev = null;
      currentHead.next = null; // clear the references or it will cause memory leaks
    }
    this.length--;
    return currentHead;
  }

  // add to the beginning of the list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // get the value at a specific index
  get(index) {
    if (index < 0 || index >= this.length) return; // out of bound
    const mid = Math.floor(this.length / 2);
    let counter = index;
    let current;

    // check if the index is in the first half
    if (counter <= mid) {
      current = this.head;
      while (counter > 0) {
        current = current.next;
        counter--;
      }
    } else {
      // index is in the second half
      current = this.tail;
      while (counter < this.length - 1) {
        current = current.prev;
        counter++;
      }
    }
    return current;
  }

  // update the value at a specific index
  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    } else return false;
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
