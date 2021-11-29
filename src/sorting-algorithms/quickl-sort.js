// create a function that takes in an array and returns a sorted array using quick sort

// [3, 1, 6, 2, 7]
// here pivot = 3
// 1 and 2 are less than 3 so they will on left side
// 6 and 7 are greater than 3 so they will be on right side
//   [2, 1, 3, 6, 7]

// [1, 2 , 3, 7, 6 ] this combination is also valid
// every combination works as long as small number are on the left and large numbers are on right side of pivot

// now pivot 3 is in correct position
//   [2, 1, 3, 6, 7]
// left = [2, 1]
// right = [6, 7]

// left [2, 1]
// pivot = 2
// 1 is smaller than pivot so it will on left
// [1, 2] as there is no other element this array is sorted

// right [6, 7]
// pivot = 8
// 7 is greater than 6 so it will be on right side
// [6, 7] sorted

// now we return these left and right and our original array becomes
// [1, 2, 3, 6, 7] //sorted

// ##############################################################

// this function takes in an array and returns the pivot index
const pivot = (array, start = 0, end = array.length - 1) => {
  let pivot = array[start];
  let pivotIndex = start;
  for (let i = start + 1; i < array.length; i++) {
    if (array[i] < pivot) {
      pivotIndex++;
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
    }
  }
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
  return pivotIndex;
};

const quickSort = (array) => {
  const quickSortHelper = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
      let pivotIndex = pivot(array, left, right);

      // left
      quickSortHelper(array, left, pivotIndex - 1);

      // right
      quickSortHelper(array, pivotIndex + 1, right);
    }
    return array;
  };
  return quickSortHelper(array);
};

quickSort([5, 8, 2, 6, 4, 9]);
