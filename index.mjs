// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function d(e,t){return n(t)?s(t,"iter")&&(e.iter=t.iter,!i(t.iter))?new TypeError(o("0I835","iter",t.iter)):null:new TypeError(o("0I82h",t))}var m=r+1;function l(r){var n,s,i,o,p;if(n={iter:m},arguments.length&&(o=d(n,r)))throw o;return p=-1,e(s={},"next",j),e(s,"return",a),t&&e(s,t,h),s;function j(){return p+=1,i||p>=n.iter?{done:!0}:{value:p,done:!1}}function a(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return l(n)}}export{l as default};
//# sourceMappingURL=index.mjs.map
