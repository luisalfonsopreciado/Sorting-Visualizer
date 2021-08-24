class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (this.root == null) {
      this.root = new TreeNode(val);
      return;
    }

    this.recursiveInsert(this.root, val);
  }

  recursiveInsert(node, val) {
    if (val <= node.val) {
      // Left Insert
      if (node.left === null) {
        const newNode = new TreeNode(val);
        node.left = newNode;
        return;
      }
      this.recursiveInsert(node.left, val);
    } else {
      // Right Insert
      if (node.right === null) {
        const newNode = new TreeNode(val);
        node.right = newNode;
        return;
      }
      this.recursiveInsert(node.right, val);
    }
  }

  inorder(node, animations, array) {
    if (node === null) return;
    this.inorder(node.left, animations, array);
    animations.push([animations.length, node.val]);
    array.push(node.val);
    this.inorder(node.right, animations, array);
  }
}
