
const EventEmitter = require('events');

class Scientific extends EventEmitter{
    constructor() {
        super();
    }

    logarithm(){
        console.log('This is log function');
        this.emit('sci-cal');
    }

    cubeRoot(){
        console.log('This is cube root function');
        this.emit('sci-cal');
    }
}

module.exports = Scientific;
