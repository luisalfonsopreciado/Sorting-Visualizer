import { bucketSort } from "../BucketSort";
import { testSortAscending } from "./helpers";

it("sorts array in ascending order", () => {
  testSortAscending(bucketSort, 100);
});
