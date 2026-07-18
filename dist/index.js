"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var f=v(function(I,s){
var O=require('@stdlib/assert-is-plain-object/dist'),b=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function y(t,r){return O(r)?b(r,"iter")&&(t.iter=r.iter,!x(r.iter))?new TypeError(o('0aR2t',"iter",r.iter)):null:new TypeError(o('0aR2V',r));}s.exports=y
});var d=v(function(_,c){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=require('@stdlib/symbol-iterator/dist'),N=require('@stdlib/constants-float64-max-safe-integer/dist'),T=f(),h=N+1;function g(t){var r,e,u,n,i;if(r={iter:h},arguments.length&&(n=T(r,t),n))throw n;return i=-1,e={},a(e,"next",m),a(e,"return",q),l&&a(e,l,p),e;function m(){return i+=1,u||i>=r.iter?{done:!0}:{value:i,done:!1}}function q(E){return u=!0,arguments.length?{value:E,done:!0}:{done:!0}}function p(){return g(r)}}c.exports=g
});var w=d();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
