var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('sass', function () {
    return gulp.src('app/styles/scss/ch.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function () {
    browserSync({
        server: { baseDir: 'app' },
    })
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/styles/scss/components/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
        callback
    )
});
