// Create a Max Binary Heap

// In Max Binary Heap, parent nodes are always greater than children nodes.
// First node is always the root node and is always greater than the last node.
// In this implementation, we will use an array to represent a Max Binary Heap.
// First we push the node into the array.
// Then we compare the node with its parent node and swap them if the parent node is smaller than the node.
// Again we compare the swapped node with its parent node and swap them if the parent node is smaller than the node.
// We repeat this process until the node is in the correct position.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    return this.bubbleUp();
  }

  // find the correct position of the node
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = this.getParent(index);
    while (this.values[parentIndex] < this.values[index] && index >= 0) {
      // swap the values if the parent is smaller than the node
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

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();
    return max;
  }

  bubbleDown() {
    let index = 0;
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let leftChild = null;
    let rightChild = null;
    let length = this.values.length;
    let swapIndex = null;
    while (true) {
      if (leftIndex < length && rightIndex < length) {
        leftChild = this.values[leftIndex];
        rightChild = this.values[rightIndex];
        if (leftChild > rightChild) {
          swapIndex = leftIndex;
        } else {
          swapIndex = rightIndex;
        }
      } else if (leftIndex < length) {
        swapIndex = leftIndex;
      } else if (rightIndex < length) {
        swapIndex = rightIndex;
      }

      if (swapIndex === null) {
        break;
      }

      if (this.values[index] < this.values[swapIndex]) {
        [this.values[index], this.values[swapIndex]] = [
          this.values[swapIndex],
          this.values[index],
        ];
        index = swapIndex;
        leftIndex = 2 * index + 1;
        rightIndex = 2 * index + 2;
      }
      swapIndex = null;
    }
  }
}

let heap = new MaxBinaryHeap();
