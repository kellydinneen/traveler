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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_right_arrow_amaranth_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/right-arrow-amaranth.png */ "./src/images/right-arrow-amaranth.png");
/* harmony import */ var _images_left_arrow_taupe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/left-arrow-taupe.png */ "./src/images/left-arrow-taupe.png");
/* harmony import */ var _images_checkmark_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/checkmark.png */ "./src/images/checkmark.png");
/* harmony import */ var _images_paper_plane_red_outline_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/paper-plane-red-outline.png */ "./src/images/paper-plane-red-outline.png");
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_right_arrow_amaranth_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_left_arrow_taupe_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_checkmark_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_paper_plane_red_outline_png__WEBPACK_IMPORTED_MODULE_6__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".continue-button {\n  height: 50px;\n  width: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n  margin: 10px;\n  font-size: 0; }\n\n.back-button {\n  height: 50px;\n  width: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n  margin: 10px;\n  font-size: 0; }\n\n.finish-button {\n  height: 50px;\n  width: 50px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n  margin: 10px;\n  font-size: 0;\n  box-shadow: 0px 3px 10px 2px #F3F7F0; }\n\n.back-forward-buttons {\n  display: flex;\n  justify-content: space-between; }\n\n.login-button {\n  font-family: \"Roboto\", sans-serif;\n  background-color: #A93F55;\n  color: #F3F7F0;\n  font-size: 30px;\n  border-radius: 15px;\n  border: none;\n  padding: 10px;\n  box-shadow: 0px 3px 10px 2px #076585;\n  margin-top: 20px; }\n\n.header-button {\n  font-family: \"Yusei Magic\", sans-serif;\n  font-size: 20px;\n  border: none;\n  background: none;\n  color: #F3F7F0;\n  margin: 10px; }\n\n.agent-login-button {\n  background-color: #8C5E58;\n  font-family: \"Roboto\", sans-serif;\n  padding: 10px;\n  width: 150px;\n  color: #F3F7F0;\n  border: solid 2px #F3F7F0;\n  border-radius: 5px;\n  font-size: 15px; }\n\n.plane-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  width: 100px;\n  height: 100px; }\n\nselect {\n  margin: 20px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: #F3F7F0;\n  color: #076585;\n  border: none;\n  font-family: \"Roboto\", sans-serif; }\n\noption {\n  background-color: #F3F7F0;\n  color: #076585; }\n\ninput {\n  margin: 10px;\n  margin-bottom: 15px;\n  padding: 20px;\n  border-radius: 15px;\n  font-family: \"Roboto\", sans-serif; }\n\nlabel {\n  color: #076585;\n  font-size: 2rem;\n  font-family: \"Yusei Magic\", sans-serif;\n  font-weight: bolder; }\n\n.name-input {\n  width: 350px; }\n\n.id-input {\n  margin: 20px;\n  height: 20px;\n  width: 250px;\n  border-radius: 15px;\n  background-color: #F3F7F0;\n  color: #076585;\n  border: none;\n  font-family: \"Roboto\", sans-serif; }\n\n.date-inputs {\n  flex-direction: row; }\n\n.year-input {\n  width: 100px; }\n\n.hidden-label {\n  font-size: 0; }\n\n.login {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n\n.login-form {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px;\n  border-radius: 15px;\n  padding: 20px;\n  background: rgba(243, 247, 240, 0.7);\n  box-shadow: 0px 3px 10px 2px #076585; }\n\n.login-welcome {\n  color: #A93F55;\n  font-style: italic;\n  font-size: 35px; }\n\n.login-label {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 25px; }\n\n.agent-login-instructions {\n  color: #A93F55; }\n\n.login-error-message {\n  color: #F2545B;\n  font-family: \"Roboto\", sans-serif; }\n\n.trip-form {\n  box-shadow: 0px 3px 10px 20px #F3F7F0;\n  height: 400px;\n  width: 650px;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 30px;\n  margin-top: 100px; }\n\n.form-section {\n  display: flex;\n  flex-direction: column; }\n\n.section-heading {\n  color: #A93F55;\n  background-color: #F3F7F0;\n  padding: 7px;\n  border-radius: 15px;\n  border: solid 2px #F2545B; }\n\n.spending-display {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-family: \"Roboto\", sans-serif;\n  color: #F3F7F0; }\n\n.my-trips {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n\n.trip-list {\n  background: #F3F7F0;\n  color: #076585;\n  border-radius: 15px;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  width: 200px;\n  height: 350px;\n  padding: 10px;\n  margin: 10px;\n  box-shadow: 0px 3px 10px 3px #076585;\n  overflow: scroll; }\n\n.trip-list-heading {\n  border-bottom: solid 5px #A93F55;\n  color: #8C5E58;\n  font-family: \"Yusei Magic\", sans-serif;\n  padding: 5px; }\n\n.trip-categories {\n  display: flex;\n  justify-content: space-between; }\n\n.trip-card, .agent-card {\n  line-height: 15px;\n  width: 180px;\n  border-bottom: solid 2px #076585;\n  margin: 5px;\n  padding: 10px; }\n  .trip-card:hover, .agent-card:hover {\n    box-shadow: 0px 3px 10px 2px #076585; }\n\n.trip-card-heading {\n  font-family: \"Yusei Magic\", sans-serif; }\n\n.trip-image {\n  height: 200px;\n  width: auto; }\n\n.total-annual-spending {\n  color: #A93F55; }\n\n.agent-dashboard {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.agent-lists {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center; }\n\n.agent-list {\n  background: #F3F7F0;\n  color: #076585;\n  border-radius: 15px;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  width: 250px;\n  height: 350px;\n  padding: 10px;\n  margin: 10px;\n  box-shadow: 0px 3px 10px 3px #8C5E58;\n  overflow: scroll; }\n\n.agent-background {\n  background: #F2545B; }\n\n.details-for-agent {\n  height: 30%; }\n\nbody {\n  background: linear-gradient(to right, #076585, #F3F7F0);\n  font-family: \"Yusei Magic\", sans-serif;\n  color: #F3F7F0; }\n\nheader {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center; }\n\n.user-greeting {\n  margin-top: 200px;\n  font-size: 3rem;\n  color: #A93F55; }\n\n.traveler-dashboard {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center; }\n\n@media screen and (min-width: 500px) and (max-width: 800px) {\n  .user-greeting {\n    font-size: 2rem; }\n  .login-form {\n    width: 50%; }\n  .name-input {\n    width: 90%; }\n  .id-input {\n    width: 70%; }\n  .trip-form {\n    width: 70%; }\n  .trip-categories,\n  .agent-lists {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center; }\n  .trip-list,\n  .agent-list {\n    background: #F3F7F0;\n    color: #076585;\n    border-radius: 15px;\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 10px;\n    width: 375px;\n    height: 350px;\n    padding: 10px;\n    margin: 10px;\n    box-shadow: 0px 3px 10px 3px #8C5E58;\n    overflow: scroll; } }\n\n@media screen and (max-width: 500px) {\n  .user-greeting {\n    font-size: 1.5rem; }\n  .login-form {\n    width: 80%; }\n  .id-input {\n    width: 70%; }\n  .name-input {\n    width: 90%; }\n  .trip-form {\n    width: 70%; }\n  .trip-categories,\n  .agent-lists {\n    margin-top: 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center; }\n  .trip-list,\n  .agent-list {\n    background: #F3F7F0;\n    color: #076585;\n    border-radius: 15px;\n    width: 20%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: \"Roboto\", sans-serif;\n    font-size: 10px;\n    width: 300px;\n    height: 350px;\n    padding: 10px;\n    margin: 10px;\n    box-shadow: 0px 3px 10px 3px #8C5E58;\n    overflow: scroll; } }\n\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/css/_buttons.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_inputs.scss","webpack://./src/css/_login.scss","webpack://./src/css/_trip-form.scss","webpack://./src/css/_my-trips.scss","webpack://./src/css/_agent-dashboard.scss","webpack://./src/css/index.scss"],"names":[],"mappings":"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","sourcesContent":["\n.continue-button {\n  @include back-forward-buttons($right-arrow);\n  font-size: 0;\n}\n\n.back-button {\n  @include back-forward-buttons($left-arrow);\n  font-size: 0;\n}\n\n.finish-button {\n  @include back-forward-buttons($checkmark);\n  font-size: 0;\n  box-shadow: 0px 3px 10px 2px $mint-cream;\n}\n\n\n.back-forward-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n\n\n.login-button{\n  font-family: $small-font;\n  background-color: $amaranthe;\n  color: $mint-cream;\n  font-size: 30px;\n  border-radius: 15px;\n  border: none;\n  padding: 10px;\n  box-shadow: 0px 3px 10px 2px $blue-sapphire;\n  margin-top: 20px;\n}\n\n\n.header-button {\n  font-family: $title-font;\n  font-size: 20px;\n  border: none;\n  background: none;\n  color: $mint-cream;\n  margin: 10px;\n}\n\n\n.agent-login-button {\n  background-color: $rose-taupe;\n  font-family: $small-font;\n  padding: 10px;\n  width: 150px;\n  color: $mint-cream;\n  border: solid 2px $mint-cream;\n  border-radius: 5px;\n  font-size: 15px;\n}\n\n.plane-logo {\n  background-image: url('../images/paper-plane-red-outline.png');\n  width: 100px;\n  height: 100px;\n}\n","// $sky-gradient: linear-gradient(to right, rgb(7, 101, 133), rgb(255, 255, 255));\n$sky-gradient: linear-gradient(to right, #076585, #F3F7F0);\n\n$mint-cream: #F3F7F0;\n$blue-sapphire: #076585;\n$sizzling-red: #F2545B;\n$amaranthe: #A93F55;\n$rose-taupe: #8C5E58;\n\n$title-font: 'Yusei Magic', sans-serif;\n$small-font: 'Roboto', sans-serif;\n\n$right-arrow: '../images/right-arrow-amaranth.png';\n$left-arrow: '../images/left-arrow-taupe.png';\n$checkmark: '../images/checkmark.png';\n$disabled-checkmark: '../images/disabled-checkmark.png';\n\n@mixin back-forward-buttons($image) {\n  height: 50px;\n  width: 50px;\n  background-image: url($image);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n  margin: 10px;\n}\n\n@mixin lists($direction, $justify) {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: center;\n}\n\n@mixin scrollingList($width, $shadow-color) {\n  background: $mint-cream;\n  color: $blue-sapphire;\n  border-radius: 15px;\n  width: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  font-family: $small-font;\n  font-size: 10px;\n  width: $width;\n  height: 350px;\n  padding: 10px;\n  margin: 10px;\n  box-shadow: 0px 3px 10px 3px $shadow-color;\n  overflow: scroll;\n}\n","select {\n  margin: 20px;\n  height: 50px;\n  border-radius: 15px;\n  background-color: $mint-cream;\n  color: $blue-sapphire;\n  border: none;\n  font-family: $small-font;\n}\n\noption {\n  background-color: $mint-cream;\n  color: $blue-sapphire;\n}\n\ninput {\n  margin: 10px;\n  margin-bottom: 15px;\n  padding: 20px;\n  border-radius: 15px;\n  font-family: $small-font;\n}\n\nlabel {\n  color: $blue-sapphire;\n  font-size: 2rem;\n  font-family: $title-font;\n  font-weight: bolder;\n}\n\n.name-input {\n  width: 350px;\n}\n\n.id-input {\n  margin: 20px;\n  height: 20px;\n  width: 250px;\n  border-radius: 15px;\n  background-color: $mint-cream;\n  color: $blue-sapphire;\n  border: none;\n  font-family: $small-font;\n}\n\n.date-inputs {\n  flex-direction: row;\n}\n\n.year-input {\n  width: 100px;\n}\n\n.hidden-label {\n  font-size: 0;\n}\n",".login {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.login-form {\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 10px;\n  border-radius: 15px;\n  padding: 20px;\n  background: rgba(243, 247, 240, 0.7);\n  box-shadow: 0px 3px 10px 2px $blue-sapphire;;\n}\n\n.login-welcome{\n  color: $amaranthe;\n  font-style: italic;\n  font-size: 35px;\n}\n\n.login-label {\n  font-family: $small-font;\n  font-weight: 400;\n  font-size: 25px;\n}\n\n.agent-login-instructions {\n  color: $amaranthe;\n}\n\n.login-error-message {\n  color: $sizzling-red;\n  font-family: $small-font;\n}\n",".trip-form {\n  box-shadow: 0px 3px 10px 20px $mint-cream;\n  height: 400px;\n  width: 650px;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 30px;\n  margin-top: 100px;\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n}\n",".section-heading {\n  color: $amaranthe;\n  background-color: $mint-cream;\n  padding: 7px;\n  border-radius: 15px;\n  border: solid 2px $sizzling-red;\n}\n\n.spending-display{\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-family: $small-font;\n  color: $mint-cream;\n}\n\n.my-trips {\n  @include lists(column, space-between);\n}\n\n.trip-list {\n  @include scrollingList(200px, $blue-sapphire)\n}\n\n.trip-list-heading {\n  border-bottom: solid 5px $amaranthe;\n  color: $rose-taupe;\n  font-family: $title-font;\n  padding: 5px;\n}\n\n.trip-categories {\n  display: flex;\n  justify-content: space-between;\n}\n\n.trip-card {\n  line-height: 15px;\n  width: 180px;\n  border-bottom: solid 2px $blue-sapphire;\n  margin: 5px;\n  padding: 10px;\n\n  &:hover {\n    box-shadow: 0px 3px 10px 2px $blue-sapphire;\n  }\n}\n\n\n.trip-card-heading {\n  font-family: $title-font;\n}\n\n.trip-image {\n  height: 200px;\n  width: auto;\n}\n\n.total-annual-spending {\n  color: $amaranthe;\n}\n",".agent-dashboard{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.agent-lists{\n  @include lists(row, space-around);\n}\n\n.agent-list {\n  @include scrollingList(250px, $rose-taupe);\n}\n\n.agent-card {\n  @extend .trip-card;\n}\n\n.agent-background {\n  background: $sizzling-red;\n}\n\n.details-for-agent {\n  height: 30%;\n}\n","@import 'variables';\n@import 'buttons';\n@import 'inputs';\n@import 'login';\n@import 'trip-form';\n@import 'my-trips';\n@import 'agent-dashboard';\n\nbody {\n  background: $sky-gradient;\n  font-family: $title-font;\n  color: $mint-cream;\n}\n\nheader {\n  width: 100%;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-greeting {\n  margin-top: 200px;\n  font-size: 3rem;\n  color: $amaranthe;\n}\n\n.traveler-dashboard {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n@media screen and (min-width: 500px) and (max-width: 800px)  {\n  .user-greeting {\n    font-size: 2rem;\n  }\n\n  .login-form {\n    width: 50%;\n  }\n\n  .name-input {\n    width: 90%;\n  }\n\n  .id-input {\n    width: 70%;\n  }\n\n  .trip-form {\n    width: 70%;\n  }\n\n  .trip-categories,\n  .agent-lists {\n    @include lists(column, flex-start);\n  }\n\n  .trip-list,\n  .agent-list {\n    @include scrollingList(375px, $rose-taupe);\n  }\n\n}\n\n@media screen and (max-width: 500px)  {\n  .user-greeting {\n    font-size: 1.5rem;\n  }\n\n  .login-form {\n    width: 80%;\n  }\n\n  .id-input {\n    width: 70%;\n  }\n\n  .name-input {\n    width: 90%;\n  }\n\n  .trip-form {\n    width: 70%;\n  }\n\n  .trip-categories,\n  .agent-lists {\n    @include lists(column, flex-start);\n  }\n\n  .trip-list,\n  .agent-list {\n    @include scrollingList(300px, $rose-taupe);\n  }\n}\n\n\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ "./src/trip.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");



class Agent {
  constructor(tripData, destinationData, travelerData) {
    this.trips = tripData.map(trip => new _trip__WEBPACK_IMPORTED_MODULE_0__["default"](trip, destinationData));
    this.pendingTrips = tripData.filter(trip => trip.status === 'pending');
    this.destinations = destinationData;
    this.clients = travelerData.map(traveler => new _traveler__WEBPACK_IMPORTED_MODULE_1__["default"](traveler, tripData, destinationData));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Agent);


/***/ }),

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {

  greetTraveler(name, type) {
    const userGreeting = document.querySelector('.user-greeting');
    userGreeting.innerHTML = `Welcome, ${name}. <br> We hear you're a ${type}.`;
  },

  displayCategoryOfTrip(trips, tripCategory) {
    if(trips.length > 0) {
      const tripCategoryDisplay = document.querySelector(`.${tripCategory}`);
      let displayContent = ''
      trips.forEach(trip => {
        displayContent += `<div id='${trip.id}trip' class='trip-card'>
        <h2 id='${trip.id}trip' class='trip-card-heading'>${trip.destination.destination}</h2><h2 id='${trip.id}trip'>${trip.departureDate}</h2><h2 id='${trip.id}trip'>${trip.durationInDays} Days</h2></div>`;
      })
      tripCategoryDisplay.innerHTML = displayContent;
    }
  },

  displayListForAgent(list, property, agent) {
      let displayContent = ''
      let title, detail;
      agent[property].forEach(item => {
        if(property === 'trips') {
          title = item.destination.destination;
          detail = `${item.departureDate}, ${item.durationInDays} days, ${item.numberOfTravelers} travelers`
        } else if(property === 'clients') {
          title = item.name;
          detail = `${item.tripBook.length} total trips`
        } else if(property === 'destinations') {
          title = item.destination;
          detail = `$${item.estimatedFlightCostPerPerson} flight`
        }
        displayContent += `<div id='${item.id}agent' class='agent-card agent-${property}-card'>
        <h2 id='${item.id}agent' class='agent-card-title'>${title}</h2><h2 id='${item.id}agent' class='agent-card-detail'>${detail}</h2></div>`;
      })
      list.innerHTML = displayContent;
  },

  displayOneLiners(element, text) {
    element.innerText = text;
  },

  alterClassList(method, className, element) {
    if (method === 'add') {
      element.classList.add(className);
    } else if (method === 'remove') {
      element.classList.remove(className);
    }
  },

addTextOptionsToDropdown(dropdown, array, type) {
    let itemTally = 1;
     array.forEach(item => {
       const newOption = document.createElement('option');
       if(type === 'destination') {
         newOption.value = item.id;
         newOption.innerText = item.destination;
       } else if(type === 'traveler') {
         newOption.value = item.id;
         newOption.innerText = item.name;
       } else {
         newOption.value = itemTally;
         newOption.innerText = item;
       }
       dropdown.appendChild(newOption);
        itemTally++
     })
 },

addNumbersToDropdowns(dropdown, numberChoices) {
     numberChoices.forEach(number => {
       const newSelection = document.createElement('option');
       newSelection.value = number;
       newSelection.innerText = number;
       dropdown.appendChild(newSelection);
     });
 },

 displayTripDetails(trip, element) {
   element.classList.remove('hidden');
   let tensedLanguage, message;
   if(trip.status === 'past') {
     tensedLanguage = ['traveled', 'left', 'returned'];
     message = 'We hope you enjoyed your adventure!'
   } else if(trip.status === 'pending') {
     tensedLanguage = ['would like to travel', 'plan to leave', 'return'];
     message = 'This trip is pending. Standby for your agent to approve this trip and provide you with a list of suggested adventures at your destination:'
   } else if(trip.status === 'present' || trip.status === 'upcoming') {
     tensedLanguage = ['are traveling', 'leave', 'return'];
     message = 'Your trip is approved! Standby for your agent to provide you with a list of suggested adventures at your destination:';
   }
   element.innerHTML = `<img class='trip-image' src=${trip.destination.image}><h3>You ${tensedLanguage[0]} to ${trip.destination.destination}</h3><h3>You and ${trip.numberOfTravelers - 1} others ${tensedLanguage[1]} on ${trip.departureDate} and ${tensedLanguage[2]} ${trip.durationInDays} days later.</h3><h4>${message}</h4><h4>${trip.suggestedActivities}</h4>`;
 }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/images/checkmark.png":
/*!**********************************!*\
  !*** ./src/images/checkmark.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/checkmark.png");

/***/ }),

