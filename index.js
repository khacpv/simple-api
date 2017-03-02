
var express = require('express');
var fs = require('fs');
var app = express();

var server = app.listen('3000', () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Server start at http://%s:%s', '0.0.0.0', 3000);
});

app.get('/hello', (req, res) => {
  res.send(JSON.stringify({'hello': 'world'}));
});

