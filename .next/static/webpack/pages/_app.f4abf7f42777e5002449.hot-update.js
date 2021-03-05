webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Layouts/Header/index.tsx":
/*!**************************************!*\
  !*** ./src/Layouts/Header/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./src/components/index.tsx\");\n/* harmony import */ var _store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/Navbar/actions */ \"./src/store/reducers/Navbar/actions.ts\");\n/* harmony import */ var _store_reducers_Aside_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/Aside/actions */ \"./src/store/reducers/Aside/actions.ts\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/Layouts/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/Layouts/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var activeMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.NavbarReducer.active;\n  });\n  var activeAside = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.AsideReducer.active;\n  });\n\n  var switchActiveMenuHandler = function switchActiveMenuHandler() {\n    if (activeAside) {\n      return;\n    }\n\n    dispatch(Object(_store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_4__[\"switchActiveNavbar\"])());\n  };\n\n  var switchActiveAsideHandler = function switchActiveAsideHandler() {\n    if (activeAside) {\n      return;\n    }\n\n    dispatch(Object(_store_reducers_Aside_actions__WEBPACK_IMPORTED_MODULE_5__[\"switchActiveAside\"])());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaEllipsisV\"], {\n        onClick: switchActiveAsideHandler,\n        className: \"\".concat(_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.HeaderIconAside, \" \").concat(activeAside ? _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.HeaderIconAsideActive : '', \" \").concat(activeMenu ? _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.HeaderIconAsideDisable : '')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.HeaderMenuIcon, \" \").concat(activeMenu ? _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.HeaderMenuIconActive : '', \" \").concat(activeAside ? _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.HeaderMenuIconDisable : ''),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: switchActiveMenuHandler,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_3__[\"MenuIcon\"], {\n            active: activeMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Header, \"xO89fMJfPnFBj8iQgItIw6mEHrs=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvSGVhZGVyL2luZGV4LnRzeD8xM2NjIl0sIm5hbWVzIjpbIkhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhY3RpdmVNZW51IiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsIk5hdmJhclJlZHVjZXIiLCJhY3RpdmUiLCJhY3RpdmVBc2lkZSIsIkFzaWRlUmVkdWNlciIsInN3aXRjaEFjdGl2ZU1lbnVIYW5kbGVyIiwic3dpdGNoQWN0aXZlTmF2YmFyIiwic3dpdGNoQWN0aXZlQXNpZGVIYW5kbGVyIiwic3dpdGNoQWN0aXZlQXNpZGUiLCJzdHlsZXMiLCJIZWFkZXJJY29uQXNpZGUiLCJIZWFkZXJJY29uQXNpZGVBY3RpdmUiLCJIZWFkZXJJY29uQXNpZGVEaXNhYmxlIiwiSGVhZGVyTWVudUljb24iLCJIZWFkZXJNZW51SWNvbkFjdGl2ZSIsIkhlYWRlck1lbnVJY29uRGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFXLEdBQUcsU0FBZEEsTUFBYyxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBRzVCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDLE1BQS9CO0FBQUEsR0FINEIsQ0FBOUI7QUFLQSxNQUFNQyxXQUFXLEdBQUdKLCtEQUFXLENBRzdCLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLFlBQU4sQ0FBbUJGLE1BQTlCO0FBQUEsR0FINkIsQ0FBL0I7O0FBS0EsTUFBTUcsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFZO0FBQzNDLFFBQUlGLFdBQUosRUFBaUI7QUFDaEI7QUFDQTs7QUFDRFAsWUFBUSxDQUFDVSx5RkFBa0IsRUFBbkIsQ0FBUjtBQUNBLEdBTEQ7O0FBT0EsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFZO0FBQzVDLFFBQUlKLFdBQUosRUFBaUI7QUFDaEI7QUFDQTs7QUFDRFAsWUFBUSxDQUFDWSx1RkFBaUIsRUFBbEIsQ0FBUjtBQUNBLEdBTEQ7O0FBT0Esc0JBQ0M7QUFBUSxhQUFTLEVBQUVDLDBEQUFNLENBQUNkLE1BQTFCO0FBQUEsMkJBQ0M7QUFBQSw4QkFDQyxxRUFBQywwREFBRDtBQUNDLGVBQU8sRUFBRVksd0JBRFY7QUFFQyxpQkFBUyxZQUFLRSwwREFBTSxDQUFDQyxlQUFaLGNBQ1JQLFdBQVcsR0FDUk0sMERBQU0sQ0FBQ0UscUJBREMsR0FFUixFQUhLLGNBS1JiLFVBQVUsR0FDUFcsMERBQU0sQ0FBQ0csc0JBREEsR0FFUCxFQVBLO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBY0M7QUFDQyxpQkFBUyxZQUFLSCwwREFBTSxDQUFDSSxjQUFaLGNBQ1JmLFVBQVUsR0FDUFcsMERBQU0sQ0FBQ0ssb0JBREEsR0FFUCxFQUhLLGNBS1JYLFdBQVcsR0FDUk0sMERBQU0sQ0FBQ00scUJBREMsR0FFUixFQVBLLENBRFY7QUFBQSwrQkFXQztBQUFLLGlCQUFPLEVBQUVWLHVCQUFkO0FBQUEsaUNBQ0MscUVBQUMsb0RBQUQ7QUFBVSxrQkFBTSxFQUFFUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFrQ0EsQ0E3REQ7O0dBQU1ILE07VUFDWUUsdUQsRUFFRUUsdUQsRUFLQ0EsdUQ7OztLQVJmSixNO0FBK0RTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9MYXlvdXRzL0hlYWRlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHR1c2VEaXNwYXRjaCxcblx0dXNlU2VsZWN0b3IsXG59IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEZhRWxsaXBzaXNWIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgTWVudUljb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCBJU2VsZWN0b3JTdGF0ZSBmcm9tICcuLi8uLi9zdG9yZS9AdHlwZXMnO1xuaW1wb3J0IHsgc3dpdGNoQWN0aXZlTmF2YmFyIH0gZnJvbSAnLi4vLi4vc3RvcmUvcmVkdWNlcnMvTmF2YmFyL2FjdGlvbnMnO1xuaW1wb3J0IHsgc3dpdGNoQWN0aXZlQXNpZGUgfSBmcm9tICcuLi8uLi9zdG9yZS9yZWR1Y2Vycy9Bc2lkZS9hY3Rpb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBIZWFkZXI6IFZGQyA9ICgpID0+IHtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG5cdGNvbnN0IGFjdGl2ZU1lbnUgPSB1c2VTZWxlY3Rvcjxcblx0XHRJU2VsZWN0b3JTdGF0ZSxcblx0XHRib29sZWFuXG5cdD4oKHN0b3JlKSA9PiBzdG9yZS5OYXZiYXJSZWR1Y2VyLmFjdGl2ZSk7XG5cblx0Y29uc3QgYWN0aXZlQXNpZGUgPSB1c2VTZWxlY3Rvcjxcblx0XHRJU2VsZWN0b3JTdGF0ZSxcblx0XHRib29sZWFuXG5cdD4oKHN0b3JlKSA9PiBzdG9yZS5Bc2lkZVJlZHVjZXIuYWN0aXZlKTtcblxuXHRjb25zdCBzd2l0Y2hBY3RpdmVNZW51SGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoYWN0aXZlQXNpZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGlzcGF0Y2goc3dpdGNoQWN0aXZlTmF2YmFyKCkpO1xuXHR9O1xuXG5cdGNvbnN0IHN3aXRjaEFjdGl2ZUFzaWRlSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoYWN0aXZlQXNpZGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0ZGlzcGF0Y2goc3dpdGNoQWN0aXZlQXNpZGUoKSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8RmFFbGxpcHNpc1Zcblx0XHRcdFx0XHRvbkNsaWNrPXtzd2l0Y2hBY3RpdmVBc2lkZUhhbmRsZXJ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGVySWNvbkFzaWRlfSAke1xuXHRcdFx0XHRcdFx0YWN0aXZlQXNpZGVcblx0XHRcdFx0XHRcdFx0PyBzdHlsZXMuSGVhZGVySWNvbkFzaWRlQWN0aXZlXG5cdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHR9ICR7XG5cdFx0XHRcdFx0XHRhY3RpdmVNZW51XG5cdFx0XHRcdFx0XHRcdD8gc3R5bGVzLkhlYWRlckljb25Bc2lkZURpc2FibGVcblx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH1gfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkZXJNZW51SWNvbn0gJHtcblx0XHRcdFx0XHRcdGFjdGl2ZU1lbnVcblx0XHRcdFx0XHRcdFx0PyBzdHlsZXMuSGVhZGVyTWVudUljb25BY3RpdmVcblx0XHRcdFx0XHRcdFx0OiAnJ1xuXHRcdFx0XHRcdH0gJHtcblx0XHRcdFx0XHRcdGFjdGl2ZUFzaWRlXG5cdFx0XHRcdFx0XHRcdD8gc3R5bGVzLkhlYWRlck1lbnVJY29uRGlzYWJsZVxuXHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fWB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3N3aXRjaEFjdGl2ZU1lbnVIYW5kbGVyfT5cblx0XHRcdFx0XHRcdDxNZW51SWNvbiBhY3RpdmU9e2FjdGl2ZU1lbnV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Layouts/Header/index.tsx\n");

/***/ })

})