REQUIRE = require(__dirname+"/ejs-require.js");

var weekDay = REQUIRE("week-day");
console.log(weekDay.name(1));
console.log(weekDay.number("Monday"));
console.log(weekDay.name(2));
console.log(weekDay.number("Tuesday"));

var foo = REQUIRE("foo");
console.log(foo);

