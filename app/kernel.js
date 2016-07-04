const kernel = function() {

  // Get Config
  const config = global.config;

  // Define App & Server
  const express       = require('express');
  const app           = express();
  const server        = require('http').Server(app);

  //Uncomment to use Socket.io
  const io            = require('socket.io')(server);

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
    console.log('Listening on *:' + config.server.port + '. Environment: ' + config.server.environment);
  });
};

module.exports = kernel;
