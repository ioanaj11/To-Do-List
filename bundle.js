/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100vh;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n}\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 90%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 25%;\n    height:717px;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    padding:30px 70px 30px 70px;\n    margin-top: 30px;\n    height:85%;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-x:hidden;\n    overflow-y:auto;\n}\n\n.taskDiv, .taskListHead{\n    margin: 5px;\n    padding:5px;\n    border: 2px solid;\n    border-radius: 5px;\n    height:20px;\n    width:100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;\n    background-color: var(--hover-color);\n    }\n\n.taskDiv>button{\n    justify-self: flex-end;\n    width: 30px;\n}\n.taskDiv>button>img{\n    height:20px;\n    width:auto;\n}\n\nh4{\n    margin:0;\n    margin-left: 5px;\n    padding:0;\n    color: black;\n    font-size: 20px;\n    font-weight: 500;\n    }\n\n.taskListHead{\n    background-color: var(--header-color);\n    font-weight: 700;\n}\n\n.taskListHead>h4{\n    border-right: none;\n    color: var(--lightest-color);\n}\n.flagImg{\n    width:20px;\n    height:20px;\n    padding-right: 50px;\n    margin-left:10px;\n    }\n\n.blurred{\n    filter: blur(5px);\n    pointer-events: none;\n    user-select:none;\n}\n\n#popup{\n    visibility: hidden;\n    opacity: 0;\n    position:fixed;\n    top:20%;\n    left:33%;\n    width:600px;\n    height:300px;\n    padding:50px;\n    box-shadow: 0 5px 30px rgba(0,0,0, .30);\n    background:var(--header-color);\n    color: var(--lightest-color);\n    border: 2px solid;\n    border-color: var(--hover-color);\n    border-radius: 5px;\n    }\n\n#popup.active{\n    visibility: visible;\n    opacity:1;\n    transition:0.5s;\n}\n\n#popup>h2{\n    font-size: 35px;\n    text-align: center;\n    margin-top: -10px;\n}\n\nform>div{\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 5px;\n    }\n\nlabel{\n    font-size: 20px;\n    font-weight: 550;\n    }\n\ninput, textarea, select{\n    border-radius: 5px;\n    font-size: 18px;\n}\n\n#popup button{\n    background-color: var(--hover-color);\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 550;\n    width: 120px;\n    height:auto;\n    display: flex;\n    justify-content: center;\n    border: 1px solid;\n}\n\nform>div:last-child{\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectsDiv{\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 280px;\n}\n\n.projectsDiv button{\n    font-size: 18px;\n    font-weight: 550;\n    line-height: 40px;\n    color: black;\n    border-radius: 5px;\n    }\n\n.projectsDiv button:hover{\n    background-color: var(--hover-color);\n}\n\n.projectsDiv input{\n   margin-left: 5px;\n   width:150px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,iCAAiC;IACjC,kCAAkC;AACtC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,uCAAuC;IACvC,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qCAAqC;IACrC,YAAY;IACZ,WAAW;IACX;;AAEJ;IACI,WAAW;IACX,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB;;AAEJ;IACI,UAAU;IACV,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,2BAA2B;IAC3B,mBAAmB;IACnB;;AAEJ;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,uBAAuB;IACvB,uCAAuC;IACvC,uBAAuB;IACvB,iCAAiC;IACjC,UAAU;IACV,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;KACjB;;AAEL;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;IAC1B,SAAS;IACT,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,UAAU;IACV,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,aAAa;IACb,kDAAkD;IAClD,oCAAoC;IACpC;;AAEJ;IACI,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,QAAQ;IACR,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB;;AAEJ;IACI,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB;;AAEJ;IACI,iBAAiB;IACjB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,cAAc;IACd,OAAO;IACP,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,uCAAuC;IACvC,8BAA8B;IAC9B,4BAA4B;IAC5B,iBAAiB;IACjB,gCAAgC;IAChC,kBAAkB;IAClB;;AAEJ;IACI,mBAAmB;IACnB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB;;AAEJ;IACI,eAAe;IACf,gBAAgB;IAChB;;AAEJ;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,0BAA0B;IAC1B,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB;;AAEJ;IACI,oCAAoC;AACxC;;AAEA;GACG,gBAAgB;GAChB,WAAW;AACd","sourcesContent":[":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100vh;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n}\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 90%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 25%;\n    height:717px;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    padding:30px 70px 30px 70px;\n    margin-top: 30px;\n    height:85%;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-x:hidden;\n    overflow-y:auto;\n}\n\n.taskDiv, .taskListHead{\n    margin: 5px;\n    padding:5px;\n    border: 2px solid;\n    border-radius: 5px;\n    height:20px;\n    width:100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;\n    background-color: var(--hover-color);\n    }\n\n.taskDiv>button{\n    justify-self: flex-end;\n    width: 30px;\n}\n.taskDiv>button>img{\n    height:20px;\n    width:auto;\n}\n\nh4{\n    margin:0;\n    margin-left: 5px;\n    padding:0;\n    color: black;\n    font-size: 20px;\n    font-weight: 500;\n    }\n\n.taskListHead{\n    background-color: var(--header-color);\n    font-weight: 700;\n}\n\n.taskListHead>h4{\n    border-right: none;\n    color: var(--lightest-color);\n}\n.flagImg{\n    width:20px;\n    height:20px;\n    padding-right: 50px;\n    margin-left:10px;\n    }\n\n.blurred{\n    filter: blur(5px);\n    pointer-events: none;\n    user-select:none;\n}\n\n#popup{\n    visibility: hidden;\n    opacity: 0;\n    position:fixed;\n    top:20%;\n    left:33%;\n    width:600px;\n    height:300px;\n    padding:50px;\n    box-shadow: 0 5px 30px rgba(0,0,0, .30);\n    background:var(--header-color);\n    color: var(--lightest-color);\n    border: 2px solid;\n    border-color: var(--hover-color);\n    border-radius: 5px;\n    }\n\n#popup.active{\n    visibility: visible;\n    opacity:1;\n    transition:0.5s;\n}\n\n#popup>h2{\n    font-size: 35px;\n    text-align: center;\n    margin-top: -10px;\n}\n\nform>div{\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 5px;\n    }\n\nlabel{\n    font-size: 20px;\n    font-weight: 550;\n    }\n\ninput, textarea, select{\n    border-radius: 5px;\n    font-size: 18px;\n}\n\n#popup button{\n    background-color: var(--hover-color);\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 550;\n    width: 120px;\n    height:auto;\n    display: flex;\n    justify-content: center;\n    border: 1px solid;\n}\n\nform>div:last-child{\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectsDiv{\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 280px;\n}\n\n.projectsDiv button{\n    font-size: 18px;\n    font-weight: 550;\n    line-height: 40px;\n    color: black;\n    border-radius: 5px;\n    }\n\n.projectsDiv button:hover{\n    background-color: var(--hover-color);\n}\n\n.projectsDiv input{\n   margin-left: 5px;\n   width:150px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "clearProjectsList": () => (/* binding */ clearProjectsList)
/* harmony export */ });
/* harmony import */ var _displayProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProjectList */ "./src/displayProjectList.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




