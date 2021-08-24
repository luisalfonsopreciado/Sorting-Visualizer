const partition = (arr, low, high, animation) => {
  const pivot = arr[high];

  let i = low - 1; // index of smaller element
  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
    if (arr[j] < pivot) {
      i++;
      // swap arr[i] and arr[j]
      swap(arr, i, j, animation);
    }
  }

  // swap arr[i+1] and arr[high] (or pivot)
  swap(arr, i + 1, high, animation);

  return i + 1;
};

export const quickSort = (arr, animation) => {
  quickSortRecursive(arr, 0, arr.length - 1, animation);
}

const quickSortRecursive = (arr, low, high, animation) => {
  if (low < high) {
    const part = partition(arr, low, high, animation);
    // Recursively sort elements before
    // partition and after partition
    quickSortRecursive(arr, low, part - 1, animation);
    quickSortRecursive(arr, part + 1, high, animation);
  }
};

const swap = (arr, i, j, animation) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  animation.push([i, arr[i]]);
  animation.push([j, arr[j]]);
};
