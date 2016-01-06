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
  app.set('view cache', !config.developmentMode);
  app.set('view engine', config.viewEngine);

  // Require Controllers
  require('./controllers/LayoutController')(app);

  // Launch server
  server.listen(8888, function() {
    console.log('Listening on *:8888. Development mode: ' + config.developmentMode);
  });
};

module.exports = kernel;
