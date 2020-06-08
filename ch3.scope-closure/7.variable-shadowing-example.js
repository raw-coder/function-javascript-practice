var name = 'steve';
var name = 'What?';

console.log(name);

var shadowed = 0;

function argShadow(shadowed) {
  return ['Value is ', shadowed].join(' ');
}

console.log(argShadow(108));
console.log(argShadow());

function varShadow(shadowed) {
  var shadowed = 987654321;
  return ['Value is ', shadowed].join(' ');
}

console.log(varShadow(108));

function captureShadow(SHADOWED) {
  return function(SHADOWED) {
    return SHADOWED + 1;
  };
}

var closureShadow = captureShadow(108);

console.log(closureShadow(2));