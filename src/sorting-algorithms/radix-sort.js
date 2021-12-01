// create a function that takes an array of numbers and returns a sorted array using radix sort

// this function returns the digit at a certain place
// Approach:1
const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

// Approach: 2
// const getDigit = (num, place) => {
//     if(place > 0){
//        return getDigit(Math.floor(num / 10), place - 1)
//     } else if(place === 0) {
//         return Math.floor(num % 10)
//     }
//     return num
// }

// This function returns the number of digits in a number
const countDigits = (num) => {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// This function returns the maximum number of digits of a number in an array
const maxDigits = (array) => {
  let maxDigits = 1;
  array.map((num) => {
    maxDigits = Math.max(maxDigits, countDigits(num));
  });
  return maxDigits;
};

const radixSort = (array) => {
  const digits = maxDigits(array);

  for (let x = 0; x < digits; x++) {
    // let bucket = [[], [], [], [], [], [], [], [], [], []];
    // create a bucket of 10 empty arrays
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      let digit = getDigit(array[i], x);
      // push the number into the bucket
      bucket[digit].push(array[i]);
    }
    // replace the array with the numbers in the bucket
    array = [].concat(...bucket);
  }

  return array;
};

radixSort([999, 3, 12, 2, 1100, 455]);
