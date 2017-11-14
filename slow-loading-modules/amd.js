var fs = require('fs');
var util = require("util");

var backgroundReadFile = fs.readFile;

var defineCache = Object.create(null);
var currentMod = null;

function getModule(name) {
  if (name in defineCache)
    return defineCache[name];

  var module = {
    name: name,    // for debugging only
    exports: null, // Contains the object returned by the module function once it has been evaluated
		loaded: false, // It is set to true when the module has been read and fully evaluated
		onLoad: []     // Queue of 'event handlers'  "whenDepsLoaded" to execute for the modules waiting for the load of this  module
  };
  defineCache[name] = module;
  backgroundReadFile(name+".js", function(err, code) {
		if (err) {
			throw err;
		}
    currentMod = module;
    console.log("backgroundReadFile callback: finished reading file "+name+" now is currentMod: "+util.inspect(currentMod));
    new Function("", code)();
  });
  return module;
}

function define(depNames, moduleFunction) {
  var myMod = currentMod;
  var deps = depNames.map(getModule);

  console.log("define: myMod = "+util.inspect(myMod)+" depNames = "+depNames);
  deps.forEach(function(mod) {
    if (!mod.loaded)
      mod.onLoad.push(whenDepsLoaded); // I believe closure here plays an important role
    console.log("mod.onLoad: "+util.inspect(mod.onLoad));
  });

  function whenDepsLoaded() {
    if (!deps.every(function(m) { return m.loaded; }))
      return; 

    console.log("whenDepsLoaded. myMod = "+util.inspect(myMod));
    var args = deps.map(function(m) { 
      return m.exports; 
    });
    console.log("whenDepsLoaded: calling with args:\n  "+util.inspect(args));
    var exports = moduleFunction.apply(null, args);
    if (myMod) {
      myMod.exports = exports;
      myMod.loaded = true;
      myMod.onLoad.forEach(function(f) { f(); }); // For all the modules which depend on this module
    }
  }
  whenDepsLoaded();
};
/* function define(module dependencies list, callback) */
module.exports =  define;
