## Project Structure

url:  
 a. https://blog.risingstack.com/node-hero-node-js-project-structure-tutorial/  
 b. https://blog.risingstack.com/node-js-project-structure-tutorial-node-js-at-scale/  
 c. https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/

1. <h2>service Directory:</h2> Structure the Node.js applications around `product features / pages / components`.    
   This is the place where all our business logic should live.  
   It’s basically a collection of classes, each with its methods,   that will be implementing our app’s core logic.  
   The only part you should ignore in this layer is the one that accesses the database;    
   that should be managed by the data access layer.
1. <h2>tests Directory :</h2> Tests are not just for checking whether a module produces the expected output,
   they also document your modules. Because of this, it is easier to understand if test files are placed next to the implementation.
   Put your additional test files to a separate test folder to avoid confusion.
1. <h2>config Directory:</h2> Use a config folder to organize configuration files
1. <h2> scripts Directory:</h2> Long npm Scripts.
1. <h2>worker Directory:</h2> The process that listen on external services / events and handle them
1. <h2>api-routes / web Directory:</h2> Separate business logic and API routes.
   Frameworks like Express.js are amazing.
   They provide us with incredible features for managing requests, views, and routes.
   The process that is serving REST API's with a single endpoint
1. <h2>jobs Directory:</h2> contains scripts that will execute themselves automatically at a particular time
1. <h2>loaders Directory:</h2> contains the type of scripts that will execute at the time server starts
1. <h2>public Directory:</h2> contains all the files that have to be served "statically" (JS, CSS, Image File)
1. <h2>secrets Directory:</h2> store all your secrets related to web application such as API-KEY, AUTHENTICATION-KEY, etc.

<img src="..\images\Folder0.png" />

<img src="..\images\Folders1.png" />
