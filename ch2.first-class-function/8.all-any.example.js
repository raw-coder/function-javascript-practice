// all, any example

const _ = require('underscore');

console.log(_.all([1, 2, 3, 4], _.isNumber));
console.log(_.any([1, 2, '3', 4], _.isNumber));