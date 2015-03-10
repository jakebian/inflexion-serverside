module.exports = {
    generate: generate
}

var _ = require('underscore');
var activityGenerator = require('./activity');

function generate(future) {
    var quantity = _.random(5, 28);
    var startTime, endTime;

    if (!future) {
        startTime = _.range(1424233944682, 1425961944682);
        endTime = startTime + 120000 * quantity;
    }

    var activies = _.range(quantity).map(activityGenerator.generate);

    return {
        startTime: startTime,
        endTime: endTime,
        activities: activies
    }
}