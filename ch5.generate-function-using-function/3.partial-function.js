const _ = require('underscore');

function divPart(n) {
  return function(d) {
    return n / d;
  }
}

const over10Part = divPart(10);
console.log(over10Part(2));

function partial1(fun, arg1) {
  return function() {
    const args = construct(arg1, arguments);
    return fun.apply(fun, args);
  }
}

function construct(head, tail) {
  return cat([head], _.toArray(tail));
}
function cat() {
  const head = _.first(arguments);
  if (existy(head))
    return head.concat.apply(head, _.rest(arguments));
  else
    return [];
}
function existy(x) {
  return x != null;
}

const over10Part1 = partial1(division, 10);

function division(n, d) {
  return n / d;
}

console.log(over10Part1(5));