// Part 1 without using call
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
    this.badgenumber = 123;
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();