import { insertionSort } from "../InsertionSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(insertionSort, 100);
});
