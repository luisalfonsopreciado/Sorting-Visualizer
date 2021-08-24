import { radixSort } from "../RadixSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(radixSort, 100);
});
