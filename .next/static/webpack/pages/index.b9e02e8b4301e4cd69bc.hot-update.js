webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/CircleProgress/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/CircleProgress/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-circular-progressbar */ \"./node_modules/react-circular-progressbar/dist/index.esm.js\");\n/* harmony import */ var _CircleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircleProgress.module.scss */ \"./src/components/CircleProgress/CircleProgress.module.scss\");\n/* harmony import */ var _CircleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CircleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"./node_modules/react-circular-progressbar/dist/styles.css\");\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .. */ \"./src/components/index.tsx\");\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/components/CircleProgress/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar CircleProgress = function CircleProgress(_ref) {\n  var value = _ref.value,\n      text = _ref.text;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _CircleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _CircleProgress_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CircleProgress,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_1__[\"CircularProgressbar\"], {\n        value: value,\n        text: \"\".concat(value, \"%\"),\n        styles: {\n          root: {\n            padding: 0\n          },\n          path: {\n            stroke: '#f44336',\n            strokeLinecap: 'butt',\n            transition: 'stroke-dashoffset 0.5s ease 0s',\n            transform: 'rotate(0turn)',\n            transformOrigin: 'center center'\n          },\n          trail: {\n            stroke: '#c0c0ca',\n            strokeLinecap: 'butt',\n            transform: 'rotate(0.25turn)',\n            transformOrigin: 'center center'\n          },\n          text: {\n            fill: 'rgb(85, 85, 85)',\n            fontSize: '20px',\n            fontWeight: 'normal'\n          },\n          background: {\n            fill: '#000'\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(___WEBPACK_IMPORTED_MODULE_4__[\"Typography\"], {\n      component: \"h6\",\n      variant: \"Display6\",\n      align: \"Center\",\n      children: \"text\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = CircleProgress;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CircleProgress);\n\nvar _c;\n\n$RefreshReg$(_c, \"CircleProgress\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2lyY2xlUHJvZ3Jlc3MvaW5kZXgudHN4P2U0NmYiXSwibmFtZXMiOlsiQ2lyY2xlUHJvZ3Jlc3MiLCJ2YWx1ZSIsInRleHQiLCJzdHlsZXMiLCJDb250YWluZXIiLCJyb290IiwicGFkZGluZyIsInBhdGgiLCJzdHJva2UiLCJzdHJva2VMaW5lY2FwIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsInRyYW5zZm9ybU9yaWdpbiIsInRyYWlsIiwiZmlsbCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBeUMsR0FBRyxTQUE1Q0EsY0FBNEMsT0FHNUM7QUFBQSxNQUZMQyxLQUVLLFFBRkxBLEtBRUs7QUFBQSxNQURMQyxJQUNLLFFBRExBLElBQ0s7QUFDTCxzQkFDQztBQUFLLGFBQVMsRUFBRUMsa0VBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBRUQsa0VBQU0sQ0FBQ0gsY0FBdkI7QUFBQSw2QkFDQyxxRUFBQyw4RUFBRDtBQUNDLGFBQUssRUFBRUMsS0FEUjtBQUVDLFlBQUksWUFBS0EsS0FBTCxNQUZMO0FBR0MsY0FBTSxFQUFFO0FBQ1BJLGNBQUksRUFBRTtBQUNMQyxtQkFBTyxFQUFFO0FBREosV0FEQztBQUlQQyxjQUFJLEVBQUU7QUFDTEMsa0JBQU0sRUFBRSxTQURIO0FBRUxDLHlCQUFhLEVBQUUsTUFGVjtBQUdMQyxzQkFBVSxFQUNULGdDQUpJO0FBS0xDLHFCQUFTLEVBQUUsZUFMTjtBQU1MQywyQkFBZSxFQUFFO0FBTlosV0FKQztBQVlQQyxlQUFLLEVBQUU7QUFDTkwsa0JBQU0sRUFBRSxTQURGO0FBRU5DLHlCQUFhLEVBQUUsTUFGVDtBQUdORSxxQkFBUyxFQUFFLGtCQUhMO0FBSU5DLDJCQUFlLEVBQUU7QUFKWCxXQVpBO0FBa0JQVixjQUFJLEVBQUU7QUFDTFksZ0JBQUksRUFBRSxpQkFERDtBQUVMQyxvQkFBUSxFQUFFLE1BRkw7QUFHTEMsc0JBQVUsRUFBRTtBQUhQLFdBbEJDO0FBdUJQQyxvQkFBVSxFQUFFO0FBQ1hILGdCQUFJLEVBQUU7QUFESztBQXZCTDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFtQ0MscUVBQUMsNENBQUQ7QUFDQyxlQUFTLEVBQUMsSUFEWDtBQUVDLGFBQU8sRUFBQyxVQUZUO0FBR0MsV0FBSyxFQUFDLFFBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE2Q0EsQ0FqREQ7O0tBQU1kLGM7QUFtRFNBLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2lyY2xlUHJvZ3Jlc3MvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhciB9IGZyb20gJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaXJjbGVQcm9ncmVzcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgJ3JlYWN0LWNpcmN1bGFyLXByb2dyZXNzYmFyL2Rpc3Qvc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBJQ2lyY2xlUHJvZ3Jlc3NQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJy4uJztcblxuY29uc3QgQ2lyY2xlUHJvZ3Jlc3M6IFZGQzxJQ2lyY2xlUHJvZ3Jlc3NQcm9wcz4gPSAoe1xuXHR2YWx1ZSxcblx0dGV4dCxcbn0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhaW5lcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNpcmNsZVByb2dyZXNzfT5cblx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3NiYXJcblx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0dGV4dD17YCR7dmFsdWV9JWB9XG5cdFx0XHRcdFx0c3R5bGVzPXt7XG5cdFx0XHRcdFx0XHRyb290OiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDAsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0cGF0aDoge1xuXHRcdFx0XHRcdFx0XHRzdHJva2U6ICcjZjQ0MzM2Jyxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlTGluZWNhcDogJ2J1dHQnLFxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOlxuXHRcdFx0XHRcdFx0XHRcdCdzdHJva2UtZGFzaG9mZnNldCAwLjVzIGVhc2UgMHMnLFxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06ICdyb3RhdGUoMHR1cm4pJyxcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGNlbnRlcicsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0dHJhaWw6IHtcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiAnI2MwYzBjYScsXG5cdFx0XHRcdFx0XHRcdHN0cm9rZUxpbmVjYXA6ICdidXR0Jyxcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiAncm90YXRlKDAuMjV0dXJuKScsXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHRleHQ6IHtcblx0XHRcdFx0XHRcdFx0ZmlsbDogJ3JnYig4NSwgODUsIDg1KScsXG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHtcblx0XHRcdFx0XHRcdFx0ZmlsbDogJyMwMDAnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdGNvbXBvbmVudD1cImg2XCJcblx0XHRcdFx0dmFyaWFudD1cIkRpc3BsYXk2XCJcblx0XHRcdFx0YWxpZ249XCJDZW50ZXJcIlxuXHRcdFx0PlxuXHRcdFx0XHR0ZXh0XG5cdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVQcm9ncmVzcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CircleProgress/index.tsx\n");

/***/ })

})