//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules.

const os = require('os'); //os modules
console.log(os.userInfo().username); // info about the current user
console.log(os.userInfo().homedir); // info about the home directory of the current user
console.log(`system up time :  ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
