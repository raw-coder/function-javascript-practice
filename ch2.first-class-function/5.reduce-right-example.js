// reduceRight example

const _ = require('underscore');

const nums = [100, 2, 25];

function div(x, y) {
  return x / y;
}

console.log(_.reduce(nums, div));
console.log(_.reduceRight(nums, div));

function allOf() {
  return _.reduceRight(arguments, (truth, f) => truth && f(), true);
}

function anyOf() {
  return _.reduceRight(arguments, (truth, f) => truth || f(), false);
}

function T() { return true }
function F() { return false }

console.log(allOf());
console.log(allOf(T, T));
console.log(allOf(T, T, T, T, F));

console.log(anyOf(T, T, F));
console.log(anyOf(F, F, F, F));
console.log(anyOf());

