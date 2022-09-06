const EventEmitter = require('events');

class SuccessEvent extends EventEmitter{}

const eventOne = new SuccessEvent();

eventOne.addListener('success', () => {
    console.log('event is succesful');
})

eventOne.addListener('successOnce', () => {
    console.log('event is succesful once');
})

eventOne.emit('success');
eventOne.emit('successOnce');




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

        const myArrow = () => {
            console.log("Third Output: this.hello = " + this.hello);
            console.log("Fourth output: self.hello = " + self.hello);
        }

        myArrow();
    }
    
};
    
printMethod.func();

