import { bubbleSort } from "../algorithms/BubbleSort";
import * as cts from "../utility/constants";

export const bubbleSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  bubbleSort(array, animations);
  const arrayBars = document.getElementsByClassName("array-bar");
  for (let i = 0; i < animations.length; i++) {
    const [prev, next, prevHeight, nextHeight] = animations[i];

    setTimeout(() => {
      arrayBars[prev].style.backgroundColor = cts.PRIMARY_COLOR;
      arrayBars[next].style.backgroundColor = cts.PRIMARY_COLOR;
      if (nextHeight || prevHeight) {
        arrayBars[prev].style.height = `${prevHeight}px`;
        arrayBars[next].style.height = `${nextHeight}px`;
      }
      if (i === animations.length - 1) {
        setIsDisabled(false);
      }
    }, (i * cts.ANIMATION_SPEED_MS) / 10);
  }
};
