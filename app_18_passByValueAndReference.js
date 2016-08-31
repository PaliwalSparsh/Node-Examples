// Primitive data type
// Pass by value
a = 1;
function changeP(b) {
    b = 3;
}
changeP(a);
console.log(a);
// Returns 1 only.

// Object
// Pass by reference
o = {};
function changeO(b) {
    b.prop1 = function() {};
    b.prop2 = {};
}
changeO(o);
console.log(o);
// Returns obj with all added properties only.


