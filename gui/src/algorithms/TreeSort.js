import { Tree } from "../utility/DS/Tree";

export const treeSort = (array, animation) => {
  const tree = new Tree();

  for (let num of array) {
    tree.insert(num);
  }

  tree.inorder(tree.root, animation);
  animation.push([animation.length - 1, animation[animation.length - 1]]);
};