/***/ "./src/images/left-arrow-taupe.png":
/*!*****************************************!*\
  !*** ./src/images/left-arrow-taupe.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/left-arrow-taupe.png");

/***/ }),

/***/ "./src/images/paper-plane-red-outline.png":
/*!************************************************!*\
  !*** ./src/images/paper-plane-red-outline.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/paper-plane-red-outline.png");

/***/ }),

/***/ "./src/images/right-arrow-amaranth.png":
/*!*********************************************!*\
  !*** ./src/images/right-arrow-amaranth.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/right-arrow-amaranth.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ "./src/css/index.scss");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip */ "./src/trip.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent */ "./src/agent.js");
/* harmony import */ var _networkRequests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networkRequests */ "./src/networkRequests.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");







const page = document.querySelector('body');
const loginPage = document.querySelector('.login');
const loginLogo = document.querySelector('#dummy-plane');
const travelerNameInput = document.querySelector('.name-input');
const travelerIDInput = document.querySelector('.id-input');
const travelerLoginButton = document.querySelector('.login-button');
const loginErrorMessage = document.querySelector('.login-error-message');
const agentLoginButton = document.querySelector('.agent-login-button');

const homeButton = document.querySelector('.home-button');
const newTripButton = document.querySelector('.new-trip-button');
const myTripsButton = document.querySelector('.my-trips-button');
const logoutButton = document.querySelector('.logout-button');

const homePage = document.querySelector('.traveler-dashboard');
const travelerGreeting = document.querySelector('.user-greeting');
const createTripForm = document.querySelector('.trip-form');
const formPages = [
  document.querySelector('#f_1'),
  document.querySelector('#f_2'),
  document.querySelector('#f_3'),
  document.querySelector('#f_4')
];
const durationInput = document.querySelector('.duration-input');
const newTripYearsDropdown = document.querySelector('.new-trip-year-input');
const monthsDropdown = document.querySelector('.new-trip-month-input');
const daysDropdown = document.querySelector('.new-trip-date-input');
const travelersDropdown = document.querySelector('.travel-party-input');
const destinationsDropdown = document.querySelector('.destination-input');
const continueButton = document.querySelector('.continue-button');
const backButton = document.querySelector('.back-button');
const finishButton = document.querySelector('.finish-button');
const newTripDetails = document.querySelector('.new-trip-details');

const myTripsPage = document.querySelector('.my-trips');
const spendingYearInput = document.querySelector('.year-input');
const totalSpendingDisplay = document.querySelector('.total-annual-spending');
const tripDetailView = document.querySelector('.trip-detail-page');

const agentDashboard = document.querySelector('.agent-dashboard');
const agentDashboardDisplays = [
  document.querySelector('.clients'),
  document.querySelector('.trips'),
  document.querySelector('.destinations')
]
const agentTripDetailsBox = document.querySelector('.details-for-agent');
const suggestedActivities = document.querySelector('.suggested-activities-input');
const submitSuggestionsButton = document.querySelector('.submit-suggested-activities')

let traveler, agent;

window.onload = loadLoginDropdown();

travelerLoginButton.addEventListener('click', loadTravelerDashboard);
agentLoginButton.addEventListener('click', loadAgentDashboard);
myTripsButton.addEventListener('click', displayTravelersTrips);
homeButton.addEventListener('click', returnHome);
continueButton.addEventListener('click', continueForm);
backButton.addEventListener('click', goBackInForm);
finishButton.addEventListener('click', createNewTrip);
myTripsPage.addEventListener('click', viewTripDetails);
newTripButton.addEventListener('click', returnHome);
spendingYearInput.addEventListener('change', displaySpending);
logoutButton.addEventListener('click', returnToLoginPage);
agentDashboard.addEventListener('click', displayTripDetailsForAgent);
submitSuggestionsButton.addEventListener('click', submitSuggestions);

function loadLoginDropdown(){
  return Promise.all([
      _networkRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getData('travelers'),
    ])
    .then(data => {
      const travelerData = data[0].travelers;
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addTextOptionsToDropdown(travelerNameInput, travelerData, 'traveler');
    })
    .catch(error => console.log(error))
}

function loadTravelerDashboard(){
  if(approveTravelerLogin()) {
    populatePageInfo('traveler');
  } else {
      const errorMessage = 'Sorry, we do not recognize that combination of name and ID. HINT (for David) -- the dropdown menu lists names in order by ID, so, for example, the first name in the menu corresponds to ID "1".';
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayOneLiners(loginErrorMessage, errorMessage);
    }
  }

function loadAgentDashboard() {
  populatePageInfo('agent');
}

function populatePageInfo(user) {
  return Promise.all([
      _networkRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getData('travelers'),
      _networkRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getData('trips'),
      _networkRequests__WEBPACK_IMPORTED_MODULE_4__["default"].getData('destinations')
    ])
    .then(data => {
      const travelerData = data[0].travelers;
      const tripData = data[1].trips;
      const destinationData = data[2].destinations;
      agent = new _agent__WEBPACK_IMPORTED_MODULE_3__["default"](tripData, destinationData, travelerData);
      buildPage(user, tripData, destinationData, travelerData);
    })
    .catch(error => console.log(error))
}

function approveTravelerLogin() {
  const idEntry = Number(travelerIDInput.value);
  const nameEntryID = Number(travelerNameInput.value);
  return idEntry === nameEntryID;
}

