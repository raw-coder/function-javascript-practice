const _ = require('underscore');

// 항상 상수를 리턴하는 함수 예제
function always(VALUE) {
  return function() {
    return VALUE;
  }
}

const f = always(function() {});

console.log(f() === f()); // 클로저는 한개의 값이나 레퍼런스를 캡처한 다음 항상 같은 값을 반환함

const g = always(function() {});

console.log(f() === g()); // 새로운 클로저는 매번 다른 값을 캡처함


// 다른 함수를 바환하는 함수 예제
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

const rev = invoker('reverse', Array.prototype.reverse);

console.log(_.map([[1, 2, 3]], rev));