import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <nav className={classes.DesktopOnly}>
        <NavigationItems
          quickSort={props.quickSort}
          reset={props.reset}
          userId={props.email}
          bubbleSort={props.bubbleSort}
          mergeSort={props.mergeSort}
        />
      </nav>
    </header>
  );
};
export default toolbar;
