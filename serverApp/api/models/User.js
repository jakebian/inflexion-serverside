/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var _ = require('underscore');
var userSeeder = require('../seeds/user');

module.exports = {

    attributes: {
        username: 'string',
        email: 'string',
        password: 'string',
        avatarUrl: 'string',
        sessions: 'array',
        currentState: 'json',
        states: 'array',
    },

    seedData: _.range(20).map(userSeeder.generate)
};

