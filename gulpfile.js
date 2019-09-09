var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var cleanCSS = require('gulp-clean-css');

gulp.task('less',function() {
  return (
    gulp.src('src/styles/*.less')
    .pipe(plumber({errorHandler: notify.onError('Error:<%= error.message %>;')}))
    .pipe(less())
    // .pipe(cleanCSS())
    .pipe(gulp.dest('src/styles'))
  );
});
gulp.task('watchLess',function(){
  gulp.watch('src/styles/*.less', ['less']);
});
gulp.task('taskList', ['less', 'watchLess']);
gulp.task('toCSS', function() {
  gulp.start('taskList');
});