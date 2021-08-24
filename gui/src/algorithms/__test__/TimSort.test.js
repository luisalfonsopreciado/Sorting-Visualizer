import { timSort } from "../TimSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(timSort, 100);
});
