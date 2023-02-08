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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100vh;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n  }\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 90%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 25%;\n    height:717px;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    padding:30px 70px 30px 70px;\n    margin-top: 30px;\n    height:85%;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-x:hidden;\n    overflow-y:auto;\n}\n\n.taskDiv, .taskListHead{\n    margin: 5px;\n    padding:5px;\n    border: 2px solid;\n    border-radius: 5px;\n    height:20px;\n    width:100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr 2fr 2fr 1fr 1fr 1fr;\n    background-color: var(--hover-color);\n    align-content: center;\n    }\n\n.taskDiv>button{\n    justify-self: flex-end;\n    width: 30px;\n}\n.taskDiv>button>img{\n    height:20px;\n    width:auto;\n}\n\n.taskDiv>button:first-child{\n    border: 1px solid;\n    border-radius: 5px;\n    border-color: var(--header-color);\n    justify-self: flex-start;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    width: 80px;\n    font-size: 17px;\n}\n\n.Due{\n    background-color: rgb(214, 134, 134);\n}\n\n.Complete{\n    background-color: rgb(149, 240, 149);\n}\n\nh4{\n    margin:0;\n    margin-left: 5px;\n    padding:0;\n    color: black;\n    font-size: 20px;\n    font-weight: 500;\n    }\n\n.taskListHead{\n    background-color: var(--header-color);\n    font-weight: 700;\n}\n\n.taskListHead>h4{\n    border-right: none;\n    color: var(--lightest-color);\n}\n.flagImg{\n    width:20px;\n    height:20px;\n    padding-right: 50px;\n    margin-left:10px;\n    }\n\n.blurred{\n    filter: blur(5px);\n    pointer-events: none;\n    user-select:none;\n}\n\n#popup{\n    visibility: hidden;\n    opacity: 0;\n    position:fixed;\n    top:20%;\n    left:33%;\n    width:600px;\n    height:300px;\n    padding:50px;\n    box-shadow: 0 5px 30px rgba(0,0,0, .30);\n    background:var(--header-color);\n    color: var(--lightest-color);\n    border: 2px solid;\n    border-color: var(--hover-color);\n    border-radius: 5px;\n    }\n\n#popup.active{\n    visibility: visible;\n    opacity:1;\n    transition:0.5s;\n}\n\n#popup>h2{\n    font-size: 35px;\n    text-align: center;\n    margin-top: -10px;\n}\n\nform>div{\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 5px;\n    }\n\nlabel{\n    font-size: 20px;\n    font-weight: 550;\n    }\n\ninput, textarea, select{\n    border-radius: 5px;\n    font-size: 18px;\n}\n\n#popup button{\n    background-color: var(--hover-color);\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 550;\n    width: 120px;\n    height:auto;\n    display: flex;\n    justify-content: center;\n    border: 1px solid;\n}\n\nform>div:last-child{\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectsDiv{\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 85%;\n}\n\n.projectsDiv button{\n    font-size: 18px;\n    font-weight: 550;\n    line-height: 40px;\n    color: black;\n    border-radius: 5px;\n    margin: 0px;\n    }\n\n.projectsDiv li{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectsDiv img{\n    width: 15px;\n    height: auto;\n    margin:0px;\n}\n\n.projectsDiv button:hover{\n    background-color: var(--hover-color);\n}\n\n.projectsDiv input{\n   margin-left: 5px;\n   width:150px;\n}\n\n.deleteProjectBtn{\n    display: none;\n    margin-left: 30px;\n}\n\n.projectsDiv li:hover>.deleteProjectBtn{\n    display: block;\n}\n\n#taskDetails{\n        visibility: hidden;\n        opacity: 0;\n        position:fixed;\n        top:40%;\n        left:40%;\n        width:400px;\n        height:100px;\n        padding:50px;\n        box-shadow: 0 5px 30px rgba(0,0,0, .30);\n        background:var(--header-color);\n        color: var(--lightest-color);\n        border: 2px solid;\n        border-color: var(--hover-color);\n        border-radius: 5px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: 18px;\n        }\n\n#taskDetails.active{\n        visibility: visible;\n        opacity:1;\n        transition:0.5s;\n        }\n\n#closeDetailsBtn{\n    color: var(--lightest-color);\n    font-size: 18px;\n    font-weight:600;\n    position: absolute;\n    top: 5%;\n    left: 95%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --lightest-color: rgb(229, 241, 241);\n    --hover-color: rgb(200, 228, 228);\n    --header-color: rgb(124, 104, 196);\n}\n\nbody, html{\n    margin:0px;\n    height:100vh;\n    background-color: rgb(65, 65, 85);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    background-color: var(--lightest-color);\n    margin: 30px 60px;\n    height:90%;\n  }\n\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--header-color);\n    height: 50px;\n    width: 100%;\n    }\n\n.header img{\n    width: 30px;\n    height:auto;\n    margin-top: 4px;\n    margin-right: 15px;\n    }\n\n.header>h1>img{\n    width:35px;\n    height:30px;\n}\n\nbutton{\n    background-color: transparent;\n    border:none;\n    padding: 0px;\n    margin:0px;\n    display:flex;\n    justify-content: flex-start;\n    align-items: center;\n    }\n\nbutton:hover{\n    cursor:grab;\n}\n\n.main{\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    width: 100%;\n    height: 90%;\n    color:var(--header-color);\n}\n\n.side-menu{\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    background-color: var(--lightest-color);\n    border-right: 2px solid;\n    border-color: var(--header-color);\n    width: 25%;\n    height:717px;\n    padding: 0px 10px 0px 10px;\n}\n\n.side-menu>div, .side-menu li{\n    border-radius: 5px;\n     }\n\n.side-menu>div:hover, .side-menu li:hover{\n    background-color: var(--hover-color);\n}\n\nul{\n    list-style: none;\n}\n\nli{\n    padding-left:5px;\n}\n\n.all-tasks-line, .project-line{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width:100%;\n    margin-top:10px;\n}\n\n.side-menu img{\n    width:35px;\n    height:auto;\n    margin-right:5px;\n    padding:0px;\n}\n    \n.side-menu>div>button>img:hover{\n    transform: rotate(360deg) scale(1.2);\n    transition: 0.5s;\n}\n\n.all-tasks-menu img{\n    width:20px;\n    height:20px;\n    margin-right:10px;\n    margin-bottom: 3px;\n}\n   \nh1{\n    color: var(--lightest-color);\n    margin-left:15px;\n}\n\nh2{\n    margin-left: 7px;\n}\n\nh3{\n    font-weight: 500;\n}\n\nhr{\n    color: var(--header-color);\n    width:99%;\n    margin: 0px;\n}\n\n.task-display{\n    padding:30px 70px 30px 70px;\n    margin-top: 30px;\n    height:85%;\n    width:100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    overflow-x:hidden;\n    overflow-y:auto;\n}\n\n.taskDiv, .taskListHead{\n    margin: 5px;\n    padding:5px;\n    border: 2px solid;\n    border-radius: 5px;\n    height:20px;\n    width:100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 2fr 2fr 2fr 1fr 1fr 1fr;\n    background-color: var(--hover-color);\n    align-content: center;\n    }\n\n.taskDiv>button{\n    justify-self: flex-end;\n    width: 30px;\n}\n.taskDiv>button>img{\n    height:20px;\n    width:auto;\n}\n\n.taskDiv>button:first-child{\n    border: 1px solid;\n    border-radius: 5px;\n    border-color: var(--header-color);\n    justify-self: flex-start;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    width: 80px;\n    font-size: 17px;\n}\n\n.Due{\n    background-color: rgb(214, 134, 134);\n}\n\n.Complete{\n    background-color: rgb(149, 240, 149);\n}\n\nh4{\n    margin:0;\n    margin-left: 5px;\n    padding:0;\n    color: black;\n    font-size: 20px;\n    font-weight: 500;\n    }\n\n.taskListHead{\n    background-color: var(--header-color);\n    font-weight: 700;\n}\n\n.taskListHead>h4{\n    border-right: none;\n    color: var(--lightest-color);\n}\n.flagImg{\n    width:20px;\n    height:20px;\n    padding-right: 50px;\n    margin-left:10px;\n    }\n\n.blurred{\n    filter: blur(5px);\n    pointer-events: none;\n    user-select:none;\n}\n\n#popup{\n    visibility: hidden;\n    opacity: 0;\n    position:fixed;\n    top:20%;\n    left:33%;\n    width:600px;\n    height:300px;\n    padding:50px;\n    box-shadow: 0 5px 30px rgba(0,0,0, .30);\n    background:var(--header-color);\n    color: var(--lightest-color);\n    border: 2px solid;\n    border-color: var(--hover-color);\n    border-radius: 5px;\n    }\n\n#popup.active{\n    visibility: visible;\n    opacity:1;\n    transition:0.5s;\n}\n\n#popup>h2{\n    font-size: 35px;\n    text-align: center;\n    margin-top: -10px;\n}\n\nform>div{\n    display:grid;\n    grid-template-columns: 1fr 2fr;\n    margin-bottom: 5px;\n    }\n\nlabel{\n    font-size: 20px;\n    font-weight: 550;\n    }\n\ninput, textarea, select{\n    border-radius: 5px;\n    font-size: 18px;\n}\n\n#popup button{\n    background-color: var(--hover-color);\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    font-size: 18px;\n    font-weight: 550;\n    width: 120px;\n    height:auto;\n    display: flex;\n    justify-content: center;\n    border: 1px solid;\n}\n\nform>div:last-child{\n    margin-top: 60px;\n    display: flex;\n    justify-content: space-around;\n}\n\n.projectsDiv{\n    overflow-x:hidden;\n    overflow-y:auto;\n    width: 85%;\n}\n\n.projectsDiv button{\n    font-size: 18px;\n    font-weight: 550;\n    line-height: 40px;\n    color: black;\n    border-radius: 5px;\n    margin: 0px;\n    }\n\n.projectsDiv li{\n    display: flex;\n    justify-content: space-between;\n}\n\n.projectsDiv img{\n    width: 15px;\n    height: auto;\n    margin:0px;\n}\n\n.projectsDiv button:hover{\n    background-color: var(--hover-color);\n}\n\n.projectsDiv input{\n   margin-left: 5px;\n   width:150px;\n}\n\n.deleteProjectBtn{\n    display: none;\n    margin-left: 30px;\n}\n\n.projectsDiv li:hover>.deleteProjectBtn{\n    display: block;\n}\n\n#taskDetails{\n        visibility: hidden;\n        opacity: 0;\n        position:fixed;\n        top:40%;\n        left:40%;\n        width:400px;\n        height:100px;\n        padding:50px;\n        box-shadow: 0 5px 30px rgba(0,0,0, .30);\n        background:var(--header-color);\n        color: var(--lightest-color);\n        border: 2px solid;\n        border-color: var(--hover-color);\n        border-radius: 5px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: 18px;\n        }\n\n#taskDetails.active{\n        visibility: visible;\n        opacity:1;\n        transition:0.5s;\n        }\n\n#closeDetailsBtn{\n    color: var(--lightest-color);\n    font-size: 18px;\n    font-weight:600;\n    position: absolute;\n    top: 5%;\n    left: 95%;\n}"],"sourceRoot":""}]);
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
            localStorage.removeItem('projectsList');
            localStorage.setItem('projectsList', JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList));
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
/* harmony export */   "removeAddTaskForm": () => (/* binding */ removeAddTaskForm),
/* harmony export */   "saveNewTask": () => (/* binding */ saveNewTask)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _clearTaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearTaskList.js */ "./src/clearTaskList.js");




