var gulp = require('gulp'),
    less = require('gulp-less'),
    gutil = require('gulp-util');

handleError = function(err) {
    gutil.log(err);
    gutil.beep();
};

gulp.task('less', function() {
    gulp.src('app/./less/*.less')
        .pipe(less())
        .on('error', handleError)
        .pipe(gulp.dest('app/./css'))
});

gulp.task("watch", function() {
    gulp.watch('app/less/**/*.less', ['less']);
});


gulp.task("build", ['less']);

gulp.task("default", ["build", "watch"]);