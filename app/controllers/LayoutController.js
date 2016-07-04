'use strict';

const controller = function(app) {
  app.get('/', function(req, res) {
    res.render('layout');
  });
};

module.exports = controller;
