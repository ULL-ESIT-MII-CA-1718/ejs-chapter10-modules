var fs = require('fs');
var readFile = fs.readFileSync;

function REQUIRE(name) {
  var code = new Function("EXPORTS", readFile(name));
  var EXPORTS = {};
  code(EXPORTS);
  return EXPORTS;
}

console.log(REQUIRE("week-day").name(1));
// → Monday
