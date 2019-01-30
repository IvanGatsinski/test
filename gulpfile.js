var
  gulp         = require('gulp'),
  sass         = require('gulp-sass'),
  browserSync = require('browser-sync').create()
  // require tasks as dependencies
//   watch        = require('./semantic/tasks/watch'),
//   build        = require('./semantic/tasks/build')


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("materialize-src/sass/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("materialize-src/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve','sass']);

// gulp.task('watch-ui', watch);
// gulp.task('build-ui', build);
// var gulp = require("gulp");
// var sass = require("gulp-sass");
// var browserSync = require("browser-sync").create();
 
// function sass_compiler() {
//     return gulp
//         .src("sass/*.scss")
//         .pipe(sass())
//         .on("error", sass.logError)
//         .pipe(gulp.dest("css"));
// }
// function reload() {
//     browserSync.reload();
// }
// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch("sass/*.scss", sass_compiler);
// }
 
// exports.default = gulp.parallel(reload, watch, sass_compiler);