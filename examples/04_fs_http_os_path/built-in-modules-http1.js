//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules.

const httpServer = require('http'); //http modules

const server = httpServer.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is our about page');
  } else {
    res.end(`<h1>oops</h1> <p>We can't seem to find the page your are</p>`);
  }
});

server.listen(5000);
console.log('Server running at http://127.0.0.1:5000/');

//after running, open your browser run this url http://localhost:5000/
//http://localhost:5000/about
