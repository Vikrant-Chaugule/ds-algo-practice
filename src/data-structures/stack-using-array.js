// Create a Stack data structure using JS array

// Approach: 1 - Using push and pop methods
const stack = [];

stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
stack.push(4); // [1, 2, 3, 4]
stack.push(5); // [1, 2, 3, 4, 5]

// [1, 2, 3, 4, 5]
// Here 1 is the first element added to the stack and 5 is the last element added to the stack

stack.pop(); // 5 is removed from the stack as it was the last element added
stack.pop(); // 4 is removed from the stack
stack.pop(); // 3 is removed from the stack
stack.pop(); // 2 is removed from the stack
stack.pop(); // 1 is removed from the stack

// stack = []

// Approach: 2 - Using unshift and shift methods
const stack2 = [];
stack2.unshift(1); // [1]
stack2.unshift(2); // [2, 1]
stack2.unshift(3); // [3, 2, 1]
stack2.unshift(4); // [4, 3, 2, 1]
stack2.unshift(5); // [5, 4, 3, 2, 1]

// [5, 4, 3, 2, 1]
// Here 1 is the first element added to the stack and 5 is the last element added to the stack

stack2.shift(); // 5 is removed from the stack as it was the last element added
stack2.shift(); // 4 is removed from the stack
stack2.shift(); // 3 is removed from the stack
stack2.shift(); // 2 is removed from the stack
stack2.shift(); // 1 is removed from the stack

// stack2 = []

// pop-push methods are efficient as they are O(1)
// unshift-shift methods are not efficient as they are O(n)
