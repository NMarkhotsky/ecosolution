(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uc={exports:{}},Vo={},Bc={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pi=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),Op=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Vp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Hp=Symbol.for("react.memo"),Qp=Symbol.for("react.lazy"),na=Symbol.iterator;function Kp(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var Wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hc=Object.assign,Qc={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Wc}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kc(){}Kc.prototype=vr.prototype;function Gs(e,t,n){this.props=e,this.context=t,this.refs=Qc,this.updater=n||Wc}var Ys=Gs.prototype=new Kc;Ys.constructor=Gs;Hc(Ys,vr.prototype);Ys.isPureReactComponent=!0;var ra=Array.isArray,Gc=Object.prototype.hasOwnProperty,Xs={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Xc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Gc.call(t,r)&&!Yc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:pi,type:e,key:o,ref:l,props:i,_owner:Xs.current}}function Gp(e,t){return{$$typeof:pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zs(e){return typeof e=="object"&&e!==null&&e.$$typeof===pi}function Yp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ia=/\/+/g;function al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Yp(""+e.key):t.toString(36)}function Bi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pi:case Ip:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+al(l,0):r,ra(i)?(n="",e!=null&&(n=e.replace(ia,"$&/")+"/"),Bi(i,t,n,"",function(c){return c})):i!=null&&(Zs(i)&&(i=Gp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ia,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ra(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+al(o,s);l+=Bi(o,t,n,u,i)}else if(u=Kp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+al(o,s++),l+=Bi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Si(e,t,n){if(e==null)return e;var r=[],i=0;return Bi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Xp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},Wi={transition:null},Zp={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Wi,ReactCurrentOwner:Xs};G.Children={map:Si,forEach:function(e,t,n){Si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Si(e,function(){t++}),t},toArray:function(e){return Si(e,function(t){return t})||[]},only:function(e){if(!Zs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=vr;G.Fragment=Op;G.Profiler=Mp;G.PureComponent=Gs;G.StrictMode=Ap;G.Suspense=Wp;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zp;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Xs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Gc.call(t,u)&&!Yc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:pi,type:e.type,key:i,ref:o,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vp,_context:e},e.Consumer=e};G.createElement=Xc;G.createFactory=function(e){var t=Xc.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Bp,render:e}};G.isValidElement=Zs;G.lazy=function(e){return{$$typeof:Qp,_payload:{_status:-1,_result:e},_init:Xp}};G.memo=function(e,t){return{$$typeof:Hp,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Wi.transition;Wi.transition={};try{e()}finally{Wi.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Ue.current.useCallback(e,t)};G.useContext=function(e){return Ue.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};G.useEffect=function(e,t){return Ue.current.useEffect(e,t)};G.useId=function(){return Ue.current.useId()};G.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Ue.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};G.useRef=function(e){return Ue.current.useRef(e)};G.useState=function(e){return Ue.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Ue.current.useTransition()};G.version="18.2.0";Bc.exports=G;var Ne=Bc.exports;const le=Vc(Ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp=Ne,Jp=Symbol.for("react.element"),bp=Symbol.for("react.fragment"),eh=Object.prototype.hasOwnProperty,th=qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nh={key:!0,ref:!0,__self:!0,__source:!0};function Zc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)eh.call(t,r)&&!nh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jp,type:e,key:o,ref:l,props:i,_owner:th.current}}Vo.Fragment=bp;Vo.jsx=Zc;Vo.jsxs=Zc;Uc.exports=Vo;var g=Uc.exports,Kl={},qc={exports:{}},nt={},Jc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,I){var V=z.length;z.push(I);e:for(;0<V;){var Y=V-1>>>1,ie=z[Y];if(0<i(ie,I))z[Y]=I,z[V]=ie,V=Y;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var I=z[0],V=z.pop();if(V!==I){z[0]=V;e:for(var Y=0,ie=z.length,pt=ie>>>1;Y<pt;){var We=2*(Y+1)-1,it=z[We],He=We+1,Qe=z[He];if(0>i(it,V))He<ie&&0>i(Qe,it)?(z[Y]=Qe,z[He]=V,Y=He):(z[Y]=it,z[We]=V,Y=We);else if(He<ie&&0>i(Qe,V))z[Y]=Qe,z[He]=V,Y=He;else break e}}return I}function i(z,I){var V=z.sortIndex-I.sortIndex;return V!==0?V:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],y=1,m=null,h=3,w=!1,k=!1,C=!1,B=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=z)r(c),I.sortIndex=I.expirationTime,t(u,I);else break;I=n(c)}}function x(z){if(C=!1,f(z),!k)if(n(u)!==null)k=!0,Ee(E);else{var I=n(c);I!==null&&_e(x,I.startTime-z)}}function E(z,I){k=!1,C&&(C=!1,p(L),L=-1),w=!0;var V=h;try{for(f(I),m=n(u);m!==null&&(!(m.expirationTime>I)||z&&!ue());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,h=m.priorityLevel;var ie=Y(m.expirationTime<=I);I=e.unstable_now(),typeof ie=="function"?m.callback=ie:m===n(u)&&r(u),f(I)}else r(u);m=n(u)}if(m!==null)var pt=!0;else{var We=n(c);We!==null&&_e(x,We.startTime-I),pt=!1}return pt}finally{m=null,h=V,w=!1}}var N=!1,_=null,L=-1,K=5,U=-1;function ue(){return!(e.unstable_now()-U<K)}function Q(){if(_!==null){var z=e.unstable_now();U=z;var I=!0;try{I=_(!0,z)}finally{I?W():(N=!1,_=null)}}else N=!1}var W;if(typeof a=="function")W=function(){a(Q)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ke=J.port2;J.port1.onmessage=Q,W=function(){ke.postMessage(null)}}else W=function(){B(Q,0)};function Ee(z){_=z,N||(N=!0,W())}function _e(z,I){L=B(function(){z(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Ee(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var V=h;h=I;try{return z()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=h;h=z;try{return I()}finally{h=V}},e.unstable_scheduleCallback=function(z,I,V){var Y=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=V+ie,z={id:y++,callback:I,priorityLevel:z,startTime:V,expirationTime:ie,sortIndex:-1},V>Y?(z.sortIndex=V,t(c,z),n(u)===null&&z===n(c)&&(C?(p(L),L=-1):C=!0,_e(x,V-Y))):(z.sortIndex=ie,t(u,z),k||w||(k=!0,Ee(E))),z},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(z){var I=h;return function(){var V=h;h=I;try{return z.apply(this,arguments)}finally{h=V}}}})(bc);Jc.exports=bc;var rh=Jc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef=Ne,tt=rh;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tf=new Set,Gr={};function Rn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)tf.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,ih=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oa={},la={};function oh(e){return Gl.call(la,e)?!0:Gl.call(oa,e)?!1:ih.test(e)?la[e]=!0:(oa[e]=!0,!1)}function lh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sh(e,t,n,r){if(t===null||typeof t>"u"||lh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var qs=/[\-:]([a-z])/g;function Js(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qs,Js);Le[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qs,Js);Le[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qs,Js);Le[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sh(t,n,i,r)&&(n=null),r||i===null?oh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),eu=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),nf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),tu=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),of=Symbol.for("react.offscreen"),sa=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=sa&&e[sa]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,cl;function Tr(e){if(cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);cl=t&&t[1]||""}return`
`+cl+e}var fl=!1;function dl(e,t){if(!e||fl)return"";fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function uh(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=dl(e.type,!1),e;case 11:return e=dl(e.type.render,!1),e;case 1:return e=dl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Un:return"Portal";case Yl:return"Profiler";case eu:return"StrictMode";case Xl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rf:return(e.displayName||"Context")+".Consumer";case nf:return(e._context.displayName||"Context")+".Provider";case tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nu:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function ah(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ch(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){e._valueTracker||(e._valueTracker=ch(e))}function sf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function so(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uf(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function bl(e,t){uf(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?es(e,t.type,n):t.hasOwnProperty("defaultValue")&&es(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function aa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function es(e,t,n){(t!=="number"||so(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ts(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ca(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Lr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function af(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,ff=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fh=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){fh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function df(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function pf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=df(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dh=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rs(e,t){if(t){if(dh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function is(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var os=null;function ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,nr=null,rr=null;function da(e){if(e=gi(e)){if(typeof ls!="function")throw Error($(280));var t=e.stateNode;t&&(t=Qo(t),ls(e.stateNode,e.type,t))}}function hf(e){nr?rr?rr.push(e):rr=[e]:nr=e}function mf(){if(nr){var e=nr,t=rr;if(rr=nr=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function gf(e,t){return e(t)}function yf(){}var pl=!1;function vf(e,t,n){if(pl)return e(t,n);pl=!0;try{return gf(e,t,n)}finally{pl=!1,(nr!==null||rr!==null)&&(yf(),mf())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Qo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ss=!1;if(Vt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{ss=!1}function ph(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var Ar=!1,uo=null,ao=!1,us=null,hh={onError:function(e){Ar=!0,uo=e}};function mh(e,t,n,r,i,o,l,s,u){Ar=!1,uo=null,ph.apply(hh,arguments)}function gh(e,t,n,r,i,o,l,s,u){if(mh.apply(this,arguments),Ar){if(Ar){var c=uo;Ar=!1,uo=null}else throw Error($(198));ao||(ao=!0,us=c)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pa(e){if(In(e)!==e)throw Error($(188))}function yh(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pa(i),e;if(o===r)return pa(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function wf(e){return e=yh(e),e!==null?Sf(e):null}function Sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sf(e);if(t!==null)return t;e=e.sibling}return null}var kf=tt.unstable_scheduleCallback,ha=tt.unstable_cancelCallback,vh=tt.unstable_shouldYield,xh=tt.unstable_requestPaint,he=tt.unstable_now,wh=tt.unstable_getCurrentPriorityLevel,iu=tt.unstable_ImmediatePriority,Ef=tt.unstable_UserBlockingPriority,co=tt.unstable_NormalPriority,Sh=tt.unstable_LowPriority,_f=tt.unstable_IdlePriority,Uo=null,zt=null;function kh(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ch,Eh=Math.log,_h=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(Eh(e)/_h|0)|0}var Ci=64,$i=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Fr(s):(o&=l,o!==0&&(r=Fr(o)))}else l=n&~i,l!==0?r=Fr(l):o!==0&&(r=Fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function $h(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=$h(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function as(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Ph(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ou(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function $f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nf,lu,Pf,jf,zf,cs=!1,Ni=[],tn=null,nn=null,rn=null,Zr=new Map,qr=new Map,Xt=[],jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ma(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function _r(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&lu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zh(e,t,n,r,i){switch(t){case"focusin":return tn=_r(tn,e,t,n,r,i),!0;case"dragenter":return nn=_r(nn,e,t,n,r,i),!0;case"mouseover":return rn=_r(rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zr.set(o,_r(Zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qr.set(o,_r(qr.get(o)||null,e,t,n,r,i)),!0}return!1}function Df(e){var t=wn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=xf(n),t!==null){e.blockedOn=t,zf(e.priority,function(){Pf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);os=r,n.target.dispatchEvent(r),os=null}else return t=gi(n),t!==null&&lu(t),e.blockedOn=n,!1;t.shift()}return!0}function ga(e,t,n){Hi(e)&&n.delete(t)}function Dh(){cs=!1,tn!==null&&Hi(tn)&&(tn=null),nn!==null&&Hi(nn)&&(nn=null),rn!==null&&Hi(rn)&&(rn=null),Zr.forEach(ga),qr.forEach(ga)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,cs||(cs=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Dh)))}function Jr(e){function t(i){return Cr(i,e)}if(0<Ni.length){Cr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Cr(tn,e),nn!==null&&Cr(nn,e),rn!==null&&Cr(rn,e),Zr.forEach(t),qr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Df(n),n.blockedOn===null&&Xt.shift()}var ir=Ht.ReactCurrentBatchConfig,po=!0;function Th(e,t,n,r){var i=q,o=ir.transition;ir.transition=null;try{q=1,su(e,t,n,r)}finally{q=i,ir.transition=o}}function Lh(e,t,n,r){var i=q,o=ir.transition;ir.transition=null;try{q=4,su(e,t,n,r)}finally{q=i,ir.transition=o}}function su(e,t,n,r){if(po){var i=fs(e,t,n,r);if(i===null)_l(e,t,r,ho,n),ma(e,r);else if(zh(i,e,t,n,r))r.stopPropagation();else if(ma(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var o=gi(i);if(o!==null&&Nf(o),o=fs(e,t,n,r),o===null&&_l(e,t,r,ho,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else _l(e,t,r,null,n)}}var ho=null;function fs(e,t,n,r){if(ho=null,e=ru(r),e=wn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ho=e,null}function Tf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wh()){case iu:return 1;case Ef:return 4;case co:case Sh:return 16;case _f:return 536870912;default:return 16}default:return 16}}var Jt=null,uu=null,Qi=null;function Lf(){if(Qi)return Qi;var e,t=uu,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Qi=i.slice(e,1<r?1-r:void 0)}function Ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function ya(){return!1}function rt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pi:ya,this.isPropagationStopped=ya,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=rt(xr),mi=fe({},xr,{view:0,detail:0}),Fh=rt(mi),ml,gl,$r,Bo=fe({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(ml=e.screenX-$r.screenX,gl=e.screenY-$r.screenY):gl=ml=0,$r=e),ml)},movementY:function(e){return"movementY"in e?e.movementY:gl}}),va=rt(Bo),Rh=fe({},Bo,{dataTransfer:0}),Ih=rt(Rh),Oh=fe({},mi,{relatedTarget:0}),yl=rt(Oh),Ah=fe({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Mh=rt(Ah),Vh=fe({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Uh=rt(Vh),Bh=fe({},xr,{data:0}),xa=rt(Bh),Wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qh[e])?!!t[e]:!1}function cu(){return Kh}var Gh=fe({},mi,{key:function(e){if(e.key){var t=Wh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yh=rt(Gh),Xh=fe({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wa=rt(Xh),Zh=fe({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),qh=rt(Zh),Jh=fe({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bh=rt(Jh),em=fe({},Bo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tm=rt(em),nm=[9,13,27,32],fu=Vt&&"CompositionEvent"in window,Mr=null;Vt&&"documentMode"in document&&(Mr=document.documentMode);var rm=Vt&&"TextEvent"in window&&!Mr,Ff=Vt&&(!fu||Mr&&8<Mr&&11>=Mr),Sa=" ",ka=!1;function Rf(e,t){switch(e){case"keyup":return nm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function im(e,t){switch(e){case"compositionend":return If(t);case"keypress":return t.which!==32?null:(ka=!0,Sa);case"textInput":return e=t.data,e===Sa&&ka?null:e;default:return null}}function om(e,t){if(Wn)return e==="compositionend"||!fu&&Rf(e,t)?(e=Lf(),Qi=uu=Jt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ff&&t.locale!=="ko"?null:t.data;default:return null}}var lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lm[e.type]:t==="textarea"}function Of(e,t,n,r){hf(r),t=mo(t,"onChange"),0<t.length&&(n=new au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,br=null;function sm(e){Yf(e,0)}function Wo(e){var t=Kn(e);if(sf(t))return e}function um(e,t){if(e==="change")return t}var Af=!1;if(Vt){var vl;if(Vt){var xl="oninput"in document;if(!xl){var _a=document.createElement("div");_a.setAttribute("oninput","return;"),xl=typeof _a.oninput=="function"}vl=xl}else vl=!1;Af=vl&&(!document.documentMode||9<document.documentMode)}function Ca(){Vr&&(Vr.detachEvent("onpropertychange",Mf),br=Vr=null)}function Mf(e){if(e.propertyName==="value"&&Wo(br)){var t=[];Of(t,br,e,ru(e)),vf(sm,t)}}function am(e,t,n){e==="focusin"?(Ca(),Vr=t,br=n,Vr.attachEvent("onpropertychange",Mf)):e==="focusout"&&Ca()}function cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wo(br)}function fm(e,t){if(e==="click")return Wo(t)}function dm(e,t){if(e==="input"||e==="change")return Wo(t)}function pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:pm;function ei(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gl.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function $a(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=$a(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$a(n)}}function Vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(){for(var e=window,t=so();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=so(e.document)}return t}function du(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hm(e){var t=Uf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vf(n.ownerDocument.documentElement,n)){if(r!==null&&du(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Na(n,o);var l=Na(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mm=Vt&&"documentMode"in document&&11>=document.documentMode,Hn=null,ds=null,Ur=null,ps=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ps||Hn==null||Hn!==so(r)||(r=Hn,"selectionStart"in r&&du(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&ei(Ur,r)||(Ur=r,r=mo(ds,"onSelect"),0<r.length&&(t=new au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:ji("Animation","AnimationEnd"),animationiteration:ji("Animation","AnimationIteration"),animationstart:ji("Animation","AnimationStart"),transitionend:ji("Transition","TransitionEnd")},wl={},Bf={};Vt&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Ho(e){if(wl[e])return wl[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bf)return wl[e]=t[n];return e}var Wf=Ho("animationend"),Hf=Ho("animationiteration"),Qf=Ho("animationstart"),Kf=Ho("transitionend"),Gf=new Map,ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){Gf.set(e,t),Rn(t,[e])}for(var Sl=0;Sl<ja.length;Sl++){var kl=ja[Sl],gm=kl.toLowerCase(),ym=kl[0].toUpperCase()+kl.slice(1);pn(gm,"on"+ym)}pn(Wf,"onAnimationEnd");pn(Hf,"onAnimationIteration");pn(Qf,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Kf,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function za(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gh(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;za(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;za(i,s,c),o=u}}}if(ao)throw e=us,ao=!1,us=null,e}function te(e,t){var n=t[vs];n===void 0&&(n=t[vs]=new Set);var r=e+"__bubble";n.has(r)||(Xf(t,e,2,!1),n.add(r))}function El(e,t,n){var r=0;t&&(r|=4),Xf(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[zi]){e[zi]=!0,tf.forEach(function(n){n!=="selectionchange"&&(vm.has(n)||El(n,!1,e),El(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,El("selectionchange",!1,t))}}function Xf(e,t,n,r){switch(Tf(t)){case 1:var i=Th;break;case 4:i=Lh;break;default:i=su}n=i.bind(null,t,n,e),i=void 0,!ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _l(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=wn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}vf(function(){var c=o,y=ru(n),m=[];e:{var h=Gf.get(e);if(h!==void 0){var w=au,k=e;switch(e){case"keypress":if(Ki(n)===0)break e;case"keydown":case"keyup":w=Yh;break;case"focusin":k="focus",w=yl;break;case"focusout":k="blur",w=yl;break;case"beforeblur":case"afterblur":w=yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=qh;break;case Wf:case Hf:case Qf:w=Mh;break;case Kf:w=bh;break;case"scroll":w=Fh;break;case"wheel":w=tm;break;case"copy":case"cut":case"paste":w=Uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wa}var C=(t&4)!==0,B=!C&&e==="scroll",p=C?h!==null?h+"Capture":null:h;C=[];for(var a=c,f;a!==null;){f=a;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Xr(a,p),x!=null&&C.push(ni(a,x,f)))),B)break;a=a.return}0<C.length&&(h=new w(h,k,null,n,y),m.push({event:h,listeners:C}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&n!==os&&(k=n.relatedTarget||n.fromElement)&&(wn(k)||k[Ut]))break e;if((w||h)&&(h=y.window===y?y:(h=y.ownerDocument)?h.defaultView||h.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?wn(k):null,k!==null&&(B=In(k),k!==B||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(C=va,x="onMouseLeave",p="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(C=wa,x="onPointerLeave",p="onPointerEnter",a="pointer"),B=w==null?h:Kn(w),f=k==null?h:Kn(k),h=new C(x,a+"leave",w,n,y),h.target=B,h.relatedTarget=f,x=null,wn(y)===c&&(C=new C(p,a+"enter",k,n,y),C.target=f,C.relatedTarget=B,x=C),B=x,w&&k)t:{for(C=w,p=k,a=0,f=C;f;f=An(f))a++;for(f=0,x=p;x;x=An(x))f++;for(;0<a-f;)C=An(C),a--;for(;0<f-a;)p=An(p),f--;for(;a--;){if(C===p||p!==null&&C===p.alternate)break t;C=An(C),p=An(p)}C=null}else C=null;w!==null&&Da(m,h,w,C,!1),k!==null&&B!==null&&Da(m,B,k,C,!0)}}e:{if(h=c?Kn(c):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var E=um;else if(Ea(h))if(Af)E=dm;else{E=cm;var N=am}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=fm);if(E&&(E=E(e,c))){Of(m,E,n,y);break e}N&&N(e,h,c),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&es(h,"number",h.value)}switch(N=c?Kn(c):window,e){case"focusin":(Ea(N)||N.contentEditable==="true")&&(Hn=N,ds=c,Ur=null);break;case"focusout":Ur=ds=Hn=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,Pa(m,n,y);break;case"selectionchange":if(mm)break;case"keydown":case"keyup":Pa(m,n,y)}var _;if(fu)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Wn?Rf(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Ff&&n.locale!=="ko"&&(Wn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Wn&&(_=Lf()):(Jt=y,uu="value"in Jt?Jt.value:Jt.textContent,Wn=!0)),N=mo(c,L),0<N.length&&(L=new xa(L,e,null,n,y),m.push({event:L,listeners:N}),_?L.data=_:(_=If(n),_!==null&&(L.data=_)))),(_=rm?im(e,n):om(e,n))&&(c=mo(c,"onBeforeInput"),0<c.length&&(y=new xa("onBeforeInput","beforeinput",null,n,y),m.push({event:y,listeners:c}),y.data=_))}Yf(m,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xr(e,n),o!=null&&r.unshift(ni(e,o,i)),o=Xr(e,t),o!=null&&r.push(ni(e,o,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Xr(n,o),u!=null&&l.unshift(ni(n,u,s))):i||(u=Xr(n,o),u!=null&&l.push(ni(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var xm=/\r\n?/g,wm=/\u0000|\uFFFD/g;function Ta(e){return(typeof e=="string"?e:""+e).replace(xm,`
`).replace(wm,"")}function Di(e,t,n){if(t=Ta(t),Ta(e)!==t&&n)throw Error($(425))}function go(){}var hs=null,ms=null;function gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,Sm=typeof clearTimeout=="function"?clearTimeout:void 0,La=typeof Promise=="function"?Promise:void 0,km=typeof queueMicrotask=="function"?queueMicrotask:typeof La<"u"?function(e){return La.resolve(null).then(e).catch(Em)}:ys;function Em(e){setTimeout(function(){throw e})}function Cl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Pt="__reactFiber$"+wr,ri="__reactProps$"+wr,Ut="__reactContainer$"+wr,vs="__reactEvents$"+wr,_m="__reactListeners$"+wr,Cm="__reactHandles$"+wr;function wn(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ut]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fa(e);e!==null;){if(n=e[Pt])return n;e=Fa(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[Pt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Qo(e){return e[ri]||null}var xs=[],Gn=-1;function hn(e){return{current:e}}function re(e){0>Gn||(e.current=xs[Gn],xs[Gn]=null,Gn--)}function ee(e,t){Gn++,xs[Gn]=e.current,e.current=t}var dn={},Oe=hn(dn),Ye=hn(!1),Pn=dn;function ur(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function yo(){re(Ye),re(Oe)}function Ra(e,t,n){if(Oe.current!==dn)throw Error($(168));ee(Oe,t),ee(Ye,n)}function Zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,ah(e)||"Unknown",i));return fe({},n,r)}function vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Pn=Oe.current,ee(Oe,e),ee(Ye,Ye.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Zf(e,t,Pn),r.__reactInternalMemoizedMergedChildContext=e,re(Ye),re(Oe),ee(Oe,e)):re(Ye),ee(Ye,n)}var It=null,Ko=!1,$l=!1;function qf(e){It===null?It=[e]:It.push(e)}function $m(e){Ko=!0,qf(e)}function mn(){if(!$l&&It!==null){$l=!0;var e=0,t=q;try{var n=It;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Ko=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),kf(iu,mn),i}finally{q=t,$l=!1}}return null}var Yn=[],Xn=0,xo=null,wo=0,lt=[],st=0,jn=null,Ot=1,At="";function vn(e,t){Yn[Xn++]=wo,Yn[Xn++]=xo,xo=e,wo=t}function Jf(e,t,n){lt[st++]=Ot,lt[st++]=At,lt[st++]=jn,jn=e;var r=Ot;e=At;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ot=1<<32-xt(t)+i|n<<i|r,At=o+e}else Ot=1<<o|n<<i|r,At=e}function pu(e){e.return!==null&&(vn(e,1),Jf(e,1,0))}function hu(e){for(;e===xo;)xo=Yn[--Xn],Yn[Xn]=null,wo=Yn[--Xn],Yn[Xn]=null;for(;e===jn;)jn=lt[--st],lt[st]=null,At=lt[--st],lt[st]=null,Ot=lt[--st],lt[st]=null}var et=null,be=null,se=!1,yt=null;function bf(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,be=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:Ot,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,be=null,!0):!1;default:return!1}}function ws(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ss(e){if(se){var t=be;if(t){var n=t;if(!Oa(e,t)){if(ws(e))throw Error($(418));t=on(n.nextSibling);var r=et;t&&Oa(e,t)?bf(r,n):(e.flags=e.flags&-4097|2,se=!1,et=e)}}else{if(ws(e))throw Error($(418));e.flags=e.flags&-4097|2,se=!1,et=e}}}function Aa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Ti(e){if(e!==et)return!1;if(!se)return Aa(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gs(e.type,e.memoizedProps)),t&&(t=be)){if(ws(e))throw ed(),Error($(418));for(;t;)bf(e,t),t=on(t.nextSibling)}if(Aa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=et?on(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=be;e;)e=on(e.nextSibling)}function ar(){be=et=null,se=!1}function mu(e){yt===null?yt=[e]:yt.push(e)}var Nm=Ht.ReactCurrentBatchConfig;function mt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var So=hn(null),ko=null,Zn=null,gu=null;function yu(){gu=Zn=ko=null}function vu(e){var t=So.current;re(So),e._currentValue=t}function ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){ko=e,gu=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(gu!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(ko===null)throw Error($(308));Zn=e,ko.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var Sn=null;function xu(e){Sn===null?Sn=[e]:Sn.push(e)}function td(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,xu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,xu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ou(e,n)}}function Ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var i=e.updateQueue;Yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=c:s.next=c,y.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;l=0,y=c=u=null,s=o;do{var h=s.lane,w=s.eventTime;if((r&h)===h){y!==null&&(y=y.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,C=s;switch(h=t,w=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){m=k.call(w,m,h);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,h=typeof k=="function"?k.call(w,m,h):k,h==null)break e;m=fe({},m,h);break e;case 2:Yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(c=y=w,u=m):y=y.next=w,l|=h;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;h=s,s=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(y===null&&(u=m),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=l,e.lanes=l,e.memoizedState=m}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var rd=new ef.Component().refs;function Es(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=un(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(wt(t,e,i,r),Gi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=un(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(wt(t,e,i,r),Gi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=un(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(wt(t,e,r,n),Gi(t,e,r))}};function Ua(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,o):!0}function id(e,t,n){var r=!1,i=dn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Xe(t)?Pn:Oe.current,r=t.contextTypes,o=(r=r!=null)?ur(e,i):dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ba(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function _s(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=rd,wu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Xe(t)?Pn:Oe.current,i.context=ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Es(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Go.enqueueReplaceState(i,i.state,null),Eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===rd&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wa(e){var t=e._init;return t(e._payload)}function od(e){function t(p,a){if(e){var f=p.deletions;f===null?(p.deletions=[a],p.flags|=16):f.push(a)}}function n(p,a){if(!e)return null;for(;a!==null;)t(p,a),a=a.sibling;return null}function r(p,a){for(p=new Map;a!==null;)a.key!==null?p.set(a.key,a):p.set(a.index,a),a=a.sibling;return p}function i(p,a){return p=an(p,a),p.index=0,p.sibling=null,p}function o(p,a,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<a?(p.flags|=2,a):f):(p.flags|=2,a)):(p.flags|=1048576,a)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,a,f,x){return a===null||a.tag!==6?(a=Ll(f,p.mode,x),a.return=p,a):(a=i(a,f),a.return=p,a)}function u(p,a,f,x){var E=f.type;return E===Bn?y(p,a,f.props.children,x,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&Wa(E)===a.type)?(x=i(a,f.props),x.ref=Nr(p,a,f),x.return=p,x):(x=bi(f.type,f.key,f.props,null,p.mode,x),x.ref=Nr(p,a,f),x.return=p,x)}function c(p,a,f,x){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Fl(f,p.mode,x),a.return=p,a):(a=i(a,f.children||[]),a.return=p,a)}function y(p,a,f,x,E){return a===null||a.tag!==7?(a=$n(f,p.mode,x,E),a.return=p,a):(a=i(a,f),a.return=p,a)}function m(p,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Ll(""+a,p.mode,f),a.return=p,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case ki:return f=bi(a.type,a.key,a.props,null,p.mode,f),f.ref=Nr(p,null,a),f.return=p,f;case Un:return a=Fl(a,p.mode,f),a.return=p,a;case Gt:var x=a._init;return m(p,x(a._payload),f)}if(Lr(a)||kr(a))return a=$n(a,p.mode,f,null),a.return=p,a;Li(p,a)}return null}function h(p,a,f,x){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(p,a,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ki:return f.key===E?u(p,a,f,x):null;case Un:return f.key===E?c(p,a,f,x):null;case Gt:return E=f._init,h(p,a,E(f._payload),x)}if(Lr(f)||kr(f))return E!==null?null:y(p,a,f,x,null);Li(p,f)}return null}function w(p,a,f,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(a,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ki:return p=p.get(x.key===null?f:x.key)||null,u(a,p,x,E);case Un:return p=p.get(x.key===null?f:x.key)||null,c(a,p,x,E);case Gt:var N=x._init;return w(p,a,f,N(x._payload),E)}if(Lr(x)||kr(x))return p=p.get(f)||null,y(a,p,x,E,null);Li(a,x)}return null}function k(p,a,f,x){for(var E=null,N=null,_=a,L=a=0,K=null;_!==null&&L<f.length;L++){_.index>L?(K=_,_=null):K=_.sibling;var U=h(p,_,f[L],x);if(U===null){_===null&&(_=K);break}e&&_&&U.alternate===null&&t(p,_),a=o(U,a,L),N===null?E=U:N.sibling=U,N=U,_=K}if(L===f.length)return n(p,_),se&&vn(p,L),E;if(_===null){for(;L<f.length;L++)_=m(p,f[L],x),_!==null&&(a=o(_,a,L),N===null?E=_:N.sibling=_,N=_);return se&&vn(p,L),E}for(_=r(p,_);L<f.length;L++)K=w(_,p,L,f[L],x),K!==null&&(e&&K.alternate!==null&&_.delete(K.key===null?L:K.key),a=o(K,a,L),N===null?E=K:N.sibling=K,N=K);return e&&_.forEach(function(ue){return t(p,ue)}),se&&vn(p,L),E}function C(p,a,f,x){var E=kr(f);if(typeof E!="function")throw Error($(150));if(f=E.call(f),f==null)throw Error($(151));for(var N=E=null,_=a,L=a=0,K=null,U=f.next();_!==null&&!U.done;L++,U=f.next()){_.index>L?(K=_,_=null):K=_.sibling;var ue=h(p,_,U.value,x);if(ue===null){_===null&&(_=K);break}e&&_&&ue.alternate===null&&t(p,_),a=o(ue,a,L),N===null?E=ue:N.sibling=ue,N=ue,_=K}if(U.done)return n(p,_),se&&vn(p,L),E;if(_===null){for(;!U.done;L++,U=f.next())U=m(p,U.value,x),U!==null&&(a=o(U,a,L),N===null?E=U:N.sibling=U,N=U);return se&&vn(p,L),E}for(_=r(p,_);!U.done;L++,U=f.next())U=w(_,p,L,U.value,x),U!==null&&(e&&U.alternate!==null&&_.delete(U.key===null?L:U.key),a=o(U,a,L),N===null?E=U:N.sibling=U,N=U);return e&&_.forEach(function(Q){return t(p,Q)}),se&&vn(p,L),E}function B(p,a,f,x){if(typeof f=="object"&&f!==null&&f.type===Bn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ki:e:{for(var E=f.key,N=a;N!==null;){if(N.key===E){if(E=f.type,E===Bn){if(N.tag===7){n(p,N.sibling),a=i(N,f.props.children),a.return=p,p=a;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&Wa(E)===N.type){n(p,N.sibling),a=i(N,f.props),a.ref=Nr(p,N,f),a.return=p,p=a;break e}n(p,N);break}else t(p,N);N=N.sibling}f.type===Bn?(a=$n(f.props.children,p.mode,x,f.key),a.return=p,p=a):(x=bi(f.type,f.key,f.props,null,p.mode,x),x.ref=Nr(p,a,f),x.return=p,p=x)}return l(p);case Un:e:{for(N=f.key;a!==null;){if(a.key===N)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(p,a.sibling),a=i(a,f.children||[]),a.return=p,p=a;break e}else{n(p,a);break}else t(p,a);a=a.sibling}a=Fl(f,p.mode,x),a.return=p,p=a}return l(p);case Gt:return N=f._init,B(p,a,N(f._payload),x)}if(Lr(f))return k(p,a,f,x);if(kr(f))return C(p,a,f,x);Li(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(p,a.sibling),a=i(a,f),a.return=p,p=a):(n(p,a),a=Ll(f,p.mode,x),a.return=p,p=a),l(p)):n(p,a)}return B}var cr=od(!0),ld=od(!1),yi={},Dt=hn(yi),ii=hn(yi),oi=hn(yi);function kn(e){if(e===yi)throw Error($(174));return e}function Su(e,t){switch(ee(oi,t),ee(ii,e),ee(Dt,yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ns(t,e)}re(Dt),ee(Dt,t)}function fr(){re(Dt),re(ii),re(oi)}function sd(e){kn(oi.current);var t=kn(Dt.current),n=ns(t,e.type);t!==n&&(ee(ii,e),ee(Dt,n))}function ku(e){ii.current===e&&(re(Dt),re(ii))}var ae=hn(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function Eu(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var Yi=Ht.ReactCurrentDispatcher,Pl=Ht.ReactCurrentBatchConfig,zn=0,ce=null,xe=null,Ce=null,Co=!1,Br=!1,li=0,Pm=0;function Fe(){throw Error($(321))}function _u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function Cu(e,t,n,r,i,o){if(zn=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?Tm:Lm,e=n(r,i),Br){o=0;do{if(Br=!1,li=0,25<=o)throw Error($(301));o+=1,Ce=xe=null,t.updateQueue=null,Yi.current=Fm,e=n(r,i)}while(Br)}if(Yi.current=$o,t=xe!==null&&xe.next!==null,zn=0,Ce=xe=ce=null,Co=!1,t)throw Error($(300));return e}function $u(){var e=li!==0;return li=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function ft(){if(xe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ce===null?ce.memoizedState:Ce.next;if(t!==null)Ce=t,xe=e;else{if(e===null)throw Error($(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ce===null?ce.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function si(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=ft(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var y=c.lane;if((zn&y)===y)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=m,l=r):u=u.next=m,ce.lanes|=y,Dn|=y}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,kt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function zl(e){var t=ft(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);kt(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ud(){}function ad(e,t){var n=ce,r=ft(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,Nu(dd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ui(9,fd.bind(null,n,r,i,t),void 0,null),je===null)throw Error($(349));zn&30||cd(n,t,i)}return i}function cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fd(e,t,n,r){t.value=n,t.getSnapshot=r,pd(t)&&hd(e)}function dd(e,t,n){return n(function(){pd(t)&&hd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function hd(e){var t=Bt(e,1);t!==null&&wt(t,e,1,-1)}function Ha(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Dm.bind(null,ce,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function md(){return ft().memoizedState}function Xi(e,t,n,r){var i=$t();ce.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(xe!==null){var l=xe.memoizedState;if(o=l.destroy,r!==null&&_u(r,l.deps)){i.memoizedState=ui(t,n,o,r);return}}ce.flags|=e,i.memoizedState=ui(1|t,n,o,r)}function Qa(e,t){return Xi(8390656,8,e,t)}function Nu(e,t){return Yo(2048,8,e,t)}function gd(e,t){return Yo(4,2,e,t)}function yd(e,t){return Yo(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xd(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4,4,vd.bind(null,t,e),n)}function Pu(){}function wd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_u(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sd(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_u(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kd(e,t,n){return zn&21?(kt(n,t)||(n=Cf(),ce.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function jm(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{q=n,Pl.transition=r}}function Ed(){return ft().memoizedState}function zm(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_d(e))Cd(t,n);else if(n=td(e,t,n,r),n!==null){var i=Ve();wt(n,e,r,i),$d(n,t,r)}}function Dm(e,t,n){var r=un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_d(e))Cd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,kt(s,l)){var u=t.interleaved;u===null?(i.next=i,xu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=td(e,t,i,r),n!==null&&(i=Ve(),wt(n,e,r,i),$d(n,t,r))}}function _d(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Cd(e,t){Br=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ou(e,n)}}var $o={readContext:ct,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Tm={readContext:ct,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Qa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zm.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Ha,useDebugValue:Pu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Ha(!1),t=e[0];return e=jm.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=$t();if(se){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),je===null)throw Error($(349));zn&30||cd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qa(dd.bind(null,r,o,e),[e]),r.flags|=2048,ui(9,fd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=je.identifierPrefix;if(se){var n=At,r=Ot;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lm={readContext:ct,useCallback:wd,useContext:ct,useEffect:Nu,useImperativeHandle:xd,useInsertionEffect:gd,useLayoutEffect:yd,useMemo:Sd,useReducer:jl,useRef:md,useState:function(){return jl(si)},useDebugValue:Pu,useDeferredValue:function(e){var t=ft();return kd(t,xe.memoizedState,e)},useTransition:function(){var e=jl(si)[0],t=ft().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:ad,useId:Ed,unstable_isNewReconciler:!1},Fm={readContext:ct,useCallback:wd,useContext:ct,useEffect:Nu,useImperativeHandle:xd,useInsertionEffect:gd,useLayoutEffect:yd,useMemo:Sd,useReducer:zl,useRef:md,useState:function(){return zl(si)},useDebugValue:Pu,useDeferredValue:function(e){var t=ft();return xe===null?t.memoizedState=e:kd(t,xe.memoizedState,e)},useTransition:function(){var e=zl(si)[0],t=ft().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:ad,useId:Ed,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=uh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function Nd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Rs=r),Cs(e,t)},n}function Pd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cs(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ka(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Xm.bind(null,e,t,n),t.then(e,e))}function Ga(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ya(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var Im=Ht.ReactCurrentOwner,Ge=!1;function Ae(e,t,n,r){t.child=e===null?ld(t,null,n,r):cr(t,e.child,n,r)}function Xa(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=Cu(e,t,n,r,o,i),n=$u(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(se&&n&&pu(t),t.flags|=1,Ae(e,t,r,i),t.child)}function Za(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Iu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,jd(e,t,o,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(l,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function jd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ei(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return $s(e,t,n,r,i)}function zd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Jn,Je),Je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Jn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Jn,Je),Je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Jn,Je),Je|=r;return Ae(e,t,i,n),t.child}function Dd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $s(e,t,n,r,i){var o=Xe(n)?Pn:Oe.current;return o=ur(t,o),or(t,i),n=Cu(e,t,n,r,o,i),r=$u(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(se&&r&&pu(t),t.flags|=1,Ae(e,t,n,i),t.child)}function qa(e,t,n,r,i){if(Xe(n)){var o=!0;vo(t)}else o=!1;if(or(t,i),t.stateNode===null)Zi(e,t),id(t,n,r),_s(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ct(c):(c=Xe(n)?Pn:Oe.current,c=ur(t,c));var y=n.getDerivedStateFromProps,m=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ba(t,l,r,c),Yt=!1;var h=t.memoizedState;l.state=h,Eo(t,r,l,i),u=t.memoizedState,s!==r||h!==u||Ye.current||Yt?(typeof y=="function"&&(Es(t,n,y,r),u=t.memoizedState),(s=Yt||Ua(t,n,s,r,h,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,nd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:mt(t.type,s),l.props=c,m=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?Pn:Oe.current,u=ur(t,u));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||h!==u)&&Ba(t,l,r,u),Yt=!1,h=t.memoizedState,l.state=h,Eo(t,r,l,i);var k=t.memoizedState;s!==m||h!==k||Ye.current||Yt?(typeof w=="function"&&(Es(t,n,w,r),k=t.memoizedState),(c=Yt||Ua(t,n,c,r,h,k,u)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,o,i)}function Ns(e,t,n,r,i,o){Dd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ia(t,n,!1),Wt(e,t,o);r=t.stateNode,Im.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,s,o)):Ae(e,t,s,o),t.memoizedState=r.state,i&&Ia(t,n,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?Ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ra(e,t.context,!1),Su(e,t.containerInfo)}function Ja(e,t,n,r,i){return ar(),mu(i),t.flags|=256,Ae(e,t,n,r),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ae,i&1),e===null)return Ss(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=qo(l,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=js(n),t.memoizedState=Ps,e):ju(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Om(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=an(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=an(s,o):(o=$n(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?js(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ps,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=qo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&mu(r),cr(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Om(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error($(422))),Fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=qo({mode:"visible",children:r.children},i,0,null),o=$n(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=js(l),t.memoizedState=Ps,o);if(!(t.mode&1))return Fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error($(419)),r=Dl(o,r,void 0),Fi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ge||s){if(r=je,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),wt(r,e,i,-1))}return Ru(),r=Dl(Error($(421))),Fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Zm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,be=on(i.nextSibling),et=t,se=!0,yt=null,e!==null&&(lt[st++]=Ot,lt[st++]=At,lt[st++]=jn,Ot=e.id,At=e.overflow,jn=t),t=ju(t,r.children),t.flags|=4096,t)}function ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ks(e.return,t,n)}function Tl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Fd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ba(e,n,t);else if(e.tag===19)ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tl(t,!0,n,null,o);break;case"together":Tl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Am(e,t,n){switch(t.tag){case 3:Td(t),ar();break;case 5:sd(t);break;case 1:Xe(t.type)&&vo(t);break;case 4:Su(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(So,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Ld(e,t,n):(ee(ae,ae.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,n)}return Wt(e,t,n)}var Rd,zs,Id,Od;Rd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zs=function(){};Id=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(Dt.current);var o=null;switch(n){case"input":i=Jl(e,i),r=Jl(e,r),o=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),o=[];break;case"textarea":i=ts(e,i),r=ts(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=go)}rs(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&te("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Od=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mm(e,t,n){var r=t.pendingProps;switch(hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&yo(),Re(t),null;case 3:return r=t.stateNode,fr(),re(Ye),re(Oe),Eu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(As(yt),yt=null))),zs(e,t),Re(t),null;case 5:ku(t);var i=kn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Id(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Re(t),null}if(e=kn(Dt.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[ri]=o,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)te(Rr[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ua(r,o),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},te("invalid",r);break;case"textarea":ca(r,o),te("invalid",r)}rs(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Ei(r),aa(r,o,!0);break;case"textarea":Ei(r),fa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=go)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Pt]=t,e[ri]=r,Rd(e,t,!1,!1),t.stateNode=e;e:{switch(l=is(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)te(Rr[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":ua(e,r),i=Jl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),te("invalid",e);break;case"textarea":ca(e,r),i=ts(e,r),te("invalid",e);break;default:i=r}rs(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?pf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ff(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&te("scroll",e):u!=null&&bs(e,o,u,l))}switch(n){case"input":Ei(e),aa(e,r,!1);break;case"textarea":Ei(e),fa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=go)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Od(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=kn(oi.current),kn(Dt.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Re(t),null;case 13:if(re(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&be!==null&&t.mode&1&&!(t.flags&128))ed(),ar(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Pt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else yt!==null&&(As(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?we===0&&(we=3):Ru())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return fr(),zs(e,t),e===null&&ti(t.stateNode.containerInfo),Re(t),null;case 10:return vu(t.type._context),Re(t),null;case 17:return Xe(t.type)&&yo(),Re(t),null;case 19:if(re(ae),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Pr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_o(e),l!==null){for(t.flags|=128,Pr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>pr&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304)}else{if(!r)if(e=_o(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!se)return Re(t),null}else 2*he()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Pr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Vm(e,t){switch(hu(t),t.tag){case 1:return Xe(t.type)&&yo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),re(Ye),re(Oe),Eu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ku(t),null;case 13:if(re(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ae),null;case 4:return fr(),null;case 10:return vu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var Ri=!1,Ie=!1,Um=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Ds(e,t,n){try{n()}catch(r){de(e,t,r)}}var ec=!1;function Bm(e,t){if(hs=po,e=Uf(),du(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,y=0,m=e,h=null;t:for(;;){for(var w;m!==n||i!==0&&m.nodeType!==3||(s=l+i),m!==o||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(w=m.firstChild)!==null;)h=m,m=w;for(;;){if(m===e)break t;if(h===n&&++c===i&&(s=l),h===o&&++y===r&&(u=l),(w=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ms={focusedElem:e,selectionRange:n},po=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,B=k.memoizedState,p=t.stateNode,a=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:mt(t.type,C),B);p.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(x){de(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=ec,ec=!1,k}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ds(t,n,o)}i=i.next}while(i!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ts(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[ri],delete t[vs],delete t[_m],delete t[Cm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=go));else if(r!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}var De=null,gt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Vd(e,t,n),n=n.sibling}function Vd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:Ie||qn(n,t);case 6:var r=De,i=gt;De=null,Qt(e,t,n),De=r,gt=i,De!==null&&(gt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(gt?(e=De,n=n.stateNode,e.nodeType===8?Cl(e.parentNode,n):e.nodeType===1&&Cl(e,n),Jr(e)):Cl(De,n.stateNode));break;case 4:r=De,i=gt,De=n.stateNode.containerInfo,gt=!0,Qt(e,t,n),De=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ds(n,t,l),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ie&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Qt(e,t,n),Ie=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Um),t.forEach(function(r){var i=qm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,gt=!1;break e;case 3:De=s.stateNode.containerInfo,gt=!0;break e;case 4:De=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(De===null)throw Error($(160));Vd(o,l,i),De=null,gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){de(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ud(t,e),t=t.sibling}function Ud(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Ct(e),r&4){try{Wr(3,e,e.return),Xo(3,e)}catch(C){de(e,e.return,C)}try{Wr(5,e,e.return)}catch(C){de(e,e.return,C)}}break;case 1:ht(t,e),Ct(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ht(t,e),Ct(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(C){de(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&uf(i,o),is(s,l);var c=is(s,o);for(l=0;l<u.length;l+=2){var y=u[l],m=u[l+1];y==="style"?pf(i,m):y==="dangerouslySetInnerHTML"?ff(i,m):y==="children"?Yr(i,m):bs(i,y,m,c)}switch(s){case"input":bl(i,o);break;case"textarea":af(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?tr(i,!!o.multiple,w,!1):h!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ri]=o}catch(C){de(e,e.return,C)}}break;case 6:if(ht(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){de(e,e.return,C)}}break;case 3:if(ht(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(C){de(e,e.return,C)}break;case 4:ht(t,e),Ct(e);break;case 13:ht(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tu=he())),r&4&&nc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(c=Ie)||y,ht(t,e),Ie=c):ht(t,e),Ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(m=T=y;T!==null;){switch(h=T,w=h.child,h.tag){case 0:case 11:case 14:case 15:Wr(4,h,h.return);break;case 1:qn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){de(r,n,C)}}break;case 5:qn(h,h.return);break;case 22:if(h.memoizedState!==null){ic(m);continue}}w!==null?(w.return=h,T=w):ic(m)}y=y.sibling}e:for(y=null,m=e;;){if(m.tag===5){if(y===null){y=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=df("display",l))}catch(C){de(e,e.return,C)}}}else if(m.tag===6){if(y===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){de(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;y===m&&(y=null),m=m.return}y===m&&(y=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ht(t,e),Ct(e),r&4&&nc(e);break;case 21:break;default:ht(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Md(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var o=tc(e);Fs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=tc(e);Ls(e,s,l);break;default:throw Error($(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wm(e,t,n){T=e,Bd(e)}function Bd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ri;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Ie;s=Ri;var c=Ie;if(Ri=l,(Ie=u)&&!c)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?oc(i):u!==null?(u.return=l,T=u):oc(i);for(;o!==null;)T=o,Bd(o),o=o.sibling;T=i,Ri=s,Ie=c}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):rc(e)}}function rc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Va(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var m=y.dehydrated;m!==null&&Jr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ie||t.flags&512&&Ts(t)}catch(h){de(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ic(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function oc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){de(t,i,u)}}var o=t.return;try{Ts(t)}catch(u){de(t,o,u)}break;case 5:var l=t.return;try{Ts(t)}catch(u){de(t,l,u)}}}catch(u){de(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Hm=Math.ceil,No=Ht.ReactCurrentDispatcher,zu=Ht.ReactCurrentOwner,at=Ht.ReactCurrentBatchConfig,X=0,je=null,ve=null,Te=0,Je=0,Jn=hn(0),we=0,ai=null,Dn=0,Zo=0,Du=0,Hr=null,Ke=null,Tu=0,pr=1/0,Ft=null,Po=!1,Rs=null,sn=null,Ii=!1,bt=null,jo=0,Qr=0,Is=null,qi=-1,Ji=0;function Ve(){return X&6?he():qi!==-1?qi:qi=he()}function un(e){return e.mode&1?X&2&&Te!==0?Te&-Te:Nm.transition!==null?(Ji===0&&(Ji=Cf()),Ji):(e=q,e!==0||(e=window.event,e=e===void 0?16:Tf(e.type)),e):1}function wt(e,t,n,r){if(50<Qr)throw Qr=0,Is=null,Error($(185));hi(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(Zo|=n),we===4&&Zt(e,Te)),Ze(e,r),n===1&&X===0&&!(t.mode&1)&&(pr=he()+500,Ko&&mn()))}function Ze(e,t){var n=e.callbackNode;Nh(e,t);var r=fo(e,e===je?Te:0);if(r===0)n!==null&&ha(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ha(n),t===1)e.tag===0?$m(lc.bind(null,e)):qf(lc.bind(null,e)),km(function(){!(X&6)&&mn()}),n=null;else{switch($f(r)){case 1:n=iu;break;case 4:n=Ef;break;case 16:n=co;break;case 536870912:n=_f;break;default:n=co}n=Zd(n,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wd(e,t){if(qi=-1,Ji=0,X&6)throw Error($(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=fo(e,e===je?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zo(e,r);else{t=r;var i=X;X|=2;var o=Qd();(je!==e||Te!==t)&&(Ft=null,pr=he()+500,Cn(e,t));do try{Gm();break}catch(s){Hd(e,s)}while(!0);yu(),No.current=o,X=i,ve!==null?t=0:(je=null,Te=0,t=we)}if(t!==0){if(t===2&&(i=as(e),i!==0&&(r=i,t=Os(e,i))),t===1)throw n=ai,Cn(e,0),Zt(e,r),Ze(e,he()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qm(i)&&(t=zo(e,r),t===2&&(o=as(e),o!==0&&(r=o,t=Os(e,o))),t===1))throw n=ai,Cn(e,0),Zt(e,r),Ze(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:xn(e,Ke,Ft);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Tu+500-he(),10<t)){if(fo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ys(xn.bind(null,e,Ke,Ft),t);break}xn(e,Ke,Ft);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-xt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hm(r/1960))-r,10<r){e.timeoutHandle=ys(xn.bind(null,e,Ke,Ft),r);break}xn(e,Ke,Ft);break;case 5:xn(e,Ke,Ft);break;default:throw Error($(329))}}}return Ze(e,he()),e.callbackNode===n?Wd.bind(null,e):null}function Os(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=zo(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&As(t)),e}function As(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Qm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Du,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(X&6)throw Error($(327));lr();var t=fo(e,0);if(!(t&1))return Ze(e,he()),null;var n=zo(e,t);if(e.tag!==0&&n===2){var r=as(e);r!==0&&(t=r,n=Os(e,r))}if(n===1)throw n=ai,Cn(e,0),Zt(e,t),Ze(e,he()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Ke,Ft),Ze(e,he()),null}function Lu(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(pr=he()+500,Ko&&mn())}}function Tn(e){bt!==null&&bt.tag===0&&!(X&6)&&lr();var t=X;X|=1;var n=at.transition,r=q;try{if(at.transition=null,q=1,e)return e()}finally{q=r,at.transition=n,X=t,!(X&6)&&mn()}}function Fu(){Je=Jn.current,re(Jn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sm(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:fr(),re(Ye),re(Oe),Eu();break;case 5:ku(r);break;case 4:fr();break;case 13:re(ae);break;case 19:re(ae);break;case 10:vu(r.type._context);break;case 22:case 23:Fu()}n=n.return}if(je=e,ve=e=an(e.current,null),Te=Je=t,we=0,ai=null,Du=Zo=Dn=0,Ke=Hr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Sn=null}return e}function Hd(e,t){do{var n=ve;try{if(yu(),Yi.current=$o,Co){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Co=!1}if(zn=0,Ce=xe=ce=null,Br=!1,li=0,zu.current=null,n===null||n.return===null){we=1,ai=t,ve=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,y=s,m=y.tag;if(!(y.mode&1)&&(m===0||m===11||m===15)){var h=y.alternate;h?(y.updateQueue=h.updateQueue,y.memoizedState=h.memoizedState,y.lanes=h.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=Ga(l);if(w!==null){w.flags&=-257,Ya(w,l,s,o,t),w.mode&1&&Ka(o,c,t),t=w,u=c;var k=t.updateQueue;if(k===null){var C=new Set;C.add(u),t.updateQueue=C}else k.add(u);break e}else{if(!(t&1)){Ka(o,c,t),Ru();break e}u=Error($(426))}}else if(se&&s.mode&1){var B=Ga(l);if(B!==null){!(B.flags&65536)&&(B.flags|=256),Ya(B,l,s,o,t),mu(dr(u,s));break e}}o=u=dr(u,s),we!==4&&(we=2),Hr===null?Hr=[o]:Hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Nd(o,u,t);Ma(o,p);break e;case 1:s=u;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Pd(o,s,t);Ma(o,x);break e}}o=o.return}while(o!==null)}Gd(n)}catch(E){t=E,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Qd(){var e=No.current;return No.current=$o,e===null?$o:e}function Ru(){(we===0||we===3||we===2)&&(we=4),je===null||!(Dn&268435455)&&!(Zo&268435455)||Zt(je,Te)}function zo(e,t){var n=X;X|=2;var r=Qd();(je!==e||Te!==t)&&(Ft=null,Cn(e,t));do try{Km();break}catch(i){Hd(e,i)}while(!0);if(yu(),X=n,No.current=r,ve!==null)throw Error($(261));return je=null,Te=0,we}function Km(){for(;ve!==null;)Kd(ve)}function Gm(){for(;ve!==null&&!vh();)Kd(ve)}function Kd(e){var t=Xd(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Gd(e):ve=t,zu.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vm(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=Mm(n,t,Je),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function xn(e,t,n){var r=q,i=at.transition;try{at.transition=null,q=1,Ym(e,t,n,r)}finally{at.transition=i,q=r}return null}function Ym(e,t,n,r){do lr();while(bt!==null);if(X&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ph(e,o),e===je&&(ve=je=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,Zd(co,function(){return lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var l=q;q=1;var s=X;X|=4,zu.current=null,Bm(e,n),Ud(n,e),hm(ms),po=!!hs,ms=hs=null,e.current=n,Wm(n),xh(),X=s,q=l,at.transition=o}else e.current=n;if(Ii&&(Ii=!1,bt=e,jo=i),o=e.pendingLanes,o===0&&(sn=null),kh(n.stateNode),Ze(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=Rs,Rs=null,e;return jo&1&&e.tag!==0&&lr(),o=e.pendingLanes,o&1?e===Is?Qr++:(Qr=0,Is=e):Qr=0,mn(),null}function lr(){if(bt!==null){var e=$f(jo),t=at.transition,n=q;try{if(at.transition=null,q=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,jo=0,X&6)throw Error($(331));var i=X;for(X|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(T=c;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Wr(8,y,o)}var m=y.child;if(m!==null)m.return=y,T=m;else for(;T!==null;){y=T;var h=y.sibling,w=y.return;if(Ad(y),y===c){T=null;break}if(h!==null){h.return=w,T=h;break}T=w}}}var k=o.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var B=C.sibling;C.sibling=null,C=B}while(C!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var a=e.current;for(T=a;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=a;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Xo(9,s)}}catch(E){de(s,s.return,E)}if(s===l){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(X=i,mn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{q=n,at.transition=t}}return!1}function sc(e,t,n){t=dr(n,t),t=Nd(e,t,1),e=ln(e,t,1),t=Ve(),e!==null&&(hi(e,1,t),Ze(e,t))}function de(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=dr(n,e),e=Pd(t,e,1),t=ln(t,e,1),e=Ve(),t!==null&&(hi(t,1,e),Ze(t,e));break}}t=t.return}}function Xm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Te&n)===n&&(we===4||we===3&&(Te&130023424)===Te&&500>he()-Tu?Cn(e,0):Du|=n),Ze(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=Ve();e=Bt(e,t),e!==null&&(hi(e,t,n),Ze(e,n))}function Zm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function qm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Yd(e,n)}var Xd;Xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,Am(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,se&&t.flags&1048576&&Jf(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Zi(e,t),e=t.pendingProps;var i=ur(t,Oe.current);or(t,n),i=Cu(null,t,r,e,i,n);var o=$u();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,vo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wu(t),i.updater=Go,t.stateNode=i,i._reactInternals=t,_s(t,r,e,n),t=Ns(null,t,r,!0,o,n)):(t.tag=0,se&&o&&pu(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Zi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bm(r),e=mt(r,e),i){case 0:t=$s(null,t,r,e,n);break e;case 1:t=qa(null,t,r,e,n);break e;case 11:t=Xa(null,t,r,e,n);break e;case 14:t=Za(null,t,r,mt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),$s(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),qa(e,t,r,i,n);case 3:e:{if(Td(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,nd(e,t),Eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error($(423)),t),t=Ja(e,t,r,n,i);break e}else if(r!==i){i=dr(Error($(424)),t),t=Ja(e,t,r,n,i);break e}else for(be=on(t.stateNode.containerInfo.firstChild),et=t,se=!0,yt=null,n=ld(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Wt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return sd(t),e===null&&Ss(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gs(r,i)?l=null:o!==null&&gs(r,o)&&(t.flags|=32),Dd(e,t),Ae(e,t,l,n),t.child;case 6:return e===null&&Ss(t),null;case 13:return Ld(e,t,n);case 4:return Su(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Xa(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ee(So,r._currentValue),r._currentValue=l,o!==null)if(kt(o.value,l)){if(o.children===i.children&&!Ye.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Mt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?u.next=u:(u.next=y.next,y.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ks(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error($(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ks(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=ct(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Za(e,t,r,i,n);case 15:return jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Zi(e,t),t.tag=1,Xe(r)?(e=!0,vo(t)):e=!1,or(t,n),id(t,r,i),_s(t,r,i,n),Ns(null,t,r,!0,e,n);case 19:return Fd(e,t,n);case 22:return zd(e,t,n)}throw Error($(156,t.tag))};function Zd(e,t){return kf(e,t)}function Jm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Jm(e,t,n,r)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bm(e){if(typeof e=="function")return Iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tu)return 11;if(e===nu)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Iu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bn:return $n(n.children,i,o,t);case eu:l=8,i|=8;break;case Yl:return e=ut(12,n,t,i|2),e.elementType=Yl,e.lanes=o,e;case Xl:return e=ut(13,n,t,i),e.elementType=Xl,e.lanes=o,e;case Zl:return e=ut(19,n,t,i),e.elementType=Zl,e.lanes=o,e;case of:return qo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nf:l=10;break e;case rf:l=9;break e;case tu:l=11;break e;case nu:l=14;break e;case Gt:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=ut(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function qo(e,t,n,r){return e=ut(22,e,r,t),e.elementType=of,e.lanes=n,e.stateNode={isHidden:!1},e}function Ll(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Fl(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hl(0),this.expirationTimes=hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ou(e,t,n,r,i,o,l,s,u){return e=new eg(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(o),e}function tg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qd(e){if(!e)return dn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Xe(n))return Zf(e,n,t)}return t}function Jd(e,t,n,r,i,o,l,s,u){return e=Ou(n,r,!0,e,i,o,l,s,u),e.context=qd(null),n=e.current,r=Ve(),i=un(n),o=Mt(r,i),o.callback=t??null,ln(n,o,i),e.current.lanes=i,hi(e,i,r),Ze(e,r),e}function Jo(e,t,n,r){var i=t.current,o=Ve(),l=un(i);return n=qd(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,l),e!==null&&(wt(e,i,l,o),Gi(e,i,l)),l}function Do(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Au(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function ng(){return null}var bd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mu(e){this._internalRoot=e}bo.prototype.render=Mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Jo(e,t,null,null)};bo.prototype.unmount=Mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){Jo(null,e,null,null)}),t[Ut]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=jf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Df(e)}};function Vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ac(){}function rg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Do(l);o.call(c)}}var l=Jd(t,r,e,0,null,!1,!1,"",ac);return e._reactRootContainer=l,e[Ut]=l.current,ti(e.nodeType===8?e.parentNode:e),Tn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Do(u);s.call(c)}}var u=Ou(e,0,!1,null,null,!1,!1,"",ac);return e._reactRootContainer=u,e[Ut]=u.current,ti(e.nodeType===8?e.parentNode:e),Tn(function(){Jo(t,u,n,r)}),u}function tl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Do(l);s.call(u)}}Jo(t,l,e,i)}else l=rg(n,t,e,i,r);return Do(l)}Nf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(ou(t,n|1),Ze(t,he()),!(X&6)&&(pr=he()+500,mn()))}break;case 13:Tn(function(){var r=Bt(e,1);if(r!==null){var i=Ve();wt(r,e,1,i)}}),Au(e,1)}};lu=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ve();wt(t,e,134217728,n)}Au(e,134217728)}};Pf=function(e){if(e.tag===13){var t=un(e),n=Bt(e,t);if(n!==null){var r=Ve();wt(n,e,t,r)}Au(e,t)}};jf=function(){return q};zf=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};ls=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qo(r);if(!i)throw Error($(90));sf(r),bl(r,i)}}}break;case"textarea":af(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};gf=Lu;yf=Tn;var ig={usingClientEntryPoint:!1,Events:[gi,Kn,Qo,hf,mf,Lu]},jr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},og={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wf(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Uo=Oi.inject(og),zt=Oi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ig;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(t))throw Error($(200));return tg(e,t,null,n)};nt.createRoot=function(e,t){if(!Vu(e))throw Error($(299));var n=!1,r="",i=bd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ou(e,1,!1,null,null,n,!1,r,i),e[Ut]=t.current,ti(e.nodeType===8?e.parentNode:e),new Mu(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=wf(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Tn(e)};nt.hydrate=function(e,t,n){if(!el(t))throw Error($(200));return tl(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!Vu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=bd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Jd(t,null,e,1,n??null,i,!1,o,l),e[Ut]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new bo(t)};nt.render=function(e,t,n){if(!el(t))throw Error($(200));return tl(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!el(e))throw Error($(40));return e._reactRootContainer?(Tn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};nt.unstable_batchedUpdates=Lu;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return tl(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep)}catch(e){console.error(e)}}ep(),qc.exports=nt;var lg=qc.exports,cc=lg;Kl.createRoot=cc.createRoot,Kl.hydrateRoot=cc.hydrateRoot;const sg=e=>{const[t,n]=Ne.useState(!1);return Ne.useEffect(()=>{const r=e.map(async i=>{const{fontFamily:o,fontUrl:l}=i,u=await new FontFace(o,`url(${l})`).load();document.fonts.add(u)});Promise.all(r).then(()=>{n(!0)}).catch(i=>{console.error(`Error loading fonts: ${i}`)})},[e]),t};var Pe=function(){return Pe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Pe.apply(this,arguments)};function ci(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ug=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),s=Object.keys(n);if(l.length!==s.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<l.length;c++){var y=l[c];if(!u(y))return!1;var m=t[y],h=n[y];if(o=r?r.call(i,m,h,y):void 0,o===!1||o===void 0&&m!==h)return!1}return!0};const ag=Vc(ug);var ne="-ms-",Kr="-moz-",Z="-webkit-",tp="comm",nl="rule",Uu="decl",cg="@import",np="@keyframes",fg="@layer",dg=Math.abs,Bu=String.fromCharCode,Ms=Object.assign;function pg(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function rp(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function eo(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function Nt(e){return e.length}function ip(e){return e.length}function Ir(e,t){return t.push(e),e}function hg(e,t){return e.map(t).join("")}function fc(e,t){return e.filter(function(n){return!Rt(n,t)})}var rl=1,mr=1,op=0,dt=0,ye=0,Sr="";function il(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:rl,column:mr,length:l,return:"",siblings:s}}function Kt(e,t){return Ms(il("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Ir(e,e.siblings)}function mg(){return ye}function gg(){return ye=dt>0?$e(Sr,--dt):0,mr--,ye===10&&(mr=1,rl--),ye}function St(){return ye=dt<op?$e(Sr,dt++):0,mr++,ye===10&&(mr=1,rl++),ye}function Nn(){return $e(Sr,dt)}function to(){return dt}function ol(e,t){return hr(Sr,e,t)}function Vs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yg(e){return rl=mr=1,op=Nt(Sr=e),dt=0,[]}function vg(e){return Sr="",e}function Rl(e){return rp(ol(dt-1,Us(e===91?e+2:e===40?e+1:e)))}function xg(e){for(;(ye=Nn())&&ye<33;)St();return Vs(e)>2||Vs(ye)>3?"":" "}function wg(e,t){for(;--t&&St()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return ol(e,to()+(t<6&&Nn()==32&&St()==32))}function Us(e){for(;St();)switch(ye){case e:return dt;case 34:case 39:e!==34&&e!==39&&Us(ye);break;case 40:e===41&&Us(e);break;case 92:St();break}return dt}function Sg(e,t){for(;St()&&e+ye!==57;)if(e+ye===84&&Nn()===47)break;return"/*"+ol(t,dt-1)+"*"+Bu(e===47?e:St())}function kg(e){for(;!Vs(Nn());)St();return ol(e,dt)}function Eg(e){return vg(no("",null,null,null,[""],e=yg(e),0,[0],e))}function no(e,t,n,r,i,o,l,s,u){for(var c=0,y=0,m=l,h=0,w=0,k=0,C=1,B=1,p=1,a=0,f="",x=i,E=o,N=r,_=f;B;)switch(k=a,a=St()){case 40:if(k!=108&&$e(_,m-1)==58){eo(_+=H(Rl(a),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Rl(a);break;case 9:case 10:case 13:case 32:_+=xg(k);break;case 92:_+=wg(to()-1,7);continue;case 47:switch(Nn()){case 42:case 47:Ir(_g(Sg(St(),to()),t,n,u),u);break;default:_+="/"}break;case 123*C:s[c++]=Nt(_)*p;case 125*C:case 59:case 0:switch(a){case 0:case 125:B=0;case 59+y:p==-1&&(_=H(_,/\f/g,"")),w>0&&Nt(_)-m&&Ir(w>32?pc(_+";",r,n,m-1,u):pc(H(_," ","")+";",r,n,m-2,u),u);break;case 59:_+=";";default:if(Ir(N=dc(_,t,n,c,y,i,s,f,x=[],E=[],m,o),o),a===123)if(y===0)no(_,t,N,N,x,o,m,s,E);else switch(h===99&&$e(_,3)===110?100:h){case 100:case 108:case 109:case 115:no(e,N,N,r&&Ir(dc(e,N,N,0,0,i,s,f,i,x=[],m,E),E),i,E,m,s,r?x:E);break;default:no(_,N,N,N,[""],E,0,s,E)}}c=y=w=0,C=p=1,f=_="",m=l;break;case 58:m=1+Nt(_),w=k;default:if(C<1){if(a==123)--C;else if(a==125&&C++==0&&gg()==125)continue}switch(_+=Bu(a),a*C){case 38:p=y>0?1:(_+="\f",-1);break;case 44:s[c++]=(Nt(_)-1)*p,p=1;break;case 64:Nn()===45&&(_+=Rl(St())),h=Nn(),y=m=Nt(f=_+=kg(to())),a++;break;case 45:k===45&&Nt(_)==2&&(C=0)}}return o}function dc(e,t,n,r,i,o,l,s,u,c,y,m){for(var h=i-1,w=i===0?o:[""],k=ip(w),C=0,B=0,p=0;C<r;++C)for(var a=0,f=hr(e,h+1,h=dg(B=l[C])),x=e;a<k;++a)(x=rp(B>0?w[a]+" "+f:H(f,/&\f/g,w[a])))&&(u[p++]=x);return il(e,t,n,i===0?nl:s,u,c,y,m)}function _g(e,t,n,r){return il(e,t,n,tp,Bu(mg()),hr(e,2,-2),0,r)}function pc(e,t,n,r,i){return il(e,t,n,Uu,hr(e,0,r),hr(e,r+1,-1),r,i)}function lp(e,t,n){switch(pg(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Kr+e+ne+e+e;case 5936:switch($e(e,t+11)){case 114:return Z+e+ne+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+ne+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+ne+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+ne+e+e;case 6165:return Z+e+ne+"flex-"+e+e;case 5187:return Z+e+H(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+ne+"flex-$1$2")+e;case 5443:return Z+e+ne+"flex-item-"+H(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":ne+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return Z+e+ne+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+ne+H(e,"shrink","negative")+e;case 5292:return Z+e+ne+H(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+H(e,"-grow","")+Z+e+ne+H(e,"grow","positive")+e;case 4554:return Z+H(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return ne+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return ne+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rt(r.props,/grid-\w+-end/)})?~eo(e+(n=n[t].value),"span")?e:ne+H(e,"-start","")+e+ne+"grid-row-span:"+(~eo(n,"span")?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":ne+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:ne+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Kr+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~eo(e,"stretch")?lp(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,c){return ne+i+":"+o+c+(l?ne+i+"-span:"+(s?u:+u-+o)+c:"")+e});case 4949:if($e(e,t+6)===121)return H(e,":",":"+Z)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+($e(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+ne+"$2box$3")+e;case 100:return H(e,":",":"+ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function To(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Cg(e,t,n,r){switch(e.type){case fg:if(e.children.length)break;case cg:case Uu:return e.return=e.return||e.value;case tp:return"";case np:return e.return=e.value+"{"+To(e.children,r)+"}";case nl:if(!Nt(e.value=e.props.join(",")))return""}return Nt(n=To(e.children,r))?e.return=e.value+"{"+n+"}":""}function $g(e){var t=ip(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Ng(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Uu:e.return=lp(e.value,e.length,n);return;case np:return To([Kt(e,{value:H(e.value,"@","@"+Z)})],r);case nl:if(e.length)return hg(n=e.props,function(i){switch(Rt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(Kt(e,{props:[H(i,/:(read-\w+)/,":"+Kr+"$1")]})),Mn(Kt(e,{props:[i]})),Ms(e,{props:fc(n,r)});break;case"::placeholder":Mn(Kt(e,{props:[H(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Mn(Kt(e,{props:[H(i,/:(plac\w+)/,":"+Kr+"$1")]})),Mn(Kt(e,{props:[H(i,/:(plac\w+)/,ne+"input-$1")]})),Mn(Kt(e,{props:[i]})),Ms(e,{props:fc(n,r)});break}return""})}}var jg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},gr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",Wu=typeof window<"u"&&"HTMLElement"in window,zg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),Dg={},ll=Object.freeze([]),yr=Object.freeze({});function sp(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var up=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lg=/(^-|-$)/g;function hc(e){return e.replace(Tg,"-").replace(Lg,"")}var Fg=/(a)(d)/gi,mc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=mc(t%52)+n;return(mc(t%52)+n).replace(Fg,"$1-$2")}var Il,bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ap=function(e){return bn(5381,e)};function cp(e){return Bs(ap(e)>>>0)}function Rg(e){return e.displayName||e.name||"Component"}function Ol(e){return typeof e=="string"&&!0}var fp=typeof Symbol=="function"&&Symbol.for,dp=fp?Symbol.for("react.memo"):60115,Ig=fp?Symbol.for("react.forward_ref"):60112,Og={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ag={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mg=((Il={})[Ig]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Il[dp]=pp,Il);function gc(e){return("type"in(t=e)&&t.type.$$typeof)===dp?pp:"$$typeof"in e?Mg[e.$$typeof]:Og;var t}var Vg=Object.defineProperty,Ug=Object.getOwnPropertyNames,yc=Object.getOwnPropertySymbols,Bg=Object.getOwnPropertyDescriptor,Wg=Object.getPrototypeOf,vc=Object.prototype;function hp(e,t,n){if(typeof t!="string"){if(vc){var r=Wg(t);r&&r!==vc&&hp(e,r,n)}var i=Ug(t);yc&&(i=i.concat(yc(t)));for(var o=gc(e),l=gc(t),s=0;s<i.length;++s){var u=i[s];if(!(u in Ag||n&&n[u]||l&&u in l||o&&u in o)){var c=Bg(t,u);try{Vg(e,u,c)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function Hu(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ws(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Hs(e,t,n){if(n===void 0&&(n=!1),!n&&!fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Hs(e[r],t[r]);else if(fi(t))for(var r in t)e[r]=Hs(e[r],t[r]);return e}function Qu(e,t){Object.defineProperty(e,"toString",{value:t})}function Fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),ro=new Map,Lo=new Map,io=1,Ai=function(e){if(ro.has(e))return ro.get(e);for(;Lo.has(io);)io++;var t=io++;return ro.set(e,t),Lo.set(t,e),t},Qg=function(e,t){io=t+1,ro.set(e,t),Lo.set(t,e)},Kg="style[".concat(gr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Gg=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Xg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(Gg);if(u){var c=0|parseInt(u[1],10),y=u[2];c!==0&&(Qg(y,c),Yg(e,y,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function Zg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(gr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","6.1.1");var l=Zg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},qg=function(){function e(t){this.element=mp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Jg=function(){function e(t){this.element=mp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xc=Wu,ey={isServer:!Wu,useCSSOMInjection:!zg},Fo=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var i=this;this.options=Pe(Pe({},ey),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wu&&xc&&(xc=!1,function(o){for(var l=document.querySelectorAll(Kg),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(gr)!=="active"&&(Xg(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Qu(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",c=function(m){var h=function(p){return Lo.get(p)}(m);if(h===void 0)return"continue";var w=o.names.get(h),k=l.getGroup(m);if(w===void 0||k.length===0)return"continue";var C="".concat(gr,".g").concat(m,'[id="').concat(h,'"]'),B="";w!==void 0&&w.forEach(function(p){p.length>0&&(B+="".concat(p,","))}),u+="".concat(k).concat(C,'{content:"').concat(B,'"}').concat(`/*!sc*/
`)},y=0;y<s;y++)c(y);return u}(i)})}return e.registerId=function(t){return Ai(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Pe(Pe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new bg(i):r?new qg(i):new Jg(i)}(this.options),new Hg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ai(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ai(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),ty=/&/g,ny=/^\s*\/\/.*$/gm;function gp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=gp(n.children,t)),n})}function yp(e){var t,n,r,i=e===void 0?yr:e,o=i.options,l=o===void 0?yr:o,s=i.plugins,u=s===void 0?ll:s,c=function(h,w,k){return k===n||k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):h},y=u.slice();y.push(function(h){h.type===nl&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(ty,n).replace(r,c))}),l.prefix&&y.push(Pg),y.push(Cg);var m=function(h,w,k,C){w===void 0&&(w=""),k===void 0&&(k=""),C===void 0&&(C="&"),t=C,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var B=h.replace(ny,""),p=Eg(k||w?"".concat(k," ").concat(w," { ").concat(B," }"):B);l.namespace&&(p=gp(p,l.namespace));var a=[];return To(p,$g(y.concat(Ng(function(f){return a.push(f)})))),a};return m.hash=u.length?u.reduce(function(h,w){return w.name||Fn(15),bn(h,w.name)},5381).toString():"",m}var ry=new Fo,Qs=yp(),Ku=le.createContext({shouldForwardProp:void 0,styleSheet:ry,stylis:Qs});Ku.Consumer;var iy=le.createContext(void 0);function Ro(){return Ne.useContext(Ku)}function oy(e){var t=Ne.useState(e.stylisPlugins),n=t[0],r=t[1],i=Ro().styleSheet,o=Ne.useMemo(function(){var u=i;return e.sheet?u=e.sheet:e.target&&(u=u.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(u=u.reconstructWithOptions({useCSSOMInjection:!1})),u},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=Ne.useMemo(function(){return yp({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);Ne.useEffect(function(){ag(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=Ne.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}},[e.shouldForwardProp,o,l]);return le.createElement(Ku.Provider,{value:s},le.createElement(iy.Provider,{value:l},e.children))}var ly=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qu(this,function(){throw Fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qs),this.name+t.hash},e}(),sy=function(e){return e>="A"&&e<="Z"};function wc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;sy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vp=function(e){return e==null||e===!1||e===""},xp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!vp(o)&&(Array.isArray(o)&&o.isCss||Ln(o)?r.push("".concat(wc(i),":"),o,";"):fi(o)?r.push.apply(r,ci(ci(["".concat(i," {")],xp(o),!1),["}"],!1)):r.push("".concat(wc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(vp(e))return[];if(Hu(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return cn(i,t,n,r)}var o;return e instanceof ly?n?(e.inject(n,r),[e.getName(r)]):[e]:fi(e)?xp(e):Array.isArray(e)?Array.prototype.concat.apply(ll,e.map(function(l){return cn(l,t,n,r)})):[e.toString()]}function wp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!Hu(n))return!1}return!0}var uy=ap("6.1.1"),ay=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wp(t),this.componentId=n,this.baseHash=bn(uy,n),this.baseStyle=r,Fo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=En(i,this.staticRulesId);else{var o=Ws(cn(this.rules,t,n,r)),l=Bs(bn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=En(i,l),this.staticRulesId=l}else{for(var u=bn(this.baseHash,r.hash),c="",y=0;y<this.rules.length;y++){var m=this.rules[y];if(typeof m=="string")c+=m;else if(m){var h=Ws(cn(m,t,n,r));u=bn(u,h+y),c+=h}}if(c){var w=Bs(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=En(i,w)}}return i},e}(),di=le.createContext(void 0);di.Consumer;function cy(e){var t=le.useContext(di),n=Ne.useMemo(function(){return function(r,i){if(!r)throw Fn(14);if(Ln(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Fn(8);return i?Pe(Pe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?le.createElement(di.Provider,{value:n},e.children):null}var Al={};function fy(e,t,n){var r=Hu(e),i=e,o=!Ol(e),l=t.attrs,s=l===void 0?ll:l,u=t.componentId,c=u===void 0?function(x,E){var N=typeof x!="string"?"sc":hc(x);Al[N]=(Al[N]||0)+1;var _="".concat(N,"-").concat(cp("6.1.1"+N+Al[N]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):u,y=t.displayName,m=y===void 0?function(x){return Ol(x)?"styled.".concat(x):"Styled(".concat(Rg(x),")")}(e):y,h=t.displayName&&t.componentId?"".concat(hc(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var B=t.shouldForwardProp;k=function(x,E){return C(x,E)&&B(x,E)}}else k=C}var p=new ay(n,h,r?i.componentStyle:void 0);function a(x,E){return function(N,_,L){var K=N.attrs,U=N.componentStyle,ue=N.defaultProps,Q=N.foldedComponentIds,W=N.styledComponentId,J=N.target,ke=le.useContext(di),Ee=Ro(),_e=N.shouldForwardProp||Ee.shouldForwardProp,z=function(We,it,He){for(var Qe,Et=Pe(Pe({},it),{className:void 0,theme:He}),gn=0;gn<We.length;gn+=1){var yn=Ln(Qe=We[gn])?Qe(Et):Qe;for(var _t in yn)Et[_t]=_t==="className"?En(Et[_t],yn[_t]):_t==="style"?Pe(Pe({},Et[_t]),yn[_t]):yn[_t]}return it.className&&(Et.className=En(Et.className,it.className)),Et}(K,_,sp(_,ke,ue)||yr),I=z.as||J,V={};for(var Y in z)z[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"||(Y==="forwardedAs"?V.as=z.forwardedAs:_e&&!_e(Y,I)||(V[Y]=z[Y]));var ie=function(We,it){var He=Ro(),Qe=We.generateAndInjectStyles(it,He.styleSheet,He.stylis);return Qe}(U,z),pt=En(Q,W);return ie&&(pt+=" "+ie),z.className&&(pt+=" "+z.className),V[Ol(I)&&!up.has(I)?"class":"className"]=pt,V.ref=L,Ne.createElement(I,V)}(f,x,E)}a.displayName=m;var f=le.forwardRef(a);return f.attrs=w,f.componentStyle=p,f.displayName=m,f.shouldForwardProp=k,f.foldedComponentIds=r?En(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=h,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var N=[],_=1;_<arguments.length;_++)N[_-1]=arguments[_];for(var L=0,K=N;L<K.length;L++)Hs(E,K[L],!0);return E}({},i.defaultProps,x):x}}),Qu(f,function(){return".".concat(f.styledComponentId)}),o&&hp(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Sc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var kc=function(e){return Object.assign(e,{isCss:!0})};function Sp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||fi(e)){var r=e;return kc(cn(Sc(ll,ci([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cn(i):kc(cn(Sc(i,t)))}function Ks(e,t,n){if(n===void 0&&(n=yr),!t)throw Fn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Sp.apply(void 0,ci([i],o,!1)))};return r.attrs=function(i){return Ks(e,t,Pe(Pe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ks(e,t,Pe(Pe({},n),i))},r}var kp=function(e){return Ks(fy,e)},j=kp;up.forEach(function(e){j[e]=kp(e)});var dy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=wp(t),Fo.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Ws(cn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Fo.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function py(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Sp.apply(void 0,ci([e],t,!1)),i="sc-global-".concat(cp(JSON.stringify(r))),o=new dy(r,i),l=function(u){var c=Ro(),y=le.useContext(di),m=le.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(m,u,c.styleSheet,y,c.stylis),le.useLayoutEffect(function(){if(!c.styleSheet.server)return s(m,u,c.styleSheet,y,c.stylis),function(){return o.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,y,c.stylis]),null};function s(u,c,y,m,h){if(o.isStatic)o.renderStyles(u,Dg,y,h);else{var w=Pe(Pe({},c),{theme:sp(c,m,l.defaultProps)});o.renderStyles(u,w,y,h)}}return le.memo(l)}const Ep=({theme:e})=>e.media.phone,O=({theme:e})=>e.media.tablet,M=({theme:e})=>e.media.desktop,hy=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),my=py`

#root {
  width: 100%;
  margin: 0 auto;
  padding: 36px 20px 24px;

  @media ${Ep} {
    width: 480px;
  }

  @media ${O} {
    width: 768px;
    padding: 36px 30px 40px;
  }

  @media ${M} {
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

  ${""}
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
`,gy="/ecosolution/assets/sprite-HKHvbpQq.svg",me=({iconName:e,width:t,height:n,stroke:r,fill:i})=>g.jsx("svg",{width:t,height:n,children:g.jsx("use",{href:`${gy}#${e}`,stroke:r||"transparent",fill:i||"transparent"})}),yy=j.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,vy=j.a`
  display: flex;
  align-items: center;
  gap: 4px;

  fill: #173d33;

  :hover {
    fill: #97d28b;
  }

  & > svg:first-child,
  svg:last-child {
    margin: 14px 0 8px 0;
  }
`,xy=j.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${Ep} {
  }

  @media ${O} {
    gap: 12px;
  }

  @media ${M} {
  }
`,wy=j.button`
  display: flex;
  padding: 12px;

  border-radius: 50%;
  background-color: #dcefd8;
`,Sy=j.a`
  display: none;

  @media ${O} {
    display: flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;
    border-radius: 500px;
    background-color: #97d28b;

    &::after {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #173d33;
    }
  }
`,ky=[{id:1,name:"Main"},{id:2,name:"About"},{id:3,name:"Cases"},{id:4,name:"FAQ"},{id:5,name:"Contact Us"}],Ey="/ecosolution/assets/about_1-PMEBtF5-.png",_y="/ecosolution/assets/about_1@2x-9imxmNKc.png",Cy="/ecosolution/assets/about_2-ViwEUMXv.png",$y="/ecosolution/assets/about_2@2x-KkWohZkE.png",Ny=[{iconName:"icon-openness",title:"Openness",description:"to the world, people, new ideas and projects"},{iconName:"icon-responsibility",title:"Responsibility",description:"we are aware that the results of our work have an impact on our lives and the lives of future generations"},{type:"image",alt:"wind-farms-fields",img:Ey,img2x:_y},{type:"image",alt:"man-worker",img:Cy,img2x:$y},{iconName:"icon-innovation",title:"Innovation",description:"we use the latest technology to implement non-standard solutions"},{iconName:"icon-quality",title:"Quality",description:"we do not strive to be the first among others, but we want to be the best in our business"}],Py="/ecosolution/assets/case1-_CCrYN4Q.png",jy="/ecosolution/assets/case1@2x-mXcN23UK.png",zy="/ecosolution/assets/case2-vSEbn31q.png",Dy="/ecosolution/assets/case2@2x-3tg7DISq.png",Ty="/ecosolution/assets/case3-moiV_2xm.png",Ly="/ecosolution/assets/case3@2x-NqDKei6c.png",Fy="/ecosolution/assets/case4-pHxz6kpC.png",Ry="/ecosolution/assets/case4@2x-F7wFwX0L.png",Iy="/ecosolution/assets/case5-67KrYcJn.png",Oy="/ecosolution/assets/case5@2x-u0LH_kfG.png",zr=[{img:Py,img2x:jy,alt:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{img:zy,img2x:Dy,alt:"Zhytomyr city Private Enterprise “Bosch”",title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{img:Ty,img2x:Ly,alt:"Rivne city Private Enterprise “Biotech”",title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{img:Fy,img2x:Ry,alt:"Kherson city Private Enterprise “HealthyFarm”",title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{img:Iy,img2x:Oy,alt:"Zaporizhia city Private Enterprise “Biotech”",title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],Ec=[{id:1,question:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,question:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,question:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,question:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,question:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],Ay=j.div`
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
`,My=j.div`
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

  @media ${O} {
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
`,Vy=j.button`
  display: flex;
  align-items: center;

  color: #fff;
`,Uy=j.nav`
  margin-top: 16px;
`,By=j.ul`
  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`,Wy=j.li`
  color: #fff;
  stroke: #fff;

  font-size: 24px;
  letter-spacing: -0.96px;

  &:hover,
  :active,
  :focus {
    color: #97d28b;
    stroke: #97d28b;
  }

  & > a {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,Hy=j.ul`
  display: flex;
  gap: 8px;
  margin-top: auto;
`,_c=j.li`
  & > svg > use {
    stroke: #ffffff;
  }

  & :hover,
  :active,
  :focus {
    stroke: #97d28b;
    /* fill: #97d28b; */
  }
`,Qy=({onClose:e})=>g.jsx(Ay,{children:g.jsxs(My,{children:[g.jsxs(Vy,{onClick:()=>e(),children:[g.jsx(me,{iconName:"icon-close",width:"20px",height:"20px",stroke:"#fff"}),"close"]}),g.jsx("span",{}),g.jsx(Uy,{children:g.jsx(By,{children:ky.map(({id:t,name:n})=>g.jsx(Wy,{children:g.jsxs("a",{href:"#",children:[n,g.jsx(me,{iconName:"icon-arrow-top-right",width:"16px",height:"16px",stroke:"inherit"})]})},t))})}),g.jsxs(Hy,{children:[g.jsx(_c,{children:g.jsx(me,{iconName:"icon-facebook",width:24,height:24})}),g.jsx(_c,{children:g.jsx(me,{iconName:"icon-instagram",width:24,height:24})})]})]})}),Ky=()=>{const[e,t]=Ne.useState(!1),n=()=>{t(!e)};return g.jsxs(yy,{children:[g.jsxs(vy,{href:"/",children:[g.jsx(me,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),g.jsx(me,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),g.jsx(me,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),g.jsxs(xy,{children:[g.jsx(wy,{type:"button",onClick:n,children:g.jsx(me,{iconName:"icon-menu",width:"16px",height:"16px",stroke:"#000"})}),e&&g.jsx(Qy,{onClose:n}),g.jsx(Sy,{href:"#",children:"Get in touch"})]})]})},Gy=j.main``,Yy=j.section`
  margin-bottom: 36px;

  @media ${O} {
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 120px;
  }
`,Xy=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 36px;

  @media ${O} {
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 124px;
  }
`,Zy=j.h2`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${O} {
    width: 272px;
    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`,qy=j.div`
  display: flex;

  @media ${O} {
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
`,Jy=j.p`
  display: flex;
  flex-direction: column;
  text-align: justify;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${O} {
    width: 342px;
  }
  @media ${M} {
    width: 459px;
  }
`,by=j.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media ${O} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${M} {
    gap: 48px;
  }
`,Cc=j.li`
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

    @media ${O} {
      display: block;
    }
  }
`,e0=j.img`
  width: 100%;
  height: auto;
`,t0=j.h3`
  display: flex;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${O} {
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
`,n0=j.span`
  display: block;
  width: 100%;
  height: 1px;

  background-color: #97d28b;

  margin-top: 33px;
  margin-bottom: 12px;

  @media ${O} {
    margin-top: 51px;
  }

  @media ${M} {
    margin-top: 94px;
    margin-bottom: 24px;
  }
`,r0=j.p`
  font-size: 14px;
  letter-spacing: -0.56px;
  text-align: justify;
  line-height: normal;

  @media ${M} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,i0=({alt:e,img:t,img2x:n})=>g.jsx(e0,{src:t,alt:`${e}`,srcSet:`${t} 1x, ${n} 2x`}),o0=()=>g.jsxs(Yy,{children:[g.jsxs(Xy,{children:[g.jsx(Zy,{children:"Main values of our company"}),g.jsxs(qy,{children:[g.jsx("span",{}),g.jsx(Jy,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]})]}),g.jsx(by,{children:Ny.map(({iconName:e,title:t,description:n,type:r,alt:i,img:o,img2x:l})=>r==="image"?g.jsx(Cc,{className:r==="image"?"hasImg":"",children:g.jsx(i0,{alt:i,img:o,img2x:l})},i):g.jsxs(Cc,{children:[g.jsxs(t0,{children:[g.jsx(me,{iconName:`${e}`,stroke:"#173D33",style:{marginRight:"8px"}}),t]}),g.jsx(n0,{}),g.jsx(r0,{children:n})]},t))})]}),l0=j.section`
  margin-top: 146px;
  margin-bottom: 36px;

  @media ${O} {
    margin-top: 164px;
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-top: 200px;
    margin-bottom: 120px;
  }
`,s0=j.h1`
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  font-weight: 400;

  margin-bottom: 24px;

  @media ${O} {
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
`,u0=j.div`
  @media ${O} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,a0=j.p`
  margin-bottom: 24px;

  font-size: 16px;
  letter-spacing: -0.64px;

  @media ${O} {
    width: 342px;

    margin-bottom: 43px;
  }

  @media ${M} {
    width: 363px;
    margin-right: 96px;
    margin-bottom: 20px;
  }
`,c0=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: 0 auto;
  margin-bottom: 24px; // Тимчасово
  padding: 4px 4px 4px 16px;

  border-radius: 500px;
  border: 1px solid #97d28b;

  line-height: 18px;
  letter-spacing: -0.64px;

  @media ${O} {
    margin: 0;
  }

  &:hover,
  &:focus,
  &:active {
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
`,f0=j.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 24px 0;

  background-color: #97d28b;

  @media ${O} {
    margin: 26px 0 16px;
  }

  @media ${M} {
    margin: 28px 0 12px;
  }
`,d0=j.address`
  margin-bottom: 36px;
`,p0=j.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media ${O} {
    flex-direction: row;
    justify-content: space-between;
  }
`,$c=j.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  font-style: normal;

  @media ${O} {
    display: flex;
    gap: 50px;
  }

  @media ${M} {
    gap: 167px;
  }

  & > span {
    display: none;

    @media ${O} {
      display: block;
    }
  }
`,Nc=j.a``,h0=j.img`
  width: 320px;
  height: 200px;
  object-fit: cover;

  margin: 0 auto;

  @media ${O} {
    width: 710px;
    height: auto;
  }

  @media ${M} {
    width: 100%;
    height: auto;
  }
`,Pc="/ecosolution/assets/hero-D9CF8VHC.png",m0="/ecosolution/assets/hero@2x-w56nltbM.png",g0="/ecosolution/assets/hero@3x-4KMo86SA.png",y0=()=>g.jsxs(l0,{children:[g.jsxs(u0,{children:[g.jsx(s0,{children:"RENEWABLE ENERGY For any task"}),g.jsxs("div",{children:[g.jsx(a0,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),g.jsxs(c0,{children:["Learn More",g.jsx("span",{children:g.jsx(me,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})]}),g.jsx(f0,{}),g.jsxs("div",{children:[g.jsx(d0,{children:g.jsxs(p0,{children:[g.jsx($c,{children:g.jsx(Nc,{href:"https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7+%D0%AF,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000",target:"_blank",rel:"noopener noreferrer",children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"})}),g.jsxs($c,{children:[g.jsx(Nc,{href:"mailto:office@ecosolution.com",children:"office@ecosolution.com"}),g.jsx("span",{children:"ecosolution © 2023"})]})]})}),g.jsx(h0,{src:Pc,alt:"Energy",srcSet:`${Pc} 1x, ${m0} 2x, ${g0} 3x`})]})]}),v0=j.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;

  @media ${O} {
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

    @media ${O} {
      height: 87px;
    }
  }
`,x0=j.h2`
  width: 286px;

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${O} {
    width: 368px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }
`,w0=j.p`
  display: flex;
  align-items: center;
  gap: 8px;

  text-align: center;
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;

  color: #97d28b;

  @media ${O} {
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
`,S0=()=>{const[e,t]=Ne.useState(1134147814);return Ne.useEffect(()=>{const n=setInterval(()=>{t(r=>r+1)},1e3);return()=>clearInterval(n)},[]),g.jsxs(v0,{children:[g.jsx(x0,{children:"Electricity we produced for all time"}),g.jsx("span",{}),g.jsxs(w0,{children:[hy(e)," ",g.jsx("span",{children:"kWh"})]})]})},k0=j.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;

  @media ${O} {
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 120px;
  }
`,E0=j.div`
  margin-bottom: 20px;

  @media ${O} {
    display: flex;
    gap: 90px;

    margin-bottom: 32px;
  }

  @media ${M} {
    gap: 205px;
    margin-bottom: 120px;
  }
`,_0=j.h2`
  width: 264px;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${O} {
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
`,C0=j.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & > span {
    display: none;

    @media ${O} {
      display: block;
      width: 1px;
      height: 65px;

      background-color: #97d28b;
    }

    @media ${O} {
      width: 1px;
      height: 96px;

      background-color: #97d28b;
    }
  }
`,$0=j.p`
  display: block;
  font-size: 28px;
  letter-spacing: -1.12px;

  @media ${O} {
    display: flex;
    margin-left: 10px;
  }

  @media ${M} {
    margin-left: 161px;
  }

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`,N0=j.div`
  display: flex;
  gap: 12px;

  @media ${O} {
    margin-left: 126px;
  }

  @media ${M} {
    margin-left: 193px;
  }
`,jc=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border: 1px solid #173d33;
  border-radius: 50%;

  @media ${M} {
    padding: 24px;
  }

  &:hover {
    border-color: #97d28b;

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
      stroke: #173d33;
    }
  }
`,P0=j.ul`
  @media ${O} {
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
`,j0=j.li`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  height: auto;

  background-color: #eaedf1;

  @media ${O} {
  }

  @media ${M} {
    max-width: 596px;
  }
`,z0=j.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,D0=j.div`
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
`,T0=j.div`
  display: flex;
  justify-content: space-between;
`,L0=j.p`
  width: 175px;

  font-size: 18px;
  letter-spacing: -0.72px;

  @media ${O} {
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
`,F0=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  border-radius: 50%;
  background-color: #97d28b;

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
      stroke: #173d33;
    }
  }
`,R0=j.div`
  display: flex;
  justify-content: space-between;
`,I0=j.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${O} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${M} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,O0=j.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${O} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${M} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,A0=({img:e,img2x:t,alt:n,title:r,description:i,date:o})=>g.jsxs(j0,{children:[g.jsx(z0,{src:e,alt:`${n}`,srcSet:`${e} 1x, ${t} 2x`}),g.jsxs(D0,{children:[g.jsxs(T0,{children:[g.jsx(L0,{children:r}),g.jsx(F0,{children:g.jsx(me,{iconName:"icon-arrow-top-right"})})]}),g.jsx("span",{}),g.jsxs(R0,{children:[g.jsx(I0,{children:i}),g.jsx(O0,{children:o})]})]})]}),M0=()=>{const[e,t]=Ne.useState([0,1]),n=()=>{t(i=>{const o=i[0]===0?zr.length-1:i[0]-1,l=i[1]===0?zr.length-1:i[1]-1;return[o,l]})},r=()=>{t(i=>{const o=i[0]===zr.length-1?0:i[0]+1,l=i[1]===zr.length-1?0:i[1]+1;return[o,l]})};return g.jsxs(k0,{children:[g.jsxs(E0,{children:[g.jsx(_0,{children:"Successful cases of our company"}),g.jsxs(C0,{children:[g.jsx("span",{}),g.jsxs($0,{children:[`${(e[0]+1).toString().padStart(2,"0")}`,g.jsx("span",{children:" /05"})]}),g.jsxs(N0,{children:[g.jsx(jc,{onClick:n,children:g.jsx(me,{iconName:"icon-arrow-left-slider",stroke:"#000"})}),g.jsx(jc,{onClick:r,children:g.jsx(me,{iconName:"icon-arrow-right-slider",stroke:"#000"})})]})]})]}),g.jsx(P0,{children:e.map(i=>g.jsx(A0,{...zr[i]},i))})]})},V0=j.section`
  margin-bottom: 36px;

  @media ${O} {
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
`,U0=j.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${O} {
    display: flex;
  }
`,B0=j.h2`
  width: 320px;
  margin-bottom: 24px;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media ${O} {
    width: 347px;

    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    width: 398px;
    font-size: 48px;
    line-height: 48px;
  }
`,W0=j.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 296px;
`,H0=j.li`
  &:before {
    content: ' ';
    display: block;
    width: 100%;
    height: 1px;
    margin-bottom: 16px;

    background-color: #97d28b;
  }

  @media ${O} {
    width: 342px;
  }

  @media ${M} {
    width: 596px;
  }
`,Q0=j.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  @media ${O} {
    gap: 16px;
  }

  @media ${M} {
    gap: 24px;
  }

  & > svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;

    @media ${O} {
      width: 28px;
      height: 28px;
    }

    & > use {
      stroke: #173d33;
    }
  }
`,K0=j.h3`
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
`,G0=j.p`
  margin-left: 24px;

  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${O} {
    margin-left: 44px;
  }

  @media ${M} {
    margin-left: 52px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,Y0=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,X0=j.p`
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media ${M} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,Z0=j.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;

  border-radius: 100px;

  background-color: #97d28b;

  &::after {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #173d33;
  }
`,q0=j.div`
  margin-top: 36px;

  @media ${O} {
    display: none;
  }
`,J0=({question:e,answer:t,toggleAccordion:n,isOpen:r})=>g.jsxs(H0,{children:[g.jsxs(Q0,{onClick:n,children:[g.jsx(me,{iconName:r?"icon-minus":"icon-plus"}),g.jsx(K0,{open:r,children:e})]}),r&&g.jsx(G0,{children:t})]}),zc=()=>g.jsxs(Y0,{children:[g.jsxs(X0,{children:["Didn't find the answer to your question?"," "]}),g.jsx(Z0,{children:"Contact us"})]}),b0=()=>{const[e,t]=Ne.useState(Ec[0].id),n=r=>{t(r===e?null:r)};return g.jsxs(V0,{children:[g.jsxs(U0,{children:[g.jsx(B0,{children:"Frequently Asked Questions"}),g.jsx(zc,{})]}),g.jsx(W0,{children:Ec.map(({id:r,question:i,answer:o})=>g.jsx(J0,{question:i,answer:o,toggleAccordion:()=>n(r),isOpen:r===e},r))}),g.jsx(q0,{children:g.jsx(zc,{})})]})},e1=j.section`
  margin-bottom: 36px;

  @media ${O} {
    flex-direction: row;
    margin-bottom: 100px;
  }

  @media ${M} {
    margin-bottom: 120px;
  }
`,t1=j.h2`
  margin-bottom: 24px;
  text-align: center;
  font-family: ${({theme:e})=>e.fonts.secondary};
  font-weight: 400;
  font-size: 28px;
  line-height: 28px;
  text-transform: uppercase;

  @media ${O} {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 36px;
  }

  @media ${M} {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`,n1=j.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${O} {
    flex-direction: row;
    justify-content: space-between;
  }
`,r1=j.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${O} {
    width: 244px;
  }

  @media ${M} {
    gap: 32px;
    width: 466px;
  }
`,Mi=j.p`
  margin-bottom: 8px;

  text-align: justify;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;

  @media ${M} {
    margin-bottom: 16px;
  }
`,Vi=j.p`
  display: flex;
  gap: 8px;
  text-align: justify;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -0.8px;
`,i1=j.div`
  & > svg:last-child {
    margin-left: 32px;
    @media ${M} {
      margin-left: 8px;
    }
  }
`,o1=j.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  padding: 36px 12px;
  background-color: #eaedf1;

  @media ${O} {
    width: 342px;
    padding: 36px 24px;
  }

  @media ${M} {
    gap: 32px;
    width: 596px;
    padding: 48px;
  }
`,Ui=j.label`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
`,Ml=j.input`
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
`,l1=j.textarea`
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
`,s1=j.button`
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

  &:hover,
  &:focus,
  &:active {
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
`,Vl=j.span`
  position: absolute;
  bottom: -25px;
  right: 0;
  text-align: right;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  color: #d28b8b;
`,u1=()=>g.jsxs(r1,{children:[g.jsxs("div",{children:[g.jsx(Mi,{children:"Phone:"}),g.jsxs(Vi,{children:[g.jsx(me,{iconName:"icon-phone",width:24,height:24,stroke:"#173D33"}),"38 (098) 12 34 567"]}),g.jsxs(Vi,{style:{marginTop:"12px"},children:[g.jsx(me,{iconName:"icon-phone",width:24,height:24,stroke:"#173D33"}),"38 (093) 12 34 567"]})]}),g.jsxs("div",{children:[g.jsx(Mi,{children:"E-mail:"}),g.jsxs(Vi,{children:[g.jsx(me,{iconName:"icon-email",width:24,height:24,stroke:"#173D33"}),"office@ecosolution.com"]})]}),g.jsxs("div",{children:[g.jsx(Mi,{children:"Address:"}),g.jsxs(Vi,{children:[g.jsx(me,{iconName:"icon-map",width:24,height:24,stroke:"#173D33"}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),g.jsxs(i1,{children:[g.jsx(Mi,{children:"Social Networks:"}),g.jsx(me,{iconName:"icon-facebook",width:24,height:24,stroke:"#173D33"}),g.jsx(me,{iconName:"icon-instagram",width:24,height:24,stroke:"#173D33"})]})]});var vi=e=>e.type==="checkbox",er=e=>e instanceof Date,Me=e=>e==null;const _p=e=>typeof e=="object";var Se=e=>!Me(e)&&!Array.isArray(e)&&_p(e)&&!er(e),a1=e=>Se(e)&&e.target?vi(e.target)?e.target.checked:e.target.value:e,c1=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f1=(e,t)=>e.has(c1(t)),d1=e=>{const t=e.constructor&&e.constructor.prototype;return Se(t)&&t.hasOwnProperty("isPrototypeOf")},Gu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Lt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Gu&&(e instanceof Blob||e instanceof FileList))&&(n||Se(e)))if(t=n?[]:{},!n&&!d1(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Lt(e[r]));else return e;return t}var xi=e=>Array.isArray(e)?e.filter(Boolean):[],pe=e=>e===void 0,R=(e,t,n)=>{if(!t||!Se(e))return n;const r=xi(t.split(/[,[\].]+?/)).reduce((i,o)=>Me(i)?i:i[o],e);return pe(r)||r===e?pe(e[t])?n:e[t]:r},qt=e=>typeof e=="boolean";const Dc={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Tt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};le.createContext(null);var p1=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const l=o;return t._proxyFormState[l]!==vt.all&&(t._proxyFormState[l]=!r||vt.all),n&&(n[l]=!0),e[l]}});return i},ot=e=>Se(e)&&!Object.keys(e).length,h1=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return ot(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(l=>t[l]===(!r||vt.all))},Ul=e=>Array.isArray(e)?e:[e];function m1(e){const t=le.useRef(e);t.current=e,le.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var jt=e=>typeof e=="string",g1=(e,t,n,r,i)=>jt(e)?(r&&t.watch.add(e),R(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),R(n,o))):(r&&(t.watchAll=!0),n),Yu=e=>/^\w*$/.test(e),Cp=e=>xi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function oe(e,t,n){let r=-1;const i=Yu(t)?[t]:Cp(t),o=i.length,l=o-1;for(;++r<o;){const s=i[r];let u=n;if(r!==l){const c=e[s];u=Se(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[s]=u,e=e[s]}return e}var y1=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Tc=e=>({isOnSubmit:!e||e===vt.onSubmit,isOnBlur:e===vt.onBlur,isOnChange:e===vt.onChange,isOnAll:e===vt.all,isOnTouch:e===vt.onTouched}),Lc=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const oo=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=R(e,i);if(o){const{_f:l,...s}=o;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],i)&&!r)break;if(l.ref&&t(l.ref,l.name)&&!r)break}else Se(s)&&oo(s,t)}}};var v1=(e,t,n)=>{const r=xi(R(e,n));return oe(r,"root",t[n]),oe(e,n,r),e},Xu=e=>e.type==="file",en=e=>typeof e=="function",Io=e=>{if(!Gu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},lo=e=>jt(e),Zu=e=>e.type==="radio",Oo=e=>e instanceof RegExp;const Fc={value:!1,isValid:!1},Rc={value:!0,isValid:!0};var $p=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!pe(e[0].attributes.value)?pe(e[0].value)||e[0].value===""?Rc:{value:e[0].value,isValid:!0}:Rc:Fc}return Fc};const Ic={isValid:!1,value:null};var Np=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Ic):Ic;function Oc(e,t,n="validate"){if(lo(e)||Array.isArray(e)&&e.every(lo)||qt(e)&&!e)return{type:n,message:lo(e)?e:"",ref:t}}var Vn=e=>Se(e)&&!Oo(e)?e:{value:e,message:""},Ac=async(e,t,n,r,i)=>{const{ref:o,refs:l,required:s,maxLength:u,minLength:c,min:y,max:m,pattern:h,validate:w,name:k,valueAsNumber:C,mount:B,disabled:p}=e._f,a=R(t,k);if(!B||p)return{};const f=l?l[0]:o,x=Q=>{r&&f.reportValidity&&(f.setCustomValidity(qt(Q)?"":Q||""),f.reportValidity())},E={},N=Zu(o),_=vi(o),L=N||_,K=(C||Xu(o))&&pe(o.value)&&pe(a)||Io(o)&&o.value===""||a===""||Array.isArray(a)&&!a.length,U=y1.bind(null,k,n,E),ue=(Q,W,J,ke=Tt.maxLength,Ee=Tt.minLength)=>{const _e=Q?W:J;E[k]={type:Q?ke:Ee,message:_e,ref:o,...U(Q?ke:Ee,_e)}};if(i?!Array.isArray(a)||!a.length:s&&(!L&&(K||Me(a))||qt(a)&&!a||_&&!$p(l).isValid||N&&!Np(l).isValid)){const{value:Q,message:W}=lo(s)?{value:!!s,message:s}:Vn(s);if(Q&&(E[k]={type:Tt.required,message:W,ref:f,...U(Tt.required,W)},!n))return x(W),E}if(!K&&(!Me(y)||!Me(m))){let Q,W;const J=Vn(m),ke=Vn(y);if(!Me(a)&&!isNaN(a)){const Ee=o.valueAsNumber||a&&+a;Me(J.value)||(Q=Ee>J.value),Me(ke.value)||(W=Ee<ke.value)}else{const Ee=o.valueAsDate||new Date(a),_e=V=>new Date(new Date().toDateString()+" "+V),z=o.type=="time",I=o.type=="week";jt(J.value)&&a&&(Q=z?_e(a)>_e(J.value):I?a>J.value:Ee>new Date(J.value)),jt(ke.value)&&a&&(W=z?_e(a)<_e(ke.value):I?a<ke.value:Ee<new Date(ke.value))}if((Q||W)&&(ue(!!Q,J.message,ke.message,Tt.max,Tt.min),!n))return x(E[k].message),E}if((u||c)&&!K&&(jt(a)||i&&Array.isArray(a))){const Q=Vn(u),W=Vn(c),J=!Me(Q.value)&&a.length>+Q.value,ke=!Me(W.value)&&a.length<+W.value;if((J||ke)&&(ue(J,Q.message,W.message),!n))return x(E[k].message),E}if(h&&!K&&jt(a)){const{value:Q,message:W}=Vn(h);if(Oo(Q)&&!a.match(Q)&&(E[k]={type:Tt.pattern,message:W,ref:o,...U(Tt.pattern,W)},!n))return x(W),E}if(w){if(en(w)){const Q=await w(a,t),W=Oc(Q,f);if(W&&(E[k]={...W,...U(Tt.validate,W.message)},!n))return x(W.message),E}else if(Se(w)){let Q={};for(const W in w){if(!ot(Q)&&!n)break;const J=Oc(await w[W](a,t),f,W);J&&(Q={...J,...U(W,J.message)},x(J.message),n&&(E[k]=Q))}if(!ot(Q)&&(E[k]={ref:f,...Q},!n))return E}}return x(!0),E};function x1(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=pe(e)?r++:e[t[r++]];return e}function w1(e){for(const t in e)if(e.hasOwnProperty(t)&&!pe(e[t]))return!1;return!0}function ze(e,t){const n=Array.isArray(t)?t:Yu(t)?[t]:Cp(t),r=n.length===1?e:x1(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Se(r)&&ot(r)||Array.isArray(r)&&w1(r))&&ze(e,n.slice(0,-1)),e}function Bl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Ao=e=>Me(e)||!_p(e);function _n(e,t){if(Ao(e)||Ao(t))return e===t;if(er(e)&&er(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const l=t[i];if(er(o)&&er(l)||Se(o)&&Se(l)||Array.isArray(o)&&Array.isArray(l)?!_n(o,l):o!==l)return!1}}return!0}var Pp=e=>e.type==="select-multiple",S1=e=>Zu(e)||vi(e),Wl=e=>Io(e)&&e.isConnected,jp=e=>{for(const t in e)if(en(e[t]))return!0;return!1};function Mo(e,t={}){const n=Array.isArray(e);if(Se(e)||n)for(const r in e)Array.isArray(e[r])||Se(e[r])&&!jp(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Mo(e[r],t[r])):Me(e[r])||(t[r]=!0);return t}function zp(e,t,n){const r=Array.isArray(e);if(Se(e)||r)for(const i in e)Array.isArray(e[i])||Se(e[i])&&!jp(e[i])?pe(t)||Ao(n[i])?n[i]=Array.isArray(e[i])?Mo(e[i],[]):{...Mo(e[i])}:zp(e[i],Me(t)?{}:t[i],n[i]):n[i]=!_n(e[i],t[i]);return n}var Hl=(e,t)=>zp(e,t,Mo(t)),Dp=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>pe(e)?e:t?e===""?NaN:e&&+e:n&&jt(e)?new Date(e):r?r(e):e;function Ql(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Xu(t)?t.files:Zu(t)?Np(e.refs).value:Pp(t)?[...t.selectedOptions].map(({value:n})=>n):vi(t)?$p(e.refs).value:Dp(pe(t.value)?e.ref.value:t.value,e)}var k1=(e,t,n,r)=>{const i={};for(const o of e){const l=R(t,o);l&&oe(i,o,l._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Dr=e=>pe(e)?e:Oo(e)?e.source:Se(e)?Oo(e.value)?e.value.source:e.value:e,E1=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Mc(e,t,n){const r=R(e,n);if(r||Yu(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),l=R(t,o),s=R(e,o);if(l&&!Array.isArray(l)&&n!==o)return{name:n};if(s&&s.type)return{name:o,error:s};i.pop()}return{name:n}}var _1=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,C1=(e,t)=>!xi(R(e,t)).length&&ze(e,t);const $1={mode:vt.onSubmit,reValidateMode:vt.onChange,shouldFocusError:!0};function N1(e={},t){let n={...$1,...e},r={submitCount:0,isDirty:!1,isLoading:en(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Se(n.defaultValues)||Se(n.values)?Lt(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:Lt(o),s={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,y=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={values:Bl(),array:Bl(),state:Bl()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,k=Tc(n.mode),C=Tc(n.reValidateMode),B=n.criteriaMode===vt.all,p=d=>v=>{clearTimeout(y),y=setTimeout(d,v)},a=async d=>{if(m.isValid||d){const v=n.resolver?ot((await K()).errors):await ue(i,!0);v!==r.isValid&&h.state.next({isValid:v})}},f=d=>m.isValidating&&h.state.next({isValidating:d}),x=(d,v=[],S,F,D=!0,P=!0)=>{if(F&&S){if(s.action=!0,P&&Array.isArray(R(i,d))){const A=S(R(i,d),F.argA,F.argB);D&&oe(i,d,A)}if(P&&Array.isArray(R(r.errors,d))){const A=S(R(r.errors,d),F.argA,F.argB);D&&oe(r.errors,d,A),C1(r.errors,d)}if(m.touchedFields&&P&&Array.isArray(R(r.touchedFields,d))){const A=S(R(r.touchedFields,d),F.argA,F.argB);D&&oe(r.touchedFields,d,A)}m.dirtyFields&&(r.dirtyFields=Hl(o,l)),h.state.next({name:d,isDirty:W(d,v),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else oe(l,d,v)},E=(d,v)=>{oe(r.errors,d,v),h.state.next({errors:r.errors})},N=(d,v,S,F)=>{const D=R(i,d);if(D){const P=R(l,d,pe(S)?R(o,d):S);pe(P)||F&&F.defaultChecked||v?oe(l,d,v?P:Ql(D._f)):Ee(d,P),s.mount&&a()}},_=(d,v,S,F,D)=>{let P=!1,A=!1;const b={name:d};if(!S||F){m.isDirty&&(A=r.isDirty,r.isDirty=b.isDirty=W(),P=A!==b.isDirty);const ge=_n(R(o,d),v);A=R(r.dirtyFields,d),ge?ze(r.dirtyFields,d):oe(r.dirtyFields,d,!0),b.dirtyFields=r.dirtyFields,P=P||m.dirtyFields&&A!==!ge}if(S){const ge=R(r.touchedFields,d);ge||(oe(r.touchedFields,d,S),b.touchedFields=r.touchedFields,P=P||m.touchedFields&&ge!==S)}return P&&D&&h.state.next(b),P?b:{}},L=(d,v,S,F)=>{const D=R(r.errors,d),P=m.isValid&&qt(v)&&r.isValid!==v;if(e.delayError&&S?(c=p(()=>E(d,S)),c(e.delayError)):(clearTimeout(y),c=null,S?oe(r.errors,d,S):ze(r.errors,d)),(S?!_n(D,S):D)||!ot(F)||P){const A={...F,...P&&qt(v)?{isValid:v}:{},errors:r.errors,name:d};r={...r,...A},h.state.next(A)}f(!1)},K=async d=>n.resolver(l,n.context,k1(d||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),U=async d=>{const{errors:v}=await K(d);if(d)for(const S of d){const F=R(v,S);F?oe(r.errors,S,F):ze(r.errors,S)}else r.errors=v;return v},ue=async(d,v,S={valid:!0})=>{for(const F in d){const D=d[F];if(D){const{_f:P,...A}=D;if(P){const b=u.array.has(P.name),ge=await Ac(D,l,B,n.shouldUseNativeValidation&&!v,b);if(ge[P.name]&&(S.valid=!1,v))break;!v&&(R(ge,P.name)?b?v1(r.errors,ge,P.name):oe(r.errors,P.name,ge[P.name]):ze(r.errors,P.name))}A&&await ue(A,v,S)}}return S.valid},Q=()=>{for(const d of u.unMount){const v=R(i,d);v&&(v._f.refs?v._f.refs.every(S=>!Wl(S)):!Wl(v._f.ref))&&Qe(d)}u.unMount=new Set},W=(d,v)=>(d&&v&&oe(l,d,v),!_n(ie(),o)),J=(d,v,S)=>g1(d,u,{...s.mount?l:pe(v)?o:jt(d)?{[d]:v}:v},S,v),ke=d=>xi(R(s.mount?l:o,d,e.shouldUnregister?R(o,d,[]):[])),Ee=(d,v,S={})=>{const F=R(i,d);let D=v;if(F){const P=F._f;P&&(!P.disabled&&oe(l,d,Dp(v,P)),D=Io(P.ref)&&Me(v)?"":v,Pp(P.ref)?[...P.ref.options].forEach(A=>A.selected=D.includes(A.value)):P.refs?vi(P.ref)?P.refs.length>1?P.refs.forEach(A=>(!A.defaultChecked||!A.disabled)&&(A.checked=Array.isArray(D)?!!D.find(b=>b===A.value):D===A.value)):P.refs[0]&&(P.refs[0].checked=!!D):P.refs.forEach(A=>A.checked=A.value===D):Xu(P.ref)?P.ref.value="":(P.ref.value=D,P.ref.type||h.values.next({name:d,values:{...l}})))}(S.shouldDirty||S.shouldTouch)&&_(d,D,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&Y(d)},_e=(d,v,S)=>{for(const F in v){const D=v[F],P=`${d}.${F}`,A=R(i,P);(u.array.has(d)||!Ao(D)||A&&!A._f)&&!er(D)?_e(P,D,S):Ee(P,D,S)}},z=(d,v,S={})=>{const F=R(i,d),D=u.array.has(d),P=Lt(v);oe(l,d,P),D?(h.array.next({name:d,values:{...l}}),(m.isDirty||m.dirtyFields)&&S.shouldDirty&&h.state.next({name:d,dirtyFields:Hl(o,l),isDirty:W(d,P)})):F&&!F._f&&!Me(P)?_e(d,P,S):Ee(d,P,S),Lc(d,u)&&h.state.next({...r}),h.values.next({name:d,values:{...l}}),!s.mount&&t()},I=async d=>{const v=d.target;let S=v.name,F=!0;const D=R(i,S),P=()=>v.type?Ql(D._f):a1(d),A=b=>{F=Number.isNaN(b)||b===R(l,S,b)};if(D){let b,ge;const wi=P(),On=d.type===Dc.BLUR||d.type===Dc.FOCUS_OUT,Lp=!E1(D._f)&&!n.resolver&&!R(r.errors,S)&&!D._f.deps||_1(On,R(r.touchedFields,S),r.isSubmitted,C,k),sl=Lc(S,u,On);oe(l,S,wi),On?(D._f.onBlur&&D._f.onBlur(d),c&&c(0)):D._f.onChange&&D._f.onChange(d);const ul=_(S,wi,On,!1),Fp=!ot(ul)||sl;if(!On&&h.values.next({name:S,type:d.type,values:{...l}}),Lp)return m.isValid&&a(),Fp&&h.state.next({name:S,...sl?{}:ul});if(!On&&sl&&h.state.next({...r}),f(!0),n.resolver){const{errors:ea}=await K([S]);if(A(wi),F){const Rp=Mc(r.errors,i,S),ta=Mc(ea,i,Rp.name||S);b=ta.error,S=ta.name,ge=ot(ea)}}else b=(await Ac(D,l,B,n.shouldUseNativeValidation))[S],A(wi),F&&(b?ge=!1:m.isValid&&(ge=await ue(i,!0)));F&&(D._f.deps&&Y(D._f.deps),L(S,ge,b,ul))}},V=(d,v)=>{if(R(r.errors,v)&&d.focus)return d.focus(),1},Y=async(d,v={})=>{let S,F;const D=Ul(d);if(f(!0),n.resolver){const P=await U(pe(d)?d:D);S=ot(P),F=d?!D.some(A=>R(P,A)):S}else d?(F=(await Promise.all(D.map(async P=>{const A=R(i,P);return await ue(A&&A._f?{[P]:A}:A)}))).every(Boolean),!(!F&&!r.isValid)&&a()):F=S=await ue(i);return h.state.next({...!jt(d)||m.isValid&&S!==r.isValid?{}:{name:d},...n.resolver||!d?{isValid:S}:{},errors:r.errors,isValidating:!1}),v.shouldFocus&&!F&&oo(i,V,d?D:u.mount),F},ie=d=>{const v={...o,...s.mount?l:{}};return pe(d)?v:jt(d)?R(v,d):d.map(S=>R(v,S))},pt=(d,v)=>({invalid:!!R((v||r).errors,d),isDirty:!!R((v||r).dirtyFields,d),isTouched:!!R((v||r).touchedFields,d),error:R((v||r).errors,d)}),We=d=>{d&&Ul(d).forEach(v=>ze(r.errors,v)),h.state.next({errors:d?r.errors:{}})},it=(d,v,S)=>{const F=(R(i,d,{_f:{}})._f||{}).ref;oe(r.errors,d,{...v,ref:F}),h.state.next({name:d,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&F&&F.focus&&F.focus()},He=(d,v)=>en(d)?h.values.subscribe({next:S=>d(J(void 0,v),S)}):J(d,v,!0),Qe=(d,v={})=>{for(const S of d?Ul(d):u.mount)u.mount.delete(S),u.array.delete(S),v.keepValue||(ze(i,S),ze(l,S)),!v.keepError&&ze(r.errors,S),!v.keepDirty&&ze(r.dirtyFields,S),!v.keepTouched&&ze(r.touchedFields,S),!n.shouldUnregister&&!v.keepDefaultValue&&ze(o,S);h.values.next({values:{...l}}),h.state.next({...r,...v.keepDirty?{isDirty:W()}:{}}),!v.keepIsValid&&a()},Et=({disabled:d,name:v,field:S,fields:F,value:D})=>{if(qt(d)){const P=d?void 0:pe(D)?Ql(S?S._f:R(F,v)._f):D;oe(l,v,P),_(v,P,!1,!1,!0)}},gn=(d,v={})=>{let S=R(i,d);const F=qt(v.disabled);return oe(i,d,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:d}},name:d,mount:!0,...v}}),u.mount.add(d),S?Et({field:S,disabled:v.disabled,name:d}):N(d,!0,v.value),{...F?{disabled:v.disabled}:{},...n.progressive?{required:!!v.required,min:Dr(v.min),max:Dr(v.max),minLength:Dr(v.minLength),maxLength:Dr(v.maxLength),pattern:Dr(v.pattern)}:{},name:d,onChange:I,onBlur:I,ref:D=>{if(D){gn(d,v),S=R(i,d);const P=pe(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,A=S1(P),b=S._f.refs||[];if(A?b.find(ge=>ge===P):P===S._f.ref)return;oe(i,d,{_f:{...S._f,...A?{refs:[...b.filter(Wl),P,...Array.isArray(R(o,d))?[{}]:[]],ref:{type:P.type,name:d}}:{ref:P}}}),N(d,!1,void 0,P)}else S=R(i,d,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||v.shouldUnregister)&&!(f1(u.array,d)&&s.action)&&u.unMount.add(d)}}},yn=()=>n.shouldFocusError&&oo(i,V,u.mount),_t=d=>{qt(d)&&(h.state.next({disabled:d}),oo(i,v=>{v.disabled=d},0,!1))},qu=(d,v)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let F=Lt(l);if(h.state.next({isSubmitting:!0}),n.resolver){const{errors:D,values:P}=await K();r.errors=D,F=P}else await ue(i);ze(r.errors,"root"),ot(r.errors)?(h.state.next({errors:{}}),await d(F,S)):(v&&await v({...r.errors},S),yn(),setTimeout(yn)),h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Tp=(d,v={})=>{R(i,d)&&(pe(v.defaultValue)?z(d,R(o,d)):(z(d,v.defaultValue),oe(o,d,v.defaultValue)),v.keepTouched||ze(r.touchedFields,d),v.keepDirty||(ze(r.dirtyFields,d),r.isDirty=v.defaultValue?W(d,R(o,d)):W()),v.keepError||(ze(r.errors,d),m.isValid&&a()),h.state.next({...r}))},Ju=(d,v={})=>{const S=d?Lt(d):o,F=Lt(S),D=d&&!ot(d)?F:o;if(v.keepDefaultValues||(o=S),!v.keepValues){if(v.keepDirtyValues||w)for(const P of u.mount)R(r.dirtyFields,P)?oe(D,P,R(l,P)):z(P,R(D,P));else{if(Gu&&pe(d))for(const P of u.mount){const A=R(i,P);if(A&&A._f){const b=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(Io(b)){const ge=b.closest("form");if(ge){ge.reset();break}}}}i={}}l=e.shouldUnregister?v.keepDefaultValues?Lt(o):{}:Lt(D),h.array.next({values:{...D}}),h.values.next({values:{...D}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!m.isValid||!!v.keepIsValid,s.watch=!!e.shouldUnregister,h.state.next({submitCount:v.keepSubmitCount?r.submitCount:0,isDirty:v.keepDirty?r.isDirty:!!(v.keepDefaultValues&&!_n(d,o)),isSubmitted:v.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:v.keepDirtyValues?r.dirtyFields:v.keepDefaultValues&&d?Hl(o,d):{},touchedFields:v.keepTouched?r.touchedFields:{},errors:v.keepErrors?r.errors:{},isSubmitSuccessful:v.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},bu=(d,v)=>Ju(en(d)?d(l):d,v);return{control:{register:gn,unregister:Qe,getFieldState:pt,handleSubmit:qu,setError:it,_executeSchema:K,_getWatch:J,_getDirty:W,_updateValid:a,_removeUnmounted:Q,_updateFieldArray:x,_updateDisabledField:Et,_getFieldArray:ke,_reset:Ju,_resetDefaultValues:()=>en(n.defaultValues)&&n.defaultValues().then(d=>{bu(d,n.resetOptions),h.state.next({isLoading:!1})}),_updateFormState:d=>{r={...r,...d}},_disableForm:_t,_subjects:h,_proxyFormState:m,get _fields(){return i},get _formValues(){return l},get _state(){return s},set _state(d){s=d},get _defaultValues(){return o},get _names(){return u},set _names(d){u=d},get _formState(){return r},set _formState(d){r=d},get _options(){return n},set _options(d){n={...n,...d}}},trigger:Y,register:gn,handleSubmit:qu,watch:He,setValue:z,getValues:ie,reset:bu,resetField:Tp,clearErrors:We,unregister:Qe,setError:it,setFocus:(d,v={})=>{const S=R(i,d),F=S&&S._f;if(F){const D=F.refs?F.refs[0]:F.ref;D.focus&&(D.focus(),v.shouldSelect&&D.select())}},getFieldState:pt}}function P1(e={}){const t=le.useRef(),n=le.useRef(),[r,i]=le.useState({isDirty:!1,isValidating:!1,isLoading:en(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:en(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...N1(e,()=>i(l=>({...l}))),formState:r});const o=t.current.control;return o._options=e,m1({subject:o._subjects.state,next:l=>{h1(l,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),le.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),le.useEffect(()=>{if(o._proxyFormState.isDirty){const l=o._getDirty();l!==r.isDirty&&o._subjects.state.next({isDirty:l})}},[o,r.isDirty]),le.useEffect(()=>{e.values&&!_n(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),le.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=p1(r,o),t.current}const j1=()=>{const{register:e,handleSubmit:t,reset:n,formState:{errors:r}}=P1({defaultValues:{name:"",email:"",phone:"",message:""}}),i=o=>(console.log(o),n());return g.jsx(oy,{shouldForwardProp:o=>o!=="error",children:g.jsxs(o1,{onSubmit:t(i),children:[g.jsxs(Ui,{children:["* Full name:",g.jsx(Ml,{type:"text",placeholder:"John Rosie",error:r.name,...e("name",{required:!0})}),r.name&&g.jsx(Vl,{children:"Wrong Fullname"})]}),g.jsxs(Ui,{children:["* E-mail:",g.jsx(Ml,{type:"email",placeholder:"johnrosie@gmail.com",error:r.email,...e("email",{required:!0})}),r.email&&g.jsx(Vl,{children:"Wrong Email"})]}),g.jsxs(Ui,{children:["* Phone:",g.jsx(Ml,{type:"number",placeholder:"380961234567",error:r.phone,...e("phone",{required:!0})}),r.phone&&g.jsx(Vl,{children:"Wrong Phone"})]}),g.jsxs(Ui,{children:["Message:",g.jsx(l1,{placeholder:"My message....",...e("message",{required:!1})})]}),g.jsxs(s1,{type:"submit",children:["Send",g.jsx("span",{children:g.jsx(me,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})})},z1=()=>g.jsxs(e1,{children:[g.jsx(t1,{children:"Contact us"}),g.jsxs(n1,{children:[g.jsx(u1,{}),g.jsx(j1,{})]})]}),D1=()=>g.jsxs(Gy,{children:[g.jsx(y0,{}),g.jsx(o0,{}),g.jsx(S0,{}),g.jsx(M0,{}),g.jsx(b0,{}),g.jsx(z1,{})]}),T1=()=>g.jsx("footer",{}),L1=()=>g.jsxs(g.Fragment,{children:[g.jsx(Ky,{children:"Header"}),g.jsx(D1,{}),g.jsx(T1,{})]}),F1={main:"FiraSans-Regular",secondary:"Oswald-Regular"},R1={phone:"(min-width: 480px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)"},I1={main:"0px 8px 14px rgba(136, 198, 253, 0.19)",secondary:"7px 13px 14px rgba(116, 177, 232, 0.24)"},O1={xs:"10px",sm:"12px",md:"14px",ml:"16px",lg:"18px",xl:"20px",xxl:"28px",xxxl:"36px",big:"48px",huge:"64px",gigantic:"100px",mega:"164px"},A1="250ms cubic-bezier(0.4, 0, 0.2, 1)",M1={colors:{backgroundMain:"#F3F5FA",textMain:"#173D33"},fonts:F1,media:R1,boxShadow:I1,fontSizes:O1,transitionHover:A1},V1="/ecosolution/assets/FiraSans-Regular-GxcdJFZq.woff",U1="/ecosolution/assets/Oswald-Regular-7O1fX0n8.woff",B1=[{fontFamily:"FiraSans-Regular",fontUrl:`${V1}`},{fontFamily:"Oswald-Regular",fontUrl:`${U1}`}];function W1(){return sg(B1)?g.jsxs(cy,{theme:M1,children:[g.jsx(my,{}),g.jsx(L1,{})]}):g.jsx("div",{children:"Loading..."})}Kl.createRoot(document.getElementById("root")).render(g.jsx(le.StrictMode,{children:g.jsx(W1,{})}));
