import { quickSort } from "../QuickSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(quickSort, 100);
});