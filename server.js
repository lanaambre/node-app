var colors = require('colors');
global.config = require('./app/config').loadConfig();

// Server options
var options = require('./app/config/options')(global.config);

if (config) {
  require('./app/kernel')();
} else {
  console.log('Server stop - Message: Probably missing config file.'.red);
}
