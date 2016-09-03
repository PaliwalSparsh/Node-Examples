var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: '+ req.url);
    next();
})

app.get('/', function(req, res) {
    res.render('index');
});

// This is a RESTful API structure. Here there is a decent URL structure and
// there are the HTTP verbs used properly liek get, post, and delete.
app.get('/api/person/:id', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.post('/api/person', function(req, res) {
    // save to the database
});

app.delete('/api/person/:id', function(req, res) {
    // delete to the database
});

app.listen(port);