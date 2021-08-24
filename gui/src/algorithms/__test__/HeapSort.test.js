import { heapSort } from "../HeapSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(heapSort, 100);
});
