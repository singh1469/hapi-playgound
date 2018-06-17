'use strict';
const Joi = require('joi');

module.exports = {
    subscribeForm: {
        payload: {
            forename: Joi.string().min(3).required(),
            surname: Joi.string().min(3).required(),
            username: Joi.string().min(3).required(),
            password: Joi.string().min(3).required()
        }
    }
};
