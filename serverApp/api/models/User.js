/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    username: 'string',
    email: 'string',
    password: 'string',
    sessions: 'array',
    currentState: 'json',
    states: 'array'
}
};

