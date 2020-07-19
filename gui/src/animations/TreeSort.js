import { treeSort } from "../algorithms/TreeSort";
import { animate } from "./index";

export const treeSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  treeSort(array, animations);
  animate(animations, setIsDisabled);
};
