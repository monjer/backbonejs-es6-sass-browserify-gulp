var gulp = require('gulp');
var path = require('path');
var conf = require('./config.js').conf;
var map2BundleName = require('./config.js').map2BundleName;
var getBundleName = require('./config.js').getBundleName;
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var del = require('del');
var browserify = require('browserify');
var gutil = require('gulp-util');
var watchify = require('watchify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('underscore');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

var yargs = require('yargs');
yargs.boolean('serve');
var argv = yargs.argv;



//
// clean
//
gulp.task('clean', function() {
  return del([conf.dist.cwd], {
    force: true
  });
});

//
// dev - watch - js app files
//
gulp.task('watch-js', function(cb) {

  var dir = path.dirname(conf.src.js.entry.application);
  var opts = {
    entries: conf.src.js.entry.application,
    debug: true
  };
  var b = watchify(browserify(opts))

  b.on('update', function() {
    gutil.log('refresh js bundle  ' + conf.src.js.entry.application);

    bundle();
  })
  b.on('bundle', function(bundle) {
    if (argv.serve) {
      browserSync.reload();
    }
  })

  bundle();

  function bundle() {
    b.bundle()
      .on('error', function(err) {
        gutil.log(err)
      })
      .pipe(source(conf.src.js.entry.application))
      .pipe(buffer())
      .pipe(rename(getBundleName(conf.src.js.entry.application)))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dir))
  }

});

//
// dev - js app files
//
gulp.task('dev-js', function(cb) {
  var dir = path.dirname(conf.src.js.entry.application);
  var opts = {
    entries: conf.src.js.entry.application,
    debug: true
  };
  var b = browserify(opts)
  return b.bundle()
    .on('error', function(err) {
      gutil.log(err)
    })
    .pipe(source(conf.src.js.entry.application))
    .pipe(buffer())
    .pipe(rename(getBundleName(conf.src.js.entry.application)))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir))
});

//
// dev - js lib files
//
gulp.task('dev-js-lib', function(cb) {
  var dir = path.dirname(conf.src.js.entry.lib);
  var opts = {
    entries: conf.src.js.entry.lib,
    debug: true
  };
  var b = browserify(opts)
  return b.bundle()
    .on('error', function(err) {
      gutil.log(err)
    })
    .pipe(source(conf.src.js.entry.lib))
    .pipe(buffer())
    .pipe(rename(getBundleName(conf.src.js.entry.lib)))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir))
});

//
// dev - css files
//
gulp.task('dev-css', function() {
  var dir = path.dirname(conf.src.css.entry.application);
  var sassOpt = {
    sourceMapEmbed: true,
    cache: false
  }
  return gulp.src(conf.src.css.entry.application)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpt).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dir));
});

//
// dev - watch - css app files
//
gulp.task('watch-css-app', ['dev-css'], function() {
  var pattern = path.resolve(conf.src.css.cwd + '/**/*.scss')
  var watcher = gulp.watch(pattern, ['dev-css']);
  watcher.on('change', function(event) {
    gutil.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    if (argv.serve) {
      browserSync.reload();
    }

  });
});

//
// dev - static file server
//
gulp.task('serve', function() {
  gutil.log('server started ');
  browserSync.init({
    server: {
      baseDir: "../"
    }
  });
});


//
// dev - task entry
//
var devTasks = ['dev-js-lib', 'watch-js', 'watch-css-app'];
if (argv.serve) {
  devTasks.unshift('serve');
}

gulp.task('dev', devTasks, function(cb) {
  gutil.log('dev mode started ');
});


//
// dist - js files
//
gulp.task('dist-js', ['dev-js', 'dev-js-lib'], function() {
  var jsPaths = [conf.src.js.entry.application, conf.src.js.entry.lib]
  jsPaths = _.map(jsPaths, function(path) {
    return path.replace('.js', '-bundle.js');
  });
  gulp.src(jsPaths)
    .pipe(uglify())
    .pipe(rename({
      suffix: '-mini'
    }))
    .pipe(gulp.dest(conf.dist.js.cwd));
});

//
// dist - css files
//
gulp.task('dist-css', ['dev-css'], function() {
  var cssPath = conf.src.css.entry.application.replace('scss', 'css');
  gulp.src(cssPath)
    .pipe(cssnano())
    .pipe(rename({
      suffix: '-mini'
    }))
    .pipe(gulp.dest(conf.dist.css.cwd));
});

//
// dist - entry
//
gulp.task('dist', function() {
  runSequence(
    'dist-js',
    'dist-css',
    function() {
      gutil.log('finish dist');
    });

});
