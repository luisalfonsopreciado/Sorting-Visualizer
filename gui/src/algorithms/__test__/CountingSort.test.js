import { countingSort } from "../CountingSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(countingSort, 100);
});
