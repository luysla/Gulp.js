var gulp = require('gulp');
var customizeBootstrap = require('gulp-customize-bootstrap');
var less = require('gulp-less');

gulp.task('default',['compileBootstrap']);
 
gulp.task('compileBootstrap', function() {
  return gulp.src('node_modules/bootstrap/less/bootstrap.less')
    .pipe(customizeBootstrap('./dev/styles/less/*.less'))
    .pipe(less())
    .pipe(gulp.dest('./dist/css/'));
});