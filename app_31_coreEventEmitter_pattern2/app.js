// Events is the core library
var emtr = require("events");
var eventConfig = require("./config").events;

// Here also we need to create a em object because it also returns a
// constructor only.
var em = new emtr();


em.on(eventConfig.GREET, function() {
    console.log("Hello let me greet you");
});

em.on(eventConfig.GREET, function() {
    console.log("Hello karlo bhai log");
});

em.emit(eventConfig.GREET);