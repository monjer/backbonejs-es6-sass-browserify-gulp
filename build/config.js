var conf = {
  src: {
    js: {
      cwd: '../src/js',
      application: {
        entry: '../src/js/Application.js',
      },
      lib: {
        entry: '../src/js/lib/lib.js'
      }
    },
    css: {
      cwd: '../src/css',
      application: {
        entry: '../src/css/application.scss'
      }
    }
  },
  dist: {
    cwd: '../dist',
    js: {
      cwd: '../dist/js',
      app: 'app-mini.js',
      lib: 'lib-mini.js'
    },
    css: {
      cwd: '../dist/css',
      app: 'app-mini.css'
    }
  }

}

module.exports = conf;
