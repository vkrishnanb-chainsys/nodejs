Project Structure
---
url:   
    a. https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/  
    b. https://blog.risingstack.com/node-js-project-structure-tutorial-node-js-at-scale/  
    c. https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/  
    
 
1. service layer: Structure the Node.js applications around ```product features / pages / components```.
  This is the place where all our business logic should live. 
  It’s basically a collection of classes, each with its methods, that will be implementing our app’s core logic. 
  The only part you should ignore in this layer is the one that accesses the database; 
  that should be managed by the data access layer.
1. tests Directory   : Tests are not just for checking whether a module produces the expected output, 
they also document your modules. Because of this, it is easier to understand if test files are placed next to the implementation.
Put your additional test files to a separate test folder to avoid confusion.
1. config Directory:   Use a config folder to organize configuration files
1. scripts Directory: Long npm Scripts. 
1. worker Directory: The process that listen on external services / events and handle them
1. api-routes / web  Directory: Separate business logic and API routes. 
Frameworks like Express.js are amazing. 
They provide us with incredible features for managing requests, views, and routes.
The process that is serving REST API's with a single endpoint
1. jobs Directory: contains scripts that will execute themselves automatically at a particular time
1. loaders Directory: contains the type of scripts that will execute at the time server starts
1. public Directory: contains all the files that have to be served "statically" (JS, CSS, Image File)
1. secrets Directory: store all your secrets related to web application such as API-KEY, AUTHENTICATION-KEY, etc.
1. 

<img src="..\images\Folder0.png" />   

<img src="..\images\Folders1.png" />