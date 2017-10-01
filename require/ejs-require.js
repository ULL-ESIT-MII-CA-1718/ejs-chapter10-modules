var fs = require('fs');
var readFile = fs.readFileSync;

function REQUIRE(name) {
  if (name in REQUIRE.cache)
    return REQUIRE.cache[name];

  var code = new Function("EXPORTS, MODULE", readFile(name+".js"));
  var EXPORTS = {}, MODULE = {exports: EXPORTS};
  code(EXPORTS, MODULE);
  REQUIRE.cache[name] = MODULE.exports;
  return MODULE.exports;
}
REQUIRE.cache = Object.create(null);

var weekDay = REQUIRE("week-day");
console.log(weekDay.name(1));
console.log(weekDay.number("Monday"));
console.log(weekDay.name(2));
console.log(weekDay.number("Tuesday"));

var foo = REQUIRE("foo");
console.log(foo);
