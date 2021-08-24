import { selectionSort } from "../SelectionSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(selectionSort, 100);
});
