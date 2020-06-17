import React from "react";
import "./DropDown.css";

const DropDown = ({ children, clicked, moreInfo }) => {
  return (
    <div class="dropdown">
      <button class="dropbtn">
        {children}
      </button>
      <div class="dropdown-content">
        <p onClick={clicked}>Select</p>
        <p onClick={moreInfo}>More Info</p>
      </div>
    </div>
  );
};

export default DropDown;
