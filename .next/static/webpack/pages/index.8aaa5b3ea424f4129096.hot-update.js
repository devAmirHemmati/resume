webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Index/Banner/Banner.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Index/Banner/Banner.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Banner_Banner__2Y_OI {\\n  background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(\\\"/Images/bg.jpg\\\");\\n  background-size: cover;\\n  background-position: center;\\n  position: relative;\\n  padding: 60px; }\\n  .Banner_Banner__2Y_OI::before {\\n    content: '';\\n    position: absolute;\\n    left: 5%;\\n    top: -30px;\\n    height: 30px;\\n    width: 90%;\\n    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\\n    background-color: rgba(255, 255, 255, 0.88);\\n    border-top-left-radius: 3px;\\n    border-top-right-radius: 3px; }\\n  .Banner_BannerContent__2AEvG h1 {\\n    line-height: 1.2 !important;\\n    margin-bottom: 15px !important; }\\n    @media (max-width: 1600px) {\\n      .Banner_BannerContent__2AEvG h1 {\\n        font-size: 42px; } }\\n    @media (max-width: 1400px) {\\n      .Banner_BannerContent__2AEvG h1 {\\n        font-size: 36px; } }\\n    @media (max-width: 1400px) {\\n      .Banner_BannerContent__2AEvG h1 {\\n        font-size: 36px; } }\\n    @media (max-width: 1032px) {\\n      .Banner_BannerContent__2AEvG h1 {\\n        font-size: 42px; } }\\n  .Banner_BannerContent__2AEvG p {\\n    margin-bottom: 25px !important; }\\n    .Banner_BannerContent__2AEvG p span {\\n      font-weight: bold !important; }\\n  .Banner_BannerImageBox__2xONa img {\\n    width: 400px;\\n    position: absolute;\\n    bottom: -1px;\\n    left: 30px; }\\n  @media (max-width: 991.98px) {\\n    .Banner_BannerImageBox__2xONa {\\n      display: none; } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Banner.module.scss\",\"webpack://../../../styles/abstract/_media.scss\"],\"names\":[],\"mappings\":\"AAEA;EACC,4FAIsB;EACtB,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,aAAa,EAAA;EATd;IAYE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,UAAU;IACV,YAAY;IACZ,UAAU;IACV,6CAA6C;IAC7C,2CAA2C;IAC3C,2BAA2B;IAC3B,4BAA4B,EAAA;EAG5B;IAEC,2BAA2B;IAC3B,8BAA8B,EAAA;ICN9B;MDGD;QAME,eAAe,EAAA,EAchB;ICvBA;MDGD;QAUE,eAAe,EAAA,EAUhB;ICvBA;MDGD;QAcE,eAAe,EAAA,EAMhB;ICvBA;MDGD;QAkBE,eAAe,EAAA,EAEhB;EApBD;IAuBC,8BAA8B,EAAA;IAvB/B;MA0BE,4BAA4B,EAAA;EAK9B;IAEC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,UAAU,EAAA;ECnDV;ID8CF;MASE,aAAa,EAAA,EAEd\",\"sourcesContent\":[\"@import './../../../styles/abstract/media';\\n\\n.Banner {\\n\\tbackground: linear-gradient(\\n\\t\\t\\trgba(000, 000, 000, 0.35),\\n\\t\\t\\trgba(000, 000, 000, 0.35)\\n\\t\\t),\\n\\t\\turl('/Images/bg.jpg');\\n\\tbackground-size: cover;\\n\\tbackground-position: center;\\n\\tposition: relative;\\n\\tpadding: 60px;\\n\\n\\t&::before {\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\tleft: 5%;\\n\\t\\ttop: -30px;\\n\\t\\theight: 30px;\\n\\t\\twidth: 90%;\\n\\t\\tbox-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);\\n\\t\\tbackground-color: rgba(255, 255, 255, 0.88);\\n\\t\\tborder-top-left-radius: 3px;\\n\\t\\tborder-top-right-radius: 3px;\\n\\t}\\n\\n\\t&Content {\\n\\t\\th1 {\\n\\t\\t\\tline-height: 1.2 !important;\\n\\t\\t\\tmargin-bottom: 15px !important;\\n\\n\\t\\t\\t@include media('max', 1600px) {\\n\\t\\t\\t\\tfont-size: 42px;\\n\\t\\t\\t}\\n\\n\\t\\t\\t@include media('max', 1400px) {\\n\\t\\t\\t\\tfont-size: 36px;\\n\\t\\t\\t}\\n\\n\\t\\t\\t@include media('max', 1400px) {\\n\\t\\t\\t\\tfont-size: 36px;\\n\\t\\t\\t}\\n\\n\\t\\t\\t@include media('max', 1032px) {\\n\\t\\t\\t\\tfont-size: 42px;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\tp {\\n\\t\\t\\tmargin-bottom: 25px !important;\\n\\n\\t\\t\\tspan {\\n\\t\\t\\t\\tfont-weight: bold !important;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n\\n\\t&ImageBox {\\n\\t\\timg {\\n\\t\\t\\twidth: 400px;\\n\\t\\t\\tposition: absolute;\\n\\t\\t\\tbottom: -1px;\\n\\t\\t\\tleft: 30px;\\n\\t\\t}\\n\\n\\t\\t@include media('max', 'md') {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n}\\n\",\"@mixin media($syntax, $device) {\\n\\t@if $syntax == 'max' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (max-width: 767.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (max-width: 991.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (max-width: 1199.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (max-width: 500000) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else {\\n\\t\\t\\t@media (max-width: $device) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t} @else if $syntax == 'min' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (min-width: 576px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (min-width: 768px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (min-width: 992px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (min-width: 1200px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else {\\n\\t\\t\\t@media (max-width: $device) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Banner\": \"Banner_Banner__2Y_OI\",\n\t\"BannerContent\": \"Banner_BannerContent__2AEvG\",\n\t\"BannerImageBox\": \"Banner_BannerImageBox__2xONa\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5kZXgvQmFubmVyL0Jhbm5lci5tb2R1bGUuc2Nzcz8yZmNjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsbUdBQW1HLDJCQUEyQixnQ0FBZ0MsdUJBQXVCLGtCQUFrQixFQUFFLG1DQUFtQyxrQkFBa0IseUJBQXlCLGVBQWUsaUJBQWlCLG1CQUFtQixpQkFBaUIsb0RBQW9ELGtEQUFrRCxrQ0FBa0MsbUNBQW1DLEVBQUUscUNBQXFDLGtDQUFrQyxxQ0FBcUMsRUFBRSxrQ0FBa0MseUNBQXlDLDBCQUEwQixFQUFFLEVBQUUsa0NBQWtDLHlDQUF5QywwQkFBMEIsRUFBRSxFQUFFLGtDQUFrQyx5Q0FBeUMsMEJBQTBCLEVBQUUsRUFBRSxrQ0FBa0MseUNBQXlDLDBCQUEwQixFQUFFLEVBQUUsb0NBQW9DLHFDQUFxQyxFQUFFLDJDQUEyQyxxQ0FBcUMsRUFBRSx1Q0FBdUMsbUJBQW1CLHlCQUF5QixtQkFBbUIsaUJBQWlCLEVBQUUsa0NBQWtDLHFDQUFxQyxzQkFBc0IsRUFBRSxFQUFFLFNBQVMsb0lBQW9JLFlBQVksYUFBYSxhQUFhLGFBQWEsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxLQUFLLHFCQUFxQixNQUFNLEtBQUsscUJBQXFCLE1BQU0sS0FBSyxxQkFBcUIsTUFBTSxLQUFLLHNCQUFzQixNQUFNLGtCQUFrQixPQUFPLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLGVBQWUsTUFBTSxNQUFNLG1GQUFtRixhQUFhLHVJQUF1SSwyQkFBMkIsZ0NBQWdDLHVCQUF1QixrQkFBa0IsaUJBQWlCLGtCQUFrQix5QkFBeUIsZUFBZSxpQkFBaUIsbUJBQW1CLGlCQUFpQixvREFBb0Qsa0RBQWtELGtDQUFrQyxtQ0FBbUMsS0FBSyxnQkFBZ0IsVUFBVSxvQ0FBb0MsdUNBQXVDLHlDQUF5QywwQkFBMEIsU0FBUyx5Q0FBeUMsMEJBQTBCLFNBQVMseUNBQXlDLDBCQUEwQixTQUFTLHlDQUF5QywwQkFBMEIsU0FBUyxPQUFPLFdBQVcsdUNBQXVDLGdCQUFnQix1Q0FBdUMsU0FBUyxPQUFPLEtBQUssaUJBQWlCLFdBQVcscUJBQXFCLDJCQUEyQixxQkFBcUIsbUJBQW1CLE9BQU8scUNBQXFDLHNCQUFzQixPQUFPLEtBQUssR0FBRyxxQ0FBcUMsMEJBQTBCLDZCQUE2QixzQ0FBc0MsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsc0NBQXNDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLHNDQUFzQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2Qix1Q0FBdUMsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsb0NBQW9DLG1CQUFtQixTQUFTLE9BQU8sUUFBUSxxQ0FBcUMsbUJBQW1CLFNBQVMsT0FBTyxLQUFLLDRCQUE0Qiw2QkFBNkIsc0NBQXNDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG1DQUFtQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixtQ0FBbUMsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsbUNBQW1DLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG9DQUFvQyxtQkFBbUIsU0FBUyxPQUFPLFFBQVEscUNBQXFDLG1CQUFtQixTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUM3cEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL0luZGV4L0Jhbm5lci9CYW5uZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQmFubmVyX0Jhbm5lcl9fMllfT0kge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zNSksIHJnYmEoMCwgMCwgMCwgMC4zNSkpLCB1cmwoXFxcIi9JbWFnZXMvYmcuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogNjBweDsgfVxcbiAgLkJhbm5lcl9CYW5uZXJfXzJZX09JOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA1JTtcXG4gICAgdG9wOiAtMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDsgfVxcbiAgLkJhbm5lcl9CYW5uZXJDb250ZW50X18yQUV2RyBoMSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50OyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXG4gICAgICAuQmFubmVyX0Jhbm5lckNvbnRlbnRfXzJBRXZHIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDsgfSB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gICAgICAuQmFubmVyX0Jhbm5lckNvbnRlbnRfXzJBRXZHIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDsgfSB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDAwcHgpIHtcXG4gICAgICAuQmFubmVyX0Jhbm5lckNvbnRlbnRfXzJBRXZHIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDsgfSB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDMycHgpIHtcXG4gICAgICAuQmFubmVyX0Jhbm5lckNvbnRlbnRfXzJBRXZHIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDsgfSB9XFxuICAuQmFubmVyX0Jhbm5lckNvbnRlbnRfXzJBRXZHIHAge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7IH1cXG4gICAgLkJhbm5lcl9CYW5uZXJDb250ZW50X18yQUV2RyBwIHNwYW4ge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7IH1cXG4gIC5CYW5uZXJfQmFubmVySW1hZ2VCb3hfXzJ4T05hIGltZyB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IC0xcHg7XFxuICAgIGxlZnQ6IDMwcHg7IH1cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xcbiAgICAuQmFubmVyX0Jhbm5lckltYWdlQm94X18yeE9OYSB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0Jhbm5lci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC9fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNDLDRGQUlzQjtFQUN0QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7RUFUZDtJQVlFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLDZDQUE2QztJQUM3QywyQ0FBMkM7SUFDM0MsMkJBQTJCO0lBQzNCLDRCQUE0QixFQUFBO0VBRzVCO0lBRUMsMkJBQTJCO0lBQzNCLDhCQUE4QixFQUFBO0lDTjlCO01ER0Q7UUFNRSxlQUFlLEVBQUEsRUFjaEI7SUN2QkE7TURHRDtRQVVFLGVBQWUsRUFBQSxFQVVoQjtJQ3ZCQTtNREdEO1FBY0UsZUFBZSxFQUFBLEVBTWhCO0lDdkJBO01ER0Q7UUFrQkUsZUFBZSxFQUFBLEVBRWhCO0VBcEJEO0lBdUJDLDhCQUE4QixFQUFBO0lBdkIvQjtNQTBCRSw0QkFBNEIsRUFBQTtFQUs5QjtJQUVDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVUsRUFBQTtFQ25EVjtJRDhDRjtNQVNFLGFBQWEsRUFBQSxFQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L21lZGlhJztcXG5cXG4uQmFubmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0cmdiYSgwMDAsIDAwMCwgMDAwLCAwLjM1KSxcXG5cXHRcXHRcXHRyZ2JhKDAwMCwgMDAwLCAwMDAsIDAuMzUpXFxuXFx0XFx0KSxcXG5cXHRcXHR1cmwoJy9JbWFnZXMvYmcuanBnJyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmc6IDYwcHg7XFxuXFxuXFx0Jjo6YmVmb3JlIHtcXG5cXHRcXHRjb250ZW50OiAnJztcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0bGVmdDogNSU7XFxuXFx0XFx0dG9wOiAtMzBweDtcXG5cXHRcXHRoZWlnaHQ6IDMwcHg7XFxuXFx0XFx0d2lkdGg6IDkwJTtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDE1LCAxNSwgMjAsIDAuMik7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg4KTtcXG5cXHRcXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XFxuXFx0XFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDNweDtcXG5cXHR9XFxuXFxuXFx0JkNvbnRlbnQge1xcblxcdFxcdGgxIHtcXG5cXHRcXHRcXHRsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xcblxcblxcdFxcdFxcdEBpbmNsdWRlIG1lZGlhKCdtYXgnLCAxNjAwcHgpIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDQycHg7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdEBpbmNsdWRlIG1lZGlhKCdtYXgnLCAxNDAwcHgpIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDM2cHg7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdEBpbmNsdWRlIG1lZGlhKCdtYXgnLCAxNDAwcHgpIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDM2cHg7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdEBpbmNsdWRlIG1lZGlhKCdtYXgnLCAxMDMycHgpIHtcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDQycHg7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XFxuXFxuXFx0XFx0XFx0c3BhbiB7XFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQmSW1hZ2VCb3gge1xcblxcdFxcdGltZyB7XFxuXFx0XFx0XFx0d2lkdGg6IDQwMHB4O1xcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRcXHRib3R0b206IC0xcHg7XFxuXFx0XFx0XFx0bGVmdDogMzBweDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0QGluY2x1ZGUgbWVkaWEoJ21heCcsICdtZCcpIHtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiLFwiQG1peGluIG1lZGlhKCRzeW50YXgsICRkZXZpY2UpIHtcXG5cXHRAaWYgJHN5bnRheCA9PSAnbWF4JyB7XFxuXFx0XFx0QGlmICgkZGV2aWNlID09ICd4cycpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnc20nKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ21kJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdsZycpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3hsJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA1MDAwMDApIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRkZXZpY2UpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH0gQGVsc2UgaWYgJHN5bnRheCA9PSAnbWluJyB7XFxuXFx0XFx0QGlmICgkZGV2aWNlID09ICd4cycpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnc20nKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ21kJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdsZycpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAneGwnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJGRldmljZSkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJCYW5uZXJcIjogXCJCYW5uZXJfQmFubmVyX18yWV9PSVwiLFxuXHRcIkJhbm5lckNvbnRlbnRcIjogXCJCYW5uZXJfQmFubmVyQ29udGVudF9fMkFFdkdcIixcblx0XCJCYW5uZXJJbWFnZUJveFwiOiBcIkJhbm5lcl9CYW5uZXJJbWFnZUJveF9fMnhPTmFcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Index/Banner/Banner.module.scss\n");

/***/ })

})