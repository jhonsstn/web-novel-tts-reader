/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/content-styles.css":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/content-styles.css ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --etts-bg-primary: #ffffff;
  --etts-bg-secondary: #f8f9fa;
  --etts-text-primary: #000000;
  --etts-text-secondary: #666666;
  --etts-border-color: #cccccc;
  --etts-button-bg: #007bff;
  --etts-button-text: #ffffff;
  --etts-hover-bg: #0056b3;
}

[data-theme='dark'] {
  --etts-bg-primary: #1a1a1a;
  --etts-bg-secondary: #2d2d2d;
  --etts-text-primary: #ffffff;
  --etts-text-secondary: #cccccc;
  --etts-border-color: #404040;
  --etts-button-bg: #0d6efd;
  --etts-button-text: #ffffff;
  --etts-hover-bg: #0b5ed7;
}

.etts-flex-center {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.etts-tts-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  fill: none;
  stroke: currentColor;
}

.etts-tts-input {
  width: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  outline: none;
}

.etts-tts-input.etts-dark {
  background-color: #1f2937;
  border-color: #4b5563;
  color: white;
}

.etts-transition-all {
  transition: all 0.2s ease-in-out;
}

.etts-min-width-200 {
  min-width: 200px;
}

.etts-space-x-3 {
  display: flex;
  gap: 0.75rem;
}

.etts-space-y-3 {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.etts-animate-spin {
  animation: etts-spin 1s linear infinite;
}

@keyframes etts-spin {
  to {
    transform: rotate(360deg);
  }
}

.etts-spinner {
  height: 1.25rem;
  width: 1.25rem;
  border: 2px solid #2563eb;
  border-radius: 50%;
  border-top-color: transparent;
}

.etts-lucide {
  width: 20px;
  height: 20px;
  stroke: var(--etts-button-text);
}

.etts-tts-controls {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--etts-bg-primary);
  color: var(--etts-text-primary);
  border: 1px solid var(--etts-border-color);
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  min-width: 200px;
  transition: all 0.2s;
}

.etts-tts-button {
  background: var(--etts-button-bg);
  color: var(--etts-button-text);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.etts-tts-button:hover {
  background: var(--etts-hover-bg);
}

.etts-tts-button.etts-red {
  background: #dc3545;
}

.etts-tts-button.etts-red:hover {
  background: #bb2d3b;
}

.etts-loading-spinner {
  border: 2px solid var(--etts-bg-secondary);
  border-top: 2px solid var(--etts-button-bg);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: etts-spin 1s linear infinite;
}

.etts-loading-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/content-styles.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,8BAA8B;EAC9B,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,0BAA0B;EAC1B,4BAA4B;EAC5B,4BAA4B;EAC5B,8BAA8B;EAC9B,4BAA4B;EAC5B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,UAAU;EACV,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;EACzB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,eAAe;EACf,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kCAAkC;EAClC,+BAA+B;EAC/B,0CAA0C;EAC1C,kBAAkB;EAClB,aAAa;EACb,yCAAyC;EACzC,cAAc;EACd,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,iCAAiC;EACjC,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;EAC1C,2CAA2C;EAC3C,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX","sourcesContent":[":root {\n  --etts-bg-primary: #ffffff;\n  --etts-bg-secondary: #f8f9fa;\n  --etts-text-primary: #000000;\n  --etts-text-secondary: #666666;\n  --etts-border-color: #cccccc;\n  --etts-button-bg: #007bff;\n  --etts-button-text: #ffffff;\n  --etts-hover-bg: #0056b3;\n}\n\n[data-theme='dark'] {\n  --etts-bg-primary: #1a1a1a;\n  --etts-bg-secondary: #2d2d2d;\n  --etts-text-primary: #ffffff;\n  --etts-text-secondary: #cccccc;\n  --etts-border-color: #404040;\n  --etts-button-bg: #0d6efd;\n  --etts-button-text: #ffffff;\n  --etts-hover-bg: #0b5ed7;\n}\n\n.etts-flex-center {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.etts-tts-icon {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n  fill: none;\n  stroke: currentColor;\n}\n\n.etts-tts-input {\n  width: 100%;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 0.375rem;\n  outline: none;\n}\n\n.etts-tts-input.etts-dark {\n  background-color: #1f2937;\n  border-color: #4b5563;\n  color: white;\n}\n\n.etts-transition-all {\n  transition: all 0.2s ease-in-out;\n}\n\n.etts-min-width-200 {\n  min-width: 200px;\n}\n\n.etts-space-x-3 {\n  display: flex;\n  gap: 0.75rem;\n}\n\n.etts-space-y-3 {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.etts-animate-spin {\n  animation: etts-spin 1s linear infinite;\n}\n\n@keyframes etts-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.etts-spinner {\n  height: 1.25rem;\n  width: 1.25rem;\n  border: 2px solid #2563eb;\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n\n.etts-lucide {\n  width: 20px;\n  height: 20px;\n  stroke: var(--etts-button-text);\n}\n\n.etts-tts-controls {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: var(--etts-bg-primary);\n  color: var(--etts-text-primary);\n  border: 1px solid var(--etts-border-color);\n  border-radius: 8px;\n  padding: 15px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  min-width: 200px;\n  transition: all 0.2s;\n}\n\n.etts-tts-button {\n  background: var(--etts-button-bg);\n  color: var(--etts-button-text);\n  border: none;\n  border-radius: 4px;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.etts-tts-button:hover {\n  background: var(--etts-hover-bg);\n}\n\n.etts-tts-button.etts-red {\n  background: #dc3545;\n}\n\n.etts-tts-button.etts-red:hover {\n  background: #bb2d3b;\n}\n\n.etts-loading-spinner {\n  border: 2px solid var(--etts-bg-secondary);\n  border-top: 2px solid var(--etts-button-bg);\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  animation: etts-spin 1s linear infinite;\n}\n\n.etts-loading-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{ var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (module) {
  /* webextension-polyfill - v0.12.0 - Tue May 14 2024 18:01:29 */
  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
  /* vim: set sts=2 sw=2 et tw=80: */
  /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
  "use strict";

  if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
    throw new Error("This script should only be loaded in a browser extension.");
  }
  if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";

    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
    // optimization for Firefox. Since Spidermonkey does not fully parse the
    // contents of a function until the first time it's called, and since it will
    // never actually need to be called, this allows the polyfill to be included
    // in Firefox nearly for free.
    const wrapAPIs = extensionAPIs => {
      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
      // at build time by replacing the following "include" with the content of the
      // JSON file.
      const apiMetadata = {
        "alarms": {
          "clear": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "clearAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "get": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "bookmarks": {
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getChildren": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getRecent": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getSubTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTree": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeTree": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "browserAction": {
          "disable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "enable": {
            "minArgs": 0,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "getBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getBadgeText": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "openPopup": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setBadgeBackgroundColor": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setBadgeText": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "browsingData": {
          "remove": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "removeCache": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCookies": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeDownloads": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFormData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeHistory": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeLocalStorage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePasswords": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removePluginData": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "settings": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "commands": {
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "contextMenus": {
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "cookies": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAllCookieStores": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "set": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "devtools": {
          "inspectedWindow": {
            "eval": {
              "minArgs": 1,
              "maxArgs": 2,
              "singleCallbackArg": false
            }
          },
          "panels": {
            "create": {
              "minArgs": 3,
              "maxArgs": 3,
              "singleCallbackArg": true
            },
            "elements": {
              "createSidebarPane": {
                "minArgs": 1,
                "maxArgs": 1
              }
            }
          }
        },
        "downloads": {
          "cancel": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "download": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "erase": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFileIcon": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "open": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "pause": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeFile": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "resume": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "extension": {
          "isAllowedFileSchemeAccess": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "isAllowedIncognitoAccess": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "history": {
          "addUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "deleteRange": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "deleteUrl": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getVisits": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "search": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "i18n": {
          "detectLanguage": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAcceptLanguages": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "identity": {
          "launchWebAuthFlow": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "idle": {
          "queryState": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "management": {
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getSelf": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "setEnabled": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "uninstallSelf": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "notifications": {
          "clear": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPermissionLevel": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        },
        "pageAction": {
          "getPopup": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getTitle": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "hide": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setIcon": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "setPopup": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "setTitle": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          },
          "show": {
            "minArgs": 1,
            "maxArgs": 1,
            "fallbackToNoCallback": true
          }
        },
        "permissions": {
          "contains": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "request": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "runtime": {
          "getBackgroundPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getPlatformInfo": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "openOptionsPage": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "requestUpdateCheck": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "sendMessage": {
            "minArgs": 1,
            "maxArgs": 3
          },
          "sendNativeMessage": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "setUninstallURL": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "sessions": {
          "getDevices": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getRecentlyClosed": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "restore": {
            "minArgs": 0,
            "maxArgs": 1
          }
        },
        "storage": {
          "local": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          },
          "managed": {
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            }
          },
          "sync": {
            "clear": {
              "minArgs": 0,
              "maxArgs": 0
            },
            "get": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "getBytesInUse": {
              "minArgs": 0,
              "maxArgs": 1
            },
            "remove": {
              "minArgs": 1,
              "maxArgs": 1
            },
            "set": {
              "minArgs": 1,
              "maxArgs": 1
            }
          }
        },
        "tabs": {
          "captureVisibleTab": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "create": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "detectLanguage": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "discard": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "duplicate": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "executeScript": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 0
          },
          "getZoom": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getZoomSettings": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goBack": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "goForward": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "highlight": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "insertCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "move": {
            "minArgs": 2,
            "maxArgs": 2
          },
          "query": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "reload": {
            "minArgs": 0,
            "maxArgs": 2
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "removeCSS": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "sendMessage": {
            "minArgs": 2,
            "maxArgs": 3
          },
          "setZoom": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "setZoomSettings": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "update": {
            "minArgs": 1,
            "maxArgs": 2
          }
        },
        "topSites": {
          "get": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "webNavigation": {
          "getAllFrames": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "getFrame": {
            "minArgs": 1,
            "maxArgs": 1
          }
        },
        "webRequest": {
          "handlerBehaviorChanged": {
            "minArgs": 0,
            "maxArgs": 0
          }
        },
        "windows": {
          "create": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "get": {
            "minArgs": 1,
            "maxArgs": 2
          },
          "getAll": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getCurrent": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "getLastFocused": {
            "minArgs": 0,
            "maxArgs": 1
          },
          "remove": {
            "minArgs": 1,
            "maxArgs": 1
          },
          "update": {
            "minArgs": 2,
            "maxArgs": 2
          }
        }
      };
      if (Object.keys(apiMetadata).length === 0) {
        throw new Error("api-metadata.json has not been included in browser-polyfill");
      }

      /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */
      class DefaultWeakMap extends WeakMap {
        constructor(createItem, items = undefined) {
          super(items);
          this.createItem = createItem;
        }
        get(key) {
          if (!this.has(key)) {
            this.set(key, this.createItem(key));
          }
          return super.get(key);
        }
      }

      /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */
      const isThenable = value => {
        return value && typeof value === "object" && typeof value.then === "function";
      };

      /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */
      const makeCallback = (promise, metadata) => {
        return (...callbackArgs) => {
          if (extensionAPIs.runtime.lastError) {
            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
            promise.resolve(callbackArgs[0]);
          } else {
            promise.resolve(callbackArgs);
          }
        };
      };
      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

      /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */
      const wrapAsyncFunction = (name, metadata) => {
        return function asyncFunctionWrapper(target, ...args) {
          if (args.length < metadata.minArgs) {
            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
          }
          if (args.length > metadata.maxArgs) {
            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
          }
          return new Promise((resolve, reject) => {
            if (metadata.fallbackToNoCallback) {
              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
              // and so the polyfill will try to call it with a callback first, and it will fallback
              // to not passing the callback if the first call fails.
              try {
                target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              } catch (cbError) {
                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                target[name](...args);

                // Update the API method metadata, so that the next API calls will not try to
                // use the unsupported callback anymore.
                metadata.fallbackToNoCallback = false;
                metadata.noCallback = true;
                resolve();
              }
            } else if (metadata.noCallback) {
              target[name](...args);
              resolve();
            } else {
              target[name](...args, makeCallback({
                resolve,
                reject
              }, metadata));
            }
          });
        };
      };

      /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */
      const wrapMethod = (target, method, wrapper) => {
        return new Proxy(method, {
          apply(targetMethod, thisObj, args) {
            return wrapper.call(thisObj, target, ...args);
          }
        });
      };
      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

      /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */
      const wrapObject = (target, wrappers = {}, metadata = {}) => {
        let cache = Object.create(null);
        let handlers = {
          has(proxyTarget, prop) {
            return prop in target || prop in cache;
          },
          get(proxyTarget, prop, receiver) {
            if (prop in cache) {
              return cache[prop];
            }
            if (!(prop in target)) {
              return undefined;
            }
            let value = target[prop];
            if (typeof value === "function") {
              // This is a method on the underlying object. Check if we need to do
              // any wrapping.

              if (typeof wrappers[prop] === "function") {
                // We have a special-case wrapper for this method.
                value = wrapMethod(target, target[prop], wrappers[prop]);
              } else if (hasOwnProperty(metadata, prop)) {
                // This is an async method that we have metadata for. Create a
                // Promise wrapper for it.
                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                value = wrapMethod(target, target[prop], wrapper);
              } else {
                // This is a method that we don't know or care about. Return the
                // original method, bound to the underlying object.
                value = value.bind(target);
              }
            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
              // This is an object that we need to do some wrapping for the children
              // of. Create a sub-object wrapper for it with the appropriate child
              // metadata.
              value = wrapObject(value, wrappers[prop], metadata[prop]);
            } else if (hasOwnProperty(metadata, "*")) {
              // Wrap all properties in * namespace.
              value = wrapObject(value, wrappers[prop], metadata["*"]);
            } else {
              // We don't need to do any wrapping for this property,
              // so just forward all access to the underlying object.
              Object.defineProperty(cache, prop, {
                configurable: true,
                enumerable: true,
                get() {
                  return target[prop];
                },
                set(value) {
                  target[prop] = value;
                }
              });
              return value;
            }
            cache[prop] = value;
            return value;
          },
          set(proxyTarget, prop, value, receiver) {
            if (prop in cache) {
              cache[prop] = value;
            } else {
              target[prop] = value;
            }
            return true;
          },
          defineProperty(proxyTarget, prop, desc) {
            return Reflect.defineProperty(cache, prop, desc);
          },
          deleteProperty(proxyTarget, prop) {
            return Reflect.deleteProperty(cache, prop);
          }
        };

        // Per contract of the Proxy API, the "get" proxy handler must return the
        // original value of the target if that value is declared read-only and
        // non-configurable. For this reason, we create an object with the
        // prototype set to `target` instead of using `target` directly.
        // Otherwise we cannot return a custom object for APIs that
        // are declared read-only and non-configurable, such as `chrome.devtools`.
        //
        // The proxy handlers themselves will still use the original `target`
        // instead of the `proxyTarget`, so that the methods and properties are
        // dereferenced via the original targets.
        let proxyTarget = Object.create(target);
        return new Proxy(proxyTarget, handlers);
      };

      /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */
      const wrapEvent = wrapperMap => ({
        addListener(target, listener, ...args) {
          target.addListener(wrapperMap.get(listener), ...args);
        },
        hasListener(target, listener) {
          return target.hasListener(wrapperMap.get(listener));
        },
        removeListener(target, listener) {
          target.removeListener(wrapperMap.get(listener));
        }
      });
      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */
        return function onRequestFinished(req) {
          const wrappedReq = wrapObject(req, {} /* wrappers */, {
            getContent: {
              minArgs: 0,
              maxArgs: 0
            }
          });
          listener(wrappedReq);
        };
      });
      const onMessageWrappers = new DefaultWeakMap(listener => {
        if (typeof listener !== "function") {
          return listener;
        }

        /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */
        return function onMessage(message, sender, sendResponse) {
          let didCallSendResponse = false;
          let wrappedSendResponse;
          let sendResponsePromise = new Promise(resolve => {
            wrappedSendResponse = function (response) {
              didCallSendResponse = true;
              resolve(response);
            };
          });
          let result;
          try {
            result = listener(message, sender, wrappedSendResponse);
          } catch (err) {
            result = Promise.reject(err);
          }
          const isResultThenable = result !== true && isThenable(result);

          // If the listener didn't returned true or a Promise, or called
          // wrappedSendResponse synchronously, we can exit earlier
          // because there will be no response sent from this listener.
          if (result !== true && !isResultThenable && !didCallSendResponse) {
            return false;
          }

          // A small helper to send the message if the promise resolves
          // and an error if the promise rejects (a wrapped sendMessage has
          // to translate the message into a resolved promise or a rejected
          // promise).
          const sendPromisedResult = promise => {
            promise.then(msg => {
              // send the message value.
              sendResponse(msg);
            }, error => {
              // Send a JSON representation of the error if the rejected value
              // is an instance of error, or the object itself otherwise.
              let message;
              if (error && (error instanceof Error || typeof error.message === "string")) {
                message = error.message;
              } else {
                message = "An unexpected error occurred";
              }
              sendResponse({
                __mozWebExtensionPolyfillReject__: true,
                message
              });
            }).catch(err => {
              // Print an error on the console if unable to send the response.
              console.error("Failed to send onMessage rejected reply", err);
            });
          };

          // If the listener returned a Promise, send the resolved value as a
          // result, otherwise wait the promise related to the wrappedSendResponse
          // callback to resolve and send it as a response.
          if (isResultThenable) {
            sendPromisedResult(result);
          } else {
            sendPromisedResult(sendResponsePromise);
          }

          // Let Chrome know that the listener is replying.
          return true;
        };
      });
      const wrappedSendMessageCallback = ({
        reject,
        resolve
      }, reply) => {
        if (extensionAPIs.runtime.lastError) {
          // Detect when none of the listeners replied to the sendMessage call and resolve
          // the promise to undefined as in Firefox.
          // See https://github.com/mozilla/webextension-polyfill/issues/130
          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
            resolve();
          } else {
            reject(new Error(extensionAPIs.runtime.lastError.message));
          }
        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
          // Convert back the JSON representation of the error into
          // an Error instance.
          reject(new Error(reply.message));
        } else {
          resolve(reply);
        }
      };
      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }
        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }
        return new Promise((resolve, reject) => {
          const wrappedCb = wrappedSendMessageCallback.bind(null, {
            resolve,
            reject
          });
          args.push(wrappedCb);
          apiNamespaceObj.sendMessage(...args);
        });
      };
      const staticWrappers = {
        devtools: {
          network: {
            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
          }
        },
        runtime: {
          onMessage: wrapEvent(onMessageWrappers),
          onMessageExternal: wrapEvent(onMessageWrappers),
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 1,
            maxArgs: 3
          })
        },
        tabs: {
          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
            minArgs: 2,
            maxArgs: 3
          })
        }
      };
      const settingMetadata = {
        clear: {
          minArgs: 1,
          maxArgs: 1
        },
        get: {
          minArgs: 1,
          maxArgs: 1
        },
        set: {
          minArgs: 1,
          maxArgs: 1
        }
      };
      apiMetadata.privacy = {
        network: {
          "*": settingMetadata
        },
        services: {
          "*": settingMetadata
        },
        websites: {
          "*": settingMetadata
        }
      };
      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
    };

    // The build process adds a UMD wrapper around this file, which makes the
    // `module` variable available.
    module.exports = wrapAPIs(chrome);
  } else {
    module.exports = globalThis.browser;
  }
});
//# sourceMappingURL=browser-polyfill.js.map


