export const countingSort = (array, animations) => {
  const count = new Array(550 + 1).fill(0);

  // Count ocurrence of each element in the input array
  for (let n of array) {
    count[n]++;
  }

  // Have count[i] be the number of elements less than or equal to i
  for (let i = 1; i < count.length; i++) {
    count[i] = count[i] + count[i - 1];
  }

  const result = new Array(array.length);

  for (let val of array) {
    const index = count[val];
    result[index - 1] = val;
    count[val] = index - 1;
    animations.push([index - 1 , val]);
    animations.push([index - 1 , val]);
  }

  // Copy result into input array
  for (let i = 0; i < result.length; i++) {
    array[i] = result[i];
  }
};
