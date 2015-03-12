module.exports = {
    generate: generate,
    generateByType: generateByType
}

var _ = require('underscore');

var generatorMap = {
    'rep': generateRepActivity,
    'row': generateRowActivity,
    'weight': generateWeightActivity,
    'bike': generateBikeActivity
}

var weightActivityNames = [
    'deadlift',
    'snatch',
    'front squat',
    'squat standups'
];

var repActivityNames = [
    'hip extensions',
    'crunches',
    'pushups'
];


function generate() {
    var key = _.sample(Object.keys(generatorMap));
    return generatorMap[key]();
}

function generateByType(type) {
    return generatorMap[type]();
}

function generateRepActivity() {
    return {
        name: _.sample(repActivityNames),
        quantity: {
            value: _.random(10, 100),
            units: 'reps'
        }
    }
}

function generateRowActivity() {
    return {
        name: 'row',
        quantity: {
            value: _.random(50, 2000),
            units: 'm'
        }
    }
}

function generateBikeActivity() {
    return {
        name: 'bike',
        quantity: {
            value: _.random(30, 60 * 60),
            units: 'seconds'
        }
    }
}

function generateWeightActivity() {
    return {
        name: randomWeightActivityName(),
        quantity: randomWeightValue()
    }
}

function randomWeightActivityName() {
    return _.sample(weightActivityNames);
}

function randomWeightValue() {
    return {
        value: _.random(15, 45) * 5,
        units: 'lb'
    }
}