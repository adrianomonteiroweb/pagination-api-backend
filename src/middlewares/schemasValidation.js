const Joi = require('joi');

const checkNumberOfPages = Joi.object({
  numberOfPages: Joi
    .number()
    .max(5)
    .required()
});

module.exports = {
  checkNumberOfPages,
};
