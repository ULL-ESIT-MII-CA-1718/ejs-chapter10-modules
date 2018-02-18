var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["debugger"]);

gulp.task("run", shell.task('NODE_PATH=./ node main.js'));

/*
En versiones v8.*  chrome://inspect en el navegador
https://nodejs.org/en/docs/inspector/
*/
gulp.task('debugger', shell.task('NODE_PATH=./ node --inspect-brk main.js'));

