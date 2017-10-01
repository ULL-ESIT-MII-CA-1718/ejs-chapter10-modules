var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
             "Thursday", "Friday", "Saturday"];

EXPORTS.name = function(number) {
  return names[number];
};
EXPORTS.number = function(name) {
  return names.indexOf(name);
};
