webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Header/Header.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/Layouts/Header/Header.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Header_Header__3pem6 {\\n  position: absolute;\\n  background-color: #f4f4f6;\\n  height: 70px;\\n  width: 100%;\\n  z-index: 45;\\n  transition: 0.6s; }\\n  .Header_Header__3pem6 > div {\\n    padding: 0 30px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    height: 100%; }\\n  .Header_HeaderMenuIcon__sgb0A {\\n    height: 70px;\\n    transition: 0.6s; }\\n    .Header_HeaderMenuIcon__sgb0A > div {\\n      height: 100%;\\n      cursor: pointer;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: 80px; }\\n      .Header_HeaderMenuIcon__sgb0A > div > * {\\n        bottom: 3px; }\\n    .Header_HeaderMenuIconDisable__Ht-aY {\\n      opacity: 0;\\n      visibility: hidden; }\\n    .Header_HeaderMenuIconActive__3Er_c {\\n      opacity: 0; }\\n  .Header_HeaderIconAside__3AKoJ {\\n    cursor: pointer;\\n    transition: 0.6s; }\\n    .Header_HeaderIconAsideActive__3Jpo5 {\\n      transform: translate(-290px, 0); }\\n  @media (max-width: 991.98px) {\\n    .Header_Header__3pem6 {\\n      left: 0;\\n      width: 100%;\\n      top: 0; } }\\n  @media (min-width: 992px) {\\n    .Header_Header__3pem6 {\\n      top: -70px;\\n      left: 80px;\\n      width: calc(100% - (290px + 80px)); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Header.module.scss\",\"webpack://../../styles/abstract/_variables.scss\",\"webpack://../../styles/abstract/_media.scss\"],\"names\":[],\"mappings\":\"AAGA;EACC,kBAAkB;EAClB,yBCKkC;EDJlC,YAAY;EACZ,WAAW;EACX,WAAW;EACX,gBCQ0B,EAAA;EDd3B;IASE,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY,EAAA;EAGb;IACC,YAAY;IACZ,gBCJyB,EAAA;IDEzB;MAKC,YAAY;MACZ,eAAe;MACf,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,WAAW,EAAA;MAVZ;QAaE,WAAW,EAAA;IAIb;MACC,UAAU;MACV,kBAAkB,EAAA;IAGnB;MACC,UAAU,EAAA;EAIZ;IACC,eAAe;IACf,gBC/ByB,EAAA;IDiCzB;MACC,+BAA+B,EAAA;EExC/B;IFRH;MAwDE,OAAO;MACP,WAAW;MACX,MAAM,EAAA,EAOP;EE/BE;IFlCH;MA6DE,UAAU;MACV,UAAU;MACV,kCAAkC,EAAA,EAEnC\",\"sourcesContent\":[\"@import './../../styles/abstract/variables';\\n@import './../../styles/abstract/media';\\n\\n.Header {\\n\\tposition: absolute;\\n\\tbackground-color: $lite-theme-box-background;\\n\\theight: 70px;\\n\\twidth: 100%;\\n\\tz-index: 45;\\n\\ttransition: $animation-transition;\\n\\n\\t& > div {\\n\\t\\tpadding: 0 30px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t&MenuIcon {\\n\\t\\theight: 70px;\\n\\t\\ttransition: $animation-transition;\\n\\n\\t\\t& > div {\\n\\t\\t\\theight: 100%;\\n\\t\\t\\tcursor: pointer;\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\twidth: 80px;\\n\\n\\t\\t\\t& > * {\\n\\t\\t\\t\\tbottom: 3px;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\t&Disable {\\n\\t\\t\\topacity: 0;\\n\\t\\t\\tvisibility: hidden;\\n\\t\\t}\\n\\n\\t\\t&Active {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t&IconAside {\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: $animation-transition;\\n\\n\\t\\t&Active {\\n\\t\\t\\ttransform: translate(-290px, 0);\\n\\t\\t}\\n\\n\\t\\t&Disable {\\n\\t\\t}\\n\\t}\\n\\n\\t@include media('max', 'md') {\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\ttop: 0;\\n\\t}\\n\\t@include media('min', 'lg') {\\n\\t\\ttop: -70px;\\n\\t\\tleft: 80px;\\n\\t\\twidth: calc(100% - (290px + 80px));\\n\\t}\\n}\\n\",\"// variables\\n\\n// color\\n$dark: #1e1e28;\\n$lite: #fafafc;\\n$muted: #8c8c8e;\\n$secondary: #5c5c6f;\\n$danger: #f44336;\\n\\n$lite-theme-background: #e0e0e6;\\n$lite-theme-box-background: #f4f4f6;\\n$lite-theme-box-shadow: rgba(15, 15, 5, 0.4);\\n\\n// font family\\n$mikhak: mikhak;\\n$vazir: Vazir;\\n\\n$animation-transition: 0.6s;\\n\",\"@mixin media($syntax, $device) {\\n\\t@if $syntax == 'max' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (max-width: 767.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (max-width: 991.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (max-width: 1199.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (max-width: 500000) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t} @else if $syntax == 'min' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (min-width: 576px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (min-width: 768px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (min-width: 992px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (min-width: 1200px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Header\": \"Header_Header__3pem6\",\n\t\"HeaderMenuIcon\": \"Header_HeaderMenuIcon__sgb0A\",\n\t\"HeaderMenuIconDisable\": \"Header_HeaderMenuIconDisable__Ht-aY\",\n\t\"HeaderMenuIconActive\": \"Header_HeaderMenuIconActive__3Er_c\",\n\t\"HeaderIconAside\": \"Header_HeaderIconAside__3AKoJ\",\n\t\"HeaderIconAsideActive\": \"Header_HeaderIconAsideActive__3Jpo5\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2Nzcz9iMDk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsdUJBQXVCLDhCQUE4QixpQkFBaUIsZ0JBQWdCLGdCQUFnQixxQkFBcUIsRUFBRSxpQ0FBaUMsc0JBQXNCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLG1CQUFtQixFQUFFLG1DQUFtQyxtQkFBbUIsdUJBQXVCLEVBQUUsMkNBQTJDLHFCQUFxQix3QkFBd0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0Msb0JBQW9CLEVBQUUsaURBQWlELHNCQUFzQixFQUFFLDRDQUE0QyxtQkFBbUIsMkJBQTJCLEVBQUUsMkNBQTJDLG1CQUFtQixFQUFFLG9DQUFvQyxzQkFBc0IsdUJBQXVCLEVBQUUsNENBQTRDLHdDQUF3QyxFQUFFLGtDQUFrQyw2QkFBNkIsZ0JBQWdCLG9CQUFvQixlQUFlLEVBQUUsRUFBRSwrQkFBK0IsNkJBQTZCLG1CQUFtQixtQkFBbUIsMkNBQTJDLEVBQUUsRUFBRSxTQUFTLG1MQUFtTCxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxnQkFBZ0IsS0FBSyxlQUFlLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxlQUFlLEtBQUssVUFBVSxrQkFBa0IsT0FBTyxpQkFBaUIsT0FBTyxLQUFLLFdBQVcsVUFBVSxvQkFBb0IsTUFBTSxNQUFNLFdBQVcsVUFBVSx1RkFBdUYsMENBQTBDLGFBQWEsdUJBQXVCLGlEQUFpRCxpQkFBaUIsZ0JBQWdCLGdCQUFnQixzQ0FBc0MsZUFBZSxzQkFBc0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLEtBQUssaUJBQWlCLG1CQUFtQix3Q0FBd0MsaUJBQWlCLHFCQUFxQix3QkFBd0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0Msb0JBQW9CLGlCQUFpQixzQkFBc0IsU0FBUyxPQUFPLGtCQUFrQixtQkFBbUIsMkJBQTJCLE9BQU8saUJBQWlCLG1CQUFtQixPQUFPLEtBQUssa0JBQWtCLHNCQUFzQix3Q0FBd0MsaUJBQWlCLHdDQUF3QyxPQUFPLGtCQUFrQixPQUFPLEtBQUssbUNBQW1DLGNBQWMsa0JBQWtCLGFBQWEsS0FBSyxpQ0FBaUMsaUJBQWlCLGlCQUFpQix5Q0FBeUMsS0FBSyxHQUFHLDhDQUE4QyxpQkFBaUIsa0JBQWtCLHNCQUFzQixtQkFBbUIsb0NBQW9DLHNDQUFzQywrQ0FBK0Msb0NBQW9DLGdCQUFnQixnQ0FBZ0MscUNBQXFDLDBCQUEwQiw2QkFBNkIsc0NBQXNDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLHNDQUFzQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixzQ0FBc0MsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsdUNBQXVDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG9DQUFvQyxtQkFBbUIsU0FBUyxPQUFPLEtBQUssNEJBQTRCLDZCQUE2QixzQ0FBc0MsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsbUNBQW1DLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG1DQUFtQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixtQ0FBbUMsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsb0NBQW9DLG1CQUFtQixTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUNwaEo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9MYXlvdXRzL0hlYWRlci9IZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyX0hlYWRlcl9fM3BlbTYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNjtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogNDU7XFxuICB0cmFuc2l0aW9uOiAwLjZzOyB9XFxuICAuSGVhZGVyX0hlYWRlcl9fM3BlbTYgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAwIDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAuSGVhZGVyX0hlYWRlck1lbnVJY29uX19zZ2IwQSB7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgdHJhbnNpdGlvbjogMC42czsgfVxcbiAgICAuSGVhZGVyX0hlYWRlck1lbnVJY29uX19zZ2IwQSA+IGRpdiB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgd2lkdGg6IDgwcHg7IH1cXG4gICAgICAuSGVhZGVyX0hlYWRlck1lbnVJY29uX19zZ2IwQSA+IGRpdiA+ICoge1xcbiAgICAgICAgYm90dG9tOiAzcHg7IH1cXG4gICAgLkhlYWRlcl9IZWFkZXJNZW51SWNvbkRpc2FibGVfX0h0LWFZIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAuSGVhZGVyX0hlYWRlck1lbnVJY29uQWN0aXZlX18zRXJfYyB7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgLkhlYWRlcl9IZWFkZXJJY29uQXNpZGVfXzNBS29KIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjZzOyB9XFxuICAgIC5IZWFkZXJfSGVhZGVySWNvbkFzaWRlQWN0aXZlX18zSnBvNSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI5MHB4LCAwKTsgfVxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxuICAgIC5IZWFkZXJfSGVhZGVyX18zcGVtNiB7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICB0b3A6IDA7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIC5IZWFkZXJfSGVhZGVyX18zcGVtNiB7XFxuICAgICAgdG9wOiAtNzBweDtcXG4gICAgICBsZWZ0OiA4MHB4O1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoMjkwcHggKyA4MHB4KSk7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9IZWFkZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvYWJzdHJhY3QvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L19tZWRpYS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Msa0JBQWtCO0VBQ2xCLHlCQ0trQztFREpsQyxZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxnQkNRMEIsRUFBQTtFRGQzQjtJQVNFLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUFHYjtJQUNDLFlBQVk7SUFDWixnQkNKeUIsRUFBQTtJREV6QjtNQUtDLFlBQVk7TUFDWixlQUFlO01BQ2YsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsV0FBVyxFQUFBO01BVlo7UUFhRSxXQUFXLEVBQUE7SUFJYjtNQUNDLFVBQVU7TUFDVixrQkFBa0IsRUFBQTtJQUduQjtNQUNDLFVBQVUsRUFBQTtFQUlaO0lBQ0MsZUFBZTtJQUNmLGdCQy9CeUIsRUFBQTtJRGlDekI7TUFDQywrQkFBK0IsRUFBQTtFRXhDL0I7SUZSSDtNQXdERSxPQUFPO01BQ1AsV0FBVztNQUNYLE1BQU0sRUFBQSxFQU9QO0VFL0JFO0lGbENIO01BNkRFLFVBQVU7TUFDVixVQUFVO01BQ1Ysa0NBQWtDLEVBQUEsRUFFbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi8uLi8uLi9zdHlsZXMvYWJzdHJhY3QvdmFyaWFibGVzJztcXG5AaW1wb3J0ICcuLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC9tZWRpYSc7XFxuXFxuLkhlYWRlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICRsaXRlLXRoZW1lLWJveC1iYWNrZ3JvdW5kO1xcblxcdGhlaWdodDogNzBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR6LWluZGV4OiA0NTtcXG5cXHR0cmFuc2l0aW9uOiAkYW5pbWF0aW9uLXRyYW5zaXRpb247XFxuXFxuXFx0JiA+IGRpdiB7XFxuXFx0XFx0cGFkZGluZzogMCAzMHB4O1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdH1cXG5cXG5cXHQmTWVudUljb24ge1xcblxcdFxcdGhlaWdodDogNzBweDtcXG5cXHRcXHR0cmFuc2l0aW9uOiAkYW5pbWF0aW9uLXRyYW5zaXRpb247XFxuXFxuXFx0XFx0JiA+IGRpdiB7XFxuXFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0XFx0d2lkdGg6IDgwcHg7XFxuXFxuXFx0XFx0XFx0JiA+ICoge1xcblxcdFxcdFxcdFxcdGJvdHRvbTogM3B4O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFxuXFx0XFx0JkRpc2FibGUge1xcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmQWN0aXZlIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jkljb25Bc2lkZSB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdHRyYW5zaXRpb246ICRhbmltYXRpb24tdHJhbnNpdGlvbjtcXG5cXG5cXHRcXHQmQWN0aXZlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjkwcHgsIDApO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQmRGlzYWJsZSB7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHRAaW5jbHVkZSBtZWRpYSgnbWF4JywgJ21kJykge1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0dG9wOiAwO1xcblxcdH1cXG5cXHRAaW5jbHVkZSBtZWRpYSgnbWluJywgJ2xnJykge1xcblxcdFxcdHRvcDogLTcwcHg7XFxuXFx0XFx0bGVmdDogODBweDtcXG5cXHRcXHR3aWR0aDogY2FsYygxMDAlIC0gKDI5MHB4ICsgODBweCkpO1xcblxcdH1cXG59XFxuXCIsXCIvLyB2YXJpYWJsZXNcXG5cXG4vLyBjb2xvclxcbiRkYXJrOiAjMWUxZTI4O1xcbiRsaXRlOiAjZmFmYWZjO1xcbiRtdXRlZDogIzhjOGM4ZTtcXG4kc2Vjb25kYXJ5OiAjNWM1YzZmO1xcbiRkYW5nZXI6ICNmNDQzMzY7XFxuXFxuJGxpdGUtdGhlbWUtYmFja2dyb3VuZDogI2UwZTBlNjtcXG4kbGl0ZS10aGVtZS1ib3gtYmFja2dyb3VuZDogI2Y0ZjRmNjtcXG4kbGl0ZS10aGVtZS1ib3gtc2hhZG93OiByZ2JhKDE1LCAxNSwgNSwgMC40KTtcXG5cXG4vLyBmb250IGZhbWlseVxcbiRtaWtoYWs6IG1pa2hhaztcXG4kdmF6aXI6IFZhemlyO1xcblxcbiRhbmltYXRpb24tdHJhbnNpdGlvbjogMC42cztcXG5cIixcIkBtaXhpbiBtZWRpYSgkc3ludGF4LCAkZGV2aWNlKSB7XFxuXFx0QGlmICRzeW50YXggPT0gJ21heCcge1xcblxcdFxcdEBpZiAoJGRldmljZSA9PSAneHMnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3NtJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdtZCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnbGcnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICd4bCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNTAwMDAwKSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9IEBlbHNlIGlmICRzeW50YXggPT0gJ21pbicge1xcblxcdFxcdEBpZiAoJGRldmljZSA9PSAneHMnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3NtJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdtZCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnbGcnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ3hsJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fM3BlbTZcIixcblx0XCJIZWFkZXJNZW51SWNvblwiOiBcIkhlYWRlcl9IZWFkZXJNZW51SWNvbl9fc2diMEFcIixcblx0XCJIZWFkZXJNZW51SWNvbkRpc2FibGVcIjogXCJIZWFkZXJfSGVhZGVyTWVudUljb25EaXNhYmxlX19IdC1hWVwiLFxuXHRcIkhlYWRlck1lbnVJY29uQWN0aXZlXCI6IFwiSGVhZGVyX0hlYWRlck1lbnVJY29uQWN0aXZlX18zRXJfY1wiLFxuXHRcIkhlYWRlckljb25Bc2lkZVwiOiBcIkhlYWRlcl9IZWFkZXJJY29uQXNpZGVfXzNBS29KXCIsXG5cdFwiSGVhZGVySWNvbkFzaWRlQWN0aXZlXCI6IFwiSGVhZGVyX0hlYWRlckljb25Bc2lkZUFjdGl2ZV9fM0pwbzVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Header/Header.module.scss\n");

/***/ })

})