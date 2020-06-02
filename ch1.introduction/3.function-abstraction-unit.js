// 함수 : 추상화 단위

const _ = require('underscore');

function parseAge(age) {
  if (!_.isString(age)) fail('Expecting a string');
  
  let a;
  note('Attempting to parse an age');
  
  a = parseInt(age, 10);
  
  if (_.isNaN(a)) {
    warn(['Could not parse age: ', age].join(' '));
    a = 0;
  }
  
  return a;
}

function fail(failure) {
  throw new Error(failure);
}

function warn(warning) {
  console.log(['Waring : ', warning].join(' '));
}

function note(note) {
  console.log(['Note : ', note].join(' '));
}

console.log(parseAge('42'));
console.log(parseAge(42));
console.log(parseAge('steve'));