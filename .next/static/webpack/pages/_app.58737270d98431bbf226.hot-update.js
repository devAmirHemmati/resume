webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Header/Header.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/Layouts/Header/Header.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Header_Header__3pem6 {\\n  position: absolute;\\n  background-color: #f4f4f6;\\n  height: 70px;\\n  width: 100%;\\n  z-index: 45;\\n  transition: 0.6s; }\\n  .Header_Header__3pem6 > div {\\n    padding: 0 30px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    height: 100%; }\\n  .Header_HeaderMenuIcon__sgb0A {\\n    height: 70px;\\n    transition: 0.6s; }\\n    .Header_HeaderMenuIcon__sgb0A > div {\\n      height: 100%;\\n      cursor: pointer;\\n      display: flex;\\n      align-items: center;\\n      justify-content: center;\\n      width: 80px; }\\n      .Header_HeaderMenuIcon__sgb0A > div > * {\\n        bottom: 3px; }\\n    .Header_HeaderMenuIconActive__3Er_c {\\n      opacity: 0; }\\n  .Header_HeaderIconAside__3AKoJ {\\n    cursor: pointer;\\n    transition: 0.6s; }\\n    .Header_HeaderIconAsideActive__3Jpo5 {\\n      transform: translate(-300px, 0); }\\n  @media (max-width: 991.98px) {\\n    .Header_Header__3pem6 {\\n      left: 0;\\n      width: 100%;\\n      top: 0; } }\\n  @media (min-width: 992px) {\\n    .Header_Header__3pem6 {\\n      top: -70px;\\n      left: 80px;\\n      width: calc(100% - (290px + 80px)); } }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Header.module.scss\",\"webpack://../../styles/abstract/_variables.scss\",\"webpack://../../styles/abstract/_media.scss\"],\"names\":[],\"mappings\":\"AAGA;EACC,kBAAkB;EAClB,yBCKkC;EDJlC,YAAY;EACZ,WAAW;EACX,WAAW;EACX,gBCQ0B,EAAA;EDd3B;IASE,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY,EAAA;EAGb;IACC,YAAY;IACZ,gBCJyB,EAAA;IDEzB;MAKC,YAAY;MACZ,eAAe;MACf,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,WAAW,EAAA;MAVZ;QAaE,WAAW,EAAA;IAIb;MACC,UAAU,EAAA;EAIZ;IACC,eAAe;IACf,gBC1ByB,EAAA;ID4BzB;MACC,+BAA+B,EAAA;EEnC/B;IFRH;MAgDE,OAAO;MACP,WAAW;MACX,MAAM,EAAA,EAOP;EEvBE;IFlCH;MAqDE,UAAU;MACV,UAAU;MACV,kCAAkC,EAAA,EAEnC\",\"sourcesContent\":[\"@import './../../styles/abstract/variables';\\n@import './../../styles/abstract/media';\\n\\n.Header {\\n\\tposition: absolute;\\n\\tbackground-color: $lite-theme-box-background;\\n\\theight: 70px;\\n\\twidth: 100%;\\n\\tz-index: 45;\\n\\ttransition: $animation-transition;\\n\\n\\t& > div {\\n\\t\\tpadding: 0 30px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\t&MenuIcon {\\n\\t\\theight: 70px;\\n\\t\\ttransition: $animation-transition;\\n\\n\\t\\t& > div {\\n\\t\\t\\theight: 100%;\\n\\t\\t\\tcursor: pointer;\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\talign-items: center;\\n\\t\\t\\tjustify-content: center;\\n\\t\\t\\twidth: 80px;\\n\\n\\t\\t\\t& > * {\\n\\t\\t\\t\\tbottom: 3px;\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t\\t&Active {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\n\\t&IconAside {\\n\\t\\tcursor: pointer;\\n\\t\\ttransition: $animation-transition;\\n\\n\\t\\t&Active {\\n\\t\\t\\ttransform: translate(-300px, 0);\\n\\t\\t}\\n\\t}\\n\\n\\t@include media('max', 'md') {\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\ttop: 0;\\n\\t}\\n\\t@include media('min', 'lg') {\\n\\t\\ttop: -70px;\\n\\t\\tleft: 80px;\\n\\t\\twidth: calc(100% - (290px + 80px));\\n\\t}\\n}\\n\",\"// variables\\n\\n// color\\n$dark: #1e1e28;\\n$lite: #fafafc;\\n$muted: #8c8c8e;\\n$secondary: #5c5c6f;\\n$danger: #f44336;\\n\\n$lite-theme-background: #e0e0e6;\\n$lite-theme-box-background: #f4f4f6;\\n$lite-theme-box-shadow: rgba(15, 15, 5, 0.4);\\n\\n// font family\\n$mikhak: mikhak;\\n$vazir: Vazir;\\n\\n$animation-transition: 0.6s;\\n\",\"@mixin media($syntax, $device) {\\n\\t@if $syntax == 'max' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (max-width: 767.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (max-width: 991.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (max-width: 1199.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (max-width: 500000) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t} @else if $syntax == 'min' {\\n\\t\\t@if ($device == 'xs') {\\n\\t\\t\\t@media (max-width: 575.98px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'sm') {\\n\\t\\t\\t@media (min-width: 576px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'md') {\\n\\t\\t\\t@media (min-width: 768px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'lg') {\\n\\t\\t\\t@media (min-width: 992px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t} @else if ($device == 'xl') {\\n\\t\\t\\t@media (min-width: 1200px) {\\n\\t\\t\\t\\t@content;\\n\\t\\t\\t}\\n\\t\\t}\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Header\": \"Header_Header__3pem6\",\n\t\"HeaderMenuIcon\": \"Header_HeaderMenuIcon__sgb0A\",\n\t\"HeaderMenuIconActive\": \"Header_HeaderMenuIconActive__3Er_c\",\n\t\"HeaderIconAside\": \"Header_HeaderIconAside__3AKoJ\",\n\t\"HeaderIconAsideActive\": \"Header_HeaderIconAsideActive__3Jpo5\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xheW91dHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2Nzcz9iMDk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsdUJBQXVCLDhCQUE4QixpQkFBaUIsZ0JBQWdCLGdCQUFnQixxQkFBcUIsRUFBRSxpQ0FBaUMsc0JBQXNCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLG1CQUFtQixFQUFFLG1DQUFtQyxtQkFBbUIsdUJBQXVCLEVBQUUsMkNBQTJDLHFCQUFxQix3QkFBd0Isc0JBQXNCLDRCQUE0QixnQ0FBZ0Msb0JBQW9CLEVBQUUsaURBQWlELHNCQUFzQixFQUFFLDJDQUEyQyxtQkFBbUIsRUFBRSxvQ0FBb0Msc0JBQXNCLHVCQUF1QixFQUFFLDRDQUE0Qyx3Q0FBd0MsRUFBRSxrQ0FBa0MsNkJBQTZCLGdCQUFnQixvQkFBb0IsZUFBZSxFQUFFLEVBQUUsK0JBQStCLDZCQUE2QixtQkFBbUIsbUJBQW1CLDJDQUEyQyxFQUFFLEVBQUUsU0FBUyxtTEFBbUwsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssVUFBVSxpQkFBaUIsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssZUFBZSxLQUFLLGVBQWUsS0FBSyxVQUFVLGtCQUFrQixPQUFPLGlCQUFpQixPQUFPLEtBQUssV0FBVyxVQUFVLG9CQUFvQixNQUFNLE1BQU0sV0FBVyxVQUFVLHVGQUF1RiwwQ0FBMEMsYUFBYSx1QkFBdUIsaURBQWlELGlCQUFpQixnQkFBZ0IsZ0JBQWdCLHNDQUFzQyxlQUFlLHNCQUFzQixvQkFBb0IscUNBQXFDLDBCQUEwQixtQkFBbUIsS0FBSyxpQkFBaUIsbUJBQW1CLHdDQUF3QyxpQkFBaUIscUJBQXFCLHdCQUF3QixzQkFBc0IsNEJBQTRCLGdDQUFnQyxvQkFBb0IsaUJBQWlCLHNCQUFzQixTQUFTLE9BQU8saUJBQWlCLG1CQUFtQixPQUFPLEtBQUssa0JBQWtCLHNCQUFzQix3Q0FBd0MsaUJBQWlCLHdDQUF3QyxPQUFPLEtBQUssbUNBQW1DLGNBQWMsa0JBQWtCLGFBQWEsS0FBSyxpQ0FBaUMsaUJBQWlCLGlCQUFpQix5Q0FBeUMsS0FBSyxHQUFHLDhDQUE4QyxpQkFBaUIsa0JBQWtCLHNCQUFzQixtQkFBbUIsb0NBQW9DLHNDQUFzQywrQ0FBK0Msb0NBQW9DLGdCQUFnQixnQ0FBZ0MscUNBQXFDLDBCQUEwQiw2QkFBNkIsc0NBQXNDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLHNDQUFzQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixzQ0FBc0MsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsdUNBQXVDLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG9DQUFvQyxtQkFBbUIsU0FBUyxPQUFPLEtBQUssNEJBQTRCLDZCQUE2QixzQ0FBc0MsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsbUNBQW1DLG1CQUFtQixTQUFTLE9BQU8sNkJBQTZCLG1DQUFtQyxtQkFBbUIsU0FBUyxPQUFPLDZCQUE2QixtQ0FBbUMsbUJBQW1CLFNBQVMsT0FBTyw2QkFBNkIsb0NBQW9DLG1CQUFtQixTQUFTLE9BQU8sS0FBSyxHQUFHLHFCQUFxQjtBQUN2ekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zcmMvTGF5b3V0cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRlcl9IZWFkZXJfXzNwZW02IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjY7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDQ1O1xcbiAgdHJhbnNpdGlvbjogMC42czsgfVxcbiAgLkhlYWRlcl9IZWFkZXJfXzNwZW02ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLkhlYWRlcl9IZWFkZXJNZW51SWNvbl9fc2diMEEge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuNnM7IH1cXG4gICAgLkhlYWRlcl9IZWFkZXJNZW51SWNvbl9fc2diMEEgPiBkaXYge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIHdpZHRoOiA4MHB4OyB9XFxuICAgICAgLkhlYWRlcl9IZWFkZXJNZW51SWNvbl9fc2diMEEgPiBkaXYgPiAqIHtcXG4gICAgICAgIGJvdHRvbTogM3B4OyB9XFxuICAgIC5IZWFkZXJfSGVhZGVyTWVudUljb25BY3RpdmVfXzNFcl9jIHtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAuSGVhZGVyX0hlYWRlckljb25Bc2lkZV9fM0FLb0oge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNnM7IH1cXG4gICAgLkhlYWRlcl9IZWFkZXJJY29uQXNpZGVBY3RpdmVfXzNKcG81IHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwcHgsIDApOyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcXG4gICAgLkhlYWRlcl9IZWFkZXJfXzNwZW02IHtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIHRvcDogMDsgfSB9XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgLkhlYWRlcl9IZWFkZXJfXzNwZW02IHtcXG4gICAgICB0b3A6IC03MHB4O1xcbiAgICAgIGxlZnQ6IDgwcHg7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtICgyOTBweCArIDgwcHgpKTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0hlYWRlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvYWJzdHJhY3QvX21lZGlhLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDQyxrQkFBa0I7RUFDbEIseUJDS2tDO0VESmxDLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQ1EwQixFQUFBO0VEZDNCO0lBU0UsZUFBZTtJQUNmLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQUdiO0lBQ0MsWUFBWTtJQUNaLGdCQ0p5QixFQUFBO0lERXpCO01BS0MsWUFBWTtNQUNaLGVBQWU7TUFDZixhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixXQUFXLEVBQUE7TUFWWjtRQWFFLFdBQVcsRUFBQTtJQUliO01BQ0MsVUFBVSxFQUFBO0VBSVo7SUFDQyxlQUFlO0lBQ2YsZ0JDMUJ5QixFQUFBO0lENEJ6QjtNQUNDLCtCQUErQixFQUFBO0VFbkMvQjtJRlJIO01BZ0RFLE9BQU87TUFDUCxXQUFXO01BQ1gsTUFBTSxFQUFBLEVBT1A7RUV2QkU7SUZsQ0g7TUFxREUsVUFBVTtNQUNWLFVBQVU7TUFDVixrQ0FBa0MsRUFBQSxFQUVuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLy4uLy4uL3N0eWxlcy9hYnN0cmFjdC92YXJpYWJsZXMnO1xcbkBpbXBvcnQgJy4vLi4vLi4vc3R5bGVzL2Fic3RyYWN0L21lZGlhJztcXG5cXG4uSGVhZGVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGxpdGUtdGhlbWUtYm94LWJhY2tncm91bmQ7XFxuXFx0aGVpZ2h0OiA3MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdHotaW5kZXg6IDQ1O1xcblxcdHRyYW5zaXRpb246ICRhbmltYXRpb24tdHJhbnNpdGlvbjtcXG5cXG5cXHQmID4gZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAwIDMwcHg7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0fVxcblxcblxcdCZNZW51SWNvbiB7XFxuXFx0XFx0aGVpZ2h0OiA3MHB4O1xcblxcdFxcdHRyYW5zaXRpb246ICRhbmltYXRpb24tdHJhbnNpdGlvbjtcXG5cXG5cXHRcXHQmID4gZGl2IHtcXG5cXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRcXHR3aWR0aDogODBweDtcXG5cXG5cXHRcXHRcXHQmID4gKiB7XFxuXFx0XFx0XFx0XFx0Ym90dG9tOiAzcHg7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXG5cXHRcXHQmQWN0aXZlIHtcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0Jkljb25Bc2lkZSB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdHRyYW5zaXRpb246ICRhbmltYXRpb24tdHJhbnNpdGlvbjtcXG5cXG5cXHRcXHQmQWN0aXZlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAwcHgsIDApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0QGluY2x1ZGUgbWVkaWEoJ21heCcsICdtZCcpIHtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdHRvcDogMDtcXG5cXHR9XFxuXFx0QGluY2x1ZGUgbWVkaWEoJ21pbicsICdsZycpIHtcXG5cXHRcXHR0b3A6IC03MHB4O1xcblxcdFxcdGxlZnQ6IDgwcHg7XFxuXFx0XFx0d2lkdGg6IGNhbGMoMTAwJSAtICgyOTBweCArIDgwcHgpKTtcXG5cXHR9XFxufVxcblwiLFwiLy8gdmFyaWFibGVzXFxuXFxuLy8gY29sb3JcXG4kZGFyazogIzFlMWUyODtcXG4kbGl0ZTogI2ZhZmFmYztcXG4kbXV0ZWQ6ICM4YzhjOGU7XFxuJHNlY29uZGFyeTogIzVjNWM2ZjtcXG4kZGFuZ2VyOiAjZjQ0MzM2O1xcblxcbiRsaXRlLXRoZW1lLWJhY2tncm91bmQ6ICNlMGUwZTY7XFxuJGxpdGUtdGhlbWUtYm94LWJhY2tncm91bmQ6ICNmNGY0ZjY7XFxuJGxpdGUtdGhlbWUtYm94LXNoYWRvdzogcmdiYSgxNSwgMTUsIDUsIDAuNCk7XFxuXFxuLy8gZm9udCBmYW1pbHlcXG4kbWlraGFrOiBtaWtoYWs7XFxuJHZhemlyOiBWYXppcjtcXG5cXG4kYW5pbWF0aW9uLXRyYW5zaXRpb246IDAuNnM7XFxuXCIsXCJAbWl4aW4gbWVkaWEoJHN5bnRheCwgJGRldmljZSkge1xcblxcdEBpZiAkc3ludGF4ID09ICdtYXgnIHtcXG5cXHRcXHRAaWYgKCRkZXZpY2UgPT0gJ3hzJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdzbScpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnbWQnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ2xnJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAneGwnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6IDUwMDAwMCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fSBAZWxzZSBpZiAkc3ludGF4ID09ICdtaW4nIHtcXG5cXHRcXHRAaWYgKCRkZXZpY2UgPT0gJ3hzJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICdzbScpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcXG5cXHRcXHRcXHRcXHRAY29udGVudDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fSBAZWxzZSBpZiAoJGRldmljZSA9PSAnbWQnKSB7XFxuXFx0XFx0XFx0QG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gQGVsc2UgaWYgKCRkZXZpY2UgPT0gJ2xnJykge1xcblxcdFxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcblxcdFxcdFxcdFxcdEBjb250ZW50O1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9IEBlbHNlIGlmICgkZGV2aWNlID09ICd4bCcpIHtcXG5cXHRcXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuXFx0XFx0XFx0XFx0QGNvbnRlbnQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIkhlYWRlclwiOiBcIkhlYWRlcl9IZWFkZXJfXzNwZW02XCIsXG5cdFwiSGVhZGVyTWVudUljb25cIjogXCJIZWFkZXJfSGVhZGVyTWVudUljb25fX3NnYjBBXCIsXG5cdFwiSGVhZGVyTWVudUljb25BY3RpdmVcIjogXCJIZWFkZXJfSGVhZGVyTWVudUljb25BY3RpdmVfXzNFcl9jXCIsXG5cdFwiSGVhZGVySWNvbkFzaWRlXCI6IFwiSGVhZGVyX0hlYWRlckljb25Bc2lkZV9fM0FLb0pcIixcblx0XCJIZWFkZXJJY29uQXNpZGVBY3RpdmVcIjogXCJIZWFkZXJfSGVhZGVySWNvbkFzaWRlQWN0aXZlX18zSnBvNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/Layouts/Header/Header.module.scss\n");

/***/ })

})