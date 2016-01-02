'use strict';

var yaml = require('js-yaml');
var fs   = require('fs');

var config = {};

config.loadConfig = function() {
  try {
    var doc = yaml.safeLoad(fs.readFileSync(__dirname + '/config.yml', 'utf8'));
    return doc;
  } catch (e) {
    console.log(e);
    return {};
  }
};

module.exports = config;
