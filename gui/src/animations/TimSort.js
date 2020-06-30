import { timSort } from "../algorithms/TimSort";
import * as cts from"../utility/constants";

export const timSortAnimation = (array, setIsDisabled) => {
  const animations = [];
  timSort([...array], animations);
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
  }, 1);
};
