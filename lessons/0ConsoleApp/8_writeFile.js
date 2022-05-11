// writeFile.js
// Load the fs (filesystem) module
var fs = require('fs');
var content = 'Tom and Jerry are very good friends';
var writeStream = fs.createWriteStream('movies.txt');
writeStream.write(content, 'UTF-8');
writeStream.end();
// Handle finish event
writeStream.on('finish', function () {
  console.log('content written to the File ');
});
// Handle error event
writeStream.on('error', function (err) {
  console.log(`ERROR!!! ${err.stack}`);
});
console.log('End...');
