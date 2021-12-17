// Create a priority queue using min binary heap algorithm

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    return this.bubbleUp();
  }

  // find the correct position of the node
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = this.getParent(index);
    while (
      index > 0 &&
      this.values[parentIndex].priority >= this.values[index].priority
    ) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = this.getParent(index);
    }
    return this.values;
  }

  // (n-1)/2 using this we can get the parent index of any node
  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let leftChild = null;
      let rightChild = null;
      let swapIndex = null;

      if (leftIndex < length) {
        leftChild = this.values[leftIndex];
        if (leftChild.priority < element.priority) {
          swapIndex = leftIndex;
        }
      }
      if (rightIndex < length) {
        rightChild = this.values[rightIndex];
        if (
          (swapIndex === null && rightChild.priority < leftChild.priority) ||
          (swapIndex !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIndex = rightIndex;
        }
      }

      if (swapIndex === null) break;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = element;
      index = swapIndex;
    }
  }
}

let queue = new PriorityQueue();
queue.enqueue(100, 4);
queue.enqueue(200, 1);
queue.enqueue(300, 2);
queue.enqueue(400, 5);
queue.enqueue(500, 3);
