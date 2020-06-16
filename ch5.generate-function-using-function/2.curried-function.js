const _ = require('underscore');

function rightAwayInvoker() {
  const args = _.toArray(arguments);
  const method = args.shift();
  const target = args.shift();
  
  return method.apply(target, args);
}

console.log(rightAwayInvoker(Array.prototype.reverse, [1, 2, 3]));


// curried function
// 2 types of curring direction
function leftCurryDivision(n) {
  return function(d) {
    return n / d;
  }
}

function rightCurryDivision(d) {
  return function(n) {
    return n / d;
  }
}

const divide10By = leftCurryDivision(10);
console.log(divide10By(2));

const divideBy10 = rightCurryDivision(10);
console.log(divideBy10(2));


// 정해지지 않은 수의 인자를 처리하기 위해 구현된 curry function
function curry(fun) {
  return function(arg) {
    return fun(arg);
  }
}

console.log(['11', '11', '11', '11'].map(parseInt)); // [ 11, NaN, 3, 4 ] === [parseInt('11', 0), parseInt('11', 1), parseInt('11', 2), parseInt('11', 3)]

console.log(['11', '11', '11', '11'].map(curry(parseInt))); // [ 11, 11, 11, 11 ]

function curry2(fun) {
  return function(secondArg) {
    return function(firstArg) {
      return fun(firstArg, secondArg);
    }
  }
}

function division(n, d) {
  return n / d;
}

const div10 = curry2(division)(10);
console.log(div10(50));

const parseBinaryString = curry2(parseInt)(2);
console.log(parseBinaryString('111')); // 7
console.log(parseBinaryString('10')); // 2

// curry example
const plays = [
  { artist: 'AAA', track: 'track A' },
  { artist: 'BBB', track: 'track B' },
  { artist: 'BBB', track: 'track B' },
  { artist: 'BBB', track: 'track B' },
  { artist: 'CCC', track: 'track A' },
  { artist: 'DDD', track: 'track B' },
  { artist: 'AAA', track: 'track A' },
];

console.log(_.countBy(plays, function (song) {
  return [song.artist, song.track].join(' - ');
}));

function songToString(song) {
  return [song.artist, song.track].join(' - ');
}
const songCount = curry2(_.countBy)(songToString);

console.log(songCount(plays));

function curry3(fun) {
  return function(last) {
    return function(middle) {
      return function(first) {
        return fun(first, middle, last);
      }
    }
  }
}

const songsPlayed = curry3(_.uniq)(false)(songToString);

console.log(songsPlayed(plays));

function toHex(n) {
  const hex = n.toString(16);
  return (hex.length < 2) ? [0, hex].join('') : hex;
}

function rgbToHexString(r, g, b) {
  return ['#', toHex(r), toHex(g), toHex(b)].join('');
}

console.log(rgbToHexString(255, 255, 255));

const blueGreenish = curry3(rgbToHexString)(255)(200);
console.log(blueGreenish(0));