(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-motion"), require("get-prefix"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-motion", "get-prefix"], factory);
	else if(typeof exports === 'object')
		exports["Transition"] = factory(require("react"), require("react-motion"), require("get-prefix"));
	else
		root["Transition"] = factory(root["React"], root["ReactMotion"], root["getPrefix"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Transition = __webpack_require__(1);

	var _Transition2 = _interopRequireDefault(_Transition);

	exports['default'] = _Transition2['default'];
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactMotion = __webpack_require__(3);

	var _isElement = __webpack_require__(4);

	var _isElement2 = _interopRequireDefault(_isElement);

	var _fromRMStyles = __webpack_require__(5);

	var _fromRMStyles2 = _interopRequireDefault(_fromRMStyles);

	var _toRMStyles = __webpack_require__(6);

	var _toRMStyles2 = _interopRequireDefault(_toRMStyles);

	var _configToStyle = __webpack_require__(7);

	var _configToStyle2 = _interopRequireDefault(_configToStyle);

	var _specialAssign = __webpack_require__(9);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	var checkedProps = {
	  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool, _isElement2['default']]),
	  runOnMount: _react.PropTypes.bool,
	  appear: _react.PropTypes.object,
	  enter: _react.PropTypes.object,
	  leave: _react.PropTypes.object,
	  onEnter: _react.PropTypes.func,
	  onLeave: _react.PropTypes.func
	};

	var Transition = (function (_Component) {
	  _inherits(Transition, _Component);

	  function Transition() {
	    var _this = this;

	    _classCallCheck(this, Transition);

	    _get(Object.getPrototypeOf(Transition.prototype), 'constructor', this).apply(this, arguments);

	    this._getDefaultStyles = function () {
	      return _react.Children.map(_this.props.children, function (child) {
	        return child && {
	          key: child.key,
	          data: child,
	          style: _extends({}, _this._getMountStyles())
	        };
	      });
	    };

	    this._getStyles = function () {
	      var _props = _this.props;
	      var component = _props.component;
	      var children = _props.children;
	      var enter = _props.enter;

	      return _react.Children.map(children, function (child) {
	        if (!child) return;

	        var key = child.key;

	        if (!key) {
	          console.error('You must provide a key for every child of Transition.');
	        }

	        return {
	          key: key,
	          data: child,
	          style: _extends({}, (0, _toRMStyles2['default'])(enter))
	        };
	      });
	    };

	    this._willEnter = function (_ref) {
	      var key = _ref.key;
	      var style = _ref.style;
	      var _props2 = _this.props;
	      var appear = _props2.appear;
	      var leave = _props2.leave;
	      var onEnter = _props2.onEnter;

	      var childStyles = typeof appear === 'object' ? appear : leave;

	      // fire enter callback
	      onEnter(childStyles);

	      return childStyles;
	    };

	    this._willLeave = function (_ref2) {
	      var key = _ref2.key;
	      var style = _ref2.style;
	      var _props3 = _this.props;
	      var leave = _props3.leave;
	      var onLeave = _props3.onLeave;

	      // fire leaving callback
	      onLeave(style);

	      return (0, _toRMStyles2['default'])(leave);
	    };
	  }

	  _createClass(Transition, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props4 = this.props;
	      var component = _props4.component;
	      var runOnMount = _props4.runOnMount;
	      var onEnter = _props4.onEnter;
	      var children = _props4.children;

	      if (runOnMount) {
	        onEnter(this._getMountStyles());
	      }
	    }
	  }, {
	    key: '_getMountStyles',
	    value: function _getMountStyles() {
	      var _props5 = this.props;
	      var runOnMount = _props5.runOnMount;
	      var appear = _props5.appear;
	      var enter = _props5.enter;
	      var leave = _props5.leave;
	      var children = _props5.children;

	      return (0, _fromRMStyles2['default'])(runOnMount ? appear || leave : enter);
	    }
	  }, {
	    key: '_childrenToRender',
	    value: function _childrenToRender(currValues) {
	      return currValues.map(function (_ref3) {
	        var key = _ref3.key;
	        var data = _ref3.data;
	        var style = _ref3.style;

	        var child = data;
	        var childStyle = child.props.style;

	        // convert styles to a friendly structure
	        style = (0, _configToStyle2['default'])(style);

	        // merge in any styles set by the user
	        // Transition styles will take precedence
	        if (childStyle) {
	          style = _extends({}, childStyle, style);
	        }

	        return (0, _react.cloneElement)(child, { style: style });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var component = this.props.component;

	      var props = (0, _specialAssign2['default'])({}, this.props, checkedProps);

	      return _react2['default'].createElement(
	        _reactMotion.TransitionMotion,
	        {
	          defaultStyles: this._getDefaultStyles(),
	          styles: this._getStyles(),
	          willEnter: this._willEnter,
	          willLeave: this._willLeave
	        },
	        function (currValues) {
	          var children = _this2._childrenToRender(currValues);
	          var child = null;

	          if (!component || component === 'false') {
	            if (_react.Children.count(children) === 1) {
	              child = _react.Children.only(children[0]);
	            } else {
	              child = (0, _react.createElement)('span', { style: { display: 'none' } });
	            }
	          } else {
	            child = (0, _react.createElement)(component, props, children);
	          }

	          return child;
	        }
	      );
	    }
	  }], [{
	    key: 'propTypes',
	    value: checkedProps,
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'div',
	      runOnMount: true,
	      enter: { opacity: 1 },
	      leave: { opacity: 0 },
	      onEnter: function onEnter() {
	        return null;
	      },
	      onLeave: function onLeave() {
	        return null;
	      }
	    },
	    enumerable: true
	  }]);

	  return Transition;
	})(_react.Component);

	exports['default'] = Transition;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isElement;

	var _react = __webpack_require__(2);

	function isElement(props, propName, componentName) {
	  if (typeof props[propName] !== 'function') {
	    if ((0, _react.isValidElement)(props[propName])) {
	      return new Error(ComponentName + ' is not an actual Element');
	    }
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = fromRMStyles;

	function fromRMStyles(config) {
	  var values = {};

	  Object.keys(config).forEach(function (key) {
	    var value = config[key];
	    values[key] = !isNaN(value) ? value : value.val;
	  });

	  return values;
	}

	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = toRMStyles;

	var _reactMotion = __webpack_require__(3);

	function toRMStyles(styles) {
	  var rmStyles = {};

	  Object.keys(styles).forEach(function (key) {
	    var style = styles[key];
	    var isObject = typeof style === 'object';

	    // check if user passed their own config
	    // if not default to a regular spring
	    rmStyles[key] = isObject ? _extends({}, style) : (0, _reactMotion.spring)(style);
	  });

	  return rmStyles;
	}

	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var TRANSFORM = __webpack_require__(8)('transform');
	var UNIT_TRANSFORMS = ['translateX', 'translateY', 'translateZ', 'transformPerspective'];
	var DEGREE_TRANFORMS = ['rotate', 'rotateX', 'rotateY', 'rotateZ', 'skewX', 'skewY', 'scaleZ'];
	var UNITLESS_TRANSFORMS = ['scale', 'scaleX', 'scaleY'];
	var TRANSFORMS = UNIT_TRANSFORMS.concat(DEGREE_TRANFORMS, UNITLESS_TRANSFORMS);

	exports['default'] = function (configs) {
	  var styles = {};

	  Object.keys(configs).map(function (key) {
	    var isTransform = TRANSFORMS.indexOf(key) > -1;
	    var value = Math.round(+configs[key] * 10000) / 10000;

	    if (isTransform) {
	      var transformProps = styles[TRANSFORM] || '';

	      if (UNIT_TRANSFORMS.indexOf(key) > -1) {
	        transformProps += key + '(' + value + 'px) ';
	      } else if (DEGREE_TRANFORMS.indexOf(key) > -1) {
	        transformProps += key + '(' + value + 'deg) ';
	      } else if (UNITLESS_TRANSFORMS.indexOf(key) > -1) {
	        transformProps += key + '(' + value + ') ';
	      }
	      styles[TRANSFORM] = transformProps;
	    } else {
	      styles[key] = value;
	    }
	  });

	  return styles;
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = specialAssign;

	function specialAssign(a, b, reserved) {
	  for (var x in b) {
	    if (!b.hasOwnProperty(x) || reserved[x]) continue;
	    a[x] = b[x];
	  }
	  return a;
	}

	module.exports = exports["default"];

/***/ }
/******/ ])
});
;