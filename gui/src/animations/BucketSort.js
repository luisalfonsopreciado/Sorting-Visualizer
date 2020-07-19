import { bucketSort } from "../algorithms/BucketSort";
import { animate } from ".";

export const bucketSortAnimation = (array, setIsDisabled) => {
  const animations = [];
  bucketSort([...array], animations);
  animate(animations, setIsDisabled);
};
