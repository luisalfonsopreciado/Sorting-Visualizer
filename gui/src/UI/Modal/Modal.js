import React from "react";
import "./Modal.css";
import Transition from "react-transition-group/Transition";

const animationTiming = {
  enter: 400,
  exit: 400,
};

const Modal = (props) => {
  return (
    <Transition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const classes = [
          "Modal",
          state === "entering"
            ? "ModalOpen"
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];
        return (
          <div className={classes.join(" ")}>
            <h1>Welcome to The Sorting Visualizer!</h1>
            <h4>
              This Project Helps CS Enthusiasts visualize popular sorting
              algorithms. To get Started, click on a sorting algorithm located
              in the header and press GO.
            </h4>
            <button onClick={props.clicked}>Dismiss</button>
          </div>
        );
      }}
    </Transition>
  );
};
export default Modal;
