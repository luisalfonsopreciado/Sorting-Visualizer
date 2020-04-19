// animation.push({
//    high,
//     arr[high],
//      null,
//      null,
//   });
const partition = (arr, low, high, animation) => {
  const pivot = arr[high];
  
  let i = low - 1; // index of smaller element
  for (let j = low; j < high; j++) {
    // If current element is smaller than the pivot
     animation.push([high, arr[high], j, arr[j], -1,-1 ]);
    if (arr[j] < pivot) {
      i++;
      // swap arr[i] and arr[j]
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
       animation.push([high, arr[high], j, arr[j] , i , arr[i]]);
    }
  }

  // swap arr[i+1] and arr[high] (or pivot)
  animation.push([high, arr[high], low,arr[low], -1,-1 ]);
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  animation.push([high, arr[high], low,arr[low], -1,-1 ]);
  return i + 1;
};

export const quickSort = (arr, low, high, animation) => {
  if (low < high) {
    /* pi is partitioning index, arr[pi] is  
          now at right place */
    const pi = partition(arr, low, high, animation);
    animation.push([pi, arr[pi], -1, -1, -1,-1 ]);
    // Recursively sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1, animation);
    quickSort(arr, pi + 1, high, animation);
  }
};