/***/ }),

/***/ "./src/components/controlPanel.ts":
/*!****************************************!*\
  !*** ./src/components/controlPanel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createControlPanel: () => (/* binding */ createControlPanel),
/* harmony export */   updatePanelContent: () => (/* binding */ updatePanelContent)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/svgs */ "./src/lib/svgs.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function createControlPanel() {
    return __awaiter(this, arguments, void 0, function* (isLoading = true) {
        const settings = yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.get({
            darkMode: false,
        });
        const panel = document.createElement('div');
        panel.className = 'etts-tts-controls';
        panel.id = 'tts-control-panel';
        if (settings.darkMode) {
            panel.dataset.theme = 'dark';
        }
        updatePanelContent(panel, isLoading);
        document.body.appendChild(panel);
        return panel;
    });
}
function updatePanelContent(panel, isLoading) {
    panel.innerHTML = `
		${isLoading ? `
			<div class="etts-flex-center etts-loading-container">
				<span>Generating audio...</span>
				<div class="etts-loading-spinner"></div>
			</div>
		` : `
			<div class="etts-flex-center">
				<button id="tts-pause" class="etts-tts-button">
					${_lib_svgs__WEBPACK_IMPORTED_MODULE_1__.circlePause}
					<span>Pause</span>
				</button>
				<button id="tts-stop" class="etts-tts-button etts-red">
					${_lib_svgs__WEBPACK_IMPORTED_MODULE_1__.circleStop}
					<span>Stop</span>
				</button>
			</div>
		`}
	`;
    if (!isLoading) {
        const pauseButton = panel.querySelector('#tts-pause');
        const stopButton = panel.querySelector('#tts-stop');
        if (pauseButton)
            pauseButton.addEventListener('click', () => {
                var _a, _b;
                (_b = (_a = window).togglePause) === null || _b === void 0 ? void 0 : _b.call(_a);
            });
        if (stopButton)
            stopButton.addEventListener('click', () => {
                var _a, _b;
                (_b = (_a = window).stopPlayback) === null || _b === void 0 ? void 0 : _b.call(_a);
            });
    }
}


/***/ }),

/***/ "./src/content-styles.css":
/*!********************************!*\
  !*** ./src/content-styles.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./content-styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/content-styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_content_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/lib/svgs.ts":
/*!*************************!*\
  !*** ./src/lib/svgs.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circlePause: () => (/* binding */ circlePause),
