// Use strict is compulsory for using ES6
'use strict';

// constructor keeps all the properties and all other functions can be written
// as greet() is specified here. Also remember under the HOOD everything is still
// the same. This is only syntactic sugar over the earlier JS version.

class Person {
    constructor(firstname, secondname) {
        this.firstname = firstname;
        this.secondname = secondname;
    }

    greet() {
        console.log(`Hello ${this.firstname} bhai ${this.lastname}`);
    }
}

var spa = new Person("Sparsh", "Paliwal");
spa.greet();