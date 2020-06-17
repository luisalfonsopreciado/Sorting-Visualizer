import React, { useState, useEffect } from "react";
import Col from "../Col/Col";
import * as animations from "../../animations";
import * as cts from "../../utility";
import { generateRandomArray } from "../../utility";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./SortingVisualizer.module.css";

const SortingVisualizer = () => {
  const [showModal, setShowModal] = useState(true);
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

  const toggleShowModal = () => {
    const prevModal = showModal;
    setShowModal(!prevModal);
  };

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
          animations.mergeSortAnimation(array, setIsDisabled);
          break;
        case cts.INSERTION_SORT:
          animations.insertionSortAnimation(array, setIsDisabled);
          break;
        default:
          animations.quickSortAnimation(array, setIsDisabled);
          break;
      }
    }
  };

  let Columns = array.map((value, key) => <Col key={key} height={value} />);

  return (
    <>
      <Toolbar
        toggleShowModal={toggleShowModal}
        executeAlgorithm={executeAlgorithm}
        setAlgorithm={setAlgorithm}
        reset={onResetHandler}
        algorithm={algorithm}
      />
      <div className={styles.ColumnContainer}>{Columns}</div>
      {showModal ? <Backdrop show={showModal} /> : null}
      {showModal ? <Modal clicked={toggleShowModal} show={showModal} /> : null}
    </>
  );
};

export default SortingVisualizer;