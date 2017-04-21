var gulp = require('gulp');
var path = require('path');
var conf = require('./config.js');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var del = require('del');
var browserify = require('browserify');
var gutil = require('gulp-util');
var watchify = require('watchify');
var rename = require('rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('underscore');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var yargs = require('yargs');
var es = require('event-stream');
var collapse = require('bundle-collapser/plugin');

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

/**
 * Use browserify to bundle file , watch the file change and reload the browser
 *
 * @param {string} opts.entry - javascript entry file path
 * @param {string} opts.dest - dest folder path
 * @param {boolean} opts.watch - watch file change
 * @param {boolean} opts.debug - if is debug mode
 * @param {string} opts.bundle - bundle output file name
 * @return {stream}
 */
function bundleJS(opts) {
  var entry = opts.entry;
  var dest = opts.dest;
  var bundleFile = path.basename(opts.bundle || rename(opts.entry, { suffix: '-bundle' }));
  var watch = opts.watch;
  var debug = _.isUndefined(opts.debug) ? true : opts.debug;
  var bopts = {
    entries: entry,
    debug: debug,
    plugin: []
  };

  if (watch) {
    bopts = _.extend(bopts, watchify.args, {
      plugin: [watchify]
    });
  }
  if (!debug) {
    bopts.plugin.push(collapse)
  }

  var b = browserify(bopts)

  b.on('bundle', function() {
    gutil.log('finish bundle js   ' + entry);
    if (watch && argv.serve) {
      browserSync.reload();
    }
  })


  function bundle(b) {
    var bundler = b.bundle()
      .on('error', function(err) {
        gutil.log(err)
      })
      .pipe(source(bundleFile))
      .pipe(buffer());

    if (!debug) {
      bundler = bundler.pipe(uglify());
    }

    return bundler.pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
  }

  if (watch) {
    b.on('update', function() {
      gutil.log('start bundle js   ' + entry);
      bundle(b);
    })
    return bundle(b);

  } else {
    return bundle(b);
  }
}

//
// dev - watch - js app files
//
gulp.task('watch-js-app', function(cb) {

  return bundleJS({
    entry: conf.src.js.application.entry,
    dest: conf.src.js.cwd,
    watch: true
  });
});

//
// dev - js app files
//
gulp.task('dev-js-app', function(cb) {
  return bundleJS({
    entry: conf.src.js.application.entry,
    dest: conf.src.js.cwd,
    watch: false
  })
});

//
// dev - js lib files
//
gulp.task('dev-js-lib', function(cb) {
  return bundleJS({
    entry: conf.src.js.lib.entry,
    dest: conf.src.js.cwd,
    watch: false
  });
});

//
// dev - css files
//
gulp.task('dev-css-app', function() {
  var sassOpt = {
    sourceMapEmbed: true,
    cache: false
  }
  return gulp.src(conf.src.css.application.entry)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOpt).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest(conf.src.css.cwd));
});

//
// dev - watch - css app files
//
gulp.task('watch-css-app', ['dev-css-app'], function() {
  var pattern = path.resolve(conf.src.css.cwd + '/**/*.scss')
  var watcher = gulp.watch(pattern, ['dev-css']);
  return watcher.on('change', function(event) {
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
gulp.task('dev', function(cb) {

  function done() {
    gutil.log('dev mode started ');
    cb();
  }
  var devTasks = ['dev-js-lib', 'watch-js-app', 'watch-css-app'];
  runSequence(devTasks, function(err) {
    if (argv.serve) {
      runSequence('serve', done);
    } else {
      done();
    }
  });

});

//
// dist - js files
//
gulp.task('dist-js', function() {

  var entries = [
    conf.src.js.application.entry,
    conf.src.js.lib.entry
  ]
  var tasks = _.map(entries, function(entry) {
    return bundleJS({
      entry: entry,
      dest: conf.dist.js.cwd,
      watch: false,
      debug: false,
      bundle: rename(entry, { suffix: '-bundle-mini' })
    });
  });
  return es.merge.call(null, tasks)
});

//
// dist - css files
//
gulp.task('dist-css', ['dev-css-app'], function() {
  var sassOpt = {
    sourceMapEmbed: false,
    cache: false
  }

  var files = [
    conf.src.css.application.entry
  ]

  files = _.map(files, function(file) {
    return rename(file, { extname: '.css' })
  });
  return gulp.src(files)
    .pipe(cssnano({ sourcemap: false, zIndex: false }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(conf.dist.css.cwd));

});

//
// dist - entry
//
gulp.task('dist', function(cb) {
  runSequence(
    'dist-js',
    'dist-css',
    function() {
      cb();
      gutil.log('finish dist');
    });
});

//
// dist - entry
//
gulp.task('dist-serve', function(cb) {
  runSequence(
    'dist-js',
    'dist-css',
    function() {
      cb();
      gutil.log('finish dist');
    });
});
