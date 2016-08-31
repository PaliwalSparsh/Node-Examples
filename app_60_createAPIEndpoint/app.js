var http = require('http');
var fs = require('fs');

// We serialize our object into JSON format which can be used to transfer over
// internet now this data can be deserialised on the browser side by chrome or
// other browser using some script. Or this can be used by any other server
// to work on it. As it is serialized JSON data independent of everything and
// can be used easily by everyone. Node gave us JSON.stringify to easily serialize
// objects in to JSON. We should be thankful to him for that.

http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: "Sparsh",
        secondname: "Paliwal"
    };
    res.end(JSON.stringify(obj));

}).listen(1337, '127.0.0.1');