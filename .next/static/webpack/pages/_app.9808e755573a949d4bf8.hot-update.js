webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Layouts/PageContainer/index.tsx":
/*!*********************************************!*\
  !*** ./src/Layouts/PageContainer/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/reducers/Navbar/actions */ \"./src/store/reducers/Navbar/actions.ts\");\n/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageContainer.module.scss */ \"./src/Layouts/PageContainer/PageContainer.module.scss\");\n/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_reducers_Aside_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/Aside/actions */ \"./src/store/reducers/Aside/actions.ts\");\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/Layouts/PageContainer/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PageContainer = function PageContainer(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var activeNavbar = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.NavbarReducer.active;\n  });\n  var activeAside = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.AsideReducer.active;\n  });\n\n  var closeNavbarHandler = function closeNavbarHandler() {\n    if (activeNavbar) {\n      dispatch(Object(_store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_2__[\"deActiveNavbar\"])());\n    }\n\n    if (activeAside) {\n      dispatch(Object(_store_reducers_Aside_actions__WEBPACK_IMPORTED_MODULE_4__[\"deActiveAside\"])());\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Container, \" \").concat(activeNavbar ? _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerActiveNavbar : ''),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerPage,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"position-relative\",\n        children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: closeNavbarHandler,\n          className: \"\".concat(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerPageShadowNavbar, \" \").concat(activeNavba ? _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerPageShadowNavbarActive : '')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(PageContainer, \"W48HnbpwuHn/FioDEmQoaULgXnE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = PageContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"PageContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvUGFnZUNvbnRhaW5lci9pbmRleC50c3g/OTc3MyJdLCJuYW1lcyI6WyJQYWdlQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWN0aXZlTmF2YmFyIiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsIk5hdmJhclJlZHVjZXIiLCJhY3RpdmUiLCJhY3RpdmVBc2lkZSIsIkFzaWRlUmVkdWNlciIsImNsb3NlTmF2YmFySGFuZGxlciIsImRlQWN0aXZlTmF2YmFyIiwiZGVBY3RpdmVBc2lkZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkNvbnRhaW5lckFjdGl2ZU5hdmJhciIsIkNvbnRhaW5lclBhZ2UiLCJDb250YWluZXJQYWdlU2hhZG93TmF2YmFyIiwiYWN0aXZlTmF2YmEiLCJDb250YWluZXJQYWdlU2hhZG93TmF2YmFyQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBSUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLGFBQWlCLEdBQUcsU0FBcEJBLGFBQW9CLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBRzlCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDLE1BQS9CO0FBQUEsR0FIOEIsQ0FBaEM7QUFLQSxNQUFNQyxXQUFXLEdBQUdKLCtEQUFXLENBRzdCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLFlBQU4sQ0FBbUJGLE1BQTlCO0FBQUEsR0FINkIsQ0FBL0I7O0FBS0EsTUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFZO0FBQ3RDLFFBQUlQLFlBQUosRUFBa0I7QUFDakJGLGNBQVEsQ0FBQ1UscUZBQWMsRUFBZixDQUFSO0FBQ0E7O0FBQ0QsUUFBSUgsV0FBSixFQUFpQjtBQUNoQlAsY0FBUSxDQUFDVyxtRkFBYSxFQUFkLENBQVI7QUFDQTtBQUNELEdBUEQ7O0FBU0Esc0JBQ0M7QUFDQyxhQUFTLFlBQUtDLGlFQUFNLENBQUNDLFNBQVosY0FDUlgsWUFBWSxHQUNUVSxpRUFBTSxDQUFDRSxxQkFERSxHQUVULEVBSEssQ0FEVjtBQUFBLDJCQU9DO0FBQUssZUFBUyxFQUFFRixpRUFBTSxDQUFDRyxhQUF2QjtBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLG1CQUNFaEIsUUFERixlQUdDO0FBQ0MsaUJBQU8sRUFBRVUsa0JBRFY7QUFFQyxtQkFBUyxZQUNSRyxpRUFBTSxDQUFDSSx5QkFEQyxjQUdSQyxXQUFXLEdBQ1JMLGlFQUFNLENBQUNNLCtCQURDLEdBRVIsRUFMSztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBCQSxDQWhERDs7R0FBTXBCLGE7VUFDWUcsdUQsRUFFSUUsdUQsRUFLREEsdUQ7OztLQVJmTCxhO0FBa0RTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9MYXlvdXRzL1BhZ2VDb250YWluZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHR1c2VEaXNwYXRjaCxcblx0dXNlU2VsZWN0b3IsXG59IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRlQWN0aXZlTmF2YmFyIH0gZnJvbSAnLi8uLi8uLi9zdG9yZS9yZWR1Y2Vycy9OYXZiYXIvYWN0aW9ucyc7XG5pbXBvcnQgSVNlbGVjdG9yU3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvQHR5cGVzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYWdlQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IGRlQWN0aXZlQXNpZGUgfSBmcm9tICcuLi8uLi9zdG9yZS9yZWR1Y2Vycy9Bc2lkZS9hY3Rpb25zJztcblxuY29uc3QgUGFnZUNvbnRhaW5lcjogRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuXHRjb25zdCBhY3RpdmVOYXZiYXIgPSB1c2VTZWxlY3Rvcjxcblx0XHRJU2VsZWN0b3JTdGF0ZSxcblx0XHRib29sZWFuXG5cdD4oKHN0b3JlKSA9PiBzdG9yZS5OYXZiYXJSZWR1Y2VyLmFjdGl2ZSk7XG5cblx0Y29uc3QgYWN0aXZlQXNpZGUgPSB1c2VTZWxlY3Rvcjxcblx0XHRJU2VsZWN0b3JTdGF0ZSxcblx0XHRib29sZWFuXG5cdD4oKHN0b3JlKSA9PiBzdG9yZS5Bc2lkZVJlZHVjZXIuYWN0aXZlKTtcblxuXHRjb25zdCBjbG9zZU5hdmJhckhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKGFjdGl2ZU5hdmJhcikge1xuXHRcdFx0ZGlzcGF0Y2goZGVBY3RpdmVOYXZiYXIoKSk7XG5cdFx0fVxuXHRcdGlmIChhY3RpdmVBc2lkZSkge1xuXHRcdFx0ZGlzcGF0Y2goZGVBY3RpdmVBc2lkZSgpKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5Db250YWluZXJ9ICR7XG5cdFx0XHRcdGFjdGl2ZU5hdmJhclxuXHRcdFx0XHRcdD8gc3R5bGVzLkNvbnRhaW5lckFjdGl2ZU5hdmJhclxuXHRcdFx0XHRcdDogJydcblx0XHRcdH1gfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29udGFpbmVyUGFnZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtjbG9zZU5hdmJhckhhbmRsZXJ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake1xuXHRcdFx0XHRcdFx0XHRzdHlsZXMuQ29udGFpbmVyUGFnZVNoYWRvd05hdmJhclxuXHRcdFx0XHRcdFx0fSAke1xuXHRcdFx0XHRcdFx0XHRhY3RpdmVOYXZiYVxuXHRcdFx0XHRcdFx0XHRcdD8gc3R5bGVzLkNvbnRhaW5lclBhZ2VTaGFkb3dOYXZiYXJBY3RpdmVcblx0XHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Layouts/PageContainer/index.tsx\n");

/***/ })

})