const backgroundDisplay=document.getElementById('content');
const popup=document.getElementById('popup');

function addTaskForm(){
    const popupTitle=document.querySelector('#popup>h2');
    popupTitle.textContent='Add a new task';

    const saveTaskBtn=document.getElementById('popupAddTaskBtn');
    saveTaskBtn.textContent='Add task';

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

    localStorage.removeItem(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList);
    localStorage.setItem('tasksList', JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList));
   
}

function saveNewTask(id){
    const taskName=document.getElementById('task-name').value;
    const taskDetails=document.getElementById('task-details').value;
    const taskDue=document.getElementById('due-date').value;
    const taskProject=document.getElementById('project').value;
    const taskPriority=document.getElementById('priority').value;

    const newTask=new _tasks__WEBPACK_IMPORTED_MODULE_0__.task(taskName, taskProject, taskDetails, taskDue, taskPriority, 'Due');
    _tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList.splice(id, 1, newTask);

    localStorage.removeItem(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList);
    localStorage.setItem('tasksList', JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList));
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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _addProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject.js */ "./src/addProject.js");
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
            (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList.filter(task=> task.project === `${list[i]}`));
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
              (0,_addProject_js__WEBPACK_IMPORTED_MODULE_1__.clearProjectsList)();
              displayProjectsList(_tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList);
              localStorage.removeItem('projectsList');
              localStorage.setItem('projectsList', JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList));
            });
    }
    sideMenu.appendChild(projectsDiv);
  }

