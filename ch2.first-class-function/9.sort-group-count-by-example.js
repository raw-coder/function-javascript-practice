// sortBy, groupBy, countBy example

const _ = require('underscore');

const people = [
  { name: 'AAA', age: 40},
  { name: 'BBB', age: 30},
];

console.log(_.sortBy(people, p => p.age));

const albums = [
  { title: 'AAA', genre: 'Metal'},
  { title: 'BBB', genre: 'Pop'},
  { title: 'CCC', genre: 'Metal'},
];

console.log(_.groupBy(albums, a => a.genre));

console.log(_.countBy(albums, a => a.genre));