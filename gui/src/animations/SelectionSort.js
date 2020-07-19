import { selectionSort } from "../algorithms/SelectionSort";
import { animateDouble } from "./index";

export const selectionSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  selectionSort([...array], animations);
  animateDouble(animations, setIsDisabled, 65);
  
};
