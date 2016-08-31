'use strict';

var greetr = require("./greet.js")
var greeter1 = new greetr();

console.log(greeter1);

greeter1.on("greet", function() {
    console.log("on works!!");
});
greeter1.greet();

