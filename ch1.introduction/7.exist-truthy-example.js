const _ = require('underscore');

function existy(x) {
  return x != null;
}

console.log(existy(null));
console.log(existy(undefined));
console.log(existy({}.notHere));
console.log(existy(function() {}()));
console.log(existy(0));
console.log(existy(false));

function truthy(x) {
  return (x !== false) && existy(x);
}

console.log(truthy(false));
console.log(truthy(undefined));
console.log(truthy(0));
console.log(truthy(''));

function doWhen(condition, action) {
  if (truthy(condition)) {
    return action();
  } else {
    return undefined;
  }
}

function executeIfHasField(target, name) {
  return doWhen(existy(target[name]), function () {
    const result = _.result(target, name);
    console.log(['### RESULT : ', result].join(' '));
    return result;
  });
}

console.log(executeIfHasField([1, 2, 3], 'reverse'));
console.log(executeIfHasField({foo: 42}, 'foo'));
console.log(executeIfHasField([1, 2, 3], 'notHere'));

console.log([null, undefined, 1, 2, false].map(existy));
console.log([null, undefined, 1, 2, false].map(truthy));