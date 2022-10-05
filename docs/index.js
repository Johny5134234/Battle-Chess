var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module) => () => {
  if (!module) {
    module = {exports: {}};
    callback(module.exports, module);
  }
  return module.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, {get: all2[name], enumerable: true});
};
var __exportStar = (target, module, desc) => {
  if (module && typeof module === "object" || typeof module === "function") {
    for (let key of __getOwnPropNames(module))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module) => {
  return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? {get: () => module.default, enumerable: true} : {value: module, enumerable: true})), module);
};

// docs/snowpack/pkg/react-jss.js
var require_react_jss = __commonJS((exports, module) => {
  __markAsModule(exports);
  __export(exports, {
    createUseStyles: () => createUseStyles12
  });
  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key2 in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key2)) {
            target[key2] = source2[key2];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _objectWithoutPropertiesLoose(source2, excluded) {
    if (source2 == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source2);
    var key2, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key2 = sourceKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      target[key2] = source2[key2];
    }
    return target;
  }
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b = typeof Symbol === "function" && Symbol.for;
  var c = b ? Symbol.for("react.element") : 60103;
  var d = b ? Symbol.for("react.portal") : 60106;
  var e = b ? Symbol.for("react.fragment") : 60107;
  var f = b ? Symbol.for("react.strict_mode") : 60108;
  var g = b ? Symbol.for("react.profiler") : 60114;
  var h = b ? Symbol.for("react.provider") : 60109;
  var k = b ? Symbol.for("react.context") : 60110;
  var l2 = b ? Symbol.for("react.async_mode") : 60111;
  var m = b ? Symbol.for("react.concurrent_mode") : 60111;
  var n2 = b ? Symbol.for("react.forward_ref") : 60112;
  var p3 = b ? Symbol.for("react.suspense") : 60113;
  var q2 = b ? Symbol.for("react.suspense_list") : 60120;
  var r2 = b ? Symbol.for("react.memo") : 60115;
  var t2 = b ? Symbol.for("react.lazy") : 60116;
  var v3 = b ? Symbol.for("react.block") : 60121;
  var w2 = b ? Symbol.for("react.fundamental") : 60117;
  var x2 = b ? Symbol.for("react.responder") : 60118;
  var y2 = b ? Symbol.for("react.scope") : 60119;
  function z3(a) {
    if (typeof a === "object" && a !== null) {
      var u2 = a.$$typeof;
      switch (u2) {
        case c:
          switch (a = a.type, a) {
            case l2:
            case m:
            case e:
            case g:
            case f:
            case p3:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n2:
                case t2:
                case r2:
                case h:
                  return a;
                default:
                  return u2;
              }
          }
        case d:
          return u2;
      }
    }
  }
  function A3(a) {
    return z3(a) === m;
  }
  var AsyncMode = l2;
  var ConcurrentMode = m;
  var ContextConsumer = k;
  var ContextProvider = h;
  var Element = c;
  var ForwardRef = n2;
  var Fragment2 = e;
  var Lazy = t2;
  var Memo = r2;
  var Portal = d;
  var Profiler2 = g;
  var StrictMode2 = f;
  var Suspense2 = p3;
  var isAsyncMode = function(a) {
    return A3(a) || z3(a) === l2;
  };
  var isConcurrentMode = A3;
  var isContextConsumer = function(a) {
    return z3(a) === k;
  };
  var isContextProvider = function(a) {
    return z3(a) === h;
  };
  var isElement = function(a) {
    return typeof a === "object" && a !== null && a.$$typeof === c;
  };
  var isForwardRef = function(a) {
    return z3(a) === n2;
  };
  var isFragment = function(a) {
    return z3(a) === e;
  };
  var isLazy = function(a) {
    return z3(a) === t2;
  };
  var isMemo = function(a) {
    return z3(a) === r2;
  };
  var isPortal = function(a) {
    return z3(a) === d;
  };
  var isProfiler = function(a) {
    return z3(a) === g;
  };
  var isStrictMode = function(a) {
    return z3(a) === f;
  };
  var isSuspense = function(a) {
    return z3(a) === p3;
  };
  var isValidElementType = function(a) {
    return typeof a === "string" || typeof a === "function" || a === e || a === m || a === g || a === f || a === p3 || a === q2 || typeof a === "object" && a !== null && (a.$$typeof === t2 || a.$$typeof === r2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n2 || a.$$typeof === w2 || a.$$typeof === x2 || a.$$typeof === y2 || a.$$typeof === v3);
  };
  var typeOf = z3;
  var reactIs_production_min = {
    AsyncMode,
    ConcurrentMode,
    ContextConsumer,
    ContextProvider,
    Element,
    ForwardRef,
    Fragment: Fragment2,
    Lazy,
    Memo,
    Portal,
    Profiler: Profiler2,
    StrictMode: StrictMode2,
    Suspense: Suspense2,
    isAsyncMode,
    isConcurrentMode,
    isContextConsumer,
    isContextProvider,
    isElement,
    isForwardRef,
    isFragment,
    isLazy,
    isMemo,
    isPortal,
    isProfiler,
    isStrictMode,
    isSuspense,
    isValidElementType,
    typeOf
  };
  var reactIs = createCommonjsModule(function(module2) {
    {
      module2.exports = reactIs_production_min;
    }
  });
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  };
  var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
  function getStatics(component) {
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
  }
  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== "string") {
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }
      var keys = getOwnPropertyNames(sourceComponent);
      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }
      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);
      for (var i = 0; i < keys.length; ++i) {
        var key2 = keys[i];
        if (!KNOWN_STATICS[key2] && !(blacklist && blacklist[key2]) && !(sourceStatics && sourceStatics[key2]) && !(targetStatics && targetStatics[key2])) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key2);
          try {
            defineProperty(targetComponent, key2, descriptor);
          } catch (e2) {
          }
        }
      }
    }
    return targetComponent;
  }
  var hoistNonReactStatics_cjs = hoistNonReactStatics;
  var getDisplayName_1 = createCommonjsModule(function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = getDisplayName;
    function getDisplayName(Component2) {
      return Component2.displayName || Component2.name || (typeof Component2 === "string" && Component2.length > 0 ? Component2 : "Unknown");
    }
  });
  function _defineProperty(obj, key2, value2) {
    if (key2 in obj) {
      Object.defineProperty(obj, key2, {
        value: value2,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key2] = value2;
    }
    return obj;
  }
  function _extends$1() {
    _extends$1 = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source2 = arguments[i];
        for (var key2 in source2) {
          if (Object.prototype.hasOwnProperty.call(source2, key2)) {
            target[key2] = source2[key2];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function createThemeProvider(context) {
    var ThemeProvider = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(ThemeProvider2, _React$Component);
      function ThemeProvider2() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cachedTheme", void 0);
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastOuterTheme", void 0);
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastTheme", void 0);
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderProvider", function(outerTheme) {
          var children = _this.props.children;
          return react.createElement(context.Provider, {
            value: _this.getTheme(outerTheme)
          }, children);
        });
        return _this;
      }
      var _proto = ThemeProvider2.prototype;
      _proto.getTheme = function getTheme(outerTheme) {
        if (this.props.theme !== this.lastTheme || outerTheme !== this.lastOuterTheme || !this.cachedTheme) {
          this.lastOuterTheme = outerTheme;
          this.lastTheme = this.props.theme;
          if (typeof this.lastTheme === "function") {
            var theme = this.props.theme;
            this.cachedTheme = theme(outerTheme);
          } else {
            var _theme = this.props.theme;
            this.cachedTheme = outerTheme ? _extends$1({}, outerTheme, _theme) : _theme;
          }
        }
        return this.cachedTheme;
      };
      _proto.render = function render2() {
        var children = this.props.children;
        if (!children) {
          return null;
        }
        return react.createElement(context.Consumer, null, this.renderProvider);
      };
      return ThemeProvider2;
    }(react.Component);
    return ThemeProvider;
  }
  function createWithTheme(context) {
    return function hoc(Component2) {
      var withTheme = react.forwardRef(function(props, ref) {
        return react.createElement(context.Consumer, null, function(theme) {
          return react.createElement(Component2, _extends$1({
            theme,
            ref
          }, props));
        });
      });
      hoistNonReactStatics_cjs(withTheme, Component2);
      return withTheme;
    };
  }
  function createUseTheme(context) {
    var useTheme = function useTheme2() {
      var theme = react.useContext(context);
      return theme;
    };
    return useTheme;
  }
  function createTheming(context) {
    return {
      context,
      withTheme: createWithTheme(context),
      useTheme: createUseTheme(context),
      ThemeProvider: createThemeProvider(context)
    };
  }
  var ThemeContext = react.createContext();
  var _createTheming = createTheming(ThemeContext);
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object" && document.nodeType === 9;
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _setPrototypeOf(o, p4) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p5) {
      o2.__proto__ = p5;
      return o2;
    };
    return _setPrototypeOf(o, p4);
  }
  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function _assertThisInitialized$1(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style2) {
    if (style2 == null || typeof style2 !== "object")
      return style2;
    if (Array.isArray(style2))
      return style2.map(cloneStyle);
    if (style2.constructor !== plainObjectConstrurctor)
      return style2;
    var newStyle = {};
    for (var name in style2) {
      newStyle[name] = cloneStyle(style2[name]);
    }
    return newStyle;
  }
  function createRule(name, decl, options) {
    if (name === void 0) {
      name = "unnamed";
    }
    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule)
      return rule;
    if (name[0] === "@")
      ;
    return null;
  }
  var join = function join2(value2, by) {
    var result2 = "";
    for (var i = 0; i < value2.length; i++) {
      if (value2[i] === "!important")
        break;
      if (result2)
        result2 += by;
      result2 += value2[i];
    }
    return result2;
  };
  var toCssValue = function toCssValue2(value2) {
    if (!Array.isArray(value2))
      return value2;
    var cssValue = "";
    if (Array.isArray(value2[0])) {
      for (var i = 0; i < value2.length; i++) {
        if (value2[i] === "!important")
          break;
        if (cssValue)
          cssValue += ", ";
        cssValue += join(value2[i], " ");
      }
    } else
      cssValue = join(value2, ", ");
    if (value2[value2.length - 1] === "!important") {
      cssValue += " !important";
    }
    return cssValue;
  };
  function getWhitespaceSymbols(options) {
    if (options && options.format === false) {
      return {
        linebreak: "",
        space: ""
      };
    }
    return {
      linebreak: "\n",
      space: " "
    };
  }
  function indentStr(str, indent) {
    var result2 = "";
    for (var index2 = 0; index2 < indent; index2++) {
      result2 += "  ";
    }
    return result2 + str;
  }
  function toCss(selector, style2, options) {
    if (options === void 0) {
      options = {};
    }
    var result2 = "";
    if (!style2)
      return result2;
    var _options = options, _options$indent = _options.indent, indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style2.fallbacks;
    if (options.format === false) {
      indent = -Infinity;
    }
    var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak, space = _getWhitespaceSymbols.space;
    if (selector)
      indent++;
    if (fallbacks) {
      if (Array.isArray(fallbacks)) {
        for (var index2 = 0; index2 < fallbacks.length; index2++) {
          var fallback = fallbacks[index2];
          for (var prop in fallback) {
            var value2 = fallback[prop];
            if (value2 != null) {
              if (result2)
                result2 += linebreak;
              result2 += indentStr(prop + ":" + space + toCssValue(value2) + ";", indent);
            }
          }
        }
      } else {
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            if (result2)
              result2 += linebreak;
            result2 += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
          }
        }
      }
    }
    for (var _prop2 in style2) {
      var _value2 = style2[_prop2];
      if (_value2 != null && _prop2 !== "fallbacks") {
        if (result2)
          result2 += linebreak;
        result2 += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
      }
    }
    if (!result2 && !options.allowEmpty)
      return result2;
    if (!selector)
      return result2;
    indent--;
    if (result2)
      result2 = "" + linebreak + result2 + linebreak;
    return indentStr("" + selector + space + "{" + result2, indent) + indentStr("}", indent);
  }
  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== "undefined" && CSS.escape;
  var escape2 = function(str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, "\\$1");
  };
  var BaseStyleRule = /* @__PURE__ */ function() {
    function BaseStyleRule2(key2, style2, options) {
      this.type = "style";
      this.isProcessed = false;
      var sheet = options.sheet, Renderer = options.Renderer;
      this.key = key2;
      this.options = options;
      this.style = style2;
      if (sheet)
        this.renderer = sheet.renderer;
      else if (Renderer)
        this.renderer = new Renderer();
    }
    var _proto = BaseStyleRule2.prototype;
    _proto.prop = function prop(name, value2, options) {
      if (value2 === void 0)
        return this.style[name];
      var force = options ? options.force : false;
      if (!force && this.style[name] === value2)
        return this;
      var newValue = value2;
      if (!options || options.process !== false) {
        newValue = this.options.jss.plugins.onChangeValue(value2, name, this);
      }
      var isEmpty = newValue == null || newValue === false;
      var isDefined = name in this.style;
      if (isEmpty && !isDefined && !force)
        return this;
      var remove = isEmpty && isDefined;
      if (remove)
        delete this.style[name];
      else
        this.style[name] = newValue;
      if (this.renderable && this.renderer) {
        if (remove)
          this.renderer.removeProperty(this.renderable, name);
        else
          this.renderer.setProperty(this.renderable, name, newValue);
        return this;
      }
      var sheet = this.options.sheet;
      if (sheet && sheet.attached)
        ;
      return this;
    };
    return BaseStyleRule2;
  }();
  var StyleRule = /* @__PURE__ */ function(_BaseStyleRule) {
    _inheritsLoose$1(StyleRule2, _BaseStyleRule);
    function StyleRule2(key2, style2, options) {
      var _this;
      _this = _BaseStyleRule.call(this, key2, style2, options) || this;
      var selector = options.selector, scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
      if (selector) {
        _this.selectorText = selector;
      } else if (scoped !== false) {
        _this.id = generateId(_assertThisInitialized$1(_assertThisInitialized$1(_this)), sheet);
        _this.selectorText = "." + escape2(_this.id);
      }
      return _this;
    }
    var _proto2 = StyleRule2.prototype;
    _proto2.applyTo = function applyTo(renderable) {
      var renderer = this.renderer;
      if (renderer) {
        var json = this.toJSON();
        for (var prop in json) {
          renderer.setProperty(renderable, prop, json[prop]);
        }
      }
      return this;
    };
    _proto2.toJSON = function toJSON2() {
      var json = {};
      for (var prop in this.style) {
        var value2 = this.style[prop];
        if (typeof value2 !== "object")
          json[prop] = value2;
        else if (Array.isArray(value2))
          json[prop] = toCssValue(value2);
      }
      return json;
    };
    _proto2.toString = function toString3(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.selectorText, this.style, opts);
    };
    _createClass(StyleRule2, [{
      key: "selector",
      set: function set(selector) {
        if (selector === this.selectorText)
          return;
        this.selectorText = selector;
        var renderer = this.renderer, renderable = this.renderable;
        if (!renderable || !renderer)
          return;
        var hasChanged = renderer.setSelector(renderable, selector);
        if (!hasChanged) {
          renderer.replaceRule(renderable, this);
        }
      },
      get: function get() {
        return this.selectorText;
      }
    }]);
    return StyleRule2;
  }(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(key2, style2, options) {
      if (key2[0] === "@" || options.parent && options.parent.type === "keyframes") {
        return null;
      }
      return new StyleRule(key2, style2, options);
    }
  };
  var defaultToStringOptions = {
    indent: 1,
    children: true
  };
  var atRegExp = /@([\w-]+)/;
  var ConditionalRule = /* @__PURE__ */ function() {
    function ConditionalRule2(key2, styles, options) {
      this.type = "conditional";
      this.isProcessed = false;
      this.key = key2;
      var atMatch = key2.match(atRegExp);
      this.at = atMatch ? atMatch[1] : "unknown";
      this.query = options.name || "@" + this.at;
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));
      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }
      this.rules.process();
    }
    var _proto = ConditionalRule2.prototype;
    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    };
    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    };
    _proto.addRule = function addRule(name, style2, options) {
      var rule = this.rules.add(name, style2, options);
      if (!rule)
        return null;
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    };
    _proto.replaceRule = function replaceRule(name, style2, options) {
      var newRule = this.rules.replace(name, style2, options);
      if (newRule)
        this.options.jss.plugins.onProcessRule(newRule);
      return newRule;
    };
    _proto.toString = function toString3(options) {
      if (options === void 0) {
        options = defaultToStringOptions;
      }
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      if (options.indent == null)
        options.indent = defaultToStringOptions.indent;
      if (options.children == null)
        options.children = defaultToStringOptions.children;
      if (options.children === false) {
        return this.query + " {}";
      }
      var children = this.rules.toString(options);
      return children ? this.query + " {" + linebreak + children + linebreak + "}" : "";
    };
    return ConditionalRule2;
  }();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key2, styles, options) {
      return keyRegExp.test(key2) ? new ConditionalRule(key2, styles, options) : null;
    }
  };
  var defaultToStringOptions$1 = {
    indent: 1,
    children: true
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  var KeyframesRule = /* @__PURE__ */ function() {
    function KeyframesRule2(key2, frames, options) {
      this.type = "keyframes";
      this.at = "@keyframes";
      this.isProcessed = false;
      var nameMatch = key2.match(nameRegExp);
      if (nameMatch && nameMatch[1]) {
        this.name = nameMatch[1];
      } else {
        this.name = "noname";
      }
      this.key = this.type + "-" + this.name;
      this.options = options;
      var scoped = options.scoped, sheet = options.sheet, generateId = options.generateId;
      this.id = scoped === false ? this.name : escape2(generateId(this, sheet));
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));
      for (var name in frames) {
        this.rules.add(name, frames[name], _extends({}, options, {
          parent: this
        }));
      }
      this.rules.process();
    }
    var _proto = KeyframesRule2.prototype;
    _proto.toString = function toString3(options) {
      if (options === void 0) {
        options = defaultToStringOptions$1;
      }
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      if (options.indent == null)
        options.indent = defaultToStringOptions$1.indent;
      if (options.children == null)
        options.children = defaultToStringOptions$1.children;
      if (options.children === false) {
        return this.at + " " + this.id + " {}";
      }
      var children = this.rules.toString(options);
      if (children)
        children = "" + linebreak + children + linebreak;
      return this.at + " " + this.id + " {" + children + "}";
    };
    return KeyframesRule2;
  }();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp = /\$([\w-]+)/g;
  var findReferencedKeyframe = function findReferencedKeyframe2(val, keyframes) {
    if (typeof val === "string") {
      return val.replace(refRegExp, function(match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        return match;
      });
    }
    return val;
  };
  var replaceRef = function replaceRef2(style2, prop, keyframes) {
    var value2 = style2[prop];
    var refKeyframe = findReferencedKeyframe(value2, keyframes);
    if (refKeyframe !== value2) {
      style2[prop] = refKeyframe;
    }
  };
  var pluginKeyframesRule = {
    onCreateRule: function onCreateRule(key2, frames, options) {
      return typeof key2 === "string" && keyRegExp$1.test(key2) ? new KeyframesRule(key2, frames, options) : null;
    },
    onProcessStyle: function onProcessStyle(style2, rule, sheet) {
      if (rule.type !== "style" || !sheet)
        return style2;
      if ("animation-name" in style2)
        replaceRef(style2, "animation-name", sheet.keyframes);
      if ("animation" in style2)
        replaceRef(style2, "animation", sheet.keyframes);
      return style2;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;
      if (!sheet) {
        return val;
      }
      switch (prop) {
        case "animation":
          return findReferencedKeyframe(val, sheet.keyframes);
        case "animation-name":
          return findReferencedKeyframe(val, sheet.keyframes);
        default:
          return val;
      }
    }
  };
  var KeyframeRule = /* @__PURE__ */ function(_BaseStyleRule) {
    _inheritsLoose$1(KeyframeRule2, _BaseStyleRule);
    function KeyframeRule2() {
      return _BaseStyleRule.apply(this, arguments) || this;
    }
    var _proto = KeyframeRule2.prototype;
    _proto.toString = function toString3(options) {
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, {
        allowEmpty: true
      }) : options;
      return toCss(this.key, this.style, opts);
    };
    return KeyframeRule2;
  }(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key2, style2, options) {
      if (options.parent && options.parent.type === "keyframes") {
        return new KeyframeRule(key2, style2, options);
      }
      return null;
    }
  };
  var FontFaceRule = /* @__PURE__ */ function() {
    function FontFaceRule2(key2, style2, options) {
      this.type = "font-face";
      this.at = "@font-face";
      this.isProcessed = false;
      this.key = key2;
      this.style = style2;
      this.options = options;
    }
    var _proto = FontFaceRule2.prototype;
    _proto.toString = function toString3(options) {
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      if (Array.isArray(this.style)) {
        var str = "";
        for (var index2 = 0; index2 < this.style.length; index2++) {
          str += toCss(this.at, this.style[index2]);
          if (this.style[index2 + 1])
            str += linebreak;
        }
        return str;
      }
      return toCss(this.at, this.style, options);
    };
    return FontFaceRule2;
  }();
  var keyRegExp$2 = /@font-face/;
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key2, style2, options) {
      return keyRegExp$2.test(key2) ? new FontFaceRule(key2, style2, options) : null;
    }
  };
  var ViewportRule = /* @__PURE__ */ function() {
    function ViewportRule2(key2, style2, options) {
      this.type = "viewport";
      this.at = "@viewport";
      this.isProcessed = false;
      this.key = key2;
      this.style = style2;
      this.options = options;
    }
    var _proto = ViewportRule2.prototype;
    _proto.toString = function toString3(options) {
      return toCss(this.key, this.style, options);
    };
    return ViewportRule2;
  }();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key2, style2, options) {
      return key2 === "@viewport" || key2 === "@-ms-viewport" ? new ViewportRule(key2, style2, options) : null;
    }
  };
  var SimpleRule = /* @__PURE__ */ function() {
    function SimpleRule2(key2, value2, options) {
      this.type = "simple";
      this.isProcessed = false;
      this.key = key2;
      this.value = value2;
      this.options = options;
    }
    var _proto = SimpleRule2.prototype;
    _proto.toString = function toString3(options) {
      if (Array.isArray(this.value)) {
        var str = "";
        for (var index2 = 0; index2 < this.value.length; index2++) {
          str += this.key + " " + this.value[index2] + ";";
          if (this.value[index2 + 1])
            str += "\n";
        }
        return str;
      }
      return this.key + " " + this.value + ";";
    };
    return SimpleRule2;
  }();
  var keysMap = {
    "@charset": true,
    "@import": true,
    "@namespace": true
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key2, value2, options) {
      return key2 in keysMap ? new SimpleRule(key2, value2, options) : null;
    }
  };
  var plugins = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];
  var defaultUpdateOptions = {
    process: true
  };
  var forceUpdateOptions = {
    force: true,
    process: true
  };
  var RuleList = /* @__PURE__ */ function() {
    function RuleList2(options) {
      this.map = {};
      this.raw = {};
      this.index = [];
      this.counter = 0;
      this.options = options;
      this.classes = options.classes;
      this.keyframes = options.keyframes;
    }
    var _proto = RuleList2.prototype;
    _proto.add = function add(name, decl, ruleOptions) {
      var _this$options = this.options, parent = _this$options.parent, sheet = _this$options.sheet, jss = _this$options.jss, Renderer = _this$options.Renderer, generateId = _this$options.generateId, scoped = _this$options.scoped;
      var options = _extends({
        classes: this.classes,
        parent,
        sheet,
        jss,
        Renderer,
        generateId,
        scoped,
        name,
        keyframes: this.keyframes,
        selector: void 0
      }, ruleOptions);
      var key2 = name;
      if (name in this.raw) {
        key2 = name + "-d" + this.counter++;
      }
      this.raw[key2] = decl;
      if (key2 in this.classes) {
        options.selector = "." + escape2(this.classes[key2]);
      }
      var rule = createRule(key2, decl, options);
      if (!rule)
        return null;
      this.register(rule);
      var index2 = options.index === void 0 ? this.index.length : options.index;
      this.index.splice(index2, 0, rule);
      return rule;
    };
    _proto.replace = function replace(name, decl, ruleOptions) {
      var oldRule = this.get(name);
      var oldIndex = this.index.indexOf(oldRule);
      if (oldRule) {
        this.remove(oldRule);
      }
      var options = ruleOptions;
      if (oldIndex !== -1)
        options = _extends({}, ruleOptions, {
          index: oldIndex
        });
      return this.add(name, decl, options);
    };
    _proto.get = function get(nameOrSelector) {
      return this.map[nameOrSelector];
    };
    _proto.remove = function remove(rule) {
      this.unregister(rule);
      delete this.raw[rule.key];
      this.index.splice(this.index.indexOf(rule), 1);
    };
    _proto.indexOf = function indexOf(rule) {
      return this.index.indexOf(rule);
    };
    _proto.process = function process2() {
      var plugins2 = this.options.jss.plugins;
      this.index.slice(0).forEach(plugins2.onProcessRule, plugins2);
    };
    _proto.register = function register(rule) {
      this.map[rule.key] = rule;
      if (rule instanceof StyleRule) {
        this.map[rule.selector] = rule;
        if (rule.id)
          this.classes[rule.key] = rule.id;
      } else if (rule instanceof KeyframesRule && this.keyframes) {
        this.keyframes[rule.name] = rule.id;
      }
    };
    _proto.unregister = function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof StyleRule) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      } else if (rule instanceof KeyframesRule) {
        delete this.keyframes[rule.name];
      }
    };
    _proto.update = function update() {
      var name;
      var data2;
      var options;
      if (typeof (arguments.length <= 0 ? void 0 : arguments[0]) === "string") {
        name = arguments.length <= 0 ? void 0 : arguments[0];
        data2 = arguments.length <= 1 ? void 0 : arguments[1];
        options = arguments.length <= 2 ? void 0 : arguments[2];
      } else {
        data2 = arguments.length <= 0 ? void 0 : arguments[0];
        options = arguments.length <= 1 ? void 0 : arguments[1];
        name = null;
      }
      if (name) {
        this.updateOne(this.get(name), data2, options);
      } else {
        for (var index2 = 0; index2 < this.index.length; index2++) {
          this.updateOne(this.index[index2], data2, options);
        }
      }
    };
    _proto.updateOne = function updateOne(rule, data2, options) {
      if (options === void 0) {
        options = defaultUpdateOptions;
      }
      var _this$options2 = this.options, plugins2 = _this$options2.jss.plugins, sheet = _this$options2.sheet;
      if (rule.rules instanceof RuleList2) {
        rule.rules.update(data2, options);
        return;
      }
      var style2 = rule.style;
      plugins2.onUpdate(data2, rule, sheet, options);
      if (options.process && style2 && style2 !== rule.style) {
        plugins2.onProcessStyle(rule.style, rule, sheet);
        for (var prop in rule.style) {
          var nextValue = rule.style[prop];
          var prevValue = style2[prop];
          if (nextValue !== prevValue) {
            rule.prop(prop, nextValue, forceUpdateOptions);
          }
        }
        for (var _prop in style2) {
          var _nextValue = rule.style[_prop];
          var _prevValue = style2[_prop];
          if (_nextValue == null && _nextValue !== _prevValue) {
            rule.prop(_prop, null, forceUpdateOptions);
          }
        }
      }
    };
    _proto.toString = function toString3(options) {
      var str = "";
      var sheet = this.options.sheet;
      var link = sheet ? sheet.options.link : false;
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      for (var index2 = 0; index2 < this.index.length; index2++) {
        var rule = this.index[index2];
        var css2 = rule.toString(options);
        if (!css2 && !link)
          continue;
        if (str)
          str += linebreak;
        str += css2;
      }
      return str;
    };
    return RuleList2;
  }();
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(styles, options) {
      this.attached = false;
      this.deployed = false;
      this.classes = {};
      this.keyframes = {};
      this.options = _extends({}, options, {
        sheet: this,
        parent: this,
        classes: this.classes,
        keyframes: this.keyframes
      });
      if (options.Renderer) {
        this.renderer = new options.Renderer(this);
      }
      this.rules = new RuleList(this.options);
      for (var name in styles) {
        this.rules.add(name, styles[name]);
      }
      this.rules.process();
    }
    var _proto = StyleSheet2.prototype;
    _proto.attach = function attach() {
      if (this.attached)
        return this;
      if (this.renderer)
        this.renderer.attach();
      this.attached = true;
      if (!this.deployed)
        this.deploy();
      return this;
    };
    _proto.detach = function detach() {
      if (!this.attached)
        return this;
      if (this.renderer)
        this.renderer.detach();
      this.attached = false;
      return this;
    };
    _proto.addRule = function addRule(name, decl, options) {
      var queue2 = this.queue;
      if (this.attached && !queue2)
        this.queue = [];
      var rule = this.rules.add(name, decl, options);
      if (!rule)
        return null;
      this.options.jss.plugins.onProcessRule(rule);
      if (this.attached) {
        if (!this.deployed)
          return rule;
        if (queue2)
          queue2.push(rule);
        else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = void 0;
          }
        }
        return rule;
      }
      this.deployed = false;
      return rule;
    };
    _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
      var oldRule = this.rules.get(nameOrSelector);
      if (!oldRule)
        return this.addRule(nameOrSelector, decl, options);
      var newRule = this.rules.replace(nameOrSelector, decl, options);
      if (newRule) {
        this.options.jss.plugins.onProcessRule(newRule);
      }
      if (this.attached) {
        if (!this.deployed)
          return newRule;
        if (this.renderer) {
          if (!newRule) {
            this.renderer.deleteRule(oldRule);
          } else if (oldRule.renderable) {
            this.renderer.replaceRule(oldRule.renderable, newRule);
          }
        }
        return newRule;
      }
      this.deployed = false;
      return newRule;
    };
    _proto.insertRule = function insertRule(rule) {
      if (this.renderer) {
        this.renderer.insertRule(rule);
      }
    };
    _proto.addRules = function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        var rule = this.addRule(name, styles[name], options);
        if (rule)
          added.push(rule);
      }
      return added;
    };
    _proto.getRule = function getRule(nameOrSelector) {
      return this.rules.get(nameOrSelector);
    };
    _proto.deleteRule = function deleteRule(name) {
      var rule = typeof name === "object" ? name : this.rules.get(name);
      if (!rule || this.attached && !rule.renderable) {
        return false;
      }
      this.rules.remove(rule);
      if (this.attached && rule.renderable && this.renderer) {
        return this.renderer.deleteRule(rule.renderable);
      }
      return true;
    };
    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    };
    _proto.deploy = function deploy() {
      if (this.renderer)
        this.renderer.deploy();
      this.deployed = true;
      return this;
    };
    _proto.update = function update() {
      var _this$rules;
      (_this$rules = this.rules).update.apply(_this$rules, arguments);
      return this;
    };
    _proto.updateOne = function updateOne(rule, data2, options) {
      this.rules.updateOne(rule, data2, options);
      return this;
    };
    _proto.toString = function toString3(options) {
      return this.rules.toString(options);
    };
    return StyleSheet2;
  }();
  var PluginsRegistry = /* @__PURE__ */ function() {
    function PluginsRegistry2() {
      this.plugins = {
        internal: [],
        external: []
      };
      this.registry = {};
    }
    var _proto = PluginsRegistry2.prototype;
    _proto.onCreateRule = function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.registry.onCreateRule.length; i++) {
        var rule = this.registry.onCreateRule[i](name, decl, options);
        if (rule)
          return rule;
      }
      return null;
    };
    _proto.onProcessRule = function onProcessRule2(rule) {
      if (rule.isProcessed)
        return;
      var sheet = rule.options.sheet;
      for (var i = 0; i < this.registry.onProcessRule.length; i++) {
        this.registry.onProcessRule[i](rule, sheet);
      }
      if (rule.style)
        this.onProcessStyle(rule.style, rule, sheet);
      rule.isProcessed = true;
    };
    _proto.onProcessStyle = function onProcessStyle(style2, rule, sheet) {
      for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
        rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
      }
    };
    _proto.onProcessSheet = function onProcessSheet(sheet) {
      for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
        this.registry.onProcessSheet[i](sheet);
      }
    };
    _proto.onUpdate = function onUpdate(data2, rule, sheet, options) {
      for (var i = 0; i < this.registry.onUpdate.length; i++) {
        this.registry.onUpdate[i](data2, rule, sheet, options);
      }
    };
    _proto.onChangeValue = function onChangeValue(value2, prop, rule) {
      var processedValue = value2;
      for (var i = 0; i < this.registry.onChangeValue.length; i++) {
        processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    };
    _proto.use = function use2(newPlugin, options) {
      if (options === void 0) {
        options = {
          queue: "external"
        };
      }
      var plugins2 = this.plugins[options.queue];
      if (plugins2.indexOf(newPlugin) !== -1) {
        return;
      }
      plugins2.push(newPlugin);
      this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function(registry, plugin) {
        for (var name in plugin) {
          if (name in registry) {
            registry[name].push(plugin[name]);
          }
        }
        return registry;
      }, {
        onCreateRule: [],
        onProcessRule: [],
        onProcessStyle: [],
        onProcessSheet: [],
        onChangeValue: [],
        onUpdate: []
      });
    };
    return PluginsRegistry2;
  }();
  var SheetsRegistry = /* @__PURE__ */ function() {
    function SheetsRegistry2() {
      this.registry = [];
    }
    var _proto = SheetsRegistry2.prototype;
    _proto.add = function add(sheet) {
      var registry = this.registry;
      var index2 = sheet.options.index;
      if (registry.indexOf(sheet) !== -1)
        return;
      if (registry.length === 0 || index2 >= this.index) {
        registry.push(sheet);
        return;
      }
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index2) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    };
    _proto.reset = function reset() {
      this.registry = [];
    };
    _proto.remove = function remove(sheet) {
      var index2 = this.registry.indexOf(sheet);
      this.registry.splice(index2, 1);
    };
    _proto.toString = function toString3(_temp) {
      var _ref = _temp === void 0 ? {} : _temp, attached = _ref.attached, options = _objectWithoutPropertiesLoose(_ref, ["attached"]);
      var _getWhitespaceSymbols = getWhitespaceSymbols(options), linebreak = _getWhitespaceSymbols.linebreak;
      var css2 = "";
      for (var i = 0; i < this.registry.length; i++) {
        var sheet = this.registry[i];
        if (attached != null && sheet.attached !== attached) {
          continue;
        }
        if (css2)
          css2 += linebreak;
        css2 += sheet.toString(options);
      }
      return css2;
    };
    _createClass(SheetsRegistry2, [{
      key: "index",
      get: function get() {
        return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
      }
    }]);
    return SheetsRegistry2;
  }();
  var sheets = new SheetsRegistry();
  var globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" && window.Math === Math ? window : typeof self !== "undefined" && self.Math === Math ? self : Function("return this")();
  var ns = "2f1acc6c3a606b082e5eef5e54414ffb";
  if (globalThis$1[ns] == null)
    globalThis$1[ns] = 0;
  var moduleId = globalThis$1[ns]++;
  var createGenerateId = function createGenerateId2(options) {
    if (options === void 0) {
      options = {};
    }
    var ruleCounter = 0;
    var generateId = function generateId2(rule, sheet) {
      ruleCounter += 1;
      var jssId = "";
      var prefix2 = "";
      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix2 = sheet.options.classNamePrefix;
        }
        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }
      if (options.minify) {
        return "" + (prefix2 || "c") + moduleId + jssId + ruleCounter;
      }
      return prefix2 + rule.key + "-" + moduleId + (jssId ? "-" + jssId : "") + "-" + ruleCounter;
    };
    return generateId;
  };
  var memoize = function memoize2(fn) {
    var value2;
    return function() {
      if (!value2)
        value2 = fn();
      return value2;
    };
  };
  var getPropertyValue = function getPropertyValue2(cssRule, prop) {
    try {
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }
      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      return "";
    }
  };
  var setProperty = function setProperty2(cssRule, prop, value2) {
    try {
      var cssValue = value2;
      if (Array.isArray(value2)) {
        cssValue = toCssValue(value2);
      }
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        var indexOfImportantFlag = cssValue ? cssValue.indexOf("!important") : -1;
        var cssValueWithoutImportantFlag = indexOfImportantFlag > -1 ? cssValue.substr(0, indexOfImportantFlag - 1) : cssValue;
        cssRule.style.setProperty(prop, cssValueWithoutImportantFlag, indexOfImportantFlag > -1 ? "important" : "");
      }
    } catch (err) {
      return false;
    }
    return true;
  };
  var removeProperty = function removeProperty2(cssRule, prop) {
    try {
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {
    }
  };
  var setSelector = function setSelector2(cssRule, selectorText) {
    cssRule.selectorText = selectorText;
    return cssRule.selectorText === selectorText;
  };
  var getHead = memoize(function() {
    return document.querySelector("head");
  });
  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }
  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];
      if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
        return sheet;
      }
    }
    return null;
  }
  function findCommentNode(text) {
    var head = getHead();
    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];
      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }
    return null;
  }
  function findPrevNode(options) {
    var registry = sheets.registry;
    if (registry.length > 0) {
      var sheet = findHigherSheet(registry, options);
      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element
        };
      }
      sheet = findHighestSheet(registry, options);
      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling
        };
      }
    }
    var insertionPoint = options.insertionPoint;
    if (insertionPoint && typeof insertionPoint === "string") {
      var comment = findCommentNode(insertionPoint);
      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling
        };
      }
    }
    return false;
  }
  function insertStyle(style2, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);
    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style2, nextNode.node);
      return;
    }
    if (insertionPoint && typeof insertionPoint.nodeType === "number") {
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode)
        parentNode.insertBefore(style2, insertionPointElement.nextSibling);
      return;
    }
    getHead().appendChild(style2);
  }
  var getNonce = memoize(function() {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute("content") : null;
  });
  var _insertRule = function insertRule(container, rule, index2) {
    try {
      if ("insertRule" in container) {
        container.insertRule(rule, index2);
      } else if ("appendRule" in container) {
        container.appendRule(rule);
      }
    } catch (err) {
      return false;
    }
    return container.cssRules[index2];
  };
  var getValidRuleInsertionIndex = function getValidRuleInsertionIndex2(container, index2) {
    var maxIndex = container.cssRules.length;
    if (index2 === void 0 || index2 > maxIndex) {
      return maxIndex;
    }
    return index2;
  };
  var createStyle = function createStyle2() {
    var el3 = document.createElement("style");
    el3.textContent = "\n";
    return el3;
  };
  var DomRenderer = /* @__PURE__ */ function() {
    function DomRenderer2(sheet) {
      this.getPropertyValue = getPropertyValue;
      this.setProperty = setProperty;
      this.removeProperty = removeProperty;
      this.setSelector = setSelector;
      this.hasInsertedRules = false;
      this.cssRules = [];
      if (sheet)
        sheets.add(sheet);
      this.sheet = sheet;
      var _ref = this.sheet ? this.sheet.options : {}, media = _ref.media, meta = _ref.meta, element = _ref.element;
      this.element = element || createStyle();
      this.element.setAttribute("data-jss", "");
      if (media)
        this.element.setAttribute("media", media);
      if (meta)
        this.element.setAttribute("data-meta", meta);
      var nonce = getNonce();
      if (nonce)
        this.element.setAttribute("nonce", nonce);
    }
    var _proto = DomRenderer2.prototype;
    _proto.attach = function attach() {
      if (this.element.parentNode || !this.sheet)
        return;
      insertStyle(this.element, this.sheet.options);
      var deployed = Boolean(this.sheet && this.sheet.deployed);
      if (this.hasInsertedRules && deployed) {
        this.hasInsertedRules = false;
        this.deploy();
      }
    };
    _proto.detach = function detach() {
      if (!this.sheet)
        return;
      var parentNode = this.element.parentNode;
      if (parentNode)
        parentNode.removeChild(this.element);
      if (this.sheet.options.link) {
        this.cssRules = [];
        this.element.textContent = "\n";
      }
    };
    _proto.deploy = function deploy() {
      var sheet = this.sheet;
      if (!sheet)
        return;
      if (sheet.options.link) {
        this.insertRules(sheet.rules);
        return;
      }
      this.element.textContent = "\n" + sheet.toString() + "\n";
    };
    _proto.insertRules = function insertRules(rules, nativeParent) {
      for (var i = 0; i < rules.index.length; i++) {
        this.insertRule(rules.index[i], i, nativeParent);
      }
    };
    _proto.insertRule = function insertRule(rule, index2, nativeParent) {
      if (nativeParent === void 0) {
        nativeParent = this.element.sheet;
      }
      if (rule.rules) {
        var parent = rule;
        var latestNativeParent = nativeParent;
        if (rule.type === "conditional" || rule.type === "keyframes") {
          var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
          latestNativeParent = _insertRule(nativeParent, parent.toString({
            children: false
          }), _insertionIndex);
          if (latestNativeParent === false) {
            return false;
          }
          this.refCssRule(rule, _insertionIndex, latestNativeParent);
        }
        this.insertRules(parent.rules, latestNativeParent);
        return latestNativeParent;
      }
      var ruleStr = rule.toString();
      if (!ruleStr)
        return false;
      var insertionIndex = getValidRuleInsertionIndex(nativeParent, index2);
      var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);
      if (nativeRule === false) {
        return false;
      }
      this.hasInsertedRules = true;
      this.refCssRule(rule, insertionIndex, nativeRule);
      return nativeRule;
    };
    _proto.refCssRule = function refCssRule(rule, index2, cssRule) {
      rule.renderable = cssRule;
      if (rule.options.parent instanceof StyleSheet) {
        this.cssRules.splice(index2, 0, cssRule);
      }
    };
    _proto.deleteRule = function deleteRule(cssRule) {
      var sheet = this.element.sheet;
      var index2 = this.indexOf(cssRule);
      if (index2 === -1)
        return false;
      sheet.deleteRule(index2);
      this.cssRules.splice(index2, 1);
      return true;
    };
    _proto.indexOf = function indexOf(cssRule) {
      return this.cssRules.indexOf(cssRule);
    };
    _proto.replaceRule = function replaceRule(cssRule, rule) {
      var index2 = this.indexOf(cssRule);
      if (index2 === -1)
        return false;
      this.element.sheet.deleteRule(index2);
      this.cssRules.splice(index2, 1);
      return this.insertRule(rule, index2);
    };
    _proto.getRules = function getRules() {
      return this.element.sheet.cssRules;
    };
    return DomRenderer2;
  }();
  var instanceCounter = 0;
  var Jss = /* @__PURE__ */ function() {
    function Jss2(options) {
      this.id = instanceCounter++;
      this.version = "10.9.2";
      this.plugins = new PluginsRegistry();
      this.options = {
        id: {
          minify: false
        },
        createGenerateId,
        Renderer: isBrowser ? DomRenderer : null,
        plugins: []
      };
      this.generateId = createGenerateId({
        minify: false
      });
      for (var i = 0; i < plugins.length; i++) {
        this.plugins.use(plugins[i], {
          queue: "internal"
        });
      }
      this.setup(options);
    }
    var _proto = Jss2.prototype;
    _proto.setup = function setup(options) {
      if (options === void 0) {
        options = {};
      }
      if (options.createGenerateId) {
        this.options.createGenerateId = options.createGenerateId;
      }
      if (options.id) {
        this.options.id = _extends({}, this.options.id, options.id);
      }
      if (options.createGenerateId || options.id) {
        this.generateId = this.options.createGenerateId(this.options.id);
      }
      if (options.insertionPoint != null)
        this.options.insertionPoint = options.insertionPoint;
      if ("Renderer" in options) {
        this.options.Renderer = options.Renderer;
      }
      if (options.plugins)
        this.use.apply(this, options.plugins);
      return this;
    };
    _proto.createStyleSheet = function createStyleSheet2(styles, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, index2 = _options.index;
      if (typeof index2 !== "number") {
        index2 = sheets.index === 0 ? 0 : sheets.index + 1;
      }
      var sheet = new StyleSheet(styles, _extends({}, options, {
        jss: this,
        generateId: options.generateId || this.generateId,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index2
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    };
    _proto.removeStyleSheet = function removeStyleSheet(sheet) {
      sheet.detach();
      sheets.remove(sheet);
      return this;
    };
    _proto.createRule = function createRule$1(name, style2, options) {
      if (style2 === void 0) {
        style2 = {};
      }
      if (options === void 0) {
        options = {};
      }
      if (typeof name === "object") {
        return this.createRule(void 0, name, style2);
      }
      var ruleOptions = _extends({}, options, {
        name,
        jss: this,
        Renderer: this.options.Renderer
      });
      if (!ruleOptions.generateId)
        ruleOptions.generateId = this.generateId;
      if (!ruleOptions.classes)
        ruleOptions.classes = {};
      if (!ruleOptions.keyframes)
        ruleOptions.keyframes = {};
      var rule = createRule(name, style2, ruleOptions);
      if (rule)
        this.plugins.onProcessRule(rule);
      return rule;
    };
    _proto.use = function use2() {
      var _this = this;
      for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins2[_key] = arguments[_key];
      }
      plugins2.forEach(function(plugin) {
        _this.plugins.use(plugin);
      });
      return this;
    };
    return Jss2;
  }();
  var createJss = function createJss2(options) {
    return new Jss(options);
  };
  var SheetsManager = /* @__PURE__ */ function() {
    function SheetsManager2() {
      this.length = 0;
      this.sheets = new WeakMap();
    }
    var _proto = SheetsManager2.prototype;
    _proto.get = function get(key2) {
      var entry = this.sheets.get(key2);
      return entry && entry.sheet;
    };
    _proto.add = function add(key2, sheet) {
      if (this.sheets.has(key2))
        return;
      this.length++;
      this.sheets.set(key2, {
        sheet,
        refs: 0
      });
    };
    _proto.manage = function manage(key2) {
      var entry = this.sheets.get(key2);
      if (entry) {
        if (entry.refs === 0) {
          entry.sheet.attach();
        }
        entry.refs++;
        return entry.sheet;
      }
      return void 0;
    };
    _proto.unmanage = function unmanage(key2) {
      var entry = this.sheets.get(key2);
      if (entry) {
        if (entry.refs > 0) {
          entry.refs--;
          if (entry.refs === 0)
            entry.sheet.detach();
        }
      }
    };
    _createClass(SheetsManager2, [{
      key: "size",
      get: function get() {
        return this.length;
      }
    }]);
    return SheetsManager2;
  }();
  var hasCSSTOMSupport = typeof CSS === "object" && CSS != null && "number" in CSS;
  function getDynamicStyles(styles) {
    var to = null;
    for (var key2 in styles) {
      var value2 = styles[key2];
      var type = typeof value2;
      if (type === "function") {
        if (!to)
          to = {};
        to[key2] = value2;
      } else if (type === "object" && value2 !== null && !Array.isArray(value2)) {
        var extracted = getDynamicStyles(value2);
        if (extracted) {
          if (!to)
            to = {};
          to[key2] = extracted;
        }
      }
    }
    return to;
  }
  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */
  var index = createJss();
  var now = Date.now();
  var fnValuesNs = "fnValues" + now;
  var fnRuleNs = "fnStyle" + ++now;
  var functionPlugin = function functionPlugin2() {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (typeof decl !== "function")
          return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle(style2, rule) {
        if (fnValuesNs in rule || fnRuleNs in rule)
          return style2;
        var fnValues = {};
        for (var prop in style2) {
          var value2 = style2[prop];
          if (typeof value2 !== "function")
            continue;
          delete style2[prop];
          fnValues[prop] = value2;
        }
        rule[fnValuesNs] = fnValues;
        return style2;
      },
      onUpdate: function onUpdate(data2, rule, sheet, options) {
        var styleRule = rule;
        var fnRule = styleRule[fnRuleNs];
        if (fnRule) {
          styleRule.style = fnRule(data2) || {};
        }
        var fnValues = styleRule[fnValuesNs];
        if (fnValues) {
          for (var _prop in fnValues) {
            styleRule.prop(_prop, fnValues[_prop](data2), options);
          }
        }
      }
    };
  };
  function symbolObservablePonyfill(root3) {
    var result2;
    var Symbol2 = root3.Symbol;
    if (typeof Symbol2 === "function") {
      if (Symbol2.observable) {
        result2 = Symbol2.observable;
      } else {
        result2 = Symbol2("observable");
        Symbol2.observable = result2;
      }
    } else {
      result2 = "@@observable";
    }
    return result2;
  }
  var root2;
  if (typeof self !== "undefined") {
    root2 = self;
  } else if (typeof window !== "undefined") {
    root2 = window;
  } else if (typeof global !== "undefined") {
    root2 = global;
  } else if (typeof module !== "undefined") {
    root2 = module;
  } else {
    root2 = Function("return this")();
  }
  var result = symbolObservablePonyfill(root2);
  var isObservable = function isObservable2(value2) {
    return value2 && value2[result] && value2 === value2[result]();
  };
  var observablePlugin = function observablePlugin2(updateOptions) {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (!isObservable(decl))
          return null;
        var style$ = decl;
        var rule = createRule(name, {}, options);
        style$.subscribe(function(style2) {
          for (var prop in style2) {
            rule.prop(prop, style2[prop], updateOptions);
          }
        });
        return rule;
      },
      onProcessRule: function onProcessRule2(rule) {
        if (rule && rule.type !== "style")
          return;
        var styleRule = rule;
        var style2 = styleRule.style;
        var _loop = function _loop2(prop2) {
          var value2 = style2[prop2];
          if (!isObservable(value2))
            return "continue";
          delete style2[prop2];
          value2.subscribe({
            next: function next(nextValue) {
              styleRule.prop(prop2, nextValue, updateOptions);
            }
          });
        };
        for (var prop in style2) {
          var _ret = _loop(prop);
          if (_ret === "continue")
            continue;
        }
      }
    };
  };
  var semiWithNl = /;\n/;
  var parse2 = function parse3(cssText) {
    var style2 = {};
    var split = cssText.split(semiWithNl);
    for (var i = 0; i < split.length; i++) {
      var decl = (split[i] || "").trim();
      if (!decl)
        continue;
      var colonIndex = decl.indexOf(":");
      if (colonIndex === -1) {
        continue;
      }
      var prop = decl.substr(0, colonIndex).trim();
      var value2 = decl.substr(colonIndex + 1).trim();
      style2[prop] = value2;
    }
    return style2;
  };
  var onProcessRule = function onProcessRule2(rule) {
    if (typeof rule.style === "string") {
      rule.style = parse2(rule.style);
    }
  };
  function templatePlugin() {
    return {
      onProcessRule
    };
  }
  var at = "@global";
  var atPrefix = "@global ";
  var GlobalContainerRule = /* @__PURE__ */ function() {
    function GlobalContainerRule2(key2, styles, options) {
      this.type = "global";
      this.at = at;
      this.isProcessed = false;
      this.key = key2;
      this.options = options;
      this.rules = new RuleList(_extends({}, options, {
        parent: this
      }));
      for (var selector in styles) {
        this.rules.add(selector, styles[selector]);
      }
      this.rules.process();
    }
    var _proto = GlobalContainerRule2.prototype;
    _proto.getRule = function getRule(name) {
      return this.rules.get(name);
    };
    _proto.addRule = function addRule(name, style2, options) {
      var rule = this.rules.add(name, style2, options);
      if (rule)
        this.options.jss.plugins.onProcessRule(rule);
      return rule;
    };
    _proto.replaceRule = function replaceRule(name, style2, options) {
      var newRule = this.rules.replace(name, style2, options);
      if (newRule)
        this.options.jss.plugins.onProcessRule(newRule);
      return newRule;
    };
    _proto.indexOf = function indexOf(rule) {
      return this.rules.indexOf(rule);
    };
    _proto.toString = function toString3(options) {
      return this.rules.toString(options);
    };
    return GlobalContainerRule2;
  }();
  var GlobalPrefixedRule = /* @__PURE__ */ function() {
    function GlobalPrefixedRule2(key2, style2, options) {
      this.type = "global";
      this.at = at;
      this.isProcessed = false;
      this.key = key2;
      this.options = options;
      var selector = key2.substr(atPrefix.length);
      this.rule = options.jss.createRule(selector, style2, _extends({}, options, {
        parent: this
      }));
    }
    var _proto2 = GlobalPrefixedRule2.prototype;
    _proto2.toString = function toString3(options) {
      return this.rule ? this.rule.toString(options) : "";
    };
    return GlobalPrefixedRule2;
  }();
  var separatorRegExp = /\s*,\s*/g;
  function addScope(selector, scope) {
    var parts2 = selector.split(separatorRegExp);
    var scoped = "";
    for (var i = 0; i < parts2.length; i++) {
      scoped += scope + " " + parts2[i].trim();
      if (parts2[i + 1])
        scoped += ", ";
    }
    return scoped;
  }
  function handleNestedGlobalContainerRule(rule, sheet) {
    var options = rule.options, style2 = rule.style;
    var rules = style2 ? style2[at] : null;
    if (!rules)
      return;
    for (var name in rules) {
      sheet.addRule(name, rules[name], _extends({}, options, {
        selector: addScope(name, rule.selector)
      }));
    }
    delete style2[at];
  }
  function handlePrefixedGlobalRule(rule, sheet) {
    var options = rule.options, style2 = rule.style;
    for (var prop in style2) {
      if (prop[0] !== "@" || prop.substr(0, at.length) !== at)
        continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      sheet.addRule(selector, style2[prop], _extends({}, options, {
        selector
      }));
      delete style2[prop];
    }
  }
  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (!name)
        return null;
      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }
      if (name[0] === "@" && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }
      var parent = options.parent;
      if (parent) {
        if (parent.type === "global" || parent.options.parent && parent.options.parent.type === "global") {
          options.scoped = false;
        }
      }
      if (!options.selector && options.scoped === false) {
        options.selector = name;
      }
      return null;
    }
    function onProcessRule2(rule, sheet) {
      if (rule.type !== "style" || !sheet)
        return;
      handleNestedGlobalContainerRule(rule, sheet);
      handlePrefixedGlobalRule(rule, sheet);
    }
    return {
      onCreateRule,
      onProcessRule: onProcessRule2
    };
  }
  var isObject2 = function isObject3(obj) {
    return obj && typeof obj === "object" && !Array.isArray(obj);
  };
  var valueNs = "extendCurrValue" + Date.now();
  function mergeExtend(style2, rule, sheet, newStyle) {
    var extendType = typeof style2.extend;
    if (extendType === "string") {
      if (!sheet)
        return;
      var refRule = sheet.getRule(style2.extend);
      if (!refRule)
        return;
      if (refRule === rule) {
        return;
      }
      var parent = refRule.options.parent;
      if (parent) {
        var originalStyle = parent.rules.raw[style2.extend];
        extend2(originalStyle, rule, sheet, newStyle);
      }
      return;
    }
    if (Array.isArray(style2.extend)) {
      for (var index2 = 0; index2 < style2.extend.length; index2++) {
        var singleExtend = style2.extend[index2];
        var singleStyle = typeof singleExtend === "string" ? _extends({}, style2, {
          extend: singleExtend
        }) : style2.extend[index2];
        extend2(singleStyle, rule, sheet, newStyle);
      }
      return;
    }
    for (var prop in style2.extend) {
      if (prop === "extend") {
        extend2(style2.extend.extend, rule, sheet, newStyle);
        continue;
      }
      if (isObject2(style2.extend[prop])) {
        if (!(prop in newStyle))
          newStyle[prop] = {};
        extend2(style2.extend[prop], rule, sheet, newStyle[prop]);
        continue;
      }
      newStyle[prop] = style2.extend[prop];
    }
  }
  function mergeRest(style2, rule, sheet, newStyle) {
    for (var prop in style2) {
      if (prop === "extend")
        continue;
      if (isObject2(newStyle[prop]) && isObject2(style2[prop])) {
        extend2(style2[prop], rule, sheet, newStyle[prop]);
        continue;
      }
      if (isObject2(style2[prop])) {
        newStyle[prop] = extend2(style2[prop], rule, sheet);
        continue;
      }
      newStyle[prop] = style2[prop];
    }
  }
  function extend2(style2, rule, sheet, newStyle) {
    if (newStyle === void 0) {
      newStyle = {};
    }
    mergeExtend(style2, rule, sheet, newStyle);
    mergeRest(style2, rule, sheet, newStyle);
    return newStyle;
  }
  function jssExtend() {
    function onProcessStyle(style2, rule, sheet) {
      if ("extend" in style2)
        return extend2(style2, rule, sheet);
      return style2;
    }
    function onChangeValue(value2, prop, rule) {
      if (prop !== "extend")
        return value2;
      if (value2 == null || value2 === false) {
        for (var key2 in rule[valueNs]) {
          rule.prop(key2, null);
        }
        rule[valueNs] = null;
        return null;
      }
      if (typeof value2 === "object") {
        for (var _key in value2) {
          rule.prop(_key, value2[_key]);
        }
        rule[valueNs] = value2;
      }
      return null;
    }
    return {
      onProcessStyle,
      onChangeValue
    };
  }
  var separatorRegExp$1 = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp$1 = /\$([\w-]+)/g;
  function jssNested() {
    function getReplaceRef(container, sheet) {
      return function(match, key2) {
        var rule = container.getRule(key2) || sheet && sheet.getRule(key2);
        if (rule) {
          return rule.selector;
        }
        return key2;
      };
    }
    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp$1);
      var nestedSelectors = nestedProp.split(separatorRegExp$1);
      var result2 = "";
      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];
        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result2)
            result2 += ", ";
          result2 += nested.indexOf("&") !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
        }
      }
      return result2;
    }
    function getOptions(rule, container, prevOptions) {
      if (prevOptions)
        return _extends({}, prevOptions, {
          index: prevOptions.index + 1
        });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === void 0 ? 1 : nestingLevel + 1;
      var options = _extends({}, rule.options, {
        nestingLevel,
        index: container.indexOf(rule) + 1
      });
      delete options.name;
      return options;
    }
    function onProcessStyle(style2, rule, sheet) {
      if (rule.type !== "style")
        return style2;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef2;
      for (var prop in style2) {
        var isNested = prop.indexOf("&") !== -1;
        var isNestedConditional = prop[0] === "@";
        if (!isNested && !isNestedConditional)
          continue;
        options = getOptions(styleRule, container, options);
        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector);
          if (!replaceRef2)
            replaceRef2 = getReplaceRef(container, sheet);
          selector = selector.replace(refRegExp$1, replaceRef2);
          var name = styleRule.key + "-" + prop;
          if ("replaceRule" in container) {
            container.replaceRule(name, style2[prop], _extends({}, options, {
              selector
            }));
          } else {
            container.addRule(name, style2[prop], _extends({}, options, {
              selector
            }));
          }
        } else if (isNestedConditional) {
          container.addRule(prop, {}, options).addRule(styleRule.key, style2[prop], {
            selector: styleRule.selector
          });
        }
        delete style2[prop];
      }
      return style2;
    }
    return {
      onProcessStyle
    };
  }
  function registerClass(rule, className) {
    if (!className)
      return true;
    if (Array.isArray(className)) {
      for (var index2 = 0; index2 < className.length; index2++) {
        var isSetted = registerClass(rule, className[index2]);
        if (!isSetted)
          return false;
      }
      return true;
    }
    if (className.indexOf(" ") > -1) {
      return registerClass(rule, className.split(" "));
    }
    var parent = rule.options.parent;
    if (className[0] === "$") {
      var refRule = parent.getRule(className.substr(1));
      if (!refRule) {
        return false;
      }
      if (refRule === rule) {
        return false;
      }
      parent.classes[rule.key] += " " + parent.classes[refRule.key];
      return true;
    }
    parent.classes[rule.key] += " " + className;
    return true;
  }
  function jssCompose() {
    function onProcessStyle(style2, rule) {
      if (!("composes" in style2))
        return style2;
      registerClass(rule, style2.composes);
      delete style2.composes;
      return style2;
    }
    return {
      onProcessStyle
    };
  }
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache2 = {};
  function toHyphenLower(match) {
    return "-" + match.toLowerCase();
  }
  function hyphenateStyleName(name) {
    if (cache2.hasOwnProperty(name)) {
      return cache2[name];
    }
    var hName = name.replace(uppercasePattern, toHyphenLower);
    return cache2[name] = msPattern.test(hName) ? "-" + hName : hName;
  }
  function convertCase(style2) {
    var converted = {};
    for (var prop in style2) {
      var key2 = prop.indexOf("--") === 0 ? prop : hyphenateStyleName(prop);
      converted[key2] = style2[prop];
    }
    if (style2.fallbacks) {
      if (Array.isArray(style2.fallbacks))
        converted.fallbacks = style2.fallbacks.map(convertCase);
      else
        converted.fallbacks = convertCase(style2.fallbacks);
    }
    return converted;
  }
  function camelCase() {
    function onProcessStyle(style2) {
      if (Array.isArray(style2)) {
        for (var index2 = 0; index2 < style2.length; index2++) {
          style2[index2] = convertCase(style2[index2]);
        }
        return style2;
      }
      return convertCase(style2);
    }
    function onChangeValue(value2, prop, rule) {
      if (prop.indexOf("--") === 0) {
        return value2;
      }
      var hyphenatedProp = hyphenateStyleName(prop);
      if (prop === hyphenatedProp)
        return value2;
      rule.prop(hyphenatedProp, value2);
      return null;
    }
    return {
      onProcessStyle,
      onChangeValue
    };
  }
  var px = hasCSSTOMSupport && CSS ? CSS.px : "px";
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : "ms";
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : "%";
  var defaultUnits = {
    "animation-delay": ms,
    "animation-duration": ms,
    "background-position": px,
    "background-position-x": px,
    "background-position-y": px,
    "background-size": px,
    border: px,
    "border-bottom": px,
    "border-bottom-left-radius": px,
    "border-bottom-right-radius": px,
    "border-bottom-width": px,
    "border-left": px,
    "border-left-width": px,
    "border-radius": px,
    "border-right": px,
    "border-right-width": px,
    "border-top": px,
    "border-top-left-radius": px,
    "border-top-right-radius": px,
    "border-top-width": px,
    "border-width": px,
    "border-block": px,
    "border-block-end": px,
    "border-block-end-width": px,
    "border-block-start": px,
    "border-block-start-width": px,
    "border-block-width": px,
    "border-inline": px,
    "border-inline-end": px,
    "border-inline-end-width": px,
    "border-inline-start": px,
    "border-inline-start-width": px,
    "border-inline-width": px,
    "border-start-start-radius": px,
    "border-start-end-radius": px,
    "border-end-start-radius": px,
    "border-end-end-radius": px,
    margin: px,
    "margin-bottom": px,
    "margin-left": px,
    "margin-right": px,
    "margin-top": px,
    "margin-block": px,
    "margin-block-end": px,
    "margin-block-start": px,
    "margin-inline": px,
    "margin-inline-end": px,
    "margin-inline-start": px,
    padding: px,
    "padding-bottom": px,
    "padding-left": px,
    "padding-right": px,
    "padding-top": px,
    "padding-block": px,
    "padding-block-end": px,
    "padding-block-start": px,
    "padding-inline": px,
    "padding-inline-end": px,
    "padding-inline-start": px,
    "mask-position-x": px,
    "mask-position-y": px,
    "mask-size": px,
    height: px,
    width: px,
    "min-height": px,
    "max-height": px,
    "min-width": px,
    "max-width": px,
    bottom: px,
    left: px,
    top: px,
    right: px,
    inset: px,
    "inset-block": px,
    "inset-block-end": px,
    "inset-block-start": px,
    "inset-inline": px,
    "inset-inline-end": px,
    "inset-inline-start": px,
    "box-shadow": px,
    "text-shadow": px,
    "column-gap": px,
    "column-rule": px,
    "column-rule-width": px,
    "column-width": px,
    "font-size": px,
    "font-size-delta": px,
    "letter-spacing": px,
    "text-decoration-thickness": px,
    "text-indent": px,
    "text-stroke": px,
    "text-stroke-width": px,
    "word-spacing": px,
    motion: px,
    "motion-offset": px,
    outline: px,
    "outline-offset": px,
    "outline-width": px,
    perspective: px,
    "perspective-origin-x": percent,
    "perspective-origin-y": percent,
    "transform-origin": percent,
    "transform-origin-x": percent,
    "transform-origin-y": percent,
    "transform-origin-z": percent,
    "transition-delay": ms,
    "transition-duration": ms,
    "vertical-align": px,
    "flex-basis": px,
    "shape-margin": px,
    size: px,
    gap: px,
    grid: px,
    "grid-gap": px,
    "row-gap": px,
    "grid-row-gap": px,
    "grid-column-gap": px,
    "grid-template-rows": px,
    "grid-template-columns": px,
    "grid-auto-rows": px,
    "grid-auto-columns": px,
    "box-shadow-x": px,
    "box-shadow-y": px,
    "box-shadow-blur": px,
    "box-shadow-spread": px,
    "font-line-height": px,
    "text-shadow-x": px,
    "text-shadow-y": px,
    "text-shadow-blur": px
  };
  function addCamelCasedVersion(obj) {
    var regExp2 = /(-[a-z])/g;
    var replace = function replace2(str) {
      return str[1].toUpperCase();
    };
    var newObj = {};
    for (var key2 in obj) {
      newObj[key2] = obj[key2];
      newObj[key2.replace(regExp2, replace)] = obj[key2];
    }
    return newObj;
  }
  var units = addCamelCasedVersion(defaultUnits);
  function iterate(prop, value2, options) {
    if (value2 == null)
      return value2;
    if (Array.isArray(value2)) {
      for (var i = 0; i < value2.length; i++) {
        value2[i] = iterate(prop, value2[i], options);
      }
    } else if (typeof value2 === "object") {
      if (prop === "fallbacks") {
        for (var innerProp in value2) {
          value2[innerProp] = iterate(innerProp, value2[innerProp], options);
        }
      } else {
        for (var _innerProp in value2) {
          value2[_innerProp] = iterate(prop + "-" + _innerProp, value2[_innerProp], options);
        }
      }
    } else if (typeof value2 === "number" && isNaN(value2) === false) {
      var unit = options[prop] || units[prop];
      if (unit && !(value2 === 0 && unit === px)) {
        return typeof unit === "function" ? unit(value2).toString() : "" + value2 + unit;
      }
      return value2.toString();
    }
    return value2;
  }
  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }
    var camelCasedOptions = addCamelCasedVersion(options);
    function onProcessStyle(style2, rule) {
      if (rule.type !== "style")
        return style2;
      for (var prop in style2) {
        style2[prop] = iterate(prop, style2[prop], camelCasedOptions);
      }
      return style2;
    }
    function onChangeValue(value2, prop) {
      return iterate(prop, value2, camelCasedOptions);
    }
    return {
      onProcessStyle,
      onChangeValue
    };
  }
  var propArray = {
    "background-size": true,
    "background-position": true,
    border: true,
    "border-bottom": true,
    "border-left": true,
    "border-top": true,
    "border-right": true,
    "border-radius": true,
    "border-image": true,
    "border-width": true,
    "border-style": true,
    "border-color": true,
    "box-shadow": true,
    flex: true,
    margin: true,
    padding: true,
    outline: true,
    "transform-origin": true,
    transform: true,
    transition: true
  };
  var propArrayInObj = {
    position: true,
    size: true
  };
  var propObj = {
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    background: {
      attachment: null,
      color: null,
      image: null,
      position: null,
      repeat: null
    },
    border: {
      width: null,
      style: null,
      color: null
    },
    "border-top": {
      width: null,
      style: null,
      color: null
    },
    "border-right": {
      width: null,
      style: null,
      color: null
    },
    "border-bottom": {
      width: null,
      style: null,
      color: null
    },
    "border-left": {
      width: null,
      style: null,
      color: null
    },
    outline: {
      width: null,
      style: null,
      color: null
    },
    "list-style": {
      type: null,
      position: null,
      image: null
    },
    transition: {
      property: null,
      duration: null,
      "timing-function": null,
      timingFunction: null,
      delay: null
    },
    animation: {
      name: null,
      duration: null,
      "timing-function": null,
      timingFunction: null,
      delay: null,
      "iteration-count": null,
      iterationCount: null,
      direction: null,
      "fill-mode": null,
      fillMode: null,
      "play-state": null,
      playState: null
    },
    "box-shadow": {
      x: 0,
      y: 0,
      blur: 0,
      spread: 0,
      color: null,
      inset: null
    },
    "text-shadow": {
      x: 0,
      y: 0,
      blur: null,
      color: null
    }
  };
  var customPropObj = {
    border: {
      radius: "border-radius",
      image: "border-image",
      width: "border-width",
      style: "border-style",
      color: "border-color"
    },
    "border-bottom": {
      width: "border-bottom-width",
      style: "border-bottom-style",
      color: "border-bottom-color"
    },
    "border-top": {
      width: "border-top-width",
      style: "border-top-style",
      color: "border-top-color"
    },
    "border-left": {
      width: "border-left-width",
      style: "border-left-style",
      color: "border-left-color"
    },
    "border-right": {
      width: "border-right-width",
      style: "border-right-style",
      color: "border-right-color"
    },
    background: {
      size: "background-size",
      image: "background-image"
    },
    font: {
      style: "font-style",
      variant: "font-variant",
      weight: "font-weight",
      stretch: "font-stretch",
      size: "font-size",
      family: "font-family",
      lineHeight: "line-height",
      "line-height": "line-height"
    },
    flex: {
      grow: "flex-grow",
      basis: "flex-basis",
      direction: "flex-direction",
      wrap: "flex-wrap",
      flow: "flex-flow",
      shrink: "flex-shrink"
    },
    align: {
      self: "align-self",
      items: "align-items",
      content: "align-content"
    },
    grid: {
      "template-columns": "grid-template-columns",
      templateColumns: "grid-template-columns",
      "template-rows": "grid-template-rows",
      templateRows: "grid-template-rows",
      "template-areas": "grid-template-areas",
      templateAreas: "grid-template-areas",
      template: "grid-template",
      "auto-columns": "grid-auto-columns",
      autoColumns: "grid-auto-columns",
      "auto-rows": "grid-auto-rows",
      autoRows: "grid-auto-rows",
      "auto-flow": "grid-auto-flow",
      autoFlow: "grid-auto-flow",
      row: "grid-row",
      column: "grid-column",
      "row-start": "grid-row-start",
      rowStart: "grid-row-start",
      "row-end": "grid-row-end",
      rowEnd: "grid-row-end",
      "column-start": "grid-column-start",
      columnStart: "grid-column-start",
      "column-end": "grid-column-end",
      columnEnd: "grid-column-end",
      area: "grid-area",
      gap: "grid-gap",
      "row-gap": "grid-row-gap",
      rowGap: "grid-row-gap",
      "column-gap": "grid-column-gap",
      columnGap: "grid-column-gap"
    }
  };
  function mapValuesByProp(value2, prop, rule) {
    return value2.map(function(item) {
      return objectToArray(item, prop, rule, false, true);
    });
  }
  function processArray(value2, prop, scheme, rule) {
    if (scheme[prop] == null)
      return value2;
    if (value2.length === 0)
      return [];
    if (Array.isArray(value2[0]))
      return processArray(value2[0], prop, scheme, rule);
    if (typeof value2[0] === "object") {
      return mapValuesByProp(value2, prop, rule);
    }
    return [value2];
  }
  function objectToArray(value2, prop, rule, isFallback, isInArray) {
    if (!(propObj[prop] || customPropObj[prop]))
      return [];
    var result2 = [];
    if (customPropObj[prop]) {
      value2 = customPropsToStyle(value2, rule, customPropObj[prop], isFallback);
    }
    if (Object.keys(value2).length) {
      for (var baseProp in propObj[prop]) {
        if (value2[baseProp]) {
          if (Array.isArray(value2[baseProp])) {
            result2.push(propArrayInObj[baseProp] === null ? value2[baseProp] : value2[baseProp].join(" "));
          } else
            result2.push(value2[baseProp]);
          continue;
        }
        if (propObj[prop][baseProp] != null) {
          result2.push(propObj[prop][baseProp]);
        }
      }
    }
    if (!result2.length || isInArray)
      return result2;
    return [result2];
  }
  function customPropsToStyle(value2, rule, customProps, isFallback) {
    for (var prop in customProps) {
      var propName = customProps[prop];
      if (typeof value2[prop] !== "undefined" && (isFallback || !rule.prop(propName))) {
        var _styleDetector;
        var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value2[prop], _styleDetector), rule)[propName];
        if (isFallback)
          rule.style.fallbacks[propName] = appendedValue;
        else
          rule.style[propName] = appendedValue;
      }
      delete value2[prop];
    }
    return value2;
  }
  function styleDetector(style2, rule, isFallback) {
    for (var prop in style2) {
      var value2 = style2[prop];
      if (Array.isArray(value2)) {
        if (!Array.isArray(value2[0])) {
          if (prop === "fallbacks") {
            for (var index2 = 0; index2 < style2.fallbacks.length; index2++) {
              style2.fallbacks[index2] = styleDetector(style2.fallbacks[index2], rule, true);
            }
            continue;
          }
          style2[prop] = processArray(value2, prop, propArray, rule);
          if (!style2[prop].length)
            delete style2[prop];
        }
      } else if (typeof value2 === "object") {
        if (prop === "fallbacks") {
          style2.fallbacks = styleDetector(style2.fallbacks, rule, true);
          continue;
        }
        style2[prop] = objectToArray(value2, prop, rule, isFallback);
        if (!style2[prop].length)
          delete style2[prop];
      } else if (style2[prop] === "")
        delete style2[prop];
    }
    return style2;
  }
  function jssExpand() {
    function onProcessStyle(style2, rule) {
      if (!style2 || rule.type !== "style")
        return style2;
      if (Array.isArray(style2)) {
        for (var index2 = 0; index2 < style2.length; index2++) {
          style2[index2] = styleDetector(style2[index2], rule);
        }
        return style2;
      }
      return styleDetector(style2, rule);
    }
    return {
      onProcessStyle
    };
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n3 = Object.prototype.toString.call(o).slice(8, -1);
    if (n3 === "Object" && o.constructor)
      n3 = o.constructor.name;
    if (n3 === "Map" || n3 === "Set")
      return Array.from(o);
    if (n3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3))
      return _arrayLikeToArray(o, minLen);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  var js = "";
  var css = "";
  var vendor = "";
  var browser2 = "";
  var isTouch = isBrowser && "ontouchstart" in document.documentElement;
  if (isBrowser) {
    jsCssMap = {
      Moz: "-moz-",
      ms: "-ms-",
      O: "-o-",
      Webkit: "-webkit-"
    };
    _document$createEleme = document.createElement("p"), style = _document$createEleme.style;
    testProp = "Transform";
    for (key in jsCssMap) {
      if (key + testProp in style) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    }
    if (js === "Webkit" && "msHyphens" in style) {
      js = "ms";
      css = jsCssMap.ms;
      browser2 = "edge";
    }
    if (js === "Webkit" && "-apple-trailing-word" in style) {
      vendor = "apple";
    }
  }
  var jsCssMap;
  var _document$createEleme;
  var style;
  var testProp;
  var key;
  var prefix = {
    js,
    css,
    vendor,
    browser: browser2,
    isTouch
  };
  function supportedKeyframes(key2) {
    if (key2[1] === "-")
      return key2;
    if (prefix.js === "ms")
      return key2;
    return "@" + prefix.css + "keyframes" + key2.substr(10);
  }
  var appearence = {
    noPrefill: ["appearance"],
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "appearance")
        return false;
      if (prefix.js === "ms")
        return "-webkit-" + prop;
      return prefix.css + prop;
    }
  };
  var colorAdjust = {
    noPrefill: ["color-adjust"],
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "color-adjust")
        return false;
      if (prefix.js === "Webkit")
        return prefix.css + "print-" + prop;
      return prop;
    }
  };
  var regExp = /[-\s]+(.)?/g;
  function toUpper(match, c2) {
    return c2 ? c2.toUpperCase() : "";
  }
  function camelize(str) {
    return str.replace(regExp, toUpper);
  }
  function pascalize(str) {
    return camelize("-" + str);
  }
  var mask = {
    noPrefill: ["mask"],
    supportedProperty: function supportedProperty2(prop, style2) {
      if (!/^mask/.test(prop))
        return false;
      if (prefix.js === "Webkit") {
        var longhand = "mask-image";
        if (camelize(longhand) in style2) {
          return prop;
        }
        if (prefix.js + pascalize(longhand) in style2) {
          return prefix.css + prop;
        }
      }
      return prop;
    }
  };
  var textOrientation = {
    noPrefill: ["text-orientation"],
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "text-orientation")
        return false;
      if (prefix.vendor === "apple" && !prefix.isTouch) {
        return prefix.css + prop;
      }
      return prop;
    }
  };
  var transform = {
    noPrefill: ["transform"],
    supportedProperty: function supportedProperty2(prop, style2, options) {
      if (prop !== "transform")
        return false;
      if (options.transform) {
        return prop;
      }
      return prefix.css + prop;
    }
  };
  var transition = {
    noPrefill: ["transition"],
    supportedProperty: function supportedProperty2(prop, style2, options) {
      if (prop !== "transition")
        return false;
      if (options.transition) {
        return prop;
      }
      return prefix.css + prop;
    }
  };
  var writingMode = {
    noPrefill: ["writing-mode"],
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "writing-mode")
        return false;
      if (prefix.js === "Webkit" || prefix.js === "ms" && prefix.browser !== "edge") {
        return prefix.css + prop;
      }
      return prop;
    }
  };
  var userSelect = {
    noPrefill: ["user-select"],
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "user-select")
        return false;
      if (prefix.js === "Moz" || prefix.js === "ms" || prefix.vendor === "apple") {
        return prefix.css + prop;
      }
      return prop;
    }
  };
  var breakPropsOld = {
    supportedProperty: function supportedProperty2(prop, style2) {
      if (!/^break-/.test(prop))
        return false;
      if (prefix.js === "Webkit") {
        var jsProp = "WebkitColumn" + pascalize(prop);
        return jsProp in style2 ? prefix.css + "column-" + prop : false;
      }
      if (prefix.js === "Moz") {
        var _jsProp = "page" + pascalize(prop);
        return _jsProp in style2 ? "page-" + prop : false;
      }
      return false;
    }
  };
  var inlineLogicalOld = {
    supportedProperty: function supportedProperty2(prop, style2) {
      if (!/^(border|margin|padding)-inline/.test(prop))
        return false;
      if (prefix.js === "Moz")
        return prop;
      var newProp = prop.replace("-inline", "");
      return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
    }
  };
  var unprefixed = {
    supportedProperty: function supportedProperty2(prop, style2) {
      return camelize(prop) in style2 ? prop : false;
    }
  };
  var prefixed = {
    supportedProperty: function supportedProperty2(prop, style2) {
      var pascalized = pascalize(prop);
      if (prop[0] === "-")
        return prop;
      if (prop[0] === "-" && prop[1] === "-")
        return prop;
      if (prefix.js + pascalized in style2)
        return prefix.css + prop;
      if (prefix.js !== "Webkit" && "Webkit" + pascalized in style2)
        return "-webkit-" + prop;
      return false;
    }
  };
  var scrollSnap = {
    supportedProperty: function supportedProperty2(prop) {
      if (prop.substring(0, 11) !== "scroll-snap")
        return false;
      if (prefix.js === "ms") {
        return "" + prefix.css + prop;
      }
      return prop;
    }
  };
  var overscrollBehavior = {
    supportedProperty: function supportedProperty2(prop) {
      if (prop !== "overscroll-behavior")
        return false;
      if (prefix.js === "ms") {
        return prefix.css + "scroll-chaining";
      }
      return prop;
    }
  };
  var propMap = {
    "flex-grow": "flex-positive",
    "flex-shrink": "flex-negative",
    "flex-basis": "flex-preferred-size",
    "justify-content": "flex-pack",
    order: "flex-order",
    "align-items": "flex-align",
    "align-content": "flex-line-pack"
  };
  var flex2012 = {
    supportedProperty: function supportedProperty2(prop, style2) {
      var newProp = propMap[prop];
      if (!newProp)
        return false;
      return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
    }
  };
  var propMap$1 = {
    flex: "box-flex",
    "flex-grow": "box-flex",
    "flex-direction": ["box-orient", "box-direction"],
    order: "box-ordinal-group",
    "align-items": "box-align",
    "flex-flow": ["box-orient", "box-direction"],
    "justify-content": "box-pack"
  };
  var propKeys = Object.keys(propMap$1);
  var prefixCss = function prefixCss2(p4) {
    return prefix.css + p4;
  };
  var flex2009 = {
    supportedProperty: function supportedProperty2(prop, style2, _ref) {
      var multiple = _ref.multiple;
      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];
        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style2 ? prefix.css + newProp : false;
        }
        if (!multiple)
          return false;
        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style2)) {
            return false;
          }
        }
        return newProp.map(prefixCss);
      }
      return false;
    }
  };
  var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
  var propertyDetectors = plugins$1.filter(function(p4) {
    return p4.supportedProperty;
  }).map(function(p4) {
    return p4.supportedProperty;
  });
  var noPrefill = plugins$1.filter(function(p4) {
    return p4.noPrefill;
  }).reduce(function(a, p4) {
    a.push.apply(a, _toConsumableArray(p4.noPrefill));
    return a;
  }, []);
  var el2;
  var cache$1 = {};
  if (isBrowser) {
    el2 = document.createElement("p");
    computed = window.getComputedStyle(document.documentElement, "");
    for (key$1 in computed) {
      if (!isNaN(key$1))
        cache$1[computed[key$1]] = computed[key$1];
    }
    noPrefill.forEach(function(x3) {
      return delete cache$1[x3];
    });
  }
  var computed;
  var key$1;
  function supportedProperty(prop, options) {
    if (options === void 0) {
      options = {};
    }
    if (!el2)
      return prop;
    if (cache$1[prop] != null) {
      return cache$1[prop];
    }
    if (prop === "transition" || prop === "transform") {
      options[prop] = prop in el2.style;
    }
    for (var i = 0; i < propertyDetectors.length; i++) {
      cache$1[prop] = propertyDetectors[i](prop, el2.style, options);
      if (cache$1[prop])
        break;
    }
    try {
      el2.style[prop] = "";
    } catch (err) {
      return false;
    }
    return cache$1[prop];
  }
  var cache$1$1 = {};
  var transitionProperties = {
    transition: 1,
    "transition-property": 1,
    "-webkit-transition": 1,
    "-webkit-transition-property": 1
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  function prefixTransitionCallback(match, p1, p22) {
    if (p1 === "var")
      return "var";
    if (p1 === "all")
      return "all";
    if (p22 === "all")
      return ", all";
    var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p22);
    if (!prefixedValue)
      return p1 || p22;
    return prefixedValue;
  }
  if (isBrowser)
    el$1 = document.createElement("p");
  function supportedValue(property, value2) {
    var prefixedValue = value2;
    if (!el$1 || property === "content")
      return value2;
    if (typeof prefixedValue !== "string" || !isNaN(parseInt(prefixedValue, 10))) {
      return prefixedValue;
    }
    var cacheKey = property + prefixedValue;
    if (cache$1$1[cacheKey] != null) {
      return cache$1$1[cacheKey];
    }
    try {
      el$1.style[property] = prefixedValue;
    } catch (err) {
      cache$1$1[cacheKey] = false;
      return false;
    }
    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
    } else if (el$1.style[property] === "") {
      prefixedValue = prefix.css + prefixedValue;
      if (prefixedValue === "-ms-flex")
        el$1.style[property] = "-ms-flexbox";
      el$1.style[property] = prefixedValue;
      if (el$1.style[property] === "") {
        cache$1$1[cacheKey] = false;
        return false;
      }
    }
    el$1.style[property] = "";
    cache$1$1[cacheKey] = prefixedValue;
    return cache$1$1[cacheKey];
  }
  function jssVendorPrefixer() {
    function onProcessRule2(rule) {
      if (rule.type === "keyframes") {
        var atRule = rule;
        atRule.at = supportedKeyframes(atRule.at);
      }
    }
    function prefixStyle(style2) {
      for (var prop in style2) {
        var value2 = style2[prop];
        if (prop === "fallbacks" && Array.isArray(value2)) {
          style2[prop] = value2.map(prefixStyle);
          continue;
        }
        var changeProp = false;
        var supportedProp = supportedProperty(prop);
        if (supportedProp && supportedProp !== prop)
          changeProp = true;
        var changeValue = false;
        var supportedValue$1 = supportedValue(supportedProp, toCssValue(value2));
        if (supportedValue$1 && supportedValue$1 !== value2)
          changeValue = true;
        if (changeProp || changeValue) {
          if (changeProp)
            delete style2[prop];
          style2[supportedProp || prop] = supportedValue$1 || value2;
        }
      }
      return style2;
    }
    function onProcessStyle(style2, rule) {
      if (rule.type !== "style")
        return style2;
      return prefixStyle(style2);
    }
    function onChangeValue(value2, prop) {
      return supportedValue(prop, toCssValue(value2)) || value2;
    }
    return {
      onProcessRule: onProcessRule2,
      onProcessStyle,
      onChangeValue
    };
  }
  function jssPropsSort() {
    var sort = function sort2(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }
      return prop0.length - prop1.length;
    };
    return {
      onProcessStyle: function onProcessStyle(style2, rule) {
        if (rule.type !== "style")
          return style2;
        var newStyle = {};
        var props = Object.keys(style2).sort(sort);
        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style2[props[i]];
        }
        return newStyle;
      }
    };
  }
  var create = function create2(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      plugins: [functionPlugin(), observablePlugin(options.observable), templatePlugin(), jssGlobal(), jssExtend(), jssNested(), jssCompose(), camelCase(), defaultUnit(options.defaultUnit), jssExpand(), jssVendorPrefixer(), jssPropsSort()]
    };
  };
  var index$1 = Number.MIN_SAFE_INTEGER || -1e9;
  var getSheetIndex = function getSheetIndex2() {
    return index$1++;
  };
  var JssContext = react.createContext({
    classNamePrefix: "",
    disableStylesGeneration: false,
    isSSR: !isBrowser
  });
  var defaultManagers = new Map();
  var getManager = function getManager2(context, managerId) {
    var managers = context.managers;
    if (managers) {
      if (!managers[managerId]) {
        managers[managerId] = new SheetsManager();
      }
      return managers[managerId];
    }
    var manager = defaultManagers.get(managerId);
    if (!manager) {
      manager = new SheetsManager();
      defaultManagers.set(managerId, manager);
    }
    return manager;
  };
  var manageSheet = function manageSheet2(options) {
    var sheet = options.sheet, context = options.context, index2 = options.index, theme = options.theme;
    if (!sheet) {
      return;
    }
    var manager = getManager(context, index2);
    manager.manage(theme);
    if (context.registry) {
      context.registry.add(sheet);
    }
  };
  var unmanageSheet = function unmanageSheet2(options) {
    if (!options.sheet) {
      return;
    }
    var manager = getManager(options.context, options.index);
    manager.unmanage(options.theme);
  };
  var defaultJss = createJss(create());
  var sheetsMeta = new WeakMap();
  var getMeta = function getMeta2(sheet) {
    return sheetsMeta.get(sheet);
  };
  var addMeta = function addMeta2(sheet, meta) {
    sheetsMeta.set(sheet, meta);
  };
  var getStyles = function getStyles2(options) {
    var styles = options.styles;
    if (typeof styles !== "function") {
      return styles;
    }
    return styles(options.theme);
  };
  function getSheetOptions(options, link) {
    var minify;
    if (options.context.id && options.context.id.minify != null) {
      minify = options.context.id.minify;
    }
    var classNamePrefix = options.context.classNamePrefix || "";
    if (options.name && !minify) {
      classNamePrefix += options.name.replace(/\s/g, "-") + "-";
    }
    var meta = "";
    if (options.name)
      meta = options.name + ", ";
    meta += typeof options.styles === "function" ? "Themed" : "Unthemed";
    return _extends({}, options.sheetOptions, {
      index: options.index,
      meta,
      classNamePrefix,
      link,
      generateId: options.sheetOptions && options.sheetOptions.generateId ? options.sheetOptions.generateId : options.context.generateId
    });
  }
  var createStyleSheet = function createStyleSheet2(options) {
    if (options.context.disableStylesGeneration) {
      return void 0;
    }
    var manager = getManager(options.context, options.index);
    var existingSheet = manager.get(options.theme);
    if (existingSheet) {
      return existingSheet;
    }
    var jss = options.context.jss || defaultJss;
    var styles = getStyles(options);
    var dynamicStyles = getDynamicStyles(styles);
    var sheet = jss.createStyleSheet(styles, getSheetOptions(options, dynamicStyles !== null));
    addMeta(sheet, {
      dynamicStyles,
      styles
    });
    manager.add(options.theme, sheet);
    return sheet;
  };
  var removeDynamicRules = function removeDynamicRules2(sheet, rules) {
    for (var key2 in rules) {
      sheet.deleteRule(rules[key2]);
    }
  };
  var updateDynamicRules = function updateDynamicRules2(data2, sheet, rules) {
    for (var key2 in rules) {
      sheet.updateOne(rules[key2], data2);
    }
  };
  var addDynamicRules = function addDynamicRules2(sheet, data2) {
    var meta = getMeta(sheet);
    if (!meta) {
      return void 0;
    }
    var rules = {};
    for (var key2 in meta.dynamicStyles) {
      var initialRuleCount = sheet.rules.index.length;
      var originalRule = sheet.addRule(key2, meta.dynamicStyles[key2]);
      for (var i = initialRuleCount; i < sheet.rules.index.length; i++) {
        var rule = sheet.rules.index[i];
        sheet.updateOne(rule, data2);
        rules[originalRule === rule ? key2 : rule.key] = rule;
      }
    }
    return rules;
  };
  var getSheetClasses = function getSheetClasses2(sheet, dynamicRules) {
    if (!dynamicRules) {
      return sheet.classes;
    }
    var meta = getMeta(sheet);
    if (!meta) {
      return sheet.classes;
    }
    var classes = {};
    for (var key2 in meta.styles) {
      classes[key2] = sheet.classes[key2];
      if (key2 in dynamicRules) {
        classes[key2] += " " + sheet.classes[dynamicRules[key2].key];
      }
    }
    return classes;
  };
  function getUseInsertionEffect(isSSR) {
    return isSSR ? react.useEffect : react.useInsertionEffect || react.useLayoutEffect;
  }
  var noTheme = {};
  var createUseStyles12 = function createUseStyles13(styles, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$index = _options.index, index2 = _options$index === void 0 ? getSheetIndex() : _options$index, theming = _options.theming, name = _options.name, sheetOptions = _objectWithoutPropertiesLoose(_options, ["index", "theming", "name"]);
    var ThemeContext$1 = theming && theming.context || ThemeContext;
    var useTheme = function useTheme2(theme) {
      if (typeof styles === "function") {
        return theme || react.useContext(ThemeContext$1) || noTheme;
      }
      return noTheme;
    };
    var emptyObject = {};
    return function useStyles11(data2) {
      var isFirstMount = react.useRef(true);
      var context = react.useContext(JssContext);
      var theme = useTheme(data2 && data2.theme);
      var _useMemo = react.useMemo(function() {
        var newSheet = createStyleSheet({
          context,
          styles,
          name,
          theme,
          index: index2,
          sheetOptions
        });
        if (newSheet && context.isSSR) {
          manageSheet({
            index: index2,
            context,
            sheet: newSheet,
            theme
          });
        }
        return [newSheet, newSheet ? addDynamicRules(newSheet, data2) : null];
      }, [context, theme]), sheet = _useMemo[0], dynamicRules = _useMemo[1];
      getUseInsertionEffect(context.isSSR)(function() {
        if (sheet && dynamicRules && !isFirstMount.current) {
          updateDynamicRules(data2, sheet, dynamicRules);
        }
      }, [data2]);
      getUseInsertionEffect(context.isSSR)(function() {
        if (sheet) {
          manageSheet({
            index: index2,
            context,
            sheet,
            theme
          });
        }
        return function() {
          if (sheet) {
            unmanageSheet({
              index: index2,
              context,
              sheet,
              theme
            });
            if (dynamicRules) {
              removeDynamicRules(sheet, dynamicRules);
            }
          }
        };
      }, [sheet]);
      var classes = react.useMemo(function() {
        return sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : emptyObject;
      }, [sheet, dynamicRules]);
      react.useDebugValue(classes);
      react.useDebugValue(theme === noTheme ? "No theme" : theme);
      react.useEffect(function() {
        isFirstMount.current = false;
      });
      return classes;
    };
  };
});

// docs/snowpack/pkg/common/_commonjsHelpers-eb5a497e.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}

// docs/snowpack/pkg/common/index-5ea63421.js
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = Symbol.for("react.element");
var n = Symbol.for("react.portal");
var p = Symbol.for("react.fragment");
var q = Symbol.for("react.strict_mode");
var r = Symbol.for("react.profiler");
var t = Symbol.for("react.provider");
var u = Symbol.for("react.context");
var v = Symbol.for("react.forward_ref");
var w = Symbol.for("react.suspense");
var x = Symbol.for("react.memo");
var y = Symbol.for("react.lazy");
var z = Symbol.iterator;
function A(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = z && a[z] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var B = {isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
}};
var C = Object.assign;
var D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = true;
var I = Array.isArray;
var J = Object.prototype.hasOwnProperty;
var K = {current: null};
var L = {key: true, ref: true, __self: true, __source: true};
function M(a, b, e) {
  var d, c = {}, k = null, h = null;
  if (b != null)
    for (d in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
      J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (g === 1)
    c.children = e;
  else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++)
      f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      c[d] === void 0 && (c[d] = g[d]);
  return {$$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current};
}
function N(a, b) {
  return {$$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
}
function O(a) {
  return typeof a === "object" && a !== null && a.$$typeof === l;
}
function escape(a) {
  var b = {"=": "=0", ":": "=2"};
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if (k === "undefined" || k === "boolean")
    a = null;
  var h = false;
  if (a === null)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = d === "" ? "." + Q(h, 0) : d, I(c) ? (e = "", a != null && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : c != null && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = d === "" ? "." : d + ":";
  if (I(a))
    for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
  else if (f = A(a), typeof f === "function")
    for (a = f.call(a), g = 0; !(k = a.next()).done; )
      k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  else if (k === "object")
    throw b = String(a), Error("Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (a == null)
    return a;
  var d = [], c = 0;
  R(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T(a) {
  if (a._status === -1) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (a._status === 0 || a._status === -1)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (a._status === 0 || a._status === -1)
        a._status = 2, a._result = b2;
    });
    a._status === -1 && (a._status = 0, a._result = b);
  }
  if (a._status === 1)
    return a._result.default;
  throw a._result;
}
var U = {current: null};
var V = {transition: null};
var W = {ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K};
var Children = {map: S, forEach: function(a, b, e) {
  S(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
}};
var Component = E;
var Fragment = p;
var Profiler = r;
var PureComponent = G;
var StrictMode = q;
var Suspense = w;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
var cloneElement = function(a, b, e) {
  if (a === null || a === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
  if (b != null) {
    b.ref !== void 0 && (k = b.ref, h = K.current);
    b.key !== void 0 && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f in b)
      J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (f === 1)
    d.children = e;
  else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++)
      g[m] = arguments[m + 2];
    d.children = g;
  }
  return {$$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h};
};
var createContext = function(a) {
  a = {$$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null};
  a.Provider = {$$typeof: t, _context: a};
  return a.Consumer = a;
};
var createElement = M;
var createFactory = function(a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
var createRef = function() {
  return {current: null};
};
var forwardRef = function(a) {
  return {$$typeof: v, render: a};
};
var isValidElement = O;
var lazy = function(a) {
  return {$$typeof: y, _payload: {_status: -1, _result: a}, _init: T};
};
var memo = function(a, b) {
  return {$$typeof: x, type: a, compare: b === void 0 ? null : b};
};
var startTransition = function(a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
var unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
var useCallback = function(a, b) {
  return U.current.useCallback(a, b);
};
var useContext = function(a) {
  return U.current.useContext(a);
};
var useDebugValue = function() {
};
var useDeferredValue = function(a) {
  return U.current.useDeferredValue(a);
};
var useEffect = function(a, b) {
  return U.current.useEffect(a, b);
};
var useId = function() {
  return U.current.useId();
};
var useImperativeHandle = function(a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
var useInsertionEffect = function(a, b) {
  return U.current.useInsertionEffect(a, b);
};
var useLayoutEffect = function(a, b) {
  return U.current.useLayoutEffect(a, b);
};
var useMemo = function(a, b) {
  return U.current.useMemo(a, b);
};
var useReducer = function(a, b, e) {
  return U.current.useReducer(a, b, e);
};
var useRef = function(a) {
  return U.current.useRef(a);
};
var useState = function(a) {
  return U.current.useState(a);
};
var useSyncExternalStore = function(a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
var useTransition = function() {
  return U.current.useTransition();
};
var version = "18.2.0";
var react_production_min = {
  Children,
  Component,
  Fragment,
  Profiler,
  PureComponent,
  StrictMode,
  Suspense,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  startTransition,
  unstable_act,
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
  version
};
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// docs/snowpack/pkg/react.js
var useCallback2 = react.useCallback;
var useContext2 = react.useContext;
var useEffect2 = react.useEffect;
var useId2 = react.useId;
var useRef2 = react.useRef;
var useState2 = react.useState;

// docs/snowpack/pkg/react-dom/client.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  function f(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return a.length === 0 ? null : a[0];
  }
  function k(a) {
    if (a.length === 0)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m = 2 * (d + 1) - 1, C3 = a[m], n2 = m + 1, x2 = a[n2];
          if (0 > g(C3, c))
            n2 < e && 0 > g(x2, C3) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C3, a[m] = c, d = m);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p3 = Date, q2 = p3.now();
    exports.unstable_now = function() {
      return p3.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v3 = null, y2 = 3, z3 = false, A3 = false, B3 = false, D3 = typeof setTimeout === "function" ? setTimeout : null, E3 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G3(a) {
    for (var b = h(t2); b !== null; ) {
      if (b.callback === null)
        k(t2);
      else if (b.startTime <= a)
        k(t2), b.sortIndex = b.expirationTime, f(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H3(a) {
    B3 = false;
    G3(a);
    if (!A3)
      if (h(r2) !== null)
        A3 = true, I3(J2);
      else {
        var b = h(t2);
        b !== null && K3(H3, b.startTime - a);
      }
  }
  function J2(a, b) {
    A3 = false;
    B3 && (B3 = false, E3(L3), L3 = -1);
    z3 = true;
    var c = y2;
    try {
      G3(b);
      for (v3 = h(r2); v3 !== null && (!(v3.expirationTime > b) || a && !M3()); ) {
        var d = v3.callback;
        if (typeof d === "function") {
          v3.callback = null;
          y2 = v3.priorityLevel;
          var e = d(v3.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? v3.callback = e : v3 === h(r2) && k(r2);
          G3(b);
        } else
          k(r2);
        v3 = h(r2);
      }
      if (v3 !== null)
        var w2 = true;
      else {
        var m = h(t2);
        m !== null && K3(H3, m.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v3 = null, y2 = c, z3 = false;
    }
  }
  var N3 = false, O3 = null, L3 = -1, P3 = 5, Q3 = -1;
  function M3() {
    return exports.unstable_now() - Q3 < P3 ? false : true;
  }
  function R3() {
    if (O3 !== null) {
      var a = exports.unstable_now();
      Q3 = a;
      var b = true;
      try {
        b = O3(true, a);
      } finally {
        b ? S3() : (N3 = false, O3 = null);
      }
    } else
      N3 = false;
  }
  var S3;
  if (typeof F2 === "function")
    S3 = function() {
      F2(R3);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T3 = new MessageChannel(), U3 = T3.port2;
    T3.port1.onmessage = R3;
    S3 = function() {
      U3.postMessage(null);
    };
  } else
    S3 = function() {
      D3(R3, 0);
    };
  function I3(a) {
    O3 = a;
    N3 || (N3 = true, S3());
  }
  function K3(a, b) {
    L3 = D3(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A3 || z3 || (A3 = true, I3(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P3 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = {id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1};
    c > d ? (a.sortIndex = c, f(t2, a), h(r2) === null && a === h(t2) && (B3 ? (E3(L3), L3 = -1) : B3 = true, K3(H3, c - d))) : (a.sortIndex = e, f(r2, a), A3 || z3 || (A3 = true, I3(J2)));
    return a;
  };
  exports.unstable_shouldYield = M3;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function p2(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set();
var ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ja = Object.prototype.hasOwnProperty;
var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var la = {};
var ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (b === null || typeof b === "undefined" || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v2(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var z2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z2[a] = new v2(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z2[b] = new v2(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z2[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z2[a] = new v2(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z2[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z2[a] = new v2(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z2[a] = new v2(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z2[a] = new v2(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z2[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z2[b] = new v2(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z2[b] = new v2(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z2[b] = new v2(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z2[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
});
z2.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z2[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z2.hasOwnProperty(b) ? z2[b] : null;
  if (e !== null ? e.type !== 0 : d || !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N")
    qa(b, c, e, d) && (c = null), d || e === null ? oa(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var va = Symbol.for("react.element");
var wa = Symbol.for("react.portal");
var ya = Symbol.for("react.fragment");
var za = Symbol.for("react.strict_mode");
var Aa = Symbol.for("react.profiler");
var Ba = Symbol.for("react.provider");
var Ca = Symbol.for("react.context");
var Da = Symbol.for("react.forward_ref");
var Ea = Symbol.for("react.suspense");
var Fa = Symbol.for("react.suspense_list");
var Ga = Symbol.for("react.memo");
var Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var A2 = Object.assign;
var La;
function Ma(a) {
  if (La === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && typeof l2.stack === "string") {
      for (var e = l2.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, b !== null ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b === "function")
        return b.displayName || b.name || null;
      if (typeof b === "string")
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, {configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    }});
    Object.defineProperty(a, b, {enumerable: c.enumerable});
    return {getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    }};
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A2({}, b, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked});
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = {initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null};
}
function ab(a, b) {
  b = b.checked;
  b != null && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function cb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(p2(91));
  return A2({}, b, {value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue});
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(p2(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p2(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = {initialValue: Sa(c)};
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? kb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var mb;
var nb = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = rb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A2({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function ub(a, b) {
  if (b) {
    if (tb[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(p2(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(p2(60));
      if (typeof b.dangerouslySetInnerHTML !== "object" || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p2(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(p2(62));
  }
}
function vb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(p2(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, zb !== null || Ab !== null)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(p2(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    Mb = {};
    Object.defineProperty(Mb, "passive", {get: function() {
      Lb = true;
    }});
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
var Mb;
function Nb(a, b, c, d, e, f, g, h, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m) {
    this.onError(m);
  }
}
var Ob = false;
var Pb = null;
var Qb = false;
var Rb = null;
var Sb = {onError: function(a) {
  Ob = true;
  Pb = a;
}};
function Tb(a, b, c, d, e, f, g, h, k) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 4098) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function Wb(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p2(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (b === null)
      throw Error(p2(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return Xb(e), a;
        if (f === d)
          return Xb(e), b;
        f = f.sibling;
      }
      throw Error(p2(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p2(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p2(190));
  }
  if (c.tag !== 3)
    throw Error(p2(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return a !== null ? $b(a) : null;
}
function $b(a) {
  if (a.tag === 5 || a.tag === 6)
    return a;
  for (a = a.child; a !== null; ) {
    var b = $b(a);
    if (b !== null)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = scheduler.unstable_scheduleCallback;
var bc = scheduler.unstable_cancelCallback;
var cc = scheduler.unstable_shouldYield;
var dc = scheduler.unstable_requestPaint;
var B2 = scheduler.unstable_now;
var ec = scheduler.unstable_getCurrentPriorityLevel;
var fc = scheduler.unstable_ImmediatePriority;
var gc = scheduler.unstable_UserBlockingPriority;
var hc = scheduler.unstable_NormalPriority;
var ic = scheduler.unstable_LowPriority;
var jc = scheduler.unstable_IdlePriority;
var kc = null;
var lc = null;
function mc(a) {
  if (lc && typeof lc.onCommitFiberRoot === "function")
    try {
      lc.onCommitFiberRoot(kc, a, void 0, (a.current.flags & 128) === 128);
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc;
var pc = Math.log;
var qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return a === 0 ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64;
var sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return 0;
  var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
  if (g !== 0) {
    var h = g & ~e;
    h !== 0 ? d = tc(h) : (f &= g, f !== 0 && (d = tc(f)));
  } else
    g = c & ~e, g !== 0 ? d = tc(g) : f !== 0 && (d = tc(f));
  if (d === 0)
    return 0;
  if (b !== 0 && b !== d && (b & e) === 0 && (e = d & -d, f = b & -b, e >= f || e === 16 && (f & 4194240) !== 0))
    return b;
  (d & 4) !== 0 && (d |= c & 16);
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
    var g = 31 - oc(f), h = 1 << g, k = e[g];
    if (k === -1) {
      if ((h & c) === 0 || (h & d) !== 0)
        e[g] = vc(h, b);
    } else
      k <= b && (a.expiredLanes |= h);
    f &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  (rc & 4194240) === 0 && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  b !== 536870912 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C2 = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? (a & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Ec;
var Fc;
var Gc;
var Hc;
var Ic;
var Jc = false;
var Kc = [];
var Lc = null;
var Mc = null;
var Nc = null;
var Oc = new Map();
var Pc = new Map();
var Qc = [];
var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = {blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e]}, b !== null && (b = Cb(b), b !== null && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (b !== null) {
    var c = Vb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = Wb(c), b !== null) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (b === 3 && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c === null) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), b !== null && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  Lc !== null && Xc(Lc) && (Lc = null);
  Mc !== null && Xc(Mc) && (Mc = null);
  Nc !== null && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  Lc !== null && ad(Lc, a);
  Mc !== null && ad(Mc, a);
  Nc !== null && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], c.blockedOn === null); )
    Vc(c), c.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig;
var dd = true;
function ed(a, b, c, d) {
  var e = C2, f = cd.transition;
  cd.transition = null;
  try {
    C2 = 1, fd(a, b, c, d);
  } finally {
    C2 = e, cd.transition = f;
  }
}
function gd(a, b, c, d) {
  var e = C2, f = cd.transition;
  cd.transition = null;
  try {
    C2 = 4, fd(a, b, c, d);
  } finally {
    C2 = e, cd.transition = f;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (e === null)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; e !== null; ) {
        var f = Cb(e);
        f !== null && Ec(f);
        f = Yc(a, b, c, d);
        f === null && hd(a, b, d, id, c);
        if (f === e)
          break;
        e = f;
      }
      e !== null && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (a !== null)
    if (b = Vb(a), b === null)
      a = null;
    else if (c = b.tag, c === 13) {
      a = Wb(b);
      if (a !== null)
        return a;
      a = null;
    } else if (c === 3) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return b.tag === 3 ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A2(b.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = A2({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = A2({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = A2({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = A2({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = A2({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = A2({}, sd, {clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = A2({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A2({}, ud, {key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = A2({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = A2({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = A2({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = A2({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = ia && "CompositionEvent" in window;
var be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be;
var de = ia && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({event: c, listeners: b}));
}
var pe = null;
var qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (ia) {
  if (ia) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return {node: c, offset: b - a};
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (d !== null && Ne(c)) {
      if (b = d.start, a = d.end, a === void 0 && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f = Math.min(d.start, e);
        d = d.end === void 0 ? f : Math.min(d.end, e);
        !a.extend && f > d && (e = d, d = f, f = e);
        e = Ke(c, f);
        var g = Ke(c, d);
        e && g && (a.rangeCount !== 1 || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      a.nodeType === 1 && b.push({element: a, left: a.scrollLeft, top: a.scrollTop});
    typeof c.focus === "function" && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {start: d.selectionStart, end: d.selectionEnd} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset}), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({event: b, listeners: d}), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = {animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd")};
var Xe = {};
var Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend");
var af = Ze("animationiteration");
var bf = Ze("animationstart");
var cf = Ze("transitionend");
var df = new Map();
var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
var hf;
var jf;
var kf;
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f = k;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D2(a, b) {
  var c = b[of];
  c === void 0 && (c = b[of] = new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      b2 !== "selectionchange" && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = a.nodeType === 9 ? a : a.ownerDocument;
    b === null || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, {capture: true, passive: e}) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, {passive: e}) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = Wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (h2 !== void 0) {
        var k2 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k2 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k2 = Hd;
            break;
          case cf:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var t2 = (b & 4) !== 0, J2 = !t2 && a === "scroll", x2 = t2 ? h2 !== null ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; w2 !== null; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          u2.tag === 5 && F2 !== null && (u2 = F2, x2 !== null && (F2 = Kb(w2, x2), F2 != null && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k2(h2, n2, null, c, e2), g2.push({event: h2, listeners: t2}));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (n2 = c.relatedTarget || c.toElement, k2 = d2, n2 = n2 ? Wc(n2) : null, n2 !== null && (J2 = Vb(n2), n2 !== J2 || n2.tag !== 5 && n2.tag !== 6))
              n2 = null;
          } else
            k2 = null, n2 = d2;
          if (k2 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if (a === "pointerout" || a === "pointerover")
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = k2 == null ? h2 : ue(k2);
            u2 = n2 == null ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k2, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k2 && n2)
              b: {
                t2 = k2;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || x2 !== null && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            k2 !== null && wf(g2, h2, k2, t2, false);
            n2 !== null && J2 !== null && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        a === "focusout" && (xa = h2._wrapperState) && xa.controlled && h2.type === "number" && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || xa.contentEditable === "true")
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (ba = "onCompositionStart");
      ba && (de && c.locale !== "ko" && (ie || ba !== "onCompositionStart" ? ba === "onCompositionEnd" && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({event: ba, listeners: xa}), $a ? ba.data = $a : ($a = he(c), $a !== null && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({event: e2, listeners: d2}), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return {instance: a, listener: b, currentTarget: c};
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Kb(a, c), f != null && d.unshift(tf(a, f, e)), f = Kb(a, b), f != null && d.push(tf(a, f, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l2 = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l2 !== null && (h = l2, e ? (k = Kb(c, f), k != null && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), k != null && g.push(tf(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({event: b, listeners: g});
}
var xf = /\r\n?/g;
var yf = /\u0000|\uFFFD/g;
function zf(a) {
  return (typeof a === "string" ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p2(425));
}
function Bf() {
}
var Cf = null;
var Df = null;
function Ef(a, b) {
  return a === "textarea" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var Ff = typeof setTimeout === "function" ? setTimeout : void 0;
var Gf = typeof clearTimeout === "function" ? clearTimeout : void 0;
var Hf = typeof Promise === "function" ? Promise : void 0;
var Jf = typeof queueMicrotask === "function" ? queueMicrotask : typeof Hf !== "undefined" ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && e.nodeType === 8)
      if (c = e.data, c === "/$") {
        if (d === 0) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        c !== "$" && c !== "$?" && c !== "$!" || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
    if (b === 8) {
      b = a.data;
      if (b === "$" || b === "$!" || b === "$?")
        break;
      if (b === "/$")
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2);
var Of = "__reactFiber$" + Nf;
var Pf = "__reactProps$" + Nf;
var uf = "__reactContainer$" + Nf;
var of = "__reactEvents$" + Nf;
var Qf = "__reactListeners$" + Nf;
var Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = Mf(a); a !== null; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(p2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [];
var Tf = -1;
function Uf(a) {
  return {current: a};
}
function E2(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G2(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {};
var H2 = Uf(Vf);
var Wf = Uf(false);
var Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function $f() {
  E2(Wf);
  E2(H2);
}
function ag(a, b, c) {
  if (H2.current !== Vf)
    throw Error(p2(168));
  G2(H2, b);
  G2(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p2(108, Ra(a) || "Unknown", e));
  return A2({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H2.current;
  G2(H2, a);
  G2(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p2(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E2(Wf), E2(H2), G2(H2, a)) : E2(Wf);
  G2(Wf, c);
}
var eg = null;
var fg = false;
var gg = false;
function hg(a) {
  eg === null ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && eg !== null) {
    gg = true;
    var a = 0, b = C2;
    try {
      var c = eg;
      for (C2 = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (d !== null);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw eg !== null && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C2 = b, gg = false;
    }
  }
  return null;
}
var kg = [];
var lg = 0;
var mg = null;
var ng = 0;
var og = [];
var pg = 0;
var qg = null;
var rg = 1;
var sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - oc(b) + e;
  if (30 < f) {
    var g = e - e % 5;
    f = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f + a;
  } else
    rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
  a.return !== null && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null;
var yg = null;
var I2 = false;
var zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  b === null ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = b.nodeType !== 8 ? null : b, b !== null ? (c = qg !== null ? {id: rg, overflow: sg} : null, a.memoizedState = {dehydrated: b, treeContext: c, retryLane: 1073741824}, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
}
function Eg(a) {
  if (I2) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p2(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I2 = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p2(418));
      a.flags = a.flags & -4097 | 2;
      I2 = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I2)
    return Fg(a), I2 = true, false;
  var b;
  (b = a.tag !== 3) && !(b = a.tag !== 5) && (b = a.type, b = b !== "head" && b !== "body" && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p2(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(p2(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I2 = false;
}
function Jg(a) {
  zg === null ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A2({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null);
var Ng = null;
var Og = null;
var Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E2(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; a !== null; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, d !== null && (d.childLanes |= b)) : d !== null && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = {context: a, memoizedValue: b, next: null}, Og === null) {
      if (Ng === null)
        throw Error(p2(308));
      Og = a;
      Ng.dependencies = {lanes: 0, firstContext: a};
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  Wg === null ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  e === null ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = {baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, interleaved: null, lanes: 0}, effects: null};
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects});
}
function ch(a, b) {
  return {eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null};
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (d === null)
    return null;
  d = d.shared;
  if ((K2 & 2) !== 0) {
    var e = d.pending;
    e === null ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  e === null ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (b !== null && (b = b.shared, (c & 4194240) !== 0)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = {eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null};
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = {baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects};
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l2 = k.next;
    k.next = null;
    g === null ? f = l2 : g.next = l2;
    g = k;
    var m = a.alternate;
    m !== null && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (h === null ? m.firstBaseUpdate = l2 : h.next = l2, m.lastBaseUpdate = k));
  }
  if (f !== null) {
    var q2 = e.baseState;
    g = 0;
    m = l2 = k = null;
    h = f;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        m !== null && (m = m.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if (typeof n2 === "function") {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = typeof n2 === "function" ? n2.call(y2, q2, r2) : n2;
              if (r2 === null || r2 === void 0)
                break a;
              q2 = A2({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        h.callback !== null && h.lane !== 0 && (a.flags |= 64, r2 = e.effects, r2 === null ? e.effects = [h] : r2.push(h));
      } else
        y2 = {eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null}, m === null ? (l2 = m = y2, k = q2) : m = m.next = y2, g |= r2;
      h = h.next;
      if (h === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    m === null && (k = q2);
    e.baseState = k;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m;
    b = e.shared.interleaved;
    if (b !== null) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      f === null && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(p2(191, e));
        e.call(d);
      }
    }
}
var jh = new react.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : A2({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var nh = {isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L2(), e = lh(a), f = ch(d, e);
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  b = dh(a, f, e);
  b !== null && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L2(), e = lh(a), f = ch(d, e);
  f.tag = 1;
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  b = dh(a, f, e);
  b !== null && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L2(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  b = dh(a, e, d);
  b !== null && (mh(b, a, d, c), eh(b, a, d));
}};
function oh(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = Vg(f) : (e = Zf(b) ? Xf : H2.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Yf(a, e) : Vf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = Vg(f) : (f = Zf(b) ? Xf : H2.current, e.context = Yf(a, f));
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (kh(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(p2(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p2(147, a));
      var e = d, f = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === f)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        a2 === null ? delete b2[f] : b2[f] = a2;
      };
      b._stringRef = f;
      return b;
    }
    if (typeof a !== "string")
      throw Error(p2(284));
    if (!c._owner)
      throw Error(p2(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p2(31, a === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      d2 === null ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    var f2 = c2.type;
    if (f2 === ya)
      return m(a2, b2, c2.props.children, d2, c2.key);
    if (b2 !== null && (b2.elementType === f2 || typeof f2 === "object" && f2 !== null && f2.$$typeof === Ha && uh(f2) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Ah(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if (typeof b2 === "string" && b2 !== "" || typeof b2 === "number")
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" && c2 !== "" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(a2, b2, e2(c2._payload), d2);
      }
      if (eb(c2) || Ka(c2))
        return e2 !== null ? null : m(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" && d2 !== "" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, k(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f2 = d2._init;
          return y2(a2, b2, c2, f2(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k2) {
    for (var l3 = null, m2 = null, u2 = g2, w2 = g2 = 0, x2 = null; u2 !== null && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k2);
      if (n3 === null) {
        u2 === null && (u2 = x2);
        break;
      }
      a && u2 && n3.alternate === null && b(e2, u2);
      g2 = f(n3, g2, w2);
      m2 === null ? l3 = n3 : m2.sibling = n3;
      m2 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I2 && tg(e2, w2), l3;
    if (u2 === null) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k2), u2 !== null && (g2 = f(u2, g2, w2), m2 === null ? l3 = u2 : m2.sibling = u2, m2 = u2);
      I2 && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k2), x2 !== null && (a && x2.alternate !== null && u2.delete(x2.key === null ? w2 : x2.key), g2 = f(x2, g2, w2), m2 === null ? l3 = x2 : m2.sibling = x2, m2 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I2 && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k2) {
    var l3 = Ka(h2);
    if (typeof l3 !== "function")
      throw Error(p2(150));
    h2 = l3.call(h2);
    if (h2 == null)
      throw Error(p2(151));
    for (var u2 = l3 = null, m2 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); m2 !== null && !n3.done; w2++, n3 = h2.next()) {
      m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
      var t3 = r2(e2, m2, n3.value, k2);
      if (t3 === null) {
        m2 === null && (m2 = x2);
        break;
      }
      a && m2 && t3.alternate === null && b(e2, m2);
      g2 = f(t3, g2, w2);
      u2 === null ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m2 = x2;
    }
    if (n3.done)
      return c(e2, m2), I2 && tg(e2, w2), l3;
    if (m2 === null) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k2), n3 !== null && (g2 = f(n3, g2, w2), u2 === null ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I2 && tg(e2, w2);
      return l3;
    }
    for (m2 = d(e2, m2); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m2, e2, w2, n3.value, k2), n3 !== null && (a && n3.alternate !== null && m2.delete(n3.key === null ? w2 : n3.key), g2 = f(n3, g2, w2), u2 === null ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m2.forEach(function(a2) {
      return b(e2, a2);
    });
    I2 && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f2, h2) {
    typeof f2 === "object" && f2 !== null && f2.type === ya && f2.key === null && (f2 = f2.props.children);
    if (typeof f2 === "object" && f2 !== null) {
      switch (f2.$$typeof) {
        case va:
          a: {
            for (var k2 = f2.key, l3 = d2; l3 !== null; ) {
              if (l3.key === k2) {
                k2 = f2.type;
                if (k2 === ya) {
                  if (l3.tag === 7) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f2.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k2 || typeof k2 === "object" && k2 !== null && k2.$$typeof === Ha && uh(k2) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f2.props);
                  d2.ref = sh(a2, l3, f2);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f2.type === ya ? (d2 = Ah(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = yh(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f2.key; d2 !== null; ) {
              if (d2.key === l3)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f2._init, J2(a2, d2, l3(f2._payload), h2);
      }
      if (eb(f2))
        return n2(a2, d2, f2, h2);
      if (Ka(f2))
        return t2(a2, d2, f2, h2);
      th(a2, f2);
    }
    return typeof f2 === "string" && f2 !== "" || typeof f2 === "number" ? (f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true);
var Ch = vh(false);
var Dh = {};
var Eh = Uf(Dh);
var Fh = Uf(Dh);
var Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p2(174));
  return a;
}
function Ih(a, b) {
  G2(Gh, b);
  G2(Fh, a);
  G2(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E2(Eh);
  G2(Eh, b);
}
function Jh() {
  E2(Eh);
  E2(Fh);
  E2(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G2(Fh, a), G2(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E2(Eh), E2(Fh));
}
var M2 = Uf(0);
function Mh(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 128) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher;
var Qh = ua.ReactCurrentBatchConfig;
var Rh = 0;
var N2 = null;
var O2 = null;
var P2 = null;
var Sh = false;
var Th = false;
var Uh = 0;
var Vh = 0;
function Q2() {
  throw Error(p2(321));
}
function Wh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f) {
  Rh = f;
  N2 = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = a === null || a.memoizedState === null ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f)
        throw Error(p2(301));
      f += 1;
      P2 = O2 = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = O2 !== null && O2.next !== null;
  Rh = 0;
  P2 = O2 = N2 = null;
  Sh = false;
  if (b)
    throw Error(p2(300));
  return a;
}
function bi() {
  var a = Uh !== 0;
  Uh = 0;
  return a;
}
function ci() {
  var a = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  P2 === null ? N2.memoizedState = P2 = a : P2 = P2.next = a;
  return P2;
}
function di() {
  if (O2 === null) {
    var a = N2.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = O2.next;
  var b = P2 === null ? N2.memoizedState : P2.next;
  if (b !== null)
    P2 = b, O2 = a;
  else {
    if (a === null)
      throw Error(p2(310));
    O2 = a;
    a = {memoizedState: O2.memoizedState, baseState: O2.baseState, baseQueue: O2.baseQueue, queue: O2.queue, next: null};
    P2 === null ? N2.memoizedState = P2 = a : P2 = P2.next = a;
  }
  return P2;
}
function ei(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (c === null)
    throw Error(p2(311));
  c.lastRenderedReducer = a;
  var d = O2, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    f = e.next;
    d = d.baseState;
    var h = g = null, k = null, l2 = f;
    do {
      var m = l2.lane;
      if ((Rh & m) === m)
        k !== null && (k = k.next = {lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null}), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k === null ? (h = k = q2, g = d) : k = k.next = q2;
        N2.lanes |= m;
        hh |= m;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f);
    k === null ? g = d : k.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (a !== null) {
    e = a;
    do
      f = e.lane, N2.lanes |= f, hh |= f, e = e.next;
    while (e !== a);
  } else
    e === null && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (c === null)
    throw Error(p2(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (Ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function hi() {
}
function ii(a, b) {
  var c = N2, d = di(), e = b(), f = !He(d.memoizedState, e);
  f && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f || P2 !== null && P2.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (R2 === null)
      throw Error(p2(349));
    (Rh & 30) !== 0 || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = {getSnapshot: b, value: c};
  b = N2.updateQueue;
  b === null ? (b = {lastEffect: null, stores: null}, N2.updateQueue = b, b.stores = [a]) : (c = b.stores, c === null ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  b !== null && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a};
  b.queue = a;
  a = a.dispatch = ri.bind(null, N2, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = {tag: a, create: b, destroy: c, deps: d, next: null};
  b = N2.updateQueue;
  b === null ? (b = {lastEffect: null, stores: null}, N2.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N2.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, d === void 0 ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (O2 !== null) {
    var g = O2.memoizedState;
    f = g.destroy;
    if (d !== null && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f, d);
      return;
    }
  }
  N2.flags |= a;
  e.memoizedState = li(1 | b, c, f, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if ((Rh & 21) === 0)
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N2.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C2;
  C2 = c !== 0 && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C2 = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = {lane: d, action: c, hasEagerState: false, eagerState: null, next: null};
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), c !== null) {
    var e = L2();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = {lane: d, action: c, hasEagerState: false, eagerState: null, next: null};
  if (Hi(a))
    Ii(b, e);
  else {
    var f = a.alternate;
    if (a.lanes === 0 && (f === null || f.lanes === 0) && (f = b.lastRenderedReducer, f !== null))
      try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          k === null ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    c !== null && (e = L2(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N2 || b !== null && b === N2;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  c === null ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if ((c & 4194240) !== 0) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = {readContext: Vg, useCallback: Q2, useContext: Q2, useEffect: Q2, useImperativeHandle: Q2, useInsertionEffect: Q2, useLayoutEffect: Q2, useMemo: Q2, useReducer: Q2, useRef: Q2, useState: Q2, useDebugValue: Q2, useDeferredValue: Q2, useTransition: Q2, useMutableSource: Q2, useSyncExternalStore: Q2, useId: Q2, unstable_isNewReconciler: false};
var Yh = {readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return ti(4194308, 4, yi.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = {pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b};
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N2, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = {current: a};
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N2, e = ci();
  if (I2) {
    if (c === void 0)
      throw Error(p2(407));
    c = c();
  } else {
    c = b();
    if (R2 === null)
      throw Error(p2(349));
    (Rh & 30) !== 0 || ni(d, b, c);
  }
  e.memoizedState = c;
  var f = {value: c, getSnapshot: b};
  e.queue = f;
  vi(ki.bind(null, d, f, a), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R2.identifierPrefix;
  if (I2) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false};
var Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O2.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
};
var $h = {readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return O2 === null ? b.memoizedState = a : Di(b, O2.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false};
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {value: a, source: b, stack: e, digest: null};
}
function Li(a, b, c) {
  return {value: a, source: null, stack: c != null ? c : null, digest: b != null ? b : null};
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = typeof WeakMap === "function" ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = {element: null};
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    Mi(a, b);
    typeof d !== "function" && (Si === null ? Si = new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, {componentStack: c2 !== null ? c2 : ""});
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (d === null) {
    d = a.pingCache = new Ni();
    var e = new Set();
    d.set(b, e);
  } else
    e = d.get(b), e === void 0 && (e = new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = a.tag === 13)
      b = a.memoizedState, b = b !== null ? b.dehydrated !== null ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (a !== null);
  return null;
}
function Wi(a, b, c, d, e) {
  if ((a.mode & 1) === 0)
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, c.tag === 1 && (c.alternate === null ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner;
var Ug = false;
function Yi(a, b, c, d) {
  b.child = a === null ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f, e);
  c = bi();
  if (a !== null && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I2 && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (a === null) {
    var f = c.type;
    if (typeof f === "function" && !bj(f) && f.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = f, cj(a, b, f, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f = a.child;
  if ((a.lanes & e) === 0) {
    var g = f.memoizedProps;
    c = c.compare;
    c = c !== null ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (a !== null) {
    var f = a.memoizedProps;
    if (Ie(f, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f, (a.lanes & e) !== 0)
        (a.flags & 131072) !== 0 && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden")
    if ((b.mode & 1) === 0)
      b.memoizedState = {baseLanes: 0, cachePool: null, transitions: null}, G2(fj, gj), gj |= c;
    else {
      if ((c & 1073741824) === 0)
        return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {baseLanes: a, cachePool: null, transitions: null}, b.updateQueue = null, G2(fj, gj), gj |= a, null;
      b.memoizedState = {baseLanes: 0, cachePool: null, transitions: null};
      d = f !== null ? f.baseLanes : c;
      G2(fj, gj);
      gj |= d;
    }
  else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G2(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f = Zf(c) ? Xf : H2.current;
  f = Yf(b, f);
  Tg(b, e);
  c = Xh(a, b, c, d, f, e);
  d = bi();
  if (a !== null && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I2 && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f = true;
    cg(b);
  } else
    f = false;
  Tg(b, e);
  if (b.stateNode === null)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l2 = c.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H2.current, l2 = Yf(b, l2));
    var m = c.getDerivedStateFromProps, q2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    q2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k = b.memoizedState;
    h !== d || r2 !== k || Wf.current || $g ? (typeof m === "function" && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k, l2)) ? (q2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4194308)) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = Vg(k) : (k = Zf(c) ? Xf : H2.current, k = Yf(b, k));
    var y2 = c.getDerivedStateFromProps;
    (m = typeof y2 === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== q2 || r2 !== k) && qh(b, g, d, k);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? (typeof y2 === "function" && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k) || false) ? (m || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, n2, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, n2, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 1024)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k, d = l2) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f, e);
}
function kj(a, b, c, d, e, f) {
  hj(a, b);
  var g = (b.flags & 128) !== 0;
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f);
  d = b.stateNode;
  Xi.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = {dehydrated: null, treeContext: null, retryLane: 0};
function oj(a) {
  return {baseLanes: a, cachePool: null, transitions: null};
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M2.current, f = false, g = (b.flags & 128) !== 0, h;
  (h = g) || (h = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  if (h)
    f = true, b.flags &= -129;
  else if (a === null || a.memoizedState !== null)
    e |= 1;
  G2(M2, e & 1);
  if (a === null) {
    Eg(b);
    a = b.memoizedState;
    if (a !== null && (a = a.dehydrated, a !== null))
      return (b.mode & 1) === 0 ? b.lanes = 1 : a.data === "$!" ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f ? (d = b.mode, f = b.child, g = {mode: "hidden", children: g}, (d & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (e !== null && (h = e.dehydrated, h !== null))
    return sj(a, b, g, d, h, e, c);
  if (f) {
    f = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k = {mode: "hidden", children: d.children};
    (g & 1) === 0 && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
    h !== null ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
    f.return = b;
    d.return = b;
    d.sibling = f;
    b.child = d;
    d = f;
    f = b.child;
    g = a.child.memoizedState;
    g = g === null ? oj(c) : {baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions};
    f.memoizedState = g;
    f.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f = a.child;
  a = f.sibling;
  d = wh(f, {mode: "visible", children: d.children});
  (b.mode & 1) === 0 && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  a !== null && (c = b.deletions, c === null ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({mode: "visible", children: b}, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  d !== null && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p2(422))), tj(a, b, g, d);
    if (b.memoizedState !== null)
      return b.child = a.child, b.flags |= 128, null;
    f = d.fallback;
    e = b.mode;
    d = qj({mode: "visible", children: d.children}, e, 0, null);
    f = Ah(f, e, g, null);
    f.flags |= 2;
    d.return = b;
    f.return = b;
    d.sibling = f;
    b.child = d;
    (b.mode & 1) !== 0 && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f;
  }
  if ((b.mode & 1) === 0)
    return tj(a, b, g, null);
  if (e.data === "$!") {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f = Error(p2(419));
    d = Li(f, d, void 0);
    return tj(a, b, g, d);
  }
  h = (g & a.childLanes) !== 0;
  if (Ug || h) {
    d = R2;
    if (d !== null) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = (e & (d.suspendedLanes | g)) !== 0 ? 0 : e;
      e !== 0 && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p2(421)));
    return tj(a, b, g, d);
  }
  if (e.data === "$?")
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I2 = true;
  zg = null;
  a !== null && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  d !== null && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f = a.memoizedState;
  f === null ? a.memoizedState = {isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e} : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  Yi(a, b, d.children, c);
  d = M2.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (a !== null && (a.flags & 128) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && wj(a, c, b);
          else if (a.tag === 19)
            wj(a, c, b);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G2(M2, d);
  if ((b.mode & 1) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && Mh(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && Mh(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  (b.mode & 1) === 0 && a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if ((c & b.childLanes) === 0)
    return null;
  if (a !== null && b.child !== a.child)
    throw Error(p2(153));
  if (b.child !== null) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; a.sibling !== null; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G2(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (d !== null) {
        if (d.dehydrated !== null)
          return G2(M2, M2.current & 1), b.flags |= 128, null;
        if ((c & b.child.childLanes) !== 0)
          return pj(a, b, c);
        G2(M2, M2.current & 1);
        a = $i(a, b, c);
        return a !== null ? a.sibling : null;
      }
      G2(M2, M2.current & 1);
      break;
    case 19:
      d = (c & b.childLanes) !== 0;
      if ((a.flags & 128) !== 0) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G2(M2, M2.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj;
var Bj;
var Cj;
var Dj;
Aj = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "select":
        e = A2({}, e, {value: void 0});
        d = A2({}, d, {value: void 0});
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && e[l2] != null)
        if (l2 === "style") {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
    for (l2 in d) {
      var k = d[l2];
      h = e != null ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k !== h && (k != null || h != null))
        if (l2 === "style")
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l2, c)), c = k;
        else
          l2 === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l2, k)) : l2 === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l2, "" + k) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k != null && l2 === "onScroll" && D2("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l2, k));
    }
    c && (f = f || []).push("style", c);
    var l2 = f;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I2)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S2(a) {
  var b = a.alternate !== null && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; e !== null; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; e !== null; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S2(b), null;
    case 1:
      return Zf(b.type) && $f(), S2(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E2(Wf);
      E2(H2);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        Gg(b) ? b.flags |= 4 : a === null || a.memoizedState.isDehydrated && (b.flags & 256) === 0 || (b.flags |= 1024, zg !== null && (Gj(zg), zg = null));
      Bj(a, b);
      S2(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(p2(166));
          S2(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f;
          a = (b.mode & 1) !== 0;
          switch (c) {
            case "dialog":
              D2("cancel", d);
              D2("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D2("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D2(lf[e], d);
              break;
            case "source":
              D2("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D2("error", d);
              D2("load", d);
              break;
            case "details":
              D2("toggle", d);
              break;
            case "input":
              Za(d, f);
              D2("invalid", d);
              break;
            case "select":
              d._wrapperState = {wasMultiple: !!f.multiple};
              D2("invalid", d);
              break;
            case "textarea":
              hb(d, f), D2("invalid", d);
          }
          ub(c, f);
          e = null;
          for (var g in f)
            if (f.hasOwnProperty(g)) {
              var h = f[g];
              g === "children" ? typeof h === "string" ? d.textContent !== h && (f.suppressHydrationWarning !== true && Af(d.textContent, h, a), e = ["children", h]) : typeof h === "number" && d.textContent !== "" + h && (f.suppressHydrationWarning !== true && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && h != null && g === "onScroll" && D2("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === "http://www.w3.org/1999/xhtml" && (a = kb(c));
          a === "http://www.w3.org/1999/xhtml" ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, {is: d.is}) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D2("cancel", a);
                D2("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D2("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D2(lf[e], a);
                e = d;
                break;
              case "source":
                D2("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D2("error", a);
                D2("load", a);
                e = d;
                break;
              case "details":
                D2("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D2("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = {wasMultiple: !!d.multiple};
                e = A2({}, d, {value: void 0});
                D2("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D2("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f in h)
              if (h.hasOwnProperty(f)) {
                var k = h[f];
                f === "style" ? sb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && nb(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && ob(a, k) : typeof k === "number" && ob(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ea.hasOwnProperty(f) ? k != null && f === "onScroll" && D2("scroll", a) : k != null && ta(a, f, k, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                d.value != null && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
                break;
              default:
                typeof e.onClick === "function" && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 512, b.flags |= 2097152);
      }
      S2(b);
      return null;
    case 6:
      if (a && b.stateNode != null)
        Dj(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(p2(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f = d.nodeValue !== c) {
            if (a = xg, a !== null)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, (a.mode & 1) !== 0);
                  break;
                case 5:
                  a.memoizedProps.suppressHydrationWarning !== true && Af(d.nodeValue, c, (a.mode & 1) !== 0);
              }
          }
          f && (b.flags |= 4);
        } else
          d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S2(b);
      return null;
    case 13:
      E2(M2);
      d = b.memoizedState;
      if (a === null || a.memoizedState !== null && a.memoizedState.dehydrated !== null) {
        if (I2 && yg !== null && (b.mode & 1) !== 0 && (b.flags & 128) === 0)
          Hg(), Ig(), b.flags |= 98560, f = false;
        else if (f = Gg(b), d !== null && d.dehydrated !== null) {
          if (a === null) {
            if (!f)
              throw Error(p2(318));
            f = b.memoizedState;
            f = f !== null ? f.dehydrated : null;
            if (!f)
              throw Error(p2(317));
            f[Of] = b;
          } else
            Ig(), (b.flags & 128) === 0 && (b.memoizedState = null), b.flags |= 4;
          S2(b);
          f = false;
        } else
          zg !== null && (Gj(zg), zg = null), f = true;
        if (!f)
          return b.flags & 65536 ? b : null;
      }
      if ((b.flags & 128) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      d !== (a !== null && a.memoizedState !== null) && d && (b.child.flags |= 8192, (b.mode & 1) !== 0 && (a === null || (M2.current & 1) !== 0 ? T2 === 0 && (T2 = 3) : uj()));
      b.updateQueue !== null && (b.flags |= 4);
      S2(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), a === null && sf(b.stateNode.containerInfo), S2(b), null;
    case 10:
      return Rg(b.type._context), S2(b), null;
    case 17:
      return Zf(b.type) && $f(), S2(b), null;
    case 19:
      E2(M2);
      f = b.memoizedState;
      if (f === null)
        return S2(b), null;
      d = (b.flags & 128) !== 0;
      g = f.rendering;
      if (g === null)
        if (d)
          Ej(f, false);
        else {
          if (T2 !== 0 || a !== null && (a.flags & 128) !== 0)
            for (a = b.child; a !== null; ) {
              g = Mh(a);
              if (g !== null) {
                b.flags |= 128;
                Ej(f, false);
                d = g.updateQueue;
                d !== null && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : {lanes: a.lanes, firstContext: a.firstContext}), c = c.sibling;
                G2(M2, M2.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          f.tail !== null && B2() > Hj && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), a !== null) {
            if (b.flags |= 128, d = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Ej(f, true), f.tail === null && f.tailMode === "hidden" && !g.alternate && !I2)
              return S2(b), null;
          } else
            2 * B2() - f.renderingStartTime > Hj && c !== 1073741824 && (b.flags |= 128, d = true, Ej(f, false), b.lanes = 4194304);
        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, c !== null ? c.sibling = g : b.child = g, f.last = g);
      }
      if (f.tail !== null)
        return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B2(), b.sibling = null, c = M2.current, G2(M2, d ? c & 1 | 2 : c & 1), b;
      S2(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = b.memoizedState !== null, a !== null && a.memoizedState !== null !== d && (b.flags |= 8192), d && (b.mode & 1) !== 0 ? (gj & 1073741824) !== 0 && (S2(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S2(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p2(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E2(Wf), E2(H2), Oh(), a = b.flags, (a & 65536) !== 0 && (a & 128) === 0 ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E2(M2);
      a = b.memoizedState;
      if (a !== null && a.dehydrated !== null) {
        if (b.alternate === null)
          throw Error(p2(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E2(M2), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false;
var U2 = false;
var Lj = typeof WeakSet === "function" ? WeakSet : Set;
var V2 = null;
function Mj(a, b) {
  var c = a.ref;
  if (c !== null)
    if (typeof c === "function")
      try {
        c(null);
      } catch (d) {
        W2(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W2(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = {start: a.selectionStart, end: a.selectionEnd};
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && d.rangeCount !== 0) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l2 = 0, m = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || e !== 0 && q2.nodeType !== 3 || (h = g + e);
                q2 !== f || d !== 0 && q2.nodeType !== 3 || (k = g + d);
                q2.nodeType === 3 && (g += q2.nodeValue.length);
                if ((y2 = q2.firstChild) === null)
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f && ++m === d && (k = g);
                if ((y2 = q2.nextSibling) !== null)
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = h === -1 || k === -1 ? null : {start: h, end: k};
        } else
          c = null;
      }
    c = c || {start: 0, end: 0};
  } else
    c = null;
  Df = {focusedElem: a, selectionRange: c};
  dd = false;
  for (V2 = b; V2 !== null; )
    if (b = V2, a = b.child, (b.subtreeFlags & 1028) !== 0 && a !== null)
      a.return = b, V2 = a;
    else
      for (; V2 !== null; ) {
        b = V2;
        try {
          var n2 = b.alternate;
          if ((b.flags & 1024) !== 0)
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (n2 !== null) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                u2.nodeType === 1 ? u2.textContent = "" : u2.nodeType === 9 && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
        } catch (F2) {
          W2(b, b.return, F2);
        }
        a = b.sibling;
        if (a !== null) {
          a.return = b.return;
          V2 = a;
          break;
        }
        V2 = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = d !== null ? d.lastEffect : null;
  if (d !== null) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f = e.destroy;
        e.destroy = void 0;
        f !== void 0 && Nj(b, c, f);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = b !== null ? b.lastEffect : null;
  if (b !== null) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (b !== null) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    typeof b === "function" ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  b !== null && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  a.tag === 5 && (b = a.stateNode, b !== null && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; a.sibling === null; ) {
        if (a.return === null || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; a.tag !== 5 && a.tag !== 6 && a.tag !== 18; ) {
        if (a.flags & 2)
          continue a;
        if (a.child === null || a.tag === 4)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (d === 5 || d === 6)
    a = a.stateNode, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = Bf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (Wj(a, b, c), a = a.sibling; a !== null; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (d === 5 || d === 6)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (Xj(a, b, c), a = a.sibling; a !== null; )
      Xj(a, b, c), a = a.sibling;
}
var X = null;
var Yj = false;
function Zj(a, b, c) {
  for (c = c.child; c !== null; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && typeof lc.onCommitFiberUnmount === "function")
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U2 || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      X !== null && (Yj ? (a = X, c = c.stateNode, a.nodeType === 8 ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      X !== null && (Yj ? (a = X, c = c.stateNode, a.nodeType === 8 ? Kf(a.parentNode, c) : a.nodeType === 1 && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U2 && (d = c.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
        e = d = d.next;
        do {
          var f = e, g = f.destroy;
          f = f.tag;
          g !== void 0 && ((f & 2) !== 0 ? Nj(c, b, g) : (f & 4) !== 0 && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U2 && (Mj(c, b), d = c.stateNode, typeof d.componentWillUnmount === "function"))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W2(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U2 = (d = U2) || c.memoizedState !== null, Zj(a, b, c), U2 = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (c !== null)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a:
          for (; h !== null; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (X === null)
          throw Error(p2(160));
        ak(f, g, e);
        X = null;
        Yj = false;
        var k = e.alternate;
        k !== null && (k.return = null);
        e.return = null;
      } catch (l2) {
        W2(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; b !== null; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W2(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W2(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && c !== null && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && c !== null && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W2(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, e != null)) {
        var f = a.memoizedProps, g = c !== null ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
        a.updateQueue = null;
        if (k !== null)
          try {
            h === "input" && f.type === "radio" && f.name != null && ab(e, f);
            vb(h, g);
            var l2 = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q2 = k[g + 1];
              m === "style" ? sb(e, q2) : m === "dangerouslySetInnerHTML" ? nb(e, q2) : m === "children" ? ob(e, q2) : ta(e, m, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y2 = f.value;
                y2 != null ? fb(e, !!f.multiple, y2, false) : r2 !== !!f.multiple && (f.defaultValue != null ? fb(e, !!f.multiple, f.defaultValue, true) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t2) {
            W2(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (a.stateNode === null)
          throw Error(p2(162));
        e = a.stateNode;
        f = a.memoizedProps;
        try {
          e.nodeValue = f;
        } catch (t2) {
          W2(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && c !== null && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W2(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f = e.memoizedState !== null, e.stateNode.isHidden = f, !f || e.alternate !== null && e.alternate.memoizedState !== null || (gk = B2()));
      d & 4 && bk(a);
      break;
    case 22:
      m = c !== null && c.memoizedState !== null;
      a.mode & 1 ? (U2 = (l2 = U2) || m, dk(b, a), U2 = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = a.memoizedState !== null;
        if ((a.stateNode.isHidden = l2) && !m && (a.mode & 1) !== 0)
          for (V2 = a, m = a.child; m !== null; ) {
            for (q2 = V2 = m; V2 !== null; ) {
              r2 = V2;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if (typeof n2.componentWillUnmount === "function") {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W2(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (r2.memoizedState !== null) {
                    hk(q2);
                    continue;
                  }
              }
              y2 !== null ? (y2.return = r2, V2 = y2) : hk(q2);
            }
            m = m.sibling;
          }
        a:
          for (m = null, q2 = a; ; ) {
            if (q2.tag === 5) {
              if (m === null) {
                m = q2;
                try {
                  e = q2.stateNode, l2 ? (f = e.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q2.stateNode, k = q2.memoizedProps.style, g = k !== void 0 && k !== null && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W2(a, a.return, t2);
                }
              }
            } else if (q2.tag === 6) {
              if (m === null)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W2(a, a.return, t2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a)
                break a;
              m === q2 && (m = null);
              q2 = q2.return;
            }
            m === q2 && (m = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(b, a), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; c !== null; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p2(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f = Vj(a);
          Xj(a, f, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p2(161));
      }
    } catch (k) {
      W2(a, a.return, k);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V2 = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = (a.mode & 1) !== 0; V2 !== null; ) {
    var e = V2, f = e.child;
    if (e.tag === 22 && d) {
      var g = e.memoizedState !== null || Kj;
      if (!g) {
        var h = e.alternate, k = h !== null && h.memoizedState !== null || U2;
        h = Kj;
        var l2 = U2;
        Kj = g;
        if ((U2 = k) && !l2)
          for (V2 = e; V2 !== null; )
            g = V2, k = g.child, g.tag === 22 && g.memoizedState !== null ? kk(e) : k !== null ? (k.return = g, V2 = k) : kk(e);
        for (; f !== null; )
          V2 = f, jk(f), f = f.sibling;
        V2 = e;
        Kj = h;
        U2 = l2;
      }
      lk(a);
    } else
      (e.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = e, V2 = f) : lk(a);
  }
}
function lk(a) {
  for (; V2 !== null; ) {
    var b = V2;
    if ((b.flags & 8772) !== 0) {
      var c = b.alternate;
      try {
        if ((b.flags & 8772) !== 0)
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U2 || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U2)
                if (c === null)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f = b.updateQueue;
              f !== null && ih(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (g !== null) {
                c = null;
                if (b.child !== null)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (c === null && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b.memoizedState === null) {
                var l2 = b.alternate;
                if (l2 !== null) {
                  var m = l2.memoizedState;
                  if (m !== null) {
                    var q2 = m.dehydrated;
                    q2 !== null && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p2(163));
          }
        U2 || b.flags & 512 && Sj(b);
      } catch (r2) {
        W2(b, b.return, r2);
      }
    }
    if (b === a) {
      V2 = null;
      break;
    }
    c = b.sibling;
    if (c !== null) {
      c.return = b.return;
      V2 = c;
      break;
    }
    V2 = b.return;
  }
}
function hk(a) {
  for (; V2 !== null; ) {
    var b = V2;
    if (b === a) {
      V2 = null;
      break;
    }
    var c = b.sibling;
    if (c !== null) {
      c.return = b.return;
      V2 = c;
      break;
    }
    V2 = b.return;
  }
}
function kk(a) {
  for (; V2 !== null; ) {
    var b = V2;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k) {
            W2(b, c, k);
          }
          break;
        case 1:
          var d = b.stateNode;
          if (typeof d.componentDidMount === "function") {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k) {
              W2(b, e, k);
            }
          }
          var f = b.return;
          try {
            Sj(b);
          } catch (k) {
            W2(b, f, k);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k) {
            W2(b, g, k);
          }
      }
    } catch (k) {
      W2(b, b.return, k);
    }
    if (b === a) {
      V2 = null;
      break;
    }
    var h = b.sibling;
    if (h !== null) {
      h.return = b.return;
      V2 = h;
      break;
    }
    V2 = b.return;
  }
}
var mk = Math.ceil;
var nk = ua.ReactCurrentDispatcher;
var ok = ua.ReactCurrentOwner;
var pk = ua.ReactCurrentBatchConfig;
var K2 = 0;
var R2 = null;
var Y = null;
var Z = 0;
var gj = 0;
var fj = Uf(0);
var T2 = 0;
var qk = null;
var hh = 0;
var rk = 0;
var sk = 0;
var tk = null;
var uk = null;
var gk = 0;
var Hj = Infinity;
var vk = null;
var Pi = false;
var Qi = null;
var Si = null;
var wk = false;
var xk = null;
var yk = 0;
var zk = 0;
var Ak = null;
var Bk = -1;
var Ck = 0;
function L2() {
  return (K2 & 6) !== 0 ? B2() : Bk !== -1 ? Bk : Bk = B2();
}
function lh(a) {
  if ((a.mode & 1) === 0)
    return 1;
  if ((K2 & 2) !== 0 && Z !== 0)
    return Z & -Z;
  if (Kg.transition !== null)
    return Ck === 0 && (Ck = yc()), Ck;
  a = C2;
  if (a !== 0)
    return a;
  a = window.event;
  a = a === void 0 ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p2(185));
  Ac(a, c, d);
  if ((K2 & 2) === 0 || a !== R2)
    a === R2 && ((K2 & 2) === 0 && (rk |= c), T2 === 4 && Dk(a, Z)), Ek(a, d), c === 1 && K2 === 0 && (b.mode & 1) === 0 && (Hj = B2() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R2 ? Z : 0);
  if (d === 0)
    c !== null && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    c != null && bc(c);
    if (b === 1)
      a.tag === 0 ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        (K2 & 6) === 0 && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R2 ? Z : 0);
  if (d === 0)
    return null;
  if ((d & 30) !== 0 || (d & a.expiredLanes) !== 0 || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K2;
    K2 |= 2;
    var f = Kk();
    if (R2 !== a || Z !== b)
      vk = null, Hj = B2() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f;
    K2 = e;
    Y !== null ? b = 0 : (R2 = null, Z = 0, b = T2);
  }
  if (b !== 0) {
    b === 2 && (e = xc(a), e !== 0 && (d = e, b = Ok(a, e)));
    if (b === 1)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B2()), c;
    if (b === 6)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if ((d & 30) === 0 && !Pk(e) && (b = Jk(a, d), b === 2 && (f = xc(a), f !== 0 && (d = f, b = Ok(a, f))), b === 1))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B2()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B2(), 10 < b)) {
            if (uc(a, 0) !== 0)
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L2();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f;
          }
          d = e;
          d = B2() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p2(329));
      }
    }
  }
  Ek(a, B2());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  a !== 2 && (b = uk, uk = c, b !== null && Gj(b));
  return a;
}
function Gj(a) {
  uk === null ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (c !== null && (c = c.stores, c !== null))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && c !== null)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; b.sibling === null; ) {
        if (b.return === null || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  Ik();
  var b = uc(a, 0);
  if ((b & 1) === 0)
    return Ek(a, B2()), null;
  var c = Jk(a, b);
  if (a.tag !== 0 && c === 2) {
    var d = xc(a);
    d !== 0 && (b = d, c = Ok(a, d));
  }
  if (c === 1)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B2()), c;
  if (c === 6)
    throw Error(p2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B2());
  return null;
}
function Rk(a, b) {
  var c = K2;
  K2 |= 1;
  try {
    return a(b);
  } finally {
    K2 = c, K2 === 0 && (Hj = B2() + 500, fg && jg());
  }
}
function Sk(a) {
  xk !== null && xk.tag === 0 && (K2 & 6) === 0 && Ik();
  var b = K2;
  K2 |= 1;
  var c = pk.transition, d = C2;
  try {
    if (pk.transition = null, C2 = 1, a)
      return a();
  } finally {
    C2 = d, pk.transition = c, K2 = b, (K2 & 6) === 0 && jg();
  }
}
function Ij() {
  gj = fj.current;
  E2(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, Gf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && $f();
          break;
        case 3:
          Jh();
          E2(Wf);
          E2(H2);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E2(M2);
          break;
        case 19:
          E2(M2);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R2 = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T2 = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (Wg !== null) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, d !== null) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (f !== null) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N2.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P2 = O2 = N2 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (c === null || c.return === null) {
        T2 = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = Z;
        h.flags |= 32768;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l2 = k, m = h, q2 = m.tag;
          if ((m.mode & 1) === 0 && (q2 === 0 || q2 === 11 || q2 === 15)) {
            var r2 = m.alternate;
            r2 ? (m.updateQueue = r2.updateQueue, m.memoizedState = r2.memoizedState, m.lanes = r2.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y2 = Vi(g);
          if (y2 !== null) {
            y2.flags &= -257;
            Wi(y2, g, h, f, b);
            y2.mode & 1 && Ti(f, l2, b);
            b = y2;
            k = l2;
            var n2 = b.updateQueue;
            if (n2 === null) {
              var t2 = new Set();
              t2.add(k);
              b.updateQueue = t2;
            } else
              n2.add(k);
            break a;
          } else {
            if ((b & 1) === 0) {
              Ti(f, l2, b);
              uj();
              break a;
            }
            k = Error(p2(426));
          }
        } else if (I2 && h.mode & 1) {
          var J2 = Vi(g);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Wi(J2, g, h, f, b);
            Jg(Ki(k, h));
            break a;
          }
        }
        f = k = Ki(k, h);
        T2 !== 4 && (T2 = 2);
        tk === null ? tk = [f] : tk.push(f);
        f = g;
        do {
          switch (f.tag) {
            case 3:
              f.flags |= 65536;
              b &= -b;
              f.lanes |= b;
              var x2 = Oi(f, k, b);
              fh(f, x2);
              break a;
            case 1:
              h = k;
              var w2 = f.type, u2 = f.stateNode;
              if ((f.flags & 128) === 0 && (typeof w2.getDerivedStateFromError === "function" || u2 !== null && typeof u2.componentDidCatch === "function" && (Si === null || !Si.has(u2)))) {
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var F2 = Ri(f, h, b);
                fh(f, F2);
                break a;
              }
          }
          f = f.return;
        } while (f !== null);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return a === null ? ai : a;
}
function uj() {
  if (T2 === 0 || T2 === 3 || T2 === 2)
    T2 = 4;
  R2 === null || (hh & 268435455) === 0 && (rk & 268435455) === 0 || Dk(R2, Z);
}
function Jk(a, b) {
  var c = K2;
  K2 |= 2;
  var d = Kk();
  if (R2 !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K2 = c;
  nk.current = d;
  if (Y !== null)
    throw Error(p2(261));
  R2 = null;
  Z = 0;
  return T2;
}
function Uk() {
  for (; Y !== null; )
    Vk(Y);
}
function Mk() {
  for (; Y !== null && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  b === null ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 32768) === 0) {
      if (c = Fj(c, b, gj), c !== null) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (c !== null) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (a !== null)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T2 = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  T2 === 0 && (T2 = 5);
}
function Qk(a, b, c) {
  var d = C2, e = pk.transition;
  try {
    pk.transition = null, C2 = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C2 = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (xk !== null);
  if ((K2 & 6) !== 0)
    throw Error(p2(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f = c.lanes | c.childLanes;
  Bc(a, f);
  a === R2 && (Y = R2 = null, Z = 0);
  (c.subtreeFlags & 2064) === 0 && (c.flags & 2064) === 0 || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f = (c.flags & 15990) !== 0;
  if ((c.subtreeFlags & 15990) !== 0 || f) {
    f = pk.transition;
    pk.transition = null;
    var g = C2;
    C2 = 1;
    var h = K2;
    K2 |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K2 = h;
    C2 = g;
    pk.transition = f;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f = a.pendingLanes;
  f === 0 && (Si = null);
  mc(c.stateNode);
  Ek(a, B2());
  if (b !== null)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, {componentStack: e.stack, digest: e.digest});
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  (yk & 1) !== 0 && a.tag !== 0 && Ik();
  f = a.pendingLanes;
  (f & 1) !== 0 ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (xk !== null) {
    var a = Dc(yk), b = pk.transition, c = C2;
    try {
      pk.transition = null;
      C2 = 16 > a ? 16 : a;
      if (xk === null)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if ((K2 & 6) !== 0)
          throw Error(p2(331));
        var e = K2;
        K2 |= 4;
        for (V2 = a.current; V2 !== null; ) {
          var f = V2, g = f.child;
          if ((V2.flags & 16) !== 0) {
            var h = f.deletions;
            if (h !== null) {
              for (var k = 0; k < h.length; k++) {
                var l2 = h[k];
                for (V2 = l2; V2 !== null; ) {
                  var m = V2;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m, f);
                  }
                  var q2 = m.child;
                  if (q2 !== null)
                    q2.return = m, V2 = q2;
                  else
                    for (; V2 !== null; ) {
                      m = V2;
                      var r2 = m.sibling, y2 = m.return;
                      Tj(m);
                      if (m === l2) {
                        V2 = null;
                        break;
                      }
                      if (r2 !== null) {
                        r2.return = y2;
                        V2 = r2;
                        break;
                      }
                      V2 = y2;
                    }
                }
              }
              var n2 = f.alternate;
              if (n2 !== null) {
                var t2 = n2.child;
                if (t2 !== null) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (t2 !== null);
                }
              }
              V2 = f;
            }
          }
          if ((f.subtreeFlags & 2064) !== 0 && g !== null)
            g.return = f, V2 = g;
          else
            b:
              for (; V2 !== null; ) {
                f = V2;
                if ((f.flags & 2048) !== 0)
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f, f.return);
                  }
                var x2 = f.sibling;
                if (x2 !== null) {
                  x2.return = f.return;
                  V2 = x2;
                  break b;
                }
                V2 = f.return;
              }
        }
        var w2 = a.current;
        for (V2 = w2; V2 !== null; ) {
          g = V2;
          var u2 = g.child;
          if ((g.subtreeFlags & 2064) !== 0 && u2 !== null)
            u2.return = g, V2 = u2;
          else
            b:
              for (g = w2; V2 !== null; ) {
                h = V2;
                if ((h.flags & 2048) !== 0)
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W2(h, h.return, na);
                  }
                if (h === g) {
                  V2 = null;
                  break b;
                }
                var F2 = h.sibling;
                if (F2 !== null) {
                  F2.return = h.return;
                  V2 = F2;
                  break b;
                }
                V2 = h.return;
              }
        }
        K2 = e;
        jg();
        if (lc && typeof lc.onPostCommitFiberRoot === "function")
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C2 = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L2();
  a !== null && (Ac(a, 1, b), Ek(a, b));
}
function W2(a, b, c) {
  if (a.tag === 3)
    Yk(a, a, c);
  else
    for (; b !== null; ) {
      if (b.tag === 3) {
        Yk(b, a, c);
        break;
      } else if (b.tag === 1) {
        var d = b.stateNode;
        if (typeof b.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Si === null || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L2();
          b !== null && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = L2();
  a.pingedLanes |= a.suspendedLanes & c;
  R2 === a && (Z & c) === c && (T2 === 4 || T2 === 3 && (Z & 130023424) === Z && 500 > B2() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  b === 0 && ((a.mode & 1) === 0 ? b = 1 : (b = sc, sc <<= 1, (sc & 130023424) === 0 && (sc = 4194304)));
  var c = L2();
  a = Zg(a, b);
  a !== null && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  b !== null && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      e !== null && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p2(314));
  }
  d !== null && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if ((a.lanes & c) === 0 && (b.flags & 128) === 0)
        return Ug = false, zj(a, b, c);
      Ug = (a.flags & 131072) !== 0 ? true : false;
    }
  else
    Ug = false, I2 && (b.flags & 1048576) !== 0 && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H2.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f = bi();
      b.flags |= 1;
      typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0 ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f, c)) : (b.tag = 0, I2 && f && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p2(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (a === null)
          throw Error(p2(387));
        d = b.pendingProps;
        f = b.memoizedState;
        e = f.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f.isDehydrated)
          if (f = {element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions}, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ki(Error(p2(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p2(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), a === null && Eg(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : f !== null && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return a === null && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f = b.memoizedProps;
        g = e.value;
        G2(Mg, d._currentValue);
        d._currentValue = g;
        if (f !== null)
          if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f = b.child, f !== null && (f.return = b); f !== null; ) {
              var h = f.dependencies;
              if (h !== null) {
                g = f.child;
                for (var k = h.firstContext; k !== null; ) {
                  if (k.context === d) {
                    if (f.tag === 1) {
                      k = ch(-1, c & -c);
                      k.tag = 2;
                      var l2 = f.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var m = l2.pending;
                        m === null ? k.next = k : (k.next = m.next, m.next = k);
                        l2.pending = k;
                      }
                    }
                    f.lanes |= c;
                    k = f.alternate;
                    k !== null && (k.lanes |= c);
                    Sg(f.return, c, b);
                    h.lanes |= c;
                    break;
                  }
                  k = k.next;
                }
              } else if (f.tag === 10)
                g = f.type === b.type ? null : f.child;
              else if (f.tag === 18) {
                g = f.return;
                if (g === null)
                  throw Error(p2(341));
                g.lanes |= c;
                h = g.alternate;
                h !== null && (h.lanes |= c);
                Sg(g, c, b);
                g = f.sibling;
              } else
                g = f.child;
              if (g !== null)
                g.return = f;
              else
                for (g = f; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (f !== null) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
              f = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p2(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if (typeof a === "function")
    return bj(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  c === null ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : {lanes: b.lanes, firstContext: b.firstContext};
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    bj(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
        case Ia:
          return qj(c, e, f, b);
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p2(130, a == null ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = {isHidden: false};
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation};
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f, g, h, k) {
  a = new bl(a, b, c, h, k);
  b === 1 ? (b = 1, f === true && (b |= 8)) : b = 0;
  f = Bg(3, null, null, b);
  a.current = f;
  f.stateNode = a;
  f.memoizedState = {element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null};
  ah(f);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: wa, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c};
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || a.tag !== 1)
      throw Error(p2(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (b !== null);
    throw Error(p2(171));
  }
  if (a.tag === 1) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f, g, h, k) {
  a = cl(c, d, true, a, e, f, g, h, k);
  a.context = el(null);
  c = a.current;
  d = L2();
  e = lh(c);
  f = ch(d, e);
  f.callback = b !== void 0 && b !== null ? b : null;
  dh(c, f, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f = L2(), g = lh(e);
  c = el(c);
  b.context === null ? b.context = c : b.pendingContext = c;
  b = ch(f, g);
  b.payload = {element: a};
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  a = dh(e, b, g);
  a !== null && (mh(a, e, g, f), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = typeof reportError === "function" ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (b === null)
    throw Error(p2(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (a !== null) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = {blockedOn: null, target: a, priority: b};
    for (var c = 0; c < Qc.length && b !== 0 && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    c === 0 && Vc(a);
  }
};
function ol(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11);
}
function pl(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if (typeof d === "function") {
      var f = d;
      d = function() {
        var a2 = hl(g);
        f.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(a.nodeType === 8 ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if (typeof d === "function") {
    var h = d;
    d = function() {
      var a2 = hl(k);
      h.call(a2);
    };
  }
  var k = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k;
  a[uf] = k.current;
  sf(a.nodeType === 8 ? a.parentNode : a);
  Sk(function() {
    gl(b, k, c, d);
  });
  return k;
}
function sl(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        c !== 0 && (Cc(b, c | 1), Ek(b, B2()), (K2 & 6) === 0 && (Hj = B2() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (b2 !== null) {
          var c2 = L2();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (a.tag === 13) {
    var b = Zg(a, 134217728);
    if (b !== null) {
      var c = L2();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (a.tag === 13) {
    var b = lh(a), c = Zg(a, b);
    if (c !== null) {
      var d = L2();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C2;
};
Ic = function(a, b) {
  var c = C2;
  try {
    return C2 = a, b();
  } finally {
    C2 = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p2(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = {usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk]};
var ul = {findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom"};
var vl = {bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
var wl;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2 = tl;
var createPortal = function(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ol(b))
    throw Error(p2(200));
  return dl(a, b, null, c);
};
var createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p2(299));
  var c = false, d = "", e = ll;
  b !== null && b !== void 0 && (b.unstable_strictMode === true && (c = true), b.identifierPrefix !== void 0 && (d = b.identifierPrefix), b.onRecoverableError !== void 0 && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(a.nodeType === 8 ? a.parentNode : a);
  return new ml(b);
};
var findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(p2(188));
    a = Object.keys(a).join(",");
    throw Error(p2(268, a));
  }
  a = Zb(b);
  a = a === null ? null : a.stateNode;
  return a;
};
var flushSync = function(a) {
  return Sk(a);
};
var hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p2(200));
  return sl(null, a, b, true, c);
};
var hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p2(405));
  var d = c != null && c.hydratedSources || null, e = false, f = "", g = ll;
  c !== null && c !== void 0 && (c.unstable_strictMode === true && (e = true), c.identifierPrefix !== void 0 && (f = c.identifierPrefix), c.onRecoverableError !== void 0 && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, c != null ? c : null, e, false, f, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), b.mutableSourceEagerHydrationData == null ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
  return new nl(b);
};
var render = function(a, b, c) {
  if (!pl(b))
    throw Error(p2(200));
  return sl(null, a, b, false, c);
};
var unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Rk;
var unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p2(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(p2(38));
  return sl(a, b, c, false, d);
};
var version2 = "18.2.0-next-9e3b772b8-20220608";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED2,
  createPortal,
  createRoot,
  findDOMNode,
  flushSync,
  hydrate,
  hydrateRoot,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
  version: version2
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var client = createCommonjsModule(function(module, exports) {
  {
    exports.createRoot = reactDom.createRoot;
    exports.hydrateRoot = reactDom.hydrateRoot;
  }
});
var createRoot$1 = client.createRoot;

// docs/snowpack/pkg/axios.js
var bind = function bind2(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var toString = Object.prototype.toString;
var kindOf = function(cache2) {
  return function(thing) {
    var str = toString.call(thing);
    return cache2[str] || (cache2[str] = str.slice(8, -1).toLowerCase());
  };
}(Object.create(null));
function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (kindOf(val) !== "object") {
    return false;
  }
  var prototype2 = Object.getPrototypeOf(val);
  return prototype2 === null || prototype2 === Object.prototype;
}
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
function isFunction(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
function isFormData(thing) {
  var pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
}
var isURLSearchParams = kindOfTest("URLSearchParams");
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l2 = obj.length; i < l2; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l2 = arguments.length; i < l2; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
function inherits(constructor, superConstructor, props, descriptors2) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}
function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}
function toArray(thing) {
  if (!thing)
    return null;
  var i = thing.length;
  if (isUndefined(i))
    return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}
var isTypedArray = function(TypedArray) {
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
var utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  isTypedArray,
  isFileList
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL = function buildURL2(url2, params, paramsSerializer) {
  if (!params) {
    return url2;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts2 = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils.forEach(val, function parseValue(v3) {
        if (utils.isDate(v3)) {
          v3 = v3.toISOString();
        } else if (utils.isObject(v3)) {
          v3 = JSON.stringify(v3);
        }
        parts2.push(encode(key) + "=" + encode(v3));
      });
    });
    serializedParams = parts2.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
};
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id2) {
  if (this.handlers[id2]) {
    this.handlers[id2] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach2(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager;
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version3 = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance2 = globalContext.performance || {};
var performanceNow = performance2.now || performance2.mozNow || performance2.msNow || performance2.oNow || performance2.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance2) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version: version3,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
var normalizeHeaderName = function normalizeHeaderName2(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value2, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value2;
      delete headers[name];
    }
  });
};
function AxiosError(message, code, config2, request2, response) {
  Error.call(this);
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config2 && (this.config = config2);
  request2 && (this.request = request2);
  response && (this.response = response);
}
utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(code) {
  descriptors[code] = {value: code};
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", {value: true});
AxiosError.from = function(error, code, config2, request2, response, customProps) {
  var axiosError = Object.create(prototype);
  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });
  AxiosError.call(axiosError, error.message, code, config2, request2, response);
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_1 = AxiosError;
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
function toFormData(obj, formData) {
  formData = formData || new FormData();
  var stack = [];
  function convertValue(value2) {
    if (value2 === null)
      return "";
    if (utils.isDate(value2)) {
      return value2.toISOString();
    }
    if (utils.isArrayBuffer(value2) || utils.isTypedArray(value2)) {
      return typeof Blob === "function" ? new Blob([value2]) : Buffer.from(value2);
    }
    return value2;
  }
  function build(data2, parentKey) {
    if (utils.isPlainObject(data2) || utils.isArray(data2)) {
      if (stack.indexOf(data2) !== -1) {
        throw Error("Circular reference detected in " + parentKey);
      }
      stack.push(data2);
      utils.forEach(data2, function each(value2, key) {
        if (utils.isUndefined(value2))
          return;
        var fullKey = parentKey ? parentKey + "." + key : key;
        var arr;
        if (value2 && !parentKey && typeof value2 === "object") {
          if (utils.endsWith(key, "{}")) {
            value2 = JSON.stringify(value2);
          } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value2))) {
            arr.forEach(function(el2) {
              !utils.isUndefined(el2) && formData.append(fullKey, convertValue(el2));
            });
            return;
          }
        }
        build(value2, fullKey);
      });
      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data2));
    }
  }
  build(obj);
  return formData;
}
var toFormData_1 = toFormData;
var settle = function settle2(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_1("Request failed with status code " + response.status, [AxiosError_1.ERR_BAD_REQUEST, AxiosError_1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
  }
};
var cookies = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value2, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value2));
      if (utils.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL = function isAbsoluteURL2(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
};
var combineURLs = function combineURLs2(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var buildFullPath = function buildFullPath2(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders = function parseHeaders2(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils.forEach(headers.split("\n"), function parser2(line) {
    i = line.indexOf(":");
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var isURLSameOrigin = utils.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url2) {
    var href = url2;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function CanceledError(message) {
  AxiosError_1.call(this, message == null ? "canceled" : message, AxiosError_1.ERR_CANCELED);
  this.name = "CanceledError";
}
utils.inherits(CanceledError, AxiosError_1, {
  __CANCEL__: true
});
var CanceledError_1 = CanceledError;
var parseProtocol = function parseProtocol2(url2) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
};
var xhr = function xhrAdapter(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config2.data;
    var requestHeaders = config2.headers;
    var responseType = config2.responseType;
    var onCanceled;
    function done() {
      if (config2.cancelToken) {
        config2.cancelToken.unsubscribe(onCanceled);
      }
      if (config2.signal) {
        config2.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath(config2.baseURL, config2.url);
    request2.open(config2.method.toUpperCase(), buildURL(fullPath, config2.params, config2.paramsSerializer), true);
    request2.timeout = config2.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle(function _resolve(value2) {
        resolve(value2);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(new AxiosError_1("Request aborted", AxiosError_1.ECONNABORTED, config2, request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(new AxiosError_1("Network Error", AxiosError_1.ERR_NETWORK, config2, request2, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
      var transitional$1 = config2.transitional || transitional;
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(new AxiosError_1(timeoutErrorMessage, transitional$1.clarifyTimeoutError ? AxiosError_1.ETIMEDOUT : AxiosError_1.ECONNABORTED, config2, request2));
      request2 = null;
    };
    if (utils.isStandardBrowserEnv()) {
      var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config2.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils.isUndefined(config2.withCredentials)) {
      request2.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request2.addEventListener("progress", config2.onDownloadProgress);
    }
    if (typeof config2.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config2.onUploadProgress);
    }
    if (config2.cancelToken || config2.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new CanceledError_1() : cancel);
        request2.abort();
        request2 = null;
      };
      config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
      if (config2.signal) {
        config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    var protocol2 = parseProtocol(fullPath);
    if (protocol2 && ["http", "https", "file"].indexOf(protocol2) === -1) {
      reject(new AxiosError_1("Unsupported protocol " + protocol2 + ":", AxiosError_1.ERR_BAD_REQUEST, config2));
      return;
    }
    request2.send(requestData);
  });
};
var _null = null;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value2) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value2;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser2, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser2 || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName(headers, "Accept");
    normalizeHeaderName(headers, "Content-Type");
    if (utils.isFormData(data2) || utils.isArrayBuffer(data2) || utils.isBuffer(data2) || utils.isStream(data2) || utils.isFile(data2) || utils.isBlob(data2)) {
      return data2;
    }
    if (utils.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    var isObjectPayload = utils.isObject(data2);
    var contentType = headers && headers["Content-Type"];
    var isFileList2;
    if ((isFileList2 = utils.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
      var _FormData = this.env && this.env.FormData;
      return toFormData_1(isFileList2 ? {"files[]": data2} : data2, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_1.from(e, AxiosError_1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: _null
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults;
var transformData = function transformData2(data2, headers, fns) {
  var context = this || defaults_1;
  utils.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel = function isCancel2(value2) {
  return !!(value2 && value2.__CANCEL__);
};
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError_1();
  }
}
var dispatchRequest = function dispatchRequest2(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData.call(config2, config2.data, config2.headers, config2.transformRequest);
  config2.headers = utils.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
  utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config2.headers[method];
  });
  var adapter = config2.adapter || defaults_1.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData.call(config2, response.data, response.headers, config2.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData.call(config2, reason.response.data, reason.response.headers, config2.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var mergeConfig = function mergeConfig2(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  function getMergedValue(target, source2) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source2)) {
      return utils.merge(target, source2);
    } else if (utils.isPlainObject(source2)) {
      return utils.merge({}, source2);
    } else if (utils.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys
  };
  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
};
var data = {
  version: "0.27.2"
};
var VERSION = data.version;
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional2(validator2, version4, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value2, opt, opts) {
    if (validator2 === false) {
      throw new AxiosError_1(formatMessage(opt, " has been removed" + (version4 ? " in " + version4 : "")), AxiosError_1.ERR_DEPRECATED);
    }
    if (version4 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version4 + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value2, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_1("options must be an object", AxiosError_1.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value2 = options[opt];
      var result = value2 === void 0 || validator2(value2, opt, options);
      if (result !== true) {
        throw new AxiosError_1("option " + opt + " must be " + result, AxiosError_1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_1("Unknown option " + opt, AxiosError_1.ERR_BAD_OPTION);
    }
  }
}
var validator = {
  assertOptions,
  validators
};
var validators$1 = validator.validators;
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}
Axios.prototype.request = function request(configOrUrl, config2) {
  if (typeof configOrUrl === "string") {
    config2 = config2 || {};
    config2.url = configOrUrl;
  } else {
    config2 = configOrUrl || {};
  }
  config2 = mergeConfig(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional3 = config2.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators$1.transitional(validators$1.boolean),
      forcedJSONParsing: validators$1.transitional(validators$1.boolean),
      clarifyTimeoutError: validators$1.transitional(validators$1.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig(this.defaults, config2);
  var fullPath = buildFullPath(config2.baseURL, config2.url);
  return buildURL(fullPath, config2.params, config2.paramsSerializer);
};
utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios.prototype[method] = function(url2, config2) {
    return this.request(mergeConfig(config2 || {}, {
      method,
      url: url2,
      data: (config2 || {}).data
    }));
  };
});
utils.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url2, data2, config2) {
      return this.request(mergeConfig(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data: data2
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_1 = Axios;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l2 = token._listeners.length;
    for (i = 0; i < l2; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new CanceledError_1(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return utils.isObject(payload) && payload.isAxiosError === true;
};
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);
  utils.extend(instance, Axios_1.prototype, context);
  utils.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_1);
axios.Axios = Axios_1;
axios.CanceledError = CanceledError_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;
axios.VERSION = data.version;
axios.toFormData = toFormData_1;
axios.AxiosError = AxiosError_1;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
var axios_1 = axios;
var _default = axios;
axios_1.default = _default;
var axios$1 = axios_1;
var axios_default = axios$1;

// docs/dist/components/Menu.js
var import_react_jss10 = __toModule(require_react_jss());

// docs/dist/components/form/Button.js
var import_react_jss = __toModule(require_react_jss());

// docs/dist/util/Util.js
var ColorType = {
  LIGHT_BLUE: "var(--light-blue)",
  BLUE: "var(--blue)",
  GREEN: "var(--green)",
  RED: "var(--red)",
  WHITE: "var(--white)",
  TEXT: "var(--text)",
  LIGHT_TEXT: "var(--light-text)"
};
var ChessIconType = {
  PAWN: "pawn",
  ROOK: "rook",
  KNIGHT: "knight",
  BISHOP: "bishop",
  QUEEN: "queen",
  KING: "king"
};
function empty(...args) {
}

// docs/dist/components/form/ChessIcon.js
var ChessIcon = (props) => {
  switch (props.type) {
    case ChessIconType.PAWN:
      return /* @__PURE__ */ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        viewBox: "0 0 512 512",
        className: props.className
      }, /* @__PURE__ */ react.createElement("path", {
        fill: "currentColor",
        d: "M359.81 471a22.48 22.48 0 0 0 1.56-19.72l-18.15-45.92a22.36 22.36 0 0 0-20.92-14.23h-3.4l-13.78-168.24h5a18.41 18.41 0 0 0 18.4-18.39v-8.21a18.42 18.42 0 0 0-18.4-18.4h-6.42a70 70 0 1 0-95.36 0h-6.44a18.42 18.42 0 0 0-18.4 18.4v8.21a18.41 18.41 0 0 0 18.4 18.39h5l-13.8 168.19h-3.4a22.36 22.36 0 0 0-20.92 14.23l-18.15 45.92a22.48 22.48 0 0 0 1.56 19.77A23.16 23.16 0 0 0 142 490.14v14.36a7.5 7.5 0 0 0 7.5 7.5h213a7.5 7.5 0 0 0 7.5-7.5v-14.36A23.16 23.16 0 0 0 359.81 471ZM201 126.69a55 55 0 1 1 75.11 51.2h-40.22a55.2 55.2 0 0 1-34.89-51.2Zm.9 81.2a3.4 3.4 0 0 1-3.4-3.39v-8.21a3.4 3.4 0 0 1 3.4-3.4h108.2a3.4 3.4 0 0 1 3.4 3.4v8.21a3.4 3.4 0 0 1-3.4 3.39Zm102 183.17h-95.7L221.92 223h68.16Zm-139.32 65.68 18.15-45.92a7.44 7.44 0 0 1 7-4.74H322.3a7.44 7.44 0 0 1 7 4.74l18.15 45.92a7.49 7.49 0 0 1-6 10.2H170.62a7.49 7.49 0 0 1-6-10.2ZM355 497H157v-6.86a8.21 8.21 0 0 1 8.2-8.2h4.8c.51 0 1 .06 1.54.06h168.9c.52 0 1 0 1.54-.06h4.82a8.21 8.21 0 0 1 8.2 8.2Z"
      }));
    case ChessIconType.ROOK:
      return /* @__PURE__ */ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        viewBox: "0 0 512 512",
        className: props.className
      }, /* @__PURE__ */ react.createElement("path", {
        fill: "currentColor",
        d: "M359.81 471a22.48 22.48 0 0 0 1.56-19.72l-18.15-45.92a22.36 22.36 0 0 0-20.92-14.23h-3.41l-13.76-168h5a18.41 18.41 0 0 0 18.4-18.39v-8.21a17.9 17.9 0 0 0-.5-4.17h.5a17.52 17.52 0 0 0 17.5-17.5v-90a7.5 7.5 0 0 0-7.5-7.5h-30a7.5 7.5 0 0 0-7.5 7.5V125h-16.47V84.79a7.49 7.49 0 0 0-7.5-7.5h-42.12a7.49 7.49 0 0 0-7.5 7.5V125H211V84.79a7.5 7.5 0 0 0-7.5-7.5h-30a7.5 7.5 0 0 0-7.5 7.5v90a17.52 17.52 0 0 0 17.5 17.5h.5a17.9 17.9 0 0 0-.5 4.17v8.21a18.41 18.41 0 0 0 18.4 18.39h5l-13.76 168h-3.44a22.36 22.36 0 0 0-20.92 14.23l-18.15 45.92a22.48 22.48 0 0 0 1.56 19.79A23.16 23.16 0 0 0 142 490.14v14.36a7.5 7.5 0 0 0 7.5 7.5h213a7.5 7.5 0 0 0 7.5-7.5v-14.36A23.16 23.16 0 0 0 359.81 471ZM183.5 177.29a2.51 2.51 0 0 1-2.5-2.5v-82.5h15v40.16a7.5 7.5 0 0 0 7.5 7.5h31.44a7.5 7.5 0 0 0 7.5-7.5V92.29h27.12v40.16a7.5 7.5 0 0 0 7.5 7.5h31.44a7.5 7.5 0 0 0 7.5-7.5V92.29h15v82.5a2.51 2.51 0 0 1-2.5 2.5Zm18.4 30.77a3.4 3.4 0 0 1-3.4-3.39v-8.21a3.4 3.4 0 0 1 3.4-3.4h108.2a3.4 3.4 0 0 1 3.4 3.4v8.21a3.4 3.4 0 0 1-3.4 3.39Zm101.94 183h-95.68l13.76-168h68.16Zm-139.26 65.68 18.15-45.92a7.45 7.45 0 0 1 7-4.74h9.44a8.46 8.46 0 0 0 .87.05H312a8.46 8.46 0 0 0 .87-.05h9.44a7.45 7.45 0 0 1 7 4.74l18.15 45.92a7.49 7.49 0 0 1-6 10.2H170.62a7.49 7.49 0 0 1-6-10.2ZM355 497H157v-6.86a8.21 8.21 0 0 1 8.2-8.2h4.8c.51 0 1 .06 1.54.06h168.9c.52 0 1 0 1.54-.06h4.82a8.21 8.21 0 0 1 8.2 8.2Z"
      }));
    case ChessIconType.BISHOP:
      return /* @__PURE__ */ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        viewBox: "0 0 512 512",
        className: props.className
      }, /* @__PURE__ */ react.createElement("path", {
        fill: "currentColor",
        d: "M359.81 471a22.48 22.48 0 0 0 1.56-19.72l-18.15-45.92a22.36 22.36 0 0 0-20.92-14.23h-3.41l-13.76-168h5a18.41 18.41 0 0 0 18.4-18.39v-8.21a18.27 18.27 0 0 0-4.69-12.23 62.35 62.35 0 0 0-10.75-86.85l-42.7-42.59a19.89 19.89 0 0 0-27.89-.2L200 95.77c-.93.7-1.82 1.43-2.7 2.18a5.68 5.68 0 0 0-.64.57 62.34 62.34 0 0 0-8.1 85.34 18.32 18.32 0 0 0-5 12.59v8.21a18.41 18.41 0 0 0 18.4 18.39h5l-13.76 168h-3.5a22.36 22.36 0 0 0-20.92 14.23l-18.15 45.92a22.48 22.48 0 0 0 1.56 19.8A23.16 23.16 0 0 0 142 490.14v14.36a7.5 7.5 0 0 0 7.5 7.5h213a7.5 7.5 0 0 0 7.5-7.5v-14.36A23.16 23.16 0 0 0 359.81 471ZM222.73 94.61l13 13-9.61 9.7-13.2-13.15Zm-32.27 47a47.39 47.39 0 0 1 11.47-27.18l18.92 18.84a7.49 7.49 0 0 0 5.29 2.19 7.53 7.53 0 0 0 5.31-2.22l20.15-20.34a7.5 7.5 0 0 0 0-10.58l-18.1-18.15 19.41-18.81a4.89 4.89 0 0 1 6.86 0l43 42.9a6.57 6.57 0 0 0 .68.61 47.37 47.37 0 0 1 6 69.14H203.29a47.37 47.37 0 0 1-12.83-36.45Zm11.44 66.5a3.4 3.4 0 0 1-3.4-3.39v-8.21a3.4 3.4 0 0 1 3.4-3.4h108.2a3.4 3.4 0 0 1 3.4 3.4v8.21a3.4 3.4 0 0 1-3.4 3.39Zm101.94 183h-95.68l13.76-168h68.16Zm-139.26 65.63 18.15-45.92a7.45 7.45 0 0 1 7-4.74h9.44a8.46 8.46 0 0 0 .87.05H312a8.46 8.46 0 0 0 .87-.05h9.44a7.45 7.45 0 0 1 7 4.74l18.15 45.92a7.49 7.49 0 0 1-6 10.2H170.62a7.49 7.49 0 0 1-6-10.2ZM355 497H157v-6.86a8.21 8.21 0 0 1 8.2-8.2h4.8c.51 0 1 .06 1.54.06h168.9c.52 0 1 0 1.54-.06h4.82a8.21 8.21 0 0 1 8.2 8.2Z"
      }));
    case ChessIconType.KNIGHT:
      return /* @__PURE__ */ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        viewBox: "0 0 512 512",
        className: props.className
      }, /* @__PURE__ */ react.createElement("path", {
        fill: "currentColor",
        d: "m412.06 501.85-15.9-42.18a7.49 7.49 0 0 0-7-4.85h-7v-6.55a35.42 35.42 0 0 0-6.63-20.64 7.48 7.48 0 0 0 6.62-7.65l-1.18-41.74a7.48 7.48 0 0 0-3.67-6.24l-40.48-35.64A132.77 132.77 0 0 1 296.49 272L290 249.07A105 105 0 0 0 336.8 227l37.9 17.46a7.51 7.51 0 0 0 9.44-2.74L405 209.45a7.49 7.49 0 0 0-1.32-9.69L273.31 84.27V44a7.5 7.5 0 0 0-11.38-6.41l-68.29 41.29a144.14 144.14 0 0 0-33.37 27.6 241.79 241.79 0 0 0-43.88 249.22l.08.18a244.12 244.12 0 0 0 16.7 33.93l14.56 33.38a7.47 7.47 0 0 0 6 4.43 35.46 35.46 0 0 0-6.63 20.65v6.55h-7a7.51 7.51 0 0 0-7 4.85l-15.89 42.18a7.5 7.5 0 0 0 7 10.15H405a7.5 7.5 0 0 0 7-10.15ZM146.73 383.39a6.58 6.58 0 0 0-.42-.84 231.71 231.71 0 0 1-11.6-22.16h25.71a7.5 7.5 0 0 0 0-15H128.5a224.14 224.14 0 0 1-8.21-27.13h54.17a7.5 7.5 0 1 0 0-15h-57.18a223.35 223.35 0 0 1-2.81-27.13h74a7.5 7.5 0 0 0 0-15h-74.13a225.74 225.74 0 0 1 57.15-144.7 129.5 129.5 0 0 1 29.92-24.72l56.9-34.43v30.37a7.49 7.49 0 0 0 2.53 5.61l128.09 113.45-13.86 21.41-36.34-16.74a7.56 7.56 0 0 0-5.83-.17 7.47 7.47 0 0 0-2.48 1.57c-15.18 13.26-32.26 20.82-49.61 22.67a7.25 7.25 0 0 0-2 .19c-22.39 1.81-45.11-5.87-64.67-23a7.5 7.5 0 0 0-9.9 11.28c21.1 18.51 46 27.44 70.66 26.79l7.15 25.29a147.5 147.5 0 0 0 44.82 71.6L366 382.1l.86 30.59H159.51Zm220.39 64.88v6.55h-205v-6.55a20.61 20.61 0 0 1 20.59-20.58h163.82a20.61 20.61 0 0 1 20.59 20.58ZM135 497l10.24-27.18h8.49a7.92 7.92 0 0 0 .85.05h220a7.92 7.92 0 0 0 .85-.05H384L394.2 497Zm134.25-322.63a24.06 24.06 0 1 0-24.06-24.06 24.08 24.08 0 0 0 24.06 24.06Zm0-33.12a9.06 9.06 0 1 1-9.06 9.06 9.06 9.06 0 0 1 9.06-9.06Z"
      }));
    case ChessIconType.QUEEN:
      return /* @__PURE__ */ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        viewBox: "0 0 512 512",
        className: props.className
      }, /* @__PURE__ */ react.createElement("path", {
        fill: "currentColor",
        d: "M359.81 469.63a22.48 22.48 0 0 0 1.56-19.72L343.22 404a22.36 22.36 0 0 0-20.92-14.23h-3.4l-13.77-168h5a18.41 18.41 0 0 0 18.4-18.39v-8.21a18.42 18.42 0 0 0-18.4-18.4L347.14 113a7.49 7.49 0 0 0-9.75-10.5C332 69.88 306.94 43.74 274.7 36.31a22.5 22.5 0 1 0-37.4 0c-32.23 7.43-57.3 33.57-62.69 66.19a7.48 7.48 0 0 0-9.75 10.5l37.06 63.75a18.42 18.42 0 0 0-18.4 18.4v8.21a18.41 18.41 0 0 0 18.4 18.39h5l-13.77 168h-3.4A22.36 22.36 0 0 0 168.78 404l-18.15 45.92a22.48 22.48 0 0 0 1.56 19.72A23.16 23.16 0 0 0 142 488.82v14.36a7.5 7.5 0 0 0 7.5 7.5h213a7.5 7.5 0 0 0 7.5-7.5v-14.36a23.16 23.16 0 0 0-10.19-19.19ZM256 16.32a7.5 7.5 0 1 1-7.5 7.5 7.5 7.5 0 0 1 7.5-7.5Zm0 32.85c35.69 0 65 27.48 67.33 62.11l-33.79 21.32L263 66.87a7.49 7.49 0 0 0-13.9 0l-26.63 65.84-33.75-21.39C191 76.67 220.31 49.17 256 49.17ZM193.26 132 222 150.19a7.49 7.49 0 0 0 11-3.52l23.05-57 23 56.87a7.51 7.51 0 0 0 11 3.53l28.85-18.21-26.08 44.87h-73.55Zm8.64 74.76a3.4 3.4 0 0 1-3.4-3.39v-8.21a3.4 3.4 0 0 1 3.4-3.4h12a7 7 0 0 0 1.12.09h82a7 7 0 0 0 1.12-.09h12a3.4 3.4 0 0 1 3.4 3.4v8.21a3.4 3.4 0 0 1-3.4 3.39h-95.9Zm102 183h-95.7l13.77-168h68.16Zm-139.32 65.66 18.15-45.92a7.45 7.45 0 0 1 7-4.74H322.3a7.45 7.45 0 0 1 7 4.74l18.15 45.92a7.49 7.49 0 0 1-6 10.2H170.62a7.49 7.49 0 0 1-6-10.2ZM355 495.68H157v-6.86a8.21 8.21 0 0 1 8.2-8.2h4.8c.51 0 1 .06 1.54.06h168.9c.52 0 1 0 1.54-.06h4.82a8.21 8.21 0 0 1 8.2 8.2Z"
      }));
    case ChessIconType.KING:
      return /* @__PURE__ */ react.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "data-name": "Layer 1",
        viewBox: "0 0 512 512",
        className: props.className
      }, /* @__PURE__ */ react.createElement("path", {
        fill: "currentColor",
        d: "M359.81 471a22.48 22.48 0 0 0 1.56-19.72l-18.15-45.92a22.36 22.36 0 0 0-20.92-14.23h-3.4l-13.77-168h5a18.41 18.41 0 0 0 18.4-18.39v-8.21a18.42 18.42 0 0 0-18.4-18.4h-4l5.27-17.46a7.5 7.5 0 0 0 1.7-4.76 6.34 6.34 0 0 0 0-.76L327.83 106a7.5 7.5 0 0 0-7.18-9.67h-43.21V75.18h25a7.5 7.5 0 0 0 7.5-7.5V40.43a7.49 7.49 0 0 0-7.5-7.5h-25V7.5a7.5 7.5 0 0 0-7.5-7.5h-27.88a7.5 7.5 0 0 0-7.5 7.5v25.43h-25a7.49 7.49 0 0 0-7.5 7.5v27.25a7.5 7.5 0 0 0 7.5 7.5h25v21.16h-43.21a7.51 7.51 0 0 0-7.23 9.51l20 72.21h-2.22a18.42 18.42 0 0 0-18.4 18.4v8.21a18.41 18.41 0 0 0 18.4 18.39h5l-13.77 168h-3.4a22.36 22.36 0 0 0-20.92 14.23l-18.15 45.92a22.48 22.48 0 0 0 1.53 19.79A23.16 23.16 0 0 0 142 490.14v14.36a7.5 7.5 0 0 0 7.5 7.5h213a7.5 7.5 0 0 0 7.5-7.5v-14.36A23.16 23.16 0 0 0 359.81 471ZM217.05 60.18V47.93h25a7.5 7.5 0 0 0 7.5-7.5V15h12.88v25.43a7.5 7.5 0 0 0 7.5 7.5h25v12.25h-25a7.5 7.5 0 0 0-7.5 7.5v28.66h-12.87V67.68a7.5 7.5 0 0 0-7.5-7.5Zm-15.84 51.16h109.34l-11.16 37h-87.92Zm93.65 52-4.44 14.72h-70.71l-4.08-14.72Zm-93 44.72a3.4 3.4 0 0 1-3.4-3.39v-8.21a3.4 3.4 0 0 1 3.4-3.4H310.1a3.4 3.4 0 0 1 3.4 3.4v8.21a3.4 3.4 0 0 1-3.4 3.39h-95.89Zm102 183h-95.7l13.77-168h68.16Zm-139.28 65.68 18.15-45.92a7.44 7.44 0 0 1 7-4.74H322.3a7.44 7.44 0 0 1 7 4.74l18.15 45.92a7.49 7.49 0 0 1-6 10.2H170.62a7.49 7.49 0 0 1-6-10.2ZM355 497H157v-6.86a8.21 8.21 0 0 1 8.2-8.2h4.8c.51 0 1 .06 1.54.06h168.9c.52 0 1 0 1.54-.06h4.82a8.21 8.21 0 0 1 8.2 8.2Z"
      }));
  }
};
var ChessIcon_default = ChessIcon;

// docs/dist/components/navigation/NavContext.js
var defaultNavContext = {
  currentPage: {pageId: "home", owner: "none"},
  transitionPage: null,
  pages: [{pageId: "home", owner: "none"}],
  trail: [{pageId: "home", owner: "none"}],
  backPage: empty,
  setPage: empty
};
var NavContext = react.createContext(defaultNavContext);
var NavContext_default = NavContext;

// docs/dist/components/form/Button.js
var defaultProps = {
  toggable: false,
  submit: false,
  fillColor: ColorType.WHITE,
  textColor: ColorType.TEXT,
  borderColor: ColorType.TEXT,
  width: "100%",
  onClick: empty,
  type: ChessIconType.ROOK
};
var useStyles = (0, import_react_jss.createUseStyles)({
  button: (props) => ({
    width: "100%",
    height: 85,
    borderRadius: 5,
    border: [[2, "solid", `${props.borderColor}`]],
    backgroundColor: `${props.fillColor}`,
    color: `${props.textColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    clipPath: "polygon(0 0, 105% 0, 100% 100%, 0% 100%)",
    transition: [["clip-path", "0.3s"]],
    "& p": {
      fontFamily: ["Staatliches", "sans-serif"],
      fontSize: "2.6rem",
      margin: 0
    }
  }),
  buttonDark: (props) => ({
    border: [[2, "solid", `${props.borderColor}`]],
    backgroundColor: `${props.textColor}`,
    color: `${props.fillColor}`,
    zIndex: 1
  }),
  hoveredButton: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%) !important"
  },
  icon: {
    position: "absolute",
    top: "48%",
    right: 20,
    height: 45,
    transform: "translateY(-50%)",
    transition: ["right", "0.6s"],
    zIndex: 2
  },
  iconLeft: {
    right: "calc(100% - 20px - 45px - 2px)"
  },
  buttonContainer: {
    width: (props) => props.width,
    height: 85,
    position: "relative",
    cursor: "pointer"
  },
  checkBox: (props) => ({
    position: "absolute",
    top: "calc(50% + 1px)",
    right: "calc(100% - 20px - 45px - 2px)",
    height: 45,
    width: 45,
    transform: "translateY(-50%)",
    zIndex: 1,
    borderRadius: 5,
    border: [[2, "solid", `${props.textColor}`]],
    backgroundColor: `${props.fillColor}`,
    transition: "border-color 0.6s, background-color 0.6s"
  }),
  checkedCheckBox: (props) => ({
    borderColor: `${props.textColor}`,
    backgroundColor: `${props.fillColor}`
  })
});
var Button = (props) => {
  const classes = useStyles(props);
  const context = useContext2(NavContext_default);
  const [hovering, setHovering] = useState2(false);
  const [toggled, setToggled] = useState2(false);
  function handleMouseEnter() {
    setHovering(true);
  }
  function handleMouseLeave() {
    setHovering(false);
  }
  function handleClick() {
    if (props.toggable)
      setToggled((prev2) => !prev2);
    if (props.navTo) {
      context.setPage(props.navTo, context);
    }
    if (!props.onClick)
      return;
    props.onClick();
  }
  if (props.toggable) {
    return /* @__PURE__ */ react.createElement("button", {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
      className: classes.buttonContainer,
      type: props.submit ? "submit" : "button"
    }, /* @__PURE__ */ react.createElement("div", {
      className: hovering || toggled ? classes.button + " " + classes.hoveredButton : classes.button
    }, /* @__PURE__ */ react.createElement("p", null, props.children), /* @__PURE__ */ react.createElement(ChessIcon_default, {
      className: classes.icon,
      type: props.type
    }), /* @__PURE__ */ react.createElement("div", {
      className: classes.checkBox
    })), /* @__PURE__ */ react.createElement("div", {
      className: classes.button + " " + classes.buttonDark
    }, /* @__PURE__ */ react.createElement("p", null, props.children), /* @__PURE__ */ react.createElement(ChessIcon_default, {
      className: toggled ? classes.icon + " " + classes.iconLeft : classes.icon,
      type: props.type
    }), /* @__PURE__ */ react.createElement("div", {
      className: toggled || hovering ? classes.checkBox + " " + classes.checkedCheckBox : classes.checkBox
    })));
  } else {
    return /* @__PURE__ */ react.createElement("button", {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: classes.buttonContainer,
      onClick: handleClick,
      type: props.submit ? "submit" : "button"
    }, /* @__PURE__ */ react.createElement("div", {
      className: hovering ? classes.button + " " + classes.hoveredButton : classes.button
    }, /* @__PURE__ */ react.createElement("p", null, props.children)), /* @__PURE__ */ react.createElement("div", {
      className: classes.button + " " + classes.buttonDark
    }, /* @__PURE__ */ react.createElement("p", null, props.children)));
  }
};
Button.defaultProps = defaultProps;
var Button_default = Button;

// docs/dist/components/form/TextEntry.js
var import_react_jss3 = __toModule(require_react_jss());

// docs/dist/components/form/CheckIcon.js
var import_react_jss2 = __toModule(require_react_jss());
var useStyles2 = (0, import_react_jss2.createUseStyles)((props) => ({
  iconContainer: {
    position: "relative"
  },
  icon: {
    position: "absolute",
    top: 1,
    left: -18,
    opacity: 0,
    transition: [["opacity", "0.5s"]],
    width: "1rem",
    height: "1rem",
    color: props?.errorColor
  },
  iconVisible: {
    color: props?.successColor,
    opacity: "100%"
  }
}));
var CheckIcon = (props) => {
  const classes = useStyles2(props);
  return /* @__PURE__ */ react.createElement("div", {
    className: classes.iconContainer
  }, /* @__PURE__ */ react.createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    className: props.checked ? classes.icon + " " + classes.iconVisible : classes.icon
  }, /* @__PURE__ */ react.createElement("g", {
    transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
    fill: "currentColor",
    stroke: "none"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M2330 5110 c-494 -48 -950 -230 -1350 -538 -195 -150 -448 -432 -594\n-662 -63 -99 -186 -351 -230 -471 -49 -134 -102 -340 -128 -499 -31 -195 -31\n-565 0 -760 45 -276 116 -498 237 -745 132 -269 269 -460 489 -681 221 -220\n412 -357 681 -489 247 -121 469 -192 745 -237 195 -31 565 -31 760 0 276 45\n498 116 745 237 269 132 460 269 681 489 220 221 357 412 489 681 88 179 132\n296 180 476 63 240 78 371 78 649 0 278 -15 409 -78 649 -48 180 -92 297 -180\n476 -132 269 -269 460 -489 681 -221 220 -412 357 -681 489 -246 121 -474 193\n-740 235 -147 23 -475 34 -615 20z m1619 -1403 c74 -49 106 -155 71 -237 -12\n-30 -1562 -1784 -1631 -1847 -52 -47 -158 -59 -216 -23 -37 22 -971 766 -1021\n814 -48 44 -65 83 -65 146 0 78 40 143 112 180 27 14 104 18 144 7 15 -4 219\n-161 453 -348 234 -187 431 -342 438 -345 8 -3 311 330 747 821 543 611 744\n830 774 846 56 28 139 23 194 -14z"
  }))), /* @__PURE__ */ react.createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    className: classes.icon + " " + classes.iconVisible
  }, /* @__PURE__ */ react.createElement("g", {
    transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
    fill: "currentColor",
    stroke: "none"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M2285 4675 c-536 -71 -1019 -339 -1377 -765 -147 -175 -295 -447\n-372 -681 -75 -229 -106 -422 -106 -669 0 -247 31 -440 106 -669 151 -461 457\n-854 879 -1131 178 -116 454 -231 675 -280 211 -47 495 -63 705 -40 382 43\n751 191 1065 428 181 137 403 387 530 596 274 455 367 1019 254 1546 -66 308\n-198 591 -397 855 -73 96 -265 290 -363 367 -311 245 -700 405 -1086 447 -128\n14 -388 12 -513 -4z m414 -415 c602 -54 1115 -401 1385 -937 242 -481 242\n-1042 0 -1524 -100 -201 -239 -383 -395 -518 -534 -463 -1269 -557 -1894 -244\n-691 347 -1063 1115 -905 1870 163 781 838 1338 1650 1362 25 0 96 -4 159 -9z"
  }))));
};
var CheckIcon_default = CheckIcon;

// docs/dist/components/form/TextEntry.js
function createCondition(desc, regex) {
  return {desc, regex, met: false};
}
var passwordTemplate = [
  createCondition("One or more uppercase letters", new RegExp("w*[A-Z]")),
  createCondition("One or more numbers", new RegExp("w*[0-9]"))
];
var useStylesText = (0, import_react_jss3.createUseStyles)((props) => ({
  container: {
    width: props.width || "100%",
    position: "relative"
  },
  textContainer: {
    position: "relative"
  },
  label: {
    fontSize: "3.3rem",
    position: "absolute",
    top: "50%",
    left: 10,
    transform: "translateY(-50%)",
    color: `${props.primaryColor || ColorType.TEXT}`,
    transition: "font-size 0.5s, transform 0.5s, top 0.5s"
  },
  labelHidden: {
    fontSize: "1.6rem",
    top: 0,
    transform: "translateY(-100%)"
  },
  textEntry: {
    width: "100%",
    height: 85,
    fontSize: "3.2rem",
    fontFamily: "Oswald, sans-serif",
    color: `${props.primaryColor || ColorType.TEXT}`,
    border: [[2, "solid", `${props.primaryColor || ColorType.TEXT}`]],
    borderRadius: 5,
    backgroundColor: `${props.secondaryColor || ColorType.WHITE}`,
    padding: 10,
    transition: [["border ", "0.5s"]],
    "&:focus": {
      outline: "none"
    }
  },
  error: {
    color: `${props.errorColor || ColorType.RED}`,
    "&[type]": {
      border: [[2, "solid", `${props.errorColor || ColorType.RED}`]]
    }
  }
}));
var useStylesConditions = (0, import_react_jss3.createUseStyles)((props) => ({
  conditionList: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: -220,
    margin: 0,
    padding: 0,
    listStyle: "none",
    transition: [["opacity", "0.5s"]],
    opacity: 0
  },
  condition: {
    transition: [["color", "0.5s"]],
    color: `${props.primaryColor || ColorType.TEXT}`,
    display: "flex"
  },
  conditionError: {
    color: `${props.errorColor || ColorType.RED}`
  },
  conditionListFocused: {
    opacity: "100%"
  }
}));
var TextEntry = (props) => {
  const [text, setText] = useState2("");
  const [focused, setFocused] = useState2(false);
  const [error, setError] = useState2(false);
  const classes = useStylesText(props);
  const id2 = useId2();
  const [conditions, setConditions] = useState2([]);
  useEffect2(() => {
    setupConditions();
  }, []);
  function setupConditions() {
    let conditionList = [];
    if (props.password) {
      conditionList = passwordTemplate;
    }
    Object.values(conditionList).forEach((condition) => condition.met = false);
    setConditions(conditionList);
  }
  function handleChange(e) {
    let text2 = e.target.value;
    if (conditions && text2.length > 0) {
      setError(false);
      Object.values(conditions).forEach((condition) => {
        condition.met = condition.regex.test(text2);
        if (!condition.met) {
          setError(true);
        }
      });
    } else {
      Object.values(conditions).forEach((condition) => condition.met = false);
      setError(false);
    }
    setText(text2);
  }
  function processLabelClasses() {
    let classString = classes.label;
    if (text.length > 0 || focused)
      classString += " " + classes.labelHidden;
    if (error)
      classString += " " + classes.error;
    return classString;
  }
  function handleFocus(e) {
    setFocused(true);
  }
  function handleBlur(e) {
    setFocused(false);
  }
  return /* @__PURE__ */ react.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ react.createElement("div", {
    className: classes.textContainer
  }, /* @__PURE__ */ react.createElement("label", {
    htmlFor: id2,
    className: processLabelClasses()
  }, props.label), /* @__PURE__ */ react.createElement("input", {
    id: id2,
    className: error ? classes.textEntry + " " + classes.error : classes.textEntry,
    type: props?.password ? "password" : "text",
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    value: text
  })), /* @__PURE__ */ react.createElement(Conditions, {
    conditions,
    focused,
    primaryColor: props.primaryColor || ColorType.TEXT,
    errorColor: props.errorColor || ColorType.RED
  }));
};
var Conditions = (props) => {
  const classes = useStylesConditions(props);
  if (props.conditions && props.conditions.length > 0) {
    return /* @__PURE__ */ react.createElement("ol", {
      className: props.focused ? classes.conditionList + " " + classes.conditionListFocused : classes.conditionList
    }, props.conditions.map((condition, index) => /* @__PURE__ */ react.createElement("li", {
      className: condition.met ? classes.condition : classes.condition + " " + classes.conditionError,
      key: index
    }, /* @__PURE__ */ react.createElement(CheckIcon_default, {
      checked: condition.met,
      successColor: props.primaryColor,
      errorColor: props.errorColor
    }), /* @__PURE__ */ react.createElement("p", {
      style: {margin: 0}
    }, condition.desc))));
  }
  return /* @__PURE__ */ react.createElement(react.Fragment, null);
};
TextEntry.defaultProps = {
  primaryColor: ColorType.TEXT,
  secondaryColor: ColorType.WHITE,
  errorColor: ColorType.RED,
  password: false,
  conditions: []
};
var TextEntry_default = TextEntry;

// docs/dist/components/Title.js
var import_react_jss4 = __toModule(require_react_jss());
var useStyles3 = (0, import_react_jss4.createUseStyles)({
  titleContainer: {
    display: "flex",
    fontFamily: ["Staatliches", "sans-serif"],
    fontSize: "6rem",
    cursor: "default",
    pointerEvents: "none"
  },
  char: {
    transition: "transform 0.3s, text-shadow 0.3s",
    margin: 0,
    minWidth: 38,
    textShadow: [[-4, 3, 0, "rgba(0, 0, 0, 0.39)"]],
    animation: "$slideTop 2s cubic-bezier(0.445, 0.050, 0.550, 0.950) infinite alternate both"
  },
  "@keyframes slideTop": {
    from: {
      transform: "translateY(0)"
    },
    to: {
      transform: "translateY(-10px)"
    }
  },
  "@media (max-width: 530px)": {
    titleContainer: {
      fontSize: "5rem"
    },
    char: {
      minWidth: 28
    }
  },
  "@media (max-width: 430px)": {
    titleContainer: {
      fontSize: "4rem"
    },
    char: {
      minWidth: 18
    }
  }
});
var Title = (props) => {
  const [text, setText] = useState2(props.children);
  const classes = useStyles3();
  return /* @__PURE__ */ react.createElement("div", {
    className: classes.titleContainer
  }, text.split("").map((char, index) => /* @__PURE__ */ react.createElement("p", {
    className: classes.char,
    key: index,
    style: {animationDelay: index / 2 + "s"}
  }, char)));
};
var Title_default = Title;

// docs/dist/components/navigation/Navigator.js
var import_react_jss7 = __toModule(require_react_jss());

// docs/dist/components/navigation/NavigatorBreadcrumbs.js
var import_react_jss5 = __toModule(require_react_jss());
var useStyles4 = (0, import_react_jss5.createUseStyles)({
  crumbContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--light-text)"
  },
  crumbList: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    "& > *": {
      padding: [[0, 3]]
    }
  },
  crumbItem: {
    fontSize: "1.4rem",
    cursor: "pointer",
    "&:not(:last-child)::after": {
      content: '" => "',
      paddingLeft: 3
    },
    "&:last-child": {
      color: "var(--blue)"
    }
  }
});
var NavigatorBreadcrumbs = (props) => {
  const classes = useStyles4();
  const context = useContext2(NavContext_default);
  function handleNavigation(e, pageId) {
    context.setPage(pageId, context);
  }
  if (!context.trail)
    return /* @__PURE__ */ react.createElement("nav", {
      className: classes.crumbContainer
    });
  return /* @__PURE__ */ react.createElement("nav", {
    className: classes.crumbContainer
  }, /* @__PURE__ */ react.createElement("ol", {
    className: classes.crumbList
  }, context.trail.map(({pageId}) => /* @__PURE__ */ react.createElement("li", {
    className: classes.crumbItem,
    onClick: (e) => handleNavigation(e, pageId),
    key: "breadcrumb-" + pageId
  }, pageId.replace("-", " ")))));
};
var NavigatorBreadcrumbs_default = NavigatorBreadcrumbs;

// docs/dist/components/navigation/NavigatorBack.js
var import_react_jss6 = __toModule(require_react_jss());
var useStyles5 = (0, import_react_jss6.createUseStyles)({
  iconContainer: {
    transition: [["opacity", "0.3s"]],
    opacity: 0,
    position: "absolute",
    top: 0,
    left: 0
  },
  icon: {
    width: 20,
    height: 20
  },
  visible: {
    opacity: "100%",
    cursor: "pointer"
  }
});
var NavigatorBack = (props) => {
  const classes = useStyles5();
  const context = useContext2(NavContext_default);
  function handleNavigation(e) {
    if (context.currentPage.owner == "none")
      return;
    context.backPage(context);
  }
  return /* @__PURE__ */ react.createElement("div", {
    className: context.currentPage.owner == "none" ? classes.iconContainer : classes.iconContainer + " " + classes.visible,
    onClick: handleNavigation
  }, /* @__PURE__ */ react.createElement("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "512.000000pt",
    height: "512.000000pt",
    viewBox: "0 0 512.000000 512.000000",
    preserveAspectRatio: "xMidYMid meet",
    className: classes.icon
  }, /* @__PURE__ */ react.createElement("g", {
    transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
    fill: "currentColor",
    stroke: "none"
  }, /* @__PURE__ */ react.createElement("path", {
    d: "M1850 4257 c-27 -8 -212 -187 -813 -786 -466 -464 -787 -792 -800\n-816 -28 -54 -28 -136 0 -190 32 -59 1547 -1570 1595 -1590 177 -73 359 110\n279 280 -13 27 -205 225 -590 610 -314 313 -571 573 -571 577 0 4 859 9 1909\n10 l1909 3 44 30 c138 97 118 306 -34 370 -33 13 -245 15 -1933 15 -1042 0\n-1895 3 -1895 7 0 4 263 271 584 593 573 574 584 586 594 635 35 169 -112 302\n-278 252z"
  }))));
};
var NavigatorBack_default = NavigatorBack;

// docs/dist/components/navigation/Navigator.js
var animationDirection = 1;
var outgoingAnimation = (dir) => [
  {
    opacity: 1
  },
  {
    opacity: 0,
    transform: `translateX(${100 * -dir}%)`
  }
];
var incomingAnimation = (dir) => [
  {opacity: 0, transform: `translateX(${100 * dir}%)`},
  {opacity: 1}
];
var animationOptions = {
  duration: 200,
  fill: "both",
  easing: "ease-in"
};
var useStyles6 = (0, import_react_jss7.createUseStyles)({
  navHelper: {
    width: "100%",
    position: "relative",
    marginBottom: 20
  },
  nav: {
    width: "80vw",
    maxWidth: 600,
    position: "relative"
  }
});
var Navigator = (props) => {
  const [context, setContext] = useState2(defaultNavContext);
  const outRef = useCallback2((node) => {
    if (node && context.transitionPage)
      node.animate(outgoingAnimation(animationDirection), animationOptions);
  });
  const inRef = useCallback2((node) => {
    if (node) {
      node.animate(incomingAnimation(animationDirection), animationOptions).addEventListener("finish", (event) => {
        setContext((prev2) => ({
          ...prev2,
          transitionPage: null,
          currentPage: prev2.transitionPage
        }));
      });
    }
  });
  const classes = useStyles6();
  useEffect2(() => {
    let newPages = props.children.map((page) => ({
      pageId: page.props.pageId,
      owner: page.props.owner || "none"
    }));
    updateContext({
      pages: newPages,
      setPage: switchPage,
      backPage
    });
  }, []);
  function switchPage(pageId, currentContext) {
    if (currentContext.currentPage.pageId === pageId)
      return;
    if (currentContext.currentPage && currentContext.transitionPage)
      return;
    animationDirection = currentContext.trail.some((trailPage) => trailPage.pageId === pageId) ? -1 : 1;
    let newPage = findPage(pageId, currentContext);
    let newTrail = generateNewTrail(pageId, currentContext);
    updateContext({
      transitionPage: newPage,
      trail: newTrail
    });
  }
  function backPage(currentContext) {
    switchPage(currentContext.currentPage.owner, currentContext);
  }
  function generateNewTrail(pageId, currentContext) {
    let workingPage = findPage(pageId, currentContext);
    let newTrail = [workingPage];
    while (workingPage.owner != "none") {
      workingPage = findPage(workingPage.owner, currentContext);
      newTrail = [workingPage, ...newTrail];
    }
    return newTrail;
  }
  function findPage(pageId, currentContext) {
    let page = currentContext.pages.find((page2) => page2.pageId === pageId);
    if (page === void 0) {
      throw new Error("Page not found!");
    }
    return page;
  }
  function updateContext(modifications = {}) {
    setContext((currentContext) => ({
      ...currentContext,
      ...modifications
    }));
  }
  if (props.breadcrumbs) {
    return /* @__PURE__ */ react.createElement(NavContext_default.Provider, {
      value: context
    }, /* @__PURE__ */ react.createElement("div", {
      className: classes.navHelper
    }, /* @__PURE__ */ react.createElement(NavigatorBack_default, null), /* @__PURE__ */ react.createElement(NavigatorBreadcrumbs_default, null)), /* @__PURE__ */ react.createElement("div", {
      className: classes.nav
    }, react.Children.toArray(props.children).filter((navPage) => navPage.props.pageId === context.currentPage.pageId || navPage.props.pageId == context.transitionPage?.pageId).map((navPage) => {
      if (navPage.props.pageId === context.currentPage.pageId) {
        return react.cloneElement(navPage, {
          refN: outRef
        });
      } else {
        return react.cloneElement(navPage, {
          refN: inRef
        });
      }
    })));
  }
  return /* @__PURE__ */ react.createElement(NavContext_default.Provider, {
    value: context
  }, /* @__PURE__ */ react.createElement("div", {
    className: classes.nav
  }, props.children.find((navPage) => navPage.props.pageId === context.currentPage.pageId)));
};
var Navigator_default = Navigator;

// docs/dist/components/navigation/NavigatorPage.js
var import_react_jss8 = __toModule(require_react_jss());
var useStyles7 = (0, import_react_jss8.createUseStyles)({
  navPage: {
    marginTop: 25,
    position: "absolute",
    top: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40
  }
});
var defaultProps2 = {
  owner: "none"
};
var NavigatorPage = (props) => {
  const classes = useStyles7();
  return /* @__PURE__ */ react.createElement("div", {
    className: classes.navPage,
    ref: props.refN
  }, props.children);
};
NavigatorPage.defaultProps = defaultProps2;
var NavigatorPage_default = NavigatorPage;

// docs/dist/components/form/Login.js
var import_react_jss9 = __toModule(require_react_jss());

// docs/dist/api/axios.js
var axios_default2 = axios_default.create({
  baseURL: "http://localhost:3000"
});

// docs/dist/components/form/Login.js
var LOGIN_URL = "/login";
var useStyles8 = (0, import_react_jss9.createUseStyles)({
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    gap: 30
  }
});
var LogIn = () => {
  const classes = useStyles8();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.childNodes[0].childNodes[0].childNodes[1];
    const password = e.target.childNodes[1].childNodes[0].childNodes[1];
    try {
      const res = await axios_default2.post(LOGIN_URL, JSON.stringify({
        username: email.value,
        password: password.value
      }), {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
    } catch (err) {
      console.log(err);
    }
  };
  return /* @__PURE__ */ react.createElement("form", {
    className: classes.form,
    onSubmit: handleSubmit
  }, /* @__PURE__ */ react.createElement(TextEntry_default, {
    label: "email",
    width: "100%"
  }), /* @__PURE__ */ react.createElement(TextEntry_default, {
    label: "password",
    width: "100%",
    password: true
  }), /* @__PURE__ */ react.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ react.createElement(Button_default, {
    width: "50%",
    submit: true
  }, "Log In"), /* @__PURE__ */ react.createElement(Button_default, {
    width: "50%",
    fillColor: ColorType.BLUE,
    textColor: ColorType.WHITE,
    borderColor: ColorType.BLUE,
    navTo: "signup"
  }, "Sign Up")));
};
var Login_default = LogIn;

// docs/snowpack/pkg/socket.io-client.js
var PACKET_TYPES = Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = Object.create(null);
Object.keys(PACKET_TYPES).forEach((key) => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {type: "error", data: "parser error"};
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({type, data: data2}, supportsBinary, callback) => {
  if (withNativeBlob && data2 instanceof Blob) {
    if (supportsBinary) {
      return callback(data2);
    } else {
      return encodeBlobAsBase64(data2, callback);
    }
  } else if (withNativeArrayBuffer && (data2 instanceof ArrayBuffer || isView(data2))) {
    if (supportsBinary) {
      return callback(data2);
    } else {
      return encodeBlobAsBase64(new Blob([data2]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data2 || ""));
};
var encodeBlobAsBase64 = (data2, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function() {
    const content = fileReader.result.split(",")[1];
    callback("b" + content);
  };
  return fileReader.readAsDataURL(data2);
};
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var decode = (base64) => {
  let bufferLength = base64.length * 0.75, len = base64.length, i, p3 = 0, encoded1, encoded2, encoded3, encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength), bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p3++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p3++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p3++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};
var withNativeArrayBuffer$1 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data2, binaryType) => {
  if (withNativeArrayBuffer$1) {
    const decoded = decode(data2);
    return mapBinary(decoded, binaryType);
  } else {
    return {base64: true, data: data2};
  }
};
var mapBinary = (data2, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data2 instanceof ArrayBuffer ? new Blob([data2]) : data2;
    case "arraybuffer":
    default:
      return data2;
  }
};
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length2 = packets.length;
  const encodedPackets = new Array(length2);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket(packet, false, (encodedPacket) => {
      encodedPackets[i] = encodedPacket;
      if (++count === length2) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;
function Emitter(obj) {
  if (obj)
    return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function(event, fn) {
  function on3() {
    this.off(event, on3);
    fn.apply(this, arguments);
  }
  on3.fn = fn;
  this.on(event, on3);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
  this._callbacks = this._callbacks || {};
  if (arguments.length == 0) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks)
    return this;
  if (arguments.length == 1) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb2;
  for (var i = 0; i < callbacks.length; i++) {
    cb2 = callbacks[i];
    if (cb2 === fn || cb2.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function(event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function(event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function(event) {
  return !!this.listeners(event).length;
};
var globalThisShim = (() => {
  if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
})();
function pick(obj, ...attr) {
  return attr.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      acc[k] = obj[k];
    }
    return acc;
  }, {});
}
var NATIVE_SET_TIMEOUT = setTimeout;
var NATIVE_CLEAR_TIMEOUT = clearTimeout;
function installTimerFunctions(obj, opts) {
  if (opts.useNativeTimers) {
    obj.setTimeoutFn = NATIVE_SET_TIMEOUT.bind(globalThisShim);
    obj.clearTimeoutFn = NATIVE_CLEAR_TIMEOUT.bind(globalThisShim);
  } else {
    obj.setTimeoutFn = setTimeout.bind(globalThisShim);
    obj.clearTimeoutFn = clearTimeout.bind(globalThisShim);
  }
}
var BASE64_OVERHEAD = 1.33;
function byteLength(obj) {
  if (typeof obj === "string") {
    return utf8Length(obj);
  }
  return Math.ceil((obj.byteLength || obj.size) * BASE64_OVERHEAD);
}
function utf8Length(str) {
  let c = 0, length2 = 0;
  for (let i = 0, l2 = str.length; i < l2; i++) {
    c = str.charCodeAt(i);
    if (c < 128) {
      length2 += 1;
    } else if (c < 2048) {
      length2 += 2;
    } else if (c < 55296 || c >= 57344) {
      length2 += 3;
    } else {
      i++;
      length2 += 4;
    }
  }
  return length2;
}
var TransportError = class extends Error {
  constructor(reason, description, context) {
    super(reason);
    this.description = description;
    this.context = context;
    this.type = "TransportError";
  }
};
var Transport = class extends Emitter {
  constructor(opts) {
    super();
    this.writable = false;
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.query = opts.query;
    this.readyState = "";
    this.socket = opts.socket;
  }
  onError(reason, description, context) {
    super.emitReserved("error", new TransportError(reason, description, context));
    return this;
  }
  open() {
    if (this.readyState === "closed" || this.readyState === "") {
      this.readyState = "opening";
      this.doOpen();
    }
    return this;
  }
  close() {
    if (this.readyState === "opening" || this.readyState === "open") {
      this.doClose();
      this.onClose();
    }
    return this;
  }
  send(packets) {
    if (this.readyState === "open") {
      this.write(packets);
    }
  }
  onOpen() {
    this.readyState = "open";
    this.writable = true;
    super.emitReserved("open");
  }
  onData(data2) {
    const packet = decodePacket(data2, this.socket.binaryType);
    this.onPacket(packet);
  }
  onPacket(packet) {
    super.emitReserved("packet", packet);
  }
  onClose(details) {
    this.readyState = "closed";
    super.emitReserved("close", details);
  }
};
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var length = 64;
var seed = 0;
var prev;
function encode2(num) {
  let encoded = "";
  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);
  return encoded;
}
function yeast() {
  const now = encode2(+new Date());
  if (now !== prev)
    return seed = 0, prev = now;
  return now + "." + encode2(seed++);
}
function encode$1(obj) {
  let str = "";
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length)
        str += "&";
      str += encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]);
    }
  }
  return str;
}
function decode$1(qs) {
  let qry = {};
  let pairs = qs.split("&");
  for (let i = 0, l2 = pairs.length; i < l2; i++) {
    let pair = pairs[i].split("=");
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
}
var value = false;
try {
  value = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
} catch (err) {
}
var hasCORS = value;
function XHR(opts) {
  const xdomain = opts.xdomain;
  try {
    if (typeof XMLHttpRequest !== "undefined" && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {
  }
  if (!xdomain) {
    try {
      return new globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }
}
function empty2() {
}
var hasXHR2 = function() {
  const xhr2 = new XHR({
    xdomain: false
  });
  return xhr2.responseType != null;
}();
var Polling = class extends Transport {
  constructor(opts) {
    super(opts);
    this.polling = false;
    if (typeof location !== "undefined") {
      const isSSL = location.protocol === "https:";
      let port = location.port;
      if (!port) {
        port = isSSL ? "443" : "80";
      }
      this.xd = typeof location !== "undefined" && opts.hostname !== location.hostname || port !== opts.port;
      this.xs = opts.secure !== isSSL;
    }
    const forceBase64 = opts && opts.forceBase64;
    this.supportsBinary = hasXHR2 && !forceBase64;
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(onPause) {
    this.readyState = "pausing";
    const pause = () => {
      this.readyState = "paused";
      onPause();
    };
    if (this.polling || !this.writable) {
      let total = 0;
      if (this.polling) {
        total++;
        this.once("pollComplete", function() {
          --total || pause();
        });
      }
      if (!this.writable) {
        total++;
        this.once("drain", function() {
          --total || pause();
        });
      }
    } else {
      pause();
    }
  }
  poll() {
    this.polling = true;
    this.doPoll();
    this.emitReserved("poll");
  }
  onData(data2) {
    const callback = (packet) => {
      if (this.readyState === "opening" && packet.type === "open") {
        this.onOpen();
      }
      if (packet.type === "close") {
        this.onClose({description: "transport closed by the server"});
        return false;
      }
      this.onPacket(packet);
    };
    decodePayload(data2, this.socket.binaryType).forEach(callback);
    if (this.readyState !== "closed") {
      this.polling = false;
      this.emitReserved("pollComplete");
      if (this.readyState === "open") {
        this.poll();
      }
    }
  }
  doClose() {
    const close = () => {
      this.write([{type: "close"}]);
    };
    if (this.readyState === "open") {
      close();
    } else {
      this.once("open", close);
    }
  }
  write(packets) {
    this.writable = false;
    encodePayload(packets, (data2) => {
      this.doWrite(data2, () => {
        this.writable = true;
        this.emitReserved("drain");
      });
    });
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "https" : "http";
    let port = "";
    if (this.opts.timestampRequests !== false) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary && !query.sid) {
      query.b64 = 1;
    }
    if (this.opts.port && (schema === "https" && Number(this.opts.port) !== 443 || schema === "http" && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    const encodedQuery = encode$1(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  request(opts = {}) {
    Object.assign(opts, {xd: this.xd, xs: this.xs}, this.opts);
    return new Request(this.uri(), opts);
  }
  doWrite(data2, fn) {
    const req = this.request({
      method: "POST",
      data: data2
    });
    req.on("success", fn);
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr post error", xhrStatus, context);
    });
  }
  doPoll() {
    const req = this.request();
    req.on("data", this.onData.bind(this));
    req.on("error", (xhrStatus, context) => {
      this.onError("xhr poll error", xhrStatus, context);
    });
    this.pollXhr = req;
  }
};
var Request = class extends Emitter {
  constructor(uri, opts) {
    super();
    installTimerFunctions(this, opts);
    this.opts = opts;
    this.method = opts.method || "GET";
    this.uri = uri;
    this.async = opts.async !== false;
    this.data = opts.data !== void 0 ? opts.data : null;
    this.create();
  }
  create() {
    const opts = pick(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    opts.xdomain = !!this.opts.xd;
    opts.xscheme = !!this.opts.xs;
    const xhr2 = this.xhr = new XHR(opts);
    try {
      xhr2.open(this.method, this.uri, this.async);
      try {
        if (this.opts.extraHeaders) {
          xhr2.setDisableHeaderCheck && xhr2.setDisableHeaderCheck(true);
          for (let i in this.opts.extraHeaders) {
            if (this.opts.extraHeaders.hasOwnProperty(i)) {
              xhr2.setRequestHeader(i, this.opts.extraHeaders[i]);
            }
          }
        }
      } catch (e) {
      }
      if (this.method === "POST") {
        try {
          xhr2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (e) {
        }
      }
      try {
        xhr2.setRequestHeader("Accept", "*/*");
      } catch (e) {
      }
      if ("withCredentials" in xhr2) {
        xhr2.withCredentials = this.opts.withCredentials;
      }
      if (this.opts.requestTimeout) {
        xhr2.timeout = this.opts.requestTimeout;
      }
      xhr2.onreadystatechange = () => {
        if (xhr2.readyState !== 4)
          return;
        if (xhr2.status === 200 || xhr2.status === 1223) {
          this.onLoad();
        } else {
          this.setTimeoutFn(() => {
            this.onError(typeof xhr2.status === "number" ? xhr2.status : 0);
          }, 0);
        }
      };
      xhr2.send(this.data);
    } catch (e) {
      this.setTimeoutFn(() => {
        this.onError(e);
      }, 0);
      return;
    }
    if (typeof document !== "undefined") {
      this.index = Request.requestsCount++;
      Request.requests[this.index] = this;
    }
  }
  onError(err) {
    this.emitReserved("error", err, this.xhr);
    this.cleanup(true);
  }
  cleanup(fromError) {
    if (typeof this.xhr === "undefined" || this.xhr === null) {
      return;
    }
    this.xhr.onreadystatechange = empty2;
    if (fromError) {
      try {
        this.xhr.abort();
      } catch (e) {
      }
    }
    if (typeof document !== "undefined") {
      delete Request.requests[this.index];
    }
    this.xhr = null;
  }
  onLoad() {
    const data2 = this.xhr.responseText;
    if (data2 !== null) {
      this.emitReserved("data", data2);
      this.emitReserved("success");
      this.cleanup();
    }
  }
  abort() {
    this.cleanup();
  }
};
Request.requestsCount = 0;
Request.requests = {};
if (typeof document !== "undefined") {
  if (typeof attachEvent === "function") {
    attachEvent("onunload", unloadHandler);
  } else if (typeof addEventListener === "function") {
    const terminationEvent = "onpagehide" in globalThisShim ? "pagehide" : "unload";
    addEventListener(terminationEvent, unloadHandler, false);
  }
}
function unloadHandler() {
  for (let i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}
var nextTick2 = (() => {
  const isPromiseAvailable = typeof Promise === "function" && typeof Promise.resolve === "function";
  if (isPromiseAvailable) {
    return (cb2) => Promise.resolve().then(cb2);
  } else {
    return (cb2, setTimeoutFn) => setTimeoutFn(cb2, 0);
  }
})();
var WebSocket = globalThisShim.WebSocket || globalThisShim.MozWebSocket;
var usingBrowserWebSocket = true;
var defaultBinaryType = "arraybuffer";
var isReactNative = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
var WS = class extends Transport {
  constructor(opts) {
    super(opts);
    this.supportsBinary = !opts.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) {
      return;
    }
    const uri = this.uri();
    const protocols = this.opts.protocols;
    const opts = isReactNative ? {} : pick(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    if (this.opts.extraHeaders) {
      opts.headers = this.opts.extraHeaders;
    }
    try {
      this.ws = usingBrowserWebSocket && !isReactNative ? protocols ? new WebSocket(uri, protocols) : new WebSocket(uri) : new WebSocket(uri, protocols, opts);
    } catch (err) {
      return this.emitReserved("error", err);
    }
    this.ws.binaryType = this.socket.binaryType || defaultBinaryType;
    this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      if (this.opts.autoUnref) {
        this.ws._socket.unref();
      }
      this.onOpen();
    };
    this.ws.onclose = (closeEvent) => this.onClose({
      description: "websocket connection closed",
      context: closeEvent
    });
    this.ws.onmessage = (ev) => this.onData(ev.data);
    this.ws.onerror = (e) => this.onError("websocket error", e);
  }
  write(packets) {
    this.writable = false;
    for (let i = 0; i < packets.length; i++) {
      const packet = packets[i];
      const lastPacket = i === packets.length - 1;
      encodePacket(packet, this.supportsBinary, (data2) => {
        const opts = {};
        try {
          if (usingBrowserWebSocket) {
            this.ws.send(data2);
          }
        } catch (e) {
        }
        if (lastPacket) {
          nextTick2(() => {
            this.writable = true;
            this.emitReserved("drain");
          }, this.setTimeoutFn);
        }
      });
    }
  }
  doClose() {
    if (typeof this.ws !== "undefined") {
      this.ws.close();
      this.ws = null;
    }
  }
  uri() {
    let query = this.query || {};
    const schema = this.opts.secure ? "wss" : "ws";
    let port = "";
    if (this.opts.port && (schema === "wss" && Number(this.opts.port) !== 443 || schema === "ws" && Number(this.opts.port) !== 80)) {
      port = ":" + this.opts.port;
    }
    if (this.opts.timestampRequests) {
      query[this.opts.timestampParam] = yeast();
    }
    if (!this.supportsBinary) {
      query.b64 = 1;
    }
    const encodedQuery = encode$1(query);
    const ipv6 = this.opts.hostname.indexOf(":") !== -1;
    return schema + "://" + (ipv6 ? "[" + this.opts.hostname + "]" : this.opts.hostname) + port + this.opts.path + (encodedQuery.length ? "?" + encodedQuery : "");
  }
  check() {
    return !!WebSocket;
  }
};
var transports = {
  websocket: WS,
  polling: Polling
};
var re2 = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function parse(str) {
  const src = str, b = str.indexOf("["), e = str.indexOf("]");
  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ";") + str.substring(e, str.length);
  }
  let m = re2.exec(str || ""), uri = {}, i = 14;
  while (i--) {
    uri[parts[i]] = m[i] || "";
  }
  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ":");
    uri.authority = uri.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    uri.ipv6uri = true;
  }
  uri.pathNames = pathNames(uri, uri["path"]);
  uri.queryKey = queryKey(uri, uri["query"]);
  return uri;
}
function pathNames(obj, path) {
  const regx = /\/{2,9}/g, names = path.replace(regx, "/").split("/");
  if (path.substr(0, 1) == "/" || path.length === 0) {
    names.splice(0, 1);
  }
  if (path.substr(path.length - 1, 1) == "/") {
    names.splice(names.length - 1, 1);
  }
  return names;
}
function queryKey(uri, query) {
  const data2 = {};
  query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function($0, $1, $2) {
    if ($1) {
      data2[$1] = $2;
    }
  });
  return data2;
}
var Socket = class extends Emitter {
  constructor(uri, opts = {}) {
    super();
    if (uri && typeof uri === "object") {
      opts = uri;
      uri = null;
    }
    if (uri) {
      uri = parse(uri);
      opts.hostname = uri.host;
      opts.secure = uri.protocol === "https" || uri.protocol === "wss";
      opts.port = uri.port;
      if (uri.query)
        opts.query = uri.query;
    } else if (opts.host) {
      opts.hostname = parse(opts.host).host;
    }
    installTimerFunctions(this, opts);
    this.secure = opts.secure != null ? opts.secure : typeof location !== "undefined" && location.protocol === "https:";
    if (opts.hostname && !opts.port) {
      opts.port = this.secure ? "443" : "80";
    }
    this.hostname = opts.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
    this.port = opts.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
    this.transports = opts.transports || ["polling", "websocket"];
    this.readyState = "";
    this.writeBuffer = [];
    this.prevBufferLen = 0;
    this.opts = Object.assign({
      path: "/engine.io",
      agent: false,
      withCredentials: false,
      upgrade: true,
      timestampParam: "t",
      rememberUpgrade: false,
      rejectUnauthorized: true,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: true
    }, opts);
    this.opts.path = this.opts.path.replace(/\/$/, "") + "/";
    if (typeof this.opts.query === "string") {
      this.opts.query = decode$1(this.opts.query);
    }
    this.id = null;
    this.upgrades = null;
    this.pingInterval = null;
    this.pingTimeout = null;
    this.pingTimeoutTimer = null;
    if (typeof addEventListener === "function") {
      if (this.opts.closeOnBeforeunload) {
        addEventListener("beforeunload", () => {
          if (this.transport) {
            this.transport.removeAllListeners();
            this.transport.close();
          }
        }, false);
      }
      if (this.hostname !== "localhost") {
        this.offlineEventListener = () => {
          this.onClose("transport close", {
            description: "network connection lost"
          });
        };
        addEventListener("offline", this.offlineEventListener, false);
      }
    }
    this.open();
  }
  createTransport(name) {
    const query = Object.assign({}, this.opts.query);
    query.EIO = protocol;
    query.transport = name;
    if (this.id)
      query.sid = this.id;
    const opts = Object.assign({}, this.opts.transportOptions[name], this.opts, {
      query,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    });
    return new transports[name](opts);
  }
  open() {
    let transport;
    if (this.opts.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
      transport = "websocket";
    } else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    } else {
      transport = this.transports[0];
    }
    this.readyState = "opening";
    try {
      transport = this.createTransport(transport);
    } catch (e) {
      this.transports.shift();
      this.open();
      return;
    }
    transport.open();
    this.setTransport(transport);
  }
  setTransport(transport) {
    if (this.transport) {
      this.transport.removeAllListeners();
    }
    this.transport = transport;
    transport.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (reason) => this.onClose("transport close", reason));
  }
  probe(name) {
    let transport = this.createTransport(name);
    let failed = false;
    Socket.priorWebsocketSuccess = false;
    const onTransportOpen = () => {
      if (failed)
        return;
      transport.send([{type: "ping", data: "probe"}]);
      transport.once("packet", (msg) => {
        if (failed)
          return;
        if (msg.type === "pong" && msg.data === "probe") {
          this.upgrading = true;
          this.emitReserved("upgrading", transport);
          if (!transport)
            return;
          Socket.priorWebsocketSuccess = transport.name === "websocket";
          this.transport.pause(() => {
            if (failed)
              return;
            if (this.readyState === "closed")
              return;
            cleanup();
            this.setTransport(transport);
            transport.send([{type: "upgrade"}]);
            this.emitReserved("upgrade", transport);
            transport = null;
            this.upgrading = false;
            this.flush();
          });
        } else {
          const err = new Error("probe error");
          err.transport = transport.name;
          this.emitReserved("upgradeError", err);
        }
      });
    };
    function freezeTransport() {
      if (failed)
        return;
      failed = true;
      cleanup();
      transport.close();
      transport = null;
    }
    const onerror = (err) => {
      const error = new Error("probe error: " + err);
      error.transport = transport.name;
      freezeTransport();
      this.emitReserved("upgradeError", error);
    };
    function onTransportClose() {
      onerror("transport closed");
    }
    function onclose() {
      onerror("socket closed");
    }
    function onupgrade(to) {
      if (transport && to.name !== transport.name) {
        freezeTransport();
      }
    }
    const cleanup = () => {
      transport.removeListener("open", onTransportOpen);
      transport.removeListener("error", onerror);
      transport.removeListener("close", onTransportClose);
      this.off("close", onclose);
      this.off("upgrading", onupgrade);
    };
    transport.once("open", onTransportOpen);
    transport.once("error", onerror);
    transport.once("close", onTransportClose);
    this.once("close", onclose);
    this.once("upgrading", onupgrade);
    transport.open();
  }
  onOpen() {
    this.readyState = "open";
    Socket.priorWebsocketSuccess = this.transport.name === "websocket";
    this.emitReserved("open");
    this.flush();
    if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
      let i = 0;
      const l2 = this.upgrades.length;
      for (; i < l2; i++) {
        this.probe(this.upgrades[i]);
      }
    }
  }
  onPacket(packet) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      this.emitReserved("packet", packet);
      this.emitReserved("heartbeat");
      switch (packet.type) {
        case "open":
          this.onHandshake(JSON.parse(packet.data));
          break;
        case "ping":
          this.resetPingTimeout();
          this.sendPacket("pong");
          this.emitReserved("ping");
          this.emitReserved("pong");
          break;
        case "error":
          const err = new Error("server error");
          err.code = packet.data;
          this.onError(err);
          break;
        case "message":
          this.emitReserved("data", packet.data);
          this.emitReserved("message", packet.data);
          break;
      }
    }
  }
  onHandshake(data2) {
    this.emitReserved("handshake", data2);
    this.id = data2.sid;
    this.transport.query.sid = data2.sid;
    this.upgrades = this.filterUpgrades(data2.upgrades);
    this.pingInterval = data2.pingInterval;
    this.pingTimeout = data2.pingTimeout;
    this.maxPayload = data2.maxPayload;
    this.onOpen();
    if (this.readyState === "closed")
      return;
    this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer);
    this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout);
    if (this.opts.autoUnref) {
      this.pingTimeoutTimer.unref();
    }
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen);
    this.prevBufferLen = 0;
    if (this.writeBuffer.length === 0) {
      this.emitReserved("drain");
    } else {
      this.flush();
    }
  }
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const packets = this.getWritablePackets();
      this.transport.send(packets);
      this.prevBufferLen = packets.length;
      this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    const shouldCheckPayloadSize = this.maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
    if (!shouldCheckPayloadSize) {
      return this.writeBuffer;
    }
    let payloadSize = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const data2 = this.writeBuffer[i].data;
      if (data2) {
        payloadSize += byteLength(data2);
      }
      if (i > 0 && payloadSize > this.maxPayload) {
        return this.writeBuffer.slice(0, i);
      }
      payloadSize += 2;
    }
    return this.writeBuffer;
  }
  write(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  send(msg, options, fn) {
    this.sendPacket("message", msg, options, fn);
    return this;
  }
  sendPacket(type, data2, options, fn) {
    if (typeof data2 === "function") {
      fn = data2;
      data2 = void 0;
    }
    if (typeof options === "function") {
      fn = options;
      options = null;
    }
    if (this.readyState === "closing" || this.readyState === "closed") {
      return;
    }
    options = options || {};
    options.compress = options.compress !== false;
    const packet = {
      type,
      data: data2,
      options
    };
    this.emitReserved("packetCreate", packet);
    this.writeBuffer.push(packet);
    if (fn)
      this.once("flush", fn);
    this.flush();
  }
  close() {
    const close = () => {
      this.onClose("forced close");
      this.transport.close();
    };
    const cleanupAndClose = () => {
      this.off("upgrade", cleanupAndClose);
      this.off("upgradeError", cleanupAndClose);
      close();
    };
    const waitForUpgrade = () => {
      this.once("upgrade", cleanupAndClose);
      this.once("upgradeError", cleanupAndClose);
    };
    if (this.readyState === "opening" || this.readyState === "open") {
      this.readyState = "closing";
      if (this.writeBuffer.length) {
        this.once("drain", () => {
          if (this.upgrading) {
            waitForUpgrade();
          } else {
            close();
          }
        });
      } else if (this.upgrading) {
        waitForUpgrade();
      } else {
        close();
      }
    }
    return this;
  }
  onError(err) {
    Socket.priorWebsocketSuccess = false;
    this.emitReserved("error", err);
    this.onClose("transport error", err);
  }
  onClose(reason, description) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      this.clearTimeoutFn(this.pingTimeoutTimer);
      this.transport.removeAllListeners("close");
      this.transport.close();
      this.transport.removeAllListeners();
      if (typeof removeEventListener === "function") {
        removeEventListener("offline", this.offlineEventListener, false);
      }
      this.readyState = "closed";
      this.id = null;
      this.emitReserved("close", reason, description);
      this.writeBuffer = [];
      this.prevBufferLen = 0;
    }
  }
  filterUpgrades(upgrades) {
    const filteredUpgrades = [];
    let i = 0;
    const j = upgrades.length;
    for (; i < j; i++) {
      if (~this.transports.indexOf(upgrades[i]))
        filteredUpgrades.push(upgrades[i]);
    }
    return filteredUpgrades;
  }
};
Socket.protocol = protocol;
function url(uri, path = "", loc) {
  let obj = uri;
  loc = loc || typeof location !== "undefined" && location;
  if (uri == null)
    uri = loc.protocol + "//" + loc.host;
  if (typeof uri === "string") {
    if (uri.charAt(0) === "/") {
      if (uri.charAt(1) === "/") {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }
    if (!/^(https?|wss?):\/\//.test(uri)) {
      if (typeof loc !== "undefined") {
        uri = loc.protocol + "//" + uri;
      } else {
        uri = "https://" + uri;
      }
    }
    obj = parse(uri);
  }
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = "80";
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = "443";
    }
  }
  obj.path = obj.path || "/";
  const ipv6 = obj.host.indexOf(":") !== -1;
  const host = ipv6 ? "[" + obj.host + "]" : obj.host;
  obj.id = obj.protocol + "://" + host + ":" + obj.port + path;
  obj.href = obj.protocol + "://" + host + (loc && loc.port === obj.port ? "" : ":" + obj.port);
  return obj;
}
var withNativeArrayBuffer$2 = typeof ArrayBuffer === "function";
var isView$1 = (obj) => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString2 = Object.prototype.toString;
var withNativeBlob$1 = typeof Blob === "function" || typeof Blob !== "undefined" && toString2.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString2.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer$2 && (obj instanceof ArrayBuffer || isView$1(obj)) || withNativeBlob$1 && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON2) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l2 = obj.length; i < l2; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {packet: pack, buffers};
}
function _deconstructPacket(data2, buffers) {
  if (!data2)
    return data2;
  if (isBinary(data2)) {
    const placeholder = {_placeholder: true, num: buffers.length};
    buffers.push(data2);
    return placeholder;
  } else if (Array.isArray(data2)) {
    const newData = new Array(data2.length);
    for (let i = 0; i < data2.length; i++) {
      newData[i] = _deconstructPacket(data2[i], buffers);
    }
    return newData;
  } else if (typeof data2 === "object" && !(data2 instanceof Date)) {
    const newData = {};
    for (const key in data2) {
      if (Object.prototype.hasOwnProperty.call(data2, key)) {
        newData[key] = _deconstructPacket(data2[key], buffers);
      }
    }
    return newData;
  }
  return data2;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = void 0;
  return packet;
}
function _reconstructPacket(data2, buffers) {
  if (!data2)
    return data2;
  if (data2 && data2._placeholder === true) {
    const isIndexValid = typeof data2.num === "number" && data2.num >= 0 && data2.num < buffers.length;
    if (isIndexValid) {
      return buffers[data2.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data2)) {
    for (let i = 0; i < data2.length; i++) {
      data2[i] = _reconstructPacket(data2[i], buffers);
    }
  } else if (typeof data2 === "object") {
    for (const key in data2) {
      if (Object.prototype.hasOwnProperty.call(data2, key)) {
        data2[key] = _reconstructPacket(data2[key], buffers);
      }
    }
  }
  return data2;
}
var protocol$1 = 5;
var PacketType;
(function(PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        obj.type = obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK;
        return this.encodeAsBinary(obj);
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && obj.nsp !== "/") {
      str += obj.nsp + ",";
    }
    if (obj.id != null) {
      str += obj.id;
    }
    if (obj.data != null) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      if (packet.type === PacketType.BINARY_EVENT || packet.type === PacketType.BINARY_ACK) {
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p3 = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p3.type] === void 0) {
      throw new Error("unknown packet type " + p3.type);
    }
    if (p3.type === PacketType.BINARY_EVENT || p3.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {
      }
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p3.attachments = Number(buf);
    }
    if (str.charAt(i + 1) === "/") {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (c === ",")
          break;
        if (i === str.length)
          break;
      }
      p3.nsp = str.substring(start, i);
    } else {
      p3.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if (next !== "" && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (c == null || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length)
          break;
      }
      p3.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p3.type, payload)) {
        p3.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p3;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
var parser = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  protocol: protocol$1,
  get PacketType() {
    return PacketType;
  },
  Encoder,
  Decoder
});
function on2(obj, ev, fn) {
  obj.on(ev, fn);
  return function subDestroy() {
    obj.off(ev, fn);
  };
}
var RESERVED_EVENTS = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1
});
var Socket$1 = class extends Emitter {
  constructor(io, nsp, opts) {
    super();
    this.connected = false;
    this.receiveBuffer = [];
    this.sendBuffer = [];
    this.ids = 0;
    this.acks = {};
    this.flags = {};
    this.io = io;
    this.nsp = nsp;
    if (opts && opts.auth) {
      this.auth = opts.auth;
    }
    if (this.io._autoConnect)
      this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs)
      return;
    const io = this.io;
    this.subs = [
      on2(io, "open", this.onopen.bind(this)),
      on2(io, "packet", this.onpacket.bind(this)),
      on2(io, "error", this.onerror.bind(this)),
      on2(io, "close", this.onclose.bind(this))
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    if (this.connected)
      return this;
    this.subEvents();
    if (!this.io["_reconnecting"])
      this.io.open();
    if (this.io._readyState === "open")
      this.onopen();
    return this;
  }
  open() {
    return this.connect();
  }
  send(...args) {
    args.unshift("message");
    this.emit.apply(this, args);
    return this;
  }
  emit(ev, ...args) {
    if (RESERVED_EVENTS.hasOwnProperty(ev)) {
      throw new Error('"' + ev.toString() + '" is a reserved event name');
    }
    args.unshift(ev);
    const packet = {
      type: PacketType.EVENT,
      data: args
    };
    packet.options = {};
    packet.options.compress = this.flags.compress !== false;
    if (typeof args[args.length - 1] === "function") {
      const id2 = this.ids++;
      const ack = args.pop();
      this._registerAckCallback(id2, ack);
      packet.id = id2;
    }
    const isTransportWritable = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    const discardPacket = this.flags.volatile && (!isTransportWritable || !this.connected);
    if (discardPacket)
      ;
    else if (this.connected) {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    } else {
      this.sendBuffer.push(packet);
    }
    this.flags = {};
    return this;
  }
  _registerAckCallback(id2, ack) {
    const timeout = this.flags.timeout;
    if (timeout === void 0) {
      this.acks[id2] = ack;
      return;
    }
    const timer = this.io.setTimeoutFn(() => {
      delete this.acks[id2];
      for (let i = 0; i < this.sendBuffer.length; i++) {
        if (this.sendBuffer[i].id === id2) {
          this.sendBuffer.splice(i, 1);
        }
      }
      ack.call(this, new Error("operation has timed out"));
    }, timeout);
    this.acks[id2] = (...args) => {
      this.io.clearTimeoutFn(timer);
      ack.apply(this, [null, ...args]);
    };
  }
  packet(packet) {
    packet.nsp = this.nsp;
    this.io._packet(packet);
  }
  onopen() {
    if (typeof this.auth == "function") {
      this.auth((data2) => {
        this.packet({type: PacketType.CONNECT, data: data2});
      });
    } else {
      this.packet({type: PacketType.CONNECT, data: this.auth});
    }
  }
  onerror(err) {
    if (!this.connected) {
      this.emitReserved("connect_error", err);
    }
  }
  onclose(reason, description) {
    this.connected = false;
    delete this.id;
    this.emitReserved("disconnect", reason, description);
  }
  onpacket(packet) {
    const sameNamespace = packet.nsp === this.nsp;
    if (!sameNamespace)
      return;
    switch (packet.type) {
      case PacketType.CONNECT:
        if (packet.data && packet.data.sid) {
          const id2 = packet.data.sid;
          this.onconnect(id2);
        } else {
          this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        }
        break;
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        this.onevent(packet);
        break;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        this.onack(packet);
        break;
      case PacketType.DISCONNECT:
        this.ondisconnect();
        break;
      case PacketType.CONNECT_ERROR:
        this.destroy();
        const err = new Error(packet.data.message);
        err.data = packet.data.data;
        this.emitReserved("connect_error", err);
        break;
    }
  }
  onevent(packet) {
    const args = packet.data || [];
    if (packet.id != null) {
      args.push(this.ack(packet.id));
    }
    if (this.connected) {
      this.emitEvent(args);
    } else {
      this.receiveBuffer.push(Object.freeze(args));
    }
  }
  emitEvent(args) {
    if (this._anyListeners && this._anyListeners.length) {
      const listeners = this._anyListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, args);
      }
    }
    super.emit.apply(this, args);
  }
  ack(id2) {
    const self2 = this;
    let sent = false;
    return function(...args) {
      if (sent)
        return;
      sent = true;
      self2.packet({
        type: PacketType.ACK,
        id: id2,
        data: args
      });
    };
  }
  onack(packet) {
    const ack = this.acks[packet.id];
    if (typeof ack === "function") {
      ack.apply(this, packet.data);
      delete this.acks[packet.id];
    }
  }
  onconnect(id2) {
    this.id = id2;
    this.connected = true;
    this.emitBuffered();
    this.emitReserved("connect");
  }
  emitBuffered() {
    this.receiveBuffer.forEach((args) => this.emitEvent(args));
    this.receiveBuffer = [];
    this.sendBuffer.forEach((packet) => {
      this.notifyOutgoingListeners(packet);
      this.packet(packet);
    });
    this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy();
    this.onclose("io server disconnect");
  }
  destroy() {
    if (this.subs) {
      this.subs.forEach((subDestroy) => subDestroy());
      this.subs = void 0;
    }
    this.io["_destroy"](this);
  }
  disconnect() {
    if (this.connected) {
      this.packet({type: PacketType.DISCONNECT});
    }
    this.destroy();
    if (this.connected) {
      this.onclose("io client disconnect");
    }
    return this;
  }
  close() {
    return this.disconnect();
  }
  compress(compress) {
    this.flags.compress = compress;
    return this;
  }
  get volatile() {
    this.flags.volatile = true;
    return this;
  }
  timeout(timeout) {
    this.flags.timeout = timeout;
    return this;
  }
  onAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.push(listener);
    return this;
  }
  prependAny(listener) {
    this._anyListeners = this._anyListeners || [];
    this._anyListeners.unshift(listener);
    return this;
  }
  offAny(listener) {
    if (!this._anyListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyListeners = [];
    }
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.push(listener);
    return this;
  }
  prependAnyOutgoing(listener) {
    this._anyOutgoingListeners = this._anyOutgoingListeners || [];
    this._anyOutgoingListeners.unshift(listener);
    return this;
  }
  offAnyOutgoing(listener) {
    if (!this._anyOutgoingListeners) {
      return this;
    }
    if (listener) {
      const listeners = this._anyOutgoingListeners;
      for (let i = 0; i < listeners.length; i++) {
        if (listener === listeners[i]) {
          listeners.splice(i, 1);
          return this;
        }
      }
    } else {
      this._anyOutgoingListeners = [];
    }
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(packet) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const listeners = this._anyOutgoingListeners.slice();
      for (const listener of listeners) {
        listener.apply(this, packet.data);
      }
    }
  }
};
function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 1e4;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
Backoff.prototype.duration = function() {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};
Backoff.prototype.reset = function() {
  this.attempts = 0;
};
Backoff.prototype.setMin = function(min) {
  this.ms = min;
};
Backoff.prototype.setMax = function(max) {
  this.max = max;
};
Backoff.prototype.setJitter = function(jitter) {
  this.jitter = jitter;
};
var Manager = class extends Emitter {
  constructor(uri, opts) {
    var _a;
    super();
    this.nsps = {};
    this.subs = [];
    if (uri && typeof uri === "object") {
      opts = uri;
      uri = void 0;
    }
    opts = opts || {};
    opts.path = opts.path || "/socket.io";
    this.opts = opts;
    installTimerFunctions(this, opts);
    this.reconnection(opts.reconnection !== false);
    this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
    this.reconnectionDelay(opts.reconnectionDelay || 1e3);
    this.reconnectionDelayMax(opts.reconnectionDelayMax || 5e3);
    this.randomizationFactor((_a = opts.randomizationFactor) !== null && _a !== void 0 ? _a : 0.5);
    this.backoff = new Backoff({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    });
    this.timeout(opts.timeout == null ? 2e4 : opts.timeout);
    this._readyState = "closed";
    this.uri = uri;
    const _parser = opts.parser || parser;
    this.encoder = new _parser.Encoder();
    this.decoder = new _parser.Decoder();
    this._autoConnect = opts.autoConnect !== false;
    if (this._autoConnect)
      this.open();
  }
  reconnection(v3) {
    if (!arguments.length)
      return this._reconnection;
    this._reconnection = !!v3;
    return this;
  }
  reconnectionAttempts(v3) {
    if (v3 === void 0)
      return this._reconnectionAttempts;
    this._reconnectionAttempts = v3;
    return this;
  }
  reconnectionDelay(v3) {
    var _a;
    if (v3 === void 0)
      return this._reconnectionDelay;
    this._reconnectionDelay = v3;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMin(v3);
    return this;
  }
  randomizationFactor(v3) {
    var _a;
    if (v3 === void 0)
      return this._randomizationFactor;
    this._randomizationFactor = v3;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setJitter(v3);
    return this;
  }
  reconnectionDelayMax(v3) {
    var _a;
    if (v3 === void 0)
      return this._reconnectionDelayMax;
    this._reconnectionDelayMax = v3;
    (_a = this.backoff) === null || _a === void 0 ? void 0 : _a.setMax(v3);
    return this;
  }
  timeout(v3) {
    if (!arguments.length)
      return this._timeout;
    this._timeout = v3;
    return this;
  }
  maybeReconnectOnOpen() {
    if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
      this.reconnect();
    }
  }
  open(fn) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new Socket(this.uri, this.opts);
    const socket2 = this.engine;
    const self2 = this;
    this._readyState = "opening";
    this.skipReconnect = false;
    const openSubDestroy = on2(socket2, "open", function() {
      self2.onopen();
      fn && fn();
    });
    const errorSub = on2(socket2, "error", (err) => {
      self2.cleanup();
      self2._readyState = "closed";
      this.emitReserved("error", err);
      if (fn) {
        fn(err);
      } else {
        self2.maybeReconnectOnOpen();
      }
    });
    if (this._timeout !== false) {
      const timeout = this._timeout;
      if (timeout === 0) {
        openSubDestroy();
      }
      const timer = this.setTimeoutFn(() => {
        openSubDestroy();
        socket2.close();
        socket2.emit("error", new Error("timeout"));
      }, timeout);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
    this.subs.push(openSubDestroy);
    this.subs.push(errorSub);
    return this;
  }
  connect(fn) {
    return this.open(fn);
  }
  onopen() {
    this.cleanup();
    this._readyState = "open";
    this.emitReserved("open");
    const socket2 = this.engine;
    this.subs.push(on2(socket2, "ping", this.onping.bind(this)), on2(socket2, "data", this.ondata.bind(this)), on2(socket2, "error", this.onerror.bind(this)), on2(socket2, "close", this.onclose.bind(this)), on2(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(data2) {
    try {
      this.decoder.add(data2);
    } catch (e) {
      this.onclose("parse error");
    }
  }
  ondecoded(packet) {
    this.emitReserved("packet", packet);
  }
  onerror(err) {
    this.emitReserved("error", err);
  }
  socket(nsp, opts) {
    let socket2 = this.nsps[nsp];
    if (!socket2) {
      socket2 = new Socket$1(this, nsp, opts);
      this.nsps[nsp] = socket2;
    }
    return socket2;
  }
  _destroy(socket2) {
    const nsps = Object.keys(this.nsps);
    for (const nsp of nsps) {
      const socket3 = this.nsps[nsp];
      if (socket3.active) {
        return;
      }
    }
    this._close();
  }
  _packet(packet) {
    const encodedPackets = this.encoder.encode(packet);
    for (let i = 0; i < encodedPackets.length; i++) {
      this.engine.write(encodedPackets[i], packet.options);
    }
  }
  cleanup() {
    this.subs.forEach((subDestroy) => subDestroy());
    this.subs.length = 0;
    this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true;
    this._reconnecting = false;
    this.onclose("forced close");
    if (this.engine)
      this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(reason, description) {
    this.cleanup();
    this.backoff.reset();
    this._readyState = "closed";
    this.emitReserved("close", reason, description);
    if (this._reconnection && !this.skipReconnect) {
      this.reconnect();
    }
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const self2 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) {
      this.backoff.reset();
      this.emitReserved("reconnect_failed");
      this._reconnecting = false;
    } else {
      const delay = this.backoff.duration();
      this._reconnecting = true;
      const timer = this.setTimeoutFn(() => {
        if (self2.skipReconnect)
          return;
        this.emitReserved("reconnect_attempt", self2.backoff.attempts);
        if (self2.skipReconnect)
          return;
        self2.open((err) => {
          if (err) {
            self2._reconnecting = false;
            self2.reconnect();
            this.emitReserved("reconnect_error", err);
          } else {
            self2.onreconnect();
          }
        });
      }, delay);
      if (this.opts.autoUnref) {
        timer.unref();
      }
      this.subs.push(function subDestroy() {
        clearTimeout(timer);
      });
    }
  }
  onreconnect() {
    const attempt = this.backoff.attempts;
    this._reconnecting = false;
    this.backoff.reset();
    this.emitReserved("reconnect", attempt);
  }
};
var cache = {};
function lookup$1(uri, opts) {
  if (typeof uri === "object") {
    opts = uri;
    uri = void 0;
  }
  opts = opts || {};
  const parsed = url(uri, opts.path || "/socket.io");
  const source2 = parsed.source;
  const id2 = parsed.id;
  const path = parsed.path;
  const sameNamespace = cache[id2] && path in cache[id2]["nsps"];
  const newConnection = opts.forceNew || opts["force new connection"] || opts.multiplex === false || sameNamespace;
  let io;
  if (newConnection) {
    io = new Manager(source2, opts);
  } else {
    if (!cache[id2]) {
      cache[id2] = new Manager(source2, opts);
    }
    io = cache[id2];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.queryKey;
  }
  return io.socket(parsed.path, opts);
}
Object.assign(lookup$1, {
  Manager,
  Socket: Socket$1,
  io: lookup$1,
  connect: lookup$1
});
var socket_io_client_default = lookup$1;

// docs/dist/api/socket.js
var socket = socket_io_client_default("http://localhost:4527");
var socket_default = socket;

// docs/dist/components/application-state/StateContext.js
var defaultState = {
  currentMode: "menu",
  transitionMode: null,
  setMode: empty
};
var animationDirection2 = ["x", "100"];
var outgoingAnimation2 = (dir) => [
  {opacity: 1},
  {opacity: 0, transform: `translate${dir[0]}(${100 * dir[1]}%)`}
];
var incomingAnimation2 = (dir) => [
  {opacity: 0, transform: `translate${dir[0]}(${100 * -dir[1]}%)`},
  {opacity: 1}
];
var animationOptions2 = {
  duration: 400,
  fill: "both",
  easing: "ease-in"
};
var AppContext = react.createContext(defaultState);
var AppNavigator = (props) => {
  const [context, setContext] = useState2(defaultState);
  const outRef = useCallback2((node) => {
    if (node && context.transitionMode)
      node.animate(outgoingAnimation2(animationDirection2), animationOptions2);
  });
  const inRef = useCallback2((node) => {
    if (node) {
      node.animate(incomingAnimation2(animationDirection2), animationOptions2).addEventListener("finish", (event) => {
        setContext((prev2) => ({
          ...prev2,
          transitionMode: null,
          currentMode: prev2.transitionMode
        }));
      });
    }
  });
  useEffect2(() => {
    updateContext({
      setMode: switchMode
    });
  }, []);
  function switchMode(modeId) {
    if (context.currentMode === modeId)
      return;
    if (context.currentMode && context.transitionMode)
      return;
    updateContext({
      transitionMode: modeId
    });
  }
  function updateContext(modifications = {}) {
    setContext((currentContext) => ({
      ...currentContext,
      ...modifications
    }));
  }
  return /* @__PURE__ */ react.createElement(AppContext.Provider, {
    value: context
  }, /* @__PURE__ */ react.createElement("div", null, react.Children.toArray(props.children).filter((mode) => mode.props.modeId === context.currentMode || mode.props.modeId == context?.transitionMode).map((mode) => {
    if (mode.props.modeId === context.currentMode) {
      return react.cloneElement(mode, {
        refN: outRef
      });
    } else {
      return react.cloneElement(mode, {
        refN: inRef
      });
    }
  })));
};
var Mode = (props) => {
  return /* @__PURE__ */ react.createElement("div", {
    ref: props.refN
  }, props.children);
};
var StateContext_default = AppNavigator;

// docs/dist/components/Menu.js
var useStyles9 = (0, import_react_jss10.createUseStyles)({
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80vw",
    maxWidth: 600,
    margin: "auto",
    marginTop: 30,
    "& > :nth-child(1)": {
      marginTop: 0,
      marginBottom: 60
    }
  },
  row: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    gap: 30
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40
  }
});
var Menu = () => {
  const classes = useStyles9();
  const appContext = useContext2(AppContext);
  function requestHost(e) {
    e.preventDefault();
    const roomId = e.target.childNodes[0].childNodes[0].childNodes[1].value;
    console.log(roomId);
    socket_default.emit("request-host", roomId);
  }
  function requestJoin(e) {
    e.preventDefault();
    const roomId = e.target.childNodes[0].childNodes[0].childNodes[1].value;
    console.log(roomId);
    socket_default.emit("request-join", roomId);
  }
  socket_default.on("join-game", () => {
    appContext.setMode("game");
  });
  socket_default.on("host-fail", () => {
    console.log("room id in use!");
  });
  socket_default.on("join-fail", (inRoom) => {
    console.log(inRoom ? "already in room!" : "no such room exists!");
  });
  return /* @__PURE__ */ react.createElement("div", {
    className: classes.menu
  }, /* @__PURE__ */ react.createElement(Title_default, null, "BATTLE CHESS"), /* @__PURE__ */ react.createElement(Navigator_default, {
    breadcrumbs: true
  }, /* @__PURE__ */ react.createElement(NavigatorPage_default, {
    pageId: "home"
  }, /* @__PURE__ */ react.createElement(Button_default, {
    navTo: "play"
  }, "Play Game"), /* @__PURE__ */ react.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ react.createElement(Button_default, {
    navTo: "login",
    width: "45%"
  }, "Log In"), /* @__PURE__ */ react.createElement(Button_default, {
    navTo: "signup",
    width: "45%",
    fillColor: ColorType.BLUE,
    textColor: ColorType.WHITE,
    borderColor: ColorType.BLUE
  }, "Sign Up"))), /* @__PURE__ */ react.createElement(NavigatorPage_default, {
    pageId: "play",
    owner: "home"
  }, /* @__PURE__ */ react.createElement(Button_default, null, "Find Game"), /* @__PURE__ */ react.createElement(Button_default, {
    navTo: "join-game"
  }, "Join Game"), /* @__PURE__ */ react.createElement(Button_default, {
    navTo: "host-game"
  }, "Host Game")), /* @__PURE__ */ react.createElement(NavigatorPage_default, {
    pageId: "join-game",
    owner: "play"
  }, /* @__PURE__ */ react.createElement("form", {
    className: classes.form,
    onSubmit: requestJoin
  }, /* @__PURE__ */ react.createElement(TextEntry_default, {
    label: "room id"
  }), /* @__PURE__ */ react.createElement(Button_default, {
    submit: true
  }, "Join"))), /* @__PURE__ */ react.createElement(NavigatorPage_default, {
    pageId: "host-game",
    owner: "play"
  }, /* @__PURE__ */ react.createElement("form", {
    className: classes.form,
    onSubmit: requestHost
  }, /* @__PURE__ */ react.createElement(TextEntry_default, {
    label: "room id"
  }), /* @__PURE__ */ react.createElement(Button_default, {
    submit: true
  }, "Host"))), /* @__PURE__ */ react.createElement(NavigatorPage_default, {
    pageId: "login",
    owner: "home"
  }, /* @__PURE__ */ react.createElement(Login_default, null)), /* @__PURE__ */ react.createElement(NavigatorPage_default, {
    pageId: "signup",
    owner: "home"
  }, /* @__PURE__ */ react.createElement("form", {
    className: classes.form
  }, /* @__PURE__ */ react.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ react.createElement(TextEntry_default, {
    width: "50%",
    label: "first name"
  }), /* @__PURE__ */ react.createElement(TextEntry_default, {
    width: "50%",
    label: "last name"
  })), /* @__PURE__ */ react.createElement(TextEntry_default, {
    label: "email"
  }), /* @__PURE__ */ react.createElement(TextEntry_default, {
    label: "password",
    password: true
  }), /* @__PURE__ */ react.createElement("div", {
    className: classes.row
  }, /* @__PURE__ */ react.createElement(Button_default, {
    width: "50%",
    navTo: "login"
  }, "Log In"), /* @__PURE__ */ react.createElement(Button_default, {
    width: "50%",
    fillColor: ColorType.BLUE,
    textColor: ColorType.WHITE,
    borderColor: ColorType.BLUE
  }, "Sign Up"))))));
};
var Menu_default = Menu;

// docs/dist/components/game/Board.js
var import_react_jss11 = __toModule(require_react_jss());

// docs/snowpack/pkg/lodash.js
var lodash = createCommonjsModule(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION2 = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root2 = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        var value2 = array[index];
        setter(accumulator, value2, iteratee(value2), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length2 = array == null ? 0 : array.length;
      while (length2--) {
        if (iteratee(array[length2], length2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length2) {
        var value2 = array[index];
        if (predicate(value2, index, array)) {
          result[resIndex++] = value2;
        }
      }
      return result;
    }
    function arrayIncludes(array, value2) {
      var length2 = array == null ? 0 : array.length;
      return !!length2 && baseIndexOf(array, value2, 0) > -1;
    }
    function arrayIncludesWith(array, value2, comparator) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        if (comparator(value2, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index = -1, length2 = array == null ? 0 : array.length, result = Array(length2);
      while (++index < length2) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length2 = values.length, offset = array.length;
      while (++index < length2) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length2 = array == null ? 0 : array.length;
      if (initAccum && length2) {
        accumulator = array[++index];
      }
      while (++index < length2) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length2 = array == null ? 0 : array.length;
      if (initAccum && length2) {
        accumulator = array[--length2];
      }
      while (length2--) {
        accumulator = iteratee(accumulator, array[length2], length2, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length2 = array == null ? 0 : array.length;
      while (++index < length2) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value2, key, collection2) {
        if (predicate(value2, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length2 = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length2) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value2, fromIndex) {
      return value2 === value2 ? strictIndexOf(array, value2, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value2, fromIndex, comparator) {
      var index = fromIndex - 1, length2 = array.length;
      while (++index < length2) {
        if (comparator(array[index], value2)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value2) {
      return value2 !== value2;
    }
    function baseMean(array, iteratee) {
      var length2 = array == null ? 0 : array.length;
      return length2 ? baseSum(array, iteratee) / length2 : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value2, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value2) : iteratee(accumulator, value2, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length2 = array.length;
      array.sort(comparer);
      while (length2--) {
        array[length2] = array[length2].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index = -1, length2 = array.length;
      while (++index < length2) {
        var current = iteratee(array[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n2, iteratee) {
      var index = -1, result = Array(n2);
      while (++index < n2) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value2) {
        return func(value2);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache2, key) {
      return cache2.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length2 = strSymbols.length;
      while (++index < length2 && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array, placeholder) {
      var length2 = array.length, result = 0;
      while (length2--) {
        if (array[length2] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data2, result = [];
      while (!(data2 = iterator.next()).done) {
        result.push(data2.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value2, key) {
        result[++index] = [key, value2];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length2 = array.length, resIndex = 0, result = [];
      while (++index < length2) {
        var value2 = array[index];
        if (value2 === placeholder || value2 === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value2) {
        result[++index] = value2;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value2) {
        result[++index] = [value2, value2];
      });
      return result;
    }
    function strictIndexOf(array, value2, fromIndex) {
      var index = fromIndex - 1, length2 = array.length;
      while (++index < length2) {
        if (array[index] === value2) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value2, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value2) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root2 : _.defaults(root2.Object(), context, _.pick(root2, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root2._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root2.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root2.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root2.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap2 && new WeakMap2();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value2) {
        if (isObjectLike(value2) && !isArray2(value2) && !(value2 instanceof LazyWrapper)) {
          if (value2 instanceof LodashWrapper) {
            return value2;
          }
          if (hasOwnProperty.call(value2, "__wrapped__")) {
            return wrapperClone(value2);
          }
        }
        return new LodashWrapper(value2);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value2, chainAll) {
        this.__wrapped__ = value2;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        escape: reEscape,
        evaluate: reEvaluate,
        interpolate: reInterpolate,
        variable: "",
        imports: {
          _: lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value2) {
        this.__wrapped__ = value2;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length2 = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length2, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length2 && takeCount == length2) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length2-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value2 = array[index];
            while (++iterIndex < iterLength) {
              var data2 = iteratees[iterIndex], iteratee2 = data2.iteratee, type = data2.type, computed = iteratee2(value2);
              if (type == LAZY_MAP_FLAG) {
                value2 = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value2;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length2) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data2 = this.__data__;
        if (nativeCreate) {
          var result2 = data2[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data2, key) ? data2[key] : undefined$1;
      }
      function hashHas(key) {
        var data2 = this.__data__;
        return nativeCreate ? data2[key] !== undefined$1 : hasOwnProperty.call(data2, key);
      }
      function hashSet(key, value2) {
        var data2 = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data2[key] = nativeCreate && value2 === undefined$1 ? HASH_UNDEFINED : value2;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length2) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data2 = this.__data__, index = assocIndexOf(data2, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data2.length - 1;
        if (index == lastIndex) {
          data2.pop();
        } else {
          splice.call(data2, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data2 = this.__data__, index = assocIndexOf(data2, key);
        return index < 0 ? undefined$1 : data2[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value2) {
        var data2 = this.__data__, index = assocIndexOf(data2, key);
        if (index < 0) {
          ++this.size;
          data2.push([key, value2]);
        } else {
          data2[index][1] = value2;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length2 = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length2) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          hash: new Hash(),
          map: new (Map2 || ListCache)(),
          string: new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value2) {
        var data2 = getMapData(this, key), size2 = data2.size;
        data2.set(key, value2);
        this.size += data2.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length2 = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length2) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value2) {
        this.__data__.set(value2, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value2) {
        return this.__data__.has(value2);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data2 = this.__data__ = new ListCache(entries);
        this.size = data2.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data2 = this.__data__, result2 = data2["delete"](key);
        this.size = data2.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value2) {
        var data2 = this.__data__;
        if (data2 instanceof ListCache) {
          var pairs = data2.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value2]);
            this.size = ++data2.size;
            return this;
          }
          data2 = this.__data__ = new MapCache(pairs);
        }
        data2.set(key, value2);
        this.size = data2.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value2, inherited) {
        var isArr = isArray2(value2), isArg = !isArr && isArguments(value2), isBuff = !isArr && !isArg && isBuffer2(value2), isType = !isArr && !isArg && !isBuff && isTypedArray2(value2), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value2.length, String2) : [], length2 = result2.length;
        for (var key in value2) {
          if ((inherited || hasOwnProperty.call(value2, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length2)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length2 = array.length;
        return length2 ? array[baseRandom(0, length2 - 1)] : undefined$1;
      }
      function arraySampleSize(array, n2) {
        return shuffleSelf(copyArray(array), baseClamp(n2, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value2) {
        if (value2 !== undefined$1 && !eq(object[key], value2) || value2 === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value2);
        }
      }
      function assignValue(object, key, value2) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value2)) || value2 === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value2);
        }
      }
      function assocIndexOf(array, key) {
        var length2 = array.length;
        while (length2--) {
          if (eq(array[length2][0], key)) {
            return length2;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value2, key, collection2) {
          setter(accumulator, value2, iteratee2(value2), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source2) {
        return object && copyObject(source2, keys(source2), object);
      }
      function baseAssignIn(object, source2) {
        return object && copyObject(source2, keysIn(source2), object);
      }
      function baseAssignValue(object, key, value2) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            value: value2,
            writable: true
          });
        } else {
          object[key] = value2;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length2 = paths.length, result2 = Array2(length2), skip = object == null;
        while (++index < length2) {
          result2[index] = skip ? undefined$1 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value2, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value2, key, object, stack) : customizer(value2);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject2(value2)) {
          return value2;
        }
        var isArr = isArray2(value2);
        if (isArr) {
          result2 = initCloneArray(value2);
          if (!isDeep) {
            return copyArray(value2, result2);
          }
        } else {
          var tag = getTag(value2), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer2(value2)) {
            return cloneBuffer(value2, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value2);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value2, baseAssignIn(result2, value2)) : copySymbols(value2, baseAssign(result2, value2));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value2 : {};
            }
            result2 = initCloneByTag(value2, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value2);
        if (stacked) {
          return stacked;
        }
        stack.set(value2, result2);
        if (isSet(value2)) {
          value2.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value2, stack));
          });
        } else if (isMap(value2)) {
          value2.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value2);
        arrayEach(props || value2, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value2[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value2, stack));
        });
        return result2;
      }
      function baseConforms(source2) {
        var props = keys(source2);
        return function(object) {
          return baseConformsTo(object, source2, props);
        };
      }
      function baseConformsTo(object, source2, props) {
        var length2 = props.length;
        if (object == null) {
          return !length2;
        }
        object = Object2(object);
        while (length2--) {
          var key = props[length2], predicate = source2[key], value2 = object[key];
          if (value2 === undefined$1 && !(key in object) || !predicate(value2)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length2 = array.length, result2 = [], valuesLength = values2.length;
        if (!length2) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length2) {
            var value2 = array[index], computed = iteratee2 == null ? value2 : iteratee2(value2);
            value2 = comparator || value2 !== 0 ? value2 : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value2);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value2);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value2, index, collection2) {
          result2 = !!predicate(value2, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index = -1, length2 = array.length;
        while (++index < length2) {
          var value2 = array[index], current = iteratee2(value2);
          if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
            var computed = current, result2 = value2;
          }
        }
        return result2;
      }
      function baseFill(array, value2, start, end) {
        var length2 = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length2 ? 0 : length2 + start;
        }
        end = end === undefined$1 || end > length2 ? length2 : toInteger(end);
        if (end < 0) {
          end += length2;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value2;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value2, index, collection2) {
          if (predicate(value2, index, collection2)) {
            result2.push(value2);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index = -1, length2 = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length2) {
          var value2 = array[index];
          if (depth > 0 && predicate(value2)) {
            if (depth > 1) {
              baseFlatten(value2, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value2);
            }
          } else if (!isStrict) {
            result2[result2.length] = value2;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction2(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length2 = path.length;
        while (object != null && index < length2) {
          object = object[toKey(path[index++])];
        }
        return index && index == length2 ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value2) {
        if (value2 == null) {
          return value2 === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value2) ? getRawTag(value2) : objectToString(value2);
      }
      function baseGt(value2, other) {
        return value2 > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length2 = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length2 >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length2 && result2.length < maxLength) {
            var value2 = array[index], computed = iteratee2 ? iteratee2(value2) : value2;
            value2 = comparator || value2 !== 0 ? value2 : 0;
            if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache2 = caches[othIndex];
                if (!(cache2 ? cacheHas(cache2, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value2);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value2, key, object2) {
          setter(accumulator, iteratee2(value2), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value2) {
        return isObjectLike(value2) && baseGetTag(value2) == argsTag;
      }
      function baseIsArrayBuffer(value2) {
        return isObjectLike(value2) && baseGetTag(value2) == arrayBufferTag;
      }
      function baseIsDate(value2) {
        return isObjectLike(value2) && baseGetTag(value2) == dateTag;
      }
      function baseIsEqual(value2, other, bitmask, customizer, stack) {
        if (value2 === other) {
          return true;
        }
        if (value2 == null || other == null || !isObjectLike(value2) && !isObjectLike(other)) {
          return value2 !== value2 && other !== other;
        }
        return baseIsEqualDeep(value2, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer2(object)) {
          if (!isBuffer2(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray2(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value2) {
        return isObjectLike(value2) && getTag(value2) == mapTag;
      }
      function baseIsMatch(object, source2, matchData, customizer) {
        var index = matchData.length, length2 = index, noCustomizer = !customizer;
        if (object == null) {
          return !length2;
        }
        object = Object2(object);
        while (index--) {
          var data2 = matchData[index];
          if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
            return false;
          }
        }
        while (++index < length2) {
          data2 = matchData[index];
          var key = data2[0], objValue = object[key], srcValue = data2[1];
          if (noCustomizer && data2[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source2, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value2) {
        if (!isObject2(value2) || isMasked(value2)) {
          return false;
        }
        var pattern = isFunction2(value2) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value2));
      }
      function baseIsRegExp(value2) {
        return isObjectLike(value2) && baseGetTag(value2) == regexpTag;
      }
      function baseIsSet(value2) {
        return isObjectLike(value2) && getTag(value2) == setTag;
      }
      function baseIsTypedArray(value2) {
        return isObjectLike(value2) && isLength(value2.length) && !!typedArrayTags[baseGetTag(value2)];
      }
      function baseIteratee(value2) {
        if (typeof value2 == "function") {
          return value2;
        }
        if (value2 == null) {
          return identity;
        }
        if (typeof value2 == "object") {
          return isArray2(value2) ? baseMatchesProperty(value2[0], value2[1]) : baseMatches(value2);
        }
        return property(value2);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject2(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value2, other) {
        return value2 < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value2, key, collection2) {
          result2[++index] = iteratee2(value2, key, collection2);
        });
        return result2;
      }
      function baseMatches(source2) {
        var matchData = getMatchData(source2);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source2 || baseIsMatch(object, source2, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source2, srcIndex, customizer, stack) {
        if (object === source2) {
          return;
        }
        baseFor(source2, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject2(srcValue)) {
            baseMergeDeep(object, source2, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source2, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source2, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source2, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source2, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer2(srcValue), isTyped = !isArr && !isBuff && isTypedArray2(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray2(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject2(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction2(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n2) {
        var length2 = array.length;
        if (!length2) {
          return;
        }
        n2 += n2 < 0 ? length2 : 0;
        return isIndex(n2, length2) ? array[n2] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray2(iteratee2)) {
              return function(value2) {
                return baseGet(value2, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value2, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value2);
          });
          return {criteria, index: ++index, value: value2};
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value2, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length2 = paths.length, result2 = {};
        while (++index < length2) {
          var path = paths[index], value2 = baseGet(object, path);
          if (predicate(value2, path)) {
            baseSet(result2, castPath(path, object), value2);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length2 = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index < length2) {
          var fromIndex = 0, value2 = values2[index], computed = iteratee2 ? iteratee2(value2) : value2;
          while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length2 = array ? indexes.length : 0, lastIndex = length2 - 1;
        while (length2--) {
          var index = indexes[length2];
          if (length2 == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length2 = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length2);
        while (length2--) {
          result2[fromRight ? length2 : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n2) {
        var result2 = "";
        if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n2 % 2) {
            result2 += string;
          }
          n2 = nativeFloor(n2 / 2);
          if (n2) {
            string += string;
          }
        } while (n2);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n2) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n2, 0, array.length));
      }
      function baseSet(object, path, value2, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length2 = path.length, lastIndex = length2 - 1, nested = object;
        while (nested != null && ++index < length2) {
          var key = toKey(path[index]), newValue = value2;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data2) {
        metaMap.set(func, data2);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index = -1, length2 = array.length;
        if (start < 0) {
          start = -start > length2 ? 0 : length2 + start;
        }
        end = end > length2 ? length2 : end;
        if (end < 0) {
          end += length2;
        }
        length2 = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length2);
        while (++index < length2) {
          result2[index] = array[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value2, index, collection2) {
          result2 = predicate(value2, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value2, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value2 == "number" && value2 === value2 && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value2 : computed < value2)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value2, identity, retHighest);
      }
      function baseSortedIndexBy(array, value2, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value2 = iteratee2(value2);
        var valIsNaN = value2 !== value2, valIsNull = value2 === null, valIsSymbol = isSymbol(value2), valIsUndefined = value2 === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value2 : computed < value2;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index = -1, length2 = array.length, resIndex = 0, result2 = [];
        while (++index < length2) {
          var value2 = array[index], computed = iteratee2 ? iteratee2(value2) : value2;
          if (!index || !eq(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value2 === 0 ? 0 : value2;
          }
        }
        return result2;
      }
      function baseToNumber(value2) {
        if (typeof value2 == "number") {
          return value2;
        }
        if (isSymbol(value2)) {
          return NAN;
        }
        return +value2;
      }
      function baseToString(value2) {
        if (typeof value2 == "string") {
          return value2;
        }
        if (isArray2(value2)) {
          return arrayMap(value2, baseToString) + "";
        }
        if (isSymbol(value2)) {
          return symbolToString ? symbolToString.call(value2) : "";
        }
        var result2 = value2 + "";
        return result2 == "0" && 1 / value2 == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length2 = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length2 >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length2) {
            var value2 = array[index], computed = iteratee2 ? iteratee2(value2) : value2;
            value2 = comparator || value2 !== 0 ? value2 : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value2);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value2);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length2 = array.length, index = fromRight ? length2 : -1;
        while ((fromRight ? index-- : ++index < length2) && predicate(array[index], index, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length2) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length2 : index);
      }
      function baseWrapperValue(value2, actions) {
        var result2 = value2;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length2 = arrays.length;
        if (length2 < 2) {
          return length2 ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length2);
        while (++index < length2) {
          var array = arrays[index], othIndex = -1;
          while (++othIndex < length2) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length2 = props.length, valsLength = values2.length, result2 = {};
        while (++index < length2) {
          var value2 = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value2);
        }
        return result2;
      }
      function castArrayLikeObject(value2) {
        return isArrayLikeObject(value2) ? value2 : [];
      }
      function castFunction(value2) {
        return typeof value2 == "function" ? value2 : identity;
      }
      function castPath(value2, object) {
        if (isArray2(value2)) {
          return value2;
        }
        return isKey(value2, object) ? [value2] : stringToPath(toString3(value2));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length2 = array.length;
        end = end === undefined$1 ? length2 : end;
        return !start && end >= length2 ? array : baseSlice(array, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id2) {
        return root2.clearTimeout(id2);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length2 = buffer.length, result2 = allocUnsafe ? allocUnsafe(length2) : new buffer.constructor(length2);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value2, other) {
        if (value2 !== other) {
          var valIsDefined = value2 !== undefined$1, valIsNull = value2 === null, valIsReflexive = value2 === value2, valIsSymbol = isSymbol(value2);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value2 > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value2 < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length2 = objCriteria.length, ordersLength = orders.length;
        while (++index < length2) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source2, array) {
        var index = -1, length2 = source2.length;
        array || (array = Array2(length2));
        while (++index < length2) {
          array[index] = source2[index];
        }
        return array;
      }
      function copyObject(source2, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length2 = props.length;
        while (++index < length2) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source2[key], key, object, source2) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source2[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source2, object) {
        return copyObject(source2, getSymbols(source2), object);
      }
      function copySymbolsIn(source2, object) {
        return copyObject(source2, getSymbolsIn(source2), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length2 = sources.length, customizer = length2 > 1 ? sources[length2 - 1] : undefined$1, guard = length2 > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length2--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length2 < 3 ? undefined$1 : customizer;
            length2 = 1;
          }
          object = Object2(object);
          while (++index < length2) {
            var source2 = sources[index];
            if (source2) {
              assigner(object, source2, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length2 = collection.length, index = fromRight ? length2 : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length2) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props = keysFunc(object), length2 = props.length;
          while (length2--) {
            var key = props[fromRight ? length2 : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString3(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject2(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length2 = arguments.length, args = Array2(length2), index = length2, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length2 < 3 && args[0] !== placeholder && args[length2 - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length2 -= holders.length;
          if (length2 < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length2);
          }
          var fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length2 = funcs.length, index = length2, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length2;
          while (++index < length2) {
            func = funcs[index];
            var funcName = getFuncName(func), data2 = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data2 && isLaziable(data2[0]) && data2[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data2[4].length && data2[9] == 1) {
              wrapper = wrapper[getFuncName(data2[0])].apply(wrapper, data2[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value2 = args[0];
            if (wrapper && args.length == 1 && isArray2(value2)) {
              return wrapper.plant(value2).value();
            }
            var index2 = 0, result2 = length2 ? funcs[index2].apply(this, args) : value2;
            while (++index2 < length2) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length2 = arguments.length, args = Array2(length2), index = length2;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length2 -= holdersCount;
          if (isCurried && length2 < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length2);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length2 = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length2 > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length2) {
            args.length = ary2;
          }
          if (this && this !== root2 && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value2, other) {
          var result2;
          if (value2 === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value2 !== undefined$1) {
            result2 = value2;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value2 == "string" || typeof other == "string") {
              value2 = baseToString(value2);
              other = baseToString(other);
            } else {
              value2 = baseToNumber(value2);
              other = baseToNumber(other);
            }
            result2 = operator(value2, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length2, chars2) {
        chars2 = chars2 === undefined$1 ? " " : baseToString(chars2);
        var charsLength = chars2.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars2, length2) : chars2;
        }
        var result2 = baseRepeat(chars2, nativeCeil(length2 / stringSize(chars2)));
        return hasUnicode(chars2) ? castSlice(stringToArray(result2), 0, length2).join("") : result2.slice(0, length2);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root2 && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value2, other) {
          if (!(typeof value2 == "string" && typeof other == "string")) {
            value2 = toNumber(value2);
            other = toNumber(other);
          }
          return operator(value2, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString3(number) + "e").split("e"), value2 = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString3(value2) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
        return new Set2(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length2 = partials ? partials.length : 0;
        if (!length2) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length2 -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data2 = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data2) {
          mergeData(newData, data2);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length2, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data2 ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source2, stack) {
        if (isObject2(objValue) && isObject2(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value2) {
        return isPlainObject2(value2) ? undefined$1 : value2;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop2 : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length2 = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length2--) {
          var data2 = array[length2], otherFunc = data2.func;
          if (otherFunc == null || otherFunc == func) {
            return data2.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data2 = map2.__data__;
        return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length2 = result2.length;
        while (length2--) {
          var key = result2[length2], value2 = object[key];
          result2[length2] = [key, value2, isStrictComparable(value2)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value2 = getValue(object, key);
        return baseIsNative(value2) ? value2 : undefined$1;
      }
      function getRawTag(value2) {
        var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
        try {
          value2[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value2);
        if (unmasked) {
          if (isOwn) {
            value2[symToStringTag] = tag;
          } else {
            delete value2[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value2) {
          var result2 = baseGetTag(value2), Ctor = result2 == objectTag ? value2.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length2 = transforms.length;
        while (++index < length2) {
          var data2 = transforms[index], size2 = data2.size;
          switch (data2.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return {start, end};
      }
      function getWrapDetails(source2) {
        var match = source2.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length2 = path.length, result2 = false;
        while (++index < length2) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length2) {
          return result2;
        }
        length2 = object == null ? 0 : object.length;
        return !!length2 && isLength(length2) && isIndex(key, length2) && (isArray2(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length2 = array.length, result2 = new array.constructor(length2);
        if (length2 && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source2, details) {
        var length2 = details.length;
        if (!length2) {
          return source2;
        }
        var lastIndex = length2 - 1;
        details[lastIndex] = (length2 > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length2 > 2 ? ", " : " ");
        return source2.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value2) {
        return isArray2(value2) || isArguments(value2) || !!(spreadableSymbol && value2 && value2[spreadableSymbol]);
      }
      function isIndex(value2, length2) {
        var type = typeof value2;
        length2 = length2 == null ? MAX_SAFE_INTEGER : length2;
        return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value2)) && (value2 > -1 && value2 % 1 == 0 && value2 < length2);
      }
      function isIterateeCall(value2, index, object) {
        if (!isObject2(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value2);
        }
        return false;
      }
      function isKey(value2, object) {
        if (isArray2(value2)) {
          return false;
        }
        var type = typeof value2;
        if (type == "number" || type == "symbol" || type == "boolean" || value2 == null || isSymbol(value2)) {
          return true;
        }
        return reIsPlainProp.test(value2) || !reIsDeepProp.test(value2) || object != null && value2 in Object2(object);
      }
      function isKeyable(value2) {
        var type = typeof value2;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data2 = getData(other);
        return !!data2 && func === data2[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction2 : stubFalse;
      function isPrototype(value2) {
        var Ctor = value2 && value2.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value2 === proto;
      }
      function isStrictComparable(value2) {
        return value2 === value2 && !isObject2(value2);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key;
        });
        var cache2 = result2.cache;
        return result2;
      }
      function mergeData(data2, source2) {
        var bitmask = data2[1], srcBitmask = source2[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data2[7].length <= source2[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source2[7].length <= source2[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data2;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data2[2] = source2[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value2 = source2[3];
        if (value2) {
          var partials = data2[3];
          data2[3] = partials ? composeArgs(partials, value2, source2[4]) : value2;
          data2[4] = partials ? replaceHolders(data2[3], PLACEHOLDER) : source2[4];
        }
        value2 = source2[5];
        if (value2) {
          partials = data2[5];
          data2[5] = partials ? composeArgsRight(partials, value2, source2[6]) : value2;
          data2[6] = partials ? replaceHolders(data2[5], PLACEHOLDER) : source2[6];
        }
        value2 = source2[7];
        if (value2) {
          data2[7] = value2;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data2[8] = data2[8] == null ? source2[8] : nativeMin(data2[8], source2[8]);
        }
        if (data2[9] == null) {
          data2[9] = source2[9];
        }
        data2[0] = source2[0];
        data2[1] = newBitmask;
        return data2;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value2) {
        return nativeObjectToString.call(value2);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length2 = nativeMax(args.length - start, 0), array = Array2(length2);
          while (++index < length2) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length2 = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length2--) {
          var index = indexes[length2];
          array[length2] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root2.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source2 = reference + "";
        return setToString(wrapper, insertWrapDetails(source2, updateWrapDetails(getWrapDetails(source2), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index = -1, length2 = array.length, lastIndex = length2 - 1;
        size2 = size2 === undefined$1 ? length2 : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value2 = array[rand];
          array[rand] = array[index];
          array[index] = value2;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value2) {
        if (typeof value2 == "string" || isSymbol(value2)) {
          return value2;
        }
        var result2 = value2 + "";
        return result2 == "0" && 1 / value2 == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value2 = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value2)) {
            details.push(value2);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length2 = array == null ? 0 : array.length;
        if (!length2 || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length2 / size2));
        while (index < length2) {
          result2[resIndex++] = baseSlice(array, index, index += size2);
        }
        return result2;
      }
      function compact(array) {
        var index = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index < length2) {
          var value2 = array[index];
          if (value2) {
            result2[resIndex++] = value2;
          }
        }
        return result2;
      }
      function concat() {
        var length2 = arguments.length;
        if (!length2) {
          return [];
        }
        var args = Array2(length2 - 1), array = arguments[0], index = length2;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n2, guard) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array, n2 < 0 ? 0 : n2, length2);
      }
      function dropRight(array, n2, guard) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length2 - n2;
        return baseSlice(array, 0, n2 < 0 ? 0 : n2);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value2, start, end) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value2, start)) {
          start = 0;
          end = length2;
        }
        return baseFill(array, value2, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length2 + index, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return -1;
        }
        var index = length2 - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length2 + index, 0) : nativeMin(index, length2 - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index, true);
      }
      function flatten(array) {
        var length2 = array == null ? 0 : array.length;
        return length2 ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length2 = array == null ? 0 : array.length;
        return length2 ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length2 = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length2) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value2, fromIndex) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length2 + index, 0);
        }
        return baseIndexOf(array, value2, index);
      }
      function initial(array) {
        var length2 = array == null ? 0 : array.length;
        return length2 ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length2 = array == null ? 0 : array.length;
        return length2 ? array[length2 - 1] : undefined$1;
      }
      function lastIndexOf(array, value2, fromIndex) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return -1;
        }
        var index = length2;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length2 + index, 0) : nativeMin(index, length2 - 1);
        }
        return value2 === value2 ? strictLastIndexOf(array, value2, index) : baseFindIndex(array, baseIsNaN, index, true);
      }
      function nth(array, n2) {
        return array && array.length ? baseNth(array, toInteger(n2)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length2 = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index) {
          return isIndex(index, length2) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index = -1, indexes = [], length2 = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length2) {
          var value2 = array[index];
          if (predicate(value2, index, array)) {
            result2.push(value2);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length2;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length2 : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value2) {
        return baseSortedIndex(array, value2);
      }
      function sortedIndexBy(array, value2, iteratee2) {
        return baseSortedIndexBy(array, value2, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value2) {
        var length2 = array == null ? 0 : array.length;
        if (length2) {
          var index = baseSortedIndex(array, value2);
          if (index < length2 && eq(array[index], value2)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value2) {
        return baseSortedIndex(array, value2, true);
      }
      function sortedLastIndexBy(array, value2, iteratee2) {
        return baseSortedIndexBy(array, value2, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value2) {
        var length2 = array == null ? 0 : array.length;
        if (length2) {
          var index = baseSortedIndex(array, value2, true) - 1;
          if (eq(array[index], value2)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length2 = array == null ? 0 : array.length;
        return length2 ? baseSlice(array, 1, length2) : [];
      }
      function take(array, n2, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array, 0, n2 < 0 ? 0 : n2);
      }
      function takeRight(array, n2, guard) {
        var length2 = array == null ? 0 : array.length;
        if (!length2) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length2 - n2;
        return baseSlice(array, n2 < 0 ? 0 : n2, length2);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length2 = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length2 = nativeMax(group.length, length2);
            return true;
          }
        });
        return baseTimes(length2, function(index) {
          return arrayMap(array, baseProperty(index));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length2 = arrays.length, iteratee2 = length2 > 1 ? arrays[length2 - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value2) {
        var result2 = lodash2(value2);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value2, interceptor) {
        interceptor(value2);
        return value2;
      }
      function thru(value2, interceptor) {
        return interceptor(value2);
      }
      var wrapperAt = flatRest(function(paths) {
        var length2 = paths.length, start = length2 ? paths[0] : 0, value2 = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length2 > 1 || this.__actions__.length || !(value2 instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value2 = value2.slice(start, +start + (length2 ? 1 : 0));
        value2.__actions__.push({
          func: thru,
          args: [interceptor],
          thisArg: undefined$1
        });
        return new LodashWrapper(value2, this.__chain__).thru(function(array) {
          if (length2 && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray2(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value2 = done ? undefined$1 : this.__values__[this.__index__++];
        return {done, value: value2};
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value2) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value2;
        return result2;
      }
      function wrapperReverse() {
        var value2 = this.__wrapped__;
        if (value2 instanceof LazyWrapper) {
          var wrapped = value2;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            func: thru,
            args: [reverse],
            thisArg: undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value2, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray2(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach3(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray2(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value2, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value2);
        } else {
          baseAssignValue(result2, key, [value2]);
        }
      });
      function includes(collection, value2, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length2 = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length2 + fromIndex, 0);
        }
        return isString2(collection) ? fromIndex <= length2 && collection.indexOf(value2, fromIndex) > -1 : !!length2 && baseIndexOf(collection, value2, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value2) {
          result2[++index] = isFunc ? apply(path, value2, args) : baseInvoke(value2, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value2, key) {
        baseAssignValue(result2, key, value2);
      });
      function map(collection, iteratee2) {
        var func = isArray2(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray2(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray2(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value2, key) {
        result2[key ? 0 : 1].push(value2);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray2(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray2(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n2, guard) {
        if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n2);
      }
      function shuffle(collection) {
        var func = isArray2(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString2(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray2(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length2 = iteratees.length;
        if (length2 > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length2 > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root2.Date.now();
      };
      function after(n2, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n2, guard) {
        n2 = guard ? undefined$1 : n2;
        n2 = func && n2 == null ? func.length : n2;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n2);
      }
      function before(n2, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n2 <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind3 = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind3));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key)) {
            return cache2.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache2.set(key, result2) || cache2;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once2(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length2 = nativeMin(args.length, funcsLength);
          while (++index < length2) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread3(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          leading,
          maxWait: wait,
          trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value2, wrapper) {
        return partial(castFunction(wrapper), value2);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value2 = arguments[0];
        return isArray2(value2) ? value2 : [value2];
      }
      function clone(value2) {
        return baseClone(value2, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value2, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value2, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value2) {
        return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value2, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value2, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source2) {
        return source2 == null || baseConformsTo(object, source2, keys(source2));
      }
      function eq(value2, other) {
        return value2 === other || value2 !== value2 && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value2, other) {
        return value2 >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value2) {
        return isObjectLike(value2) && hasOwnProperty.call(value2, "callee") && !propertyIsEnumerable.call(value2, "callee");
      };
      var isArray2 = Array2.isArray;
      var isArrayBuffer2 = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value2) {
        return value2 != null && isLength(value2.length) && !isFunction2(value2);
      }
      function isArrayLikeObject(value2) {
        return isObjectLike(value2) && isArrayLike(value2);
      }
      function isBoolean(value2) {
        return value2 === true || value2 === false || isObjectLike(value2) && baseGetTag(value2) == boolTag;
      }
      var isBuffer2 = nativeIsBuffer || stubFalse;
      var isDate2 = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value2) {
        return isObjectLike(value2) && value2.nodeType === 1 && !isPlainObject2(value2);
      }
      function isEmpty(value2) {
        if (value2 == null) {
          return true;
        }
        if (isArrayLike(value2) && (isArray2(value2) || typeof value2 == "string" || typeof value2.splice == "function" || isBuffer2(value2) || isTypedArray2(value2) || isArguments(value2))) {
          return !value2.length;
        }
        var tag = getTag(value2);
        if (tag == mapTag || tag == setTag) {
          return !value2.size;
        }
        if (isPrototype(value2)) {
          return !baseKeys(value2).length;
        }
        for (var key in value2) {
          if (hasOwnProperty.call(value2, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value2, other) {
        return baseIsEqual(value2, other);
      }
      function isEqualWith(value2, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value2, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value2, other, undefined$1, customizer) : !!result2;
      }
      function isError(value2) {
        if (!isObjectLike(value2)) {
          return false;
        }
        var tag = baseGetTag(value2);
        return tag == errorTag || tag == domExcTag || typeof value2.message == "string" && typeof value2.name == "string" && !isPlainObject2(value2);
      }
      function isFinite(value2) {
        return typeof value2 == "number" && nativeIsFinite(value2);
      }
      function isFunction2(value2) {
        if (!isObject2(value2)) {
          return false;
        }
        var tag = baseGetTag(value2);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value2) {
        return typeof value2 == "number" && value2 == toInteger(value2);
      }
      function isLength(value2) {
        return typeof value2 == "number" && value2 > -1 && value2 % 1 == 0 && value2 <= MAX_SAFE_INTEGER;
      }
      function isObject2(value2) {
        var type = typeof value2;
        return value2 != null && (type == "object" || type == "function");
      }
      function isObjectLike(value2) {
        return value2 != null && typeof value2 == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source2) {
        return object === source2 || baseIsMatch(object, source2, getMatchData(source2));
      }
      function isMatchWith(object, source2, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source2, getMatchData(source2), customizer);
      }
      function isNaN2(value2) {
        return isNumber2(value2) && value2 != +value2;
      }
      function isNative(value2) {
        if (isMaskable(value2)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value2);
      }
      function isNull(value2) {
        return value2 === null;
      }
      function isNil(value2) {
        return value2 == null;
      }
      function isNumber2(value2) {
        return typeof value2 == "number" || isObjectLike(value2) && baseGetTag(value2) == numberTag;
      }
      function isPlainObject2(value2) {
        if (!isObjectLike(value2) || baseGetTag(value2) != objectTag) {
          return false;
        }
        var proto = getPrototype(value2);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value2) {
        return isInteger(value2) && value2 >= -MAX_SAFE_INTEGER && value2 <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString2(value2) {
        return typeof value2 == "string" || !isArray2(value2) && isObjectLike(value2) && baseGetTag(value2) == stringTag;
      }
      function isSymbol(value2) {
        return typeof value2 == "symbol" || isObjectLike(value2) && baseGetTag(value2) == symbolTag;
      }
      var isTypedArray2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined2(value2) {
        return value2 === undefined$1;
      }
      function isWeakMap(value2) {
        return isObjectLike(value2) && getTag(value2) == weakMapTag;
      }
      function isWeakSet(value2) {
        return isObjectLike(value2) && baseGetTag(value2) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value2, other) {
        return value2 <= other;
      });
      function toArray2(value2) {
        if (!value2) {
          return [];
        }
        if (isArrayLike(value2)) {
          return isString2(value2) ? stringToArray(value2) : copyArray(value2);
        }
        if (symIterator && value2[symIterator]) {
          return iteratorToArray(value2[symIterator]());
        }
        var tag = getTag(value2), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value2);
      }
      function toFinite(value2) {
        if (!value2) {
          return value2 === 0 ? value2 : 0;
        }
        value2 = toNumber(value2);
        if (value2 === INFINITY || value2 === -INFINITY) {
          var sign = value2 < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value2 === value2 ? value2 : 0;
      }
      function toInteger(value2) {
        var result2 = toFinite(value2), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value2) {
        return value2 ? baseClamp(toInteger(value2), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value2) {
        if (typeof value2 == "number") {
          return value2;
        }
        if (isSymbol(value2)) {
          return NAN;
        }
        if (isObject2(value2)) {
          var other = typeof value2.valueOf == "function" ? value2.valueOf() : value2;
          value2 = isObject2(other) ? other + "" : other;
        }
        if (typeof value2 != "string") {
          return value2 === 0 ? value2 : +value2;
        }
        value2 = baseTrim(value2);
        var isBinary2 = reIsBinary.test(value2);
        return isBinary2 || reIsOctal.test(value2) ? freeParseInt(value2.slice(2), isBinary2 ? 2 : 8) : reIsBadHex.test(value2) ? NAN : +value2;
      }
      function toPlainObject(value2) {
        return copyObject(value2, keysIn(value2));
      }
      function toSafeInteger(value2) {
        return value2 ? baseClamp(toInteger(value2), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value2 === 0 ? value2 : 0;
      }
      function toString3(value2) {
        return value2 == null ? "" : baseToString(value2);
      }
      var assign = createAssigner(function(object, source2) {
        if (isPrototype(source2) || isArrayLike(source2)) {
          copyObject(source2, keys(source2), object);
          return;
        }
        for (var key in source2) {
          if (hasOwnProperty.call(source2, key)) {
            assignValue(object, key, source2[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source2) {
        copyObject(source2, keysIn(source2), object);
      });
      var assignInWith = createAssigner(function(object, source2, srcIndex, customizer) {
        copyObject(source2, keysIn(source2), object, customizer);
      });
      var assignWith = createAssigner(function(object, source2, srcIndex, customizer) {
        copyObject(source2, keys(source2), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype2, properties) {
        var result2 = baseCreate(prototype2);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults2 = baseRest(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length2 = sources.length;
        var guard = length2 > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length2 = 1;
        }
        while (++index < length2) {
          var source2 = sources[index];
          var props = keysIn(source2);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value2 = object[key];
            if (value2 === undefined$1 || eq(value2, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source2[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value2, key) {
        if (value2 != null && typeof value2.toString != "function") {
          value2 = nativeObjectToString.call(value2);
        }
        result2[value2] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value2, key) {
        if (value2 != null && typeof value2.toString != "function") {
          value2 = nativeObjectToString.call(value2);
        }
        if (hasOwnProperty.call(result2, value2)) {
          result2[value2].push(key);
        } else {
          result2[value2] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value2, key, object2) {
          baseAssignValue(result2, iteratee2(value2, key, object2), value2);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value2, key, object2) {
          baseAssignValue(result2, key, iteratee2(value2, key, object2));
        });
        return result2;
      }
      var merge2 = createAssigner(function(object, source2, srcIndex) {
        baseMerge(object, source2, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source2, srcIndex, customizer) {
        baseMerge(object, source2, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length2 = paths.length;
        while (length2--) {
          baseUnset(result2, paths[length2]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick2 = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value2, path) {
          return predicate(value2, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length2 = path.length;
        if (!length2) {
          length2 = 1;
          object = undefined$1;
        }
        while (++index < length2) {
          var value2 = object == null ? undefined$1 : object[toKey(path[index])];
          if (value2 === undefined$1) {
            index = length2;
            value2 = defaultValue;
          }
          object = isFunction2(value2) ? value2.call(object) : value2;
        }
        return object;
      }
      function set(object, path, value2) {
        return object == null ? object : baseSet(object, path, value2);
      }
      function setWith(object, path, value2, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value2, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray2(object), isArrLike = isArr || isBuffer2(object) || isTypedArray2(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject2(object)) {
            accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value2, index, object2) {
          return iteratee2(accumulator, value2, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString3(string).toLowerCase());
      }
      function deburr(string) {
        string = toString3(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith2(string, target, position) {
        string = toString3(string);
        target = baseToString(target);
        var length2 = string.length;
        position = position === undefined$1 ? length2 : baseClamp(toInteger(position), 0, length2);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape2(string) {
        string = toString3(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString3(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length2, chars2) {
        string = toString3(string);
        length2 = toInteger(length2);
        var strLength = length2 ? stringSize(string) : 0;
        if (!length2 || strLength >= length2) {
          return string;
        }
        var mid = (length2 - strLength) / 2;
        return createPadding(nativeFloor(mid), chars2) + string + createPadding(nativeCeil(mid), chars2);
      }
      function padEnd(string, length2, chars2) {
        string = toString3(string);
        length2 = toInteger(length2);
        var strLength = length2 ? stringSize(string) : 0;
        return length2 && strLength < length2 ? string + createPadding(length2 - strLength, chars2) : string;
      }
      function padStart(string, length2, chars2) {
        string = toString3(string);
        length2 = toInteger(length2);
        var strLength = length2 ? stringSize(string) : 0;
        return length2 && strLength < length2 ? createPadding(length2 - strLength, chars2) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString3(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n2, guard) {
        if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        return baseRepeat(toString3(string), n2);
      }
      function replace() {
        var args = arguments, string = toString3(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString3(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString3(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString3(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source2 = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source2 += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source2 += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source2 += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source2 += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source2 += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source2 = "with (obj) {\n" + source2 + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source2 = (isEvaluating ? source2.replace(reEmptyStringLeading, "") : source2).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source2 = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source2 + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source2).apply(undefined$1, importsValues);
        });
        result2.source = source2;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value2) {
        return toString3(value2).toLowerCase();
      }
      function toUpper(value2) {
        return toString3(value2).toUpperCase();
      }
      function trim2(string, chars2, guard) {
        string = toString3(string);
        if (string && (guard || chars2 === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars2), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars2, guard) {
        string = toString3(string);
        if (string && (guard || chars2 === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars2)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars2, guard) {
        string = toString3(string);
        if (string && (guard || chars2 === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars2 = baseToString(chars2))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars2));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length2 = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject2(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length2 = "length" in options ? toInteger(options.length) : length2;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString3(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length2 >= strLength) {
          return string;
        }
        var end = length2 - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString3(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape2(string) {
        string = toString3(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString3(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind3(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length2 = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length2 ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length2) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source2) {
        return baseConforms(baseClone(source2, CLONE_DEEP_FLAG));
      }
      function constant(value2) {
        return function() {
          return value2;
        };
      }
      function defaultTo(value2, defaultValue) {
        return value2 == null || value2 !== value2 ? defaultValue : value2;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value2) {
        return value2;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source2) {
        return baseMatches(baseClone(source2, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin2(object, source2, options) {
        var props = keys(source2), methodNames = baseFunctions(source2, props);
        if (options == null && !(isObject2(source2) && (methodNames.length || !props.length))) {
          options = source2;
          source2 = object;
          object = this;
          methodNames = baseFunctions(source2, keys(source2));
        }
        var chain2 = !(isObject2(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
        arrayEach(methodNames, function(methodName) {
          var func = source2[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({func, args: arguments, thisArg: object});
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root2._ === this) {
          root2._ = oldDash;
        }
        return this;
      }
      function noop2() {
      }
      function nthArg(n2) {
        n2 = toInteger(n2);
        return baseRest(function(args) {
          return baseNth(args, n2);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n2, iteratee2) {
        n2 = toInteger(n2);
        if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length2 = nativeMin(n2, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n2 -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length2, iteratee2);
        while (++index < n2) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value2) {
        if (isArray2(value2)) {
          return arrayMap(value2, toKey);
        }
        return isSymbol(value2) ? [value2] : copyArray(stringToPath(toString3(value2)));
      }
      function uniqueId(prefix) {
        var id2 = ++idCounter;
        return toString3(prefix) + id2;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind3;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults2;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge2;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin2;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once2;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick2;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread3;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray2;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin2(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith2;
      lodash2.eq = eq;
      lodash2.escape = escape2;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach3;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray2;
      lodash2.isArrayBuffer = isArrayBuffer2;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer2;
      lodash2.isDate = isDate2;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction2;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber2;
      lodash2.isObject = isObject2;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject2;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString2;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray2;
      lodash2.isUndefined = isUndefined2;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop2;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString3;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim2;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape2;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach3;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin2(lodash2, function() {
        var source2 = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source2[methodName] = func;
          }
        });
        return source2;
      }(), {chain: false});
      lodash2.VERSION = VERSION2;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n2) {
          n2 = n2 === undefined$1 ? 1 : nativeMax(toInteger(n2), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
          } else {
            result2.__views__.push({
              size: nativeMin(n2, MAX_ARRAY_LENGTH),
              type: methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n2) {
          return this.reverse()[methodName](n2).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            iteratee: getIteratee(iteratee2, 3),
            type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value2) {
          return baseInvoke(value2, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value2 = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value2 instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value2);
          var interceptor = function(value3) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value3], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value2 = onlyLazy ? value2 : new LazyWrapper(this);
            var result2 = func.apply(value2, args);
            result2.__actions__.push({func: thru, args: [interceptor], thisArg: undefined$1});
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value2 = this.value();
            return func.apply(isArray2(value2) ? value2 : [], args);
          }
          return this[chainName](function(value3) {
            return func.apply(isArray2(value3) ? value3 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({name: methodName, func: lodashFunc});
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        name: "wrapper",
        func: undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root2._ = _;
    }
  }).call(commonjsGlobal);
});
var lodash_default = lodash;

// docs/dist/components/game/Board.js
var boardDimensions = 500;
var squareSize = boardDimensions / 8;
var whiteSquare = "#d9d9d9";
var blackSquare = "#515963";
var defaultStart = {
  "w-p-0": {piecePos: "A2", moves: ["A3", "A4"]},
  "w-p-1": {piecePos: "B2", moves: ["B3", "B4"]},
  "w-p-2": {piecePos: "C2", moves: ["C3", "C4"]},
  "w-p-3": {piecePos: "D2", moves: ["D3", "D4"]},
  "w-p-4": {piecePos: "E2", moves: ["E3", "E4"]},
  "w-p-5": {piecePos: "F2", moves: ["F3", "F4"]},
  "w-p-6": {piecePos: "G2", moves: ["G3", "G4"]},
  "w-p-7": {piecePos: "H2", moves: ["H3", "H4"]},
  "w-r-0": {piecePos: "A1", moves: []},
  "w-r-1": {piecePos: "H1", moves: []},
  "w-kn-0": {piecePos: "B1", moves: ["A3", "C3"]},
  "w-kn-1": {piecePos: "G1", moves: ["F3", "H3"]},
  "w-b-0": {piecePos: "C1", moves: []},
  "w-b-1": {piecePos: "F1", moves: []},
  "w-q-0": {piecePos: "D1", moves: []},
  "w-k-0": {piecePos: "E1", moves: []},
  "b-p-0": {piecePos: "A7", moves: ["A6", "A5"]},
  "b-p-1": {piecePos: "B7", moves: ["B6", "B5"]},
  "b-p-2": {piecePos: "C7", moves: ["C6", "C5"]},
  "b-p-3": {piecePos: "D7", moves: ["D6", "D5"]},
  "b-p-4": {piecePos: "E7", moves: ["E6", "E5"]},
  "b-p-5": {piecePos: "F7", moves: ["F6", "F5"]},
  "b-p-6": {piecePos: "G7", moves: ["G6", "G5"]},
  "b-p-7": {piecePos: "H7", moves: ["H6", "H5"]},
  "b-r-0": {piecePos: "A8", moves: []},
  "b-r-1": {piecePos: "H8", moves: []},
  "b-kn-0": {piecePos: "B8", moves: ["A6", "C6"]},
  "b-kn-1": {piecePos: "G8", moves: ["F6", "H6"]},
  "b-b-0": {piecePos: "C8", moves: []},
  "b-b-1": {piecePos: "F8", moves: []},
  "b-q-0": {piecePos: "D8", moves: []},
  "b-k-0": {piecePos: "E8", moves: []}
};
var useStyles10 = (0, import_react_jss11.createUseStyles)({
  boardContainer: {
    display: "grid",
    gridTemplateRows: `${squareSize}px ${boardDimensions}px ${squareSize}px`,
    gridTemplateColumns: `${squareSize}px ${boardDimensions}px ${squareSize}px`,
    gridTemplateAreas: `". tcol ."
			"lrow board rrow"
			". bcol ."`,
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignContent: "center"
  },
  board: {
    gridArea: "board"
  },
  row: {
    display: "flex",
    flexDirection: "column"
  },
  col: {
    display: "flex"
  },
  lrow: {
    gridArea: "lrow"
  },
  rrow: {
    gridArea: "rrow"
  },
  tcol: {
    gridArea: "tcol"
  },
  bcol: {
    gridArea: "bcol"
  },
  labelContainer: {
    height: squareSize,
    width: squareSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  squareLabel: {
    margin: 0,
    textAlign: "center",
    height: "fit-content"
  }
});
var Board = () => {
  const boardRef = useRef2(null);
  const [shadowPieces, setShadowPieces] = useState2(defaultStart);
  const [currentPiece, setCurrentPiece] = useState2(null);
  const [images, setImages] = useState2({});
  const [color, setColor] = useState2("");
  const [gameStarted, setGameStarted] = useState2(false);
  const classes = useStyles10();
  socket_default.on("start-game", (color2) => {
    console.log(`started ${color2} game!`);
    setColor(color2);
    setGameStarted(true);
  });
  socket_default.on("move-package", (data2) => {
    console.log("move!");
    setShadowPieces((prev2) => {
      let pieceToChange = prev2[data2.movedPiece.id];
      pieceToChange.piecePos = data2.movedPiece.newPos;
      return {...prev2, [data2.movedPiece.id]: pieceToChange};
    });
  });
  useEffect2(() => {
    const canvas = boardRef.current;
    const context = canvas.getContext("2d");
    drawBoard(context);
    if (color != "") {
      drawPieces(context);
    }
    if (currentPiece) {
      drawSelectedPiece(context);
    }
  }, [color, gameStarted, currentPiece, shadowPieces]);
  function drawSelectedPiece(ctx) {
    let squareCoords = boardCoordsToPixel(currentPiece.piecePos, color);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "yellow";
    ctx.strokeRect(squareCoords[0], squareCoords[1], squareSize, squareSize);
  }
  function drawPieces(ctx) {
    for (let pieceId in shadowPieces) {
      let pieceCoords = boardCoordsToPixel(shadowPieces[pieceId].piecePos, color);
      drawSvg(pieceId, pieceCoords[0], pieceCoords[1], ctx);
    }
  }
  function getImage(pieceId) {
    let imgFromStore = Object.keys(images).find((piece) => piece === pieceId);
    if (imgFromStore) {
      return images[imgFromStore];
    } else {
      let img = new Image(squareSize, squareSize);
      let pieceData = getPropertiesFromId(pieceId);
      img.src = `icons/${pieceData[0]}/${pieceData[1]}.svg`;
      setImages((prev2) => {
        return {
          ...prev2,
          [pieceId]: img
        };
      });
      return img;
    }
  }
  function drawSvg(pieceId, x2, y2, ctx) {
    let img = getImage(pieceId);
    if (img.complete) {
      ctx.drawImage(img, x2, y2, squareSize, squareSize);
    } else {
      img.onload = () => {
        ctx.drawImage(img, x2, y2, squareSize, squareSize);
      };
    }
  }
  function drawBoard(ctx) {
    let squareColor = whiteSquare;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        ctx.fillStyle = squareColor;
        ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize);
        squareColor = squareColor === whiteSquare ? blackSquare : whiteSquare;
      }
      squareColor = squareColor === whiteSquare ? blackSquare : whiteSquare;
    }
  }
  function handleClick(e) {
    let x2 = e.pageX - (e.target.offsetLeft + e.target.clientLeft);
    let y2 = e.pageY - (e.target.offsetTop + e.target.clientTop);
    let square = pixelToBoardCoords([x2, y2], color);
    let selectedPiece = Object.values(shadowPieces).find((piece) => piece.piecePos === square);
    let pieceId = Object.keys(shadowPieces).find((key) => shadowPieces[key] === selectedPiece);
    if (!selectedPiece) {
      if (currentPiece) {
        socket_default.emit("move-request", {
          id: currentPiece.pieceId,
          newPos: square
        });
        setCurrentPiece(null);
      }
    } else {
      let pieceData = getPropertiesFromId(pieceId);
      if (pieceData[0] != color) {
        setCurrentPiece(null);
      } else if (currentPiece) {
        if (lodash_default.isEqual({pieceId, ...selectedPiece}, currentPiece)) {
          setCurrentPiece(null);
        } else {
          setCurrentPiece({pieceId, ...selectedPiece});
        }
      } else {
        setCurrentPiece({pieceId, ...selectedPiece});
      }
    }
  }
  if (!gameStarted) {
    return /* @__PURE__ */ react.createElement("div", {
      className: classes.boardContainer
    }, /* @__PURE__ */ react.createElement("canvas", {
      className: classes.board,
      ref: boardRef,
      id: "boardCanvas",
      width: boardDimensions,
      height: boardDimensions
    }));
  } else {
    if (color === "white") {
      return /* @__PURE__ */ react.createElement("div", {
        className: classes.boardContainer
      }, /* @__PURE__ */ react.createElement("div", {
        className: classes.row + " " + classes.lrow
      }, [1, 2, 3, 4, 5, 6, 7, 8].reverse().map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))), /* @__PURE__ */ react.createElement("div", {
        className: classes.col + " " + classes.tcol
      }, ["A", "B", "C", "D", "E", "F", "G", "H"].map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))), /* @__PURE__ */ react.createElement("canvas", {
        className: classes.board,
        ref: boardRef,
        id: "boardCanvas",
        width: boardDimensions,
        height: boardDimensions,
        onClick: handleClick
      }), /* @__PURE__ */ react.createElement("div", {
        className: classes.col + " " + classes.bcol
      }, ["A", "B", "C", "D", "E", "F", "G", "H"].map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))), /* @__PURE__ */ react.createElement("div", {
        className: classes.row + " " + classes.rrow
      }, [1, 2, 3, 4, 5, 6, 7, 8].reverse().map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))));
    } else {
      return /* @__PURE__ */ react.createElement("div", {
        className: classes.boardContainer
      }, /* @__PURE__ */ react.createElement("div", {
        className: classes.row + " " + classes.lrow
      }, [1, 2, 3, 4, 5, 6, 7, 8].map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))), /* @__PURE__ */ react.createElement("div", {
        className: classes.col + " " + classes.tcol
      }, ["A", "B", "C", "D", "E", "F", "G", "H"].map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))), /* @__PURE__ */ react.createElement("canvas", {
        className: classes.board,
        ref: boardRef,
        id: "boardCanvas",
        width: boardDimensions,
        height: boardDimensions,
        onMouseDown: handleClick
      }), /* @__PURE__ */ react.createElement("div", {
        className: classes.col + " " + classes.bcol
      }, ["A", "B", "C", "D", "E", "F", "G", "H"].map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))), /* @__PURE__ */ react.createElement("div", {
        className: classes.row + " " + classes.rrow
      }, [1, 2, 3, 4, 5, 6, 7, 8].map((value2) => /* @__PURE__ */ react.createElement("div", {
        className: classes.labelContainer,
        key: value2
      }, /* @__PURE__ */ react.createElement("p", {
        className: classes.squareLabel
      }, value2)))));
    }
  }
};
function boardCoordsToPixel(coordCode, color) {
  return rowColToPixel(boardCoordsToRowCol(coordCode, color));
}
function pixelToBoardCoords(coords, color) {
  return rowColToBoardCoords(pixelToRowCol(coords), color);
}
function boardCoordsToRowCol(coordCode, color) {
  let row, col;
  if (color === "white") {
    row = 8 - coordCode[1];
  } else {
    row = coordCode[1] - 1;
  }
  switch (coordCode[0]) {
    case "A":
      col = 0;
      break;
    case "B":
      col = 1;
      break;
    case "C":
      col = 2;
      break;
    case "D":
      col = 3;
      break;
    case "E":
      col = 4;
      break;
    case "F":
      col = 5;
      break;
    case "G":
      col = 6;
      break;
    case "H":
      col = 7;
      break;
  }
  return [row, col];
}
function rowColToBoardCoords(coords, color) {
  let row, col;
  if (color === "white") {
    row = 8 - coords[0];
  } else {
    row = coords[0] + 1;
  }
  switch (coords[1]) {
    case 0:
      col = "A";
      break;
    case 1:
      col = "B";
      break;
    case 2:
      col = "C";
      break;
    case 3:
      col = "D";
      break;
    case 4:
      col = "E";
      break;
    case 5:
      col = "F";
      break;
    case 6:
      col = "G";
      break;
    case 7:
      col = "H";
      break;
  }
  return col + String(row);
}
function rowColToPixel(coords) {
  return [coords[1] * squareSize, coords[0] * squareSize];
}
function pixelToRowCol(coords) {
  return [
    Math.floor(coords[1] / squareSize),
    Math.floor(coords[0] / squareSize)
  ];
}
function getPropertiesFromId(pieceId) {
  let properties = pieceId.split("-");
  properties[0] = properties[0] === "w" ? "white" : "black";
  properties[1] = expandPieceType(properties[1]);
  return properties;
}
function expandPieceType(pieceType) {
  switch (pieceType) {
    case "p":
      return "pawn";
    case "r":
      return "rook";
    case "kn":
      return "knight";
    case "b":
      return "bishop";
    case "q":
      return "queen";
    case "k":
      return "king";
  }
}
var Board_default = Board;

// docs/dist/components/App.js
function App() {
  return /* @__PURE__ */ react.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ react.createElement(StateContext_default, null, /* @__PURE__ */ react.createElement(Mode, {
    modeId: "menu"
  }, /* @__PURE__ */ react.createElement(Menu_default, null)), /* @__PURE__ */ react.createElement(Mode, {
    modeId: "game"
  }, /* @__PURE__ */ react.createElement(Board_default, null))));
}
var App_default = App;

// docs/dist/components/authentication/AuthProvider.js
var AuthContext = react.createContext({});
var AuthProvider = ({children}) => {
  const [auth, setAuth] = useState2();
  return /* @__PURE__ */ react.createElement(AuthContext.Provider, {
    value: (auth, setAuth)
  }, children);
};

// docs/dist/index.js
var root = createRoot$1(document.getElementById("root"));
root.render(/* @__PURE__ */ react.createElement(AuthProvider, null, /* @__PURE__ */ react.createElement(App_default, null)));
//# sourceMappingURL=index.js.map
