var express = require('express');
var app = express();

// process.env lets us access the environment variable so if I take my code and
// deploy it on a server with environment variable for PORT set it will take that
// value but we right now are working on our machine so lets take 3000 for us or
// as secondary option but process.env is an important thing and widly used
// when working wiht node on server
var port = process.env.PORT || 3000;

// See routing also becomes so easy also we need not define response header for
// the file.
app.get('/', function(req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});

// Sending json also became so easy.j
app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// So :id will take value from url and give it to req.params.id simple nothing more
// for more on routing read express documnetation.
app.get('/person/:id', function(req, res) {
    res.send('<html><body><h1>' + req.params.id + '</h1></body></html>');
})

// Thanks to express this is all that is required to turn on a server. Yayy just
// one line.
app.listen(port);