'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 9000,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('**/*.html')
    .pipe(connect.reload());
});

gulp.task('html:watch', function() {
  gulp.watch(['**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'html:watch']);
