const colors = require('colors');
global.config = require('./app/config').loadConfig();

// Server options
const options = require('./app/config/options')(global.config);

if (config) {
  require('./app/kernel')();
} else {
  console.log('Server stop - Message: Probably missing config file.'.red);
}
