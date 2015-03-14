/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var _ = require('underscore');
var userSeeder = require('../api/seeds/user.js');
var sessionSeeder = require('../api/seeds/session.js');
var actvitySeeder = require('../api/seeds/activity.js');

module.exports.bootstrap = function(cb) {
    var users = _.range(20).map(userSeeder.generate);
    User.create(users).exec(cb);
};
