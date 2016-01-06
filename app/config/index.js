'use strict';

var yaml = require('js-yaml');
var fs   = require('fs');

var config = {};

config.loadConfig = function() {
  try {
    var data = yaml.safeLoad(fs.readFileSync(__dirname + '/config.yml', 'utf8'));
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

config.loadRouting = function() {
  try {
    var data = yaml.safeLoad(fs.readFileSync(__dirname + '/routing.yml', 'utf8'));
    return data;
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = config;
