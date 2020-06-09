const _ = require('underscore');

// 횟수와 값을 받아서 중복된 값을 횟수만큼 채우는 배열을 반환하는 함수 repeat
function repeat(times, VALUE) {
  return _.map(_.range(times), () => VALUE);
}

console.log(repeat(4, 'Major'));


// 함수를 인자로 받아 일반화한 repeatedly
function repeatedly(times, fun) {
  return _.map(_.range(times), fun);
}

console.log(repeatedly(3, () => Math.floor((Math.random() * 10) + 1)));


let htmlStr = '';

repeatedly(3, n => {
  const id = `id${n}`;
  htmlStr += `<p id="${id}">Delay!</p>`;
  return id;
});

console.log(htmlStr);

// repeatedly를 일반화하여 반복종료조건도 함수로 받는 iterateUntil
function iterateUntil(fun, check, init) {
  let ret = [];
  let result = fun(init);
  
  while(check(result)) {
    ret.push(result);
    result = fun(result);
  }
  
  return ret;
}

console.log(iterateUntil(n => (n + n), n => (n <= 1024), 1));
console.log(repeatedly(10, exp => Math.pow(2, exp + 1))); // repeatedly에서는 호출횟수를 지정해야함