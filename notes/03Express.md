Express
---   

Fast, unopinionated, minimalist web framework for Node.js – http://expressjs.com/  

Adding Express to your project is only an NPM install away:  

 
        $ npm install express --save
 
Express by default gives you a router.   
You don’t have to check manually for the URL to decide what to do,   
but instead, you define the application’s routing with app.get, app.post, app.put, etc.  
They are translated to the corresponding HTTP verbs.  
One of the most powerful concepts that Express implements is the middleware pattern.
