var kernel = function(config) {
  // Define App & Server
  var express       = require('express');
  var app           = express();
  var server        = require('http').Server(app);

  // Define Socket.io
  var io            = require('socket.io')(server);

  // Define MongoDB
  var mongoose      = require('mongoose');
  mongoose.connect('mongodb://localhost/' + config.db.name);

  // Define static folder
  app.use(express.static('public'));

  // Define view engine
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  // Require Controllers
  require('./controllers/ExampleController')(app);

  // Launch server
  server.listen(8888, function() {
    console.log('Listening on *:8888');
  });
};

module.exports = kernel;
