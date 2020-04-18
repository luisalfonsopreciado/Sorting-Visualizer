import React, { Component } from "react";
import Col from "../Col/Col";
import classes from "./SortingVisualizer.module.css";
import { bubbleSort } from "../../algorithms/BubbleSort";
import { getMergeSortAnimations } from "../../algorithms/MergeSort";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function generateRandomArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = getRandomInt(200) * 2.5;
  }
  return array;
}
const NUMBER_COLUMNS = 300
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "green";
const ANIMATION_SPEED_MS = 1;
class SortingVisualizer extends Component {
  state = {
    array: [],
    sorted: false,
  };
  componentDidMount() {
    this.onResetHandler();
  }
  bubbleSort = async () => {
    let array = this.state.array;
    const animation = bubbleSort(array);
    this.setState({ array , disabled: true});
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animation.length; i++) {
      const [prev, next, prevHeight, nextHeight] = animation[i];

      setTimeout(() => {
        arrayBars[prev].style.backgroundColor = "turquoise";
        arrayBars[next].style.backgroundColor = "green";
        if (nextHeight || prevHeight) {
          arrayBars[prev].style.height = `${prevHeight}px`;
          arrayBars[next].style.height = `${nextHeight}px`;
        }
        if(i === animation.length-1){
          this.setState({disabled: false})
        }
      }, i * 1);
    }
  };
  mergeSort = async() => {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
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
          if(i === animations.length-1){
            this.setState({disabled: false})
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  onSortHandler = () => {
    let array = this.state.array;
    bubbleSort(array);
    this.setState({ array });
  };
  onResetHandler = () => {
    const array = generateRandomArray(NUMBER_COLUMNS);
    this.setState({ array });
  };
  render() {
    let Columns = this.state.array.map((value, key) => (
      <Col key={key} height={value} />
    ));

    return (
      <div classes={classes.Container}>
          <Toolbar reset={this.onResetHandler} bubbleSort={this.bubbleSort} mergeSort={this.mergeSort}></Toolbar>
        {Columns}
      </div>
    );
  }
}
export default SortingVisualizer;
