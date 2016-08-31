// that console.log is has template literals inside it.
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${ this.name }`)
    }
};

obj.greet();
// call replaces 'this'
obj.greet.call({ name: "Sparsh Paliwal" });
// both call and apply are same. Though if there were params in call we would do 
// obj.greet.call({ name: "Sparsh Paliwal" }, param1, param2);
// But here we will do obj.greet.apply({ name: "Sparsh Paliwal" }, [param1, param2]);
obj.greet.apply({ name: "Sparsh Paliwal" });