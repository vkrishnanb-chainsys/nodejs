//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules.
//path modules
const path = require('path');
const filePath = path.join('/content/', 'myfile.txt');

const absolute = path.resolve(__dirname, 'content', 'myfile.txt');

console.log(__dirname);
console.log(filePath);
console.log(absolute);
