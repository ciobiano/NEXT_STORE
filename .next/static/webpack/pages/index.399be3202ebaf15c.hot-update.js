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

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products */ \"./src/components/Products.js\");\n\n\n\nfunction ProductFeed({ products  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto \",\n        children: [\n            products.slice(0, 4).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: id,\n                    title: title,\n                    price: price,\n                    description: description,\n                    category: category,\n                    image: image\n                }, id, false, {\n                    fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"md:col-span-full\",\n                src: \"https://links.papareact.com/dyz\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md: col-spa\",\n                children: products.slice(4, 5).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: id,\n                        title: title,\n                        price: price,\n                        description: description,\n                        category: category,\n                        image: image\n                    }, id, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\nvar _c;\n$RefreshReg$(_c, \"ProductFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQ1E7QUFHakMsU0FBU0UsWUFBWSxFQUFDQyxTQUFRLEVBQUMsRUFBRTtJQUkvQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFJZEYsU0FBU0csS0FBSyxDQUFDLEdBQUUsR0FBR0MsR0FBRyxDQUFDLENBQUMsRUFBQ0MsR0FBRSxFQUFDQyxNQUFLLEVBQUNDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUNDLE1BQUssRUFBQyxpQkFDbkUsOERBQUNaLGlEQUFRQTtvQkFFVE8sSUFBSUE7b0JBQ0pDLE9BQU9BO29CQUNQQyxPQUFPQTtvQkFDUEMsYUFBYUE7b0JBQ2JDLFVBQVVBO29CQUNWQyxPQUFPQTttQkFORkw7Ozs7OzBCQVdMLDhEQUFDTTtnQkFBSVQsV0FBVTtnQkFBbUJVLEtBQUk7Z0JBQWtDQyxLQUFJOzs7Ozs7MEJBRWpGLDhEQUFDWjtnQkFBSUMsV0FBVTswQkFFakJGLFNBQVNHLEtBQUssQ0FBQyxHQUFFLEdBQUdDLEdBQUcsQ0FBQyxDQUFDLEVBQUNDLEdBQUUsRUFBQ0MsTUFBSyxFQUFDQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFDQyxNQUFLLEVBQUMsaUJBQy9ELDhEQUFDWixpREFBUUE7d0JBRVRPLElBQUlBO3dCQUNKQyxPQUFPQTt3QkFDUEMsT0FBT0E7d0JBQ1BDLGFBQWFBO3dCQUNiQyxVQUFVQTt3QkFDVkMsT0FBT0E7dUJBTkZMOzs7Ozs7Ozs7Ozs7Ozs7O0FBY2I7S0ExQ1NOO0FBNENULCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGZWVkLmpzP2YzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4vUHJvZHVjdHMnXG5cblxuZnVuY3Rpb24gUHJvZHVjdEZlZWQoe3Byb2R1Y3RzfSkge1xuICBcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG8gXCI+IFxuICAgIFxuICAgICBcblxuICAgIHtwcm9kdWN0cy5zbGljZSgwLDQpLm1hcCgoe2lkLHRpdGxlLHByaWNlICxkZXNjcmlwdGlvbiwgY2F0ZWdvcnksaW1hZ2V9KT0+KFxuICAgICAgICA8UHJvZHVjdHNcbiAgICAgICAga2V5PXtpZH1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgLz5cbiAgICApKSAgXG4gICAgXG4gICAgfVxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbWQ6Y29sLXNwYW4tZnVsbCcgc3JjPVwiaHR0cHM6Ly9saW5rcy5wYXBhcmVhY3QuY29tL2R5elwiIGFsdD1cIlwiIC8+XG4gICAgICAgXG4gICA8ZGl2IGNsYXNzTmFtZT1cIm1kOiBjb2wtc3BhXCI+XG4gICAgXG57cHJvZHVjdHMuc2xpY2UoNCw1KS5tYXAoKHtpZCx0aXRsZSxwcmljZSAsZGVzY3JpcHRpb24sIGNhdGVnb3J5LGltYWdlfSk9PihcbiAgICAgICAgPFByb2R1Y3RzXG4gICAgICAgIGtleT17aWR9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBwcmljZT17cHJpY2V9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3J5fVxuICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgIC8+XG4gICAgKSkgIFxuICAgIFxuICAgIH1cbiAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RGZWVkIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdHMiLCJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2xpY2UiLCJtYXAiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n"));

/***/ })

});