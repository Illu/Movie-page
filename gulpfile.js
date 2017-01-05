var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Watch scss AND html files, doing different things with each.
gulp.task('default', function(){
	console.log("Use the serve task to launch browser sync.");
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    gulp.watch("app/*").on("change", reload);
	gulp.watch("app/**/*.js").on("change", reload);
	gulp.watch("app/**/*.css").on("change", reload);
});
