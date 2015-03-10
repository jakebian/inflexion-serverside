module.exports = {
    generate: generate
}

var _ = require('underscore');
var faker = require('faker');
var sessionGenerator = require('./session');
var stateGenerator = require('./state');

function generate() {
    return {
        name: faker.name.findName(),
        avatarUrl: faker.internet.avatar(),
        email: faker.internet.email(),
        completedSessions: generateSessions(),
        scheduledSessions: scheduledSessions(true),
        currentState: stateGenerator.generate();
        states: randomRange.map(stateGenerator.generate),
    }
}

function generateSessions(future) {
    return randomRange.map(sessionGenerator.generate(future));
}

function randomRange() {
     return _.range(_.random(5, 20))
}