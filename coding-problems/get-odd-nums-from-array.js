// Get odd numbers from an array using a recursive helper function.
// Sample Input: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Sample Output: [1, 3, 5, 7, 9]

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Approach 1
const getOddNumsFromArray1 = nums => {
    let oddNums = [];
    let index = 0;

    const helper = nums => {
        if(nums[index] === undefined) return;
        if(nums[index] %2 !== 0) oddNums.push(nums[index]);
        index++;
        helper(nums)
    }

    helper(nums)
    return oddNums;
}
getOddNumsFromArray1(input);


// Approach 2
const getOddNumsFromArray2 = nums => {
    let oddNums = [];

    const helper = nums => {
        if(nums.length === 0) return;
        if(nums[0] % 2 !== 0) oddNums.push(nums[0]);
        helper(nums.slice(1))
    }

    helper(nums)
    return oddNums;
}
getOddNumsFromArray2(input);


// Approach 3
const getOddNumsFromArray3 = nums => {
    let oddNums = [];

    if(nums.length === 0) return oddNums;
    if(nums[0] % 2 !== 0) oddNums.push(nums[0]);

    oddNums = oddNums.concat(getOddNumsFromArray3(nums.slice(1)))
    return oddNums;
}
getOddNumsFromArray3(input);
