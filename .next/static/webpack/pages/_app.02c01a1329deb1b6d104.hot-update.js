webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Layouts/Header/index.tsx":
/*!**************************************!*\
  !*** ./src/Layouts/Header/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./src/components/index.tsx\");\n/* harmony import */ var _store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/Navbar/actions */ \"./src/store/reducers/Navbar/actions.ts\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.scss */ \"./src/Layouts/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/Layouts/Header/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var activeMenu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.NavbarReducer.active;\n  });\n\n  var switchActiveMenuHandler = function switchActiveMenuHandler() {\n    dispatch(Object(_store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_4__[\"switchActiveNavbar\"])());\n  };\n\n  var switchActiveAsideHandler = function switchActiveAsideHandler() {\n    dispatch(Object(_store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_4__[\"switchActiveNavbar\"])());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Header,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__[\"FaEllipsisV\"], {\n        onClick: switchActiveAsideHandler\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"\".concat(_Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.HeaderMenuIcon, \" \").concat(activeMenu ? _Header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.HeaderMenuIconActive : ''),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: switchActiveMenuHandler,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_3__[\"MenuIcon\"], {\n            active: activeMenu\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Header, \"05ZnpEwFvTPuCSI0KhVuLybOuEg=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvSGVhZGVyL2luZGV4LnRzeD8xM2NjIl0sIm5hbWVzIjpbIkhlYWRlciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhY3RpdmVNZW51IiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsIk5hdmJhclJlZHVjZXIiLCJhY3RpdmUiLCJzd2l0Y2hBY3RpdmVNZW51SGFuZGxlciIsInN3aXRjaEFjdGl2ZU5hdmJhciIsInN3aXRjaEFjdGl2ZUFzaWRlSGFuZGxlciIsInN0eWxlcyIsIkhlYWRlck1lbnVJY29uIiwiSGVhZGVyTWVudUljb25BY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBVyxHQUFHLFNBQWRBLE1BQWMsR0FBTTtBQUFBOztBQUN6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUc1QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxNQUEvQjtBQUFBLEdBSDRCLENBQTlCOztBQUtBLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBWTtBQUMzQ1AsWUFBUSxDQUFDUSx5RkFBa0IsRUFBbkIsQ0FBUjtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFZO0FBQzVDVCxZQUFRLENBQUNRLHlGQUFrQixFQUFuQixDQUFSO0FBQ0EsR0FGRDs7QUFJQSxzQkFDQztBQUFRLGFBQVMsRUFBRUUsMERBQU0sQ0FBQ1gsTUFBMUI7QUFBQSwyQkFDQztBQUFBLDhCQUNDLHFFQUFDLDBEQUFEO0FBQ0MsZUFBTyxFQUFFVTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUtDO0FBQ0MsaUJBQVMsWUFBS0MsMERBQU0sQ0FBQ0MsY0FBWixjQUNSVCxVQUFVLEdBQ1BRLDBEQUFNLENBQUNFLG9CQURBLEdBRVAsRUFISyxDQURWO0FBQUEsK0JBT0M7QUFBSyxpQkFBTyxFQUFFTCx1QkFBZDtBQUFBLGlDQUNDLHFFQUFDLG9EQUFEO0FBQVUsa0JBQU0sRUFBRUw7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBcUJBLENBckNEOztHQUFNSCxNO1VBQ1lFLHVELEVBRUVFLHVEOzs7S0FIZEosTTtBQXVDU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvTGF5b3V0cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0dXNlRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdG9yLFxufSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBGYUVsbGlwc2lzViB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IE1lbnVJY29uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgSVNlbGVjdG9yU3RhdGUgZnJvbSAnLi4vLi4vc3RvcmUvQHR5cGVzJztcbmltcG9ydCB7IHN3aXRjaEFjdGl2ZU5hdmJhciB9IGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL05hdmJhci9hY3Rpb25zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBIZWFkZXI6IFZGQyA9ICgpID0+IHtcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG5cdGNvbnN0IGFjdGl2ZU1lbnUgPSB1c2VTZWxlY3Rvcjxcblx0XHRJU2VsZWN0b3JTdGF0ZSxcblx0XHRib29sZWFuXG5cdD4oKHN0b3JlKSA9PiBzdG9yZS5OYXZiYXJSZWR1Y2VyLmFjdGl2ZSk7XG5cblx0Y29uc3Qgc3dpdGNoQWN0aXZlTWVudUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XG5cdFx0ZGlzcGF0Y2goc3dpdGNoQWN0aXZlTmF2YmFyKCkpO1xuXHR9O1xuXG5cdGNvbnN0IHN3aXRjaEFjdGl2ZUFzaWRlSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcblx0XHRkaXNwYXRjaChzd2l0Y2hBY3RpdmVOYXZiYXIoKSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8RmFFbGxpcHNpc1Zcblx0XHRcdFx0XHRvbkNsaWNrPXtzd2l0Y2hBY3RpdmVBc2lkZUhhbmRsZXJ9XG5cdFx0XHRcdC8+XG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRlck1lbnVJY29ufSAke1xuXHRcdFx0XHRcdFx0YWN0aXZlTWVudVxuXHRcdFx0XHRcdFx0XHQ/IHN0eWxlcy5IZWFkZXJNZW51SWNvbkFjdGl2ZVxuXHRcdFx0XHRcdFx0XHQ6ICcnXG5cdFx0XHRcdFx0fWB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e3N3aXRjaEFjdGl2ZU1lbnVIYW5kbGVyfT5cblx0XHRcdFx0XHRcdDxNZW51SWNvbiBhY3RpdmU9e2FjdGl2ZU1lbnV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Layouts/Header/index.tsx\n");

/***/ })

})