// 1st snippet - It works!!
// console.log("Hello");

// 2nd snippet - My attempt
// module.exports just takes a variable and makes it available to whosoever
// calls the module using require here we made that module.exports as and
// object, in the class they made it assign a function
// var greet = function() {
//     console.log("Hello!!");
// };
// var greet2 = function() {
//     console.log("Hello2!!");
// };
// module.exports = {
//     greet: greet,
//     greet2: greet2
// };

var greet = function() {
    console.log("Hello");
};
module.exports = greet;