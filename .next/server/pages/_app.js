/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// frontend/components/Layout.tsx\n\n\n\nfunction Layout({ children }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleLogout = async ()=>{\n        await fetch(`${\"http://localhost:4000\"}/api/auth/logout`, {\n            method: \"POST\",\n            credentials: \"include\"\n        });\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: 800,\n            margin: \"0 auto\",\n            padding: \"1rem\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                style: {\n                    marginBottom: \"2rem\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        \" | \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/followers\",\n                            children: \"Followers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 40\n                        }, this),\n                        \" \",\n                        \"| \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/following\",\n                            children: \"Following\"\n                        }, void 0, false, {\n                            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this),\n                        \" |\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/non-followers\",\n                            children: \"Non-Followers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        \" |\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/top-likers\",\n                            children: \"Top Likers\"\n                        }, void 0, false, {\n                            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        \" |\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogout,\n                            style: {\n                                marginLeft: 8\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/components/Layout.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQzs7QUFDSjtBQUVXO0FBTXpCLFNBQVNFLE9BQU8sRUFBRUMsUUFBUSxFQUFlO0lBQ3RELE1BQU1DLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxlQUFlO1FBQ25CLE1BQU1DLE1BQU0sQ0FBQyxFQUFFQyx1QkFBK0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ2hFRyxRQUFRO1lBQ1JDLGFBQWE7UUFDZjtRQUNBUCxPQUFPUSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUVDLFVBQVU7WUFBS0MsUUFBUTtZQUFVQyxTQUFTO1FBQU87OzBCQUM3RCw4REFBQ0M7Z0JBQU9KLE9BQU87b0JBQUVLLGNBQWM7Z0JBQU87MEJBQ3BDLDRFQUFDQzs7c0NBQ0MsOERBQUNwQixrREFBSUE7NEJBQUNxQixNQUFLO3NDQUFJOzs7Ozs7d0JBQVc7c0NBQUcsOERBQUNyQixrREFBSUE7NEJBQUNxQixNQUFLO3NDQUFhOzs7Ozs7d0JBQWlCO3dCQUFJO3NDQUN4RSw4REFBQ3JCLGtEQUFJQTs0QkFBQ3FCLE1BQUs7c0NBQWE7Ozs7Ozt3QkFBZ0I7d0JBQUc7c0NBQzdDLDhEQUFDckIsa0RBQUlBOzRCQUFDcUIsTUFBSztzQ0FBaUI7Ozs7Ozt3QkFBb0I7d0JBQUc7c0NBQ25ELDhEQUFDckIsa0RBQUlBOzRCQUFDcUIsTUFBSztzQ0FBYzs7Ozs7O3dCQUFpQjt3QkFBRztzQ0FDN0MsOERBQUNDOzRCQUFPQyxTQUFTbEI7NEJBQWNTLE9BQU87Z0NBQUVVLFlBQVk7NEJBQUU7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUs3RCw4REFBQ0M7MEJBQU10Qjs7Ozs7Ozs7Ozs7O0FBR2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTGF5b3V0LnRzeFxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9hdXRoL2xvZ291dGAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgfSk7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogODAwLCBtYXJnaW46IFwiMCBhdXRvXCIsIHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgPGhlYWRlciBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMnJlbVwiIH19PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz4gfCA8TGluayBocmVmPVwiL2ZvbGxvd2Vyc1wiPkZvbGxvd2VyczwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgfCA8TGluayBocmVmPVwiL2ZvbGxvd2luZ1wiPkZvbGxvd2luZzwvTGluaz4gfHtcIiBcIn1cbiAgICAgICAgICA8TGluayBocmVmPVwiL25vbi1mb2xsb3dlcnNcIj5Ob24tRm9sbG93ZXJzPC9MaW5rPiB8e1wiIFwifVxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdG9wLWxpa2Vyc1wiPlRvcCBMaWtlcnM8L0xpbms+IHx7XCIgXCJ9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XG4gICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIkxheW91dCIsImNoaWxkcmVuIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwicHVzaCIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiaGVhZGVyIiwibWFyZ2luQm90dG9tIiwibmF2IiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/q/Documents/Alpha/Programming/InstagramAnalyzer/instagram-analytics/frontend/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBDO0FBQ1g7QUFFaEIsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM5RCxxQkFDRSw4REFBQ0gsMERBQU1BO2tCQUNMLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();