// Traverse a tree using depth-first search in-order

// Traverse left subtree
// Visit node
// Traverse right subtree

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

  DFSInOrder() {
    if (!this.root) return;

    const visited = [];
    const currentNode = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);

      visited.push(node.val);

      if (node.right) traverse(node.right);
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

tree.DFSInOrder(); // [2, 3, 5, 7, 10, 11, 13, 16]
