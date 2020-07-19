import { bubbleSort } from "../algorithms/BubbleSort";
import { animateDouble } from "./index";

export const bubbleSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  bubbleSort(array, animations);
  animateDouble(animations, setIsDisabled);
};
