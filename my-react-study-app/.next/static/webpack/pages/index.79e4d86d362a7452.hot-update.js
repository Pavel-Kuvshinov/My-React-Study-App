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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_widgets_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/widgets/header/header */ \"./src/widgets/header/header.tsx\");\n/* harmony import */ var _src_widgets_itemsSection_itemsSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/widgets/itemsSection/itemsSection */ \"./src/widgets/itemsSection/itemsSection.tsx\");\n/* harmony import */ var _src_widgets_startSection_startSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/widgets/startSection/startSection */ \"./src/widgets/startSection/startSection.tsx\");\n\n\n\n\n\nvar __N_SSP = true;\nfunction HomePage(param) {\n    let { itemsData, section, id, itemData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_widgets_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                section: section\n            }, void 0, false, {\n                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\pages\\\\index.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            section === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_widgets_startSection_startSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_widgets_itemsSection_itemsSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: itemsData,\n                section: section,\n                idItem: id,\n                dataItem: itemData\n            }, void 0, false, {\n                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUVrQjtBQUNBOztBQVlyRCxTQUFTSSxTQUFTLEtBQW1EO1FBQW5ELEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFQyxFQUFFLEVBQUVDLFFBQVEsRUFBaUIsR0FBbkQ7SUFDN0IscUJBQ0k7OzBCQUNJLDhEQUFDUCxrRUFBTUE7Z0JBQUNLLFNBQVNBOzs7Ozs7WUFDaEJBLFlBQVksbUJBQ1QsOERBQUNILDhFQUFZQTs7OztxQ0FFYiw4REFBQ0QsOEVBQVlBO2dCQUFDTyxNQUFNSjtnQkFBV0MsU0FBU0E7Z0JBQVNJLFFBQVFIO2dCQUFJSSxVQUFVSDs7Ozs7Ozs7QUFJdkY7S0FYd0JKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL3NyYy93aWRnZXRzL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gJy4uL3NyYy9zaGFyZWQvc3RvcmUvc3RvcmUnO1xuaW1wb3J0IEl0ZW1zU2VjdGlvbiBmcm9tICcuLi9zcmMvd2lkZ2V0cy9pdGVtc1NlY3Rpb24vaXRlbXNTZWN0aW9uJztcbmltcG9ydCBTdGFydFNlY3Rpb24gZnJvbSAnLi4vc3JjL3dpZGdldHMvc3RhcnRTZWN0aW9uL3N0YXJ0U2VjdGlvbic7XG5pbXBvcnQgeyBBcGlSZXF1ZXN0LCBFbGVtZW50UmVxdWVzdCB9IGZyb20gJy4uL3NyYy9zaGFyZWQvdHlwZXMnO1xuaW1wb3J0IHsgaXRlbXNBcGkgfSBmcm9tICcuLi9zcmMvc2hhcmVkL2FwaS9pdGVtc0FwaSc7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcblxuZXhwb3J0IGludGVyZmFjZSBNYWluUGFnZVByb3BzIHtcbiAgICBpdGVtc0RhdGE6IEFwaVJlcXVlc3Q7XG4gICAgc2VjdGlvbjogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG4gICAgaXRlbURhdGE6IEVsZW1lbnRSZXF1ZXN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGl0ZW1zRGF0YSwgc2VjdGlvbiwgaWQsIGl0ZW1EYXRhIH06IE1haW5QYWdlUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkZXIgc2VjdGlvbj17c2VjdGlvbn0gLz5cbiAgICAgICAgICAgIHtzZWN0aW9uID09PSAnJyA/IChcbiAgICAgICAgICAgICAgICA8U3RhcnRTZWN0aW9uIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxJdGVtc1NlY3Rpb24gZGF0YT17aXRlbXNEYXRhfSBzZWN0aW9uPXtzZWN0aW9ufSBpZEl0ZW09e2lkfSBkYXRhSXRlbT17aXRlbURhdGF9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcygoc3RvcmUpID0+IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gY29udGV4dDtcbiAgICBjb25zdCBuYW1lID0gKHF1ZXJ5LmN1cnJlbnRSZXF1ZXN0IGFzIHN0cmluZykgfHwgJyc7XG4gICAgY29uc3QgcGFnZSA9IE51bWJlcihxdWVyeS5jdXJyZW50UGFnZSkgfHwgMTtcbiAgICBjb25zdCBzZWN0aW9uID0gKHF1ZXJ5LnNlY3Rpb24gYXMgc3RyaW5nKSB8fCAnJztcbiAgICBjb25zdCBpZCA9IE51bWJlcihxdWVyeS5jdXJyZW50SWQpO1xuXG4gICAgY29uc3QgeyBkYXRhOiBpdGVtc0RhdGEgfSA9IGF3YWl0IHN0b3JlLmRpc3BhdGNoKGl0ZW1zQXBpLmVuZHBvaW50cy5nZXRJdGVtcy5pbml0aWF0ZSh7IHNlY3Rpb24sIG5hbWUsIHBhZ2UgfSkpO1xuXG4gICAgbGV0IGl0ZW1EYXRhOiBFbGVtZW50UmVxdWVzdCB8IG51bGwgPSBudWxsO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgc3RvcmUuZGlzcGF0Y2goaXRlbXNBcGkuZW5kcG9pbnRzLmdldEl0ZW0uaW5pdGlhdGUoeyBzZWN0aW9uLCBpZCB9KSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBpdGVtRGF0YSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaXRlbXNEYXRhLFxuICAgICAgICAgICAgc2VjdGlvbixcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgaXRlbURhdGEsXG4gICAgICAgIH0sXG4gICAgfTtcbn0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiSXRlbXNTZWN0aW9uIiwiU3RhcnRTZWN0aW9uIiwiSG9tZVBhZ2UiLCJpdGVtc0RhdGEiLCJzZWN0aW9uIiwiaWQiLCJpdGVtRGF0YSIsImRhdGEiLCJpZEl0ZW0iLCJkYXRhSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});