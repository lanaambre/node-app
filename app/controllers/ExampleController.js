'use strict';

var controller = function(app) {
  app.get('/', function(req, res) {
    res.send('Hello World');
  });
};

module.exports = controller;
