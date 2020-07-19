import { combSort } from "../algorithms/CombSort";
import { animate } from ".";

export const combSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  combSort([...array], animations);
  animate(animations, setIsDisabled)
};
