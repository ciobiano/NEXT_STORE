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
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "mirco":
/*!************************!*\
  !*** external "mirco" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mirco");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mirco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mirco */ \"mirco\");\n/* harmony import */ var mirco__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mirco__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Secure your firebase admin sdk\nconst serviceAccount = __webpack_require__(/*! ../../../permission.json */ \"(api)/./permission.json\");\nconst app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({\n    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)\n}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app();\n//Stripe connection to firebase\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nconst endpointSecret = process.env.STRIPE_SIGNING_SECRET;\nconst fulfillOrder = async (session)=>{\n    console.log(\"Fulfilling order\", session);\n    return app.firestore().collection(\"users\").doc(session.metadata.email).collection(\"orders\").doc(session.id).set({\n        amount: session.amount_total / 100,\n        amount_shipping: session.total_details.amount_shipping / 100,\n        images: JSON.parse(session.metadata.images),\n        timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()\n    }).then(()=>{\n        console.log(`SUCCESS: Order ${session.id} has been added to the DB`);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const requestBuffer = await (0,mirco__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);\n        const payload = requestBuffer.toString();\n        const sig = req.headers[\"stripe-signature\"];\n        let event;\n        //verify Event from strip\n        try {\n            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);\n        } catch (err) {\n            console.log(\"Error\", err.message);\n            return res.status(400).send(`Webhook error: ${err.message}`);\n        }\n        //Handle the checkout.session.completed event\n        if (event.type === \"checkout.session.completed\") {\n            const session = event.data.object;\n            //Fullfill the order\n            return fulfillOrder(session).then(()=>res.status(200)).catch((err)=>res.status(400).send(`Webhook error: ${err.message}`));\n        }\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false,\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFFdkMsaUNBQWlDO0FBQ2pDLE1BQU1FLGlCQUFpQkMsbUJBQU9BLENBQUM7QUFFL0IsTUFBTUMsTUFBTSxDQUFDSCx1REFBaUIsR0FBR0EseURBQW1CLENBQUM7SUFDakRPLFlBQVlQLDJEQUFxQixDQUFDQztBQUN0QyxLQUFLRCwrQ0FBUyxFQUFFO0FBRWhCLCtCQUErQjtBQUMvQixNQUFNUyxTQUFTUCxtQkFBT0EsQ0FBQyx3QkFBVVEsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7QUFFOUQsTUFBTUMsaUJBQWlCSCxRQUFRQyxHQUFHLENBQUNHLHFCQUFxQjtBQUV4RCxNQUFNQyxlQUFlLE9BQU9DLFVBQVk7SUFDcENDLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGO0lBRWhDLE9BQU9iLElBQUlnQixTQUFTLEdBQUdDLFVBQVUsQ0FBQyxTQUFTQyxHQUFHLENBQUNMLFFBQVFNLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFSCxVQUFVLENBQUMsVUFBVUMsR0FBRyxDQUFDTCxRQUFRUSxFQUFFLEVBQUVDLEdBQUcsQ0FBQztRQUM1R0MsUUFBUVYsUUFBUVcsWUFBWSxHQUFHO1FBQy9CQyxpQkFBaUJaLFFBQVFhLGFBQWEsQ0FBQ0QsZUFBZSxHQUFHO1FBQ3pERSxRQUFRQyxLQUFLQyxLQUFLLENBQUNoQixRQUFRTSxRQUFRLENBQUNRLE1BQU07UUFDMUNHLFdBQVdqQyxnRkFBMEM7SUFDekQsR0FBR29DLElBQUksQ0FBQyxJQUFNO1FBQ1ZuQixRQUFRQyxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUVGLFFBQVFRLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RTtBQUNKO0FBRUEsaUVBQWUsT0FBT2EsS0FBS0MsTUFBTTtJQUU3QixJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBTztRQUV0QixNQUFNQyxnQkFBZ0IsTUFBTXpDLDZDQUFNQSxDQUFDc0M7UUFDbkMsTUFBTUksVUFBVUQsY0FBY0UsUUFBUTtRQUV0QyxNQUFNQyxNQUFNTixJQUFJTyxPQUFPLENBQUMsbUJBQW1CO1FBRTNDLElBQUlDO1FBRUoseUJBQXlCO1FBQ3pCLElBQUc7WUFFQ0EsUUFBUXBDLE9BQU9xQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ04sU0FBU0UsS0FBSzlCO1FBRXpELEVBQUMsT0FBTW1DLEtBQUk7WUFFSC9CLFFBQVFDLEdBQUcsQ0FBQyxTQUFTOEIsSUFBSUMsT0FBTztZQUNoQyxPQUFPWCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFSCxJQUFJQyxPQUFPLENBQUMsQ0FBQztRQUUvRDtRQUVBLDZDQUE2QztRQUM3QyxJQUFJSixNQUFNTyxJQUFJLEtBQUssOEJBQTZCO1lBQzVDLE1BQU1wQyxVQUFVNkIsTUFBTVEsSUFBSSxDQUFDQyxNQUFNO1lBRWpDLG9CQUFvQjtZQUNwQixPQUFPdkMsYUFBYUMsU0FBU29CLElBQUksQ0FBQyxJQUFNRSxJQUFJWSxNQUFNLENBQUMsTUFBTUssS0FBSyxDQUFDLENBQUNQLE1BQVFWLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUVILElBQUlDLE9BQU8sQ0FBQyxDQUFDO1FBRWhJLENBQUM7SUFHVCxDQUFDO0FBQ0wsR0FBQztBQUVNLE1BQU1PLFNBQVE7SUFDakJDLEtBQUs7UUFDREMsWUFBWSxLQUFLO1FBQ2pCQyxrQkFBa0IsSUFBSTtJQUMxQjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanM/M2Y3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2J1ZmZlcn0gZnJvbSAnbWlyY28nXG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbidcblxuLy8gU2VjdXJlIHlvdXIgZmlyZWJhc2UgYWRtaW4gc2RrXG5jb25zdCBzZXJ2aWNlQWNjb3VudCA9IHJlcXVpcmUoJy4uLy4uLy4uL3Blcm1pc3Npb24uanNvbicpXG5cbmNvbnN0IGFwcCA9ICFhZG1pbi5hcHBzLmxlbmd0aCA/IGFkbWluLmluaXRpYWxpemVBcHAoe1xuICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudClcbn0pIDogYWRtaW4uYXBwKCk7XG5cbi8vU3RyaXBlIGNvbm5lY3Rpb24gdG8gZmlyZWJhc2VcbmNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoJ3N0cmlwZScpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuY29uc3QgZW5kcG9pbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5TVFJJUEVfU0lHTklOR19TRUNSRVQ7XG5cbmNvbnN0IGZ1bGZpbGxPcmRlciA9IGFzeW5jIChzZXNzaW9uKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0Z1bGZpbGxpbmcgb3JkZXInLCBzZXNzaW9uKVxuXG4gICAgcmV0dXJuIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCd1c2VycycpLmRvYyhzZXNzaW9uLm1ldGFkYXRhLmVtYWlsKS5jb2xsZWN0aW9uKCdvcmRlcnMnKS5kb2Moc2Vzc2lvbi5pZCkuc2V0KHtcbiAgICAgICAgYW1vdW50OiBzZXNzaW9uLmFtb3VudF90b3RhbCAvIDEwMCxcbiAgICAgICAgYW1vdW50X3NoaXBwaW5nOiBzZXNzaW9uLnRvdGFsX2RldGFpbHMuYW1vdW50X3NoaXBwaW5nIC8gMTAwLFxuICAgICAgICBpbWFnZXM6IEpTT04ucGFyc2Uoc2Vzc2lvbi5tZXRhZGF0YS5pbWFnZXMpLFxuICAgICAgICB0aW1lc3RhbXA6IGFkbWluLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBTVUNDRVNTOiBPcmRlciAke3Nlc3Npb24uaWR9IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBEQmApXG4gICAgfSkgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcyk9PntcblxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpe1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RCdWZmZXIgPSBhd2FpdCBidWZmZXIocmVxKVxuICAgICAgICBjb25zdCBwYXlsb2FkID0gcmVxdWVzdEJ1ZmZlci50b1N0cmluZygpXG5cbiAgICAgICAgY29uc3Qgc2lnID0gcmVxLmhlYWRlcnNbJ3N0cmlwZS1zaWduYXR1cmUnXVxuXG4gICAgICAgIGxldCBldmVudDtcblxuICAgICAgICAvL3ZlcmlmeSBFdmVudCBmcm9tIHN0cmlwXG4gICAgICAgIHRyeXtcblxuICAgICAgICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQocGF5bG9hZCwgc2lnLCBlbmRwb2ludFNlY3JldClcblxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnIubWVzc2FnZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYFdlYmhvb2sgZXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YClcbiAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9IYW5kbGUgdGhlIGNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkIGV2ZW50XG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkJyl7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0XG5cbiAgICAgICAgICAgICAgICAvL0Z1bGxmaWxsIHRoZSBvcmRlclxuICAgICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsT3JkZXIoc2Vzc2lvbikudGhlbigoKSA9PiByZXMuc3RhdHVzKDIwMCkpLmNhdGNoKChlcnIpID0+IHJlcy5zdGF0dXMoNDAwKS5zZW5kKGBXZWJob29rIGVycm9yOiAke2Vyci5tZXNzYWdlfWApKVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG5cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPXtcbiAgICBhcGk6IHtcbiAgICAgICAgYm9keVBhcnNlcjogZmFsc2UsXG4gICAgICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWVcbiAgICB9XG59Il0sIm5hbWVzIjpbImJ1ZmZlciIsImFkbWluIiwic2VydmljZUFjY291bnQiLCJyZXF1aXJlIiwiYXBwIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJjcmVkZW50aWFsIiwiY2VydCIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImVuZHBvaW50U2VjcmV0IiwiU1RSSVBFX1NJR05JTkdfU0VDUkVUIiwiZnVsZmlsbE9yZGVyIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ0aGVuIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVxdWVzdEJ1ZmZlciIsInBheWxvYWQiLCJ0b1N0cmluZyIsInNpZyIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJlcnIiLCJtZXNzYWdlIiwic3RhdHVzIiwic2VuZCIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiY2F0Y2giLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhook.js\n");

