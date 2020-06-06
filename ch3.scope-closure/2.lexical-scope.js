// lexical scope : 가장 가까운 바인딩 컨테스트에서 시작해서 바인딩을 찾을 때까지 외부로 변수 탐색이 이루어짐

const _ = require('underscore');

aVariable = 'Outer';

function afun() {
  var aVariable = 'Middel';
  
  return _.map([1, 2, 3], function(e) {
    var aVariable = 'In';
    return [aVariable, e].join(' ');
  })
}

console.log(afun());