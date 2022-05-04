import * as readline from 'node:readline';

import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output,terminal:true });

//  rl.question('What do you think of Node.js? ',(answer) => {
//      console.log(`Thank you for your valuable feedback: ${answer}`);
//  });

var answer =  rl.question('What do you think of Node.js? ');
console.log(`Thank you for your valuable feedback: ${answer}`);
console.log ('After');
//node 3_usingReadLine.mjs
