const gulp = require('gulp'),
      bs = require('browser-sync');


gulp.task('watch', ['browser-sync'],function(){
    gulp.watch("*.html").on('change', bs.reload);
});
gulp.task('browser-sync', function(){
    bs.init({
        server: {
            baseDir: "./"
        }
    });
})
