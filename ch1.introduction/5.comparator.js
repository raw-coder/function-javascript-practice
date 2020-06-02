const _ = require('underscore');

const arr = [2, 3, -1, -6, -108, 42, 10];

console.log(arr.sort()); // -1, -108, -6, 10, 2, 3, 42

function compareLessThanOrEqual(x, y) {
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
}

console.log(arr.sort(compareLessThanOrEqual));

function lessOrEqual(x, y) {
  return x <= y;
}

console.log(arr.sort(lessOrEqual));

function comparator(pred) {
  return (x, y) => {
    if ((pred(x, y))) {
      return -1;
    } else if ((pred(y, x))) {
      return 1;
    } else {
      return 0;
    }
  };
};

console.log(arr.sort(comparator(lessOrEqual)));
