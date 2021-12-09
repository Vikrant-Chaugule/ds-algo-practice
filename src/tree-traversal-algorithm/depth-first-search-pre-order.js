// Traverse a tree using depth-first search and pre-order traversal

// visit root first then traverse left and right subtrees
// for each node, visit the node, then traverse left and right subtrees recursively

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

  DFSPreOrder() {
    if (!this.root) return;

    const visited = [];
    let currentNode = this.root;

    const traverse = (node) => {
      visited.push(node.val); // visit node

      if (node.left) traverse(node.left); // traverse left subtree

      if (node.right) traverse(node.right); // traverse right subtree

      return;
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

tree.DFSPreOrder(); // [ 10, 5, 2, 3, 7, 11, 13, 16 ]
