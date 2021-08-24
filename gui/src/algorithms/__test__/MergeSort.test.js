import { getMergeSortAnimations } from "../MergeSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(getMergeSortAnimations, 100);
});