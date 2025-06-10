const _ = require('lodash');
const math = require('./math');

const sum = math.add(10, 5);
const product = math.multiply(4, 3);

const numbers = [5, 15, 10, 20];
const total = _.sum(numbers);
const max = _.max(numbers);

console.log(`➕ 10 + 5 = ${sum}`);
console.log(`✖️ 4 * 3 = ${product}`);
console.log(`📊 Sum of [${numbers}] = ${total}`);
console.log(`🔝 Max of [${numbers}] = ${max}`);
