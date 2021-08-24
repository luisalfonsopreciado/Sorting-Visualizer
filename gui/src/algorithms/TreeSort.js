import { Tree } from "../utility/DS/Tree";

export const treeSort = (array, animation) => {
  const tree = new Tree();

  for (let num of array) {
    tree.insert(num);
  }

  const result = [];

  tree.inorder(tree.root, animation, result);
  animation.push([animation.length - 1, animation[animation.length - 1]]);

  for (let i in result) {
    array[i] = result[i];
  }
};
