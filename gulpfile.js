'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('less', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('src/css'))
    .pipe(reload({ stream : true }));
});

// watch *.less files for changes, run the preprocessor with the 'less' task and reload
gulp.task('default', ['less'], function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });
  gulp.watch('src/less/*.less', ['less']);
  gulp.watch('src/*.html').on('change', reload );
});
