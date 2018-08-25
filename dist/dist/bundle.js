/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js":
/*!*************************************************!*\
  !*** (webpack)/node_modules/process/browser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
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
    while(len) {
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

process.nextTick = function (fun) {
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
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./app/components/Main.tsx":
/*!*********************************!*\
  !*** ./app/components/Main.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var Nav_1 = __webpack_require__(/*! office-ui-fabric-react/lib/Nav */ "./node_modules/office-ui-fabric-react/lib/Nav.js");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this._onClickHandler = _this._onClickHandler.bind(_this);
        return _this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", { className: "ms-NavExample-LeftPane" },
            React.createElement(Nav_1.Nav, { groups: [
                    {
                        links: [
                            {
                                name: "Home",
                                url: "http://example.com",
                                links: [
                                    {
                                        name: "Activity",
                                        url: "http://msn.com",
                                        key: "key1"
                                    },
                                    {
                                        name: "News",
                                        url: "http://msn.com",
                                        key: "key2"
                                    }
                                ],
                                isExpanded: true
                            },
                            {
                                name: "Documents",
                                url: "http://example.com",
                                key: "key3",
                                isExpanded: true
                            },
                            { name: "Pages", url: "http://msn.com", key: "key4" },
                            { name: "Notebook", url: "http://msn.com", key: "key5" },
                            {
                                name: "Long Name Test for ellipse",
                                url: "http://msn.com",
                                key: "key6"
                            },
                            {
                                name: "Edit",
                                url: "http://cnn.com",
                                onClick: this._onClickHandler2,
                                icon: "Edit",
                                key: "key8"
                            },
                            {
                                name: "Delete",
                                url: "http://cnn.com",
                                onClick: this._onClickHandler2,
                                iconProps: { iconName: "Delete" },
                                key: "key9"
                            }
                        ]
                    }
                ], expandedStateText: "expanded", collapsedStateText: "collapsed", selectedKey: "key3" })));
    };
    Main.prototype._onClickHandler = function (e) {
        alert("test");
        return false;
    };
    Main.prototype._onClickHandler2 = function (e) {
        return false;
    };
    return Main;
}(React.Component));
exports.Main = Main;


/***/ }),

/***/ "./app/index.tsx":
/*!***********************!*\
  !*** ./app/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var Icons_1 = __webpack_require__(/*! office-ui-fabric-react/lib/Icons */ "./node_modules/office-ui-fabric-react/lib/Icons.js");
var Main_1 = __webpack_require__(/*! ./components/Main */ "./app/components/Main.tsx");
Icons_1.initializeIcons();
var App = function () { return (React.createElement(Main_1.Main, null)); };
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));


/***/ }),

/***/ "./node_modules/@microsoft/load-themed-styles/lib/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && typeof DEBUG !== 'undefined' && DEBUG) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/buildin/global.js */ "../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-0.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-0.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-0\"",
            src: "url('" + baseUrl + "fabric-icons-0-29734c63.woff') format('woff')"
        },
        icons: {
            DecreaseIndentLegacy: '\uE290',
            IncreaseIndentLegacy: '\uE291',
            SizeLegacy: '\uE2B2',
            InternetSharing: '\uE704',
            Brightness: '\uE706',
            MapPin: '\uE707',
            Airplane: '\uE709',
            Tablet: '\uE70A',
            QuickNote: '\uE70B',
            Video: '\uE714',
            People: '\uE716',
            Phone: '\uE717',
            Pin: '\uE718',
            Shop: '\uE719',
            Stop: '\uE71A',
            Link: '\uE71B',
            AllApps: '\uE71D',
            Zoom: '\uE71E',
            ZoomOut: '\uE71F',
            Microphone: '\uE720',
            Camera: '\uE722',
            Attach: '\uE723',
            Send: '\uE724',
            FavoriteList: '\uE728',
            PageSolid: '\uE729',
            Forward: '\uE72A',
            Back: '\uE72B',
            Refresh: '\uE72C',
            Lock: '\uE72E',
            ReportHacked: '\uE730',
            EMI: '\uE731',
            MiniLink: '\uE732',
            Blocked: '\uE733',
            ReadingMode: '\uE736',
            Favicon: '\uE737',
            Remove: '\uE738',
            Checkbox: '\uE739',
            CheckboxComposite: '\uE73A',
            CheckboxIndeterminate: '\uE73C',
            CheckboxCompositeReversed: '\uE73D',
            BackToWindow: '\uE73F',
            FullScreen: '\uE740',
            Print: '\uE749',
            Up: '\uE74A',
            Down: '\uE74B',
            OEM: '\uE74C',
            Save: '\uE74E',
            Cloud: '\uE753',
            CommandPrompt: '\uE756',
            Sad: '\uE757',
            SIPMove: '\uE759',
            EraseTool: '\uE75C',
            GripperTool: '\uE75E',
            Dialpad: '\uE75F',
            PageLeft: '\uE760',
            PageRight: '\uE761',
            MultiSelect: '\uE762',
            KeyboardClassic: '\uE765',
            Play: '\uE768',
            Pause: '\uE769',
            Emoji2: '\uE76E',
            GripperBarHorizontal: '\uE76F',
            System: '\uE770',
            Personalize: '\uE771',
            SearchAndApps: '\uE773',
            Globe: '\uE774',
            ContactInfo: '\uE779',
            Unpin: '\uE77A',
            Contact: '\uE77B',
            Memo: '\uE77C',
            Paste: '\uE77F',
            WindowsLogo: '\uE782',
            Error: '\uE783',
            GripperBarVertical: '\uE784',
            Unlock: '\uE785',
            AutoEnhanceOn: '\uE78D',
            AutoEnhanceOff: '\uE78E',
            Color: '\uE790',
            SaveAs: '\uE792',
            Light: '\uE793',
            Filters: '\uE795',
            AspectRatio: '\uE799',
            Contrast: '\uE7A1',
            Redo: '\uE7A6',
            Crop: '\uE7A8',
            PhotoCollection: '\uE7AA',
            Album: '\uE7AB',
            Rotate: '\uE7AD',
            PanoIndicator: '\uE7B0',
            RedEye: '\uE7B3',
            ThumbnailView: '\uE7B6',
            Package: '\uE7B8',
            Warning: '\uE7BA',
            Financial: '\uE7BB',
            Education: '\uE7BE',
            ShoppingCart: '\uE7BF',
            Train: '\uE7C0',
            Move: '\uE7C2',
            TouchPointer: '\uE7C9',
            Merge: '\uE7D5'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-1.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-1.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-1\"",
            src: "url('" + baseUrl + "fabric-icons-1-a653c37c.woff') format('woff')"
        },
        icons: {
            TurnRight: '\uE7DB',
            Ferry: '\uE7E3',
            Highlight: '\uE7E6',
            PowerButton: '\uE7E8',
            Tab: '\uE7E9',
            Admin: '\uE7EF',
            TVMonitor: '\uE7F4',
            Speakers: '\uE7F5',
            StackIndicator: '\uE7FF',
            Nav2DMapView: '\uE800',
            Car: '\uE804',
            Bus: '\uE806',
            EatDrink: '\uE807',
            LocationCircle: '\uE80E',
            Home: '\uE80F',
            SwitcherStartEnd: '\uE810',
            ParkingLocation: '\uE811',
            IncidentTriangle: '\uE814',
            Touch: '\uE815',
            MapDirections: '\uE816',
            CaretHollow: '\uE817',
            CaretSolid: '\uE818',
            History: '\uE81C',
            Location: '\uE81D',
            Work: '\uE821',
            Recent: '\uE823',
            Hotel: '\uE824',
            LocationDot: '\uE827',
            Dictionary: '\uE82D',
            ChromeBack: '\uE830',
            FolderOpen: '\uE838',
            PinnedFill: '\uE842',
            RevToggleKey: '\uE845',
            Previous: '\uE892',
            Next: '\uE893',
            Sync: '\uE895',
            Help: '\uE897',
            Emoji: '\uE899',
            MailForward: '\uE89C',
            ClosePane: '\uE89F',
            OpenPane: '\uE8A0',
            PreviewLink: '\uE8A1',
            ZoomIn: '\uE8A3',
            Bookmarks: '\uE8A4',
            Document: '\uE8A5',
            ProtectedDocument: '\uE8A6',
            OpenInNewWindow: '\uE8A7',
            MailFill: '\uE8A8',
            ViewAll: '\uE8A9',
            Switch: '\uE8AB',
            Rename: '\uE8AC',
            Remote: '\uE8AF',
            SelectAll: '\uE8B3',
            Orientation: '\uE8B4',
            Import: '\uE8B5',
            Picture: '\uE8B9',
            ChromeClose: '\uE8BB',
            ShowResults: '\uE8BC',
            Message: '\uE8BD',
            CalendarDay: '\uE8BF',
            CalendarWeek: '\uE8C0',
            MailReplyAll: '\uE8C2',
            Read: '\uE8C3',
            Cut: '\uE8C6',
            PaymentCard: '\uE8C7',
            Copy: '\uE8C8',
            Important: '\uE8C9',
            MailReply: '\uE8CA',
            GotoToday: '\uE8D1',
            Font: '\uE8D2',
            FontColor: '\uE8D3',
            FolderFill: '\uE8D5',
            Permissions: '\uE8D7',
            DisableUpdates: '\uE8D8',
            Unfavorite: '\uE8D9',
            Italic: '\uE8DB',
            Underline: '\uE8DC',
            Bold: '\uE8DD',
            MoveToFolder: '\uE8DE',
            Dislike: '\uE8E0',
            Like: '\uE8E1',
            AlignCenter: '\uE8E3',
            OpenFile: '\uE8E5',
            FontDecrease: '\uE8E7',
            FontIncrease: '\uE8E8',
            FontSize: '\uE8E9',
            CellPhone: '\uE8EA',
            Calculator: '\uE8EF',
            Library: '\uE8F1',
            PostUpdate: '\uE8F3',
            NewFolder: '\uE8F4',
            CalendarReply: '\uE8F5',
            UnsyncFolder: '\uE8F6',
            SyncFolder: '\uE8F7',
            BlockContact: '\uE8F8',
            Accept: '\uE8FB',
            BulletedList: '\uE8FD',
            Preview: '\uE8FF',
            News: '\uE900',
            Chat: '\uE901'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-10.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-10.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-10\"",
            src: "url('" + baseUrl + "fabric-icons-10-fb519450.woff') format('woff')"
        },
        icons: {
            CPlusPlus: '\uF2F4',
            FSharpLanguage: '\uF2F5',
            FSharp: '\uF2F6',
            TypeScriptLanguage: '\uF2F7',
            PythonLanguage: '\uF2F8',
            PY: '\uF2F9',
            CoffeeScript: '\uF2FA',
            MarkDownLanguage: '\uF2FB',
            FullWidth: '\uF2FE',
            FullWidthEdit: '\uF2FF',
            Plug: '\uF300',
            PlugSolid: '\uF301',
            PlugConnected: '\uF302',
            PlugDisconnected: '\uF303',
            UnlockSolid: '\uF304',
            Variable: '\uF305',
            Parameter: '\uF306',
            CommentUrgent: '\uF307',
            Storyboard: '\uF308',
            DiffInline: '\uF309',
            DiffSideBySide: '\uF30A',
            ImageDiff: '\uF30B',
            ImagePixel: '\uF30C',
            FileBug: '\uF30D',
            FileCode: '\uF30E',
            FileComment: '\uF30F',
            BusinessHoursSign: '\uF310',
            FileImage: '\uF311',
            FileSymlink: '\uF312',
            AutoFillTemplate: '\uF313',
            WorkItem: '\uF314',
            WorkItemBug: '\uF315',
            LogRemove: '\uF316',
            ColumnOptions: '\uF317',
            Packages: '\uF318',
            BuildIssue: '\uF319',
            AssessmentGroup: '\uF31A',
            VariableGroup: '\uF31B',
            FullHistory: '\uF31C',
            SingleColumnEdit: '\uF321',
            DoubleColumnEdit: '\uF322',
            TripleColumnEdit: '\uF323',
            ColumnLeftTwoThirdsEdit: '\uF324',
            ColumnRightTwoThirdsEdit: '\uF325',
            StreamLogo: '\uF329',
            PassiveAuthentication: '\uF32A',
            AlertSolid: '\uF331',
            MegaphoneSolid: '\uF332',
            TaskSolid: '\uF333',
            ConfigurationSolid: '\uF334',
            BugSolid: '\uF335',
            CrownSolid: '\uF336',
            Trophy2Solid: '\uF337',
            QuickNoteSolid: '\uF338',
            ConstructionConeSolid: '\uF339',
            PageListSolid: '\uF33A',
            PageListMirroredSolid: '\uF33B',
            StarburstSolid: '\uF33C',
            ReadingModeSolid: '\uF33D',
            SadSolid: '\uF33E',
            HealthSolid: '\uF33F',
            ShieldSolid: '\uF340',
            GiftBoxSolid: '\uF341',
            ShoppingCartSolid: '\uF342',
            MailSolid: '\uF343',
            ChatSolid: '\uF344',
            RibbonSolid: '\uF345',
            FinancialSolid: '\uF346',
            FinancialMirroredSolid: '\uF347',
            HeadsetSolid: '\uF348',
            PermissionsSolid: '\uF349',
            ParkingSolid: '\uF34A',
            ParkingMirroredSolid: '\uF34B',
            DiamondSolid: '\uF34C',
            AsteriskSolid: '\uF34D',
            OfflineStorageSolid: '\uF34E',
            BankSolid: '\uF34F',
            DecisionSolid: '\uF350',
            Parachute: '\uF351',
            ParachuteSolid: '\uF352',
            FiltersSolid: '\uF353',
            ColorSolid: '\uF354',
            ReviewSolid: '\uF355',
            ReviewRequestSolid: '\uF356',
            ReviewRequestMirroredSolid: '\uF357',
            ReviewResponseSolid: '\uF358',
            FeedbackRequestSolid: '\uF359',
            FeedbackRequestMirroredSolid: '\uF35A',
            FeedbackResponseSolid: '\uF35B',
            WorkItemBar: '\uF35C',
            WorkItemBarSolid: '\uF35D',
            Separator: '\uF35E',
            NavigateExternalInline: '\uF35F',
            PlanView: '\uF360',
            TimelineMatrixView: '\uF361',
            EngineeringGroup: '\uF362',
            ProjectCollection: '\uF363',
            CaretBottomRightCenter8: '\uF364',
            CaretBottomLeftCenter8: '\uF365',
            CaretTopRightCenter8: '\uF366'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-11.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-11.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-11\"",
            src: "url('" + baseUrl + "fabric-icons-11-a4026982.woff') format('woff')"
        },
        icons: {
            CaretTopLeftCenter8: '\uF367',
            DonutChart: '\uF368',
            ChevronUnfold10: '\uF369',
            ChevronFold10: '\uF36A',
            DoubleChevronDown8: '\uF36B',
            DoubleChevronUp8: '\uF36C',
            DoubleChevronLeft8: '\uF36D',
            DoubleChevronRight8: '\uF36E',
            ChevronDownEnd6: '\uF36F',
            ChevronUpEnd6: '\uF370',
            ChevronLeftEnd6: '\uF371',
            ChevronRightEnd6: '\uF372',
            ContextMenu: '\uF37C',
            AzureAPIManagement: '\uF37F',
            AzureServiceEndpoint: '\uF380',
            VSTSLogo: '\uF381',
            VSTSAltLogo1: '\uF382',
            VSTSAltLogo2: '\uF383',
            FileTypeSolution: '\uF387',
            WordLogoInverse16: '\uF390',
            WordLogo16: '\uF391',
            WordLogoFill16: '\uF392',
            PowerPointLogoInverse16: '\uF393',
            PowerPointLogo16: '\uF394',
            PowerPointLogoFill16: '\uF395',
            ExcelLogoInverse16: '\uF396',
            ExcelLogo16: '\uF397',
            ExcelLogoFill16: '\uF398',
            OneNoteLogoInverse16: '\uF399',
            OneNoteLogo16: '\uF39A',
            OneNoteLogoFill16: '\uF39B',
            OutlookLogoInverse16: '\uF39C',
            OutlookLogo16: '\uF39D',
            OutlookLogoFill16: '\uF39E',
            PublisherLogoInverse16: '\uF39F',
            PublisherLogo16: '\uF3A0',
            PublisherLogoFill16: '\uF3A1',
            VisioLogoInverse16: '\uF3A2',
            VisioLogo16: '\uF3A3',
            VisioLogoFill16: '\uF3A4',
            TestBeaker: '\uF3A5',
            TestBeakerSolid: '\uF3A6',
            TestExploreSolid: '\uF3A7',
            TestAutoSolid: '\uF3A8',
            TestUserSolid: '\uF3A9',
            TestImpactSolid: '\uF3AA',
            TestPlan: '\uF3AB',
            TestStep: '\uF3AC',
            TestParameter: '\uF3AD',
            TestSuite: '\uF3AE',
            TestCase: '\uF3AF',
            Sprint: '\uF3B0',
            SignOut: '\uF3B1',
            TriggerApproval: '\uF3B2',
            Rocket: '\uF3B3',
            AzureKeyVault: '\uF3B4',
            Transition: '\uF3BC',
            LikeSolid: '\uF3BF',
            DislikeSolid: '\uF3C0',
            UnSetColor: '\uF3F9',
            DeclineCall: '\uF405',
            RectangularClipping: '\uF407',
            TeamsLogo16: '\uF40A',
            TeamsLogoFill16: '\uF40B',
            Spacer: '\uF40D',
            SkypeLogo16: '\uF40E',
            SkypeForBusinessLogo16: '\uF40F',
            SkypeForBusinessLogoFill16: '\uF410',
            FilterSolid: '\uF412',
            MailUndelivered: '\uF415',
            MailTentative: '\uF416',
            MailTentativeMirrored: '\uF417',
            MailReminder: '\uF418',
            ReceiptUndelivered: '\uF419',
            ReceiptTentative: '\uF41A',
            ReceiptTentativeMirrored: '\uF41B',
            Inbox: '\uF41C',
            IRMReply: '\uF41D',
            IRMReplyMirrored: '\uF41E',
            IRMForward: '\uF41F',
            IRMForwardMirrored: '\uF420',
            VoicemailIRM: '\uF421',
            EventAccepted: '\uF422',
            EventTentative: '\uF423',
            EventTentativeMirrored: '\uF424',
            EventDeclined: '\uF425',
            IDBadge: '\uF427',
            BackgroundColor: '\uF42B',
            OfficeFormsLogoInverse16: '\uF433',
            OfficeFormsLogo: '\uF434',
            OfficeFormsLogoFill: '\uF435',
            OfficeFormsLogo16: '\uF436',
            OfficeFormsLogoFill16: '\uF437',
            OfficeFormsLogoInverse24: '\uF43A',
            OfficeFormsLogo24: '\uF43B',
            OfficeFormsLogoFill24: '\uF43C',
            PageLock: '\uF43F',
            NotExecuted: '\uF440',
            NotImpactedSolid: '\uF441',
            FieldReadOnly: '\uF442'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-12.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-12.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-12\"",
            src: "url('" + baseUrl + "fabric-icons-12-e6882c74.woff') format('woff')"
        },
        icons: {
            FieldRequired: '\uF443',
            BacklogBoard: '\uF444',
            ExternalBuild: '\uF445',
            ExternalTFVC: '\uF446',
            ExternalXAML: '\uF447',
            IssueSolid: '\uF448',
            DefectSolid: '\uF449',
            LadybugSolid: '\uF44A',
            NugetLogo: '\uF44C',
            TFVCLogo: '\uF44D',
            ProjectLogo32: '\uF47E',
            ProjectLogoFill32: '\uF47F',
            ProjectLogo16: '\uF480',
            ProjectLogoFill16: '\uF481',
            SwayLogo32: '\uF482',
            SwayLogoFill32: '\uF483',
            SwayLogo16: '\uF484',
            SwayLogoFill16: '\uF485',
            ClassNotebookLogo32: '\uF486',
            ClassNotebookLogoFill32: '\uF487',
            ClassNotebookLogo16: '\uF488',
            ClassNotebookLogoFill16: '\uF489',
            ClassNotebookLogoInverse32: '\uF48A',
            ClassNotebookLogoInverse16: '\uF48B',
            StaffNotebookLogo32: '\uF48C',
            StaffNotebookLogoFill32: '\uF48D',
            StaffNotebookLogo16: '\uF48E',
            StaffNotebookLogoFill16: '\uF48F',
            StaffNotebookLogoInverted32: '\uF490',
            StaffNotebookLogoInverted16: '\uF491',
            KaizalaLogo: '\uF492',
            TaskLogo: '\uF493',
            ProtectionCenterLogo32: '\uF494',
            GallatinLogo: '\uF496',
            Globe2: '\uF49A',
            Guitar: '\uF49B',
            Breakfast: '\uF49C',
            Brunch: '\uF49D',
            BeerMug: '\uF49E',
            Vacation: '\uF49F',
            Teeth: '\uF4A0',
            Taxi: '\uF4A1',
            Chopsticks: '\uF4A2',
            SyncOccurence: '\uF4A3',
            UnsyncOccurence: '\uF4A4',
            PrimaryCalendar: '\uF4AE',
            SearchCalendar: '\uF4AF',
            VideoOff: '\uF4B0',
            MicrosoftFlowLogo: '\uF4B1',
            BusinessCenterLogo: '\uF4B2',
            ToDoLogoBottom: '\uF4B3',
            ToDoLogoTop: '\uF4B4',
            EditSolid12: '\uF4B5',
            EditSolidMirrored12: '\uF4B6',
            UneditableSolid12: '\uF4B7',
            UneditableSolidMirrored12: '\uF4B8',
            UneditableMirrored: '\uF4B9',
            AdminALogo32: '\uF4BA',
            AdminALogoFill32: '\uF4BB',
            ToDoLogoInverse: '\uF4BC',
            Snooze: '\uF4BD',
            WaffleOffice365: '\uF4E0',
            ImageSearch: '\uF4E8',
            NewsSearch: '\uF4E9',
            VideoSearch: '\uF4EA',
            R: '\uF4EB',
            FontColorA: '\uF4EC',
            FontColorSwatch: '\uF4ED',
            LightWeight: '\uF4EE',
            NormalWeight: '\uF4EF',
            SemiboldWeight: '\uF4F0',
            GroupObject: '\uF4F1',
            UngroupObject: '\uF4F2',
            AlignHorizontalLeft: '\uF4F3',
            AlignHorizontalCenter: '\uF4F4',
            AlignHorizontalRight: '\uF4F5',
            AlignVerticalTop: '\uF4F6',
            AlignVerticalCenter: '\uF4F7',
            AlignVerticalBottom: '\uF4F8',
            HorizontalDistributeCenter: '\uF4F9',
            VerticalDistributeCenter: '\uF4FA',
            Ellipse: '\uF4FB',
            Line: '\uF4FC',
            Octagon: '\uF4FD',
            Hexagon: '\uF4FE',
            Pentagon: '\uF4FF',
            RightTriangle: '\uF500',
            HalfCircle: '\uF501',
            QuarterCircle: '\uF502',
            ThreeQuarterCircle: '\uF503',
            '6PointStar': '\uF504',
            '12PointStar': '\uF505',
            ArrangeBringToFront: '\uF506',
            ArrangeSendToBack: '\uF507',
            ArrangeSendBackward: '\uF508',
            ArrangeBringForward: '\uF509',
            BorderDash: '\uF50A',
            BorderDot: '\uF50B',
            LineStyle: '\uF50C',
            LineThickness: '\uF50D'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-13.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-13.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-13\"",
            src: "url('" + baseUrl + "fabric-icons-13-0980cd6d.woff') format('woff')"
        },
        icons: {
            WindowEdit: '\uF50E',
            HintText: '\uF50F',
            MediaAdd: '\uF510',
            AnchorLock: '\uF511',
            AutoHeight: '\uF512',
            ChartSeries: '\uF513',
            ChartXAngle: '\uF514',
            ChartYAngle: '\uF515',
            Combobox: '\uF516',
            LineSpacing: '\uF517',
            Padding: '\uF518',
            PaddingTop: '\uF519',
            PaddingBottom: '\uF51A',
            PaddingLeft: '\uF51B',
            PaddingRight: '\uF51C',
            NavigationFlipper: '\uF51D',
            AlignJustify: '\uF51E',
            TextOverflow: '\uF51F',
            VisualsFolder: '\uF520',
            VisualsStore: '\uF521',
            PictureCenter: '\uF522',
            PictureFill: '\uF523',
            PicturePosition: '\uF524',
            PictureStretch: '\uF525',
            PictureTile: '\uF526',
            Slider: '\uF527',
            SliderHandleSize: '\uF528',
            DefaultRatio: '\uF529',
            NumberSequence: '\uF52A',
            GUID: '\uF52B',
            ReportAdd: '\uF52C',
            DashboardAdd: '\uF52D',
            MapPinSolid: '\uF52E',
            WebPublish: '\uF52F',
            PieSingleSolid: '\uF530',
            BlockedSolid: '\uF531',
            DrillDown: '\uF532',
            DrillDownSolid: '\uF533',
            DrillExpand: '\uF534',
            DrillShow: '\uF535',
            OneDriveFolder16: '\uF53B',
            FunctionalManagerDashboard: '\uF542',
            BIDashboard: '\uF543',
            CodeEdit: '\uF544',
            RenewalCurrent: '\uF545',
            RenewalFuture: '\uF546',
            SplitObject: '\uF547',
            BulkUpload: '\uF548',
            DownloadDocument: '\uF549',
            WaitlistConfirm: '\uF550',
            WaitlistConfirmMirrored: '\uF551',
            LaptopSecure: '\uF552',
            DragObject: '\uF553',
            EntryView: '\uF554',
            EntryDecline: '\uF555',
            ContactCardSettings: '\uF556',
            ContactCardSettingsMirrored: '\uF557',
            CalendarSettings: '\uF558',
            CalendarSettingsMirrored: '\uF559',
            HardDriveLock: '\uF55A',
            HardDriveUnlock: '\uF55B',
            AccountManagement: '\uF55C',
            TransitionPop: '\uF5B2',
            TransitionPush: '\uF5B3',
            TransitionEffect: '\uF5B4',
            LookupEntities: '\uF5B5',
            ExploreData: '\uF5B6',
            AddBookmark: '\uF5B7',
            SearchBookmark: '\uF5B8',
            DrillThrough: '\uF5B9',
            MasterDatabase: '\uF5BA',
            CertifiedDatabase: '\uF5BB',
            MaximumValue: '\uF5BC',
            MinimumValue: '\uF5BD',
            VisualStudioIDELogo32: '\uF5D0',
            PasteAsText: '\uF5D5',
            PasteAsCode: '\uF5D6',
            BrowserTab: '\uF5D7',
            BrowserTabScreenshot: '\uF5D8',
            DesktopScreenshot: '\uF5D9',
            FileYML: '\uF5DA',
            ClipboardSolid: '\uF5DC',
            AnalyticsView: '\uF5F1',
            Leave: '\uF627',
            Trending12: '\uF62D',
            Blocked12: '\uF62E',
            Warning12: '\uF62F',
            CheckedOutByOther12: '\uF630',
            CheckedOutByYou12: '\uF631',
            CircleShapeSolid: '\uF63C',
            SquareShapeSolid: '\uF63D',
            TriangleShapeSolid: '\uF63E',
            DropShapeSolid: '\uF63F',
            RectangleShapeSolid: '\uF640',
            InsertColumnsLeft: '\uF64A',
            InsertColumnsRight: '\uF64B',
            InsertRowsAbove: '\uF64C',
            InsertRowsBelow: '\uF64D',
            DeleteColumns: '\uF64E',
            DeleteRows: '\uF64F'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-14.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-14.js ***!
  \*************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-14\"",
            src: "url('" + baseUrl + "fabric-icons-14-eb4d1150.woff') format('woff')"
        },
        icons: {
            DeleteRowsMirrored: '\uF650',
            DeleteTable: '\uF651',
            VersionControlPush: '\uF664',
            WhiteBoardApp16: '\uF673',
            WhiteBoardApp32: '\uF674',
            InsertSignatureLine: '\uF677',
            ArrangeByFrom: '\uF678',
            Phishing: '\uF679',
            CreateMailRule: '\uF67A',
            PublishCourse: '\uF699',
            DictionaryRemove: '\uF69A',
            UserRemove: '\uF69B',
            UserEvent: '\uF69C',
            Encryption: '\uF69D',
            D365TalentLearn: '\uF6BB',
            D365TalentInsight: '\uF6BC',
            D365TalentHRCore: '\uF6BD',
            BacklogList: '\uF6BF',
            ButtonControl: '\uF6C0',
            TableGroup: '\uF6D9',
            MountainClimbing: '\uF6DB',
            TagUnknown: '\uF6DF',
            TagUnknownMirror: '\uF6E0',
            TagUnknown12: '\uF6E1',
            TagUnknown12Mirror: '\uF6E2',
            Link12: '\uF6E3',
            Presentation: '\uF6E4',
            Presentation12: '\uF6E5',
            Lock12: '\uF6E6',
            BuildDefinition: '\uF6E9',
            ReleaseDefinition: '\uF6EA',
            SaveTemplate: '\uF6EC',
            UserGauge: '\uF6ED',
            BlockedSiteSolid12: '\uF70A',
            TagSolid: '\uF70E',
            OfficeChat: '\uF70F',
            OfficeChatSolid: '\uF710',
            MailSchedule: '\uF72E'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-2.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-2.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-2\"",
            src: "url('" + baseUrl + "fabric-icons-2-b9379dbc.woff') format('woff')"
        },
        icons: {
            Group: '\uE902',
            World: '\uE909',
            Comment: '\uE90A',
            DockLeft: '\uE90C',
            DockRight: '\uE90D',
            Repair: '\uE90F',
            Accounts: '\uE910',
            RadioBullet: '\uE915',
            Stopwatch: '\uE916',
            Clock: '\uE917',
            WorldClock: '\uE918',
            AlarmClock: '\uE919',
            Photo: '\uE91B',
            Hospital: '\uE91D',
            Timer: '\uE91E',
            FullCircleMask: '\uE91F',
            LocationFill: '\uE920',
            ChromeMinimize: '\uE921',
            Annotation: '\uE924',
            Fingerprint: '\uE928',
            Handwriting: '\uE929',
            Completed: '\uE930',
            Label: '\uE932',
            FlickDown: '\uE935',
            FlickUp: '\uE936',
            FlickLeft: '\uE937',
            FlickRight: '\uE938',
            MiniExpand: '\uE93A',
            MiniContract: '\uE93B',
            Streaming: '\uE93E',
            MusicInCollection: '\uE940',
            OneDriveLogo: '\uE941',
            CompassNW: '\uE942',
            Code: '\uE943',
            LightningBolt: '\uE945',
            CalculatorMultiply: '\uE947',
            CalculatorAddition: '\uE948',
            CalculatorSubtract: '\uE949',
            CalculatorEqualTo: '\uE94E',
            PrintfaxPrinterFile: '\uE956',
            Communications: '\uE95A',
            Headset: '\uE95B',
            Health: '\uE95E',
            ChevronUpSmall: '\uE96D',
            ChevronDownSmall: '\uE96E',
            ChevronLeftSmall: '\uE96F',
            ChevronRightSmall: '\uE970',
            ChevronUpMed: '\uE971',
            ChevronDownMed: '\uE972',
            ChevronLeftMed: '\uE973',
            ChevronRightMed: '\uE974',
            PC1: '\uE977',
            PresenceChickletVideo: '\uE979',
            Reply: '\uE97A',
            HalfAlpha: '\uE97E',
            ConstructionCone: '\uE98F',
            DoubleChevronLeftMed: '\uE991',
            Volume0: '\uE992',
            Volume1: '\uE993',
            Volume2: '\uE994',
            Volume3: '\uE995',
            Chart: '\uE999',
            Robot: '\uE99A',
            Manufacturing: '\uE99C',
            LockSolid: '\uE9A2',
            BidiLtr: '\uE9AA',
            BidiRtl: '\uE9AB',
            RightDoubleQuote: '\uE9B1',
            Sunny: '\uE9BD',
            CloudWeather: '\uE9BE',
            Cloudy: '\uE9BF',
            PartlyCloudyDay: '\uE9C0',
            PartlyCloudyNight: '\uE9C1',
            ClearNight: '\uE9C2',
            RainShowersDay: '\uE9C3',
            Rain: '\uE9C4',
            Thunderstorms: '\uE9C6',
            RainSnow: '\uE9C7',
            Snow: '\uE9C8',
            BlowingSnow: '\uE9C9',
            Frigid: '\uE9CA',
            Fog: '\uE9CB',
            Squalls: '\uE9CC',
            Duststorm: '\uE9CD',
            Unknown: '\uE9CE',
            Precipitation: '\uE9CF',
            Ribbon: '\uE9D1',
            AreaChart: '\uE9D2',
            Assign: '\uE9D3',
            CheckList: '\uE9D5',
            Diagnostic: '\uE9D9',
            Generate: '\uE9DA',
            LineChart: '\uE9E6',
            Equalizer: '\uE9E9',
            BarChartHorizontal: '\uE9EB',
            BarChartVertical: '\uE9EC',
            Freezing: '\uE9EF',
            Processing: '\uE9F5',
            SnowShowerDay: '\uE9FD',
            HailDay: '\uEA00'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-3.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-3.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-3\"",
            src: "url('" + baseUrl + "fabric-icons-3-ef2110da.woff') format('woff')"
        },
        icons: {
            WorkFlow: '\uEA01',
            HourGlass: '\uEA03',
            StoreLogoMed20: '\uEA04',
            TimeSheet: '\uEA05',
            TriangleSolid: '\uEA08',
            VideoSolid: '\uEA0C',
            RainShowersNight: '\uEA0F',
            SnowShowerNight: '\uEA11',
            Teamwork: '\uEA12',
            HailNight: '\uEA13',
            PeopleAdd: '\uEA15',
            Glasses: '\uEA16',
            DateTime2: '\uEA17',
            Shield: '\uEA18',
            Header1: '\uEA19',
            PageAdd: '\uEA1A',
            NumberedList: '\uEA1C',
            PowerBILogo: '\uEA1E',
            Info2: '\uEA1F',
            MusicInCollectionFill: '\uEA36',
            Asterisk: '\uEA38',
            ErrorBadge: '\uEA39',
            CircleFill: '\uEA3B',
            Record2: '\uEA3F',
            AllAppsMirrored: '\uEA40',
            BookmarksMirrored: '\uEA41',
            BulletedListMirrored: '\uEA42',
            CaretHollowMirrored: '\uEA45',
            CaretSolidMirrored: '\uEA46',
            ChromeBackMirrored: '\uEA47',
            ClosePaneMirrored: '\uEA49',
            DockLeftMirrored: '\uEA4C',
            DoubleChevronLeftMedMirrored: '\uEA4D',
            HelpMirrored: '\uEA51',
            ImportMirrored: '\uEA52',
            ListMirrored: '\uEA55',
            MailForwardMirrored: '\uEA56',
            MailReplyMirrored: '\uEA57',
            MailReplyAllMirrored: '\uEA58',
            OpenPaneMirrored: '\uEA5B',
            ParkingLocationMirrored: '\uEA5E',
            SendMirrored: '\uEA63',
            ShowResultsMirrored: '\uEA65',
            ThumbnailViewMirrored: '\uEA67',
            Devices3: '\uEA6C',
            Lightbulb: '\uEA80',
            StatusTriangle: '\uEA82',
            VolumeDisabled: '\uEA85',
            Puzzle: '\uEA86',
            EmojiNeutral: '\uEA87',
            EmojiDisappointed: '\uEA88',
            HomeSolid: '\uEA8A',
            Ringer: '\uEA8F',
            PDF: '\uEA90',
            HeartBroken: '\uEA92',
            StoreLogo16: '\uEA96',
            MultiSelectMirrored: '\uEA98',
            Broom: '\uEA99',
            Cocktails: '\uEA9D',
            Wines: '\uEABF',
            Articles: '\uEAC1',
            Cycling: '\uEAC7',
            DietPlanNotebook: '\uEAC8',
            Pill: '\uEACB',
            ExerciseTracker: '\uEACC',
            HandsFree: '\uEAD0',
            Medical: '\uEAD4',
            Running: '\uEADA',
            Weights: '\uEADB',
            Trackers: '\uEADF',
            AddNotes: '\uEAE3',
            AllCurrency: '\uEAE4',
            BarChart4: '\uEAE7',
            CirclePlus: '\uEAEE',
            Coffee: '\uEAEF',
            Cotton: '\uEAF3',
            Market: '\uEAFC',
            Money: '\uEAFD',
            PieDouble: '\uEB04',
            PieSingle: '\uEB05',
            RemoveFilter: '\uEB08',
            Savings: '\uEB0B',
            Sell: '\uEB0C',
            StockDown: '\uEB0F',
            StockUp: '\uEB11',
            Lamp: '\uEB19',
            Source: '\uEB1B',
            MSNVideos: '\uEB1C',
            Cricket: '\uEB1E',
            Golf: '\uEB1F',
            Baseball: '\uEB20',
            Soccer: '\uEB21',
            MoreSports: '\uEB22',
            AutoRacing: '\uEB24',
            CollegeHoops: '\uEB25',
            CollegeFootball: '\uEB26',
            ProFootball: '\uEB27',
            ProHockey: '\uEB28',
            Rugby: '\uEB2D',
            SubstitutionsIn: '\uEB31'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-4.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-4.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-4\"",
            src: "url('" + baseUrl + "fabric-icons-4-aeecd474.woff') format('woff')"
        },
        icons: {
            Tennis: '\uEB33',
            Arrivals: '\uEB34',
            Design: '\uEB3C',
            Website: '\uEB41',
            Drop: '\uEB42',
            SkiResorts: '\uEB45',
            Snowflake: '\uEB46',
            BusSolid: '\uEB47',
            FerrySolid: '\uEB48',
            AirplaneSolid: '\uEB4C',
            TrainSolid: '\uEB4D',
            Ticket: '\uEB54',
            Devices4: '\uEB66',
            AzureLogo: '\uEB6A',
            BingLogo: '\uEB6B',
            MSNLogo: '\uEB6C',
            OutlookLogoInverse: '\uEB6D',
            OfficeLogo: '\uEB6E',
            SkypeLogo: '\uEB6F',
            Door: '\uEB75',
            EditMirrored: '\uEB7E',
            GiftCard: '\uEB8E',
            DoubleBookmark: '\uEB8F',
            StatusErrorFull: '\uEB90',
            Certificate: '\uEB95',
            FastForward: '\uEB9D',
            Rewind: '\uEB9E',
            Photo2: '\uEB9F',
            OpenSource: '\uEBC2',
            Movers: '\uEBCD',
            CloudDownload: '\uEBD3',
            Family: '\uEBDA',
            WindDirection: '\uEBE6',
            Bug: '\uEBE8',
            SiteScan: '\uEBEC',
            BrowserScreenShot: '\uEBED',
            F12DevTools: '\uEBEE',
            CSS: '\uEBEF',
            JS: '\uEBF0',
            DeliveryTruck: '\uEBF4',
            ReminderPerson: '\uEBF7',
            ReminderGroup: '\uEBF8',
            TabletMode: '\uEBFC',
            Umbrella: '\uEC04',
            NetworkTower: '\uEC05',
            CityNext: '\uEC06',
            Section: '\uEC0C',
            OneNoteLogoInverse: '\uEC0D',
            ToggleFilled: '\uEC11',
            ToggleBorder: '\uEC12',
            SliderThumb: '\uEC13',
            ToggleThumb: '\uEC14',
            Documentation: '\uEC17',
            Badge: '\uEC1B',
            Giftbox: '\uEC1F',
            VisualStudioLogo: '\uEC22',
            ExcelLogoInverse: '\uEC28',
            WordLogoInverse: '\uEC29',
            PowerPointLogoInverse: '\uEC2A',
            Cafe: '\uEC32',
            SpeedHigh: '\uEC4A',
            Commitments: '\uEC4D',
            ThisPC: '\uEC4E',
            MusicNote: '\uEC4F',
            MicOff: '\uEC54',
            EdgeLogo: '\uEC60',
            CompletedSolid: '\uEC61',
            AlbumRemove: '\uEC62',
            MessageFill: '\uEC70',
            TabletSelected: '\uEC74',
            MobileSelected: '\uEC75',
            LaptopSelected: '\uEC76',
            TVMonitorSelected: '\uEC77',
            DeveloperTools: '\uEC7A',
            InsertTextBox: '\uEC7D',
            LowerBrightness: '\uEC8A',
            DOM: '\uEC8D',
            CloudUpload: '\uEC8E',
            ScrollUpDown: '\uEC8F',
            DateTime: '\uEC92',
            Event: '\uECA3',
            Cake: '\uECA4',
            Org: '\uECA6',
            PartyLeader: '\uECA7',
            DRM: '\uECA8',
            CloudAdd: '\uECA9',
            AppIconDefault: '\uECAA',
            Photo2Add: '\uECAB',
            Photo2Remove: '\uECAC',
            POI: '\uECAF',
            AddTo: '\uECC8',
            RadioBtnOff: '\uECCA',
            RadioBtnOn: '\uECCB',
            ExploreContent: '\uECCD',
            Product: '\uECDC',
            ProgressLoopInner: '\uECDE',
            ProgressLoopOuter: '\uECDF',
            Blocked2: '\uECE4',
            FangBody: '\uECEB',
            ChatInviteFriend: '\uECFE'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-5.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-5.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-5\"",
            src: "url('" + baseUrl + "fabric-icons-5-f6547654.woff') format('woff')"
        },
        icons: {
            Crown: '\uED01',
            Diamond: '\uED02',
            ScaleUp: '\uED09',
            Feedback: '\uED15',
            SharepointLogoInverse: '\uED18',
            YammerLogo: '\uED19',
            Hide: '\uED1A',
            Uneditable: '\uED1D',
            ReturnToSession: '\uED24',
            OpenFolderHorizontal: '\uED25',
            CalendarMirrored: '\uED28',
            SwayLogoInverse: '\uED29',
            OutOfOffice: '\uED34',
            Trophy: '\uED3F',
            ReopenPages: '\uED50',
            EmojiTabSymbols: '\uED58',
            AADLogo: '\uED68',
            AccessLogo: '\uED69',
            AdminALogoInverse32: '\uED6A',
            AdminCLogoInverse32: '\uED6B',
            AdminDLogoInverse32: '\uED6C',
            AdminELogoInverse32: '\uED6D',
            AdminLLogoInverse32: '\uED6E',
            AdminMLogoInverse32: '\uED6F',
            AdminOLogoInverse32: '\uED70',
            AdminPLogoInverse32: '\uED71',
            AdminSLogoInverse32: '\uED72',
            AdminYLogoInverse32: '\uED73',
            DelveLogoInverse: '\uED76',
            ExchangeLogoInverse: '\uED78',
            LyncLogo: '\uED79',
            OfficeVideoLogoInverse: '\uED7A',
            SocialListeningLogo: '\uED7C',
            VisioLogoInverse: '\uED7D',
            Balloons: '\uED7E',
            Cat: '\uED7F',
            MailAlert: '\uED80',
            MailCheck: '\uED81',
            MailLowImportance: '\uED82',
            MailPause: '\uED83',
            MailRepeat: '\uED84',
            SecurityGroup: '\uED85',
            Table: '\uED86',
            VoicemailForward: '\uED87',
            VoicemailReply: '\uED88',
            Waffle: '\uED89',
            RemoveEvent: '\uED8A',
            EventInfo: '\uED8B',
            ForwardEvent: '\uED8C',
            WipePhone: '\uED8D',
            AddOnlineMeeting: '\uED8E',
            JoinOnlineMeeting: '\uED8F',
            RemoveLink: '\uED90',
            PeopleBlock: '\uED91',
            PeopleRepeat: '\uED92',
            PeopleAlert: '\uED93',
            PeoplePause: '\uED94',
            TransferCall: '\uED95',
            AddPhone: '\uED96',
            UnknownCall: '\uED97',
            NoteReply: '\uED98',
            NoteForward: '\uED99',
            NotePinned: '\uED9A',
            RemoveOccurrence: '\uED9B',
            Timeline: '\uED9C',
            EditNote: '\uED9D',
            CircleHalfFull: '\uED9E',
            Room: '\uED9F',
            Unsubscribe: '\uEDA0',
            Subscribe: '\uEDA1',
            HardDrive: '\uEDA2',
            RecurringTask: '\uEDB2',
            TaskManager: '\uEDB7',
            TaskManagerMirrored: '\uEDB8',
            Combine: '\uEDBB',
            Split: '\uEDBC',
            DoubleChevronUp: '\uEDBD',
            DoubleChevronLeft: '\uEDBE',
            DoubleChevronRight: '\uEDBF',
            TextBox: '\uEDC2',
            TextField: '\uEDC3',
            NumberField: '\uEDC4',
            Dropdown: '\uEDC5',
            BookingsLogo: '\uEDC7',
            ClassNotebookLogoInverse: '\uEDC8',
            DelveAnalyticsLogo: '\uEDCA',
            DocsLogoInverse: '\uEDCB',
            Dynamics365Logo: '\uEDCC',
            DynamicSMBLogo: '\uEDCD',
            OfficeAssistantLogo: '\uEDCE',
            OfficeStoreLogo: '\uEDCF',
            OneNoteEduLogoInverse: '\uEDD0',
            PlannerLogo: '\uEDD1',
            PowerApps: '\uEDD2',
            Suitcase: '\uEDD3',
            ProjectLogoInverse: '\uEDD4',
            CaretLeft8: '\uEDD5',
            CaretRight8: '\uEDD6',
            CaretUp8: '\uEDD7',
            CaretDown8: '\uEDD8'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-6.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-6.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-6\"",
            src: "url('" + baseUrl + "fabric-icons-6-3954c770.woff') format('woff')"
        },
        icons: {
            CaretLeftSolid8: '\uEDD9',
            CaretRightSolid8: '\uEDDA',
            CaretUpSolid8: '\uEDDB',
            CaretDownSolid8: '\uEDDC',
            ClearFormatting: '\uEDDD',
            Superscript: '\uEDDE',
            Subscript: '\uEDDF',
            Strikethrough: '\uEDE0',
            Export: '\uEDE1',
            ExportMirrored: '\uEDE2',
            SingleBookmark: '\uEDFF',
            SingleBookmarkSolid: '\uEE00',
            DoubleChevronDown: '\uEE04',
            FollowUser: '\uEE05',
            ReplyAll: '\uEE0A',
            WorkforceManagement: '\uEE0F',
            RecruitmentManagement: '\uEE12',
            Questionnaire: '\uEE19',
            ManagerSelfService: '\uEE23',
            ReplyMirrored: '\uEE35',
            ReplyAllMirrored: '\uEE36',
            Medal: '\uEE38',
            AddGroup: '\uEE3D',
            QuestionnaireMirrored: '\uEE4B',
            TemporaryUser: '\uEE58',
            CaretSolid16: '\uEE62',
            GroupedDescending: '\uEE66',
            GroupedAscending: '\uEE67',
            AwayStatus: '\uEE6A',
            MyMoviesTV: '\uEE6C',
            GenericScan: '\uEE6F',
            AustralianRules: '\uEE70',
            WifiEthernet: '\uEE77',
            TrackersMirrored: '\uEE92',
            DateTimeMirrored: '\uEE93',
            StopSolid: '\uEE95',
            DoubleChevronUp12: '\uEE96',
            DoubleChevronDown12: '\uEE97',
            DoubleChevronLeft12: '\uEE98',
            DoubleChevronRight12: '\uEE99',
            CalendarAgenda: '\uEE9A',
            AddEvent: '\uEEB5',
            AssetLibrary: '\uEEB6',
            DataConnectionLibrary: '\uEEB7',
            DocLibrary: '\uEEB8',
            FormLibrary: '\uEEB9',
            FormLibraryMirrored: '\uEEBA',
            ReportLibrary: '\uEEBB',
            ReportLibraryMirrored: '\uEEBC',
            ContactCard: '\uEEBD',
            CustomList: '\uEEBE',
            CustomListMirrored: '\uEEBF',
            IssueTracking: '\uEEC0',
            IssueTrackingMirrored: '\uEEC1',
            PictureLibrary: '\uEEC2',
            OfficeAddinsLogo: '\uEEC7',
            OfflineOneDriveParachute: '\uEEC8',
            OfflineOneDriveParachuteDisabled: '\uEEC9',
            TriangleSolidUp12: '\uEECC',
            TriangleSolidDown12: '\uEECD',
            TriangleSolidLeft12: '\uEECE',
            TriangleSolidRight12: '\uEECF',
            TriangleUp12: '\uEED0',
            TriangleDown12: '\uEED1',
            TriangleLeft12: '\uEED2',
            TriangleRight12: '\uEED3',
            ArrowUpRight8: '\uEED4',
            ArrowDownRight8: '\uEED5',
            DocumentSet: '\uEED6',
            DelveAnalytics: '\uEEEE',
            ArrowUpRightMirrored8: '\uEEEF',
            ArrowDownRightMirrored8: '\uEEF0',
            CompanyDirectory: '\uEF0D',
            CompanyDirectoryMirrored: '\uEF2B',
            OneDriveAdd: '\uEF32',
            ProfileSearch: '\uEF35',
            Header2: '\uEF36',
            Header3: '\uEF37',
            Header4: '\uEF38',
            Eyedropper: '\uEF3C',
            MarketDown: '\uEF42',
            CalendarWorkWeek: '\uEF51',
            SidePanel: '\uEF52',
            GlobeFavorite: '\uEF53',
            CaretTopLeftSolid8: '\uEF54',
            CaretTopRightSolid8: '\uEF55',
            ViewAll2: '\uEF56',
            DocumentReply: '\uEF57',
            PlayerSettings: '\uEF58',
            ReceiptForward: '\uEF59',
            ReceiptReply: '\uEF5A',
            ReceiptCheck: '\uEF5B',
            Fax: '\uEF5C',
            RecurringEvent: '\uEF5D',
            ReplyAlt: '\uEF5E',
            ReplyAllAlt: '\uEF5F',
            EditStyle: '\uEF60',
            EditMail: '\uEF61',
            Lifesaver: '\uEF62',
            LifesaverLock: '\uEF63'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-7.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-7.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-7\"",
            src: "url('" + baseUrl + "fabric-icons-7-02107cf8.woff') format('woff')"
        },
        icons: {
            InboxCheck: '\uEF64',
            FolderSearch: '\uEF65',
            CollapseMenu: '\uEF66',
            ExpandMenu: '\uEF67',
            Boards: '\uEF68',
            SunAdd: '\uEF69',
            SunQuestionMark: '\uEF6A',
            LandscapeOrientation: '\uEF6B',
            DocumentSearch: '\uEF6C',
            PublicCalendar: '\uEF6D',
            PublicContactCard: '\uEF6E',
            PublicEmail: '\uEF6F',
            PublicFolder: '\uEF70',
            WordDocument: '\uEF71',
            PowerPointDocument: '\uEF72',
            ExcelDocument: '\uEF73',
            GroupedList: '\uEF74',
            ClassroomLogo: '\uEF75',
            Sections: '\uEF76',
            EditPhoto: '\uEF77',
            Starburst: '\uEF78',
            ShareiOS: '\uEF79',
            AirTickets: '\uEF7A',
            PencilReply: '\uEF7B',
            Tiles2: '\uEF7C',
            SkypeCircleCheck: '\uEF7D',
            SkypeCircleClock: '\uEF7E',
            SkypeCircleMinus: '\uEF7F',
            SkypeMessage: '\uEF83',
            ClosedCaption: '\uEF84',
            ATPLogo: '\uEF85',
            OfficeFormsLogoInverse: '\uEF86',
            RecycleBin: '\uEF87',
            EmptyRecycleBin: '\uEF88',
            Hide2: '\uEF89',
            Breadcrumb: '\uEF8C',
            BirthdayCake: '\uEF8D',
            TimeEntry: '\uEF95',
            PageEdit: '\uEFB6',
            PageRemove: '\uEFBA',
            Database: '\uEFC7',
            EditContact: '\uEFD3',
            ConnectContacts: '\uEFD4',
            ActivateOrders: '\uEFE0',
            DeactivateOrders: '\uEFE1',
            DocumentManagement: '\uEFFC',
            CRMReport: '\uEFFE',
            ZipFolder: '\uF012',
            SurveyQuestions: '\uF01B',
            TextDocument: '\uF029',
            TextDocumentShared: '\uF02B',
            PageCheckedOut: '\uF02C',
            SaveAndClose: '\uF038',
            Script: '\uF03A',
            Archive: '\uF03F',
            ActivityFeed: '\uF056',
            EventDate: '\uF059',
            ArrowUpRight: '\uF069',
            CaretRight: '\uF06B',
            SetAction: '\uF071',
            CaretSolidLeft: '\uF08D',
            CaretSolidDown: '\uF08E',
            CaretSolidRight: '\uF08F',
            CaretSolidUp: '\uF090',
            PowerAppsLogo: '\uF091',
            PowerApps2Logo: '\uF092',
            SearchIssue: '\uF09A',
            SearchIssueMirrored: '\uF09B',
            FabricAssetLibrary: '\uF09C',
            FabricDataConnectionLibrary: '\uF09D',
            FabricDocLibrary: '\uF09E',
            FabricFormLibrary: '\uF09F',
            FabricFormLibraryMirrored: '\uF0A0',
            FabricReportLibrary: '\uF0A1',
            FabricReportLibraryMirrored: '\uF0A2',
            FabricPublicFolder: '\uF0A3',
            FabricFolderSearch: '\uF0A4',
            FabricMovetoFolder: '\uF0A5',
            FabricUnsyncFolder: '\uF0A6',
            FabricSyncFolder: '\uF0A7',
            FabricOpenFolderHorizontal: '\uF0A8',
            FabricFolder: '\uF0A9',
            FabricFolderFill: '\uF0AA',
            FabricNewFolder: '\uF0AB',
            FabricPictureLibrary: '\uF0AC',
            AddFavorite: '\uF0C8',
            AddFavoriteFill: '\uF0C9',
            BufferTimeBefore: '\uF0CF',
            BufferTimeAfter: '\uF0D0',
            BufferTimeBoth: '\uF0D1',
            CannedChat: '\uF0F2',
            SkypeForBusinessLogo: '\uF0FC',
            PageCheckedin: '\uF104',
            ReadOutLoud: '\uF112',
            CaretBottomLeftSolid8: '\uF121',
            CaretBottomRightSolid8: '\uF122',
            FolderHorizontal: '\uF12B',
            MicrosoftStaffhubLogo: '\uF130',
            GiftboxOpen: '\uF133',
            StatusCircleOuter: '\uF136'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-8.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-8.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-8\"",
            src: "url('" + baseUrl + "fabric-icons-8-645fa64e.woff') format('woff')"
        },
        icons: {
            StatusCircleInner: '\uF137',
            StatusCircleRing: '\uF138',
            StatusTriangleOuter: '\uF139',
            StatusTriangleInner: '\uF13A',
            StatusTriangleExclamation: '\uF13B',
            StatusCircleExclamation: '\uF13C',
            StatusCircleErrorX: '\uF13D',
            StatusCircleInfo: '\uF13F',
            StatusCircleBlock2: '\uF141',
            StatusCircleQuestionMark: '\uF142',
            Toll: '\uF160',
            ExploreContentSingle: '\uF164',
            CollapseContent: '\uF165',
            CollapseContentSingle: '\uF166',
            InfoSolid: '\uF167',
            ProgressRingDots: '\uF16A',
            CaloriesAdd: '\uF172',
            BranchFork: '\uF173',
            MobileReport: '\uF18A',
            HardDriveGroup: '\uF18F',
            FastMode: '\uF19A',
            ToggleOn: '\uF19E',
            ToggleOff: '\uF19F',
            Trophy2: '\uF1AE',
            BucketColor: '\uF1B6',
            BucketColorFill: '\uF1B7',
            Taskboard: '\uF1C2',
            SingleColumn: '\uF1D3',
            DoubleColumn: '\uF1D4',
            TripleColumn: '\uF1D5',
            ColumnLeftTwoThirds: '\uF1D6',
            ColumnRightTwoThirds: '\uF1D7',
            AccessLogoFill: '\uF1DB',
            AnalyticsLogo: '\uF1DE',
            AnalyticsQuery: '\uF1DF',
            NewAnalyticsQuery: '\uF1E0',
            AnalyticsReport: '\uF1E1',
            WordLogo: '\uF1E3',
            WordLogoFill: '\uF1E4',
            ExcelLogo: '\uF1E5',
            ExcelLogoFill: '\uF1E6',
            OneNoteLogo: '\uF1E7',
            OneNoteLogoFill: '\uF1E8',
            OutlookLogo: '\uF1E9',
            OutlookLogoFill: '\uF1EA',
            PowerPointLogo: '\uF1EB',
            PowerPointLogoFill: '\uF1EC',
            PublisherLogo: '\uF1ED',
            PublisherLogoFill: '\uF1EE',
            ScheduleEventAction: '\uF1EF',
            FlameSolid: '\uF1F3',
            ServerProcesses: '\uF1FE',
            Server: '\uF201',
            SaveAll: '\uF203',
            LinkedInLogo: '\uF20A',
            Decimals: '\uF218',
            SidePanelMirrored: '\uF221',
            ProtectRestrict: '\uF22A',
            UnknownMirrored: '\uF22E',
            PublicContactCardMirrored: '\uF230',
            GridViewSmall: '\uF232',
            GridViewMedium: '\uF233',
            GridViewLarge: '\uF234',
            Step: '\uF241',
            StepInsert: '\uF242',
            StepShared: '\uF243',
            StepSharedAdd: '\uF244',
            StepSharedInsert: '\uF245',
            ViewDashboard: '\uF246',
            ViewList: '\uF247',
            ViewListGroup: '\uF248',
            ViewListTree: '\uF249',
            TriggerAuto: '\uF24A',
            TriggerUser: '\uF24B',
            PivotChart: '\uF24C',
            StackedBarChart: '\uF24D',
            StackedLineChart: '\uF24E',
            BuildQueue: '\uF24F',
            BuildQueueNew: '\uF250',
            UserFollowed: '\uF25C',
            ContactLink: '\uF25F',
            Stack: '\uF26F',
            Bullseye: '\uF272',
            VennDiagram: '\uF273',
            FiveTileGrid: '\uF274',
            FocalPoint: '\uF277',
            RingerRemove: '\uF279',
            TeamsLogoInverse: '\uF27A',
            TeamsLogo: '\uF27B',
            TeamsLogoFill: '\uF27C',
            SkypeForBusinessLogoFill: '\uF27D',
            SharepointLogo: '\uF27E',
            SharepointLogoFill: '\uF27F',
            DelveLogo: '\uF280',
            DelveLogoFill: '\uF281',
            OfficeVideoLogo: '\uF282',
            OfficeVideoLogoFill: '\uF283',
            ExchangeLogo: '\uF284',
            ExchangeLogoFill: '\uF285',
            DocumentApproval: '\uF28B'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons-9.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons-9.js ***!
  \************************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-9\"",
            src: "url('" + baseUrl + "fabric-icons-9-53746c82.woff') format('woff')"
        },
        icons: {
            CloneToDesktop: '\uF28C',
            InstallToDrive: '\uF28D',
            Blur: '\uF28E',
            Build: '\uF28F',
            ProcessMetaTask: '\uF290',
            BranchFork2: '\uF291',
            BranchLocked: '\uF292',
            BranchCommit: '\uF293',
            BranchCompare: '\uF294',
            BranchMerge: '\uF295',
            BranchPullRequest: '\uF296',
            BranchSearch: '\uF297',
            BranchShelveset: '\uF298',
            RawSource: '\uF299',
            MergeDuplicate: '\uF29A',
            RowsGroup: '\uF29B',
            RowsChild: '\uF29C',
            Deploy: '\uF29D',
            Redeploy: '\uF29E',
            ServerEnviroment: '\uF29F',
            VisioDiagram: '\uF2A0',
            HighlightMappedShapes: '\uF2A1',
            TextCallout: '\uF2A2',
            IconSetsFlag: '\uF2A4',
            VisioLogo: '\uF2A7',
            VisioLogoFill: '\uF2A8',
            VisioDocument: '\uF2A9',
            TimelineProgress: '\uF2AA',
            TimelineDelivery: '\uF2AB',
            Backlog: '\uF2AC',
            TeamFavorite: '\uF2AD',
            TaskGroup: '\uF2AE',
            TaskGroupMirrored: '\uF2AF',
            ScopeTemplate: '\uF2B0',
            AssessmentGroupTemplate: '\uF2B1',
            NewTeamProject: '\uF2B2',
            CommentAdd: '\uF2B3',
            CommentNext: '\uF2B4',
            CommentPrevious: '\uF2B5',
            ShopServer: '\uF2B6',
            LocaleLanguage: '\uF2B7',
            QueryList: '\uF2B8',
            UserSync: '\uF2B9',
            UserPause: '\uF2BA',
            StreamingOff: '\uF2BB',
            ArrowTallUpLeft: '\uF2BD',
            ArrowTallUpRight: '\uF2BE',
            ArrowTallDownLeft: '\uF2BF',
            ArrowTallDownRight: '\uF2C0',
            FieldEmpty: '\uF2C1',
            FieldFilled: '\uF2C2',
            FieldChanged: '\uF2C3',
            FieldNotChanged: '\uF2C4',
            RingerOff: '\uF2C5',
            PlayResume: '\uF2C6',
            BulletedList2: '\uF2C7',
            BulletedList2Mirrored: '\uF2C8',
            ImageCrosshair: '\uF2C9',
            GitGraph: '\uF2CA',
            Repo: '\uF2CB',
            RepoSolid: '\uF2CC',
            FolderQuery: '\uF2CD',
            FolderList: '\uF2CE',
            FolderListMirrored: '\uF2CF',
            LocationOutline: '\uF2D0',
            POISolid: '\uF2D1',
            CalculatorNotEqualTo: '\uF2D2',
            BoxSubtractSolid: '\uF2D3',
            BoxAdditionSolid: '\uF2D4',
            BoxMultiplySolid: '\uF2D5',
            BoxPlaySolid: '\uF2D6',
            BoxCheckmarkSolid: '\uF2D7',
            CirclePauseSolid: '\uF2D8',
            CirclePause: '\uF2D9',
            MSNVideosSolid: '\uF2DA',
            CircleStopSolid: '\uF2DB',
            CircleStop: '\uF2DC',
            NavigateBack: '\uF2DD',
            NavigateBackMirrored: '\uF2DE',
            NavigateForward: '\uF2DF',
            NavigateForwardMirrored: '\uF2E0',
            UnknownSolid: '\uF2E1',
            UnknownMirroredSolid: '\uF2E2',
            CircleAddition: '\uF2E3',
            CircleAdditionSolid: '\uF2E4',
            FilePDB: '\uF2E5',
            FileTemplate: '\uF2E6',
            FileSQL: '\uF2E7',
            FileJAVA: '\uF2E8',
            FileASPX: '\uF2E9',
            FileCSS: '\uF2EA',
            FileSass: '\uF2EB',
            FileLess: '\uF2EC',
            FileHTML: '\uF2ED',
            JavaScriptLanguage: '\uF2EE',
            CSharpLanguage: '\uF2EF',
            CSharp: '\uF2F0',
            VisualBasicLanguage: '\uF2F1',
            VB: '\uF2F2',
            CPlusPlusLanguage: '\uF2F3'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/fabric-icons.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/fabric-icons.js ***!
  \**********************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license
// tslint:disable:max-line-length

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons\"",
            src: "url('" + baseUrl + "fabric-icons-a13498cf.woff') format('woff')"
        },
        icons: {
            GlobalNavButton: '\uE700',
            ChevronDown: '\uE70D',
            ChevronUp: '\uE70E',
            Edit: '\uE70F',
            Add: '\uE710',
            Cancel: '\uE711',
            More: '\uE712',
            Settings: '\uE713',
            Mail: '\uE715',
            Filter: '\uE71C',
            Search: '\uE721',
            Share: '\uE72D',
            BlockedSite: '\uE72F',
            FavoriteStar: '\uE734',
            FavoriteStarFill: '\uE735',
            CheckMark: '\uE73E',
            Delete: '\uE74D',
            ChevronLeft: '\uE76B',
            ChevronRight: '\uE76C',
            Calendar: '\uE787',
            Megaphone: '\uE789',
            Undo: '\uE7A7',
            Flag: '\uE7C1',
            Page: '\uE7C3',
            Pinned: '\uE840',
            View: '\uE890',
            Clear: '\uE894',
            Download: '\uE896',
            Upload: '\uE898',
            Folder: '\uE8B7',
            Sort: '\uE8CB',
            AlignRight: '\uE8E2',
            AlignLeft: '\uE8E4',
            Tag: '\uE8EC',
            AddFriend: '\uE8FA',
            Info: '\uE946',
            SortLines: '\uE9D0',
            List: '\uEA37',
            CircleRing: '\uEA3A',
            Heart: '\uEB51',
            HeartFill: '\uEB52',
            Tiles: '\uECA5',
            Embed: '\uECCE',
            Glimmer: '\uECF4',
            Ascending: '\uEDC0',
            Descending: '\uEDC1',
            SortUp: '\uEE68',
            SortDown: '\uEE69',
            SyncToPC: '\uEE6E',
            LargeGrid: '\uEECB',
            SkypeCheck: '\uEF80',
            SkypeClock: '\uEF81',
            SkypeMinus: '\uEF82',
            ClearFilter: '\uEF8F',
            Flow: '\uEF90',
            StatusCircleCheckmark: '\uF13E',
            MoreVertical: '\uF2BC'
        }
    };
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"])(subset, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/iconAliases.js":
/*!*********************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/iconAliases.js ***!
  \*********************************************************/
/*! exports provided: registerIconAliases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIconAliases", function() { return registerIconAliases; });
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");

var registerIconAliases = function () {
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('trash', 'delete');
    Object(_uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"])('onedrive', 'onedrivelogo');
};


/***/ }),

/***/ "./node_modules/@uifabric/icons/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@uifabric/icons/lib/index.js ***!
  \***************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return initializeIcons; });
/* harmony import */ var _fabric_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fabric-icons */ "./node_modules/@uifabric/icons/lib/fabric-icons.js");
/* harmony import */ var _fabric_icons_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fabric-icons-0 */ "./node_modules/@uifabric/icons/lib/fabric-icons-0.js");
/* harmony import */ var _fabric_icons_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fabric-icons-1 */ "./node_modules/@uifabric/icons/lib/fabric-icons-1.js");
/* harmony import */ var _fabric_icons_10__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fabric-icons-10 */ "./node_modules/@uifabric/icons/lib/fabric-icons-10.js");
/* harmony import */ var _fabric_icons_11__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fabric-icons-11 */ "./node_modules/@uifabric/icons/lib/fabric-icons-11.js");
/* harmony import */ var _fabric_icons_12__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fabric-icons-12 */ "./node_modules/@uifabric/icons/lib/fabric-icons-12.js");
/* harmony import */ var _fabric_icons_13__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fabric-icons-13 */ "./node_modules/@uifabric/icons/lib/fabric-icons-13.js");
/* harmony import */ var _fabric_icons_14__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fabric-icons-14 */ "./node_modules/@uifabric/icons/lib/fabric-icons-14.js");
/* harmony import */ var _fabric_icons_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fabric-icons-2 */ "./node_modules/@uifabric/icons/lib/fabric-icons-2.js");
/* harmony import */ var _fabric_icons_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fabric-icons-3 */ "./node_modules/@uifabric/icons/lib/fabric-icons-3.js");
/* harmony import */ var _fabric_icons_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fabric-icons-4 */ "./node_modules/@uifabric/icons/lib/fabric-icons-4.js");
/* harmony import */ var _fabric_icons_5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fabric-icons-5 */ "./node_modules/@uifabric/icons/lib/fabric-icons-5.js");
/* harmony import */ var _fabric_icons_6__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fabric-icons-6 */ "./node_modules/@uifabric/icons/lib/fabric-icons-6.js");
/* harmony import */ var _fabric_icons_7__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fabric-icons-7 */ "./node_modules/@uifabric/icons/lib/fabric-icons-7.js");
/* harmony import */ var _fabric_icons_8__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fabric-icons-8 */ "./node_modules/@uifabric/icons/lib/fabric-icons-8.js");
/* harmony import */ var _fabric_icons_9__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fabric-icons-9 */ "./node_modules/@uifabric/icons/lib/fabric-icons-9.js");
/* harmony import */ var _iconAliases__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./iconAliases */ "./node_modules/@uifabric/icons/lib/iconAliases.js");

















var DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = DEFAULT_BASE_URL; }
    [_fabric_icons__WEBPACK_IMPORTED_MODULE_0__["initializeIcons"], _fabric_icons_0__WEBPACK_IMPORTED_MODULE_1__["initializeIcons"], _fabric_icons_1__WEBPACK_IMPORTED_MODULE_2__["initializeIcons"], _fabric_icons_2__WEBPACK_IMPORTED_MODULE_8__["initializeIcons"], _fabric_icons_3__WEBPACK_IMPORTED_MODULE_9__["initializeIcons"], _fabric_icons_4__WEBPACK_IMPORTED_MODULE_10__["initializeIcons"], _fabric_icons_5__WEBPACK_IMPORTED_MODULE_11__["initializeIcons"], _fabric_icons_6__WEBPACK_IMPORTED_MODULE_12__["initializeIcons"], _fabric_icons_7__WEBPACK_IMPORTED_MODULE_13__["initializeIcons"], _fabric_icons_8__WEBPACK_IMPORTED_MODULE_14__["initializeIcons"], _fabric_icons_9__WEBPACK_IMPORTED_MODULE_15__["initializeIcons"], _fabric_icons_10__WEBPACK_IMPORTED_MODULE_3__["initializeIcons"], _fabric_icons_11__WEBPACK_IMPORTED_MODULE_4__["initializeIcons"], _fabric_icons_12__WEBPACK_IMPORTED_MODULE_5__["initializeIcons"], _fabric_icons_13__WEBPACK_IMPORTED_MODULE_6__["initializeIcons"], _fabric_icons_14__WEBPACK_IMPORTED_MODULE_7__["initializeIcons"]].forEach(function (initialize) { return initialize(baseUrl, options); });
    Object(_iconAliases__WEBPACK_IMPORTED_MODULE_16__["registerIconAliases"])();
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/Stylesheet.js ***!
  \***************************************************************/
/*! exports provided: InjectionMode, Stylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return InjectionMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return Stylesheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/**
 * Injection mode for the stylesheet.
 *
 * @public
 */
var InjectionMode;
(function (InjectionMode) {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    InjectionMode[InjectionMode["none"] = 0] = "none";
    /**
     * Inserts rules using the insertRule api.
     */
    InjectionMode[InjectionMode["insertNode"] = 1] = "insertNode";
    /**
     * Appends rules using appendChild.
     */
    InjectionMode[InjectionMode["appendChild"] = 2] = "appendChild";
})(InjectionMode || (InjectionMode = {}));
var STYLESHEET_SETTING = '__stylesheet__';
// tslint:disable-next-line:no-any
var _fileScopedGlobal = {};
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        // tslint:disable-next-line:no-any
        this._classNameToArgs = {};
        this._config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ injectionMode: 1 /* insertNode */, defaultPrefix: 'css', namespace: undefined }, config);
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var global = typeof window !== 'undefined' ? window : typeof process !== 'undefined' ? process : _fileScopedGlobal;
        _stylesheet = global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            // tslint:disable-next-line:no-string-literal
            var fabricConfig = (global && global['FabricConfig']) || {};
            _stylesheet = global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._config, config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== 0 /* none */ ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case 1 /* insertNode */:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case 2 /* appendChild */:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return ((includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join(''));
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            // Reset the style element on the next frame.
            window.requestAnimationFrame(function () {
                _this._styleElement = undefined;
            });
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        styleElement.type = 'text/css';
        if (this._lastStyleElement && this._lastStyleElement.nextElementSibling) {
            document.head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            document.head.appendChild(styleElement);
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    return Stylesheet;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js */ "../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/concatStyleSets.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/concatStyleSets.js ***!
  \********************************************************************/
/*! exports provided: concatStyleSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return concatStyleSets; });
/**
 * Combine a set of styles together (but does not register css classes.)
 * @public
 */
function concatStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var mergedSet = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var currentSet = args_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    return mergedSet;
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/extractStyleParts.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/extractStyleParts.js ***!
  \**********************************************************************/
/*! exports provided: extractStyleParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractStyleParts", function() { return extractStyleParts; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js");

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/fontFace.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/fontFace.js ***!
  \*************************************************************/
/*! exports provided: fontFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleToClassName */ "./node_modules/@uifabric/merge-styles/lib/styleToClassName.js");


/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().insertRule("@font-face{" + Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_1__["serializeRuleEntries"])(font) + "}", true);
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/getVendorSettings.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/getVendorSettings.js ***!
  \**********************************************************************/
/*! exports provided: getVendorSettings, setVendorSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorSettings", function() { return getVendorSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVendorSettings", function() { return setVendorSettings; });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/index.js ***!
  \**********************************************************/
/*! exports provided: mergeStyles, mergeStyleSets, concatStyleSets, fontFace, keyframes, InjectionMode, Stylesheet, setRTL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeStyles */ "./node_modules/@uifabric/merge-styles/lib/mergeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _mergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });

/* harmony import */ var _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeStyleSets */ "./node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _mergeStyleSets__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"]; });

/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concatStyleSets */ "./node_modules/@uifabric/merge-styles/lib/concatStyleSets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _concatStyleSets__WEBPACK_IMPORTED_MODULE_2__["concatStyleSets"]; });

/* harmony import */ var _fontFace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fontFace */ "./node_modules/@uifabric/merge-styles/lib/fontFace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _fontFace__WEBPACK_IMPORTED_MODULE_3__["fontFace"]; });

/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyframes */ "./node_modules/@uifabric/merge-styles/lib/keyframes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _keyframes__WEBPACK_IMPORTED_MODULE_4__["keyframes"]; });

/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Stylesheet */ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_5__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _Stylesheet__WEBPACK_IMPORTED_MODULE_5__["Stylesheet"]; });

/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms/rtlifyRules */ "./node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_6__["setRTL"]; });










/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/keyframes.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/keyframes.js ***!
  \**************************************************************/
/*! exports provided: keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleToClassName */ "./node_modules/@uifabric/merge-styles/lib/styleToClassName.js");


/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_1__["serializeRuleEntries"])(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/mergeStyleSets.js ***!
  \*******************************************************************/
/*! exports provided: mergeStyleSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return mergeStyleSets; });
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractStyleParts */ "./node_modules/@uifabric/merge-styles/lib/extractStyleParts.js");
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./concatStyleSets */ "./node_modules/@uifabric/merge-styles/lib/concatStyleSets.js");
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleToClassName */ "./node_modules/@uifabric/merge-styles/lib/styleToClassName.js");



/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
function mergeStyleSets() {
    var cssSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssSets[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var classNameSet = {};
    var classMap = {};
    var cssSet = cssSets[0];
    if (cssSet) {
        if (cssSets.length > 1) {
            cssSet = _concatStyleSets__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"].apply(void 0, cssSets);
        }
        var registrations = [];
        for (var prop in cssSet) {
            if (cssSet.hasOwnProperty(prop)) {
                var args = cssSet[prop];
                // tslint:disable-next-line:no-any
                var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_0__["extractStyleParts"])(args), classes = _a.classes, objects = _a.objects;
                var registration = Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["styleToRegistration"])({ displayName: prop }, objects);
                registrations.push(registration);
                if (registration) {
                    classMap[prop] = registration.className;
                    classNameSet[prop] = classes.concat([registration.className]).join(' ');
                }
            }
        }
        for (var _b = 0, registrations_1 = registrations; _b < registrations_1.length; _b++) {
            var registration = registrations_1[_b];
            if (registration) {
                Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_2__["applyRegistration"])(registration, classMap);
            }
        }
    }
    return classNameSet;
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/mergeStyles.js":
/*!****************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/mergeStyles.js ***!
  \****************************************************************/
/*! exports provided: mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return mergeStyles; });
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleToClassName */ "./node_modules/@uifabric/merge-styles/lib/styleToClassName.js");
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extractStyleParts */ "./node_modules/@uifabric/merge-styles/lib/extractStyleParts.js");


/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = Object(_extractStyleParts__WEBPACK_IMPORTED_MODULE_1__["extractStyleParts"])(args), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push(Object(_styleToClassName__WEBPACK_IMPORTED_MODULE_0__["styleToClassName"])(objects));
    }
    return classes.join(' ');
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/styleToClassName.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/styleToClassName.js ***!
  \*********************************************************************/
/*! exports provided: serializeRuleEntries, styleToRegistration, applyRegistration, styleToClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRuleEntries", function() { return serializeRuleEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToRegistration", function() { return styleToRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyRegistration", function() { return applyRegistration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleToClassName", function() { return styleToClassName; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stylesheet */ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js");
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transforms/kebabRules */ "./node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js");
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transforms/prefixRules */ "./node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js");
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transforms/provideUnits */ "./node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js");
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transforms/rtlifyRules */ "./node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js");





var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf(':global(') === 0) {
                                newSelector = newSelector.replace(/:global\(|\)$/g, '');
                            }
                            else if (newSelector.indexOf('@media') === 0) {
                                newSelector = newSelector + '{' + currentSelector;
                            }
                            else if (newSelector.indexOf(':') === 0) {
                                newSelector = currentSelector + newSelector;
                            }
                            else if (newSelector.indexOf('&') < 0) {
                                newSelector = currentSelector + ' ' + newSelector;
                            }
                            extractRules([selectorValue], rules, newSelector);
                        }
                    }
                }
                else {
                    // Else, add the rule to the currentSelector.
                    if (prop === 'margin' || prop === 'padding') {
                        // tslint:disable-next-line:no-any
                        expandQuads(currentRules, prop, arg[prop]);
                    }
                    else {
                        // tslint:disable-next-line:no-any
                        currentRules[prop] = arg[prop];
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        Object(_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_1__["kebabRules"])(allEntries, i);
        Object(_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_3__["provideUnits"])(allEntries, i);
        Object(_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_4__["rtlifyRules"])(allEntries, i);
        Object(_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_2__["prefixRules"])(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    if (key) {
        var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
}
function applyRegistration(registration, classMap) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                // Fix selector using map.
                selector = selector.replace(/(&)|\$([\w-]+)\b/g, function (match, amp, cn) {
                    if (amp) {
                        return '.' + registration.className;
                    }
                    else if (cn) {
                        return '.' + ((classMap && classMap[cn]) || cn);
                    }
                    return '';
                });
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@media') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, args);
    if (registration) {
        applyRegistration(registration);
        return registration.className;
    }
    return '';
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/transforms/kebabRules.js ***!
  \**************************************************************************/
/*! exports provided: kebabRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebabRules", function() { return kebabRules; });
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/transforms/prefixRules.js ***!
  \***************************************************************************/
/*! exports provided: prefixRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixRules", function() { return prefixRules; });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getVendorSettings */ "./node_modules/@uifabric/merge-styles/lib/getVendorSettings.js");

var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = Object(_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__["getVendorSettings"])();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/transforms/provideUnits.js ***!
  \****************************************************************************/
/*! exports provided: provideUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideUnits", function() { return provideUnits; });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var unit = NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1 ? 'px' : '';
        rulePairs[index + 1] = "" + value + unit;
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@uifabric/merge-styles/lib/transforms/rtlifyRules.js ***!
  \***************************************************************************/
/*! exports provided: setRTL, getRTL, rtlifyRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtlifyRules", function() { return rtlifyRules; });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Stylesheet */ "./node_modules/@uifabric/merge-styles/lib/Stylesheet.js");

var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var _rtl = getRTL();
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _Stylesheet__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().resetKeys();
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            typeof document !== 'undefined' &&
                !!document.documentElement &&
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
var _a;


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/MergeStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/MergeStyles.js ***!
  \***********************************************************/
/*! exports provided: InjectionMode, Stylesheet, concatStyleSets, fontFace, keyframes, mergeStyleSets, mergeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });




/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js ***!
  \******************************************************************************/
/*! exports provided: AnimationClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return AnimationClassNames; });
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index */ "./node_modules/@uifabric/styling/lib/utilities/index.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index */ "./node_modules/@uifabric/styling/lib/styles/index.js");


var AnimationClassNames = Object(_utilities_index__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"])(_styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]);


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js ***!
  \**************************************************************************/
/*! exports provided: ColorClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return ColorClassNames; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/DefaultPalette */ "./node_modules/@uifabric/styling/lib/styles/DefaultPalette.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index */ "./node_modules/@uifabric/styling/lib/styles/index.js");



var ColorClassNames = {};
for (var colorName in _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]) {
    if (_styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"].hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = Object(_styles_index__WEBPACK_IMPORTED_MODULE_2__["getTheme"])().palette[colorName], _a);
            return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/classNames/FontClassNames.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/classNames/FontClassNames.js ***!
  \*************************************************************************/
/*! exports provided: FontClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return FontClassNames; });
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/index */ "./node_modules/@uifabric/styling/lib/utilities/index.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index */ "./node_modules/@uifabric/styling/lib/styles/index.js");


var FontClassNames = Object(_utilities_index__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"])(_styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]);


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/classNames/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/classNames/index.js ***!
  \****************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationClassNames */ "./node_modules/@uifabric/styling/lib/classNames/AnimationClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony import */ var _FontClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontClassNames */ "./node_modules/@uifabric/styling/lib/classNames/FontClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _FontClassNames__WEBPACK_IMPORTED_MODULE_1__["FontClassNames"]; });

/* harmony import */ var _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorClassNames */ "./node_modules/@uifabric/styling/lib/classNames/ColorClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__["ColorClassNames"]; });






/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/index.js ***!
  \*****************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, buildClassMap, getIcon, registerIcons, registerIconAlias, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, fontFace, keyframes, mergeStyleSets, mergeStyles, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, getScreenSelector, normalize, noWrap, ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classNames_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classNames/index */ "./node_modules/@uifabric/styling/lib/classNames/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["FontClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _classNames_index__WEBPACK_IMPORTED_MODULE_0__["ColorClassNames"]; });

/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index */ "./node_modules/@uifabric/styling/lib/styles/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["registerDefaultFontFaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["PulsingBeaconAnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["removeOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["noWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _styles_index__WEBPACK_IMPORTED_MODULE_1__["ZIndexes"]; });

/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/index */ "./node_modules/@uifabric/styling/lib/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["buildClassMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["setIconOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _utilities_index__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"]; });

/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MergeStyles */ "./node_modules/@uifabric/styling/lib/MergeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _MergeStyles__WEBPACK_IMPORTED_MODULE_3__["mergeStyles"]; });







/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/AnimationStyles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/AnimationStyles.js ***!
  \**********************************************************************/
/*! exports provided: AnimationVariables, AnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return AnimationVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return AnimationStyles; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' }
});
var SCALE_DOWN100 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["keyframes"])({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/CommonStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/CommonStyles.js ***!
  \*******************************************************************/
/*! exports provided: HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, getScreenSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return HighContrastSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return HighContrastSelectorWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return HighContrastSelectorBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return ScreenWidthMinSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return ScreenWidthMinMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return ScreenWidthMinLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return ScreenWidthMinXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return ScreenWidthMinXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return ScreenWidthMinXXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return ScreenWidthMaxSmall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return ScreenWidthMaxMedium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return ScreenWidthMaxLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return ScreenWidthMaxXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return ScreenWidthMaxXXLarge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return getScreenSelector; });
var HighContrastSelector = '@media screen and (-ms-high-contrast: active)';
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
function getScreenSelector(min, max) {
    return "@media only screen and (min-width: " + min + "px) and (max-width: " + max + "px)";
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js":
/*!************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js ***!
  \************************************************************************/
/*! exports provided: DefaultFontStyles, registerDefaultFontFaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return DefaultFontStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return registerDefaultFontFaces; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts */ "./node_modules/@uifabric/styling/lib/styles/fonts.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/utilities */ "./node_modules/@uifabric/utilities/lib/index.js");



// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = Object(_fonts__WEBPACK_IMPORTED_MODULE_1__["createFontStyles"])(Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_2__["getLanguage"])());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["fontFace"])({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold, localFontName && localFontName + ' SemiBold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontNames"].WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _fonts__WEBPACK_IMPORTED_MODULE_1__["LocalizedFontFamilies"].Selawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", _fonts__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return fabricConfig && fabricConfig.fontBaseUrl !== undefined ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/DefaultPalette.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/DefaultPalette.js ***!
  \*********************************************************************/
/*! exports provided: DefaultPalette */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return DefaultPalette; });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralSecondaryAlt: '#767676',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a'
};


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/GeneralStyles.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/GeneralStyles.js ***!
  \********************************************************************/
/*! exports provided: normalize, noWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return noWrap; });
// This file mimics styles and mixins from _General.Mixins.scss
var normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
};
var noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
};


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js ***!
  \***********************************************************************************/
/*! exports provided: PulsingBeaconAnimationStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return PulsingBeaconAnimationStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");


var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _continuousPulseStepOne(beaconColorOne, innerDimension), {
        opacity: 0
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["keyframes"])({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {}
    });
}
function _createDefaultAnimation(animationName) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: DEFAULT_DELAY
    };
}
var PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation
};


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/fonts.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/fonts.js ***!
  \************************************************************/
/*! exports provided: LocalizedFontNames, LocalizedFontFamilies, FontSizes, FontWeights, IconFontSizes, createFontStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontNames", function() { return LocalizedFontNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedFontFamilies", function() { return LocalizedFontFamilies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return FontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return FontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return IconFontSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return createFontStyles; });
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: LocalizedFontFamilies.Arabic,
    bg: LocalizedFontFamilies.Cyrillic,
    cs: LocalizedFontFamilies.EastEuropean,
    el: LocalizedFontFamilies.Greek,
    et: LocalizedFontFamilies.EastEuropean,
    he: LocalizedFontFamilies.Hebrew,
    hi: LocalizedFontFamilies.Hindi,
    hr: LocalizedFontFamilies.EastEuropean,
    hu: LocalizedFontFamilies.EastEuropean,
    ja: LocalizedFontFamilies.Japanese,
    kk: LocalizedFontFamilies.EastEuropean,
    ko: LocalizedFontFamilies.Korean,
    lt: LocalizedFontFamilies.EastEuropean,
    lv: LocalizedFontFamilies.EastEuropean,
    pl: LocalizedFontFamilies.EastEuropean,
    ru: LocalizedFontFamilies.Cyrillic,
    sk: LocalizedFontFamilies.EastEuropean,
    'sr-latn': LocalizedFontFamilies.EastEuropean,
    th: LocalizedFontFamilies.Thai,
    tr: LocalizedFontFamilies.EastEuropean,
    uk: LocalizedFontFamilies.Cyrillic,
    vi: LocalizedFontFamilies.Vietnamese,
    'zh-hans': LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': LocalizedFontFamilies.ChineseTraditional
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var semilightFontFamilyWithFallback = fontFamilyWithFallback;
    // Chrome has a bug where it does not render Segoe UI Semilight correctly, so we force the webfont to be used in that case
    if (localizedFont === defaultFontFamily) {
        semilightFontFamilyWithFallback = _fontFamilyWithFallbacks(LocalizedFontFamilies.WestEuropean);
    }
    var fontStyles = {
        tiny: _createFont(FontSizes.mini, FontWeights.semibold, fontFamilyWithFallback),
        xSmall: _createFont(FontSizes.xSmall, FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(FontSizes.small, FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(FontSizes.medium, FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(FontSizes.large, FontWeights.semilight, semilightFontFamilyWithFallback),
        xLarge: _createFont(FontSizes.xLarge, FontWeights.light, fontFamilyWithFallback),
        xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light, fontFamilyWithFallback),
        superLarge: _createFont(FontSizes.superLarge, FontWeights.light, fontFamilyWithFallback),
        mega: _createFont(FontSizes.mega, FontWeights.light, fontFamilyWithFallback)
    };
    return fontStyles;
}
/**
 * If there is a localized font for this language, return that. Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/getFocusStyle.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/getFocusStyle.js ***!
  \********************************************************************/
/*! exports provided: getFocusStyle, focusClear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return getFocusStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return focusClear; });
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonStyles */ "./node_modules/@uifabric/styling/lib/styles/CommonStyles.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "./node_modules/@uifabric/utilities/lib/index.js");
/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zIndexes */ "./node_modules/@uifabric/styling/lib/styles/zIndexes.js");



/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @param highContrastStyle - Style for high contrast mode.
 * @param borderColor - Color of the border.
 * @param outlineColor - Color of the outline.
 * @param isFocusedOnly - If the styles should apply on focus or not.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (inset === void 0) { inset = 0; }
    if (position === void 0) { position = 'relative'; }
    if (highContrastStyle === void 0) { highContrastStyle = undefined; }
    if (borderColor === void 0) { borderColor = theme.palette.white; }
    if (outlineColor === void 0) { outlineColor = theme.palette.neutralSecondary; }
    if (isFocusedOnly === void 0) { isFocusedOnly = true; }
    return {
        outline: 'transparent',
        position: position,
        selectors: (_a = {
                '::-moz-focus-inner': {
                    border: '0'
                }
            },
            _a["." + _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["IsFocusVisibleClassName"] + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: '1px solid ' + borderColor,
                outline: '1px solid ' + outlineColor,
                zIndex: _zIndexes__WEBPACK_IMPORTED_MODULE_2__["ZIndexes"].FocusStyle,
                selectors: (_b = {},
                    _b[_CommonStyles__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = highContrastStyle,
                    _b)
            },
            _a)
    };
    var _a, _b;
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent'
            }
        }
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js ***!
  \**************************************************************************/
/*! exports provided: getGlobalClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return getGlobalClassNames; });
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 *
 * @param theme The theme to check the flag on
 * @param classNames The global class names that apply when the flag is false
 */
function getGlobalClassNames(classNames, theme) {
    if (theme.disableGlobalClassNames) {
        return {};
    }
    return classNames;
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js ***!
  \*************************************************************************/
/*! exports provided: hiddenContentStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return hiddenContentStyle; });
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/index.js ***!
  \************************************************************/
/*! exports provided: AnimationStyles, AnimationVariables, DefaultPalette, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, getScreenSelector, normalize, noWrap, ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationStyles */ "./node_modules/@uifabric/styling/lib/styles/AnimationStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"]; });

/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultPalette */ "./node_modules/@uifabric/styling/lib/styles/DefaultPalette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__["DefaultPalette"]; });

/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFontStyles */ "./node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["registerDefaultFontFaces"]; });

/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ "./node_modules/@uifabric/styling/lib/styles/fonts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _fonts__WEBPACK_IMPORTED_MODULE_3__["createFontStyles"]; });

/* harmony import */ var _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getFocusStyle */ "./node_modules/@uifabric/styling/lib/styles/getFocusStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _getFocusStyle__WEBPACK_IMPORTED_MODULE_4__["focusClear"]; });

/* harmony import */ var _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hiddenContentStyle */ "./node_modules/@uifabric/styling/lib/styles/hiddenContentStyle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_5__["hiddenContentStyle"]; });

/* harmony import */ var _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PulsingBeaconAnimationStyles */ "./node_modules/@uifabric/styling/lib/styles/PulsingBeaconAnimationStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_6__["PulsingBeaconAnimationStyles"]; });

/* harmony import */ var _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getGlobalClassNames */ "./node_modules/@uifabric/styling/lib/styles/getGlobalClassNames.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_7__["getGlobalClassNames"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme */ "./node_modules/@uifabric/styling/lib/styles/theme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _theme__WEBPACK_IMPORTED_MODULE_8__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_8__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_8__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _theme__WEBPACK_IMPORTED_MODULE_8__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _theme__WEBPACK_IMPORTED_MODULE_8__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _theme__WEBPACK_IMPORTED_MODULE_8__["removeOnThemeChangeCallback"]; });

/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommonStyles */ "./node_modules/@uifabric/styling/lib/styles/CommonStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _CommonStyles__WEBPACK_IMPORTED_MODULE_9__["getScreenSelector"]; });

/* harmony import */ var _GeneralStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GeneralStyles */ "./node_modules/@uifabric/styling/lib/styles/GeneralStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _GeneralStyles__WEBPACK_IMPORTED_MODULE_10__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _GeneralStyles__WEBPACK_IMPORTED_MODULE_10__["noWrap"]; });

/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zIndexes */ "./node_modules/@uifabric/styling/lib/styles/zIndexes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _zIndexes__WEBPACK_IMPORTED_MODULE_11__["ZIndexes"]; });















/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/theme.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/theme.js ***!
  \************************************************************/
/*! exports provided: ThemeSettingName, getTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, loadTheme, createTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return ThemeSettingName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return registerOnThemeChangeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return removeOnThemeChangeCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return loadTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return createTheme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "./node_modules/@uifabric/utilities/lib/index.js");
/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultFontStyles */ "./node_modules/@uifabric/styling/lib/styles/DefaultFontStyles.js");
/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultPalette */ "./node_modules/@uifabric/styling/lib/styles/DefaultPalette.js");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/load-themed-styles */ "./node_modules/@microsoft/load-themed-styles/lib/index.js");
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_4__);





var _theme = {
    palette: _DefaultPalette__WEBPACK_IMPORTED_MODULE_3__["DefaultPalette"],
    semanticColors: _makeSemanticColorsFromPalette(_DefaultPalette__WEBPACK_IMPORTED_MODULE_3__["DefaultPalette"], false, false),
    fonts: _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"],
    isInverted: false,
    disableGlobalClassNames: false
};
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
if (!_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].getSettings([ThemeSettingName]).theme) {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable:no-string-literal no-any
    if (win && win['FabricConfig'] && win['FabricConfig'].theme) {
        _theme = createTheme(win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
}
/**
 * Gets the theme object
 * @param {boolean} depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = createTheme({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param {object} theme - Partial theme object.
 * @param {boolean} depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    _theme = createTheme(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    Object(_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_4__["loadTheme"])(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _theme.palette, _theme.semanticColors));
    _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["Customizations"].applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
    var _a;
}
/**
 * Creates a custom theme definition which can be used with the Customizer.
 * @param {object} theme - Partial theme object.
 * @param {boolean} depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (depComments === void 0) { depComments = false; }
    var newPalette = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _DefaultPalette__WEBPACK_IMPORTED_MODULE_3__["DefaultPalette"], theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    // mix in custom overrides with good slots first, since custom overrides might be used in fixing deprecated slots
    var newSemanticColors = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted, depComments), theme.semanticColors);
    return {
        palette: newPalette,
        fonts: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_2__["DefaultFontStyles"], theme.fonts),
        semanticColors: newSemanticColors,
        isInverted: !!theme.isInverted,
        disableGlobalClassNames: !!theme.disableGlobalClassNames
    };
}
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted, depComments) {
    var toReturn = {
        bodyBackground: p.white,
        bodyFrameBackground: p.white,
        bodyText: p.neutralPrimary,
        bodyTextChecked: p.black,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralTertiaryAlt,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiary,
        disabledBodyText: p.neutralTertiaryAlt,
        disabledSubtext: p.neutralQuaternary,
        focusBorder: p.black,
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        warningText: !isInverted ? '#333333' : '#ffffff',
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralDark,
        inputBackground: p.white,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        smallInputBorder: p.neutralSecondary,
        inputPlaceholderText: p.neutralSecondary,
        buttonBackground: p.neutralLighter,
        buttonBackgroundChecked: p.neutralTertiaryAlt,
        buttonBackgroundHovered: p.neutralLight,
        buttonBackgroundCheckedHovered: p.neutralLight,
        buttonBorder: 'transparent',
        buttonText: p.neutralPrimary,
        buttonTextHovered: p.black,
        buttonTextChecked: p.neutralDark,
        buttonTextCheckedHovered: p.black,
        menuItemBackgroundHovered: p.neutralLighter,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        listBackground: p.white,
        listText: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt,
        listHeaderBackgroundHovered: p.neutralLighter,
        listHeaderBackgroundPressed: p.neutralLight,
        link: p.themePrimary,
        linkHovered: p.themeDarker,
        // Deprecated slots, second pass by _fixDeprecatedSlots() later for self-referential slots
        listTextColor: '',
        menuItemBackgroundChecked: p.neutralLight
    };
    return _fixDeprecatedSlots(toReturn, depComments);
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    return s;
}
var _a;


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/styles/zIndexes.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/styles/zIndexes.js ***!
  \***************************************************************/
/*! exports provided: ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return ZIndexes; });
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/utilities/buildClassMap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/utilities/buildClassMap.js ***!
  \***********************************************************************/
/*! exports provided: buildClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return buildClassMap; });
/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MergeStyles */ "./node_modules/@uifabric/styling/lib/MergeStyles.js");

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = Object(_MergeStyles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/utilities/getIconClassName.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/utilities/getIconClassName.js ***!
  \**************************************************************************/
/*! exports provided: getIconClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return getIconClassName; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./node_modules/@uifabric/styling/lib/utilities/icons.js");


var defaultIconStyles = {
    display: 'inline-block'
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = Object(_icons__WEBPACK_IMPORTED_MODULE_1__["getIcon"])(name);
    if (icon) {
        className = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"])(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/utilities/icons.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/utilities/icons.js ***!
  \***************************************************************/
/*! exports provided: registerIcons, registerIconAlias, getIcon, setIconOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return registerIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return registerIconAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return setIconOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/utilities */ "./node_modules/@uifabric/utilities/lib/index.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");



var ICON_SETTING_NAME = 'icons';
var _iconSettings = _uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true
    },
    __remapped: {}
});
// Reset icon registration on stylesheet resets.
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _iconSettings.__options, options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = iconName.toLowerCase();
            if (_iconSettings[normalizedIconName]) {
                if (!options.disableWarnings) {
                    Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("Icon '" + iconName + " being re-registered. Ignoring duplicate registration.");
                }
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset
                };
            }
        }
    }
}
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[iconName.toLowerCase()] = mappedToName.toLowerCase();
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? name.toLowerCase() : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["fontFace"])(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["mergeStyles"])(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal'
                    });
                }
            }
        }
        else {
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                Object(_uifabric_utilities__WEBPACK_IMPORTED_MODULE_1__["warn"])("The icon \"" + name + "\" was used but not registered. See http://aka.ms/fabric-icon-usage for more information.");
            }
        }
    }
    return icon;
}
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _iconSettings.__options, options);
}


/***/ }),

/***/ "./node_modules/@uifabric/styling/lib/utilities/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/styling/lib/utilities/index.js ***!
  \***************************************************************/
/*! exports provided: buildClassMap, getIcon, registerIcons, registerIconAlias, setIconOptions, getIconClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildClassMap */ "./node_modules/@uifabric/styling/lib/utilities/buildClassMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _buildClassMap__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./node_modules/@uifabric/styling/lib/utilities/icons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _icons__WEBPACK_IMPORTED_MODULE_1__["setIconOptions"]; });

/* harmony import */ var _getIconClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getIconClassName */ "./node_modules/@uifabric/styling/lib/utilities/getIconClassName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _getIconClassName__WEBPACK_IMPORTED_MODULE_2__["getIconClassName"]; });






/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/Async.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/Async.js ***!
  \*******************************************************/
/*! exports provided: Async */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return Async; });
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate
                ? window.setImmediate(setImmediateCallback)
                : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = new Date().getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            /* tslint:disable:no-any */
            noOpFunction.flush = (function () { return null; });
            /* tslint:enable:no-any */
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = new Date().getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = new Date().getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(new Date().getTime());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(new Date().getTime());
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame
                ? window.requestAnimationFrame(animationFrameCallback)
                : window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/AutoScroll.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/AutoScroll.js ***!
  \************************************************************/
/*! exports provided: AutoScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return AutoScroll; });
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventGroup */ "./node_modules/@uifabric/utilities/lib/EventGroup.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./node_modules/@uifabric/utilities/lib/scroll.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");



var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll = /** @class */ (function () {
    function AutoScroll(element) {
        this._events = new _EventGroup__WEBPACK_IMPORTED_MODULE_0__["EventGroup"](this);
        this._scrollableParent = Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["findScrollableParent"])(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = Object(_dom__WEBPACK_IMPORTED_MODULE_2__["getRect"])(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < scrollRectTop + SCROLL_GUTTER_HEIGHT) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/BaseComponent.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/BaseComponent.js ***!
  \***************************************************************/
/*! exports provided: BaseComponent, nullRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return nullRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Async */ "./node_modules/@uifabric/utilities/lib/Async.js");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventGroup */ "./node_modules/@uifabric/utilities/lib/EventGroup.js");
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./warn */ "./node_modules/@uifabric/utilities/lib/warn.js");
/* harmony import */ var _initializeFocusRects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initializeFocusRects */ "./node_modules/@uifabric/utilities/lib/initializeFocusRects.js");
/* harmony import */ var _initializeDir__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initializeDir */ "./node_modules/@uifabric/utilities/lib/initializeDir.js");







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // Ensure basic assumptions about the environment.
        Object(_initializeFocusRects__WEBPACK_IMPORTED_MODULE_5__["initializeFocusRects"])();
        Object(_initializeDir__WEBPACK_IMPORTED_MODULE_6__["initializeDir"])();
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    // tslint:disable-next-line:no-any
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new _Async__WEBPACK_IMPORTED_MODULE_2__["Async"](this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new _EventGroup__WEBPACK_IMPORTED_MODULE_3__["EventGroup"](this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from `@uifabric/utilities`
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        Object(_warn__WEBPACK_IMPORTED_MODULE_4__["warnDeprecations"])(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        Object(_warn__WEBPACK_IMPORTED_MODULE_4__["warnMutuallyExclusive"])(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        Object(_warn__WEBPACK_IMPORTED_MODULE_4__["warnConditionallyRequiredProps"])(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, arguments);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, arguments);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/Context.js":
/*!*********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/Context.js ***!
  \*********************************************************/
/*! exports provided: provideContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideContext", function() { return provideContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function provideContext(contextTypes, mapPropsToContext) {
    var Provider = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Provider, _super);
        function Provider() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Provider.prototype.getChildContext = function () {
            return mapPropsToContext(this.props);
        };
        Provider.prototype.render = function () {
            return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        };
        Provider.childContextTypes = contextTypes;
        return Provider;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
    return Provider;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/Customizations.js":
/*!****************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/Customizations.js ***!
  \****************************************************************/
/*! exports provided: Customizations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return Customizations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalSettings */ "./node_modules/@uifabric/utilities/lib/GlobalSettings.js");
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventGroup */ "./node_modules/@uifabric/utilities/lib/EventGroup.js");



var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {} };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_1__["GlobalSettings"].getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {}
});
var _events = new _EventGroup__WEBPACK_IMPORTED_MODULE_2__["EventGroup"](_allSettings);
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
    // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/Customizer.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/Customizer.js ***!
  \************************************************************/
/*! exports provided: Customizer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return Customizer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseComponent */ "./node_modules/@uifabric/utilities/lib/BaseComponent.js");




/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 */
var Customizer = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Customizer, _super);
    // tslint:disable-next-line:no-any
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getCustomizations(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    // tslint:disable-next-line:no-any
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getCustomizations(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
    };
    Customizer.prototype._getCustomizations = function (props, context) {
        var _a = context.customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
        return {
            customizations: {
                settings: mergeSettings(customizations.settings, props.settings),
                scopedSettings: mergeScopedSettings(customizations.scopedSettings, props.scopedSettings)
            }
        };
    };
    Customizer.contextTypes = {
        customizations: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]
    };
    Customizer.childContextTypes = Customizer.contextTypes;
    return Customizer;
}(_BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = isSettingsFunction(newSettings) ? newSettings : scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, newSettings, settings) : settings); };
}
function scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, oldScopedSettings[scopeName], scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/DelayedRender.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/DelayedRender.js ***!
  \***************************************************************/
/*! exports provided: DelayedRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return DelayedRender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/EventGroup.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/EventGroup.js ***!
  \************************************************************/
/*! exports provided: EventGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return EventGroup; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/@uifabric/utilities/lib/object.js");
/* tslint:disable:no-string-literal */

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
    // tslint:disable-next-line:no-any
    target, eventName, 
    // tslint:disable-next-line:no-any
    eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                Object(_object__WEBPACK_IMPORTED_MODULE_0__["assign"])(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // IE8
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                useCapture: useCapture || false
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof useCapture !== 'boolean' || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/FabricPerformance.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/FabricPerformance.js ***!
  \*******************************************************************/
/*! exports provided: FabricPerformance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return FabricPerformance; });
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = /** @class */ (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        if (FabricPerformance._timeoutId) {
            FabricPerformance.setPeriodicReset();
        }
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance._timeoutId = NaN;
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/GlobalSettings.js":
/*!****************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/GlobalSettings.js ***!
  \****************************************************************/
/*! exports provided: GlobalSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return GlobalSettings; });
/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _global;
var _counter = 0;
if (typeof window !== 'undefined') {
    _global = window;
}
else if (typeof global !== 'undefined') {
    _global = global;
}
else {
    _global = {};
}
// tslint:disable-next-line:no-any
var _globalSettings = (_global[GLOBAL_SETTINGS_PROP_NAME] = _global[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
    _a[CALLBACK_STATE_PROP_NAME] = {},
    _a));
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

var _a;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/buildin/global.js */ "../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/KeyCodes.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/KeyCodes.js ***!
  \**********************************************************/
/*! exports provided: KeyCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return KeyCodes; });
/**
 * Const enum for keycodes.
 *
 * @public
 */
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["backspace"] = 8] = "backspace";
    KeyCodes[KeyCodes["tab"] = 9] = "tab";
    KeyCodes[KeyCodes["enter"] = 13] = "enter";
    KeyCodes[KeyCodes["shift"] = 16] = "shift";
    KeyCodes[KeyCodes["ctrl"] = 17] = "ctrl";
    KeyCodes[KeyCodes["alt"] = 18] = "alt";
    KeyCodes[KeyCodes["pauseBreak"] = 19] = "pauseBreak";
    KeyCodes[KeyCodes["capslock"] = 20] = "capslock";
    KeyCodes[KeyCodes["escape"] = 27] = "escape";
    KeyCodes[KeyCodes["space"] = 32] = "space";
    KeyCodes[KeyCodes["pageUp"] = 33] = "pageUp";
    KeyCodes[KeyCodes["pageDown"] = 34] = "pageDown";
    KeyCodes[KeyCodes["end"] = 35] = "end";
    KeyCodes[KeyCodes["home"] = 36] = "home";
    KeyCodes[KeyCodes["left"] = 37] = "left";
    KeyCodes[KeyCodes["up"] = 38] = "up";
    KeyCodes[KeyCodes["right"] = 39] = "right";
    KeyCodes[KeyCodes["down"] = 40] = "down";
    KeyCodes[KeyCodes["insert"] = 45] = "insert";
    KeyCodes[KeyCodes["del"] = 46] = "del";
    KeyCodes[KeyCodes["zero"] = 48] = "zero";
    KeyCodes[KeyCodes["one"] = 49] = "one";
    KeyCodes[KeyCodes["two"] = 50] = "two";
    KeyCodes[KeyCodes["three"] = 51] = "three";
    KeyCodes[KeyCodes["four"] = 52] = "four";
    KeyCodes[KeyCodes["five"] = 53] = "five";
    KeyCodes[KeyCodes["six"] = 54] = "six";
    KeyCodes[KeyCodes["seven"] = 55] = "seven";
    KeyCodes[KeyCodes["eight"] = 56] = "eight";
    KeyCodes[KeyCodes["nine"] = 57] = "nine";
    KeyCodes[KeyCodes["a"] = 65] = "a";
    KeyCodes[KeyCodes["b"] = 66] = "b";
    KeyCodes[KeyCodes["c"] = 67] = "c";
    KeyCodes[KeyCodes["d"] = 68] = "d";
    KeyCodes[KeyCodes["e"] = 69] = "e";
    KeyCodes[KeyCodes["f"] = 70] = "f";
    KeyCodes[KeyCodes["g"] = 71] = "g";
    KeyCodes[KeyCodes["h"] = 72] = "h";
    KeyCodes[KeyCodes["i"] = 73] = "i";
    KeyCodes[KeyCodes["j"] = 74] = "j";
    KeyCodes[KeyCodes["k"] = 75] = "k";
    KeyCodes[KeyCodes["l"] = 76] = "l";
    KeyCodes[KeyCodes["m"] = 77] = "m";
    KeyCodes[KeyCodes["n"] = 78] = "n";
    KeyCodes[KeyCodes["o"] = 79] = "o";
    KeyCodes[KeyCodes["p"] = 80] = "p";
    KeyCodes[KeyCodes["q"] = 81] = "q";
    KeyCodes[KeyCodes["r"] = 82] = "r";
    KeyCodes[KeyCodes["s"] = 83] = "s";
    KeyCodes[KeyCodes["t"] = 84] = "t";
    KeyCodes[KeyCodes["u"] = 85] = "u";
    KeyCodes[KeyCodes["v"] = 86] = "v";
    KeyCodes[KeyCodes["w"] = 87] = "w";
    KeyCodes[KeyCodes["x"] = 88] = "x";
    KeyCodes[KeyCodes["y"] = 89] = "y";
    KeyCodes[KeyCodes["z"] = 90] = "z";
    KeyCodes[KeyCodes["leftWindow"] = 91] = "leftWindow";
    KeyCodes[KeyCodes["rightWindow"] = 92] = "rightWindow";
    KeyCodes[KeyCodes["select"] = 93] = "select";
    KeyCodes[KeyCodes["zero_numpad"] = 96] = "zero_numpad";
    KeyCodes[KeyCodes["one_numpad"] = 97] = "one_numpad";
    KeyCodes[KeyCodes["two_numpad"] = 98] = "two_numpad";
    KeyCodes[KeyCodes["three_numpad"] = 99] = "three_numpad";
    KeyCodes[KeyCodes["four_numpad"] = 100] = "four_numpad";
    KeyCodes[KeyCodes["five_numpad"] = 101] = "five_numpad";
    KeyCodes[KeyCodes["six_numpad"] = 102] = "six_numpad";
    KeyCodes[KeyCodes["seven_numpad"] = 103] = "seven_numpad";
    KeyCodes[KeyCodes["eight_numpad"] = 104] = "eight_numpad";
    KeyCodes[KeyCodes["nine_numpad"] = 105] = "nine_numpad";
    KeyCodes[KeyCodes["multiply"] = 106] = "multiply";
    KeyCodes[KeyCodes["add"] = 107] = "add";
    KeyCodes[KeyCodes["subtract"] = 109] = "subtract";
    KeyCodes[KeyCodes["decimalPoint"] = 110] = "decimalPoint";
    KeyCodes[KeyCodes["divide"] = 111] = "divide";
    KeyCodes[KeyCodes["f1"] = 112] = "f1";
    KeyCodes[KeyCodes["f2"] = 113] = "f2";
    KeyCodes[KeyCodes["f3"] = 114] = "f3";
    KeyCodes[KeyCodes["f4"] = 115] = "f4";
    KeyCodes[KeyCodes["f5"] = 116] = "f5";
    KeyCodes[KeyCodes["f6"] = 117] = "f6";
    KeyCodes[KeyCodes["f7"] = 118] = "f7";
    KeyCodes[KeyCodes["f8"] = 119] = "f8";
    KeyCodes[KeyCodes["f9"] = 120] = "f9";
    KeyCodes[KeyCodes["f10"] = 121] = "f10";
    KeyCodes[KeyCodes["f11"] = 122] = "f11";
    KeyCodes[KeyCodes["f12"] = 123] = "f12";
    KeyCodes[KeyCodes["numlock"] = 144] = "numlock";
    KeyCodes[KeyCodes["scrollLock"] = 145] = "scrollLock";
    KeyCodes[KeyCodes["semicolon"] = 186] = "semicolon";
    KeyCodes[KeyCodes["equalSign"] = 187] = "equalSign";
    KeyCodes[KeyCodes["comma"] = 188] = "comma";
    KeyCodes[KeyCodes["dash"] = 189] = "dash";
    KeyCodes[KeyCodes["period"] = 190] = "period";
    KeyCodes[KeyCodes["forwardSlash"] = 191] = "forwardSlash";
    KeyCodes[KeyCodes["graveAccent"] = 192] = "graveAccent";
    KeyCodes[KeyCodes["openBracket"] = 219] = "openBracket";
    KeyCodes[KeyCodes["backSlash"] = 220] = "backSlash";
    KeyCodes[KeyCodes["closeBracket"] = 221] = "closeBracket";
    KeyCodes[KeyCodes["singleQuote"] = 222] = "singleQuote";
})(KeyCodes || (KeyCodes = {}));


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/Rectangle.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/Rectangle.js ***!
  \***********************************************************/
/*! exports provided: Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());



/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/aria.js":
/*!******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/aria.js ***!
  \******************************************************/
/*! exports provided: mergeAriaAttributeValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return mergeAriaAttributeValues; });
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * NOTE: This function will NOT insert whitespace between provided attributes.
 *
 * @param ariaAttributes ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg !== undefined && arg !== null; })
        .join('');
    return mergedAttribute === '' ? undefined : mergedAttribute;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/array.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/array.js ***!
  \*******************************************************/
/*! exports provided: findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return createArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return toMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return removeIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return addElementAtIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns {any[][]} - A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns {boolean} True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/assertNever.js":
/*!*************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/assertNever.js ***!
  \*************************************************************/
/*! exports provided: assertNever */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return assertNever; });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/autobind.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/autobind.js ***!
  \**********************************************************/
/*! exports provided: autobind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return autobind; });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 * @deprecated This has been deprecated in favor of using arrow function properties
 */
function autobind(
// tslint:disable-next-line:no-any
target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/classNamesFunction.js":
/*!********************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/classNamesFunction.js ***!
  \********************************************************************/
/*! exports provided: classNamesFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return classNamesFunction; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");

/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 */
function classNamesFunction() {
    // TODO: memoize.
    return function (getStyles, styleProps) {
        return Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"])(getStyles && (typeof getStyles === 'function' ? getStyles(styleProps) : getStyles));
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/createRef.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/createRef.js ***!
  \***********************************************************/
/*! exports provided: createRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/**
 * This is a polyfill for the React.createRef() api.
 * For more info on React.createRef() see the official React documentation
 * on creating and accessing refs.
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 * @see https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs
 */
function createRef() {
    var refObject = (function (element) {
        refObject.current = element;
    });
    // This getter is here to support the deprecated value prop on the refObject.
    Object.defineProperty(refObject, 'value', {
        get: function () {
            return refObject.current;
        }
    });
    refObject.current = null;
    return refObject;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/css.js ***!
  \*****************************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/customizable.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/customizable.js ***!
  \**************************************************************/
/*! exports provided: CustomizableContextTypes, customizable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizableContextTypes", function() { return CustomizableContextTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return customizable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Customizations */ "./node_modules/@uifabric/utilities/lib/Customizations.js");
/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hoistStatics */ "./node_modules/@uifabric/utilities/lib/hoistStatics.js");





var CustomizableContextTypes = {
    customizations: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"]
};
function customizable(scope, fields
// tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
    // tslint:disable-next-line:no-any
    ComposedComponent
    // tslint:disable-next-line:no-any
    ) {
        var resultClass = (_a = /** @class */ (function (_super) {
                tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_3__["Customizations"].observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_3__["Customizations"].unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = _Customizations__WEBPACK_IMPORTED_MODULE_3__["Customizations"].getSettings(fields, scope, this.context.customizations);
                    return (
                    // tslint:disable-next-line:no-any
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, defaultProps, this.props)));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(react__WEBPACK_IMPORTED_MODULE_1__["Component"])),
            _a.displayName = 'Customized' + scope,
            _a.contextTypes = CustomizableContextTypes,
            _a);
        return Object(_hoistStatics__WEBPACK_IMPORTED_MODULE_4__["hoistStatics"])(ComposedComponent, resultClass);
        var _a;
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/dom.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/dom.js ***!
  \*****************************************************/
/*! exports provided: setVirtualParent, getVirtualParent, getParent, getChildren, elementContains, setSSR, getWindow, getDocument, getRect, findElementRecursive, elementContainsAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return setVirtualParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return getVirtualParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return elementContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return setSSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return getRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return findElementRecursive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return elementContainsAttribute; });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return (child &&
        ((allowVirtualParents && getVirtualParent(child)) || (child.parentNode && child.parentNode)));
}
/**
 * Gets the elements which are child elements of the given element.
 * If `allowVirtualChildren` is `true`, this method enumerates virtual child elements
 * after the original children.
 * @param parent
 * @param allowVirtualChildren
 */
function getChildren(parent, allowVirtualChildren) {
    if (allowVirtualChildren === void 0) { allowVirtualChildren = true; }
    var children = [];
    if (parent) {
        for (var i = 0; i < parent.children.length; i++) {
            children.push(parent.children.item(i));
        }
        if (allowVirtualChildren && isVirtualElement(parent)) {
            children.push.apply(children, parent._virtual.children);
        }
    }
    return children;
}
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument && rootElement.ownerDocument.defaultView
            ? rootElement.ownerDocument.defaultView
            : window;
    }
}
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
/**
 * Finds the first parent element where the matchFunction returns true
 * @param element element to start searching at
 * @param matchFunction the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive(getParent(element), matchFunction);
}
/**
 * Determines if an element, or any of its ancestors, contian the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = findElementRecursive(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/focus.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/focus.js ***!
  \*******************************************************/
/*! exports provided: getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return getFirstFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return getLastFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return getFirstTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return getLastTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return focusFirstChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return getPreviousElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return getNextElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return isElementVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return isElementTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return isElementFocusZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return isElementFocusSubZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return doesElementContainFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return shouldWrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return focusAsync; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");
/* tslint:disable:no-string-literal */

var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement The parent element to search beneath.
 * @param currentElement The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones true if traversal should go into FocusZone descendants.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element.
 * The difference between focusable and tabbable is that tabbable elements are focusable elements that also have tabIndex != -1.
 * @param rootElement The parent element to search beneath.
 * @param currentElement The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones true if traversal should go into FocusZone descendants.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key, meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            (element.getAttribute && element.getAttribute('role') === 'button'));
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && Object(_dom__WEBPACK_IMPORTED_MODULE_0__["elementContains"])(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return Object(_dom__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"])(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/hoist.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/hoist.js ***!
  \*******************************************************/
/*! exports provided: hoistMethods, unhoistMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return hoistMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return unhoistMethods; });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// tslint:disable-next-line:no-any
destination, 
// tslint:disable-next-line:no-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () {
                source[methodName].apply(source, arguments);
            };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/hoistStatics.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/hoistStatics.js ***!
  \**************************************************************/
/*! exports provided: hoistStatics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // tslint:disable-next-line:no-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/index.js ***!
  \*******************************************************/
/*! exports provided: mergeAriaAttributeValues, Async, AutoScroll, BaseComponent, nullRender, provideContext, Customizations, Customizer, DelayedRender, EventGroup, FabricPerformance, GlobalSettings, KeyCodes, Rectangle, findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual, assertNever, autobind, classNamesFunction, createRef, css, CustomizableContextTypes, customizable, setVirtualParent, getVirtualParent, getParent, getChildren, elementContains, setSSR, getWindow, getDocument, getRect, findElementRecursive, elementContainsAttribute, getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, hoistMethods, unhoistMethods, hoistStatics, IsFocusVisibleClassName, initializeFocusRects, getInitials, isDirectionalKeyCode, addDirectionalKeyCode, getLanguage, setLanguage, getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound, setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, shallowCompare, assign, filteredAssign, getId, resetIds, mapEnumByName, values, hasHorizontalOverflow, hasVerticalOverflow, hasOverflow, baseElementEvents, baseElementProperties, htmlElementProperties, anchorProperties, buttonProperties, divProperties, inputProperties, textAreaProperties, imageProperties, getNativeProps, getResourceUrl, setBaseUrl, getRTL, setRTL, getRTLSafeKeyCode, DATA_IS_SCROLLABLE_ATTRIBUTE, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent, format, styled, warnDeprecations, warnMutuallyExclusive, warnConditionallyRequiredProps, warn, setWarningCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria */ "./node_modules/@uifabric/utilities/lib/aria.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return _aria__WEBPACK_IMPORTED_MODULE_0__["mergeAriaAttributeValues"]; });

/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Async */ "./node_modules/@uifabric/utilities/lib/Async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _Async__WEBPACK_IMPORTED_MODULE_1__["Async"]; });

/* harmony import */ var _AutoScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoScroll */ "./node_modules/@uifabric/utilities/lib/AutoScroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return _AutoScroll__WEBPACK_IMPORTED_MODULE_2__["AutoScroll"]; });

/* harmony import */ var _BaseComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseComponent */ "./node_modules/@uifabric/utilities/lib/BaseComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return _BaseComponent__WEBPACK_IMPORTED_MODULE_3__["nullRender"]; });

/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Context */ "./node_modules/@uifabric/utilities/lib/Context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provideContext", function() { return _Context__WEBPACK_IMPORTED_MODULE_4__["provideContext"]; });

/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Customizations */ "./node_modules/@uifabric/utilities/lib/Customizations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return _Customizations__WEBPACK_IMPORTED_MODULE_5__["Customizations"]; });

/* harmony import */ var _Customizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Customizer */ "./node_modules/@uifabric/utilities/lib/Customizer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return _Customizer__WEBPACK_IMPORTED_MODULE_6__["Customizer"]; });

/* harmony import */ var _DelayedRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DelayedRender */ "./node_modules/@uifabric/utilities/lib/DelayedRender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return _DelayedRender__WEBPACK_IMPORTED_MODULE_7__["DelayedRender"]; });

/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EventGroup */ "./node_modules/@uifabric/utilities/lib/EventGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _EventGroup__WEBPACK_IMPORTED_MODULE_8__["EventGroup"]; });

/* harmony import */ var _FabricPerformance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FabricPerformance */ "./node_modules/@uifabric/utilities/lib/FabricPerformance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return _FabricPerformance__WEBPACK_IMPORTED_MODULE_9__["FabricPerformance"]; });

/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GlobalSettings */ "./node_modules/@uifabric/utilities/lib/GlobalSettings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return _GlobalSettings__WEBPACK_IMPORTED_MODULE_10__["GlobalSettings"]; });

/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KeyCodes */ "./node_modules/@uifabric/utilities/lib/KeyCodes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _KeyCodes__WEBPACK_IMPORTED_MODULE_11__["KeyCodes"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Rectangle */ "./node_modules/@uifabric/utilities/lib/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_12__["Rectangle"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./array */ "./node_modules/@uifabric/utilities/lib/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["toMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["removeIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["addElementAtIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_13__["arraysEqual"]; });

/* harmony import */ var _assertNever__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assertNever */ "./node_modules/@uifabric/utilities/lib/assertNever.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _assertNever__WEBPACK_IMPORTED_MODULE_14__["assertNever"]; });

/* harmony import */ var _autobind__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./autobind */ "./node_modules/@uifabric/utilities/lib/autobind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _autobind__WEBPACK_IMPORTED_MODULE_15__["autobind"]; });

/* harmony import */ var _classNamesFunction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classNamesFunction */ "./node_modules/@uifabric/utilities/lib/classNamesFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return _classNamesFunction__WEBPACK_IMPORTED_MODULE_16__["classNamesFunction"]; });

/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./createRef */ "./node_modules/@uifabric/utilities/lib/createRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _createRef__WEBPACK_IMPORTED_MODULE_17__["createRef"]; });

/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./css */ "./node_modules/@uifabric/utilities/lib/css.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css__WEBPACK_IMPORTED_MODULE_18__["css"]; });

/* harmony import */ var _customizable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customizable */ "./node_modules/@uifabric/utilities/lib/customizable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizableContextTypes", function() { return _customizable__WEBPACK_IMPORTED_MODULE_19__["CustomizableContextTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return _customizable__WEBPACK_IMPORTED_MODULE_19__["customizable"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["setVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["getVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["getChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["elementContains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["setSSR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["getWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["getRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["findElementRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_20__["elementContainsAttribute"]; });

/* harmony import */ var _focus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./focus */ "./node_modules/@uifabric/utilities/lib/focus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["getFirstFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["getLastFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["getFirstTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["getLastTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["focusFirstChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["getPreviousElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["getNextElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["isElementVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["isElementTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["isElementFocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["isElementFocusSubZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["doesElementContainFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["shouldWrapFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return _focus__WEBPACK_IMPORTED_MODULE_21__["focusAsync"]; });

/* harmony import */ var _hoist__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./hoist */ "./node_modules/@uifabric/utilities/lib/hoist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_22__["hoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return _hoist__WEBPACK_IMPORTED_MODULE_22__["unhoistMethods"]; });

/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./hoistStatics */ "./node_modules/@uifabric/utilities/lib/hoistStatics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return _hoistStatics__WEBPACK_IMPORTED_MODULE_23__["hoistStatics"]; });

/* harmony import */ var _initializeFocusRects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./initializeFocusRects */ "./node_modules/@uifabric/utilities/lib/initializeFocusRects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return _initializeFocusRects__WEBPACK_IMPORTED_MODULE_24__["IsFocusVisibleClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return _initializeFocusRects__WEBPACK_IMPORTED_MODULE_24__["initializeFocusRects"]; });

/* harmony import */ var _initials__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./initials */ "./node_modules/@uifabric/utilities/lib/initials.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return _initials__WEBPACK_IMPORTED_MODULE_25__["getInitials"]; });

/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./keyboard */ "./node_modules/@uifabric/utilities/lib/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_26__["isDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return _keyboard__WEBPACK_IMPORTED_MODULE_26__["addDirectionalKeyCode"]; });

/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./language */ "./node_modules/@uifabric/utilities/lib/language.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_27__["getLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return _language__WEBPACK_IMPORTED_MODULE_27__["setLanguage"]; });

/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./math */ "./node_modules/@uifabric/utilities/lib/math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return _math__WEBPACK_IMPORTED_MODULE_28__["getDistanceBetweenPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return _math__WEBPACK_IMPORTED_MODULE_28__["fitContentToBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return _math__WEBPACK_IMPORTED_MODULE_28__["calculatePrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _math__WEBPACK_IMPORTED_MODULE_28__["precisionRound"]; });

/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./memoize */ "./node_modules/@uifabric/utilities/lib/memoize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return _memoize__WEBPACK_IMPORTED_MODULE_29__["setMemoizeWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return _memoize__WEBPACK_IMPORTED_MODULE_29__["resetMemoizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize__WEBPACK_IMPORTED_MODULE_29__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return _memoize__WEBPACK_IMPORTED_MODULE_29__["memoizeFunction"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./object */ "./node_modules/@uifabric/utilities/lib/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["shallowCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["filteredAssign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["getId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["resetIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["mapEnumByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _object__WEBPACK_IMPORTED_MODULE_30__["values"]; });

/* harmony import */ var _overflow__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./overflow */ "./node_modules/@uifabric/utilities/lib/overflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_31__["hasHorizontalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_31__["hasVerticalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return _overflow__WEBPACK_IMPORTED_MODULE_31__["hasOverflow"]; });

/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./properties */ "./node_modules/@uifabric/utilities/lib/properties.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["baseElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["baseElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["htmlElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["anchorProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["buttonProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["divProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["inputProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["textAreaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["imageProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return _properties__WEBPACK_IMPORTED_MODULE_32__["getNativeProps"]; });

/* harmony import */ var _resources__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./resources */ "./node_modules/@uifabric/utilities/lib/resources.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_33__["getResourceUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return _resources__WEBPACK_IMPORTED_MODULE_33__["setBaseUrl"]; });

/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rtl */ "./node_modules/@uifabric/utilities/lib/rtl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_34__["getRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _rtl__WEBPACK_IMPORTED_MODULE_34__["setRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return _rtl__WEBPACK_IMPORTED_MODULE_34__["getRTLSafeKeyCode"]; });

/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./scroll */ "./node_modules/@uifabric/utilities/lib/scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return _scroll__WEBPACK_IMPORTED_MODULE_35__["DATA_IS_SCROLLABLE_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_35__["disableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return _scroll__WEBPACK_IMPORTED_MODULE_35__["enableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _scroll__WEBPACK_IMPORTED_MODULE_35__["getScrollbarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _scroll__WEBPACK_IMPORTED_MODULE_35__["findScrollableParent"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./string */ "./node_modules/@uifabric/utilities/lib/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _string__WEBPACK_IMPORTED_MODULE_36__["format"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./styled */ "./node_modules/@uifabric/utilities/lib/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_37__["styled"]; });

/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./warn */ "./node_modules/@uifabric/utilities/lib/warn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _warn__WEBPACK_IMPORTED_MODULE_38__["warnDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _warn__WEBPACK_IMPORTED_MODULE_38__["warnMutuallyExclusive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _warn__WEBPACK_IMPORTED_MODULE_38__["warnConditionallyRequiredProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _warn__WEBPACK_IMPORTED_MODULE_38__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _warn__WEBPACK_IMPORTED_MODULE_38__["setWarningCallback"]; });










































/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/initializeDir.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/initializeDir.js ***!
  \***************************************************************/
/*! exports provided: initializeDir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDir", function() { return initializeDir; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");

function initializeDir(window) {
    var win = (window || Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getWindow"])());
    if (win && !win.__hasInitializedDir__) {
        win.__hasInitializedDir__ = true;
        // Ensure that the documentElement has a 'dir' attribute.
        var documentElement = win.document.documentElement;
        if (!documentElement.hasAttribute('dir')) {
            documentElement.setAttribute('dir', 'ltr');
        }
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/initializeFocusRects.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/initializeFocusRects.js ***!
  \**********************************************************************/
/*! exports provided: IsFocusVisibleClassName, initializeFocusRects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return IsFocusVisibleClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return initializeFocusRects; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard */ "./node_modules/@uifabric/utilities/lib/keyboard.js");


var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'is-focusVisible' classname
 *    to the document body.
 * 3. When the user clicks a mouse button, we remove the classname if it exists.
 *
 * This logic allows components on the page to conditionally render focus treatments only
 * if the global classname exists, which simplifies logic overall.
 *
 * @param window
 */
function initializeFocusRects(window) {
    var win = (window || Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getWindow"])());
    if (win && !win.__hasInitializeFocusRects__) {
        win.__hasInitializeFocusRects__ = true;
        win.addEventListener('mousedown', _onMouseDown, true);
        win.addEventListener('keydown', _onKeyDown, true);
    }
}
function _onMouseDown(ev) {
    var win = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (classList.contains(IsFocusVisibleClassName)) {
            classList.remove(IsFocusVisibleClassName);
        }
    }
}
function _onKeyDown(ev) {
    var win = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getWindow"])(ev.target);
    if (win) {
        var classList = win.document.body.classList;
        if (Object(_keyboard__WEBPACK_IMPORTED_MODULE_1__["isDirectionalKeyCode"])(ev.which) && !classList.contains(IsFocusVisibleClassName)) {
            classList.add(IsFocusVisibleClassName);
        }
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/initials.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/initials.js ***!
  \**********************************************************/
/*! exports provided: getInitials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return getInitials; });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/**
 * Regular expression matching phone numbers. Applied after chars matching UNWANTED_CHARS_REGEX have been removed
 * and number has been trimmed for whitespaces
 */
var PHONENUMBER_REGEX = /^\d+[\d\s]*(:?ext|x|)\s*\d+$/i;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl, allowPhoneInitials) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    // For names containing CJK characters, and phone numbers, we don't display initials
    if (UNSUPPORTED_TEXT_REGEX.test(displayName) || (!allowPhoneInitials && PHONENUMBER_REGEX.test(displayName))) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/keyboard.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/keyboard.js ***!
  \**********************************************************/
/*! exports provided: isDirectionalKeyCode, addDirectionalKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return isDirectionalKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return addDirectionalKeyCode; });
var DirectionalKeyCodes = (_a = {},
    _a[38 /* up */] = 1,
    _a[40 /* down */] = 1,
    _a[37 /* left */] = 1,
    _a[39 /* right */] = 1,
    _a[36 /* home */] = 1,
    _a[35 /* end */] = 1,
    _a[9 /* tab */] = 1,
    _a[33 /* pageUp */] = 1,
    _a[34 /* pageDown */] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
var _a;


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/language.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/language.js ***!
  \**********************************************************/
/*! exports provided: getLanguage, setLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./node_modules/@uifabric/utilities/lib/localStorage.js");


// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        var savedLanguage = Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["getItem"])('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        Object(_localStorage__WEBPACK_IMPORTED_MODULE_1__["setItem"])('language', language);
    }
    _language = language;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/localStorage.js":
/*!**************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/localStorage.js ***!
  \**************************************************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/math.js":
/*!******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/math.js ***!
  \******************************************************/
/*! exports provided: getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return getDistanceBetweenPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return fitContentToBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return calculatePrecision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return precisionRound; });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
/**
 * Calculates a number's precision based on the number of trailing
 * zeros if the number does not have a decimal indicated by a negative
 * precision. Otherwise, it calculates the number of digits after
 * the decimal point indicated by a positive precision.
 * @param value
 */
function calculatePrecision(value) {
    /**
     * Group 1:
     * [1-9]([0]+$) matches trailing zeros
     * Group 2:
     * \.([0-9]*) matches all digits after a decimal point.
     */
    var groups = /[1-9]([0]+$)|\.([0-9]*)/.exec(String(value));
    if (!groups) {
        return 0;
    }
    if (groups[1]) {
        return -groups[1].length;
    }
    if (groups[2]) {
        return groups[2].length;
    }
    return 0;
}
/**
 * Rounds a number to a certain level of precision. Accepts negative precision.
 * @param value The value that is being rounded.
 * @param precision The number of decimal places to round the number to
 */
function precisionRound(value, precision, base) {
    if (base === void 0) { base = 10; }
    var exp = Math.pow(base, precision);
    return Math.round(value * exp) / exp;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/memoize.js":
/*!*********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/memoize.js ***!
  \*********************************************************/
/*! exports provided: setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return setMemoizeWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return resetMemoizations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return memoizeFunction; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");

var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance().onReset(resetMemoizations);
}
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. Note that the "this" reference
 * will be inaccessible within a memoized method, given that a cached method's this
 * would not be instance specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/object.js":
/*!********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/object.js ***!
  \********************************************************/
/*! exports provided: shallowCompare, assign, filteredAssign, getId, resetIds, mapEnumByName, values */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return filteredAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return resetIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return mapEnumByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");

// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
// Configure ids to reset on stylesheet resets.
var stylesheet = _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"].getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(resetIds);
}
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || DEFAULT_ID_STRING) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
// tslint:disable-next-line:no-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// tslint:disable-next-line:no-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js */ "../../../Users/catsmile/AppData/Roaming/npm/node_modules/webpack/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/overflow.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/overflow.js ***!
  \**********************************************************/
/*! exports provided: hasHorizontalOverflow, hasVerticalOverflow, hasOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return hasHorizontalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return hasVerticalOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return hasOverflow; });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/properties.js":
/*!************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/properties.js ***!
  \************************************************************/
/*! exports provided: baseElementEvents, baseElementProperties, htmlElementProperties, anchorProperties, buttonProperties, divProperties, inputProperties, textAreaProperties, imageProperties, getNativeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return baseElementEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return baseElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return htmlElementProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return anchorProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return buttonProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return divProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return inputProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return textAreaProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return imageProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return getNativeProps; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/@uifabric/utilities/lib/object.js");

/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = baseElementProperties.concat(baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = htmlElementProperties.concat(['href', 'target']);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = htmlElementProperties.concat(['disabled']);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imageProperties = divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return Object(_object__WEBPACK_IMPORTED_MODULE_0__["filteredAssign"])(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) &&
            (propName.indexOf('data-') === 0 || propName.indexOf('aria-') === 0 || allowedPropNames.indexOf(propName) >= 0));
    }, {}, props);
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/resources.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/resources.js ***!
  \***********************************************************/
/*! exports provided: getResourceUrl, setBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return getResourceUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return setBaseUrl; });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/rtl.js":
/*!*****************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/rtl.js ***!
  \*****************************************************/
/*! exports provided: getRTL, setRTL, getRTLSafeKeyCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return getRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return setRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return getRTLSafeKeyCode; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionStorage */ "./node_modules/@uifabric/utilities/lib/sessionStorage.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");



var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_1__["getItem"])(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
            Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["setRTL"])(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        Object(_sessionStorage__WEBPACK_IMPORTED_MODULE_1__["setItem"])(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["setRTL"])(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === 37 /* left */) {
            key = 39 /* right */;
        }
        else if (key === 39 /* right */) {
            key = 37 /* left */;
        }
    }
    return key;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/scroll.js":
/*!********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/scroll.js ***!
  \********************************************************/
/*! exports provided: DATA_IS_SCROLLABLE_ATTRIBUTE, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return DATA_IS_SCROLLABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return getScrollbarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return findScrollableParent; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./node_modules/@uifabric/utilities/lib/dom.js");
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");


var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = Object(_uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])({
    overflow: 'hidden !important'
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = Object(_dom__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/sessionStorage.js":
/*!****************************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/sessionStorage.js ***!
  \****************************************************************/
/*! exports provided: getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/string.js":
/*!********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/string.js ***!
  \********************************************************/
/*! exports provided: format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return s.replace(FORMAT_REGEX, replace_func);
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/styled.js":
/*!********************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/styled.js ***!
  \********************************************************/
/*! exports provided: styled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uifabric/merge-styles */ "./node_modules/@uifabric/merge-styles/lib/index.js");
/* harmony import */ var _customizable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customizable */ "./node_modules/@uifabric/utilities/lib/customizable.js");
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Customizations */ "./node_modules/@uifabric/utilities/lib/Customizations.js");





var DefaultFields = ['theme', 'styles'];
/**
 * The styled HOC wrapper allows you to create a functional wrapper around a given component which will resolve
 * getStyles functional props, and mix customized props passed in using concatStyleSets.
 *
 * @example
 * ```tsx
 * export const Toggle = styled(
 *   ToggleBase,
 *   props => ({ root: { background: 'red' }})
 * );
 * ```
 * @param Component - The unstyled base component to render, which receives styles.
 * @param baseStyles - The styles which should be curried with the component.
 * @param getProps - A helper which provides default props.
 * @param customizable - An object which defines which props can be customized using the Customizer.
 */
function styled(Component, baseStyles, getProps, customizable) {
    var Wrapped = function (componentProps, context) {
        customizable = customizable || { scope: '', fields: undefined };
        var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
        var settings = _Customizations__WEBPACK_IMPORTED_MODULE_4__["Customizations"].getSettings(fields, scope, context.customizations);
        var customizedStyles = settings.styles, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](settings, ["styles"]);
        var styles = function (styleProps) {
            return _resolve(styleProps, baseStyles, customizedStyles, componentProps.styles);
        };
        var additionalProps = getProps ? getProps(componentProps) : undefined;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, rest, additionalProps, componentProps, { styles: styles }));
    };
    Wrapped.contextTypes = _customizable__WEBPACK_IMPORTED_MODULE_3__["CustomizableContextTypes"];
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    return Wrapped;
}
function _resolve(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length) {
        return _uifabric_merge_styles__WEBPACK_IMPORTED_MODULE_2__["concatStyleSets"].apply(void 0, result);
    }
    return undefined;
}


/***/ }),

/***/ "./node_modules/@uifabric/utilities/lib/warn.js":
/*!******************************************************!*\
  !*** ./node_modules/@uifabric/utilities/lib/warn.js ***!
  \******************************************************/
/*! exports provided: warnDeprecations, warnMutuallyExclusive, warnConditionallyRequiredProps, warn, setWarningCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return warnDeprecations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return warnMutuallyExclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return warnConditionallyRequiredProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return setWarningCallback; });
var _warningCallback = undefined;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            warn(deprecationMessage);
        }
    }
}
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                warn(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                warn(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback) {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Button.js":
/*!***********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Button.js ***!
  \***********************************************************/
/*! exports provided: BaseButton, ElementType, ButtonType, Button, ActionButton, CommandBarButton, CommandButton, CompoundButton, DefaultButton, MessageBarButton, PrimaryButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Button/index */ "./node_modules/office-ui-fabric-react/lib/components/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["BaseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["ActionButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CommandBarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CommandButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["CompoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["DefaultButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["MessageBarButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["PrimaryButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _components_Button_index__WEBPACK_IMPORTED_MODULE_0__["IconButton"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Callout.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Callout.js ***!
  \************************************************************/
/*! exports provided: DirectionalHint, Callout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Callout/index */ "./node_modules/office-ui-fabric-react/lib/components/Callout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _components_Callout_index__WEBPACK_IMPORTED_MODULE_0__["Callout"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/ContextualMenu.js":
/*!*******************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/ContextualMenu.js ***!
  \*******************************************************************/
/*! exports provided: ContextualMenu, DirectionalHint, ContextualMenuItemType, ContextualMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ContextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItemType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return _components_ContextualMenu_index__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuItem"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Divider.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Divider.js ***!
  \************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Divider_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Divider/index */ "./node_modules/office-ui-fabric-react/lib/components/Divider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return _components_Divider_index__WEBPACK_IMPORTED_MODULE_0__["VerticalDivider"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Fabric.js":
/*!***********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Fabric.js ***!
  \***********************************************************/
/*! exports provided: Fabric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Fabric/index */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return _components_Fabric_index__WEBPACK_IMPORTED_MODULE_0__["Fabric"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/FocusZone.js":
/*!**************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/FocusZone.js ***!
  \**************************************************************/
/*! exports provided: FocusZone, FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/FocusZone/index */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZoneTabbableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return _components_FocusZone_index__WEBPACK_IMPORTED_MODULE_0__["FocusZoneDirection"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Icon.js":
/*!*********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Icon.js ***!
  \*********************************************************/
/*! exports provided: Icon, IconBase, IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Icon/index */ "./node_modules/office-ui-fabric-react/lib/components/Icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["IconBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _components_Icon_index__WEBPACK_IMPORTED_MODULE_0__["IconType"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Icons.js":
/*!**********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Icons.js ***!
  \**********************************************************/
/*! exports provided: initializeIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/icons */ "./node_modules/@uifabric/icons/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeIcons", function() { return _uifabric_icons__WEBPACK_IMPORTED_MODULE_0__["initializeIcons"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/KeytipData.js":
/*!***************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/KeytipData.js ***!
  \***************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/KeytipData/index */ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _components_KeytipData_index__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Layer.js":
/*!**********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Layer.js ***!
  \**********************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layer_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Layer/index */ "./node_modules/office-ui-fabric-react/lib/components/Layer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_0__["Layer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_0__["LayerBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _components_Layer_index__WEBPACK_IMPORTED_MODULE_0__["LayerHost"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Nav.js":
/*!********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Nav.js ***!
  \********************************************************/
/*! exports provided: Nav, isRelativeUrl, NavBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Nav_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Nav/index */ "./node_modules/office-ui-fabric-react/lib/components/Nav/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _components_Nav_index__WEBPACK_IMPORTED_MODULE_0__["Nav"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return _components_Nav_index__WEBPACK_IMPORTED_MODULE_0__["isRelativeUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBase", function() { return _components_Nav_index__WEBPACK_IMPORTED_MODULE_0__["NavBase"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Popup.js":
/*!**********************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Popup.js ***!
  \**********************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Popup_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Popup/index */ "./node_modules/office-ui-fabric-react/lib/components/Popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _components_Popup_index__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Styling.js":
/*!************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Styling.js ***!
  \************************************************************/
/*! exports provided: AnimationClassNames, FontClassNames, ColorClassNames, AnimationStyles, AnimationVariables, DefaultPalette, DefaultFontStyles, registerDefaultFontFaces, FontSizes, FontWeights, IconFontSizes, createFontStyles, getFocusStyle, focusClear, hiddenContentStyle, PulsingBeaconAnimationStyles, getGlobalClassNames, ThemeSettingName, getTheme, loadTheme, createTheme, registerOnThemeChangeCallback, removeOnThemeChangeCallback, buildClassMap, getIcon, registerIcons, registerIconAlias, setIconOptions, getIconClassName, InjectionMode, Stylesheet, concatStyleSets, fontFace, keyframes, mergeStyleSets, mergeStyles, HighContrastSelector, HighContrastSelectorWhite, HighContrastSelectorBlack, ScreenWidthMinSmall, ScreenWidthMinMedium, ScreenWidthMinLarge, ScreenWidthMinXLarge, ScreenWidthMinXXLarge, ScreenWidthMinXXXLarge, ScreenWidthMaxSmall, ScreenWidthMaxMedium, ScreenWidthMaxLarge, ScreenWidthMaxXLarge, ScreenWidthMaxXXLarge, getScreenSelector, normalize, noWrap, ZIndexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/styling */ "./node_modules/@uifabric/styling/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["FontClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ColorClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["AnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationVariables", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["AnimationVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultPalette", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["DefaultPalette"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultFontStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["DefaultFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerDefaultFontFaces", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerDefaultFontFaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontSizes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FontWeights", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconFontSizes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["IconFontSizes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFontStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["createFontStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFocusStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusClear", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiddenContentStyle", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["hiddenContentStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PulsingBeaconAnimationStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["PulsingBeaconAnimationStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalClassNames", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeSettingName", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ThemeSettingName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["loadTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheme", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["createTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOnThemeChangeCallback", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeOnThemeChangeCallback", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["removeOnThemeChangeCallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClassMap", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["buildClassMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIcons", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIcons"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerIconAlias", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["registerIconAlias"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setIconOptions", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["setIconOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIconClassName", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getIconClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionMode", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["InjectionMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stylesheet", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["Stylesheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatStyleSets", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["fontFace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyleSets", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["mergeStyleSets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["mergeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorWhite", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelectorWhite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HighContrastSelectorBlack", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelectorBlack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinSmall", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinMedium", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMinXXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMinXXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxSmall", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxSmall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxMedium", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxMedium"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenWidthMaxXXLarge", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ScreenWidthMaxXXLarge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScreenSelector", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["getScreenSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["normalize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noWrap", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["noWrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZIndexes", function() { return _uifabric_styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/Utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/Utilities.js ***!
  \**************************************************************/
/*! exports provided: mergeAriaAttributeValues, Async, AutoScroll, BaseComponent, nullRender, provideContext, Customizations, Customizer, DelayedRender, EventGroup, FabricPerformance, GlobalSettings, KeyCodes, Rectangle, findIndex, find, createArray, toMatrix, removeIndex, replaceElement, addElementAtIndex, flatten, arraysEqual, assertNever, autobind, classNamesFunction, createRef, css, CustomizableContextTypes, customizable, setVirtualParent, getVirtualParent, getParent, getChildren, elementContains, setSSR, getWindow, getDocument, getRect, findElementRecursive, elementContainsAttribute, getFirstFocusable, getLastFocusable, getFirstTabbable, getLastTabbable, focusFirstChild, getPreviousElement, getNextElement, isElementVisible, isElementTabbable, isElementFocusZone, isElementFocusSubZone, doesElementContainFocus, shouldWrapFocus, focusAsync, hoistMethods, unhoistMethods, hoistStatics, IsFocusVisibleClassName, initializeFocusRects, getInitials, isDirectionalKeyCode, addDirectionalKeyCode, getLanguage, setLanguage, getDistanceBetweenPoints, fitContentToBounds, calculatePrecision, precisionRound, setMemoizeWeakMap, resetMemoizations, memoize, memoizeFunction, shallowCompare, assign, filteredAssign, getId, resetIds, mapEnumByName, values, hasHorizontalOverflow, hasVerticalOverflow, hasOverflow, baseElementEvents, baseElementProperties, htmlElementProperties, anchorProperties, buttonProperties, divProperties, inputProperties, textAreaProperties, imageProperties, getNativeProps, getResourceUrl, setBaseUrl, getRTL, setRTL, getRTLSafeKeyCode, DATA_IS_SCROLLABLE_ATTRIBUTE, disableBodyScroll, enableBodyScroll, getScrollbarWidth, findScrollableParent, format, styled, warnDeprecations, warnMutuallyExclusive, warnConditionallyRequiredProps, warn, setWarningCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uifabric/utilities */ "./node_modules/@uifabric/utilities/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeAriaAttributeValues", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["mergeAriaAttributeValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Async", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Async"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["AutoScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nullRender", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["nullRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provideContext", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["provideContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Customizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Customizer", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Customizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DelayedRender", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["DelayedRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventGroup", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["EventGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FabricPerformance", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["FabricPerformance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalSettings", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["GlobalSettings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyCodes", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["KeyCodes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createArray", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["createArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMatrix", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["toMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeIndex", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["removeIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["replaceElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addElementAtIndex", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["addElementAtIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["arraysEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNever", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["assertNever"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "autobind", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["autobind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classNamesFunction", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["classNamesFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomizableContextTypes", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["CustomizableContextTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customizable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["customizable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setVirtualParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVirtualParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getVirtualParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContains", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["elementContains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setSSR", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setSSR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getWindow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRect", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getRect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findElementRecursive", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["findElementRecursive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementContainsAttribute", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["elementContainsAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstFocusable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getFirstFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastFocusable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getLastFocusable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstTabbable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getFirstTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLastTabbable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getLastTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusFirstChild", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["focusFirstChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPreviousElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getPreviousElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextElement", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getNextElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementVisible", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["isElementVisible"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementTabbable", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["isElementTabbable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusZone", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["isElementFocusZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementFocusSubZone", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["isElementFocusSubZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesElementContainFocus", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["doesElementContainFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldWrapFocus", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["shouldWrapFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "focusAsync", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["focusAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistMethods", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["hoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unhoistMethods", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["unhoistMethods"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["hoistStatics"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IsFocusVisibleClassName", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["IsFocusVisibleClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeFocusRects", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["initializeFocusRects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitials", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getInitials"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirectionalKeyCode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["isDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addDirectionalKeyCode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["addDirectionalKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceBetweenPoints", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getDistanceBetweenPoints"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContentToBounds", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["fitContentToBounds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculatePrecision", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["calculatePrecision"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["precisionRound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setMemoizeWeakMap", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setMemoizeWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetMemoizations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["resetMemoizations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoizeFunction", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["shallowCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filteredAssign", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["filteredAssign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetIds", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["resetIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapEnumByName", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["mapEnumByName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalOverflow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["hasHorizontalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOverflow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["hasVerticalOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOverflow", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["hasOverflow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementEvents", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["baseElementEvents"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "baseElementProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["baseElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlElementProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["htmlElementProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anchorProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["anchorProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["buttonProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "divProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["divProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["inputProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textAreaProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["textAreaProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "imageProperties", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["imageProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNativeProps", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getNativeProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResourceUrl", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getResourceUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setBaseUrl", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setBaseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTL", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRTL", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRTLSafeKeyCode", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getRTLSafeKeyCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_IS_SCROLLABLE_ATTRIBUTE", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["DATA_IS_SCROLLABLE_ATTRIBUTE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["disableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["enableBodyScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getScrollbarWidth", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["getScrollbarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findScrollableParent", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["findScrollableParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnDeprecations", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["warnDeprecations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnMutuallyExclusive", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["warnMutuallyExclusive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnConditionallyRequiredProps", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["warnConditionallyRequiredProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setWarningCallback", function() { return _uifabric_utilities__WEBPACK_IMPORTED_MODULE_0__["setWarningCallback"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js ***!
  \***************************************************************************/
/*! exports provided: DirectionalHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return DirectionalHint; });
var DirectionalHint;
(function (DirectionalHint) {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topLeftEdge"] = 0] = "topLeftEdge";
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topCenter"] = 1] = "topCenter";
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["topRightEdge"] = 2] = "topRightEdge";
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["topAutoEdge"] = 3] = "topAutoEdge";
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomLeftEdge"] = 4] = "bottomLeftEdge";
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomCenter"] = 5] = "bottomCenter";
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["bottomRightEdge"] = 6] = "bottomRightEdge";
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward the center of the screen.
     */
    DirectionalHint[DirectionalHint["bottomAutoEdge"] = 7] = "bottomAutoEdge";
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftTopEdge"] = 8] = "leftTopEdge";
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftCenter"] = 9] = "leftCenter";
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["leftBottomEdge"] = 10] = "leftBottomEdge";
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightTopEdge"] = 11] = "rightTopEdge";
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightCenter"] = 12] = "rightCenter";
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    DirectionalHint[DirectionalHint["rightBottomEdge"] = 13] = "rightBottomEdge";
})(DirectionalHint || (DirectionalHint = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js ***!
  \************************************************************************************************/
/*! exports provided: ActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ActionButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActionButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js");





var ActionButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ActionButton, _super);
    function ActionButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    ActionButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: Object(_ActionButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    ActionButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('ActionButton', ['theme', 'styles'])
    ], ActionButton);
    return ActionButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.styles.js ***!
  \*******************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");



var DEFAULT_BUTTON_HEIGHT = '40px';
var DEFAULT_PADDING = '0 4px';
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var actionButtonStyles = {
        root: {
            padding: DEFAULT_PADDING,
            height: DEFAULT_BUTTON_HEIGHT,
            color: theme.palette.neutralPrimary,
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themePrimary,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        iconHovered: {
            color: theme.palette.themePrimary
        },
        rootPressed: {
            color: theme.palette.black
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        iconPressed: {
            color: theme.palette.themeDarker
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary,
            backgroundColor: 'transparent'
        },
        rootChecked: {
            color: theme.palette.black
        },
        iconChecked: {
            color: theme.palette.themeDarker
        },
        flexContainer: {
            justifyContent: 'flex-start'
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        iconDisabled: {
            color: 'inherit'
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        },
        textContainer: {
            flexGrow: 0
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, actionButtonStyles, customStyles);
    var _a;
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js ***!
  \********************************************************************************************/
/*! exports provided: getBaseButtonClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseButtonClassNames", function() { return getBaseButtonClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


var getBaseButtonClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var isExpanded = expanded && !isSplit;
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        root: [
            'ms-Button',
            styles.root,
            variantClassName,
            checked && ['is-checked', styles.rootChecked],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: {
                        ':hover .ms-Button-icon': styles.iconExpandedHovered,
                        ':hover .ms-Button-menuIcon': styles.rootExpandedHovered,
                        ':hover': styles.rootExpandedHovered
                    }
                }
            ],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.rootHovered,
                    ':hover .ms-Button-icon': styles.iconHovered,
                    ':hover .ms-Button-description': styles.descriptionHovered,
                    ':hover .ms-Button-menuIcon': styles.menuIconHovered,
                    ':focus': styles.rootFocused,
                    ':active': styles.rootPressed,
                    ':active .ms-Button-icon': styles.iconPressed,
                    ':active .ms-Button-description': styles.descriptionPressed,
                    ':active .ms-Button-menuIcon': styles.menuIconPressed
                }
            },
            disabled && checked && [styles.rootCheckedDisabled],
            !disabled &&
                checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed
                }
            },
            className
        ],
        flexContainer: ['ms-Button-flexContainer', styles.flexContainer],
        textContainer: ['ms-Button-textContainer', styles.textContainer],
        icon: [
            'ms-Button-icon',
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled
        ],
        label: ['ms-Button-label', styles.label, checked && styles.labelChecked, disabled && styles.labelDisabled],
        menuIcon: [
            'ms-Button-menuIcon',
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed
                }
            },
            isExpanded && [
                'is-expanded',
                styles.menuIconExpanded,
                {
                    selectors: {
                        ':hover': styles.menuIconExpandedHovered
                    }
                }
            ]
        ],
        description: [
            'ms-Button-description',
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled
        ],
        screenReaderText: ['ms-Button-screenReaderText', styles.screenReaderText]
    });
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js ***!
  \*********************************************************************************/
/*! exports provided: BaseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return BaseButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon */ "./node_modules/office-ui-fabric-react/lib/Icon.js");
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ContextualMenu */ "./node_modules/office-ui-fabric-react/lib/ContextualMenu.js");
/* harmony import */ var _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseButton.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.classNames.js");
/* harmony import */ var _SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SplitButton/SplitButton.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");








var TouchIdleDelay = 500; /* ms */
var BaseButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._buttonElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._splitButtonContainer = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._onRenderIcon = function (buttonProps, defaultRender) {
            var iconProps = _this.props.iconProps;
            if (iconProps) {
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, iconProps, { className: _this._classNames.icon }));
            }
            return null;
        };
        _this._onRenderTextContents = function () {
            var _a = _this.props, text = _a.text, children = _a.children, _b = _a.secondaryText, secondaryText = _b === void 0 ? _this.props.description : _b, _c = _a.onRenderText, onRenderText = _c === void 0 ? _this._onRenderText : _c, _d = _a.onRenderDescription, onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;
            if (text || typeof children === 'string' || secondaryText) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.textContainer },
                    onRenderText(_this.props, _this._onRenderText),
                    onRenderDescription(_this.props, _this._onRenderDescription)));
            }
            return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
        };
        _this._onRenderText = function () {
            var text = _this.props.text;
            var children = _this.props.children;
            // For backwards compat, we should continue to take in the text content from children.
            if (text === undefined && typeof children === 'string') {
                text = children;
            }
            if (_this._hasText()) {
                return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: _this._labelId, className: _this._classNames.label, id: _this._labelId }, text));
            }
            return null;
        };
        _this._onRenderChildren = function () {
            var children = _this.props.children;
            // If children is just a string, either it or the text will be rendered via onRenderLabel
            // If children is another component, it will be rendered after text
            if (typeof children === 'string') {
                return null;
            }
            return children;
        };
        _this._onRenderDescription = function (props) {
            var _a = props.secondaryText, secondaryText = _a === void 0 ? _this.props.description : _a;
            // ms-Button-description is only shown when the button type is compound.
            // In other cases it will not be displayed.
            return secondaryText ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: _this._descriptionId, className: _this._classNames.description, id: _this._descriptionId }, secondaryText)) : null;
        };
        _this._onRenderAriaDescription = function () {
            var ariaDescription = _this.props.ariaDescription;
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
            // otherwise it will be assigned to descriptionSpan.
            return ariaDescription ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: _this._classNames.screenReaderText, id: _this._ariaDescriptionId }, ariaDescription)) : null;
        };
        _this._onRenderMenuIcon = function (props) {
            var menuIconProps = _this.props.menuIconProps;
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ iconName: "ChevronDown" }, menuIconProps, { className: _this._classNames.menuIcon }));
        };
        _this._onRenderMenu = function (menuProps) {
            var _a = menuProps.onDismiss, onDismiss = _a === void 0 ? _this._dismissMenu : _a;
            var MenuType = _this.props.menuAs || _ContextualMenu__WEBPACK_IMPORTED_MODULE_4__["ContextualMenu"];
            // the accessible menu label (accessible name) has a relationship to the button.
            // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
            // AND the button has text, we'll set the menu aria-labelledBy to the text element id.
            if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
                menuProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, menuProps, { labelElementId: _this._labelId });
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MenuType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: _this._labelId + '-menu', directionalHint: 4 /* bottomLeftEdge */ }, menuProps, { shouldFocusOnContainer: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnContainer : undefined, shouldFocusOnMount: _this.state.menuProps ? _this.state.menuProps.shouldFocusOnMount : undefined, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-BaseButton-menuhost', menuProps.className), target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current, onDismiss: onDismiss })));
        };
        _this._dismissMenu = function () {
            var menuProps = null;
            if (_this.props.persistMenu && _this.state.menuProps) {
                menuProps = _this.state.menuProps;
                menuProps.hidden = true;
            }
            _this.setState({ menuProps: menuProps });
        };
        _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
            if (shouldFocusOnMount === void 0) { shouldFocusOnMount = true; }
            if (_this.props.menuProps) {
                var menuProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.props.menuProps, { shouldFocusOnContainer: shouldFocusOnContainer, shouldFocusOnMount: shouldFocusOnMount });
                if (_this.props.persistMenu) {
                    menuProps.hidden = false;
                }
                _this.setState({ menuProps: menuProps });
            }
        };
        _this._onToggleMenu = function (shouldFocusOnContainer) {
            if (_this._splitButtonContainer.current) {
                _this._splitButtonContainer.current.focus();
            }
            var currentMenuProps = _this.state.menuProps;
            var shouldFocusOnMount = true;
            if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
                shouldFocusOnMount = false;
            }
            if (_this.props.persistMenu) {
                currentMenuProps && currentMenuProps.hidden
                    ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount)
                    : _this._dismissMenu();
            }
            else {
                currentMenuProps ? _this._dismissMenu() : _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
            }
        };
        _this._onSplitButtonPrimaryClick = function (ev) {
            if (_this._isExpanded) {
                _this._dismissMenu();
            }
            if (!_this._processingTouch && _this.props.onClick) {
                _this.props.onClick(ev);
            }
            else if (_this._processingTouch) {
                _this._onMenuClick(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            // explicity cancelling event so click won't fire after this
            if (_this.props.disabled && (ev.which === 13 /* enter */ || ev.which === 32 /* space */)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuKeyDown(ev);
                }
                else if (_this.props.onKeyDown !== undefined) {
                    _this.props.onKeyDown(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onKeyUp = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
                _this.props.onKeyUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onKeyPress = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
                _this.props.onKeyPress(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseUp = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
                _this.props.onMouseUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseDown = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
                _this.props.onMouseDown(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onClick = function (ev) {
            if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuClick(ev);
                }
                else if (_this.props.onClick !== undefined) {
                    _this.props.onClick(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onSplitButtonContainerKeyDown = function (ev) {
            if (ev.which === 13 /* enter */) {
                if (_this._buttonElement.current) {
                    _this._buttonElement.current.click();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                _this._onMenuKeyDown(ev);
            }
        };
        _this._onMenuKeyDown = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
                var onMenuClick = _this.props.onMenuClick;
                if (onMenuClick) {
                    onMenuClick(ev, _this);
                }
                _this._onToggleMenu(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._onTouchStart = function () {
            if (_this._isSplitButton &&
                _this._splitButtonContainer.value &&
                !('onpointerdown' in _this._splitButtonContainer.value)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onMenuClick = function (ev) {
            var onMenuClick = _this.props.onMenuClick;
            if (onMenuClick) {
                onMenuClick(ev, _this);
            }
            if (!ev.defaultPrevented) {
                // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                // between a real click event and a keypress event.
                var shouldFocusOnContainer = ev.nativeEvent.detail !== 0;
                _this._onToggleMenu(shouldFocusOnContainer);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);
        _this._warnDeprecations({
            rootProps: undefined,
            description: 'secondaryText'
        });
        _this._labelId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        _this._descriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        _this._ariaDescriptionId = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getId"])();
        var menuProps = null;
        if (props.persistMenu && props.menuProps) {
            menuProps = props.menuProps;
            menuProps.hidden = true;
        }
        _this.state = {
            menuProps: menuProps
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseButton.prototype, "_isExpanded", {
        get: function () {
            if (this.props.persistMenu) {
                return !this.state.menuProps.hidden;
            }
            return !!this.state.menuProps;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, primaryDisabled = _a.primaryDisabled, _b = _a.secondaryText, secondaryText = _b === void 0 ? this.props.description : _b, href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, text = _a.text, checked = _a.checked, variantClassName = _a.variantClassName, theme = _a.theme, getClassNames = _a.getClassNames;
        var menuProps = this.state.menuProps;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = disabled || primaryDisabled;
        this._classNames = getClassNames
            ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!menuProps, this.props.split, !!allowDisabledFocus)
            : Object(_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_5__["getBaseButtonClassNames"])(styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!menuProps, this.props.split);
        var _c = this, _ariaDescriptionId = _c._ariaDescriptionId, _labelId = _c._labelId, _descriptionId = _c._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? _Utilities__WEBPACK_IMPORTED_MODULE_2__["anchorProperties"] : _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"], [
            'disabled' // let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to undefined so property does not appear in output.
        var ariaDescribedBy = undefined;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (secondaryText) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = undefined;
        if (!ariaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = text ? _labelId : undefined;
            }
        }
        var dataIsFocusable = this.props['data-is-focusable'] === false || (disabled && !allowDisabledFocus) || this._isSplitButton
            ? false
            : true;
        var buttonProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(nativeProps, {
            className: this._classNames.root,
            ref: this._buttonElement,
            disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
            onKeyDown: this._onKeyDown,
            onKeyPress: this._onKeyPress,
            onKeyUp: this._onKeyUp,
            onMouseDown: this._onMouseDown,
            onMouseUp: this._onMouseUp,
            onClick: this._onClick,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': ariaDescribedBy,
            'aria-disabled': isPrimaryButtonDisabled,
            'data-is-focusable': dataIsFocusable,
            'aria-pressed': checked
        });
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return this._onRenderSplitButtonContent(tag, buttonProps);
        }
        else if (this.props.menuProps) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(buttonProps, {
                'aria-expanded': this._isExpanded,
                'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
                'aria-haspopup': true
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidMount = function () {
        // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the primary action.
        // This gives more hit target space for touch environments. We're setting the onpointerdown here, because React
        // does not support Pointer events yet.
        if (this._isSplitButton &&
            this._splitButtonContainer.value &&
            'onpointerdown' in this._splitButtonContainer.value) {
            this._events.on(this._splitButtonContainer.value, 'pointerdown', this._onPointerDown, true);
        }
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss
        if (this.props.onAfterMenuDismiss && prevState.menuProps && !this.state.menuProps) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.focus = function () {
        if (this._isSplitButton && this._splitButtonContainer.current) {
            this._splitButtonContainer.current.focus();
        }
        else if (this._buttonElement.current) {
            this._buttonElement.current.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this._dismissMenu();
    };
    BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
        this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var _this = this;
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, _d = props.onRenderMenu, onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e, disabled = props.disabled;
        var keytipProps = props.keytipProps;
        if (keytipProps && menuProps) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        var Content = (
        // If we're making a split button, we won't put the keytip here
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_7__["KeytipData"], { keytipProps: !this._isSplitButton ? keytipProps : undefined, ariaDescribedBy: buttonProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tag, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, buttonProps, keytipAttributes),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: _this._classNames.flexContainer },
                onRenderIcon(props, _this._onRenderIcon),
                _this._onRenderTextContents(),
                onRenderAriaDescription(props, _this._onRenderAriaDescription),
                onRenderChildren(props, _this._onRenderChildren),
                !_this._isSplitButton &&
                    (menuProps || menuIconProps || _this.props.onRenderMenuIcon) &&
                    onRenderMenuIcon(_this.props, _this._onRenderMenuIcon),
                _this.state.menuProps && !_this.state.menuProps.doNotLayer && onRenderMenu(menuProps, _this._onRenderMenu)))); }));
        if (menuProps && menuProps.doNotLayer) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { display: 'inline-block' } },
                Content,
                this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return Content;
    };
    BaseButton.prototype._hasText = function () {
        // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText used to have
        // before the refactor that introduced this function. _onRenderTextContents does not require props.text to be undefined in order
        // for props.children to be used as a fallback. Purely a code maintainability/reuse issue, but logged as Issue #4979
        return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _this = this;
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames, primaryDisabled = _a.primaryDisabled, menuProps = _a.menuProps;
        var keytipProps = this.props.keytipProps;
        var classNames = getSplitButtonClassNames
            ? getSplitButtonClassNames(!!disabled, !!this.state.menuProps, !!checked, !!allowDisabledFocus)
            : styles && Object(_SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_6__["getClassNames"])(styles, !!disabled, !!this.state.menuProps, !!checked);
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(buttonProps, {
            onClick: undefined,
            tabIndex: -1,
            'data-is-focusable': false
        });
        var ariaDescribedBy = buttonProps.ariaDescription;
        if (keytipProps && menuProps) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        var containerProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(buttonProps, [], ['disabled']);
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_7__["KeytipData"], { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, containerProps, { "data-ktp-target": keytipAttributes['data-ktp-target'], role: 'button', "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": _this._isExpanded, "aria-pressed": _this.props.checked, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(ariaDescribedBy, keytipAttributes['aria-describedby']), className: classNames && classNames.splitButtonContainer, onKeyDown: _this._onSplitButtonContainerKeyDown, onTouchStart: _this._onTouchStart, ref: _this._splitButtonContainer, "data-is-focusable": true, onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined, tabIndex: !disabled || allowDisabledFocus ? 0 : undefined, "aria-roledescription": buttonProps['aria-roledescription'] }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { style: { display: 'flex' } },
                _this._onRenderContent(tag, buttonProps),
                _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes),
                _this._onRenderSplitButtonDivider(classNames)))); }));
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.divider });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
        var _a = this.props, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, disabled = _a.disabled;
        var menuIconProps = this.props.menuIconProps;
        var splitButtonAriaLabel = this.props.splitButtonAriaLabel;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown'
            };
        }
        var splitButtonProps = {
            styles: classNames,
            checked: checked,
            disabled: disabled,
            allowDisabledFocus: allowDisabledFocus,
            onClick: this._onMenuClick,
            menuProps: undefined,
            iconProps: menuIconProps,
            ariaLabel: splitButtonAriaLabel,
            'aria-haspopup': true,
            'aria-expanded': this._isExpanded,
            'data-is-focusable': false
        };
        // Add data-ktp-execute-target to the split button if the keytip is defined
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BaseButton, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, splitButtonProps, { "data-ktp-execute-target": keytipAttributes['data-ktp-execute-target'], onMouseDown: this._onMouseDown, tabIndex: -1 })));
    };
    BaseButton.prototype._onPointerDown = function (ev) {
        if (ev.pointerType === 'touch') {
            this._handleTouchAndPointerEvent();
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    };
    BaseButton.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeeout from a previous touch and pointer event
        // cancel that timeout so we can set a nwe one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    BaseButton.prototype._isValidMenuOpenKey = function (ev) {
        if (this.props.menuTriggerKeyCode) {
            return ev.which === this.props.menuTriggerKeyCode;
        }
        else if (this.props.menuProps) {
            return ev.which === 40 /* down */ && (ev.altKey || ev.metaKey);
        }
        // Note: When enter is pressed, we will let the event continue to propagate
        // to trigger the onClick event on the button
        return false;
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        styles: {},
        split: false
    };
    return BaseButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js ***!
  \****************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


var noOutline = {
    outline: 0
};
var iconStyle = {
    fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].icon,
    margin: '0 4px',
    height: '16px',
    lineHeight: '16px',
    textAlign: 'center',
    verticalAlign: 'middle',
    flexShrink: 0
};
/**
 * Gets the base button styles. Note: because it is a base class to be used with the `mergeRules`
 * helper, it should have values for all class names in the interface. This let `mergeRules` optimize
 * mixing class names together.
 */
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme) {
    var semanticColors = theme.semanticColors;
    var border = semanticColors.buttonBorder;
    var disabledBackground = semanticColors.disabledBackground;
    var disabledText = semanticColors.disabledText;
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none',
        outlineColor: 'ButtonText'
    };
    return {
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, -1, 'relative', buttonHighContrastFocus),
            theme.fonts.medium,
            {
                boxSizing: 'border-box',
                border: '1px solid ' + border,
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                padding: '0 16px',
                borderRadius: 0
            }
        ],
        rootDisabled: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme, -1, 'relative', buttonHighContrastFocus),
            {
                backgroundColor: disabledBackground,
                color: disabledText,
                cursor: 'default',
                pointerEvents: 'none',
                selectors: (_a = {
                        ':hover': noOutline,
                        ':focus': noOutline
                    },
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                        color: 'grayText',
                        bordercolor: 'grayText'
                    },
                    _a)
            }
        ],
        iconDisabled: {
            color: disabledText
        },
        menuIconDisabled: {
            color: disabledText
        },
        flexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        textContainer: {
            flexGrow: 1
        },
        icon: iconStyle,
        menuIcon: [
            iconStyle,
            {
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].small
            }
        ],
        label: {
            margin: '0 4px',
            lineHeight: '100%'
        },
        screenReaderText: _Styling__WEBPACK_IMPORTED_MODULE_1__["hiddenContentStyle"]
    };
    var _a;
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/Button.js ***!
  \*****************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.types */ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionButton/ActionButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js");
/* harmony import */ var _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompoundButton/CompoundButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js");
/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconButton/IconButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js");
/* harmony import */ var _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrimaryButton/PrimaryButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js");









/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated
 */
var Button = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["warn"])("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].command:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_5__["ActionButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].compound:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__["CompoundButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].icon:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_7__["IconButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            case _Button_types__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].primary:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_8__["PrimaryButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
            default:
                return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_4__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props));
        }
    };
    return Button;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js ***!
  \***********************************************************************************/
/*! exports provided: ElementType, ButtonType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return ElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
var ElementType;
(function (ElementType) {
    /** <button> element. */
    ElementType[ElementType["button"] = 0] = "button";
    /** <a> element. */
    ElementType[ElementType["anchor"] = 1] = "anchor";
})(ElementType || (ElementType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["normal"] = 0] = "normal";
    ButtonType[ButtonType["primary"] = 1] = "primary";
    ButtonType[ButtonType["hero"] = 2] = "hero";
    ButtonType[ButtonType["compound"] = 3] = "compound";
    ButtonType[ButtonType["command"] = 4] = "command";
    ButtonType[ButtonType["icon"] = 5] = "icon";
    ButtonType[ButtonType["default"] = 6] = "default";
})(ButtonType || (ButtonType = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js ***!
  \***********************************************************************************/
/*! exports provided: standardStyles, primaryStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardStyles", function() { return standardStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryStyles", function() { return primaryStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

function standardStyles(theme) {
    var s = theme.semanticColors;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundChecked = s.buttonBackgroundChecked;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        rootPressed: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootChecked: {
            backgroundColor: buttonBackgroundChecked,
            color: buttonTextChecked
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: buttonTextCheckedHovered
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: 'none'
                },
                _b)
        },
        splitButtonMenuButton: {
            color: theme.palette.white,
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    selectors: (_c = {},
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'Highlight'
                        },
                        _c)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themePrimary
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralLight
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c;
}
function primaryStyles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        rootHovered: {
            backgroundColor: theme.palette.themeDarkAlt,
            color: theme.palette.white,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'Highlight'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white,
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _c)
        },
        rootExpanded: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootChecked: {
            backgroundColor: theme.palette.themeDark,
            color: theme.palette.white
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white
        },
        rootDisabled: {
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window'
                },
                _d)
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: 'none'
                },
                _e)
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.themeLighter
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.themePrimary,
            color: theme.palette.white,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.themeDark,
                    selectors: (_f = {},
                        _f[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'Highlight'
                        },
                        _f)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.themeDark
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.themeDark
        },
        splitButtonMenuIcon: {
            color: theme.palette.white
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    var _a, _b, _c, _d, _e, _f;
}


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js ***!
  \********************************************************************************************************/
/*! exports provided: CommandBarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return CommandBarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CommandBarButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandBarButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js");





var CommandBarButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CommandBarButton, _super);
    function CommandBarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CommandBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: "ms-Button--commandBar", styles: Object(_CommandBarButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    CommandBarButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('CommandBarButton', ['theme', 'styles'])
    ], CommandBarButton);
    return CommandBarButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.styles.js ***!
  \***************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");




var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var baseSplitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var commandButtonHighContrastFocus = {
        left: 4,
        top: 4,
        bottom: 4,
        right: 4,
        border: 'none'
    };
    var commandButtonStyles = {
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, -1, 'relative', commandButtonHighContrastFocus),
            {
                minWidth: '40px',
                backgroundColor: theme.palette.neutralLighter,
                color: theme.palette.neutralPrimary,
                padding: '0 4px',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        border: 'none'
                    },
                    _a)
            }
        ],
        rootHovered: {
            backgroundColor: theme.palette.neutralLight,
            color: theme.palette.neutralDark,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Highlight'
                },
                _b)
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralQuaternary,
            color: theme.palette.black
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    border: 'none'
                },
                _c)
        },
        splitButtonDivider: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            marginTop: 4,
            marginBottom: 4
        },
        splitButtonMenuButton: {
            backgroundColor: theme.palette.neutralLighter,
            color: theme.palette.neutralPrimary,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLight,
                    color: theme.palette.neutralDark,
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                            color: 'Highlight'
                        },
                        _d)
                }
            }
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: theme.palette.neutralLighter,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralLighter
                }
            }
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternaryAlt
                }
            }
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.black,
            selectors: {
                ':hover': {
                    backgroundColor: theme.palette.neutralQuaternaryAlt
                }
            }
        },
        splitButtonMenuIcon: {
            color: theme.palette.neutralPrimary
        },
        splitButtonMenuIconDisabled: {
            color: theme.palette.neutralTertiary
        },
        label: {
            fontWeight: 'normal' // theme.fontWeights.semibold,
        },
        icon: {
            color: theme.palette.themeDarkAlt
        },
        menuIcon: {
            color: theme.palette.neutralSecondary
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, commandButtonStyles, baseSplitButtonStyles, customStyles);
    var _a, _b, _c, _d;
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js ***!
  \**************************************************************************************************/
/*! exports provided: CommandButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return CommandButton; });
/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ActionButton/ActionButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js");

var CommandButton = _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__["ActionButton"];


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js ***!
  \****************************************************************************************************/
/*! exports provided: CompoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return CompoundButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CompoundButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompoundButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js");





var CompoundButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompoundButton, _super);
    function CompoundButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    CompoundButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: primary ? 'ms-Button--compoundPrimary' : 'ms-Button--compound', styles: Object(_CompoundButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles, primary) })));
    };
    CompoundButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('CompoundButton', ['theme', 'styles'])
    ], CompoundButton);
    return CompoundButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.styles.js ***!
  \***********************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");
/* harmony import */ var _ButtonThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonThemes */ "./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js");





var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, primary) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var compoundButtonStyles = {
        root: {
            maxWidth: '280px',
            minHeight: '72px',
            height: 'auto',
            padding: '20px'
        },
        flexContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            minWidth: '100%',
            margin: ''
        },
        textContainer: {
            textAlign: 'left'
        },
        icon: {
            fontSize: '2em',
            lineHeight: '1em',
            height: '1em',
            margin: '0px 8px 0px 0px',
            flexBasis: '1em',
            flexShrink: '0'
        },
        label: {
            margin: '0 0 5px',
            lineHeight: '100%',
            fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold
        },
        description: [
            theme.fonts.small,
            {
                lineHeight: '100%'
            }
        ]
    };
    var standardCompoundTheme = {
        description: {
            color: theme.palette.neutralSecondary
        },
        descriptionHovered: {
            color: theme.palette.neutralDark
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit'
        }
    };
    var primaryCompoundTheme = {
        description: {
            color: theme.palette.white,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'WindowText',
                    MsHighContrastAdjust: 'none'
                },
                _a)
        },
        descriptionHovered: {
            color: theme.palette.white,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'Window',
                    backgroundColor: 'Highlight',
                    MsHighContrastAdjust: 'none'
                },
                _b)
        },
        descriptionPressed: {
            color: 'inherit'
        },
        descriptionChecked: {
            color: 'inherit'
        },
        descriptionDisabled: {
            color: 'inherit',
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    color: 'inherit'
                },
                _c)
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, compoundButtonStyles, primary ? Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["primaryStyles"])(theme) : Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["standardStyles"])(theme), primary ? primaryCompoundTheme : standardCompoundTheme, splitButtonStyles, customStyles);
    var _a, _b, _c;
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js ***!
  \**************************************************************************************************/
/*! exports provided: DefaultButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return DefaultButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _DefaultButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js");





var DefaultButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DefaultButton, _super);
    function DefaultButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: Object(_DefaultButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles, primary), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    DefaultButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('DefaultButton', ['theme', 'styles'])
    ], DefaultButton);
    return DefaultButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.styles.js ***!
  \*********************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");
/* harmony import */ var _ButtonThemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ButtonThemes */ "./node_modules/office-ui-fabric-react/lib/components/Button/ButtonThemes.js");





var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, primary) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT
        },
        label: {
            fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, defaultButtonStyles, primary ? Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["primaryStyles"])(theme) : Object(_ButtonThemes__WEBPACK_IMPORTED_MODULE_4__["standardStyles"])(theme), splitButtonStyles, customStyles);
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js ***!
  \********************************************************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _IconButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js");





var IconButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconButton, _super);
    function IconButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_BaseButton__WEBPACK_IMPORTED_MODULE_2__["BaseButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { variantClassName: "ms-Button--icon", styles: Object(_IconButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderText: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"], onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] })));
    };
    IconButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('IconButton', ['theme', 'styles'])
    ], IconButton);
    return IconButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.styles.js ***!
  \***************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");
/* harmony import */ var _SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SplitButton/SplitButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js");




var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var splitButtonStyles = Object(_SplitButton_SplitButton_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"])(theme);
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: palette.themeDarker,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                    borderColor: 'Highlight',
                    color: 'Highlight'
                },
                _a)
        },
        rootPressed: {
            color: palette.themePrimary
        },
        rootExpanded: {
            color: palette.themePrimary
        },
        rootChecked: {
            backgroundColor: semanticColors.buttonBackgroundChecked
        },
        rootCheckedHovered: {
            backgroundColor: semanticColors.buttonBackgroundHovered
        },
        rootDisabled: {
            color: semanticColors.disabledText
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
    var _a;
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js ***!
  \********************************************************************************************************/
/*! exports provided: MessageBarButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return MessageBarButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _MessageBarButton_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageBarButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js");





var MessageBarButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageBarButton, _super);
    function MessageBarButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { styles: Object(_MessageBarButton_styles__WEBPACK_IMPORTED_MODULE_4__["getStyles"])(theme, styles), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__["nullRender"] }));
    };
    MessageBarButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["customizable"])('MessageBarButton', ['theme', 'styles'])
    ], MessageBarButton);
    return MessageBarButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.styles.js ***!
  \***************************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BaseButton.styles */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.styles.js");



var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles, focusInset, focusColor) {
    var baseButtonStyles = Object(_BaseButton_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])(theme);
    var messageBarButtonStyles = {
        root: {
            backgroundColor: theme.palette.neutralQuaternaryAlt,
            color: theme.palette.neutralPrimary
        },
        rootHovered: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
            color: theme.palette.neutralDark
        },
        rootPressed: {
            backgroundColor: theme.palette.neutralTertiary,
            color: theme.palette.neutralDark
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(baseButtonStyles, messageBarButtonStyles, customStyles);
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js ***!
  \**************************************************************************************************/
/*! exports provided: PrimaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");




var PrimaryButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrimaryButton, _super);
    function PrimaryButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        return _this;
    }
    PrimaryButton.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_3__["DefaultButton"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { primary: true, onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_2__["nullRender"] }));
    };
    PrimaryButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["customizable"])('PrimaryButton', ['theme', 'styles'])
    ], PrimaryButton);
    return PrimaryButton;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.classNames.js ***!
  \*********************************************************************************************************/
/*! exports provided: getClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassNames", function() { return getClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (styles, disabled, expanded, checked) {
    return {
        root: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonMenuButton, expanded && [styles.splitButtonMenuButtonExpanded], disabled && [styles.splitButtonMenuButtonDisabled], checked && !disabled && [styles.splitButtonMenuButtonChecked]),
        splitButtonContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonContainer, checked &&
            !disabled && [
            styles.splitButtonContainerChecked,
            {
                selectors: {
                    ':hover': styles.splitButtonContainerCheckedHovered
                }
            }
        ], !disabled &&
            !checked && [
            {
                selectors: {
                    ':hover': styles.splitButtonContainerHovered,
                    ':focus': styles.splitButtonContainerFocused
                }
            }
        ], disabled && styles.splitButtonContainerDisabled),
        icon: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonMenuIcon, disabled && styles.splitButtonMenuIconDisabled),
        flexContainer: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonFlexContainer),
        divider: Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyles"])(styles.splitButtonDivider)
    };
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/SplitButton/SplitButton.styles.js ***!
  \*****************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["memoizeFunction"])(function (theme, customStyles) {
    var buttonHighContrastFocus = {
        left: -2,
        top: -2,
        bottom: -2,
        right: -2,
        border: 'none'
    };
    var splitButtonStyles = {
        splitButtonContainer: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme, 0, 'relative', buttonHighContrastFocus),
            {
                display: 'inline-flex'
            }
        ],
        splitButtonContainerFocused: {
            outline: 'none!important'
        },
        splitButtonMenuButton: {
            padding: 6,
            height: 'auto',
            boxSizing: 'border-box',
            border: 0,
            borderRadius: 0,
            outline: 'transparent',
            userSelect: 'none',
            display: 'inline-block',
            textDecoration: 'none',
            textAlign: 'center',
            cursor: 'pointer',
            verticalAlign: 'top',
            width: 32,
            marginLeft: -1
        },
        splitButtonDivider: {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8
        },
        splitButtonMenuButtonDisabled: {
            pointerEvents: 'none',
            selectors: {
                ':hover': {
                    cursor: 'default'
                }
            }
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        splitButtonContainerDisabled: {
            outline: 'none',
            border: 'none'
        }
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["concatStyleSets"])(splitButtonStyles, customStyles);
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Button/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Button/index.js ***!
  \****************************************************************************/
/*! exports provided: BaseButton, ElementType, ButtonType, Button, ActionButton, CommandBarButton, CommandButton, CompoundButton, DefaultButton, MessageBarButton, PrimaryButton, IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/BaseButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseButton", function() { return _BaseButton__WEBPACK_IMPORTED_MODULE_0__["BaseButton"]; });

/* harmony import */ var _Button_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.types */ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementType", function() { return _Button_types__WEBPACK_IMPORTED_MODULE_1__["ElementType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _Button_types__WEBPACK_IMPORTED_MODULE_1__["ButtonType"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./node_modules/office-ui-fabric-react/lib/components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_2__["Button"]; });

/* harmony import */ var _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionButton/ActionButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/ActionButton/ActionButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_3__["ActionButton"]; });

/* harmony import */ var _CommandBarButton_CommandBarButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandBarButton/CommandBarButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandBarButton/CommandBarButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandBarButton", function() { return _CommandBarButton_CommandBarButton__WEBPACK_IMPORTED_MODULE_4__["CommandBarButton"]; });

/* harmony import */ var _CommandButton_CommandButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommandButton/CommandButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CommandButton/CommandButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandButton", function() { return _CommandButton_CommandButton__WEBPACK_IMPORTED_MODULE_5__["CommandButton"]; });

/* harmony import */ var _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompoundButton/CompoundButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompoundButton", function() { return _CompoundButton_CompoundButton__WEBPACK_IMPORTED_MODULE_6__["CompoundButton"]; });

/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DefaultButton/DefaultButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/DefaultButton/DefaultButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultButton", function() { return _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_7__["DefaultButton"]; });

/* harmony import */ var _MessageBarButton_MessageBarButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessageBarButton/MessageBarButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/MessageBarButton/MessageBarButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBarButton", function() { return _MessageBarButton_MessageBarButton__WEBPACK_IMPORTED_MODULE_8__["MessageBarButton"]; });

/* harmony import */ var _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrimaryButton/PrimaryButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/PrimaryButton/PrimaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _PrimaryButton_PrimaryButton__WEBPACK_IMPORTED_MODULE_9__["PrimaryButton"]; });

/* harmony import */ var _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconButton/IconButton */ "./node_modules/office-ui-fabric-react/lib/components/Button/IconButton/IconButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _IconButton_IconButton__WEBPACK_IMPORTED_MODULE_10__["IconButton"]; });














/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js ***!
  \*******************************************************************************/
/*! exports provided: Callout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return Callout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CalloutContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CalloutContent */ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js");
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Layer */ "./node_modules/office-ui-fabric-react/lib/Layer.js");





var Callout = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Callout, _super);
    function Callout(props) {
        return _super.call(this, props) || this;
    }
    Callout.prototype.render = function () {
        var content = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_CalloutContent__WEBPACK_IMPORTED_MODULE_3__["CalloutContent"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props));
        return this.props.doNotLayer ? content : react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Layer__WEBPACK_IMPORTED_MODULE_4__["Layer"], null, content);
    };
    return Callout;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js ***!
  \*******************************************************************************************/
/*! exports provided: CalloutContentBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutContentBase", function() { return CalloutContentBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/positioning */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Popup */ "./node_modules/office-ui-fabric-react/lib/Popup.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");







var ANIMATIONS = (_a = {},
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].top] = _Styling__WEBPACK_IMPORTED_MODULE_5__["AnimationClassNames"].slideUpIn10,
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].bottom] = _Styling__WEBPACK_IMPORTED_MODULE_5__["AnimationClassNames"].slideDownIn10,
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].left] = _Styling__WEBPACK_IMPORTED_MODULE_5__["AnimationClassNames"].slideLeftIn10,
    _a[_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["RectangleEdge"].right] = _Styling__WEBPACK_IMPORTED_MODULE_5__["AnimationClassNames"].slideRightIn10,
    _a);
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var BORDER_WIDTH = 1;
var BEAK_ORIGIN_POSITION = { top: 0, left: 0 };
// Microsoft Edge will overwrite inline styles if there is an animation pertaining to that style.
// To help ensure that edge will respect the offscreen style opacity
// filter needs to be added as an additional way to set opacity.
var OFF_SCREEN_STYLE = { opacity: 0, filter: 'opacity(0)' };
var CalloutContentBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CalloutContentBase, _super);
    function CalloutContentBase(props) {
        var _this = _super.call(this, props) || this;
        _this._hostElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._calloutElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._hasListeners = false;
        _this.dismiss = function (ev) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev);
            }
        };
        _this._setInitialFocus = function () {
            if (_this.props.setInitialFocus &&
                !_this._didSetInitialFocus &&
                _this.state.positions &&
                _this._calloutElement.current) {
                _this._didSetInitialFocus = true;
                _this._async.requestAnimationFrame(function () { return Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["focusFirstChild"])(_this._calloutElement.current); });
            }
        };
        _this._onComponentDidMount = function () {
            _this._addListeners();
            if (_this.props.onLayerMounted) {
                _this.props.onLayerMounted();
            }
            _this._updateAsyncPosition();
            _this._setHeightOffsetEveryFrame();
        };
        _this._didSetInitialFocus = false;
        _this.state = {
            positions: undefined,
            slideDirectionalClassName: undefined,
            // @TODO it looks like this is not even being used anymore.
            calloutElementRect: undefined,
            heightOffset: 0
        };
        _this._positionAttempts = 0;
        return _this;
    }
    CalloutContentBase.prototype.componentDidUpdate = function () {
        this._setInitialFocus();
        if (!this.props.hidden) {
            if (!this._hasListeners) {
                this._addListeners();
            }
            this._updateAsyncPosition();
        }
        else {
            if (this._hasListeners) {
                this._removeListeners();
            }
        }
    };
    CalloutContentBase.prototype.componentWillMount = function () {
        this._setTargetWindowAndElement(this._getTarget());
    };
    CalloutContentBase.prototype.componentWillUpdate = function (newProps) {
        // If the target element changed, find the new one. If we are tracking target with class name, always find element because we do not know if fabric has rendered a new element and disposed the old element.
        var newTarget = this._getTarget(newProps);
        var oldTarget = this._getTarget();
        if (newTarget !== oldTarget || typeof newTarget === 'string' || newTarget instanceof String) {
            this._maxHeight = undefined;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.gapSpace !== this.props.gapSpace || this.props.beakWidth !== newProps.beakWidth) {
            this._maxHeight = undefined;
        }
        if (newProps.finalHeight !== this.props.finalHeight) {
            this._setHeightOffsetEveryFrame();
        }
        // if the callout becomes hidden, then remove any positions that were placed on it.
        if (newProps.hidden && newProps.hidden !== this.props.hidden) {
            this.setState({
                positions: undefined
            });
        }
    };
    CalloutContentBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onComponentDidMount();
        }
    };
    CalloutContentBase.prototype.render = function () {
        // If there is no target window then we are likely in server side rendering and we should not render anything.
        if (!this._targetWindow) {
            return null;
        }
        var target = this.props.target;
        var _a = this.props, styles = _a.styles, role = _a.role, ariaLabel = _a.ariaLabel, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className, isBeakVisible = _a.isBeakVisible, children = _a.children, beakWidth = _a.beakWidth, calloutWidth = _a.calloutWidth, calloutMaxWidth = _a.calloutMaxWidth, finalHeight = _a.finalHeight, backgroundColor = _a.backgroundColor, calloutMaxHeight = _a.calloutMaxHeight, onScroll = _a.onScroll;
        target = this._getTarget();
        var positions = this.state.positions;
        var getContentMaxHeight = this._getMaxHeight()
            ? this._getMaxHeight() + this.state.heightOffset
            : undefined;
        var contentMaxHeight = calloutMaxHeight && getContentMaxHeight && calloutMaxHeight < getContentMaxHeight
            ? calloutMaxHeight
            : getContentMaxHeight;
        var overflowYHidden = !!finalHeight;
        var beakVisible = isBeakVisible && !!target;
        this._classNames = getClassNames(styles, {
            theme: this.props.theme,
            className: className,
            overflowYHidden: overflowYHidden,
            calloutWidth: calloutWidth,
            positions: positions,
            beakWidth: beakWidth,
            backgroundColor: backgroundColor,
            calloutMaxWidth: calloutMaxWidth
        });
        var overflowStyle = overflowYHidden
            ? { overflowY: 'hidden', maxHeight: contentMaxHeight }
            : { maxHeight: contentMaxHeight };
        var visibilityStyle = this.props.hidden ? { visibility: 'hidden' } : undefined;
        // React.CSSProperties does not understand IRawStyle, so the inline animations will need to be cast as any for now.
        var content = (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: this._hostElement, className: this._classNames.container, style: visibilityStyle },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])(this._classNames.root, positions && positions.targetEdge && ANIMATIONS[positions.targetEdge]), style: positions ? positions.elementPosition : OFF_SCREEN_STYLE, tabIndex: -1, 
                // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
                ref: this._calloutElement },
                beakVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.beak, style: this._getBeakPosition() }),
                beakVisible && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.beakCurtain }),
                !this.props.hidden && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Popup__WEBPACK_IMPORTED_MODULE_4__["Popup"], { role: role, ariaLabel: ariaLabel, ariaDescribedBy: ariaDescribedBy, ariaLabelledBy: ariaLabelledBy, className: this._classNames.calloutMain, onDismiss: this.dismiss, onScroll: onScroll, shouldRestoreFocus: true, style: overflowStyle }, children)))));
        return content;
    };
    CalloutContentBase.prototype._dismissOnScroll = function (ev) {
        var preventDismissOnScroll = this.props.preventDismissOnScroll;
        if (this.state.positions && !preventDismissOnScroll) {
            this._dismissOnLostFocus(ev);
        }
    };
    CalloutContentBase.prototype._dismissOnLostFocus = function (ev) {
        var target = ev.target;
        var clickedOutsideCallout = this._hostElement.current && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._hostElement.current, target);
        var preventDismissOnLostFocus = this.props.preventDismissOnLostFocus;
        if (!preventDismissOnLostFocus &&
            ((!this._target && clickedOutsideCallout) ||
                (ev.target !== this._targetWindow &&
                    clickedOutsideCallout &&
                    (this._target.stopPropagation ||
                        (!this._target || (target !== this._target && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["elementContains"])(this._target, target))))))) {
            this.dismiss(ev);
        }
    };
    // We implement a blur listener for the Callout component so that if a page inside inside of an iframe uses a callout,
    // it can be dismissed when the user clicks outside of the iframe.
    CalloutContentBase.prototype._dismissOnBlur = function (ev) {
        var preventDismissOnLostFocus = this.props.preventDismissOnLostFocus;
        if (!preventDismissOnLostFocus && ev.target === this._targetWindow) {
            this.dismiss(ev);
        }
    };
    CalloutContentBase.prototype._addListeners = function () {
        var _this = this;
        // This is added so the callout will dismiss when the window is scrolled
        // but not when something inside the callout is scrolled. The delay seems
        // to be required to avoid React firing an async focus event in IE from
        // the target changing focus quickly prior to rendering the callout.
        this._async.setTimeout(function () {
            _this._events.on(_this._targetWindow, 'scroll', _this._dismissOnScroll, true);
            _this._events.on(_this._targetWindow, 'resize', _this.dismiss, true);
            _this._events.on(_this._targetWindow, 'blur', _this._dismissOnBlur, true);
            _this._events.on(_this._targetWindow.document.documentElement, 'focus', _this._dismissOnLostFocus, true);
            _this._events.on(_this._targetWindow.document.documentElement, 'click', _this._dismissOnLostFocus, true);
            _this._hasListeners = true;
        }, 0);
    };
    CalloutContentBase.prototype._removeListeners = function () {
        this._events.off(this._targetWindow, 'scroll', this._dismissOnScroll, true);
        this._events.off(this._targetWindow, 'resize', this.dismiss, true);
        this._events.off(this._targetWindow, 'blur', this._dismissOnBlur, true);
        this._events.off(this._targetWindow.document.documentElement, 'focus', this._dismissOnLostFocus, true);
        this._events.off(this._targetWindow.document.documentElement, 'click', this._dismissOnLostFocus, true);
        this._hasListeners = false;
    };
    CalloutContentBase.prototype._updateAsyncPosition = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () { return _this._updatePosition(); });
    };
    CalloutContentBase.prototype._getBeakPosition = function () {
        var positions = this.state.positions;
        var beakPostionStyle = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (positions && positions.beakPosition ? positions.beakPosition.elementPosition : null));
        if (!beakPostionStyle.top && !beakPostionStyle.bottom && !beakPostionStyle.left && !beakPostionStyle.right) {
            beakPostionStyle.left = BEAK_ORIGIN_POSITION.left;
            beakPostionStyle.top = BEAK_ORIGIN_POSITION.top;
        }
        return beakPostionStyle;
    };
    CalloutContentBase.prototype._updatePosition = function () {
        var positions = this.state.positions;
        var hostElement = this._hostElement.current;
        var calloutElement = this._calloutElement.current;
        if (hostElement && calloutElement) {
            var currentProps = void 0;
            currentProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])(currentProps, this.props);
            currentProps.bounds = this._getBounds();
            currentProps.target = this._target;
            var newPositions = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["positionCallout"])(currentProps, hostElement, calloutElement, positions);
            // Set the new position only when the positions are not exists or one of the new callout positions are different.
            // The position should not change if the position is within 2 decimal places.
            if ((!positions && newPositions) ||
                (positions && newPositions && !this._arePositionsEqual(positions, newPositions) && this._positionAttempts < 5)) {
                // We should not reposition the callout more than a few times, if it is then the content is likely resizing
                // and we should stop trying to reposition to prevent a stack overflow.
                this._positionAttempts++;
                this.setState({
                    positions: newPositions
                });
            }
            else {
                this._positionAttempts = 0;
                if (this.props.onPositioned) {
                    this.props.onPositioned(this.state.positions);
                }
            }
        }
    };
    CalloutContentBase.prototype._getBounds = function () {
        if (!this._bounds) {
            var currentBounds = this.props.bounds;
            if (!currentBounds) {
                currentBounds = {
                    top: 0 + this.props.minPagePadding,
                    left: 0 + this.props.minPagePadding,
                    right: this._targetWindow.innerWidth - this.props.minPagePadding,
                    bottom: this._targetWindow.innerHeight - this.props.minPagePadding,
                    width: this._targetWindow.innerWidth - this.props.minPagePadding * 2,
                    height: this._targetWindow.innerHeight - this.props.minPagePadding * 2
                };
            }
            this._bounds = currentBounds;
        }
        return this._bounds;
    };
    // Max height should remain as synchronous as possible, which is why it is not done using set state.
    // It needs to be synchronous since it will impact the ultimate position of the callout.
    CalloutContentBase.prototype._getMaxHeight = function () {
        var _this = this;
        if (!this._maxHeight) {
            if (this.props.directionalHintFixed && this._target) {
                var beakWidth = this.props.isBeakVisible ? this.props.beakWidth : 0;
                var gapSpace = this.props.gapSpace ? this.props.gapSpace : 0;
                // Since the callout cannot measure it's border size it must be taken into account here. Otherwise it will
                // overlap with the target.
                var totalGap_1 = gapSpace + beakWidth + BORDER_WIDTH * 2;
                this._async.requestAnimationFrame(function () {
                    if (_this._target) {
                        _this._maxHeight = Object(_utilities_positioning__WEBPACK_IMPORTED_MODULE_3__["getMaxHeight"])(_this._target, _this.props.directionalHint, totalGap_1, _this._getBounds(), _this.props.coverTarget);
                        _this.forceUpdate();
                    }
                });
            }
            else {
                this._maxHeight = this._getBounds().height - BORDER_WIDTH * 2;
            }
        }
        return this._maxHeight;
    };
    CalloutContentBase.prototype._arePositionsEqual = function (positions, newPosition) {
        return (this._comparePositions(positions.elementPosition, newPosition.elementPosition) &&
            this._comparePositions(positions.beakPosition.elementPosition, newPosition.beakPosition.elementPosition));
    };
    CalloutContentBase.prototype._comparePositions = function (oldPositions, newPositions) {
        for (var key in newPositions) {
            // This needs to be checked here and below because there is a linting error if for in does not immediately have an if statement
            if (newPositions.hasOwnProperty(key)) {
                var oldPositionEdge = oldPositions[key];
                var newPositionEdge = newPositions[key];
                if (oldPositionEdge !== undefined && newPositionEdge !== undefined) {
                    if (oldPositionEdge.toFixed(2) !== newPositionEdge.toFixed(2)) {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
        }
        return true;
    };
    CalloutContentBase.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(target.toElement);
                this._target = target;
            }
            else if (target.getBoundingClientRect) {
                var targetElement = target;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(targetElement);
                this._target = target;
                // HTMLImgElements can have x and y values. The check for it being a point must go last.
            }
            else {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])();
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])();
        }
    };
    CalloutContentBase.prototype._setHeightOffsetEveryFrame = function () {
        var _this = this;
        if (this._calloutElement.current && this.props.finalHeight) {
            this._setHeightOffsetTimer = this._async.requestAnimationFrame(function () {
                var calloutMainElem = _this._calloutElement.current && _this._calloutElement.current.lastChild;
                if (!calloutMainElem) {
                    return;
                }
                var cardScrollHeight = calloutMainElem.scrollHeight;
                var cardCurrHeight = calloutMainElem.offsetHeight;
                var scrollDiff = cardScrollHeight - cardCurrHeight;
                _this.setState({
                    heightOffset: _this.state.heightOffset + scrollDiff
                });
                if (calloutMainElem.offsetHeight < _this.props.finalHeight) {
                    _this._setHeightOffsetEveryFrame();
                }
                else {
                    _this._async.cancelAnimationFrame(_this._setHeightOffsetTimer);
                }
            });
        }
    };
    CalloutContentBase.prototype._getTarget = function (props) {
        if (props === void 0) { props = this.props; }
        var target = props.target;
        return target;
    };
    CalloutContentBase.defaultProps = {
        preventDismissOnLostFocus: false,
        preventDismissOnScroll: false,
        isBeakVisible: true,
        beakWidth: 16,
        gapSpace: 0,
        minPagePadding: 8,
        directionalHint: 7 /* bottomAutoEdge */
    };
    CalloutContentBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["customizable"])('CalloutContent', ['theme', 'styles'])
    ], CalloutContentBase);
    return CalloutContentBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

var _a;


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.js ***!
  \**************************************************************************************/
/*! exports provided: CalloutContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalloutContent", function() { return CalloutContent; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalloutContent.base */ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.base.js");
/* harmony import */ var _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CalloutContent.styles */ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js");



var CalloutContent = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__["CalloutContentBase"], _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'CalloutContent' });


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/CalloutContent.styles.js ***!
  \*********************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

function getBeakStyle(beakWidth) {
    return {
        height: beakWidth,
        width: beakWidth
    };
}
var GlobalClassNames = {
    container: 'ms-Callout-container',
    root: 'ms-Callout',
    beak: 'ms-Callout-beak',
    beakCurtain: 'ms-Callout-beakCurtain',
    calloutMain: 'ms-Callout-main'
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className, overflowYHidden = props.overflowYHidden, calloutWidth = props.calloutWidth, beakWidth = props.beakWidth, backgroundColor = props.backgroundColor, calloutMaxWidth = props.calloutMaxWidth;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var palette = theme.palette;
    return {
        container: [
            classNames.container,
            {
                position: 'relative'
            }
        ],
        root: [
            classNames.root,
            {
                position: 'absolute',
                boxSizing: 'border-box',
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: palette.neutralLight,
                boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)',
                selectors: (_a = {},
                    _a[_Styling__WEBPACK_IMPORTED_MODULE_0__["HighContrastSelector"]] = {
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'WindowText'
                    },
                    _a)
            },
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["focusClear"])(),
            className,
            !!calloutWidth && { width: calloutWidth },
            !!calloutMaxWidth && { maxWidth: calloutMaxWidth }
        ],
        beak: [
            classNames.beak,
            {
                position: 'absolute',
                backgroundColor: palette.white,
                boxShadow: 'inherit',
                border: 'inherit',
                boxSizing: 'border-box',
                transform: 'rotate(45deg)'
            },
            getBeakStyle(beakWidth),
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ],
        beakCurtain: [
            classNames.beakCurtain,
            {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: palette.white
            }
        ],
        calloutMain: [
            classNames.calloutMain,
            {
                backgroundColor: palette.white,
                overflowX: 'hidden',
                overflowY: 'auto',
                position: 'relative'
            },
            overflowYHidden && {
                overflowY: 'hidden'
            },
            backgroundColor && {
                backgroundColor: backgroundColor
            }
        ]
    };
    var _a;
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Callout/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Callout/index.js ***!
  \*****************************************************************************/
/*! exports provided: DirectionalHint, Callout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Callout */ "./node_modules/office-ui-fabric-react/lib/components/Callout/Callout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Callout", function() { return _Callout__WEBPACK_IMPORTED_MODULE_0__["Callout"]; });

/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"]; });





/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js ***!
  \**************************************************************************************************/
/*! exports provided: getSubmenuItems, canAnyMenuItemsCheck, ContextualMenuBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubmenuItems", function() { return getSubmenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canAnyMenuItemsCheck", function() { return canAnyMenuItemsCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuBase", function() { return ContextualMenuBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.types */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FocusZone */ "./node_modules/office-ui-fabric-react/lib/FocusZone.js");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContextualMenu.classNames */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/decorators/withResponsiveMode */ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js");
/* harmony import */ var _Callout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Callout */ "./node_modules/office-ui-fabric-react/lib/Callout.js");
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContextualMenu */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");
/* harmony import */ var _ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContextualMenuItemWrapper/index */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js");












var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])();
function getSubmenuItems(item) {
    return item.subMenuProps ? item.subMenuProps.items : item.items;
}
/**
 * Returns true if a list of menu items can contain a checkbox
 */
function canAnyMenuItemsCheck(items) {
    return items.some(function (item) {
        if (item.canCheck) {
            return true;
        }
        // If the item is a section, check if any of the items in the section can check.
        if (item.sectionProps && item.sectionProps.items.some(function (submenuItem) { return submenuItem.canCheck === true; })) {
            return true;
        }
        return false;
    });
}
var NavigationIdleDelay = 250 /* ms */;
var ContextualMenuBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuBase, _super);
    function ContextualMenuBase(props) {
        var _this = _super.call(this, props) || this;
        _this.dismiss = function (ev, dismissAll) {
            var onDismiss = _this.props.onDismiss;
            if (onDismiss) {
                onDismiss(ev, dismissAll);
            }
        };
        _this._onKeyDown = function (ev) {
            // Take note if we are processing a altKey or metaKey keydown
            // so that the menu does not collapse if no other keys are pressed
            _this._processingExpandCollapseKeyOnly = _this._isExpandCollapseKey(ev);
            return _this._keyHandler(ev, _this._shouldHandleKeyDown);
        };
        _this._shouldHandleKeyDown = function (ev) {
            return (ev.which === 27 /* escape */ ||
                _this._shouldCloseSubMenu(ev) ||
                (ev.which === 38 /* up */ && (ev.altKey || ev.metaKey)));
        };
        _this._onKeyUp = function (ev) {
            return _this._keyHandler(ev, _this._shouldHandleKeyUp, true /* dismissAllMenus */);
        };
        _this._shouldHandleKeyUp = function (ev) {
            var shouldHandleKey = _this._processingExpandCollapseKeyOnly && _this._isExpandCollapseKey(ev);
            _this._processingExpandCollapseKeyOnly = false;
            return shouldHandleKey;
        };
        _this._keyHandler = function (ev, shouldHandleKey, dismissAllMenus) {
            var handled = false;
            if (shouldHandleKey(ev)) {
                _this._isFocusingPreviousElement = true;
                ev.preventDefault();
                ev.stopPropagation();
                _this.dismiss(ev, dismissAllMenus);
                handled = true;
            }
            return handled;
        };
        /**
         * Checks if the submenu should be closed
         */
        _this._shouldCloseSubMenu = function (ev) {
            var submenuCloseKey = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? 39 /* right */ : 37 /* left */;
            if (ev.which !== submenuCloseKey || !_this.props.isSubMenu) {
                return false;
            }
            return (_this._adjustedFocusZoneProps.direction === _FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneDirection"].vertical ||
                (!!_this._adjustedFocusZoneProps.checkForNoWrap &&
                    !Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["shouldWrapFocus"])(ev.target, 'data-no-horizontal-wrap')));
        };
        _this._onMenuKeyDown = function (ev) {
            // Mark as handled if onKeyDown (for handling collapse cases) return true
            // or if we are attempting to expand a submenu (otherwise)
            var handled = _this._onKeyDown(ev);
            if (handled || !_this._host) {
                return;
            }
            // If we have a modifier key being pressed, we do not want to move focus.
            // Otherwise, handle up and down keys
            var elementToFocus = ev.altKey || ev.metaKey
                ? null
                : ev.which === 38 /* up */
                    ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getLastFocusable"])(_this._host, _this._host.lastChild, true)
                    : ev.which === 40 /* down */
                        ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getFirstFocusable"])(_this._host, _this._host.firstChild, true)
                        : null;
            if (elementToFocus) {
                elementToFocus.focus();
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        /**
         * Scroll handler for the callout to make sure the mouse events
         * for updating focus are not interacting during scroll
         */
        _this._onScroll = function () {
            if (!_this._isScrollIdle && _this._scrollIdleTimeoutId !== undefined) {
                _this._async.clearTimeout(_this._scrollIdleTimeoutId);
                _this._scrollIdleTimeoutId = undefined;
            }
            else {
                _this._isScrollIdle = false;
            }
            _this._scrollIdleTimeoutId = _this._async.setTimeout(function () {
                _this._isScrollIdle = true;
            }, NavigationIdleDelay);
        };
        _this._onItemMouseEnterBase = function (item, ev, target) {
            if (!_this._isScrollIdle) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onItemMouseMoveBase = function (item, ev, target) {
            var targetElement = ev.currentTarget;
            if (!_this._isScrollIdle ||
                _this._enterTimerId !== undefined ||
                targetElement === _this._targetWindow.document.activeElement) {
                return;
            }
            _this._updateFocusOnMouseEvent(item, ev, target);
        };
        _this._onMouseItemLeave = function (item, ev) {
            if (!_this._isScrollIdle) {
                return;
            }
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
            if (_this.state.expandedMenuItemKey !== undefined) {
                return;
            }
            /**
             * IE11 focus() method forces parents to scroll to top of element.
             * Edge and IE expose a setActive() function for focusable divs that
             * sets the page focus but does not scroll the parent element.
             */
            if (_this._host.setActive) {
                _this._host.setActive();
            }
            else {
                _this._host.focus();
            }
        };
        _this._onItemMouseDown = function (item, ev) {
            if (item.onMouseDown) {
                item.onMouseDown(item, ev);
            }
        };
        _this._onItemClick = function (item, ev) {
            _this._onItemClickBase(item, ev, ev.currentTarget);
        };
        _this._onItemClickBase = function (item, ev, target) {
            var items = getSubmenuItems(item);
            // Cancel a async menu item hover timeout action from being taken and instead
            // just trigger the click event instead.
            _this._cancelSubMenuTimer();
            if (!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item) && (!items || !items.length)) {
                // This is an item without a menu. Click it.
                _this._executeItemClick(item, ev);
            }
            else {
                if (item.key !== _this.state.expandedMenuItemKey) {
                    // This has a collapsed sub menu. Expand it.
                    _this.setState({
                        // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                        // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                        // between a real click event and a keypress event.
                        expandedByMouseClick: ev.nativeEvent.detail !== 0
                    });
                    _this._onItemSubMenuExpand(item, target);
                }
            }
            ev.stopPropagation();
            ev.preventDefault();
        };
        _this._onAnchorClick = function (item, ev) {
            _this._executeItemClick(item, ev);
            ev.stopPropagation();
        };
        _this._executeItemClick = function (item, ev) {
            if (item.disabled || item.isDisabled) {
                return;
            }
            var dismiss = false;
            if (item.onClick) {
                dismiss = !!item.onClick(ev, item);
            }
            else if (_this.props.onItemClick) {
                dismiss = !!_this.props.onItemClick(ev, item);
            }
            (dismiss || !ev.defaultPrevented) && _this.dismiss(ev, true);
        };
        _this._onItemKeyDown = function (item, ev) {
            var openKey = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? 37 /* left */ : 39 /* right */;
            if (!item.disabled &&
                (ev.which === openKey || ev.which === 13 /* enter */ || (ev.which === 40 /* down */ && (ev.altKey || ev.metaKey)))) {
                _this.setState({
                    expandedByMouseClick: false
                });
                _this._onItemSubMenuExpand(item, ev.currentTarget);
                ev.preventDefault();
            }
        };
        // Cancel a async menu item hover timeout action from being taken and instead
        // do new upcoming behavior
        _this._cancelSubMenuTimer = function () {
            if (_this._enterTimerId !== undefined) {
                _this._async.clearTimeout(_this._enterTimerId);
                _this._enterTimerId = undefined;
            }
        };
        _this._onItemSubMenuExpand = function (item, target) {
            if (_this.state.expandedMenuItemKey !== item.key) {
                if (_this.state.expandedMenuItemKey) {
                    _this._onSubMenuDismiss();
                }
                // Focus the target to ensure when we close it, we're focusing on the correct element.
                target.focus();
                _this.setState({
                    expandedMenuItemKey: item.key,
                    submenuTarget: target
                });
            }
        };
        _this._onSubMenuDismiss = function (ev, dismissAll) {
            if (dismissAll) {
                _this.dismiss(ev, dismissAll);
            }
            else {
                _this.setState({
                    dismissedMenuItemKey: _this.state.expandedMenuItemKey,
                    expandedMenuItemKey: undefined,
                    submenuTarget: undefined
                });
            }
        };
        _this._getSubMenuId = function (item) {
            var subMenuId = _this.state.subMenuId;
            if (item.subMenuProps && item.subMenuProps.id) {
                subMenuId = item.subMenuProps.id;
            }
            return subMenuId;
        };
        _this._onPointerAndTouchEvent = function (ev) {
            _this._cancelSubMenuTimer();
        };
        _this.state = {
            contextualMenuItems: undefined,
            subMenuId: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getId"])('ContextualMenu')
        };
        _this._isFocusingPreviousElement = false;
        _this._isScrollIdle = true;
        _this._processingExpandCollapseKeyOnly = false;
        return _this;
    }
    ContextualMenuBase.prototype.componentWillUpdate = function (newProps) {
        if (newProps.target !== this.props.target) {
            var newTarget = newProps.target;
            this._setTargetWindowAndElement(newTarget);
        }
        if (newProps.hidden !== this.props.hidden) {
            if (newProps.hidden) {
                this._onMenuClosed();
            }
            else {
                this._onMenuOpened();
                this._previousActiveElement = this._targetWindow
                    ? this._targetWindow.document.activeElement
                    : null;
            }
        }
    };
    // Invoked once, both on the client and server, immediately before the initial rendering occurs.
    ContextualMenuBase.prototype.componentWillMount = function () {
        var target = this.props.target;
        this._setTargetWindowAndElement(target);
        if (!this.props.hidden) {
            this._previousActiveElement = this._targetWindow
                ? this._targetWindow.document.activeElement
                : null;
        }
    };
    // Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
    ContextualMenuBase.prototype.componentDidMount = function () {
        if (!this.props.hidden) {
            this._onMenuOpened();
        }
    };
    // Invoked immediately before a component is unmounted from the DOM.
    ContextualMenuBase.prototype.componentWillUnmount = function () {
        var _this = this;
        if (this._isFocusingPreviousElement && this._previousActiveElement) {
            // This slight delay is required so that we can unwind the stack, const react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            // Note: Cannot be replaced by this._async.setTimout because those will be removed by the time this is called.
            setTimeout(function () {
                _this._previousActiveElement && _this._previousActiveElement.focus();
            }, 0);
        }
        if (this.props.onMenuDismissed) {
            this.props.onMenuDismissed(this.props);
        }
        this._events.dispose();
        this._async.dispose();
    };
    ContextualMenuBase.prototype.render = function () {
        var _this = this;
        var isBeakVisible = this.props.isBeakVisible;
        var _a = this.props, items = _a.items, labelElementId = _a.labelElementId, id = _a.id, className = _a.className, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, gapSpace = _a.gapSpace, coverTarget = _a.coverTarget, ariaLabel = _a.ariaLabel, doNotLayer = _a.doNotLayer, target = _a.target, bounds = _a.bounds, useTargetWidth = _a.useTargetWidth, useTargetAsMinWidth = _a.useTargetAsMinWidth, directionalHintFixed = _a.directionalHintFixed, shouldFocusOnMount = _a.shouldFocusOnMount, shouldFocusOnContainer = _a.shouldFocusOnContainer, title = _a.title, styles = _a.styles, theme = _a.theme, calloutProps = _a.calloutProps, _b = _a.onRenderSubMenu, onRenderSubMenu = _b === void 0 ? this._onRenderSubMenu : _b, focusZoneProps = _a.focusZoneProps, getMenuClassNames = _a.getMenuClassNames;
        this._classNames = getMenuClassNames
            ? getMenuClassNames(theme, className)
            : getClassNames(styles, {
                theme: theme,
                className: className
            });
        var hasIcons = itemsHaveIcons(items);
        function itemsHaveIcons(contextualMenuItems) {
            for (var _i = 0, contextualMenuItems_1 = contextualMenuItems; _i < contextualMenuItems_1.length; _i++) {
                var item = contextualMenuItems_1[_i];
                if (!!item.iconProps) {
                    return true;
                }
                if (item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section &&
                    item.sectionProps &&
                    itemsHaveIcons(item.sectionProps.items)) {
                    return true;
                }
            }
            return false;
        }
        this._adjustedFocusZoneProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, focusZoneProps, { direction: this._getFocusZoneDirection() });
        var hasCheckmarks = canAnyMenuItemsCheck(items);
        var submenuProps = this.state.expandedMenuItemKey ? this._getSubmenuProps() : null;
        isBeakVisible = isBeakVisible === undefined ? this.props.responsiveMode <= _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__["ResponsiveMode"].medium : isBeakVisible;
        /**
         * When useTargetWidth is true, get the width of the target element and apply it for the context menu container
         */
        var contextMenuStyle;
        var targetAsHtmlElement = this._target;
        if ((useTargetWidth || useTargetAsMinWidth) && targetAsHtmlElement && targetAsHtmlElement.offsetWidth) {
            var targetBoundingRect = targetAsHtmlElement.getBoundingClientRect();
            var targetWidth = targetBoundingRect.width - 2 /* Accounts for 1px border */;
            if (useTargetWidth) {
                contextMenuStyle = {
                    width: targetWidth
                };
            }
            else if (useTargetAsMinWidth) {
                contextMenuStyle = {
                    minWidth: targetWidth
                };
            }
        }
        // The menu should only return if items were provided, if no items were provided then it should not appear.
        if (items && items.length > 0) {
            var indexCorrection_1 = 0;
            var totalItemCount_1 = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider && item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header) {
                    var itemCount = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                    totalItemCount_1 += itemCount;
                }
            }
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Callout__WEBPACK_IMPORTED_MODULE_8__["Callout"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, calloutProps, { target: target, isBeakVisible: isBeakVisible, beakWidth: beakWidth, directionalHint: directionalHint, directionalHintForRTL: directionalHintForRTL, gapSpace: gapSpace, coverTarget: coverTarget, doNotLayer: doNotLayer, className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["css"])('ms-ContextualMenu-Callout', calloutProps ? calloutProps.className : undefined), setInitialFocus: shouldFocusOnMount, onDismiss: this.props.onDismiss, onScroll: this._onScroll, bounds: bounds, directionalHintFixed: directionalHintFixed, hidden: this.props.hidden }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: 'menu', "aria-label": ariaLabel, "aria-labelledby": labelElementId, style: contextMenuStyle, ref: function (host) { return (_this._host = host); }, id: id, className: this._classNames.container, tabIndex: shouldFocusOnContainer ? 0 : -1, onKeyDown: this._onMenuKeyDown, onKeyUp: this._onKeyUp },
                    title && (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.title, role: "heading", "aria-level": 1 },
                        ' ',
                        title,
                        ' ')),
                    items && items.length ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZone"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._adjustedFocusZoneProps, { className: this._classNames.root, isCircularNavigation: true, handleTabKey: 1 /* all */ }),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: this._classNames.list, onKeyDown: this._onKeyDown, onKeyUp: this._onKeyUp }, items.map(function (item, index) {
                            var menuItem = _this._renderMenuItem(item, index, indexCorrection_1, totalItemCount_1, hasCheckmarks, hasIcons);
                            if (item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider &&
                                item.itemType !== _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header) {
                                var indexIncrease = item.customOnRenderListLength ? item.customOnRenderListLength : 1;
                                indexCorrection_1 += indexIncrease;
                            }
                            return menuItem;
                        })))) : null,
                    submenuProps && onRenderSubMenu(submenuProps, this._onRenderSubMenu))));
        }
        else {
            return null;
        }
    };
    ContextualMenuBase.prototype._onMenuOpened = function () {
        this._events.on(this._targetWindow, 'resize', this.dismiss);
        this.props.onMenuOpened && this.props.onMenuOpened(this.props);
    };
    ContextualMenuBase.prototype._onMenuClosed = function () {
        var _this = this;
        this._events.off(this._targetWindow, 'resize', this.dismiss);
        this._previousActiveElement &&
            this._async.setTimeout(function () {
                _this._previousActiveElement && _this._previousActiveElement.focus();
            }, 0);
    };
    /**
     * Gets the focusZoneDirection by using the arrowDirection if specified,
     * the direction specificed in the focusZoneProps, or defaults to FocusZoneDirection.vertical
     */
    ContextualMenuBase.prototype._getFocusZoneDirection = function () {
        var focusZoneProps = this.props.focusZoneProps;
        return focusZoneProps && focusZoneProps.direction !== undefined
            ? focusZoneProps.direction
            : _FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneDirection"].vertical;
    };
    ContextualMenuBase.prototype._onRenderSubMenu = function (subMenuProps) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenu__WEBPACK_IMPORTED_MODULE_9__["ContextualMenu"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, subMenuProps));
    };
    ContextualMenuBase.prototype._renderMenuItem = function (item, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var renderedItems = [];
        var iconProps = item.iconProps || { iconName: 'None' };
        // We only send a dividerClassName when the item to be rendered is a divider. For all other cases, the default divider style is used.
        var dividerClassName = item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider ? item.className : undefined;
        var subMenuIconClassName = item.submenuIconProps ? item.submenuIconProps.className : '';
        var getTheItemClassNames = item.getItemClassNames || _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__["getItemClassNames"];
        var itemClassNames = getTheItemClassNames(this.props.theme, Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item), this.state.expandedMenuItemKey === item.key, !!Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["getIsChecked"])(item), !!item.href, iconProps.iconName !== 'None', item.className, dividerClassName, iconProps.className, subMenuIconClassName, item.primaryDisabled);
        if (item.text === '-' || item.name === '-') {
            item.itemType = _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider;
        }
        switch (item.itemType) {
            case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Divider:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                break;
            case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header:
                renderedItems.push(this._renderSeparator(index, itemClassNames));
                var headerItem = this._renderHeaderMenuItem(item, itemClassNames, index, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(headerItem, item.key || index, itemClassNames, item.title));
                break;
            case _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section:
                renderedItems.push(this._renderSectionItem(item, itemClassNames, index, hasCheckmarks, hasIcons));
                break;
            default:
                var menuItem = this._renderNormalItem(item, itemClassNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
                renderedItems.push(this._renderListItem(menuItem, item.key || index, itemClassNames, item.title));
                break;
        }
        return renderedItems;
    };
    ContextualMenuBase.prototype._renderSectionItem = function (item, menuClassNames, index, hasCheckmarks, hasIcons) {
        var _this = this;
        var section = item.sectionProps;
        if (!section) {
            return;
        }
        var headerItem;
        if (section.title) {
            var headerContextualMenuItem = {
                key: "section-" + section.title + "-title",
                itemType: _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Header,
                text: section.title
            };
            headerItem = this._renderHeaderMenuItem(headerContextualMenuItem, menuClassNames, index, hasCheckmarks, hasIcons);
        }
        if (section.items && section.items.length > 0) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { role: "presentation", key: section.key },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { role: "group" },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { className: this._classNames.list },
                        section.topDivider && this._renderSeparator(index, menuClassNames, true, true),
                        headerItem && this._renderListItem(headerItem, item.key || index, menuClassNames, item.title),
                        section.items.map(function (contextualMenuItem, itemsIndex) {
                            return _this._renderMenuItem(contextualMenuItem, itemsIndex, itemsIndex, section.items.length, hasCheckmarks, hasIcons);
                        }),
                        section.bottomDivider && this._renderSeparator(index, menuClassNames, false, true)))));
        }
    };
    ContextualMenuBase.prototype._renderListItem = function (content, key, classNames, title) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { role: "presentation", title: title, key: key, className: classNames.item }, content));
    };
    ContextualMenuBase.prototype._renderSeparator = function (index, classNames, top, fromSection) {
        if (fromSection || index > 0) {
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { role: "separator", key: 'separator-' + index + (top === undefined ? '' : top ? '-top' : '-bottom'), className: classNames.divider }));
        }
        return null;
    };
    ContextualMenuBase.prototype._renderNormalItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        if (item.onRender) {
            return [
                item.onRender(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ 'aria-posinset': focusableElementIndex + 1, 'aria-setsize': totalItemCount }, item), this.dismiss)
            ];
        }
        if (item.href) {
            return this._renderAnchorMenuItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        if (item.split && Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item)) {
            return this._renderSplitButton(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
        }
        return this._renderButtonItem(item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons);
    };
    ContextualMenuBase.prototype._renderHeaderMenuItem = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props.contextualMenuItemAs, ChildrenRenderer = _a === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_10__["ContextualMenuItem"] : _a;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: this._classNames.header, style: item.style, role: "heading", "aria-level": this.props.title ? 2 : 1 },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, { item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks ? this._onItemClick : undefined, hasIcons: hasIcons })));
    };
    ContextualMenuBase.prototype._renderAnchorMenuItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_11__["ContextualMenuAnchor"], { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onAnchorClick, onItemKeyDown: this._onItemKeyDown, getSubMenuId: this._getSubMenuId, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuBase.prototype._renderButtonItem = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_11__["ContextualMenuButton"], { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, getSubMenuId: this._getSubMenuId, expandedMenuItemKey: expandedMenuItemKey, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss }));
    };
    ContextualMenuBase.prototype._renderSplitButton = function (item, classNames, index, focusableElementIndex, totalItemCount, hasCheckmarks, hasIcons) {
        var contextualMenuItemAs = this.props.contextualMenuItemAs;
        var expandedMenuItemKey = this.state.expandedMenuItemKey;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ContextualMenuItemWrapper_index__WEBPACK_IMPORTED_MODULE_11__["ContextualMenuSplitButton"], { item: item, classNames: classNames, index: index, focusableElementIndex: focusableElementIndex, totalItemCount: totalItemCount, hasCheckmarks: hasCheckmarks, hasIcons: hasIcons, contextualMenuItemAs: contextualMenuItemAs, onItemMouseEnter: this._onItemMouseEnterBase, onItemMouseLeave: this._onMouseItemLeave, onItemMouseMove: this._onItemMouseMoveBase, onItemMouseDown: this._onItemMouseDown, executeItemClick: this._executeItemClick, onItemClick: this._onItemClick, onItemClickBase: this._onItemClickBase, onItemKeyDown: this._onItemKeyDown, openSubMenu: this._onItemSubMenuExpand, dismissSubMenu: this._onSubMenuDismiss, dismissMenu: this.dismiss, expandedMenuItemKey: expandedMenuItemKey, onTap: this._onPointerAndTouchEvent }));
    };
    ContextualMenuBase.prototype._isExpandCollapseKey = function (ev) {
        return ev.which === 18 /* alt */ || ev.key === 'Meta';
    };
    /**
     * Handles updating focus when mouseEnter or mouseMove fire.
     * As part of updating focus, This function will also update
     * the expand/collapse state accordingly.
     */
    ContextualMenuBase.prototype._updateFocusOnMouseEvent = function (item, ev, target) {
        var _this = this;
        var targetElement = target ? target : ev.currentTarget;
        var _a = this.props.subMenuHoverDelay, timeoutDuration = _a === void 0 ? NavigationIdleDelay : _a;
        if (item.key === this.state.expandedMenuItemKey) {
            return;
        }
        if (this._enterTimerId !== undefined) {
            this._async.clearTimeout(this._enterTimerId);
            this._enterTimerId = undefined;
        }
        // If the menu is not expanded we can update focus without any delay
        if (this.state.expandedMenuItemKey === undefined) {
            targetElement.focus();
        }
        // Delay updating expanding/dismissing the submenu
        // and only set focus if we have not already done so
        if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item)) {
            ev.stopPropagation();
            this._enterTimerId = this._async.setTimeout(function () {
                targetElement.focus();
                _this.setState({
                    expandedByMouseClick: true
                });
                _this._onItemSubMenuExpand(item, targetElement);
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
        else {
            this._enterTimerId = this._async.setTimeout(function () {
                _this._onSubMenuDismiss(ev);
                targetElement.focus();
                _this._enterTimerId = undefined;
            }, timeoutDuration);
        }
    };
    ContextualMenuBase.prototype._getSubmenuProps = function () {
        var _a = this.state, submenuTarget = _a.submenuTarget, expandedMenuItemKey = _a.expandedMenuItemKey;
        var item = this._findItemByKey(expandedMenuItemKey);
        var submenuProps = null;
        if (item) {
            submenuProps = {
                items: getSubmenuItems(item),
                target: submenuTarget,
                onDismiss: this._onSubMenuDismiss,
                isSubMenu: true,
                id: this.state.subMenuId,
                shouldFocusOnMount: true,
                shouldFocusOnContainer: this.state.expandedByMouseClick,
                directionalHint: Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getRTL"])() ? 8 /* leftTopEdge */ : 11 /* rightTopEdge */,
                className: this.props.className,
                gapSpace: 0,
                isBeakVisible: false
            };
            if (item.subMenuProps) {
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["assign"])(submenuProps, item.subMenuProps);
            }
        }
        return submenuProps;
    };
    ContextualMenuBase.prototype._findItemByKey = function (key) {
        var items = this.props.items;
        return this._findItemByKeyFromItems(key, items);
    };
    /**
     * Returns the item that mathes a given key if any.
     * @param key The key of the item to match
     * @param items The items to look for the key
     */
    ContextualMenuBase.prototype._findItemByKeyFromItems = function (key, items) {
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            if (item.itemType === _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItemType"].Section && item.sectionProps) {
                var match = this._findItemByKeyFromItems(key, item.sectionProps.items);
                if (match) {
                    return match;
                }
            }
            else if (item.key && item.key === key) {
                return item;
            }
        }
    };
    ContextualMenuBase.prototype._setTargetWindowAndElement = function (target) {
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getDocument"])();
                this._target = currentDoc ? currentDoc.querySelector(target) : null;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
            }
            else if (target.stopPropagation) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(target.toElement);
                this._target = target;
            }
            else if (target.x !== undefined && target.y !== undefined) {
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
                this._target = target;
            }
            else {
                var targetElement = target;
                this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])(targetElement);
                this._target = target;
            }
        }
        else {
            this._targetWindow = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getWindow"])();
        }
    };
    // The default ContextualMenu properties have no items and beak, the default submenu direction is right and top.
    ContextualMenuBase.defaultProps = {
        items: [],
        shouldFocusOnMount: true,
        gapSpace: 0,
        directionalHint: 7 /* bottomAutoEdge */,
        beakWidth: 16
    };
    ContextualMenuBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        _utilities_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_7__["withResponsiveMode"]
    ], ContextualMenuBase);
    return ContextualMenuBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js ***!
  \********************************************************************************************************/
/*! exports provided: getSplitButtonVerticalDividerClassNames, getContextualMenuClassNames, getItemClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSplitButtonVerticalDividerClassNames", function() { return getSplitButtonVerticalDividerClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContextualMenuClassNames", function() { return getContextualMenuClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemClassNames", function() { return getItemClassNames; });
/* harmony import */ var _Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Divider/VerticalDivider.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js");
/* harmony import */ var _ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.cnstyles */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var getSplitButtonVerticalDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme) {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])(Object(_Divider_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_0__["getDividerClassNames"])(theme), {
        divider: {
            height: 16,
            width: 1
        }
    });
});
var getContextualMenuClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme, className) {
    var styles = Object(_ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["getStyles"])(theme);
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])({
        container: [
            'ms-ContextualMenu-container',
            styles.container,
            className,
            [
                {
                    selectors: {
                        ':focus': { outline: 0 }
                    }
                }
            ]
        ],
        root: ['ms-ContextualMenu is-open', styles.root],
        list: ['ms-ContextualMenu-list is-open', styles.list],
        header: ['ms-ContextualMenu-header', styles.header],
        title: styles.title
    });
});
var getItemClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["memoizeFunction"])(function (theme, disabled, expanded, checked, isAnchorLink, knownIcon, itemClassName, dividerClassName, iconClassName, subMenuClassName, primaryDisabled) {
    var styles = Object(_ContextualMenu_cnstyles__WEBPACK_IMPORTED_MODULE_1__["getMenuItemStyles"])(theme);
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["mergeStyleSets"])({
        item: ['ms-ContextualMenu-item', styles.item, itemClassName],
        divider: ['ms-ContextualMenu-divider', styles.divider, dividerClassName],
        root: [
            'ms-ContextualMenu-link',
            styles.root,
            checked && ['is-checked', styles.rootChecked],
            isAnchorLink && styles.anchorLink,
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric--isFocusVisible &:focus, .ms-Fabric--isFocusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric--isFocusVisible &:hover': { background: 'inherit;' }
                    }
                }
            ]
        ],
        splitPrimary: [
            styles.root,
            checked && ['is-checked', styles.rootChecked],
            (disabled || primaryDisabled) && ['is-disabled', styles.rootDisabled],
            !(disabled || primaryDisabled) &&
                !checked && [
                {
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric--isFocusVisible &:focus, .ms-Fabric--isFocusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric--isFocusVisible &:hover': { background: 'inherit;' }
                    }
                }
            ]
        ],
        splitMenu: [
            styles.root,
            {
                width: 32
            },
            expanded && ['is-expanded', styles.rootExpanded],
            disabled && ['is-disabled', styles.rootDisabled],
            !disabled &&
                !expanded && [
                {
                    selectors: {
                        ':hover': styles.rootHovered,
                        ':active': styles.rootPressed,
                        '.ms-Fabric--isFocusVisible &:focus, .ms-Fabric--isFocusVisible &:focus:hover': styles.rootFocused,
                        '.ms-Fabric--isFocusVisible &:hover': { background: 'inherit;' }
                    }
                }
            ]
        ],
        linkContent: ['ms-ContextualMenu-linkContent', styles.linkContent],
        linkContentMenu: [
            'ms-ContextualMenu-linkContent',
            styles.linkContent,
            {
                justifyContent: 'center'
            }
        ],
        icon: [
            'ms-ContextualMenu-icon',
            knownIcon && 'ms-ContextualMenu-iconColor ' && styles.iconColor,
            styles.icon,
            iconClassName,
            disabled && ['is-disabled', styles.iconDisabled]
        ],
        checkmarkIcon: [
            'ms-ContextualMenu-checkmarkIcon',
            knownIcon && 'ms-ContextualMenu-checkmarkIcon ' && styles.checkmarkIcon,
            styles.icon,
            iconClassName
        ],
        subMenuIcon: ['ms-ContextualMenu-submenuIcon', styles.subMenuIcon, subMenuClassName],
        label: ['ms-ContextualMenu-itemText', styles.label],
        secondaryText: ['ms-ContextualMenu-secondaryText', styles.secondaryText],
        splitContainer: [
            styles.splitButtonFlexContainer,
            !disabled &&
                !checked && [
                {
                    selectors: {
                        '.ms-Fabric--isFocusVisible &:focus, .ms-Fabric--isFocusVisible &:focus:hover': styles.rootFocused
                    }
                }
            ]
        ]
    });
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.cnstyles.js ***!
  \******************************************************************************************************/
/*! exports provided: getMenuItemStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemStyles", function() { return getMenuItemStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



var ContextualMenuItemHeight = '32px';
var getItemHighContrastStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function () {
    return {
        selectors: (_a = {},
            _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                backgroundColor: 'Highlight',
                borderColor: 'Highlight',
                color: 'HighlightText',
                MsHighContrastAdjust: 'none'
            },
            _a)
    };
    var _a;
});
var getMenuItemStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuItemBackgroundHoverColor = semanticColors.menuItemBackgroundHovered;
    var ContextualMenuItemBackgroundSelectedColor = semanticColors.menuItemBackgroundChecked;
    var ContextualMenuItemDividerColor = semanticColors.bodyDivider;
    var menuItemStyles = {
        item: [
            fonts.medium,
            {
                color: semanticColors.bodyText,
                position: 'relative',
                boxSizing: 'border-box'
            }
        ],
        divider: {
            display: 'block',
            height: '1px',
            backgroundColor: ContextualMenuItemDividerColor,
            position: 'relative'
        },
        root: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            fonts.medium,
            {
                color: 'inherit',
                backgroundColor: 'transparent',
                border: 'none',
                width: '100%',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                display: 'block',
                cursor: 'pointer',
                padding: '0px 6px',
                textAlign: 'left'
            }
        ],
        rootDisabled: {
            color: semanticColors.disabledBodyText,
            cursor: 'default',
            pointerEvents: 'none',
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'GrayText',
                    opacity: 1
                },
                _a)
        },
        rootHovered: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootFocused: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundHoverColor }, getItemHighContrastStyles()),
        rootChecked: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, getItemHighContrastStyles()),
        rootPressed: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundSelectedColor }, getItemHighContrastStyles()),
        rootExpanded: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ backgroundColor: ContextualMenuItemBackgroundSelectedColor, color: semanticColors.bodyTextChecked }, getItemHighContrastStyles()),
        linkContent: {
            whiteSpace: 'nowrap',
            height: 'inherit',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%'
        },
        anchorLink: {
            padding: '0px 6px',
            textRendering: 'auto',
            color: 'inherit',
            letterSpacing: 'normal',
            wordSpacing: 'normal',
            textTransform: 'none',
            textIndent: '0px',
            textShadow: 'none',
            textDecoration: 'none',
            boxSizing: 'border-box'
        },
        label: {
            margin: '0 4px',
            verticalAlign: 'middle',
            display: 'inline-block',
            flexGrow: '1',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        secondaryText: {
            color: theme.palette.neutralSecondary,
            paddingLeft: '20px',
            textAlign: 'right'
        },
        icon: {
            display: 'inline-block',
            minHeight: '1px',
            maxHeight: ContextualMenuItemHeight,
            width: '14px',
            margin: '0 4px',
            verticalAlign: 'middle',
            flexShrink: '0'
        },
        iconColor: {
            color: semanticColors.menuIcon,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'inherit'
                },
                _b['$root:hover &'] = {
                    selectors: (_c = {},
                        _c[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'HighlightText'
                        },
                        _c)
                },
                _b['$root:focus &'] = {
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                            color: 'HighlightText'
                        },
                        _d)
                },
                _b)
        },
        iconDisabled: {
            color: semanticColors.disabledBodyText
        },
        checkmarkIcon: {
            color: semanticColors.bodySubtext,
            selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_1__["HighContrastSelector"]] = {
                    color: 'HighlightText'
                },
                _e)
        },
        subMenuIcon: {
            height: ContextualMenuItemHeight,
            lineHeight: ContextualMenuItemHeight,
            textAlign: 'center',
            display: 'inline-block',
            verticalAlign: 'middle',
            flexShrink: '0',
            fontSize: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontSizes"].mini
        },
        splitButtonFlexContainer: [
            Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["getFocusStyle"])(theme),
            {
                display: 'flex',
                height: ContextualMenuItemHeight,
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center'
            }
        ]
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(menuItemStyles);
    var _a, _b, _c, _d, _e;
});
var getStyles = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["memoizeFunction"])(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    var ContextualMenuBackground = semanticColors.bodyBackground;
    var ContextualMenuHeaderColor = semanticColors.menuHeader;
    var styles = {
        root: {
            backgroundColor: ContextualMenuBackground,
            minWidth: '180px'
        },
        container: {},
        list: {
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            lineHeight: '0'
        },
        title: {
            fontSize: '16px',
            paddingRight: '14px',
            paddingLeft: '14px',
            paddingBottom: '5px',
            paddingTop: '5px',
            backgroundColor: theme.palette.neutralLight
        },
        header: [
            fonts.small,
            {
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_1__["FontWeights"].semibold,
                color: ContextualMenuHeaderColor,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left'
            }
        ]
    };
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["concatStyleSets"])(styles);
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js ***!
  \*********************************************************************************************/
/*! exports provided: ContextualMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return ContextualMenu; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.base */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.base.js");
/* harmony import */ var _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenu.styles */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js");



/**
 * ContextualMenu description
 */
var ContextualMenu = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ContextualMenu_base__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuBase"], _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ContextualMenu' });


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.styles.js ***!
  \****************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var GlobalClassNames = {
    root: 'ms-ContextualMenu',
    container: 'ms-ContextualMenu-container',
    list: 'ms-ContextualMenu-list',
    header: 'ms-ContextualMenu-header',
    title: 'ms-ContextualMenu-title',
    isopen: 'is-open'
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var palette = theme.palette, fonts = theme.fonts, semanticColors = theme.semanticColors;
    var ContextualMenuItemHeight = '32px';
    return {
        root: [
            classNames.root,
            classNames.isopen,
            {
                backgroundColor: semanticColors.bodyBackground,
                minWidth: '180px'
            },
            className
        ],
        container: [
            classNames.container,
            {
                selectors: {
                    ':focus': { outline: 0 }
                }
            }
        ],
        list: [
            classNames.list,
            classNames.isopen,
            {
                listStyleType: 'none',
                margin: '0',
                padding: '0',
                lineHeight: '0'
            }
        ],
        header: [
            classNames.header,
            fonts.small,
            {
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].semibold,
                color: semanticColors.menuHeader,
                background: 'none',
                backgroundColor: 'transparent',
                border: 'none',
                height: ContextualMenuItemHeight,
                lineHeight: ContextualMenuItemHeight,
                cursor: 'default',
                padding: '0px 6px',
                userSelect: 'none',
                textAlign: 'left'
            }
        ],
        title: [
            classNames.title,
            {
                fontSize: '16px',
                paddingRight: '14px',
                paddingLeft: '14px',
                paddingBottom: '5px',
                paddingTop: '5px',
                backgroundColor: palette.neutralLight
            }
        ]
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js ***!
  \***************************************************************************************************/
/*! exports provided: DirectionalHint, ContextualMenuItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return ContextualMenuItemType; });
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/DirectionalHint */ "./node_modules/office-ui-fabric-react/lib/common/DirectionalHint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__["DirectionalHint"]; });


var ContextualMenuItemType;
(function (ContextualMenuItemType) {
    ContextualMenuItemType[ContextualMenuItemType["Normal"] = 0] = "Normal";
    ContextualMenuItemType[ContextualMenuItemType["Divider"] = 1] = "Divider";
    ContextualMenuItemType[ContextualMenuItemType["Header"] = 2] = "Header";
    ContextualMenuItemType[ContextualMenuItemType["Section"] = 3] = "Section";
})(ContextualMenuItemType || (ContextualMenuItemType = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js ***!
  \******************************************************************************************************/
/*! exports provided: ContextualMenuItemBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemBase", function() { return ContextualMenuItemBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Icon */ "./node_modules/office-ui-fabric-react/lib/Icon.js");





var renderItemIcon = function (props) {
    var item = props.item, hasIcons = props.hasIcons, classNames = props.classNames;
    var iconProps = item.iconProps;
    if (!hasIcons) {
        return null;
    }
    if (item.onRenderIcon) {
        return item.onRenderIcon(props);
    }
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, iconProps, { className: classNames.icon }));
};
var renderCheckMarkIcon = function (_a) {
    var onCheckmarkClick = _a.onCheckmarkClick, item = _a.item, classNames = _a.classNames;
    var isItemChecked = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["getIsChecked"])(item);
    if (onCheckmarkClick) {
        var onClick = function (e) { return onCheckmarkClick(item, e); };
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], { iconName: isItemChecked ? 'CheckMark' : '', className: classNames.checkmarkIcon, onClick: onClick });
    }
    return null;
};
var renderItemName = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.text || item.name) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.label }, item.text || item.name);
    }
    return null;
};
var renderSecondaryText = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (item.secondaryText) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: classNames.secondaryText }, item.secondaryText);
    }
    return null;
};
var renderSubMenuIcon = function (_a) {
    var item = _a.item, classNames = _a.classNames;
    if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item)) {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_4__["Icon"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ iconName: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])() ? 'ChevronLeft' : 'ChevronRight' }, item.submenuIconProps, { className: classNames.subMenuIcon })));
    }
    return null;
};
var ContextualMenuItemBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuItemBase, _super);
    function ContextualMenuItemBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openSubMenu = function () {
            var _a = _this.props, item = _a.item, openSubMenu = _a.openSubMenu, getSubmenuTarget = _a.getSubmenuTarget;
            if (getSubmenuTarget) {
                var submenuTarget = getSubmenuTarget();
                if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item) && openSubMenu && submenuTarget) {
                    openSubMenu(item, submenuTarget);
                }
            }
        };
        _this.dismissSubMenu = function () {
            var _a = _this.props, item = _a.item, dismissSubMenu = _a.dismissSubMenu;
            if (Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_2__["hasSubmenu"])(item) && dismissSubMenu) {
                dismissSubMenu();
            }
        };
        _this.dismissMenu = function (dismissAll) {
            var dismissMenu = _this.props.dismissMenu;
            if (dismissMenu) {
                dismissMenu(undefined /* ev */, dismissAll);
            }
        };
        return _this;
    }
    ContextualMenuItemBase.prototype.render = function () {
        var _a = this.props, item = _a.item, classNames = _a.classNames;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: item.split ? classNames.linkContentMenu : classNames.linkContent },
            renderCheckMarkIcon(this.props),
            renderItemIcon(this.props),
            renderItemName(this.props),
            renderSecondaryText(this.props),
            renderSubMenuIcon(this.props)));
    };
    return ContextualMenuItemBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js ***!
  \*************************************************************************************************/
/*! exports provided: ContextualMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return ContextualMenuItem; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenuItem.base */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.base.js");
/* harmony import */ var _ContextualMenuItem_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenuItem.styles */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.styles.js");



/**
 * ContextualMenuItem description
 */
var ContextualMenuItem = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuItemBase"], _ContextualMenuItem_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'ContextualMenuItem' });


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.styles.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.styles.js ***!
  \********************************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
// import {
//   IStyle,
//   ITheme,
// } from '../../Styling';
var getStyles = function (props) {
    var className = props.className
    // theme,
    ;
    // const { palette, semanticColors } = theme;
    return {
        root: [
            'ms-ContextualMenuItem',
            {
            // Insert css properties
            },
            className
        ]
        // Insert className styles
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ContextualMenuAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuAnchor", function() { return ContextualMenuAnchor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");







var ContextualMenuAnchor = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuAnchor, _super);
    function ContextualMenuAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._anchor = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._getSubmenuTarget = function () {
            return _this._anchor.current ? _this._anchor.current : undefined;
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClick = _a.onItemClick;
            if (onItemClick) {
                onItemClick(item, ev);
            }
        };
        return _this;
    }
    ContextualMenuAnchor.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__["ContextualMenuItem"] : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var anchorRel = item.rel;
        if (item.target && item.target.toLowerCase() === '_blank') {
            anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
        }
        var subMenuId = this._getSubMenuId(item);
        var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["hasSubmenu"])(item);
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(item, _Utilities__WEBPACK_IMPORTED_MODULE_2__["anchorProperties"]);
        var disabled = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item);
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: item.keytipProps, ariaDescribedBy: nativeProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, nativeProps, keytipAttributes, { ref: _this._anchor, href: item.href, target: item.target, rel: anchorRel, className: classNames.root, role: "menuitem", "aria-owns": item.key === expandedMenuItemKey ? subMenuId : undefined, "aria-haspopup": itemHasSubmenu || undefined, "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item), style: item.style, onClick: _this._onItemClick, onMouseEnter: _this._onItemMouseEnter, onMouseLeave: _this._onItemMouseLeave, onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : null }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, { componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick.bind(_this, item) : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }))); })));
    };
    return ContextualMenuAnchor;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: ContextualMenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuButton", function() { return ContextualMenuButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");







var ContextualMenuButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuButton, _super);
    function ContextualMenuButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._getSubmenuTarget = function () {
            return _this._btn.current ? _this._btn.current : undefined;
        };
        return _this;
    }
    ContextualMenuButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_6__["ContextualMenuItem"] : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemMouseDown = _a.onItemMouseDown, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var subMenuId = this._getSubMenuId(item);
        var ariaLabel = item.ariaLabel || item.text || item.name || '';
        var isChecked = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["getIsChecked"])(item);
        var canCheck = isChecked !== null;
        var defaultRole = canCheck ? 'menuitemcheckbox' : 'menuitem';
        var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["hasSubmenu"])(item);
        var buttonNativeProperties = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(item, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"]);
        // Do not add the disabled attribute to the button so that it is focusable
        delete buttonNativeProperties.disabled;
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick,
            onKeyDown: itemHasSubmenu ? this._onItemKeyDown : null,
            onMouseEnter: this._onItemMouseEnter,
            onMouseLeave: this._onItemMouseLeave,
            onMouseDown: function (ev) { return (onItemMouseDown ? onItemMouseDown(item, ev) : undefined); },
            onMouseMove: this._onItemMouseMove,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-haspopup': itemHasSubmenu || undefined,
            'aria-owns': item.key === expandedMenuItemKey ? subMenuId : undefined,
            'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
            'aria-checked': canCheck ? !!isChecked : undefined,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item),
            role: item.role || defaultRole,
            style: item.style
        };
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_4__["KeytipData"], { keytipProps: keytipProps, ariaDescribedBy: buttonNativeProperties['aria-describedby'], disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_5__["isItemDisabled"])(item) }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: _this._btn }, buttonNativeProperties, itemButtonProperties, keytipAttributes),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, { componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick.bind(_this, item) : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }))); }));
    };
    return ContextualMenuButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ContextualMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemWrapper", function() { return ContextualMenuItemWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var ContextualMenuItemWrapper = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuItemWrapper, _super);
    function ContextualMenuItemWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onItemMouseEnter = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, ev.currentTarget);
            }
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, ev.currentTarget);
            }
        };
        _this._onItemMouseLeave = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseLeave = _a.onItemMouseLeave;
            if (onItemMouseLeave) {
                onItemMouseLeave(item, ev);
            }
        };
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._onItemMouseMove = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, ev.currentTarget);
            }
        };
        _this._getSubMenuId = function (item) {
            var getSubMenuId = _this.props.getSubMenuId;
            if (getSubMenuId) {
                return getSubMenuId(item);
            }
        };
        _this._getSubmenuTarget = function () {
            return undefined;
        };
        return _this;
    }
    return ContextualMenuItemWrapper;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: ContextualMenuSplitButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuSplitButton", function() { return ContextualMenuSplitButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContextualMenu.classNames */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.classNames.js");
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../KeytipData */ "./node_modules/office-ui-fabric-react/lib/KeytipData.js");
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utilities/contextualMenu/index */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Divider */ "./node_modules/office-ui-fabric-react/lib/Divider.js");
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");









var TouchIdleDelay = 500; /* ms */
var ContextualMenuSplitButton = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContextualMenuSplitButton, _super);
    function ContextualMenuSplitButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (ev.which === 13 /* enter */) {
                _this._executeItemClick(ev);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._getSubmenuTarget = function () {
            return _this._splitButton;
        };
        _this._onItemMouseEnterPrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseEnterIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, _this._splitButton);
            }
        };
        _this._onItemMouseMovePrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseMoveIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, _this._splitButton);
            }
        };
        _this._onIconItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, (_this._splitButton ? _this._splitButton : ev.currentTarget));
            }
        };
        _this._executeItemClick = function (ev) {
            var _a = _this.props, item = _a.item, executeItemClick = _a.executeItemClick, onItemClick = _a.onItemClick;
            if (item.disabled || item.isDisabled) {
                return;
            }
            if (_this._processingTouch && onItemClick) {
                return onItemClick(item, ev);
            }
            if (executeItemClick) {
                executeItemClick(item, ev);
            }
        };
        _this._onTouchStart = function (ev) {
            if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
                _this._handleTouchAndPointerEvent(ev);
            }
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._handleTouchAndPointerEvent(ev);
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        };
        return _this;
    }
    ContextualMenuSplitButton.prototype.componentDidMount = function () {
        if (this._splitButton && 'onpointerdown' in this._splitButton) {
            this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
        }
    };
    ContextualMenuSplitButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, onItemMouseLeave = _a.onItemMouseLeave, expandedMenuItemKey = _a.expandedMenuItemKey;
        var itemHasSubmenu = Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["hasSubmenu"])(item);
        var keytipProps = item.keytipProps;
        if (keytipProps) {
            keytipProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { hasMenu: true });
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_KeytipData__WEBPACK_IMPORTED_MODULE_5__["KeytipData"], { keytipProps: keytipProps, disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item) }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: function (splitButton) { return (_this._splitButton = splitButton); }, role: 'menuitem', "aria-label": item.ariaLabel, className: classNames.splitContainer, "aria-disabled": Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item), "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-haspopup": true, "aria-describedby": Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["mergeAriaAttributeValues"])(item.ariaDescription, keytipAttributes['aria-describedby']), "aria-checked": item.isChecked || item.checked, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, onMouseEnter: _this._onItemMouseEnterPrimary, onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { subMenuProps: null, items: null })) : undefined, onMouseMove: _this._onItemMouseMovePrimary, onKeyDown: _this._onItemKeyDown, onClick: _this._executeItemClick, onTouchStart: _this._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": item['aria-roledescription'] },
            _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
            _this._renderSplitDivider(item),
            _this._renderSplitIconButton(item, classNames, index, keytipAttributes))); }));
    };
    ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"] : _b, onItemClick = _a.onItemClick;
        var itemProps = {
            key: item.key,
            disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item) || item.primaryDisabled,
            name: item.name,
            text: item.text || item.name,
            className: classNames.splitPrimary,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            iconProps: item.iconProps,
            'data-is-focusable': false,
            'aria-hidden': true
        };
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"])),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, { "data-is-focusable": false, item: itemProps, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick.bind(this, item) : undefined, hasIcons: hasIcons })));
    };
    ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
        var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_4__["getSplitButtonVerticalDividerClassNames"];
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Divider__WEBPACK_IMPORTED_MODULE_7__["VerticalDivider"], { getClassNames: getDividerClassNames });
    };
    ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, index, keytipAttributes) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItem"] : _b, onItemMouseLeave = _a.onItemMouseLeave, onItemMouseDown = _a.onItemMouseDown, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var itemProps = {
            onClick: this._onIconItemClick,
            disabled: Object(_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__["isItemDisabled"])(item),
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
            key: item.key
        };
        var buttonProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["assign"])({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_2__["buttonProperties"]), {
            onMouseEnter: this._onItemMouseEnterIcon,
            onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
            onMouseDown: function (ev) { return (onItemMouseDown ? onItemMouseDown(item, ev) : undefined); },
            onMouseMove: this._onItemMouseMoveIcon,
            'data-is-focusable': false,
            'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
            'aria-hidden': true
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, buttonProps),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ChildrenRenderer, { componentRef: item.componentRef, item: itemProps, classNames: classNames, index: index, hasIcons: false, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: this._getSubmenuTarget })));
    };
    ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
        var _this = this;
        var onTap = this.props.onTap;
        if (onTap) {
            onTap(ev);
        }
        // If we already have an existing timeout from a previous touch/pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    return ContextualMenuSplitButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_8__["ContextualMenuItemWrapper"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: ContextualMenuAnchor, ContextualMenuButton, ContextualMenuSplitButton, ContextualMenuItemWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextualMenuAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextualMenuAnchor */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuAnchor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuAnchor", function() { return _ContextualMenuAnchor__WEBPACK_IMPORTED_MODULE_0__["ContextualMenuAnchor"]; });

/* harmony import */ var _ContextualMenuButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenuButton */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuButton", function() { return _ContextualMenuButton__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuButton"]; });

/* harmony import */ var _ContextualMenuSplitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenuSplitButton */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuSplitButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuSplitButton", function() { return _ContextualMenuSplitButton__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuSplitButton"]; });

/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextualMenuItemWrapper */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItemWrapper/ContextualMenuItemWrapper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemWrapper", function() { return _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_3__["ContextualMenuItemWrapper"]; });







/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/index.js ***!
  \************************************************************************************/
/*! exports provided: ContextualMenu, DirectionalHint, ContextualMenuItemType, ContextualMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextualMenu */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenu", function() { return _ContextualMenu__WEBPACK_IMPORTED_MODULE_0__["ContextualMenu"]; });

/* harmony import */ var _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextualMenu.types */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenu.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalHint", function() { return _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_1__["DirectionalHint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItemType", function() { return _ContextualMenu_types__WEBPACK_IMPORTED_MODULE_1__["ContextualMenuItemType"]; });

/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextualMenuItem */ "./node_modules/office-ui-fabric-react/lib/components/ContextualMenu/ContextualMenuItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextualMenuItem", function() { return _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_2__["ContextualMenuItem"]; });






/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js ***!
  \**************************************************************************************************/
/*! exports provided: getDividerClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDividerClassNames", function() { return getDividerClassNames; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");


var getDividerClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["memoizeFunction"])(function (theme) {
    return Object(_Styling__WEBPACK_IMPORTED_MODULE_1__["mergeStyleSets"])({
        wrapper: {
            display: 'inline-flex',
            height: '100%',
            alignItems: 'center'
        },
        divider: {
            width: 1,
            height: '100%',
            backgroundColor: theme.palette.neutralTertiaryAlt
        }
    });
});


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js ***!
  \***************************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return VerticalDivider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalDivider.classNames */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.classNames.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");



var VerticalDivider = function (props) {
    var theme = Object(_Styling__WEBPACK_IMPORTED_MODULE_2__["getTheme"])();
    var classNames = props.getClassNames ? props.getClassNames(theme) : Object(_VerticalDivider_classNames__WEBPACK_IMPORTED_MODULE_1__["getDividerClassNames"])(theme);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classNames.wrapper },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: classNames.divider })));
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Divider/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Divider/index.js ***!
  \*****************************************************************************/
/*! exports provided: VerticalDivider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalDivider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalDivider */ "./node_modules/office-ui-fabric-react/lib/components/Divider/VerticalDivider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalDivider", function() { return _VerticalDivider__WEBPACK_IMPORTED_MODULE_0__["VerticalDivider"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js ***!
  \*****************************************************************************/
/*! exports provided: Fabric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return Fabric; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Fabric_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fabric.styles */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var Fabric = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Fabric, _super);
    function Fabric(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._onMouseDown = function (ev) {
            _this.setState({ isFocusVisible: false });
        };
        _this._onKeyDown = function (ev) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["isDirectionalKeyCode"])(ev.which)) {
                _this.setState({ isFocusVisible: true });
            }
        };
        _this.state = { isFocusVisible: false };
        return _this;
    }
    Fabric.prototype.render = function () {
        var classNames = getClassNames(_Fabric_styles__WEBPACK_IMPORTED_MODULE_3__["getStyles"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, this.state));
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]);
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, { className: classNames.root, ref: this._rootElement }));
    };
    Fabric.prototype.componentDidMount = function () {
        var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getWindow"])(this._rootElement.value);
        if (win) {
            this._events.on(win, 'mousedown', this._onMouseDown, true);
            this._events.on(win, 'keydown', this._onKeyDown, true);
        }
    };
    Fabric = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["customizable"])('Fabric', ['theme', 'styles'])
    ], Fabric);
    return Fabric;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.styles.js ***!
  \************************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var inheritFont = { fontFamily: 'inherit' };
var GlobalClassNames = {
    root: 'ms-Fabric'
};
var getStyles = function (props) {
    var theme = props.theme, className = props.className, isFocusVisible = props.isFocusVisible;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            isFocusVisible && 'is-focusVisible',
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont,
                    ':global(button)': {
                        overflow: 'visible',
                        margin: 0
                    }
                }
            },
            className
        ]
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Fabric/index.js ***!
  \****************************************************************************/
/*! exports provided: Fabric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fabric */ "./node_modules/office-ui-fabric-react/lib/components/Fabric/Fabric.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fabric", function() { return _Fabric__WEBPACK_IMPORTED_MODULE_0__["Fabric"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js ***!
  \***********************************************************************************/
/*! exports provided: FocusZone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return FocusZone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FocusZone.types */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["createRef"])();
        _this._onFocus = function (ev) {
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, onFocusNotification = _a.onFocusNotification;
            if (onFocusNotification) {
                onFocusNotification();
            }
            if (_this._isImmediateDescendantOfZone(ev.target)) {
                _this._activeElement = ev.target;
                _this._setFocusAlignment(_this._activeElement);
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        _this._activeElement = parentElement;
                        break;
                    }
                    parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
        };
        _this._onMouseDown = function (ev) {
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(target)) {
                    _this._setActiveElement(target, true);
                }
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev) {
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
            if (disabled) {
                return;
            }
            if (document.activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (isInnerZoneKeystroke &&
                isInnerZoneKeystroke(ev) &&
                _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusSubZone"])(ev.target)) {
                    if (!_this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                switch (ev.which) {
                    case 32 /* space */:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case 37 /* left */:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical && _this._moveFocusLeft()) {
                            break;
                        }
                        return;
                    case 39 /* right */:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical && _this._moveFocusRight()) {
                            break;
                        }
                        return;
                    case 38 /* up */:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].horizontal && _this._moveFocusUp()) {
                            break;
                        }
                        return;
                    case 40 /* down */:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].horizontal && _this._moveFocusDown()) {
                            break;
                        }
                        return;
                    case 9 /* tab */:
                        if (_this.props.allowTabKey ||
                            _this.props.handleTabKey === 1 /* all */ ||
                            (_this.props.handleTabKey === 2 /* inputOnly */ &&
                                _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].horizontal || direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional) {
                                focusChanged = ev.shiftKey ? _this._moveFocusLeft() : _this._moveFocusRight();
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                        }
                        return;
                    case 36 /* home */:
                        if (_this._isElementInput(ev.target) &&
                            !_this._shouldInputLoseFocus(ev.target, false)) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current &&
                            firstChild &&
                            _this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case 35 /* end */:
                        if (_this._isElementInput(ev.target) &&
                            !_this._shouldInputLoseFocus(ev.target, true)) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current &&
                            _this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case 13 /* enter */:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._warnDeprecations({
            rootProps: undefined,
            allowTabKey: 'handleTabKey'
        });
        _this._id = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getId"])('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        _this._processingTabKey = false;
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        _allInstances[this._id] = this;
        if (this._root.current) {
            var windowElement = this._root.current.ownerDocument.defaultView;
            var parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(this._root.current, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== document.body && parentElement.nodeType === 1) {
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getDocument"])().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_3__["htmlElementProperties"]);
        var Tag = this.props.elementType || 'div';
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Tag, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ role: "presentation" }, divProps, rootProps, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["css"])('ms-FocusZone', className), ref: this._root, "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param {boolean} forceIntoFirstElement If true, focus will be forced into the first element, even if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement &&
                this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(this._root.current, this._activeElement) &&
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param {HTMLElement} element The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === 9 /* tab */) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignemnt) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignemnt) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root.current) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                _Utilities__WEBPACK_IMPORTED_MODULE_3__["EventGroup"].raise(target, 'click', null, true);
                return true;
            }
            target = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward
                ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, element)
                : Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(this._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getNextElement"])(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getPreviousElement"])(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.bottom > activeRect.top &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else {
                if (!shouldWrap) {
                    distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getRTL"])(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.top < activeRect.bottom &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== document.body) {
            if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(parentElement)) {
                return parentElement;
            }
            parentElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getParent"])(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return this._root.current;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["elementContains"])(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementFocusZone"])(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["isElementTabbable"])(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone &&
                        ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone &&
                    ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element &&
            element.tagName &&
            (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey &&
            element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of length and it is forward.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit tab)
            // and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is determined by calling the
            // callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward) ||
                (!!this.props.handleTabKey &&
                    !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return !!this.props.checkForNoWrap ? Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["shouldWrapFocus"])(element, noWrapDataAttribute) : true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: _FocusZone_types__WEBPACK_IMPORTED_MODULE_2__["FocusZoneDirection"].bidirectional
    };
    return FocusZone;
}(_Utilities__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js ***!
  \*****************************************************************************************/
/*! exports provided: FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return FocusZoneTabbableElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return FocusZoneDirection; });
var FocusZoneTabbableElements;
(function (FocusZoneTabbableElements) {
    /** Tabbing is not allowed */
    FocusZoneTabbableElements[FocusZoneTabbableElements["none"] = 0] = "none";
    /** All tabbing action is allowed */
    FocusZoneTabbableElements[FocusZoneTabbableElements["all"] = 1] = "all";
    /** Tabbing is allowed only on input elements */
    FocusZoneTabbableElements[FocusZoneTabbableElements["inputOnly"] = 2] = "inputOnly";
})(FocusZoneTabbableElements || (FocusZoneTabbableElements = {}));
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection || (FocusZoneDirection = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/FocusZone/index.js ***!
  \*******************************************************************************/
/*! exports provided: FocusZone, FocusZoneTabbableElements, FocusZoneDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FocusZone */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZone", function() { return _FocusZone__WEBPACK_IMPORTED_MODULE_0__["FocusZone"]; });

/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FocusZone.types */ "./node_modules/office-ui-fabric-react/lib/components/FocusZone/FocusZone.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneTabbableElements", function() { return _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__["FocusZoneTabbableElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusZoneDirection", function() { return _FocusZone_types__WEBPACK_IMPORTED_MODULE_1__["FocusZoneDirection"]; });





/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js":
/*!******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js ***!
  \******************************************************************************/
/*! exports provided: IconBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return IconBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.types */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js");
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Image/Image */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.js");
/* harmony import */ var _Image_Image_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Image/Image.types */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

/* tslint:disable */

/* tslint:enable */





var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["classNamesFunction"])();
var IconBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](IconBase, _super);
    function IconBase(props) {
        var _this = _super.call(this, props) || this;
        _this.onImageLoadingStateChange = function (state) {
            if (_this.props.imageProps && _this.props.imageProps.onLoadingStateChange) {
                _this.props.imageProps.onLoadingStateChange(state);
            }
            if (state === _Image_Image_types__WEBPACK_IMPORTED_MODULE_4__["ImageLoadState"].error) {
                _this.setState({ imageLoadError: true });
            }
        };
        _this.state = {
            imageLoadError: false
        };
        return _this;
    }
    IconBase.prototype.render = function () {
        var _a = this.props, ariaLabel = _a.ariaLabel, className = _a.className, styles = _a.styles, iconName = _a.iconName, imageErrorAs = _a.imageErrorAs;
        var isPlaceholder = typeof iconName === 'string' && iconName.length === 0;
        var isImage = this.props.iconType === _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"].image || this.props.iconType === _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"].Image;
        var _b = this._getIconContent(iconName), iconClassName = _b.iconClassName, children = _b.children;
        var classNames = getClassNames(styles, {
            className: className,
            iconClassName: iconClassName,
            isImage: isImage,
            isPlaceholder: isPlaceholder
        });
        var containerProps = ariaLabel
            ? {
                'aria-label': ariaLabel
            }
            : {
                role: 'presentation',
                'aria-hidden': true
            };
        var RootType = isImage ? 'div' : 'i';
        var nativeProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_5__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_5__["htmlElementProperties"]);
        var imageLoadError = this.state.imageLoadError;
        var imageProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props.imageProps, { onLoadingStateChange: this.onImageLoadingStateChange });
        var ImageType = (imageLoadError && imageErrorAs) || _Image_Image__WEBPACK_IMPORTED_MODULE_3__["Image"];
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RootType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ "data-icon-name": iconName }, nativeProps, containerProps, { className: classNames.root }), isImage ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ImageType, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps)) : children));
    };
    IconBase.prototype._getIconContent = function (name) {
        var iconDefinition = Object(_Styling__WEBPACK_IMPORTED_MODULE_6__["getIcon"])(name) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return {
            children: iconDefinition.code,
            iconClassName: iconDefinition.subset.className
        };
    };
    return IconBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js ***!
  \*************************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.base */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js");
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.styles */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js");



/**
 * Icons are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
var Icon = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Icon_base__WEBPACK_IMPORTED_MODULE_1__["IconBase"], _Icon_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.styles.js ***!
  \********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
var getStyles = function (props) {
    var className = props.className, iconClassName = props.iconClassName, isPlaceholder = props.isPlaceholder, isImage = props.isImage, styles = props.styles;
    return {
        root: [
            isImage && 'ms-Icon-imageContainer',
            isPlaceholder && 'ms-Icon-placeHolder',
            {
                display: 'inline-block'
            },
            isPlaceholder && {
                width: '1em'
            },
            isImage && {
                overflow: 'hidden'
            },
            iconClassName,
            className,
            styles && styles.root,
            styles && styles.imageContainer
        ]
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js ***!
  \*******************************************************************************/
/*! exports provided: IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return IconType; });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType || (IconType = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Icon/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Icon/index.js ***!
  \**************************************************************************/
/*! exports provided: Icon, IconBase, IconType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _Icon__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.base */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconBase", function() { return _Icon_base__WEBPACK_IMPORTED_MODULE_1__["IconBase"]; });

/* harmony import */ var _Icon_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.types */ "./node_modules/office-ui-fabric-react/lib/components/Icon/Icon.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconType", function() { return _Icon_types__WEBPACK_IMPORTED_MODULE_2__["IconType"]; });






/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js ***!
  \********************************************************************************/
/*! exports provided: ImageBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBase", function() { return ImageBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Image_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image.types */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js");




var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var KEY_PREFIX = 'fabricImage';
var ImageBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ImageBase, _super);
    function ImageBase(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].portrait;
        _this._imageElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._frameElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._onImageLoaded = function (ev) {
            var _a = _this.props, src = _a.src, onLoad = _a.onLoad;
            if (onLoad) {
                onLoad(ev);
            }
            _this._computeCoverStyle(_this.props);
            if (src) {
                _this.setState({
                    loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded
                });
            }
        };
        _this._onImageError = function (ev) {
            if (_this.props.onError) {
                _this.props.onError(ev);
            }
            _this.setState({
                loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].error
            });
        };
        _this.state = {
            loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded
        };
        return _this;
    }
    ImageBase_1 = ImageBase;
    ImageBase.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded
            });
        }
        else if (this.state.loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    ImageBase.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    ImageBase.prototype.render = function () {
        var imageProps = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["imageProperties"], ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, shouldStartVisible = _a.shouldStartVisible, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame, styles = _a.styles, theme = _a.theme;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            width: width,
            height: height,
            maximizeFrame: maximizeFrame,
            shouldFadeIn: shouldFadeIn,
            shouldStartVisible: shouldStartVisible,
            isLoaded: loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded ||
                (loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded && this.props.shouldStartVisible),
            isLandscape: coverStyle === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].landscape,
            isCenter: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].center,
            isContain: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].contain,
            isCover: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].cover,
            isNone: imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].none,
            isError: loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].error,
            isNotImageFit: imageFit === undefined
        });
        // If image dimensions aren't specified, the natural size of the image is used.
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.root, style: { width: width, height: height }, ref: this._frameElement },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: classNames.image, ref: this._imageElement, src: src, alt: alt, role: role }))));
    };
    ImageBase.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = this._imageElement.current
                ? (src && (this._imageElement.current.naturalWidth > 0 && this._imageElement.current.naturalHeight > 0)) ||
                    (this._imageElement.current.complete && ImageBase_1._svgRegex.test(src))
                : false;
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageLoadState"].loaded
                });
            }
        }
    };
    ImageBase.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].cover || imageFit === _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageFit"].contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement.current &&
            this._frameElement.current) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.current.clientWidth / this._frameElement.current.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.current.naturalWidth / this._imageElement.current.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].landscape;
            }
            else {
                this._coverStyle = _Image_types__WEBPACK_IMPORTED_MODULE_3__["ImageCoverStyle"].portrait;
            }
        }
    };
    ImageBase.defaultProps = {
        shouldFadeIn: true
    };
    ImageBase._svgRegex = /\.svg$/i;
    ImageBase = ImageBase_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["customizable"])('Image', ['theme', 'styles'])
    ], ImageBase);
    return ImageBase;
    var ImageBase_1;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.js ***!
  \***************************************************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Image_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.base */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.base.js");
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.styles */ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js");



var Image = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Image_base__WEBPACK_IMPORTED_MODULE_1__["ImageBase"], _Image_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.styles.js ***!
  \**********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var GlobalClassNames = {
    root: 'ms-Image',
    rootMaximizeFrame: 'ms-Image--maximizeFrame',
    image: 'ms-Image-image',
    imageCenter: 'ms-Image-image--center',
    imageContain: 'ms-Image-image--contain',
    imageCover: 'ms-Image-image--cover',
    imageNone: 'ms-Image-image--none',
    imageLandscape: 'ms-Image-image--landscape',
    imagePortrait: 'ms-Image-image--portrait'
};
var getStyles = function (props) {
    var className = props.className, width = props.width, height = props.height, maximizeFrame = props.maximizeFrame, isLoaded = props.isLoaded, shouldFadeIn = props.shouldFadeIn, shouldStartVisible = props.shouldStartVisible, isLandscape = props.isLandscape, isCenter = props.isCenter, isContain = props.isContain, isCover = props.isCover, isNone = props.isNone, isError = props.isError, isNotImageFit = props.isNotImageFit, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    var ImageFitStyles = {
        position: 'absolute',
        left: '50% /* @noflip */',
        top: '50%',
        transform: 'translate(-50%,-50%)' // @todo test RTL renders transform: translate(50%,-50%);
    };
    return {
        root: [
            classNames.root,
            {
                overflow: 'hidden'
            },
            maximizeFrame && [
                classNames.rootMaximizeFrame,
                {
                    height: '100%',
                    width: '100%'
                }
            ],
            (isCenter || isContain || isCover) && {
                position: 'relative'
            },
            className
        ],
        image: [
            classNames.image,
            {
                display: 'block',
                opacity: 0
            },
            isLoaded && [
                'is-loaded',
                {
                    opacity: 1
                }
            ],
            isCenter && [classNames.imageCenter, ImageFitStyles],
            isContain && [
                classNames.imageContain,
                isLandscape && {
                    width: '100%',
                    height: 'auto'
                },
                !isLandscape && {
                    width: 'auto',
                    height: '100%'
                },
                ImageFitStyles
            ],
            isCover && [
                classNames.imageCover,
                isLandscape && {
                    width: 'auto',
                    height: '100%'
                },
                !isLandscape && {
                    width: '100%',
                    height: 'auto'
                },
                ImageFitStyles
            ],
            isNone && [
                classNames.imageNone,
                {
                    width: 'auto',
                    height: 'auto'
                }
            ],
            isNotImageFit && [
                !!width &&
                    !height && {
                    height: 'auto',
                    width: '100%'
                },
                !width &&
                    !!height && {
                    height: '100%',
                    width: 'auto'
                },
                !!width &&
                    !!height && {
                    height: '100%',
                    width: '100%'
                }
            ],
            isLoaded && shouldFadeIn && !shouldStartVisible && _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].fadeIn400,
            isLandscape && classNames.imageLandscape,
            !isLandscape && classNames.imagePortrait,
            !isLoaded && 'is-notLoaded',
            shouldFadeIn && 'is-fadeIn',
            isError && 'is-error'
        ]
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Image/Image.types.js ***!
  \*********************************************************************************/
/*! exports provided: ImageFit, ImageCoverStyle, ImageLoadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageFit", function() { return ImageFit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCoverStyle", function() { return ImageCoverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoadState", function() { return ImageLoadState; });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit || (ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle || (ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState || (ImageLoadState = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js ***!
  \*************************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return KeytipData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_keytips_KeytipManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/keytips/KeytipManager */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js");
/* harmony import */ var _utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/keytips/KeytipUtils */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js");




/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 *
 * @export
 * @class KeytipData
 * @extends {BaseComponent<IKeytipDataProps & IRenderComponent<{}>, {}>}
 */
var KeytipData = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KeytipData, _super);
    function KeytipData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._keytipManager = _utilities_keytips_KeytipManager__WEBPACK_IMPORTED_MODULE_2__["KeytipManager"].getInstance();
        return _this;
    }
    KeytipData.prototype.componentDidMount = function () {
        // Register Keytip in KeytipManager
        if (this.props.keytipProps) {
            this._uniqueId = this._keytipManager.register(this._getKtpProps());
        }
    };
    KeytipData.prototype.componentWillUnmount = function () {
        // Unregister Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.unregister(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.componentDidUpdate = function () {
        // Update Keytip in KeytipManager
        this.props.keytipProps && this._keytipManager.update(this._getKtpProps(), this._uniqueId);
    };
    KeytipData.prototype.render = function () {
        var _a = this.props, children = _a.children, keytipProps = _a.keytipProps, ariaDescribedBy = _a.ariaDescribedBy;
        var nativeKeytipProps = {};
        if (keytipProps) {
            nativeKeytipProps = this._getKtpAttrs(keytipProps, ariaDescribedBy);
        }
        return children(nativeKeytipProps);
    };
    KeytipData.prototype._getKtpProps = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ disabled: this.props.disabled }, this.props.keytipProps);
    };
    /**
     * Gets the aria- and data- attributes to attach to the component
     * @param keytipProps
     * @param describedByPrepend
     */
    KeytipData.prototype._getKtpAttrs = function (keytipProps, describedByPrepend) {
        if (keytipProps) {
            // Add the parent overflow sequence if necessary
            var newKeytipProps = this._keytipManager.addParentOverflow(keytipProps);
            // Construct aria-describedby and data-ktp-id attributes and return
            var ariaDescribedBy = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_3__["getAriaDescribedBy"])(newKeytipProps.keySequences);
            var keySequences = newKeytipProps.keySequences.slice();
            if (newKeytipProps.overflowSetSequence) {
                keySequences = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_3__["mergeOverflows"])(keySequences, newKeytipProps.overflowSetSequence);
            }
            var ktpId = Object(_utilities_keytips_KeytipUtils__WEBPACK_IMPORTED_MODULE_3__["sequencesToID"])(keySequences);
            return {
                'aria-describedby': Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["mergeAriaAttributeValues"])(describedByPrepend, ariaDescribedBy),
                'data-ktp-target': ktpId,
                'data-ktp-execute-target': ktpId
            };
        }
        return undefined;
    };
    return KeytipData;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/KeytipData/index.js ***!
  \********************************************************************************/
/*! exports provided: KeytipData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipData */ "./node_modules/office-ui-fabric-react/lib/components/KeytipData/KeytipData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeytipData", function() { return _KeytipData__WEBPACK_IMPORTED_MODULE_0__["KeytipData"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js ***!
  \********************************************************************************/
/*! exports provided: LayerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return LayerBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Fabric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Fabric */ "./node_modules/office-ui-fabric-react/lib/Fabric.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");

/* tslint:disable:no-unused-variable */


/* tslint:enable:no-unused-variable */


var _layersByHostId = {};
var _defaultHostSelector;
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["classNamesFunction"])();
var LayerBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerBase, _super);
    function LayerBase(props) {
        var _this = _super.call(this, props) || this;
        _this._rootElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["createRef"])();
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    LayerBase.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    /**
     * Sets the default target selector to use when determining the host in which
     * Layered content will be injected into. If not provided, an element will be
     * created at the end of the document body.
     *
     * Passing in a falsey value will clear the default target and reset back to
     * using a created element at the end of document body.
     */
    LayerBase.setDefaultTarget = function (selector) {
        _defaultHostSelector = selector;
    };
    LayerBase.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    LayerBase.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    LayerBase.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        var _a = this.props, className = _a.className, styles = _a.styles, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className,
            isNotHost: !this.props.hostId
        });
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var rootElement = this._rootElement.current;
                var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(rootElement);
                if (!doc || !rootElement) {
                    return;
                }
                this._layerElement = doc.createElement('div');
                this._layerElement.className = classNames.root;
                host.appendChild(this._layerElement);
                Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["setVirtualParent"])(this._layerElement, rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_renderSubtreeIntoContainer"](this, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Fabric__WEBPACK_IMPORTED_MODULE_3__["Fabric"], { className: classNames.content }, this.props.children), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
    };
    LayerBase.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "ms-Layer", ref: this._rootElement });
    };
    LayerBase.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    LayerBase.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["getDocument"])(this._rootElement.current);
        if (!doc) {
            return undefined;
        }
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return _defaultHostSelector ? doc.querySelector(_defaultHostSelector) : doc.body;
        }
    };
    LayerBase.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    LayerBase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_4__["customizable"])('Layer', ['theme', 'hostId'])
    ], LayerBase);
    return LayerBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js ***!
  \***************************************************************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js");
/* harmony import */ var _Layer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layer.styles */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js");



var Layer = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"], _Layer_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"]);


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.styles.js ***!
  \**********************************************************************************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var GlobalClassNames = {
    root: 'ms-Layer',
    rootNoHost: 'ms-Layer--fixed',
    content: 'ms-Layer-content'
};
var getStyles = function (props) {
    var className = props.className, isNotHost = props.isNotHost, theme = props.theme;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            isNotHost && [
                classNames.rootNoHost,
                {
                    position: 'fixed',
                    zIndex: _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Layer,
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    visibility: 'hidden'
                }
            ],
            className
        ],
        content: [
            classNames.content,
            {
                visibility: 'visible'
            }
        ]
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js ***!
  \*******************************************************************************/
/*! exports provided: LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return LayerHost; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layer.base */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js");




var LayerHost = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        _Layer_base__WEBPACK_IMPORTED_MODULE_3__["LayerBase"].notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        _Layer_base__WEBPACK_IMPORTED_MODULE_3__["LayerBase"].notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.props, { className: Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["css"])('ms-LayerHost', this.props.className) }));
    };
    return LayerHost;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Layer/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Layer/index.js ***!
  \***************************************************************************/
/*! exports provided: Layer, LayerBase, LayerHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _Layer__WEBPACK_IMPORTED_MODULE_0__["Layer"]; });

/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.base */ "./node_modules/office-ui-fabric-react/lib/components/Layer/Layer.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerBase", function() { return _Layer_base__WEBPACK_IMPORTED_MODULE_1__["LayerBase"]; });

/* harmony import */ var _LayerHost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerHost */ "./node_modules/office-ui-fabric-react/lib/components/Layer/LayerHost.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerHost", function() { return _LayerHost__WEBPACK_IMPORTED_MODULE_2__["LayerHost"]; });






/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.base.js":
/*!****************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.base.js ***!
  \****************************************************************************/
/*! exports provided: isRelativeUrl, NavBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return isRelativeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBase", function() { return NavBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _FocusZone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../FocusZone */ "./node_modules/office-ui-fabric-react/lib/FocusZone.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Button */ "./node_modules/office-ui-fabric-react/lib/Button.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icon */ "./node_modules/office-ui-fabric-react/lib/Icon.js");
/* harmony import */ var _Nav_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Nav.styles */ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.styles.js");







// The number pixels per indentation level for Nav links.
var _indentationSize = 14;
// The number of pixels of left margin
var _baseIndent = 3;
// global var used in _isLinkSelectedKey
var _urlResolver;
function isRelativeUrl(url) {
    // A URL is relative if it has no protocol.
    return !!url && !/^[a-z0-9+-.]:\/\//i.test(url);
}
var getClassNames = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["classNamesFunction"])();
var NavBase = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavBase, _super);
    function NavBase(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderLink = function (link) {
            var _a = _this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
            var classNames = getClassNames(styles, { theme: theme, groups: groups });
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.linkText }, link.name);
        };
        _this._renderGroup = function (group, groupIndex) {
            var _a = _this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
            var classNames = getClassNames(styles, {
                theme: theme,
                isGroup: true,
                isExpanded: !_this.state.isGroupCollapsed[group.name],
                groups: groups
            });
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { key: groupIndex, className: classNames.group },
                group.name ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: classNames.chevronButton, onClick: _this._onGroupHeaderClicked.bind(_this, group) },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: classNames.chevronIcon, iconName: "ChevronDown" }),
                    group.name)) : null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: classNames.groupContent }, _this._renderLinks(group.links, 0 /* nestingLevel */))));
        };
        _this.state = {
            isGroupCollapsed: {},
            isLinkExpandStateChanged: false,
            selectedKey: props.initialSelectedKey || props.selectedKey
        };
        if (props.groups) {
            for (var _i = 0, _a = props.groups; _i < _a.length; _i++) {
                var group = _a[_i];
                if (group.collapseByDefault && group.name) {
                    _this.state.isGroupCollapsed[group.name] = true;
                }
            }
        }
        return _this;
    }
    NavBase.prototype.componentWillReceiveProps = function (newProps) {
        var newGroups = newProps.groups || [];
        var isGroupCollapsed = this.state.isGroupCollapsed;
        // If the component's props were updated, new groups may have been added, which may have
        // collapseByDefault set. Ensure that setting is respected for any new groups.
        // (If isGroupCollapsed is already set for a group, don't overwrite that.)
        var hasUpdated = false;
        for (var _i = 0, newGroups_1 = newGroups; _i < newGroups_1.length; _i++) {
            var newGroup = newGroups_1[_i];
            if (newGroup.name && newGroup.collapseByDefault && !isGroupCollapsed.hasOwnProperty(newGroup.name)) {
                isGroupCollapsed[newGroup.name] = true;
                hasUpdated = true;
            }
        }
        if (hasUpdated) {
            this.setState({
                isGroupCollapsed: isGroupCollapsed
            });
        }
    };
    NavBase.prototype.render = function () {
        var _a = this.props, styles = _a.styles, groups = _a.groups, className = _a.className, isOnTop = _a.isOnTop, theme = _a.theme;
        if (!groups) {
            return null;
        }
        var groupElements = groups.map(this._renderGroup);
        var classNames = getClassNames(styles, { theme: theme, className: className, isOnTop: isOnTop, groups: groups });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZone"], { direction: _FocusZone__WEBPACK_IMPORTED_MODULE_3__["FocusZoneDirection"].vertical },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("nav", { role: "navigation", className: classNames.root, "aria-label": this.props.ariaLabel }, groupElements)));
    };
    Object.defineProperty(NavBase.prototype, "selectedKey", {
        get: function () {
            return this.state.selectedKey;
        },
        enumerable: true,
        configurable: true
    });
    NavBase.prototype._renderNavLink = function (link, linkIndex, nestingLevel) {
        var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme, _b = _a.onRenderLink, onRenderLink = _b === void 0 ? this._onRenderLink : _b;
        var classNames = getClassNames(styles, {
            theme: theme,
            isSelected: this._isLinkSelected(link),
            isButtonEntry: link.onClick && !link.forceAnchor,
            leftPadding: _indentationSize * nestingLevel + _baseIndent,
            groups: groups
        });
        // Prevent hijacking of the parent window if link.target is defined
        var rel = link.url && link.target && !isRelativeUrl(link.url) ? 'noopener noreferrer' : undefined;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Button__WEBPACK_IMPORTED_MODULE_4__["ActionButton"], { className: classNames.link, styles: _Nav_styles__WEBPACK_IMPORTED_MODULE_6__["buttonStyles"], href: link.url || (link.forceAnchor ? 'javascript:' : undefined), iconProps: link.iconProps || { iconName: link.icon || '' }, ariaDescription: link.title || link.name, onClick: link.onClick ? this._onNavButtonLinkClicked.bind(this, link) : this._onNavAnchorLinkClicked.bind(this, link), title: link.title || link.name, target: link.target, rel: rel, "aria-label": link.ariaLabel }, onRenderLink(link, this._onRenderLink)));
    };
    NavBase.prototype._renderCompositeLink = function (link, linkIndex, nestingLevel) {
        var divProps = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(link, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"], ['onClick']));
        var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
        var classNames = getClassNames(styles, {
            theme: theme,
            isExpanded: !!link.isExpanded,
            isSelected: this._isLinkSelected(link),
            isLink: true,
            position: _indentationSize * nestingLevel + 1,
            groups: groups
        });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, divProps, { key: link.key || linkIndex, className: classNames.compositeLink }),
            link.links && link.links.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { className: classNames.chevronButton, onClick: this._onLinkExpandClicked.bind(this, link), "aria-label": this.props.expandButtonAriaLabel, "aria-expanded": link.isExpanded ? 'true' : 'false' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Icon__WEBPACK_IMPORTED_MODULE_5__["Icon"], { className: classNames.chevronIcon, iconName: "ChevronDown" }))) : null,
            this._renderNavLink(link, linkIndex, nestingLevel)));
    };
    NavBase.prototype._renderLink = function (link, linkIndex, nestingLevel) {
        var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
        var classNames = getClassNames(styles, { theme: theme, groups: groups });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li", { key: link.key || linkIndex, role: "listitem", className: classNames.navItem },
            this._renderCompositeLink(link, linkIndex, nestingLevel),
            link.isExpanded ? this._renderLinks(link.links, ++nestingLevel) : null));
    };
    NavBase.prototype._renderLinks = function (links, nestingLevel) {
        var _this = this;
        if (!links || !links.length) {
            return null;
        }
        var linkElements = links.map(function (link, linkIndex) {
            return _this._renderLink(link, linkIndex, nestingLevel);
        });
        var _a = this.props, styles = _a.styles, groups = _a.groups, theme = _a.theme;
        var classNames = getClassNames(styles, { theme: theme, groups: groups });
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul", { role: "list", className: classNames.navItems }, linkElements));
    };
    NavBase.prototype._onGroupHeaderClicked = function (group, ev) {
        var isGroupCollapsed = this.state.isGroupCollapsed;
        var groupKey = group.name;
        var isCollapsed = !isGroupCollapsed[groupKey];
        if (group.onHeaderClick) {
            group.onHeaderClick(ev, isCollapsed);
        }
        isGroupCollapsed[groupKey] = isCollapsed;
        this.setState({ isGroupCollapsed: isGroupCollapsed });
        ev.preventDefault();
        ev.stopPropagation();
    };
    NavBase.prototype._onLinkExpandClicked = function (link, ev) {
        var onLinkExpandClick = this.props.onLinkExpandClick;
        if (onLinkExpandClick) {
            onLinkExpandClick(ev, link);
        }
        if (!ev.defaultPrevented) {
            link.isExpanded = !link.isExpanded;
            this.setState({ isLinkExpandStateChanged: true });
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    NavBase.prototype._onNavAnchorLinkClicked = function (link, ev) {
        if (this.props.onLinkClick) {
            this.props.onLinkClick(ev, link);
        }
        if (!link.url && link.links && link.links.length > 0) {
            this._onLinkExpandClicked(link, ev);
        }
        this.setState({ selectedKey: link.key });
    };
    NavBase.prototype._onNavButtonLinkClicked = function (link, ev) {
        if (link.onClick) {
            link.onClick(ev, link);
        }
        if (!link.url && link.links && link.links.length > 0) {
            this._onLinkExpandClicked(link, ev);
        }
        this.setState({ selectedKey: link.key });
    };
    NavBase.prototype._isLinkSelected = function (link) {
        // if caller passes in selectedKey, use it as first choice or
        // if current state.selectedKey (from addressbar) is match to the link
        if (this.props.selectedKey !== undefined) {
            return link.key === this.props.selectedKey;
        }
        else if (this.state.selectedKey !== undefined && link.key === this.state.selectedKey) {
            return true;
        }
        // resolve is not supported for ssr
        if (typeof window === 'undefined') {
            return false;
        }
        if (!link.url) {
            return false;
        }
        _urlResolver = _urlResolver || document.createElement('a');
        _urlResolver.href = link.url || '';
        var target = _urlResolver.href;
        if (location.href === target) {
            return true;
        }
        if (location.protocol + '//' + location.host + location.pathname === target) {
            return true;
        }
        if (location.hash) {
            // Match the hash to the url.
            if (location.hash === link.url) {
                return true;
            }
            // Match a rebased url. (e.g. #foo becomes http://hostname/foo)
            _urlResolver.href = location.hash.substring(1);
            return _urlResolver.href === target;
        }
        return false;
    };
    NavBase.defaultProps = {
        groups: null
    };
    return NavBase;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.js":
/*!***********************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.js ***!
  \***********************************************************************/
/*! exports provided: Nav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _Nav_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.base */ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.base.js");
/* harmony import */ var _Nav_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav.styles */ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.styles.js");



var Nav = Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["styled"])(_Nav_base__WEBPACK_IMPORTED_MODULE_1__["NavBase"], _Nav_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"], undefined, { scope: 'Nav' });


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.styles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.styles.js ***!
  \******************************************************************************/
/*! exports provided: buttonStyles, getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyles", function() { return buttonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Styling */ "./node_modules/office-ui-fabric-react/lib/Styling.js");

var GlobalClassNames = {
    root: 'ms-Nav',
    linkText: 'ms-Nav-linkText',
    compositeLink: 'ms-Nav-compositeLink',
    link: 'ms-Nav-link',
    chevronButton: 'ms-Nav-chevronButton',
    chevronIcon: 'ms-Nav-chevron',
    navItem: 'ms-Nav-navItem',
    navItems: 'ms-Nav-navItems',
    group: 'ms-Nav-group',
    groupContent: 'ms-Nav-groupContent'
};
var buttonStyles = {
    textContainer: {
        overflow: 'hidden'
    },
    label: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        lineHeight: '36px'
    }
};
var getStyles = function (props) {
    var className = props.className, theme = props.theme, isOnTop = props.isOnTop, isExpanded = props.isExpanded, isGroup = props.isGroup, isLink = props.isLink, isSelected = props.isSelected, isButtonEntry = props.isButtonEntry, _a = props.navHeight, navHeight = _a === void 0 ? 36 : _a, position = props.position, _b = props.leftPadding, leftPadding = _b === void 0 ? 20 : _b, _c = props.leftPaddingExpanded, leftPaddingExpanded = _c === void 0 ? 28 : _c, _d = props.rightPadding, rightPadding = _d === void 0 ? 20 : _d;
    var palette = theme.palette, semanticColors = theme.semanticColors;
    var classNames = Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getGlobalClassNames"])(GlobalClassNames, theme);
    return {
        root: [
            classNames.root,
            className,
            {
                overflowY: 'auto',
                userSelect: 'none',
                WebkitOverflowScrolling: 'touch'
            },
            isOnTop && [
                {
                    position: 'absolute'
                },
                _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].slideRightIn40
            ]
        ],
        linkText: [
            classNames.linkText,
            {
                margin: '0 4px',
                overflow: 'hidden',
                verticalAlign: 'middle',
                textOverflow: 'ellipsis'
            }
        ],
        compositeLink: [
            classNames.compositeLink,
            {
                display: 'block',
                position: 'relative',
                color: semanticColors.bodyText,
                backgroundColor: semanticColors.bodyBackground
            },
            isExpanded && 'is-expanded',
            isSelected && 'is-selected'
        ],
        link: [
            classNames.link,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            {
                display: 'block',
                position: 'relative',
                height: navHeight + "px",
                width: '100%',
                lineHeight: navHeight + "px",
                textDecoration: 'none',
                cursor: 'pointer',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                paddingLeft: leftPadding,
                paddingRight: rightPadding,
                selectors: {
                    '.ms-Nav-compositeLink:hover &': {
                        backgroundColor: palette.neutralLighterAlt,
                        color: semanticColors.bodyText
                    }
                }
            },
            isSelected && {
                color: palette.themePrimary,
                backgroundColor: palette.neutralLighter,
                selectors: {
                    '&:after': {
                        borderLeft: "2px solid " + palette.themePrimary,
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            },
            isButtonEntry && {
                color: palette.themePrimary
            }
        ],
        chevronButton: [
            classNames.chevronButton,
            Object(_Styling__WEBPACK_IMPORTED_MODULE_0__["getFocusStyle"])(theme),
            {
                display: 'block',
                fontWeight: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontWeights"].regular,
                fontSize: _Styling__WEBPACK_IMPORTED_MODULE_0__["FontSizes"].small,
                textAlign: 'left',
                lineHeight: navHeight + "px",
                margin: '5px 0',
                padding: "0px, " + rightPadding + "px, 0px, " + leftPaddingExpanded + "px",
                border: 'none',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                cursor: 'pointer',
                color: semanticColors.bodyText,
                backgroundColor: 'transparent',
                selectors: {
                    '&:visited': {
                        color: 'inherit'
                    },
                    '&:hover': {
                        color: semanticColors.bodyText,
                        backgroundColor: palette.neutralLighterAlt
                    },
                    '$compositeLink:hover &': {
                        color: semanticColors.bodyText,
                        backgroundColor: palette.neutralLighterAlt
                    }
                }
            },
            isGroup && [
                {
                    width: '100%',
                    height: navHeight + "px",
                    borderBottom: "1px solid " + semanticColors.bodyDivider
                },
                _Styling__WEBPACK_IMPORTED_MODULE_0__["DefaultFontStyles"].large
            ],
            isLink && [
                {
                    display: 'block',
                    width: leftPaddingExpanded - 2 + "px",
                    height: navHeight - 2 + "px",
                    position: 'absolute',
                    top: '1px',
                    left: position + "px",
                    zIndex: _Styling__WEBPACK_IMPORTED_MODULE_0__["ZIndexes"].Nav,
                    padding: 0,
                    margin: 0
                }
            ],
            isSelected && {
                color: palette.themePrimary,
                backgroundColor: palette.neutralLighterAlt,
                selectors: {
                    '&:after': {
                        borderLeft: "2px solid " + palette.themePrimary,
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }
        ],
        chevronIcon: [
            classNames.chevronIcon,
            {
                position: 'absolute',
                left: '8px',
                height: navHeight + "px",
                lineHeight: navHeight + "px",
                fontSize: '12px',
                transition: 'transform .1s linear'
            },
            isExpanded && {
                transform: 'rotate(-180deg)'
            },
            isLink && {
                top: 0
            }
        ],
        navItem: [
            classNames.navItem,
            {
                padding: 0
            }
        ],
        navItems: [
            classNames.navItems,
            {
                listStyleType: 'none',
                padding: 0
            }
        ],
        group: [classNames.group, isExpanded && 'is-expanded'],
        groupContent: [
            classNames.groupContent,
            {
                display: 'none',
                marginBottom: '40px'
            },
            _Styling__WEBPACK_IMPORTED_MODULE_0__["AnimationClassNames"].slideDownIn20,
            isExpanded && {
                display: 'block'
            }
        ]
    };
};


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Nav/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Nav/index.js ***!
  \*************************************************************************/
/*! exports provided: Nav, isRelativeUrl, NavBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav */ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return _Nav__WEBPACK_IMPORTED_MODULE_0__["Nav"]; });

/* harmony import */ var _Nav_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.base */ "./node_modules/office-ui-fabric-react/lib/components/Nav/Nav.base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRelativeUrl", function() { return _Nav_base__WEBPACK_IMPORTED_MODULE_1__["isRelativeUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBase", function() { return _Nav_base__WEBPACK_IMPORTED_MODULE_1__["NavBase"]; });





/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js ***!
  \***************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");



/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Popup, _super);
    function Popup(props) {
        var _this = _super.call(this, props) || this;
        _this._root = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["createRef"])();
        _this._onKeyDown = function (ev) {
            switch (ev.which) {
                case 27 /* escape */:
                    if (_this.props.onDismiss) {
                        _this.props.onDismiss(ev);
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                    break;
            }
        };
        _this.state = { needsVerticalScrollBar: false };
        return _this;
    }
    Popup.prototype.componentWillMount = function () {
        this._originalFocusedElement = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getDocument"])().activeElement;
    };
    Popup.prototype.componentDidMount = function () {
        if (!this._root.current) {
            return;
        }
        this._events.on(this._root.current, 'focus', this._onFocus, true);
        this._events.on(this._root.current, 'blur', this._onBlur, true);
        if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["doesElementContainFocus"])(this._root.current)) {
            this._containsFocus = true;
        }
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentDidUpdate = function () {
        this._updateScrollBarAsync();
    };
    Popup.prototype.componentWillUnmount = function () {
        if (this.props.shouldRestoreFocus &&
            this._originalFocusedElement &&
            this._containsFocus &&
            this._originalFocusedElement !== window) {
            // This slight delay is required so that we can unwind the stack, let react try to mess with focus, and then
            // apply the correct focus. Without the setTimeout, we end up focusing the correct thing, and then React wants
            // to reset the focus back to the thing it thinks should have been focused.
            if (this._originalFocusedElement) {
                this._originalFocusedElement.focus();
            }
        }
    };
    Popup.prototype.render = function () {
        var _a = this.props, role = _a.role, className = _a.className, ariaLabel = _a.ariaLabel, ariaLabelledBy = _a.ariaLabelledBy, ariaDescribedBy = _a.ariaDescribedBy, style = _a.style;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: this._root }, Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["getNativeProps"])(this.props, _Utilities__WEBPACK_IMPORTED_MODULE_2__["divProperties"]), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, style: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ overflowY: this.state.needsVerticalScrollBar ? 'scroll' : undefined }, style) }), this.props.children));
    };
    Popup.prototype._updateScrollBarAsync = function () {
        var _this = this;
        this._async.requestAnimationFrame(function () {
            _this._getScrollBar();
        });
    };
    Popup.prototype._getScrollBar = function () {
        var needsVerticalScrollBar = false;
        if (this._root && this._root.current && this._root.current.firstElementChild) {
            // ClientHeight returns the client height of an element rounded to an
            // integer. On some browsers at different zoom levels this rounding
            // can generate different results for the root container and child even
            // though they are the same height. This causes us to show a scroll bar
            // when not needed. Ideally we would use BoundingClientRect().height
            // instead however seems that the API is 90% slower than using ClientHeight.
            // Therefore instead we will calculate the difference between heights and
            // allow for a 1px difference to still be considered ok and not show the
            // scroll bar.
            var rootHeight = this._root.current.clientHeight;
            var firstChildHeight = this._root.current.firstElementChild.clientHeight;
            if (rootHeight > 0 && firstChildHeight > rootHeight) {
                needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
            }
        }
        if (this.state.needsVerticalScrollBar !== needsVerticalScrollBar) {
            this.setState({
                needsVerticalScrollBar: needsVerticalScrollBar
            });
        }
    };
    Popup.prototype._onFocus = function () {
        this._containsFocus = true;
    };
    Popup.prototype._onBlur = function (ev) {
        if (this._root.value && this._root.value.contains(ev.relatedTarget)) {
            this._containsFocus = false;
        }
    };
    Popup.defaultProps = {
        shouldRestoreFocus: true
    };
    return Popup;
}(_Utilities__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/components/Popup/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/components/Popup/index.js ***!
  \***************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./node_modules/office-ui-fabric-react/lib/components/Popup/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js ***!
  \***************************************************************************************************/
/*! exports provided: getIsChecked, hasSubmenu, isItemDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsChecked", function() { return getIsChecked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSubmenu", function() { return hasSubmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isItemDisabled", function() { return isItemDisabled; });
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
function hasSubmenu(item) {
    return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
    return !!(item.isDisabled || item.disabled);
}


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/index.js ***!
  \***********************************************************************************/
/*! exports provided: getIsChecked, hasSubmenu, isItemDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contextualMenuUtility */ "./node_modules/office-ui-fabric-react/lib/utilities/contextualMenu/contextualMenuUtility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIsChecked", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["getIsChecked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasSubmenu", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["hasSubmenu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isItemDisabled", function() { return _contextualMenuUtility__WEBPACK_IMPORTED_MODULE_0__["isItemDisabled"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js ***!
  \***************************************************************************************/
/*! exports provided: BaseDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecorator", function() { return BaseDecorator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


var BaseDecorator = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        // tslint:disable-next-line:typedef
        _this._shouldUpdateComponentRef = false;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["hoistMethods"])(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["unhoistMethods"])(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/decorators/withResponsiveMode.js ***!
  \********************************************************************************************/
/*! exports provided: ResponsiveMode, setResponsiveMode, withResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveMode", function() { return ResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResponsiveMode", function() { return setResponsiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withResponsiveMode", function() { return withResponsiveMode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseDecorator */ "./node_modules/office-ui-fabric-react/lib/utilities/decorators/BaseDecorator.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");




var ResponsiveMode;
(function (ResponsiveMode) {
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
})(ResponsiveMode || (ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
var _defaultMode;
/**
 * Allows a server rendered scenario to provide a default responsive mode.
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
function withResponsiveMode(ComposedComponent) {
    var resultClass = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithResponsiveMode, _super);
        function WithResponsiveMode(props) {
            var _this = _super.call(this, props) || this;
            _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
            _this.state = {
                responsiveMode: _this._getResponsiveMode()
            };
            return _this;
        }
        WithResponsiveMode.prototype.componentDidMount = function () {
            var _this = this;
            this._events.on(window, 'resize', function () {
                var responsiveMode = _this._getResponsiveMode();
                if (responsiveMode !== _this.state.responsiveMode) {
                    _this.setState({
                        responsiveMode: responsiveMode
                    });
                }
            });
        };
        WithResponsiveMode.prototype.componentWillUnmount = function () {
            this._events.dispose();
        };
        WithResponsiveMode.prototype.render = function () {
            var responsiveMode = this.state.responsiveMode;
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ComposedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
        };
        WithResponsiveMode.prototype._getResponsiveMode = function () {
            var responsiveMode = ResponsiveMode.small;
            var win = Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["getWindow"])();
            if (typeof win !== 'undefined') {
                try {
                    while (win.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                        responsiveMode++;
                    }
                }
                catch (e) {
                    // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
                    responsiveMode = ResponsiveMode.large;
                }
            }
            else {
                if (_defaultMode !== undefined) {
                    responsiveMode = _defaultMode;
                }
                else {
                    throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                        'Call setResponsiveMode to define what the responsive mode is.');
                }
            }
            return responsiveMode;
        };
        return WithResponsiveMode;
    }(_BaseDecorator__WEBPACK_IMPORTED_MODULE_2__["BaseDecorator"]));
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["hoistStatics"])(ComposedComponent, resultClass);
}


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js ***!
  \**************************************************************************************/
/*! exports provided: KTP_PREFIX, KTP_SEPARATOR, KTP_FULL_PREFIX, DATAKTP_TARGET, DATAKTP_EXECUTE_TARGET, KTP_LAYER_ID, KTP_ARIA_SEPARATOR, KeytipEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_PREFIX", function() { return KTP_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_SEPARATOR", function() { return KTP_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_FULL_PREFIX", function() { return KTP_FULL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_TARGET", function() { return DATAKTP_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATAKTP_EXECUTE_TARGET", function() { return DATAKTP_EXECUTE_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_LAYER_ID", function() { return KTP_LAYER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTP_ARIA_SEPARATOR", function() { return KTP_ARIA_SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipEvents", function() { return KeytipEvents; });
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js":
/*!************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipManager.js ***!
  \************************************************************************************/
/*! exports provided: KeytipManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeytipManager", function() { return KeytipManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/keytips/KeytipConstants */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js");



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = [];
        this.persistedKeytips = [];
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns {KeytipManager} Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns {string} Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to array
        persisted ? this.persistedKeytips.push(uniqueKeytip) : this.keytips.push(uniqueKeytip);
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_ADDED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_ADDED;
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
            keytip: props,
            uniqueID: uniqueKeytip.uniqueID
        });
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var keytipIndex = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["findIndex"])(this.keytips, function (ktp) {
            return ktp.uniqueID === uniqueID;
        });
        if (keytipIndex >= 0) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = this.keytips[keytipIndex].keytip.visible;
            // Update keytip in this.keytips
            this.keytips = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["replaceElement"])(this.keytips, uniqueKeytip, keytipIndex);
            // Raise event
            _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_UPDATED, {
                keytip: uniqueKeytip.keytip,
                uniqueID: uniqueKeytip.uniqueID
            });
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        if (persisted) {
            // Remove keytip from this.persistedKeytips
            this.persistedKeytips = this.persistedKeytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        else {
            // Remove keytip from this.keytips
            this.keytips = this.keytips.filter(function (uniqueKtp) {
                return uniqueKtp.uniqueID !== uniqueID;
            });
        }
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_REMOVED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].KEYTIP_REMOVED;
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, event, {
            keytip: keytipToRemove,
            uniqueID: uniqueID
        });
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns {IKeytipProps[]} All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        return this.keytips.map(function (uniqueKeytip) {
            return uniqueKeytip.keytip;
        });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns {IKeytipProps} - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = keytipProps.keySequences.slice();
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["find"])(this.getKeytips(), function (keytip) {
                return Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["arraysEqual"])(fullSequence, keytip.keySequences);
            });
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps, { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     *
     * @param overflowButtonSequences
     * @param keytipSequences
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__["EventGroup"].raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_2__["KeytipEvents"].PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns {IUniqueKeytip} IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getId"])(); }
        return { keytip: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());



/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipUtils.js ***!
  \**********************************************************************************/
/*! exports provided: sequencesToID, mergeOverflows, ktpTargetFromSequences, ktpTargetFromId, getAriaDescribedBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequencesToID", function() { return sequencesToID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOverflows", function() { return mergeOverflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromSequences", function() { return ktpTargetFromSequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ktpTargetFromId", function() { return ktpTargetFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAriaDescribedBy", function() { return getAriaDescribedBy; });
/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeytipConstants */ "./node_modules/office-ui-fabric-react/lib/utilities/keytips/KeytipConstants.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");


/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns {string} String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_SEPARATOR"] + keySequence.split('').join(_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_SEPARATOR"]);
    }, _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_PREFIX"]);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns {string[]} Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = overflowKeySequences.slice().pop();
    var newKeySequences = keySequences.slice();
    return Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["addElementAtIndex"])(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns {string} String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_TARGET"] + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns {string} String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["DATAKTP_EXECUTE_TARGET"] + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns {string} The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__["KTP_LAYER_ID"];
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning.js":
/*!**************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning.js ***!
  \**************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, getMaxHeight, getOppositeEdge, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning/index */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["__positioningTestPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_index__WEBPACK_IMPORTED_MODULE_0__["Position"]; });




/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning/index.js ***!
  \********************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, getMaxHeight, getOppositeEdge, RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["Rectangle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["__positioningTestPackage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["positionCallout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getMaxHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return _positioning__WEBPACK_IMPORTED_MODULE_0__["getOppositeEdge"]; });

/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning.types */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["RectangleEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return _positioning_types__WEBPACK_IMPORTED_MODULE_1__["Position"]; });





/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.js ***!
  \**************************************************************************************/
/*! exports provided: Rectangle, __positioningTestPackage, positionElement, positionCallout, getMaxHeight, getOppositeEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__positioningTestPackage", function() { return __positioningTestPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElement", function() { return positionElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionCallout", function() { return positionCallout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxHeight", function() { return getMaxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOppositeEdge", function() { return getOppositeEdge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities */ "./node_modules/office-ui-fabric-react/lib/Utilities.js");
/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./positioning.types */ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js");



var Rectangle = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(_Utilities__WEBPACK_IMPORTED_MODULE_1__["Rectangle"]));

function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[0 /* topLeftEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left),
    _a[1 /* topCenter */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top),
    _a[2 /* topRightEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right),
    _a[3 /* topAutoEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top, undefined, true),
    _a[4 /* bottomLeftEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left),
    _a[5 /* bottomCenter */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom),
    _a[6 /* bottomRightEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right),
    _a[7 /* bottomAutoEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom, undefined, true),
    _a[8 /* leftTopEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top),
    _a[9 /* leftCenter */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left),
    _a[10 /* leftBottomEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom),
    _a[11 /* rightTopEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top),
    _a[12 /* rightCenter */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right),
    _a[13 /* rightBottomEdge */] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right, _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom),
    _a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = new Array();
    if (rect.top < boundingRect.top) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @returns {number}
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reveserved in certain cases for the "negative" edges.
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2.
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 *
 *
 * @param {RectangleEdge} edge
 * @param {number} value
 * @returns {number}
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} newValue
 * @returns {Rectangle}
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} edge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {RectangleEdge} targetEdge
 * @param {number} [gap=0]
 * @returns {Rectangle}
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} bounds
 * @param {RectangleEdge} edge
 * @returns {boolean}
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 *
 * @param {Rectangle} rect
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @returns {IElementPosition}
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [
        _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left,
        _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right,
        _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom,
        _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top
    ];
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space. If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.indexOf(currentEdge * -1) > -1) {
                currentEdge = currentEdge * -1;
            }
            else {
                currentAlignment = currentEdge;
                currentEdge = directions.slice(-1)[0];
            }
            currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: currentAlignment
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 *
 * @param {Rectangle} element
 * @param {Rectangle} target
 * @param {Rectangle} bounding
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [directionalHintFixed]
 * @param {boolean} [coverTarget]
 * @returns {IElementPosition}
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
        var direction = outOfBounds_1[_i];
        elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 *
 * @param {Rectangle} rect
 * @param {RectangleEdge} edge
 * @param {number} point
 * @returns {Rectangle}
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 *
 * @param {Rectangle} elementToPosition
 * @param {Rectangle} target
 * @param {IPositionDirectionalHintData} positionData
 * @param {number} [gap=0]
 * @param {boolean} [coverTarget]
 * @returns {Rectangle}
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(elementToPosition, target, targetEdge, gap)
        : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 *
 * @param {RectangleEdge} edge
 * @returns {{ firstEdge: RectangleEdge, secondEdge: RectangleEdge }}
 */
function _getFlankingEdges(edge) {
    if (edge === _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top || edge === _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom) {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].left,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].right
        };
    }
    else {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom
        };
    }
}
/**
 * Finalizes the element positon based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the callou shrinks it shrinks towards that corner.
 *
 * @param {Rectangle} elementRectangle
 * @param {HTMLElement} hostElement
 * @param {RectangleEdge} targetEdge
 * @param {RectangleEdge} [alignmentEdge]
 * @param {boolean} coverTarget
 * @returns {IPartialIRectangle}
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, alignmentEdge, coverTarget) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If a directionalHint is specified and no directionalHintForRTL is available and the page is RTL the hint will be flipped.
 * For instance bottomLeftEdge would become bottomRightEdge.
 * If there is no directionalHint passed in bottomAutoEdge is chosen automatically.
 *
 * @param {IPositionProps} props
 * @returns {IPositionDirectionalHintData}
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = 7 /* bottomAutoEdge */; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge
        };
    }
    var positionInformation = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, DirectionalDictionary[directionalHint]);
    if (Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getRTL"])()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Get's the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 *
 * @param {IPositionDirectionalHintData} positionData
 * @param {Rectangle} target
 * @param {Rectangle} boundingRect
 * @param {boolean} [coverTarget]
 * @returns {IPositionDirectionalHintData}
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnEdge = elementPosition.alignmentEdge
        ? elementPosition.alignmentEdge
        : _getFlankingEdges(targetEdge).positiveEdge;
    var returnValue = {};
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /** Note about beak positioning: The actual beak width only matters for getting the gap between the callout and target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8, then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.*/
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPositon = new Rectangle(0, beakWidth, 0, beakWidth);
    beakPositon = _moveEdge(beakPositon, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPositon = _centerEdgeToPoint(beakPositon, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPositon, elementBounds, positiveEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPositon, elementBounds, negativeEdge)) {
        beakPositon = _alignEdges(beakPositon, elementBounds, negativeEdge);
    }
    return beakPositon;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new Rectangle(rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        if (target.preventDefault) {
            var ev = target;
            targetRectangle = new Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
        }
        else if (target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var point = target;
            targetRectangle = new Rectangle(point.x, point.x, point.y, point.y);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_2 = outOfBounds; _i < outOfBounds_2.length; _i++) {
                var direction = outOfBounds_2[_i];
                targetRectangle[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][direction]] = bounds[_positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"][direction]];
            }
        }
    }
    else {
        targetRectangle = new Rectangle(0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_2__["RectangleEdge"].bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, hostElement, elementToPosition, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getScrollbarWidth"])(), 0, window.innerHeight);
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, positionedElement, { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, coverTarget) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, positionedElement.alignmentEdge, coverTarget);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions) {
    var positionedElement = _positionElementRelative(props, hostElement, elementToPosition, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, props.coverTarget);
}
function _positionCallout(props, hostElement, callout, previousPositions) {
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var positionedElement = _positionElementRelative(positionProps, hostElement, callout, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _finalizePositionData(positionedElement, hostElement, props.coverTarget), { beakPosition: finalizedBeakPosition });
}
// END PRIVATE FUNCTIONS
/* tslint:disable:variable-name */
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle
};
/* tslint:enable:variable-name */
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositioningData
 * can be passed to ensure that the positioning element repositions based on
 * its previous targets rather than starting with directionalhint.
 *
 * @export
 * @param {IPositionProps} props
 * @param {HTMLElement} hostElement
 * @param {HTMLElement} elementToPosition
 * @param {IPositionedData} previousPositions
 * @returns
 */
function positionElement(props, hostElement, elementToPosition, previousPositions) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Get's the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var pointTarget = target;
    var targetRect;
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new Rectangle(0, window.innerWidth - Object(_Utilities__WEBPACK_IMPORTED_MODULE_1__["getScrollbarWidth"])(), 0, window.innerHeight);
    if (mouseTarget.stopPropagation) {
        targetRect = new Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (pointTarget.x !== undefined && pointTarget.y !== undefined) {
        targetRect = new Rectangle(pointTarget.x, pointTarget.x, pointTarget.y, pointTarget.y);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
var _a;


/***/ }),

/***/ "./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/office-ui-fabric-react/lib/utilities/positioning/positioning.types.js ***!
  \********************************************************************************************/
/*! exports provided: RectangleEdge, Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleEdge", function() { return RectangleEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
var RectangleEdge;
(function (RectangleEdge) {
    RectangleEdge[RectangleEdge["top"] = 1] = "top";
    RectangleEdge[RectangleEdge["bottom"] = -1] = "bottom";
    RectangleEdge[RectangleEdge["left"] = 2] = "left";
    RectangleEdge[RectangleEdge["right"] = -2] = "right";
})(RectangleEdge || (RectangleEdge = {}));
var Position;
(function (Position) {
    Position[Position["top"] = 0] = "top";
    Position[Position["bottom"] = 1] = "bottom";
    Position[Position["start"] = 2] = "start";
    Position[Position["end"] = 3] = "end";
})(Position || (Position = {}));


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map