// apply

function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  };
}

const addArrayElements = splat((x, y) => x + y);

console.log(addArrayElements([1, 2]));