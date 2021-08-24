export const radixSort = (array, animations) => {
  const max = getMax(array);

  for (let exp = 1; max / exp > 1; exp *= 10) {
    countingSort(array, exp, animations);
  }
  console.log(array);
};

const countingSort = (array, exp, animations) => {
  const output = new Array(array.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i in array) {
    count[Math.floor((array[i] / exp) % 10)]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    output[count[Math.floor((array[i] / exp) % 10)] - 1] = array[i];
    count[Math.floor((array[i] / exp) % 10)]--;
  }

  for (let i in array) {
    animations.push([parseInt(i), output[i]]);
    array[i] = output[i];
    animations.push([parseInt(i), output[i]]);
  }
};

const getMax = (arr) => {
  let max = arr[0];
  for (let n of arr) {
    max = Math.max(max, n);
  }
  return max;
};
