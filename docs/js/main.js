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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _less_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/main.less */ \"./src/less/main.less\");\n/* harmony import */ var _less_main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_less_main_less__WEBPACK_IMPORTED_MODULE_0__);\n\n\nlet ready = $(document).ready(function () {\n\n  $('#page-nav').onePageNav({\n    currentClass: 'page-nav__active',\n    changeHash: false,\n    scrollSpeed: 750,\n    scrollThreshold: 0.5,\n    filter: '',\n    easing: 'swing',\n    begin: function () {\n    },\n    end: function () {\n    },\n    scrollChange: function ($currentListItem) {\n    },\n  })\n\n  // filter projects\n  $('#project-cards-list').mixItUp()\n\n  // form callback\n  $('.form-callback__input, .form-callback__textarea').focus(function (e) {\n    console.log(this)\n    console.log(e)\n\n    e.preventDefault()\n\n    $(this).parent().children(\".fake-placeholder\").addClass('active')\n  })\n\n  $('.form-callback__input, .form-callback__textarea').blur(function (e) {\n    e.preventDefault()\n\n    if (!(this).value.trim()) {\n      $(this).parent().children(\".fake-placeholder\").removeClass('active')\n    }\n  })\n\n  // tpggle menu\n  const menuToggle = document.querySelector('#menu-toggle')\n  const mobileNavContainer = document.querySelector('#mobile-nav')\n  const mobileOverlay = document.querySelector('.mobile-nav-overlay')\n  const body = document.querySelector('body')\n\n  menuToggle.onclick = function () {\n    toggleMobileMenu()\n  }\n\n  mobileNavContainer.onclick = function (event) {\n\n    console.log(event.target.localName)\n    if (event.target.localName === 'a' || event.target.localName === 'i') {\n      toggleMobileMenu()\n    }\n  }\n\n  function toggleMobileMenu() {\n    menuToggle.classList.toggle('menu-icon-active')\n    mobileNavContainer.classList.toggle('mobile-nav--active')\n    mobileOverlay.classList.toggle('mobile-nav-overlay--active')\n    body.classList.toggle('no-scroll')\n  }\n\n  // tools function\n  function throttle(fn, wait) {\n    let time = Date.now()\n\n    return function () {\n      if ((time + wait - Date.now()) < 0) {\n        fn()\n        time = Date.now()\n      }\n    }\n  }\n\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/less/main.less":
/*!****************************!*\
  !*** ./src/less/main.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/less/main.less?");

/***/ })

/******/ });