/* harmony export */   circlePlay: () => (/* binding */ circlePlay),
/* harmony export */   circleStop: () => (/* binding */ circleStop),
/* harmony export */   moon: () => (/* binding */ moon),
/* harmony export */   sun: () => (/* binding */ sun)
/* harmony export */ });
const circlePlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-play"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
`;
const circlePause = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-pause"><circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/></svg>
`;
const circleStop = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-stop"><circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
`;
const sun = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
`;
const moon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
`;


/***/ }),

/***/ "./src/utils/browserCommunicate.ts":
/*!*****************************************!*\
  !*** ./src/utils/browserCommunicate.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserCommunicate: () => (/* binding */ BrowserCommunicate)
/* harmony export */ });
/* harmony import */ var _newUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newUtils */ "./src/utils/newUtils.ts");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exceptions */ "./src/utils/exceptions.ts");
/* harmony import */ var _ttsConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ttsConfig */ "./src/utils/ttsConfig.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
/* harmony import */ var _browserDrm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./browserDrm */ "./src/utils/browserDrm.ts");
/* harmony import */ var _browserDetection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./browserDetection */ "./src/utils/browserDetection.ts");
var __await = (undefined && undefined.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};






// Browser-compatible Buffer utilities
class BrowserBuffer {
    static from(input, encoding) {
        if (typeof input === 'string') {
            return new TextEncoder().encode(input);
        }
        else if (input instanceof Uint8Array) {
            return input;
        }
        else if (input instanceof ArrayBuffer) {
            return new Uint8Array(input);
        }
        else if (input && typeof input === 'object' && 'byteLength' in input) {
            // Handle cross-compartment ArrayBuffer in Firefox
            // When ArrayBuffer comes from FileReader in Firefox, instanceof check may fail
            return new Uint8Array(input);
        }
        console.error('BrowserBuffer.from received unexpected input type:', typeof input, input);
        throw new Error(`Unsupported input type for BrowserBuffer.from: ${typeof input}`);
    }
    static concat(arrays) {
        const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const arr of arrays) {
            result.set(arr, offset);
            offset += arr.length;
        }
        return result;
    }
}
// Browser-compatible versions of utility functions
function browserGetHeadersAndDataFromText(message) {
    const messageString = new TextDecoder().decode(message);
    const headerEndIndex = messageString.indexOf('\r\n\r\n');
    const headers = {};
    if (headerEndIndex !== -1) {
        const headerString = messageString.substring(0, headerEndIndex);
        const headerLines = headerString.split('\r\n');
        for (const line of headerLines) {
            const [key, value] = line.split(':', 2);
            if (key && value) {
                headers[key] = value.trim();
            }
        }
    }
    const headerByteLength = new TextEncoder().encode(messageString.substring(0, headerEndIndex + 4)).length;
    return [headers, message.slice(headerByteLength)];
}
function browserGetHeadersAndDataFromBinary(message) {
    if (message.length < 2) {
        throw new Error('Message too short to contain header length');
    }
    const headerLength = (message[0] << 8) | message[1]; // Read big-endian uint16
    const headers = {};
    if (headerLength > 0 && headerLength + 2 <= message.length) {
        const headerBytes = message.slice(2, headerLength + 2);
        const headerString = new TextDecoder().decode(headerBytes);
        const headerLines = headerString.split('\r\n');
        for (const line of headerLines) {
            const [key, value] = line.split(':', 2);
            if (key && value) {
                headers[key] = value.trim();
            }
        }
    }
    return [headers, message.slice(headerLength + 2)];
}
function browserSplitTextByByteLength(text, byteLength) {
    return (function* () {
        let buffer = new TextEncoder().encode(text);
        if (byteLength <= 0) {
            throw new Error("byteLength must be greater than 0");
        }
        while (buffer.length > byteLength) {
            let splitAt = byteLength;
            // Try to find a good split point (space or newline)
            const slice = buffer.slice(0, byteLength);
            const sliceText = new TextDecoder().decode(slice);
            const lastNewline = sliceText.lastIndexOf('\n');
            const lastSpace = sliceText.lastIndexOf(' ');
            if (lastNewline > 0) {
                splitAt = new TextEncoder().encode(sliceText.substring(0, lastNewline)).length;
            }
            else if (lastSpace > 0) {
                splitAt = new TextEncoder().encode(sliceText.substring(0, lastSpace)).length;
            }
            const chunk = buffer.slice(0, splitAt);
            const chunkText = new TextDecoder().decode(chunk).trim();
            if (chunkText) {
                yield new TextEncoder().encode(chunkText);
            }
            buffer = buffer.slice(splitAt);
        }
        const remainingText = new TextDecoder().decode(buffer).trim();
        if (remainingText) {
            yield new TextEncoder().encode(remainingText);
        }
    })();
}
/**
 * Browser-specific Communicate class that uses only browser-native APIs.
 * Uses native WebSocket and Web Crypto API, avoiding any Node.js dependencies.
 *
 * @example
 * ```typescript
 * const communicate = new BrowserCommunicate('Hello, world!', {
 *   voice: 'en-US-EmmaMultilingualNeural',
 * });
 *
 * for await (const chunk of communicate.stream()) {
 *   if (chunk.type === 'audio' && chunk.data) {
 *     // Handle audio data
 *   }
 * }
 * ```
 */
class BrowserCommunicate {
    /**
     * Creates a new browser Communicate instance for text-to-speech synthesis.
     *
     * @param text - The text to synthesize
     * @param options - Configuration options for synthesis
     */
    constructor(text, options = {}) {
        this.state = {
            partialText: BrowserBuffer.from(''),
            offsetCompensation: 0,
            lastDurationOffset: 0,
            streamWasCalled: false,
        };
        this.ttsConfig = new _ttsConfig__WEBPACK_IMPORTED_MODULE_2__.TTSConfig({
            voice: options.voice || _constants__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_VOICE,
            rate: options.rate,
            volume: options.volume,
            pitch: options.pitch,
        });
        if (typeof text !== 'string') {
            throw new TypeError('text must be a string');
        }
        // Use much larger chunk size for Firefox to avoid WebM concatenation issues
        // Firefox can't handle multiple WebM streams concatenated together
        const chunkSize = (0,_browserDetection__WEBPACK_IMPORTED_MODULE_5__.isFirefox)() ? 32768 : 4096;
        this.texts = browserSplitTextByByteLength((0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.escape)((0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.removeIncompatibleCharacters)(text)), 
        // browserCalcMaxMesgSize(this.ttsConfig.voice, this.ttsConfig.rate, this.ttsConfig.volume, this.ttsConfig.pitch),
        chunkSize);
        this.connectionTimeout = options.connectionTimeout;
    }
    parseMetadata(data) {
        const metadata = JSON.parse(new TextDecoder().decode(data));
        for (const metaObj of metadata['Metadata']) {
            const metaType = metaObj['Type'];
            if (metaType === 'WordBoundary') {
                const currentOffset = metaObj['Data']['Offset'] + this.state.offsetCompensation;
                const currentDuration = metaObj['Data']['Duration'];
                return {
                    type: metaType,
                    offset: currentOffset,
                    duration: currentDuration,
                    text: (0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.unescape)(metaObj['Data']['text']['Text']),
                };
            }
            if (metaType === 'SessionEnd') {
                continue;
            }
            throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnknownResponse(`Unknown metadata type: ${metaType}`);
        }
        throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse('No WordBoundary metadata found');
    }
    _stream() {
        return __asyncGenerator(this, arguments, function* _stream_1() {
            const url = `${_constants__WEBPACK_IMPORTED_MODULE_3__.WSS_URL}&Sec-MS-GEC=${yield __await(_browserDrm__WEBPACK_IMPORTED_MODULE_4__.BrowserDRM.generateSecMsGec())}&Sec-MS-GEC-Version=${_constants__WEBPACK_IMPORTED_MODULE_3__.SEC_MS_GEC_VERSION}&ConnectionId=${(0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.connectId)()}`;
            const websocket = new WebSocket(url);
            const messageQueue = [];
            let resolveMessage = null;
            // Set connection timeout if specified
            let timeoutId;
            if (this.connectionTimeout) {
                timeoutId = window.setTimeout(() => {
                    websocket.close();
                    messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.WebSocketError('Connection timeout'));
                    if (resolveMessage)
                        resolveMessage();
                }, this.connectionTimeout);
            }
            websocket.onmessage = (event) => {
                // Clear timeout on first message
                if (timeoutId) {
                    window.clearTimeout(timeoutId);
                    timeoutId = undefined;
                }
                const data = event.data;
                const isBinary = data instanceof ArrayBuffer || data instanceof Blob;
                if (typeof data === 'string') {
                    // Text message
                    const [headers, parsedData] = browserGetHeadersAndDataFromText(BrowserBuffer.from(data));
                    const path = headers['Path'];
                    if (path === 'audio.metadata') {
                        try {
                            const parsedMetadata = this.parseMetadata(parsedData);
                            this.state.lastDurationOffset = parsedMetadata.offset + parsedMetadata.duration;
                            messageQueue.push(parsedMetadata);
                        }
                        catch (e) {
                            messageQueue.push(e);
                        }
                    }
                    else if (path === 'turn.end') {
                        this.state.offsetCompensation = this.state.lastDurationOffset;
                        websocket.close();
                    }
                    else if (path !== 'response' && path !== 'turn.start') {
                        messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnknownResponse(`Unknown path received: ${path}`));
                    }
                }
                else if (data instanceof ArrayBuffer) {
                    // Binary message
                    const bufferData = BrowserBuffer.from(data);
                    if (bufferData.length < 2) {
                        messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse('We received a binary message, but it is missing the header length.'));
                    }
                    else {
                        const [headers, audioData] = browserGetHeadersAndDataFromBinary(bufferData);
                        if (headers['Path'] !== 'audio') {
                            messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse('Received binary message, but the path is not audio.'));
                        }
                        else {
                            const contentType = headers['Content-Type'] || '';
                            // Accept both MP3 (Chrome) and WebM (Firefox) content types
                            // Content-Type may include codec parameter (e.g., "audio/webm; codec=opus")
                            const isValidAudio = contentType === 'audio/mpeg' ||
                                contentType.startsWith('audio/webm') ||
                                contentType === 'audio/webm';
                            if (!isValidAudio && contentType) {
                                // Only error if there's a Content-Type and it's not valid
                                if (audioData.length > 0) {
                                    messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse(`Received binary message with unexpected Content-Type: ${contentType}`));
                                }
                            }
                            else if (audioData.length === 0) {
                                // Ignore empty audio chunks (normal at end of stream)
                                // Do nothing - this is expected behavior
                            }
                            else {
                                // Accept audio data even without Content-Type header (for compatibility)
                                messageQueue.push({ type: 'audio', data: audioData });
                            }
                        }
                    }
                }
                else if (data instanceof Blob) {
                    // Handle Blob data using FileReader to avoid Firefox cross-compartment issues
                    const reader = new FileReader();
                    reader.onload = () => {
                        try {
                            const arrayBuffer = reader.result;
                            // Firefox cross-compartment fix: manually copy bytes to avoid constructor issues
                            const byteLength = arrayBuffer.byteLength;
                            const bufferData = new Uint8Array(byteLength);
                            const sourceView = new Uint8Array(arrayBuffer);
                            for (let i = 0; i < byteLength; i++) {
                                bufferData[i] = sourceView[i];
                            }
                            if (bufferData.length < 2) {
                                messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse('We received a binary message, but it is missing the header length.'));
                            }
                            else {
                                const [headers, audioData] = browserGetHeadersAndDataFromBinary(bufferData);
                                if (headers['Path'] !== 'audio') {
                                    messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse('Received binary message, but the path is not audio.'));
                                }
                                else {
                                    const contentType = headers['Content-Type'] || '';
                                    // Accept both MP3 (Chrome) and WebM (Firefox) content types
                                    // Content-Type may include codec parameter (e.g., "audio/webm; codec=opus")
                                    const isValidAudio = contentType === 'audio/mpeg' ||
                                        contentType.startsWith('audio/webm') ||
                                        contentType === 'audio/webm';
                                    if (!isValidAudio && contentType) {
                                        // Only error if there's a Content-Type and it's not valid
                                        if (audioData.length > 0) {
                                            messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse(`Received binary message with unexpected Content-Type: ${contentType}`));
                                        }
                                    }
                                    else if (audioData.length === 0) {
                                        // Ignore empty audio chunks (normal at end of stream)
                                        // Do nothing - this is expected behavior
                                    }
                                    else {
                                        // Accept audio data even without Content-Type header (for compatibility)
                                        messageQueue.push({ type: 'audio', data: audioData });
                                    }
                                }
                            }
                        }
                        catch (error) {
                            console.error('Error processing Blob data:', error);
                            messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse(`Failed to process Blob: ${error}`));
                        }
                        // Always resolve after processing blob
                        if (resolveMessage) {
                            resolveMessage();
                            resolveMessage = null; // Prevent double resolution
                        }
                    };
                    reader.onerror = () => {
                        console.error('FileReader error:', reader.error);
                        messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.UnexpectedResponse('Failed to read Blob data'));
                        if (resolveMessage) {
                            resolveMessage();
                            resolveMessage = null; // Prevent double resolution
                        }
                    };
                    reader.readAsArrayBuffer(data);
                    // Don't call resolveMessage here - let the FileReader callbacks handle it
                    return;
                }
                // Only resolve for non-Blob messages
                if (resolveMessage)
                    resolveMessage();
            };
            websocket.onerror = (error) => {
                if (timeoutId) {
                    window.clearTimeout(timeoutId);
                    timeoutId = undefined;
                }
                messageQueue.push(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.WebSocketError('WebSocket error occurred'));
                if (resolveMessage)
                    resolveMessage();
            };
            websocket.onclose = () => {
                if (timeoutId) {
                    window.clearTimeout(timeoutId);
                    timeoutId = undefined;
                }
                messageQueue.push('close');
                if (resolveMessage)
                    resolveMessage();
            };
            yield __await(new Promise((resolve, reject) => {
                websocket.onopen = () => {
                    if (timeoutId) {
                        window.clearTimeout(timeoutId);
                        timeoutId = undefined;
                    }
                    resolve();
                };
                // Set up a timeout for connection establishment
                if (this.connectionTimeout) {
                    setTimeout(() => {
                        if (websocket.readyState === WebSocket.CONNECTING) {
                            websocket.close();
                            reject(new _exceptions__WEBPACK_IMPORTED_MODULE_1__.WebSocketError('Connection timeout'));
                        }
                    }, this.connectionTimeout);
                }
            }));
            // Use WebM format for Firefox, MP3 for Chrome
            const outputFormat = (0,_browserDetection__WEBPACK_IMPORTED_MODULE_5__.isFirefox)()
                ? 'webm-24khz-16bit-mono-opus'
                : 'audio-24khz-48kbitrate-mono-mp3';
            websocket.send(`X-Timestamp:${(0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.dateToString)()}\r\n`
                + 'Content-Type:application/json; charset=utf-8\r\n'
                + 'Path:speech.config\r\n\r\n'
                + '{"context":{"synthesis":{"audio":{"metadataoptions":{'
                + '"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},'
                + `"outputFormat":"${outputFormat}"`
                + '}}}}\r\n');
            websocket.send((0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.ssmlHeadersPlusData)((0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.connectId)(), (0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.dateToString)(), (0,_newUtils__WEBPACK_IMPORTED_MODULE_0__.mkssml)(this.ttsConfig, new TextDecoder().decode(this.state.partialText))));
            let audioWasReceived = false;
            while (true) {
                if (messageQueue.length > 0) {
                    const message = messageQueue.shift();
                    if (message === 'close') {
                        if (!audioWasReceived) {
                            throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.NoAudioReceived('No audio was received.');
                        }
                        break;
                    }
                    else if (message instanceof Error) {
                        throw message;
                    }
                    else {
                        if (message.type === 'audio')
                            audioWasReceived = true;
                        yield yield __await(message);
                    }
                }
                else {
                    // Use a more responsive wait mechanism
                    yield __await(new Promise(resolve => {
                        resolveMessage = resolve;
                        // Add a small timeout to prevent indefinite waiting
                        setTimeout(resolve, 50);
                    }));
                }
            }
        });
    }
    /**
     * Streams text-to-speech synthesis results using native browser WebSocket.
     * Uses only browser-native APIs, avoiding Node.js dependencies.
     *
     * @yields BrowserTTSChunk - Audio data or word boundary information
     * @throws {Error} If called more than once
     * @throws {NoAudioReceived} If no audio data is received
     * @throws {WebSocketError} If WebSocket connection fails
     */
    stream() {
        return __asyncGenerator(this, arguments, function* stream_1() {
            var _a, e_1, _b, _c;
            if (this.state.streamWasCalled) {
                throw new Error('stream can only be called once.');
            }
            this.state.streamWasCalled = true;
            for (const partialText of this.texts) {
                this.state.partialText = partialText;
                try {
                    for (var _d = true, _e = (e_1 = void 0, __asyncValues(this._stream())), _f; _f = yield __await(_e.next()), _a = _f.done, !_a; _d = true) {
                        _c = _f.value;
                        _d = false;
                        const message = _c;
                        yield yield __await(message);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = _e.return)) yield __await(_b.call(_e));
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    }
}


/***/ }),

/***/ "./src/utils/browserDetection.ts":
/*!***************************************!*\
  !*** ./src/utils/browserDetection.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBrowserSpecificValue: () => (/* binding */ getBrowserSpecificValue),
/* harmony export */   isChrome: () => (/* binding */ isChrome),
/* harmony export */   isEdge: () => (/* binding */ isEdge),
/* harmony export */   isFirefox: () => (/* binding */ isFirefox),
/* harmony export */   isFirefoxExtension: () => (/* binding */ isFirefoxExtension)
/* harmony export */ });
/**
 * Utility functions for browser detection and compatibility
 */
/**
 * Checks if the current browser is Firefox
 */
const isFirefox = () => {
    return navigator.userAgent.includes('Firefox');
};
/**
 * Checks if the current browser is Chrome or Chromium-based
 */
const isChrome = () => {
    return /Chrome/.test(navigator.userAgent) && !/Edge|Edg/.test(navigator.userAgent);
};
/**
 * Checks if the current browser is Edge
 */
const isEdge = () => {
    return /Edge|Edg/.test(navigator.userAgent);
};
/**
 * Checks if we're running in a Firefox addon context
 */
const isFirefoxExtension = () => {
    // Use type safety check to avoid TypeScript error
    return typeof window !== 'undefined' && 'InstallTrigger' in window;
};
/**
 * A function that returns browser-specific values
 * @param chromeValue The value to return in Chrome
 * @param firefoxValue The value to return in Firefox
 * @param defaultValue The default value to return in other browsers
 */
function getBrowserSpecificValue(chromeValue, firefoxValue, defaultValue = chromeValue) {
    if (isFirefox())
        return firefoxValue;
    if (isChrome())
        return chromeValue;
    return defaultValue;
}


/***/ }),

/***/ "./src/utils/browserDrm.ts":
/*!*********************************!*\
  !*** ./src/utils/browserDrm.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserDRM: () => (/* binding */ BrowserDRM)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/utils/constants.ts");
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exceptions */ "./src/utils/exceptions.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const WIN_EPOCH = 11644473600;
const S_TO_NS = 1e9;
/**
 * Browser-specific DRM class that uses only Web APIs.
 * Uses the Web Crypto API instead of Node.js crypto module.
 */
class BrowserDRM {
    static adjClockSkewSeconds(skewSeconds) {
        BrowserDRM.clockSkewSeconds += skewSeconds;
    }
    static getUnixTimestamp() {
        return Date.now() / 1000 + BrowserDRM.clockSkewSeconds;
    }
    static parseRfc2616Date(date) {
        try {
            return new Date(date).getTime() / 1000;
        }
        catch (e) {
            return null;
        }
    }
    static handleClientResponseError(response) {
        if (!response.headers) {
            throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.SkewAdjustmentError("No headers in response.");
        }
        const serverDate = response.headers["date"] || response.headers["Date"];
        if (!serverDate) {
            throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.SkewAdjustmentError("No server date in headers.");
        }
        const serverDateParsed = BrowserDRM.parseRfc2616Date(serverDate);
        if (serverDateParsed === null) {
            throw new _exceptions__WEBPACK_IMPORTED_MODULE_1__.SkewAdjustmentError(`Failed to parse server date: ${serverDate}`);
        }
        const clientDate = BrowserDRM.getUnixTimestamp();
        BrowserDRM.adjClockSkewSeconds(serverDateParsed - clientDate);
    }
    static generateSecMsGec() {
        return __awaiter(this, void 0, void 0, function* () {
            let ticks = BrowserDRM.getUnixTimestamp();
            ticks += WIN_EPOCH;
            ticks -= ticks % 300;
            ticks *= S_TO_NS / 100;
            const strToHash = `${ticks.toFixed(0)}${_constants__WEBPACK_IMPORTED_MODULE_0__.TRUSTED_CLIENT_TOKEN}`;
            // Use Web Crypto API - guaranteed to be available in browsers
            const encoder = new TextEncoder();
            const data = encoder.encode(strToHash);
            const hashBuffer = yield crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
        });
    }
}
BrowserDRM.clockSkewSeconds = 0.0;


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_HEADERS: () => (/* binding */ BASE_HEADERS),
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),
/* harmony export */   CHROMIUM_FULL_VERSION: () => (/* binding */ CHROMIUM_FULL_VERSION),
/* harmony export */   CHROMIUM_MAJOR_VERSION: () => (/* binding */ CHROMIUM_MAJOR_VERSION),
/* harmony export */   DEFAULT_VOICE: () => (/* binding */ DEFAULT_VOICE),
/* harmony export */   SEC_MS_GEC_VERSION: () => (/* binding */ SEC_MS_GEC_VERSION),
/* harmony export */   TRUSTED_CLIENT_TOKEN: () => (/* binding */ TRUSTED_CLIENT_TOKEN),
/* harmony export */   VOICE_HEADERS: () => (/* binding */ VOICE_HEADERS),
/* harmony export */   VOICE_LIST_URL: () => (/* binding */ VOICE_LIST_URL),
/* harmony export */   WSS_HEADERS: () => (/* binding */ WSS_HEADERS),
/* harmony export */   WSS_URL: () => (/* binding */ WSS_URL)
/* harmony export */ });
/** Base URL for Microsoft Edge TTS service endpoints */
const BASE_URL = "speech.platform.bing.com/consumer/speech/synthesize/readaloud";
/** Trusted client token used for authentication with the TTS service */
const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
/** WebSocket URL for TTS streaming synthesis */
const WSS_URL = `wss://${BASE_URL}/edge/v1?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}`;
/** HTTP URL for fetching available voices list */
const VOICE_LIST_URL = `https://${BASE_URL}/voices/list?trustedclienttoken=${TRUSTED_CLIENT_TOKEN}`;
/** Default voice to use when none is specified */
const DEFAULT_VOICE = "en-US-EmmaMultilingualNeural";
/** Version string for Chromium browser emulation */
const CHROMIUM_FULL_VERSION = "130.0.2849.68";
/** Major version number extracted from the full Chromium version */
const CHROMIUM_MAJOR_VERSION = CHROMIUM_FULL_VERSION.split(".")[0];
/** Security token version for API authentication */
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL_VERSION}`;
/** Base HTTP headers for API requests, mimicking a real browser */
const BASE_HEADERS = {
    "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR_VERSION}.0.0.0 Safari/537.36 Edg/${CHROMIUM_MAJOR_VERSION}.0.0.0`,
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
};
/** HTTP headers specific to WebSocket connection requests */
const WSS_HEADERS = Object.assign(Object.assign({}, BASE_HEADERS), { "Pragma": "no-cache", "Cache-Control": "no-cache", "Origin": "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold" });
/** HTTP headers specific to voice list API requests */
const VOICE_HEADERS = Object.assign(Object.assign({}, BASE_HEADERS), { "Authority": "speech.platform.bing.com", "Sec-CH-UA": `" Not;A Brand";v="99", "Microsoft Edge";v="${CHROMIUM_MAJOR_VERSION}", "Chromium";v="${CHROMIUM_MAJOR_VERSION}"`, "Sec-CH-UA-Mobile": "?0", "Accept": "*/*", "Sec-Fetch-Site": "none", "Sec-Fetch-Mode": "cors", "Sec-Fetch-Dest": "empty" });


