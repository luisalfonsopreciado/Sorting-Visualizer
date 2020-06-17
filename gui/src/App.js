import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import { CustomDialog } from "./components/UI/CustomDialog/CustomDialog";
import Paper from "@material-ui/core/Paper";

const App = () => {
  const [isOpen, setIsOpen] = useState("");
  useEffect(() => {
    handleDialogOpen();
  }, []);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <SortingVisualizer openModal={handleDialogOpen} />
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        className={classes.customDialog}
      >
        <Paper>
          <h1>Welcome to The Sorting Visualizer!</h1>
          <h4>
            This Project Helps CS Enthusiasts visualize popular sorting
            algorithms. To get Started, click on a sorting algorithm located in
            the header and press GO.
          </h4>
          <p>For a better Experience, Use use browser to full width</p>
        </Paper>
      </CustomDialog>
    </>
  );
};
export default App;
