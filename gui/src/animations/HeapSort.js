import { heapSort } from "../algorithms/HeapSort";
import * as cts from "../utility/constants";

export const heapSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  heapSort(array, animations);
  const arrayBars = document.getElementsByClassName("array-bar");

  let i = 0;

  const intervalId = setInterval(() => {
    const [prev, next, prevHeight, nextHeight] = animations[i];
    arrayBars[prev].style.backgroundColor = cts.PRIMARY_COLOR;
    arrayBars[next].style.backgroundColor = cts.PRIMARY_COLOR;
    if (nextHeight || prevHeight) {
      arrayBars[prev].style.height = `${prevHeight}px`;
      arrayBars[next].style.height = `${nextHeight}px`;
    }

    i++;
    if (i >= animations.length - 1) {
      setIsDisabled(false);
      clearInterval(intervalId);
    }
  }, (i * cts.ANIMATION_SPEED_MS) / 10);
};
