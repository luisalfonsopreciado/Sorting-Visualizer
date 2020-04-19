import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = ({setAlgorithm, reset, executeAlgorithm, toggleShowModal}) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem clicked={toggleShowModal}>SORTING VISUALIZER</NavigationItem>
        <NavigationItem clicked={() => setAlgorithm("mergeSort")}>Merge Sort</NavigationItem>
        <NavigationItem clicked={() => setAlgorithm("bubbleSort")}>Bubble Sort</NavigationItem>
        <NavigationItem clicked={() => setAlgorithm("quickSort")}>Quick Sort</NavigationItem>
        <NavigationItem clicked={() => setAlgorithm("insertionSort")}>Insertion Sort</NavigationItem>
        <NavigationItem clicked={() => setAlgorithm("heapSort")}>Heap Sort</NavigationItem>
        <NavigationItem clicked={reset}>Reset</NavigationItem>
        <NavigationItem clicked={executeAlgorithm}>GO</NavigationItem>
    </ul>
)
export default NavigationItems