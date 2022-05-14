var nano = require('nano');
const url = 'http://admin:Pass123$@127.0.0.1:5984';

const nanodb = nano(process.env.COUCHDB_URL || url);
const books = nanodb.use('books');
function create(book, cb) {
  books.insert(book, book.id, cb);
  books.find();
}
var book = {
  title: 'To Kill a Mockingbird',
  author: 'HarperLee',
  email: 'harperlee@example.com',
};

create(book, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('book inserted');
  }
});
