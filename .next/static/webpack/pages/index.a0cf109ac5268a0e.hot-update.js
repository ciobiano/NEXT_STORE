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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Products({ id , title , price , description , category , image  }) {\n    _s();\n    const [rating] = useState(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: category\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image,\n                width: 200,\n                height: 200,\n                style: {\n                    objectFit: \"contain\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StarIcon, {\n                        className: \"h-5 text-yellow-500\"\n                    }, void 0, false, {\n                        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bg_ralph/Documents/Webprojects/Nxt_store/src/components/Products.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Products, \"6jBYACx08V75OPKXIfmVLhdd/1U=\");\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDSztBQUU5QixTQUFTRSxTQUFTLEVBQUNDLEdBQUUsRUFBQ0MsTUFBSyxFQUFDQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsU0FBUSxFQUFDQyxNQUFLLEVBQUMsRUFBRTs7SUFFL0QsTUFBTSxDQUFDQyxPQUFPLEdBQUdDLFNBQVM7SUFDMUIscUJBQ0UsOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUdMOzs7Ozs7MEJBQ0osOERBQUNOLG1EQUFLQTtnQkFBQ1ksS0FBS0w7Z0JBQU9NLE9BQU87Z0JBQUtDLFFBQVE7Z0JBQUtDLE9BQU87b0JBQUNDLFdBQVU7Z0JBQVM7Ozs7OzswQkFDdkUsOERBQUNDOzBCQUFJZDs7Ozs7OzBCQUNMLDhEQUFDTztnQkFBSVEsV0FBVTswQkFDVkMsTUFBTVgsUUFBUVksSUFBSSxHQUFHQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRUMsa0JBQ3pCLDhEQUFDQzt3QkFBU04sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEM7R0FoQlNqQjtLQUFBQTtBQWtCVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0cy5qcz8zMWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5mdW5jdGlvbiBQcm9kdWN0cyh7aWQsdGl0bGUscHJpY2UgLGRlc2NyaXB0aW9uLCBjYXRlZ29yeSxpbWFnZX0pIHtcblxuICBjb25zdCBbcmF0aW5nXSA9IHVzZVN0YXRlKDIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxwPntjYXRlZ29yeX08L3A+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH0gc3R5bGU9e3tvYmplY3RGaXQ6XCJjb250YWluXCJ9fSAvPlxuICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAge0FycmF5KHJhdGluZykuZmlsbCgpLm1hcCgoXyxpKT0+KFxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9XCJoLTUgdGV4dC15ZWxsb3ctNTAwXCIgLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cyJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUHJvZHVjdHMiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJyYXRpbmciLCJ1c2VTdGF0ZSIsImRpdiIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwib2JqZWN0Rml0IiwiaDQiLCJjbGFzc05hbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSIsIlN0YXJJY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Products.js\n"));

/***/ })

});