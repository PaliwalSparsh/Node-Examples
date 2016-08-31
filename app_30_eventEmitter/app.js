var emtr = require("./emitter.js");

var em = new emtr();

em.on("greet", function() {
    console.log("Hello let me greet you");
});

em.on("greet", function() {
    console.log("Hello karlo bhai log");
});

em.emit("greet");