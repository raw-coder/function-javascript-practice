### 일급 함수

- 숫자를 변수에 저장하듯이 함수를 변수에 저장할 수 있다.
```javascript
const thirtyOne = function() { return 31 };
```
- 숫자를 배열에 저장하듯이 함수를 배열에 저장할 수 있다.
```javascript
const thirtyOneArray = [31, function() { return 31 }];
```
- 숫자를 객체에 저장하듯이 함수를 객체에 저장할 수 있다.
```javascript
const thirtyOneObject = {number: 31, fun: function() { return 31 }};
```
- 언제나 숫자를 만들 수 있듯이 함수를 필요할 때 만들 수 있다.
```javascript
31 + (function() { return 31})();
```
- 함수에 숫자를 전달할 수 있듯이 함수에 함수를 전달할 수 있다.
```javascript
function someAdd(n, f) { return n + f}
someAdd(31, function() { return 31 });
```
- 함수가 숫자를 반환할 수 있듯이 함수가 함수를 반환할 수 있다.
```javascript
return 42;
return function() { return 42 };
```



### 고차원 함수
- 함수를 인자로 받는다.
- 함수를 결과로 반환한다.