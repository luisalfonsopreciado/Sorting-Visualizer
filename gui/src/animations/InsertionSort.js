import { insertionSort } from "../algorithms/InsertionSort";
import { PRIMARY_COLOR, ANIMATION_SPEED_MS} from"../utility/constants";

export const insertionSortAnimation = async (array, setIsDisabled) => {
  const copy = array.slice(0, array.length);
  const animation = insertionSort(copy);
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < animation.length; i++) {
    const [index, height] = animation[i];
    setTimeout(() => {
      arrayBars[index].style.backgroundColor = PRIMARY_COLOR;
      arrayBars[index].style.height = `${height}px`;
      if (i === animation.length - 1) {
        setIsDisabled(false);
      }
    }, (i * ANIMATION_SPEED_MS) / 2);
  }
};
