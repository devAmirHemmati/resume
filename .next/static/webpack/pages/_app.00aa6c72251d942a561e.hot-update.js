webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Aside/Aside.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/Layouts/Aside/Aside.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Aside_Aside__3-F9F {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 290px;\\n  height: 100%;\\n  z-index: 100;\\n  background-color: #f4f4f6;\\n  box-shadow: 0 3px 8px 0 rgba(15, 15, 5, 0.4); }\\n  .Aside_AsideHeader__25vPB {\\n    height: 235px;\\n    background-color: #fff;\\n    z-index: 105;\\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 5, 0.4);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n    .Aside_AsideHeader__25vPB a {\\n      margin-top: 15px !important;\\n      font-weight: bold; }\\n    .Aside_AsideHeader__25vPB p {\\n      font-weight: 500 !important;\\n      margin-top: 3px !important; }\\n  .Aside_AsideDescription__2H-A3 {\\n    height: calc(100% - 297px);\\n    overflow: auto;\\n    padding: 5px 15px; }\\n    .Aside_AsideDescription__2H-A3::-webkit-scrollbar {\\n      display: none; }\\n    .Aside_AsideDescriptionItem__1dP_G {\\n      padding: 15px 0;\\n      border-bottom: 1px solid rgba(140, 140, 142, 0.3); }\\n      .Aside_AsideDescriptionItemLanguages__2Vtig {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-around;\\n        padding-bottom: 35px;\\n        padding-top: 5px; }\\n      .Aside_AsideDescriptionItemSkills__UBA2z > div {\\n        margin-top: 5px; }\\n  .Aside_AsideFooter__2CbMD {\\n    height: 50px;\\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 5, 0.4);\\n    background-color: #fff;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 35px; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Aside.module.scss\",\"webpack://../../styles/abstract/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EAGC,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBCDkC;EDElC,4CCD2C,EAAA;EDG3C;IACC,aAZoB;IAapB,sBAAsB;IACtB,YAAY;IACZ,4CCP0C;IDQ1C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB,EAAA;IARnB;MAWC,2BAA2B;MAC3B,iBAAiB,EAAA;IAZlB;MAgBC,2BAA2B;MAC3B,0BAA0B,EAAA;EAI5B;IACC,0BAA0B;IAC1B,cAAc;IACd,iBAAiB,EAAA;IAHjB;MAMC,aAAa,EAAA;IAGd;MACC,eAAe;MACf,iDACyB,EAAA;MAEzB;QACC,aAAa;QACb,mBAAmB;QACnB,6BAA6B;QAC7B,oBAAoB;QACpB,gBAAgB,EAAA;MAGhB;QAEC,eAAe,EAAA;EAMnB;IACC,YA9DmB;IA+DnB,4CCxD0C;IDyD1C,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe,EAAA\",\"sourcesContent\":[\"@import './../../styles/abstract/variables';\\n\\n.Aside {\\n\\t$header-height: 235px;\\n\\t$footer-height: 50px;\\n\\tposition: absolute;\\n\\tright: 0;\\n\\ttop: 0;\\n\\twidth: 290px;\\n\\theight: 100%;\\n\\tz-index: 100;\\n\\tbackground-color: $lite-theme-box-background;\\n\\tbox-shadow: 0 3px 8px 0 $lite-theme-box-shadow;\\n\\n\\t&Header {\\n\\t\\theight: $header-height;\\n\\t\\tbackground-color: #fff;\\n\\t\\tz-index: 105;\\n\\t\\tbox-shadow: 0 1px 4px 0 $lite-theme-box-shadow;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\n\\t\\ta {\\n\\t\\t\\tmargin-top: 15px !important;\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t}\\n\\n\\t\\tp {\\n\\t\\t\\tfont-weight: 500 !important;\\n\\t\\t\\tmargin-top: 3px !important;\\n\\t\\t}\\n\\t}\\n\\n\\t&Description {\\n\\t\\theight: calc(100% - 297px);\\n\\t\\toverflow: auto;\\n\\t\\tpadding: 5px 15px;\\n\\n\\t\\t&::-webkit-scrollbar {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\n\\t\\t&Item {\\n\\t\\t\\tpadding: 15px 0;\\n\\t\\t\\tborder-bottom: 1px solid\\n\\t\\t\\t\\trgba(140, 140, 142, 0.3);\\n\\n\\t\\t\\t&Languages {\\n\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\tjustify-content: space-around;\\n\\t\\t\\t\\tpadding-bottom: 35px;\\n\\t\\t\\t\\tpadding-top: 5px;\\n\\t\\t\\t}\\n\\n\\t\\t\\t&Skills {\\n\\t\\t\\t\\t& > div {\\n\\t\\t\\t\\t\\tmargin-top: 5px;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\t&Footer {\\n\\t\\theight: $footer-height;\\n\\t\\tbox-shadow: 0 1px 4px 0 $lite-theme-box-shadow;\\n\\t\\tbackground-color: #fff;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 35px;\\n\\t}\\n}\\n\",\"// variables\\n\\n// color\\n$dark: #1e1e28;\\n$lite: #fafafc;\\n$muted: #8c8c8e;\\n$secondary: #5c5c6f;\\n$danger: #f44336;\\n\\n$lite-theme-background: #e0e0e6;\\n$lite-theme-box-background: #f4f4f6;\\n$lite-theme-box-shadow: rgba(15, 15, 5, 0.4);\\n\\n// font family\\n$mikhak: mikhak;\\n$vazir: Vazir;\\n\\n$animation-transition: 0.6s;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Aside\": \"Aside_Aside__3-F9F\",\n\t\"AsideHeader\": \"Aside_AsideHeader__25vPB\",\n\t\"AsideDescription\": \"Aside_AsideDescription__2H-A3\",\n\t\"AsideDescriptionItem\": \"Aside_AsideDescriptionItem__1dP_G\",\n\t\"AsideDescriptionItemLanguages\": \"Aside_AsideDescriptionItemLanguages__2Vtig\",\n\t\"AsideDescriptionItemSkills\": \"Aside_AsideDescriptionItemSkills__UBA2z\",\n\t\"AsideFooter\": \"Aside_AsideFooter__2CbMD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvQXNpZGUvQXNpZGUubW9kdWxlLnNjc3M/ZjQzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0JBQXdCLHVCQUF1QixhQUFhLFdBQVcsaUJBQWlCLGlCQUFpQixpQkFBaUIsOEJBQThCLGlEQUFpRCxFQUFFLCtCQUErQixvQkFBb0IsNkJBQTZCLG1CQUFtQixtREFBbUQsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEVBQUUsbUNBQW1DLG9DQUFvQywwQkFBMEIsRUFBRSxtQ0FBbUMsb0NBQW9DLG1DQUFtQyxFQUFFLG9DQUFvQyxpQ0FBaUMscUJBQXFCLHdCQUF3QixFQUFFLHlEQUF5RCxzQkFBc0IsRUFBRSwwQ0FBMEMsd0JBQXdCLDBEQUEwRCxFQUFFLHFEQUFxRCx3QkFBd0IsOEJBQThCLHdDQUF3QywrQkFBK0IsMkJBQTJCLEVBQUUsd0RBQXdELDBCQUEwQixFQUFFLCtCQUErQixtQkFBbUIsbURBQW1ELDZCQUE2QixvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0IsRUFBRSxTQUFTLG9JQUFvSSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFdBQVcsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxhQUFhLGtCQUFrQixNQUFNLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxlQUFlLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGtCQUFrQixNQUFNLGVBQWUsTUFBTSxZQUFZLGVBQWUsY0FBYyxXQUFXLFlBQVksYUFBYSxnRkFBZ0YsWUFBWSwwQkFBMEIseUJBQXlCLHVCQUF1QixhQUFhLFdBQVcsaUJBQWlCLGlCQUFpQixpQkFBaUIsaURBQWlELG1EQUFtRCxlQUFlLDZCQUE2Qiw2QkFBNkIsbUJBQW1CLHFEQUFxRCxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsV0FBVyxvQ0FBb0MsMEJBQTBCLE9BQU8sV0FBVyxvQ0FBb0MsbUNBQW1DLE9BQU8sS0FBSyxvQkFBb0IsaUNBQWlDLHFCQUFxQix3QkFBd0IsOEJBQThCLHNCQUFzQixPQUFPLGVBQWUsd0JBQXdCLG1FQUFtRSxzQkFBc0Isd0JBQXdCLDhCQUE4Qix3Q0FBd0MsK0JBQStCLDJCQUEyQixTQUFTLG1CQUFtQixtQkFBbUIsNEJBQTRCLFdBQVcsU0FBUyxPQUFPLEtBQUssZUFBZSw2QkFBNkIscURBQXFELDZCQUE2QixvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0IsS0FBSyxHQUFHLDhDQUE4QyxpQkFBaUIsa0JBQWtCLHNCQUFzQixtQkFBbUIsb0NBQW9DLHNDQUFzQywrQ0FBK0Msb0NBQW9DLGdCQUFnQixnQ0FBZ0MscUJBQXFCO0FBQzlpSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvTGF5b3V0cy9Bc2lkZS9Bc2lkZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Bc2lkZV9Bc2lkZV9fMy1GOUYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMjkwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY2O1xcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IDAgcmdiYSgxNSwgMTUsIDUsIDAuNCk7IH1cXG4gIC5Bc2lkZV9Bc2lkZUhlYWRlcl9fMjV2UEIge1xcbiAgICBoZWlnaHQ6IDIzNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB6LWluZGV4OiAxMDU7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMTUsIDE1LCA1LCAwLjQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAuQXNpZGVfQXNpZGVIZWFkZXJfXzI1dlBCIGEge1xcbiAgICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDsgfVxcbiAgICAuQXNpZGVfQXNpZGVIZWFkZXJfXzI1dlBCIHAge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG4gICAgICBtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDsgfVxcbiAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25fXzJILUEzIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyOTdweCk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDsgfVxcbiAgICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbl9fMkgtQTM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5Bc2lkZV9Bc2lkZURlc2NyaXB0aW9uSXRlbV9fMWRQX0cge1xcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNDAsIDE0MCwgMTQyLCAwLjMpOyB9XFxuICAgICAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtTGFuZ3VhZ2VzX18yVnRpZyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4OyB9XFxuICAgICAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtU2tpbGxzX19VQkEyeiA+IGRpdiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7IH1cXG4gIC5Bc2lkZV9Bc2lkZUZvb3Rlcl9fMkNiTUQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMTUsIDE1LCA1LCAwLjQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMzVweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Bc2lkZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFHQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkNEa0M7RURFbEMsNENDRDJDLEVBQUE7RURHM0M7SUFDQyxhQVpvQjtJQWFwQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDRDQ1AwQztJRFExQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtJQVJuQjtNQVdDLDJCQUEyQjtNQUMzQixpQkFBaUIsRUFBQTtJQVpsQjtNQWdCQywyQkFBMkI7TUFDM0IsMEJBQTBCLEVBQUE7RUFJNUI7SUFDQywwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQixFQUFBO0lBSGpCO01BTUMsYUFBYSxFQUFBO0lBR2Q7TUFDQyxlQUFlO01BQ2YsaURBQ3lCLEVBQUE7TUFFekI7UUFDQyxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QixvQkFBb0I7UUFDcEIsZ0JBQWdCLEVBQUE7TUFHaEI7UUFFQyxlQUFlLEVBQUE7RUFNbkI7SUFDQyxZQTlEbUI7SUErRG5CLDRDQ3hEMEM7SUR5RDFDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3QvdmFyaWFibGVzJztcXG5cXG4uQXNpZGUge1xcblxcdCRoZWFkZXItaGVpZ2h0OiAyMzVweDtcXG5cXHQkZm9vdGVyLWhlaWdodDogNTBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAyOTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRsaXRlLXRoZW1lLWJveC1iYWNrZ3JvdW5kO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDhweCAwICRsaXRlLXRoZW1lLWJveC1zaGFkb3c7XFxuXFxuXFx0JkhlYWRlciB7XFxuXFx0XFx0aGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdFxcdHotaW5kZXg6IDEwNTtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDFweCA0cHggMCAkbGl0ZS10aGVtZS1ib3gtc2hhZG93O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdGEge1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0JkRlc2NyaXB0aW9uIHtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5N3B4KTtcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXG5cXHRcXHRwYWRkaW5nOiA1cHggMTVweDtcXG5cXG5cXHRcXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jkl0ZW0ge1xcblxcdFxcdFxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXHRcXHRcXHRib3JkZXItYm90dG9tOiAxcHggc29saWRcXG5cXHRcXHRcXHRcXHRyZ2JhKDE0MCwgMTQwLCAxNDIsIDAuMyk7XFxuXFxuXFx0XFx0XFx0Jkxhbmd1YWdlcyB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiAzNXB4O1xcblxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiA1cHg7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdCZTa2lsbHMge1xcblxcdFxcdFxcdFxcdCYgPiBkaXYge1xcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IDVweDtcXG5cXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0JkZvb3RlciB7XFxuXFx0XFx0aGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDFweCA0cHggMCAkbGl0ZS10aGVtZS1ib3gtc2hhZG93O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRwYWRkaW5nOiAwIDM1cHg7XFxuXFx0fVxcbn1cXG5cIixcIi8vIHZhcmlhYmxlc1xcblxcbi8vIGNvbG9yXFxuJGRhcms6ICMxZTFlMjg7XFxuJGxpdGU6ICNmYWZhZmM7XFxuJG11dGVkOiAjOGM4YzhlO1xcbiRzZWNvbmRhcnk6ICM1YzVjNmY7XFxuJGRhbmdlcjogI2Y0NDMzNjtcXG5cXG4kbGl0ZS10aGVtZS1iYWNrZ3JvdW5kOiAjZTBlMGU2O1xcbiRsaXRlLXRoZW1lLWJveC1iYWNrZ3JvdW5kOiAjZjRmNGY2O1xcbiRsaXRlLXRoZW1lLWJveC1zaGFkb3c6IHJnYmEoMTUsIDE1LCA1LCAwLjQpO1xcblxcbi8vIGZvbnQgZmFtaWx5XFxuJG1pa2hhazogbWlraGFrO1xcbiR2YXppcjogVmF6aXI7XFxuXFxuJGFuaW1hdGlvbi10cmFuc2l0aW9uOiAwLjZzO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkFzaWRlXCI6IFwiQXNpZGVfQXNpZGVfXzMtRjlGXCIsXG5cdFwiQXNpZGVIZWFkZXJcIjogXCJBc2lkZV9Bc2lkZUhlYWRlcl9fMjV2UEJcIixcblx0XCJBc2lkZURlc2NyaXB0aW9uXCI6IFwiQXNpZGVfQXNpZGVEZXNjcmlwdGlvbl9fMkgtQTNcIixcblx0XCJBc2lkZURlc2NyaXB0aW9uSXRlbVwiOiBcIkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtX18xZFBfR1wiLFxuXHRcIkFzaWRlRGVzY3JpcHRpb25JdGVtTGFuZ3VhZ2VzXCI6IFwiQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1MYW5ndWFnZXNfXzJWdGlnXCIsXG5cdFwiQXNpZGVEZXNjcmlwdGlvbkl0ZW1Ta2lsbHNcIjogXCJBc2lkZV9Bc2lkZURlc2NyaXB0aW9uSXRlbVNraWxsc19fVUJBMnpcIixcblx0XCJBc2lkZUZvb3RlclwiOiBcIkFzaWRlX0FzaWRlRm9vdGVyX18yQ2JNRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Aside/Aside.module.scss\n");

/***/ })

})