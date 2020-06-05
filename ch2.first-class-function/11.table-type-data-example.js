const _ = require('underscore');

const library = [
  { title: 'AAA', isbn: 'isbn1', ed: 1},
  { title: 'BBB', isbn: 'isbn2', ed: 2},
  { title: 'CCC', isbn: 'isbn3', ed: 1},
  { title: 'AAA', isbn: 'isbn4', ed: 2},
  { title: 'BBB', isbn: 'isbn5', ed: 1},
];

// SELECT title FROM library
console.log(_.pluck(library, 'title'));
console.log(library.map(l => l.title));

function project(table, keys) {
  return _.map(table, obj => _.pick(obj, keys));
}

console.log(project(library, 'title'));

const editionResult = project(library, ['title', 'isbn']);

console.log(editionResult);

const isbnResult = project(editionResult, ['isbn']);
console.log(isbnResult);
console.log(_.pluck(isbnResult, 'isbn'));


// SELECT ed AS edition FROM library
function rename(obj, newNames) {
  return _.reduce(newNames, (o, nu, old) => {
      if (_.has(obj, old)) {
        o[nu] = obj[old];
        return o;
      } else {
        return o;
      }
    },
    _.omit(obj, _.keys(newNames))
  );
}

console.log(rename({ a: 1, b: 2}, {'a': 'AAA'}));

function as(table, newNames) {
  return _.map(table, obj => rename(obj, newNames));
}

console.log(as(library, {ed: 'edition'}));

console.log(project(as(library, {ed: 'edition'}), ['edition'])); // SELECT ed AS edtion FROM library


function existy(x) {
  return x != null;
}

function truthy(x) {
  return (x !== false) && existy(x);
}

function restrict(table, pred) {
  return _.reduce(table, (newTable, obj) => {
    if (truthy(pred(obj))) {
      return newTable;
    } else {
      return _.without(newTable, obj);
    }
  }, table);
}

console.log(restrict(library, book => book.ed > 1));

// SELECT title, isbn
// FROM ( SELECT ed AS edtion FROM library)
// WHERE edition > 1

console.log(restrict(
  project(
    as(library, {ed: 'edition'}),
    ['title', 'isbn', 'edition']
  ),
  book => book.edition > 1
));
