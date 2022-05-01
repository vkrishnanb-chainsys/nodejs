// Load the fs (filesystem) module
var fs = require('fs');

// Read the contents of the file into memory.
fs.readFile('phonebook.dat', function (err, contactData) 
{
  // If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) throw err;
  
  // contactData is a Buffer, 
  //convert to string.
  var text = contactData.toString();
  // console.log(text);
  
  var results = {};

// Break up the file into lines.
  var lines = text.split('\n');
  
lines.forEach(function(line) {
    var parts = line.split(' ');
    var name = parts[0];
    var phone = parts[2];
    console.log(name+" - "+phone);
  });
});
// node readFile.js