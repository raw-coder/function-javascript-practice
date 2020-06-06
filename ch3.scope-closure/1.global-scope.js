const _ = require('underscore');

aGlobalVarible = 'livin la vida global';

console.log(_.map(_.range(2), function () {
  return aGlobalVarible;
}));;
