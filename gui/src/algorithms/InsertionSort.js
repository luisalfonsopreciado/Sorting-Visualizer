const insert = (array, rightIndex, value, animation) => {
  let i;
  for (i = rightIndex; array[i] > value && i >= 0; i--) {
    animation.push([i + 1, array[i]]);
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
  animation.push([i + 1, value]);
};

export const insertionSort = (array, animation) => {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i], animation);
  }
  return animation;
};
