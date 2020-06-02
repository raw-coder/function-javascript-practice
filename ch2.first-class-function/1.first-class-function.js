const thirtyOne = function() { return 31 };
const thirtyOneArray = [31, function() { return 31 }];
const thirtyOneObject = {number: 31, fun: function() { return 31 }};

console.log(31 + (function() { return 31})());

function someAdd(n, f) { return n + f}
someAdd(31, function() { return 31 });

function someFunction() {
  return 42;
}

function someFunctionReturnFunction() {
  return function() { return 42 };
}