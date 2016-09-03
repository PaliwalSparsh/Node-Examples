var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

// use defines a middleware with the url provided here. express static is the
// middleware provided to us by node to make our work easy of adding static file
// in the response. Other middleware like passport js body parser can also help us tremendously.
app.use('/assets', express.static(__dirname + '/public'));

// So middleware basically calls a callback, express static above also returns 
// a function if you go and look at its codebbase. next is used to move to the
// next middleware.
app.use('/', function(req, res, next) {
    console.log('Request Url: '+ req.url);
    next();
})

// If we see closedly the content inside use here is also something that is happening
// between response and request. So it can also be called sort of middleware and we
// can think as final next() also takes us to final middleware that is use.
app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello World</h1></body></html>');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// :id tells express there can be anything here please keep an eye on it.
app.get('/person/:id', function(req, res) {
    res.send('<html><body><h1>' + req.params.id + '</h1></body></html>');
})

app.listen(port);