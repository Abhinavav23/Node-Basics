const loginEvent = require('./event');
console.log(loginEvent);

loginEvent.emit('success', 'Arbaz', 25);
loginEvent.emit('failure', 'Arbaz', 25);
