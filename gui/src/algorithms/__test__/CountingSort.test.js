import { countingSort } from "../CountingSort"
import { isSorted, getArray } from "./helpers";

it("sorts array in ascending order", () => {
  const arr = getArray(100);
  countingSort(arr, []);
  expect(isSorted(arr)).toBeTruthy();
});
