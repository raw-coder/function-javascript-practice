const _ = require('underscore');

const nums = [1, 2, 3, null, 5];
console.log(_.reduce(nums, function (total, n) {
  return total * n
}));


function fnull(fun) {
  const defaults = _.rest(arguments);
  
  return function() {
    const args = _.map(arguments, function(e, i) {
      return existy(e) ? e : defaults[i];
    });
    
    return fun.apply(null, args);
  }
}

function existy(x) {
  return x != null;
}

const safeMult = fnull(function(total, n) { return total * n }, 1, 1);
console.log(_.reduce(nums, safeMult));