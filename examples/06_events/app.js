// Server side Events
const EventEmitter = require('events');

const customEmitter = new EventEmitter(); // An instance of an Event creater(EventRaiser)

// Event Handler
customEmitter.on('respose', () => {
  console.log('data received');
});

// customEmitter.emit('respose'); // Raising the EVENT - Tiggering the event
setInterval(() => {
  customEmitter.emit('respose');
}, 3000);
