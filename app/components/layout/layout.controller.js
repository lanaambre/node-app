'use strict';

const layoutSchemas = require('./layout.schema');

const controller = function(app) {
  app.get('/', function(req, res) {
    res.render('layout');
  });

  app.post('/user', layoutSchemas.createUser, function(req, res) {
    res.send('ok');
  })
};

module.exports = controller;
