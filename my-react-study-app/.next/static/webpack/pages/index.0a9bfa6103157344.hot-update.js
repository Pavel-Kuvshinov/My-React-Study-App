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

/***/ "./src/widgets/itemsSection/itemsSection.tsx":
/*!***************************************************!*\
  !*** ./src/widgets/itemsSection/itemsSection.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemsSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemsSection.module.css */ \"./src/widgets/itemsSection/itemsSection.module.css\");\n/* harmony import */ var _itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/store/store */ \"./src/shared/store/store.ts\");\n/* harmony import */ var _pagination_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pagination/pagination */ \"./src/widgets/pagination/pagination.tsx\");\n/* harmony import */ var _shared_store_itemsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/store/itemsSlice */ \"./src/shared/store/itemsSlice.ts\");\n/* harmony import */ var _detailedItem_detailedItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detailedItem/detailedItem */ \"./src/widgets/detailedItem/detailedItem.tsx\");\n/* harmony import */ var _shared_store_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/store/selectedItemsSlice */ \"./src/shared/store/selectedItemsSlice.ts\");\n/* harmony import */ var _detailedSection_detailedItemsControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detailedSection/detailedItemsControls */ \"./src/widgets/detailedSection/detailedItemsControls.tsx\");\n/* harmony import */ var _shared_context_themeMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/context/themeMode */ \"./src/shared/context/themeMode.tsx\");\n\nvar _s = $RefreshSig$();\n\n// import { useEffect } from 'react';\n\n\n// import Loader from '../loader/loader';\n\n\n\n\n\nfunction ItemsSection(props) {\n    _s();\n    const { isDark } = (0,_shared_context_themeMode__WEBPACK_IMPORTED_MODULE_8__.useTheme)();\n    const { currentId, section, loading } = (0,_shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.items);\n    const { selectedItems } = (0,_shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.itemsSelected);\n    const { setSelectedItems, unsetSelectedItems } = _shared_store_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_6__.itemsSelectedSlice.actions;\n    const { setLoading, setCurrentId } = _shared_store_itemsSlice__WEBPACK_IMPORTED_MODULE_4__.itemsSlice.actions;\n    const dispatch = (0,_shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const { data, dataItem } = props;\n    console.log(dataItem);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: isDark ? \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark)) : \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().light)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__wrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__search_section),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__items),\n                                    children: [\n                                        Object.keys(data.info).length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pagination_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            info: data.info\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 74\n                                        }, this),\n                                        data === null || data === void 0 ? void 0 : data.results.map((item, index)=>{\n                                            const currentItem = item;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: isDark ? \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark)) : \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().light)),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        \"data-testid\": \"item-checkbox\",\n                                                        className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item_checkbox),\n                                                        type: \"checkbox\",\n                                                        checked: selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some((elem)=>JSON.stringify(elem) === JSON.stringify(currentItem)),\n                                                        onChange: (e)=>{\n                                                            if (e.target.checked) {\n                                                                dispatch(setSelectedItems(currentItem));\n                                                            } else {\n                                                                dispatch(unsetSelectedItems(currentItem));\n                                                            }\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                        lineNumber: 42,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: [\n                                                                    \"name: \",\n                                                                    currentItem.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                                lineNumber: 58,\n                                                                columnNumber: 49\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                type: \"button\",\n                                                                \"data-testid\": \"item-button\",\n                                                                id: \"\".concat(currentItem.id),\n                                                                className: isDark ? \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item_button), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark)) : \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item_button), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().light)),\n                                                                onClick: (e)=>{\n                                                                    const targetElem = e.target;\n                                                                    if (!targetElem.classList.contains(\"main__item_checkbox\")) {\n                                                                        dispatch(setCurrentId(currentItem.id));\n                                                                        document.body.style.overflow = \"hidden\";\n                                                                        document.body.style.userSelect = \"none\";\n                                                                    }\n                                                                },\n                                                                children: \"Detail\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                                lineNumber: 59,\n                                                                columnNumber: 49\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, \"\".concat(section, \"-\").concat(String(index)), true, {\n                                                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 41\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, this),\n                                selectedItems.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_detailedSection_detailedItemsControls__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 58\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        currentId === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_detailedItem_detailedItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 55\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ItemsSection, \"mCsQEtcI0h9Pya4VYjBHZRuS+J8=\", false, function() {\n    return [\n        _shared_context_themeMode__WEBPACK_IMPORTED_MODULE_8__.useTheme,\n        _shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ItemsSection;\nvar _c;\n$RefreshReg$(_c, \"ItemsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2lkZ2V0cy9pdGVtc1NlY3Rpb24vaXRlbXNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUMvQyxxQ0FBcUM7QUFDcUM7QUFFeEI7QUFDbEQseUNBQXlDO0FBQ2tCO0FBQ0g7QUFDbUI7QUFDRTtBQUNuQjtBQUUzQyxTQUFTUyxhQUFhQyxLQUF3Qjs7SUFDekQsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0gsbUVBQVFBO0lBQzNCLE1BQU0sRUFBRUksU0FBUyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHWixtRUFBY0EsQ0FBQyxDQUFDYSxRQUFVQSxNQUFNQyxLQUFLO0lBQzdFLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdmLG1FQUFjQSxDQUFDLENBQUNhLFFBQVVBLE1BQU1HLGFBQWE7SUFDdkUsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR2QsZ0ZBQWtCQSxDQUFDZSxPQUFPO0lBQzNFLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUUsR0FBR25CLGdFQUFVQSxDQUFDaUIsT0FBTztJQUN2RCxNQUFNRyxXQUFXdkIsbUVBQWNBO0lBQy9CLE1BQU0sRUFBRXdCLElBQUksRUFBRUMsUUFBUSxFQUFFLEdBQUdoQjtJQUMzQmlCLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixxQkFDSTtrQkFDSSw0RUFBQ0c7WUFBS0MsV0FBV25CLFNBQVMsR0FBa0JYLE9BQWZBLHNFQUFXLEVBQUMsS0FBZSxPQUFaQSxzRUFBVyxJQUFLLEdBQWtCQSxPQUFmQSxzRUFBVyxFQUFDLEtBQWdCLE9BQWJBLHVFQUFZO3NCQUN0Riw0RUFBQ2lDO2dCQUFJSCxXQUFXOUIsK0VBQW9COzBCQUNoQyw0RUFBQ2lDO29CQUFJSCxXQUFXOUIsK0VBQW9COztzQ0FDaEMsOERBQUNpQzs0QkFBSUgsV0FBVzlCLHNGQUEyQjs7OENBQ3ZDLDhEQUFDaUM7b0NBQUlILFdBQVc5Qiw2RUFBa0I7O3dDQUM3QnNDLE9BQU9DLElBQUksQ0FBQ2QsS0FBTWUsSUFBSSxFQUFFQyxNQUFNLEtBQUssbUJBQUssOERBQUN0Qyw4REFBVUE7NENBQUNxQyxNQUFNZixLQUFNZSxJQUFJOzs7Ozs7d0NBQ3BFZixpQkFBQUEsMkJBQUFBLEtBQU1pQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzs0Q0FDdEIsTUFBTUMsY0FBY0Y7NENBQ3BCLHFCQUNJLDhEQUFDWDtnREFDR0gsV0FDSW5CLFNBQ00sR0FBd0JYLE9BQXJCQSw0RUFBaUIsRUFBQyxLQUFlLE9BQVpBLHNFQUFXLElBQ25DLEdBQXdCQSxPQUFyQkEsNEVBQWlCLEVBQUMsS0FBZ0IsT0FBYkEsdUVBQVk7O2tFQUk5Qyw4REFBQ2dEO3dEQUNHQyxlQUFZO3dEQUNabkIsV0FBVzlCLHFGQUEwQjt3REFDckNtRCxNQUFLO3dEQUNMQyxPQUFPLEVBQUVuQywwQkFBQUEsb0NBQUFBLGNBQWVvQyxJQUFJLENBQ3hCLENBQUNDLE9BQVNDLEtBQUtDLFNBQVMsQ0FBQ0YsVUFBVUMsS0FBS0MsU0FBUyxDQUFDVjt3REFFdERXLFVBQVUsQ0FBQ0M7NERBQ1AsSUFBSUEsRUFBRUMsTUFBTSxDQUFDUCxPQUFPLEVBQUU7Z0VBQ2xCNUIsU0FBU0wsaUJBQWlCMkI7NERBQzlCLE9BQU87Z0VBQ0h0QixTQUFTSixtQkFBbUIwQjs0REFDaEM7d0RBQ0o7Ozs7OztrRUFFSiw4REFBQ2I7OzBFQUNHLDhEQUFDMkI7O29FQUFFO29FQUFPZCxZQUFZZSxJQUFJOzs7Ozs7OzBFQUMxQiw4REFBQ0M7Z0VBQ0dYLE1BQUs7Z0VBQ0xGLGVBQVk7Z0VBQ1pjLElBQUksR0FBa0IsT0FBZmpCLFlBQVlpQixFQUFFO2dFQUNyQmpDLFdBQ0luQixTQUNNLEdBQStCWCxPQUE1QkEsbUZBQXdCLEVBQUMsS0FBZSxPQUFaQSxzRUFBVyxJQUMxQyxHQUErQkEsT0FBNUJBLG1GQUF3QixFQUFDLEtBQWdCLE9BQWJBLHVFQUFZO2dFQUVyRGlFLFNBQVMsQ0FBQ1A7b0VBQ04sTUFBTVEsYUFBYVIsRUFBRUMsTUFBTTtvRUFDM0IsSUFBSSxDQUFDTyxXQUFXQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyx3QkFBd0I7d0VBQ3ZENUMsU0FBU0QsYUFBYXVCLFlBQVlpQixFQUFFO3dFQUNwQ00sU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFFBQVEsR0FBRzt3RUFDL0JILFNBQVNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRSxVQUFVLEdBQUc7b0VBQ3JDO2dFQUNKOzBFQUNIOzs7Ozs7Ozs7Ozs7OytDQXBDQSxHQUFjQyxPQUFYN0QsU0FBUSxLQUFpQixPQUFkNkQsT0FBTzdCOzs7Ozt3Q0EwQ3RDOzs7Ozs7O2dDQUVINUIsY0FBZXdCLE1BQU0sR0FBRyxrQkFBSSw4REFBQ2xDLDhFQUFxQkE7Ozs7eURBQU07Ozs7Ozs7d0JBRTVESyxjQUFjLHFCQUFPLDhKQUFRLDhEQUFDUCxrRUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkU7R0EvRXdCSTs7UUFDREQsK0RBQVFBO1FBQ2FOLCtEQUFjQTtRQUM1QkEsK0RBQWNBO1FBR3ZCRCwrREFBY0E7OztLQU5YUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy9pdGVtc1NlY3Rpb24vaXRlbXNTZWN0aW9uLnRzeD85NTNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pdGVtc1NlY3Rpb24ubW9kdWxlLmNzcyc7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RvcmUvc3RvcmUnO1xuaW1wb3J0IHsgRWxlbWVudFJlcXVlc3QsIEl0ZW1zU2VjdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL3BhZ2luYXRpb24vcGFnaW5hdGlvbic7XG4vLyBpbXBvcnQgTG9hZGVyIGZyb20gJy4uL2xvYWRlci9sb2FkZXInO1xuaW1wb3J0IHsgaXRlbXNTbGljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdG9yZS9pdGVtc1NsaWNlJztcbmltcG9ydCBEZXRhaWxlZEl0ZW0gZnJvbSAnLi4vZGV0YWlsZWRJdGVtL2RldGFpbGVkSXRlbSc7XG5pbXBvcnQgeyBpdGVtc1NlbGVjdGVkU2xpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc3RvcmUvc2VsZWN0ZWRJdGVtc1NsaWNlJztcbmltcG9ydCBEZXRhaWxlZEl0ZW1zQ29udHJvbHMgZnJvbSAnLi4vZGV0YWlsZWRTZWN0aW9uL2RldGFpbGVkSXRlbXNDb250cm9scyc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb250ZXh0L3RoZW1lTW9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1zU2VjdGlvbihwcm9wczogSXRlbXNTZWN0aW9uUHJvcHMpIHtcbiAgICBjb25zdCB7IGlzRGFyayB9ID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCB7IGN1cnJlbnRJZCwgc2VjdGlvbiwgbG9hZGluZyB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pdGVtcyk7XG4gICAgY29uc3QgeyBzZWxlY3RlZEl0ZW1zIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLml0ZW1zU2VsZWN0ZWQpO1xuICAgIGNvbnN0IHsgc2V0U2VsZWN0ZWRJdGVtcywgdW5zZXRTZWxlY3RlZEl0ZW1zIH0gPSBpdGVtc1NlbGVjdGVkU2xpY2UuYWN0aW9ucztcbiAgICBjb25zdCB7IHNldExvYWRpbmcsIHNldEN1cnJlbnRJZCB9ID0gaXRlbXNTbGljZS5hY3Rpb25zO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IGRhdGEsIGRhdGFJdGVtIH0gPSBwcm9wcztcbiAgICBjb25zb2xlLmxvZyhkYXRhSXRlbSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtpc0RhcmsgPyBgJHtzdHlsZXMubWFpbn0gJHtzdHlsZXMuZGFya31gIDogYCR7c3R5bGVzLm1haW59ICR7c3R5bGVzLmxpZ2h0fWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fd3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbl9fY29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX3NlYXJjaF9zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2l0ZW1zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGEhLmluZm8pLmxlbmd0aCAhPT0gMCAmJiA8UGFnaW5hdGlvbiBpbmZvPXtkYXRhIS5pbmZvfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGE/LnJlc3VsdHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSBpdGVtIGFzIEVsZW1lbnRSZXF1ZXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3N0eWxlcy5tYWluX19pdGVtfSAke3N0eWxlcy5kYXJrfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAke3N0eWxlcy5tYWluX19pdGVtfSAke3N0eWxlcy5saWdodH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtzZWN0aW9ufS0ke1N0cmluZyhpbmRleCl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJpdGVtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2l0ZW1fY2hlY2tib3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2VsZWN0ZWRJdGVtcz8uc29tZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWxlbSkgPT4gSlNPTi5zdHJpbmdpZnkoZWxlbSkgPT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRJdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkSXRlbXMoY3VycmVudEl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh1bnNldFNlbGVjdGVkSXRlbXMoY3VycmVudEl0ZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+bmFtZToge2N1cnJlbnRJdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaXRlbS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgJHtjdXJyZW50SXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGFya1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtzdHlsZXMubWFpbl9faXRlbV9idXR0b259ICR7c3R5bGVzLmRhcmt9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtzdHlsZXMubWFpbl9faXRlbV9idXR0b259ICR7c3R5bGVzLmxpZ2h0fWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbSA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRhcmdldEVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluX19pdGVtX2NoZWNrYm94JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldEN1cnJlbnRJZChjdXJyZW50SXRlbS5pZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW1zIS5sZW5ndGggPiAwID8gPERldGFpbGVkSXRlbXNDb250cm9scyAvPiA6IDw+PC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudElkID09PSBudWxsID8gPD48Lz4gOiA8RGV0YWlsZWRJdGVtIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiUGFnaW5hdGlvbiIsIml0ZW1zU2xpY2UiLCJEZXRhaWxlZEl0ZW0iLCJpdGVtc1NlbGVjdGVkU2xpY2UiLCJEZXRhaWxlZEl0ZW1zQ29udHJvbHMiLCJ1c2VUaGVtZSIsIkl0ZW1zU2VjdGlvbiIsInByb3BzIiwiaXNEYXJrIiwiY3VycmVudElkIiwic2VjdGlvbiIsImxvYWRpbmciLCJzdGF0ZSIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtcyIsIml0ZW1zU2VsZWN0ZWQiLCJzZXRTZWxlY3RlZEl0ZW1zIiwidW5zZXRTZWxlY3RlZEl0ZW1zIiwiYWN0aW9ucyIsInNldExvYWRpbmciLCJzZXRDdXJyZW50SWQiLCJkaXNwYXRjaCIsImRhdGEiLCJkYXRhSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiZGFyayIsImxpZ2h0IiwiZGl2IiwibWFpbl9fd3JhcHBlciIsIm1haW5fX2NvbnRlbnQiLCJtYWluX19zZWFyY2hfc2VjdGlvbiIsIm1haW5fX2l0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsImluZm8iLCJsZW5ndGgiLCJyZXN1bHRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3VycmVudEl0ZW0iLCJtYWluX19pdGVtIiwiaW5wdXQiLCJkYXRhLXRlc3RpZCIsIm1haW5fX2l0ZW1fY2hlY2tib3giLCJ0eXBlIiwiY2hlY2tlZCIsInNvbWUiLCJlbGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInAiLCJuYW1lIiwiYnV0dG9uIiwiaWQiLCJtYWluX19pdGVtX2J1dHRvbiIsIm9uQ2xpY2siLCJ0YXJnZXRFbGVtIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwidXNlclNlbGVjdCIsIlN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/widgets/itemsSection/itemsSection.tsx\n"));

/***/ })

});