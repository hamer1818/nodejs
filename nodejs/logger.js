const EventEmitter = require('events');


class Loggger extends EventEmitter{

    log(message){
    console.log(message);
    this.emit.emit('connection',{id:1,
        mesaage:'hello'});
    }
}

module.exports = Loggger;