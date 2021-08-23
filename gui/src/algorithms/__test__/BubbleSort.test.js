import { bubbleSort } from "../BubbleSort";
import { isSorted } from "./helpers";

it("sorts array in ascending order", () => {
  const arr = [5, 3, 67, 9, 3, 1, 5, 8, 4];
  bubbleSort(arr, []);
  expect(isSorted(arr)).toBeTruthy();
});
