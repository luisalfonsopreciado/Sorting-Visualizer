import { bubbleSort } from "../algorithms/BubbleSort";
import {PRIMARY_COLOR, ANIMATION_SPEED_MS, SECONDARY_COLOR} from "../utility/constants"

export const bubbleSortAnimation = async (array, setIsDisabled) => {
    const animation = bubbleSort(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animation.length; i++) {
      const [prev, next, prevHeight, nextHeight] = animation[i];

      setTimeout(() => {
        arrayBars[prev].style.backgroundColor = PRIMARY_COLOR;
        arrayBars[next].style.backgroundColor = SECONDARY_COLOR;
        if (nextHeight || prevHeight) {
          arrayBars[prev].style.height = `${prevHeight}px`;
          arrayBars[next].style.height = `${nextHeight}px`;
        }
        if (i === animation.length - 1) {
          setIsDisabled(false);
        }
      }, (i * ANIMATION_SPEED_MS) / 10);
    }
  };