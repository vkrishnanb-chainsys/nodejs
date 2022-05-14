const express = require('express');
const app = express();
const port = 8000;
const root = '/';
app.get('/', (request, response) => {
  response.send('Hello from Express!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
// npx nodemon 4_params.js
