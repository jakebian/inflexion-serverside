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
        currentState: generateState();
        states: randomRange.map(generateState),
    }
}

function generateSessions(future) {
    return randomRange.map(function () {
        var session = sessionGenerator.generate(future);
        Session.create(session);
    });
}

function generateState() {
    var state = sessionGenerator.generate(future);
    State.create(state);
}

function randomRange() {
     return _.range(_.random(5, 20))
}