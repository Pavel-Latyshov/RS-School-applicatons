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

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mach-mach-game/./src/style/index.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_game_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-game/start */ \"./src/start-game/start.ts\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.ts\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.ts\");\n/* harmony import */ var _register_src_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-src/register */ \"./src/register-src/register.ts\");\n/* harmony import */ var _register_src_cancel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-src/cancel */ \"./src/register-src/cancel.ts\");\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var _indexDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indexDB */ \"./src/indexDB.ts\");\n\n\n\n\n\n\n\n(0,_register_src_cancel__WEBPACK_IMPORTED_MODULE_4__.cancelFunc)();\n(0,_register_src_register__WEBPACK_IMPORTED_MODULE_3__.registerFunc)();\n(0,_router__WEBPACK_IMPORTED_MODULE_2__.router)();\n(0,_settings__WEBPACK_IMPORTED_MODULE_1__.settingsFunc)();\n(0,_start_game_start__WEBPACK_IMPORTED_MODULE_0__.startGameFunc)();\n\n\n//# sourceURL=webpack://mach-mach-game/./src/index.ts?");

/***/ }),

/***/ "./src/indexDB.ts":
/*!************************!*\
  !*** ./src/indexDB.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Idb = {\n    DB_NAME: 'match-match-db',\n    DB_VERSION: 1,\n    DB_STORE_NAME: 'users',\n    db: null,\n    openDb: function () {\n        var _this = this;\n        return new Promise(function (res, rej) {\n            var request = indexedDB.open(Idb.DB_NAME, Idb.DB_VERSION);\n            request.onsuccess = function (event) {\n                Idb.db = request.result;\n                console.log('IDB DONE');\n                res(Idb.db);\n            };\n            request.onerror = function (event) {\n                rej(_this.error);\n                console.error('wrong:', event.target.errorCode);\n            };\n            request.onupgradeneeded = function (event) {\n                var myDB = event.target.result;\n                if (!myDB.objectStoreNames.contains(Idb.DB_STORE_NAME)) {\n                    var objectStore = myDB.createObjectStore(Idb.DB_STORE_NAME, { keyPath: 'ssn' });\n                }\n                res(Idb.db);\n            };\n        });\n    },\n    clearObjectStore: function () {\n        var _this = this;\n        Idb.openDb().then(function (db) { return new Promise(function (res, rej) {\n            var transaction = Idb.db.transaction(Idb.DB_STORE_NAME, 'readwrite');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var request = objectStore.clear();\n            request.onsuccess = function (event) {\n                res(objectStore);\n            };\n            request.onerror = function (event) {\n                rej(_this.error);\n            };\n        }); });\n    },\n    getObj: function (ssn) {\n        return Idb.openDb().then(function (db) { return new Promise(function (res, rej) {\n            var transaction = db.transaction(Idb.DB_STORE_NAME, 'readonly');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var request = objectStore.get(ssn);\n            request.onsuccess = function (event) { return res(request.result); };\n            request.onerror = function (event) {\n                rej(event);\n            };\n        }); });\n    },\n    putObj: function (newUser) {\n        Idb.openDb().then(function (db) { return new Promise(function (res, rej) {\n            var transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');\n            var objectStore = transaction.objectStore(Idb.DB_STORE_NAME);\n            var request = objectStore.put(newUser);\n            request.onsuccess = function (event) {\n                event.target.result == newUser.ssn;\n                res(event.target.result);\n            };\n            request.onerror = function (event) {\n                rej(event.error);\n            };\n        }); });\n    },\n};\n// window.indexedDB.deleteDatabase(\"match-match-db\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Idb);\n\n\n//# sourceURL=webpack://mach-mach-game/./src/indexDB.ts?");

/***/ }),

/***/ "./src/register-src/cancel.ts":
/*!************************************!*\
  !*** ./src/register-src/cancel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancelFunc\": () => (/* binding */ cancelFunc)\n/* harmony export */ });\nvar cancelFunc = function () {\n    var cancel = document.querySelector('.cancel');\n    var inputs = Array.from(document.querySelectorAll('input'));\n    cancel.addEventListener('click', function () {\n        inputs.forEach(function (element) {\n            if (element.value !== 'register') {\n                element.value = '';\n            }\n        });\n    });\n};\n\n\n//# sourceURL=webpack://mach-mach-game/./src/register-src/cancel.ts?");

