// function Statement
function greet() {
    console.log("hi");
}
greet();

// function are first-class
function logGreeting(fn) {
    fn();
}

// See we are moving function around like a variable and the reason for this is
// that functions in js are objects so it behaves in this manner. And we call
// such functions as firstclass. My version - First class just like variables.
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log("Hi dude");
};
greetMe();

// it's first class
logGreeting(greetMe);

// run a function on fly
logGreeting(function() {
    console.log("fly");
});