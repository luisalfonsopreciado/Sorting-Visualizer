export const countingSort = (array, animations) => {
  const newArr = new Array(550 + 1).fill(0);

  for (let i in array) {
    const val = array[i];
    newArr[val] = newArr[val] + 1;
  }

  for (let i = 1; i < newArr.length; i++) {
    newArr[i] = newArr[i] + newArr[i - 1];
  }

const result = new Array(array.length).fill(0);

  for(let i in array){
      const val = array[i];
      const index = newArr[val];  
      result[index - 1] = val;
      newArr[val] = index - 1;
      animations.push([Math.max(index - 1, 0), val]);
      if(i == array.length - 1) animations.push([Math.max(index - 1, 0), val]);
  }
};
