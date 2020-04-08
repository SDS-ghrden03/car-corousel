const data = require('./data/seedData');

var whileNum = 27398

var dataSet = [];
var i = 0
while(i < 1000) {
  var dataSet = dataSet.concat(data);
  i++
}

console.log(dataSet.length)