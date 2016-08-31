// This says create a buffer with hello in it and encode it as utf8. utf8 is
// although default so even if we didnt wrote utf8 explicitly, things would
// have been same.
var buf = new Buffer('Hello', 'utf8');
// Return encoded form of hello
console.log(buf);
// Return Hello only
console.log(buf.toString());
// Returns JSON
console.log(buf.toJSON());
// Buffer is a array
console.log(buf[2]);

buf.write('wo');
// This will written wollo .because buffer can hold only 5 char as in Hello when
// it was initialised.
console.log(buf.toString());