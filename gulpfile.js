const gulp = require('gulp'),
      bs = require('browser-sync');


gulp.task('watch', ['browser-sync'],function(){

    gulp.watch("*.html").on('change', bs.reload);
    gulp.watch("app/**/*.js").on('change', bs.reload);
    gulp.watch("app/**/*.css").on('change', bs.reload);
    
});
gulp.task('browser-sync', function(){
    bs.init({
        server: {
            baseDir: "./"
        }
    });
})
