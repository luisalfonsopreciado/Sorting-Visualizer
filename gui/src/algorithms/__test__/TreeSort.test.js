import { treeSort } from "../TreeSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(treeSort, 100);
});
