// create a function that takes an array and returns a sorted array using merge sort

// first split aray into two halves, left and right
// keep on splitting until you have two arrays of one element
// then merge the two arrays in order

// [ 10, 24, 76, 73 ]
// split into parts
// left = [10, 24]
// right = [76, 73]

// First Split and merge left part
// [10, 24]
// split into parts
// left = [10]
// right = [24]

// [10] [24]
// merge together in sorting order
// [10, 24]

// Now split and merge right part
// [76, 73]
// split into parts
// left = [76]
// right = [73]

// [76] [73]
// merge together in sorting order
// [73, 76]

// Merge left and right
// [10, 24] [73, 76]
// [10, 24, 73, 76]

// this function takes two sorted arrays and merges them together
const merge = (arr1, arr2) => {
  let newArr = [];
  let i = 0;
  let j = 0;

  // compare the first element of each array
  // if the first element of the first array is less than the first element of the second array
  // push the first element of the first array into the new array
  // otherwise push the first element of the second array into the new array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  //     while(i < arr1.length){
  //         newArr.push(arr1[i]);
  //         i++;
  //     }

  //     while(j < arr2.length){
  //         newArr.push(arr2[j]);
  //         j++;
  //     }

  // push the remaining elements of the left array
  if (i < arr1.length) newArr = [...newArr, ...arr1.slice(i)];
  // push the remaining elements of the right array
  if (j < arr2.length) newArr = [...newArr, ...arr2.slice(j)];

  return newArr;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);

  // split the array into two halves
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  // merge the two halves
  return merge(left, right);
};

mergeSort([5, 2, 8, 1, 3]);
