import { combSort } from "../CombSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(combSort, 100);
});
