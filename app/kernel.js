var kernel = function(config) {
  // Define App & Server
  var express       = require('express');
  var app           = express();
  var server        = require('http').Server(app);

  //Uncomment to use Socket.io
  // var io            = require('socket.io')(server);

  // Uncomment to use MongoDB
  // var mongoose      = require('mongoose');
  // mongoose.connect('mongodb://localhost/' + config.db.name);

  // Define static folder
  app.use(express.static('public'));

  // Define view engine
  app.set('views', __dirname + '/views');
  app.set('view cache', config.server.environment === 'prod');
  app.set('view engine', config.server.viewEngine);

  // Require Controllers
  require('./controllers/LayoutController')(app);

  // Launch server
  server.listen(config.server.port, function() {
    console.log('Listening on *:' + config.server.port + '. Development mode: ' + config.server.environment);
  });
};

module.exports = kernel;
