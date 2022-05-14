var nano = require('nano');
const url = 'http://admin:Pass123$@127.0.0.1:5984';

const nanodb = nano(process.env.COUCHDB_URL || url);
const books = nanodb.use('books');
const start = async function () {
  const doc = await books.get('To Kill a Mockingbird');
  console.log(doc);
};
start();
// const doclist = await alice.list().then((body) doclist.rows.forEach((doc) => {
//   console.log(doc);
// });
