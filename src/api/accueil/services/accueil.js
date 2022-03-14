'use strict';

/**
 * accueil service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accueil.accueil');
