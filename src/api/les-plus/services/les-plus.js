'use strict';

/**
 * les-plus service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::les-plus.les-plus');
