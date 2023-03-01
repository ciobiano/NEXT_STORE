"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Products.js":
/*!************************************!*\
  !*** ./src/components/Products.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MAX_RATING = 5;\nconst MIN_RATING = 1;\nfunction Products({ id , title , price , description , category , image  }) {\n    _s();\n    const [rating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);\n    const { hasPrime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n                children: category\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                width: 200,\n                height: 200,\n                style: {\n                    objectFit: \"contain\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"my-3\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__.StarIcon, {\n                        className: \"h-5 text-yellow-500\"\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-xs my-2 line-clamp-2\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 35,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    quantity: price,\n                    currency: \"NGN\"\n                }, void 0, false, {\n                    fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 37,\n                columnNumber: 4\n            }, this),\n            hasPrime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-2 -mt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"w-12\",\n                        src: \"https://links.papareact.com/fdw\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                        lineNumber: 43,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xs text-gray-500\",\n                        children: \"FREE Next-day Delivery\"\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                        lineNumber: 44,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mt-auto button\",\n                children: \"Add to Cart\"\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, this);\n}\n_s(Products, \"fAu7RicBRwcQSnQiWpKOjaQDgLM=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDVDtBQUNtQjtBQUNGO0FBRWhELE1BQU1LLGFBQWE7QUFDbkIsTUFBTUMsYUFBYTtBQUVuQixTQUFTQyxTQUFTLEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUUsRUFBRTs7SUFDckUsTUFBTSxDQUFDQyxPQUFPLEdBQUdiLCtDQUFRQSxDQUN4QmMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQU1aLENBQUFBLGFBQWFDLGFBQWEsTUFBTUE7SUFHN0QsTUFBTSxFQUFFWSxTQUFRLEVBQUUsR0FBR2pCLCtDQUFRQSxDQUFDYyxLQUFLRSxNQUFNLEtBQUs7SUFFOUMscUJBQ0MsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBRUQsV0FBVTswQkFDWFI7Ozs7OzswQkFFRiw4REFBQ1YsbURBQUtBO2dCQUNMb0IsS0FBS1Q7Z0JBQ0xVLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLE9BQU87b0JBQUVDLFdBQVc7Z0JBQVU7Ozs7OzswQkFFL0IsOERBQUNDO2dCQUFHUCxXQUFVOzBCQUFRWDs7Ozs7OzBCQUN0Qiw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ2JRLE1BQU1kLFFBQ0xlLElBQUksR0FDSkMsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUNSLDhEQUFDN0IsNERBQVFBO3dCQUFDaUIsV0FBVTs7Ozs7Ozs7Ozs7MEJBR3ZCLDhEQUFDQztnQkFBRUQsV0FBVTswQkFBNkJUOzs7Ozs7MEJBRTFDLDhEQUFDUTtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ2hCLGlFQUFRQTtvQkFBQzZCLFVBQVV2QjtvQkFBT3dCLFVBQVM7Ozs7Ozs7Ozs7O1lBR3BDaEIsMEJBQ0EsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ2U7d0JBQUlmLFdBQVU7d0JBQU9FLEtBQUk7d0JBQWtDYyxLQUFJOzs7Ozs7a0NBQ2hFLDhEQUFDZjt3QkFBRUQsV0FBVTtrQ0FBd0I7Ozs7Ozs7Ozs7OzswQkFHdkMsOERBQUNpQjtnQkFBT2pCLFdBQVU7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFHdEM7R0F6Q1NiO0tBQUFBO0FBMkNULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RzLmpzPzMxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFN0YXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XG5cbmNvbnN0IE1BWF9SQVRJTkcgPSA1O1xuY29uc3QgTUlOX1JBVElORyA9IDE7XG5cbmZ1bmN0aW9uIFByb2R1Y3RzKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSB7XG5cdGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXG5cdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE1BWF9SQVRJTkcgLSBNSU5fUkFUSU5HICsgMSkpICsgTUlOX1JBVElOR1xuXHQpO1xuXG5cdGNvbnN0IHsgaGFzUHJpbWUgfSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkgPCAwLjUpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTBcIj5cblx0XHRcdDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPlxuXHRcdFx0XHR7Y2F0ZWdvcnl9XG5cdFx0XHQ8L3A+XG5cdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0c3JjPXtpbWFnZX1cblx0XHRcdFx0d2lkdGg9ezIwMH1cblx0XHRcdFx0aGVpZ2h0PXsyMDB9XG5cdFx0XHRcdHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb250YWluXCIgfX1cblx0XHRcdC8+XG5cdFx0XHQ8aDQgY2xhc3NOYW1lPVwibXktM1wiPnt0aXRsZX08L2g0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG5cdFx0XHRcdHtBcnJheShyYXRpbmcpXG5cdFx0XHRcdFx0LmZpbGwoKVxuXHRcdFx0XHRcdC5tYXAoKF8sIGkpID0+IChcblx0XHRcdFx0XHRcdDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwXCIgLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC14cyBteS0yIGxpbmUtY2xhbXAtMlwiPntkZXNjcmlwdGlvbn08L3A+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuXHRcdFx0XHQ8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIk5HTlwiIC8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0e2hhc1ByaW1lICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgLW10LTVcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cInctMTJcIiBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZmR3XCIgYWx0PVwiXCIgLz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GUkVFIE5leHQtZGF5IERlbGl2ZXJ5PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cIm10LWF1dG8gYnV0dG9uXCI+QWRkIHRvIENhcnQ8L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiU3Rhckljb24iLCJDdXJyZW5jeSIsIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdHMiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYXNQcmltZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0IiwiaDQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsInF1YW50aXR5IiwiY3VycmVuY3kiLCJpbWciLCJhbHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Products.js\n"));

/***/ })

});