// Load the fs (filesystem) module
var fs = require('fs');

console.log('start reading a file...');
// Read the contents of the file into memory.
// These error-first callbacks are in the heart of Node.js itself –
// the core modules are using it as well as most of the modules found on NPM.
/**
 * Things to notice here:
 *        error-handling:   instead of a try-catch block you have to check for errors in the callback.
 *        no return value: async functions don’t return values,
 *                          but values will be passed to the callbacks
 */
fs.readFile('phonebook.dat', function (err, contactData) {
  // If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) {
    console.log('ERROR!!! ${err}');
    return console.log(err); //throw err;
  }

  // contactData is a Buffer,
  //convert to string.
  var text = contactData.toString();
  // console.log(text);

  let myfunc = function () {
    console.log('INSIDE readFILE');
  };
  setTimeout(myfunc, 3000);

  // Break up the file into lines.
  var lines = text.split('\n');
  lines.forEach(function (line) {
    var parts = line.split(' ');
    var name = parts[0];
    var phone = parts[2];
    console.log(name + ' - ' + phone);
  });
});

console.log('end of the file');

// node readFile.js
