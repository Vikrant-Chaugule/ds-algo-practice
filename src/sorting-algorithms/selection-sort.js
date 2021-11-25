// Create a function that takes an array of numbers and returns a sorted version of that array.
// Use the selection sort algorithm to sort the array.

// find the min from the array and swap with 0th index at the end
// again find the min from the remaining array and swap with 1st index
// after each iteration swapping position should be increased by 1

// 5 4 1 8 2 // min 1
// swap
// 1 4 5 8 2 // min 2
// swap
// 1 2 5 8 4 // min 4
// swap
// 1 2 4 8 5 // min 5
// swap
// 1 2 4 5 8

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }

    if (i !== min) [array[min], array[i]] = [array[i], array[min]];
  }
  return array;
};

selectionSort([1, 2, 5, 4]);
