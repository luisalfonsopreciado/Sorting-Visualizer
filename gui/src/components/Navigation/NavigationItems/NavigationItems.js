import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import * as cts from "../../../utility";

const NavigationItems = ({
  setAlgorithm,
  reset,
  executeAlgorithm,
  toggleShowModal,
  algorithm,
}) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem clicked={toggleShowModal}>
      SORTING VISUALIZER
    </NavigationItem>
    <NavigationItem clicked={() => setAlgorithm(cts.MERGE_SORT)}>
      Merge Sort
    </NavigationItem>
    <NavigationItem clicked={() => setAlgorithm(cts.BUBBLE_SORT)}>
      Bubble Sort
    </NavigationItem>
    <NavigationItem clicked={() => setAlgorithm(cts.QUICK_SORT)}>
      Quick Sort
    </NavigationItem>
    <NavigationItem clicked={() => setAlgorithm(cts.INSERTION_SORT)}>
      Insertion Sort
    </NavigationItem>
    <NavigationItem clicked={() => setAlgorithm(cts.HEAP_SORT)}>
      Heap Sort
    </NavigationItem>
    <NavigationItem clicked={reset}>Reset</NavigationItem>
    <NavigationItem clicked={executeAlgorithm}>
      Visualize {algorithm}!
    </NavigationItem>
  </ul>
);
export default NavigationItems;