/***/ }),

/***/ "(api)/./permission.json":
/*!*************************!*\
  !*** ./permission.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"clone-c63b9","private_key_id":"374cad231912ca5a31f8839712a6a34dbaaba9b9","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC66kCclflQChC6\\n7oeNJ81eU6Y1u301NWgOXztP9pe2Xxh1FxkvXTWapPYobgOevk2D+ZF/U6XDjG/g\\nlfkYHqsWHz3a1bTE6P3svkLIdncD2qdFBB4cKa01zqf/ayptSb+q75IA7QCOtOnv\\nOYf17Efy3u+lN+Y+fntkjAJo/tnRdO38FHCCqd7jqYg7Btx/ShQh5g/VZcYLTxOy\\ne43w0PCitdHjr0igyQfNEPLN6EuEPlTYYvKEyLxpOO6fSCbw0XKCGleEXDirNBX5\\nA72zlplhePNc5d206J4sMc9EE8TcJcUojZsxFx5n0hydoApB4HK8CeRNIsKnpNwX\\nL1PfjQ39AgMBAAECgf8u9f/FwZj1y+nfVAFmqFT3YD1o1EG5Qh3ts23Y/1//tlvo\\nGAsWUEnIkv1xxXAEgaPZLpH38i1Hcf8cl/Keo1yJSpsr+FTV3Zly/lGPuCIqYML5\\ntSvSpV9USwPCs4j78LnYPzDx0TjQbPegE50XcNVcNnZBfPg/Z3G38nVQSJQmOc7a\\n5o8g0vbhoJbBKSUUFQ7IA7YkJNKoYxGG3atxBFnWCLZGxrTd//mNa6b1n8u4PaT5\\nJ1CSwQaLQ54TNeMavbuk7jf+zlhWDgbGLVQ39QgK4QH8PsKKvFElO29c8BK1gJBk\\nPtxqivnruvJ/PVuTMi2zbtm+7ZRtQFIpsFPo0+ECgYEA2we17W7Gfo4paO9FZFXH\\nZAzG7P57rkpAmor9MWU1ECk0iDQAeFJ5a3+bqVfaX3HHofweYfrzAx0H4gyEopJl\\n2oewukZa/Le5WPwchgux8JJ5wOdMSC7FyL4sxUptoWXvU8zxzUa5dGyPwP1z3qIa\\n2Drx7Om0d2J3eTSWDrHxGF0CgYEA2nbZjW2QUQCgL1gBsJRYdP3hKdZKEYtQABoz\\nozSAzsVy5DEENvqx9ZRRGN9+CDYjuYXRKQJWr5Fgrtso9Liy2rC2Q1TlJoYLzmDv\\ndB3if24UcSNgnHHOk5zmWlTxtQLmZ5/Sy7pM3hu4OqyAVPylVide2vyww4cKxlqM\\nVnUl8iECgYBb9s/XQmTLbGtMqPIs36tZgdfgWDWcB4c6nFMU81alU3fAHH16B779\\neNXl84I4AvD8PXyQTSrNytmteu4RyIBFkiWNAM9hPs7u4uQjEDQFO6staLBpumHH\\nGLp5l/eSBdfICswYEbL6hD6TnJeTCeNVmOJNRA9G9SwO0xqSTvpY7QKBgQDIktnG\\neVNIq3RmQzy57FkSgI0bpjy2wtseXPAP5YJlVO7ZBw/BkoWU3Slf1sGVtG80Q+H2\\n7si7xJOptllx5amAE0Ijq2v/5I4uWt0+FLoBGQX3oe1vdSWebS0ovlh0Qkdb2Gbm\\n2RL90SFh7UKdxJ/f66GxGNMJkZCY8EVsk33VQQKBgGWDqe7K7KW4GbmkAT5TuTaw\\nSqakAWEV2b1csCwEKK1SexBEaNit/lOfWF/C9YNmcPkyyIeYPNkCwox1eY9fFiZ/\\nCz2+AgvHjBiggNLaAL+LduxQ3U5kgoQ6GJnomkkEqhC1RSlYOOqufiwoJTI/1EjE\\nVGLf6OM5iMkh/4lGrtv+\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-jzdlh@clone-c63b9.iam.gserviceaccount.com","client_id":"109908870017660273861","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jzdlh%40clone-c63b9.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();