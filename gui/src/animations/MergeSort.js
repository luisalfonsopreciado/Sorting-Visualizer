import { getMergeSortAnimations } from "../algorithms/MergeSort";
import { PRIMARY_COLOR, ANIMATION_SPEED_MS, SECONDARY_COLOR } from "../utility/constants";

export const mergeSortAnimation = async (array, setIsDisabled) => {
  const copy = array.slice(0, array.length);
  const animations = getMergeSortAnimations(copy);
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        if (i === animations.length - 1) {
          setIsDisabled(false);
        }
      }, i * ANIMATION_SPEED_MS);
    }
  }
};
