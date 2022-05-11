const firstModule = require('./2_exModule_01');
const sayHello = require('./2_exModules_03');

//return exported objects firstModule,myGrou
console.log(firstModule);
firstModule.echo('Elon Mush');
console.log('*************');
sayHello(firstModule.myGroup);
sayHello('Hello World!');
