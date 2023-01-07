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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100vh;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n}\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 90%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 25%;\n    height:717px;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    padding:30px 70px 30px 70px;\n    margin-top: 30px;\n    height:85%;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-x:hidden;\n    overflow-y:auto;\n}\n\n.taskDiv, .taskListHead{\n    margin: 5px;\n    padding:5px;\n    border: 2px solid;\n    border-radius: 5px;\n    height:20px;\n    width:100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;\n    background-color: var(--hover-color);\n    align-content: center;\n    }\n\n.taskDiv>button{\n    justify-self: flex-end;\n    width: 30px;\n}\n.taskDiv>button>img{\n    height:20px;\n    width:auto;\n}\n\n.taskDiv>button:first-child{\n    border: 1px solid;\n    border-radius: 5px;\n    border-color: var(--header-color);\n    justify-self: flex-start;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    width: 80px;\n    font-size: 17px;\n}\n\n.Due{\n    background-color: rgb(214, 134, 134);\n}\n\n.Complete{\n    background-color: rgb(149, 240, 149);\n}\n\nh4{\n    margin:0;\n    margin-left: 5px;\n    padding:0;\n    color: black;\n    font-size: 20px;\n    font-weight: 500;\n    }\n\n.taskListHead{\n    background-color: var(--header-color);\n    font-weight: 700;\n}\n\n.taskListHead>h4{\n    border-right: none;\n    color: var(--lightest-color);\n}\n.flagImg{\n    width:20px;\n    height:20px;\n    padding-right: 50px;\n    margin-left:10px;\n    }\n\n.blurred{\n    filter: blur(5px);\n    pointer-events: none;\n    user-select:none;\n}\n\n#popup{\n    visibility: hidden;\n    opacity: 0;\n    position:fixed;\n    top:20%;\n    left:33%;\n    width:600px;\n    height:300px;\n    padding:50px;\n    box-shadow: 0 5px 30px rgba(0,0,0, .30);\n    background:var(--header-color);\n    color: var(--lightest-color);\n    border: 2px solid;\n    border-color: var(--hover-color);\n    border-radius: 5px;\n    }\n\n#popup.active{\n    visibility: visible;\n    opacity:1;\n    transition:0.5s;\n}\n\n#popup>h2{\n    font-size: 35px;\n    text-align: center;\n    margin-top: -10px;\n}\n\nform>div{\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 5px;\n    }\n\nlabel{\n    font-size: 20px;\n    font-weight: 550;\n    }\n\ninput, textarea, select{\n    border-radius: 5px;\n    font-size: 18px;\n}\n\n#popup button{\n    background-color: var(--hover-color);\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 550;\n    width: 120px;\n    height:auto;\n    display: flex;\n    justify-content: center;\n    border: 1px solid;\n}\n\nform>div:last-child{\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectsDiv{\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 85%;\n}\n\n.projectsDiv button{\n    font-size: 18px;\n    font-weight: 550;\n    line-height: 40px;\n    color: black;\n    border-radius: 5px;\n    margin: 0px;\n    }\n\n.projectsDiv li{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectsDiv img{\n    width: 15px;\n    height: auto;\n    margin:0px;\n}\n\n.projectsDiv button:hover{\n    background-color: var(--hover-color);\n}\n\n.projectsDiv input{\n   margin-left: 5px;\n   width:150px;\n}\n\n.deleteProjectBtn{\n    display: none;\n    margin-left: 30px;\n}\n\n.projectsDiv li:hover>.deleteProjectBtn{\n    display: block;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100vh;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n}\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 90%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 25%;\n    height:717px;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    padding:30px 70px 30px 70px;\n    margin-top: 30px;\n    height:85%;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-x:hidden;\n    overflow-y:auto;\n}\n\n.taskDiv, .taskListHead{\n    margin: 5px;\n    padding:5px;\n    border: 2px solid;\n    border-radius: 5px;\n    height:20px;\n    width:100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr;\n    background-color: var(--hover-color);\n    align-content: center;\n    }\n\n.taskDiv>button{\n    justify-self: flex-end;\n    width: 30px;\n}\n.taskDiv>button>img{\n    height:20px;\n    width:auto;\n}\n\n.taskDiv>button:first-child{\n    border: 1px solid;\n    border-radius: 5px;\n    border-color: var(--header-color);\n    justify-self: flex-start;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    width: 80px;\n    font-size: 17px;\n}\n\n.Due{\n    background-color: rgb(214, 134, 134);\n}\n\n.Complete{\n    background-color: rgb(149, 240, 149);\n}\n\nh4{\n    margin:0;\n    margin-left: 5px;\n    padding:0;\n    color: black;\n    font-size: 20px;\n    font-weight: 500;\n    }\n\n.taskListHead{\n    background-color: var(--header-color);\n    font-weight: 700;\n}\n\n.taskListHead>h4{\n    border-right: none;\n    color: var(--lightest-color);\n}\n.flagImg{\n    width:20px;\n    height:20px;\n    padding-right: 50px;\n    margin-left:10px;\n    }\n\n.blurred{\n    filter: blur(5px);\n    pointer-events: none;\n    user-select:none;\n}\n\n#popup{\n    visibility: hidden;\n    opacity: 0;\n    position:fixed;\n    top:20%;\n    left:33%;\n    width:600px;\n    height:300px;\n    padding:50px;\n    box-shadow: 0 5px 30px rgba(0,0,0, .30);\n    background:var(--header-color);\n    color: var(--lightest-color);\n    border: 2px solid;\n    border-color: var(--hover-color);\n    border-radius: 5px;\n    }\n\n#popup.active{\n    visibility: visible;\n    opacity:1;\n    transition:0.5s;\n}\n\n#popup>h2{\n    font-size: 35px;\n    text-align: center;\n    margin-top: -10px;\n}\n\nform>div{\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 5px;\n    }\n\nlabel{\n    font-size: 20px;\n    font-weight: 550;\n    }\n\ninput, textarea, select{\n    border-radius: 5px;\n    font-size: 18px;\n}\n\n#popup button{\n    background-color: var(--hover-color);\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 550;\n    width: 120px;\n    height:auto;\n    display: flex;\n    justify-content: center;\n    border: 1px solid;\n}\n\nform>div:last-child{\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectsDiv{\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 85%;\n}\n\n.projectsDiv button{\n    font-size: 18px;\n    font-weight: 550;\n    line-height: 40px;\n    color: black;\n    border-radius: 5px;\n    margin: 0px;\n    }\n\n.projectsDiv li{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectsDiv img{\n    width: 15px;\n    height: auto;\n    margin:0px;\n}\n\n.projectsDiv button:hover{\n    background-color: var(--hover-color);\n}\n\n.projectsDiv input{\n   margin-left: 5px;\n   width:150px;\n}\n\n.deleteProjectBtn{\n    display: none;\n    margin-left: 30px;\n}\n\n.projectsDiv li:hover>.deleteProjectBtn{\n    display: block;\n}"],"sourceRoot":""}]);
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

    const newTask=new _tasks__WEBPACK_IMPORTED_MODULE_0__.task(taskName, taskProject, taskDetails, taskDue, taskPriority, 'Due');
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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "displayProjectsList": () => (/* binding */ displayProjectsList)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _clearTaskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearTaskList.js */ "./src/clearTaskList.js");
/* harmony import */ var _displayTaskList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTaskList.js */ "./src/displayTaskList.js");