function deleteProject(projectId){
     for(let i=0; i<_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList.length; i++){
        if (_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList[i].project === _tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectId]) _tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList.splice(i,1);
     }
     (0,_clearTaskList_js__WEBPACK_IMPORTED_MODULE_2__.clearTaskList)();
     (0,_displayTaskList_js__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(_tasks__WEBPACK_IMPORTED_MODULE_0__.tasksList);
     _tasks__WEBPACK_IMPORTED_MODULE_0__.projectsList.splice(projectId,1);
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
/* harmony import */ var _editTaskForm_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editTaskForm.js */ "./src/editTaskForm.js");
/* harmony import */ var _addTaskForm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./addTaskForm.js */ "./src/addTaskForm.js");












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
                    givenTasksList[i].status='Complete';
                    localStorage.removeItem('tasksList');
                    localStorage.setItem('tasksList', JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_6__.tasksList));
                }
                else {
                    completeOrNot.classList.remove('Complete');
                    completeOrNot.classList.add('Due');
                    completeOrNot.textContent='Due';
                    givenTasksList[i].status='Due';
                    localStorage.removeItem('tasksList');
                    localStorage.setItem('tasksList', JSON.stringify(_tasks__WEBPACK_IMPORTED_MODULE_6__.tasksList));}
            
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
        detailsBtn.setAttribute('id', `${i}`);
        detailsIcon.setAttribute('id', `${i}`);
        detailsIcon.setAttribute('src', '5557f95abde96def3fa7.png');
        detailsIcon.setAttribute('title', 'See details');

        detailsBtn.appendChild(detailsIcon);
        taskDiv.appendChild(detailsBtn);

        detailsBtn.addEventListener('click', e=>
            {const details=document.createElement('p');
            details.textContent=`${_tasks__WEBPACK_IMPORTED_MODULE_6__.tasksList[e.target.id]['description']}`
              
            const taskDetails=document.getElementById('taskDetails');
            taskDetails.classList.add('active');

            taskDetails.appendChild(details);

            const backgroundDisplay=document.getElementById('content');
            backgroundDisplay.classList.add('blurred');
            })

        const editBtn=document.createElement('button');
        const editIcon=document.createElement('img');
        editBtn.setAttribute('id', `${i}`);
        editIcon.setAttribute('id', `${i}`);
        editIcon.setAttribute('src', '6f6481dd783e4c5d194e.png');
        editIcon.setAttribute('title', 'Edit');

        editBtn.appendChild(editIcon);
        taskDiv.appendChild(editBtn);

        editBtn.addEventListener('click', e=>{
            const backgroundDisplay=document.getElementById('content');
            const popup=document.getElementById('popup');

            backgroundDisplay.classList.add('blurred');
            popup.classList.add('active');
            
            (0,_editTaskForm_js__WEBPACK_IMPORTED_MODULE_9__.editTaskForm)(e.target.id);

            const removeAddTaskBtn=document.querySelector('.cancelAddTaskBtn');
            removeAddTaskBtn.addEventListener('click', e=>(0,_addTaskForm_js__WEBPACK_IMPORTED_MODULE_10__.removeAddTaskForm)());
        })

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

/***/ "./src/editTaskForm.js":
/*!*****************************!*\
  !*** ./src/editTaskForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editTaskForm": () => (/* binding */ editTaskForm)
/* harmony export */ });
/* harmony import */ var _addTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskForm */ "./src/addTaskForm.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");


const popup=document.getElementById('popup');

