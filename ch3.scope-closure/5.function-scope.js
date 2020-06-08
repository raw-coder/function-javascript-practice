const _ = require('underscore');

function strangeIdentity(n) {
  // 의도적으로 의미 없는 작업 수행...
  for (var i = 0; i < n; i++) {}
  return i;
}

console.log(strangeIdentity(500)); // 500 : hoisting 된 i 값 출력

function strangeIdentity2(n) {
  // 의도적으로 의미 없는 작업 수행...
  for (this['i'] = 0; this['i'] < n; this['i']++) {}
  return this['i'];
}

console.log(strangeIdentity2(500));
console.log(i);

// 빈 객체를 컨텍스트에 전달하여 전역변수 i 변경을 막음
console.log(strangeIdentity2.call({}, 10000));
console.log(i);

// clone을 사용하여 전역 컨텍스트를 전달
function f() {
  this['a'] = 200;
  return this['a'] + this['b'];
}

var globals = { 'b': 2 };

console.log(f.call(_.clone(globals)));

