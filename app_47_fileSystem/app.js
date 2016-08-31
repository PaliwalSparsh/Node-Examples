// calling fs module
var fs = require('fs');

// This reads file synchronously could be used for something like reading to make
// a configuration file whithout which whole program might not run
// __dirname as seen in source code is the current directory and utf8 is the
// encoding in which we want to retrieve data from buffer. Buffer by defualt
// stores data as utf8.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// This is async version of file read.
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data) {
    console.log(data);
});

console.log();