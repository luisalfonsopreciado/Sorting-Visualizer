// animation.push({
//    high,
//     arr[high],
//      null,
//      null,
//   });
const partition = (arr, low, high, animation) => {
  const pivot = arr[high];
  animation.push([high, arr[high], null, null]);
  let i = low - 1; // index of smaller element
  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
    animation.push([high, arr[high], low, arr[low]]);
    if (arr[j] < pivot) {
      i++;
      animation.push([high, arr[low], low, arr[high]]);
      // swap arr[i] and arr[j]
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // swap arr[i+1] and arr[high] (or pivot)
  animation.push([high, arr[low], low, arr[high]]);
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
};

const sort = (arr, low, high, animation) => {
  if (low < high) {
    /* pi is partitioning index, arr[pi] is  
          now at right place */
    const pi = partition(arr, low, high, animation);

    // Recursively sort elements before
    // partition and after partition
    sort(arr, low, pi - 1, animation);
    sort(arr, pi + 1, high, animation);
  }
};
const animation = [];
const arr = [
  1,
  2,
  3,
  4,
  6,
  7,
  7,
  4,
  32,
  342,
  645,
  5,
  424,
  1,
  2436,
  43,
  53,
  232,
  5,
  68,
];
sort(arr, 0, arr.length - 1, animation);
console.log(arr);
console.log(animation);
