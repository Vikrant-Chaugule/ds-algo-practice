// Create a function that takes array of numbers and returns the sorted version of
//  that array using the insertion sort algorithm.

// treat the array in 2 parts, sorted and unsorted
// sorted part starts at index 0 and unsorted part starts at index 1 initially
// gradually move the unsorted part to the sorted part

// [3, 2, 8, 1, 4]

// [3] sorted  [2, 8, 1, 4] unsorted
// 3 > 2 ?? yes, move 3 to the right and insert 2
// 2 3 8 1 4

// [2, 3] [8, 1, 4]
// 3 > 8 ?? No
// No shifting
// 2 3 8 1 4

// [2, 3, 8] [1, 4]
// 8 > 1 ?? yes, move 8 to the right
// 3 > 1 ?? yes, move 3 to the right
// 2 > 1 ?? yes, move 2 to the right and insert 1
// 1 2 3 8 4

// [1 2 3 8] [4]
// 8 > 4 ?? yes, move 8 to the right
// 3 > 4 ?? no, insert 4
// 1 2 3 4 8

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let numberToInsert = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > numberToInsert; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = numberToInsert;
  }
  return array;
};

insertionSort([3, 2, 8, 1, 4, 9]);
