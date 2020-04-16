import React, { Component } from 'react'
import Col from "../Col/Col"
import classes from "./SortingVisualizer.module.css"
import {bubbleSort} from "../../algorithms/BubbleSort"

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}
function generateRandomArray(length){
    let array = []
        for(let i = 0; i < length; i++){
            array[i] = getRandomInt(200) * 2.5;
        }
  return array;
}

class SortingVisualizer extends Component{
    state ={
        array: []
    }
    componentDidMount(){
       this.onResetHandler()
    }
    bubbleSort = async () => {
        let array = this.state.array
        const animation = bubbleSort(array)
        this.setState({array})
        const arrayBars = document.getElementsByClassName('array-bar')
        for(let i = 0; i < animation.length; i++){
            const [prev, next, prevHeight, nextHeight] = animation[i]
            
            setTimeout(() => {
                arrayBars[prev].style.backgroundColor = "turquoise"
                arrayBars[next].style.backgroundColor = "green"
                if(nextHeight || prevHeight){
                    arrayBars[prev].style.height = `${prevHeight}px`
                    arrayBars[next].style.height = `${nextHeight}px`
                }
                
              }, i * 1);
        }
    }
    mergeSort = () => {
        let array = this.state.array
        array.sort((a,b) => a - b)
        this.setState({array})
    }
    onSortHandler = () => {
        let array = this.state.array
        bubbleSort(array)
        this.setState({array})
    }
    onResetHandler = () => {
        const array = generateRandomArray(50)
        this.setState({array})
    }
    render(){
        let Columns = this.state.array.map((value, key) => <Col key={key} height={value }/>)
        
        return(
            <div classes={classes.Container}>
                {Columns}
                <button onClick={this.bubbleSort}>Bubble Sort</button>
                <button onClick={this.mergeSort}>Merge Sort</button>
                <button onClick={this.onResetHandler}>Reset</button>
            </div>
        )
    }
}
export default SortingVisualizer;