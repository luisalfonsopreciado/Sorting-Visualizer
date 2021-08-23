import { heapSort } from "../HeapSort";
import { isSorted, getArray } from "./helpers";

it("sorts array in ascending order", () => {
  const arr = getArray(100);
  heapSort(arr, []);
  expect(isSorted(arr)).toBeTruthy();
});
