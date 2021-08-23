import { MaxHeap } from "../utility/DS/index";

export const heapSort = (array, animations) => {
  const heap = new MaxHeap((x) => x);

  for (let i in array) {
    heap.push(array[i], animations);
  }

  let lastIndex = array.length - 1;

  while (!heap.isEmpty()) {
    const height = heap.pop(animations);
    array[lastIndex] = height;
    animations.push([lastIndex, 0, height, heap.items[0]]);
    lastIndex--;
  }

  return animations;
};
