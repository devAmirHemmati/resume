webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Index/CountUp/CountUp.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Index/CountUp/CountUp.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".CountUp_CountUpList__13R55 {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  list-style: none; }\\n  .CountUp_CountUpList__13R55 li {\\n    flex-basis: 25%;\\n    padding-top: 25px;\\n    text-align: center; }\\n    .CountUp_CountUpList__13R55 li span {\\n      line-height: 0; }\\n      .CountUp_CountUpList__13R55 li span::-moz-selection {\\n        background-color: transparent; }\\n      .CountUp_CountUpList__13R55 li span::selection {\\n        background-color: transparent; }\\n      .CountUp_CountUpList__13R55 li span:first-child {\\n        font-size: 22px;\\n        color: #f44336; }\\n      .CountUp_CountUpList__13R55 li span:last-child {\\n        font-size: 15px;\\n        font-weight: 500; }\\n    @media (max-width: 767.98px) {\\n      .CountUp_CountUpList__13R55 li {\\n        flex-basis: 50%; } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://CountUp.module.scss\",\"webpack://../../../styles/abstract/_variables.scss\",\"webpack://../../../styles/abstract/_media.scss\"],\"names\":[],\"mappings\":\"AAIC;EACC,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,gBAAgB,EAAA;EAJhB;IAOC,eAAe;IACf,iBAAiB;IACjB,kBAAkB,EAAA;IATnB;MAYE,cAAc,EAAA;MAZhB;QAeG,6BAA6B,EAAA;MAfhC;QAeG,6BAA6B,EAAA;MAfhC;QAmBG,eAAe;QACf,cCjBW,EAAA;MDHd;QAwBG,eAAe;QACf,gBAAgB,EAAA;IEtBlB;MFHD;QA8BE,eAAe,EAAA,EAEhB\",\"sourcesContent\":[\"@import './../../../styles/abstract/media';\\n@import './../../../styles/abstract/variables';\\n\\n.CountUp {\\n\\t&List {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tjustify-content: center;\\n\\t\\tlist-style: none;\\n\\n\\t\\tli {\\n\\t\\t\\tflex-basis: 25%;\\n\\t\\t\\tpadding-top: 25px;\\n\\t\\t\\ttext-align: center;\\n\\n\\t\\t\\tspan {\\n\\t\\t\\t\\tline-height: 0;\\n\\n\\t\\t\\t\\t&::selection {\\n\\t\\t\\t\\t\\tbackground-color: transparent;\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t&:first-child {\\n\\t\\t\\t\\t\\tfont-size: 22px;\\n\\t\\t\\t\\t\\tcolor: $danger;\\n\\t\\t\\t\\t}\\n\\n\\t\\t\\t\\t&:last-child {\\n\\t\\t\\t\\t\\tfont-size: 15px;\\n\\t\\t\\t\\t\\tfont-weight: 500;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\n\\t\\t\\t@include media('max', 'sm') {\\n\\t\\t\\t\\tflex-basis: 50%;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\",\"// variables\\n\\n// color\\n$dark: #1e1e28;\\n$lite: #fafafc;\\n$muted: #8c8c8e;\\n$secondary: #5c5c6f;\\n$danger: #f44336;\\n\\n$lite-theme-background: #e0e0e6;\\n$lite-theme-box-background: #f4f4f6;\\n$lite-theme-box-shadow: rgba(15, 15, 5, 0.4);\\n\\n// font family\\n$mikhak: mikhak;\\n$vazir: Vazir;\\n\\n$animation-transition: 0.6s;\\n\",\"@mixin media($syntax, $device) {\\n\\t@if $syntax == 'max' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (max-width: 767.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (max-width: 991.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (max-width: 1199.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (max-width: 500000) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else {\\n\\t\\t\\t@media (max-width: $device) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t} @else if $syntax == 'min' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (min-width: 576px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (min-width: 768px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (min-width: 992px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (min-width: 1200px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else {\\n\\t\\t\\t@media (max-width: $device) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"CountUpList\": \"CountUp_CountUpList__13R55\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5kZXgvQ291bnRVcC9Db3VudFVwLm1vZHVsZS5zY3NzPzI0NDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywwSEFBK0Q7QUFDekc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLGdDQUFnQyxrQkFBa0Isb0JBQW9CLDRCQUE0QixxQkFBcUIsRUFBRSxvQ0FBb0Msc0JBQXNCLHdCQUF3Qix5QkFBeUIsRUFBRSwyQ0FBMkMsdUJBQXVCLEVBQUUsNkRBQTZELHdDQUF3QyxFQUFFLHdEQUF3RCx3Q0FBd0MsRUFBRSx5REFBeUQsMEJBQTBCLHlCQUF5QixFQUFFLHdEQUF3RCwwQkFBMEIsMkJBQTJCLEVBQUUsb0NBQW9DLHdDQUF3QywwQkFBMEIsRUFBRSxFQUFFLFNBQVMsMExBQTBMLFVBQVUsVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxlQUFlLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sV0FBVyxnQkFBZ0IsS0FBSyxXQUFXLGlCQUFpQixPQUFPLEtBQUsscUZBQXFGLGlEQUFpRCxjQUFjLFdBQVcsb0JBQW9CLHNCQUFzQiw4QkFBOEIsdUJBQXVCLFlBQVksd0JBQXdCLDBCQUEwQiwyQkFBMkIsZ0JBQWdCLHlCQUF5QiwwQkFBMEIsMENBQTBDLFdBQVcsMkJBQTJCLDRCQUE0QiwyQkFBMkIsV0FBVywwQkFBMEIsNEJBQTRCLDZCQUE2QixXQUFXLFNBQVMsdUNBQXVDLDBCQUEwQixTQUFTLE9BQU8sS0FBSyxHQUFHLDhDQUE4QyxpQkFBaUIsa0JBQWtCLHNCQUFzQixtQkFBbUIsb0NBQW9DLHNDQUFzQywrQ0FBK0Msb0NBQW9DLGdCQUFnQixnQ0FBZ0MscUNBQXFDLDBCQUEwQiw2QkFBNkIsc0NBQXNDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLHNDQUFzQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixzQ0FBc0MsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsdUNBQXVDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG9DQUFvQyxtQkFBbUIsU0FBUyxPQUFPLFFBQVEscUNBQXFDLG1CQUFtQixTQUFTLE9BQU8sS0FBSyw0QkFBNEIsNkJBQTZCLHNDQUFzQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixtQ0FBbUMsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsbUNBQW1DLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG1DQUFtQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixvQ0FBb0MsbUJBQW1CLFNBQVMsT0FBTyxRQUFRLHFDQUFxQyxtQkFBbUIsU0FBUyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDcmxIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL0luZGV4L0NvdW50VXAvQ291bnRVcC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db3VudFVwX0NvdW50VXBMaXN0X18xM1I1NSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAuQ291bnRVcF9Db3VudFVwTGlzdF9fMTNSNTUgbGkge1xcbiAgICBmbGV4LWJhc2lzOiAyNSU7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgLkNvdW50VXBfQ291bnRVcExpc3RfXzEzUjU1IGxpIHNwYW4ge1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAwOyB9XFxuICAgICAgLkNvdW50VXBfQ291bnRVcExpc3RfXzEzUjU1IGxpIHNwYW46Oi1tb3otc2VsZWN0aW9uIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuICAgICAgLkNvdW50VXBfQ291bnRVcExpc3RfXzEzUjU1IGxpIHNwYW46OnNlbGVjdGlvbiB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgICAgIC5Db3VudFVwX0NvdW50VXBMaXN0X18xM1I1NSBsaSBzcGFuOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2OyB9XFxuICAgICAgLkNvdW50VXBfQ291bnRVcExpc3RfXzEzUjU1IGxpIHNwYW46bGFzdC1jaGlsZCB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogNTAwOyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xcbiAgICAgIC5Db3VudFVwX0NvdW50VXBMaXN0X18xM1I1NSBsaSB7XFxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Db3VudFVwLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC9fbWVkaWEuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQztFQUNDLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBO0VBSmhCO0lBT0MsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtJQVRuQjtNQVlFLGNBQWMsRUFBQTtNQVpoQjtRQWVHLDZCQUE2QixFQUFBO01BZmhDO1FBZUcsNkJBQTZCLEVBQUE7TUFmaEM7UUFtQkcsZUFBZTtRQUNmLGNDakJXLEVBQUE7TURIZDtRQXdCRyxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7SUV0QmxCO01GSEQ7UUE4QkUsZUFBZSxFQUFBLEVBRWhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vLi4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L21lZGlhJztcXG5AaW1wb3J0ICcuLy4uLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC92YXJpYWJsZXMnO1xcblxcbi5Db3VudFVwIHtcXG5cXHQmTGlzdCB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXG5cXHRcXHRsaSB7XFxuXFx0XFx0XFx0ZmxleC1iYXNpczogMjUlO1xcblxcdFxcdFxcdHBhZGRpbmctdG9wOiAyNXB4O1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXHRcXHRcXHRzcGFuIHtcXG5cXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMDtcXG5cXG5cXHRcXHRcXHRcXHQmOjpzZWxlY3Rpb24ge1xcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdFxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRcXHQmOmZpcnN0LWNoaWxkIHtcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDIycHg7XFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6ICRkYW5nZXI7XFxuXFx0XFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdFxcdCY6bGFzdC1jaGlsZCB7XFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdH1cXG5cXG5cXHRcXHRcXHRAaW5jbHVkZSBtZWRpYSgnbWF4JywgJ3NtJykge1xcblxcdFxcdFxcdFxcdGZsZXgtYmFzaXM6IDUwJTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCIvLyB2YXJpYWJsZXNcXG5cXG4vLyBjb2xvclxcbiRkYXJrOiAjMWUxZTI4O1xcbiRsaXRlOiAjZmFmYWZjO1xcbiRtdXRlZDogIzhjOGM4ZTtcXG4kc2Vjb25kYXJ5OiAjNWM1YzZmO1xcbiRkYW5nZXI6ICNmNDQzMzY7XFxuXFxuJGxpdGUtdGhlbWUtYmFja2dyb3VuZDogI2UwZTBlNjtcXG4kbGl0ZS10aGVtZS1ib3gtYmFja2dyb3VuZDogI2Y0ZjRmNjtcXG4kbGl0ZS10aGVtZS1ib3gtc2hhZG93OiByZ2JhKDE1LCAxNSwgNSwgMC40KTtcXG5cXG4vLyBmb250IGZhbWlseVxcbiRtaWtoYWs6IG1pa2hhaztcXG4kdmF6aXI6IFZhemlyO1xcblxcbiRhbmltYXRpb24tdHJhbnNpdGlvbjogMC42cztcXG5cIixcIkBtaXhpbiBtZWRpYSgkc3ludGF4LCAkZGV2aWNlKSB7XFxuXFx0QGlmICRzeW50YXggPT0gJ21heCcge1xcblxcdFxcdEBpZiAoJGRldmljZSA9PSAneHMnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3NtJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdtZCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnbGcnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICd4bCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNTAwMDAwKSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2Uge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkZGV2aWNlKSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9IEBlbHNlIGlmICRzeW50YXggPT0gJ21pbicge1xcblxcdFxcdEBpZiAoJGRldmljZSA9PSAneHMnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3NtJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdtZCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnbGcnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3hsJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRkZXZpY2UpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiQ291bnRVcExpc3RcIjogXCJDb3VudFVwX0NvdW50VXBMaXN0X18xM1I1NVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Index/CountUp/CountUp.module.scss\n");

/***/ })

})