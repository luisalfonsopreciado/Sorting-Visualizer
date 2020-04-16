export const bubbleSort = (enteredArray) => {
  const animation = [];
  const array = enteredArray.slice(0,enteredArray.length);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j + 1 <= array.length - 1) {
        animation.push([j, j + 1, array[j], array[j+1]]);
        if (array[j] > array[j + 1]) {

            let temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
          animation.push([j, j + 1,array[j] ,array[j+1]]);
        } 
      } else {
        break;
      }
    }
  }
  console.log(animation)
  return animation;
};
