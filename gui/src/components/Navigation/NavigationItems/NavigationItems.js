import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem >SORTING VISUALIZER</NavigationItem>
        <NavigationItem clicked={props.mergeSort}>Merge Sort</NavigationItem>
        <NavigationItem clicked={props.bubbleSort}>Bubble Sort</NavigationItem>
        <NavigationItem>Quick Sort</NavigationItem>
        <NavigationItem>Insertion Sort</NavigationItem>
        <NavigationItem >Heap Sort</NavigationItem>
        <NavigationItem clicked={props.reset}>Reset</NavigationItem>
        <NavigationItem >GO</NavigationItem>
    </ul>
)
export default NavigationItems