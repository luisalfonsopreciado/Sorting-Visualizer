export const selectionSort = (arr, animations) => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        minIndex = j;
        min = arr[j];
      }
    }
    animations.push([i, minIndex, arr[i], arr[minIndex]]);
    swap(arr, i, minIndex)
    animations.push([i, minIndex, arr[i], arr[minIndex]]);
    min = arr[Math.min(i + 1, arr.length - 1)];
  }
  console.log(arr);
  return animations;
};

const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
