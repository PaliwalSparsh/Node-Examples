var firstname = "Sparsh";

(function() {
    var firstname = "Ayush";
    console.log(firstname);
}());

console.log(firstname);

// Result is Sparsh and then Ayush
// Because the firstname inside function is scoped inside it only and wont 
// affect the firstname outside and this is the property that has been used
// by js developers to imitate modules in javascript. As what are modules they
// are set of code which does not affect the code outside it.

// Some cool thing

// (function(lastname) {
//     var firstname = "Ayush";
//     console.log(firstname);
//     console.log(lastname);
// }("Paliwal"));

// This is where we pass the parameters in IIFE.