function addProject(){
    const projectsDiv=document.querySelector('.projectsDiv');
    const listItem=document.createElement('button');
    listItem.textContent=`\u2022`;
    
    const inputNewProject=document.createElement('input');

    listItem.appendChild(inputNewProject);
    projectsDiv.appendChild(listItem);

    inputNewProject.addEventListener('keypress', e => {
        if (e.key === "Enter") {
            const newProject=inputNewProject.value;
            _tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList.push(newProject);
            clearProjectsList();
            (0,_displayProjectList__WEBPACK_IMPORTED_MODULE_0__.displayProjectsList)(_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList);
    }})
}

function clearProjectsList(){
    const projectsDiv=document.querySelector('.projectsDiv');

    const sideMenu=document.querySelector('.side-menu');
    sideMenu.removeChild(projectsDiv);
}




/***/ }),

/***/ "./src/addTaskForm.js":
/*!****************************!*\
  !*** ./src/addTaskForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskForm": () => (/* binding */ addTaskForm),
/* harmony export */   "registerNewTask": () => (/* binding */ registerNewTask),
/* harmony export */   "removeAddTaskForm": () => (/* binding */ removeAddTaskForm)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _clearTaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTaskList.js */ "./src/clearTaskList.js");




const backgroundDisplay=document.getElementById('content');
const popup=document.getElementById('popup');

function addTaskForm(){
    const projectsDropbox=document.getElementById('project');
    for(let i=1; i<_tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList.length; i++){
        const projectOption=document.createElement('option');
        projectOption.setAttribute('value', `${_tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList[i]}`);
        projectOption.classList.add('projectOptions');
        projectOption.textContent=`${_tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList[i]}`;

        projectsDropbox.appendChild(projectOption);
    }

    backgroundDisplay.classList.add('blurred');
    popup.classList.add('active');

    const removeAddTaskBtn=document.querySelector('.cancelAddTaskBtn');
    removeAddTaskBtn.addEventListener('click', e=>removeAddTaskForm());
    }

function removeAddTaskForm(){
    popup.classList.remove('active');
    backgroundDisplay.classList.remove('blurred');
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_1__.clearPopupForm)();
    reinitiateProjectList();
}

function registerNewTask(){
    const taskName=document.getElementById('task-name').value;
    const taskDetails=document.getElementById('task-details').value;
    const taskDue=document.getElementById('due-date').value;
    const taskProject=document.getElementById('project').value;
    const taskPriority=document.getElementById('priority').value;

    const newTask=new _tasks__WEBPACK_IMPORTED_MODULE_0__.task(taskName, taskProject, taskDetails, taskDue, taskPriority);
    _tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList.push(newTask);
}

