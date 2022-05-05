const express = require('express');
const app = express();
const port = 8000;
app.get('/sample', (request, response) => {
  var name = request.query.name;
  // console.log(name);
  console.log(request.query);
  for (const key in request.query) {
    console.log(key, request.query[key]);
  }
  response.send(`Hello from Express! ${name}`);
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
// http://localhost:8000/sample?name=raj
