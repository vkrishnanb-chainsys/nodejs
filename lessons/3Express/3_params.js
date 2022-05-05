const express = require('express');
const app = express();
const port = 8000;
app.get(':name', (request, response) => {
  var data = request.params['name'];
  console.log(data);
  response.send('Hello from Express!');
});
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});

// localhost:8000/Raj
