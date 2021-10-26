'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function build() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.build = build;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
};










// var gulp = require("gulp");
//   var sass = require("gulp-sass");
//   gulp.task("sass", function() {
//     gulp.src("style.scss")
//       .pipe(sass())
//       .pipe(gulp.dest("css"));
//   });