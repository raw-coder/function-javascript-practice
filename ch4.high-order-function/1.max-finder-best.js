const _ = require('underscore');

console.log(_.max([1, 2, 3, 4, 5]));
console.log(_.max([1, 2, 3, 4.75, 4.5]));

const people = [
  { name: 'AAA', age: 15 },
  { name: 'BBB', age: 65 },
  { name: 'CCC', age: 30 },
];

console.log(_.max(people));
console.log(_.max(people, p => p.age));

function finder(valueFun, bestFun, collection) {
  return _.reduce(collection, function(best, current) {
    const bestValue = valueFun(best);
    const currentValue = valueFun(current);
    
    return (bestValue === bestFun(bestValue, currentValue)) ? best : current;
  });
}

console.log(finder(_.identity, Math.max, [1, 2, 3, 4, 5]));

// 최적화
function best(fun, collection) {
  return _.reduce(collection, function(x, y) {
    return fun(x, y) ? x : y;
  });
}

console.log(best((x, y) => x > y, [1, 2, 3, 4, 5]));