function reinitiateProjectList(){
    const projectsDropbox=document.getElementById('project');
    const projectOptions=document.querySelectorAll('.projectOptions');

    projectOptions.forEach(projectOption => projectsDropbox.removeChild(projectOption));
}





/***/ }),

/***/ "./src/clearTaskList.js":
/*!******************************!*\
  !*** ./src/clearTaskList.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPopupForm": () => (/* binding */ clearPopupForm),
/* harmony export */   "clearTaskList": () => (/* binding */ clearTaskList)
/* harmony export */ });
function clearTaskList(){
    const taskDisplay=document.querySelector('.task-display');
    const taskDiv=document.querySelector('.taskDiv');

    if (taskDiv!=undefined) 
        { taskDisplay.removeChild(taskDiv);
            clearTaskList()}
}

function clearPopupForm(){
    document.getElementById("addTaskForm").reset();
}




/***/ }),

/***/ "./src/displayProjectList.js":
/*!***********************************!*\
  !*** ./src/displayProjectList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjectsList": () => (/* binding */ displayProjectsList)
/* harmony export */ });
function displayProjectsList(list){
    const sideMenu=document.querySelector('.side-menu');
    const projectsDiv=document.createElement('ul');
    projectsDiv.classList.add('projectsDiv');

    for(let i=1; i<list.length; i++){
        const projectName=document.createElement('li');
        
        const projectNameBtn=document.createElement('button');
        projectNameBtn.textContent=`\u2022 ${list[i]}`;

        projectsDiv.appendChild(projectNameBtn);
    }
    sideMenu.appendChild(projectsDiv);

  }



/***/ }),

/***/ "./src/displayTaskList.js":
/*!********************************!*\
  !*** ./src/displayTaskList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _assets_images_redflag_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/redflag.png */ "./src/assets/images/redflag.png");
/* harmony import */ var _assets_images_orangeflag_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/orangeflag.png */ "./src/assets/images/orangeflag.png");
/* harmony import */ var _assets_images_yellowflag_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/yellowflag.png */ "./src/assets/images/yellowflag.png");
/* harmony import */ var _assets_images_bin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/bin.png */ "./src/assets/images/bin.png");
/* harmony import */ var _assets_images_information_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/information.png */ "./src/assets/images/information.png");
/* harmony import */ var _assets_images_edit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/edit.png */ "./src/assets/images/edit.png");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _removetask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./removetask */ "./src/removetask.js");
/* harmony import */ var _clearTaskList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clearTaskList */ "./src/clearTaskList.js");










function displayTasks(givenTasksList){
    for(let i=0; i<givenTasksList.length; i++){
        const taskDisplay=document.querySelector('.task-display');
        const taskDiv=document.createElement('div');
        taskDiv.setAttribute('id', `${i}`);
        taskDiv.classList.add('taskDiv');

        const flag=document.createElement('img');
        flag.classList.add('flagImg');
        switch(givenTasksList[i]['priority']){
            case 'low':
                flag.setAttribute('src','a78d26d4f76f658f1246.png');
                flag.setAttribute('title', 'low');
                break;
            case 'medium':
                flag.setAttribute('src','62b55875c1540e2c642f.png');
                flag.setAttribute('title', 'medium');
                break;
            default:
                flag.setAttribute('src','720702197f513433d6a6.png');
                flag.setAttribute('title', 'high');
        }

        taskDiv.appendChild(flag);
        
        const taskName=document.createElement('h4');
        taskName.textContent=`${givenTasksList[i]['title']}`;
        taskDiv.appendChild(taskName);

        const projectName=document.createElement('h4');
        projectName.textContent=`${givenTasksList[i]['project']}`;
        taskDiv.appendChild(projectName);

        const due=document.createElement('h4');
        due.textContent=`${givenTasksList[i]['due']}`;
        taskDiv.appendChild(due);

        const detailsBtn=document.createElement('button');
        const detailsIcon=document.createElement('img');
        detailsIcon.setAttribute('src', '5557f95abde96def3fa7.png');
        detailsIcon.setAttribute('title', 'See details');

        detailsBtn.appendChild(detailsIcon);
        taskDiv.appendChild(detailsBtn);

        const editBtn=document.createElement('button');
        const editIcon=document.createElement('img');
        editIcon.setAttribute('src', '6f6481dd783e4c5d194e.png');
        editIcon.setAttribute('title', 'Edit');

        editBtn.appendChild(editIcon);
        taskDiv.appendChild(editBtn);

        const deleteBtn=document.createElement('button');
        const deleteIcon=document.createElement('img');
        deleteIcon.setAttribute('src', 'de2923577165415ec4c0.png');
        deleteIcon.setAttribute('title', 'Delete');
        deleteIcon.setAttribute('id',`${i}`);
        deleteIcon.classList.add('deleteTaskBtn');

        deleteIcon.addEventListener('click', e=>
            {(0,_removetask__WEBPACK_IMPORTED_MODULE_7__.removeTask)(e.target.id, givenTasksList);
             (0,_clearTaskList__WEBPACK_IMPORTED_MODULE_8__.clearTaskList)();
             displayTasks(givenTasksList)});

        deleteBtn.appendChild(deleteIcon);
        taskDiv.appendChild(deleteBtn);

        taskDisplay.appendChild(taskDiv);

   }
   }


