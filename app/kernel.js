var kernel = function() {
  // Config
  var config        = require('./config');

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
  require('./controllers/ExampleController')(app);

  server.listen(8888, function() {
    console.log('Listening on *:8888');
  });
};

module.exports = kernel;
