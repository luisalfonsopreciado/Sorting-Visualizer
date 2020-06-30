const insert = (array, rightIndex, min, value, animation) => {
  var i;
  for (i = rightIndex; array[i] > value && i >= min; i--) {
    animation.push([i + 1, array[i]]);
    array[i + 1] = array[i];
  }

  array[i + 1] = value;
  animation.push([i + 1, value]);
};

const insertionSort = (array, start, end, animation) => {
  for (let i = start; i < end; i++) {
    insert(array, i - 1, start, array[i], animation);
  }
};

export const timSort = (array, animation) => {
  for (let i = 0; i < array.length; i += 25) {
    insertionSort(array, i, i + 25, animation);
  }
  let lows = [0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) lows.push(i);
  }
};

// const merge = (array, low, high, secondlow, secondhigh, animation) => {
//   const helper = [];
//   const oldLow = low;
//   console.log(array[secondhigh], array[high]);

//   console.log(helper);

//   for (let i = 0; i < helper.length; i++) {
//     animation.push([i + oldLow, helper[i]]);
//   }
// };

const merge = (array, l, m, r, animation) => {
  //Find sizes of two subarrays to be merged
  const n1 = m - 1 + 1;
  const n2 = r - m;

  //Create temp arrays
  const L = [];
  const R = [];
  //merge the temp arrays
  //Initial indexes of first and second subarrays
  let i,
    j = 0;
  //Copy data to temp arrays
  for (let i = 0; i < n1; i++) {
    L[i] = array[l + i];
  }
  for (let i = 0; i < n2; i++) {
    R[i] = array[m + 1 + j];
  }

  //Initial index of merged sub array
  let k = 1;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      array[k] = L[i];
      i++;
    } else {
      array[k] = R[j];
      j++;
    }
    k++;
  }

  //Copy remaining elements of L[] if any
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }

  //Copy remaining elements of R[] if any
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
  for (let i = 0; i < array.length; i++) {
    animation.push([i, array[i]]);
  }
};
