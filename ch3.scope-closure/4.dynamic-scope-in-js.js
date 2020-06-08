const _ = require('underscore');

function globalThis() {
  return this;
}

// 전역객체 this
console.log(globalThis());
console.log(globalThis.call('hehehe!'));
console.log(globalThis.apply('kekeke', []));

let nopeThis = _.bind(globalThis, 'nope');

console.log(nopeThis.call('hi'));


// this 레퍼런스는 동적으로 스코핑 되므로 더 이상 값이 바뀌지 않도록 _.bindAll을 사용하여 잠금
const target = {
  name: 'right value',
  aux: function() { return this.name },
  act: function() { return this.aux() },
};

// console.log(target.act.call('hihi')); // TypeError: this.aux is not a function

_.bindAll(target, 'aux', 'act');

console.log(target.act.call('hihi'));


