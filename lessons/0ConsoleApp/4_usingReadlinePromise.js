// usingReadLinePromise.js
// import * as readline from 'node:readline/promises'; //v 17.0
// npm install --save readline-promise
const readline = require('readline-promise').default;

const rlp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

let bar = null;

rlp.questionAsync('What is your name?').then((answer) => {
  bar = answer;

  console.log('Welcome:' + bar);
});

console.log('\n After');

/** readline/promise  */
// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();
