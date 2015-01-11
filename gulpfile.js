var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var $ = gulpLoadPlugins({
    scope: ['dependencies', 'devDependencies']
});

// Useful paths
var paths = {
  'app-styles': ['app/sass/styles.scss'],
  'app-all-styles': ['app/sass/**/*.scss'],
  'app-css-out': 'app/css'
};

// Browsers we care about
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('styles', function() { 
// For best performance, don't add Sass partials to `gulp.src`
  gulp.src(paths['app-styles'])
    .pipe($.plumber())
    .pipe($.changed('styles', {extension: '.scss'}))
    .pipe($.sass({
      precision: 10,
      sourceComments: 'normal'
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest(paths['app-css-out']));
    // Concatenate And Minify Styles
    //.pipe($.if('*.css', $.csso()))
    //.pipe(gulp.dest('dist/styles'))
    //.pipe($.size({title: 'styles'}));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
  $.watch(paths['app-all-styles'], function () {
    gulp.start('styles');
  });
});