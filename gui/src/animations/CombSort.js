import { combSort } from "../algorithms/CombSort";
import * as cts from "../utility/constants";

export const combSortAnimation = async (array, setIsDisabled) => {
  const animations = [];
  combSort([...array], animations);
  const arrayBars = document.getElementsByClassName("array-bar");

  let i = 0;

  const intervalId = setInterval(() => {
    const [next, nextHeight] = animations[i];
    arrayBars[next].style.backgroundColor = cts.PRIMARY_COLOR;
    arrayBars[next].style.height = `${nextHeight}px`;

    i++;
    if (i >= animations.length - 1) {
      setIsDisabled(false);
      clearInterval(intervalId);
    }
  }, 10);
};
