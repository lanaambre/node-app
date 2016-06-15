var colors = require('colors');
var config = require('./app/config').loadConfig();

if (config) {
  require('./app/kernel')(config);
} else {
  console.log('Server stop - Message: Probably missing config file.'.red);
}
