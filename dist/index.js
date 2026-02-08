"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=v(function(I,s){
var O=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function y(e,r){return O(r)?b(r,"iter")&&(e.iter=r.iter,!x(r.iter))?new TypeError(o('0aR2t',"iter",r.iter)):null:new TypeError(o('0aR2V',r));}s.exports=y
});var d=v(function(_,c){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),N=require('@stdlib/constants-float64-max-safe-integer/dist'),T=f(),h=N+1;function g(e){var r,t,u,n,i;if(r={iter:h},arguments.length&&(n=T(r,e),n))throw n;return i=-1,t={},a(t,"next",m),a(t,"return",q),l&&a(t,l,p),t;function m(){return i+=1,u||i>=r.iter?{done:!0}:{value:i,done:!1}}function q(E){return u=!0,arguments.length?{value:E,done:!0}:{done:!0}}function p(){return g(r)}}c.exports=g
});var w=d();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
