import * as cts from "./index";
export const sortData = {};

sortData[cts.MERGE_SORT] = {
  description:
    "Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves",
};

sortData[cts.BUBBLE_SORT] = {
  description: "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.",
};

sortData[cts.QUICK_SORT] = {
  description: "QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.",
};

sortData[cts.HEAP_SORT] = {
  description: "Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for remaining element.",
};

sortData[cts.INSERTION_SORT] = {
  description: "Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.",
};

sortData[cts.SELECTION_SORT] = {
  description: "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array. 1) The subarray which is already sorted. 2) Remaining subarray which is unsorted. In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."
}

sortData[cts.COUNTING_SORT] = {
  description: "Counting sort is a sorting technique based on keys between a specific range. It works by counting the number of objects having distinct key values (kind of hashing). Then doing some arithmetic to calculate the position of each object in the output sequence."
}