/***/ }),

/***/ "./src/utils/domainExtraction.ts":
/*!***************************************!*\
  !*** ./src/utils/domainExtraction.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractDomainReaderContent: () => (/* binding */ extractDomainReaderContent)
/* harmony export */ });
function normalizeText(text) {
    return text.replace(/\s+/g, ' ').trim();
}
function getElementText(element) {
    if (!element) {
        return '';
    }
    if ('innerText' in element && typeof element.innerText === 'string') {
        return normalizeText(element.innerText);
    }
    return normalizeText(element.textContent || '');
}
function trySelect(selector) {
    try {
        return document.querySelector(selector);
    }
    catch (_a) {
        return null;
    }
}
function resolveNextChapterUrl(nextElement) {
    if (!nextElement) {
        return null;
    }
    const disabled = nextElement.hasAttribute('disabled')
        || nextElement.getAttribute('aria-disabled') === 'true'
        || nextElement.classList.contains('disabled');
    if (disabled) {
        return null;
    }
    const href = nextElement.getAttribute('href');
    if (!href) {
        return null;
    }
    try {
        const url = new URL(href, window.location.href);
        return url.toString();
    }
    catch (_a) {
        return null;
    }
}
function extractDomainReaderContent(profile) {
    const titleElement = trySelect(profile.titleSelector)
        || trySelect('.chapter-title');
    const contentElement = trySelect(profile.contentSelector);
    const nextElement = trySelect(profile.nextSelector);
    const titleText = getElementText(titleElement);
    const contentText = getElementText(contentElement);
    if (!contentText) {
        return null;
    }
    const speechText = titleText
        ? `${titleText}\n\n${contentText}`
        : contentText;
    return {
        speechText,
        titleText,
        contentText,
        nextChapterUrl: resolveNextChapterUrl(nextElement),
    };
}


