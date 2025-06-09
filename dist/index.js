"use strict";var g=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var c=g(function(k,v){
var f=require('@stdlib/array-base-arraylike2object/dist'),l=require('@stdlib/array-base-zero-to/dist');function i(t,r,s){var a,n,e,o,u;for(a=t.data,n=t.accessors[0],u=0,e=0;e<r.length;e++)o=r[e],s(n(a,o),o,a)&&(r[u]=o,u+=1);return r.length=u,r}function h(t,r,s){var a,n,e;for(e=0,a=0;a<r.length;a++)n=r[a],s(t[n],n,t)&&(r[e]=n,e+=1);return r.length=e,r}function m(){var t,r,s,a,n,e;for(r=[],t=[],e=0;e<arguments.length;e+=2)r.push(f(arguments[e])),t.push(arguments[e+1]);for(s=arguments[0].length,a=l(s),e=0;e<r.length;e++)n=r[e],n.accessorProtocol?a=i(n,a,t[e]):a=h(n.data,a,t[e]);return a.length}v.exports=m
});var p=c();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
