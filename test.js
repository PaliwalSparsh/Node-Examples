var a = {};
a.prop1 = "hello";
a.prop2 = "landu";
// Prototype is only for constructor functions only so this wont work.
// a.prototype.greet = function() {
//     console.log(this.prop1 + " " + this.prop2);
// };

function c() {
    this.prop1 = "hello";
    this.prop2 = "laundiya";
    this.greetingInside = function() {};
};

c.prototype.greet = function() {
    console.log(this.prop1 + " " + this.prop2);
};

var d = new c();
d.greet2 = function() {
    console.log("Look calm and ready");
};

console.log(a);
console.log(d.constructor);
console.log(d.__proto__ === c.prototype);