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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products */ \"./src/components/Products.js\");\n\n\n\nfunction ProductFeed({ products  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto \",\n        children: [\n            products.slice(0, 4).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: id,\n                    title: title,\n                    price: price,\n                    description: description,\n                    category: category,\n                    image: image\n                }, id, false, {\n                    fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                    lineNumber: 10,\n                    columnNumber: 6\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"md:col-span-full\",\n                src: \"https://links.papareact.com/dyz\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md: col-span-2  \",\n                children: products.slice(4, 5).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: id,\n                        title: title,\n                        price: price,\n                        description: description,\n                        category: category,\n                        image: image\n                    }, id, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                        lineNumber: 30,\n                        columnNumber: 7\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            products.slice(5, products.length).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Products__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: id,\n                    title: title,\n                    price: price,\n                    description: description,\n                    category: category,\n                    image: image\n                }, id, false, {\n                    fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n                    lineNumber: 44,\n                    columnNumber: 6\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/ProductFeed.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n}\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\nvar _c;\n$RefreshReg$(_c, \"ProductFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ1E7QUFFbEMsU0FBU0UsWUFBWSxFQUFFQyxTQUFRLEVBQUUsRUFBRTtJQUNsQyxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDYkYsU0FDQ0csS0FBSyxDQUFDLEdBQUcsR0FDVEMsR0FBRyxDQUFDLENBQUMsRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxpQkFDdkQsOERBQUNaLGlEQUFRQTtvQkFFUk8sSUFBSUE7b0JBQ0pDLE9BQU9BO29CQUNQQyxPQUFPQTtvQkFDUEMsYUFBYUE7b0JBQ2JDLFVBQVVBO29CQUNWQyxPQUFPQTttQkFORkw7Ozs7OzBCQVNSLDhEQUFDTTtnQkFDQVQsV0FBVTtnQkFDVlUsS0FBSTtnQkFDSkMsS0FBSTs7Ozs7OzBCQUdMLDhEQUFDWjtnQkFBSUMsV0FBVTswQkFDYkYsU0FDQ0csS0FBSyxDQUFDLEdBQUUsR0FDUkMsR0FBRyxDQUFDLENBQUMsRUFBRUMsR0FBRSxFQUFFQyxNQUFLLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRSxpQkFDdkQsOERBQUNaLGlEQUFRQTt3QkFFUk8sSUFBSUE7d0JBQ0pDLE9BQU9BO3dCQUNQQyxPQUFPQTt3QkFDUEMsYUFBYUE7d0JBQ2JDLFVBQVVBO3dCQUNWQyxPQUFPQTt1QkFORkw7Ozs7Ozs7Ozs7WUFVUkwsU0FDQ0csS0FBSyxDQUFDLEdBQUdILFNBQVNjLE1BQU0sRUFDeEJWLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEdBQUUsRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUUsaUJBQ3ZELDhEQUFDWixpREFBUUE7b0JBRVJPLElBQUlBO29CQUNKQyxPQUFPQTtvQkFDUEMsT0FBT0E7b0JBQ1BDLGFBQWFBO29CQUNiQyxVQUFVQTtvQkFDVkMsT0FBT0E7bUJBTkZMOzs7Ozs7Ozs7OztBQVdYO0tBcERTTjtBQXNEVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0RmVlZC5qcz9mMzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0cyBmcm9tIFwiLi9Qcm9kdWN0c1wiO1xuXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7IHByb2R1Y3RzIH0pIHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0byBcIj5cblx0XHRcdHtwcm9kdWN0c1xuXHRcdFx0XHQuc2xpY2UoMCwgNClcblx0XHRcdFx0Lm1hcCgoeyBpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlIH0pID0+IChcblx0XHRcdFx0XHQ8UHJvZHVjdHNcblx0XHRcdFx0XHRcdGtleT17aWR9XG5cdFx0XHRcdFx0XHRpZD17aWR9XG5cdFx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRwcmljZT17cHJpY2V9XG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRjYXRlZ29yeT17Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRpbWFnZT17aW1hZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLWZ1bGxcIlxuXHRcdFx0XHRzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZHl6XCJcblx0XHRcdFx0YWx0PVwiXCJcblx0XHRcdC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWQ6IGNvbC1zcGFuLTIgIFwiPlxuXHRcdFx0XHR7cHJvZHVjdHNcblx0XHRcdFx0XHQuc2xpY2UoNCw1KVxuXHRcdFx0XHRcdC5tYXAoKHsgaWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZSB9KSA9PiAoXG5cdFx0XHRcdFx0XHQ8UHJvZHVjdHNcblx0XHRcdFx0XHRcdFx0a2V5PXtpZH1cblx0XHRcdFx0XHRcdFx0aWQ9e2lkfVxuXHRcdFx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRcdFx0XHRcdHByaWNlPXtwcmljZX1cblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0XHRjYXRlZ29yeT17Y2F0ZWdvcnl9XG5cdFx0XHRcdFx0XHRcdGltYWdlPXtpbWFnZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtwcm9kdWN0c1xuXHRcdFx0XHQuc2xpY2UoNSwgcHJvZHVjdHMubGVuZ3RoKVxuXHRcdFx0XHQubWFwKCh7IGlkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2UgfSkgPT4gKFxuXHRcdFx0XHRcdDxQcm9kdWN0c1xuXHRcdFx0XHRcdFx0a2V5PXtpZH1cblx0XHRcdFx0XHRcdGlkPXtpZH1cblx0XHRcdFx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdFx0XHRcdHByaWNlPXtwcmljZX1cblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdGNhdGVnb3J5PXtjYXRlZ29yeX1cblx0XHRcdFx0XHRcdGltYWdlPXtpbWFnZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9kdWN0cyIsIlByb2R1Y3RGZWVkIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzbGljZSIsIm1hcCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImltZyIsInNyYyIsImFsdCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n"));

/***/ })

});