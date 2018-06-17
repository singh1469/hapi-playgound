'use strict';
const controller = require('./controller');

exports.plugin = {
    name: controller.name,
    register: controller.method
};
