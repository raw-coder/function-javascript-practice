// call, arguments

const _ = require('underscore');

function unsplat(fun) {
  return function() {
    return fun.call(null, _.toArray(arguments));
  };
}

const joinElements = unsplat(array => array.join(' '));

console.log(joinElements(1, 2));