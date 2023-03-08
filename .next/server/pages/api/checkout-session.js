"use strict";
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
exports.id = "pages/api/checkout-session";
exports.ids = ["pages/api/checkout-session"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/checkout-session.js":
/*!*******************************************!*\
  !*** ./src/pages/api/checkout-session.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { items , email  } = req.body;\n    const transformedItems = items.map((item)=>({\n            quantity: 1,\n            price_data: {\n                currency: \"NGN\",\n                unit_amount: item.price * 100,\n                product_data: {\n                    name: item.title,\n                    images: [\n                        item.image\n                    ],\n                    description: item.description\n                }\n            }\n        }));\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        shipping_address_collection: {\n            allowed_countries: [\n                \"NG\",\n                \"US\",\n                \"CA\"\n            ]\n        },\n        shipping_options: [\n            {\n                shipping_rate: \"shr_1MiyM8H1gUFXuLU8riKW6G7d\"\n            }\n        ],\n        line_items: transformedItems,\n        mode: \"payment\",\n        success_url: `${process.env.HOST}/success`,\n        cancel_url: `${process.env.HOST}/checkout`,\n        metadata: {\n            email,\n            images: JSON.stringify(items.map((item)=>item.image))\n        }\n    });\n    res.status(200).json({\n        id: session.id\n    });\n}); //\n //\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoZWNrb3V0LXNlc3Npb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFNBQVNDLG1CQUFPQSxDQUFDLHdCQUFVQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUs5RCxpRUFBZSxPQUFNQyxLQUFLQyxNQUFRO0lBQzlCLE1BQU0sRUFBQ0MsTUFBSyxFQUFFQyxNQUFLLEVBQUMsR0FBR0gsSUFBSUksSUFBSTtJQUMvQixNQUFNQyxtQkFBbUJILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQy9DQyxVQUFVO1lBQ1ZDLFlBQVk7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLGFBQWFKLEtBQUtLLEtBQUssR0FBRztnQkFDMUJDLGNBQWM7b0JBQ2JDLE1BQU1QLEtBQUtRLEtBQUs7b0JBQ2hCQyxRQUFRO3dCQUFDVCxLQUFLVSxLQUFLO3FCQUFDO29CQUNwQkMsYUFBYVgsS0FBS1csV0FBVztnQkFDOUI7WUFDRDtRQUNEO0lBQ0UsTUFBTUMsVUFBVSxNQUFNeEIsT0FBT3lCLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7UUFDdkRDLHNCQUFzQjtZQUFDO1NBQU87UUFDOUJDLDZCQUE2QjtZQUM1QkMsbUJBQW1CO2dCQUFDO2dCQUFNO2dCQUFNO2FBQUs7UUFDdEM7UUFDQ0Msa0JBQWtCO1lBQUM7Z0JBQUNDLGVBQWU7WUFBOEI7U0FBRTtRQUVwRUMsWUFBWXZCO1FBQ1p3QixNQUFNO1FBQ05DLGFBQWEsQ0FBQyxFQUFFakMsUUFBUUMsR0FBRyxDQUFDaUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQ0MsWUFBWSxDQUFDLEVBQUVuQyxRQUFRQyxHQUFHLENBQUNpQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFDRSxVQUFVO1lBQ1Q5QjtZQUNBYSxRQUFRa0IsS0FBS0MsU0FBUyxDQUFDakMsTUFBTUksR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtVLEtBQUs7UUFDdEQ7SUFDRDtJQUVGaEIsSUFBSW1DLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBQ0MsSUFBSW5CLFFBQVFtQixFQUFFO0lBQUE7QUFFcEMsR0FBRSxDQUNGLEVBQUU7Q0FDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3BhZ2VzL2FwaS9jaGVja291dC1zZXNzaW9uLmpzP2NlYWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHtpdGVtcywgZW1haWx9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcblx0XHRcdHF1YW50aXR5OiAxLFxuXHRcdFx0cHJpY2VfZGF0YToge1xuXHRcdFx0XHRjdXJyZW5jeTogXCJOR05cIixcblx0XHRcdFx0dW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXG5cdFx0XHRcdHByb2R1Y3RfZGF0YToge1xuXHRcdFx0XHRcdG5hbWU6IGl0ZW0udGl0bGUsXG5cdFx0XHRcdFx0aW1hZ2VzOiBbaXRlbS5pbWFnZV0sXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH0pKTtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG5cdFx0XHRwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcblx0XHRcdHNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbjoge1xuXHRcdFx0XHRhbGxvd2VkX2NvdW50cmllczogW1wiTkdcIiwgXCJVU1wiLCBcIkNBXCJdLFxuXHRcdFx0fSxcblx0XHRcdCBzaGlwcGluZ19vcHRpb25zOiBbe3NoaXBwaW5nX3JhdGU6ICdzaHJfMU1peU04SDFnVUZYdUxVOHJpS1c2RzdkJ31dLFxuXHRcdFx0XG5cdFx0XHRsaW5lX2l0ZW1zOiB0cmFuc2Zvcm1lZEl0ZW1zLFxuXHRcdFx0bW9kZTogXCJwYXltZW50XCIsXG5cdFx0XHRzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3VjY2Vzc2AsXG5cdFx0XHRjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9jaGVja291dGAsXG5cdFx0XHRtZXRhZGF0YToge1xuXHRcdFx0XHRlbWFpbCxcblx0XHRcdFx0aW1hZ2VzOiBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaW1hZ2UpKSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cbnJlcy5zdGF0dXMoMjAwKS5qc29uKHtpZDogc2Vzc2lvbi5pZH0pO1xuICAgIFxufTtcbi8vXG4vL1xuIl0sIm5hbWVzIjpbInN0cmlwZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJyZXEiLCJyZXMiLCJpdGVtcyIsImVtYWlsIiwiYm9keSIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJwcmljZV9kYXRhIiwiY3VycmVuY3kiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwicHJvZHVjdF9kYXRhIiwibmFtZSIsInRpdGxlIiwiaW1hZ2VzIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJhbGxvd2VkX2NvdW50cmllcyIsInNoaXBwaW5nX29wdGlvbnMiLCJzaGlwcGluZ19yYXRlIiwibGluZV9pdGVtcyIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIkhPU1QiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/checkout-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/checkout-session.js"));
module.exports = __webpack_exports__;

})();