// reject example
const _ = require('underscore');

console.log(_.reject(['a', 'b', 3, 'd'], _.isNumber));

function complement(pred) {
  return function () {
    return !pred.apply(null, _.toArray(arguments));
  };
}

console.log(_.filter(['a', 'b', 3, 'd'], complement(_.isNumber)));