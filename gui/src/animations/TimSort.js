import { timSort } from "../algorithms/TimSort";
import { animate } from "./index";

export const timSortAnimation = (array, setIsDisabled) => {
  const animations = [];
  timSort([...array], animations);
  animate(animations, setIsDisabled)
};

