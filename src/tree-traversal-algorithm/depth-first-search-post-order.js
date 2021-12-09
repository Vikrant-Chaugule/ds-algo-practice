// Travers a tree using depth-first search and post-order

// To traverse a tree using depth-first search and post-order, we need to
// keep track of the current node and the parent node.
// We start with the root node and the parent node is null.
// We keep traversing the tree until we reach the end.
// At each node, we first visit the left child and then the right child.
// When we visit the left child, we set the parent node to the current node.
// When we visit the right child, we set the parent node to the current node.
// When we visit the current node, we print the current node and set the current
// node to the parent node.
// We keep doing this until we reach the end of the tree.

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

  DFSPostOrder() {
    if (!this.root) return;

    const visited = [];
    const currentNode = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);

      if (node.right) traverse(node.right);

      visited.push(node.val);
    };

    traverse(currentNode);
    return visited;
  }
}

let tree = new Tree();
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

tree.DFSPostOrder(); // [3, 2, 7, 5, 11, 16, 13, 10]
