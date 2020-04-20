import classes from "./App.module.css";
import withClass from "./components/hoc/withClass"
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
export default withClass(SortingVisualizer, classes.Container);
