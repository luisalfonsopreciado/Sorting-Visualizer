import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import * as cts from "../../../utility";
import DropDown from "./Dropdown/DropDown";

const NavigationItems = ({
  setAlgorithm,
  reset,
  executeAlgorithm,
  toggleShowModal,
  algorithm,
  openInfo,
}) => (
  <>
    <NavigationItem clicked={toggleShowModal}>
      SORTING VISUALIZER
    </NavigationItem>
    <DropDown
      clicked={() => setAlgorithm(cts.MERGE_SORT)}
      moreInfo={() => openInfo(cts.MERGE_SORT)}
    >
      Merge Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.BUBBLE_SORT)}
      moreInfo={() => openInfo(cts.BUBBLE_SORT)}
    >
      Bubble Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.QUICK_SORT)}
      moreInfo={() => openInfo(cts.QUICK_SORT)}
    >
      Quick Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.INSERTION_SORT)}
      moreInfo={() => openInfo(cts.INSERTION_SORT)}
    >
      Insertion Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.HEAP_SORT)}
      moreInfo={() => openInfo(cts.HEAP_SORT)}
    >
      Heap Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.SELECTION_SORT)}
      moreInfo={() => openInfo(cts.SELECTION_SORT)}
    >
      Selection Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.COUNTING_SORT)}
      moreInfo={() => openInfo(cts.COUNTING_SORT)}
    >
      Counting Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.RADIX_SORT)}
      moreInfo={() => openInfo(cts.RADIX_SORT)}
    >
      Radix Sort
    </DropDown>
    <DropDown
      clicked={() => setAlgorithm(cts.BUCKET_SORT)}
      moreInfo={() => openInfo(cts.BUCKET_SORT)}
    >
      Bucket Sort
    </DropDown>
    <NavigationItem clicked={reset}>Reset</NavigationItem>
    <NavigationItem clicked={executeAlgorithm}>
        <h3>Visualize {algorithm}!</h3>
    </NavigationItem>
  </>
);
export default NavigationItems;
