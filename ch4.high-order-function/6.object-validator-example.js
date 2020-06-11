const _ = require('underscore');

function checker() {
  const validators = _.toArray(arguments);
  
  return function(obj) {
    return _.reduce(validators, function(errs, check) {
      if (check(obj)) {
        return errs;
      } else {
        return _.chain(errs).push(check.message).value();
      }
    }, [])
  };
}

function always(VALUE) {
  return function() {
    return VALUE;
  }
}

const alwaysPasses = checker(always(true), always(true));
console.log(alwaysPasses({}));

const fails = always(false);
fails.message = 'a failure in life';
const alwaysFails = checker(fails);

console.log(alwaysFails({}));


function validator(message, fun) {
  const f = function() {
    return fun.apply(fun, arguments);
  };
  
  f['message'] = message;
  return f;
}

const gonnaFail = checker(validator('OMG!!!', always(false)));

console.log(gonnaFail(100));

function aMap(obj) {
  return _.isObject(obj);
}

const checkCommand = checker(validator('must be a map', aMap));

console.log(checkCommand({}));
console.log(checkCommand(42));

function hasKeys() {
  const KEYS = _.toArray(arguments);
  
  const fun = function(obj) {
    return _.every(KEYS, function(k) {
      return _.has(obj, k);
    });
  };
  
  fun.message = cat(['Must have values for keys:'], KEYS).join(" ");
  return fun;
}

const checkCommand2 = checker(validator('must be a map', aMap), hasKeys('msg', 'type'));


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

console.log(checkCommand2({msg: 'some message', type: 'display'}));
console.log(checkCommand2(32));
console.log(checkCommand2({}));