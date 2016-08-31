// calling fs module
var fs = require('fs');

// this is the readstream it gets data as binary so we asked node to use utf8
// when taking data from buffer. Also we defined the highWaterMark ie the buffer
// size. So the buffer here would first take 16000 bytes then take empty buffer
// by giving it to us, then again it will fill the buffer and so on. And when buffer
// gets filled we get data event on the readable object.

// Apart form these things node stores all these things in a heap if I there are
// many users and all call for Read Stream and read stream returns 64kb of greet
// file for all request the heap will see a overflow. Thus instead of making it
// it deal with full data altogether we give it data in chunks.
var readable = fs.createReadStream(__dirname + '/greet.txt', 
    { encoding: 'utf8', highWaterMark: 16 * 1024});

// we are using writable stream to write data on a file greet copy.txt
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// when buffer gets filled we get data event on the readable object.
// From buffer we can see the length of chunk here. So epic.
readable.on('data', function(chunk) {
    console.log(chunk.length);
});