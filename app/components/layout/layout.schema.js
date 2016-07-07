'use strict';

const Schema              = require('node-schema-object');
const middlewareGenerator = require('./../../tools/schema.middleware.generator');
let LayoutSchemas         = {};

LayoutSchemas.createUser = middlewareGenerator(
  new Schema({
    firstName: String,
    lastName: String,
    age: Number
}));

module.exports = LayoutSchemas;