/***/ }),

/***/ "./src/utils/domainReaderProfiles.ts":
/*!*******************************************!*\
  !*** ./src/utils/domainReaderProfiles.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_AUTOMATION_SETTINGS: () => (/* binding */ DEFAULT_AUTOMATION_SETTINGS),
/* harmony export */   DEFAULT_DOMAIN_READER_PROFILES: () => (/* binding */ DEFAULT_DOMAIN_READER_PROFILES),
/* harmony export */   ensureDefaultReaderProfiles: () => (/* binding */ ensureDefaultReaderProfiles),
/* harmony export */   getDomainReaderProfiles: () => (/* binding */ getDomainReaderProfiles),
/* harmony export */   getMatchingDomainProfile: () => (/* binding */ getMatchingDomainProfile),
/* harmony export */   getReaderAutomationSettings: () => (/* binding */ getReaderAutomationSettings),
/* harmony export */   isValidDomainReaderProfile: () => (/* binding */ isValidDomainReaderProfile),
/* harmony export */   normalizeDomainInput: () => (/* binding */ normalizeDomainInput),
/* harmony export */   normalizeHostname: () => (/* binding */ normalizeHostname),
/* harmony export */   sanitizeDomainReaderProfile: () => (/* binding */ sanitizeDomainReaderProfile),
/* harmony export */   saveDomainReaderProfiles: () => (/* binding */ saveDomainReaderProfiles),
/* harmony export */   saveReaderAutomationSettings: () => (/* binding */ saveReaderAutomationSettings)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const DOMAIN_READER_PROFILES_KEY = 'domainReaderProfiles';
const READER_AUTOMATION_SETTINGS_KEY = 'readerAutomationSettings';
const DEFAULT_AUTOMATION_SETTINGS = {
    nextNavigationDelayMs: 1000,
    nextReadStartDelayMs: 1000,
};
const DEFAULT_DOMAIN_READER_PROFILES = [
    {
        domain: 'allnovel.org',
        titleSelector: '.chapter-title .chapter-text',
        contentSelector: '#chapter-content',
        nextSelector: '#next_chap',
    },
];
function toDelayMs(value, fallback) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
        return fallback;
    }
    const rounded = Math.round(value);
    return rounded < 0 ? 0 : rounded;
}
function normalizeDomainInput(input) {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) {
        return '';
    }
    const withProtocol = /^https?:\/\//.test(trimmed) ? trimmed : `https://${trimmed}`;
    try {
        const hostname = new URL(withProtocol).hostname.toLowerCase();
        return normalizeHostname(hostname);
    }
    catch (_a) {
        return '';
    }
}
function normalizeHostname(hostname) {
    return hostname
        .trim()
        .toLowerCase()
        .replace(/^www\./, '')
        .replace(/\.+$/, '');
}
function sanitizeDomainReaderProfile(profile) {
    return {
        domain: normalizeDomainInput(profile.domain),
        titleSelector: profile.titleSelector.trim(),
        contentSelector: profile.contentSelector.trim(),
        nextSelector: profile.nextSelector.trim(),
    };
}
function isValidDomainReaderProfile(profile) {
    return Boolean(profile.domain
        && profile.titleSelector
        && profile.contentSelector
        && profile.nextSelector);
}
function ensureDefaultReaderProfiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.get(DOMAIN_READER_PROFILES_KEY);
        const existing = result[DOMAIN_READER_PROFILES_KEY];
        if (Array.isArray(existing)) {
            return existing
                .map(sanitizeDomainReaderProfile)
                .filter(isValidDomainReaderProfile);
        }
        yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.set({
            [DOMAIN_READER_PROFILES_KEY]: DEFAULT_DOMAIN_READER_PROFILES,
        });
        return DEFAULT_DOMAIN_READER_PROFILES;
    });
}
function getDomainReaderProfiles() {
    return __awaiter(this, void 0, void 0, function* () {
        const profiles = yield ensureDefaultReaderProfiles();
        return profiles
            .map(sanitizeDomainReaderProfile)
            .filter(isValidDomainReaderProfile);
    });
}
function saveDomainReaderProfiles(profiles) {
    return __awaiter(this, void 0, void 0, function* () {
        const cleanedProfiles = profiles
            .map(sanitizeDomainReaderProfile)
            .filter(isValidDomainReaderProfile);
        yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.set({
            [DOMAIN_READER_PROFILES_KEY]: cleanedProfiles,
        });
    });
}
function getReaderAutomationSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.get(READER_AUTOMATION_SETTINGS_KEY);
        const stored = result[READER_AUTOMATION_SETTINGS_KEY];
        if (!stored || typeof stored !== 'object') {
            return DEFAULT_AUTOMATION_SETTINGS;
        }
        return {
            nextNavigationDelayMs: toDelayMs(stored.nextNavigationDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextNavigationDelayMs),
            nextReadStartDelayMs: toDelayMs(stored.nextReadStartDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextReadStartDelayMs),
        };
    });
}
function saveReaderAutomationSettings(settings) {
    return __awaiter(this, void 0, void 0, function* () {
        const normalizedSettings = {
            nextNavigationDelayMs: toDelayMs(settings.nextNavigationDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextNavigationDelayMs),
            nextReadStartDelayMs: toDelayMs(settings.nextReadStartDelayMs, DEFAULT_AUTOMATION_SETTINGS.nextReadStartDelayMs),
        };
        yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.set({
            [READER_AUTOMATION_SETTINGS_KEY]: normalizedSettings,
        });
    });
}
function getMatchingDomainProfile(hostname, profiles) {
    const normalizedHostname = normalizeHostname(hostname);
    if (!normalizedHostname) {
        return null;
    }
    const sortedProfiles = [...profiles]
        .map(sanitizeDomainReaderProfile)
        .filter(isValidDomainReaderProfile)
        .sort((a, b) => b.domain.length - a.domain.length);
    for (const profile of sortedProfiles) {
        if (normalizedHostname === profile.domain
            || normalizedHostname.endsWith(`.${profile.domain}`)) {
            return profile;
        }
    }
    return null;
}


/***/ }),

/***/ "./src/utils/exceptions.ts":
/*!*********************************!*\
  !*** ./src/utils/exceptions.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeTTSException: () => (/* binding */ EdgeTTSException),
/* harmony export */   NoAudioReceived: () => (/* binding */ NoAudioReceived),
/* harmony export */   SkewAdjustmentError: () => (/* binding */ SkewAdjustmentError),
/* harmony export */   UnexpectedResponse: () => (/* binding */ UnexpectedResponse),
/* harmony export */   UnknownResponse: () => (/* binding */ UnknownResponse),
/* harmony export */   ValueError: () => (/* binding */ ValueError),
/* harmony export */   WebSocketError: () => (/* binding */ WebSocketError)
/* harmony export */ });
/**
 * Base exception class for all Edge TTS related errors.
 */
class EdgeTTSException extends Error {
    constructor(message) {
        super(message);
        this.name = "EdgeTTSException";
    }
}
/**
 * Exception raised when there's an error adjusting clock skew for API requests.
 * This typically occurs when the client and server clocks are significantly out of sync.
 */
class SkewAdjustmentError extends EdgeTTSException {
    constructor(message) {
        super(message);
        this.name = "SkewAdjustmentError";
    }
}
/**
 * Exception raised when an unknown response is received from the TTS service.
 * This indicates an unexpected message type or format that the client cannot handle.
 */
class UnknownResponse extends EdgeTTSException {
    constructor(message) {
        super(message);
        this.name = "UnknownResponse";
    }
}
/**
 * Exception raised when an unexpected response is received from the TTS service.
 * This indicates a response that doesn't match the expected protocol flow.
 */
class UnexpectedResponse extends EdgeTTSException {
    constructor(message) {
        super(message);
        this.name = "UnexpectedResponse";
    }
}
/**
 * Exception raised when no audio data is received during synthesis.
 * This typically indicates a problem with the synthesis request or service.
 */
class NoAudioReceived extends EdgeTTSException {
    constructor(message) {
        super(message);
        this.name = "NoAudioReceived";
    }
}
/**
 * Exception raised when there's an error with the WebSocket connection.
 * This can occur during connection establishment, data transmission, or connection closure.
 */
class WebSocketError extends EdgeTTSException {
    constructor(message) {
        super(message);
        this.name = "WebSocketError";
    }
}
/**
 * Exception raised when an invalid value is provided to a function or method.
 * This is typically used for input validation errors.
 */
class ValueError extends EdgeTTSException {
    constructor(message) {
        super(message);
        this.name = "ValueError";
    }
}


/***/ }),

/***/ "./src/utils/newUtils.ts":
/*!*******************************!*\
  !*** ./src/utils/newUtils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcMaxMesgSize: () => (/* binding */ calcMaxMesgSize),
/* harmony export */   connectId: () => (/* binding */ connectId),
/* harmony export */   dateToString: () => (/* binding */ dateToString),
/* harmony export */   dateToStringAlternative: () => (/* binding */ dateToStringAlternative),
/* harmony export */   escape: () => (/* binding */ escape),
/* harmony export */   getHeadersAndDataFromBinary: () => (/* binding */ getHeadersAndDataFromBinary),
/* harmony export */   getHeadersAndDataFromText: () => (/* binding */ getHeadersAndDataFromText),
/* harmony export */   mkssml: () => (/* binding */ mkssml),
/* harmony export */   removeIncompatibleCharacters: () => (/* binding */ removeIncompatibleCharacters),
/* harmony export */   splitTextByByteLength: () => (/* binding */ splitTextByByteLength),
/* harmony export */   splitTextByByteLengthImproved: () => (/* binding */ splitTextByByteLengthImproved),
/* harmony export */   ssmlHeadersPlusData: () => (/* binding */ ssmlHeadersPlusData),
/* harmony export */   ssmlHeadersPlusDataAlternative: () => (/* binding */ ssmlHeadersPlusDataAlternative),
/* harmony export */   unescape: () => (/* binding */ unescape)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceptions */ "./src/utils/exceptions.ts");

