var http = require('http');

// createServer inherits from event emitter when an req comes an event is
// fired that calls the callback. Request made by browser and response send by
// node can be seen in network tab give it a look.

// res.end gives data to be sent as response.
http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');

}).listen(1337, '127.0.0.1');