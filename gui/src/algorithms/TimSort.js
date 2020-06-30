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
  console.log(lows)
  merge(array, 0, 25, 49, animation);
  merge(array, 0, 50, 74, animation);
  merge(array, 0, 75, 99, animation);
  merge(array, 0, 100, 124, animation);
  merge(array, 0, 125, 149, animation);
  merge(array, 0, 150, 174, animation);
  merge(array, 0, 175, 199, animation);
  merge(array, 0, 200, 224, animation);
  merge(array, 0, 225, 249, animation);
};

const merge = (array, low, secondlow, secondhigh, animation) => {
  const helper = [];
  const oldLow = low;
  const high = secondlow - 1;
  while (low <= high && secondlow <= secondhigh) {
    if (array[low] < array[secondlow]) {
      helper.push(array[low]);
      if (low <= high) low++;
    } else {
      helper.push(array[secondlow]);
      if (secondlow <= secondhigh) secondlow++;
    }
  }
  if (low >= high) {
    for (let i = secondlow; i <= secondhigh; i++) {
      helper.push(array[i]);
    }
  }
  if (secondlow >= secondhigh) {
    for (let i = low; i <= high; i++) {
      helper.push(array[i]);
    }
  }
  console.log(helper);
  for (let i = 0; i < helper.length; i++) {
    array[i] = helper[i];
    animation.push([i + oldLow, helper[i]]);
  }
};
