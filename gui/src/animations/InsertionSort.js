import { insertionSort } from "../algorithms/InsertionSort";
import { animate } from "./index";

export const insertionSortAnimation = async (array, setIsDisabled) => {
  const copy = array.slice(0, array.length);
  const animation = [];
  insertionSort(copy, animation);
  animate(animation, setIsDisabled, 0.1)
};
