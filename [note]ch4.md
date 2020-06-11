고차원 함수 High-order function

- 일급
- 함수를 인자로 받는다
- 함수를 결과로 반환한다

클로저의 특성
```javascript
function always(VALUE) {
  return function() {
    return VALUE;
  }
}
```

- 클로저는 한개의 값이나 레퍼런스를 캡처한 다음 항상 같은 값을 반환함

```javascript
const f = always(function() {});

console.log(f() === f());
```

- 새로운 클로저는 매번 다른 값을 캡처함

```javascript
const g = always(function() {});

console.log(f() === g());
```
 
 
참고 투명성 (Referencial Transparency)

- 자신이 반환할 값과 관련된 인자만을 활용하는 함수

