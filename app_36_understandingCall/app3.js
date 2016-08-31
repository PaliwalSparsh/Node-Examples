// Part 2 using call
// The Object.create() method creates a new object with the specified prototype 
// object and properties.
// But when we want to make a constructor function in a similar way we need to
// first use Person.call(this) to copy all the properties from the first function
// and then use Officer.prototype = Object.create(Person.prototype);
// and then do Officer.prototype.contructor = Person;
var util = require('util');

function Person() {
    this.firstname = "John";
    this.lastname = "Doe";
}

Person.prototype.greet = function() {
    console.log("Hello " + this.firstname + this.lastname);
};

function Policeman() {
    // So here Person is a function and is called with this, basically copy pasted
    // the text from there. This gets me all the properties from Person
    Person.call(this);
    this.badgenumber = 123;
}

// This gets me all the methods attached to the prototype of Person.
util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();