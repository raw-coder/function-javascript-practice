const _ = require('underscore');

let globals = {};

function makeBindFunction(resolver) {
  return function(k, v) {
    const stack = globals[k] || [];
    globals[k] = resolver(stack, v);
    return globals;
  };
}

const stackBinder = makeBindFunction(function(stack, v) {
  stack.push(v);
  return stack;
});

const stackUnbinder = makeBindFunction(function(stack) {
  stack.pop();
  return stack;
});

const dynamicLookup = function(k) {
  const slot = globals[k] || [];
  return _.last(slot);
};

stackBinder('a', 1);
stackBinder('b', 100);

console.log(dynamicLookup('a'));
console.log(globals);

stackBinder('a', '*');

console.log(dynamicLookup('a'));
console.log(globals);

stackUnbinder('a');

console.log(dynamicLookup('a'));
console.log(globals);

function f() {
  return dynamicLookup('a');
}

function g() {
  stackBinder('a', 'g');
  return f();
}

console.log(f());
console.log(g());
console.log(globals);




