var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var buf = new Buffer(256);
  var buf = fs.readFileSync('index.html');
  response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 809999999990;
app.listen(port, function() {
  console.log("Listening on " + port);
});