function buildPage(user, tripData, destinationData, travelerData){
  if(user === 'traveler') {
    buildTravelerPage(tripData, destinationData, travelerData);
  } else if(user === 'agent') {
    buildAgentPage();
  }
}

function buildTravelerPage(tripData, destinationData, travelerData) {
  createCurrentTraveler(travelerData, tripData, destinationData);
  loadTravelerHomepage();
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].greetTraveler(traveler.name, traveler.type);
  window.setTimeout(fadeOutGreeting, 4000);
  window.setTimeout(fadeInForm, 4100);
  populateNewTripFormDropdowns();
}

function buildAgentPage() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'agent-background', page);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', loginPage);
  const agentElements = [agentDashboard, logoutButton];
  agentElements.forEach(element => _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', element))
  agentDashboardDisplays.forEach(display => {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayListForAgent(display, display.classList[0], agent);
  });
}

function populateNewTripFormDropdowns() {
  const possibleMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const possibleDates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  const possibleNumbersOfTravelers = [1,2,3,4,5,6,7,8,9,10];
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addTextOptionsToDropdown(destinationsDropdown, agent.destinations, 'destination');
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addTextOptionsToDropdown(monthsDropdown, possibleMonths,'month');
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addNumbersToDropdowns(daysDropdown, possibleDates);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].addNumbersToDropdowns(travelersDropdown, possibleNumbersOfTravelers);
}

function createCurrentTraveler(travelerData, tripData, destinationData) {
  const currentTravelerID = Number(travelerIDInput.value);
  const currentTravelerData = travelerData.find(entry => entry.id === currentTravelerID);
  traveler = new _traveler__WEBPACK_IMPORTED_MODULE_1__["default"](currentTravelerData, tripData, destinationData);
}

function loadTravelerHomepage() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', loginPage);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', loginLogo);
  const homeElements = [homePage, myTripsButton, logoutButton, homeButton, newTripButton];
  homeElements.forEach(element => _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', element))
}

function fadeOutGreeting() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', travelerGreeting)
}

function fadeInForm() {
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', createTripForm)
}

function displayTravelersTrips(){
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', myTripsPage);
  const toHide = [homePage, newTripDetails, tripDetailView];
  hideItems(toHide);
  traveler.tripBook.forEach(trip => {
    if(trip.status !== 'pending'){
      trip.getTripTiming();
    }
  });
  spendingYearInput.value = 0;
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayOneLiners(totalSpendingDisplay, '');
  displayTripLists();
}

function displayTripLists() {
  const tripStatusValues = ['past', 'present', 'upcoming', 'pending'];
  tripStatusValues.forEach(status => {
    const trips = traveler.getTripsByStatus(status);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayCategoryOfTrip(trips, status);
  })
}

function displaySpending() {
  if(spendingYearInput.value !== '0'){
    const selectedYear = Number(spendingYearInput.value);
    const spending = traveler.calculateAnnualTravelSpending(selectedYear);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayOneLiners(totalSpendingDisplay, `${spending}`);
  }
}

function returnHome() {
  const toHide = [myTripsPage, newTripDetails, tripDetailView];
  hideItems(toHide);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', homePage);
  resetForm();
}

function returnToLoginPage() {
  const toHide = [homePage, myTripsPage, newTripDetails, tripDetailView, createTripForm, agentDashboard, myTripsButton, logoutButton, homeButton];
  hideItems(toHide);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', loginPage);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', loginLogo);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'agent-background', page);
  travelerNameInput.value = 0;
  travelerIDInput.value = '';
}

function resetForm() {
  createTripForm.reset();
  continueButton.id = '0';
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', continueButton);
  if(!backButton.classList.contains('hidden')){
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', backButton);
  }
  formPages.forEach(page => {
    if(page.id === 'f_1'){
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', page);
    } else if(!page.classList.contains('hidden')){
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', page)
    }
  })
}

function viewTripDetails(event) {
  if(event.target.classList.contains('trip-card') || event.target.parentNode.classList.contains('trip-card')){
    const tripID = parseInt(event.target.id);
    const trip = traveler.tripBook.find(entry => entry.id === tripID);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', myTripsPage);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTripDetails(trip, tripDetailView);
  }
}

function createNewTrip() {
  if(checkForEmptyInputs()){
    const tripData = {
      id: Number(agent.trips.length),
      userID: Number(traveler.id),
      destinationID: Number(destinationsDropdown.value),
      travelers: Number(travelersDropdown.value),
      date: `${formatDate()}`,
      duration: Number(durationInput.value),
      status:'pending',
      suggestedActivities:[]
    }
    const toHide = [finishButton, backButton, formPages[3]];
    hideItems(toHide);
    const newTrip = new _trip__WEBPACK_IMPORTED_MODULE_2__["default"](tripData, traveler.destinations);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTripDetails(newTrip, newTripDetails);
    _networkRequests__WEBPACK_IMPORTED_MODULE_4__["default"].createOrAlterTrip('trips', tripData, traveler, agent);
  } else {
    console.log('MISSING TRIP INFORMATION');
  }
}

function hideItems(items) {
  items.forEach(item => {
    if(!item.classList.contains('hidden')){
      _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', item);
    }
  })
}

function checkForEmptyInputs() {
  return destinationsDropdown.value !== 0 &&
  newTripYearsDropdown.value !== 0 &&
  monthsDropdown.value !== 0 &&
  daysDropdown.value !== 0 &&
  durationInput.value !== "" &&
  travelersDropdown.value !== 0
}

function formatDate() {
  return `${newTripYearsDropdown.value}/${monthsDropdown.value}/${daysDropdown.value}`;
}

function continueForm() {
  const pageNumber = parseInt(continueButton.id);
  const currentFormPage = formPages[pageNumber];
  const nextFormPage = formPages[pageNumber + 1];
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', currentFormPage);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', nextFormPage);
  continueButton.id = `${pageNumber + 1}`;
  adjustContinueButtonID('1','3', ['remove', 'add']);
}

function goBackInForm() {
  const pageNumber = parseInt(continueButton.id);
  const currentFormPage = formPages[pageNumber];
  const previousFormPage = formPages[pageNumber - 1];
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('add', 'hidden', currentFormPage);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList('remove', 'hidden', previousFormPage);
  continueButton.id = `${pageNumber - 1}`;
  adjustContinueButtonID('0','2', ['add', 'remove'])
}

function adjustContinueButtonID(a, b, array) {
  if (continueButton.id === a) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList(array[0], 'hidden', backButton);
  }
  if(continueButton.id === b) {
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList(array[1], 'hidden', continueButton);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].alterClassList(array[0], 'hidden', finishButton);
  }
}

function displayTripDetailsForAgent(event) {
  if(event.target.classList.contains('agent-trips-card') || event.target.parentNode.classList.contains('agent-trips-card')) {
    agentTripDetailsBox.showModal();
    agentTripDetailsBox.id = `${event.target.id}modal`;
  }
}

function submitSuggestions() {
  const trip = agent.trips.find(trip => trip.id === parseInt(agentTripDetailsBox.id));
  const activities = suggestedActivities.value;
  const tripData = {id: trip.id, suggestedActivities: activities.split(',')}
  _networkRequests__WEBPACK_IMPORTED_MODULE_4__["default"].createOrAlterTrip('updateTrip', tripData, traveler, agent);
  agentTripDetailsBox.close();
}


/***/ }),

/***/ "./src/networkRequests.js":
/*!********************************!*\
  !*** ./src/networkRequests.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const networkRequests = {

  getData(endpoint) {
    return fetch(`http://localhost:3001/api/v1/${endpoint}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  createOrAlterTrip(endpoint, trip, traveler, agent) {
    const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(trip)
    }
    return fetch(`http://localhost:3001/api/v1/${endpoint}`, post)
      .then(response => response.json())
      .then((response) => {
        Promise.all([
          this.getData('trips'),
          ])
          .then(data => {
            const newTripData = data[0].trips;
            if(traveler !== undefined) {
              traveler.tripBook = traveler.getTrips(newTripData);
            }
            agent.trips = newTripData;
          });

      })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (networkRequests);


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip */ "./src/trip.js");


class Traveler {
  constructor(travelerData, allTripData, allDestinationData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.type = travelerData.travelerType;
    this.destinations = allDestinationData;
    this.tripBook = this.getTrips(allTripData);
  }

  getTrips(data) {
    let userTrips = data.filter(trip => trip.userID === this.id);
    return userTrips.map(trip => new _trip__WEBPACK_IMPORTED_MODULE_0__["default"](trip, this.destinations));
  }

  calculateAnnualTravelSpending(year) {
    const thisYearsTrips = this.tripBook.filter(trip => {
      const date = new Date(trip.departureDate);
      return date.getFullYear() === year;
    });
    if(thisYearsTrips.length > 0){
      const annualSpending = thisYearsTrips.reduce((totalCost, trip) => {
        return totalCost += trip.calculateTripCost();
      },0)
      return `$${annualSpending.toFixed(2)}`;
    } else {
      return `Your spending is $0 for ${year}. Must not have caught the travel bug, huh?`;
    }
  }

  getTripsByStatus(status) {
    return this.tripBook.filter(trip => trip.status === status);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripData, destinationData) {
    this.id = tripData.id;
    this.travelerID = tripData.userID;
    this.destination = destinationData.find(destination => destination.id === tripData.destinationID);
    this.numberOfTravelers = tripData.travelers;
    this.departureDate = tripData.date;
    this.durationInDays = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities
  }

  calculateTripCost() {
    let estimatedLodgingCost = this.destination.estimatedLodgingCostPerDay * this.durationInDays;
    let estimatedFlightCost = this.destination.estimatedFlightCostPerPerson * this.numberOfTravelers;
    let travelAgentFee = 0.1;
    return (estimatedLodgingCost + estimatedFlightCost) * (1 + travelAgentFee);
  }

  getTripTiming() {
    let today = new Date();
    let departureDate = new Date(this.departureDate);
    let returnDate = this.getReturnDate(departureDate);
    if(today < departureDate) {
      this.status = 'upcoming';
    } else if (today > departureDate && today < returnDate){
      this.status = 'present';
    } else if (today > returnDate){
      this.status = 'past'
    }
  }