function displayProjectsList(list){
    const sideMenu=document.querySelector('.side-menu');
    const projectsDiv=document.createElement('ul');
    projectsDiv.classList.add('projectsDiv');

    for(let i=1; i<list.length; i++){
        const projectName=document.createElement('li');
        projectName.setAttribute('id', `${i}`);
                
        const projectNameBtn=document.createElement('button');
        projectNameBtn.textContent=`\u2022 ${list[i]}`;
        projectNameBtn.classList.add('projectName');

        projectName.appendChild(projectNameBtn);

        projectNameBtn.addEventListener('click', e => {
            (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_2__.clearTaskList)();
            (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter(task=> task.project === `${list[i]}`));
            })

        const deleteProjectBtn=document.createElement('button');
        deleteProjectBtn.classList.add('deleteProjectBtn');
        deleteProjectBtn.setAttribute('id', `${i}`);
        const deleteProjectIcon=document.createElement('img');
        deleteProjectIcon.setAttribute('src', 'de2923577165415ec4c0.png');
        deleteProjectIcon.setAttribute('id', `${i}`);
        
        deleteProjectBtn.appendChild(deleteProjectIcon);
        projectName.appendChild(deleteProjectBtn);

        projectsDiv.appendChild(projectName);

        deleteProjectBtn.addEventListener('click', e=> 
            { deleteProject(e.target.id);
              (0,_addProject__WEBPACK_IMPORTED_MODULE_0__.clearProjectsList)();
              displayProjectsList(_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList);
            });
    }
    sideMenu.appendChild(projectsDiv);
  }

function deleteProject(projectId){
     for(let i=0; i<_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.length; i++){
        if (_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList[i].project === _tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList[projectId]) _tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.splice(i,1);
     }
     (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_2__.clearTaskList)();
     (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList);
     _tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList.splice(projectId,1);
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

        const completeOrNot=document.createElement('button');
        completeOrNot.textContent=`${givenTasksList[i].status}`;
        completeOrNot.setAttribute('id', `${i}`)
        completeOrNot.classList.add(`${givenTasksList[i].status}`);

        completeOrNot.addEventListener('click', e=> {
            if (completeOrNot.textContent=='Due') {
                    completeOrNot.classList.add('Complete');
                    completeOrNot.classList.remove('Due');
                    completeOrNot.textContent='Complete';
                    givenTasksList[i].status='Complete';}
                else {
                    completeOrNot.classList.remove('Complete');
                    completeOrNot.classList.add('Due');
                    completeOrNot.textContent='Due';
                    givenTasksList[i].status='Due';}
            
        })

        taskDiv.appendChild(completeOrNot);

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
function task(title, project, description, due, priority, status){
    this.title=title,
    this.project=project,
    this.description=description,
    this.due=due,
    this.priority=priority,
    this.status=status}

let tasksList=[];

const task1= new task('Vacuum the rooms', 'Home', 'I have to vacuum the rooms', '2023-01-05', 'low', 'Due') 
tasksList.push(task1);
const task2= new task('Sweep the floor', 'Work', 'I have to vacuum the rooms', '2023-01-08', 'medium', 'Due') 
tasksList.push(task2);
const task3= new task('Learn coding', '-', 'I have to vacuum the rooms', '2023-01-06', 'high', 'Due') 
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

const allTasksBtn=document.getElementById('allTasksBtn');
allTasksBtn.addEventListener('click', e=> {
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__.clearTaskList)();
    (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList);
})

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

const todayTasksBtn=document.getElementById('todayTasks');
todayTasksBtn.addEventListener('click', e => {
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__.clearTaskList)();
    (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter(task=> (task.due === new Date().toISOString().slice(0, 10))&&(task.status == 'Due')));
})

const overdueTasksBtn=document.getElementById('overdueTasks');
overdueTasksBtn.addEventListener('click', e => {
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__.clearTaskList)();
    (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter(task=> (task.due < new Date().toISOString().slice(0, 10))&&(task.status == 'Due')));
})

const upcomingTasksBtn=document.getElementById('upcomingTasks');
upcomingTasksBtn.addEventListener('click', e => {
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__.clearTaskList)();
    let today=new Date();
    let theDayAfterTomorrow =  new Date();
    theDayAfterTomorrow.setDate(today.getDate() + 2);
    (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter(task=> (task.due >= today.toISOString().slice(0, 10))&&(task.due <= theDayAfterTomorrow.toISOString().slice(0, 10))&&(task.status == 'Due')));
})

