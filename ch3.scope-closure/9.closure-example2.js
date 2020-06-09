const _ = require('underscore');

function plucker(FIELD) {
  return function(obj) {
    return (obj && obj[FIELD]);
  };
}

const book = { title: 'AAA', author: 'Hey' };

const getTitle = plucker('title');

console.log(getTitle(book));

const books = [
  { title: 'AAA', author: 'Hey' },
  { title: 'CCC', author: 'Kiki' },
  { stars: 5 },
  { title: 'Wow', author: 'Keke' },
];

const third = plucker(2);

console.log(third(books));

console.log(_.filter(books, getTitle));
