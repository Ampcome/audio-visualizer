function MS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _v={exports:{}},yc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bS=Symbol.for("react.transitional.element"),TS=Symbol.for("react.fragment");function gv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:bS,type:t,key:i,ref:e!==void 0?e:null,props:n}}yc.Fragment=TS;yc.jsx=gv;yc.jsxs=gv;_v.exports=yc;var ae=_v.exports,vv={exports:{}},Xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=Symbol.for("react.transitional.element"),AS=Symbol.for("react.portal"),RS=Symbol.for("react.fragment"),CS=Symbol.for("react.strict_mode"),wS=Symbol.for("react.profiler"),DS=Symbol.for("react.consumer"),US=Symbol.for("react.context"),LS=Symbol.for("react.forward_ref"),NS=Symbol.for("react.suspense"),OS=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),Am=Symbol.iterator;function PS(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,Ev={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=Ev,this.updater=n||yv}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mv(){}Mv.prototype=Vs.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=Ev,this.updater=n||yv}var $d=Jd.prototype=new Mv;$d.constructor=Jd;Sv($d,Vs.prototype);$d.isPureReactComponent=!0;var Rm=Array.isArray,bt={H:null,A:null,T:null,S:null,V:null},bv=Object.prototype.hasOwnProperty;function ep(t,e,n,i,a,r){return n=r.ref,{$$typeof:Qd,type:t,key:e,ref:n!==void 0?n:null,props:r}}function zS(t,e){return ep(t.type,e,void 0,void 0,void 0,t.props)}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qd}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cm=/\/+/g;function Wc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function wm(){}function FS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(wm,wm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function qr(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Qd:case AS:s=!0;break;case xv:return s=t._init,qr(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+Wc(t,0):i,Rm(a)?(n="",s!=null&&(n=s.replace(Cm,"$&/")+"/"),qr(a,e,n,"",function(u){return u})):a!=null&&(tp(a)&&(a=zS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(Cm,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(Rm(t))for(var l=0;l<t.length;l++)i=t[l],r=o+Wc(i,l),s+=qr(i,e,n,r,a);else if(l=PS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+Wc(i,l++),s+=qr(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return qr(FS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function Cl(t,e,n){if(t==null)return t;var i=[],a=0;return qr(t,i,"","",function(r){return e.call(n,r,a++)}),i}function IS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Dm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function HS(){}Xe.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Vs;Xe.Fragment=RS;Xe.Profiler=wS;Xe.PureComponent=Jd;Xe.StrictMode=CS;Xe.Suspense=NS;Xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bt;Xe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return bt.H.useMemoCache(t)}};Xe.cache=function(t){return function(){return t.apply(null,arguments)}};Xe.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Sv({},t.props),a=t.key,r=void 0;if(e!=null)for(s in e.ref!==void 0&&(r=void 0),e.key!==void 0&&(a=""+e.key),e)!bv.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}return ep(t.type,a,void 0,void 0,r,i)};Xe.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:DS,_context:t},t};Xe.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)bv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return ep(t,r,void 0,void 0,null,a)};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:LS,render:t}};Xe.isValidElement=tp;Xe.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:IS}};Xe.memo=function(t,e){return{$$typeof:OS,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=bt.T,n={};bt.T=n;try{var i=t(),a=bt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(HS,Dm)}catch(r){Dm(r)}finally{bt.T=e}};Xe.unstable_useCacheRefresh=function(){return bt.H.useCacheRefresh()};Xe.use=function(t){return bt.H.use(t)};Xe.useActionState=function(t,e,n){return bt.H.useActionState(t,e,n)};Xe.useCallback=function(t,e){return bt.H.useCallback(t,e)};Xe.useContext=function(t){return bt.H.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t,e){return bt.H.useDeferredValue(t,e)};Xe.useEffect=function(t,e,n){var i=bt.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(t,e)};Xe.useId=function(){return bt.H.useId()};Xe.useImperativeHandle=function(t,e,n){return bt.H.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return bt.H.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return bt.H.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return bt.H.useMemo(t,e)};Xe.useOptimistic=function(t,e){return bt.H.useOptimistic(t,e)};Xe.useReducer=function(t,e,n){return bt.H.useReducer(t,e,n)};Xe.useRef=function(t){return bt.H.useRef(t)};Xe.useState=function(t){return bt.H.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return bt.H.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return bt.H.useTransition()};Xe.version="19.1.0";vv.exports=Xe;var te=vv.exports;const Tv=mv(te),GS=MS({__proto__:null,default:Tv},[te]);var Av={exports:{}},Sc={},Rv={exports:{}},Cv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,k){var z=L.length;L.push(k);e:for(;0<z;){var $=z-1>>>1,re=L[$];if(0<a(re,k))L[$]=k,L[z]=re,z=$;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],z=L.pop();if(z!==k){L[0]=z;e:for(var $=0,re=L.length,_e=re>>>1;$<_e;){var De=2*($+1)-1,qe=L[De],q=De+1,ne=L[q];if(0>a(qe,z))q<re&&0>a(ne,qe)?(L[$]=ne,L[q]=z,$=q):(L[$]=qe,L[De]=z,$=De);else if(q<re&&0>a(ne,z))L[$]=ne,L[q]=z,$=q;else break e}}return k}function a(L,k){var z=L.sortIndex-k.sortIndex;return z!==0?z:L.id-k.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],u=[],d=1,f=null,h=3,p=!1,x=!1,y=!1,m=!1,c=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function v(L){for(var k=n(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=L)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(u)}}function R(L){if(y=!1,v(L),!x)if(n(l)!==null)x=!0,C||(C=!0,X());else{var k=n(u);k!==null&&Y(R,k.startTime-L)}}var C=!1,A=-1,w=5,b=-1;function S(){return m?!0:!(t.unstable_now()-b<w)}function D(){if(m=!1,C){var L=t.unstable_now();b=L;var k=!0;try{e:{x=!1,y&&(y=!1,_(A),A=-1),p=!0;var z=h;try{t:{for(v(L),f=n(l);f!==null&&!(f.expirationTime>L&&S());){var $=f.callback;if(typeof $=="function"){f.callback=null,h=f.priorityLevel;var re=$(f.expirationTime<=L);if(L=t.unstable_now(),typeof re=="function"){f.callback=re,v(L),k=!0;break t}f===n(l)&&i(l),v(L)}else i(l);f=n(l)}if(f!==null)k=!0;else{var _e=n(u);_e!==null&&Y(R,_e.startTime-L),k=!1}}break e}finally{f=null,h=z,p=!1}k=void 0}}finally{k?X():C=!1}}}var X;if(typeof g=="function")X=function(){g(D)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,J=V.port2;V.port1.onmessage=D,X=function(){J.postMessage(null)}}else X=function(){c(D,0)};function Y(L,k){A=c(function(){L(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return L()}finally{h=z}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(L,k,z){var $=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=z+re,L={id:d++,callback:k,priorityLevel:L,startTime:z,expirationTime:re,sortIndex:-1},z>$?(L.sortIndex=z,e(u,L),n(l)===null&&L===n(u)&&(y?(_(A),A=-1):y=!0,Y(R,z-$))):(L.sortIndex=re,e(l,L),x||p||(x=!0,C||(C=!0,X()))),L},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(L){var k=h;return function(){var z=h;h=k;try{return L.apply(this,arguments)}finally{h=z}}}})(Cv);Rv.exports=Cv;var VS=Rv.exports,wv={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=te;function Dv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function aa(){}var dn={d:{f:aa,r:function(){throw Error(Dv(522))},D:aa,C:aa,L:aa,m:aa,X:aa,S:aa,M:aa},p:0,findDOMNode:null},XS=Symbol.for("react.portal");function WS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:XS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var So=kS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ec(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dn;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Dv(299));return WS(t,e,null,n)};pn.flushSync=function(t){var e=So.T,n=dn.p;try{if(So.T=null,dn.p=2,t)return t()}finally{So.T=e,dn.p=n,dn.d.f()}};pn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,dn.d.C(t,e))};pn.prefetchDNS=function(t){typeof t=="string"&&dn.d.D(t)};pn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Ec(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?dn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&dn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};pn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Ec(e.as,e.crossOrigin);dn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&dn.d.M(t)};pn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Ec(n,e.crossOrigin);dn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};pn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Ec(e.as,e.crossOrigin);dn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else dn.d.m(t)};pn.requestFormReset=function(t){dn.d.r(t)};pn.unstable_batchedUpdates=function(t,e){return t(e)};pn.useFormState=function(t,e,n){return So.H.useFormState(t,e,n)};pn.useFormStatus=function(){return So.H.useHostTransitionStatus()};pn.version="19.1.0";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(t){console.error(t)}}Uv(),wv.exports=pn;var YS=wv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=VS,Lv=te,qS=YS;function Q(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Nv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Um(t){if(sl(t)!==t)throw Error(Q(188))}function jS(t){var e=t.alternate;if(!e){if(e=sl(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return Um(a),t;if(r===i)return Um(a),e;r=r.sibling}throw Error(Q(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function Pv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Pv(t),e!==null)return e;t=t.sibling}return null}var St=Object.assign,ZS=Symbol.for("react.element"),wl=Symbol.for("react.transitional.element"),mo=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),zv=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),KS=Symbol.for("react.provider"),Bv=Symbol.for("react.consumer"),Fi=Symbol.for("react.context"),np=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),da=Symbol.for("react.lazy"),lh=Symbol.for("react.activity"),QS=Symbol.for("react.memo_cache_sentinel"),Lm=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var JS=Symbol.for("react.client.reference");function uh(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===JS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case rh:return"Profiler";case zv:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList";case lh:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case mo:return"Portal";case Fi:return(t.displayName||"Context")+".Provider";case Bv:return(t._context.displayName||"Context")+".Consumer";case np:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ip:return e=t.displayName||null,e!==null?e:uh(t.type)||"Memo";case da:e=t._payload,t=t._init;try{return uh(t(e))}catch{}}return null}var _o=Array.isArray,Le=Lv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt=qS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cr={pending:!1,data:null,method:null,action:null},ch=[],es=-1;function bi(t){return{current:t}}function Qt(t){0>es||(t.current=ch[es],ch[es]=null,es--)}function Tt(t,e){es++,ch[es]=t.current,t.current=e}var yi=bi(null),Fo=bi(null),Aa=bi(null),Fu=bi(null);function Iu(t,e){switch(Tt(Aa,e),Tt(Fo,t),Tt(yi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?B_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=B_(e),t=ey(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Qt(yi),Tt(yi,t)}function Ts(){Qt(yi),Qt(Fo),Qt(Aa)}function fh(t){t.memoizedState!==null&&Tt(Fu,t);var e=yi.current,n=ey(e,t.type);e!==n&&(Tt(Fo,t),Tt(yi,n))}function Hu(t){Fo.current===t&&(Qt(yi),Qt(Fo)),Fu.current===t&&(Qt(Fu),jo._currentValue=cr)}var hh=Object.prototype.hasOwnProperty,ap=kt.unstable_scheduleCallback,Yc=kt.unstable_cancelCallback,$S=kt.unstable_shouldYield,eE=kt.unstable_requestPaint,Si=kt.unstable_now,tE=kt.unstable_getCurrentPriorityLevel,Fv=kt.unstable_ImmediatePriority,Iv=kt.unstable_UserBlockingPriority,Gu=kt.unstable_NormalPriority,nE=kt.unstable_LowPriority,Hv=kt.unstable_IdlePriority,iE=kt.log,aE=kt.unstable_setDisableYieldValue,ol=null,Nn=null;function Sa(t){if(typeof iE=="function"&&aE(t),Nn&&typeof Nn.setStrictMode=="function")try{Nn.setStrictMode(ol,t)}catch{}}var On=Math.clz32?Math.clz32:oE,rE=Math.log,sE=Math.LN2;function oE(t){return t>>>=0,t===0?32:31-(rE(t)/sE|0)|0}var Dl=256,Ul=4194304;function nr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Mc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=nr(i):(s&=o,s!==0?a=nr(s):n||(n=o&~t,n!==0&&(a=nr(n))))):(o=i&~r,o!==0?a=nr(o):s!==0?a=nr(s):n||(n=i&~t,n!==0&&(a=nr(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function ll(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function lE(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(){var t=Dl;return Dl<<=1,!(Dl&4194048)&&(Dl=256),t}function Vv(){var t=Ul;return Ul<<=1,!(Ul&62914560)&&(Ul=4194304),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ul(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function uE(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-On(n),f=1<<d;o[d]=0,l[d]=-1;var h=u[d];if(h!==null)for(u[d]=null,d=0;d<h.length;d++){var p=h[d];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&kv(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function kv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-On(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function Xv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function rp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function sp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Wv(){var t=rt.p;return t!==0?t:(t=window.event,t===void 0?32:cy(t.type))}function cE(t,e){var n=rt.p;try{return rt.p=t,e()}finally{rt.p=n}}var Ga=Math.random().toString(36).slice(2),on="__reactFiber$"+Ga,Mn="__reactProps$"+Ga,ks="__reactContainer$"+Ga,dh="__reactEvents$"+Ga,fE="__reactListeners$"+Ga,hE="__reactHandles$"+Ga,Nm="__reactResources$"+Ga,cl="__reactMarker$"+Ga;function op(t){delete t[on],delete t[Mn],delete t[dh],delete t[fE],delete t[hE]}function ts(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ks]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H_(t);t!==null;){if(n=t[on])return n;t=H_(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){if(t=t[on]||t[ks]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function go(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(Q(33))}function ps(t){var e=t[Nm];return e||(e=t[Nm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Zt(t){t[cl]=!0}var Yv=new Set,qv={};function Mr(t,e){As(t,e),As(t+"Capture",e)}function As(t,e){for(qv[t]=e,t=0;t<e.length;t++)Yv.add(e[t])}var dE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Om={},Pm={};function pE(t){return hh.call(Pm,t)?!0:hh.call(Om,t)?!1:dE.test(t)?Pm[t]=!0:(Om[t]=!0,!1)}function mu(t,e,n){if(pE(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ll(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ri(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var jc,zm;function jr(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||"",zm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jc+t+zm}var Zc=!1;function Kc(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(t,[],f)}else{try{f.call()}catch(p){h=p}t.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),u=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===u.length)for(i=l.length-1,a=u.length-1;1<=i&&0<=a&&l[i]!==u[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==u[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==u[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?jr(n):""}function mE(t){switch(t.tag){case 26:case 27:case 5:return jr(t.type);case 16:return jr("Lazy");case 13:return jr("Suspense");case 19:return jr("SuspenseList");case 0:case 15:return Kc(t.type,!1);case 11:return Kc(t.type.render,!1);case 1:return Kc(t.type,!0);case 31:return jr("Activity");default:return""}}function Bm(t){try{var e="";do e+=mE(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _E(t){var e=jv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){i=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vu(t){t._valueTracker||(t._valueTracker=_E(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var gE=/[\n"\\]/g;function qn(t){return t.replace(gE,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ph(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+kn(e)):t.value!==""+kn(e)&&(t.value=""+kn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?mh(t,s,kn(e)):n!=null?mh(t,s,kn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+kn(o):t.removeAttribute("name")}function Kv(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+kn(n):"",e=e!=null?""+kn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function mh(t,e,n){e==="number"&&ku(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ms(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+kn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Qv(t,e,n){if(e!=null&&(e=""+kn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+kn(n):""}function Jv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(Q(92));if(_o(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=kn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function Rs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||vE.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function $v(t,e,n){if(e!=null&&typeof e!="object")throw Error(Q(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Fm(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&Fm(t,r,e[r])}function lp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _u(t){return yE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var _h=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ns=null,_s=null;function Im(t){var e=Xs(t);if(e&&(t=e.stateNode)){var n=t[Mn]||null;e:switch(t=e.stateNode,e.type){case"input":if(ph(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[Mn]||null;if(!a)throw Error(Q(90));ph(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Zv(i)}break e;case"textarea":Qv(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}}}var Qc=!1;function e0(t,e,n){if(Qc)return t(e,n);Qc=!0;try{var i=t(e);return i}finally{if(Qc=!1,(ns!==null||_s!==null)&&(Nc(),ns&&(e=ns,t=_s,_s=ns=null,Im(e),t)))for(e=0;e<t.length;e++)Im(t[e])}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var i=n[Mn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gh=!1;if(Ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){gh=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{gh=!1}var Ea=null,cp=null,gu=null;function t0(){if(gu)return gu;var t,e=cp,n=e.length,i,a="value"in Ea?Ea.value:Ea.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return gu=a.slice(t,1<i?1-i:void 0)}function vu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function Hm(){return!1}function bn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Nl:Hm,this.isPropagationStopped=Hm,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),e}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bc=bn(br),fl=St({},br,{view:0,detail:0}),SE=bn(fl),Jc,$c,to,Tc=St({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Jc=t.screenX-to.screenX,$c=t.screenY-to.screenY):$c=Jc=0,to=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Gm=bn(Tc),EE=St({},Tc,{dataTransfer:0}),ME=bn(EE),bE=St({},fl,{relatedTarget:0}),ef=bn(bE),TE=St({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),AE=bn(TE),RE=St({},br,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CE=bn(RE),wE=St({},br,{data:0}),Vm=bn(wE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LE[t])?!!e[t]:!1}function fp(){return NE}var OE=St({},fl,{key:function(t){if(t.key){var e=DE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fp,charCode:function(t){return t.type==="keypress"?vu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PE=bn(OE),zE=St({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),km=bn(zE),BE=St({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fp}),FE=bn(BE),IE=St({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),HE=bn(IE),GE=St({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VE=bn(GE),kE=St({},br,{newState:0,oldState:0}),XE=bn(kE),WE=[9,13,27,32],hp=Ki&&"CompositionEvent"in window,Eo=null;Ki&&"documentMode"in document&&(Eo=document.documentMode);var YE=Ki&&"TextEvent"in window&&!Eo,n0=Ki&&(!hp||Eo&&8<Eo&&11>=Eo),Xm=" ",Wm=!1;function i0(t,e){switch(t){case"keyup":return WE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function qE(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(Wm=!0,Xm);case"textInput":return t=e.data,t===Xm&&Wm?null:t;default:return null}}function jE(t,e){if(is)return t==="compositionend"||!hp&&i0(t,e)?(t=t0(),gu=cp=Ea=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var ZE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZE[t.type]:e==="textarea"}function r0(t,e,n,i){ns?_s?_s.push(i):_s=[i]:ns=i,e=oc(e,"onChange"),0<e.length&&(n=new bc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Mo=null,Ho=null;function KE(t){Qx(t,0)}function Ac(t){var e=go(t);if(Zv(e))return t}function qm(t,e){if(t==="change")return e}var s0=!1;if(Ki){var tf;if(Ki){var nf="oninput"in document;if(!nf){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),nf=typeof jm.oninput=="function"}tf=nf}else tf=!1;s0=tf&&(!document.documentMode||9<document.documentMode)}function Zm(){Mo&&(Mo.detachEvent("onpropertychange",o0),Ho=Mo=null)}function o0(t){if(t.propertyName==="value"&&Ac(Ho)){var e=[];r0(e,Ho,t,up(t)),e0(KE,e)}}function QE(t,e,n){t==="focusin"?(Zm(),Mo=e,Ho=n,Mo.attachEvent("onpropertychange",o0)):t==="focusout"&&Zm()}function JE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(Ho)}function $E(t,e){if(t==="click")return Ac(e)}function eM(t,e){if(t==="input"||t==="change")return Ac(e)}function tM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:tM;function Go(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!hh.call(e,a)||!Fn(t[a],e[a]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qm(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function u0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ku(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ku(t.document)}return e}function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var nM=Ki&&"documentMode"in document&&11>=document.documentMode,as=null,vh=null,bo=null,xh=!1;function Jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||as==null||as!==ku(i)||(i=as,"selectionStart"in i&&dp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Go(bo,i)||(bo=i,i=oc(vh,"onSelect"),0<i.length&&(e=new bc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},af={},c0={};Ki&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Tr(t){if(af[t])return af[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c0)return af[t]=e[n];return t}var f0=Tr("animationend"),h0=Tr("animationiteration"),d0=Tr("animationstart"),iM=Tr("transitionrun"),aM=Tr("transitionstart"),rM=Tr("transitioncancel"),p0=Tr("transitionend"),m0=new Map,yh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yh.push("scrollEnd");function fi(t,e){m0.set(t,e),Mr(e,[t])}var $m=new WeakMap;function jn(t,e){if(typeof t=="object"&&t!==null){var n=$m.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Bm(e)},$m.set(t,e),e)}return{value:t,source:e,stack:Bm(e)}}var Vn=[],ss=0,pp=0;function Rc(){for(var t=ss,e=pp=ss=0;e<t;){var n=Vn[e];Vn[e++]=null;var i=Vn[e];Vn[e++]=null;var a=Vn[e];Vn[e++]=null;var r=Vn[e];if(Vn[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&_0(n,a,r)}}function Cc(t,e,n,i){Vn[ss++]=t,Vn[ss++]=e,Vn[ss++]=n,Vn[ss++]=i,pp|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function mp(t,e,n,i){return Cc(t,e,n,i),Xu(t)}function Ws(t,e){return Cc(t,null,null,e),Xu(t)}function _0(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-On(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function Xu(t){if(50<Oo)throw Oo=0,Gh=null,Error(Q(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var os={};function sM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new sM(t,e,n,i)}function _p(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function g0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function xu(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")_p(t)&&(s=1);else if(typeof t=="string")s=lb(t,n,yi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case lh:return t=Ln(31,n,e,a),t.elementType=lh,t.lanes=r,t;case $r:return fr(n.children,a,r,e);case zv:s=8,a|=24;break;case rh:return t=Ln(12,n,e,a|2),t.elementType=rh,t.lanes=r,t;case sh:return t=Ln(13,n,e,a),t.elementType=sh,t.lanes=r,t;case oh:return t=Ln(19,n,e,a),t.elementType=oh,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case KS:case Fi:s=10;break e;case Bv:s=9;break e;case np:s=11;break e;case ip:s=14;break e;case da:s=16,i=null;break e}s=29,n=Error(Q(130,t===null?"null":typeof t,"")),i=null}return e=Ln(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function fr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function rf(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function sf(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var ls=[],us=0,Wu=null,Yu=0,Xn=[],Wn=0,hr=null,Ii=1,Hi="";function ir(t,e){ls[us++]=Yu,ls[us++]=Wu,Wu=t,Yu=e}function v0(t,e,n){Xn[Wn++]=Ii,Xn[Wn++]=Hi,Xn[Wn++]=hr,hr=t;var i=Ii;t=Hi;var a=32-On(i)-1;i&=~(1<<a),n+=1;var r=32-On(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,Ii=1<<32-On(e)+a|n<<a|i,Hi=r+t}else Ii=1<<r|n<<a|i,Hi=t}function gp(t){t.return!==null&&(ir(t,1),v0(t,1,0))}function vp(t){for(;t===Wu;)Wu=ls[--us],ls[us]=null,Yu=ls[--us],ls[us]=null;for(;t===hr;)hr=Xn[--Wn],Xn[Wn]=null,Hi=Xn[--Wn],Xn[Wn]=null,Ii=Xn[--Wn],Xn[Wn]=null}var hn=null,wt=null,at=!1,dr=null,gi=!1,Sh=Error(Q(519));function gr(t){var e=Error(Q(418,""));throw Vo(jn(e,t)),Sh}function e_(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[on]=t,e[Mn]=i,n){case"dialog":je("cancel",e),je("close",e);break;case"iframe":case"object":case"embed":je("load",e);break;case"video":case"audio":for(n=0;n<Wo.length;n++)je(Wo[n],e);break;case"source":je("error",e);break;case"img":case"image":case"link":je("error",e),je("load",e);break;case"details":je("toggle",e);break;case"input":je("invalid",e),Kv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Vu(e);break;case"select":je("invalid",e);break;case"textarea":je("invalid",e),Jv(e,i.value,i.defaultValue,i.children),Vu(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||$x(e.textContent,n)?(i.popover!=null&&(je("beforetoggle",e),je("toggle",e)),i.onScroll!=null&&je("scroll",e),i.onScrollEnd!=null&&je("scrollend",e),i.onClick!=null&&(e.onclick=zc),e=!0):e=!1,e||gr(t)}function t_(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:hn=hn.return}}function no(t){if(t!==hn)return!1;if(!at)return t_(t),at=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||qh(t.type,t.memoizedProps)),n=!n),n&&wt&&gr(t),t_(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){wt=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}wt=null}}else e===27?(e=wt,Va(t.type)?(t=Kh,Kh=null,wt=t):wt=e):wt=hn?li(t.stateNode.nextSibling):null;return!0}function hl(){wt=hn=null,at=!1}function n_(){var t=dr;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),dr=null),t}function Vo(t){dr===null?dr=[t]:dr.push(t)}var Eh=bi(null),Ar=null,Gi=null;function _a(t,e,n){Tt(Eh,e._currentValue),e._currentValue=n}function Yi(t){t._currentValue=Eh.current,Qt(Eh)}function Mh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bh(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),Mh(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Q(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Mh(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function dl(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Q(387));if(s=s.memoizedProps,s!==null){var o=a.type;Fn(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===Fu.current){if(s=a.alternate,s===null)throw Error(Q(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}a=a.return}t!==null&&bh(e,t,n,i),e.flags|=262144}function qu(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vr(t){Ar=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ln(t){return x0(Ar,t)}function Ol(t,e){return Ar===null&&vr(t),x0(t,e)}function x0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Gi===null){if(t===null)throw Error(Q(308));Gi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Gi=Gi.next=e;return n}var oM=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},lM=kt.unstable_scheduleCallback,uM=kt.unstable_NormalPriority,Gt={$$typeof:Fi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xp(){return{controller:new oM,data:new Map,refCount:0}}function pl(t){t.refCount--,t.refCount===0&&lM(uM,function(){t.controller.abort()})}var To=null,Th=0,Cs=0,gs=null;function cM(t,e){if(To===null){var n=To=[];Th=0,Cs=Vp(),gs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Th++,e.then(i_,i_),e}function i_(){if(--Th===0&&To!==null){gs!==null&&(gs.status="fulfilled");var t=To;To=null,Cs=0,gs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function fM(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var a_=Le.S;Le.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&cM(t,e),a_!==null&&a_(t,e)};var pr=bi(null);function yp(){var t=pr.current;return t!==null?t:yt.pooledCache}function yu(t,e){e===null?Tt(pr,pr.current):Tt(pr,e.pool)}function y0(){var t=yp();return t===null?null:{parent:Gt._currentValue,pool:t}}var ml=Error(Q(460)),S0=Error(Q(474)),wc=Error(Q(542)),Ah={then:function(){}};function r_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pl(){}function E0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Pl,Pl),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,o_(t),t;default:if(typeof e.status=="string")e.then(Pl,Pl);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(Q(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,o_(t),t}throw Ao=e,ml}}var Ao=null;function s_(){if(Ao===null)throw Error(Q(459));var t=Ao;return Ao=null,t}function o_(t){if(t===ml||t===wc)throw Error(Q(483))}var pa=!1;function Sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=Xu(t),_0(t,null,n),e}return Cc(t,i,e,n),Xu(t)}function Ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xv(t,n)}}function of(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Ch=!1;function Co(){if(Ch){var t=gs;if(t!==null)throw t}}function wo(t,e,n,i){Ch=!1;var a=t.updateQueue;pa=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?r=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(r!==null){var f=a.baseState;s=0,d=u=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?($e&h)===h:(i&h)===h){h!==0&&h===Cs&&(Ch=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=t,y=o;h=e;var m=n;switch(y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(m,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,f,h):x,h==null)break e;f=St({},f,h);break e;case 2:pa=!0}}h=o.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=f):d=d.next=p,s|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),Fa|=s,t.lanes=s,t.memoizedState=f}}function M0(t,e){if(typeof t!="function")throw Error(Q(191,t));t.call(e)}function b0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)M0(n[t],e)}var ws=bi(null),ju=bi(0);function l_(t,e){t=$i,Tt(ju,t),Tt(ws,e),$i=t|e.baseLanes}function wh(){Tt(ju,$i),Tt(ws,ws.current)}function Ep(){$i=ju.current,Qt(ws),Qt(ju)}var za=0,Ye=null,mt=null,Bt=null,Zu=!1,vs=!1,xr=!1,Ku=0,ko=0,xs=null,hM=0;function Ut(){throw Error(Q(321))}function Mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function bp(t,e,n,i,a,r){return za=r,Ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Le.H=t===null||t.memoizedState===null?tx:nx,xr=!1,r=n(i,a),xr=!1,vs&&(r=A0(e,n,i,a)),T0(t),r}function T0(t){Le.H=Qu;var e=mt!==null&&mt.next!==null;if(za=0,Bt=mt=Ye=null,Zu=!1,ko=0,xs=null,e)throw Error(Q(300));t===null||Kt||(t=t.dependencies,t!==null&&qu(t)&&(Kt=!0))}function A0(t,e,n,i){Ye=t;var a=0;do{if(vs&&(xs=null),ko=0,vs=!1,25<=a)throw Error(Q(301));if(a+=1,Bt=mt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Le.H=xM,r=e(n,i)}while(vs);return r}function dM(){var t=Le.H,e=t.useState()[0];return e=typeof e.then=="function"?_l(e):e,t=t.useState()[0],(mt!==null?mt.memoizedState:null)!==t&&(Ye.flags|=1024),e}function Tp(){var t=Ku!==0;return Ku=0,t}function Ap(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Rp(t){if(Zu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zu=!1}za=0,Bt=mt=Ye=null,vs=!1,ko=Ku=0,xs=null}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Ye.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Ft(){if(mt===null){var t=Ye.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Bt===null?Ye.memoizedState:Bt.next;if(e!==null)Bt=e,mt=t;else{if(t===null)throw Ye.alternate===null?Error(Q(467)):Error(Q(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Bt===null?Ye.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Cp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(t){var e=ko;return ko+=1,xs===null&&(xs=[]),t=E0(xs,t,e),e=Ye,(Bt===null?e.memoizedState:Bt.next)===null&&(e=e.alternate,Le.H=e===null||e.memoizedState===null?tx:nx),t}function Dc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _l(t);if(t.$$typeof===Fi)return ln(t)}throw Error(Q(438,String(t)))}function wp(t){var e=null,n=Ye.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Cp(),Ye.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=QS;return e.index++,n}function Qi(t,e){return typeof e=="function"?e(t):e}function Su(t){var e=Ft();return Dp(e,mt,t)}function Dp(t,e,n){var i=t.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,u=e,d=!1;do{var f=u.lane&-536870913;if(f!==u.lane?($e&f)===f:(za&f)===f){var h=u.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Cs&&(d=!0);else if((za&h)===h){u=u.next,h===Cs&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Ye.lanes|=h,Fa|=h;f=u.action,xr&&n(r,f),r=u.hasEagerState?u.eagerState:n(r,f)}else h={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Ye.lanes|=f,Fa|=f;u=u.next}while(u!==null&&u!==e);if(l===null?s=r:l.next=o,!Fn(r,t.memoizedState)&&(Kt=!0,d&&(n=gs,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function lf(t){var e=Ft(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Fn(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function R0(t,e,n){var i=Ye,a=Ft(),r=at;if(r){if(n===void 0)throw Error(Q(407));n=n()}else n=e();var s=!Fn((mt||a).memoizedState,n);s&&(a.memoizedState=n,Kt=!0),a=a.queue;var o=D0.bind(null,i,a,t);if(gl(2048,8,o,[t]),a.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(i.flags|=2048,Ds(9,Uc(),w0.bind(null,i,a,n,e),null),yt===null)throw Error(Q(349));r||za&124||C0(i,e,n)}return n}function C0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ye.updateQueue,e===null?(e=Cp(),Ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,i){e.value=n,e.getSnapshot=i,U0(e)&&L0(t)}function D0(t,e,n){return n(function(){U0(e)&&L0(t)})}function U0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function L0(t){var e=Ws(t,2);e!==null&&zn(e,t,2)}function Dh(t){var e=vn();if(typeof t=="function"){var n=t;if(t=n(),xr){Sa(!0);try{n()}finally{Sa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},e}function N0(t,e,n,i){return t.baseState=n,Dp(t,mt,typeof i=="function"?i:Qi)}function pM(t,e,n,i,a){if(Lc(t))throw Error(Q(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};Le.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,O0(e,r)):(r.next=n.next,e.pending=n.next=r)}}function O0(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=Le.T,s={};Le.T=s;try{var o=n(a,i),l=Le.S;l!==null&&l(s,o),u_(t,e,o)}catch(u){Uh(t,e,u)}finally{Le.T=r}}else try{r=n(a,i),u_(t,e,r)}catch(u){Uh(t,e,u)}}function u_(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){c_(t,e,i)},function(i){return Uh(t,e,i)}):c_(t,e,n)}function c_(t,e,n){e.status="fulfilled",e.value=n,P0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,O0(t,n)))}function Uh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,P0(e),e=e.next;while(e!==i)}t.action=null}function P0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function z0(t,e){return e}function f_(t,e){if(at){var n=yt.formState;if(n!==null){e:{var i=Ye;if(at){if(wt){t:{for(var a=wt,r=gi;a.nodeType!==8;){if(!r){a=null;break t}if(a=li(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){wt=li(a.nextSibling),i=a.data==="F!";break e}}gr(i)}i=!1}i&&(e=n[0])}}return n=vn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:z0,lastRenderedState:e},n.queue=i,n=J0.bind(null,Ye,i),i.dispatch=n,i=Dh(!1),r=Op.bind(null,Ye,!1,i.queue),i=vn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=pM.bind(null,Ye,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function h_(t){var e=Ft();return B0(e,mt,t)}function B0(t,e,n){if(e=Dp(t,e,z0)[0],t=Su(Qi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=_l(e)}catch(s){throw s===ml?wc:s}else i=e;e=Ft();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(Ye.flags|=2048,Ds(9,Uc(),mM.bind(null,a,n),null)),[i,r,t]}function mM(t,e){t.action=e}function d_(t){var e=Ft(),n=mt;if(n!==null)return B0(e,n,t);Ft(),e=e.memoizedState,n=Ft();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Ds(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Ye.updateQueue,e===null&&(e=Cp(),Ye.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Uc(){return{destroy:void 0,resource:void 0}}function F0(){return Ft().memoizedState}function Eu(t,e,n,i){var a=vn();i=i===void 0?null:i,Ye.flags|=t,a.memoizedState=Ds(1|e,Uc(),n,i)}function gl(t,e,n,i){var a=Ft();i=i===void 0?null:i;var r=a.memoizedState.inst;mt!==null&&i!==null&&Mp(i,mt.memoizedState.deps)?a.memoizedState=Ds(e,r,n,i):(Ye.flags|=t,a.memoizedState=Ds(1|e,r,n,i))}function p_(t,e){Eu(8390656,8,t,e)}function I0(t,e){gl(2048,8,t,e)}function H0(t,e){return gl(4,2,t,e)}function G0(t,e){return gl(4,4,t,e)}function V0(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k0(t,e,n){n=n!=null?n.concat([t]):null,gl(4,4,V0.bind(null,e,t),n)}function Up(){}function X0(t,e){var n=Ft();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Mp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function W0(t,e){var n=Ft();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Mp(e,i[1]))return i[0];if(i=t(),xr){Sa(!0);try{t()}finally{Sa(!1)}}return n.memoizedState=[i,e],i}function Lp(t,e,n){return n===void 0||za&1073741824?t.memoizedState=e:(t.memoizedState=n,t=Px(),Ye.lanes|=t,Fa|=t,n)}function Y0(t,e,n,i){return Fn(n,e)?n:ws.current!==null?(t=Lp(t,n,i),Fn(t,e)||(Kt=!0),t):za&42?(t=Px(),Ye.lanes|=t,Fa|=t,e):(Kt=!0,t.memoizedState=n)}function q0(t,e,n,i,a){var r=rt.p;rt.p=r!==0&&8>r?r:8;var s=Le.T,o={};Le.T=o,Op(t,!1,e,n);try{var l=a(),u=Le.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=fM(l,i);Do(t,e,d,Pn(t))}else Do(t,e,i,Pn(t))}catch(f){Do(t,e,{then:function(){},status:"rejected",reason:f},Pn())}finally{rt.p=r,Le.T=s}}function _M(){}function Lh(t,e,n,i){if(t.tag!==5)throw Error(Q(476));var a=j0(t).queue;q0(t,a,e,cr,n===null?_M:function(){return Z0(t),n(i)})}function j0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:cr,baseState:cr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:cr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Z0(t){var e=j0(t).next.queue;Do(t,e,{},Pn())}function Np(){return ln(jo)}function K0(){return Ft().memoizedState}function Q0(){return Ft().memoizedState}function gM(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Pn();t=Ra(n);var i=Ca(e,t,n);i!==null&&(zn(i,e,n),Ro(i,e,n)),e={cache:xp()},t.payload=e;return}e=e.return}}function vM(t,e,n){var i=Pn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(t)?$0(e,n):(n=mp(t,e,n,i),n!==null&&(zn(n,t,i),ex(n,e,i)))}function J0(t,e,n){var i=Pn();Do(t,e,n,i)}function Do(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(t))$0(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Fn(o,s))return Cc(t,e,a,0),yt===null&&Rc(),!1}catch{}finally{}if(n=mp(t,e,a,i),n!==null)return zn(n,t,i),ex(n,e,i),!0}return!1}function Op(t,e,n,i){if(i={lane:2,revertLane:Vp(),action:i,hasEagerState:!1,eagerState:null,next:null},Lc(t)){if(e)throw Error(Q(479))}else e=mp(t,n,i,2),e!==null&&zn(e,t,2)}function Lc(t){var e=t.alternate;return t===Ye||e!==null&&e===Ye}function $0(t,e){vs=Zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ex(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xv(t,n)}}var Qu={readContext:ln,use:Dc,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut},tx={readContext:ln,use:Dc,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:p_,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Eu(4194308,4,V0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){Eu(4,2,t,e)},useMemo:function(t,e){var n=vn();e=e===void 0?null:e;var i=t();if(xr){Sa(!0);try{t()}finally{Sa(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=vn();if(n!==void 0){var a=n(e);if(xr){Sa(!0);try{n(e)}finally{Sa(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=vM.bind(null,Ye,t),[i.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:function(t){t=Dh(t);var e=t.queue,n=J0.bind(null,Ye,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Up,useDeferredValue:function(t,e){var n=vn();return Lp(n,t,e)},useTransition:function(){var t=Dh(!1);return t=q0.bind(null,Ye,t.queue,!0,!1),vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Ye,a=vn();if(at){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),yt===null)throw Error(Q(349));$e&124||C0(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,p_(D0.bind(null,i,r,t),[t]),i.flags|=2048,Ds(9,Uc(),w0.bind(null,i,r,n,e),null),n},useId:function(){var t=vn(),e=yt.identifierPrefix;if(at){var n=Hi,i=Ii;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=Ku++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=hM++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Np,useFormState:f_,useActionState:f_,useOptimistic:function(t){var e=vn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Op.bind(null,Ye,!0,n),n.dispatch=e,[t,e]},useMemoCache:wp,useCacheRefresh:function(){return vn().memoizedState=gM.bind(null,Ye)}},nx={readContext:ln,use:Dc,useCallback:X0,useContext:ln,useEffect:I0,useImperativeHandle:k0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:W0,useReducer:Su,useRef:F0,useState:function(){return Su(Qi)},useDebugValue:Up,useDeferredValue:function(t,e){var n=Ft();return Y0(n,mt.memoizedState,t,e)},useTransition:function(){var t=Su(Qi)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:_l(t),e]},useSyncExternalStore:R0,useId:K0,useHostTransitionStatus:Np,useFormState:h_,useActionState:h_,useOptimistic:function(t,e){var n=Ft();return N0(n,mt,t,e)},useMemoCache:wp,useCacheRefresh:Q0},xM={readContext:ln,use:Dc,useCallback:X0,useContext:ln,useEffect:I0,useImperativeHandle:k0,useInsertionEffect:H0,useLayoutEffect:G0,useMemo:W0,useReducer:lf,useRef:F0,useState:function(){return lf(Qi)},useDebugValue:Up,useDeferredValue:function(t,e){var n=Ft();return mt===null?Lp(n,t,e):Y0(n,mt.memoizedState,t,e)},useTransition:function(){var t=lf(Qi)[0],e=Ft().memoizedState;return[typeof t=="boolean"?t:_l(t),e]},useSyncExternalStore:R0,useId:K0,useHostTransitionStatus:Np,useFormState:d_,useActionState:d_,useOptimistic:function(t,e){var n=Ft();return mt!==null?N0(n,mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:wp,useCacheRefresh:Q0},ys=null,Xo=0;function zl(t){var e=Xo;return Xo+=1,ys===null&&(ys=[]),E0(ys,t,e)}function io(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bl(t,e){throw e.$$typeof===ZS?Error(Q(525)):(t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function m_(t){var e=t._init;return e(t._payload)}function ix(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c){for(var _=new Map;c!==null;)c.key!==null?_.set(c.key,c):_.set(c.index,c),c=c.sibling;return _}function a(c,_){return c=Wi(c,_),c.index=0,c.sibling=null,c}function r(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=67108866,_):g):(c.flags|=67108866,_)):(c.flags|=1048576,_)}function s(c){return t&&c.alternate===null&&(c.flags|=67108866),c}function o(c,_,g,v){return _===null||_.tag!==6?(_=rf(g,c.mode,v),_.return=c,_):(_=a(_,g),_.return=c,_)}function l(c,_,g,v){var R=g.type;return R===$r?d(c,_,g.props.children,v,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===da&&m_(R)===_.type)?(_=a(_,g.props),io(_,g),_.return=c,_):(_=xu(g.type,g.key,g.props,null,c.mode,v),io(_,g),_.return=c,_)}function u(c,_,g,v){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=sf(g,c.mode,v),_.return=c,_):(_=a(_,g.children||[]),_.return=c,_)}function d(c,_,g,v,R){return _===null||_.tag!==7?(_=fr(g,c.mode,v,R),_.return=c,_):(_=a(_,g),_.return=c,_)}function f(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return _=rf(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wl:return g=xu(_.type,_.key,_.props,null,c.mode,g),io(g,_),g.return=c,g;case mo:return _=sf(_,c.mode,g),_.return=c,_;case da:var v=_._init;return _=v(_._payload),f(c,_,g)}if(_o(_)||$s(_))return _=fr(_,c.mode,g,null),_.return=c,_;if(typeof _.then=="function")return f(c,zl(_),g);if(_.$$typeof===Fi)return f(c,Ol(c,_),g);Bl(c,_)}return null}function h(c,_,g,v){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return R!==null?null:o(c,_,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wl:return g.key===R?l(c,_,g,v):null;case mo:return g.key===R?u(c,_,g,v):null;case da:return R=g._init,g=R(g._payload),h(c,_,g,v)}if(_o(g)||$s(g))return R!==null?null:d(c,_,g,v,null);if(typeof g.then=="function")return h(c,_,zl(g),v);if(g.$$typeof===Fi)return h(c,_,Ol(c,g),v);Bl(c,g)}return null}function p(c,_,g,v,R){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return c=c.get(g)||null,o(_,c,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wl:return c=c.get(v.key===null?g:v.key)||null,l(_,c,v,R);case mo:return c=c.get(v.key===null?g:v.key)||null,u(_,c,v,R);case da:var C=v._init;return v=C(v._payload),p(c,_,g,v,R)}if(_o(v)||$s(v))return c=c.get(g)||null,d(_,c,v,R,null);if(typeof v.then=="function")return p(c,_,g,zl(v),R);if(v.$$typeof===Fi)return p(c,_,g,Ol(_,v),R);Bl(_,v)}return null}function x(c,_,g,v){for(var R=null,C=null,A=_,w=_=0,b=null;A!==null&&w<g.length;w++){A.index>w?(b=A,A=null):b=A.sibling;var S=h(c,A,g[w],v);if(S===null){A===null&&(A=b);break}t&&A&&S.alternate===null&&e(c,A),_=r(S,_,w),C===null?R=S:C.sibling=S,C=S,A=b}if(w===g.length)return n(c,A),at&&ir(c,w),R;if(A===null){for(;w<g.length;w++)A=f(c,g[w],v),A!==null&&(_=r(A,_,w),C===null?R=A:C.sibling=A,C=A);return at&&ir(c,w),R}for(A=i(A);w<g.length;w++)b=p(A,c,w,g[w],v),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?w:b.key),_=r(b,_,w),C===null?R=b:C.sibling=b,C=b);return t&&A.forEach(function(D){return e(c,D)}),at&&ir(c,w),R}function y(c,_,g,v){if(g==null)throw Error(Q(151));for(var R=null,C=null,A=_,w=_=0,b=null,S=g.next();A!==null&&!S.done;w++,S=g.next()){A.index>w?(b=A,A=null):b=A.sibling;var D=h(c,A,S.value,v);if(D===null){A===null&&(A=b);break}t&&A&&D.alternate===null&&e(c,A),_=r(D,_,w),C===null?R=D:C.sibling=D,C=D,A=b}if(S.done)return n(c,A),at&&ir(c,w),R;if(A===null){for(;!S.done;w++,S=g.next())S=f(c,S.value,v),S!==null&&(_=r(S,_,w),C===null?R=S:C.sibling=S,C=S);return at&&ir(c,w),R}for(A=i(A);!S.done;w++,S=g.next())S=p(A,c,w,S.value,v),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?w:S.key),_=r(S,_,w),C===null?R=S:C.sibling=S,C=S);return t&&A.forEach(function(X){return e(c,X)}),at&&ir(c,w),R}function m(c,_,g,v){if(typeof g=="object"&&g!==null&&g.type===$r&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wl:e:{for(var R=g.key;_!==null;){if(_.key===R){if(R=g.type,R===$r){if(_.tag===7){n(c,_.sibling),v=a(_,g.props.children),v.return=c,c=v;break e}}else if(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===da&&m_(R)===_.type){n(c,_.sibling),v=a(_,g.props),io(v,g),v.return=c,c=v;break e}n(c,_);break}else e(c,_);_=_.sibling}g.type===$r?(v=fr(g.props.children,c.mode,v,g.key),v.return=c,c=v):(v=xu(g.type,g.key,g.props,null,c.mode,v),io(v,g),v.return=c,c=v)}return s(c);case mo:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),v=a(_,g.children||[]),v.return=c,c=v;break e}else{n(c,_);break}else e(c,_);_=_.sibling}v=sf(g,c.mode,v),v.return=c,c=v}return s(c);case da:return R=g._init,g=R(g._payload),m(c,_,g,v)}if(_o(g))return x(c,_,g,v);if($s(g)){if(R=$s(g),typeof R!="function")throw Error(Q(150));return g=R.call(g),y(c,_,g,v)}if(typeof g.then=="function")return m(c,_,zl(g),v);if(g.$$typeof===Fi)return m(c,_,Ol(c,g),v);Bl(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),v=a(_,g),v.return=c,c=v):(n(c,_),v=rf(g,c.mode,v),v.return=c,c=v),s(c)):n(c,_)}return function(c,_,g,v){try{Xo=0;var R=m(c,_,g,v);return ys=null,R}catch(A){if(A===ml||A===wc)throw A;var C=Ln(29,A,null,c.mode);return C.lanes=v,C.return=c,C}finally{}}}var Us=ix(!0),ax=ix(!1),Qn=bi(null),Ei=null;function ga(t){var e=t.alternate;Tt(Vt,Vt.current&1),Tt(Qn,t),Ei===null&&(e===null||ws.current!==null||e.memoizedState!==null)&&(Ei=t)}function rx(t){if(t.tag===22){if(Tt(Vt,Vt.current),Tt(Qn,t),Ei===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ei=t)}}else va()}function va(){Tt(Vt,Vt.current),Tt(Qn,Qn.current)}function Vi(t){Qt(Qn),Ei===t&&(Ei=null),Qt(Vt)}var Vt=bi(0);function Ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Zh(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nh={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),a=Ra(i);a.payload=e,n!=null&&(a.callback=n),e=Ca(t,a,i),e!==null&&(zn(e,t,i),Ro(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),a=Ra(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ca(t,a,i),e!==null&&(zn(e,t,i),Ro(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=Ra(n);i.tag=2,e!=null&&(i.callback=e),e=Ca(t,i,n),e!==null&&(zn(e,t,n),Ro(e,t,n))}};function __(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(a,r):!0}function g_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nh.enqueueReplaceState(e,e.state,null)}function yr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=St({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var $u=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function sx(t){$u(t)}function ox(t){console.error(t)}function lx(t){$u(t)}function ec(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function v_(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Oh(t,e,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(t,e)},n}function ux(t){return t=Ra(t),t.tag=3,t}function cx(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){v_(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){v_(e,n,i),typeof a!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function yM(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&dl(e,n,a,!0),n=Qn.current,n!==null){switch(n.tag){case 13:return Ei===null?Vh():n.alternate===null&&Dt===0&&(Dt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Ah?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),yf(t,i,a)),!1;case 22:return n.flags|=65536,i===Ah?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),yf(t,i,a)),!1}throw Error(Q(435,n.tag))}return yf(t,i,a),Vh(),!1}if(at)return e=Qn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Sh&&(t=Error(Q(422),{cause:i}),Vo(jn(t,n)))):(i!==Sh&&(e=Error(Q(423),{cause:i}),Vo(jn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=jn(i,n),a=Oh(t.stateNode,i,a),of(t,a),Dt!==4&&(Dt=2)),!1;var r=Error(Q(520),{cause:i});if(r=jn(r,n),No===null?No=[r]:No.push(r),Dt!==4&&(Dt=2),e===null)return!0;i=jn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Oh(n.stateNode,i,t),of(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(wa===null||!wa.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ux(a),cx(a,t,n,i),of(n,a),!1}n=n.return}while(n!==null);return!1}var fx=Error(Q(461)),Kt=!1;function en(t,e,n,i){e.child=t===null?ax(e,null,n,i):Us(e,t.child,n,i)}function x_(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return vr(e),i=bp(t,e,n,s,r,a),o=Tp(),t!==null&&!Kt?(Ap(t,e,a),Ji(t,e,a)):(at&&o&&gp(e),e.flags|=1,en(t,e,i,a),e.child)}function y_(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!_p(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,hx(t,e,r,i,a)):(t=xu(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Pp(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(s,i)&&t.ref===e.ref)return Ji(t,e,a)}return e.flags|=1,t=Wi(r,i),t.ref=e.ref,t.return=e,e.child=t}function hx(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(Go(r,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=r,Pp(t,a))t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Ji(t,e,a)}return Ph(t,e,n,i,a)}function dx(t,e,n){var i=e.pendingProps,a=i.children,r=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=r!==null?r.baseLanes|n:n,t!==null){for(a=e.child=t.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;e.childLanes=r&~i}else e.childLanes=0,e.child=null;return S_(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&yu(e,r!==null?r.cachePool:null),r!==null?l_(e,r):wh(),rx(e);else return e.lanes=e.childLanes=536870912,S_(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(yu(e,r.cachePool),l_(e,r),va(),e.memoizedState=null):(t!==null&&yu(e,null),wh(),va());return en(t,e,a,n),e.child}function S_(t,e,n,i){var a=yp();return a=a===null?null:{parent:Gt._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&yu(e,null),wh(),rx(e),t!==null&&dl(t,e,i,!0),null}function Mu(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ph(t,e,n,i,a){return vr(e),n=bp(t,e,n,i,void 0,a),i=Tp(),t!==null&&!Kt?(Ap(t,e,a),Ji(t,e,a)):(at&&i&&gp(e),e.flags|=1,en(t,e,n,a),e.child)}function E_(t,e,n,i,a,r){return vr(e),e.updateQueue=null,n=A0(e,i,n,a),T0(t),i=Tp(),t!==null&&!Kt?(Ap(t,e,r),Ji(t,e,r)):(at&&i&&gp(e),e.flags|=1,en(t,e,n,r),e.child)}function M_(t,e,n,i,a){if(vr(e),e.stateNode===null){var r=os,s=n.contextType;typeof s=="object"&&s!==null&&(r=ln(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Nh,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},Sp(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?ln(s):os,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(uf(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Nh.enqueueReplaceState(r,r.state,null),wo(e,i,r,a),Co(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=yr(n,o);r.props=l;var u=r.context,d=n.contextType;s=os,typeof d=="object"&&d!==null&&(s=ln(d));var f=n.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||u!==s)&&g_(e,r,i,s),pa=!1;var h=e.memoizedState;r.state=h,wo(e,i,r,a),Co(),u=e.memoizedState,o||h!==u||pa?(typeof f=="function"&&(uf(e,n,f,i),u=e.memoizedState),(l=pa||__(e,n,l,i,h,u,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),r.props=i,r.state=u,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,Rh(t,e),s=e.memoizedProps,d=yr(n,s),r.props=d,f=e.pendingProps,h=r.context,u=n.contextType,l=os,typeof u=="object"&&u!==null&&(l=ln(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==f||h!==l)&&g_(e,r,i,l),pa=!1,h=e.memoizedState,r.state=h,wo(e,i,r,a),Co();var p=e.memoizedState;s!==f||h!==p||pa||t!==null&&t.dependencies!==null&&qu(t.dependencies)?(typeof o=="function"&&(uf(e,n,o,i),p=e.memoizedState),(d=pa||__(e,n,d,i,h,p,l)||t!==null&&t.dependencies!==null&&qu(t.dependencies))?(u||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,Mu(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=Us(e,t.child,null,a),e.child=Us(e,null,n,a)):en(t,e,n,a),e.memoizedState=r.state,t=e.child):t=Ji(t,e,a),t}function b_(t,e,n,i){return hl(),e.flags|=256,en(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(t){return{baseLanes:t,cachePool:y0()}}function hf(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Zn),t}function px(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Vt.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(at){if(a?ga(e):va(),at){var o=wt,l;if(l=o){e:{for(l=o,o=gi;l.nodeType!==8;){if(!o){o=null;break e}if(l=li(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:hr!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},l=Ln(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,hn=e,wt=null,l=!0):l=!1}l||gr(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Zh(o)?e.lanes=32:e.lanes=536870912,null;Vi(e)}return o=i.children,i=i.fallback,a?(va(),a=e.mode,o=tc({mode:"hidden",children:o},a),i=fr(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=ff(n),a.childLanes=hf(t,s,n),e.memoizedState=cf,i):(ga(e),zh(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(ga(e),e.flags&=-257,e=df(t,e,n)):e.memoizedState!==null?(va(),e.child=t.child,e.flags|=128,e=null):(va(),a=i.fallback,o=e.mode,i=tc({mode:"visible",children:i.children},o),a=fr(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,Us(e,t.child,null,n),i=e.child,i.memoizedState=ff(n),i.childLanes=hf(t,s,n),e.memoizedState=cf,e=a);else if(ga(e),Zh(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var u=s.dgst;s=u,i=Error(Q(419)),i.stack="",i.digest=s,Vo({value:i,source:null,stack:null}),e=df(t,e,n)}else if(Kt||dl(t,e,n,!1),s=(n&t.childLanes)!==0,Kt||s){if(s=yt,s!==null&&(i=n&-n,i=i&42?1:rp(i),i=i&(s.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Ws(t,i),zn(s,t,i),fx;o.data==="$?"||Vh(),e=df(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,wt=li(o.nextSibling),hn=e,at=!0,dr=null,gi=!1,t!==null&&(Xn[Wn++]=Ii,Xn[Wn++]=Hi,Xn[Wn++]=hr,Ii=t.id,Hi=t.overflow,hr=e),e=zh(e,i.children),e.flags|=4096);return e}return a?(va(),a=i.fallback,o=e.mode,l=t.child,u=l.sibling,i=Wi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?a=Wi(u,a):(a=fr(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=ff(n):(l=o.cachePool,l!==null?(u=Gt._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=y0(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=hf(t,s,n),e.memoizedState=cf,i):(ga(e),n=t.child,t=n.sibling,n=Wi(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function zh(t,e){return e=tc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function tc(t,e){return t=Ln(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function df(t,e,n){return Us(e,t.child,null,n),t=zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mh(t.return,e,n)}function pf(t,e,n,i,a){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=a)}function mx(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;if(en(t,e,i.children,n),i=Vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T_(t,n,e);else if(t.tag===19)T_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(Tt(Vt,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Ju(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),pf(e,!1,a,n,r);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Ju(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}pf(e,!0,n,null,r);break;case"together":pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fa|=e.lanes,!(n&e.childLanes))if(t!==null){if(dl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&qu(t)))}function SM(t,e,n){switch(e.tag){case 3:Iu(e,e.stateNode.containerInfo),_a(e,Gt,t.memoizedState.cache),hl();break;case 27:case 5:fh(e);break;case 4:Iu(e,e.stateNode.containerInfo);break;case 10:_a(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ga(e),e.flags|=128,null):n&e.child.childLanes?px(t,e,n):(ga(e),t=Ji(t,e,n),t!==null?t.sibling:null);ga(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(dl(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return mx(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Tt(Vt,Vt.current),i)break;return null;case 22:case 23:return e.lanes=0,dx(t,e,n);case 24:_a(e,Gt,t.memoizedState.cache)}return Ji(t,e,n)}function _x(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Kt=!0;else{if(!Pp(t,n)&&!(e.flags&128))return Kt=!1,SM(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,at&&e.flags&1048576&&v0(e,Yu,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")_p(i)?(t=yr(i,t),e.tag=1,e=M_(null,e,i,t,n)):(e.tag=0,e=Ph(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===np){e.tag=11,e=x_(null,e,i,t,n);break e}else if(a===ip){e.tag=14,e=y_(null,e,i,t,n);break e}}throw e=uh(i)||i,Error(Q(306,e,""))}}return e;case 0:return Ph(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=yr(i,e.pendingProps),M_(t,e,i,a,n);case 3:e:{if(Iu(e,e.stateNode.containerInfo),t===null)throw Error(Q(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,Rh(t,e),wo(e,i,null,n);var s=e.memoizedState;if(i=s.cache,_a(e,Gt,i),i!==r.cache&&bh(e,[Gt],n,!0),Co(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=b_(t,e,i,n);break e}else if(i!==a){a=jn(Error(Q(424)),e),Vo(a),e=b_(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(wt=li(t.firstChild),hn=e,at=!0,dr=null,gi=!0,n=ax(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hl(),i===a){e=Ji(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 26:return Mu(t,e),t===null?(n=V_(e.type,null,e.pendingProps,null))?e.memoizedState=n:at||(n=e.type,t=e.pendingProps,i=lc(Aa.current).createElement(n),i[on]=e,i[Mn]=t,nn(i,n,t),Zt(i),e.stateNode=i):e.memoizedState=V_(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return fh(e),t===null&&at&&(i=e.stateNode=ny(e.type,e.pendingProps,Aa.current),hn=e,gi=!0,a=wt,Va(e.type)?(Kh=a,wt=li(i.firstChild)):wt=a),en(t,e,e.pendingProps.children,n),Mu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&at&&((a=i=wt)&&(i=ZM(i,e.type,e.pendingProps,gi),i!==null?(e.stateNode=i,hn=e,wt=li(i.firstChild),gi=!1,a=!0):a=!1),a||gr(e)),fh(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,qh(a,r)?i=null:s!==null&&qh(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=bp(t,e,dM,null,null,n),jo._currentValue=a),Mu(t,e),en(t,e,i,n),e.child;case 6:return t===null&&at&&((t=n=wt)&&(n=KM(n,e.pendingProps,gi),n!==null?(e.stateNode=n,hn=e,wt=null,t=!0):t=!1),t||gr(e)),null;case 13:return px(t,e,n);case 4:return Iu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):en(t,e,i,n),e.child;case 11:return x_(t,e,e.type,e.pendingProps,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,_a(e,e.type,i.value),en(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,vr(e),a=ln(a),i=i(a),e.flags|=1,en(t,e,i,n),e.child;case 14:return y_(t,e,e.type,e.pendingProps,n);case 15:return hx(t,e,e.type,e.pendingProps,n);case 19:return mx(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=tc(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Wi(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return dx(t,e,n);case 24:return vr(e),i=ln(Gt),t===null?(a=yp(),a===null&&(a=yt,r=xp(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},Sp(e),_a(e,Gt,a)):(t.lanes&n&&(Rh(t,e),wo(e,null,null,n),Co()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),_a(e,Gt,i)):(i=r.cache,_a(e,Gt,i),i!==a.cache&&bh(e,[Gt],n,!0))),en(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(Q(156,e.tag))}function Ci(t){t.flags|=4}function A_(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!ry(e)){if(e=Qn.current,e!==null&&(($e&4194048)===$e?Ei!==null:($e&62914560)!==$e&&!($e&536870912)||e!==Ei))throw Ao=Ah,S0;t.flags|=8192}}function Fl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vv():536870912,t.lanes|=e,Ls|=e)}function ao(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function EM(t,e,n){var i=e.pendingProps;switch(vp(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Yi(Gt),Ts(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(no(e)?Ci(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,n_())),At(e),null;case 26:return n=e.memoizedState,t===null?(Ci(e),n!==null?(At(e),A_(e,n)):(At(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Ci(e),At(e),A_(e,n)):(At(e),e.flags&=-16777217):(t.memoizedProps!==i&&Ci(e),At(e),e.flags&=-16777217),null;case 27:Hu(e),n=Aa.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ci(e);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return At(e),null}t=yi.current,no(e)?e_(e):(t=ny(a,i,n),e.stateNode=t,Ci(e))}return At(e),null;case 5:if(Hu(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Ci(e);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return At(e),null}if(t=yi.current,no(e))e_(e);else{switch(a=lc(Aa.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[on]=e,t[Mn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(nn(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ci(e)}}return At(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Ci(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(t=Aa.current,no(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=hn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[on]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||$x(t.nodeValue,n)),t||gr(e)}else t=lc(t).createTextNode(i),t[on]=e,e.stateNode=t}return At(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=no(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(Q(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Q(317));a[on]=e}else hl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),a=!1}else a=n_(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Vi(e),e):(Vi(e),null)}if(Vi(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Fl(e,e.updateQueue),At(e),null;case 4:return Ts(),t===null&&kp(e.stateNode.containerInfo),At(e),null;case 10:return Yi(e.type),At(e),null;case 19:if(Qt(Vt),a=e.memoizedState,a===null)return At(e),null;if(i=(e.flags&128)!==0,r=a.rendering,r===null)if(i)ao(a,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=Ju(t),r!==null){for(e.flags|=128,ao(a,!1),t=r.updateQueue,e.updateQueue=t,Fl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)g0(n,t),n=n.sibling;return Tt(Vt,Vt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Si()>ic&&(e.flags|=128,i=!0,ao(a,!1),e.lanes=4194304)}else{if(!i)if(t=Ju(r),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Fl(e,t),ao(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!at)return At(e),null}else 2*Si()-a.renderingStartTime>ic&&n!==536870912&&(e.flags|=128,i=!0,ao(a,!1),e.lanes=4194304);a.isBackwards?(r.sibling=e.child,e.child=r):(t=a.last,t!==null?t.sibling=r:e.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Si(),e.sibling=null,t=Vt.current,Tt(Vt,i?t&1|2:t&1),e):(At(e),null);case 22:case 23:return Vi(e),Ep(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),n=e.updateQueue,n!==null&&Fl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Qt(pr),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Yi(Gt),At(e),null;case 25:return null;case 30:return null}throw Error(Q(156,e.tag))}function MM(t,e){switch(vp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(Gt),Ts(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Hu(e),null;case 13:if(Vi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));hl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qt(Vt),null;case 4:return Ts(),null;case 10:return Yi(e.type),null;case 22:case 23:return Vi(e),Ep(),t!==null&&Qt(pr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Yi(Gt),null;case 25:return null;default:return null}}function gx(t,e){switch(vp(e),e.tag){case 3:Yi(Gt),Ts();break;case 26:case 27:case 5:Hu(e);break;case 4:Ts();break;case 13:Vi(e);break;case 19:Qt(Vt);break;case 10:Yi(e.type);break;case 22:case 23:Vi(e),Ep(),t!==null&&Qt(pr);break;case 24:Yi(Gt)}}function vl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){gt(e,e.return,o)}}function Ba(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,u=o;try{u()}catch(d){gt(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){gt(e,e.return,d)}}function vx(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{b0(e,n)}catch(i){gt(t,t.return,i)}}}function xx(t,e,n){n.props=yr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){gt(t,e,i)}}function Uo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){gt(t,e,a)}}function vi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){gt(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){gt(t,e,a)}else n.current=null}function yx(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){gt(t,t.return,a)}}function mf(t,e,n){try{var i=t.stateNode;XM(i,t.type,n,e),i[Mn]=e}catch(a){gt(t,t.return,a)}}function Sx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function _f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(i===27&&Va(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function nc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Va(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(nc(t,e,n),t=t.sibling;t!==null;)nc(t,e,n),t=t.sibling}function Ex(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);nn(e,i,n),e[on]=t,e[Mn]=n}catch(r){gt(t,t.return,r)}}var zi=!1,Lt=!1,gf=!1,R_=typeof WeakSet=="function"?WeakSet:Set,jt=null;function bM(t,e){if(t=t.containerInfo,Wh=hc,t=u0(t),dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,u=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||a!==0&&f.nodeType!==3||(o=s+a),f!==r||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===a&&(o=s),h===r&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:t,selectionRange:n},hc=!1,jt=e;jt!==null;)if(e=jt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,jt=t;else for(;jt!==null;){switch(e=jt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var x=yr(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(x,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(y){gt(n,n.return,y)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)jh(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(Q(163))}if(t=e.sibling,t!==null){t.return=e.return,jt=t;break}jt=e.return}}function Mx(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ra(t,n),i&4&&vl(5,n);break;case 1:if(ra(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){gt(n,n.return,s)}else{var a=yr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){gt(n,n.return,s)}}i&64&&vx(n),i&512&&Uo(n,n.return);break;case 3:if(ra(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{b0(t,e)}catch(s){gt(n,n.return,s)}}break;case 27:e===null&&i&4&&Ex(n);case 26:case 5:ra(t,n),e===null&&i&4&&yx(n),i&512&&Uo(n,n.return);break;case 12:ra(t,n);break;case 13:ra(t,n),i&4&&Ax(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=NM.bind(null,n),QM(t,n))));break;case 22:if(i=n.memoizedState!==null||zi,!i){e=e!==null&&e.memoizedState!==null||Lt,a=zi;var r=Lt;zi=i,(Lt=e)&&!r?ha(t,n,(n.subtreeFlags&8772)!==0):ra(t,n),zi=a,Lt=r}break;case 30:break;default:ra(t,n)}}function bx(t){var e=t.alternate;e!==null&&(t.alternate=null,bx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&op(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Mt=null,xn=!1;function wi(t,e,n){for(n=n.child;n!==null;)Tx(t,e,n),n=n.sibling}function Tx(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 26:Lt||vi(n,e),wi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Lt||vi(n,e);var i=Mt,a=xn;Va(n.type)&&(Mt=n.stateNode,xn=!1),wi(t,e,n),Po(n.stateNode),Mt=i,xn=a;break;case 5:Lt||vi(n,e);case 6:if(i=Mt,a=xn,Mt=null,wi(t,e,n),Mt=i,xn=a,Mt!==null)if(xn)try{(Mt.nodeType===9?Mt.body:Mt.nodeName==="HTML"?Mt.ownerDocument.body:Mt).removeChild(n.stateNode)}catch(r){gt(n,e,r)}else try{Mt.removeChild(n.stateNode)}catch(r){gt(n,e,r)}break;case 18:Mt!==null&&(xn?(t=Mt,I_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Qo(t)):I_(Mt,n.stateNode));break;case 4:i=Mt,a=xn,Mt=n.stateNode.containerInfo,xn=!0,wi(t,e,n),Mt=i,xn=a;break;case 0:case 11:case 14:case 15:Lt||Ba(2,n,e),Lt||Ba(4,n,e),wi(t,e,n);break;case 1:Lt||(vi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&xx(n,e,i)),wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:Lt=(i=Lt)||n.memoizedState!==null,wi(t,e,n),Lt=i;break;default:wi(t,e,n)}}function Ax(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qo(t)}catch(n){gt(e,e.return,n)}}function TM(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new R_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new R_),e;default:throw Error(Q(435,t.tag))}}function vf(t,e){var n=TM(t);e.forEach(function(i){var a=OM.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Va(o.type)){Mt=o.stateNode,xn=!1;break e}break;case 5:Mt=o.stateNode,xn=!1;break e;case 3:case 4:Mt=o.stateNode.containerInfo,xn=!0;break e}o=o.return}if(Mt===null)throw Error(Q(160));Tx(r,s,a),Mt=null,xn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Rx(e,t),e=e.sibling}var ai=null;function Rx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(e,t),Rn(t),i&4&&(Ba(3,t,t.return),vl(3,t),Ba(5,t,t.return));break;case 1:An(e,t),Rn(t),i&512&&(Lt||n===null||vi(n,n.return)),i&64&&zi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ai;if(An(e,t),Rn(t),i&512&&(Lt||n===null||vi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[cl]||r[on]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),nn(r,i,n),r[on]=t,Zt(r),i=r;break e;case"link":var s=X_("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),nn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=X_("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),nn(r,i,n),a.head.appendChild(r);break;default:throw Error(Q(468,i))}r[on]=t,Zt(r),i=r}t.stateNode=i}else W_(a,t.type,t.stateNode);else t.stateNode=k_(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?W_(a,t.type,t.stateNode):k_(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&mf(t,t.memoizedProps,n.memoizedProps)}break;case 27:An(e,t),Rn(t),i&512&&(Lt||n===null||vi(n,n.return)),n!==null&&i&4&&mf(t,t.memoizedProps,n.memoizedProps);break;case 5:if(An(e,t),Rn(t),i&512&&(Lt||n===null||vi(n,n.return)),t.flags&32){a=t.stateNode;try{Rs(a,"")}catch(p){gt(t,t.return,p)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,mf(t,a,n!==null?n.memoizedProps:a)),i&1024&&(gf=!0);break;case 6:if(An(e,t),Rn(t),i&4){if(t.stateNode===null)throw Error(Q(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(p){gt(t,t.return,p)}}break;case 3:if(Au=null,a=ai,ai=uc(e.containerInfo),An(e,t),ai=a,Rn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(p){gt(t,t.return,p)}gf&&(gf=!1,Cx(t));break;case 4:i=ai,ai=uc(t.stateNode.containerInfo),An(e,t),Rn(t),ai=i;break;case 12:An(e,t),Rn(t);break;case 13:An(e,t),Rn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hp=Si()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vf(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=zi,d=Lt;if(zi=u||a,Lt=d||l,An(e,t),Lt=d,zi=u,Rn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||zi||Lt||ar(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(p){gt(l,l.return,p)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(p){gt(l,l.return,p)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,vf(t,n))));break;case 19:An(e,t),Rn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vf(t,i)));break;case 30:break;case 21:break;default:An(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Sx(i)){n=i;break}i=i.return}if(n==null)throw Error(Q(160));switch(n.tag){case 27:var a=n.stateNode,r=_f(t);nc(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(Rs(s,""),n.flags&=-33);var o=_f(t);nc(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,u=_f(t);Bh(t,u,l);break;default:throw Error(Q(161))}}catch(d){gt(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Cx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Cx(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ra(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mx(t,e.alternate,e),e=e.sibling}function ar(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ba(4,e,e.return),ar(e);break;case 1:vi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&xx(e,e.return,n),ar(e);break;case 27:Po(e.stateNode);case 26:case 5:vi(e,e.return),ar(e);break;case 22:e.memoizedState===null&&ar(e);break;case 30:ar(e);break;default:ar(e)}t=t.sibling}}function ha(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:ha(a,r,n),vl(4,r);break;case 1:if(ha(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){gt(i,i.return,u)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)M0(l[a],o)}catch(u){gt(i,i.return,u)}}n&&s&64&&vx(r),Uo(r,r.return);break;case 27:Ex(r);case 26:case 5:ha(a,r,n),n&&i===null&&s&4&&yx(r),Uo(r,r.return);break;case 12:ha(a,r,n);break;case 13:ha(a,r,n),n&&s&4&&Ax(a,r);break;case 22:r.memoizedState===null&&ha(a,r,n),Uo(r,r.return);break;case 30:break;default:ha(a,r,n)}e=e.sibling}}function zp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&pl(n))}function Bp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pl(t))}function pi(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wx(t,e,n,i),e=e.sibling}function wx(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:pi(t,e,n,i),a&2048&&vl(9,e);break;case 1:pi(t,e,n,i);break;case 3:pi(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pl(t)));break;case 12:if(a&2048){pi(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){gt(e,e.return,l)}}else pi(t,e,n,i);break;case 13:pi(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?pi(t,e,n,i):Lo(t,e):r._visibility&2?pi(t,e,n,i):(r._visibility|=2,Zr(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&zp(s,e);break;case 24:pi(t,e,n,i),a&2048&&Bp(e.alternate,e);break;default:pi(t,e,n,i)}}function Zr(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,o=n,l=i,u=s.flags;switch(s.tag){case 0:case 11:case 15:Zr(r,s,o,l,a),vl(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Zr(r,s,o,l,a):Lo(r,s):(d._visibility|=2,Zr(r,s,o,l,a)),a&&u&2048&&zp(s.alternate,s);break;case 24:Zr(r,s,o,l,a),a&&u&2048&&Bp(s.alternate,s);break;default:Zr(r,s,o,l,a)}e=e.sibling}}function Lo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Lo(n,i),a&2048&&zp(i.alternate,i);break;case 24:Lo(n,i),a&2048&&Bp(i.alternate,i);break;default:Lo(n,i)}e=e.sibling}}var vo=8192;function Ur(t){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Dx(t),t=t.sibling}function Dx(t){switch(t.tag){case 26:Ur(t),t.flags&vo&&t.memoizedState!==null&&cb(ai,t.memoizedState,t.memoizedProps);break;case 5:Ur(t);break;case 3:case 4:var e=ai;ai=uc(t.stateNode.containerInfo),Ur(t),ai=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=vo,vo=16777216,Ur(t),vo=e):Ur(t));break;default:Ur(t)}}function Ux(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ro(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];jt=i,Nx(i,t)}Ux(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Lx(t),t=t.sibling}function Lx(t){switch(t.tag){case 0:case 11:case 15:ro(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:ro(t);break;case 12:ro(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,bu(t)):ro(t);break;default:ro(t)}}function bu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];jt=i,Nx(i,t)}Ux(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ba(8,e,e.return),bu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,bu(e));break;default:bu(e)}t=t.sibling}}function Nx(t,e){for(;jt!==null;){var n=jt;switch(n.tag){case 0:case 11:case 15:Ba(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,jt=i;else e:for(n=t;jt!==null;){i=jt;var a=i.sibling,r=i.return;if(bx(i),i===n){jt=null;break e}if(a!==null){a.return=r,jt=a;break e}jt=r}}}var AM={getCacheForType:function(t){var e=ln(Gt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},RM=typeof WeakMap=="function"?WeakMap:Map,ht=0,yt=null,Ze=null,$e=0,ft=0,Dn=null,Ma=!1,Ys=!1,Fp=!1,$i=0,Dt=0,Fa=0,mr=0,Ip=0,Zn=0,Ls=0,No=null,yn=null,Fh=!1,Hp=0,ic=1/0,ac=null,wa=null,tn=0,Da=null,Ns=null,Ss=0,Ih=0,Hh=null,Ox=null,Oo=0,Gh=null;function Pn(){if(ht&2&&$e!==0)return $e&-$e;if(Le.T!==null){var t=Cs;return t!==0?t:Vp()}return Wv()}function Px(){Zn===0&&(Zn=!($e&536870912)||at?Gv():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),Zn}function zn(t,e,n){(t===yt&&(ft===2||ft===9)||t.cancelPendingCommit!==null)&&(Os(t,0),ba(t,$e,Zn,!1)),ul(t,n),(!(ht&2)||t!==yt)&&(t===yt&&(!(ht&2)&&(mr|=n),Dt===4&&ba(t,$e,Zn,!1)),Ti(t))}function zx(t,e,n){if(ht&6)throw Error(Q(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||ll(t,e),a=i?DM(t,e):xf(t,e,!0),r=i;do{if(a===0){Ys&&!i&&ba(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!CM(n)){a=xf(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=No;var l=o.current.memoizedState.isDehydrated;if(l&&(Os(o,s).flags|=256),s=xf(o,s,!1),s!==2){if(Fp&&!l){o.errorRecoveryDisabledLanes|=r,mr|=r,a=4;break e}r=yn,yn=a,r!==null&&(yn===null?yn=r:yn.push.apply(yn,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){Os(t,0),ba(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(Q(345));case 4:if((e&4194048)!==e)break;case 6:ba(i,e,Zn,!Ma);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((e&62914560)===e&&(a=Hp+300-Si(),10<a)){if(ba(i,e,Zn,!Ma),Mc(i,0,!0)!==0)break e;i.timeoutHandle=ty(C_.bind(null,i,n,yn,ac,Fh,e,Zn,mr,Ls,Ma,r,2,-0,0),a);break e}C_(i,n,yn,ac,Fh,e,Zn,mr,Ls,Ma,r,0,-0,0)}}break}while(!0);Ti(t)}function C_(t,e,n,i,a,r,s,o,l,u,d,f,h,p){if(t.timeoutHandle=-1,f=e.subtreeFlags,(f&8192||(f&16785408)===16785408)&&(qo={stylesheets:null,count:0,unsuspend:ub},Dx(e),f=fb(),f!==null)){t.cancelPendingCommit=f(D_.bind(null,t,e,r,n,i,a,s,o,l,d,1,h,p)),ba(t,r,s,!u);return}D_(t,e,r,n,i,a,s,o,l)}function CM(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Fn(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ba(t,e,n,i){e&=~Ip,e&=~mr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-On(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&kv(t,n,e)}function Nc(){return ht&6?!0:(xl(0),!1)}function Gp(){if(Ze!==null){if(ft===0)var t=Ze.return;else t=Ze,Gi=Ar=null,Rp(t),ys=null,Xo=0,t=Ze;for(;t!==null;)gx(t.alternate,t),t=t.return;Ze=null}}function Os(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,YM(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Gp(),yt=t,Ze=n=Wi(t.current,null),$e=e,ft=0,Dn=null,Ma=!1,Ys=ll(t,e),Fp=!1,Ls=Zn=Ip=mr=Fa=Dt=0,yn=No=null,Fh=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-On(i),r=1<<a;e|=t[a],i&=~r}return $i=e,Rc(),n}function Bx(t,e){Ye=null,Le.H=Qu,e===ml||e===wc?(e=s_(),ft=3):e===S0?(e=s_(),ft=4):ft=e===fx?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dn=e,Ze===null&&(Dt=1,ec(t,jn(e,t.current)))}function Fx(){var t=Le.H;return Le.H=Qu,t===null?Qu:t}function Ix(){var t=Le.A;return Le.A=AM,t}function Vh(){Dt=4,Ma||($e&4194048)!==$e&&Qn.current!==null||(Ys=!0),!(Fa&134217727)&&!(mr&134217727)||yt===null||ba(yt,$e,Zn,!1)}function xf(t,e,n){var i=ht;ht|=2;var a=Fx(),r=Ix();(yt!==t||$e!==e)&&(ac=null,Os(t,e)),e=!1;var s=Dt;e:do try{if(ft!==0&&Ze!==null){var o=Ze,l=Dn;switch(ft){case 8:Gp(),s=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(e=!0);var u=ft;if(ft=0,Dn=null,cs(t,o,l,u),n&&Ys){s=0;break e}break;default:u=ft,ft=0,Dn=null,cs(t,o,l,u)}}wM(),s=Dt;break}catch(d){Bx(t,d)}while(!0);return e&&t.shellSuspendCounter++,Gi=Ar=null,ht=i,Le.H=a,Le.A=r,Ze===null&&(yt=null,$e=0,Rc()),s}function wM(){for(;Ze!==null;)Hx(Ze)}function DM(t,e){var n=ht;ht|=2;var i=Fx(),a=Ix();yt!==t||$e!==e?(ac=null,ic=Si()+500,Os(t,e)):Ys=ll(t,e);e:do try{if(ft!==0&&Ze!==null){e=Ze;var r=Dn;t:switch(ft){case 1:ft=0,Dn=null,cs(t,e,r,1);break;case 2:case 9:if(r_(r)){ft=0,Dn=null,w_(e);break}e=function(){ft!==2&&ft!==9||yt!==t||(ft=7),Ti(t)},r.then(e,e);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:r_(r)?(ft=0,Dn=null,w_(e)):(ft=0,Dn=null,cs(t,e,r,7));break;case 5:var s=null;switch(Ze.tag){case 26:s=Ze.memoizedState;case 5:case 27:var o=Ze;if(!s||ry(s)){ft=0,Dn=null;var l=o.sibling;if(l!==null)Ze=l;else{var u=o.return;u!==null?(Ze=u,Oc(u)):Ze=null}break t}}ft=0,Dn=null,cs(t,e,r,5);break;case 6:ft=0,Dn=null,cs(t,e,r,6);break;case 8:Gp(),Dt=6;break e;default:throw Error(Q(462))}}UM();break}catch(d){Bx(t,d)}while(!0);return Gi=Ar=null,Le.H=i,Le.A=a,ht=n,Ze!==null?0:(yt=null,$e=0,Rc(),Dt)}function UM(){for(;Ze!==null&&!$S();)Hx(Ze)}function Hx(t){var e=_x(t.alternate,t,$i);t.memoizedProps=t.pendingProps,e===null?Oc(t):Ze=e}function w_(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=E_(n,e,e.pendingProps,e.type,void 0,$e);break;case 11:e=E_(n,e,e.pendingProps,e.type.render,e.ref,$e);break;case 5:Rp(e);default:gx(n,e),e=Ze=g0(e,$i),e=_x(n,e,$i)}t.memoizedProps=t.pendingProps,e===null?Oc(t):Ze=e}function cs(t,e,n,i){Gi=Ar=null,Rp(e),ys=null,Xo=0;var a=e.return;try{if(yM(t,a,e,n,$e)){Dt=1,ec(t,jn(n,t.current)),Ze=null;return}}catch(r){if(a!==null)throw Ze=a,r;Dt=1,ec(t,jn(n,t.current)),Ze=null;return}e.flags&32768?(at||i===1?t=!0:Ys||$e&536870912?t=!1:(Ma=t=!0,(i===2||i===9||i===3||i===6)&&(i=Qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Gx(e,t)):Oc(e)}function Oc(t){var e=t;do{if(e.flags&32768){Gx(e,Ma);return}t=e.return;var n=EM(e.alternate,e,$i);if(n!==null){Ze=n;return}if(e=e.sibling,e!==null){Ze=e;return}Ze=e=t}while(e!==null);Dt===0&&(Dt=5)}function Gx(t,e){do{var n=MM(t.alternate,t);if(n!==null){n.flags&=32767,Ze=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Ze=t;return}Ze=t=n}while(t!==null);Dt=6,Ze=null}function D_(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do Pc();while(tn!==0);if(ht&6)throw Error(Q(327));if(e!==null){if(e===t.current)throw Error(Q(177));if(r=e.lanes|e.childLanes,r|=pp,uE(t,n,r,s,o,l),t===yt&&(Ze=yt=null,$e=0),Ns=e,Da=t,Ss=n,Ih=r,Hh=a,Ox=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,PM(Gu,function(){return Yx(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Le.T,Le.T=null,a=rt.p,rt.p=2,s=ht,ht|=4;try{bM(t,e,n)}finally{ht=s,rt.p=a,Le.T=i}}tn=1,Vx(),kx(),Xx()}}function Vx(){if(tn===1){tn=0;var t=Da,e=Ns,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Le.T,Le.T=null;var i=rt.p;rt.p=2;var a=ht;ht|=4;try{Rx(e,t);var r=Yh,s=u0(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&l0(o.ownerDocument.documentElement,o)){if(l!==null&&dp(o)){var u=l.start,d=l.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var p=h.getSelection(),x=o.textContent.length,y=Math.min(l.start,x),m=l.end===void 0?y:Math.min(l.end,x);!p.extend&&y>m&&(s=m,m=y,y=s);var c=Qm(o,y),_=Qm(o,m);if(c&&_&&(p.rangeCount!==1||p.anchorNode!==c.node||p.anchorOffset!==c.offset||p.focusNode!==_.node||p.focusOffset!==_.offset)){var g=f.createRange();g.setStart(c.node,c.offset),p.removeAllRanges(),y>m?(p.addRange(g),p.extend(_.node,_.offset)):(g.setEnd(_.node,_.offset),p.addRange(g))}}}}for(f=[],p=o;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var v=f[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}hc=!!Wh,Yh=Wh=null}finally{ht=a,rt.p=i,Le.T=n}}t.current=e,tn=2}}function kx(){if(tn===2){tn=0;var t=Da,e=Ns,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Le.T,Le.T=null;var i=rt.p;rt.p=2;var a=ht;ht|=4;try{Mx(t,e.alternate,e)}finally{ht=a,rt.p=i,Le.T=n}}tn=3}}function Xx(){if(tn===4||tn===3){tn=0,eE();var t=Da,e=Ns,n=Ss,i=Ox;e.subtreeFlags&10256||e.flags&10256?tn=5:(tn=0,Ns=Da=null,Wx(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(wa=null),sp(n),e=e.stateNode,Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Le.T,a=rt.p,rt.p=2,Le.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{Le.T=e,rt.p=a}}Ss&3&&Pc(),Ti(t),a=t.pendingLanes,n&4194090&&a&42?t===Gh?Oo++:(Oo=0,Gh=t):Oo=0,xl(0)}}function Wx(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pl(e)))}function Pc(t){return Vx(),kx(),Xx(),Yx()}function Yx(){if(tn!==5)return!1;var t=Da,e=Ih;Ih=0;var n=sp(Ss),i=Le.T,a=rt.p;try{rt.p=32>n?32:n,Le.T=null,n=Hh,Hh=null;var r=Da,s=Ss;if(tn=0,Ns=Da=null,Ss=0,ht&6)throw Error(Q(331));var o=ht;if(ht|=4,Lx(r.current),wx(r,r.current,s,n),ht=o,xl(0,!1),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(ol,r)}catch{}return!0}finally{rt.p=a,Le.T=i,Wx(t,e)}}function U_(t,e,n){e=jn(n,e),e=Oh(t.stateNode,e,2),t=Ca(t,e,2),t!==null&&(ul(t,2),Ti(t))}function gt(t,e,n){if(t.tag===3)U_(t,t,n);else for(;e!==null;){if(e.tag===3){U_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wa===null||!wa.has(i))){t=jn(n,t),n=ux(2),i=Ca(e,n,2),i!==null&&(cx(n,i,e,t),ul(i,2),Ti(i));break}}e=e.return}}function yf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new RM;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Fp=!0,a.add(n),t=LM.bind(null,t,e,n),e.then(t,t))}function LM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,yt===t&&($e&n)===n&&(Dt===4||Dt===3&&($e&62914560)===$e&&300>Si()-Hp?!(ht&2)&&Os(t,0):Ip|=n,Ls===$e&&(Ls=0)),Ti(t)}function qx(t,e){e===0&&(e=Vv()),t=Ws(t,e),t!==null&&(ul(t,e),Ti(t))}function NM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qx(t,n)}function OM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(e),qx(t,n)}function PM(t,e){return ap(t,e)}var rc=null,Kr=null,kh=!1,sc=!1,Sf=!1,_r=0;function Ti(t){t!==Kr&&t.next===null&&(Kr===null?rc=Kr=t:Kr=Kr.next=t),sc=!0,kh||(kh=!0,BM())}function xl(t,e){if(!Sf&&sc){Sf=!0;do for(var n=!1,i=rc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-On(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,L_(i,r))}else r=$e,r=Mc(i,i===yt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||ll(i,r)||(n=!0,L_(i,r));i=i.next}while(n);Sf=!1}}function zM(){jx()}function jx(){sc=kh=!1;var t=0;_r!==0&&(WM()&&(t=_r),_r=0);for(var e=Si(),n=null,i=rc;i!==null;){var a=i.next,r=Zx(i,e);r===0?(i.next=null,n===null?rc=a:n.next=a,a===null&&(Kr=n)):(n=i,(t!==0||r&3)&&(sc=!0)),i=a}xl(t)}function Zx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-On(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=lE(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=yt,n=$e,n=Mc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ft===2||ft===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Yc(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||ll(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Yc(i),sp(n)){case 2:case 8:n=Iv;break;case 32:n=Gu;break;case 268435456:n=Hv;break;default:n=Gu}return i=Kx.bind(null,t),n=ap(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Yc(i),t.callbackPriority=2,t.callbackNode=null,2}function Kx(t,e){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Pc()&&t.callbackNode!==n)return null;var i=$e;return i=Mc(t,t===yt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(zx(t,i,e),Zx(t,Si()),t.callbackNode!=null&&t.callbackNode===n?Kx.bind(null,t):null)}function L_(t,e){if(Pc())return null;zx(t,e,!0)}function BM(){qM(function(){ht&6?ap(Fv,zM):jx()})}function Vp(){return _r===0&&(_r=Gv()),_r}function N_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_u(""+t)}function O_(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function FM(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=N_((a[Mn]||null).action),s=i.submitter;s&&(e=(e=s[Mn]||null)?N_(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new bc("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_r!==0){var l=s?O_(a,s):new FormData(a);Lh(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?O_(a,s):new FormData(a),Lh(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Ef=0;Ef<yh.length;Ef++){var Mf=yh[Ef],IM=Mf.toLowerCase(),HM=Mf[0].toUpperCase()+Mf.slice(1);fi(IM,"on"+HM)}fi(f0,"onAnimationEnd");fi(h0,"onAnimationIteration");fi(d0,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(iM,"onTransitionRun");fi(aM,"onTransitionStart");fi(rM,"onTransitionCancel");fi(p0,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function Qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=u;try{r(a)}catch(d){$u(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=u;try{r(a)}catch(d){$u(d)}a.currentTarget=null,r=l}}}}function je(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var i=t+"__bubble";n.has(i)||(Jx(e,t,2,!1),n.add(i))}function bf(t,e,n){var i=0;e&&(i|=4),Jx(n,t,i,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function kp(t){if(!t[Il]){t[Il]=!0,Yv.forEach(function(n){n!=="selectionchange"&&(GM.has(n)||bf(n,!1,t),bf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,bf("selectionchange",!1,e))}}function Jx(t,e,n,i){switch(cy(e)){case 2:var a=pb;break;case 8:a=mb;break;default:a=qp}n=a.bind(null,e,n,t),a=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Tf(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=ts(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}e0(function(){var u=r,d=up(n),f=[];e:{var h=m0.get(t);if(h!==void 0){var p=bc,x=t;switch(t){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":p=PE;break;case"focusin":x="focus",p=ef;break;case"focusout":x="blur",p=ef;break;case"beforeblur":case"afterblur":p=ef;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=FE;break;case f0:case h0:case d0:p=AE;break;case p0:p=HE;break;case"scroll":case"scrollend":p=SE;break;case"wheel":p=VE;break;case"copy":case"cut":case"paste":p=CE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=km;break;case"toggle":case"beforetoggle":p=XE}var y=(e&4)!==0,m=!y&&(t==="scroll"||t==="scrollend"),c=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,g;_!==null;){var v=_;if(g=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||g===null||c===null||(v=Io(_,c),v!=null&&y.push(Yo(_,v,g))),m)break;_=_.return}0<y.length&&(h=new p(h,x,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==_h&&(x=n.relatedTarget||n.fromElement)&&(ts(x)||x[ks]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?ts(x):null,x!==null&&(m=sl(x),y=x.tag,x!==m||y!==5&&y!==27&&y!==6)&&(x=null)):(p=null,x=u),p!==x)){if(y=Gm,v="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=km,v="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?h:go(p),g=x==null?h:go(x),h=new y(v,_+"leave",p,n,d),h.target=m,h.relatedTarget=g,v=null,ts(d)===u&&(y=new y(c,_+"enter",x,n,d),y.target=g,y.relatedTarget=m,v=y),m=v,p&&x)t:{for(y=p,c=x,_=0,g=y;g;g=Lr(g))_++;for(g=0,v=c;v;v=Lr(v))g++;for(;0<_-g;)y=Lr(y),_--;for(;0<g-_;)c=Lr(c),g--;for(;_--;){if(y===c||c!==null&&y===c.alternate)break t;y=Lr(y),c=Lr(c)}y=null}else y=null;p!==null&&P_(f,h,p,y,!1),x!==null&&m!==null&&P_(f,m,x,y,!0)}}e:{if(h=u?go(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=qm;else if(Ym(h))if(s0)R=eM;else{R=JE;var C=QE}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?u&&lp(u.elementType)&&(R=qm):R=$E;if(R&&(R=R(t,u))){r0(f,R,n,d);break e}C&&C(t,h,u),t==="focusout"&&u&&h.type==="number"&&u.memoizedProps.value!=null&&mh(h,"number",h.value)}switch(C=u?go(u):window,t){case"focusin":(Ym(C)||C.contentEditable==="true")&&(as=C,vh=u,bo=null);break;case"focusout":bo=vh=as=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,Jm(f,n,d);break;case"selectionchange":if(nM)break;case"keydown":case"keyup":Jm(f,n,d)}var A;if(hp)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else is?i0(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(n0&&n.locale!=="ko"&&(is||w!=="onCompositionStart"?w==="onCompositionEnd"&&is&&(A=t0()):(Ea=d,cp="value"in Ea?Ea.value:Ea.textContent,is=!0)),C=oc(u,w),0<C.length&&(w=new Vm(w,t,null,n,d),f.push({event:w,listeners:C}),A?w.data=A:(A=a0(n),A!==null&&(w.data=A)))),(A=YE?qE(t,n):jE(t,n))&&(w=oc(u,"onBeforeInput"),0<w.length&&(C=new Vm("onBeforeInput","beforeinput",null,n,d),f.push({event:C,listeners:w}),C.data=A)),FM(f,t,u,n,d)}Qx(f,e)})}function Yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=Io(t,n),a!=null&&i.unshift(Yo(t,a,r)),a=Io(t,e),a!=null&&i.push(Yo(t,a,r))),t.tag===3)return i;t=t.return}return[]}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P_(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||u===null||(l=u,a?(u=Io(n,r),u!=null&&s.unshift(Yo(n,u,l))):a||(u=Io(n,r),u!=null&&s.push(Yo(n,u,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var VM=/\r\n?/g,kM=/\u0000|\uFFFD/g;function z_(t){return(typeof t=="string"?t:""+t).replace(VM,`
`).replace(kM,"")}function $x(t,e){return e=z_(e),z_(t)===e}function zc(){}function pt(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Rs(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Rs(t,""+i);break;case"className":Ll(t,"class",i);break;case"tabIndex":Ll(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ll(t,n,i);break;case"style":$v(t,i,r);break;case"data":if(e!=="object"){Ll(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=_u(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&pt(t,e,"name",a.name,a,null),pt(t,e,"formEncType",a.formEncType,a,null),pt(t,e,"formMethod",a.formMethod,a,null),pt(t,e,"formTarget",a.formTarget,a,null)):(pt(t,e,"encType",a.encType,a,null),pt(t,e,"method",a.method,a,null),pt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=_u(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=zc);break;case"onScroll":i!=null&&je("scroll",t);break;case"onScrollEnd":i!=null&&je("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Q(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=_u(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":je("beforetoggle",t),je("toggle",t),mu(t,"popover",i);break;case"xlinkActuate":Ri(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ri(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ri(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ri(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ri(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ri(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":mu(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=xE.get(n)||n,mu(t,n,i))}}function Xh(t,e,n,i,a,r){switch(n){case"style":$v(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Q(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Rs(t,i):(typeof i=="number"||typeof i=="bigint")&&Rs(t,""+i);break;case"onScroll":i!=null&&je("scroll",t);break;case"onScrollEnd":i!=null&&je("scrollend",t);break;case"onClick":i!=null&&(t.onclick=zc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[Mn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):mu(t,n,i)}}}function nn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",t),je("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,e));default:pt(t,e,r,s,n,null)}}a&&pt(t,e,"srcSet",n.srcSet,n,null),i&&pt(t,e,"src",n.src,n,null);return;case"input":je("invalid",t);var o=r=s=a=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,e));break;default:pt(t,e,i,d,n,null)}}Kv(t,r,o,l,u,s,a,!1),Vu(t);return;case"select":je("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:pt(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?ms(t,!!i,e,!1):n!=null&&ms(t,!!i,n,!0);return;case"textarea":je("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:pt(t,e,s,o,n,null)}Jv(t,i,a,r),Vu(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pt(t,e,l,i,n,null)}return;case"dialog":je("beforetoggle",t),je("toggle",t),je("cancel",t),je("close",t);break;case"iframe":case"object":je("load",t);break;case"video":case"audio":for(i=0;i<Wo.length;i++)je(Wo[i],t);break;case"image":je("error",t),je("load",t);break;case"details":je("toggle",t);break;case"embed":case"source":case"link":je("error",t),je("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,e));default:pt(t,e,u,i,n,null)}return;default:if(lp(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Xh(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&pt(t,e,o,i,n,null))}function XM(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,u=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||pt(t,e,p,null,i,f)}}for(var h in i){var p=i[h];if(f=n[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":r=p;break;case"name":a=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Q(137,e));break;default:p!==f&&pt(t,e,h,p,i,f)}}ph(t,s,o,l,u,d,r,a);return;case"select":p=s=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||pt(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&pt(t,e,a,r,i,l)}e=o,n=s,i=p,h!=null?ms(t,!!n,h,!1):!!i!=!!n&&(e!=null?ms(t,!!n,e,!0):ms(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:pt(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Q(91));break;default:a!==r&&pt(t,e,s,a,i,r)}Qv(t,h,p);return;case"option":for(var x in n)if(h=n[x],n.hasOwnProperty(x)&&h!=null&&!i.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:pt(t,e,x,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:pt(t,e,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var y in n)h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y)&&pt(t,e,y,null,i,h);for(u in i)if(h=i[u],p=n[u],i.hasOwnProperty(u)&&h!==p&&(h!=null||p!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Q(137,e));break;default:pt(t,e,u,h,i,p)}return;default:if(lp(e)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&Xh(t,e,m,void 0,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h===void 0&&p===void 0||Xh(t,e,d,h,i,p);return}}for(var c in n)h=n[c],n.hasOwnProperty(c)&&h!=null&&!i.hasOwnProperty(c)&&pt(t,e,c,null,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||pt(t,e,f,h,i,p)}var Wh=null,Yh=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function B_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ey(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=null;function WM(){var t=window.event;return t&&t.type==="popstate"?t===Af?!1:(Af=t,!0):(Af=null,!1)}var ty=typeof setTimeout=="function"?setTimeout:void 0,YM=typeof clearTimeout=="function"?clearTimeout:void 0,F_=typeof Promise=="function"?Promise:void 0,qM=typeof queueMicrotask=="function"?queueMicrotask:typeof F_<"u"?function(t){return F_.resolve(null).then(t).catch(jM)}:ty;function jM(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function I_(t,e){var n=e,i=0,a=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var s=t.ownerDocument;if(n&1&&Po(s.documentElement),n&2&&Po(s.body),n&4)for(n=s.head,Po(n),s=n.firstChild;s;){var o=s.nextSibling,l=s.nodeName;s[cl]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=o}}if(a===0){t.removeChild(r),Qo(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);Qo(e)}function jh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":jh(n),op(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ZM(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[cl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function KM(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Zh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function QM(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Kh=null;function H_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function ny(t,e,n){switch(e=lc(n),t){case"html":if(t=e.documentElement,!t)throw Error(Q(452));return t;case"head":if(t=e.head,!t)throw Error(Q(453));return t;case"body":if(t=e.body,!t)throw Error(Q(454));return t;default:throw Error(Q(451))}}function Po(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);op(t)}var Jn=new Map,G_=new Set;function uc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=rt.d;rt.d={f:JM,r:$M,D:eb,C:tb,L:nb,m:ib,X:rb,S:ab,M:sb};function JM(){var t=na.f(),e=Nc();return t||e}function $M(t){var e=Xs(t);e!==null&&e.tag===5&&e.type==="form"?Z0(e):na.r(t)}var qs=typeof document>"u"?null:document;function iy(t,e,n){var i=qs;if(i&&typeof e=="string"&&e){var a=qn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),G_.has(a)||(G_.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),nn(e,"link",t),Zt(e),i.head.appendChild(e)))}}function eb(t){na.D(t),iy("dns-prefetch",t,null)}function tb(t,e){na.C(t,e),iy("preconnect",t,e)}function nb(t,e,n){na.L(t,e,n);var i=qs;if(i&&t&&e){var a='link[rel="preload"][as="'+qn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+qn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+qn(n.imageSizes)+'"]')):a+='[href="'+qn(t)+'"]';var r=a;switch(e){case"style":r=Ps(t);break;case"script":r=js(t)}Jn.has(r)||(t=St({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Jn.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(yl(r))||e==="script"&&i.querySelector(Sl(r))||(e=i.createElement("link"),nn(e,"link",t),Zt(e),i.head.appendChild(e)))}}function ib(t,e){na.m(t,e);var n=qs;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+qn(i)+'"][href="'+qn(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=js(t)}if(!Jn.has(r)&&(t=St({rel:"modulepreload",href:t},e),Jn.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(r)))return}i=n.createElement("link"),nn(i,"link",t),Zt(i),n.head.appendChild(i)}}}function ab(t,e,n){na.S(t,e,n);var i=qs;if(i&&t){var a=ps(i).hoistableStyles,r=Ps(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(yl(r)))o.loading=5;else{t=St({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Jn.get(r))&&Xp(t,n);var l=s=i.createElement("link");Zt(l),nn(l,"link",t),l._p=new Promise(function(u,d){l.onload=u,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Tu(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function rb(t,e){na.X(t,e);var n=qs;if(n&&t){var i=ps(n).hoistableScripts,a=js(t),r=i.get(a);r||(r=n.querySelector(Sl(a)),r||(t=St({src:t,async:!0},e),(e=Jn.get(a))&&Wp(t,e),r=n.createElement("script"),Zt(r),nn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function sb(t,e){na.M(t,e);var n=qs;if(n&&t){var i=ps(n).hoistableScripts,a=js(t),r=i.get(a);r||(r=n.querySelector(Sl(a)),r||(t=St({src:t,async:!0,type:"module"},e),(e=Jn.get(a))&&Wp(t,e),r=n.createElement("script"),Zt(r),nn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function V_(t,e,n,i){var a=(a=Aa.current)?uc(a):null;if(!a)throw Error(Q(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ps(n.href),n=ps(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ps(n.href);var r=ps(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(yl(t)))&&!r._p&&(s.instance=r,s.state.loading=5),Jn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jn.set(t,n),r||ob(a,t,n,s.state))),e&&i===null)throw Error(Q(528,""));return s}if(e&&i!==null)throw Error(Q(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=js(n),n=ps(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,t))}}function Ps(t){return'href="'+qn(t)+'"'}function yl(t){return'link[rel="stylesheet"]['+t+"]"}function ay(t){return St({},t,{"data-precedence":t.precedence,precedence:null})}function ob(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),nn(e,"link",n),Zt(e),t.head.appendChild(e))}function js(t){return'[src="'+qn(t)+'"]'}function Sl(t){return"script[async]"+t}function k_(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+qn(n.href)+'"]');if(i)return e.instance=i,Zt(i),i;var a=St({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Zt(i),nn(i,"style",a),Tu(i,n.precedence,t),e.instance=i;case"stylesheet":a=Ps(n.href);var r=t.querySelector(yl(a));if(r)return e.state.loading|=4,e.instance=r,Zt(r),r;i=ay(n),(a=Jn.get(a))&&Xp(i,a),r=(t.ownerDocument||t).createElement("link"),Zt(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),nn(r,"link",i),e.state.loading|=4,Tu(r,n.precedence,t),e.instance=r;case"script":return r=js(n.src),(a=t.querySelector(Sl(r)))?(e.instance=a,Zt(a),a):(i=n,(a=Jn.get(r))&&(i=St({},n),Wp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Zt(a),nn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(Q(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Tu(i,n.precedence,t));return e.instance}function Tu(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Xp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Wp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Au=null;function X_(t,e,n){if(Au===null){var i=new Map,a=Au=new Map;a.set(n,i)}else a=Au,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[cl]||r[on]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function W_(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function lb(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ry(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var qo=null;function ub(){}function cb(t,e,n){if(qo===null)throw Error(Q(475));var i=qo;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=Ps(n.href),r=t.querySelector(yl(a));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=cc.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=r,Zt(r);return}r=t.ownerDocument||t,n=ay(n),(a=Jn.get(a))&&Xp(n,a),r=r.createElement("link"),Zt(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),nn(r,"link",n),e.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=cc.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function fb(){if(qo===null)throw Error(Q(475));var t=qo;return t.stylesheets&&t.count===0&&Qh(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Qh(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function cc(){if(this.count--,this.count===0){if(this.stylesheets)Qh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function Qh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,e.forEach(hb,t),fc=null,cc.call(t))}function hb(t,e){if(!(e.state.loading&4)){var n=fc.get(t);if(n)var i=n.get(null);else{n=new Map,fc.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=cc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var jo={$$typeof:Fi,Provider:null,Consumer:null,_currentValue:cr,_currentValue2:cr,_threadCount:0};function db(t,e,n,i,a,r,s,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.hiddenUpdates=qc(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function sy(t,e,n,i,a,r,s,o,l,u,d,f){return t=new db(t,e,n,s,o,l,u,f),e=1,r===!0&&(e|=24),r=Ln(3,null,null,e),t.current=r,r.stateNode=t,e=xp(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},Sp(r),t}function oy(t){return t?(t=os,t):os}function ly(t,e,n,i,a,r){a=oy(a),i.context===null?i.context=a:i.pendingContext=a,i=Ra(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Ca(t,i,e),n!==null&&(zn(n,t,e),Ro(n,t,e))}function Y_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yp(t,e){Y_(t,e),(t=t.alternate)&&Y_(t,e)}function uy(t){if(t.tag===13){var e=Ws(t,67108864);e!==null&&zn(e,t,67108864),Yp(t,67108864)}}var hc=!0;function pb(t,e,n,i){var a=Le.T;Le.T=null;var r=rt.p;try{rt.p=2,qp(t,e,n,i)}finally{rt.p=r,Le.T=a}}function mb(t,e,n,i){var a=Le.T;Le.T=null;var r=rt.p;try{rt.p=8,qp(t,e,n,i)}finally{rt.p=r,Le.T=a}}function qp(t,e,n,i){if(hc){var a=Jh(i);if(a===null)Tf(t,e,i,dc,n),q_(t,i);else if(gb(a,t,e,n,i))i.stopPropagation();else if(q_(t,i),e&4&&-1<_b.indexOf(t)){for(;a!==null;){var r=Xs(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=nr(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-On(s);o.entanglements[1]|=l,s&=~l}Ti(r),!(ht&6)&&(ic=Si()+500,xl(0))}}break;case 13:o=Ws(r,2),o!==null&&zn(o,r,2),Nc(),Yp(r,2)}if(r=Jh(i),r===null&&Tf(t,e,i,dc,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else Tf(t,e,i,null,n)}}function Jh(t){return t=up(t),jp(t)}var dc=null;function jp(t){if(dc=null,t=ts(t),t!==null){var e=sl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return dc=t,null}function cy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tE()){case Fv:return 2;case Iv:return 8;case Gu:case nE:return 32;case Hv:return 268435456;default:return 32}default:return 32}}var $h=!1,Ua=null,La=null,Na=null,Zo=new Map,Ko=new Map,xa=[],_b="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(t,e){switch(t){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function so(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Xs(e),e!==null&&uy(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function gb(t,e,n,i,a){switch(e){case"focusin":return Ua=so(Ua,t,e,n,i,a),!0;case"dragenter":return La=so(La,t,e,n,i,a),!0;case"mouseover":return Na=so(Na,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Zo.set(r,so(Zo.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Ko.set(r,so(Ko.get(r)||null,t,e,n,i,a)),!0}return!1}function fy(t){var e=ts(t.target);if(e!==null){var n=sl(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,cE(t.priority,function(){if(n.tag===13){var i=Pn();i=rp(i);var a=Ws(n,i);a!==null&&zn(a,n,i),Yp(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ru(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jh(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);_h=i,n.target.dispatchEvent(i),_h=null}else return e=Xs(n),e!==null&&uy(e),t.blockedOn=n,!1;e.shift()}return!0}function j_(t,e,n){Ru(t)&&n.delete(e)}function vb(){$h=!1,Ua!==null&&Ru(Ua)&&(Ua=null),La!==null&&Ru(La)&&(La=null),Na!==null&&Ru(Na)&&(Na=null),Zo.forEach(j_),Ko.forEach(j_)}function Hl(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,vb)))}var Gl=null;function Z_(t){Gl!==t&&(Gl=t,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(jp(i||n)===null)continue;break}var r=Xs(n);r!==null&&(t.splice(e,3),e-=3,Lh(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Qo(t){function e(l){return Hl(l,t)}Ua!==null&&Hl(Ua,t),La!==null&&Hl(La,t),Na!==null&&Hl(Na,t),Zo.forEach(e),Ko.forEach(e);for(var n=0;n<xa.length;n++){var i=xa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<xa.length&&(n=xa[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&xa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[Mn]||null;if(typeof r=="function")s||Z_(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[Mn]||null)o=s.formAction;else if(jp(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Z_(n)}}}function Zp(t){this._internalRoot=t}Bc.prototype.render=Zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));var n=e.current,i=Pn();ly(n,i,t,e,null,null)};Bc.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ly(t.current,2,null,t,null,null),Nc(),e[ks]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xa.length&&e!==0&&e<xa[n].priority;n++);xa.splice(n,0,t),n===0&&fy(t)}};var K_=Lv.version;if(K_!=="19.1.0")throw Error(Q(527,K_,"19.1.0"));rt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=jS(e),t=t!==null?Pv(t):null,t=t===null?null:t.stateNode,t};var xb={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Le,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{ol=Vl.inject(xb),Nn=Vl}catch{}}Sc.createRoot=function(t,e){if(!Nv(t))throw Error(Q(299));var n=!1,i="",a=sx,r=ox,s=lx,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=sy(t,1,!1,null,null,n,i,a,r,s,o,null),t[ks]=e.current,kp(t),new Zp(e)};Sc.hydrateRoot=function(t,e,n){if(!Nv(t))throw Error(Q(299));var i=!1,a="",r=sx,s=ox,o=lx,l=null,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(u=n.formState)),e=sy(t,1,!0,e,n??null,i,a,r,s,o,l,u),e.context=oy(null),n=e.current,i=Pn(),i=rp(i),a=Ra(i),a.callback=null,Ca(n,a,i),n=i,e.current.lanes=n,ul(e,n),Ti(e),t[ks]=e.current,kp(t),new Bc(e)};Sc.version="19.1.0";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(t){console.error(t)}}hy(),Av.exports=Sc;var yb=Av.exports;const Sb=mv(yb);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jo.apply(this,arguments)}var Ta;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ta||(Ta={}));const Q_="popstate";function Eb(t){t===void 0&&(t={});function e(a,r){let{pathname:s="/",search:o="",hash:l=""}=Rr(a.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),ed("",{pathname:s,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){let s=a.document.querySelector("base"),o="";if(s&&s.getAttribute("href")){let l=a.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof r=="string"?r:pc(r))}function i(a,r){Kp(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(r)+")")}return bb(e,n,i,t)}function Ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Mb(){return Math.random().toString(36).substr(2,8)}function J_(t,e){return{usr:t.state,key:t.key,idx:e}}function ed(t,e,n,i){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Rr(e):e,{state:n,key:e&&e.key||i||Mb()})}function pc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Rr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function bb(t,e,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o=Ta.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Jo({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){o=Ta.Pop;let m=d(),c=m==null?null:m-u;u=m,l&&l({action:o,location:y.location,delta:c})}function h(m,c){o=Ta.Push;let _=ed(y.location,m,c);n&&n(_,m),u=d()+1;let g=J_(_,u),v=y.createHref(_);try{s.pushState(g,"",v)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(v)}r&&l&&l({action:o,location:y.location,delta:1})}function p(m,c){o=Ta.Replace;let _=ed(y.location,m,c);n&&n(_,m),u=d();let g=J_(_,u),v=y.createHref(_);s.replaceState(g,"",v),r&&l&&l({action:o,location:y.location,delta:0})}function x(m){let c=a.location.origin!=="null"?a.location.origin:a.location.href,_=typeof m=="string"?m:pc(m);return _=_.replace(/ $/,"%20"),Ot(c,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,c)}let y={get action(){return o},get location(){return t(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Q_,f),l=m,()=>{a.removeEventListener(Q_,f),l=null}},createHref(m){return e(a,m)},createURL:x,encodeLocation(m){let c=x(m);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:p,go(m){return s.go(m)}};return y}var $_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($_||($_={}));function Tb(t,e,n){return n===void 0&&(n="/"),Ab(t,e,n)}function Ab(t,e,n,i){let a=typeof e=="string"?Rr(e):e,r=Qp(a.pathname||"/",n);if(r==null)return null;let s=dy(t);Rb(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let u=Ib(r);o=zb(s[l],u)}return o}function dy(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(Ot(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Oa([i,l.relativePath]),d=n.concat(l);r.children&&r.children.length>0&&(Ot(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dy(r.children,e,d,u)),!(r.path==null&&!r.index)&&e.push({path:u,score:Ob(u,r.index),routesMeta:d})};return t.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of py(r.path))a(r,s,l)}),e}function py(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=py(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function Rb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Pb(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const Cb=/^:[\w-]+$/,wb=3,Db=2,Ub=1,Lb=10,Nb=-2,eg=t=>t==="*";function Ob(t,e){let n=t.split("/"),i=n.length;return n.some(eg)&&(i+=Nb),e&&(i+=Db),n.filter(a=>!eg(a)).reduce((a,r)=>a+(Cb.test(r)?wb:r===""?Ub:Lb),i)}function Pb(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function zb(t,e,n){let{routesMeta:i}=t,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],u=o===i.length-1,d=r==="/"?e:e.slice(r.length)||"/",f=Bb({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f)return null;Object.assign(a,f.params),s.push({params:a,pathname:Oa([r,f.pathname]),pathnameBase:kb(Oa([r,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(r=Oa([r,f.pathnameBase]))}return s}function Bb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=Fb(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((u,d,f)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let y=o[f]||"";s=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const x=o[f];return p&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:r,pathnameBase:s,pattern:t}}function Fb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function Ib(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Hb(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?Rr(t):t;return{pathname:n?n.startsWith("/")?n:Gb(n,e):e,search:Xb(i),hash:Wb(a)}}function Gb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Rf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vb(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jp(t,e){let n=Vb(t);return e?n.map((i,a)=>a===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function $p(t,e,n,i){i===void 0&&(i=!1);let a;typeof t=="string"?a=Rr(t):(a=Jo({},t),Ot(!a.pathname||!a.pathname.includes("?"),Rf("?","pathname","search",a)),Ot(!a.pathname||!a.pathname.includes("#"),Rf("#","pathname","hash",a)),Ot(!a.search||!a.search.includes("#"),Rf("#","search","hash",a)));let r=t===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;a.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=Hb(a,o),u=s&&s!=="/"&&s.endsWith("/"),d=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Oa=t=>t.join("/").replace(/\/\/+/g,"/"),kb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Xb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Wb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Yb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const my=["post","put","patch","delete"];new Set(my);const qb=["get",...my];new Set(qb);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$o.apply(this,arguments)}const em=te.createContext(null),jb=te.createContext(null),ka=te.createContext(null),Fc=te.createContext(null),Xa=te.createContext({outlet:null,matches:[],isDataRoute:!1}),_y=te.createContext(null);function Zb(t,e){let{relative:n}=e===void 0?{}:e;Zs()||Ot(!1);let{basename:i,navigator:a}=te.useContext(ka),{hash:r,pathname:s,search:o}=xy(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Oa([i,s])),a.createHref({pathname:l,search:o,hash:r})}function Zs(){return te.useContext(Fc)!=null}function El(){return Zs()||Ot(!1),te.useContext(Fc).location}function gy(t){te.useContext(ka).static||te.useLayoutEffect(t)}function vy(){let{isDataRoute:t}=te.useContext(Xa);return t?lT():Kb()}function Kb(){Zs()||Ot(!1);let t=te.useContext(em),{basename:e,future:n,navigator:i}=te.useContext(ka),{matches:a}=te.useContext(Xa),{pathname:r}=El(),s=JSON.stringify(Jp(a,n.v7_relativeSplatPath)),o=te.useRef(!1);return gy(()=>{o.current=!0}),te.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let f=$p(u,JSON.parse(s),r,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Oa([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,s,r,t])}function xy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=te.useContext(ka),{matches:a}=te.useContext(Xa),{pathname:r}=El(),s=JSON.stringify(Jp(a,i.v7_relativeSplatPath));return te.useMemo(()=>$p(t,JSON.parse(s),r,n==="path"),[t,s,r,n])}function Qb(t,e){return Jb(t,e)}function Jb(t,e,n,i){Zs()||Ot(!1);let{navigator:a,static:r}=te.useContext(ka),{matches:s}=te.useContext(Xa),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=El(),f;if(e){var h;let c=typeof e=="string"?Rr(e):e;u==="/"||(h=c.pathname)!=null&&h.startsWith(u)||Ot(!1),f=c}else f=d;let p=f.pathname||"/",x=p;if(u!=="/"){let c=u.replace(/^\//,"").split("/");x="/"+p.replace(/^\//,"").split("/").slice(c.length).join("/")}let y=Tb(t,{pathname:x}),m=iT(y&&y.map(c=>Object.assign({},c,{params:Object.assign({},l,c.params),pathname:Oa([u,a.encodeLocation?a.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?u:Oa([u,a.encodeLocation?a.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),s,n,i);return e&&m?te.createElement(Fc.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ta.Pop}},m):m}function $b(){let t=oT(),e=Yb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return te.createElement(te.Fragment,null,te.createElement("h2",null,"Unexpected Application Error!"),te.createElement("h3",{style:{fontStyle:"italic"}},e),n?te.createElement("pre",{style:a},n):null,null)}const eT=te.createElement($b,null);class tT extends te.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?te.createElement(Xa.Provider,{value:this.props.routeContext},te.createElement(_y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nT(t){let{routeContext:e,match:n,children:i}=t,a=te.useContext(em);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),te.createElement(Xa.Provider,{value:e},i)}function iT(t,e,n,i){var a;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=(a=n)==null?void 0:a.errors;if(o!=null){let d=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||Ot(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:p}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||x){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let p,x=!1,y=null,m=null;n&&(p=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||eT,l&&(u<0&&h===0?(uT("route-fallback"),x=!0,m=null):u===h&&(x=!0,m=f.route.hydrateFallbackElement||null)));let c=e.concat(s.slice(0,h+1)),_=()=>{let g;return p?g=y:x?g=m:f.route.Component?g=te.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,te.createElement(nT,{match:f,routeContext:{outlet:d,matches:c,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?te.createElement(tT,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:_(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):_()},null)}var yy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(yy||{}),Sy=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Sy||{});function aT(t){let e=te.useContext(em);return e||Ot(!1),e}function rT(t){let e=te.useContext(jb);return e||Ot(!1),e}function sT(t){let e=te.useContext(Xa);return e||Ot(!1),e}function Ey(t){let e=sT(),n=e.matches[e.matches.length-1];return n.route.id||Ot(!1),n.route.id}function oT(){var t;let e=te.useContext(_y),n=rT(),i=Ey();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function lT(){let{router:t}=aT(yy.UseNavigateStable),e=Ey(Sy.UseNavigateStable),n=te.useRef(!1);return gy(()=>{n.current=!0}),te.useCallback(function(a,r){r===void 0&&(r={}),n.current&&(typeof a=="number"?t.navigate(a):t.navigate(a,$o({fromRouteId:e},r)))},[t,e])}const tg={};function uT(t,e,n){tg[t]||(tg[t]=!0)}function cT(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function fT(t){let{to:e,replace:n,state:i,relative:a}=t;Zs()||Ot(!1);let{future:r,static:s}=te.useContext(ka),{matches:o}=te.useContext(Xa),{pathname:l}=El(),u=vy(),d=$p(e,Jp(o,r.v7_relativeSplatPath),l,a==="path"),f=JSON.stringify(d);return te.useEffect(()=>u(JSON.parse(f),{replace:n,state:i,relative:a}),[u,f,a,n,i]),null}function Cu(t){Ot(!1)}function hT(t){let{basename:e="/",children:n=null,location:i,navigationType:a=Ta.Pop,navigator:r,static:s=!1,future:o}=t;Zs()&&Ot(!1);let l=e.replace(/^\/*/,"/"),u=te.useMemo(()=>({basename:l,navigator:r,static:s,future:$o({v7_relativeSplatPath:!1},o)}),[l,o,r,s]);typeof i=="string"&&(i=Rr(i));let{pathname:d="/",search:f="",hash:h="",state:p=null,key:x="default"}=i,y=te.useMemo(()=>{let m=Qp(d,l);return m==null?null:{location:{pathname:m,search:f,hash:h,state:p,key:x},navigationType:a}},[l,d,f,h,p,x,a]);return y==null?null:te.createElement(ka.Provider,{value:u},te.createElement(Fc.Provider,{children:n,value:y}))}function dT(t){let{children:e,location:n}=t;return Qb(td(e),n)}new Promise(()=>{});function td(t,e){e===void 0&&(e=[]);let n=[];return te.Children.forEach(t,(i,a)=>{if(!te.isValidElement(i))return;let r=[...e,a];if(i.type===te.Fragment){n.push.apply(n,td(i.props.children,r));return}i.type!==Cu&&Ot(!1),!i.props.index||!i.props.children||Ot(!1);let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=td(i.props.children,r)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nd.apply(this,arguments)}function pT(t,e){if(t==null)return{};var n={},i=Object.keys(t),a,r;for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function mT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _T(t,e){return t.button===0&&(!e||e==="_self")&&!mT(t)}const gT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],vT="6";try{window.__reactRouterVersion=vT}catch{}const xT="startTransition",ng=GS[xT];function yT(t){let{basename:e,children:n,future:i,window:a}=t,r=te.useRef();r.current==null&&(r.current=Eb({window:a,v5Compat:!0}));let s=r.current,[o,l]=te.useState({action:s.action,location:s.location}),{v7_startTransition:u}=i||{},d=te.useCallback(f=>{u&&ng?ng(()=>l(f)):l(f)},[l,u]);return te.useLayoutEffect(()=>s.listen(d),[s,d]),te.useEffect(()=>cT(i),[i]),te.createElement(hT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const ST=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ET=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,MT=te.forwardRef(function(e,n){let{onClick:i,relative:a,reloadDocument:r,replace:s,state:o,target:l,to:u,preventScrollReset:d,viewTransition:f}=e,h=pT(e,gT),{basename:p}=te.useContext(ka),x,y=!1;if(typeof u=="string"&&ET.test(u)&&(x=u,ST))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),R=Qp(v.pathname,p);v.origin===g.origin&&R!=null?u=R+v.search+v.hash:y=!0}catch{}let m=Zb(u,{relative:a}),c=bT(u,{replace:s,state:o,target:l,preventScrollReset:d,relative:a,viewTransition:f});function _(g){i&&i(g),g.defaultPrevented||c(g)}return te.createElement("a",nd({},h,{href:x||m,onClick:y||r?i:_,ref:n,target:l}))});var ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ig||(ig={}));var ag;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ag||(ag={}));function bT(t,e){let{target:n,replace:i,state:a,preventScrollReset:r,relative:s,viewTransition:o}=e===void 0?{}:e,l=vy(),u=El(),d=xy(t,{relative:s});return te.useCallback(f=>{if(_T(f,n)){f.preventDefault();let h=i!==void 0?i:pc(u)===pc(d);l(t,{replace:h,state:a,preventScrollReset:r,relative:s,viewTransition:o})}},[u,l,d,i,a,n,t,r,s,o])}function TT(t){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function fs(t,e){var n=t.__state.conversionName.toString(),i=Math.round(t.r),a=Math.round(t.g),r=Math.round(t.b),s=t.a,o=Math.round(t.h),l=t.s.toFixed(1),u=t.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var d=t.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(n==="CSS_RGB")return"rgb("+i+","+a+","+r+")";if(n==="CSS_RGBA")return"rgba("+i+","+a+","+r+","+s+")";if(n==="HEX")return"0x"+t.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+a+","+r+"]";if(n==="RGBA_ARRAY")return"["+i+","+a+","+r+","+s+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+a+",b:"+r+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+a+",b:"+r+",a:"+s+"}";if(n==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+u+"}";if(n==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+u+",a:"+s+"}"}return"unknown format"}var rg=Array.prototype.forEach,oo=Array.prototype.slice,K={BREAK:{},extend:function(e){return this.each(oo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(n[a])||(e[a]=n[a])}).bind(this))},this),e},defaults:function(e){return this.each(oo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(e[a])&&(e[a]=n[a])}).bind(this))},this),e},compose:function(){var e=oo.call(arguments);return function(){for(var n=oo.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(e){if(rg&&e.forEach&&e.forEach===rg)e.forEach(n,i);else if(e.length===e.length+0){var a=void 0,r=void 0;for(a=0,r=e.length;a<r;a++)if(a in e&&n.call(i,e[a],a)===this.BREAK)return}else for(var s in e)if(n.call(i,e[s],s)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var a=void 0;return function(){var r=this,s=arguments;function o(){a=null,i||e.apply(r,s)}var l=i||!a;clearTimeout(a),a=setTimeout(o,n),l&&e.apply(r,s)}},toArray:function(e){return e.toArray?e.toArray():oo.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},AT=[{litmus:K.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:fs},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:fs},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:fs},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:fs}}},{litmus:K.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:K.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:K.isObject,conversions:{RGBA_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)&&K.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return K.isNumber(e.r)&&K.isNumber(e.g)&&K.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)&&K.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return K.isNumber(e.h)&&K.isNumber(e.s)&&K.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],lo=void 0,kl=void 0,id=function(){kl=!1;var e=arguments.length>1?K.toArray(arguments):arguments[0];return K.each(AT,function(n){if(n.litmus(e))return K.each(n.conversions,function(i,a){if(lo=i.read(e),kl===!1&&lo!==!1)return kl=lo,lo.conversionName=a,lo.conversion=i,K.BREAK}),K.BREAK}),kl},sg=void 0,mc={hsv_to_rgb:function(e,n,i){var a=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),s=i*(1-n),o=i*(1-r*n),l=i*(1-(1-r)*n),u=[[i,l,s],[o,i,s],[s,i,l],[s,o,i],[l,s,i],[i,s,o]][a];return{r:u[0]*255,g:u[1]*255,b:u[2]*255}},rgb_to_hsv:function(e,n,i){var a=Math.min(e,n,i),r=Math.max(e,n,i),s=r-a,o=void 0,l=void 0;if(r!==0)l=s/r;else return{h:NaN,s:0,v:0};return e===r?o=(n-i)/s:n===r?o=2+(i-e)/s:o=4+(e-n)/s,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:r/255}},rgb_to_hex:function(e,n,i){var a=this.hex_with_component(0,2,e);return a=this.hex_with_component(a,1,n),a=this.hex_with_component(a,0,i),a},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(sg=n*8)|e&~(255<<sg)}},RT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},di=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Ia=function t(e,n,i){e===null&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(a===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:t(r,n,i)}else{if("value"in a)return a.value;var s=a.get;return s===void 0?void 0:s.call(i)}},Wa=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Ya=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Jt=function(){function t(){if(hi(this,t),this.__state=id.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return di(t,[{key:"toString",value:function(){return fs(this)}},{key:"toHexString",value:function(){return fs(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function tm(t,e,n){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Jt.recalculateRGB(this,e,n),this.__state[e])},set:function(a){this.__state.space!=="RGB"&&(Jt.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=a}})}function nm(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Jt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Jt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Jt.recalculateRGB=function(t,e,n){if(t.__state.space==="HEX")t.__state[e]=mc.component_from_hex(t.__state.hex,n);else if(t.__state.space==="HSV")K.extend(t.__state,mc.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};Jt.recalculateHSV=function(t){var e=mc.rgb_to_hsv(t.r,t.g,t.b);K.extend(t.__state,{s:e.s,v:e.v}),K.isNaN(e.h)?K.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};Jt.COMPONENTS=["r","g","b","h","s","v","hex","a"];tm(Jt.prototype,"r",2);tm(Jt.prototype,"g",1);tm(Jt.prototype,"b",0);nm(Jt.prototype,"h");nm(Jt.prototype,"s");nm(Jt.prototype,"v");Object.defineProperty(Jt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Jt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=mc.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Cr=function(){function t(e,n){hi(this,t),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return di(t,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),CT={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},My={};K.each(CT,function(t,e){K.each(t,function(n){My[n]=e})});var wT=/(\d+(\.\d+)?)px/;function mi(t){if(t==="0"||K.isUndefined(t))return 0;var e=t.match(wT);return K.isNull(e)?0:parseFloat(e[1])}var I={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var a=i,r=n;K.isUndefined(r)&&(r=!0),K.isUndefined(a)&&(a=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),a&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,a){var r=i||{},s=My[n];if(!s)throw new Error("Event type "+n+" not supported.");var o=document.createEvent(s);switch(s){case"MouseEvents":{var l=r.x||r.clientX||0,u=r.y||r.clientY||0;o.initMouseEvent(n,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,u,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=o.initKeyboardEvent||o.initKeyEvent;K.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(n,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{o.initEvent(n,r.bubbles||!1,r.cancelable||!0);break}}K.defaults(o,a),e.dispatchEvent(o)},bind:function(e,n,i,a){var r=a||!1;return e.addEventListener?e.addEventListener(n,i,r):e.attachEvent&&e.attachEvent("on"+n,i),I},unbind:function(e,n,i,a){var r=a||!1;return e.removeEventListener?e.removeEventListener(n,i,r):e.detachEvent&&e.detachEvent("on"+n,i),I},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return I},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),a=i.indexOf(n);a!==-1&&(i.splice(a,1),e.className=i.join(" "))}else e.className=void 0;return I},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return mi(n["border-left-width"])+mi(n["border-right-width"])+mi(n["padding-left"])+mi(n["padding-right"])+mi(n.width)},getHeight:function(e){var n=getComputedStyle(e);return mi(n["border-top-width"])+mi(n["border-bottom-width"])+mi(n["padding-top"])+mi(n["padding-bottom"])+mi(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},by=function(t){Wa(e,t);function e(n,i){hi(this,e);var a=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=a;a.__prev=a.getValue(),a.__checkbox=document.createElement("input"),a.__checkbox.setAttribute("type","checkbox");function s(){r.setValue(!r.__prev)}return I.bind(a.__checkbox,"change",s,!1),a.domElement.appendChild(a.__checkbox),a.updateDisplay(),a}return di(e,[{key:"setValue",value:function(i){var a=Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),a}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Cr),DT=function(t){Wa(e,t);function e(n,i,a){hi(this,e);var r=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=a,o=r;if(r.__select=document.createElement("select"),K.isArray(s)){var l={};K.each(s,function(u){l[u]=u}),s=l}return K.each(s,function(u,d){var f=document.createElement("option");f.innerHTML=d,f.setAttribute("value",u),o.__select.appendChild(f)}),r.updateDisplay(),I.bind(r.__select,"change",function(){var u=this.options[this.selectedIndex].value;o.setValue(u)}),r.domElement.appendChild(r.__select),r}return di(e,[{key:"setValue",value:function(i){var a=Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),a}},{key:"updateDisplay",value:function(){return I.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Cr),UT=function(t){Wa(e,t);function e(n,i){hi(this,e);var a=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=a;function s(){r.setValue(r.__input.value)}function o(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),I.bind(a.__input,"keyup",s),I.bind(a.__input,"change",s),I.bind(a.__input,"blur",o),I.bind(a.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return di(e,[{key:"updateDisplay",value:function(){return I.isActive(this.__input)||(this.__input.value=this.getValue()),Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Cr);function og(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Ty=function(t){Wa(e,t);function e(n,i,a){hi(this,e);var r=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=a||{};return r.__min=s.min,r.__max=s.max,r.__step=s.step,K.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=og(r.__impliedStep),r}return di(e,[{key:"setValue",value:function(i){var a=i;return this.__min!==void 0&&a<this.__min?a=this.__min:this.__max!==void 0&&a>this.__max&&(a=this.__max),this.__step!==void 0&&a%this.__step!==0&&(a=Math.round(a/this.__step)*this.__step),Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=og(i),this}}]),e}(Cr);function LT(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}var _c=function(t){Wa(e,t);function e(n,i,a){hi(this,e);var r=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,a));r.__truncationSuspended=!1;var s=r,o=void 0;function l(){var x=parseFloat(s.__input.value);K.isNaN(x)||s.setValue(x)}function u(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}function d(){u()}function f(x){var y=o-x.clientY;s.setValue(s.getValue()+y*s.__impliedStep),o=x.clientY}function h(){I.unbind(window,"mousemove",f),I.unbind(window,"mouseup",h),u()}function p(x){I.bind(window,"mousemove",f),I.bind(window,"mouseup",h),o=x.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),I.bind(r.__input,"change",l),I.bind(r.__input,"blur",d),I.bind(r.__input,"mousedown",p),I.bind(r.__input,"keydown",function(x){x.keyCode===13&&(s.__truncationSuspended=!0,this.blur(),s.__truncationSuspended=!1,u())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return di(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():LT(this.getValue(),this.__precision),Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ty);function lg(t,e,n,i,a){return i+(a-i)*((t-e)/(n-e))}var ad=function(t){Wa(e,t);function e(n,i,a,r,s){hi(this,e);var o=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:a,max:r,step:s})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),I.bind(o.__background,"mousedown",u),I.bind(o.__background,"touchstart",h),I.addClass(o.__background,"slider"),I.addClass(o.__foreground,"slider-fg");function u(y){document.activeElement.blur(),I.bind(window,"mousemove",d),I.bind(window,"mouseup",f),d(y)}function d(y){y.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(lg(y.clientX,m.left,m.right,l.__min,l.__max)),!1}function f(){I.unbind(window,"mousemove",d),I.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(y){y.touches.length===1&&(I.bind(window,"touchmove",p),I.bind(window,"touchend",x),p(y))}function p(y){var m=y.touches[0].clientX,c=l.__background.getBoundingClientRect();l.setValue(lg(m,c.left,c.right,l.__min,l.__max))}function x(){I.unbind(window,"touchmove",p),I.unbind(window,"touchend",x),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return di(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Ia(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ty),Ay=function(t){Wa(e,t);function e(n,i,a){hi(this,e);var r=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=r;return r.__button=document.createElement("div"),r.__button.innerHTML=a===void 0?"Fire":a,I.bind(r.__button,"click",function(o){return o.preventDefault(),s.fire(),!1}),I.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return di(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Cr),rd=function(t){Wa(e,t);function e(n,i){hi(this,e);var a=Ya(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));a.__color=new Jt(a.getValue()),a.__temp=new Jt(0);var r=a;a.domElement=document.createElement("div"),I.makeSelectable(a.domElement,!1),a.__selector=document.createElement("div"),a.__selector.className="selector",a.__saturation_field=document.createElement("div"),a.__saturation_field.className="saturation-field",a.__field_knob=document.createElement("div"),a.__field_knob.className="field-knob",a.__field_knob_border="2px solid ",a.__hue_knob=document.createElement("div"),a.__hue_knob.className="hue-knob",a.__hue_field=document.createElement("div"),a.__hue_field.className="hue-field",a.__input=document.createElement("input"),a.__input.type="text",a.__input_textShadow="0 1px 1px ",I.bind(a.__input,"keydown",function(y){y.keyCode===13&&f.call(this)}),I.bind(a.__input,"blur",f),I.bind(a.__selector,"mousedown",function(){I.addClass(this,"drag").bind(window,"mouseup",function(){I.removeClass(r.__selector,"drag")})}),I.bind(a.__selector,"touchstart",function(){I.addClass(this,"drag").bind(window,"touchend",function(){I.removeClass(r.__selector,"drag")})});var s=document.createElement("div");K.extend(a.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),K.extend(a.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:a.__field_knob_border+(a.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),K.extend(a.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),K.extend(a.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),K.extend(s.style,{width:"100%",height:"100%",background:"none"}),ug(s,"top","rgba(0,0,0,0)","#000"),K.extend(a.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),OT(a.__hue_field),K.extend(a.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:a.__input_textShadow+"rgba(0,0,0,0.7)"}),I.bind(a.__saturation_field,"mousedown",o),I.bind(a.__saturation_field,"touchstart",o),I.bind(a.__field_knob,"mousedown",o),I.bind(a.__field_knob,"touchstart",o),I.bind(a.__hue_field,"mousedown",l),I.bind(a.__hue_field,"touchstart",l);function o(y){p(y),I.bind(window,"mousemove",p),I.bind(window,"touchmove",p),I.bind(window,"mouseup",u),I.bind(window,"touchend",u)}function l(y){x(y),I.bind(window,"mousemove",x),I.bind(window,"touchmove",x),I.bind(window,"mouseup",d),I.bind(window,"touchend",d)}function u(){I.unbind(window,"mousemove",p),I.unbind(window,"touchmove",p),I.unbind(window,"mouseup",u),I.unbind(window,"touchend",u),h()}function d(){I.unbind(window,"mousemove",x),I.unbind(window,"touchmove",x),I.unbind(window,"mouseup",d),I.unbind(window,"touchend",d),h()}function f(){var y=id(this.value);y!==!1?(r.__color.__state=y,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function h(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}a.__saturation_field.appendChild(s),a.__selector.appendChild(a.__field_knob),a.__selector.appendChild(a.__saturation_field),a.__selector.appendChild(a.__hue_field),a.__hue_field.appendChild(a.__hue_knob),a.domElement.appendChild(a.__input),a.domElement.appendChild(a.__selector),a.updateDisplay();function p(y){y.type.indexOf("touch")===-1&&y.preventDefault();var m=r.__saturation_field.getBoundingClientRect(),c=y.touches&&y.touches[0]||y,_=c.clientX,g=c.clientY,v=(_-m.left)/(m.right-m.left),R=1-(g-m.top)/(m.bottom-m.top);return R>1?R=1:R<0&&(R=0),v>1?v=1:v<0&&(v=0),r.__color.v=R,r.__color.s=v,r.setValue(r.__color.toOriginal()),!1}function x(y){y.type.indexOf("touch")===-1&&y.preventDefault();var m=r.__hue_field.getBoundingClientRect(),c=y.touches&&y.touches[0]||y,_=c.clientY,g=1-(_-m.top)/(m.bottom-m.top);return g>1?g=1:g<0&&(g=0),r.__color.h=g*360,r.setValue(r.__color.toOriginal()),!1}return a}return di(e,[{key:"updateDisplay",value:function(){var i=id(this.getValue());if(i!==!1){var a=!1;K.each(Jt.COMPONENTS,function(o){if(!K.isUndefined(i[o])&&!K.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return a=!0,{}},this),a&&K.extend(this.__color.__state,i)}K.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,s=255-r;K.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ug(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),K.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+s+","+s+","+s+",.7)"})}}]),e}(Cr),NT=["-moz-","-o-","-webkit-","-ms-",""];function ug(t,e,n,i){t.style.background="",K.each(NT,function(a){t.style.cssText+="background: "+a+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function OT(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var PT={load:function(e,n){var i=n||document,a=i.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,i.getElementsByTagName("head")[0].appendChild(a)},inject:function(e,n){var i=n||document,a=document.createElement("style");a.type="text/css",a.innerHTML=e;var r=i.getElementsByTagName("head")[0];try{r.appendChild(a)}catch{}}},zT=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,BT=function(e,n){var i=e[n];return K.isArray(arguments[2])||K.isObject(arguments[2])?new DT(e,n,arguments[2]):K.isNumber(i)?K.isNumber(arguments[2])&&K.isNumber(arguments[3])?K.isNumber(arguments[4])?new ad(e,n,arguments[2],arguments[3],arguments[4]):new ad(e,n,arguments[2],arguments[3]):K.isNumber(arguments[4])?new _c(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new _c(e,n,{min:arguments[2],max:arguments[3]}):K.isString(i)?new UT(e,n):K.isFunction(i)?new Ay(e,n,""):K.isBoolean(i)?new by(e,n):null};function FT(t){setTimeout(t,1e3/60)}var IT=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||FT,HT=function(){function t(){hi(this,t),this.backgroundElement=document.createElement("div"),K.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),I.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),K.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;I.bind(this.backgroundElement,"click",function(){e.hide()})}return di(t,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),K.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function a(){n.domElement.style.display="none",n.backgroundElement.style.display="none",I.unbind(n.domElement,"webkitTransitionEnd",a),I.unbind(n.domElement,"transitionend",a),I.unbind(n.domElement,"oTransitionEnd",a)};I.bind(this.domElement,"webkitTransitionEnd",i),I.bind(this.domElement,"transitionend",i),I.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-I.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-I.getHeight(this.domElement)/2+"px"}}]),t}(),GT=TT(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);PT.inject(GT);var cg="dg",fg=72,hg=20,el="Default",xo=function(){try{return!!window.localStorage}catch{return!1}}(),zo=void 0,dg=!0,Qr=void 0,Cf=!1,Ry=[],xt=function t(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),I.addClass(this.domElement,cg),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=K.defaults(i,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),i=K.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),K.isUndefined(i.load)?i.load={preset:el}:i.preset&&(i.load.preset=i.preset),K.isUndefined(i.parent)&&i.hideable&&Ry.push(this),i.resizable=K.isUndefined(i.parent)&&i.resizable,i.autoPlace&&K.isUndefined(i.scrollable)&&(i.scrollable=!0);var a=xo&&localStorage.getItem(Jr(this,"isLocal"))==="true",r=void 0,s=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,WT(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,ld(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,s&&(s.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?I.addClass(n.__ul,t.CLASS_CLOSED):I.removeClass(n.__ul,t.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return a},set:function(h){xo&&(a=h,h?I.bind(window,"unload",r):I.unbind(window,"unload",r),localStorage.setItem(Jr(n,"isLocal"),h))}}}),K.isUndefined(i.parent)){if(this.closed=i.closed||!1,I.addClass(this.domElement,t.CLASS_MAIN),I.makeSelectable(this.domElement,!1),xo&&a){n.useLocalStorage=!0;var o=localStorage.getItem(Jr(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,I.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),i.closeOnTop?(I.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(I.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),I.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);I.addClass(l,"controller-name"),s=im(n,l);var u=function(h){return h.preventDefault(),n.closed=!n.closed,!1};I.addClass(this.__ul,t.CLASS_CLOSED),I.addClass(s,"title"),I.bind(s,"click",u),i.closed||(this.closed=!1)}i.autoPlace&&(K.isUndefined(i.parent)&&(dg&&(Qr=document.createElement("div"),I.addClass(Qr,cg),I.addClass(Qr,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Qr),dg=!1),Qr.appendChild(this.domElement),I.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||ld(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},I.bind(window,"resize",this.__resizeHandler),I.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),I.bind(this.__ul,"transitionend",this.__resizeHandler),I.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&XT(this),r=function(){xo&&localStorage.getItem(Jr(n,"isLocal"))==="true"&&localStorage.setItem(Jr(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function d(){var f=n.getRoot();f.width+=1,K.defer(function(){f.width-=1})}i.parent||d()};xt.toggleHide=function(){Cf=!Cf,K.each(Ry,function(t){t.domElement.style.display=Cf?"none":""})};xt.CLASS_AUTO_PLACE="a";xt.CLASS_AUTO_PLACE_CONTAINER="ac";xt.CLASS_MAIN="main";xt.CLASS_CONTROLLER_ROW="cr";xt.CLASS_TOO_TALL="taller-than-window";xt.CLASS_CLOSED="closed";xt.CLASS_CLOSE_BUTTON="close-button";xt.CLASS_CLOSE_TOP="close-top";xt.CLASS_CLOSE_BOTTOM="close-bottom";xt.CLASS_DRAG="drag";xt.DEFAULT_WIDTH=245;xt.TEXT_CLOSED="Close Controls";xt.TEXT_OPEN="Open Controls";xt._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===fg||t.keyCode===fg)&&xt.toggleHide()};I.bind(window,"keydown",xt._keydownHandler,!1);K.extend(xt.prototype,{add:function(e,n){return Bo(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return Bo(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;K.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Qr.removeChild(this.domElement);var e=this;K.each(this.__folders,function(n){e.removeFolder(n)}),I.unbind(window,"keydown",xt._keydownHandler,!1),pg(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new xt(n);this.__folders[e]=i;var a=im(this,i.domElement);return I.addClass(a,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],pg(e);var n=this;K.each(e.__folders,function(i){e.removeFolder(i)}),K.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=I.getOffset(e.__ul).top,i=0;K.each(e.__ul.childNodes,function(a){e.autoPlace&&a===e.__save_row||(i+=I.getHeight(a))}),window.innerHeight-n-hg<i?(I.addClass(e.domElement,xt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-hg+"px"):(I.removeClass(e.domElement,xt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&K.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:K.debounce(function(){this.onResize()},50),remember:function(){if(K.isUndefined(zo)&&(zo=new HT,zo.domElement.innerHTML=zT),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;K.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&kT(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&ld(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Xl(this)),e.folders={},K.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Xl(this),sd(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[el]=Xl(this,!0)),this.load.remembered[e]=Xl(this),this.preset=e,od(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){K.each(this.__controllers,function(n){this.getRoot().load.remembered?Cy(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),K.each(this.__folders,function(n){n.revert(n)}),e||sd(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&wy(this.__listening)},updateDisplay:function(){K.each(this.__controllers,function(e){e.updateDisplay()}),K.each(this.__folders,function(e){e.updateDisplay()})}});function im(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,n):t.__ul.appendChild(i),t.onResize(),i}function pg(t){I.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&I.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function sd(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function VT(t,e,n){if(n.__li=e,n.__gui=t,K.extend(n,{options:function(s){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),Bo(t,n.object,n.property,{before:o,factoryArgs:[K.toArray(arguments)]})}if(K.isArray(s)||K.isObject(s)){var l=n.__li.nextElementSibling;return n.remove(),Bo(t,n.object,n.property,{before:l,factoryArgs:[s]})}},name:function(s){return n.__li.firstElementChild.firstElementChild.innerHTML=s,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof ad){var i=new _c(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});K.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var s=n[r],o=i[r];n[r]=i[r]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),s.apply(n,l)}}),I.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof _c){var a=function(s){if(K.isNumber(n.__min)&&K.isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var u=Bo(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return u.name(o),l&&u.listen(),u}return s};n.min=K.compose(a,n.min),n.max=K.compose(a,n.max)}else n instanceof by?(I.bind(e,"click",function(){I.fakeEvent(n.__checkbox,"click")}),I.bind(n.__checkbox,"click",function(r){r.stopPropagation()})):n instanceof Ay?(I.bind(e,"click",function(){I.fakeEvent(n.__button,"click")}),I.bind(e,"mouseover",function(){I.addClass(n.__button,"hover")}),I.bind(e,"mouseout",function(){I.removeClass(n.__button,"hover")})):n instanceof rd&&(I.addClass(e,"color"),n.updateDisplay=K.compose(function(r){return e.style.borderLeftColor=n.__color.toString(),r},n.updateDisplay),n.updateDisplay());n.setValue=K.compose(function(r){return t.getRoot().__preset_select&&n.isModified()&&sd(t.getRoot(),!0),r},n.setValue)}function Cy(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var a=n.__rememberedObjectIndecesToControllers[i];if(a===void 0&&(a={},n.__rememberedObjectIndecesToControllers[i]=a),a[e.property]=e,n.load&&n.load.remembered){var r=n.load.remembered,s=void 0;if(r[t.preset])s=r[t.preset];else if(r[el])s=r[el];else return;if(s[i]&&s[i][e.property]!==void 0){var o=s[i][e.property];e.initialValue=o,e.setValue(o)}}}}function Bo(t,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var a=void 0;if(i.color)a=new rd(e,n);else{var r=[e,n].concat(i.factoryArgs);a=BT.apply(t,r)}i.before instanceof Cr&&(i.before=i.before.__li),Cy(t,a),I.addClass(a.domElement,"c");var s=document.createElement("span");I.addClass(s,"property-name"),s.innerHTML=a.property;var o=document.createElement("div");o.appendChild(s),o.appendChild(a.domElement);var l=im(t,o,i.before);return I.addClass(l,xt.CLASS_CONTROLLER_ROW),a instanceof rd?I.addClass(l,"color"):I.addClass(l,RT(a.getValue())),VT(t,l,a),t.__controllers.push(a),a}function Jr(t,e){return document.location.href+"."+e}function od(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function mg(t,e){e.style.display=t.useLocalStorage?"block":"none"}function kT(t){var e=t.__save_row=document.createElement("li");I.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),I.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",I.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",I.addClass(i,"button"),I.addClass(i,"save");var a=document.createElement("span");a.innerHTML="New",I.addClass(a,"button"),I.addClass(a,"save-as");var r=document.createElement("span");r.innerHTML="Revert",I.addClass(r,"button"),I.addClass(r,"revert");var s=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?K.each(t.load.remembered,function(f,h){od(t,h,h===t.preset)}):od(t,el,!1),I.bind(s,"change",function(){for(var f=0;f<t.__preset_select.length;f++)t.__preset_select[f].innerHTML=t.__preset_select[f].value;t.preset=this.value}),e.appendChild(s),e.appendChild(n),e.appendChild(i),e.appendChild(a),e.appendChild(r),xo){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),u=document.getElementById("dg-save-locally");u.style.display="block",localStorage.getItem(Jr(t,"isLocal"))==="true"&&l.setAttribute("checked","checked"),mg(t,o),I.bind(l,"change",function(){t.useLocalStorage=!t.useLocalStorage,mg(t,o)})}var d=document.getElementById("dg-new-constructor");I.bind(d,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&zo.hide()}),I.bind(n,"click",function(){d.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),zo.show(),d.focus(),d.select()}),I.bind(i,"click",function(){t.save()}),I.bind(a,"click",function(){var f=prompt("Enter a new preset name.");f&&t.saveAs(f)}),I.bind(r,"click",function(){t.revert()})}function XT(t){var e=void 0;t.__resize_handle=document.createElement("div"),K.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(r){return r.preventDefault(),t.width+=e-r.clientX,t.onResize(),e=r.clientX,!1}function i(){I.removeClass(t.__closeButton,xt.CLASS_DRAG),I.unbind(window,"mousemove",n),I.unbind(window,"mouseup",i)}function a(r){return r.preventDefault(),e=r.clientX,I.addClass(t.__closeButton,xt.CLASS_DRAG),I.bind(window,"mousemove",n),I.bind(window,"mouseup",i),!1}I.bind(t.__resize_handle,"mousedown",a),I.bind(t.__closeButton,"mousedown",a),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function ld(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function Xl(t,e){var n={};return K.each(t.__rememberedObjects,function(i,a){var r={},s=t.__rememberedObjectIndecesToControllers[a];K.each(s,function(o,l){r[l]=e?o.initialValue:o.getValue()}),n[a]=r}),n}function WT(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function wy(t){t.length!==0&&IT.call(window,function(){wy(t)}),K.each(t,function(e){e.updateDisplay()})}var YT=xt;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="176",Es={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qT=0,_g=1,jT=2,Dy=1,ZT=2,Pi=3,Ha=0,Sn=1,Bi=2,qi=0,Ms=1,ud=2,gg=3,vg=4,KT=5,sr=100,QT=101,JT=102,$T=103,e1=104,t1=200,n1=201,i1=202,a1=203,cd=204,fd=205,r1=206,s1=207,o1=208,l1=209,u1=210,c1=211,f1=212,h1=213,d1=214,hd=0,dd=1,pd=2,zs=3,md=4,_d=5,gd=6,vd=7,Uy=0,p1=1,m1=2,Pa=0,Ly=1,Ny=2,Oy=3,Py=4,zy=5,By=6,Fy=7,Iy=300,Bs=301,Fs=302,xd=303,yd=304,Ic=306,Sd=1e3,lr=1001,Ed=1002,ui=1003,_1=1004,Wl=1005,xi=1006,wf=1007,ur=1008,ea=1009,Hy=1010,Gy=1011,tl=1012,rm=1013,Sr=1014,ki=1015,ji=1016,sm=1017,om=1018,nl=1020,Vy=35902,ky=1021,Xy=1022,si=1023,il=1026,al=1027,Wy=1028,lm=1029,Yy=1030,um=1031,cm=1033,wu=33776,Du=33777,Uu=33778,Lu=33779,Md=35840,bd=35841,Td=35842,Ad=35843,Rd=36196,Cd=37492,wd=37496,Dd=37808,Ud=37809,Ld=37810,Nd=37811,Od=37812,Pd=37813,zd=37814,Bd=37815,Fd=37816,Id=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Nu=36492,Xd=36494,Wd=36495,qy=36283,Yd=36284,qd=36285,jd=36286,g1=3200,v1=3201,x1=0,y1=1,ya="",Un="srgb",Is="srgb-linear",gc="linear",ct="srgb",Nr=7680,xg=519,S1=512,E1=513,M1=514,jy=515,b1=516,T1=517,A1=518,R1=519,yg=35044,Sg="300 es",Xi=2e3,vc=2001;class wr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=Math.PI/180,Zd=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function C1(t,e){return(t%e+e)%e}function Df(t,e,n){return(1-n)*t+n*e}function uo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const w1={DEG2RAD:Ou};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,a,r,s,o,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u)}set(e,n,i,a,r,s,o,l,u){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],u=i[1],d=i[4],f=i[7],h=i[2],p=i[5],x=i[8],y=a[0],m=a[3],c=a[6],_=a[1],g=a[4],v=a[7],R=a[2],C=a[5],A=a[8];return r[0]=s*y+o*_+l*R,r[3]=s*m+o*g+l*C,r[6]=s*c+o*v+l*A,r[1]=u*y+d*_+f*R,r[4]=u*m+d*g+f*C,r[7]=u*c+d*v+f*A,r[2]=h*y+p*_+x*R,r[5]=h*m+p*g+x*C,r[8]=h*c+p*v+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*s*d-n*o*u-i*r*d+i*o*l+a*r*u-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=d*s-o*u,h=o*l-d*r,p=u*r-s*l,x=n*f+i*h+a*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(a*u-d*i)*y,e[2]=(o*i-a*s)*y,e[3]=h*y,e[4]=(d*n-a*l)*y,e[5]=(a*r-o*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*r)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*s+u*o)+s+e,-a*u,a*l,-a*(-u*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Uf.makeScale(e,n)),this}rotate(e){return this.premultiply(Uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uf=new He;function Zy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function D1(){const t=xc("canvas");return t.style.display="block",t}const Eg={};function Pu(t){t in Eg||(Eg[t]=!0,console.warn(t))}function U1(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function L1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function N1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mg=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bg=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O1(){const t={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ct&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(a.r=bs(a.r),a.g=bs(a.g),a.b=bs(a.b))),a},fromWorkingColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},toWorkingColorSpace:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ya?gc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Is]:{primaries:e,whitePoint:i,transfer:gc,toXYZ:Mg,fromXYZ:bg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Mg,fromXYZ:bg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const tt=O1();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class P1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=xc("canvas")),Or.width=e.width,Or.height=e.height;const a=Or.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Zi(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z1=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(Lf(a[s].image)):r.push(Lf(a[s]))}else r=Lf(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function Lf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?P1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let B1=0;class En extends wr{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,i=lr,a=lr,r=xi,s=ur,o=si,l=ea,u=En.DEFAULT_ANISOTROPY,d=ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Ml(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Iy;En.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,u=l[0],d=l[4],f=l[8],h=l[1],p=l[5],x=l[9],y=l[2],m=l[6],c=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,v=(p+1)/2,R=(c+1)/2,C=(d+h)/4,A=(f+y)/4,w=(x+m)/4;return g>v&&g>R?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=C/i,r=A/i):v>R?v<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(v),i=C/a,r=w/a):R<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),i=A/r,a=w/r),this.set(i,a,r,n),this}let _=Math.sqrt((m-x)*(m-x)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(f-y)/_,this.z=(h-d)/_,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F1 extends wr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const a={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const r=new En(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new fm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends F1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ky extends En{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I1 extends En{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],u=i[a+1],d=i[a+2],f=i[a+3];const h=r[s+0],p=r[s+1],x=r[s+2],y=r[s+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(f!==y||l!==h||u!==p||d!==x){let m=1-o;const c=l*h+u*p+d*x+f*y,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const R=Math.sqrt(g),C=Math.atan2(R,c*_);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const v=o*_;if(l=l*m+h*v,u=u*m+p*v,d=d*m+x*v,f=f*m+y*v,m===1-o){const R=1/Math.sqrt(l*l+u*u+d*d+f*f);l*=R,u*=R,d*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],u=i[a+2],d=i[a+3],f=r[s],h=r[s+1],p=r[s+2],x=r[s+3];return e[n]=o*x+d*f+l*p-u*h,e[n+1]=l*x+d*h+u*f-o*p,e[n+2]=u*x+d*p+o*h-l*f,e[n+3]=d*x-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(a/2),f=o(r/2),h=l(i/2),p=l(a/2),x=l(r/2);switch(s){case"XYZ":this._x=h*d*f+u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f-h*p*x;break;case"YXZ":this._x=h*d*f+u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f+h*p*x;break;case"ZXY":this._x=h*d*f-u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f-h*p*x;break;case"ZYX":this._x=h*d*f-u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f+h*p*x;break;case"YZX":this._x=h*d*f+u*p*x,this._y=u*p*f+h*d*x,this._z=u*d*x-h*p*f,this._w=u*d*f-h*p*x;break;case"XZY":this._x=h*d*f-u*p*x,this._y=u*p*f-h*d*x,this._z=u*d*x+h*p*f,this._w=u*d*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],u=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-u)*p,this._z=(s-a)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-u)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-a)/p,this._x=(r+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+s*o+a*u-r*l,this._y=a*d+s*l+r*o-i*u,this._z=r*d+s*u+i*l-a*o,this._w=s*d-i*o-a*l-r*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+i*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=a,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*a+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const u=Math.sqrt(l),d=Math.atan2(u,o),f=Math.sin((1-n)*d)/u,h=Math.sin(n*d)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=a*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*a-o*i),d=2*(o*n-r*a),f=2*(r*i-s*n);return this.x=n+l*u+s*f-o*d,this.y=i+l*d+o*u-r*f,this.z=a+l*f+r*d-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nf.copy(this).projectOnVector(e),this.sub(Nf)}reflect(e){return this.sub(Nf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nf=new B,Tg=new Er;class bl{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ti):ti.fromBufferAttribute(r,s),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),ql.subVectors(this.max,co),Pr.subVectors(e.a,co),zr.subVectors(e.b,co),Br.subVectors(e.c,co),sa.subVectors(zr,Pr),oa.subVectors(Br,zr),Ka.subVectors(Pr,Br);let n=[0,-sa.z,sa.y,0,-oa.z,oa.y,0,-Ka.z,Ka.y,sa.z,0,-sa.x,oa.z,0,-oa.x,Ka.z,0,-Ka.x,-sa.y,sa.x,0,-oa.y,oa.x,0,-Ka.y,Ka.x,0];return!Of(n,Pr,zr,Br,ql)||(n=[1,0,0,0,1,0,0,0,1],!Of(n,Pr,zr,Br,ql))?!1:(jl.crossVectors(sa,oa),n=[jl.x,jl.y,jl.z],Of(n,Pr,zr,Br,ql))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new B,new B,new B,new B,new B,new B,new B,new B],ti=new B,Yl=new bl,Pr=new B,zr=new B,Br=new B,sa=new B,oa=new B,Ka=new B,co=new B,ql=new B,jl=new B,Qa=new B;function Of(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){Qa.fromArray(t,r);const o=a.x*Math.abs(Qa.x)+a.y*Math.abs(Qa.y)+a.z*Math.abs(Qa.z),l=e.dot(Qa),u=n.dot(Qa),d=i.dot(Qa);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const H1=new bl,fo=new B,Pf=new B;class hm{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):H1.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(fo,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Pf)),this.expandByPoint(fo.copy(e.center).sub(Pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new B,zf=new B,Zl=new B,la=new B,Bf=new B,Kl=new B,Ff=new B;class Qy{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){zf.copy(e).add(n).multiplyScalar(.5),Zl.copy(n).sub(e).normalize(),la.copy(this.origin).sub(zf);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Zl),o=la.dot(this.direction),l=-la.dot(Zl),u=la.lengthSq(),d=Math.abs(1-s*s);let f,h,p,x;if(d>0)if(f=s*l-o,h=s*o-l,x=r*d,f>=0)if(h>=-x)if(h<=x){const y=1/d;f*=y,h*=y,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+u}else h=r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;else h=-r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+u):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+u);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(zf).addScaledVector(Zl,h),p}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),a=Ui.dot(Ui)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,a=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,a=(e.min.x-h.x)*u),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,i,a,r){Bf.subVectors(n,e),Kl.subVectors(i,e),Ff.crossVectors(Bf,Kl);let s=this.direction.dot(Ff),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;la.subVectors(this.origin,e);const l=o*this.direction.dot(Kl.crossVectors(la,Kl));if(l<0)return null;const u=o*this.direction.dot(Bf.cross(la));if(u<0||l+u>s)return null;const d=-o*la.dot(Ff);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,a,r,s,o,l,u,d,f,h,p,x,y,m){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,u,d,f,h,p,x,y,m)}set(e,n,i,a,r,s,o,l,u,d,f,h,p,x,y,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=a,c[1]=r,c[5]=s,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=f,c[14]=h,c[3]=p,c[7]=x,c[11]=y,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Fr.setFromMatrixColumn(e,0).length(),r=1/Fr.setFromMatrixColumn(e,1).length(),s=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),u=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*d,p=s*f,x=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=u,n[1]=p+x*u,n[5]=h-y*u,n[9]=-o*l,n[2]=y-h*u,n[6]=x+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,x=u*d,y=u*f;n[0]=h+y*o,n[4]=x*o-p,n[8]=s*u,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=p*o-x,n[6]=y+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,x=u*d,y=u*f;n[0]=h-y*o,n[4]=-s*f,n[8]=x+p*o,n[1]=p+x*o,n[5]=s*d,n[9]=y-h*o,n[2]=-s*u,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,x=o*d,y=o*f;n[0]=l*d,n[4]=x*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-x,n[2]=-u,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,x=o*l,y=o*u;n[0]=l*d,n[4]=y-h*f,n[8]=x*f+p,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-u*d,n[6]=p*f+x,n[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,p=s*u,x=o*l,y=o*u;n[0]=l*d,n[4]=-f,n[8]=u*d,n[1]=h*f+y,n[5]=s*d,n[9]=p*f-x,n[2]=x*f-p,n[6]=o*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G1,e,V1)}lookAt(e,n,i){const a=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ua.crossVectors(i,Cn),ua.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ua.crossVectors(i,Cn)),ua.normalize(),Ql.crossVectors(Cn,ua),a[0]=ua.x,a[4]=Ql.x,a[8]=Cn.x,a[1]=ua.y,a[5]=Ql.y,a[9]=Cn.y,a[2]=ua.z,a[6]=Ql.z,a[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],u=i[12],d=i[1],f=i[5],h=i[9],p=i[13],x=i[2],y=i[6],m=i[10],c=i[14],_=i[3],g=i[7],v=i[11],R=i[15],C=a[0],A=a[4],w=a[8],b=a[12],S=a[1],D=a[5],X=a[9],V=a[13],J=a[2],Y=a[6],L=a[10],k=a[14],z=a[3],$=a[7],re=a[11],_e=a[15];return r[0]=s*C+o*S+l*J+u*z,r[4]=s*A+o*D+l*Y+u*$,r[8]=s*w+o*X+l*L+u*re,r[12]=s*b+o*V+l*k+u*_e,r[1]=d*C+f*S+h*J+p*z,r[5]=d*A+f*D+h*Y+p*$,r[9]=d*w+f*X+h*L+p*re,r[13]=d*b+f*V+h*k+p*_e,r[2]=x*C+y*S+m*J+c*z,r[6]=x*A+y*D+m*Y+c*$,r[10]=x*w+y*X+m*L+c*re,r[14]=x*b+y*V+m*k+c*_e,r[3]=_*C+g*S+v*J+R*z,r[7]=_*A+g*D+v*Y+R*$,r[11]=_*w+g*X+v*L+R*re,r[15]=_*b+g*V+v*k+R*_e,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],u=e[13],d=e[2],f=e[6],h=e[10],p=e[14],x=e[3],y=e[7],m=e[11],c=e[15];return x*(+r*l*f-a*u*f-r*o*h+i*u*h+a*o*p-i*l*p)+y*(+n*l*p-n*u*h+r*s*h-a*s*p+a*u*d-r*l*d)+m*(+n*u*f-n*o*p-r*s*f+i*s*p+r*o*d-i*u*d)+c*(-a*o*d-n*l*f+n*o*h+a*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],u=e[7],d=e[8],f=e[9],h=e[10],p=e[11],x=e[12],y=e[13],m=e[14],c=e[15],_=f*m*u-y*h*u+y*l*p-o*m*p-f*l*c+o*h*c,g=x*h*u-d*m*u-x*l*p+s*m*p+d*l*c-s*h*c,v=d*y*u-x*f*u+x*o*p-s*y*p-d*o*c+s*f*c,R=x*f*l-d*y*l-x*o*h+s*y*h+d*o*m-s*f*m,C=n*_+i*g+a*v+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(y*h*r-f*m*r-y*a*p+i*m*p+f*a*c-i*h*c)*A,e[2]=(o*m*r-y*l*r+y*a*u-i*m*u-o*a*c+i*l*c)*A,e[3]=(f*l*r-o*h*r-f*a*u+i*h*u+o*a*p-i*l*p)*A,e[4]=g*A,e[5]=(d*m*r-x*h*r+x*a*p-n*m*p-d*a*c+n*h*c)*A,e[6]=(x*l*r-s*m*r-x*a*u+n*m*u+s*a*c-n*l*c)*A,e[7]=(s*h*r-d*l*r+d*a*u-n*h*u-s*a*p+n*l*p)*A,e[8]=v*A,e[9]=(x*f*r-d*y*r-x*i*p+n*y*p+d*i*c-n*f*c)*A,e[10]=(s*y*r-x*o*r+x*i*u-n*y*u-s*i*c+n*o*c)*A,e[11]=(d*o*r-s*f*r-d*i*u+n*f*u+s*i*p-n*o*p)*A,e[12]=R*A,e[13]=(d*y*a-x*f*a+x*i*h-n*y*h-d*i*m+n*f*m)*A,e[14]=(x*o*a-s*y*a-x*i*l+n*y*l+s*i*m-n*o*m)*A,e[15]=(s*f*a-d*o*a+d*i*l-n*f*l-s*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,u=r*s,d=r*o;return this.set(u*s+i,u*o-a*l,u*l+a*o,0,u*o+a*l,d*o+i,d*l-a*s,0,u*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,u=r+r,d=s+s,f=o+o,h=r*u,p=r*d,x=r*f,y=s*d,m=s*f,c=o*f,_=l*u,g=l*d,v=l*f,R=i.x,C=i.y,A=i.z;return a[0]=(1-(y+c))*R,a[1]=(p+v)*R,a[2]=(x-g)*R,a[3]=0,a[4]=(p-v)*C,a[5]=(1-(h+c))*C,a[6]=(m+_)*C,a[7]=0,a[8]=(x+g)*A,a[9]=(m-_)*A,a[10]=(1-(h+y))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=Fr.set(a[0],a[1],a[2]).length();const s=Fr.set(a[4],a[5],a[6]).length(),o=Fr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const u=1/r,d=1/s,f=1/o;return ni.elements[0]*=u,ni.elements[1]*=u,ni.elements[2]*=u,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,n.setFromRotationMatrix(ni),i.x=r,i.y=s,i.z=o,this}makePerspective(e,n,i,a,r,s,o=Xi){const l=this.elements,u=2*r/(n-e),d=2*r/(i-a),f=(n+e)/(n-e),h=(i+a)/(i-a);let p,x;if(o===Xi)p=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===vc)p=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=Xi){const l=this.elements,u=1/(n-e),d=1/(i-a),f=1/(s-r),h=(n+e)*u,p=(i+a)*d;let x,y;if(o===Xi)x=(s+r)*f,y=-2*f;else if(o===vc)x=r*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new B,ni=new It,G1=new B(0,0,0),V1=new B(1,1,1),ua=new B,Ql=new B,Cn=new B,Ag=new It,Rg=new Er;class ta{constructor(e=0,n=0,i=0,a=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],u=a[5],d=a[9],f=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ag,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class Jy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k1=0;const Cg=new B,Ir=new Er,Li=new It,Jl=new B,ho=new B,X1=new B,W1=new Er,wg=new B(1,0,0),Dg=new B(0,1,0),Ug=new B(0,0,1),Lg={type:"added"},Y1={type:"removed"},Hr={type:"childadded",child:null},If={type:"childremoved",child:null};class Bn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new B,n=new ta,i=new Er,a=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new He}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,n){return Ir.setFromAxisAngle(e,n),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(Dg,e)}rotateZ(e){return this.rotateOnAxis(Ug,e)}translateOnAxis(e,n){return Cg.copy(e).applyQuaternion(this.quaternion),this.position.add(Cg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(Dg,e)}translateZ(e){return this.translateOnAxis(Ug,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jl.copy(e):Jl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ho,Jl,this.up):Li.lookAt(Jl,ho,this.up),this.quaternion.setFromRotationMatrix(Li),a&&(Li.extractRotation(a.matrixWorld),Ir.setFromRotationMatrix(Li),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lg),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Y1),If.child=e,this.dispatchEvent(If),If.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lg),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,X1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,W1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const f=l[u];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=a,i;function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new B(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new B,Ni=new B,Hf=new B,Oi=new B,Gr=new B,Vr=new B,Ng=new B,Gf=new B,Vf=new B,kf=new B,Xf=new Nt,Wf=new Nt,Yf=new Nt;class ri{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ii.subVectors(e,n),a.cross(ii);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){ii.subVectors(a,n),Ni.subVectors(i,n),Hf.subVectors(e,n);const s=ii.dot(ii),o=ii.dot(Ni),l=ii.dot(Hf),u=Ni.dot(Ni),d=Ni.dot(Hf),f=s*u-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(u*l-o*d)*h,x=(s*d-o*l)*h;return r.set(1-p-x,x,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(s,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return Xf.setScalar(0),Wf.setScalar(0),Yf.setScalar(0),Xf.fromBufferAttribute(e,n),Wf.fromBufferAttribute(e,i),Yf.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Xf,r.x),s.addScaledVector(Wf,r.y),s.addScaledVector(Yf,r.z),s}static isFrontFacing(e,n,i,a){return ii.subVectors(i,n),Ni.subVectors(e,n),ii.cross(Ni).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ii.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;Gr.subVectors(a,i),Vr.subVectors(r,i),Gf.subVectors(e,i);const l=Gr.dot(Gf),u=Vr.dot(Gf);if(l<=0&&u<=0)return n.copy(i);Vf.subVectors(e,a);const d=Gr.dot(Vf),f=Vr.dot(Vf);if(d>=0&&f<=d)return n.copy(a);const h=l*f-d*u;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Gr,s);kf.subVectors(e,r);const p=Gr.dot(kf),x=Vr.dot(kf);if(x>=0&&p<=x)return n.copy(r);const y=p*u-l*x;if(y<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Vr,o);const m=d*x-p*f;if(m<=0&&f-d>=0&&p-x>=0)return Ng.subVectors(r,a),o=(f-d)/(f-d+(p-x)),n.copy(a).addScaledVector(Ng,o);const c=1/(m+y+h);return s=y*c,o=h*c,n.copy(i).addScaledVector(Gr,s).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ca={h:0,s:0,l:0},$l={h:0,s:0,l:0};function qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,a=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,a),this}setHSL(e,n,i,a=tt.workingColorSpace){if(e=C1(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=qf(s,r,e+1/3),this.g=qf(s,r,e),this.b=qf(s,r,e-1/3)}return tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=$y[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return tt.fromWorkingColorSpace(sn.copy(this),e),Math.round(Ke(sn.r*255,0,255))*65536+Math.round(Ke(sn.g*255,0,255))*256+Math.round(Ke(sn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(sn.copy(this),n);const i=sn.r,a=sn.g,r=sn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,u;const d=(o+s)/2;if(o===s)l=0,u=0;else{const f=s-o;switch(u=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-i)/f+2;break;case r:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Un){tt.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,a=sn.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ca),this.setHSL(ca.h+e,ca.s+n,ca.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ca),e.getHSL($l);const i=Df(ca.h,$l.h,n),a=Df(ca.s,$l.s,n),r=Df(ca.l,$l.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new nt;nt.NAMES=$y;let q1=0;class Hc extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Ms,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=fd,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Ha&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dm extends Hc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Uy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new B,eu=new Ce;let j1=0;class Mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:j1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yg,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)eu.fromBufferAttribute(this,n),eu.applyMatrix3(e),this.setXY(n,eu.x,eu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=uo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yg&&(e.usage=this.usage),e}}class eS extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class tS extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kn extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Z1=0;const Gn=new It,jf=new Bn,kr=new B,wn=new bl,po=new bl,qt=new B;class ia extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zy(e)?tS:eS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return jf.lookAt(e),jf.updateMatrix(),this.applyMatrix4(jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Kn(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];po.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(wn.min,po.min),wn.expandByPoint(qt),qt.addVectors(wn.max,po.max),wn.expandByPoint(qt)):(wn.expandByPoint(po.min),wn.expandByPoint(po.max))}wn.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)qt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(qt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)qt.fromBufferAttribute(o,u),l&&(kr.fromBufferAttribute(e,u),qt.add(kr)),a=Math.max(a,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let w=0;w<i.count;w++)o[w]=new B,l[w]=new B;const u=new B,d=new B,f=new B,h=new Ce,p=new Ce,x=new Ce,y=new B,m=new B;function c(w,b,S){u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),x.fromBufferAttribute(r,S),d.sub(u),f.sub(u),p.sub(h),x.sub(h);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),o[w].add(y),o[b].add(y),o[S].add(y),l[w].add(m),l[b].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let w=0,b=_.length;w<b;++w){const S=_[w],D=S.start,X=S.count;for(let V=D,J=D+X;V<J;V+=3)c(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const g=new B,v=new B,R=new B,C=new B;function A(w){R.fromBufferAttribute(a,w),C.copy(R);const b=o[w];g.copy(b),g.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(C,b);const D=v.dot(l[w])<0?-1:1;s.setXYZW(w,g.x,g.y,g.z,D)}for(let w=0,b=_.length;w<b;++w){const S=_[w],D=S.start,X=S.count;for(let V=D,J=D+X;V<J;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new B,r=new B,s=new B,o=new B,l=new B,u=new B,d=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(n,x),r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(d),l.add(d),u.add(d),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,f=o.normalized,h=new u.constructor(l.length*d);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let c=0;c<d;c++)h[x++]=u[p++]}return new Mi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ia,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],u=e(l,i);n.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let d=0,f=u.length;d<f;d++){const h=u[d],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const u in a){const d=a[u];this.setAttribute(u,d.clone(n))}const r=e.morphAttributes;for(const u in r){const d=[],f=r[u];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,d=s.length;u<d;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Og=new It,Ja=new Qy,tu=new hm,Pg=new B,nu=new B,iu=new B,au=new B,Zf=new B,ru=new B,zg=new B,su=new B;class oi extends Bn{constructor(e=new ia,n=new dm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){ru.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const d=o[l],f=r[l];d!==0&&(Zf.fromBufferAttribute(f,e),s?ru.addScaledVector(Zf,d):ru.addScaledVector(Zf.sub(n),d))}n.add(ru)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tu.copy(i.boundingSphere),tu.applyMatrix4(r),Ja.copy(e.ray).recast(e.near),!(tu.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(tu,Pg)===null||Ja.origin.distanceToSquared(Pg)>(e.far-e.near)**2))&&(Og.copy(r).invert(),Ja.copy(e.ray).applyMatrix4(Og),!(i.boundingBox!==null&&Ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ja)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,y=h.length;x<y;x++){const m=h[x],c=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,R=g;v<R;v+=3){const C=o.getX(v),A=o.getX(v+1),w=o.getX(v+2);a=ou(this,c,e,i,u,d,f,C,A,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const _=o.getX(m),g=o.getX(m+1),v=o.getX(m+2);a=ou(this,s,e,i,u,d,f,_,g,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=h.length;x<y;x++){const m=h[x],c=s[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,R=g;v<R;v+=3){const C=v,A=v+1,w=v+2;a=ou(this,c,e,i,u,d,f,C,A,w),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,c=y;m<c;m+=3){const _=m,g=m+1,v=m+2;a=ou(this,s,e,i,u,d,f,_,g,v),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function K1(t,e,n,i,a,r,s,o){let l;if(e.side===Sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===Ha,o),l===null)return null;su.copy(o),su.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(su);return u<n.near||u>n.far?null:{distance:u,point:su.clone(),object:t}}function ou(t,e,n,i,a,r,s,o,l,u){t.getVertexPosition(o,nu),t.getVertexPosition(l,iu),t.getVertexPosition(u,au);const d=K1(t,e,n,i,nu,iu,au,zg);if(d){const f=new B;ri.getBarycoord(zg,nu,iu,au,f),a&&(d.uv=ri.getInterpolatedAttribute(a,o,l,u,f,new Ce)),r&&(d.uv1=ri.getInterpolatedAttribute(r,o,l,u,f,new Ce)),s&&(d.normal=ri.getInterpolatedAttribute(s,o,l,u,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new B,materialIndex:0};ri.getNormal(nu,iu,au,h.normal),d.face=h,d.barycoord=f}return d}class Tl extends ia{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],u=[],d=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,s,r,0),x("z","y","x",1,-1,i,n,-e,s,r,1),x("x","z","y",1,1,e,i,n,a,s,2),x("x","z","y",1,-1,e,i,-n,a,s,3),x("x","y","z",1,-1,e,n,i,a,r,4),x("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new Kn(u,3)),this.setAttribute("normal",new Kn(d,3)),this.setAttribute("uv",new Kn(f,2));function x(y,m,c,_,g,v,R,C,A,w,b){const S=v/A,D=R/w,X=v/2,V=R/2,J=C/2,Y=A+1,L=w+1;let k=0,z=0;const $=new B;for(let re=0;re<L;re++){const _e=re*D-V;for(let De=0;De<Y;De++){const qe=De*S-X;$[y]=qe*_,$[m]=_e*g,$[c]=J,u.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[c]=C>0?1:-1,d.push($.x,$.y,$.z),f.push(De/A),f.push(1-re/w),k+=1}}for(let re=0;re<w;re++)for(let _e=0;_e<A;_e++){const De=h+_e+Y*re,qe=h+_e+Y*(re+1),q=h+(_e+1)+Y*(re+1),ne=h+(_e+1)+Y*re;l.push(De,qe,ne),l.push(qe,q,ne),z+=6}o.addGroup(p,z,b),p+=z,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const a in i)e[a]=i[a]}return e}function Q1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function nS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const rl={clone:Hs,merge:fn};var J1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Hc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class iS extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fa=new B,Bg=new Ce,Fg=new Ce;class Yn extends iS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ou*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Ou*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fa.x,fa.y).multiplyScalar(-e/fa.z),fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fa.x,fa.y).multiplyScalar(-e/fa.z)}getViewSize(e,n){return this.getViewBounds(e,Bg,Fg),n.subVectors(Fg,Bg)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ou*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/u,a*=s.width/l,i*=s.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,Wr=1;class eA extends Bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Yn(Xr,Wr,e,n);a.layers=this.layers,this.add(a);const r=new Yn(Xr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new Yn(Xr,Wr,e,n);s.layers=this.layers,this.add(s);const o=new Yn(Xr,Wr,e,n);o.layers=this.layers,this.add(o);const l=new Yn(Xr,Wr,e,n);l.layers=this.layers,this.add(l);const u=new Yn(Xr,Wr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const u of n)this.remove(u);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,u,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,s),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,a),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class aS extends En{constructor(e=[],n=Bs,i,a,r,s,o,l,u,d){super(e,n,i,a,r,s,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tA extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new aS(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Tl(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:qi});r.uniforms.tEquirect.value=n;const s=new oi(a,r),o=n.minFilter;return n.minFilter===ur&&(n.minFilter=xi),new eA(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}class lu extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nA={type:"move"};class Kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),c=this._getHandJoint(u,y);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nA)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class iA extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qf=new B,aA=new B,rA=new He;class ma{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Qf.subVectors(i,n).cross(aA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rA.getNormalMatrix(e),a=this.coplanarPoint(Qf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new hm,uu=new B;class rS{constructor(e=new ma,n=new ma,i=new ma,a=new ma,r=new ma,s=new ma){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Xi){const i=this.planes,a=e.elements,r=a[0],s=a[1],o=a[2],l=a[3],u=a[4],d=a[5],f=a[6],h=a[7],p=a[8],x=a[9],y=a[10],m=a[11],c=a[12],_=a[13],g=a[14],v=a[15];if(i[0].setComponents(l-r,h-u,m-p,v-c).normalize(),i[1].setComponents(l+r,h+u,m+p,v+c).normalize(),i[2].setComponents(l+s,h+d,m+x,v+_).normalize(),i[3].setComponents(l-s,h-d,m-x,v-_).normalize(),i[4].setComponents(l-o,h-f,m-y,v-g).normalize(),n===Xi)i[5].setComponents(l+o,h+f,m+y,v+g).normalize();else if(n===vc)i[5].setComponents(o,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){return $a.center.set(0,0,0),$a.radius=.7071067811865476,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(uu.x=a.normal.x>0?e.max.x:e.min.x,uu.y=a.normal.y>0?e.max.y:e.min.y,uu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sS extends En{constructor(e,n,i=Sr,a,r,s,o=ui,l=ui,u,d=il){if(d!==il&&d!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,r,s,o,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pm extends ia{constructor(e=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:a};const r=[],s=[];o(a),u(i),d(),this.setAttribute("position",new Kn(r,3)),this.setAttribute("normal",new Kn(r.slice(),3)),this.setAttribute("uv",new Kn(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const g=new B,v=new B,R=new B;for(let C=0;C<n.length;C+=3)p(n[C+0],g),p(n[C+1],v),p(n[C+2],R),l(g,v,R,_)}function l(_,g,v,R){const C=R+1,A=[];for(let w=0;w<=C;w++){A[w]=[];const b=_.clone().lerp(v,w/C),S=g.clone().lerp(v,w/C),D=C-w;for(let X=0;X<=D;X++)X===0&&w===C?A[w][X]=b:A[w][X]=b.clone().lerp(S,X/D)}for(let w=0;w<C;w++)for(let b=0;b<2*(C-w)-1;b++){const S=Math.floor(b/2);b%2===0?(h(A[w][S+1]),h(A[w+1][S]),h(A[w][S])):(h(A[w][S+1]),h(A[w+1][S+1]),h(A[w+1][S]))}}function u(_){const g=new B;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(_),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function d(){const _=new B;for(let g=0;g<r.length;g+=3){_.x=r[g+0],_.y=r[g+1],_.z=r[g+2];const v=m(_)/2/Math.PI+.5,R=c(_)/Math.PI+.5;s.push(v,1-R)}x(),f()}function f(){for(let _=0;_<s.length;_+=6){const g=s[_+0],v=s[_+2],R=s[_+4],C=Math.max(g,v,R),A=Math.min(g,v,R);C>.9&&A<.1&&(g<.2&&(s[_+0]+=1),v<.2&&(s[_+2]+=1),R<.2&&(s[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function p(_,g){const v=_*3;g.x=e[v+0],g.y=e[v+1],g.z=e[v+2]}function x(){const _=new B,g=new B,v=new B,R=new B,C=new Ce,A=new Ce,w=new Ce;for(let b=0,S=0;b<r.length;b+=9,S+=6){_.set(r[b+0],r[b+1],r[b+2]),g.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),C.set(s[S+0],s[S+1]),A.set(s[S+2],s[S+3]),w.set(s[S+4],s[S+5]),R.copy(_).add(g).add(v).divideScalar(3);const D=m(R);y(C,S+0,_,D),y(A,S+2,g,D),y(w,S+4,v,D)}}function y(_,g,v,R){R<0&&_.x===1&&(s[g]=_.x-1),v.x===0&&v.z===0&&(s[g]=R/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function c(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pm(e.vertices,e.indices,e.radius,e.details)}}class mm extends pm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new mm(e.radius,e.detail)}}class Gc extends ia{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),u=o+1,d=l+1,f=e/o,h=n/l,p=[],x=[],y=[],m=[];for(let c=0;c<d;c++){const _=c*h-s;for(let g=0;g<u;g++){const v=g*f-r;x.push(v,-_,0),y.push(0,0,1),m.push(g/o),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<o;_++){const g=_+u*c,v=_+u*(c+1),R=_+1+u*(c+1),C=_+1+u*c;p.push(g,v,C),p.push(v,R,C)}this.setIndex(p),this.setAttribute("position",new Kn(x,3)),this.setAttribute("normal",new Kn(y,3)),this.setAttribute("uv",new Kn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class sA extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oA extends Hc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lA extends Hc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oS extends iS{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,s=r+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uA extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ig(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ig();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ig(){return performance.now()}class Hg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cA extends wr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Gg(t,e,n,i){const a=fA(i);switch(n){case ky:return t*e;case Wy:return t*e/a.components*a.byteLength;case lm:return t*e/a.components*a.byteLength;case Yy:return t*e*2/a.components*a.byteLength;case um:return t*e*2/a.components*a.byteLength;case Xy:return t*e*3/a.components*a.byteLength;case si:return t*e*4/a.components*a.byteLength;case cm:return t*e*4/a.components*a.byteLength;case wu:case Du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:case Ad:return Math.max(t,16)*Math.max(e,8)/4;case Md:case Td:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nu:case Xd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case qy:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fA(t){switch(t){case ea:case Hy:return{byteLength:1,components:1};case tl:case Gy:case ji:return{byteLength:2,components:1};case sm:case om:return{byteLength:2,components:4};case Sr:case rm:case ki:return{byteLength:4,components:1};case Vy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uS(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function hA(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const d=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,d);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],y=f[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const y=f[p];t.bufferSubData(u,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:a,remove:r,update:s}}var dA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_A=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,EA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,IA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kA="gl_FragColor = linearToOutputTexel( gl_FragColor );",XA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$A=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_R=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ER=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,UR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,LR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ZR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$R=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_C=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,EC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,RC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,XC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:dA,alphahash_pars_fragment:pA,alphamap_fragment:mA,alphamap_pars_fragment:_A,alphatest_fragment:gA,alphatest_pars_fragment:vA,aomap_fragment:xA,aomap_pars_fragment:yA,batching_pars_vertex:SA,batching_vertex:EA,begin_vertex:MA,beginnormal_vertex:bA,bsdfs:TA,iridescence_fragment:AA,bumpmap_pars_fragment:RA,clipping_planes_fragment:CA,clipping_planes_pars_fragment:wA,clipping_planes_pars_vertex:DA,clipping_planes_vertex:UA,color_fragment:LA,color_pars_fragment:NA,color_pars_vertex:OA,color_vertex:PA,common:zA,cube_uv_reflection_fragment:BA,defaultnormal_vertex:FA,displacementmap_pars_vertex:IA,displacementmap_vertex:HA,emissivemap_fragment:GA,emissivemap_pars_fragment:VA,colorspace_fragment:kA,colorspace_pars_fragment:XA,envmap_fragment:WA,envmap_common_pars_fragment:YA,envmap_pars_fragment:qA,envmap_pars_vertex:jA,envmap_physical_pars_fragment:rR,envmap_vertex:ZA,fog_vertex:KA,fog_pars_vertex:QA,fog_fragment:JA,fog_pars_fragment:$A,gradientmap_pars_fragment:eR,lightmap_pars_fragment:tR,lights_lambert_fragment:nR,lights_lambert_pars_fragment:iR,lights_pars_begin:aR,lights_toon_fragment:sR,lights_toon_pars_fragment:oR,lights_phong_fragment:lR,lights_phong_pars_fragment:uR,lights_physical_fragment:cR,lights_physical_pars_fragment:fR,lights_fragment_begin:hR,lights_fragment_maps:dR,lights_fragment_end:pR,logdepthbuf_fragment:mR,logdepthbuf_pars_fragment:_R,logdepthbuf_pars_vertex:gR,logdepthbuf_vertex:vR,map_fragment:xR,map_pars_fragment:yR,map_particle_fragment:SR,map_particle_pars_fragment:ER,metalnessmap_fragment:MR,metalnessmap_pars_fragment:bR,morphinstance_vertex:TR,morphcolor_vertex:AR,morphnormal_vertex:RR,morphtarget_pars_vertex:CR,morphtarget_vertex:wR,normal_fragment_begin:DR,normal_fragment_maps:UR,normal_pars_fragment:LR,normal_pars_vertex:NR,normal_vertex:OR,normalmap_pars_fragment:PR,clearcoat_normal_fragment_begin:zR,clearcoat_normal_fragment_maps:BR,clearcoat_pars_fragment:FR,iridescence_pars_fragment:IR,opaque_fragment:HR,packing:GR,premultiplied_alpha_fragment:VR,project_vertex:kR,dithering_fragment:XR,dithering_pars_fragment:WR,roughnessmap_fragment:YR,roughnessmap_pars_fragment:qR,shadowmap_pars_fragment:jR,shadowmap_pars_vertex:ZR,shadowmap_vertex:KR,shadowmask_pars_fragment:QR,skinbase_vertex:JR,skinning_pars_vertex:$R,skinning_vertex:eC,skinnormal_vertex:tC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:aC,tonemapping_pars_fragment:rC,transmission_fragment:sC,transmission_pars_fragment:oC,uv_pars_fragment:lC,uv_pars_vertex:uC,uv_vertex:cC,worldpos_vertex:fC,background_vert:hC,background_frag:dC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:_C,cube_frag:gC,depth_vert:vC,depth_frag:xC,distanceRGBA_vert:yC,distanceRGBA_frag:SC,equirect_vert:EC,equirect_frag:MC,linedashed_vert:bC,linedashed_frag:TC,meshbasic_vert:AC,meshbasic_frag:RC,meshlambert_vert:CC,meshlambert_frag:wC,meshmatcap_vert:DC,meshmatcap_frag:UC,meshnormal_vert:LC,meshnormal_frag:NC,meshphong_vert:OC,meshphong_frag:PC,meshphysical_vert:zC,meshphysical_frag:BC,meshtoon_vert:FC,meshtoon_frag:IC,points_vert:HC,points_frag:GC,shadow_vert:VC,shadow_frag:kC,sprite_vert:XC,sprite_frag:WC},ue={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},_i={basic:{uniforms:fn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:fn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:fn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:fn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:fn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new nt(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:fn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:fn([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:fn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:fn([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:fn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:fn([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:fn([ue.common,ue.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:fn([ue.lights,ue.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};_i.physical={uniforms:fn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const cu={r:0,b:0,g:0},er=new ta,YC=new It;function qC(t,e,n,i,a,r,s){const o=new nt(0);let l=r===!0?0:1,u,d,f=null,h=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const R=x(g);R===null?c(o,l):R&&R.isColor&&(c(R,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const R=x(v);R&&(R.isCubeTexture||R.mapping===Ic)?(d===void 0&&(d=new oi(new Tl(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Hs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),er.copy(v.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(YC.makeRotationFromEuler(er)),d.material.toneMapped=tt.getTransfer(R.colorSpace)!==ct,(f!==R||h!==R.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=R,h=R.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new oi(new Gc(2,2),new un({name:"BackgroundMaterial",uniforms:Hs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=tt.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=R,h=R.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,v){g.getRGB(cu,nS(t)),i.buffers.color.setClear(cu.r,cu.g,cu.b,v,s)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(o,l)},render:y,addToRenderList:m,dispose:_}}function jC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(S,D,X,V,J){let Y=!1;const L=f(V,X,D);r!==L&&(r=L,u(r.object)),Y=p(S,V,X,J),Y&&x(S,V,X,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,v(S,D,X,V),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,D,X){const V=X.wireframe===!0;let J=i[S.id];J===void 0&&(J={},i[S.id]=J);let Y=J[D.id];Y===void 0&&(Y={},J[D.id]=Y);let L=Y[V];return L===void 0&&(L=h(l()),Y[V]=L),L}function h(S){const D=[],X=[],V=[];for(let J=0;J<n;J++)D[J]=0,X[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,X,V){const J=r.attributes,Y=D.attributes;let L=0;const k=X.getAttributes();for(const z in k)if(k[z].location>=0){const re=J[z];let _e=Y[z];if(_e===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;L++}return r.attributesNum!==L||r.index!==V}function x(S,D,X,V){const J={},Y=D.attributes;let L=0;const k=X.getAttributes();for(const z in k)if(k[z].location>=0){let re=Y[z];re===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),J[z]=_e,L++}r.attributes=J,r.attributesNum=L,r.index=V}function y(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){c(S,0)}function c(S,D){const X=r.newAttributes,V=r.enabledAttributes,J=r.attributeDivisors;X[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),J[S]!==D&&(t.vertexAttribDivisor(S,D),J[S]=D)}function _(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==S[X]&&(t.disableVertexAttribArray(X),D[X]=0)}function g(S,D,X,V,J,Y,L){L===!0?t.vertexAttribIPointer(S,D,X,J,Y):t.vertexAttribPointer(S,D,X,V,J,Y)}function v(S,D,X,V){y();const J=V.attributes,Y=X.getAttributes(),L=D.defaultAttributeValues;for(const k in Y){const z=Y[k];if(z.location>=0){let $=J[k];if($===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const re=$.normalized,_e=$.itemSize,De=e.get($);if(De===void 0)continue;const qe=De.buffer,q=De.type,ne=De.bytesPerElement,ce=q===t.INT||q===t.UNSIGNED_INT||$.gpuType===rm;if($.isInterleavedBufferAttribute){const le=$.data,be=le.stride,Qe=$.offset;if(le.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)c(z.location+Ae,le.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)m(z.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ae=0;Ae<z.locationSize;Ae++)g(z.location+Ae,_e/z.locationSize,q,re,be*ne,(Qe+_e/z.locationSize*Ae)*ne,ce)}else{if($.isInstancedBufferAttribute){for(let le=0;le<z.locationSize;le++)c(z.location+le,$.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<z.locationSize;le++)m(z.location+le);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let le=0;le<z.locationSize;le++)g(z.location+le,_e/z.locationSize,q,re,_e*ne,_e/z.locationSize*le*ne,ce)}}else if(L!==void 0){const re=L[k];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(z.location,re);break;case 3:t.vertexAttrib3fv(z.location,re);break;case 4:t.vertexAttrib4fv(z.location,re);break;default:t.vertexAttrib1fv(z.location,re)}}}}_()}function R(){w();for(const S in i){const D=i[S];for(const X in D){const V=D[X];for(const J in V)d(V[J].object),delete V[J];delete D[X]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const X in D){const V=D[X];for(const J in V)d(V[J].object),delete V[J];delete D[X]}delete i[S.id]}function A(S){for(const D in i){const X=i[D];if(X[S.id]===void 0)continue;const V=X[S.id];for(const J in V)d(V[J].object),delete V[J];delete X[S.id]}}function w(){b(),s=!0,r!==a&&(r=a,u(r.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:w,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function ZC(t,e,n){let i;function a(u){i=u}function r(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function s(u,d,f){f!==0&&(t.drawArraysInstanced(i,u,d,f),n.update(d,i,f))}function o(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,f);let p=0;for(let x=0;x<f;x++)p+=d[x];n.update(p,i,1)}function l(u,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)s(u[x],d[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,h,0,f);let x=0;for(let y=0;y<f;y++)x+=d[y]*h[y];n.update(x,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function KC(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(A){return!(A!==si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ea&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ki&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=x>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function QC(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new ma,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||a;return a=h,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,c=t.get(f);if(!a||x===null||x.length===0||r&&!m)r?d(null):u();else{const _=r?0:i,g=_*4;let v=c.clippingState||null;l.value=v,v=d(x,h,g,p);for(let R=0;R!==g;++R)v[R]=n[R];c.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,x){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const c=p+y*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,v=p;g!==y;++g,v+=4)s.copy(f[g]).applyMatrix4(_,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function JC(t){let e=new WeakMap;function n(s,o){return o===xd?s.mapping=Bs:o===yd&&(s.mapping=Fs),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===xd||o===yd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new tA(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",a),n(u.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ds=4,Vg=[.125,.215,.35,.446,.526,.582],or=20,Jf=new oS,kg=new nt;let $f=null,eh=0,th=0,nh=!1;const rr=(1+Math.sqrt(5))/2,Yr=1/rr,Xg=[new B(-rr,Yr,0),new B(rr,Yr,0),new B(-Yr,0,rr),new B(Yr,0,rr),new B(0,rr,-Yr),new B(0,rr,Yr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],$C=new B;class Wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=$C}=r;$f=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,fu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:ji,format:si,colorSpace:Is,depthBuffer:!1},a=Yg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ew(r)),this._blurMaterial=tw(r,e,n)}return a}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,Jf)}_sceneToCubeUV(e,n,i,a,r){const l=new Yn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(kg),f.toneMapping=Pa,f.autoClear=!1;const x=new dm({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),y=new oi(new Tl,x);let m=!1;const c=e.background;c?c.isColor&&(x.color.copy(c),e.background=null,m=!0):(x.color.copy(kg),m=!0);for(let _=0;_<6;_++){const g=_%3;g===0?(l.up.set(0,u[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[_],r.y,r.z)):g===1?(l.up.set(0,0,u[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[_],r.z)):(l.up.set(0,u[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[_]));const v=this._cubeSize;fu(a,g*v,_>2?v:0,v,v),f.setRenderTarget(a),m&&f.render(y,l),f.render(e,l)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=c}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Bs||e.mapping===Fs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;fu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Jf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xg[(a-r-1)%Xg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new oi(this._lodPlanes[a],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*or-1),y=r/x,m=isFinite(r)?1+Math.floor(d*y):or;m>or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);const c=[];let _=0;for(let A=0;A<or;++A){const w=A/y,b=Math.exp(-w*w/2);c.push(b),A===0?_+=b:A<m&&(_+=2*b)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const v=this._sizeLods[a],R=3*v*(a>g-ds?a-g+ds:0),C=4*(this._cubeSize-v);fu(n,R,C,3*v,2*v),l.setRenderTarget(n),l.render(f,Jf)}}function ew(t){const e=[],n=[],i=[];let a=t;const r=t-ds+1+Vg.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);n.push(o);let l=1/o;s>t-ds?l=Vg[s-t+ds-1]:s===0&&(l=0),i.push(l);const u=1/(o-2),d=-u,f=1+u,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,y=3,m=2,c=1,_=new Float32Array(y*x*p),g=new Float32Array(m*x*p),v=new Float32Array(c*x*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,w=C>2?0:-1,b=[A,w,0,A+2/3,w,0,A+2/3,w+1,0,A,w,0,A+2/3,w+1,0,A,w+1,0];_.set(b,y*x*C),g.set(h,m*x*C);const S=[C,C,C,C,C,C];v.set(S,c*x*C)}const R=new ia;R.setAttribute("position",new Mi(_,y)),R.setAttribute("uv",new Mi(g,m)),R.setAttribute("faceIndex",new Mi(v,c)),e.push(R),a>ds&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Yg(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=Ic,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fu(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function tw(t,e,n){const i=new Float32Array(or),a=new B(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function qg(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function jg(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function _m(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===xd||l===yd,d=l===Bs||l===Fs;if(u||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Wg(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return u&&p&&p.height>0||d&&p&&a(p)?(n===null&&(n=new Wg(t)),f=u?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function a(o){let l=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function iw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Pu("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function aw(t,e,n,i){const a={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function u(f){const h=[],p=f.index,x=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let g=0,v=_.length;g<v;g+=3){const R=_[g+0],C=_[g+1],A=_[g+2];h.push(R,C,C,A,A,R)}}else if(x!==void 0){const _=x.array;y=x.version;for(let g=0,v=_.length/3-1;g<v;g+=3){const R=g+0,C=g+1,A=g+2;h.push(R,C,C,A,A,R)}}else return;const m=new(Zy(h)?tS:eS)(h,1);m.version=y;const c=r.get(f);c&&e.remove(c),r.set(f,m)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function rw(t,e,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,r,h*s),n.update(p,i,1)}function u(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,r,h*s,x),n.update(p,i,x))}function d(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,x);let m=0;for(let c=0;c<x;c++)m+=p[c];n.update(m,i,1)}function f(h,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<h.length;c++)u(h[c]/s,p[c],y[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,y,0,x);let c=0;for(let _=0;_<x;_++)c+=p[_]*y[_];n.update(c,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function sw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function ow(t,e,n){const i=new WeakMap,a=new Nt;function r(s,o,l){const u=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*f),w=new Ky(A,R,C,f);w.type=ki,w.needsUpdate=!0;const b=v*4;for(let D=0;D<f;D++){const X=c[D],V=_[D],J=g[D],Y=R*C*4*D;for(let L=0;L<X.count;L++){const k=L*b;x===!0&&(a.fromBufferAttribute(X,L),A[Y+k+0]=a.x,A[Y+k+1]=a.y,A[Y+k+2]=a.z,A[Y+k+3]=0),y===!0&&(a.fromBufferAttribute(V,L),A[Y+k+4]=a.x,A[Y+k+5]=a.y,A[Y+k+6]=a.z,A[Y+k+7]=0),m===!0&&(a.fromBufferAttribute(J,L),A[Y+k+8]=a.x,A[Y+k+9]=a.y,A[Y+k+10]=a.z,A[Y+k+11]=J.itemSize===4?a.w:1)}}h={count:f,texture:w,size:new Ce(R,C)},i.set(o,h),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function lw(t,e,n,i){let a=new WeakMap;function r(l){const u=i.render.frame,d=l.geometry,f=e.get(l,d);if(a.get(f)!==u&&(e.update(f),a.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==u&&(h.update(),a.set(h,u))}return f}function s(){a=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:s}}const cS=new En,Zg=new sS(1,1),fS=new Ky,hS=new I1,dS=new aS,Kg=[],Qg=[],Jg=new Float32Array(16),$g=new Float32Array(9),ev=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=Kg[a];if(r===void 0&&(r=new Float32Array(a),Kg[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Vc(t,e){let n=Qg[e];n===void 0&&(n=new Int32Array(e),Qg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Xt(n,i))return;ev.set(i),t.uniformMatrix2fv(this.addr,!1,ev),Wt(n,i)}}function pw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Xt(n,i))return;$g.set(i),t.uniformMatrix3fv(this.addr,!1,$g),Wt(n,i)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Xt(n,i))return;Jg.set(i),t.uniformMatrix4fv(this.addr,!1,Jg),Wt(n,i)}}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function bw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(Zg.compareFunction=jy,r=Zg):r=cS,n.setTexture2D(e||r,a)}function Tw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||hS,a)}function Aw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||dS,a)}function Rw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||fS,a)}function Cw(t){switch(t){case 5126:return uw;case 35664:return cw;case 35665:return fw;case 35666:return hw;case 35674:return dw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return _w;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return xw;case 5125:return yw;case 36294:return Sw;case 36295:return Ew;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Rw}}function ww(t,e){t.uniform1fv(this.addr,e)}function Dw(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Uw(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Lw(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function Nw(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ow(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pw(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function zw(t,e){t.uniform1iv(this.addr,e)}function Bw(t,e){t.uniform2iv(this.addr,e)}function Fw(t,e){t.uniform3iv(this.addr,e)}function Iw(t,e){t.uniform4iv(this.addr,e)}function Hw(t,e){t.uniform1uiv(this.addr,e)}function Gw(t,e){t.uniform2uiv(this.addr,e)}function Vw(t,e){t.uniform3uiv(this.addr,e)}function kw(t,e){t.uniform4uiv(this.addr,e)}function Xw(t,e,n){const i=this.cache,a=e.length,r=Vc(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let s=0;s!==a;++s)n.setTexture2D(e[s]||cS,r[s])}function Ww(t,e,n){const i=this.cache,a=e.length,r=Vc(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||hS,r[s])}function Yw(t,e,n){const i=this.cache,a=e.length,r=Vc(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||dS,r[s])}function qw(t,e,n){const i=this.cache,a=e.length,r=Vc(n,a);Xt(i,r)||(t.uniform1iv(this.addr,r),Wt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||fS,r[s])}function jw(t){switch(t){case 5126:return ww;case 35664:return Dw;case 35665:return Uw;case 35666:return Lw;case 35674:return Nw;case 35675:return Ow;case 35676:return Pw;case 5124:case 35670:return zw;case 35667:case 35671:return Bw;case 35668:case 35672:return Fw;case 35669:case 35673:return Iw;case 5125:return Hw;case 36294:return Gw;case 36295:return Vw;case 36296:return kw;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return qw}}class Zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Cw(n.type)}}class Kw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jw(n.type)}}class Qw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function tv(t,e){t.seq.push(e),t.map[e.id]=e}function Jw(t,e,n){const i=t.name,a=i.length;for(ih.lastIndex=0;;){const r=ih.exec(i),s=ih.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===a){tv(n,u===void 0?new Zw(o,t,e):new Kw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Qw(o),tv(n,f)),n=f}}}class zu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),s=e.getUniformLocation(n,r.name);Jw(r,s,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function nv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $w=37297;let e2=0;function t2(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const iv=new He;function n2(t){tt._getMatrix(iv,tt.workingColorSpace,t);const e=`mat3( ${iv.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case gc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function av(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=t.getShaderInfoLog(e).trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+t2(t.getShaderSource(e),s)}else return a}function i2(t,e){const n=n2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function a2(t,e){let n;switch(e){case Ly:n="Linear";break;case Ny:n="Reinhard";break;case Oy:n="Cineon";break;case Py:n="ACESFilmic";break;case By:n="AgX";break;case Fy:n="Neutral";break;case zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hu=new B;function r2(){tt.getLuminanceCoefficients(hu);const t=hu.x.toFixed(4),e=hu.y.toFixed(4),n=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function o2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function l2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function yo(t){return t!==""}function rv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(t){return t.replace(u2,f2)}const c2=new Map;function f2(t,e){let n=ke[e];if(n===void 0){const i=c2.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(t){return t.replace(h2,d2)}function d2(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function lv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ZT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function m2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Fs:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function g2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Uy:e="ENVMAP_BLENDING_MULTIPLY";break;case p1:e="ENVMAP_BLENDING_MIX";break;case m1:e="ENVMAP_BLENDING_ADD";break}return e}function v2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function x2(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=p2(n),u=m2(n),d=_2(n),f=g2(n),h=v2(n),p=s2(n),x=o2(r),y=a.createProgram();let m,c,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(yo).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(yo).join(`
`),c.length>0&&(c+=`
`)):(m=[lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),c=[lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pa?"#define TONE_MAPPING":"",n.toneMapping!==Pa?ke.tonemapping_pars_fragment:"",n.toneMapping!==Pa?a2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,i2("linearToOutputTexel",n.outputColorSpace),r2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),s=Kd(s),s=rv(s,n),s=sv(s,n),o=Kd(o),o=rv(o,n),o=sv(o,n),s=ov(s),o=ov(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const g=_+m+s,v=_+c+o,R=nv(a,a.VERTEX_SHADER,g),C=nv(a,a.FRAGMENT_SHADER,v);a.attachShader(y,R),a.attachShader(y,C),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const X=a.getProgramInfoLog(y).trim(),V=a.getShaderInfoLog(R).trim(),J=a.getShaderInfoLog(C).trim();let Y=!0,L=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,y,R,C);else{const k=av(a,R,"vertex"),z=av(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+k+`
`+z)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||J==="")&&(L=!1);L&&(D.diagnostics={runnable:Y,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:J,prefix:c}})}a.deleteShader(R),a.deleteShader(C),w=new zu(a,y),b=l2(a,y)}let w;this.getUniforms=function(){return w===void 0&&A(this),w};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(y,$w)),S},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=e2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=C,this}let y2=0;class S2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new E2(e),n.set(e,i)),i}}class E2{constructor(e){this.id=y2++,this.code=e,this.usedTimes=0}}function M2(t,e,n,i,a,r,s){const o=new Jy,l=new S2,u=new Set,d=[],f=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return u.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,X,V){const J=X.fog,Y=V.geometry,L=b.isMeshStandardMaterial?X.environment:null,k=(b.isMeshStandardMaterial?n:e).get(b.envMap||L),z=k&&k.mapping===Ic?k.image.height:null,$=x[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const re=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_e=re!==void 0?re.length:0;let De=0;Y.morphAttributes.position!==void 0&&(De=1),Y.morphAttributes.normal!==void 0&&(De=2),Y.morphAttributes.color!==void 0&&(De=3);let qe,q,ne,ce;if($){const ut=_i[$];qe=ut.vertexShader,q=ut.fragmentShader}else qe=b.vertexShader,q=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),ce=l.getFragmentShaderID(b);const le=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),Qe=V.isInstancedMesh===!0,Ae=V.isBatchedMesh===!0,dt=!!b.map,lt=!!b.matcap,Ge=!!k,U=!!b.aoMap,Yt=!!b.lightMap,We=!!b.bumpMap,Pe=!!b.normalMap,Me=!!b.displacementMap,xe=!!b.emissiveMap,ge=!!b.metalnessMap,T=!!b.roughnessMap,E=b.anisotropy>0,F=b.clearcoat>0,Z=b.dispersion>0,ie=b.iridescence>0,j=b.sheen>0,Te=b.transmission>0,he=E&&!!b.anisotropyMap,Ue=F&&!!b.clearcoatMap,Ne=F&&!!b.clearcoatNormalMap,se=F&&!!b.clearcoatRoughnessMap,ye=ie&&!!b.iridescenceMap,Oe=ie&&!!b.iridescenceThicknessMap,Be=j&&!!b.sheenColorMap,Se=j&&!!b.sheenRoughnessMap,Je=!!b.specularMap,Ve=!!b.specularColorMap,vt=!!b.specularIntensityMap,N=Te&&!!b.transmissionMap,de=Te&&!!b.thicknessMap,W=!!b.gradientMap,ee=!!b.alphaMap,me=b.alphaTest>0,pe=!!b.alphaHash,Ie=!!b.extensions;let Rt=Pa;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Rt=t.toneMapping);const an={shaderID:$,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:q,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ae,batchingColor:Ae&&V._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&V.instanceColor!==null,instancingMorph:Qe&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Is,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:lt,envMap:Ge,envMapMode:Ge&&k.mapping,envMapCubeUVHeight:z,aoMap:U,lightMap:Yt,bumpMap:We,normalMap:Pe,displacementMap:h&&Me,emissiveMap:xe,normalMapObjectSpace:Pe&&b.normalMapType===y1,normalMapTangentSpace:Pe&&b.normalMapType===x1,metalnessMap:ge,roughnessMap:T,anisotropy:E,anisotropyMap:he,clearcoat:F,clearcoatMap:Ue,clearcoatNormalMap:Ne,clearcoatRoughnessMap:se,dispersion:Z,iridescence:ie,iridescenceMap:ye,iridescenceThicknessMap:Oe,sheen:j,sheenColorMap:Be,sheenRoughnessMap:Se,specularMap:Je,specularColorMap:Ve,specularIntensityMap:vt,transmission:Te,transmissionMap:N,thicknessMap:de,gradientMap:W,opaque:b.transparent===!1&&b.blending===Ms&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:pe,combine:b.combine,mapUv:dt&&y(b.map.channel),aoMapUv:U&&y(b.aoMap.channel),lightMapUv:Yt&&y(b.lightMap.channel),bumpMapUv:We&&y(b.bumpMap.channel),normalMapUv:Pe&&y(b.normalMap.channel),displacementMapUv:Me&&y(b.displacementMap.channel),emissiveMapUv:xe&&y(b.emissiveMap.channel),metalnessMapUv:ge&&y(b.metalnessMap.channel),roughnessMapUv:T&&y(b.roughnessMap.channel),anisotropyMapUv:he&&y(b.anisotropyMap.channel),clearcoatMapUv:Ue&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&y(b.sheenRoughnessMap.channel),specularMapUv:Je&&y(b.specularMap.channel),specularColorMapUv:Ve&&y(b.specularColorMap.channel),specularIntensityMapUv:vt&&y(b.specularIntensityMap.channel),transmissionMapUv:N&&y(b.transmissionMap.channel),thicknessMapUv:de&&y(b.thicknessMap.channel),alphaMapUv:ee&&y(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Pe||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Y.attributes.uv&&(dt||ee),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:be,skinning:V.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:xe&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bi,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return an.vertexUv1s=u.has(1),an.vertexUv2s=u.has(2),an.vertexUv3s=u.has(3),u.clear(),an}function c(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(_(S,b),g(S,b),S.push(t.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function g(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const S=x[b.type];let D;if(S){const X=_i[S];D=rl.clone(X.uniforms)}else D=b.uniforms;return D}function R(b,S){let D;for(let X=0,V=d.length;X<V;X++){const J=d[X];if(J.cacheKey===S){D=J,++D.usedTimes;break}}return D===void 0&&(D=new x2(t,S,b,r),d.push(D)),D}function C(b){if(--b.usedTimes===0){const S=d.indexOf(b);d[S]=d[d.length-1],d.pop(),b.destroy()}}function A(b){l.remove(b)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:w}}function b2(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function T2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cv(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(f,h,p,x,y,m){let c=t[e];return c===void 0?(c={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:y,group:m},t[e]=c):(c.id=f.id,c.object=f,c.geometry=h,c.material=p,c.groupOrder=x,c.renderOrder=f.renderOrder,c.z=y,c.group=m),e++,c}function o(f,h,p,x,y,m){const c=s(f,h,p,x,y,m);p.transmission>0?i.push(c):p.transparent===!0?a.push(c):n.push(c)}function l(f,h,p,x,y,m){const c=s(f,h,p,x,y,m);p.transmission>0?i.unshift(c):p.transparent===!0?a.unshift(c):n.unshift(c)}function u(f,h){n.length>1&&n.sort(f||T2),i.length>1&&i.sort(h||uv),a.length>1&&a.sort(h||uv)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:u}}function A2(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new cv,t.set(i,[s])):a>=r.length?(s=new cv,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function R2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new nt};break;case"SpotLight":n={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function C2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let w2=0;function D2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function U2(t){const e=new R2,n=C2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const a=new B,r=new It,s=new It;function o(u){let d=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,x=0,y=0,m=0,c=0,_=0,g=0,v=0,R=0,C=0,A=0;u.sort(D2);for(let b=0,S=u.length;b<S;b++){const D=u[b],X=D.color,V=D.intensity,J=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*V,f+=X.g*V,h+=X.b*V;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],V);A++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,z=n.get(D);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=D.shadow.matrix,_++}i.directional[p]=L,p++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(X).multiplyScalar(V),L.distance=J,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[y]=L;const k=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,k.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[y]=k.matrix,D.castShadow){const z=n.get(D);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.spotShadow[y]=z,i.spotShadowMap[y]=Y,v++}y++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(X).multiplyScalar(V),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=L,m++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity),L.distance=D.distance,L.decay=D.decay,D.castShadow){const k=D.shadow,z=n.get(D);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=Y,i.pointShadowMatrix[x]=D.shadow.matrix,g++}i.point[x]=L,x++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(V),L.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[c]=L,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const w=i.hash;(w.directionalLength!==p||w.pointLength!==x||w.spotLength!==y||w.rectAreaLength!==m||w.hemiLength!==c||w.numDirectionalShadows!==_||w.numPointShadows!==g||w.numSpotShadows!==v||w.numSpotMaps!==R||w.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=x,i.hemi.length=c,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=v+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,w.directionalLength=p,w.pointLength=x,w.spotLength=y,w.rectAreaLength=m,w.hemiLength=c,w.numDirectionalShadows=_,w.numPointShadows=g,w.numSpotShadows=v,w.numSpotMaps=R,w.numLightProbes=A,i.version=w2++)}function l(u,d){let f=0,h=0,p=0,x=0,y=0;const m=d.matrixWorldInverse;for(let c=0,_=u.length;c<_;c++){const g=u[c];if(g.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),f++}else if(g.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const v=i.rectArea[x];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),v.halfWidth.set(g.width*.5,0,0),v.halfHeight.set(0,g.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),x++}else if(g.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const v=i.hemi[y];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function fv(t){const e=new U2(t),n=[],i=[];function a(d){u.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function s(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function L2(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new fv(t),e.set(a,[o])):r>=s.length?(o=new fv(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const N2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function P2(t,e,n){let i=new rS;const a=new Ce,r=new Ce,s=new Nt,o=new oA({depthPacking:v1}),l=new lA,u={},d=n.maxTextureSize,f={[Ha]:Sn,[Sn]:Ha,[Bi]:Bi},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:N2,fragmentShader:O2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ia;x.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new oi(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dy;let c=this.type;this.render=function(C,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=t.getRenderTarget(),S=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),X=t.state;X.setBlending(qi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=c!==Pi&&this.type===Pi,J=c===Pi&&this.type!==Pi;for(let Y=0,L=C.length;Y<L;Y++){const k=C[Y],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const $=z.getFrameExtents();if(a.multiply($),r.copy(z.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/$.x),a.x=r.x*$.x,z.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/$.y),a.y=r.y*$.y,z.mapSize.y=r.y)),z.map===null||V===!0||J===!0){const _e=this.type!==Pi?{minFilter:ui,magFilter:ui}:{};z.map!==null&&z.map.dispose(),z.map=new ci(a.x,a.y,_e),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const re=z.getViewportCount();for(let _e=0;_e<re;_e++){const De=z.getViewport(_e);s.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),X.viewport(s),z.updateMatrices(k,_e),i=z.getFrustum(),v(A,w,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Pi&&_(z,w),z.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(b,S,D)};function _(C,A){const w=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ci(a.x,a.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,w,h,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,w,p,y,null)}function g(C,A,w,b){let S=null;const D=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)S=D;else if(S=w.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const X=S.uuid,V=A.uuid;let J=u[X];J===void 0&&(J={},u[X]=J);let Y=J[V];Y===void 0&&(Y=S.clone(),J[V]=Y,A.addEventListener("dispose",R)),S=Y}if(S.visible=A.visible,S.wireframe=A.wireframe,b===Pi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=t.properties.get(S);X.light=w}return S}function v(C,A,w,b,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===Pi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);const V=e.update(C),J=C.material;if(Array.isArray(J)){const Y=V.groups;for(let L=0,k=Y.length;L<k;L++){const z=Y[L],$=J[z.materialIndex];if($&&$.visible){const re=g(C,$,b,S);C.onBeforeShadow(t,C,A,w,V,re,z),t.renderBufferDirect(w,null,V,re,C,z),C.onAfterShadow(t,C,A,w,V,re,z)}}}else if(J.visible){const Y=g(C,J,b,S);C.onBeforeShadow(t,C,A,w,V,Y,null),t.renderBufferDirect(w,null,V,Y,C,null),C.onAfterShadow(t,C,A,w,V,Y,null)}}const X=C.children;for(let V=0,J=X.length;V<J;V++)v(X[V],A,w,b,S)}function R(C){C.target.removeEventListener("dispose",R);for(const w in u){const b=u[w],S=C.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const z2={[hd]:dd,[pd]:gd,[md]:vd,[zs]:_d,[dd]:hd,[gd]:pd,[vd]:md,[_d]:zs};function B2(t,e){function n(){let N=!1;const de=new Nt;let W=null;const ee=new Nt(0,0,0,0);return{setMask:function(me){W!==me&&!N&&(t.colorMask(me,me,me,me),W=me)},setLocked:function(me){N=me},setClear:function(me,pe,Ie,Rt,an){an===!0&&(me*=Rt,pe*=Rt,Ie*=Rt),de.set(me,pe,Ie,Rt),ee.equals(de)===!1&&(t.clearColor(me,pe,Ie,Rt),ee.copy(de))},reset:function(){N=!1,W=null,ee.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,W=null,ee=null,me=null;return{setReversed:function(pe){if(de!==pe){const Ie=e.get("EXT_clip_control");pe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),de=pe;const Rt=me;me=null,this.setClear(Rt)}},getReversed:function(){return de},setTest:function(pe){pe?le(t.DEPTH_TEST):be(t.DEPTH_TEST)},setMask:function(pe){W!==pe&&!N&&(t.depthMask(pe),W=pe)},setFunc:function(pe){if(de&&(pe=z2[pe]),ee!==pe){switch(pe){case hd:t.depthFunc(t.NEVER);break;case dd:t.depthFunc(t.ALWAYS);break;case pd:t.depthFunc(t.LESS);break;case zs:t.depthFunc(t.LEQUAL);break;case md:t.depthFunc(t.EQUAL);break;case _d:t.depthFunc(t.GEQUAL);break;case gd:t.depthFunc(t.GREATER);break;case vd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=pe}},setLocked:function(pe){N=pe},setClear:function(pe){me!==pe&&(de&&(pe=1-pe),t.clearDepth(pe),me=pe)},reset:function(){N=!1,W=null,ee=null,me=null,de=!1}}}function a(){let N=!1,de=null,W=null,ee=null,me=null,pe=null,Ie=null,Rt=null,an=null;return{setTest:function(ut){N||(ut?le(t.STENCIL_TEST):be(t.STENCIL_TEST))},setMask:function(ut){de!==ut&&!N&&(t.stencilMask(ut),de=ut)},setFunc:function(ut,$n,Ai){(W!==ut||ee!==$n||me!==Ai)&&(t.stencilFunc(ut,$n,Ai),W=ut,ee=$n,me=Ai)},setOp:function(ut,$n,Ai){(pe!==ut||Ie!==$n||Rt!==Ai)&&(t.stencilOp(ut,$n,Ai),pe=ut,Ie=$n,Rt=Ai)},setLocked:function(ut){N=ut},setClear:function(ut){an!==ut&&(t.clearStencil(ut),an=ut)},reset:function(){N=!1,de=null,W=null,ee=null,me=null,pe=null,Ie=null,Rt=null,an=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,u=new WeakMap;let d={},f={},h=new WeakMap,p=[],x=null,y=!1,m=null,c=null,_=null,g=null,v=null,R=null,C=null,A=new nt(0,0,0),w=0,b=!1,S=null,D=null,X=null,V=null,J=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),L=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),L=k>=2);let $=null,re={};const _e=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),qe=new Nt().fromArray(_e),q=new Nt().fromArray(De);function ne(N,de,W,ee){const me=new Uint8Array(4),pe=t.createTexture();t.bindTexture(N,pe),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<W;Ie++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return pe}const ce={};ce[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(t.DEPTH_TEST),s.setFunc(zs),We(!1),Pe(_g),le(t.CULL_FACE),U(qi);function le(N){d[N]!==!0&&(t.enable(N),d[N]=!0)}function be(N){d[N]!==!1&&(t.disable(N),d[N]=!1)}function Qe(N,de){return f[N]!==de?(t.bindFramebuffer(N,de),f[N]=de,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ae(N,de){let W=p,ee=!1;if(N){W=h.get(de),W===void 0&&(W=[],h.set(de,W));const me=N.textures;if(W.length!==me.length||W[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ie=me.length;pe<Ie;pe++)W[pe]=t.COLOR_ATTACHMENT0+pe;W.length=me.length,ee=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ee=!0);ee&&t.drawBuffers(W)}function dt(N){return x!==N?(t.useProgram(N),x=N,!0):!1}const lt={[sr]:t.FUNC_ADD,[QT]:t.FUNC_SUBTRACT,[JT]:t.FUNC_REVERSE_SUBTRACT};lt[$T]=t.MIN,lt[e1]=t.MAX;const Ge={[t1]:t.ZERO,[n1]:t.ONE,[i1]:t.SRC_COLOR,[cd]:t.SRC_ALPHA,[u1]:t.SRC_ALPHA_SATURATE,[o1]:t.DST_COLOR,[r1]:t.DST_ALPHA,[a1]:t.ONE_MINUS_SRC_COLOR,[fd]:t.ONE_MINUS_SRC_ALPHA,[l1]:t.ONE_MINUS_DST_COLOR,[s1]:t.ONE_MINUS_DST_ALPHA,[c1]:t.CONSTANT_COLOR,[f1]:t.ONE_MINUS_CONSTANT_COLOR,[h1]:t.CONSTANT_ALPHA,[d1]:t.ONE_MINUS_CONSTANT_ALPHA};function U(N,de,W,ee,me,pe,Ie,Rt,an,ut){if(N===qi){y===!0&&(be(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),N!==KT){if(N!==m||ut!==b){if((c!==sr||v!==sr)&&(t.blendEquation(t.FUNC_ADD),c=sr,v=sr),ut)switch(N){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.ONE,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,g=null,R=null,C=null,A.set(0,0,0),w=0,m=N,b=ut}return}me=me||de,pe=pe||W,Ie=Ie||ee,(de!==c||me!==v)&&(t.blendEquationSeparate(lt[de],lt[me]),c=de,v=me),(W!==_||ee!==g||pe!==R||Ie!==C)&&(t.blendFuncSeparate(Ge[W],Ge[ee],Ge[pe],Ge[Ie]),_=W,g=ee,R=pe,C=Ie),(Rt.equals(A)===!1||an!==w)&&(t.blendColor(Rt.r,Rt.g,Rt.b,an),A.copy(Rt),w=an),m=N,b=!1}function Yt(N,de){N.side===Bi?be(t.CULL_FACE):le(t.CULL_FACE);let W=N.side===Sn;de&&(W=!W),We(W),N.blending===Ms&&N.transparent===!1?U(qi):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const ee=N.stencilWrite;o.setTest(ee),ee&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):be(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(N){S!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),S=N)}function Pe(N){N!==qT?(le(t.CULL_FACE),N!==D&&(N===_g?t.cullFace(t.BACK):N===jT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):be(t.CULL_FACE),D=N}function Me(N){N!==X&&(L&&t.lineWidth(N),X=N)}function xe(N,de,W){N?(le(t.POLYGON_OFFSET_FILL),(V!==de||J!==W)&&(t.polygonOffset(de,W),V=de,J=W)):be(t.POLYGON_OFFSET_FILL)}function ge(N){N?le(t.SCISSOR_TEST):be(t.SCISSOR_TEST)}function T(N){N===void 0&&(N=t.TEXTURE0+Y-1),$!==N&&(t.activeTexture(N),$=N)}function E(N,de,W){W===void 0&&($===null?W=t.TEXTURE0+Y-1:W=$);let ee=re[W];ee===void 0&&(ee={type:void 0,texture:void 0},re[W]=ee),(ee.type!==N||ee.texture!==de)&&($!==W&&(t.activeTexture(W),$=W),t.bindTexture(N,de||ce[N]),ee.type=N,ee.texture=de)}function F(){const N=re[$];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(N){qe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),qe.copy(N))}function Se(N){q.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),q.copy(N))}function Je(N,de){let W=u.get(de);W===void 0&&(W=new WeakMap,u.set(de,W));let ee=W.get(N);ee===void 0&&(ee=t.getUniformBlockIndex(de,N.name),W.set(N,ee))}function Ve(N,de){const ee=u.get(de).get(N);l.get(de)!==ee&&(t.uniformBlockBinding(de,ee,N.__bindingPointIndex),l.set(de,ee))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},$=null,re={},f={},h=new WeakMap,p=[],x=null,y=!1,m=null,c=null,_=null,g=null,v=null,R=null,C=null,A=new nt(0,0,0),w=0,b=!1,S=null,D=null,X=null,V=null,J=null,qe.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:be,bindFramebuffer:Qe,drawBuffers:Ae,useProgram:dt,setBlending:U,setMaterial:Yt,setFlipSided:We,setCullFace:Pe,setLineWidth:Me,setPolygonOffset:xe,setScissorTest:ge,activeTexture:T,bindTexture:E,unbindTexture:F,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:ye,texImage3D:Oe,updateUBOMapping:Je,uniformBlockBinding:Ve,texStorage2D:Ne,texStorage3D:se,texSubImage2D:j,texSubImage3D:Te,compressedTexSubImage2D:he,compressedTexSubImage3D:Ue,scissor:Be,viewport:Se,reset:vt}}function F2(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ce,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,E){return p?new OffscreenCanvas(T,E):xc("canvas")}function y(T,E,F){let Z=1;const ie=ge(T);if((ie.width>F||ie.height>F)&&(Z=F/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Z*ie.width),Te=Math.floor(Z*ie.height);f===void 0&&(f=x(j,Te));const he=E?x(j,Te):f;return he.width=j,he.height=Te,he.getContext("2d").drawImage(T,0,0,j,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+j+"x"+Te+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function m(T){return T.generateMipmaps}function c(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(T,E,F,Z,ie=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=E;if(E===t.RED&&(F===t.FLOAT&&(j=t.R32F),F===t.HALF_FLOAT&&(j=t.R16F),F===t.UNSIGNED_BYTE&&(j=t.R8)),E===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.R8UI),F===t.UNSIGNED_SHORT&&(j=t.R16UI),F===t.UNSIGNED_INT&&(j=t.R32UI),F===t.BYTE&&(j=t.R8I),F===t.SHORT&&(j=t.R16I),F===t.INT&&(j=t.R32I)),E===t.RG&&(F===t.FLOAT&&(j=t.RG32F),F===t.HALF_FLOAT&&(j=t.RG16F),F===t.UNSIGNED_BYTE&&(j=t.RG8)),E===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RG8UI),F===t.UNSIGNED_SHORT&&(j=t.RG16UI),F===t.UNSIGNED_INT&&(j=t.RG32UI),F===t.BYTE&&(j=t.RG8I),F===t.SHORT&&(j=t.RG16I),F===t.INT&&(j=t.RG32I)),E===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGB8UI),F===t.UNSIGNED_SHORT&&(j=t.RGB16UI),F===t.UNSIGNED_INT&&(j=t.RGB32UI),F===t.BYTE&&(j=t.RGB8I),F===t.SHORT&&(j=t.RGB16I),F===t.INT&&(j=t.RGB32I)),E===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),F===t.UNSIGNED_INT&&(j=t.RGBA32UI),F===t.BYTE&&(j=t.RGBA8I),F===t.SHORT&&(j=t.RGBA16I),F===t.INT&&(j=t.RGBA32I)),E===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),E===t.RGBA){const Te=ie?gc:tt.getTransfer(Z);F===t.FLOAT&&(j=t.RGBA32F),F===t.HALF_FLOAT&&(j=t.RGBA16F),F===t.UNSIGNED_BYTE&&(j=Te===ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(T,E){let F;return T?E===null||E===Sr||E===nl?F=t.DEPTH24_STENCIL8:E===ki?F=t.DEPTH32F_STENCIL8:E===tl&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===nl?F=t.DEPTH_COMPONENT24:E===ki?F=t.DEPTH_COMPONENT32F:E===tl&&(F=t.DEPTH_COMPONENT16),F}function R(T,E){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ui&&T.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function C(T){const E=T.target;E.removeEventListener("dispose",C),w(E),E.isVideoTexture&&d.delete(E)}function A(T){const E=T.target;E.removeEventListener("dispose",A),S(E)}function w(T){const E=i.get(T);if(E.__webglInit===void 0)return;const F=T.source,Z=h.get(F);if(Z){const ie=Z[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(T),Object.keys(Z).length===0&&h.delete(F)}i.remove(T)}function b(T){const E=i.get(T);t.deleteTexture(E.__webglTexture);const F=T.source,Z=h.get(F);delete Z[E.__cacheKey],s.memory.textures--}function S(T){const E=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let ie=0;ie<E.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(E.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)t.deleteFramebuffer(E.__webglFramebuffer[Z]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=T.textures;for(let Z=0,ie=F.length;Z<ie;Z++){const j=i.get(F[Z]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(F[Z])}i.remove(T)}let D=0;function X(){D=0}function V(){const T=D;return T>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+a.maxTextures),D+=1,T}function J(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function Y(T,E){const F=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,T,E);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+E)}function L(T,E){const F=i.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+E)}function k(T,E){const F=i.get(T);if(T.version>0&&F.__version!==T.version){q(F,T,E);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+E)}function z(T,E){const F=i.get(T);if(T.version>0&&F.__version!==T.version){ne(F,T,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+E)}const $={[Sd]:t.REPEAT,[lr]:t.CLAMP_TO_EDGE,[Ed]:t.MIRRORED_REPEAT},re={[ui]:t.NEAREST,[_1]:t.NEAREST_MIPMAP_NEAREST,[Wl]:t.NEAREST_MIPMAP_LINEAR,[xi]:t.LINEAR,[wf]:t.LINEAR_MIPMAP_NEAREST,[ur]:t.LINEAR_MIPMAP_LINEAR},_e={[S1]:t.NEVER,[R1]:t.ALWAYS,[E1]:t.LESS,[jy]:t.LEQUAL,[M1]:t.EQUAL,[A1]:t.GEQUAL,[b1]:t.GREATER,[T1]:t.NOTEQUAL};function De(T,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===wf||E.magFilter===Wl||E.magFilter===ur||E.minFilter===xi||E.minFilter===wf||E.minFilter===Wl||E.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,$[E.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,$[E.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,$[E.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,re[E.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ui||E.minFilter!==Wl&&E.minFilter!==ur||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function qe(T,E){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",C));const Z=E.source;let ie=h.get(Z);ie===void 0&&(ie={},h.set(Z,ie));const j=J(E);if(j!==T.__cacheKey){ie[j]===void 0&&(ie[j]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),ie[j].usedTimes++;const Te=ie[T.__cacheKey];Te!==void 0&&(ie[T.__cacheKey].usedTimes--,Te.usedTimes===0&&b(E)),T.__cacheKey=j,T.__webglTexture=ie[j].texture}return F}function q(T,E,F){let Z=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=t.TEXTURE_3D);const ie=qe(T,E),j=E.source;n.bindTexture(Z,T.__webglTexture,t.TEXTURE0+F);const Te=i.get(j);if(j.version!==Te.__version||ie===!0){n.activeTexture(t.TEXTURE0+F);const he=tt.getPrimaries(tt.workingColorSpace),Ue=E.colorSpace===ya?null:tt.getPrimaries(E.colorSpace),Ne=E.colorSpace===ya||he===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let se=y(E.image,!1,a.maxTextureSize);se=xe(E,se);const ye=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type);let Be=g(E.internalFormat,ye,Oe,E.colorSpace,E.isVideoTexture);De(Z,E);let Se;const Je=E.mipmaps,Ve=E.isVideoTexture!==!0,vt=Te.__version===void 0||ie===!0,N=j.dataReady,de=R(E,se);if(E.isDepthTexture)Be=v(E.format===al,E.type),vt&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,Be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Be,se.width,se.height,0,ye,Oe,null));else if(E.isDataTexture)if(Je.length>0){Ve&&vt&&n.texStorage2D(t.TEXTURE_2D,de,Be,Je[0].width,Je[0].height);for(let W=0,ee=Je.length;W<ee;W++)Se=Je[W],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Se.width,Se.height,ye,Oe,Se.data):n.texImage2D(t.TEXTURE_2D,W,Be,Se.width,Se.height,0,ye,Oe,Se.data);E.generateMipmaps=!1}else Ve?(vt&&n.texStorage2D(t.TEXTURE_2D,de,Be,se.width,se.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ye,Oe,se.data)):n.texImage2D(t.TEXTURE_2D,0,Be,se.width,se.height,0,ye,Oe,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ve&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Be,Je[0].width,Je[0].height,se.depth);for(let W=0,ee=Je.length;W<ee;W++)if(Se=Je[W],E.format!==si)if(ye!==null)if(Ve){if(N)if(E.layerUpdates.size>0){const me=Gg(Se.width,Se.height,E.format,E.type);for(const pe of E.layerUpdates){const Ie=Se.data.subarray(pe*me/Se.data.BYTES_PER_ELEMENT,(pe+1)*me/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,pe,Se.width,Se.height,1,ye,Ie)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,se.depth,ye,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Be,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,Se.width,Se.height,se.depth,ye,Oe,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Be,Se.width,Se.height,se.depth,0,ye,Oe,Se.data)}else{Ve&&vt&&n.texStorage2D(t.TEXTURE_2D,de,Be,Je[0].width,Je[0].height);for(let W=0,ee=Je.length;W<ee;W++)Se=Je[W],E.format!==si?ye!==null?Ve?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,Se.width,Se.height,ye,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Be,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Se.width,Se.height,ye,Oe,Se.data):n.texImage2D(t.TEXTURE_2D,W,Be,Se.width,Se.height,0,ye,Oe,Se.data)}else if(E.isDataArrayTexture)if(Ve){if(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Be,se.width,se.height,se.depth),N)if(E.layerUpdates.size>0){const W=Gg(se.width,se.height,E.format,E.type);for(const ee of E.layerUpdates){const me=se.data.subarray(ee*W/se.data.BYTES_PER_ELEMENT,(ee+1)*W/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ye,Oe,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,Oe,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,se.width,se.height,se.depth,0,ye,Oe,se.data);else if(E.isData3DTexture)Ve?(vt&&n.texStorage3D(t.TEXTURE_3D,de,Be,se.width,se.height,se.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,Oe,se.data)):n.texImage3D(t.TEXTURE_3D,0,Be,se.width,se.height,se.depth,0,ye,Oe,se.data);else if(E.isFramebufferTexture){if(vt)if(Ve)n.texStorage2D(t.TEXTURE_2D,de,Be,se.width,se.height);else{let W=se.width,ee=se.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,Be,W,ee,0,ye,Oe,null),W>>=1,ee>>=1}}else if(Je.length>0){if(Ve&&vt){const W=ge(Je[0]);n.texStorage2D(t.TEXTURE_2D,de,Be,W.width,W.height)}for(let W=0,ee=Je.length;W<ee;W++)Se=Je[W],Ve?N&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye,Oe,Se):n.texImage2D(t.TEXTURE_2D,W,Be,ye,Oe,Se);E.generateMipmaps=!1}else if(Ve){if(vt){const W=ge(se);n.texStorage2D(t.TEXTURE_2D,de,Be,W.width,W.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Oe,se)}else n.texImage2D(t.TEXTURE_2D,0,Be,ye,Oe,se);m(E)&&c(Z),Te.__version=j.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function ne(T,E,F){if(E.image.length!==6)return;const Z=qe(T,E),ie=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+F);const j=i.get(ie);if(ie.version!==j.__version||Z===!0){n.activeTexture(t.TEXTURE0+F);const Te=tt.getPrimaries(tt.workingColorSpace),he=E.colorSpace===ya?null:tt.getPrimaries(E.colorSpace),Ue=E.colorSpace===ya||Te===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ne&&!se?ye[ee]=y(E.image[ee],!0,a.maxCubemapSize):ye[ee]=se?E.image[ee].image:E.image[ee],ye[ee]=xe(E,ye[ee]);const Oe=ye[0],Be=r.convert(E.format,E.colorSpace),Se=r.convert(E.type),Je=g(E.internalFormat,Be,Se,E.colorSpace),Ve=E.isVideoTexture!==!0,vt=j.__version===void 0||Z===!0,N=ie.dataReady;let de=R(E,Oe);De(t.TEXTURE_CUBE_MAP,E);let W;if(Ne){Ve&&vt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Je,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){W=ye[ee].mipmaps;for(let me=0;me<W.length;me++){const pe=W[me];E.format!==si?Be!==null?Ve?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,pe.width,pe.height,Be,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,pe.width,pe.height,Be,Se,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Je,pe.width,pe.height,0,Be,Se,pe.data)}}}else{if(W=E.mipmaps,Ve&&vt){W.length>0&&de++;const ee=ge(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Je,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Be,Se,ye[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,ye[ee].width,ye[ee].height,0,Be,Se,ye[ee].data);for(let me=0;me<W.length;me++){const Ie=W[me].image[ee].image;Ve?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Ie.width,Ie.height,Be,Se,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Je,Ie.width,Ie.height,0,Be,Se,Ie.data)}}else{Ve?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Be,Se,ye[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Je,Be,Se,ye[ee]);for(let me=0;me<W.length;me++){const pe=W[me];Ve?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Be,Se,pe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Je,Be,Se,pe.image[ee])}}}m(E)&&c(t.TEXTURE_CUBE_MAP),j.__version=ie.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function ce(T,E,F,Z,ie,j){const Te=r.convert(F.format,F.colorSpace),he=r.convert(F.type),Ue=g(F.internalFormat,Te,he,F.colorSpace),Ne=i.get(E),se=i.get(F);if(se.__renderTarget=E,!Ne.__hasExternalTextures){const ye=Math.max(1,E.width>>j),Oe=Math.max(1,E.height>>j);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,j,Ue,ye,Oe,E.depth,0,Te,he,null):n.texImage2D(ie,j,Ue,ye,Oe,0,Te,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Pe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,se.__webglTexture,0,We(E)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,se.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(T,E,F){if(t.bindRenderbuffer(t.RENDERBUFFER,T),E.depthBuffer){const Z=E.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,j=v(E.stencilBuffer,ie),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=We(E);Pe(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,j,E.width,E.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,j,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,j,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,T)}else{const Z=E.textures;for(let ie=0;ie<Z.length;ie++){const j=Z[ie],Te=r.convert(j.format,j.colorSpace),he=r.convert(j.type),Ue=g(j.internalFormat,Te,he,j.colorSpace),Ne=We(E);F&&Pe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,Ue,E.width,E.height):Pe(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ne,Ue,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Ue,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ie=Z.__webglTexture,j=We(E);if(E.depthTexture.format===il)Pe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(E.depthTexture.format===al)Pe(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Qe(T){const E=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=Z}if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Z=T.texture.mipmaps;Z&&Z.length>0?be(E.__webglFramebuffer[0],T):be(E.__webglFramebuffer,T)}else if(F){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=t.createRenderbuffer(),le(E.__webglDepthbuffer[Z],T,!1);else{const ie=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,j)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),le(E.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(T,E,F){const Z=i.get(T);E!==void 0&&ce(Z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Qe(T)}function dt(T){const E=T.texture,F=i.get(T),Z=i.get(E);T.addEventListener("dispose",A);const ie=T.textures,j=T.isWebGLCubeRenderTarget===!0,Te=ie.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=E.version,s.memory.textures++),j){F.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[he]=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)F.__webglFramebuffer[he][Ue]=t.createFramebuffer()}else F.__webglFramebuffer[he]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)F.__webglFramebuffer[he]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Te)for(let he=0,Ue=ie.length;he<Ue;he++){const Ne=i.get(ie[he]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=t.createTexture(),s.memory.textures++)}if(T.samples>0&&Pe(T)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let he=0;he<ie.length;he++){const Ue=ie[he];F.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[he]);const Ne=r.convert(Ue.format,Ue.colorSpace),se=r.convert(Ue.type),ye=g(Ue.internalFormat,Ne,se,Ue.colorSpace,T.isXRRenderTarget===!0),Oe=We(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ye,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,F.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),le(F.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),De(t.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)ce(F.__webglFramebuffer[he][Ue],T,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ue);else ce(F.__webglFramebuffer[he],T,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let he=0,Ue=ie.length;he<Ue;he++){const Ne=ie[he],se=i.get(Ne);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),De(t.TEXTURE_2D,Ne),ce(F.__webglFramebuffer,T,Ne,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Ne)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Z.__webglTexture),De(he,E),E.mipmaps&&E.mipmaps.length>0)for(let Ue=0;Ue<E.mipmaps.length;Ue++)ce(F.__webglFramebuffer[Ue],T,E,t.COLOR_ATTACHMENT0,he,Ue);else ce(F.__webglFramebuffer,T,E,t.COLOR_ATTACHMENT0,he,0);m(E)&&c(he),n.unbindTexture()}T.depthBuffer&&Qe(T)}function lt(T){const E=T.textures;for(let F=0,Z=E.length;F<Z;F++){const ie=E[F];if(m(ie)){const j=_(T),Te=i.get(ie).__webglTexture;n.bindTexture(j,Te),c(j),n.unbindTexture()}}}const Ge=[],U=[];function Yt(T){if(T.samples>0){if(Pe(T)===!1){const E=T.textures,F=T.width,Z=T.height;let ie=t.COLOR_BUFFER_BIT;const j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(T),he=E.length>1;if(he)for(let Ne=0;Ne<E.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ue=T.texture.mipmaps;Ue&&Ue.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const se=i.get(E[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,F,Z,0,0,F,Z,ie,t.NEAREST),l===!0&&(Ge.length=0,U.length=0,Ge.push(t.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ge.push(j),U.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ne=0;Ne<E.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Ne]);const se=i.get(E[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const E=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function We(T){return Math.min(a.maxSamples,T.samples)}function Pe(T){const E=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(T){const E=s.render.frame;d.get(T)!==E&&(d.set(T,E),T.update())}function xe(T,E){const F=T.colorSpace,Z=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Is&&F!==ya&&(tt.getTransfer(F)===ct?(Z!==si||ie!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=Y,this.setTexture2DArray=L,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=Ae,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Pe}function I2(t,e){function n(i,a=ya){let r;const s=tt.getTransfer(a);if(i===ea)return t.UNSIGNED_BYTE;if(i===sm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===om)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hy)return t.BYTE;if(i===Gy)return t.SHORT;if(i===tl)return t.UNSIGNED_SHORT;if(i===rm)return t.INT;if(i===Sr)return t.UNSIGNED_INT;if(i===ki)return t.FLOAT;if(i===ji)return t.HALF_FLOAT;if(i===ky)return t.ALPHA;if(i===Xy)return t.RGB;if(i===si)return t.RGBA;if(i===il)return t.DEPTH_COMPONENT;if(i===al)return t.DEPTH_STENCIL;if(i===Wy)return t.RED;if(i===lm)return t.RED_INTEGER;if(i===Yy)return t.RG;if(i===um)return t.RG_INTEGER;if(i===cm)return t.RGBA_INTEGER;if(i===wu||i===Du||i===Uu||i===Lu)if(s===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Du)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Du)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uu)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lu)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===bd||i===Td||i===Ad)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Md)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Td)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ad)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Cd||i===wd)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Rd||i===Cd)return s===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dd||i===Ud||i===Ld||i===Nd||i===Od||i===Pd||i===zd||i===Bd||i===Fd||i===Id||i===Hd||i===Gd||i===Vd||i===kd)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Od)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Id)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nu||i===Xd||i===Wd)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Nu)return s===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qy||i===Yd||i===qd||i===jd)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const H2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class V2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const a=new En,r=e.properties.get(a);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new un({vertexShader:H2,fragmentShader:G2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Gc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k2 extends wr{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,u=null,d=null,f=null,h=null,p=null,x=null;const y=new V2,m=n.getContextAttributes();let c=null,_=null;const g=[],v=[],R=new Ce;let C=null;const A=new Yn;A.viewport=new Nt;const w=new Yn;w.viewport=new Nt;const b=[A,w],S=new uA;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=g[q];return ne===void 0&&(ne=new Kf,g[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=g[q];return ne===void 0&&(ne=new Kf,g[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=g[q];return ne===void 0&&(ne=new Kf,g[q]=ne),ne.getHandSpace()};function V(q){const ne=v.indexOf(q.inputSource);if(ne===-1)return;const ce=g[ne];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||s),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){a.removeEventListener("select",V),a.removeEventListener("selectstart",V),a.removeEventListener("selectend",V),a.removeEventListener("squeeze",V),a.removeEventListener("squeezestart",V),a.removeEventListener("squeezeend",V),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",Y);for(let q=0;q<g.length;q++){const ne=v[q];ne!==null&&(v[q]=null,g[q].disconnect(ne))}D=null,X=null,y.reset(),e.setRenderTarget(c),p=null,h=null,f=null,a=null,_=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(c=e.getRenderTarget(),a.addEventListener("select",V),a.addEventListener("selectstart",V),a.addEventListener("selectend",V),a.addEventListener("squeeze",V),a.addEventListener("squeezestart",V),a.addEventListener("squeezeend",V),a.addEventListener("end",J),a.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,le=null,be=null;m.depth&&(be=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?al:il,le=m.stencil?nl:Sr);const Qe={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:r};f=new XRWebGLBinding(a,n),h=f.createProjectionLayer(Qe),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ci(h.textureWidth,h.textureHeight,{format:si,type:ea,depthTexture:new sS(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ci(p.framebufferWidth,p.framebufferHeight,{format:si,type:ea,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await a.requestReferenceSpace(o),qe.setContext(a),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(q){for(let ne=0;ne<q.removed.length;ne++){const ce=q.removed[ne],le=v.indexOf(ce);le>=0&&(v[le]=null,g[le].disconnect(ce))}for(let ne=0;ne<q.added.length;ne++){const ce=q.added[ne];let le=v.indexOf(ce);if(le===-1){for(let Qe=0;Qe<g.length;Qe++)if(Qe>=v.length){v.push(ce),le=Qe;break}else if(v[Qe]===null){v[Qe]=ce,le=Qe;break}if(le===-1)break}const be=g[le];be&&be.connect(ce)}}const L=new B,k=new B;function z(q,ne,ce){L.setFromMatrixPosition(ne.matrixWorld),k.setFromMatrixPosition(ce.matrixWorld);const le=L.distanceTo(k),be=ne.projectionMatrix.elements,Qe=ce.projectionMatrix.elements,Ae=be[14]/(be[10]-1),dt=be[14]/(be[10]+1),lt=(be[9]+1)/be[5],Ge=(be[9]-1)/be[5],U=(be[8]-1)/be[0],Yt=(Qe[8]+1)/Qe[0],We=Ae*U,Pe=Ae*Yt,Me=le/(-U+Yt),xe=Me*-U;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xe),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ge=Ae+Me,T=dt+Me,E=We-xe,F=Pe+(le-xe),Z=lt*dt/T*ge,ie=Ge*dt/T*ge;q.projectionMatrix.makePerspective(E,F,Z,ie,ge,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function $(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let ne=q.near,ce=q.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),S.near=w.near=A.near=ne,S.far=w.far=A.far=ce,(D!==S.near||X!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far),A.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|w.layers.mask;const le=q.parent,be=S.cameras;$(S,le);for(let Qe=0;Qe<be.length;Qe++)$(be[Qe],le);be.length===2?z(S,A,w):S.projectionMatrix.copy(A.projectionMatrix),re(q,S,le)};function re(q,ne,ce){ce===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let _e=null;function De(q,ne){if(d=ne.getViewerPose(u||s),x=ne,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let le=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Ae=0;Ae<ce.length;Ae++){const dt=ce[Ae];let lt=null;if(p!==null)lt=p.getViewport(dt);else{const U=f.getViewSubImage(h,dt);lt=U.viewport,Ae===0&&(e.setRenderTargetTextures(_,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(_))}let Ge=b[Ae];Ge===void 0&&(Ge=new Yn,Ge.layers.enable(Ae),Ge.viewport=new Nt,b[Ae]=Ge),Ge.matrix.fromArray(dt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(dt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(lt.x,lt.y,lt.width,lt.height),Ae===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Ge)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&f){const Ae=f.getDepthInformation(ce[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,a.renderState)}}for(let ce=0;ce<g.length;ce++){const le=v[ce],be=g[ce];le!==null&&be!==void 0&&be.update(le,ne,u||s)}_e&&_e(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const qe=new uS;qe.setAnimationLoop(De),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}}const tr=new ta,X2=new It;function W2(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,nS(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function a(m,c,_,g,v){c.isMeshBasicMaterial||c.isMeshLambertMaterial?r(m,c):c.isMeshToonMaterial?(r(m,c),f(m,c)):c.isMeshPhongMaterial?(r(m,c),d(m,c)):c.isMeshStandardMaterial?(r(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,v)):c.isMeshMatcapMaterial?(r(m,c),x(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),y(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===Sn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===Sn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c),g=_.envMap,v=_.envMapRotation;g&&(m.envMap.value=g,tr.copy(v),tr.x*=-1,tr.y*=-1,tr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.envMapRotation.value.setFromMatrix4(X2.makeRotationFromEuler(tr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function f(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Sn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,c){c.matcap&&(m.matcap.value=c.matcap)}function y(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Y2(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const v=g.program;i.uniformBlockBinding(_,v)}function u(_,g){let v=a[_.id];v===void 0&&(x(_),v=d(_),a[_.id]=v,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const C=e.render.frame;r[_.id]!==C&&(h(_),r[_.id]=C)}function d(_){const g=f();_.__bindingPointIndex=g;const v=t.createBuffer(),R=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,v),v}function f(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=a[_.id],v=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=v.length;C<A;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let b=0,S=w.length;b<S;b++){const D=w[b];if(p(D,C,b,R)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let Y=0;Y<V.length;Y++){const L=V[Y],k=y(L);typeof L=="number"||typeof L=="boolean"?(D.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,X+J,D.__data)):L.isMatrix3?(D.__data[0]=L.elements[0],D.__data[1]=L.elements[1],D.__data[2]=L.elements[2],D.__data[3]=0,D.__data[4]=L.elements[3],D.__data[5]=L.elements[4],D.__data[6]=L.elements[5],D.__data[7]=0,D.__data[8]=L.elements[6],D.__data[9]=L.elements[7],D.__data[10]=L.elements[8],D.__data[11]=0):(L.toArray(D.__data,J),J+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,v,R){const C=_.value,A=g+"_"+v;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const w=R[A];if(typeof C=="number"||typeof C=="boolean"){if(w!==C)return R[A]=C,!0}else if(w.equals(C)===!1)return w.copy(C),!0}return!1}function x(_){const g=_.uniforms;let v=0;const R=16;for(let A=0,w=g.length;A<w;A++){const b=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,D=b.length;S<D;S++){const X=b[S],V=Array.isArray(X.value)?X.value:[X.value];for(let J=0,Y=V.length;J<Y;J++){const L=V[J],k=y(L),z=v%R,$=z%k.boundary,re=z+$;v+=$,re!==0&&R-re<k.storage&&(v+=R-re),X.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=k.storage}}}const C=v%R;return C>0&&(v+=R-C),_.__size=v,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const v=s.indexOf(g.__bindingPointIndex);s.splice(v,1),t.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function c(){for(const _ in a)t.deleteBuffer(a[_]);s=[],a={},r={}}return{bind:l,update:u,dispose:c}}class q2{constructor(e={}){const{canvas:n=D1(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const x=new Uint32Array(4),y=new Int32Array(4);let m=null,c=null;const _=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let R=!1;this._outputColorSpace=Un;let C=0,A=0,w=null,b=-1,S=null;const D=new Nt,X=new Nt;let V=null;const J=new nt(0);let Y=0,L=n.width,k=n.height,z=1,$=null,re=null;const _e=new Nt(0,0,L,k),De=new Nt(0,0,L,k);let qe=!1;const q=new rS;let ne=!1,ce=!1;const le=new It,be=new It,Qe=new B,Ae=new Nt,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ge(){return w===null?z:1}let U=i;function Yt(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${am}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",pe,!1),U===null){const O="webgl2";if(U=Yt(O,M),U===null)throw Yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let We,Pe,Me,xe,ge,T,E,F,Z,ie,j,Te,he,Ue,Ne,se,ye,Oe,Be,Se,Je,Ve,vt,N;function de(){We=new iw(U),We.init(),Ve=new I2(U,We),Pe=new KC(U,We,e,Ve),Me=new B2(U,We),Pe.reverseDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),xe=new sw(U),ge=new b2,T=new F2(U,We,Me,ge,Pe,Ve,xe),E=new JC(v),F=new nw(v),Z=new hA(U),vt=new jC(U,Z),ie=new aw(U,Z,xe,vt),j=new lw(U,ie,Z,xe),Be=new ow(U,Pe,T),se=new QC(ge),Te=new M2(v,E,F,We,Pe,vt,se),he=new W2(v,ge),Ue=new A2,Ne=new L2(We),Oe=new qC(v,E,F,Me,j,p,l),ye=new P2(v,j,Pe),N=new Y2(U,xe,Pe,Me),Se=new ZC(U,We,xe),Je=new rw(U,We,xe),xe.programs=Te.programs,v.capabilities=Pe,v.extensions=We,v.properties=ge,v.renderLists=Ue,v.shadowMap=ye,v.state=Me,v.info=xe}de();const W=new k2(v,U);this.xr=W,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(L,k,!1))},this.getSize=function(M){return M.set(L,k)},this.setSize=function(M,O,H=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,k=O,n.width=Math.floor(M*z),n.height=Math.floor(O*z),H===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(L*z,k*z).floor()},this.setDrawingBufferSize=function(M,O,H){L=M,k=O,z=H,n.width=Math.floor(M*H),n.height=Math.floor(O*H),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(_e)},this.setViewport=function(M,O,H,G){M.isVector4?_e.set(M.x,M.y,M.z,M.w):_e.set(M,O,H,G),Me.viewport(D.copy(_e).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(De)},this.setScissor=function(M,O,H,G){M.isVector4?De.set(M.x,M.y,M.z,M.w):De.set(M,O,H,G),Me.scissor(X.copy(De).multiplyScalar(z).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){Me.setScissorTest(qe=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,H=!0){let G=0;if(M){let P=!1;if(w!==null){const oe=w.texture.format;P=oe===cm||oe===um||oe===lm}if(P){const oe=w.texture.type,fe=oe===ea||oe===Sr||oe===tl||oe===nl||oe===sm||oe===om,ve=Oe.getClearColor(),Ee=Oe.getClearAlpha(),Fe=ve.r,ze=ve.g,Re=ve.b;fe?(x[0]=Fe,x[1]=ze,x[2]=Re,x[3]=Ee,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Fe,y[1]=ze,y[2]=Re,y[3]=Ee,U.clearBufferiv(U.COLOR,0,y))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT),H&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Oe.dispose(),Ue.dispose(),Ne.dispose(),ge.dispose(),E.dispose(),F.dispose(),j.dispose(),vt.dispose(),N.dispose(),Te.dispose(),W.dispose(),W.removeEventListener("sessionstart",xm),W.removeEventListener("sessionend",ym),qa.stop()};function ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=xe.autoReset,O=ye.enabled,H=ye.autoUpdate,G=ye.needsUpdate,P=ye.type;de(),xe.autoReset=M,ye.enabled=O,ye.autoUpdate=H,ye.needsUpdate=G,ye.type=P}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ie(M){const O=M.target;O.removeEventListener("dispose",Ie),Rt(O)}function Rt(M){an(M),ge.remove(M)}function an(M){const O=ge.get(M).programs;O!==void 0&&(O.forEach(function(H){Te.releaseProgram(H)}),M.isShaderMaterial&&Te.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,H,G,P,oe){O===null&&(O=dt);const fe=P.isMesh&&P.matrixWorld.determinant()<0,ve=gS(M,O,H,G,P);Me.setMaterial(G,fe);let Ee=H.index,Fe=1;if(G.wireframe===!0){if(Ee=ie.getWireframeAttribute(H),Ee===void 0)return;Fe=2}const ze=H.drawRange,Re=H.attributes.position;let et=ze.start*Fe,st=(ze.start+ze.count)*Fe;oe!==null&&(et=Math.max(et,oe.start*Fe),st=Math.min(st,(oe.start+oe.count)*Fe)),Ee!==null?(et=Math.max(et,0),st=Math.min(st,Ee.count)):Re!=null&&(et=Math.max(et,0),st=Math.min(st,Re.count));const Pt=st-et;if(Pt<0||Pt===1/0)return;vt.setup(P,G,ve,H,Ee);let Ct,it=Se;if(Ee!==null&&(Ct=Z.get(Ee),it=Je,it.setIndex(Ct)),P.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*Ge()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(P.isLine){let we=G.linewidth;we===void 0&&(we=1),Me.setLineWidth(we*Ge()),P.isLineSegments?it.setMode(U.LINES):P.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else P.isPoints?it.setMode(U.POINTS):P.isSprite&&it.setMode(U.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Pu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))it.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const we=P._multiDrawStarts,$t=P._multiDrawCounts,ot=P._multiDrawCount,ei=Ee?Z.get(Ee).bytesPerElement:1,Dr=ge.get(G).currentProgram.getUniforms();for(let Tn=0;Tn<ot;Tn++)Dr.setValue(U,"_gl_DrawID",Tn),it.render(we[Tn]/ei,$t[Tn])}else if(P.isInstancedMesh)it.renderInstances(et,Pt,P.count);else if(H.isInstancedBufferGeometry){const we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,$t=Math.min(H.instanceCount,we);it.renderInstances(et,Pt,$t)}else it.render(et,Pt)};function ut(M,O,H){M.transparent===!0&&M.side===Bi&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,Rl(M,O,H),M.side=Ha,M.needsUpdate=!0,Rl(M,O,H),M.side=Bi):Rl(M,O,H)}this.compile=function(M,O,H=null){H===null&&(H=M),c=Ne.get(H),c.init(O),g.push(c),H.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),M!==H&&M.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(c.pushLight(P),P.castShadow&&c.pushShadow(P))}),c.setupLights();const G=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const oe=P.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const ve=oe[fe];ut(ve,H,P),G.add(ve)}else ut(oe,H,P),G.add(oe)}),c=g.pop(),G},this.compileAsync=function(M,O,H=null){const G=this.compile(M,O,H);return new Promise(P=>{function oe(){if(G.forEach(function(fe){ge.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){P(M);return}setTimeout(oe,10)}We.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let $n=null;function Ai(M){$n&&$n(M)}function xm(){qa.stop()}function ym(){qa.start()}const qa=new uS;qa.setAnimationLoop(Ai),typeof self<"u"&&qa.setContext(self),this.setAnimationLoop=function(M){$n=M,W.setAnimationLoop(M),M===null?qa.stop():qa.start()},W.addEventListener("sessionstart",xm),W.addEventListener("sessionend",ym),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(O),O=W.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,w),c=Ne.get(M,g.length),c.init(O),g.push(c),be.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(be),ce=this.localClippingEnabled,ne=se.init(this.clippingPlanes,ce),m=Ue.get(M,_.length),m.init(),_.push(m),W.enabled===!0&&W.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&kc(oe,O,-1/0,v.sortObjects)}kc(M,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,re),lt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,lt&&Oe.addToRenderList(m,M),this.info.render.frame++,ne===!0&&se.beginShadows();const H=c.state.shadowsArray;ye.render(H,M,O),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,P=m.transmissive;if(c.setupLights(),O.isArrayCamera){const oe=O.cameras;if(P.length>0)for(let fe=0,ve=oe.length;fe<ve;fe++){const Ee=oe[fe];Em(G,P,M,Ee)}lt&&Oe.render(M);for(let fe=0,ve=oe.length;fe<ve;fe++){const Ee=oe[fe];Sm(m,M,Ee,Ee.viewport)}}else P.length>0&&Em(G,P,M,O),lt&&Oe.render(M),Sm(m,M,O);w!==null&&A===0&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,O),vt.resetDefaultState(),b=-1,S=null,g.pop(),g.length>0?(c=g[g.length-1],ne===!0&&se.setGlobalState(v.clippingPlanes,c.state.camera)):c=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function kc(M,O,H,G){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)c.pushLight(M),M.castShadow&&c.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){G&&Ae.setFromMatrixPosition(M.matrixWorld).applyMatrix4(be);const fe=j.update(M),ve=M.material;ve.visible&&m.push(M,fe,ve,H,Ae.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const fe=j.update(M),ve=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ae.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(M.matrixWorld).applyMatrix4(be)),Array.isArray(ve)){const Ee=fe.groups;for(let Fe=0,ze=Ee.length;Fe<ze;Fe++){const Re=Ee[Fe],et=ve[Re.materialIndex];et&&et.visible&&m.push(M,fe,et,H,Ae.z,Re)}}else ve.visible&&m.push(M,fe,ve,H,Ae.z,null)}}const oe=M.children;for(let fe=0,ve=oe.length;fe<ve;fe++)kc(oe[fe],O,H,G)}function Sm(M,O,H,G){const P=M.opaque,oe=M.transmissive,fe=M.transparent;c.setupLightsView(H),ne===!0&&se.setGlobalState(v.clippingPlanes,H),G&&Me.viewport(D.copy(G)),P.length>0&&Al(P,O,H),oe.length>0&&Al(oe,O,H),fe.length>0&&Al(fe,O,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Em(M,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[G.id]===void 0&&(c.state.transmissionRenderTarget[G.id]=new ci(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?ji:ea,minFilter:ur,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const oe=c.state.transmissionRenderTarget[G.id],fe=G.viewport||D;oe.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const ve=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(J),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),lt&&Oe.render(H);const Ee=v.toneMapping;v.toneMapping=Pa;const Fe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),c.setupLightsView(G),ne===!0&&se.setGlobalState(v.clippingPlanes,G),Al(M,H,G),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),We.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Re=0,et=O.length;Re<et;Re++){const st=O[Re],Pt=st.object,Ct=st.geometry,it=st.material,we=st.group;if(it.side===Bi&&Pt.layers.test(G.layers)){const $t=it.side;it.side=Sn,it.needsUpdate=!0,Mm(Pt,H,G,Ct,it,we),it.side=$t,it.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}v.setRenderTarget(ve),v.setClearColor(J,Y),Fe!==void 0&&(G.viewport=Fe),v.toneMapping=Ee}function Al(M,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let P=0,oe=M.length;P<oe;P++){const fe=M[P],ve=fe.object,Ee=fe.geometry,Fe=fe.group;let ze=fe.material;ze.allowOverride===!0&&G!==null&&(ze=G),ve.layers.test(H.layers)&&Mm(ve,O,H,Ee,ze,Fe)}}function Mm(M,O,H,G,P,oe){M.onBeforeRender(v,O,H,G,P,oe),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(v,O,H,G,M,oe),P.transparent===!0&&P.side===Bi&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,v.renderBufferDirect(H,O,G,P,M,oe),P.side=Ha,P.needsUpdate=!0,v.renderBufferDirect(H,O,G,P,M,oe),P.side=Bi):v.renderBufferDirect(H,O,G,P,M,oe),M.onAfterRender(v,O,H,G,P,oe)}function Rl(M,O,H){O.isScene!==!0&&(O=dt);const G=ge.get(M),P=c.state.lights,oe=c.state.shadowsArray,fe=P.state.version,ve=Te.getParameters(M,P.state,oe,O,H),Ee=Te.getProgramCacheKey(ve);let Fe=G.programs;G.environment=M.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(M.isMeshStandardMaterial?F:E).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",Ie),Fe=new Map,G.programs=Fe);let ze=Fe.get(Ee);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===fe)return Tm(M,ve),ze}else ve.uniforms=Te.getUniforms(M),M.onBeforeCompile(ve,v),ze=Te.acquireProgram(ve,Ee),Fe.set(Ee,ze),G.uniforms=ve.uniforms;const Re=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=se.uniform),Tm(M,ve),G.needsLights=xS(M),G.lightsStateVersion=fe,G.needsLights&&(Re.ambientLightColor.value=P.state.ambient,Re.lightProbe.value=P.state.probe,Re.directionalLights.value=P.state.directional,Re.directionalLightShadows.value=P.state.directionalShadow,Re.spotLights.value=P.state.spot,Re.spotLightShadows.value=P.state.spotShadow,Re.rectAreaLights.value=P.state.rectArea,Re.ltc_1.value=P.state.rectAreaLTC1,Re.ltc_2.value=P.state.rectAreaLTC2,Re.pointLights.value=P.state.point,Re.pointLightShadows.value=P.state.pointShadow,Re.hemisphereLights.value=P.state.hemi,Re.directionalShadowMap.value=P.state.directionalShadowMap,Re.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Re.spotShadowMap.value=P.state.spotShadowMap,Re.spotLightMatrix.value=P.state.spotLightMatrix,Re.spotLightMap.value=P.state.spotLightMap,Re.pointShadowMap.value=P.state.pointShadowMap,Re.pointShadowMatrix.value=P.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function bm(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=zu.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Tm(M,O){const H=ge.get(M);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function gS(M,O,H,G,P){O.isScene!==!0&&(O=dt),T.resetTextureUnits();const oe=O.fog,fe=G.isMeshStandardMaterial?O.environment:null,ve=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Is,Ee=(G.isMeshStandardMaterial?F:E).get(G.envMap||fe),Fe=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,st=!!H.morphAttributes.color;let Pt=Pa;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Ct=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=Ct!==void 0?Ct.length:0,we=ge.get(G),$t=c.state.lights;if(ne===!0&&(ce===!0||M!==S)){const cn=M===S&&G.id===b;se.setState(G,M,cn)}let ot=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==$t.state.version||we.outputColorSpace!==ve||P.isBatchedMesh&&we.batching===!1||!P.isBatchedMesh&&we.batching===!0||P.isBatchedMesh&&we.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&we.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&we.instancing===!1||!P.isInstancedMesh&&we.instancing===!0||P.isSkinnedMesh&&we.skinning===!1||!P.isSkinnedMesh&&we.skinning===!0||P.isInstancedMesh&&we.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&we.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&we.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&we.instancingMorph===!1&&P.morphTexture!==null||we.envMap!==Ee||G.fog===!0&&we.fog!==oe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==se.numPlanes||we.numIntersection!==se.numIntersection)||we.vertexAlphas!==Fe||we.vertexTangents!==ze||we.morphTargets!==Re||we.morphNormals!==et||we.morphColors!==st||we.toneMapping!==Pt||we.morphTargetsCount!==it)&&(ot=!0):(ot=!0,we.__version=G.version);let ei=we.currentProgram;ot===!0&&(ei=Rl(G,O,P));let Dr=!1,Tn=!1,Js=!1;const Et=ei.getUniforms(),In=we.uniforms;if(Me.useProgram(ei.program)&&(Dr=!0,Tn=!0,Js=!0),G.id!==b&&(b=G.id,Tn=!0),Dr||S!==M){Me.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),L1(le),N1(le),Et.setValue(U,"projectionMatrix",le)):Et.setValue(U,"projectionMatrix",M.projectionMatrix),Et.setValue(U,"viewMatrix",M.matrixWorldInverse);const mn=Et.map.cameraPosition;mn!==void 0&&mn.setValue(U,Qe.setFromMatrixPosition(M.matrixWorld)),Pe.logarithmicDepthBuffer&&Et.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Tn=!0,Js=!0)}if(P.isSkinnedMesh){Et.setOptional(U,P,"bindMatrix"),Et.setOptional(U,P,"bindMatrixInverse");const cn=P.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Et.setValue(U,"boneTexture",cn.boneTexture,T))}P.isBatchedMesh&&(Et.setOptional(U,P,"batchingTexture"),Et.setValue(U,"batchingTexture",P._matricesTexture,T),Et.setOptional(U,P,"batchingIdTexture"),Et.setValue(U,"batchingIdTexture",P._indirectTexture,T),Et.setOptional(U,P,"batchingColorTexture"),P._colorsTexture!==null&&Et.setValue(U,"batchingColorTexture",P._colorsTexture,T));const Hn=H.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Be.update(P,H,ei),(Tn||we.receiveShadow!==P.receiveShadow)&&(we.receiveShadow=P.receiveShadow,Et.setValue(U,"receiveShadow",P.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(In.envMap.value=Ee,In.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(In.envMapIntensity.value=O.environmentIntensity),Tn&&(Et.setValue(U,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&vS(In,Js),oe&&G.fog===!0&&he.refreshFogUniforms(In,oe),he.refreshMaterialUniforms(In,G,z,k,c.state.transmissionRenderTarget[M.id]),zu.upload(U,bm(we),In,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zu.upload(U,bm(we),In,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(U,"center",P.center),Et.setValue(U,"modelViewMatrix",P.modelViewMatrix),Et.setValue(U,"normalMatrix",P.normalMatrix),Et.setValue(U,"modelMatrix",P.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const cn=G.uniformsGroups;for(let mn=0,Xc=cn.length;mn<Xc;mn++){const ja=cn[mn];N.update(ja,ei),N.bind(ja,ei)}}return ei}function vS(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function xS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,O,H){const G=ge.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),ge.get(M.texture).__webglTexture=O,ge.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const H=ge.get(M);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const yS=U.createFramebuffer();this.setRenderTarget=function(M,O=0,H=0){w=M,C=O,A=H;let G=!0,P=null,oe=!1,fe=!1;if(M){const Ee=ge.get(M);if(Ee.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(U.FRAMEBUFFER,null),G=!1;else if(Ee.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Ee.__hasExternalTextures)T.rebindTextures(M,ge.get(M.texture).__webglTexture,ge.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(Ee.__boundDepthTexture!==Re){if(Re!==null&&ge.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(fe=!0);const ze=ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[O])?P=ze[O][H]:P=ze[O],oe=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?P=ge.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?P=ze[H]:P=ze,D.copy(M.viewport),X.copy(M.scissor),V=M.scissorTest}else D.copy(_e).multiplyScalar(z).floor(),X.copy(De).multiplyScalar(z).floor(),V=qe;if(H!==0&&(P=yS),Me.bindFramebuffer(U.FRAMEBUFFER,P)&&G&&Me.drawBuffers(M,P),Me.viewport(D),Me.scissor(X),Me.setScissorTest(V),oe){const Ee=ge.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,H)}else if(fe){const Ee=ge.get(M.texture),Fe=O;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.__webglTexture,H,Fe)}else if(M!==null&&H!==0){const Ee=ge.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(M,O,H,G,P,oe,fe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Me.bindFramebuffer(U.FRAMEBUFFER,ve);try{const Ee=M.texture,Fe=Ee.format,ze=Ee.type;if(!Pe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-G&&H>=0&&H<=M.height-P&&U.readPixels(O,H,G,P,Ve.convert(Fe),Ve.convert(ze),oe)}finally{const Ee=w!==null?ge.get(w).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(M,O,H,G,P,oe,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(O>=0&&O<=M.width-G&&H>=0&&H<=M.height-P){Me.bindFramebuffer(U.FRAMEBUFFER,ve);const Ee=M.texture,Fe=Ee.format,ze=Ee.type;if(!Pe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,oe.byteLength,U.STREAM_READ),U.readPixels(O,H,G,P,Ve.convert(Fe),Ve.convert(ze),0);const et=w!==null?ge.get(w).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,et);const st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await U1(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,oe),U.deleteBuffer(Re),U.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,H=0){const G=Math.pow(2,-H),P=Math.floor(M.image.width*G),oe=Math.floor(M.image.height*G),fe=O!==null?O.x:0,ve=O!==null?O.y:0;T.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,fe,ve,P,oe),Me.unbindTexture()};const SS=U.createFramebuffer(),ES=U.createFramebuffer();this.copyTextureToTexture=function(M,O,H=null,G=null,P=0,oe=null){oe===null&&(P!==0?(Pu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=P,P=0):oe=0);let fe,ve,Ee,Fe,ze,Re,et,st,Pt;const Ct=M.isCompressedTexture?M.mipmaps[oe]:M.image;if(H!==null)fe=H.max.x-H.min.x,ve=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Fe=H.min.x,ze=H.min.y,Re=H.isBox3?H.min.z:0;else{const Hn=Math.pow(2,-P);fe=Math.floor(Ct.width*Hn),ve=Math.floor(Ct.height*Hn),M.isDataArrayTexture?Ee=Ct.depth:M.isData3DTexture?Ee=Math.floor(Ct.depth*Hn):Ee=1,Fe=0,ze=0,Re=0}G!==null?(et=G.x,st=G.y,Pt=G.z):(et=0,st=0,Pt=0);const it=Ve.convert(O.format),we=Ve.convert(O.type);let $t;O.isData3DTexture?(T.setTexture3D(O,0),$t=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(T.setTexture2DArray(O,0),$t=U.TEXTURE_2D_ARRAY):(T.setTexture2D(O,0),$t=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),ei=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Dr=U.getParameter(U.UNPACK_SKIP_PIXELS),Tn=U.getParameter(U.UNPACK_SKIP_ROWS),Js=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ct.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ct.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Fe),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re);const Et=M.isDataArrayTexture||M.isData3DTexture,In=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Hn=ge.get(M),cn=ge.get(O),mn=ge.get(Hn.__renderTarget),Xc=ge.get(cn.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,mn.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Xc.__webglFramebuffer);for(let ja=0;ja<Ee;ja++)Et&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ge.get(M).__webglTexture,P,Re+ja),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ge.get(O).__webglTexture,oe,Pt+ja)),U.blitFramebuffer(Fe,ze,fe,ve,et,st,fe,ve,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(P!==0||M.isRenderTargetTexture||ge.has(M)){const Hn=ge.get(M),cn=ge.get(O);Me.bindFramebuffer(U.READ_FRAMEBUFFER,SS),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,ES);for(let mn=0;mn<Ee;mn++)Et?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Hn.__webglTexture,P,Re+mn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Hn.__webglTexture,P),In?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cn.__webglTexture,oe,Pt+mn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cn.__webglTexture,oe),P!==0?U.blitFramebuffer(Fe,ze,fe,ve,et,st,fe,ve,U.COLOR_BUFFER_BIT,U.NEAREST):In?U.copyTexSubImage3D($t,oe,et,st,Pt+mn,Fe,ze,fe,ve):U.copyTexSubImage2D($t,oe,et,st,Fe,ze,fe,ve);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else In?M.isDataTexture||M.isData3DTexture?U.texSubImage3D($t,oe,et,st,Pt,fe,ve,Ee,it,we,Ct.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D($t,oe,et,st,Pt,fe,ve,Ee,it,Ct.data):U.texSubImage3D($t,oe,et,st,Pt,fe,ve,Ee,it,we,Ct):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,oe,et,st,fe,ve,it,we,Ct.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,oe,et,st,Ct.width,Ct.height,it,Ct.data):U.texSubImage2D(U.TEXTURE_2D,oe,et,st,fe,ve,it,we,Ct);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ei),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dr),U.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Js),oe===0&&O.generateMipmaps&&U.generateMipmap($t),Me.unbindTexture()},this.copyTextureToTexture3D=function(M,O,H=null,G=null,P=0){return Pu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,H,G,P)},this.initRenderTarget=function(M){ge.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,Me.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const hv={type:"change"},gm={type:"start"},pS={type:"end"},du=new Qy,dv=new ma,j2=Math.cos(70*w1.DEG2RAD),Ht=new B,gn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ah=1e-6;class Z2 extends cA{constructor(e,n=null){super(e,n),this.state=_t.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Er,this._lastTargetPosition=new B,this._quat=new Er().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hg,this._sphericalDelta=new Hg,this._scale=1,this._panOffset=new B,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new B,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q2.bind(this),this._onPointerDown=K2.bind(this),this._onPointerUp=J2.bind(this),this._onContextMenu=rD.bind(this),this._onMouseWheel=tD.bind(this),this._onKeyDown=nD.bind(this),this._onTouchStart=iD.bind(this),this._onTouchMove=aD.bind(this),this._onMouseDown=$2.bind(this),this._onMouseMove=eD.bind(this),this._interceptControlDown=sD.bind(this),this._interceptControlUp=oD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hv),this.update(),this.state=_t.NONE}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),a<-Math.PI?a+=gn:a>Math.PI&&(a-=gn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Ht.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),s=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(du.origin.copy(this.object.position),du.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(du.direction))<j2?this.object.lookAt(this.target):(dv.setFromNormalAndCoplanarPoint(this.object.up,this.target),du.intersectPlane(dv,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ah||this._lastTargetPosition.distanceToSquared(this.target)>ah?(this.dispatchEvent(hv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Ht.copy(a).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,r=n-i.top,s=i.width,o=i.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,a=e.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,a=e.pageY-n.y,r=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function K2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function Q2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function J2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pS),this.state=_t.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function $2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=_t.DOLLY;break;case Es.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}break;case Es.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(gm)}function eD(t){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function tD(t){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(t.preventDefault(),this.dispatchEvent(gm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(pS))}function nD(t){this.enabled!==!1&&this._handleKeyDown(t)}function iD(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=_t.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=_t.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(gm)}function aD(t){switch(this._trackPointer(t),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=_t.NONE}}function rD(t){this.enabled!==!1&&t.preventDefault()}function sD(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function oD(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Bu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Qs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lD=new oS(-1,1,1,-1,0,1);class uD extends ia{constructor(){super(),this.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kn([0,2,0,0,2,0],2))}}const cD=new uD;class vm{constructor(e){this._mesh=new oi(cD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fD extends Qs{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=rl.clone(e.uniforms),this.material=new un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vm(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class pv extends Qs{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const a=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),r.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(a.EQUAL,1,4294967295),r.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),r.buffers.stencil.setLocked(!0)}}class hD extends Qs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dD{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,n=new ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ji}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fD(Bu),this.copyPass.material.blending=qi,this.clock=new lS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let a=0,r=this.passes.length;a<r;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pv!==void 0&&(s instanceof pv?i=!0:s instanceof hD&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pD extends Qs{constructor(e,n,i=null,a=null,r=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new nt}render(e,n,i){const a=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const mD={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends Qs{constructor(e,n=1,i,a){super(),this.strength=n,this.radius=i,this.threshold=a,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new ci(r,s,{type:ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new ci(r,s,{type:ji});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new ci(r,s,{type:ji});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),s=Math.round(s/2)}const o=mD;this.highPassUniforms=rl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new un({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ce(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=rl.clone(Bu.uniforms),this.blendMaterial=new un({uniforms:this.copyUniforms,vertexShader:Bu.vertexShader,fragmentShader:Bu.fragmentShader,blending:ud,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new nt,this._oldClearAlpha=1,this._basic=new dm,this._fsQuad=new vm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(i,a);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,a),this.renderTargetsVertical[r].setSize(i,a),this.separableBlurMaterials[r].uniforms.invSize.value=new Ce(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(e,n,i,a,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new un({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new un({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gs.BlurDirectionX=new Ce(1,0);Gs.BlurDirectionY=new Ce(0,1);const pu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class _D extends Qs{constructor(){super(),this.uniforms=rl.clone(pu.uniforms),this.material=new sA({name:pu.name,uniforms:this.uniforms,vertexShader:pu.vertexShader,fragmentShader:pu.fragmentShader}),this._fsQuad=new vm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ly?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ny?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Py?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===By?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fy?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zy&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const gD=`
// Simplified noise function based on simplex noise
// Much more efficient than full Perlin noise implementation
uniform float u_time;

vec3 mod289(vec3 x)
    {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

vec4 mod289(vec4 x)
    {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

vec4 permute(vec4 x)
    {
        return mod289(((x*34.0)+10.0)*x);
    }

vec4 taylorInvSqrt(vec4 r)
    {
        return 1.79284291400159 - 0.85373472095314 * r;
    }

vec3 fade(vec3 t) {
        return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
    {
        vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
        vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
        Pi0 = mod289(Pi0);
        Pi1 = mod289(Pi1);
        vec3 Pf0 = fract(P); // Fractional part for interpolation
        vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;

        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);

        vec4 gx0 = ixy0 * (1.0 / 7.0);
        vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);

        vec4 gx1 = ixy1 * (1.0 / 7.0);
        vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);

        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x;
        g010 *= norm0.y;
        g100 *= norm0.z;
        g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x;
        g011 *= norm1.y;
        g101 *= norm1.z;
        g111 *= norm1.w;

        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);

        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xyz;
    }

// Uniforms
uniform float u_amplitude;
uniform float u_bass;
uniform float u_mid;
uniform float u_treble;
uniform float u_detail;

// Varying variables to pass to fragment shader
varying vec3 vNormal;

void main() {
  // Calculate noise based on position and time
  // Use u_detail to control level of detail (lower = better performance)
  float noise = 3.0 * pnoise(position + u_time, vec3(10.0));
  
  // Calculate displacement based on audio frequencies
  float bassDisplacement = u_bass * noise * 0.5;
  float midDisplacement = u_mid * noise * 0.3;
  float trebleDisplacement = u_treble * noise * 0.2;
  
  // Combine displacements with amplitude control
  float displacement = u_amplitude * (bassDisplacement + midDisplacement + trebleDisplacement) * (noise / 10.);
  
  // Apply displacement along normal direction
  vec3 newPosition = position + normal * displacement;
  
  // Pass normal to fragment shader
  vNormal = normal;
  
  // Set final position
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`,vD=`
// Color uniforms
uniform float u_red;
uniform float u_green;
uniform float u_blue;

// Varying variables received from vertex shader
varying vec3 vNormal;

void main() {
  // Apply color based on uniform values
  gl_FragColor = vec4(vec3(u_red, u_green, u_blue), 1.0);
}
`,mS=({audioData:t,isListening:e,options:n={}})=>{var k,z;const{initialQuality:i="medium",initialColors:a,initialBloom:r,showStats:s=!1,enableOrbitControls:o=!0,autoRotate:l=!1,showGui:u=!1,className:d=""}=n,f=te.useRef(null),h=te.useRef(null),p=te.useRef(null),x=te.useRef(null),y=te.useRef(null),m=te.useRef(null),c=te.useRef(null),_=te.useRef(null),g=te.useRef(null),v=te.useRef(null),R=te.useRef(0),C=te.useRef([]),[A,w]=te.useState({x:0,y:0}),[b,S]=te.useState(0),[D,X]=te.useState(i),V=te.useMemo(()=>{if(typeof window>"u")return{isMobile:!1,isLowEndDevice:!1,initialQuality:i};const $=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),re=$||(window.navigator.hardwareConcurrency||4)<=4;return{isMobile:$,isLowEndDevice:re,initialQuality:re?"low":i}},[i]);te.useEffect(()=>{X(V.initialQuality)},[V.initialQuality]);const J=$=>{switch($){case"low":return .8;case"high":return 2;default:return 1.2}},Y=te.useRef({u_time:{value:0},u_amplitude:{value:1.5},u_bass:{value:.5},u_mid:{value:.5},u_treble:{value:.5},u_red:{value:(a==null?void 0:a.red)??1},u_green:{value:(a==null?void 0:a.green)??1},u_blue:{value:(a==null?void 0:a.blue)??1},u_detail:{value:J(D)}}),L=te.useRef({threshold:(r==null?void 0:r.threshold)??.5,strength:(r==null?void 0:r.strength)??.3,radius:(r==null?void 0:r.radius)??.8});return te.useEffect(()=>{var dt,lt,Ge,U,Yt,We,Pe,Me;if(!f.current)return;Y.current.u_detail.value=J(D);const $=new iA;$.background=new nt(0),x.current=$;const re=new lS;m.current=re;const _e=new Yn(45,((dt=f.current)==null?void 0:dt.clientWidth)/((lt=f.current)==null?void 0:lt.clientHeight),.1,1e3);_e.position.set(0,-2,14),_e.lookAt(0,0,0),y.current=_e;try{const xe=new q2({antialias:!0,alpha:!0,powerPreference:"high-performance",precision:D==="low"?"mediump":"highp"});xe.setSize((Ge=f.current)==null?void 0:Ge.clientWidth,(U=f.current)==null?void 0:U.clientHeight);const ge=()=>{const T=window.devicePixelRatio||1;return V.isLowEndDevice?Math.min(T,1):D==="low"?Math.min(T,1.5):D==="medium"?Math.min(T,2):T};if(xe.setPixelRatio(ge()),xe.outputColorSpace=Un,f.current.firstChild&&f.current.removeChild(f.current.firstChild),f.current.appendChild(xe.domElement),h.current=xe,o){const T=new Z2(_e,xe.domElement);T.enableDamping=!0,T.dampingFactor=.05,T.enableZoom=!0,T.autoRotate=l,T.update()}}catch(xe){console.error("Error creating WebGL renderer:",xe)}const De=new un({vertexShader:gD,fragmentShader:vD,wireframe:!0,uniforms:Y.current}),q=(xe=>{switch(xe){case"low":return 20;case"high":return 40;default:return 30}})(D),ne=new mm(4,Math.min(q,30));ne.index&&(ne.index.needsUpdate=!0),ne.attributes.position.needsUpdate=!0,ne.attributes.normal.needsUpdate=!0;const ce=new oi(ne,De);$.add(ce),p.current=ce;const le=new pD(x.current,y.current),be=new Gs(new Ce((Yt=f.current)==null?void 0:Yt.clientWidth,(We=f.current)==null?void 0:We.clientHeight),L.current.strength,L.current.radius,L.current.threshold);_.current=be;const Qe=new _D;if(h.current){const xe=new dD(h.current);xe.addPass(le),xe.addPass(be),xe.addPass(Qe),xe.setSize((Pe=f.current)==null?void 0:Pe.clientWidth,(Me=f.current)==null?void 0:Me.clientHeight),c.current=xe}if(u){const xe=new YT;g.current=xe;const ge=xe.addFolder("Colors");ge.add(Y.current.u_red,"value",0,1).name("Red"),ge.add(Y.current.u_green,"value",0,1).name("Green"),ge.add(Y.current.u_blue,"value",0,1).name("Blue"),ge.open();const T=xe.addFolder("Bloom");T.add(L.current,"threshold",0,1).name("Threshold").onChange(F=>{_.current&&(_.current.threshold=F)}),T.add(L.current,"strength",0,3).name("Strength").onChange(F=>{_.current&&(_.current.strength=F)}),T.add(L.current,"radius",0,1).name("Radius").onChange(F=>{_.current&&(_.current.radius=F)}),T.open();const E=xe.addFolder("Settings");E.add({quality:D},"quality",["low","medium","high"]).name("Quality").onChange(F=>{X(F)}),E.open()}const Ae=()=>{if(!f.current||!h.current||!y.current)return;const xe=f.current.clientWidth,ge=f.current.clientHeight;y.current.aspect=xe/ge,y.current.updateProjectionMatrix(),h.current.setSize(xe,ge),c.current&&c.current.setSize(xe,ge)};return window.addEventListener("resize",Ae),()=>{window.removeEventListener("resize",Ae),v.current&&(cancelAnimationFrame(v.current),v.current=null),h.current&&f.current&&f.current.removeChild(h.current.domElement),p.current&&(p.current.geometry.dispose(),p.current.material.dispose()),g.current&&g.current.destroy()}},[(k=f.current)==null?void 0:k.clientWidth,(z=f.current)==null?void 0:z.clientHeight,D,V.isLowEndDevice,o,l,u,a,r]),te.useEffect(()=>{const $=re=>{const _e=window.innerWidth/2,De=window.innerHeight/2;w({x:(re.clientX-_e)/100,y:(re.clientY-De)/100})};return window.addEventListener("mousemove",$),()=>{window.removeEventListener("mousemove",$)}},[]),te.useEffect(()=>{if(!x.current||!y.current||!m.current||!h.current||!p.current)return;const _e=1e3/(qe=>{switch(qe){case"low":return 30;case"high":return 60;default:return 45}})(D),De=()=>{if(v.current=requestAnimationFrame(De),!y.current||!x.current||!m.current||!h.current||!Y.current||!p.current)return;const qe=performance.now(),q=qe-R.current;if(!(q<_e)){if(s){const ne=1e3/q;if(C.current.push(ne),C.current.length>30&&C.current.shift(),C.current.length%10===0){const ce=C.current.reduce((le,be)=>le+be,0)/C.current.length;S(Math.round(ce))}}y.current.position.x+=(A.x-y.current.position.x)*.05,y.current.position.y+=(-A.y-y.current.position.y)*.5,y.current.lookAt(x.current.position),Y.current.u_time.value=m.current.getElapsedTime();try{if(t&&e&&t.length>0)try{const ne=t.length,ce=Math.max(1,Math.floor(ne/64)),le=Math.floor(ne*.1);let be=0;for(let xe=0;xe<le;xe+=ce)be+=t[xe]||0;const Qe=be/Math.ceil(le/ce)||0,Ae=le,dt=Math.floor(ne*.5);let lt=0;for(let xe=Ae;xe<dt;xe+=ce)lt+=t[xe]||0;const Ge=lt/Math.ceil((dt-Ae)/ce)||0,U=dt;let Yt=0;for(let xe=U;xe<ne;xe+=ce)Yt+=t[xe]||0;const We=Yt/Math.ceil((ne-U)/ce)||0,Pe=.7;Y.current.u_bass.value=Y.current.u_bass.value*(1-Pe)+Qe/255*7.5*Pe,Y.current.u_mid.value=Y.current.u_mid.value*(1-Pe)+Ge/255*7.5*Pe,Y.current.u_treble.value=Y.current.u_treble.value*(1-Pe)+We/255*7.5*Pe;const Me=(Qe+Ge+We)/3;Y.current.u_amplitude.value=Y.current.u_amplitude.value*(1-Pe)+(.5+Me/255*7.5)*Pe}catch(ne){console.error("Error in animation loop:",ne);const ce=m.current.getElapsedTime();Y.current.u_amplitude.value=1+Math.sin(ce*.2)*.3}else Y.current.u_amplitude.value=0,Y.current.u_bass.value=0,Y.current.u_mid.value=0,Y.current.u_treble.value=0,p.current&&(p.current.rotation.y+=.001);if(p.current&&(p.current.rotation.y+=.001),c.current)try{c.current.render()}catch(ne){console.error("Error during composer render:",ne),h.current.render(x.current,y.current)}else h.current.render(x.current,y.current);R.current=qe}catch(ne){console.error("Error in animation loop:",ne)}}};return v.current=requestAnimationFrame(De),()=>{v.current&&(cancelAnimationFrame(v.current),v.current=null)}},[A,t,e,D,s]),ae.jsx("div",{ref:f,"aria-label":"3D Audio Visualizer",style:{width:"100%",height:"100%",overflow:"hidden",backgroundColor:"#000",position:"relative",...n==null?void 0:n.containerStyle},className:d,children:s&&ae.jsxs("div",{style:{position:"absolute",top:"8px",right:"8px",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",padding:"8px",borderRadius:"4px"},children:[ae.jsxs("p",{children:["FPS: ",b]}),ae.jsxs("p",{children:["Quality: ",D]})]})})},_S=()=>{const[t,e]=te.useState(!1),[n,i]=te.useState(()=>{const x=new Uint8Array(128);for(let y=0;y<x.length;y++)x[y]=Math.floor(40+20*Math.sin(y*.1));return x}),[a,r]=te.useState(null),s=te.useRef(null),o=te.useRef(null),l=te.useRef(null),u=te.useRef(null),d=te.useRef(null),f=te.useCallback(()=>{u.current&&(cancelAnimationFrame(u.current),u.current=null),l.current&&(l.current.getTracks().forEach(x=>x.stop()),l.current=null),s.current&&s.current.state!=="closed"&&(s.current.close().catch(console.error),s.current=null),o.current=null,d.current=null},[]);te.useEffect(()=>(typeof window<"u"&&(typeof window.AudioContext<"u"||typeof window.webkitAudioContext<"u")&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||r("Your browser does not support the required audio APIs"),f),[f]);const h=te.useCallback(async()=>{try{if(f(),r(null),typeof window>"u"||typeof window.AudioContext>"u"&&typeof window.webkitAudioContext>"u")throw new Error("Your browser does not support Web Audio API");if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Media Devices API not supported in this browser");const x=await navigator.mediaDevices.getUserMedia({audio:!0});l.current=x;const y=window.AudioContext||window.webkitAudioContext,m=new y;s.current=m,m.state==="suspended"&&await m.resume();const c=m.createAnalyser();c.fftSize=512,c.smoothingTimeConstant=.7,c.minDecibels=-90,c.maxDecibels=-10,o.current=c,m.createMediaStreamSource(x).connect(c);const g=new Uint8Array(c.frequencyBinCount);d.current=g,c.getByteFrequencyData(g),i(new Uint8Array(g));const v=()=>{if(!(!o.current||!d.current))try{o.current.getByteFrequencyData(d.current);const R=new Uint8Array(d.current);i(R),u.current=requestAnimationFrame(v)}catch(R){console.error("Error updating audio data:",R),u.current&&(cancelAnimationFrame(u.current),setTimeout(()=>{u.current=requestAnimationFrame(v)},100))}};u.current=requestAnimationFrame(v),e(!0)}catch(x){f();const y=x instanceof Error?x.message:"Failed to access microphone";r(y),console.error("Error accessing microphone:",x)}},[f]),p=te.useCallback(()=>{f(),e(!1);const x=new Uint8Array(128);for(let y=0;y<x.length;y++)x[y]=Math.floor(30+15*Math.sin(y*.1));i(x)},[f]);return{isListening:t,audioData:n,error:a,startListening:h,stopListening:p}},xD=()=>{const{isListening:t,audioData:e,error:n,startListening:i,stopListening:a}=_S(),[r,s]=te.useState(!1),o=()=>{t?a():(s(!1),i())};return ae.jsxs("div",{className:"h-screen flex flex-col items-center justify-center bg-black text-white relative",children:[ae.jsx("div",{className:"flex flex-1 w-full h-[70vh] relative mb-8 p-0",children:ae.jsx(mS,{audioData:e,isListening:t})}),ae.jsxs("div",{className:"text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md",children:[ae.jsx("button",{onClick:o,className:"px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors",children:t?"Stop Listening":"Start Listening"}),ae.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Note: This will request microphone access"})]}),r&&n&&ae.jsx("div",{className:"text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md",children:ae.jsx("p",{className:"text-sm text-red-500",children:n})})]})},yD=()=>{var x,y,m,c,_,g,v,R,C,A,w,b;const{isListening:t,audioData:e,error:n,startListening:i,stopListening:a}=_S(),[r,s]=te.useState(!1),[o,l]=te.useState({initialQuality:"medium",initialColors:{red:.8,green:.2,blue:.7},initialBloom:{threshold:.4,strength:.6,radius:.5},showStats:!0,enableOrbitControls:!0,autoRotate:!1,showGui:!0,className:"custom-visualizer"}),u=()=>{t?a():(s(!1),i())},d=S=>{l({...o,initialColors:{...o.initialColors||{red:1,green:1,blue:1},...S}})},f=S=>{l({...o,initialBloom:{...o.initialBloom||{threshold:.5,strength:.3,radius:.8},...S}})},h=S=>{l({...o,[S]:!o[S]})},p=S=>{l({...o,initialQuality:S})};return ae.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-900 text-white",children:[ae.jsx("div",{className:"flex-1 w-full h-[60vh]",children:ae.jsx(mS,{audioData:e,isListening:t,options:o})}),ae.jsx("div",{className:"p-6 bg-gray-800 border-t border-gray-700",children:ae.jsxs("div",{className:"max-w-6xl mx-auto",children:[ae.jsxs("div",{className:"flex flex-wrap justify-between items-center mb-6",children:[ae.jsx("h2",{className:"text-xl font-bold",children:"Visualizer Controls"}),ae.jsx("button",{onClick:u,className:`px-6 py-3 rounded-lg transition-colors ${t?"bg-red-600 hover:bg-red-700":"bg-green-600 hover:bg-green-700"}`,children:t?"Stop Listening":"Start Listening"})]}),r&&n&&ae.jsx("div",{className:"mb-4 p-4 bg-red-900/50 rounded-lg",children:ae.jsx("p",{className:"text-red-300",children:n})}),ae.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[ae.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[ae.jsx("h3",{className:"font-medium mb-3",children:"Quality"}),ae.jsx("div",{className:"flex space-x-2",children:["low","medium","high"].map(S=>ae.jsx("button",{onClick:()=>p(S),className:`px-3 py-1 rounded ${o.initialQuality===S?"bg-blue-600":"bg-gray-600 hover:bg-gray-500"}`,children:S.charAt(0).toUpperCase()+S.slice(1)},S))})]}),ae.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[ae.jsx("h3",{className:"font-medium mb-3",children:"Colors"}),ae.jsxs("div",{className:"space-y-2",children:[ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"w-10",children:"Red:"}),ae.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:((x=o.initialColors)==null?void 0:x.red)||1,onChange:S=>d({red:parseFloat(S.target.value)}),className:"flex-1 mx-2"}),ae.jsx("span",{className:"w-10 text-right",children:((y=o.initialColors)==null?void 0:y.red.toFixed(1))||"1.0"})]}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"w-10",children:"Green:"}),ae.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:((m=o.initialColors)==null?void 0:m.green)||1,onChange:S=>d({green:parseFloat(S.target.value)}),className:"flex-1 mx-2"}),ae.jsx("span",{className:"w-10 text-right",children:((c=o.initialColors)==null?void 0:c.green.toFixed(1))||"1.0"})]}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"w-10",children:"Blue:"}),ae.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:((_=o.initialColors)==null?void 0:_.blue)||1,onChange:S=>d({blue:parseFloat(S.target.value)}),className:"flex-1 mx-2"}),ae.jsx("span",{className:"w-10 text-right",children:((g=o.initialColors)==null?void 0:g.blue.toFixed(1))||"1.0"})]})]})]}),ae.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[ae.jsx("h3",{className:"font-medium mb-3",children:"Bloom Effect"}),ae.jsxs("div",{className:"space-y-2",children:[ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"w-20",children:"Threshold:"}),ae.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:((v=o.initialBloom)==null?void 0:v.threshold)||.5,onChange:S=>f({threshold:parseFloat(S.target.value)}),className:"flex-1 mx-2"}),ae.jsx("span",{className:"w-10 text-right",children:((R=o.initialBloom)==null?void 0:R.threshold.toFixed(1))||"0.5"})]}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"w-20",children:"Strength:"}),ae.jsx("input",{type:"range",min:"0",max:"3",step:"0.1",value:((C=o.initialBloom)==null?void 0:C.strength)||.3,onChange:S=>f({strength:parseFloat(S.target.value)}),className:"flex-1 mx-2"}),ae.jsx("span",{className:"w-10 text-right",children:((A=o.initialBloom)==null?void 0:A.strength.toFixed(1))||"0.3"})]}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx("span",{className:"w-20",children:"Radius:"}),ae.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:((w=o.initialBloom)==null?void 0:w.radius)||.8,onChange:S=>f({radius:parseFloat(S.target.value)}),className:"flex-1 mx-2"}),ae.jsx("span",{className:"w-10 text-right",children:((b=o.initialBloom)==null?void 0:b.radius.toFixed(1))||"0.8"})]})]})]}),ae.jsxs("div",{className:"p-4 bg-gray-700 rounded-lg",children:[ae.jsx("h3",{className:"font-medium mb-3",children:"Options"}),ae.jsxs("div",{className:"space-y-2",children:[ae.jsxs("label",{className:"flex items-center cursor-pointer",children:[ae.jsx("input",{type:"checkbox",checked:o.showStats||!1,onChange:()=>h("showStats"),className:"mr-2"}),ae.jsx("span",{children:"Show Stats"})]}),ae.jsxs("label",{className:"flex items-center cursor-pointer",children:[ae.jsx("input",{type:"checkbox",checked:o.enableOrbitControls||!1,onChange:()=>h("enableOrbitControls"),className:"mr-2"}),ae.jsx("span",{children:"Orbit Controls"})]}),ae.jsxs("label",{className:"flex items-center cursor-pointer",children:[ae.jsx("input",{type:"checkbox",checked:o.autoRotate||!1,onChange:()=>h("autoRotate"),className:"mr-2"}),ae.jsx("span",{children:"Auto Rotate"})]}),ae.jsxs("label",{className:"flex items-center cursor-pointer",children:[ae.jsx("input",{type:"checkbox",checked:o.showGui||!1,onChange:()=>h("showGui"),className:"mr-2"}),ae.jsx("span",{children:"Show GUI"})]})]})]})]})]})})]})},SD=()=>{const[t,e]=te.useState("basic");return ae.jsx(yT,{children:ae.jsxs("div",{className:"app-container",children:[ae.jsxs("header",{children:[ae.jsx("h1",{children:"React 3D Audio Visualizer"}),ae.jsx("p",{className:"subtitle",children:"A stunning 3D audio visualizer component for React applications"}),ae.jsx("nav",{children:ae.jsx("ul",{className:"nav-links",children:ae.jsx("li",{children:ae.jsx(MT,{to:"/basic",className:t==="basic"?"active":"",onClick:()=>e("basic"),children:"Basic Example"})})})})]}),ae.jsx("main",{children:ae.jsxs(dT,{children:[ae.jsx(Cu,{path:"/",element:ae.jsx(fT,{to:"/basic",replace:!0})}),ae.jsx(Cu,{path:"/basic",element:ae.jsx(xD,{})}),ae.jsx(Cu,{path:"/advanced",element:ae.jsx(yD,{})})]})}),ae.jsx("footer",{children:ae.jsxs("div",{className:"footer-content",children:[ae.jsxs("p",{children:["© ",new Date().getFullYear()," Ampcome"]}),ae.jsx("p",{children:ae.jsx("a",{href:"https://github.com/Ampcome/audio-visualizer",target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"})})]})})]})})};Sb.createRoot(document.getElementById("root")).render(ae.jsx(Tv.StrictMode,{children:ae.jsx(SD,{})}));
