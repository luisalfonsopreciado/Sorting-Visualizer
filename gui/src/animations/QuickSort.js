import { quickSort } from "../algorithms/QuickSort";
import {PRIMARY_COLOR, ANIMATION_SPEED_MS} from "../utility/constants"

export const quickSortAnimation = async (array, setIsDisabled) => {
    const copy = array.slice(0, array.length);
    const animation = [];
    quickSort(copy, 0, copy.length - 1, animation);
    setIsDisabled(true);
    const arrayBars = document.getElementsByClassName("array-bar");

    for (let i = 0; i < animation.length; i++) {
      const [
        pivot,
        pivotHeight,
        body,
        bodyHeight,
        small,
        smallHeight,
      ] = animation[i];

      setTimeout(() => {
        arrayBars[pivot].style.height = `${pivotHeight}px`;
        arrayBars[pivot].style.backgroundColor = PRIMARY_COLOR;
        if (body !== -1) {
          arrayBars[body].style.backgroundColor = PRIMARY_COLOR;
          arrayBars[body].style.height = `${bodyHeight}px`;
        }
        if (small !== -1) {
          arrayBars[small].style.backgroundColor = PRIMARY_COLOR;
          arrayBars[small].style.height = `${smallHeight}px`;
        }
        if (i === animation.length - 1) {
          setIsDisabled(false);
        }
      }, i * ANIMATION_SPEED_MS);
    }
}