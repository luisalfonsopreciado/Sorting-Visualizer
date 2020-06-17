import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import * as cts from "../../../utility";
import DropDown from "./Dropdown/DropDown"

const NavigationItems = ({
  setAlgorithm,
  reset,
  executeAlgorithm,
  toggleShowModal,
  algorithm,
}) => (
  <>
    <NavigationItem clicked={toggleShowModal}>
      SORTING VISUALIZER
    </NavigationItem>
    <DropDown clicked={() => setAlgorithm(cts.MERGE_SORT)}>
      Merge Sort
    </DropDown>
    <DropDown clicked={() => setAlgorithm(cts.BUBBLE_SORT)}>
      Bubble Sort
    </DropDown>
    <DropDown clicked={() => setAlgorithm(cts.QUICK_SORT)}>
      Quick Sort
    </DropDown>
    <DropDown clicked={() => setAlgorithm(cts.INSERTION_SORT)}>
      Insertion Sort
    </DropDown>
    <DropDown clicked={() => setAlgorithm(cts.HEAP_SORT)}>
      Heap Sort
    </DropDown>
    <DropDown clicked={reset}>Reset</DropDown>
    <NavigationItem clicked={executeAlgorithm}>
      Visualize {algorithm}!
    </NavigationItem>
    
  </>
);
export default NavigationItems;
