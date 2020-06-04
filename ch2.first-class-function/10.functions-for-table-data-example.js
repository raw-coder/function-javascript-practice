const _ = require('underscore');

const zombie = { name: 'AAA', film: 'Day of the Dead' };

console.log(_.keys(zombie));
console.log(_.values(zombie));

const books = [
  { title: 'AAA', author: 'writerA'},
  { title: 'BBB', author: 'writerB'},
  { title: 'CCC', author: 'writerC'},
  { title: 'DDD'},
];

console.log(_.pluck(books, 'author'));

console.log(_.pairs(zombie));

console.log(_.object(_.map(_.pairs(zombie), pair => [pair[0].toUpperCase(), pair[1]])));

console.log(_.invert(zombie));
console.log(_.invert({A: 123, B: 100}));

console.log(_.map(books, book => _.defaults(book, {author: 'Unkown'})));

const person = { name: 'Romy', token: 'fdsoifdsji', password: 'hello' };

console.log(_.omit(person, 'token', 'password'));
console.log(_.pick(person, 'token', 'password'));

const library = [
  { title: 'AAA', isbn: 'isbn1', ed: 1},
  { title: 'BBB', isbn: 'isbn2', ed: 2},
  { title: 'CCC', isbn: 'isbn3', ed: 1},
  { title: 'AAA', isbn: 'isbn4', ed: 2},
  { title: 'BBB', isbn: 'isbn5', ed: 1},
];

console.log(_.findWhere(library, {ed: 1}));
console.log(_.findWhere(library, {title: 'AAA'}));
console.log(_.where(library, {ed: 1}));
console.log(_.where(library, {title: 'AAA'}));


