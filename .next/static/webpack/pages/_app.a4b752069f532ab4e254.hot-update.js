webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Layouts/PageContainer/index.tsx":
/*!*********************************************!*\
  !*** ./src/Layouts/PageContainer/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/reducers/Navbar/actions */ \"./src/store/reducers/Navbar/actions.ts\");\n/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageContainer.module.scss */ \"./src/Layouts/PageContainer/PageContainer.module.scss\");\n/* harmony import */ var _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_reducers_Aside_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/reducers/Aside/actions */ \"./src/store/reducers/Aside/actions.ts\");\n\n\nvar _jsxFileName = \"/home/amir/Files/projects/resume/src/Layouts/PageContainer/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar PageContainer = function PageContainer(_ref) {\n  _s();\n\n  var children = _ref.children;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n  var activeNavbar = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.NavbarReducer.active;\n  });\n  var activeAside = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (store) {\n    return store.AsideReducer.active;\n  });\n\n  var closeNavbarHandler = function closeNavbarHandler() {\n    if (activeNavbar) {\n      dispatch(Object(_store_reducers_Navbar_actions__WEBPACK_IMPORTED_MODULE_2__[\"deActiveNavbar\"])());\n    }\n\n    if (activeAside) {\n      dispatch(Object(_store_reducers_Aside_actions__WEBPACK_IMPORTED_MODULE_4__[\"deActiveAside\"])());\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Container, \" \").concat(activeNavbar ? _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerActiveNavbar : ''),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerPage,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"position-relative\",\n        children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: closeNavbarHandler,\n          className: \"\".concat(_PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerPageShadowNavbar, \" \").concat(activeNavbar ? _PageContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ContainerPageShadowNavbarActiveNavbar : '')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(PageContainer, \"W48HnbpwuHn/FioDEmQoaULgXnE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = PageContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"PageContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvUGFnZUNvbnRhaW5lci9pbmRleC50c3g/OTc3MyJdLCJuYW1lcyI6WyJQYWdlQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYWN0aXZlTmF2YmFyIiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsIk5hdmJhclJlZHVjZXIiLCJhY3RpdmUiLCJhY3RpdmVBc2lkZSIsIkFzaWRlUmVkdWNlciIsImNsb3NlTmF2YmFySGFuZGxlciIsImRlQWN0aXZlTmF2YmFyIiwiZGVBY3RpdmVBc2lkZSIsInN0eWxlcyIsIkNvbnRhaW5lciIsIkNvbnRhaW5lckFjdGl2ZU5hdmJhciIsIkNvbnRhaW5lclBhZ2UiLCJDb250YWluZXJQYWdlU2hhZG93TmF2YmFyIiwiQ29udGFpbmVyUGFnZVNoYWRvd05hdmJhckFjdGl2ZU5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUlBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFpQixHQUFHLFNBQXBCQSxhQUFvQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUMzQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBRUEsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUc5QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxNQUEvQjtBQUFBLEdBSDhCLENBQWhDO0FBS0EsTUFBTUMsV0FBVyxHQUFHSiwrREFBVyxDQUc3QixVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSSxZQUFOLENBQW1CRixNQUE5QjtBQUFBLEdBSDZCLENBQS9COztBQUtBLE1BQU1HLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBWTtBQUN0QyxRQUFJUCxZQUFKLEVBQWtCO0FBQ2pCRixjQUFRLENBQUNVLHFGQUFjLEVBQWYsQ0FBUjtBQUNBOztBQUNELFFBQUlILFdBQUosRUFBaUI7QUFDaEJQLGNBQVEsQ0FBQ1csbUZBQWEsRUFBZCxDQUFSO0FBQ0E7QUFDRCxHQVBEOztBQVNBLHNCQUNDO0FBQ0MsYUFBUyxZQUFLQyxpRUFBTSxDQUFDQyxTQUFaLGNBQ1JYLFlBQVksR0FDVFUsaUVBQU0sQ0FBQ0UscUJBREUsR0FFVCxFQUhLLENBRFY7QUFBQSwyQkFPQztBQUFLLGVBQVMsRUFBRUYsaUVBQU0sQ0FBQ0csYUFBdkI7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQSxtQkFDRWhCLFFBREYsZUFHQztBQUNDLGlCQUFPLEVBQUVVLGtCQURWO0FBRUMsbUJBQVMsWUFDUkcsaUVBQU0sQ0FBQ0kseUJBREMsY0FHUmQsWUFBWSxHQUNUVSxpRUFBTSxDQUFDSyxxQ0FERSxHQUVULEVBTEs7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEwQkEsQ0FoREQ7O0dBQU1uQixhO1VBQ1lHLHVELEVBRUlFLHVELEVBS0RBLHVEOzs7S0FSZkwsYTtBQWtEU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvTGF5b3V0cy9QYWdlQ29udGFpbmVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcblx0dXNlRGlzcGF0Y2gsXG5cdHVzZVNlbGVjdG9yLFxufSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBkZUFjdGl2ZU5hdmJhciB9IGZyb20gJy4vLi4vLi4vc3RvcmUvcmVkdWNlcnMvTmF2YmFyL2FjdGlvbnMnO1xuaW1wb3J0IElTZWxlY3RvclN0YXRlIGZyb20gJy4uLy4uL3N0b3JlL0B0eXBlcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZUNvbnRhaW5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBkZUFjdGl2ZUFzaWRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvcmVkdWNlcnMvQXNpZGUvYWN0aW9ucyc7XG5cbmNvbnN0IFBhZ2VDb250YWluZXI6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cblx0Y29uc3QgYWN0aXZlTmF2YmFyID0gdXNlU2VsZWN0b3I8XG5cdFx0SVNlbGVjdG9yU3RhdGUsXG5cdFx0Ym9vbGVhblxuXHQ+KChzdG9yZSkgPT4gc3RvcmUuTmF2YmFyUmVkdWNlci5hY3RpdmUpO1xuXG5cdGNvbnN0IGFjdGl2ZUFzaWRlID0gdXNlU2VsZWN0b3I8XG5cdFx0SVNlbGVjdG9yU3RhdGUsXG5cdFx0Ym9vbGVhblxuXHQ+KChzdG9yZSkgPT4gc3RvcmUuQXNpZGVSZWR1Y2VyLmFjdGl2ZSk7XG5cblx0Y29uc3QgY2xvc2VOYXZiYXJIYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChhY3RpdmVOYXZiYXIpIHtcblx0XHRcdGRpc3BhdGNoKGRlQWN0aXZlTmF2YmFyKCkpO1xuXHRcdH1cblx0XHRpZiAoYWN0aXZlQXNpZGUpIHtcblx0XHRcdGRpc3BhdGNoKGRlQWN0aXZlQXNpZGUoKSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgJHtzdHlsZXMuQ29udGFpbmVyfSAke1xuXHRcdFx0XHRhY3RpdmVOYXZiYXJcblx0XHRcdFx0XHQ/IHN0eWxlcy5Db250YWluZXJBY3RpdmVOYXZiYXJcblx0XHRcdFx0XHQ6ICcnXG5cdFx0XHR9YH1cblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbnRhaW5lclBhZ2V9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0b25DbGljaz17Y2xvc2VOYXZiYXJIYW5kbGVyfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtcblx0XHRcdFx0XHRcdFx0c3R5bGVzLkNvbnRhaW5lclBhZ2VTaGFkb3dOYXZiYXJcblx0XHRcdFx0XHRcdH0gJHtcblx0XHRcdFx0XHRcdFx0YWN0aXZlTmF2YmFyXG5cdFx0XHRcdFx0XHRcdFx0PyBzdHlsZXMuQ29udGFpbmVyUGFnZVNoYWRvd05hdmJhckFjdGl2ZU5hdmJhclxuXHRcdFx0XHRcdFx0XHRcdDogJydcblx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGFpbmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Layouts/PageContainer/index.tsx\n");

/***/ })

})