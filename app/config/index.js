'use strict';

const yaml = require('js-yaml');
const fs   = require('fs');

let config = {};

config.loadConfig = function() {
  try {
    return yaml.safeLoad(fs.readFileSync(__dirname + '/config.yml', 'utf8'));
  } catch (e) {
    console.log(e);
    return false;
  }
};

module.exports = config;
