export const bucketSort = (array, animation) => {
  const buckets = new Array(Math.floor(550 / 10) + 1).fill(null);

  for (let i in buckets) {
    buckets[i] = new Array();
  }

  for (let i in array) {
    let bucketIndex = Math.floor(array[i] / 10);
    insert(buckets, bucketIndex, array[i], animation);
  }

  let result = [];

  for (let i in buckets) {
    result = result.concat(buckets[i]);
  }

  for (let i in result) {
    animation.push([i, result[i]]);
  }
  animation.push([result.length - 1, result[result.length - 1]]);

  console.log(result);
  console.log(animation)
  return animation;
};

const insert = (buckets, bucketIndex, value, animation) => {
  for (let i = 0; i < buckets[bucketIndex].length; i++) {
    const val = buckets[bucketIndex][i];
    if (value <= val) {
      const pos = getPos(buckets, bucketIndex);
      animation.push([pos + i + 1, value]);
      buckets[bucketIndex].splice(i, 0, value);
      return;
    }
  }
  const pos = getPos(buckets, bucketIndex);
  animation.push([pos + buckets[bucketIndex].length, value]);
  buckets[bucketIndex].push(value);
};

const getPos = (buckets, bucketIndex) => {
  let count = 0;
  for (let i = 0; i < bucketIndex; i++) {
    count += buckets[i].length;
  }
  return count;
};