/***/ }),

/***/ "./src/removetask.js":
/*!***************************!*\
  !*** ./src/removetask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


function removeTask(taskId, tasksList){
    tasksList.splice(taskId,1);    
}



/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "task": () => (/* binding */ task),
/* harmony export */   "tasksList": () => (/* binding */ tasksList)
/* harmony export */ });
function task(title, project, description, due, priority){
    this.title=title,
    this.project=project,
    this.description=description,
    this.due=due,
    this.priority=priority}

let tasksList=[];

const task1= new task('Vacuum the rooms', '-', 'I have to vacuum the rooms', '10/11/2022', 'low') 
tasksList.push(task1);
const task2= new task('Sweep the floor', '-', 'I have to vacuum the rooms', '10/11/2022', 'medium') 
tasksList.push(task2);
const task3= new task('Learn coding', '-', 'I have to vacuum the rooms', '10/11/2022', 'high') 
tasksList.push(task3);

let projectsList=['-','Home', 'Work', 'Self-development'];





/***/ }),

/***/ "./src/assets/images/bin.png":
/*!***********************************!*\
  !*** ./src/assets/images/bin.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de2923577165415ec4c0.png";

/***/ }),

/***/ "./src/assets/images/edit.png":
/*!************************************!*\
  !*** ./src/assets/images/edit.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f6481dd783e4c5d194e.png";

/***/ }),

/***/ "./src/assets/images/information.png":
/*!*******************************************!*\
  !*** ./src/assets/images/information.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5557f95abde96def3fa7.png";

/***/ }),

/***/ "./src/assets/images/orangeflag.png":
/*!******************************************!*\
  !*** ./src/assets/images/orangeflag.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62b55875c1540e2c642f.png";

/***/ }),

/***/ "./src/assets/images/redflag.png":
/*!***************************************!*\
  !*** ./src/assets/images/redflag.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "720702197f513433d6a6.png";

/***/ }),

/***/ "./src/assets/images/yellowflag.png":
/*!******************************************!*\
  !*** ./src/assets/images/yellowflag.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a78d26d4f76f658f1246.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTaskList.js */ "./src/displayTaskList.js");
/* harmony import */ var _addTaskForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskForm.js */ "./src/addTaskForm.js");
/* harmony import */ var _clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clearTaskList.js */ "./src/clearTaskList.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _displayProjectList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayProjectList.js */ "./src/displayProjectList.js");










(0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList);

const addTaskBtn=document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', e=> (0,_addTaskForm_js__WEBPACK_IMPORTED_MODULE_3__.addTaskForm)());

const popupAddTaskBtn=document.getElementById('popupAddTaskBtn');
popupAddTaskBtn.addEventListener('click', e=> 
    {(0,_addTaskForm_js__WEBPACK_IMPORTED_MODULE_3__.registerNewTask)();
    (0,_addTaskForm_js__WEBPACK_IMPORTED_MODULE_3__.removeAddTaskForm)();
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__.clearTaskList)();
    (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList)});

(0,_displayProjectList_js__WEBPACK_IMPORTED_MODULE_6__.displayProjectsList)(_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList);

