'use strict';

// Config
var config        = require('./app/config');

// App
var express       = require('express');
var app           = express();

var server        = require('http').Server(app);

// Socket.io
var io            = require('socket.io')(server);

// MongoDB
var mongoose      = require('mongoose');
mongoose.connect('mongodb://localhost/' + config.db.name);

// Require Controllers
require('./app/controllers/ExampleController')(app);

server.listen(8888, function() {
  console.log('Listening on *:8888');
});