const completedRecentlyTasksBtn=document.getElementById('completedRecentlyTasks');
completedRecentlyTasksBtn.addEventListener('click', e => {
    (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_4__.clearTaskList)();
    (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList.filter(task=> task.status == 'Complete'));
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxnREFBZ0QsMkNBQTJDLHdDQUF3Qyx5Q0FBeUMsR0FBRyxlQUFlLGlCQUFpQixtQkFBbUIsd0NBQXdDLEdBQUcsYUFBYSxvQkFBb0IsNkJBQTZCLGtDQUFrQywwQkFBMEIsOENBQThDLHdCQUF3QixpQkFBaUIsR0FBRyxZQUFZLG9CQUFvQixxQ0FBcUMsMEJBQTBCLDRDQUE0QyxtQkFBbUIsa0JBQWtCLE9BQU8sZ0JBQWdCLGtCQUFrQixrQkFBa0Isc0JBQXNCLHlCQUF5QixPQUFPLG1CQUFtQixpQkFBaUIsa0JBQWtCLEdBQUcsV0FBVyxvQ0FBb0Msa0JBQWtCLG1CQUFtQixpQkFBaUIsbUJBQW1CLGtDQUFrQywwQkFBMEIsT0FBTyxpQkFBaUIsa0JBQWtCLEdBQUcsVUFBVSxvQkFBb0Isa0NBQWtDLDhCQUE4QixrQkFBa0Isa0JBQWtCLGdDQUFnQyxHQUFHLGVBQWUsb0JBQW9CLDZCQUE2QixrQ0FBa0MsOEJBQThCLDhDQUE4Qyw4QkFBOEIsd0NBQXdDLGlCQUFpQixtQkFBbUIsaUNBQWlDLEdBQUcsa0NBQWtDLHlCQUF5QixRQUFRLDhDQUE4QywyQ0FBMkMsR0FBRyxPQUFPLHVCQUF1QixHQUFHLE9BQU8sdUJBQXVCLEdBQUcsbUNBQW1DLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsa0JBQWtCLEdBQUcsd0NBQXdDLDJDQUEyQyx1QkFBdUIsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQix3QkFBd0IseUJBQXlCLEdBQUcsVUFBVSxtQ0FBbUMsdUJBQXVCLEdBQUcsT0FBTyx1QkFBdUIsR0FBRyxPQUFPLHVCQUF1QixHQUFHLE9BQU8saUNBQWlDLGdCQUFnQixrQkFBa0IsR0FBRyxrQkFBa0Isa0NBQWtDLHVCQUF1QixpQkFBaUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDBCQUEwQix3QkFBd0Isc0JBQXNCLEdBQUcsNEJBQTRCLGtCQUFrQixrQkFBa0Isd0JBQXdCLHlCQUF5QixrQkFBa0IsaUJBQWlCLG9CQUFvQiw2REFBNkQsMkNBQTJDLDRCQUE0QixPQUFPLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEdBQUcsc0JBQXNCLGtCQUFrQixpQkFBaUIsR0FBRyxnQ0FBZ0Msd0JBQXdCLHlCQUF5Qix3Q0FBd0MsK0JBQStCLG9CQUFvQiw4QkFBOEIsNEJBQTRCLGtCQUFrQixzQkFBc0IsR0FBRyxTQUFTLDJDQUEyQyxHQUFHLGNBQWMsMkNBQTJDLEdBQUcsT0FBTyxlQUFlLHVCQUF1QixnQkFBZ0IsbUJBQW1CLHNCQUFzQix1QkFBdUIsT0FBTyxrQkFBa0IsNENBQTRDLHVCQUF1QixHQUFHLHFCQUFxQix5QkFBeUIsbUNBQW1DLEdBQUcsV0FBVyxpQkFBaUIsa0JBQWtCLDBCQUEwQix1QkFBdUIsT0FBTyxhQUFhLHdCQUF3QiwyQkFBMkIsdUJBQXVCLEdBQUcsV0FBVyx5QkFBeUIsaUJBQWlCLHFCQUFxQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQixtQkFBbUIsOENBQThDLHFDQUFxQyxtQ0FBbUMsd0JBQXdCLHVDQUF1Qyx5QkFBeUIsT0FBTyxrQkFBa0IsMEJBQTBCLGdCQUFnQixzQkFBc0IsR0FBRyxjQUFjLHNCQUFzQix5QkFBeUIsd0JBQXdCLEdBQUcsYUFBYSxtQkFBbUIscUNBQXFDLHlCQUF5QixPQUFPLFVBQVUsc0JBQXNCLHVCQUF1QixPQUFPLDRCQUE0Qix5QkFBeUIsc0JBQXNCLEdBQUcsa0JBQWtCLDJDQUEyQyxpQ0FBaUMseUJBQXlCLHNCQUFzQix1QkFBdUIsbUJBQW1CLGtCQUFrQixvQkFBb0IsOEJBQThCLHdCQUF3QixHQUFHLHdCQUF3Qix1QkFBdUIsb0JBQW9CLG9DQUFvQyxHQUFHLGlCQUFpQix3QkFBd0Isc0JBQXNCLGlCQUFpQixHQUFHLHdCQUF3QixzQkFBc0IsdUJBQXVCLHdCQUF3QixtQkFBbUIseUJBQXlCLGtCQUFrQixPQUFPLG9CQUFvQixvQkFBb0IscUNBQXFDLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsaUJBQWlCLEdBQUcsOEJBQThCLDJDQUEyQyxHQUFHLHVCQUF1QixzQkFBc0IsaUJBQWlCLEdBQUcsc0JBQXNCLG9CQUFvQix3QkFBd0IsR0FBRyw0Q0FBNEMscUJBQXFCLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsZ0NBQWdDLDJDQUEyQyx3Q0FBd0MseUNBQXlDLEdBQUcsZUFBZSxpQkFBaUIsbUJBQW1CLHdDQUF3QyxHQUFHLGFBQWEsb0JBQW9CLDZCQUE2QixrQ0FBa0MsMEJBQTBCLDhDQUE4Qyx3QkFBd0IsaUJBQWlCLEdBQUcsWUFBWSxvQkFBb0IscUNBQXFDLDBCQUEwQiw0Q0FBNEMsbUJBQW1CLGtCQUFrQixPQUFPLGdCQUFnQixrQkFBa0Isa0JBQWtCLHNCQUFzQix5QkFBeUIsT0FBTyxtQkFBbUIsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcsb0NBQW9DLGtCQUFrQixtQkFBbUIsaUJBQWlCLG1CQUFtQixrQ0FBa0MsMEJBQTBCLE9BQU8saUJBQWlCLGtCQUFrQixHQUFHLFVBQVUsb0JBQW9CLGtDQUFrQyw4QkFBOEIsa0JBQWtCLGtCQUFrQixnQ0FBZ0MsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDhCQUE4Qiw4Q0FBOEMsOEJBQThCLHdDQUF3QyxpQkFBaUIsbUJBQW1CLGlDQUFpQyxHQUFHLGtDQUFrQyx5QkFBeUIsUUFBUSw4Q0FBOEMsMkNBQTJDLEdBQUcsT0FBTyx1QkFBdUIsR0FBRyxPQUFPLHVCQUF1QixHQUFHLG1DQUFtQyxvQkFBb0IscUNBQXFDLDBCQUEwQixpQkFBaUIsc0JBQXNCLEdBQUcsbUJBQW1CLGlCQUFpQixrQkFBa0IsdUJBQXVCLGtCQUFrQixHQUFHLHdDQUF3QywyQ0FBMkMsdUJBQXVCLEdBQUcsd0JBQXdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLHlCQUF5QixHQUFHLFVBQVUsbUNBQW1DLHVCQUF1QixHQUFHLE9BQU8sdUJBQXVCLEdBQUcsT0FBTyx1QkFBdUIsR0FBRyxPQUFPLGlDQUFpQyxnQkFBZ0Isa0JBQWtCLEdBQUcsa0JBQWtCLGtDQUFrQyx1QkFBdUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsNkJBQTZCLGtDQUFrQywwQkFBMEIsd0JBQXdCLHNCQUFzQixHQUFHLDRCQUE0QixrQkFBa0Isa0JBQWtCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLGlCQUFpQixvQkFBb0IsNkRBQTZELDJDQUEyQyw0QkFBNEIsT0FBTyxvQkFBb0IsNkJBQTZCLGtCQUFrQixHQUFHLHNCQUFzQixrQkFBa0IsaUJBQWlCLEdBQUcsZ0NBQWdDLHdCQUF3Qix5QkFBeUIsd0NBQXdDLCtCQUErQixvQkFBb0IsOEJBQThCLDRCQUE0QixrQkFBa0Isc0JBQXNCLEdBQUcsU0FBUywyQ0FBMkMsR0FBRyxjQUFjLDJDQUEyQyxHQUFHLE9BQU8sZUFBZSx1QkFBdUIsZ0JBQWdCLG1CQUFtQixzQkFBc0IsdUJBQXVCLE9BQU8sa0JBQWtCLDRDQUE0Qyx1QkFBdUIsR0FBRyxxQkFBcUIseUJBQXlCLG1DQUFtQyxHQUFHLFdBQVcsaUJBQWlCLGtCQUFrQiwwQkFBMEIsdUJBQXVCLE9BQU8sYUFBYSx3QkFBd0IsMkJBQTJCLHVCQUF1QixHQUFHLFdBQVcseUJBQXlCLGlCQUFpQixxQkFBcUIsY0FBYyxlQUFlLGtCQUFrQixtQkFBbUIsbUJBQW1CLDhDQUE4QyxxQ0FBcUMsbUNBQW1DLHdCQUF3Qix1Q0FBdUMseUJBQXlCLE9BQU8sa0JBQWtCLDBCQUEwQixnQkFBZ0Isc0JBQXNCLEdBQUcsY0FBYyxzQkFBc0IseUJBQXlCLHdCQUF3QixHQUFHLGFBQWEsbUJBQW1CLHFDQUFxQyx5QkFBeUIsT0FBTyxVQUFVLHNCQUFzQix1QkFBdUIsT0FBTyw0QkFBNEIseUJBQXlCLHNCQUFzQixHQUFHLGtCQUFrQiwyQ0FBMkMsaUNBQWlDLHlCQUF5QixzQkFBc0IsdUJBQXVCLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4Qix3QkFBd0IsR0FBRyx3QkFBd0IsdUJBQXVCLG9CQUFvQixvQ0FBb0MsR0FBRyxpQkFBaUIsd0JBQXdCLHNCQUFzQixpQkFBaUIsR0FBRyx3QkFBd0Isc0JBQXNCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHlCQUF5QixrQkFBa0IsT0FBTyxvQkFBb0Isb0JBQW9CLHFDQUFxQyxHQUFHLHFCQUFxQixrQkFBa0IsbUJBQW1CLGlCQUFpQixHQUFHLDhCQUE4QiwyQ0FBMkMsR0FBRyx1QkFBdUIsc0JBQXNCLGlCQUFpQixHQUFHLHNCQUFzQixvQkFBb0Isd0JBQXdCLEdBQUcsNENBQTRDLHFCQUFxQixHQUFHLG1CQUFtQjtBQUM3dmM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyRDtBQUNwQjs7O0FBR3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQWlCO0FBQzdCO0FBQ0EsWUFBWSx3RUFBbUIsQ0FBQyxnREFBWTtBQUM1QyxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUI0QjtBQUNuQjtBQUNxQjs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUsdURBQW1CLEVBQUU7QUFDeEM7QUFDQSwrQ0FBK0MsZ0RBQVksSUFBSTtBQUMvRDtBQUNBLHFDQUFxQyxnREFBWSxJQUFJOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHdDQUFJO0FBQzFCLElBQUksa0RBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXFCO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYm1CO0FBQ0g7QUFDVztBQUNEO0FBQ0M7QUFDaEI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0EsMENBQTBDLEVBQUU7QUFDNUM7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEOztBQUVBOztBQUVBO0FBQ0EsWUFBWSxnRUFBYTtBQUN6QixZQUFZLGlFQUFZLENBQUMsb0RBQWdCLDRCQUE0QixRQUFRO0FBQzdFLGFBQWE7O0FBRWI7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7QUFDQSxnREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsY0FBYyw4REFBaUI7QUFDL0Isa0NBQWtDLGdEQUFZO0FBQzlDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsRUFBRSxvREFBZ0IsRUFBRTtBQUN0QyxZQUFZLDZDQUFTLGdCQUFnQixnREFBWSxhQUFhLG9EQUFnQjtBQUM5RTtBQUNBLEtBQUssZ0VBQWE7QUFDbEIsS0FBSyxpRUFBWSxDQUFDLDZDQUFTO0FBQzNCLEtBQUssdURBQW1CO0FBQ3hCOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRxQjtBQUNNO0FBQ0E7QUFDWDtBQUNXO0FBQ1Q7QUFDTDtBQUNBO0FBQ007O0FBRWhEO0FBQ0EsaUJBQWlCLHlCQUF5QjtBQUMxQztBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7O0FBRUE7QUFDQSxxQ0FBcUMseUJBQXlCO0FBQzlELDRDQUE0QyxFQUFFO0FBQzlDLHVDQUF1Qyx5QkFBeUI7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyQkFBMkI7QUFDM0Q7O0FBRUE7QUFDQSxtQ0FBbUMsNkJBQTZCO0FBQ2hFOztBQUVBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQzs7QUFFQTtBQUNBLGFBQWEsdURBQVU7QUFDdkIsYUFBYSw2REFBYTtBQUMxQiwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHa0M7O0FBRWxDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVtQjtBQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ0U7QUFDTDtBQUNJO0FBQ0U7QUFDRjtBQUNhO0FBQ0Y7O0FBRTVELGlFQUFZLENBQUMsNkNBQVM7O0FBRXRCO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLElBQUksaUVBQVksQ0FBQyw2Q0FBUztBQUMxQixDQUFDOztBQUVEO0FBQ0EseUNBQXlDLDREQUFXOztBQUVwRDtBQUNBO0FBQ0EsS0FBSyxnRUFBZTtBQUNwQixJQUFJLGtFQUFpQjtBQUNyQixJQUFJLGdFQUFhO0FBQ2pCLElBQUksaUVBQVksQ0FBQyw2Q0FBUyxFQUFFOztBQUU1QiwyRUFBbUIsQ0FBQyxnREFBWTs7QUFFaEM7QUFDQSw0Q0FBNEMsMERBQVU7O0FBRXREO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLElBQUksaUVBQVksQ0FBQyxvREFBZ0I7QUFDakMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxnRUFBYTtBQUNqQixJQUFJLGlFQUFZLENBQUMsb0RBQWdCO0FBQ2pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksZ0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBWSxDQUFDLG9EQUFnQjtBQUNqQyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLElBQUksaUVBQVksQ0FBQyxvREFBZ0I7QUFDakMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsZWFyVGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5UHJvamVjdExpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9yZW1vdmV0YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWxpZ2h0ZXN0LWNvbG9yOiByZ2IoMjI5LCAyNDEsIDI0MSk7XFxuICAgIC0taG92ZXItY29sb3I6IHJnYigyMDAsIDIyOCwgMjI4KTtcXG4gICAgLS1oZWFkZXItY29sb3I6IHJnYigxMjQsIDEwNCwgMTk2KTtcXG59XFxuXFxuYm9keSwgaHRtbHtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDY1LCA4NSk7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAzMHB4IDYwcHg7XFxuICAgIGhlaWdodDo5MCU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi5oZWFkZXIgaW1ne1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICB9XFxuXFxuLmhlYWRlcj5oMT5pbWd7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGhlaWdodDozMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY3Vyc29yOmdyYWI7XFxufVxcblxcbi5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGNvbG9yOnZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbi5zaWRlLW1lbnV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OjcxN3B4O1xcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcXG59XFxuXFxuLnNpZGUtbWVudT5kaXYsIC5zaWRlLW1lbnUgbGl7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgIH1cXG5cXG4uc2lkZS1tZW51PmRpdjpob3ZlciwgLnNpZGUtbWVudSBsaTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG51bHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxubGl7XFxuICAgIHBhZGRpbmctbGVmdDo1cHg7XFxufVxcblxcbi5hbGwtdGFza3MtbGluZSwgLnByb2plY3QtbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBtYXJnaW4tdG9wOjEwcHg7XFxufVxcblxcbi5zaWRlLW1lbnUgaW1ne1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcXG4gICAgcGFkZGluZzowcHg7XFxufVxcbiAgICBcXG4uc2lkZS1tZW51PmRpdj5idXR0b24+aW1nOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5hbGwtdGFza3MtbWVudSBpbWd7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6MTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbn1cXG4gICBcXG5oMXtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgbWFyZ2luLWxlZnQ6MTVweDtcXG59XFxuXFxuaDJ7XFxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcblxcbmgze1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5ocntcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIHdpZHRoOjk5JTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi50YXNrLWRpc3BsYXl7XFxuICAgIHBhZGRpbmc6MzBweCA3MHB4IDMwcHggNzBweDtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgaGVpZ2h0Ojg1JTtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbn1cXG5cXG4udGFza0RpdiwgLnRhc2tMaXN0SGVhZHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIHBhZGRpbmc6NXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDJmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbi50YXNrRGl2PmJ1dHRvbntcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcbi50YXNrRGl2PmJ1dHRvbj5pbWd7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDphdXRvO1xcbn1cXG5cXG4udGFza0Rpdj5idXR0b246Zmlyc3QtY2hpbGR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4uRHVle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAxMzQsIDEzNCk7XFxufVxcblxcbi5Db21wbGV0ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OSwgMjQwLCAxNDkpO1xcbn1cXG5cXG5oNHtcXG4gICAgbWFyZ2luOjA7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIH1cXG5cXG4udGFza0xpc3RIZWFke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udGFza0xpc3RIZWFkPmg0e1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxufVxcbi5mbGFnSW1ne1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcXG4gICAgfVxcblxcbi5ibHVycmVke1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHVzZXItc2VsZWN0Om5vbmU7XFxufVxcblxcbiNwb3B1cHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgdG9wOjIwJTtcXG4gICAgbGVmdDozMyU7XFxuICAgIHdpZHRoOjYwMHB4O1xcbiAgICBoZWlnaHQ6MzAwcHg7XFxuICAgIHBhZGRpbmc6NTBweDtcXG4gICAgYm94LXNoYWRvdzogMCA1cHggMzBweCByZ2JhKDAsMCwwLCAuMzApO1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB9XFxuXFxuI3BvcHVwLmFjdGl2ZXtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eToxO1xcbiAgICB0cmFuc2l0aW9uOjAuNXM7XFxufVxcblxcbiNwb3B1cD5oMntcXG4gICAgZm9udC1zaXplOiAzNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG5mb3JtPmRpdntcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgfVxcblxcbmxhYmVse1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIH1cXG5cXG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNwb3B1cCBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcblxcbmZvcm0+ZGl2Omxhc3QtY2hpbGR7XFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ucHJvamVjdHNEaXZ7XFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxuICAgIHdpZHRoOiA4NSU7XFxufVxcblxcbi5wcm9qZWN0c0RpdiBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgfVxcblxcbi5wcm9qZWN0c0RpdiBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgaW1ne1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW46MHB4O1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5wcm9qZWN0c0RpdiBpbnB1dHtcXG4gICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgIHdpZHRoOjE1MHB4O1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdEJ0bntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0c0RpdiBsaTpob3Zlcj4uZGVsZXRlUHJvamVjdEJ0bntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUNB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QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tbGlnaHRlc3QtY29sb3I6IHJnYigyMjksIDI0MSwgMjQxKTtcXG4gICAgLS1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjI4LCAyMjgpO1xcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDEyNCwgMTA0LCAxOTYpO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDg1KTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBtYXJnaW46IDMwcHggNjBweDtcXG4gICAgaGVpZ2h0OjkwJTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLmhlYWRlciBpbWd7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG5cXG4uaGVhZGVyPmgxPmltZ3tcXG4gICAgd2lkdGg6MzVweDtcXG4gICAgaGVpZ2h0OjMwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuYnV0dG9uOmhvdmVye1xcbiAgICBjdXJzb3I6Z3JhYjtcXG59XFxuXFxuLm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgY29sb3I6dmFyKC0taGVhZGVyLWNvbG9yKTtcXG59XFxuXFxuLnNpZGUtbWVudXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBoZWlnaHQ6NzE3cHg7XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5cXG4uc2lkZS1tZW51PmRpdiwgLnNpZGUtbWVudSBsaXtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgfVxcblxcbi5zaWRlLW1lbnU+ZGl2OmhvdmVyLCAuc2lkZS1tZW51IGxpOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbnVse1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5saXtcXG4gICAgcGFkZGluZy1sZWZ0OjVweDtcXG59XFxuXFxuLmFsbC10YXNrcy1saW5lLCAucHJvamVjdC1saW5le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIG1hcmdpbi10b3A6MTBweDtcXG59XFxuXFxuLnNpZGUtbWVudSBpbWd7XFxuICAgIHdpZHRoOjM1cHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xcbiAgICBwYWRkaW5nOjBweDtcXG59XFxuICAgIFxcbi5zaWRlLW1lbnU+ZGl2PmJ1dHRvbj5pbWc6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmFsbC10YXNrcy1tZW51IGltZ3tcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDoxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XFxufVxcbiAgIFxcbmgxe1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xcbn1cXG5cXG5oMntcXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuXFxuaDN7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmhye1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgd2lkdGg6OTklO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnRhc2stZGlzcGxheXtcXG4gICAgcGFkZGluZzozMHB4IDcwcHggMzBweCA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBoZWlnaHQ6ODUlO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xcbiAgICBvdmVyZmxvdy15OmF1dG87XFxufVxcblxcbi50YXNrRGl2LCAudGFza0xpc3RIZWFke1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgcGFkZGluZzo1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuLnRhc2tEaXY+YnV0dG9ue1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuLnRhc2tEaXY+YnV0dG9uPmltZ3tcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOmF1dG87XFxufVxcblxcbi50YXNrRGl2PmJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5EdWV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDEzNCwgMTM0KTtcXG59XFxuXFxuLkNvbXBsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ5LCAyNDAsIDE0OSk7XFxufVxcblxcbmg0e1xcbiAgICBtYXJnaW46MDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgfVxcblxcbi50YXNrTGlzdEhlYWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50YXNrTGlzdEhlYWQ+aDR7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG59XFxuLmZsYWdJbWd7XFxuICAgIHdpZHRoOjIwcHg7XFxuICAgIGhlaWdodDoyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xcbiAgICB9XFxuXFxuLmJsdXJyZWR7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcXG59XFxuXFxuI3BvcHVwe1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB0b3A6MjAlO1xcbiAgICBsZWZ0OjMzJTtcXG4gICAgd2lkdGg6NjAwcHg7XFxuICAgIGhlaWdodDozMDBweDtcXG4gICAgcGFkZGluZzo1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDVweCAzMHB4IHJnYmEoMCwwLDAsIC4zMCk7XFxuICAgIGJhY2tncm91bmQ6dmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG5cXG4jcG9wdXAuYWN0aXZle1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICBvcGFjaXR5OjE7XFxuICAgIHRyYW5zaXRpb246MC41cztcXG59XFxuXFxuI3BvcHVwPmgye1xcbiAgICBmb250LXNpemU6IDM1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcblxcbmZvcm0+ZGl2e1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICB9XFxuXFxubGFiZWx7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgfVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0e1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI3BvcHVwIGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuZm9ybT5kaXY6bGFzdC1jaGlsZHtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5wcm9qZWN0c0RpdntcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6YXV0bztcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuXFxuLnByb2plY3RzRGl2IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB9XFxuXFxuLnByb2plY3RzRGl2IGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcm9qZWN0c0RpdiBpbWd7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbjowcHg7XFxufVxcblxcbi5wcm9qZWN0c0RpdiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3RzRGl2IGlucHV0e1xcbiAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgd2lkdGg6MTUwcHg7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnRue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuXFxuLnByb2plY3RzRGl2IGxpOmhvdmVyPi5kZWxldGVQcm9qZWN0QnRue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGlzcGxheVByb2plY3RzTGlzdCB9IGZyb20gXCIuL2Rpc3BsYXlQcm9qZWN0TGlzdFwiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vdGFza3NcIjtcblxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XG4gICAgY29uc3QgcHJvamVjdHNEaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzRGl2Jyk7XG4gICAgY29uc3QgbGlzdEl0ZW09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQ9YFxcdTIwMjJgO1xuICAgIFxuICAgIGNvbnN0IGlucHV0TmV3UHJvamVjdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoaW5wdXROZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgICBpbnB1dE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3Q9aW5wdXROZXdQcm9qZWN0LnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdHNMaXN0LnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBjbGVhclByb2plY3RzTGlzdCgpO1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICAgIH19KVxufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RzTGlzdCgpe1xuICAgIGNvbnN0IHByb2plY3RzRGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0RpdicpO1xuXG4gICAgY29uc3Qgc2lkZU1lbnU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbWVudScpO1xuICAgIHNpZGVNZW51LnJlbW92ZUNoaWxkKHByb2plY3RzRGl2KTtcbn1cblxuZXhwb3J0IHthZGRQcm9qZWN0fTtcbmV4cG9ydCB7Y2xlYXJQcm9qZWN0c0xpc3R9OyIsImltcG9ydCB7cHJvamVjdHNMaXN0LCB0YXNrc0xpc3R9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHt0YXNrfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7Y2xlYXJQb3B1cEZvcm19IGZyb20gJy4vY2xlYXJUYXNrTGlzdC5qcyc7XG5cbmNvbnN0IGJhY2tncm91bmREaXNwbGF5PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBwb3B1cD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcblxuZnVuY3Rpb24gYWRkVGFza0Zvcm0oKXtcbiAgICBjb25zdCBwcm9qZWN0c0Ryb3Bib3g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICBmb3IobGV0IGk9MTsgaTxwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtwcm9qZWN0c0xpc3RbaV19YCk7XG4gICAgICAgIHByb2plY3RPcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdE9wdGlvbnMnKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudD1gJHtwcm9qZWN0c0xpc3RbaV19YDtcblxuICAgICAgICBwcm9qZWN0c0Ryb3Bib3guYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnYmx1cnJlZCcpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgY29uc3QgcmVtb3ZlQWRkVGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQWRkVGFza0J0bicpO1xuICAgIHJlbW92ZUFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT5yZW1vdmVBZGRUYXNrRm9ybSgpKTtcbiAgICB9XG5cbmZ1bmN0aW9uIHJlbW92ZUFkZFRhc2tGb3JtKCl7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgYmFja2dyb3VuZERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cnJlZCcpO1xuICAgIGNsZWFyUG9wdXBGb3JtKCk7XG4gICAgcmVpbml0aWF0ZVByb2plY3RMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTmV3VGFzaygpe1xuICAgIGNvbnN0IHRhc2tOYW1lPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRGV0YWlscz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXRhaWxzJykudmFsdWU7XG4gICAgY29uc3QgdGFza0R1ZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJvamVjdD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1Rhc2s9bmV3IHRhc2sodGFza05hbWUsIHRhc2tQcm9qZWN0LCB0YXNrRGV0YWlscywgdGFza0R1ZSwgdGFza1ByaW9yaXR5LCAnRHVlJyk7XG4gICAgdGFza3NMaXN0LnB1c2gobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlaW5pdGlhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IHByb2plY3RzRHJvcGJveD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RPcHRpb25zPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0T3B0aW9ucycpO1xuXG4gICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0T3B0aW9uID0+IHByb2plY3RzRHJvcGJveC5yZW1vdmVDaGlsZChwcm9qZWN0T3B0aW9uKSk7XG59XG5cbmV4cG9ydCB7YWRkVGFza0Zvcm19O1xuZXhwb3J0IHtyZWdpc3Rlck5ld1Rhc2t9O1xuZXhwb3J0IHtyZW1vdmVBZGRUYXNrRm9ybX07IiwiZnVuY3Rpb24gY2xlYXJUYXNrTGlzdCgpe1xuICAgIGNvbnN0IHRhc2tEaXNwbGF5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXknKTtcbiAgICBjb25zdCB0YXNrRGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGl2Jyk7XG5cbiAgICBpZiAodGFza0RpdiE9dW5kZWZpbmVkKSBcbiAgICAgICAgeyB0YXNrRGlzcGxheS5yZW1vdmVDaGlsZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIGNsZWFyVGFza0xpc3QoKX1cbn1cblxuZnVuY3Rpb24gY2xlYXJQb3B1cEZvcm0oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tGb3JtXCIpLnJlc2V0KCk7XG59XG5cbmV4cG9ydCB7Y2xlYXJUYXNrTGlzdH07XG5leHBvcnQge2NsZWFyUG9wdXBGb3JtfTsiLCJpbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vYWRkUHJvamVjdFwiO1xuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7Y2xlYXJQcm9qZWN0c0xpc3R9IGZyb20gXCIuL2FkZFByb2plY3QuanNcIjtcbmltcG9ydCB7Y2xlYXJUYXNrTGlzdH0gZnJvbSAnLi9jbGVhclRhc2tMaXN0LmpzJztcbmltcG9ydCB7ZGlzcGxheVRhc2tzfSBmcm9tICcuL2Rpc3BsYXlUYXNrTGlzdC5qcyc7XG5pbXBvcnQge3Rhc2tzTGlzdH0gZnJvbSAnLi90YXNrcyc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c0xpc3QobGlzdCl7XG4gICAgY29uc3Qgc2lkZU1lbnU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtbWVudScpO1xuICAgIGNvbnN0IHByb2plY3RzRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNEaXYnKTtcblxuICAgIGZvcihsZXQgaT0xOyBpPGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3ROYW1lQnRuLnRleHRDb250ZW50PWBcXHUyMDIyICR7bGlzdFtpXX1gO1xuICAgICAgICBwcm9qZWN0TmFtZUJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuXG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKHByb2plY3ROYW1lQnRuKTtcblxuICAgICAgICBwcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKHRhc2tzTGlzdC5maWx0ZXIodGFzaz0+IHRhc2sucHJvamVjdCA9PT0gYCR7bGlzdFtpXX1gKSk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdEJ0bicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnZGUyOTIzNTc3MTY1NDE1ZWM0YzAucG5nJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvbik7XG4gICAgICAgIHByb2plY3ROYW1lLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IFxuICAgICAgICAgICAgeyBkZWxldGVQcm9qZWN0KGUudGFyZ2V0LmlkKTtcbiAgICAgICAgICAgICAgY2xlYXJQcm9qZWN0c0xpc3QoKTtcbiAgICAgICAgICAgICAgZGlzcGxheVByb2plY3RzTGlzdChwcm9qZWN0c0xpc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHNpZGVNZW51LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbiAgfVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZCl7XG4gICAgIGZvcihsZXQgaT0wOyBpPHRhc2tzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmICh0YXNrc0xpc3RbaV0ucHJvamVjdCA9PT0gcHJvamVjdHNMaXN0W3Byb2plY3RJZF0pIHRhc2tzTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgfVxuICAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QpO1xuICAgICBwcm9qZWN0c0xpc3Quc3BsaWNlKHByb2plY3RJZCwxKTtcbiAgfVxuXG5leHBvcnQge2Rpc3BsYXlQcm9qZWN0c0xpc3R9O1xuZXhwb3J0IHtkZWxldGVQcm9qZWN0fTsiLCJpbXBvcnQgcmVkZmxhZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcmVkZmxhZy5wbmcnO1xuaW1wb3J0IG9yYW5nZWZsYWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL29yYW5nZWZsYWcucG5nJztcbmltcG9ydCB5ZWxsb3dmbGFnIGZyb20gJy4vYXNzZXRzL2ltYWdlcy95ZWxsb3dmbGFnLnBuZyc7XG5pbXBvcnQgYmluSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9iaW4ucG5nJztcbmltcG9ydCBkZXRhaWxzSW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9pbmZvcm1hdGlvbi5wbmcnXG5pbXBvcnQgZWRpdEltZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZWRpdC5wbmcnO1xuaW1wb3J0IHsgdGFzaywgdGFza3NMaXN0IH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQgeyByZW1vdmVUYXNrIH0gZnJvbSAnLi9yZW1vdmV0YXNrJztcbmltcG9ydCB7IGNsZWFyVGFza0xpc3QgfSBmcm9tICcuL2NsZWFyVGFza0xpc3QnO1xuXG5mdW5jdGlvbiBkaXNwbGF5VGFza3MoZ2l2ZW5UYXNrc0xpc3Qpe1xuICAgIGZvcihsZXQgaT0wOyBpPGdpdmVuVGFza3NMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgdGFza0Rpc3BsYXk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheScpO1xuICAgICAgICBjb25zdCB0YXNrRGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXYnKTtcblxuICAgICAgICBjb25zdCBjb21wbGV0ZU9yTm90PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb21wbGV0ZU9yTm90LnRleHRDb250ZW50PWAke2dpdmVuVGFza3NMaXN0W2ldLnN0YXR1c31gO1xuICAgICAgICBjb21wbGV0ZU9yTm90LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgICAgIGNvbXBsZXRlT3JOb3QuY2xhc3NMaXN0LmFkZChgJHtnaXZlblRhc2tzTGlzdFtpXS5zdGF0dXN9YCk7XG5cbiAgICAgICAgY29tcGxldGVPck5vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiB7XG4gICAgICAgICAgICBpZiAoY29tcGxldGVPck5vdC50ZXh0Q29udGVudD09J0R1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVPck5vdC5jbGFzc0xpc3QuYWRkKCdDb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LmNsYXNzTGlzdC5yZW1vdmUoJ0R1ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LnRleHRDb250ZW50PSdDb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGdpdmVuVGFza3NMaXN0W2ldLnN0YXR1cz0nQ29tcGxldGUnO31cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVPck5vdC5jbGFzc0xpc3QucmVtb3ZlKCdDb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LmNsYXNzTGlzdC5hZGQoJ0R1ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LnRleHRDb250ZW50PSdEdWUnO1xuICAgICAgICAgICAgICAgICAgICBnaXZlblRhc2tzTGlzdFtpXS5zdGF0dXM9J0R1ZSc7fVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZU9yTm90KTtcblxuICAgICAgICBjb25zdCBmbGFnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBmbGFnLmNsYXNzTGlzdC5hZGQoJ2ZsYWdJbWcnKTtcbiAgICAgICAgc3dpdGNoKGdpdmVuVGFza3NMaXN0W2ldWydwcmlvcml0eSddKXtcbiAgICAgICAgICAgIGNhc2UgJ2xvdyc6XG4gICAgICAgICAgICAgICAgZmxhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJ2E3OGQyNmQ0Zjc2ZjY1OGYxMjQ2LnBuZycpO1xuICAgICAgICAgICAgICAgIGZsYWcuc2V0QXR0cmlidXRlKCd0aXRsZScsICdsb3cnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgZmxhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJzYyYjU1ODc1YzE1NDBlMmM2NDJmLnBuZycpO1xuICAgICAgICAgICAgICAgIGZsYWcuc2V0QXR0cmlidXRlKCd0aXRsZScsICdtZWRpdW0nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmxhZy5zZXRBdHRyaWJ1dGUoJ3NyYycsJzcyMDcwMjE5N2Y1MTM0MzNkNmE2LnBuZycpO1xuICAgICAgICAgICAgICAgIGZsYWcuc2V0QXR0cmlidXRlKCd0aXRsZScsICdoaWdoJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGZsYWcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza05hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgdGFza05hbWUudGV4dENvbnRlbnQ9YCR7Z2l2ZW5UYXNrc0xpc3RbaV1bJ3RpdGxlJ119YDtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQ9YCR7Z2l2ZW5UYXNrc0xpc3RbaV1bJ3Byb2plY3QnXX1gO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICBjb25zdCBkdWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgZHVlLnRleHRDb250ZW50PWAke2dpdmVuVGFza3NMaXN0W2ldWydkdWUnXX1gO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICAgICAgY29uc3QgZGV0YWlsc0J0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGV0YWlsc0ljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRldGFpbHNJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJzU1NTdmOTVhYmRlOTZkZWYzZmE3LnBuZycpO1xuICAgICAgICBkZXRhaWxzSWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ1NlZSBkZXRhaWxzJyk7XG5cbiAgICAgICAgZGV0YWlsc0J0bi5hcHBlbmRDaGlsZChkZXRhaWxzSWNvbik7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGV0YWlsc0J0bik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZWRpdEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJzZmNjQ4MWRkNzgzZTRjNWQxOTRlLnBuZycpO1xuICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0VkaXQnKTtcblxuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnZGUyOTIzNTc3MTY1NDE1ZWM0YzAucG5nJyk7XG4gICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsICdEZWxldGUnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpfWApO1xuICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2tCdG4nKTtcblxuICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+XG4gICAgICAgICAgICB7cmVtb3ZlVGFzayhlLnRhcmdldC5pZCwgZ2l2ZW5UYXNrc0xpc3QpO1xuICAgICAgICAgICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICAgICAgICAgICBkaXNwbGF5VGFza3MoZ2l2ZW5UYXNrc0xpc3QpfSk7XG5cbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgdGFza0Rpc3BsYXkuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgIH1cbiAgIH1cbmV4cG9ydCB7ZGlzcGxheVRhc2tzfTsiLCJpbXBvcnQge3Rhc2tzTGlzdH0gZnJvbSBcIi4vdGFza3NcIjtcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrSWQsIHRhc2tzTGlzdCl7XG4gICAgdGFza3NMaXN0LnNwbGljZSh0YXNrSWQsMSk7ICAgIFxufVxuXG5leHBvcnQge3JlbW92ZVRhc2t9OyIsImZ1bmN0aW9uIHRhc2sodGl0bGUsIHByb2plY3QsIGRlc2NyaXB0aW9uLCBkdWUsIHByaW9yaXR5LCBzdGF0dXMpe1xuICAgIHRoaXMudGl0bGU9dGl0bGUsXG4gICAgdGhpcy5wcm9qZWN0PXByb2plY3QsXG4gICAgdGhpcy5kZXNjcmlwdGlvbj1kZXNjcmlwdGlvbixcbiAgICB0aGlzLmR1ZT1kdWUsXG4gICAgdGhpcy5wcmlvcml0eT1wcmlvcml0eSxcbiAgICB0aGlzLnN0YXR1cz1zdGF0dXN9XG5cbmxldCB0YXNrc0xpc3Q9W107XG5cbmNvbnN0IHRhc2sxPSBuZXcgdGFzaygnVmFjdXVtIHRoZSByb29tcycsICdIb21lJywgJ0kgaGF2ZSB0byB2YWN1dW0gdGhlIHJvb21zJywgJzIwMjMtMDEtMDUnLCAnbG93JywgJ0R1ZScpIFxudGFza3NMaXN0LnB1c2godGFzazEpO1xuY29uc3QgdGFzazI9IG5ldyB0YXNrKCdTd2VlcCB0aGUgZmxvb3InLCAnV29yaycsICdJIGhhdmUgdG8gdmFjdXVtIHRoZSByb29tcycsICcyMDIzLTAxLTA4JywgJ21lZGl1bScsICdEdWUnKSBcbnRhc2tzTGlzdC5wdXNoKHRhc2syKTtcbmNvbnN0IHRhc2szPSBuZXcgdGFzaygnTGVhcm4gY29kaW5nJywgJy0nLCAnSSBoYXZlIHRvIHZhY3V1bSB0aGUgcm9vbXMnLCAnMjAyMy0wMS0wNicsICdoaWdoJywgJ0R1ZScpIFxudGFza3NMaXN0LnB1c2godGFzazMpO1xuXG5sZXQgcHJvamVjdHNMaXN0PVsnLScsJ0hvbWUnLCAnV29yaycsICdTZWxmLWRldmVsb3BtZW50J107XG5cbmV4cG9ydCB7dGFza3NMaXN0fTtcbmV4cG9ydCB7cHJvamVjdHNMaXN0fTtcbmV4cG9ydCB7dGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtwcm9qZWN0c0xpc3QsIHRhc2tzTGlzdH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQge2Rpc3BsYXlUYXNrc30gZnJvbSAnLi9kaXNwbGF5VGFza0xpc3QuanMnO1xuaW1wb3J0IHthZGRUYXNrRm9ybX0gZnJvbSAnLi9hZGRUYXNrRm9ybS5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTmV3VGFza30gZnJvbSAnLi9hZGRUYXNrRm9ybS5qcyc7XG5pbXBvcnQge3JlbW92ZUFkZFRhc2tGb3JtfSBmcm9tICcuL2FkZFRhc2tGb3JtLmpzJztcbmltcG9ydCB7Y2xlYXJUYXNrTGlzdH0gZnJvbSAnLi9jbGVhclRhc2tMaXN0LmpzJztcbmltcG9ydCB7YWRkUHJvamVjdCwgY2xlYXJQcm9qZWN0c0xpc3R9IGZyb20gJy4vYWRkUHJvamVjdC5qcyc7XG5pbXBvcnQge2Rpc3BsYXlQcm9qZWN0c0xpc3R9IGZyb20gJy4vZGlzcGxheVByb2plY3RMaXN0LmpzJztcblxuZGlzcGxheVRhc2tzKHRhc2tzTGlzdCk7XG5cbmNvbnN0IGFsbFRhc2tzQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGxUYXNrc0J0bicpO1xuYWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4ge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBkaXNwbGF5VGFza3ModGFza3NMaXN0KTtcbn0pXG5cbmNvbnN0IGFkZFRhc2tCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZFRhc2tCdG4nKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4gYWRkVGFza0Zvcm0oKSk7XG5cbmNvbnN0IHBvcHVwQWRkVGFza0J0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBBZGRUYXNrQnRuJyk7XG5wb3B1cEFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT4gXG4gICAge3JlZ2lzdGVyTmV3VGFzaygpO1xuICAgIHJlbW92ZUFkZFRhc2tGb3JtKCk7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QpfSk7XG5cbmRpc3BsYXlQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcblxuY29uc3QgYWRkUHJvamVjdEJ0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiBhZGRQcm9qZWN0KCkpO1xuXG5jb25zdCB0b2RheVRhc2tzQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVRhc2tzJyk7XG50b2RheVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiAodGFzay5kdWUgPT09IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpJiYodGFzay5zdGF0dXMgPT0gJ0R1ZScpKSk7XG59KVxuXG5jb25zdCBvdmVyZHVlVGFza3NCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJkdWVUYXNrcycpO1xub3ZlcmR1ZVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiAodGFzay5kdWUgPCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSYmKHRhc2suc3RhdHVzID09ICdEdWUnKSkpO1xufSlcblxuY29uc3QgdXBjb21pbmdUYXNrc0J0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBjb21pbmdUYXNrcycpO1xudXBjb21pbmdUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBsZXQgdG9kYXk9bmV3IERhdGUoKTtcbiAgICBsZXQgdGhlRGF5QWZ0ZXJUb21vcnJvdyA9ICBuZXcgRGF0ZSgpO1xuICAgIHRoZURheUFmdGVyVG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAyKTtcbiAgICBkaXNwbGF5VGFza3ModGFza3NMaXN0LmZpbHRlcih0YXNrPT4gKHRhc2suZHVlID49IHRvZGF5LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSYmKHRhc2suZHVlIDw9IHRoZURheUFmdGVyVG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpJiYodGFzay5zdGF0dXMgPT0gJ0R1ZScpKSk7XG59KVxuXG5jb25zdCBjb21wbGV0ZWRSZWNlbnRseVRhc2tzQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWRSZWNlbnRseVRhc2tzJyk7XG5jb21wbGV0ZWRSZWNlbnRseVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiB0YXNrLnN0YXR1cyA9PSAnQ29tcGxldGUnKSk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==