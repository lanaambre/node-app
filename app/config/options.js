'use strict';

var program = require('commander');

var options = function(config) {
  program
    .version('0.0.1')
    .option('-p, --port [port]', 'Choose a port for your application', config.server.port)
    .option('-e, --env [env]', 'Choose an environment for your application', config.server.environment)
    .parse(process.argv);

  config.server.port = program.port;
  config.server.environment = program.env;
};

module.exports = options;
