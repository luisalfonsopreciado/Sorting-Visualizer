import React, { useEffect, useState } from "react";
import classes from "./App.module.css";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import { CustomDialog } from "./components/UI/CustomDialog/CustomDialog";
import Paper from "@material-ui/core/Paper";
import marked from "marked";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    padding: "20px",
  },
});

const App = () => {
  const [isOpen, setIsOpen] = useState("");
  const [infoOpen, setInfoOpen] = useState(false);
  const [markdown, setMarkDown] = useState();
  const styles = useStyles()

  useEffect(() => {
    handleDialogOpen();
  }, []);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };

  const handleDialogClose = () => {
    setIsOpen(false);
  };

  const handleInfoOpen = async (type) => {
    const info = await import(`./info/${type}.md`);
    fetch(info.default)
      .then((res) => {
        console.log(res);
        return res.text();
      })
      .then((text) => setMarkDown(marked(text)));
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
        <Paper className={styles.paper}>
          <h1>Welcome to The Sorting Visualizer!</h1>
          <p>
            This Project Helps CS Enthusiasts visualize popular sorting
            algorithms. To get Started, click on a sorting algorithm located in
            the header and press Visualize!.
          </p>
          <p>For a better Experience, set your browser to full width</p>
        </Paper>
      </CustomDialog>

      {/* Algorithm info */}
      <CustomDialog isOpen={infoOpen} handleClose={handleInfoClose}>
        <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
      </CustomDialog>
    </>
  );
};
export default App;
