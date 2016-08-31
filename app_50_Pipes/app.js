// calling fs module
var fs = require('fs');
// zlib is used for creating compressed files this is available in node only.
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();
// We used to pipe the readable stream to writable stream. This looks better, is
// easier and more convinient.
readable.pipe(writable);

// So the concept here is that pipe function "returns dest;" thus we can attach
// pipe to pipe to pipe to do method chaining. Here the stream from readable goes
// in to gzip which creates the compressed data and then gives it to compressed 
// to write in itself. Just like a duplex stream ie readable and writable.
readable.pipe(gzip).pipe(compressed);