import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import { CustomDialog } from "./components/UI/CustomDialog/CustomDialog";
import Paper from "@material-ui/core/Paper";
import * as cts from "./utility/index"

const App = () => {
  const [isOpen, setIsOpen] = useState("");
  const [infoOpen, setInfoOpen] = useState(false);
  const [type, setType] = useState(cts.MERGE_SORT);

  useEffect(() => {
    handleDialogOpen();
  }, []);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };
  const handleInfoOpen = (type) => {
    setType(type);
    setInfoOpen(true);
  };
  const handleInfoClose = () => {
    setInfoOpen(false);
  };
  return (
    <>
      <SortingVisualizer
        openModal={handleDialogOpen}
        openInfo={handleInfoOpen}
      />
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
      <CustomDialog isOpen={infoOpen} handleClose={handleInfoClose}>
        <h1>{type}</h1>
        <p>{cts.sortData[type].description}</p>
      </CustomDialog>
    </>
  );
};
export default App;
