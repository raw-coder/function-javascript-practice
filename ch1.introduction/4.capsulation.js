const _ = require('underscore');

const letters = ['a', 'b', 'c'];

function nativeNth(a, index) {
  return a[index];
}

nativeNth(letters, 1); // b
// nativeNth({}, 1); // error

function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

function fail(failure) {
  throw new Error(failure);
}

function nth(a, index) {
  if (!_.isNumber(index)) fail('Expected a number as the index');
  if (!isIndexed(a)) fail('Not suppored on non-indexed type');
  if (index < 0 || index > a.length - 1) {
    fail('Index value is out of bounds');
  }
  return a[index];
}

console.log(nth(letters, 1));
console.log(nth('abc', 2));
// console.log(nth({}, 2));
// console.log(nth(letters, 1000));
// console.log(nth(letters, 'abc'));

function second(a) {
  return nth(a, 1);
}

console.log(second(['a', 'b']));
console.log(second("rawcoder"));
// console.log(second({}));;