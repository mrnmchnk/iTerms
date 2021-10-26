const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const terser = require('gulp-terser');

function browsersync() {
  browserSync.init({
    server: { baseDir: "./"},
    notify: false,
    online: false
  })
}

function scripts() {
  return src("./sass/*.scss")
  .pipe(concat("./css"))
  .pipe(terser())
  .pipe(dest("./css"))
}

exports.browserSync = browsersync;
exports.scripts = scripts;