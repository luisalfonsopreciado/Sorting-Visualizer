import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = ({
  executeAlgorithm,
  setAlgorithm,
  reset,
  toggleShowModal,
}) => {
  return (
    <header className={classes.Toolbar}>
      {/* <DrawerToggle clicked={drawerToggleClicked} /> */}
      <nav className={classes.DesktopOnly}>
        <NavigationItems
          toggleShowModal={toggleShowModal}
          executeAlgorithm={executeAlgorithm}
          setAlgorithm={setAlgorithm}
          reset={reset}
        />
      </nav>
    </header>
  );
};
export default toolbar;
