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
 * Test for a sortMethod
 * @param {*} sortMethod 
 * @param {*} n 
 */
export const testSortAscending = (sortMethod, n) => {
  const arr = getArray(n);
  sortMethod(arr, []);
  expect(isSorted(arr)).toBeTruthy();
};

/**
 * Returns a random integer between min (inclusive) and max (exclusive)
 */
export const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
