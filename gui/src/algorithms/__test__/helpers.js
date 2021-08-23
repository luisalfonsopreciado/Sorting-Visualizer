/**
 * returns true if the input array is sorted in ascending order.
 * @param {*} arr
 * @returns isSorted - boolean
 */
export const isSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * Creates an array of random integers of length n
 * @param {*} n
 * @returns array
 */
export const getArray = (n) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = getRandomArbitrary(0, 500);
  }
  return arr;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};