/***/ }),

/***/ "./src/register-src/register.ts":
/*!**************************************!*\
  !*** ./src/register-src/register.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"registerFunc\": () => (/* binding */ registerFunc)\n/* harmony export */ });\n/* harmony import */ var _indexDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../indexDB */ \"./src/indexDB.ts\");\n/* harmony import */ var _types_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/state */ \"./src/types/state.ts\");\n\n\nvar registerFunc = function () {\n    var registerBtn = document.querySelector('.register_btn');\n    var registerFrom = document.querySelector('.register_wrapper');\n    var registerUser = document.querySelector('.register_user');\n    var userName = document.querySelector('.input_name');\n    var userSurname = document.querySelector('.user_surname');\n    var userEmail = document.querySelector('.user_email');\n    var startBtn = document.querySelector('.start_btn');\n    var aboutPage = document.querySelector('.about_wrapper');\n    var scorePage = document.querySelector('.score_wrapper');\n    var settingsPage = document.querySelector('.settings_wrapper');\n    registerBtn === null || registerBtn === void 0 ? void 0 : registerBtn.addEventListener('click', function () {\n        registerFrom.classList.remove('hidden');\n        aboutPage.classList.add('hidden');\n        scorePage.classList.add('hidden');\n        settingsPage.classList.add('hidden');\n    });\n    var registerUserHandler = function (e) {\n        if (userName.value !== '' && userSurname.value !== '' && userEmail.value !== '' && userName.clientWidth === 291 && userSurname.clientWidth === 291 && userEmail.clientWidth === 291) {\n            e.preventDefault();\n            _types_state__WEBPACK_IMPORTED_MODULE_1__.userState.name = userName.value;\n            _types_state__WEBPACK_IMPORTED_MODULE_1__.userState.surname = userSurname.value;\n            _types_state__WEBPACK_IMPORTED_MODULE_1__.userState.email = userEmail.value;\n            _types_state__WEBPACK_IMPORTED_MODULE_1__.userState.ssn += '1';\n            _indexDB__WEBPACK_IMPORTED_MODULE_0__.default.openDb();\n            _indexDB__WEBPACK_IMPORTED_MODULE_0__.default.putObj(_types_state__WEBPACK_IMPORTED_MODULE_1__.userState);\n            console.log(_types_state__WEBPACK_IMPORTED_MODULE_1__.userState);\n            registerFrom === null || registerFrom === void 0 ? void 0 : registerFrom.classList.add('hidden');\n            userName.value = '';\n            userSurname.value = '';\n            userEmail.value = '';\n            startBtn.classList.remove('hidden');\n            aboutPage.classList.remove('hidden');\n        }\n    };\n    registerUser.addEventListener('click', registerUserHandler);\n};\n\n\n//# sourceURL=webpack://mach-mach-game/./src/register-src/register.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\nvar router = function () {\n    var aboutLink = document.querySelector('.about');\n    var aboutPage = document.querySelector('.about_wrapper');\n    var registerForm = document.querySelector('.register_wrapper');\n    var scoreLink = document.querySelector('.score');\n    var scorePage = document.querySelector('.score_wrapper');\n    var settingsLink = document.querySelector('.settings');\n    var settingsPage = document.querySelector('.settings_wrapper');\n    var scoreLinkHandler = function () {\n        aboutPage.classList.add('hidden');\n        registerForm.classList.add('hidden');\n        scorePage.classList.remove('hidden');\n        settingsPage.classList.add('hidden');\n        scoreLink.classList.add('active_link');\n        aboutLink.classList.remove('active_link');\n        settingsLink.classList.remove('active_link');\n    };\n    var aboutLinkHandler = function () {\n        aboutPage.classList.remove('hidden');\n        registerForm.classList.add('hidden');\n        scorePage.classList.add('hidden');\n        scoreLink.classList.remove('active_link');\n        aboutLink.classList.add('active_link');\n        settingsLink.classList.remove('active_link');\n        settingsPage.classList.add('hidden');\n    };\n    var settingsLinkHandler = function () {\n        aboutPage.classList.add('hidden');\n        registerForm.classList.add('hidden');\n        scorePage.classList.add('hidden');\n        scoreLink.classList.remove('active_link');\n        aboutLink.classList.remove('active_link');\n        settingsLink.classList.add('active_link');\n        settingsPage.classList.remove('hidden');\n    };\n    aboutLink.addEventListener('click', aboutLinkHandler);\n    scoreLink.addEventListener('click', scoreLinkHandler);\n    settingsLink.addEventListener('click', settingsLinkHandler);\n};\n\n\n//# sourceURL=webpack://mach-mach-game/./src/router.ts?");

