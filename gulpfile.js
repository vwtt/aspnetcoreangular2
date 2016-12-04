/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    clean = require('gulp-rimraf');

var webroot = "./wwwroot/";

var paths = {
    js: webroot + "app/**/*.js",
    map: webroot + "app/**/*.js.map",
    minJs: webroot + "app/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "app/app.min.js",
    concatCssDest: webroot + "css/site.min.css"
};

gulp.task("clean:js", [], function() {
  return gulp.src(paths.js, { read: false }).pipe(clean());
});

gulp.task("clean:minJs", [], function() {
  return gulp.src(paths.minJs, { read: false }).pipe(clean());
});

gulp.task("clean:map", [], function() {
  return gulp.src(paths.map, { read: false }).pipe(clean());
});

gulp.task("clean:minCss", function (cb) {
    return gulp.src(paths.minCss, { read: false }).pipe(clean());
});

gulp.task('default', ['clean'], function() {
  console.log("cleaning all js, map and minified files.");
});

gulp.task("clean", ["clean:js", "clean:minJs", "clean:map", "clean:minCss"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"], function() {
  console.log("minifying all js and css files.");
});

/*
gulp.task("test", function() {
   return gulp.src('tests/*.js')
      .pipe(jasmine());
});*/

gulp.task('copy-libs',function(){
  return gulp.src([
      './node_modules/@angular/**/*.*',
      './node_modules/angular-in-memory-web-api/**/*.*',
      './node_modules/core-js/**/*.*',
      './node_modules/reflect-metadata/**/*.*',
      './node_modules/rx/**/*.*',
      './node_modules/rxjs/**/*.*',
      './node_modules/systemjs/**/*.*',
      './node_modules/zone.js/**/*.*'
  ],  {base: './node_modules/'})
  .pipe(gulp.dest('./wwwroot/lib/'));
});
