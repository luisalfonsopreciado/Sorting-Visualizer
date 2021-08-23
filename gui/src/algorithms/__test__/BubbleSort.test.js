import { bubbleSort } from "../BubbleSort";
import { isSorted, getArray } from "./helpers";

it("sorts array in ascending order", () => {
  const arr = getArray(100);
  bubbleSort(arr, []);
  expect(isSorted(arr)).toBeTruthy();
});
