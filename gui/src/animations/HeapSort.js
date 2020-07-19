import { heapSort } from "../algorithms/HeapSort";
import { animateDouble } from ".";

export const heapSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  heapSort(array, animations);
  animateDouble(animations, setIsDisabled, 40);
};
