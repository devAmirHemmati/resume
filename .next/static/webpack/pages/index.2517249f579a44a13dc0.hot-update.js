webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Avatar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Avatar/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar.module.scss */ \"./src/components/Avatar/Avatar.module.scss\");\n/* harmony import */ var _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Avatar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/components/Avatar/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Avatar = function Avatar(_ref) {\n  var _ref$className = _ref.className,\n      className = _ref$className === void 0 ? '' : _ref$className,\n      alt = _ref.alt,\n      src = _ref.src,\n      children = _ref.children,\n      rest = Object(_home_amir_Files_projects_resume_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"className\", \"alt\", \"src\", \"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _Avatar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.AvatarContainer,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", _objectSpread({\n      src: src,\n      alt: alt,\n      className: className\n    }, rest), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this), children]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Avatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXZhdGFyL2luZGV4LnRzeD80NTNkIl0sIm5hbWVzIjpbIkF2YXRhciIsImNsYXNzTmFtZSIsImFsdCIsInNyYyIsImNoaWxkcmVuIiwicmVzdCIsInN0eWxlcyIsIkF2YXRhckNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUEsSUFBTUEsTUFBeUIsR0FBRyxTQUE1QkEsTUFBNEIsT0FNNUI7QUFBQSw0QkFMTEMsU0FLSztBQUFBLE1BTExBLFNBS0ssK0JBTE8sRUFLUDtBQUFBLE1BSkxDLEdBSUssUUFKTEEsR0FJSztBQUFBLE1BSExDLEdBR0ssUUFITEEsR0FHSztBQUFBLE1BRkxDLFFBRUssUUFGTEEsUUFFSztBQUFBLE1BREZDLElBQ0U7O0FBQ0wsc0JBQ0M7QUFBSyxhQUFTLEVBQUVDLDBEQUFNLENBQUNDLGVBQXZCO0FBQUEsNEJBQ0M7QUFDQyxTQUFHLEVBQUVKLEdBRE47QUFFQyxTQUFHLEVBQUVELEdBRk47QUFHQyxlQUFTLEVBQUVEO0FBSFosT0FJS0ksSUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsRUFPRUQsUUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQVdBLENBbEJEOztLQUFNSixNO0FBb0JTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0F2YXRhci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJQXZhdGFyUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BdmF0YXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBBdmF0YXI6IFZGQzxJQXZhdGFyUHJvcHM+ID0gKHtcblx0Y2xhc3NOYW1lID0gJycsXG5cdGFsdCxcblx0c3JjLFxuXHRjaGlsZHJlbixcblx0Li4ucmVzdFxufSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXZhdGFyQ29udGFpbmVyfT5cblx0XHRcdDxpbWdcblx0XHRcdFx0c3JjPXtzcmN9XG5cdFx0XHRcdGFsdD17YWx0fVxuXHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzTmFtZX1cblx0XHRcdFx0ey4uLnJlc3R9XG5cdFx0XHQvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Avatar/index.tsx\n");

/***/ })

})