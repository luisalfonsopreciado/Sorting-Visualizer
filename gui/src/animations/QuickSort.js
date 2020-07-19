import { quickSort } from "../algorithms/QuickSort";
import { animate } from "./index";

export const quickSortAnimation = async (array, setIsDisabled) => {
  const copy = array.slice(0, array.length);
  const animation = [];
  quickSort(copy, 0, copy.length - 1, animation);
  animate(animation, setIsDisabled, 1);
};
