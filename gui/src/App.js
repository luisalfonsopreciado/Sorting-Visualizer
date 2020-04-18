import React from 'react';
import classes from './App.module.css';
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer"
function App() {
  return (
      <div className={classes.Container}>
        <SortingVisualizer/>
      </div>
      
  );
}

export default App;
