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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemsSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemsSection.module.css */ \"./src/widgets/itemsSection/itemsSection.module.css\");\n/* harmony import */ var _itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/store/store */ \"./src/shared/store/store.ts\");\n/* harmony import */ var _pagination_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pagination/pagination */ \"./src/widgets/pagination/pagination.tsx\");\n/* harmony import */ var _shared_store_itemsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/store/itemsSlice */ \"./src/shared/store/itemsSlice.ts\");\n/* harmony import */ var _detailedItem_detailedItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detailedItem/detailedItem */ \"./src/widgets/detailedItem/detailedItem.tsx\");\n/* harmony import */ var _shared_store_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/store/selectedItemsSlice */ \"./src/shared/store/selectedItemsSlice.ts\");\n/* harmony import */ var _detailedSection_detailedItemsControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../detailedSection/detailedItemsControls */ \"./src/widgets/detailedSection/detailedItemsControls.tsx\");\n/* harmony import */ var _shared_context_themeMode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/context/themeMode */ \"./src/shared/context/themeMode.tsx\");\n\nvar _s = $RefreshSig$();\n\n// import { useEffect } from 'react';\n\n\n// import Loader from '../loader/loader';\n\n\n\n\n\nfunction ItemsSection(props) {\n    _s();\n    const { isDark } = (0,_shared_context_themeMode__WEBPACK_IMPORTED_MODULE_8__.useTheme)();\n    const { currentId, section, loading } = (0,_shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.items);\n    const { selectedItems } = (0,_shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.itemsSelected);\n    const { setSelectedItems, unsetSelectedItems } = _shared_store_selectedItemsSlice__WEBPACK_IMPORTED_MODULE_6__.itemsSelectedSlice.actions;\n    const { setLoading, setCurrentId } = _shared_store_itemsSlice__WEBPACK_IMPORTED_MODULE_4__.itemsSlice.actions;\n    const dispatch = (0,_shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const { data, idItem, dataItem } = props;\n    console.log(\"idItem\");\n    console.log(idItem);\n    console.log(\"dataItem\");\n    console.log(dataItem);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: isDark ? \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark)) : \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().light)),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__wrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__search_section),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__items),\n                                    children: [\n                                        Object.keys(data.info).length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pagination_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            info: data.info\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 74\n                                        }, this),\n                                        data === null || data === void 0 ? void 0 : data.results.map((item, index)=>{\n                                            const currentItem = item;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: isDark ? \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark)) : \"\".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().light)),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        \"data-testid\": \"item-checkbox\",\n                                                        className: (_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item_checkbox),\n                                                        type: \"checkbox\",\n                                                        checked: selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.some((elem)=>JSON.stringify(elem) === JSON.stringify(currentItem)),\n                                                        onChange: (e)=>{\n                                                            if (e.target.checked) {\n                                                                dispatch(setSelectedItems(currentItem));\n                                                            } else {\n                                                                dispatch(unsetSelectedItems(currentItem));\n                                                            }\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: [\n                                                                    \"name: \",\n                                                                    currentItem.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 49\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                                type: \"button\",\n                                                                \"data-testid\": \"item-button\",\n                                                                id: \"\".concat(currentItem.id),\n                                                                className: isDark ? \"constant-class \".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item_button), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark)) : \"constant-class \".concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().main__item_button), \" \").concat((_itemsSection_module_css__WEBPACK_IMPORTED_MODULE_1___default().light)),\n                                                                onClick: ()=>{\n                                                                    dispatch(setCurrentId(currentItem.id));\n                                                                    document.body.style.overflow = \"hidden\";\n                                                                    document.body.style.userSelect = \"none\";\n                                                                },\n                                                                children: \"Detail\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                                lineNumber: 62,\n                                                                columnNumber: 49\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, \"\".concat(section, \"-\").concat(String(index)), true, {\n                                                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 41\n                                            }, this);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, this),\n                                selectedItems.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_detailedSection_detailedItemsControls__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 58\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 25\n                        }, this),\n                        currentId === null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_detailedItem_detailedItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 55\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n                lineNumber: 29,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Study\\\\ReactStudy\\\\My-React-Study-App\\\\my-react-study-app\\\\src\\\\widgets\\\\itemsSection\\\\itemsSection.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(ItemsSection, \"mCsQEtcI0h9Pya4VYjBHZRuS+J8=\", false, function() {\n    return [\n        _shared_context_themeMode__WEBPACK_IMPORTED_MODULE_8__.useTheme,\n        _shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,\n        _shared_store_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = ItemsSection;\nvar _c;\n$RefreshReg$(_c, \"ItemsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2lkZ2V0cy9pdGVtc1NlY3Rpb24vaXRlbXNTZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUMvQyxxQ0FBcUM7QUFDcUM7QUFFeEI7QUFDbEQseUNBQXlDO0FBQ2tCO0FBQ0g7QUFDbUI7QUFDRTtBQUNuQjtBQUUzQyxTQUFTUyxhQUFhQyxLQUF3Qjs7SUFDekQsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0gsbUVBQVFBO0lBQzNCLE1BQU0sRUFBRUksU0FBUyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHWixtRUFBY0EsQ0FBQyxDQUFDYSxRQUFVQSxNQUFNQyxLQUFLO0lBQzdFLE1BQU0sRUFBRUMsYUFBYSxFQUFFLEdBQUdmLG1FQUFjQSxDQUFDLENBQUNhLFFBQVVBLE1BQU1HLGFBQWE7SUFDdkUsTUFBTSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR2QsZ0ZBQWtCQSxDQUFDZSxPQUFPO0lBQzNFLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUUsR0FBR25CLGdFQUFVQSxDQUFDaUIsT0FBTztJQUN2RCxNQUFNRyxXQUFXdkIsbUVBQWNBO0lBQy9CLE1BQU0sRUFBRXdCLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR2pCO0lBQ25Da0IsUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWkUsUUFBUUMsR0FBRyxDQUFDO0lBQ1pELFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixxQkFDSTtrQkFDSSw0RUFBQ0c7WUFBS0MsV0FBV3BCLFNBQVMsR0FBa0JYLE9BQWZBLHNFQUFXLEVBQUMsS0FBZSxPQUFaQSxzRUFBVyxJQUFLLEdBQWtCQSxPQUFmQSxzRUFBVyxFQUFDLEtBQWdCLE9BQWJBLHVFQUFZO3NCQUN0Riw0RUFBQ2tDO2dCQUFJSCxXQUFXL0IsK0VBQW9COzBCQUNoQyw0RUFBQ2tDO29CQUFJSCxXQUFXL0IsK0VBQW9COztzQ0FDaEMsOERBQUNrQzs0QkFBSUgsV0FBVy9CLHNGQUEyQjs7OENBQ3ZDLDhEQUFDa0M7b0NBQUlILFdBQVcvQiw2RUFBa0I7O3dDQUM3QnVDLE9BQU9DLElBQUksQ0FBQ2YsS0FBTWdCLElBQUksRUFBRUMsTUFBTSxLQUFLLG1CQUFLLDhEQUFDdkMsOERBQVVBOzRDQUFDc0MsTUFBTWhCLEtBQU1nQixJQUFJOzs7Ozs7d0NBQ3BFaEIsaUJBQUFBLDJCQUFBQSxLQUFNa0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7NENBQ3RCLE1BQU1DLGNBQWNGOzRDQUNwQixxQkFDSSw4REFBQ1g7Z0RBQ0dILFdBQ0lwQixTQUNNLEdBQXdCWCxPQUFyQkEsNEVBQWlCLEVBQUMsS0FBZSxPQUFaQSxzRUFBVyxJQUNuQyxHQUF3QkEsT0FBckJBLDRFQUFpQixFQUFDLEtBQWdCLE9BQWJBLHVFQUFZOztrRUFJOUMsOERBQUNpRDt3REFDR0MsZUFBWTt3REFDWm5CLFdBQVcvQixxRkFBMEI7d0RBQ3JDb0QsTUFBSzt3REFDTEMsT0FBTyxFQUFFcEMsMEJBQUFBLG9DQUFBQSxjQUFlcUMsSUFBSSxDQUN4QixDQUFDQyxPQUFTQyxLQUFLQyxTQUFTLENBQUNGLFVBQVVDLEtBQUtDLFNBQVMsQ0FBQ1Y7d0RBRXREVyxVQUFVLENBQUNDOzREQUNQLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ1AsT0FBTyxFQUFFO2dFQUNsQjdCLFNBQVNMLGlCQUFpQjRCOzREQUM5QixPQUFPO2dFQUNIdkIsU0FBU0osbUJBQW1CMkI7NERBQ2hDO3dEQUNKOzs7Ozs7a0VBRUosOERBQUNiOzswRUFDRyw4REFBQzJCOztvRUFBRTtvRUFBT2QsWUFBWWUsSUFBSTs7Ozs7OzswRUFDMUIsOERBQUNDO2dFQUNHWCxNQUFLO2dFQUNMRixlQUFZO2dFQUNaYyxJQUFJLEdBQWtCLE9BQWZqQixZQUFZaUIsRUFBRTtnRUFDckJqQyxXQUNJcEIsU0FDTSxrQkFBOENYLE9BQTVCQSxtRkFBd0IsRUFBQyxLQUFlLE9BQVpBLHNFQUFXLElBQ3pELGtCQUE4Q0EsT0FBNUJBLG1GQUF3QixFQUFDLEtBQWdCLE9BQWJBLHVFQUFZO2dFQUVwRWtFLFNBQVM7b0VBQ0wxQyxTQUFTRCxhQUFhd0IsWUFBWWlCLEVBQUU7b0VBQ3BDRyxTQUFTQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO29FQUMvQkgsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNFLFVBQVUsR0FBRztnRUFDckM7MEVBQ0g7Ozs7Ozs7Ozs7Ozs7K0NBakNBLEdBQWNDLE9BQVgzRCxTQUFRLEtBQWlCLE9BQWQyRCxPQUFPMUI7Ozs7O3dDQXVDdEM7Ozs7Ozs7Z0NBRUg3QixjQUFleUIsTUFBTSxHQUFHLGtCQUFJLDhEQUFDbkMsOEVBQXFCQTs7Ozt5REFBTTs7Ozs7Ozt3QkFFNURLLGNBQWMscUJBQU8sOEpBQVEsOERBQUNQLGtFQUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRTtHQS9Fd0JJOztRQUNERCwrREFBUUE7UUFDYU4sK0RBQWNBO1FBQzVCQSwrREFBY0E7UUFHdkJELCtEQUFjQTs7O0tBTlhRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL2l0ZW1zU2VjdGlvbi9pdGVtc1NlY3Rpb24udHN4Pzk1M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL2l0ZW1zU2VjdGlvbi5tb2R1bGUuY3NzJztcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgeyBFbGVtZW50UmVxdWVzdCwgSXRlbXNTZWN0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uJztcbi8vIGltcG9ydCBMb2FkZXIgZnJvbSAnLi4vbG9hZGVyL2xvYWRlcic7XG5pbXBvcnQgeyBpdGVtc1NsaWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3N0b3JlL2l0ZW1zU2xpY2UnO1xuaW1wb3J0IERldGFpbGVkSXRlbSBmcm9tICcuLi9kZXRhaWxlZEl0ZW0vZGV0YWlsZWRJdGVtJztcbmltcG9ydCB7IGl0ZW1zU2VsZWN0ZWRTbGljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zdG9yZS9zZWxlY3RlZEl0ZW1zU2xpY2UnO1xuaW1wb3J0IERldGFpbGVkSXRlbXNDb250cm9scyBmcm9tICcuLi9kZXRhaWxlZFNlY3Rpb24vZGV0YWlsZWRJdGVtc0NvbnRyb2xzJztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbnRleHQvdGhlbWVNb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNTZWN0aW9uKHByb3BzOiBJdGVtc1NlY3Rpb25Qcm9wcykge1xuICAgIGNvbnN0IHsgaXNEYXJrIH0gPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IHsgY3VycmVudElkLCBzZWN0aW9uLCBsb2FkaW5nIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLml0ZW1zKTtcbiAgICBjb25zdCB7IHNlbGVjdGVkSXRlbXMgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaXRlbXNTZWxlY3RlZCk7XG4gICAgY29uc3QgeyBzZXRTZWxlY3RlZEl0ZW1zLCB1bnNldFNlbGVjdGVkSXRlbXMgfSA9IGl0ZW1zU2VsZWN0ZWRTbGljZS5hY3Rpb25zO1xuICAgIGNvbnN0IHsgc2V0TG9hZGluZywgc2V0Q3VycmVudElkIH0gPSBpdGVtc1NsaWNlLmFjdGlvbnM7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHsgZGF0YSwgaWRJdGVtLCBkYXRhSXRlbSB9ID0gcHJvcHM7XG4gICAgY29uc29sZS5sb2coJ2lkSXRlbScpO1xuICAgIGNvbnNvbGUubG9nKGlkSXRlbSk7XG4gICAgY29uc29sZS5sb2coJ2RhdGFJdGVtJyk7XG4gICAgY29uc29sZS5sb2coZGF0YUl0ZW0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17aXNEYXJrID8gYCR7c3R5bGVzLm1haW59ICR7c3R5bGVzLmRhcmt9YCA6IGAke3N0eWxlcy5tYWlufSAke3N0eWxlcy5saWdodH1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX3dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5fX2NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19zZWFyY2hfc2VjdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19pdGVtc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhkYXRhIS5pbmZvKS5sZW5ndGggIT09IDAgJiYgPFBhZ2luYXRpb24gaW5mbz17ZGF0YSEuaW5mb30gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhPy5yZXN1bHRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbSBhcyBFbGVtZW50UmVxdWVzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtzdHlsZXMubWFpbl9faXRlbX0gJHtzdHlsZXMuZGFya31gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtzdHlsZXMubWFpbl9faXRlbX0gJHtzdHlsZXMubGlnaHR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7c2VjdGlvbn0tJHtTdHJpbmcoaW5kZXgpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaXRlbS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tYWluX19pdGVtX2NoZWNrYm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkSXRlbXM/LnNvbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVsZW0pID0+IEpTT04uc3RyaW5naWZ5KGVsZW0pID09PSBKU09OLnN0cmluZ2lmeShjdXJyZW50SXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZEl0ZW1zKGN1cnJlbnRJdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2godW5zZXRTZWxlY3RlZEl0ZW1zKGN1cnJlbnRJdGVtKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPm5hbWU6IHtjdXJyZW50SXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIml0ZW0tYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7Y3VycmVudEl0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RhcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYGNvbnN0YW50LWNsYXNzICR7c3R5bGVzLm1haW5fX2l0ZW1fYnV0dG9ufSAke3N0eWxlcy5kYXJrfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYGNvbnN0YW50LWNsYXNzICR7c3R5bGVzLm1haW5fX2l0ZW1fYnV0dG9ufSAke3N0eWxlcy5saWdodH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0Q3VycmVudElkKGN1cnJlbnRJdGVtLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRJdGVtcyEubGVuZ3RoID4gMCA/IDxEZXRhaWxlZEl0ZW1zQ29udHJvbHMgLz4gOiA8PjwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRJZCA9PT0gbnVsbCA/IDw+PC8+IDogPERldGFpbGVkSXRlbSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsIlBhZ2luYXRpb24iLCJpdGVtc1NsaWNlIiwiRGV0YWlsZWRJdGVtIiwiaXRlbXNTZWxlY3RlZFNsaWNlIiwiRGV0YWlsZWRJdGVtc0NvbnRyb2xzIiwidXNlVGhlbWUiLCJJdGVtc1NlY3Rpb24iLCJwcm9wcyIsImlzRGFyayIsImN1cnJlbnRJZCIsInNlY3Rpb24iLCJsb2FkaW5nIiwic3RhdGUiLCJpdGVtcyIsInNlbGVjdGVkSXRlbXMiLCJpdGVtc1NlbGVjdGVkIiwic2V0U2VsZWN0ZWRJdGVtcyIsInVuc2V0U2VsZWN0ZWRJdGVtcyIsImFjdGlvbnMiLCJzZXRMb2FkaW5nIiwic2V0Q3VycmVudElkIiwiZGlzcGF0Y2giLCJkYXRhIiwiaWRJdGVtIiwiZGF0YUl0ZW0iLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRhcmsiLCJsaWdodCIsImRpdiIsIm1haW5fX3dyYXBwZXIiLCJtYWluX19jb250ZW50IiwibWFpbl9fc2VhcmNoX3NlY3Rpb24iLCJtYWluX19pdGVtcyIsIk9iamVjdCIsImtleXMiLCJpbmZvIiwibGVuZ3RoIiwicmVzdWx0cyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImN1cnJlbnRJdGVtIiwibWFpbl9faXRlbSIsImlucHV0IiwiZGF0YS10ZXN0aWQiLCJtYWluX19pdGVtX2NoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCJzb21lIiwiZWxlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwIiwibmFtZSIsImJ1dHRvbiIsImlkIiwibWFpbl9faXRlbV9idXR0b24iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInVzZXJTZWxlY3QiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/widgets/itemsSection/itemsSection.tsx\n"));

/***/ })

});