var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("preinstall", shell.task("npm install -g static-server"));

gulp.task("serve", shell.task("static-server -p 9080"));


