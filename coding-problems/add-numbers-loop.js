const performance = require("perf_hooks").performance;

const addNumbersUsingLoop = (num) => {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  return total;
};

const t1 = performance.now();
addNumbersUsingLoop(1000000);
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

/* 
OUTPUT:

Time Elapsed: 0.0032644929997622967 seconds
Time Elapsed: 0.0031900190003216265 seconds
Time Elapsed: 0.0031799249984323977 seconds
Time Elapsed: 0.004188839003443718 seconds

*/
