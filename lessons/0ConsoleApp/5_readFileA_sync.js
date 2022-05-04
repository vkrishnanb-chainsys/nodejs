// Load the fs (filesystem) module
var fs = require('fs');
let contactData;
try {
  // Read the contents of the file into memory.
  contactData = fs.readFileSync('phonebook.dat', 'utf-8');
  // contactData is a Buffer,
  //convert to string.
  var text = contactData.toString();
  // console.log(text);
  // Break up the file into lines.
  var lines = text.split('\n');

  lines.forEach(function (line) {
    var parts = line.split(' ');
    var name = parts[0];
    var phone = parts[2];
    console.log(name + ' - ' + phone);
  });
} catch (ex) {
  console.log(`ERROR!!!: ${ex}`);
}
console.log('Completed....');
// node readFile.js