// Browser-compatible Buffer utilities
class BrowserBuffer {
    static from(input, encoding) {
        if (typeof input === 'string') {
            return new TextEncoder().encode(input);
        }
        else if (input instanceof ArrayBuffer) {
            return new Uint8Array(input);
        }
        else if (input instanceof Uint8Array) {
            return input;
        }
        throw new Error('Unsupported input type for BrowserBuffer.from');
    }
    static concat(arrays) {
        const totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const arr of arrays) {
            result.set(arr, offset);
            offset += arr.length;
        }
        return result;
    }
}
function _findLastNewlineOrSpaceWithinLimit(text, limit) {
    const slice = text.subarray(0, limit);
    const textStr = new TextDecoder().decode(slice);
    let splitAt = textStr.lastIndexOf('\n');
    if (splitAt < 0) {
        splitAt = textStr.lastIndexOf(' ');
    }
    return splitAt >= 0 ? new TextEncoder().encode(textStr.substring(0, splitAt)).length : -1;
}
function _findSafeUtf8SplitPoint(textSegment) {
    let splitAt = textSegment.length;
    while (splitAt > 0) {
        const slice = textSegment.subarray(0, splitAt);
        try {
            const decoded = new TextDecoder('utf-8', { fatal: true }).decode(slice);
            return splitAt;
        }
        catch (_a) {
            splitAt--;
        }
    }
    return splitAt;
}
function _adjustSplitPointForXmlEntity(text, splitAt) {
    const textStr = new TextDecoder().decode(text.subarray(0, splitAt));
    let ampersandIndex = textStr.lastIndexOf('&');
    while (ampersandIndex !== -1) {
        const remainingText = textStr.substring(ampersandIndex);
        const semicolonIndex = remainingText.indexOf(';');
        if (semicolonIndex !== -1) {
            break; // Found a terminated entity
        }
        // Ampersand is not terminated before split_at
        splitAt = new TextEncoder().encode(textStr.substring(0, ampersandIndex)).length;
        const newTextStr = new TextDecoder().decode(text.subarray(0, splitAt));
        ampersandIndex = newTextStr.lastIndexOf('&');
    }
    return splitAt;
}
/**
 * Splits text into chunks that don't exceed the specified byte length.
 * Attempts to split at word boundaries and handles UTF-8 encoding properly.
 * @param text - Text to split (string or Uint8Array)
 * @param byteLength - Maximum byte length per chunk
 * @yields Uint8Array chunks of the split text
 * @throws {ValueError} If byteLength is too small or text has invalid structure
 */
function* splitTextByByteLengthImproved(text, byteLength) {
    let buffer = typeof text === 'string' ? BrowserBuffer.from(text) : text;
    if (byteLength <= 0) {
        throw new _exceptions__WEBPACK_IMPORTED_MODULE_0__.ValueError("byteLength must be greater than 0");
    }
    while (buffer.length > byteLength) {
        let splitAt = _findLastNewlineOrSpaceWithinLimit(buffer, byteLength);
        if (splitAt < 0) {
            splitAt = _findSafeUtf8SplitPoint(buffer.subarray(0, byteLength));
        }
        splitAt = _adjustSplitPointForXmlEntity(buffer, splitAt);
        if (splitAt <= 0) {
            throw new _exceptions__WEBPACK_IMPORTED_MODULE_0__.ValueError("Maximum byte length is too small or "
                + "invalid text structure near '&' or invalid UTF-8");
        }
        const chunk = buffer.subarray(0, splitAt);
        const chunkString = new TextDecoder().decode(chunk).trim();
        if (chunkString) {
            yield BrowserBuffer.from(chunkString);
        }
        buffer = buffer.subarray(splitAt);
    }
    const remainingChunk = new TextDecoder().decode(buffer).trim();
    if (remainingChunk) {
        yield BrowserBuffer.from(remainingChunk);
    }
}
/**
 * Creates SSML (Speech Synthesis Markup Language) from text and TTS configuration.
 * @param tc - TTS configuration containing voice and prosody settings
 * @param escapedText - Text content (should be XML-escaped)
 * @returns Complete SSML document string
 */
function mkssml(tc, escapedText) {
    const text = escapedText instanceof Uint8Array ? new TextDecoder().decode(escapedText) : escapedText;
    return ("<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>"
        + `<voice name='${tc.voice}'>`
        + `<prosody pitch='${tc.pitch}' rate='${tc.rate}' volume='${tc.volume}'>`
        + `${text}`
        + "</prosody>"
        + "</voice>"
        + "</speak>");
}
/**
 * Formats the current date as a string in the format expected by the TTS service.
 * @returns Formatted date string
 */
function dateToStringAlternative() {
    return new Date().toUTCString().replace("GMT", "GMT+0000 (Coordinated Universal Time)");
}
/**
 * Creates a complete WebSocket message with headers and SSML data.
 * @param requestId - Unique request identifier
 * @param timestamp - Timestamp string for the request
 * @param ssml - SSML content to include in the message
 * @returns Complete WebSocket message string with headers and data
 */
function ssmlHeadersPlusDataAlternative(requestId, timestamp, ssml) {
    return (`X-RequestId:${requestId}\r\n`
        + "Content-Type:application/ssml+xml\r\n"
        + `X-Timestamp:${timestamp}Z\r\n` // This is not a mistake, Microsoft Edge bug.
        + "Path:ssml\r\n\r\n"
        + `${ssml}`);
}
/**
 * Calculates the maximum message size for text chunks based on WebSocket limits.
 * @param ttsConfig - TTS configuration to calculate overhead for
 * @returns Maximum byte size for text content in a single message
 */
function calcMaxMesgSize(ttsConfig) {
    const websocketMaxSize = Math.pow(2, 16);
    const overheadPerMessage = ssmlHeadersPlusData(connectId(), dateToStringAlternative(), mkssml(ttsConfig, "")).length + 50; // margin of error
    return websocketMaxSize - overheadPerMessage;
}
/**
 * Generates a UUID v4 string without hyphens using Web Crypto API.
 * Works in both Node.js (with globalThis.crypto) and browsers.
 */
function connectId() {
    // Use Web Crypto API available in both Node.js 16+ and all modern browsers
    const array = new Uint8Array(16);
    globalThis.crypto.getRandomValues(array);
    // Set version (4) and variant bits according to RFC 4122
    array[6] = (array[6] & 0x0f) | 0x40;
    array[8] = (array[8] & 0x3f) | 0x80;
    // Convert to hex string and format as UUID, then remove hyphens
    const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    const uuid = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
    return uuid.replace(/-/g, '');
}
/**
 * Web-native XML escaping function.
 */
function escape(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
/**
 * Unescapes XML entities in text.
 */
function unescape(text) {
    return text
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}
/**
 * Parses text-based WebSocket messages to extract headers and data.
 * Uses Uint8Array for universal compatibility.
 */
function getHeadersAndDataFromText(message) {
    const messageString = new TextDecoder().decode(message);
    const headerEndIndex = messageString.indexOf('\r\n\r\n');
    const headers = {};
    if (headerEndIndex !== -1) {
        const headerString = messageString.substring(0, headerEndIndex);
        const headerLines = headerString.split('\r\n');
        for (const line of headerLines) {
            const [key, value] = line.split(':', 2);
            if (key && value) {
                headers[key] = value.trim();
            }
        }
    }
    const headerByteLength = new TextEncoder().encode(messageString.substring(0, headerEndIndex + 4)).length;
    return [headers, message.slice(headerByteLength)];
}
/**
 * Parses binary WebSocket messages to extract headers and data.
 * Uses Uint8Array for universal compatibility.
 */
function getHeadersAndDataFromBinary(message) {
    if (message.length < 2) {
        throw new Error('Message too short to contain header length');
    }
    const headerLength = (message[0] << 8) | message[1]; // Read big-endian uint16
    const headers = {};
    if (headerLength > 0 && headerLength + 2 <= message.length) {
        const headerBytes = message.slice(2, headerLength + 2);
        const headerString = new TextDecoder().decode(headerBytes);
        const headerLines = headerString.split('\r\n');
        for (const line of headerLines) {
            const [key, value] = line.split(':', 2);
            if (key && value) {
                headers[key] = value.trim();
            }
        }
    }
    return [headers, message.slice(headerLength + 2)];
}
/**
 * Converts a date to the expected string format for WebSocket messages.
 */
function dateToString(date) {
    if (!date) {
        date = new Date();
    }
    return date.toISOString().replace(/[-:.]/g, '').slice(0, -1);
}
/**
 * Removes characters that are incompatible with SSML.
 * Preserves essential punctuation (.?;:!,) for natural speech pauses.
 * XML special characters (&<>"') are handled by the escape() function.
 */
function removeIncompatibleCharacters(str) {
    // Keep essential punctuation for natural speech: .?;:!,
    // Remove characters that could break SSML structure or cause parsing issues
    const chars_to_remove = "*/()[]{}$%^@#+=|\\~`><\"&";
    let clean_str = str;
    for (const char of chars_to_remove) {
        clean_str = clean_str.replace(new RegExp('\\' + char, 'g'), '');
    }
    return clean_str;
}
/**
 * Splits text by byte length while respecting word boundaries.
 */
function splitTextByByteLength(text, byteLength) {
    const encoder = new TextEncoder();
    const words = text.split(/(\s+)/); // Split by whitespace but keep delimiters
    const chunks = [];
    let currentChunk = "";
    for (const word of words) {
        const potentialChunk = currentChunk + word;
        if (encoder.encode(potentialChunk).length <= byteLength) {
            currentChunk = potentialChunk;
        }
        else {
            if (currentChunk) {
                chunks.push(currentChunk.trim());
                currentChunk = word;
            }
            else {
                // Single word is longer than byteLength, split it
                const wordBytes = encoder.encode(word);
                for (let i = 0; i < wordBytes.length; i += byteLength) {
                    const slice = wordBytes.slice(i, i + byteLength);
                    chunks.push(new TextDecoder().decode(slice));
                }
                currentChunk = "";
            }
        }
    }
    if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
    }
    return chunks;
}
/**
 * Creates SSML headers plus data for WebSocket communication.
 */
function ssmlHeadersPlusData(requestId, timestamp, ssml) {
    return `X-RequestId:${requestId}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${timestamp}Z\r\nPath:ssml\r\n\r\n${ssml}`;
}


/***/ }),

/***/ "./src/utils/textExtraction.ts":
/*!*************************************!*\
  !*** ./src/utils/textExtraction.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractTextFromSelection: () => (/* binding */ extractTextFromSelection),
/* harmony export */   extractTextFromSelectionSimple: () => (/* binding */ extractTextFromSelectionSimple)
/* harmony export */ });
/**
 * Text extraction utilities for reading from specific positions in the DOM
 */
/**
 * Extract text content from the current selection point to the end of the page
 * @param selectedText The text that was selected by the user
 * @returns The text content from the selection point forward
 */
function extractTextFromSelection(selectedText) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
        // Fallback to entire page if no selection
        return document.body.innerText;
    }
    try {
        const range = selection.getRangeAt(0);
        const startContainer = range.startContainer;
        const startOffset = range.startOffset;
        // Find the text content from this point forward
        return extractTextFromPosition(startContainer, startOffset);
    }
    catch (error) {
        console.warn('Error extracting text from selection:', error);
        // Fallback to entire page
        return document.body.innerText;
    }
}
/**
 * Extract text from a specific DOM position to the end of the page
 * @param startNode The starting DOM node
 * @param startOffset The character offset within the start node
 * @returns The extracted text content
 */
function extractTextFromPosition(startNode, startOffset) {
    const textParts = [];
    // If we're starting in a text node, get the remaining text from that node
    if (startNode.nodeType === Node.TEXT_NODE) {
        const textContent = startNode.textContent || '';
        const remainingText = textContent.substring(startOffset);
        if (remainingText.trim()) {
            textParts.push(remainingText);
        }
    }
    // Find the container element to start traversing from
    const startElement = startNode.nodeType === Node.TEXT_NODE
        ? startNode.parentElement
        : startNode;
    if (!startElement) {
        return textParts.join('');
    }
    // Create a tree walker to traverse all text nodes from this point forward
    const walker = createTextWalker(startElement);
    // Skip nodes that come before our starting position
    let currentNode = walker.nextNode();
    let foundStartPosition = false;
    while (currentNode) {
        // Check if this is our starting node or comes after it
        if (!foundStartPosition) {
            if (currentNode === startNode) {
                foundStartPosition = true;
                // We already handled the starting text node above
                currentNode = walker.nextNode();
                continue;
            }
            else if (isNodeAfterPosition(currentNode, startNode, startOffset)) {
                foundStartPosition = true;
            }
            else {
                currentNode = walker.nextNode();
                continue;
            }
        }
        // Collect text from this node
        const textContent = currentNode.textContent;
        if (textContent && textContent.trim()) {
            textParts.push(textContent);
        }
        currentNode = walker.nextNode();
    }
    // If we haven't found our start position yet, we need to look at sibling elements
    if (!foundStartPosition) {
        return extractTextFromSiblingElements(startElement);
    }
    return textParts.join(' ').replace(/\s+/g, ' ').trim();
}
/**
 * Create a TreeWalker that only visits text nodes in readable content
 */
