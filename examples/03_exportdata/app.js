// app.js
const module1 = require('./modules_01');

console.log(module1);
console.log('*************');
module1.addValues(2, 4);
for (var item in module1.items) {
  console.log(module1.items[item]);
}
