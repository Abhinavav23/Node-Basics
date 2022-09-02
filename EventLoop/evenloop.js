const fs = require('fs');

setTimeout(() => {
    console.log('timer 1');
},0) 

setImmediate(() => {
    console.log('immidiate 1');
})

fs.open('file1.txt', () => {
    console.log('running open callback');
    setTimeout(() => {
        console.log('timer 1');
    },0) 
    setImmediate(() => {
        console.log('immediate 1');
    })
})

process.nextTick(() => {console.log('next tick')})
Promise.resolve().then(() => console.log('promise done')); //Microtask

// Macrotask ---> timer. setinterval, 

// REPL
// Read Evaluate Print Loop