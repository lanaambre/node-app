'use strict';

var controller = function(app) {
  app.get('/', function(req, res) {
    res.render('example');
  });
};

module.exports = controller;
