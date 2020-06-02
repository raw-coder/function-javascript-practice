const _ = require('underscore');

const csvStr = 'name, age, hair\nAAA, 35, red\nBBB, 65, blonde';

function parseCSV(str) {
  return _.reduce(str.split('\n'), function (table, row) {
    table.push(_.map(row.split(','), function(column) {
      return column.trim();
    }));
    return table;
  }, []);
};

console.log(parseCSV(csvStr));

const peopleTable = parseCSV(csvStr);

console.log(_.rest(peopleTable).sort());
console.log(_.rest(peopleTable,1 ).sort());

function selectNames(table) {
  return _.rest(_.map(table, _.first));
}

function selectAges(table) {
  return _.rest(_.map(table, row => row[1]));
}

function selectHairColor(table) {
  return _.rest(_.map(table, row => row[2]));
}

console.log(selectNames(peopleTable));
console.log(selectAges(peopleTable));
console.log(selectHairColor(peopleTable));
