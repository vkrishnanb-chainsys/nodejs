//built-in modules (OS, Path, FS, HTTP)
//require a function to use modules. 

const httpServer = require('http'); //http modules

const server = httpServer.createServer((req,res)=>{
    res.write('welcome to our home page');
    res.end()
})

server.listen(5000);

//after running, open your browser run this url http://localhost:5000/

