var path = require('path');
var conf = {
  src: {
    js: {
      cwd: '../src/js',

      entry: {
        application: '../src/js/Application.js',
        lib: '../src/js/lib/lib.js'
      }
    },

    css: {
      cwd: '../src/css',
      entry: {
        application: '../src/css/application.scss'
      }
    }
  },
  dist: {
    cwd: '../dist',
    js: {
      cwd: '../dist/js'
    },
    css: {
      cwd: '../dist/css'
    }
  }

}

function map2BundleName(filepath) {
  var name = path.basename(filepath, path.extname(filepath)) + '-bundle' + path.extname(filepath);
  filepath = path.resolve(filepath, '../', name);
  return filepath;
}

function getBundleName(filepath) {
  var name = path.basename(filepath, path.extname(filepath)) + '-bundle' + path.extname(filepath);
  return name;
}
exports.conf = conf;
exports.map2BundleName = map2BundleName
exports.getBundleName = getBundleName;
