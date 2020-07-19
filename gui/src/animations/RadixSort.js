import { radixSort } from "../algorithms/RadixSort";
import { animate } from ".";

export const radixSortAnimation = (array, setIsDisabled) => {
  const animations = [];
  radixSort([...array], animations);
  animate(animations, setIsDisabled)
};
