// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function d(t,e){return r(e)?s(e,"iter")&&(t.iter=e.iter,!i(e.iter))?new TypeError(o("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(o("invalid argument. Options argument must be an object. Value: `%s`.",e))}var m=n+1;function l(n){var r,s,i,o,a;if(r={iter:m},arguments.length&&(o=d(r,n)))throw o;return a=-1,t(s={},"next",p),t(s,"return",j),e&&t(s,e,u),s;function p(){return a+=1,i||a>=r.iter?{done:!0}:{value:a,done:!1}}function j(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function u(){return l(r)}}export{l as default};
//# sourceMappingURL=index.mjs.map