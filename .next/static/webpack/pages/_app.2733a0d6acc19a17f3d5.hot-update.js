webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Aside/Aside.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/Layouts/Aside/Aside.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Aside_Aside__3-F9F {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 290px;\\n  height: 100%;\\n  z-index: 100;\\n  background-color: #f4f4f6;\\n  box-shadow: 0 3px 8px 0 rgba(15, 15, 5, 0.4); }\\n  .Aside_AsideHeader__25vPB {\\n    height: 235px;\\n    background-color: #fff;\\n    z-index: 105;\\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 5, 0.4);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n    .Aside_AsideHeader__25vPB a {\\n      margin-top: 15px !important;\\n      font-weight: bold; }\\n    .Aside_AsideHeader__25vPB p {\\n      font-weight: 500 !important;\\n      margin-top: 3px !important; }\\n  .Aside_AsideDescription__2H-A3 {\\n    height: calc(100% - 297px);\\n    overflow: auto;\\n    padding: 5px 15px; }\\n    .Aside_AsideDescription__2H-A3::-webkit-scrollbar {\\n      display: none; }\\n    .Aside_AsideDescriptionItem__1dP_G {\\n      padding: 15px 0;\\n      border-bottom: 1px solid rgba(140, 140, 142, 0.3); }\\n      .Aside_AsideDescriptionItemCircleProgress__10FGa {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-around;\\n        padding-bottom: 35px;\\n        padding-top: 5px; }\\n  .Aside_AsideFooter__2CbMD {\\n    height: 50px;\\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 5, 0.4);\\n    background-color: #fff;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 35px; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Aside.module.scss\",\"webpack://../../styles/abstract/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EAGC,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBCDkC;EDElC,4CCD2C,EAAA;EDG3C;IACC,aAZoB;IAapB,sBAAsB;IACtB,YAAY;IACZ,4CCP0C;IDQ1C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB,EAAA;IARnB;MAWC,2BAA2B;MAC3B,iBAAiB,EAAA;IAZlB;MAgBC,2BAA2B;MAC3B,0BAA0B,EAAA;EAI5B;IACC,0BAA0B;IAC1B,cAAc;IACd,iBAAiB,EAAA;IAHjB;MAMC,aAAa,EAAA;IAGd;MACC,eAAe;MACf,iDACyB,EAAA;MAEzB;QACC,aAAa;QACb,mBAAmB;QACnB,6BAA6B;QAC7B,oBAAoB;QACpB,gBAAgB,EAAA;EAKnB;IACC,YAxDmB;IAyDnB,4CClD0C;IDmD1C,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe,EAAA\",\"sourcesContent\":[\"@import './../../styles/abstract/variables';\\n\\n.Aside {\\n\\t$header-height: 235px;\\n\\t$footer-height: 50px;\\n\\tposition: absolute;\\n\\tright: 0;\\n\\ttop: 0;\\n\\twidth: 290px;\\n\\theight: 100%;\\n\\tz-index: 100;\\n\\tbackground-color: $lite-theme-box-background;\\n\\tbox-shadow: 0 3px 8px 0 $lite-theme-box-shadow;\\n\\n\\t&Header {\\n\\t\\theight: $header-height;\\n\\t\\tbackground-color: #fff;\\n\\t\\tz-index: 105;\\n\\t\\tbox-shadow: 0 1px 4px 0 $lite-theme-box-shadow;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\n\\t\\ta {\\n\\t\\t\\tmargin-top: 15px !important;\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t}\\n\\n\\t\\tp {\\n\\t\\t\\tfont-weight: 500 !important;\\n\\t\\t\\tmargin-top: 3px !important;\\n\\t\\t}\\n\\t}\\n\\n\\t&Description {\\n\\t\\theight: calc(100% - 297px);\\n\\t\\toverflow: auto;\\n\\t\\tpadding: 5px 15px;\\n\\n\\t\\t&::-webkit-scrollbar {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\n\\t\\t&Item {\\n\\t\\t\\tpadding: 15px 0;\\n\\t\\t\\tborder-bottom: 1px solid\\n\\t\\t\\t\\trgba(140, 140, 142, 0.3);\\n\\n\\t\\t\\t&CircleProgress {\\n\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\tjustify-content: space-around;\\n\\t\\t\\t\\tpadding-bottom: 35px;\\n\\t\\t\\t\\tpadding-top: 5px;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\t&Footer {\\n\\t\\theight: $footer-height;\\n\\t\\tbox-shadow: 0 1px 4px 0 $lite-theme-box-shadow;\\n\\t\\tbackground-color: #fff;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 35px;\\n\\t}\\n}\\n\",\"// variables\\n\\n// color\\n$dark: #1e1e28;\\n$lite: #fafafc;\\n$muted: #8c8c8e;\\n$secondary: #5c5c6f;\\n$danger: #f44336;\\n\\n$lite-theme-background: #e0e0e6;\\n$lite-theme-box-background: #f4f4f6;\\n$lite-theme-box-shadow: rgba(15, 15, 5, 0.4);\\n\\n// font family\\n$mikhak: mikhak;\\n$vazir: Vazir;\\n\\n$animation-transition: 0.6s;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Aside\": \"Aside_Aside__3-F9F\",\n\t\"AsideHeader\": \"Aside_AsideHeader__25vPB\",\n\t\"AsideDescription\": \"Aside_AsideDescription__2H-A3\",\n\t\"AsideDescriptionItem\": \"Aside_AsideDescriptionItem__1dP_G\",\n\t\"AsideDescriptionItemCircleProgress\": \"Aside_AsideDescriptionItemCircleProgress__10FGa\",\n\t\"AsideFooter\": \"Aside_AsideFooter__2CbMD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvQXNpZGUvQXNpZGUubW9kdWxlLnNjc3M/ZjQzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0JBQXdCLHVCQUF1QixhQUFhLFdBQVcsaUJBQWlCLGlCQUFpQixpQkFBaUIsOEJBQThCLGlEQUFpRCxFQUFFLCtCQUErQixvQkFBb0IsNkJBQTZCLG1CQUFtQixtREFBbUQsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEVBQUUsbUNBQW1DLG9DQUFvQywwQkFBMEIsRUFBRSxtQ0FBbUMsb0NBQW9DLG1DQUFtQyxFQUFFLG9DQUFvQyxpQ0FBaUMscUJBQXFCLHdCQUF3QixFQUFFLHlEQUF5RCxzQkFBc0IsRUFBRSwwQ0FBMEMsd0JBQXdCLDBEQUEwRCxFQUFFLDBEQUEwRCx3QkFBd0IsOEJBQThCLHdDQUF3QywrQkFBK0IsMkJBQTJCLEVBQUUsK0JBQStCLG1CQUFtQixtREFBbUQsNkJBQTZCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHNCQUFzQixFQUFFLFNBQVMsb0lBQW9JLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sV0FBVyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGlCQUFpQixNQUFNLGVBQWUsS0FBSyxVQUFVLGlCQUFpQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxlQUFlLGNBQWMsV0FBVyxZQUFZLGFBQWEsZ0ZBQWdGLFlBQVksMEJBQTBCLHlCQUF5Qix1QkFBdUIsYUFBYSxXQUFXLGlCQUFpQixpQkFBaUIsaUJBQWlCLGlEQUFpRCxtREFBbUQsZUFBZSw2QkFBNkIsNkJBQTZCLG1CQUFtQixxREFBcUQsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLFdBQVcsb0NBQW9DLDBCQUEwQixPQUFPLFdBQVcsb0NBQW9DLG1DQUFtQyxPQUFPLEtBQUssb0JBQW9CLGlDQUFpQyxxQkFBcUIsd0JBQXdCLDhCQUE4QixzQkFBc0IsT0FBTyxlQUFlLHdCQUF3QixtRUFBbUUsMkJBQTJCLHdCQUF3Qiw4QkFBOEIsd0NBQXdDLCtCQUErQiwyQkFBMkIsU0FBUyxPQUFPLEtBQUssZUFBZSw2QkFBNkIscURBQXFELDZCQUE2QixvQkFBb0IscUNBQXFDLDBCQUEwQixzQkFBc0IsS0FBSyxHQUFHLDhDQUE4QyxpQkFBaUIsa0JBQWtCLHNCQUFzQixtQkFBbUIsb0NBQW9DLHNDQUFzQywrQ0FBK0Msb0NBQW9DLGdCQUFnQixnQ0FBZ0MscUJBQXFCO0FBQ3ozSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL0xheW91dHMvQXNpZGUvQXNpZGUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXNpZGVfQXNpZGVfXzMtRjlGIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDI5MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCA1LCAwLjQpOyB9XFxuICAuQXNpZGVfQXNpZGVIZWFkZXJfXzI1dlBCIHtcXG4gICAgaGVpZ2h0OiAyMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgei1pbmRleDogMTA1O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDE1LCAxNSwgNSwgMC40KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLkFzaWRlX0FzaWRlSGVhZGVyX18yNXZQQiBhIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG4gICAgLkFzaWRlX0FzaWRlSGVhZGVyX18yNXZQQiBwIHtcXG4gICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XFxuICAgICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7IH1cXG4gIC5Bc2lkZV9Bc2lkZURlc2NyaXB0aW9uX18ySC1BMyB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjk3cHgpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7IH1cXG4gICAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25fXzJILUEzOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1fXzFkUF9HIHtcXG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTQwLCAxNDAsIDE0MiwgMC4zKTsgfVxcbiAgICAgIC5Bc2lkZV9Bc2lkZURlc2NyaXB0aW9uSXRlbUNpcmNsZVByb2dyZXNzX18xMEZHYSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDM1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4OyB9XFxuICAuQXNpZGVfQXNpZGVGb290ZXJfXzJDYk1EIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDE1LCAxNSwgNSwgMC40KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDM1cHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQXNpZGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBR0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJDRGtDO0VERWxDLDRDQ0QyQyxFQUFBO0VERzNDO0lBQ0MsYUFab0I7SUFhcEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiw0Q0NQMEM7SURRMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7SUFSbkI7TUFXQywyQkFBMkI7TUFDM0IsaUJBQWlCLEVBQUE7SUFabEI7TUFnQkMsMkJBQTJCO01BQzNCLDBCQUEwQixFQUFBO0VBSTVCO0lBQ0MsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtJQUhqQjtNQU1DLGFBQWEsRUFBQTtJQUdkO01BQ0MsZUFBZTtNQUNmLGlEQUN5QixFQUFBO01BRXpCO1FBQ0MsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLGdCQUFnQixFQUFBO0VBS25CO0lBQ0MsWUF4RG1CO0lBeURuQiw0Q0NsRDBDO0lEbUQxQyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L3ZhcmlhYmxlcyc7XFxuXFxuLkFzaWRlIHtcXG5cXHQkaGVhZGVyLWhlaWdodDogMjM1cHg7XFxuXFx0JGZvb3Rlci1oZWlnaHQ6IDUwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMjkwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHotaW5kZXg6IDEwMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGl0ZS10aGVtZS1ib3gtYmFja2dyb3VuZDtcXG5cXHRib3gtc2hhZG93OiAwIDNweCA4cHggMCAkbGl0ZS10aGVtZS1ib3gtc2hhZG93O1xcblxcblxcdCZIZWFkZXIge1xcblxcdFxcdGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHR6LWluZGV4OiAxMDU7XFxuXFx0XFx0Ym94LXNoYWRvdzogMCAxcHggNHB4IDAgJGxpdGUtdGhlbWUtYm94LXNoYWRvdztcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHRcXHRhIHtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0XFx0fVxcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcXG5cXHRcXHRcXHRtYXJnaW4tdG9wOiAzcHggIWltcG9ydGFudDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdCZEZXNjcmlwdGlvbiB7XFxuXFx0XFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSAyOTdweCk7XFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0XFx0cGFkZGluZzogNXB4IDE1cHg7XFxuXFxuXFx0XFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcblxcdFxcdCZJdGVtIHtcXG5cXHRcXHRcXHRwYWRkaW5nOiAxNXB4IDA7XFxuXFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkXFxuXFx0XFx0XFx0XFx0cmdiYSgxNDAsIDE0MCwgMTQyLCAwLjMpO1xcblxcblxcdFxcdFxcdCZDaXJjbGVQcm9ncmVzcyB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiAzNXB4O1xcblxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiA1cHg7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0JkZvb3RlciB7XFxuXFx0XFx0aGVpZ2h0OiAkZm9vdGVyLWhlaWdodDtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDFweCA0cHggMCAkbGl0ZS10aGVtZS1ib3gtc2hhZG93O1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRwYWRkaW5nOiAwIDM1cHg7XFxuXFx0fVxcbn1cXG5cIixcIi8vIHZhcmlhYmxlc1xcblxcbi8vIGNvbG9yXFxuJGRhcms6ICMxZTFlMjg7XFxuJGxpdGU6ICNmYWZhZmM7XFxuJG11dGVkOiAjOGM4YzhlO1xcbiRzZWNvbmRhcnk6ICM1YzVjNmY7XFxuJGRhbmdlcjogI2Y0NDMzNjtcXG5cXG4kbGl0ZS10aGVtZS1iYWNrZ3JvdW5kOiAjZTBlMGU2O1xcbiRsaXRlLXRoZW1lLWJveC1iYWNrZ3JvdW5kOiAjZjRmNGY2O1xcbiRsaXRlLXRoZW1lLWJveC1zaGFkb3c6IHJnYmEoMTUsIDE1LCA1LCAwLjQpO1xcblxcbi8vIGZvbnQgZmFtaWx5XFxuJG1pa2hhazogbWlraGFrO1xcbiR2YXppcjogVmF6aXI7XFxuXFxuJGFuaW1hdGlvbi10cmFuc2l0aW9uOiAwLjZzO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkFzaWRlXCI6IFwiQXNpZGVfQXNpZGVfXzMtRjlGXCIsXG5cdFwiQXNpZGVIZWFkZXJcIjogXCJBc2lkZV9Bc2lkZUhlYWRlcl9fMjV2UEJcIixcblx0XCJBc2lkZURlc2NyaXB0aW9uXCI6IFwiQXNpZGVfQXNpZGVEZXNjcmlwdGlvbl9fMkgtQTNcIixcblx0XCJBc2lkZURlc2NyaXB0aW9uSXRlbVwiOiBcIkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtX18xZFBfR1wiLFxuXHRcIkFzaWRlRGVzY3JpcHRpb25JdGVtQ2lyY2xlUHJvZ3Jlc3NcIjogXCJBc2lkZV9Bc2lkZURlc2NyaXB0aW9uSXRlbUNpcmNsZVByb2dyZXNzX18xMEZHYVwiLFxuXHRcIkFzaWRlRm9vdGVyXCI6IFwiQXNpZGVfQXNpZGVGb290ZXJfXzJDYk1EXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Aside/Aside.module.scss\n");

/***/ })

})