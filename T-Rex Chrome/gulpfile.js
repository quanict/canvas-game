var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglifyes = require('uglify-es'),
    composer = require('gulp-uglify/composer'),
    uglify = composer(uglifyes, console),
    gutil = require('gulp-util'),
    fileExtension = require('file-extension'),
    fileExists = require('file-exists'),
    fs = require('fs');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function() {
    var files = [];
    files.push('scss/*.scss');

    var gulpTask = gulp.src(files)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError));
    // .pipe(minifyCSS())
    // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'));

    return gulpTask.pipe(concat('style.min.css')).pipe(gulp.dest('.'));
});


gulp.task('default', function() {
    gulp.start(['scss']);
});

