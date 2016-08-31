//functions and arrays
var a = [];
a.push(function() {
    console.log("Hello1");
});
a.push(function() {
    console.log("Hello2");
});
a.push(function() {
    console.log("Hello3");
});

a.forEach(function(item) {
    item();
});