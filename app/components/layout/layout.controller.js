'use strict';

const layoutSchemas = require('./layout.schema');

const controller = function(app) {
  app.get('/', function(req, res) {
    res.render('layout');
  });
};

module.exports = controller;
