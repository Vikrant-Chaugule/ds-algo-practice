// create a linearSearch function
// linear search is the simplest search algorithm and it iterates through
//  the array and checks if the element is present in the array or not
//  if the element is present then it returns the index of the element
//  if the element is not present then it returns -1

// Approach 1: Without any in-built method
const linearSearch = (array, elementToSearch) => {
    let foundIndex = -1; // not found
    for(let i=0; i< array.length; i++){
        if(array[i] === elementToSearch){
            foundIndex = i;
            break;
        }
    }
    return foundIndex;
};

// console.log(linearSearch([4,1,8,9,10], 11));

// Approach 1: With the help of in-built method
// returns true if the element is present in the array or false if not

const linearSearch2 = (array, elementToSearch) => {  
    return array.some((element) => element === elementToSearch)
}
console.log(linearSearch2([4,1,8,9,10], 10));
