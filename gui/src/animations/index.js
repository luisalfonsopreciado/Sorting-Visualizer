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

export const animate = (animations, setIsDisabled) => {
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
