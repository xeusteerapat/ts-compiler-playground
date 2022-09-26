/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/main.ts":
/*!*************************!*\
  !*** ./src/app/main.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CoolMath = void 0;\nclass CoolMath {\n    add(x, y) {\n        return x + y;\n    }\n}\nexports.CoolMath = CoolMath;\n\n\n//# sourceURL=webpack://ts-compiler-playground/./src/app/main.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass User {\n    constructor() {\n        this.name = 'Teerapat';\n    }\n    greeting() {\n        return `Hello, ${this.name}`;\n    }\n    doAsyncThing(arg) {\n        return __awaiter(this, void 0, void 0, function* () {\n            return arg.split(',');\n        });\n    }\n}\nconst myUser = new User();\nconst greeting = myUser.greeting();\nconsole.log(greeting);\nconst asyncUser = myUser.doAsyncThing('a,e,i,o,u');\nconsole.log(asyncUser);\nconst item = {\n    name: 'first item',\n};\nconsole.log('check: ', item);\nconst myName = 'Hi';\nconsole.log(myName);\nconst myAny = 'hi';\nconst main_1 = __webpack_require__(/*! ./app/main */ \"./src/app/main.ts\");\nconst myMath = new main_1.CoolMath();\nconst threePlusFive = myMath.add(3, 5);\nconsole.log(threePlusFive);\n\n\n//# sourceURL=webpack://ts-compiler-playground/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;