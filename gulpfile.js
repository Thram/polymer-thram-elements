var gulp = require('gulp'),
    inlineSource = require('gulp-inline-source'), sass = require('gulp-sass'),
    uglify = require('gulp-uglify'), del = require('del'), rename = require('gulp-rename');


gulp.task('compress', function () {
    gulp.src('./src/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./tmp'))
});

gulp.task('sass', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./tmp'));
});

gulp.task('copy:html', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./tmp'));
});

gulp.task('inlineSource', ['clean:dist', 'compress', 'sass', 'copy:html'], function () {
    return gulp.src('./tmp/**/*.html')
        .pipe(inlineSource())
        .pipe(gulp.dest('./dist'));
});


gulp.task('copy:demo', ['inlineSource'], function () {
    return gulp.src('./dist/**/*.html')
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./demos/components/polymer-thram-elements'));
});

gulp.task('clean:dist', function () {
    return del(['./dist/**/*', './demos/components/polymer-thram-elements']);
});

gulp.task('clean:tmp', ['copy:demo'], function () {
    del('./tmp/**/*');
});

gulp.task('build', ['copy:demo', 'inlineSource', 'clean:dist', 'compress', 'sass', 'copy:html']);

gulp.task('default', ['build']);