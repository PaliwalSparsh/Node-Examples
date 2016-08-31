var http = require('http');
var fs = require('fs');

// Use stream whereever possible if thousands of user come to our website and
// we load whole files for all of them heap will get overloaded, instead we will
// take data from our file in chunks using stream and send data through TCP/IP
// which is also a stream.
// CreateReadStream creates read stream.

http.createServer(function(req, res) {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.htm', 'utf8').pipe(res);
    } else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: "Sparsh",
            secondname: "Paliwal"
        };
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1');