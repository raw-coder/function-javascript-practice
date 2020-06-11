const _ = require('underscore');

function uniqueString(len) {
  return Math.random().toString(36).substr(2, len);
}

console.log(uniqueString(10));

function uniqueStringWithPrefix(prefix) {
  return [prefix, new Date().getTime()].join('');
}

console.log(uniqueStringWithPrefix('Hi'));

// 클로저를 이용하여 COUNTER를 숨김
function makeUniqueStringFunction(start) {
  let COUNTER = start;
  
  return function(prefix) {
    return [prefix, COUNTER++].join('');
  }
}

const uniqueFunctionByFunction = makeUniqueStringFunction(10);

console.log(uniqueFunctionByFunction('Bye'));
console.log(uniqueFunctionByFunction('Yo'));


// 객체로도 위의 예제와 비슷한 기능을 구현할 수 있다
const generator = {
  count: 0,
  uniqueString: function(prefix) {
    return [prefix, this.count++].join('');
  },
};

console.log(generator.uniqueString('Wow'));
console.log(generator.uniqueString('Keke'));

// 함수형으로 작성하지 않는 위의 코드는 안전하지 않다
generator.count = 'What?';
console.log(generator.uniqueString('KiKi'));

// COUNTER 숨기기 꼼수 ===> 클로저를 활용한 함수형 코드가 나아보인다.
const newGenerator = (function(init) {
  let COUNTER = init;
  
  return {
    uniqueString: function(prefix) {
      return [prefix, COUNTER++].join('');
    }
  }
})(0);

console.log(newGenerator.uniqueString('NewOne'));