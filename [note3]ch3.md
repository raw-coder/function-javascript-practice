// 클로저 패턴 : 캡처된 변수 비공개 처리

```javascript
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
```
