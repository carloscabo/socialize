var
  gulp     = require('gulp'),
  iconfont = require('gulp-iconfont'),
  iconfontCss = require('gulp-iconfont-css'),
  runTimestamp = Math.round(Date.now()/1000),

  font_name = 'socialize';

gulp.task('build-font', function(){
  gulp.src(['src/svg/*.svg'])
    .pipe(iconfontCss({
      fontName: font_name,
      path: 'src/css-template/_icons.scss',
      targetPath: '/css/socialize/_icons.scss',
      fontPath: '/fonts/socialize/'
    }))
    .pipe(iconfont({
      fontName: font_name, // required
      appendUnicode: true, // recommended option
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
    .on('glyphs', function(glyphs, options) {
      // CSS templating, e.g.
      console.log(glyphs, options);
    })
    .pipe(gulp.dest('/fonts/socialize'));
});
