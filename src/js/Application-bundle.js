(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ApplicationTpl = require('./ApplicationTpl.html');

var _ApplicationTpl2 = _interopRequireDefault(_ApplicationTpl);

var _MNAppHeaderView = require('./view/layout/MNAppHeaderView.js');

var _MNAppHeaderView2 = _interopRequireDefault(_MNAppHeaderView);

var _MNAppMainView = require('./view/layout/MNAppMainView.js');

var _MNAppMainView2 = _interopRequireDefault(_MNAppMainView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Application = function (_Backbone$View) {
  _inherits(Application, _Backbone$View);

  function Application() {
    _classCallCheck(this, Application);

    return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).apply(this, arguments));
  }

  _createClass(Application, [{
    key: 'initialize',
    value: function initialize(props) {
      _get(Application.prototype.__proto__ || Object.getPrototypeOf(Application.prototype), 'initialize', this).call(this, props);
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      this.$el.append(_ApplicationTpl2.default);
      this.headerView = new _MNAppHeaderView2.default();
      this.$('.app-inner').append(this.headerView.el);
      this.mainView = new _MNAppMainView2.default();
      this.$('.app-inner').append(this.mainView.el);
      return this;
    }
  }], [{
    key: 'boot',
    value: function boot() {
      var application = new Application();
      $('body').append(application.el);
    }
  }]);

  return Application;
}(Backbone.View);

exports.default = Application;


Application.boot();

},{"./ApplicationTpl.html":2,"./view/layout/MNAppHeaderView.js":3,"./view/layout/MNAppMainView.js":7}],2:[function(require,module,exports){
module.exports = '<div class="app-inner">\</div>';
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MNAppHeaderViewTpl = require('./MNAppHeaderViewTpl.html');

var _MNAppHeaderViewTpl2 = _interopRequireDefault(_MNAppHeaderViewTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MNAppHeaderView = function (_Backbone$View) {
  _inherits(MNAppHeaderView, _Backbone$View);

  function MNAppHeaderView() {
    _classCallCheck(this, MNAppHeaderView);

    return _possibleConstructorReturn(this, (MNAppHeaderView.__proto__ || Object.getPrototypeOf(MNAppHeaderView)).apply(this, arguments));
  }

  _createClass(MNAppHeaderView, [{
    key: 'el',
    value: function el() {
      return '<div class="app-header"></div>';
    }
  }, {
    key: 'initialize',
    value: function initialize(props) {
      _get(MNAppHeaderView.prototype.__proto__ || Object.getPrototypeOf(MNAppHeaderView.prototype), 'initialize', this).call(this, props);
      var data = {
        title: 'Backbone - Application'
      };
      this.render(data);
    }
  }, {
    key: 'render',
    value: function render(data) {
      var html = _.template(_MNAppHeaderViewTpl2.default)(data);
      this.$el.append(html);
    }
  }]);

  return MNAppHeaderView;
}(Backbone.View);

exports.default = MNAppHeaderView;

},{"./MNAppHeaderViewTpl.html":4}],4:[function(require,module,exports){
module.exports = '<div class="app-header-inner flex-align between">\  <div>\    <span class="app-title"><%=title%></span>\  </div>\  <div>\    <span class="btn palin-text-btn">Settings</span>\    <span class="btn palin-text-btn logout-btn">Logout</span>\  </div>\</div>';
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MNAppLeftNavPanelViewTpl = require('./MNAppLeftNavPanelViewTpl.html');

var _MNAppLeftNavPanelViewTpl2 = _interopRequireDefault(_MNAppLeftNavPanelViewTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MNAppLeftNavPanelView = function (_Backbone$View) {
  _inherits(MNAppLeftNavPanelView, _Backbone$View);

  function MNAppLeftNavPanelView() {
    _classCallCheck(this, MNAppLeftNavPanelView);

    return _possibleConstructorReturn(this, (MNAppLeftNavPanelView.__proto__ || Object.getPrototypeOf(MNAppLeftNavPanelView)).apply(this, arguments));
  }

  _createClass(MNAppLeftNavPanelView, [{
    key: 'el',
    value: function el() {
      return '<div class="app-left-nav"></div>';
    }
  }, {
    key: 'initialize',
    value: function initialize(props) {
      _get(MNAppLeftNavPanelView.prototype.__proto__ || Object.getPrototypeOf(MNAppLeftNavPanelView.prototype), 'initialize', this).call(this, props);
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      this.$el.append(_MNAppLeftNavPanelViewTpl2.default);
    }
  }]);

  return MNAppLeftNavPanelView;
}(Backbone.View);

exports.default = MNAppLeftNavPanelView;

},{"./MNAppLeftNavPanelViewTpl.html":6}],6:[function(require,module,exports){
module.exports = '<div class="app-left-nav-inner">\  <ul class="app-nav">\    <li>\      <a href="">File</a>\    </li>\    <li>\      <a href="">Photos</a>\    </li>\    <li>\      <a href="">Trash</a>\    </li>\  </ul>\</div>';
},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MNAppMainViewTpl = require('./MNAppMainViewTpl.html');

var _MNAppMainViewTpl2 = _interopRequireDefault(_MNAppMainViewTpl);

var _MNAppLeftNavPanelView = require('./MNAppLeftNavPanelView.js');

var _MNAppLeftNavPanelView2 = _interopRequireDefault(_MNAppLeftNavPanelView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MNAppMainView = function (_Backbone$View) {
  _inherits(MNAppMainView, _Backbone$View);

  function MNAppMainView() {
    _classCallCheck(this, MNAppMainView);

    return _possibleConstructorReturn(this, (MNAppMainView.__proto__ || Object.getPrototypeOf(MNAppMainView)).apply(this, arguments));
  }

  _createClass(MNAppMainView, [{
    key: 'el',
    value: function el() {
      return '<div class="app-main"></div>';
    }
  }, {
    key: 'initialize',
    value: function initialize(props) {
      _get(MNAppMainView.prototype.__proto__ || Object.getPrototypeOf(MNAppMainView.prototype), 'initialize', this).call(this, props);
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      this.$el.append(_MNAppMainViewTpl2.default);
      this.navView = new _MNAppLeftNavPanelView2.default();
      this.$('.app-left-nav-wrap').append(this.navView.el);
    }
  }]);

  return MNAppMainView;
}(Backbone.View);

exports.default = MNAppMainView;

},{"./MNAppLeftNavPanelView.js":5,"./MNAppMainViewTpl.html":8}],8:[function(require,module,exports){
module.exports = '<div class="app-main-inner flex-align between stretch">\  <div class="app-left-nav-wrap"></div>\  <div class="flex-col-auto app-main-content ">\    <h2 class="app-slogan">This is backbone application</h2>\  </div>\</div>';
},{}]},{},[1])

//# sourceMappingURL=Application-bundle.js.map
