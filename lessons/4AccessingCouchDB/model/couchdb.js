// npm install nano --save
var nano = require('nano');
module.exports = nano(
  process.env.COUCHDB_URL || 'http://admin:Pass123$@127.0.0.1:5984'
);
