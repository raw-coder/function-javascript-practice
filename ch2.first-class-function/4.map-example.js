const _ = require('underscore');

console.log(_.map({a: 1, b: 2}, _.indentity));

console.log(_.map({a: 1, b: 2}, (k, v) => [k, v]));

console.log(_.map({a: 1, b: 2}, (k, v, collection) => [k, v, _.keys(collection)]));