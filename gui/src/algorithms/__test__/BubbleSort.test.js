import { bubbleSort } from "../BubbleSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(bubbleSort, 100);
});
