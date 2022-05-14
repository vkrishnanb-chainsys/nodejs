## nano

Interacting with a `CouchDB` server from a Node process.

Create a new folder for this demo  
create the `package.json` file :

```javascript
    npm init -y
```

CouchDB speaks `HTTP`, so it would be enough to use the Node HTTP client  
or even the request `NPM` package.  
Instead, we're going to use this small wrapper around request that gives some nice convenient functions called `nano`.  
Let's install it:

```javascript
    npm install nano --save
    npm install async --save
    npm install joi --save
    npm install boom --save
```

## project directory structor

1. model or data : directory holding data-access objects
1.

## javascript files (modules)

1. model/couchdb.js: use nano services here uses it to construct a database wrapper that points to the CouchDB server
1. model/bookdb.js: To perform insert, update, select, and delete operations
1. schema/book.js: Book object that contain the data from the Document fetched from Couchdb
1. schema/index.js:
1. schema/bookvalidator.js:
1. test/bookinserttest.js: To test creating a new book document in Couchdb
1.
