const util = require("util");
class BSTNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.counter = 0;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  min() {
    if (!this.root) return null;
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.val;
  }
  add(newVal) {
    const node = new BSTNode(newVal);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (true) {
        if (newVal <= current.val) {
          if (!current.left) {
            current.left = node;
            return;
          } else if (newVal === current.val) {
            current.counter++;
            return this;
          } else {
            current = current.left;
          }
        } else {
          // newVal is greater than current.val
          if (!current.right) {
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  contains(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) return true;
      if (val < current.val) current = current.left;
      else current = current.right;
    }
    return false;
  }
  height(node = this.root) {
    if (!node) return 0;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
  isFull(node = this.root) {
    if ((!node.left && node.right) || (node.left && !node.right)) return false;
    if (!node.left && !node.right) return true;
    if (node.left && node.right)
      return this.isFull(node.left) && this.isFull(node.right);
  }
}

var list = new DST();
var ten = new DSTNode(10);
var twenty = new DSTNode(20);
console.log(util.inspect(list, { showHidden: false, depth: null }));
