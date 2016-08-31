// Events is the core library
var emtr = require("events");

// Here also we need to create a em object because it also returns a
// constructor only.
var em = new emtr();

// It wont overwrite but keep on adding these in a array. So write as many
// listeners you want.
em.on("greet", function() {
    console.log("Hello let me greet you");
});

em.on("greet", function() {
    console.log("Hello karlo bhai log");
});

em.emit("greet");