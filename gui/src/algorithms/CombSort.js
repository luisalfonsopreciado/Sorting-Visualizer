export const combSort = (array, animation) => {
  let n = Math.floor(array.length / 1.3);

  while (n > 0 && !isSorted(array)) {
    for (let i = n; i < array.length; i++) {
      if (array[i - n] > array[i]) swap(array, i - n, i, animation);
    }
    n = Math.max(Math.floor(n / 1.3), 1);
  }
};

const swap = (array, i, j, animation) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  animation.push([i, array[i]]);
  animation.push([j, array[j]]);
};

const isSorted = (array) => {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return true;
};
