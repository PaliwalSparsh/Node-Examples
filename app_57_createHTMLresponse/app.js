var http = require('http');
var fs = require('fs');

// Here we not only sent a HTML file type content but also created a small
// templating engine for ourselves. We added a placeholder {Message} in html
// and place Hello World.... in it place dynamically.

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
    var message = "Hello World ....";
    var html = html.replace('{Message}', message);
    res.end(html);

}).listen(1337, '127.0.0.1');