var fs = require('fs');
var readFile = fs.readFileSync;

function REQUIRE(name) {
  var code = new Function("EXPORTS", readFile(name+".js"));
  var EXPORTS = {};
  code(EXPORTS);
  return EXPORTS;
}

module.exports = REQUIRE;
