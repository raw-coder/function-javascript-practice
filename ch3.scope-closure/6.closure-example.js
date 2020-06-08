// 클로저 : 가장 가까운 변수를 캡쳐하는 함수

const _ = require('underscore');

function whatWasTheLocal() {
  let CAPTURED = 'Hi';
  
  return function() {
    return 'Local : ' + CAPTURED;
  }
}

const reportLocal = whatWasTheLocal();

console.log(reportLocal());

function createScaleFunction(FACTOR) {
  return function(v) {
    return _.map(v, function(n) {
      return n * FACTOR;
    });
  }
}

const scale10 = createScaleFunction(10);

console.log(scale10([1, 2, 3]));

function createWeirdScaleFunction(FACTOR) {
  return function(v) {
    this['FACTOR'] = FACTOR;
    const captures = this;
    
    return _.map(v, _.bind(function(n) {
      return n * this['FACTOR'];
    }, captures));
  };
}

const scale100 = createWeirdScaleFunction(100);

console.log(scale100.call({}, [5, 6, 7]));

// JavaScript에서는 위의 코드처럼 어렵게 closure를 구현할 필요가 없다.


function makeAdder(CAPTURED) {
  return function(free) {
    return free + CAPTURED;
  };
}

const add10 = makeAdder(10);
console.log(add10(100));

const add1024 = makeAdder(1024);
console.log(add1024(100));

// 새로운 함수를 생성할때마다 고유한 CAPTURED 인스턴스가 생성됨

function averageDamp(FUN) {
  return function(n) {
    return average([n, FUN(n)]);
  };
}

function average(array) {
  const sum = _.reduce(array, (a, b) => a + b);
  return sum / _.size(array);
}

const averageSq = averageDamp(function(n) { return n * n; });

console.log(averageSq(10));
