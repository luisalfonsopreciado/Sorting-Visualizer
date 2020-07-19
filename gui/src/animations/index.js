import * as cts from "../utility/constants";

export * from "./QuickSort";
export * from "./BubbleSort";
export * from "./InsertionSort";
export * from "./MergeSort";
export * from "./HeapSort";
export * from "./SelectionSort";
export * from "./CountingSort";
export * from "./RadixSort";
export * from "./BucketSort";
export * from "./TimSort";
export * from "./TreeSort";
export * from "./CombSort";

export const animate = (animations, setIsDisabled, interval = 10) => {
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
  }, interval);
};

export const animateDouble = (animations, setIsDisabled, interval = 2) => {
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
    }, (i * interval) / 10);
  }
};
