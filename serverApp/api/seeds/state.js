module.exports = {
    generate: generate
}

var _ = require('underscore');
var activityGenerator = require('./activity');
var faker = require('faker');

function generate() {
    return {
        weight: _.range(120, 200),
        records: generateRecords,
        pictureUrl: faker.internet.avatar()
    }
}

var recordsFields = [
    'deadlift',
    'snatch',
    'front squat',
    'squat standups'
    'hip extensions',
    'crunches',
    'pushups'
];

function generateRecords() {
    var records = {};
    _.sample(Object.keys(recordsFields), _.random(4, 7)).forEach(function (key) {
        records[key] = activityGenerator.generateByType(key);
    });
    return records;
}