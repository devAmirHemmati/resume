webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Aside/Aside.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/Layouts/Aside/Aside.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Aside_Aside__3-F9F {\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  width: 290px;\\n  height: 100%;\\n  z-index: 100;\\n  background-color: #f4f4f6;\\n  box-shadow: 0 3px 8px 0 rgba(15, 15, 5, 0.4); }\\n  .Aside_AsideHeader__25vPB {\\n    height: 235px;\\n    background-color: white;\\n    z-index: 105;\\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 5, 0.4);\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center; }\\n    .Aside_AsideHeader__25vPB a {\\n      margin-top: 15px !important;\\n      font-weight: bold; }\\n    .Aside_AsideHeader__25vPB p {\\n      font-weight: 500 !important;\\n      margin-top: 3px !important; }\\n  .Aside_AsideDescription__2H-A3 {\\n    height: calc(100% - 297px);\\n    overflow: auto;\\n    padding: 5px 15px; }\\n    .Aside_AsideDescription__2H-A3::-webkit-scrollbar {\\n      display: none; }\\n    .Aside_AsideDescriptionItem__1dP_G {\\n      padding: 15px 0; }\\n      .Aside_AsideDescriptionItem__1dP_G:not(:last-child) {\\n        border-bottom: 1px solid rgba(140, 140, 142, 0.3); }\\n      .Aside_AsideDescriptionItemLanguages__2Vtig {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-around;\\n        padding-bottom: 35px;\\n        padding-top: 5px; }\\n      .Aside_AsideDescriptionItemSkills__UBA2z > div:not(:last-child) {\\n        margin-bottom: 18px; }\\n      .Aside_AsideDescriptionItemSkills__UBA2z > div:last-child {\\n        margin-bottom: 5px; }\\n      .Aside_AsideDescriptionItemResumeLink__1QPOG {\\n        padding-bottom: 5px; }\\n        .Aside_AsideDescriptionItemResumeLink__1QPOG a {\\n          display: flex !important;\\n          align-items: center !important; }\\n          .Aside_AsideDescriptionItemResumeLink__1QPOG a svg {\\n            margin-right: 5px !important; }\\n  .Aside_AsideFooter__2CbMD {\\n    height: 50px;\\n    box-shadow: 0 1px 4px 0 rgba(15, 15, 5, 0.4);\\n    background-color: #fff;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0 35px; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Aside.module.scss\",\"webpack://../../styles/abstract/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EAGC,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,yBCDkC;EDElC,4CCD2C,EAAA;EDG3C;IACC,aAZoB;IAapB,uBAAwC;IACxC,YAAY;IACZ,4CCP0C;IDQ1C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB,EAAA;IARnB;MAWC,2BAA2B;MAC3B,iBAAiB,EAAA;IAZlB;MAgBC,2BAA2B;MAC3B,0BAA0B,EAAA;EAI5B;IACC,0BAA0B;IAC1B,cAAc;IACd,iBAAiB,EAAA;IAHjB;MAMC,aAAa,EAAA;IAGd;MACC,eAAe,EAAA;MADf;QAIC,iDACyB,EAAA;MAG1B;QACC,aAAa;QACb,mBAAmB;QACnB,6BAA6B;QAC7B,oBAAoB;QACpB,gBAAgB,EAAA;MAGhB;QAGE,mBAAmB,EAAA;MAHrB;QAOE,kBAAkB,EAAA;MAKrB;QACC,mBAAmB,EAAA;QADnB;UAIC,wBAAwB;UACxB,8BAA8B,EAAA;UAL/B;YAQE,4BAA4B,EAAA;EAOjC;IACC,YApFmB;IAqFnB,4CC9E0C;ID+E1C,sBAAsB;IACtB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe,EAAA\",\"sourcesContent\":[\"@import './../../styles/abstract/variables';\\n\\n.Aside {\\n\\t$header-height: 235px;\\n\\t$footer-height: 50px;\\n\\tposition: absolute;\\n\\tright: 0;\\n\\ttop: 0;\\n\\twidth: 290px;\\n\\theight: 100%;\\n\\tz-index: 100;\\n\\tbackground-color: $lite-theme-box-background;\\n\\tbox-shadow: 0 3px 8px 0 $lite-theme-box-shadow;\\n\\n\\t&Header {\\n\\t\\theight: $header-height;\\n\\t\\tbackground-color: rgba(255, 255, 255, 1);\\n\\t\\tz-index: 105;\\n\\t\\tbox-shadow: 0 1px 4px 0 $lite-theme-box-shadow;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\n\\t\\ta {\\n\\t\\t\\tmargin-top: 15px !important;\\n\\t\\t\\tfont-weight: bold;\\n\\t\\t}\\n\\n\\t\\tp {\\n\\t\\t\\tfont-weight: 500 !important;\\n\\t\\t\\tmargin-top: 3px !important;\\n\\t\\t}\\n\\t}\\n\\n\\t&Description {\\n\\t\\theight: calc(100% - 297px);\\n\\t\\toverflow: auto;\\n\\t\\tpadding: 5px 15px;\\n\\n\\t\\t&::-webkit-scrollbar {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\n\\t\\t&Item {\\n\\t\\t\\tpadding: 15px 0;\\n\\n\\t\\t\\t&:not(:last-child) {\\n\\t\\t\\t\\tborder-bottom: 1px solid\\n\\t\\t\\t\\t\\trgba(140, 140, 142, 0.3);\\n\\t\\t\\t}\\n\\n\\t\\t\\t&Languages {\\n\\t\\t\\t\\tdisplay: flex;\\n\\t\\t\\t\\talign-items: center;\\n\\t\\t\\t\\tjustify-content: space-around;\\n\\t\\t\\t\\tpadding-bottom: 35px;\\n\\t\\t\\t\\tpadding-top: 5px;\\n\\t\\t\\t}\\n\\n\\t\\t\\t&Skills {\\n\\t\\t\\t\\t& > div {\\n\\t\\t\\t\\t\\t&:not(:last-child) {\\n\\t\\t\\t\\t\\t\\tmargin-bottom: 18px;\\n\\t\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t\\t&:last-child {\\n\\t\\t\\t\\t\\t\\tmargin-bottom: 5px;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\\t&ResumeLink {\\n\\t\\t\\t\\tpadding-bottom: 5px;\\n\\n\\t\\t\\t\\ta {\\n\\t\\t\\t\\t\\tdisplay: flex !important;\\n\\t\\t\\t\\t\\talign-items: center !important;\\n\\n\\t\\t\\t\\t\\tsvg {\\n\\t\\t\\t\\t\\t\\tmargin-right: 5px !important;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\t&Footer {\\n\\t\\theight: $footer-height;\\n\\t\\tbox-shadow: 0 1px 4px 0 $lite-theme-box-shadow;\\n\\t\\tbackground-color: #fff;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 35px;\\n\\t}\\n}\\n\",\"// variables\\n\\n// color\\n$dark: #1e1e28;\\n$lite: #fafafc;\\n$muted: #8c8c8e;\\n$secondary: #5c5c6f;\\n$danger: #f44336;\\n\\n$lite-theme-background: #e0e0e6;\\n$lite-theme-box-background: #f4f4f6;\\n$lite-theme-box-shadow: rgba(15, 15, 5, 0.4);\\n\\n// font family\\n$mikhak: mikhak;\\n$vazir: Vazir;\\n\\n$animation-transition: 0.6s;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Aside\": \"Aside_Aside__3-F9F\",\n\t\"AsideHeader\": \"Aside_AsideHeader__25vPB\",\n\t\"AsideDescription\": \"Aside_AsideDescription__2H-A3\",\n\t\"AsideDescriptionItem\": \"Aside_AsideDescriptionItem__1dP_G\",\n\t\"AsideDescriptionItemLanguages\": \"Aside_AsideDescriptionItemLanguages__2Vtig\",\n\t\"AsideDescriptionItemSkills\": \"Aside_AsideDescriptionItemSkills__UBA2z\",\n\t\"AsideDescriptionItemResumeLink\": \"Aside_AsideDescriptionItemResumeLink__1QPOG\",\n\t\"AsideFooter\": \"Aside_AsideFooter__2CbMD\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvQXNpZGUvQXNpZGUubW9kdWxlLnNjc3M/ZjQzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE0RDtBQUN0RztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0JBQXdCLHVCQUF1QixhQUFhLFdBQVcsaUJBQWlCLGlCQUFpQixpQkFBaUIsOEJBQThCLGlEQUFpRCxFQUFFLCtCQUErQixvQkFBb0IsOEJBQThCLG1CQUFtQixtREFBbUQsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEVBQUUsbUNBQW1DLG9DQUFvQywwQkFBMEIsRUFBRSxtQ0FBbUMsb0NBQW9DLG1DQUFtQyxFQUFFLG9DQUFvQyxpQ0FBaUMscUJBQXFCLHdCQUF3QixFQUFFLHlEQUF5RCxzQkFBc0IsRUFBRSwwQ0FBMEMsd0JBQXdCLEVBQUUsNkRBQTZELDREQUE0RCxFQUFFLHFEQUFxRCx3QkFBd0IsOEJBQThCLHdDQUF3QywrQkFBK0IsMkJBQTJCLEVBQUUseUVBQXlFLDhCQUE4QixFQUFFLG1FQUFtRSw2QkFBNkIsRUFBRSxzREFBc0QsOEJBQThCLEVBQUUsMERBQTBELHFDQUFxQywyQ0FBMkMsRUFBRSxnRUFBZ0UsMkNBQTJDLEVBQUUsK0JBQStCLG1CQUFtQixtREFBbUQsNkJBQTZCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHNCQUFzQixFQUFFLFNBQVMsb0lBQW9JLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksa0JBQWtCLE1BQU0sV0FBVyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxXQUFXLGlCQUFpQixNQUFNLGVBQWUsS0FBSyxlQUFlLEtBQUssaUJBQWlCLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLFlBQVksZUFBZSxjQUFjLFdBQVcsWUFBWSxhQUFhLGdGQUFnRixZQUFZLDBCQUEwQix5QkFBeUIsdUJBQXVCLGFBQWEsV0FBVyxpQkFBaUIsaUJBQWlCLGlCQUFpQixpREFBaUQsbURBQW1ELGVBQWUsNkJBQTZCLCtDQUErQyxtQkFBbUIscURBQXFELG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixXQUFXLG9DQUFvQywwQkFBMEIsT0FBTyxXQUFXLG9DQUFvQyxtQ0FBbUMsT0FBTyxLQUFLLG9CQUFvQixpQ0FBaUMscUJBQXFCLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLE9BQU8sZUFBZSx3QkFBd0IsOEJBQThCLHVFQUF1RSxTQUFTLHNCQUFzQix3QkFBd0IsOEJBQThCLHdDQUF3QywrQkFBK0IsMkJBQTJCLFNBQVMsbUJBQW1CLG1CQUFtQixnQ0FBZ0Msa0NBQWtDLGFBQWEsNEJBQTRCLGlDQUFpQyxhQUFhLFdBQVcsU0FBUyx1QkFBdUIsOEJBQThCLGVBQWUscUNBQXFDLDJDQUEyQyxtQkFBbUIsMkNBQTJDLGFBQWEsV0FBVyxTQUFTLE9BQU8sS0FBSyxlQUFlLDZCQUE2QixxREFBcUQsNkJBQTZCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHNCQUFzQixLQUFLLEdBQUcsOENBQThDLGlCQUFpQixrQkFBa0Isc0JBQXNCLG1CQUFtQixvQ0FBb0Msc0NBQXNDLCtDQUErQyxvQ0FBb0MsZ0JBQWdCLGdDQUFnQyxxQkFBcUI7QUFDeGxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3JjL0xheW91dHMvQXNpZGUvQXNpZGUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXNpZGVfQXNpZGVfXzMtRjlGIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDI5MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMTUsIDE1LCA1LCAwLjQpOyB9XFxuICAuQXNpZGVfQXNpZGVIZWFkZXJfXzI1dlBCIHtcXG4gICAgaGVpZ2h0OiAyMzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDEwNTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgxNSwgMTUsIDUsIDAuNCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5Bc2lkZV9Bc2lkZUhlYWRlcl9fMjV2UEIgYSB7XFxuICAgICAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuICAgIC5Bc2lkZV9Bc2lkZUhlYWRlcl9fMjV2UEIgcCB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcbiAgICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50OyB9XFxuICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbl9fMkgtQTMge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5N3B4KTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4OyB9XFxuICAgIC5Bc2lkZV9Bc2lkZURlc2NyaXB0aW9uX18ySC1BMzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtX18xZFBfRyB7XFxuICAgICAgcGFkZGluZzogMTVweCAwOyB9XFxuICAgICAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtX18xZFBfRzpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE0MCwgMTQwLCAxNDIsIDAuMyk7IH1cXG4gICAgICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1MYW5ndWFnZXNfXzJWdGlnIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IH1cXG4gICAgICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1Ta2lsbHNfX1VCQTJ6ID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDsgfVxcbiAgICAgIC5Bc2lkZV9Bc2lkZURlc2NyaXB0aW9uSXRlbVNraWxsc19fVUJBMnogPiBkaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1SZXN1bWVMaW5rX18xUVBPRyB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4OyB9XFxuICAgICAgICAuQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1SZXN1bWVMaW5rX18xUVBPRyBhIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgLkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtUmVzdW1lTGlua19fMVFQT0cgYSBzdmcge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7IH1cXG4gIC5Bc2lkZV9Bc2lkZUZvb3Rlcl9fMkNiTUQge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCAwIHJnYmEoMTUsIDE1LCA1LCAwLjQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMzVweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Bc2lkZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFHQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkNEa0M7RURFbEMsNENDRDJDLEVBQUE7RURHM0M7SUFDQyxhQVpvQjtJQWFwQix1QkFBd0M7SUFDeEMsWUFBWTtJQUNaLDRDQ1AwQztJRFExQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtJQVJuQjtNQVdDLDJCQUEyQjtNQUMzQixpQkFBaUIsRUFBQTtJQVpsQjtNQWdCQywyQkFBMkI7TUFDM0IsMEJBQTBCLEVBQUE7RUFJNUI7SUFDQywwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGlCQUFpQixFQUFBO0lBSGpCO01BTUMsYUFBYSxFQUFBO0lBR2Q7TUFDQyxlQUFlLEVBQUE7TUFEZjtRQUlDLGlEQUN5QixFQUFBO01BRzFCO1FBQ0MsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0Isb0JBQW9CO1FBQ3BCLGdCQUFnQixFQUFBO01BR2hCO1FBR0UsbUJBQW1CLEVBQUE7TUFIckI7UUFPRSxrQkFBa0IsRUFBQTtNQUtyQjtRQUNDLG1CQUFtQixFQUFBO1FBRG5CO1VBSUMsd0JBQXdCO1VBQ3hCLDhCQUE4QixFQUFBO1VBTC9CO1lBUUUsNEJBQTRCLEVBQUE7RUFPakM7SUFDQyxZQXBGbUI7SUFxRm5CLDRDQzlFMEM7SUQrRTFDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3QvdmFyaWFibGVzJztcXG5cXG4uQXNpZGUge1xcblxcdCRoZWFkZXItaGVpZ2h0OiAyMzVweDtcXG5cXHQkZm9vdGVyLWhlaWdodDogNTBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAyOTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0ei1pbmRleDogMTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRsaXRlLXRoZW1lLWJveC1iYWNrZ3JvdW5kO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDhweCAwICRsaXRlLXRoZW1lLWJveC1zaGFkb3c7XFxuXFxuXFx0JkhlYWRlciB7XFxuXFx0XFx0aGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcblxcdFxcdHotaW5kZXg6IDEwNTtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDFweCA0cHggMCAkbGl0ZS10aGVtZS1ib3gtc2hhZG93O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdFxcdGEge1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xcblxcdFxcdFxcdG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0JkRlc2NyaXB0aW9uIHtcXG5cXHRcXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDI5N3B4KTtcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXG5cXHRcXHRwYWRkaW5nOiA1cHggMTVweDtcXG5cXG5cXHRcXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Jkl0ZW0ge1xcblxcdFxcdFxcdHBhZGRpbmc6IDE1cHggMDtcXG5cXG5cXHRcXHRcXHQmOm5vdCg6bGFzdC1jaGlsZCkge1xcblxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZFxcblxcdFxcdFxcdFxcdFxcdHJnYmEoMTQwLCAxNDAsIDE0MiwgMC4zKTtcXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0Jkxhbmd1YWdlcyB7XFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiAzNXB4O1xcblxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiA1cHg7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdCZTa2lsbHMge1xcblxcdFxcdFxcdFxcdCYgPiBkaXYge1xcblxcdFxcdFxcdFxcdFxcdCY6bm90KDpsYXN0LWNoaWxkKSB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMThweDtcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0XFx0XFx0JjpsYXN0LWNoaWxkIHtcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiA1cHg7XFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0JlJlc3VtZUxpbmsge1xcblxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiA1cHg7XFxuXFxuXFx0XFx0XFx0XFx0YSB7XFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcblxcdFxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcXG5cXG5cXHRcXHRcXHRcXHRcXHRzdmcge1xcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmRm9vdGVyIHtcXG5cXHRcXHRoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xcblxcdFxcdGJveC1zaGFkb3c6IDAgMXB4IDRweCAwICRsaXRlLXRoZW1lLWJveC1zaGFkb3c7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHBhZGRpbmc6IDAgMzVweDtcXG5cXHR9XFxufVxcblwiLFwiLy8gdmFyaWFibGVzXFxuXFxuLy8gY29sb3JcXG4kZGFyazogIzFlMWUyODtcXG4kbGl0ZTogI2ZhZmFmYztcXG4kbXV0ZWQ6ICM4YzhjOGU7XFxuJHNlY29uZGFyeTogIzVjNWM2ZjtcXG4kZGFuZ2VyOiAjZjQ0MzM2O1xcblxcbiRsaXRlLXRoZW1lLWJhY2tncm91bmQ6ICNlMGUwZTY7XFxuJGxpdGUtdGhlbWUtYm94LWJhY2tncm91bmQ6ICNmNGY0ZjY7XFxuJGxpdGUtdGhlbWUtYm94LXNoYWRvdzogcmdiYSgxNSwgMTUsIDUsIDAuNCk7XFxuXFxuLy8gZm9udCBmYW1pbHlcXG4kbWlraGFrOiBtaWtoYWs7XFxuJHZhemlyOiBWYXppcjtcXG5cXG4kYW5pbWF0aW9uLXRyYW5zaXRpb246IDAuNnM7XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiQXNpZGVcIjogXCJBc2lkZV9Bc2lkZV9fMy1GOUZcIixcblx0XCJBc2lkZUhlYWRlclwiOiBcIkFzaWRlX0FzaWRlSGVhZGVyX18yNXZQQlwiLFxuXHRcIkFzaWRlRGVzY3JpcHRpb25cIjogXCJBc2lkZV9Bc2lkZURlc2NyaXB0aW9uX18ySC1BM1wiLFxuXHRcIkFzaWRlRGVzY3JpcHRpb25JdGVtXCI6IFwiQXNpZGVfQXNpZGVEZXNjcmlwdGlvbkl0ZW1fXzFkUF9HXCIsXG5cdFwiQXNpZGVEZXNjcmlwdGlvbkl0ZW1MYW5ndWFnZXNcIjogXCJBc2lkZV9Bc2lkZURlc2NyaXB0aW9uSXRlbUxhbmd1YWdlc19fMlZ0aWdcIixcblx0XCJBc2lkZURlc2NyaXB0aW9uSXRlbVNraWxsc1wiOiBcIkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtU2tpbGxzX19VQkEyelwiLFxuXHRcIkFzaWRlRGVzY3JpcHRpb25JdGVtUmVzdW1lTGlua1wiOiBcIkFzaWRlX0FzaWRlRGVzY3JpcHRpb25JdGVtUmVzdW1lTGlua19fMVFQT0dcIixcblx0XCJBc2lkZUZvb3RlclwiOiBcIkFzaWRlX0FzaWRlRm9vdGVyX18yQ2JNRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Aside/Aside.module.scss\n");

/***/ })

})