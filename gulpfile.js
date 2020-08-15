'use-strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

/**
 * GET CURRENT TIME FORMATTED
 * Returns [HH:MM:SS]
 */
function getCurrentTimeAsConsoleFormat() {
  var currentdate = new Date();
  return '[' + (currentdate.getHours() < 10 ? '0' + currentdate.getHours() : currentdate.getHours()) +
    ':' + (currentdate.getMinutes() < 10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()) +
    ':' + (currentdate.getSeconds() < 10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds()) + ']';
}

/**
 * Hack task for "GitHub Pages" hosting Angular single page applications.
 * The 404 page is routed inside of the angular application but GitHub Pages intercepts
 * the 404 page directly and if `docs/404.html` doesn't exist it will default with its own.
 * This will make a copy of `docs/index.html` as `docs/404.html` so Angular can bootstrap
 * the SPA so then the 404 page can be rendered from Angular directly.
 */
gulp.task('CreateGitHub404Page', async function () {
  const prodIndexFile = 'docs/index.html';
  console.log(`${getCurrentTimeAsConsoleFormat()} Started compiling GitHub 404 page from: '${prodIndexFile}'`);
  return await gulp.src(prodIndexFile)
    .pipe(rename({ basename: '404' }))
    .pipe(gulp.dest('docs'));
});
