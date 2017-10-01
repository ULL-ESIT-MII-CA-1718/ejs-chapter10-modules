// global define
define = require(__dirname+"/amd.js");

define(["week-days"], function(weekDay) {
  console.log(weekDay.name(0));
});

