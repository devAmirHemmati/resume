webpackHotUpdate_N_E("pages/index",{

/***/ "./src/interfaces/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/interfaces/Button/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.scss */ \"./src/interfaces/Button/Button.module.scss\");\n/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/interfaces/Button/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Button = function Button(_ref) {\n  var _ref$type = _ref.type,\n      type = _ref$type === void 0 ? 'button' : _ref$type,\n      children = _ref.children,\n      _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      noneSelection = _ref.noneSelection,\n      _ref$component = _ref.component,\n      component = _ref$component === void 0 ? 'button' : _ref$component,\n      rest = Object(_home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"type\", \"children\", \"className\", \"noneSelection\", \"component\"]);\n\n  var customRest = rest;\n\n  if (component === 'button') {\n    customRest.type = type;\n  }\n\n  var Component = component;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread(_objectSpread({\n    className: \"\".concat(_Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button, \" \").concat(noneSelection ? _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ButtonNoneSelection : '', \" \").concat(className)\n  }, customRest), {}, {\n    children: children\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\nvar _c;\n\n$RefreshReg$(_c, \"Button\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ludGVyZmFjZXMvQnV0dG9uL2luZGV4LnRzeD9jOGMyIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInR5cGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIm5vbmVTZWxlY3Rpb24iLCJjb21wb25lbnQiLCJyZXN0IiwiY3VzdG9tUmVzdCIsIkNvbXBvbmVudCIsInN0eWxlcyIsIkJ1dHRvbk5vbmVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBLElBQU1BLE1BQXdCLEdBQUcsU0FBM0JBLE1BQTJCLE9BTzNCO0FBQUEsdUJBTkxDLElBTUs7QUFBQSxNQU5MQSxJQU1LLDBCQU5FLFFBTUY7QUFBQSxNQUxMQyxRQUtLLFFBTExBLFFBS0s7QUFBQSw0QkFKTEMsU0FJSztBQUFBLE1BSkxBLFNBSUssK0JBSk8sRUFJUDtBQUFBLE1BSExDLGFBR0ssUUFITEEsYUFHSztBQUFBLDRCQUZMQyxTQUVLO0FBQUEsTUFGTEEsU0FFSywrQkFGTyxRQUVQO0FBQUEsTUFERkMsSUFDRTs7QUFDTCxNQUFNQyxVQUFlLEdBQUdELElBQXhCOztBQUVBLE1BQUlELFNBQVMsS0FBSyxRQUFsQixFQUE0QjtBQUMzQkUsY0FBVSxDQUFDTixJQUFYLEdBQWtCQSxJQUFsQjtBQUNBOztBQUVELE1BQU1PLFNBQXNCLEdBQUdILFNBQS9CO0FBRUEsc0JBQ0MscUVBQUMsU0FBRDtBQUNDLGFBQVMsWUFBS0ksMERBQU0sQ0FBQ1QsTUFBWixjQUNSSSxhQUFhLEdBQ1ZLLDBEQUFNLENBQUNDLG1CQURHLEdBRVYsRUFISyxjQUlMUCxTQUpLO0FBRFYsS0FNS0ksVUFOTDtBQUFBLGNBUUVMO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBWUEsQ0E1QkQ7O0tBQU1GLE07QUE4QlNBLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2ludGVyZmFjZXMvQnV0dG9uL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCBFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElCdXR0b25Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEJ1dHRvbjogRkM8SUJ1dHRvblByb3BzPiA9ICh7XG5cdHR5cGUgPSAnYnV0dG9uJyxcblx0Y2hpbGRyZW4sXG5cdGNsYXNzTmFtZSA9ICcnLFxuXHRub25lU2VsZWN0aW9uLFxuXHRjb21wb25lbnQgPSAnYnV0dG9uJyxcblx0Li4ucmVzdFxufSkgPT4ge1xuXHRjb25zdCBjdXN0b21SZXN0OiBhbnkgPSByZXN0O1xuXG5cdGlmIChjb21wb25lbnQgPT09ICdidXR0b24nKSB7XG5cdFx0Y3VzdG9tUmVzdC50eXBlID0gdHlwZTtcblx0fVxuXG5cdGNvbnN0IENvbXBvbmVudDogRWxlbWVudFR5cGUgPSBjb21wb25lbnQ7XG5cblx0cmV0dXJuIChcblx0XHQ8Q29tcG9uZW50XG5cdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b259ICR7XG5cdFx0XHRcdG5vbmVTZWxlY3Rpb25cblx0XHRcdFx0XHQ/IHN0eWxlcy5CdXR0b25Ob25lU2VsZWN0aW9uXG5cdFx0XHRcdFx0OiAnJ1xuXHRcdFx0fSAke2NsYXNzTmFtZX1gfVxuXHRcdFx0ey4uLmN1c3RvbVJlc3R9XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvQ29tcG9uZW50PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/interfaces/Button/index.tsx\n");

/***/ })

})