const _ = require('underscore');

function dispatch() {
  const funs = _.toArray(arguments);
  const size = funs.length;
  
  return function(target) {
    let ret = undefined;
    const args = _.rest(arguments);
    
    for (let funIndex = 0; funIndex < size; funIndex++) {
      let fun = funs[funIndex];
      ret = fun.apply(fun, construct(target, args));
      
      if (existy(ret)) return ret;
    }
    return ret;
  };
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

const str = dispatch(
  invoker('toString', Array.prototype.toString),
  invoker('toString', String.prototype.toString),
  );

console.log(str('a'));
console.log(str(_.range(10)));

function invoker(NAME, METHOD) {
  return function(target) {
    if (!existy(target)) fail('Must provide a target');
    
    const targetMethod = target[NAME];
    const args = _.rest(arguments);
    
    return doWhen((existy(targetMethod) && METHOD === targetMethod), function () {
      return targetMethod.apply(target, args);
    })
  }
}
function existy(x) {
  return x != null;
}
function truthy(x) {
  return (x !== false) && existy(x);
}
function doWhen(condition, action) {
  if (truthy(condition)) {
    return action();
  } else {
    return undefined;
  }
}
function fail(failure) {
  throw new Error(failure);
}


function stringReverse(s) {
  if (!_.isString(s)) return undefined;
  return s.split('').reverse().join('');
}

console.log(stringReverse('abc'));
console.log(stringReverse(123));

const rev = dispatch(invoker('reverse', Array.prototype.reverse), stringReverse);

console.log(rev([1, 2, 3]));
console.log(rev('cba'));


// Bad case !!!
function performCommandHardcoded(command) {
  let result;
  
  switch (command.type) {
    case 'notify':
      result = notify(command.message);
      break;
    case 'join':
      result = changeView(command.target);
      break;
    default:
      console.log('Alert : ', command.type);
  }
  return result;
}

function notify(message) { console.log('Notify : ', message) }
function changeView(target) { console.log('ChangeView : ', target) }

performCommandHardcoded({ type: 'notify', message: 'hi' });
performCommandHardcoded({ type: 'join', target: 'waiting-room'});
performCommandHardcoded({ type: 'wow'});

// dispatch를 이용하여 개선!!
function isa(type, action) {
  return function(obj) {
    if (type === obj.type) {
      return action(obj);
    }
  }
}
const performCommand = dispatch(
  isa('notify', function(obj) { return notify(obj.message)}),
  isa('join', function(obj) { return changeView(obj.target)}),
  function(obj) { console.log('alert : ', obj.type)}
);

performCommand({ type: 'notify', message: 'hi' });
performCommand({ type: 'join', target: 'waiting-room'});
performCommand({ type: 'wow'});

const performAdminCommand = dispatch(
  isa('kill', function(obj) { return shutdown(obj.hostname) }),
  performCommand,
);

function shutdown() { console.log('Shutdown!!') }

performAdminCommand({ type: 'kill', hostname: 'localhost' });
performAdminCommand({ type: 'kekeke' });
