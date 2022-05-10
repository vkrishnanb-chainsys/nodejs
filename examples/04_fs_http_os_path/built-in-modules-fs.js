//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules. 

const {readFileSync, writeFileSync} = require('fs'); //fs modules

//read file sync
const myfile = readFileSync('./content/myfile.txt','utf8');
const mysecondfile = readFileSync('./content/mysecondfile.txt','utf8');
console.log(myfile,mysecondfile);

//write file
writeFileSync('./content/writefile.txt',`my content to write ${myfile}, ${mysecondfile}`)


