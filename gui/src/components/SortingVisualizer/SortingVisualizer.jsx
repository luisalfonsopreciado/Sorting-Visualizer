import React, { Component } from 'react'
import Col from "../Col/Col"

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
  

class SortingVisualizer extends Component{
    componentDidMount(){
        let array = []
        for(let i = 0; i < 200; i++){
            array[i] = getRandomInt(200);
        }
        console.log(array)
    }
    render(){
        return(
            <div>
                <Col/>
            </div>
        )
    }
}
export default SortingVisualizer;