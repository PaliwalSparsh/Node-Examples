// Part 2 using call
// Here we get undefined undefined becuase inherit only gives the Person.prototype
// to the Policeman.
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
    // the text from there.
    Person.call(this);
    this.badgenumber = 123;
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();