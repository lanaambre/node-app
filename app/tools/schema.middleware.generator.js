'use strict';

const _ = require('underscore');

const schemaMiddlewareGenerator = function(Schema) {
  return function(req, res, next) {
    let body = new Schema(req.body);

    if (body.isErrors()) {
      let errors = body.getErrors();

      let template = [];

      _.each(errors, function(err) {
        let errorMessage = [
          'Bad parameter "' + err.fieldSchema.name + '" = ' + err.setValue,
          '-> ' + err.errorMessage
        ].join('\n');

        template.push(errorMessage);
      });

      return res.status(500).send(template.join('\n'));
    }

    return next();
  };
};

module.exports = schemaMiddlewareGenerator;
