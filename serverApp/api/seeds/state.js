module.exports = {
    generate: generate
}

var _ = require('underscore');
var activityGenerator = require('./activity');
var faker = require('faker');

function generate() {
    return {
        weight: _.random(120, 200),
        records: generateRecords(),
        pictureUrl: faker.internet.avatar()
    }
}

var activityTypes = [
    'rep',
    'row',
    'weight'
];

function generateRecords() {
    var records = {};
    var amount = _.random(4, 7);

    while(Object.keys(records).length < amount) {
        var activity = activityGenerator.generateByType(_.sample(activityTypes));
        if (activity) {
            records[activity.name] = activity.quantity;
        }
    }

    return records;
}