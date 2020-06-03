// 응용형 함수 예제
// map, reduce, filter

const _ = require('underscore');

const num = [1, 2, 3, 4, 5];

function doubleAll(array) {
  return _.map(array, n => n * 2);
}

console.log(doubleAll(num));

function average(array) {
  const sum = _.reduce(array, (a, b) => a + b);
  return sum / _.size(array);
}

console.log(average(num));

function onlyEven(array) {
  return _.filter(array, n => n % 2 === 0);
}

console.log(onlyEven(num));