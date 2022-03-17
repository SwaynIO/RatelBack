(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[1418],{

/***/ 56156:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(44709);
  } else {}
  

/***/ }),

/***/ 44709:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(53547),__webpack_require__(78384),__webpack_require__(39711),__webpack_require__(74657)):0}(this,(function(n,e,t,r){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=114)}({0:function(n,e,t){n.exports=t(17)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(23),o=t(24),i=t(20),a=t(25);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},114:function(n,e,t){"use strict";t.r(e),t.d(e,"Link",(function(){return j}));var r,o,i=t(6),a=t.n(i),s=t(5),u=t.n(s),c=t(3),f=t.n(c),d=t(1),l=t.n(d),p=t(0),h=t.n(p),m=t(2),g=t.n(m),b=t(79),x=t.n(b),v=t(36),y=t(8),O=t(4),w=t(14),S=["href","to","children","disabled","startIcon","endIcon"],_=g.a.a(r||(r=f()(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: ",";\n  svg path {\n    fill: ",";\n  }\n  svg {\n    font-size: ","rem;\n  }\n  &:hover,\n  &:active {\n    color: ",";\n  }\n  ",";\n"])),(function(n){return n.disabled?"none":void 0}),(function(n){var e=n.disabled,t=n.theme;return e?t.colors.neutral600:t.colors.primary600}),.625,(function(n){return n.theme.colors.primary800}),w.a),T=g()(O.Box)(o||(o=f()(["\n  display: flex;\n"]))),j=function(n){var e=n.href,t=n.to,r=n.children,o=n.disabled,i=n.startIcon,s=n.endIcon,c=u()(n,S),f=e?"_blank":void 0,d=e?"noreferrer noopener":void 0;return l.a.createElement(_,a()({as:t&&!o?v.NavLink:"a",target:f,rel:d,to:o?void 0:t,href:o?"#":e,disabled:o},c),i&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingRight:2},i),l.a.createElement(y.Typography,{variant:"pi",textColor:o?"neutral600":"primary600"},r),s&&!e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},s),e&&l.a.createElement(T,{as:"span","aria-hidden":!0,paddingLeft:2},l.a.createElement(x.a,null)))};j.displayName="Link",j.defaultProps={href:void 0,to:void 0,disabled:!1},j.propTypes={children:h.a.node.isRequired,disabled:h.a.bool,endIcon:h.a.element,href:function(n){if(!n.disabled&&!n.to&&!n.href)return new Error("href must be defined")},startIcon:h.a.element,to:function(n){if(!n.disabled&&!n.href&&!n.to)return new Error("to must be defined")}}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},14:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var r=function(n){return function(e){var t=e.theme,r=e.size;return t.sizes[n][r]}},o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(e){var t=e.theme,r=e.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(n,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},i=function(n){var e=n.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(e.colors.primary600,";\n    }\n  }\n")}},17:function(n,e,t){"use strict";var r=t(18);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},18:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},20:function(n,e,t){var r=t(19);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){s=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},36:function(n,e){n.exports=t},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return l}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=t.n(u),f=t(7),d={color:!0},l=c.a.div.withConfig({shouldForwardProp:function(n,e){return!d[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));l.displayName="Box",l.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},l.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},5:function(n,e,t){var r=t(22);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,e){function t(){return n.exports=t=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,s=o()(i,3),u=s[0],c=s[1],f=s[2],d="".concat(n,": ").concat(t.spaces[u],";");return void 0!==c&&(d+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(d+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),d}var l=t.spaces[r]||r;return"".concat(n,": ").concat(l,";")}}},79:function(n,e){n.exports=r},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return d}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=["alpha","beta","delta","epsilon","omega","pi","sigma"],f={fontSize:!0,fontWeight:!0},d=t.n(u).a.span.withConfig({shouldForwardProp:function(n,e){return!f[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));d.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},d.propTypes={fontSize:s.a.oneOfType([s.a.number,s.a.string]),fontWeight:s.a.string,lineHeight:s.a.oneOfType([s.a.number,s.a.string]),textColor:s.a.string,textTransform:s.a.string,variant:s.a.oneOf(c)}}})}));

/***/ }),

/***/ 73984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(44455);
  } else {}
  

/***/ }),

/***/ 44455:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var console = __webpack_require__(25108);
!function(e,n){ true?module.exports=n(__webpack_require__(53547),__webpack_require__(78384),__webpack_require__(67421),__webpack_require__(7228),__webpack_require__(40413),__webpack_require__(39711),__webpack_require__(74764),__webpack_require__(80512),__webpack_require__(52744),__webpack_require__(79386),__webpack_require__(74657),__webpack_require__(69994),__webpack_require__(37694),__webpack_require__(49993),__webpack_require__(5954),__webpack_require__(33109),__webpack_require__(66350)):0}(this,(function(e,n,t,r,a,o,i,c,l,u,d,s,p,f,g,h,b){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=124)}([function(e,n,t){e.exports=t(17)()},function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.r(n),t.d(n,"Box",(function(){return p}));var r,a=t(3),o=t.n(a),i=t(0),c=t.n(i),l=t(2),u=t.n(l),d=t(7),s={color:!0},p=u.a.div.withConfig({shouldForwardProp:function(e,n){return!s[e]&&n(e)}})(r||(r=o()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var n=e.fontSize;return e.theme.fontSizes[n]||n}),(function(e){var n=e.theme,t=e.background;return n.colors[t]}),(function(e){var n=e.theme,t=e.color;return n.colors[t]}),(function(e){var n=e.theme,t=e.padding;return Object(d.a)("padding",t,n)}),(function(e){var n=e.theme,t=e.paddingTop;return Object(d.a)("padding-top",t,n)}),(function(e){var n=e.theme,t=e.paddingRight;return Object(d.a)("padding-right",t,n)}),(function(e){var n=e.theme,t=e.paddingBottom;return Object(d.a)("padding-bottom",t,n)}),(function(e){var n=e.theme,t=e.paddingLeft;return Object(d.a)("padding-left",t,n)}),(function(e){var n=e.theme,t=e.marginLeft;return Object(d.a)("margin-left",t,n)}),(function(e){var n=e.theme,t=e.marginRight;return Object(d.a)("margin-right",t,n)}),(function(e){var n=e.theme,t=e.marginTop;return Object(d.a)("margin-top",t,n)}),(function(e){var n=e.theme,t=e.marginBottom;return Object(d.a)("margin-bottom",t,n)}),(function(e){var n=e.theme;return e.hiddenS?"".concat(n.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var n=e.theme;return e.hiddenXS?"".concat(n.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var n=e.theme,t=e.hasRadius,r=e.borderRadius;return t?n.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var n=e.borderColor;return e.theme.colors[n]}),(function(e){var n=e.theme,t=e.borderColor,r=e.borderStyle,a=e.borderWidth;if(t&&!r&&!a)return"1px solid ".concat(n.colors[t])}),(function(e){var n=e.theme,t=e.shadow;return n.shadows[t]}),(function(e){return e.pointerEvents}),(function(e){var n=e._hover,t=e.theme;return n?n(t):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var n=e.left;return e.theme.spaces[n]||n}),(function(e){var n=e.right;return e.theme.spaces[n]||n}),(function(e){var n=e.top;return e.theme.spaces[n]||n}),(function(e){var n=e.bottom;return e.theme.spaces[n]||n}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var n=e.width;return e.theme.spaces[n]||n}),(function(e){var n=e.maxWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.minWidth;return e.theme.spaces[n]||n}),(function(e){var n=e.height;return e.theme.spaces[n]||n}),(function(e){var n=e.maxHeight;return e.theme.spaces[n]||n}),(function(e){var n=e.minHeight;return e.theme.spaces[n]||n}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));p.displayName="Box",p.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},p.propTypes={_hover:c.a.func,background:c.a.string,basis:c.a.oneOfType([c.a.string,c.a.string]),borderColor:c.a.string,children:c.a.oneOfType([c.a.node,c.a.string]),color:c.a.string,flex:c.a.oneOfType([c.a.string,c.a.string]),grow:c.a.oneOfType([c.a.string,c.a.string]),hasRadius:c.a.bool,hiddenS:c.a.bool,hiddenXS:c.a.bool,padding:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingBottom:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingLeft:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingRight:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),paddingTop:c.a.oneOfType([c.a.number,c.a.arrayOf(c.a.number)]),shadow:c.a.string,shrink:c.a.oneOfType([c.a.string,c.a.string])}},function(e,n,t){var r=t(22);e.exports=function(e,n){if(null==e)return{};var t,a,o=r(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){function t(){return e.exports=t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";var r=t(10),a=t.n(r),o=t(13),i=t.n(o);n.a=function(e,n,t){var r=n;if(Array.isArray(n)||"object"!==i()(n)||(r=[null==n?void 0:n.desktop,null==n?void 0:n.tablet,null==n?void 0:n.mobile]),void 0!==r){if(Array.isArray(r)){var o=r,c=a()(o,3),l=c[0],u=c[1],d=c[2],s="".concat(e,": ").concat(t.spaces[l],";");return void 0!==u&&(s+="".concat(t.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(t.spaces[u],";\n        }")),void 0!==d&&(s+="".concat(t.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(t.spaces[d],";\n        }")),s}var p=t.spaces[r]||r;return"".concat(e,": ").concat(p,";")}}},function(e,n,t){"use strict";t.r(n),t.d(n,"Typography",(function(){return s}));var r,a=t(3),o=t.n(a),i=t(0),c=t.n(i),l=t(2),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],d={fontSize:!0,fontWeight:!0},s=t.n(l).a.span.withConfig({shouldForwardProp:function(e,n){return!d[e]&&n(e)}})(r||(r=o()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(e){var n=e.theme,t=e.fontWeight;return n.fontWeights[t]}),(function(e){var n=e.theme,t=e.fontSize;return n.fontSizes[t]}),(function(e){var n=e.theme,t=e.lineHeight;return n.lineHeights[t]}),(function(e){var n=e.theme,t=e.textColor;return n.colors[t||"neutral800"]}),(function(e){return e.textTransform}),(function(e){return e.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(e){var n=e.variant,t=e.theme;switch(n){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));s.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},s.propTypes={fontSize:c.a.oneOfType([c.a.number,c.a.string]),fontWeight:c.a.string,lineHeight:c.a.oneOfType([c.a.number,c.a.string]),textColor:c.a.string,textTransform:c.a.string,variant:c.a.oneOf(u)}},function(e,n,t){"use strict";t.r(n),t.d(n,"Flex",(function(){return p}));var r,a=t(3),o=t.n(a),i=t(0),c=t.n(i),l=t(2),u=t.n(l),d=t(4),s={direction:!0},p=u()(d.Box).withConfig({shouldForwardProp:function(e,n){return!s[e]&&n(e)}})(r||(r=o()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.direction}),(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.wrap}));p.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},p.propTypes={alignItems:c.a.string,basis:c.a.oneOfType([c.a.string,c.a.number]),direction:c.a.string,inline:c.a.bool,justifyContent:c.a.string,reverse:c.a.bool,wrap:c.a.string}},function(e,n,t){var r=t(23),a=t(24),o=t(20),i=t(25);e.exports=function(e,n){return r(e)||a(e,n)||o(e,n)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"}},function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o}));var r=t(1),a=Object(r.createContext)({error:void 0,hint:void 0,name:"",id:""}),o=function(){return Object(r.useContext)(a)}},function(e,n){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var r=function(e){return function(n){var t=n.theme,r=n.size;return t.sizes[e][r]}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&";return function(n){var t=n.theme,r=n.hasError;return"\n      outline: none;\n      box-shadow: 0;\n      transition-property: border-color, box-shadow, fill;\n      transition-duration: 0.2s;\n\n      ".concat(e,":focus-within {\n        border: 1px solid ").concat(r?t.colors.danger600:t.colors.primary600,";\n        box-shadow: ").concat(r?t.colors.danger600:t.colors.primary600," 0px 0px 0px 2px;\n      }\n    ")}},o=function(e){var n=e.theme;return"\n  position: relative;\n  outline: none;\n  \n  &:after {\n    transition-property: all;\n    transition-duration: 0.2s;\n    border-radius: 8px;\n    content: '';\n    position: absolute;\n    top: -4px;\n    bottom: -4px;\n    left: -4px;\n    right: -4px;\n    border: 2px solid transparent;\n  }\n\n  &:focus-visible {\n    outline: none;\n    &:after {\n      border-radius: 8px;\n      content: '';\n      position: absolute;\n      top: -5px;\n      bottom: -5px;\n      left: -5px;\n      right: -5px;\n      border: 2px solid ".concat(n.colors.primary600,";\n    }\n  }\n")}},function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(1),a=0,o=function(e,n){return Object(r.useRef)(n||"".concat(e,"-").concat(++a)).current}},function(e,n,t){"use strict";t.r(n),t.d(n,"Field",(function(){return p})),t.d(n,"FieldLabel",(function(){return j})),t.d(n,"InputWrapper",(function(){return N.b})),t.d(n,"FieldInput",(function(){return N.a})),t.d(n,"FieldHint",(function(){return k})),t.d(n,"FieldError",(function(){return D})),t.d(n,"FieldContext",(function(){return u.a})),t.d(n,"useField",(function(){return u.b})),t.d(n,"FieldAction",(function(){return L}));var r=t(5),a=t.n(r),o=t(1),i=t.n(o),c=t(0),l=t.n(c),u=t(12),d=t(15),s=["children","name","error","hint","id"],p=function(e){var n=e.children,t=e.name,r=e.error,o=e.hint,c=e.id,l=a()(e,s),p=Object(d.a)("field",c);return i.a.createElement("div",l,i.a.createElement(u.a.Provider,{value:{name:t,id:p,error:r,hint:o}},n))};p.defaultProps={error:void 0,hint:void 0,id:void 0,name:void 0},p.propTypes={children:l.a.node.isRequired,error:l.a.string,hint:l.a.string,id:l.a.oneOfType([l.a.string,l.a.number]),name:l.a.string};var f,g,h=t(6),b=t.n(h),m=t(3),v=t.n(m),y=t(2),x=t.n(y),E=t(9),M=t(8),T=["children","required","action"],w=x()(M.Typography)(f||(f=v()(["\n  line-height: 0;\n"]))),O=x()(E.Flex)(g||(g=v()(["\n  line-height: 0;\n\n  svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral500})),j=function(e){var n=e.children,t=e.required,r=e.action,o=a()(e,T),c=Object(u.b)().id;return i.a.createElement(M.Typography,b()({variant:"pi",textColor:"neutral800",htmlFor:c,fontWeight:"bold",as:"label",required:t},o),i.a.createElement(E.Flex,{alignItems:"center"},n,t&&i.a.createElement(w,{textColor:"danger600"},"*"),r&&i.a.createElement(O,{marginLeft:1},r)))};j.defaultProps={required:!1,action:void 0},j.propTypes={action:l.a.element,children:l.a.node.isRequired,required:l.a.bool};var C,N=t(32),k=function(){var e=Object(u.b)(),n=e.id,t=e.hint,r=e.error;return!t||r?null:i.a.createElement(M.Typography,{variant:"pi",as:"p",id:"".concat(n,"-hint"),textColor:"neutral600"},t)},D=function(){var e=Object(u.b)(),n=e.id,t=e.error;return t?i.a.createElement(M.Typography,{variant:"pi",as:"p",id:"".concat(n,"-error"),textColor:"danger600","data-strapi-field-error":!0},t):null},z=["label","children"],I=x.a.button(C||(C=v()(["\n  border: none;\n  background: transparent;\n  // TODO: Make sure to use the theme when it's ready\n  font-size: 1.6rem;\n  width: auto;\n  padding: 0;\n  display: flex;\n  align-items: center;\n"]))),L=function(e){var n=e.label,t=e.children,r=a()(e,z);return i.a.createElement(I,b()({"aria-label":n,type:"button"},r),t)};L.propTypes={children:l.a.node.isRequired,label:l.a.string.isRequired}},function(e,n,t){"use strict";var r=t(18);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){var r=t(19);e.exports=function(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.r(n),t.d(n,"VisuallyHidden",(function(){return c}));var r,a=t(3),o=t.n(a),i=t(2),c=t.n(i).a.div(r||(r=o()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},function(e,n){e.exports=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){e.exports=function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.r(n),t.d(n,"Stack",(function(){return T}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(4),v=t(9),y=["horizontal","spacing","size"],x={size:!0},E=b()(m.Box).withConfig({shouldForwardProp:function(e,n){return!x[e]&&n(e)}})(r||(r=d()(["\n  display: flex;\n  flex-direction: column;\n\n  & > * {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  & > * + * {\n    margin-top: ",";\n  }\n"])),(function(e){var n=e.theme,t=e.spacing;return n.spaces[t]})),M=b()(v.Flex).withConfig({shouldForwardProp:function(e,n){return!x[e]&&n(e)}})(a||(a=d()(["\n  & > * {\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  & > * + * {\n    margin-left: ",";\n  }\n"])),(function(e){var n=e.theme,t=e.spacing;return n.spaces[t]})),T=Object(s.forwardRef)((function(e,n){var t=e.horizontal,r=e.spacing,a=e.size,o=l()(e,y);return a&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),t?p.a.createElement(M,i()({ref:n,spacing:r||a},o)):p.a.createElement(E,i()({ref:n,spacing:r||a},o))}));T.displayName="Stack",T.defaultProps={horizontal:!1,size:void 0,spacing:void 0},T.propTypes={horizontal:g.a.bool,size:g.a.number,spacing:g.a.number}},function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={input:{S:"".concat(2,"rem"),M:"".concat(2.5,"rem")},accordions:{S:"".concat(3,"rem"),M:"".concat(5.5,"rem")}}},function(e,n,t){var r=t(42),a=t(43),o=t(20),i=t(44);e.exports=function(e){return r(e)||a(e)||o(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.r(n),t.d(n,"Portal",(function(){return c}));var r=t(10),a=t.n(r),o=t(1),i=t(33),c=function(e){var n=e.children,t=Object(o.useRef)(null),r=Object(o.useState)(!1),c=a()(r,2),l=c[0],u=c[1];return Object(o.useLayoutEffect)((function(){return t.current=document.createElement("div"),t.current.setAttribute("data-react-portal","true"),document.body.appendChild(t.current),u(!0),function(){var e;null===(e=t.current)||void 0===e||e.remove()}}),[]),l&&t.current?Object(i.createPortal)(n,t.current):null}},function(e,n){e.exports=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var r=["success-light","danger-light"],a=["default","tertiary","secondary","danger","success","ghost"].concat(r),o=["S","L"]},function(e,n,t){"use strict";t.d(n,"b",(function(){return w})),t.d(n,"a",(function(){return O}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(2),g=t.n(f),h=t(0),b=t.n(h),m=t(27),v=t(14),y=t(12),x=t(9),E=t(4),M=["endAction","startAction","disabled","onChange","size"],T=g.a.input(r||(r=d()(["\n  border: none;\n  border-radius: ",";\n  padding-left: ",";\n  padding-right: ",";\n  cursor: ",";\n\n  color: ",";\n  font-weight: 400;\n  // TODO: Make sure to use the theme when it's ready\n  font-size: ","rem;\n  display: block;\n  width: 100%;\n  background: inherit;\n\n  ::placeholder {\n    color: ",";\n    opacity: 1;\n  }\n\n  &[aria-disabled='true'] {\n    color: inherit;\n  }\n\n  //focus managed by InputWrapper\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n"])),(function(e){return e.theme.borderRadius}),(function(e){var n=e.theme;return e.hasLeftAction?0:n.spaces[4]}),(function(e){var n=e.theme;return e.hasRightAction?0:n.spaces[4]}),(function(e){return e["aria-disabled"]?"not-allowed":void 0}),(function(e){return e.theme.colors.neutral800}),.875,(function(e){return e.theme.colors.neutral500})),w=g()(x.Flex)(a||(a=d()(["\n  border: 1px solid ",";\n  border-radius: ",";\n  background: ",";\n  height: ",";\n\n  ","\n\n  ","\n"])),(function(e){var n=e.theme;return e.hasError?n.colors.danger600:n.colors.neutral200}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral0}),Object(v.b)("input"),Object(v.c)(),(function(e){var n=e.theme;return e.disabled?"\n    color: ".concat(n.colors.neutral600,";\n    background: ").concat(n.colors.neutral150,";\n  \n  "):void 0})),O=Object(s.forwardRef)((function(e,n){var t,r=e.endAction,a=e.startAction,o=e.disabled,c=e.onChange,u=e.size,d=l()(e,M),s=Object(y.b)(),f=s.id,g=s.error,h=s.hint,b=s.name;g?t="".concat(f,"-error"):h&&(t="".concat(f,"-hint"));var m=Boolean(g);return p.a.createElement(w,{size:u,justifyContent:"space-between",hasError:m,disabled:o},a&&p.a.createElement(E.Box,{paddingLeft:3,paddingRight:2},a),p.a.createElement(T,i()({id:f,name:b,ref:n,"aria-describedby":t,"aria-invalid":m,"aria-disabled":o,hasLeftAction:Boolean(a),hasRightAction:Boolean(r),onChange:function(e){o||c(e)}},d)),r&&p.a.createElement(E.Box,{paddingLeft:2,paddingRight:3},r))}));O.displayName="FieldInput",O.defaultProps={disabled:!1,endAction:void 0,size:"M",startAction:void 0,onChange:function(){}},O.propTypes={disabled:b.a.bool,endAction:b.a.element,onChange:b.a.func,size:b.a.oneOf(Object.keys(m.a.input)),startAction:b.a.element}},function(e,n){e.exports=t},function(e,n){e.exports=r},function(e,n){e.exports=a},function(e,n){e.exports=o},function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return s}));var r=t(28),a=t.n(r),o=t(8),i=t(31),c=function(e){return i.b.includes(e)?e.substring(0,e.lastIndexOf("-")):"tertiary"===e?"neutral":["default","secondary"].includes(e)||!i.c.includes(e)?"primary":e},l=function(e){var n=e.theme;return"\n    border: 1px solid ".concat(n.colors.neutral200,";\n    background: ").concat(n.colors.neutral150,";\n    ").concat(o.Typography," {\n      color: ").concat(n.colors.neutral600,";\n    }\n    svg {\n      > g, path {\n        fill: ").concat(n.colors.neutral600,";\n      }\n    }\n  ")},u=function(e){var n=e.theme,t=e.variant;return[].concat(a()(i.b),["secondary"]).includes(t)?"\n      background-color: ".concat(n.colors.neutral0,";\n    "):"tertiary"===t||"ghost"===t?"\n      background-color: ".concat(n.colors.neutral100,";\n    "):"\n    border: 1px solid ".concat(n.colors["".concat(c(t),"500")],";\n    background: ").concat(n.colors["".concat(c(t),"500")],";\n  ")},d=function(e){var n=e.theme,t=e.variant;return[].concat(a()(i.b),["secondary"]).includes(t)?"\n      background-color: ".concat(n.colors.neutral0,";\n      border: 1px solid ").concat(n.colors["".concat(c(t),"600")],";\n      ").concat(o.Typography," {\n        color: ").concat(n.colors["".concat(c(t),"600")],";\n      }\n      svg {\n        > g, path {\n          fill: ").concat(n.colors["".concat(c(t),"600")],";\n        }\n      }\n    "):"tertiary"===t?"\n      background-color: ".concat(n.colors.neutral150,";\n    "):"\n    border: 1px solid ".concat(n.colors["".concat(c(t),"600")],";\n    background: ").concat(n.colors["".concat(c(t),"600")],";\n  ")},s=function(e){var n=e.theme,t=e.variant;switch(t){case"danger-light":case"success-light":case"secondary":return"\n          border: 1px solid ".concat(n.colors["".concat(c(t),"200")],";\n          background: ").concat(n.colors["".concat(c(t),"100")],";\n          ").concat(o.Typography," {\n            color: ").concat(n.colors["".concat(c(t),"700")],";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(n.colors["".concat(c(t),"700")],";\n            }\n          }\n        ");case"tertiary":return"\n          border: 1px solid ".concat(n.colors.neutral200,";\n          background: ").concat(n.colors.neutral0,";\n          ").concat(o.Typography," {\n            color: ").concat(n.colors.neutral800,";\n          }\n          svg {\n            > g, path {\n              fill: ").concat(n.colors.neutral800,";\n            }\n          }\n        ");case"ghost":return"\n        border: 1px solid transparent;\n        background: transparent;\n\n        ".concat(o.Typography," {\n          color: ").concat(n.colors.neutral800,";\n        }\n\n        svg {\n          > g, path {\n            fill: ").concat(n.colors.neutral500,";\n          }\n        }\n      ");case"success":case"danger":return"\n          border: 1px solid ".concat(n.colors["".concat(c(t),"600")],";\n          background: ").concat(n.colors["".concat(c(t),"600")],";\n          ").concat(o.Typography," {\n            color: ").concat(n.colors.neutral0,";\n          }\n        ");default:return"\n          border: 1px solid ".concat(n.colors["".concat(c(t),"600")],";\n          background: ").concat(n.colors["".concat(c(t),"600")],";\n          svg {\n            > g, path {\n              fill: ").concat(n.colors.buttonNeutral0,";\n            }\n          }\n        ")}}},function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(28),a=t.n(r),o=function(e,n){return a()(e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")&&(!!n||"-1"!==e.getAttribute("tabindex"))}))}},function(e,n,t){"use strict";t.r(n),t.d(n,"BaseButtonWrapper",(function(){return v})),t.d(n,"BaseButton",(function(){return y}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(2),h=t.n(g),b=t(14),m=["disabled","children"],v=h.a.button(r||(r=u()(["\n  display: flex;\n  cursor: pointer;\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n  border: 1px solid ",";\n  svg {\n    height: ",";\n    width: ",";\n  }\n  svg {\n    > g,\n    path {\n      fill: ",";\n    }\n  }\n  &[aria-disabled='true'] {\n    pointer-events: none;\n  }\n\n  ","\n"])),(function(e){return e.theme.spaces[2]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.colors.neutral0}),b.a),y=s.a.forwardRef((function(e,n){var t=e.disabled,r=e.children,a=c()(e,m);return s.a.createElement(v,o()({ref:n,"aria-disabled":t,type:"button",disabled:t},a),r)}));y.displayName="BaseButton",y.defaultProps={disabled:!1},y.propTypes={children:f.a.node.isRequired,disabled:f.a.bool}},function(e,n,t){"use strict";t.r(n),t.d(n,"position",(function(){return T})),t.d(n,"Popover",(function(){return C}));var r,a,o=t(6),i=t.n(o),c=t(10),l=t.n(c),u=t(5),d=t.n(u),s=t(3),p=t.n(s),f=t(1),g=t.n(f),h=t(0),b=t.n(h),m=t(2),v=t.n(m),y=t(4),x=t(29),E=t(47),M=["source","children","spacing","fullWidth","onReachEnd","intersectionId","centered"],T=function(e,n,t,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=e.getBoundingClientRect(),i=o.top+o.height+window.pageYOffset+a,c=o.left+window.pageXOffset;if(!n)return{left:c,top:i,width:t?o.width:void 0};var l=n.getBoundingClientRect();if(r){var u=10,d=l.width+u,s=(o.width-d)/2;c=o.left+s+window.pageXOffset}l.left<0?c=o.left+window.pageXOffset:l.left+l.width>window.innerWidth&&(c=window.innerWidth-l.width-20);var p=window.innerHeight+window.pageYOffset;if(i+l.height+a>p){var f=10;i=window.pageYOffset+o.top-l.height-f-a}return{left:c,top:i,width:t?o.width:void 0}},w=v()(y.Box)(r||(r=p()(["\n  box-shadow: ",";\n  position: absolute;\n  z-index: 4;\n  border: 1px solid ",";\n  background: ",";\n"])),(function(e){return e.theme.shadows.filterShadow}),(function(e){return e.theme.colors.neutral150}),(function(e){return e.theme.colors.neutral0})),O=v()(y.Box)(a||(a=p()(["\n  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list\n  max-height: ","rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n\n  &::-webkit-scrollbar {\n    -webkit-appearance: none;\n    width: 4px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background: ",";\n    border-radius: ",";\n    margin-right: 10px;\n  }\n"])),15,(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.neutral150}),(function(e){return e.theme.borderRadius})),j=function(e){var n,t,r,a,o,c,u=e.source,s=e.children,p=e.spacing,h=e.fullWidth,b=e.onReachEnd,m=e.intersectionId,v=e.centered,y=d()(e,M),x=Object(f.useRef)(null),j=Object(f.useState)(T(u.current,x.current,h,v,p)),C=l()(j,2),N=C[0],k=N.left,D=N.top,z=N.width,I=C[1];Object(E.a)([u,x],(function(){return I(T(u.current,x.current,h,v,p))})),n=x,t=b,r={selectorToWatch:"#".concat(m),skipWhen:!m||!b},a=r.selectorToWatch,o=r.skipWhen,c=void 0!==o&&o,Object(f.useEffect)((function(){if(!c){var e={root:n.current,rootMargin:"0px",threshold:1},r=new IntersectionObserver((function(e,r){e.forEach((function(e){e.isIntersecting&&n.current.scrollHeight>n.current.clientHeight&&t(e)}))}),e),o=n.current.querySelector(a);return r.observe(o),function(){r.disconnect()}}}),[c,t,a]);var L={left:"".concat(k,"px"),top:"".concat(D,"px"),width:z?"".concat(z,"px"):void 0};return g.a.createElement(w,{style:L,hasRadius:!0,background:"neutral0",padding:1},g.a.createElement(O,i()({ref:x},y),s,m&&b&&g.a.createElement("div",{id:m})))},C=function(e){return g.a.createElement(x.Portal,null,g.a.createElement(j,e))};j.defaultProps={fullWidth:!1,intersectionId:void 0,onReachEnd:void 0,centered:!1},j.propTypes={centered:b.a.bool,children:b.a.node.isRequired,fullWidth:b.a.bool,intersectionId:b.a.string,onReachEnd:b.a.func,source:b.a.shape({current:b.a.instanceOf(Element)}).isRequired,spacing:b.a.number}},function(e,n,t){"use strict";t.r(n),t.d(n,"Icon",(function(){return h}));var r,a=t(6),o=t.n(a),i=t(3),c=t.n(i),l=t(1),u=t.n(l),d=t(0),s=t.n(d),p=t(4),f=t(2),g=t.n(f)()(p.Box)(r||(r=c()(["\n  path {\n    fill: ",";\n  }\n  ","\n"])),(function(e){var n=e.color;return e.theme.colors[n]}),(function(e){var n=e.theme;return(0,e.colors)(n)})),h=u.a.forwardRef((function(e,n){return u.a.createElement(g,o()({ref:n},e))}));h.displayName="Icon",h.defaultProps={color:"neutral600",colors:function(){}},h.propTypes={color:s.a.string,colors:s.a.func}},function(e,n,t){var r=t(19);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return o}));var r=t(1),a=Object(r.createContext)({rowIndex:0,colIndex:0}),o=function(){return Object(r.useContext)(a)}},function(e,n,t){"use strict";t.r(n),t.d(n,"Tooltip",(function(){return D}));var r,a=t(6),o=t.n(a),i=t(30),c=t.n(i),l=t(5),u=t.n(l),d=t(3),s=t.n(d),p=t(1),f=t.n(p),g=t(0),h=t.n(g),b=t(2),m=t.n(b),v=t(4),y=t(8),x=t(29),E=t(10),M=t.n(E),T=function(e,n,t){var r=e.getBoundingClientRect(),a=n.getBoundingClientRect();return"bottom"===t?function(e,n){var t=(e.width-n.width)/2;return{left:n.left-t,top:n.top+n.height+8+window.pageYOffset}}(r,a):"right"===t?function(e,n){var t=(e.height-n.height)/2;return{left:n.left+n.width+8,top:n.top-t+window.pageYOffset}}(r,a):"left"===t?function(e,n){var t=(e.height-n.height)/2;return{left:n.left-e.width-8,top:n.top-t+window.pageYOffset}}(r,a):function(e,n){var t=(e.width-n.width)/2,r=n.left-t,a=n.top-e.height-8+window.pageYOffset,o=window.innerWidth-n.right;return n.left+e.width-o>window.innerWidth?(r=n.left-e.width-8,a=n.top+window.scrollY-n.height/2):r<0?(r=n.width+n.left+8,a=n.top+window.scrollY-e.height/2+8):a<0&&r>0&&(a=n.top+n.height+8),{left:r,top:a}}(r,a)},w=t(15),O=t(21),j=["children","label","description","delay","position","id"],C=["visible"];function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var k=m()(v.Box)(r||(r=s()(["\n  position: absolute;\n  /* z-index exist because of its position inside Modals */\n  z-index: 4;\n  display: ",";\n"])),(function(e){return e.visible?"revert":"none"})),D=function(e){var n=e.children,t=e.label,r=e.description,a=e.delay,i=e.position,l=e.id,d=u()(e,j),s=Object(w.a)("tooltip",l),g=Object(w.a)("description"),h=function(e){var n=Object(p.useState)(!1),t=M()(n,2),r=t[0],a=t[1],o=Object(p.useRef)(),i=function(){o.current&&clearTimeout(o.current)};Object(p.useEffect)((function(){return function(){i()}}),[]);return{visible:r,onFocus:function(){a(!0)},onBlur:function(){a(!1)},onMouseEnter:function(){o.current=setTimeout((function(){a(!0)}),e)},onMouseLeave:function(){i(),a(!1)}}}(a),b=h.visible,m=u()(h,C),v=function(e,n){var t=Object(p.useRef)(null),r=Object(p.useRef)(null);return Object(p.useLayoutEffect)((function(){if(e){var a=t.current,o=r.current,i=T(a,o,n);a.style.left="".concat(i.left,"px"),a.style.top="".concat(i.top,"px")}}),[e]),{tooltipWrapperRef:t,toggleSourceRef:r}}(b,i),E=v.tooltipWrapperRef,D=v.toggleSourceRef,z=f.a.cloneElement(n,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){c()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({tabIndex:0,"aria-labelledby":t?s:void 0,"aria-describedby":r?s:void 0},m));return f.a.createElement(f.a.Fragment,null,f.a.createElement(x.Portal,null,f.a.createElement(k,o()({id:s,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:E,visible:b},d),b&&f.a.createElement(O.VisuallyHidden,{id:g},r),f.a.createElement(y.Typography,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0"},t||r))),f.a.createElement("span",{ref:D},z))};D.defaultProps={delay:500,id:void 0,position:"top",label:void 0,description:void 0},D.propTypes={children:h.a.node.isRequired,delay:h.a.number,description:h.a.string,id:h.a.string,label:h.a.string,position:h.a.oneOf(["top","left","bottom","right"])}},function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(1),a=function(e,n){Object(r.useEffect)((function(){var t=new ResizeObserver(n);return Array.isArray(e)?e.map((function(e){return t.observe(e.current)})):t.observe(e.current),function(){t.disconnect()}}),[])}},function(e,n,t){"use strict";t.r(n);var r=t(68);t.d(n,"RawTable",(function(){return r.a}));var a=t(57);t.d(n,"RawTh",(function(){return a.b})),t.d(n,"RawTd",(function(){return a.a}));var o=t(65);t.d(n,"RawThead",(function(){return o.a}));var i=t(66);t.d(n,"RawTbody",(function(){return i.a}));var c=t(67);t.d(n,"RawTr",(function(){return c.a}))},function(e,n,t){"use strict";t.r(n),t.d(n,"Grid",(function(){return E})),t.d(n,"GridItem",(function(){return O}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(2),f=t.n(p),g=t(0),h=t.n(g),b=Object(d.createContext)({gap:0,gridCols:12}),m=t(4),v=t(7),y=["gap","gridCols"],x=f()(m.Box)(r||(r=u()(["\n  display: grid;\n  grid-template-columns: repeat(",", 1fr);\n  ","\n"])),(function(e){return e.gridCols}),(function(e){var n=e.theme,t=e.gap;return Object(v.a)("gap",t,n)})),E=function(e){var n=e.gap,t=e.gridCols,r=c()(e,y);return s.a.createElement(b.Provider,{value:{gap:n,gridCols:t}},s.a.createElement(x,o()({gap:n,gridCols:t},r)))};E.defaultProps={gap:0,gridCols:12},E.propTypes={gap:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),gridCols:h.a.number};var M,T=["col","xs","s"],w=f.a.div(M||(M=u()(["\n  grid-column: span ",";\n  max-width: 100%;\n\n  "," {\n    grid-column: span ",";\n  }\n\n  "," {\n    grid-column: span ",";\n  }\n"])),(function(e){return e.col}),(function(e){return e.theme.mediaQueries.tablet}),(function(e){return e.s}),(function(e){return e.theme.mediaQueries.mobile}),(function(e){return e.xs})),O=function(e){var n=e.col,t=e.xs,r=e.s,a=c()(e,T),o=Object(d.useContext)(b),i=o.gap,l=o.gridCols;return s.a.createElement(w,{gap:i,gridCols:l,col:n,xs:t,s:r},s.a.createElement(m.Box,a))};O.defaultProps={col:void 0,s:void 0,xs:void 0},O.propTypes={col:h.a.number,s:h.a.number,xs:h.a.number}},function(e,n,t){"use strict";t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return g})),t.d(n,"a",(function(){return h}));var r,a,o,i=t(3),c=t.n(i),l=t(2),u=t.n(l),d=t(4),s=t(9),p=t(14),f=u()(s.Flex)(r||(r=c()(["\n  position: relative;\n  border: 1px solid ",";\n  padding-right: ",";\n  border-radius: ",";\n  background: ",";\n  overflow: hidden;\n  min-height: ",";\n\n  ","\n\n  ","\n"])),(function(e){var n=e.theme;return e.hasError?n.colors.danger600:n.colors.neutral200}),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral0}),Object(p.b)("input"),(function(e){var n=e.theme;return e.disabled?"\n    color: ".concat(n.colors.neutral600,";\n    background: ").concat(n.colors.neutral150,";\n  "):void 0}),Object(p.c)()),g=u()(d.Box)(a||(a=c()(["\n  background: transparent;\n  border: none;\n  position: relative;\n  z-index: 1;\n\n  svg {\n    height: ","rem;\n    width: ","rem;\n  }\n\n  svg path {\n    fill: ",";\n  }\n"])),11/16,11/16,(function(e){return e.theme.colors.neutral600})),h=u()(g)(o||(o=c()(["\n  display: flex;\n  background: none;\n  border: none;\n  cursor: ",";\n\n  svg {\n    width: ","rem;\n  }\n"])),(function(e){return e.disabled?"not-allowed":void 0}),6/16)},function(e,n){e.exports=i},function(e,n,t){"use strict";t.r(n),t.d(n,"Badge",(function(){return g}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(9),p=t(8),f=["active","textColor","backgroundColor","children","minWidth"],g=function(e){var n=e.active,t=e.textColor,r=e.backgroundColor,o=e.children,c=e.minWidth,u=i()(e,f);return l.a.createElement(s.Flex,a()({inline:!0,alignItem:"center",justifyContent:"center",minWidth:c,padding:1,background:n?"primary100":r,hasRadius:!0},u),l.a.createElement(p.Typography,{variant:"sigma",textColor:n?"primary600":t},o))};g.defaultProps={active:!1,backgroundColor:"neutral100",minWidth:5,textColor:"neutral600"},g.propTypes={active:d.a.bool,backgroundColor:d.a.string,children:d.a.oneOfType([d.a.number,d.a.string]).isRequired,minWidth:d.a.number,textColor:d.a.string}},function(e,n,t){"use strict";t.r(n),t.d(n,"FocusTrap",(function(){return g}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(38),p=t(11),f=["onEscape","restoreFocus"],g=function(e){var n=e.onEscape,t=e.restoreFocus,r=i()(e,f),o=Object(c.useRef)(null);Object(c.useEffect)((function(){if(t){var e=document.activeElement;return function(){e.focus()}}}),[t]),Object(c.useEffect)((function(){if(o.current){var e=Object(s.a)(o.current);if(e.length>0)e[0].focus();else console.warn("[FocusTrap]: it seems there are no focusable elements in the focus trap tree. Make sure there s at least one.")}}),[]);return l.a.createElement("div",a()({ref:o,onKeyDown:function(e){if(e.key===p.a.ESCAPE)return n();if(e.key===p.a.TAB){var t=Object(s.a)(o.current);if(t.length>0){var r=t[0],a=t[t.length-1];e.shiftKey?r===document.activeElement&&(e.preventDefault(),a.focus()):a===document.activeElement&&(e.preventDefault(),r.focus())}}}},r))};g.defaultProps={restoreFocus:!0},g.propTypes={onEscape:d.a.func.isRequired,restoreFocus:d.a.bool}},function(e,n,t){"use strict";t.r(n),t.d(n,"Divider",(function(){return v}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(4),h=t(2),b=["unsetMargin"],m=t.n(h)()(g.Box)(r||(r=u()(["\n  height: 1px;\n  border: none;\n  ","\n"])),(function(e){return e.unsetMargin?"margin: 0;":""})),v=function(e){var n=e.unsetMargin,t=c()(e,b);return s.a.createElement(m,o()({},t,{as:"hr",unsetMargin:n}))};v.defaultProps={background:"neutral150",unsetMargin:!0},v.propTypes={background:f.a.string,unsetMargin:f.a.bool}},function(e,n,t){"use strict";n.a="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4="},function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={Log:"live-region-log",Status:"live-region-status",Alert:"live-region-alert"}},function(e,n,t){"use strict";t.d(n,"b",(function(){return h})),t.d(n,"a",(function(){return b}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(4),p=t(38),f=["isFocusable"],g=["isFocusable"],h=function(e){var n=e.isFocusable,t=i()(e,f),r=Object(c.useRef)(null);return Object(c.useLayoutEffect)((function(){var e=Object(p.a)(r.current,!0);0===e.length?r.current.setAttribute("tabIndex",n?0:-1):e.forEach((function(e){return e.setAttribute("tabIndex",n?0:-1)}))}),[n]),l.a.createElement(s.Box,a()({as:"th",ref:r},t))},b=function(e){var n=e.isFocusable,t=i()(e,g),r=Object(c.useRef)(null);return Object(c.useLayoutEffect)((function(){var e=Object(p.a)(r.current,!0);0===e.length?r.current.setAttribute("tabIndex",n?0:-1):e.forEach((function(e){return e.setAttribute("tabIndex",n?0:-1)}))}),[n]),l.a.createElement(s.Box,a()({as:"td",ref:r},t))};h.defaultProps={isFocusable:!1},h.propTypes={isFocusable:d.a.bool},b.defaultProps={isFocusable:!1},b.propTypes={isFocusable:d.a.bool}},function(e,n){e.exports=c},function(e,n,t){"use strict";t.r(n),t.d(n,"ButtonWrapper",(function(){return D})),t.d(n,"Button",(function(){return z}));var r,a,o,i,c=t(6),l=t.n(c),u=t(5),d=t.n(u),s=t(3),p=t.n(s),f=t(1),g=t.n(f),h=t(0),b=t.n(h),m=t(2),v=t.n(m),y=t(72),x=t.n(y),E=t(8),M=t(4),T=t(37),w=t(31),O=t(39),j=["variant","startIcon","endIcon","disabled","children","onClick","size","loading","fullWidth"],C=Object(m.keyframes)(r||(r=p()(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"]))),N=v.a.div(a||(a=p()(["\n  animation: "," 2s infinite linear;\n"])),C),k=v()(M.Box)(o||(o=p()(["\n  height: 100%;\n"]))),D=v()(O.BaseButton)(i||(i=p()(["\n  align-items: center;\n  padding: ",";\n  background: ",";\n  border: none;\n  "," {\n    display: flex;\n    align-items: center;\n  }\n  "," {\n    color: ",";\n  }\n  &[aria-disabled='true'] {\n    ","\n    &:active {\n      ","\n    }\n  }\n  &:hover {\n    ","\n  }\n  &:active {\n    ","\n  }\n  ","\n  ","\n"])),(function(e){var n=e.theme,t=e.size;return"".concat("S"===t?n.spaces[2]:"10px"," ").concat(n.spaces[4])}),(function(e){return e.theme.colors.primary600}),M.Box,E.Typography,(function(e){return e.theme.colors.buttonNeutral0}),T.b,T.b,T.c,T.a,T.d,(function(e){return e.fullWidth&&"\n    display: inline-flex;\n    justify-content: center;\n    width: 100%;\n  "})),z=g.a.forwardRef((function(e,n){var t=e.variant,r=e.startIcon,a=e.endIcon,o=e.disabled,i=e.children,c=e.onClick,u=e.size,s=e.loading,p=e.fullWidth,f=d()(e,j),h=o||s;return g.a.createElement(D,l()({ref:n,"aria-disabled":h,disabled:h,size:u,variant:t,onClick:function(e){!h&&c&&c(e)},fullWidth:p},f),(r||s)&&g.a.createElement(k,{"aria-hidden":!0,paddingRight:2},s?g.a.createElement(N,null,g.a.createElement(x.a,null)):r),"S"===u?g.a.createElement(E.Typography,{variant:"pi",fontWeight:"bold"},i):g.a.createElement(E.Typography,{fontWeight:"bold"},i),a&&g.a.createElement(M.Box,{"aria-hidden":!0,paddingLeft:2},a))}));z.displayName="Button",z.defaultProps={disabled:!1,endIcon:void 0,fullWidth:!1,loading:!1,onClick:void 0,size:"S",startIcon:void 0,variant:"default"},z.propTypes={children:b.a.node.isRequired,disabled:b.a.bool,endIcon:b.a.element,fullWidth:b.a.bool,loading:b.a.bool,onClick:b.a.func,size:b.a.oneOf(w.a),startIcon:b.a.element,variant:b.a.oneOf(w.c)}},function(e,n,t){"use strict";t.r(n),t.d(n,"MenuItem",(function(){return W})),t.d(n,"SimpleMenu",(function(){return Y}));var r,a,o,i,c=t(13),l=t.n(c),u=t(10),d=t.n(u),s=t(6),p=t.n(s),f=t(30),g=t.n(f),h=t(5),b=t.n(h),m=t(3),v=t.n(m),y=t(1),x=t.n(y),E=t(0),M=t.n(E),T=t(2),w=t.n(T),O=t(35),j=t.n(O),C=t(36),N=t(8),k=t(4),D=t(9),z=t(59),I=t(40),L=function(e){var n=e.theme;return"\n    text-align: left;\n    width: 100%;\n    color: ".concat(n.colors.neutral800,";\n    border-radius: ").concat(n.borderRadius,";\n    &:focus {\n        background-color: ").concat(n.colors.primary100,";\n    }\n    &:not([aria-disabled]):hover {\n        background-color: ").concat(n.colors.primary100,";\n    }\n")},A=t(15),R=t(11),S=["children","onClick","to","isFocused"],B=["label","children","id","as","onOpen","onClose","size"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var q=w.a.button(r||(r=v()(["\n  border: none;\n  padding: 0;\n  background: transparent;\n  cursor: pointer;\n  ","\n"])),L),F=w()(C.NavLink)(a||(a=v()(["\n  text-decoration: none;\n  ","\n"])),L),U=w.a.span(o||(o=v()(["\n  display: flex;\n  align-items: center;\n  svg {\n    height: 4px;\n    width: 6px;\n  }\n"]))),Q=w()(z.Button)(i||(i=v()(["\n  padding: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.spaces[1]," ").concat(n.spaces[3])})),W=function(e){var n=e.children,t=e.onClick,r=e.to,a=e.isFocused,o=b()(e,S),i=Object(y.useRef)();Object(y.useEffect)((function(){a&&i.current&&i.current.focus()}),[a]);var c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){g()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({tabIndex:a?0:-1,ref:i,role:"menuitem"},o);return r?x.a.createElement(F,p()({to:r},c),x.a.createElement(k.Box,{padding:2},x.a.createElement(N.Typography,null,n))):x.a.createElement(q,p()({onKeyDown:function(e){e.key!==R.a.SPACE&&e.key!==R.a.ENTER||t()},onMouseDown:t,type:"button"},c),x.a.createElement(k.Box,{padding:2},x.a.createElement(N.Typography,null,n)))};W.defaultProps={onClick:function(){},isFocused:!1,to:void 0},W.propTypes={as:M.a.elementType,children:M.a.node.isRequired,isFocused:M.a.bool,onClick:M.a.func,to:M.a.string};var Y=function(e){var n=e.label,t=e.children,r=e.id,a=e.as,o=e.onOpen,i=void 0===o?function(){}:o,c=e.onClose,u=void 0===c?function(){}:c,s=e.size,f=b()(e,B),g=Object(y.useRef)(),h=Object(A.a)("simplemenu",r),m=Object(y.useRef)(!1),v=Object(y.useState)(!1),E=d()(v,2),M=E[0],T=E[1],w=Object(y.useState)(0),O=d()(w,2),C=O[0],N=O[1],L=y.Children.toArray(t),S="S"===s?Q:z.Button,P=a||S;Object(y.useEffect)((function(){if(["string","number"].includes(l()(n))){var e=L.findIndex((function(e){return e.props.children===n}));-1!==e&&N(e)}}),[n]),Object(y.useEffect)((function(){null!=m&&m.current?M&&"function"==typeof i?i():"function"==typeof u&&u():m.current=!0}),[m,M]),Object(y.useEffect)((function(){x.a.isValidElement(n)&&-1==C&&g.current.focus()}),[n,C]);var q=L.map((function(e,n){return x.a.createElement(D.Flex,{as:"li",key:n,justifyContent:"center",role:"menuitem"},Object(y.cloneElement)(e,{onClick:function(){e.props.onClick(),T(!1),g.current.focus()},isFocused:C===n}))}));return x.a.createElement("div",{onKeyDown:function(e){M&&(e.key===R.a.ESCAPE&&(e.stopPropagation(),T(!1),g.current.focus()),e.key===R.a.DOWN&&N((function(e){return e===L.length-1?0:e+1})),e.key===R.a.UP&&N((function(e){return 0===e?L.length-1:e-1})))}},x.a.createElement(P,p()({label:x.a.isValidElement(n)?null:n,"aria-haspopup":!0,"aria-expanded":M,"aria-controls":h,onKeyDown:function(e){e.key!==R.a.ENTER&&e.key!==R.a.SPACE||T((function(e){return!e}))},onMouseDown:function(){T((function(e){return!e}))},ref:g,type:"button",variant:"ghost",endIcon:x.a.createElement(U,null,x.a.createElement(j.a,{"aria-hidden":!0}))},f),n),M&&x.a.createElement(I.Popover,{onBlur:function(e){e.currentTarget.contains(e.relatedTarget)||T(!1)},source:g,spacing:4},x.a.createElement(k.Box,{role:"menu",as:"ul",padding:1,id:h},q)))};Y.defaultProps={as:void 0},Y.displayName="SimpleMenu";var H=M.a.shape({type:M.a.oneOf([W])});Y.defaultProps={size:"M"},Y.propTypes={as:M.a.any,children:M.a.oneOfType([M.a.arrayOf(H),H]).isRequired,id:M.a.string,label:M.a.oneOfType([M.a.string,M.a.number,M.a.element]).isRequired,onClose:M.a.func,onOpen:M.a.func,size:M.a.oneOf(["S","M"])}},function(e,n,t){"use strict";t.r(n),t.d(n,"BaseCheckbox",(function(){return x}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(2),h=t.n(g),b=function(e){return"M"===e.size?"18px":"20px"},m=t(55),v=["indeterminate","size","name","value","onValueChange"],y=h.a.input(r||(r=u()(["\n  margin: 0;\n  height: ",";\n  min-width: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  -webkit-appearance: none;\n  background-color: ",";\n  cursor: pointer;\n\n  &:checked {\n    background-color: ",";\n    border: 1px solid ",";\n\n    &:after {\n      content: '';\n      display: block;\n      position: relative;\n      background: url(",") no-repeat no-repeat center center;\n      width: 10px;\n      height: 10px;\n      left: 50%;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%);\n    }\n\n    &:disabled:after {\n      background: url(",") no-repeat no-repeat center center;\n    }\n  }\n\n  &:disabled {\n    background-color: ",";\n    border: 1px solid ",";\n  }\n\n  &:indeterminate {\n    background-color: ",";\n    border: 1px solid ",";\n\n    &:after {\n      content: '';\n      display: block;\n      position: relative;\n      color: white;\n      height: 2px;\n      width: 10px;\n      background-color: ",";\n      left: 50%;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%);\n    }\n\n    &:disabled {\n      background-color: ",";\n      border: 1px solid ",";\n      &:after {\n        background-color: ",";\n      }\n    }\n  }\n"])),b,b,(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral300}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.colors.primary600}),m.a,"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==",(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral300}),(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral300}),(function(e){return e.theme.colors.neutral500})),x=function(e){var n=e.indeterminate,t=e.size,r=e.name,a=e.value,i=e.onValueChange,l=c()(e,v),u=Object(d.useRef)();Object(d.useEffect)((function(){u.current&&n?u.current.indeterminate=n:u.current.indeterminate=!1}),[n]);return s.a.createElement(y,o()({size:t,checked:a,onChange:function(){i(!a)},type:"checkbox",ref:u,name:r},l))};x.displayName="BaseCheckbox",x.defaultProps={indeterminate:!1,name:null,onValueChange:function(){},size:"M",value:!1},x.propTypes={indeterminate:f.a.bool,name:f.a.string,onValueChange:f.a.func,size:f.a.oneOf(["M","L"]),value:f.a.bool}},function(e,n,t){"use strict";t.r(n),t.d(n,"TextButton",(function(){return M}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(2),h=t.n(g),b=t(4),m=t(8),v=t(9),y=t(14),x=["children","startIcon","endIcon","onClick","disabled"],E=h()(v.Flex)(r||(r=u()(["\n  background: transparent;\n  border: none;\n\n  &[aria-disabled='true'] {\n    pointer-events: none;\n    svg path {\n      fill: ",";\n    }\n  }\n\n  svg {\n    display: flex;\n    font-size: ","rem;\n  }\n\n  svg path {\n    fill: ",";\n  }\n\n  ","\n"])),(function(e){return e.theme.colors.neutral600}),.625,(function(e){return e.theme.colors.primary600}),y.a),M=s.a.forwardRef((function(e,n){var t=e.children,r=e.startIcon,a=e.endIcon,i=e.onClick,l=e.disabled,u=c()(e,x),d=i&&!l?i:void 0;return s.a.createElement(E,o()({ref:n,"aria-disabled":l,onClick:d,as:"button",type:"button"},u),r&&s.a.createElement(b.Box,{as:"span",paddingRight:2,"aria-hidden":!0},r),s.a.createElement(m.Typography,{variant:"pi",textColor:l?"neutral600":"primary600"},t),a&&s.a.createElement(b.Box,{as:"span",paddingLeft:2,"aria-hidden":!0},a))}));M.displayName="TextButton",M.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,onClick:void 0},M.propTypes={children:f.a.node.isRequired,disabled:f.a.bool,endIcon:f.a.element,onClick:f.a.func,startIcon:f.a.element}},function(e,n,t){"use strict";t.r(n),t.d(n,"IconButtonGroup",(function(){return M})),t.d(n,"IconButton",(function(){return T}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(46),v=t(39),y=t(9),x=["label","noBorder","icon","disabled","onClick"],E=b()(v.BaseButton)(r||(r=d()(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ","rem;\n  width: ","rem;\n\n  svg {\n    > g,\n    path {\n      fill: ",";\n    }\n  }\n  &:hover {\n    svg {\n      > g,\n      path {\n        fill: ",";\n      }\n    }\n  }\n  &:active {\n    svg {\n      > g,\n      path {\n        fill: ",";\n      }\n    }\n  }\n  &[aria-disabled='true'] {\n    background-color: ",";\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n  }\n  ","\n"])),2,2,(function(e){return e.theme.colors.neutral500}),(function(e){return e.theme.colors.neutral600}),(function(e){return e.theme.colors.neutral400}),(function(e){return e.theme.colors.neutral150}),(function(e){return e.theme.colors.neutral600}),(function(e){return e.noBorder?"border: none;":void 0})),M=b()(y.Flex)(a||(a=d()(["\n  & span:first-child button {\n    border-left: 1px solid ",";\n    border-radius: ",";\n  }\n\n  & span:last-child button {\n    border-radius: ",";\n  }\n\n  & "," {\n    border-radius: 0;\n    border-left: none;\n\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n\n    &:hover {\n      background-color: ",";\n\n      svg {\n        path {\n          fill: ",";\n        }\n      }\n    }\n\n    &:active {\n      background-color: ",";\n      svg {\n        path {\n          fill: ",";\n        }\n      }\n    }\n\n    &[aria-disabled='true'] {\n      svg {\n        path {\n          fill: ",";\n        }\n      }\n    }\n  }\n"])),(function(e){return e.theme.colors.neutral200}),(function(e){var n=e.theme;return"".concat(n.borderRadius," 0 0 ").concat(n.borderRadius)}),(function(e){var n=e.theme;return"0 ".concat(n.borderRadius," ").concat(n.borderRadius," 0")}),E,(function(e){return e.theme.colors.neutral700}),(function(e){return e.theme.colors.neutral100}),(function(e){return e.theme.colors.neutral800}),(function(e){return e.theme.colors.neutral150}),(function(e){return e.theme.colors.neutral900}),(function(e){return e.theme.colors.neutral600})),T=p.a.forwardRef((function(e,n){var t=e.label,r=e.noBorder,a=e.icon,o=e.disabled,c=e.onClick,u=l()(e,x),d=function(e){!o&&c&&c(e)};return t?p.a.createElement(m.Tooltip,{label:t},p.a.createElement(E,i()({},u,{ref:n,noBorder:r,onClick:d,"aria-disabled":o}),a)):p.a.createElement(E,i()({},u,{ref:n,noBorder:r,onClick:d,"aria-disabled":o}),a)}));T.displayName="IconButton",T.defaultProps={label:void 0,noBorder:!1,disabled:!1,onClick:void 0},T.propTypes={disabled:g.a.bool,icon:g.a.element.isRequired,label:g.a.string,noBorder:g.a.bool,onClick:g.a.func}},function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(1),a=Object(r.createContext)({onChange:function(){},name:"",size:"M"})},function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(5),a=t.n(r),o=t(1),i=t.n(o),c=t(0),l=t.n(c),u=t(45),d=["children"],s=function(e){var n=e.children,t=a()(e,d),r=Object(u.b)(),c=r.rowIndex,l=r.colIndex,s=o.Children.toArray(n).map((function(e,n){return Object(o.cloneElement)(e,{focusedColIndex:c===n?l:void 0,"aria-rowindex":1})}));return i.a.createElement("thead",t,s)};s.propTypes={children:l.a.node.isRequired}},function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(5),a=t.n(r),o=t(1),i=t.n(o),c=t(0),l=t.n(c),u=t(45),d=["children"],s=function(e){var n=e.children,t=a()(e,d),r=Object(u.b)(),c=r.rowIndex,l=r.colIndex,s=o.Children.toArray(n).map((function(e,n){return Object(o.cloneElement)(e,{focusedColIndex:c-1===n?l:void 0,"aria-rowindex":n+2})}));return i.a.createElement("tbody",t,s)};s.propTypes={children:l.a.node.isRequired}},function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(4),p=["children","focusedColIndex"],f=function(e){var n=e.children,t=e.focusedColIndex,r=i()(e,p),o=c.Children.toArray(n).map((function(e,n){return Object(c.cloneElement)(e,{isFocusable:t===n,"aria-colindex":n+1})}));return l.a.createElement(s.Box,a()({as:"tr"},r),o)};f.defaultProps={focusedColIndex:void 0},f.propTypes={children:d.a.node.isRequired,focusedColIndex:d.a.number}},function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(6),a=t.n(r),o=t(10),i=t.n(o),c=t(5),l=t.n(c),u=t(1),d=t.n(u),s=t(0),p=t.n(s),f=t(45),g=t(11),h=["colCount","rowCount","jumpStep","initialCol","initialRow"],b=function(e){var n=e.colCount,t=e.rowCount,r=e.jumpStep,o=e.initialCol,c=e.initialRow,s=l()(e,h),p=Object(u.useRef)(null),b=Object(u.useRef)(!1),m=Object(u.useState)(c),v=i()(m,2),y=v[0],x=v[1],E=Object(u.useState)(o),M=i()(E,2),T=M[0],w=M[1];Object(u.useEffect)((function(){var e,n;b.current&&(e=p.current,(n=e.querySelector('[tabindex="0"]'))&&n.focus()),b.current||(b.current=!0)}),[T,y]);return d.a.createElement(f.a.Provider,{value:{rowIndex:y,colIndex:T}},d.a.createElement("table",a()({ref:p,"aria-rowcount":t,"aria-colcount":n,onKeyDown:function(e){switch(e.key){case g.a.RIGHT:e.preventDefault(),w((function(e){return e<n-1?e+1:e}));break;case g.a.LEFT:e.preventDefault(),w((function(e){return e>0?e-1:e}));break;case g.a.UP:e.preventDefault(),x((function(e){return e>0?e-1:e}));break;case g.a.DOWN:e.preventDefault(),x((function(e){return e<t-1?e+1:e}));break;case g.a.HOME:e.preventDefault(),e.ctrlKey&&x(0),w(0);break;case g.a.END:e.preventDefault(),e.ctrlKey&&x(t-1),w(n-1);break;case g.a.PAGE_DOWN:e.preventDefault(),x((function(e){return e+r<t?e+r:t-1}));break;case g.a.PAGE_UP:e.preventDefault(),x((function(e){return e-r>0?e-r:0}))}}},s)))};b.defaultProps={jumpStep:3,initialCol:0,initialRow:0},b.propTypes={colCount:p.a.number.isRequired,initialCol:p.a.number,initialRow:p.a.number,jumpStep:p.a.number,rowCount:p.a.number.isRequired}},function(e,n,t){"use strict";function r(e){return"object"==typeof e&&null!=e&&1===e.nodeType}function a(e,n){return(!n||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function o(e,n){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var t=getComputedStyle(e,null);return a(t.overflowY,n)||a(t.overflowX,n)||function(e){var n=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!n&&(n.clientHeight<e.scrollHeight||n.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,n,t,r,a,o,i,c){return o<e&&i>n||o>e&&i<n?0:o<=e&&c<=t||i>=n&&c>=t?o-e-r:i>n&&c<t||o<e&&c>t?i-n+a:0}n.a=function(e,n){var t=window,a=n.scrollMode,c=n.block,l=n.inline,u=n.boundary,d=n.skipOverflowHiddenElements,s="function"==typeof u?u:function(e){return e!==u};if(!r(e))throw new TypeError("Invalid target");for(var p=document.scrollingElement||document.documentElement,f=[],g=e;r(g)&&s(g);){if((g=g.parentElement)===p){f.push(g);break}null!=g&&g===document.body&&o(g)&&!o(document.documentElement)||null!=g&&o(g,d)&&f.push(g)}for(var h=t.visualViewport?t.visualViewport.width:innerWidth,b=t.visualViewport?t.visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),x=y.height,E=y.width,M=y.top,T=y.right,w=y.bottom,O=y.left,j="start"===c||"nearest"===c?M:"end"===c?w:M+x/2,C="center"===l?O+E/2:"end"===l?T:O,N=[],k=0;k<f.length;k++){var D=f[k],z=D.getBoundingClientRect(),I=z.height,L=z.width,A=z.top,R=z.right,S=z.bottom,B=z.left;if("if-needed"===a&&M>=0&&O>=0&&w<=b&&T<=h&&M>=A&&w<=S&&O>=B&&T<=R)return N;var P=getComputedStyle(D),q=parseInt(P.borderLeftWidth,10),F=parseInt(P.borderTopWidth,10),U=parseInt(P.borderRightWidth,10),Q=parseInt(P.borderBottomWidth,10),W=0,Y=0,H="offsetWidth"in D?D.offsetWidth-D.clientWidth-q-U:0,_="offsetHeight"in D?D.offsetHeight-D.clientHeight-F-Q:0;if(p===D)W="start"===c?j:"end"===c?j-b:"nearest"===c?i(v,v+b,b,F,Q,v+j,v+j+x,x):j-b/2,Y="start"===l?C:"center"===l?C-h/2:"end"===l?C-h:i(m,m+h,h,q,U,m+C,m+C+E,E),W=Math.max(0,W+v),Y=Math.max(0,Y+m);else{W="start"===c?j-A-F:"end"===c?j-S+Q+_:"nearest"===c?i(A,S,I,F,Q+_,j,j+x,x):j-(A+I/2)+_/2,Y="start"===l?C-B-q:"center"===l?C-(B+L/2)+H/2:"end"===l?C-R+U+H:i(B,R,L,q,U+H,C,C+E,E);var G=D.scrollLeft,V=D.scrollTop;j+=V-(W=Math.max(0,Math.min(V+W,D.scrollHeight-I+_))),C+=G-(Y=Math.max(0,Math.min(G+Y,D.scrollWidth-L+H)))}N.push({el:D,top:W,left:Y})}return N}},function(e,n,t){"use strict";t.r(n),t.d(n,"Tag",(function(){return w}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(8),v=t(4),y=t(9),x=["theme"],E=["children","icon","disabled","onClick"],M=b()(v.Box)(r||(r=d()(["\n  svg {\n    height: ","rem;\n    width: ","rem;\n  }\n\n  svg path {\n    fill: ",";\n  }\n"])),.5,.5,(function(e){var n=e.theme;return l()(e,x)["aria-disabled"]?n.colors.neutral600:n.colors.primary600})),T=b()(m.Typography)(a||(a=d()(["\n  border-right: 1px solid ",";\n  color: inherit;\n  padding-right: ",";\n"])),(function(e){var n=e.theme;return e.disabled?n.colors.neutral300:n.colors.primary200}),(function(e){return e.theme.spaces[2]})),w=function(e){var n=e.children,t=e.icon,r=e.disabled,a=e.onClick,o=l()(e,E);return p.a.createElement(M,i()({as:"button",background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:3,onClick:function(e){r||a(e)},"aria-disabled":r,borderWidth:"1px",borderStyle:"solid",borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"".concat(2,"rem")},o),p.a.createElement(y.Flex,null,p.a.createElement(T,{disabled:r,variant:"pi",fontWeight:"bold",as:"span"},n),p.a.createElement(v.Box,{paddingLeft:2},p.a.createElement(y.Flex,null,t))))};w.displayName="Tag",w.defaultProps={disabled:!1,onClick:void 0},w.propTypes={children:g.a.string.isRequired,disabled:g.a.bool,icon:g.a.element.isRequired,onClick:g.a.func}},function(e,n){e.exports=l},function(e,n){e.exports=u},function(e,n,t){"use strict";t.r(n),t.d(n,"Select",(function(){return te})),t.d(n,"Option",(function(){return ue})),t.d(n,"OptGroup",(function(){return se})),t.d(n,"MultiSelectNested",(function(){return fe})),t.d(n,"SelectList",(function(){return W}));var r,a=t(6),o=t.n(a),i=t(28),c=t.n(i),l=t(10),u=t.n(l),d=t(5),s=t.n(d),p=t(3),f=t.n(p),g=t(1),h=t.n(g),b=t(0),m=t.n(b),v=t(35),y=t.n(v),x=t(34),E=t.n(x),M=t(27),T=t(2),w=t.n(T),O=t(11),j="down:keyboard",C="down:mouse",N="up:keyboard",k="up:mouse",D=["labelledBy","expanded","onTrigger","disabled"],z=w.a.button(r||(r=f()(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100%;\n  background: transparent;\n  border: none;\n\n  // The focus state is moved to the parent thanks to :focus-within\n  &:focus {\n    outline: none;\n  }\n\n  &[aria-disabled='true'] {\n    cursor: not-allowed;\n  }\n"]))),I=Object(g.forwardRef)((function(e,n){var t=e.labelledBy,r=e.expanded,a=e.onTrigger,i=e.disabled,c=s()(e,D);return h.a.createElement(z,o()({ref:n,"aria-labelledby":t,"aria-haspopup":"listbox","aria-expanded":r,onKeyDown:function(e){if(!i)switch(e.key){case O.a.DOWN:case O.a.SPACE:case O.a.ENTER:e.preventDefault(),a(j);break;case O.a.UP:e.preventDefault(),a(N)}},"aria-disabled":i,type:"button"},c))}));I.displayName="SelectButton",I.defaultProps={expanded:!1,disabled:!1},I.propTypes={disabled:m.a.bool,expanded:m.a.bool,labelledBy:m.a.string.isRequired,onTrigger:m.a.func.isRequired};var L=t(16),A=t(40),R=t(26),S=t(8),B=t(9),P=t(4),q=t(15),F=t(69),U=function(e,n){e.setAttribute("aria-activedescendant",n.getAttribute("id")),e.querySelectorAll('[role="option"]').forEach((function(e){return e.classList.remove("is-focused")})),n.classList.add("is-focused"),Object(F.a)(n,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach((function(e){var n=e.el,t=e.top,r=e.left;n.scrollTop=t,n.scrollLeft=r}))},Q=function(e){var n=e.getAttribute("aria-activedescendant");return e.querySelector("#".concat(n))},W=function(e){var n=e.labelledBy,t=e.onSelectItem,r=e.children,a=e.multi,o=e.onEscape,i=function(e){var n=Object(g.useRef)(null);return Object(g.useEffect)((function(){n.current.focus()}),[]),Object(g.useEffect)((function(){if(n.current){var t,r=n.current.querySelector('[aria-selected="true"]'),a=n.current.querySelectorAll('[role="option"]');r?t=r:e===N?t=a[a.length-1]:e===j&&(t=a[0]),t&&(e!==N&&e!==j||U(n.current,t))}}),[]),n}(e.expanded);return h.a.createElement(R.Stack,{as:"ul",spacing:1,role:"listbox","aria-labelledby":n,tabIndex:-1,ref:i,onKeyDown:function(e){switch(e.key){case O.a.ESCAPE:e.stopPropagation(),o();break;case O.a.DOWN:e.preventDefault();var n=Q(i.current);if(!n)return;var r=n.nextSibling;if(r)U(i.current,r);else{var c=i.current.querySelectorAll('[role="option"]')[0];U(i.current,c)}break;case O.a.UP:e.preventDefault();var l=Q(i.current);if(!l)return;var u=l.previousSibling;if(u)U(i.current,u);else{var d=i.current.querySelectorAll('[role="option"]'),s=d[d.length-1];U(i.current,s)}break;case O.a.SPACE:case O.a.ENTER:e.preventDefault();var p=Q(i.current);p.getAttribute("data-opt-group")?t(p.getAttribute("data-opt-group-children").split(","),p.getAttribute("data-opt-group")):t(p.getAttribute("data-strapi-value")),a||o()}},onBlur:o,"aria-multiselectable":a},r)};W.defaultProps={labelledBy:void 0,multi:!1},W.propTypes={children:m.a.node.isRequired,expanded:m.a.oneOf([N,k,j,C]).isRequired,labelledBy:m.a.string,multi:m.a.bool,onEscape:m.a.func.isRequired,onSelectItem:m.a.func.isRequired};var Y,H,_=t(50),G=t(21),V=function(e){return e.replace(":","-")},K=t(70),Z=w.a.div(Y||(Y=f()(["\n  margin-bottom: ",";\n"])),(function(e){return e.theme.spaces[1]})),X=w()(K.Tag)(H||(H=f()(["\n  position: relative;\n  z-index: 1;\n  margin-left: ",";\n  margin-top: ",";\n"])),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),J=function(e){var n=e.tags,t=e.onRemoveTag,r=e.disabled;return h.a.createElement(Z,null,h.a.createElement(B.Flex,{wrap:"wrap"},n.map((function(e){return h.a.createElement(X,{icon:h.a.createElement(E.a,null),disabled:r,onClick:function(){return t(e.value)},tabIndex:-1,key:"tag-".concat(e.value)},e.label)}))))};J.defaultProps={disabled:!1,tags:[]},J.propTypes={disabled:m.a.bool,onRemoveTag:m.a.func.isRequired,tags:m.a.arrayOf(m.a.shape({label:m.a.string,value:m.a.oneOfType([m.a.string,m.a.number])}))};var $,ee=["label","labelAction","id","children","customizeContent","placeholder","onChange","value","hint","error","disabled","clearLabel","onClear","onReachEnd","multi","required","size","startIcon","withTags"],ne=w()(B.Flex)($||($=f()(["\n  width: 100%;\n"]))),te=function(e){var n=e.label,t=e.labelAction,r=e.id,a=e.children,i=e.customizeContent,l=e.placeholder,d=e.onChange,p=e.value,f=e.hint,b=e.error,m=e.disabled,v=e.clearLabel,x=e.onClear,M=e.onReachEnd,T=e.multi,w=e.required,O=e.size,k=e.startIcon,D=e.withTags,z=s()(e,ee),F=Object(q.a)("select",r),U=Object(g.useState)(void 0),Q=u()(U,2),Y=Q[0],H=Q[1],K=function(e){var n=Object(g.useRef)(null),t=Object(g.useRef)(null),r=Object(g.useRef)();return e&&(r.current=e),Object(g.useEffect)((function(){t.current&&(e||r.current!==j&&r.current!==N||n.current.focus())}),[e]),Object(g.useEffect)((function(){t.current=!0}),[]),n}(Y),Z=Object(g.useRef)(null),X="".concat(F,"-label"),$="".concat(F,"-content"),te=b?"".concat(F,"-error"):f?"".concat(F,"-hint"):void 0;if(D&&!T)throw new Error('The "withTags" props can only be used when the "multi" prop is present');var re,ae=function(e){m||3!==e.nativeEvent.which&&2!==e.nativeEvent.button&&H(C)},oe=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];T?d(p.includes(e)?p.filter((function(n){return n!==e})):[].concat(c()(p),[e])):(d(e),n&&H(void 0))},ie=function(e){d(p.includes(e[0])?p.filter((function(e){return this.indexOf(e)<0}),e):[].concat(c()(p),c()(e)))},ce=[],le=function(e,n){var t="".concat(F,"-option-").concat(e.props.value),r=T?p.includes(e.props.value):e.props.value===p;return r&&(D?ce.push({label:e.props.children,value:e.props.value}):re=e.props.children),Object(g.cloneElement)(e,{id:V(t),onClick:function(){return oe(e.props.value)},selected:r,multi:T,isChild:n})},ue=g.Children.toArray(a).map((function(e){if("OptGroup"===e.type.displayName){var n="".concat(F,"-option-").concat(e.props.label),t=e.props.children.every((function(e){return p.includes(e.props.value)})),r=!t&&e.props.children.some((function(e){return p.includes(e.props.value)}));return Object(g.cloneElement)(e,{id:V(n),onClick:function(){return ie(e.props.children.map((function(e){return e.props.value})))},selected:t,indeterminate:r,multi:T,children:g.Children.toArray(e.props.children).map((function(e){return le(e,!0)})),value:e.props.label})}return le(e)}));return h.a.createElement(L.Field,{hint:f,error:b,id:F},h.a.createElement(R.Stack,{spacing:n||f||b?1:0},n&&h.a.createElement(L.FieldLabel,{required:w,as:"span",id:X,action:t},n),h.a.createElement(_.c,{size:O,hasError:Boolean(b),disabled:m,ref:Z},h.a.createElement(I,o()({ref:K,labelledBy:"".concat(X," ").concat($),"aria-describedby":te,expanded:Boolean(Y),onTrigger:H,id:F,hasError:Boolean(b),disabled:m,onMouseDown:ae},z)),h.a.createElement(ne,{justifyContent:"space-between"},h.a.createElement(B.Flex,null,k&&h.a.createElement(P.Box,{paddingLeft:3,"aria-hidden":!0},k),D&&h.a.createElement(J,{tags:ce,onRemoveTag:oe,disabled:m}),h.a.createElement(P.Box,{paddingLeft:4,paddingRight:4},D?h.a.createElement(h.a.Fragment,null,p&&0!==p.length?null:h.a.createElement(S.Typography,{ellipsis:!0,id:$,textColor:"neutral600"},l),h.a.createElement(G.VisuallyHidden,{as:"span",id:$},i?i(p):re||l,p.join(", "))):h.a.createElement(S.Typography,{ellipsis:!0,id:$,textColor:p?"neutral800":"neutral600"},i?i(p):re||l,T&&h.a.createElement(G.VisuallyHidden,{as:"span"},p.join(", "))))),h.a.createElement(B.Flex,null,(T&&p&&p.length||!T&&p)&&x&&h.a.createElement(_.b,{as:"button",type:"button",onClick:function(){m||(x(),K.current.focus())},"aria-label":v,"aria-disabled":m},h.a.createElement(E.a,null)),h.a.createElement(_.a,{paddingLeft:3,"aria-hidden":!0,as:"button",type:"button",onMouseDown:ae,tabIndex:-1,disabled:m},h.a.createElement(y.a,null))))),h.a.createElement(L.FieldHint,null),h.a.createElement(L.FieldError,null)),Y&&h.a.createElement(A.Popover,{source:Z,spacing:4,fullWidth:!0,intersectionId:"select-list-intersection-".concat(F),onReachEnd:M},h.a.createElement(W,{selectId:F,labelledBy:n?X:void 0,onEscape:function(){H(void 0)},expanded:Y,onSelectItem:function(e,n){return n?ie(e):oe(e,!1)},multi:T},ue)))};te.defaultProps={"aria-label":void 0,children:[],clearLabel:"Clear",customizeContent:void 0,disabled:!1,id:void 0,label:void 0,labelAction:void 0,multi:!1,onChange:function(){},onClear:void 0,onReachEnd:void 0,value:void 0,hint:void 0,error:void 0,placeholder:"Select...",required:!1,size:"M",startIcon:void 0,withTags:!1},te.propTypes={"aria-label":m.a.string,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),clearLabel:m.a.string,customizeContent:m.a.func,disabled:m.a.bool,error:m.a.string,hint:m.a.string,id:m.a.oneOfType([m.a.string,m.a.number]),label:m.a.string,labelAction:m.a.element,multi:m.a.bool,onChange:m.a.func,onClear:m.a.func,onReachEnd:m.a.func,placeholder:m.a.string,required:m.a.bool,size:m.a.oneOf(Object.keys(M.a.input)),startIcon:m.a.element,value:m.a.oneOfType([m.a.arrayOf(m.a.oneOfType([m.a.string,m.a.number])),m.a.string,m.a.number]),withTags:m.a.bool};var re,ae,oe=t(55),ie=["selected","indeterminate","children","value","multi","isChild","startIcon"],ce=w.a.div(re||(re=f()(["\n  border: 1px solid\n    ",";\n  border-radius: ",";\n  height: 18px;\n  width: 18px;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n  background-color: ",";\n\n  ","\n\n  ","\n"])),(function(e){var n=e.theme,t=e.selected,r=e.indeterminate;return t||r?n.colors.primary600:n.colors.neutral300}),(function(e){return e.theme.borderRadius}),(function(e){var n=e.theme,t=e.selected,r=e.indeterminate;return t||r?n.colors.primary600:n.colors.neutral0}),(function(e){var n=e.theme;return e.indeterminate&&"&::after {\n      content: '';\n      display: block;\n      position: relative;\n      color: white;\n      height: 2px;\n      width: 10px;\n      background-color: ".concat(n.colors.neutral0,";\n      left: 50%;\n      top: 50%;\n      transform: translateX(-50%) translateY(-50%);\n    }\n\n  ")}),(function(e){return e.selected&&"  \n    &::after {\n      content: '';\n      background: url(".concat(oe.a,") no-repeat no-repeat center center;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n    }\n\n  ")})),le=w()(P.Box)(ae||(ae=f()(["\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline-offset: -3px;\n  &.is-focused {\n    background: ",";\n  }\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.primary100}),(function(e){return e.theme.colors.primary100})),ue=function(e){var n=e.selected,t=e.indeterminate,r=e.children,a=e.value,i=e.multi,c=e.isChild,l=e.startIcon,u=s()(e,ie),d=Object(g.useRef)(null);return h.a.createElement(le,o()({as:"li",hasRadius:!0,paddingLeft:c?7:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:d,role:"option","aria-selected":n,background:"neutral0","data-strapi-value":a},u),h.a.createElement(B.Flex,null,l&&h.a.createElement(P.Box,{paddingRight:2,"aria-hidden":!0},l),i&&h.a.createElement(P.Box,{paddingRight:2,"aria-hidden":!0},h.a.createElement(ce,{selected:n,indeterminate:t})),h.a.createElement(S.Typography,{textColor:n?"primary600":"neutral800",fontWeight:n?"bold":null},r)))};ue.defaultProps={isChild:!1,multi:!1,selected:!1,startIcon:void 0,indeterminate:!1},ue.propTypes={children:m.a.oneOfType([m.a.string,m.a.number]).isRequired,indeterminate:m.a.bool,isChild:m.a.bool,multi:m.a.bool,selected:m.a.bool,startIcon:m.a.node,value:m.a.oneOfType([m.a.string,m.a.number]).isRequired},ue.displayName="Option";var de=["children","label"],se=function(e){var n=e.children,t=e.label,r=s()(e,de),a=n.map((function(e){return e.props.value}));return h.a.createElement(h.a.Fragment,null,h.a.createElement(ue,o()({"data-opt-group":!0,"data-opt-group-children":a,"aria-label":"".concat(t,", ").concat(n.length," items")},r),t),n)};se.propTypes={children:m.a.arrayOf(m.a.node).isRequired,label:m.a.string.isRequired},se.displayName="OptGroup";var pe=["options"],fe=function(e){var n=e.options,t=s()(e,pe);return h.a.createElement(te,o()({multi:!0},t),n.map((function(e){var n=e.label,t=e.value,r=e.children;return r?h.a.createElement(se,{key:n,label:n},null==r?void 0:r.map((function(e){return h.a.createElement(ue,{key:e.value,value:e.value},e.label)}))):h.a.createElement(ue,{key:t,value:t},n)})))};fe.propTypes={options:m.a.arrayOf(m.a.object).isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"Avatar",(function(){return O})),t.d(n,"Initials",(function(){return N})),t.d(n,"AvatarGroup",(function(){return k}));var r,a,o,i,c,l,u=t(10),d=t.n(u),s=t(3),p=t.n(s),f=t(1),g=t.n(f),h=t(2),b=t.n(h),m=t(0),v=t.n(m),y=t(8),x=t(9),E=b.a.img(r||(r=p()(["\n  border-radius: 50%;\n  display: block;\n  position: relative;\n"]))),M=b.a.div(a||(a=p()(["\n  position: relative;\n  width: ","px;\n  height: ","px;\n  z-index: ",";\n"])),26,26,(function(e){return e.hovering?1:void 0})),T=b.a.img(o||(o=p()(["\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-","px, -100%);\n  margin-top: -",";\n"])),19,(function(e){return e.theme.spaces[1]})),w=b.a.div(i||(i=p()(["\n  z-index: 1;\n  border-radius: 50%;\n  position: absolute;\n  width: ","px;\n  height: ","px;\n  background: ",";\n  opacity: 0.4;\n"])),26,26,(function(e){return e.theme.colors.neutral0})),O=function(e){var n=e.src,t=e.alt,r=e.preview,a=Object(f.useState)(!1),o=d()(a,2),i=o[0],c=o[1];return g.a.createElement("span",null,r&&i?g.a.createElement(T,{"aria-hidden":!0,alt:"",width:"".concat(64,"px"),height:"".concat(64,"px"),src:!0===r?n:r}):null,g.a.createElement(M,{hovering:r&&i,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)}},r&&i?g.a.createElement(w,null):null,g.a.createElement(E,{src:n,alt:t,width:"".concat(26,"px"),height:"".concat(26,"px")})))},j=function(e){return function(n){return n.theme.colors[e]}},C=b()(x.Flex)(c||(c=p()(["\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n\n  background: linear-gradient(\n    157deg,\n    "," 0%,\n    "," 50%,\n    "," 81%,\n    "," 96%\n  );\n\n  span {\n    line-height: 0;\n  }\n"])),26,26,j("primary600"),j("primary500"),j("primary200"),j("primary100")),N=function(e){var n=e.children;return g.a.createElement(C,{justifyContent:"center"},g.a.createElement(y.Typography,{fontWeight:"bold",textColor:"neutral0",fontSize:0,textTransform:"uppercase"},n))};N.propTypes={children:v.a.string.isRequired},O.defaultProps={preview:void 0},O.propTypes={alt:v.a.string.isRequired,preview:v.a.oneOfType([v.a.string,v.a.bool]),src:v.a.string.isRequired};var k=b()(x.Flex)(l||(l=p()(["\n  & > * + * {\n    margin-left: -","px;\n  }\n"])),13)},function(e,n,t){"use strict";t.r(n),t.d(n,"Searchbar",(function(){return z})),t.d(n,"SearchForm",(function(){return I}));var r,a,o,i=t(6),c=t.n(i),l=t(5),u=t.n(l),d=t(3),s=t.n(d),p=t(1),f=t.n(p),g=t(0),h=t.n(g),b=t(2),m=t.n(b),v=t(71),y=t.n(v),x=t(34),E=t.n(x),M=t(27),T=t(16),w=t(21),O=t(14),j=t(9),C=["name","size","children","value","onClear","clearLabel"],N=m()(j.Flex)(r||(r=s()(["\n  font-size: 0.5rem;\n  svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral400})),k=m()(j.Flex)(a||(a=s()(["\n  font-size: 0.8rem;\n\n  svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral800})),D=m.a.div(o||(o=s()(["\n  border-radius: ",";\n  box-shadow: ",";\n\n  &:focus-within {\n    "," {\n      svg path {\n        fill: ",";\n      }\n    }\n  }\n\n  "," {\n    border: 1px solid transparent;\n  }\n\n  ","\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.shadows.filterShadow}),k,(function(e){return e.theme.colors.primary600}),T.InputWrapper,Object(O.c)(T.InputWrapper)),z=Object(p.forwardRef)((function(e,n){var t=e.name,r=e.size,a=e.children,o=e.value,i=e.onClear,l=e.clearLabel,d=u()(e,C),s=Object(p.useRef)(null),g=o.length>0,h=n||s;return f.a.createElement(D,null,f.a.createElement(T.Field,{name:t},f.a.createElement(w.VisuallyHidden,null,f.a.createElement(T.FieldLabel,null,a)),f.a.createElement(T.FieldInput,c()({ref:h,value:o,startAction:f.a.createElement(k,null,f.a.createElement(y.a,{"aria-hidden":!0})),size:r,endAction:g?f.a.createElement(T.FieldAction,{label:l,onClick:function(e){i(e),s.current.focus()}},f.a.createElement(N,null,f.a.createElement(E.a,null))):void 0},d))))}));z.displayName="Searchbar",z.defaultProps={value:"",size:"M"},z.propTypes={children:h.a.string.isRequired,clearLabel:h.a.string.isRequired,name:h.a.string.isRequired,onClear:h.a.func.isRequired,size:h.a.oneOf(Object.keys(M.a.input)),value:h.a.string};var I=function(e){return f.a.createElement("form",c()({},e,{role:"search"}))}},function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(64),p=["children","labelledBy","onChange","value","size","name"],f=function(e){var n=e.children,t=e.labelledBy,r=e.onChange,o=e.value,u=e.size,d=e.name,f=i()(e,p),g=Object(c.useRef)(null);return Object(c.useLayoutEffect)((function(){var e,n,t;o||(e=g.current,n='[name="'.concat(d,'"]'),(t=e.querySelectorAll(n))&&t.length>0&&t.item(0).setAttribute("tabindex","0"))}),[o]),l.a.createElement(s.a.Provider,{value:{onChange:r,selected:o,name:d,size:u}},l.a.createElement("div",a()({ref:g,role:"radiogroup","aria-labelledby":t},f),n))};f.defaultProps={value:"",size:"M"},f.propTypes={children:d.a.node.isRequired,labelledBy:d.a.string.isRequired,name:d.a.string.isRequired,onChange:d.a.func.isRequired,size:d.a.oneOf(["M","L"]),value:d.a.string}},function(e,n,t){"use strict";t.d(n,"a",(function(){return M}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(2),h=t.n(g),b=t(64),m=function(e){return"M"===e.size?"18px":"20px"},v=function(e){return"M"===e.size?"10px":"12px"},y=function(){return"3px"},x=["value","disabled"],E=h.a.input(r||(r=u()(["\n  margin: 0;\n  padding: 0;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 50%;\n  height: ",";\n  width: ",";\n  -webkit-appearance: none;\n\n  &:after {\n    border-radius: 50%;\n    content: '';\n    position: relative;\n    z-index: 1;\n    display: block;\n    height: ",";\n    width: ",";\n    left: ",";\n    top: ",";\n  }\n\n  &:checked:after {\n    background: ",";\n  }\n\n  &:disabled {\n    border: 1px solid ",";\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.primary600}),m,m,v,v,y,y,(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.colors.carbon300}),(function(e){return e.theme.colors.neutral200})),M=s.a.forwardRef((function(e,n){var t=e.value,r=e.disabled,a=c()(e,x),i=Object(d.useContext)(b.a),l=i.onChange,u=i.selected,p=i.name,f=i.size,g=u===t;return s.a.createElement(E,o()({ref:n,type:"radio",name:p,value:t,tabIndex:g?0:-1,"aria-checked":g,disabled:r,size:f,onChange:l},a))}));M.displayName="Radio",M.defaultProps={disabled:!1},M.propTypes={disabled:f.a.bool,value:f.a.string.isRequired}},function(e,n,t){"use strict";t.d(n,"a",(function(){return E}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(21),v=["children","small"],y=Object(h.keyframes)(r||(r=d()(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n"]))),x=b.a.img(a||(a=d()(["\n  animation: "," 1s infinite linear;\n  ","\n"])),y,(function(e){var n=e.small,t=e.theme;return n&&"width: ".concat(t.spaces[6],"; height: ").concat(t.spaces[6],";")})),E=Object(s.forwardRef)((function(e,n){var t=e.children,r=e.small,a=l()(e,v);return p.a.createElement("div",i()({role:"alert","aria-live":"assertive",ref:n},a),p.a.createElement(m.VisuallyHidden,null,t),p.a.createElement(x,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA2MyA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjU1NjMgMTEuOTgxNkMzOS40ODQgMTAuMzA3MSAzNS44NTc1IDkuMjkwOTcgMzIuMzM1NCA5LjEzNTIxQzI4LjY0NDMgOC45Mjg4OCAyNC44Mjk1IDkuNzIzMTggMjEuMzMzNiAxMS40MTI5QzIwLjkxMjMgMTEuNTkwMSAyMC41Mzc2IDExLjgxMDEgMjAuMTcyMiAxMi4wMjQ5TDIwLjAxMDggMTIuMTE3OUMxOS44Nzc0IDEyLjE5NTEgMTkuNzQ0MSAxMi4yNzI0IDE5LjYwOCAxMi4zNTM2QzE5LjMyNTMgMTIuNTE0NiAxOS4wNDkyIDEyLjY3NDQgMTguNzU0NCAxMi44NzkyQzE4LjU0NjMgMTMuMDMyOSAxOC4zMzk1IDEzLjE3NTkgMTguMTMwMSAxMy4zMjNDMTcuNTY1OCAxMy43MjA4IDE2Ljk4NjggMTQuMTMxNyAxNi40OTgzIDE0LjU5NzlDMTQuODQ3NiAxNS45NTI0IDEzLjU1NzEgMTcuNjA3NSAxMi42MDcxIDE4LjkyMTRDMTAuNDM2NSAyMi4xNTY2IDkuMDg2MjIgMjUuOTU2NyA4LjgwNzAyIDI5LjYxNDNMOC43NzY0IDMwLjE1ODhDOC43MzMyOCAzMC45MTk2IDguNjg0NzYgMzEuNzA1NyA4Ljc1MzUzIDMyLjQ1NTVDOC43NjY0OCAzMi42MDg0IDguNzY2MSAzMi43NjM4IDguNzc1MDYgMzIuOTE0QzguNzg4OTUgMzMuMjI5IDguODAxNTIgMzMuNTM3MyA4Ljg0NiAzMy44NjcyTDkuMDczOTYgMzUuNDIyMUM5LjA5NzU2IDM1LjU3NjQgOS4xMTk4IDM1Ljc0MTMgOS4xNjMzIDM1LjkyNjNMOS42NTkxOSAzNy45MjcyTDEwLjEzOCAzOS4yODIzQzEwLjI3MjkgMzkuNjY3MyAxMC40MTU4IDQwLjA3NTEgMTAuNiA0MC40M0MxMi4wMjkyIDQzLjYzNyAxNC4xNDI1IDQ2LjQ1NzggMTYuNzA2MyA0OC41ODVDMTkuMDUwOCA1MC41Mjk2IDIxLjgyNCA1Mi4wMDIzIDI0Ljc0OTEgNTIuODQ1MkwyNi4yMzcxIDUzLjIzNzZDMjYuMzc4MSA1My4yNjkzIDI2LjQ5MjYgNTMuMjg4OSAyNi42MDMxIDUzLjMwNThMMjYuNzc3NSA1My4zMzExQzI3LjAwNTIgNTMuMzYzNiAyNy4yMTk1IDUzLjM5ODYgMjcuNDQ0NSA1My40MzVDMjcuODU5OCA1My41MDc2IDI4LjI2NzIgNTMuNTc0OCAyOC43MDc5IDUzLjYxODNMMzAuNTY0MSA1My43MjI5QzMwLjk1MTYgNTMuNzI0OSAzMS4zMzUyIDUzLjcwNjggMzEuNzA4MSA1My42ODc0QzMxLjkwMzkgNTMuNjgxIDMyLjA5ODQgNTMuNjY4MSAzMi4zMjg4IDUzLjY2MkMzNC41MjUzIDUzLjQ3NzIgMzYuNTEwNiA1My4wNjM0IDM4LjA1MTYgNTIuNDY1MkMzOC4xNzY5IDUyLjQxNzEgMzguMzAwOCA1Mi4zNzk2IDM4LjQyMzQgNTIuMzM1NUMzOC42NzI3IDUyLjI0OTkgMzguOTI1OSA1Mi4xNjcgMzkuMTQzMiA1Mi4wNTk5TDQwLjg1OTEgNTEuMjYyNkw0Mi41NzAyIDUwLjI2NkM0Mi45MDA5IDUwLjA2ODIgNDMuMDIwNSA0OS42NDE0IDQyLjgyODIgNDkuMjk4NEM0Mi42MzIgNDguOTUyNiA0Mi4yMDM0IDQ4LjgzMDggNDEuODYzNCA0OS4wMTY2TDQwLjE3OTIgNDkuOTIxOEwzOC40OTk1IDUwLjYyMjRDMzguMzE2OSA1MC42OTUzIDM4LjEyMSA1MC43NTM0IDM3LjkyMjQgNTAuODE1NUMzNy43ODM4IDUwLjg0ODkgMzcuNjUxOCA1MC44OTgzIDM3LjUwMTIgNTAuOTQwOEMzNi4wNzExIDUxLjQzNSAzNC4yNDQ1IDUxLjc0MjUgMzIuMjQ0IDUxLjgzNDZDMzIuMDQ0MiA1MS44MzgzIDMxLjg0NzEgNTEuODM3OSAzMS42NTQgNTEuODQwM0MzMS4zMDUxIDUxLjg0MTQgMzAuOTYwMiA1MS44NDUxIDMwLjYzOTIgNTEuODMwNUwyOC45MTc3IDUxLjY3MjVDMjguNTQ3NiA1MS42MTkgMjguMTY5NSA1MS41NDI3IDI3Ljc4NDggNTEuNDY3OEMyNy41NjM5IDUxLjQxNjcgMjcuMzM3NiA1MS4zNzM3IDI3LjEyOTkgNTEuMzM3NEwyNi45NTI5IDUxLjI5ODdDMjYuODcwNCA1MS4yODM0IDI2Ljc3NzIgNTEuMjY2NyAyNi43MzMzIDUxLjI1NDNMMjUuMzQ2NiA1MC44MzIyQzIyLjc2NTEgNDkuOTc4OSAyMC4zMyA0OC41NzI5IDE4LjI5NDIgNDYuNzU1N0MxNi4xMDU2IDQ0Ljc5NTEgMTQuMzMzOSA0Mi4yMzM1IDEzLjE3NDIgMzkuMzU4MkMxMi4wMjc2IDM2LjYwMTMgMTEuNTk4OCAzMy4yNzkyIDExLjk3MTYgMzAuMDA3NkMxMi4zMTQ1IDI3LjAyMTMgMTMuMzk0OCAyNC4xNjM1IDE1LjE4NTggMjEuNTA4M0MxNS4zMDM0IDIxLjMzMzkgMTUuNDIxIDIxLjE1OTYgMTUuNTIxMiAyMS4wMTk2QzE2LjQzMDkgMTkuODY4OCAxNy41NDA4IDE4LjU1ODkgMTguOTQ4MyAxNy40OTZDMTkuMzM2NyAxNy4xNTI1IDE5Ljc4NjIgMTYuODU2IDIwLjI2MTEgMTYuNTQ3OEMyMC40ODc4IDE2LjQwMDkgMjAuNzA3OSAxNi4yNTUzIDIwLjg5MDcgMTYuMTMwNkMyMS4wOTc0IDE2LjAwNDggMjEuMzE4OCAxNS44ODMxIDIxLjUzNDggMTUuNzY5NEMyMS42NzYxIDE1LjY5NzUgMjEuODE2MiAxNS42MTkgMjEuOTM4OCAxNS41NTc2TDIyLjEwMDIgMTUuNDY0NkMyMi40MDAyIDE1LjMwMzcgMjIuNjc0OSAxNS4xNTQ2IDIyLjk5MDggMTUuMDM5TDI0LjExODYgMTQuNTcxNUMyNC4zMzk5IDE0LjQ4NDQgMjQuNTcxOCAxNC40MTU5IDI0Ljc5OTcgMTQuMzQ0N0MyNC45NTMgMTQuMjk4MiAyNS4wOTgyIDE0LjI2MzUgMjUuMjYzNSAxNC4yMDc4QzI1Ljc4NiAxNC4wMTgyIDI2LjMyODMgMTMuOTExMiAyNi45MTA1IDEzLjc5NjVDMjcuMTE3IDEzLjc1NzEgMjcuMzMwMiAxMy43MTYzIDI3LjU2MDggMTMuNjU4NUMyNy43NTUzIDEzLjYxMSAyNy45NzM3IDEzLjU5NjkgMjguMjA4MiAxMy41NzYyQzI4LjM2NCAxMy41NjAzIDI4LjUxNzIgMTMuNTQ4MyAyOC42MzE4IDEzLjUzMzNDMjguNzg3NiAxMy41MTczIDI4LjkzNDIgMTMuNTA2NiAyOS4wOTI3IDEzLjQ4NjdDMjkuMzI4NSAxMy40NTU1IDI5LjU0NTYgMTMuNDM0NyAyOS43NDk0IDEzLjQzMzdDMzAuMDIzNyAxMy40NCAzMC4yOTk0IDEzLjQzNTcgMzAuNTc3NyAxMy40Mjc0QzMxLjA4MTEgMTMuNDIxIDMxLjU1NzkgMTMuNDE5NyAzMi4wMzE4IDEzLjQ5MTRDMzQuOTY2NCAxMy43MzUyIDM3LjcxNDQgMTQuNjA4NSA0MC4yMDUyIDE2LjA4NjhDNDIuMzQ4OSAxNy4zNjU1IDQ0LjI3MTYgMTkuMTUyNSA0NS43NjA3IDIxLjI2NEM0Ny4wMjU1IDIzLjA2MjggNDcuOTc1NiAyNS4wNTI4IDQ4LjQ5MjggMjcuMDM5M0M0OC41NzIgMjcuMzE3NiA0OC42Mjk5IDI3LjU5MzEgNDguNjgzOSAyNy44NjU5QzQ4LjcxNTQgMjguMDQyOCA0OC43NTYzIDI4LjIxNDUgNDguNzg5MiAyOC4zNjM2QzQ4LjgwMzcgMjguNDU0MSA0OC44MjA4IDI4LjU0MDYgNDguODQ0NSAyOC42MjU4QzQ4Ljg3NDkgMjguNzQ0MyA0OC44OTg2IDI4Ljg2NCA0OC45MTE2IDI4Ljk2NTFMNDguOTc5MyAyOS42MDQ3QzQ4Ljk5MjIgMjkuNzc0OCA0OS4wMTMyIDI5LjkzMzEgNDkuMDMwMSAzMC4wODg3QzQ5LjA2NjggMzAuMzI2OCA0OS4wODg5IDMwLjU2MDggNDkuMDk2NCAzMC43NTYxTDQ5LjEwODMgMzEuOTAwMUM0OS4xMzEyIDMyLjMzMDcgNDkuMDg5IDMyLjcxMTYgNDkuMDUyMiAzMy4wNjczQzQ5LjAzODQgMzMuMjU5OCA0OS4wMTI2IDMzLjQ0NDMgNDkuMDEyMyAzMy41ODI0QzQ4Ljk5NjEgMzMuNjkyNiA0OC45OTE4IDMzLjc5MzUgNDguOTgzNiAzMy44OTE3QzQ4Ljk3NTMgMzQuMDA3MiA0OC45NzI0IDM0LjExNDggNDguOTQxNCAzNC4yNTU0TDQ4LjU0NDkgMzYuMzA1OUM0OC4zMTM0IDM3Ljg2MjMgNDkuMzc5MyAzOS4zMzY1IDUwLjk0ODggMzkuNTgyMkM1Mi4wNDE3IDM5Ljc2MDEgNTMuMTUzNiAzOS4yODE5IDUzLjc3MTEgMzguMzY2NEM1NC4wMDYzIDM4LjAxNzYgNTQuMTYwNCAzNy42MjU3IDU0LjIyMjcgMzcuMjA2NEw1NC41MjE3IDM1LjI1NzRDNTQuNTUxNCAzNS4wNzU2IDU0LjU3MiAzNC44MyA1NC41ODQ2IDM0LjU3OTFMNTQuNjAyOCAzNC4yMzM4QzU0LjYwOTggMzQuMDU5OCA1NC42MjIzIDMzLjg3NzkgNTQuNjM0NyAzMy42Nzg4QzU0LjY3MzQgMzMuMTA1MiA1NC43MTYzIDMyLjQ0NzkgNTQuNjYxOSAzMS44MDU4TDU0LjU4NjcgMzAuNDI4OUM1NC41NjIyIDMwLjA5NTIgNTQuNTA5NyAyOS43NiA1NC40NTU5IDI5LjQxODFDNTQuNDMxIDI5LjI1NzIgNTQuNDA0OCAyOS4wODk2IDU0LjM4MjYgMjguOTA3NEw1NC4yNjg3IDI4LjEwNEM1NC4yMzMyIDI3LjkyNDQgNTQuMTgwNCAyNy43MjczIDU0LjEzMjkgMjcuNTM5Nkw1NC4wNjQzIDI3LjI0NTRDNTQuMDE5NSAyNy4wNzEgNTMuOTc3MyAyNi44OTI3IDUzLjkzMzggMjYuNzA3NkM1My44NDU1IDI2LjMzMDkgNTMuNzQ3OSAyNS45NDIyIDUzLjYxMyAyNS41NTcxQzUyLjg0IDIzLjAyOTIgNTEuNTM4MyAyMC41MTk0IDQ5LjgzMzggMTguMjc5OUM0Ny44NTQ0IDE1LjY4MiA0NS4zMzMzIDEzLjUwODcgNDIuNTU2MyAxMS45ODE2WiIgZmlsbD0iIzQ5NDVGRiIvPgo8L3N2Zz4K","aria-hidden":!0,small:r}))}));E.displayName="Loader",E.defaultProps={small:!1},E.propTypes={children:g.a.string.isRequired,small:g.a.bool}},function(e,n){e.exports=d},function(e,n,t){"use strict";t.r(n),t.d(n,"KeyboardNavigable",(function(){return b}));var r=t(6),a=t.n(r),o=t(28),i=t.n(o),c=t(5),l=t.n(c),u=t(1),d=t.n(u),s=t(0),p=t.n(s),f=t(4),g=t(11),h=["tagName","attributeName"],b=function(e){var n=e.tagName,t=e.attributeName,r=l()(e,h),o=function(){var e=document.activeElement;return n?e.tagName.toLowerCase()===n:e.hasAttribute(t)},c=function(e){return n?e.querySelectorAll(n):e.querySelectorAll("[".concat(t,"]"))};return d.a.createElement(f.Box,a()({onKeyDown:function(e){switch(e.key){case g.a.RIGHT:case g.a.DOWN:e.preventDefault();var n=document.activeElement;if(o()){e.preventDefault();var t=i()(c(e.currentTarget)),r=t.findIndex((function(e){return e===n}));t[r+1<t.length?r+1:0].focus()}break;case g.a.LEFT:case g.a.UP:e.preventDefault();var a=document.activeElement;if(o()){e.preventDefault();var l=i()(c(e.currentTarget)),u=l.findIndex((function(e){return e===a}));l[u-1>-1?u-1:l.length-1].focus()}break;case g.a.HOME:if(o())e.preventDefault(),c(e.currentTarget).item(0).focus();break;case g.a.END:if(o()){e.preventDefault();var d=c(e.currentTarget);d.item(d.length-1).focus()}}}},r))};b.defaultProps={attributeName:void 0,tagName:void 0},b.propTypes={attributeName:p.a.string,tagName:p.a.string}},function(e,n,t){"use strict";t.r(n),t.d(n,"BaseLink",(function(){return m}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(2),h=["href","rel","target","disabled","isExternal"],b=t.n(g).a.a(r||(r=u()(["\n  cursor: pointer;\n"]))),m=s.a.forwardRef((function(e,n){var t=e.href,r=e.rel,a=e.target,i=e.disabled,l=e.isExternal,u=c()(e,h);return s.a.createElement(b,o()({ref:n,target:l?"_blank":a,rel:l?r:void 0,href:i?"#":t,disabled:i},u))}));m.displayName="BaseLink",m.defaultProps={disabled:!1,href:void 0,isExternal:!1,rel:"noreferrer noopener",target:"_self"},m.propTypes={disabled:f.a.bool,href:f.a.string,isExternal:f.a.bool,rel:f.a.string,target:f.a.string}},function(e,n,t){"use strict";t.r(n),t.d(n,"TextInput",(function(){return b}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(16),p=t(26),f=t(27),g=t(15),h=["size","startAction","endAction","name","hint","error","label","labelAction","id","required"],b=l.a.forwardRef((function(e,n){var t=e.size,r=e.startAction,o=e.endAction,u=e.name,d=e.hint,f=e.error,b=e.label,m=e.labelAction,v=e.id,y=e.required,x=i()(e,h),E=Object(g.a)("textinput",v),M=Object(c.useRef)(null);if(!b&&!x["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return Object(c.useImperativeHandle)(n,(function(){return{inputWrapperRef:M}})),l.a.createElement("div",{ref:M},l.a.createElement(s.Field,{name:u,hint:d,error:f,id:E},l.a.createElement(p.Stack,{spacing:1},b&&l.a.createElement(s.FieldLabel,{required:y,action:m},b),l.a.createElement(s.FieldInput,a()({size:t,ref:n,startAction:r,endAction:o},x)),l.a.createElement(s.FieldHint,null),l.a.createElement(s.FieldError,null))))}));b.displayName="TextInput",b.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,startAction:void 0,size:"M",endAction:void 0,required:!1},b.propTypes={"aria-label":d.a.string,endAction:d.a.element,error:d.a.string,hint:d.a.string,id:d.a.string,label:d.a.string,labelAction:d.a.element,name:d.a.string.isRequired,required:d.a.bool,size:d.a.oneOf(Object.keys(f.a.input)),startAction:d.a.element}},function(e,n,t){"use strict";t.r(n),t.d(n,"ToggleCheckbox",(function(){return D}));var r,a,o,i,c=t(6),l=t.n(c),u=t(5),d=t.n(u),s=t(3),p=t.n(s),f=t(1),g=t.n(f),h=t(0),b=t.n(h),m=t(2),v=t.n(m),y=t(27),x=t(14),E=t(8),M=t(21),T=t(4),w=t(9),O=["size","onLabel","offLabel","children","checked","disabled","onChange"],j=v.a.label(r||(r=p()(["\n  position: relative;\n  display: inline-block;\n"]))),C=v()(T.Box)(a||(a=p()(["\n  height: ",";\n  cursor: ",";\n  // Masks the background of each value\n  overflow: hidden;\n\n  ","\n"])),Object(x.b)("input"),(function(e){return e.disabled?"not-allowed":void 0}),Object(x.c)()),N=v()(w.Flex).attrs({hasRadius:!0})(o||(o=p()(["\n  background-color: ",";\n  border: 1px solid\n    ",";\n  position: relative;\n  user-select: none;\n  z-index: 2;\n"])),(function(e){var n=e.theme,t=e.disabled;return e.checked&&!t?n.colors.neutral0:"transparent"}),(function(e){var n=e.theme,t=e.disabled,r=e.checked;return r&&null!==r&&!t?n.colors.neutral200:n.colors.neutral100})),k=v.a.input(i||(i=p()(["\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  width: 100%;\n"]))),D=g.a.forwardRef((function(e,n){var t=e.size,r=e.onLabel,a=e.offLabel,o=e.children,i=e.checked,c=e.disabled,u=e.onChange,s=d()(e,O),p=i||null===i?"neutral600":"danger700",f=i?"primary600":"neutral600",h=function(e){c||u(e)};return g.a.createElement(j,null,g.a.createElement(M.VisuallyHidden,null,o),g.a.createElement(C,{background:"neutral100",hasRadius:!0,size:t,disabled:c,padding:1,display:"inline-flex",backgroundColor:"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200"},g.a.createElement(N,{paddingLeft:7,paddingRight:7,"aria-hidden":!0,checked:null!==i&&!i,disabled:c},g.a.createElement(E.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:c?"neutral600":p},a)),g.a.createElement(N,{paddingLeft:7,paddingRight:7,"aria-hidden":!0,checked:null!==i&&i,disabled:c},g.a.createElement(E.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:c?"neutral600":f},r)),g.a.createElement(k,l()({type:"checkbox","aria-disabled":c,onChange:function(e){return h(e)},ref:n},s,{checked:i}))))}));D.displayName="ToggleCheckbox",D.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"},D.propTypes={checked:b.a.bool,children:b.a.string.isRequired,disabled:b.a.bool,offLabel:b.a.string.isRequired,onChange:b.a.func,onLabel:b.a.string.isRequired,size:b.a.oneOf(Object.keys(y.a.input))}},function(e,n){e.exports=s},function(e,n){e.exports=p},function(e,n){e.exports=f},function(e,n){e.exports=g},function(e,n){e.exports=h},function(e,n){e.exports=b},function(e,n,t){"use strict";t.r(n);var r=t(77);t.d(n,"BaseRadio",(function(){return r.a}));var a=t(76);t.d(n,"RadioGroup",(function(){return a.a}))},function(e,n,t){"use strict";t.r(n);var r=t(78);t.d(n,"Loader",(function(){return r.a}))},function(e,n,t){"use strict";t.r(n),t.d(n,"DatePicker",(function(){return ee}));var r,a,o,i,c,l,u=t(6),d=t.n(u),s=t(10),p=t.n(s),f=t(5),g=t.n(f),h=t(1),b=t.n(h),m=t(0),v=t.n(m),y=t(87),x=t.n(y),E=t(34),M=t.n(E),T=t(27),w=t(82),O=t(3),j=t.n(O),C=t(2),N=t.n(C),k=t(32),D=t(40),z=t(4),I=N()(D.Popover)(r||(r=j()(["\n  max-height: ","rem;\n  overflow: hidden;\n"])),18),L=N.a.button(a||(a=j()(["\n  border: none;\n  background: transparent;\n  border-radius: ",";\n  cursor: ",";\n\n  & svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e["aria-disabled"]?"not-allowed":void 0}),(function(e){return e.theme.colors.neutral500})),A=N.a.div(o||(o=j()(["\n  ","\n"])),(function(e){var n=e.bold,t=e.theme;return n?"& ".concat(k.b," {\n  border: 1px solid ").concat(t.colors.primary600,";\n}"):void 0})),R=N()(z.Box)(i||(i=j()(["\n  background: transparent;\n  border: none;\n  position: relative;\n  z-index: 1;\n\n  svg {\n    height: ","rem;\n    width: ","rem;\n  }\n\n  svg path {\n    fill: ",";\n  }\n"])),11/16,11/16,(function(e){return e.theme.colors.neutral600})),S=t(21),B=t(60),P=t(9),q=t(48),F=t(8),U=["children"],Q=N()(q.RawTh)(c||(c=j()(["\n  // Trick to prevent the outline from overflowing because of the general outline-offset\n  outline-offset: -2px;\n  border-radius: ",";\n  text-transform: capitalize;\n"])),(function(e){return e.theme.borderRadius})),W=N()(P.Flex)(l||(l=j()(["\n  height: ","rem;\n  width: ","rem;\n"])),1.5,2),Y=function(e){var n=e.children,t=g()(e,U);return b.a.createElement(Q,t,b.a.createElement(W,{justifyContent:"center"},b.a.createElement(F.Typography,{variant:"pi",fontWeight:"bold",color:"neutral800","aria-hidden":!0},n.substr(0,2)),b.a.createElement(S.VisuallyHidden,null,b.a.createElement("span",null,n))))};Y.propTypes={children:v.a.string.isRequired};var H,_=["children","outsideMonth","onSelectDay","isSelected"],G=N.a.button(H||(H=j()(["\n  border: none;\n  background: ",";\n  height: ","rem;\n  text-align: center;\n  width: ","rem;\n  border-radius: ",";\n\n  // Trick to prevent the outline from overflowing because of the general outline-offset\n  outline-offset: -2px;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:hover > "," {\n    color: ",";\n  }\n"])),(function(e){var n=e.theme;return e.isSelected?n.colors.primary100:n.colors.neutral0}),2,2,(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.primary100}),F.Typography,(function(e){return e.theme.colors.primary600})),V=function(e){var n=e.children,t=e.outsideMonth,r=e.onSelectDay,a=e.isSelected,o=g()(e,_),i=a?"primary600":t?"neutral600":"neutral900";return b.a.createElement(q.RawTd,o,b.a.createElement(G,{tabIndex:-1,onClick:r,isSelected:a,type:"button"},b.a.createElement(F.Typography,{variant:"pi",textColor:i,fontWeight:a?"bold":null},n)))};V.defaultProps={isSelected:!1,outsideMonth:!1},V.propTypes={children:v.a.node.isRequired,isSelected:v.a.bool,onSelectDay:v.a.func.isRequired,outsideMonth:v.a.bool};var K=t(53),Z=function(e){return(new Intl.DateTimeFormat).format(e)},X=function(e){var n,t=e.selectedDate,r=e.initialDate,a=e.popoverSource,o=e.onChange,i=e.label,c=e.minDate,l=e.maxDate,u=e.onEscape,d=Object(h.useState)(r),s=p()(d,2),f=s[0],g=s[1],m=function(e,n){for(var t,r,a,o=new Date(e.getFullYear(),e.getMonth(),1),i=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),c=new Date(e.getFullYear(),e.getMonth(),0).getDate(),l=o.getDay(),u=i+l,d=[],s=0,p=0,f=0,g=0;g<42;g++)g>6&&g%7==0&&f++,d[f]||(d[f]=[]),t=g<l?{date:new Date(e.getFullYear(),e.getMonth()-1,c-l+g+1),outsideMonth:!0}:g<u?{date:new Date(e.getFullYear(),e.getMonth(),g-l+1)}:{date:new Date(e.getFullYear(),e.getMonth()+1,g-l-i+1),outsideMonth:!0},r=n,a=t.date,r&&a&&r.getFullYear()===a.getFullYear()&&r.getMonth()===a.getMonth()&&r.getDate()===a.getDate()&&(s=f+1,p=d[f].length,t.isSelected=!0),d[f].push(t);return[d,s,p]}(f,t),v=p()(m,3),y=v[0],x=v[1],E=v[2],M=function(){var e=new Intl.DateTimeFormat(void 0,{weekday:"long"}).format,n=new Date(1970,0,1),t=new Date(1970,0,2),r=new Date(1970,0,3),a=new Date(1970,0,4),o=new Date(1970,0,5),i=new Date(1970,0,6),c=new Date(1970,0,7);return{sun:e(a),mon:e(o),tue:e(i),wed:e(c),thu:e(n),fri:e(t),sat:e(r)}}(),T=M.sun,w=M.mon,O=M.tue,j=M.wed,C=M.thu,N=M.fri,k=M.sat,D=(n=new Intl.DateTimeFormat(void 0,{month:"long"}).format,Array(12).fill(null).map((function(e,t){return n(new Date(1970,t,1))}))),L=function(e,n){for(var t,r,a=(new Date).getFullYear(),o=null!==(t=null==e?void 0:e.getFullYear())&&void 0!==t?t:parseInt(a,10)-200,i=null!==(r=null==n?void 0:n.getFullYear())&&void 0!==r?r:parseInt(a,10)+15,c=[],l=o;l<=i;l++)c.push(l);return c}(c,l);Object(h.useEffect)((function(){t&&g(t)}),[t]);return b.a.createElement(I,{source:a,role:"dialog","aria-modal":"true","aria-label":i,spacing:4},b.a.createElement(K.FocusTrap,{onEscape:u},b.a.createElement(z.Box,{padding:4},b.a.createElement(z.Box,{paddingBottom:4,paddingLeft:2,paddingRight:2},b.a.createElement(P.Flex,null,b.a.createElement(B.SimpleMenu,{label:D[f.getMonth()]},D.map((function(e){return b.a.createElement(B.MenuItem,{key:e,onClick:function(){return function(e){var n=new Date(f);n.setMonth(D.indexOf(e)),g(n)}(e)}},e)}))),b.a.createElement(z.Box,{paddingLeft:2},b.a.createElement(B.SimpleMenu,{label:f.getFullYear()},L.map((function(e){return b.a.createElement(B.MenuItem,{key:e,onClick:function(){return function(e){var n=new Date(f);n.setFullYear(e),g(n)}(e)}},e)})))))),b.a.createElement(q.RawTable,{colCount:7,rowCount:y.length+1,initialCol:E,initialRow:x,role:"grid"},b.a.createElement(q.RawThead,null,b.a.createElement(q.RawTr,null,b.a.createElement(Y,null,T),b.a.createElement(Y,null,w),b.a.createElement(Y,null,O),b.a.createElement(Y,null,j),b.a.createElement(Y,null,C),b.a.createElement(Y,null,N),b.a.createElement(Y,null,k))),b.a.createElement(q.RawTbody,null,y.map((function(e,n){return b.a.createElement(q.RawTr,{key:"week-".concat(n)},e.map((function(e){var n=e.date,t=e.outsideMonth,r=e.isSelected;return b.a.createElement(V,{key:"".concat(n.getFullYear(),"-").concat(n.getMonth()+1,"-").concat(n.getDate()),outsideMonth:t,onSelectDay:function(){return o(n)},isSelected:r},b.a.createElement("span",{"aria-hidden":!0},n.getDate()),b.a.createElement(S.VisuallyHidden,null,b.a.createElement("span",null,Z(n))))})))})))))))};X.defaultProps={selectedDate:void 0,initialDate:new Date},X.propTypes={initialDate:v.a.instanceOf(Date),label:v.a.string.isRequired,maxDate:v.a.instanceOf(Date),minDate:v.a.instanceOf(Date),onChange:v.a.func.isRequired,onEscape:v.a.func.isRequired,popoverSource:v.a.shape({current:v.a.instanceOf(Element)}).isRequired,selectedDate:v.a.instanceOf(Date)};var J=t(15),$=["ariaLabel","initialDate","selectedDate","size","onChange","label","selectedDateLabel","onClear","clearLabel","disabled","minDate","maxDate","placeholder","id"],ee=function(e){var n=e.ariaLabel,t=e.initialDate,r=e.selectedDate,a=e.size,o=e.onChange,i=e.label,c=e.selectedDateLabel,l=e.onClear,u=e.clearLabel,s=e.disabled,f=e.minDate,m=e.maxDate,v=e.placeholder,y=e.id,E=g()(e,$),T=Object(J.a)("datepicker",y),O=Object(h.useState)(!1),j=p()(O,2),C=j[0],N=j[1],k=Object(h.useRef)(null),D=Object(h.useRef)(null),z=r?Z(r):"",I=function(){s||N((function(e){return!e}))};return b.a.createElement(A,{bold:C},b.a.createElement(w.TextInput,d()({ref:k,onClick:I,onChange:function(){},value:z,placeholder:v||Z(new Date(1970,0,1)),size:a,startAction:b.a.createElement(L,{ref:D,onClick:I,"aria-label":r?c(Z(r)):i,type:"button","aria-disabled":s},b.a.createElement(x.a,{"aria-hidden":!0})),endAction:l&&z?b.a.createElement(R,{as:"button",onClick:function(){s||(l(),D.current.focus())},"aria-label":u,"aria-disabled":s},b.a.createElement(M.a,null)):void 0,"aria-autocomplete":"none",label:i,"aria-label":n,disabled:s,id:T},E)),k.current&&k.current.inputWrapperRef&&C&&b.a.createElement(X,{selectedDate:r,initialDate:t,onChange:function(e){o(e),N(!1)},onEscape:function(){N(!1)},popoverSource:k.current.inputWrapperRef,label:i||n,minDate:f,maxDate:m}))};ee.defaultProps={ariaLabel:void 0,clearLabel:void 0,disabled:!1,id:void 0,label:void 0,initialDate:new Date,onClear:void 0,placeholder:void 0,selectedDate:void 0,size:"M"},ee.propTypes={ariaLabel:v.a.string,clearLabel:v.a.string,disabled:v.a.bool,id:v.a.string,initialDate:v.a.instanceOf(Date),label:v.a.string,maxDate:v.a.instanceOf(Date),minDate:v.a.instanceOf(Date),onChange:v.a.func.isRequired,onClear:v.a.func,placeholder:v.a.string,selectedDate:v.a.instanceOf(Date),selectedDateLabel:v.a.func.isRequired,size:v.a.oneOf(Object.keys(T.a.input))}},function(e,n,t){"use strict";t.r(n),t.d(n,"Card",(function(){return b})),t.d(n,"CardAction",(function(){return O})),t.d(n,"CardAsset",(function(){return z})),t.d(n,"CardBadge",(function(){return q})),t.d(n,"CardBody",(function(){return F})),t.d(n,"CardCheckbox",(function(){return Q})),t.d(n,"CardContent",(function(){return H})),t.d(n,"CardHeader",(function(){return V})),t.d(n,"CardTimer",(function(){return J})),t.d(n,"CardTitle",(function(){return $})),t.d(n,"CardSubtitle",(function(){return ee}));var r=t(6),a=t.n(r),o=t(5),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(4),p=Object(c.createContext)(),f=function(){return Object(c.useContext)(p)},g=t(15),h=["id"],b=function(e){var n=e.id,t=i()(e,h),r=Object(g.a)("card",n);return l.a.createElement(p.Provider,{value:{id:r}},l.a.createElement(s.Box,a()({id:n,tabIndex:0,hasRadius:!0,background:"neutral0",shadow:"tableShadow",as:"article","aria-labelledby":"".concat(r,"-title")},t)))};b.defaultProps={id:void 0},b.propTypes={id:d.a.string};var m,v,y,x=t(3),E=t.n(x),M=t(2),T=t.n(M),w=t(26),O=T()(w.Stack).attrs({horizontal:!0,spacing:2})(m||(m=E()(["\n  position: absolute;\n  top: ",";\n  right: ",";\n  left: ",";\n"])),(function(e){return e.theme.spaces[3]}),(function(e){var n=e.position,t=e.theme;return"end"===n?t.spaces[3]:void 0}),(function(e){var n=e.position,t=e.theme;return"start"===n?t.spaces[3]:void 0})),j=t(9),C=["size","children"],N=T.a.img(v||(v=E()(["\n  // inline flows is based on typography and displays an extra white space below the image\n  // switch to block is required in order to make the img stick the bottom of the container\n  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image\n  margin: 0;\n  padding: 0;\n  max-height: 100%;\n  max-width: 100%;\n  object-fit: contain;\n"]))),k={S:88,M:164},D=T.a.div(y||(y=E()(["\n  display: flex;\n  justify-content: center;\n  height: ","rem;\n  width: 100%;\n  background: repeating-conic-gradient("," 0% 25%, transparent 0% 50%) 50% / 20px\n    20px;\n"])),(function(e){var n=e.size;return k[n]/16}),(function(e){return e.theme.colors.neutral100})),z=function(e){var n=e.size,t=e.children,r=i()(e,C);return l.a.createElement(D,{size:n},t?l.a.createElement(j.Flex,null,t):l.a.createElement(N,a()({},r,{"aria-hidden":!0})))};z.defaultProps={children:void 0,size:"M"},z.propTypes={children:d.a.node,size:d.a.oneOf(["S","M"])};var I,L,A,R,S=t(52),B=T.a.div(I||(I=E()(["\n  margin-left: auto;\n  flex-shrink: 0;\n"]))),P=T()(S.Badge)(L||(L=E()(["\n  margin-left: ",";\n"])),(function(e){return e.theme.spaces[1]})),q=function(e){return l.a.createElement(B,null,l.a.createElement(P,e))},F=function(e){return l.a.createElement(s.Box,{paddingLeft:3,paddingRight:3,paddingTop:2,paddingBottom:2},l.a.createElement(j.Flex,a()({},e,{alignItems:"flex-start"})))},U=t(61),Q=function(e){var n=f().id;return l.a.createElement(O,{position:"start"},l.a.createElement(U.BaseCheckbox,a()({"aria-labelledby":"".concat(n,"-title")},e)))},W=["children"],Y=T()(s.Box)(A||(A=E()(["\n  word-break: break-all;\n"]))),H=function(e){var n=e.children,t=i()(e,W);return l.a.createElement(Y,t,n)};H.propTypes={children:d.a.node.isRequired};var _,G=T()(j.Flex)(R||(R=E()(["\n  position: relative;\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.neutral150})),V=function(e){return l.a.createElement(G,a()({justifyContent:"center"},e))},K=t(8),Z=["children"],X=T()(s.Box)(_||(_=E()(["\n  position: absolute;\n  bottom: ",";\n  right: ",";\n"])),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),J=function(e){var n=e.children,t=i()(e,Z);return l.a.createElement(X,a()({padding:1,background:"neutral800",color:"neutral0",as:"time",hasRadius:!0},t),l.a.createElement(K.Typography,{variant:"pi",textColor:"neutral0"},n))};J.propTypes={children:d.a.string.isRequired};var $=function(e){var n=f().id;return l.a.createElement(K.Typography,a()({variant:"pi",id:"".concat(n,"-title"),textColor:"neutral800",fontWeight:"bold",as:"div"},e))},ee=function(e){return l.a.createElement(K.Typography,a()({variant:"pi"},e,{textColor:"neutral600",as:"div"}))}},function(e,n,t){"use strict";t.r(n),t.d(n,"MainNav",(function(){return E})),t.d(n,"NavBrand",(function(){return z})),t.d(n,"NavLink",(function(){return W})),t.d(n,"NavSection",(function(){return G})),t.d(n,"NavSections",(function(){return K})),t.d(n,"NavUser",(function(){return ee})),t.d(n,"NavCondense",(function(){return ue}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(2),f=t.n(p),g=t(0),h=t.n(g),b=t(49),m=Object(d.createContext)(),v=function(){return Object(d.useContext)(m)},y=["condensed"],x=f()(b.Grid)(r||(r=u()(["\n  width: ",";\n  background: ",";\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 2;\n  border-right: 1px solid ",";\n"])),(function(e){return e.condensed?"max-content":"".concat(14,"rem")}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.neutral150})),E=function(e){var n=e.condensed,t=c()(e,y);return s.a.createElement(m.Provider,{value:n},s.a.createElement(x,o()({as:"nav",condensed:n},t)))};E.defaultProps={condensed:!1},E.propTypes={condensed:h.a.bool};var M,T,w=t(36),O=t(4),j=t(8),C=t(9),N=t(21),k=f.a.div(M||(M=u()(["\n  border-radius: ",";\n  svg,\n  img {\n    height: ",";\n    width: ",";\n  }\n"])),(function(e){return e.theme.borderRadius}),(function(e){var n=e.condensed;return"".concat(n?2.5:2,"rem")}),(function(e){var n=e.condensed;return"".concat(n?2.5:2,"rem")})),D=f()(w.NavLink)(T||(T=u()(["\n  text-decoration: unset;\n  color: inherit;\n"]))),z=function(e){var n=e.workplace,t=e.title,r=e.icon,a=e.to;return v()?s.a.createElement(O.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},s.a.createElement(k,{condensed:!0},s.a.createElement(w.NavLink,{to:a},r,s.a.createElement(N.VisuallyHidden,null,s.a.createElement("span",null,t),s.a.createElement("span",null,n))))):s.a.createElement(O.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4},s.a.createElement(C.Flex,null,s.a.createElement(k,{as:w.NavLink,to:a,"aria-hidden":!0,tabIndex:-1},r),s.a.createElement(O.Box,{paddingLeft:2},s.a.createElement(j.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span"},s.a.createElement(D,{to:a},t,s.a.createElement(N.VisuallyHidden,{as:"span"},n))),s.a.createElement(j.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0},n))))};z.defaultProps={to:"/"},z.propTypes={icon:h.a.node.isRequired,title:h.a.string.isRequired,to:h.a.string,workplace:h.a.string.isRequired};var I,L,A,R,S=t(46),B=t(52),P=["children","icon","badgeContent","badgeAriaLabel"],q=f()(O.Box)(I||(I=u()(["\n  svg {\n    width: 1rem;\n    height: 1rem;\n  }\n"]))),F=f()(w.NavLink)(L||(L=u()(["\n  position: relative;\n  text-decoration: none;\n  display: block;\n  border-radius: ",";\n  background: ",";\n\n  "," {\n    color: ",";\n  }\n\n  svg path {\n    fill: ",";\n  }\n\n  &:hover {\n    background: ",";\n\n    "," {\n      color: ",";\n    }\n\n    svg path {\n      fill: ",";\n    }\n  }\n\n  &.active {\n    background: ",";\n\n    svg path {\n      fill: ",";\n    }\n\n    "," {\n      color: ",";\n      font-weight: 500;\n    }\n  }\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral0}),j.Typography,(function(e){return e.theme.colors.neutral600}),(function(e){return e.theme.colors.neutral500}),(function(e){return e.theme.colors.neutral100}),j.Typography,(function(e){return e.theme.colors.neutral700}),(function(e){return e.theme.colors.neutral600}),(function(e){return e.theme.colors.primary100}),(function(e){return e.theme.colors.primary600}),j.Typography,(function(e){return e.theme.colors.primary600})),U=f()(C.Flex)(A||(A=u()(["\n  padding: ",";\n"])),(function(e){var n=e.theme;return"".concat(n.spaces[2]," ").concat(n.spaces[3])})),Q=f()(B.Badge)(R||(R=u()(["\n  ","\n\n  "," {\n    //find a solution to remove !important\n    color: "," !important;\n    line-height: 0;\n  }\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: ",";\n  height: ",";\n  padding: ",";\n  border-radius: ",";\n  background: ",";\n"])),(function(e){return e.condensed&&"\n\t  position: absolute;\n    transform: translate(35%, -50%);\n    top: 0;\n    right: 0;\n  "}),j.Typography,(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.spaces[6]}),(function(e){return e.theme.spaces[5]}),(function(e){var n=e.theme;return"0 ".concat(n.spaces[2])}),(function(e){return e.theme.spaces[10]}),(function(e){return e.theme.colors.primary600})),W=function(e){var n=e.children,t=e.icon,r=e.badgeContent,a=e.badgeAriaLabel,o=c()(e,P);return v()?s.a.createElement(S.Tooltip,{position:"right",label:n},s.a.createElement(F,o,s.a.createElement(U,{as:"span"},s.a.createElement(q,{"aria-hidden":!0,paddingRight:0,as:"span"},t),r&&s.a.createElement(Q,{condensed:!0,"aria-label":a},r)))):s.a.createElement(F,o,s.a.createElement(U,{as:"span",justifyContent:"space-between"},s.a.createElement(C.Flex,null,s.a.createElement(q,{"aria-hidden":!0,paddingRight:3,as:"span"},t),s.a.createElement(j.Typography,null,n)),r&&s.a.createElement(Q,{justifyContent:"center","aria-label":a},r)))};W.displayName="NavLink",W.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0},W.propTypes={badgeAriaLabel:h.a.string,badgeContent:h.a.oneOfType([h.a.string,h.a.number]),children:h.a.string.isRequired,icon:h.a.node.isRequired};var Y=t(26),H=t(54),_=["label","children"],G=function(e){var n=e.label,t=e.children,r=c()(e,_);return v()?s.a.createElement(Y.Stack,{spacing:2},s.a.createElement(O.Box,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span"},s.a.createElement(H.Divider,null),s.a.createElement(N.VisuallyHidden,null,s.a.createElement("span",null,n))),s.a.createElement(Y.Stack,o()({as:"ul",spacing:2},r),d.Children.map(t,(function(e,n){return s.a.createElement("li",{key:n},e)})))):s.a.createElement(Y.Stack,{spacing:2},s.a.createElement(O.Box,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span"},s.a.createElement(j.Typography,{variant:"sigma",textColor:"neutral600"},n)),s.a.createElement(Y.Stack,o()({as:"ul",spacing:2},r),d.Children.map(t,(function(e,n){return s.a.createElement("li",{key:n},e)}))))};G.propTypes={children:h.a.node.isRequired,label:h.a.string.isRequired};var V=["children"],K=function(e){var n=e.children,t=c()(e,V);return s.a.createElement(O.Box,{paddingLeft:3,paddingRight:2,paddingTop:3},s.a.createElement(Y.Stack,o()({as:"ul",spacing:4},t),d.Children.map(n,(function(e,n){return s.a.createElement("li",{key:n},e)}))))};K.propTypes={children:h.a.node.isRequired};var Z,X=t(74),J=["src","children","initials"],$=f()(O.Box)(Z||(Z=u()(["\n  text-decoration: none;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid ",";\n"])),(function(e){return e.theme.colors.neutral150})),ee=s.a.forwardRef((function(e,n){var t=e.src,r=e.children,a=e.initials,i=c()(e,J),l=v();return s.a.createElement($,o()({paddingTop:3,paddingBottom:3,paddingLeft:5,paddingRight:5},i),s.a.createElement(C.Flex,{as:"button",justifyContent:l?"center":void 0,ref:n},t?s.a.createElement(X.Avatar,{src:t,alt:"","aria-hidden":!0}):s.a.createElement(X.Initials,null,a),l?s.a.createElement(N.VisuallyHidden,null,s.a.createElement("span",null,r)):s.a.createElement(O.Box,{width:"".concat(8.125,"rem"),paddingLeft:2,as:"span"},s.a.createElement(j.Typography,{ellipsis:!0,textColor:"neutral600"},r))))}));ee.displayName="NavUser",ee.defaultProps={src:void 0,initials:void 0},ee.propTypes={children:h.a.node.isRequired,initials:h.a.node,src:h.a.string};var ne,te=t(51),re=t.n(te),ae=t(58),oe=t.n(ae),ie=t(41),ce=["children"],le=f.a.button(ne||(ne=u()(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: ","rem; // 9 is the height of the svg and 4 is the padding below\n  right: ",";\n  transform: ",";\n  z-index: 2;\n  width: ","rem;\n  height: ","rem;\n\n  svg {\n    width: ","rem;\n    height: ","rem;\n  }\n"])),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.colors.neutral150}),(function(e){return e.theme.borderRadius}),13/16,(function(e){var n=e.theme;return e.condensed?0:n.spaces[5]}),(function(e){return e.condensed?"translateX(50%)":void 0}),1.125,25/16,6/16,9/16),ue=function(e){var n=e.children,t=c()(e,ce),r=v();return s.a.createElement(le,o()({as:"button",condensed:r},t),s.a.createElement(ie.Icon,{as:r?re.a:oe.a,"aria-hidden":!0,color:"neutral600"}),s.a.createElement(N.VisuallyHidden,null,n))};ue.propTypes={children:h.a.string.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"subNavWidth",(function(){return v})),t.d(n,"SubNav",(function(){return x})),t.d(n,"SubNavHeader",(function(){return R})),t.d(n,"SubNavLink",(function(){return _})),t.d(n,"SubNavLinkSection",(function(){return ne})),t.d(n,"SubNavSection",(function(){return pe})),t.d(n,"SubNavSections",(function(){return he}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(2),f=t.n(p),g=t(0),h=t.n(g),b=t(49),m=["ariaLabel"],v="".concat(14.5,"rem"),y=f()(b.Grid)(r||(r=u()(["\n  width: ",";\n  background: ",";\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n  border-right: 1px solid ",";\n  z-index: 1;\n"])),v,(function(e){return e.theme.colors.neutral100}),(function(e){return e.theme.colors.neutral200})),x=function(e){var n=e.ariaLabel,t=c()(e,m);return s.a.createElement(y,o()({"aria-label":n,as:"nav"},t))};x.propTypes={ariaLabel:h.a.string.isRequired};var E,M=t(10),T=t.n(M),w=t(71),O=t.n(w),j=t(9),C=t(8),N=t(63),k=t(4),D=t(54),z=t(75),I=t(15),L=t(11),A=f()(D.Divider)(E||(E=u()(["\n  width: ","rem;\n  background-color: ",";\n"])),1.5,(function(e){return e.theme.colors.neutral200})),R=function(e){var n=e.as,t=e.label,r=e.searchLabel,a=e.searchable,o=e.onChange,i=e.value,c=e.onClear,l=e.onSubmit,u=e.id,p=Object(d.useState)(!1),f=T()(p,2),g=f[0],h=f[1],b=function(e){var n=Object(d.useRef)();return Object(d.useEffect)((function(){n.current=e})),n.current}(g),m=Object(I.a)("subnav-searchbar-clear",u),v=Object(d.useRef)(),y=Object(d.useRef)();Object(d.useEffect)((function(){g&&v.current&&v.current.focus(),b&&!g&&y.current&&y.current.focus()}),[g]);return g?s.a.createElement(k.Box,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4},s.a.createElement(z.SearchForm,null,s.a.createElement(z.Searchbar,{name:"searchbar",value:i,onChange:o,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:function(e){e.key===L.a.ESCAPE&&h(!1)},ref:v,onBlur:function(e){var n;(null===(n=e.relatedTarget)||void 0===n?void 0:n.id)!==m&&h(!1)},onClear:function(e){c(e),v.current.focus()},onSubmit:l,clearLabel:"Clear",size:"S"},r)),s.a.createElement(k.Box,{paddingLeft:2,paddingTop:4},s.a.createElement(A,null))):s.a.createElement(k.Box,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4},s.a.createElement(j.Flex,{justifyContent:"space-between",alignItems:"flex-start"},s.a.createElement(C.Typography,{variant:"beta",as:n},t),a&&s.a.createElement(N.IconButton,{ref:y,onClick:function(){h((function(e){return!e}))},label:r,icon:s.a.createElement(O.a,null)})),s.a.createElement(k.Box,{paddingTop:4},s.a.createElement(A,null)))};R.defaultProps={as:"h2",searchable:!1,onChange:function(){},onClear:function(){},onSubmit:function(){},value:"",searchLabel:"",id:void 0},R.propTypes={as:h.a.string,id:h.a.string,label:h.a.string.isRequired,onChange:h.a.func,onClear:h.a.func,onSubmit:h.a.func,searchLabel:h.a.string,searchable:h.a.bool,value:h.a.string};var S,B,P,q=t(88),F=t.n(q),U=t(36),Q=["children","icon","withBullet"],W=f()(k.Box)(S||(S=u()(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-decoration: none;\n  color: ",";\n  svg > * {\n    fill: ",";\n  }\n\n  &.active {\n    ","\n  }\n\n  &:focus-visible {\n    outline-offset: -2px;\n  }\n"])),(function(e){return e.theme.colors.neutral800}),(function(e){return e.theme.colors.neutral600}),(function(e){var n=e.theme;return"\n      background-color: ".concat(n.colors.primary100,";\n      border-right: 2px solid ").concat(n.colors.primary600,";\n      svg > * {\n        fill: ").concat(n.colors.primary700,";\n      }\n      ").concat(C.Typography," {\n        color: ").concat(n.colors.primary700,";\n        font-weight: 500;\n      }\n      ")})),Y=f()(F.a)(B||(B=u()(["\n  width: ","rem;\n  height: ","rem;\n  * {\n    fill: ",";\n  }\n"])),.75,.25,(function(e){var n=e.theme;return e.$active?n.colors.primary600:n.colors.neutral600})),H=f.a.div(P||(P=u()(["\n  svg {\n    height: ","rem;\n    width: ","rem;\n  }\n"])),.75,.75),_=function(e){var n=e.children,t=e.icon,r=e.withBullet,a=c()(e,Q);return s.a.createElement(W,o()({as:U.NavLink,icon:t,background:"neutral100",paddingLeft:7,paddingBottom:2,paddingTop:2},a),s.a.createElement(j.Flex,null,t?s.a.createElement(H,null,t):s.a.createElement(Y,null),s.a.createElement(k.Box,{paddingLeft:2},s.a.createElement(C.Typography,{as:"span"},n))),r&&s.a.createElement(k.Box,{as:j.Flex,paddingRight:4},s.a.createElement(Y,{$active:!0})))};_.displayName="SubNavLink",_.defaultProps={icon:null,withBullet:!1},_.propTypes={children:h.a.node,icon:h.a.element,link:h.a.element,withBullet:h.a.bool};var G,V,K,Z=t(35),X=t.n(Z),J=f()(k.Box)(G||(G=u()(["\n  max-height: ","rem;\n  svg {\n    height: ","rem;\n    path {\n      fill: ",";\n    }\n  }\n"])),2,.25,(function(e){return e.theme.colors.neutral700})),$=f.a.button(V||(V=u()(["\n  border: none;\n  padding: 0;\n  background: transparent;\n  display: flex;\n  align-items: center;\n"]))),ee=f.a.div(K||(K=u()(["\n  display: flex;\n  align-items: center;\n  width: ","rem;\n  transform: rotateX(",");\n"])),.75,(function(e){return e.rotated?"0deg":"180deg"})),ne=function(e){var n=e.label,t=e.children,r=e.id,a=Object(d.useState)(!0),o=T()(a,2),i=o[0],c=o[1],l=Object(I.a)("subnav-list",r);return s.a.createElement(k.Box,null,s.a.createElement(J,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4},s.a.createElement(j.Flex,{justifyContent:"space-between"},s.a.createElement($,{onClick:function(){c((function(e){return!e}))},"aria-expanded":i,"aria-controls":l},s.a.createElement(ee,{rotated:i},s.a.createElement(X.a,{"aria-hidden":!0})),s.a.createElement(k.Box,{paddingLeft:2},s.a.createElement(C.Typography,{as:"span",fontWeight:"semiBold",textColor:"neutral800"},n))))),i&&s.a.createElement("ul",{id:l},d.Children.map(t,(function(e,n){return s.a.createElement("li",{key:n},e)}))))};ne.defaultProps={id:void 0},ne.propTypes={children:h.a.node,id:h.a.string,label:h.a.string.isRequired};var te,re,ae,oe,ie=t(52),ce=f()(j.Flex)(te||(te=u()(["\n  border: none;\n  padding: 0;\n  background: transparent;\n"]))),le=f.a.div(re||(re=u()(["\n  display: flex;\n  align-items: center;\n  transform: rotateX(",");\n"])),(function(e){return e.rotated?"0deg":"180deg"})),ue=function(e){var n=e.collapsable,t=e.label,r=e.onClick,a=e.ariaExpanded,o=e.ariaControls;return n?s.a.createElement(ce,{as:"button",onClick:r,"aria-expanded":a,"aria-controls":o},s.a.createElement(k.Box,{paddingRight:1},s.a.createElement(C.Typography,{variant:"sigma",textColor:"neutral600"},t)),n&&s.a.createElement(le,{rotated:a},s.a.createElement(X.a,{"aria-hidden":!0}))):s.a.createElement(ce,null,s.a.createElement(k.Box,{paddingRight:1},s.a.createElement(C.Typography,{variant:"sigma",textColor:"neutral600"},t)))};ue.defaultProps={ariaControls:null,ariaExpanded:null,collapsable:!1,onClick:function(){}},ue.propTypes={ariaControls:h.a.string,ariaExpanded:h.a.bool,collapsable:h.a.bool,label:h.a.string.isRequired,onClick:h.a.func};var de=f()(k.Box)(ae||(ae=u()(["\n  max-height: ","rem;\n  svg {\n    height: ","rem;\n    path {\n      fill: ",";\n    }\n  }\n"])),2,.25,(function(e){return e.theme.colors.neutral500})),se=f()(ie.Badge)(oe||(oe=u()(["\n  display: flex;\n  align-items: center;\n"]))),pe=function(e){var n=e.collapsable,t=e.label,r=e.badgeLabel,a=e.children,o=e.id,i=Object(d.useState)(!0),c=T()(i,2),l=c[0],u=c[1],p=Object(I.a)("subnav-list",o);return s.a.createElement(k.Box,null,s.a.createElement(de,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4},s.a.createElement(j.Flex,{justifyContent:"space-between"},s.a.createElement(ue,{onClick:function(){u((function(e){return!e}))},ariaExpanded:l,ariaControls:p,collapsable:n,label:t}),r&&s.a.createElement(se,{backgroundColor:"neutral150",textColor:"neutral600"},r))),(!n||l)&&s.a.createElement("ul",{id:p},d.Children.map(a,(function(e,n){return s.a.createElement("li",{key:n},e)}))))};pe.defaultProps={badgeLabel:null,collapsable:!1,id:void 0},pe.propTypes={badgeLabel:h.a.string,children:h.a.node,collapsable:h.a.bool,id:h.a.string,label:h.a.string.isRequired};var fe=t(26),ge=["children"],he=function(e){var n=e.children,t=c()(e,ge);return s.a.createElement(k.Box,{paddingTop:2,paddingBottom:4},s.a.createElement(fe.Stack,o()({as:"ul",spacing:2},t),d.Children.map(n,(function(e,n){return s.a.createElement("li",{key:n},e)}))))};he.propTypes={children:h.a.node.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return b})),t.d(n,"ActionLayout",(function(){return M})),t.d(n,"ContentLayout",(function(){return T})),t.d(n,"HeaderLayout",(function(){return R})),t.d(n,"BaseHeaderLayout",(function(){return B})),t.d(n,"TwoColsLayout",(function(){return F})),t.d(n,"GridLayout",(function(){return U}));var r,a,o=t(3),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(2),p=t.n(s),f=t(4),g=p()(f.Box)(r||(r=i()(["\n  display: grid;\n  grid-template-columns: ",";\n"])),(function(e){return e.hasSideNav?"auto 1fr":"1fr"})),h=p()(f.Box)(a||(a=i()(["\n  overflow-x: hidden;\n"]))),b=function(e){var n=e.sideNav,t=e.children;return l.a.createElement(g,{hasSideNav:Boolean(n)},n,l.a.createElement(h,{paddingBottom:10},t))};b.defaultProps={sideNav:void 0},b.propTypes={children:d.a.node.isRequired,sideNav:d.a.node};var m,v,y=t(9),x=p()(y.Flex)(m||(m=i()(["\n  & > * + * {\n    margin-left: ",";\n  }\n\n  margin-left: ",";\n"])),(function(e){return e.theme.spaces[2]}),(function(e){return e.pullRight?"auto":void 0})),E=p()(x)(v||(v=i()(["\n  flex-shrink: 0;\n"]))),M=function(e){var n=e.startActions,t=e.endActions;return n||t?l.a.createElement(f.Box,{paddingLeft:10,paddingRight:10},l.a.createElement(f.Box,{paddingBottom:4},l.a.createElement(y.Flex,{justifyContent:"space-between",alignItems:"flex-start"},n&&l.a.createElement(x,{wrap:"wrap"},n),t&&l.a.createElement(E,{pullRight:!0},t)))):null};M.defaultProps={endActions:void 0,startActions:void 0},M.propTypes={endActions:d.a.node,startActions:d.a.node};var T=function(e){var n=e.children;return l.a.createElement(f.Box,{paddingLeft:10,paddingRight:10},n)};T.propTypes={children:d.a.node.isRequired};var w,O=t(5),j=t.n(O),C=t(6),N=t.n(C),k=t(10),D=t.n(k),z=t(8),I=t(47),L=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],A=function(){var e=Object(c.useRef)(null),n=Object(c.useState)(null),t=D()(n,2),r=t[0],a=t[1],o=function(e){var n=Object(c.useRef)(null),t=Object(c.useState)(!0),r=D()(t,2),a=r[0],o=r[1],i=function(e){var n=D()(e,1)[0];o(n.isIntersecting)};return Object(c.useEffect)((function(){var t=n.current,r=new IntersectionObserver(i,e);return t&&r.observe(n.current),function(){t&&r.disconnect()}}),[n,e]),[n,a]}({root:null,rootMargin:"0px",threshold:0}),i=D()(o,2),l=i[0],u=i[1];return Object(I.a)(l,(function(){l.current&&a(l.current.getBoundingClientRect())})),Object(c.useEffect)((function(){e.current&&a(e.current.getBoundingClientRect())}),[e]),{containerRef:l,isVisible:u,baseHeaderLayoutRef:e,headerSize:r}},R=function(e){var n=A(),t=n.containerRef,r=n.isVisible,a=n.baseHeaderLayoutRef,o=n.headerSize;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{height:null==o?void 0:o.height},ref:t},r&&l.a.createElement(B,N()({ref:a},e))),!r&&l.a.createElement(B,N()({},e,{sticky:!0,width:null==o?void 0:o.width})))};R.displayName="HeaderLayout";var S=p()(f.Box)(w||(w=i()(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: ","px;\n  z-index: 4;\n  box-shadow: ",";\n"])),(function(e){return e.width}),(function(e){return e.theme.shadows.tableShadow})),B=l.a.forwardRef((function(e,n){var t=e.navigationAction,r=e.primaryAction,a=e.secondaryAction,o=e.subtitle,i=e.title,c=e.sticky,u=e.width,d=j()(e,L);return c?l.a.createElement(S,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:u,"data-strapi-header-sticky":!0},l.a.createElement(y.Flex,{justifyContent:"space-between"},l.a.createElement(y.Flex,null,t&&l.a.createElement(f.Box,{paddingRight:3},t),l.a.createElement(f.Box,null,l.a.createElement(z.Typography,N()({variant:"beta",as:"h1"},d),i),l.a.createElement(z.Typography,{variant:"pi",textColor:"neutral600"},o)),a?l.a.createElement(f.Box,{paddingLeft:4},a):null),l.a.createElement(y.Flex,null,r?l.a.createElement(f.Box,{paddingLeft:2},r):void 0))):l.a.createElement(f.Box,{ref:n,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:t?6:8,background:"neutral100","data-strapi-header":!0},t?l.a.createElement(f.Box,{paddingBottom:2},t):null,l.a.createElement(y.Flex,{justifyContent:"space-between"},l.a.createElement(y.Flex,null,l.a.createElement(z.Typography,N()({as:"h1",variant:"alpha"},d),i),a?l.a.createElement(f.Box,{paddingLeft:4},a):null),r),l.a.createElement(z.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},o))}));B.displayName="BaseHeaderLayout",B.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},B.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,sticky:d.a.bool,subtitle:d.a.string,title:d.a.string.isRequired,width:d.a.number},R.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},R.propTypes={navigationAction:d.a.node,primaryAction:d.a.node,secondaryAction:d.a.node,subtitle:d.a.string,title:d.a.string.isRequired};var P,q=t(49),F=function(e){var n=e.startCol,t=e.endCol;return l.a.createElement(q.Grid,{gap:4},l.a.createElement(q.GridItem,{col:9,s:12},l.a.createElement(f.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},n)),l.a.createElement(q.GridItem,{col:3,s:12},l.a.createElement(f.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},t)))};F.propTypes={endCol:d.a.node.isRequired,startCol:d.a.node.isRequired};var U=p.a.div(P||(P=i()(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: ",";\n"])),(function(e){return e.theme.spaces[4]}));U.propTypes={children:d.a.node.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"lightTheme",(function(){return c})),t.d(n,"darkTheme",(function(){return u})),t.d(n,"extendTheme",(function(){return b})),t.d(n,"getThemeSize",(function(){return m.b})),t.d(n,"inputFocusStyle",(function(){return m.c})),t.d(n,"buttonFocusStyle",(function(){return m.a}));var r=t(30),a=t.n(r),o={shadows:{filterShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"0px 2px 15px rgba(33, 33, 52, 0.1)",tableShadow:"0px 1px 4px rgba(33, 33, 52, 0.1)"},sizes:t(27).a,zIndices:[5,10,15,20],spaces:["0px","4px","8px","12px","16px","20px","24px","32px","40px","48px","56px","64px"],borderRadius:"4px",mediaQueries:{tablet:"@media (max-width: ".concat(68.75,"rem)"),mobile:"@media (max-width: ".concat(34.375,"rem)")},fontSizes:["".concat(11/16,"rem"),"".concat(.75,"rem"),"".concat(.875,"rem"),"1rem","".concat(1.125,"rem"),"".concat(2,"rem")],lineHeights:[1.14,1.22,1.25,1.33,1.43,1.45,1.5],fontWeights:{regular:400,semiBold:500,bold:600}};function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({colors:{alternative100:"#f6ecfc",alternative200:"#e0c1f4",alternative500:"#ac73e6",alternative600:"#9736e8",alternative700:"#8312d1",buttonNeutral0:"#ffffff",danger100:"#fcecea",danger200:"#f5c0b8",danger500:"#ee5e52",danger600:"#d02b20",danger700:"#b72b1a",neutral0:"#ffffff",neutral100:"#f6f6f9",neutral1000:"#181826",neutral150:"#eaeaef",neutral200:"#dcdce4",neutral300:"#c0c0cf",neutral400:"#a5a5ba",neutral500:"#8e8ea9",neutral600:"#666687",neutral700:"#4a4a6a",neutral800:"#32324d",neutral900:"#212134",primary100:"#f0f0ff",primary200:"#d9d8ff",primary500:"#7b79ff",primary600:"#4945ff",primary700:"#271fe0",secondary100:"#eaf5ff",secondary200:"#b8e1ff",secondary500:"#66b7f1",secondary600:"#0c75af",secondary700:"#006096",success100:"#eafbe7",success200:"#c6f0c2",success500:"#5cb176",success600:"#328048",success700:"#2f6846",warning100:"#fdf4dc",warning200:"#fae7b9",warning500:"#f29d41",warning600:"#d9822f",warning700:"#be5d01"}},o);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var u=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({colors:{alternative100:"#212134",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#f6ecfc",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",danger100:"#212134",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#fcecea",danger700:"#f5c0b8",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#4a4a6a",neutral200:"#666687",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#212134",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#212134",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#eaf5ff",secondary700:"#b8e1ff",success100:"#212134",success200:"#4a4a6a",success500:"#5cb176",success600:"#c6f0c2",success700:"#c6f0c2",warning100:"#212134",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#fdf4dc",warning700:"#fae7b9"}},o),d=t(13),s=t.n(d);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var f=function(e){return"\n".concat(e,"\n\nThe following is an example:\n\n\nimport { lightTheme, extendTheme } from '@strapi/design-system/themes';\n\nconst myCustomTheme = extendTheme(lightTheme, {\n    ").concat(Object.keys(c).map((function(e){return"".concat(e,": /* put the overrides for the ").concat(e," key */,")})).join("\n"),"\n})\n")},g=function(e){return e&&"object"===s()(e)&&!Array.isArray(e)},h=function e(n,t){var r=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n);return g(n)&&g(t)&&Object.keys(t).forEach((function(a){g(t[a])&&n.hasOwnProperty(a)?r[a]=e(n[a],t[a]):r[a]=t[a]})),r},b=function(e,n){if(!g(e)){var t=f("The first argument should be an object and corresponds to the theme you want to extend.");throw new Error(t)}if(!g(n)){var r=f("The second argument should be an object and corresponds to the keys of the theme you want to override.");throw new Error(r)}return h(e,n)},m=t(14)},function(e,n,t){"use strict";t.r(n),t.d(n,"AccordionTypography",(function(){return E})),t.d(n,"Accordion",(function(){return T})),t.d(n,"AccordionContent",(function(){return k})),t.d(n,"AccordionToggle",(function(){return F})),t.d(n,"AccordionGroup",(function(){return V}));var r,a,o=t(30),i=t.n(o),c=t(3),l=t.n(c),u=t(1),d=t.n(u),s=t(0),p=t.n(s),f=t(2),g=t.n(f),h=t(8),b=Object(u.createContext)(),m=function(){return Object(u.useContext)(b)},v=t(15),y=t(4),x=t(9),E=g()(h.Typography)(r||(r=l()([""]))),M=g()(y.Box)(a||(a=l()(["\n  border: ",";\n\n  &:hover:not([aria-disabled='true']) {\n    border: 1px solid ",";\n\n    "," {\n      color: ",";\n    }\n\n    "," {\n      color: ",";\n    }\n\n    & > "," {\n      background: ",";\n    }\n\n    [data-strapi-dropdown='true'] {\n      background: ",";\n    }\n  }\n"])),(function(e){var n=e.theme,t=e.expanded,r=e.variant,a=e.disabled;return e.error?"1px solid ".concat(n.colors.danger600," !important"):"1px solid ".concat(a?n.colors.neutral150:t?n.colors.primary600:"primary"===r?n.colors.neutral0:n.colors.neutral100)}),(function(e){return e.theme.colors.primary600}),E,(function(e){var n=e.theme;return e.expanded?void 0:n.colors.primary700}),h.Typography,(function(e){var n=e.theme;return e.expanded?void 0:n.colors.primary600}),x.Flex,(function(e){return e.theme.colors.primary100}),(function(e){return e.theme.colors.primary200})),T=function(e){var n=e.children,t=e.expanded,r=e.id,a=e.size,o=e.variant,i=e.disabled,c=e.error,l=e.hasErrorMessage,u=e.onToggle,s=e.toggle,p=Object(v.a)("accordion",r);return d.a.createElement(b.Provider,{value:{expanded:t,onToggle:u,toggle:s,id:p,size:a,variant:o,disabled:i}},d.a.createElement(M,{"data-strapi-expanded":t,disabled:i,"aria-disabled":i,expanded:t,hasRadius:!0,variant:o,error:c},n),c&&l&&d.a.createElement(y.Box,{paddingTop:1},d.a.createElement(h.Typography,{variant:"pi",textColor:"danger600"},c)))};T.defaultProps=i()({disabled:!1,error:void 0,expanded:!1,hasErrorMessage:!0,id:void 0,toggle:!1,size:"M",variant:"primary",onToggle:void 0},"toggle",void 0),T.propTypes={children:p.a.node.isRequired,disabled:p.a.bool,error:p.a.string,expanded:p.a.bool,hasErrorMessage:p.a.bool,id:p.a.string,onToggle:p.a.func,size:p.a.oneOf(["S","M"]),toggle:p.a.func,variant:p.a.oneOf(["primary","secondary"])};var w=t(6),O=t.n(w),j=t(5),C=t.n(j),N=["children"],k=function(e){var n=e.children,t=C()(e,N),r=m(),a=r.expanded,o=r.id;if(!a)return null;var i="accordion-content-".concat(o),c="accordion-label-".concat(o),l="accordion-desc-".concat(o);return d.a.createElement(y.Box,O()({role:"region",id:i,"aria-labelledby":c,"aria-describedby":l},t),n)};k.propTypes={children:p.a.node.isRequired};var D,z,I=t(35),L=t.n(I),A=t(62),R=t(26),S=t(41),B=["title","description","as","togglePosition","action"],P=g()(A.TextButton)(D||(D=l()(["\n  text-align: left;\n\n  svg {\n    width: ","rem;\n    height: ","rem;\n\n    path {\n      fill: ",";\n    }\n  }\n"])),.875,.875,(function(e){var n=e.theme;return e.expanded?n.colors.primary600:n.colors.neutral500})),q=g()(x.Flex)(z||(z=l()(["\n  height: ",";\n  border-radius: ",";\n\n  &:hover {\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n  }\n"])),(function(e){var n=e.theme,t=e.size;return n.sizes.accordions[t]}),(function(e){var n=e.theme;return e.expanded?"".concat(n.borderRadius," ").concat(n.borderRadius," 0 0"):n.borderRadius}),(function(e){return e.theme.colors.primary600})),F=function(e){var n=e.title,t=e.description,r=e.as,a=e.togglePosition,o=e.action,i=C()(e,B),c=Object(u.useRef)(null),l=m(),s=l.onToggle,p=l.toggle,f=l.expanded,g=l.id,b=l.size,v=l.variant,y=l.disabled,M="accordion-content-".concat(g),T="accordion-label-".concat(g),w="accordion-desc-".concat(g),j="M"===b?6:4,N=function(e){var n=e.expanded,t=e.disabled,r=e.variant;return n?"primary100":t?"neutral150":"primary"===r?"neutral0":"neutral100"}({expanded:f,disabled:y,variant:v}),k=f?"primary600":"neutral700",D=f?"primary600":"neutral600",z=f?"primary200":"neutral200",I="".concat("M"===b?2:1.5,"rem"),A=function(){y||(p&&!s?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),p()):s())},F=d.a.createElement(x.Flex,{justifyContent:"center",borderRadius:"50%",height:I,width:I,transform:f?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,disabled:y,"aria-hidden":!0,as:"span",background:z,cursor:y?"not-allowed":"pointer",onClick:function(){var e;return null==c||null===(e=c.current)||void 0===e?void 0:e.click()}},d.a.createElement(S.Icon,{as:L.a,width:"".concat("M"===b?11/16:.5,"rem"),color:f?"primary600":"neutral600"}));return"left"===a?d.a.createElement(q,{paddingLeft:j,paddingRight:j,background:N,expanded:f,justifyContent:"space-between",size:b,cursor:y?"not-allowed":""},d.a.createElement(R.Stack,{horizontal:!0,spacing:3,flex:1},F,d.a.createElement(P,O()({ref:c,onClick:A,"aria-disabled":y,"aria-expanded":f,"aria-controls":M,"aria-labelledby":T,"data-strapi-accordion-toggle":!0,expanded:f,type:"button",flex:1},i),d.a.createElement(d.a.Fragment,null,"S"===b?d.a.createElement(h.Typography,{fontWeight:"bold",as:r,id:T,textColor:k},n):d.a.createElement(E,{variant:"delta",as:r,id:T,textColor:k},n),t&&d.a.createElement(h.Typography,{as:"p",id:w,textColor:D},t)))),o):d.a.createElement(q,{paddingRight:j,paddingLeft:j,background:N,expanded:f,size:b,justifyContent:"space-between",cursor:y?"not-allowed":""},d.a.createElement(P,O()({ref:c,onClick:A,"aria-disabled":y,"aria-expanded":f,"aria-controls":M,"aria-labelledby":T,"data-strapi-accordion-toggle":!0,expanded:f,type:"button",flex:1},i),d.a.createElement(d.a.Fragment,null,"S"===b?d.a.createElement(h.Typography,{fontWeight:"bold",as:r,id:T,textColor:k},n):d.a.createElement(h.Typography,{variant:"delta",as:r,id:T,textColor:k},n),t&&d.a.createElement(h.Typography,{as:"p",id:w,textColor:D},t))),d.a.createElement(R.Stack,{horizontal:!0,spacing:3},F,o))};F.defaultProps={action:void 0,as:"span",description:void 0,variant:"primary",togglePosition:"right"},F.propTypes={action:p.a.node,as:p.a.string,description:p.a.string,title:p.a.string.isRequired,togglePosition:p.a.oneOf(["right","left"]),variant:p.a.oneOf(["primary","secondary"])};var U,Q,W,Y=t(80),H=g()(y.Box)(U||(U=l()(["\n  border-bottom: 1px solid ",";\n  border-right: 1px solid ",";\n  border-left: 1px solid ",";\n  border-radius: 0 0 "," ",";\n"])),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius})),_=g()(y.Box)(Q||(Q=l()(["\n  & > * {\n    & > * {\n      border-radius: unset;\n    }\n  }\n\n  & > * {\n    border-radius: unset;\n    border-right: 1px solid ",";\n    border-left: 1px solid ",";\n    border-bottom: 1px solid ",";\n  }\n\n  & > *:first-of-type {\n    border-top: 1px solid ",";\n    border-radius: "," "," 0 0;\n    & > * {\n      border-radius: "," "," 0 0;\n    }\n\n    &:hover {\n      border-top: 1px solid ",";\n    }\n  }\n\n  & [data-strapi-expanded='true'] {\n    border: 1px solid ",";\n  }\n\n  ","\n"])),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.colors.neutral200}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.colors.primary600}),(function(e){var n=e.theme,t=e.footer;return"\n    &:not(".concat(t,") {\n      & > *:last-of-type {\n        border-radius: 0 0 ").concat(n.borderRadius," ").concat(n.borderRadius,";\n      }\n    }\n  ")})),G=g()(y.Box)(W||(W=l()(["\n  svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral500})),V=function(e){var n=e.children,t=e.footer,r=e.label,a=e.labelAction,o=e.error,i=u.Children.toArray(n).map((function(e){return Object(u.cloneElement)(e,{hasErrorMessage:!1})}));return d.a.createElement(Y.KeyboardNavigable,{attributeName:"data-strapi-accordion-toggle"},r&&d.a.createElement(x.Flex,{paddingBottom:1},d.a.createElement(h.Typography,{variant:"pi",as:"label",textColor:"neutral800",fontWeight:"bold"},r),a&&d.a.createElement(G,{paddingLeft:1},a)),d.a.createElement(_,{footer:t},i),t&&d.a.createElement(H,null,t),o&&d.a.createElement(y.Box,{paddingTop:1},d.a.createElement(h.Typography,{variant:"pi",textColor:"danger600"},o)))};V.defaultProps={footer:null,error:void 0,label:null,labelAction:void 0},V.propTypes={children:p.a.node.isRequired,error:p.a.string,footer:p.a.node,label:p.a.string,labelAction:p.a.node}},function(e,n,t){"use strict";t.r(n),t.d(n,"Table",(function(){return N})),t.d(n,"Tbody",(function(){return S})),t.d(n,"Thead",(function(){return q})),t.d(n,"Tr",(function(){return Q})),t.d(n,"Th",(function(){return V})),t.d(n,"Td",(function(){return X})),t.d(n,"TFooter",(function(){return re}));var r,a,o,i,c=t(6),l=t.n(c),u=t(10),d=t.n(u),s=t(5),p=t.n(s),f=t(3),g=t.n(f),h=t(1),b=t.n(h),m=t(0),v=t.n(m),y=t(68),x=t(2),E=t.n(x),M=t(4),T=["colCount","rowCount","footer"],w=E()(M.Box)(r||(r=g()(["\n  overflow: hidden;\n"]))),O=E()(y.a)(a||(a=g()(["\n  width: 100%;\n  white-space: nowrap;\n"]))),j=E()(M.Box)(o||(o=g()(["\n  position: relative;\n\n  &:before {\n    // TODO: make sure to add a token for this weird stuff\n    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);\n    opacity: 0.2;\n    position: absolute;\n    height: 100%;\n    content: ",";\n    box-shadow: ",";\n    width: ",";\n    left: 0;\n  }\n\n  &:after {\n    // TODO: make sure to add a token for this weird stuff\n    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);\n    opacity: 0.2;\n    position: absolute;\n    height: 100%;\n    content: ",";\n    box-shadow: ",";\n    width: ",";\n    right: 0;\n    top: 0;\n  }\n"])),(function(e){var n=e.overflowing;return"both"===n||"left"===n?"''":void 0}),(function(e){return e.theme.shadows.tableShadow}),(function(e){return e.theme.spaces[2]}),(function(e){var n=e.overflowing;return"both"===n||"right"===n?"''":void 0}),(function(e){return e.theme.shadows.tableShadow}),(function(e){return e.theme.spaces[2]})),C=E()(M.Box)(i||(i=g()(["\n  overflow-x: auto;\n"]))),N=function(e){var n=e.colCount,t=e.rowCount,r=e.footer,a=p()(e,T),o=Object(h.useRef)(null),i=Object(h.useState)(),c=d()(i,2),u=c[0],s=c[1];return Object(h.useEffect)((function(){o.current.scrollWidth>o.current.clientWidth&&s("right")}),[]),b.a.createElement(w,{shadow:"tableShadow",hasRadius:!0,background:"neutral0"},b.a.createElement(j,{overflowing:u},b.a.createElement(C,{ref:o,onScroll:function(e){var n=e.target.scrollWidth-e.target.clientWidth;return 0===e.target.scrollLeft?s("right"):e.target.scrollLeft===n?s("left"):e.target.scrollLeft>0?s("both"):void 0},paddingLeft:6,paddingRight:6},b.a.createElement(O,l()({colCount:n,rowCount:t},a)))),r)};N.defaultProps={footer:void 0},N.propTypes={colCount:v.a.number.isRequired,footer:v.a.node,rowCount:v.a.number.isRequired};var k,D,z,I,L,A=t(66),R=E()(A.a)(k||(k=g()(["\n  & tr:last-of-type {\n    border-bottom: none;\n  }\n"]))),S=function(e){return b.a.createElement(R,e)},B=t(65),P=E()(B.a)(D||(D=g()(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.neutral150})),q=function(e){return b.a.createElement(P,e)},F=t(67),U=E()(F.a)(z||(z=g()(["\n  border-bottom: 1px solid ",";\n\n  & td,\n  & th {\n    padding: ",";\n  }\n\n  & td:first-of-type,\n  & th:first-of-type {\n    padding: 0 ",";\n  }\n\n  // Resetting padding values and fixing a height\n  th {\n    padding-top: 0;\n    padding-bottom: 0;\n    height: ","rem;\n  }\n"])),(function(e){return e.theme.colors.neutral150}),(function(e){return e.theme.spaces[4]}),(function(e){return e.theme.spaces[1]}),3.5),Q=function(e){return b.a.createElement(U,e)},W=t(9),Y=t(57),H=["children","action"],_=E()(Y.a)(I||(I=g()(["\n  vertical-align: middle;\n  text-align: left;\n  color: ",";\n  outline-offset: -4px;\n\n  /**\n  * Hack to make sure the checkbox looks aligned\n  */\n  input {\n    vertical-align: sub;\n  }\n"])),(function(e){return e.theme.colors.neutral600})),G=E.a.span(L||(L=g()(["\n  svg {\n    height: ","rem;\n  }\n"])),.25),V=function(e){var n=e.children,t=e.action,r=p()(e,H);return b.a.createElement(_,l()({as:Y.b},r),b.a.createElement(W.Flex,null,n,b.a.createElement(G,null,t)))};V.defaultProps={action:void 0},V.propTypes={action:v.a.node,children:v.a.node.isRequired};var K,Z,X=function(e){return b.a.createElement(_,e)},J=t(54),$=t(8),ee=["children","icon"],ne=E()(M.Box)(K||(K=g()(["\n  height: ","rem;\n  width: ","rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    height: ","rem;\n    width: ","rem;\n  }\n\n  svg path {\n    fill: ",";\n  }\n"])),1.5,1.5,.625,.625,(function(e){return e.theme.colors.primary600})),te=E()(M.Box)(Z||(Z=g()(["\n  border-radius: 0 0 "," ",";\n  display: block;\n  width: 100%;\n  border: none;\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius})),re=function(e){var n=e.children,t=e.icon,r=p()(e,ee);return b.a.createElement("div",null,b.a.createElement(J.Divider,null),b.a.createElement(te,l()({as:"button",background:"primary100",padding:5},r),b.a.createElement(W.Flex,null,b.a.createElement(ne,{"aria-hidden":!0,background:"primary200"},t),b.a.createElement(M.Box,{paddingLeft:3},b.a.createElement($.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600"},n)))))};re.propTypes={children:v.a.string.isRequired,icon:v.a.node.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"Tabs",(function(){return L})),t.d(n,"Tab",(function(){return A})),t.d(n,"TabPanels",(function(){return B})),t.d(n,"TabPanel",(function(){return P})),t.d(n,"TabGroup",(function(){return W}));var r,a,o,i,c,l=t(6),u=t.n(l),d=t(5),s=t.n(d),p=t(3),f=t.n(p),g=t(1),h=t.n(g),b=t(0),m=t.n(b),v=t(2),y=t.n(v),x=Object(g.createContext)(),E=function(){return Object(g.useContext)(x)},M=t(8),T=t(11),w=t(4),O=t(9),j=y()(w.Box)(r||(r=f()(["\n  border-bottom: 2px solid\n    ",";\n"])),(function(e){var n=e.theme,t=e.selected,r=e.hasError;return t?r?n.colors.danger600:n.colors.primary600:"transparent"})),C=y()(w.Box)(a||(a=f()(["\n  border-bottom: 1px solid ",";\n"])),(function(e){var n=e.theme;return e.selected?n.colors.neutral0:n.colors.neutral150})),N=y.a.button(o||(o=f()(["\n  border: none;\n  background: transparent;\n  padding: 0;\n\n  & + & > "," {\n    border-left: 1px solid ",";\n  }\n\n  "," {\n    border-right: ",";\n  }\n\n  // Hack preventing the outline from being overflow by the following tab\n  outline-offset: -2px;\n\n  &[aria-disabled='true'] {\n    cursor: not-allowed;\n  }\n"])),C,(function(e){return e.theme.colors.neutral150}),C,(function(e){var n=e.theme;return e.showRightBorder?"1px solid ".concat(n.colors.neutral150):"none"})),k=y()(O.Flex)(i||(i=f()(["\n  & > * {\n    flex: 1;\n  }\n\n  & ",":first-of-type "," {\n    border-radius: ",";\n  }\n\n  & ",":last-of-type "," {\n    border-radius: ",";\n  }\n\n  & ",'[aria-selected="true"] '," {\n    border-radius: ",";\n    border-left: none;\n    border-right: none;\n  }\n"])),N,C,(function(e){var n=e.theme;return"".concat(n.borderRadius," 0 0 0")}),N,C,(function(e){var n=e.theme;return"0 ".concat(n.borderRadius," 0 0")}),N,C,(function(e){var n=e.theme;return"".concat(n.borderRadius," ").concat(n.borderRadius," 0 0")})),D=["children"],z=["disabled","id","children","variant","hasError","index","selectedTabIndex","onTabClick"],I=y.a.button(c||(c=f()(["\n  &[aria-disabled='true'] {\n    cursor: not-allowed;\n  }\n"]))),L=function(e){var n=e.children,t=s()(e,D),r=E(),a=r.id,o=r.selectedTabIndex,i=r.selectTabIndex,c=r.label,l=r.variant,d=r.onTabChange,p=function(e,n){var t=Object(g.useRef)(null),r=Object(g.useRef)(null);return Object(g.useEffect)((function(){if(t.current){if(r.current){var a=t.current.querySelector('[tabindex="0"]');a&&(a.focus(),n(e))}r.current||(r.current=!0)}}),[e]),t}(o,d),f=g.Children.toArray(n).map((function(e,n){return Object(g.cloneElement)(e,{id:"".concat(a,"-").concat(n),index:n,selectedTabIndex:o,onTabClick:function(){return i(n)},variant:l})})),b=function(e){if(!f.every((function(e){return e.props.disabled})))switch(e.key){case T.a.RIGHT:var n=o+1,t=function e(n){return f[n].props.disabled?n===f.length-1?e(0):e(n+1):n}(n>=f.length?0:n);i(t);break;case T.a.LEFT:var r=o-1,a=function e(n){return f[n].props.disabled?e(0===n?f.length-1:n-1):n}(r<0?f.length-1:r);i(a);break;case T.a.HOME:var c=f.findIndex((function(e){return!e.props.disabled}));i(c);break;case T.a.END:var l=f.map((function(e,n){return{isDisabled:e.props.disabled,index:n}})).reverse().find((function(e){return!e.isDisabled}));l&&i(l.index)}};return"simple"===l?h.a.createElement("div",u()({ref:p,role:"tablist","aria-label":c,onKeyDown:b},t),f):h.a.createElement(k,u()({ref:p,role:"tablist",alignItems:"flex-end","aria-label":c,onKeyDown:b},t),f)};L.propTypes={children:m.a.node.isRequired};var A=function(e){var n,t=e.disabled,r=e.id,a=e.children,o=e.variant,i=e.hasError,c=e.index,l=e.selectedTabIndex,d=e.onTabClick,p=s()(e,z),f="".concat(r,"-tab"),g="".concat(r,"-tabpanel"),b=c===l,m=function(){t||d()};if("simple"===o)return n=i?"danger600":b?"primary600":"neutral600",h.a.createElement(I,u()({id:f,role:"tab","aria-controls":b?g:void 0,tabIndex:b?0:-1,"aria-selected":b,type:"button",onClick:m,"aria-disabled":t},p),h.a.createElement(j,{padding:4,selected:b,hasError:i},h.a.createElement(M.Typography,{variant:"sigma",textColor:n},a)));i&&console.warn('The "hasError" prop is only available for the "simple" variant.');var v=l-1===c;return h.a.createElement(N,u()({id:f,role:"tab",type:"button","aria-controls":b?g:void 0,tabIndex:b?0:-1,"aria-selected":b,onClick:m,"aria-disabled":t,showRightBorder:v},p),h.a.createElement(C,{padding:b?4:3,background:b?"neutral0":"neutral100",selected:b},h.a.createElement(M.Typography,{fontWeight:"bold",textColor:b?"primary700":"neutral600"},a)))};A.defaultProps={disabled:!1,hasError:!1,id:void 0,index:void 0,onTabClick:void 0,selectedTabIndex:void 0,variant:void 0},A.propTypes={children:m.a.node.isRequired,disabled:m.a.bool,hasError:m.a.bool,id:m.a.string,index:m.a.number,onTabClick:m.a.func,selectedTabIndex:m.a.number,variant:m.a.oneOf(["simple"])};var R=["children"],S=["id"],B=function(e){var n=e.children,t=s()(e,R),r=E(),a=r.id,o=r.selectedTabIndex,i=g.Children.toArray(n).map((function(e,n){return Object(g.cloneElement)(e,{id:"".concat(a,"-").concat(n)})})).filter((function(e,n){return n===o}));return h.a.createElement("div",t,i)};B.propTypes={children:m.a.node.isRequired};var P=function(e){var n=e.id,t=s()(e,S),r="".concat(n,"-tab"),a="".concat(n,"-tabpanel");return h.a.createElement("div",u()({id:a,role:"tabpanel",tabIndex:0,"aria-labelledby":r},t))};P.defaultProps={id:void 0},P.propTypes={id:m.a.string};var q=t(10),F=t.n(q),U=t(15),Q=["id","initialSelectedTabIndex","label","onTabChange","variant"],W=Object(g.forwardRef)((function(e,n){var t=e.id,r=e.initialSelectedTabIndex,a=e.label,o=e.onTabChange,i=e.variant,c=s()(e,Q),l=Object(U.a)("tabgroup",t),u=g.Children.toArray(c.children).find((function(e){return"Tabs"===e.type.displayName})),d=r||0;u&&void 0===r&&(d=u.props.children.findIndex((function(e){return!e.props.disabled})));var p=Object(g.useState)(-1===d?0:d),f=F()(p,2),b=f[0],m=f[1];return Object(g.useImperativeHandle)(n,(function(){return{_handlers:{setSelectedTabIndex:m}}})),h.a.createElement(x.Provider,{value:{id:l,selectedTabIndex:b,selectTabIndex:m,label:a,variant:i,onTabChange:o}},h.a.createElement("div",c))}));W.displayName="TabGroup",W.defaultProps={id:void 0,initialSelectedTabIndex:void 0,onTabChange:function(){},variant:void 0},W.propTypes={children:m.a.node.isRequired,id:m.a.string,initialSelectedTabIndex:m.a.number,label:m.a.string.isRequired,onTabChange:m.a.func,variant:m.a.oneOf(["simple"])}},function(e,n,t){"use strict";t.r(n),t.d(n,"Carousel",(function(){return I})),t.d(n,"CarouselInput",(function(){return B})),t.d(n,"CarouselActions",(function(){return q})),t.d(n,"CarouselImage",(function(){return F})),t.d(n,"CarouselSlide",(function(){return W}));var r,a,o,i=t(6),c=t.n(i),l=t(5),u=t.n(l),d=t(3),s=t.n(d),p=t(1),f=t.n(p),g=t(0),h=t.n(g),b=t(2),m=t.n(b),v=t(51),y=t.n(v),x=t(58),E=t.n(x),M=t(41),T=t(4),w=t(8),O=t(9),j=t(46),C=t(11),N=["actions","children","label","nextLabel","onNext","onPrevious","previousLabel","secondaryLabel","selectedSlide"],k=m()(T.Box)(r||(r=s()(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-areas: 'startAction slides endAction';\n"]))),D=m()(T.Box)(a||(a=s()(["\n  grid-area: slides;\n"]))),z=m.a.button(o||(o=s()(["\n  grid-area: ",";\n\n  &:focus svg path,\n  &:hover svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.area}),(function(e){return e.theme.colors.neutral900})),I=function(e){var n=e.actions,t=e.children,r=e.label,a=e.nextLabel,o=e.onNext,i=e.onPrevious,l=e.previousLabel,d=e.secondaryLabel,s=e.selectedSlide,g=u()(e,N),h=Object(p.useRef)(null),b=Object(p.useRef)(null),m=p.Children.toArray(t).map((function(e,n){return Object(p.cloneElement)(e,{selected:n===s})})),v=m.length>1;return f.a.createElement(T.Box,c()({},g,{onKeyDown:function(e){switch(e.key){case C.a.RIGHT:e.preventDefault(),b.current.focus(),o();break;case C.a.LEFT:e.preventDefault(),h.current.focus(),i()}}}),f.a.createElement(T.Box,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100"},f.a.createElement(k,{as:"section","aria-roledescription":"carousel","aria-label":r,position:"relative"},v&&f.a.createElement(z,{onClick:i,area:"startAction",ref:h,"aria-label":l,type:"button"},f.a.createElement(M.Icon,{as:E.a,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})),v&&f.a.createElement(z,{onClick:o,area:"endAction",ref:b,"aria-label":a,type:"button"},f.a.createElement(M.Icon,{as:y.a,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})),f.a.createElement(D,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%"},m),n),d&&f.a.createElement(T.Box,{paddingTop:2,paddingLeft:4,paddingRight:4},f.a.createElement(j.Tooltip,{label:d},f.a.createElement(O.Flex,{justifyContent:"center"},f.a.createElement(w.Typography,{variant:"pi",textColor:"neutral600",ellipsis:!0},d))))))};I.defaultProps={actions:void 0,error:void 0,hint:void 0,required:!1,secondaryLabel:void 0},I.propTypes={actions:h.a.node,children:h.a.node.isRequired,error:h.a.string,hint:h.a.string,label:h.a.string.isRequired,nextLabel:h.a.string.isRequired,onNext:h.a.func.isRequired,onPrevious:h.a.func.isRequired,previousLabel:h.a.string.isRequired,required:h.a.bool,secondaryLabel:h.a.string,selectedSlide:h.a.number.isRequired};var L=t(16),A=t(26),R=t(15),S=["actions","children","error","hint","label","labelAction","nextLabel","onNext","onPrevious","previousLabel","required","secondaryLabel","selectedSlide","id"],B=function(e){var n=e.actions,t=e.children,r=e.error,a=e.hint,o=e.label,i=e.labelAction,l=e.nextLabel,d=e.onNext,s=e.onPrevious,p=e.previousLabel,g=e.required,h=e.secondaryLabel,b=e.selectedSlide,m=e.id,v=u()(e,S),y=Object(R.a)("carouselinput",m);return f.a.createElement(L.Field,{hint:a,error:r,id:y},f.a.createElement(A.Stack,{spacing:1},o&&f.a.createElement(L.FieldLabel,{required:g,action:i},o),f.a.createElement(I,c()({actions:n,label:o,nextLabel:l,onNext:d,onPrevious:s,previousLabel:p,secondaryLabel:h,selectedSlide:b,id:y},v),t),f.a.createElement(L.FieldHint,null),f.a.createElement(L.FieldError,null)))};B.defaultProps={actions:void 0,error:void 0,hint:void 0,id:void 0,required:!1,secondaryLabel:void 0},B.propTypes={actions:h.a.node,children:h.a.node.isRequired,error:h.a.string,hint:h.a.string,id:h.a.string,label:h.a.string.isRequired,labelAction:h.a.element,nextLabel:h.a.string.isRequired,onNext:h.a.func.isRequired,onPrevious:h.a.func.isRequired,previousLabel:h.a.string.isRequired,required:h.a.bool,secondaryLabel:h.a.string,selectedSlide:h.a.number.isRequired};var P,q=function(e){return f.a.createElement(A.Stack,c()({justifyContent:"center",horizontal:!0,spacing:1,position:"absolute",width:"100%",bottom:1},e))},F=function(e){return f.a.createElement(T.Box,c()({as:"img",height:"100%"},e))},U=["label","children","selected"],Q=m()(O.Flex)(P||(P=s()(["\n  display: ",";\n"])),(function(e){return e.selected?"flex":"none"})),W=function(e){var n=e.label,t=e.children,r=e.selected,a=u()(e,U);return f.a.createElement(Q,c()({selected:r,role:"group","aria-roledescription":"slide","aria-label":n,justifyContent:"center",height:"124px"},a),t)};W.defaultProps={selected:!1},W.propTypes={children:h.a.node.isRequired,label:h.a.string.isRequired,selected:h.a.bool}},function(e,n,t){"use strict";t.r(n),t.d(n,"Combobox",(function(){return ue})),t.d(n,"CreatableCombobox",(function(){return de})),t.d(n,"ComboboxOption",(function(){return ne}));var r=t(30),a=t.n(r),o=t(6),i=t.n(o),c=t(10),l=t.n(c),u=t(5),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(15),b=t(35),m=t.n(b),v=t(34),y=t.n(v),x=t(69),E=t(11),M="Close",T="CloseSelect",w="First",O="Last",j="Next",C="Open",N="Previous",k="Type";function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n?e.filter((function(e){return 0===e.props.children.toString().toLowerCase().indexOf(n.toString().toLowerCase())&&t.indexOf(e)<0})):e}function z(e,n,t){switch(t){case w:return 0;case O:return n;case N:return Math.max(0,e-1);case j:return Math.min(n,e+1);default:return e}}function I(e){Object(x.a)(e,{scrollMode:"if-needed",block:"nearest",inline:"nearest"}).forEach((function(e){var n=e.el,t=e.top,r=e.left;n.scrollTop=t,n.scrollLeft=r}))}var L,A,R,S,B,P=t(9),q=t(50),F=t(40),U=t(4),Q=t(8),W=t(78),Y=t(3),H=t.n(Y),_=t(2),G=t.n(_),V=t(14),K=G()(P.Flex)(L||(L=H()(["\n  position: relative;\n  border: 1px solid ",";\n  padding-right: ",";\n  padding-left: ",";\n  border-radius: ",";\n  background: ",";\n\n  ","\n\n  ","\n"])),(function(e){var n=e.theme;return e.hasError?n.colors.danger600:n.colors.neutral200}),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral0}),(function(e){var n=e.theme;return e.$disabled?"\n    color: ".concat(n.colors.neutral600,";\n    background: ").concat(n.colors.neutral150,";\n  "):void 0}),Object(V.c)()),Z=G.a.div(A||(A=H()(["\n  padding: 1px 2px;\n  grid-area: 1 / 1 / 2 / 3;\n"]))),X=G()(P.Flex)(R||(R=H()(["\n  display: grid;\n  flex: 1 1 0%;\n  position: relative;\n"]))),J=G.a.input(S||(S=H()(["\n  display: inline-grid;\n  grid-area: 1 / 1 / 2 / 3;\n  grid-template-columns: 0px min-content;\n  background: transparent;\n  min-height: ","rem;\n  border: none;\n  flex: 1;\n  font-size: ","rem;\n  color: ",";\n  outline: none;\n  &:focus-visible {\n    outline: none;\n    box-shadow: none;\n    outline-offset: 0;\n  }\n  &[aria-disabled='true'] {\n    background: inherit;\n    color: inherit;\n    cursor: not-allowed;\n  }\n"])),2.5,.875,(function(e){return e.theme.colors.neutral800})),$=G()(U.Box)(B||(B=H()(["\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline-offset: -3px;\n  ","\n\n  &:hover {\n    background: ",";\n  }\n"])),(function(e){var n=e.isSelected,t=e.theme;return n&&"background: ".concat(t.colors.primary100,";")}),(function(e){return e.theme.colors.primary100})),ee=["isSelected","children"],ne=Object(s.forwardRef)((function(e,n){var t=e.isSelected,r=e.children,a=d()(e,ee);return p.a.createElement($,i()({hasRadius:!0,paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,role:"option",background:"neutral0",isSelected:t,ref:n},a),p.a.createElement(Q.Typography,{textColor:t?"primary600":"neutral800",fontWeight:t?"bold":null},r))}));ne.defaultProps={isSelected:!1},ne.propTypes={children:g.a.oneOfType([g.a.string,g.a.number]).isRequired,isSelected:g.a.bool},ne.displayName="ComboboxOption";var te=function(e){var n=e.options,t=e.activeOptionRef;return Object(s.useEffect)((function(){t.current&&I(t.current)}),[]),n};te.defaultProps={activeOptionRef:void 0},te.propTypes={options:g.a.array.isRequired};var re=t(16),ae=t(26),oe=t(21),ie=["clearLabel","createMessage","disabled","hint","error","label","value","onChange","placeholder","creatable","loading","loadingMessage","onCreateOption","onInputChange","onLoadMore","noOptionsMessage","hasMoreItems","children","onClear"];function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function le(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ce(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ue=function(e){var n=e.clearLabel,t=e.createMessage,r=e.disabled,a=e.hint,o=e.error,i=e.label,c=e.value,u=e.onChange,f=e.placeholder,g=e.creatable,b=e.loading,v=e.loadingMessage,x=e.onCreateOption,L=e.onInputChange,A=e.onLoadMore,R=e.noOptionsMessage,S=e.hasMoreItems,B=e.children,Y=e.onClear,H=d()(e,ie),_=Object(s.useState)(0),G=l()(_,2),V=G[0],$=G[1],ee=Object(s.useState)(null),ce=l()(ee,2),le=ce[0],ue=ce[1],de=Object(s.useState)(B),se=l()(de,2),pe=se[0],fe=se[1],ge=Object(s.useState)(!1),he=l()(ge,2),be=he[0],me=he[1],ve=Object(s.useState)(""),ye=l()(ve,2),xe=ye[0],Ee=ye[1],Me=Object(s.useRef)(),Te=Object(s.useRef)(!1),we=Object(s.useRef)(),Oe=Object(s.useRef)(),je=Object(s.useRef)(),Ce=Object(s.useRef)(!0),Ne=Object(h.a)("combobox"),ke="".concat(Ne,"-label");if(!i&&!H["aria-label"])throw new Error('The Combobox component needs a "label" or an "aria-label" props');Object(s.useEffect)((function(){fe(D(B,xe))}),[xe,B]),Object(s.useEffect)((function(){be&&Me.current&&I(Me.current)}),[V]),Object(s.useLayoutEffect)((function(){Ce.current&&(Ce.current=!1)}),[c]);var De,ze,Ie=be?"".concat(Ne,"-").concat(V):"",Le=function(){u(null),Ee("")},Ae=function(e){$(e)},Re=function(){Te.current=!0},Se=function(e){var n=pe[e];if(Ee(""),n)return u(n.props.value),Be(!1);g&&(x(xe),Be(!1))},Be=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];me(e),n&&we.current.focus()},Pe=s.Children.toArray(pe).map((function(e,n){var t=V===n;return Object(s.cloneElement)(e,{id:"".concat(Ne,"-").concat(n),"aria-selected":le===n,"aria-posinset":n+1,"aria-setsize":s.Children.toArray(pe).length,ref:function(e){t&&(Me.current=e)},onClick:function(){return Ae(e=n),void Se(e);var e},onMouseDown:Re,isSelected:t})}));return p.a.createElement(re.Field,{hint:a,error:o,id:Ne},p.a.createElement(oe.VisuallyHidden,{"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text"},c),p.a.createElement(ae.Stack,{spacing:i||a||o?1:0},i&&p.a.createElement(re.FieldLabel,{id:ke},i),p.a.createElement(K,{ref:Oe,$disabled:r,hasError:o},p.a.createElement(X,{wrap:"wrap"},!xe&&c&&p.a.createElement(Z,{id:"".concat(Ne,"-selected-value")},p.a.createElement(Q.Typography,null,null===(ze=B.find((function(e){var n;return(null===(n=e.props)||void 0===n?void 0:n.value.toLowerCase())===c.toLowerCase()})).props)||void 0===ze?void 0:ze.children)),p.a.createElement(J,{"aria-activedescendant":Ie,"aria-autocomplete":"list","aria-controls":"".concat(Ne,"-listbox"),"aria-disabled":r,"aria-expanded":be,"aria-haspopup":"listbox","aria-labelledby":i?ke:void 0,id:Ne,onBlur:r?void 0:function(){c&&!Te.current&&Ee(""),Te.current?Te.current=!1:Be(!1,!1)},onClick:r?void 0:function(){return Be(!0)},onInput:r?void 0:function(e){L&&L(e);var n=we.current.value;fe(D(B,n)),$(0),ue(null),xe!==n&&Ee(n),be||Be(!0,!1)},onKeyDown:r?void 0:function(e){var n=e.key,t=g&&xe?pe.length:pe.length-1,r=function(e,n){return n||e!==E.a.DOWN?e===E.a.DOWN?j:e===E.a.UP?N:e===E.a.HOME?w:e===E.a.END?O:e===E.a.ESCAPE?M:e===E.a.ENTER?T:e===E.a.BACKSPACE||e===E.a.CLEAR||1===e.length?k:void 0:C}(n,be);switch(c&&!xe&&n===E.a.BACKSPACE&&Le(),r){case j:return Ae(V===t?0:z(V,t,r));case N:return Ae(0===V?t:z(V,t,r));case O:case w:return Ae(V===t?0:z(V,t,r));case T:return e.preventDefault(),void Se(V);case M:return e.preventDefault(),Be(!1);case C:return Be(!0);default:return}},placeholder:c?"":f,readOnly:r,ref:we,role:"combobox",autoComplete:"off",autoCorrect:"off",spellCheck:"off",type:"text",value:xe})),p.a.createElement(P.Flex,null,(c||xe)&&p.a.createElement(q.b,{id:"".concat(Ne,"-clear"),"aria-label":n,disabled:r,paddingLeft:3,as:"button",onClick:function(){we.current.focus(),Y&&Y(),Le()},type:"button"},p.a.createElement(y.a,null)),p.a.createElement(q.a,{disabled:r,paddingLeft:3,"aria-hidden":!0,as:"button",onClick:function(){we.current.focus(),Be(!0)},tabIndex:-1,type:"button"},p.a.createElement(m.a,null)))),p.a.createElement(re.FieldHint,null),p.a.createElement(re.FieldError,null)),be&&p.a.createElement(F.Popover,{id:"".concat(Ne,"-popover"),source:Oe,spacing:4,fullWidth:!0,intersectionId:"".concat(Ne,"-listbox-popover-intersection"),onReachEnd:S&&!b?A:void 0},p.a.createElement("div",{role:"listbox",ref:je,id:"".concat(Ne,"-listbox"),"aria-labelledby":i?ke:void 0},(Boolean(pe.length)||g)&&p.a.createElement(p.a.Fragment,null,p.a.createElement(te,{activeOptionRef:Me,options:Pe}),(De=pe.findIndex((function(e){var n;return(null===(n=e.props)||void 0===n?void 0:n.children)===xe})),xe&&-1===De&&g&&p.a.createElement(ne,{isSelected:V===pe.length,ref:function(e){V===pe.length&&(Me.current=e)},onMouseDown:Re,onClick:function(){return Se()},taindex:0},t(xe)))),!Boolean(pe.length)&&!g&&!b&&p.a.createElement(U.Box,{paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,ref:Me},p.a.createElement(Q.Typography,{textColor:"neutral800"},R(xe))),b&&p.a.createElement(P.Flex,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2},p.a.createElement(W.a,{small:!0},v)))))},de=function(e){return p.a.createElement(ue,i()({},e,{creatable:!0}))};ue.defaultProps=de.defaultProps={"aria-label":void 0,clearLabel:"clear",creatable:!1,createMessage:function(e){return'Create "'.concat(e,'"')},disabled:!1,error:void 0,hasMoreItems:!1,hint:void 0,label:void 0,loading:!1,loadingMessage:"Loading content...",noOptionsMessage:function(){return"No results found"},onClear:void 0,onCreateOption:void 0,onInputChange:void 0,onLoadMore:void 0,placeholder:"Select or enter a value",value:void 0},ue.propTypes={"aria-label":g.a.string,children:g.a.oneOfType([g.a.arrayOf(g.a.node),g.a.node]),clearLabel:g.a.string,creatable:g.a.bool,createMessage:g.a.func,disabled:g.a.bool,error:g.a.string,hasMoreItems:g.a.bool,hint:g.a.string,label:g.a.string,loading:g.a.bool,loadingMessage:g.a.string,noOptionsMessage:g.a.func,onChange:g.a.func.isRequired,onClear:g.a.func,onCreateOption:g.a.func,onInputChange:g.a.func,onLoadMore:g.a.func,placeholder:g.a.string,value:g.a.string},de.propTypes=le(le({},ue.propTypes),{},{onCreateOption:g.a.func.isRequired})},function(e,n,t){"use strict";t.r(n),t.d(n,"Dialog",(function(){return N})),t.d(n,"DialogBody",(function(){return D})),t.d(n,"DialogFooter",(function(){return A}));var r,a,o,i,c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(0),p=t.n(s),f=t(1),g=t.n(f),h=t(2),b=t.n(h),m=t(4),v=t(53),y=function(e){Object(f.useEffect)((function(){return e&&document.body.classList.add("lock-body-scroll"),function(){document.body.classList.remove("lock-body-scroll")}}),[e])},x=t(29),E=t(9),M=t(8),T=t(15),w=["onClose","title","as","isOpen","id"],O=b.a.div(r||(r=d()(["\n  position: fixed;\n  z-index: 4;\n  inset: 0;\n  background: ",";\n  padding: 0 ",";\n"])),(function(e){var n,t,r=e.theme;return n=r.colors.neutral800,t=.2,"".concat(n).concat(Math.floor(255*t).toString(16).padStart(2,0))}),(function(e){return e.theme.spaces[8]})),j=b()(m.Box)(a||(a=d()(["\n  max-width: ","rem;\n  margin: 0 auto;\n  overflow: hidden;\n  margin-top: 10%;\n"])),25.75),C=b()(E.Flex)(o||(o=d()(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.neutral150})),N=function(e){var n=e.onClose,t=e.title,r=e.as,a=e.isOpen,o=e.id,i=l()(e,w),c=Object(T.a)("dialog",o);if(y(a),!a)return null;var u="".concat(c,"-label");return g.a.createElement(x.Portal,null,g.a.createElement(O,null,g.a.createElement(v.FocusTrap,{onEscape:n},g.a.createElement(j,{"aria-labelledby":u,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog"},g.a.createElement(C,{padding:6,justifyContent:"center"},g.a.createElement(M.Typography,{variant:"beta",as:r||"h2",id:u},t)),g.a.createElement(m.Box,i)))))};N.displayName="Dialog",N.defaultProps={as:"h2",id:void 0},N.propTypes={as:p.a.string,id:p.a.oneOfType([p.a.string,p.a.number]),isOpen:p.a.bool.isRequired,onClose:p.a.func.isRequired,title:p.a.string.isRequired};var k=b()(m.Box)(i||(i=d()(["\n  svg {\n    width: ",";\n    height: ",";\n\n    path {\n      fill: ",";\n    }\n  }\n"])),(function(e){return e.theme.spaces[6]}),(function(e){return e.theme.spaces[6]}),(function(e){return e.theme.colors.danger600})),D=function(e){var n=e.children,t=e.icon;return g.a.createElement(m.Box,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6},t&&g.a.createElement(k,{paddingBottom:2},g.a.createElement(E.Flex,{justifyContent:"center"},t)),n)};D.displayName="DialogBody",D.propTypes={children:p.a.node.isRequired,icon:p.a.node};var z,I=t(26),L=b()(m.Box)(z||(z=d()(["\n  border-top: 1px solid ",";\n\n  button {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n  }\n"])),(function(e){return e.theme.colors.neutral150})),A=function(e){var n=e.startAction,t=e.endAction;return g.a.createElement(L,{padding:4},g.a.createElement(I.Stack,{horizontal:!0,spacing:2},n,t))};A.displayName="DialogFooter",A.defaultProps={endAction:void 0,startAction:void 0},A.propTypes={endAction:p.a.node,startAction:p.a.node}},function(e,n,t){"use strict";t.r(n),t.d(n,"ModalLayout",(function(){return w})),t.d(n,"ModalHeader",(function(){return L})),t.d(n,"ModalFooter",(function(){return B})),t.d(n,"ModalBody",(function(){return q}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(2),g=t.n(f),h=t(0),b=t.n(h),m=t(4),v=t(53),y=t(29),x=Object(s.createContext)(),E=["onClose","labelledBy"],M=g.a.div(r||(r=d()(["\n  position: fixed;\n  z-index: 4;\n  inset: 0;\n  background: ",";\n  padding: 0 ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){var n=e.theme;return"".concat(n.colors.neutral800,"1F")}),(function(e){return e.theme.spaces[8]})),T=g()(m.Box)(a||(a=d()(["\n  width: ","rem;\n"])),51.875),w=function(e){var n=e.onClose,t=e.labelledBy,r=l()(e,E);return Object(s.useEffect)((function(){var e=document.body;return e.classList.add("lock-body-scroll"),function(){e.classList.remove("lock-body-scroll")}}),[]),p.a.createElement(y.Portal,null,p.a.createElement(x.Provider,{value:n},p.a.createElement(M,{onClick:n},p.a.createElement(v.FocusTrap,{onEscape:n},p.a.createElement(T,i()({"aria-labelledby":t,onClick:function(e){return e.stopPropagation()},background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog","aria-modal":!0},r))))))};w.propTypes={labelledBy:b.a.string.isRequired,onClose:b.a.func.isRequired};var O,j,C,N=t(34),k=t.n(N),D=t(9),z=t(63),I=g()(m.Box)(O||(O=d()(["\n  border-radius: "," "," 0 0;\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral150})),L=function(e){var n=e.children,t=e.closeLabel,r=Object(s.useContext)(x);return p.a.createElement(I,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},p.a.createElement(D.Flex,{justifyContent:"space-between"},n,p.a.createElement(z.IconButton,{onClick:r,"aria-label":t,icon:p.a.createElement(k.a,null)})))};L.defaultProps={closeLabel:"Close the modal"},L.propTypes={children:b.a.node.isRequired,closeLabel:b.a.string};var A,R=g()(m.Box)(j||(j=d()(["\n  border-radius: 0 0 "," ",";\n  border-top: 1px solid ",";\n"])),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.neutral150})),S=g()(D.Flex)(C||(C=d()(["\n  & > * + * {\n    margin-left: ",";\n  }\n"])),(function(e){return e.theme.spaces[2]})),B=function(e){var n=e.startActions,t=e.endActions;return p.a.createElement(R,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100"},p.a.createElement(D.Flex,{justifyContent:"space-between"},p.a.createElement(S,null,n),p.a.createElement(S,null,t)))};B.defaultProps={endActions:void 0,startActions:void 0},B.propTypes={endActions:b.a.node,startActions:b.a.node};var P=g()(m.Box)(A||(A=d()(["\n  overflow: auto;\n  max-height: 60vh;\n"]))),q=function(e){return p.a.createElement(P,i()({paddingTop:6,paddingBottom:6,paddingLeft:8,paddingRight:8},e))}},function(e,n,t){"use strict";t.r(n),t.d(n,"NumberInput",(function(){return H}));var r=t(6),a=t.n(r),o=t(10),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(35),b=t.n(h),m=t(2),v=t.n(m),y=t(27);function x(){return(x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}let E=new Map,M=!1;try{M="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(e){}let T=!1;try{T="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(e){}const w={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class O{constructor(e,n){void 0===n&&(n={}),this.numberFormatter=void 0,this.options=void 0,this.numberFormatter=function(e,n){void 0===n&&(n={});let{numberingSystem:t}=n;t&&-1===e.indexOf("-u-nu-")&&(e=e+"-u-nu-"+t);if("unit"===n.style&&!T){var r;let{unit:e,unitDisplay:t="short"}=n;if(!e)throw new Error('unit option must be provided with style: "unit"');if(null==(r=w[e])||!r[t])throw new Error("Unsupported unit "+e+" with unitDisplay = "+t);n=x({},n,{style:"decimal"})}let a=e+(n?Object.entries(n).sort((e,n)=>e[0]<n[0]?-1:1).join():"");if(E.has(a))return E.get(a);let o=new Intl.NumberFormat(e,n);return E.set(a,o),o}(e,n),this.options=n}format(e){let n="";if(n=M||null==this.options.signDisplay?this.numberFormatter.format(e):function(e,n,t){if("auto"===n)return e.format(t);if("never"===n)return e.format(Math.abs(t));{let r=!1;if("always"===n?r=t>0||Object.is(t,0):"exceptZero"===n&&(Object.is(t,-0)||Object.is(t,0)?t=Math.abs(t):r=t>0),r){let n=e.format(-t),r=e.format(t),a=n.replace(r,"").replace(/\u200e|\u061C/,"");return 1!==[...a].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),n.replace(r,"!!!").replace(a,"+").replace("!!!",r)}return e.format(t)}}(this.numberFormatter,this.options.signDisplay,e),"unit"===this.options.style&&!T){var t;let{unit:e,unitDisplay:r="short",locale:a}=this.resolvedOptions(),o=null==(t=w[e])?void 0:t[r];n+=o[a]||o.default}return n}formatToParts(e){return this.numberFormatter.formatToParts(e)}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return M||null==this.options.signDisplay||(e=x({},e,{signDisplay:this.options.signDisplay})),T||"unit"!==this.options.style||(e=x({},e,{style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay})),e}}const j=new RegExp("^.*\\(.*\\).*$"),C=["latn","arab","hanidec"];class N{constructor(e,n){void 0===n&&(n={}),this.locale=void 0,this.options=void 0,this.locale=e,this.options=n}parse(e){return D(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,n,t){return D(this.locale,this.options,e).isValidPartialNumber(e,n,t)}getNumberingSystem(e){return D(this.locale,this.options,e).options.numberingSystem}}const k=new Map;function D(e,n,t){let r=z(e,n);if(!e.includes("-nu-")&&!r.isValidPartialNumber(t))for(let a of C)if(a!==r.options.numberingSystem){let r=z(e+(e.includes("-u-")?"-nu-":"-u-nu-")+a,n);if(r.isValidPartialNumber(t))return r}return r}function z(e,n){let t=e+(n?Object.entries(n).sort((e,n)=>e[0]<n[0]?-1:1).join():""),r=k.get(t);return r||(r=new I(e,n),k.set(t,r)),r}class I{constructor(e,n){void 0===n&&(n={}),this.formatter=void 0,this.options=void 0,this.symbols=void 0,this.formatter=new Intl.NumberFormat(e,n),this.options=this.formatter.resolvedOptions(),this.symbols=function(e,n,t){var r,a,o,i,c;let l=e.formatToParts(-10000.111),u=e.formatToParts(10000.111),d=e.formatToParts(1),s=null!=(r=null==(a=l.find(e=>"minusSign"===e.type))?void 0:a.value)?r:"-",p=null==(o=u.find(e=>"plusSign"===e.type))?void 0:o.value;p||"exceptZero"!==(null==t?void 0:t.signDisplay)&&"always"!==(null==t?void 0:t.signDisplay)||(p="+");let f=null==(i=l.find(e=>"decimal"===e.type))?void 0:i.value,g=null==(c=l.find(e=>"group"===e.type))?void 0:c.value,h=l.filter(e=>!L.has(e.type)).map(e=>R(e.value)),b=d.filter(e=>!L.has(e.type)).map(e=>R(e.value)),m=[...new Set([...b,...h])].sort((e,n)=>n.length-e.length),v=new RegExp(m.join("|")+"|[\\p{White_Space}]","gu"),y=[...new Intl.NumberFormat(n.locale,{useGrouping:!1}).format(9876543210)].reverse(),x=new Map(y.map((e,n)=>[e,n])),E=new RegExp("["+y.join("")+"]","g");return{minusSign:s,plusSign:p,decimal:f,group:g,literals:v,numeral:E,index:e=>String(x.get(e))}}(this.formatter,this.options,n)}parse(e){let n=this.sanitize(e);n=A(n,this.symbols.group,"").replace(this.symbols.decimal,".").replace(this.symbols.minusSign,"-").replace(this.symbols.numeral,this.symbols.index);let t=n?+n:NaN;if(isNaN(t))return NaN;var r;("accounting"===this.options.currencySign&&j.test(e)&&(t*=-1),"percent"===this.options.style)&&(t/=100,t=+t.toFixed((null!=(r=this.options.maximumFractionDigits)?r:0)+2));return t}sanitize(e){return e=(e=e.replace(this.symbols.literals,"")).replace("-",this.symbols.minusSign),"arab"===this.options.numberingSystem&&(e=A(e=(e=e.replace(",",this.symbols.decimal)).replace(String.fromCharCode(1548),this.symbols.decimal),".",this.symbols.group)),"fr-FR"===this.options.locale&&(e=A(e,".",String.fromCharCode(8239))),e}isValidPartialNumber(e,n,t){return void 0===n&&(n=-1/0),void 0===t&&(t=1/0),(e=this.sanitize(e)).startsWith(this.symbols.minusSign)&&n<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&t>0&&(e=e.slice(this.symbols.plusSign.length)),!e.startsWith(this.symbols.group)&&0===(e=A(e,this.symbols.group,"").replace(this.symbols.numeral,"").replace(this.symbols.decimal,"")).length}}const L=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]);function A(e,n,t){return e.replaceAll?e.replaceAll(n,t):e.split(n).join(t)}function R(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}var S,B=t(16),P=t(26),q=t(41),F=t(15),U=t(11),Q=function(){return"undefined"==typeof navigator?"en-EN":navigator.language?navigator.language:navigator.userLanguage?navigator.userLanguage:"en-EN"},W=["size","startAction","name","hint","error","label","labelAction","id","onValueChange","value","step","required","disabled"],Y=v.a.button(S||(S=d()(["\n  display: flex;\n  height: 1rem;\n  align-items: ",";\n  transform: translateY(",");\n  cursor: ",";\n  svg {\n    display: block;\n    height: ","rem;\n    transform: ",";\n  }\n"])),(function(e){return e.reverse?"flex-end":"flex-start"}),(function(e){return e.reverse?"-2px":"2px"}),(function(e){return e.disabled?"not-allowed":void 0}),.25,(function(e){return e.reverse?"rotateX(180deg)":void 0})),H=p.a.forwardRef((function(e,n){var t=e.size,r=e.startAction,o=e.name,c=e.hint,u=e.error,d=e.label,f=e.labelAction,g=e.id,h=e.onValueChange,m=e.value,v=e.step,y=e.required,x=e.disabled,E=l()(e,W),M=Object(s.useState)(null==m?"":String(m)),T=i()(M,2),w=T[0],j=T[1],C=Object(F.a)("numberinput",g),k=Object(s.useRef)(new N(Q())),D=Object(s.useRef)(new O(Q()));if(!d&&!E["aria-label"])throw new Error('The NumberInput component needs a "label" or an "aria-label" props');var z=function(e){if(""===w)return h(v),void j(String(v));if(isNaN(w)){var n=k.current.parse(w),t=(isNaN(n)?0:n)+v,r=D.current.format(t);return h(t),void j(e?String(t):r)}h(m+v),j(String(m+v))},I=function(e){if(""===w)return h(-v),void j(String(-v));if(isNaN(w)){var n=k.current.parse(w),t=(isNaN(n)?0:n)-v,r=D.current.format(t);return h(t),void j(e?String(t):r)}h(m-v),j(String(m-v))};return p.a.createElement(B.Field,{name:o,hint:c,error:u,id:C},p.a.createElement(P.Stack,{spacing:1},d&&p.a.createElement(B.FieldLabel,{required:y,action:f},d),p.a.createElement(B.FieldInput,a()({ref:n,startAction:r,disabled:x,type:"text",inputmode:"decimal",onChange:function(e){var n=e.target.value;if(k.current.isValidPartialNumber(n)){var t=""===n?void 0:k.current.parse(n);void 0===t||isNaN(t)?h(void 0):h(t),j(e.target.value)}},onKeyDown:function(e){if(!x)switch(e.key){case U.a.DOWN:e.preventDefault(),I(!0);break;case U.a.UP:e.preventDefault(),z(!0)}},onBlur:function(){j(void 0===m?void 0:D.current.format(m))},onFocus:function(){void 0!==m&&j(String(k.current.parse(w)))},value:null!=w?w:"",size:t,endAction:p.a.createElement(p.a.Fragment,null,p.a.createElement(Y,{disabled:x,"aria-hidden":!0,reverse:!0,onClick:function(){z()},tabIndex:-1,type:"button","data-testid":"ArrowUp"},p.a.createElement(q.Icon,{as:b.a,color:"neutral500"})),p.a.createElement(Y,{disabled:x,"aria-hidden":!0,onClick:function(){I()},tabIndex:-1,type:"button","data-testid":"ArrowDown"},p.a.createElement(q.Icon,{as:b.a,color:"neutral500"})))},E)),p.a.createElement(B.FieldHint,null),p.a.createElement(B.FieldError,null)))}));H.displayName="NumberInput",H.defaultProps={"aria-label":void 0,disabled:!1,error:void 0,hint:void 0,id:void 0,label:void 0,labelAction:void 0,required:!1,size:"M",startAction:void 0,step:1,value:void 0},H.propTypes={"aria-label":g.a.string,disabled:g.a.bool,error:g.a.string,hint:g.a.string,id:g.a.string,label:g.a.string,labelAction:g.a.element,name:g.a.string.isRequired,onValueChange:g.a.func.isRequired,required:g.a.bool,size:g.a.oneOf(Object.keys(y.a.input)),startAction:g.a.element,step:g.a.number,value:g.a.number}},function(e,n,t){"use strict";t.r(n),t.d(n,"Pagination",(function(){return v})),t.d(n,"PreviousLink",(function(){return _})),t.d(n,"NextLink",(function(){return G})),t.d(n,"PageLink",(function(){return V})),t.d(n,"Dots",(function(){return K}));var r,a,o=t(3),i=t.n(o),c=t(1),l=t.n(c),u=t(2),d=t.n(u),s=t(0),p=t.n(s),f=t(9),g=Object(c.createContext)({activePage:1,pageCount:1}),h=function(){return Object(c.useContext)(g)},b=d.a.nav(r||(r=i()([""]))),m=d()(f.Flex)(a||(a=i()(["\n  & > * + * {\n    margin-left: ",";\n  }\n"])),(function(e){return e.theme.spaces[1]})),v=function(e){var n=e.children,t=e.label,r=e.activePage,a=e.pageCount;return l.a.createElement(g.Provider,{value:{activePage:r,pageCount:a}},l.a.createElement(b,{"aria-label":t},l.a.createElement(m,{as:"ul"},c.Children.map(n,(function(e,n){return l.a.createElement("li",{key:n},e)})))))};v.defaultProps={label:"pagination"},v.propTypes={activePage:p.a.number.isRequired,children:p.a.node.isRequired,label:p.a.string,pageCount:p.a.number.isRequired};var y,x,E,M,T,w=t(6),O=t.n(w),j=t(5),C=t.n(j),N=t(58),k=t.n(N),D=t(51),z=t.n(D),I=t(36),L=t(21),A=t(8),R=t(14),S=["children","to"],B=["children","to"],P=["number","children"],q=["children"],F=d()(A.Typography)(y||(y=i()(["\n  line-height: revert;\n"]))),U={active:!0},Q=d()(I.NavLink).withConfig({shouldForwardProp:function(e,n){return!U[e]&&n(e)}})(x||(x=i()(["\n  padding: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  text-decoration: none;\n  display: flex;\n\n  ","\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.borderRadius}),(function(e){var n=e.active,t=e.theme;return n?t.shadows.filterShadow:void 0}),R.a),W=d()(Q)(E||(E=i()(["\n  color: ",";\n  background: ",";\n\n  &:hover {\n    box-shadow: ",";\n  }\n"])),(function(e){var n=e.theme;return e.active?n.colors.primary700:n.colors.neutral800}),(function(e){var n=e.theme;return e.active?n.colors.neutral0:void 0}),(function(e){return e.theme.shadows.filterShadow})),Y=d()(Q)(M||(M=i()(["\n  font-size: 0.7rem;\n  svg path {\n    fill: ",";\n  }\n\n  &:focus,\n  &:hover {\n    svg path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),(function(e){return e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600}),(function(e){return e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700}),(function(e){return e["aria-disabled"]?"\n  pointer-events: none;\n    ":void 0})),H=d()(Q)(T||(T=i()(["\n  color: ",";\n"])),(function(e){return e.theme.colors.neutral800})),_=function(e){var n=e.children,t=e.to,r=C()(e,S),a=1===h().activePage;return l.a.createElement(Y,O()({to:a?"#":t,"aria-disabled":a,tabIndex:a?-1:void 0},r),l.a.createElement(L.VisuallyHidden,null,n),l.a.createElement(k.a,{"aria-hidden":!0}))};_.displayName="PreviousLink";var G=function(e){var n=e.children,t=e.to,r=C()(e,B),a=h(),o=a.activePage===a.pageCount;return l.a.createElement(Y,O()({to:o?"#":t,"aria-disabled":o,tabIndex:o?-1:void 0},r),l.a.createElement(L.VisuallyHidden,null,n),l.a.createElement(z.a,{"aria-hidden":!0}))};G.displayName="NextLink";var V=function(e){var n=e.number,t=e.children,r=C()(e,P),a=h().activePage===n;return l.a.createElement(W,O()({},r,{active:a}),l.a.createElement(L.VisuallyHidden,null,t),l.a.createElement(F,{"aria-hidden":!0,variant:"pi",fontWeight:a?"bold":null},n))};V.displayName="PageLink";var K=function(e){var n=e.children,t=C()(e,q);return l.a.createElement(H,O()({},t,{as:"div"}),l.a.createElement(L.VisuallyHidden,null,n),l.a.createElement(F,{"aria-hidden":!0,variant:"pi"},"…"))};V.propTypes={children:p.a.node.isRequired,number:p.a.number.isRequired};var Z={children:p.a.node.isRequired,to:p.a.string.isRequired};G.propTypes=Z,_.propTypes=Z,K.propTypes={children:p.a.node.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"ThemeProvider",(function(){return h})),t.d(n,"useTheme",(function(){return b}));var r,a=t(3),o=t.n(a),i=t(1),c=t.n(i),l=t(0),u=t.n(l),d=t(2),s=t(21),p=t(56),f=function(){return c.a.createElement(s.VisuallyHidden,null,c.a.createElement("p",{role:"log","aria-live":"polite",id:p.a.Log,"aria-relevant":"all"}),c.a.createElement("p",{role:"status","aria-live":"polite",id:p.a.Status,"aria-relevant":"all"}),c.a.createElement("p",{role:"alert","aria-live":"assertive",id:p.a.Alert,"aria-relevant":"all"}))},g=Object(d.createGlobalStyle)(r||(r=o()(['\n /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  /* My styles */\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n\n  *:focus-visible {\n    outline: 2px solid ',";\n    outline-offset: 2px;\n  }\n\n  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */\n  *:focus:not(:focus-visible) {\n    outline: none;\n  }\n\n  body,html{\n    height: 100%;\n  }\n  body {\n    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  }\n\n  button {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n    color: inherit;\n    font-size: 100%;\n    cursor: pointer;\n    font: inherit;\n  }\n\n  textarea {\n    font: inherit;\n  }\n\n  .lock-body-scroll {\n    height: 100vh;\n    overflow-y: hidden;\n  }\n"])),(function(e){return e.theme.colors.primary600})),h=function(e){var n=e.children,t=e.theme;return i.createElement(d.ThemeProvider,{theme:t},i.createElement(g,null),n,i.createElement(f,null))};h.propTypes={children:u.a.node.isRequired,theme:u.a.object.isRequired};var b=function(){return Object(d.useTheme)()}},function(e,n,t){"use strict";t.r(n),t.d(n,"Alert",(function(){return U}));var r,a,o,i,c,l=t(6),u=t.n(l),d=t(5),s=t.n(d),p=t(3),f=t.n(p),g=t(1),h=t.n(g),b=t(0),m=t.n(b),v=t(2),y=t.n(v),x=t(84),E=t.n(x),M=t(85),T=t.n(M),w=t(86),O=t.n(w),j=t(34),C=t.n(j),N=t(4),k=t(8),D=t(9),z=function(e){var n=e.theme,t=e.variant;return"danger"===t?n.colors.danger700:"success"===t?n.colors.success700:n.colors.primary700},I=t(14),L=["variant"],A=["title","children","variant","onClose","closeLabel","titleAs","action"],R=y()(N.Box)(r||(r=f()(["\n  flex: 1;\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n"]))),S=y()(N.Box)(a||(a=f()(["\n  border: 1px solid ",";\n  background: ",";\n  box-shadow: ",";\n"])),(function(e){var n=e.theme,t=e.variant;return"danger"===t?n.colors.danger200:"success"===t?n.colors.success200:n.colors.primary200}),(function(e){var n=e.theme,t=e.variant;return"danger"===t?n.colors.danger100:"success"===t?n.colors.success100:n.colors.primary100}),(function(e){return e.theme.shadows.filterShadow})),B=y.a.button(o||(o=f()(["\n  border: none;\n  background: transparent;\n  font-size: ","rem;\n  svg path {\n    fill: ",";\n  }\n  margin-top: ",";\n  ",";\n"])),.75,(function(e){return e.theme.colors.neutral700}),(function(e){return e.theme.spaces[1]}),I.a),P=y()(N.Box)(i||(i=f()(["\n  font-size: ","rem;\n  svg path {\n    fill: ",";\n  }\n"])),1.25,z),q=function(e){var n=e.variant,t=s()(e,L);return"success"===n?h.a.createElement(T.a,t):"danger"===n?h.a.createElement(O.a,t):h.a.createElement(E.a,t)},F=y()(N.Box)(c||(c=f()(["\n  // Checked with the designers, validated\n  padding-top: 1px;\n\n  & a > span {\n    color: ",";\n\n    svg path {\n      fill: ",";\n    }\n  }\n"])),z,z),U=function(e){var n=e.title,t=e.children,r=e.variant,a=e.onClose,o=e.closeLabel,i=e.titleAs,c=e.action,l=s()(e,A);return h.a.createElement(S,u()({hasRadius:!0,paddingLeft:5,paddingRight:6,paddingTop:5,variant:r},l),h.a.createElement(D.Flex,{alignItems:"flex-start"},h.a.createElement(P,{paddingRight:3,variant:r},h.a.createElement(q,{variant:r,"aria-hidden":!0})),h.a.createElement(R,{role:"danger"===r?"alert":"status"},h.a.createElement(N.Box,{paddingBottom:2,paddingRight:1},h.a.createElement(k.Typography,{fontWeight:"bold",textColor:"neutral800",as:i},n)),h.a.createElement(N.Box,{paddingBottom:c?2:5,paddingRight:2},h.a.createElement(k.Typography,{as:"p",textColor:"neutral800"},t)),c&&h.a.createElement(F,{paddingBottom:5,variant:r},c)),h.a.createElement(B,{onClick:a,"aria-label":o},h.a.createElement(C.a,{"aria-hidden":!0}))))};U.defaultProps={action:void 0,variant:"default",titleAs:"p"},U.propTypes={action:m.a.element,children:m.a.string.isRequired,closeLabel:m.a.string.isRequired,onClose:m.a.func.isRequired,title:m.a.string.isRequired,titleAs:m.a.string,variant:m.a.oneOf(["danger","success","default"])},q.propTypes={variant:U.propTypes.variant}},function(e,n,t){"use strict";t.r(n),t.d(n,"Main",(function(){return v})),t.d(n,"SkipToContent",(function(){return M}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(2),h=t.n(g),b=["labelledBy"],m=h.a.main(r||(r=u()(["\n  // To prevent global outline on focus visible to force an outline when Main is focused\n  &:focus-visible {\n    outline: none;\n  }\n"]))),v=function(e){var n=e.labelledBy,t=c()(e,b),r=n||"main-content-title";return s.a.createElement(m,o()({"aria-labelledby":r,id:"main-content",tabIndex:-1},t))};v.defaultProps={labelledBy:void 0},v.propTypes={labelledBy:f.a.string};var y,x=t(4),E=h()(x.Box)(y||(y=u()(["\n  text-decoration: none;\n  position: absolute;\n  z-index: 9999;\n  left: -100%;\n  top: -100%;\n\n  &:focus {\n    left: ",";\n    top: ",";\n  }\n"])),(function(e){return e.theme.spaces[3]}),(function(e){return e.theme.spaces[3]})),M=function(e){var n=e.children;return s.a.createElement(E,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},n)};M.propTypes={children:f.a.node.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"Textarea",(function(){return k}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(16),b=t(2),m=t.n(b),v=t(14),y=["disabled"],x=m.a.div(r||(r=d()(["\n  border: 1px solid ",";\n  border-radius: ",";\n\n  padding-left: ",";\n  padding-right: ",";\n  padding-top: ",";\n  padding-bottom: ",";\n\n  background: ",";\n  ","\n"])),(function(e){var n=e.theme;return e.hasError?n.colors.danger600:n.colors.neutral200}),(function(e){return e.theme.borderRadius}),(function(e){var n=e.theme;return e.hasLeftAction?0:n.spaces[4]}),(function(e){var n=e.theme;return e.hasRightAction?0:n.spaces[4]}),(function(e){var n=e.theme;return"".concat(n.spaces[3])}),(function(e){var n=e.theme;return"".concat(n.spaces[3])}),(function(e){var n=e.theme;return e.disabled?n.colors.neutral150:n.colors.neutral0}),Object(v.c)()),E=m.a.textarea(a||(a=d()(["\n  display: block;\n  width: 100%;\n  font-weight: 400;\n  font-size: ","rem;\n  border: none;\n  color: ",";\n  resize: none;\n  background: inherit;\n\n  ::placeholder {\n    color: ",";\n    opacity: 1;\n  }\n\n  &:focus-within {\n    outline: none;\n  }\n"])),.875,(function(e){var n=e.theme;return e.disabled?n.colors.neutral600:n.colors.neutral800}),(function(e){return e.theme.colors.neutral500})),M=Object(s.forwardRef)((function(e,n){var t,r=e.disabled,a=l()(e,y),o=Object(h.useField)(),c=o.id,u=o.error,d=o.hint,s=o.name;u?t="".concat(c,"-error"):d&&(t="".concat(c,"-hint"));var f=Boolean(u);return p.a.createElement(x,{hasError:f,disabled:r},p.a.createElement(E,i()({id:c,name:s,ref:n,"aria-describedby":t,"aria-invalid":f,disabled:r,hasError:f},a)))}));M.displayName="TextareaInput",M.defaultProps={disabled:!1},M.propTypes={disabled:g.a.bool};var T,w=t(26),O=t(9),j=t(15),C=["name","hint","error","label","children","labelAction","id","required"],N=m.a.div(T||(T=d()(["\n  & textarea {\n    // TODO: remove when we'll have fonts in the theme\n    height: ","rem;\n    line-height: ","rem;\n  }\n\n  & textarea::placeholder {\n    font-weight: 400;\n    font-size: ","rem;\n    line-height: 1.43;\n    color: ",";\n    opacity: 1;\n  }\n"])),5,1.25,.875,(function(e){return e.theme.colors.neutral500})),k=p.a.forwardRef((function(e,n){var t=e.name,r=e.hint,a=e.error,o=e.label,c=e.children,u=e.labelAction,d=e.id,s=e.required,f=l()(e,C),g=Object(j.a)("textarea",d);return p.a.createElement(N,null,p.a.createElement(h.Field,{name:t,hint:r,error:a,id:g},p.a.createElement(w.Stack,{spacing:1},o&&p.a.createElement(O.Flex,null,p.a.createElement(h.FieldLabel,{required:s,action:u},o)),p.a.createElement(M,i()({ref:n,as:"textarea",value:c},f)),p.a.createElement(h.FieldHint,null),p.a.createElement(h.FieldError,null))))}));k.displayName="Textarea",k.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1},k.propTypes={"aria-label":g.a.string,children:g.a.string,error:g.a.string,hint:g.a.string,id:g.a.string,label:g.a.string,labelAction:g.a.element,name:g.a.string.isRequired,required:g.a.bool}},function(e,n,t){"use strict";t.r(n),t.d(n,"Crumb",(function(){return M})),t.d(n,"Breadcrumbs",(function(){return w}));var r,a=t(5),o=t.n(a),i=t(3),c=t.n(i),l=t(1),u=t.n(l),d=t(0),s=t.n(d),p=t(2),f=t.n(p),g=t(51),h=t.n(g),b=t(8),m=t(4),v=t(9),y=t(21),x=["children","label"],E=f()(v.Flex)(r||(r=c()(["\n  svg {\n    height: 10px;\n    width: 10px;\n  }\n  svg path {\n    fill: ",";\n  }\n  :last-of-type "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.colors.neutral300}),m.Box),M=function(e){var n=e.children;return u.a.createElement(E,{inline:!0,as:"li"},u.a.createElement(b.Typography,{fontWeight:"bold",color:"neutral800"},n),u.a.createElement(m.Box,{paddingLeft:3,paddingRight:3},u.a.createElement(h.a,null)))};M.displayName="Crumb",M.propTypes={children:s.a.string.isRequired};var T=s.a.shape({type:s.a.oneOf([M])}),w=function(e){var n=e.children,t=e.label,r=o()(e,x);return u.a.createElement(v.Flex,r,u.a.createElement(y.VisuallyHidden,null,t),u.a.createElement("ol",{"aria-hidden":!0},n))};w.displayName="Breadcrumbs",w.propTypes={children:s.a.oneOfType([s.a.arrayOf(T),T]).isRequired,label:s.a.string.isRequired}},function(e,n,t){"use strict";t.r(n),t.d(n,"Checkbox",(function(){return O}));var r,a=t(5),o=t.n(a),i=t(6),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(2),f=t.n(p),g=t(0),h=t.n(g),b=t(61),m=t(26),v=t(16),y=t(4),x=t(15),E=t(8),M=["children","disabled","id","hint","error"],T=f()(E.Typography)(r||(r=u()(["\n  display: flex;\n  align-items: flex-start;\n  * {\n    cursor: ",";\n  }\n"])),(function(e){return e.disabled?"not-allowed":"pointer"})),w=function(e){var n=Object(v.useField)().id;return s.a.createElement(b.BaseCheckbox,c()({id:n},e))},O=function(e){var n,t=e.children,r=e.disabled,a=e.id,i=e.hint,l=e.error,u=o()(e,M),d=Object(x.a)("checkbox",a);return l?n="".concat(d,"-error"):i&&(n="".concat(d,"-hint")),s.a.createElement(v.Field,{id:d,hint:i,error:l},s.a.createElement(m.Stack,{spacing:1},s.a.createElement(T,{as:"label",textColor:"neutral800",disabled:r},s.a.createElement(w,c()({disabled:r,"aria-describedby":n},u)),s.a.createElement(y.Box,{paddingLeft:2},t)),s.a.createElement(v.FieldHint,null),s.a.createElement(v.FieldError,null)))};O.defaultProps={disabled:!1,id:void 0,error:void 0,hint:void 0},O.propTypes={children:h.a.string.isRequired,disabled:h.a.bool,error:h.a.string,hint:h.a.string,id:h.a.oneOfType([h.a.string,h.a.number])}},function(e,n,t){"use strict";t.r(n),t.d(n,"EmptyStateLayout",(function(){return m}));var r,a,o=t(3),i=t.n(o),c=t(1),l=t.n(c),u=t(0),d=t.n(u),s=t(2),p=t.n(s),f=t(8),g=t(4),h=p()(g.Box)(r||(r=i()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]))),b=p()(g.Box)(a||(a=i()(["\n  svg {\n    height: ","rem;\n  }\n"])),5.5),m=function(e){var n=e.icon,t=e.content,r=e.action,a=e.hasRadius,o=e.shadow;return l.a.createElement(h,{padding:11,background:"neutral0",hasRadius:a,shadow:o},l.a.createElement(b,{paddingBottom:6,"aria-hidden":!0},n),l.a.createElement(g.Box,{paddingBottom:4},l.a.createElement(f.Typography,{variant:"delta",as:"p",textColor:"neutral600"},t)),r)};m.defaultProps={action:void 0,hasRadius:!0,shadow:"tableShadow"},m.propTypes={action:d.a.node,content:d.a.string.isRequired,hasRadius:d.a.bool,icon:d.a.node.isRequired,shadow:d.a.string}},function(e,n,t){"use strict";t.r(n),t.d(n,"Link",(function(){return j}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(79),v=t.n(m),y=t(36),x=t(8),E=t(4),M=t(14),T=["href","to","children","disabled","startIcon","endIcon"],w=b.a.a(r||(r=d()(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: ",";\n  svg path {\n    fill: ",";\n  }\n  svg {\n    font-size: ","rem;\n  }\n  &:hover,\n  &:active {\n    color: ",";\n  }\n  ",";\n"])),(function(e){return e.disabled?"none":void 0}),(function(e){var n=e.disabled,t=e.theme;return n?t.colors.neutral600:t.colors.primary600}),.625,(function(e){return e.theme.colors.primary800}),M.a),O=b()(E.Box)(a||(a=d()(["\n  display: flex;\n"]))),j=function(e){var n=e.href,t=e.to,r=e.children,a=e.disabled,o=e.startIcon,c=e.endIcon,u=l()(e,T),d=n?"_blank":void 0,s=n?"noreferrer noopener":void 0;return p.a.createElement(w,i()({as:t&&!a?y.NavLink:"a",target:d,rel:s,to:a?void 0:t,href:a?"#":n,disabled:a},u),o&&p.a.createElement(O,{as:"span","aria-hidden":!0,paddingRight:2},o),p.a.createElement(x.Typography,{variant:"pi",textColor:a?"neutral600":"primary600"},r),c&&!n&&p.a.createElement(O,{as:"span","aria-hidden":!0,paddingLeft:2},c),n&&p.a.createElement(O,{as:"span","aria-hidden":!0,paddingLeft:2},p.a.createElement(v.a,null)))};j.displayName="Link",j.defaultProps={href:void 0,to:void 0,disabled:!1},j.propTypes={children:g.a.node.isRequired,disabled:g.a.bool,endIcon:g.a.element,href:function(e){if(!e.disabled&&!e.to&&!e.href)return new Error("href must be defined")},startIcon:g.a.element,to:function(e){if(!e.disabled&&!e.href&&!e.to)return new Error("to must be defined")}}},function(e,n,t){"use strict";t.r(n),t.d(n,"LinkButton",(function(){return w}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(36),f=t(2),g=t.n(f),h=t(0),b=t.n(h),m=t(8),v=t(4),y=t(37),x=t(31),E=t(39),M=["variant","startIcon","endIcon","disabled","children","size","href","to"],T=g()(E.BaseButtonWrapper)(r||(r=u()(["\n  padding: ",";\n  background: ",";\n  border: none;\n  border-radius: ",";\n  "," {\n    display: flex;\n    align-items: center;\n  }\n  "," {\n    color: ",";\n  }\n  &[aria-disabled='true'] {\n    ","\n    &:active {\n      ","\n    }\n  }\n  &:hover {\n    ","\n  }\n  &:active {\n    ","\n  }\n  ","\n  /**\n    Link specific properties\n  */\n  display: inline-flex;\n  text-decoration: none;\n  pointer-events: ",";\n"])),(function(e){var n=e.theme,t=e.size;return"".concat("S"===t?n.spaces[2]:"10px"," ").concat(n.spaces[4])}),(function(e){return e.theme.colors.primary600}),(function(e){return e.theme.borderRadius}),v.Box,m.Typography,(function(e){return e.theme.colors.buttonNeutral0}),y.b,y.b,y.c,y.a,y.d,(function(e){return e.disabled?"none":void 0})),w=s.a.forwardRef((function(e,n){var t=e.variant,r=e.startIcon,a=e.endIcon,i=e.disabled,l=e.children,u=e.size,d=e.href,f=e.to,g=c()(e,M),h=d?"_blank":void 0,b=d?"noreferrer noopener":void 0;return s.a.createElement(T,o()({ref:n,"aria-disabled":i,size:u,variant:t,target:h,rel:b,to:i?void 0:f,href:i?"#":d},g,{as:f&&!i?p.NavLink:"a"}),r&&s.a.createElement(v.Box,{"aria-hidden":!0,paddingRight:2},r),"S"===u?s.a.createElement(m.Typography,{variant:"pi",fontWeight:"bold"},l):s.a.createElement(m.Typography,{fontWeight:"bold"},l),a&&s.a.createElement(v.Box,{"aria-hidden":!0,paddingLeft:2},a))}));w.displayName="LinkButton",w.defaultProps={disabled:!1,startIcon:void 0,endIcon:void 0,size:"S",variant:"default",onClick:void 0,href:void 0,to:void 0},w.propTypes={children:b.a.string.isRequired,disabled:b.a.bool,endIcon:b.a.element,href:function(e){if(!e.disabled&&!e.to&&!e.href)return new Error("href must be defined")},onClick:b.a.func,size:b.a.oneOf(x.a),startIcon:b.a.element,to:function(e){if(!e.disabled&&!e.href&&!e.to)return new Error("to must be defined")},variant:b.a.oneOf(x.c)}},function(e,n,t){"use strict";t.r(n),t.d(n,"useNotifyAT",(function(){return l}));var r=t(1),a=t(56),o=function(e){var n=document.querySelector("#".concat(a.a.Log));n&&(n.innerText=e)},i=function(e){var n=document.querySelector("#".concat(a.a.Status));n&&(n.innerText=e)},c=function(e){var n=document.querySelector("#".concat(a.a.Alert));n&&(n.innerText=e)},l=function(){return Object(r.useEffect)((function(){return function(){o(""),c(""),i("")}}),[]),{notifyLog:o,notifyAlert:c,notifyStatus:i}}},function(e,n,t){"use strict";t.r(n),t.d(n,"ProgressBar",(function(){return x}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=["min","max","value","children","size"],v=b.a.div(r||(r=d()(["\n  background: ",";\n  border-radius: ",";\n  position: relative;\n\n  width: 78px;\n  height: ",";\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    border-radius: ",";\n    width: ",";\n    background: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral600}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.borderRadius}),(function(e){var n=e.value;return"".concat(n,"%")}),(function(e){return e.theme.colors.neutral150})),y=b()(v)(a||(a=d()(["\n  width: 102px;\n  height: ",";\n"])),(function(e){return e.theme.spaces[2]})),x=function(e){var n=e.min,t=e.max,r=e.value,a=e.children,o=e.size,c=l()(e,m),u={role:"progressbar","aria-valuenow":r,"aria-valuemin":n,"aria-valuemax":t};return"M"===o?p.a.createElement(y,i()({},u,{value:r,"aria-label":a},c)):p.a.createElement(v,i()({},u,{value:r,"aria-label":a},c))};x.defaultProps={min:0,max:100,value:0,size:"M"},x.propTypes={children:g.a.string.isRequired,max:g.a.number,min:g.a.number,size:g.a.oneOf(["S","M"]),value:g.a.number}},function(e,n,t){"use strict";t.r(n),t.d(n,"Radio",(function(){return y})),t.d(n,"RadioGroup",(function(){return x.a}));var r,a=t(5),o=t.n(a),i=t(3),c=t.n(i),l=t(1),u=t.n(l),d=t(0),s=t.n(d),p=t(2),f=t.n(p),g=t(77),h=t(8),b=t(4),m=["children"],v=f()(h.Typography)(r||(r=c()(["\n  display: flex;\n  align-items: center;\n"]))),y=function(e){var n=e.children,t=o()(e,m);return u.a.createElement(v,{as:"label",textColor:"neutral800"},u.a.createElement(g.a,t),u.a.createElement(b.Box,{paddingLeft:2},n))};y.propTypes={children:s.a.string.isRequired,value:s.a.any.isRequired};var x=t(76)},function(e,n,t){"use strict";t.r(n),t.d(n,"RawLink",(function(){return j}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(79),v=t.n(m),y=t(8),x=t(4),E=t(14),M=t(81),T=["children","href","disabled","startIcon","endIcon"],w=b()(M.BaseLink)(r||(r=d()(["\n  display: inline-flex;\n  align-items: center;\n  text-decoration: none;\n  pointer-events: ",";\n\n  svg path {\n    fill: ",";\n  }\n\n  svg {\n    font-size: ","rem;\n  }\n\n  &:hover,\n  &:active {\n    color: ",";\n  }\n\n  ",";\n"])),(function(e){return e.disabled?"none":void 0}),(function(e){var n=e.disabled,t=e.theme;return n?t.colors.neutral600:t.colors.primary600}),.625,(function(e){return e.theme.colors.primary800}),E.a),O=b()(x.Box)(a||(a=d()(["\n  display: flex;\n"]))),j=p.a.forwardRef((function(e,n){var t=e.children,r=e.href,a=e.disabled,o=e.startIcon,c=e.endIcon,u=l()(e,T);return p.a.createElement(w,i()({ref:n,href:r,disabled:a},u),o&&p.a.createElement(O,{as:"span","aria-hidden":!0,paddingRight:2},o),p.a.createElement(y.Typography,{variant:"pi",textColor:a?"neutral600":"primary600"},t),c&&p.a.createElement(O,{as:"span","aria-hidden":!0,paddingLeft:2},c),r&&!c&&p.a.createElement(O,{as:"span","aria-hidden":!0,paddingLeft:2},p.a.createElement(v.a,null)))}));j.displayName="RawLink",j.defaultProps={as:void 0,href:void 0,disabled:!1,startIcon:void 0,endIcon:void 0},j.propTypes={as:g.a.elementType,children:g.a.node.isRequired,disabled:g.a.bool,endIcon:g.a.element,href:g.a.string,startIcon:g.a.element}},function(e,n,t){"use strict";t.r(n),t.d(n,"Status",(function(){return T}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(4),b=t(9),m=t(8),v=t(2),y=t.n(v),x=["variant","children"],E=y.a.div(r||(r=d()(["\n  margin-right: ",";\n  width: ","rem;\n  height: ","rem;\n  border-radius: 50%;\n  background: ",";\n"])),(function(e){return e.theme.spaces[3]}),6/16,6/16,(function(e){var n=e.theme,t=e.backgroundColor;return n.colors[t]})),M=y()(h.Box)(a||(a=d()(["\n  "," {\n    color: ",";\n  }\n"])),m.Typography,(function(e){var n=e.theme,t=e.textColor;return n.colors[t]})),T=function(e){var n=e.variant,t=e.children,r=l()(e,x),a="".concat(n,"100"),o="".concat(n,"200"),c="".concat(n,"600"),u="".concat(n,"600");return p.a.createElement(M,i()({borderColor:o,textColor:u,background:a,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5},r),p.a.createElement(b.Flex,null,p.a.createElement(E,{backgroundColor:c}),t))};T.defaultProps={variant:"primary"},T.propTypes={children:g.a.node.isRequired,variant:g.a.oneOf(["alternative","danger","neutral","primary","secondary","success","warning"])}},function(e,n,t){"use strict";t.r(n),t.d(n,"Switch",(function(){return M}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(0),g=t.n(f),h=t(2),b=t.n(h),m=t(9),v=t(4),y=["label","onChange","onLabel","offLabel","selected","visibleLabels"],x=b.a.div(r||(r=d()(["\n  background: ",";\n  border: none;\n  border-radius: 16px;\n  position: relative;\n  height: ","rem;\n  width: ","rem;\n\n  & span {\n    font-size: ",";\n  }\n\n  &:before {\n    content: '';\n    background: ",";\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    position: absolute;\n    transition: all 0.5s;\n    left: ",";\n    top: ",";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &:before {\n      transition: none;\n    }\n  }\n"])),(function(e){return e.theme.colors.danger500}),1.5,2.5,(function(e){return e.visibleLabels?"1rem":0}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),E=b.a.button(a||(a=d()(["\n  background: transparent;\n  padding: 0;\n  border: none;\n\n  &[aria-checked='true'] "," {\n    background: ",";\n  }\n\n  &[aria-checked='true'] ",":before {\n    transform: translateX(1rem);\n  }\n"])),x,(function(e){return e.theme.colors.success500}),x),M=p.a.forwardRef((function(e,n){var t=e.label,r=e.onChange,a=e.onLabel,o=e.offLabel,c=e.selected,u=e.visibleLabels,d=l()(e,y);return p.a.createElement(E,i()({ref:n,role:"switch","aria-checked":c,"aria-label":t,onClick:r,visibleLabels:u,type:"button"},d),p.a.createElement(m.Flex,null,p.a.createElement(x,null,p.a.createElement("span",null,a),p.a.createElement("span",null,o)),u&&p.a.createElement(v.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:c?"success600":"danger600"},c?a:o)))}));M.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},M.propTypes={label:g.a.string.isRequired,offLabel:g.a.string,onChange:g.a.func.isRequired,onLabel:g.a.string,selected:g.a.bool.isRequired,visibleLabels:g.a.bool},M.displayName="Switch"},function(e,n,t){"use strict";t.r(n),t.d(n,"TimePicker",(function(){return T}));var r,a=t(6),o=t.n(a),i=t(5),c=t.n(i),l=t(3),u=t.n(l),d=t(1),s=t.n(d),p=t(0),f=t.n(p),g=t(89),h=t.n(g),b=t(2),m=t.n(b),v=t(27),y=t(73),x=t(15),E=["disabled","error","hint","id","onClear","onChange","value","clearLabel","label","step","size"],M=m.a.div(r||(r=u()(["\n  display: flex;\n  align-items: center;\n  svg {\n    height: 1rem;\n    width: 1rem;\n  }\n\n  svg path {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.neutral500})),T=function(e){for(var n=e.disabled,t=e.error,r=e.hint,a=e.id,i=e.onClear,l=e.onChange,u=e.value,d=e.clearLabel,p=e.label,f=e.step,g=e.size,b=c()(e,E),m=Object(x.a)("timepicker",a),v=[],T=0,w=0;w<24;w++)for(T=0;T<60;)v.push("".concat(w<10?"0"+w:w,":").concat(T<10?"0"+T:T)),T+=f;var O,j,C,N;return s.a.createElement(y.Select,o()({id:m,label:p,placeholder:"--:--",hint:r,onClear:i,clearLabel:d,error:t,value:u?(O=u.split(":")[0],j=u.split(":")[1],C=v.reduce((function(e,n){var t=n.split(":")[0];return Math.abs(t-O)<Math.abs(e-O)?t:e}),v[0].split(":")[0]),N=v.reduce((function(e,n){var t=n.split(":")[1];return Math.abs(t-j)<Math.abs(e-j)?t:e}),v[0].split(":")[1]),"".concat(C,":").concat(N)):null,size:g,onChange:l,disabled:n,startIcon:s.a.createElement(M,null,s.a.createElement(h.a,null))},b),v.map((function(e){return s.a.createElement(y.Option,{value:e,key:e},e)})))};T.defaultProps={disabled:!1,error:void 0,hint:void 0,id:void 0,label:void 0,onClear:void 0,size:"M",step:15,value:void 0},T.propTypes={clearLabel:f.a.string.isRequired,disabled:f.a.bool,error:f.a.string,hint:f.a.string,id:f.a.oneOfType([f.a.string,f.a.number]),label:f.a.string,onChange:f.a.func.isRequired,onClear:f.a.func,size:f.a.oneOf(Object.keys(v.a.input)),step:f.a.number,value:f.a.oneOfType([f.a.arrayOf(f.a.oneOfType([f.a.string,f.a.number])),f.a.string,f.a.number])}},function(e,n,t){"use strict";t.r(n),t.d(n,"ToggleInput",(function(){return C}));var r,a,o=t(6),i=t.n(o),c=t(5),l=t.n(c),u=t(3),d=t.n(u),s=t(1),p=t.n(s),f=t(2),g=t.n(f),h=t(0),b=t.n(h),m=t(27),v=t(15),y=t(16),x=t(26),E=t(9),M=t(62),T=t(83),w=["size","error","hint","label","name","labelAction","required","id","onClear","clearLabel","checked"],O=g()(y.Field)(r||(r=d()(["\n  width: fit-content;\n"]))),j=g()(M.TextButton)(a||(a=d()(["\n  align-self: flex-end;\n  margin-left: auto;\n"]))),C=function(e){var n=e.size,t=e.error,r=e.hint,a=e.label,o=e.name,c=e.labelAction,u=e.required,d=e.id,s=e.onClear,f=e.clearLabel,g=e.checked,h=l()(e,w),b=Object(v.a)("toggleinput",d);return p.a.createElement(O,{name:o,hint:r,error:t,id:b},p.a.createElement(x.Stack,{spacing:1},p.a.createElement(E.Flex,null,p.a.createElement(y.FieldLabel,{required:u,action:c},a),f&&s&&null!==g&&p.a.createElement(j,{onClick:s},f)),p.a.createElement(T.ToggleCheckbox,i()({id:b,size:n,name:o,checked:g},h),a),p.a.createElement(y.FieldHint,null),p.a.createElement(y.FieldError,null)))};C.displayName="ToggleInput",C.defaultProps={checked:!1,clearLabel:void 0,error:void 0,hint:void 0,id:void 0,label:"",labelAction:void 0,name:"",onClear:void 0,required:!1,size:"M"},C.propTypes={checked:b.a.bool,clearLabel:b.a.string,error:b.a.string,hint:b.a.string,id:b.a.string,label:b.a.string,labelAction:b.a.node,name:b.a.string,onClear:b.a.func,required:b.a.bool,size:b.a.oneOf(Object.keys(m.a.input))}},function(e,n,t){"use strict";t.r(n);var r=t(98);t.d(n,"AccordionTypography",(function(){return r.AccordionTypography})),t.d(n,"Accordion",(function(){return r.Accordion})),t.d(n,"AccordionContent",(function(){return r.AccordionContent})),t.d(n,"AccordionToggle",(function(){return r.AccordionToggle})),t.d(n,"AccordionGroup",(function(){return r.AccordionGroup}));var a=t(108);t.d(n,"Alert",(function(){return a.Alert}));var o=t(74);t.d(n,"Avatar",(function(){return o.Avatar})),t.d(n,"Initials",(function(){return o.Initials})),t.d(n,"AvatarGroup",(function(){return o.AvatarGroup}));var i=t(52);t.d(n,"Badge",(function(){return i.Badge}));var c=t(39);t.d(n,"BaseButtonWrapper",(function(){return c.BaseButtonWrapper})),t.d(n,"BaseButton",(function(){return c.BaseButton}));var l=t(61);t.d(n,"BaseCheckbox",(function(){return l.BaseCheckbox}));var u=t(81);t.d(n,"BaseLink",(function(){return u.BaseLink}));var d=t(90);t.d(n,"BaseRadio",(function(){return d.BaseRadio})),t.d(n,"RadioGroup",(function(){return d.RadioGroup}));var s=t(4);t.d(n,"Box",(function(){return s.Box}));var p=t(111);t.d(n,"Crumb",(function(){return p.Crumb})),t.d(n,"Breadcrumbs",(function(){return p.Breadcrumbs}));var f=t(59);t.d(n,"ButtonWrapper",(function(){return f.ButtonWrapper})),t.d(n,"Button",(function(){return f.Button}));var g=t(93);t.d(n,"Card",(function(){return g.Card})),t.d(n,"CardAction",(function(){return g.CardAction})),t.d(n,"CardAsset",(function(){return g.CardAsset})),t.d(n,"CardBadge",(function(){return g.CardBadge})),t.d(n,"CardBody",(function(){return g.CardBody})),t.d(n,"CardCheckbox",(function(){return g.CardCheckbox})),t.d(n,"CardContent",(function(){return g.CardContent})),t.d(n,"CardHeader",(function(){return g.CardHeader})),t.d(n,"CardTimer",(function(){return g.CardTimer})),t.d(n,"CardTitle",(function(){return g.CardTitle})),t.d(n,"CardSubtitle",(function(){return g.CardSubtitle}));var h=t(101);t.d(n,"Carousel",(function(){return h.Carousel})),t.d(n,"CarouselInput",(function(){return h.CarouselInput})),t.d(n,"CarouselActions",(function(){return h.CarouselActions})),t.d(n,"CarouselImage",(function(){return h.CarouselImage})),t.d(n,"CarouselSlide",(function(){return h.CarouselSlide}));var b=t(112);t.d(n,"Checkbox",(function(){return b.Checkbox}));var m=t(102);t.d(n,"Combobox",(function(){return m.Combobox})),t.d(n,"CreatableCombobox",(function(){return m.CreatableCombobox})),t.d(n,"ComboboxOption",(function(){return m.ComboboxOption}));var v=t(103);t.d(n,"Dialog",(function(){return v.Dialog})),t.d(n,"DialogBody",(function(){return v.DialogBody})),t.d(n,"DialogFooter",(function(){return v.DialogFooter}));var y=t(92);t.d(n,"DatePicker",(function(){return y.DatePicker}));var x=t(54);t.d(n,"Divider",(function(){return x.Divider}));var E=t(113);t.d(n,"EmptyStateLayout",(function(){return E.EmptyStateLayout}));var M=t(16);t.d(n,"Field",(function(){return M.Field})),t.d(n,"FieldLabel",(function(){return M.FieldLabel})),t.d(n,"InputWrapper",(function(){return M.InputWrapper})),t.d(n,"FieldInput",(function(){return M.FieldInput})),t.d(n,"FieldHint",(function(){return M.FieldHint})),t.d(n,"FieldError",(function(){return M.FieldError})),t.d(n,"FieldContext",(function(){return M.FieldContext})),t.d(n,"useField",(function(){return M.useField})),t.d(n,"FieldAction",(function(){return M.FieldAction}));var T=t(53);t.d(n,"FocusTrap",(function(){return T.FocusTrap}));var w=t(49);t.d(n,"Grid",(function(){return w.Grid})),t.d(n,"GridItem",(function(){return w.GridItem}));var O=t(41);t.d(n,"Icon",(function(){return O.Icon}));var j=t(63);t.d(n,"IconButtonGroup",(function(){return j.IconButtonGroup})),t.d(n,"IconButton",(function(){return j.IconButton}));var C=t(80);t.d(n,"KeyboardNavigable",(function(){return C.KeyboardNavigable}));var N=t(96);t.d(n,"Layout",(function(){return N.Layout})),t.d(n,"ActionLayout",(function(){return N.ActionLayout})),t.d(n,"ContentLayout",(function(){return N.ContentLayout})),t.d(n,"HeaderLayout",(function(){return N.HeaderLayout})),t.d(n,"BaseHeaderLayout",(function(){return N.BaseHeaderLayout})),t.d(n,"TwoColsLayout",(function(){return N.TwoColsLayout})),t.d(n,"GridLayout",(function(){return N.GridLayout}));var k=t(114);t.d(n,"Link",(function(){return k.Link}));var D=t(115);t.d(n,"LinkButton",(function(){return D.LinkButton}));var z=t(116);t.d(n,"useNotifyAT",(function(){return z.useNotifyAT}));var I=t(91);t.d(n,"Loader",(function(){return I.Loader}));var L=t(109);t.d(n,"Main",(function(){return L.Main})),t.d(n,"SkipToContent",(function(){return L.SkipToContent}));var A=t(94);t.d(n,"MainNav",(function(){return A.MainNav})),t.d(n,"NavBrand",(function(){return A.NavBrand})),t.d(n,"NavLink",(function(){return A.NavLink})),t.d(n,"NavSection",(function(){return A.NavSection})),t.d(n,"NavSections",(function(){return A.NavSections})),t.d(n,"NavUser",(function(){return A.NavUser})),t.d(n,"NavCondense",(function(){return A.NavCondense}));var R=t(104);t.d(n,"ModalLayout",(function(){return R.ModalLayout})),t.d(n,"ModalHeader",(function(){return R.ModalHeader})),t.d(n,"ModalFooter",(function(){return R.ModalFooter})),t.d(n,"ModalBody",(function(){return R.ModalBody}));var S=t(105);t.d(n,"NumberInput",(function(){return S.NumberInput}));var B=t(106);t.d(n,"Pagination",(function(){return B.Pagination})),t.d(n,"PreviousLink",(function(){return B.PreviousLink})),t.d(n,"NextLink",(function(){return B.NextLink})),t.d(n,"PageLink",(function(){return B.PageLink})),t.d(n,"Dots",(function(){return B.Dots}));var P=t(40);t.d(n,"position",(function(){return P.position})),t.d(n,"Popover",(function(){return P.Popover}));var q=t(29);t.d(n,"Portal",(function(){return q.Portal}));var F=t(117);t.d(n,"ProgressBar",(function(){return F.ProgressBar}));var U=t(118);t.d(n,"Radio",(function(){return U.Radio}));var Q=t(119);t.d(n,"RawLink",(function(){return Q.RawLink}));var W=t(48);t.d(n,"RawTable",(function(){return W.RawTable})),t.d(n,"RawTh",(function(){return W.RawTh})),t.d(n,"RawTd",(function(){return W.RawTd})),t.d(n,"RawThead",(function(){return W.RawThead})),t.d(n,"RawTbody",(function(){return W.RawTbody})),t.d(n,"RawTr",(function(){return W.RawTr}));var Y=t(9);t.d(n,"Flex",(function(){return Y.Flex}));var H=t(75);t.d(n,"Searchbar",(function(){return H.Searchbar})),t.d(n,"SearchForm",(function(){return H.SearchForm}));var _=t(73);t.d(n,"Select",(function(){return _.Select})),t.d(n,"Option",(function(){return _.Option})),t.d(n,"OptGroup",(function(){return _.OptGroup})),t.d(n,"MultiSelectNested",(function(){return _.MultiSelectNested})),t.d(n,"SelectList",(function(){return _.SelectList}));var G=t(60);t.d(n,"MenuItem",(function(){return G.MenuItem})),t.d(n,"SimpleMenu",(function(){return G.SimpleMenu}));var V=t(26);t.d(n,"Stack",(function(){return V.Stack}));var K=t(120);t.d(n,"Status",(function(){return K.Status}));var Z=t(95);t.d(n,"subNavWidth",(function(){return Z.subNavWidth})),t.d(n,"SubNav",(function(){return Z.SubNav})),t.d(n,"SubNavHeader",(function(){return Z.SubNavHeader})),t.d(n,"SubNavLink",(function(){return Z.SubNavLink})),t.d(n,"SubNavLinkSection",(function(){return Z.SubNavLinkSection})),t.d(n,"SubNavSection",(function(){return Z.SubNavSection})),t.d(n,"SubNavSections",(function(){return Z.SubNavSections}));var X=t(121);t.d(n,"Switch",(function(){return X.Switch}));var J=t(100);t.d(n,"Tabs",(function(){return J.Tabs})),t.d(n,"Tab",(function(){return J.Tab})),t.d(n,"TabPanels",(function(){return J.TabPanels})),t.d(n,"TabPanel",(function(){return J.TabPanel})),t.d(n,"TabGroup",(function(){return J.TabGroup}));var $=t(99);t.d(n,"Table",(function(){return $.Table})),t.d(n,"Tbody",(function(){return $.Tbody})),t.d(n,"Thead",(function(){return $.Thead})),t.d(n,"Tr",(function(){return $.Tr})),t.d(n,"Th",(function(){return $.Th})),t.d(n,"Td",(function(){return $.Td})),t.d(n,"TFooter",(function(){return $.TFooter}));var ee=t(70);t.d(n,"Tag",(function(){return ee.Tag}));var ne=t(62);t.d(n,"TextButton",(function(){return ne.TextButton}));var te=t(82);t.d(n,"TextInput",(function(){return te.TextInput}));var re=t(110);t.d(n,"Textarea",(function(){return re.Textarea}));var ae=t(107);t.d(n,"ThemeProvider",(function(){return ae.ThemeProvider})),t.d(n,"useTheme",(function(){return ae.useTheme}));var oe=t(122);t.d(n,"TimePicker",(function(){return oe.TimePicker}));var ie=t(83);t.d(n,"ToggleCheckbox",(function(){return ie.ToggleCheckbox}));var ce=t(123);t.d(n,"ToggleInput",(function(){return ce.ToggleInput}));var le=t(46);t.d(n,"Tooltip",(function(){return le.Tooltip}));var ue=t(8);t.d(n,"Typography",(function(){return ue.Typography}));var de=t(21);t.d(n,"VisuallyHidden",(function(){return de.VisuallyHidden}));var se=t(97);t.d(n,"lightTheme",(function(){return se.lightTheme})),t.d(n,"darkTheme",(function(){return se.darkTheme})),t.d(n,"extendTheme",(function(){return se.extendTheme})),t.d(n,"getThemeSize",(function(){return se.getThemeSize})),t.d(n,"inputFocusStyle",(function(){return se.inputFocusStyle})),t.d(n,"buttonFocusStyle",(function(){return se.buttonFocusStyle}))}])}));

/***/ }),

/***/ 37694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=25)}({0:function(t,r){t.exports=e},25:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-1.438-11.066L16.158 7.5 18 9.245l-7.438 7.18-4.462-4.1 1.84-1.745 2.622 2.354z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 33109:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=53)}({0:function(t,r){t.exports=e},53:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 4 4",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{width:4,height:4,rx:2,fill:"#A5A5BA"}))}}})}));

/***/ }),

/***/ 74657:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=72)}({0:function(t,r){t.exports=e},72:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M16.235 2.824a1.412 1.412 0 010-2.824h6.353C23.368 0 24 .633 24 1.412v6.353a1.412 1.412 0 01-2.823 0V4.82l-8.179 8.178a1.412 1.412 0 01-1.996-1.996l8.178-8.178h-2.945zm4.942 10.588a1.412 1.412 0 012.823 0v9.176c0 .78-.632 1.412-1.412 1.412H1.412C.632 24 0 23.368 0 22.588V1.412C0 .632.632 0 1.412 0h9.176a1.412 1.412 0 010 2.824H2.824v18.353h18.353v-7.765z",fill:"#32324D"}))}}})}));

/***/ }),

/***/ 69994:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=96)}({0:function(t,r){t.exports=e},96:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 4.92a1.56 1.56 0 110 3.12 1.56 1.56 0 010-3.12zm3.84 13.06a.5.5 0 01-.5.5h-6.2a.5.5 0 01-.5-.5v-.92a.5.5 0 01.5-.5h2.14v-5.28H9.86a.5.5 0 01-.5-.5v-.92a.5.5 0 01.5-.5h2.84a.5.5 0 01.5.5v6.7h2.14a.5.5 0 01.5.5v.92z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 37124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _reactRedux=__webpack_require__(37424);var _immutable=__webpack_require__(43393);var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(35395);var _Box=__webpack_require__(94117);var _Check=_interopRequireDefault(__webpack_require__(22754));var _Button=__webpack_require__(64459);var _Sitemap=__webpack_require__(85583);var Header=function Header(){var settings=(0,_reactRedux.useSelector)(function(state){return state.getIn(['sitemap','settings'],(0,_immutable.Map)());});var initialData=(0,_reactRedux.useSelector)(function(state){return state.getIn(['sitemap','initialData'],(0,_immutable.Map)());});var toggleNotification=(0,_helperPlugin.useNotification)();var dispatch=(0,_reactRedux.useDispatch)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var disabled=JSON.stringify(settings)===JSON.stringify(initialData);var handleSubmit=function handleSubmit(e){e.preventDefault();dispatch((0,_Sitemap.submit)(settings.toJS(),toggleNotification));};var handleCancel=function handleCancel(e){e.preventDefault();dispatch((0,_Sitemap.discardAllChanges)());};return/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral100"},/*#__PURE__*/_react["default"].createElement(_Layout.HeaderLayout,{primaryAction:/*#__PURE__*/_react["default"].createElement(_Box.Box,{style:{display:"flex"}},/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:handleCancel,disabled:disabled,type:"cancel",size:"L",variant:"secondary"},formatMessage({id:'sitemap.Button.Cancel',defaultMessage:'Cancel'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{style:{marginLeft:'10px'},onClick:handleSubmit,disabled:disabled,type:"submit",startIcon:/*#__PURE__*/_react["default"].createElement(_Check["default"],null),size:"L"},formatMessage({id:'sitemap.Button.Save',defaultMessage:'Save'}))),title:formatMessage({id:'sitemap.Header.Title',defaultMessage:'Sitemap'}),subtitle:formatMessage({id:'sitemap.Header.Description',defaultMessage:'Settings for the sitemap XML'}),as:"h2"}));};var _default=Header;exports["default"]=_default;

/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(53547));var _reactIntl=__webpack_require__(97132);var _ModalLayout=__webpack_require__(68991);var _Typography=__webpack_require__(33483);var _Button=__webpack_require__(64459);var _TextInput=__webpack_require__(99136);var _Grid=__webpack_require__(39272);var _fp=__webpack_require__(78230);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}var ModalForm=function ModalForm(props){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var onCancel=props.onCancel,isOpen=props.isOpen,languages=props.languages,onSave=props.onSave,hostnameOverrides=props.hostnameOverrides;var _useState=(0,_react.useState)({}),_useState2=(0,_slicedToArray2["default"])(_useState,2),hostnames=_useState2[0],setHostnames=_useState2[1];(0,_react.useEffect)(function(){if(isOpen){setHostnames(_objectSpread({},hostnameOverrides));}else{setHostnames({});}},[isOpen]);if(!isOpen){return null;}return/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout,{onClose:function onClose(){return onCancel();},labelledBy:"title"},/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},formatMessage({id:'sitemap.HostnameOverrides.Label',defaultMessage:'Hostname overrides'}))),/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody,null,/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},languages.map(function(language){return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{key:language.code,col:6,s:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{placeholder:"https://".concat(language.code,".strapi.io"),label:"".concat(language.name," hostname"),name:"hostname",value:hostnames[language.code],hint:formatMessage({id:'sitemap.HostnameOverrides.Description',defaultMessage:'Specify hostname per language'},{langcode:language.code}),onChange:function onChange(e){if(!e.target.value){delete hostnames[language.code];}else{hostnames[language.code]=e.target.value;}setHostnames(_objectSpread({},hostnames));}}));}))),/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter,{startActions:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return onCancel();},variant:"tertiary"},formatMessage({id:'sitemap.Button.Cancel',defaultMessage:'Cancel'})),endActions:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return onSave(hostnames);},disabled:(0,_fp.isEqual)(hostnames,hostnameOverrides)},formatMessage({id:'sitemap.Button.Save',defaultMessage:'Save'}))}));};var _default=ModalForm;exports["default"]=_default;

/***/ }),

/***/ 28255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _immutable=__webpack_require__(43393);var _reactIntl=__webpack_require__(97132);var _reactRedux=__webpack_require__(37424);var _helperPlugin=__webpack_require__(68547);var _Typography=__webpack_require__(33483);var _Box=__webpack_require__(94117);var _Button=__webpack_require__(64459);var _Link=__webpack_require__(56156);var _Sitemap=__webpack_require__(85583);var _timeFormat=__webpack_require__(24263);var Info=function Info(){var hasHostname=(0,_reactRedux.useSelector)(function(state){return state.getIn(['sitemap','initialData','hostname'],(0,_immutable.Map)());});var sitemapInfo=(0,_reactRedux.useSelector)(function(state){return state.getIn(['sitemap','info'],(0,_immutable.Map)());});var dispatch=(0,_reactRedux.useDispatch)();var toggleNotification=(0,_helperPlugin.useNotification)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var updateDate=new Date(sitemapInfo.get('updateTime'));// Format month, day and time.
var month=updateDate.toLocaleString('en',{month:'numeric'});var day=updateDate.toLocaleString('en',{day:'numeric'});var year=updateDate.getFullYear().toString().slice(2);var time=(0,_timeFormat.formatTime)(updateDate,true);var content=function content(){if(!hasHostname){return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",style:{marginBottom:'10px'}},formatMessage({id:'sitemap.Info.NoHostname.Title',defaultMessage:'Set your hostname'})),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega"},formatMessage({id:'sitemap.Info.NoHostname.Description',defaultMessage:'Before you can generate the sitemap you have to specify the hostname of your website.'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){document.getElementById('tabs-2-tab').click();setTimeout(function(){return document.querySelector('input[name="hostname"]').focus();},0);},variant:"secondary",style:{marginTop:'15px'}},formatMessage({id:'sitemap.Header.Button.GoToSettings',defaultMessage:'Go to settings'}))));}else if(sitemapInfo.size===0){return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",style:{marginBottom:'10px'}},formatMessage({id:'sitemap.Info.NoSitemap.Title',defaultMessage:'No sitemap XML present'})),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega"},formatMessage({id:'sitemap.Info.NoSitemap.Description',defaultMessage:'Generate your first sitemap XML with the button below.'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return dispatch((0,_Sitemap.generateSitemap)(toggleNotification));},variant:"secondary",style:{marginTop:'15px'}},formatMessage({id:'sitemap.Header.Button.Generate',defaultMessage:'Generate sitemap'}))));}else{return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",style:{marginBottom:'10px'}},formatMessage({id:'sitemap.Info.SitemapIsPresent.Title',defaultMessage:'Sitemap XML is present'})),/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega"},formatMessage({id:'sitemap.Info.SitemapIsPresent.LastUpdatedAt',defaultMessage:'Last updated at:'})),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",fontWeight:"bold",style:{marginLeft:'5px'}},"".concat(month,"/").concat(day,"/").concat(year," - ").concat(time))),/*#__PURE__*/_react["default"].createElement("div",{style:{marginBottom:'15px'}},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega"},formatMessage({id:'sitemap.Info.SitemapIsPresent.AmountOfURLs',defaultMessage:'Amount of URLs:'})),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",fontWeight:"bold",style:{marginLeft:'5px'}},sitemapInfo.get('urls'))),/*#__PURE__*/_react["default"].createElement("div",{style:{display:'flex',flexDirection:'row'}},/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return dispatch((0,_Sitemap.generateSitemap)(toggleNotification));},variant:"secondary",style:{marginRight:'10px'}},formatMessage({id:'sitemap.Header.Button.Generate',defaultMessage:'Generate sitemap'})),/*#__PURE__*/_react["default"].createElement(_Link.Link,{href:"".concat(strapi.backendURL).concat(sitemapInfo.get('location')),target:"_blank"},formatMessage({id:'sitemap.Header.Button.SitemapLink',defaultMessage:'Go to the sitemap'}))));}};return/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:8,paddingRight:8},/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral0",hasRadius:true,paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,shadow:"filterShadow"},content()));};var _default=Info;exports["default"]=_default;

/***/ }),

/***/ 17747:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Pencil=_interopRequireDefault(__webpack_require__(56204));var _Trash=_interopRequireDefault(__webpack_require__(62982));var _Box=__webpack_require__(94117);var _Flex=__webpack_require__(40264);var _Table=__webpack_require__(43546);var _Typography=__webpack_require__(33483);var _IconButton=__webpack_require__(49549);var _reactRedux=__webpack_require__(37424);var CustomRow=function CustomRow(_ref){var openModal=_ref.openModal,entry=_ref.entry;var contentTypes=(0,_reactRedux.useSelector)(function(store){return store.getIn(['sitemap','contentTypes'],{});});var handleEditClick=function handleEditClick(e){openModal(entry.name,entry.langcode);e.stopPropagation();};var handleDeleteClick=function handleDeleteClick(e){entry.onDelete(entry.name,entry.langcode);e.stopPropagation();};return/*#__PURE__*/_react["default"].createElement(_Table.Tr,{key:entry.id},/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",textColor:"neutral800"},contentTypes[entry.name]&&contentTypes[entry.name].displayName)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",textColor:"neutral800"},entry.langcode==='und'?'N/A':entry.langcode)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",textColor:"neutral800"},entry.pattern)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:handleEditClick,label:"Edit",noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Pencil["default"],null)}),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:1},/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:handleDeleteClick,label:"Delete",noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null)})))));};var _default=CustomRow;exports["default"]=_default;

/***/ }),

/***/ 56158:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _helperPlugin=__webpack_require__(68547);var _Plus=_interopRequireDefault(__webpack_require__(89326));var _VisuallyHidden=__webpack_require__(19631);var _Table=__webpack_require__(43546);var _Typography=__webpack_require__(33483);var _Button=__webpack_require__(64459);var _reactIntl=__webpack_require__(97132);var _Row=_interopRequireDefault(__webpack_require__(17747));var ListComponent=function ListComponent(props){var items=props.items,openModal=props.openModal,onDelete=props.onDelete;var formattedItems=[];var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;if(!items){return null;}items.map(function(item,key){item.get('languages').map(function(langItem,langKey){var formattedItem={};formattedItem.name=key;formattedItem.langcode=langKey;formattedItem.pattern=langItem.get('pattern');formattedItem.onDelete=onDelete;formattedItems.push(formattedItem);});});if(items.size===0){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoContent,{content:{id:'sitemap.Empty.URLBundles.Description',defaultMessage:'No URL bundles have been configured yet.'},action:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return openModal();}},formatMessage({id:'sitemap.Empty.URLBundles.Button',defaultMessage:'Add the first URL bundle'}))});}return/*#__PURE__*/_react["default"].createElement(_Table.Table,{colCount:4,rowCount:formattedItems.length+1,footer:/*#__PURE__*/_react["default"].createElement(_Table.TFooter,{onClick:function onClick(){return openModal();},icon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:'sitemap.Button.AddURLBundle',defaultMessage:'Add another URL bundle'}))},/*#__PURE__*/_react["default"].createElement(_Table.Thead,null,/*#__PURE__*/_react["default"].createElement(_Table.Tr,null,/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},"Type")),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},"Langcode")),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},"Pattern")),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden,null,"Actions")))),/*#__PURE__*/_react["default"].createElement(_Table.Tbody,null,formattedItems.map(function(item){return/*#__PURE__*/_react["default"].createElement(_Row["default"],{key:item.name,entry:item,openModal:openModal});})));};var _default=ListComponent;exports["default"]=_default;

/***/ }),

/***/ 50740:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Pencil=_interopRequireDefault(__webpack_require__(56204));var _Trash=_interopRequireDefault(__webpack_require__(62982));var _Box=__webpack_require__(94117);var _Flex=__webpack_require__(40264);var _Table=__webpack_require__(43546);var _Typography=__webpack_require__(33483);var _IconButton=__webpack_require__(49549);var CustomRow=function CustomRow(_ref){var openModal=_ref.openModal,entry=_ref.entry;var handleEditClick=function handleEditClick(e){openModal(entry.name);e.stopPropagation();};var handleDeleteClick=function handleDeleteClick(e){entry.onDelete(entry.name);e.stopPropagation();};return/*#__PURE__*/_react["default"].createElement(_Table.Tr,{key:entry.id},/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",textColor:"neutral800"},entry.name)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",textColor:"neutral800"},entry.priority)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"omega",textColor:"neutral800"},entry.changefreq)),/*#__PURE__*/_react["default"].createElement(_Table.Td,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:handleEditClick,label:"Edit",noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Pencil["default"],null)}),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:1},/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:handleDeleteClick,label:"Delete",noBorder:true,icon:/*#__PURE__*/_react["default"].createElement(_Trash["default"],null)})))));};var _default=CustomRow;exports["default"]=_default;

/***/ }),

/***/ 15548:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _helperPlugin=__webpack_require__(68547);var _Plus=_interopRequireDefault(__webpack_require__(89326));var _VisuallyHidden=__webpack_require__(19631);var _Table=__webpack_require__(43546);var _Typography=__webpack_require__(33483);var _Button=__webpack_require__(64459);var _reactIntl=__webpack_require__(97132);var _Row=_interopRequireDefault(__webpack_require__(50740));var ListComponent=function ListComponent(props){var items=props.items,openModal=props.openModal;var formattedItems=[];var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;if(!items){return null;}items.map(function(item,key){var formattedItem={};formattedItem.name=key;formattedItem.priority=item.get('priority');formattedItem.changefreq=item.get('changefreq');formattedItem.onDelete=props.onDelete;formattedItems.push(formattedItem);});if(items.size===0){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.NoContent,{content:{id:'sitemap.Empty.CustomURLs.Description',defaultMessage:'No custom URLs have been configured yet.'},action:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return openModal();}},formatMessage({id:'sitemap.Empty.CustomURLs.Button',defaultMessage:'Add the first URL'}))});}return/*#__PURE__*/_react["default"].createElement(_Table.Table,{colCount:4,rowCount:formattedItems.length+1,footer:/*#__PURE__*/_react["default"].createElement(_Table.TFooter,{onClick:function onClick(){return openModal();},icon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:'sitemap.Button.AddCustomURL',defaultMessage:'Add another URL'}))},/*#__PURE__*/_react["default"].createElement(_Table.Thead,null,/*#__PURE__*/_react["default"].createElement(_Table.Tr,null,/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},"URL")),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},"Priority")),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"sigma"},"ChangeFreq")),/*#__PURE__*/_react["default"].createElement(_Table.Th,null,/*#__PURE__*/_react["default"].createElement(_VisuallyHidden.VisuallyHidden,null,"Actions")))),/*#__PURE__*/_react["default"].createElement(_Table.Tbody,null,formattedItems.map(function(item){return/*#__PURE__*/_react["default"].createElement(_Row["default"],{key:item.name,entry:item,openModal:openModal});})));};var _default=ListComponent;exports["default"]=_default;

/***/ }),

/***/ 82466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(53547));var _reactIntl=__webpack_require__(97132);var _fp=__webpack_require__(78230);var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _Grid=__webpack_require__(39272);var _TextInput=__webpack_require__(99136);var _Select=__webpack_require__(2632);var _Popover=__webpack_require__(39589);var _Box=__webpack_require__(94117);var _Stack=__webpack_require__(9524);var _SelectContentTypes=_interopRequireDefault(__webpack_require__(53472));var _mapper=_interopRequireDefault(__webpack_require__(4990));var _SelectLanguage=_interopRequireDefault(__webpack_require__(93885));var _useActiveElement=_interopRequireDefault(__webpack_require__(36909));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var CollectionForm=function CollectionForm(props){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var activeElement=(0,_useActiveElement["default"])();var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),showPopover=_useState2[0],setShowPopover=_useState2[1];var patternRef=(0,_react.useRef)();var contentTypes=props.contentTypes,allowedFields=props.allowedFields,_onChange=props.onChange,onCancel=props.onCancel,id=props.id,modifiedState=props.modifiedState,uid=props.uid,setUid=props.setUid,langcode=props.langcode,setLangcode=props.setLangcode,patternInvalid=props.patternInvalid,setPatternInvalid=props.setPatternInvalid;var handleSelectChange=function handleSelectChange(contentType){var lang=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'und';setLangcode(lang);setUid(contentType);onCancel(false);};(0,_react.useEffect)(function(){if(modifiedState.getIn([uid,'languages',langcode,'pattern'],'').endsWith('[')&&activeElement.name==='pattern'){setShowPopover(true);}else{setShowPopover(false);}},[modifiedState.getIn([uid,'languages',langcode,'pattern'],''),activeElement]);var patternHint=function patternHint(){var base=formatMessage({id:'sitemap.Settings.Field.Pattern.DescriptionPart1',defaultMessage:'Create a dynamic URL pattern'});var suffix='';if(allowedFields[uid]){suffix=" ".concat(formatMessage({id:'sitemap.Settings.Field.Pattern.DescriptionPart2',defaultMessage:'using'})," ");allowedFields[uid].map(function(fieldName,i){if(i===0){suffix="".concat(suffix,"[").concat(fieldName,"]");}else if(allowedFields[uid].length!==i+1){suffix="".concat(suffix,", [").concat(fieldName,"]");}else{suffix="".concat(suffix," ").concat(formatMessage({id:'sitemap.Settings.Field.Pattern.DescriptionPart3',defaultMessage:'and'})," [").concat(fieldName,"]");}});}return base+suffix;};var HoverBox=/*#__PURE__*/(0,_styledComponents["default"])(_Box.Box).withConfig({displayName:"Collection__HoverBox",componentId:"sc-ayq1cm-0"})(["cursor:pointer;&:hover:not([aria-disabled='true']){background:",";}"],function(_ref){var theme=_ref.theme;return theme.colors.primary100;});return/*#__PURE__*/_react["default"].createElement("form",{style:{borderTop:'1px solid #f5f5f6',paddingTop:30}},/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:6},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12},/*#__PURE__*/_react["default"].createElement(_SelectContentTypes["default"],{contentTypes:contentTypes,onChange:function onChange(value){return handleSelectChange(value);},value:uid,disabled:!(0,_fp.isEmpty)(id),modifiedContentTypes:modifiedState})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12},/*#__PURE__*/_react["default"].createElement(_SelectLanguage["default"],{contentType:contentTypes[uid],onChange:function onChange(value){return handleSelectChange(uid,value);},value:langcode})))),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12},/*#__PURE__*/_react["default"].createElement("div",{ref:patternRef},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{label:formatMessage({id:'sitemap.Settings.Field.Pattern.Label',defaultMessage:'Pattern'}),name:"pattern",value:modifiedState.getIn([uid,'languages',langcode,'pattern'],''),hint:patternHint(),disabled:!uid||contentTypes[uid].locales&&!langcode,error:patternInvalid.invalid?patternInvalid.message:'',placeholder:"/en/pages/[id]",onChange:/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(e){return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(e.target.value.match(/^[A-Za-z0-9-_.~[\]/]*$/)){_onChange(uid,langcode,'pattern',e.target.value);setPatternInvalid({invalid:false});}case 1:case"end":return _context.stop();}}},_callee);}));return function(_x){return _ref2.apply(this,arguments);};}()})),patternRef&&showPopover&&/*#__PURE__*/_react["default"].createElement(_Popover.Popover,{source:patternRef,spacing:-14,fullWidth:true},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:1},allowedFields[uid].map(function(fieldName){return/*#__PURE__*/_react["default"].createElement(HoverBox,{key:fieldName,padding:2,onClick:function onClick(){var newPattern="".concat(modifiedState.getIn([uid,'languages',langcode,'pattern'],'')).concat(fieldName,"]");_onChange(uid,langcode,'pattern',newPattern);}},fieldName);})))),Object.keys(_mapper["default"]).map(function(input){return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12,key:input},/*#__PURE__*/_react["default"].createElement(_Select.Select,{name:input,label:formatMessage({id:"sitemap.Settings.Field.".concat(input.replace(/^\w/,function(c){return c.toUpperCase();}),".Label"),defaultMessage:input.replace(/^\w/,function(c){return c.toUpperCase();})}),hint:formatMessage({id:"sitemap.Settings.Field.".concat(input.replace(/^\w/,function(c){return c.toUpperCase();}),".Description"),defaultMessage:''}),disabled:!uid||contentTypes[uid].locales&&!langcode,onChange:function onChange(value){return _onChange(uid,langcode,input,value);},value:modifiedState.getIn([uid,'languages',langcode,input],_mapper["default"][input].value)},_mapper["default"][input].options.map(function(option){return/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:option,key:option},option);})));})))));};var _default=CollectionForm;exports["default"]=_default;

/***/ }),

/***/ 19136:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _reactIntl=__webpack_require__(97132);var _Grid=__webpack_require__(39272);var _TextInput=__webpack_require__(99136);var _Select=__webpack_require__(2632);var _mapper=_interopRequireDefault(__webpack_require__(4990));var CustomForm=function CustomForm(props){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _onChange=props.onChange,onCancel=props.onCancel,modifiedState=props.modifiedState,id=props.id,uid=props.uid,setUid=props.setUid;var handleCustomChange=function handleCustomChange(e){var contentType=e.target.value;if(contentType.match(/^[A-Za-z0-9-_.~/]*$/)){setUid(contentType);}else{contentType=uid;}// Set initial values
onCancel(false);Object.keys(_mapper["default"]).map(function(input){_onChange(contentType,input,_mapper["default"][input].value);});};return/*#__PURE__*/_react["default"].createElement("form",null,/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:6},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{label:formatMessage({id:'sitemap.Settings.Field.URL.Label',defaultMessage:'Slug'}),name:"url",value:uid,hint:formatMessage({id:'sitemap.Settings.Field.URL.Description',defaultMessage:'This field forces the UID type regex'}),disabled:id,onChange:function onChange(e){return handleCustomChange(e);}})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},Object.keys(_mapper["default"]).map(function(input){return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12,key:input},/*#__PURE__*/_react["default"].createElement(_Select.Select,{name:input,label:formatMessage({id:"sitemap.Settings.Field.".concat(input.replace(/^\w/,function(c){return c.toUpperCase();}),".Label"),defaultMessage:input.replace(/^\w/,function(c){return c.toUpperCase();})}),hint:formatMessage({id:"sitemap.Settings.Field.".concat(input.replace(/^\w/,function(c){return c.toUpperCase();}),".Description"),defaultMessage:''}),disabled:!uid,onChange:function onChange(value){return _onChange(uid,input,value);},value:modifiedState.getIn([uid,input],_mapper["default"][input].value)},_mapper["default"][input].options.map(function(option){return/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:option,key:option},option);})));})))));};var _default=CustomForm;exports["default"]=_default;

/***/ }),

/***/ 88455:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _extends2=_interopRequireDefault(__webpack_require__(67154));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(53547));var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _ModalLayout=__webpack_require__(68991);var _Button=__webpack_require__(64459);var _Typography=__webpack_require__(33483);var _Custom=_interopRequireDefault(__webpack_require__(19136));var _Collection=_interopRequireDefault(__webpack_require__(82466));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ModalForm=function ModalForm(props){var _useState=(0,_react.useState)(''),_useState2=(0,_slicedToArray2["default"])(_useState,2),uid=_useState2[0],setUid=_useState2[1];var _useState3=(0,_react.useState)('und'),_useState4=(0,_slicedToArray2["default"])(_useState3,2),langcode=_useState4[0],setLangcode=_useState4[1];var _useState5=(0,_react.useState)({invalid:false}),_useState6=(0,_slicedToArray2["default"])(_useState5,2),patternInvalid=_useState6[0],setPatternInvalid=_useState6[1];var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var onSubmit=props.onSubmit,onCancel=props.onCancel,isOpen=props.isOpen,id=props.id,lang=props.lang,type=props.type,modifiedState=props.modifiedState,contentTypes=props.contentTypes;(0,_react.useEffect)(function(){setPatternInvalid({invalid:false});if(id&&!uid){setUid(id);}else{setUid('');}if(lang&&langcode==='und'){setLangcode(lang);}else{setLangcode('und');}},[isOpen]);if(!isOpen){return null;}var submitForm=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(e){var response;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(type==='collection')){_context.next=7;break;}_context.next=3;return(0,_helperPlugin.request)('/sitemap/pattern/validate-pattern',{method:'POST',body:{pattern:modifiedState.getIn([uid,'languages',langcode,'pattern'],null),modelName:uid}});case 3:response=_context.sent;if(!response.valid){setPatternInvalid({invalid:true,message:response.message});}else onSubmit(e);_context.next=8;break;case 7:onSubmit(e);case 8:case"end":return _context.stop();}}},_callee);}));return function submitForm(_x){return _ref.apply(this,arguments);};}();var form=function form(){switch(type){case'collection':return/*#__PURE__*/_react["default"].createElement(_Collection["default"],(0,_extends2["default"])({uid:uid,setUid:setUid,langcode:langcode,setLangcode:setLangcode,setPatternInvalid:setPatternInvalid,patternInvalid:patternInvalid},props));case'custom':return/*#__PURE__*/_react["default"].createElement(_Custom["default"],(0,_extends2["default"])({uid:uid,setUid:setUid},props));default:return null;}};return/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout,{onClose:function onClose(){return onCancel();},labelledBy:"title"},/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},formatMessage({id:'sitemap.Modal.HeaderTitle',defaultMessage:'Sitemap entries'})," - ",type)),/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody,null,form()),/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter,{startActions:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return onCancel();},variant:"tertiary"},formatMessage({id:'sitemap.Button.Cancel',defaultMessage:'Cancel'})),endActions:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:submitForm,disabled:!uid||contentTypes&&contentTypes[uid].locales&&!langcode},formatMessage({id:'sitemap.Button.Save',defaultMessage:'Save'}))}));};var _default=ModalForm;exports["default"]=_default;

/***/ }),

/***/ 4990:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _default={priority:{options:[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0],value:0.5},changefreq:{options:['always','hourly','daily','weekly','monthly','yearly','never'],value:'monthly'}};exports["default"]=_default;

/***/ }),

/***/ 53472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireDefault(__webpack_require__(53547));var _Select=__webpack_require__(2632);var _reactIntl=__webpack_require__(97132);var SelectContentTypes=function SelectContentTypes(props){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var contentTypes=props.contentTypes,_onChange=props.onChange,disabled=props.disabled,value=props.value;return/*#__PURE__*/_react["default"].createElement(_Select.Select,{name:"select",label:formatMessage({id:'sitemap.Settings.Field.SelectContentType.Label',defaultMessage:'Content Type'}),hint:formatMessage({id:'sitemap.Settings.Field.SelectContentType.Description',defaultMessage:'Select a content type.'}),disabled:disabled,onChange:function onChange(newValue){return _onChange(newValue);},value:value},Object.entries(contentTypes).map(function(_ref){var _ref2=(0,_slicedToArray2["default"])(_ref,2),uid=_ref2[0],displayName=_ref2[1].displayName;return/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:uid,key:uid},displayName);}));};var _default=SelectContentTypes;exports["default"]=_default;

/***/ }),

/***/ 93885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireDefault(__webpack_require__(53547));var _Select=__webpack_require__(2632);var _Checkbox=__webpack_require__(43499);var _Box=__webpack_require__(94117);var _reactIntl=__webpack_require__(97132);var SelectLanguage=function SelectLanguage(props){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var contentType=props.contentType,_onChange=props.onChange,value=props.value;if(!contentType)return null;if(!contentType.locales)return null;return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Select.Select,{name:"select",label:formatMessage({id:'sitemap.Settings.Field.SelectLanguage.Label',defaultMessage:'Language'}),hint:formatMessage({id:'sitemap.Settings.Field.SelectLanguage.Description',defaultMessage:'Select a language.'}),onChange:function onChange(newValue){return _onChange(newValue);},value:value,disabled:value==='und'},Object.entries(contentType.locales).map(function(_ref){var _ref2=(0,_slicedToArray2["default"])(_ref,2),uid=_ref2[0],displayName=_ref2[1];return/*#__PURE__*/_react["default"].createElement(_Select.Option,{value:uid,key:uid},displayName);})),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingTop:4,paddingBottom:4},/*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox,{onValueChange:function onValueChange(cbValue){if(value==='und'){_onChange(null);}else{_onChange('und');}},value:value==='und'},formatMessage({id:'sitemap.Settings.Field.SelectLanguage.SameForAll',defaultMessage:'Same for all languages'}))));};var _default=SelectLanguage;exports["default"]=_default;

/***/ }),

/***/ 66303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _Tabs=__webpack_require__(1738);var _Box=__webpack_require__(94117);var _reactIntl=__webpack_require__(97132);var _CollectionURLs=_interopRequireDefault(__webpack_require__(73642));var _CustomURLs=_interopRequireDefault(__webpack_require__(59619));var _Settings=_interopRequireDefault(__webpack_require__(36296));var SitemapTabs=function SitemapTabs(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_Box.Box,{padding:8},/*#__PURE__*/_react["default"].createElement(_Tabs.TabGroup,{id:"tabs",label:"Main tabs"},/*#__PURE__*/_react["default"].createElement(_Tabs.Tabs,null,/*#__PURE__*/_react["default"].createElement(_Tabs.Tab,null,formatMessage({id:'sitemap.Settings.CollectionTitle',defaultMessage:'URL bundles'})),/*#__PURE__*/_react["default"].createElement(_Tabs.Tab,null,formatMessage({id:'sitemap.Settings.CustomTitle',defaultMessage:'Custom URLs'})),/*#__PURE__*/_react["default"].createElement(_Tabs.Tab,null,formatMessage({id:'sitemap.Settings.SettingsTitle',defaultMessage:'Settings'}))),/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanels,null,/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel,null,/*#__PURE__*/_react["default"].createElement(_CollectionURLs["default"],null)),/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel,null,/*#__PURE__*/_react["default"].createElement(_CustomURLs["default"],null)),/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel,null,/*#__PURE__*/_react["default"].createElement(_Box.Box,{padding:6,background:"neutral0",shadow:"filterShadow"},/*#__PURE__*/_react["default"].createElement(_Settings["default"],null))))));};var _default=SitemapTabs;exports["default"]=_default;

/***/ }),

/***/ 45350:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.__DEBUG__=exports.UPDATE_SETTINGS=exports.SUBMIT_MODAL=exports.SUBMIT=exports.ON_SUBMIT_SUCCEEDED=exports.ON_CHANGE_SETTINGS=exports.ON_CHANGE_CUSTOM_ENTRY=exports.ON_CHANGE_CONTENT_TYPES=exports.HAS_SITEMAP=exports.GET_SITEMAP_INFO_SUCCEEDED=exports.GET_SETTINGS_SUCCEEDED=exports.GET_SETTINGS=exports.GET_LANGUAGES_SUCCEEDED=exports.GET_CONTENT_TYPES_SUCCEEDED=exports.GET_CONTENT_TYPES=exports.GET_ALLOWED_FIELDS_SUCCEEDED=exports.GENERATE_SITEMAP=exports.DISCARD_MODIFIED_CONTENT_TYPES=exports.DISCARD_ALL_CHANGES=exports.DELETE_CUSTOM_ENTRY=exports.DELETE_CONTENT_TYPE=void 0;/**
 *
 * ConfigPage constants
 *
 */var __DEBUG__=true;// TODO: set actual env.
exports.__DEBUG__=__DEBUG__;var SUBMIT='Sitemap/ConfigPage/SUBMIT';exports.SUBMIT=SUBMIT;var ON_SUBMIT_SUCCEEDED='Sitemap/ConfigPage/ON_SUBMIT_SUCCEEDED';exports.ON_SUBMIT_SUCCEEDED=ON_SUBMIT_SUCCEEDED;var SUBMIT_MODAL='Sitemap/ConfigPage/SUBMIT_MODAL';exports.SUBMIT_MODAL=SUBMIT_MODAL;var DELETE_CONTENT_TYPE='Sitemap/ConfigPage/DELETE_CONTENT_TYPE';exports.DELETE_CONTENT_TYPE=DELETE_CONTENT_TYPE;var DELETE_CUSTOM_ENTRY='Sitemap/ConfigPage/DELETE_CUSTOM_ENTRY';exports.DELETE_CUSTOM_ENTRY=DELETE_CUSTOM_ENTRY;var ON_CHANGE_CONTENT_TYPES='Sitemap/ConfigPage/ON_CHANGE_CONTENT_TYPES';exports.ON_CHANGE_CONTENT_TYPES=ON_CHANGE_CONTENT_TYPES;var GENERATE_SITEMAP='Sitemap/ConfigPage/GENERATE_SITEMAP';exports.GENERATE_SITEMAP=GENERATE_SITEMAP;var UPDATE_SETTINGS='Sitemap/ConfigPage/UPDATE_SETTINGS';exports.UPDATE_SETTINGS=UPDATE_SETTINGS;var ON_CHANGE_SETTINGS='Sitemap/ConfigPage/ON_CHANGE_SETTINGS';exports.ON_CHANGE_SETTINGS=ON_CHANGE_SETTINGS;var DISCARD_ALL_CHANGES='Sitemap/ConfigPage/DISCARD_ALL_CHANGES';exports.DISCARD_ALL_CHANGES=DISCARD_ALL_CHANGES;var DISCARD_MODIFIED_CONTENT_TYPES='Sitemap/ConfigPage/DISCARD_MODIFIED_CONTENT_TYPES';exports.DISCARD_MODIFIED_CONTENT_TYPES=DISCARD_MODIFIED_CONTENT_TYPES;var GET_SETTINGS='Sitemap/ConfigPage/GET_SETTINGS';exports.GET_SETTINGS=GET_SETTINGS;var GET_SETTINGS_SUCCEEDED='Sitemap/ConfigPage/GET_SETTINGS_SUCCEEDED';exports.GET_SETTINGS_SUCCEEDED=GET_SETTINGS_SUCCEEDED;var GET_CONTENT_TYPES='Sitemap/ConfigPage/GET_CONTENT_TYPES';exports.GET_CONTENT_TYPES=GET_CONTENT_TYPES;var GET_CONTENT_TYPES_SUCCEEDED='Sitemap/ConfigPage/GET_CONTENT_TYPES_SUCCEEDED';exports.GET_CONTENT_TYPES_SUCCEEDED=GET_CONTENT_TYPES_SUCCEEDED;var GET_LANGUAGES_SUCCEEDED='Sitemap/ConfigPage/GET_LANGUAGES_SUCCEEDED';exports.GET_LANGUAGES_SUCCEEDED=GET_LANGUAGES_SUCCEEDED;var HAS_SITEMAP='Sitemap/ConfigPage/HAS_SITEMAP';exports.HAS_SITEMAP=HAS_SITEMAP;var GET_SITEMAP_INFO_SUCCEEDED='Sitemap/ConfigPage/GET_SITEMAP_INFO_SUCCEEDED';exports.GET_SITEMAP_INFO_SUCCEEDED=GET_SITEMAP_INFO_SUCCEEDED;var ON_CHANGE_CUSTOM_ENTRY='Sitemap/ConfigPage/ON_CHANGE_CUSTOM_ENTRY';exports.ON_CHANGE_CUSTOM_ENTRY=ON_CHANGE_CUSTOM_ENTRY;var GET_ALLOWED_FIELDS_SUCCEEDED='Sitemap/ConfigPage/GET_ALLOWED_FIELDS_SUCCEEDED';exports.GET_ALLOWED_FIELDS_SUCCEEDED=GET_ALLOWED_FIELDS_SUCCEEDED;

/***/ }),

/***/ 93081:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireDefault(__webpack_require__(53547));var _reactRedux=__webpack_require__(37424);var _helperPlugin=__webpack_require__(68547);var _configureStore=__webpack_require__(66301);var _permissions=_interopRequireDefault(__webpack_require__(194));var _Main=_interopRequireDefault(__webpack_require__(32828));/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */var App=function App(){return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].settings},/*#__PURE__*/_react["default"].createElement(_reactRedux.Provider,{store:_configureStore.store},/*#__PURE__*/_react["default"].createElement(_Main["default"],null)));};var _default=App;exports["default"]=_default;

/***/ }),

/***/ 32828:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _react=_interopRequireWildcard(__webpack_require__(53547));var _reactRedux=__webpack_require__(37424);var _helperPlugin=__webpack_require__(68547);var _Tabs=_interopRequireDefault(__webpack_require__(66303));var _Header=_interopRequireDefault(__webpack_require__(37124));var _Info=_interopRequireDefault(__webpack_require__(28255));var _Sitemap=__webpack_require__(85583);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */var App=function App(){var dispatch=(0,_reactRedux.useDispatch)();var toggleNotification=(0,_helperPlugin.useNotification)();(0,_react.useEffect)(function(){dispatch((0,_Sitemap.getSettings)(toggleNotification));dispatch((0,_Sitemap.getLanguages)(toggleNotification));dispatch((0,_Sitemap.getContentTypes)(toggleNotification));dispatch((0,_Sitemap.getSitemapInfo)(toggleNotification));dispatch((0,_Sitemap.getAllowedFields)(toggleNotification));},[dispatch]);return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Header["default"],null),/*#__PURE__*/_react["default"].createElement(_Info["default"],null),/*#__PURE__*/_react["default"].createElement(_Tabs["default"],null));};var _default=App;exports["default"]=_default;

/***/ }),

/***/ 66301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.store=exports["default"]=void 0;var _redux=__webpack_require__(35281);var _reduxThunk=_interopRequireDefault(__webpack_require__(59681));var _immutable=__webpack_require__(43393);var _reducers=_interopRequireDefault(__webpack_require__(21192));var _constants=__webpack_require__(45350);var configureStore=function configureStore(){var initialStoreState=(0,_immutable.Map)();var enhancers=[];var middlewares=[_reduxThunk["default"]];var devtools;if(_constants.__DEBUG__){devtools=typeof window!=='undefined'&&typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__==='function'&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist:[]});if(devtools){console.info('[setup] ✓ Enabling Redux DevTools Extension');}}var composedEnhancers=devtools||_redux.compose;var storeEnhancers=composedEnhancers.apply(void 0,[_redux.applyMiddleware.apply(void 0,middlewares)].concat(enhancers));var store=(0,_redux.createStore)(_reducers["default"],initialStoreState,storeEnhancers);return store;};var _default=configureStore;exports["default"]=_default;var store=configureStore();exports.store=store;

/***/ }),

/***/ 24263:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.formatTime=void 0;/**
 * Make a time string double digit. So make 9 in to 09.
 *
 * @param {int} number - The number.
 *
 * @returns {int} The double digit number.
 */var doubleDigits=function doubleDigits(number){return"0".concat(number).slice(-2);};/**
 * Format a timestamp to hh:mm:ss.
 *
 * @param {int} timestamp - The unix timestamp.
 * @param {bool} withSeconds - Whether to include the seconds.
 *
 * @returns {string} The formatted time.
 */var formatTime=function formatTime(timestamp){var withSeconds=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var dateObj=new Date(timestamp);var hours=doubleDigits(dateObj.getHours());var minutes=doubleDigits(dateObj.getMinutes());var seconds=doubleDigits(dateObj.getSeconds());return"".concat(hours,":").concat(minutes).concat(withSeconds?":".concat(seconds):'');};exports.formatTime=formatTime;

/***/ }),

/***/ 36909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireDefault(__webpack_require__(53547));var _default=function _default(){var _React$useState=_react["default"].useState(document.activeElement),_React$useState2=(0,_slicedToArray2["default"])(_React$useState,2),active=_React$useState2[0],setActive=_React$useState2[1];var handleFocusIn=function handleFocusIn(e){setActive(document.activeElement);};_react["default"].useEffect(function(){document.addEventListener('focusin',handleFocusIn);return function(){document.removeEventListener('focusin',handleFocusIn);};},[]);return active;};exports["default"]=_default;

/***/ }),

/***/ 85583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.deleteContentType=deleteContentType;exports.deleteCustomEntry=deleteCustomEntry;exports.discardAllChanges=discardAllChanges;exports.discardModifiedContentTypes=discardModifiedContentTypes;exports.generateSitemap=generateSitemap;exports.getAllowedFields=getAllowedFields;exports.getAllowedFieldsSucceeded=getAllowedFieldsSucceeded;exports.getContentTypes=getContentTypes;exports.getContentTypesSucceeded=getContentTypesSucceeded;exports.getLanguages=getLanguages;exports.getLanguagesSucceeded=getLanguagesSucceeded;exports.getSettings=getSettings;exports.getSettingsSucceeded=getSettingsSucceeded;exports.getSitemapInfo=getSitemapInfo;exports.getSitemapInfoSucceeded=getSitemapInfoSucceeded;exports.onChangeContentTypes=onChangeContentTypes;exports.onChangeCustomEntry=onChangeCustomEntry;exports.onChangeSettings=onChangeSettings;exports.onSubmitSucceeded=onSubmitSucceeded;exports.submit=submit;exports.submitModal=submitModal;exports.updateSettings=updateSettings;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _helperPlugin=__webpack_require__(68547);var _immutable=__webpack_require__(43393);var _constants=__webpack_require__(45350);var _getTrad=_interopRequireDefault(__webpack_require__(13051));/**
 *
 *
 * ConfigPage actions
 *
 */ // Get initial settings
function getSettings(toggleNotification){return/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(dispatch){var settings;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return(0,_helperPlugin.request)('/sitemap/settings/',{method:'GET'});case 3:settings=_context.sent;dispatch(getSettingsSucceeded((0,_immutable.Map)(settings)));_context.next=10;break;case 7:_context.prev=7;_context.t0=_context["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 10:case"end":return _context.stop();}}},_callee,null,[[0,7]]);}));return function(_x){return _ref.apply(this,arguments);};}();}function getSettingsSucceeded(settings){return{type:_constants.GET_SETTINGS_SUCCEEDED,settings:settings};}function onChangeContentTypes(contentType,lang,key,value){return{type:_constants.ON_CHANGE_CONTENT_TYPES,contentType:contentType,lang:lang,key:key,value:value};}function onChangeCustomEntry(url,key,value){return{type:_constants.ON_CHANGE_CUSTOM_ENTRY,url:url,key:key,value:value};}function onChangeSettings(key,value){return{type:_constants.ON_CHANGE_SETTINGS,key:key,value:value};}function discardAllChanges(){return{type:_constants.DISCARD_ALL_CHANGES};}function updateSettings(settings){return{type:_constants.UPDATE_SETTINGS,settings:settings};}function discardModifiedContentTypes(){return{type:_constants.DISCARD_MODIFIED_CONTENT_TYPES};}function generateSitemap(toggleNotification){return/*#__PURE__*/function(){var _ref2=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(dispatch){var _yield$request,message;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return(0,_helperPlugin.request)('/sitemap',{method:'GET'});case 3:_yield$request=_context2.sent;message=_yield$request.message;dispatch(getSitemapInfo());toggleNotification({type:'success',message:message});_context2.next=12;break;case 9:_context2.prev=9;_context2.t0=_context2["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 12:case"end":return _context2.stop();}}},_callee2,null,[[0,9]]);}));return function(_x2){return _ref2.apply(this,arguments);};}();}function getContentTypes(toggleNotification){return/*#__PURE__*/function(){var _ref3=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(dispatch){var contentTypes;return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;_context3.next=3;return(0,_helperPlugin.request)('/sitemap/content-types/',{method:'GET'});case 3:contentTypes=_context3.sent;dispatch(getContentTypesSucceeded(contentTypes));_context3.next=10;break;case 7:_context3.prev=7;_context3.t0=_context3["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 10:case"end":return _context3.stop();}}},_callee3,null,[[0,7]]);}));return function(_x3){return _ref3.apply(this,arguments);};}();}function getContentTypesSucceeded(contentTypes){return{type:_constants.GET_CONTENT_TYPES_SUCCEEDED,contentTypes:contentTypes};}function getLanguages(toggleNotification){return/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(dispatch){var languages;return _regenerator["default"].wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;_context4.next=3;return(0,_helperPlugin.request)('/sitemap/languages/',{method:'GET'});case 3:languages=_context4.sent;dispatch(getLanguagesSucceeded(languages));_context4.next=10;break;case 7:_context4.prev=7;_context4.t0=_context4["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 10:case"end":return _context4.stop();}}},_callee4,null,[[0,7]]);}));return function(_x4){return _ref4.apply(this,arguments);};}();}function getLanguagesSucceeded(languages){return{type:_constants.GET_LANGUAGES_SUCCEEDED,languages:languages};}function submit(settings,toggleNotification){return/*#__PURE__*/function(){var _ref5=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(dispatch){return _regenerator["default"].wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;_context5.next=3;return(0,_helperPlugin.request)('/sitemap/settings/',{method:'PUT',body:settings});case 3:dispatch(onSubmitSucceeded());toggleNotification({type:'success',message:{id:(0,_getTrad["default"])('notification.success.submit')}});_context5.next=10;break;case 7:_context5.prev=7;_context5.t0=_context5["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 10:case"end":return _context5.stop();}}},_callee5,null,[[0,7]]);}));return function(_x5){return _ref5.apply(this,arguments);};}();}function onSubmitSucceeded(){return{type:_constants.ON_SUBMIT_SUCCEEDED};}function submitModal(){return{type:_constants.SUBMIT_MODAL};}function deleteContentType(key,lang){return{type:_constants.DELETE_CONTENT_TYPE,key:key,lang:lang};}function deleteCustomEntry(key){return{type:_constants.DELETE_CUSTOM_ENTRY,key:key};}function getSitemapInfo(toggleNotification){return/*#__PURE__*/function(){var _ref6=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(dispatch){var info;return _regenerator["default"].wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.prev=0;_context6.next=3;return(0,_helperPlugin.request)('/sitemap/info',{method:'GET'});case 3:info=_context6.sent;dispatch(getSitemapInfoSucceeded(info));_context6.next=10;break;case 7:_context6.prev=7;_context6.t0=_context6["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 10:case"end":return _context6.stop();}}},_callee6,null,[[0,7]]);}));return function(_x6){return _ref6.apply(this,arguments);};}();}function getSitemapInfoSucceeded(info){return{type:_constants.GET_SITEMAP_INFO_SUCCEEDED,info:info};}function getAllowedFields(toggleNotification){return/*#__PURE__*/function(){var _ref7=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(dispatch){var fields;return _regenerator["default"].wrap(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.prev=0;_context7.next=3;return(0,_helperPlugin.request)('/sitemap/pattern/allowed-fields/',{method:'GET'});case 3:fields=_context7.sent;dispatch(getAllowedFieldsSucceeded(fields));_context7.next=10;break;case 7:_context7.prev=7;_context7.t0=_context7["catch"](0);toggleNotification({type:'warning',message:{id:'notification.error'}});case 10:case"end":return _context7.stop();}}},_callee7,null,[[0,7]]);}));return function(_x7){return _ref7.apply(this,arguments);};}();}function getAllowedFieldsSucceeded(fields){return{type:_constants.GET_ALLOWED_FIELDS_SUCCEEDED,fields:fields};}

/***/ }),

/***/ 84270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=sitemapReducer;var _immutable=__webpack_require__(43393);var _constants=__webpack_require__(45350);/**
 *
 * Main reducer
 *
 */var initialState=(0,_immutable.fromJS)({info:{},allowedFields:{},settings:(0,_immutable.Map)({}),contentTypes:{},languages:[],initialData:(0,_immutable.Map)({}),modifiedContentTypes:(0,_immutable.Map)({}),modifiedCustomEntries:(0,_immutable.Map)({})});function sitemapReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case _constants.GET_SETTINGS_SUCCEEDED:return state.update('settings',function(){return(0,_immutable.fromJS)(action.settings);}).updateIn(['settings','contentTypes'],function(){return(0,_immutable.fromJS)(action.settings.get('contentTypes'));}).updateIn(['settings','customEntries'],function(){return(0,_immutable.fromJS)(action.settings.get('customEntries'));}).update('initialData',function(){return(0,_immutable.fromJS)(action.settings);}).updateIn(['initialData','contentTypes'],function(){return(0,_immutable.fromJS)(action.settings.get('contentTypes'));}).updateIn(['initialData','customEntries'],function(){return(0,_immutable.fromJS)(action.settings.get('customEntries'));}).update('modifiedContentTypes',function(){return(0,_immutable.fromJS)(action.settings.get('contentTypes'));}).update('modifiedCustomEntries',function(){return(0,_immutable.fromJS)(action.settings.get('customEntries'));});case _constants.UPDATE_SETTINGS:return state.update('modifiedContentTypes',function(){return(0,_immutable.fromJS)(action.settings.get('contentTypes'));}).updateIn(['settings','contentTypes'],function(){return(0,_immutable.fromJS)(action.settings.get('contentTypes'));});case _constants.ON_CHANGE_CONTENT_TYPES:if(action.lang){return state.updateIn(['modifiedContentTypes',action.contentType,'languages',action.lang,action.key],function(){return action.value;});}else{return state.updateIn(['modifiedContentTypes',action.contentType,action.key],function(){return action.value;});}case _constants.ON_CHANGE_CUSTOM_ENTRY:return state.updateIn(['modifiedCustomEntries',action.url,action.key],function(){return action.value;});case _constants.ON_CHANGE_SETTINGS:return state.updateIn(['settings',action.key],function(){return action.value;});case _constants.DISCARD_ALL_CHANGES:return state.update('settings',function(){return state.get('initialData');}).update('modifiedContentTypes',function(){return state.getIn(['initialData','contentTypes']);}).update('modifiedCustomEntries',function(){return state.getIn(['initialData','customEntries']);});case _constants.DISCARD_MODIFIED_CONTENT_TYPES:return state.update('modifiedContentTypes',function(){return state.getIn(['settings','contentTypes']);}).update('modifiedCustomEntries',function(){return state.getIn(['settings','customEntries']);});case _constants.SUBMIT_MODAL:return state.updateIn(['settings','contentTypes'],function(){return state.get('modifiedContentTypes');}).updateIn(['settings','customEntries'],function(){return state.get('modifiedCustomEntries');});case _constants.DELETE_CONTENT_TYPE:if(state.getIn(['settings','contentTypes',action.key,'languages']).size>1){return state.deleteIn(['settings','contentTypes',action.key,'languages',action.lang]).deleteIn(['modifiedContentTypes',action.key,'languages',action.lang]);}else{return state.deleteIn(['settings','contentTypes',action.key]).deleteIn(['modifiedContentTypes',action.key]);}case _constants.DELETE_CUSTOM_ENTRY:return state.deleteIn(['settings','customEntries',action.key]).deleteIn(['modifiedCustomEntries',action.key]);case _constants.GET_CONTENT_TYPES_SUCCEEDED:return state.update('contentTypes',function(){return action.contentTypes;});case _constants.GET_LANGUAGES_SUCCEEDED:return state.update('languages',function(){return action.languages;});case _constants.ON_SUBMIT_SUCCEEDED:return state.update('initialData',function(){return state.get('settings');});case _constants.GET_SITEMAP_INFO_SUCCEEDED:return state.update('info',function(){return(0,_immutable.fromJS)(action.info);});case _constants.GET_ALLOWED_FIELDS_SUCCEEDED:return state.update('allowedFields',function(){return action.fields;});default:return state;}}

/***/ }),

/***/ 21192:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _reduxImmutable=__webpack_require__(72739);var _Sitemap=_interopRequireDefault(__webpack_require__(84270));var rootReducer=(0,_reduxImmutable.combineReducers)({sitemap:_Sitemap["default"]});var _default=rootReducer;exports["default"]=_default;

/***/ }),

/***/ 73642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(53547));var _reactRedux=__webpack_require__(37424);var _immutable=__webpack_require__(43393);var _Sitemap=__webpack_require__(85583);var _Collection=_interopRequireDefault(__webpack_require__(56158));var _ModalForm=_interopRequireDefault(__webpack_require__(88455));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var CollectionURLs=function CollectionURLs(){var state=(0,_reactRedux.useSelector)(function(store){return store.get('sitemap',(0,_immutable.Map)());});var dispatch=(0,_reactRedux.useDispatch)();var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),modalOpen=_useState2[0],setModalOpen=_useState2[1];var _useState3=(0,_react.useState)(null),_useState4=(0,_slicedToArray2["default"])(_useState3,2),uid=_useState4[0],setUid=_useState4[1];var _useState5=(0,_react.useState)('und'),_useState6=(0,_slicedToArray2["default"])(_useState5,2),langcode=_useState6[0],setLangcode=_useState6[1];var handleModalSubmit=function handleModalSubmit(e){e.preventDefault();dispatch((0,_Sitemap.submitModal)());setModalOpen(false);setUid(null);};var handleModalOpen=function handleModalOpen(editId,lang){if(editId)setUid(editId);if(lang)setLangcode(lang);setModalOpen(true);};var handleModalClose=function handleModalClose(){var closeModal=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(closeModal){setModalOpen(false);setUid(null);}dispatch((0,_Sitemap.discardModifiedContentTypes)());};// Loading state
if(!state.getIn(['settings','contentTypes'])){return null;}return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Collection["default"],{items:state.getIn(['settings','contentTypes']),openModal:function openModal(editId,lang){return handleModalOpen(editId,lang);},onDelete:function onDelete(key,lang){return dispatch((0,_Sitemap.deleteContentType)(key,lang));}}),/*#__PURE__*/_react["default"].createElement(_ModalForm["default"],{contentTypes:state.get('contentTypes'),allowedFields:state.get('allowedFields'),modifiedState:state.get('modifiedContentTypes'),onSubmit:function onSubmit(e){return handleModalSubmit(e);},onCancel:function onCancel(closeModal){return handleModalClose(closeModal);},onChange:function onChange(contentType,lang,key,value){return dispatch((0,_Sitemap.onChangeContentTypes)(contentType,lang,key,value));},isOpen:modalOpen,id:uid,lang:langcode,type:"collection"}));};var _default=CollectionURLs;exports["default"]=_default;

/***/ }),

/***/ 59619:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(53547));var _reactRedux=__webpack_require__(37424);var _immutable=__webpack_require__(43393);var _Sitemap=__webpack_require__(85583);var _Custom=_interopRequireDefault(__webpack_require__(15548));var _ModalForm=_interopRequireDefault(__webpack_require__(88455));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var CustomURLs=function CustomURLs(){var state=(0,_reactRedux.useSelector)(function(store){return store.get('sitemap',(0,_immutable.Map)());});var dispatch=(0,_reactRedux.useDispatch)();var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),modalOpen=_useState2[0],setModalOpen=_useState2[1];var _useState3=(0,_react.useState)(null),_useState4=(0,_slicedToArray2["default"])(_useState3,2),uid=_useState4[0],setUid=_useState4[1];var handleModalSubmit=function handleModalSubmit(e){e.preventDefault();dispatch((0,_Sitemap.submitModal)());setModalOpen(false);setUid(null);};var handleModalOpen=function handleModalOpen(editId){if(editId)setUid(editId);setModalOpen(true);};var handleModalClose=function handleModalClose(){var closeModal=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;if(closeModal)setModalOpen(false);dispatch((0,_Sitemap.discardModifiedContentTypes)());setUid(null);};// Loading state
if(!state.getIn(['settings','customEntries'])){return null;}return/*#__PURE__*/_react["default"].createElement("div",null,/*#__PURE__*/_react["default"].createElement(_Custom["default"],{items:state.getIn(['settings','customEntries']),openModal:function openModal(editId){return handleModalOpen(editId);},onDelete:function onDelete(key){return dispatch((0,_Sitemap.deleteCustomEntry)(key));},prependSlash:true}),/*#__PURE__*/_react["default"].createElement(_ModalForm["default"],{modifiedState:state.get('modifiedCustomEntries'),isOpen:modalOpen,id:uid,onSubmit:function onSubmit(e){return handleModalSubmit(e);},onCancel:function onCancel(closeModal){return handleModalClose(closeModal);},onChange:function onChange(url,key,value){return dispatch((0,_Sitemap.onChangeCustomEntry)(url,key,value));},type:"custom"}));};var _default=CustomURLs;exports["default"]=_default;

/***/ }),

/***/ 36296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(53547));var _immutable=__webpack_require__(43393);var _reactRedux=__webpack_require__(37424);var _reactIntl=__webpack_require__(97132);var _Button=__webpack_require__(64459);var _Typography=__webpack_require__(33483);var _ToggleInput=__webpack_require__(53575);var _Grid=__webpack_require__(39272);var _TextInput=__webpack_require__(99136);var _designSystem=__webpack_require__(73984);var _Sitemap=__webpack_require__(85583);var _HostnameModal=_interopRequireDefault(__webpack_require__(5764));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Settings=function Settings(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var dispatch=(0,_reactRedux.useDispatch)();var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),open=_useState2[0],setOpen=_useState2[1];var languages=(0,_reactRedux.useSelector)(function(store){return store.getIn(['sitemap','languages'],{});});var settings=(0,_reactRedux.useSelector)(function(state){return state.getIn(['sitemap','settings'],(0,_immutable.Map)());});var hostnameOverrides=(0,_reactRedux.useSelector)(function(state){return state.getIn(['sitemap','settings','hostname_overrides'],{});});var theme=(0,_designSystem.useTheme)();var saveHostnameOverrides=function saveHostnameOverrides(hostnames){dispatch((0,_Sitemap.onChangeSettings)('hostname_overrides',hostnames));setOpen(false);};return/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:6,s:12},/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{placeholder:"https://www.strapi.io",label:formatMessage({id:'sitemap.Settings.Field.Hostname.Label',defaultMessage:'Hostname'}),name:"hostname",value:settings.get('hostname'),hint:formatMessage({id:'sitemap.Settings.Field.Hostname.Description',defaultMessage:'The URL of your website'}),onChange:function onChange(e){return dispatch((0,_Sitemap.onChangeSettings)('hostname',e.target.value));}})),languages.length>1&&/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12,s:12},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",fontWeight:"bold"},formatMessage({id:'sitemap.Settings.Field.HostnameOverrides.Label',defaultMessage:'Hostname overrides'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:function onClick(){return setOpen(true);},variant:"tertiary",style:{marginTop:'5px',marginBottom:'3px'}},formatMessage({id:'sitemap.Settings.Field.HostnameOverrides.Button',defaultMessage:'Configure'})),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",style:{color:theme.colors.neutral600}},formatMessage({id:'sitemap.Settings.Field.HostnameOverrides.Description',defaultMessage:'Specify hostname per language'})),/*#__PURE__*/_react["default"].createElement(_HostnameModal["default"],{isOpen:open,languages:languages,hostnameOverrides:hostnameOverrides,onSave:saveHostnameOverrides,onCancel:function onCancel(){return setOpen(false);}})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12,s:12},/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{hint:formatMessage({id:'sitemap.Settings.Field.IncludeHomepage.Description',defaultMessage:"Include a '/' entry when none is present."}),label:formatMessage({id:'sitemap.Settings.Field.IncludeHomepage.Label',defaultMessage:'Include home page'}),name:"includeHomepage",onLabel:"on",offLabel:"off",checked:settings.get('includeHomepage'),onChange:function onChange(e){return dispatch((0,_Sitemap.onChangeSettings)('includeHomepage',e.target.checked));}})),/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:12,s:12},/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{hint:formatMessage({id:'sitemap.Settings.Field.ExcludeDrafts.Description',defaultMessage:'Remove all draft entries from the sitemap.'}),label:formatMessage({id:'sitemap.Settings.Field.ExcludeDrafts.Label',defaultMessage:'Exclude drafts'}),name:"excludeDrafts",onLabel:"on",offLabel:"off",checked:settings.get('excludeDrafts'),onChange:function onChange(e){return dispatch((0,_Sitemap.onChangeSettings)('excludeDrafts',e.target.checked));}})));};var _default=Settings;exports["default"]=_default;

/***/ }),

/***/ 43393:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level :  false || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ 78230:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = (__webpack_require__(91387).runInContext)();
module.exports = __webpack_require__(84599)(_, _);


/***/ }),

/***/ 84599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapping = __webpack_require__(68836),
    fallbackHolder = __webpack_require__(69306);

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function flatSpread(func, start) {
  return function() {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var defaultHolder = isLib ? func : fallbackHolder,
      forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : flatSpread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null &&
          !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func, placeholder) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;

    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  _.placeholder = _;

  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),

/***/ 68836:
/***/ ((__unused_webpack_module, exports) => {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1],
  'reduceRight': [1, 0]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),

/***/ 69306:
/***/ ((module) => {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),

/***/ 91387:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function e(n,t){for(var r=null==n?0:n.length;r--&&t(n[r],r,n)!==!1;);return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return!1;
return!0}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!!(null==n?0:n.length)&&y(n,t,0)>-1}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return!0;return!1}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function p(n){return n.split("")}function _(n){return n.match($t)||[]}function v(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,!1}),e}function g(n,t,r,e){for(var u=n.length,i=r+(e?1:-1);e?i--:++i<u;)if(t(n[i],i,n))return i;return-1}function y(n,t,r){return t===t?Z(n,t,r):g(n,b,r)}function d(n,t,r,e){
for(var u=r-1,i=n.length;++u<i;)if(e(n[u],t))return u;return-1}function b(n){return n!==n}function w(n,t){var r=null==n?0:n.length;return r?k(n,t)/r:Cn}function m(n){return function(t){return null==t?X:t[n]}}function x(n){return function(t){return null==n?X:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function A(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function k(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==X&&(r=r===X?i:r+i);
}return r}function O(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function I(n,t){return c(t,function(t){return[t,n[t]]})}function R(n){return n?n.slice(0,H(n)+1).replace(Lt,""):n}function z(n){return function(t){return n(t)}}function E(n,t){return c(t,function(t){return n[t]})}function S(n,t){return n.has(t)}function W(n,t){for(var r=-1,e=n.length;++r<e&&y(t,n[r],0)>-1;);return r}function L(n,t){for(var r=n.length;r--&&y(t,n[r],0)>-1;);return r}function C(n,t){for(var r=n.length,e=0;r--;)n[r]===t&&++e;
return e}function U(n){return"\\"+Yr[n]}function B(n,t){return null==n?X:n[t]}function T(n){return Nr.test(n)}function $(n){return Pr.test(n)}function D(n){for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}function M(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n]}),r}function F(n,t){return function(r){return n(t(r))}}function N(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&o!==cn||(n[r]=cn,i[u++]=r)}return i}function P(n){var t=-1,r=Array(n.size);
return n.forEach(function(n){r[++t]=n}),r}function q(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function Z(n,t,r){for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function K(n,t,r){for(var e=r+1;e--;)if(n[e]===t)return e;return e}function V(n){return T(n)?J(n):_e(n)}function G(n){return T(n)?Y(n):p(n)}function H(n){for(var t=n.length;t--&&Ct.test(n.charAt(t)););return t}function J(n){for(var t=Mr.lastIndex=0;Mr.test(n);)++t;return t}function Y(n){return n.match(Mr)||[];
}function Q(n){return n.match(Fr)||[]}var X,nn="4.17.21",tn=200,rn="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",en="Expected a function",un="Invalid `variable` option passed into `_.template`",on="__lodash_hash_undefined__",fn=500,cn="__lodash_placeholder__",an=1,ln=2,sn=4,hn=1,pn=2,_n=1,vn=2,gn=4,yn=8,dn=16,bn=32,wn=64,mn=128,xn=256,jn=512,An=30,kn="...",On=800,In=16,Rn=1,zn=2,En=3,Sn=1/0,Wn=9007199254740991,Ln=1.7976931348623157e308,Cn=NaN,Un=4294967295,Bn=Un-1,Tn=Un>>>1,$n=[["ary",mn],["bind",_n],["bindKey",vn],["curry",yn],["curryRight",dn],["flip",jn],["partial",bn],["partialRight",wn],["rearg",xn]],Dn="[object Arguments]",Mn="[object Array]",Fn="[object AsyncFunction]",Nn="[object Boolean]",Pn="[object Date]",qn="[object DOMException]",Zn="[object Error]",Kn="[object Function]",Vn="[object GeneratorFunction]",Gn="[object Map]",Hn="[object Number]",Jn="[object Null]",Yn="[object Object]",Qn="[object Promise]",Xn="[object Proxy]",nt="[object RegExp]",tt="[object Set]",rt="[object String]",et="[object Symbol]",ut="[object Undefined]",it="[object WeakMap]",ot="[object WeakSet]",ft="[object ArrayBuffer]",ct="[object DataView]",at="[object Float32Array]",lt="[object Float64Array]",st="[object Int8Array]",ht="[object Int16Array]",pt="[object Int32Array]",_t="[object Uint8Array]",vt="[object Uint8ClampedArray]",gt="[object Uint16Array]",yt="[object Uint32Array]",dt=/\b__p \+= '';/g,bt=/\b(__p \+=) '' \+/g,wt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,mt=/&(?:amp|lt|gt|quot|#39);/g,xt=/[&<>"']/g,jt=RegExp(mt.source),At=RegExp(xt.source),kt=/<%-([\s\S]+?)%>/g,Ot=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zt=/^\w*$/,Et=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,St=/[\\^$.*+?()[\]{}|]/g,Wt=RegExp(St.source),Lt=/^\s+/,Ct=/\s/,Ut=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Bt=/\{\n\/\* \[wrapped with (.+)\] \*/,Tt=/,? & /,$t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Dt=/[()=,{}\[\]\/\s]/,Mt=/\\(\\)?/g,Ft=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Nt=/\w*$/,Pt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Zt=/^\[object .+?Constructor\]$/,Kt=/^0o[0-7]+$/i,Vt=/^(?:0|[1-9]\d*)$/,Gt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht=/($^)/,Jt=/['\n\r\u2028\u2029\\]/g,Yt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",nr="\\u20d0-\\u20ff",tr=Qt+Xt+nr,rr="\\u2700-\\u27bf",er="a-z\\xdf-\\xf6\\xf8-\\xff",ur="\\xac\\xb1\\xd7\\xf7",ir="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",or="\\u2000-\\u206f",fr=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",cr="A-Z\\xc0-\\xd6\\xd8-\\xde",ar="\\ufe0e\\ufe0f",lr=ur+ir+or+fr,sr="['\u2019]",hr="["+Yt+"]",pr="["+lr+"]",_r="["+tr+"]",vr="\\d+",gr="["+rr+"]",yr="["+er+"]",dr="[^"+Yt+lr+vr+rr+er+cr+"]",br="\\ud83c[\\udffb-\\udfff]",wr="(?:"+_r+"|"+br+")",mr="[^"+Yt+"]",xr="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",Ar="["+cr+"]",kr="\\u200d",Or="(?:"+yr+"|"+dr+")",Ir="(?:"+Ar+"|"+dr+")",Rr="(?:"+sr+"(?:d|ll|m|re|s|t|ve))?",zr="(?:"+sr+"(?:D|LL|M|RE|S|T|VE))?",Er=wr+"?",Sr="["+ar+"]?",Wr="(?:"+kr+"(?:"+[mr,xr,jr].join("|")+")"+Sr+Er+")*",Lr="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Cr="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ur=Sr+Er+Wr,Br="(?:"+[gr,xr,jr].join("|")+")"+Ur,Tr="(?:"+[mr+_r+"?",_r,xr,jr,hr].join("|")+")",$r=RegExp(sr,"g"),Dr=RegExp(_r,"g"),Mr=RegExp(br+"(?="+br+")|"+Tr+Ur,"g"),Fr=RegExp([Ar+"?"+yr+"+"+Rr+"(?="+[pr,Ar,"$"].join("|")+")",Ir+"+"+zr+"(?="+[pr,Ar+Or,"$"].join("|")+")",Ar+"?"+Or+"+"+Rr,Ar+"+"+zr,Cr,Lr,vr,Br].join("|"),"g"),Nr=RegExp("["+kr+Yt+tr+ar+"]"),Pr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qr=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zr=-1,Kr={};
Kr[at]=Kr[lt]=Kr[st]=Kr[ht]=Kr[pt]=Kr[_t]=Kr[vt]=Kr[gt]=Kr[yt]=!0,Kr[Dn]=Kr[Mn]=Kr[ft]=Kr[Nn]=Kr[ct]=Kr[Pn]=Kr[Zn]=Kr[Kn]=Kr[Gn]=Kr[Hn]=Kr[Yn]=Kr[nt]=Kr[tt]=Kr[rt]=Kr[it]=!1;var Vr={};Vr[Dn]=Vr[Mn]=Vr[ft]=Vr[ct]=Vr[Nn]=Vr[Pn]=Vr[at]=Vr[lt]=Vr[st]=Vr[ht]=Vr[pt]=Vr[Gn]=Vr[Hn]=Vr[Yn]=Vr[nt]=Vr[tt]=Vr[rt]=Vr[et]=Vr[_t]=Vr[vt]=Vr[gt]=Vr[yt]=!0,Vr[Zn]=Vr[Kn]=Vr[it]=!1;var Gr={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a",
"\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae",
"\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g",
"\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O",
"\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w",
"\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},Hr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Yr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qr=parseFloat,Xr=parseInt,ne="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,te="object"==typeof self&&self&&self.Object===Object&&self,re=ne||te||Function("return this")(),ee= true&&exports&&!exports.nodeType&&exports,ue=ee&&"object"=="object"&&module&&!module.nodeType&&module,ie=ue&&ue.exports===ee,oe=ie&&ne.process,fe=function(){
try{var n=ue&&ue.require&&ue.require("util").types;return n?n:oe&&oe.binding&&oe.binding("util")}catch(n){}}(),ce=fe&&fe.isArrayBuffer,ae=fe&&fe.isDate,le=fe&&fe.isMap,se=fe&&fe.isRegExp,he=fe&&fe.isSet,pe=fe&&fe.isTypedArray,_e=m("length"),ve=x(Gr),ge=x(Hr),ye=x(Jr),de=function p(x){function Z(n){if(cc(n)&&!bh(n)&&!(n instanceof Ct)){if(n instanceof Y)return n;if(bl.call(n,"__wrapped__"))return eo(n)}return new Y(n)}function J(){}function Y(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,
this.__index__=0,this.__values__=X}function Ct(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Un,this.__views__=[]}function $t(){var n=new Ct(this.__wrapped__);return n.__actions__=Tu(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Tu(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Tu(this.__views__),n}function Yt(){if(this.__filtered__){var n=new Ct(this);n.__dir__=-1,
n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Qt(){var n=this.__wrapped__.value(),t=this.__dir__,r=bh(n),e=t<0,u=r?n.length:0,i=Oi(0,u,this.__views__),o=i.start,f=i.end,c=f-o,a=e?f:o-1,l=this.__iteratees__,s=l.length,h=0,p=Hl(c,this.__takeCount__);if(!r||!e&&u==c&&p==c)return wu(n,this.__actions__);var _=[];n:for(;c--&&h<p;){a+=t;for(var v=-1,g=n[a];++v<s;){var y=l[v],d=y.iteratee,b=y.type,w=d(g);if(b==zn)g=w;else if(!w){if(b==Rn)continue n;break n}}_[h++]=g}return _}function Xt(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function nr(){this.__data__=is?is(null):{},this.size=0}function tr(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}function rr(n){var t=this.__data__;if(is){var r=t[n];return r===on?X:r}return bl.call(t,n)?t[n]:X}function er(n){var t=this.__data__;return is?t[n]!==X:bl.call(t,n)}function ur(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=is&&t===X?on:t,this}function ir(n){
var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function or(){this.__data__=[],this.size=0}function fr(n){var t=this.__data__,r=Wr(t,n);return!(r<0)&&(r==t.length-1?t.pop():Ll.call(t,r,1),--this.size,!0)}function cr(n){var t=this.__data__,r=Wr(t,n);return r<0?X:t[r][1]}function ar(n){return Wr(this.__data__,n)>-1}function lr(n,t){var r=this.__data__,e=Wr(r,n);return e<0?(++this.size,r.push([n,t])):r[e][1]=t,this}function sr(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){
var e=n[t];this.set(e[0],e[1])}}function hr(){this.size=0,this.__data__={hash:new Xt,map:new(ts||ir),string:new Xt}}function pr(n){var t=xi(this,n).delete(n);return this.size-=t?1:0,t}function _r(n){return xi(this,n).get(n)}function vr(n){return xi(this,n).has(n)}function gr(n,t){var r=xi(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this}function yr(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new sr;++t<r;)this.add(n[t])}function dr(n){return this.__data__.set(n,on),this}function br(n){
return this.__data__.has(n)}function wr(n){this.size=(this.__data__=new ir(n)).size}function mr(){this.__data__=new ir,this.size=0}function xr(n){var t=this.__data__,r=t.delete(n);return this.size=t.size,r}function jr(n){return this.__data__.get(n)}function Ar(n){return this.__data__.has(n)}function kr(n,t){var r=this.__data__;if(r instanceof ir){var e=r.__data__;if(!ts||e.length<tn-1)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new sr(e)}return r.set(n,t),this.size=r.size,this}function Or(n,t){
var r=bh(n),e=!r&&dh(n),u=!r&&!e&&mh(n),i=!r&&!e&&!u&&Oh(n),o=r||e||u||i,f=o?O(n.length,hl):[],c=f.length;for(var a in n)!t&&!bl.call(n,a)||o&&("length"==a||u&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Ci(a,c))||f.push(a);return f}function Ir(n){var t=n.length;return t?n[tu(0,t-1)]:X}function Rr(n,t){return Xi(Tu(n),Mr(t,0,n.length))}function zr(n){return Xi(Tu(n))}function Er(n,t,r){(r===X||Gf(n[t],r))&&(r!==X||t in n)||Br(n,t,r)}function Sr(n,t,r){var e=n[t];
bl.call(n,t)&&Gf(e,r)&&(r!==X||t in n)||Br(n,t,r)}function Wr(n,t){for(var r=n.length;r--;)if(Gf(n[r][0],t))return r;return-1}function Lr(n,t,r,e){return ys(n,function(n,u,i){t(e,n,r(n),i)}),e}function Cr(n,t){return n&&$u(t,Pc(t),n)}function Ur(n,t){return n&&$u(t,qc(t),n)}function Br(n,t,r){"__proto__"==t&&Tl?Tl(n,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):n[t]=r}function Tr(n,t){for(var r=-1,e=t.length,u=il(e),i=null==n;++r<e;)u[r]=i?X:Mc(n,t[r]);return u}function Mr(n,t,r){return n===n&&(r!==X&&(n=n<=r?n:r),
t!==X&&(n=n>=t?n:t)),n}function Fr(n,t,e,u,i,o){var f,c=t&an,a=t&ln,l=t&sn;if(e&&(f=i?e(n,u,i,o):e(n)),f!==X)return f;if(!fc(n))return n;var s=bh(n);if(s){if(f=zi(n),!c)return Tu(n,f)}else{var h=zs(n),p=h==Kn||h==Vn;if(mh(n))return Iu(n,c);if(h==Yn||h==Dn||p&&!i){if(f=a||p?{}:Ei(n),!c)return a?Mu(n,Ur(f,n)):Du(n,Cr(f,n))}else{if(!Vr[h])return i?n:{};f=Si(n,h,c)}}o||(o=new wr);var _=o.get(n);if(_)return _;o.set(n,f),kh(n)?n.forEach(function(r){f.add(Fr(r,t,e,r,n,o))}):jh(n)&&n.forEach(function(r,u){
f.set(u,Fr(r,t,e,u,n,o))});var v=l?a?di:yi:a?qc:Pc,g=s?X:v(n);return r(g||n,function(r,u){g&&(u=r,r=n[u]),Sr(f,u,Fr(r,t,e,u,n,o))}),f}function Nr(n){var t=Pc(n);return function(r){return Pr(r,n,t)}}function Pr(n,t,r){var e=r.length;if(null==n)return!e;for(n=ll(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===X&&!(u in n)||!i(o))return!1}return!0}function Gr(n,t,r){if("function"!=typeof n)throw new pl(en);return Ws(function(){n.apply(X,r)},t)}function Hr(n,t,r,e){var u=-1,i=o,a=!0,l=n.length,s=[],h=t.length;
if(!l)return s;r&&(t=c(t,z(r))),e?(i=f,a=!1):t.length>=tn&&(i=S,a=!1,t=new yr(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p);if(p=e||0!==p?p:0,a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function Jr(n,t){var r=!0;return ys(n,function(n,e,u){return r=!!t(n,e,u)}),r}function Yr(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===X?o===o&&!bc(o):r(o,f)))var f=o,c=i}return c}function ne(n,t,r,e){var u=n.length;for(r=kc(r),r<0&&(r=-r>u?0:u+r),
e=e===X||e>u?u:kc(e),e<0&&(e+=u),e=r>e?0:Oc(e);r<e;)n[r++]=t;return n}function te(n,t){var r=[];return ys(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function ee(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Li),u||(u=[]);++i<o;){var f=n[i];t>0&&r(f)?t>1?ee(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function ue(n,t){return n&&bs(n,t,Pc)}function oe(n,t){return n&&ws(n,t,Pc)}function fe(n,t){return i(t,function(t){return uc(n[t])})}function _e(n,t){t=ku(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[no(t[r++])];
return r&&r==e?n:X}function de(n,t,r){var e=t(n);return bh(n)?e:a(e,r(n))}function we(n){return null==n?n===X?ut:Jn:Bl&&Bl in ll(n)?ki(n):Ki(n)}function me(n,t){return n>t}function xe(n,t){return null!=n&&bl.call(n,t)}function je(n,t){return null!=n&&t in ll(n)}function Ae(n,t,r){return n>=Hl(t,r)&&n<Gl(t,r)}function ke(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=il(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,z(t))),s=Hl(p.length,s),l[a]=!r&&(t||u>=120&&p.length>=120)?new yr(a&&p):X}p=n[0];
var _=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],y=t?t(g):g;if(g=r||0!==g?g:0,!(v?S(v,y):e(h,y,r))){for(a=i;--a;){var d=l[a];if(!(d?S(d,y):e(n[a],y,r)))continue n}v&&v.push(y),h.push(g)}}return h}function Oe(n,t,r,e){return ue(n,function(n,u,i){t(e,r(n),u,i)}),e}function Ie(t,r,e){r=ku(r,t),t=Gi(t,r);var u=null==t?t:t[no(jo(r))];return null==u?X:n(u,t,e)}function Re(n){return cc(n)&&we(n)==Dn}function ze(n){return cc(n)&&we(n)==ft}function Ee(n){return cc(n)&&we(n)==Pn}function Se(n,t,r,e,u){
return n===t||(null==n||null==t||!cc(n)&&!cc(t)?n!==n&&t!==t:We(n,t,r,e,Se,u))}function We(n,t,r,e,u,i){var o=bh(n),f=bh(t),c=o?Mn:zs(n),a=f?Mn:zs(t);c=c==Dn?Yn:c,a=a==Dn?Yn:a;var l=c==Yn,s=a==Yn,h=c==a;if(h&&mh(n)){if(!mh(t))return!1;o=!0,l=!1}if(h&&!l)return i||(i=new wr),o||Oh(n)?pi(n,t,r,e,u,i):_i(n,t,c,r,e,u,i);if(!(r&hn)){var p=l&&bl.call(n,"__wrapped__"),_=s&&bl.call(t,"__wrapped__");if(p||_){var v=p?n.value():n,g=_?t.value():t;return i||(i=new wr),u(v,g,r,e,i)}}return!!h&&(i||(i=new wr),vi(n,t,r,e,u,i));
}function Le(n){return cc(n)&&zs(n)==Gn}function Ce(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=ll(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++u<i;){f=r[u];var c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===X&&!(c in n))return!1}else{var s=new wr;if(e)var h=e(a,l,c,n,t,s);if(!(h===X?Se(l,a,hn|pn,e,s):h))return!1}}return!0}function Ue(n){return!(!fc(n)||Di(n))&&(uc(n)?kl:Zt).test(to(n))}function Be(n){return cc(n)&&we(n)==nt}function Te(n){return cc(n)&&zs(n)==tt;
}function $e(n){return cc(n)&&oc(n.length)&&!!Kr[we(n)]}function De(n){return"function"==typeof n?n:null==n?La:"object"==typeof n?bh(n)?Ze(n[0],n[1]):qe(n):Fa(n)}function Me(n){if(!Mi(n))return Vl(n);var t=[];for(var r in ll(n))bl.call(n,r)&&"constructor"!=r&&t.push(r);return t}function Fe(n){if(!fc(n))return Zi(n);var t=Mi(n),r=[];for(var e in n)("constructor"!=e||!t&&bl.call(n,e))&&r.push(e);return r}function Ne(n,t){return n<t}function Pe(n,t){var r=-1,e=Hf(n)?il(n.length):[];return ys(n,function(n,u,i){
e[++r]=t(n,u,i)}),e}function qe(n){var t=ji(n);return 1==t.length&&t[0][2]?Ni(t[0][0],t[0][1]):function(r){return r===n||Ce(r,n,t)}}function Ze(n,t){return Bi(n)&&Fi(t)?Ni(no(n),t):function(r){var e=Mc(r,n);return e===X&&e===t?Nc(r,n):Se(t,e,hn|pn)}}function Ke(n,t,r,e,u){n!==t&&bs(t,function(i,o){if(u||(u=new wr),fc(i))Ve(n,t,o,r,Ke,e,u);else{var f=e?e(Ji(n,o),i,o+"",n,t,u):X;f===X&&(f=i),Er(n,o,f)}},qc)}function Ve(n,t,r,e,u,i,o){var f=Ji(n,r),c=Ji(t,r),a=o.get(c);if(a)return Er(n,r,a),X;var l=i?i(f,c,r+"",n,t,o):X,s=l===X;
if(s){var h=bh(c),p=!h&&mh(c),_=!h&&!p&&Oh(c);l=c,h||p||_?bh(f)?l=f:Jf(f)?l=Tu(f):p?(s=!1,l=Iu(c,!0)):_?(s=!1,l=Wu(c,!0)):l=[]:gc(c)||dh(c)?(l=f,dh(f)?l=Rc(f):fc(f)&&!uc(f)||(l=Ei(c))):s=!1}s&&(o.set(c,l),u(l,c,e,i,o),o.delete(c)),Er(n,r,l)}function Ge(n,t){var r=n.length;if(r)return t+=t<0?r:0,Ci(t,r)?n[t]:X}function He(n,t,r){t=t.length?c(t,function(n){return bh(n)?function(t){return _e(t,1===n.length?n[0]:n)}:n}):[La];var e=-1;return t=c(t,z(mi())),A(Pe(n,function(n,r,u){return{criteria:c(t,function(t){
return t(n)}),index:++e,value:n}}),function(n,t){return Cu(n,t,r)})}function Je(n,t){return Ye(n,t,function(t,r){return Nc(n,r)})}function Ye(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=_e(n,o);r(f,o)&&fu(i,ku(o,n),f)}return i}function Qe(n){return function(t){return _e(t,n)}}function Xe(n,t,r,e){var u=e?d:y,i=-1,o=t.length,f=n;for(n===t&&(t=Tu(t)),r&&(f=c(n,z(r)));++i<o;)for(var a=0,l=t[i],s=r?r(l):l;(a=u(f,s,a,e))>-1;)f!==n&&Ll.call(f,a,1),Ll.call(n,a,1);return n}function nu(n,t){for(var r=n?t.length:0,e=r-1;r--;){
var u=t[r];if(r==e||u!==i){var i=u;Ci(u)?Ll.call(n,u,1):yu(n,u)}}return n}function tu(n,t){return n+Nl(Ql()*(t-n+1))}function ru(n,t,r,e){for(var u=-1,i=Gl(Fl((t-n)/(r||1)),0),o=il(i);i--;)o[e?i:++u]=n,n+=r;return o}function eu(n,t){var r="";if(!n||t<1||t>Wn)return r;do t%2&&(r+=n),t=Nl(t/2),t&&(n+=n);while(t);return r}function uu(n,t){return Ls(Vi(n,t,La),n+"")}function iu(n){return Ir(ra(n))}function ou(n,t){var r=ra(n);return Xi(r,Mr(t,0,r.length))}function fu(n,t,r,e){if(!fc(n))return n;t=ku(t,n);
for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=no(t[u]),a=r;if("__proto__"===c||"constructor"===c||"prototype"===c)return n;if(u!=o){var l=f[c];a=e?e(l,c,f):X,a===X&&(a=fc(l)?l:Ci(t[u+1])?[]:{})}Sr(f,c,a),f=f[c]}return n}function cu(n){return Xi(ra(n))}function au(n,t,r){var e=-1,u=n.length;t<0&&(t=-t>u?0:u+t),r=r>u?u:r,r<0&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=il(u);++e<u;)i[e]=n[e+t];return i}function lu(n,t){var r;return ys(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function su(n,t,r){
var e=0,u=null==n?e:n.length;if("number"==typeof t&&t===t&&u<=Tn){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!bc(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return hu(n,t,La,r)}function hu(n,t,r,e){var u=0,i=null==n?0:n.length;if(0===i)return 0;t=r(t);for(var o=t!==t,f=null===t,c=bc(t),a=t===X;u<i;){var l=Nl((u+i)/2),s=r(n[l]),h=s!==X,p=null===s,_=s===s,v=bc(s);if(o)var g=e||_;else g=a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):!p&&!v&&(e?s<=t:s<t);g?u=l+1:i=l}return Hl(i,Bn)}function pu(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
var o=n[r],f=t?t(o):o;if(!r||!Gf(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function _u(n){return"number"==typeof n?n:bc(n)?Cn:+n}function vu(n){if("string"==typeof n)return n;if(bh(n))return c(n,vu)+"";if(bc(n))return vs?vs.call(n):"";var t=n+"";return"0"==t&&1/n==-Sn?"-0":t}function gu(n,t,r){var e=-1,u=o,i=n.length,c=!0,a=[],l=a;if(r)c=!1,u=f;else if(i>=tn){var s=t?null:ks(n);if(s)return P(s);c=!1,u=S,l=new yr}else l=t?[]:a;n:for(;++e<i;){var h=n[e],p=t?t(h):h;if(h=r||0!==h?h:0,c&&p===p){for(var _=l.length;_--;)if(l[_]===p)continue n;
t&&l.push(p),a.push(h)}else u(l,p,r)||(l!==a&&l.push(p),a.push(h))}return a}function yu(n,t){return t=ku(t,n),n=Gi(n,t),null==n||delete n[no(jo(t))]}function du(n,t,r,e){return fu(n,t,r(_e(n,t)),e)}function bu(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?au(n,e?0:i,e?i+1:u):au(n,e?i+1:0,e?u:i)}function wu(n,t){var r=n;return r instanceof Ct&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mu(n,t,r){var e=n.length;if(e<2)return e?gu(n[0]):[];
for(var u=-1,i=il(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=Hr(i[u]||o,n[f],t,r));return gu(ee(i,1),t,r)}function xu(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;){r(o,n[e],e<i?t[e]:X)}return o}function ju(n){return Jf(n)?n:[]}function Au(n){return"function"==typeof n?n:La}function ku(n,t){return bh(n)?n:Bi(n,t)?[n]:Cs(Ec(n))}function Ou(n,t,r){var e=n.length;return r=r===X?e:r,!t&&r>=e?n:au(n,t,r)}function Iu(n,t){if(t)return n.slice();var r=n.length,e=zl?zl(r):new n.constructor(r);
return n.copy(e),e}function Ru(n){var t=new n.constructor(n.byteLength);return new Rl(t).set(new Rl(n)),t}function zu(n,t){return new n.constructor(t?Ru(n.buffer):n.buffer,n.byteOffset,n.byteLength)}function Eu(n){var t=new n.constructor(n.source,Nt.exec(n));return t.lastIndex=n.lastIndex,t}function Su(n){return _s?ll(_s.call(n)):{}}function Wu(n,t){return new n.constructor(t?Ru(n.buffer):n.buffer,n.byteOffset,n.length)}function Lu(n,t){if(n!==t){var r=n!==X,e=null===n,u=n===n,i=bc(n),o=t!==X,f=null===t,c=t===t,a=bc(t);
if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Cu(n,t,r){for(var e=-1,u=n.criteria,i=t.criteria,o=u.length,f=r.length;++e<o;){var c=Lu(u[e],i[e]);if(c){if(e>=f)return c;return c*("desc"==r[e]?-1:1)}}return n.index-t.index}function Uu(n,t,r,e){for(var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Gl(i-o,0),l=il(c+a),s=!e;++f<c;)l[f]=t[f];for(;++u<o;)(s||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];return l;
}function Bu(n,t,r,e){for(var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Gl(i-f,0),s=il(l+a),h=!e;++u<l;)s[u]=n[u];for(var p=u;++c<a;)s[p+c]=t[c];for(;++o<f;)(h||u<i)&&(s[p+r[o]]=n[u++]);return s}function Tu(n,t){var r=-1,e=n.length;for(t||(t=il(e));++r<e;)t[r]=n[r];return t}function $u(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):X;c===X&&(c=n[f]),u?Br(r,f,c):Sr(r,f,c)}return r}function Du(n,t){return $u(n,Is(n),t)}function Mu(n,t){return $u(n,Rs(n),t);
}function Fu(n,r){return function(e,u){var i=bh(e)?t:Lr,o=r?r():{};return i(e,n,mi(u,2),o)}}function Nu(n){return uu(function(t,r){var e=-1,u=r.length,i=u>1?r[u-1]:X,o=u>2?r[2]:X;for(i=n.length>3&&"function"==typeof i?(u--,i):X,o&&Ui(r[0],r[1],o)&&(i=u<3?X:i,u=1),t=ll(t);++e<u;){var f=r[e];f&&n(t,f,e,i)}return t})}function Pu(n,t){return function(r,e){if(null==r)return r;if(!Hf(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=ll(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function qu(n){return function(t,r,e){
for(var u=-1,i=ll(t),o=e(t),f=o.length;f--;){var c=o[n?f:++u];if(r(i[c],c,i)===!1)break}return t}}function Zu(n,t,r){function e(){return(this&&this!==re&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=t&_n,i=Gu(n);return e}function Ku(n){return function(t){t=Ec(t);var r=T(t)?G(t):X,e=r?r[0]:t.charAt(0),u=r?Ou(r,1).join(""):t.slice(1);return e[n]()+u}}function Vu(n){return function(t){return l(Ra(ca(t).replace($r,"")),n,"")}}function Gu(n){return function(){var t=arguments;switch(t.length){
case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=gs(n.prototype),e=n.apply(r,t);return fc(e)?e:r}}function Hu(t,r,e){function u(){for(var o=arguments.length,f=il(o),c=o,a=wi(u);c--;)f[c]=arguments[c];var l=o<3&&f[0]!==a&&f[o-1]!==a?[]:N(f,a);
return o-=l.length,o<e?oi(t,r,Qu,u.placeholder,X,f,l,X,X,e-o):n(this&&this!==re&&this instanceof u?i:t,this,f)}var i=Gu(t);return u}function Ju(n){return function(t,r,e){var u=ll(t);if(!Hf(t)){var i=mi(r,3);t=Pc(t),r=function(n){return i(u[n],n,u)}}var o=n(t,r,e);return o>-1?u[i?t[o]:o]:X}}function Yu(n){return gi(function(t){var r=t.length,e=r,u=Y.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if("function"!=typeof i)throw new pl(en);if(u&&!o&&"wrapper"==bi(i))var o=new Y([],!0)}for(e=o?e:r;++e<r;){
i=t[e];var f=bi(i),c="wrapper"==f?Os(i):X;o=c&&$i(c[0])&&c[1]==(mn|yn|bn|xn)&&!c[4].length&&1==c[9]?o[bi(c[0])].apply(o,c[3]):1==i.length&&$i(i)?o[f]():o.thru(i)}return function(){var n=arguments,e=n[0];if(o&&1==n.length&&bh(e))return o.plant(e).value();for(var u=0,i=r?t[u].apply(this,n):e;++u<r;)i=t[u].call(this,i);return i}})}function Qu(n,t,r,e,u,i,o,f,c,a){function l(){for(var y=arguments.length,d=il(y),b=y;b--;)d[b]=arguments[b];if(_)var w=wi(l),m=C(d,w);if(e&&(d=Uu(d,e,u,_)),i&&(d=Bu(d,i,o,_)),
y-=m,_&&y<a){return oi(n,t,Qu,l.placeholder,r,d,N(d,w),f,c,a-y)}var x=h?r:this,j=p?x[n]:n;return y=d.length,f?d=Hi(d,f):v&&y>1&&d.reverse(),s&&c<y&&(d.length=c),this&&this!==re&&this instanceof l&&(j=g||Gu(j)),j.apply(x,d)}var s=t&mn,h=t&_n,p=t&vn,_=t&(yn|dn),v=t&jn,g=p?X:Gu(n);return l}function Xu(n,t){return function(r,e){return Oe(r,n,t(e),{})}}function ni(n,t){return function(r,e){var u;if(r===X&&e===X)return t;if(r!==X&&(u=r),e!==X){if(u===X)return e;"string"==typeof r||"string"==typeof e?(r=vu(r),
e=vu(e)):(r=_u(r),e=_u(e)),u=n(r,e)}return u}}function ti(t){return gi(function(r){return r=c(r,z(mi())),uu(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ri(n,t){t=t===X?" ":vu(t);var r=t.length;if(r<2)return r?eu(t,n):t;var e=eu(t,Fl(n/V(t)));return T(t)?Ou(G(e),0,n).join(""):e.slice(0,n)}function ei(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=il(l+c),h=this&&this!==re&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];
return n(h,o?e:this,s)}var o=r&_n,f=Gu(t);return i}function ui(n){return function(t,r,e){return e&&"number"!=typeof e&&Ui(t,r,e)&&(r=e=X),t=Ac(t),r===X?(r=t,t=0):r=Ac(r),e=e===X?t<r?1:-1:Ac(e),ru(t,r,e,n)}}function ii(n){return function(t,r){return"string"==typeof t&&"string"==typeof r||(t=Ic(t),r=Ic(r)),n(t,r)}}function oi(n,t,r,e,u,i,o,f,c,a){var l=t&yn,s=l?o:X,h=l?X:o,p=l?i:X,_=l?X:i;t|=l?bn:wn,t&=~(l?wn:bn),t&gn||(t&=~(_n|vn));var v=[n,t,u,p,s,_,h,f,c,a],g=r.apply(X,v);return $i(n)&&Ss(g,v),g.placeholder=e,
Yi(g,n,t)}function fi(n){var t=al[n];return function(n,r){if(n=Ic(n),r=null==r?0:Hl(kc(r),292),r&&Zl(n)){var e=(Ec(n)+"e").split("e");return e=(Ec(t(e[0]+"e"+(+e[1]+r)))+"e").split("e"),+(e[0]+"e"+(+e[1]-r))}return t(n)}}function ci(n){return function(t){var r=zs(t);return r==Gn?M(t):r==tt?q(t):I(t,n(t))}}function ai(n,t,r,e,u,i,o,f){var c=t&vn;if(!c&&"function"!=typeof n)throw new pl(en);var a=e?e.length:0;if(a||(t&=~(bn|wn),e=u=X),o=o===X?o:Gl(kc(o),0),f=f===X?f:kc(f),a-=u?u.length:0,t&wn){var l=e,s=u;
e=u=X}var h=c?X:Os(n),p=[n,t,r,e,u,l,s,i,o,f];if(h&&qi(p,h),n=p[0],t=p[1],r=p[2],e=p[3],u=p[4],f=p[9]=p[9]===X?c?0:n.length:Gl(p[9]-a,0),!f&&t&(yn|dn)&&(t&=~(yn|dn)),t&&t!=_n)_=t==yn||t==dn?Hu(n,t,f):t!=bn&&t!=(_n|bn)||u.length?Qu.apply(X,p):ei(n,t,r,e);else var _=Zu(n,t,r);return Yi((h?ms:Ss)(_,p),n,t)}function li(n,t,r,e){return n===X||Gf(n,gl[r])&&!bl.call(e,r)?t:n}function si(n,t,r,e,u,i){return fc(n)&&fc(t)&&(i.set(t,n),Ke(n,t,X,si,i),i.delete(t)),n}function hi(n){return gc(n)?X:n}function pi(n,t,r,e,u,i){
var o=r&hn,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return!1;var a=i.get(n),l=i.get(t);if(a&&l)return a==t&&l==n;var s=-1,p=!0,_=r&pn?new yr:X;for(i.set(n,t),i.set(t,n);++s<f;){var v=n[s],g=t[s];if(e)var y=o?e(g,v,s,t,n,i):e(v,g,s,n,t,i);if(y!==X){if(y)continue;p=!1;break}if(_){if(!h(t,function(n,t){if(!S(_,t)&&(v===n||u(v,n,r,e,i)))return _.push(t)})){p=!1;break}}else if(v!==g&&!u(v,g,r,e,i)){p=!1;break}}return i.delete(n),i.delete(t),p}function _i(n,t,r,e,u,i,o){switch(r){case ct:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;
n=n.buffer,t=t.buffer;case ft:return!(n.byteLength!=t.byteLength||!i(new Rl(n),new Rl(t)));case Nn:case Pn:case Hn:return Gf(+n,+t);case Zn:return n.name==t.name&&n.message==t.message;case nt:case rt:return n==t+"";case Gn:var f=M;case tt:var c=e&hn;if(f||(f=P),n.size!=t.size&&!c)return!1;var a=o.get(n);if(a)return a==t;e|=pn,o.set(n,t);var l=pi(f(n),f(t),e,u,i,o);return o.delete(n),l;case et:if(_s)return _s.call(n)==_s.call(t)}return!1}function vi(n,t,r,e,u,i){var o=r&hn,f=yi(n),c=f.length;if(c!=yi(t).length&&!o)return!1;
for(var a=c;a--;){var l=f[a];if(!(o?l in t:bl.call(t,l)))return!1}var s=i.get(n),h=i.get(t);if(s&&h)return s==t&&h==n;var p=!0;i.set(n,t),i.set(t,n);for(var _=o;++a<c;){l=f[a];var v=n[l],g=t[l];if(e)var y=o?e(g,v,l,t,n,i):e(v,g,l,n,t,i);if(!(y===X?v===g||u(v,g,r,e,i):y)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=n.constructor,b=t.constructor;d!=b&&"constructor"in n&&"constructor"in t&&!("function"==typeof d&&d instanceof d&&"function"==typeof b&&b instanceof b)&&(p=!1)}return i.delete(n),
i.delete(t),p}function gi(n){return Ls(Vi(n,X,_o),n+"")}function yi(n){return de(n,Pc,Is)}function di(n){return de(n,qc,Rs)}function bi(n){for(var t=n.name+"",r=fs[t],e=bl.call(fs,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function wi(n){return(bl.call(Z,"placeholder")?Z:n).placeholder}function mi(){var n=Z.iteratee||Ca;return n=n===Ca?De:n,arguments.length?n(arguments[0],arguments[1]):n}function xi(n,t){var r=n.__data__;return Ti(t)?r["string"==typeof t?"string":"hash"]:r.map;
}function ji(n){for(var t=Pc(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,Fi(u)]}return t}function Ai(n,t){var r=B(n,t);return Ue(r)?r:X}function ki(n){var t=bl.call(n,Bl),r=n[Bl];try{n[Bl]=X;var e=!0}catch(n){}var u=xl.call(n);return e&&(t?n[Bl]=r:delete n[Bl]),u}function Oi(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Hl(t,n+o);break;case"takeRight":n=Gl(n,t-o)}}return{start:n,end:t}}function Ii(n){var t=n.match(Bt);
return t?t[1].split(Tt):[]}function Ri(n,t,r){t=ku(t,n);for(var e=-1,u=t.length,i=!1;++e<u;){var o=no(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&oc(u)&&Ci(o,u)&&(bh(n)||dh(n)))}function zi(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&bl.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ei(n){return"function"!=typeof n.constructor||Mi(n)?{}:gs(El(n))}function Si(n,t,r){var e=n.constructor;switch(t){case ft:return Ru(n);
case Nn:case Pn:return new e(+n);case ct:return zu(n,r);case at:case lt:case st:case ht:case pt:case _t:case vt:case gt:case yt:return Wu(n,r);case Gn:return new e;case Hn:case rt:return new e(n);case nt:return Eu(n);case tt:return new e;case et:return Su(n)}}function Wi(n,t){var r=t.length;if(!r)return n;var e=r-1;return t[e]=(r>1?"& ":"")+t[e],t=t.join(r>2?", ":" "),n.replace(Ut,"{\n/* [wrapped with "+t+"] */\n")}function Li(n){return bh(n)||dh(n)||!!(Cl&&n&&n[Cl])}function Ci(n,t){var r=typeof n;
return t=null==t?Wn:t,!!t&&("number"==r||"symbol"!=r&&Vt.test(n))&&n>-1&&n%1==0&&n<t}function Ui(n,t,r){if(!fc(r))return!1;var e=typeof t;return!!("number"==e?Hf(r)&&Ci(t,r.length):"string"==e&&t in r)&&Gf(r[t],n)}function Bi(n,t){if(bh(n))return!1;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!bc(n))||(zt.test(n)||!Rt.test(n)||null!=t&&n in ll(t))}function Ti(n){var t=typeof n;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n}function $i(n){
var t=bi(n),r=Z[t];if("function"!=typeof r||!(t in Ct.prototype))return!1;if(n===r)return!0;var e=Os(r);return!!e&&n===e[0]}function Di(n){return!!ml&&ml in n}function Mi(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||gl)}function Fi(n){return n===n&&!fc(n)}function Ni(n,t){return function(r){return null!=r&&(r[n]===t&&(t!==X||n in ll(r)))}}function Pi(n){var t=Cf(n,function(n){return r.size===fn&&r.clear(),n}),r=t.cache;return t}function qi(n,t){var r=n[1],e=t[1],u=r|e,i=u<(_n|vn|mn),o=e==mn&&r==yn||e==mn&&r==xn&&n[7].length<=t[8]||e==(mn|xn)&&t[7].length<=t[8]&&r==yn;
if(!i&&!o)return n;e&_n&&(n[2]=t[2],u|=r&_n?0:gn);var f=t[3];if(f){var c=n[3];n[3]=c?Uu(c,f,t[4]):f,n[4]=c?N(n[3],cn):t[4]}return f=t[5],f&&(c=n[5],n[5]=c?Bu(c,f,t[6]):f,n[6]=c?N(n[5],cn):t[6]),f=t[7],f&&(n[7]=f),e&mn&&(n[8]=null==n[8]?t[8]:Hl(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function Zi(n){var t=[];if(null!=n)for(var r in ll(n))t.push(r);return t}function Ki(n){return xl.call(n)}function Vi(t,r,e){return r=Gl(r===X?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Gl(u.length-r,0),f=il(o);++i<o;)f[i]=u[r+i];
i=-1;for(var c=il(r+1);++i<r;)c[i]=u[i];return c[r]=e(f),n(t,this,c)}}function Gi(n,t){return t.length<2?n:_e(n,au(t,0,-1))}function Hi(n,t){for(var r=n.length,e=Hl(t.length,r),u=Tu(n);e--;){var i=t[e];n[e]=Ci(i,r)?u[i]:X}return n}function Ji(n,t){if(("constructor"!==t||"function"!=typeof n[t])&&"__proto__"!=t)return n[t]}function Yi(n,t,r){var e=t+"";return Ls(n,Wi(e,ro(Ii(e),r)))}function Qi(n){var t=0,r=0;return function(){var e=Jl(),u=In-(e-r);if(r=e,u>0){if(++t>=On)return arguments[0]}else t=0;
return n.apply(X,arguments)}}function Xi(n,t){var r=-1,e=n.length,u=e-1;for(t=t===X?e:t;++r<t;){var i=tu(r,u),o=n[i];n[i]=n[r],n[r]=o}return n.length=t,n}function no(n){if("string"==typeof n||bc(n))return n;var t=n+"";return"0"==t&&1/n==-Sn?"-0":t}function to(n){if(null!=n){try{return dl.call(n)}catch(n){}try{return n+""}catch(n){}}return""}function ro(n,t){return r($n,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e)}),n.sort()}function eo(n){if(n instanceof Ct)return n.clone();var t=new Y(n.__wrapped__,n.__chain__);
return t.__actions__=Tu(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function uo(n,t,r){t=(r?Ui(n,t,r):t===X)?1:Gl(kc(t),0);var e=null==n?0:n.length;if(!e||t<1)return[];for(var u=0,i=0,o=il(Fl(e/t));u<e;)o[i++]=au(n,u,u+=t);return o}function io(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){var i=n[t];i&&(u[e++]=i)}return u}function oo(){var n=arguments.length;if(!n)return[];for(var t=il(n-1),r=arguments[0],e=n;e--;)t[e-1]=arguments[e];return a(bh(r)?Tu(r):[r],ee(t,1));
}function fo(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:kc(t),au(n,t<0?0:t,e)):[]}function co(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:kc(t),t=e-t,au(n,0,t<0?0:t)):[]}function ao(n,t){return n&&n.length?bu(n,mi(t,3),!0,!0):[]}function lo(n,t){return n&&n.length?bu(n,mi(t,3),!0):[]}function so(n,t,r,e){var u=null==n?0:n.length;return u?(r&&"number"!=typeof r&&Ui(n,t,r)&&(r=0,e=u),ne(n,t,r,e)):[]}function ho(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:kc(r);
return u<0&&(u=Gl(e+u,0)),g(n,mi(t,3),u)}function po(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==X&&(u=kc(r),u=r<0?Gl(e+u,0):Hl(u,e-1)),g(n,mi(t,3),u,!0)}function _o(n){return(null==n?0:n.length)?ee(n,1):[]}function vo(n){return(null==n?0:n.length)?ee(n,Sn):[]}function go(n,t){return(null==n?0:n.length)?(t=t===X?1:kc(t),ee(n,t)):[]}function yo(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e}function bo(n){return n&&n.length?n[0]:X}function wo(n,t,r){
var e=null==n?0:n.length;if(!e)return-1;var u=null==r?0:kc(r);return u<0&&(u=Gl(e+u,0)),y(n,t,u)}function mo(n){return(null==n?0:n.length)?au(n,0,-1):[]}function xo(n,t){return null==n?"":Kl.call(n,t)}function jo(n){var t=null==n?0:n.length;return t?n[t-1]:X}function Ao(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;return r!==X&&(u=kc(r),u=u<0?Gl(e+u,0):Hl(u,e-1)),t===t?K(n,t,u):g(n,b,u,!0)}function ko(n,t){return n&&n.length?Ge(n,kc(t)):X}function Oo(n,t){return n&&n.length&&t&&t.length?Xe(n,t):n;
}function Io(n,t,r){return n&&n.length&&t&&t.length?Xe(n,t,mi(r,2)):n}function Ro(n,t,r){return n&&n.length&&t&&t.length?Xe(n,t,X,r):n}function zo(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=mi(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),u.push(e))}return nu(n,u),r}function Eo(n){return null==n?n:Xl.call(n)}function So(n,t,r){var e=null==n?0:n.length;return e?(r&&"number"!=typeof r&&Ui(n,t,r)?(t=0,r=e):(t=null==t?0:kc(t),r=r===X?e:kc(r)),au(n,t,r)):[]}function Wo(n,t){
return su(n,t)}function Lo(n,t,r){return hu(n,t,mi(r,2))}function Co(n,t){var r=null==n?0:n.length;if(r){var e=su(n,t);if(e<r&&Gf(n[e],t))return e}return-1}function Uo(n,t){return su(n,t,!0)}function Bo(n,t,r){return hu(n,t,mi(r,2),!0)}function To(n,t){if(null==n?0:n.length){var r=su(n,t,!0)-1;if(Gf(n[r],t))return r}return-1}function $o(n){return n&&n.length?pu(n):[]}function Do(n,t){return n&&n.length?pu(n,mi(t,2)):[]}function Mo(n){var t=null==n?0:n.length;return t?au(n,1,t):[]}function Fo(n,t,r){
return n&&n.length?(t=r||t===X?1:kc(t),au(n,0,t<0?0:t)):[]}function No(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===X?1:kc(t),t=e-t,au(n,t<0?0:t,e)):[]}function Po(n,t){return n&&n.length?bu(n,mi(t,3),!1,!0):[]}function qo(n,t){return n&&n.length?bu(n,mi(t,3)):[]}function Zo(n){return n&&n.length?gu(n):[]}function Ko(n,t){return n&&n.length?gu(n,mi(t,2)):[]}function Vo(n,t){return t="function"==typeof t?t:X,n&&n.length?gu(n,X,t):[]}function Go(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){
if(Jf(n))return t=Gl(n.length,t),!0}),O(t,function(t){return c(n,m(t))})}function Ho(t,r){if(!t||!t.length)return[];var e=Go(t);return null==r?e:c(e,function(t){return n(r,X,t)})}function Jo(n,t){return xu(n||[],t||[],Sr)}function Yo(n,t){return xu(n||[],t||[],fu)}function Qo(n){var t=Z(n);return t.__chain__=!0,t}function Xo(n,t){return t(n),n}function nf(n,t){return t(n)}function tf(){return Qo(this)}function rf(){return new Y(this.value(),this.__chain__)}function ef(){this.__values__===X&&(this.__values__=jc(this.value()));
var n=this.__index__>=this.__values__.length;return{done:n,value:n?X:this.__values__[this.__index__++]}}function uf(){return this}function of(n){for(var t,r=this;r instanceof J;){var e=eo(r);e.__index__=0,e.__values__=X,t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function ff(){var n=this.__wrapped__;if(n instanceof Ct){var t=n;return this.__actions__.length&&(t=new Ct(this)),t=t.reverse(),t.__actions__.push({func:nf,args:[Eo],thisArg:X}),new Y(t,this.__chain__)}return this.thru(Eo);
}function cf(){return wu(this.__wrapped__,this.__actions__)}function af(n,t,r){var e=bh(n)?u:Jr;return r&&Ui(n,t,r)&&(t=X),e(n,mi(t,3))}function lf(n,t){return(bh(n)?i:te)(n,mi(t,3))}function sf(n,t){return ee(yf(n,t),1)}function hf(n,t){return ee(yf(n,t),Sn)}function pf(n,t,r){return r=r===X?1:kc(r),ee(yf(n,t),r)}function _f(n,t){return(bh(n)?r:ys)(n,mi(t,3))}function vf(n,t){return(bh(n)?e:ds)(n,mi(t,3))}function gf(n,t,r,e){n=Hf(n)?n:ra(n),r=r&&!e?kc(r):0;var u=n.length;return r<0&&(r=Gl(u+r,0)),
dc(n)?r<=u&&n.indexOf(t,r)>-1:!!u&&y(n,t,r)>-1}function yf(n,t){return(bh(n)?c:Pe)(n,mi(t,3))}function df(n,t,r,e){return null==n?[]:(bh(t)||(t=null==t?[]:[t]),r=e?X:r,bh(r)||(r=null==r?[]:[r]),He(n,t,r))}function bf(n,t,r){var e=bh(n)?l:j,u=arguments.length<3;return e(n,mi(t,4),r,u,ys)}function wf(n,t,r){var e=bh(n)?s:j,u=arguments.length<3;return e(n,mi(t,4),r,u,ds)}function mf(n,t){return(bh(n)?i:te)(n,Uf(mi(t,3)))}function xf(n){return(bh(n)?Ir:iu)(n)}function jf(n,t,r){return t=(r?Ui(n,t,r):t===X)?1:kc(t),
(bh(n)?Rr:ou)(n,t)}function Af(n){return(bh(n)?zr:cu)(n)}function kf(n){if(null==n)return 0;if(Hf(n))return dc(n)?V(n):n.length;var t=zs(n);return t==Gn||t==tt?n.size:Me(n).length}function Of(n,t,r){var e=bh(n)?h:lu;return r&&Ui(n,t,r)&&(t=X),e(n,mi(t,3))}function If(n,t){if("function"!=typeof t)throw new pl(en);return n=kc(n),function(){if(--n<1)return t.apply(this,arguments)}}function Rf(n,t,r){return t=r?X:t,t=n&&null==t?n.length:t,ai(n,mn,X,X,X,X,t)}function zf(n,t){var r;if("function"!=typeof t)throw new pl(en);
return n=kc(n),function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=X),r}}function Ef(n,t,r){t=r?X:t;var e=ai(n,yn,X,X,X,X,X,t);return e.placeholder=Ef.placeholder,e}function Sf(n,t,r){t=r?X:t;var e=ai(n,dn,X,X,X,X,X,t);return e.placeholder=Sf.placeholder,e}function Wf(n,t,r){function e(t){var r=h,e=p;return h=p=X,d=t,v=n.apply(e,r)}function u(n){return d=n,g=Ws(f,t),b?e(n):v}function i(n){var r=n-y,e=n-d,u=t-r;return w?Hl(u,_-e):u}function o(n){var r=n-y,e=n-d;return y===X||r>=t||r<0||w&&e>=_;
}function f(){var n=fh();return o(n)?c(n):(g=Ws(f,i(n)),X)}function c(n){return g=X,m&&h?e(n):(h=p=X,v)}function a(){g!==X&&As(g),d=0,h=y=p=g=X}function l(){return g===X?v:c(fh())}function s(){var n=fh(),r=o(n);if(h=arguments,p=this,y=n,r){if(g===X)return u(y);if(w)return As(g),g=Ws(f,t),e(y)}return g===X&&(g=Ws(f,t)),v}var h,p,_,v,g,y,d=0,b=!1,w=!1,m=!0;if("function"!=typeof n)throw new pl(en);return t=Ic(t)||0,fc(r)&&(b=!!r.leading,w="maxWait"in r,_=w?Gl(Ic(r.maxWait)||0,t):_,m="trailing"in r?!!r.trailing:m),
s.cancel=a,s.flush=l,s}function Lf(n){return ai(n,jn)}function Cf(n,t){if("function"!=typeof n||null!=t&&"function"!=typeof t)throw new pl(en);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o)||i,o};return r.cache=new(Cf.Cache||sr),r}function Uf(n){if("function"!=typeof n)throw new pl(en);return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:
return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function Bf(n){return zf(2,n)}function Tf(n,t){if("function"!=typeof n)throw new pl(en);return t=t===X?t:kc(t),uu(n,t)}function $f(t,r){if("function"!=typeof t)throw new pl(en);return r=null==r?0:Gl(kc(r),0),uu(function(e){var u=e[r],i=Ou(e,0,r);return u&&a(i,u),n(t,this,i)})}function Df(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new pl(en);return fc(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),
Wf(n,t,{leading:e,maxWait:t,trailing:u})}function Mf(n){return Rf(n,1)}function Ff(n,t){return ph(Au(t),n)}function Nf(){if(!arguments.length)return[];var n=arguments[0];return bh(n)?n:[n]}function Pf(n){return Fr(n,sn)}function qf(n,t){return t="function"==typeof t?t:X,Fr(n,sn,t)}function Zf(n){return Fr(n,an|sn)}function Kf(n,t){return t="function"==typeof t?t:X,Fr(n,an|sn,t)}function Vf(n,t){return null==t||Pr(n,t,Pc(t))}function Gf(n,t){return n===t||n!==n&&t!==t}function Hf(n){return null!=n&&oc(n.length)&&!uc(n);
}function Jf(n){return cc(n)&&Hf(n)}function Yf(n){return n===!0||n===!1||cc(n)&&we(n)==Nn}function Qf(n){return cc(n)&&1===n.nodeType&&!gc(n)}function Xf(n){if(null==n)return!0;if(Hf(n)&&(bh(n)||"string"==typeof n||"function"==typeof n.splice||mh(n)||Oh(n)||dh(n)))return!n.length;var t=zs(n);if(t==Gn||t==tt)return!n.size;if(Mi(n))return!Me(n).length;for(var r in n)if(bl.call(n,r))return!1;return!0}function nc(n,t){return Se(n,t)}function tc(n,t,r){r="function"==typeof r?r:X;var e=r?r(n,t):X;return e===X?Se(n,t,X,r):!!e;
}function rc(n){if(!cc(n))return!1;var t=we(n);return t==Zn||t==qn||"string"==typeof n.message&&"string"==typeof n.name&&!gc(n)}function ec(n){return"number"==typeof n&&Zl(n)}function uc(n){if(!fc(n))return!1;var t=we(n);return t==Kn||t==Vn||t==Fn||t==Xn}function ic(n){return"number"==typeof n&&n==kc(n)}function oc(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=Wn}function fc(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function cc(n){return null!=n&&"object"==typeof n}function ac(n,t){
return n===t||Ce(n,t,ji(t))}function lc(n,t,r){return r="function"==typeof r?r:X,Ce(n,t,ji(t),r)}function sc(n){return vc(n)&&n!=+n}function hc(n){if(Es(n))throw new fl(rn);return Ue(n)}function pc(n){return null===n}function _c(n){return null==n}function vc(n){return"number"==typeof n||cc(n)&&we(n)==Hn}function gc(n){if(!cc(n)||we(n)!=Yn)return!1;var t=El(n);if(null===t)return!0;var r=bl.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&dl.call(r)==jl}function yc(n){
return ic(n)&&n>=-Wn&&n<=Wn}function dc(n){return"string"==typeof n||!bh(n)&&cc(n)&&we(n)==rt}function bc(n){return"symbol"==typeof n||cc(n)&&we(n)==et}function wc(n){return n===X}function mc(n){return cc(n)&&zs(n)==it}function xc(n){return cc(n)&&we(n)==ot}function jc(n){if(!n)return[];if(Hf(n))return dc(n)?G(n):Tu(n);if(Ul&&n[Ul])return D(n[Ul]());var t=zs(n);return(t==Gn?M:t==tt?P:ra)(n)}function Ac(n){if(!n)return 0===n?n:0;if(n=Ic(n),n===Sn||n===-Sn){return(n<0?-1:1)*Ln}return n===n?n:0}function kc(n){
var t=Ac(n),r=t%1;return t===t?r?t-r:t:0}function Oc(n){return n?Mr(kc(n),0,Un):0}function Ic(n){if("number"==typeof n)return n;if(bc(n))return Cn;if(fc(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=fc(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=R(n);var r=qt.test(n);return r||Kt.test(n)?Xr(n.slice(2),r?2:8):Pt.test(n)?Cn:+n}function Rc(n){return $u(n,qc(n))}function zc(n){return n?Mr(kc(n),-Wn,Wn):0===n?n:0}function Ec(n){return null==n?"":vu(n)}function Sc(n,t){var r=gs(n);return null==t?r:Cr(r,t);
}function Wc(n,t){return v(n,mi(t,3),ue)}function Lc(n,t){return v(n,mi(t,3),oe)}function Cc(n,t){return null==n?n:bs(n,mi(t,3),qc)}function Uc(n,t){return null==n?n:ws(n,mi(t,3),qc)}function Bc(n,t){return n&&ue(n,mi(t,3))}function Tc(n,t){return n&&oe(n,mi(t,3))}function $c(n){return null==n?[]:fe(n,Pc(n))}function Dc(n){return null==n?[]:fe(n,qc(n))}function Mc(n,t,r){var e=null==n?X:_e(n,t);return e===X?r:e}function Fc(n,t){return null!=n&&Ri(n,t,xe)}function Nc(n,t){return null!=n&&Ri(n,t,je);
}function Pc(n){return Hf(n)?Or(n):Me(n)}function qc(n){return Hf(n)?Or(n,!0):Fe(n)}function Zc(n,t){var r={};return t=mi(t,3),ue(n,function(n,e,u){Br(r,t(n,e,u),n)}),r}function Kc(n,t){var r={};return t=mi(t,3),ue(n,function(n,e,u){Br(r,e,t(n,e,u))}),r}function Vc(n,t){return Gc(n,Uf(mi(t)))}function Gc(n,t){if(null==n)return{};var r=c(di(n),function(n){return[n]});return t=mi(t),Ye(n,r,function(n,r){return t(n,r[0])})}function Hc(n,t,r){t=ku(t,n);var e=-1,u=t.length;for(u||(u=1,n=X);++e<u;){var i=null==n?X:n[no(t[e])];
i===X&&(e=u,i=r),n=uc(i)?i.call(n):i}return n}function Jc(n,t,r){return null==n?n:fu(n,t,r)}function Yc(n,t,r,e){return e="function"==typeof e?e:X,null==n?n:fu(n,t,r,e)}function Qc(n,t,e){var u=bh(n),i=u||mh(n)||Oh(n);if(t=mi(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:fc(n)&&uc(o)?gs(El(n)):{}}return(i?r:ue)(n,function(n,r,u){return t(e,n,r,u)}),e}function Xc(n,t){return null==n||yu(n,t)}function na(n,t,r){return null==n?n:du(n,t,Au(r))}function ta(n,t,r,e){return e="function"==typeof e?e:X,
null==n?n:du(n,t,Au(r),e)}function ra(n){return null==n?[]:E(n,Pc(n))}function ea(n){return null==n?[]:E(n,qc(n))}function ua(n,t,r){return r===X&&(r=t,t=X),r!==X&&(r=Ic(r),r=r===r?r:0),t!==X&&(t=Ic(t),t=t===t?t:0),Mr(Ic(n),t,r)}function ia(n,t,r){return t=Ac(t),r===X?(r=t,t=0):r=Ac(r),n=Ic(n),Ae(n,t,r)}function oa(n,t,r){if(r&&"boolean"!=typeof r&&Ui(n,t,r)&&(t=r=X),r===X&&("boolean"==typeof t?(r=t,t=X):"boolean"==typeof n&&(r=n,n=X)),n===X&&t===X?(n=0,t=1):(n=Ac(n),t===X?(t=n,n=0):t=Ac(t)),n>t){
var e=n;n=t,t=e}if(r||n%1||t%1){var u=Ql();return Hl(n+u*(t-n+Qr("1e-"+((u+"").length-1))),t)}return tu(n,t)}function fa(n){return Qh(Ec(n).toLowerCase())}function ca(n){return n=Ec(n),n&&n.replace(Gt,ve).replace(Dr,"")}function aa(n,t,r){n=Ec(n),t=vu(t);var e=n.length;r=r===X?e:Mr(kc(r),0,e);var u=r;return r-=t.length,r>=0&&n.slice(r,u)==t}function la(n){return n=Ec(n),n&&At.test(n)?n.replace(xt,ge):n}function sa(n){return n=Ec(n),n&&Wt.test(n)?n.replace(St,"\\$&"):n}function ha(n,t,r){n=Ec(n),t=kc(t);
var e=t?V(n):0;if(!t||e>=t)return n;var u=(t-e)/2;return ri(Nl(u),r)+n+ri(Fl(u),r)}function pa(n,t,r){n=Ec(n),t=kc(t);var e=t?V(n):0;return t&&e<t?n+ri(t-e,r):n}function _a(n,t,r){n=Ec(n),t=kc(t);var e=t?V(n):0;return t&&e<t?ri(t-e,r)+n:n}function va(n,t,r){return r||null==t?t=0:t&&(t=+t),Yl(Ec(n).replace(Lt,""),t||0)}function ga(n,t,r){return t=(r?Ui(n,t,r):t===X)?1:kc(t),eu(Ec(n),t)}function ya(){var n=arguments,t=Ec(n[0]);return n.length<3?t:t.replace(n[1],n[2])}function da(n,t,r){return r&&"number"!=typeof r&&Ui(n,t,r)&&(t=r=X),
(r=r===X?Un:r>>>0)?(n=Ec(n),n&&("string"==typeof t||null!=t&&!Ah(t))&&(t=vu(t),!t&&T(n))?Ou(G(n),0,r):n.split(t,r)):[]}function ba(n,t,r){return n=Ec(n),r=null==r?0:Mr(kc(r),0,n.length),t=vu(t),n.slice(r,r+t.length)==t}function wa(n,t,r){var e=Z.templateSettings;r&&Ui(n,t,r)&&(t=X),n=Ec(n),t=Sh({},t,e,li);var u,i,o=Sh({},t.imports,e.imports,li),f=Pc(o),c=E(o,f),a=0,l=t.interpolate||Ht,s="__p += '",h=sl((t.escape||Ht).source+"|"+l.source+"|"+(l===It?Ft:Ht).source+"|"+(t.evaluate||Ht).source+"|$","g"),p="//# sourceURL="+(bl.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Zr+"]")+"\n";
n.replace(h,function(t,r,e,o,f,c){return e||(e=o),s+=n.slice(a,c).replace(Jt,U),r&&(u=!0,s+="' +\n__e("+r+") +\n'"),f&&(i=!0,s+="';\n"+f+";\n__p += '"),e&&(s+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),a=c+t.length,t}),s+="';\n";var _=bl.call(t,"variable")&&t.variable;if(_){if(Dt.test(_))throw new fl(un)}else s="with (obj) {\n"+s+"\n}\n";s=(i?s.replace(dt,""):s).replace(bt,"$1").replace(wt,"$1;"),s="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(u?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+s+"return __p\n}";
var v=Xh(function(){return cl(f,p+"return "+s).apply(X,c)});if(v.source=s,rc(v))throw v;return v}function ma(n){return Ec(n).toLowerCase()}function xa(n){return Ec(n).toUpperCase()}function ja(n,t,r){if(n=Ec(n),n&&(r||t===X))return R(n);if(!n||!(t=vu(t)))return n;var e=G(n),u=G(t);return Ou(e,W(e,u),L(e,u)+1).join("")}function Aa(n,t,r){if(n=Ec(n),n&&(r||t===X))return n.slice(0,H(n)+1);if(!n||!(t=vu(t)))return n;var e=G(n);return Ou(e,0,L(e,G(t))+1).join("")}function ka(n,t,r){if(n=Ec(n),n&&(r||t===X))return n.replace(Lt,"");
if(!n||!(t=vu(t)))return n;var e=G(n);return Ou(e,W(e,G(t))).join("")}function Oa(n,t){var r=An,e=kn;if(fc(t)){var u="separator"in t?t.separator:u;r="length"in t?kc(t.length):r,e="omission"in t?vu(t.omission):e}n=Ec(n);var i=n.length;if(T(n)){var o=G(n);i=o.length}if(r>=i)return n;var f=r-V(e);if(f<1)return e;var c=o?Ou(o,0,f).join(""):n.slice(0,f);if(u===X)return c+e;if(o&&(f+=c.length-f),Ah(u)){if(n.slice(f).search(u)){var a,l=c;for(u.global||(u=sl(u.source,Ec(Nt.exec(u))+"g")),u.lastIndex=0;a=u.exec(l);)var s=a.index;
c=c.slice(0,s===X?f:s)}}else if(n.indexOf(vu(u),f)!=f){var h=c.lastIndexOf(u);h>-1&&(c=c.slice(0,h))}return c+e}function Ia(n){return n=Ec(n),n&&jt.test(n)?n.replace(mt,ye):n}function Ra(n,t,r){return n=Ec(n),t=r?X:t,t===X?$(n)?Q(n):_(n):n.match(t)||[]}function za(t){var r=null==t?0:t.length,e=mi();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new pl(en);return[e(n[0]),n[1]]}):[],uu(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})}function Ea(n){
return Nr(Fr(n,an))}function Sa(n){return function(){return n}}function Wa(n,t){return null==n||n!==n?t:n}function La(n){return n}function Ca(n){return De("function"==typeof n?n:Fr(n,an))}function Ua(n){return qe(Fr(n,an))}function Ba(n,t){return Ze(n,Fr(t,an))}function Ta(n,t,e){var u=Pc(t),i=fe(t,u);null!=e||fc(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=fe(t,Pc(t)));var o=!(fc(e)&&"chain"in e&&!e.chain),f=uc(n);return r(i,function(r){var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;
if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Tu(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function $a(){return re._===this&&(re._=Al),this}function Da(){}function Ma(n){return n=kc(n),uu(function(t){return Ge(t,n)})}function Fa(n){return Bi(n)?m(no(n)):Qe(n)}function Na(n){return function(t){return null==n?X:_e(n,t)}}function Pa(){return[]}function qa(){return!1}function Za(){return{}}function Ka(){return"";
}function Va(){return!0}function Ga(n,t){if(n=kc(n),n<1||n>Wn)return[];var r=Un,e=Hl(n,Un);t=mi(t),n-=Un;for(var u=O(e,t);++r<n;)t(r);return u}function Ha(n){return bh(n)?c(n,no):bc(n)?[n]:Tu(Cs(Ec(n)))}function Ja(n){var t=++wl;return Ec(n)+t}function Ya(n){return n&&n.length?Yr(n,La,me):X}function Qa(n,t){return n&&n.length?Yr(n,mi(t,2),me):X}function Xa(n){return w(n,La)}function nl(n,t){return w(n,mi(t,2))}function tl(n){return n&&n.length?Yr(n,La,Ne):X}function rl(n,t){return n&&n.length?Yr(n,mi(t,2),Ne):X;
}function el(n){return n&&n.length?k(n,La):0}function ul(n,t){return n&&n.length?k(n,mi(t,2)):0}x=null==x?re:be.defaults(re.Object(),x,be.pick(re,qr));var il=x.Array,ol=x.Date,fl=x.Error,cl=x.Function,al=x.Math,ll=x.Object,sl=x.RegExp,hl=x.String,pl=x.TypeError,_l=il.prototype,vl=cl.prototype,gl=ll.prototype,yl=x["__core-js_shared__"],dl=vl.toString,bl=gl.hasOwnProperty,wl=0,ml=function(){var n=/[^.]+$/.exec(yl&&yl.keys&&yl.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),xl=gl.toString,jl=dl.call(ll),Al=re._,kl=sl("^"+dl.call(bl).replace(St,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ol=ie?x.Buffer:X,Il=x.Symbol,Rl=x.Uint8Array,zl=Ol?Ol.allocUnsafe:X,El=F(ll.getPrototypeOf,ll),Sl=ll.create,Wl=gl.propertyIsEnumerable,Ll=_l.splice,Cl=Il?Il.isConcatSpreadable:X,Ul=Il?Il.iterator:X,Bl=Il?Il.toStringTag:X,Tl=function(){
try{var n=Ai(ll,"defineProperty");return n({},"",{}),n}catch(n){}}(),$l=x.clearTimeout!==re.clearTimeout&&x.clearTimeout,Dl=ol&&ol.now!==re.Date.now&&ol.now,Ml=x.setTimeout!==re.setTimeout&&x.setTimeout,Fl=al.ceil,Nl=al.floor,Pl=ll.getOwnPropertySymbols,ql=Ol?Ol.isBuffer:X,Zl=x.isFinite,Kl=_l.join,Vl=F(ll.keys,ll),Gl=al.max,Hl=al.min,Jl=ol.now,Yl=x.parseInt,Ql=al.random,Xl=_l.reverse,ns=Ai(x,"DataView"),ts=Ai(x,"Map"),rs=Ai(x,"Promise"),es=Ai(x,"Set"),us=Ai(x,"WeakMap"),is=Ai(ll,"create"),os=us&&new us,fs={},cs=to(ns),as=to(ts),ls=to(rs),ss=to(es),hs=to(us),ps=Il?Il.prototype:X,_s=ps?ps.valueOf:X,vs=ps?ps.toString:X,gs=function(){
function n(){}return function(t){if(!fc(t))return{};if(Sl)return Sl(t);n.prototype=t;var r=new n;return n.prototype=X,r}}();Z.templateSettings={escape:kt,evaluate:Ot,interpolate:It,variable:"",imports:{_:Z}},Z.prototype=J.prototype,Z.prototype.constructor=Z,Y.prototype=gs(J.prototype),Y.prototype.constructor=Y,Ct.prototype=gs(J.prototype),Ct.prototype.constructor=Ct,Xt.prototype.clear=nr,Xt.prototype.delete=tr,Xt.prototype.get=rr,Xt.prototype.has=er,Xt.prototype.set=ur,ir.prototype.clear=or,ir.prototype.delete=fr,
ir.prototype.get=cr,ir.prototype.has=ar,ir.prototype.set=lr,sr.prototype.clear=hr,sr.prototype.delete=pr,sr.prototype.get=_r,sr.prototype.has=vr,sr.prototype.set=gr,yr.prototype.add=yr.prototype.push=dr,yr.prototype.has=br,wr.prototype.clear=mr,wr.prototype.delete=xr,wr.prototype.get=jr,wr.prototype.has=Ar,wr.prototype.set=kr;var ys=Pu(ue),ds=Pu(oe,!0),bs=qu(),ws=qu(!0),ms=os?function(n,t){return os.set(n,t),n}:La,xs=Tl?function(n,t){return Tl(n,"toString",{configurable:!0,enumerable:!1,value:Sa(t),
writable:!0})}:La,js=uu,As=$l||function(n){return re.clearTimeout(n)},ks=es&&1/P(new es([,-0]))[1]==Sn?function(n){return new es(n)}:Da,Os=os?function(n){return os.get(n)}:Da,Is=Pl?function(n){return null==n?[]:(n=ll(n),i(Pl(n),function(t){return Wl.call(n,t)}))}:Pa,Rs=Pl?function(n){for(var t=[];n;)a(t,Is(n)),n=El(n);return t}:Pa,zs=we;(ns&&zs(new ns(new ArrayBuffer(1)))!=ct||ts&&zs(new ts)!=Gn||rs&&zs(rs.resolve())!=Qn||es&&zs(new es)!=tt||us&&zs(new us)!=it)&&(zs=function(n){var t=we(n),r=t==Yn?n.constructor:X,e=r?to(r):"";
if(e)switch(e){case cs:return ct;case as:return Gn;case ls:return Qn;case ss:return tt;case hs:return it}return t});var Es=yl?uc:qa,Ss=Qi(ms),Ws=Ml||function(n,t){return re.setTimeout(n,t)},Ls=Qi(xs),Cs=Pi(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(Et,function(n,r,e,u){t.push(e?u.replace(Mt,"$1"):r||n)}),t}),Us=uu(function(n,t){return Jf(n)?Hr(n,ee(t,1,Jf,!0)):[]}),Bs=uu(function(n,t){var r=jo(t);return Jf(r)&&(r=X),Jf(n)?Hr(n,ee(t,1,Jf,!0),mi(r,2)):[]}),Ts=uu(function(n,t){
var r=jo(t);return Jf(r)&&(r=X),Jf(n)?Hr(n,ee(t,1,Jf,!0),X,r):[]}),$s=uu(function(n){var t=c(n,ju);return t.length&&t[0]===n[0]?ke(t):[]}),Ds=uu(function(n){var t=jo(n),r=c(n,ju);return t===jo(r)?t=X:r.pop(),r.length&&r[0]===n[0]?ke(r,mi(t,2)):[]}),Ms=uu(function(n){var t=jo(n),r=c(n,ju);return t="function"==typeof t?t:X,t&&r.pop(),r.length&&r[0]===n[0]?ke(r,X,t):[]}),Fs=uu(Oo),Ns=gi(function(n,t){var r=null==n?0:n.length,e=Tr(n,t);return nu(n,c(t,function(n){return Ci(n,r)?+n:n}).sort(Lu)),e}),Ps=uu(function(n){
return gu(ee(n,1,Jf,!0))}),qs=uu(function(n){var t=jo(n);return Jf(t)&&(t=X),gu(ee(n,1,Jf,!0),mi(t,2))}),Zs=uu(function(n){var t=jo(n);return t="function"==typeof t?t:X,gu(ee(n,1,Jf,!0),X,t)}),Ks=uu(function(n,t){return Jf(n)?Hr(n,t):[]}),Vs=uu(function(n){return mu(i(n,Jf))}),Gs=uu(function(n){var t=jo(n);return Jf(t)&&(t=X),mu(i(n,Jf),mi(t,2))}),Hs=uu(function(n){var t=jo(n);return t="function"==typeof t?t:X,mu(i(n,Jf),X,t)}),Js=uu(Go),Ys=uu(function(n){var t=n.length,r=t>1?n[t-1]:X;return r="function"==typeof r?(n.pop(),
r):X,Ho(n,r)}),Qs=gi(function(n){var t=n.length,r=t?n[0]:0,e=this.__wrapped__,u=function(t){return Tr(t,n)};return!(t>1||this.__actions__.length)&&e instanceof Ct&&Ci(r)?(e=e.slice(r,+r+(t?1:0)),e.__actions__.push({func:nf,args:[u],thisArg:X}),new Y(e,this.__chain__).thru(function(n){return t&&!n.length&&n.push(X),n})):this.thru(u)}),Xs=Fu(function(n,t,r){bl.call(n,r)?++n[r]:Br(n,r,1)}),nh=Ju(ho),th=Ju(po),rh=Fu(function(n,t,r){bl.call(n,r)?n[r].push(t):Br(n,r,[t])}),eh=uu(function(t,r,e){var u=-1,i="function"==typeof r,o=Hf(t)?il(t.length):[];
return ys(t,function(t){o[++u]=i?n(r,t,e):Ie(t,r,e)}),o}),uh=Fu(function(n,t,r){Br(n,r,t)}),ih=Fu(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),oh=uu(function(n,t){if(null==n)return[];var r=t.length;return r>1&&Ui(n,t[0],t[1])?t=[]:r>2&&Ui(t[0],t[1],t[2])&&(t=[t[0]]),He(n,ee(t,1),[])}),fh=Dl||function(){return re.Date.now()},ch=uu(function(n,t,r){var e=_n;if(r.length){var u=N(r,wi(ch));e|=bn}return ai(n,e,t,r,u)}),ah=uu(function(n,t,r){var e=_n|vn;if(r.length){var u=N(r,wi(ah));e|=bn;
}return ai(t,e,n,r,u)}),lh=uu(function(n,t){return Gr(n,1,t)}),sh=uu(function(n,t,r){return Gr(n,Ic(t)||0,r)});Cf.Cache=sr;var hh=js(function(t,r){r=1==r.length&&bh(r[0])?c(r[0],z(mi())):c(ee(r,1),z(mi()));var e=r.length;return uu(function(u){for(var i=-1,o=Hl(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);return n(t,this,u)})}),ph=uu(function(n,t){return ai(n,bn,X,t,N(t,wi(ph)))}),_h=uu(function(n,t){return ai(n,wn,X,t,N(t,wi(_h)))}),vh=gi(function(n,t){return ai(n,xn,X,X,X,t)}),gh=ii(me),yh=ii(function(n,t){
return n>=t}),dh=Re(function(){return arguments}())?Re:function(n){return cc(n)&&bl.call(n,"callee")&&!Wl.call(n,"callee")},bh=il.isArray,wh=ce?z(ce):ze,mh=ql||qa,xh=ae?z(ae):Ee,jh=le?z(le):Le,Ah=se?z(se):Be,kh=he?z(he):Te,Oh=pe?z(pe):$e,Ih=ii(Ne),Rh=ii(function(n,t){return n<=t}),zh=Nu(function(n,t){if(Mi(t)||Hf(t))return $u(t,Pc(t),n),X;for(var r in t)bl.call(t,r)&&Sr(n,r,t[r])}),Eh=Nu(function(n,t){$u(t,qc(t),n)}),Sh=Nu(function(n,t,r,e){$u(t,qc(t),n,e)}),Wh=Nu(function(n,t,r,e){$u(t,Pc(t),n,e);
}),Lh=gi(Tr),Ch=uu(function(n,t){n=ll(n);var r=-1,e=t.length,u=e>2?t[2]:X;for(u&&Ui(t[0],t[1],u)&&(e=1);++r<e;)for(var i=t[r],o=qc(i),f=-1,c=o.length;++f<c;){var a=o[f],l=n[a];(l===X||Gf(l,gl[a])&&!bl.call(n,a))&&(n[a]=i[a])}return n}),Uh=uu(function(t){return t.push(X,si),n(Mh,X,t)}),Bh=Xu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=xl.call(t)),n[t]=r},Sa(La)),Th=Xu(function(n,t,r){null!=t&&"function"!=typeof t.toString&&(t=xl.call(t)),bl.call(n,t)?n[t].push(r):n[t]=[r]},mi),$h=uu(Ie),Dh=Nu(function(n,t,r){
Ke(n,t,r)}),Mh=Nu(function(n,t,r,e){Ke(n,t,r,e)}),Fh=gi(function(n,t){var r={};if(null==n)return r;var e=!1;t=c(t,function(t){return t=ku(t,n),e||(e=t.length>1),t}),$u(n,di(n),r),e&&(r=Fr(r,an|ln|sn,hi));for(var u=t.length;u--;)yu(r,t[u]);return r}),Nh=gi(function(n,t){return null==n?{}:Je(n,t)}),Ph=ci(Pc),qh=ci(qc),Zh=Vu(function(n,t,r){return t=t.toLowerCase(),n+(r?fa(t):t)}),Kh=Vu(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vh=Vu(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Gh=Ku("toLowerCase"),Hh=Vu(function(n,t,r){
return n+(r?"_":"")+t.toLowerCase()}),Jh=Vu(function(n,t,r){return n+(r?" ":"")+Qh(t)}),Yh=Vu(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Qh=Ku("toUpperCase"),Xh=uu(function(t,r){try{return n(t,X,r)}catch(n){return rc(n)?n:new fl(n)}}),np=gi(function(n,t){return r(t,function(t){t=no(t),Br(n,t,ch(n[t],n))}),n}),tp=Yu(),rp=Yu(!0),ep=uu(function(n,t){return function(r){return Ie(r,n,t)}}),up=uu(function(n,t){return function(r){return Ie(n,r,t)}}),ip=ti(c),op=ti(u),fp=ti(h),cp=ui(),ap=ui(!0),lp=ni(function(n,t){
return n+t},0),sp=fi("ceil"),hp=ni(function(n,t){return n/t},1),pp=fi("floor"),_p=ni(function(n,t){return n*t},1),vp=fi("round"),gp=ni(function(n,t){return n-t},0);return Z.after=If,Z.ary=Rf,Z.assign=zh,Z.assignIn=Eh,Z.assignInWith=Sh,Z.assignWith=Wh,Z.at=Lh,Z.before=zf,Z.bind=ch,Z.bindAll=np,Z.bindKey=ah,Z.castArray=Nf,Z.chain=Qo,Z.chunk=uo,Z.compact=io,Z.concat=oo,Z.cond=za,Z.conforms=Ea,Z.constant=Sa,Z.countBy=Xs,Z.create=Sc,Z.curry=Ef,Z.curryRight=Sf,Z.debounce=Wf,Z.defaults=Ch,Z.defaultsDeep=Uh,
Z.defer=lh,Z.delay=sh,Z.difference=Us,Z.differenceBy=Bs,Z.differenceWith=Ts,Z.drop=fo,Z.dropRight=co,Z.dropRightWhile=ao,Z.dropWhile=lo,Z.fill=so,Z.filter=lf,Z.flatMap=sf,Z.flatMapDeep=hf,Z.flatMapDepth=pf,Z.flatten=_o,Z.flattenDeep=vo,Z.flattenDepth=go,Z.flip=Lf,Z.flow=tp,Z.flowRight=rp,Z.fromPairs=yo,Z.functions=$c,Z.functionsIn=Dc,Z.groupBy=rh,Z.initial=mo,Z.intersection=$s,Z.intersectionBy=Ds,Z.intersectionWith=Ms,Z.invert=Bh,Z.invertBy=Th,Z.invokeMap=eh,Z.iteratee=Ca,Z.keyBy=uh,Z.keys=Pc,Z.keysIn=qc,
Z.map=yf,Z.mapKeys=Zc,Z.mapValues=Kc,Z.matches=Ua,Z.matchesProperty=Ba,Z.memoize=Cf,Z.merge=Dh,Z.mergeWith=Mh,Z.method=ep,Z.methodOf=up,Z.mixin=Ta,Z.negate=Uf,Z.nthArg=Ma,Z.omit=Fh,Z.omitBy=Vc,Z.once=Bf,Z.orderBy=df,Z.over=ip,Z.overArgs=hh,Z.overEvery=op,Z.overSome=fp,Z.partial=ph,Z.partialRight=_h,Z.partition=ih,Z.pick=Nh,Z.pickBy=Gc,Z.property=Fa,Z.propertyOf=Na,Z.pull=Fs,Z.pullAll=Oo,Z.pullAllBy=Io,Z.pullAllWith=Ro,Z.pullAt=Ns,Z.range=cp,Z.rangeRight=ap,Z.rearg=vh,Z.reject=mf,Z.remove=zo,Z.rest=Tf,
Z.reverse=Eo,Z.sampleSize=jf,Z.set=Jc,Z.setWith=Yc,Z.shuffle=Af,Z.slice=So,Z.sortBy=oh,Z.sortedUniq=$o,Z.sortedUniqBy=Do,Z.split=da,Z.spread=$f,Z.tail=Mo,Z.take=Fo,Z.takeRight=No,Z.takeRightWhile=Po,Z.takeWhile=qo,Z.tap=Xo,Z.throttle=Df,Z.thru=nf,Z.toArray=jc,Z.toPairs=Ph,Z.toPairsIn=qh,Z.toPath=Ha,Z.toPlainObject=Rc,Z.transform=Qc,Z.unary=Mf,Z.union=Ps,Z.unionBy=qs,Z.unionWith=Zs,Z.uniq=Zo,Z.uniqBy=Ko,Z.uniqWith=Vo,Z.unset=Xc,Z.unzip=Go,Z.unzipWith=Ho,Z.update=na,Z.updateWith=ta,Z.values=ra,Z.valuesIn=ea,
Z.without=Ks,Z.words=Ra,Z.wrap=Ff,Z.xor=Vs,Z.xorBy=Gs,Z.xorWith=Hs,Z.zip=Js,Z.zipObject=Jo,Z.zipObjectDeep=Yo,Z.zipWith=Ys,Z.entries=Ph,Z.entriesIn=qh,Z.extend=Eh,Z.extendWith=Sh,Ta(Z,Z),Z.add=lp,Z.attempt=Xh,Z.camelCase=Zh,Z.capitalize=fa,Z.ceil=sp,Z.clamp=ua,Z.clone=Pf,Z.cloneDeep=Zf,Z.cloneDeepWith=Kf,Z.cloneWith=qf,Z.conformsTo=Vf,Z.deburr=ca,Z.defaultTo=Wa,Z.divide=hp,Z.endsWith=aa,Z.eq=Gf,Z.escape=la,Z.escapeRegExp=sa,Z.every=af,Z.find=nh,Z.findIndex=ho,Z.findKey=Wc,Z.findLast=th,Z.findLastIndex=po,
Z.findLastKey=Lc,Z.floor=pp,Z.forEach=_f,Z.forEachRight=vf,Z.forIn=Cc,Z.forInRight=Uc,Z.forOwn=Bc,Z.forOwnRight=Tc,Z.get=Mc,Z.gt=gh,Z.gte=yh,Z.has=Fc,Z.hasIn=Nc,Z.head=bo,Z.identity=La,Z.includes=gf,Z.indexOf=wo,Z.inRange=ia,Z.invoke=$h,Z.isArguments=dh,Z.isArray=bh,Z.isArrayBuffer=wh,Z.isArrayLike=Hf,Z.isArrayLikeObject=Jf,Z.isBoolean=Yf,Z.isBuffer=mh,Z.isDate=xh,Z.isElement=Qf,Z.isEmpty=Xf,Z.isEqual=nc,Z.isEqualWith=tc,Z.isError=rc,Z.isFinite=ec,Z.isFunction=uc,Z.isInteger=ic,Z.isLength=oc,Z.isMap=jh,
Z.isMatch=ac,Z.isMatchWith=lc,Z.isNaN=sc,Z.isNative=hc,Z.isNil=_c,Z.isNull=pc,Z.isNumber=vc,Z.isObject=fc,Z.isObjectLike=cc,Z.isPlainObject=gc,Z.isRegExp=Ah,Z.isSafeInteger=yc,Z.isSet=kh,Z.isString=dc,Z.isSymbol=bc,Z.isTypedArray=Oh,Z.isUndefined=wc,Z.isWeakMap=mc,Z.isWeakSet=xc,Z.join=xo,Z.kebabCase=Kh,Z.last=jo,Z.lastIndexOf=Ao,Z.lowerCase=Vh,Z.lowerFirst=Gh,Z.lt=Ih,Z.lte=Rh,Z.max=Ya,Z.maxBy=Qa,Z.mean=Xa,Z.meanBy=nl,Z.min=tl,Z.minBy=rl,Z.stubArray=Pa,Z.stubFalse=qa,Z.stubObject=Za,Z.stubString=Ka,
Z.stubTrue=Va,Z.multiply=_p,Z.nth=ko,Z.noConflict=$a,Z.noop=Da,Z.now=fh,Z.pad=ha,Z.padEnd=pa,Z.padStart=_a,Z.parseInt=va,Z.random=oa,Z.reduce=bf,Z.reduceRight=wf,Z.repeat=ga,Z.replace=ya,Z.result=Hc,Z.round=vp,Z.runInContext=p,Z.sample=xf,Z.size=kf,Z.snakeCase=Hh,Z.some=Of,Z.sortedIndex=Wo,Z.sortedIndexBy=Lo,Z.sortedIndexOf=Co,Z.sortedLastIndex=Uo,Z.sortedLastIndexBy=Bo,Z.sortedLastIndexOf=To,Z.startCase=Jh,Z.startsWith=ba,Z.subtract=gp,Z.sum=el,Z.sumBy=ul,Z.template=wa,Z.times=Ga,Z.toFinite=Ac,Z.toInteger=kc,
Z.toLength=Oc,Z.toLower=ma,Z.toNumber=Ic,Z.toSafeInteger=zc,Z.toString=Ec,Z.toUpper=xa,Z.trim=ja,Z.trimEnd=Aa,Z.trimStart=ka,Z.truncate=Oa,Z.unescape=Ia,Z.uniqueId=Ja,Z.upperCase=Yh,Z.upperFirst=Qh,Z.each=_f,Z.eachRight=vf,Z.first=bo,Ta(Z,function(){var n={};return ue(Z,function(t,r){bl.call(Z.prototype,r)||(n[r]=t)}),n}(),{chain:!1}),Z.VERSION=nn,r(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){Z[n].placeholder=Z}),r(["drop","take"],function(n,t){Ct.prototype[n]=function(r){
r=r===X?1:Gl(kc(r),0);var e=this.__filtered__&&!t?new Ct(this):this.clone();return e.__filtered__?e.__takeCount__=Hl(r,e.__takeCount__):e.__views__.push({size:Hl(r,Un),type:n+(e.__dir__<0?"Right":"")}),e},Ct.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r==Rn||r==En;Ct.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({iteratee:mi(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){
var r="take"+(t?"Right":"");Ct.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Ct.prototype[n]=function(){return this.__filtered__?new Ct(this):this[r](1)}}),Ct.prototype.compact=function(){return this.filter(La)},Ct.prototype.find=function(n){return this.filter(n).head()},Ct.prototype.findLast=function(n){return this.reverse().find(n)},Ct.prototype.invokeMap=uu(function(n,t){return"function"==typeof n?new Ct(this):this.map(function(r){
return Ie(r,n,t)})}),Ct.prototype.reject=function(n){return this.filter(Uf(mi(n)))},Ct.prototype.slice=function(n,t){n=kc(n);var r=this;return r.__filtered__&&(n>0||t<0)?new Ct(r):(n<0?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==X&&(t=kc(t),r=t<0?r.dropRight(-t):r.take(t-n)),r)},Ct.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ct.prototype.toArray=function(){return this.take(Un)},ue(Ct.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=Z[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);
u&&(Z.prototype[t]=function(){var t=this.__wrapped__,o=e?[1]:arguments,f=t instanceof Ct,c=o[0],l=f||bh(t),s=function(n){var t=u.apply(Z,a([n],o));return e&&h?t[0]:t};l&&r&&"function"==typeof c&&1!=c.length&&(f=l=!1);var h=this.__chain__,p=!!this.__actions__.length,_=i&&!h,v=f&&!p;if(!i&&l){t=v?t:new Ct(this);var g=n.apply(t,o);return g.__actions__.push({func:nf,args:[s],thisArg:X}),new Y(g,h)}return _&&v?n.apply(this,o):(g=this.thru(s),_?e?g.value()[0]:g.value():g)})}),r(["pop","push","shift","sort","splice","unshift"],function(n){
var t=_l[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);Z.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(bh(u)?u:[],n)}return this[r](function(r){return t.apply(bh(r)?r:[],n)})}}),ue(Ct.prototype,function(n,t){var r=Z[t];if(r){var e=r.name+"";bl.call(fs,e)||(fs[e]=[]),fs[e].push({name:t,func:r})}}),fs[Qu(X,vn).name]=[{name:"wrapper",func:X}],Ct.prototype.clone=$t,Ct.prototype.reverse=Yt,Ct.prototype.value=Qt,Z.prototype.at=Qs,
Z.prototype.chain=tf,Z.prototype.commit=rf,Z.prototype.next=ef,Z.prototype.plant=of,Z.prototype.reverse=ff,Z.prototype.toJSON=Z.prototype.valueOf=Z.prototype.value=cf,Z.prototype.first=Z.prototype.head,Ul&&(Z.prototype[Ul]=uf),Z},be=de(); true?(re._=be,!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return be}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))):0}).call(this);

/***/ }),

/***/ 27428:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _immutable = __webpack_require__(43393);

var _immutable2 = _interopRequireDefault(_immutable);

var _utilities = __webpack_require__(79607);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function (reducers) {
  var getDefaultState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _immutable2.default.Map;

  var reducerKeys = Object.keys(reducers);

  // eslint-disable-next-line space-infix-ops
  return function () {
    var inputState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDefaultState();
    var action = arguments[1];

    // eslint-disable-next-line no-process-env
    if (false) { var warningMessage; }

    return inputState.withMutations(function (temporaryState) {
      reducerKeys.forEach(function (reducerName) {
        var reducer = reducers[reducerName];
        var currentDomainState = temporaryState.get(reducerName);
        var nextDomainState = reducer(currentDomainState, action);

        (0, _utilities.validateNextState)(nextDomainState, reducerName, action);

        temporaryState.set(reducerName, nextDomainState);
      });
    });
  };
};

module.exports = exports['default'];
//# sourceMappingURL=combineReducers.js.map

/***/ }),

/***/ 72739:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.combineReducers = undefined;

var _combineReducers2 = __webpack_require__(27428);

var _combineReducers3 = _interopRequireDefault(_combineReducers2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.combineReducers = _combineReducers3.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 94528:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports["default"] = function (action) {
  return action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
};

module.exports = exports['default'];
//# sourceMappingURL=getStateName.js.map

/***/ }),

/***/ 93651:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _immutable = __webpack_require__(43393);

var _immutable2 = _interopRequireDefault(_immutable);

var _getStateName = __webpack_require__(94528);

var _getStateName2 = _interopRequireDefault(_getStateName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function (state, reducers, action) {
  var reducerNames = Object.keys(reducers);

  if (!reducerNames.length) {
    return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
  }

  var stateName = (0, _getStateName2.default)(action);

  if (_immutable2.default.isImmutable ? !_immutable2.default.isImmutable(state) : !_immutable2.default.Iterable.isIterable(state)) {
    return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Collection or Immutable.Record with the following properties: "' + reducerNames.join('", "') + '".';
  }

  var unexpectedStatePropertyNames = state.toSeq().keySeq().toArray().filter(function (name) {
    return !reducers.hasOwnProperty(name);
  });

  if (unexpectedStatePropertyNames.length > 0) {
    return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
  }

  return null;
};

module.exports = exports['default'];
//# sourceMappingURL=getUnexpectedInvocationParameterMessage.js.map

/***/ }),

/***/ 79607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;

var _getStateName2 = __webpack_require__(94528);

var _getStateName3 = _interopRequireDefault(_getStateName2);

var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(93651);

var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);

var _validateNextState2 = __webpack_require__(85527);

var _validateNextState3 = _interopRequireDefault(_validateNextState2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getStateName = _getStateName3.default;
exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
exports.validateNextState = _validateNextState3.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85527:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

exports["default"] = function (nextState, reducerName, action) {
  // eslint-disable-next-line no-undefined
  if (nextState === undefined) {
    throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
  }
};

module.exports = exports['default'];
//# sourceMappingURL=validateNextState.js.map

/***/ }),

/***/ 59681:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
var _default = thunk;
exports["default"] = _default;

/***/ })

}]);