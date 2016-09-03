var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request Url: '+ req.url);
    next();
})

// So express searches for static file by default in the views folder, so we
// added all the templated files there. Render finds index file without the need
// of using .ejs extension.
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// Along side the view name a object is provided the key in object can be used
// inside the view for dynamically creating webpages. Like we have used this ID
// inside the view.
app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id });
})

app.listen(port);