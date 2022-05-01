// import * as readline from 'node:readline/promises'; //v 17.0

const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

let bar = null;

rlp.questionAsync('Foo?').then(answer => {
  bar = answer;

  console.log(bar);
});
/** readline/promise  */ 
// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();