  getReturnDate(departure) {
    var returnDate = new Date(departure);
    returnDate.setDate(returnDate.getDate() + this.durationInDays);
    return returnDate;
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FnZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvaW5kZXguc2Nzcz83YWIxIiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY2hlY2ttYXJrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xlZnQtYXJyb3ctdGF1cGUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGFwZXItcGxhbmUtcmVkLW91dGxpbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcmlnaHQtYXJyb3ctYW1hcmFudGgucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmV0d29ya1JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWCxPQUFPO0FBQ1A7QUFDQTs7QUFFZSw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDakMvQjtBQUFBO0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsNkNBQUk7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGlCQUFpQiwwQkFBMEI7QUFDM0MsS0FBSztBQUNMLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsdUVBQVEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BDeEI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSxtRUFBSSxFQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9yaWdodC1hcnJvdy1hbWFyYW50aC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi4vaW1hZ2VzL2xlZnQtYXJyb3ctdGF1cGUucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2ltYWdlcy9jaGVja21hcmsucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gZnJvbSBcIi4uL2ltYWdlcy9wYXBlci1wbGFuZS1yZWQtb3V0bGluZS5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGludWUtYnV0dG9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDA7IH1cXG5cXG4uYmFjay1idXR0b24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5maW5pc2gtYnV0dG9uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMnB4ICNGM0Y3RjA7IH1cXG5cXG4uYmFjay1mb3J3YXJkLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E5M0Y1NTtcXG4gIGNvbG9yOiAjRjNGN0YwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMnB4ICMwNzY1ODU7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmhlYWRlci1idXR0b24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJZdXNlaSBNYWdpY1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICNGM0Y3RjA7XFxuICBtYXJnaW46IDEwcHg7IH1cXG5cXG4uYWdlbnQtbG9naW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4QzVFNTg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgY29sb3I6ICNGM0Y3RjA7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjRjNGN0YwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxNXB4OyB9XFxuXFxuLnBsYW5lLWxvZ28ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7IH1cXG5cXG5zZWxlY3Qge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y3RjA7XFxuICBjb2xvcjogIzA3NjU4NTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbm9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0YwO1xcbiAgY29sb3I6ICMwNzY1ODU7IH1cXG5cXG5pbnB1dCB7XFxuICBtYXJnaW46IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogIzA3NjU4NTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi5uYW1lLWlucHV0IHtcXG4gIHdpZHRoOiAzNTBweDsgfVxcblxcbi5pZC1pbnB1dCB7XFxuICBtYXJnaW46IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjdGMDtcXG4gIGNvbG9yOiAjMDc2NTg1O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmRhdGUtaW5wdXRzIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4ueWVhci1pbnB1dCB7XFxuICB3aWR0aDogMTAwcHg7IH1cXG5cXG4uaGlkZGVuLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcblxcbi5sb2dpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDcsIDI0MCwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAycHggIzA3NjU4NTsgfVxcblxcbi5sb2dpbi13ZWxjb21lIHtcXG4gIGNvbG9yOiAjQTkzRjU1O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzNXB4OyB9XFxuXFxuLmxvZ2luLWxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDI1cHg7IH1cXG5cXG4uYWdlbnQtbG9naW4taW5zdHJ1Y3Rpb25zIHtcXG4gIGNvbG9yOiAjQTkzRjU1OyB9XFxuXFxuLmxvZ2luLWVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICNGMjU0NUI7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG4udHJpcC1mb3JtIHtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAyMHB4ICNGM0Y3RjA7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgd2lkdGg6IDY1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1hcmdpbi10b3A6IDEwMHB4OyB9XFxuXFxuLmZvcm0tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5zZWN0aW9uLWhlYWRpbmcge1xcbiAgY29sb3I6ICNBOTNGNTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGN0YwO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4ICNGMjU0NUI7IH1cXG5cXG4uc3BlbmRpbmctZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjRjNGN0YwOyB9XFxuXFxuLm15LXRyaXBzIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4udHJpcC1saXN0IHtcXG4gIGJhY2tncm91bmQ6ICNGM0Y3RjA7XFxuICBjb2xvcjogIzA3NjU4NTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogMjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggM3B4ICMwNzY1ODU7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLnRyaXAtbGlzdC1oZWFkaW5nIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCAjQTkzRjU1O1xcbiAgY29sb3I6ICM4QzVFNTg7XFxuICBmb250LWZhbWlseTogXFxcIll1c2VpIE1hZ2ljXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDVweDsgfVxcblxcbi50cmlwLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi50cmlwLWNhcmQsIC5hZ2VudC1jYXJkIHtcXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICMwNzY1ODU7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7IH1cXG4gIC50cmlwLWNhcmQ6aG92ZXIsIC5hZ2VudC1jYXJkOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDJweCAjMDc2NTg1OyB9XFxuXFxuLnRyaXAtY2FyZC1oZWFkaW5nIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuLnRyaXAtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiBhdXRvOyB9XFxuXFxuLnRvdGFsLWFubnVhbC1zcGVuZGluZyB7XFxuICBjb2xvcjogI0E5M0Y1NTsgfVxcblxcbi5hZ2VudC1kYXNoYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmFnZW50LWxpc3RzIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hZ2VudC1saXN0IHtcXG4gIGJhY2tncm91bmQ6ICNGM0Y3RjA7XFxuICBjb2xvcjogIzA3NjU4NTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogMjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggM3B4ICM4QzVFNTg7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLmFnZW50LWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZDogI0YyNTQ1QjsgfVxcblxcbi5kZXRhaWxzLWZvci1hZ2VudCB7XFxuICBoZWlnaHQ6IDMwJTsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDc2NTg1LCAjRjNGN0YwKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNGM0Y3RjA7IH1cXG5cXG5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnVzZXItZ3JlZXRpbmcge1xcbiAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI0E5M0Y1NTsgfVxcblxcbi50cmF2ZWxlci1kYXNoYm9hcmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAudXNlci1ncmVldGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAubmFtZS1pbnB1dCB7XFxuICAgIHdpZHRoOiA5MCU7IH1cXG4gIC5pZC1pbnB1dCB7XFxuICAgIHdpZHRoOiA3MCU7IH1cXG4gIC50cmlwLWZvcm0ge1xcbiAgICB3aWR0aDogNzAlOyB9XFxuICAudHJpcC1jYXRlZ29yaWVzLFxcbiAgLmFnZW50LWxpc3RzIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAudHJpcC1saXN0LFxcbiAgLmFnZW50LWxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjRjNGN0YwO1xcbiAgICBjb2xvcjogIzA3NjU4NTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgd2lkdGg6IDM3NXB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAzcHggIzhDNUU1ODtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC51c2VyLWdyZWV0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLmlkLWlucHV0IHtcXG4gICAgd2lkdGg6IDcwJTsgfVxcbiAgLm5hbWUtaW5wdXQge1xcbiAgICB3aWR0aDogOTAlOyB9XFxuICAudHJpcC1mb3JtIHtcXG4gICAgd2lkdGg6IDcwJTsgfVxcbiAgLnRyaXAtY2F0ZWdvcmllcyxcXG4gIC5hZ2VudC1saXN0cyB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLnRyaXAtbGlzdCxcXG4gIC5hZ2VudC1saXN0IHtcXG4gICAgYmFja2dyb3VuZDogI0YzRjdGMDtcXG4gICAgY29sb3I6ICMwNzY1ODU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggM3B4ICM4QzVFNTg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IH0gfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2lucHV0cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19sb2dpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190cmlwLWZvcm0uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbXktdHJpcHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYWdlbnQtZGFzaGJvYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQ2lCRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlEQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUR2QlosWUFBWSxFQUFBOztBQUdkO0VDWUUsWUFBWTtFQUNaLFdBQVc7RUFDWCx5REFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VEbEJaLFlBQVksRUFBQTs7QUFHZDtFQ09FLFlBQVk7RUFDWixXQUFXO0VBQ1gseURBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFRGJaLFlBQVk7RUFDWixvQ0NYa0IsRUFBQTs7QURlcEI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBSWhDO0VBQ0UsaUNDZitCO0VEZ0IvQix5QkNwQmlCO0VEcUJqQixjQ3hCa0I7RUR5QmxCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0M1QnFCO0VENkJyQixnQkFBZ0IsRUFBQTs7QUFJbEI7RUFDRSxzQ0M3Qm9DO0VEOEJwQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQ3ZDa0I7RUR3Q2xCLFlBQVksRUFBQTs7QUFJZDtFQUNFLHlCQ3pDa0I7RUQw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VUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQ0FwQytCO0lBcUMvQixlQUFlO0lBQ2YsWU1rQjhCO0lOakI5QixhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0E3Q2tCO0lBOENsQixnQkFBZ0IsRUFBQSxFTWNmOztBQUlIO0VBaERBO0lBa0RJLGlCQUFpQixFQUFBO0VKbEVyQjtJSXNFSSxVQUFVLEVBQUE7RUwzQ2Q7SUsrQ0ksVUFBVSxFQUFBO0VMbkRkO0lLdURJLFVBQVUsRUFBQTtFSHJGZDtJR3lGSSxVQUFVLEVBQUE7RUE5Qlo7O0lON0JBLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JNOER1QjtJTjdEdkIsMkJNNkRtQztJTjVEbkMsbUJBQW1CLEVBQUE7RU04Qm5COztJTjFCQSxtQkFuQ2tCO0lBb0NsQixjQW5DcUI7SUFvQ3JCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGlDQXBDK0I7SUFxQy9CLGVBQWU7SUFDZixZTW1EOEI7SU5sRDlCLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQTdDa0I7SUE4Q2xCLGdCQUFnQixFQUFBLEVNK0NmOztBQUtIO0VBQ0UsYUFBYSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5jb250aW51ZS1idXR0b24ge1xcbiAgQGluY2x1ZGUgYmFjay1mb3J3YXJkLWJ1dHRvbnMoJHJpZ2h0LWFycm93KTtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuXFxuLmJhY2stYnV0dG9uIHtcXG4gIEBpbmNsdWRlIGJhY2stZm9yd2FyZC1idXR0b25zKCRsZWZ0LWFycm93KTtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuXFxuLmZpbmlzaC1idXR0b24ge1xcbiAgQGluY2x1ZGUgYmFjay1mb3J3YXJkLWJ1dHRvbnMoJGNoZWNrbWFyayk7XFxuICBmb250LXNpemU6IDA7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMnB4ICRtaW50LWNyZWFtO1xcbn1cXG5cXG5cXG4uYmFjay1mb3J3YXJkLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLmxvZ2luLWJ1dHRvbntcXG4gIGZvbnQtZmFtaWx5OiAkc21hbGwtZm9udDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhbWFyYW50aGU7XFxuICBjb2xvcjogJG1pbnQtY3JlYW07XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAycHggJGJsdWUtc2FwcGhpcmU7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6ICRtaW50LWNyZWFtO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5cXG4uYWdlbnQtbG9naW4tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRyb3NlLXRhdXBlO1xcbiAgZm9udC1mYW1pbHk6ICRzbWFsbC1mb250O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGNvbG9yOiAkbWludC1jcmVhbTtcXG4gIGJvcmRlcjogc29saWQgMnB4ICRtaW50LWNyZWFtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucGxhbmUtbG9nbyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9wYXBlci1wbGFuZS1yZWQtb3V0bGluZS5wbmcnKTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblwiLFwiLy8gJHNreS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoNywgMTAxLCAxMzMpLCByZ2IoMjU1LCAyNTUsIDI1NSkpO1xcbiRza3ktZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA3NjU4NSwgI0YzRjdGMCk7XFxuXFxuJG1pbnQtY3JlYW06ICNGM0Y3RjA7XFxuJGJsdWUtc2FwcGhpcmU6ICMwNzY1ODU7XFxuJHNpenpsaW5nLXJlZDogI0YyNTQ1QjtcXG4kYW1hcmFudGhlOiAjQTkzRjU1O1xcbiRyb3NlLXRhdXBlOiAjOEM1RTU4O1xcblxcbiR0aXRsZS1mb250OiAnWXVzZWkgTWFnaWMnLCBzYW5zLXNlcmlmO1xcbiRzbWFsbC1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG4kcmlnaHQtYXJyb3c6ICcuLi9pbWFnZXMvcmlnaHQtYXJyb3ctYW1hcmFudGgucG5nJztcXG4kbGVmdC1hcnJvdzogJy4uL2ltYWdlcy9sZWZ0LWFycm93LXRhdXBlLnBuZyc7XFxuJGNoZWNrbWFyazogJy4uL2ltYWdlcy9jaGVja21hcmsucG5nJztcXG4kZGlzYWJsZWQtY2hlY2ttYXJrOiAnLi4vaW1hZ2VzL2Rpc2FibGVkLWNoZWNrbWFyay5wbmcnO1xcblxcbkBtaXhpbiBiYWNrLWZvcndhcmQtYnV0dG9ucygkaW1hZ2UpIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRpbWFnZSk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5AbWl4aW4gbGlzdHMoJGRpcmVjdGlvbiwgJGp1c3RpZnkpIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIHNjcm9sbGluZ0xpc3QoJHdpZHRoLCAkc2hhZG93LWNvbG9yKSB7XFxuICBiYWNrZ3JvdW5kOiAkbWludC1jcmVhbTtcXG4gIGNvbG9yOiAkYmx1ZS1zYXBwaGlyZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogMjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICRzbWFsbC1mb250O1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDNweCAkc2hhZG93LWNvbG9yO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXCIsXCJzZWxlY3Qge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtaW50LWNyZWFtO1xcbiAgY29sb3I6ICRibHVlLXNhcHBoaXJlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICRzbWFsbC1mb250O1xcbn1cXG5cXG5vcHRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1pbnQtY3JlYW07XFxuICBjb2xvcjogJGJsdWUtc2FwcGhpcmU7XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiAkc21hbGwtZm9udDtcXG59XFxuXFxubGFiZWwge1xcbiAgY29sb3I6ICRibHVlLXNhcHBoaXJlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC1mYW1pbHk6ICR0aXRsZS1mb250O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLm5hbWUtaW5wdXQge1xcbiAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4uaWQtaW5wdXQge1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtaW50LWNyZWFtO1xcbiAgY29sb3I6ICRibHVlLXNhcHBoaXJlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6ICRzbWFsbC1mb250O1xcbn1cXG5cXG4uZGF0ZS1pbnB1dHMge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLnllYXItaW5wdXQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4uaGlkZGVuLWxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuXCIsXCIubG9naW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQzLCAyNDcsIDI0MCwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAycHggJGJsdWUtc2FwcGhpcmU7O1xcbn1cXG5cXG4ubG9naW4td2VsY29tZXtcXG4gIGNvbG9yOiAkYW1hcmFudGhlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4ubG9naW4tbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6ICRzbWFsbC1mb250O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmFnZW50LWxvZ2luLWluc3RydWN0aW9ucyB7XFxuICBjb2xvcjogJGFtYXJhbnRoZTtcXG59XFxuXFxuLmxvZ2luLWVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICRzaXp6bGluZy1yZWQ7XFxuICBmb250LWZhbWlseTogJHNtYWxsLWZvbnQ7XFxufVxcblwiLFwiLnRyaXAtZm9ybSB7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMjBweCAkbWludC1jcmVhbTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogNjUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5mb3JtLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblwiLFwiLnNlY3Rpb24taGVhZGluZyB7XFxuICBjb2xvcjogJGFtYXJhbnRoZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtaW50LWNyZWFtO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogc29saWQgMnB4ICRzaXp6bGluZy1yZWQ7XFxufVxcblxcbi5zcGVuZGluZy1kaXNwbGF5e1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogJHNtYWxsLWZvbnQ7XFxuICBjb2xvcjogJG1pbnQtY3JlYW07XFxufVxcblxcbi5teS10cmlwcyB7XFxuICBAaW5jbHVkZSBsaXN0cyhjb2x1bW4sIHNwYWNlLWJldHdlZW4pO1xcbn1cXG5cXG4udHJpcC1saXN0IHtcXG4gIEBpbmNsdWRlIHNjcm9sbGluZ0xpc3QoMjAwcHgsICRibHVlLXNhcHBoaXJlKVxcbn1cXG5cXG4udHJpcC1saXN0LWhlYWRpbmcge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNXB4ICRhbWFyYW50aGU7XFxuICBjb2xvcjogJHJvc2UtdGF1cGU7XFxuICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50cmlwLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRyaXAtY2FyZCB7XFxuICBsaW5lLWhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAkYmx1ZS1zYXBwaGlyZTtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMnB4ICRibHVlLXNhcHBoaXJlO1xcbiAgfVxcbn1cXG5cXG5cXG4udHJpcC1jYXJkLWhlYWRpbmcge1xcbiAgZm9udC1mYW1pbHk6ICR0aXRsZS1mb250O1xcbn1cXG5cXG4udHJpcC1pbWFnZSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi50b3RhbC1hbm51YWwtc3BlbmRpbmcge1xcbiAgY29sb3I6ICRhbWFyYW50aGU7XFxufVxcblwiLFwiLmFnZW50LWRhc2hib2FyZHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFnZW50LWxpc3Rze1xcbiAgQGluY2x1ZGUgbGlzdHMocm93LCBzcGFjZS1hcm91bmQpO1xcbn1cXG5cXG4uYWdlbnQtbGlzdCB7XFxuICBAaW5jbHVkZSBzY3JvbGxpbmdMaXN0KDI1MHB4LCAkcm9zZS10YXVwZSk7XFxufVxcblxcbi5hZ2VudC1jYXJkIHtcXG4gIEBleHRlbmQgLnRyaXAtY2FyZDtcXG59XFxuXFxuLmFnZW50LWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZDogJHNpenpsaW5nLXJlZDtcXG59XFxuXFxuLmRldGFpbHMtZm9yLWFnZW50IHtcXG4gIGhlaWdodDogMzAlO1xcbn1cXG5cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnYnV0dG9ucyc7XFxuQGltcG9ydCAnaW5wdXRzJztcXG5AaW1wb3J0ICdsb2dpbic7XFxuQGltcG9ydCAndHJpcC1mb3JtJztcXG5AaW1wb3J0ICdteS10cmlwcyc7XFxuQGltcG9ydCAnYWdlbnQtZGFzaGJvYXJkJztcXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6ICRza3ktZ3JhZGllbnQ7XFxuICBmb250LWZhbWlseTogJHRpdGxlLWZvbnQ7XFxuICBjb2xvcjogJG1pbnQtY3JlYW07XFxufVxcblxcbmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi51c2VyLWdyZWV0aW5nIHtcXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICRhbWFyYW50aGU7XFxufVxcblxcbi50cmF2ZWxlci1kYXNoYm9hcmQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpICB7XFxuICAudXNlci1ncmVldGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG5cXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5uYW1lLWlucHV0IHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG5cXG4gIC5pZC1pbnB1dCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuXFxuICAudHJpcC1mb3JtIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gIH1cXG5cXG4gIC50cmlwLWNhdGVnb3JpZXMsXFxuICAuYWdlbnQtbGlzdHMge1xcbiAgICBAaW5jbHVkZSBsaXN0cyhjb2x1bW4sIGZsZXgtc3RhcnQpO1xcbiAgfVxcblxcbiAgLnRyaXAtbGlzdCxcXG4gIC5hZ2VudC1saXN0IHtcXG4gICAgQGluY2x1ZGUgc2Nyb2xsaW5nTGlzdCgzNzVweCwgJHJvc2UtdGF1cGUpO1xcbiAgfVxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkgIHtcXG4gIC51c2VyLWdyZWV0aW5nIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAubG9naW4tZm9ybSB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAuaWQtaW5wdXQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgfVxcblxcbiAgLm5hbWUtaW5wdXQge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLnRyaXAtZm9ybSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuXFxuICAudHJpcC1jYXRlZ29yaWVzLFxcbiAgLmFnZW50LWxpc3RzIHtcXG4gICAgQGluY2x1ZGUgbGlzdHMoY29sdW1uLCBmbGV4LXN0YXJ0KTtcXG4gIH1cXG5cXG4gIC50cmlwLWxpc3QsXFxuICAuYWdlbnQtbGlzdCB7XFxuICAgIEBpbmNsdWRlIHNjcm9sbGluZ0xpc3QoMzAwcHgsICRyb3NlLXRhdXBlKTtcXG4gIH1cXG59XFxuXFxuXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJztcblxuY2xhc3MgQWdlbnQge1xuICBjb25zdHJ1Y3Rvcih0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhLCB0cmF2ZWxlckRhdGEpIHtcbiAgICB0aGlzLnRyaXBzID0gdHJpcERhdGEubWFwKHRyaXAgPT4gbmV3IFRyaXAodHJpcCwgZGVzdGluYXRpb25EYXRhKSk7XG4gICAgdGhpcy5wZW5kaW5nVHJpcHMgPSB0cmlwRGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9uRGF0YTtcbiAgICB0aGlzLmNsaWVudHMgPSB0cmF2ZWxlckRhdGEubWFwKHRyYXZlbGVyID0+IG5ldyBUcmF2ZWxlcih0cmF2ZWxlciwgdHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50O1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBkb21VcGRhdGVzID0ge1xuXG4gIGdyZWV0VHJhdmVsZXIobmFtZSwgdHlwZSkge1xuICAgIGNvbnN0IHVzZXJHcmVldGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWdyZWV0aW5nJyk7XG4gICAgdXNlckdyZWV0aW5nLmlubmVySFRNTCA9IGBXZWxjb21lLCAke25hbWV9LiA8YnI+IFdlIGhlYXIgeW91J3JlIGEgJHt0eXBlfS5gO1xuICB9LFxuXG4gIGRpc3BsYXlDYXRlZ29yeU9mVHJpcCh0cmlwcywgdHJpcENhdGVnb3J5KSB7XG4gICAgaWYodHJpcHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdHJpcENhdGVnb3J5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RyaXBDYXRlZ29yeX1gKTtcbiAgICAgIGxldCBkaXNwbGF5Q29udGVudCA9ICcnXG4gICAgICB0cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBkaXNwbGF5Q29udGVudCArPSBgPGRpdiBpZD0nJHt0cmlwLmlkfXRyaXAnIGNsYXNzPSd0cmlwLWNhcmQnPlxuICAgICAgICA8aDIgaWQ9JyR7dHJpcC5pZH10cmlwJyBjbGFzcz0ndHJpcC1jYXJkLWhlYWRpbmcnPiR7dHJpcC5kZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L2gyPjxoMiBpZD0nJHt0cmlwLmlkfXRyaXAnPiR7dHJpcC5kZXBhcnR1cmVEYXRlfTwvaDI+PGgyIGlkPScke3RyaXAuaWR9dHJpcCc+JHt0cmlwLmR1cmF0aW9uSW5EYXlzfSBEYXlzPC9oMj48L2Rpdj5gO1xuICAgICAgfSlcbiAgICAgIHRyaXBDYXRlZ29yeURpc3BsYXkuaW5uZXJIVE1MID0gZGlzcGxheUNvbnRlbnQ7XG4gICAgfVxuICB9LFxuXG4gIGRpc3BsYXlMaXN0Rm9yQWdlbnQobGlzdCwgcHJvcGVydHksIGFnZW50KSB7XG4gICAgICBsZXQgZGlzcGxheUNvbnRlbnQgPSAnJ1xuICAgICAgbGV0IHRpdGxlLCBkZXRhaWw7XG4gICAgICBhZ2VudFtwcm9wZXJ0eV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYocHJvcGVydHkgPT09ICd0cmlwcycpIHtcbiAgICAgICAgICB0aXRsZSA9IGl0ZW0uZGVzdGluYXRpb24uZGVzdGluYXRpb247XG4gICAgICAgICAgZGV0YWlsID0gYCR7aXRlbS5kZXBhcnR1cmVEYXRlfSwgJHtpdGVtLmR1cmF0aW9uSW5EYXlzfSBkYXlzLCAke2l0ZW0ubnVtYmVyT2ZUcmF2ZWxlcnN9IHRyYXZlbGVyc2BcbiAgICAgICAgfSBlbHNlIGlmKHByb3BlcnR5ID09PSAnY2xpZW50cycpIHtcbiAgICAgICAgICB0aXRsZSA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICBkZXRhaWwgPSBgJHtpdGVtLnRyaXBCb29rLmxlbmd0aH0gdG90YWwgdHJpcHNgXG4gICAgICAgIH0gZWxzZSBpZihwcm9wZXJ0eSA9PT0gJ2Rlc3RpbmF0aW9ucycpIHtcbiAgICAgICAgICB0aXRsZSA9IGl0ZW0uZGVzdGluYXRpb247XG4gICAgICAgICAgZGV0YWlsID0gYCQke2l0ZW0uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbn0gZmxpZ2h0YFxuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlDb250ZW50ICs9IGA8ZGl2IGlkPScke2l0ZW0uaWR9YWdlbnQnIGNsYXNzPSdhZ2VudC1jYXJkIGFnZW50LSR7cHJvcGVydHl9LWNhcmQnPlxuICAgICAgICA8aDIgaWQ9JyR7aXRlbS5pZH1hZ2VudCcgY2xhc3M9J2FnZW50LWNhcmQtdGl0bGUnPiR7dGl0bGV9PC9oMj48aDIgaWQ9JyR7aXRlbS5pZH1hZ2VudCcgY2xhc3M9J2FnZW50LWNhcmQtZGV0YWlsJz4ke2RldGFpbH08L2gyPjwvZGl2PmA7XG4gICAgICB9KVxuICAgICAgbGlzdC5pbm5lckhUTUwgPSBkaXNwbGF5Q29udGVudDtcbiAgfSxcblxuICBkaXNwbGF5T25lTGluZXJzKGVsZW1lbnQsIHRleHQpIHtcbiAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gIH0sXG5cbiAgYWx0ZXJDbGFzc0xpc3QobWV0aG9kLCBjbGFzc05hbWUsIGVsZW1lbnQpIHtcbiAgICBpZiAobWV0aG9kID09PSAnYWRkJykge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdyZW1vdmUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0sXG5cbmFkZFRleHRPcHRpb25zVG9Ecm9wZG93bihkcm9wZG93biwgYXJyYXksIHR5cGUpIHtcbiAgICBsZXQgaXRlbVRhbGx5ID0gMTtcbiAgICAgYXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICBpZih0eXBlID09PSAnZGVzdGluYXRpb24nKSB7XG4gICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBpdGVtLmlkO1xuICAgICAgICAgbmV3T3B0aW9uLmlubmVyVGV4dCA9IGl0ZW0uZGVzdGluYXRpb247XG4gICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICd0cmF2ZWxlcicpIHtcbiAgICAgICAgIG5ld09wdGlvbi52YWx1ZSA9IGl0ZW0uaWQ7XG4gICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBuZXdPcHRpb24udmFsdWUgPSBpdGVtVGFsbHk7XG4gICAgICAgICBuZXdPcHRpb24uaW5uZXJUZXh0ID0gaXRlbTtcbiAgICAgICB9XG4gICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbiAgICAgICAgaXRlbVRhbGx5KytcbiAgICAgfSlcbiB9LFxuXG5hZGROdW1iZXJzVG9Ecm9wZG93bnMoZHJvcGRvd24sIG51bWJlckNob2ljZXMpIHtcbiAgICAgbnVtYmVyQ2hvaWNlcy5mb3JFYWNoKG51bWJlciA9PiB7XG4gICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgbmV3U2VsZWN0aW9uLnZhbHVlID0gbnVtYmVyO1xuICAgICAgIG5ld1NlbGVjdGlvbi5pbm5lclRleHQgPSBudW1iZXI7XG4gICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobmV3U2VsZWN0aW9uKTtcbiAgICAgfSk7XG4gfSxcblxuIGRpc3BsYXlUcmlwRGV0YWlscyh0cmlwLCBlbGVtZW50KSB7XG4gICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgbGV0IHRlbnNlZExhbmd1YWdlLCBtZXNzYWdlO1xuICAgaWYodHJpcC5zdGF0dXMgPT09ICdwYXN0Jykge1xuICAgICB0ZW5zZWRMYW5ndWFnZSA9IFsndHJhdmVsZWQnLCAnbGVmdCcsICdyZXR1cm5lZCddO1xuICAgICBtZXNzYWdlID0gJ1dlIGhvcGUgeW91IGVuam95ZWQgeW91ciBhZHZlbnR1cmUhJ1xuICAgfSBlbHNlIGlmKHRyaXAuc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgdGVuc2VkTGFuZ3VhZ2UgPSBbJ3dvdWxkIGxpa2UgdG8gdHJhdmVsJywgJ3BsYW4gdG8gbGVhdmUnLCAncmV0dXJuJ107XG4gICAgIG1lc3NhZ2UgPSAnVGhpcyB0cmlwIGlzIHBlbmRpbmcuIFN0YW5kYnkgZm9yIHlvdXIgYWdlbnQgdG8gYXBwcm92ZSB0aGlzIHRyaXAgYW5kIHByb3ZpZGUgeW91IHdpdGggYSBsaXN0IG9mIHN1Z2dlc3RlZCBhZHZlbnR1cmVzIGF0IHlvdXIgZGVzdGluYXRpb246J1xuICAgfSBlbHNlIGlmKHRyaXAuc3RhdHVzID09PSAncHJlc2VudCcgfHwgdHJpcC5zdGF0dXMgPT09ICd1cGNvbWluZycpIHtcbiAgICAgdGVuc2VkTGFuZ3VhZ2UgPSBbJ2FyZSB0cmF2ZWxpbmcnLCAnbGVhdmUnLCAncmV0dXJuJ107XG4gICAgIG1lc3NhZ2UgPSAnWW91ciB0cmlwIGlzIGFwcHJvdmVkISBTdGFuZGJ5IGZvciB5b3VyIGFnZW50IHRvIHByb3ZpZGUgeW91IHdpdGggYSBsaXN0IG9mIHN1Z2dlc3RlZCBhZHZlbnR1cmVzIGF0IHlvdXIgZGVzdGluYXRpb246JztcbiAgIH1cbiAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9J3RyaXAtaW1hZ2UnIHNyYz0ke3RyaXAuZGVzdGluYXRpb24uaW1hZ2V9PjxoMz5Zb3UgJHt0ZW5zZWRMYW5ndWFnZVswXX0gdG8gJHt0cmlwLmRlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvaDM+PGgzPllvdSBhbmQgJHt0cmlwLm51bWJlck9mVHJhdmVsZXJzIC0gMX0gb3RoZXJzICR7dGVuc2VkTGFuZ3VhZ2VbMV19IG9uICR7dHJpcC5kZXBhcnR1cmVEYXRlfSBhbmQgJHt0ZW5zZWRMYW5ndWFnZVsyXX0gJHt0cmlwLmR1cmF0aW9uSW5EYXlzfSBkYXlzIGxhdGVyLjwvaDM+PGg0PiR7bWVzc2FnZX08L2g0PjxoND4ke3RyaXAuc3VnZ2VzdGVkQWN0aXZpdGllc308L2g0PmA7XG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvY2hlY2ttYXJrLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2xlZnQtYXJyb3ctdGF1cGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGFwZXItcGxhbmUtcmVkLW91dGxpbmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcmlnaHQtYXJyb3ctYW1hcmFudGgucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9pbmRleC5zY3NzJztcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJztcbmltcG9ydCBUcmlwIGZyb20gJy4vdHJpcCc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9hZ2VudCc7XG5pbXBvcnQgbmV0d29ya1JlcXVlc3RzIGZyb20gJy4vbmV0d29ya1JlcXVlc3RzJztcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcyc7XG5cbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4nKTtcbmNvbnN0IGxvZ2luTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdW1teS1wbGFuZScpO1xuY29uc3QgdHJhdmVsZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmFtZS1pbnB1dCcpO1xuY29uc3QgdHJhdmVsZXJJRElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlkLWlucHV0Jyk7XG5jb25zdCB0cmF2ZWxlckxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuY29uc3QgbG9naW5FcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tZXJyb3ItbWVzc2FnZScpO1xuY29uc3QgYWdlbnRMb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1sb2dpbi1idXR0b24nKTtcblxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLWJ1dHRvbicpO1xuY29uc3QgbmV3VHJpcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdHJpcC1idXR0b24nKTtcbmNvbnN0IG15VHJpcHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktdHJpcHMtYnV0dG9uJyk7XG5jb25zdCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nb3V0LWJ1dHRvbicpO1xuXG5jb25zdCBob21lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2ZWxlci1kYXNoYm9hcmQnKTtcbmNvbnN0IHRyYXZlbGVyR3JlZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1ncmVldGluZycpO1xuY29uc3QgY3JlYXRlVHJpcEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1mb3JtJyk7XG5jb25zdCBmb3JtUGFnZXMgPSBbXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmXzEnKSxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZfMicpLFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZl8zJyksXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmXzQnKVxuXTtcbmNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVyYXRpb24taW5wdXQnKTtcbmNvbnN0IG5ld1RyaXBZZWFyc0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLXllYXItaW5wdXQnKTtcbmNvbnN0IG1vbnRoc0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10cmlwLW1vbnRoLWlucHV0Jyk7XG5jb25zdCBkYXlzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRyaXAtZGF0ZS1pbnB1dCcpO1xuY29uc3QgdHJhdmVsZXJzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmVsLXBhcnR5LWlucHV0Jyk7XG5jb25zdCBkZXN0aW5hdGlvbnNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbi1pbnB1dCcpO1xuY29uc3QgY29udGludWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGludWUtYnV0dG9uJyk7XG5jb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnV0dG9uJyk7XG5jb25zdCBmaW5pc2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmluaXNoLWJ1dHRvbicpO1xuY29uc3QgbmV3VHJpcERldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRyaXAtZGV0YWlscycpO1xuXG5jb25zdCBteVRyaXBzUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS10cmlwcycpO1xuY29uc3Qgc3BlbmRpbmdZZWFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVhci1pbnB1dCcpO1xuY29uc3QgdG90YWxTcGVuZGluZ0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtYW5udWFsLXNwZW5kaW5nJyk7XG5jb25zdCB0cmlwRGV0YWlsVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmlwLWRldGFpbC1wYWdlJyk7XG5cbmNvbnN0IGFnZW50RGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFnZW50LWRhc2hib2FyZCcpO1xuY29uc3QgYWdlbnREYXNoYm9hcmREaXNwbGF5cyA9IFtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsaWVudHMnKSxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXBzJyksXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXN0aW5hdGlvbnMnKVxuXVxuY29uc3QgYWdlbnRUcmlwRGV0YWlsc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzLWZvci1hZ2VudCcpO1xuY29uc3Qgc3VnZ2VzdGVkQWN0aXZpdGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWdnZXN0ZWQtYWN0aXZpdGllcy1pbnB1dCcpO1xuY29uc3Qgc3VibWl0U3VnZ2VzdGlvbnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LXN1Z2dlc3RlZC1hY3Rpdml0aWVzJylcblxubGV0IHRyYXZlbGVyLCBhZ2VudDtcblxud2luZG93Lm9ubG9hZCA9IGxvYWRMb2dpbkRyb3Bkb3duKCk7XG5cbnRyYXZlbGVyTG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkVHJhdmVsZXJEYXNoYm9hcmQpO1xuYWdlbnRMb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRBZ2VudERhc2hib2FyZCk7XG5teVRyaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVRyYXZlbGVyc1RyaXBzKTtcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXR1cm5Ib21lKTtcbmNvbnRpbnVlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udGludWVGb3JtKTtcbmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnb0JhY2tJbkZvcm0pO1xuZmluaXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VHJpcCk7XG5teVRyaXBzUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXdUcmlwRGV0YWlscyk7XG5uZXdUcmlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0dXJuSG9tZSk7XG5zcGVuZGluZ1llYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkaXNwbGF5U3BlbmRpbmcpO1xubG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0dXJuVG9Mb2dpblBhZ2UpO1xuYWdlbnREYXNoYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5VHJpcERldGFpbHNGb3JBZ2VudCk7XG5zdWJtaXRTdWdnZXN0aW9uc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFN1Z2dlc3Rpb25zKTtcblxuZnVuY3Rpb24gbG9hZExvZ2luRHJvcGRvd24oKXtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIG5ldHdvcmtSZXF1ZXN0cy5nZXREYXRhKCd0cmF2ZWxlcnMnKSxcbiAgICBdKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgdHJhdmVsZXJEYXRhID0gZGF0YVswXS50cmF2ZWxlcnM7XG4gICAgICBkb21VcGRhdGVzLmFkZFRleHRPcHRpb25zVG9Ecm9wZG93bih0cmF2ZWxlck5hbWVJbnB1dCwgdHJhdmVsZXJEYXRhLCAndHJhdmVsZXInKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG59XG5cbmZ1bmN0aW9uIGxvYWRUcmF2ZWxlckRhc2hib2FyZCgpe1xuICBpZihhcHByb3ZlVHJhdmVsZXJMb2dpbigpKSB7XG4gICAgcG9wdWxhdGVQYWdlSW5mbygndHJhdmVsZXInKTtcbiAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICdTb3JyeSwgd2UgZG8gbm90IHJlY29nbml6ZSB0aGF0IGNvbWJpbmF0aW9uIG9mIG5hbWUgYW5kIElELiBISU5UIChmb3IgRGF2aWQpIC0tIHRoZSBkcm9wZG93biBtZW51IGxpc3RzIG5hbWVzIGluIG9yZGVyIGJ5IElELCBzbywgZm9yIGV4YW1wbGUsIHRoZSBmaXJzdCBuYW1lIGluIHRoZSBtZW51IGNvcnJlc3BvbmRzIHRvIElEIFwiMVwiLic7XG4gICAgICBkb21VcGRhdGVzLmRpc3BsYXlPbmVMaW5lcnMobG9naW5FcnJvck1lc3NhZ2UsIGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbmZ1bmN0aW9uIGxvYWRBZ2VudERhc2hib2FyZCgpIHtcbiAgcG9wdWxhdGVQYWdlSW5mbygnYWdlbnQnKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVQYWdlSW5mbyh1c2VyKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICBuZXR3b3JrUmVxdWVzdHMuZ2V0RGF0YSgndHJhdmVsZXJzJyksXG4gICAgICBuZXR3b3JrUmVxdWVzdHMuZ2V0RGF0YSgndHJpcHMnKSxcbiAgICAgIG5ldHdvcmtSZXF1ZXN0cy5nZXREYXRhKCdkZXN0aW5hdGlvbnMnKVxuICAgIF0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBjb25zdCB0cmF2ZWxlckRhdGEgPSBkYXRhWzBdLnRyYXZlbGVycztcbiAgICAgIGNvbnN0IHRyaXBEYXRhID0gZGF0YVsxXS50cmlwcztcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uRGF0YSA9IGRhdGFbMl0uZGVzdGluYXRpb25zO1xuICAgICAgYWdlbnQgPSBuZXcgQWdlbnQodHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSwgdHJhdmVsZXJEYXRhKTtcbiAgICAgIGJ1aWxkUGFnZSh1c2VyLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhLCB0cmF2ZWxlckRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gYXBwcm92ZVRyYXZlbGVyTG9naW4oKSB7XG4gIGNvbnN0IGlkRW50cnkgPSBOdW1iZXIodHJhdmVsZXJJRElucHV0LnZhbHVlKTtcbiAgY29uc3QgbmFtZUVudHJ5SUQgPSBOdW1iZXIodHJhdmVsZXJOYW1lSW5wdXQudmFsdWUpO1xuICByZXR1cm4gaWRFbnRyeSA9PT0gbmFtZUVudHJ5SUQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGFnZSh1c2VyLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhLCB0cmF2ZWxlckRhdGEpe1xuICBpZih1c2VyID09PSAndHJhdmVsZXInKSB7XG4gICAgYnVpbGRUcmF2ZWxlclBhZ2UodHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSwgdHJhdmVsZXJEYXRhKTtcbiAgfSBlbHNlIGlmKHVzZXIgPT09ICdhZ2VudCcpIHtcbiAgICBidWlsZEFnZW50UGFnZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJhdmVsZXJQYWdlKHRyaXBEYXRhLCBkZXN0aW5hdGlvbkRhdGEsIHRyYXZlbGVyRGF0YSkge1xuICBjcmVhdGVDdXJyZW50VHJhdmVsZXIodHJhdmVsZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKTtcbiAgbG9hZFRyYXZlbGVySG9tZXBhZ2UoKTtcbiAgZG9tVXBkYXRlcy5ncmVldFRyYXZlbGVyKHRyYXZlbGVyLm5hbWUsIHRyYXZlbGVyLnR5cGUpO1xuICB3aW5kb3cuc2V0VGltZW91dChmYWRlT3V0R3JlZXRpbmcsIDQwMDApO1xuICB3aW5kb3cuc2V0VGltZW91dChmYWRlSW5Gb3JtLCA0MTAwKTtcbiAgcG9wdWxhdGVOZXdUcmlwRm9ybURyb3Bkb3ducygpO1xufVxuXG5mdW5jdGlvbiBidWlsZEFnZW50UGFnZSgpIHtcbiAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgnYWRkJywgJ2FnZW50LWJhY2tncm91bmQnLCBwYWdlKTtcbiAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGxvZ2luUGFnZSk7XG4gIGNvbnN0IGFnZW50RWxlbWVudHMgPSBbYWdlbnREYXNoYm9hcmQsIGxvZ291dEJ1dHRvbl07XG4gIGFnZW50RWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBlbGVtZW50KSlcbiAgYWdlbnREYXNoYm9hcmREaXNwbGF5cy5mb3JFYWNoKGRpc3BsYXkgPT4ge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUxpc3RGb3JBZ2VudChkaXNwbGF5LCBkaXNwbGF5LmNsYXNzTGlzdFswXSwgYWdlbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVOZXdUcmlwRm9ybURyb3Bkb3ducygpIHtcbiAgY29uc3QgcG9zc2libGVNb250aHMgPSBbJ0phbnVhcnknLCdGZWJydWFyeScsJ01hcmNoJywnQXByaWwnLCdNYXknLCdKdW5lJywnSnVseScsJ0F1Z3VzdCcsJ1NlcHRlbWJlcicsJ09jdG9iZXInLCdOb3ZlbWJlcicsJ0RlY2VtYmVyJ107XG4gIGNvbnN0IHBvc3NpYmxlRGF0ZXMgPSBbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzFdO1xuICBjb25zdCBwb3NzaWJsZU51bWJlcnNPZlRyYXZlbGVycyA9IFsxLDIsMyw0LDUsNiw3LDgsOSwxMF07XG4gIGRvbVVwZGF0ZXMuYWRkVGV4dE9wdGlvbnNUb0Ryb3Bkb3duKGRlc3RpbmF0aW9uc0Ryb3Bkb3duLCBhZ2VudC5kZXN0aW5hdGlvbnMsICdkZXN0aW5hdGlvbicpO1xuICBkb21VcGRhdGVzLmFkZFRleHRPcHRpb25zVG9Ecm9wZG93bihtb250aHNEcm9wZG93biwgcG9zc2libGVNb250aHMsJ21vbnRoJyk7XG4gIGRvbVVwZGF0ZXMuYWRkTnVtYmVyc1RvRHJvcGRvd25zKGRheXNEcm9wZG93biwgcG9zc2libGVEYXRlcyk7XG4gIGRvbVVwZGF0ZXMuYWRkTnVtYmVyc1RvRHJvcGRvd25zKHRyYXZlbGVyc0Ryb3Bkb3duLCBwb3NzaWJsZU51bWJlcnNPZlRyYXZlbGVycyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRUcmF2ZWxlcih0cmF2ZWxlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbkRhdGEpIHtcbiAgY29uc3QgY3VycmVudFRyYXZlbGVySUQgPSBOdW1iZXIodHJhdmVsZXJJRElucHV0LnZhbHVlKTtcbiAgY29uc3QgY3VycmVudFRyYXZlbGVyRGF0YSA9IHRyYXZlbGVyRGF0YS5maW5kKGVudHJ5ID0+IGVudHJ5LmlkID09PSBjdXJyZW50VHJhdmVsZXJJRCk7XG4gIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKGN1cnJlbnRUcmF2ZWxlckRhdGEsIHRyaXBEYXRhLCBkZXN0aW5hdGlvbkRhdGEpO1xufVxuXG5mdW5jdGlvbiBsb2FkVHJhdmVsZXJIb21lcGFnZSgpIHtcbiAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGxvZ2luUGFnZSk7XG4gIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ2FkZCcsICdoaWRkZW4nLCBsb2dpbkxvZ28pO1xuICBjb25zdCBob21lRWxlbWVudHMgPSBbaG9tZVBhZ2UsIG15VHJpcHNCdXR0b24sIGxvZ291dEJ1dHRvbiwgaG9tZUJ1dHRvbiwgbmV3VHJpcEJ1dHRvbl07XG4gIGhvbWVFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgncmVtb3ZlJywgJ2hpZGRlbicsIGVsZW1lbnQpKVxufVxuXG5mdW5jdGlvbiBmYWRlT3V0R3JlZXRpbmcoKSB7XG4gIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ2FkZCcsICdoaWRkZW4nLCB0cmF2ZWxlckdyZWV0aW5nKVxufVxuXG5mdW5jdGlvbiBmYWRlSW5Gb3JtKCkge1xuICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgY3JlYXRlVHJpcEZvcm0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUcmF2ZWxlcnNUcmlwcygpe1xuICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgbXlUcmlwc1BhZ2UpO1xuICBjb25zdCB0b0hpZGUgPSBbaG9tZVBhZ2UsIG5ld1RyaXBEZXRhaWxzLCB0cmlwRGV0YWlsVmlld107XG4gIGhpZGVJdGVtcyh0b0hpZGUpO1xuICB0cmF2ZWxlci50cmlwQm9vay5mb3JFYWNoKHRyaXAgPT4ge1xuICAgIGlmKHRyaXAuc3RhdHVzICE9PSAncGVuZGluZycpe1xuICAgICAgdHJpcC5nZXRUcmlwVGltaW5nKCk7XG4gICAgfVxuICB9KTtcbiAgc3BlbmRpbmdZZWFySW5wdXQudmFsdWUgPSAwO1xuICBkb21VcGRhdGVzLmRpc3BsYXlPbmVMaW5lcnModG90YWxTcGVuZGluZ0Rpc3BsYXksICcnKTtcbiAgZGlzcGxheVRyaXBMaXN0cygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VHJpcExpc3RzKCkge1xuICBjb25zdCB0cmlwU3RhdHVzVmFsdWVzID0gWydwYXN0JywgJ3ByZXNlbnQnLCAndXBjb21pbmcnLCAncGVuZGluZyddO1xuICB0cmlwU3RhdHVzVmFsdWVzLmZvckVhY2goc3RhdHVzID0+IHtcbiAgICBjb25zdCB0cmlwcyA9IHRyYXZlbGVyLmdldFRyaXBzQnlTdGF0dXMoc3RhdHVzKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlDYXRlZ29yeU9mVHJpcCh0cmlwcywgc3RhdHVzKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNwZW5kaW5nKCkge1xuICBpZihzcGVuZGluZ1llYXJJbnB1dC52YWx1ZSAhPT0gJzAnKXtcbiAgICBjb25zdCBzZWxlY3RlZFllYXIgPSBOdW1iZXIoc3BlbmRpbmdZZWFySW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IHNwZW5kaW5nID0gdHJhdmVsZXIuY2FsY3VsYXRlQW5udWFsVHJhdmVsU3BlbmRpbmcoc2VsZWN0ZWRZZWFyKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlPbmVMaW5lcnModG90YWxTcGVuZGluZ0Rpc3BsYXksIGAke3NwZW5kaW5nfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHVybkhvbWUoKSB7XG4gIGNvbnN0IHRvSGlkZSA9IFtteVRyaXBzUGFnZSwgbmV3VHJpcERldGFpbHMsIHRyaXBEZXRhaWxWaWV3XTtcbiAgaGlkZUl0ZW1zKHRvSGlkZSk7XG4gIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBob21lUGFnZSk7XG4gIHJlc2V0Rm9ybSgpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Ub0xvZ2luUGFnZSgpIHtcbiAgY29uc3QgdG9IaWRlID0gW2hvbWVQYWdlLCBteVRyaXBzUGFnZSwgbmV3VHJpcERldGFpbHMsIHRyaXBEZXRhaWxWaWV3LCBjcmVhdGVUcmlwRm9ybSwgYWdlbnREYXNoYm9hcmQsIG15VHJpcHNCdXR0b24sIGxvZ291dEJ1dHRvbiwgaG9tZUJ1dHRvbl07XG4gIGhpZGVJdGVtcyh0b0hpZGUpO1xuICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgbG9naW5QYWdlKTtcbiAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgncmVtb3ZlJywgJ2hpZGRlbicsIGxvZ2luTG9nbyk7XG4gIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ3JlbW92ZScsICdhZ2VudC1iYWNrZ3JvdW5kJywgcGFnZSk7XG4gIHRyYXZlbGVyTmFtZUlucHV0LnZhbHVlID0gMDtcbiAgdHJhdmVsZXJJRElucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcbiAgY3JlYXRlVHJpcEZvcm0ucmVzZXQoKTtcbiAgY29udGludWVCdXR0b24uaWQgPSAnMCc7XG4gIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ3JlbW92ZScsICdoaWRkZW4nLCBjb250aW51ZUJ1dHRvbik7XG4gIGlmKCFiYWNrQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuICAgIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ2FkZCcsICdoaWRkZW4nLCBiYWNrQnV0dG9uKTtcbiAgfVxuICBmb3JtUGFnZXMuZm9yRWFjaChwYWdlID0+IHtcbiAgICBpZihwYWdlLmlkID09PSAnZl8xJyl7XG4gICAgICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgcGFnZSk7XG4gICAgfSBlbHNlIGlmKCFwYWdlLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuICAgICAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIHBhZ2UpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiB2aWV3VHJpcERldGFpbHMoZXZlbnQpIHtcbiAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndHJpcC1jYXJkJykgfHwgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCd0cmlwLWNhcmQnKSl7XG4gICAgY29uc3QgdHJpcElEID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKTtcbiAgICBjb25zdCB0cmlwID0gdHJhdmVsZXIudHJpcEJvb2suZmluZChlbnRyeSA9PiBlbnRyeS5pZCA9PT0gdHJpcElEKTtcbiAgICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdhZGQnLCAnaGlkZGVuJywgbXlUcmlwc1BhZ2UpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRyaXBEZXRhaWxzKHRyaXAsIHRyaXBEZXRhaWxWaWV3KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVOZXdUcmlwKCkge1xuICBpZihjaGVja0ZvckVtcHR5SW5wdXRzKCkpe1xuICAgIGNvbnN0IHRyaXBEYXRhID0ge1xuICAgICAgaWQ6IE51bWJlcihhZ2VudC50cmlwcy5sZW5ndGgpLFxuICAgICAgdXNlcklEOiBOdW1iZXIodHJhdmVsZXIuaWQpLFxuICAgICAgZGVzdGluYXRpb25JRDogTnVtYmVyKGRlc3RpbmF0aW9uc0Ryb3Bkb3duLnZhbHVlKSxcbiAgICAgIHRyYXZlbGVyczogTnVtYmVyKHRyYXZlbGVyc0Ryb3Bkb3duLnZhbHVlKSxcbiAgICAgIGRhdGU6IGAke2Zvcm1hdERhdGUoKX1gLFxuICAgICAgZHVyYXRpb246IE51bWJlcihkdXJhdGlvbklucHV0LnZhbHVlKSxcbiAgICAgIHN0YXR1czoncGVuZGluZycsXG4gICAgICBzdWdnZXN0ZWRBY3Rpdml0aWVzOltdXG4gICAgfVxuICAgIGNvbnN0IHRvSGlkZSA9IFtmaW5pc2hCdXR0b24sIGJhY2tCdXR0b24sIGZvcm1QYWdlc1szXV07XG4gICAgaGlkZUl0ZW1zKHRvSGlkZSk7XG4gICAgY29uc3QgbmV3VHJpcCA9IG5ldyBUcmlwKHRyaXBEYXRhLCB0cmF2ZWxlci5kZXN0aW5hdGlvbnMpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVRyaXBEZXRhaWxzKG5ld1RyaXAsIG5ld1RyaXBEZXRhaWxzKTtcbiAgICBuZXR3b3JrUmVxdWVzdHMuY3JlYXRlT3JBbHRlclRyaXAoJ3RyaXBzJywgdHJpcERhdGEsIHRyYXZlbGVyLCBhZ2VudCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ01JU1NJTkcgVFJJUCBJTkZPUk1BVElPTicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGVJdGVtcyhpdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpe1xuICAgICAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgnYWRkJywgJ2hpZGRlbicsIGl0ZW0pO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JFbXB0eUlucHV0cygpIHtcbiAgcmV0dXJuIGRlc3RpbmF0aW9uc0Ryb3Bkb3duLnZhbHVlICE9PSAwICYmXG4gIG5ld1RyaXBZZWFyc0Ryb3Bkb3duLnZhbHVlICE9PSAwICYmXG4gIG1vbnRoc0Ryb3Bkb3duLnZhbHVlICE9PSAwICYmXG4gIGRheXNEcm9wZG93bi52YWx1ZSAhPT0gMCAmJlxuICBkdXJhdGlvbklucHV0LnZhbHVlICE9PSBcIlwiICYmXG4gIHRyYXZlbGVyc0Ryb3Bkb3duLnZhbHVlICE9PSAwXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoKSB7XG4gIHJldHVybiBgJHtuZXdUcmlwWWVhcnNEcm9wZG93bi52YWx1ZX0vJHttb250aHNEcm9wZG93bi52YWx1ZX0vJHtkYXlzRHJvcGRvd24udmFsdWV9YDtcbn1cblxuZnVuY3Rpb24gY29udGludWVGb3JtKCkge1xuICBjb25zdCBwYWdlTnVtYmVyID0gcGFyc2VJbnQoY29udGludWVCdXR0b24uaWQpO1xuICBjb25zdCBjdXJyZW50Rm9ybVBhZ2UgPSBmb3JtUGFnZXNbcGFnZU51bWJlcl07XG4gIGNvbnN0IG5leHRGb3JtUGFnZSA9IGZvcm1QYWdlc1twYWdlTnVtYmVyICsgMV07XG4gIGRvbVVwZGF0ZXMuYWx0ZXJDbGFzc0xpc3QoJ2FkZCcsICdoaWRkZW4nLCBjdXJyZW50Rm9ybVBhZ2UpO1xuICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdyZW1vdmUnLCAnaGlkZGVuJywgbmV4dEZvcm1QYWdlKTtcbiAgY29udGludWVCdXR0b24uaWQgPSBgJHtwYWdlTnVtYmVyICsgMX1gO1xuICBhZGp1c3RDb250aW51ZUJ1dHRvbklEKCcxJywnMycsIFsncmVtb3ZlJywgJ2FkZCddKTtcbn1cblxuZnVuY3Rpb24gZ29CYWNrSW5Gb3JtKCkge1xuICBjb25zdCBwYWdlTnVtYmVyID0gcGFyc2VJbnQoY29udGludWVCdXR0b24uaWQpO1xuICBjb25zdCBjdXJyZW50Rm9ybVBhZ2UgPSBmb3JtUGFnZXNbcGFnZU51bWJlcl07XG4gIGNvbnN0IHByZXZpb3VzRm9ybVBhZ2UgPSBmb3JtUGFnZXNbcGFnZU51bWJlciAtIDFdO1xuICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KCdhZGQnLCAnaGlkZGVuJywgY3VycmVudEZvcm1QYWdlKTtcbiAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdCgncmVtb3ZlJywgJ2hpZGRlbicsIHByZXZpb3VzRm9ybVBhZ2UpO1xuICBjb250aW51ZUJ1dHRvbi5pZCA9IGAke3BhZ2VOdW1iZXIgLSAxfWA7XG4gIGFkanVzdENvbnRpbnVlQnV0dG9uSUQoJzAnLCcyJywgWydhZGQnLCAncmVtb3ZlJ10pXG59XG5cbmZ1bmN0aW9uIGFkanVzdENvbnRpbnVlQnV0dG9uSUQoYSwgYiwgYXJyYXkpIHtcbiAgaWYgKGNvbnRpbnVlQnV0dG9uLmlkID09PSBhKSB7XG4gICAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdChhcnJheVswXSwgJ2hpZGRlbicsIGJhY2tCdXR0b24pO1xuICB9XG4gIGlmKGNvbnRpbnVlQnV0dG9uLmlkID09PSBiKSB7XG4gICAgZG9tVXBkYXRlcy5hbHRlckNsYXNzTGlzdChhcnJheVsxXSwgJ2hpZGRlbicsIGNvbnRpbnVlQnV0dG9uKTtcbiAgICBkb21VcGRhdGVzLmFsdGVyQ2xhc3NMaXN0KGFycmF5WzBdLCAnaGlkZGVuJywgZmluaXNoQnV0dG9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VHJpcERldGFpbHNGb3JBZ2VudChldmVudCkge1xuICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZ2VudC10cmlwcy1jYXJkJykgfHwgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZ2VudC10cmlwcy1jYXJkJykpIHtcbiAgICBhZ2VudFRyaXBEZXRhaWxzQm94LnNob3dNb2RhbCgpO1xuICAgIGFnZW50VHJpcERldGFpbHNCb3guaWQgPSBgJHtldmVudC50YXJnZXQuaWR9bW9kYWxgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFN1Z2dlc3Rpb25zKCkge1xuICBjb25zdCB0cmlwID0gYWdlbnQudHJpcHMuZmluZCh0cmlwID0+IHRyaXAuaWQgPT09IHBhcnNlSW50KGFnZW50VHJpcERldGFpbHNCb3guaWQpKTtcbiAgY29uc3QgYWN0aXZpdGllcyA9IHN1Z2dlc3RlZEFjdGl2aXRpZXMudmFsdWU7XG4gIGNvbnN0IHRyaXBEYXRhID0ge2lkOiB0cmlwLmlkLCBzdWdnZXN0ZWRBY3Rpdml0aWVzOiBhY3Rpdml0aWVzLnNwbGl0KCcsJyl9XG4gIG5ldHdvcmtSZXF1ZXN0cy5jcmVhdGVPckFsdGVyVHJpcCgndXBkYXRlVHJpcCcsIHRyaXBEYXRhLCB0cmF2ZWxlciwgYWdlbnQpO1xuICBhZ2VudFRyaXBEZXRhaWxzQm94LmNsb3NlKCk7XG59XG4iLCJjb25zdCBuZXR3b3JrUmVxdWVzdHMgPSB7XG5cbiAgZ2V0RGF0YShlbmRwb2ludCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke2VuZHBvaW50fWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9LFxuXG4gIGNyZWF0ZU9yQWx0ZXJUcmlwKGVuZHBvaW50LCB0cmlwLCB0cmF2ZWxlciwgYWdlbnQpIHtcbiAgICBjb25zdCBwb3N0ID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmlwKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvJHtlbmRwb2ludH1gLCBwb3N0KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICB0aGlzLmdldERhdGEoJ3RyaXBzJyksXG4gICAgICAgICAgXSlcbiAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RyaXBEYXRhID0gZGF0YVswXS50cmlwcztcbiAgICAgICAgICAgIGlmKHRyYXZlbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdHJhdmVsZXIudHJpcEJvb2sgPSB0cmF2ZWxlci5nZXRUcmlwcyhuZXdUcmlwRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZ2VudC50cmlwcyA9IG5ld1RyaXBEYXRhO1xuICAgICAgICAgIH0pO1xuXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldHdvcmtSZXF1ZXN0cztcbiIsImltcG9ydCBUcmlwIGZyb20gJy4vdHJpcCc7XG5cbmNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhLCBhbGxUcmlwRGF0YSwgYWxsRGVzdGluYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlckRhdGEubmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0cmF2ZWxlckRhdGEudHJhdmVsZXJUeXBlO1xuICAgIHRoaXMuZGVzdGluYXRpb25zID0gYWxsRGVzdGluYXRpb25EYXRhO1xuICAgIHRoaXMudHJpcEJvb2sgPSB0aGlzLmdldFRyaXBzKGFsbFRyaXBEYXRhKTtcbiAgfVxuXG4gIGdldFRyaXBzKGRhdGEpIHtcbiAgICBsZXQgdXNlclRyaXBzID0gZGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gICAgcmV0dXJuIHVzZXJUcmlwcy5tYXAodHJpcCA9PiBuZXcgVHJpcCh0cmlwLCB0aGlzLmRlc3RpbmF0aW9ucykpO1xuICB9XG5cbiAgY2FsY3VsYXRlQW5udWFsVHJhdmVsU3BlbmRpbmcoeWVhcikge1xuICAgIGNvbnN0IHRoaXNZZWFyc1RyaXBzID0gdGhpcy50cmlwQm9vay5maWx0ZXIodHJpcCA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodHJpcC5kZXBhcnR1cmVEYXRlKTtcbiAgICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgPT09IHllYXI7XG4gICAgfSk7XG4gICAgaWYodGhpc1llYXJzVHJpcHMubGVuZ3RoID4gMCl7XG4gICAgICBjb25zdCBhbm51YWxTcGVuZGluZyA9IHRoaXNZZWFyc1RyaXBzLnJlZHVjZSgodG90YWxDb3N0LCB0cmlwKSA9PiB7XG4gICAgICAgIHJldHVybiB0b3RhbENvc3QgKz0gdHJpcC5jYWxjdWxhdGVUcmlwQ29zdCgpO1xuICAgICAgfSwwKVxuICAgICAgcmV0dXJuIGAkJHthbm51YWxTcGVuZGluZy50b0ZpeGVkKDIpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgWW91ciBzcGVuZGluZyBpcyAkMCBmb3IgJHt5ZWFyfS4gTXVzdCBub3QgaGF2ZSBjYXVnaHQgdGhlIHRyYXZlbCBidWcsIGh1aD9gO1xuICAgIH1cbiAgfVxuXG4gIGdldFRyaXBzQnlTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHRoaXMudHJpcEJvb2suZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXI7XG4iLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEsIGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuaWQgPSB0cmlwRGF0YS5pZDtcbiAgICB0aGlzLnRyYXZlbGVySUQgPSB0cmlwRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uRGF0YS5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmlkID09PSB0cmlwRGF0YS5kZXN0aW5hdGlvbklEKTtcbiAgICB0aGlzLm51bWJlck9mVHJhdmVsZXJzID0gdHJpcERhdGEudHJhdmVsZXJzO1xuICAgIHRoaXMuZGVwYXJ0dXJlRGF0ZSA9IHRyaXBEYXRhLmRhdGU7XG4gICAgdGhpcy5kdXJhdGlvbkluRGF5cyA9IHRyaXBEYXRhLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhdHVzID0gdHJpcERhdGEuc3RhdHVzO1xuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXBEYXRhLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgfVxuXG4gIGNhbGN1bGF0ZVRyaXBDb3N0KCkge1xuICAgIGxldCBlc3RpbWF0ZWRMb2RnaW5nQ29zdCA9IHRoaXMuZGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0aGlzLmR1cmF0aW9uSW5EYXlzO1xuICAgIGxldCBlc3RpbWF0ZWRGbGlnaHRDb3N0ID0gdGhpcy5kZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdGhpcy5udW1iZXJPZlRyYXZlbGVycztcbiAgICBsZXQgdHJhdmVsQWdlbnRGZWUgPSAwLjE7XG4gICAgcmV0dXJuIChlc3RpbWF0ZWRMb2RnaW5nQ29zdCArIGVzdGltYXRlZEZsaWdodENvc3QpICogKDEgKyB0cmF2ZWxBZ2VudEZlZSk7XG4gIH1cblxuICBnZXRUcmlwVGltaW5nKCkge1xuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRlcGFydHVyZURhdGUgPSBuZXcgRGF0ZSh0aGlzLmRlcGFydHVyZURhdGUpO1xuICAgIGxldCByZXR1cm5EYXRlID0gdGhpcy5nZXRSZXR1cm5EYXRlKGRlcGFydHVyZURhdGUpO1xuICAgIGlmKHRvZGF5IDwgZGVwYXJ0dXJlRGF0ZSkge1xuICAgICAgdGhpcy5zdGF0dXMgPSAndXBjb21pbmcnO1xuICAgIH0gZWxzZSBpZiAodG9kYXkgPiBkZXBhcnR1cmVEYXRlICYmIHRvZGF5IDwgcmV0dXJuRGF0ZSl7XG4gICAgICB0aGlzLnN0YXR1cyA9ICdwcmVzZW50JztcbiAgICB9IGVsc2UgaWYgKHRvZGF5ID4gcmV0dXJuRGF0ZSl7XG4gICAgICB0aGlzLnN0YXR1cyA9ICdwYXN0J1xuICAgIH1cbiAgfVxuXG4gIGdldFJldHVybkRhdGUoZGVwYXJ0dXJlKSB7XG4gICAgdmFyIHJldHVybkRhdGUgPSBuZXcgRGF0ZShkZXBhcnR1cmUpO1xuICAgIHJldHVybkRhdGUuc2V0RGF0ZShyZXR1cm5EYXRlLmdldERhdGUoKSArIHRoaXMuZHVyYXRpb25JbkRheXMpO1xuICAgIHJldHVybiByZXR1cm5EYXRlO1xuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFRyaXA7XG4iXSwic291cmNlUm9vdCI6IiJ9