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
        scheduledSessions: generateSessions(true),
        states: randomRange().map(generateState),
    }
}

function generateSessions(future) {
    return randomRange().map(function () {
        return sessionGenerator.generate(future);
    });
}

function generateState() {
    return stateGenerator.generate();
}

function randomRange() {
     return _.range(_.random(5, 20))
}