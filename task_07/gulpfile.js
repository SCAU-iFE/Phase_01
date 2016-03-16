var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();


gulp.task('lessminicss', function() {
    gulp.src('assets/less/*.less')
        .pipe($.concat('app.less'))
        .pipe($.less())
        .pipe($.minifyCss())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['lessminicss']);

