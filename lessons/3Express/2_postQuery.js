const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
var urlParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.get('/', function (request, response) {
  response.sendFile(`${__dirname}/postQuery.html`);
});

app.post('/postquery', urlParser, function (request, response) {
  var fname = request.body.fname;
  var lname = request.body.lname;
  console.log(`${fname}   ${lname}`);
  var data = {
    first_name: fname,
    last_name: lname,
  };
  response.end(JSON.stringify(data));
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
