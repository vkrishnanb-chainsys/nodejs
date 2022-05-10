const firstModule = require('./modules_01')
const sayHello = require('./modules_02')

//return exported objects firstModule,myGrou
console.log(firstModule);
console.log("*************");
sayHello('Hello World!');
sayHello(firstModule.myGroup);
