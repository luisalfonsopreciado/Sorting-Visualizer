import { insertionSort } from "../InsertionSort";
import { isSorted, getArray } from "./helpers";

it("sorts array in ascending order", () => {
  const arr = getArray(100);
  insertionSort(arr, []);
  expect(isSorted(arr)).toBeTruthy();
});
