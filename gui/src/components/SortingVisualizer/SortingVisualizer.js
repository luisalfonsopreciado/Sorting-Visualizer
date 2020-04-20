import React, { PureComponent, Fragment } from "react";
import Col from "../Col/Col";
import withClass from "../hoc/withClass"
import classes from "./SortingVisualizer.module.css";
import { bubbleSort } from "../../algorithms/BubbleSort";
import { quickSort } from "../../algorithms/QuickSort";
import { insertionSort } from "../../algorithms/InsertionSort";
import { getMergeSortAnimations } from "../../algorithms/MergeSort";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Modal from "../../UI/Modal/Modal";
import Backdrop from "../../UI/Backdrop/Backdrop";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function generateRandomArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = getRandomInt(300) * 2.5;
  }
  return array;
}
const NUMBER_COLUMNS = 300;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "green";
const ANIMATION_SPEED_MS = 1;
class SortingVisualizer extends PureComponent {
  state = {
    showModal: true,
    algorithm: "",
    array: [],
    sorted: false,
    disabled: false,
  };
  componentDidMount() {
    this.onResetHandler();
  }
  toggleShowModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  setAlgorithm = (algorithm) => {
    this.setState({ algorithm: algorithm });
  };
  executeAlgorithm = () => {
    if(this.state.sorted){
      this.onResetHandler()
    }
    if (!this.state.disabled) { 
      this.setState({ sorted: true , disabled: true,});
      switch (this.state.algorithm) {
        case "bubbleSort":
          this.bubbleSort();
          break;
        case "mergeSort":
          this.mergeSort();
          break;
        case "quickSort":
          this.quickSort();
          break;
        case "heapSort":
          this.mergeSort();
          break;
        case "insertionSort":
          this.insertionSort();
          break;
        default:
          this.quickSort();
          break;
      }
    }
  };
  quickSort = async () => {
    const array = this.state.array.slice(0, this.state.array.length);
    const animation = [];
    quickSort(array, 0, array.length - 1, animation);
    this.setState({ disabled: true });
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animation.length; i++) {
      const [
        pivot,
        pivotHeight,
        body,
        bodyHeight,
        small,
        smallHeight,
      ] = animation[i];

      setTimeout(() => {
        arrayBars[pivot].style.height = `${pivotHeight}px`;
        arrayBars[pivot].style.backgroundColor = PRIMARY_COLOR;
        if (body !== -1) {
          arrayBars[body].style.backgroundColor = PRIMARY_COLOR;
          arrayBars[body].style.height = `${bodyHeight}px`;
        }
        if (small !== -1) {
          arrayBars[small].style.backgroundColor = PRIMARY_COLOR;
          arrayBars[small].style.height = `${smallHeight}px`;
        }
        if (i === animation.length - 1) {
          this.setState({ disabled: false });
        }
      }, i * ANIMATION_SPEED_MS);
    }
  };
  bubbleSort = async () => {
    let array = this.state.array;
    const animation = bubbleSort(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animation.length; i++) {
      const [prev, next, prevHeight, nextHeight] = animation[i];

      setTimeout(() => {
        arrayBars[prev].style.backgroundColor = PRIMARY_COLOR;
        arrayBars[next].style.backgroundColor = SECONDARY_COLOR;
        if (nextHeight || prevHeight) {
          arrayBars[prev].style.height = `${prevHeight}px`;
          arrayBars[next].style.height = `${nextHeight}px`;
        }
        if (i === animation.length - 1) {
          this.setState({ disabled: false });
        }
      }, i * ANIMATION_SPEED_MS /10);
    }
  };
  insertionSort = async () => {
    const array = this.state.array.slice(0, this.state.array.length);
    const animation = insertionSort(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animation.length; i++) {
      const [index, height] = animation[i];
      setTimeout(() => {
        arrayBars[index].style.backgroundColor = PRIMARY_COLOR;
        arrayBars[index].style.height = `${height}px`;
        if (i === animation.length - 1) {
          this.setState({ disabled: false });
        }
      }, i * ANIMATION_SPEED_MS / 2);
    }
  };
  mergeSort = async () => {
    const array = this.state.array.slice(0, this.state.array.length);
    const animations = getMergeSortAnimations(array);
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
          if (i === animations.length - 1) {
            this.setState({ disabled: false });
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };
  onResetHandler = () => {
    const array = generateRandomArray(NUMBER_COLUMNS);
    if(!this.state.disabled){
      this.setState({ array, sorted: false , disabled: false});
    }
    
  };
  render() {
    let Columns = this.state.array.map((value, key) => (
      <Col key={key} height={value} />
    ));

    return (
      <Fragment>
        <Toolbar
          toggleShowModal={this.toggleShowModal}
          executeAlgorithm={this.executeAlgorithm}
          setAlgorithm={this.setAlgorithm}
          reset={this.onResetHandler}
        ></Toolbar>
        {Columns}
        {this.state.showModal ? <Backdrop show={this.state.showModal} /> : null}
        {this.state.showModal ? (
          <Modal clicked={this.toggleShowModal} show={this.state.showModal} />
        ) : null}
      </Fragment>
    );
  }
}
export default withClass(SortingVisualizer, classes.Container);