/***/ }),

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"settingsFunc\": () => (/* binding */ settingsFunc)\n/* harmony export */ });\n/* harmony import */ var _types_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/state */ \"./src/types/state.ts\");\n\nvar settingsFunc = function () {\n    var easy = document.querySelector('.difficulty_easy');\n    var medium = document.querySelector('.difficulty_medium');\n    var hard = document.querySelector('.difficulty_hard');\n    var settingsActive = document.querySelector('.settings_active');\n    var animals = document.querySelector('.game_animals');\n    var nature = document.querySelector('.game_nature');\n    var startContainer = document.querySelector('.start_game__container');\n    var animalsHandler = function () {\n        animals.classList.add('settings_active');\n        nature.classList.remove('settings_active');\n        _types_state__WEBPACK_IMPORTED_MODULE_0__.userState.cards = 'animals';\n    };\n    var natureHandler = function () {\n        animals.classList.remove('settings_active');\n        nature.classList.add('settings_active');\n        _types_state__WEBPACK_IMPORTED_MODULE_0__.userState.cards = 'nature';\n    };\n    var easyHandler = function () {\n        easy.classList.add('settings_active');\n        medium.classList.remove('settings_active');\n        hard.classList.remove('settings_active');\n        _types_state__WEBPACK_IMPORTED_MODULE_0__.userState.difficulty = 'easy';\n        startContainer.classList.add('start_easy');\n        startContainer.classList.remove('start_medium');\n        startContainer.classList.remove('start_hard');\n        startContainer.innerHTML = '';\n        for (var i = 1; i <= 8; i++) {\n            startContainer.innerHTML += \"<div class=\\\"game_card\\\" id=\\\"\" + i + \"\\\"><div class=\\\"front animal\" + i + \"\\\"></div><div class=\\\"back hidden\\\"></div>\\n      </div><div class=\\\"game_card\\\" id=\\\"\" + i + \"\\\"><div class=\\\"front animal\" + i + \"\\\"></div><div class=\\\"back hidden\\\"></div>\\n      </div>\";\n        }\n    };\n    var mediumHandler = function () {\n        easy.classList.remove('settings_active');\n        medium.classList.add('settings_active');\n        hard.classList.remove('settings_active');\n        _types_state__WEBPACK_IMPORTED_MODULE_0__.userState.difficulty = 'medium';\n        startContainer.innerHTML = '';\n        for (var i = 0; i < 18; i++) {\n            if (i < 10) {\n                startContainer.innerHTML += \"<div class=\\\"game_card\\\"></div> <div class=\\\"game_card\\\"></div>\";\n            }\n            else {\n                startContainer.innerHTML += \"<div class=\\\"game_card\\\"></div> <div class=\\\"game_card\\\"></div>\";\n            }\n        }\n    };\n    var hardHandler = function () {\n        easy.classList.remove('settings_active');\n        medium.classList.remove('settings_active');\n        hard.classList.add('settings_active');\n        _types_state__WEBPACK_IMPORTED_MODULE_0__.userState.difficulty = 'hard';\n        startContainer.innerHTML = '';\n        for (var i = 0; i <= 32; i++) {\n            startContainer.innerHTML += \"<div class=\\\"game_card\\\"></div> <div class=\\\"game_card\\\"></div>\";\n        }\n    };\n    easy.addEventListener('click', easyHandler);\n    medium.addEventListener('click', mediumHandler);\n    hard.addEventListener('click', hardHandler);\n    animals.addEventListener('click', animalsHandler);\n    nature.addEventListener('click', natureHandler);\n};\n\n\n//# sourceURL=webpack://mach-mach-game/./src/settings.ts?");

