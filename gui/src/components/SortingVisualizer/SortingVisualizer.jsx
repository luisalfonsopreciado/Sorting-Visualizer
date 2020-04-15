import React, { Component } from 'react'
import Col from "../Col/Col"
import classes from "./SortingVisualizer.module.css"
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
function generateRandomArray(length){
    let array = []
        for(let i = 0; i < length; i++){
            array[i] = getRandomInt(200);
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

    onSortHandler = () => {
        let array = this.state.array
        array.sort((a, b) => a - b)
        this.setState({array})
    }
    onResetHandler = () => {
        const array = generateRandomArray(200)
        this.setState({array})
    }

    render(){
        let Columns = this.state.array.map((value, key) => <Col key={key} height={value * 1.5}/>)
        
        return(
            <div classes={classes.Container}>
                {Columns}
                <button onClick={this.onSortHandler}>Sort</button>
                <button onClick={this.onResetHandler}>Reset</button>
            </div>
        )
    }
}
export default SortingVisualizer;