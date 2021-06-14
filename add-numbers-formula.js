const performance = require("perf_hooks").performance;

const addNumbersUsingFormula = (num) => (num * (num + 1)) / 2;

const t1 = performance.now();
addNumbersUsingFormula(1000000);
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

/* 
OUTPUT:

Time Elapsed: 0.000027805998921394348 seconds
Time Elapsed: 0.00003475499898195267 seconds
Time Elapsed: 0.000020087998360395432 seconds
Time Elapsed: 0.00003210300207138062 seconds

*/
