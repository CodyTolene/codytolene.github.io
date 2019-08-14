/// <binding ProjectOpened='Auto-Compile' />
'use-strict';

var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var prettyHtml = require('gulp-pretty-html');
var removeEmptyLines = require('gulp-remove-empty-lines');
var nunjucksRender = require('gulp-nunjucks-render');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
sass.compiler = require('node-sass');

/**
 * VENDOR SCRIPT INCLUDES
 * 
 * List here all vendor Javascript files you would like to include into the production compilation.
 */
var vendorScripts = [
    'node_modules/jquery/dist/jquery.min.js',               // jQuery                               // MIT
    'node_modules/jquery.easing/jquery.easing.min.js',      // jQuery Easing                        // BSD - Must include copyright in source
    'node_modules/jquery-parallax.js/parallax.min.js',      // jQuery Parallax                      // MIT
    'node_modules/popper.js/dist/umd/popper.min.js',        // Popper (Bootstrap dependency)        // MIT
    'node_modules/bootstrap/dist/js/bootstrap.min.js',      // Bootstrap                            // MIT
    'node_modules/mdbootstrap/js/mdb.min.js',               // Material Design Bootstrap Free  
    'node_modules/cookieconsent/build/cookieconsent.min.js',// MIT
    'node_modules/particles.js/particles.js'                // MIT
];

/**
 * COMPILE SCRIPTS
 * 
 * This function takes all JS within '~/dev/scripts' and compiles them into '~/scripts'.
 * On completion, site scripts will be production ready (minified & uglified).
 */
async function compileNewScripts() {
    console.log(`${await getCurrentTime()} Compiling '.js' files within '~/dev/scripts' to '~/scripts' suffixed with '.min'.`);
    return await gulp.src('dev/scripts/**/*.js')
        .pipe(uglify({ compress: true, mangle: true })
            .on('error', function (e) { console.log(e); }))
        .pipe(concat('global.min.js'))
        .pipe(gulp.dest('scripts'));
}

/**
 * COPY VENDOR SCRIPTS
 * 
 * This function takes all vendor scripts within the vendorScripts string array and copys them into '~/scripts'.
 */
async function copyVendorScripts() {
    console.log(`${await getCurrentTime()} Copying vendor '.js' files within vendorArray to '~/scripts'.`);
    return await gulp.src(vendorScripts)
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('scripts'));
}

/**
 * COMPILE STYLES
 * 
 * This function takes all SCSS within '~/dev/styles' and compiles them into '~/styles'.
 * On completion, site styles will be production ready (minified).
 */
async function compileNewStyles() {
    console.log(`${await getCurrentTime()} Compiling '.scss' files within '~/dev/styles' to '~/styles' suffixed with '.min'.`);
    return await gulp.src('dev/styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })
            .on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('styles'));
}

/**
 * COMPILE HTML (Nunjucks)
 * 
 * Take all files within '~/dev/pages' and compile them into '~/'
 */
async function compileMarkup() {
    console.log(`${await getCurrentTime()} Compiling '.html' files within '~/dev/pages' to '~/'.`);
    return await gulp.src('dev/pages/*.html')
        .pipe(nunjucksRender({
            path: ['dev/pages/templates']
        }).on('error', function (e) { console.log(e); }))
        .pipe(prettyHtml({
            preserve_newlines: true,
            max_preserve_newlines: 0,
            end_with_newline: true,
            wrap_attributes: 'auto'
        }))
        .pipe(removeEmptyLines({
            removeComments: true
        }))
        .pipe(gulp.dest('./'));
}

/**
 * REMOVE OLD SCRIPTS
 * 
 * This function removes all previously compiled JavaScript files from '~/scripts'.
 */
async function removeOldScripts() {
    console.log(`${await getCurrentTime()} Deleting all '.js' files within '~/scripts'`);
    return await del([
        'scripts/**/*.js'
    ]);
}

/**
 * REMOVE OLD STYLES
 * 
 * This function removes all previously compiled CSS files from '~/styles'.
 */
async function removeOldStyles() {
    console.log(`${await getCurrentTime()} Deleting all '.css' files within '~/styles'`);
    return await del([
        'styles/**/*.css'
    ]);
}

/**
 * GET CURRENT TIME
 * Returns [HH:MM:SS]
 */
async function getCurrentTime() {
    var currentdate = new Date();
    return await '[' + (currentdate.getHours() < 10 ? '0' + currentdate.getHours() : currentdate.getHours()) +
        ':' + (currentdate.getMinutes() < 10 ? '0' + currentdate.getMinutes() : currentdate.getMinutes()) +
        ':' + (currentdate.getSeconds() < 10 ? '0' + currentdate.getSeconds() : currentdate.getSeconds()) + ']';
}

/**
 * Compile
 * CLI: $gulp Compile
 */
gulp.task('Compile', async function () {
    console.log(`${await getCurrentTime()} Compile task initiated. See 'gulpfile.js' for process definitions.`);
    return await [
        await compileMarkup(),
        await removeOldScripts(),
        await compileNewScripts(),
        await copyVendorScripts(),
        await removeOldStyles(),
        await compileNewStyles()
    ];
});

/**
 * Auto-Compile
 * CLI: $gulp Auto-Compile
 */
gulp.task('Auto-Compile', async function () {
    console.log(`${await getCurrentTime()} Auto-Compile task initiated. See 'gulpfile.js' for process definitions.`);
    gulp.watch(['dev/scripts/**/*.js'], async function () { return await [await removeOldScripts(), await compileNewScripts(), await copyVendorScripts()]; });
    gulp.watch(['dev/styles/**/*.scss'], async function () { return await [await removeOldStyles(), await compileNewStyles()]; });
    gulp.watch(['dev/pages/**/*.html'], async function () { return await compileMarkup(); });
});