function createTextWalker(root) {
    return document.createTreeWalker(document.body, // Walk the entire body to get everything after our position
    NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
            const element = node.parentElement;
            if (!element)
                return NodeFilter.FILTER_REJECT;
            // Skip hidden elements
            const style = window.getComputedStyle(element);
            if (style.display === 'none' || style.visibility === 'hidden') {
                return NodeFilter.FILTER_REJECT;
            }
            // Skip script and style elements
            const tagName = element.tagName.toLowerCase();
            if (['script', 'style', 'noscript'].includes(tagName)) {
                return NodeFilter.FILTER_REJECT;
            }
            // Only include text nodes with actual content
            const text = node.textContent || '';
            if (text.trim().length === 0) {
                return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
        }
    });
}
/**
 * Check if a node comes after the specified position in document order
 */
function isNodeAfterPosition(node, startNode, startOffset) {
    const range = document.createRange();
    range.setStart(startNode, startOffset);
    range.setEnd(document.body, document.body.childNodes.length);
    try {
        return range.intersectsNode(node);
    }
    catch (error) {
        // Fallback: use compareDocumentPosition
        const position = startNode.compareDocumentPosition(node);
        return (position & Node.DOCUMENT_POSITION_FOLLOWING) !== 0;
    }
}
/**
 * Extract text from sibling elements and their descendants
 */
function extractTextFromSiblingElements(startElement) {
    const textParts = [];
    let currentElement = startElement;
    // Traverse sibling elements
    while (currentElement) {
        const walker = createTextWalker(currentElement);
        let textNode = walker.nextNode();
        while (textNode) {
            const textContent = textNode.textContent;
            if (textContent && textContent.trim()) {
                textParts.push(textContent);
            }
            textNode = walker.nextNode();
        }
        currentElement = currentElement.nextElementSibling;
    }
    // Also traverse parent's siblings if we're in a nested structure
    const parent = startElement.parentElement;
    if (parent && parent !== document.body) {
        let parentSibling = parent.nextElementSibling;
        while (parentSibling) {
            const walker = createTextWalker(parentSibling);
            let textNode = walker.nextNode();
            while (textNode) {
                const textContent = textNode.textContent;
                if (textContent && textContent.trim()) {
                    textParts.push(textContent);
                }
                textNode = walker.nextNode();
            }
            parentSibling = parentSibling.nextElementSibling;
        }
    }
    return textParts.join(' ').replace(/\s+/g, ' ').trim();
}
/**
 * Fallback function to extract text using a simpler approach
 * This can be used if the advanced DOM traversal fails
 */
function extractTextFromSelectionSimple(selectedText) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) {
        return document.body.innerText;
    }
    try {
        // Get all text content from the page
        const fullText = document.body.innerText;
        // Find the position of the selected text
        const selectionStart = fullText.indexOf(selectedText);
        if (selectionStart !== -1) {
            // Return everything from the selection onward
            return fullText.substring(selectionStart);
        }
        // If we can't find the exact text, return the full page
        return fullText;
    }
    catch (error) {
        console.warn('Error in simple text extraction:', error);
        return document.body.innerText;
    }
}


/***/ }),

/***/ "./src/utils/ttsConfig.ts":
/*!********************************!*\
  !*** ./src/utils/ttsConfig.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTSConfig: () => (/* binding */ TTSConfig)
/* harmony export */ });
/* harmony import */ var _exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceptions */ "./src/utils/exceptions.ts");

/**
 * Configuration class for TTS synthesis parameters.
 * Handles voice name normalization and parameter validation.
 *
 * @example
 * ```typescript
 * const config = new TTSConfig({
 *   voice: 'en-US-EmmaMultilingualNeural',
 *   rate: '+20%',
 *   volume: '+10%',
 *   pitch: '+5Hz'
 * });
 * ```
 */
class TTSConfig {
    /**
     * Creates a new TTSConfig instance with the specified parameters.
     *
     * @param options - Configuration options
     * @param options.voice - Voice name (supports both short and full formats)
     * @param options.rate - Speech rate adjustment (default: "+0%")
     * @param options.volume - Volume adjustment (default: "+0%")
     * @param options.pitch - Pitch adjustment (default: "+0Hz")
     * @throws {ValueError} If any parameter has an invalid format
     */
    constructor({ voice, rate = "+0%", volume = "+0%", pitch = "+0Hz", }) {
        this.voice = voice;
        this.rate = rate;
        this.volume = volume;
        this.pitch = pitch;
        this.validate();
    }
    validate() {
        // Voice validation and transformation
        const match = /^([a-z]{2,})-([A-Z]{2,})-(.+Neural)$/.exec(this.voice);
        if (match) {
            const [, lang] = match;
            let [, , region, name] = match;
            if (name.includes('-')) {
                const parts = name.split('-');
                region += `-${parts[0]}`;
                name = parts[1];
            }
            this.voice = `Microsoft Server Speech Text to Speech Voice (${lang}-${region}, ${name})`;
        }
        TTSConfig.validateStringParam("voice", this.voice, /^Microsoft Server Speech Text to Speech Voice \(.+,.+\)$/);
        TTSConfig.validateStringParam("rate", this.rate, /^[+-]\d+%$/);
        TTSConfig.validateStringParam("volume", this.volume, /^[+-]\d+%$/);
        TTSConfig.validateStringParam("pitch", this.pitch, /^[+-]\d+Hz$/);
    }
    static validateStringParam(paramName, paramValue, pattern) {
        if (typeof paramValue !== 'string') {
            throw new TypeError(`${paramName} must be a string`);
        }
        if (!pattern.test(paramValue)) {
            throw new _exceptions__WEBPACK_IMPORTED_MODULE_0__.ValueError(`Invalid ${paramName} '${paramValue}'.`);
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/contentScript.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initTTS: () => (/* binding */ initTTS)
/* harmony export */ });
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-polyfill */ "./node_modules/webextension-polyfill/dist/browser-polyfill.js");
/* harmony import */ var webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_browserCommunicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/browserCommunicate */ "./src/utils/browserCommunicate.ts");
/* harmony import */ var _content_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-styles.css */ "./src/content-styles.css");
/* harmony import */ var _components_controlPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/controlPanel */ "./src/components/controlPanel.ts");
/* harmony import */ var _lib_svgs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/svgs */ "./src/lib/svgs.ts");
/* harmony import */ var _utils_browserDetection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/browserDetection */ "./src/utils/browserDetection.ts");
/* harmony import */ var _utils_textExtraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/textExtraction */ "./src/utils/textExtraction.ts");
/* harmony import */ var _utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/domainReaderProfiles */ "./src/utils/domainReaderProfiles.ts");
/* harmony import */ var _utils_domainExtraction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/domainExtraction */ "./src/utils/domainExtraction.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};









