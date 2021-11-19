// Create a function to sort the array using Bubble sort algorithm

const bubbleSort = (array) => {
  const swap = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  };

  // we don't need to iterate through the array if it is already sorted
  let noSwaps;
  // this is important if the array is nearly sorted

  // after each iteration, the largest element will be at the end of the array
  // hence we decreas the end index of i by 1
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1); // swap the elements
        noSwaps = false;
      }
    }
    if (noSwaps) break; // no swaps means the array is already sorted
  }
  return array;
};

// console.log(bubbleSort([55, 3, 11, 6, 9, 12, 100, 101, 99]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
