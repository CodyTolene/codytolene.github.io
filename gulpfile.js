/// <binding ProjectOpened='Auto-Compile' />
'use-strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var del = require('del');
sass.compiler = require('node-sass');

gulp.task('Compile-Development-Scripts', async function () {
    console.log(`${await getCurrentTime()} Compiling development scripts (JavaScript) into 'assets/scripts/global.min.js'.`);
    async function removeOldScripts() {
        return await del([
            'assets/scripts/global.min.js'
        ]);
    }
    async function compileNewScripts() {
        return await gulp.src('development/scripts/**/*.js')
            .pipe(uglify({ compress: true, mangle: true })
                .on('error', function (e) { console.log(e); }))
            .pipe(rename({ basename: 'global' }))
            .pipe(rename({ suffix: '.min' }))
            .pipe(gulp.dest('assets/scripts'));
    }
    return await [
        await removeOldScripts(),
        await compileNewScripts()
    ];
});

gulp.task('Compile-Development-Styles', async function () {
    console.log(`${await getCurrentTime()} Compiling development styles (SASS) into 'assets/styles/global.min.css'.`);
    async function removeOldStyles() {
        return await del([
            'assets/styles/global.min.css'
        ]);
    }
    async function compileNewStyles() {
        return await gulp.src('development/styles/**/*.scss')
            .pipe(sass({ outputStyle: 'compressed' })
                .on('error', sass.logError))
            .pipe(concat('global.min.css'))
            .pipe(gulp.dest('assets/styles'));
    }
    return await [
        await removeOldStyles(),
        await compileNewStyles()
    ];
});

async function getCurrentTime() {
    var currentdate = new Date(); 
    return await '[' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds() + ']';
}

gulp.task('Auto-Compile', async function () {
    console.log(`${await getCurrentTime()} Auto-Compile task initiated. See 'gulpfile.js' for process definitions.`);
    gulp.watch(['development/scripts/**/*.js'], gulp.series('Compile-Development-Scripts'));
    gulp.watch(['development/styles/**/*.scss'], gulp.series('Compile-Development-Styles'));
});