const AUTO_READ_SESSION_KEY = 'etts:auto-read-pending';
const MAX_PENDING_AUTO_READ_AGE_MS = 30 * 60 * 1000;
let audioElement = null;
let controlPanel = null;
let currentTTSDeactivate = null;
let isAutonomousModeEnabled = false;
let currentNextChapterUrl = null;
let currentAutomationSettings = _utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_AUTOMATION_SETTINGS;
let pendingNavigationTimeoutId = null;
let pendingAutoReadStartTimeoutId = null;
let isAutonomousNavigationInProgress = false;
window.togglePause = togglePause;
window.stopPlayback = stopPlayback;
function clearPendingTimeouts() {
    if (pendingNavigationTimeoutId !== null) {
        window.clearTimeout(pendingNavigationTimeoutId);
        pendingNavigationTimeoutId = null;
    }
    if (pendingAutoReadStartTimeoutId !== null) {
        window.clearTimeout(pendingAutoReadStartTimeoutId);
        pendingAutoReadStartTimeoutId = null;
    }
}
function setPendingAutoReadState(delayMs) {
    const state = {
        delayMs: Math.max(0, Math.round(delayMs)),
        createdAt: Date.now(),
    };
    sessionStorage.setItem(AUTO_READ_SESSION_KEY, JSON.stringify(state));
}
function consumePendingAutoReadState() {
    const rawState = sessionStorage.getItem(AUTO_READ_SESSION_KEY);
    if (!rawState) {
        return null;
    }
    sessionStorage.removeItem(AUTO_READ_SESSION_KEY);
    try {
        const parsed = JSON.parse(rawState);
        if (typeof parsed.delayMs !== 'number' || typeof parsed.createdAt !== 'number') {
            return null;
        }
        if (Date.now() - parsed.createdAt > MAX_PENDING_AUTO_READ_AGE_MS) {
            return null;
        }
        return Math.max(0, Math.round(parsed.delayMs));
    }
    catch (_a) {
        return null;
    }
}
function clearPendingAutoReadState() {
    sessionStorage.removeItem(AUTO_READ_SESSION_KEY);
}
function disableAutonomousMode() {
    isAutonomousModeEnabled = false;
    currentNextChapterUrl = null;
    currentAutomationSettings = _utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_AUTOMATION_SETTINGS;
    clearPendingTimeouts();
    clearPendingAutoReadState();
    isAutonomousNavigationInProgress = false;
}
function configureAutonomousMode(options) {
    var _a, _b;
    if (!options.autonomousMode) {
        disableAutonomousMode();
        return;
    }
    isAutonomousModeEnabled = true;
    currentNextChapterUrl = (_a = options.nextChapterUrl) !== null && _a !== void 0 ? _a : null;
    currentAutomationSettings = (_b = options.automationSettings) !== null && _b !== void 0 ? _b : _utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_AUTOMATION_SETTINGS;
    clearPendingTimeouts();
}
function showProfileWarning(message) {
    const warningId = 'etts-profile-warning';
    const existing = document.getElementById(warningId);
    if (existing) {
        existing.textContent = message;
        return;
    }
    const warning = document.createElement('div');
    warning.id = warningId;
    warning.textContent = message;
    warning.style.position = 'fixed';
    warning.style.top = '20px';
    warning.style.right = '20px';
    warning.style.zIndex = '10001';
    warning.style.padding = '10px 14px';
    warning.style.borderRadius = '8px';
    warning.style.background = '#b91c1c';
    warning.style.color = '#ffffff';
    warning.style.fontSize = '13px';
    warning.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    document.body.appendChild(warning);
    window.setTimeout(() => {
        if (warning.parentElement) {
            warning.parentElement.removeChild(warning);
        }
    }, 4000);
}
function getCurrentSiteProfileOrWarn() {
    return __awaiter(this, void 0, void 0, function* () {
        const profiles = yield (0,_utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__.getDomainReaderProfiles)();
        const profile = (0,_utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__.getMatchingDomainProfile)(window.location.hostname, profiles);
        if (!profile) {
            showProfileWarning('No reader profile configured for this site. Configure selectors in extension options.');
            return null;
        }
        return profile;
    });
}
function scheduleAutonomousNextChapterNavigation() {
    if (!isAutonomousModeEnabled || !currentNextChapterUrl) {
        return false;
    }
    setPendingAutoReadState(currentAutomationSettings.nextReadStartDelayMs);
    pendingNavigationTimeoutId = window.setTimeout(() => {
        pendingNavigationTimeoutId = null;
        isAutonomousNavigationInProgress = true;
        window.location.href = currentNextChapterUrl;
    }, currentAutomationSettings.nextNavigationDelayMs);
    return true;
}
function updatePlayPauseButton() {
    const pauseButton = document.querySelector('#tts-pause');
    if (!pauseButton) {
        return;
    }
    const buttonText = audioElement && !audioElement.paused ? 'Pause' : 'Resume';
    pauseButton.innerHTML = `
      ${audioElement && !audioElement.paused ? _lib_svgs__WEBPACK_IMPORTED_MODULE_4__.circlePause : _lib_svgs__WEBPACK_IMPORTED_MODULE_4__.circlePlay}
      <span>
        ${buttonText}
      </span>
    `;
}
function removeControlPanel() {
    if (!controlPanel) {
        return;
    }
    const buttons = controlPanel.querySelectorAll('button');
    buttons.forEach((button) => {
        var _a;
        const newButton = button.cloneNode(true);
        (_a = button.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newButton, button);
    });
    if (controlPanel.parentNode) {
        controlPanel.parentNode.removeChild(controlPanel);
    }
    controlPanel = null;
}
function cleanup(preserveAutonomousState = false) {
    if (currentTTSDeactivate) {
        currentTTSDeactivate();
        currentTTSDeactivate = null;
    }
    if (!preserveAutonomousState) {
        disableAutonomousMode();
    }
    if (audioElement) {
        audioElement.onplay = null;
        audioElement.onpause = null;
        audioElement.onended = null;
        audioElement.onerror = null;
        audioElement.onloadstart = null;
        audioElement.oncanplay = null;
        try {
            navigator.mediaSession.setActionHandler('play', null);
            navigator.mediaSession.setActionHandler('pause', null);
            navigator.mediaSession.setActionHandler('stop', null);
        }
        catch (_a) {
            // Ignore unsupported mediaSession environments
        }
        const oldSrc = audioElement.src;
        audioElement.pause();
        audioElement.src = '';
        audioElement.load();
        if (oldSrc && oldSrc.startsWith('blob:')) {
            URL.revokeObjectURL(oldSrc);
        }
    }
    audioElement = null;
    removeControlPanel();
}
function togglePause() {
    if (!audioElement) {
        return;
    }
    if (audioElement.paused) {
        void audioElement.play();
    }
    else {
        disableAutonomousMode();
        audioElement.pause();
    }
}
function stopPlayback() {
    disableAutonomousMode();
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
    cleanup();
}
function initTTS(text_1) {
    return __awaiter(this, arguments, void 0, function* (text, options = { autonomousMode: false }) {
        if (currentTTSDeactivate) {
            currentTTSDeactivate();
        }
        cleanup();
        configureAutonomousMode(options);
        try {
            const settings = yield webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().storage.sync.get({
                voiceName: 'en-US-ChristopherNeural',
                customVoice: '',
                speed: 1.2,
            });
            controlPanel = yield (0,_components_controlPanel__WEBPACK_IMPORTED_MODULE_3__.createControlPanel)(true);
            const voiceName = settings.customVoice || settings.voiceName;
            const speedPercent = Math.round((settings.speed - 1) * 100);
            const rateString = speedPercent >= 0 ? `+${speedPercent}%` : `${speedPercent}%`;
            const browserCommunicateOptions = {
                voice: voiceName,
                rate: rateString,
                connectionTimeout: 10000,
            };
            const communicate = new _utils_browserCommunicate__WEBPACK_IMPORTED_MODULE_1__.BrowserCommunicate(text, browserCommunicateOptions);
            return new Promise((resolve, reject) => {
                const mediaSource = new MediaSource();
                let sourceBuffer;
                const chunks = [];
                let isFirstChunk = true;
                let isActive = true;
                currentTTSDeactivate = () => {
                    isActive = false;
                };
                if (!audioElement) {
                    audioElement = new Audio();
                    audioElement.muted = true;
                    audioElement.src = URL.createObjectURL(mediaSource);
                    navigator.mediaSession.setActionHandler('play', () => audioElement === null || audioElement === void 0 ? void 0 : audioElement.play());
                    navigator.mediaSession.setActionHandler('pause', () => audioElement === null || audioElement === void 0 ? void 0 : audioElement.pause());
                    navigator.mediaSession.setActionHandler('stop', () => stopPlayback());
                    audioElement.onplay = () => {
                        if (audioElement) {
                            audioElement.muted = false;
                        }
                        updatePlayPauseButton();
                    };
                    audioElement.onpause = () => {
                        updatePlayPauseButton();
                    };
                    audioElement.onended = () => {
                        updatePlayPauseButton();
                        const scheduled = scheduleAutonomousNextChapterNavigation();
                        cleanup(scheduled);
                    };
                    audioElement.onerror = (error) => {
                        console.error('Audio playback error:', error);
                        cleanup();
                    };
                }
                if (controlPanel) {
                    (0,_components_controlPanel__WEBPACK_IMPORTED_MODULE_3__.updatePanelContent)(controlPanel, false);
                }
                const appendNextChunk = () => {
                    var _a;
                    if (!isActive || !sourceBuffer || mediaSource.readyState !== 'open') {
                        return;
                    }
                    if (chunks.length > 0 && !sourceBuffer.updating) {
                        try {
                            const chunk = chunks.shift();
                            if (chunk) {
                                const safeChunk = new Uint8Array(chunk.length);
                                safeChunk.set(chunk);
                                sourceBuffer.appendBuffer(safeChunk);
                                if (isFirstChunk) {
                                    if ((0,_utils_browserDetection__WEBPACK_IMPORTED_MODULE_5__.isFirefox)()) {
                                        setTimeout(() => {
                                            audioElement === null || audioElement === void 0 ? void 0 : audioElement.play().catch((err) => {
                                                console.warn('Firefox autoplay workaround failed:', err);
                                            });
                                        }, 0);
                                    }
                                    else {
                                        audioElement === null || audioElement === void 0 ? void 0 : audioElement.play().catch((err) => {
                                            console.warn('Audio playback failed:', err);
                                        });
                                    }
                                    isFirstChunk = false;
                                }
                            }
                        }
                        catch (err) {
                            console.error('appendNextChunk error:', err, 'chunk length:', (_a = chunks[0]) === null || _a === void 0 ? void 0 : _a.length);
                            chunks.shift();
                            if (isActive) {
                                setTimeout(appendNextChunk, 100);
                            }
                        }
                    }
                };
                mediaSource.addEventListener('sourceopen', () => {
                    try {
                        const mimeType = (0,_utils_browserDetection__WEBPACK_IMPORTED_MODULE_5__.isFirefox)()
                            ? 'audio/webm; codecs="opus"'
                            : 'audio/mpeg';
                        sourceBuffer = mediaSource.addSourceBuffer(mimeType);
                        sourceBuffer.addEventListener('updateend', appendNextChunk);
                        (() => __awaiter(this, void 0, void 0, function* () {
                            var _a, e_1, _b, _c;
                            try {
                                let streamEnded = false;
                                try {
                                    for (var _d = true, _e = __asyncValues(communicate.stream()), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
                                        _c = _f.value;
                                        _d = false;
                                        const chunk = _c;
                                        if (!isActive) {
                                            streamEnded = true;
                                            return;
                                        }
                                        if (chunk.type === 'audio' && chunk.data) {
                                            const cloned = new Uint8Array(chunk.data.byteLength);
                                            cloned.set(chunk.data);
                                            chunks.push(cloned);
                                            appendNextChunk();
                                        }
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                                streamEnded = true;
                                const checkAndEndStream = () => {
                                    if (!isActive) {
                                        return;
                                    }
                                    if (streamEnded && chunks.length === 0 && !sourceBuffer.updating) {
                                        try {
                                            if (mediaSource.readyState === 'open') {
                                                mediaSource.endOfStream();
                                            }
                                            resolve(void 0);
                                        }
                                        catch (_a) {
                                            resolve(void 0);
                                        }
                                    }
                                    else {
                                        setTimeout(checkAndEndStream, 100);
                                    }
                                };
                                checkAndEndStream();
                            }
                            catch (error) {
                                console.error('TTS streaming error:', error);
                                reject(error);
                            }
                        }))();
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            });
        }
        catch (error) {
            console.error('TTS Error:', error);
            cleanup();
            throw error;
        }
    });
}
function startConfiguredPageRead() {
    return __awaiter(this, void 0, void 0, function* () {
        const profile = yield getCurrentSiteProfileOrWarn();
        if (!profile) {
            return;
        }
        const extraction = (0,_utils_domainExtraction__WEBPACK_IMPORTED_MODULE_8__.extractDomainReaderContent)(profile);
        if (!extraction) {
            showProfileWarning('Configured selectors did not find readable chapter content on this page.');
            return;
        }
        const automationSettings = yield (0,_utils_domainReaderProfiles__WEBPACK_IMPORTED_MODULE_7__.getReaderAutomationSettings)();
        yield initTTS(extraction.speechText, {
            autonomousMode: true,
            nextChapterUrl: extraction.nextChapterUrl,
            automationSettings,
        });
    });
}
function startSelectedTextRead(selectedText) {
    return __awaiter(this, void 0, void 0, function* () {
        const profile = yield getCurrentSiteProfileOrWarn();
        if (!profile) {
            return;
        }
        yield initTTS(selectedText, { autonomousMode: false });
    });
}
function startReadFromHere(selectedText) {
    return __awaiter(this, void 0, void 0, function* () {
        const profile = yield getCurrentSiteProfileOrWarn();
        if (!profile) {
            return;
        }
        let textToRead = '';
        try {
            textToRead = (0,_utils_textExtraction__WEBPACK_IMPORTED_MODULE_6__.extractTextFromSelection)(selectedText);
            if (!textToRead || textToRead.trim().length === 0) {
                textToRead = (0,_utils_textExtraction__WEBPACK_IMPORTED_MODULE_6__.extractTextFromSelectionSimple)(selectedText);
            }
        }
        catch (error) {
            console.error('Error extracting text from selection:', error);
            textToRead = selectedText;
        }
        if (!textToRead || !textToRead.trim()) {
            showProfileWarning('No readable text found from the selected position.');
            return;
        }
        yield initTTS(textToRead, { autonomousMode: false });
    });
}
function maybeStartPendingAutoRead() {
    return __awaiter(this, void 0, void 0, function* () {
        const pendingDelayMs = consumePendingAutoReadState();
        if (pendingDelayMs === null) {
            return;
        }
        const profile = yield getCurrentSiteProfileOrWarn();
        if (!profile) {
            return;
        }
        pendingAutoReadStartTimeoutId = window.setTimeout(() => {
            pendingAutoReadStartTimeoutId = null;
            void startConfiguredPageRead().catch((error) => {
                console.error('Auto-start read failed:', error);
            });
        }, pendingDelayMs);
    });
}
function handleIncomingMessage(request) {
    return __awaiter(this, void 0, void 0, function* () {
        if (request.action === 'stopPlayback') {
            stopPlayback();
            return;
        }
        if (request.action === 'togglePlayback') {
            togglePause();
            return;
        }
        if (request.action === 'readPage') {
            yield startConfiguredPageRead();
            return;
        }
        if (request.action === 'readText' && request.text) {
            yield startSelectedTextRead(request.text);
            return;
        }
        if (request.action === 'readFromHere' && request.text) {
            yield startReadFromHere(request.text);
        }
    });
}
webextension_polyfill__WEBPACK_IMPORTED_MODULE_0___default().runtime.onMessage.addListener((request) => {
    const message = request;
    void handleIncomingMessage(message).catch((error) => {
        console.error('Message handling error:', error);
    });
});
window.addEventListener('message', (event) => {
    if (event.source !== window) {
        return;
    }
    const { action, text } = event.data || {};
    if (action === 'triggerReadPage') {
        void startConfiguredPageRead().catch((error) => {
            console.error('triggerReadPage error:', error);
        });
    }
    if (action === 'triggerTTS' && typeof text === 'string') {
        void startSelectedTextRead(text).catch((error) => {
            console.error('triggerTTS error:', error);
        });
    }
});
window.addEventListener('beforeunload', () => {
    clearPendingTimeouts();
    if (isAutonomousNavigationInProgress) {
        cleanup(true);
        return;
    }
    cleanup();
});
void maybeStartPendingAutoRead().catch((error) => {
    console.error('Auto-read initialization failed:', error);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map