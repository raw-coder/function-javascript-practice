const _ = require('underscore');

// closure 를 사용한 complement 함수 예제

function complement(PRED) {
  return function() {
    return !PRED.apply(null, _.toArray(arguments));
  };
}

function isEven(n) {
  return n % 2 === 0;
}

const isOdd = complement(isEven);

console.log(isOdd(10));
console.log(isOdd(11));

// isEven 재정의 이후에도 isOdd 의 실행결과는 바뀌지 않음. 클로저에서 캡처한 값의 레퍼런스가 캡처됨
isEven = () => false;

console.log(isOdd(10));
console.log(isOdd(11));


// 캡처된 변수 노출됨
function showObject(OBJ) {
  return function() {
    return OBJ;
  }
}

const obj = { a: 42 };
const showObj = showObject(obj);
console.log(showObj());

obj.newField = 100;
console.log(showObj());

// 클로저 패턴 : 캡처된 변수 비공개 처리
const pingpong = (function() {
  let PRIVATE = 0;
  
  return {
    inc: function(n) {
      return PRIVATE += n;
    },
    dec: function(n) {
      return PRIVATE -= n;
    }
  };
})();

console.log(pingpong.inc(10));
console.log(pingpong.dec(5));

pingpong.division = function(n) {
  return PRIVATE / n;  // PRIVATE is not defined
};

console.log(pingpong.division(2));