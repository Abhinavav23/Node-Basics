const EventEmitter = require('events');

class SuccessEvent extends EventEmitter{}

const eventOne = new SuccessEvent();


/*
eventOne.addListener('success', () => {
    console.log('event is succesful');
})

eventOne.on('success', () => {
    // console.log(userInfo);
    console.log(`event is succesful again`);
})

eventOne.addListener('failure', () => {
    console.log('event is failed');
})

eventOne.once('registration', (userInfo) => {
    console.log(userInfo);
    // console.log(`event is succesful for ${userInfo.name} having age ${userInfo.age}`);
})

// eventOne.emit('registration', 'Abhinav');
// eventOne.emit('registration', 'Abhinav');

eventOne.emit('success');

eventOne.removeAllListeners('success');

eventOne.emit('success');


// console.log(eventOne.eventNames());
// console.log(eventOne.listenerCount('failure'));


// eventOne.emit('success', 'Abhinav', 30);
// eventOne.emit('success', 'Sonu', 30);

// eventOne.on('success', () => {
//     console.log('event is succesful again');
// })

// eventOne.emit('success', {
//     name: 'Abhinav',
//     age: 30,
//     Address: 'India',
// });
*/

const PrintName = (name) => {
    console.log(`Print the username for: ${name}`);
    console.log(this);
}



eventOne.on('success', PrintName);

eventOne.on('success', function(){
    console.log('anonyms handler');
    console.log(this);
});

// eventOne.on('failure', PrintName)


eventOne.emit('success', 'Abhinav');
console.log(eventOne.listenerCount('success'));

// eventOne.removeListener('success', PrintName);
eventOne.off('success', PrintName);

// eventOne.removeListener('success',  () => {
//     console.log('anonyms handler');
// })


console.log(eventOne.listenerCount('success'));
eventOne.emit('success', 'Abhinav');


// setMaxListener

/*
let obj1 = {
    name: 'Abhinav'
}

let obj2 = {
    name: 'Abhinav'
}

let obj3 = obj1

console.log(obj1 === obj2); //false
console.log(obj1 === obj3); //true

*/

module.exports = eventOne



var printMethod = {
    hello: "world",
    func: function() {
        var self = this;
        console.log("First Output : this.hello = " + this.hello);
        console.log("Second output: self.hello = " + self.hello);

        // (function() {
        //     console.log("Third Output: this.hello = " + this.hello);
        //     console.log("Fourth output: self.hello = " + self.hello);
        // }());

        // const myArrow = () => {
        //     console.log("Third Output: this.hello = " + this.hello);
        //     console.log("Fourth output: self.hello = " + self.hello);
        // }

        // myArrow();
    }
}; 
// printMethod.func();