const addProjectBtn=document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', e=> (0,_addProject_js__WEBPACK_IMPORTED_MODULE_5__.addProject)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFB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O0FBQ3JCLElBQUksZ0VBQWE7QUFDakIsSUFBSSxpRUFBWSxDQUFDLDZDQUFTLEVBQUU7O0FBRTVCLDJFQUFtQixDQUFDLGdEQUFZOztBQUVoQztBQUNBLDRDQUE0QywwREFBVSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsZWFyVGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW1vdmV0YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWxpZ2h0ZXN0LWNvbG9yOiByZ2IoMjI5LCAyNDEsIDI0MSk7XFxuICAgIC0taG92ZXItY29sb3I6IHJnYigyMDAsIDIyOCwgMjI4KTtcXG4gICAgLS1oZWFkZXItY29sb3I6IHJnYigxMjQsIDEwNCwgMTk2KTtcXG59XFxuXFxuYm9keSwgaHRtbHtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA4NSk7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAzMHB4IDYwcHg7XFxuICAgIGhlaWdodDo5MCU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi5oZWFkZXIgaW1ne1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICB9XFxuXFxuLmhlYWRlcj5oMT5pbWd7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGhlaWdodDozMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOmdyYWI7XFxufVxcblxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbi5zaWRlLW1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OjcxN3B4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLnNpZGUtbWVudT5kaXYsIC5zaWRlLW1lbnUgbGl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIH1cXG5cXG4uc2lkZS1tZW51PmRpdjpob3ZlciwgLnNpZGUtbWVudSBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG51bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGl7XFxuICAgIHBhZGRpbmctbGVmdDo1cHg7XFxufVxcblxcbi5hbGwtdGFza3MtbGluZSwgLnByb2plY3QtbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcbi5zaWRlLW1lbnUgaW1ne1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcXG4gICAgcGFkZGluZzowcHg7XFxufVxcbiAgICBcXG4uc2lkZS1tZW51PmRpdj5idXR0b24+aW1nOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5hbGwtdGFza3MtbWVudSBpbWd7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG4gICBcXG5oMXtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcXG59XFxuXFxuaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5ocntcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIHdpZHRoOjk5JTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXl7XFxuICAgIHBhZGRpbmc6MzBweCA3MHB4IDMwcHggNzBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgaGVpZ2h0Ojg1JTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4udGFza0RpdiwgLnRhc2tMaXN0SGVhZHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgfVxcblxcbi50YXNrRGl2PmJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi50YXNrRGl2PmJ1dHRvbj5pbWd7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDphdXRvO1xcbn1cXG5cXG5oNHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG5cXG4udGFza0xpc3RIZWFke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFza0xpc3RIZWFkPmg0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxufVxcbi5mbGFnSW1ne1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcXG4gICAgfVxcblxcbi5ibHVycmVke1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0Om5vbmU7XFxufVxcblxcbiNwb3B1cHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgdG9wOjIwJTtcXG4gICAgbGVmdDozMyU7XFxuICAgIHdpZHRoOjYwMHB4O1xcbiAgICBoZWlnaHQ6MzAwcHg7XFxuICAgIHBhZGRpbmc6NTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsMCwwLCAuMzApO1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuXFxuI3BvcHVwLmFjdGl2ZXtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eToxO1xcbiAgICB0cmFuc2l0aW9uOjAuNXM7XFxufVxcblxcbiNwb3B1cD5oMntcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG5mb3JtPmRpdntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgfVxcblxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIH1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNwb3B1cCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcblxcbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucHJvamVjdHNEaXZ7XFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIHdpZHRoOiAyODBweDtcXG59XFxuXFxuLnByb2plY3RzRGl2IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG5cXG4ucHJvamVjdHNEaXYgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c0RpdiBpbnB1dHtcXG4gICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgIHdpZHRoOjE1MHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osV0FBVztJQUNYOztBQUVKO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCOztBQUVKO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQjs7QUFFSjtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ks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RUo7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsV0FBVztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWxpZ2h0ZXN0LWNvbG9yOiByZ2IoMjI5LCAyNDEsIDI0MSk7XFxuICAgIC0taG92ZXItY29sb3I6IHJnYigyMDAsIDIyOCwgMjI4KTtcXG4gICAgLS1oZWFkZXItY29sb3I6IHJnYigxMjQsIDEwNCwgMTk2KTtcXG59XFxuXFxuYm9keSwgaHRtbHtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA4NSk7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAzMHB4IDYwcHg7XFxuICAgIGhlaWdodDo5MCU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi5oZWFkZXIgaW1ne1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICB9XFxuXFxuLmhlYWRlcj5oMT5pbWd7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGhlaWdodDozMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOmdyYWI7XFxufVxcblxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbi5zaWRlLW1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OjcxN3B4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLnNpZGUtbWVudT5kaXYsIC5zaWRlLW1lbnUgbGl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIH1cXG5cXG4uc2lkZS1tZW51PmRpdjpob3ZlciwgLnNpZGUtbWVudSBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG51bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGl7XFxuICAgIHBhZGRpbmctbGVmdDo1cHg7XFxufVxcblxcbi5hbGwtdGFza3MtbGluZSwgLnByb2plY3QtbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcbi5zaWRlLW1lbnUgaW1ne1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcXG4gICAgcGFkZGluZzowcHg7XFxufVxcbiAgICBcXG4uc2lkZS1tZW51PmRpdj5idXR0b24+aW1nOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5hbGwtdGFza3MtbWVudSBpbWd7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG4gICBcXG5oMXtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcXG59XFxuXFxuaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5ocntcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIHdpZHRoOjk5JTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXl7XFxuICAgIHBhZGRpbmc6MzBweCA3MHB4IDMwcHggNzBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgaGVpZ2h0Ojg1JTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4udGFza0RpdiwgLnRhc2tMaXN0SGVhZHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgfVxcblxcbi50YXNrRGl2PmJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi50YXNrRGl2PmJ1dHRvbj5pbWd7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDphdXRvO1xcbn1cXG5cXG5oNHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG5cXG4udGFza0xpc3RIZWFke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFza0xpc3RIZWFkPmg0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxufVxcbi5mbGFnSW1ne1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcXG4gICAgfVxcblxcbi5ibHVycmVke1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0Om5vbmU7XFxufVxcblxcbiNwb3B1cHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgdG9wOjIwJTtcXG4gICAgbGVmdDozMyU7XFxuICAgIHdpZHRoOjYwMHB4O1xcbiAgICBoZWlnaHQ6MzAwcHg7XFxuICAgIHBhZGRpbmc6NTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsMCwwLCAuMzApO1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuXFxuI3BvcHVwLmFjdGl2ZXtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eToxO1xcbiAgICB0cmFuc2l0aW9uOjAuNXM7XFxufVxcblxcbiNwb3B1cD5oMntcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG5mb3JtPmRpdntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgfVxcblxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIH1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNwb3B1cCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcblxcbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucHJvamVjdHNEaXZ7XFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIHdpZHRoOiAyODBweDtcXG59XFxuXFxuLnByb2plY3RzRGl2IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG5cXG4ucHJvamVjdHNEaXYgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c0RpdiBpbnB1dHtcXG4gICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgIHdpZHRoOjE1MHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkaXNwbGF5UHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vZGlzcGxheVByb2plY3RMaXN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKXtcbiAgICBjb25zdCBwcm9qZWN0c0Rpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNEaXYnKTtcbiAgICBjb25zdCBsaXN0SXRlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudD1gXFx1MjAyMmA7XG4gICAgXG4gICAgY29uc3QgaW5wdXROZXdQcm9qZWN0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChpbnB1dE5ld1Byb2plY3QpO1xuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuICAgIGlucHV0TmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdD1pbnB1dE5ld1Byb2plY3QudmFsdWU7XG4gICAgICAgICAgICBwcm9qZWN0c0xpc3QucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdHNMaXN0KCk7XG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdHNMaXN0KHByb2plY3RzTGlzdCk7XG4gICAgfX0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdHNMaXN0KCl7XG4gICAgY29uc3QgcHJvamVjdHNEaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzRGl2Jyk7XG5cbiAgICBjb25zdCBzaWRlTWVudT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1tZW51Jyk7XG4gICAgc2lkZU1lbnUucmVtb3ZlQ2hpbGQocHJvamVjdHNEaXYpO1xufVxuXG5leHBvcnQge2FkZFByb2plY3R9O1xuZXhwb3J0IHtjbGVhclByb2plY3RzTGlzdH07IiwiaW1wb3J0IHtwcm9qZWN0c0xpc3QsIHRhc2tzTGlzdH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQge3Rhc2t9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHtjbGVhclBvcHVwRm9ybX0gZnJvbSAnLi9jbGVhclRhc2tMaXN0LmpzJztcblxuY29uc3QgYmFja2dyb3VuZERpc3BsYXk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHBvcHVwPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuXG5mdW5jdGlvbiBhZGRUYXNrRm9ybSgpe1xuICAgIGNvbnN0IHByb2plY3RzRHJvcGJveD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIGZvcihsZXQgaT0xOyBpPHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Byb2plY3RzTGlzdFtpXX1gKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3B0aW9ucycpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50PWAke3Byb2plY3RzTGlzdFtpXX1gO1xuXG4gICAgICAgIHByb2plY3RzRHJvcGJveC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdibHVycmVkJyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zdCByZW1vdmVBZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxBZGRUYXNrQnRuJyk7XG4gICAgcmVtb3ZlQWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PnJlbW92ZUFkZFRhc2tGb3JtKCkpO1xuICAgIH1cblxuZnVuY3Rpb24gcmVtb3ZlQWRkVGFza0Zvcm0oKXtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBiYWNrZ3JvdW5kRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdibHVycmVkJyk7XG4gICAgY2xlYXJQb3B1cEZvcm0oKTtcbiAgICByZWluaXRpYXRlUHJvamVjdExpc3QoKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOZXdUYXNrKCl7XG4gICAgY29uc3QgdGFza05hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRldGFpbHMnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VGFzaz1uZXcgdGFzayh0YXNrTmFtZSwgdGFza1Byb2plY3QsIHRhc2tEZXRhaWxzLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tzTGlzdC5wdXNoKG5ld1Rhc2spO1xufVxuXG5mdW5jdGlvbiByZWluaXRpYXRlUHJvamVjdExpc3QoKXtcbiAgICBjb25zdCBwcm9qZWN0c0Ryb3Bib3g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdE9wdGlvbnMnKTtcblxuICAgIHByb2plY3RPcHRpb25zLmZvckVhY2gocHJvamVjdE9wdGlvbiA9PiBwcm9qZWN0c0Ryb3Bib3gucmVtb3ZlQ2hpbGQocHJvamVjdE9wdGlvbikpO1xufVxuXG5leHBvcnQge2FkZFRhc2tGb3JtfTtcbmV4cG9ydCB7cmVnaXN0ZXJOZXdUYXNrfTtcbmV4cG9ydCB7cmVtb3ZlQWRkVGFza0Zvcm19OyIsImZ1bmN0aW9uIGNsZWFyVGFza0xpc3QoKXtcbiAgICBjb25zdCB0YXNrRGlzcGxheT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5Jyk7XG4gICAgY29uc3QgdGFza0Rpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0RpdicpO1xuXG4gICAgaWYgKHRhc2tEaXYhPXVuZGVmaW5lZCkgXG4gICAgICAgIHsgdGFza0Rpc3BsYXkucmVtb3ZlQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICBjbGVhclRhc2tMaXN0KCl9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUG9wdXBGb3JtKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrRm9ybVwiKS5yZXNldCgpO1xufVxuXG5leHBvcnQge2NsZWFyVGFza0xpc3R9O1xuZXhwb3J0IHtjbGVhclBvcHVwRm9ybX07IiwiZnVuY3Rpb24gZGlzcGxheVByb2plY3RzTGlzdChsaXN0KXtcbiAgICBjb25zdCBzaWRlTWVudT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1tZW51Jyk7XG4gICAgY29uc3QgcHJvamVjdHNEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0RpdicpO1xuXG4gICAgZm9yKGxldCBpPTE7IGk8bGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamVjdE5hbWVCdG4udGV4dENvbnRlbnQ9YFxcdTIwMjIgJHtsaXN0W2ldfWA7XG5cbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVCdG4pO1xuICAgIH1cbiAgICBzaWRlTWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XG5cbiAgfVxuXG5leHBvcnQge2Rpc3BsYXlQcm9qZWN0c0xpc3R9OyIsImltcG9ydCByZWRmbGFnIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9yZWRmbGFnLnBuZyc7XG5pbXBvcnQgb3JhbmdlZmxhZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvb3JhbmdlZmxhZy5wbmcnO1xuaW1wb3J0IHllbGxvd2ZsYWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3llbGxvd2ZsYWcucG5nJztcbmltcG9ydCBiaW5JbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Jpbi5wbmcnO1xuaW1wb3J0IGRldGFpbHNJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2luZm9ybWF0aW9uLnBuZydcbmltcG9ydCBlZGl0SW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9lZGl0LnBuZyc7XG5pbXBvcnQgeyB0YXNrLCB0YXNrc0xpc3QgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tICcuL3JlbW92ZXRhc2snO1xuaW1wb3J0IHsgY2xlYXJUYXNrTGlzdCB9IGZyb20gJy4vY2xlYXJUYXNrTGlzdCc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhnaXZlblRhc2tzTGlzdCl7XG4gICAgZm9yKGxldCBpPTA7IGk8Z2l2ZW5UYXNrc0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCB0YXNrRGlzcGxheT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuXG4gICAgICAgIGNvbnN0IGZsYWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGZsYWcuY2xhc3NMaXN0LmFkZCgnZmxhZ0ltZycpO1xuICAgICAgICBzd2l0Y2goZ2l2ZW5UYXNrc0xpc3RbaV1bJ3ByaW9yaXR5J10pe1xuICAgICAgICAgICAgY2FzZSAnbG93JzpcbiAgICAgICAgICAgICAgICBmbGFnLnNldEF0dHJpYnV0ZSgnc3JjJywnYTc4ZDI2ZDRmNzZmNjU4ZjEyNDYucG5nJyk7XG4gICAgICAgICAgICAgICAgZmxhZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2xvdycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICAgICBmbGFnLnNldEF0dHJpYnV0ZSgnc3JjJywnNjJiNTU4NzVjMTU0MGUyYzY0MmYucG5nJyk7XG4gICAgICAgICAgICAgICAgZmxhZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ21lZGl1bScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmbGFnLnNldEF0dHJpYnV0ZSgnc3JjJywnNzIwNzAyMTk3ZjUxMzQzM2Q2YTYucG5nJyk7XG4gICAgICAgICAgICAgICAgZmxhZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2hpZ2gnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZmxhZyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrTmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudD1gJHtnaXZlblRhc2tzTGlzdFtpXVsndGl0bGUnXX1gO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudD1gJHtnaXZlblRhc2tzTGlzdFtpXVsncHJvamVjdCddfWA7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGR1ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBkdWUudGV4dENvbnRlbnQ9YCR7Z2l2ZW5UYXNrc0xpc3RbaV1bJ2R1ZSddfWA7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlKTtcblxuICAgICAgICBjb25zdCBkZXRhaWxzQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBkZXRhaWxzSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGV0YWlsc0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnNTU1N2Y5NWFiZGU5NmRlZjNmYTcucG5nJyk7XG4gICAgICAgIGRldGFpbHNJY29uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnU2VlIGRldGFpbHMnKTtcblxuICAgICAgICBkZXRhaWxzQnRuLmFwcGVuZENoaWxkKGRldGFpbHNJY29uKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzQnRuKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBlZGl0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnNmY2NDgxZGQ3ODNlNGM1ZDE5NGUucG5nJyk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnRWRpdCcpO1xuXG4gICAgICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICdkZTI5MjM1NzcxNjU0MTVlYzRjMC5wbmcnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0RlbGV0ZScpO1xuICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLGAke2l9YCk7XG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J0bicpO1xuXG4gICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT5cbiAgICAgICAgICAgIHtyZW1vdmVUYXNrKGUudGFyZ2V0LmlkLCBnaXZlblRhc2tzTGlzdCk7XG4gICAgICAgICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhnaXZlblRhc2tzTGlzdCl9KTtcblxuICAgICAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgfVxuICAgfVxuZXhwb3J0IHtkaXNwbGF5VGFza3N9OyIsImltcG9ydCB7dGFza3NMaXN0fSBmcm9tIFwiLi90YXNrc1wiO1xuXG5mdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tJZCwgdGFza3NMaXN0KXtcbiAgICB0YXNrc0xpc3Quc3BsaWNlKHRhc2tJZCwxKTsgICAgXG59XG5cbmV4cG9ydCB7cmVtb3ZlVGFza307IiwiZnVuY3Rpb24gdGFzayh0aXRsZSwgcHJvamVjdCwgZGVzY3JpcHRpb24sIGR1ZSwgcHJpb3JpdHkpe1xuICAgIHRoaXMudGl0bGU9dGl0bGUsXG4gICAgdGhpcy5wcm9qZWN0PXByb2plY3QsXG4gICAgdGhpcy5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbixcbiAgICB0aGlzLmR1ZT1kdWUsXG4gICAgdGhpcy5wcmlvcml0eT1wcmlvcml0eX1cblxubGV0IHRhc2tzTGlzdD1bXTtcblxuY29uc3QgdGFzazE9IG5ldyB0YXNrKCdWYWN1dW0gdGhlIHJvb21zJywgJy0nLCAnSSBoYXZlIHRvIHZhY3V1bSB0aGUgcm9vbXMnLCAnMTAvMTEvMjAyMicsICdsb3cnKSBcbnRhc2tzTGlzdC5wdXNoKHRhc2sxKTtcbmNvbnN0IHRhc2syPSBuZXcgdGFzaygnU3dlZXAgdGhlIGZsb29yJywgJy0nLCAnSSBoYXZlIHRvIHZhY3V1bSB0aGUgcm9vbXMnLCAnMTAvMTEvMjAyMicsICdtZWRpdW0nKSBcbnRhc2tzTGlzdC5wdXNoKHRhc2syKTtcbmNvbnN0IHRhc2szPSBuZXcgdGFzaygnTGVhcm4gY29kaW5nJywgJy0nLCAnSSBoYXZlIHRvIHZhY3V1bSB0aGUgcm9vbXMnLCAnMTAvMTEvMjAyMicsICdoaWdoJykgXG50YXNrc0xpc3QucHVzaCh0YXNrMyk7XG5cbmxldCBwcm9qZWN0c0xpc3Q9WyctJywnSG9tZScsICdXb3JrJywgJ1NlbGYtZGV2ZWxvcG1lbnQnXTtcblxuZXhwb3J0IHt0YXNrc0xpc3R9O1xuZXhwb3J0IHtwcm9qZWN0c0xpc3R9O1xuZXhwb3J0IHt0YXNrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3Byb2plY3RzTGlzdCwgdGFza3NMaXN0fSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7ZGlzcGxheVRhc2tzfSBmcm9tICcuL2Rpc3BsYXlUYXNrTGlzdC5qcyc7XG5pbXBvcnQge2FkZFRhc2tGb3JtfSBmcm9tICcuL2FkZFRhc2tGb3JtLmpzJztcbmltcG9ydCB7cmVnaXN0ZXJOZXdUYXNrfSBmcm9tICcuL2FkZFRhc2tGb3JtLmpzJztcbmltcG9ydCB7cmVtb3ZlQWRkVGFza0Zvcm19IGZyb20gJy4vYWRkVGFza0Zvcm0uanMnO1xuaW1wb3J0IHtjbGVhclRhc2tMaXN0fSBmcm9tICcuL2NsZWFyVGFza0xpc3QuanMnO1xuaW1wb3J0IHthZGRQcm9qZWN0fSBmcm9tICcuL2FkZFByb2plY3QuanMnO1xuaW1wb3J0IHtkaXNwbGF5UHJvamVjdHNMaXN0fSBmcm9tICcuL2Rpc3BsYXlQcm9qZWN0TGlzdC5qcydcblxuZGlzcGxheVRhc2tzKHRhc2tzTGlzdCk7XG5cbmNvbnN0IGFkZFRhc2tCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4gYWRkVGFza0Zvcm0oKSk7XG5cbmNvbnN0IHBvcHVwQWRkVGFza0J0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBBZGRUYXNrQnRuJyk7XG5wb3B1cEFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4gXG4gICAge3JlZ2lzdGVyTmV3VGFzaygpO1xuICAgIHJlbW92ZUFkZFRhc2tGb3JtKCk7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QpfSk7XG5cbmRpc3BsYXlQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcblxuY29uc3QgYWRkUHJvamVjdEJ0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiBhZGRQcm9qZWN0KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==