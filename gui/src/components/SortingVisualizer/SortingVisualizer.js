import React, { useState, useEffect } from "react";
import Col from "../Col/Col";
import * as animations from "../../animations";
import * as cts from "../../utility";
import { generateRandomArray } from "../../utility";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import styles from "./SortingVisualizer.module.css";

const SortingVisualizer = ({ openModal, openInfo }) => {
  const [algorithm, setAlgorithm] = useState(cts.QUICK_SORT);
  const [array, setArray] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onResetHandler = () => {
    const array = generateRandomArray(cts.NUMBER_COLUMNS);
    if (!isDisabled) {
      setArray(array);
      setIsSorted(false);
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    onResetHandler();
  }, []);

  const executeAlgorithm = () => {
    if (isSorted) {
      onResetHandler();
    }
    if (!isDisabled) {
      setIsSorted(true);
      setIsDisabled(true);

      switch (algorithm) {
        case cts.BUBBLE_SORT:
          animations.bubbleSortAnimation(array, setIsDisabled);
          break;
        case cts.MERGE_SORT:
          animations.mergeSortAnimation(array, setIsDisabled);
          break;
        case cts.QUICK_SORT:
          animations.quickSortAnimation(array, setIsDisabled);
          break;
        case cts.HEAP_SORT:
          animations.heapSortAnimation(array, setIsDisabled);
          break;
        case cts.INSERTION_SORT:
          animations.insertionSortAnimation(array, setIsDisabled);
          break;
        case cts.SELECTION_SORT:
          animations.selectionSortAnimation(array, setIsDisabled);
          break;
        case cts.COUNTING_SORT:
          animations.countingSortAnimation(array, setIsDisabled);
          break;
        case cts.RADIX_SORT:
          animations.radixSortAnimation(array, setIsDisabled);
          break;
        default:
          animations.quickSortAnimation(array, setIsDisabled);
          break;
      }
    }
  };

  let Columns = array.map((value, key) => <Col key={key} height={value} />);

  return (
    <div className={styles.ColumnContainer}>
      <Toolbar
        toggleShowModal={openModal}
        executeAlgorithm={executeAlgorithm}
        setAlgorithm={setAlgorithm}
        reset={onResetHandler}
        algorithm={algorithm}
        openInfo={openInfo}
      />
      <div style={{ marginTop: "30px" }}>{Columns}</div>
    </div>
  );
};

export default SortingVisualizer;
