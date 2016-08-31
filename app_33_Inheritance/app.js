var EventEmitter = require('events');
var Util = require('util');

function Greetr() {
    this.firstname = "Sparsh";
    this.lastname = "Paliwal";
}

// console.log("EventEmitter: ");
// console.log(EventEmitter);
// console.log("Greetr Before: ");
// console.log(Greetr);

// Here we extender the properties of Greetr and made it capable of using
// EventEmitter and all.
Util.inherits(Greetr, EventEmitter);

// So now we can make an event emit here.
Greetr.prototype.greet = function() {
    this.emit("greet");
};

// So inherits adds to the prototype of the constructor function
console.log(Greetr.prototype.__proto__);

// Here we added a listener directly so all objects created from Greetr will 
// have this as a listener
Greetr.prototype.on("greet", function() {
    console.log("Created from the Greetr prototype");
})
// console.log("Greetr After: ");
// console.log(Greetr);
// console.log("Greetr Prototype: ");
// console.log(Greetr.prototype);
// console.log("Greetr __proto__: ");
// console.log(Greetr.__proto__);

// we make a object of Greetr
var a = new Greetr();

// We make a listener on the newly created object.
a.on("greet", function() {
    console.log("on works!!");
});
a.greet();
