(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gc={exports:{}},Uo={},Xc={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pi=Symbol.for("react.element"),Hp=Symbol.for("react.portal"),Wp=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),Kp=Symbol.for("react.profiler"),Yp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Zp=Symbol.for("react.suspense"),qp=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),la=Symbol.iterator;function bp(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var Zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qc=Object.assign,Jc={};function xr(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||Zc}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bc(){}bc.prototype=xr.prototype;function Xs(e,t,n){this.props=e,this.context=t,this.refs=Jc,this.updater=n||Zc}var Zs=Xs.prototype=new bc;Zs.constructor=Xs;qc(Zs,xr.prototype);Zs.isPureReactComponent=!0;var sa=Array.isArray,ef=Object.prototype.hasOwnProperty,qs={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:pi,type:e,key:o,ref:l,props:i,_owner:qs.current}}function eh(e,t){return{$$typeof:pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Js(e){return typeof e=="object"&&e!==null&&e.$$typeof===pi}function th(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ua=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?th(""+e.key):t.toString(36)}function Hi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pi:case Hp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+dl(l,0):r,sa(i)?(n="",e!=null&&(n=e.replace(ua,"$&/")+"/"),Hi(i,t,n,"",function(c){return c})):i!=null&&(Js(i)&&(i=eh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ua,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",sa(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+dl(o,s);l+=Hi(o,t,n,u,i)}else if(u=bp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+dl(o,s++),l+=Hi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Si(e,t,n){if(e==null)return e;var r=[],i=0;return Hi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Wi={transition:null},rh={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:qs};Y.Children={map:Si,forEach:function(e,t,n){Si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Si(e,function(){t++}),t},toArray:function(e){return Si(e,function(t){return t})||[]},only:function(e){if(!Js(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=xr;Y.Fragment=Wp;Y.Profiler=Kp;Y.PureComponent=Xs;Y.StrictMode=Qp;Y.Suspense=Zp;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=qs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ef.call(t,u)&&!tf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:pi,type:e.type,key:i,ref:o,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:Gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yp,_context:e},e.Consumer=e};Y.createElement=nf;Y.createFactory=function(e){var t=nf.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Xp,render:e}};Y.isValidElement=Js;Y.lazy=function(e){return{$$typeof:Jp,_payload:{_status:-1,_result:e},_init:nh}};Y.memo=function(e,t){return{$$typeof:qp,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Be.current.useCallback(e,t)};Y.useContext=function(e){return Be.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Be.current.useEffect(e,t)};Y.useId=function(){return Be.current.useId()};Y.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Be.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};Y.useRef=function(e){return Be.current.useRef(e)};Y.useState=function(e){return Be.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Be.current.useTransition()};Y.version="18.2.0";Xc.exports=Y;var he=Xc.exports;const se=Yc(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih=he,oh=Symbol.for("react.element"),lh=Symbol.for("react.fragment"),sh=Object.prototype.hasOwnProperty,uh=ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ah={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)sh.call(t,r)&&!ah.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:oh,type:e,key:o,ref:l,props:i,_owner:uh.current}}Uo.Fragment=lh;Uo.jsx=rf;Uo.jsxs=rf;Gc.exports=Uo;var d=Gc.exports,Xl={},of={exports:{}},nt={},lf={exports:{}},sf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,O){var V=z.length;z.push(O);e:for(;0<V;){var G=V-1>>>1,oe=z[G];if(0<i(oe,O))z[G]=O,z[V]=oe,V=G;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var O=z[0],V=z.pop();if(V!==O){z[0]=V;e:for(var G=0,oe=z.length,pt=oe>>>1;G<pt;){var He=2*(G+1)-1,it=z[He],We=He+1,Qe=z[We];if(0>i(it,V))We<oe&&0>i(Qe,it)?(z[G]=Qe,z[We]=V,G=We):(z[G]=it,z[He]=V,G=He);else if(We<oe&&0>i(Qe,V))z[G]=Qe,z[We]=V,G=We;else break e}}return O}function i(z,O){var V=z.sortIndex-O.sortIndex;return V!==0?V:z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],y=1,g=null,m=3,w=!1,k=!1,C=!1,U=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=z)r(c),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(c)}}function x(z){if(C=!1,f(z),!k)if(n(u)!==null)k=!0,_e(E);else{var O=n(c);O!==null&&Ce(x,O.startTime-z)}}function E(z,O){k=!1,C&&(C=!1,h(L),L=-1),w=!0;var V=m;try{for(f(O),g=n(u);g!==null&&(!(g.expirationTime>O)||z&&!ae());){var G=g.callback;if(typeof G=="function"){g.callback=null,m=g.priorityLevel;var oe=G(g.expirationTime<=O);O=e.unstable_now(),typeof oe=="function"?g.callback=oe:g===n(u)&&r(u),f(O)}else r(u);g=n(u)}if(g!==null)var pt=!0;else{var He=n(c);He!==null&&Ce(x,He.startTime-O),pt=!1}return pt}finally{g=null,m=V,w=!1}}var j=!1,_=null,L=-1,K=5,B=-1;function ae(){return!(e.unstable_now()-B<K)}function Q(){if(_!==null){var z=e.unstable_now();B=z;var O=!0;try{O=_(!0,z)}finally{O?H():(j=!1,_=null)}}else j=!1}var H;if(typeof a=="function")H=function(){a(Q)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,Ee=b.port2;b.port1.onmessage=Q,H=function(){Ee.postMessage(null)}}else H=function(){U(Q,0)};function _e(z){_=z,j||(j=!0,H())}function Ce(z,O){L=U(function(){z(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,_e(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var V=m;m=O;try{return z()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=m;m=z;try{return O()}finally{m=V}},e.unstable_scheduleCallback=function(z,O,V){var G=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?G+V:G):V=G,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,z={id:y++,callback:O,priorityLevel:z,startTime:V,expirationTime:oe,sortIndex:-1},V>G?(z.sortIndex=V,t(c,z),n(u)===null&&z===n(c)&&(C?(h(L),L=-1):C=!0,Ce(x,V-G))):(z.sortIndex=oe,t(u,z),k||w||(k=!0,_e(E))),z},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(z){var O=m;return function(){var V=m;m=O;try{return z.apply(this,arguments)}finally{m=V}}}})(sf);lf.exports=sf;var ch=lf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf=he,tt=ch;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Gr={};function Rn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)af.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zl=Object.prototype.hasOwnProperty,fh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,aa={},ca={};function dh(e){return Zl.call(ca,e)?!0:Zl.call(aa,e)?!1:fh.test(e)?ca[e]=!0:(aa[e]=!0,!1)}function ph(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hh(e,t,n,r){if(t===null||typeof t>"u"||ph(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var bs=/[\-:]([a-z])/g;function eu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bs,eu);Le[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bs,eu);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bs,eu);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function tu(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hh(t,n,i,r)&&(n=null),r||i===null?dh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=uf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),ff=Symbol.for("react.context"),ru=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),df=Symbol.for("react.offscreen"),fa=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=fa&&e[fa]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,pl;function Lr(e){if(pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pl=t&&t[1]||""}return`
`+pl+e}var hl=!1;function ml(e,t){if(!e||hl)return"";hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function mh(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function es(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Bn:return"Portal";case ql:return"Profiler";case nu:return"StrictMode";case Jl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ff:return(e.displayName||"Context")+".Consumer";case cf:return(e._context.displayName||"Context")+".Provider";case ru:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:es(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return es(e(t))}catch{}}return null}function gh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return es(t);case 8:return t===nu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yh(e){var t=pf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){e._valueTracker||(e._valueTracker=yh(e))}function hf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ts(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function da(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mf(e,t){t=t.checked,t!=null&&tu(e,"checked",t,!1)}function ns(e,t){mf(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&rs(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function rs(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ha(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Fr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function gf(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ma(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,vf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vh=["Webkit","ms","Moz","O"];Object.keys(Ar).forEach(function(e){vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ar[t]=Ar[e]})});function xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ar.hasOwnProperty(e)&&Ar[e]?(""+t).trim():t+"px"}function wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var xh=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ls(e,t){if(t){if(xh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function ss(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var us=null;function ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,nr=null,rr=null;function ga(e){if(e=gi(e)){if(typeof as!="function")throw Error($(280));var t=e.stateNode;t&&(t=Yo(t),as(e.stateNode,e.type,t))}}function Sf(e){nr?rr?rr.push(e):rr=[e]:nr=e}function kf(){if(nr){var e=nr,t=rr;if(rr=nr=null,ga(e),t)for(e=0;e<t.length;e++)ga(t[e])}}function Ef(e,t){return e(t)}function _f(){}var gl=!1;function Cf(e,t,n){if(gl)return e(t,n);gl=!0;try{return Ef(e,t,n)}finally{gl=!1,(nr!==null||rr!==null)&&(_f(),kf())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var cs=!1;if(Vt)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){cs=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{cs=!1}function wh(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var Mr=!1,ao=null,co=!1,fs=null,Sh={onError:function(e){Mr=!0,ao=e}};function kh(e,t,n,r,i,o,l,s,u){Mr=!1,ao=null,wh.apply(Sh,arguments)}function Eh(e,t,n,r,i,o,l,s,u){if(kh.apply(this,arguments),Mr){if(Mr){var c=ao;Mr=!1,ao=null}else throw Error($(198));co||(co=!0,fs=c)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ya(e){if(In(e)!==e)throw Error($(188))}function _h(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ya(i),e;if(o===r)return ya(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function jf(e){return e=_h(e),e!==null?Nf(e):null}function Nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nf(e);if(t!==null)return t;e=e.sibling}return null}var Pf=tt.unstable_scheduleCallback,va=tt.unstable_cancelCallback,Ch=tt.unstable_shouldYield,$h=tt.unstable_requestPaint,ge=tt.unstable_now,jh=tt.unstable_getCurrentPriorityLevel,lu=tt.unstable_ImmediatePriority,zf=tt.unstable_UserBlockingPriority,fo=tt.unstable_NormalPriority,Nh=tt.unstable_LowPriority,Df=tt.unstable_IdlePriority,Ho=null,zt=null;function Ph(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Th,zh=Math.log,Dh=Math.LN2;function Th(e){return e>>>=0,e===0?32:31-(zh(e)/Dh|0)|0}var Ci=64,$i=4194304;function Rr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Rr(s):(o&=l,o!==0&&(r=Rr(o)))}else l=n&~i,l!==0?r=Rr(l):o!==0&&(r=Rr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function Lh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=Lh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Tf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Rh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function su(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ff,uu,Rf,If,Of,ps=!1,ji=[],tn=null,nn=null,rn=null,qr=new Map,Jr=new Map,Xt=[],Ih="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xa(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":qr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jr.delete(t.pointerId)}}function Cr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Oh(e,t,n,r,i){switch(t){case"focusin":return tn=Cr(tn,e,t,n,r,i),!0;case"dragenter":return nn=Cr(nn,e,t,n,r,i),!0;case"mouseover":return rn=Cr(rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return qr.set(o,Cr(qr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Jr.set(o,Cr(Jr.get(o)||null,e,t,n,r,i)),!0}return!1}function Af(e){var t=wn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=$f(n),t!==null){e.blockedOn=t,Of(e.priority,function(){Rf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);us=r,n.target.dispatchEvent(r),us=null}else return t=gi(n),t!==null&&uu(t),e.blockedOn=n,!1;t.shift()}return!0}function wa(e,t,n){Qi(e)&&n.delete(t)}function Ah(){ps=!1,tn!==null&&Qi(tn)&&(tn=null),nn!==null&&Qi(nn)&&(nn=null),rn!==null&&Qi(rn)&&(rn=null),qr.forEach(wa),Jr.forEach(wa)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,ps||(ps=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Ah)))}function br(e){function t(i){return $r(i,e)}if(0<ji.length){$r(ji[0],e);for(var n=1;n<ji.length;n++){var r=ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&$r(tn,e),nn!==null&&$r(nn,e),rn!==null&&$r(rn,e),qr.forEach(t),Jr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Af(n),n.blockedOn===null&&Xt.shift()}var ir=Wt.ReactCurrentBatchConfig,ho=!0;function Mh(e,t,n,r){var i=J,o=ir.transition;ir.transition=null;try{J=1,au(e,t,n,r)}finally{J=i,ir.transition=o}}function Vh(e,t,n,r){var i=J,o=ir.transition;ir.transition=null;try{J=4,au(e,t,n,r)}finally{J=i,ir.transition=o}}function au(e,t,n,r){if(ho){var i=hs(e,t,n,r);if(i===null)jl(e,t,r,mo,n),xa(e,r);else if(Oh(i,e,t,n,r))r.stopPropagation();else if(xa(e,r),t&4&&-1<Ih.indexOf(e)){for(;i!==null;){var o=gi(i);if(o!==null&&Ff(o),o=hs(e,t,n,r),o===null&&jl(e,t,r,mo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var mo=null;function hs(e,t,n,r){if(mo=null,e=ou(r),e=wn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$f(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function Mf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jh()){case lu:return 1;case zf:return 4;case fo:case Nh:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Jt=null,cu=null,Ki=null;function Vf(){if(Ki)return Ki;var e,t=cu,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ki=i.slice(e,1<r?1-r:void 0)}function Yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Sa(){return!1}function rt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:Sa,this.isPropagationStopped=Sa,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=rt(wr),mi=de({},wr,{view:0,detail:0}),Bh=rt(mi),vl,xl,jr,Wo=de({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(vl=e.screenX-jr.screenX,xl=e.screenY-jr.screenY):xl=vl=0,jr=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),ka=rt(Wo),Uh=de({},Wo,{dataTransfer:0}),Hh=rt(Uh),Wh=de({},mi,{relatedTarget:0}),wl=rt(Wh),Qh=de({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kh=rt(Qh),Yh=de({},wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gh=rt(Yh),Xh=de({},wr,{data:0}),Ea=rt(Xh),Zh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jh[e])?!!t[e]:!1}function du(){return bh}var em=de({},mi,{key:function(e){if(e.key){var t=Zh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?Yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tm=rt(em),nm=de({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=rt(nm),rm=de({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),im=rt(rm),om=de({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lm=rt(om),sm=de({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),um=rt(sm),am=[9,13,27,32],pu=Vt&&"CompositionEvent"in window,Vr=null;Vt&&"documentMode"in document&&(Vr=document.documentMode);var cm=Vt&&"TextEvent"in window&&!Vr,Bf=Vt&&(!pu||Vr&&8<Vr&&11>=Vr),Ca=" ",$a=!1;function Uf(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function fm(e,t){switch(e){case"compositionend":return Hf(t);case"keypress":return t.which!==32?null:($a=!0,Ca);case"textInput":return e=t.data,e===Ca&&$a?null:e;default:return null}}function dm(e,t){if(Hn)return e==="compositionend"||!pu&&Uf(e,t)?(e=Vf(),Ki=cu=Jt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bf&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function Wf(e,t,n,r){Sf(r),t=go(t,"onChange"),0<t.length&&(n=new fu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,ei=null;function hm(e){td(e,0)}function Qo(e){var t=Kn(e);if(hf(t))return e}function mm(e,t){if(e==="change")return t}var Qf=!1;if(Vt){var Sl;if(Vt){var kl="oninput"in document;if(!kl){var Na=document.createElement("div");Na.setAttribute("oninput","return;"),kl=typeof Na.oninput=="function"}Sl=kl}else Sl=!1;Qf=Sl&&(!document.documentMode||9<document.documentMode)}function Pa(){Br&&(Br.detachEvent("onpropertychange",Kf),ei=Br=null)}function Kf(e){if(e.propertyName==="value"&&Qo(ei)){var t=[];Wf(t,ei,e,ou(e)),Cf(hm,t)}}function gm(e,t,n){e==="focusin"?(Pa(),Br=t,ei=n,Br.attachEvent("onpropertychange",Kf)):e==="focusout"&&Pa()}function ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(ei)}function vm(e,t){if(e==="click")return Qo(t)}function xm(e,t){if(e==="input"||e==="change")return Qo(t)}function wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:wm;function ti(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zl.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Da(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function Yf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gf(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=Gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Yf(n.ownerDocument.documentElement,n)){if(r!==null&&hu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Da(n,o);var l=Da(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var km=Vt&&"documentMode"in document&&11>=document.documentMode,Wn=null,ms=null,Ur=null,gs=!1;function Ta(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gs||Wn==null||Wn!==uo(r)||(r=Wn,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ti(Ur,r)||(Ur=r,r=go(ms,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},El={},Xf={};Vt&&(Xf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Ko(e){if(El[e])return El[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xf)return El[e]=t[n];return e}var Zf=Ko("animationend"),qf=Ko("animationiteration"),Jf=Ko("animationstart"),bf=Ko("transitionend"),ed=new Map,La="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){ed.set(e,t),Rn(t,[e])}for(var _l=0;_l<La.length;_l++){var Cl=La[_l],Em=Cl.toLowerCase(),_m=Cl[0].toUpperCase()+Cl.slice(1);pn(Em,"on"+_m)}pn(Zf,"onAnimationEnd");pn(qf,"onAnimationIteration");pn(Jf,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(bf,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Eh(r,t,void 0,e),e.currentTarget=null}function td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Fa(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Fa(i,s,c),o=u}}}if(co)throw e=fs,co=!1,fs=null,e}function ne(e,t){var n=t[Ss];n===void 0&&(n=t[Ss]=new Set);var r=e+"__bubble";n.has(r)||(nd(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),nd(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[zi]){e[zi]=!0,af.forEach(function(n){n!=="selectionchange"&&(Cm.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,$l("selectionchange",!1,t))}}function nd(e,t,n,r){switch(Mf(t)){case 1:var i=Mh;break;case 4:i=Vh;break;default:i=au}n=i.bind(null,t,n,e),i=void 0,!cs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=wn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Cf(function(){var c=o,y=ou(n),g=[];e:{var m=ed.get(e);if(m!==void 0){var w=fu,k=e;switch(e){case"keypress":if(Yi(n)===0)break e;case"keydown":case"keyup":w=tm;break;case"focusin":k="focus",w=wl;break;case"focusout":k="blur",w=wl;break;case"beforeblur":case"afterblur":w=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=im;break;case Zf:case qf:case Jf:w=Kh;break;case bf:w=lm;break;case"scroll":w=Bh;break;case"wheel":w=um;break;case"copy":case"cut":case"paste":w=Gh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=_a}var C=(t&4)!==0,U=!C&&e==="scroll",h=C?m!==null?m+"Capture":null:m;C=[];for(var a=c,f;a!==null;){f=a;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,h!==null&&(x=Zr(a,h),x!=null&&C.push(ri(a,x,f)))),U)break;a=a.return}0<C.length&&(m=new w(m,k,null,n,y),g.push({event:m,listeners:C}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==us&&(k=n.relatedTarget||n.fromElement)&&(wn(k)||k[Bt]))break e;if((w||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?wn(k):null,k!==null&&(U=In(k),k!==U||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(C=ka,x="onMouseLeave",h="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(C=_a,x="onPointerLeave",h="onPointerEnter",a="pointer"),U=w==null?m:Kn(w),f=k==null?m:Kn(k),m=new C(x,a+"leave",w,n,y),m.target=U,m.relatedTarget=f,x=null,wn(y)===c&&(C=new C(h,a+"enter",k,n,y),C.target=f,C.relatedTarget=U,x=C),U=x,w&&k)t:{for(C=w,h=k,a=0,f=C;f;f=An(f))a++;for(f=0,x=h;x;x=An(x))f++;for(;0<a-f;)C=An(C),a--;for(;0<f-a;)h=An(h),f--;for(;a--;){if(C===h||h!==null&&C===h.alternate)break t;C=An(C),h=An(h)}C=null}else C=null;w!==null&&Ra(g,m,w,C,!1),k!==null&&U!==null&&Ra(g,U,k,C,!0)}}e:{if(m=c?Kn(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=mm;else if(ja(m))if(Qf)E=xm;else{E=ym;var j=gm}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=vm);if(E&&(E=E(e,c))){Wf(g,E,n,y);break e}j&&j(e,m,c),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&rs(m,"number",m.value)}switch(j=c?Kn(c):window,e){case"focusin":(ja(j)||j.contentEditable==="true")&&(Wn=j,ms=c,Ur=null);break;case"focusout":Ur=ms=Wn=null;break;case"mousedown":gs=!0;break;case"contextmenu":case"mouseup":case"dragend":gs=!1,Ta(g,n,y);break;case"selectionchange":if(km)break;case"keydown":case"keyup":Ta(g,n,y)}var _;if(pu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Hn?Uf(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Bf&&n.locale!=="ko"&&(Hn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Hn&&(_=Vf()):(Jt=y,cu="value"in Jt?Jt.value:Jt.textContent,Hn=!0)),j=go(c,L),0<j.length&&(L=new Ea(L,e,null,n,y),g.push({event:L,listeners:j}),_?L.data=_:(_=Hf(n),_!==null&&(L.data=_)))),(_=cm?fm(e,n):dm(e,n))&&(c=go(c,"onBeforeInput"),0<c.length&&(y=new Ea("onBeforeInput","beforeinput",null,n,y),g.push({event:y,listeners:c}),y.data=_))}td(g,t)})}function ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(ri(e,o,i)),o=Zr(e,t),o!=null&&r.push(ri(e,o,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ra(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Zr(n,o),u!=null&&l.unshift(ri(n,u,s))):i||(u=Zr(n,o),u!=null&&l.push(ri(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var $m=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Ia(e){return(typeof e=="string"?e:""+e).replace($m,`
`).replace(jm,"")}function Di(e,t,n){if(t=Ia(t),Ia(e)!==t&&n)throw Error($(425))}function yo(){}var ys=null,vs=null;function xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ws=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Oa=typeof Promise=="function"?Promise:void 0,Pm=typeof queueMicrotask=="function"?queueMicrotask:typeof Oa<"u"?function(e){return Oa.resolve(null).then(e).catch(zm)}:ws;function zm(e){setTimeout(function(){throw e})}function Nl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),br(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);br(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Aa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Sr,ii="__reactProps$"+Sr,Bt="__reactContainer$"+Sr,Ss="__reactEvents$"+Sr,Dm="__reactListeners$"+Sr,Tm="__reactHandles$"+Sr;function wn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Aa(e);e!==null;){if(n=e[Nt])return n;e=Aa(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[Nt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Yo(e){return e[ii]||null}var ks=[],Yn=-1;function hn(e){return{current:e}}function ie(e){0>Yn||(e.current=ks[Yn],ks[Yn]=null,Yn--)}function te(e,t){Yn++,ks[Yn]=e.current,e.current=t}var dn={},Oe=hn(dn),Ge=hn(!1),Nn=dn;function ur(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function vo(){ie(Ge),ie(Oe)}function Ma(e,t,n){if(Oe.current!==dn)throw Error($(168));te(Oe,t),te(Ge,n)}function rd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,gh(e)||"Unknown",i));return de({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Nn=Oe.current,te(Oe,e),te(Ge,Ge.current),!0}function Va(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=rd(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,ie(Ge),ie(Oe),te(Oe,e)):ie(Ge),te(Ge,n)}var It=null,Go=!1,Pl=!1;function id(e){It===null?It=[e]:It.push(e)}function Lm(e){Go=!0,id(e)}function mn(){if(!Pl&&It!==null){Pl=!0;var e=0,t=J;try{var n=It;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Go=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Pf(lu,mn),i}finally{J=t,Pl=!1}}return null}var Gn=[],Xn=0,wo=null,So=0,lt=[],st=0,Pn=null,Ot=1,At="";function vn(e,t){Gn[Xn++]=So,Gn[Xn++]=wo,wo=e,So=t}function od(e,t,n){lt[st++]=Ot,lt[st++]=At,lt[st++]=Pn,Pn=e;var r=Ot;e=At;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ot=1<<32-xt(t)+i|n<<i|r,At=o+e}else Ot=1<<o|n<<i|r,At=e}function mu(e){e.return!==null&&(vn(e,1),od(e,1,0))}function gu(e){for(;e===wo;)wo=Gn[--Xn],Gn[Xn]=null,So=Gn[--Xn],Gn[Xn]=null;for(;e===Pn;)Pn=lt[--st],lt[st]=null,At=lt[--st],lt[st]=null,Ot=lt[--st],lt[st]=null}var et=null,be=null,ue=!1,yt=null;function ld(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ba(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,be=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Ot,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,be=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if(ue){var t=be;if(t){var n=t;if(!Ba(e,t)){if(Es(e))throw Error($(418));t=on(n.nextSibling);var r=et;t&&Ba(e,t)?ld(r,n):(e.flags=e.flags&-4097|2,ue=!1,et=e)}}else{if(Es(e))throw Error($(418));e.flags=e.flags&-4097|2,ue=!1,et=e}}}function Ua(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Ti(e){if(e!==et)return!1;if(!ue)return Ua(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xs(e.type,e.memoizedProps)),t&&(t=be)){if(Es(e))throw sd(),Error($(418));for(;t;)ld(e,t),t=on(t.nextSibling)}if(Ua(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=et?on(e.stateNode.nextSibling):null;return!0}function sd(){for(var e=be;e;)e=on(e.nextSibling)}function ar(){be=et=null,ue=!1}function yu(e){yt===null?yt=[e]:yt.push(e)}var Fm=Wt.ReactCurrentBatchConfig;function mt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ko=hn(null),Eo=null,Zn=null,vu=null;function xu(){vu=Zn=Eo=null}function wu(e){var t=ko.current;ie(ko),e._currentValue=t}function Cs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Eo=e,vu=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(vu!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Eo===null)throw Error($(308));Zn=e,Eo.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var Sn=null;function Su(e){Sn===null?Sn=[e]:Sn.push(e)}function ud(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Su(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function ku(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ad(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,Su(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Gt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=c:s.next=c,y.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;l=0,y=c=u=null,s=o;do{var m=s.lane,w=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,C=s;switch(m=t,w=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=de({},g,m);break e;case 2:Gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(c=y=w,u=g):y=y.next=w,l|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(y===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=l,e.lanes=l,e.memoizedState=g}}function Wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var cd=new uf.Component().refs;function $s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xo={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=un(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(wt(t,e,i,r),Gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=un(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(wt(t,e,i,r),Gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=un(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(wt(t,e,r,n),Gi(t,e,r))}};function Qa(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ti(n,r)||!ti(i,o):!0}function fd(e,t,n){var r=!1,i=dn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Xe(t)?Nn:Oe.current,r=t.contextTypes,o=(r=r!=null)?ur(e,i):dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function js(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=cd,ku(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Xe(t)?Nn:Oe.current,i.context=ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($s(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===cd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ya(e){var t=e._init;return t(e._payload)}function dd(e){function t(h,a){if(e){var f=h.deletions;f===null?(h.deletions=[a],h.flags|=16):f.push(a)}}function n(h,a){if(!e)return null;for(;a!==null;)t(h,a),a=a.sibling;return null}function r(h,a){for(h=new Map;a!==null;)a.key!==null?h.set(a.key,a):h.set(a.index,a),a=a.sibling;return h}function i(h,a){return h=an(h,a),h.index=0,h.sibling=null,h}function o(h,a,f){return h.index=f,e?(f=h.alternate,f!==null?(f=f.index,f<a?(h.flags|=2,a):f):(h.flags|=2,a)):(h.flags|=1048576,a)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,a,f,x){return a===null||a.tag!==6?(a=Il(f,h.mode,x),a.return=h,a):(a=i(a,f),a.return=h,a)}function u(h,a,f,x){var E=f.type;return E===Un?y(h,a,f.props.children,x,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Yt&&Ya(E)===a.type)?(x=i(a,f.props),x.ref=Nr(h,a,f),x.return=h,x):(x=eo(f.type,f.key,f.props,null,h.mode,x),x.ref=Nr(h,a,f),x.return=h,x)}function c(h,a,f,x){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Ol(f,h.mode,x),a.return=h,a):(a=i(a,f.children||[]),a.return=h,a)}function y(h,a,f,x,E){return a===null||a.tag!==7?(a=$n(f,h.mode,x,E),a.return=h,a):(a=i(a,f),a.return=h,a)}function g(h,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Il(""+a,h.mode,f),a.return=h,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case ki:return f=eo(a.type,a.key,a.props,null,h.mode,f),f.ref=Nr(h,null,a),f.return=h,f;case Bn:return a=Ol(a,h.mode,f),a.return=h,a;case Yt:var x=a._init;return g(h,x(a._payload),f)}if(Fr(a)||Er(a))return a=$n(a,h.mode,f,null),a.return=h,a;Li(h,a)}return null}function m(h,a,f,x){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(h,a,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ki:return f.key===E?u(h,a,f,x):null;case Bn:return f.key===E?c(h,a,f,x):null;case Yt:return E=f._init,m(h,a,E(f._payload),x)}if(Fr(f)||Er(f))return E!==null?null:y(h,a,f,x,null);Li(h,f)}return null}function w(h,a,f,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(f)||null,s(a,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ki:return h=h.get(x.key===null?f:x.key)||null,u(a,h,x,E);case Bn:return h=h.get(x.key===null?f:x.key)||null,c(a,h,x,E);case Yt:var j=x._init;return w(h,a,f,j(x._payload),E)}if(Fr(x)||Er(x))return h=h.get(f)||null,y(a,h,x,E,null);Li(a,x)}return null}function k(h,a,f,x){for(var E=null,j=null,_=a,L=a=0,K=null;_!==null&&L<f.length;L++){_.index>L?(K=_,_=null):K=_.sibling;var B=m(h,_,f[L],x);if(B===null){_===null&&(_=K);break}e&&_&&B.alternate===null&&t(h,_),a=o(B,a,L),j===null?E=B:j.sibling=B,j=B,_=K}if(L===f.length)return n(h,_),ue&&vn(h,L),E;if(_===null){for(;L<f.length;L++)_=g(h,f[L],x),_!==null&&(a=o(_,a,L),j===null?E=_:j.sibling=_,j=_);return ue&&vn(h,L),E}for(_=r(h,_);L<f.length;L++)K=w(_,h,L,f[L],x),K!==null&&(e&&K.alternate!==null&&_.delete(K.key===null?L:K.key),a=o(K,a,L),j===null?E=K:j.sibling=K,j=K);return e&&_.forEach(function(ae){return t(h,ae)}),ue&&vn(h,L),E}function C(h,a,f,x){var E=Er(f);if(typeof E!="function")throw Error($(150));if(f=E.call(f),f==null)throw Error($(151));for(var j=E=null,_=a,L=a=0,K=null,B=f.next();_!==null&&!B.done;L++,B=f.next()){_.index>L?(K=_,_=null):K=_.sibling;var ae=m(h,_,B.value,x);if(ae===null){_===null&&(_=K);break}e&&_&&ae.alternate===null&&t(h,_),a=o(ae,a,L),j===null?E=ae:j.sibling=ae,j=ae,_=K}if(B.done)return n(h,_),ue&&vn(h,L),E;if(_===null){for(;!B.done;L++,B=f.next())B=g(h,B.value,x),B!==null&&(a=o(B,a,L),j===null?E=B:j.sibling=B,j=B);return ue&&vn(h,L),E}for(_=r(h,_);!B.done;L++,B=f.next())B=w(_,h,L,B.value,x),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?L:B.key),a=o(B,a,L),j===null?E=B:j.sibling=B,j=B);return e&&_.forEach(function(Q){return t(h,Q)}),ue&&vn(h,L),E}function U(h,a,f,x){if(typeof f=="object"&&f!==null&&f.type===Un&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ki:e:{for(var E=f.key,j=a;j!==null;){if(j.key===E){if(E=f.type,E===Un){if(j.tag===7){n(h,j.sibling),a=i(j,f.props.children),a.return=h,h=a;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Yt&&Ya(E)===j.type){n(h,j.sibling),a=i(j,f.props),a.ref=Nr(h,j,f),a.return=h,h=a;break e}n(h,j);break}else t(h,j);j=j.sibling}f.type===Un?(a=$n(f.props.children,h.mode,x,f.key),a.return=h,h=a):(x=eo(f.type,f.key,f.props,null,h.mode,x),x.ref=Nr(h,a,f),x.return=h,h=x)}return l(h);case Bn:e:{for(j=f.key;a!==null;){if(a.key===j)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(h,a.sibling),a=i(a,f.children||[]),a.return=h,h=a;break e}else{n(h,a);break}else t(h,a);a=a.sibling}a=Ol(f,h.mode,x),a.return=h,h=a}return l(h);case Yt:return j=f._init,U(h,a,j(f._payload),x)}if(Fr(f))return k(h,a,f,x);if(Er(f))return C(h,a,f,x);Li(h,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(h,a.sibling),a=i(a,f),a.return=h,h=a):(n(h,a),a=Il(f,h.mode,x),a.return=h,h=a),l(h)):n(h,a)}return U}var cr=dd(!0),pd=dd(!1),yi={},Dt=hn(yi),oi=hn(yi),li=hn(yi);function kn(e){if(e===yi)throw Error($(174));return e}function Eu(e,t){switch(te(li,t),te(oi,e),te(Dt,yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=os(t,e)}ie(Dt),te(Dt,t)}function fr(){ie(Dt),ie(oi),ie(li)}function hd(e){kn(li.current);var t=kn(Dt.current),n=os(t,e.type);t!==n&&(te(oi,e),te(Dt,n))}function _u(e){oi.current===e&&(ie(Dt),ie(oi))}var ce=hn(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zl=[];function Cu(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var Xi=Wt.ReactCurrentDispatcher,Dl=Wt.ReactCurrentBatchConfig,zn=0,fe=null,we=null,$e=null,$o=!1,Hr=!1,si=0,Rm=0;function Fe(){throw Error($(321))}function $u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function ju(e,t,n,r,i,o){if(zn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?Mm:Vm,e=n(r,i),Hr){o=0;do{if(Hr=!1,si=0,25<=o)throw Error($(301));o+=1,$e=we=null,t.updateQueue=null,Xi.current=Bm,e=n(r,i)}while(Hr)}if(Xi.current=jo,t=we!==null&&we.next!==null,zn=0,$e=we=fe=null,$o=!1,t)throw Error($(300));return e}function Nu(){var e=si!==0;return si=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?fe.memoizedState=$e=e:$e=$e.next=e,$e}function ft(){if(we===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=$e===null?fe.memoizedState:$e.next;if(t!==null)$e=t,we=e;else{if(e===null)throw Error($(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},$e===null?fe.memoizedState=$e=e:$e=$e.next=e}return $e}function ui(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=ft(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var y=c.lane;if((zn&y)===y)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,fe.lanes|=y,Dn|=y}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,kt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ll(e){var t=ft(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);kt(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function md(){}function gd(e,t){var n=fe,r=ft(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,Pu(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,ai(9,vd.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error($(349));zn&30||yd(n,t,i)}return i}function yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vd(e,t,n,r){t.value=n,t.getSnapshot=r,wd(t)&&Sd(e)}function xd(e,t,n){return n(function(){wd(t)&&Sd(e)})}function wd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function Sd(e){var t=Ut(e,1);t!==null&&wt(t,e,1,-1)}function Ga(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},t.queue=e,e=e.dispatch=Am.bind(null,fe,e),[t.memoizedState,e]}function ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kd(){return ft().memoizedState}function Zi(e,t,n,r){var i=$t();fe.flags|=e,i.memoizedState=ai(1|t,n,void 0,r===void 0?null:r)}function Zo(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(we!==null){var l=we.memoizedState;if(o=l.destroy,r!==null&&$u(r,l.deps)){i.memoizedState=ai(t,n,o,r);return}}fe.flags|=e,i.memoizedState=ai(1|t,n,o,r)}function Xa(e,t){return Zi(8390656,8,e,t)}function Pu(e,t){return Zo(2048,8,e,t)}function Ed(e,t){return Zo(4,2,e,t)}function _d(e,t){return Zo(4,4,e,t)}function Cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $d(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4,4,Cd.bind(null,t,e),n)}function zu(){}function jd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$u(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$u(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pd(e,t,n){return zn&21?(kt(n,t)||(n=Tf(),fe.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function Im(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{J=n,Dl.transition=r}}function zd(){return ft().memoizedState}function Om(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dd(e))Td(t,n);else if(n=ud(e,t,n,r),n!==null){var i=Ve();wt(n,e,r,i),Ld(n,t,r)}}function Am(e,t,n){var r=un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dd(e))Td(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,kt(s,l)){var u=t.interleaved;u===null?(i.next=i,Su(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ud(e,t,i,r),n!==null&&(i=Ve(),wt(n,e,r,i),Ld(n,t,r))}}function Dd(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Td(e,t){Hr=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,su(e,n)}}var jo={readContext:ct,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Mm={readContext:ct,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4194308,4,Cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Om.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Ga,useDebugValue:zu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Ga(!1),t=e[0];return e=Im.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=$t();if(ue){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Pe===null)throw Error($(349));zn&30||yd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xa(xd.bind(null,r,o,e),[e]),r.flags|=2048,ai(9,vd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Pe.identifierPrefix;if(ue){var n=At,r=Ot;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vm={readContext:ct,useCallback:jd,useContext:ct,useEffect:Pu,useImperativeHandle:$d,useInsertionEffect:Ed,useLayoutEffect:_d,useMemo:Nd,useReducer:Tl,useRef:kd,useState:function(){return Tl(ui)},useDebugValue:zu,useDeferredValue:function(e){var t=ft();return Pd(t,we.memoizedState,e)},useTransition:function(){var e=Tl(ui)[0],t=ft().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:gd,useId:zd,unstable_isNewReconciler:!1},Bm={readContext:ct,useCallback:jd,useContext:ct,useEffect:Pu,useImperativeHandle:$d,useInsertionEffect:Ed,useLayoutEffect:_d,useMemo:Nd,useReducer:Ll,useRef:kd,useState:function(){return Ll(ui)},useDebugValue:zu,useDeferredValue:function(e){var t=ft();return we===null?t.memoizedState=e:Pd(t,we.memoizedState,e)},useTransition:function(){var e=Ll(ui)[0],t=ft().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:gd,useId:zd,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=mh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Um=typeof WeakMap=="function"?WeakMap:Map;function Fd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,As=r),Ns(e,t)},n}function Rd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ns(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ns(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Za(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Um;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ng.bind(null,e,t,n),t.then(e,e))}function qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ja(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var Hm=Wt.ReactCurrentOwner,Ye=!1;function Ae(e,t,n,r){t.child=e===null?pd(t,null,n,r):cr(t,e.child,n,r)}function ba(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=ju(e,t,n,r,o,i),n=Nu(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(ue&&n&&mu(t),t.flags|=1,Ae(e,t,r,i),t.child)}function ec(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Id(e,t,o,r,i)):(e=eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ti,n(l,r)&&e.ref===t.ref)return Ht(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function Id(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ti(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Ht(e,t,i)}return Ps(e,t,n,r,i)}function Od(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Jn,Je),Je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Jn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Jn,Je),Je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Jn,Je),Je|=r;return Ae(e,t,i,n),t.child}function Ad(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,r,i){var o=Xe(n)?Nn:Oe.current;return o=ur(t,o),or(t,i),n=ju(e,t,n,r,o,i),r=Nu(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ht(e,t,i)):(ue&&r&&mu(t),t.flags|=1,Ae(e,t,n,i),t.child)}function tc(e,t,n,r,i){if(Xe(n)){var o=!0;xo(t)}else o=!1;if(or(t,i),t.stateNode===null)qi(e,t),fd(t,n,r),js(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ct(c):(c=Xe(n)?Nn:Oe.current,c=ur(t,c));var y=n.getDerivedStateFromProps,g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ka(t,l,r,c),Gt=!1;var m=t.memoizedState;l.state=m,_o(t,r,l,i),u=t.memoizedState,s!==r||m!==u||Ge.current||Gt?(typeof y=="function"&&($s(t,n,y,r),u=t.memoizedState),(s=Gt||Qa(t,n,s,r,m,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ad(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:mt(t.type,s),l.props=c,g=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?Nn:Oe.current,u=ur(t,u));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Ka(t,l,r,u),Gt=!1,m=t.memoizedState,l.state=m,_o(t,r,l,i);var k=t.memoizedState;s!==g||m!==k||Ge.current||Gt?(typeof w=="function"&&($s(t,n,w,r),k=t.memoizedState),(c=Gt||Qa(t,n,c,r,m,k,u)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zs(e,t,n,r,o,i)}function zs(e,t,n,r,i,o){Ad(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Va(t,n,!1),Ht(e,t,o);r=t.stateNode,Hm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,s,o)):Ae(e,t,s,o),t.memoizedState=r.state,i&&Va(t,n,!0),t.child}function Md(e){var t=e.stateNode;t.pendingContext?Ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ma(e,t.context,!1),Eu(e,t.containerInfo)}function nc(e,t,n,r,i){return ar(),yu(i),t.flags|=256,Ae(e,t,n,r),t.child}var Ds={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vd(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ce,i&1),e===null)return _s(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=bo(l,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ts(n),t.memoizedState=Ds,e):Du(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Wm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=an(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=an(s,o):(o=$n(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ts(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ds,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Du(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&yu(r),cr(t,e.child,null,n),e=Du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error($(422))),Fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=bo({mode:"visible",children:r.children},i,0,null),o=$n(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=Ts(l),t.memoizedState=Ds,o);if(!(t.mode&1))return Fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error($(419)),r=Fl(o,r,void 0),Fi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ye||s){if(r=Pe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),wt(r,e,i,-1))}return Ou(),r=Fl(Error($(421))),Fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,be=on(i.nextSibling),et=t,ue=!0,yt=null,e!==null&&(lt[st++]=Ot,lt[st++]=At,lt[st++]=Pn,Ot=e.id,At=e.overflow,Pn=t),t=Du(t,r.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cs(e.return,t,n)}function Rl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Rl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Rl(t,!0,n,null,o);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qm(e,t,n){switch(t.tag){case 3:Md(t),ar();break;case 5:hd(t);break;case 1:Xe(t.type)&&xo(t);break;case 4:Eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Vd(e,t,n):(te(ce,ce.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Od(e,t,n)}return Ht(e,t,n)}var Ud,Ls,Hd,Wd;Ud=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ls=function(){};Hd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(Dt.current);var o=null;switch(n){case"input":i=ts(e,i),r=ts(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=is(e,i),r=is(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}ls(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ne("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Wd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Km(e,t,n){var r=t.pendingProps;switch(gu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&vo(),Re(t),null;case 3:return r=t.stateNode,fr(),ie(Ge),ie(Oe),Cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Bs(yt),yt=null))),Ls(e,t),Re(t),null;case 5:_u(t);var i=kn(li.current);if(n=t.type,e!==null&&t.stateNode!=null)Hd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Re(t),null}if(e=kn(Dt.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Nt]=t,r[ii]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ir.length;i++)ne(Ir[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":da(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":ha(r,o),ne("invalid",r)}ls(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ei(r),pa(r,o,!0);break;case"textarea":Ei(r),ma(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Nt]=t,e[ii]=r,Ud(e,t,!1,!1),t.stateNode=e;e:{switch(l=ss(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ir.length;i++)ne(Ir[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":da(e,r),i=ts(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ne("invalid",e);break;case"textarea":ha(e,r),i=is(e,r),ne("invalid",e);break;default:i=r}ls(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?wf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&vf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xr(e,u):typeof u=="number"&&Xr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ne("scroll",e):u!=null&&tu(e,o,u,l))}switch(n){case"input":Ei(e),pa(e,r,!1);break;case"textarea":Ei(e),ma(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Wd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=kn(li.current),kn(Dt.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Re(t),null;case 13:if(ie(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&be!==null&&t.mode&1&&!(t.flags&128))sd(),ar(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Nt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else yt!==null&&(Bs(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Se===0&&(Se=3):Ou())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return fr(),Ls(e,t),e===null&&ni(t.stateNode.containerInfo),Re(t),null;case 10:return wu(t.type._context),Re(t),null;case 17:return Xe(t.type)&&vo(),Re(t),null;case 19:if(ie(ce),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Pr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Co(e),l!==null){for(t.flags|=128,Pr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>pr&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Co(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ue)return Re(t),null}else 2*ge()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Ym(e,t){switch(gu(t),t.tag){case 1:return Xe(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),ie(Ge),ie(Oe),Cu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _u(t),null;case 13:if(ie(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ce),null;case 4:return fr(),null;case 10:return wu(t.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var Ri=!1,Ie=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Fs(e,t,n){try{n()}catch(r){pe(e,t,r)}}var ic=!1;function Xm(e,t){if(ys=ho,e=Gf(),hu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,y=0,g=e,m=null;t:for(;;){for(var w;g!==n||i!==0&&g.nodeType!==3||(s=l+i),g!==o||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++c===i&&(s=l),m===o&&++y===r&&(u=l),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vs={focusedElem:e,selectionRange:n},ho=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,U=k.memoizedState,h=t.stateNode,a=h.getSnapshotBeforeUpdate(t.elementType===t.type?C:mt(t.type,C),U);h.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(x){pe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=ic,ic=!1,k}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Fs(t,n,o)}i=i.next}while(i!==r)}}function qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[ii],delete t[Ss],delete t[Dm],delete t[Tm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(Is(e,t,n),e=e.sibling;e!==null;)Is(e,t,n),e=e.sibling}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}var De=null,gt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Yd(e,t,n),n=n.sibling}function Yd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Ie||qn(n,t);case 6:var r=De,i=gt;De=null,Qt(e,t,n),De=r,gt=i,De!==null&&(gt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(gt?(e=De,n=n.stateNode,e.nodeType===8?Nl(e.parentNode,n):e.nodeType===1&&Nl(e,n),br(e)):Nl(De,n.stateNode));break;case 4:r=De,i=gt,De=n.stateNode.containerInfo,gt=!0,Qt(e,t,n),De=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Fs(n,t,l),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ie&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Qt(e,t,n),Ie=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gm),t.forEach(function(r){var i=ig.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,gt=!1;break e;case 3:De=s.stateNode.containerInfo,gt=!0;break e;case 4:De=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(De===null)throw Error($(160));Yd(o,l,i),De=null,gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){pe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gd(t,e),t=t.sibling}function Gd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Ct(e),r&4){try{Wr(3,e,e.return),qo(3,e)}catch(C){pe(e,e.return,C)}try{Wr(5,e,e.return)}catch(C){pe(e,e.return,C)}}break;case 1:ht(t,e),Ct(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ht(t,e),Ct(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(C){pe(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),ss(s,l);var c=ss(s,o);for(l=0;l<u.length;l+=2){var y=u[l],g=u[l+1];y==="style"?wf(i,g):y==="dangerouslySetInnerHTML"?vf(i,g):y==="children"?Xr(i,g):tu(i,y,g,c)}switch(s){case"input":ns(i,o);break;case"textarea":gf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?tr(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ii]=o}catch(C){pe(e,e.return,C)}}break;case 6:if(ht(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){pe(e,e.return,C)}}break;case 3:if(ht(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{br(t.containerInfo)}catch(C){pe(e,e.return,C)}break;case 4:ht(t,e),Ct(e);break;case 13:ht(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=ge())),r&4&&lc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(c=Ie)||y,ht(t,e),Ie=c):ht(t,e),Ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(g=T=y;T!==null;){switch(m=T,w=m.child,m.tag){case 0:case 11:case 14:case 15:Wr(4,m,m.return);break;case 1:qn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){pe(r,n,C)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){uc(g);continue}}w!==null?(w.return=m,T=w):uc(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=xf("display",l))}catch(C){pe(e,e.return,C)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(C){pe(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ht(t,e),Ct(e),r&4&&lc(e);break;case 21:break;default:ht(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kd(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xr(i,""),r.flags&=-33);var o=oc(e);Os(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=oc(e);Is(e,s,l);break;default:throw Error($(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zm(e,t,n){T=e,Xd(e)}function Xd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ri;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Ie;s=Ri;var c=Ie;if(Ri=l,(Ie=u)&&!c)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?ac(i):u!==null?(u.return=l,T=u):ac(i);for(;o!==null;)T=o,Xd(o),o=o.sibling;T=i,Ri=s,Ie=c}sc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):sc(e)}}function sc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Wa(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wa(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&br(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ie||t.flags&512&&Rs(t)}catch(m){pe(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function uc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function ac(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qo(4,t)}catch(u){pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){pe(t,i,u)}}var o=t.return;try{Rs(t)}catch(u){pe(t,o,u)}break;case 5:var l=t.return;try{Rs(t)}catch(u){pe(t,l,u)}}}catch(u){pe(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var qm=Math.ceil,No=Wt.ReactCurrentDispatcher,Tu=Wt.ReactCurrentOwner,at=Wt.ReactCurrentBatchConfig,X=0,Pe=null,xe=null,Te=0,Je=0,Jn=hn(0),Se=0,ci=null,Dn=0,Jo=0,Lu=0,Qr=null,Ke=null,Fu=0,pr=1/0,Ft=null,Po=!1,As=null,sn=null,Ii=!1,bt=null,zo=0,Kr=0,Ms=null,Ji=-1,bi=0;function Ve(){return X&6?ge():Ji!==-1?Ji:Ji=ge()}function un(e){return e.mode&1?X&2&&Te!==0?Te&-Te:Fm.transition!==null?(bi===0&&(bi=Tf()),bi):(e=J,e!==0||(e=window.event,e=e===void 0?16:Mf(e.type)),e):1}function wt(e,t,n,r){if(50<Kr)throw Kr=0,Ms=null,Error($(185));hi(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&(Jo|=n),Se===4&&Zt(e,Te)),Ze(e,r),n===1&&X===0&&!(t.mode&1)&&(pr=ge()+500,Go&&mn()))}function Ze(e,t){var n=e.callbackNode;Fh(e,t);var r=po(e,e===Pe?Te:0);if(r===0)n!==null&&va(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&va(n),t===1)e.tag===0?Lm(cc.bind(null,e)):id(cc.bind(null,e)),Pm(function(){!(X&6)&&mn()}),n=null;else{switch(Lf(r)){case 1:n=lu;break;case 4:n=zf;break;case 16:n=fo;break;case 536870912:n=Df;break;default:n=fo}n=rp(n,Zd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zd(e,t){if(Ji=-1,bi=0,X&6)throw Error($(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=po(e,e===Pe?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var i=X;X|=2;var o=Jd();(Pe!==e||Te!==t)&&(Ft=null,pr=ge()+500,Cn(e,t));do try{eg();break}catch(s){qd(e,s)}while(!0);xu(),No.current=o,X=i,xe!==null?t=0:(Pe=null,Te=0,t=Se)}if(t!==0){if(t===2&&(i=ds(e),i!==0&&(r=i,t=Vs(e,i))),t===1)throw n=ci,Cn(e,0),Zt(e,r),Ze(e,ge()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jm(i)&&(t=Do(e,r),t===2&&(o=ds(e),o!==0&&(r=o,t=Vs(e,o))),t===1))throw n=ci,Cn(e,0),Zt(e,r),Ze(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:xn(e,Ke,Ft);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Fu+500-ge(),10<t)){if(po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ws(xn.bind(null,e,Ke,Ft),t);break}xn(e,Ke,Ft);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-xt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qm(r/1960))-r,10<r){e.timeoutHandle=ws(xn.bind(null,e,Ke,Ft),r);break}xn(e,Ke,Ft);break;case 5:xn(e,Ke,Ft);break;default:throw Error($(329))}}}return Ze(e,ge()),e.callbackNode===n?Zd.bind(null,e):null}function Vs(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&Bs(t)),e}function Bs(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Jm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Lu,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function cc(e){if(X&6)throw Error($(327));lr();var t=po(e,0);if(!(t&1))return Ze(e,ge()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=ds(e);r!==0&&(t=r,n=Vs(e,r))}if(n===1)throw n=ci,Cn(e,0),Zt(e,t),Ze(e,ge()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Ke,Ft),Ze(e,ge()),null}function Ru(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(pr=ge()+500,Go&&mn())}}function Tn(e){bt!==null&&bt.tag===0&&!(X&6)&&lr();var t=X;X|=1;var n=at.transition,r=J;try{if(at.transition=null,J=1,e)return e()}finally{J=r,at.transition=n,X=t,!(X&6)&&mn()}}function Iu(){Je=Jn.current,ie(Jn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Nm(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:fr(),ie(Ge),ie(Oe),Cu();break;case 5:_u(r);break;case 4:fr();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:wu(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(Pe=e,xe=e=an(e.current,null),Te=Je=t,Se=0,ci=null,Lu=Jo=Dn=0,Ke=Qr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Sn=null}return e}function qd(e,t){do{var n=xe;try{if(xu(),Xi.current=jo,$o){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(zn=0,$e=we=fe=null,Hr=!1,si=0,Tu.current=null,n===null||n.return===null){Se=1,ci=t,xe=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,y=s,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=qa(l);if(w!==null){w.flags&=-257,Ja(w,l,s,o,t),w.mode&1&&Za(o,c,t),t=w,u=c;var k=t.updateQueue;if(k===null){var C=new Set;C.add(u),t.updateQueue=C}else k.add(u);break e}else{if(!(t&1)){Za(o,c,t),Ou();break e}u=Error($(426))}}else if(ue&&s.mode&1){var U=qa(l);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Ja(U,l,s,o,t),yu(dr(u,s));break e}}o=u=dr(u,s),Se!==4&&(Se=2),Qr===null?Qr=[o]:Qr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Fd(o,u,t);Ha(o,h);break e;case 1:s=u;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Rd(o,s,t);Ha(o,x);break e}}o=o.return}while(o!==null)}ep(n)}catch(E){t=E,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Jd(){var e=No.current;return No.current=jo,e===null?jo:e}function Ou(){(Se===0||Se===3||Se===2)&&(Se=4),Pe===null||!(Dn&268435455)&&!(Jo&268435455)||Zt(Pe,Te)}function Do(e,t){var n=X;X|=2;var r=Jd();(Pe!==e||Te!==t)&&(Ft=null,Cn(e,t));do try{bm();break}catch(i){qd(e,i)}while(!0);if(xu(),X=n,No.current=r,xe!==null)throw Error($(261));return Pe=null,Te=0,Se}function bm(){for(;xe!==null;)bd(xe)}function eg(){for(;xe!==null&&!Ch();)bd(xe)}function bd(e){var t=np(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?ep(e):xe=t,Tu.current=null}function ep(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ym(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}else if(n=Km(n,t,Je),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function xn(e,t,n){var r=J,i=at.transition;try{at.transition=null,J=1,tg(e,t,n,r)}finally{at.transition=i,J=r}return null}function tg(e,t,n,r){do lr();while(bt!==null);if(X&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Rh(e,o),e===Pe&&(xe=Pe=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,rp(fo,function(){return lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var l=J;J=1;var s=X;X|=4,Tu.current=null,Xm(e,n),Gd(n,e),Sm(vs),ho=!!ys,vs=ys=null,e.current=n,Zm(n),$h(),X=s,J=l,at.transition=o}else e.current=n;if(Ii&&(Ii=!1,bt=e,zo=i),o=e.pendingLanes,o===0&&(sn=null),Ph(n.stateNode),Ze(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=As,As=null,e;return zo&1&&e.tag!==0&&lr(),o=e.pendingLanes,o&1?e===Ms?Kr++:(Kr=0,Ms=e):Kr=0,mn(),null}function lr(){if(bt!==null){var e=Lf(zo),t=at.transition,n=J;try{if(at.transition=null,J=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,zo=0,X&6)throw Error($(331));var i=X;for(X|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(T=c;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Wr(8,y,o)}var g=y.child;if(g!==null)g.return=y,T=g;else for(;T!==null;){y=T;var m=y.sibling,w=y.return;if(Qd(y),y===c){T=null;break}if(m!==null){m.return=w,T=m;break}T=w}}}var k=o.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var U=C.sibling;C.sibling=null,C=U}while(C!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,T=h;break e}T=o.return}}var a=e.current;for(T=a;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=a;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:qo(9,s)}}catch(E){pe(s,s.return,E)}if(s===l){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(X=i,mn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{J=n,at.transition=t}}return!1}function fc(e,t,n){t=dr(n,t),t=Fd(e,t,1),e=ln(e,t,1),t=Ve(),e!==null&&(hi(e,1,t),Ze(e,t))}function pe(e,t,n){if(e.tag===3)fc(e,e,n);else for(;t!==null;){if(t.tag===3){fc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=dr(n,e),e=Rd(t,e,1),t=ln(t,e,1),e=Ve(),t!==null&&(hi(t,1,e),Ze(t,e));break}}t=t.return}}function ng(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Te&n)===n&&(Se===4||Se===3&&(Te&130023424)===Te&&500>ge()-Fu?Cn(e,0):Lu|=n),Ze(e,t)}function tp(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=Ve();e=Ut(e,t),e!==null&&(hi(e,t,n),Ze(e,n))}function rg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tp(e,n)}function ig(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),tp(e,n)}var np;np=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,Qm(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,ue&&t.flags&1048576&&od(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var i=ur(t,Oe.current);or(t,n),i=ju(null,t,r,e,i,n);var o=Nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ku(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,js(t,r,e,n),t=zs(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&mu(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lg(r),e=mt(r,e),i){case 0:t=Ps(null,t,r,e,n);break e;case 1:t=tc(null,t,r,e,n);break e;case 11:t=ba(null,t,r,e,n);break e;case 14:t=ec(null,t,r,mt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ps(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),tc(e,t,r,i,n);case 3:e:{if(Md(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ad(e,t),_o(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error($(423)),t),t=nc(e,t,r,n,i);break e}else if(r!==i){i=dr(Error($(424)),t),t=nc(e,t,r,n,i);break e}else for(be=on(t.stateNode.containerInfo.firstChild),et=t,ue=!0,yt=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Ht(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return hd(t),e===null&&_s(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,xs(r,i)?l=null:o!==null&&xs(r,o)&&(t.flags|=32),Ad(e,t),Ae(e,t,l,n),t.child;case 6:return e===null&&_s(t),null;case 13:return Vd(e,t,n);case 4:return Eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ba(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,te(ko,r._currentValue),r._currentValue=l,o!==null)if(kt(o.value,l)){if(o.children===i.children&&!Ge.current){t=Ht(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Mt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?u.next=u:(u.next=y.next,y.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Cs(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error($(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Cs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=ct(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),ec(e,t,r,i,n);case 15:return Id(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),qi(e,t),t.tag=1,Xe(r)?(e=!0,xo(t)):e=!1,or(t,n),fd(t,r,i),js(t,r,i,n),zs(null,t,r,!0,e,n);case 19:return Bd(e,t,n);case 22:return Od(e,t,n)}throw Error($(156,t.tag))};function rp(e,t){return Pf(e,t)}function og(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new og(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lg(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ru)return 11;if(e===iu)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Au(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Un:return $n(n.children,i,o,t);case nu:l=8,i|=8;break;case ql:return e=ut(12,n,t,i|2),e.elementType=ql,e.lanes=o,e;case Jl:return e=ut(13,n,t,i),e.elementType=Jl,e.lanes=o,e;case bl:return e=ut(19,n,t,i),e.elementType=bl,e.lanes=o,e;case df:return bo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cf:l=10;break e;case ff:l=9;break e;case ru:l=11;break e;case iu:l=14;break e;case Yt:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=ut(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=ut(22,e,r,t),e.elementType=df,e.lanes=n,e.stateNode={isHidden:!1},e}function Il(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Ol(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mu(e,t,n,r,i,o,l,s,u){return e=new sg(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(o),e}function ug(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ip(e){if(!e)return dn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Xe(n))return rd(e,n,t)}return t}function op(e,t,n,r,i,o,l,s,u){return e=Mu(n,r,!0,e,i,o,l,s,u),e.context=ip(null),n=e.current,r=Ve(),i=un(n),o=Mt(r,i),o.callback=t??null,ln(n,o,i),e.current.lanes=i,hi(e,i,r),Ze(e,r),e}function el(e,t,n,r){var i=t.current,o=Ve(),l=un(i);return n=ip(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,l),e!==null&&(wt(e,i,l,o),Gi(e,i,l)),l}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vu(e,t){dc(e,t),(e=e.alternate)&&dc(e,t)}function ag(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bu(e){this._internalRoot=e}tl.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));el(e,t,null,null)};tl.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){el(null,e,null,null)}),t[Bt]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=If();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Af(e)}};function Uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pc(){}function cg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=To(l);o.call(c)}}var l=op(t,r,e,0,null,!1,!1,"",pc);return e._reactRootContainer=l,e[Bt]=l.current,ni(e.nodeType===8?e.parentNode:e),Tn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=To(u);s.call(c)}}var u=Mu(e,0,!1,null,null,!1,!1,"",pc);return e._reactRootContainer=u,e[Bt]=u.current,ni(e.nodeType===8?e.parentNode:e),Tn(function(){el(t,u,n,r)}),u}function rl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=To(l);s.call(u)}}el(t,l,e,i)}else l=cg(n,t,e,i,r);return To(l)}Ff=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Rr(t.pendingLanes);n!==0&&(su(t,n|1),Ze(t,ge()),!(X&6)&&(pr=ge()+500,mn()))}break;case 13:Tn(function(){var r=Ut(e,1);if(r!==null){var i=Ve();wt(r,e,1,i)}}),Vu(e,1)}};uu=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ve();wt(t,e,134217728,n)}Vu(e,134217728)}};Rf=function(e){if(e.tag===13){var t=un(e),n=Ut(e,t);if(n!==null){var r=Ve();wt(n,e,t,r)}Vu(e,t)}};If=function(){return J};Of=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};as=function(e,t,n){switch(t){case"input":if(ns(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yo(r);if(!i)throw Error($(90));hf(r),ns(r,i)}}}break;case"textarea":gf(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};Ef=Ru;_f=Tn;var fg={usingClientEntryPoint:!1,Events:[gi,Kn,Yo,Sf,kf,Ru]},zr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dg={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jf(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Ho=Oi.inject(dg),zt=Oi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fg;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(t))throw Error($(200));return ug(e,t,null,n)};nt.createRoot=function(e,t){if(!Uu(e))throw Error($(299));var n=!1,r="",i=lp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Mu(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,ni(e.nodeType===8?e.parentNode:e),new Bu(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=jf(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Tn(e)};nt.hydrate=function(e,t,n){if(!nl(t))throw Error($(200));return rl(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!Uu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=lp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=op(t,null,e,1,n??null,i,!1,o,l),e[Bt]=t.current,ni(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tl(t)};nt.render=function(e,t,n){if(!nl(t))throw Error($(200));return rl(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!nl(e))throw Error($(40));return e._reactRootContainer?(Tn(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};nt.unstable_batchedUpdates=Ru;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return rl(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sp)}catch(e){console.error(e)}}sp(),of.exports=nt;var pg=of.exports,hc=pg;Xl.createRoot=hc.createRoot,Xl.hydrateRoot=hc.hydrateRoot;const hg=e=>{const[t,n]=he.useState(!1);return he.useEffect(()=>{const r=e.map(async i=>{const{fontFamily:o,fontUrl:l}=i,u=await new FontFace(o,`url(${l})`).load();document.fonts.add(u)});Promise.all(r).then(()=>{n(!0)}).catch(i=>{console.error(`Error loading fonts: ${i}`)})},[e]),t};var Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ne.apply(this,arguments)};function hr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var mg=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),s=Object.keys(n);if(l.length!==s.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<l.length;c++){var y=l[c];if(!u(y))return!1;var g=t[y],m=n[y];if(o=r?r.call(i,g,m,y):void 0,o===!1||o===void 0&&g!==m)return!1}return!0};const gg=Yc(mg);var re="-ms-",Yr="-moz-",q="-webkit-",up="comm",il="rule",Hu="decl",yg="@import",ap="@keyframes",vg="@layer",xg=Math.abs,Wu=String.fromCharCode,Us=Object.assign;function wg(e,t){return je(e,0)^45?(((t<<2^je(e,0))<<2^je(e,1))<<2^je(e,2))<<2^je(e,3):0}function cp(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function to(e,t){return e.indexOf(t)}function je(e,t){return e.charCodeAt(t)|0}function mr(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function fp(e){return e.length}function Or(e,t){return t.push(e),e}function Sg(e,t){return e.map(t).join("")}function mc(e,t){return e.filter(function(n){return!Rt(n,t)})}var ol=1,gr=1,dp=0,dt=0,ve=0,kr="";function ll(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ol,column:gr,length:l,return:"",siblings:s}}function Kt(e,t){return Us(ll("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Or(e,e.siblings)}function kg(){return ve}function Eg(){return ve=dt>0?je(kr,--dt):0,gr--,ve===10&&(gr=1,ol--),ve}function St(){return ve=dt<dp?je(kr,dt++):0,gr++,ve===10&&(gr=1,ol++),ve}function jn(){return je(kr,dt)}function no(){return dt}function sl(e,t){return mr(kr,e,t)}function Hs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _g(e){return ol=gr=1,dp=jt(kr=e),dt=0,[]}function Cg(e){return kr="",e}function Al(e){return cp(sl(dt-1,Ws(e===91?e+2:e===40?e+1:e)))}function $g(e){for(;(ve=jn())&&ve<33;)St();return Hs(e)>2||Hs(ve)>3?"":" "}function jg(e,t){for(;--t&&St()&&!(ve<48||ve>102||ve>57&&ve<65||ve>70&&ve<97););return sl(e,no()+(t<6&&jn()==32&&St()==32))}function Ws(e){for(;St();)switch(ve){case e:return dt;case 34:case 39:e!==34&&e!==39&&Ws(ve);break;case 40:e===41&&Ws(e);break;case 92:St();break}return dt}function Ng(e,t){for(;St()&&e+ve!==57;)if(e+ve===84&&jn()===47)break;return"/*"+sl(t,dt-1)+"*"+Wu(e===47?e:St())}function Pg(e){for(;!Hs(jn());)St();return sl(e,dt)}function zg(e){return Cg(ro("",null,null,null,[""],e=_g(e),0,[0],e))}function ro(e,t,n,r,i,o,l,s,u){for(var c=0,y=0,g=l,m=0,w=0,k=0,C=1,U=1,h=1,a=0,f="",x=i,E=o,j=r,_=f;U;)switch(k=a,a=St()){case 40:if(k!=108&&je(_,g-1)==58){to(_+=W(Al(a),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:_+=Al(a);break;case 9:case 10:case 13:case 32:_+=$g(k);break;case 92:_+=jg(no()-1,7);continue;case 47:switch(jn()){case 42:case 47:Or(Dg(Ng(St(),no()),t,n,u),u);break;default:_+="/"}break;case 123*C:s[c++]=jt(_)*h;case 125*C:case 59:case 0:switch(a){case 0:case 125:U=0;case 59+y:h==-1&&(_=W(_,/\f/g,"")),w>0&&jt(_)-g&&Or(w>32?yc(_+";",r,n,g-1,u):yc(W(_," ","")+";",r,n,g-2,u),u);break;case 59:_+=";";default:if(Or(j=gc(_,t,n,c,y,i,s,f,x=[],E=[],g,o),o),a===123)if(y===0)ro(_,t,j,j,x,o,g,s,E);else switch(m===99&&je(_,3)===110?100:m){case 100:case 108:case 109:case 115:ro(e,j,j,r&&Or(gc(e,j,j,0,0,i,s,f,i,x=[],g,E),E),i,E,g,s,r?x:E);break;default:ro(_,j,j,j,[""],E,0,s,E)}}c=y=w=0,C=h=1,f=_="",g=l;break;case 58:g=1+jt(_),w=k;default:if(C<1){if(a==123)--C;else if(a==125&&C++==0&&Eg()==125)continue}switch(_+=Wu(a),a*C){case 38:h=y>0?1:(_+="\f",-1);break;case 44:s[c++]=(jt(_)-1)*h,h=1;break;case 64:jn()===45&&(_+=Al(St())),m=jn(),y=g=jt(f=_+=Pg(no())),a++;break;case 45:k===45&&jt(_)==2&&(C=0)}}return o}function gc(e,t,n,r,i,o,l,s,u,c,y,g){for(var m=i-1,w=i===0?o:[""],k=fp(w),C=0,U=0,h=0;C<r;++C)for(var a=0,f=mr(e,m+1,m=xg(U=l[C])),x=e;a<k;++a)(x=cp(U>0?w[a]+" "+f:W(f,/&\f/g,w[a])))&&(u[h++]=x);return ll(e,t,n,i===0?il:s,u,c,y,g)}function Dg(e,t,n,r){return ll(e,t,n,up,Wu(kg()),mr(e,2,-2),0,r)}function yc(e,t,n,r,i){return ll(e,t,n,Hu,mr(e,0,r),mr(e,r+1,-1),r,i)}function pp(e,t,n){switch(wg(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return Yr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+Yr+e+re+e+e;case 5936:switch(je(e,t+11)){case 114:return q+e+re+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+re+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+re+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+re+e+e;case 6165:return q+e+re+"flex-"+e+e;case 5187:return q+e+W(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return q+e+re+"flex-item-"+W(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":re+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return q+e+re+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+re+W(e,"shrink","negative")+e;case 5292:return q+e+re+W(e,"basis","preferred-size")+e;case 6060:return q+"box-"+W(e,"-grow","")+q+e+re+W(e,"grow","positive")+e;case 4554:return q+W(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return re+"grid-column-align"+mr(e,t)+e;break;case 2592:case 3360:return re+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rt(r.props,/grid-\w+-end/)})?~to(e+(n=n[t].value),"span")?e:re+W(e,"-start","")+e+re+"grid-row-span:"+(~to(n,"span")?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":re+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:re+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(je(e,t+1)){case 109:if(je(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+Yr+(je(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~to(e,"stretch")?pp(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,c){return re+i+":"+o+c+(l?re+i+"-span:"+(s?u:+u-+o)+c:"")+e});case 4949:if(je(e,t+6)===121)return W(e,":",":"+q)+e;break;case 6444:switch(je(e,je(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(je(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+re+"$2box$3")+e;case 100:return W(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Lo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Tg(e,t,n,r){switch(e.type){case vg:if(e.children.length)break;case yg:case Hu:return e.return=e.return||e.value;case up:return"";case ap:return e.return=e.value+"{"+Lo(e.children,r)+"}";case il:if(!jt(e.value=e.props.join(",")))return""}return jt(n=Lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Lg(e){var t=fp(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Fg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Rg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Hu:e.return=pp(e.value,e.length,n);return;case ap:return Lo([Kt(e,{value:W(e.value,"@","@"+q)})],r);case il:if(e.length)return Sg(n=e.props,function(i){switch(Rt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(Kt(e,{props:[W(i,/:(read-\w+)/,":"+Yr+"$1")]})),Mn(Kt(e,{props:[i]})),Us(e,{props:mc(n,r)});break;case"::placeholder":Mn(Kt(e,{props:[W(i,/:(plac\w+)/,":"+q+"input-$1")]})),Mn(Kt(e,{props:[W(i,/:(plac\w+)/,":"+Yr+"$1")]})),Mn(Kt(e,{props:[W(i,/:(plac\w+)/,re+"input-$1")]})),Mn(Kt(e,{props:[i]})),Us(e,{props:mc(n,r)});break}return""})}}var Ig={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},yr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",Qu=typeof window<"u"&&"HTMLElement"in window,Og=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),Ag={},ul=Object.freeze([]),vr=Object.freeze({});function hp(e,t,n){return n===void 0&&(n=vr),e.theme!==n.theme&&e.theme||t||n.theme}var mp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vg=/(^-|-$)/g;function vc(e){return e.replace(Mg,"-").replace(Vg,"")}var Bg=/(a)(d)/gi,xc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Qs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=xc(t%52)+n;return(xc(t%52)+n).replace(Bg,"$1-$2")}var Ml,bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},gp=function(e){return bn(5381,e)};function Ku(e){return Qs(gp(e)>>>0)}function Ug(e){return e.displayName||e.name||"Component"}function Vl(e){return typeof e=="string"&&!0}var yp=typeof Symbol=="function"&&Symbol.for,vp=yp?Symbol.for("react.memo"):60115,Hg=yp?Symbol.for("react.forward_ref"):60112,Wg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Kg=((Ml={})[Hg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ml[vp]=xp,Ml);function wc(e){return("type"in(t=e)&&t.type.$$typeof)===vp?xp:"$$typeof"in e?Kg[e.$$typeof]:Wg;var t}var Yg=Object.defineProperty,Gg=Object.getOwnPropertyNames,Sc=Object.getOwnPropertySymbols,Xg=Object.getOwnPropertyDescriptor,Zg=Object.getPrototypeOf,kc=Object.prototype;function wp(e,t,n){if(typeof t!="string"){if(kc){var r=Zg(t);r&&r!==kc&&wp(e,r,n)}var i=Gg(t);Sc&&(i=i.concat(Sc(t)));for(var o=wc(e),l=wc(t),s=0;s<i.length;++s){var u=i[s];if(!(u in Qg||n&&n[u]||l&&u in l||o&&u in o)){var c=Xg(t,u);try{Yg(e,u,c)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function Yu(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Fo(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ks(e,t,n){if(n===void 0&&(n=!1),!n&&!fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ks(e[r],t[r]);else if(fi(t))for(var r in t)e[r]=Ks(e[r],t[r]);return e}function Gu(e,t){Object.defineProperty(e,"toString",{value:t})}function Fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),io=new Map,Ro=new Map,oo=1,Ai=function(e){if(io.has(e))return io.get(e);for(;Ro.has(oo);)oo++;var t=oo++;return io.set(e,t),Ro.set(t,e),t},Jg=function(e,t){oo=t+1,io.set(e,t),Ro.set(t,e)},bg="style[".concat(yr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),e0=new RegExp("^".concat(yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},n0=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(e0);if(u){var c=0|parseInt(u[1],10),y=u[2];c!==0&&(Jg(y,c),t0(e,y,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function r0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Sp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(yr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(yr,"active"),r.setAttribute("data-styled-version","6.1.1");var l=r0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},i0=function(){function e(t){this.element=Sp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),o0=function(){function e(t){this.element=Sp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),l0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ec=Qu,s0={isServer:!Qu,useCSSOMInjection:!Og},Io=function(){function e(t,n,r){t===void 0&&(t=vr),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},s0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Qu&&Ec&&(Ec=!1,function(o){for(var l=document.querySelectorAll(bg),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(yr)!=="active"&&(n0(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Gu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",c=function(g){var m=function(h){return Ro.get(h)}(g);if(m===void 0)return"continue";var w=o.names.get(m),k=l.getGroup(g);if(w===void 0||k.length===0)return"continue";var C="".concat(yr,".g").concat(g,'[id="').concat(m,'"]'),U="";w!==void 0&&w.forEach(function(h){h.length>0&&(U+="".concat(h,","))}),u+="".concat(k).concat(C,'{content:"').concat(U,'"}').concat(`/*!sc*/
`)},y=0;y<s;y++)c(y);return u}(i)})}return e.registerId=function(t){return Ai(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new l0(i):r?new i0(i):new o0(i)}(this.options),new qg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ai(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ai(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),u0=/&/g,a0=/^\s*\/\/.*$/gm;function kp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kp(n.children,t)),n})}function Ep(e){var t,n,r,i=e===void 0?vr:e,o=i.options,l=o===void 0?vr:o,s=i.plugins,u=s===void 0?ul:s,c=function(m,w,k){return k===n||k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):m},y=u.slice();y.push(function(m){m.type===il&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(u0,n).replace(r,c))}),l.prefix&&y.push(Rg),y.push(Tg);var g=function(m,w,k,C){w===void 0&&(w=""),k===void 0&&(k=""),C===void 0&&(C="&"),t=C,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var U=m.replace(a0,""),h=zg(k||w?"".concat(k," ").concat(w," { ").concat(U," }"):U);l.namespace&&(h=kp(h,l.namespace));var a=[];return Lo(h,Lg(y.concat(Fg(function(f){return a.push(f)})))),a};return g.hash=u.length?u.reduce(function(m,w){return w.name||Fn(15),bn(m,w.name)},5381).toString():"",g}var c0=new Io,Ys=Ep(),Xu=se.createContext({shouldForwardProp:void 0,styleSheet:c0,stylis:Ys});Xu.Consumer;var f0=se.createContext(void 0);function Oo(){return he.useContext(Xu)}function d0(e){var t=he.useState(e.stylisPlugins),n=t[0],r=t[1],i=Oo().styleSheet,o=he.useMemo(function(){var u=i;return e.sheet?u=e.sheet:e.target&&(u=u.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(u=u.reconstructWithOptions({useCSSOMInjection:!1})),u},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=he.useMemo(function(){return Ep({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);he.useEffect(function(){gg(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=he.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}},[e.shouldForwardProp,o,l]);return se.createElement(Xu.Provider,{value:s},se.createElement(f0.Provider,{value:l},e.children))}var _p=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ys);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Gu(this,function(){throw Fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ys),this.name+t.hash},e}(),p0=function(e){return e>="A"&&e<="Z"};function _c(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;p0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cp=function(e){return e==null||e===!1||e===""},$p=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Cp(o)&&(Array.isArray(o)&&o.isCss||Ln(o)?r.push("".concat(_c(i),":"),o,";"):fi(o)?r.push.apply(r,hr(hr(["".concat(i," {")],$p(o),!1),["}"],!1)):r.push("".concat(_c(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ig||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(Cp(e))return[];if(Yu(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return cn(i,t,n,r)}var o;return e instanceof _p?n?(e.inject(n,r),[e.getName(r)]):[e]:fi(e)?$p(e):Array.isArray(e)?Array.prototype.concat.apply(ul,e.map(function(l){return cn(l,t,n,r)})):[e.toString()]}function jp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!Yu(n))return!1}return!0}var h0=gp("6.1.1"),m0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jp(t),this.componentId=n,this.baseHash=bn(h0,n),this.baseStyle=r,Io.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=En(i,this.staticRulesId);else{var o=Fo(cn(this.rules,t,n,r)),l=Qs(bn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=En(i,l),this.staticRulesId=l}else{for(var u=bn(this.baseHash,r.hash),c="",y=0;y<this.rules.length;y++){var g=this.rules[y];if(typeof g=="string")c+=g;else if(g){var m=Fo(cn(g,t,n,r));u=bn(u,m+y),c+=m}}if(c){var w=Qs(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=En(i,w)}}return i},e}(),di=se.createContext(void 0);di.Consumer;function g0(e){var t=se.useContext(di),n=he.useMemo(function(){return function(r,i){if(!r)throw Fn(14);if(Ln(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Fn(8);return i?Ne(Ne({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?se.createElement(di.Provider,{value:n},e.children):null}var Bl={};function y0(e,t,n){var r=Yu(e),i=e,o=!Vl(e),l=t.attrs,s=l===void 0?ul:l,u=t.componentId,c=u===void 0?function(x,E){var j=typeof x!="string"?"sc":vc(x);Bl[j]=(Bl[j]||0)+1;var _="".concat(j,"-").concat(Ku("6.1.1"+j+Bl[j]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):u,y=t.displayName,g=y===void 0?function(x){return Vl(x)?"styled.".concat(x):"Styled(".concat(Ug(x),")")}(e):y,m=t.displayName&&t.componentId?"".concat(vc(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var U=t.shouldForwardProp;k=function(x,E){return C(x,E)&&U(x,E)}}else k=C}var h=new m0(n,m,r?i.componentStyle:void 0);function a(x,E){return function(j,_,L){var K=j.attrs,B=j.componentStyle,ae=j.defaultProps,Q=j.foldedComponentIds,H=j.styledComponentId,b=j.target,Ee=se.useContext(di),_e=Oo(),Ce=j.shouldForwardProp||_e.shouldForwardProp,z=function(He,it,We){for(var Qe,Et=Ne(Ne({},it),{className:void 0,theme:We}),gn=0;gn<He.length;gn+=1){var yn=Ln(Qe=He[gn])?Qe(Et):Qe;for(var _t in yn)Et[_t]=_t==="className"?En(Et[_t],yn[_t]):_t==="style"?Ne(Ne({},Et[_t]),yn[_t]):yn[_t]}return it.className&&(Et.className=En(Et.className,it.className)),Et}(K,_,hp(_,Ee,ae)||vr),O=z.as||b,V={};for(var G in z)z[G]===void 0||G[0]==="$"||G==="as"||G==="theme"||(G==="forwardedAs"?V.as=z.forwardedAs:Ce&&!Ce(G,O)||(V[G]=z[G]));var oe=function(He,it){var We=Oo(),Qe=He.generateAndInjectStyles(it,We.styleSheet,We.stylis);return Qe}(B,z),pt=En(Q,H);return oe&&(pt+=" "+oe),z.className&&(pt+=" "+z.className),V[Vl(O)&&!mp.has(O)?"class":"className"]=pt,V.ref=L,he.createElement(O,V)}(f,x,E)}a.displayName=g;var f=se.forwardRef(a);return f.attrs=w,f.componentStyle=h,f.displayName=g,f.shouldForwardProp=k,f.foldedComponentIds=r?En(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=m,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var j=[],_=1;_<arguments.length;_++)j[_-1]=arguments[_];for(var L=0,K=j;L<K.length;L++)Ks(E,K[L],!0);return E}({},i.defaultProps,x):x}}),Gu(f,function(){return".".concat(f.styledComponentId)}),o&&wp(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Cc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var $c=function(e){return Object.assign(e,{isCss:!0})};function Zu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||fi(e)){var r=e;return $c(cn(Cc(ul,hr([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cn(i):$c(cn(Cc(i,t)))}function Gs(e,t,n){if(n===void 0&&(n=vr),!t)throw Fn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Zu.apply(void 0,hr([i],o,!1)))};return r.attrs=function(i){return Gs(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gs(e,t,Ne(Ne({},n),i))},r}var Np=function(e){return Gs(y0,e)},N=Np;mp.forEach(function(e){N[e]=Np(e)});var v0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=jp(t),Io.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Fo(cn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Io.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function x0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Zu.apply(void 0,hr([e],t,!1)),i="sc-global-".concat(Ku(JSON.stringify(r))),o=new v0(r,i),l=function(u){var c=Oo(),y=se.useContext(di),g=se.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(g,u,c.styleSheet,y,c.stylis),se.useLayoutEffect(function(){if(!c.styleSheet.server)return s(g,u,c.styleSheet,y,c.stylis),function(){return o.removeStyles(g,c.styleSheet)}},[g,u,c.styleSheet,y,c.stylis]),null};function s(u,c,y,g,m){if(o.isStatic)o.renderStyles(u,Ag,y,m);else{var w=Ne(Ne({},c),{theme:hp(c,g,l.defaultProps)});o.renderStyles(u,w,y,m)}}return se.memo(l)}function w0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fo(Zu.apply(void 0,hr([e],t,!1))),i=Ku(r);return new _p(i,r)}const Pp=({theme:e})=>e.media.phone,R=({theme:e})=>e.media.tablet,A=({theme:e})=>e.media.desktop,S0=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),k0=()=>{window.scrollTo({top:0,behavior:"smooth"})},al=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},E0=x0`

#root {
  width: 100%;
  margin: 0 auto;
  padding: 36px 20px 24px;

  @media ${Pp} {
    width: 480px;
  }

  @media ${R} {
    width: 768px;
    padding: 36px 30px 40px;
  }

  @media ${A} {
    width: 1440px;
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
`,_0="/ecosolution/assets/sprite-XmP0Qfvc.svg",Z=({iconName:e,width:t,height:n,stroke:r,fill:i})=>d.jsx("svg",{width:t,height:n,children:d.jsx("use",{href:`${_0}#${e}`,stroke:r||"transparent",fill:i||"transparent"})}),C0=N.header`
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

  background-color: ${({isScrolling:e})=>e?"transparent":"rgba(243, 245, 250, 0.7)"};

  @media ${Pp} {
    width: 480px;
  }

  @media ${R} {
    min-width: 100%;
    padding: 36px 30px 5px 30px;
  }

  @media ${A} {
    width: 1440px;
    padding: 24px 100px 5px 100px;
  }
`,zp=N.a`
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
`,$0=N.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${R} {
    gap: 12px;
  }
`,j0=N.button`
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
`,N0=N.a`
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
`,P0=[{id:1,name:"Main",href:"hero"},{id:2,name:"About",href:"about"},{id:3,name:"Cases",href:"cases"},{id:4,name:"FAQ",href:"faq"},{id:5,name:"Contact Us",href:"contact-us"}],z0="/ecosolution/assets/about_1-PMEBtF5-.png",D0="/ecosolution/assets/about_1@2x-9imxmNKc.png",T0="/ecosolution/assets/about_2-ViwEUMXv.png",L0="/ecosolution/assets/about_2@2x-KkWohZkE.png",F0=[{iconName:"icon-openness",title:"Openness",description:"to the world, people, new ideas and projects"},{iconName:"icon-responsibility",title:"Responsibility",description:"we are aware that the results of our work have an impact on our lives and the lives of future generations"},{type:"image",alt:"wind-farms-fields",img:z0,img2x:D0},{type:"image",alt:"man-worker",img:T0,img2x:L0},{iconName:"icon-innovation",title:"Innovation",description:"we use the latest technology to implement non-standard solutions"},{iconName:"icon-quality",title:"Quality",description:"we do not strive to be the first among others, but we want to be the best in our business"}],R0="/ecosolution/assets/case1-_CCrYN4Q.png",I0="/ecosolution/assets/case1@2x-mXcN23UK.png",O0="/ecosolution/assets/case2-vSEbn31q.png",A0="/ecosolution/assets/case2@2x-3tg7DISq.png",M0="/ecosolution/assets/case3-moiV_2xm.png",V0="/ecosolution/assets/case3@2x-NqDKei6c.png",B0="/ecosolution/assets/case4-pHxz6kpC.png",U0="/ecosolution/assets/case4@2x-F7wFwX0L.png",H0="/ecosolution/assets/case5-67KrYcJn.png",W0="/ecosolution/assets/case5@2x-u0LH_kfG.png",Dr=[{img:R0,img2x:I0,alt:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{img:O0,img2x:A0,alt:"Zhytomyr city Private Enterprise “Bosch”",title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{img:M0,img2x:V0,alt:"Rivne city Private Enterprise “Biotech”",title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{img:B0,img2x:U0,alt:"Kherson city Private Enterprise “HealthyFarm”",title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{img:H0,img2x:W0,alt:"Zaporizhia city Private Enterprise “Biotech”",title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],jc=[{id:1,question:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,question:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,question:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,question:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,question:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],Q0=N.div`
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
`,K0=N.div`
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

  @media ${A} {
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
`,Y0=N.button`
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
`,G0=N.nav`
  margin-top: 16px;
`,X0=N.ul`
  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`,Z0=N.li`
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
`,q0=N.ul`
  display: flex;
  gap: 8px;
  margin-top: auto;
`,Nc=N.li``,Pc=N.a`
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
`,J0=({onClose:e})=>{const[t,n]=he.useState(null);return d.jsx(Q0,{children:d.jsxs(K0,{children:[d.jsxs(Y0,{onClick:()=>e(),children:[d.jsx(Z,{iconName:"icon-close"}),"close"]}),d.jsx("span",{}),d.jsx(G0,{children:d.jsx(X0,{children:P0.map(({id:r,name:i,href:o})=>d.jsx(Z0,{"data-isactive":r===t,children:d.jsxs("a",{href:"#",onClick:l=>{l.preventDefault(),al(o),n(r),e()},children:[i,d.jsx(Z,{iconName:"icon-arrow-top-right",width:"16px",height:"16px",stroke:"inherit"})]})},r))})}),d.jsxs(q0,{children:[d.jsx(Nc,{children:d.jsx(Pc,{href:"#",children:d.jsx(Z,{iconName:"icon-facebook",width:24,height:24})})}),d.jsx(Nc,{children:d.jsx(Pc,{href:"#",children:d.jsx(Z,{iconName:"icon-instagram",width:24,height:24})})})]})]})})},b0=()=>{const[e,t]=he.useState(!1),[n,r]=he.useState(!1),i=he.useRef(null),o=()=>{t(!e)},l=()=>{r(!0),i.current!==null&&clearTimeout(i.current),i.current=setTimeout(()=>{r(!1)},250)};return he.useEffect(()=>(window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l),i.current!==null&&clearTimeout(i.current)}),[]),d.jsxs(C0,{isScrolling:n,children:[d.jsxs(zp,{href:"/",children:[d.jsx(Z,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),d.jsx(Z,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),d.jsx(Z,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),d.jsxs($0,{children:[d.jsx(j0,{type:"button",onClick:o,children:d.jsx(Z,{iconName:"icon-menu",width:"16px",height:"16px",stroke:"#000"})}),e&&d.jsx(J0,{onClose:o}),d.jsxs(N0,{href:"#contact-us",onClick:s=>{s.preventDefault(),al("contact-us")},children:["Get in touch",d.jsx("span",{children:d.jsx(Z,{iconName:"icon-arrow-down",width:14,height:14})})]})]})]})},ey=N.main``,ty=N.section`
  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${A} {
    margin-bottom: 120px;
  }
`,ny=N.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 36px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 100px;
  }

  @media ${A} {
    margin-bottom: 124px;
  }
`,ry=N.h2`
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

  @media ${A} {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`,iy=N.div`
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

  @media ${A} {
    gap: 161px;
  }
`,oy=N.p`
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
  @media ${A} {
    width: 459px;
  }
`,ly=N.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media ${R} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${A} {
    gap: 48px;
  }
`,zc=N.li`
  padding: 12px;
  min-height: 197px;

  background-color: #eaedf1;

  @media ${A} {
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
`,sy=N.img`
  width: 100%;
  height: auto;
`,uy=N.h3`
  display: flex;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${R} {
    font-size: 18px;
  }

  @media ${A} {
    font-size: 32px;
    line-height: 48px;
  }

  & > svg {
    width: 16px;
    height: 16px;

    margin-right: 8px;

    @media ${A} {
      width: 24px;
      height: 24px;
    }
  }
`,ay=N.span`
  display: block;
  width: 100%;
  height: 1px;

  background-color: #97d28b;

  margin-top: 33px;
  margin-bottom: 12px;

  @media ${R} {
    margin-top: 51px;
  }

  @media ${A} {
    margin-top: 94px;
    margin-bottom: 24px;
  }
`,cy=N.p`
  font-size: 14px;
  letter-spacing: -0.56px;
  text-align: justify;
  line-height: normal;

  @media ${A} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,fy=({alt:e,img:t,img2x:n})=>d.jsx(sy,{src:t,alt:`${e}`,srcSet:`${t} 1x, ${n} 2x`}),dy=()=>d.jsxs(ty,{id:"about",children:[d.jsxs(ny,{children:[d.jsx(ry,{children:"Main values of our company"}),d.jsxs(iy,{children:[d.jsx("span",{}),d.jsx(oy,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]})]}),d.jsx(ly,{children:F0.map(({iconName:e,title:t,description:n,type:r,alt:i,img:o,img2x:l})=>r==="image"?d.jsx(zc,{className:r==="image"?"hasImg":"",children:d.jsx(fy,{alt:i,img:o,img2x:l})},i):d.jsxs(zc,{children:[d.jsxs(uy,{children:[d.jsx(Z,{iconName:`${e}`,stroke:"#173D33",style:{marginRight:"8px"}}),t]}),d.jsx(ay,{}),d.jsx(cy,{children:n})]},t))})]}),py=N.section`
  margin-top: 146px;
  margin-bottom: 36px;

  @media ${R} {
    margin-top: 164px;
    margin-bottom: 100px;
  }

  @media ${A} {
    margin-top: 200px;
    margin-bottom: 120px;
  }
`,hy=N.h1`
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

  @media ${A} {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`,my=N.div`
  @media ${R} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,gy=N.p`
  margin-bottom: 24px;

  font-size: 16px;
  letter-spacing: -0.64px;

  @media ${R} {
    width: 342px;

    margin-bottom: 43px;
  }

  @media ${A} {
    width: 363px;
    margin-right: 96px;
    margin-bottom: 20px;
  }
`,yy=N.a`
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
`,vy=N.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 24px 0;

  background-color: #97d28b;

  @media ${R} {
    margin: 26px 0 16px;
  }

  @media ${A} {
    margin: 28px 0 12px;
  }
`,xy=N.address`
  margin-bottom: 36px;
`,wy=N.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }
`,Dc=N.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  font-style: normal;

  @media ${R} {
    display: flex;
    gap: 50px;
  }

  @media ${A} {
    gap: 167px;
  }

  & > span {
    display: none;

    @media ${R} {
      display: block;
    }
  }
`,Tc=N.a``,Sy=N.img`
  width: 320px;
  height: 200px;
  object-fit: cover;

  margin: 0 auto;

  @media ${R} {
    width: 710px;
    height: auto;
  }

  @media ${A} {
    width: 100%;
    height: auto;
  }
`,Lc="/ecosolution/assets/hero-D9CF8VHC.png",ky="/ecosolution/assets/hero@2x-w56nltbM.png",Ey="/ecosolution/assets/hero@3x-4KMo86SA.png",_y=()=>d.jsxs(py,{id:"hero",children:[d.jsxs(my,{children:[d.jsx(hy,{children:"RENEWABLE ENERGY For any task"}),d.jsxs("div",{children:[d.jsx(gy,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),d.jsxs(yy,{href:"#cases",onClick:e=>{e.preventDefault(),al("cases")},children:["Learn More",d.jsx("span",{children:d.jsx(Z,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})]}),d.jsx(vy,{}),d.jsxs("div",{children:[d.jsx(xy,{children:d.jsxs(wy,{children:[d.jsx(Dc,{children:d.jsx(Tc,{href:"https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7+%D0%AF,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000",target:"_blank",rel:"noopener noreferrer",children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"})}),d.jsxs(Dc,{children:[d.jsx(Tc,{href:"mailto:office@ecosolution.com",children:"office@ecosolution.com"}),d.jsx("span",{children:"ecosolution © 2023"})]})]})}),d.jsx(Sy,{src:Lc,alt:"Energy",srcSet:`${Lc} 1x, ${ky} 2x, ${Ey} 3x`})]})]}),Cy=N.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${A} {
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
`,$y=N.h2`
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

  @media ${A} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }
`,jy=N.p`
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

  @media ${A} {
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
`,Ny=()=>{const[e,t]=he.useState(1134147814);return he.useEffect(()=>{const n=setInterval(()=>{t(r=>r+1)},1e3);return()=>clearInterval(n)},[]),d.jsxs(Cy,{id:"electricity",children:[d.jsx($y,{children:"Electricity we produced for all time"}),d.jsx("span",{}),d.jsxs(jy,{children:[S0(e)," ",d.jsx("span",{children:"kWh"})]})]})},Py=N.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${A} {
    margin-bottom: 120px;
  }
`,zy=N.div`
  margin-bottom: 20px;

  @media ${R} {
    display: flex;
    gap: 90px;

    margin-bottom: 32px;
  }

  @media ${A} {
    gap: 205px;
    margin-bottom: 120px;
  }
`,Dy=N.h2`
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

  @media ${A} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`,Ty=N.div`
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
`,Ly=N.p`
  display: block;
  font-size: 28px;
  letter-spacing: -1.12px;

  @media ${R} {
    display: flex;
    margin-left: 10px;
  }

  @media ${A} {
    margin-left: 161px;
  }

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`,Fy=N.div`
  display: flex;
  gap: 12px;

  @media ${R} {
    margin-left: 126px;
  }

  @media ${A} {
    margin-left: 193px;
  }
`,Fc=N.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border: 1px solid #173d33;
  border-radius: 50%;

  @media ${A} {
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
`,Ry=N.ul`
  overflow: hidden;

  @media ${R} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  @media ${A} {
    gap: 48px;
  }

  & > li:nth-child(2) {
    @media (max-width: 767px) {
      display: none;
    }
  }
`,Iy=N.li`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  height: auto;

  background-color: #eaedf1;

  @media ${R} {
  }

  @media ${A} {
    max-width: 596px;
  }
`,Oy=N.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,Ay=N.div`
  padding: 24px 12px 12px;

  @media ${A} {
    padding: 36px 48px;
  }

  & > span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 21px 0 12px 0;

    background-color: #97d28b;
  }
`,My=N.div`
  display: flex;
  justify-content: space-between;
`,Vy=N.p`
  width: 175px;

  font-size: 18px;
  letter-spacing: -0.72px;

  @media ${R} {
    width: 195px;
    height: 66px;

    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media ${A} {
    width: 357px;
    height: auto;

    font-size: 24px;
    letter-spacing: -0.64px;
  }
`,By=N.button`
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
`,Uy=N.div`
  display: flex;
  justify-content: space-between;
`,Hy=N.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${R} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${A} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Wy=N.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${R} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${A} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Qy=({img:e,img2x:t,alt:n,title:r,description:i,date:o})=>d.jsxs(Iy,{children:[d.jsx(Oy,{src:e,alt:`${n}`,srcSet:`${e} 1x, ${t} 2x`}),d.jsxs(Ay,{children:[d.jsxs(My,{children:[d.jsx(Vy,{children:r}),d.jsx(By,{children:d.jsx(Z,{iconName:"icon-arrow-top-right"})})]}),d.jsx("span",{}),d.jsxs(Uy,{children:[d.jsx(Hy,{children:i}),d.jsx(Wy,{children:o})]})]})]}),Ky=()=>{const[e,t]=he.useState([0,1]),n=()=>{t(i=>{const o=i[0]===0?Dr.length-1:i[0]-1,l=i[1]===0?Dr.length-1:i[1]-1;return[o,l]})},r=()=>{t(i=>{const o=i[0]===Dr.length-1?0:i[0]+1,l=i[1]===Dr.length-1?0:i[1]+1;return[o,l]})};return d.jsxs(Py,{id:"cases",children:[d.jsxs(zy,{children:[d.jsx(Dy,{children:"Successful cases of our company"}),d.jsxs(Ty,{children:[d.jsx("span",{}),d.jsxs(Ly,{children:[`${(e[0]+1).toString().padStart(2,"0")}`,d.jsx("span",{children:" /05"})]}),d.jsxs(Fy,{children:[d.jsx(Fc,{onClick:n,children:d.jsx(Z,{iconName:"icon-arrow-left-slider",stroke:"#000"})}),d.jsx(Fc,{onClick:r,children:d.jsx(Z,{iconName:"icon-arrow-right-slider",stroke:"#000"})})]})]})]}),d.jsx(Ry,{children:e.map(i=>d.jsx(Qy,{...Dr[i]},i))})]})},Yy=w0`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Gy=N.section`
  margin-bottom: 36px;

  @media ${R} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-bottom: 100px;
  }

  @media ${A} {
    justify-content: space-between;
    gap: 0;
    margin-bottom: 120px;
  }
`,Xy=N.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${R} {
    display: flex;
  }
`,Zy=N.h2`
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

  @media ${A} {
    width: 398px;
    font-size: 48px;
    line-height: 48px;
  }
`,qy=N.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 296px;
`,Jy=N.li`
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

  @media ${A} {
    width: 596px;
  }

  transition: ${({theme:e})=>e.transitionHover};
`,by=N.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  transition: ${({theme:e})=>e.transitionHover};

  @media ${R} {
    gap: 16px;
  }

  @media ${A} {
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
`,e1=N.h3`
  margin-bottom: ${({open:e})=>e?"16px":"0"};

  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${A} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }

  transition: ${({theme:e})=>e.transitionHover};
`,t1=N.p`
  opacity: 0;
  transform: translateY(-100%);
  animation: ${Yy} 0.5s ease;

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

  @media ${A} {
    margin-left: 52px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }

  transition: ${({theme:e})=>e.transitionHover};
`,n1=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  transition: ${({theme:e})=>e.transitionHover};
`,r1=N.p`
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media ${A} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,i1=N.a`
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
`,o1=N.div`
  margin-top: 36px;

  transition: ${({theme:e})=>e.transitionHover};

  @media ${R} {
    display: none;
  }
`,l1=({question:e,answer:t,toggleAccordion:n,isOpen:r})=>d.jsxs(Jy,{children:[d.jsxs(by,{onClick:n,children:[d.jsx(Z,{iconName:r?"icon-minus":"icon-plus"}),d.jsx(e1,{open:r,children:e})]}),r&&d.jsx(t1,{open:r,children:t})]}),Rc=()=>d.jsxs(n1,{children:[d.jsx(r1,{children:"Didn't find the answer to your question?"}),d.jsxs(i1,{href:"#contact-us",onClick:e=>{e.preventDefault(),al("contact-us")},children:["Contact us",d.jsx("span",{children:d.jsx(Z,{iconName:"icon-arrow-down",width:14,height:14})})]})]}),s1=()=>{const[e,t]=he.useState(jc[0].id),n=r=>{t(r===e?null:r)};return d.jsxs(Gy,{id:"faq",children:[d.jsxs(Xy,{children:[d.jsx(Zy,{children:"Frequently Asked Questions"}),d.jsx(Rc,{})]}),d.jsx(qy,{children:jc.map(({id:r,question:i,answer:o})=>d.jsx(l1,{question:i,answer:o,toggleAccordion:()=>n(r),isOpen:r===e},r))}),d.jsx(o1,{children:d.jsx(Rc,{})})]})},u1=N.section`
  margin-bottom: 36px;

  @media ${R} {
    flex-direction: row;
    margin-bottom: 100px;
  }

  @media ${A} {
    margin-bottom: 120px;
  }
`,a1=N.h2`
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

  @media ${A} {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`,c1=N.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }
`,f1=N.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${R} {
    width: 244px;
  }

  @media ${A} {
    gap: 32px;
    width: 466px;
  }

  & > div {
    cursor: pointer;
  }
`,Mi=N.p`
  margin-bottom: 8px;

  text-align: justify;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${A} {
    margin-bottom: 16px;
  }
`,Vi=N.a`
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
`,d1=N.div`
  & > div {
    display: flex;
    gap: 32px;

    @media ${A} {
      gap: 8px;
    }
  }
`,Ic=N.a`
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
`,p1=N.form`
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

  @media ${A} {
    gap: 32px;
    width: 596px;
    padding: 48px;
  }
`,Bi=N.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`,Ul=N.input`
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

  @media ${A} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`,h1=N.textarea`
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

  @media ${A} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`,m1=N.button`
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
`,Hl=N.span`
  position: absolute;
  bottom: -25px;
  right: 0;
  text-align: right;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  color: #d28b8b;
`,g1=()=>d.jsxs(f1,{children:[d.jsxs("div",{children:[d.jsx(Mi,{children:"Phone:"}),d.jsxs(Vi,{children:[d.jsx(Z,{iconName:"icon-phone"}),"38 (098) 12 34 567"]}),d.jsxs(Vi,{style:{marginTop:"12px"},children:[d.jsx(Z,{iconName:"icon-phone"}),"38 (093) 12 34 567"]})]}),d.jsxs("div",{children:[d.jsx(Mi,{children:"E-mail:"}),d.jsxs(Vi,{children:[d.jsx(Z,{iconName:"icon-email"}),"office@ecosolution.com"]})]}),d.jsxs("div",{children:[d.jsx(Mi,{children:"Address:"}),d.jsxs(Vi,{children:[d.jsx(Z,{iconName:"icon-map",width:24,height:24,stroke:"#173D33"}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),d.jsxs(d1,{children:[d.jsx(Mi,{children:"Social Networks:"}),d.jsxs("div",{children:[d.jsx(Ic,{href:"#",children:d.jsx(Z,{iconName:"icon-facebook"})}),d.jsx(Ic,{href:"#",children:d.jsx(Z,{iconName:"icon-instagram"})})]})]})]});var vi=e=>e.type==="checkbox",er=e=>e instanceof Date,Me=e=>e==null;const Dp=e=>typeof e=="object";var ke=e=>!Me(e)&&!Array.isArray(e)&&Dp(e)&&!er(e),y1=e=>ke(e)&&e.target?vi(e.target)?e.target.checked:e.target.value:e,v1=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,x1=(e,t)=>e.has(v1(t)),w1=e=>{const t=e.constructor&&e.constructor.prototype;return ke(t)&&t.hasOwnProperty("isPrototypeOf")},qu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Lt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(qu&&(e instanceof Blob||e instanceof FileList))&&(n||ke(e)))if(t=n?[]:{},!n&&!w1(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Lt(e[r]));else return e;return t}var xi=e=>Array.isArray(e)?e.filter(Boolean):[],me=e=>e===void 0,I=(e,t,n)=>{if(!t||!ke(e))return n;const r=xi(t.split(/[,[\].]+?/)).reduce((i,o)=>Me(i)?i:i[o],e);return me(r)||r===e?me(e[t])?n:e[t]:r},qt=e=>typeof e=="boolean";const Oc={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Tt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};se.createContext(null);var S1=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const l=o;return t._proxyFormState[l]!==vt.all&&(t._proxyFormState[l]=!r||vt.all),n&&(n[l]=!0),e[l]}});return i},ot=e=>ke(e)&&!Object.keys(e).length,k1=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return ot(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(l=>t[l]===(!r||vt.all))},Wl=e=>Array.isArray(e)?e:[e];function E1(e){const t=se.useRef(e);t.current=e,se.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Pt=e=>typeof e=="string",_1=(e,t,n,r,i)=>Pt(e)?(r&&t.watch.add(e),I(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),I(n,o))):(r&&(t.watchAll=!0),n),Ju=e=>/^\w*$/.test(e),Tp=e=>xi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function le(e,t,n){let r=-1;const i=Ju(t)?[t]:Tp(t),o=i.length,l=o-1;for(;++r<o;){const s=i[r];let u=n;if(r!==l){const c=e[s];u=ke(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[s]=u,e=e[s]}return e}var C1=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Ac=e=>({isOnSubmit:!e||e===vt.onSubmit,isOnBlur:e===vt.onBlur,isOnChange:e===vt.onChange,isOnAll:e===vt.all,isOnTouch:e===vt.onTouched}),Mc=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const lo=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=I(e,i);if(o){const{_f:l,...s}=o;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],i)&&!r)break;if(l.ref&&t(l.ref,l.name)&&!r)break}else ke(s)&&lo(s,t)}}};var $1=(e,t,n)=>{const r=xi(I(e,n));return le(r,"root",t[n]),le(e,n,r),e},bu=e=>e.type==="file",en=e=>typeof e=="function",Ao=e=>{if(!qu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},so=e=>Pt(e),ea=e=>e.type==="radio",Mo=e=>e instanceof RegExp;const Vc={value:!1,isValid:!1},Bc={value:!0,isValid:!0};var Lp=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!me(e[0].attributes.value)?me(e[0].value)||e[0].value===""?Bc:{value:e[0].value,isValid:!0}:Bc:Vc}return Vc};const Uc={isValid:!1,value:null};var Fp=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Uc):Uc;function Hc(e,t,n="validate"){if(so(e)||Array.isArray(e)&&e.every(so)||qt(e)&&!e)return{type:n,message:so(e)?e:"",ref:t}}var Vn=e=>ke(e)&&!Mo(e)?e:{value:e,message:""},Wc=async(e,t,n,r,i)=>{const{ref:o,refs:l,required:s,maxLength:u,minLength:c,min:y,max:g,pattern:m,validate:w,name:k,valueAsNumber:C,mount:U,disabled:h}=e._f,a=I(t,k);if(!U||h)return{};const f=l?l[0]:o,x=Q=>{r&&f.reportValidity&&(f.setCustomValidity(qt(Q)?"":Q||""),f.reportValidity())},E={},j=ea(o),_=vi(o),L=j||_,K=(C||bu(o))&&me(o.value)&&me(a)||Ao(o)&&o.value===""||a===""||Array.isArray(a)&&!a.length,B=C1.bind(null,k,n,E),ae=(Q,H,b,Ee=Tt.maxLength,_e=Tt.minLength)=>{const Ce=Q?H:b;E[k]={type:Q?Ee:_e,message:Ce,ref:o,...B(Q?Ee:_e,Ce)}};if(i?!Array.isArray(a)||!a.length:s&&(!L&&(K||Me(a))||qt(a)&&!a||_&&!Lp(l).isValid||j&&!Fp(l).isValid)){const{value:Q,message:H}=so(s)?{value:!!s,message:s}:Vn(s);if(Q&&(E[k]={type:Tt.required,message:H,ref:f,...B(Tt.required,H)},!n))return x(H),E}if(!K&&(!Me(y)||!Me(g))){let Q,H;const b=Vn(g),Ee=Vn(y);if(!Me(a)&&!isNaN(a)){const _e=o.valueAsNumber||a&&+a;Me(b.value)||(Q=_e>b.value),Me(Ee.value)||(H=_e<Ee.value)}else{const _e=o.valueAsDate||new Date(a),Ce=V=>new Date(new Date().toDateString()+" "+V),z=o.type=="time",O=o.type=="week";Pt(b.value)&&a&&(Q=z?Ce(a)>Ce(b.value):O?a>b.value:_e>new Date(b.value)),Pt(Ee.value)&&a&&(H=z?Ce(a)<Ce(Ee.value):O?a<Ee.value:_e<new Date(Ee.value))}if((Q||H)&&(ae(!!Q,b.message,Ee.message,Tt.max,Tt.min),!n))return x(E[k].message),E}if((u||c)&&!K&&(Pt(a)||i&&Array.isArray(a))){const Q=Vn(u),H=Vn(c),b=!Me(Q.value)&&a.length>+Q.value,Ee=!Me(H.value)&&a.length<+H.value;if((b||Ee)&&(ae(b,Q.message,H.message),!n))return x(E[k].message),E}if(m&&!K&&Pt(a)){const{value:Q,message:H}=Vn(m);if(Mo(Q)&&!a.match(Q)&&(E[k]={type:Tt.pattern,message:H,ref:o,...B(Tt.pattern,H)},!n))return x(H),E}if(w){if(en(w)){const Q=await w(a,t),H=Hc(Q,f);if(H&&(E[k]={...H,...B(Tt.validate,H.message)},!n))return x(H.message),E}else if(ke(w)){let Q={};for(const H in w){if(!ot(Q)&&!n)break;const b=Hc(await w[H](a,t),f,H);b&&(Q={...b,...B(H,b.message)},x(b.message),n&&(E[k]=Q))}if(!ot(Q)&&(E[k]={ref:f,...Q},!n))return E}}return x(!0),E};function j1(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=me(e)?r++:e[t[r++]];return e}function N1(e){for(const t in e)if(e.hasOwnProperty(t)&&!me(e[t]))return!1;return!0}function ze(e,t){const n=Array.isArray(t)?t:Ju(t)?[t]:Tp(t),r=n.length===1?e:j1(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ke(r)&&ot(r)||Array.isArray(r)&&N1(r))&&ze(e,n.slice(0,-1)),e}function Ql(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Vo=e=>Me(e)||!Dp(e);function _n(e,t){if(Vo(e)||Vo(t))return e===t;if(er(e)&&er(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const l=t[i];if(er(o)&&er(l)||ke(o)&&ke(l)||Array.isArray(o)&&Array.isArray(l)?!_n(o,l):o!==l)return!1}}return!0}var Rp=e=>e.type==="select-multiple",P1=e=>ea(e)||vi(e),Kl=e=>Ao(e)&&e.isConnected,Ip=e=>{for(const t in e)if(en(e[t]))return!0;return!1};function Bo(e,t={}){const n=Array.isArray(e);if(ke(e)||n)for(const r in e)Array.isArray(e[r])||ke(e[r])&&!Ip(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Bo(e[r],t[r])):Me(e[r])||(t[r]=!0);return t}function Op(e,t,n){const r=Array.isArray(e);if(ke(e)||r)for(const i in e)Array.isArray(e[i])||ke(e[i])&&!Ip(e[i])?me(t)||Vo(n[i])?n[i]=Array.isArray(e[i])?Bo(e[i],[]):{...Bo(e[i])}:Op(e[i],Me(t)?{}:t[i],n[i]):n[i]=!_n(e[i],t[i]);return n}var Yl=(e,t)=>Op(e,t,Bo(t)),Ap=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>me(e)?e:t?e===""?NaN:e&&+e:n&&Pt(e)?new Date(e):r?r(e):e;function Gl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return bu(t)?t.files:ea(t)?Fp(e.refs).value:Rp(t)?[...t.selectedOptions].map(({value:n})=>n):vi(t)?Lp(e.refs).value:Ap(me(t.value)?e.ref.value:t.value,e)}var z1=(e,t,n,r)=>{const i={};for(const o of e){const l=I(t,o);l&&le(i,o,l._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Tr=e=>me(e)?e:Mo(e)?e.source:ke(e)?Mo(e.value)?e.value.source:e.value:e,D1=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qc(e,t,n){const r=I(e,n);if(r||Ju(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),l=I(t,o),s=I(e,o);if(l&&!Array.isArray(l)&&n!==o)return{name:n};if(s&&s.type)return{name:o,error:s};i.pop()}return{name:n}}var T1=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,L1=(e,t)=>!xi(I(e,t)).length&&ze(e,t);const F1={mode:vt.onSubmit,reValidateMode:vt.onChange,shouldFocusError:!0};function R1(e={},t){let n={...F1,...e},r={submitCount:0,isDirty:!1,isLoading:en(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=ke(n.defaultValues)||ke(n.values)?Lt(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:Lt(o),s={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,y=0;const g={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Ql(),array:Ql(),state:Ql()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,k=Ac(n.mode),C=Ac(n.reValidateMode),U=n.criteriaMode===vt.all,h=p=>v=>{clearTimeout(y),y=setTimeout(p,v)},a=async p=>{if(g.isValid||p){const v=n.resolver?ot((await K()).errors):await ae(i,!0);v!==r.isValid&&m.state.next({isValid:v})}},f=p=>g.isValidating&&m.state.next({isValidating:p}),x=(p,v=[],S,F,D=!0,P=!0)=>{if(F&&S){if(s.action=!0,P&&Array.isArray(I(i,p))){const M=S(I(i,p),F.argA,F.argB);D&&le(i,p,M)}if(P&&Array.isArray(I(r.errors,p))){const M=S(I(r.errors,p),F.argA,F.argB);D&&le(r.errors,p,M),L1(r.errors,p)}if(g.touchedFields&&P&&Array.isArray(I(r.touchedFields,p))){const M=S(I(r.touchedFields,p),F.argA,F.argB);D&&le(r.touchedFields,p,M)}g.dirtyFields&&(r.dirtyFields=Yl(o,l)),m.state.next({name:p,isDirty:H(p,v),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else le(l,p,v)},E=(p,v)=>{le(r.errors,p,v),m.state.next({errors:r.errors})},j=(p,v,S,F)=>{const D=I(i,p);if(D){const P=I(l,p,me(S)?I(o,p):S);me(P)||F&&F.defaultChecked||v?le(l,p,v?P:Gl(D._f)):_e(p,P),s.mount&&a()}},_=(p,v,S,F,D)=>{let P=!1,M=!1;const ee={name:p};if(!S||F){g.isDirty&&(M=r.isDirty,r.isDirty=ee.isDirty=H(),P=M!==ee.isDirty);const ye=_n(I(o,p),v);M=I(r.dirtyFields,p),ye?ze(r.dirtyFields,p):le(r.dirtyFields,p,!0),ee.dirtyFields=r.dirtyFields,P=P||g.dirtyFields&&M!==!ye}if(S){const ye=I(r.touchedFields,p);ye||(le(r.touchedFields,p,S),ee.touchedFields=r.touchedFields,P=P||g.touchedFields&&ye!==S)}return P&&D&&m.state.next(ee),P?ee:{}},L=(p,v,S,F)=>{const D=I(r.errors,p),P=g.isValid&&qt(v)&&r.isValid!==v;if(e.delayError&&S?(c=h(()=>E(p,S)),c(e.delayError)):(clearTimeout(y),c=null,S?le(r.errors,p,S):ze(r.errors,p)),(S?!_n(D,S):D)||!ot(F)||P){const M={...F,...P&&qt(v)?{isValid:v}:{},errors:r.errors,name:p};r={...r,...M},m.state.next(M)}f(!1)},K=async p=>n.resolver(l,n.context,z1(p||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),B=async p=>{const{errors:v}=await K(p);if(p)for(const S of p){const F=I(v,S);F?le(r.errors,S,F):ze(r.errors,S)}else r.errors=v;return v},ae=async(p,v,S={valid:!0})=>{for(const F in p){const D=p[F];if(D){const{_f:P,...M}=D;if(P){const ee=u.array.has(P.name),ye=await Wc(D,l,U,n.shouldUseNativeValidation&&!v,ee);if(ye[P.name]&&(S.valid=!1,v))break;!v&&(I(ye,P.name)?ee?$1(r.errors,ye,P.name):le(r.errors,P.name,ye[P.name]):ze(r.errors,P.name))}M&&await ae(M,v,S)}}return S.valid},Q=()=>{for(const p of u.unMount){const v=I(i,p);v&&(v._f.refs?v._f.refs.every(S=>!Kl(S)):!Kl(v._f.ref))&&Qe(p)}u.unMount=new Set},H=(p,v)=>(p&&v&&le(l,p,v),!_n(oe(),o)),b=(p,v,S)=>_1(p,u,{...s.mount?l:me(v)?o:Pt(p)?{[p]:v}:v},S,v),Ee=p=>xi(I(s.mount?l:o,p,e.shouldUnregister?I(o,p,[]):[])),_e=(p,v,S={})=>{const F=I(i,p);let D=v;if(F){const P=F._f;P&&(!P.disabled&&le(l,p,Ap(v,P)),D=Ao(P.ref)&&Me(v)?"":v,Rp(P.ref)?[...P.ref.options].forEach(M=>M.selected=D.includes(M.value)):P.refs?vi(P.ref)?P.refs.length>1?P.refs.forEach(M=>(!M.defaultChecked||!M.disabled)&&(M.checked=Array.isArray(D)?!!D.find(ee=>ee===M.value):D===M.value)):P.refs[0]&&(P.refs[0].checked=!!D):P.refs.forEach(M=>M.checked=M.value===D):bu(P.ref)?P.ref.value="":(P.ref.value=D,P.ref.type||m.values.next({name:p,values:{...l}})))}(S.shouldDirty||S.shouldTouch)&&_(p,D,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&G(p)},Ce=(p,v,S)=>{for(const F in v){const D=v[F],P=`${p}.${F}`,M=I(i,P);(u.array.has(p)||!Vo(D)||M&&!M._f)&&!er(D)?Ce(P,D,S):_e(P,D,S)}},z=(p,v,S={})=>{const F=I(i,p),D=u.array.has(p),P=Lt(v);le(l,p,P),D?(m.array.next({name:p,values:{...l}}),(g.isDirty||g.dirtyFields)&&S.shouldDirty&&m.state.next({name:p,dirtyFields:Yl(o,l),isDirty:H(p,P)})):F&&!F._f&&!Me(P)?Ce(p,P,S):_e(p,P,S),Mc(p,u)&&m.state.next({...r}),m.values.next({name:p,values:{...l}}),!s.mount&&t()},O=async p=>{const v=p.target;let S=v.name,F=!0;const D=I(i,S),P=()=>v.type?Gl(D._f):y1(p),M=ee=>{F=Number.isNaN(ee)||ee===I(l,S,ee)};if(D){let ee,ye;const wi=P(),On=p.type===Oc.BLUR||p.type===Oc.FOCUS_OUT,Vp=!D1(D._f)&&!n.resolver&&!I(r.errors,S)&&!D._f.deps||T1(On,I(r.touchedFields,S),r.isSubmitted,C,k),cl=Mc(S,u,On);le(l,S,wi),On?(D._f.onBlur&&D._f.onBlur(p),c&&c(0)):D._f.onChange&&D._f.onChange(p);const fl=_(S,wi,On,!1),Bp=!ot(fl)||cl;if(!On&&m.values.next({name:S,type:p.type,values:{...l}}),Vp)return g.isValid&&a(),Bp&&m.state.next({name:S,...cl?{}:fl});if(!On&&cl&&m.state.next({...r}),f(!0),n.resolver){const{errors:ia}=await K([S]);if(M(wi),F){const Up=Qc(r.errors,i,S),oa=Qc(ia,i,Up.name||S);ee=oa.error,S=oa.name,ye=ot(ia)}}else ee=(await Wc(D,l,U,n.shouldUseNativeValidation))[S],M(wi),F&&(ee?ye=!1:g.isValid&&(ye=await ae(i,!0)));F&&(D._f.deps&&G(D._f.deps),L(S,ye,ee,fl))}},V=(p,v)=>{if(I(r.errors,v)&&p.focus)return p.focus(),1},G=async(p,v={})=>{let S,F;const D=Wl(p);if(f(!0),n.resolver){const P=await B(me(p)?p:D);S=ot(P),F=p?!D.some(M=>I(P,M)):S}else p?(F=(await Promise.all(D.map(async P=>{const M=I(i,P);return await ae(M&&M._f?{[P]:M}:M)}))).every(Boolean),!(!F&&!r.isValid)&&a()):F=S=await ae(i);return m.state.next({...!Pt(p)||g.isValid&&S!==r.isValid?{}:{name:p},...n.resolver||!p?{isValid:S}:{},errors:r.errors,isValidating:!1}),v.shouldFocus&&!F&&lo(i,V,p?D:u.mount),F},oe=p=>{const v={...o,...s.mount?l:{}};return me(p)?v:Pt(p)?I(v,p):p.map(S=>I(v,S))},pt=(p,v)=>({invalid:!!I((v||r).errors,p),isDirty:!!I((v||r).dirtyFields,p),isTouched:!!I((v||r).touchedFields,p),error:I((v||r).errors,p)}),He=p=>{p&&Wl(p).forEach(v=>ze(r.errors,v)),m.state.next({errors:p?r.errors:{}})},it=(p,v,S)=>{const F=(I(i,p,{_f:{}})._f||{}).ref;le(r.errors,p,{...v,ref:F}),m.state.next({name:p,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&F&&F.focus&&F.focus()},We=(p,v)=>en(p)?m.values.subscribe({next:S=>p(b(void 0,v),S)}):b(p,v,!0),Qe=(p,v={})=>{for(const S of p?Wl(p):u.mount)u.mount.delete(S),u.array.delete(S),v.keepValue||(ze(i,S),ze(l,S)),!v.keepError&&ze(r.errors,S),!v.keepDirty&&ze(r.dirtyFields,S),!v.keepTouched&&ze(r.touchedFields,S),!n.shouldUnregister&&!v.keepDefaultValue&&ze(o,S);m.values.next({values:{...l}}),m.state.next({...r,...v.keepDirty?{isDirty:H()}:{}}),!v.keepIsValid&&a()},Et=({disabled:p,name:v,field:S,fields:F,value:D})=>{if(qt(p)){const P=p?void 0:me(D)?Gl(S?S._f:I(F,v)._f):D;le(l,v,P),_(v,P,!1,!1,!0)}},gn=(p,v={})=>{let S=I(i,p);const F=qt(v.disabled);return le(i,p,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:p}},name:p,mount:!0,...v}}),u.mount.add(p),S?Et({field:S,disabled:v.disabled,name:p}):j(p,!0,v.value),{...F?{disabled:v.disabled}:{},...n.progressive?{required:!!v.required,min:Tr(v.min),max:Tr(v.max),minLength:Tr(v.minLength),maxLength:Tr(v.maxLength),pattern:Tr(v.pattern)}:{},name:p,onChange:O,onBlur:O,ref:D=>{if(D){gn(p,v),S=I(i,p);const P=me(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,M=P1(P),ee=S._f.refs||[];if(M?ee.find(ye=>ye===P):P===S._f.ref)return;le(i,p,{_f:{...S._f,...M?{refs:[...ee.filter(Kl),P,...Array.isArray(I(o,p))?[{}]:[]],ref:{type:P.type,name:p}}:{ref:P}}}),j(p,!1,void 0,P)}else S=I(i,p,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||v.shouldUnregister)&&!(x1(u.array,p)&&s.action)&&u.unMount.add(p)}}},yn=()=>n.shouldFocusError&&lo(i,V,u.mount),_t=p=>{qt(p)&&(m.state.next({disabled:p}),lo(i,v=>{v.disabled=p},0,!1))},ta=(p,v)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let F=Lt(l);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:D,values:P}=await K();r.errors=D,F=P}else await ae(i);ze(r.errors,"root"),ot(r.errors)?(m.state.next({errors:{}}),await p(F,S)):(v&&await v({...r.errors},S),yn(),setTimeout(yn)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Mp=(p,v={})=>{I(i,p)&&(me(v.defaultValue)?z(p,I(o,p)):(z(p,v.defaultValue),le(o,p,v.defaultValue)),v.keepTouched||ze(r.touchedFields,p),v.keepDirty||(ze(r.dirtyFields,p),r.isDirty=v.defaultValue?H(p,I(o,p)):H()),v.keepError||(ze(r.errors,p),g.isValid&&a()),m.state.next({...r}))},na=(p,v={})=>{const S=p?Lt(p):o,F=Lt(S),D=p&&!ot(p)?F:o;if(v.keepDefaultValues||(o=S),!v.keepValues){if(v.keepDirtyValues||w)for(const P of u.mount)I(r.dirtyFields,P)?le(D,P,I(l,P)):z(P,I(D,P));else{if(qu&&me(p))for(const P of u.mount){const M=I(i,P);if(M&&M._f){const ee=Array.isArray(M._f.refs)?M._f.refs[0]:M._f.ref;if(Ao(ee)){const ye=ee.closest("form");if(ye){ye.reset();break}}}}i={}}l=e.shouldUnregister?v.keepDefaultValues?Lt(o):{}:Lt(D),m.array.next({values:{...D}}),m.values.next({values:{...D}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!g.isValid||!!v.keepIsValid,s.watch=!!e.shouldUnregister,m.state.next({submitCount:v.keepSubmitCount?r.submitCount:0,isDirty:v.keepDirty?r.isDirty:!!(v.keepDefaultValues&&!_n(p,o)),isSubmitted:v.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:v.keepDirtyValues?r.dirtyFields:v.keepDefaultValues&&p?Yl(o,p):{},touchedFields:v.keepTouched?r.touchedFields:{},errors:v.keepErrors?r.errors:{},isSubmitSuccessful:v.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ra=(p,v)=>na(en(p)?p(l):p,v);return{control:{register:gn,unregister:Qe,getFieldState:pt,handleSubmit:ta,setError:it,_executeSchema:K,_getWatch:b,_getDirty:H,_updateValid:a,_removeUnmounted:Q,_updateFieldArray:x,_updateDisabledField:Et,_getFieldArray:Ee,_reset:na,_resetDefaultValues:()=>en(n.defaultValues)&&n.defaultValues().then(p=>{ra(p,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:p=>{r={...r,...p}},_disableForm:_t,_subjects:m,_proxyFormState:g,get _fields(){return i},get _formValues(){return l},get _state(){return s},set _state(p){s=p},get _defaultValues(){return o},get _names(){return u},set _names(p){u=p},get _formState(){return r},set _formState(p){r=p},get _options(){return n},set _options(p){n={...n,...p}}},trigger:G,register:gn,handleSubmit:ta,watch:We,setValue:z,getValues:oe,reset:ra,resetField:Mp,clearErrors:He,unregister:Qe,setError:it,setFocus:(p,v={})=>{const S=I(i,p),F=S&&S._f;if(F){const D=F.refs?F.refs[0]:F.ref;D.focus&&(D.focus(),v.shouldSelect&&D.select())}},getFieldState:pt}}function I1(e={}){const t=se.useRef(),n=se.useRef(),[r,i]=se.useState({isDirty:!1,isValidating:!1,isLoading:en(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:en(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...R1(e,()=>i(l=>({...l}))),formState:r});const o=t.current.control;return o._options=e,E1({subject:o._subjects.state,next:l=>{k1(l,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),se.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),se.useEffect(()=>{if(o._proxyFormState.isDirty){const l=o._getDirty();l!==r.isDirty&&o._subjects.state.next({isDirty:l})}},[o,r.isDirty]),se.useEffect(()=>{e.values&&!_n(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),se.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=S1(r,o),t.current}const O1=()=>{const{register:e,handleSubmit:t,reset:n,formState:{errors:r}}=I1({defaultValues:{name:"",email:"",phone:"",message:""}}),i=o=>(console.log(o),n());return d.jsx(d0,{shouldForwardProp:o=>o!=="error",children:d.jsxs(p1,{onSubmit:t(i),children:[d.jsxs(Bi,{children:["* Full name:",d.jsx(Ul,{type:"text",placeholder:"John Rosie",error:r.name,...e("name",{required:!0})}),r.name&&d.jsx(Hl,{children:"Wrong Fullname"})]}),d.jsxs(Bi,{children:["* E-mail:",d.jsx(Ul,{type:"email",placeholder:"johnrosie@gmail.com",error:r.email,...e("email",{required:!0})}),r.email&&d.jsx(Hl,{children:"Wrong Email"})]}),d.jsxs(Bi,{children:["* Phone:",d.jsx(Ul,{type:"number",placeholder:"380961234567",error:r.phone,...e("phone",{required:!0})}),r.phone&&d.jsx(Hl,{children:"Wrong Phone"})]}),d.jsxs(Bi,{children:["Message:",d.jsx(h1,{placeholder:"My message....",...e("message",{required:!1})})]}),d.jsxs(m1,{type:"submit",children:["Send",d.jsx("span",{children:d.jsx(Z,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})})},A1=()=>d.jsxs(u1,{id:"contact-us",children:[d.jsx(a1,{children:"Contact us"}),d.jsxs(c1,{children:[d.jsx(g1,{}),d.jsx(O1,{})]})]}),M1=()=>d.jsxs(ey,{children:[d.jsx(_y,{}),d.jsx(dy,{}),d.jsx(Ny,{}),d.jsx(Ky,{}),d.jsx(s1,{}),d.jsx(A1,{})]}),V1=N.footer`
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
`,B1=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,U1=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${R} {
    width: 342px;
  }

  @media ${A} {
    width: 405px;
  }

  & > div {
    display: none;

    @media ${R} {
      display: flex;
    }
  }
`,H1=N.button`
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
`,Kc=N.div`
  display: flex;
  gap: 8px;

  @media (max-width: 767px) {
    margin: 24px auto;
  }

  @media ${R} {
    display: none;
  }
`,Ui=N.a`
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
`,W1=N.div`
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

    @media ${A} {
      width: 405px;
    }
  }
`,Q1=()=>d.jsxs(V1,{children:[d.jsxs(B1,{children:[d.jsxs(zp,{href:"/",children:[d.jsx(Z,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),d.jsx(Z,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),d.jsx(Z,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),d.jsxs(U1,{children:[d.jsxs(Kc,{children:[d.jsx(Ui,{href:"#",children:d.jsx(Z,{iconName:"icon-facebook"})}),d.jsx(Ui,{href:"#",children:d.jsx(Z,{iconName:"icon-instagram"})})]}),d.jsx(H1,{onClick:()=>k0(),children:d.jsx(Z,{iconName:"icon-arrow-top"})})]})]}),d.jsxs(Kc,{children:[d.jsx(Ui,{href:"#",children:d.jsx(Z,{iconName:"icon-facebook"})}),d.jsx(Ui,{href:"#",children:d.jsx(Z,{iconName:"icon-instagram"})})]}),d.jsxs(W1,{children:[d.jsx("p",{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),d.jsxs("div",{children:[d.jsx("p",{children:"office@ecosolution.com"}),d.jsx("p",{children:"ecosolution © 2023"})]})]})]}),K1=()=>d.jsxs(d.Fragment,{children:[d.jsx(b0,{}),d.jsx(M1,{}),d.jsx(Q1,{})]}),Y1={main:"FiraSans-Regular",secondary:"Oswald-Regular"},G1={phone:"(min-width: 480px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)"},X1={main:"0px 8px 14px rgba(136, 198, 253, 0.19)",secondary:"7px 13px 14px rgba(116, 177, 232, 0.24)"},Z1={xs:"10px",sm:"12px",md:"14px",ml:"16px",lg:"18px",xl:"20px",xxl:"28px",xxxl:"36px",big:"48px",huge:"64px",gigantic:"100px",mega:"164px"},q1="250ms cubic-bezier(0.4, 0, 0.2, 1)",J1={colors:{backgroundMain:"#F3F5FA",textMain:"#173D33"},fonts:Y1,media:G1,boxShadow:X1,fontSizes:Z1,transitionHover:q1},b1="/ecosolution/assets/FiraSans-Regular-GxcdJFZq.woff",ev="/ecosolution/assets/Oswald-Regular-7O1fX0n8.woff",tv=[{fontFamily:"FiraSans-Regular",fontUrl:`${b1}`},{fontFamily:"Oswald-Regular",fontUrl:`${ev}`}];function nv(){return hg(tv)?d.jsxs(g0,{theme:J1,children:[d.jsx(E0,{}),d.jsx(K1,{})]}):d.jsx("div",{children:"Loading..."})}Xl.createRoot(document.getElementById("root")).render(d.jsx(se.StrictMode,{children:d.jsx(nv,{})}));
