export const bucketSort = (array, animation) => {
  const buckets = new Array(Math.floor(550 / 10) + 1).fill(null);

  for (let i in buckets) {
    buckets[i] = [];
  }

  for (let i in array) {
    let bucketIndex = Math.floor(array[i] / 10);
    insert(buckets, bucketIndex, array[i], animation);
  }

  let result = [];

  for (let i in buckets) {
    animateBucket(buckets, i, animation);
    result = result.concat(buckets[i]);
  }

  animation.push([result.length - 1, result[result.length - 1]]);

  for (let i in result) {
    array[i] = result[i];
  }

  return animation;
};

const insert = (buckets, bucketIndex, value, animation) => {
  for (let i = 0; i < buckets[bucketIndex].length; i++) {
    const val = buckets[bucketIndex][i];
    if (value <= val) {
      buckets[bucketIndex].splice(i, 0, value);
      animateBucket(buckets, bucketIndex, animation);
      return;
    }
  }
  buckets[bucketIndex].push(value);
  animateBucket(buckets, bucketIndex, animation);
};

const animateBucket = (buckets, bucketIndex, animation) => {
  let pos = getPos(buckets, bucketIndex);
  for (let j = 0; j < buckets[bucketIndex].length; j++) {
    animation.push([pos + j, buckets[bucketIndex][j]]);
  }
};

const getPos = (buckets, bucketIndex) => {
  let count = 0;
  for (let i = 0; i < bucketIndex; i++) {
    count += buckets[i].length;
  }
  return count;
};
