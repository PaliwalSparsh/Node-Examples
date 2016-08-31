'use strict';

var EventEmitter = require('events');

// extends will do the thing where it will add EventEmitter thing to the prototype
// chain means it is doing hte work of utils inherits.

// super does the same thing what EventEmitter.call(this) did

module.exports = class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greetings = "Hello World";
    }
    greet() {
        this.emit("greet");
    }
}