function editTaskForm(id){
    const popupTitle=document.querySelector('#popup>h2');
    popupTitle.textContent='Edit the task';

    const taskName=document.getElementById('task-name');
    taskName.value=`${_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList[id]['title']}`

    const taskDetails=document.getElementById('task-details');
    taskDetails.value=`${_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList[id]['description']}`;

    const taskDue=document.getElementById('due-date');
    taskDue.value=`${_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList[id]['due']}`;

    const projectsDropbox=document.getElementById('project');
    for(let i=1; i<_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList.length; i++){
        const projectOption=document.createElement('option');
        projectOption.setAttribute('value', `${_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList[i]}`);
        if (_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList[i]==_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList[id]['project']) projectOption.setAttribute('selected', 'selected');
        projectOption.classList.add('projectOptions');
        projectOption.textContent=`${_tasks__WEBPACK_IMPORTED_MODULE_1__.projectsList[i]}`;
        projectsDropbox.appendChild(projectOption);
    }

    const taskPriority=document.getElementById('priority');
    taskPriority.value=`${_tasks__WEBPACK_IMPORTED_MODULE_1__.tasksList[id]['priority']}`;

    const saveTaskBtn=document.getElementById('popupAddTaskBtn');
    saveTaskBtn.textContent='Save task';
    saveTaskBtn.setAttribute('data-index', `${id}`);
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

function removeTask(taskId, tasksList){
    tasksList.splice(taskId,1); 
    localStorage.removeItem('tasksList');
    localStorage.setItem('tasksList', JSON.stringify(tasksList));   
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

let tasksList=JSON.parse(localStorage.getItem('tasksList'));
if (tasksList === null) tasksList=[];

let projectsList=JSON.parse(localStorage.getItem('projectsList'));
if (projectsList === null) projectsList=[];





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
    {   if (e.target.textContent == 'Add task') (0,_addTaskForm_js__WEBPACK_IMPORTED_MODULE_3__.registerNewTask)();
            else (0,_addTaskForm_js__WEBPACK_IMPORTED_MODULE_3__.saveNewTask)(e.target.dataset.index);
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

const closeDetailsBtn=document.getElementById('closeDetailsBtn');
closeDetailsBtn.addEventListener('click', e=> {
    const taskDetails=document.getElementById('taskDetails');
    taskDetails.classList.remove('active');

    const backgroundDisplay=document.getElementById('content');
    backgroundDisplay.classList.remove('blurred');

    const details=document.querySelector('p');
    taskDetails.removeChild(details);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlB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cEQ7QUFDQTtBQUNBLFFBQVEsd0NBQXdDLGdFQUFlO0FBQy9ELGlCQUFpQiw0REFBVztBQUM1QixRQUFRLGtFQUFpQjtBQUN6QixRQUFRLGdFQUFhO0FBQ3JCLFFBQVEsaUVBQVksQ0FBQyw2Q0FBUyxFQUFFOztBQUVoQywyRUFBbUIsQ0FBQyxnREFBWTs7QUFFaEM7QUFDQSw0Q0FBNEMsMERBQVU7O0FBRXREO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLElBQUksaUVBQVksQ0FBQyxvREFBZ0I7QUFDakMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxnRUFBYTtBQUNqQixJQUFJLGlFQUFZLENBQUMsb0RBQWdCO0FBQ2pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksZ0VBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpRUFBWSxDQUFDLG9EQUFnQjtBQUNqQyxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLGdFQUFhO0FBQ2pCLElBQUksaUVBQVksQ0FBQyxvREFBZ0I7QUFDakMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xlYXJUYXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlQcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2VkaXRUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3JlbW92ZXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tbGlnaHRlc3QtY29sb3I6IHJnYigyMjksIDI0MSwgMjQxKTtcXG4gICAgLS1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjI4LCAyMjgpO1xcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDEyNCwgMTA0LCAxOTYpO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDg1KTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBtYXJnaW46IDMwcHggNjBweDtcXG4gICAgaGVpZ2h0OjkwJTtcXG4gIH1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4uaGVhZGVyIGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgfVxcblxcbi5oZWFkZXI+aDE+aW1ne1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBoZWlnaHQ6MzBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjpncmFiO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG4uc2lkZS1tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDo3MTdweDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxufVxcblxcbi5zaWRlLW1lbnU+ZGl2LCAuc2lkZS1tZW51IGxpe1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICB9XFxuXFxuLnNpZGUtbWVudT5kaXY6aG92ZXIsIC5zaWRlLW1lbnUgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxudWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpe1xcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbn1cXG5cXG4uYWxsLXRhc2tzLWxpbmUsIC5wcm9qZWN0LWxpbmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IGltZ3tcXG4gICAgd2lkdGg6MzVweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbn1cXG4gICAgXFxuLnNpZGUtbWVudT5kaXY+YnV0dG9uPmltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uYWxsLXRhc2tzLW1lbnUgaW1ne1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuICAgXFxuaDF7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XFxufVxcblxcbmgye1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG5oM3tcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaHJ7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICB3aWR0aDo5OSU7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5e1xcbiAgICBwYWRkaW5nOjMwcHggNzBweCAzMHB4IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGhlaWdodDo4NSU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6YXV0bztcXG59XFxuXFxuLnRhc2tEaXYsIC50YXNrTGlzdEhlYWR7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnIgMmZyIDJmciAxZnIgMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4udGFza0Rpdj5idXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG4udGFza0Rpdj5idXR0b24+aW1ne1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6YXV0bztcXG59XFxuXFxuLnRhc2tEaXY+YnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLkR1ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTM0LCAxMzQpO1xcbn1cXG5cXG4uQ29tcGxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDI0MCwgMTQ5KTtcXG59XFxuXFxuaDR7XFxuICAgIG1hcmdpbjowO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuXFxuLnRhc2tMaXN0SGVhZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2tMaXN0SGVhZD5oNHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbn1cXG4uZmxhZ0ltZ3tcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XFxuICAgIH1cXG5cXG4uYmx1cnJlZHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDpub25lO1xcbn1cXG5cXG4jcG9wdXB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHRvcDoyMCU7XFxuICAgIGxlZnQ6MzMlO1xcbiAgICB3aWR0aDo2MDBweDtcXG4gICAgaGVpZ2h0OjMwMHB4O1xcbiAgICBwYWRkaW5nOjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLDAsMCwgLjMwKTtcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcblxcbiNwb3B1cC5hY3RpdmV7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6MTtcXG4gICAgdHJhbnNpdGlvbjowLjVzO1xcbn1cXG5cXG4jcG9wdXA+aDJ7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuZm9ybT5kaXZ7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG5cXG5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICB9XFxuXFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jcG9wdXAgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG5mb3JtPmRpdjpsYXN0LWNoaWxke1xcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3RzRGl2e1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIH1cXG5cXG4ucHJvamVjdHNEaXYgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RzRGl2IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLnByb2plY3RzRGl2IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgaW5wdXR7XFxuICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICB3aWR0aDoxNTBweDtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgbGk6aG92ZXI+LmRlbGV0ZVByb2plY3RCdG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdGFza0RldGFpbHN7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgICAgICB0b3A6NDAlO1xcbiAgICAgICAgbGVmdDo0MCU7XFxuICAgICAgICB3aWR0aDo0MDBweDtcXG4gICAgICAgIGhlaWdodDoxMDBweDtcXG4gICAgICAgIHBhZGRpbmc6NTBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLDAsMCwgLjMwKTtcXG4gICAgICAgIGJhY2tncm91bmQ6dmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIH1cXG5cXG4jdGFza0RldGFpbHMuYWN0aXZle1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIG9wYWNpdHk6MTtcXG4gICAgICAgIHRyYW5zaXRpb246MC41cztcXG4gICAgICAgIH1cXG5cXG4jY2xvc2VEZXRhaWxzQnRue1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiA5NSU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztBQUVGO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0lBQ1g7O0FB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QixTQUFTO1FBQ1QsZUFBZTtRQUNmOztBQUVSO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tbGlnaHRlc3QtY29sb3I6IHJnYigyMjksIDI0MSwgMjQxKTtcXG4gICAgLS1ob3Zlci1jb2xvcjogcmdiKDIwMCwgMjI4LCAyMjgpO1xcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDEyNCwgMTA0LCAxOTYpO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtYXJnaW46MHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNjUsIDg1KTtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBtYXJnaW46IDMwcHggNjBweDtcXG4gICAgaGVpZ2h0OjkwJTtcXG4gIH1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4uaGVhZGVyIGltZ3tcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDphdXRvO1xcbiAgICBtYXJnaW4tdG9wOiA0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgfVxcblxcbi5oZWFkZXI+aDE+aW1ne1xcbiAgICB3aWR0aDozNXB4O1xcbiAgICBoZWlnaHQ6MzBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgbWFyZ2luOjBweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG5idXR0b246aG92ZXJ7XFxuICAgIGN1cnNvcjpncmFiO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICBjb2xvcjp2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG4uc2lkZS1tZW51e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGhlaWdodDo3MTdweDtcXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XFxufVxcblxcbi5zaWRlLW1lbnU+ZGl2LCAuc2lkZS1tZW51IGxpe1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICB9XFxuXFxuLnNpZGUtbWVudT5kaXY6aG92ZXIsIC5zaWRlLW1lbnUgbGk6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxudWx7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmxpe1xcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xcbn1cXG5cXG4uYWxsLXRhc2tzLWxpbmUsIC5wcm9qZWN0LWxpbmV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xcbn1cXG5cXG4uc2lkZS1tZW51IGltZ3tcXG4gICAgd2lkdGg6MzVweDtcXG4gICAgaGVpZ2h0OmF1dG87XFxuICAgIG1hcmdpbi1yaWdodDo1cHg7XFxuICAgIHBhZGRpbmc6MHB4O1xcbn1cXG4gICAgXFxuLnNpZGUtbWVudT5kaXY+YnV0dG9uPmltZzpob3ZlcntcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uYWxsLXRhc2tzLW1lbnUgaW1ne1xcbiAgICB3aWR0aDoyMHB4O1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OjEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcXG59XFxuICAgXFxuaDF7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XFxufVxcblxcbmgye1xcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xcbn1cXG5cXG5oM3tcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaHJ7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICB3aWR0aDo5OSU7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4udGFzay1kaXNwbGF5e1xcbiAgICBwYWRkaW5nOjMwcHggNzBweCAzMHB4IDcwcHg7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIGhlaWdodDo4NSU7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6YXV0bztcXG59XFxuXFxuLnRhc2tEaXYsIC50YXNrTGlzdEhlYWR7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBwYWRkaW5nOjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyZnIgMmZyIDJmciAxZnIgMWZyIDFmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4udGFza0Rpdj5idXR0b257XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG4udGFza0Rpdj5idXR0b24+aW1ne1xcbiAgICBoZWlnaHQ6MjBweDtcXG4gICAgd2lkdGg6YXV0bztcXG59XFxuXFxuLnRhc2tEaXY+YnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLkR1ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMTM0LCAxMzQpO1xcbn1cXG5cXG4uQ29tcGxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDksIDI0MCwgMTQ5KTtcXG59XFxuXFxuaDR7XFxuICAgIG1hcmdpbjowO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICB9XFxuXFxuLnRhc2tMaXN0SGVhZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnRhc2tMaXN0SGVhZD5oNHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbn1cXG4uZmxhZ0ltZ3tcXG4gICAgd2lkdGg6MjBweDtcXG4gICAgaGVpZ2h0OjIwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XFxuICAgIH1cXG5cXG4uYmx1cnJlZHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB1c2VyLXNlbGVjdDpub25lO1xcbn1cXG5cXG4jcG9wdXB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHRvcDoyMCU7XFxuICAgIGxlZnQ6MzMlO1xcbiAgICB3aWR0aDo2MDBweDtcXG4gICAgaGVpZ2h0OjMwMHB4O1xcbiAgICBwYWRkaW5nOjUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLDAsMCwgLjMwKTtcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcblxcbiNwb3B1cC5hY3RpdmV7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6MTtcXG4gICAgdHJhbnNpdGlvbjowLjVzO1xcbn1cXG5cXG4jcG9wdXA+aDJ7XFxuICAgIGZvbnQtc2l6ZTogMzVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuZm9ybT5kaXZ7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIH1cXG5cXG5sYWJlbHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNTUwO1xcbiAgICB9XFxuXFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jcG9wdXAgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBoZWlnaHQ6YXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG5mb3JtPmRpdjpsYXN0LWNoaWxke1xcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnByb2plY3RzRGl2e1xcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbiAgICB3aWR0aDogODUlO1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIH1cXG5cXG4ucHJvamVjdHNEaXYgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3RzRGl2IGltZ3tcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWFyZ2luOjBweDtcXG59XFxuXFxuLnByb2plY3RzRGl2IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgaW5wdXR7XFxuICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICB3aWR0aDoxNTBweDtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3RCdG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHNEaXYgbGk6aG92ZXI+LmRlbGV0ZVByb2plY3RCdG57XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jdGFza0RldGFpbHN7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgICAgICB0b3A6NDAlO1xcbiAgICAgICAgbGVmdDo0MCU7XFxuICAgICAgICB3aWR0aDo0MDBweDtcXG4gICAgICAgIGhlaWdodDoxMDBweDtcXG4gICAgICAgIHBhZGRpbmc6NTBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB4IDMwcHggcmdiYSgwLDAsMCwgLjMwKTtcXG4gICAgICAgIGJhY2tncm91bmQ6dmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1jb2xvcik7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIH1cXG5cXG4jdGFza0RldGFpbHMuYWN0aXZle1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIG9wYWNpdHk6MTtcXG4gICAgICAgIHRyYW5zaXRpb246MC41cztcXG4gICAgICAgIH1cXG5cXG4jY2xvc2VEZXRhaWxzQnRue1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3QtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiA5NSU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpc3BsYXlQcm9qZWN0c0xpc3QgfSBmcm9tIFwiLi9kaXNwbGF5UHJvamVjdExpc3RcIjtcbmltcG9ydCB7IHByb2plY3RzTGlzdCB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xuICAgIGNvbnN0IHByb2plY3RzRGl2PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0RpdicpO1xuICAgIGNvbnN0IGxpc3RJdGVtPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50PWBcXHUyMDIyYDtcbiAgICBcbiAgICBjb25zdCBpbnB1dE5ld1Byb2plY3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGlucHV0TmV3UHJvamVjdCk7XG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4gICAgaW5wdXROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0PWlucHV0TmV3UHJvamVjdC52YWx1ZTtcbiAgICAgICAgICAgIHByb2plY3RzTGlzdC5wdXNoKG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzTGlzdCcpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xuICAgICAgICAgICAgY2xlYXJQcm9qZWN0c0xpc3QoKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgICB9fSlcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0c0xpc3QoKXtcbiAgICBjb25zdCBwcm9qZWN0c0Rpdj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNEaXYnKTtcblxuICAgIGNvbnN0IHNpZGVNZW51PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW1lbnUnKTtcbiAgICBzaWRlTWVudS5yZW1vdmVDaGlsZChwcm9qZWN0c0Rpdik7XG59XG5cbmV4cG9ydCB7YWRkUHJvamVjdH07XG5leHBvcnQge2NsZWFyUHJvamVjdHNMaXN0fTsiLCJpbXBvcnQge3Byb2plY3RzTGlzdCwgdGFza3NMaXN0fSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7dGFza30gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQge2NsZWFyUG9wdXBGb3JtfSBmcm9tICcuL2NsZWFyVGFza0xpc3QuanMnO1xuXG5jb25zdCBiYWNrZ3JvdW5kRGlzcGxheT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgcG9wdXA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwJyk7XG5cbmZ1bmN0aW9uIGFkZFRhc2tGb3JtKCl7XG4gICAgY29uc3QgcG9wdXBUaXRsZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdXA+aDInKTtcbiAgICBwb3B1cFRpdGxlLnRleHRDb250ZW50PSdBZGQgYSBuZXcgdGFzayc7XG5cbiAgICBjb25zdCBzYXZlVGFza0J0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBBZGRUYXNrQnRuJyk7XG4gICAgc2F2ZVRhc2tCdG4udGV4dENvbnRlbnQ9J0FkZCB0YXNrJztcblxuICAgIGNvbnN0IHByb2plY3RzRHJvcGJveD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIGZvcihsZXQgaT0xOyBpPHByb2plY3RzTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Byb2plY3RzTGlzdFtpXX1gKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0T3B0aW9ucycpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50PWAke3Byb2plY3RzTGlzdFtpXX1gO1xuXG4gICAgICAgIHByb2plY3RzRHJvcGJveC5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdibHVycmVkJyk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICBjb25zdCByZW1vdmVBZGRUYXNrQnRuPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxBZGRUYXNrQnRuJyk7XG4gICAgcmVtb3ZlQWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PnJlbW92ZUFkZFRhc2tGb3JtKCkpO1xuICAgIH1cblxuZnVuY3Rpb24gcmVtb3ZlQWRkVGFza0Zvcm0oKXtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBiYWNrZ3JvdW5kRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdibHVycmVkJyk7XG4gICAgY2xlYXJQb3B1cEZvcm0oKTtcbiAgICByZWluaXRpYXRlUHJvamVjdExpc3QoKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJOZXdUYXNrKCl7XG4gICAgY29uc3QgdGFza05hbWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEZXRhaWxzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRldGFpbHMnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VGFzaz1uZXcgdGFzayh0YXNrTmFtZSwgdGFza1Byb2plY3QsIHRhc2tEZXRhaWxzLCB0YXNrRHVlLCB0YXNrUHJpb3JpdHksICdEdWUnKTtcbiAgICB0YXNrc0xpc3QucHVzaChuZXdUYXNrKTtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRhc2tzTGlzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tzTGlzdCkpO1xuICAgXG59XG5cbmZ1bmN0aW9uIHNhdmVOZXdUYXNrKGlkKXtcbiAgICBjb25zdCB0YXNrTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJykudmFsdWU7XG4gICAgY29uc3QgdGFza0RldGFpbHM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGV0YWlscycpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEdWU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZS1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgdGFza1Byb2plY3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG5cbiAgICBjb25zdCBuZXdUYXNrPW5ldyB0YXNrKHRhc2tOYW1lLCB0YXNrUHJvamVjdCwgdGFza0RldGFpbHMsIHRhc2tEdWUsIHRhc2tQcmlvcml0eSwgJ0R1ZScpO1xuICAgIHRhc2tzTGlzdC5zcGxpY2UoaWQsIDEsIG5ld1Rhc2spO1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGFza3NMaXN0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NMaXN0JywgSlNPTi5zdHJpbmdpZnkodGFza3NMaXN0KSk7XG59XG5cbmZ1bmN0aW9uIHJlaW5pdGlhdGVQcm9qZWN0TGlzdCgpe1xuICAgIGNvbnN0IHByb2plY3RzRHJvcGJveD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RPcHRpb25zPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0T3B0aW9ucycpO1xuXG4gICAgcHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0T3B0aW9uID0+IHByb2plY3RzRHJvcGJveC5yZW1vdmVDaGlsZChwcm9qZWN0T3B0aW9uKSk7XG59XG5cbmV4cG9ydCB7YWRkVGFza0Zvcm19O1xuZXhwb3J0IHtyZWdpc3Rlck5ld1Rhc2t9O1xuZXhwb3J0IHtyZW1vdmVBZGRUYXNrRm9ybX07XG5leHBvcnQge3NhdmVOZXdUYXNrfTsiLCJmdW5jdGlvbiBjbGVhclRhc2tMaXN0KCl7XG4gICAgY29uc3QgdGFza0Rpc3BsYXk9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGlzcGxheScpO1xuICAgIGNvbnN0IHRhc2tEaXY9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEaXYnKTtcblxuICAgIGlmICh0YXNrRGl2IT11bmRlZmluZWQpIFxuICAgICAgICB7IHRhc2tEaXNwbGF5LnJlbW92ZUNoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgY2xlYXJUYXNrTGlzdCgpfVxufVxuXG5mdW5jdGlvbiBjbGVhclBvcHVwRm9ybSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0Zvcm1cIikucmVzZXQoKTtcbn1cblxuZXhwb3J0IHtjbGVhclRhc2tMaXN0fTtcbmV4cG9ydCB7Y2xlYXJQb3B1cEZvcm19OyIsImltcG9ydCB7IHByb2plY3RzTGlzdCB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQge2NsZWFyUHJvamVjdHNMaXN0fSBmcm9tIFwiLi9hZGRQcm9qZWN0LmpzXCI7XG5pbXBvcnQge2NsZWFyVGFza0xpc3R9IGZyb20gJy4vY2xlYXJUYXNrTGlzdC5qcyc7XG5pbXBvcnQge2Rpc3BsYXlUYXNrc30gZnJvbSAnLi9kaXNwbGF5VGFza0xpc3QuanMnO1xuaW1wb3J0IHt0YXNrc0xpc3R9IGZyb20gJy4vdGFza3MnO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNMaXN0KGxpc3Qpe1xuICAgIGNvbnN0IHNpZGVNZW51PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW1lbnUnKTtcbiAgICBjb25zdCBwcm9qZWN0c0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzRGl2Jyk7XG5cbiAgICBmb3IobGV0IGk9MTsgaTxsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lQnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBwcm9qZWN0TmFtZUJ0bi50ZXh0Q29udGVudD1gXFx1MjAyMiAke2xpc3RbaV19YDtcbiAgICAgICAgcHJvamVjdE5hbWVCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcblxuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUJ0bik7XG5cbiAgICAgICAgcHJvamVjdE5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiB0YXNrLnByb2plY3QgPT09IGAke2xpc3RbaV19YCkpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3RCdG4nKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEljb249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGRlbGV0ZVByb2plY3RJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2RlMjkyMzU3NzE2NTQxNWVjNGMwLnBuZycpO1xuICAgICAgICBkZWxldGVQcm9qZWN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEljb24pO1xuICAgICAgICBwcm9qZWN0TmFtZS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcblxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiBcbiAgICAgICAgICAgIHsgZGVsZXRlUHJvamVjdChlLnRhcmdldC5pZCk7XG4gICAgICAgICAgICAgIGNsZWFyUHJvamVjdHNMaXN0KCk7XG4gICAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzTGlzdCcpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgc2lkZU1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xuICB9XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKXtcbiAgICAgZm9yKGxldCBpPTA7IGk8dGFza3NMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYgKHRhc2tzTGlzdFtpXS5wcm9qZWN0ID09PSBwcm9qZWN0c0xpc3RbcHJvamVjdElkXSkgdGFza3NMaXN0LnNwbGljZShpLDEpO1xuICAgICB9XG4gICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICAgZGlzcGxheVRhc2tzKHRhc2tzTGlzdCk7XG4gICAgIHByb2plY3RzTGlzdC5zcGxpY2UocHJvamVjdElkLDEpO1xuICB9XG5cbmV4cG9ydCB7ZGlzcGxheVByb2plY3RzTGlzdH07XG5leHBvcnQge2RlbGV0ZVByb2plY3R9OyIsImltcG9ydCByZWRmbGFnIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9yZWRmbGFnLnBuZyc7XG5pbXBvcnQgb3JhbmdlZmxhZyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvb3JhbmdlZmxhZy5wbmcnO1xuaW1wb3J0IHllbGxvd2ZsYWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3llbGxvd2ZsYWcucG5nJztcbmltcG9ydCBiaW5JbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2Jpbi5wbmcnO1xuaW1wb3J0IGRldGFpbHNJbWcgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL2luZm9ybWF0aW9uLnBuZydcbmltcG9ydCBlZGl0SW1nIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9lZGl0LnBuZyc7XG5pbXBvcnQgeyB0YXNrc0xpc3QgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHJlbW92ZVRhc2sgfSBmcm9tICcuL3JlbW92ZXRhc2snO1xuaW1wb3J0IHsgY2xlYXJUYXNrTGlzdCB9IGZyb20gJy4vY2xlYXJUYXNrTGlzdCc7XG5pbXBvcnQge2VkaXRUYXNrRm9ybX0gZnJvbSAnLi9lZGl0VGFza0Zvcm0uanMnO1xuaW1wb3J0IHtyZW1vdmVBZGRUYXNrRm9ybX0gZnJvbSAnLi9hZGRUYXNrRm9ybS5qcyc7XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhnaXZlblRhc2tzTGlzdCl7XG4gICAgZm9yKGxldCBpPTA7IGk8Z2l2ZW5UYXNrc0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCB0YXNrRGlzcGxheT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5Jyk7XG4gICAgICAgIGNvbnN0IHRhc2tEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza0RpdicpO1xuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlT3JOb3Q9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbXBsZXRlT3JOb3QudGV4dENvbnRlbnQ9YCR7Z2l2ZW5UYXNrc0xpc3RbaV0uc3RhdHVzfWA7XG4gICAgICAgIGNvbXBsZXRlT3JOb3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YClcbiAgICAgICAgY29tcGxldGVPck5vdC5jbGFzc0xpc3QuYWRkKGAke2dpdmVuVGFza3NMaXN0W2ldLnN0YXR1c31gKTtcblxuICAgICAgICBjb21wbGV0ZU9yTm90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IHtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZU9yTm90LnRleHRDb250ZW50PT0nRHVlJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LmNsYXNzTGlzdC5hZGQoJ0NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlT3JOb3QuY2xhc3NMaXN0LnJlbW92ZSgnRHVlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlT3JOb3QudGV4dENvbnRlbnQ9J0NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICAgICAgZ2l2ZW5UYXNrc0xpc3RbaV0uc3RhdHVzPSdDb21wbGV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrc0xpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tzTGlzdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVPck5vdC5jbGFzc0xpc3QucmVtb3ZlKCdDb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LmNsYXNzTGlzdC5hZGQoJ0R1ZScpO1xuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZU9yTm90LnRleHRDb250ZW50PSdEdWUnO1xuICAgICAgICAgICAgICAgICAgICBnaXZlblRhc2tzTGlzdFtpXS5zdGF0dXM9J0R1ZSc7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrc0xpc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRhc2tzTGlzdCkpO31cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVPck5vdCk7XG5cbiAgICAgICAgY29uc3QgZmxhZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZmxhZy5jbGFzc0xpc3QuYWRkKCdmbGFnSW1nJyk7XG4gICAgICAgIHN3aXRjaChnaXZlblRhc2tzTGlzdFtpXVsncHJpb3JpdHknXSl7XG4gICAgICAgICAgICBjYXNlICdsb3cnOlxuICAgICAgICAgICAgICAgIGZsYWcuc2V0QXR0cmlidXRlKCdzcmMnLCdhNzhkMjZkNGY3NmY2NThmMTI0Ni5wbmcnKTtcbiAgICAgICAgICAgICAgICBmbGFnLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnbG93Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgICAgIGZsYWcuc2V0QXR0cmlidXRlKCdzcmMnLCc2MmI1NTg3NWMxNTQwZTJjNjQyZi5wbmcnKTtcbiAgICAgICAgICAgICAgICBmbGFnLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZsYWcuc2V0QXR0cmlidXRlKCdzcmMnLCc3MjA3MDIxOTdmNTEzNDMzZDZhNi5wbmcnKTtcbiAgICAgICAgICAgICAgICBmbGFnLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnaGlnaCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChmbGFnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50PWAke2dpdmVuVGFza3NMaXN0W2ldWyd0aXRsZSddfWA7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50PWAke2dpdmVuVGFza3NMaXN0W2ldWydwcm9qZWN0J119YDtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgZHVlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGR1ZS50ZXh0Q29udGVudD1gJHtnaXZlblRhc2tzTGlzdFtpXVsnZHVlJ119YDtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkdWUpO1xuXG4gICAgICAgIGNvbnN0IGRldGFpbHNCdG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGRldGFpbHNJY29uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBkZXRhaWxzQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBkZXRhaWxzSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgZGV0YWlsc0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnNTU1N2Y5NWFiZGU5NmRlZjNmYTcucG5nJyk7XG4gICAgICAgIGRldGFpbHNJY29uLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnU2VlIGRldGFpbHMnKTtcblxuICAgICAgICBkZXRhaWxzQnRuLmFwcGVuZENoaWxkKGRldGFpbHNJY29uKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzQnRuKTtcblxuICAgICAgICBkZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+XG4gICAgICAgICAgICB7Y29uc3QgZGV0YWlscz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBkZXRhaWxzLnRleHRDb250ZW50PWAke3Rhc2tzTGlzdFtlLnRhcmdldC5pZF1bJ2Rlc2NyaXB0aW9uJ119YFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXRhaWxzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGV0YWlscycpO1xuICAgICAgICAgICAgdGFza0RldGFpbHMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuXG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kRGlzcGxheT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnYmx1cnJlZCcpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBlZGl0QnRuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCBlZGl0SWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJzZmNjQ4MWRkNzgzZTRjNWQxOTRlLnBuZycpO1xuICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0VkaXQnKTtcblxuICAgICAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcblxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+e1xuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZERpc3BsYXk9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdibHVycmVkJyk7XG4gICAgICAgICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZWRpdFRhc2tGb3JtKGUudGFyZ2V0LmlkKTtcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQWRkVGFza0J0bj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsQWRkVGFza0J0bicpO1xuICAgICAgICAgICAgcmVtb3ZlQWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PnJlbW92ZUFkZFRhc2tGb3JtKCkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0bj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlSWNvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICdkZTI5MjM1NzcxNjU0MTVlYzRjMC5wbmcnKTtcbiAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ0RlbGV0ZScpO1xuICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLGAke2l9YCk7XG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza0J0bicpO1xuXG4gICAgICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT5cbiAgICAgICAgICAgIHtyZW1vdmVUYXNrKGUudGFyZ2V0LmlkLCBnaXZlblRhc2tzTGlzdCk7XG4gICAgICAgICAgICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgICAgICAgICAgIGRpc3BsYXlUYXNrcyhnaXZlblRhc2tzTGlzdCl9KTtcblxuICAgICAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICB0YXNrRGlzcGxheS5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgfVxuICAgfVxuZXhwb3J0IHtkaXNwbGF5VGFza3N9OyIsImltcG9ydCB7IHNhdmVOZXdUYXNrIH0gZnJvbSBcIi4vYWRkVGFza0Zvcm1cIjtcbmltcG9ydCB7IHByb2plY3RzTGlzdCwgdGFza3NMaXN0IH0gZnJvbSBcIi4vdGFza3NcIjtcbmNvbnN0IHBvcHVwPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xuXG5mdW5jdGlvbiBlZGl0VGFza0Zvcm0oaWQpe1xuICAgIGNvbnN0IHBvcHVwVGl0bGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwPmgyJyk7XG4gICAgcG9wdXBUaXRsZS50ZXh0Q29udGVudD0nRWRpdCB0aGUgdGFzayc7XG5cbiAgICBjb25zdCB0YXNrTmFtZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJyk7XG4gICAgdGFza05hbWUudmFsdWU9YCR7dGFza3NMaXN0W2lkXVsndGl0bGUnXX1gXG5cbiAgICBjb25zdCB0YXNrRGV0YWlscz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXRhaWxzJyk7XG4gICAgdGFza0RldGFpbHMudmFsdWU9YCR7dGFza3NMaXN0W2lkXVsnZGVzY3JpcHRpb24nXX1gO1xuXG4gICAgY29uc3QgdGFza0R1ZT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUnKTtcbiAgICB0YXNrRHVlLnZhbHVlPWAke3Rhc2tzTGlzdFtpZF1bJ2R1ZSddfWA7XG5cbiAgICBjb25zdCBwcm9qZWN0c0Ryb3Bib3g9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICBmb3IobGV0IGk9MTsgaTxwcm9qZWN0c0xpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtwcm9qZWN0c0xpc3RbaV19YCk7XG4gICAgICAgIGlmIChwcm9qZWN0c0xpc3RbaV09PXRhc2tzTGlzdFtpZF1bJ3Byb2plY3QnXSkgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgIHByb2plY3RPcHRpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdE9wdGlvbnMnKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0Q29udGVudD1gJHtwcm9qZWN0c0xpc3RbaV19YDtcbiAgICAgICAgcHJvamVjdHNEcm9wYm94LmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbiAgICB0YXNrUHJpb3JpdHkudmFsdWU9YCR7dGFza3NMaXN0W2lkXVsncHJpb3JpdHknXX1gO1xuXG4gICAgY29uc3Qgc2F2ZVRhc2tCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQWRkVGFza0J0bicpO1xuICAgIHNhdmVUYXNrQnRuLnRleHRDb250ZW50PSdTYXZlIHRhc2snO1xuICAgIHNhdmVUYXNrQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGAke2lkfWApO1xufVxuXG5leHBvcnQge2VkaXRUYXNrRm9ybX07IiwiXG5mdW5jdGlvbiByZW1vdmVUYXNrKHRhc2tJZCwgdGFza3NMaXN0KXtcbiAgICB0YXNrc0xpc3Quc3BsaWNlKHRhc2tJZCwxKTsgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rhc2tzTGlzdCcpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0YXNrc0xpc3QpKTsgICBcbn1cblxuZXhwb3J0IHtyZW1vdmVUYXNrfTsiLCJmdW5jdGlvbiB0YXNrKHRpdGxlLCBwcm9qZWN0LCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSwgc3RhdHVzKXtcbiAgICB0aGlzLnRpdGxlPXRpdGxlLFxuICAgIHRoaXMucHJvamVjdD1wcm9qZWN0LFxuICAgIHRoaXMuZGVzY3JpcHRpb249ZGVzY3JpcHRpb24sXG4gICAgdGhpcy5kdWU9ZHVlLFxuICAgIHRoaXMucHJpb3JpdHk9cHJpb3JpdHksXG4gICAgdGhpcy5zdGF0dXM9c3RhdHVzfVxuXG5sZXQgdGFza3NMaXN0PUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzTGlzdCcpKTtcbmlmICh0YXNrc0xpc3QgPT09IG51bGwpIHRhc2tzTGlzdD1bXTtcblxubGV0IHByb2plY3RzTGlzdD1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSk7XG5pZiAocHJvamVjdHNMaXN0ID09PSBudWxsKSBwcm9qZWN0c0xpc3Q9W107XG5cbmV4cG9ydCB7dGFza3NMaXN0fTtcbmV4cG9ydCB7cHJvamVjdHNMaXN0fTtcbmV4cG9ydCB7dGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtwcm9qZWN0c0xpc3QsIHRhc2tzTGlzdH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQge2Rpc3BsYXlUYXNrc30gZnJvbSAnLi9kaXNwbGF5VGFza0xpc3QuanMnO1xuaW1wb3J0IHthZGRUYXNrRm9ybX0gZnJvbSAnLi9hZGRUYXNrRm9ybS5qcyc7XG5pbXBvcnQge3JlZ2lzdGVyTmV3VGFzaywgc2F2ZU5ld1Rhc2t9IGZyb20gJy4vYWRkVGFza0Zvcm0uanMnO1xuaW1wb3J0IHtyZW1vdmVBZGRUYXNrRm9ybX0gZnJvbSAnLi9hZGRUYXNrRm9ybS5qcyc7XG5pbXBvcnQge2NsZWFyVGFza0xpc3R9IGZyb20gJy4vY2xlYXJUYXNrTGlzdC5qcyc7XG5pbXBvcnQge2FkZFByb2plY3QsIGNsZWFyUHJvamVjdHNMaXN0fSBmcm9tICcuL2FkZFByb2plY3QuanMnO1xuaW1wb3J0IHtkaXNwbGF5UHJvamVjdHNMaXN0fSBmcm9tICcuL2Rpc3BsYXlQcm9qZWN0TGlzdC5qcyc7XG5cbmRpc3BsYXlUYXNrcyh0YXNrc0xpc3QpO1xuXG5jb25zdCBhbGxUYXNrc0J0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsVGFza3NCdG4nKTtcbmFsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IHtcbiAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgZGlzcGxheVRhc2tzKHRhc2tzTGlzdCk7XG59KVxuXG5jb25zdCBhZGRUYXNrQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnRuJyk7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IGFkZFRhc2tGb3JtKCkpO1xuXG5jb25zdCBwb3B1cEFkZFRhc2tCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwQWRkVGFza0J0bicpO1xucG9wdXBBZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IFxuICAgIHsgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT0gJ0FkZCB0YXNrJykgcmVnaXN0ZXJOZXdUYXNrKCk7XG4gICAgICAgICAgICBlbHNlIHNhdmVOZXdUYXNrKGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICByZW1vdmVBZGRUYXNrRm9ybSgpO1xuICAgICAgICBjbGVhclRhc2tMaXN0KCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QpfSk7XG5cbmRpc3BsYXlQcm9qZWN0c0xpc3QocHJvamVjdHNMaXN0KTtcblxuY29uc3QgYWRkUHJvamVjdEJ0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdEJ0bicpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGU9PiBhZGRQcm9qZWN0KCkpO1xuXG5jb25zdCB0b2RheVRhc2tzQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheVRhc2tzJyk7XG50b2RheVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiAodGFzay5kdWUgPT09IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpJiYodGFzay5zdGF0dXMgPT0gJ0R1ZScpKSk7XG59KVxuXG5jb25zdCBvdmVyZHVlVGFza3NCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJkdWVUYXNrcycpO1xub3ZlcmR1ZVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiAodGFzay5kdWUgPCBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSYmKHRhc2suc3RhdHVzID09ICdEdWUnKSkpO1xufSlcblxuY29uc3QgdXBjb21pbmdUYXNrc0J0bj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBjb21pbmdUYXNrcycpO1xudXBjb21pbmdUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNsZWFyVGFza0xpc3QoKTtcbiAgICBsZXQgdG9kYXk9bmV3IERhdGUoKTtcbiAgICBsZXQgdGhlRGF5QWZ0ZXJUb21vcnJvdyA9ICBuZXcgRGF0ZSgpO1xuICAgIHRoZURheUFmdGVyVG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAyKTtcbiAgICBkaXNwbGF5VGFza3ModGFza3NMaXN0LmZpbHRlcih0YXNrPT4gKHRhc2suZHVlID49IHRvZGF5LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKSYmKHRhc2suZHVlIDw9IHRoZURheUFmdGVyVG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkpJiYodGFzay5zdGF0dXMgPT0gJ0R1ZScpKSk7XG59KVxuXG5jb25zdCBjb21wbGV0ZWRSZWNlbnRseVRhc2tzQnRuPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWRSZWNlbnRseVRhc2tzJyk7XG5jb21wbGV0ZWRSZWNlbnRseVRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgY2xlYXJUYXNrTGlzdCgpO1xuICAgIGRpc3BsYXlUYXNrcyh0YXNrc0xpc3QuZmlsdGVyKHRhc2s9PiB0YXNrLnN0YXR1cyA9PSAnQ29tcGxldGUnKSk7XG59KVxuXG5jb25zdCBjbG9zZURldGFpbHNCdG49ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlRGV0YWlsc0J0bicpO1xuY2xvc2VEZXRhaWxzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZT0+IHtcbiAgICBjb25zdCB0YXNrRGV0YWlscz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RldGFpbHMnKTtcbiAgICB0YXNrRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmREaXNwbGF5PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgYmFja2dyb3VuZERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cnJlZCcpO1xuXG4gICAgY29uc3QgZGV0YWlscz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgdGFza0RldGFpbHMucmVtb3ZlQ2hpbGQoZGV0YWlscyk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==