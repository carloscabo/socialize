var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('build-font', function(){
  return gulp.src(['src/svg/*.svg'])
    .pipe(iconfont({
      fontName: 'socialize', // required
      appendUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('fonts/'));
});
