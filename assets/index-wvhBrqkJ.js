(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Wc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hc={exports:{}},Bo={},Qc={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pi=Symbol.for("react.element"),Vp=Symbol.for("react.portal"),Bp=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Wp=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),Qp=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Yp=Symbol.for("react.memo"),Xp=Symbol.for("react.lazy"),ra=Symbol.iterator;function Zp(e){return e===null||typeof e!="object"?null:(e=ra&&e[ra]||e["@@iterator"],typeof e=="function"?e:null)}var Kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gc=Object.assign,Yc={};function vr(e,t,n){this.props=e,this.context=t,this.refs=Yc,this.updater=n||Kc}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xc(){}Xc.prototype=vr.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=Yc,this.updater=n||Kc}var Xs=Ys.prototype=new Xc;Xs.constructor=Ys;Gc(Xs,vr.prototype);Xs.isPureReactComponent=!0;var ia=Array.isArray,Zc=Object.prototype.hasOwnProperty,Zs={current:null},qc={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Zc.call(t,r)&&!qc.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:pi,type:e,key:o,ref:l,props:i,_owner:Zs.current}}function qp(e,t){return{$$typeof:pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===pi}function Jp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oa=/\/+/g;function cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jp(""+e.key):t.toString(36)}function Wi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pi:case Vp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+cl(l,0):r,ia(i)?(n="",e!=null&&(n=e.replace(oa,"$&/")+"/"),Wi(i,t,n,"",function(c){return c})):i!=null&&(qs(i)&&(i=qp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(oa,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ia(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+cl(o,s);l+=Wi(o,t,n,u,i)}else if(u=Zp(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+cl(o,s++),l+=Wi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Si(e,t,n){if(e==null)return e;var r=[],i=0;return Wi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function bp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},Hi={transition:null},eh={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:Zs};G.Children={map:Si,forEach:function(e,t,n){Si(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Si(e,function(){t++}),t},toArray:function(e){return Si(e,function(t){return t})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=vr;G.Fragment=Bp;G.Profiler=Wp;G.PureComponent=Ys;G.StrictMode=Up;G.Suspense=Gp;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eh;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Zs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Zc.call(t,u)&&!qc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:pi,type:e.type,key:i,ref:o,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Qp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hp,_context:e},e.Consumer=e};G.createElement=Jc;G.createFactory=function(e){var t=Jc.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Kp,render:e}};G.isValidElement=qs;G.lazy=function(e){return{$$typeof:Xp,_payload:{_status:-1,_result:e},_init:bp}};G.memo=function(e,t){return{$$typeof:Yp,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(e,t){return Be.current.useCallback(e,t)};G.useContext=function(e){return Be.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};G.useEffect=function(e,t){return Be.current.useEffect(e,t)};G.useId=function(){return Be.current.useId()};G.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Be.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};G.useRef=function(e){return Be.current.useRef(e)};G.useState=function(e){return Be.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Be.current.useTransition()};G.version="18.2.0";Qc.exports=G;var je=Qc.exports;const se=Wc(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th=je,nh=Symbol.for("react.element"),rh=Symbol.for("react.fragment"),ih=Object.prototype.hasOwnProperty,oh=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lh={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ih.call(t,r)&&!lh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:nh,type:e,key:o,ref:l,props:i,_owner:oh.current}}Bo.Fragment=rh;Bo.jsx=bc;Bo.jsxs=bc;Hc.exports=Bo;var h=Hc.exports,Gl={},ef={exports:{}},nt={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,A){var V=z.length;z.push(A);e:for(;0<V;){var Y=V-1>>>1,oe=z[Y];if(0<i(oe,A))z[Y]=A,z[V]=oe,V=Y;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var A=z[0],V=z.pop();if(V!==A){z[0]=V;e:for(var Y=0,oe=z.length,pt=oe>>>1;Y<pt;){var We=2*(Y+1)-1,it=z[We],He=We+1,Qe=z[He];if(0>i(it,V))He<oe&&0>i(Qe,it)?(z[Y]=Qe,z[He]=V,Y=He):(z[Y]=it,z[We]=V,Y=We);else if(He<oe&&0>i(Qe,V))z[Y]=Qe,z[He]=V,Y=He;else break e}}return A}function i(z,A){var V=z.sortIndex-A.sortIndex;return V!==0?V:z.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],y=1,g=null,m=3,w=!1,k=!1,C=!1,U=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,a=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=z)r(c),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(c)}}function x(z){if(C=!1,f(z),!k)if(n(u)!==null)k=!0,Ee(E);else{var A=n(c);A!==null&&_e(x,A.startTime-z)}}function E(z,A){k=!1,C&&(C=!1,p(L),L=-1),w=!0;var V=m;try{for(f(A),g=n(u);g!==null&&(!(g.expirationTime>A)||z&&!ae());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,m=g.priorityLevel;var oe=Y(g.expirationTime<=A);A=e.unstable_now(),typeof oe=="function"?g.callback=oe:g===n(u)&&r(u),f(A)}else r(u);g=n(u)}if(g!==null)var pt=!0;else{var We=n(c);We!==null&&_e(x,We.startTime-A),pt=!1}return pt}finally{g=null,m=V,w=!1}}var j=!1,_=null,L=-1,K=5,B=-1;function ae(){return!(e.unstable_now()-B<K)}function Q(){if(_!==null){var z=e.unstable_now();B=z;var A=!0;try{A=_(!0,z)}finally{A?W():(j=!1,_=null)}}else j=!1}var W;if(typeof a=="function")W=function(){a(Q)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,ke=b.port2;b.port1.onmessage=Q,W=function(){ke.postMessage(null)}}else W=function(){U(Q,0)};function Ee(z){_=z,j||(j=!0,W())}function _e(z,A){L=U(function(){z(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,Ee(E))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var V=m;m=A;try{return z()}finally{m=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,A){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=m;m=z;try{return A()}finally{m=V}},e.unstable_scheduleCallback=function(z,A,V){var Y=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,z){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,z={id:y++,callback:A,priorityLevel:z,startTime:V,expirationTime:oe,sortIndex:-1},V>Y?(z.sortIndex=V,t(c,z),n(u)===null&&z===n(c)&&(C?(p(L),L=-1):C=!0,_e(x,V-Y))):(z.sortIndex=oe,t(u,z),k||w||(k=!0,Ee(E))),z},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(z){var A=m;return function(){var V=m;m=A;try{return z.apply(this,arguments)}finally{m=V}}}})(nf);tf.exports=nf;var sh=tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=je,tt=sh;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var of=new Set,Gr={};function Rn(e,t){sr(e,t),sr(e+"Capture",t)}function sr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)of.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,uh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},sa={};function ah(e){return Yl.call(sa,e)?!0:Yl.call(la,e)?!1:uh.test(e)?sa[e]=!0:(la[e]=!0,!1)}function ch(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fh(e,t,n,r){if(t===null||typeof t>"u"||ch(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,bs);Le[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,bs);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,bs);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function eu(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fh(t,n,i,r)&&(n=null),r||i===null?ah(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ki=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),tu=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),sf=Symbol.for("react.context"),nu=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),ru=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),uf=Symbol.for("react.offscreen"),ua=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,fl;function Tr(e){if(fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fl=t&&t[1]||""}return`
`+fl+e}var dl=!1;function pl(e,t){if(!e||dl)return"";dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tr(e):""}function dh(e){switch(e.tag){case 5:return Tr(e.type);case 16:return Tr("Lazy");case 13:return Tr("Suspense");case 19:return Tr("SuspenseList");case 0:case 2:case 15:return e=pl(e.type,!1),e;case 11:return e=pl(e.type.render,!1),e;case 1:return e=pl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Bn:return"Portal";case Xl:return"Profiler";case tu:return"StrictMode";case Zl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sf:return(e.displayName||"Context")+".Consumer";case lf:return(e._context.displayName||"Context")+".Provider";case nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ru:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function ph(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hh(e){var t=af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ei(e){e._valueTracker||(e._valueTracker=hh(e))}function cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=af(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function uo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=fn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ff(e,t){t=t.checked,t!=null&&eu(e,"checked",t,!1)}function es(e,t){ff(e,t);var n=fn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ts(e,t.type,n):t.hasOwnProperty("defaultValue")&&ts(e,t.type,fn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ts(e,t,n){(t!=="number"||uo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+fn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Lr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:fn(n)}}function df(e,t){var n=fn(t.value),r=fn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function da(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _i,hf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_i=_i||document.createElement("div"),_i.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_i.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mh=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){mh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function mf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function gf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gh=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function is(e,t){if(t){if(gh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function os(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ls=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,nr=null,rr=null;function pa(e){if(e=gi(e)){if(typeof ss!="function")throw Error($(280));var t=e.stateNode;t&&(t=Ko(t),ss(e.stateNode,e.type,t))}}function yf(e){nr?rr?rr.push(e):rr=[e]:nr=e}function vf(){if(nr){var e=nr,t=rr;if(rr=nr=null,pa(e),t)for(e=0;e<t.length;e++)pa(t[e])}}function xf(e,t){return e(t)}function wf(){}var hl=!1;function Sf(e,t,n){if(hl)return e(t,n);hl=!0;try{return xf(e,t,n)}finally{hl=!1,(nr!==null||rr!==null)&&(wf(),vf())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var us=!1;if(Vt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){us=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{us=!1}function yh(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(y){this.onError(y)}}var Ar=!1,ao=null,co=!1,as=null,vh={onError:function(e){Ar=!0,ao=e}};function xh(e,t,n,r,i,o,l,s,u){Ar=!1,ao=null,yh.apply(vh,arguments)}function wh(e,t,n,r,i,o,l,s,u){if(xh.apply(this,arguments),Ar){if(Ar){var c=ao;Ar=!1,ao=null}else throw Error($(198));co||(co=!0,as=c)}}function In(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(In(e)!==e)throw Error($(188))}function Sh(e){var t=e.alternate;if(!t){if(t=In(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ha(i),e;if(o===r)return ha(i),t;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Ef(e){return e=Sh(e),e!==null?_f(e):null}function _f(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_f(e);if(t!==null)return t;e=e.sibling}return null}var Cf=tt.unstable_scheduleCallback,ma=tt.unstable_cancelCallback,kh=tt.unstable_shouldYield,Eh=tt.unstable_requestPaint,me=tt.unstable_now,_h=tt.unstable_getCurrentPriorityLevel,ou=tt.unstable_ImmediatePriority,$f=tt.unstable_UserBlockingPriority,fo=tt.unstable_NormalPriority,Ch=tt.unstable_LowPriority,jf=tt.unstable_IdlePriority,Uo=null,zt=null;function $h(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Uo,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ph,jh=Math.log,Nh=Math.LN2;function Ph(e){return e>>>=0,e===0?32:31-(jh(e)/Nh|0)|0}var Ci=64,$i=4194304;function Fr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=Fr(s):(o&=l,o!==0&&(r=Fr(o)))}else l=n&~i,l!==0?r=Fr(l):o!==0&&(r=Fr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function zh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xt(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=zh(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nf(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Th(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function lu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zf,su,Df,Tf,Lf,fs=!1,ji=[],tn=null,nn=null,rn=null,Zr=new Map,qr=new Map,Xt=[],Lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function _r(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&su(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fh(e,t,n,r,i){switch(t){case"focusin":return tn=_r(tn,e,t,n,r,i),!0;case"dragenter":return nn=_r(nn,e,t,n,r,i),!0;case"mouseover":return rn=_r(rn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Zr.set(o,_r(Zr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,qr.set(o,_r(qr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ff(e){var t=wn(e.target);if(t!==null){var n=In(t);if(n!==null){if(t=n.tag,t===13){if(t=kf(n),t!==null){e.blockedOn=t,Lf(e.priority,function(){Df(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ls=r,n.target.dispatchEvent(r),ls=null}else return t=gi(n),t!==null&&su(t),e.blockedOn=n,!1;t.shift()}return!0}function ya(e,t,n){Qi(e)&&n.delete(t)}function Rh(){fs=!1,tn!==null&&Qi(tn)&&(tn=null),nn!==null&&Qi(nn)&&(nn=null),rn!==null&&Qi(rn)&&(rn=null),Zr.forEach(ya),qr.forEach(ya)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,fs||(fs=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Rh)))}function Jr(e){function t(i){return Cr(i,e)}if(0<ji.length){Cr(ji[0],e);for(var n=1;n<ji.length;n++){var r=ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tn!==null&&Cr(tn,e),nn!==null&&Cr(nn,e),rn!==null&&Cr(rn,e),Zr.forEach(t),qr.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)Ff(n),n.blockedOn===null&&Xt.shift()}var ir=Ht.ReactCurrentBatchConfig,ho=!0;function Ih(e,t,n,r){var i=J,o=ir.transition;ir.transition=null;try{J=1,uu(e,t,n,r)}finally{J=i,ir.transition=o}}function Oh(e,t,n,r){var i=J,o=ir.transition;ir.transition=null;try{J=4,uu(e,t,n,r)}finally{J=i,ir.transition=o}}function uu(e,t,n,r){if(ho){var i=ds(e,t,n,r);if(i===null)Cl(e,t,r,mo,n),ga(e,r);else if(Fh(i,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<Lh.indexOf(e)){for(;i!==null;){var o=gi(i);if(o!==null&&zf(o),o=ds(e,t,n,r),o===null&&Cl(e,t,r,mo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cl(e,t,r,null,n)}}var mo=null;function ds(e,t,n,r){if(mo=null,e=iu(r),e=wn(e),e!==null)if(t=In(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return mo=e,null}function Rf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_h()){case ou:return 1;case $f:return 4;case fo:case Ch:return 16;case jf:return 536870912;default:return 16}default:return 16}}var Jt=null,au=null,Ki=null;function If(){if(Ki)return Ki;var e,t=au,n=t.length,r,i="value"in Jt?Jt.value:Jt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ki=i.slice(e,1<r?1-r:void 0)}function Gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function va(){return!1}function rt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:va,this.isPropagationStopped=va,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=rt(xr),mi=de({},xr,{view:0,detail:0}),Ah=rt(mi),gl,yl,$r,Wo=de({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$r&&($r&&e.type==="mousemove"?(gl=e.screenX-$r.screenX,yl=e.screenY-$r.screenY):yl=gl=0,$r=e),gl)},movementY:function(e){return"movementY"in e?e.movementY:yl}}),xa=rt(Wo),Mh=de({},Wo,{dataTransfer:0}),Vh=rt(Mh),Bh=de({},mi,{relatedTarget:0}),vl=rt(Bh),Uh=de({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Wh=rt(Uh),Hh=de({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qh=rt(Hh),Kh=de({},xr,{data:0}),wa=rt(Kh),Gh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xh[e])?!!t[e]:!1}function fu(){return Zh}var qh=de({},mi,{key:function(e){if(e.key){var t=Gh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=rt(qh),bh=de({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sa=rt(bh),em=de({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),tm=rt(em),nm=de({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=rt(nm),im=de({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=rt(im),lm=[9,13,27,32],du=Vt&&"CompositionEvent"in window,Mr=null;Vt&&"documentMode"in document&&(Mr=document.documentMode);var sm=Vt&&"TextEvent"in window&&!Mr,Of=Vt&&(!du||Mr&&8<Mr&&11>=Mr),ka=" ",Ea=!1;function Af(e,t){switch(e){case"keyup":return lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function um(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(Ea=!0,ka);case"textInput":return e=t.data,e===ka&&Ea?null:e;default:return null}}function am(e,t){if(Wn)return e==="compositionend"||!du&&Af(e,t)?(e=If(),Ki=au=Jt=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Of&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function Vf(e,t,n,r){yf(r),t=go(t,"onChange"),0<t.length&&(n=new cu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,br=null;function fm(e){qf(e,0)}function Ho(e){var t=Kn(e);if(cf(t))return e}function dm(e,t){if(e==="change")return t}var Bf=!1;if(Vt){var xl;if(Vt){var wl="oninput"in document;if(!wl){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),wl=typeof Ca.oninput=="function"}xl=wl}else xl=!1;Bf=xl&&(!document.documentMode||9<document.documentMode)}function $a(){Vr&&(Vr.detachEvent("onpropertychange",Uf),br=Vr=null)}function Uf(e){if(e.propertyName==="value"&&Ho(br)){var t=[];Vf(t,br,e,iu(e)),Sf(fm,t)}}function pm(e,t,n){e==="focusin"?($a(),Vr=t,br=n,Vr.attachEvent("onpropertychange",Uf)):e==="focusout"&&$a()}function hm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ho(br)}function mm(e,t){if(e==="click")return Ho(t)}function gm(e,t){if(e==="input"||e==="change")return Ho(t)}function ym(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:ym;function ei(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yl.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function ja(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Na(e,t){var n=ja(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ja(n)}}function Wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hf(){for(var e=window,t=uo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=uo(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vm(e){var t=Hf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wf(n.ownerDocument.documentElement,n)){if(r!==null&&pu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Na(n,o);var l=Na(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xm=Vt&&"documentMode"in document&&11>=document.documentMode,Hn=null,ps=null,Br=null,hs=!1;function Pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hs||Hn==null||Hn!==uo(r)||(r=Hn,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ei(Br,r)||(Br=r,r=go(ps,"onSelect"),0<r.length&&(t=new cu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Hn)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},Sl={},Qf={};Vt&&(Qf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Qo(e){if(Sl[e])return Sl[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qf)return Sl[e]=t[n];return e}var Kf=Qo("animationend"),Gf=Qo("animationiteration"),Yf=Qo("animationstart"),Xf=Qo("transitionend"),Zf=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(e,t){Zf.set(e,t),Rn(t,[e])}for(var kl=0;kl<za.length;kl++){var El=za[kl],wm=El.toLowerCase(),Sm=El[0].toUpperCase()+El.slice(1);pn(wm,"on"+Sm)}pn(Kf,"onAnimationEnd");pn(Gf,"onAnimationIteration");pn(Yf,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Xf,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Da(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Da(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Da(i,s,c),o=u}}}if(co)throw e=as,co=!1,as=null,e}function ne(e,t){var n=t[xs];n===void 0&&(n=t[xs]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function _l(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[zi]){e[zi]=!0,of.forEach(function(n){n!=="selectionchange"&&(km.has(n)||_l(n,!1,e),_l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,_l("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(Rf(t)){case 1:var i=Ih;break;case 4:i=Oh;break;default:i=uu}n=i.bind(null,t,n,e),i=void 0,!us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Cl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=wn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Sf(function(){var c=o,y=iu(n),g=[];e:{var m=Zf.get(e);if(m!==void 0){var w=cu,k=e;switch(e){case"keypress":if(Gi(n)===0)break e;case"keydown":case"keyup":w=Jh;break;case"focusin":k="focus",w=vl;break;case"focusout":k="blur",w=vl;break;case"beforeblur":case"afterblur":w=vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=tm;break;case Kf:case Gf:case Yf:w=Wh;break;case Xf:w=rm;break;case"scroll":w=Ah;break;case"wheel":w=om;break;case"copy":case"cut":case"paste":w=Qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Sa}var C=(t&4)!==0,U=!C&&e==="scroll",p=C?m!==null?m+"Capture":null:m;C=[];for(var a=c,f;a!==null;){f=a;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Xr(a,p),x!=null&&C.push(ni(a,x,f)))),U)break;a=a.return}0<C.length&&(m=new w(m,k,null,n,y),g.push({event:m,listeners:C}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==ls&&(k=n.relatedTarget||n.fromElement)&&(wn(k)||k[Bt]))break e;if((w||m)&&(m=y.window===y?y:(m=y.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?wn(k):null,k!==null&&(U=In(k),k!==U||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(C=xa,x="onMouseLeave",p="onMouseEnter",a="mouse",(e==="pointerout"||e==="pointerover")&&(C=Sa,x="onPointerLeave",p="onPointerEnter",a="pointer"),U=w==null?m:Kn(w),f=k==null?m:Kn(k),m=new C(x,a+"leave",w,n,y),m.target=U,m.relatedTarget=f,x=null,wn(y)===c&&(C=new C(p,a+"enter",k,n,y),C.target=f,C.relatedTarget=U,x=C),U=x,w&&k)t:{for(C=w,p=k,a=0,f=C;f;f=An(f))a++;for(f=0,x=p;x;x=An(x))f++;for(;0<a-f;)C=An(C),a--;for(;0<f-a;)p=An(p),f--;for(;a--;){if(C===p||p!==null&&C===p.alternate)break t;C=An(C),p=An(p)}C=null}else C=null;w!==null&&Ta(g,m,w,C,!1),k!==null&&U!==null&&Ta(g,U,k,C,!0)}}e:{if(m=c?Kn(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var E=dm;else if(_a(m))if(Bf)E=gm;else{E=hm;var j=pm}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=mm);if(E&&(E=E(e,c))){Vf(g,E,n,y);break e}j&&j(e,m,c),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ts(m,"number",m.value)}switch(j=c?Kn(c):window,e){case"focusin":(_a(j)||j.contentEditable==="true")&&(Hn=j,ps=c,Br=null);break;case"focusout":Br=ps=Hn=null;break;case"mousedown":hs=!0;break;case"contextmenu":case"mouseup":case"dragend":hs=!1,Pa(g,n,y);break;case"selectionchange":if(xm)break;case"keydown":case"keyup":Pa(g,n,y)}var _;if(du)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Wn?Af(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Of&&n.locale!=="ko"&&(Wn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Wn&&(_=If()):(Jt=y,au="value"in Jt?Jt.value:Jt.textContent,Wn=!0)),j=go(c,L),0<j.length&&(L=new wa(L,e,null,n,y),g.push({event:L,listeners:j}),_?L.data=_:(_=Mf(n),_!==null&&(L.data=_)))),(_=sm?um(e,n):am(e,n))&&(c=go(c,"onBeforeInput"),0<c.length&&(y=new wa("onBeforeInput","beforeinput",null,n,y),g.push({event:y,listeners:c}),y.data=_))}qf(g,t)})}function ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xr(e,n),o!=null&&r.unshift(ni(e,o,i)),o=Xr(e,t),o!=null&&r.push(ni(e,o,i))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=Xr(n,o),u!=null&&l.unshift(ni(n,u,s))):i||(u=Xr(n,o),u!=null&&l.push(ni(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Em=/\r\n?/g,_m=/\u0000|\uFFFD/g;function La(e){return(typeof e=="string"?e:""+e).replace(Em,`
`).replace(_m,"")}function Di(e,t,n){if(t=La(t),La(e)!==t&&n)throw Error($(425))}function yo(){}var ms=null,gs=null;function ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vs=typeof setTimeout=="function"?setTimeout:void 0,Cm=typeof clearTimeout=="function"?clearTimeout:void 0,Fa=typeof Promise=="function"?Promise:void 0,$m=typeof queueMicrotask=="function"?queueMicrotask:typeof Fa<"u"?function(e){return Fa.resolve(null).then(e).catch(jm)}:vs;function jm(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jr(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ra(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+wr,ri="__reactProps$"+wr,Bt="__reactContainer$"+wr,xs="__reactEvents$"+wr,Nm="__reactListeners$"+wr,Pm="__reactHandles$"+wr;function wn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ra(e);e!==null;){if(n=e[Nt])return n;e=Ra(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[Nt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Ko(e){return e[ri]||null}var ws=[],Gn=-1;function hn(e){return{current:e}}function ie(e){0>Gn||(e.current=ws[Gn],ws[Gn]=null,Gn--)}function te(e,t){Gn++,ws[Gn]=e.current,e.current=t}var dn={},Oe=hn(dn),Ye=hn(!1),Nn=dn;function ur(e,t){var n=e.type.contextTypes;if(!n)return dn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function vo(){ie(Ye),ie(Oe)}function Ia(e,t,n){if(Oe.current!==dn)throw Error($(168));te(Oe,t),te(Ye,n)}function bf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,ph(e)||"Unknown",i));return de({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Nn=Oe.current,te(Oe,e),te(Ye,Ye.current),!0}function Oa(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=bf(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,ie(Ye),ie(Oe),te(Oe,e)):ie(Ye),te(Ye,n)}var It=null,Go=!1,jl=!1;function ed(e){It===null?It=[e]:It.push(e)}function zm(e){Go=!0,ed(e)}function mn(){if(!jl&&It!==null){jl=!0;var e=0,t=J;try{var n=It;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Go=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Cf(ou,mn),i}finally{J=t,jl=!1}}return null}var Yn=[],Xn=0,wo=null,So=0,lt=[],st=0,Pn=null,Ot=1,At="";function vn(e,t){Yn[Xn++]=So,Yn[Xn++]=wo,wo=e,So=t}function td(e,t,n){lt[st++]=Ot,lt[st++]=At,lt[st++]=Pn,Pn=e;var r=Ot;e=At;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ot=1<<32-xt(t)+i|n<<i|r,At=o+e}else Ot=1<<o|n<<i|r,At=e}function hu(e){e.return!==null&&(vn(e,1),td(e,1,0))}function mu(e){for(;e===wo;)wo=Yn[--Xn],Yn[Xn]=null,So=Yn[--Xn],Yn[Xn]=null;for(;e===Pn;)Pn=lt[--st],lt[st]=null,At=lt[--st],lt[st]=null,Ot=lt[--st],lt[st]=null}var et=null,be=null,ue=!1,yt=null;function nd(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,be=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:Ot,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,be=null,!0):!1;default:return!1}}function Ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ks(e){if(ue){var t=be;if(t){var n=t;if(!Aa(e,t)){if(Ss(e))throw Error($(418));t=on(n.nextSibling);var r=et;t&&Aa(e,t)?nd(r,n):(e.flags=e.flags&-4097|2,ue=!1,et=e)}}else{if(Ss(e))throw Error($(418));e.flags=e.flags&-4097|2,ue=!1,et=e}}}function Ma(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Ti(e){if(e!==et)return!1;if(!ue)return Ma(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ys(e.type,e.memoizedProps)),t&&(t=be)){if(Ss(e))throw rd(),Error($(418));for(;t;)nd(e,t),t=on(t.nextSibling)}if(Ma(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){be=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}be=null}}else be=et?on(e.stateNode.nextSibling):null;return!0}function rd(){for(var e=be;e;)e=on(e.nextSibling)}function ar(){be=et=null,ue=!1}function gu(e){yt===null?yt=[e]:yt.push(e)}var Dm=Ht.ReactCurrentBatchConfig;function mt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ko=hn(null),Eo=null,Zn=null,yu=null;function vu(){yu=Zn=Eo=null}function xu(e){var t=ko.current;ie(ko),e._currentValue=t}function Es(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Eo=e,yu=Zn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(yu!==e)if(e={context:e,memoizedValue:t,next:null},Zn===null){if(Eo===null)throw Error($(308));Zn=e,Eo.dependencies={lanes:0,firstContext:e}}else Zn=Zn.next=e;return t}var Sn=null;function wu(e){Sn===null?Sn=[e]:Sn.push(e)}function id(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ut(e,n)}return i=r.interleaved,i===null?(t.next=t,wu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ut(e,n)}function Yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lu(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _o(e,t,n,r){var i=e.updateQueue;Yt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==l&&(s===null?y.firstBaseUpdate=c:s.next=c,y.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;l=0,y=c=u=null,s=o;do{var m=s.lane,w=s.eventTime;if((r&m)===m){y!==null&&(y=y.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,C=s;switch(m=t,w=n,C.tag){case 1:if(k=C.payload,typeof k=="function"){g=k.call(w,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=C.payload,m=typeof k=="function"?k.call(w,g,m):k,m==null)break e;g=de({},g,m);break e;case 2:Yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(c=y=w,u=g):y=y.next=w,l|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(y===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=y,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Dn|=l,e.lanes=l,e.memoizedState=g}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ld=new rf.Component().refs;function _s(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=un(e),o=Mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(wt(t,e,i,r),Yi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ve(),i=un(e),o=Mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ln(e,o,i),t!==null&&(wt(t,e,i,r),Yi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ve(),r=un(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=ln(e,i,r),t!==null&&(wt(t,e,r,n),Yi(t,e,r))}};function Ua(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,o):!0}function sd(e,t,n){var r=!1,i=dn,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=Xe(t)?Nn:Oe.current,r=t.contextTypes,o=(r=r!=null)?ur(e,i):dn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Wa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function Cs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ld,Su(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=Xe(t)?Nn:Oe.current,i.context=ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_s(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Yo.enqueueReplaceState(i,i.state,null),_o(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;s===ld&&(s=i.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Li(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ha(e){var t=e._init;return t(e._payload)}function ud(e){function t(p,a){if(e){var f=p.deletions;f===null?(p.deletions=[a],p.flags|=16):f.push(a)}}function n(p,a){if(!e)return null;for(;a!==null;)t(p,a),a=a.sibling;return null}function r(p,a){for(p=new Map;a!==null;)a.key!==null?p.set(a.key,a):p.set(a.index,a),a=a.sibling;return p}function i(p,a){return p=an(p,a),p.index=0,p.sibling=null,p}function o(p,a,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<a?(p.flags|=2,a):f):(p.flags|=2,a)):(p.flags|=1048576,a)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,a,f,x){return a===null||a.tag!==6?(a=Fl(f,p.mode,x),a.return=p,a):(a=i(a,f),a.return=p,a)}function u(p,a,f,x){var E=f.type;return E===Un?y(p,a,f.props.children,x,f.key):a!==null&&(a.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&Ha(E)===a.type)?(x=i(a,f.props),x.ref=jr(p,a,f),x.return=p,x):(x=eo(f.type,f.key,f.props,null,p.mode,x),x.ref=jr(p,a,f),x.return=p,x)}function c(p,a,f,x){return a===null||a.tag!==4||a.stateNode.containerInfo!==f.containerInfo||a.stateNode.implementation!==f.implementation?(a=Rl(f,p.mode,x),a.return=p,a):(a=i(a,f.children||[]),a.return=p,a)}function y(p,a,f,x,E){return a===null||a.tag!==7?(a=$n(f,p.mode,x,E),a.return=p,a):(a=i(a,f),a.return=p,a)}function g(p,a,f){if(typeof a=="string"&&a!==""||typeof a=="number")return a=Fl(""+a,p.mode,f),a.return=p,a;if(typeof a=="object"&&a!==null){switch(a.$$typeof){case ki:return f=eo(a.type,a.key,a.props,null,p.mode,f),f.ref=jr(p,null,a),f.return=p,f;case Bn:return a=Rl(a,p.mode,f),a.return=p,a;case Gt:var x=a._init;return g(p,x(a._payload),f)}if(Lr(a)||kr(a))return a=$n(a,p.mode,f,null),a.return=p,a;Li(p,a)}return null}function m(p,a,f,x){var E=a!==null?a.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(p,a,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ki:return f.key===E?u(p,a,f,x):null;case Bn:return f.key===E?c(p,a,f,x):null;case Gt:return E=f._init,m(p,a,E(f._payload),x)}if(Lr(f)||kr(f))return E!==null?null:y(p,a,f,x,null);Li(p,f)}return null}function w(p,a,f,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(a,p,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ki:return p=p.get(x.key===null?f:x.key)||null,u(a,p,x,E);case Bn:return p=p.get(x.key===null?f:x.key)||null,c(a,p,x,E);case Gt:var j=x._init;return w(p,a,f,j(x._payload),E)}if(Lr(x)||kr(x))return p=p.get(f)||null,y(a,p,x,E,null);Li(a,x)}return null}function k(p,a,f,x){for(var E=null,j=null,_=a,L=a=0,K=null;_!==null&&L<f.length;L++){_.index>L?(K=_,_=null):K=_.sibling;var B=m(p,_,f[L],x);if(B===null){_===null&&(_=K);break}e&&_&&B.alternate===null&&t(p,_),a=o(B,a,L),j===null?E=B:j.sibling=B,j=B,_=K}if(L===f.length)return n(p,_),ue&&vn(p,L),E;if(_===null){for(;L<f.length;L++)_=g(p,f[L],x),_!==null&&(a=o(_,a,L),j===null?E=_:j.sibling=_,j=_);return ue&&vn(p,L),E}for(_=r(p,_);L<f.length;L++)K=w(_,p,L,f[L],x),K!==null&&(e&&K.alternate!==null&&_.delete(K.key===null?L:K.key),a=o(K,a,L),j===null?E=K:j.sibling=K,j=K);return e&&_.forEach(function(ae){return t(p,ae)}),ue&&vn(p,L),E}function C(p,a,f,x){var E=kr(f);if(typeof E!="function")throw Error($(150));if(f=E.call(f),f==null)throw Error($(151));for(var j=E=null,_=a,L=a=0,K=null,B=f.next();_!==null&&!B.done;L++,B=f.next()){_.index>L?(K=_,_=null):K=_.sibling;var ae=m(p,_,B.value,x);if(ae===null){_===null&&(_=K);break}e&&_&&ae.alternate===null&&t(p,_),a=o(ae,a,L),j===null?E=ae:j.sibling=ae,j=ae,_=K}if(B.done)return n(p,_),ue&&vn(p,L),E;if(_===null){for(;!B.done;L++,B=f.next())B=g(p,B.value,x),B!==null&&(a=o(B,a,L),j===null?E=B:j.sibling=B,j=B);return ue&&vn(p,L),E}for(_=r(p,_);!B.done;L++,B=f.next())B=w(_,p,L,B.value,x),B!==null&&(e&&B.alternate!==null&&_.delete(B.key===null?L:B.key),a=o(B,a,L),j===null?E=B:j.sibling=B,j=B);return e&&_.forEach(function(Q){return t(p,Q)}),ue&&vn(p,L),E}function U(p,a,f,x){if(typeof f=="object"&&f!==null&&f.type===Un&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ki:e:{for(var E=f.key,j=a;j!==null;){if(j.key===E){if(E=f.type,E===Un){if(j.tag===7){n(p,j.sibling),a=i(j,f.props.children),a.return=p,p=a;break e}}else if(j.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Gt&&Ha(E)===j.type){n(p,j.sibling),a=i(j,f.props),a.ref=jr(p,j,f),a.return=p,p=a;break e}n(p,j);break}else t(p,j);j=j.sibling}f.type===Un?(a=$n(f.props.children,p.mode,x,f.key),a.return=p,p=a):(x=eo(f.type,f.key,f.props,null,p.mode,x),x.ref=jr(p,a,f),x.return=p,p=x)}return l(p);case Bn:e:{for(j=f.key;a!==null;){if(a.key===j)if(a.tag===4&&a.stateNode.containerInfo===f.containerInfo&&a.stateNode.implementation===f.implementation){n(p,a.sibling),a=i(a,f.children||[]),a.return=p,p=a;break e}else{n(p,a);break}else t(p,a);a=a.sibling}a=Rl(f,p.mode,x),a.return=p,p=a}return l(p);case Gt:return j=f._init,U(p,a,j(f._payload),x)}if(Lr(f))return k(p,a,f,x);if(kr(f))return C(p,a,f,x);Li(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,a!==null&&a.tag===6?(n(p,a.sibling),a=i(a,f),a.return=p,p=a):(n(p,a),a=Fl(f,p.mode,x),a.return=p,p=a),l(p)):n(p,a)}return U}var cr=ud(!0),ad=ud(!1),yi={},Dt=hn(yi),ii=hn(yi),oi=hn(yi);function kn(e){if(e===yi)throw Error($(174));return e}function ku(e,t){switch(te(oi,t),te(ii,e),te(Dt,yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rs(t,e)}ie(Dt),te(Dt,t)}function fr(){ie(Dt),ie(ii),ie(oi)}function cd(e){kn(oi.current);var t=kn(Dt.current),n=rs(t,e.type);t!==n&&(te(ii,e),te(Dt,n))}function Eu(e){ii.current===e&&(ie(Dt),ie(ii))}var ce=hn(0);function Co(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Nl=[];function _u(){for(var e=0;e<Nl.length;e++)Nl[e]._workInProgressVersionPrimary=null;Nl.length=0}var Xi=Ht.ReactCurrentDispatcher,Pl=Ht.ReactCurrentBatchConfig,zn=0,fe=null,xe=null,Ce=null,$o=!1,Ur=!1,li=0,Tm=0;function Fe(){throw Error($(321))}function Cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function $u(e,t,n,r,i,o){if(zn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?Im:Om,e=n(r,i),Ur){o=0;do{if(Ur=!1,li=0,25<=o)throw Error($(301));o+=1,Ce=xe=null,t.updateQueue=null,Xi.current=Am,e=n(r,i)}while(Ur)}if(Xi.current=jo,t=xe!==null&&xe.next!==null,zn=0,Ce=xe=fe=null,$o=!1,t)throw Error($(300));return e}function ju(){var e=li!==0;return li=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?fe.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function ft(){if(xe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ce===null?fe.memoizedState:Ce.next;if(t!==null)Ce=t,xe=e;else{if(e===null)throw Error($(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ce===null?fe.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function si(e,t){return typeof t=="function"?t(e):t}function zl(e){var t=ft(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=xe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var y=c.lane;if((zn&y)===y)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:y,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,fe.lanes|=y,Dn|=y}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,kt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dl(e){var t=ft(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);kt(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function fd(){}function dd(e,t){var n=fe,r=ft(),i=t(),o=!kt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,Nu(md.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,ui(9,hd.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error($(349));zn&30||pd(n,t,i)}return i}function pd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hd(e,t,n,r){t.value=n,t.getSnapshot=r,gd(t)&&yd(e)}function md(e,t,n){return n(function(){gd(t)&&yd(e)})}function gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function yd(e){var t=Ut(e,1);t!==null&&wt(t,e,1,-1)}function Qa(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},t.queue=e,e=e.dispatch=Rm.bind(null,fe,e),[t.memoizedState,e]}function ui(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vd(){return ft().memoizedState}function Zi(e,t,n,r){var i=$t();fe.flags|=e,i.memoizedState=ui(1|t,n,void 0,r===void 0?null:r)}function Xo(e,t,n,r){var i=ft();r=r===void 0?null:r;var o=void 0;if(xe!==null){var l=xe.memoizedState;if(o=l.destroy,r!==null&&Cu(r,l.deps)){i.memoizedState=ui(t,n,o,r);return}}fe.flags|=e,i.memoizedState=ui(1|t,n,o,r)}function Ka(e,t){return Zi(8390656,8,e,t)}function Nu(e,t){return Xo(2048,8,e,t)}function xd(e,t){return Xo(4,2,e,t)}function wd(e,t){return Xo(4,4,e,t)}function Sd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kd(e,t,n){return n=n!=null?n.concat([e]):null,Xo(4,4,Sd.bind(null,t,e),n)}function Pu(){}function Ed(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _d(e,t){var n=ft();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cd(e,t,n){return zn&21?(kt(n,t)||(n=Nf(),fe.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function Lm(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Pl.transition;Pl.transition={};try{e(!1),t()}finally{J=n,Pl.transition=r}}function $d(){return ft().memoizedState}function Fm(e,t,n){var r=un(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jd(e))Nd(t,n);else if(n=id(e,t,n,r),n!==null){var i=Ve();wt(n,e,r,i),Pd(n,t,r)}}function Rm(e,t,n){var r=un(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jd(e))Nd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,kt(s,l)){var u=t.interleaved;u===null?(i.next=i,wu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=id(e,t,i,r),n!==null&&(i=Ve(),wt(n,e,r,i),Pd(n,t,r))}}function jd(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Nd(e,t){Ur=$o=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lu(e,n)}}var jo={readContext:ct,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Im={readContext:ct,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4194308,4,Sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fm.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Qa,useDebugValue:Pu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Qa(!1),t=e[0];return e=Lm.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=$t();if(ue){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Pe===null)throw Error($(349));zn&30||pd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ka(md.bind(null,r,o,e),[e]),r.flags|=2048,ui(9,hd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Pe.identifierPrefix;if(ue){var n=At,r=Ot;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Om={readContext:ct,useCallback:Ed,useContext:ct,useEffect:Nu,useImperativeHandle:kd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:_d,useReducer:zl,useRef:vd,useState:function(){return zl(si)},useDebugValue:Pu,useDeferredValue:function(e){var t=ft();return Cd(t,xe.memoizedState,e)},useTransition:function(){var e=zl(si)[0],t=ft().memoizedState;return[e,t]},useMutableSource:fd,useSyncExternalStore:dd,useId:$d,unstable_isNewReconciler:!1},Am={readContext:ct,useCallback:Ed,useContext:ct,useEffect:Nu,useImperativeHandle:kd,useInsertionEffect:xd,useLayoutEffect:wd,useMemo:_d,useReducer:Dl,useRef:vd,useState:function(){return Dl(si)},useDebugValue:Pu,useDeferredValue:function(e){var t=ft();return xe===null?t.memoizedState=e:Cd(t,xe.memoizedState,e)},useTransition:function(){var e=Dl(si)[0],t=ft().memoizedState;return[e,t]},useMutableSource:fd,useSyncExternalStore:dd,useId:$d,unstable_isNewReconciler:!1};function dr(e,t){try{var n="",r=t;do n+=dh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Tl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $s(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mm=typeof WeakMap=="function"?WeakMap:Map;function zd(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Is=r),$s(e,t)},n}function Dd(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$s(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){$s(e,t),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ga(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bm.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,ln(n,t,1))),n.lanes|=1),e)}var Vm=Ht.ReactCurrentOwner,Ge=!1;function Ae(e,t,n,r){t.child=e===null?ad(t,null,n,r):cr(t,e.child,n,r)}function Za(e,t,n,r,i){n=n.render;var o=t.ref;return or(t,i),r=$u(e,t,n,r,o,i),n=ju(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ue&&n&&hu(t),t.flags|=1,Ae(e,t,r,i),t.child)}function qa(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Td(e,t,o,r,i)):(e=eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ei,n(l,r)&&e.ref===t.ref)return Wt(e,t,i)}return t.flags|=1,e=an(o,r),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ei(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Wt(e,t,i)}return js(e,t,n,r,i)}function Ld(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Jn,Je),Je|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Jn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Jn,Je),Je|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Jn,Je),Je|=r;return Ae(e,t,i,n),t.child}function Fd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function js(e,t,n,r,i){var o=Xe(n)?Nn:Oe.current;return o=ur(t,o),or(t,i),n=$u(e,t,n,r,o,i),r=ju(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Wt(e,t,i)):(ue&&r&&hu(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Ja(e,t,n,r,i){if(Xe(n)){var o=!0;xo(t)}else o=!1;if(or(t,i),t.stateNode===null)qi(e,t),sd(t,n,r),Cs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ct(c):(c=Xe(n)?Nn:Oe.current,c=ur(t,c));var y=n.getDerivedStateFromProps,g=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Wa(t,l,r,c),Yt=!1;var m=t.memoizedState;l.state=m,_o(t,r,l,i),u=t.memoizedState,s!==r||m!==u||Ye.current||Yt?(typeof y=="function"&&(_s(t,n,y,r),u=t.memoizedState),(s=Yt||Ua(t,n,s,r,m,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,od(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:mt(t.type,s),l.props=c,g=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=ct(u):(u=Xe(n)?Nn:Oe.current,u=ur(t,u));var w=n.getDerivedStateFromProps;(y=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Wa(t,l,r,u),Yt=!1,m=t.memoizedState,l.state=m,_o(t,r,l,i);var k=t.memoizedState;s!==g||m!==k||Ye.current||Yt?(typeof w=="function"&&(_s(t,n,w,r),k=t.memoizedState),(c=Yt||Ua(t,n,c,r,m,k,u)||!1)?(y||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ns(e,t,n,r,o,i)}function Ns(e,t,n,r,i,o){Fd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Oa(t,n,!1),Wt(e,t,o);r=t.stateNode,Vm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,s,o)):Ae(e,t,s,o),t.memoizedState=r.state,i&&Oa(t,n,!0),t.child}function Rd(e){var t=e.stateNode;t.pendingContext?Ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ia(e,t.context,!1),ku(e,t.containerInfo)}function ba(e,t,n,r,i){return ar(),gu(i),t.flags|=256,Ae(e,t,n,r),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Id(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ce,i&1),e===null)return ks(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Jo(l,r,0,null),e=$n(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zs(n),t.memoizedState=Ps,e):zu(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Bm(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=an(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=an(s,o):(o=$n(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?zs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ps,r}return o=e.child,e=o.sibling,r=an(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zu(e,t){return t=Jo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&gu(r),cr(t,e.child,null,n),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Tl(Error($(422))),Fi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Jo({mode:"visible",children:r.children},i,0,null),o=$n(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=zs(l),t.memoizedState=Ps,o);if(!(t.mode&1))return Fi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error($(419)),r=Tl(o,r,void 0),Fi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ge||s){if(r=Pe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ut(e,i),wt(r,e,i,-1))}return Iu(),r=Tl(Error($(421))),Fi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=eg.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,be=on(i.nextSibling),et=t,ue=!0,yt=null,e!==null&&(lt[st++]=Ot,lt[st++]=At,lt[st++]=Pn,Ot=e.id,At=e.overflow,Pn=t),t=zu(t,r.children),t.flags|=4096,t)}function ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Es(e.return,t,n)}function Ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Od(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,n,t);else if(e.tag===19)ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Co(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Co(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ll(t,!0,n,null,o);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Um(e,t,n){switch(t.tag){case 3:Rd(t),ar();break;case 5:cd(t);break;case 1:Xe(t.type)&&xo(t);break;case 4:ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?Id(e,t,n):(te(ce,ce.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Od(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Ld(e,t,n)}return Wt(e,t,n)}var Ad,Ds,Md,Vd;Ad=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ds=function(){};Md=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,kn(Dt.current);var o=null;switch(n){case"input":i=bl(e,i),r=bl(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=ns(e,i),r=ns(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yo)}is(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ne("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wm(e,t,n){var r=t.pendingProps;switch(mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Xe(t.type)&&vo(),Re(t),null;case 3:return r=t.stateNode,fr(),ie(Ye),ie(Oe),_u(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ti(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Ms(yt),yt=null))),Ds(e,t),Re(t),null;case 5:Eu(t);var i=kn(oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Md(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return Re(t),null}if(e=kn(Dt.current),Ti(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Nt]=t,r[ri]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)ne(Rr[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":aa(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":fa(r,o),ne("invalid",r)}is(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Di(r.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ei(r),ca(r,o,!0);break;case"textarea":Ei(r),da(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=yo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Nt]=t,e[ri]=r,Ad(e,t,!1,!1),t.stateNode=e;e:{switch(l=os(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)ne(Rr[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":aa(e,r),i=bl(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),ne("invalid",e);break;case"textarea":fa(e,r),i=ns(e,r),ne("invalid",e);break;default:i=r}is(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?gf(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hf(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Yr(e,u):typeof u=="number"&&Yr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ne("scroll",e):u!=null&&eu(e,o,u,l))}switch(n){case"input":Ei(e),ca(e,r,!1);break;case"textarea":Ei(e),da(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Re(t),null;case 6:if(e&&t.stateNode!=null)Vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=kn(oi.current),kn(Dt.current),Ti(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(o=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:Di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Re(t),null;case 13:if(ie(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&be!==null&&t.mode&1&&!(t.flags&128))rd(),ar(),t.flags|=98560,o=!1;else if(o=Ti(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Nt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Re(t),o=!1}else yt!==null&&(Ms(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?we===0&&(we=3):Iu())),t.updateQueue!==null&&(t.flags|=4),Re(t),null);case 4:return fr(),Ds(e,t),e===null&&ti(t.stateNode.containerInfo),Re(t),null;case 10:return xu(t.type._context),Re(t),null;case 17:return Xe(t.type)&&vo(),Re(t),null;case 19:if(ie(ce),o=t.memoizedState,o===null)return Re(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Nr(o,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Co(e),l!==null){for(t.flags|=128,Nr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&me()>pr&&(t.flags|=128,r=!0,Nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Co(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ue)return Re(t),null}else 2*me()-o.renderingStartTime>pr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),t):(Re(t),null);case 22:case 23:return Ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Je&1073741824&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Hm(e,t){switch(mu(t),t.tag){case 1:return Xe(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),ie(Ye),ie(Oe),_u(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Eu(t),null;case 13:if(ie(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ce),null;case 4:return fr(),null;case 10:return xu(t.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var Ri=!1,Ie=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Ts(e,t,n){try{n()}catch(r){pe(e,t,r)}}var tc=!1;function Km(e,t){if(ms=ho,e=Hf(),pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,y=0,g=e,m=null;t:for(;;){for(var w;g!==n||i!==0&&g.nodeType!==3||(s=l+i),g!==o||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++c===i&&(s=l),m===o&&++y===r&&(u=l),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gs={focusedElem:e,selectionRange:n},ho=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var C=k.memoizedProps,U=k.memoizedState,p=t.stateNode,a=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:mt(t.type,C),U);p.__reactInternalSnapshotBeforeUpdate=a}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(x){pe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return k=tc,tc=!1,k}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ts(t,n,o)}i=i.next}while(i!==r)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ls(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[ri],delete t[xs],delete t[Nm],delete t[Pm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ud(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yo));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}var De=null,gt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Wd(e,t,n),n=n.sibling}function Wd(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Uo,n)}catch{}switch(n.tag){case 5:Ie||qn(n,t);case 6:var r=De,i=gt;De=null,Qt(e,t,n),De=r,gt=i,De!==null&&(gt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(gt?(e=De,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Jr(e)):$l(De,n.stateNode));break;case 4:r=De,i=gt,De=n.stateNode.containerInfo,gt=!0,Qt(e,t,n),De=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ts(n,t,l),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!Ie&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){pe(n,t,s)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Qt(e,t,n),Ie=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qm),t.forEach(function(r){var i=tg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:De=s.stateNode,gt=!1;break e;case 3:De=s.stateNode.containerInfo,gt=!0;break e;case 4:De=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(De===null)throw Error($(160));Wd(o,l,i),De=null,gt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){pe(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}function Hd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Ct(e),r&4){try{Wr(3,e,e.return),Zo(3,e)}catch(C){pe(e,e.return,C)}try{Wr(5,e,e.return)}catch(C){pe(e,e.return,C)}}break;case 1:ht(t,e),Ct(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(ht(t,e),Ct(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var i=e.stateNode;try{Yr(i,"")}catch(C){pe(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&ff(i,o),os(s,l);var c=os(s,o);for(l=0;l<u.length;l+=2){var y=u[l],g=u[l+1];y==="style"?gf(i,g):y==="dangerouslySetInnerHTML"?hf(i,g):y==="children"?Yr(i,g):eu(i,y,g,c)}switch(s){case"input":es(i,o);break;case"textarea":df(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?tr(i,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?tr(i,!!o.multiple,o.defaultValue,!0):tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ri]=o}catch(C){pe(e,e.return,C)}}break;case 6:if(ht(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){pe(e,e.return,C)}}break;case 3:if(ht(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(C){pe(e,e.return,C)}break;case 4:ht(t,e),Ct(e);break;case 13:ht(t,e),Ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=me())),r&4&&rc(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(c=Ie)||y,ht(t,e),Ie=c):ht(t,e),Ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(g=T=y;T!==null;){switch(m=T,w=m.child,m.tag){case 0:case 11:case 14:case 15:Wr(4,m,m.return);break;case 1:qn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(C){pe(r,n,C)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){oc(g);continue}}w!==null?(w.return=m,T=w):oc(g)}y=y.sibling}e:for(y=null,g=e;;){if(g.tag===5){if(y===null){y=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=mf("display",l))}catch(C){pe(e,e.return,C)}}}else if(g.tag===6){if(y===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(C){pe(e,e.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;y===g&&(y=null),g=g.return}y===g&&(y=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ht(t,e),Ct(e),r&4&&rc(e);break;case 21:break;default:ht(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ud(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Yr(i,""),r.flags&=-33);var o=nc(e);Rs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=nc(e);Fs(e,s,l);break;default:throw Error($(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gm(e,t,n){T=e,Qd(e)}function Qd(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ri;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||Ie;s=Ri;var c=Ie;if(Ri=l,(Ie=u)&&!c)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?lc(i):u!==null?(u.return=l,T=u):lc(i);for(;o!==null;)T=o,Qd(o),o=o.sibling;T=i,Ri=s,Ie=c}ic(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):ic(e)}}function ic(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||Zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ba(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var y=c.memoizedState;if(y!==null){var g=y.dehydrated;g!==null&&Jr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ie||t.flags&512&&Ls(t)}catch(m){pe(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function oc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function lc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(u){pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){pe(t,i,u)}}var o=t.return;try{Ls(t)}catch(u){pe(t,o,u)}break;case 5:var l=t.return;try{Ls(t)}catch(u){pe(t,l,u)}}}catch(u){pe(t,t.return,u)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var Ym=Math.ceil,No=Ht.ReactCurrentDispatcher,Du=Ht.ReactCurrentOwner,at=Ht.ReactCurrentBatchConfig,X=0,Pe=null,ve=null,Te=0,Je=0,Jn=hn(0),we=0,ai=null,Dn=0,qo=0,Tu=0,Hr=null,Ke=null,Lu=0,pr=1/0,Ft=null,Po=!1,Is=null,sn=null,Ii=!1,bt=null,zo=0,Qr=0,Os=null,Ji=-1,bi=0;function Ve(){return X&6?me():Ji!==-1?Ji:Ji=me()}function un(e){return e.mode&1?X&2&&Te!==0?Te&-Te:Dm.transition!==null?(bi===0&&(bi=Nf()),bi):(e=J,e!==0||(e=window.event,e=e===void 0?16:Rf(e.type)),e):1}function wt(e,t,n,r){if(50<Qr)throw Qr=0,Os=null,Error($(185));hi(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&(qo|=n),we===4&&Zt(e,Te)),Ze(e,r),n===1&&X===0&&!(t.mode&1)&&(pr=me()+500,Go&&mn()))}function Ze(e,t){var n=e.callbackNode;Dh(e,t);var r=po(e,e===Pe?Te:0);if(r===0)n!==null&&ma(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ma(n),t===1)e.tag===0?zm(sc.bind(null,e)):ed(sc.bind(null,e)),$m(function(){!(X&6)&&mn()}),n=null;else{switch(Pf(r)){case 1:n=ou;break;case 4:n=$f;break;case 16:n=fo;break;case 536870912:n=jf;break;default:n=fo}n=bd(n,Kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Kd(e,t){if(Ji=-1,bi=0,X&6)throw Error($(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=po(e,e===Pe?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var i=X;X|=2;var o=Yd();(Pe!==e||Te!==t)&&(Ft=null,pr=me()+500,Cn(e,t));do try{qm();break}catch(s){Gd(e,s)}while(!0);vu(),No.current=o,X=i,ve!==null?t=0:(Pe=null,Te=0,t=we)}if(t!==0){if(t===2&&(i=cs(e),i!==0&&(r=i,t=As(e,i))),t===1)throw n=ai,Cn(e,0),Zt(e,r),Ze(e,me()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Xm(i)&&(t=Do(e,r),t===2&&(o=cs(e),o!==0&&(r=o,t=As(e,o))),t===1))throw n=ai,Cn(e,0),Zt(e,r),Ze(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:xn(e,Ke,Ft);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Lu+500-me(),10<t)){if(po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vs(xn.bind(null,e,Ke,Ft),t);break}xn(e,Ke,Ft);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-xt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ym(r/1960))-r,10<r){e.timeoutHandle=vs(xn.bind(null,e,Ke,Ft),r);break}xn(e,Ke,Ft);break;case 5:xn(e,Ke,Ft);break;default:throw Error($(329))}}}return Ze(e,me()),e.callbackNode===n?Kd.bind(null,e):null}function As(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&Ms(t)),e}function Ms(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function Xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!kt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Tu,t&=~qo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function sc(e){if(X&6)throw Error($(327));lr();var t=po(e,0);if(!(t&1))return Ze(e,me()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=cs(e);r!==0&&(t=r,n=As(e,r))}if(n===1)throw n=ai,Cn(e,0),Zt(e,t),Ze(e,me()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Ke,Ft),Ze(e,me()),null}function Fu(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(pr=me()+500,Go&&mn())}}function Tn(e){bt!==null&&bt.tag===0&&!(X&6)&&lr();var t=X;X|=1;var n=at.transition,r=J;try{if(at.transition=null,J=1,e)return e()}finally{J=r,at.transition=n,X=t,!(X&6)&&mn()}}function Ru(){Je=Jn.current,ie(Jn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Cm(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:fr(),ie(Ye),ie(Oe),_u();break;case 5:Eu(r);break;case 4:fr();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:xu(r.type._context);break;case 22:case 23:Ru()}n=n.return}if(Pe=e,ve=e=an(e.current,null),Te=Je=t,we=0,ai=null,Tu=qo=Dn=0,Ke=Hr=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Sn=null}return e}function Gd(e,t){do{var n=ve;try{if(vu(),Xi.current=jo,$o){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(zn=0,Ce=xe=fe=null,Ur=!1,li=0,Du.current=null,n===null||n.return===null){we=1,ai=t,ve=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,y=s,g=y.tag;if(!(y.mode&1)&&(g===0||g===11||g===15)){var m=y.alternate;m?(y.updateQueue=m.updateQueue,y.memoizedState=m.memoizedState,y.lanes=m.lanes):(y.updateQueue=null,y.memoizedState=null)}var w=Ya(l);if(w!==null){w.flags&=-257,Xa(w,l,s,o,t),w.mode&1&&Ga(o,c,t),t=w,u=c;var k=t.updateQueue;if(k===null){var C=new Set;C.add(u),t.updateQueue=C}else k.add(u);break e}else{if(!(t&1)){Ga(o,c,t),Iu();break e}u=Error($(426))}}else if(ue&&s.mode&1){var U=Ya(l);if(U!==null){!(U.flags&65536)&&(U.flags|=256),Xa(U,l,s,o,t),gu(dr(u,s));break e}}o=u=dr(u,s),we!==4&&(we=2),Hr===null?Hr=[o]:Hr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=zd(o,u,t);Va(o,p);break e;case 1:s=u;var a=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof a.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Dd(o,s,t);Va(o,x);break e}}o=o.return}while(o!==null)}Zd(n)}catch(E){t=E,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Yd(){var e=No.current;return No.current=jo,e===null?jo:e}function Iu(){(we===0||we===3||we===2)&&(we=4),Pe===null||!(Dn&268435455)&&!(qo&268435455)||Zt(Pe,Te)}function Do(e,t){var n=X;X|=2;var r=Yd();(Pe!==e||Te!==t)&&(Ft=null,Cn(e,t));do try{Zm();break}catch(i){Gd(e,i)}while(!0);if(vu(),X=n,No.current=r,ve!==null)throw Error($(261));return Pe=null,Te=0,we}function Zm(){for(;ve!==null;)Xd(ve)}function qm(){for(;ve!==null&&!kh();)Xd(ve)}function Xd(e){var t=Jd(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Zd(e):ve=t,Du.current=null}function Zd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hm(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,ve=null;return}}else if(n=Wm(n,t,Je),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);we===0&&(we=5)}function xn(e,t,n){var r=J,i=at.transition;try{at.transition=null,J=1,Jm(e,t,n,r)}finally{at.transition=i,J=r}return null}function Jm(e,t,n,r){do lr();while(bt!==null);if(X&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Th(e,o),e===Pe&&(ve=Pe=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,bd(fo,function(){return lr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var l=J;J=1;var s=X;X|=4,Du.current=null,Km(e,n),Hd(n,e),vm(gs),ho=!!ms,gs=ms=null,e.current=n,Gm(n),Eh(),X=s,J=l,at.transition=o}else e.current=n;if(Ii&&(Ii=!1,bt=e,zo=i),o=e.pendingLanes,o===0&&(sn=null),$h(n.stateNode),Ze(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Po)throw Po=!1,e=Is,Is=null,e;return zo&1&&e.tag!==0&&lr(),o=e.pendingLanes,o&1?e===Os?Qr++:(Qr=0,Os=e):Qr=0,mn(),null}function lr(){if(bt!==null){var e=Pf(zo),t=at.transition,n=J;try{if(at.transition=null,J=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,zo=0,X&6)throw Error($(331));var i=X;for(X|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(T=c;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Wr(8,y,o)}var g=y.child;if(g!==null)g.return=y,T=g;else for(;T!==null;){y=T;var m=y.sibling,w=y.return;if(Bd(y),y===c){T=null;break}if(m!==null){m.return=w,T=m;break}T=w}}}var k=o.alternate;if(k!==null){var C=k.child;if(C!==null){k.child=null;do{var U=C.sibling;C.sibling=null,C=U}while(C!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Wr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var a=e.current;for(T=a;T!==null;){l=T;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,T=f;else e:for(l=a;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zo(9,s)}}catch(E){pe(s,s.return,E)}if(s===l){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(X=i,mn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Uo,e)}catch{}r=!0}return r}finally{J=n,at.transition=t}}return!1}function uc(e,t,n){t=dr(n,t),t=zd(e,t,1),e=ln(e,t,1),t=Ve(),e!==null&&(hi(e,1,t),Ze(e,t))}function pe(e,t,n){if(e.tag===3)uc(e,e,n);else for(;t!==null;){if(t.tag===3){uc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=dr(n,e),e=Dd(t,e,1),t=ln(t,e,1),e=Ve(),t!==null&&(hi(t,1,e),Ze(t,e));break}}t=t.return}}function bm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Te&n)===n&&(we===4||we===3&&(Te&130023424)===Te&&500>me()-Lu?Cn(e,0):Tu|=n),Ze(e,t)}function qd(e,t){t===0&&(e.mode&1?(t=$i,$i<<=1,!($i&130023424)&&($i=4194304)):t=1);var n=Ve();e=Ut(e,t),e!==null&&(hi(e,t,n),Ze(e,n))}function eg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qd(e,n)}function tg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),qd(e,n)}var Jd;Jd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ye.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,Um(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,ue&&t.flags&1048576&&td(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var i=ur(t,Oe.current);or(t,n),i=$u(null,t,r,e,i,n);var o=ju();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Xe(r)?(o=!0,xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Su(t),i.updater=Yo,t.stateNode=i,i._reactInternals=t,Cs(t,r,e,n),t=Ns(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&hu(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=rg(r),e=mt(r,e),i){case 0:t=js(null,t,r,e,n);break e;case 1:t=Ja(null,t,r,e,n);break e;case 11:t=Za(null,t,r,e,n);break e;case 14:t=qa(null,t,r,mt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),js(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ja(e,t,r,i,n);case 3:e:{if(Rd(t),e===null)throw Error($(387));r=t.pendingProps,o=t.memoizedState,i=o.element,od(e,t),_o(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error($(423)),t),t=ba(e,t,r,n,i);break e}else if(r!==i){i=dr(Error($(424)),t),t=ba(e,t,r,n,i);break e}else for(be=on(t.stateNode.containerInfo.firstChild),et=t,ue=!0,yt=null,n=ad(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){t=Wt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return cd(t),e===null&&ks(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ys(r,i)?l=null:o!==null&&ys(r,o)&&(t.flags|=32),Fd(e,t),Ae(e,t,l,n),t.child;case 6:return e===null&&ks(t),null;case 13:return Id(e,t,n);case 4:return ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Za(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,te(ko,r._currentValue),r._currentValue=l,o!==null)if(kt(o.value,l)){if(o.children===i.children&&!Ye.current){t=Wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Mt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var y=c.pending;y===null?u.next=u:(u.next=y.next,y.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Es(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error($(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Es(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,or(t,n),i=ct(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),qa(e,t,r,i,n);case 15:return Td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),qi(e,t),t.tag=1,Xe(r)?(e=!0,xo(t)):e=!1,or(t,n),sd(t,r,i),Cs(t,r,i,n),Ns(null,t,r,!0,e,n);case 19:return Od(e,t,n);case 22:return Ld(e,t,n)}throw Error($(156,t.tag))};function bd(e,t){return Cf(e,t)}function ng(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new ng(e,t,n,r)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rg(e){if(typeof e=="function")return Ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nu)return 11;if(e===ru)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function eo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ou(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Un:return $n(n.children,i,o,t);case tu:l=8,i|=8;break;case Xl:return e=ut(12,n,t,i|2),e.elementType=Xl,e.lanes=o,e;case Zl:return e=ut(13,n,t,i),e.elementType=Zl,e.lanes=o,e;case ql:return e=ut(19,n,t,i),e.elementType=ql,e.lanes=o,e;case uf:return Jo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lf:l=10;break e;case sf:l=9;break e;case nu:l=11;break e;case ru:l=14;break e;case Gt:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=ut(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function $n(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Jo(e,t,n,r){return e=ut(22,e,r,t),e.elementType=uf,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Rl(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ig(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Au(e,t,n,r,i,o,l,s,u){return e=new ig(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(o),e}function og(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ep(e){if(!e)return dn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Xe(n))return bf(e,n,t)}return t}function tp(e,t,n,r,i,o,l,s,u){return e=Au(n,r,!0,e,i,o,l,s,u),e.context=ep(null),n=e.current,r=Ve(),i=un(n),o=Mt(r,i),o.callback=t??null,ln(n,o,i),e.current.lanes=i,hi(e,i,r),Ze(e,r),e}function bo(e,t,n,r){var i=t.current,o=Ve(),l=un(i);return n=ep(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ln(i,t,l),e!==null&&(wt(e,i,l,o),Yi(e,i,l)),l}function To(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mu(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function lg(){return null}var np=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vu(e){this._internalRoot=e}el.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));bo(e,t,null,null)};el.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){bo(null,e,null,null)}),t[Bt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&Ff(e)}};function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function sg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=To(l);o.call(c)}}var l=tp(t,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=l,e[Bt]=l.current,ti(e.nodeType===8?e.parentNode:e),Tn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=To(u);s.call(c)}}var u=Au(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=u,e[Bt]=u.current,ti(e.nodeType===8?e.parentNode:e),Tn(function(){bo(t,u,n,r)}),u}function nl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=To(l);s.call(u)}}bo(t,l,e,i)}else l=sg(n,t,e,i,r);return To(l)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fr(t.pendingLanes);n!==0&&(lu(t,n|1),Ze(t,me()),!(X&6)&&(pr=me()+500,mn()))}break;case 13:Tn(function(){var r=Ut(e,1);if(r!==null){var i=Ve();wt(r,e,1,i)}}),Mu(e,1)}};su=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ve();wt(t,e,134217728,n)}Mu(e,134217728)}};Df=function(e){if(e.tag===13){var t=un(e),n=Ut(e,t);if(n!==null){var r=Ve();wt(n,e,t,r)}Mu(e,t)}};Tf=function(){return J};Lf=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};ss=function(e,t,n){switch(t){case"input":if(es(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ko(r);if(!i)throw Error($(90));cf(r),es(r,i)}}}break;case"textarea":df(e,n);break;case"select":t=n.value,t!=null&&tr(e,!!n.multiple,t,!1)}};xf=Fu;wf=Tn;var ug={usingClientEntryPoint:!1,Events:[gi,Kn,Ko,yf,vf,Fu]},Pr={findFiberByHostInstance:wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ag={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ef(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Uo=Oi.inject(ag),zt=Oi}catch{}}nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;nt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(t))throw Error($(200));return og(e,t,null,n)};nt.createRoot=function(e,t){if(!Bu(e))throw Error($(299));var n=!1,r="",i=np;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Au(e,1,!1,null,null,n,!1,r,i),e[Bt]=t.current,ti(e.nodeType===8?e.parentNode:e),new Vu(t)};nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Ef(t),e=e===null?null:e.stateNode,e};nt.flushSync=function(e){return Tn(e)};nt.hydrate=function(e,t,n){if(!tl(t))throw Error($(200));return nl(null,e,t,!0,n)};nt.hydrateRoot=function(e,t,n){if(!Bu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=np;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tp(t,null,e,1,n??null,i,!1,o,l),e[Bt]=t.current,ti(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new el(t)};nt.render=function(e,t,n){if(!tl(t))throw Error($(200));return nl(null,e,t,!1,n)};nt.unmountComponentAtNode=function(e){if(!tl(e))throw Error($(40));return e._reactRootContainer?(Tn(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};nt.unstable_batchedUpdates=Fu;nt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return nl(e,t,n,!1,r)};nt.version="18.2.0-next-9e3b772b8-20220608";function rp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rp)}catch(e){console.error(e)}}rp(),ef.exports=nt;var cg=ef.exports,fc=cg;Gl.createRoot=fc.createRoot,Gl.hydrateRoot=fc.hydrateRoot;const fg=e=>{const[t,n]=je.useState(!1);return je.useEffect(()=>{const r=e.map(async i=>{const{fontFamily:o,fontUrl:l}=i,u=await new FontFace(o,`url(${l})`).load();document.fonts.add(u)});Promise.all(r).then(()=>{n(!0)}).catch(i=>{console.error(`Error loading fonts: ${i}`)})},[e]),t};var Ne=function(){return Ne=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ne.apply(this,arguments)};function ci(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var dg=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),s=Object.keys(n);if(l.length!==s.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(n),c=0;c<l.length;c++){var y=l[c];if(!u(y))return!1;var g=t[y],m=n[y];if(o=r?r.call(i,g,m,y):void 0,o===!1||o===void 0&&g!==m)return!1}return!0};const pg=Wc(dg);var re="-ms-",Kr="-moz-",Z="-webkit-",ip="comm",rl="rule",Uu="decl",hg="@import",op="@keyframes",mg="@layer",gg=Math.abs,Wu=String.fromCharCode,Vs=Object.assign;function yg(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function lp(e){return e.trim()}function Rt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function to(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function sp(e){return e.length}function Ir(e,t){return t.push(e),e}function vg(e,t){return e.map(t).join("")}function dc(e,t){return e.filter(function(n){return!Rt(n,t)})}var il=1,mr=1,up=0,dt=0,ye=0,Sr="";function ol(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:il,column:mr,length:l,return:"",siblings:s}}function Kt(e,t){return Vs(ol("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Mn(e){for(;e.root;)e=Kt(e.root,{children:[e]});Ir(e,e.siblings)}function xg(){return ye}function wg(){return ye=dt>0?$e(Sr,--dt):0,mr--,ye===10&&(mr=1,il--),ye}function St(){return ye=dt<up?$e(Sr,dt++):0,mr++,ye===10&&(mr=1,il++),ye}function jn(){return $e(Sr,dt)}function no(){return dt}function ll(e,t){return hr(Sr,e,t)}function Bs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sg(e){return il=mr=1,up=jt(Sr=e),dt=0,[]}function kg(e){return Sr="",e}function Il(e){return lp(ll(dt-1,Us(e===91?e+2:e===40?e+1:e)))}function Eg(e){for(;(ye=jn())&&ye<33;)St();return Bs(e)>2||Bs(ye)>3?"":" "}function _g(e,t){for(;--t&&St()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return ll(e,no()+(t<6&&jn()==32&&St()==32))}function Us(e){for(;St();)switch(ye){case e:return dt;case 34:case 39:e!==34&&e!==39&&Us(ye);break;case 40:e===41&&Us(e);break;case 92:St();break}return dt}function Cg(e,t){for(;St()&&e+ye!==57;)if(e+ye===84&&jn()===47)break;return"/*"+ll(t,dt-1)+"*"+Wu(e===47?e:St())}function $g(e){for(;!Bs(jn());)St();return ll(e,dt)}function jg(e){return kg(ro("",null,null,null,[""],e=Sg(e),0,[0],e))}function ro(e,t,n,r,i,o,l,s,u){for(var c=0,y=0,g=l,m=0,w=0,k=0,C=1,U=1,p=1,a=0,f="",x=i,E=o,j=r,_=f;U;)switch(k=a,a=St()){case 40:if(k!=108&&$e(_,g-1)==58){to(_+=H(Il(a),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:_+=Il(a);break;case 9:case 10:case 13:case 32:_+=Eg(k);break;case 92:_+=_g(no()-1,7);continue;case 47:switch(jn()){case 42:case 47:Ir(Ng(Cg(St(),no()),t,n,u),u);break;default:_+="/"}break;case 123*C:s[c++]=jt(_)*p;case 125*C:case 59:case 0:switch(a){case 0:case 125:U=0;case 59+y:p==-1&&(_=H(_,/\f/g,"")),w>0&&jt(_)-g&&Ir(w>32?hc(_+";",r,n,g-1,u):hc(H(_," ","")+";",r,n,g-2,u),u);break;case 59:_+=";";default:if(Ir(j=pc(_,t,n,c,y,i,s,f,x=[],E=[],g,o),o),a===123)if(y===0)ro(_,t,j,j,x,o,g,s,E);else switch(m===99&&$e(_,3)===110?100:m){case 100:case 108:case 109:case 115:ro(e,j,j,r&&Ir(pc(e,j,j,0,0,i,s,f,i,x=[],g,E),E),i,E,g,s,r?x:E);break;default:ro(_,j,j,j,[""],E,0,s,E)}}c=y=w=0,C=p=1,f=_="",g=l;break;case 58:g=1+jt(_),w=k;default:if(C<1){if(a==123)--C;else if(a==125&&C++==0&&wg()==125)continue}switch(_+=Wu(a),a*C){case 38:p=y>0?1:(_+="\f",-1);break;case 44:s[c++]=(jt(_)-1)*p,p=1;break;case 64:jn()===45&&(_+=Il(St())),m=jn(),y=g=jt(f=_+=$g(no())),a++;break;case 45:k===45&&jt(_)==2&&(C=0)}}return o}function pc(e,t,n,r,i,o,l,s,u,c,y,g){for(var m=i-1,w=i===0?o:[""],k=sp(w),C=0,U=0,p=0;C<r;++C)for(var a=0,f=hr(e,m+1,m=gg(U=l[C])),x=e;a<k;++a)(x=lp(U>0?w[a]+" "+f:H(f,/&\f/g,w[a])))&&(u[p++]=x);return ol(e,t,n,i===0?rl:s,u,c,y,g)}function Ng(e,t,n,r){return ol(e,t,n,ip,Wu(xg()),hr(e,2,-2),0,r)}function hc(e,t,n,r,i){return ol(e,t,n,Uu,hr(e,0,r),hr(e,r+1,-1),r,i)}function ap(e,t,n){switch(yg(e,t)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+Kr+e+re+e+e;case 5936:switch($e(e,t+11)){case 114:return Z+e+re+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+re+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+re+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Z+e+re+e+e;case 6165:return Z+e+re+"flex-"+e+e;case 5187:return Z+e+H(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return Z+e+re+"flex-item-"+H(e,/flex-|-self/g,"")+(Rt(e,/flex-|baseline/)?"":re+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return Z+e+re+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return Z+e+re+H(e,"shrink","negative")+e;case 5292:return Z+e+re+H(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+H(e,"-grow","")+Z+e+re+H(e,"grow","positive")+e;case 4554:return Z+H(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4200:if(!Rt(e,/flex-|baseline/))return re+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return re+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Rt(r.props,/grid-\w+-end/)})?~to(e+(n=n[t].value),"span")?e:re+H(e,"-start","")+e+re+"grid-row-span:"+(~to(n,"span")?Rt(n,/\d+/):+Rt(n,/\d+/)-+Rt(e,/\d+/))+";":re+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Rt(r.props,/grid-\w+-start/)})?e:re+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+Kr+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~to(e,"stretch")?ap(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,c){return re+i+":"+o+c+(l?re+i+"-span:"+(s?u:+u-+o)+c:"")+e});case 4949:if($e(e,t+6)===121)return H(e,":",":"+Z)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Z+($e(e,14)===45?"inline-":"")+"box$3$1"+Z+"$2$3$1"+re+"$2box$3")+e;case 100:return H(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function Lo(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Pg(e,t,n,r){switch(e.type){case mg:if(e.children.length)break;case hg:case Uu:return e.return=e.return||e.value;case ip:return"";case op:return e.return=e.value+"{"+Lo(e.children,r)+"}";case rl:if(!jt(e.value=e.props.join(",")))return""}return jt(n=Lo(e.children,r))?e.return=e.value+"{"+n+"}":""}function zg(e){var t=sp(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function Dg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Tg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Uu:e.return=ap(e.value,e.length,n);return;case op:return Lo([Kt(e,{value:H(e.value,"@","@"+Z)})],r);case rl:if(e.length)return vg(n=e.props,function(i){switch(Rt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mn(Kt(e,{props:[H(i,/:(read-\w+)/,":"+Kr+"$1")]})),Mn(Kt(e,{props:[i]})),Vs(e,{props:dc(n,r)});break;case"::placeholder":Mn(Kt(e,{props:[H(i,/:(plac\w+)/,":"+Z+"input-$1")]})),Mn(Kt(e,{props:[H(i,/:(plac\w+)/,":"+Kr+"$1")]})),Mn(Kt(e,{props:[H(i,/:(plac\w+)/,re+"input-$1")]})),Mn(Kt(e,{props:[i]})),Vs(e,{props:dc(n,r)});break}return""})}}var Lg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},gr=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",Hu=typeof window<"u"&&"HTMLElement"in window,Fg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),Rg={},sl=Object.freeze([]),yr=Object.freeze({});function cp(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ig=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Og=/(^-|-$)/g;function mc(e){return e.replace(Ig,"-").replace(Og,"")}var Ag=/(a)(d)/gi,gc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ws(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gc(t%52)+n;return(gc(t%52)+n).replace(Ag,"$1-$2")}var Ol,bn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},dp=function(e){return bn(5381,e)};function pp(e){return Ws(dp(e)>>>0)}function Mg(e){return e.displayName||e.name||"Component"}function Al(e){return typeof e=="string"&&!0}var hp=typeof Symbol=="function"&&Symbol.for,mp=hp?Symbol.for("react.memo"):60115,Vg=hp?Symbol.for("react.forward_ref"):60112,Bg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ug={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wg=((Ol={})[Vg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ol[mp]=gp,Ol);function yc(e){return("type"in(t=e)&&t.type.$$typeof)===mp?gp:"$$typeof"in e?Wg[e.$$typeof]:Bg;var t}var Hg=Object.defineProperty,Qg=Object.getOwnPropertyNames,vc=Object.getOwnPropertySymbols,Kg=Object.getOwnPropertyDescriptor,Gg=Object.getPrototypeOf,xc=Object.prototype;function yp(e,t,n){if(typeof t!="string"){if(xc){var r=Gg(t);r&&r!==xc&&yp(e,r,n)}var i=Qg(t);vc&&(i=i.concat(vc(t)));for(var o=yc(e),l=yc(t),s=0;s<i.length;++s){var u=i[s];if(!(u in Ug||n&&n[u]||l&&u in l||o&&u in o)){var c=Kg(t,u);try{Hg(e,u,c)}catch{}}}}return e}function Ln(e){return typeof e=="function"}function Qu(e){return typeof e=="object"&&"styledComponentId"in e}function En(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hs(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qs(e,t,n){if(n===void 0&&(n=!1),!n&&!fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Qs(e[r],t[r]);else if(fi(t))for(var r in t)e[r]=Qs(e[r],t[r]);return e}function Ku(e,t){Object.defineProperty(e,"toString",{value:t})}function Fn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Yg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw Fn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),io=new Map,Fo=new Map,oo=1,Ai=function(e){if(io.has(e))return io.get(e);for(;Fo.has(oo);)oo++;var t=oo++;return io.set(e,t),Fo.set(t,e),t},Xg=function(e,t){oo=t+1,io.set(e,t),Fo.set(t,e)},Zg="style[".concat(gr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),qg=new RegExp("^".concat(gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},bg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(qg);if(u){var c=0|parseInt(u[1],10),y=u[2];c!==0&&(Xg(y,c),Jg(e,y,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function ey(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(gr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(gr,"active"),r.setAttribute("data-styled-version","6.1.1");var l=ey();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},ty=function(){function e(t){this.element=vp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw Fn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ny=function(){function e(t){this.element=vp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ry=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wc=Hu,iy={isServer:!Hu,useCSSOMInjection:!Fg},Ro=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},iy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Hu&&wc&&(wc=!1,function(o){for(var l=document.querySelectorAll(Zg),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(gr)!=="active"&&(bg(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ku(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",c=function(g){var m=function(p){return Fo.get(p)}(g);if(m===void 0)return"continue";var w=o.names.get(m),k=l.getGroup(g);if(w===void 0||k.length===0)return"continue";var C="".concat(gr,".g").concat(g,'[id="').concat(m,'"]'),U="";w!==void 0&&w.forEach(function(p){p.length>0&&(U+="".concat(p,","))}),u+="".concat(k).concat(C,'{content:"').concat(U,'"}').concat(`/*!sc*/
`)},y=0;y<s;y++)c(y);return u}(i)})}return e.registerId=function(t){return Ai(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ne(Ne({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ry(i):r?new ty(i):new ny(i)}(this.options),new Yg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ai(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ai(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),oy=/&/g,ly=/^\s*\/\/.*$/gm;function xp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xp(n.children,t)),n})}function wp(e){var t,n,r,i=e===void 0?yr:e,o=i.options,l=o===void 0?yr:o,s=i.plugins,u=s===void 0?sl:s,c=function(m,w,k){return k===n||k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):m},y=u.slice();y.push(function(m){m.type===rl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(oy,n).replace(r,c))}),l.prefix&&y.push(Tg),y.push(Pg);var g=function(m,w,k,C){w===void 0&&(w=""),k===void 0&&(k=""),C===void 0&&(C="&"),t=C,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var U=m.replace(ly,""),p=jg(k||w?"".concat(k," ").concat(w," { ").concat(U," }"):U);l.namespace&&(p=xp(p,l.namespace));var a=[];return Lo(p,zg(y.concat(Dg(function(f){return a.push(f)})))),a};return g.hash=u.length?u.reduce(function(m,w){return w.name||Fn(15),bn(m,w.name)},5381).toString():"",g}var sy=new Ro,Ks=wp(),Gu=se.createContext({shouldForwardProp:void 0,styleSheet:sy,stylis:Ks});Gu.Consumer;var uy=se.createContext(void 0);function Io(){return je.useContext(Gu)}function ay(e){var t=je.useState(e.stylisPlugins),n=t[0],r=t[1],i=Io().styleSheet,o=je.useMemo(function(){var u=i;return e.sheet?u=e.sheet:e.target&&(u=u.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(u=u.reconstructWithOptions({useCSSOMInjection:!1})),u},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=je.useMemo(function(){return wp({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);je.useEffect(function(){pg(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]);var s=je.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:o,stylis:l}},[e.shouldForwardProp,o,l]);return se.createElement(Gu.Provider,{value:s},se.createElement(uy.Provider,{value:l},e.children))}var cy=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ks);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ku(this,function(){throw Fn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ks),this.name+t.hash},e}(),fy=function(e){return e>="A"&&e<="Z"};function Sc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;fy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sp=function(e){return e==null||e===!1||e===""},kp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Sp(o)&&(Array.isArray(o)&&o.isCss||Ln(o)?r.push("".concat(Sc(i),":"),o,";"):fi(o)?r.push.apply(r,ci(ci(["".concat(i," {")],kp(o),!1),["}"],!1)):r.push("".concat(Sc(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Lg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function cn(e,t,n,r){if(Sp(e))return[];if(Qu(e))return[".".concat(e.styledComponentId)];if(Ln(e)){if(!Ln(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return cn(i,t,n,r)}var o;return e instanceof cy?n?(e.inject(n,r),[e.getName(r)]):[e]:fi(e)?kp(e):Array.isArray(e)?Array.prototype.concat.apply(sl,e.map(function(l){return cn(l,t,n,r)})):[e.toString()]}function Ep(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ln(n)&&!Qu(n))return!1}return!0}var dy=dp("6.1.1"),py=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ep(t),this.componentId=n,this.baseHash=bn(dy,n),this.baseStyle=r,Ro.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=En(i,this.staticRulesId);else{var o=Hs(cn(this.rules,t,n,r)),l=Ws(bn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=En(i,l),this.staticRulesId=l}else{for(var u=bn(this.baseHash,r.hash),c="",y=0;y<this.rules.length;y++){var g=this.rules[y];if(typeof g=="string")c+=g;else if(g){var m=Hs(cn(g,t,n,r));u=bn(u,m+y),c+=m}}if(c){var w=Ws(u>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(c,".".concat(w),void 0,this.componentId)),i=En(i,w)}}return i},e}(),di=se.createContext(void 0);di.Consumer;function hy(e){var t=se.useContext(di),n=je.useMemo(function(){return function(r,i){if(!r)throw Fn(14);if(Ln(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw Fn(8);return i?Ne(Ne({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?se.createElement(di.Provider,{value:n},e.children):null}var Ml={};function my(e,t,n){var r=Qu(e),i=e,o=!Al(e),l=t.attrs,s=l===void 0?sl:l,u=t.componentId,c=u===void 0?function(x,E){var j=typeof x!="string"?"sc":mc(x);Ml[j]=(Ml[j]||0)+1;var _="".concat(j,"-").concat(pp("6.1.1"+j+Ml[j]));return E?"".concat(E,"-").concat(_):_}(t.displayName,t.parentComponentId):u,y=t.displayName,g=y===void 0?function(x){return Al(x)?"styled.".concat(x):"Styled(".concat(Mg(x),")")}(e):y,m=t.displayName&&t.componentId?"".concat(mc(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(t.shouldForwardProp){var U=t.shouldForwardProp;k=function(x,E){return C(x,E)&&U(x,E)}}else k=C}var p=new py(n,m,r?i.componentStyle:void 0);function a(x,E){return function(j,_,L){var K=j.attrs,B=j.componentStyle,ae=j.defaultProps,Q=j.foldedComponentIds,W=j.styledComponentId,b=j.target,ke=se.useContext(di),Ee=Io(),_e=j.shouldForwardProp||Ee.shouldForwardProp,z=function(We,it,He){for(var Qe,Et=Ne(Ne({},it),{className:void 0,theme:He}),gn=0;gn<We.length;gn+=1){var yn=Ln(Qe=We[gn])?Qe(Et):Qe;for(var _t in yn)Et[_t]=_t==="className"?En(Et[_t],yn[_t]):_t==="style"?Ne(Ne({},Et[_t]),yn[_t]):yn[_t]}return it.className&&(Et.className=En(Et.className,it.className)),Et}(K,_,cp(_,ke,ae)||yr),A=z.as||b,V={};for(var Y in z)z[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"||(Y==="forwardedAs"?V.as=z.forwardedAs:_e&&!_e(Y,A)||(V[Y]=z[Y]));var oe=function(We,it){var He=Io(),Qe=We.generateAndInjectStyles(it,He.styleSheet,He.stylis);return Qe}(B,z),pt=En(Q,W);return oe&&(pt+=" "+oe),z.className&&(pt+=" "+z.className),V[Al(A)&&!fp.has(A)?"class":"className"]=pt,V.ref=L,je.createElement(A,V)}(f,x,E)}a.displayName=g;var f=se.forwardRef(a);return f.attrs=w,f.componentStyle=p,f.displayName=g,f.shouldForwardProp=k,f.foldedComponentIds=r?En(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=m,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var j=[],_=1;_<arguments.length;_++)j[_-1]=arguments[_];for(var L=0,K=j;L<K.length;L++)Qs(E,K[L],!0);return E}({},i.defaultProps,x):x}}),Ku(f,function(){return".".concat(f.styledComponentId)}),o&&yp(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function kc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Ec=function(e){return Object.assign(e,{isCss:!0})};function _p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ln(e)||fi(e)){var r=e;return Ec(cn(kc(sl,ci([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cn(i):Ec(cn(kc(i,t)))}function Gs(e,t,n){if(n===void 0&&(n=yr),!t)throw Fn(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,_p.apply(void 0,ci([i],o,!1)))};return r.attrs=function(i){return Gs(e,t,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Gs(e,t,Ne(Ne({},n),i))},r}var Cp=function(e){return Gs(my,e)},N=Cp;fp.forEach(function(e){N[e]=Cp(e)});var gy=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ep(t),Ro.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Hs(cn(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ro.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function yy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_p.apply(void 0,ci([e],t,!1)),i="sc-global-".concat(pp(JSON.stringify(r))),o=new gy(r,i),l=function(u){var c=Io(),y=se.useContext(di),g=se.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&s(g,u,c.styleSheet,y,c.stylis),se.useLayoutEffect(function(){if(!c.styleSheet.server)return s(g,u,c.styleSheet,y,c.stylis),function(){return o.removeStyles(g,c.styleSheet)}},[g,u,c.styleSheet,y,c.stylis]),null};function s(u,c,y,g,m){if(o.isStatic)o.renderStyles(u,Rg,y,m);else{var w=Ne(Ne({},c),{theme:cp(c,g,l.defaultProps)});o.renderStyles(u,w,y,m)}}return se.memo(l)}const $p=({theme:e})=>e.media.phone,R=({theme:e})=>e.media.tablet,O=({theme:e})=>e.media.desktop,vy=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),xy=()=>{window.scrollTo({top:0,behavior:"smooth"})},wy=yy`

#root {
  width: 100%;
  margin: 0 auto;
  padding: 36px 20px 24px;

  @media ${$p} {
    width: 480px;
  }

  @media ${R} {
    width: 768px;
    padding: 36px 30px 40px;
  }

  @media ${O} {
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
`,Sy="/ecosolution/assets/sprite-1GOQ9x-W.svg",q=({iconName:e,width:t,height:n,stroke:r,fill:i})=>h.jsx("svg",{width:t,height:n,children:h.jsx("use",{href:`${Sy}#${e}`,stroke:r||"transparent",fill:i||"transparent"})}),ky=N.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,jp=N.a`
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
`,Ey=N.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${$p} {
  }

  @media ${R} {
    gap: 12px;
  }

  @media ${O} {
  }
`,_y=N.button`
  display: flex;
  padding: 12px;

  border-radius: 50%;
  background-color: #dcefd8;
`,Cy=N.a`
  display: none;

  @media ${R} {
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
`,$y=[{id:1,name:"Main"},{id:2,name:"About"},{id:3,name:"Cases"},{id:4,name:"FAQ"},{id:5,name:"Contact Us"}],jy="/ecosolution/assets/about_1-PMEBtF5-.png",Ny="/ecosolution/assets/about_1@2x-9imxmNKc.png",Py="/ecosolution/assets/about_2-ViwEUMXv.png",zy="/ecosolution/assets/about_2@2x-KkWohZkE.png",Dy=[{iconName:"icon-openness",title:"Openness",description:"to the world, people, new ideas and projects"},{iconName:"icon-responsibility",title:"Responsibility",description:"we are aware that the results of our work have an impact on our lives and the lives of future generations"},{type:"image",alt:"wind-farms-fields",img:jy,img2x:Ny},{type:"image",alt:"man-worker",img:Py,img2x:zy},{iconName:"icon-innovation",title:"Innovation",description:"we use the latest technology to implement non-standard solutions"},{iconName:"icon-quality",title:"Quality",description:"we do not strive to be the first among others, but we want to be the best in our business"}],Ty="/ecosolution/assets/case1-_CCrYN4Q.png",Ly="/ecosolution/assets/case1@2x-mXcN23UK.png",Fy="/ecosolution/assets/case2-vSEbn31q.png",Ry="/ecosolution/assets/case2@2x-3tg7DISq.png",Iy="/ecosolution/assets/case3-moiV_2xm.png",Oy="/ecosolution/assets/case3@2x-NqDKei6c.png",Ay="/ecosolution/assets/case4-pHxz6kpC.png",My="/ecosolution/assets/case4@2x-F7wFwX0L.png",Vy="/ecosolution/assets/case5-67KrYcJn.png",By="/ecosolution/assets/case5@2x-u0LH_kfG.png",zr=[{img:Ty,img2x:Ly,alt:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",title:"Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",description:"Wind Power for auto field irrigation",date:"July 2023"},{img:Fy,img2x:Ry,alt:"Zhytomyr city Private Enterprise “Bosch”",title:"Zhytomyr city Private Enterprise “Bosch”",description:"Solar Panels for industrial use",date:"November 2023"},{img:Iy,img2x:Oy,alt:"Rivne city Private Enterprise “Biotech”",title:"Rivne city Private Enterprise “Biotech”",description:"Thermal modules",date:"October 2023"},{img:Ay,img2x:My,alt:"Kherson city Private Enterprise “HealthyFarm”",title:"Kherson city Private Enterprise “HealthyFarm”",description:"Wind power",date:"September 2021"},{img:Vy,img2x:By,alt:"Zaporizhia city Private Enterprise “Biotech”",title:"Zaporizhia city Private Enterprise “Biotech”",description:"Mini nuclear stations",date:"May 2021"}],_c=[{id:1,question:"How do wind turbines and solar panels work together in a renewable energy system?",answer:"Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output."},{id:2,question:"What sets EcoSolution's renewable energy solutions apart from others on the market?",answer:"Our renewable energy solutions stand out through a comprehensive approach covering solar, wind, and cutting-edge technologies. We prioritize customization to meet specific needs, uphold environmental stewardship, boast a seasoned team with a proven track record, and maintain a client-centric focus. Choosing EcoSolution means opting for innovative, tailored, and environmentally conscious energy solutions."},{id:3,question:"How can businesses and communities benefit from integrating renewable energy solutions from EcoSolution?",answer:"Businesses and communities gain sustainable advantages by integrating EcoSolution's renewable energy solutions. Our tailored approach ensures cost-effective, eco-friendly energy solutions, fostering environmental responsibility, reducing long-term operational costs, and promoting energy independence for a resilient future."},{id:4,question:"What measures does EcoSolution take to ensure the environmental sustainability of its products?",answer:"EcoSolution prioritizes environmental sustainability by employing eco-friendly materials in product manufacturing, minimizing carbon footprint in production processes, and ensuring energy-efficient designs. We are committed to responsible sourcing, recycling initiatives, and continuous improvement in green practices to mitigate environmental impact."},{id:5,question:"How does EcoSolution engage with local communities and support a just transition to renewable energy?",answer:"EcoSolution fosters community engagement by collaborating with local stakeholders, providing education on renewable energy benefits, and offering job opportunities. Our commitment to a just transition involves prioritizing social equity, supporting local economies, and ensuring that the shift to renewable energy is inclusive and beneficial for all."}],Uy=N.div`
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
`,Wy=N.div`
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

  @media ${O} {
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
`,Hy=N.button`
  display: flex;
  align-items: center;

  color: #fff;
`,Qy=N.nav`
  margin-top: 16px;
`,Ky=N.ul`
  & > li:not(:last-child) {
    margin-bottom: 8px;
  }
`,Gy=N.li`
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
`,Yy=N.ul`
  display: flex;
  gap: 8px;
  margin-top: auto;
`,Cc=N.li`
  & > svg > use {
    stroke: #ffffff;
  }

  & :hover,
  :active,
  :focus {
    stroke: #97d28b;
    /* fill: #97d28b; */
  }
`,Xy=({onClose:e})=>h.jsx(Uy,{children:h.jsxs(Wy,{children:[h.jsxs(Hy,{onClick:()=>e(),children:[h.jsx(q,{iconName:"icon-close",width:"20px",height:"20px",stroke:"#fff"}),"close"]}),h.jsx("span",{}),h.jsx(Qy,{children:h.jsx(Ky,{children:$y.map(({id:t,name:n})=>h.jsx(Gy,{children:h.jsxs("a",{href:"#",children:[n,h.jsx(q,{iconName:"icon-arrow-top-right",width:"16px",height:"16px",stroke:"inherit"})]})},t))})}),h.jsxs(Yy,{children:[h.jsx(Cc,{children:h.jsx(q,{iconName:"icon-facebook",width:24,height:24})}),h.jsx(Cc,{children:h.jsx(q,{iconName:"icon-instagram",width:24,height:24})})]})]})}),Zy=()=>{const[e,t]=je.useState(!1),n=()=>{t(!e)};return h.jsxs(ky,{children:[h.jsxs(jp,{href:"/",children:[h.jsx(q,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),h.jsx(q,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),h.jsx(q,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),h.jsxs(Ey,{children:[h.jsx(_y,{type:"button",onClick:n,children:h.jsx(q,{iconName:"icon-menu",width:"16px",height:"16px",stroke:"#000"})}),e&&h.jsx(Xy,{onClose:n}),h.jsx(Cy,{href:"#",children:"Get in touch"})]})]})},qy=N.main``,Jy=N.section`
  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${O} {
    margin-bottom: 120px;
  }
`,by=N.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 36px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 100px;
  }

  @media ${O} {
    margin-bottom: 124px;
  }
`,e0=N.h2`
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

  @media ${O} {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`,t0=N.div`
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

  @media ${O} {
    gap: 161px;
  }
`,n0=N.p`
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
  @media ${O} {
    width: 459px;
  }
`,r0=N.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media ${R} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${O} {
    gap: 48px;
  }
`,$c=N.li`
  padding: 12px;
  min-height: 197px;

  background-color: #eaedf1;

  @media ${O} {
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
`,i0=N.img`
  width: 100%;
  height: auto;
`,o0=N.h3`
  display: flex;
  align-items: center;

  font-family: ${({theme:e})=>e.fonts.secondary};
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;

  @media ${R} {
    font-size: 18px;
  }

  @media ${O} {
    font-size: 32px;
    line-height: 48px;
  }

  & > svg {
    width: 16px;
    height: 16px;

    margin-right: 8px;

    @media ${O} {
      width: 24px;
      height: 24px;
    }
  }
`,l0=N.span`
  display: block;
  width: 100%;
  height: 1px;

  background-color: #97d28b;

  margin-top: 33px;
  margin-bottom: 12px;

  @media ${R} {
    margin-top: 51px;
  }

  @media ${O} {
    margin-top: 94px;
    margin-bottom: 24px;
  }
`,s0=N.p`
  font-size: 14px;
  letter-spacing: -0.56px;
  text-align: justify;
  line-height: normal;

  @media ${O} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,u0=({alt:e,img:t,img2x:n})=>h.jsx(i0,{src:t,alt:`${e}`,srcSet:`${t} 1x, ${n} 2x`}),a0=()=>h.jsxs(Jy,{children:[h.jsxs(by,{children:[h.jsx(e0,{children:"Main values of our company"}),h.jsxs(t0,{children:[h.jsx("span",{}),h.jsx(n0,{children:"EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs."})]})]}),h.jsx(r0,{children:Dy.map(({iconName:e,title:t,description:n,type:r,alt:i,img:o,img2x:l})=>r==="image"?h.jsx($c,{className:r==="image"?"hasImg":"",children:h.jsx(u0,{alt:i,img:o,img2x:l})},i):h.jsxs($c,{children:[h.jsxs(o0,{children:[h.jsx(q,{iconName:`${e}`,stroke:"#173D33",style:{marginRight:"8px"}}),t]}),h.jsx(l0,{}),h.jsx(s0,{children:n})]},t))})]}),c0=N.section`
  margin-top: 146px;
  margin-bottom: 36px;

  @media ${R} {
    margin-top: 164px;
    margin-bottom: 100px;
  }

  @media ${O} {
    margin-top: 200px;
    margin-bottom: 120px;
  }
`,f0=N.h1`
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

  @media ${O} {
    width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`,d0=N.div`
  @media ${R} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,p0=N.p`
  margin-bottom: 24px;

  font-size: 16px;
  letter-spacing: -0.64px;

  @media ${R} {
    width: 342px;

    margin-bottom: 43px;
  }

  @media ${O} {
    width: 363px;
    margin-right: 96px;
    margin-bottom: 20px;
  }
`,h0=N.button`
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

  @media ${R} {
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
`,m0=N.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 24px 0;

  background-color: #97d28b;

  @media ${R} {
    margin: 26px 0 16px;
  }

  @media ${O} {
    margin: 28px 0 12px;
  }
`,g0=N.address`
  margin-bottom: 36px;
`,y0=N.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }
`,jc=N.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  font-style: normal;

  @media ${R} {
    display: flex;
    gap: 50px;
  }

  @media ${O} {
    gap: 167px;
  }

  & > span {
    display: none;

    @media ${R} {
      display: block;
    }
  }
`,Nc=N.a``,v0=N.img`
  width: 320px;
  height: 200px;
  object-fit: cover;

  margin: 0 auto;

  @media ${R} {
    width: 710px;
    height: auto;
  }

  @media ${O} {
    width: 100%;
    height: auto;
  }
`,Pc="/ecosolution/assets/hero-D9CF8VHC.png",x0="/ecosolution/assets/hero@2x-w56nltbM.png",w0="/ecosolution/assets/hero@3x-4KMo86SA.png",S0=()=>h.jsxs(c0,{children:[h.jsxs(d0,{children:[h.jsx(f0,{children:"RENEWABLE ENERGY For any task"}),h.jsxs("div",{children:[h.jsx(p0,{children:"Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass"}),h.jsxs(h0,{children:["Learn More",h.jsx("span",{children:h.jsx(q,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})]}),h.jsx(m0,{}),h.jsxs("div",{children:[h.jsx(g0,{children:h.jsxs(y0,{children:[h.jsx(jc,{children:h.jsx(Nc,{href:"https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%BE%D1%82%D0%B0+%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%B2%D0%B5%D0%BB%D1%96,+7+%D0%AF,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000",target:"_blank",rel:"noopener noreferrer",children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"})}),h.jsxs(jc,{children:[h.jsx(Nc,{href:"mailto:office@ecosolution.com",children:"office@ecosolution.com"}),h.jsx("span",{children:"ecosolution © 2023"})]})]})}),h.jsx(v0,{src:Pc,alt:"Energy",srcSet:`${Pc} 1x, ${x0} 2x, ${w0} 3x`})]})]}),k0=N.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${O} {
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
`,E0=N.h2`
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

  @media ${O} {
    width: 491px;

    font-size: 48px;
    line-height: 48px;
  }
`,_0=N.p`
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

  @media ${O} {
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
`,C0=()=>{const[e,t]=je.useState(1134147814);return je.useEffect(()=>{const n=setInterval(()=>{t(r=>r+1)},1e3);return()=>clearInterval(n)},[]),h.jsxs(k0,{children:[h.jsx(E0,{children:"Electricity we produced for all time"}),h.jsx("span",{}),h.jsxs(_0,{children:[vy(e)," ",h.jsx("span",{children:"kWh"})]})]})},$0=N.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 36px;

  @media ${R} {
    margin-bottom: 100px;
  }

  @media ${O} {
    margin-bottom: 120px;
  }
`,j0=N.div`
  margin-bottom: 20px;

  @media ${R} {
    display: flex;
    gap: 90px;

    margin-bottom: 32px;
  }

  @media ${O} {
    gap: 205px;
    margin-bottom: 120px;
  }
`,N0=N.h2`
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

  @media ${O} {
    width: 398px;

    font-size: 48px;
    line-height: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }
`,P0=N.div`
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
`,z0=N.p`
  display: block;
  font-size: 28px;
  letter-spacing: -1.12px;

  @media ${R} {
    display: flex;
    margin-left: 10px;
  }

  @media ${O} {
    margin-left: 161px;
  }

  > span {
    color: rgba(23, 61, 51, 0.25);
  }
`,D0=N.div`
  display: flex;
  gap: 12px;

  @media ${R} {
    margin-left: 126px;
  }

  @media ${O} {
    margin-left: 193px;
  }
`,zc=N.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border: 1px solid #173d33;
  border-radius: 50%;

  @media ${O} {
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
`,T0=N.ul`
  @media ${R} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  @media ${O} {
    gap: 48px;
  }

  & > li:nth-child(2) {
    @media (max-width: 767px) {
      display: none;
    }
  }
`,L0=N.li`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  height: auto;

  background-color: #eaedf1;

  @media ${R} {
  }

  @media ${O} {
    max-width: 596px;
  }
`,F0=N.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`,R0=N.div`
  padding: 24px 12px 12px;

  @media ${O} {
    padding: 36px 48px;
  }

  & > span {
    display: block;
    width: 100%;
    height: 1px;
    margin: 21px 0 12px 0;

    background-color: #97d28b;
  }
`,I0=N.div`
  display: flex;
  justify-content: space-between;
`,O0=N.p`
  width: 175px;

  font-size: 18px;
  letter-spacing: -0.72px;

  @media ${R} {
    width: 195px;
    height: 66px;

    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media ${O} {
    width: 357px;
    height: auto;

    font-size: 24px;
    letter-spacing: -0.64px;
  }
`,A0=N.button`
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
`,M0=N.div`
  display: flex;
  justify-content: space-between;
`,V0=N.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${R} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${O} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,B0=N.p`
  font-size: 12px;
  letter-spacing: -0.48px;

  @media ${R} {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media ${O} {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,U0=({img:e,img2x:t,alt:n,title:r,description:i,date:o})=>h.jsxs(L0,{children:[h.jsx(F0,{src:e,alt:`${n}`,srcSet:`${e} 1x, ${t} 2x`}),h.jsxs(R0,{children:[h.jsxs(I0,{children:[h.jsx(O0,{children:r}),h.jsx(A0,{children:h.jsx(q,{iconName:"icon-arrow-top-right"})})]}),h.jsx("span",{}),h.jsxs(M0,{children:[h.jsx(V0,{children:i}),h.jsx(B0,{children:o})]})]})]}),W0=()=>{const[e,t]=je.useState([0,1]),n=()=>{t(i=>{const o=i[0]===0?zr.length-1:i[0]-1,l=i[1]===0?zr.length-1:i[1]-1;return[o,l]})},r=()=>{t(i=>{const o=i[0]===zr.length-1?0:i[0]+1,l=i[1]===zr.length-1?0:i[1]+1;return[o,l]})};return h.jsxs($0,{children:[h.jsxs(j0,{children:[h.jsx(N0,{children:"Successful cases of our company"}),h.jsxs(P0,{children:[h.jsx("span",{}),h.jsxs(z0,{children:[`${(e[0]+1).toString().padStart(2,"0")}`,h.jsx("span",{children:" /05"})]}),h.jsxs(D0,{children:[h.jsx(zc,{onClick:n,children:h.jsx(q,{iconName:"icon-arrow-left-slider",stroke:"#000"})}),h.jsx(zc,{onClick:r,children:h.jsx(q,{iconName:"icon-arrow-right-slider",stroke:"#000"})})]})]})]}),h.jsx(T0,{children:e.map(i=>h.jsx(U0,{...zr[i]},i))})]})},H0=N.section`
  margin-bottom: 36px;

  @media ${R} {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
    margin-bottom: 100px;
  }

  @media ${O} {
    justify-content: space-between;
    gap: 0;
    margin-bottom: 120px;
  }
`,Q0=N.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${R} {
    display: flex;
  }
`,K0=N.h2`
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

  @media ${O} {
    width: 398px;
    font-size: 48px;
    line-height: 48px;
  }
`,G0=N.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 296px;
`,Y0=N.li`
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

  @media ${O} {
    width: 596px;
  }
`,X0=N.div`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  @media ${R} {
    gap: 16px;
  }

  @media ${O} {
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
`,Z0=N.h3`
  margin-bottom: ${({open:e})=>e?"16px":"0"};

  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media ${O} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,q0=N.p`
  margin-left: 24px;

  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media ${R} {
    margin-left: 44px;
  }

  @media ${O} {
    margin-left: 52px;

    font-size: 16px;
    letter-spacing: -0.64px;
  }
`,J0=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`,b0=N.p`
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media ${O} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`,e1=N.button`
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
`,t1=N.div`
  margin-top: 36px;

  @media ${R} {
    display: none;
  }
`,n1=({question:e,answer:t,toggleAccordion:n,isOpen:r})=>h.jsxs(Y0,{children:[h.jsxs(X0,{onClick:n,children:[h.jsx(q,{iconName:r?"icon-minus":"icon-plus"}),h.jsx(Z0,{open:r,children:e})]}),r&&h.jsx(q0,{children:t})]}),Dc=()=>h.jsxs(J0,{children:[h.jsxs(b0,{children:["Didn't find the answer to your question?"," "]}),h.jsx(e1,{children:"Contact us"})]}),r1=()=>{const[e,t]=je.useState(_c[0].id),n=r=>{t(r===e?null:r)};return h.jsxs(H0,{children:[h.jsxs(Q0,{children:[h.jsx(K0,{children:"Frequently Asked Questions"}),h.jsx(Dc,{})]}),h.jsx(G0,{children:_c.map(({id:r,question:i,answer:o})=>h.jsx(n1,{question:i,answer:o,toggleAccordion:()=>n(r),isOpen:r===e},r))}),h.jsx(t1,{children:h.jsx(Dc,{})})]})},i1=N.section`
  margin-bottom: 36px;

  @media ${R} {
    flex-direction: row;
    margin-bottom: 100px;
  }

  @media ${O} {
    margin-bottom: 120px;
  }
`,o1=N.h2`
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

  @media ${O} {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`,l1=N.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${R} {
    flex-direction: row;
    justify-content: space-between;
  }
`,s1=N.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${R} {
    width: 244px;
  }

  @media ${O} {
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

  @media ${O} {
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
      stroke: #173d33;
    }
  }

  &:hover {
    & > svg > use {
      stroke: #97d28b;
    }
  }
`,u1=N.div`
  /* display: flex; */
  /* flex-direction: column; */

  /* & > a:last-child {
    margin-left: 32px;
    @media ${O} {
      margin-left: 8px;
    }
  } */

  & > div {
    display: flex;
    gap: 32px;

    @media ${O} {
      gap: 8px;
    }
  }
`,Tc=N.a`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 24px;
    height: 24px;

    & > use {
      stroke: #173d33;
    }
  }

  &:hover {
    & > svg > use {
      stroke: #97d28b;
    }
  }
`,a1=N.form`
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

  @media ${O} {
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
`,Vl=N.input`
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

  @media ${O} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`,c1=N.textarea`
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

  @media ${O} {
    font-size: 20px;
    letter-spacing: -0.8px;
  }
`,f1=N.button`
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
`,Bl=N.span`
  position: absolute;
  bottom: -25px;
  right: 0;
  text-align: right;
  font-size: 12px;
  line-height: normal;
  letter-spacing: -0.48px;

  color: #d28b8b;
`,d1=()=>h.jsxs(s1,{children:[h.jsxs("div",{children:[h.jsx(Mi,{children:"Phone:"}),h.jsxs(Vi,{children:[h.jsx(q,{iconName:"icon-phone"}),"38 (098) 12 34 567"]}),h.jsxs(Vi,{style:{marginTop:"12px"},children:[h.jsx(q,{iconName:"icon-phone"}),"38 (093) 12 34 567"]})]}),h.jsxs("div",{children:[h.jsx(Mi,{children:"E-mail:"}),h.jsxs(Vi,{children:[h.jsx(q,{iconName:"icon-email"}),"office@ecosolution.com"]})]}),h.jsxs("div",{children:[h.jsx(Mi,{children:"Address:"}),h.jsxs(Vi,{children:[h.jsx(q,{iconName:"icon-map",width:24,height:24,stroke:"#173D33"}),"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"]})]}),h.jsxs(u1,{children:[h.jsx(Mi,{children:"Social Networks:"}),h.jsxs("div",{children:[h.jsx(Tc,{href:"#",children:h.jsx(q,{iconName:"icon-facebook"})}),h.jsx(Tc,{href:"#",children:h.jsx(q,{iconName:"icon-instagram"})})]})]})]});var vi=e=>e.type==="checkbox",er=e=>e instanceof Date,Me=e=>e==null;const Np=e=>typeof e=="object";var Se=e=>!Me(e)&&!Array.isArray(e)&&Np(e)&&!er(e),p1=e=>Se(e)&&e.target?vi(e.target)?e.target.checked:e.target.value:e,h1=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,m1=(e,t)=>e.has(h1(t)),g1=e=>{const t=e.constructor&&e.constructor.prototype;return Se(t)&&t.hasOwnProperty("isPrototypeOf")},Yu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Lt(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Yu&&(e instanceof Blob||e instanceof FileList))&&(n||Se(e)))if(t=n?[]:{},!n&&!g1(e))t=e;else for(const r in e)e.hasOwnProperty(r)&&(t[r]=Lt(e[r]));else return e;return t}var xi=e=>Array.isArray(e)?e.filter(Boolean):[],he=e=>e===void 0,I=(e,t,n)=>{if(!t||!Se(e))return n;const r=xi(t.split(/[,[\].]+?/)).reduce((i,o)=>Me(i)?i:i[o],e);return he(r)||r===e?he(e[t])?n:e[t]:r},qt=e=>typeof e=="boolean";const Lc={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Tt={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};se.createContext(null);var y1=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const l=o;return t._proxyFormState[l]!==vt.all&&(t._proxyFormState[l]=!r||vt.all),n&&(n[l]=!0),e[l]}});return i},ot=e=>Se(e)&&!Object.keys(e).length,v1=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return ot(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(l=>t[l]===(!r||vt.all))},Ul=e=>Array.isArray(e)?e:[e];function x1(e){const t=se.useRef(e);t.current=e,se.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Pt=e=>typeof e=="string",w1=(e,t,n,r,i)=>Pt(e)?(r&&t.watch.add(e),I(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),I(n,o))):(r&&(t.watchAll=!0),n),Xu=e=>/^\w*$/.test(e),Pp=e=>xi(e.replace(/["|']|\]/g,"").split(/\.|\[/));function le(e,t,n){let r=-1;const i=Xu(t)?[t]:Pp(t),o=i.length,l=o-1;for(;++r<o;){const s=i[r];let u=n;if(r!==l){const c=e[s];u=Se(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[s]=u,e=e[s]}return e}var S1=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Fc=e=>({isOnSubmit:!e||e===vt.onSubmit,isOnBlur:e===vt.onBlur,isOnChange:e===vt.onChange,isOnAll:e===vt.all,isOnTouch:e===vt.onTouched}),Rc=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const lo=(e,t,n,r)=>{for(const i of n||Object.keys(e)){const o=I(e,i);if(o){const{_f:l,...s}=o;if(l){if(l.refs&&l.refs[0]&&t(l.refs[0],i)&&!r)break;if(l.ref&&t(l.ref,l.name)&&!r)break}else Se(s)&&lo(s,t)}}};var k1=(e,t,n)=>{const r=xi(I(e,n));return le(r,"root",t[n]),le(e,n,r),e},Zu=e=>e.type==="file",en=e=>typeof e=="function",Oo=e=>{if(!Yu)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},so=e=>Pt(e),qu=e=>e.type==="radio",Ao=e=>e instanceof RegExp;const Ic={value:!1,isValid:!1},Oc={value:!0,isValid:!0};var zp=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!he(e[0].attributes.value)?he(e[0].value)||e[0].value===""?Oc:{value:e[0].value,isValid:!0}:Oc:Ic}return Ic};const Ac={isValid:!1,value:null};var Dp=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Ac):Ac;function Mc(e,t,n="validate"){if(so(e)||Array.isArray(e)&&e.every(so)||qt(e)&&!e)return{type:n,message:so(e)?e:"",ref:t}}var Vn=e=>Se(e)&&!Ao(e)?e:{value:e,message:""},Vc=async(e,t,n,r,i)=>{const{ref:o,refs:l,required:s,maxLength:u,minLength:c,min:y,max:g,pattern:m,validate:w,name:k,valueAsNumber:C,mount:U,disabled:p}=e._f,a=I(t,k);if(!U||p)return{};const f=l?l[0]:o,x=Q=>{r&&f.reportValidity&&(f.setCustomValidity(qt(Q)?"":Q||""),f.reportValidity())},E={},j=qu(o),_=vi(o),L=j||_,K=(C||Zu(o))&&he(o.value)&&he(a)||Oo(o)&&o.value===""||a===""||Array.isArray(a)&&!a.length,B=S1.bind(null,k,n,E),ae=(Q,W,b,ke=Tt.maxLength,Ee=Tt.minLength)=>{const _e=Q?W:b;E[k]={type:Q?ke:Ee,message:_e,ref:o,...B(Q?ke:Ee,_e)}};if(i?!Array.isArray(a)||!a.length:s&&(!L&&(K||Me(a))||qt(a)&&!a||_&&!zp(l).isValid||j&&!Dp(l).isValid)){const{value:Q,message:W}=so(s)?{value:!!s,message:s}:Vn(s);if(Q&&(E[k]={type:Tt.required,message:W,ref:f,...B(Tt.required,W)},!n))return x(W),E}if(!K&&(!Me(y)||!Me(g))){let Q,W;const b=Vn(g),ke=Vn(y);if(!Me(a)&&!isNaN(a)){const Ee=o.valueAsNumber||a&&+a;Me(b.value)||(Q=Ee>b.value),Me(ke.value)||(W=Ee<ke.value)}else{const Ee=o.valueAsDate||new Date(a),_e=V=>new Date(new Date().toDateString()+" "+V),z=o.type=="time",A=o.type=="week";Pt(b.value)&&a&&(Q=z?_e(a)>_e(b.value):A?a>b.value:Ee>new Date(b.value)),Pt(ke.value)&&a&&(W=z?_e(a)<_e(ke.value):A?a<ke.value:Ee<new Date(ke.value))}if((Q||W)&&(ae(!!Q,b.message,ke.message,Tt.max,Tt.min),!n))return x(E[k].message),E}if((u||c)&&!K&&(Pt(a)||i&&Array.isArray(a))){const Q=Vn(u),W=Vn(c),b=!Me(Q.value)&&a.length>+Q.value,ke=!Me(W.value)&&a.length<+W.value;if((b||ke)&&(ae(b,Q.message,W.message),!n))return x(E[k].message),E}if(m&&!K&&Pt(a)){const{value:Q,message:W}=Vn(m);if(Ao(Q)&&!a.match(Q)&&(E[k]={type:Tt.pattern,message:W,ref:o,...B(Tt.pattern,W)},!n))return x(W),E}if(w){if(en(w)){const Q=await w(a,t),W=Mc(Q,f);if(W&&(E[k]={...W,...B(Tt.validate,W.message)},!n))return x(W.message),E}else if(Se(w)){let Q={};for(const W in w){if(!ot(Q)&&!n)break;const b=Mc(await w[W](a,t),f,W);b&&(Q={...b,...B(W,b.message)},x(b.message),n&&(E[k]=Q))}if(!ot(Q)&&(E[k]={ref:f,...Q},!n))return E}}return x(!0),E};function E1(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=he(e)?r++:e[t[r++]];return e}function _1(e){for(const t in e)if(e.hasOwnProperty(t)&&!he(e[t]))return!1;return!0}function ze(e,t){const n=Array.isArray(t)?t:Xu(t)?[t]:Pp(t),r=n.length===1?e:E1(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(Se(r)&&ot(r)||Array.isArray(r)&&_1(r))&&ze(e,n.slice(0,-1)),e}function Wl(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var Mo=e=>Me(e)||!Np(e);function _n(e,t){if(Mo(e)||Mo(t))return e===t;if(er(e)&&er(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const l=t[i];if(er(o)&&er(l)||Se(o)&&Se(l)||Array.isArray(o)&&Array.isArray(l)?!_n(o,l):o!==l)return!1}}return!0}var Tp=e=>e.type==="select-multiple",C1=e=>qu(e)||vi(e),Hl=e=>Oo(e)&&e.isConnected,Lp=e=>{for(const t in e)if(en(e[t]))return!0;return!1};function Vo(e,t={}){const n=Array.isArray(e);if(Se(e)||n)for(const r in e)Array.isArray(e[r])||Se(e[r])&&!Lp(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Vo(e[r],t[r])):Me(e[r])||(t[r]=!0);return t}function Fp(e,t,n){const r=Array.isArray(e);if(Se(e)||r)for(const i in e)Array.isArray(e[i])||Se(e[i])&&!Lp(e[i])?he(t)||Mo(n[i])?n[i]=Array.isArray(e[i])?Vo(e[i],[]):{...Vo(e[i])}:Fp(e[i],Me(t)?{}:t[i],n[i]):n[i]=!_n(e[i],t[i]);return n}var Ql=(e,t)=>Fp(e,t,Vo(t)),Rp=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>he(e)?e:t?e===""?NaN:e&&+e:n&&Pt(e)?new Date(e):r?r(e):e;function Kl(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Zu(t)?t.files:qu(t)?Dp(e.refs).value:Tp(t)?[...t.selectedOptions].map(({value:n})=>n):vi(t)?zp(e.refs).value:Rp(he(t.value)?e.ref.value:t.value,e)}var $1=(e,t,n,r)=>{const i={};for(const o of e){const l=I(t,o);l&&le(i,o,l._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Dr=e=>he(e)?e:Ao(e)?e.source:Se(e)?Ao(e.value)?e.value.source:e.value:e,j1=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Bc(e,t,n){const r=I(e,n);if(r||Xu(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),l=I(t,o),s=I(e,o);if(l&&!Array.isArray(l)&&n!==o)return{name:n};if(s&&s.type)return{name:o,error:s};i.pop()}return{name:n}}var N1=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,P1=(e,t)=>!xi(I(e,t)).length&&ze(e,t);const z1={mode:vt.onSubmit,reValidateMode:vt.onChange,shouldFocusError:!0};function D1(e={},t){let n={...z1,...e},r={submitCount:0,isDirty:!1,isLoading:en(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{},disabled:!1},i={},o=Se(n.defaultValues)||Se(n.values)?Lt(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:Lt(o),s={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,y=0;const g={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={values:Wl(),array:Wl(),state:Wl()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,k=Fc(n.mode),C=Fc(n.reValidateMode),U=n.criteriaMode===vt.all,p=d=>v=>{clearTimeout(y),y=setTimeout(d,v)},a=async d=>{if(g.isValid||d){const v=n.resolver?ot((await K()).errors):await ae(i,!0);v!==r.isValid&&m.state.next({isValid:v})}},f=d=>g.isValidating&&m.state.next({isValidating:d}),x=(d,v=[],S,F,D=!0,P=!0)=>{if(F&&S){if(s.action=!0,P&&Array.isArray(I(i,d))){const M=S(I(i,d),F.argA,F.argB);D&&le(i,d,M)}if(P&&Array.isArray(I(r.errors,d))){const M=S(I(r.errors,d),F.argA,F.argB);D&&le(r.errors,d,M),P1(r.errors,d)}if(g.touchedFields&&P&&Array.isArray(I(r.touchedFields,d))){const M=S(I(r.touchedFields,d),F.argA,F.argB);D&&le(r.touchedFields,d,M)}g.dirtyFields&&(r.dirtyFields=Ql(o,l)),m.state.next({name:d,isDirty:W(d,v),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else le(l,d,v)},E=(d,v)=>{le(r.errors,d,v),m.state.next({errors:r.errors})},j=(d,v,S,F)=>{const D=I(i,d);if(D){const P=I(l,d,he(S)?I(o,d):S);he(P)||F&&F.defaultChecked||v?le(l,d,v?P:Kl(D._f)):Ee(d,P),s.mount&&a()}},_=(d,v,S,F,D)=>{let P=!1,M=!1;const ee={name:d};if(!S||F){g.isDirty&&(M=r.isDirty,r.isDirty=ee.isDirty=W(),P=M!==ee.isDirty);const ge=_n(I(o,d),v);M=I(r.dirtyFields,d),ge?ze(r.dirtyFields,d):le(r.dirtyFields,d,!0),ee.dirtyFields=r.dirtyFields,P=P||g.dirtyFields&&M!==!ge}if(S){const ge=I(r.touchedFields,d);ge||(le(r.touchedFields,d,S),ee.touchedFields=r.touchedFields,P=P||g.touchedFields&&ge!==S)}return P&&D&&m.state.next(ee),P?ee:{}},L=(d,v,S,F)=>{const D=I(r.errors,d),P=g.isValid&&qt(v)&&r.isValid!==v;if(e.delayError&&S?(c=p(()=>E(d,S)),c(e.delayError)):(clearTimeout(y),c=null,S?le(r.errors,d,S):ze(r.errors,d)),(S?!_n(D,S):D)||!ot(F)||P){const M={...F,...P&&qt(v)?{isValid:v}:{},errors:r.errors,name:d};r={...r,...M},m.state.next(M)}f(!1)},K=async d=>n.resolver(l,n.context,$1(d||u.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),B=async d=>{const{errors:v}=await K(d);if(d)for(const S of d){const F=I(v,S);F?le(r.errors,S,F):ze(r.errors,S)}else r.errors=v;return v},ae=async(d,v,S={valid:!0})=>{for(const F in d){const D=d[F];if(D){const{_f:P,...M}=D;if(P){const ee=u.array.has(P.name),ge=await Vc(D,l,U,n.shouldUseNativeValidation&&!v,ee);if(ge[P.name]&&(S.valid=!1,v))break;!v&&(I(ge,P.name)?ee?k1(r.errors,ge,P.name):le(r.errors,P.name,ge[P.name]):ze(r.errors,P.name))}M&&await ae(M,v,S)}}return S.valid},Q=()=>{for(const d of u.unMount){const v=I(i,d);v&&(v._f.refs?v._f.refs.every(S=>!Hl(S)):!Hl(v._f.ref))&&Qe(d)}u.unMount=new Set},W=(d,v)=>(d&&v&&le(l,d,v),!_n(oe(),o)),b=(d,v,S)=>w1(d,u,{...s.mount?l:he(v)?o:Pt(d)?{[d]:v}:v},S,v),ke=d=>xi(I(s.mount?l:o,d,e.shouldUnregister?I(o,d,[]):[])),Ee=(d,v,S={})=>{const F=I(i,d);let D=v;if(F){const P=F._f;P&&(!P.disabled&&le(l,d,Rp(v,P)),D=Oo(P.ref)&&Me(v)?"":v,Tp(P.ref)?[...P.ref.options].forEach(M=>M.selected=D.includes(M.value)):P.refs?vi(P.ref)?P.refs.length>1?P.refs.forEach(M=>(!M.defaultChecked||!M.disabled)&&(M.checked=Array.isArray(D)?!!D.find(ee=>ee===M.value):D===M.value)):P.refs[0]&&(P.refs[0].checked=!!D):P.refs.forEach(M=>M.checked=M.value===D):Zu(P.ref)?P.ref.value="":(P.ref.value=D,P.ref.type||m.values.next({name:d,values:{...l}})))}(S.shouldDirty||S.shouldTouch)&&_(d,D,S.shouldTouch,S.shouldDirty,!0),S.shouldValidate&&Y(d)},_e=(d,v,S)=>{for(const F in v){const D=v[F],P=`${d}.${F}`,M=I(i,P);(u.array.has(d)||!Mo(D)||M&&!M._f)&&!er(D)?_e(P,D,S):Ee(P,D,S)}},z=(d,v,S={})=>{const F=I(i,d),D=u.array.has(d),P=Lt(v);le(l,d,P),D?(m.array.next({name:d,values:{...l}}),(g.isDirty||g.dirtyFields)&&S.shouldDirty&&m.state.next({name:d,dirtyFields:Ql(o,l),isDirty:W(d,P)})):F&&!F._f&&!Me(P)?_e(d,P,S):Ee(d,P,S),Rc(d,u)&&m.state.next({...r}),m.values.next({name:d,values:{...l}}),!s.mount&&t()},A=async d=>{const v=d.target;let S=v.name,F=!0;const D=I(i,S),P=()=>v.type?Kl(D._f):p1(d),M=ee=>{F=Number.isNaN(ee)||ee===I(l,S,ee)};if(D){let ee,ge;const wi=P(),On=d.type===Lc.BLUR||d.type===Lc.FOCUS_OUT,Op=!j1(D._f)&&!n.resolver&&!I(r.errors,S)&&!D._f.deps||N1(On,I(r.touchedFields,S),r.isSubmitted,C,k),ul=Rc(S,u,On);le(l,S,wi),On?(D._f.onBlur&&D._f.onBlur(d),c&&c(0)):D._f.onChange&&D._f.onChange(d);const al=_(S,wi,On,!1),Ap=!ot(al)||ul;if(!On&&m.values.next({name:S,type:d.type,values:{...l}}),Op)return g.isValid&&a(),Ap&&m.state.next({name:S,...ul?{}:al});if(!On&&ul&&m.state.next({...r}),f(!0),n.resolver){const{errors:ta}=await K([S]);if(M(wi),F){const Mp=Bc(r.errors,i,S),na=Bc(ta,i,Mp.name||S);ee=na.error,S=na.name,ge=ot(ta)}}else ee=(await Vc(D,l,U,n.shouldUseNativeValidation))[S],M(wi),F&&(ee?ge=!1:g.isValid&&(ge=await ae(i,!0)));F&&(D._f.deps&&Y(D._f.deps),L(S,ge,ee,al))}},V=(d,v)=>{if(I(r.errors,v)&&d.focus)return d.focus(),1},Y=async(d,v={})=>{let S,F;const D=Ul(d);if(f(!0),n.resolver){const P=await B(he(d)?d:D);S=ot(P),F=d?!D.some(M=>I(P,M)):S}else d?(F=(await Promise.all(D.map(async P=>{const M=I(i,P);return await ae(M&&M._f?{[P]:M}:M)}))).every(Boolean),!(!F&&!r.isValid)&&a()):F=S=await ae(i);return m.state.next({...!Pt(d)||g.isValid&&S!==r.isValid?{}:{name:d},...n.resolver||!d?{isValid:S}:{},errors:r.errors,isValidating:!1}),v.shouldFocus&&!F&&lo(i,V,d?D:u.mount),F},oe=d=>{const v={...o,...s.mount?l:{}};return he(d)?v:Pt(d)?I(v,d):d.map(S=>I(v,S))},pt=(d,v)=>({invalid:!!I((v||r).errors,d),isDirty:!!I((v||r).dirtyFields,d),isTouched:!!I((v||r).touchedFields,d),error:I((v||r).errors,d)}),We=d=>{d&&Ul(d).forEach(v=>ze(r.errors,v)),m.state.next({errors:d?r.errors:{}})},it=(d,v,S)=>{const F=(I(i,d,{_f:{}})._f||{}).ref;le(r.errors,d,{...v,ref:F}),m.state.next({name:d,errors:r.errors,isValid:!1}),S&&S.shouldFocus&&F&&F.focus&&F.focus()},He=(d,v)=>en(d)?m.values.subscribe({next:S=>d(b(void 0,v),S)}):b(d,v,!0),Qe=(d,v={})=>{for(const S of d?Ul(d):u.mount)u.mount.delete(S),u.array.delete(S),v.keepValue||(ze(i,S),ze(l,S)),!v.keepError&&ze(r.errors,S),!v.keepDirty&&ze(r.dirtyFields,S),!v.keepTouched&&ze(r.touchedFields,S),!n.shouldUnregister&&!v.keepDefaultValue&&ze(o,S);m.values.next({values:{...l}}),m.state.next({...r,...v.keepDirty?{isDirty:W()}:{}}),!v.keepIsValid&&a()},Et=({disabled:d,name:v,field:S,fields:F,value:D})=>{if(qt(d)){const P=d?void 0:he(D)?Kl(S?S._f:I(F,v)._f):D;le(l,v,P),_(v,P,!1,!1,!0)}},gn=(d,v={})=>{let S=I(i,d);const F=qt(v.disabled);return le(i,d,{...S||{},_f:{...S&&S._f?S._f:{ref:{name:d}},name:d,mount:!0,...v}}),u.mount.add(d),S?Et({field:S,disabled:v.disabled,name:d}):j(d,!0,v.value),{...F?{disabled:v.disabled}:{},...n.progressive?{required:!!v.required,min:Dr(v.min),max:Dr(v.max),minLength:Dr(v.minLength),maxLength:Dr(v.maxLength),pattern:Dr(v.pattern)}:{},name:d,onChange:A,onBlur:A,ref:D=>{if(D){gn(d,v),S=I(i,d);const P=he(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,M=C1(P),ee=S._f.refs||[];if(M?ee.find(ge=>ge===P):P===S._f.ref)return;le(i,d,{_f:{...S._f,...M?{refs:[...ee.filter(Hl),P,...Array.isArray(I(o,d))?[{}]:[]],ref:{type:P.type,name:d}}:{ref:P}}}),j(d,!1,void 0,P)}else S=I(i,d,{}),S._f&&(S._f.mount=!1),(n.shouldUnregister||v.shouldUnregister)&&!(m1(u.array,d)&&s.action)&&u.unMount.add(d)}}},yn=()=>n.shouldFocusError&&lo(i,V,u.mount),_t=d=>{qt(d)&&(m.state.next({disabled:d}),lo(i,v=>{v.disabled=d},0,!1))},Ju=(d,v)=>async S=>{S&&(S.preventDefault&&S.preventDefault(),S.persist&&S.persist());let F=Lt(l);if(m.state.next({isSubmitting:!0}),n.resolver){const{errors:D,values:P}=await K();r.errors=D,F=P}else await ae(i);ze(r.errors,"root"),ot(r.errors)?(m.state.next({errors:{}}),await d(F,S)):(v&&await v({...r.errors},S),yn(),setTimeout(yn)),m.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ot(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Ip=(d,v={})=>{I(i,d)&&(he(v.defaultValue)?z(d,I(o,d)):(z(d,v.defaultValue),le(o,d,v.defaultValue)),v.keepTouched||ze(r.touchedFields,d),v.keepDirty||(ze(r.dirtyFields,d),r.isDirty=v.defaultValue?W(d,I(o,d)):W()),v.keepError||(ze(r.errors,d),g.isValid&&a()),m.state.next({...r}))},bu=(d,v={})=>{const S=d?Lt(d):o,F=Lt(S),D=d&&!ot(d)?F:o;if(v.keepDefaultValues||(o=S),!v.keepValues){if(v.keepDirtyValues||w)for(const P of u.mount)I(r.dirtyFields,P)?le(D,P,I(l,P)):z(P,I(D,P));else{if(Yu&&he(d))for(const P of u.mount){const M=I(i,P);if(M&&M._f){const ee=Array.isArray(M._f.refs)?M._f.refs[0]:M._f.ref;if(Oo(ee)){const ge=ee.closest("form");if(ge){ge.reset();break}}}}i={}}l=e.shouldUnregister?v.keepDefaultValues?Lt(o):{}:Lt(D),m.array.next({values:{...D}}),m.values.next({values:{...D}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!g.isValid||!!v.keepIsValid,s.watch=!!e.shouldUnregister,m.state.next({submitCount:v.keepSubmitCount?r.submitCount:0,isDirty:v.keepDirty?r.isDirty:!!(v.keepDefaultValues&&!_n(d,o)),isSubmitted:v.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:v.keepDirtyValues?r.dirtyFields:v.keepDefaultValues&&d?Ql(o,d):{},touchedFields:v.keepTouched?r.touchedFields:{},errors:v.keepErrors?r.errors:{},isSubmitSuccessful:v.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},ea=(d,v)=>bu(en(d)?d(l):d,v);return{control:{register:gn,unregister:Qe,getFieldState:pt,handleSubmit:Ju,setError:it,_executeSchema:K,_getWatch:b,_getDirty:W,_updateValid:a,_removeUnmounted:Q,_updateFieldArray:x,_updateDisabledField:Et,_getFieldArray:ke,_reset:bu,_resetDefaultValues:()=>en(n.defaultValues)&&n.defaultValues().then(d=>{ea(d,n.resetOptions),m.state.next({isLoading:!1})}),_updateFormState:d=>{r={...r,...d}},_disableForm:_t,_subjects:m,_proxyFormState:g,get _fields(){return i},get _formValues(){return l},get _state(){return s},set _state(d){s=d},get _defaultValues(){return o},get _names(){return u},set _names(d){u=d},get _formState(){return r},set _formState(d){r=d},get _options(){return n},set _options(d){n={...n,...d}}},trigger:Y,register:gn,handleSubmit:Ju,watch:He,setValue:z,getValues:oe,reset:ea,resetField:Ip,clearErrors:We,unregister:Qe,setError:it,setFocus:(d,v={})=>{const S=I(i,d),F=S&&S._f;if(F){const D=F.refs?F.refs[0]:F.ref;D.focus&&(D.focus(),v.shouldSelect&&D.select())}},getFieldState:pt}}function T1(e={}){const t=se.useRef(),n=se.useRef(),[r,i]=se.useState({isDirty:!1,isValidating:!1,isLoading:en(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},disabled:!1,defaultValues:en(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...D1(e,()=>i(l=>({...l}))),formState:r});const o=t.current.control;return o._options=e,x1({subject:o._subjects.state,next:l=>{v1(l,o._proxyFormState,o._updateFormState,!0)&&i({...o._formState})}}),se.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),se.useEffect(()=>{if(o._proxyFormState.isDirty){const l=o._getDirty();l!==r.isDirty&&o._subjects.state.next({isDirty:l})}},[o,r.isDirty]),se.useEffect(()=>{e.values&&!_n(e.values,n.current)?(o._reset(e.values,o._options.resetOptions),n.current=e.values):o._resetDefaultValues()},[e.values,o]),se.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=y1(r,o),t.current}const L1=()=>{const{register:e,handleSubmit:t,reset:n,formState:{errors:r}}=T1({defaultValues:{name:"",email:"",phone:"",message:""}}),i=o=>(console.log(o),n());return h.jsx(ay,{shouldForwardProp:o=>o!=="error",children:h.jsxs(a1,{onSubmit:t(i),children:[h.jsxs(Bi,{children:["* Full name:",h.jsx(Vl,{type:"text",placeholder:"John Rosie",error:r.name,...e("name",{required:!0})}),r.name&&h.jsx(Bl,{children:"Wrong Fullname"})]}),h.jsxs(Bi,{children:["* E-mail:",h.jsx(Vl,{type:"email",placeholder:"johnrosie@gmail.com",error:r.email,...e("email",{required:!0})}),r.email&&h.jsx(Bl,{children:"Wrong Email"})]}),h.jsxs(Bi,{children:["* Phone:",h.jsx(Vl,{type:"number",placeholder:"380961234567",error:r.phone,...e("phone",{required:!0})}),r.phone&&h.jsx(Bl,{children:"Wrong Phone"})]}),h.jsxs(Bi,{children:["Message:",h.jsx(c1,{placeholder:"My message....",...e("message",{required:!1})})]}),h.jsxs(f1,{type:"submit",children:["Send",h.jsx("span",{children:h.jsx(q,{iconName:"icon-arrow-right",width:"16px",height:"16px",stroke:"#173D33"})})]})]})})},F1=()=>h.jsxs(i1,{children:[h.jsx(o1,{children:"Contact us"}),h.jsxs(l1,{children:[h.jsx(d1,{}),h.jsx(L1,{})]})]}),R1=()=>h.jsxs(qy,{children:[h.jsx(S0,{}),h.jsx(a0,{}),h.jsx(C0,{}),h.jsx(W0,{}),h.jsx(r1,{}),h.jsx(F1,{})]}),I1=N.footer`
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
`,O1=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,A1=N.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${R} {
    width: 342px;
  }

  @media ${O} {
    width: 405px;
  }

  & > div {
    display: none;

    @media ${R} {
      display: flex;
    }
  }
`,M1=N.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 500px;

  line-height: 18px;
  letter-spacing: -0.64px;
  background-color: #97d28b;

  &:hover {
    background-color: #173d33;

    & > svg > use {
      stroke: #97d28b;
    }
  }

  & > svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    & > use {
      stroke: #173d33;
    }
  }
`,Uc=N.div`
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
    }
  }

  &:hover {
    & > svg > use {
      stroke: #97d28b;
    }
  }
`,V1=N.div`
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

    @media ${O} {
      width: 405px;
    }
  }
`,B1=()=>h.jsxs(I1,{children:[h.jsxs(O1,{children:[h.jsxs(jp,{href:"/",children:[h.jsx(q,{iconName:"icon-favicon_logo",width:"31px",height:"18px",fill:"inherit"}),h.jsx(q,{iconName:"icon-ecosolution",width:"170px",height:"40px",fill:"inherit"}),h.jsx(q,{iconName:"icon-greenergy",width:"60px",height:"18px",fill:"inherit"})]}),h.jsxs(A1,{children:[h.jsxs(Uc,{children:[h.jsx(Ui,{href:"#",children:h.jsx(q,{iconName:"icon-facebook"})}),h.jsx(Ui,{href:"#",children:h.jsx(q,{iconName:"icon-instagram"})})]}),h.jsx(M1,{onClick:()=>xy(),children:h.jsx(q,{iconName:"icon-arrow-top"})})]})]}),h.jsxs(Uc,{children:[h.jsx(Ui,{href:"#",children:h.jsx(q,{iconName:"icon-facebook"})}),h.jsx(Ui,{href:"#",children:h.jsx(q,{iconName:"icon-instagram"})})]}),h.jsxs(V1,{children:[h.jsx("p",{children:"79005, Ukraine, Lvivstreet. Shota Rustaveli, 7"}),h.jsxs("div",{children:[h.jsx("p",{children:"office@ecosolution.com"}),h.jsx("p",{children:"ecosolution © 2023"})]})]})]}),U1=()=>h.jsxs(h.Fragment,{children:[h.jsx(Zy,{}),h.jsx(R1,{}),h.jsx(B1,{})]}),W1={main:"FiraSans-Regular",secondary:"Oswald-Regular"},H1={phone:"(min-width: 480px)",tablet:"(min-width: 768px)",desktop:"(min-width: 1280px)"},Q1={main:"0px 8px 14px rgba(136, 198, 253, 0.19)",secondary:"7px 13px 14px rgba(116, 177, 232, 0.24)"},K1={xs:"10px",sm:"12px",md:"14px",ml:"16px",lg:"18px",xl:"20px",xxl:"28px",xxxl:"36px",big:"48px",huge:"64px",gigantic:"100px",mega:"164px"},G1="250ms cubic-bezier(0.4, 0, 0.2, 1)",Y1={colors:{backgroundMain:"#F3F5FA",textMain:"#173D33"},fonts:W1,media:H1,boxShadow:Q1,fontSizes:K1,transitionHover:G1},X1="/ecosolution/assets/FiraSans-Regular-GxcdJFZq.woff",Z1="/ecosolution/assets/Oswald-Regular-7O1fX0n8.woff",q1=[{fontFamily:"FiraSans-Regular",fontUrl:`${X1}`},{fontFamily:"Oswald-Regular",fontUrl:`${Z1}`}];function J1(){return fg(q1)?h.jsxs(hy,{theme:Y1,children:[h.jsx(wy,{}),h.jsx(U1,{})]}):h.jsx("div",{children:"Loading..."})}Gl.createRoot(document.getElementById("root")).render(h.jsx(se.StrictMode,{children:h.jsx(J1,{})}));
