import { countingSort } from "../algorithms/CountingSort";
import { animate } from ".";

export const countingSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  countingSort([...array], animations);
  animate(animations, setIsDisabled)
};
