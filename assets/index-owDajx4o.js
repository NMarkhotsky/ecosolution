(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var If={exports:{}},as={},Mf={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),Qh=Symbol.for("react.portal"),Kh=Symbol.for("react.fragment"),Yh=Symbol.for("react.strict_mode"),Gh=Symbol.for("react.profiler"),Zh=Symbol.for("react.provider"),Xh=Symbol.for("react.context"),qh=Symbol.for("react.forward_ref"),Jh=Symbol.for("react.suspense"),em=Symbol.for("react.memo"),tm=Symbol.for("react.lazy"),Ua=Symbol.iterator;function nm(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vf=Object.assign,Uf={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Uf,this.updater=n||bf}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bf(){}Bf.prototype=Or.prototype;function ju(e,t,n){this.props=e,this.context=t,this.refs=Uf,this.updater=n||bf}var Nu=ju.prototype=new Bf;Nu.constructor=ju;Vf(Nu,Or.prototype);Nu.isPureReactComponent=!0;var Ba=Array.isArray,Hf=Object.prototype.hasOwnProperty,Fu={current:null},Wf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Hf.call(t,r)&&!Wf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),a=0;a<l;a++)u[a]=arguments[a+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ji,type:e,key:o,ref:s,props:i,_owner:Fu.current}}function rm(e,t){return{$$typeof:ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Tu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function im(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ha=/\/+/g;function Is(e,t){return typeof e=="object"&&e!==null&&e.key!=null?im(""+e.key):t.toString(36)}function oo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ji:case Qh:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Is(s,0):r,Ba(i)?(n="",e!=null&&(n=e.replace(Ha,"$&/")+"/"),oo(i,t,n,"",function(a){return a})):i!=null&&(Tu(i)&&(i=rm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ha,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Ba(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+Is(o,l);s+=oo(o,t,n,u,i)}else if(u=nm(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+Is(o,l++),s+=oo(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ai(e,t,n){if(e==null)return e;var r=[],i=0;return oo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function om(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},so={transition:null},sm={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:so,ReactCurrentOwner:Fu};Y.Children={map:Ai,forEach:function(e,t,n){Ai(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!Tu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Or;Y.Fragment=Kh;Y.Profiler=Gh;Y.PureComponent=ju;Y.StrictMode=Yh;Y.Suspense=Jh;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sm;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Fu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)Hf.call(t,u)&&!Wf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var a=0;a<u;a++)l[a]=arguments[a+2];r.children=l}return{$$typeof:ji,type:e.type,key:i,ref:o,props:r,_owner:s}};Y.createContext=function(e){return e={$$typeof:Xh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zh,_context:e},e.Consumer=e};Y.createElement=Qf;Y.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:qh,render:e}};Y.isValidElement=Tu;Y.lazy=function(e){return{$$typeof:tm,_payload:{_status:-1,_result:e},_init:om}};Y.memo=function(e,t){return{$$typeof:em,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ue.current.useCallback(e,t)};Y.useContext=function(e){return Ue.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ue.current.useEffect(e,t)};Y.useId=function(){return Ue.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ue.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};Y.useRef=function(e){return Ue.current.useRef(e)};Y.useState=function(e){return Ue.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ue.current.useTransition()};Y.version="18.2.0";Mf.exports=Y;var he=Mf.exports;const ue=Cu(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=he,um=Symbol.for("react.element"),am=Symbol.for("react.fragment"),cm=Object.prototype.hasOwnProperty,fm=lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dm={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)cm.call(t,r)&&!dm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:um,type:e,key:o,ref:s,props:i,_owner:fm.current}}as.Fragment=am;as.jsx=Kf;as.jsxs=Kf;If.exports=as;var d=If.exports,El={},Yf={exports:{}},rt={},Gf={exports:{}},Zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var B=T.length;T.push(L);e:for(;0<B;){var Z=B-1>>>1,q=T[Z];if(0<i(q,L))T[Z]=L,T[B]=q,B=Z;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],B=T.pop();if(B!==L){T[0]=B;e:for(var Z=0,q=T.length,jt=q>>>1;Z<jt;){var Ze=2*(Z+1)-1,pt=T[Ze],Ie=Ze+1,Xe=T[Ie];if(0>i(pt,B))Ie<q&&0>i(Xe,pt)?(T[Z]=Xe,T[Ie]=B,Z=Ie):(T[Z]=pt,T[Ze]=B,Z=Ze);else if(Ie<q&&0>i(Xe,B))T[Z]=Xe,T[Ie]=B,Z=Ie;else break e}}return L}function i(T,L){var B=T.sortIndex-L.sortIndex;return B!==0?B:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],a=[],h=1,p=null,f=3,v=!1,S=!1,E=!1,I=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var L=n(a);L!==null;){if(L.callback===null)r(a);else if(L.startTime<=T)r(a),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(a)}}function w(T){if(E=!1,m(T),!S)if(n(u)!==null)S=!0,_e(_);else{var L=n(a);L!==null&&$e(w,L.startTime-T)}}function _(T,L){S=!1,E&&(E=!1,g(O),O=-1),v=!0;var B=f;try{for(m(L),p=n(u);p!==null&&(!(p.expirationTime>L)||T&&!H());){var Z=p.callback;if(typeof Z=="function"){p.callback=null,f=p.priorityLevel;var q=Z(p.expirationTime<=L);L=e.unstable_now(),typeof q=="function"?p.callback=q:p===n(u)&&r(u),m(L)}else r(u);p=n(u)}if(p!==null)var jt=!0;else{var Ze=n(a);Ze!==null&&$e(w,Ze.startTime-L),jt=!1}return jt}finally{p=null,f=B,v=!1}}var j=!1,$=null,O=-1,W=5,U=-1;function H(){return!(e.unstable_now()-U<W)}function Q(){if($!==null){var T=e.unstable_now();U=T;var L=!0;try{L=$(!0,T)}finally{L?V():(j=!1,$=null)}}else j=!1}var V;if(typeof c=="function")V=function(){c(Q)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,me=ee.port2;ee.port1.onmessage=Q,V=function(){me.postMessage(null)}}else V=function(){I(Q,0)};function _e(T){$=T,j||(j=!0,V())}function $e(T,L){O=I(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){S||v||(S=!0,_e(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var B=f;f=L;try{return T()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=f;f=T;try{return L()}finally{f=B}},e.unstable_scheduleCallback=function(T,L,B){var Z=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,T){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=B+q,T={id:h++,callback:L,priorityLevel:T,startTime:B,expirationTime:q,sortIndex:-1},B>Z?(T.sortIndex=B,t(a,T),n(u)===null&&T===n(a)&&(E?(g(O),O=-1):E=!0,$e(w,B-Z))):(T.sortIndex=q,t(u,T),S||v||(S=!0,_e(_))),T},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(T){var L=f;return function(){var B=f;f=L;try{return T.apply(this,arguments)}finally{f=B}}}})(Zf);Gf.exports=Zf;var pm=Gf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf=he,nt=pm;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qf=new Set,ui={};function Bn(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(ui[e]=t,e=0;e<t.length;e++)qf.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,hm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},Qa={};function mm(e){return _l.call(Qa,e)?!0:_l.call(Wa,e)?!1:hm.test(e)?Qa[e]=!0:(Wa[e]=!0,!1)}function gm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ym(e,t,n,r){if(t===null||typeof t>"u"||gm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Du=/[\-:]([a-z])/g;function Pu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Du,Pu);Oe[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Du,Pu);Oe[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Du,Pu);Oe[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ou(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ym(t,n,i,r)&&(n=null),r||i===null?mm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Zt=Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ri=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),$l=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),ed=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),td=Symbol.for("react.offscreen"),Ka=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Ka&&e[Ka]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,Ms;function Kr(e){if(Ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ms=t&&t[1]||""}return`
`+Ms+e}var bs=!1;function Vs(e,t){if(!e||bs)return"";bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Kr(e):""}function vm(e){switch(e.tag){case 5:return Kr(e.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 2:case 15:return e=Vs(e.type,!1),e;case 11:return e=Vs(e.type.render,!1),e;case 1:return e=Vs(e.type,!0),e;default:return""}}function Nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case $l:return"Profiler";case zu:return"StrictMode";case Cl:return"Suspense";case jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ed:return(e.displayName||"Context")+".Consumer";case Jf:return(e._context.displayName||"Context")+".Provider";case Au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ru:return t=e.displayName||null,t!==null?t:Nl(e.type)||"Memo";case en:t=e._payload,e=e._init;try{return Nl(e(t))}catch{}}return null}function xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nl(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wm(e){var t=nd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Li(e){e._valueTracker||(e._valueTracker=wm(e))}function rd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function id(e,t){t=t.checked,t!=null&&Ou(e,"checked",t,!1)}function Tl(e,t){id(e,t);var n=xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Dl(e,t,n){(t!=="number"||jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Za(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Yr(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xn(n)}}function od(e,t){var n=xn(t.value),r=xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ii,ld=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ii=Ii||document.createElement("div"),Ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sm=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){Sm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function ud(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ud(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var km=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(km[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rl=null;function Lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ll=null,gr=null,yr=null;function qa(e){if(e=Ti(e)){if(typeof Ll!="function")throw Error(N(280));var t=e.stateNode;t&&(t=hs(t),Ll(e.stateNode,e.type,t))}}function cd(e){gr?yr?yr.push(e):yr=[e]:gr=e}function fd(){if(gr){var e=gr,t=yr;if(yr=gr=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function dd(e,t){return e(t)}function pd(){}var Us=!1;function hd(e,t,n){if(Us)return e(t,n);Us=!0;try{return dd(e,t,n)}finally{Us=!1,(gr!==null||yr!==null)&&(pd(),fd())}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var r=hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Il=!1;if(Qt)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Il=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Il=!1}function Em(e,t,n,r,i,o,s,l,u){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(h){this.onError(h)}}var Jr=!1,No=null,Fo=!1,Ml=null,_m={onError:function(e){Jr=!0,No=e}};function $m(e,t,n,r,i,o,s,l,u){Jr=!1,No=null,Em.apply(_m,arguments)}function Cm(e,t,n,r,i,o,s,l,u){if($m.apply(this,arguments),Jr){if(Jr){var a=No;Jr=!1,No=null}else throw Error(N(198));Fo||(Fo=!0,Ml=a)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function md(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(Hn(e)!==e)throw Error(N(188))}function jm(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ja(i),e;if(o===r)return Ja(i),t;o=o.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function gd(e){return e=jm(e),e!==null?yd(e):null}function yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yd(e);if(t!==null)return t;e=e.sibling}return null}var vd=nt.unstable_scheduleCallback,ec=nt.unstable_cancelCallback,Nm=nt.unstable_shouldYield,Fm=nt.unstable_requestPaint,ye=nt.unstable_now,Tm=nt.unstable_getCurrentPriorityLevel,Iu=nt.unstable_ImmediatePriority,xd=nt.unstable_UserBlockingPriority,To=nt.unstable_NormalPriority,Dm=nt.unstable_LowPriority,wd=nt.unstable_IdlePriority,cs=null,zt=null;function Pm(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(cs,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Am,Om=Math.log,zm=Math.LN2;function Am(e){return e>>>=0,e===0?32:31-(Om(e)/zm|0)|0}var Mi=64,bi=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Do(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Gr(l):(o&=s,o!==0&&(r=Gr(o)))}else s=n&~i,s!==0?r=Gr(s):o!==0&&(r=Gr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Et(t),i=1<<n,r|=e[n],t&=~i;return r}function Rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Et(o),l=1<<s,u=i[s];u===-1?(!(l&n)||l&r)&&(i[s]=Rm(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function bl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sd(){var e=Mi;return Mi<<=1,!(Mi&4194240)&&(Mi=64),e}function Bs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Et(t),e[t]=n}function Im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Et(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Mu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var te=0;function kd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ed,bu,_d,$d,Cd,Vl=!1,Vi=[],an=null,cn=null,fn=null,fi=new Map,di=new Map,nn=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tc(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function Mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ti(t),t!==null&&bu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bm(e,t,n,r,i){switch(t){case"focusin":return an=Mr(an,e,t,n,r,i),!0;case"dragenter":return cn=Mr(cn,e,t,n,r,i),!0;case"mouseover":return fn=Mr(fn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return fi.set(o,Mr(fi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,di.set(o,Mr(di.get(o)||null,e,t,n,r,i)),!0}return!1}function jd(e){var t=Cn(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=md(n),t!==null){e.blockedOn=t,Cd(e.priority,function(){_d(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Rl=r,n.target.dispatchEvent(r),Rl=null}else return t=Ti(n),t!==null&&bu(t),e.blockedOn=n,!1;t.shift()}return!0}function nc(e,t,n){lo(e)&&n.delete(t)}function Vm(){Vl=!1,an!==null&&lo(an)&&(an=null),cn!==null&&lo(cn)&&(cn=null),fn!==null&&lo(fn)&&(fn=null),fi.forEach(nc),di.forEach(nc)}function br(e,t){e.blockedOn===t&&(e.blockedOn=null,Vl||(Vl=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Vm)))}function pi(e){function t(i){return br(i,e)}if(0<Vi.length){br(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&br(an,e),cn!==null&&br(cn,e),fn!==null&&br(fn,e),fi.forEach(t),di.forEach(t),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&nn.shift()}var vr=Zt.ReactCurrentBatchConfig,Po=!0;function Um(e,t,n,r){var i=te,o=vr.transition;vr.transition=null;try{te=1,Vu(e,t,n,r)}finally{te=i,vr.transition=o}}function Bm(e,t,n,r){var i=te,o=vr.transition;vr.transition=null;try{te=4,Vu(e,t,n,r)}finally{te=i,vr.transition=o}}function Vu(e,t,n,r){if(Po){var i=Ul(e,t,n,r);if(i===null)Js(e,t,r,Oo,n),tc(e,r);else if(bm(i,e,t,n,r))r.stopPropagation();else if(tc(e,r),t&4&&-1<Mm.indexOf(e)){for(;i!==null;){var o=Ti(i);if(o!==null&&Ed(o),o=Ul(e,t,n,r),o===null&&Js(e,t,r,Oo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Js(e,t,r,null,n)}}var Oo=null;function Ul(e,t,n,r){if(Oo=null,e=Lu(r),e=Cn(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=md(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function Nd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tm()){case Iu:return 1;case xd:return 4;case To:case Dm:return 16;case wd:return 536870912;default:return 16}default:return 16}}var sn=null,Uu=null,uo=null;function Fd(){if(uo)return uo;var e,t=Uu,n=t.length,r,i="value"in sn?sn.value:sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return uo=i.slice(e,1<r?1-r:void 0)}function ao(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function rc(){return!1}function it(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ui:rc,this.isPropagationStopped=rc,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=it(zr),Fi=de({},zr,{view:0,detail:0}),Hm=it(Fi),Hs,Ws,Vr,fs=de({},Fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Hs=e.screenX-Vr.screenX,Ws=e.screenY-Vr.screenY):Ws=Hs=0,Vr=e),Hs)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),ic=it(fs),Wm=de({},fs,{dataTransfer:0}),Qm=it(Wm),Km=de({},Fi,{relatedTarget:0}),Qs=it(Km),Ym=de({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gm=it(Ym),Zm=de({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xm=it(Zm),qm=de({},zr,{data:0}),oc=it(qm),Jm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t0[e])?!!t[e]:!1}function Hu(){return n0}var r0=de({},Fi,{key:function(e){if(e.key){var t=Jm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ao(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(e){return e.type==="keypress"?ao(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ao(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i0=it(r0),o0=de({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=it(o0),s0=de({},Fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),l0=it(s0),u0=de({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),a0=it(u0),c0=de({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=it(c0),d0=[9,13,27,32],Wu=Qt&&"CompositionEvent"in window,ei=null;Qt&&"documentMode"in document&&(ei=document.documentMode);var p0=Qt&&"TextEvent"in window&&!ei,Td=Qt&&(!Wu||ei&&8<ei&&11>=ei),lc=" ",uc=!1;function Dd(e,t){switch(e){case"keyup":return d0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function h0(e,t){switch(e){case"compositionend":return Pd(t);case"keypress":return t.which!==32?null:(uc=!0,lc);case"textInput":return e=t.data,e===lc&&uc?null:e;default:return null}}function m0(e,t){if(nr)return e==="compositionend"||!Wu&&Dd(e,t)?(e=Fd(),uo=Uu=sn=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!g0[e.type]:t==="textarea"}function Od(e,t,n,r){cd(r),t=zo(t,"onChange"),0<t.length&&(n=new Bu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ti=null,hi=null;function y0(e){Hd(e,0)}function ds(e){var t=or(e);if(rd(t))return e}function v0(e,t){if(e==="change")return t}var zd=!1;if(Qt){var Ks;if(Qt){var Ys="oninput"in document;if(!Ys){var cc=document.createElement("div");cc.setAttribute("oninput","return;"),Ys=typeof cc.oninput=="function"}Ks=Ys}else Ks=!1;zd=Ks&&(!document.documentMode||9<document.documentMode)}function fc(){ti&&(ti.detachEvent("onpropertychange",Ad),hi=ti=null)}function Ad(e){if(e.propertyName==="value"&&ds(hi)){var t=[];Od(t,hi,e,Lu(e)),hd(y0,t)}}function x0(e,t,n){e==="focusin"?(fc(),ti=t,hi=n,ti.attachEvent("onpropertychange",Ad)):e==="focusout"&&fc()}function w0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(hi)}function S0(e,t){if(e==="click")return ds(t)}function k0(e,t){if(e==="input"||e==="change")return ds(t)}function E0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:E0;function mi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_l.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function dc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=dc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dc(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ld(){for(var e=window,t=jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=jo(e.document)}return t}function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _0(e){var t=Ld(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&Qu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=pc(n,o);var s=pc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $0=Qt&&"documentMode"in document&&11>=document.documentMode,rr=null,Bl=null,ni=null,Hl=!1;function hc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hl||rr==null||rr!==jo(r)||(r=rr,"selectionStart"in r&&Qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&mi(ni,r)||(ni=r,r=zo(Bl,"onSelect"),0<r.length&&(t=new Bu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ir={animationend:Bi("Animation","AnimationEnd"),animationiteration:Bi("Animation","AnimationIteration"),animationstart:Bi("Animation","AnimationStart"),transitionend:Bi("Transition","TransitionEnd")},Gs={},Id={};Qt&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function ps(e){if(Gs[e])return Gs[e];if(!ir[e])return e;var t=ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return Gs[e]=t[n];return e}var Md=ps("animationend"),bd=ps("animationiteration"),Vd=ps("animationstart"),Ud=ps("transitionend"),Bd=new Map,mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Bd.set(e,t),Bn(t,[e])}for(var Zs=0;Zs<mc.length;Zs++){var Xs=mc[Zs],C0=Xs.toLowerCase(),j0=Xs[0].toUpperCase()+Xs.slice(1);Sn(C0,"on"+j0)}Sn(Md,"onAnimationEnd");Sn(bd,"onAnimationIteration");Sn(Vd,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Ud,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),N0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cm(r,t,void 0,e),e.currentTarget=null}function Hd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,a=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;gc(i,l,a),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,a=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;gc(i,l,a),o=u}}}if(Fo)throw e=Ml,Fo=!1,Ml=null,e}function oe(e,t){var n=t[Gl];n===void 0&&(n=t[Gl]=new Set);var r=e+"__bubble";n.has(r)||(Wd(t,e,2,!1),n.add(r))}function qs(e,t,n){var r=0;t&&(r|=4),Wd(n,e,r,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[Hi]){e[Hi]=!0,qf.forEach(function(n){n!=="selectionchange"&&(N0.has(n)||qs(n,!1,e),qs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,qs("selectionchange",!1,t))}}function Wd(e,t,n,r){switch(Nd(t)){case 1:var i=Um;break;case 4:i=Bm;break;default:i=Vu}n=i.bind(null,t,n,e),i=void 0,!Il||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Js(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Cn(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}hd(function(){var a=o,h=Lu(n),p=[];e:{var f=Bd.get(e);if(f!==void 0){var v=Bu,S=e;switch(e){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":v=i0;break;case"focusin":S="focus",v=Qs;break;case"focusout":S="blur",v=Qs;break;case"beforeblur":case"afterblur":v=Qs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=l0;break;case Md:case bd:case Vd:v=Gm;break;case Ud:v=a0;break;case"scroll":v=Hm;break;case"wheel":v=f0;break;case"copy":case"cut":case"paste":v=Xm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=sc}var E=(t&4)!==0,I=!E&&e==="scroll",g=E?f!==null?f+"Capture":null:f;E=[];for(var c=a,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,g!==null&&(w=ci(c,g),w!=null&&E.push(yi(c,w,m)))),I)break;c=c.return}0<E.length&&(f=new v(f,S,null,n,h),p.push({event:f,listeners:E}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Rl&&(S=n.relatedTarget||n.fromElement)&&(Cn(S)||S[Kt]))break e;if((v||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,v?(S=n.relatedTarget||n.toElement,v=a,S=S?Cn(S):null,S!==null&&(I=Hn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(v=null,S=a),v!==S)){if(E=ic,w="onMouseLeave",g="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=sc,w="onPointerLeave",g="onPointerEnter",c="pointer"),I=v==null?f:or(v),m=S==null?f:or(S),f=new E(w,c+"leave",v,n,h),f.target=I,f.relatedTarget=m,w=null,Cn(h)===a&&(E=new E(g,c+"enter",S,n,h),E.target=m,E.relatedTarget=I,w=E),I=w,v&&S)t:{for(E=v,g=S,c=0,m=E;m;m=Zn(m))c++;for(m=0,w=g;w;w=Zn(w))m++;for(;0<c-m;)E=Zn(E),c--;for(;0<m-c;)g=Zn(g),m--;for(;c--;){if(E===g||g!==null&&E===g.alternate)break t;E=Zn(E),g=Zn(g)}E=null}else E=null;v!==null&&yc(p,f,v,E,!1),S!==null&&I!==null&&yc(p,I,S,E,!0)}}e:{if(f=a?or(a):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var _=v0;else if(ac(f))if(zd)_=k0;else{_=w0;var j=x0}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(_=S0);if(_&&(_=_(e,a))){Od(p,_,n,h);break e}j&&j(e,f,a),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&Dl(f,"number",f.value)}switch(j=a?or(a):window,e){case"focusin":(ac(j)||j.contentEditable==="true")&&(rr=j,Bl=a,ni=null);break;case"focusout":ni=Bl=rr=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,hc(p,n,h);break;case"selectionchange":if($0)break;case"keydown":case"keyup":hc(p,n,h)}var $;if(Wu)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else nr?Dd(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Td&&n.locale!=="ko"&&(nr||O!=="onCompositionStart"?O==="onCompositionEnd"&&nr&&($=Fd()):(sn=h,Uu="value"in sn?sn.value:sn.textContent,nr=!0)),j=zo(a,O),0<j.length&&(O=new oc(O,e,null,n,h),p.push({event:O,listeners:j}),$?O.data=$:($=Pd(n),$!==null&&(O.data=$)))),($=p0?h0(e,n):m0(e,n))&&(a=zo(a,"onBeforeInput"),0<a.length&&(h=new oc("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:a}),h.data=$))}Hd(p,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ci(e,n),o!=null&&r.unshift(yi(e,o,i)),o=ci(e,t),o!=null&&r.push(yi(e,o,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,u=l.alternate,a=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&a!==null&&(l=a,i?(u=ci(n,o),u!=null&&s.unshift(yi(n,u,l))):i||(u=ci(n,o),u!=null&&s.push(yi(n,u,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var F0=/\r\n?/g,T0=/\u0000|\uFFFD/g;function vc(e){return(typeof e=="string"?e:""+e).replace(F0,`
`).replace(T0,"")}function Wi(e,t,n){if(t=vc(t),vc(e)!==t&&n)throw Error(N(425))}function Ao(){}var Wl=null,Ql=null;function Kl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,D0=typeof clearTimeout=="function"?clearTimeout:void 0,xc=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof xc<"u"?function(e){return xc.resolve(null).then(e).catch(O0)}:Yl;function O0(e){setTimeout(function(){throw e})}function el(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pi(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Ar,vi="__reactProps$"+Ar,Kt="__reactContainer$"+Ar,Gl="__reactEvents$"+Ar,z0="__reactListeners$"+Ar,A0="__reactHandles$"+Ar;function Cn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wc(e);e!==null;){if(n=e[Pt])return n;e=wc(e)}return t}e=n,n=e.parentNode}return null}function Ti(e){return e=e[Pt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function hs(e){return e[vi]||null}var Zl=[],sr=-1;function kn(e){return{current:e}}function le(e){0>sr||(e.current=Zl[sr],Zl[sr]=null,sr--)}function ie(e,t){sr++,Zl[sr]=e.current,e.current=t}var wn={},Le=kn(wn),Ke=kn(!1),Rn=wn;function kr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function Ro(){le(Ke),le(Le)}function Sc(e,t,n){if(Le.current!==wn)throw Error(N(168));ie(Le,t),ie(Ke,n)}function Qd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(N(108,xm(e)||"Unknown",i));return de({},n,r)}function Lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Rn=Le.current,ie(Le,e),ie(Ke,Ke.current),!0}function kc(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=Qd(e,t,Rn),r.__reactInternalMemoizedMergedChildContext=e,le(Ke),le(Le),ie(Le,e)):le(Ke),ie(Ke,n)}var Ut=null,ms=!1,tl=!1;function Kd(e){Ut===null?Ut=[e]:Ut.push(e)}function R0(e){ms=!0,Kd(e)}function En(){if(!tl&&Ut!==null){tl=!0;var e=0,t=te;try{var n=Ut;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,ms=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),vd(Iu,En),i}finally{te=t,tl=!1}}return null}var lr=[],ur=0,Io=null,Mo=0,st=[],lt=0,Ln=null,Bt=1,Ht="";function _n(e,t){lr[ur++]=Mo,lr[ur++]=Io,Io=e,Mo=t}function Yd(e,t,n){st[lt++]=Bt,st[lt++]=Ht,st[lt++]=Ln,Ln=e;var r=Bt;e=Ht;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var o=32-Et(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Bt=1<<32-Et(t)+i|n<<i|r,Ht=o+e}else Bt=1<<o|n<<i|r,Ht=e}function Ku(e){e.return!==null&&(_n(e,1),Yd(e,1,0))}function Yu(e){for(;e===Io;)Io=lr[--ur],lr[ur]=null,Mo=lr[--ur],lr[ur]=null;for(;e===Ln;)Ln=st[--lt],st[lt]=null,Ht=st[--lt],st[lt]=null,Bt=st[--lt],st[lt]=null}var tt=null,et=null,ae=!1,St=null;function Gd(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Bt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ql(e){if(ae){var t=et;if(t){var n=t;if(!Ec(e,t)){if(Xl(e))throw Error(N(418));t=dn(n.nextSibling);var r=tt;t&&Ec(e,t)?Gd(r,n):(e.flags=e.flags&-4097|2,ae=!1,tt=e)}}else{if(Xl(e))throw Error(N(418));e.flags=e.flags&-4097|2,ae=!1,tt=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Qi(e){if(e!==tt)return!1;if(!ae)return _c(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kl(e.type,e.memoizedProps)),t&&(t=et)){if(Xl(e))throw Zd(),Error(N(418));for(;t;)Gd(e,t),t=dn(t.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?dn(e.stateNode.nextSibling):null;return!0}function Zd(){for(var e=et;e;)e=dn(e.nextSibling)}function Er(){et=tt=null,ae=!1}function Gu(e){St===null?St=[e]:St.push(e)}var L0=Zt.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var bo=kn(null),Vo=null,ar=null,Zu=null;function Xu(){Zu=ar=Vo=null}function qu(e){var t=bo.current;le(bo),e._currentValue=t}function Jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Vo=e,Zu=ar=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Qe=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},ar===null){if(Vo===null)throw Error(N(308));ar=e,Vo.dependencies={lanes:0,firstContext:e}}else ar=ar.next=e;return t}var jn=null;function Ju(e){jn===null?jn=[e]:jn.push(e)}function Xd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ju(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tn=!1;function ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ju(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mu(e,n)}}function $c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var i=e.updateQueue;tn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,a=u.next;u.next=null,s===null?o=a:s.next=a,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=a:l.next=a,h.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,h=a=u=null,l=o;do{var f=l.lane,v=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=e,E=l;switch(f=t,v=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){p=S.call(v,p,f);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,f=typeof S=="function"?S.call(v,p,f):S,f==null)break e;p=de({},p,f);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else v={eventTime:v,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(a=h=v,u=p):h=h.next=v,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=a,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Mn|=s,e.lanes=s,e.memoizedState=p}}function Cc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Jd=new Xf.Component().refs;function eu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var gs={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=mn(e),o=Wt(r,i);o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(_t(t,e,i,r),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=mn(e),o=Wt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=pn(e,o,i),t!==null&&(_t(t,e,i,r),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=mn(e),i=Wt(n,r);i.tag=2,t!=null&&(i.callback=t),t=pn(e,i,r),t!==null&&(_t(t,e,r,n),co(t,e,r))}};function jc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!mi(n,r)||!mi(i,o):!0}function ep(e,t,n){var r=!1,i=wn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Ye(t)?Rn:Le.current,r=t.contextTypes,o=(r=r!=null)?kr(e,i):wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=gs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function tu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jd,ea(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Ye(t)?Rn:Le.current,i.context=kr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(eu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&gs.enqueueReplaceState(i,i.state,null),Uo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;l===Jd&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fc(e){var t=e._init;return t(e._payload)}function tp(e){function t(g,c){if(e){var m=g.deletions;m===null?(g.deletions=[c],g.flags|=16):m.push(c)}}function n(g,c){if(!e)return null;for(;c!==null;)t(g,c),c=c.sibling;return null}function r(g,c){for(g=new Map;c!==null;)c.key!==null?g.set(c.key,c):g.set(c.index,c),c=c.sibling;return g}function i(g,c){return g=gn(g,c),g.index=0,g.sibling=null,g}function o(g,c,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<c?(g.flags|=2,c):m):(g.flags|=2,c)):(g.flags|=1048576,c)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,c,m,w){return c===null||c.tag!==6?(c=ul(m,g.mode,w),c.return=g,c):(c=i(c,m),c.return=g,c)}function u(g,c,m,w){var _=m.type;return _===tr?h(g,c,m.props.children,w,m.key):c!==null&&(c.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===en&&Fc(_)===c.type)?(w=i(c,m.props),w.ref=Ur(g,c,m),w.return=g,w):(w=yo(m.type,m.key,m.props,null,g.mode,w),w.ref=Ur(g,c,m),w.return=g,w)}function a(g,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=al(m,g.mode,w),c.return=g,c):(c=i(c,m.children||[]),c.return=g,c)}function h(g,c,m,w,_){return c===null||c.tag!==7?(c=On(m,g.mode,w,_),c.return=g,c):(c=i(c,m),c.return=g,c)}function p(g,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ul(""+c,g.mode,m),c.return=g,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Ri:return m=yo(c.type,c.key,c.props,null,g.mode,m),m.ref=Ur(g,null,c),m.return=g,m;case er:return c=al(c,g.mode,m),c.return=g,c;case en:var w=c._init;return p(g,w(c._payload),m)}if(Yr(c)||Lr(c))return c=On(c,g.mode,m,null),c.return=g,c;Ki(g,c)}return null}function f(g,c,m,w){var _=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:l(g,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ri:return m.key===_?u(g,c,m,w):null;case er:return m.key===_?a(g,c,m,w):null;case en:return _=m._init,f(g,c,_(m._payload),w)}if(Yr(m)||Lr(m))return _!==null?null:h(g,c,m,w,null);Ki(g,m)}return null}function v(g,c,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(m)||null,l(c,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ri:return g=g.get(w.key===null?m:w.key)||null,u(c,g,w,_);case er:return g=g.get(w.key===null?m:w.key)||null,a(c,g,w,_);case en:var j=w._init;return v(g,c,m,j(w._payload),_)}if(Yr(w)||Lr(w))return g=g.get(m)||null,h(c,g,w,_,null);Ki(c,w)}return null}function S(g,c,m,w){for(var _=null,j=null,$=c,O=c=0,W=null;$!==null&&O<m.length;O++){$.index>O?(W=$,$=null):W=$.sibling;var U=f(g,$,m[O],w);if(U===null){$===null&&($=W);break}e&&$&&U.alternate===null&&t(g,$),c=o(U,c,O),j===null?_=U:j.sibling=U,j=U,$=W}if(O===m.length)return n(g,$),ae&&_n(g,O),_;if($===null){for(;O<m.length;O++)$=p(g,m[O],w),$!==null&&(c=o($,c,O),j===null?_=$:j.sibling=$,j=$);return ae&&_n(g,O),_}for($=r(g,$);O<m.length;O++)W=v($,g,O,m[O],w),W!==null&&(e&&W.alternate!==null&&$.delete(W.key===null?O:W.key),c=o(W,c,O),j===null?_=W:j.sibling=W,j=W);return e&&$.forEach(function(H){return t(g,H)}),ae&&_n(g,O),_}function E(g,c,m,w){var _=Lr(m);if(typeof _!="function")throw Error(N(150));if(m=_.call(m),m==null)throw Error(N(151));for(var j=_=null,$=c,O=c=0,W=null,U=m.next();$!==null&&!U.done;O++,U=m.next()){$.index>O?(W=$,$=null):W=$.sibling;var H=f(g,$,U.value,w);if(H===null){$===null&&($=W);break}e&&$&&H.alternate===null&&t(g,$),c=o(H,c,O),j===null?_=H:j.sibling=H,j=H,$=W}if(U.done)return n(g,$),ae&&_n(g,O),_;if($===null){for(;!U.done;O++,U=m.next())U=p(g,U.value,w),U!==null&&(c=o(U,c,O),j===null?_=U:j.sibling=U,j=U);return ae&&_n(g,O),_}for($=r(g,$);!U.done;O++,U=m.next())U=v($,g,O,U.value,w),U!==null&&(e&&U.alternate!==null&&$.delete(U.key===null?O:U.key),c=o(U,c,O),j===null?_=U:j.sibling=U,j=U);return e&&$.forEach(function(Q){return t(g,Q)}),ae&&_n(g,O),_}function I(g,c,m,w){if(typeof m=="object"&&m!==null&&m.type===tr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ri:e:{for(var _=m.key,j=c;j!==null;){if(j.key===_){if(_=m.type,_===tr){if(j.tag===7){n(g,j.sibling),c=i(j,m.props.children),c.return=g,g=c;break e}}else if(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===en&&Fc(_)===j.type){n(g,j.sibling),c=i(j,m.props),c.ref=Ur(g,j,m),c.return=g,g=c;break e}n(g,j);break}else t(g,j);j=j.sibling}m.type===tr?(c=On(m.props.children,g.mode,w,m.key),c.return=g,g=c):(w=yo(m.type,m.key,m.props,null,g.mode,w),w.ref=Ur(g,c,m),w.return=g,g=w)}return s(g);case er:e:{for(j=m.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(g,c.sibling),c=i(c,m.children||[]),c.return=g,g=c;break e}else{n(g,c);break}else t(g,c);c=c.sibling}c=al(m,g.mode,w),c.return=g,g=c}return s(g);case en:return j=m._init,I(g,c,j(m._payload),w)}if(Yr(m))return S(g,c,m,w);if(Lr(m))return E(g,c,m,w);Ki(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(g,c.sibling),c=i(c,m),c.return=g,g=c):(n(g,c),c=ul(m,g.mode,w),c.return=g,g=c),s(g)):n(g,c)}return I}var _r=tp(!0),np=tp(!1),Di={},At=kn(Di),xi=kn(Di),wi=kn(Di);function Nn(e){if(e===Di)throw Error(N(174));return e}function ta(e,t){switch(ie(wi,t),ie(xi,e),ie(At,Di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ol(t,e)}le(At),ie(At,t)}function $r(){le(At),le(xi),le(wi)}function rp(e){Nn(wi.current);var t=Nn(At.current),n=Ol(t,e.type);t!==n&&(ie(xi,e),ie(At,n))}function na(e){xi.current===e&&(le(At),le(xi))}var ce=kn(0);function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nl=[];function ra(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var fo=Zt.ReactCurrentDispatcher,rl=Zt.ReactCurrentBatchConfig,In=0,fe=null,Se=null,Ce=null,Ho=!1,ri=!1,Si=0,I0=0;function ze(){throw Error(N(321))}function ia(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function oa(e,t,n,r,i,o){if(In=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fo.current=e===null||e.memoizedState===null?U0:B0,e=n(r,i),ri){o=0;do{if(ri=!1,Si=0,25<=o)throw Error(N(301));o+=1,Ce=Se=null,t.updateQueue=null,fo.current=H0,e=n(r,i)}while(ri)}if(fo.current=Wo,t=Se!==null&&Se.next!==null,In=0,Ce=Se=fe=null,Ho=!1,t)throw Error(N(300));return e}function sa(){var e=Si!==0;return Si=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?fe.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function ft(){if(Se===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ce===null?fe.memoizedState:Ce.next;if(t!==null)Ce=t,Se=e;else{if(e===null)throw Error(N(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ce===null?fe.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function ki(e,t){return typeof t=="function"?t(e):t}function il(e){var t=ft(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,a=o;do{var h=a.lane;if((In&h)===h)u!==null&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var p={lane:h,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};u===null?(l=u=p,s=r):u=u.next=p,fe.lanes|=h,Mn|=h}a=a.next}while(a!==null&&a!==o);u===null?s=r:u.next=l,Ct(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Mn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ol(e){var t=ft(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ct(o,t.memoizedState)||(Qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ip(){}function op(e,t){var n=fe,r=ft(),i=t(),o=!Ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Qe=!0),r=r.queue,la(up.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Ei(9,lp.bind(null,n,r,i,t),void 0,null),Fe===null)throw Error(N(349));In&30||sp(n,t,i)}return i}function sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lp(e,t,n,r){t.value=n,t.getSnapshot=r,ap(t)&&cp(e)}function up(e,t,n){return n(function(){ap(t)&&cp(e)})}function ap(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function cp(e){var t=Yt(e,1);t!==null&&_t(t,e,1,-1)}function Tc(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},t.queue=e,e=e.dispatch=V0.bind(null,fe,e),[t.memoizedState,e]}function Ei(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fp(){return ft().memoizedState}function po(e,t,n,r){var i=Ft();fe.flags|=e,i.memoizedState=Ei(1|t,n,void 0,r===void 0?null:r)}function ys(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(Se!==null){var s=Se.memoizedState;if(o=s.destroy,r!==null&&ia(r,s.deps)){i.memoizedState=Ei(t,n,o,r);return}}fe.flags|=e,i.memoizedState=Ei(1|t,n,o,r)}function Dc(e,t){return po(8390656,8,e,t)}function la(e,t){return ys(2048,8,e,t)}function dp(e,t){return ys(4,2,e,t)}function pp(e,t){return ys(4,4,e,t)}function hp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mp(e,t,n){return n=n!=null?n.concat([e]):null,ys(4,4,hp.bind(null,t,e),n)}function ua(){}function gp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function yp(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ia(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vp(e,t,n){return In&21?(Ct(n,t)||(n=Sd(),fe.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n)}function M0(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{te=n,rl.transition=r}}function xp(){return ft().memoizedState}function b0(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wp(e))Sp(t,n);else if(n=Xd(e,t,n,r),n!==null){var i=Ve();_t(n,e,r,i),kp(n,t,r)}}function V0(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wp(e))Sp(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,s)){var u=t.interleaved;u===null?(i.next=i,Ju(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Xd(e,t,i,r),n!==null&&(i=Ve(),_t(n,e,r,i),kp(n,t,r))}}function wp(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Sp(e,t){ri=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Mu(e,n)}}var Wo={readContext:ct,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},U0={readContext:ct,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Dc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,po(4194308,4,hp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return po(4194308,4,e,t)},useInsertionEffect:function(e,t){return po(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=b0.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:ua,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=M0.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Ft();if(ae){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Fe===null)throw Error(N(349));In&30||sp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dc(up.bind(null,r,o,e),[e]),r.flags|=2048,Ei(9,lp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Fe.identifierPrefix;if(ae){var n=Ht,r=Bt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B0={readContext:ct,useCallback:gp,useContext:ct,useEffect:la,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:pp,useMemo:yp,useReducer:il,useRef:fp,useState:function(){return il(ki)},useDebugValue:ua,useDeferredValue:function(e){var t=ft();return vp(t,Se.memoizedState,e)},useTransition:function(){var e=il(ki)[0],t=ft().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:op,useId:xp,unstable_isNewReconciler:!1},H0={readContext:ct,useCallback:gp,useContext:ct,useEffect:la,useImperativeHandle:mp,useInsertionEffect:dp,useLayoutEffect:pp,useMemo:yp,useReducer:ol,useRef:fp,useState:function(){return ol(ki)},useDebugValue:ua,useDeferredValue:function(e){var t=ft();return Se===null?t.memoizedState=e:vp(t,Se.memoizedState,e)},useTransition:function(){var e=ol(ki)[0],t=ft().memoizedState;return[e,t]},useMutableSource:ip,useSyncExternalStore:op,useId:xp,unstable_isNewReconciler:!1};function Cr(e,t){try{var n="",r=t;do n+=vm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function nu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function Ep(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ko||(Ko=!0,du=r),nu(e,t)},n}function _p(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){nu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){nu(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new W0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=og.bind(null,e,t,n),t.then(e,e))}function Oc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,pn(n,t,1))),n.lanes|=1),e)}var Q0=Zt.ReactCurrentOwner,Qe=!1;function Me(e,t,n,r){t.child=e===null?np(t,null,n,r):_r(t,e.child,n,r)}function Ac(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=oa(e,t,n,r,o,i),n=sa(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(ae&&n&&Ku(t),t.flags|=1,Me(e,t,r,i),t.child)}function Rc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ga(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,$p(e,t,o,r,i)):(e=yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(s,r)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function $p(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(mi(o,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Qe=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return ru(e,t,n,r,i)}function Cp(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(fr,Je),Je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(fr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(fr,Je),Je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(fr,Je),Je|=r;return Me(e,t,i,n),t.child}function jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ru(e,t,n,r,i){var o=Ye(n)?Rn:Le.current;return o=kr(t,o),xr(t,i),n=oa(e,t,n,r,o,i),r=sa(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(ae&&r&&Ku(t),t.flags|=1,Me(e,t,n,i),t.child)}function Lc(e,t,n,r,i){if(Ye(n)){var o=!0;Lo(t)}else o=!1;if(xr(t,i),t.stateNode===null)ho(e,t),ep(t,n,r),tu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,a=n.contextType;typeof a=="object"&&a!==null?a=ct(a):(a=Ye(n)?Rn:Le.current,a=kr(t,a));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==a)&&Nc(t,s,r,a),tn=!1;var f=t.memoizedState;s.state=f,Uo(t,r,s,i),u=t.memoizedState,l!==r||f!==u||Ke.current||tn?(typeof h=="function"&&(eu(t,n,h,r),u=t.memoizedState),(l=tn||jc(t,n,l,r,f,u,a))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=a,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,qd(e,t),l=t.memoizedProps,a=t.type===t.elementType?l:xt(t.type,l),s.props=a,p=t.pendingProps,f=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Ye(n)?Rn:Le.current,u=kr(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==u)&&Nc(t,s,r,u),tn=!1,f=t.memoizedState,s.state=f,Uo(t,r,s,i);var S=t.memoizedState;l!==p||f!==S||Ke.current||tn?(typeof v=="function"&&(eu(t,n,v,r),S=t.memoizedState),(a=tn||jc(t,n,a,r,f,S,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=u,r=a):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return iu(e,t,n,r,o,i)}function iu(e,t,n,r,i,o){jp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&kc(t,n,!1),Gt(e,t,o);r=t.stateNode,Q0.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=_r(t,e.child,null,o),t.child=_r(t,null,l,o)):Me(e,t,l,o),t.memoizedState=r.state,i&&kc(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?Sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sc(e,t.context,!1),ta(e,t.containerInfo)}function Ic(e,t,n,r,i){return Er(),Gu(i),t.flags|=256,Me(e,t,n,r),t.child}var ou={dehydrated:null,treeContext:null,retryLane:0};function su(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ce,i&1),e===null)return ql(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ws(s,r,0,null),e=On(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=su(n),t.memoizedState=ou,e):aa(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return K0(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=gn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=gn(l,o):(o=On(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?su(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ou,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function aa(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yi(e,t,n,r){return r!==null&&Gu(r),_r(t,e.child,null,n),e=aa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=sl(Error(N(422))),Yi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ws({mode:"visible",children:r.children},i,0,null),o=On(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&_r(t,e.child,null,s),t.child.memoizedState=su(s),t.memoizedState=ou,o);if(!(t.mode&1))return Yi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(N(419)),r=sl(o,r,void 0),Yi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Qe||l){if(r=Fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),_t(r,e,i,-1))}return ma(),r=sl(Error(N(421))),Yi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=dn(i.nextSibling),tt=t,ae=!0,St=null,e!==null&&(st[lt++]=Bt,st[lt++]=Ht,st[lt++]=Ln,Bt=e.id,Ht=e.overflow,Ln=t),t=aa(t,r.children),t.flags|=4096,t)}function Mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jl(e.return,t,n)}function ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mc(e,n,t);else if(e.tag===19)Mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ll(t,!0,n,null,o);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y0(e,t,n){switch(t.tag){case 3:Np(t),Er();break;case 5:rp(t);break;case 1:Ye(t.type)&&Lo(t);break;case 4:ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Fp(e,t,n):(ie(ce,ce.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Tp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Cp(e,t,n)}return Gt(e,t,n)}var Dp,lu,Pp,Op;Dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lu=function(){};Pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nn(At.current);var o=null;switch(n){case"input":i=Fl(e,i),r=Fl(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=Pl(e,i),r=Pl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ao)}zl(n,r);var s;n=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var l=i[a];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ui.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var u=r[a];if(l=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&u!==l&&(u!=null||l!=null))if(a==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(a,n)),n=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(a,u)):a==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(ui.hasOwnProperty(a)?(u!=null&&a==="onScroll"&&oe("scroll",e),o||l===u||(o=[])):(o=o||[]).push(a,u))}n&&(o=o||[]).push("style",n);var a=o;(t.updateQueue=a)&&(t.flags|=4)}};Op=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G0(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ye(t.type)&&Ro(),Ae(t),null;case 3:return r=t.stateNode,$r(),le(Ke),le(Le),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(mu(St),St=null))),lu(e,t),Ae(t),null;case 5:na(t);var i=Nn(wi.current);if(n=t.type,e!==null&&t.stateNode!=null)Pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Ae(t),null}if(e=Nn(At.current),Qi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[vi]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Zr.length;i++)oe(Zr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Ya(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":Za(r,o),oe("invalid",r)}zl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Wi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Wi(r.textContent,l,e),i=["children",""+l]):ui.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&oe("scroll",r)}switch(n){case"input":Li(r),Ga(r,o,!0);break;case"textarea":Li(r),Xa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Pt]=t,e[vi]=r,Dp(e,t,!1,!1),t.stateNode=e;e:{switch(s=Al(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Zr.length;i++)oe(Zr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Ya(e,r),i=Fl(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Za(e,r),i=Pl(e,r),oe("invalid",e);break;default:i=r}zl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?ad(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ld(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ai(e,u):typeof u=="number"&&ai(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ui.hasOwnProperty(o)?u!=null&&o==="onScroll"&&oe("scroll",e):u!=null&&Ou(e,o,u,s))}switch(n){case"input":Li(e),Ga(e,r,!1);break;case"textarea":Li(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Op(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Nn(wi.current),Nn(At.current),Qi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Wi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Ae(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&et!==null&&t.mode&1&&!(t.flags&128))Zd(),Er(),t.flags|=98560,o=!1;else if(o=Qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Pt]=t}else Er(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else St!==null&&(mu(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ke===0&&(ke=3):ma())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return $r(),lu(e,t),e===null&&gi(t.stateNode.containerInfo),Ae(t),null;case 10:return qu(t.type._context),Ae(t),null;case 17:return Ye(t.type)&&Ro(),Ae(t),null;case 19:if(le(ce),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Br(o,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Bo(e),s!==null){for(t.flags|=128,Br(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ye()>jr&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304)}else{if(!r)if(e=Bo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ae)return Ae(t),null}else 2*ye()-o.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,Br(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ye(),t.sibling=null,n=ce.current,ie(ce,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Z0(e,t){switch(Yu(t),t.tag){case 1:return Ye(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $r(),le(Ke),le(Le),ra(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return na(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return $r(),null;case 10:return qu(t.type._context),null;case 22:case 23:return ha(),null;case 24:return null;default:return null}}var Gi=!1,Re=!1,X0=typeof WeakSet=="function"?WeakSet:Set,P=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function uu(e,t,n){try{n()}catch(r){pe(e,t,r)}}var bc=!1;function q0(e,t){if(Wl=Po,e=Ld(),Qu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,u=-1,a=0,h=0,p=e,f=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)f=p,p=v;for(;;){if(p===e)break t;if(f===n&&++a===i&&(l=s),f===o&&++h===r&&(u=s),(v=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=v}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ql={focusedElem:e,selectionRange:n},Po=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,I=S.memoizedState,g=t.stateNode,c=g.getSnapshotBeforeUpdate(t.elementType===t.type?E:xt(t.type,E),I);g.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(w){pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return S=bc,bc=!1,S}function ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&uu(t,n,o)}i=i.next}while(i!==r)}}function vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function au(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[vi],delete t[Gl],delete t[z0],delete t[A0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ap(e){return e.tag===5||e.tag===3||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ap(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ao));else if(r!==4&&(e=e.child,e!==null))for(cu(e,t,n),e=e.sibling;e!==null;)cu(e,t,n),e=e.sibling}function fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}var De=null,wt=!1;function qt(e,t,n){for(n=n.child;n!==null;)Rp(e,t,n),n=n.sibling}function Rp(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(cs,n)}catch{}switch(n.tag){case 5:Re||cr(n,t);case 6:var r=De,i=wt;De=null,qt(e,t,n),De=r,wt=i,De!==null&&(wt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(wt?(e=De,n=n.stateNode,e.nodeType===8?el(e.parentNode,n):e.nodeType===1&&el(e,n),pi(e)):el(De,n.stateNode));break;case 4:r=De,i=wt,De=n.stateNode.containerInfo,wt=!0,qt(e,t,n),De=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&uu(n,t,s),i=i.next}while(i!==r)}qt(e,t,n);break;case 1:if(!Re&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){pe(n,t,l)}qt(e,t,n);break;case 21:qt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,qt(e,t,n),Re=r):qt(e,t,n);break;default:qt(e,t,n)}}function Uc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X0),t.forEach(function(r){var i=lg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,wt=!1;break e;case 3:De=l.stateNode.containerInfo,wt=!0;break e;case 4:De=l.stateNode.containerInfo,wt=!0;break e}l=l.return}if(De===null)throw Error(N(160));Rp(o,s,i),De=null,wt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(a){pe(i,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}function Lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Nt(e),r&4){try{ii(3,e,e.return),vs(3,e)}catch(E){pe(e,e.return,E)}try{ii(5,e,e.return)}catch(E){pe(e,e.return,E)}}break;case 1:gt(t,e),Nt(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(gt(t,e),Nt(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(E){pe(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&id(i,o),Al(l,s);var a=Al(l,o);for(s=0;s<u.length;s+=2){var h=u[s],p=u[s+1];h==="style"?ad(i,p):h==="dangerouslySetInnerHTML"?ld(i,p):h==="children"?ai(i,p):Ou(i,h,p,a)}switch(l){case"input":Tl(i,o);break;case"textarea":od(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?mr(i,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?mr(i,!!o.multiple,o.defaultValue,!0):mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[vi]=o}catch(E){pe(e,e.return,E)}}break;case 6:if(gt(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(E){pe(e,e.return,E)}}break;case 3:if(gt(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(E){pe(e,e.return,E)}break;case 4:gt(t,e),Nt(e);break;case 13:gt(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(da=ye())),r&4&&Uc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(a=Re)||h,gt(t,e),Re=a):gt(t,e),Nt(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(p=P=h;P!==null;){switch(f=P,v=f.child,f.tag){case 0:case 11:case 14:case 15:ii(4,f,f.return);break;case 1:cr(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(E){pe(r,n,E)}}break;case 5:cr(f,f.return);break;case 22:if(f.memoizedState!==null){Hc(p);continue}}v!==null?(v.return=f,P=v):Hc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,a?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ud("display",s))}catch(E){pe(e,e.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=a?"":p.memoizedProps}catch(E){pe(e,e.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gt(t,e),Nt(e),r&4&&Uc(e);break;case 21:break;default:gt(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ap(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var o=Vc(e);fu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Vc(e);cu(e,l,s);break;default:throw Error(N(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J0(e,t,n){P=e,Ip(e)}function Ip(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Gi;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Re;l=Gi;var a=Re;if(Gi=s,(Re=u)&&!a)for(P=i;P!==null;)s=P,u=s.child,s.tag===22&&s.memoizedState!==null?Wc(i):u!==null?(u.return=s,P=u):Wc(i);for(;o!==null;)P=o,Ip(o),o=o.sibling;P=i,Gi=l,Re=a}Bc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Bc(e)}}function Bc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var h=a.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Re||t.flags&512&&au(t)}catch(f){pe(t,t.return,f)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Hc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Wc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vs(4,t)}catch(u){pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){pe(t,i,u)}}var o=t.return;try{au(t)}catch(u){pe(t,o,u)}break;case 5:var s=t.return;try{au(t)}catch(u){pe(t,s,u)}}}catch(u){pe(t,t.return,u)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var eg=Math.ceil,Qo=Zt.ReactCurrentDispatcher,ca=Zt.ReactCurrentOwner,at=Zt.ReactCurrentBatchConfig,G=0,Fe=null,we=null,Pe=0,Je=0,fr=kn(0),ke=0,_i=null,Mn=0,xs=0,fa=0,oi=null,He=null,da=0,jr=1/0,bt=null,Ko=!1,du=null,hn=null,Zi=!1,ln=null,Yo=0,si=0,pu=null,mo=-1,go=0;function Ve(){return G&6?ye():mo!==-1?mo:mo=ye()}function mn(e){return e.mode&1?G&2&&Pe!==0?Pe&-Pe:L0.transition!==null?(go===0&&(go=Sd()),go):(e=te,e!==0||(e=window.event,e=e===void 0?16:Nd(e.type)),e):1}function _t(e,t,n,r){if(50<si)throw si=0,pu=null,Error(N(185));Ni(e,n,r),(!(G&2)||e!==Fe)&&(e===Fe&&(!(G&2)&&(xs|=n),ke===4&&rn(e,Pe)),Ge(e,r),n===1&&G===0&&!(t.mode&1)&&(jr=ye()+500,ms&&En()))}function Ge(e,t){var n=e.callbackNode;Lm(e,t);var r=Do(e,e===Fe?Pe:0);if(r===0)n!==null&&ec(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ec(n),t===1)e.tag===0?R0(Qc.bind(null,e)):Kd(Qc.bind(null,e)),P0(function(){!(G&6)&&En()}),n=null;else{switch(kd(r)){case 1:n=Iu;break;case 4:n=xd;break;case 16:n=To;break;case 536870912:n=wd;break;default:n=To}n=Qp(n,Mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mp(e,t){if(mo=-1,go=0,G&6)throw Error(N(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Do(e,e===Fe?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Go(e,r);else{t=r;var i=G;G|=2;var o=Vp();(Fe!==e||Pe!==t)&&(bt=null,jr=ye()+500,Pn(e,t));do try{rg();break}catch(l){bp(e,l)}while(!0);Xu(),Qo.current=o,G=i,we!==null?t=0:(Fe=null,Pe=0,t=ke)}if(t!==0){if(t===2&&(i=bl(e),i!==0&&(r=i,t=hu(e,i))),t===1)throw n=_i,Pn(e,0),rn(e,r),Ge(e,ye()),n;if(t===6)rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!tg(i)&&(t=Go(e,r),t===2&&(o=bl(e),o!==0&&(r=o,t=hu(e,o))),t===1))throw n=_i,Pn(e,0),rn(e,r),Ge(e,ye()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:$n(e,He,bt);break;case 3:if(rn(e,r),(r&130023424)===r&&(t=da+500-ye(),10<t)){if(Do(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Yl($n.bind(null,e,He,bt),t);break}$n(e,He,bt);break;case 4:if(rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Et(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eg(r/1960))-r,10<r){e.timeoutHandle=Yl($n.bind(null,e,He,bt),r);break}$n(e,He,bt);break;case 5:$n(e,He,bt);break;default:throw Error(N(329))}}}return Ge(e,ye()),e.callbackNode===n?Mp.bind(null,e):null}function hu(e,t){var n=oi;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=Go(e,t),e!==2&&(t=He,He=n,t!==null&&mu(t)),e}function mu(e){He===null?He=e:He.push.apply(He,e)}function tg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rn(e,t){for(t&=~fa,t&=~xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Et(t),r=1<<n;e[n]=-1,t&=~r}}function Qc(e){if(G&6)throw Error(N(327));wr();var t=Do(e,0);if(!(t&1))return Ge(e,ye()),null;var n=Go(e,t);if(e.tag!==0&&n===2){var r=bl(e);r!==0&&(t=r,n=hu(e,r))}if(n===1)throw n=_i,Pn(e,0),rn(e,t),Ge(e,ye()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,He,bt),Ge(e,ye()),null}function pa(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(jr=ye()+500,ms&&En())}}function bn(e){ln!==null&&ln.tag===0&&!(G&6)&&wr();var t=G;G|=1;var n=at.transition,r=te;try{if(at.transition=null,te=1,e)return e()}finally{te=r,at.transition=n,G=t,!(G&6)&&En()}}function ha(){Je=fr.current,le(fr)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,D0(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:$r(),le(Ke),le(Le),ra();break;case 5:na(r);break;case 4:$r();break;case 13:le(ce);break;case 19:le(ce);break;case 10:qu(r.type._context);break;case 22:case 23:ha()}n=n.return}if(Fe=e,we=e=gn(e.current,null),Pe=Je=t,ke=0,_i=null,fa=xs=Mn=0,He=oi=null,jn!==null){for(t=0;t<jn.length;t++)if(n=jn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}jn=null}return e}function bp(e,t){do{var n=we;try{if(Xu(),fo.current=Wo,Ho){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(In=0,Ce=Se=fe=null,ri=!1,Si=0,ca.current=null,n===null||n.return===null){ke=1,_i=t,we=null;break}e:{var o=e,s=n.return,l=n,u=t;if(t=Pe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Oc(s);if(v!==null){v.flags&=-257,zc(v,s,l,o,t),v.mode&1&&Pc(o,a,t),t=v,u=a;var S=t.updateQueue;if(S===null){var E=new Set;E.add(u),t.updateQueue=E}else S.add(u);break e}else{if(!(t&1)){Pc(o,a,t),ma();break e}u=Error(N(426))}}else if(ae&&l.mode&1){var I=Oc(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),zc(I,s,l,o,t),Gu(Cr(u,l));break e}}o=u=Cr(u,l),ke!==4&&(ke=2),oi===null?oi=[o]:oi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=Ep(o,u,t);$c(o,g);break e;case 1:l=u;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=_p(o,l,t);$c(o,w);break e}}o=o.return}while(o!==null)}Bp(n)}catch(_){t=_,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function Vp(){var e=Qo.current;return Qo.current=Wo,e===null?Wo:e}function ma(){(ke===0||ke===3||ke===2)&&(ke=4),Fe===null||!(Mn&268435455)&&!(xs&268435455)||rn(Fe,Pe)}function Go(e,t){var n=G;G|=2;var r=Vp();(Fe!==e||Pe!==t)&&(bt=null,Pn(e,t));do try{ng();break}catch(i){bp(e,i)}while(!0);if(Xu(),G=n,Qo.current=r,we!==null)throw Error(N(261));return Fe=null,Pe=0,ke}function ng(){for(;we!==null;)Up(we)}function rg(){for(;we!==null&&!Nm();)Up(we)}function Up(e){var t=Wp(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Bp(e):we=t,ca.current=null}function Bp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Z0(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,we=null;return}}else if(n=G0(n,t,Je),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);ke===0&&(ke=5)}function $n(e,t,n){var r=te,i=at.transition;try{at.transition=null,te=1,ig(e,t,n,r)}finally{at.transition=i,te=r}return null}function ig(e,t,n,r){do wr();while(ln!==null);if(G&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Im(e,o),e===Fe&&(we=Fe=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zi||(Zi=!0,Qp(To,function(){return wr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var s=te;te=1;var l=G;G|=4,ca.current=null,q0(e,n),Lp(n,e),_0(Ql),Po=!!Wl,Ql=Wl=null,e.current=n,J0(n),Fm(),G=l,te=s,at.transition=o}else e.current=n;if(Zi&&(Zi=!1,ln=e,Yo=i),o=e.pendingLanes,o===0&&(hn=null),Pm(n.stateNode),Ge(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,e=du,du=null,e;return Yo&1&&e.tag!==0&&wr(),o=e.pendingLanes,o&1?e===pu?si++:(si=0,pu=e):si=0,En(),null}function wr(){if(ln!==null){var e=kd(Yo),t=at.transition,n=te;try{if(at.transition=null,te=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Yo=0,G&6)throw Error(N(331));var i=G;for(G|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var a=l[u];for(P=a;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:ii(8,h,o)}var p=h.child;if(p!==null)p.return=h,P=p;else for(;P!==null;){h=P;var f=h.sibling,v=h.return;if(zp(h),h===a){P=null;break}if(f!==null){f.return=v,P=f;break}P=v}}}var S=o.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var I=E.sibling;E.sibling=null,E=I}while(E!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ii(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,P=g;break e}P=o.return}}var c=e.current;for(P=c;P!==null;){s=P;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,P=m;else e:for(s=c;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vs(9,l)}}catch(_){pe(l,l.return,_)}if(l===s){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(G=i,En(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(cs,e)}catch{}r=!0}return r}finally{te=n,at.transition=t}}return!1}function Kc(e,t,n){t=Cr(n,t),t=Ep(e,t,1),e=pn(e,t,1),t=Ve(),e!==null&&(Ni(e,1,t),Ge(e,t))}function pe(e,t,n){if(e.tag===3)Kc(e,e,n);else for(;t!==null;){if(t.tag===3){Kc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=Cr(n,e),e=_p(t,e,1),t=pn(t,e,1),e=Ve(),t!==null&&(Ni(t,1,e),Ge(t,e));break}}t=t.return}}function og(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Fe===e&&(Pe&n)===n&&(ke===4||ke===3&&(Pe&130023424)===Pe&&500>ye()-da?Pn(e,0):fa|=n),Ge(e,t)}function Hp(e,t){t===0&&(e.mode&1?(t=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):t=1);var n=Ve();e=Yt(e,t),e!==null&&(Ni(e,t,n),Ge(e,n))}function sg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hp(e,n)}function lg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),Hp(e,n)}var Wp;Wp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Qe=!1,Y0(e,t,n);Qe=!!(e.flags&131072)}else Qe=!1,ae&&t.flags&1048576&&Yd(t,Mo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ho(e,t),e=t.pendingProps;var i=kr(t,Le.current);xr(t,n),i=oa(null,t,r,e,i,n);var o=sa();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(o=!0,Lo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ea(t),i.updater=gs,t.stateNode=i,i._reactInternals=t,tu(t,r,e,n),t=iu(null,t,r,!0,o,n)):(t.tag=0,ae&&o&&Ku(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ag(r),e=xt(r,e),i){case 0:t=ru(null,t,r,e,n);break e;case 1:t=Lc(null,t,r,e,n);break e;case 11:t=Ac(null,t,r,e,n);break e;case 14:t=Rc(null,t,r,xt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),ru(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Lc(e,t,r,i,n);case 3:e:{if(Np(t),e===null)throw Error(N(387));r=t.pendingProps,o=t.memoizedState,i=o.element,qd(e,t),Uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cr(Error(N(423)),t),t=Ic(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(N(424)),t),t=Ic(e,t,r,n,i);break e}else for(et=dn(t.stateNode.containerInfo.firstChild),tt=t,ae=!0,St=null,n=np(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Er(),r===i){t=Gt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return rp(t),e===null&&ql(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Kl(r,i)?s=null:o!==null&&Kl(r,o)&&(t.flags|=32),jp(e,t),Me(e,t,s,n),t.child;case 6:return e===null&&ql(t),null;case 13:return Fp(e,t,n);case 4:return ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ac(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ie(bo,r._currentValue),r._currentValue=s,o!==null)if(Ct(o.value,s)){if(o.children===i.children&&!Ke.current){t=Gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Wt(-1,n&-n),u.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var h=a.pending;h===null?u.next=u:(u.next=h.next,h.next=u),a.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Jl(o.return,n,t),l.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(N(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=ct(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),Rc(e,t,r,i,n);case 15:return $p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),ho(e,t),t.tag=1,Ye(r)?(e=!0,Lo(t)):e=!1,xr(t,n),ep(t,r,i),tu(t,r,i,n),iu(null,t,r,!0,e,n);case 19:return Tp(e,t,n);case 22:return Cp(e,t,n)}throw Error(N(156,t.tag))};function Qp(e,t){return vd(e,t)}function ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new ug(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ag(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Au)return 11;if(e===Ru)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ga(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case tr:return On(n.children,i,o,t);case zu:s=8,i|=8;break;case $l:return e=ut(12,n,t,i|2),e.elementType=$l,e.lanes=o,e;case Cl:return e=ut(13,n,t,i),e.elementType=Cl,e.lanes=o,e;case jl:return e=ut(19,n,t,i),e.elementType=jl,e.lanes=o,e;case td:return ws(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jf:s=10;break e;case ed:s=9;break e;case Au:s=11;break e;case Ru:s=14;break e;case en:s=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ut(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function On(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function ws(e,t,n,r){return e=ut(22,e,r,t),e.elementType=td,e.lanes=n,e.stateNode={isHidden:!1},e}function ul(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bs(0),this.expirationTimes=Bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,i,o,s,l,u){return e=new cg(e,t,n,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ea(o),e}function fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kp(e){if(!e)return wn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Qd(e,n,t)}return t}function Yp(e,t,n,r,i,o,s,l,u){return e=ya(n,r,!0,e,i,o,s,l,u),e.context=Kp(null),n=e.current,r=Ve(),i=mn(n),o=Wt(r,i),o.callback=t??null,pn(n,o,i),e.current.lanes=i,Ni(e,i,r),Ge(e,r),e}function Ss(e,t,n,r){var i=t.current,o=Ve(),s=mn(i);return n=Kp(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pn(i,t,s),e!==null&&(_t(e,i,s,o),co(e,i,s)),s}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function va(e,t){Yc(e,t),(e=e.alternate)&&Yc(e,t)}function dg(){return null}var Gp=typeof reportError=="function"?reportError:function(e){console.error(e)};function xa(e){this._internalRoot=e}ks.prototype.render=xa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Ss(e,t,null,null)};ks.prototype.unmount=xa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Ss(null,e,null,null)}),t[Kt]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=$d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nn.length&&t!==0&&t<nn[n].priority;n++);nn.splice(n,0,e),n===0&&jd(e)}};function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Es(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gc(){}function pg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var a=Zo(s);o.call(a)}}var s=Yp(t,r,e,0,null,!1,!1,"",Gc);return e._reactRootContainer=s,e[Kt]=s.current,gi(e.nodeType===8?e.parentNode:e),bn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var a=Zo(u);l.call(a)}}var u=ya(e,0,!1,null,null,!1,!1,"",Gc);return e._reactRootContainer=u,e[Kt]=u.current,gi(e.nodeType===8?e.parentNode:e),bn(function(){Ss(t,u,n,r)}),u}function _s(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=Zo(s);l.call(u)}}Ss(t,s,e,i)}else s=pg(n,t,e,i,r);return Zo(s)}Ed=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(Mu(t,n|1),Ge(t,ye()),!(G&6)&&(jr=ye()+500,En()))}break;case 13:bn(function(){var r=Yt(e,1);if(r!==null){var i=Ve();_t(r,e,1,i)}}),va(e,1)}};bu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=Ve();_t(t,e,134217728,n)}va(e,134217728)}};_d=function(e){if(e.tag===13){var t=mn(e),n=Yt(e,t);if(n!==null){var r=Ve();_t(n,e,t,r)}va(e,t)}};$d=function(){return te};Cd=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ll=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hs(r);if(!i)throw Error(N(90));rd(r),Tl(r,i)}}}break;case"textarea":od(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};dd=pa;pd=bn;var hg={usingClientEntryPoint:!1,Events:[Ti,or,hs,cd,fd,pa]},Hr={findFiberByHostInstance:Cn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mg={bundleType:Hr.bundleType,version:Hr.version,rendererPackageName:Hr.rendererPackageName,rendererConfig:Hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gd(e),e===null?null:e.stateNode},findFiberByHostInstance:Hr.findFiberByHostInstance||dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{cs=Xi.inject(mg),zt=Xi}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg;rt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wa(t))throw Error(N(200));return fg(e,t,null,n)};rt.createRoot=function(e,t){if(!wa(e))throw Error(N(299));var n=!1,r="",i=Gp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,gi(e.nodeType===8?e.parentNode:e),new xa(t)};rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=gd(t),e=e===null?null:e.stateNode,e};rt.flushSync=function(e){return bn(e)};rt.hydrate=function(e,t,n){if(!Es(t))throw Error(N(200));return _s(null,e,t,!0,n)};rt.hydrateRoot=function(e,t,n){if(!wa(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Gp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yp(t,null,e,1,n??null,i,!1,o,s),e[Kt]=t.current,gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ks(t)};rt.render=function(e,t,n){if(!Es(t))throw Error(N(200));return _s(null,e,t,!1,n)};rt.unmountComponentAtNode=function(e){if(!Es(e))throw Error(N(40));return e._reactRootContainer?(bn(function(){_s(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};rt.unstable_batchedUpdates=pa;rt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Es(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return _s(e,t,n,!1,r)};rt.version="18.2.0-next-9e3b772b8-20220608";function Zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp)}catch(e){console.error(e)}}Zp(),Yf.exports=rt;var gg=Yf.exports,Zc=gg;El.createRoot=Zc.createRoot,El.hydrateRoot=Zc.hydrateRoot;const yg=e=>{const[t,n]=he.useState(!1);return he.useEffect(()=>{const r=e.map(async i=>{const{fontFamily:o,fontUrl:s}=i,u=await new FontFace(o,`url(${s})`).load();document.fonts.add(u)});Promise.all(r).then(()=>{n(!0)}).catch(i=>{console.error(`Error loading fonts: ${i}`)})},[e]),t};var Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ne.apply(this,arguments)};function Nr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var vg=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var s=Object.keys(t),l=Object.keys(n);if(s.length!==l.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),a=0;a<s.length;a++){var h=s[a];if(!u(h))return!1;var p=t[h],f=n[h];if(o=r?r.call(i,p,f,h):void 0,o===!1||o===void 0&&p!==f)return!1}return!0};const xg=Cu(vg);var se="-ms-",li="-moz-",J="-webkit-",Xp="comm",$s="rule",Sa="decl",wg="@import",qp="@keyframes",Sg="@layer",Jp=Math.abs,ka=String.fromCharCode,gu=Object.assign;function kg(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function eh(e){return e.trim()}function Vt(e,t){return(e=t.exec(e))?e[0]:e}function K(e,t,n){return e.replace(t,n)}function vo(e,t,n){return e.indexOf(t,n)}function je(e,t){return e.charCodeAt(t)|0}function Fr(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function th(e){return e.length}function Xr(e,t){return t.push(e),e}function Eg(e,t){return e.map(t).join("")}function Xc(e,t){return e.filter(function(n){return!Vt(n,t)})}var Cs=1,Tr=1,nh=0,dt=0,xe=0,Rr="";function js(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Cs,column:Tr,length:s,return:"",siblings:l}}function Jt(e,t){return gu(js("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xn(e){for(;e.root;)e=Jt(e.root,{children:[e]});Xr(e,e.siblings)}function _g(){return xe}function $g(){return xe=dt>0?je(Rr,--dt):0,Tr--,xe===10&&(Tr=1,Cs--),xe}function $t(){return xe=dt<nh?je(Rr,dt++):0,Tr++,xe===10&&(Tr=1,Cs++),xe}function zn(){return je(Rr,dt)}function xo(){return dt}function Ns(e,t){return Fr(Rr,e,t)}function yu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cg(e){return Cs=Tr=1,nh=Dt(Rr=e),dt=0,[]}function jg(e){return Rr="",e}function cl(e){return eh(Ns(dt-1,vu(e===91?e+2:e===40?e+1:e)))}function Ng(e){for(;(xe=zn())&&xe<33;)$t();return yu(e)>2||yu(xe)>3?"":" "}function Fg(e,t){for(;--t&&$t()&&!(xe<48||xe>102||xe>57&&xe<65||xe>70&&xe<97););return Ns(e,xo()+(t<6&&zn()==32&&$t()==32))}function vu(e){for(;$t();)switch(xe){case e:return dt;case 34:case 39:e!==34&&e!==39&&vu(xe);break;case 40:e===41&&vu(e);break;case 92:$t();break}return dt}function Tg(e,t){for(;$t()&&e+xe!==57;)if(e+xe===84&&zn()===47)break;return"/*"+Ns(t,dt-1)+"*"+ka(e===47?e:$t())}function Dg(e){for(;!yu(zn());)$t();return Ns(e,dt)}function Pg(e){return jg(wo("",null,null,null,[""],e=Cg(e),0,[0],e))}function wo(e,t,n,r,i,o,s,l,u){for(var a=0,h=0,p=s,f=0,v=0,S=0,E=1,I=1,g=1,c=0,m="",w=i,_=o,j=r,$=m;I;)switch(S=c,c=$t()){case 40:if(S!=108&&je($,p-1)==58){vo($+=K(cl(c),"&","&\f"),"&\f",Jp(a?l[a-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:$+=cl(c);break;case 9:case 10:case 13:case 32:$+=Ng(S);break;case 92:$+=Fg(xo()-1,7);continue;case 47:switch(zn()){case 42:case 47:Xr(Og(Tg($t(),xo()),t,n,u),u);break;default:$+="/"}break;case 123*E:l[a++]=Dt($)*g;case 125*E:case 59:case 0:switch(c){case 0:case 125:I=0;case 59+h:g==-1&&($=K($,/\f/g,"")),v>0&&Dt($)-p&&Xr(v>32?Jc($+";",r,n,p-1,u):Jc(K($," ","")+";",r,n,p-2,u),u);break;case 59:$+=";";default:if(Xr(j=qc($,t,n,a,h,i,l,m,w=[],_=[],p,o),o),c===123)if(h===0)wo($,t,j,j,w,o,p,l,_);else switch(f===99&&je($,3)===110?100:f){case 100:case 108:case 109:case 115:wo(e,j,j,r&&Xr(qc(e,j,j,0,0,i,l,m,i,w=[],p,_),_),i,_,p,l,r?w:_);break;default:wo($,j,j,j,[""],_,0,l,_)}}a=h=v=0,E=g=1,m=$="",p=s;break;case 58:p=1+Dt($),v=S;default:if(E<1){if(c==123)--E;else if(c==125&&E++==0&&$g()==125)continue}switch($+=ka(c),c*E){case 38:g=h>0?1:($+="\f",-1);break;case 44:l[a++]=(Dt($)-1)*g,g=1;break;case 64:zn()===45&&($+=cl($t())),f=zn(),h=p=Dt(m=$+=Dg(xo())),c++;break;case 45:S===45&&Dt($)==2&&(E=0)}}return o}function qc(e,t,n,r,i,o,s,l,u,a,h,p){for(var f=i-1,v=i===0?o:[""],S=th(v),E=0,I=0,g=0;E<r;++E)for(var c=0,m=Fr(e,f+1,f=Jp(I=s[E])),w=e;c<S;++c)(w=eh(I>0?v[c]+" "+m:K(m,/&\f/g,v[c])))&&(u[g++]=w);return js(e,t,n,i===0?$s:l,u,a,h,p)}function Og(e,t,n,r){return js(e,t,n,Xp,ka(_g()),Fr(e,2,-2),0,r)}function Jc(e,t,n,r,i){return js(e,t,n,Sa,Fr(e,0,r),Fr(e,r+1,-1),r,i)}function rh(e,t,n){switch(kg(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return li+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+li+e+se+e+e;case 5936:switch(je(e,t+11)){case 114:return J+e+se+K(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+se+K(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+se+K(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+se+e+e;case 6165:return J+e+se+"flex-"+e+e;case 5187:return J+e+K(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+se+"flex-$1$2")+e;case 5443:return J+e+se+"flex-item-"+K(e,/flex-|-self/g,"")+(Vt(e,/flex-|baseline/)?"":se+"grid-row-"+K(e,/flex-|-self/g,""))+e;case 4675:return J+e+se+"flex-line-pack"+K(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+se+K(e,"shrink","negative")+e;case 5292:return J+e+se+K(e,"basis","preferred-size")+e;case 6060:return J+"box-"+K(e,"-grow","")+J+e+se+K(e,"grow","positive")+e;case 4554:return J+K(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return K(K(K(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return K(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return K(K(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+se+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!Vt(e,/flex-|baseline/))return se+"grid-column-align"+Fr(e,t)+e;break;case 2592:case 3360:return se+K(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Vt(r.props,/grid-\w+-end/)})?~vo(e+(n=n[t].value),"span",0)?e:se+K(e,"-start","")+e+se+"grid-row-span:"+(~vo(n,"span",0)?Vt(n,/\d+/):+Vt(n,/\d+/)-+Vt(e,/\d+/))+";":se+K(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Vt(r.props,/grid-\w+-start/)})?e:se+K(K(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return K(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return K(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+li+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vo(e,"stretch",0)?rh(K(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return K(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,u,a){return se+i+":"+o+a+(s?se+i+"-span:"+(l?u:+u-+o)+a:"")+e});case 4949:if(je(e,t+6)===121)return K(e,":",":"+J)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return K(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(je(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+se+"$2box$3")+e;case 100:return K(e,":",":"+se)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return K(e,"scroll-","scroll-snap-")+e}return e}function Xo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zg(e,t,n,r){switch(e.type){case Sg:if(e.children.length)break;case wg:case Sa:return e.return=e.return||e.value;case Xp:return"";case qp:return e.return=e.value+"{"+Xo(e.children,r)+"}";case $s:if(!Dt(e.value=e.props.join(",")))return""}return Dt(n=Xo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ag(e){var t=th(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function Rg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Lg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Sa:e.return=rh(e.value,e.length,n);return;case qp:return Xo([Jt(e,{value:K(e.value,"@","@"+J)})],r);case $s:if(e.length)return Eg(n=e.props,function(i){switch(Vt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xn(Jt(e,{props:[K(i,/:(read-\w+)/,":"+li+"$1")]})),Xn(Jt(e,{props:[i]})),gu(e,{props:Xc(n,r)});break;case"::placeholder":Xn(Jt(e,{props:[K(i,/:(plac\w+)/,":"+J+"input-$1")]})),Xn(Jt(e,{props:[K(i,/:(plac\w+)/,":"+li+"$1")]})),Xn(Jt(e,{props:[K(i,/:(plac\w+)/,se+"input-$1")]})),Xn(Jt(e,{props:[i]})),gu(e,{props:Xc(n,r)});break}return""})}}var Ig={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},Dr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",ih="active",oh="data-styled-version",Fs="6.1.13",Ea=`/*!sc*/
`,qo=typeof window<"u"&&"HTMLElement"in window,Mg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),bg={},Ts=Object.freeze([]),Pr=Object.freeze({});function sh(e,t,n){return n===void 0&&(n=Pr),e.theme!==n.theme&&e.theme||t||n.theme}var lh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ug=/(^-|-$)/g;function ef(e){return e.replace(Vg,"-").replace(Ug,"")}var Bg=/(a)(d)/gi,qi=52,tf=function(e){return String.fromCharCode(e+(e>25?39:97))};function xu(e){var t,n="";for(t=Math.abs(e);t>qi;t=t/qi|0)n=tf(t%qi)+n;return(tf(t%qi)+n).replace(Bg,"$1-$2")}var fl,uh=5381,dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ah=function(e){return dr(uh,e)};function _a(e){return xu(ah(e)>>>0)}function Hg(e){return e.displayName||e.name||"Component"}function dl(e){return typeof e=="string"&&!0}var ch=typeof Symbol=="function"&&Symbol.for,fh=ch?Symbol.for("react.memo"):60115,Wg=ch?Symbol.for("react.forward_ref"):60112,Qg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yg=((fl={})[Wg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fl[fh]=dh,fl);function nf(e){return("type"in(t=e)&&t.type.$$typeof)===fh?dh:"$$typeof"in e?Yg[e.$$typeof]:Qg;var t}var Gg=Object.defineProperty,Zg=Object.getOwnPropertyNames,rf=Object.getOwnPropertySymbols,Xg=Object.getOwnPropertyDescriptor,qg=Object.getPrototypeOf,of=Object.prototype;function ph(e,t,n){if(typeof t!="string"){if(of){var r=qg(t);r&&r!==of&&ph(e,r,n)}var i=Zg(t);rf&&(i=i.concat(rf(t)));for(var o=nf(e),s=nf(t),l=0;l<i.length;++l){var u=i[l];if(!(u in Kg||n&&n[u]||s&&u in s||o&&u in o)){var a=Xg(t,u);try{Gg(e,u,a)}catch{}}}}return e}function Vn(e){return typeof e=="function"}function $a(e){return typeof e=="object"&&"styledComponentId"in e}function Fn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function $i(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function wu(e,t,n){if(n===void 0&&(n=!1),!n&&!$i(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=wu(e[r],t[r]);else if($i(t))for(var r in t)e[r]=wu(e[r],t[r]);return e}function Ca(e,t){Object.defineProperty(e,"toString",{value:t})}function Un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Jg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Un(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Ea);return n},e}(),So=new Map,es=new Map,ko=1,Ji=function(e){if(So.has(e))return So.get(e);for(;es.has(ko);)ko++;var t=ko++;return So.set(e,t),es.set(t,e),t},ey=function(e,t){ko=t+1,So.set(e,t),es.set(t,e)},ty="style[".concat(Dr,"][").concat(oh,'="').concat(Fs,'"]'),ny=new RegExp("^".concat(Dr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ry=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},iy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Ea),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var u=l.match(ny);if(u){var a=0|parseInt(u[1],10),h=u[2];a!==0&&(ey(h,a),ry(e,h,u[3]),e.getTag().insertRules(a,i)),i.length=0}else i.push(l)}}},sf=function(e){for(var t=document.querySelectorAll(ty),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Dr)!==ih&&(iy(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function oy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var hh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var u=Array.from(l.querySelectorAll("style[".concat(Dr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Dr,ih),r.setAttribute(oh,Fs);var s=oy();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},sy=function(){function e(t){this.element=hh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Un(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ly=function(){function e(t){this.element=hh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),uy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),lf=qo,ay={isServer:!qo,useCSSOMInjection:!Mg},ts=function(){function e(t,n,r){t===void 0&&(t=Pr),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},ay),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&qo&&lf&&(lf=!1,sf(this)),Ca(this,function(){return function(o){for(var s=o.getTag(),l=s.length,u="",a=function(p){var f=function(g){return es.get(g)}(p);if(f===void 0)return"continue";var v=o.names.get(f),S=s.getGroup(p);if(v===void 0||!v.size||S.length===0)return"continue";var E="".concat(Dr,".g").concat(p,'[id="').concat(f,'"]'),I="";v!==void 0&&v.forEach(function(g){g.length>0&&(I+="".concat(g,","))}),u+="".concat(S).concat(E,'{content:"').concat(I,'"}').concat(Ea)},h=0;h<l;h++)a(h);return u}(i)})}return e.registerId=function(t){return Ji(t)},e.prototype.rehydrate=function(){!this.server&&qo&&sf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new uy(i):r?new sy(i):new ly(i)}(this.options),new Jg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ji(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ji(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ji(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cy=/&/g,fy=/^\s*\/\/.*$/gm;function mh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mh(n.children,t)),n})}function gh(e){var t,n,r,i=e===void 0?Pr:e,o=i.options,s=o===void 0?Pr:o,l=i.plugins,u=l===void 0?Ts:l,a=function(f,v,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):f},h=u.slice();h.push(function(f){f.type===$s&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(cy,n).replace(r,a))}),s.prefix&&h.push(Lg),h.push(zg);var p=function(f,v,S,E){v===void 0&&(v=""),S===void 0&&(S=""),E===void 0&&(E="&"),t=E,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var I=f.replace(fy,""),g=Pg(S||v?"".concat(S," ").concat(v," { ").concat(I," }"):I);s.namespace&&(g=mh(g,s.namespace));var c=[];return Xo(g,Ag(h.concat(Rg(function(m){return c.push(m)})))),c};return p.hash=u.length?u.reduce(function(f,v){return v.name||Un(15),dr(f,v.name)},uh).toString():"",p}var dy=new ts,Su=gh(),ja=ue.createContext({shouldForwardProp:void 0,styleSheet:dy,stylis:Su});ja.Consumer;var py=ue.createContext(void 0);function ns(){return he.useContext(ja)}function hy(e){var t=he.useState(e.stylisPlugins),n=t[0],r=t[1],i=ns().styleSheet,o=he.useMemo(function(){var u=i;return e.sheet?u=e.sheet:e.target&&(u=u.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(u=u.reconstructWithOptions({useCSSOMInjection:!1})),u},[e.disableCSSOMInjection,e.sheet,e.target,i]),s=he.useMemo(function(){return gh({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);he.useEffect(function(){xg(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var l=he.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:s}},[e.shouldForwardProp,o,s]);return ue.createElement(ja.Provider,{value:l},ue.createElement(py.Provider,{value:s},e.children))}var yh=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Su);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ca(this,function(){throw Un(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Su),this.name+t.hash},e}(),my=function(e){return e>="A"&&e<="Z"};function uf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;my(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vh=function(e){return e==null||e===!1||e===""},xh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!vh(o)&&(Array.isArray(o)&&o.isCss||Vn(o)?r.push("".concat(uf(i),":"),o,";"):$i(o)?r.push.apply(r,Nr(Nr(["".concat(i," {")],xh(o),!1),["}"],!1)):r.push("".concat(uf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ig||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function yn(e,t,n,r){if(vh(e))return[];if($a(e))return[".".concat(e.styledComponentId)];if(Vn(e)){if(!Vn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return yn(i,t,n,r)}var o;return e instanceof yh?n?(e.inject(n,r),[e.getName(r)]):[e]:$i(e)?xh(e):Array.isArray(e)?Array.prototype.concat.apply(Ts,e.map(function(s){return yn(s,t,n,r)})):[e.toString()]}function wh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vn(n)&&!$a(n))return!1}return!0}var gy=ah(Fs),yy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wh(t),this.componentId=n,this.baseHash=dr(gy,n),this.baseStyle=r,ts.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Fn(i,this.staticRulesId);else{var o=Jo(yn(this.rules,t,n,r)),s=xu(dr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=Fn(i,s),this.staticRulesId=s}else{for(var u=dr(this.baseHash,r.hash),a="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")a+=p;else if(p){var f=Jo(yn(p,t,n,r));u=dr(u,f+h),a+=f}}if(a){var v=xu(u>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(a,".".concat(v),void 0,this.componentId)),i=Fn(i,v)}}return i},e}(),Ci=ue.createContext(void 0);Ci.Consumer;function vy(e){var t=ue.useContext(Ci),n=he.useMemo(function(){return function(r,i){if(!r)throw Un(14);if(Vn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Un(8);return i?Ne(Ne({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?ue.createElement(Ci.Provider,{value:n},e.children):null}var pl={};function xy(e,t,n){var r=$a(e),i=e,o=!dl(e),s=t.attrs,l=s===void 0?Ts:s,u=t.componentId,a=u===void 0?function(w,_){var j=typeof w!="string"?"sc":ef(w);pl[j]=(pl[j]||0)+1;var $="".concat(j,"-").concat(_a(Fs+j+pl[j]));return _?"".concat(_,"-").concat($):$}(t.displayName,t.parentComponentId):u,h=t.displayName,p=h===void 0?function(w){return dl(w)?"styled.".concat(w):"Styled(".concat(Hg(w),")")}(e):h,f=t.displayName&&t.componentId?"".concat(ef(t.displayName),"-").concat(t.componentId):t.componentId||a,v=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var E=i.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;S=function(w,_){return E(w,_)&&I(w,_)}}else S=E}var g=new yy(n,f,r?i.componentStyle:void 0);function c(w,_){return function(j,$,O){var W=j.attrs,U=j.componentStyle,H=j.defaultProps,Q=j.foldedComponentIds,V=j.styledComponentId,ee=j.target,me=ue.useContext(Ci),_e=ns(),$e=j.shouldForwardProp||_e.shouldForwardProp,T=sh($,me,H)||Pr,L=function(pt,Ie,Xe){for(var Xt,ht=Ne(Ne({},Ie),{className:void 0,theme:Xe}),Kn=0;Kn<pt.length;Kn+=1){var Yn=Vn(Xt=pt[Kn])?Xt(ht):Xt;for(var mt in Yn)ht[mt]=mt==="className"?Fn(ht[mt],Yn[mt]):mt==="style"?Ne(Ne({},ht[mt]),Yn[mt]):Yn[mt]}return Ie.className&&(ht.className=Fn(ht.className,Ie.className)),ht}(W,$,T),B=L.as||ee,Z={};for(var q in L)L[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&L.theme===T||(q==="forwardedAs"?Z.as=L.forwardedAs:$e&&!$e(q,B)||(Z[q]=L[q]));var jt=function(pt,Ie){var Xe=ns(),Xt=pt.generateAndInjectStyles(Ie,Xe.styleSheet,Xe.stylis);return Xt}(U,L),Ze=Fn(Q,V);return jt&&(Ze+=" "+jt),L.className&&(Ze+=" "+L.className),Z[dl(B)&&!lh.has(B)?"class":"className"]=Ze,Z.ref=O,he.createElement(B,Z)}(m,w,_)}c.displayName=p;var m=ue.forwardRef(c);return m.attrs=v,m.componentStyle=g,m.displayName=p,m.shouldForwardProp=S,m.foldedComponentIds=r?Fn(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=f,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(_){for(var j=[],$=1;$<arguments.length;$++)j[$-1]=arguments[$];for(var O=0,W=j;O<W.length;O++)wu(_,W[O],!0);return _}({},i.defaultProps,w):w}}),Ca(m,function(){return".".concat(m.styledComponentId)}),o&&ph(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function af(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var cf=function(e){return Object.assign(e,{isCss:!0})};function Na(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vn(e)||$i(e))return cf(yn(af(Ts,Nr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?yn(r):cf(yn(af(r,t)))}function ku(e,t,n){if(n===void 0&&(n=Pr),!t)throw Un(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Na.apply(void 0,Nr([i],o,!1)))};return r.attrs=function(i){return ku(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return ku(e,t,Ne(Ne({},n),i))},r}var Sh=function(e){return ku(xy,e)},C=Sh;lh.forEach(function(e){C[e]=Sh(e)});var wy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=wh(t),ts.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Jo(yn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ts.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function Sy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Na.apply(void 0,Nr([e],t,!1)),i="sc-global-".concat(_a(JSON.stringify(r))),o=new wy(r,i),s=function(u){var a=ns(),h=ue.useContext(Ci),p=ue.useRef(a.styleSheet.allocateGSInstance(i)).current;return a.styleSheet.server&&l(p,u,a.styleSheet,h,a.stylis),ue.useLayoutEffect(function(){if(!a.styleSheet.server)return l(p,u,a.styleSheet,h,a.stylis),function(){return o.removeStyles(p,a.styleSheet)}},[p,u,a.styleSheet,h,a.stylis]),null};function l(u,a,h,p,f){if(o.isStatic)o.renderStyles(u,bg,h,f);else{var v=Ne(Ne({},a),{theme:sh(a,p,s.defaultProps)});o.renderStyles(u,v,h,f)}}return ue.memo(s)}function Ds(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jo(Na.apply(void 0,Nr([e],t,!1))),i=_a(r);return new yh(i,r)}const ky=({theme:e})=>e.media.phone,R=({theme:e})=>e.media.tablet,M=({theme:e})=>e.media.desktop,Ey=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),_y=()=>{window.scrollTo({top:0,behavior:"smooth"})},Ps=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},$y=Sy`

#root {
  width: 100%;
  margin: 0 auto;
  padding: 36px 20px 24px;

  @media ${ky} {
    width: 480px;
  }

  @media ${R} {
    width: 768px;
    padding: 36px 30px 40px;
  }

  @media ${M} {
    width: 1280px;
    padding: 24px 100px 40px;
  }
}

body {
  font-family: ${({theme:e})=>e.fonts.main}, sans-serif;
  font-size: ${({theme:e})=>e.fontSizes.ml};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;

  background-color: ${({theme:e})=>e.colors.backgroundMain};
  color: ${({theme:e})=>e.colors.textMain};
  
  overflow-anchor: none;

}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
}

a {
  display: block;
  text-decoration: none;
  color: inherit;

}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;
}
`,Cy="/ecosolution/assets/sprite-XmP0Qfvc.svg",X=({iconName:e,width:t,height:n,stroke:r,fill:i})=>d.jsx("svg",{width:t,height:n,children:d.jsx("use",{href:`${Cy}#${e}`,stroke:r||"transparent",fill:i||"transparent"})}),jy=C.header`
  display: flex;
  justify-content: space-between;
  padding: 36px 20px 5px 20px;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;

  transition: ${({theme:e})=>e.transitionHover};

  background-color: ${({$isScrolling:e})=>e?"transparent":"rgba(243, 245, 250, 0.7)"};

  @media ${R} {
    max-width: 100%;
    padding: 36px 30px 5px 30px;
  }

  @media ${M} {
    max-width: 100%;
    padding: 24px 100px 5px 100px;
  }
`,kh=C.a`
  display: flex;
  align-items: center;
  gap: 4px;

  fill: #173d33;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    fill: #97d28b;
    transition: ${({theme:e})=>e.transitionHover};
  }

  & > svg:first-child,
  svg:last-child {
    margin: 14px 0 8px 0;
  }
`,Ny=C.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${R} {
    gap: 12px;
  }
`,Fy=C.button`
  display: flex;
  padding: 12px;

  border-radius: 50%;
  background-color: #dcefd8;

  & > svg {
    width: 20px;
    height: 20px;

    & > use {
      stroke: #292d32;
    }
  }

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: #97d28b;
    transition: ${({theme:e})=>e.transitionHover};
  }
`,Ty=C.a`
  display: none;

  @media ${R} {
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 500px;
    background-color: #97d28b;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #173d33;
      transition: ${({theme:e})=>e.transitionHover};
    }

    transition: ${({theme:e})=>e.transitionHover};

    &:hover {
      color: #97d28b;
      background-color: #173d33;

      transition: ${({theme:e})=>e.transitionHover};

      & > span {
        background-color: #97d28b;
      }
    }
  }
`,Dy=[{id:1,name:"Main",href:"hero"},{id:2,name:"About",href:"about"},{id:3,name:"Cases",href:"cases"},{id:4,name:"FAQ",href:"faq"},{id:5,name:"Contact Us",href:"contact-us"}],Py="/ecosolution/assets/about_1-PMEBtF5-.png",Oy="/ecosolution/assets/about_1@2x-9imxmNKc.png",zy="/ecosolution/assets/about_2-ViwEUMXv.png",Ay="/ecosolution/assets/about_2@2x-KkWohZkE.png",Ry=[{iconName:"icon-openness",title:"Openness",description:"to the world, people, new ideas and projects"},{iconName:"icon-responsibility",title:"Responsibility",description:"we are aware that the results of our work have an impact on our lives and the lives of future generations"},{type:"image",alt:"wind-farms-fields",img:Py,img2x:Oy},{type:"image",alt:"man-worker",img:zy,img2x:Ay},{iconName:"icon-innovation",title:"Innovation",description:"we use the latest technology to implement non-standard solutions"},{iconName:"icon-quality",title:"Quality",description:"we do not strive to be the first among others, but we want to be the best in our business"}],Ly="/ecosolution/assets/case1-_CCrYN4Q.png",Iy="/ecosolution/assets/case1@2x-mXcN23UK.png",My="/ecosolution/assets/case2-vSEbn31q.png",by="/ecosolution/assets/case2@2x-3tg7DISq.png",Vy="/ecosolution/assets/case3-moiV_2xm.png",Uy="/ecosolution/assets/case3@2x-NqDKei6c.png",By="/ecosolution/assets/case4-pHxz6kpC.png",Hy="/ecosolution/assets/case4@2x-F7wFwX0L.png",Wy="/ecosolution/assets/case5-67KrYcJn.png",Qy="/ecosolution/assets/case5@2x-u0LH_kfG.png",Wr=[{img:Ly,img2x:Iy,alt:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{img:My,img2x:by,alt:"Zhytomyr city Private Enterprise “Bosch”",title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{img:Vy,img2x:Uy,alt:"Rivne city Private Enterprise “Biotech”",title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{img:By,img2x:Hy,alt:"Kherson city Private Enterprise “HealthyFarm”",title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{img:Wy,img2x:Qy,alt:"Zaporizhia city Private Enterprise “Biotech”",title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],ff=[{id:1,question:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,question:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,question:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,question:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,question:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],Ky=C.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`,Yy=C.div`
  position: absolute;
  top: 36px;
  width: 320px;
  height: 80vh;

  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 24px;

  border-radius: 25px;

  background-color: rgba(23, 61, 51, 0.75);

  backdrop-filter: blur(12.5px);

  @media ${R} {
    right: 30px;
  }

  @media ${M} {
    top: 24px;
    right: 100px;
  }

  & > span {
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 5px;

    background-color: #fff;
  }
`,Gy=C.button`
  display: flex;
  align-items: center;

  color: #fff;

  & > svg {
    width: 20px;
    height: 20px;

    & > use {
      stroke: #ffffff;
    }
  }

  &:hover {
    color: #97d28b;
    & > svg > use {
      stroke: #97d28b;
    }
  }
`,Zy=C.nav`
  margin-top: 16px;
`,Xy=C.ul`
  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`,qy=C.li`
  color: ${e=>e["data-isactive"]?"#fff":"rgba(255, 255, 255, 0.25)"};
  stroke: ${e=>e["data-isactive"]?"#fff":"rgba(255, 255, 255, 0.25)"};
  font-size: 24px;
  letter-spacing: -0.96px;

  &:hover {
    color: #97d28b;
    stroke: #97d28b;
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,Jy=C.ul`
  display: flex;
  gap: 8px;
  margin-top: auto;
`,df=C.li``,pf=C.a`
  & > svg {
    width: 24px;
    height: 24px;

    & > use {
      stroke: #ffffff;
    }
  }

  &:hover {
    & > svg > use {
      stroke: #97d28b;
    }
  }
`,ev=({onClose:e})=>{const[t,n]=he.useState(null);return d.jsx(Ky,{children:d.jsxs(Yy,{children:[d.jsxs(Gy,{onClick:()=>e(),children:[d.jsx(X,{iconName:"icon-close"}),"close"]}),d.jsx("span",{}),d.jsx(Zy,{children:d.jsx(Xy,{children:Dy.map(({id:r,name:i,href:o})=>d.jsx(qy,{"data-isactive":r===t,children:d.jsxs("a",{href:"#",onClick:s=>{s.preventDefault(),Ps(o),n(r),e()},children:[i,d.jsx(X,{iconName:"icon-arrow-top-right",width:"16px",height:"16px",stroke:"inherit"})]})},r))})}),d.jsxs(Jy,{children:[d.jsx(df,{children:d.jsx(pf,{href:"#",children:d.jsx(X,{iconName:"icon-facebook",width:24,height:24})})}),d.jsx(df,{children:d.jsx(pf,{href:"#",children:d.jsx(X,{iconName:"icon-instagram",width:24,height:24})})})]})]})})},tv=()=>{const[e,t]=he.useState(!1),[n,r]=he.useState(!1),i=he.useRef(null),o=()=>{t(!e)},s=()=>{r(!0),i.current!==null&&clearTimeout(i.current),i.current=setTimeout(()=>{r(!1)},250)};return he.useEffect(()=>(window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s),i.current!==null&&clearTimeout(i.current)}),[]),d.jsxs(jy,{$isScrolling:n,children:[d.jsxs(kh,{href:"/ecosolution",children:[d.jsx(X,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),d.jsx(X,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),d.jsx(X,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),d.jsxs(Ny,{children:[d.jsx(Fy,{type:"button",onClick:o,children:d.jsx(X,{iconName:"icon-menu",width:"16px",height:"16px",stroke:"#000"})}),e&&d.jsx(ev,{onClose:o}),d.jsxs(Ty,{href:"#contact-us",onClick:l=>{l.preventDefault(),Ps("contact-us")},children:["Get in touch",d.jsx("span",{children:d.jsx(X,{iconName:"icon-arrow-down",width:14,height:14})})]})]})]})},nv=C.main``,rv=C.section`
  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 120px;
  }
`,iv=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 36px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 124px;
  }
`,ov=C.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${R} {
    width: 272px;
    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`,sv=C.div`
  display: flex;

  @media ${R} {
    gap: 11px;

    & > span {
      display: block;
      width: 1px;
      height: 100%;

      background-color: #97d28b;
    }
  }

  @media ${M} {
    gap: 161px;
  }
`,lv=C.p`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${R} {
    width: 342px;
  }
  @media ${M} {
    width: 459px;
  }
`,uv=C.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media ${R} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${M} {
    gap: 48px;
  }
`,hf=C.li`
  padding: 12px;
  min-height: 197px;

  background-color: #eaedf1;

  @media ${M} {
    padding: 48px 24px;
    height: 339px;
  }

  &.hasImg {
    display: none;
    padding: 0;
    grid-column: span 2;
    background-color: transparent;

    @media ${R} {
      display: block;
    }
  }
`,av=C.img`
  width: 100%;
  height: auto;
`,cv=C.h3`
  display: flex;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${R} {
    font-size: 18px;
  }

  @media ${M} {
    font-size: 32px;
    line-height: 48px;
  }

  & > svg {
    width: 16px;
    height: 16px;

    margin-right: 8px;

    @media ${M} {
      width: 24px;
      height: 24px;
    }
  }
`,fv=C.span`
  display: block;
  width: 100%;
  height: 1px;

  background-color: #97d28b;

  margin-top: 33px;
  margin-bottom: 12px;

  @media ${R} {
    margin-top: 51px;
  }

  @media ${M} {
    margin-top: 94px;
    margin-bottom: 24px;
  }
`,dv=C.p`
  font-size: 14px;
  letter-spacing: -0.56px;
  text-align: justify;
  line-height: normal;

  @media ${M} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,pv=({alt:e,img:t,img2x:n})=>d.jsx(av,{src:t,alt:`${e}`,srcSet:`${t} 1x, ${n} 2x`}),hv=()=>d.jsxs(rv,{id:"about",children:[d.jsxs(iv,{children:[d.jsx(ov,{children:"Main values of our company"}),d.jsxs(sv,{children:[d.jsx("span",{}),d.jsx(lv,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]})]}),d.jsx(uv,{children:Ry.map(({iconName:e,title:t,description:n,type:r,alt:i,img:o,img2x:s})=>r==="image"?d.jsx(hf,{className:r==="image"?"hasImg":"",children:d.jsx(pv,{alt:i,img:o,img2x:s})},i):d.jsxs(hf,{children:[d.jsxs(cv,{children:[d.jsx(X,{iconName:`${e}`,stroke:"#173D33",style:{marginRight:"8px"}}),t]}),d.jsx(fv,{}),d.jsx(dv,{children:n})]},t))})]}),mv=C.section`
  margin-top: 146px;
  margin-bottom: 36px;

  @media ${R} {
    margin-top: 164px;
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-top: 200px;
    margin-bottom: 120px;
  }
`,gv=C.h1`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  font-weight: 400;

  margin-bottom: 24px;

  @media ${R} {
    width: 300px;
    margin: 0;

    font-size: 48px;
    line-height: 48px;
  }

  @media ${M} {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`,yv=C.div`
  @media ${R} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,vv=C.p`
  margin-bottom: 24px;

  font-size: 16px;
  letter-spacing: -0.64px;

  @media ${R} {
    width: 342px;

    margin-bottom: 43px;
  }

  @media ${M} {
    width: 363px;
    margin-right: 96px;
    margin-bottom: 20px;
  }
`,xv=C.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 141px;

  margin: 0 auto 24px auto;
  padding: 4px 4px 4px 16px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  line-height: 18px;
  letter-spacing: -0.64px;

  @media ${R} {
    margin: 0;
  }

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    border: 1px solid #173d33;
    background-color: #173d33;
    color: #97d28b;

    transition: ${({theme:e})=>e.transitionHover};
  }

  & > span {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    background-color: #97d28b;
  }
`,wv=C.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 24px 0;

  background-color: #97d28b;

  @media ${R} {
    margin: 26px 0 16px;
  }

  @media ${M} {
    margin: 28px 0 12px;
  }
`,Sv=C.address`
  margin-bottom: 36px;
`,kv=C.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }
`,mf=C.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  font-style: normal;

  @media ${R} {
    display: flex;
    gap: 50px;
  }

  @media ${M} {
    gap: 167px;
  }

  & > span {
    display: none;

    @media ${R} {
      display: block;
    }
  }
`,gf=C.a``,Ev=C.img`
  width: 320px;
  height: 200px;
  object-fit: cover;

  margin: 0 auto;

  @media ${R} {
    width: 710px;
    height: auto;
  }

  @media ${M} {
    width: 100%;
    height: auto;
  }
`,yf="/ecosolution/assets/hero-D9CF8VHC.png",_v="/ecosolution/assets/hero@2x-w56nltbM.png",$v="/ecosolution/assets/hero@3x-4KMo86SA.png",Cv=()=>d.jsxs(mv,{id:"hero",children:[d.jsxs(yv,{children:[d.jsx(gv,{children:"RENEWABLE ENERGY For any task"}),d.jsxs("div",{children:[d.jsx(vv,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),d.jsxs(xv,{href:"#cases",onClick:e=>{e.preventDefault(),Ps("cases")},children:["Learn More",d.jsx("span",{children:d.jsx(X,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})]}),d.jsx(wv,{}),d.jsxs("div",{children:[d.jsx(Sv,{children:d.jsxs(kv,{children:[d.jsx(mf,{children:d.jsx(gf,{href:"https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7+%D0%AF,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000",target:"_blank",rel:"noopener noreferrer",children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"})}),d.jsxs(mf,{children:[d.jsx(gf,{href:"mailto:office@ecosolution.com",children:"office@ecosolution.com"}),d.jsx("span",{children:"ecosolution © 2023"})]})]})}),d.jsx(Ev,{src:yf,alt:"Energy",srcSet:`${yf} 1x, ${_v} 2x, ${$v} 3x`})]})]}),jv=C.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${M} {
    gap: 16px;
    margin-bottom: 120px;
  }

  & > span {
    display: block;
    width: 1px;
    height: 48px;

    background-color: #97d28b;

    @media ${R} {
      height: 87px;
    }
  }
`,Nv=C.h2`
  width: 286px;

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${R} {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }
`,Fv=C.p`
  display: flex;
  align-items: center;
  gap: 8px;

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;

  color: #97d28b;

  @media ${R} {
    gap: 24px;

    font-size: 100px;
    line-height: 100px;
  }

  @media ${M} {
    font-size: 164px;
    line-height: 164px;
  }

  & > span {
    text-align: center;
    font-family: ${({theme:e})=>e.fonts.secondary};
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;

    color: #173d33;
  }
`,Tv=()=>{const[e,t]=he.useState(1134147814);return he.useEffect(()=>{const n=setInterval(()=>{t(r=>r+1)},1e3);return()=>clearInterval(n)},[]),d.jsxs(jv,{id:"electricity",children:[d.jsx(Nv,{children:"Electricity we produced for all time"}),d.jsx("span",{}),d.jsxs(Fv,{children:[Ey(e)," ",d.jsx("span",{children:"kWh"})]})]})},Dv=C.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 120px;
  }
`,Pv=C.div`
  margin-bottom: 20px;

  @media ${R} {
    display: flex;
    gap: 90px;

    margin-bottom: 32px;
  }

  @media ${M} {
    gap: 205px;
    margin-bottom: 120px;
  }
`,Ov=C.h2`
  width: 264px;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${R} {
    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`,zv=C.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > span {
    display: none;

    @media ${R} {
      display: block;
      width: 1px;
      height: 65px;

      background-color: #97d28b;
    }

    @media ${R} {
      width: 1px;
      height: 96px;

      background-color: #97d28b;
    }
  }
`,Av=C.p`
  display: block;
  font-size: 28px;
  letter-spacing: -1.12px;

  @media ${R} {
    display: flex;
    margin-left: 10px;
  }

  @media ${M} {
    margin-left: 161px;
  }

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`,Rv=C.div`
  display: flex;
  gap: 12px;

  @media ${R} {
    margin-left: 126px;
  }

  @media ${M} {
    margin-left: 193px;
  }
`,vf=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border: 1px solid #173d33;
  border-radius: 50%;

  @media ${M} {
    padding: 24px;
  }

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    border-color: #97d28b;

    transition: ${({theme:e})=>e.transitionHover};

    & > svg {
      & > use {
        stroke: #97d28b;
      }
    }
  }

  & > svg {
    width: 36px;
    height: 36px;

    & > use {
      transition: ${({theme:e})=>e.transitionHover};
      stroke: #173d33;
    }
  }
`,Lv=C.ul`
  overflow: hidden;

  @media ${R} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  @media ${M} {
    gap: 48px;
  }

  & > li:nth-child(2) {
    @media (max-width: 767px) {
      display: none;
    }
  }
`,Iv=C.li`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  height: auto;

  background-color: #eaedf1;

  @media ${R} {
  }

  @media ${M} {
    max-width: 596px;
  }
`,Mv=C.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,bv=C.div`
  padding: 24px 12px 12px;

  @media ${M} {
    padding: 36px 48px;
  }

  & > span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 21px 0 12px 0;

    background-color: #97d28b;
  }
`,Vv=C.div`
  display: flex;
  justify-content: space-between;
`,Uv=C.p`
  width: 175px;

  font-size: 18px;
  letter-spacing: -0.72px;

  @media ${R} {
    width: 195px;
    height: 66px;

    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media ${M} {
    width: 357px;
    height: auto;

    font-size: 24px;
    letter-spacing: -0.64px;
  }
`,Bv=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: #97d28b;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: #173d33;

    & > svg {
      & > use {
        stroke: #97d28b;
      }
    }
  }

  & > svg {
    width: 28px;
    height: 28px;

    & > use {
      transition: ${({theme:e})=>e.transitionHover};
      stroke: #173d33;
    }
  }
`,Hv=C.div`
  display: flex;
  justify-content: space-between;
`,Wv=C.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${R} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${M} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Qv=C.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${R} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${M} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Kv=({img:e,img2x:t,alt:n,title:r,description:i,date:o})=>d.jsxs(Iv,{children:[d.jsx(Mv,{src:e,alt:`${n}`,srcSet:`${e} 1x, ${t} 2x`}),d.jsxs(bv,{children:[d.jsxs(Vv,{children:[d.jsx(Uv,{children:r}),d.jsx(Bv,{children:d.jsx(X,{iconName:"icon-arrow-top-right"})})]}),d.jsx("span",{}),d.jsxs(Hv,{children:[d.jsx(Wv,{children:i}),d.jsx(Qv,{children:o})]})]})]}),Yv=()=>{const[e,t]=he.useState([0,1]),n=()=>{t(i=>{const o=i[0]===0?Wr.length-1:i[0]-1,s=i[1]===0?Wr.length-1:i[1]-1;return[o,s]})},r=()=>{t(i=>{const o=i[0]===Wr.length-1?0:i[0]+1,s=i[1]===Wr.length-1?0:i[1]+1;return[o,s]})};return d.jsxs(Dv,{id:"cases",children:[d.jsxs(Pv,{children:[d.jsx(Ov,{children:"Successful cases of our company"}),d.jsxs(zv,{children:[d.jsx("span",{}),d.jsxs(Av,{children:[`${(e[0]+1).toString().padStart(2,"0")}`,d.jsx("span",{children:" /05"})]}),d.jsxs(Rv,{children:[d.jsx(vf,{onClick:n,children:d.jsx(X,{iconName:"icon-arrow-left-slider",stroke:"#000"})}),d.jsx(vf,{onClick:r,children:d.jsx(X,{iconName:"icon-arrow-right-slider",stroke:"#000"})})]})]})]}),d.jsx(Lv,{children:e.map(i=>d.jsx(Kv,{...Wr[i]},i))})]})},Gv=Ds`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Zv=C.section`
  margin-bottom: 36px;

  @media ${R} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-bottom: 100px;
  }

  @media ${M} {
    justify-content: space-between;
    gap: 0;
    margin-bottom: 120px;
  }
`,Xv=C.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${R} {
    display: flex;
  }
`,qv=C.h2`
  width: 320px;
  margin-bottom: 24px;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${R} {
    width: 347px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 398px;
    font-size: 48px;
    line-height: 48px;
  }
`,Jv=C.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 296px;
`,e1=C.li`
  &:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 16px;

    background-color: #97d28b;
  }

  @media ${R} {
    width: 342px;
  }

  @media ${M} {
    width: 596px;
  }

  transition: ${({theme:e})=>e.transitionHover};
`,t1=C.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  transition: ${({theme:e})=>e.transitionHover};

  @media ${R} {
    gap: 16px;
  }

  @media ${M} {
    gap: 24px;
  }

  & > svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;

    @media ${R} {
      width: 28px;
      height: 28px;
    }

    & > use {
      stroke: #173d33;
    }
  }
`,n1=C.h3`
  margin-bottom: ${({open:e})=>e?"16px":"0"};

  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${M} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  transition: ${({theme:e})=>e.transitionHover};
`,r1=C.p`
  opacity: 0;
  transform: translateY(-100%);
  animation: ${Gv} 0.5s ease;

  ${e=>e.open&&`
    opacity: 1;
    transform: translateY(0);
  `}

  margin-left: 24px;

  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${R} {
    margin-left: 44px;
  }

  @media ${M} {
    margin-left: 52px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }

  transition: ${({theme:e})=>e.transitionHover};
`,i1=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  transition: ${({theme:e})=>e.transitionHover};
`,o1=C.p`
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media ${M} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,s1=C.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;

  border-radius: 100px;

  background-color: #97d28b;

  transition: ${({theme:e})=>e.transitionHover};

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #173d33;

    transition: ${({theme:e})=>e.transitionHover};
  }

  &:hover {
    color: #97d28b;
    background-color: #173d33;

    & > span {
      background-color: #97d28b;
    }
  }
`,l1=C.div`
  margin-top: 36px;

  transition: ${({theme:e})=>e.transitionHover};

  @media ${R} {
    display: none;
  }
`,u1=({question:e,answer:t,toggleAccordion:n,isOpen:r})=>d.jsxs(e1,{children:[d.jsxs(t1,{onClick:n,children:[d.jsx(X,{iconName:r?"icon-minus":"icon-plus"}),d.jsx(n1,{open:r,children:e})]}),r&&d.jsx(r1,{open:r,children:t})]}),xf=()=>d.jsxs(i1,{children:[d.jsx(o1,{children:"Didn't find the answer to your question?"}),d.jsxs(s1,{href:"#contact-us",onClick:e=>{e.preventDefault(),Ps("contact-us")},children:["Contact us",d.jsx("span",{children:d.jsx(X,{iconName:"icon-arrow-down",width:14,height:14})})]})]}),a1=()=>{const[e,t]=he.useState(ff[0].id),n=r=>{t(r===e?null:r)};return d.jsxs(Zv,{id:"faq",children:[d.jsxs(Xv,{children:[d.jsx(qv,{children:"Frequently Asked Questions"}),d.jsx(xf,{})]}),d.jsx(Jv,{children:ff.map(({id:r,question:i,answer:o})=>d.jsx(u1,{question:i,answer:o,toggleAccordion:()=>n(r),isOpen:r===e},r))}),d.jsx(l1,{children:d.jsx(xf,{})})]})},c1=C.section`
  margin-bottom: 36px;

  @media ${R} {
    flex-direction: row;
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 120px;
  }
`,f1=C.h2`
  margin-bottom: 24px;
  text-align: center;
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;

  @media ${R} {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`,d1=C.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }
`,p1=C.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${R} {
    width: 244px;
  }

  @media ${M} {
    gap: 32px;
    width: 466px;
  }

  & > div {
    cursor: pointer;
  }
`,eo=C.p`
  margin-bottom: 8px;

  text-align: justify;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${M} {
    margin-bottom: 16px;
  }
`,to=C.a`
  display: flex;
  gap: 8px;
  text-align: justify;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;

  & > svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    & > use {
      transition: ${({theme:e})=>e.transitionHover};
      stroke: #173d33;
    }
  }

  &:hover {
    & > svg > use {
      transition: ${({theme:e})=>e.transitionHover};
      stroke: #97d28b;
    }
  }
`,h1=C.div`
  & > div {
    display: flex;
    gap: 32px;

    @media ${M} {
      gap: 8px;
    }
  }
`,wf=C.a`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;

    & > use {
      transition: ${({theme:e})=>e.transitionHover};
      stroke: #173d33;
    }
  }

  &:hover {
    & > svg > use {
      transition: ${({theme:e})=>e.transitionHover};
      stroke: #97d28b;
    }
  }
`,m1=C.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  padding: 36px 12px;
  background-color: #eaedf1;

  @media ${R} {
    width: 342px;
    padding: 36px 24px;
  }

  @media ${M} {
    gap: 32px;
    width: 596px;
    padding: 48px;
  }
`,no=C.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`,hl=C.input`
  width: 100%;

  outline: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  background-color: #eaedf1;

  &::placeholder {
    color: #bdbdbd;
  }

  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  border-color: ${({error:e})=>e?"red":"#97d28b"};

  @media ${M} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`,g1=C.textarea`
  width: 100%;
  height: 147px;

  resize: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #97d28b;
  background-color: #eaedf1;

  &::placeholder {
    color: #bdbdbd;
  }

  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${M} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`,y1=C.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 0 0 0 auto;
  padding: 4px 4px 4px 16px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  line-height: 18px;
  letter-spacing: -0.64px;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover,
  &:focus,
  &:active {
    transition: ${({theme:e})=>e.transitionHover};
    border: 1px solid #173d33;
    background-color: #173d33;
    color: #97d28b;
  }

  & > span {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    background-color: #97d28b;
  }
`,ml=C.span`
  position: absolute;
  bottom: -25px;
  right: 0;
  text-align: right;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  color: #d28b8b;
`,v1=()=>d.jsxs(p1,{children:[d.jsxs("div",{children:[d.jsx(eo,{children:"Phone:"}),d.jsxs(to,{children:[d.jsx(X,{iconName:"icon-phone"}),"38 (098) 12 34 567"]}),d.jsxs(to,{style:{marginTop:"12px"},children:[d.jsx(X,{iconName:"icon-phone"}),"38 (093) 12 34 567"]})]}),d.jsxs("div",{children:[d.jsx(eo,{children:"E-mail:"}),d.jsxs(to,{children:[d.jsx(X,{iconName:"icon-email"}),"office@ecosolution.com"]})]}),d.jsxs("div",{children:[d.jsx(eo,{children:"Address:"}),d.jsxs(to,{children:[d.jsx(X,{iconName:"icon-map",width:24,height:24,stroke:"#173D33"}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),d.jsxs(h1,{children:[d.jsx(eo,{children:"Social Networks:"}),d.jsxs("div",{children:[d.jsx(wf,{href:"#",children:d.jsx(X,{iconName:"icon-facebook"})}),d.jsx(wf,{href:"#",children:d.jsx(X,{iconName:"icon-instagram"})})]})]})]});var Pi=e=>e.type==="checkbox",pr=e=>e instanceof Date,be=e=>e==null;const Eh=e=>typeof e=="object";var Ee=e=>!be(e)&&!Array.isArray(e)&&Eh(e)&&!pr(e),x1=e=>Ee(e)&&e.target?Pi(e.target)?e.target.checked:e.target.value:e,w1=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,S1=(e,t)=>e.has(w1(t)),k1=e=>{const t=e.constructor&&e.constructor.prototype;return Ee(t)&&t.hasOwnProperty("isPrototypeOf")},Fa=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Mt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Fa&&(e instanceof Blob||e instanceof FileList))&&(n||Ee(e)))if(t=n?[]:{},!n&&!k1(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Mt(e[r]));else return e;return t}var Oi=e=>Array.isArray(e)?e.filter(Boolean):[],ge=e=>e===void 0,z=(e,t,n)=>{if(!t||!Ee(e))return n;const r=Oi(t.split(/[,[\].]+?/)).reduce((i,o)=>be(i)?i:i[o],e);return ge(r)||r===e?ge(e[t])?n:e[t]:r},on=e=>typeof e=="boolean";const Sf={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},kt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Lt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};ue.createContext(null);var E1=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==kt.all&&(t._proxyFormState[s]=!r||kt.all),n&&(n[s]=!0),e[s]}});return i},ot=e=>Ee(e)&&!Object.keys(e).length,_1=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return ot(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||kt.all))},gl=e=>Array.isArray(e)?e:[e];function $1(e){const t=ue.useRef(e);t.current=e,ue.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Ot=e=>typeof e=="string",C1=(e,t,n,r,i)=>Ot(e)?(r&&t.watch.add(e),z(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),z(n,o))):(r&&(t.watchAll=!0),n),Ta=e=>/^\w*$/.test(e),_h=e=>Oi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function ne(e,t,n){let r=-1;const i=Ta(t)?[t]:_h(t),o=i.length,s=o-1;for(;++r<o;){const l=i[r];let u=n;if(r!==s){const a=e[l];u=Ee(a)||Array.isArray(a)?a:isNaN(+i[r+1])?{}:[]}e[l]=u,e=e[l]}return e}var $h=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},kf=e=>({isOnSubmit:!e||e===kt.onSubmit,isOnBlur:e===kt.onBlur,isOnChange:e===kt.onChange,isOnAll:e===kt.all,isOnTouch:e===kt.onTouched}),Ef=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Eo=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=z(e,i);if(o){const{_f:s,...l}=o;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],i)&&!r)break;if(s.ref&&t(s.ref,s.name)&&!r)break}else Ee(l)&&Eo(l,t)}}};var j1=(e,t,n)=>{const r=Oi(z(e,n));return ne(r,"root",t[n]),ne(e,n,r),e},Da=e=>e.type==="file",un=e=>typeof e=="function",rs=e=>{if(!Fa)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},_o=e=>Ot(e),Pa=e=>e.type==="radio",is=e=>e instanceof RegExp;const _f={value:!1,isValid:!1},$f={value:!0,isValid:!0};var Ch=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ge(e[0].attributes.value)?ge(e[0].value)||e[0].value===""?$f:{value:e[0].value,isValid:!0}:$f:_f}return _f};const Cf={isValid:!1,value:null};var jh=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Cf):Cf;function jf(e,t,n="validate"){if(_o(e)||Array.isArray(e)&&e.every(_o)||on(e)&&!e)return{type:n,message:_o(e)?e:"",ref:t}}var qn=e=>Ee(e)&&!is(e)?e:{value:e,message:""},Nf=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:l,maxLength:u,minLength:a,min:h,max:p,pattern:f,validate:v,name:S,valueAsNumber:E,mount:I,disabled:g}=e._f,c=z(t,S);if(!I||g)return{};const m=s?s[0]:o,w=Q=>{r&&m.reportValidity&&(m.setCustomValidity(on(Q)?"":Q||""),m.reportValidity())},_={},j=Pa(o),$=Pi(o),O=j||$,W=(E||Da(o))&&ge(o.value)&&ge(c)||rs(o)&&o.value===""||c===""||Array.isArray(c)&&!c.length,U=$h.bind(null,S,n,_),H=(Q,V,ee,me=Lt.maxLength,_e=Lt.minLength)=>{const $e=Q?V:ee;_[S]={type:Q?me:_e,message:$e,ref:o,...U(Q?me:_e,$e)}};if(i?!Array.isArray(c)||!c.length:l&&(!O&&(W||be(c))||on(c)&&!c||$&&!Ch(s).isValid||j&&!jh(s).isValid)){const{value:Q,message:V}=_o(l)?{value:!!l,message:l}:qn(l);if(Q&&(_[S]={type:Lt.required,message:V,ref:m,...U(Lt.required,V)},!n))return w(V),_}if(!W&&(!be(h)||!be(p))){let Q,V;const ee=qn(p),me=qn(h);if(!be(c)&&!isNaN(c)){const _e=o.valueAsNumber||c&&+c;be(ee.value)||(Q=_e>ee.value),be(me.value)||(V=_e<me.value)}else{const _e=o.valueAsDate||new Date(c),$e=B=>new Date(new Date().toDateString()+" "+B),T=o.type=="time",L=o.type=="week";Ot(ee.value)&&c&&(Q=T?$e(c)>$e(ee.value):L?c>ee.value:_e>new Date(ee.value)),Ot(me.value)&&c&&(V=T?$e(c)<$e(me.value):L?c<me.value:_e<new Date(me.value))}if((Q||V)&&(H(!!Q,ee.message,me.message,Lt.max,Lt.min),!n))return w(_[S].message),_}if((u||a)&&!W&&(Ot(c)||i&&Array.isArray(c))){const Q=qn(u),V=qn(a),ee=!be(Q.value)&&c.length>+Q.value,me=!be(V.value)&&c.length<+V.value;if((ee||me)&&(H(ee,Q.message,V.message),!n))return w(_[S].message),_}if(f&&!W&&Ot(c)){const{value:Q,message:V}=qn(f);if(is(Q)&&!c.match(Q)&&(_[S]={type:Lt.pattern,message:V,ref:o,...U(Lt.pattern,V)},!n))return w(V),_}if(v){if(un(v)){const Q=await v(c,t),V=jf(Q,m);if(V&&(_[S]={...V,...U(Lt.validate,V.message)},!n))return w(V.message),_}else if(Ee(v)){let Q={};for(const V in v){if(!ot(Q)&&!n)break;const ee=jf(await v[V](c,t),m,V);ee&&(Q={...ee,...U(V,ee.message)},w(ee.message),n&&(_[S]=Q))}if(!ot(Q)&&(_[S]={ref:m,...Q},!n))return _}}return w(!0),_};function N1(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=ge(e)?r++:e[t[r++]];return e}function F1(e){for(const t in e)if(e.hasOwnProperty(t)&&!ge(e[t]))return!1;return!0}function Te(e,t){const n=Array.isArray(t)?t:Ta(t)?[t]:_h(t),r=n.length===1?e:N1(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Ee(r)&&ot(r)||Array.isArray(r)&&F1(r))&&Te(e,n.slice(0,-1)),e}function yl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var os=e=>be(e)||!Eh(e);function Tn(e,t){if(os(e)||os(t))return e===t;if(pr(e)&&pr(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(pr(o)&&pr(s)||Ee(o)&&Ee(s)||Array.isArray(o)&&Array.isArray(s)?!Tn(o,s):o!==s)return!1}}return!0}var Nh=e=>e.type==="select-multiple",T1=e=>Pa(e)||Pi(e),vl=e=>rs(e)&&e.isConnected,Fh=e=>{for(const t in e)if(un(e[t]))return!0;return!1};function ss(e,t={}){const n=Array.isArray(e);if(Ee(e)||n)for(const r in e)Array.isArray(e[r])||Ee(e[r])&&!Fh(e[r])?(t[r]=Array.isArray(e[r])?[]:{},ss(e[r],t[r])):be(e[r])||(t[r]=!0);return t}function Th(e,t,n){const r=Array.isArray(e);if(Ee(e)||r)for(const i in e)Array.isArray(e[i])||Ee(e[i])&&!Fh(e[i])?ge(t)||os(n[i])?n[i]=Array.isArray(e[i])?ss(e[i],[]):{...ss(e[i])}:Th(e[i],be(t)?{}:t[i],n[i]):n[i]=!Tn(e[i],t[i]);return n}var xl=(e,t)=>Th(e,t,ss(t)),Dh=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ge(e)?e:t?e===""?NaN:e&&+e:n&&Ot(e)?new Date(e):r?r(e):e;function wl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Da(t)?t.files:Pa(t)?jh(e.refs).value:Nh(t)?[...t.selectedOptions].map(({value:n})=>n):Pi(t)?Ch(e.refs).value:Dh(ge(t.value)?e.ref.value:t.value,e)}var D1=(e,t,n,r)=>{const i={};for(const o of e){const s=z(t,o);s&&ne(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Qr=e=>ge(e)?e:is(e)?e.source:Ee(e)?is(e.value)?e.value.source:e.value:e,P1=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ff(e,t,n){const r=z(e,n);if(r||Ta(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=z(t,o),l=z(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(l&&l.type)return{name:o,error:l};i.pop()}return{name:n}}var O1=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,z1=(e,t)=>!Oi(z(e,t)).length&&Te(e,t);const A1={mode:kt.onSubmit,reValidateMode:kt.onChange,shouldFocusError:!0};function R1(e={},t){let n={...A1,...e},r={submitCount:0,isDirty:!1,isLoading:un(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Ee(n.defaultValues)||Ee(n.values)?Mt(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Mt(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},a,h=0;const p={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:yl(),array:yl(),state:yl()},v=e.resetOptions&&e.resetOptions.keepDirtyValues,S=kf(n.mode),E=kf(n.reValidateMode),I=n.criteriaMode===kt.all,g=y=>x=>{clearTimeout(h),h=setTimeout(y,x)},c=async y=>{if(p.isValid||y){const x=n.resolver?ot((await W()).errors):await H(i,!0);x!==r.isValid&&f.state.next({isValid:x})}},m=y=>p.isValidating&&f.state.next({isValidating:y}),w=(y,x=[],k,A,D=!0,F=!0)=>{if(A&&k){if(l.action=!0,F&&Array.isArray(z(i,y))){const b=k(z(i,y),A.argA,A.argB);D&&ne(i,y,b)}if(F&&Array.isArray(z(r.errors,y))){const b=k(z(r.errors,y),A.argA,A.argB);D&&ne(r.errors,y,b),z1(r.errors,y)}if(p.touchedFields&&F&&Array.isArray(z(r.touchedFields,y))){const b=k(z(r.touchedFields,y),A.argA,A.argB);D&&ne(r.touchedFields,y,b)}p.dirtyFields&&(r.dirtyFields=xl(o,s)),f.state.next({name:y,isDirty:V(y,x),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else ne(s,y,x)},_=(y,x)=>{ne(r.errors,y,x),f.state.next({errors:r.errors})},j=(y,x,k,A)=>{const D=z(i,y);if(D){const F=z(s,y,ge(k)?z(o,y):k);ge(F)||A&&A.defaultChecked||x?ne(s,y,x?F:wl(D._f)):_e(y,F),l.mount&&c()}},$=(y,x,k,A,D)=>{let F=!1,b=!1;const re={name:y};if(!k||A){p.isDirty&&(b=r.isDirty,r.isDirty=re.isDirty=V(),F=b!==re.isDirty);const ve=Tn(z(o,y),x);b=z(r.dirtyFields,y),ve?Te(r.dirtyFields,y):ne(r.dirtyFields,y,!0),re.dirtyFields=r.dirtyFields,F=F||p.dirtyFields&&b!==!ve}if(k){const ve=z(r.touchedFields,y);ve||(ne(r.touchedFields,y,k),re.touchedFields=r.touchedFields,F=F||p.touchedFields&&ve!==k)}return F&&D&&f.state.next(re),F?re:{}},O=(y,x,k,A)=>{const D=z(r.errors,y),F=p.isValid&&on(x)&&r.isValid!==x;if(e.delayError&&k?(a=g(()=>_(y,k)),a(e.delayError)):(clearTimeout(h),a=null,k?ne(r.errors,y,k):Te(r.errors,y)),(k?!Tn(D,k):D)||!ot(A)||F){const b={...A,...F&&on(x)?{isValid:x}:{},errors:r.errors,name:y};r={...r,...b},f.state.next(b)}m(!1)},W=async y=>n.resolver(s,n.context,D1(y||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),U=async y=>{const{errors:x}=await W(y);if(y)for(const k of y){const A=z(x,k);A?ne(r.errors,k,A):Te(r.errors,k)}else r.errors=x;return x},H=async(y,x,k={valid:!0})=>{for(const A in y){const D=y[A];if(D){const{_f:F,...b}=D;if(F){const re=u.array.has(F.name),ve=await Nf(D,s,I,n.shouldUseNativeValidation&&!x,re);if(ve[F.name]&&(k.valid=!1,x))break;!x&&(z(ve,F.name)?re?j1(r.errors,ve,F.name):ne(r.errors,F.name,ve[F.name]):Te(r.errors,F.name))}b&&await H(b,x,k)}}return k.valid},Q=()=>{for(const y of u.unMount){const x=z(i,y);x&&(x._f.refs?x._f.refs.every(k=>!vl(k)):!vl(x._f.ref))&&Xe(y)}u.unMount=new Set},V=(y,x)=>(y&&x&&ne(s,y,x),!Tn(q(),o)),ee=(y,x,k)=>C1(y,u,{...l.mount?s:ge(x)?o:Ot(y)?{[y]:x}:x},k,x),me=y=>Oi(z(l.mount?s:o,y,e.shouldUnregister?z(o,y,[]):[])),_e=(y,x,k={})=>{const A=z(i,y);let D=x;if(A){const F=A._f;F&&(!F.disabled&&ne(s,y,Dh(x,F)),D=rs(F.ref)&&be(x)?"":x,Nh(F.ref)?[...F.ref.options].forEach(b=>b.selected=D.includes(b.value)):F.refs?Pi(F.ref)?F.refs.length>1?F.refs.forEach(b=>(!b.defaultChecked||!b.disabled)&&(b.checked=Array.isArray(D)?!!D.find(re=>re===b.value):D===b.value)):F.refs[0]&&(F.refs[0].checked=!!D):F.refs.forEach(b=>b.checked=b.value===D):Da(F.ref)?F.ref.value="":(F.ref.value=D,F.ref.type||f.values.next({name:y,values:{...s}})))}(k.shouldDirty||k.shouldTouch)&&$(y,D,k.shouldTouch,k.shouldDirty,!0),k.shouldValidate&&Z(y)},$e=(y,x,k)=>{for(const A in x){const D=x[A],F=`${y}.${A}`,b=z(i,F);(u.array.has(y)||!os(D)||b&&!b._f)&&!pr(D)?$e(F,D,k):_e(F,D,k)}},T=(y,x,k={})=>{const A=z(i,y),D=u.array.has(y),F=Mt(x);ne(s,y,F),D?(f.array.next({name:y,values:{...s}}),(p.isDirty||p.dirtyFields)&&k.shouldDirty&&f.state.next({name:y,dirtyFields:xl(o,s),isDirty:V(y,F)})):A&&!A._f&&!be(F)?$e(y,F,k):_e(y,F,k),Ef(y,u)&&f.state.next({...r}),f.values.next({name:y,values:{...s}}),!l.mount&&t()},L=async y=>{const x=y.target;let k=x.name,A=!0;const D=z(i,k),F=()=>x.type?wl(D._f):x1(y),b=re=>{A=Number.isNaN(re)||re===z(s,k,re)};if(D){let re,ve;const zi=F(),Gn=y.type===Sf.BLUR||y.type===Sf.FOCUS_OUT,Bh=!P1(D._f)&&!n.resolver&&!z(r.errors,k)&&!D._f.deps||O1(Gn,z(r.touchedFields,k),r.isSubmitted,E,S),Rs=Ef(k,u,Gn);ne(s,k,zi),Gn?(D._f.onBlur&&D._f.onBlur(y),a&&a(0)):D._f.onChange&&D._f.onChange(y);const Ls=$(k,zi,Gn,!1),Hh=!ot(Ls)||Rs;if(!Gn&&f.values.next({name:k,type:y.type,values:{...s}}),Bh)return p.isValid&&c(),Hh&&f.state.next({name:k,...Rs?{}:Ls});if(!Gn&&Rs&&f.state.next({...r}),m(!0),n.resolver){const{errors:ba}=await W([k]);if(b(zi),A){const Wh=Ff(r.errors,i,k),Va=Ff(ba,i,Wh.name||k);re=Va.error,k=Va.name,ve=ot(ba)}}else re=(await Nf(D,s,I,n.shouldUseNativeValidation))[k],b(zi),A&&(re?ve=!1:p.isValid&&(ve=await H(i,!0)));A&&(D._f.deps&&Z(D._f.deps),O(k,ve,re,Ls))}},B=(y,x)=>{if(z(r.errors,x)&&y.focus)return y.focus(),1},Z=async(y,x={})=>{let k,A;const D=gl(y);if(m(!0),n.resolver){const F=await U(ge(y)?y:D);k=ot(F),A=y?!D.some(b=>z(F,b)):k}else y?(A=(await Promise.all(D.map(async F=>{const b=z(i,F);return await H(b&&b._f?{[F]:b}:b)}))).every(Boolean),!(!A&&!r.isValid)&&c()):A=k=await H(i);return f.state.next({...!Ot(y)||p.isValid&&k!==r.isValid?{}:{name:y},...n.resolver||!y?{isValid:k}:{},errors:r.errors,isValidating:!1}),x.shouldFocus&&!A&&Eo(i,B,y?D:u.mount),A},q=y=>{const x={...o,...l.mount?s:{}};return ge(y)?x:Ot(y)?z(x,y):y.map(k=>z(x,k))},jt=(y,x)=>({invalid:!!z((x||r).errors,y),isDirty:!!z((x||r).dirtyFields,y),isTouched:!!z((x||r).touchedFields,y),error:z((x||r).errors,y)}),Ze=y=>{y&&gl(y).forEach(x=>Te(r.errors,x)),f.state.next({errors:y?r.errors:{}})},pt=(y,x,k)=>{const A=(z(i,y,{_f:{}})._f||{}).ref;ne(r.errors,y,{...x,ref:A}),f.state.next({name:y,errors:r.errors,isValid:!1}),k&&k.shouldFocus&&A&&A.focus&&A.focus()},Ie=(y,x)=>un(y)?f.values.subscribe({next:k=>y(ee(void 0,x),k)}):ee(y,x,!0),Xe=(y,x={})=>{for(const k of y?gl(y):u.mount)u.mount.delete(k),u.array.delete(k),x.keepValue||(Te(i,k),Te(s,k)),!x.keepError&&Te(r.errors,k),!x.keepDirty&&Te(r.dirtyFields,k),!x.keepTouched&&Te(r.touchedFields,k),!n.shouldUnregister&&!x.keepDefaultValue&&Te(o,k);f.values.next({values:{...s}}),f.state.next({...r,...x.keepDirty?{isDirty:V()}:{}}),!x.keepIsValid&&c()},Xt=({disabled:y,name:x,field:k,fields:A,value:D})=>{if(on(y)){const F=y?void 0:ge(D)?wl(k?k._f:z(A,x)._f):D;ne(s,x,F),$(x,F,!1,!1,!0)}},ht=(y,x={})=>{let k=z(i,y);const A=on(x.disabled);return ne(i,y,{...k||{},_f:{...k&&k._f?k._f:{ref:{name:y}},name:y,mount:!0,...x}}),u.mount.add(y),k?Xt({field:k,disabled:x.disabled,name:y}):j(y,!0,x.value),{...A?{disabled:x.disabled}:{},...n.progressive?{required:!!x.required,min:Qr(x.min),max:Qr(x.max),minLength:Qr(x.minLength),maxLength:Qr(x.maxLength),pattern:Qr(x.pattern)}:{},name:y,onChange:L,onBlur:L,ref:D=>{if(D){ht(y,x),k=z(i,y);const F=ge(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,b=T1(F),re=k._f.refs||[];if(b?re.find(ve=>ve===F):F===k._f.ref)return;ne(i,y,{_f:{...k._f,...b?{refs:[...re.filter(vl),F,...Array.isArray(z(o,y))?[{}]:[]],ref:{type:F.type,name:y}}:{ref:F}}}),j(y,!1,void 0,F)}else k=z(i,y,{}),k._f&&(k._f.mount=!1),(n.shouldUnregister||x.shouldUnregister)&&!(S1(u.array,y)&&l.action)&&u.unMount.add(y)}}},Kn=()=>n.shouldFocusError&&Eo(i,B,u.mount),Yn=y=>{on(y)&&(f.state.next({disabled:y}),Eo(i,x=>{x.disabled=y},0,!1))},mt=(y,x)=>async k=>{k&&(k.preventDefault&&k.preventDefault(),k.persist&&k.persist());let A=Mt(s);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:D,values:F}=await W();r.errors=D,A=F}else await H(i);Te(r.errors,"root"),ot(r.errors)?(f.state.next({errors:{}}),await y(A,k)):(x&&await x({...r.errors},k),Kn(),setTimeout(Kn)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Uh=(y,x={})=>{z(i,y)&&(ge(x.defaultValue)?T(y,z(o,y)):(T(y,x.defaultValue),ne(o,y,x.defaultValue)),x.keepTouched||Te(r.touchedFields,y),x.keepDirty||(Te(r.dirtyFields,y),r.isDirty=x.defaultValue?V(y,z(o,y)):V()),x.keepError||(Te(r.errors,y),p.isValid&&c()),f.state.next({...r}))},Ia=(y,x={})=>{const k=y?Mt(y):o,A=Mt(k),D=y&&!ot(y)?A:o;if(x.keepDefaultValues||(o=k),!x.keepValues){if(x.keepDirtyValues||v)for(const F of u.mount)z(r.dirtyFields,F)?ne(D,F,z(s,F)):T(F,z(D,F));else{if(Fa&&ge(y))for(const F of u.mount){const b=z(i,F);if(b&&b._f){const re=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(rs(re)){const ve=re.closest("form");if(ve){ve.reset();break}}}}i={}}s=e.shouldUnregister?x.keepDefaultValues?Mt(o):{}:Mt(D),f.array.next({values:{...D}}),f.values.next({values:{...D}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!p.isValid||!!x.keepIsValid,l.watch=!!e.shouldUnregister,f.state.next({submitCount:x.keepSubmitCount?r.submitCount:0,isDirty:x.keepDirty?r.isDirty:!!(x.keepDefaultValues&&!Tn(y,o)),isSubmitted:x.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:x.keepDirtyValues?r.dirtyFields:x.keepDefaultValues&&y?xl(o,y):{},touchedFields:x.keepTouched?r.touchedFields:{},errors:x.keepErrors?r.errors:{},isSubmitSuccessful:x.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Ma=(y,x)=>Ia(un(y)?y(s):y,x);return{control:{register:ht,unregister:Xe,getFieldState:jt,handleSubmit:mt,setError:pt,_executeSchema:W,_getWatch:ee,_getDirty:V,_updateValid:c,_removeUnmounted:Q,_updateFieldArray:w,_updateDisabledField:Xt,_getFieldArray:me,_reset:Ia,_resetDefaultValues:()=>un(n.defaultValues)&&n.defaultValues().then(y=>{Ma(y,n.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:y=>{r={...r,...y}},_disableForm:Yn,_subjects:f,_proxyFormState:p,get _fields(){return i},get _formValues(){return s},get _state(){return l},set _state(y){l=y},get _defaultValues(){return o},get _names(){return u},set _names(y){u=y},get _formState(){return r},set _formState(y){r=y},get _options(){return n},set _options(y){n={...n,...y}}},trigger:Z,register:ht,handleSubmit:mt,watch:Ie,setValue:T,getValues:q,reset:Ma,resetField:Uh,clearErrors:Ze,unregister:Xe,setError:pt,setFocus:(y,x={})=>{const k=z(i,y),A=k&&k._f;if(A){const D=A.refs?A.refs[0]:A.ref;D.focus&&(D.focus(),x.shouldSelect&&D.select())}},getFieldState:jt}}function L1(e={}){const t=ue.useRef(),n=ue.useRef(),[r,i]=ue.useState({isDirty:!1,isValidating:!1,isLoading:un(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:un(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...R1(e,()=>i(s=>({...s}))),formState:r});const o=t.current.control;return o._options=e,$1({subject:o._subjects.state,next:s=>{_1(s,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),ue.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),ue.useEffect(()=>{if(o._proxyFormState.isDirty){const s=o._getDirty();s!==r.isDirty&&o._subjects.state.next({isDirty:s})}},[o,r.isDirty]),ue.useEffect(()=>{e.values&&!Tn(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),ue.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=E1(r,o),t.current}var Tf=function(e,t,n){if(e&&"reportValidity"in e){var r=z(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},Ph=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?Tf(o.ref,i,e):o.refs&&o.refs.forEach(function(s){return Tf(s,i,e)})};for(var r in t.fields)n(r)},I1=function(e,t){t.shouldUseNativeValidation&&Ph(e,t);var n={};for(var r in e){var i=z(t.fields,r),o=Object.assign(e[r]||{},{ref:i&&i.ref});if(b1(t.names||Object.keys(e),r)){var s=Object.assign({},M1(z(n,r)));ne(s,"root",o),ne(n,r,s)}else ne(n,r,o)}return n},M1=function(e){return Array.isArray(e)?e.filter(Boolean):[]},b1=function(e,t){return e.some(function(n){return n.startsWith(t+".")})};function V1(e,t,n){return t===void 0&&(t={}),n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(s,l){try{var u=(t.context,Promise.resolve(e[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},t,{context:i}))).then(function(a){return o.shouldUseNativeValidation&&Ph({},o),{values:n.raw?r:a,errors:{}}}))}catch(a){return l(a)}return u&&u.then?u.then(void 0,l):u}(0,function(s){if(!s.inner)throw s;return{values:{},errors:I1((l=s,u=!o.shouldUseNativeValidation&&o.criteriaMode==="all",(l.inner||[]).reduce(function(a,h){if(a[h.path]||(a[h.path]={message:h.message,type:h.type}),u){var p=a[h.path].types,f=p&&p[h.type];a[h.path]=$h(h.path,u,a,h.type,f?[].concat(f,h.message):h.message)}return a},{})),o)};var l,u}))}catch(s){return Promise.reject(s)}}}function Wn(e){this._maxSize=e,this.clear()}Wn.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Wn.prototype.get=function(e){return this._values[e]};Wn.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var U1=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Oh=/^\d+$/,B1=/^\d/,H1=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,W1=/^\s*(['"]?)(.*?)(\1)\s*$/,Oa=512,Df=new Wn(Oa),Pf=new Wn(Oa),Of=new Wn(Oa),An={Cache:Wn,split:Eu,normalizePath:Sl,setter:function(e){var t=Sl(e);return Pf.get(e)||Pf.set(e,function(r,i){for(var o=0,s=t.length,l=r;o<s-1;){var u=t[o];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;l=l[t[o++]]}l[t[o]]=i})},getter:function(e,t){var n=Sl(e);return Of.get(e)||Of.set(e,function(i){for(var o=0,s=n.length;o<s;)if(i!=null||!t)i=i[n[o++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(za(n)||Oh.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){Q1(Array.isArray(e)?e:Eu(e),t,n)}};function Sl(e){return Df.get(e)||Df.set(e,Eu(e).map(function(t){return t.replace(W1,"$2")}))}function Eu(e){return e.match(U1)||[""]}function Q1(e,t,n){var r=e.length,i,o,s,l;for(o=0;o<r;o++)i=e[o],i&&(G1(i)&&(i='"'+i+'"'),l=za(i),s=!l&&/^\d+$/.test(i),t.call(n,i,l,s,o,e))}function za(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function K1(e){return e.match(B1)&&!e.match(Oh)}function Y1(e){return H1.test(e)}function G1(e){return!za(e)&&(K1(e)||Y1(e))}const Z1=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Os=e=>e.match(Z1)||[],zs=e=>e[0].toUpperCase()+e.slice(1),Aa=(e,t)=>Os(e).join(t).toLowerCase(),zh=e=>Os(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),X1=e=>zs(zh(e)),q1=e=>Aa(e,"_"),J1=e=>Aa(e,"-"),ex=e=>zs(Aa(e," ")),tx=e=>Os(e).map(zs).join(" ");var kl={words:Os,upperFirst:zs,camelCase:zh,pascalCase:X1,snakeCase:q1,kebabCase:J1,sentenceCase:ex,titleCase:tx},Ra={exports:{}};Ra.exports=function(e){return Ah(nx(e),e)};Ra.exports.array=Ah;function Ah(e,t){var n=e.length,r=new Array(n),i={},o=n,s=rx(t),l=ix(e);for(t.forEach(function(a){if(!l.has(a[0])||!l.has(a[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});o--;)i[o]||u(e[o],o,new Set);return r;function u(a,h,p){if(p.has(a)){var f;try{f=", node was:"+JSON.stringify(a)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!l.has(a))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(a));if(!i[h]){i[h]=!0;var v=s.get(a)||new Set;if(v=Array.from(v),h=v.length){p.add(a);do{var S=v[--h];u(S,l.get(S),p)}while(h);p.delete(a)}r[--n]=a}}}function nx(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function rx(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function ix(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var ox=Ra.exports;const sx=Cu(ox),lx=Object.prototype.toString,ux=Error.prototype.toString,ax=RegExp.prototype.toString,cx=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",fx=/^Symbol\((.*)\)(.*)$/;function dx(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function zf(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return dx(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return cx.call(e).replace(fx,"Symbol($1)");const r=lx.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+ux.call(e)+"]":r==="RegExp"?ax.call(e):null}function vn(e,t){let n=zf(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let o=zf(this[r],t);return o!==null?o:i},2)}function Rh(e){return e==null?[]:[].concat(e)}let Lh,px=/\$\{\s*(\w+)\s*\}/g;Lh=Symbol.toStringTag;class We extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(px,(i,o)=>vn(n[o])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i,o){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[Lh]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Rh(t).forEach(s=>{if(We.isError(s)){this.errors.push(...s.errors);const l=s.inner.length?s.inner:[s];this.inner.push(...l)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!o&&Error.captureStackTrace&&Error.captureStackTrace(this,We)}}let Tt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${vn(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${vn(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${vn(n,!0)}\``+i}},yt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},hx={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},_u={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},mx={isValue:"${path} field must be ${value}"},$u={noUnknown:"${path} field has unspecified keys: ${unknown}"},gx={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},yx={notType:e=>{const{path:t,value:n,spec:r}=e,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${vn(n,!0)}\``;if(n.length>i)return`${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${vn(n,!0)}\``}return We.formatError(Tt.notType,e)}};Object.assign(Object.create(null),{mixed:Tt,string:yt,number:hx,date:_u,object:$u,array:gx,boolean:mx,tuple:yx});const La=e=>e&&e.__isYupSchema__;class ls{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:o}=n,s=typeof r=="function"?r:(...l)=>l.every(u=>u===r);return new ls(t,(l,u)=>{var a;let h=s(...l)?i:o;return(a=h==null?void 0:h(u))!=null?a:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(o=>o.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!La(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const ro={context:"$",value:"."};class Qn{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===ro.context,this.isValue=this.key[0]===ro.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?ro.context:this.isValue?ro.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&An.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Qn.prototype.__isYupRef=!0;const Dn=e=>e==null;function Jn(e){function t({value:n,path:r="",options:i,originalValue:o,schema:s},l,u){const{name:a,test:h,params:p,message:f,skipAbsent:v}=e;let{parent:S,context:E,abortEarly:I=s.spec.abortEarly,disableStackTrace:g=s.spec.disableStackTrace}=i;function c(H){return Qn.isRef(H)?H.getValue(n,S,E):H}function m(H={}){var Q;const V=Object.assign({value:n,originalValue:o,label:s.spec.label,path:H.path||r,spec:s.spec},p,H.params);for(const me of Object.keys(V))V[me]=c(V[me]);const ee=new We(We.formatError(H.message||f,V),n,V.path,H.type||a,(Q=H.disableStackTrace)!=null?Q:g);return ee.params=V,ee}const w=I?l:u;let _={path:r,parent:S,type:a,from:i.from,createError:m,resolve:c,options:i,originalValue:o,schema:s};const j=H=>{We.isError(H)?w(H):H?u(null):w(m())},$=H=>{We.isError(H)?w(H):l(H)};if(v&&Dn(n))return j(!0);let W;try{var U;if(W=h.call(_,n,_),typeof((U=W)==null?void 0:U.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${_.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(W).then(j,$)}}catch(H){$(H);return}j(W)}return t.OPTIONS=e,t}function vx(e,t,n,r=n){let i,o,s;return t?(An.forEach(t,(l,u,a)=>{let h=u?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:i,value:n});let p=e.type==="tuple",f=a?parseInt(h,10):0;if(e.innerType||p){if(p&&!a)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${s}" must contain an index to the tuple element, e.g. "${s}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=p?e.spec.types[f]:e.innerType}if(!a){if(!e.fields||!e.fields[h])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${s} which is a type: "${e.type}")`);i=n,n=n&&n[h],e=e.fields[h]}o=h,s=u?"["+l+"]":"."+l}),{schema:e,parent:i,parentPath:o}):{parent:i,parentPath:t,schema:e}}class us extends Set{describe(){const t=[];for(const n of this.values())t.push(Qn.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new us(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function hr(e,t=new Map){if(La(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=hr(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,hr(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(hr(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=hr(i,t)}else throw Error(`Unable to clone ${e}`);return n}class Rt{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new us,this._blacklist=new us,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(Tt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=hr(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(o=>{t.tests.forEach(s=>{o.test(s.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,o)=>o.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i,o;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive,disableStackTrace:(o=t.disableStackTrace)!=null?o:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",o=r._cast(t,n);if(n.assert!==!1&&!r.isType(o)){if(i&&Dn(o))return o;let s=vn(t),l=vn(o);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${s} 
`+(l!==s?`result of cast: ${l}`:""))}return o}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,o)=>o.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:o,originalValue:s=t,strict:l=this.spec.strict}=n,u=t;l||(u=this._cast(u,Object.assign({assert:!1},n)));let a=[];for(let h of Object.values(this.internalTests))h&&a.push(h);this.runTests({path:o,value:u,originalValue:s,options:n,tests:a},r,h=>{if(h.length)return i(h,u);this.runTests({path:o,value:u,originalValue:s,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:o,value:s,originalValue:l,path:u,options:a}=t,h=E=>{i||(i=!0,n(E,s))},p=E=>{i||(i=!0,r(E,s))},f=o.length,v=[];if(!f)return p([]);let S={value:s,originalValue:l,path:u,options:a,schema:this};for(let E=0;E<o.length;E++){const I=o[E];I(S,h,function(c){c&&(Array.isArray(c)?v.push(...c):v.push(c)),--f<=0&&p(v)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:o,options:s}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof l=="number";let a=r[l];const h=Object.assign({},s,{strict:!0,parent:r,value:a,originalValue:o[l],key:void 0,[u?"index":"key"]:l,path:u||l.includes(".")?`${i||""}[${a?l:`"${l}"`}]`:(i?`${i}.`:"")+t});return(p,f,v)=>this.resolve(h)._validate(a,h,f,v)}validate(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((s,l)=>i._validate(t,n,(u,a)=>{We.isError(u)&&(u.value=a),l(u)},(u,a)=>{u.length?l(new We(u,a,void 0,void 0,o)):s(a)}))}validateSync(t,n){var r;let i=this.resolve(Object.assign({},n,{value:t})),o,s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(t,Object.assign({},n,{sync:!0}),(l,u)=>{throw We.isError(l)&&(l.value=u),l},(l,u)=>{if(l.length)throw new We(l,t,void 0,void 0,s);o=u}),o}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(We.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(We.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):hr(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=Jn({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=Jn({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=Tt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=Tt.notNull){return this.nullability(!1,t)}required(t=Tt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=Tt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Jn(n),o=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(s=>!(s.OPTIONS.name===n.name&&(o||s.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Rh(t).map(o=>new Qn(o));return i.forEach(o=>{o.isSibling&&r.deps.push(o.key)}),r.conditions.push(typeof n=="function"?new ls(i,n):ls.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=Jn({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=Tt.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Jn({message:n,name:"oneOf",skipAbsent:!0,test(i){let o=this.schema._whitelist,s=o.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:Array.from(o).join(", "),resolved:s}})}}),r}notOneOf(t,n=Tt.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Jn({message:n,name:"notOneOf",test(i){let o=this.schema._blacklist,s=o.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:Array.from(o).join(", "),resolved:s}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:o,nullable:s}=n.spec;return{meta:i,label:r,optional:o,nullable:s,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,a,h)=>h.findIndex(p=>p.name===u.name)===a)}}}Rt.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])Rt.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:o,schema:s}=vx(this,t,n,r.context);return s[e](i&&i[o],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])Rt.prototype[e]=Rt.prototype.oneOf;for(const e of["not","nope"])Rt.prototype[e]=Rt.prototype.notOneOf;let xx=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,wx=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Sx=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,kx=e=>Dn(e)||e===e.trim(),Ex={}.toString();function $o(){return new Ih}class Ih extends Rt{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===Ex?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||Tt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=yt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=yt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=yt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,o;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:o}=n:i=n),this.test({name:o||"matches",message:i||yt.matches,params:{regex:t},skipAbsent:!0,test:s=>s===""&&r||s.search(t)!==-1})}email(t=yt.email){return this.matches(xx,{name:"email",message:t,excludeEmptyString:!0})}url(t=yt.url){return this.matches(wx,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=yt.uuid){return this.matches(Sx,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=yt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:kx})}lowercase(t=yt.lowercase){return this.transform(n=>Dn(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Dn(n)||n===n.toLowerCase()})}uppercase(t=yt.uppercase){return this.transform(n=>Dn(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Dn(n)||n===n.toUpperCase()})}}$o.prototype=Ih.prototype;const _x=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function It(e,t=0){return Number(e)||t}function $x(e){const t=_x.exec(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;const n={year:It(t[1]),month:It(t[2],1)-1,day:It(t[3],1),hour:It(t[4]),minute:It(t[5]),second:It(t[6]),millisecond:t[7]?It(t[7].substring(0,3)):0,z:t[8]||void 0,plusMinus:t[9]||void 0,hourOffset:It(t[10]),minuteOffset:It(t[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let Cx=new Date(""),jx=e=>Object.prototype.toString.call(e)==="[object Date]";class As extends Rt{constructor(){super({type:"date",check(t){return jx(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=$x(t),isNaN(t)?As.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Qn.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=_u.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=_u.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}As.INVALID_DATE=Cx;As.prototype;function Nx(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([s,l])=>`${s}-${l}`));function o(s,l){let u=An.split(s)[0];r.add(u),i.has(`${l}-${u}`)||n.push([l,u])}for(const s of Object.keys(e)){let l=e[s];r.add(s),Qn.isRef(l)&&l.isSibling?o(l.path,s):La(l)&&"deps"in l&&l.deps.forEach(u=>o(u,s))}return sx.array(Array.from(r),n).reverse()}function Af(e,t){let n=1/0;return e.some((r,i)=>{var o;if((o=t.path)!=null&&o.includes(r))return n=i,!0}),n}function Mh(e){return(t,n)=>Af(e,t)-Af(e,n)}const Fx=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function Co(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=Co(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=Co(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(Co)}):"optional"in e?e.optional():e}const Tx=(e,t)=>{const n=[...An.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=An.getter(An.join(n),!0)(e);return!!(i&&r in i)};let Rf=e=>Object.prototype.toString.call(e)==="[object Object]";function Dx(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const Px=Mh([]);function bh(e){return new Vh(e)}class Vh extends Rt{constructor(t){super({type:"object",check(n){return Rf(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=Px,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let o=this.fields,s=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(i).filter(p=>!this._nodes.includes(p))),u={},a=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),h=!1;for(const p of l){let f=o[p],v=p in i;if(f){let S,E=i[p];a.path=(n.path?`${n.path}.`:"")+p,f=f.resolve({value:E,context:n.context,parent:u});let I=f instanceof Rt?f.spec:void 0,g=I==null?void 0:I.strict;if(I!=null&&I.strip){h=h||p in i;continue}S=!n.__validating||!g?f.cast(i[p],a):i[p],S!==void 0&&(u[p]=S)}else v&&!s&&(u[p]=i[p]);(v!==p in u||u[p]!==i[p])&&(h=!0)}return h?u:i}_validate(t,n={},r,i){let{from:o=[],originalValue:s=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:s},...o],n.__validating=!0,n.originalValue=s,super._validate(t,n,r,(u,a)=>{if(!l||!Rf(a)){i(u,a);return}s=s||a;let h=[];for(let p of this._nodes){let f=this.fields[p];!f||Qn.isRef(f)||h.push(f.asNestedTest({options:n,key:p,parent:a,parentPath:n.path,originalParent:s}))}this.runTests({tests:h,value:a,originalValue:s,options:n},r,p=>{i(p.sort(this._sortErrors).concat(u),a)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,o]of Object.entries(this.fields)){const s=r[i];r[i]=s===void 0?o:s}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const o=this.fields[r];let s=t;(i=s)!=null&&i.value&&(s=Object.assign({},s,{parent:s.value,value:s.value[r]})),n[r]=o&&"getDefault"in o?o.getDefault(s):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=Nx(t,n),r._sortErrors=Mh(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return Co(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>t.includes(r)&&t.includes(i)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let i=An.getter(t,!0);return this.transform(o=>{if(!o)return o;let s=o;return Tx(o,t)&&(s=Object.assign({},o),r||delete s[t],s[n]=i(o)),s})}json(){return this.transform(Fx)}noUnknown(t=!0,n=$u.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const o=Dx(this.schema,i);return!t||o.length===0||this.createError({params:{unknown:o.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=$u.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(kl.camelCase)}snakeCase(){return this.transformKeys(kl.snakeCase)}constantCase(){return this.transformKeys(t=>kl.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[o,s]of Object.entries(n.fields)){var i;let l=t;(i=l)!=null&&i.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[o]})),r.fields[o]=s.describe(l)}return r}}bh.prototype=Vh.prototype;const Ox=bh({name:$o().matches(/^[A-Za-z\s]+$/,"Name should contain only letters and spaces").test("two-words","Name should consist of exactly two words",e=>e.split(" ").filter(n=>n.trim()!=="").length===2).min(3,"Name should be at least 3 characters").max(50,"Full name should not exceed 50 characters").required(),email:$o().test(e=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)).required(),phone:$o().test(e=>/^380\d{9}$/.test(e)).required()}).required(),zx=()=>{const{register:e,handleSubmit:t,reset:n,formState:{errors:r}}=L1({resolver:V1(Ox)}),i=o=>(console.log(o),n());return d.jsx(hy,{shouldForwardProp:o=>o!=="error",children:d.jsxs(m1,{onSubmit:t(i),children:[d.jsxs(no,{children:["* Full name:",d.jsx(hl,{type:"text",placeholder:"John Rosie",error:r.name,...e("name",{required:!0})}),r.name&&d.jsx(ml,{children:"Wrong Fullname"})]}),d.jsxs(no,{children:["* E-mail:",d.jsx(hl,{type:"email",placeholder:"johnrosie@gmail.com",error:r.email,...e("email",{required:!0})}),r.email&&d.jsx(ml,{children:"Wrong Email"})]}),d.jsxs(no,{children:["* Phone:",d.jsx(hl,{type:"number",placeholder:"380961234567",error:r.phone,...e("phone",{required:!0})}),r.phone&&d.jsx(ml,{children:"Wrong Phone"})]}),d.jsxs(no,{children:["Message:",d.jsx(g1,{placeholder:"My message....",...e("message",{required:!1})})]}),d.jsxs(y1,{type:"submit",children:["Send",d.jsx("span",{children:d.jsx(X,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})})},Ax=()=>d.jsxs(c1,{id:"contact-us",children:[d.jsx(f1,{children:"Contact us"}),d.jsxs(d1,{children:[d.jsx(v1,{}),d.jsx(zx,{})]})]}),Rx=()=>d.jsxs(nv,{children:[d.jsx(Cv,{}),d.jsx(hv,{}),d.jsx(Tv,{}),d.jsx(Yv,{}),d.jsx(a1,{}),d.jsx(Ax,{})]}),Lx=C.footer`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  @media ${R} {
    gap: 24px;
  }

  &::before {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;

    background-color: #97d28b;

    margin-bottom: 24px;

    @media ${R} {
      margin-bottom: 40px;
    }
  }
`,Ix=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Mx=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${R} {
    width: 342px;
  }

  @media ${M} {
    width: 405px;
  }

  & > div {
    display: none;

    @media ${R} {
      display: flex;
    }
  }
`,bx=C.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 500px;

  line-height: 18px;
  letter-spacing: -0.64px;
  background-color: #97d28b;

  transition: ${({theme:e})=>e.transitionHover};

  &:hover {
    background-color: #173d33;

    & > svg > use {
      stroke: #97d28b;
      transition: ${({theme:e})=>e.transitionHover};
    }
  }

  & > svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    & > use {
      stroke: #173d33;
      transition: ${({theme:e})=>e.transitionHover};
    }
  }
`,Lf=C.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    margin: 24px auto;
  }

  @media ${R} {
    display: none;
  }
`,io=C.a`
  & > svg {
    width: 24px;
    height: 24px;

    & > use {
      stroke: #173d33;
      transition: ${({theme:e})=>e.transitionHover};
    }
  }

  &:hover {
    & > svg > use {
      stroke: #97d28b;
      transition: ${({theme:e})=>e.transitionHover};
    }
  }
`,Vx=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    @media ${R} {
      flex-direction: row;
      justify-content: space-between;
      width: 342px;
      gap: 0;
    }

    @media ${M} {
      width: 405px;
    }
  }
`,Ux=()=>d.jsxs(Lx,{children:[d.jsxs(Ix,{children:[d.jsxs(kh,{href:"/",children:[d.jsx(X,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),d.jsx(X,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),d.jsx(X,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),d.jsxs(Mx,{children:[d.jsxs(Lf,{children:[d.jsx(io,{href:"#",children:d.jsx(X,{iconName:"icon-facebook"})}),d.jsx(io,{href:"#",children:d.jsx(X,{iconName:"icon-instagram"})})]}),d.jsx(bx,{onClick:()=>_y(),children:d.jsx(X,{iconName:"icon-arrow-top"})})]})]}),d.jsxs(Lf,{children:[d.jsx(io,{href:"#",children:d.jsx(X,{iconName:"icon-facebook"})}),d.jsx(io,{href:"#",children:d.jsx(X,{iconName:"icon-instagram"})})]}),d.jsxs(Vx,{children:[d.jsx("p",{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),d.jsxs("div",{children:[d.jsx("p",{children:"office@ecosolution.com"}),d.jsx("p",{children:"ecosolution © 2023"})]})]})]}),Bx=()=>d.jsxs(d.Fragment,{children:[d.jsx(tv,{}),d.jsx(Rx,{}),d.jsx(Ux,{})]}),Hx={main:"FiraSans-Regular",secondary:"Oswald-Regular"},Wx={phone:"(min-width: 480px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)"},Qx={main:"0px 8px 14px rgba(136, 198, 253, 0.19)",secondary:"7px 13px 14px rgba(116, 177, 232, 0.24)"},Kx={xs:"10px",sm:"12px",md:"14px",ml:"16px",lg:"18px",xl:"20px",xxl:"28px",xxxl:"36px",big:"48px",huge:"64px",gigantic:"100px",mega:"164px"},Yx="250ms cubic-bezier(0.4, 0, 0.2, 1)",Gx={colors:{backgroundMain:"#F3F5FA",textMain:"#173D33"},fonts:Hx,media:Wx,boxShadow:Qx,fontSizes:Kx,transitionHover:Yx},Zx="/ecosolution/assets/FiraSans-Regular-GxcdJFZq.woff",Xx="/ecosolution/assets/Oswald-Regular-7O1fX0n8.woff",qx=[{fontFamily:"FiraSans-Regular",fontUrl:`${Zx}`},{fontFamily:"Oswald-Regular",fontUrl:`${Xx}`}],Jx="#4fa94d",ew={"aria-busy":!0,role:"progressbar"},tw=C.div`
  display: ${e=>e.$visible?"flex":"none"};
`,nw="http://www.w3.org/2000/svg",rw=({height:e=80,width:t=80,color:n=Jx,ariaLabel:r="bars-loading",wrapperStyle:i,wrapperClass:o,visible:s=!0})=>d.jsx(tw,{$visible:s,style:{...i},className:o,"data-testid":"bars-loading","aria-label":r,...ew,children:d.jsxs("svg",{width:t,height:e,fill:n,viewBox:"0 0 135 140",xmlns:nw,"data-testid":"bars-svg",children:[d.jsxs("rect",{y:"10",width:"15",height:"120",rx:"6",children:[d.jsx("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),d.jsxs("rect",{x:"30",y:"10",width:"15",height:"120",rx:"6",children:[d.jsx("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),d.jsxs("rect",{x:"60",width:"15",height:"140",rx:"6",children:[d.jsx("animate",{attributeName:"height",begin:"0s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"y",begin:"0s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),d.jsxs("rect",{x:"90",y:"10",width:"15",height:"120",rx:"6",children:[d.jsx("animate",{attributeName:"height",begin:"0.25s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"y",begin:"0.25s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]}),d.jsxs("rect",{x:"120",y:"10",width:"15",height:"120",rx:"6",children:[d.jsx("animate",{attributeName:"height",begin:"0.5s",dur:"1s",values:"120;110;100;90;80;70;60;50;40;140;120",calcMode:"linear",repeatCount:"indefinite"}),d.jsx("animate",{attributeName:"y",begin:"0.5s",dur:"1s",values:"10;15;20;25;30;35;40;45;50;0;10",calcMode:"linear",repeatCount:"indefinite"})]})]})}),vt=242.776657104492,iw=1.6,ow=Ds`
12.5% {
  stroke-dasharray: ${vt*.14}px, ${vt}px;
  stroke-dashoffset: -${vt*.11}px;
}
43.75% {
  stroke-dasharray: ${vt*.35}px, ${vt}px;
  stroke-dashoffset: -${vt*.35}px;
}
100% {
  stroke-dasharray: ${vt*.01}px, ${vt}px;
  stroke-dashoffset: -${vt*.99}px;
}
`;C.path`
  stroke-dasharray: ${vt*.01}px, ${vt};
  stroke-dashoffset: 0;
  animation: ${ow} ${iw}s linear infinite;
`;const sw=Ds`
to {
   transform: rotate(360deg);
 }
`;C.svg`
  animation: ${sw} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;C.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const lw=Ds`
to {
   stroke-dashoffset: 136;
 }
`;C.polygon`
  stroke-dasharray: 17;
  animation: ${lw} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;C.svg`
  transform-origin: 50% 65%;
`;function uw(){return yg(qx)?d.jsxs(vy,{theme:Gx,children:[d.jsx($y,{}),d.jsx(Bx,{})]}):d.jsx("div",{style:{position:"absolute",top:"50%",left:"50%"},children:d.jsx(rw,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}El.createRoot(document.getElementById("root")).render(d.jsx(ue.StrictMode,{children:d.jsx(uw,{})}));