/***/ }),

/***/ "./src/start-game/start.ts":
/*!*********************************!*\
  !*** ./src/start-game/start.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startGameFunc\": () => (/* binding */ startGameFunc)\n/* harmony export */ });\nvar startGameFunc = function () {\n    var startGameBtn = document.querySelector('.start_btn');\n    var aboutPage = document.querySelector('.about_wrapper');\n    var settingsPage = document.querySelector('.settings_wrapper');\n    var scorePage = document.querySelector('.score_wrapper');\n    var startPage = document.querySelector('.start_game_wrapper');\n    var startContainer = document.querySelector('.start_game__container');\n    var gameCard = Array.from(document.querySelectorAll('.game_card'));\n    // type handlerType = (e: MouseEvent) => void;\n    var startGameHandler = function () {\n        aboutPage.classList.add('hidden');\n        settingsPage.classList.add('hidden');\n        scorePage.classList.add('hidden');\n        startPage.classList.remove('hidden');\n        var gameCard = Array.from(document.querySelectorAll('.game_card'));\n        var frontCard = Array.from(document.querySelectorAll('.front'));\n        // Таймер карт\n        var showCards = function () {\n            frontCard.forEach(function (element) {\n                element.classList.add('hidden');\n            });\n            gameCard.forEach(function (element) {\n                element.classList.add('game_card_reverse');\n            });\n        };\n        setTimeout(showCards, 1000);\n        // Таймер карт\n        var counter = 0;\n        var idCounter = '';\n        var cardHandler = function () {\n            if (counter === 0) {\n                var element = event.target;\n                element.classList.remove('game_card_reverse');\n                var card = element.firstChild;\n                card.classList.remove('hidden');\n                element.classList.add('open');\n                idCounter += element.id;\n                console.log(idCounter);\n                counter++;\n            }\n            else if (counter > 0) {\n                var element = event.target;\n                element.classList.remove('game_card_reverse');\n                var card = element.firstChild;\n                card.classList.remove('hidden');\n                element.classList.add('open');\n                var open_1 = Array.from(document.querySelectorAll('.open'));\n                console.log(open_1);\n                // let idCounter = '';\n                console.log(idCounter);\n                open_1.forEach(function (element) {\n                    idCounter += element.id;\n                });\n                var result = (idCounter[0] === idCounter[1]);\n                if (result === true && idCounter.length > 0) {\n                    gameCard.forEach(function (element) {\n                        element.classList.remove('open');\n                        counter = 0;\n                    });\n                    open_1 = [];\n                    console.log(open_1);\n                    idCounter = '';\n                    console.log(idCounter);\n                }\n                else if (result === false && idCounter.length > 0) {\n                    open_1.forEach(function (element) {\n                        element.classList.add('game_card_reverse');\n                        var card = element.firstChild;\n                        card.classList.add('hidden');\n                        counter = 0;\n                        idCounter = '';\n                    });\n                }\n            }\n        };\n        gameCard.forEach(function (element) {\n            element.addEventListener('click', cardHandler);\n        });\n    };\n    startGameBtn.addEventListener('click', startGameHandler);\n};\n\n\n//# sourceURL=webpack://mach-mach-game/./src/start-game/start.ts?");

/***/ }),

/***/ "./src/types/state.ts":
/*!****************************!*\
  !*** ./src/types/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userState\": () => (/* binding */ userState)\n/* harmony export */ });\n// экспорт для общего доступа\nvar userState = {\n    name: '',\n    surname: '',\n    email: '',\n    cards: 'animal',\n    result: 0,\n    difficulty: 'easy',\n    ssn: '1',\n};\n\n\n//# sourceURL=webpack://mach-mach-game/./src/types/state.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;