// Create a queue using an array.

// Approach:1 Using pop and shift methods
const queue = [];
queue.push(10); // 10 is the first element
queue.push(20); // 10 20
queue.push(30); // 10 20 30
// [10, 20, 30]

queue.shift(); // 10 will be removed as it is the first element
queue.shift(); // 20
queue.shift(); // 30

// shift() is O(n) and pop() is O(1)

// Approach:2 Using unshift and pop methods
const queue2 = [];
queue2.unshift(10); // 10
queue2.unshift(20); // 20 10
queue2.unshift(30); // 30 20 10
// [30, 20, 10]

queue2.pop(); // 10 will be removed as it is the first element
queue2.pop(); // 20
queue2.pop(); // 30

// unshift() is O(n) and pop() is O(1)
