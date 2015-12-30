// Config
var config = require('./app/config');

var express       = require('express');
var app           = express();

var server        = require('http').Server(app);

server.listen(8888, function() {
  console.log('Listening on *:8888');
});
