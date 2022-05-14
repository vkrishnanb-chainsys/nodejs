const express = require('express');
const app = express();
const port = 8000;

const contact = '/contact';
app.get(contact, (request, response) => {
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
  console.log(`server is listening on 
  http://localhost:${port}/sample?name=Raj&city=Madurai&sal=234555`);
});
// http://localhost:8000/contact?name=Raj
// npx nodemon 2_getQuery.js
