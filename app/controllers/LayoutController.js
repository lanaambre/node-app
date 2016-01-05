'use strict';

var controller = function(app) {
  app.get('/', function(req, res) {
    res.render('layout');
  });
};

module.exports = controller;
