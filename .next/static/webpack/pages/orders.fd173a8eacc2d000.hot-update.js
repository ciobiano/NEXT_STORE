"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./src/pages/orders.js":
/*!*****************************!*\
  !*** ./src/pages/orders.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Order */ \"./src/components/Order.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction orders({ orders  }) {\n    _s();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"max-w-screen-lg mx-auto p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl border-b mb-2 border-yellow-400\",\n                        children: \"Orders\"\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, this),\n                    session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: orders ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                orders.length,\n                                \" Order\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"LO\"\n                        }, void 0, false, {\n                            fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                            lineNumber: 19,\n                            columnNumber: 50\n                        }, this)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Please sign in to see your orders\"\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                        lineNumber: 22,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 space-y-4 \",\n                        children: orders?.map(({ id , amount , amountShipping , items , timestamp , images  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Order__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: id,\n                                amount: amount,\n                                amountShipping: amountShipping,\n                                items: items,\n                                timestamp: timestamp,\n                                images: images\n                            }, id, false, {\n                                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                                lineNumber: 27,\n                                columnNumber: 8\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n                lineNumber: 14,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/pages/orders.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, this);\n}\n_s(orders, \"TLdHK4K4L7Pm+aVG7dSGM4qSxic=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (orders);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3JkZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNlO0FBR2pCO0FBRXhDLFNBQVNLLE9BQU8sRUFBRUEsT0FBTSxFQUFFLEVBQUU7O0lBQzNCLE1BQU1DLFVBQVVILDJEQUFVQTtJQUUxQixxQkFDQyw4REFBQ0k7OzBCQUNBLDhEQUFDTCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDTTtnQkFBS0MsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUEyQzs7Ozs7O29CQUV4REgsd0JBQ0E7a0NBQ0VELHVCQUFTLDhEQUFDTTs7Z0NBQUlOLE9BQU9PLE1BQU07Z0NBQUM7Ozs7OztpREFBYyw4REFBQ0Q7c0NBQUc7Ozs7O2dDQUFPO3NEQUd2RCw4REFBQ0E7a0NBQUc7Ozs7OzRCQUNKO2tDQUNELDhEQUFDSjt3QkFBSUUsV0FBVTtrQ0FDYkosUUFBUVEsSUFDUixDQUFDLEVBQUVDLEdBQUUsRUFBRUMsT0FBTSxFQUFFQyxlQUFjLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQUUsaUJBQ3hELDhEQUFDZix5REFBS0E7Z0NBRUxVLElBQUlBO2dDQUNKQyxRQUFRQTtnQ0FDUkMsZ0JBQWdCQTtnQ0FDaEJDLE9BQU9BO2dDQUNQQyxXQUFXQTtnQ0FDWEMsUUFBUUE7K0JBTkhMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2I7R0FsQ1NUOztRQUNRRix1REFBVUE7Ozs7QUFtQzNCLCtEQUFlRSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9vcmRlcnMuanM/NTZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xuaW1wb3J0IE9yZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL09yZGVyXCI7XG5cbmZ1bmN0aW9uIG9yZGVycyh7IG9yZGVycyB9KSB7XG5cdGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLWxnIG14LWF1dG8gcC0xMFwiPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgYm9yZGVyLWIgbWItMiBib3JkZXIteWVsbG93LTQwMFwiPk9yZGVyczwvaDE+XG5cblx0XHRcdFx0e3Nlc3Npb24gPyAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdHtvcmRlcnMgPyA8aDI+e29yZGVycy5sZW5ndGh9IE9yZGVyPC9oMj4gOiA8aDI+TE88L2gyPn1cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8aDI+UGxlYXNlIHNpZ24gaW4gdG8gc2VlIHlvdXIgb3JkZXJzPC9oMj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdC01IHNwYWNlLXktNCBcIj5cblx0XHRcdFx0XHR7b3JkZXJzPy5tYXAoXG5cdFx0XHRcdFx0XHQoeyBpZCwgYW1vdW50LCBhbW91bnRTaGlwcGluZywgaXRlbXMsIHRpbWVzdGFtcCwgaW1hZ2VzIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PE9yZGVyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtpZH1cblx0XHRcdFx0XHRcdFx0XHRpZD17aWR9XG5cdFx0XHRcdFx0XHRcdFx0YW1vdW50PXthbW91bnR9XG5cdFx0XHRcdFx0XHRcdFx0YW1vdW50U2hpcHBpbmc9e2Ftb3VudFNoaXBwaW5nfVxuXHRcdFx0XHRcdFx0XHRcdGl0ZW1zPXtpdGVtc31cblx0XHRcdFx0XHRcdFx0XHR0aW1lc3RhbXA9e3RpbWVzdGFtcH1cblx0XHRcdFx0XHRcdFx0XHRpbWFnZXM9e2ltYWdlc31cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb3JkZXJzO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblx0Y29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5cblx0Ly8gR2V0IHRoZSB1c2VyIGxvZ2dlZCBpbiBjcmVkZW50aWFscyAvIHRva2VuXG5cdGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxOiBjb250ZXh0LnJlcSB9KTtcblxuXHRpZiAoIXNlc3Npb24pIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0cHJvcHM6IHt9LFxuXHRcdH07XG5cdH1cblxuXHQvLyBGaXJlYmFzZSBkYlxuXHRjb25zdCBzdHJpcGVPcmRlcnMgPSBhd2FpdCBkYlxuXHRcdC5jb2xsZWN0aW9uKFwidXNlcnNcIilcblx0XHQuZG9jKHNlc3Npb24udXNlci5lbWFpbClcblx0XHQuY29sbGVjdGlvbihcIm9yZGVyc1wiKVxuXHRcdC5vcmRlckJ5KFwidGltZXN0YW1wXCIsIFwiZGVzY1wiKVxuXHRcdC5nZXQoKTtcblxuXHQvLyBTdHJpcGUgb3JkZXJzXG5cdGNvbnN0IG9yZGVycyA9IGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdHN0cmlwZU9yZGVycy5kb2NzLm1hcChhc3luYyAob3JkZXIpID0+IHtcblx0XHRcdGNvbnN0IGFtb3VudFNoaXBwaW5nID1cblx0XHRcdFx0b3JkZXIuZGF0YSgpLmFtb3VudFNoaXBwaW5nICE9PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IG9yZGVyLmRhdGEoKS5hbW91bnRTaGlwcGluZ1xuXHRcdFx0XHRcdDogbnVsbDtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWQ6IG9yZGVyLmlkLFxuXHRcdFx0XHRhbW91bnQ6IG9yZGVyLmRhdGEoKS5hbW91bnQsXG5cdFx0XHRcdGFtb3VudFNoaXBwaW5nOiBhbW91bnRTaGlwcGluZyxcblx0XHRcdFx0aW1hZ2VzOiBvcmRlci5kYXRhKCkuaW1hZ2VzLFxuXHRcdFx0XHR0aW1lc3RhbXA6IG1vbWVudChvcmRlci5kYXRhKCkudGltZXN0YW1wLnRvRGF0ZSgpKS51bml4KCksXG5cdFx0XHRcdGl0ZW1zOiAoXG5cdFx0XHRcdFx0YXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmxpc3RMaW5lSXRlbXMob3JkZXIuaWQsIHtcblx0XHRcdFx0XHRcdGxpbWl0OiAxMDAsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KS5kYXRhLFxuXHRcdFx0fTtcblx0XHR9KVxuXHQpO1xuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdG9yZGVycyxcblx0XHR9LFxuXHR9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIZWFkZXIiLCJ1c2VTZXNzaW9uIiwiT3JkZXIiLCJvcmRlcnMiLCJzZXNzaW9uIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImFtb3VudCIsImFtb3VudFNoaXBwaW5nIiwiaXRlbXMiLCJ0aW1lc3RhbXAiLCJpbWFnZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/orders.js\n"));

/***/ })

});