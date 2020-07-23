export * from "./constants"

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

export const generateRandomArray = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = getRandomInt(550);
  }
  return array;
};
