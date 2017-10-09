// global define
define = require(__dirname+"/amd.js");

define(["week-days", "tutu"], function(weekDay, Tutu) {
  console.log(Tutu);
  console.log(weekDay.chuchu);
  console.log(weekDay.name(0));
});

