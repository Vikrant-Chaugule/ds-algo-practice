// create a binarySearch function

// The array must be sorted to use the Binary Search
// First, we create three-pointers start, middle, end
// then we check if the given search element is equal or greater than or lesser than the middle element
// if it's equal, we found the element
// if it's less than middle then we search in first half of an array
// if it's greater than middle then we search in second half of an array
// We continue this process till we find the element or else we return -1

// Approach 1: With Recursion
const binarySearch = (array, elementToSearch, start, end) => {
    if(end >= start) {
        let middle = Math.floor((start + end) / 2);
        if(array[middle] === elementToSearch) return middle;
        else if(array[middle] > elementToSearch) return binarySearch(array, elementToSearch, start, middle -1)
        else if(array[middle] < elementToSearch) return binarySearch(array, elementToSearch, middle + 1, end)
    }
    return -1; // not found
}


// Approach 2: Without Recursion
const binarySearch2 = (array, elementToSearch) => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2)
    while(array[middle] !== elementToSearch){
        if(end >= start){
            if(array[middle] < elementToSearch) start = middle + 1;
            else end = middle -1;
            middle = Math.floor((start + end) / 2)
        } else return -1; // not found
    }
    return middle;
}