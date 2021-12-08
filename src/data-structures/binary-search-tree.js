// Create a Binary Search Tree

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      // if there is no root, make the new node the root
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val === currentNode.val) return; // if the value is already in the tree, do nothing
        if (val < currentNode.val) {
          // if the value is less than the current node, go left
          if (currentNode.left === null) {
            // if there is no left node, insert the new node
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          // if the value is greater than the current node, go right
          if (currentNode.right === null) {
            // if there is no right node, insert the new node
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

let bst = new BinarySearchTree();
//             10
//      5              13
//  2      7       11     16
//    3

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
bst.insert(3);
