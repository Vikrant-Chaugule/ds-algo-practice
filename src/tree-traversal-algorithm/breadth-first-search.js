// Traverse a tree using breadth first search

// first visit root node
// then push to it to queue
// then pop from queue and add it to visited array
// then push all children of popped node to queue
// follow same process until queue is empty

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val === currentNode.val) return;
        if (val < currentNode.val) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  breadthFirstSearch() {
    if (!this.root) return;
    let currentNode = this.root;
    let queue = []; // queue using an array methods - push and shift
    let visited = [];

    queue.push(currentNode); // add root to queue

    while (queue.length) {
      currentNode = queue.shift();
      visited.push(currentNode.val); // add current node to visited
      if (currentNode.left) queue.push(currentNode.left); // add left child to queue
      if (currentNode.right) queue.push(currentNode.right); // add right child to queue
    }

    return visited;
  }
}

const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(3);

//             10
//      5              13
//  2      7       11     16
//    3

console.log(tree.breadthFirstSearch());
