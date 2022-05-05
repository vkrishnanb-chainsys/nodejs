// app/index.js
const calc = require('./calculator');

const numbersToAdd = [3, 4, 10, 2];

const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);
