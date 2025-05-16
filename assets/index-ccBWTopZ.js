function MS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const s=Object.getOwnPropertyDescriptor(i,a);s&&Object.defineProperty(t,a,s.get?s:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _v={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TS=Symbol.for("react.transitional.element"),AS=Symbol.for("react.fragment");function gv(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:TS,type:t,key:i,ref:e!==void 0?e:null,props:n}}yu.Fragment=AS;yu.jsx=gv;yu.jsxs=gv;_v.exports=yu;var p=_v.exports,vv={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd=Symbol.for("react.transitional.element"),RS=Symbol.for("react.portal"),wS=Symbol.for("react.fragment"),CS=Symbol.for("react.strict_mode"),NS=Symbol.for("react.profiler"),DS=Symbol.for("react.consumer"),US=Symbol.for("react.context"),LS=Symbol.for("react.forward_ref"),FS=Symbol.for("react.suspense"),OS=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),Am=Symbol.iterator;function PS(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var yv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sv=Object.assign,Ev={};function jr(t,e,n){this.props=t,this.context=e,this.refs=Ev,this.updater=n||yv}jr.prototype.isReactComponent={};jr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};jr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function bv(){}bv.prototype=jr.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Ev,this.updater=n||yv}var ep=$d.prototype=new bv;ep.constructor=$d;Sv(ep,jr.prototype);ep.isPureReactComponent=!0;var Rm=Array.isArray,Mt={H:null,A:null,T:null,S:null,V:null},Mv=Object.prototype.hasOwnProperty;function tp(t,e,n,i,a,s){return n=s.ref,{$$typeof:Jd,type:t,key:e,ref:n!==void 0?n:null,props:s}}function zS(t,e){return tp(t.type,e,void 0,void 0,void 0,t.props)}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jd}function BS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wm=/\/+/g;function Wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BS(""+t.key):e.toString(36)}function Cm(){}function IS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Cm,Cm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function qs(t,e,n,i,a){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Jd:case RS:r=!0;break;case xv:return r=t._init,qs(r(t._payload),e,n,i,a)}}if(r)return a=a(t),r=i===""?"."+Wu(t,0):i,Rm(a)?(n="",r!=null&&(n=r.replace(wm,"$&/")+"/"),qs(a,e,n,"",function(c){return c})):a!=null&&(np(a)&&(a=zS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(wm,"$&/")+"/")+r)),e.push(a)),1;r=0;var o=i===""?".":i+":";if(Rm(t))for(var l=0;l<t.length;l++)i=t[l],s=o+Wu(i,l),r+=qs(i,e,n,s,a);else if(l=PS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,s=o+Wu(i,l++),r+=qs(i,e,n,s,a);else if(s==="object"){if(typeof t.then=="function")return qs(IS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function wl(t,e,n){if(t==null)return t;var i=[],a=0;return qs(t,i,"","",function(s){return e.call(n,s,a++)}),i}function HS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nm=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function VS(){}ke.Children={map:wl,forEach:function(t,e,n){wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wl(t,function(){e++}),e},toArray:function(t){return wl(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=jr;ke.Fragment=wS;ke.Profiler=NS;ke.PureComponent=$d;ke.StrictMode=CS;ke.Suspense=FS;ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt;ke.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Mt.H.useMemoCache(t)}};ke.cache=function(t){return function(){return t.apply(null,arguments)}};ke.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Sv({},t.props),a=t.key,s=void 0;if(e!=null)for(r in e.ref!==void 0&&(s=void 0),e.key!==void 0&&(a=""+e.key),e)!Mv.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}return tp(t.type,a,void 0,void 0,s,i)};ke.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:DS,_context:t},t};ke.createElement=function(t,e,n){var i,a={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)Mv.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in r=t.defaultProps,r)a[i]===void 0&&(a[i]=r[i]);return tp(t,s,void 0,void 0,null,a)};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:LS,render:t}};ke.isValidElement=np;ke.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:HS}};ke.memo=function(t,e){return{$$typeof:OS,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=Mt.T,n={};Mt.T=n;try{var i=t(),a=Mt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(VS,Nm)}catch(s){Nm(s)}finally{Mt.T=e}};ke.unstable_useCacheRefresh=function(){return Mt.H.useCacheRefresh()};ke.use=function(t){return Mt.H.use(t)};ke.useActionState=function(t,e,n){return Mt.H.useActionState(t,e,n)};ke.useCallback=function(t,e){return Mt.H.useCallback(t,e)};ke.useContext=function(t){return Mt.H.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t,e){return Mt.H.useDeferredValue(t,e)};ke.useEffect=function(t,e,n){var i=Mt.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(t,e)};ke.useId=function(){return Mt.H.useId()};ke.useImperativeHandle=function(t,e,n){return Mt.H.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return Mt.H.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return Mt.H.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return Mt.H.useMemo(t,e)};ke.useOptimistic=function(t,e){return Mt.H.useOptimistic(t,e)};ke.useReducer=function(t,e,n){return Mt.H.useReducer(t,e,n)};ke.useRef=function(t){return Mt.H.useRef(t)};ke.useState=function(t){return Mt.H.useState(t)};ke.useSyncExternalStore=function(t,e,n){return Mt.H.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return Mt.H.useTransition()};ke.version="19.1.0";vv.exports=ke;var $=vv.exports;const Tv=mv($),GS=MS({__proto__:null,default:Tv},[$]);var Av={exports:{}},Su={},Rv={exports:{}},wv={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,k){var z=L.length;L.push(k);e:for(;0<z;){var ae=z-1>>>1,ce=L[ae];if(0<a(ce,k))L[ae]=k,L[z]=ce,z=ae;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],z=L.pop();if(z!==k){L[0]=z;e:for(var ae=0,ce=L.length,Ee=ce>>>1;ae<Ee;){var ve=2*(ae+1)-1,We=L[ve],q=ve+1,oe=L[q];if(0>a(We,z))q<ce&&0>a(oe,We)?(L[ae]=oe,L[q]=z,ae=q):(L[ae]=We,L[ve]=z,ae=ve);else if(q<ce&&0>a(oe,z))L[ae]=oe,L[q]=z,ae=q;else break e}}return k}function a(L,k){var z=L.sortIndex-k.sortIndex;return z!==0?z:L.id-k.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var r=Date,o=r.now();t.unstable_now=function(){return r.now()-o}}var l=[],c=[],d=1,f=null,h=3,m=!1,y=!1,S=!1,_=!1,u=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;function x(L){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=L)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function R(L){if(S=!1,x(L),!y)if(n(l)!==null)y=!0,C||(C=!0,W());else{var k=n(c);k!==null&&ne(R,k.startTime-L)}}var C=!1,A=-1,N=5,T=-1;function E(){return _?!0:!(t.unstable_now()-T<N)}function U(){if(_=!1,C){var L=t.unstable_now();T=L;var k=!0;try{e:{y=!1,S&&(S=!1,g(A),A=-1),m=!0;var z=h;try{t:{for(x(L),f=n(l);f!==null&&!(f.expirationTime>L&&E());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,h=f.priorityLevel;var ce=ae(f.expirationTime<=L);if(L=t.unstable_now(),typeof ce=="function"){f.callback=ce,x(L),k=!0;break t}f===n(l)&&i(l),x(L)}else i(l);f=n(l)}if(f!==null)k=!0;else{var Ee=n(c);Ee!==null&&ne(R,Ee.startTime-L),k=!1}}break e}finally{f=null,h=z,m=!1}k=void 0}}finally{k?W():C=!1}}}var W;if(typeof v=="function")W=function(){v(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,te=X.port2;X.port1.onmessage=U,W=function(){te.postMessage(null)}}else W=function(){u(U,0)};function ne(L,k){A=u(function(){L(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var z=h;h=k;try{return L()}finally{h=z}},t.unstable_requestPaint=function(){_=!0},t.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=h;h=L;try{return k()}finally{h=z}},t.unstable_scheduleCallback=function(L,k,z){var ae=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ae+z:ae):z=ae,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=z+ce,L={id:d++,callback:k,priorityLevel:L,startTime:z,expirationTime:ce,sortIndex:-1},z>ae?(L.sortIndex=z,e(c,L),n(l)===null&&L===n(c)&&(S?(g(A),A=-1):S=!0,ne(R,z-ae))):(L.sortIndex=ce,e(l,L),y||m||(y=!0,C||(C=!0,W()))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var k=h;return function(){var z=h;h=k;try{return L.apply(this,arguments)}finally{h=z}}}})(wv);Rv.exports=wv;var jS=Rv.exports,Cv={exports:{}},pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=$;function Nv(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function aa(){}var dn={d:{f:aa,r:function(){throw Error(Nv(522))},D:aa,C:aa,L:aa,m:aa,X:aa,S:aa,M:aa},p:0,findDOMNode:null},XS=Symbol.for("react.portal");function WS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:XS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var So=kS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Eu(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dn;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Nv(299));return WS(t,e,null,n)};pn.flushSync=function(t){var e=So.T,n=dn.p;try{if(So.T=null,dn.p=2,t)return t()}finally{So.T=e,dn.p=n,dn.d.f()}};pn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,dn.d.C(t,e))};pn.prefetchDNS=function(t){typeof t=="string"&&dn.d.D(t)};pn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Eu(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?dn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:s}):n==="script"&&dn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};pn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Eu(e.as,e.crossOrigin);dn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&dn.d.M(t)};pn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Eu(n,e.crossOrigin);dn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};pn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Eu(e.as,e.crossOrigin);dn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else dn.d.m(t)};pn.requestFormReset=function(t){dn.d.r(t)};pn.unstable_batchedUpdates=function(t,e){return t(e)};pn.useFormState=function(t,e,n){return So.H.useFormState(t,e,n)};pn.useFormStatus=function(){return So.H.useHostTransitionStatus()};pn.version="19.1.0";function Dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv)}catch(t){console.error(t)}}Dv(),Cv.exports=pn;var YS=Cv.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jt=jS,Uv=$,qS=YS;function J(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Lv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dm(t){if(rl(t)!==t)throw Error(J(188))}function ZS(t){var e=t.alternate;if(!e){if(e=rl(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Dm(a),t;if(s===i)return Dm(a),e;s=s.sibling}throw Error(J(188))}if(n.return!==i.return)n=a,i=s;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function Ov(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ov(t),e!==null)return e;t=t.sibling}return null}var yt=Object.assign,KS=Symbol.for("react.element"),Cl=Symbol.for("react.transitional.element"),mo=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),QS=Symbol.for("react.provider"),zv=Symbol.for("react.consumer"),Bi=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),lh=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),da=Symbol.for("react.lazy"),ch=Symbol.for("react.activity"),JS=Symbol.for("react.memo_cache_sentinel"),Um=Symbol.iterator;function $r(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var $S=Symbol.for("react.client.reference");function uh(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$S?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case er:return"Fragment";case rh:return"Profiler";case Pv:return"StrictMode";case oh:return"Suspense";case lh:return"SuspenseList";case ch:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case mo:return"Portal";case Bi:return(t.displayName||"Context")+".Provider";case zv:return(t._context.displayName||"Context")+".Consumer";case ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ap:return e=t.displayName||null,e!==null?e:uh(t.type)||"Memo";case da:e=t._payload,t=t._init;try{return uh(t(e))}catch{}}return null}var _o=Array.isArray,Ue=Uv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt=qS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,cs={pending:!1,data:null,method:null,action:null},fh=[],tr=-1;function Mi(t){return{current:t}}function Qt(t){0>tr||(t.current=fh[tr],fh[tr]=null,tr--)}function Tt(t,e){tr++,fh[tr]=t.current,t.current=e}var yi=Mi(null),Bo=Mi(null),Aa=Mi(null),Bc=Mi(null);function Ic(t,e){switch(Tt(Aa,e),Tt(Bo,t),Tt(yi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?z_(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=z_(e),t=ey(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Qt(yi),Tt(yi,t)}function Ar(){Qt(yi),Qt(Bo),Qt(Aa)}function hh(t){t.memoizedState!==null&&Tt(Bc,t);var e=yi.current,n=ey(e,t.type);e!==n&&(Tt(Bo,t),Tt(yi,n))}function Hc(t){Bo.current===t&&(Qt(yi),Qt(Bo)),Bc.current===t&&(Qt(Bc),qo._currentValue=cs)}var dh=Object.prototype.hasOwnProperty,sp=jt.unstable_scheduleCallback,Yu=jt.unstable_cancelCallback,eE=jt.unstable_shouldYield,tE=jt.unstable_requestPaint,Si=jt.unstable_now,nE=jt.unstable_getCurrentPriorityLevel,Bv=jt.unstable_ImmediatePriority,Iv=jt.unstable_UserBlockingPriority,Vc=jt.unstable_NormalPriority,iE=jt.unstable_LowPriority,Hv=jt.unstable_IdlePriority,aE=jt.log,sE=jt.unstable_setDisableYieldValue,ol=null,Ln=null;function Sa(t){if(typeof aE=="function"&&sE(t),Ln&&typeof Ln.setStrictMode=="function")try{Ln.setStrictMode(ol,t)}catch{}}var Fn=Math.clz32?Math.clz32:lE,rE=Math.log,oE=Math.LN2;function lE(t){return t>>>=0,t===0?32:31-(rE(t)/oE|0)|0}var Nl=256,Dl=4194304;function ts(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function bu(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?a=ts(i):(r&=o,r!==0?a=ts(r):n||(n=o&~t,n!==0&&(a=ts(n))))):(o=i&~s,o!==0?a=ts(o):r!==0?a=ts(r):n||(n=i&~t,n!==0&&(a=ts(n)))),a===0?0:e!==0&&e!==a&&!(e&s)&&(s=a&-a,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:a}function ll(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function cE(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(){var t=Nl;return Nl<<=1,!(Nl&4194048)&&(Nl=256),t}function Gv(){var t=Dl;return Dl<<=1,!(Dl&62914560)&&(Dl=4194304),t}function qu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function uE(t,e,n,i,a,s){var r=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=r&~n;0<n;){var d=31-Fn(n),f=1<<d;o[d]=0,l[d]=-1;var h=c[d];if(h!==null)for(c[d]=null,d=0;d<h.length;d++){var m=h[d];m!==null&&(m.lane&=-536870913)}n&=~f}i!==0&&jv(t,i,0),s!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function jv(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Fn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&4194090}function kv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function rp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function op(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Xv(){var t=rt.p;return t!==0?t:(t=window.event,t===void 0?32:uy(t.type))}function fE(t,e){var n=rt.p;try{return rt.p=t,e()}finally{rt.p=n}}var Ga=Math.random().toString(36).slice(2),on="__reactFiber$"+Ga,bn="__reactProps$"+Ga,kr="__reactContainer$"+Ga,ph="__reactEvents$"+Ga,hE="__reactListeners$"+Ga,dE="__reactHandles$"+Ga,Lm="__reactResources$"+Ga,ul="__reactMarker$"+Ga;function lp(t){delete t[on],delete t[bn],delete t[ph],delete t[hE],delete t[dE]}function nr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kr]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H_(t);t!==null;){if(n=t[on])return n;t=H_(t)}return e}t=n,n=t.parentNode}return null}function Xr(t){if(t=t[on]||t[kr]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function go(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(J(33))}function mr(t){var e=t[Lm];return e||(e=t[Lm]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Zt(t){t[ul]=!0}var Wv=new Set,Yv={};function Es(t,e){Rr(t,e),Rr(t+"Capture",e)}function Rr(t,e){for(Yv[t]=e,t=0;t<e.length;t++)Wv.add(e[t])}var pE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fm={},Om={};function mE(t){return dh.call(Om,t)?!0:dh.call(Fm,t)?!1:pE.test(t)?Om[t]=!0:(Fm[t]=!0,!1)}function mc(t,e,n){if(mE(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Ul(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ri(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}var Zu,Pm;function Zs(t){if(Zu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zu=e&&e[1]||"",Pm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zu+t+Pm}var Ku=!1;function Qu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(m){var h=m}Reflect.construct(t,[],f)}else{try{f.call()}catch(m){h=m}t.call(f.prototype)}}else{try{throw Error()}catch(m){h=m}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(m){if(m&&h&&typeof m.stack=="string")return[m.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Zs(n):""}function _E(t){switch(t.tag){case 26:case 27:case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 15:return Qu(t.type,!1);case 11:return Qu(t.type.render,!1);case 1:return Qu(t.type,!0);case 31:return Zs("Activity");default:return""}}function zm(t){try{var e="";do e+=_E(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gE(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(r){i=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Gc(t){t._valueTracker||(t._valueTracker=gE(t))}function Zv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var vE=/[\n"\\]/g;function Yn(t){return t.replace(vE,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function mh(t,e,n,i,a,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+jn(e)):t.value!==""+jn(e)&&(t.value=""+jn(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?_h(t,r,jn(e)):n!=null?_h(t,r,jn(n)):i!=null&&t.removeAttribute("value"),a==null&&s!=null&&(t.defaultChecked=!!s),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+jn(o):t.removeAttribute("name")}function Kv(t,e,n,i,a,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null))return;n=n!=null?""+jn(n):"",e=e!=null?""+jn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r)}function _h(t,e,n){e==="number"&&jc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function _r(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function Qv(t,e,n){if(e!=null&&(e=""+jn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+jn(n):""}function Jv(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(J(92));if(_o(i)){if(1<i.length)throw Error(J(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=jn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i)}function wr(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bm(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||xE.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function $v(t,e,n){if(e!=null&&typeof e!="object")throw Error(J(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&Bm(t,a,i)}else for(var s in e)e.hasOwnProperty(s)&&Bm(t,s,e[s])}function cp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _c(t){return SE.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var gh=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,gr=null;function Im(t){var e=Xr(t);if(e&&(t=e.stateNode)){var n=t[bn]||null;e:switch(t=e.stateNode,e.type){case"input":if(mh(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[bn]||null;if(!a)throw Error(J(90));mh(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Zv(i)}break e;case"textarea":Qv(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&_r(t,!!n.multiple,e,!1)}}}var Ju=!1;function e0(t,e,n){if(Ju)return t(e,n);Ju=!0;try{var i=t(e);return i}finally{if(Ju=!1,(ir!==null||gr!==null)&&(Lu(),ir&&(e=ir,t=gr,gr=ir=null,Im(e),t)))for(e=0;e<t.length;e++)Im(t[e])}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var i=n[bn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=!1;if(Ki)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){vh=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{vh=!1}var Ea=null,fp=null,gc=null;function t0(){if(gc)return gc;var t,e=fp,n=e.length,i,a="value"in Ea?Ea.value:Ea.textContent,s=a.length;for(t=0;t<n&&e[t]===a[t];t++);var r=n-t;for(i=1;i<=r&&e[n-i]===a[s-i];i++);return gc=a.slice(t,1<i?1-i:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ll(){return!0}function Hm(){return!1}function Mn(t){function e(n,i,a,s,r){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ll:Hm,this.isPropagationStopped=Hm,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Mn(bs),fl=yt({},bs,{view:0,detail:0}),EE=Mn(fl),$u,ef,to,Tu=yt({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?($u=t.screenX-to.screenX,ef=t.screenY-to.screenY):ef=$u=0,to=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:ef}}),Vm=Mn(Tu),bE=yt({},Tu,{dataTransfer:0}),ME=Mn(bE),TE=yt({},fl,{relatedTarget:0}),tf=Mn(TE),AE=yt({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),RE=Mn(AE),wE=yt({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),CE=Mn(wE),NE=yt({},bs,{data:0}),Gm=Mn(NE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=LE[t])?!!e[t]:!1}function hp(){return FE}var OE=yt({},fl,{key:function(t){if(t.key){var e=DE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PE=Mn(OE),zE=yt({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=Mn(zE),BE=yt({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),IE=Mn(BE),HE=yt({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),VE=Mn(HE),GE=yt({},Tu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=Mn(GE),kE=yt({},bs,{newState:0,oldState:0}),XE=Mn(kE),WE=[9,13,27,32],dp=Ki&&"CompositionEvent"in window,Eo=null;Ki&&"documentMode"in document&&(Eo=document.documentMode);var YE=Ki&&"TextEvent"in window&&!Eo,n0=Ki&&(!dp||Eo&&8<Eo&&11>=Eo),km=" ",Xm=!1;function i0(t,e){switch(t){case"keyup":return WE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function a0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function qE(t,e){switch(t){case"compositionend":return a0(e);case"keypress":return e.which!==32?null:(Xm=!0,km);case"textInput":return t=e.data,t===km&&Xm?null:t;default:return null}}function ZE(t,e){if(ar)return t==="compositionend"||!dp&&i0(t,e)?(t=t0(),gc=fp=Ea=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var KE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KE[t.type]:e==="textarea"}function s0(t,e,n,i){ir?gr?gr.push(i):gr=[i]:ir=i,e=ou(e,"onChange"),0<e.length&&(n=new Mu("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var bo=null,Ho=null;function QE(t){Qx(t,0)}function Au(t){var e=go(t);if(Zv(e))return t}function Ym(t,e){if(t==="change")return e}var r0=!1;if(Ki){var nf;if(Ki){var af="oninput"in document;if(!af){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),af=typeof qm.oninput=="function"}nf=af}else nf=!1;r0=nf&&(!document.documentMode||9<document.documentMode)}function Zm(){bo&&(bo.detachEvent("onpropertychange",o0),Ho=bo=null)}function o0(t){if(t.propertyName==="value"&&Au(Ho)){var e=[];s0(e,Ho,t,up(t)),e0(QE,e)}}function JE(t,e,n){t==="focusin"?(Zm(),bo=e,Ho=n,bo.attachEvent("onpropertychange",o0)):t==="focusout"&&Zm()}function $E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Au(Ho)}function eb(t,e){if(t==="click")return Au(e)}function tb(t,e){if(t==="input"||t==="change")return Au(e)}function nb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:nb;function Vo(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!dh.call(e,a)||!Bn(t[a],e[a]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qm(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=jc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jc(t.document)}return e}function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ib=Ki&&"documentMode"in document&&11>=document.documentMode,sr=null,xh=null,Mo=null,yh=!1;function Jm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yh||sr==null||sr!==jc(i)||(i=sr,"selectionStart"in i&&pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mo&&Vo(Mo,i)||(Mo=i,i=ou(xh,"onSelect"),0<i.length&&(e=new Mu("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=sr)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},sf={},u0={};Ki&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Ms(t){if(sf[t])return sf[t];if(!rr[t])return t;var e=rr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u0)return sf[t]=e[n];return t}var f0=Ms("animationend"),h0=Ms("animationiteration"),d0=Ms("animationstart"),ab=Ms("transitionrun"),sb=Ms("transitionstart"),rb=Ms("transitioncancel"),p0=Ms("transitionend"),m0=new Map,Sh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sh.push("scrollEnd");function fi(t,e){m0.set(t,e),Es(e,[t])}var $m=new WeakMap;function qn(t,e){if(typeof t=="object"&&t!==null){var n=$m.get(t);return n!==void 0?n:(e={value:t,source:e,stack:zm(e)},$m.set(t,e),e)}return{value:t,source:e,stack:zm(e)}}var Gn=[],or=0,mp=0;function Ru(){for(var t=or,e=mp=or=0;e<t;){var n=Gn[e];Gn[e++]=null;var i=Gn[e];Gn[e++]=null;var a=Gn[e];Gn[e++]=null;var s=Gn[e];if(Gn[e++]=null,i!==null&&a!==null){var r=i.pending;r===null?a.next=a:(a.next=r.next,r.next=a),i.pending=a}s!==0&&_0(n,a,s)}}function wu(t,e,n,i){Gn[or++]=t,Gn[or++]=e,Gn[or++]=n,Gn[or++]=i,mp|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function _p(t,e,n,i){return wu(t,e,n,i),kc(t)}function Wr(t,e){return wu(t,null,null,e),kc(t)}function _0(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(a=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,a&&e!==null&&(a=31-Fn(n),t=s.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),s):null}function kc(t){if(50<Fo)throw Fo=0,Gh=null,Error(J(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var lr={};function ob(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new ob(t,e,n,i)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function g0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function xc(t,e,n,i,a,s){var r=0;if(i=t,typeof t=="function")gp(t)&&(r=1);else if(typeof t=="string")r=cM(t,n,yi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case ch:return t=Un(31,n,e,a),t.elementType=ch,t.lanes=s,t;case er:return us(n.children,a,s,e);case Pv:r=8,a|=24;break;case rh:return t=Un(12,n,e,a|2),t.elementType=rh,t.lanes=s,t;case oh:return t=Un(13,n,e,a),t.elementType=oh,t.lanes=s,t;case lh:return t=Un(19,n,e,a),t.elementType=lh,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case QS:case Bi:r=10;break e;case zv:r=9;break e;case ip:r=11;break e;case ap:r=14;break e;case da:r=16,i=null;break e}r=29,n=Error(J(130,t===null?"null":typeof t,"")),i=null}return e=Un(r,n,e,a),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function rf(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function of(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var cr=[],ur=0,Xc=null,Wc=0,kn=[],Xn=0,fs=null,Ii=1,Hi="";function ns(t,e){cr[ur++]=Wc,cr[ur++]=Xc,Xc=t,Wc=e}function v0(t,e,n){kn[Xn++]=Ii,kn[Xn++]=Hi,kn[Xn++]=fs,fs=t;var i=Ii;t=Hi;var a=32-Fn(i)-1;i&=~(1<<a),n+=1;var s=32-Fn(e)+a;if(30<s){var r=a-a%5;s=(i&(1<<r)-1).toString(32),i>>=r,a-=r,Ii=1<<32-Fn(e)+a|n<<a|i,Hi=s+t}else Ii=1<<s|n<<a|i,Hi=t}function vp(t){t.return!==null&&(ns(t,1),v0(t,1,0))}function xp(t){for(;t===Xc;)Xc=cr[--ur],cr[ur]=null,Wc=cr[--ur],cr[ur]=null;for(;t===fs;)fs=kn[--Xn],kn[Xn]=null,Hi=kn[--Xn],kn[Xn]=null,Ii=kn[--Xn],kn[Xn]=null}var hn=null,Ct=null,st=!1,hs=null,gi=!1,Eh=Error(J(519));function _s(t){var e=Error(J(418,""));throw Go(qn(e,t)),Eh}function e_(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[on]=t,e[bn]=i,n){case"dialog":Ze("cancel",e),Ze("close",e);break;case"iframe":case"object":case"embed":Ze("load",e);break;case"video":case"audio":for(n=0;n<Xo.length;n++)Ze(Xo[n],e);break;case"source":Ze("error",e);break;case"img":case"image":case"link":Ze("error",e),Ze("load",e);break;case"details":Ze("toggle",e);break;case"input":Ze("invalid",e),Kv(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Gc(e);break;case"select":Ze("invalid",e);break;case"textarea":Ze("invalid",e),Jv(e,i.value,i.defaultValue,i.children),Gc(e)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||$x(e.textContent,n)?(i.popover!=null&&(Ze("beforetoggle",e),Ze("toggle",e)),i.onScroll!=null&&Ze("scroll",e),i.onScrollEnd!=null&&Ze("scrollend",e),i.onClick!=null&&(e.onclick=Pu),e=!0):e=!1,e||_s(t)}function t_(t){for(hn=t.return;hn;)switch(hn.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:hn=hn.return}}function no(t){if(t!==hn)return!1;if(!st)return t_(t),st=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||qh(t.type,t.memoizedProps)),n=!n),n&&Ct&&_s(t),t_(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Ct=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Ct=null}}else e===27?(e=Ct,ja(t.type)?(t=Qh,Qh=null,Ct=t):Ct=e):Ct=hn?li(t.stateNode.nextSibling):null;return!0}function hl(){Ct=hn=null,st=!1}function n_(){var t=hs;return t!==null&&(yn===null?yn=t:yn.push.apply(yn,t),hs=null),t}function Go(t){hs===null?hs=[t]:hs.push(t)}var bh=Mi(null),Ts=null,Vi=null;function _a(t,e,n){Tt(bh,e._currentValue),e._currentValue=n}function Wi(t){t._currentValue=bh.current,Qt(bh)}function Mh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Th(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){var r=a.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Mh(s.return,n,t),i||(r=null);break e}s=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(J(341));r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),Mh(r,n,t),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===t){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function dl(t,e,n,i){t=null;for(var a=e,s=!1;a!==null;){if(!s){if(a.flags&524288)s=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(J(387));if(r=r.memoizedProps,r!==null){var o=a.type;Bn(a.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(a===Bc.current){if(r=a.alternate,r===null)throw Error(J(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(qo):t=[qo])}a=a.return}t!==null&&Th(e,t,n,i),e.flags|=262144}function Yc(t){for(t=t.firstContext;t!==null;){if(!Bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function gs(t){Ts=t,Vi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ln(t){return x0(Ts,t)}function Fl(t,e){return Ts===null&&gs(t),x0(t,e)}function x0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Vi===null){if(t===null)throw Error(J(308));Vi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Vi=Vi.next=e;return n}var lb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},cb=jt.unstable_scheduleCallback,ub=jt.unstable_NormalPriority,Vt={$$typeof:Bi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yp(){return{controller:new lb,data:new Map,refCount:0}}function pl(t){t.refCount--,t.refCount===0&&cb(ub,function(){t.controller.abort()})}var To=null,Ah=0,Cr=0,vr=null;function fb(t,e){if(To===null){var n=To=[];Ah=0,Cr=jp(),vr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Ah++,e.then(i_,i_),e}function i_(){if(--Ah===0&&To!==null){vr!==null&&(vr.status="fulfilled");var t=To;To=null,Cr=0,vr=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function hb(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var a_=Ue.S;Ue.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&fb(t,e),a_!==null&&a_(t,e)};var ds=Mi(null);function Sp(){var t=ds.current;return t!==null?t:xt.pooledCache}function yc(t,e){e===null?Tt(ds,ds.current):Tt(ds,e.pool)}function y0(){var t=Sp();return t===null?null:{parent:Vt._currentValue,pool:t}}var ml=Error(J(460)),S0=Error(J(474)),Cu=Error(J(542)),Rh={then:function(){}};function s_(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ol(){}function E0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ol,Ol),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,o_(t),t;default:if(typeof e.status=="string")e.then(Ol,Ol);else{if(t=xt,t!==null&&100<t.shellSuspendCounter)throw Error(J(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,o_(t),t}throw Ao=e,ml}}var Ao=null;function r_(){if(Ao===null)throw Error(J(459));var t=Ao;return Ao=null,t}function o_(t){if(t===ml||t===Cu)throw Error(J(483))}var pa=!1;function Ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wa(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=kc(t),_0(t,null,n),e}return wu(t,i,e,n),kc(t)}function Ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kv(t,n)}}function lf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?a=s=r:s=s.next=r,n=n.next}while(n!==null);s===null?a=s=e:s=s.next=e}else a=s=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Ch=!1;function wo(){if(Ch){var t=vr;if(t!==null)throw t}}function Co(t,e,n,i){Ch=!1;var a=t.updateQueue;pa=!1;var s=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?s=c:r.next=c,r=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=a.baseState;r=0,d=c=l=null,o=s;do{var h=o.lane&-536870913,m=h!==o.lane;if(m?(et&h)===h:(i&h)===h){h!==0&&h===Cr&&(Ch=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var y=t,S=o;h=e;var _=n;switch(S.tag){case 1:if(y=S.payload,typeof y=="function"){f=y.call(_,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=S.payload,h=typeof y=="function"?y.call(_,f,h):y,h==null)break e;f=yt({},f,h);break e;case 2:pa=!0}}h=o.callback,h!==null&&(t.flags|=64,m&&(t.flags|=8192),m=a.callbacks,m===null?a.callbacks=[h]:m.push(h))}else m={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,r|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;m=o,o=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,s===null&&(a.shared.lanes=0),Ia|=r,t.lanes=r,t.memoizedState=f}}function b0(t,e){if(typeof t!="function")throw Error(J(191,t));t.call(e)}function M0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)b0(n[t],e)}var Nr=Mi(null),qc=Mi(0);function l_(t,e){t=$i,Tt(qc,t),Tt(Nr,e),$i=t|e.baseLanes}function Nh(){Tt(qc,$i),Tt(Nr,Nr.current)}function bp(){$i=qc.current,Qt(Nr),Qt(qc)}var za=0,Xe=null,pt=null,Pt=null,Zc=!1,xr=!1,vs=!1,Kc=0,jo=0,yr=null,db=0;function Dt(){throw Error(J(321))}function Mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Tp(t,e,n,i,a,s){return za=s,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ue.H=t===null||t.memoizedState===null?tx:nx,vs=!1,s=n(i,a),vs=!1,xr&&(s=A0(e,n,i,a)),T0(t),s}function T0(t){Ue.H=Qc;var e=pt!==null&&pt.next!==null;if(za=0,Pt=pt=Xe=null,Zc=!1,jo=0,yr=null,e)throw Error(J(300));t===null||Kt||(t=t.dependencies,t!==null&&Yc(t)&&(Kt=!0))}function A0(t,e,n,i){Xe=t;var a=0;do{if(xr&&(yr=null),jo=0,xr=!1,25<=a)throw Error(J(301));if(a+=1,Pt=pt=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Ue.H=yb,s=e(n,i)}while(xr);return s}function pb(){var t=Ue.H,e=t.useState()[0];return e=typeof e.then=="function"?_l(e):e,t=t.useState()[0],(pt!==null?pt.memoizedState:null)!==t&&(Xe.flags|=1024),e}function Ap(){var t=Kc!==0;return Kc=0,t}function Rp(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function wp(t){if(Zc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zc=!1}za=0,Pt=pt=Xe=null,xr=!1,jo=Kc=0,yr=null}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Xe.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function zt(){if(pt===null){var t=Xe.alternate;t=t!==null?t.memoizedState:null}else t=pt.next;var e=Pt===null?Xe.memoizedState:Pt.next;if(e!==null)Pt=e,pt=t;else{if(t===null)throw Xe.alternate===null?Error(J(467)):Error(J(310));pt=t,t={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Pt===null?Xe.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Cp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(t){var e=jo;return jo+=1,yr===null&&(yr=[]),t=E0(yr,t,e),e=Xe,(Pt===null?e.memoizedState:Pt.next)===null&&(e=e.alternate,Ue.H=e===null||e.memoizedState===null?tx:nx),t}function Nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _l(t);if(t.$$typeof===Bi)return ln(t)}throw Error(J(438,String(t)))}function Np(t){var e=null,n=Xe.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Xe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Cp(),Xe.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=JS;return e.index++,n}function Qi(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=zt();return Dp(e,pt,t)}function Dp(t,e,n){var i=t.queue;if(i===null)throw Error(J(311));i.lastRenderedReducer=n;var a=t.baseQueue,s=i.pending;if(s!==null){if(a!==null){var r=a.next;a.next=s.next,s.next=r}e.baseQueue=a=s,i.pending=null}if(s=t.baseState,a===null)t.memoizedState=s;else{e=a.next;var o=r=null,l=null,c=e,d=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(et&f)===f:(za&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Cr&&(d=!0);else if((za&h)===h){c=c.next,h===Cr&&(d=!0);continue}else f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=s):l=l.next=f,Xe.lanes|=h,Ia|=h;f=c.action,vs&&n(s,f),s=c.hasEagerState?c.eagerState:n(s,f)}else h={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=s):l=l.next=h,Xe.lanes|=f,Ia|=f;c=c.next}while(c!==null&&c!==e);if(l===null?r=s:l.next=o,!Bn(s,t.memoizedState)&&(Kt=!0,d&&(n=vr,n!==null)))throw n;t.memoizedState=s,t.baseState=r,t.baseQueue=l,i.lastRenderedState=s}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function cf(t){var e=zt(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,s=e.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do s=t(s,r.action),r=r.next;while(r!==a);Bn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function R0(t,e,n){var i=Xe,a=zt(),s=st;if(s){if(n===void 0)throw Error(J(407));n=n()}else n=e();var r=!Bn((pt||a).memoizedState,n);r&&(a.memoizedState=n,Kt=!0),a=a.queue;var o=N0.bind(null,i,a,t);if(gl(2048,8,o,[t]),a.getSnapshot!==e||r||Pt!==null&&Pt.memoizedState.tag&1){if(i.flags|=2048,Dr(9,Du(),C0.bind(null,i,a,n,e),null),xt===null)throw Error(J(349));s||za&124||w0(i,e,n)}return n}function w0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Xe.updateQueue,e===null?(e=Cp(),Xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function C0(t,e,n,i){e.value=n,e.getSnapshot=i,D0(e)&&U0(t)}function N0(t,e,n){return n(function(){D0(e)&&U0(t)})}function D0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function U0(t){var e=Wr(t,2);e!==null&&Pn(e,t,2)}function Dh(t){var e=vn();if(typeof t=="function"){var n=t;if(t=n(),vs){Sa(!0);try{n()}finally{Sa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},e}function L0(t,e,n,i){return t.baseState=n,Dp(t,pt,typeof i=="function"?i:Qi)}function mb(t,e,n,i,a){if(Uu(t))throw Error(J(485));if(t=e.action,t!==null){var s={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Ue.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,F0(e,s)):(s.next=n.next,e.pending=n.next=s)}}function F0(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var s=Ue.T,r={};Ue.T=r;try{var o=n(a,i),l=Ue.S;l!==null&&l(r,o),c_(t,e,o)}catch(c){Uh(t,e,c)}finally{Ue.T=s}}else try{s=n(a,i),c_(t,e,s)}catch(c){Uh(t,e,c)}}function c_(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){u_(t,e,i)},function(i){return Uh(t,e,i)}):u_(t,e,n)}function u_(t,e,n){e.status="fulfilled",e.value=n,O0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,F0(t,n)))}function Uh(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,O0(e),e=e.next;while(e!==i)}t.action=null}function O0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function P0(t,e){return e}function f_(t,e){if(st){var n=xt.formState;if(n!==null){e:{var i=Xe;if(st){if(Ct){t:{for(var a=Ct,s=gi;a.nodeType!==8;){if(!s){a=null;break t}if(a=li(a.nextSibling),a===null){a=null;break t}}s=a.data,a=s==="F!"||s==="F"?a:null}if(a){Ct=li(a.nextSibling),i=a.data==="F!";break e}}_s(i)}i=!1}i&&(e=n[0])}}return n=vn(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:P0,lastRenderedState:e},n.queue=i,n=J0.bind(null,Xe,i),i.dispatch=n,i=Dh(!1),s=Op.bind(null,Xe,!1,i.queue),i=vn(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=mb.bind(null,Xe,a,s,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function h_(t){var e=zt();return z0(e,pt,t)}function z0(t,e,n){if(e=Dp(t,e,P0)[0],t=Sc(Qi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=_l(e)}catch(r){throw r===ml?Cu:r}else i=e;e=zt();var a=e.queue,s=a.dispatch;return n!==e.memoizedState&&(Xe.flags|=2048,Dr(9,Du(),_b.bind(null,a,n),null)),[i,s,t]}function _b(t,e){t.action=e}function d_(t){var e=zt(),n=pt;if(n!==null)return z0(e,n,t);zt(),e=e.memoizedState,n=zt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Dr(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Xe.updateQueue,e===null&&(e=Cp(),Xe.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Du(){return{destroy:void 0,resource:void 0}}function B0(){return zt().memoizedState}function Ec(t,e,n,i){var a=vn();i=i===void 0?null:i,Xe.flags|=t,a.memoizedState=Dr(1|e,Du(),n,i)}function gl(t,e,n,i){var a=zt();i=i===void 0?null:i;var s=a.memoizedState.inst;pt!==null&&i!==null&&Mp(i,pt.memoizedState.deps)?a.memoizedState=Dr(e,s,n,i):(Xe.flags|=t,a.memoizedState=Dr(1|e,s,n,i))}function p_(t,e){Ec(8390656,8,t,e)}function I0(t,e){gl(2048,8,t,e)}function H0(t,e){return gl(4,2,t,e)}function V0(t,e){return gl(4,4,t,e)}function G0(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function j0(t,e,n){n=n!=null?n.concat([t]):null,gl(4,4,G0.bind(null,e,t),n)}function Up(){}function k0(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Mp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Mp(e,i[1]))return i[0];if(i=t(),vs){Sa(!0);try{t()}finally{Sa(!1)}}return n.memoizedState=[i,e],i}function Lp(t,e,n){return n===void 0||za&1073741824?t.memoizedState=e:(t.memoizedState=n,t=Ox(),Xe.lanes|=t,Ia|=t,n)}function W0(t,e,n,i){return Bn(n,e)?n:Nr.current!==null?(t=Lp(t,n,i),Bn(t,e)||(Kt=!0),t):za&42?(t=Ox(),Xe.lanes|=t,Ia|=t,e):(Kt=!0,t.memoizedState=n)}function Y0(t,e,n,i,a){var s=rt.p;rt.p=s!==0&&8>s?s:8;var r=Ue.T,o={};Ue.T=o,Op(t,!1,e,n);try{var l=a(),c=Ue.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=hb(l,i);No(t,e,d,On(t))}else No(t,e,i,On(t))}catch(f){No(t,e,{then:function(){},status:"rejected",reason:f},On())}finally{rt.p=s,Ue.T=r}}function gb(){}function Lh(t,e,n,i){if(t.tag!==5)throw Error(J(476));var a=q0(t).queue;Y0(t,a,e,cs,n===null?gb:function(){return Z0(t),n(i)})}function q0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:cs,baseState:cs,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:cs},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Z0(t){var e=q0(t).next.queue;No(t,e,{},On())}function Fp(){return ln(qo)}function K0(){return zt().memoizedState}function Q0(){return zt().memoizedState}function vb(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=On();t=Ra(n);var i=wa(e,t,n);i!==null&&(Pn(i,e,n),Ro(i,e,n)),e={cache:yp()},t.payload=e;return}e=e.return}}function xb(t,e,n){var i=On();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(t)?$0(e,n):(n=_p(t,e,n,i),n!==null&&(Pn(n,t,i),ex(n,e,i)))}function J0(t,e,n){var i=On();No(t,e,n,i)}function No(t,e,n,i){var a={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(t))$0(e,a);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,n);if(a.hasEagerState=!0,a.eagerState=o,Bn(o,r))return wu(t,e,a,0),xt===null&&Ru(),!1}catch{}finally{}if(n=_p(t,e,a,i),n!==null)return Pn(n,t,i),ex(n,e,i),!0}return!1}function Op(t,e,n,i){if(i={lane:2,revertLane:jp(),action:i,hasEagerState:!1,eagerState:null,next:null},Uu(t)){if(e)throw Error(J(479))}else e=_p(t,n,i,2),e!==null&&Pn(e,t,2)}function Uu(t){var e=t.alternate;return t===Xe||e!==null&&e===Xe}function $0(t,e){xr=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ex(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,kv(t,n)}}var Qc={readContext:ln,use:Nu,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt},tx={readContext:ln,use:Nu,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:p_,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Ec(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ec(4194308,4,t,e)},useInsertionEffect:function(t,e){Ec(4,2,t,e)},useMemo:function(t,e){var n=vn();e=e===void 0?null:e;var i=t();if(vs){Sa(!0);try{t()}finally{Sa(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=vn();if(n!==void 0){var a=n(e);if(vs){Sa(!0);try{n(e)}finally{Sa(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=xb.bind(null,Xe,t),[i.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:function(t){t=Dh(t);var e=t.queue,n=J0.bind(null,Xe,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Up,useDeferredValue:function(t,e){var n=vn();return Lp(n,t,e)},useTransition:function(){var t=Dh(!1);return t=Y0.bind(null,Xe,t.queue,!0,!1),vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Xe,a=vn();if(st){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),xt===null)throw Error(J(349));et&124||w0(i,e,n)}a.memoizedState=n;var s={value:n,getSnapshot:e};return a.queue=s,p_(N0.bind(null,i,s,t),[t]),i.flags|=2048,Dr(9,Du(),C0.bind(null,i,s,n,e),null),n},useId:function(){var t=vn(),e=xt.identifierPrefix;if(st){var n=Hi,i=Ii;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e="«"+e+"R"+n,n=Kc++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=db++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Fp,useFormState:f_,useActionState:f_,useOptimistic:function(t){var e=vn();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Op.bind(null,Xe,!0,n),n.dispatch=e,[t,e]},useMemoCache:Np,useCacheRefresh:function(){return vn().memoizedState=vb.bind(null,Xe)}},nx={readContext:ln,use:Nu,useCallback:k0,useContext:ln,useEffect:I0,useImperativeHandle:j0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:X0,useReducer:Sc,useRef:B0,useState:function(){return Sc(Qi)},useDebugValue:Up,useDeferredValue:function(t,e){var n=zt();return W0(n,pt.memoizedState,t,e)},useTransition:function(){var t=Sc(Qi)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:_l(t),e]},useSyncExternalStore:R0,useId:K0,useHostTransitionStatus:Fp,useFormState:h_,useActionState:h_,useOptimistic:function(t,e){var n=zt();return L0(n,pt,t,e)},useMemoCache:Np,useCacheRefresh:Q0},yb={readContext:ln,use:Nu,useCallback:k0,useContext:ln,useEffect:I0,useImperativeHandle:j0,useInsertionEffect:H0,useLayoutEffect:V0,useMemo:X0,useReducer:cf,useRef:B0,useState:function(){return cf(Qi)},useDebugValue:Up,useDeferredValue:function(t,e){var n=zt();return pt===null?Lp(n,t,e):W0(n,pt.memoizedState,t,e)},useTransition:function(){var t=cf(Qi)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:_l(t),e]},useSyncExternalStore:R0,useId:K0,useHostTransitionStatus:Fp,useFormState:d_,useActionState:d_,useOptimistic:function(t,e){var n=zt();return pt!==null?L0(n,pt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Np,useCacheRefresh:Q0},Sr=null,ko=0;function Pl(t){var e=ko;return ko+=1,Sr===null&&(Sr=[]),E0(Sr,t,e)}function io(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function zl(t,e){throw e.$$typeof===KS?Error(J(525)):(t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function m_(t){var e=t._init;return e(t._payload)}function ix(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function a(u,g){return u=Xi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=67108866,g):v):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function r(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,v,x){return g===null||g.tag!==6?(g=rf(v,u.mode,x),g.return=u,g):(g=a(g,v),g.return=u,g)}function l(u,g,v,x){var R=v.type;return R===er?d(u,g,v.props.children,x,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===da&&m_(R)===g.type)?(g=a(g,v.props),io(g,v),g.return=u,g):(g=xc(v.type,v.key,v.props,null,u.mode,x),io(g,v),g.return=u,g)}function c(u,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=of(v,u.mode,x),g.return=u,g):(g=a(g,v.children||[]),g.return=u,g)}function d(u,g,v,x,R){return g===null||g.tag!==7?(g=us(v,u.mode,x,R),g.return=u,g):(g=a(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=rf(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Cl:return v=xc(g.type,g.key,g.props,null,u.mode,v),io(v,g),v.return=u,v;case mo:return g=of(g,u.mode,v),g.return=u,g;case da:var x=g._init;return g=x(g._payload),f(u,g,v)}if(_o(g)||$r(g))return g=us(g,u.mode,v,null),g.return=u,g;if(typeof g.then=="function")return f(u,Pl(g),v);if(g.$$typeof===Bi)return f(u,Fl(u,g),v);zl(u,g)}return null}function h(u,g,v,x){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return R!==null?null:o(u,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return v.key===R?l(u,g,v,x):null;case mo:return v.key===R?c(u,g,v,x):null;case da:return R=v._init,v=R(v._payload),h(u,g,v,x)}if(_o(v)||$r(v))return R!==null?null:d(u,g,v,x,null);if(typeof v.then=="function")return h(u,g,Pl(v),x);if(v.$$typeof===Bi)return h(u,g,Fl(u,v),x);zl(u,v)}return null}function m(u,g,v,x,R){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return u=u.get(v)||null,o(g,u,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Cl:return u=u.get(x.key===null?v:x.key)||null,l(g,u,x,R);case mo:return u=u.get(x.key===null?v:x.key)||null,c(g,u,x,R);case da:var C=x._init;return x=C(x._payload),m(u,g,v,x,R)}if(_o(x)||$r(x))return u=u.get(v)||null,d(g,u,x,R,null);if(typeof x.then=="function")return m(u,g,v,Pl(x),R);if(x.$$typeof===Bi)return m(u,g,v,Fl(g,x),R);zl(g,x)}return null}function y(u,g,v,x){for(var R=null,C=null,A=g,N=g=0,T=null;A!==null&&N<v.length;N++){A.index>N?(T=A,A=null):T=A.sibling;var E=h(u,A,v[N],x);if(E===null){A===null&&(A=T);break}t&&A&&E.alternate===null&&e(u,A),g=s(E,g,N),C===null?R=E:C.sibling=E,C=E,A=T}if(N===v.length)return n(u,A),st&&ns(u,N),R;if(A===null){for(;N<v.length;N++)A=f(u,v[N],x),A!==null&&(g=s(A,g,N),C===null?R=A:C.sibling=A,C=A);return st&&ns(u,N),R}for(A=i(A);N<v.length;N++)T=m(A,u,N,v[N],x),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?N:T.key),g=s(T,g,N),C===null?R=T:C.sibling=T,C=T);return t&&A.forEach(function(U){return e(u,U)}),st&&ns(u,N),R}function S(u,g,v,x){if(v==null)throw Error(J(151));for(var R=null,C=null,A=g,N=g=0,T=null,E=v.next();A!==null&&!E.done;N++,E=v.next()){A.index>N?(T=A,A=null):T=A.sibling;var U=h(u,A,E.value,x);if(U===null){A===null&&(A=T);break}t&&A&&U.alternate===null&&e(u,A),g=s(U,g,N),C===null?R=U:C.sibling=U,C=U,A=T}if(E.done)return n(u,A),st&&ns(u,N),R;if(A===null){for(;!E.done;N++,E=v.next())E=f(u,E.value,x),E!==null&&(g=s(E,g,N),C===null?R=E:C.sibling=E,C=E);return st&&ns(u,N),R}for(A=i(A);!E.done;N++,E=v.next())E=m(A,u,N,E.value,x),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?N:E.key),g=s(E,g,N),C===null?R=E:C.sibling=E,C=E);return t&&A.forEach(function(W){return e(u,W)}),st&&ns(u,N),R}function _(u,g,v,x){if(typeof v=="object"&&v!==null&&v.type===er&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:e:{for(var R=v.key;g!==null;){if(g.key===R){if(R=v.type,R===er){if(g.tag===7){n(u,g.sibling),x=a(g,v.props.children),x.return=u,u=x;break e}}else if(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===da&&m_(R)===g.type){n(u,g.sibling),x=a(g,v.props),io(x,v),x.return=u,u=x;break e}n(u,g);break}else e(u,g);g=g.sibling}v.type===er?(x=us(v.props.children,u.mode,x,v.key),x.return=u,u=x):(x=xc(v.type,v.key,v.props,null,u.mode,x),io(x,v),x.return=u,u=x)}return r(u);case mo:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),x=a(g,v.children||[]),x.return=u,u=x;break e}else{n(u,g);break}else e(u,g);g=g.sibling}x=of(v,u.mode,x),x.return=u,u=x}return r(u);case da:return R=v._init,v=R(v._payload),_(u,g,v,x)}if(_o(v))return y(u,g,v,x);if($r(v)){if(R=$r(v),typeof R!="function")throw Error(J(150));return v=R.call(v),S(u,g,v,x)}if(typeof v.then=="function")return _(u,g,Pl(v),x);if(v.$$typeof===Bi)return _(u,g,Fl(u,v),x);zl(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),x=a(g,v),x.return=u,u=x):(n(u,g),x=rf(v,u.mode,x),x.return=u,u=x),r(u)):n(u,g)}return function(u,g,v,x){try{ko=0;var R=_(u,g,v,x);return Sr=null,R}catch(A){if(A===ml||A===Cu)throw A;var C=Un(29,A,null,u.mode);return C.lanes=x,C.return=u,C}finally{}}}var Ur=ix(!0),ax=ix(!1),Qn=Mi(null),Ei=null;function ga(t){var e=t.alternate;Tt(Gt,Gt.current&1),Tt(Qn,t),Ei===null&&(e===null||Nr.current!==null||e.memoizedState!==null)&&(Ei=t)}function sx(t){if(t.tag===22){if(Tt(Gt,Gt.current),Tt(Qn,t),Ei===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ei=t)}}else va()}function va(){Tt(Gt,Gt.current),Tt(Qn,Qn.current)}function Gi(t){Qt(Qn),Ei===t&&(Ei=null),Qt(Gt)}var Gt=Mi(0);function Jc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Kh(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function uf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fh={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=On(),a=Ra(i);a.payload=e,n!=null&&(a.callback=n),e=wa(t,a,i),e!==null&&(Pn(e,t,i),Ro(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=On(),a=Ra(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=wa(t,a,i),e!==null&&(Pn(e,t,i),Ro(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=On(),i=Ra(n);i.tag=2,e!=null&&(i.callback=e),e=wa(t,i,n),e!==null&&(Pn(e,t,n),Ro(e,t,n))}};function __(t,e,n,i,a,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,r):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,i)||!Vo(a,s):!0}function g_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Fh.enqueueReplaceState(e,e.state,null)}function xs(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=yt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}var $c=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function rx(t){$c(t)}function ox(t){console.error(t)}function lx(t){$c(t)}function eu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function v_(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Oh(t,e,n){return n=Ra(n),n.tag=3,n.payload={element:null},n.callback=function(){eu(t,e)},n}function cx(t){return t=Ra(t),t.tag=3,t}function ux(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var s=i.value;t.payload=function(){return a(s)},t.callback=function(){v_(e,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){v_(e,n,i),typeof a!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function Sb(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&dl(e,n,a,!0),n=Qn.current,n!==null){switch(n.tag){case 13:return Ei===null?jh():n.alternate===null&&Nt===0&&(Nt=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Rh?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Sf(t,i,a)),!1;case 22:return n.flags|=65536,i===Rh?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Sf(t,i,a)),!1}throw Error(J(435,n.tag))}return Sf(t,i,a),jh(),!1}if(st)return e=Qn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==Eh&&(t=Error(J(422),{cause:i}),Go(qn(t,n)))):(i!==Eh&&(e=Error(J(423),{cause:i}),Go(qn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=qn(i,n),a=Oh(t.stateNode,i,a),lf(t,a),Nt!==4&&(Nt=2)),!1;var s=Error(J(520),{cause:i});if(s=qn(s,n),Lo===null?Lo=[s]:Lo.push(s),Nt!==4&&(Nt=2),e===null)return!0;i=qn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=Oh(n.stateNode,i,t),lf(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))))return n.flags|=65536,a&=-a,n.lanes|=a,a=cx(a),ux(a,t,n,i),lf(n,a),!1}n=n.return}while(n!==null);return!1}var fx=Error(J(461)),Kt=!1;function en(t,e,n,i){e.child=t===null?ax(e,null,n,i):Ur(e,t.child,n,i)}function x_(t,e,n,i,a){n=n.render;var s=e.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return gs(e),i=Tp(t,e,n,r,s,a),o=Ap(),t!==null&&!Kt?(Rp(t,e,a),Ji(t,e,a)):(st&&o&&vp(e),e.flags|=1,en(t,e,i,a),e.child)}function y_(t,e,n,i,a){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,hx(t,e,s,i,a)):(t=xc(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Pp(t,a)){var r=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(r,i)&&t.ref===e.ref)return Ji(t,e,a)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function hx(t,e,n,i,a){if(t!==null){var s=t.memoizedProps;if(Vo(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,Pp(t,a))t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Ji(t,e,a)}return Ph(t,e,n,i,a)}function dx(t,e,n){var i=e.pendingProps,a=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden"){if(e.flags&128){if(i=s!==null?s.baseLanes|n:n,t!==null){for(a=e.child=t.child,s=0;a!==null;)s=s|a.lanes|a.childLanes,a=a.sibling;e.childLanes=s&~i}else e.childLanes=0,e.child=null;return S_(t,e,i,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&yc(e,s!==null?s.cachePool:null),s!==null?l_(e,s):Nh(),sx(e);else return e.lanes=e.childLanes=536870912,S_(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(yc(e,s.cachePool),l_(e,s),va(),e.memoizedState=null):(t!==null&&yc(e,null),Nh(),va());return en(t,e,a,n),e.child}function S_(t,e,n,i){var a=Sp();return a=a===null?null:{parent:Vt._currentValue,pool:a},e.memoizedState={baseLanes:n,cachePool:a},t!==null&&yc(e,null),Nh(),sx(e),t!==null&&dl(t,e,i,!0),null}function bc(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(J(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Ph(t,e,n,i,a){return gs(e),n=Tp(t,e,n,i,void 0,a),i=Ap(),t!==null&&!Kt?(Rp(t,e,a),Ji(t,e,a)):(st&&i&&vp(e),e.flags|=1,en(t,e,n,a),e.child)}function E_(t,e,n,i,a,s){return gs(e),e.updateQueue=null,n=A0(e,i,n,a),T0(t),i=Ap(),t!==null&&!Kt?(Rp(t,e,s),Ji(t,e,s)):(st&&i&&vp(e),e.flags|=1,en(t,e,n,s),e.child)}function b_(t,e,n,i,a){if(gs(e),e.stateNode===null){var s=lr,r=n.contextType;typeof r=="object"&&r!==null&&(s=ln(r)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Fh,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},Ep(e),r=n.contextType,s.context=typeof r=="object"&&r!==null?ln(r):lr,s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(uf(e,n,r,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&Fh.enqueueReplaceState(s,s.state,null),Co(e,i,s,a),wo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=xs(n,o);s.props=l;var c=s.context,d=n.contextType;r=lr,typeof d=="object"&&d!==null&&(r=ln(d));var f=n.getDerivedStateFromProps;d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==r)&&g_(e,s,i,r),pa=!1;var h=e.memoizedState;s.state=h,Co(e,i,s,a),wo(),c=e.memoizedState,o||h!==c||pa?(typeof f=="function"&&(uf(e,n,f,i),c=e.memoizedState),(l=pa||__(e,n,l,i,h,c,r))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=r,i=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,wh(t,e),r=e.memoizedProps,d=xs(n,r),s.props=d,f=e.pendingProps,h=s.context,c=n.contextType,l=lr,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==f||h!==l)&&g_(e,s,i,l),pa=!1,h=e.memoizedState,s.state=h,Co(e,i,s,a),wo();var m=e.memoizedState;r!==f||h!==m||pa||t!==null&&t.dependencies!==null&&Yc(t.dependencies)?(typeof o=="function"&&(uf(e,n,o,i),m=e.memoizedState),(d=pa||__(e,n,d,i,h,m,l)||t!==null&&t.dependencies!==null&&Yc(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,m,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,m,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),s.props=i,s.state=m,s.context=l,i=d):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,bc(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=Ur(e,t.child,null,a),e.child=Ur(e,null,n,a)):en(t,e,n,a),e.memoizedState=s.state,t=e.child):t=Ji(t,e,a),t}function M_(t,e,n,i){return hl(),e.flags|=256,en(t,e,n,i),e.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:y0()}}function df(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Zn),t}function px(t,e,n){var i=e.pendingProps,a=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(Gt.current&2)!==0),r&&(a=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(st){if(a?ga(e):va(),st){var o=Ct,l;if(l=o){e:{for(l=o,o=gi;l.nodeType!==8;){if(!o){o=null;break e}if(l=li(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(e.memoizedState={dehydrated:o,treeContext:fs!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},l=Un(18,null,null,0),l.stateNode=o,l.return=e,e.child=l,hn=e,Ct=null,l=!0):l=!1}l||_s(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Kh(o)?e.lanes=32:e.lanes=536870912,null;Gi(e)}return o=i.children,i=i.fallback,a?(va(),a=e.mode,o=tu({mode:"hidden",children:o},a),i=us(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,a=e.child,a.memoizedState=hf(n),a.childLanes=df(t,r,n),e.memoizedState=ff,i):(ga(e),zh(e,o))}if(l=t.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(ga(e),e.flags&=-257,e=pf(t,e,n)):e.memoizedState!==null?(va(),e.child=t.child,e.flags|=128,e=null):(va(),a=i.fallback,o=e.mode,i=tu({mode:"visible",children:i.children},o),a=us(a,o,n,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,Ur(e,t.child,null,n),i=e.child,i.memoizedState=hf(n),i.childLanes=df(t,r,n),e.memoizedState=ff,e=a);else if(ga(e),Kh(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(J(419)),i.stack="",i.digest=r,Go({value:i,source:null,stack:null}),e=pf(t,e,n)}else if(Kt||dl(t,e,n,!1),r=(n&t.childLanes)!==0,Kt||r){if(r=xt,r!==null&&(i=n&-n,i=i&42?1:rp(i),i=i&(r.suspendedLanes|n)?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,Wr(t,i),Pn(r,t,i),fx;o.data==="$?"||jh(),e=pf(t,e,n)}else o.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Ct=li(o.nextSibling),hn=e,st=!0,hs=null,gi=!1,t!==null&&(kn[Xn++]=Ii,kn[Xn++]=Hi,kn[Xn++]=fs,Ii=t.id,Hi=t.overflow,fs=e),e=zh(e,i.children),e.flags|=4096);return e}return a?(va(),a=i.fallback,o=e.mode,l=t.child,c=l.sibling,i=Xi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?a=Xi(c,a):(a=us(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o===null?o=hf(n):(l=o.cachePool,l!==null?(c=Vt._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=y0(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=df(t,r,n),e.memoizedState=ff,i):(ga(e),n=t.child,t=n.sibling,n=Xi(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n,e.memoizedState=null,n)}function zh(t,e){return e=tu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function tu(t,e){return t=Un(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pf(t,e,n){return Ur(e,t.child,null,n),t=zh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function T_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Mh(t.return,e,n)}function mf(t,e,n,i,a){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a)}function mx(t,e,n){var i=e.pendingProps,a=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T_(t,n,e);else if(t.tag===19)T_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}switch(Tt(Gt,i),a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&Jc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),mf(e,!1,a,n,s);break;case"backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&Jc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ia|=e.lanes,!(n&e.childLanes))if(t!==null){if(dl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Yc(t)))}function Eb(t,e,n){switch(e.tag){case 3:Ic(e,e.stateNode.containerInfo),_a(e,Vt,t.memoizedState.cache),hl();break;case 27:case 5:hh(e);break;case 4:Ic(e,e.stateNode.containerInfo);break;case 10:_a(e,e.type,e.memoizedProps.value);break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ga(e),e.flags|=128,null):n&e.child.childLanes?px(t,e,n):(ga(e),t=Ji(t,e,n),t!==null?t.sibling:null);ga(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(dl(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return mx(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Tt(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,dx(t,e,n);case 24:_a(e,Vt,t.memoizedState.cache)}return Ji(t,e,n)}function _x(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Kt=!0;else{if(!Pp(t,n)&&!(e.flags&128))return Kt=!1,Eb(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,st&&e.flags&1048576&&v0(e,Wc,e.index);switch(e.lanes=0,e.tag){case 16:e:{t=e.pendingProps;var i=e.elementType,a=i._init;if(i=a(i._payload),e.type=i,typeof i=="function")gp(i)?(t=xs(i,t),e.tag=1,e=b_(null,e,i,t,n)):(e.tag=0,e=Ph(null,e,i,t,n));else{if(i!=null){if(a=i.$$typeof,a===ip){e.tag=11,e=x_(null,e,i,t,n);break e}else if(a===ap){e.tag=14,e=y_(null,e,i,t,n);break e}}throw e=uh(i)||i,Error(J(306,e,""))}}return e;case 0:return Ph(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=xs(i,e.pendingProps),b_(t,e,i,a,n);case 3:e:{if(Ic(e,e.stateNode.containerInfo),t===null)throw Error(J(387));i=e.pendingProps;var s=e.memoizedState;a=s.element,wh(t,e),Co(e,i,null,n);var r=e.memoizedState;if(i=r.cache,_a(e,Vt,i),i!==s.cache&&Th(e,[Vt],n,!0),wo(),i=r.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=M_(t,e,i,n);break e}else if(i!==a){a=qn(Error(J(424)),e),Go(a),e=M_(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ct=li(t.firstChild),hn=e,st=!0,hs=null,gi=!0,n=ax(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hl(),i===a){e=Ji(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 26:return bc(t,e),t===null?(n=G_(e.type,null,e.pendingProps,null))?e.memoizedState=n:st||(n=e.type,t=e.pendingProps,i=lu(Aa.current).createElement(n),i[on]=e,i[bn]=t,nn(i,n,t),Zt(i),e.stateNode=i):e.memoizedState=G_(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return hh(e),t===null&&st&&(i=e.stateNode=ny(e.type,e.pendingProps,Aa.current),hn=e,gi=!0,a=Ct,ja(e.type)?(Qh=a,Ct=li(i.firstChild)):Ct=a),en(t,e,e.pendingProps.children,n),bc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&st&&((a=i=Ct)&&(i=Kb(i,e.type,e.pendingProps,gi),i!==null?(e.stateNode=i,hn=e,Ct=li(i.firstChild),gi=!1,a=!0):a=!1),a||_s(e)),hh(e),a=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,i=s.children,qh(a,s)?i=null:r!==null&&qh(a,r)&&(e.flags|=32),e.memoizedState!==null&&(a=Tp(t,e,pb,null,null,n),qo._currentValue=a),bc(t,e),en(t,e,i,n),e.child;case 6:return t===null&&st&&((t=n=Ct)&&(n=Qb(n,e.pendingProps,gi),n!==null?(e.stateNode=n,hn=e,Ct=null,t=!0):t=!1),t||_s(e)),null;case 13:return px(t,e,n);case 4:return Ic(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ur(e,null,i,n):en(t,e,i,n),e.child;case 11:return x_(t,e,e.type,e.pendingProps,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,_a(e,e.type,i.value),en(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,gs(e),a=ln(a),i=i(a),e.flags|=1,en(t,e,i,n),e.child;case 14:return y_(t,e,e.type,e.pendingProps,n);case 15:return hx(t,e,e.type,e.pendingProps,n);case 19:return mx(t,e,n);case 31:return i=e.pendingProps,n=e.mode,i={mode:i.mode,children:i.children},t===null?(n=tu(i,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Xi(t.child,i),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return dx(t,e,n);case 24:return gs(e),i=ln(Vt),t===null?(a=Sp(),a===null&&(a=xt,s=yp(),a.pooledCache=s,s.refCount++,s!==null&&(a.pooledCacheLanes|=n),a=s),e.memoizedState={parent:i,cache:a},Ep(e),_a(e,Vt,a)):(t.lanes&n&&(wh(t,e),Co(e,null,null,n),wo()),a=t.memoizedState,s=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),_a(e,Vt,i)):(i=s.cache,_a(e,Vt,i),i!==a.cache&&Th(e,[Vt],n,!0))),en(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(J(156,e.tag))}function wi(t){t.flags|=4}function A_(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!sy(e)){if(e=Qn.current,e!==null&&((et&4194048)===et?Ei!==null:(et&62914560)!==et&&!(et&536870912)||e!==Ei))throw Ao=Rh,S0;t.flags|=8192}}function Bl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Gv():536870912,t.lanes|=e,Lr|=e)}function ao(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function At(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bb(t,e,n){var i=e.pendingProps;switch(xp(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(e),null;case 1:return At(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Wi(Vt),Ar(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(no(e)?wi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,n_())),At(e),null;case 26:return n=e.memoizedState,t===null?(wi(e),n!==null?(At(e),A_(e,n)):(At(e),e.flags&=-16777217)):n?n!==t.memoizedState?(wi(e),At(e),A_(e,n)):(At(e),e.flags&=-16777217):(t.memoizedProps!==i&&wi(e),At(e),e.flags&=-16777217),null;case 27:Hc(e),n=Aa.current;var a=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==i&&wi(e);else{if(!i){if(e.stateNode===null)throw Error(J(166));return At(e),null}t=yi.current,no(e)?e_(e):(t=ny(a,i,n),e.stateNode=t,wi(e))}return At(e),null;case 5:if(Hc(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&wi(e);else{if(!i){if(e.stateNode===null)throw Error(J(166));return At(e),null}if(t=yi.current,no(e))e_(e);else{switch(a=lu(Aa.current),t){case 1:t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?t.multiple=!0:i.size&&(t.size=i.size);break;default:t=typeof i.is=="string"?a.createElement(n,{is:i.is}):a.createElement(n)}}t[on]=e,t[bn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=t;e:switch(nn(t,n,i),n){case"button":case"input":case"select":case"textarea":t=!!i.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&wi(e)}}return At(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&wi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=Aa.current,no(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=hn,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[on]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||$x(t.nodeValue,n)),t||_s(e)}else t=lu(t).createTextNode(i),t[on]=e,e.stateNode=t}return At(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=no(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(J(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[on]=e}else hl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;At(e),a=!1}else a=n_(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Gi(e),e):(Gi(e),null)}if(Gi(e),e.flags&128)return e.lanes=n,e;if(n=i!==null,t=t!==null&&t.memoizedState!==null,n){i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool);var s=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==a&&(i.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Bl(e,e.updateQueue),At(e),null;case 4:return Ar(),t===null&&kp(e.stateNode.containerInfo),At(e),null;case 10:return Wi(e.type),At(e),null;case 19:if(Qt(Gt),a=e.memoizedState,a===null)return At(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)ao(a,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Jc(t),s!==null){for(e.flags|=128,ao(a,!1),t=s.updateQueue,e.updateQueue=t,Bl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)g0(n,t),n=n.sibling;return Tt(Gt,Gt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Si()>iu&&(e.flags|=128,i=!0,ao(a,!1),e.lanes=4194304)}else{if(!i)if(t=Jc(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Bl(e,t),ao(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!st)return At(e),null}else 2*Si()-a.renderingStartTime>iu&&n!==536870912&&(e.flags|=128,i=!0,ao(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(t=a.last,t!==null?t.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Si(),e.sibling=null,t=Gt.current,Tt(Gt,i?t&1|2:t&1),e):(At(e),null);case 22:case 23:return Gi(e),bp(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(At(e),e.subtreeFlags&6&&(e.flags|=8192)):At(e),n=e.updateQueue,n!==null&&Bl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Qt(ds),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Wi(Vt),At(e),null;case 25:return null;case 30:return null}throw Error(J(156,e.tag))}function Mb(t,e){switch(xp(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(Vt),Ar(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Hc(e),null;case 13:if(Gi(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));hl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qt(Gt),null;case 4:return Ar(),null;case 10:return Wi(e.type),null;case 22:case 23:return Gi(e),bp(),t!==null&&Qt(ds),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Wi(Vt),null;case 25:return null;default:return null}}function gx(t,e){switch(xp(e),e.tag){case 3:Wi(Vt),Ar();break;case 26:case 27:case 5:Hc(e);break;case 4:Ar();break;case 13:Gi(e);break;case 19:Qt(Gt);break;case 10:Wi(e.type);break;case 22:case 23:Gi(e),bp(),t!==null&&Qt(ds);break;case 24:Wi(Vt)}}function vl(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var s=n.create,r=n.inst;i=s(),r.destroy=i}n=n.next}while(n!==a)}}catch(o){_t(e,e.return,o)}}function Ba(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var s=a.next;i=s;do{if((i.tag&t)===t){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){_t(a,l,d)}}}i=i.next}while(i!==s)}}catch(d){_t(e,e.return,d)}}function vx(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{M0(e,n)}catch(i){_t(t,t.return,i)}}}function xx(t,e,n){n.props=xs(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){_t(t,e,i)}}function Do(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){_t(t,e,a)}}function vi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){_t(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){_t(t,e,a)}else n.current=null}function yx(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){_t(t,t.return,a)}}function _f(t,e,n){try{var i=t.stateNode;Xb(i,t.type,n,e),i[bn]=e}catch(a){_t(t,t.return,a)}}function Sx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pu));else if(i!==4&&(i===27&&ja(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function nu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&ja(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(nu(t,e,n),t=t.sibling;t!==null;)nu(t,e,n),t=t.sibling}function Ex(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);nn(e,i,n),e[on]=t,e[bn]=n}catch(s){_t(t,t.return,s)}}var Pi=!1,Ut=!1,vf=!1,R_=typeof WeakSet=="function"?WeakSet:Set,qt=null;function Tb(t,e){if(t=t.containerInfo,Wh=hu,t=c0(t),pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var r=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(o=r+a),f!==s||i!==0&&f.nodeType!==3||(l=r+i),f.nodeType===3&&(r+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===a&&(o=r),h===s&&++d===i&&(l=r),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:t,selectionRange:n},hu=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,s=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,a=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var y=xs(n.type,a,n.elementType===n.type);t=i.getSnapshotBeforeUpdate(y,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(S){_t(n,n.return,S)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Zh(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(J(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function bx(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:sa(t,n),i&4&&vl(5,n);break;case 1:if(sa(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(r){_t(n,n.return,r)}else{var a=xs(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){_t(n,n.return,r)}}i&64&&vx(n),i&512&&Do(n,n.return);break;case 3:if(sa(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{M0(t,e)}catch(r){_t(n,n.return,r)}}break;case 27:e===null&&i&4&&Ex(n);case 26:case 5:sa(t,n),e===null&&i&4&&yx(n),i&512&&Do(n,n.return);break;case 12:sa(t,n);break;case 13:sa(t,n),i&4&&Ax(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Fb.bind(null,n),Jb(t,n))));break;case 22:if(i=n.memoizedState!==null||Pi,!i){e=e!==null&&e.memoizedState!==null||Ut,a=Pi;var s=Ut;Pi=i,(Ut=e)&&!s?ha(t,n,(n.subtreeFlags&8772)!==0):sa(t,n),Pi=a,Ut=s}break;case 30:break;default:sa(t,n)}}function Mx(t){var e=t.alternate;e!==null&&(t.alternate=null,Mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&lp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var bt=null,xn=!1;function Ci(t,e,n){for(n=n.child;n!==null;)Tx(t,e,n),n=n.sibling}function Tx(t,e,n){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 26:Ut||vi(n,e),Ci(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ut||vi(n,e);var i=bt,a=xn;ja(n.type)&&(bt=n.stateNode,xn=!1),Ci(t,e,n),Oo(n.stateNode),bt=i,xn=a;break;case 5:Ut||vi(n,e);case 6:if(i=bt,a=xn,bt=null,Ci(t,e,n),bt=i,xn=a,bt!==null)if(xn)try{(bt.nodeType===9?bt.body:bt.nodeName==="HTML"?bt.ownerDocument.body:bt).removeChild(n.stateNode)}catch(s){_t(n,e,s)}else try{bt.removeChild(n.stateNode)}catch(s){_t(n,e,s)}break;case 18:bt!==null&&(xn?(t=bt,I_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Qo(t)):I_(bt,n.stateNode));break;case 4:i=bt,a=xn,bt=n.stateNode.containerInfo,xn=!0,Ci(t,e,n),bt=i,xn=a;break;case 0:case 11:case 14:case 15:Ut||Ba(2,n,e),Ut||Ba(4,n,e),Ci(t,e,n);break;case 1:Ut||(vi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&xx(n,e,i)),Ci(t,e,n);break;case 21:Ci(t,e,n);break;case 22:Ut=(i=Ut)||n.memoizedState!==null,Ci(t,e,n),Ut=i;break;default:Ci(t,e,n)}}function Ax(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qo(t)}catch(n){_t(e,e.return,n)}}function Ab(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new R_),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new R_),e;default:throw Error(J(435,t.tag))}}function xf(t,e){var n=Ab(t);e.forEach(function(i){var a=Ob.bind(null,t,i);n.has(i)||(n.add(i),i.then(a,a))})}function An(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(ja(o.type)){bt=o.stateNode,xn=!1;break e}break;case 5:bt=o.stateNode,xn=!1;break e;case 3:case 4:bt=o.stateNode.containerInfo,xn=!0;break e}o=o.return}if(bt===null)throw Error(J(160));Tx(s,r,a),bt=null,xn=!1,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Rx(e,t),e=e.sibling}var ai=null;function Rx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:An(e,t),Rn(t),i&4&&(Ba(3,t,t.return),vl(3,t),Ba(5,t,t.return));break;case 1:An(e,t),Rn(t),i&512&&(Ut||n===null||vi(n,n.return)),i&64&&Pi&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ai;if(An(e,t),Rn(t),i&512&&(Ut||n===null||vi(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":s=a.getElementsByTagName("title")[0],(!s||s[ul]||s[on]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=a.createElement(i),a.head.insertBefore(s,a.querySelector("head > title"))),nn(s,i,n),s[on]=t,Zt(s),i=s;break e;case"link":var r=k_("link","href",a).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}s=a.createElement(i),nn(s,i,n),a.head.appendChild(s);break;case"meta":if(r=k_("meta","content",a).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}s=a.createElement(i),nn(s,i,n),a.head.appendChild(s);break;default:throw Error(J(468,i))}s[on]=t,Zt(s),i=s}t.stateNode=i}else X_(a,t.type,t.stateNode);else t.stateNode=j_(a,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?X_(a,t.type,t.stateNode):j_(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&_f(t,t.memoizedProps,n.memoizedProps)}break;case 27:An(e,t),Rn(t),i&512&&(Ut||n===null||vi(n,n.return)),n!==null&&i&4&&_f(t,t.memoizedProps,n.memoizedProps);break;case 5:if(An(e,t),Rn(t),i&512&&(Ut||n===null||vi(n,n.return)),t.flags&32){a=t.stateNode;try{wr(a,"")}catch(m){_t(t,t.return,m)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,_f(t,a,n!==null?n.memoizedProps:a)),i&1024&&(vf=!0);break;case 6:if(An(e,t),Rn(t),i&4){if(t.stateNode===null)throw Error(J(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(m){_t(t,t.return,m)}}break;case 3:if(Ac=null,a=ai,ai=cu(e.containerInfo),An(e,t),ai=a,Rn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(m){_t(t,t.return,m)}vf&&(vf=!1,wx(t));break;case 4:i=ai,ai=cu(t.stateNode.containerInfo),An(e,t),Rn(t),ai=i;break;case 12:An(e,t),Rn(t);break;case 13:An(e,t),Rn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vp=Si()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,xf(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Pi,d=Ut;if(Pi=c||a,Ut=d||l,An(e,t),Ut=d,Pi=c,Rn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Pi||Ut||is(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(s=l.stateNode,a)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(m){_t(l,l.return,m)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(m){_t(l,l.return,m)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,xf(t,n))));break;case 19:An(e,t),Rn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,xf(t,i)));break;case 30:break;case 21:break;default:An(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Sx(i)){n=i;break}i=i.return}if(n==null)throw Error(J(160));switch(n.tag){case 27:var a=n.stateNode,s=gf(t);nu(t,s,a);break;case 5:var r=n.stateNode;n.flags&32&&(wr(r,""),n.flags&=-33);var o=gf(t);nu(t,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=gf(t);Bh(t,c,l);break;default:throw Error(J(161))}}catch(d){_t(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wx(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function sa(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)bx(t,e.alternate,e),e=e.sibling}function is(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ba(4,e,e.return),is(e);break;case 1:vi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&xx(e,e.return,n),is(e);break;case 27:Oo(e.stateNode);case 26:case 5:vi(e,e.return),is(e);break;case 22:e.memoizedState===null&&is(e);break;case 30:is(e);break;default:is(e)}t=t.sibling}}function ha(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:ha(a,s,n),vl(4,s);break;case 1:if(ha(a,s,n),i=s,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){_t(i,i.return,c)}if(i=s,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)b0(l[a],o)}catch(c){_t(i,i.return,c)}}n&&r&64&&vx(s),Do(s,s.return);break;case 27:Ex(s);case 26:case 5:ha(a,s,n),n&&i===null&&r&4&&yx(s),Do(s,s.return);break;case 12:ha(a,s,n);break;case 13:ha(a,s,n),n&&r&4&&Ax(a,s);break;case 22:s.memoizedState===null&&ha(a,s,n),Do(s,s.return);break;case 30:break;default:ha(a,s,n)}e=e.sibling}}function zp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&pl(n))}function Bp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pl(t))}function pi(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Cx(t,e,n,i),e=e.sibling}function Cx(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:pi(t,e,n,i),a&2048&&vl(9,e);break;case 1:pi(t,e,n,i);break;case 3:pi(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pl(t)));break;case 12:if(a&2048){pi(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){_t(e,e.return,l)}}else pi(t,e,n,i);break;case 13:pi(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?pi(t,e,n,i):Uo(t,e):s._visibility&2?pi(t,e,n,i):(s._visibility|=2,Ks(t,e,n,i,(e.subtreeFlags&10256)!==0)),a&2048&&zp(r,e);break;case 24:pi(t,e,n,i),a&2048&&Bp(e.alternate,e);break;default:pi(t,e,n,i)}}function Ks(t,e,n,i,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var s=t,r=e,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ks(s,r,o,l,a),vl(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Ks(s,r,o,l,a):Uo(s,r):(d._visibility|=2,Ks(s,r,o,l,a)),a&&c&2048&&zp(r.alternate,r);break;case 24:Ks(s,r,o,l,a),a&&c&2048&&Bp(r.alternate,r);break;default:Ks(s,r,o,l,a)}e=e.sibling}}function Uo(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:Uo(n,i),a&2048&&zp(i.alternate,i);break;case 24:Uo(n,i),a&2048&&Bp(i.alternate,i);break;default:Uo(n,i)}e=e.sibling}}var vo=8192;function Us(t){if(t.subtreeFlags&vo)for(t=t.child;t!==null;)Nx(t),t=t.sibling}function Nx(t){switch(t.tag){case 26:Us(t),t.flags&vo&&t.memoizedState!==null&&fM(ai,t.memoizedState,t.memoizedProps);break;case 5:Us(t);break;case 3:case 4:var e=ai;ai=cu(t.stateNode.containerInfo),Us(t),ai=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=vo,vo=16777216,Us(t),vo=e):Us(t));break;default:Us(t)}}function Dx(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function so(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,Lx(i,t)}Dx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ux(t),t=t.sibling}function Ux(t){switch(t.tag){case 0:case 11:case 15:so(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:so(t);break;case 12:so(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Mc(t)):so(t);break;default:so(t)}}function Mc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];qt=i,Lx(i,t)}Dx(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ba(8,e,e.return),Mc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Mc(e));break;default:Mc(e)}t=t.sibling}}function Lx(t,e){for(;qt!==null;){var n=qt;switch(n.tag){case 0:case 11:case 15:Ba(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:pl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,qt=i;else e:for(n=t;qt!==null;){i=qt;var a=i.sibling,s=i.return;if(Mx(i),i===n){qt=null;break e}if(a!==null){a.return=s,qt=a;break e}qt=s}}}var Rb={getCacheForType:function(t){var e=ln(Vt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},wb=typeof WeakMap=="function"?WeakMap:Map,ht=0,xt=null,Ke=null,et=0,ft=0,Nn=null,ba=!1,Yr=!1,Ip=!1,$i=0,Nt=0,Ia=0,ps=0,Hp=0,Zn=0,Lr=0,Lo=null,yn=null,Ih=!1,Vp=0,iu=1/0,au=null,Ca=null,tn=0,Na=null,Fr=null,Er=0,Hh=0,Vh=null,Fx=null,Fo=0,Gh=null;function On(){if(ht&2&&et!==0)return et&-et;if(Ue.T!==null){var t=Cr;return t!==0?t:jp()}return Xv()}function Ox(){Zn===0&&(Zn=!(et&536870912)||st?Vv():536870912);var t=Qn.current;return t!==null&&(t.flags|=32),Zn}function Pn(t,e,n){(t===xt&&(ft===2||ft===9)||t.cancelPendingCommit!==null)&&(Or(t,0),Ma(t,et,Zn,!1)),cl(t,n),(!(ht&2)||t!==xt)&&(t===xt&&(!(ht&2)&&(ps|=n),Nt===4&&Ma(t,et,Zn,!1)),Ti(t))}function Px(t,e,n){if(ht&6)throw Error(J(327));var i=!n&&(e&124)===0&&(e&t.expiredLanes)===0||ll(t,e),a=i?Db(t,e):yf(t,e,!0),s=i;do{if(a===0){Yr&&!i&&Ma(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!Cb(n)){a=yf(t,e,!1),s=!1;continue}if(a===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;a=Lo;var l=o.current.memoizedState.isDehydrated;if(l&&(Or(o,r).flags|=256),r=yf(o,r,!1),r!==2){if(Ip&&!l){o.errorRecoveryDisabledLanes|=s,ps|=s,a=4;break e}s=yn,yn=a,s!==null&&(yn===null?yn=s:yn.push.apply(yn,s))}a=r}if(s=!1,a!==2)continue}}if(a===1){Or(t,0),Ma(t,e,0,!0);break}e:{switch(i=t,s=a,s){case 0:case 1:throw Error(J(345));case 4:if((e&4194048)!==e)break;case 6:Ma(i,e,Zn,!ba);break e;case 2:yn=null;break;case 3:case 5:break;default:throw Error(J(329))}if((e&62914560)===e&&(a=Vp+300-Si(),10<a)){if(Ma(i,e,Zn,!ba),bu(i,0,!0)!==0)break e;i.timeoutHandle=ty(w_.bind(null,i,n,yn,au,Ih,e,Zn,ps,Lr,ba,s,2,-0,0),a);break e}w_(i,n,yn,au,Ih,e,Zn,ps,Lr,ba,s,0,-0,0)}}break}while(!0);Ti(t)}function w_(t,e,n,i,a,s,r,o,l,c,d,f,h,m){if(t.timeoutHandle=-1,f=e.subtreeFlags,(f&8192||(f&16785408)===16785408)&&(Yo={stylesheets:null,count:0,unsuspend:uM},Nx(e),f=hM(),f!==null)){t.cancelPendingCommit=f(N_.bind(null,t,e,s,n,i,a,r,o,l,d,1,h,m)),Ma(t,s,r,!c);return}N_(t,e,s,n,i,a,r,o,l)}function Cb(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],s=a.getSnapshot;a=a.value;try{if(!Bn(s(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ma(t,e,n,i){e&=~Hp,e&=~ps,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var s=31-Fn(a),r=1<<s;i[s]=-1,a&=~r}n!==0&&jv(t,n,e)}function Lu(){return ht&6?!0:(xl(0),!1)}function Gp(){if(Ke!==null){if(ft===0)var t=Ke.return;else t=Ke,Vi=Ts=null,wp(t),Sr=null,ko=0,t=Ke;for(;t!==null;)gx(t.alternate,t),t=t.return;Ke=null}}function Or(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Yb(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Gp(),xt=t,Ke=n=Xi(t.current,null),et=e,ft=0,Nn=null,ba=!1,Yr=ll(t,e),Ip=!1,Lr=Zn=Hp=ps=Ia=Nt=0,yn=Lo=null,Ih=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Fn(i),s=1<<a;e|=t[a],i&=~s}return $i=e,Ru(),n}function zx(t,e){Xe=null,Ue.H=Qc,e===ml||e===Cu?(e=r_(),ft=3):e===S0?(e=r_(),ft=4):ft=e===fx?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Nn=e,Ke===null&&(Nt=1,eu(t,qn(e,t.current)))}function Bx(){var t=Ue.H;return Ue.H=Qc,t===null?Qc:t}function Ix(){var t=Ue.A;return Ue.A=Rb,t}function jh(){Nt=4,ba||(et&4194048)!==et&&Qn.current!==null||(Yr=!0),!(Ia&134217727)&&!(ps&134217727)||xt===null||Ma(xt,et,Zn,!1)}function yf(t,e,n){var i=ht;ht|=2;var a=Bx(),s=Ix();(xt!==t||et!==e)&&(au=null,Or(t,e)),e=!1;var r=Nt;e:do try{if(ft!==0&&Ke!==null){var o=Ke,l=Nn;switch(ft){case 8:Gp(),r=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(e=!0);var c=ft;if(ft=0,Nn=null,fr(t,o,l,c),n&&Yr){r=0;break e}break;default:c=ft,ft=0,Nn=null,fr(t,o,l,c)}}Nb(),r=Nt;break}catch(d){zx(t,d)}while(!0);return e&&t.shellSuspendCounter++,Vi=Ts=null,ht=i,Ue.H=a,Ue.A=s,Ke===null&&(xt=null,et=0,Ru()),r}function Nb(){for(;Ke!==null;)Hx(Ke)}function Db(t,e){var n=ht;ht|=2;var i=Bx(),a=Ix();xt!==t||et!==e?(au=null,iu=Si()+500,Or(t,e)):Yr=ll(t,e);e:do try{if(ft!==0&&Ke!==null){e=Ke;var s=Nn;t:switch(ft){case 1:ft=0,Nn=null,fr(t,e,s,1);break;case 2:case 9:if(s_(s)){ft=0,Nn=null,C_(e);break}e=function(){ft!==2&&ft!==9||xt!==t||(ft=7),Ti(t)},s.then(e,e);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:s_(s)?(ft=0,Nn=null,C_(e)):(ft=0,Nn=null,fr(t,e,s,7));break;case 5:var r=null;switch(Ke.tag){case 26:r=Ke.memoizedState;case 5:case 27:var o=Ke;if(!r||sy(r)){ft=0,Nn=null;var l=o.sibling;if(l!==null)Ke=l;else{var c=o.return;c!==null?(Ke=c,Fu(c)):Ke=null}break t}}ft=0,Nn=null,fr(t,e,s,5);break;case 6:ft=0,Nn=null,fr(t,e,s,6);break;case 8:Gp(),Nt=6;break e;default:throw Error(J(462))}}Ub();break}catch(d){zx(t,d)}while(!0);return Vi=Ts=null,Ue.H=i,Ue.A=a,ht=n,Ke!==null?0:(xt=null,et=0,Ru(),Nt)}function Ub(){for(;Ke!==null&&!eE();)Hx(Ke)}function Hx(t){var e=_x(t.alternate,t,$i);t.memoizedProps=t.pendingProps,e===null?Fu(t):Ke=e}function C_(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=E_(n,e,e.pendingProps,e.type,void 0,et);break;case 11:e=E_(n,e,e.pendingProps,e.type.render,e.ref,et);break;case 5:wp(e);default:gx(n,e),e=Ke=g0(e,$i),e=_x(n,e,$i)}t.memoizedProps=t.pendingProps,e===null?Fu(t):Ke=e}function fr(t,e,n,i){Vi=Ts=null,wp(e),Sr=null,ko=0;var a=e.return;try{if(Sb(t,a,e,n,et)){Nt=1,eu(t,qn(n,t.current)),Ke=null;return}}catch(s){if(a!==null)throw Ke=a,s;Nt=1,eu(t,qn(n,t.current)),Ke=null;return}e.flags&32768?(st||i===1?t=!0:Yr||et&536870912?t=!1:(ba=t=!0,(i===2||i===9||i===3||i===6)&&(i=Qn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Vx(e,t)):Fu(e)}function Fu(t){var e=t;do{if(e.flags&32768){Vx(e,ba);return}t=e.return;var n=bb(e.alternate,e,$i);if(n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Nt===0&&(Nt=5)}function Vx(t,e){do{var n=Mb(t.alternate,t);if(n!==null){n.flags&=32767,Ke=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Ke=t;return}Ke=t=n}while(t!==null);Nt=6,Ke=null}function N_(t,e,n,i,a,s,r,o,l){t.cancelPendingCommit=null;do Ou();while(tn!==0);if(ht&6)throw Error(J(327));if(e!==null){if(e===t.current)throw Error(J(177));if(s=e.lanes|e.childLanes,s|=mp,uE(t,n,s,r,o,l),t===xt&&(Ke=xt=null,et=0),Fr=e,Na=t,Er=n,Hh=s,Vh=a,Fx=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Pb(Vc,function(){return Wx(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=Ue.T,Ue.T=null,a=rt.p,rt.p=2,r=ht,ht|=4;try{Tb(t,e,n)}finally{ht=r,rt.p=a,Ue.T=i}}tn=1,Gx(),jx(),kx()}}function Gx(){if(tn===1){tn=0;var t=Na,e=Fr,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=Ue.T,Ue.T=null;var i=rt.p;rt.p=2;var a=ht;ht|=4;try{Rx(e,t);var s=Yh,r=c0(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&l0(o.ownerDocument.documentElement,o)){if(l!==null&&pp(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var m=h.getSelection(),y=o.textContent.length,S=Math.min(l.start,y),_=l.end===void 0?S:Math.min(l.end,y);!m.extend&&S>_&&(r=_,_=S,S=r);var u=Qm(o,S),g=Qm(o,_);if(u&&g&&(m.rangeCount!==1||m.anchorNode!==u.node||m.anchorOffset!==u.offset||m.focusNode!==g.node||m.focusOffset!==g.offset)){var v=f.createRange();v.setStart(u.node,u.offset),m.removeAllRanges(),S>_?(m.addRange(v),m.extend(g.node,g.offset)):(v.setEnd(g.node,g.offset),m.addRange(v))}}}}for(f=[],m=o;m=m.parentNode;)m.nodeType===1&&f.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var x=f[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}hu=!!Wh,Yh=Wh=null}finally{ht=a,rt.p=i,Ue.T=n}}t.current=e,tn=2}}function jx(){if(tn===2){tn=0;var t=Na,e=Fr,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=Ue.T,Ue.T=null;var i=rt.p;rt.p=2;var a=ht;ht|=4;try{bx(t,e.alternate,e)}finally{ht=a,rt.p=i,Ue.T=n}}tn=3}}function kx(){if(tn===4||tn===3){tn=0,tE();var t=Na,e=Fr,n=Er,i=Fx;e.subtreeFlags&10256||e.flags&10256?tn=5:(tn=0,Fr=Na=null,Xx(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ca=null),op(n),e=e.stateNode,Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=Ue.T,a=rt.p,rt.p=2,Ue.T=null;try{for(var s=t.onRecoverableError,r=0;r<i.length;r++){var o=i[r];s(o.value,{componentStack:o.stack})}}finally{Ue.T=e,rt.p=a}}Er&3&&Ou(),Ti(t),a=t.pendingLanes,n&4194090&&a&42?t===Gh?Fo++:(Fo=0,Gh=t):Fo=0,xl(0)}}function Xx(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pl(e)))}function Ou(t){return Gx(),jx(),kx(),Wx()}function Wx(){if(tn!==5)return!1;var t=Na,e=Hh;Hh=0;var n=op(Er),i=Ue.T,a=rt.p;try{rt.p=32>n?32:n,Ue.T=null,n=Vh,Vh=null;var s=Na,r=Er;if(tn=0,Fr=Na=null,Er=0,ht&6)throw Error(J(331));var o=ht;if(ht|=4,Ux(s.current),Cx(s,s.current,r,n),ht=o,xl(0,!1),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(ol,s)}catch{}return!0}finally{rt.p=a,Ue.T=i,Xx(t,e)}}function D_(t,e,n){e=qn(n,e),e=Oh(t.stateNode,e,2),t=wa(t,e,2),t!==null&&(cl(t,2),Ti(t))}function _t(t,e,n){if(t.tag===3)D_(t,t,n);else for(;e!==null;){if(e.tag===3){D_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ca===null||!Ca.has(i))){t=qn(n,t),n=cx(2),i=wa(e,n,2),i!==null&&(ux(n,i,e,t),cl(i,2),Ti(i));break}}e=e.return}}function Sf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new wb;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(Ip=!0,a.add(n),t=Lb.bind(null,t,e,n),e.then(t,t))}function Lb(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,xt===t&&(et&n)===n&&(Nt===4||Nt===3&&(et&62914560)===et&&300>Si()-Vp?!(ht&2)&&Or(t,0):Hp|=n,Lr===et&&(Lr=0)),Ti(t)}function Yx(t,e){e===0&&(e=Gv()),t=Wr(t,e),t!==null&&(cl(t,e),Ti(t))}function Fb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yx(t,n)}function Ob(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(J(314))}i!==null&&i.delete(e),Yx(t,n)}function Pb(t,e){return sp(t,e)}var su=null,Qs=null,kh=!1,ru=!1,Ef=!1,ms=0;function Ti(t){t!==Qs&&t.next===null&&(Qs===null?su=Qs=t:Qs=Qs.next=t),ru=!0,kh||(kh=!0,Bb())}function xl(t,e){if(!Ef&&ru){Ef=!0;do for(var n=!1,i=su;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var s=0;else{var r=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-Fn(42|t)+1)-1,s&=a&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,U_(i,s))}else s=et,s=bu(i,i===xt?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||ll(i,s)||(n=!0,U_(i,s));i=i.next}while(n);Ef=!1}}function zb(){qx()}function qx(){ru=kh=!1;var t=0;ms!==0&&(Wb()&&(t=ms),ms=0);for(var e=Si(),n=null,i=su;i!==null;){var a=i.next,s=Zx(i,e);s===0?(i.next=null,n===null?su=a:n.next=a,a===null&&(Qs=n)):(n=i,(t!==0||s&3)&&(ru=!0)),i=a}xl(t)}function Zx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-Fn(s),o=1<<r,l=a[r];l===-1?(!(o&n)||o&i)&&(a[r]=cE(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=xt,n=et,n=bu(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(ft===2||ft===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Yu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||ll(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Yu(i),op(n)){case 2:case 8:n=Iv;break;case 32:n=Vc;break;case 268435456:n=Hv;break;default:n=Vc}return i=Kx.bind(null,t),n=sp(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Yu(i),t.callbackPriority=2,t.callbackNode=null,2}function Kx(t,e){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Ou()&&t.callbackNode!==n)return null;var i=et;return i=bu(t,t===xt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(Px(t,i,e),Zx(t,Si()),t.callbackNode!=null&&t.callbackNode===n?Kx.bind(null,t):null)}function U_(t,e){if(Ou())return null;Px(t,e,!0)}function Bb(){qb(function(){ht&6?sp(Bv,zb):qx()})}function jp(){return ms===0&&(ms=Vv()),ms}function L_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_c(""+t)}function F_(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Ib(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var s=L_((a[bn]||null).action),r=i.submitter;r&&(e=(e=r[bn]||null)?L_(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new Mu("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ms!==0){var l=r?F_(a,r):new FormData(a);Lh(n,{pending:!0,data:l,method:a.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?F_(a,r):new FormData(a),Lh(n,{pending:!0,data:l,method:a.method,action:s},s,l))},currentTarget:a}]})}}for(var bf=0;bf<Sh.length;bf++){var Mf=Sh[bf],Hb=Mf.toLowerCase(),Vb=Mf[0].toUpperCase()+Mf.slice(1);fi(Hb,"on"+Vb)}fi(f0,"onAnimationEnd");fi(h0,"onAnimationIteration");fi(d0,"onAnimationStart");fi("dblclick","onDoubleClick");fi("focusin","onFocus");fi("focusout","onBlur");fi(ab,"onTransitionRun");fi(sb,"onTransitionStart");fi(rb,"onTransitionCancel");fi(p0,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Qx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){$c(d)}a.currentTarget=null,s=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;s=o,a.currentTarget=c;try{s(a)}catch(d){$c(d)}a.currentTarget=null,s=l}}}}function Ze(t,e){var n=e[ph];n===void 0&&(n=e[ph]=new Set);var i=t+"__bubble";n.has(i)||(Jx(e,t,2,!1),n.add(i))}function Tf(t,e,n){var i=0;e&&(i|=4),Jx(n,t,i,e)}var Il="_reactListening"+Math.random().toString(36).slice(2);function kp(t){if(!t[Il]){t[Il]=!0,Wv.forEach(function(n){n!=="selectionchange"&&(Gb.has(n)||Tf(n,!1,t),Tf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Il]||(e[Il]=!0,Tf("selectionchange",!1,e))}}function Jx(t,e,n,i){switch(uy(e)){case 2:var a=mM;break;case 8:a=_M;break;default:a=qp}n=a.bind(null,e,n,t),a=void 0,!vh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function Af(t,e,n,i,a){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=nr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=s=r;continue e}o=o.parentNode}}i=i.return}e0(function(){var c=s,d=up(n),f=[];e:{var h=m0.get(t);if(h!==void 0){var m=Mu,y=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":m=PE;break;case"focusin":y="focus",m=tf;break;case"focusout":y="blur",m=tf;break;case"beforeblur":case"afterblur":m=tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ME;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=IE;break;case f0:case h0:case d0:m=RE;break;case p0:m=VE;break;case"scroll":case"scrollend":m=EE;break;case"wheel":m=jE;break;case"copy":case"cut":case"paste":m=CE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=jm;break;case"toggle":case"beforetoggle":m=XE}var S=(e&4)!==0,_=!S&&(t==="scroll"||t==="scrollend"),u=S?h!==null?h+"Capture":null:h;S=[];for(var g=c,v;g!==null;){var x=g;if(v=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||v===null||u===null||(x=Io(g,u),x!=null&&S.push(Wo(g,x,v))),_)break;g=g.return}0<S.length&&(h=new m(h,y,null,n,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==gh&&(y=n.relatedTarget||n.fromElement)&&(nr(y)||y[kr]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?nr(y):null,y!==null&&(_=rl(y),S=y.tag,y!==_||S!==5&&S!==27&&S!==6)&&(y=null)):(m=null,y=c),m!==y)){if(S=Vm,x="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=jm,x="onPointerLeave",u="onPointerEnter",g="pointer"),_=m==null?h:go(m),v=y==null?h:go(y),h=new S(x,g+"leave",m,n,d),h.target=_,h.relatedTarget=v,x=null,nr(d)===c&&(S=new S(u,g+"enter",y,n,d),S.target=v,S.relatedTarget=_,x=S),_=x,m&&y)t:{for(S=m,u=y,g=0,v=S;v;v=Ls(v))g++;for(v=0,x=u;x;x=Ls(x))v++;for(;0<g-v;)S=Ls(S),g--;for(;0<v-g;)u=Ls(u),v--;for(;g--;){if(S===u||u!==null&&S===u.alternate)break t;S=Ls(S),u=Ls(u)}S=null}else S=null;m!==null&&O_(f,h,m,S,!1),y!==null&&_!==null&&O_(f,_,y,S,!0)}}e:{if(h=c?go(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=Ym;else if(Wm(h))if(r0)R=tb;else{R=$E;var C=JE}else m=h.nodeName,!m||m.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&cp(c.elementType)&&(R=Ym):R=eb;if(R&&(R=R(t,c))){s0(f,R,n,d);break e}C&&C(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&_h(h,"number",h.value)}switch(C=c?go(c):window,t){case"focusin":(Wm(C)||C.contentEditable==="true")&&(sr=C,xh=c,Mo=null);break;case"focusout":Mo=xh=sr=null;break;case"mousedown":yh=!0;break;case"contextmenu":case"mouseup":case"dragend":yh=!1,Jm(f,n,d);break;case"selectionchange":if(ib)break;case"keydown":case"keyup":Jm(f,n,d)}var A;if(dp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ar?i0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(n0&&n.locale!=="ko"&&(ar||N!=="onCompositionStart"?N==="onCompositionEnd"&&ar&&(A=t0()):(Ea=d,fp="value"in Ea?Ea.value:Ea.textContent,ar=!0)),C=ou(c,N),0<C.length&&(N=new Gm(N,t,null,n,d),f.push({event:N,listeners:C}),A?N.data=A:(A=a0(n),A!==null&&(N.data=A)))),(A=YE?qE(t,n):ZE(t,n))&&(N=ou(c,"onBeforeInput"),0<N.length&&(C=new Gm("onBeforeInput","beforeinput",null,n,d),f.push({event:C,listeners:N}),C.data=A)),Ib(f,t,c,n,d)}Qx(f,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ou(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,s=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||s===null||(a=Io(t,n),a!=null&&i.unshift(Wo(t,a,s)),a=Io(t,e),a!=null&&i.push(Wo(t,a,s))),t.tag===3)return i;t=t.return}return[]}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function O_(t,e,n,i,a){for(var s=e._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=Io(n,s),c!=null&&r.unshift(Wo(n,c,l))):a||(c=Io(n,s),c!=null&&r.push(Wo(n,c,l)))),n=n.return}r.length!==0&&t.push({event:e,listeners:r})}var jb=/\r\n?/g,kb=/\u0000|\uFFFD/g;function P_(t){return(typeof t=="string"?t:""+t).replace(jb,`
`).replace(kb,"")}function $x(t,e){return e=P_(e),P_(t)===e}function Pu(){}function dt(t,e,n,i,a,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||wr(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&wr(t,""+i);break;case"className":Ul(t,"class",i);break;case"tabIndex":Ul(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ul(t,n,i);break;case"style":$v(t,i,s);break;case"data":if(e!=="object"){Ul(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=_c(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&dt(t,e,"name",a.name,a,null),dt(t,e,"formEncType",a.formEncType,a,null),dt(t,e,"formMethod",a.formMethod,a,null),dt(t,e,"formTarget",a.formTarget,a,null)):(dt(t,e,"encType",a.encType,a,null),dt(t,e,"method",a.method,a,null),dt(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=_c(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Pu);break;case"onScroll":i!=null&&Ze("scroll",t);break;case"onScrollEnd":i!=null&&Ze("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=_c(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Ze("beforetoggle",t),Ze("toggle",t),mc(t,"popover",i);break;case"xlinkActuate":Ri(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ri(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ri(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ri(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ri(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ri(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ri(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":mc(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yE.get(n)||n,mc(t,n,i))}}function Xh(t,e,n,i,a,s){switch(n){case"style":$v(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(J(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(J(60));t.innerHTML=n}}break;case"children":typeof i=="string"?wr(t,i):(typeof i=="number"||typeof i=="bigint")&&wr(t,""+i);break;case"onScroll":i!=null&&Ze("scroll",t);break;case"onScrollEnd":i!=null&&Ze("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Pu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yv.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),s=t[bn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,a),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):mc(t,n,i)}}}function nn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ze("error",t),Ze("load",t);var i=!1,a=!1,s;for(s in n)if(n.hasOwnProperty(s)){var r=n[s];if(r!=null)switch(s){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(J(137,e));default:dt(t,e,s,r,n,null)}}a&&dt(t,e,"srcSet",n.srcSet,n,null),i&&dt(t,e,"src",n.src,n,null);return;case"input":Ze("invalid",t);var o=s=r=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":r=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(J(137,e));break;default:dt(t,e,i,d,n,null)}}Kv(t,s,o,l,c,r,a,!1),Gc(t);return;case"select":Ze("invalid",t),i=r=s=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:dt(t,e,a,o,n,null)}e=s,n=r,t.multiple=!!i,e!=null?_r(t,!!i,e,!1):n!=null&&_r(t,!!i,n,!0);return;case"textarea":Ze("invalid",t),s=a=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":a=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(J(91));break;default:dt(t,e,r,o,n,null)}Jv(t,i,a,s),Gc(t);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:dt(t,e,l,i,n,null)}return;case"dialog":Ze("beforetoggle",t),Ze("toggle",t),Ze("cancel",t),Ze("close",t);break;case"iframe":case"object":Ze("load",t);break;case"video":case"audio":for(i=0;i<Xo.length;i++)Ze(Xo[i],t);break;case"image":Ze("error",t),Ze("load",t);break;case"details":Ze("toggle",t);break;case"embed":case"source":case"link":Ze("error",t),Ze("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(J(137,e));default:dt(t,e,c,i,n,null)}return;default:if(cp(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Xh(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&dt(t,e,o,i,n,null))}function Xb(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,s=null,r=null,o=null,l=null,c=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(m)||dt(t,e,m,null,i,f)}}for(var h in i){var m=i[h];if(f=n[h],i.hasOwnProperty(h)&&(m!=null||f!=null))switch(h){case"type":s=m;break;case"name":a=m;break;case"checked":c=m;break;case"defaultChecked":d=m;break;case"value":r=m;break;case"defaultValue":o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(J(137,e));break;default:m!==f&&dt(t,e,h,m,i,f)}}mh(t,r,o,l,c,d,s,a);return;case"select":m=r=o=h=null;for(s in n)if(l=n[s],n.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":m=l;default:i.hasOwnProperty(s)||dt(t,e,s,null,i,l)}for(a in i)if(s=i[a],l=n[a],i.hasOwnProperty(a)&&(s!=null||l!=null))switch(a){case"value":h=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&dt(t,e,a,s,i,l)}e=o,n=r,i=m,h!=null?_r(t,!!n,h,!1):!!i!=!!n&&(e!=null?_r(t,!!n,e,!0):_r(t,!!n,n?[]:"",!1));return;case"textarea":m=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:dt(t,e,o,null,i,a)}for(r in i)if(a=i[r],s=n[r],i.hasOwnProperty(r)&&(a!=null||s!=null))switch(r){case"value":h=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(J(91));break;default:a!==s&&dt(t,e,r,a,i,s)}Qv(t,h,m);return;case"option":for(var y in n)if(h=n[y],n.hasOwnProperty(y)&&h!=null&&!i.hasOwnProperty(y))switch(y){case"selected":t.selected=!1;break;default:dt(t,e,y,null,i,h)}for(l in i)if(h=i[l],m=n[l],i.hasOwnProperty(l)&&h!==m&&(h!=null||m!=null))switch(l){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:dt(t,e,l,h,i,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!i.hasOwnProperty(S)&&dt(t,e,S,null,i,h);for(c in i)if(h=i[c],m=n[c],i.hasOwnProperty(c)&&h!==m&&(h!=null||m!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(J(137,e));break;default:dt(t,e,c,h,i,m)}return;default:if(cp(e)){for(var _ in n)h=n[_],n.hasOwnProperty(_)&&h!==void 0&&!i.hasOwnProperty(_)&&Xh(t,e,_,void 0,i,h);for(d in i)h=i[d],m=n[d],!i.hasOwnProperty(d)||h===m||h===void 0&&m===void 0||Xh(t,e,d,h,i,m);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&dt(t,e,u,null,i,h);for(f in i)h=i[f],m=n[f],!i.hasOwnProperty(f)||h===m||h==null&&m==null||dt(t,e,f,h,i,m)}var Wh=null,Yh=null;function lu(t){return t.nodeType===9?t:t.ownerDocument}function z_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ey(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rf=null;function Wb(){var t=window.event;return t&&t.type==="popstate"?t===Rf?!1:(Rf=t,!0):(Rf=null,!1)}var ty=typeof setTimeout=="function"?setTimeout:void 0,Yb=typeof clearTimeout=="function"?clearTimeout:void 0,B_=typeof Promise=="function"?Promise:void 0,qb=typeof queueMicrotask=="function"?queueMicrotask:typeof B_<"u"?function(t){return B_.resolve(null).then(t).catch(Zb)}:ty;function Zb(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function I_(t,e){var n=e,i=0,a=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(0<i&&8>i){n=i;var r=t.ownerDocument;if(n&1&&Oo(r.documentElement),n&2&&Oo(r.body),n&4)for(n=r.head,Oo(n),r=n.firstChild;r;){var o=r.nextSibling,l=r.nodeName;r[ul]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=o}}if(a===0){t.removeChild(s),Qo(e);return}a--}else n==="$"||n==="$?"||n==="$!"?a++:i=n.charCodeAt(0)-48;else i=0;n=s}while(n);Qo(e)}function Zh(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Zh(n),lp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Kb(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[ul])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Qb(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Kh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Jb(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Qh=null;function H_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function ny(t,e,n){switch(e=lu(n),t){case"html":if(t=e.documentElement,!t)throw Error(J(452));return t;case"head":if(t=e.head,!t)throw Error(J(453));return t;case"body":if(t=e.body,!t)throw Error(J(454));return t;default:throw Error(J(451))}}function Oo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);lp(t)}var Jn=new Map,V_=new Set;function cu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var na=rt.d;rt.d={f:$b,r:eM,D:tM,C:nM,L:iM,m:aM,X:rM,S:sM,M:oM};function $b(){var t=na.f(),e=Lu();return t||e}function eM(t){var e=Xr(t);e!==null&&e.tag===5&&e.type==="form"?Z0(e):na.r(t)}var qr=typeof document>"u"?null:document;function iy(t,e,n){var i=qr;if(i&&typeof e=="string"&&e){var a=Yn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),V_.has(a)||(V_.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),nn(e,"link",t),Zt(e),i.head.appendChild(e)))}}function tM(t){na.D(t),iy("dns-prefetch",t,null)}function nM(t,e){na.C(t,e),iy("preconnect",t,e)}function iM(t,e,n){na.L(t,e,n);var i=qr;if(i&&t&&e){var a='link[rel="preload"][as="'+Yn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Yn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Yn(n.imageSizes)+'"]')):a+='[href="'+Yn(t)+'"]';var s=a;switch(e){case"style":s=Pr(t);break;case"script":s=Zr(t)}Jn.has(s)||(t=yt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Jn.set(s,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(yl(s))||e==="script"&&i.querySelector(Sl(s))||(e=i.createElement("link"),nn(e,"link",t),Zt(e),i.head.appendChild(e)))}}function aM(t,e){na.m(t,e);var n=qr;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Yn(i)+'"][href="'+Yn(t)+'"]',s=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Zr(t)}if(!Jn.has(s)&&(t=yt({rel:"modulepreload",href:t},e),Jn.set(s,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sl(s)))return}i=n.createElement("link"),nn(i,"link",t),Zt(i),n.head.appendChild(i)}}}function sM(t,e,n){na.S(t,e,n);var i=qr;if(i&&t){var a=mr(i).hoistableStyles,s=Pr(t);e=e||"default";var r=a.get(s);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(yl(s)))o.loading=5;else{t=yt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Jn.get(s))&&Xp(t,n);var l=r=i.createElement("link");Zt(l),nn(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Tc(r,e,i)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(s,r)}}}function rM(t,e){na.X(t,e);var n=qr;if(n&&t){var i=mr(n).hoistableScripts,a=Zr(t),s=i.get(a);s||(s=n.querySelector(Sl(a)),s||(t=yt({src:t,async:!0},e),(e=Jn.get(a))&&Wp(t,e),s=n.createElement("script"),Zt(s),nn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function oM(t,e){na.M(t,e);var n=qr;if(n&&t){var i=mr(n).hoistableScripts,a=Zr(t),s=i.get(a);s||(s=n.querySelector(Sl(a)),s||(t=yt({src:t,async:!0,type:"module"},e),(e=Jn.get(a))&&Wp(t,e),s=n.createElement("script"),Zt(s),nn(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(a,s))}}function G_(t,e,n,i){var a=(a=Aa.current)?cu(a):null;if(!a)throw Error(J(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Pr(n.href),n=mr(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Pr(n.href);var s=mr(a).hoistableStyles,r=s.get(t);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=a.querySelector(yl(t)))&&!s._p&&(r.instance=s,r.state.loading=5),Jn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Jn.set(t,n),s||lM(a,t,n,r.state))),e&&i===null)throw Error(J(528,""));return r}if(e&&i!==null)throw Error(J(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zr(n),n=mr(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(J(444,t))}}function Pr(t){return'href="'+Yn(t)+'"'}function yl(t){return'link[rel="stylesheet"]['+t+"]"}function ay(t){return yt({},t,{"data-precedence":t.precedence,precedence:null})}function lM(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),nn(e,"link",n),Zt(e),t.head.appendChild(e))}function Zr(t){return'[src="'+Yn(t)+'"]'}function Sl(t){return"script[async]"+t}function j_(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Yn(n.href)+'"]');if(i)return e.instance=i,Zt(i),i;var a=yt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Zt(i),nn(i,"style",a),Tc(i,n.precedence,t),e.instance=i;case"stylesheet":a=Pr(n.href);var s=t.querySelector(yl(a));if(s)return e.state.loading|=4,e.instance=s,Zt(s),s;i=ay(n),(a=Jn.get(a))&&Xp(i,a),s=(t.ownerDocument||t).createElement("link"),Zt(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(s,"link",i),e.state.loading|=4,Tc(s,n.precedence,t),e.instance=s;case"script":return s=Zr(n.src),(a=t.querySelector(Sl(s)))?(e.instance=a,Zt(a),a):(i=n,(a=Jn.get(s))&&(i=yt({},n),Wp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Zt(a),nn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(J(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,Tc(i,n.precedence,t));return e.instance}function Tc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,s=a,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===e)s=o;else if(s!==a)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Xp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Wp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Ac=null;function k_(t,e,n){if(Ac===null){var i=new Map,a=Ac=new Map;a.set(n,i)}else a=Ac,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var s=n[a];if(!(s[ul]||s[on]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=i.get(r);o?o.push(s):i.set(r,[s])}}return i}function X_(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function cM(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function sy(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Yo=null;function uM(){}function fM(t,e,n){if(Yo===null)throw Error(J(475));var i=Yo;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var a=Pr(n.href),s=t.querySelector(yl(a));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=uu.bind(i),t.then(i,i)),e.state.loading|=4,e.instance=s,Zt(s);return}s=t.ownerDocument||t,n=ay(n),(a=Jn.get(a))&&Xp(n,a),s=s.createElement("link"),Zt(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),nn(s,"link",n),e.instance=s}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(i.count++,e=uu.bind(i),t.addEventListener("load",e),t.addEventListener("error",e))}}function hM(){if(Yo===null)throw Error(J(475));var t=Yo;return t.stylesheets&&t.count===0&&Jh(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Jh(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function uu(){if(this.count--,this.count===0){if(this.stylesheets)Jh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fu=null;function Jh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fu=new Map,e.forEach(dM,t),fu=null,uu.call(t))}function dM(t,e){if(!(e.state.loading&4)){var n=fu.get(t);if(n)var i=n.get(null);else{n=new Map,fu.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<a.length;s++){var r=a[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}a=e.instance,r=a.getAttribute("data-precedence"),s=n.get(r)||i,s===i&&n.set(null,a),n.set(r,a),this.count++,i=uu.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),s?s.parentNode.insertBefore(a,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var qo={$$typeof:Bi,Provider:null,Consumer:null,_currentValue:cs,_currentValue2:cs,_threadCount:0};function pM(t,e,n,i,a,s,r,o){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.hiddenUpdates=qu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ry(t,e,n,i,a,s,r,o,l,c,d,f){return t=new pM(t,e,n,r,o,l,c,f),e=1,s===!0&&(e|=24),s=Un(3,null,null,e),t.current=s,s.stateNode=t,e=yp(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},Ep(s),t}function oy(t){return t?(t=lr,t):lr}function ly(t,e,n,i,a,s){a=oy(a),i.context===null?i.context=a:i.pendingContext=a,i=Ra(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=wa(t,i,e),n!==null&&(Pn(n,t,e),Ro(n,t,e))}function W_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yp(t,e){W_(t,e),(t=t.alternate)&&W_(t,e)}function cy(t){if(t.tag===13){var e=Wr(t,67108864);e!==null&&Pn(e,t,67108864),Yp(t,67108864)}}var hu=!0;function mM(t,e,n,i){var a=Ue.T;Ue.T=null;var s=rt.p;try{rt.p=2,qp(t,e,n,i)}finally{rt.p=s,Ue.T=a}}function _M(t,e,n,i){var a=Ue.T;Ue.T=null;var s=rt.p;try{rt.p=8,qp(t,e,n,i)}finally{rt.p=s,Ue.T=a}}function qp(t,e,n,i){if(hu){var a=$h(i);if(a===null)Af(t,e,i,du,n),Y_(t,i);else if(vM(a,t,e,n,i))i.stopPropagation();else if(Y_(t,i),e&4&&-1<gM.indexOf(t)){for(;a!==null;){var s=Xr(a);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=ts(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Fn(r);o.entanglements[1]|=l,r&=~l}Ti(s),!(ht&6)&&(iu=Si()+500,xl(0))}}break;case 13:o=Wr(s,2),o!==null&&Pn(o,s,2),Lu(),Yp(s,2)}if(s=$h(i),s===null&&Af(t,e,i,du,n),s===a)break;a=s}a!==null&&i.stopPropagation()}else Af(t,e,i,null,n)}}function $h(t){return t=up(t),Zp(t)}var du=null;function Zp(t){if(du=null,t=nr(t),t!==null){var e=rl(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Fv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return du=t,null}function uy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nE()){case Bv:return 2;case Iv:return 8;case Vc:case iE:return 32;case Hv:return 268435456;default:return 32}default:return 32}}var ed=!1,Da=null,Ua=null,La=null,Zo=new Map,Ko=new Map,xa=[],gM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y_(t,e){switch(t){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function ro(t,e,n,i,a,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[a]},e!==null&&(e=Xr(e),e!==null&&cy(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function vM(t,e,n,i,a){switch(e){case"focusin":return Da=ro(Da,t,e,n,i,a),!0;case"dragenter":return Ua=ro(Ua,t,e,n,i,a),!0;case"mouseover":return La=ro(La,t,e,n,i,a),!0;case"pointerover":var s=a.pointerId;return Zo.set(s,ro(Zo.get(s)||null,t,e,n,i,a)),!0;case"gotpointercapture":return s=a.pointerId,Ko.set(s,ro(Ko.get(s)||null,t,e,n,i,a)),!0}return!1}function fy(t){var e=nr(t.target);if(e!==null){var n=rl(e);if(n!==null){if(e=n.tag,e===13){if(e=Fv(n),e!==null){t.blockedOn=e,fE(t.priority,function(){if(n.tag===13){var i=On();i=rp(i);var a=Wr(n,i);a!==null&&Pn(a,n,i),Yp(n,i)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$h(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);gh=i,n.target.dispatchEvent(i),gh=null}else return e=Xr(n),e!==null&&cy(e),t.blockedOn=n,!1;e.shift()}return!0}function q_(t,e,n){Rc(t)&&n.delete(e)}function xM(){ed=!1,Da!==null&&Rc(Da)&&(Da=null),Ua!==null&&Rc(Ua)&&(Ua=null),La!==null&&Rc(La)&&(La=null),Zo.forEach(q_),Ko.forEach(q_)}function Hl(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,xM)))}var Vl=null;function Z_(t){Vl!==t&&(Vl=t,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Zp(i||n)===null)continue;break}var s=Xr(n);s!==null&&(t.splice(e,3),e-=3,Lh(s,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function Qo(t){function e(l){return Hl(l,t)}Da!==null&&Hl(Da,t),Ua!==null&&Hl(Ua,t),La!==null&&Hl(La,t),Zo.forEach(e),Ko.forEach(e);for(var n=0;n<xa.length;n++){var i=xa[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<xa.length&&(n=xa[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&xa.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],s=n[i+1],r=a[bn]||null;if(typeof s=="function")r||Z_(n);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(a=s,r=s[bn]||null)o=r.formAction;else if(Zp(a)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Z_(n)}}}function Kp(t){this._internalRoot=t}zu.prototype.render=Kp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));var n=e.current,i=On();ly(n,i,t,e,null,null)};zu.prototype.unmount=Kp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ly(t.current,2,null,t,null,null),Lu(),e[kr]=null}};function zu(t){this._internalRoot=t}zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xa.length&&e!==0&&e<xa[n].priority;n++);xa.splice(n,0,t),n===0&&fy(t)}};var K_=Uv.version;if(K_!=="19.1.0")throw Error(J(527,K_,"19.1.0"));rt.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=ZS(e),t=t!==null?Ov(t):null,t=t===null?null:t.stateNode,t};var yM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Ue,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{ol=Gl.inject(yM),Ln=Gl}catch{}}Su.createRoot=function(t,e){if(!Lv(t))throw Error(J(299));var n=!1,i="",a=rx,s=ox,r=lx,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=ry(t,1,!1,null,null,n,i,a,s,r,o,null),t[kr]=e.current,kp(t),new Kp(e)};Su.hydrateRoot=function(t,e,n){if(!Lv(t))throw Error(J(299));var i=!1,a="",s=rx,r=ox,o=lx,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),e=ry(t,1,!0,e,n??null,i,a,s,r,o,l,c),e.context=oy(null),n=e.current,i=On(),i=rp(i),a=Ra(i),a.callback=null,wa(n,a,i),n=i,e.current.lanes=n,cl(e,n),Ti(e),t[kr]=e.current,kp(t),new zu(e)};Su.version="19.1.0";function hy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hy)}catch(t){console.error(t)}}hy(),Av.exports=Su;var SM=Av.exports;const EM=mv(SM);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Jo.apply(this,arguments)}var Ta;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ta||(Ta={}));const Q_="popstate";function bM(t){t===void 0&&(t={});function e(a,s){let{pathname:r="/",search:o="",hash:l=""}=As(a.location.hash.substr(1));return!r.startsWith("/")&&!r.startsWith(".")&&(r="/"+r),td("",{pathname:r,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(a,s){let r=a.document.querySelector("base"),o="";if(r&&r.getAttribute("href")){let l=a.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:pu(s))}function i(a,s){Qp(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return TM(e,n,i,t)}function Bt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MM(){return Math.random().toString(36).substr(2,8)}function J_(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,i){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:n,key:e&&e.key||i||MM()})}function pu(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function TM(t,e,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:s=!1}=i,r=a.history,o=Ta.Pop,l=null,c=d();c==null&&(c=0,r.replaceState(Jo({},r.state,{idx:c}),""));function d(){return(r.state||{idx:null}).idx}function f(){o=Ta.Pop;let _=d(),u=_==null?null:_-c;c=_,l&&l({action:o,location:S.location,delta:u})}function h(_,u){o=Ta.Push;let g=td(S.location,_,u);n&&n(g,_),c=d()+1;let v=J_(g,c),x=S.createHref(g);try{r.pushState(v,"",x)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(x)}s&&l&&l({action:o,location:S.location,delta:1})}function m(_,u){o=Ta.Replace;let g=td(S.location,_,u);n&&n(g,_),c=d();let v=J_(g,c),x=S.createHref(g);r.replaceState(v,"",x),s&&l&&l({action:o,location:S.location,delta:0})}function y(_){let u=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof _=="string"?_:pu(_);return g=g.replace(/ $/,"%20"),Bt(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let S={get action(){return o},get location(){return t(a,r)},listen(_){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Q_,f),l=_,()=>{a.removeEventListener(Q_,f),l=null}},createHref(_){return e(a,_)},createURL:y,encodeLocation(_){let u=y(_);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:m,go(_){return r.go(_)}};return S}var $_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($_||($_={}));function AM(t,e,n){return n===void 0&&(n="/"),RM(t,e,n)}function RM(t,e,n,i){let a=typeof e=="string"?As(e):e,s=Jp(a.pathname||"/",n);if(s==null)return null;let r=dy(t);wM(r);let o=null;for(let l=0;o==null&&l<r.length;++l){let c=HM(s);o=zM(r[l],c)}return o}function dy(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(s,r,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:r,route:s};l.relativePath.startsWith("/")&&(Bt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Fa([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),dy(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:OM(c,s.index),routesMeta:d})};return t.forEach((s,r)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))a(s,r);else for(let l of py(s.path))a(s,r,l)}),e}function py(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return a?[s,""]:[s];let r=py(i.join("/")),o=[];return o.push(...r.map(l=>l===""?s:[s,l].join("/"))),a&&o.push(...r),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function wM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const CM=/^:[\w-]+$/,NM=3,DM=2,UM=1,LM=10,FM=-2,eg=t=>t==="*";function OM(t,e){let n=t.split("/"),i=n.length;return n.some(eg)&&(i+=FM),e&&(i+=DM),n.filter(a=>!eg(a)).reduce((a,s)=>a+(CM.test(s)?NM:s===""?UM:LM),i)}function PM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function zM(t,e,n){let{routesMeta:i}=t,a={},s="/",r=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=BM({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(a,f.params),r.push({params:a,pathname:Fa([s,f.pathname]),pathnameBase:kM(Fa([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=Fa([s,f.pathnameBase]))}return r}function BM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=IM(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let s=a[0],r=s.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:m}=d;if(h==="*"){let S=o[f]||"";r=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const y=o[f];return m&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:r,pattern:t}}function IM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function HM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function VM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:GM(n,e):e,search:XM(i),hash:WM(a)}}function GM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function wf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function my(t,e){let n=jM(t);return e?n.map((i,a)=>a===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function _y(t,e,n,i){i===void 0&&(i=!1);let a;typeof t=="string"?a=As(t):(a=Jo({},t),Bt(!a.pathname||!a.pathname.includes("?"),wf("?","pathname","search",a)),Bt(!a.pathname||!a.pathname.includes("#"),wf("#","pathname","hash",a)),Bt(!a.search||!a.search.includes("#"),wf("#","search","hash",a)));let s=t===""||a.pathname==="",r=s?"/":a.pathname,o;if(r==null)o=n;else{let f=e.length-1;if(!i&&r.startsWith("..")){let h=r.split("/");for(;h[0]==="..";)h.shift(),f-=1;a.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=VM(a,o),c=r&&r!=="/"&&r.endsWith("/"),d=(s||r===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Fa=t=>t.join("/").replace(/\/\/+/g,"/"),kM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function YM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gy=["post","put","patch","delete"];new Set(gy);const qM=["get",...gy];new Set(qM);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$o.apply(this,arguments)}const $p=$.createContext(null),ZM=$.createContext(null),Rs=$.createContext(null),Bu=$.createContext(null),ws=$.createContext({outlet:null,matches:[],isDataRoute:!1}),vy=$.createContext(null);function KM(t,e){let{relative:n}=e===void 0?{}:e;El()||Bt(!1);let{basename:i,navigator:a}=$.useContext(Rs),{hash:s,pathname:r,search:o}=yy(t,{relative:n}),l=r;return i!=="/"&&(l=r==="/"?i:Fa([i,r])),a.createHref({pathname:l,search:o,hash:s})}function El(){return $.useContext(Bu)!=null}function Iu(){return El()||Bt(!1),$.useContext(Bu).location}function xy(t){$.useContext(Rs).static||$.useLayoutEffect(t)}function QM(){let{isDataRoute:t}=$.useContext(ws);return t?u1():JM()}function JM(){El()||Bt(!1);let t=$.useContext($p),{basename:e,future:n,navigator:i}=$.useContext(Rs),{matches:a}=$.useContext(ws),{pathname:s}=Iu(),r=JSON.stringify(my(a,n.v7_relativeSplatPath)),o=$.useRef(!1);return xy(()=>{o.current=!0}),$.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=_y(c,JSON.parse(r),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Fa([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,r,s,t])}function yy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=$.useContext(Rs),{matches:a}=$.useContext(ws),{pathname:s}=Iu(),r=JSON.stringify(my(a,i.v7_relativeSplatPath));return $.useMemo(()=>_y(t,JSON.parse(r),s,n==="path"),[t,r,s,n])}function $M(t,e){return e1(t,e)}function e1(t,e,n,i){El()||Bt(!1);let{navigator:a,static:s}=$.useContext(Rs),{matches:r}=$.useContext(ws),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=Iu(),f;if(e){var h;let u=typeof e=="string"?As(e):e;c==="/"||(h=u.pathname)!=null&&h.startsWith(c)||Bt(!1),f=u}else f=d;let m=f.pathname||"/",y=m;if(c!=="/"){let u=c.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(u.length).join("/")}let S=AM(t,{pathname:y}),_=s1(S&&S.map(u=>Object.assign({},u,{params:Object.assign({},l,u.params),pathname:Fa([c,a.encodeLocation?a.encodeLocation(u.pathname).pathname:u.pathname]),pathnameBase:u.pathnameBase==="/"?c:Fa([c,a.encodeLocation?a.encodeLocation(u.pathnameBase).pathname:u.pathnameBase])})),r,n,i);return e&&_?$.createElement(Bu.Provider,{value:{location:$o({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ta.Pop}},_):_}function t1(){let t=c1(),e=YM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:a},n):null,null)}const n1=$.createElement(t1,null);class i1 extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(ws.Provider,{value:this.props.routeContext},$.createElement(vy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a1(t){let{routeContext:e,match:n,children:i}=t,a=$.useContext($p);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(ws.Provider,{value:e},i)}function s1(t,e,n,i){var a;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,o=(a=n)==null?void 0:a.errors;if(o!=null){let d=r.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||Bt(!1),r=r.slice(0,Math.min(r.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<r.length;d++){let f=r[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:m}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){l=!0,c>=0?r=r.slice(0,c+1):r=[r[0]];break}}}return r.reduceRight((d,f,h)=>{let m,y=!1,S=null,_=null;n&&(m=o&&f.route.id?o[f.route.id]:void 0,S=f.route.errorElement||n1,l&&(c<0&&h===0?(f1("route-fallback"),y=!0,_=null):c===h&&(y=!0,_=f.route.hydrateFallbackElement||null)));let u=e.concat(r.slice(0,h+1)),g=()=>{let v;return m?v=S:y?v=_:f.route.Component?v=$.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=d,$.createElement(a1,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?$.createElement(i1,{location:n.location,revalidation:n.revalidation,component:S,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Sy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Sy||{}),Ey=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ey||{});function r1(t){let e=$.useContext($p);return e||Bt(!1),e}function o1(t){let e=$.useContext(ZM);return e||Bt(!1),e}function l1(t){let e=$.useContext(ws);return e||Bt(!1),e}function by(t){let e=l1(),n=e.matches[e.matches.length-1];return n.route.id||Bt(!1),n.route.id}function c1(){var t;let e=$.useContext(vy),n=o1(),i=by();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function u1(){let{router:t}=r1(Sy.UseNavigateStable),e=by(Ey.UseNavigateStable),n=$.useRef(!1);return xy(()=>{n.current=!0}),$.useCallback(function(a,s){s===void 0&&(s={}),n.current&&(typeof a=="number"?t.navigate(a):t.navigate(a,$o({fromRouteId:e},s)))},[t,e])}const tg={};function f1(t,e,n){tg[t]||(tg[t]=!0)}function h1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function wc(t){Bt(!1)}function d1(t){let{basename:e="/",children:n=null,location:i,navigationType:a=Ta.Pop,navigator:s,static:r=!1,future:o}=t;El()&&Bt(!1);let l=e.replace(/^\/*/,"/"),c=$.useMemo(()=>({basename:l,navigator:s,static:r,future:$o({v7_relativeSplatPath:!1},o)}),[l,o,s,r]);typeof i=="string"&&(i=As(i));let{pathname:d="/",search:f="",hash:h="",state:m=null,key:y="default"}=i,S=$.useMemo(()=>{let _=Jp(d,l);return _==null?null:{location:{pathname:_,search:f,hash:h,state:m,key:y},navigationType:a}},[l,d,f,h,m,y,a]);return S==null?null:$.createElement(Rs.Provider,{value:c},$.createElement(Bu.Provider,{children:n,value:S}))}function p1(t){let{children:e,location:n}=t;return $M(nd(e),n)}new Promise(()=>{});function nd(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(i,a)=>{if(!$.isValidElement(i))return;let s=[...e,a];if(i.type===$.Fragment){n.push.apply(n,nd(i.props.children,s));return}i.type!==wc&&Bt(!1),!i.props.index||!i.props.children||Bt(!1);let r={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(r.children=nd(i.props.children,s)),n.push(r)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function id(){return id=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},id.apply(this,arguments)}function m1(t,e){if(t==null)return{};var n={},i=Object.keys(t),a,s;for(s=0;s<i.length;s++)a=i[s],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function _1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function g1(t,e){return t.button===0&&(!e||e==="_self")&&!_1(t)}const v1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],x1="6";try{window.__reactRouterVersion=x1}catch{}const y1="startTransition",ng=GS[y1];function S1(t){let{basename:e,children:n,future:i,window:a}=t,s=$.useRef();s.current==null&&(s.current=bM({window:a,v5Compat:!0}));let r=s.current,[o,l]=$.useState({action:r.action,location:r.location}),{v7_startTransition:c}=i||{},d=$.useCallback(f=>{c&&ng?ng(()=>l(f)):l(f)},[l,c]);return $.useLayoutEffect(()=>r.listen(d),[r,d]),$.useEffect(()=>h1(i),[i]),$.createElement(d1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:r,future:i})}const E1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oa=$.forwardRef(function(e,n){let{onClick:i,relative:a,reloadDocument:s,replace:r,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=m1(e,v1),{basename:m}=$.useContext(Rs),y,S=!1;if(typeof c=="string"&&b1.test(c)&&(y=c,E1))try{let v=new URL(window.location.href),x=c.startsWith("//")?new URL(v.protocol+c):new URL(c),R=Jp(x.pathname,m);x.origin===v.origin&&R!=null?c=R+x.search+x.hash:S=!0}catch{}let _=KM(c,{relative:a}),u=M1(c,{replace:r,state:o,target:l,preventScrollReset:d,relative:a,viewTransition:f});function g(v){i&&i(v),v.defaultPrevented||u(v)}return $.createElement("a",id({},h,{href:y||_,onClick:S||s?i:g,ref:n,target:l}))});var ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ig||(ig={}));var ag;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ag||(ag={}));function M1(t,e){let{target:n,replace:i,state:a,preventScrollReset:s,relative:r,viewTransition:o}=e===void 0?{}:e,l=QM(),c=Iu(),d=yy(t,{relative:r});return $.useCallback(f=>{if(g1(f,n)){f.preventDefault();let h=i!==void 0?i:pu(c)===pu(d);l(t,{replace:h,state:a,preventScrollReset:s,relative:r,viewTransition:o})}},[c,l,d,i,a,n,t,s,r,o])}const T1=()=>{const[t,e]=$.useState(!1),n=$.useCallback(()=>{window.requestAnimationFrame(()=>{window.scrollY>50?e(!0):e(!1)})},[]);return $.useEffect(()=>(window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n)}),[n]),p.jsx("header",{className:`fixed w-full z-50 transition-all duration-300 backdrop-blur-md ${t?"bg-black/80 backdrop-blur-md":"bg-transparent"}`,children:p.jsxs("div",{className:"container h-20 mx-auto px-6 py-3 flex justify-between items-center",children:[p.jsxs(Oa,{to:"/",className:"flex items-center gap-2.5",children:[p.jsx("img",{src:"./assets/favicon-DB2QRhoi.ico",alt:"Audio Visualizer Logo",className:"h-8 w-auto object-contain"}),p.jsx("span",{className:"font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500",children:"Audio Visualizer"})]}),p.jsxs("nav",{className:"hidden md:flex items-center gap-4",children:[p.jsx(Oa,{to:"/basic",className:"text-white/80 hover:text-white font-medium transition-colors hover:scale-105 transform duration-200",children:"Basic Example"}),p.jsx(Oa,{to:"/advanced",className:"text-white/80 hover:text-white font-medium transition-colors hover:scale-105 transform duration-200",children:"Advanced Example"}),p.jsxs("a",{href:"https://github.com/ampcome/audio-visualizer",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-all duration-300",children:[p.jsx("svg",{className:"h-5 w-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),p.jsx("span",{children:"GitHub"})]})]})]})})},A1=()=>p.jsxs("footer",{className:"relative bg-black text-gray-400 pt-16 pb-10",children:[p.jsx("div",{className:"absolute inset-0 opacity-5",children:p.jsx("div",{className:"absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"})}),p.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 pb-10 border-b border-gray-800",children:[p.jsxs("div",{children:[p.jsxs(Oa,{to:"/",className:"flex items-center space-x-3 mb-6",children:[p.jsx("img",{src:"./assets/favicon-DB2QRhoi.ico",alt:"Audio Visualizer Logo",className:"h-8 w-auto"}),p.jsx("span",{className:"font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-fuchsia-500",children:"Audio Visualizer"})]}),p.jsx("p",{className:"text-gray-500 max-w-md",children:"A powerful 3D audio visualization component for React applications, bringing your audio to life with stunning visual effects."})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-8",children:[p.jsxs("div",{children:[p.jsx("h4",{className:"text-white font-semibold mb-4",children:"Quick Links"}),p.jsxs("ul",{className:"space-y-2",children:[p.jsx("li",{children:p.jsx(Oa,{to:"/basic",className:"text-gray-400 hover:text-white transition-colors",children:"Basic Example"})}),p.jsx("li",{children:p.jsx(Oa,{to:"/advanced",className:"text-gray-400 hover:text-white transition-colors",children:"Advanced Example"})})]})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-white font-semibold mb-4",children:"Resources"}),p.jsxs("ul",{className:"space-y-2",children:[p.jsx("li",{children:p.jsxs("a",{href:"https://github.com/ampcome/audio-visualizer",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors flex items-center space-x-2",children:[p.jsx("svg",{className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:p.jsx("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"})}),p.jsx("span",{children:"GitHub Repository"})]})}),p.jsx("li",{children:p.jsx("a",{href:"https://www.ampcome.com/",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors",children:"Ampcome Website"})})]})]})]})]}),p.jsxs("div",{className:"flex flex-col-reverse md:flex-row justify-between items-center gap-4",children:[p.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," Audio Visualizer. All rights reserved."]}),p.jsxs("p",{className:"text-sm",children:["This package is inspired by"," ",p.jsx("a",{href:"https://github.com/WaelYasmina/audiovisualizer",target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-white transition-colors font-medium",children:"audiovisualizer"})]})]})]})]}),R1=()=>p.jsxs("section",{className:"py-20 md:py-28 relative h-full -mb-12",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black to-neutral-950 z-0"}),p.jsxs("div",{className:"absolute w-full h-full opacity-10 z-0",children:[p.jsx("div",{className:"absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-rose-500 rounded-full filter blur-[100px]"}),p.jsx("div",{className:"absolute bottom-1/3 left-1/4 w-1/4 h-1/4 bg-fuchsia-500 rounded-full filter blur-[100px]"})]}),p.jsx("div",{className:"container mx-auto px-6 relative z-10",children:p.jsx("div",{className:"max-w-4xl mx-auto bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-md p-10 rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(59,130,246,0.1)] transform hover:scale-[1.01] transition-all duration-500",children:p.jsxs("div",{className:"flex flex-col items-center justify-center",children:[p.jsx("div",{className:"text-center md:text-left",children:p.jsxs("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-2",children:["Made with ",p.jsx("span",{className:"text-red-400",children:"♥"})," by"]})}),p.jsx("a",{href:"https://www.ampcome.com/",target:"_blank",rel:"noopener noreferrer",className:"group flex items-center justify-center p-5 rounded-2xl transition-all duration-300",children:p.jsx("div",{className:"relative overflow-hidden rounded-xl",children:p.jsx("img",{src:"./assets/ampcome.avif",alt:"Ampcome Logo",className:"h-12 w-auto relative z-10 object-contain"})})}),p.jsx("p",{className:"text-gray-400",children:"Crafted with precision and care"})]})})})]}),em=({children:t})=>p.jsxs("main",{className:"min-h-screen flex flex-col bg-black text-white overflow-auto",children:[p.jsx(T1,{}),p.jsx("div",{className:"flex-1 w-full",children:t}),p.jsx(R1,{}),p.jsx(A1,{})]}),w1=()=>p.jsx(em,{children:p.jsxs("section",{className:"relative min-h-screen overflow-hidden bg-black text-white pt-32 pb-20",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-black/20 to-black z-0"}),p.jsxs("div",{className:"absolute inset-0 z-0 opacity-30",children:[p.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse",style:{left:"10%",top:"20%",animationDelay:"0.5s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-3 h-3 bg-neutral-800 rounded-full animate-pulse",style:{left:"25%",top:"15%",animationDelay:"1.5s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse",style:{left:"45%",top:"30%",animationDelay:"0.7s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 bg-neutral-800 rounded-full animate-pulse",style:{left:"70%",top:"25%",animationDelay:"2s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-3 h-3 bg-neutral-800 rounded-full animate-pulse",style:{left:"85%",top:"10%",animationDelay:"1s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse",style:{left:"15%",top:"60%",animationDelay:"1.2s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-3 h-3 bg-neutral-800 rounded-full animate-pulse",style:{left:"35%",top:"70%",animationDelay:"0.3s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-neutral-800 rounded-full animate-pulse",style:{left:"65%",top:"65%",animationDelay:"1.7s"}}),p.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 bg-neutral-800 rounded-full animate-pulse",style:{left:"90%",top:"80%",animationDelay:"0.9s"}})]}),p.jsx("div",{className:"container mx-auto px-6 py-10 relative z-10",children:p.jsxs("div",{className:"flex flex-col items-center justify-between gap-20",children:[p.jsxs("div",{className:"w-full flex flex-col items-center space-y-8",children:[p.jsxs("div",{className:"space-y-2 flex flex-col items-center",children:[p.jsx("div",{className:"text-center mx-auto inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-sm font-medium text-rose-300 mb-4",children:"Powered by Three.js"}),p.jsxs("h1",{className:"text-4xl text-center md:text-6xl lg:text-7xl font-bold leading-tight",children:[p.jsx("span",{className:"block bg-clip-text text-transparent bg-gradient-to-r from-red-100 via-rose-200 to-fuchsia-300",children:"React 3D Audio"}),p.jsx("span",{className:"block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-100 via-rose-200 to-fuchsia-300",children:"Visualizer"})]})]}),p.jsx("p",{className:"w-full text-lg text-center md:w-1/2 md:text-2xl text-gray-500 leading-relaxed",children:"A stunning 3D audio visualizer component for React applications using Three.js"}),p.jsxs("div",{className:"w-full flex flex-col sm:flex-row justify-center items-center gap-5 pt-4",children:[p.jsxs(Oa,{to:"/basic",className:"group relative px-8 py-4 bg-gradient-to-r from-neutral-600 to-neutral-700 overflow-hidden rounded-xl text-white font-medium text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.05)] hover:scale-105",children:[p.jsx("span",{className:"relative z-10",children:"Try Basic Example"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-rose-600 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),p.jsxs(Oa,{to:"/advanced",className:"group relative px-8 py-4 bg-gradient-to-r from-neutral-600 to-neutral-700 overflow-hidden rounded-xl text-white font-medium text-center transition-all duration-300 hover:shadow-[0_0_25px_rgba(147,51,234,0.05)] hover:scale-105",children:[p.jsx("span",{className:"relative z-10",children:"Try Advanced Example"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-rose-600 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]})]})]}),p.jsxs("div",{className:"w-full lg:w-2/3 relative",children:[p.jsx("div",{className:"absolute -inset-0.5 bg-gradient-to-r from-neutral-900 to-neutral-900 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"}),p.jsx("div",{className:"relative bg-neutral-950 rounded-2xl overflow-hidden shadow-[0_0_0px_rgba(59,130,246,0.0)]",children:p.jsx("img",{src:"./assets/visualizer.gif",alt:"Audio Visualizer Demo",className:"w-full rounded-2xl transform transition-transform duration-500 hover:scale-105"})})]})]})})]})});function C1(t){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=t,document.head.appendChild(e),t}}function hr(t,e){var n=t.__state.conversionName.toString(),i=Math.round(t.r),a=Math.round(t.g),s=Math.round(t.b),r=t.a,o=Math.round(t.h),l=t.s.toFixed(1),c=t.v.toFixed(1);if(e||n==="THREE_CHAR_HEX"||n==="SIX_CHAR_HEX"){for(var d=t.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(n==="CSS_RGB")return"rgb("+i+","+a+","+s+")";if(n==="CSS_RGBA")return"rgba("+i+","+a+","+s+","+r+")";if(n==="HEX")return"0x"+t.hex.toString(16);if(n==="RGB_ARRAY")return"["+i+","+a+","+s+"]";if(n==="RGBA_ARRAY")return"["+i+","+a+","+s+","+r+"]";if(n==="RGB_OBJ")return"{r:"+i+",g:"+a+",b:"+s+"}";if(n==="RGBA_OBJ")return"{r:"+i+",g:"+a+",b:"+s+",a:"+r+"}";if(n==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(n==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var sg=Array.prototype.forEach,oo=Array.prototype.slice,Q={BREAK:{},extend:function(e){return this.each(oo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(n[a])||(e[a]=n[a])}).bind(this))},this),e},defaults:function(e){return this.each(oo.call(arguments,1),function(n){var i=this.isObject(n)?Object.keys(n):[];i.forEach((function(a){this.isUndefined(e[a])&&(e[a]=n[a])}).bind(this))},this),e},compose:function(){var e=oo.call(arguments);return function(){for(var n=oo.call(arguments),i=e.length-1;i>=0;i--)n=[e[i].apply(this,n)];return n[0]}},each:function(e,n,i){if(e){if(sg&&e.forEach&&e.forEach===sg)e.forEach(n,i);else if(e.length===e.length+0){var a=void 0,s=void 0;for(a=0,s=e.length;a<s;a++)if(a in e&&n.call(i,e[a],a)===this.BREAK)return}else for(var r in e)if(n.call(i,e[r],r)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,n,i){var a=void 0;return function(){var s=this,r=arguments;function o(){a=null,i||e.apply(s,r)}var l=i||!a;clearTimeout(a),a=setTimeout(o,n),l&&e.apply(s,r)}},toArray:function(e){return e.toArray?e.toArray():oo.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(t){function e(n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){return isNaN(t)}),isArray:Array.isArray||function(t){return t.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},N1=[{litmus:Q.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString()+n[1].toString()+n[2].toString()+n[2].toString()+n[3].toString()+n[3].toString(),0)}},write:hr},SIX_CHAR_HEX:{read:function(e){var n=e.match(/^#([A-F0-9]{6})$/i);return n===null?!1:{space:"HEX",hex:parseInt("0x"+n[1].toString(),0)}},write:hr},CSS_RGB:{read:function(e){var n=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3])}},write:hr},CSS_RGBA:{read:function(e){var n=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return n===null?!1:{space:"RGB",r:parseFloat(n[1]),g:parseFloat(n[2]),b:parseFloat(n[3]),a:parseFloat(n[4])}},write:hr}}},{litmus:Q.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Q.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Q.isObject,conversions:{RGBA_OBJ:{read:function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)&&Q.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Q.isNumber(e.r)&&Q.isNumber(e.g)&&Q.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)&&Q.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Q.isNumber(e.h)&&Q.isNumber(e.s)&&Q.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],lo=void 0,jl=void 0,ad=function(){jl=!1;var e=arguments.length>1?Q.toArray(arguments):arguments[0];return Q.each(N1,function(n){if(n.litmus(e))return Q.each(n.conversions,function(i,a){if(lo=i.read(e),jl===!1&&lo!==!1)return jl=lo,lo.conversionName=a,lo.conversion=i,Q.BREAK}),Q.BREAK}),jl},rg=void 0,mu={hsv_to_rgb:function(e,n,i){var a=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),r=i*(1-n),o=i*(1-s*n),l=i*(1-(1-s)*n),c=[[i,l,r],[o,i,r],[r,i,l],[r,o,i],[l,r,i],[i,r,o]][a];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,n,i){var a=Math.min(e,n,i),s=Math.max(e,n,i),r=s-a,o=void 0,l=void 0;if(s!==0)l=r/s;else return{h:NaN,s:0,v:0};return e===s?o=(n-i)/r:n===s?o=2+(i-e)/r:o=4+(e-n)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(e,n,i){var a=this.hex_with_component(0,2,e);return a=this.hex_with_component(a,1,n),a=this.hex_with_component(a,0,i),a},component_from_hex:function(e,n){return e>>n*8&255},hex_with_component:function(e,n,i){return i<<(rg=n*8)|e&~(255<<rg)}},D1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hi=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},di=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Ha=function t(e,n,i){e===null&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(a===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:t(s,n,i)}else{if("value"in a)return a.value;var r=a.get;return r===void 0?void 0:r.call(i)}},ka=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Xa=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Jt=function(){function t(){if(hi(this,t),this.__state=ad.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return di(t,[{key:"toString",value:function(){return hr(this)}},{key:"toHexString",value:function(){return hr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),t}();function tm(t,e,n){Object.defineProperty(t,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Jt.recalculateRGB(this,e,n),this.__state[e])},set:function(a){this.__state.space!=="RGB"&&(Jt.recalculateRGB(this,e,n),this.__state.space="RGB"),this.__state[e]=a}})}function nm(t,e){Object.defineProperty(t,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Jt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Jt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Jt.recalculateRGB=function(t,e,n){if(t.__state.space==="HEX")t.__state[e]=mu.component_from_hex(t.__state.hex,n);else if(t.__state.space==="HSV")Q.extend(t.__state,mu.hsv_to_rgb(t.__state.h,t.__state.s,t.__state.v));else throw new Error("Corrupted color state")};Jt.recalculateHSV=function(t){var e=mu.rgb_to_hsv(t.r,t.g,t.b);Q.extend(t.__state,{s:e.s,v:e.v}),Q.isNaN(e.h)?Q.isUndefined(t.__state.h)&&(t.__state.h=0):t.__state.h=e.h};Jt.COMPONENTS=["r","g","b","h","s","v","hex","a"];tm(Jt.prototype,"r",2);tm(Jt.prototype,"g",1);tm(Jt.prototype,"b",0);nm(Jt.prototype,"h");nm(Jt.prototype,"s");nm(Jt.prototype,"v");Object.defineProperty(Jt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Jt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=mu.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Cs=function(){function t(e,n){hi(this,t),this.initialValue=e[n],this.domElement=document.createElement("div"),this.object=e,this.property=n,this.__onChange=void 0,this.__onFinishChange=void 0}return di(t,[{key:"onChange",value:function(n){return this.__onChange=n,this}},{key:"onFinishChange",value:function(n){return this.__onFinishChange=n,this}},{key:"setValue",value:function(n){return this.object[this.property]=n,this.__onChange&&this.__onChange.call(this,n),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),t}(),U1={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},My={};Q.each(U1,function(t,e){Q.each(t,function(n){My[n]=e})});var L1=/(\d+(\.\d+)?)px/;function mi(t){if(t==="0"||Q.isUndefined(t))return 0;var e=t.match(L1);return Q.isNull(e)?0:parseFloat(e[1])}var H={makeSelectable:function(e,n){e===void 0||e.style===void 0||(e.onselectstart=n?function(){return!1}:function(){},e.style.MozUserSelect=n?"auto":"none",e.style.KhtmlUserSelect=n?"auto":"none",e.unselectable=n?"on":"off")},makeFullscreen:function(e,n,i){var a=i,s=n;Q.isUndefined(s)&&(s=!0),Q.isUndefined(a)&&(a=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),a&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,n,i,a){var s=i||{},r=My[n];if(!r)throw new Error("Event type "+n+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(n,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=o.initKeyboardEvent||o.initKeyEvent;Q.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(n,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(n,s.bubbles||!1,s.cancelable||!0);break}}Q.defaults(o,a),e.dispatchEvent(o)},bind:function(e,n,i,a){var s=a||!1;return e.addEventListener?e.addEventListener(n,i,s):e.attachEvent&&e.attachEvent("on"+n,i),H},unbind:function(e,n,i,a){var s=a||!1;return e.removeEventListener?e.removeEventListener(n,i,s):e.detachEvent&&e.detachEvent("on"+n,i),H},addClass:function(e,n){if(e.className===void 0)e.className=n;else if(e.className!==n){var i=e.className.split(/ +/);i.indexOf(n)===-1&&(i.push(n),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return H},removeClass:function(e,n){if(n)if(e.className===n)e.removeAttribute("class");else{var i=e.className.split(/ +/),a=i.indexOf(n);a!==-1&&(i.splice(a,1),e.className=i.join(" "))}else e.className=void 0;return H},hasClass:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var n=getComputedStyle(e);return mi(n["border-left-width"])+mi(n["border-right-width"])+mi(n["padding-left"])+mi(n["padding-right"])+mi(n.width)},getHeight:function(e){var n=getComputedStyle(e);return mi(n["border-top-width"])+mi(n["border-bottom-width"])+mi(n["padding-top"])+mi(n["padding-bottom"])+mi(n.height)},getOffset:function(e){var n=e,i={left:0,top:0};if(n.offsetParent)do i.left+=n.offsetLeft,i.top+=n.offsetTop,n=n.offsetParent;while(n);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Ty=function(t){ka(e,t);function e(n,i){hi(this,e);var a=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=a;a.__prev=a.getValue(),a.__checkbox=document.createElement("input"),a.__checkbox.setAttribute("type","checkbox");function r(){s.setValue(!s.__prev)}return H.bind(a.__checkbox,"change",r,!1),a.domElement.appendChild(a.__checkbox),a.updateDisplay(),a}return di(e,[{key:"setValue",value:function(i){var a=Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),a}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Cs),F1=function(t){ka(e,t);function e(n,i,a){hi(this,e);var s=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=a,o=s;if(s.__select=document.createElement("select"),Q.isArray(r)){var l={};Q.each(r,function(c){l[c]=c}),r=l}return Q.each(r,function(c,d){var f=document.createElement("option");f.innerHTML=d,f.setAttribute("value",c),o.__select.appendChild(f)}),s.updateDisplay(),H.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return di(e,[{key:"setValue",value:function(i){var a=Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),a}},{key:"updateDisplay",value:function(){return H.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Cs),O1=function(t){ka(e,t);function e(n,i){hi(this,e);var a=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),s=a;function r(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),H.bind(a.__input,"keyup",r),H.bind(a.__input,"change",r),H.bind(a.__input,"blur",o),H.bind(a.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return di(e,[{key:"updateDisplay",value:function(){return H.isActive(this.__input)||(this.__input.value=this.getValue()),Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Cs);function og(t){var e=t.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Ay=function(t){ka(e,t);function e(n,i,a){hi(this,e);var s=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=a||{};return s.__min=r.min,s.__max=r.max,s.__step=r.step,Q.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=og(s.__impliedStep),s}return di(e,[{key:"setValue",value:function(i){var a=i;return this.__min!==void 0&&a<this.__min?a=this.__min:this.__max!==void 0&&a>this.__max&&(a=this.__max),this.__step!==void 0&&a%this.__step!==0&&(a=Math.round(a/this.__step)*this.__step),Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=og(i),this}}]),e}(Cs);function P1(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n}var _u=function(t){ka(e,t);function e(n,i,a){hi(this,e);var s=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,a));s.__truncationSuspended=!1;var r=s,o=void 0;function l(){var y=parseFloat(r.__input.value);Q.isNaN(y)||r.setValue(y)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function d(){c()}function f(y){var S=o-y.clientY;r.setValue(r.getValue()+S*r.__impliedStep),o=y.clientY}function h(){H.unbind(window,"mousemove",f),H.unbind(window,"mouseup",h),c()}function m(y){H.bind(window,"mousemove",f),H.bind(window,"mouseup",h),o=y.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),H.bind(s.__input,"change",l),H.bind(s.__input,"blur",d),H.bind(s.__input,"mousedown",m),H.bind(s.__input,"keydown",function(y){y.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return di(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():P1(this.getValue(),this.__precision),Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ay);function lg(t,e,n,i,a){return i+(a-i)*((t-e)/(n-e))}var sd=function(t){ka(e,t);function e(n,i,a,s,r){hi(this,e);var o=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i,{min:a,max:s,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),H.bind(o.__background,"mousedown",c),H.bind(o.__background,"touchstart",h),H.addClass(o.__background,"slider"),H.addClass(o.__foreground,"slider-fg");function c(S){document.activeElement.blur(),H.bind(window,"mousemove",d),H.bind(window,"mouseup",f),d(S)}function d(S){S.preventDefault();var _=l.__background.getBoundingClientRect();return l.setValue(lg(S.clientX,_.left,_.right,l.__min,l.__max)),!1}function f(){H.unbind(window,"mousemove",d),H.unbind(window,"mouseup",f),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(S){S.touches.length===1&&(H.bind(window,"touchmove",m),H.bind(window,"touchend",y),m(S))}function m(S){var _=S.touches[0].clientX,u=l.__background.getBoundingClientRect();l.setValue(lg(_,u.left,u.right,l.__min,l.__max))}function y(){H.unbind(window,"touchmove",m),H.unbind(window,"touchend",y),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return di(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Ha(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Ay),Ry=function(t){ka(e,t);function e(n,i,a){hi(this,e);var s=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i)),r=s;return s.__button=document.createElement("div"),s.__button.innerHTML=a===void 0?"Fire":a,H.bind(s.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),H.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return di(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Cs),rd=function(t){ka(e,t);function e(n,i){hi(this,e);var a=Xa(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));a.__color=new Jt(a.getValue()),a.__temp=new Jt(0);var s=a;a.domElement=document.createElement("div"),H.makeSelectable(a.domElement,!1),a.__selector=document.createElement("div"),a.__selector.className="selector",a.__saturation_field=document.createElement("div"),a.__saturation_field.className="saturation-field",a.__field_knob=document.createElement("div"),a.__field_knob.className="field-knob",a.__field_knob_border="2px solid ",a.__hue_knob=document.createElement("div"),a.__hue_knob.className="hue-knob",a.__hue_field=document.createElement("div"),a.__hue_field.className="hue-field",a.__input=document.createElement("input"),a.__input.type="text",a.__input_textShadow="0 1px 1px ",H.bind(a.__input,"keydown",function(S){S.keyCode===13&&f.call(this)}),H.bind(a.__input,"blur",f),H.bind(a.__selector,"mousedown",function(){H.addClass(this,"drag").bind(window,"mouseup",function(){H.removeClass(s.__selector,"drag")})}),H.bind(a.__selector,"touchstart",function(){H.addClass(this,"drag").bind(window,"touchend",function(){H.removeClass(s.__selector,"drag")})});var r=document.createElement("div");Q.extend(a.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Q.extend(a.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:a.__field_knob_border+(a.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Q.extend(a.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Q.extend(a.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Q.extend(r.style,{width:"100%",height:"100%",background:"none"}),cg(r,"top","rgba(0,0,0,0)","#000"),Q.extend(a.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),B1(a.__hue_field),Q.extend(a.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:a.__input_textShadow+"rgba(0,0,0,0.7)"}),H.bind(a.__saturation_field,"mousedown",o),H.bind(a.__saturation_field,"touchstart",o),H.bind(a.__field_knob,"mousedown",o),H.bind(a.__field_knob,"touchstart",o),H.bind(a.__hue_field,"mousedown",l),H.bind(a.__hue_field,"touchstart",l);function o(S){m(S),H.bind(window,"mousemove",m),H.bind(window,"touchmove",m),H.bind(window,"mouseup",c),H.bind(window,"touchend",c)}function l(S){y(S),H.bind(window,"mousemove",y),H.bind(window,"touchmove",y),H.bind(window,"mouseup",d),H.bind(window,"touchend",d)}function c(){H.unbind(window,"mousemove",m),H.unbind(window,"touchmove",m),H.unbind(window,"mouseup",c),H.unbind(window,"touchend",c),h()}function d(){H.unbind(window,"mousemove",y),H.unbind(window,"touchmove",y),H.unbind(window,"mouseup",d),H.unbind(window,"touchend",d),h()}function f(){var S=ad(this.value);S!==!1?(s.__color.__state=S,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}a.__saturation_field.appendChild(r),a.__selector.appendChild(a.__field_knob),a.__selector.appendChild(a.__saturation_field),a.__selector.appendChild(a.__hue_field),a.__hue_field.appendChild(a.__hue_knob),a.domElement.appendChild(a.__input),a.domElement.appendChild(a.__selector),a.updateDisplay();function m(S){S.type.indexOf("touch")===-1&&S.preventDefault();var _=s.__saturation_field.getBoundingClientRect(),u=S.touches&&S.touches[0]||S,g=u.clientX,v=u.clientY,x=(g-_.left)/(_.right-_.left),R=1-(v-_.top)/(_.bottom-_.top);return R>1?R=1:R<0&&(R=0),x>1?x=1:x<0&&(x=0),s.__color.v=R,s.__color.s=x,s.setValue(s.__color.toOriginal()),!1}function y(S){S.type.indexOf("touch")===-1&&S.preventDefault();var _=s.__hue_field.getBoundingClientRect(),u=S.touches&&S.touches[0]||S,g=u.clientY,v=1-(g-_.top)/(_.bottom-_.top);return v>1?v=1:v<0&&(v=0),s.__color.h=v*360,s.setValue(s.__color.toOriginal()),!1}return a}return di(e,[{key:"updateDisplay",value:function(){var i=ad(this.getValue());if(i!==!1){var a=!1;Q.each(Jt.COMPONENTS,function(o){if(!Q.isUndefined(i[o])&&!Q.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return a=!0,{}},this),a&&Q.extend(this.__color.__state,i)}Q.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,r=255-s;Q.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,cg(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Q.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),e}(Cs),z1=["-moz-","-o-","-webkit-","-ms-",""];function cg(t,e,n,i){t.style.background="",Q.each(z1,function(a){t.style.cssText+="background: "+a+"linear-gradient("+e+", "+n+" 0%, "+i+" 100%); "})}function B1(t){t.style.background="",t.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",t.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",t.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var I1={load:function(e,n){var i=n||document,a=i.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,i.getElementsByTagName("head")[0].appendChild(a)},inject:function(e,n){var i=n||document,a=document.createElement("style");a.type="text/css",a.innerHTML=e;var s=i.getElementsByTagName("head")[0];try{s.appendChild(a)}catch{}}},H1=`<div id="dg-save" class="dg dialogue">

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

</div>`,V1=function(e,n){var i=e[n];return Q.isArray(arguments[2])||Q.isObject(arguments[2])?new F1(e,n,arguments[2]):Q.isNumber(i)?Q.isNumber(arguments[2])&&Q.isNumber(arguments[3])?Q.isNumber(arguments[4])?new sd(e,n,arguments[2],arguments[3],arguments[4]):new sd(e,n,arguments[2],arguments[3]):Q.isNumber(arguments[4])?new _u(e,n,{min:arguments[2],max:arguments[3],step:arguments[4]}):new _u(e,n,{min:arguments[2],max:arguments[3]}):Q.isString(i)?new O1(e,n):Q.isFunction(i)?new Ry(e,n,""):Q.isBoolean(i)?new Ty(e,n):null};function G1(t){setTimeout(t,1e3/60)}var j1=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||G1,k1=function(){function t(){hi(this,t),this.backgroundElement=document.createElement("div"),Q.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),H.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Q.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;H.bind(this.backgroundElement,"click",function(){e.hide()})}return di(t,[{key:"show",value:function(){var n=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Q.defer(function(){n.backgroundElement.style.opacity=1,n.domElement.style.opacity=1,n.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var n=this,i=function a(){n.domElement.style.display="none",n.backgroundElement.style.display="none",H.unbind(n.domElement,"webkitTransitionEnd",a),H.unbind(n.domElement,"transitionend",a),H.unbind(n.domElement,"oTransitionEnd",a)};H.bind(this.domElement,"webkitTransitionEnd",i),H.bind(this.domElement,"transitionend",i),H.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-H.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-H.getHeight(this.domElement)/2+"px"}}]),t}(),X1=C1(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);I1.inject(X1);var ug="dg",fg=72,hg=20,el="Default",xo=function(){try{return!!window.localStorage}catch{return!1}}(),Po=void 0,dg=!0,Js=void 0,Cf=!1,wy=[],vt=function t(e){var n=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),H.addClass(this.domElement,ug),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=Q.defaults(i,{closeOnTop:!1,autoPlace:!0,width:t.DEFAULT_WIDTH}),i=Q.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),Q.isUndefined(i.load)?i.load={preset:el}:i.preset&&(i.load.preset=i.preset),Q.isUndefined(i.parent)&&i.hideable&&wy.push(this),i.resizable=Q.isUndefined(i.parent)&&i.resizable,i.autoPlace&&Q.isUndefined(i.scrollable)&&(i.scrollable=!0);var a=xo&&localStorage.getItem($s(this,"isLocal"))==="true",s=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return n.parent?n.getRoot().preset:i.load.preset},set:function(h){n.parent?n.getRoot().preset=h:i.load.preset=h,Z1(this),n.revert()}},width:{get:function(){return i.width},set:function(h){i.width=h,cd(n,h)}},name:{get:function(){return i.name},set:function(h){i.name=h,r&&(r.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(h){i.closed=h,i.closed?H.addClass(n.__ul,t.CLASS_CLOSED):H.removeClass(n.__ul,t.CLASS_CLOSED),this.onResize(),n.__closeButton&&(n.__closeButton.innerHTML=h?t.TEXT_OPEN:t.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return a},set:function(h){xo&&(a=h,h?H.bind(window,"unload",s):H.unbind(window,"unload",s),localStorage.setItem($s(n,"isLocal"),h))}}}),Q.isUndefined(i.parent)){if(this.closed=i.closed||!1,H.addClass(this.domElement,t.CLASS_MAIN),H.makeSelectable(this.domElement,!1),xo&&a){n.useLocalStorage=!0;var o=localStorage.getItem($s(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=t.TEXT_CLOSED,H.addClass(this.__closeButton,t.CLASS_CLOSE_BUTTON),i.closeOnTop?(H.addClass(this.__closeButton,t.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(H.addClass(this.__closeButton,t.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),H.bind(this.__closeButton,"click",function(){n.closed=!n.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);H.addClass(l,"controller-name"),r=im(n,l);var c=function(h){return h.preventDefault(),n.closed=!n.closed,!1};H.addClass(this.__ul,t.CLASS_CLOSED),H.addClass(r,"title"),H.bind(r,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(Q.isUndefined(i.parent)&&(dg&&(Js=document.createElement("div"),H.addClass(Js,ug),H.addClass(Js,t.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Js),dg=!1),Js.appendChild(this.domElement),H.addClass(this.domElement,t.CLASS_AUTO_PLACE)),this.parent||cd(n,i.width)),this.__resizeHandler=function(){n.onResizeDebounced()},H.bind(window,"resize",this.__resizeHandler),H.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),H.bind(this.__ul,"transitionend",this.__resizeHandler),H.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&q1(this),s=function(){xo&&localStorage.getItem($s(n,"isLocal"))==="true"&&localStorage.setItem($s(n,"gui"),JSON.stringify(n.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function d(){var f=n.getRoot();f.width+=1,Q.defer(function(){f.width-=1})}i.parent||d()};vt.toggleHide=function(){Cf=!Cf,Q.each(wy,function(t){t.domElement.style.display=Cf?"none":""})};vt.CLASS_AUTO_PLACE="a";vt.CLASS_AUTO_PLACE_CONTAINER="ac";vt.CLASS_MAIN="main";vt.CLASS_CONTROLLER_ROW="cr";vt.CLASS_TOO_TALL="taller-than-window";vt.CLASS_CLOSED="closed";vt.CLASS_CLOSE_BUTTON="close-button";vt.CLASS_CLOSE_TOP="close-top";vt.CLASS_CLOSE_BOTTOM="close-bottom";vt.CLASS_DRAG="drag";vt.DEFAULT_WIDTH=245;vt.TEXT_CLOSED="Close Controls";vt.TEXT_OPEN="Open Controls";vt._keydownHandler=function(t){document.activeElement.type!=="text"&&(t.which===fg||t.keyCode===fg)&&vt.toggleHide()};H.bind(window,"keydown",vt._keydownHandler,!1);Q.extend(vt.prototype,{add:function(e,n){return zo(this,e,n,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,n){return zo(this,e,n,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var n=this;Q.defer(function(){n.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Js.removeChild(this.domElement);var e=this;Q.each(this.__folders,function(n){e.removeFolder(n)}),H.unbind(window,"keydown",vt._keydownHandler,!1),pg(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var n={name:e,parent:this};n.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(n.closed=this.load.folders[e].closed,n.load=this.load.folders[e]);var i=new vt(n);this.__folders[e]=i;var a=im(this,i.domElement);return H.addClass(a,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],pg(e);var n=this;Q.each(e.__folders,function(i){e.removeFolder(i)}),Q.defer(function(){n.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var n=H.getOffset(e.__ul).top,i=0;Q.each(e.__ul.childNodes,function(a){e.autoPlace&&a===e.__save_row||(i+=H.getHeight(a))}),window.innerHeight-n-hg<i?(H.addClass(e.domElement,vt.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-n-hg+"px"):(H.removeClass(e.domElement,vt.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Q.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Q.debounce(function(){this.onResize()},50),remember:function(){if(Q.isUndefined(Po)&&(Po=new k1,Po.domElement.innerHTML=H1),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Q.each(Array.prototype.slice.call(arguments),function(n){e.__rememberedObjects.length===0&&Y1(e),e.__rememberedObjects.indexOf(n)===-1&&e.__rememberedObjects.push(n)}),this.autoPlace&&cd(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=kl(this)),e.folders={},Q.each(this.__folders,function(n,i){e.folders[i]=n.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=kl(this),od(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[el]=kl(this,!0)),this.load.remembered[e]=kl(this),this.preset=e,ld(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Q.each(this.__controllers,function(n){this.getRoot().load.remembered?Cy(e||this.getRoot(),n):n.setValue(n.initialValue),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())},this),Q.each(this.__folders,function(n){n.revert(n)}),e||od(this.getRoot(),!1)},listen:function(e){var n=this.__listening.length===0;this.__listening.push(e),n&&Ny(this.__listening)},updateDisplay:function(){Q.each(this.__controllers,function(e){e.updateDisplay()}),Q.each(this.__folders,function(e){e.updateDisplay()})}});function im(t,e,n){var i=document.createElement("li");return e&&i.appendChild(e),n?t.__ul.insertBefore(i,n):t.__ul.appendChild(i),t.onResize(),i}function pg(t){H.unbind(window,"resize",t.__resizeHandler),t.saveToLocalStorageIfPossible&&H.unbind(window,"unload",t.saveToLocalStorageIfPossible)}function od(t,e){var n=t.__preset_select[t.__preset_select.selectedIndex];e?n.innerHTML=n.value+"*":n.innerHTML=n.value}function W1(t,e,n){if(n.__li=e,n.__gui=t,Q.extend(n,{options:function(r){if(arguments.length>1){var o=n.__li.nextElementSibling;return n.remove(),zo(t,n.object,n.property,{before:o,factoryArgs:[Q.toArray(arguments)]})}if(Q.isArray(r)||Q.isObject(r)){var l=n.__li.nextElementSibling;return n.remove(),zo(t,n.object,n.property,{before:l,factoryArgs:[r]})}},name:function(r){return n.__li.firstElementChild.firstElementChild.innerHTML=r,n},listen:function(){return n.__gui.listen(n),n},remove:function(){return n.__gui.remove(n),n}}),n instanceof sd){var i=new _u(n.object,n.property,{min:n.__min,max:n.__max,step:n.__step});Q.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var r=n[s],o=i[s];n[s]=i[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),r.apply(n,l)}}),H.addClass(e,"has-slider"),n.domElement.insertBefore(i.domElement,n.domElement.firstElementChild)}else if(n instanceof _u){var a=function(r){if(Q.isNumber(n.__min)&&Q.isNumber(n.__max)){var o=n.__li.firstElementChild.firstElementChild.innerHTML,l=n.__gui.__listening.indexOf(n)>-1;n.remove();var c=zo(t,n.object,n.property,{before:n.__li.nextElementSibling,factoryArgs:[n.__min,n.__max,n.__step]});return c.name(o),l&&c.listen(),c}return r};n.min=Q.compose(a,n.min),n.max=Q.compose(a,n.max)}else n instanceof Ty?(H.bind(e,"click",function(){H.fakeEvent(n.__checkbox,"click")}),H.bind(n.__checkbox,"click",function(s){s.stopPropagation()})):n instanceof Ry?(H.bind(e,"click",function(){H.fakeEvent(n.__button,"click")}),H.bind(e,"mouseover",function(){H.addClass(n.__button,"hover")}),H.bind(e,"mouseout",function(){H.removeClass(n.__button,"hover")})):n instanceof rd&&(H.addClass(e,"color"),n.updateDisplay=Q.compose(function(s){return e.style.borderLeftColor=n.__color.toString(),s},n.updateDisplay),n.updateDisplay());n.setValue=Q.compose(function(s){return t.getRoot().__preset_select&&n.isModified()&&od(t.getRoot(),!0),s},n.setValue)}function Cy(t,e){var n=t.getRoot(),i=n.__rememberedObjects.indexOf(e.object);if(i!==-1){var a=n.__rememberedObjectIndecesToControllers[i];if(a===void 0&&(a={},n.__rememberedObjectIndecesToControllers[i]=a),a[e.property]=e,n.load&&n.load.remembered){var s=n.load.remembered,r=void 0;if(s[t.preset])r=s[t.preset];else if(s[el])r=s[el];else return;if(r[i]&&r[i][e.property]!==void 0){var o=r[i][e.property];e.initialValue=o,e.setValue(o)}}}}function zo(t,e,n,i){if(e[n]===void 0)throw new Error('Object "'+e+'" has no property "'+n+'"');var a=void 0;if(i.color)a=new rd(e,n);else{var s=[e,n].concat(i.factoryArgs);a=V1.apply(t,s)}i.before instanceof Cs&&(i.before=i.before.__li),Cy(t,a),H.addClass(a.domElement,"c");var r=document.createElement("span");H.addClass(r,"property-name"),r.innerHTML=a.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(a.domElement);var l=im(t,o,i.before);return H.addClass(l,vt.CLASS_CONTROLLER_ROW),a instanceof rd?H.addClass(l,"color"):H.addClass(l,D1(a.getValue())),W1(t,l,a),t.__controllers.push(a),a}function $s(t,e){return document.location.href+"."+e}function ld(t,e,n){var i=document.createElement("option");i.innerHTML=e,i.value=e,t.__preset_select.appendChild(i),n&&(t.__preset_select.selectedIndex=t.__preset_select.length-1)}function mg(t,e){e.style.display=t.useLocalStorage?"block":"none"}function Y1(t){var e=t.__save_row=document.createElement("li");H.addClass(t.domElement,"has-save"),t.__ul.insertBefore(e,t.__ul.firstChild),H.addClass(e,"save-row");var n=document.createElement("span");n.innerHTML="&nbsp;",H.addClass(n,"button gears");var i=document.createElement("span");i.innerHTML="Save",H.addClass(i,"button"),H.addClass(i,"save");var a=document.createElement("span");a.innerHTML="New",H.addClass(a,"button"),H.addClass(a,"save-as");var s=document.createElement("span");s.innerHTML="Revert",H.addClass(s,"button"),H.addClass(s,"revert");var r=t.__preset_select=document.createElement("select");if(t.load&&t.load.remembered?Q.each(t.load.remembered,function(f,h){ld(t,h,h===t.preset)}):ld(t,el,!1),H.bind(r,"change",function(){for(var f=0;f<t.__preset_select.length;f++)t.__preset_select[f].innerHTML=t.__preset_select[f].value;t.preset=this.value}),e.appendChild(r),e.appendChild(n),e.appendChild(i),e.appendChild(a),e.appendChild(s),xo){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem($s(t,"isLocal"))==="true"&&l.setAttribute("checked","checked"),mg(t,o),H.bind(l,"change",function(){t.useLocalStorage=!t.useLocalStorage,mg(t,o)})}var d=document.getElementById("dg-new-constructor");H.bind(d,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&Po.hide()}),H.bind(n,"click",function(){d.innerHTML=JSON.stringify(t.getSaveObject(),void 0,2),Po.show(),d.focus(),d.select()}),H.bind(i,"click",function(){t.save()}),H.bind(a,"click",function(){var f=prompt("Enter a new preset name.");f&&t.saveAs(f)}),H.bind(s,"click",function(){t.revert()})}function q1(t){var e=void 0;t.__resize_handle=document.createElement("div"),Q.extend(t.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function n(s){return s.preventDefault(),t.width+=e-s.clientX,t.onResize(),e=s.clientX,!1}function i(){H.removeClass(t.__closeButton,vt.CLASS_DRAG),H.unbind(window,"mousemove",n),H.unbind(window,"mouseup",i)}function a(s){return s.preventDefault(),e=s.clientX,H.addClass(t.__closeButton,vt.CLASS_DRAG),H.bind(window,"mousemove",n),H.bind(window,"mouseup",i),!1}H.bind(t.__resize_handle,"mousedown",a),H.bind(t.__closeButton,"mousedown",a),t.domElement.insertBefore(t.__resize_handle,t.domElement.firstElementChild)}function cd(t,e){t.domElement.style.width=e+"px",t.__save_row&&t.autoPlace&&(t.__save_row.style.width=e+"px"),t.__closeButton&&(t.__closeButton.style.width=e+"px")}function kl(t,e){var n={};return Q.each(t.__rememberedObjects,function(i,a){var s={},r=t.__rememberedObjectIndecesToControllers[a];Q.each(r,function(o,l){s[l]=e?o.initialValue:o.getValue()}),n[a]=s}),n}function Z1(t){for(var e=0;e<t.__preset_select.length;e++)t.__preset_select[e].value===t.preset&&(t.__preset_select.selectedIndex=e)}function Ny(t){t.length!==0&&j1.call(window,function(){Ny(t)}),Q.each(t,function(e){e.updateDisplay()})}var K1=vt;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="176",br={ROTATE:0,DOLLY:1,PAN:2},dr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q1=0,_g=1,J1=2,Dy=1,$1=2,Oi=3,Va=0,Sn=1,zi=2,Yi=0,Mr=1,ud=2,gg=3,vg=4,eT=5,ss=100,tT=101,nT=102,iT=103,aT=104,sT=200,rT=201,oT=202,lT=203,fd=204,hd=205,cT=206,uT=207,fT=208,hT=209,dT=210,pT=211,mT=212,_T=213,gT=214,dd=0,pd=1,md=2,zr=3,_d=4,gd=5,vd=6,xd=7,Uy=0,vT=1,xT=2,Pa=0,Ly=1,Fy=2,Oy=3,Py=4,zy=5,By=6,Iy=7,Hy=300,Br=301,Ir=302,yd=303,Sd=304,Hu=306,Ed=1e3,os=1001,bd=1002,ci=1003,yT=1004,Xl=1005,xi=1006,Nf=1007,ls=1008,ea=1009,Vy=1010,Gy=1011,tl=1012,sm=1013,ys=1014,ji=1015,qi=1016,rm=1017,om=1018,nl=1020,jy=35902,ky=1021,Xy=1022,ri=1023,il=1026,al=1027,Wy=1028,lm=1029,Yy=1030,cm=1031,um=1033,Cc=33776,Nc=33777,Dc=33778,Uc=33779,Md=35840,Td=35841,Ad=35842,Rd=35843,wd=36196,Cd=37492,Nd=37496,Dd=37808,Ud=37809,Ld=37810,Fd=37811,Od=37812,Pd=37813,zd=37814,Bd=37815,Id=37816,Hd=37817,Vd=37818,Gd=37819,jd=37820,kd=37821,Lc=36492,Xd=36494,Wd=36495,qy=36283,Yd=36284,qd=36285,Zd=36286,ST=3200,ET=3201,bT=0,MT=1,ya="",Dn="srgb",Hr="srgb-linear",gu="linear",ut="srgb",Fs=7680,xg=519,TT=512,AT=513,RT=514,Zy=515,wT=516,CT=517,NT=518,DT=519,yg=35044,Sg="300 es",ki=2e3,vu=2001;class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,Kd=180/Math.PI;function bl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function UT(t,e){return(t%e+e)%e}function Df(t,e,n){return(1-n)*t+n*e}function co(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const LT={DEG2RAD:Fc};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*a+e.x,this.y=s*a+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,a,s,r,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c)}set(e,n,i,a,s,r,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],y=i[8],S=a[0],_=a[3],u=a[6],g=a[1],v=a[4],x=a[7],R=a[2],C=a[5],A=a[8];return s[0]=r*S+o*g+l*R,s[3]=r*_+o*v+l*C,s[6]=r*u+o*x+l*A,s[1]=c*S+d*g+f*R,s[4]=c*_+d*v+f*C,s[7]=c*u+d*x+f*A,s[2]=h*S+m*g+y*R,s[5]=h*_+m*v+y*C,s[8]=h*u+m*x+y*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*r*d-n*o*c-i*s*d+i*o*l+a*s*c-a*r*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*r-o*c,h=o*l-d*s,m=c*s-r*l,y=n*f+i*h+a*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=f*S,e[1]=(a*c-d*i)*S,e[2]=(o*i-a*r)*S,e[3]=h*S,e[4]=(d*n-a*l)*S,e[5]=(a*s-o*n)*S,e[6]=m*S,e[7]=(i*l-c*n)*S,e[8]=(r*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Uf.makeScale(e,n)),this}rotate(e){return this.premultiply(Uf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uf=new He;function Ky(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FT(){const t=xu("canvas");return t.style.display="block",t}const Eg={};function Oc(t){t in Eg||(Eg[t]=!0,console.warn(t))}function OT(t,e,n){return new Promise(function(i,a){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function PT(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zT(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bg=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BT(){const t={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===ut&&(a.r=Zi(a.r),a.g=Zi(a.g),a.b=Zi(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ut&&(a.r=Tr(a.r),a.g=Tr(a.g),a.b=Tr(a.b))),a},fromWorkingColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},toWorkingColorSpace:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ya?gu:this.spaces[a].transfer},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hr]:{primaries:e,whitePoint:i,transfer:gu,toXYZ:bg,fromXYZ:Mg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:bg,fromXYZ:Mg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const nt=BT();function Zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Os;class IT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Os===void 0&&(Os=xu("canvas")),Os.width=e.width,Os.height=e.height;const a=Os.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Os}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=xu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Zi(n[i]/255)*255):n[i]=Zi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HT=0;class fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HT++}),this.uuid=bl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Lf(a[r].image)):s.push(Lf(a[r]))}else s=Lf(a);i.url=s}return n||(e.images[this.uuid]=i),i}}function Lf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VT=0;class En extends Ns{constructor(e=En.DEFAULT_IMAGE,n=En.DEFAULT_MAPPING,i=os,a=os,s=xi,r=ls,o=ri,l=ea,c=En.DEFAULT_ANISOTROPY,d=ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=bl(),this.name="",this.source=new fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ed:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ed:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Hy;En.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,a=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a+r[12]*s,this.y=r[1]*n+r[5]*i+r[9]*a+r[13]*s,this.z=r[2]*n+r[6]*i+r[10]*a+r[14]*s,this.w=r[3]*n+r[7]*i+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],y=l[9],S=l[2],_=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-S)<.01&&Math.abs(y-_)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+S)<.1&&Math.abs(y+_)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(m+1)/2,R=(u+1)/2,C=(d+h)/4,A=(f+S)/4,N=(y+_)/4;return v>x&&v>R?v<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(v),a=C/i,s=A/i):x>R?x<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),i=C/a,s=N/a):R<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(R),i=A/s,a=N/s),this.set(i,a,s,n),this}let g=Math.sqrt((_-y)*(_-y)+(f-S)*(f-S)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(_-y)/g,this.y=(f-S)/g,this.z=(h-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GT extends Ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth?i.depth:1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const a={width:e,height:n,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new En(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new fm(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends GT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qy extends En{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jT extends En{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=ci,this.minFilter=ci,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,s,r,o){let l=i[a+0],c=i[a+1],d=i[a+2],f=i[a+3];const h=s[r+0],m=s[r+1],y=s[r+2],S=s[r+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=y,e[n+3]=S;return}if(f!==S||l!==h||c!==m||d!==y){let _=1-o;const u=l*h+c*m+d*y+f*S,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),C=Math.atan2(R,u*g);_=Math.sin(_*C)/R,o=Math.sin(o*C)/R}const x=o*g;if(l=l*_+h*x,c=c*_+m*x,d=d*_+y*x,f=f*_+S*x,_===1-o){const R=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=R,c*=R,d*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,a,s,r){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],f=s[r],h=s[r+1],m=s[r+2],y=s[r+3];return e[n]=o*y+d*f+l*m-c*h,e[n+1]=l*y+d*h+c*f-o*m,e[n+2]=c*y+d*m+o*h-l*f,e[n+3]=d*y-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),f=o(s/2),h=l(i/2),m=l(a/2),y=l(s/2);switch(r){case"XYZ":this._x=h*d*f+c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f-h*m*y;break;case"YXZ":this._x=h*d*f+c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f+h*m*y;break;case"ZXY":this._x=h*d*f-c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f-h*m*y;break;case"ZYX":this._x=h*d*f-c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f+h*m*y;break;case"YZX":this._x=h*d*f+c*m*y,this._y=c*m*f+h*d*y,this._z=c*d*y-h*m*f,this._w=c*d*f-h*m*y;break;case"XZY":this._x=h*d*f-c*m*y,this._y=c*m*f-h*d*y,this._z=c*d*y+h*m*f,this._w=c*d*f+h*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],s=n[8],r=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(r-a)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(r-a)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,s=e._z,r=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+r*o+a*c-s*l,this._y=a*d+r*l+s*o-i*c,this._z=s*d+r*c+i*l-a*o,this._w=r*d-i*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+i*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*r+n*this._w,this._x=m*i+n*this._x,this._y=m*a+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=r*f+this._w*h,this._x=i*f+this._x*h,this._y=a*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*a,this.y=s[1]*n+s[4]*i+s[7]*a,this.z=s[2]*n+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,s=e.elements,r=1/(s[3]*n+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*a+s[12])*r,this.y=(s[1]*n+s[5]*i+s[9]*a+s[13])*r,this.z=(s[2]*n+s[6]*i+s[10]*a+s[14])*r,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*i),d=2*(o*n-s*a),f=2*(s*i-r*n);return this.x=n+l*c+r*f-o*d,this.y=i+l*d+o*c-s*f,this.z=a+l*f+s*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a,this.y=s[1]*n+s[5]*i+s[9]*a,this.z=s[2]*n+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,s=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-s*o,this.y=s*r-i*l,this.z=i*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ff=new B,Tg=new Ss;class Ml{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ti):ti.fromBufferAttribute(s,r),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),Yl.subVectors(this.max,uo),Ps.subVectors(e.a,uo),zs.subVectors(e.b,uo),Bs.subVectors(e.c,uo),ra.subVectors(zs,Ps),oa.subVectors(Bs,zs),Za.subVectors(Ps,Bs);let n=[0,-ra.z,ra.y,0,-oa.z,oa.y,0,-Za.z,Za.y,ra.z,0,-ra.x,oa.z,0,-oa.x,Za.z,0,-Za.x,-ra.y,ra.x,0,-oa.y,oa.x,0,-Za.y,Za.x,0];return!Of(n,Ps,zs,Bs,Yl)||(n=[1,0,0,0,1,0,0,0,1],!Of(n,Ps,zs,Bs,Yl))?!1:(ql.crossVectors(ra,oa),n=[ql.x,ql.y,ql.z],Of(n,Ps,zs,Bs,Yl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new B,new B,new B,new B,new B,new B,new B,new B],ti=new B,Wl=new Ml,Ps=new B,zs=new B,Bs=new B,ra=new B,oa=new B,Za=new B,uo=new B,Yl=new B,ql=new B,Ka=new B;function Of(t,e,n,i,a){for(let s=0,r=t.length-3;s<=r;s+=3){Ka.fromArray(t,s);const o=a.x*Math.abs(Ka.x)+a.y*Math.abs(Ka.y)+a.z*Math.abs(Ka.z),l=e.dot(Ka),c=n.dot(Ka),d=i.dot(Ka);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const kT=new Ml,fo=new B,Pf=new B;class hm{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kT.setFromPoints(e).getCenter(i);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(fo,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Pf)),this.expandByPoint(fo.copy(e.center).sub(Pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new B,zf=new B,Zl=new B,la=new B,Bf=new B,Kl=new B,If=new B;class Jy{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){zf.copy(e).add(n).multiplyScalar(.5),Zl.copy(n).sub(e).normalize(),la.copy(this.origin).sub(zf);const s=e.distanceTo(n)*.5,r=-this.direction.dot(Zl),o=la.dot(this.direction),l=-la.dot(Zl),c=la.lengthSq(),d=Math.abs(1-r*r);let f,h,m,y;if(d>0)if(f=r*l-o,h=r*o-l,y=s*d,f>=0)if(h>=-y)if(h<=y){const S=1/d;f*=S,h*=S,m=f*(f+r*h+2*o)+h*(r*f+h+2*l)+c}else h=s,f=Math.max(0,-(r*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(r*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-r*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(r*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=r>0?-s:s,f=Math.max(0,-(r*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(zf).addScaledVector(Zl,h),m}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),a=Di.dot(Di)-i*i,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,s,r,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),i>r||s>a||((s>i||isNaN(i))&&(i=s),(r<a||isNaN(a))&&(a=r),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,a,s){Bf.subVectors(n,e),Kl.subVectors(i,e),If.crossVectors(Bf,Kl);let r=this.direction.dot(If),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;la.subVectors(this.origin,e);const l=o*this.direction.dot(Kl.crossVectors(la,Kl));if(l<0)return null;const c=o*this.direction.dot(Bf.cross(la));if(c<0||l+c>r)return null;const d=-o*la.dot(If);return d<0?null:this.at(d/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,a,s,r,o,l,c,d,f,h,m,y,S,_){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,s,r,o,l,c,d,f,h,m,y,S,_)}set(e,n,i,a,s,r,o,l,c,d,f,h,m,y,S,_){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=y,u[11]=S,u[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),r=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,s=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=r*d,m=r*f,y=o*d,S=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+y*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=y+m*c,n[10]=r*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,y=c*d,S=c*f;n[0]=h+S*o,n[4]=y*o-m,n[8]=r*c,n[1]=r*f,n[5]=r*d,n[9]=-o,n[2]=m*o-y,n[6]=S+h*o,n[10]=r*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,y=c*d,S=c*f;n[0]=h-S*o,n[4]=-r*f,n[8]=y+m*o,n[1]=m+y*o,n[5]=r*d,n[9]=S-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const h=r*d,m=r*f,y=o*d,S=o*f;n[0]=l*d,n[4]=y*c-m,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=m*c-y,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const h=r*l,m=r*c,y=o*l,S=o*c;n[0]=l*d,n[4]=S-h*f,n[8]=y*f+m,n[1]=f,n[5]=r*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*f+y,n[10]=h-S*f}else if(e.order==="XZY"){const h=r*l,m=r*c,y=o*l,S=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+S,n[5]=r*d,n[9]=m*f-y,n[2]=y*f-m,n[6]=o*d,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XT,e,WT)}lookAt(e,n,i){const a=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),ca.crossVectors(i,wn),ca.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),ca.crossVectors(i,wn)),ca.normalize(),Ql.crossVectors(wn,ca),a[0]=ca.x,a[4]=Ql.x,a[8]=wn.x,a[1]=ca.y,a[5]=Ql.y,a[9]=wn.y,a[2]=ca.z,a[6]=Ql.z,a[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,s=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],y=i[2],S=i[6],_=i[10],u=i[14],g=i[3],v=i[7],x=i[11],R=i[15],C=a[0],A=a[4],N=a[8],T=a[12],E=a[1],U=a[5],W=a[9],X=a[13],te=a[2],ne=a[6],L=a[10],k=a[14],z=a[3],ae=a[7],ce=a[11],Ee=a[15];return s[0]=r*C+o*E+l*te+c*z,s[4]=r*A+o*U+l*ne+c*ae,s[8]=r*N+o*W+l*L+c*ce,s[12]=r*T+o*X+l*k+c*Ee,s[1]=d*C+f*E+h*te+m*z,s[5]=d*A+f*U+h*ne+m*ae,s[9]=d*N+f*W+h*L+m*ce,s[13]=d*T+f*X+h*k+m*Ee,s[2]=y*C+S*E+_*te+u*z,s[6]=y*A+S*U+_*ne+u*ae,s[10]=y*N+S*W+_*L+u*ce,s[14]=y*T+S*X+_*k+u*Ee,s[3]=g*C+v*E+x*te+R*z,s[7]=g*A+v*U+x*ne+R*ae,s[11]=g*N+v*W+x*L+R*ce,s[15]=g*T+v*X+x*k+R*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],y=e[3],S=e[7],_=e[11],u=e[15];return y*(+s*l*f-a*c*f-s*o*h+i*c*h+a*o*m-i*l*m)+S*(+n*l*m-n*c*h+s*r*h-a*r*m+a*c*d-s*l*d)+_*(+n*c*f-n*o*m-s*r*f+i*r*m+s*o*d-i*c*d)+u*(-a*o*d-n*l*f+n*o*h+a*r*f-i*r*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],y=e[12],S=e[13],_=e[14],u=e[15],g=f*_*c-S*h*c+S*l*m-o*_*m-f*l*u+o*h*u,v=y*h*c-d*_*c-y*l*m+r*_*m+d*l*u-r*h*u,x=d*S*c-y*f*c+y*o*m-r*S*m-d*o*u+r*f*u,R=y*f*l-d*S*l-y*o*h+r*S*h+d*o*_-r*f*_,C=n*g+i*v+a*x+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(S*h*s-f*_*s-S*a*m+i*_*m+f*a*u-i*h*u)*A,e[2]=(o*_*s-S*l*s+S*a*c-i*_*c-o*a*u+i*l*u)*A,e[3]=(f*l*s-o*h*s-f*a*c+i*h*c+o*a*m-i*l*m)*A,e[4]=v*A,e[5]=(d*_*s-y*h*s+y*a*m-n*_*m-d*a*u+n*h*u)*A,e[6]=(y*l*s-r*_*s-y*a*c+n*_*c+r*a*u-n*l*u)*A,e[7]=(r*h*s-d*l*s+d*a*c-n*h*c-r*a*m+n*l*m)*A,e[8]=x*A,e[9]=(y*f*s-d*S*s-y*i*m+n*S*m+d*i*u-n*f*u)*A,e[10]=(r*S*s-y*o*s+y*i*c-n*S*c-r*i*u+n*o*u)*A,e[11]=(d*o*s-r*f*s-d*i*c+n*f*c+r*i*m-n*o*m)*A,e[12]=R*A,e[13]=(d*S*a-y*f*a+y*i*h-n*S*h-d*i*_+n*f*_)*A,e[14]=(y*o*a-r*S*a-y*i*l+n*S*l+r*i*_-n*o*_)*A,e[15]=(r*f*a-d*o*a+d*i*l-n*f*l-r*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,a=e.y,s=e.z;return n[0]*=i,n[4]*=a,n[8]*=s,n[1]*=i,n[5]*=a,n[9]*=s,n[2]*=i,n[6]*=a,n[10]*=s,n[3]*=i,n[7]*=a,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),s=1-i,r=e.x,o=e.y,l=e.z,c=s*r,d=s*o;return this.set(c*r+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*r,0,c*l-a*o,d*l+a*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,s,r){return this.set(1,i,s,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,d=r+r,f=o+o,h=s*c,m=s*d,y=s*f,S=r*d,_=r*f,u=o*f,g=l*c,v=l*d,x=l*f,R=i.x,C=i.y,A=i.z;return a[0]=(1-(S+u))*R,a[1]=(m+x)*R,a[2]=(y-v)*R,a[3]=0,a[4]=(m-x)*C,a[5]=(1-(h+u))*C,a[6]=(_+g)*C,a[7]=0,a[8]=(y+v)*A,a[9]=(_-g)*A,a[10]=(1-(h+S))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let s=Is.set(a[0],a[1],a[2]).length();const r=Is.set(a[4],a[5],a[6]).length(),o=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const c=1/s,d=1/r,f=1/o;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=d,ni.elements[5]*=d,ni.elements[6]*=d,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,n.setFromRotationMatrix(ni),i.x=s,i.y=r,i.z=o,this}makePerspective(e,n,i,a,s,r,o=ki){const l=this.elements,c=2*s/(n-e),d=2*s/(i-a),f=(n+e)/(n-e),h=(i+a)/(i-a);let m,y;if(o===ki)m=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===vu)m=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,a,s,r,o=ki){const l=this.elements,c=1/(n-e),d=1/(i-a),f=1/(r-s),h=(n+e)*c,m=(i+a)*d;let y,S;if(o===ki)y=(r+s)*f,S=-2*f;else if(o===vu)y=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Is=new B,ni=new It,XT=new B(0,0,0),WT=new B(1,1,1),ca=new B,Ql=new B,wn=new B,Ag=new It,Rg=new Ss;class ta{constructor(e=0,n=0,i=0,a=ta.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],h=a[6],m=a[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ag,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rg.setFromEuler(this),this.setFromQuaternion(Rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ta.DEFAULT_ORDER="XYZ";class $y{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YT=0;const wg=new B,Hs=new Ss,Ui=new It,Jl=new B,ho=new B,qT=new B,ZT=new Ss,Cg=new B(1,0,0),Ng=new B(0,1,0),Dg=new B(0,0,1),Ug={type:"added"},KT={type:"removed"},Vs={type:"childadded",child:null},Hf={type:"childremoved",child:null};class zn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new B,n=new ta,i=new Ss,a=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new He}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $y,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Cg,e)}rotateY(e){return this.rotateOnAxis(Ng,e)}rotateZ(e){return this.rotateOnAxis(Dg,e)}translateOnAxis(e,n){return wg.copy(e).applyQuaternion(this.quaternion),this.position.add(wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cg,e)}translateY(e){return this.translateOnAxis(Ng,e)}translateZ(e){return this.translateOnAxis(Dg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Jl.copy(e):Jl.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ho,Jl,this.up):Ui.lookAt(Jl,ho,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Hs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ug),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(KT),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ug),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const r=this.children[i].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,e,qT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ho,ZT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?{min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}:void 0,boundingSphere:o.boundingSphere?{radius:o.boundingSphere.radius,center:o.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),f=r(e.shapes),h=r(e.skeletons),m=r(e.animations),y=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=a,i;function r(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}zn.DEFAULT_UP=new B(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new B,Li=new B,Vf=new B,Fi=new B,Gs=new B,js=new B,Lg=new B,Gf=new B,jf=new B,kf=new B,Xf=new Lt,Wf=new Lt,Yf=new Lt;class si{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ii.subVectors(e,n),a.cross(ii);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,n,i,a,s){ii.subVectors(a,n),Li.subVectors(i,n),Vf.subVectors(e,n);const r=ii.dot(ii),o=ii.dot(Li),l=ii.dot(Vf),c=Li.dot(Li),d=Li.dot(Vf),f=r*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,y=(r*d-o*l)*h;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,a,s,r,o,l){return this.getBarycoord(e,n,i,a,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(r,Fi.y),l.addScaledVector(o,Fi.z),l)}static getInterpolatedAttribute(e,n,i,a,s,r){return Xf.setScalar(0),Wf.setScalar(0),Yf.setScalar(0),Xf.fromBufferAttribute(e,n),Wf.fromBufferAttribute(e,i),Yf.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Xf,s.x),r.addScaledVector(Wf,s.y),r.addScaledVector(Yf,s.z),r}static isFrontFacing(e,n,i,a){return ii.subVectors(i,n),Li.subVectors(e,n),ii.cross(Li).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,s){return si.getInterpolation(e,this.a,this.b,this.c,n,i,a,s)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,s=this.c;let r,o;Gs.subVectors(a,i),js.subVectors(s,i),Gf.subVectors(e,i);const l=Gs.dot(Gf),c=js.dot(Gf);if(l<=0&&c<=0)return n.copy(i);jf.subVectors(e,a);const d=Gs.dot(jf),f=js.dot(jf);if(d>=0&&f<=d)return n.copy(a);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),n.copy(i).addScaledVector(Gs,r);kf.subVectors(e,s);const m=Gs.dot(kf),y=js.dot(kf);if(y>=0&&m<=y)return n.copy(s);const S=m*c-l*y;if(S<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(js,o);const _=d*y-m*f;if(_<=0&&f-d>=0&&m-y>=0)return Lg.subVectors(s,a),o=(f-d)/(f-d+(m-y)),n.copy(a).addScaledVector(Lg,o);const u=1/(_+S+h);return r=S*u,o=h*u,n.copy(i).addScaledVector(Gs,r).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ua={h:0,s:0,l:0},$l={h:0,s:0,l:0};function qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,a=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,a),this}setHSL(e,n,i,a=nt.workingColorSpace){if(e=UT(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,r=2*i-s;this.r=qf(r,s,e+1/3),this.g=qf(r,s,e),this.b=qf(r,s,e-1/3)}return nt.toWorkingColorSpace(this,a),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=eS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return nt.fromWorkingColorSpace(rn.copy(this),e),Math.round(Qe(rn.r*255,0,255))*65536+Math.round(Qe(rn.g*255,0,255))*256+Math.round(Qe(rn.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,a=rn.g,s=rn.b,r=Math.max(i,a,s),o=Math.min(i,a,s);let l,c;const d=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=d<=.5?f/(r+o):f/(2-r-o),r){case i:l=(a-s)/f+(a<s?6:0);break;case a:l=(s-i)/f+2;break;case s:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Dn){nt.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,a=rn.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ua),this.setHSL(ua.h+e,ua.s+n,ua.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ua),e.getHSL($l);const i=Df(ua.h,$l.h,n),a=Df(ua.s,$l.s,n),s=Df(ua.l,$l.l,n);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*a,this.g=s[1]*n+s[4]*i+s[7]*a,this.b=s[2]*n+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Je;Je.NAMES=eS;let QT=0;class Vu extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=Mr,this.side=Va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(i.blending=this.blending),this.side!==Va&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fd&&(i.blendSrc=this.blendSrc),this.blendDst!==hd&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(n){const s=a(e.textures),r=a(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class dm extends Vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=Uy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new B,ec=new Ce;let JT=0;class bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yg,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ec.fromBufferAttribute(this,n),ec.applyMatrix3(e),this.setXY(n,ec.x,ec.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=co(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=co(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=co(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=co(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),a=_n(a,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yg&&(e.usage=this.usage),e}}class tS extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class nS extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Kn extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $T=0;const Vn=new It,Zf=new zn,ks=new B,Cn=new Ml,po=new Ml,Yt=new B;class ia extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?nS:tS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Kn(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const s=e[a];n.setXYZ(a,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ml);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,r=n.length;s<r;s++){const o=n[s];po.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Cn.min,po.min),Cn.expandByPoint(Yt),Yt.addVectors(Cn.max,po.max),Cn.expandByPoint(Yt)):(Cn.expandByPoint(po.min),Cn.expandByPoint(po.max))}Cn.getCenter(i);let a=0;for(let s=0,r=e.count;s<r;s++)Yt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Yt));if(n)for(let s=0,r=n.length;s<r;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Yt.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),Yt.add(ks)),a=Math.max(a,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;const c=new B,d=new B,f=new B,h=new Ce,m=new Ce,y=new Ce,S=new B,_=new B;function u(N,T,E){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,N),m.fromBufferAttribute(s,T),y.fromBufferAttribute(s,E),d.sub(c),f.sub(c),m.sub(h),y.sub(h);const U=1/(m.x*y.y-y.x*m.y);isFinite(U)&&(S.copy(d).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(U),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(U),o[N].add(S),o[T].add(S),o[E].add(S),l[N].add(_),l[T].add(_),l[E].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,T=g.length;N<T;++N){const E=g[N],U=E.start,W=E.count;for(let X=U,te=U+W;X<te;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new B,x=new B,R=new B,C=new B;function A(N){R.fromBufferAttribute(a,N),C.copy(R);const T=o[N];v.copy(T),v.sub(R.multiplyScalar(R.dot(T))).normalize(),x.crossVectors(C,T);const U=x.dot(l[N])<0?-1:1;r.setXYZW(N,v.x,v.y,v.z,U)}for(let N=0,T=g.length;N<T;++N){const E=g[N],U=E.start,W=E.count;for(let X=U,te=U+W;X<te;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const a=new B,s=new B,r=new B,o=new B,l=new B,c=new B,d=new B,f=new B;if(e)for(let h=0,m=e.count;h<m;h+=3){const y=e.getX(h+0),S=e.getX(h+1),_=e.getX(h+2);a.fromBufferAttribute(n,y),s.fromBufferAttribute(n,S),r.fromBufferAttribute(n,_),d.subVectors(r,s),f.subVectors(a,s),d.cross(f),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,_),o.add(d),l.add(d),c.add(d),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)a.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),d.subVectors(r,s),f.subVectors(a,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,y=0;for(let S=0,_=l.length;S<_;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*d;for(let u=0;u<d;u++)h[y++]=c[m++]}return new bi(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ia,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fg=new It,Qa=new Jy,tc=new hm,Og=new B,nc=new B,ic=new B,ac=new B,Kf=new B,sc=new B,Pg=new B,rc=new B;class oi extends zn{constructor(e=new ia,n=new dm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){sc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(Kf.fromBufferAttribute(f,e),r?sc.addScaledVector(Kf,d):sc.addScaledVector(Kf.sub(n),d))}n.add(sc)}return n}raycast(e,n){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(s),Qa.copy(e.ray).recast(e.near),!(tc.containsPoint(Qa.origin)===!1&&(Qa.intersectSphere(tc,Og)===null||Qa.origin.distanceToSquared(Og)>(e.far-e.near)**2))&&(Fg.copy(s).invert(),Qa.copy(e.ray).applyMatrix4(Fg),!(i.boundingBox!==null&&Qa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Qa)))}_computeIntersections(e,n,i){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let y=0,S=h.length;y<S;y++){const _=h[y],u=r[_.materialIndex],g=Math.max(_.start,m.start),v=Math.min(o.count,Math.min(_.start+_.count,m.start+m.count));for(let x=g,R=v;x<R;x+=3){const C=o.getX(x),A=o.getX(x+1),N=o.getX(x+2);a=oc(this,u,e,i,c,d,f,C,A,N),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const y=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let _=y,u=S;_<u;_+=3){const g=o.getX(_),v=o.getX(_+1),x=o.getX(_+2);a=oc(this,r,e,i,c,d,f,g,v,x),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,S=h.length;y<S;y++){const _=h[y],u=r[_.materialIndex],g=Math.max(_.start,m.start),v=Math.min(l.count,Math.min(_.start+_.count,m.start+m.count));for(let x=g,R=v;x<R;x+=3){const C=x,A=x+1,N=x+2;a=oc(this,u,e,i,c,d,f,C,A,N),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const y=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let _=y,u=S;_<u;_+=3){const g=_,v=_+1,x=_+2;a=oc(this,r,e,i,c,d,f,g,v,x),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function eA(t,e,n,i,a,s,r,o){let l;if(e.side===Sn?l=i.intersectTriangle(r,s,a,!0,o):l=i.intersectTriangle(a,s,r,e.side===Va,o),l===null)return null;rc.copy(o),rc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rc);return c<n.near||c>n.far?null:{distance:c,point:rc.clone(),object:t}}function oc(t,e,n,i,a,s,r,o,l,c){t.getVertexPosition(o,nc),t.getVertexPosition(l,ic),t.getVertexPosition(c,ac);const d=eA(t,e,n,i,nc,ic,ac,Pg);if(d){const f=new B;si.getBarycoord(Pg,nc,ic,ac,f),a&&(d.uv=si.getInterpolatedAttribute(a,o,l,c,f,new Ce)),s&&(d.uv1=si.getInterpolatedAttribute(s,o,l,c,f,new Ce)),r&&(d.normal=si.getInterpolatedAttribute(r,o,l,c,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};si.getNormal(nc,ic,ac,h.normal),d.face=h,d.barycoord=f}return d}class Tl extends ia{constructor(e=1,n=1,i=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],d=[],f=[];let h=0,m=0;y("z","y","x",-1,-1,i,n,e,r,s,0),y("z","y","x",1,-1,i,n,-e,r,s,1),y("x","z","y",1,1,e,i,n,a,r,2),y("x","z","y",1,-1,e,i,-n,a,r,3),y("x","y","z",1,-1,e,n,i,a,s,4),y("x","y","z",-1,-1,e,n,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new Kn(c,3)),this.setAttribute("normal",new Kn(d,3)),this.setAttribute("uv",new Kn(f,2));function y(S,_,u,g,v,x,R,C,A,N,T){const E=x/A,U=R/N,W=x/2,X=R/2,te=C/2,ne=A+1,L=N+1;let k=0,z=0;const ae=new B;for(let ce=0;ce<L;ce++){const Ee=ce*U-X;for(let ve=0;ve<ne;ve++){const We=ve*E-W;ae[S]=We*g,ae[_]=Ee*v,ae[u]=te,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[_]=0,ae[u]=C>0?1:-1,d.push(ae.x,ae.y,ae.z),f.push(ve/A),f.push(1-ce/N),k+=1}}for(let ce=0;ce<N;ce++)for(let Ee=0;Ee<A;Ee++){const ve=h+Ee+ne*ce,We=h+Ee+ne*(ce+1),q=h+(Ee+1)+ne*(ce+1),oe=h+(Ee+1)+ne*ce;l.push(ve,We,oe),l.push(We,q,oe),z+=6}o.addGroup(m,z,T),m+=z,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Vr(t[n]);for(const a in i)e[a]=i[a]}return e}function tA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const sl={clone:Vr,merge:fn};var nA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nA,this.fragmentShader=iA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=tA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class aS extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fa=new B,zg=new Ce,Bg=new Ce;class Wn extends aS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fa.x,fa.y).multiplyScalar(-e/fa.z),fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fa.x,fa.y).multiplyScalar(-e/fa.z)}getViewSize(e,n){return this.getViewBounds(e,zg,Bg),n.subVectors(Bg,zg)}setViewOffset(e,n,i,a,s,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fc*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,n-=r.offsetY*i/c,a*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xs=-90,Ws=1;class aA extends zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wn(Xs,Ws,e,n);a.layers=this.layers,this.add(a);const s=new Wn(Xs,Ws,e,n);s.layers=this.layers,this.add(s);const r=new Wn(Xs,Ws,e,n);r.layers=this.layers,this.add(r);const o=new Wn(Xs,Ws,e,n);o.layers=this.layers,this.add(o);const l=new Wn(Xs,Ws,e,n);l.layers=this.layers,this.add(l);const c=new Wn(Xs,Ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,s,r,o,l]=n;for(const c of n)this.remove(c);if(e===ki)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vu)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,s),e.setRenderTarget(i,1,a),e.render(n,r),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,a),e.render(n,d),e.setRenderTarget(f,h,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class sS extends En{constructor(e=[],n=Br,i,a,s,r,o,l,c,d){super(e,n,i,a,s,r,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sA extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new sS(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:xi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Tl(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Yi});s.uniforms.tEquirect.value=n;const r=new oi(a,s),o=n.minFilter;return n.minFilter===ls&&(n.minFilter=xi),new aA(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,i,a);e.setRenderTarget(s)}}class lc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rA={type:"move"};class Qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const S of e.hand.values()){const _=n.getJointPose(S,i),u=this._getHandJoint(c,S);_!==null&&(u.matrix.fromArray(_.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=_.radius),u.visible=_!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,y=.005;c.inputState.pinching&&h>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rA)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new lc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class oA extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jf=new B,lA=new B,cA=new He;class ma{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=Jf.subVectors(i,n).cross(lA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cA.getNormalMatrix(e),a=this.coplanarPoint(Jf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ja=new hm,cc=new B;class rS{constructor(e=new ma,n=new ma,i=new ma,a=new ma,s=new ma,r=new ma){this.planes=[e,n,i,a,s,r]}set(e,n,i,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ki){const i=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],d=a[5],f=a[6],h=a[7],m=a[8],y=a[9],S=a[10],_=a[11],u=a[12],g=a[13],v=a[14],x=a[15];if(i[0].setComponents(l-s,h-c,_-m,x-u).normalize(),i[1].setComponents(l+s,h+c,_+m,x+u).normalize(),i[2].setComponents(l+r,h+d,_+y,x+g).normalize(),i[3].setComponents(l-r,h-d,_-y,x-g).normalize(),i[4].setComponents(l-o,h-f,_-S,x-v).normalize(),n===ki)i[5].setComponents(l+o,h+f,_+S,x+v).normalize();else if(n===vu)i[5].setComponents(o,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ja.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ja)}intersectsSprite(e){return Ja.center.set(0,0,0),Ja.radius=.7071067811865476,Ja.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ja)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(cc.x=a.normal.x>0?e.max.x:e.min.x,cc.y=a.normal.y>0?e.max.y:e.min.y,cc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oS extends En{constructor(e,n,i=ys,a,s,r,o=ci,l=ci,c,d=il){if(d!==il&&d!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,s,r,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pm extends ia{constructor(e=[],n=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:a};const s=[],r=[];o(a),c(i),d(),this.setAttribute("position",new Kn(s,3)),this.setAttribute("normal",new Kn(s.slice(),3)),this.setAttribute("uv",new Kn(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new B,x=new B,R=new B;for(let C=0;C<n.length;C+=3)m(n[C+0],v),m(n[C+1],x),m(n[C+2],R),l(v,x,R,g)}function l(g,v,x,R){const C=R+1,A=[];for(let N=0;N<=C;N++){A[N]=[];const T=g.clone().lerp(x,N/C),E=v.clone().lerp(x,N/C),U=C-N;for(let W=0;W<=U;W++)W===0&&N===C?A[N][W]=T:A[N][W]=T.clone().lerp(E,W/U)}for(let N=0;N<C;N++)for(let T=0;T<2*(C-N)-1;T++){const E=Math.floor(T/2);T%2===0?(h(A[N][E+1]),h(A[N+1][E]),h(A[N][E])):(h(A[N][E+1]),h(A[N+1][E+1]),h(A[N+1][E]))}}function c(g){const v=new B;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(g),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function d(){const g=new B;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const x=_(g)/2/Math.PI+.5,R=u(g)/Math.PI+.5;r.push(x,1-R)}y(),f()}function f(){for(let g=0;g<r.length;g+=6){const v=r[g+0],x=r[g+2],R=r[g+4],C=Math.max(v,x,R),A=Math.min(v,x,R);C>.9&&A<.1&&(v<.2&&(r[g+0]+=1),x<.2&&(r[g+2]+=1),R<.2&&(r[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function m(g,v){const x=g*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function y(){const g=new B,v=new B,x=new B,R=new B,C=new Ce,A=new Ce,N=new Ce;for(let T=0,E=0;T<s.length;T+=9,E+=6){g.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),x.set(s[T+6],s[T+7],s[T+8]),C.set(r[E+0],r[E+1]),A.set(r[E+2],r[E+3]),N.set(r[E+4],r[E+5]),R.copy(g).add(v).add(x).divideScalar(3);const U=_(R);S(C,E+0,g,U),S(A,E+2,v,U),S(N,E+4,x,U)}}function S(g,v,x,R){R<0&&g.x===1&&(r[v]=g.x-1),x.x===0&&x.z===0&&(r[v]=R/2/Math.PI+.5)}function _(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pm(e.vertices,e.indices,e.radius,e.details)}}class mm extends pm{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new mm(e.radius,e.detail)}}class Gu extends ia{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const s=e/2,r=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,f=e/o,h=n/l,m=[],y=[],S=[],_=[];for(let u=0;u<d;u++){const g=u*h-r;for(let v=0;v<c;v++){const x=v*f-s;y.push(x,-g,0),S.push(0,0,1),_.push(v/o),_.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,x=g+c*(u+1),R=g+1+c*(u+1),C=g+1+c*u;m.push(v,x,C),m.push(x,R,C)}this.setIndex(m),this.setAttribute("position",new Kn(y,3)),this.setAttribute("normal",new Kn(S,3)),this.setAttribute("uv",new Kn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.width,e.height,e.widthSegments,e.heightSegments)}}class uA extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fA extends Vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ST,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hA extends Vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class lS extends aS{constructor(e=-1,n=1,i=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,r=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class dA extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ig(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ig();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ig(){return performance.now()}class Hg{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pA extends Ns{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vg(t,e,n,i){const a=mA(i);switch(n){case ky:return t*e;case Wy:return t*e/a.components*a.byteLength;case lm:return t*e/a.components*a.byteLength;case Yy:return t*e*2/a.components*a.byteLength;case cm:return t*e*2/a.components*a.byteLength;case Xy:return t*e*3/a.components*a.byteLength;case ri:return t*e*4/a.components*a.byteLength;case um:return t*e*4/a.components*a.byteLength;case Cc:case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dc:case Uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:case Rd:return Math.max(t,16)*Math.max(e,8)/4;case Md:case Ad:return Math.max(t,8)*Math.max(e,8)/2;case wd:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Xd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case qy:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qd:case Zd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mA(t){switch(t){case ea:case Vy:return{byteLength:1,components:1};case tl:case Gy:case qi:return{byteLength:2,components:1};case rm:case om:return{byteLength:2,components:4};case ys:case sm:case ji:return{byteLength:4,components:1};case jy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uS(){let t=null,e=!1,n=null,i=null;function a(s,r){n(s,r),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _A(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,y)=>m.start-y.start);let h=0;for(let m=1;m<f.length;m++){const y=f[h],S=f[m];S.start<=y.start+y.count+1?y.count=Math.max(y.count,S.start+S.count-y.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,y=f.length;m<y;m++){const S=f[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var gA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vA=`#ifdef USE_ALPHAHASH
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
#endif`,xA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bA=`#ifdef USE_AOMAP
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
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TA=`#ifdef USE_BATCHING
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
#endif`,AA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NA=`#ifdef USE_IRIDESCENCE
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
#endif`,DA=`#ifdef USE_BUMPMAP
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
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HA=`#define PI 3.141592653589793
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
} // validated`,VA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GA=`vec3 transformedNormal = objectNormal;
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
#endif`,jA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YA="gl_FragColor = linearToOutputTexel( gl_FragColor );",qA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZA=`#ifdef USE_ENVMAP
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
#endif`,KA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QA=`#ifdef USE_ENVMAP
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
#endif`,JA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$A=`#ifdef USE_ENVMAP
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
#endif`,e2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a2=`#ifdef USE_GRADIENTMAP
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
}`,s2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l2=`uniform bool receiveShadow;
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
#endif`,c2=`#ifdef USE_ENVMAP
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
#endif`,u2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p2=`PhysicalMaterial material;
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
#endif`,m2=`struct PhysicalMaterial {
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
}`,_2=`
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
#endif`,g2=`#if defined( RE_IndirectDiffuse )
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A2=`#if defined( USE_POINTS_UV )
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
#endif`,R2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U2=`#ifdef USE_MORPHTARGETS
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
#endif`,L2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I2=`#ifdef USE_NORMALMAP
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
#endif`,H2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tR=`float getShadowMask() {
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
}`,nR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iR=`#ifdef USE_SKINNING
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
#endif`,aR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sR=`#ifdef USE_SKINNING
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
#endif`,rR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uR=`#ifdef USE_TRANSMISSION
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
#endif`,fR=`#ifdef USE_TRANSMISSION
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
#endif`,hR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _R=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gR=`uniform sampler2D t2D;
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
}`,vR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ER=`#include <common>
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
}`,bR=`#if DEPTH_PACKING == 3200
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
}`,MR=`#define DISTANCE
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
}`,TR=`#define DISTANCE
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
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wR=`uniform float scale;
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
}`,CR=`uniform vec3 diffuse;
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
}`,NR=`#include <common>
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
}`,DR=`uniform vec3 diffuse;
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
}`,UR=`#define LAMBERT
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
}`,LR=`#define LAMBERT
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
}`,FR=`#define MATCAP
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
}`,OR=`#define MATCAP
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
}`,PR=`#define NORMAL
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
}`,zR=`#define NORMAL
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
}`,BR=`#define PHONG
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
}`,IR=`#define PHONG
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
}`,HR=`#define STANDARD
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
}`,VR=`#define STANDARD
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
}`,GR=`#define TOON
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
}`,jR=`#define TOON
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
}`,kR=`uniform float size;
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
}`,XR=`uniform vec3 diffuse;
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
}`,WR=`#include <common>
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
}`,YR=`uniform vec3 color;
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
}`,qR=`uniform float rotation;
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
}`,ZR=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:gA,alphahash_pars_fragment:vA,alphamap_fragment:xA,alphamap_pars_fragment:yA,alphatest_fragment:SA,alphatest_pars_fragment:EA,aomap_fragment:bA,aomap_pars_fragment:MA,batching_pars_vertex:TA,batching_vertex:AA,begin_vertex:RA,beginnormal_vertex:wA,bsdfs:CA,iridescence_fragment:NA,bumpmap_pars_fragment:DA,clipping_planes_fragment:UA,clipping_planes_pars_fragment:LA,clipping_planes_pars_vertex:FA,clipping_planes_vertex:OA,color_fragment:PA,color_pars_fragment:zA,color_pars_vertex:BA,color_vertex:IA,common:HA,cube_uv_reflection_fragment:VA,defaultnormal_vertex:GA,displacementmap_pars_vertex:jA,displacementmap_vertex:kA,emissivemap_fragment:XA,emissivemap_pars_fragment:WA,colorspace_fragment:YA,colorspace_pars_fragment:qA,envmap_fragment:ZA,envmap_common_pars_fragment:KA,envmap_pars_fragment:QA,envmap_pars_vertex:JA,envmap_physical_pars_fragment:c2,envmap_vertex:$A,fog_vertex:e2,fog_pars_vertex:t2,fog_fragment:n2,fog_pars_fragment:i2,gradientmap_pars_fragment:a2,lightmap_pars_fragment:s2,lights_lambert_fragment:r2,lights_lambert_pars_fragment:o2,lights_pars_begin:l2,lights_toon_fragment:u2,lights_toon_pars_fragment:f2,lights_phong_fragment:h2,lights_phong_pars_fragment:d2,lights_physical_fragment:p2,lights_physical_pars_fragment:m2,lights_fragment_begin:_2,lights_fragment_maps:g2,lights_fragment_end:v2,logdepthbuf_fragment:x2,logdepthbuf_pars_fragment:y2,logdepthbuf_pars_vertex:S2,logdepthbuf_vertex:E2,map_fragment:b2,map_pars_fragment:M2,map_particle_fragment:T2,map_particle_pars_fragment:A2,metalnessmap_fragment:R2,metalnessmap_pars_fragment:w2,morphinstance_vertex:C2,morphcolor_vertex:N2,morphnormal_vertex:D2,morphtarget_pars_vertex:U2,morphtarget_vertex:L2,normal_fragment_begin:F2,normal_fragment_maps:O2,normal_pars_fragment:P2,normal_pars_vertex:z2,normal_vertex:B2,normalmap_pars_fragment:I2,clearcoat_normal_fragment_begin:H2,clearcoat_normal_fragment_maps:V2,clearcoat_pars_fragment:G2,iridescence_pars_fragment:j2,opaque_fragment:k2,packing:X2,premultiplied_alpha_fragment:W2,project_vertex:Y2,dithering_fragment:q2,dithering_pars_fragment:Z2,roughnessmap_fragment:K2,roughnessmap_pars_fragment:Q2,shadowmap_pars_fragment:J2,shadowmap_pars_vertex:$2,shadowmap_vertex:eR,shadowmask_pars_fragment:tR,skinbase_vertex:nR,skinning_pars_vertex:iR,skinning_vertex:aR,skinnormal_vertex:sR,specularmap_fragment:rR,specularmap_pars_fragment:oR,tonemapping_fragment:lR,tonemapping_pars_fragment:cR,transmission_fragment:uR,transmission_pars_fragment:fR,uv_pars_fragment:hR,uv_pars_vertex:dR,uv_vertex:pR,worldpos_vertex:mR,background_vert:_R,background_frag:gR,backgroundCube_vert:vR,backgroundCube_frag:xR,cube_vert:yR,cube_frag:SR,depth_vert:ER,depth_frag:bR,distanceRGBA_vert:MR,distanceRGBA_frag:TR,equirect_vert:AR,equirect_frag:RR,linedashed_vert:wR,linedashed_frag:CR,meshbasic_vert:NR,meshbasic_frag:DR,meshlambert_vert:UR,meshlambert_frag:LR,meshmatcap_vert:FR,meshmatcap_frag:OR,meshnormal_vert:PR,meshnormal_frag:zR,meshphong_vert:BR,meshphong_frag:IR,meshphysical_vert:HR,meshphysical_frag:VR,meshtoon_vert:GR,meshtoon_frag:jR,points_vert:kR,points_frag:XR,shadow_vert:WR,shadow_frag:YR,sprite_vert:qR,sprite_frag:ZR},fe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},_i={basic:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:fn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:fn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:fn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Je(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:fn([fe.points,fe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:fn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:fn([fe.common,fe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:fn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:fn([fe.sprite,fe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:fn([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:fn([fe.lights,fe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};_i.physical={uniforms:fn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const uc={r:0,b:0,g:0},$a=new ta,KR=new It;function QR(t,e,n,i,a,s,r){const o=new Je(0);let l=s===!0?0:1,c,d,f=null,h=0,m=null;function y(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function S(v){let x=!1;const R=y(v);R===null?u(o,l):R&&R.isColor&&(u(R,1),x=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,x){const R=y(x);R&&(R.isCubeTexture||R.mapping===Hu)?(d===void 0&&(d=new oi(new Tl(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Vr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),$a.copy(x.backgroundRotation),$a.x*=-1,$a.y*=-1,$a.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&($a.y*=-1,$a.z*=-1),d.material.uniforms.envMap.value=R,d.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(KR.makeRotationFromEuler($a)),d.material.toneMapped=nt.getTransfer(R.colorSpace)!==ut,(f!==R||h!==R.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=R,h=R.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new oi(new Gu(2,2),new cn({name:"BackgroundMaterial",uniforms:Vr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(R.colorSpace)!==ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||h!==R.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=R,h=R.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(uc,iS(t)),i.buffers.color.setClear(uc.r,uc.g,uc.b,x,r)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:_,dispose:g}}function JR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=h(null);let s=a,r=!1;function o(E,U,W,X,te){let ne=!1;const L=f(X,W,U);s!==L&&(s=L,c(s.object)),ne=m(E,X,W,te),ne&&y(E,X,W,te),te!==null&&e.update(te,t.ELEMENT_ARRAY_BUFFER),(ne||r)&&(r=!1,x(E,U,W,X),te!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function d(E){return t.deleteVertexArray(E)}function f(E,U,W){const X=W.wireframe===!0;let te=i[E.id];te===void 0&&(te={},i[E.id]=te);let ne=te[U.id];ne===void 0&&(ne={},te[U.id]=ne);let L=ne[X];return L===void 0&&(L=h(l()),ne[X]=L),L}function h(E){const U=[],W=[],X=[];for(let te=0;te<n;te++)U[te]=0,W[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:X,object:E,attributes:{},index:null}}function m(E,U,W,X){const te=s.attributes,ne=U.attributes;let L=0;const k=W.getAttributes();for(const z in k)if(k[z].location>=0){const ce=te[z];let Ee=ne[z];if(Ee===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Ee=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Ee=E.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;L++}return s.attributesNum!==L||s.index!==X}function y(E,U,W,X){const te={},ne=U.attributes;let L=0;const k=W.getAttributes();for(const z in k)if(k[z].location>=0){let ce=ne[z];ce===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor));const Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),te[z]=Ee,L++}s.attributes=te,s.attributesNum=L,s.index=X}function S(){const E=s.newAttributes;for(let U=0,W=E.length;U<W;U++)E[U]=0}function _(E){u(E,0)}function u(E,U){const W=s.newAttributes,X=s.enabledAttributes,te=s.attributeDivisors;W[E]=1,X[E]===0&&(t.enableVertexAttribArray(E),X[E]=1),te[E]!==U&&(t.vertexAttribDivisor(E,U),te[E]=U)}function g(){const E=s.newAttributes,U=s.enabledAttributes;for(let W=0,X=U.length;W<X;W++)U[W]!==E[W]&&(t.disableVertexAttribArray(W),U[W]=0)}function v(E,U,W,X,te,ne,L){L===!0?t.vertexAttribIPointer(E,U,W,te,ne):t.vertexAttribPointer(E,U,W,X,te,ne)}function x(E,U,W,X){S();const te=X.attributes,ne=W.getAttributes(),L=U.defaultAttributeValues;for(const k in ne){const z=ne[k];if(z.location>=0){let ae=te[k];if(ae===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),ae!==void 0){const ce=ae.normalized,Ee=ae.itemSize,ve=e.get(ae);if(ve===void 0)continue;const We=ve.buffer,q=ve.type,oe=ve.bytesPerElement,ie=q===t.INT||q===t.UNSIGNED_INT||ae.gpuType===sm;if(ae.isInterleavedBufferAttribute){const ue=ae.data,Te=ue.stride,Ye=ae.offset;if(ue.isInstancedInterleavedBuffer){for(let Re=0;Re<z.locationSize;Re++)u(z.location+Re,ue.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Re=0;Re<z.locationSize;Re++)_(z.location+Re);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Re=0;Re<z.locationSize;Re++)v(z.location+Re,Ee/z.locationSize,q,ce,Te*oe,(Ye+Ee/z.locationSize*Re)*oe,ie)}else{if(ae.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)u(z.location+ue,ae.meshPerAttribute);E.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ue=0;ue<z.locationSize;ue++)_(z.location+ue);t.bindBuffer(t.ARRAY_BUFFER,We);for(let ue=0;ue<z.locationSize;ue++)v(z.location+ue,Ee/z.locationSize,q,ce,Ee*oe,Ee/z.locationSize*ue*oe,ie)}}else if(L!==void 0){const ce=L[k];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(z.location,ce);break;case 3:t.vertexAttrib3fv(z.location,ce);break;case 4:t.vertexAttrib4fv(z.location,ce);break;default:t.vertexAttrib1fv(z.location,ce)}}}}g()}function R(){N();for(const E in i){const U=i[E];for(const W in U){const X=U[W];for(const te in X)d(X[te].object),delete X[te];delete U[W]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;const U=i[E.id];for(const W in U){const X=U[W];for(const te in X)d(X[te].object),delete X[te];delete U[W]}delete i[E.id]}function A(E){for(const U in i){const W=i[U];if(W[E.id]===void 0)continue;const X=W[E.id];for(const te in X)d(X[te].object),delete X[te];delete W[E.id]}}function N(){T(),r=!0,s!==a&&(s=a,c(s.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:_,disableUnusedAttributes:g}}function $R(t,e,n){let i;function a(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function r(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let y=0;y<f;y++)m+=d[y];n.update(m,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<c.length;y++)r(c[y],d[y],h[y]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let y=0;for(let S=0;S<f;S++)y+=d[S]*h[S];n.update(y,i,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ew(t,e,n,i){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==ri&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const N=A===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ea&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ji&&!N)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:y,maxTextureSize:S,maxCubemapSize:_,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:C}}function tw(t){const e=this;let n=null,i=0,a=!1,s=!1;const r=new ma,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||a;return a=h,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,m){const y=f.clippingPlanes,S=f.clipIntersection,_=f.clipShadows,u=t.get(f);if(!a||y===null||y.length===0||s&&!_)s?d(null):c();else{const g=s?0:i,v=g*4;let x=u.clippingState||null;l.value=x,x=d(y,h,v,m);for(let R=0;R!==v;++R)x[R]=n[R];u.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,y){const S=f!==null?f.length:0;let _=null;if(S!==0){if(_=l.value,y!==!0||_===null){const u=m+S*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(_===null||_.length<u)&&(_=new Float32Array(u));for(let v=0,x=m;v!==S;++v,x+=4)r.copy(f[v]).applyMatrix4(g,o),r.normal.toArray(_,x),_[x+3]=r.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,_}}function nw(t){let e=new WeakMap;function n(r,o){return o===yd?r.mapping=Br:o===Sd&&(r.mapping=Ir),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===yd||o===Sd)if(e.has(r)){const l=e.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new sA(l.height);return c.fromEquirectangularTexture(t,r),e.set(r,c),r.addEventListener("dispose",a),n(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const pr=4,Gg=[.125,.215,.35,.446,.526,.582],rs=20,$f=new lS,jg=new Je;let eh=null,th=0,nh=0,ih=!1;const as=(1+Math.sqrt(5))/2,Ys=1/as,kg=[new B(-as,Ys,0),new B(as,Ys,0),new B(-Ys,0,as),new B(Ys,0,as),new B(0,as,-Ys),new B(0,as,Ys),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],iw=new B;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,a=100,s={}){const{size:r=256,position:o=iw}=s;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Br||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:qi,format:ri,colorSpace:Hr,depthBuffer:!1},a=Wg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aw(s)),this._blurMaterial=sw(s,e,n)}return a}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,$f)}_sceneToCubeUV(e,n,i,a,s){const l=new Wn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,m=f.toneMapping;f.getClearColor(jg),f.toneMapping=Pa,f.autoClear=!1;const y=new dm({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),S=new oi(new Tl,y);let _=!1;const u=e.background;u?u.isColor&&(y.color.copy(u),e.background=null,_=!0):(y.color.copy(jg),_=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[g],s.y,s.z)):v===1?(l.up.set(0,0,c[g]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[g],s.z)):(l.up.set(0,c[g],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[g]));const x=this._cubeSize;fc(a,v*x,g>2?x:0,x,x),f.setRenderTarget(a),_&&f.render(S,l),f.render(e,l)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=m,f.autoClear=h,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Br||e.mapping===Ir;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yg());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new oi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,$f)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=kg[(a-s-1)%kg.length];this._blur(e,s-1,s,r,o)}n.autoClear=i}_blur(e,n,i,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,i,a,"latitudinal",s),this._halfBlur(r,e,i,i,a,"longitudinal",s)}_halfBlur(e,n,i,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new oi(this._lodPlanes[a],c),h=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rs-1),S=s/y,_=isFinite(s)?1+Math.floor(d*S):rs;_>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rs}`);const u=[];let g=0;for(let A=0;A<rs;++A){const N=A/S,T=Math.exp(-N*N/2);u.push(T),A===0?g+=T:A<_&&(g+=2*T)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=y,h.mipInt.value=v-i;const x=this._sizeLods[a],R=3*x*(a>v-pr?a-v+pr:0),C=4*(this._cubeSize-x);fc(n,R,C,3*x,2*x),l.setRenderTarget(n),l.render(f,$f)}}function aw(t){const e=[],n=[],i=[];let a=t;const s=t-pr+1+Gg.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);n.push(o);let l=1/o;r>t-pr?l=Gg[r-t+pr-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,y=6,S=3,_=2,u=1,g=new Float32Array(S*y*m),v=new Float32Array(_*y*m),x=new Float32Array(u*y*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,T=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];g.set(T,S*y*C),v.set(h,_*y*C);const E=[C,C,C,C,C,C];x.set(E,u*y*C)}const R=new ia;R.setAttribute("position",new bi(g,S)),R.setAttribute("uv",new bi(v,_)),R.setAttribute("faceIndex",new bi(x,u)),e.push(R),a>pr&&a--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wg(t,e,n){const i=new ui(t,e,n);return i.texture.mapping=Hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fc(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function sw(t,e,n){const i=new Float32Array(rs),a=new B(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:_m(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Yg(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_m(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function qg(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function _m(){return`

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
	`}function rw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yd||l===Sd,d=l===Br||l===Ir;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Xg(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&a(m)?(n===null&&(n=new Xg(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function ow(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=t.getExtension(i)}return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Oc("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function lw(t,e,n,i){const a={},s=new WeakMap;function r(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",r),delete a[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,y=f.attributes.position;let S=0;if(m!==null){const g=m.array;S=m.version;for(let v=0,x=g.length;v<x;v+=3){const R=g[v+0],C=g[v+1],A=g[v+2];h.push(R,C,C,A,A,R)}}else if(y!==void 0){const g=y.array;S=y.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const R=v+0,C=v+1,A=v+2;h.push(R,C,C,A,A,R)}}else return;const _=new(Ky(h)?nS:tS)(h,1);_.version=S;const u=s.get(f);u&&e.remove(u),s.set(f,_)}function d(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function cw(t,e,n){let i;function a(h){i=h}let s,r;function o(h){s=h.type,r=h.bytesPerElement}function l(h,m){t.drawElements(i,m,s,h*r),n.update(m,i,1)}function c(h,m,y){y!==0&&(t.drawElementsInstanced(i,m,s,h*r,y),n.update(m,i,y))}function d(h,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,y);let _=0;for(let u=0;u<y;u++)_+=m[u];n.update(_,i,1)}function f(h,m,y,S){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let u=0;u<h.length;u++)c(h[u]/r,m[u],S[u]);else{_.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,S,0,y);let u=0;for(let g=0;g<y;g++)u+=m[g]*S[g];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function uw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function fw(t,e,n){const i=new WeakMap,a=new Lt;function s(r,o,l){const c=r.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",E)};var m=E;h!==void 0&&h.texture.dispose();const y=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;y===!0&&(x=1),S===!0&&(x=2),_===!0&&(x=3);let R=o.attributes.position.count*x,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*f),N=new Qy(A,R,C,f);N.type=ji,N.needsUpdate=!0;const T=x*4;for(let U=0;U<f;U++){const W=u[U],X=g[U],te=v[U],ne=R*C*4*U;for(let L=0;L<W.count;L++){const k=L*T;y===!0&&(a.fromBufferAttribute(W,L),A[ne+k+0]=a.x,A[ne+k+1]=a.y,A[ne+k+2]=a.z,A[ne+k+3]=0),S===!0&&(a.fromBufferAttribute(X,L),A[ne+k+4]=a.x,A[ne+k+5]=a.y,A[ne+k+6]=a.z,A[ne+k+7]=0),_===!0&&(a.fromBufferAttribute(te,L),A[ne+k+8]=a.x,A[ne+k+9]=a.y,A[ne+k+10]=a.z,A[ne+k+11]=te.itemSize===4?a.w:1)}}h={count:f,texture:N,size:new Ce(R,C)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let y=0;for(let _=0;_<c.length;_++)y+=c[_];const S=o.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function hw(t,e,n,i){let a=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:r}}const fS=new En,Zg=new oS(1,1),hS=new Qy,dS=new jT,pS=new sS,Kg=[],Qg=[],Jg=new Float32Array(16),$g=new Float32Array(9),ev=new Float32Array(4);function Kr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let s=Kg[a];if(s===void 0&&(s=new Float32Array(a),Kg[a]=s),e!==0){i.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(s,o)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ju(t,e){let n=Qg[e];n===void 0&&(n=new Int32Array(e),Qg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(kt(n,i))return;ev.set(i),t.uniformMatrix2fv(this.addr,!1,ev),Xt(n,i)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(kt(n,i))return;$g.set(i),t.uniformMatrix3fv(this.addr,!1,$g),Xt(n,i)}}function xw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(kt(n,i))return;Jg.set(i),t.uniformMatrix4fv(this.addr,!1,Jg),Xt(n,i)}}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function Mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function ww(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let s;this.type===t.SAMPLER_2D_SHADOW?(Zg.compareFunction=Zy,s=Zg):s=fS,n.setTexture2D(e||s,a)}function Cw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||dS,a)}function Nw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||pS,a)}function Dw(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||hS,a)}function Uw(t){switch(t){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return _w;case 35674:return gw;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return Sw;case 35668:case 35672:return Ew;case 35669:case 35673:return bw;case 5125:return Mw;case 36294:return Tw;case 36295:return Aw;case 36296:return Rw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Lw(t,e){t.uniform1fv(this.addr,e)}function Fw(t,e){const n=Kr(e,this.size,2);t.uniform2fv(this.addr,n)}function Ow(t,e){const n=Kr(e,this.size,3);t.uniform3fv(this.addr,n)}function Pw(t,e){const n=Kr(e,this.size,4);t.uniform4fv(this.addr,n)}function zw(t,e){const n=Kr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Bw(t,e){const n=Kr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Iw(t,e){const n=Kr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hw(t,e){t.uniform1iv(this.addr,e)}function Vw(t,e){t.uniform2iv(this.addr,e)}function Gw(t,e){t.uniform3iv(this.addr,e)}function jw(t,e){t.uniform4iv(this.addr,e)}function kw(t,e){t.uniform1uiv(this.addr,e)}function Xw(t,e){t.uniform2uiv(this.addr,e)}function Ww(t,e){t.uniform3uiv(this.addr,e)}function Yw(t,e){t.uniform4uiv(this.addr,e)}function qw(t,e,n){const i=this.cache,a=e.length,s=ju(n,a);kt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTexture2D(e[r]||fS,s[r])}function Zw(t,e,n){const i=this.cache,a=e.length,s=ju(n,a);kt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||dS,s[r])}function Kw(t,e,n){const i=this.cache,a=e.length,s=ju(n,a);kt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||pS,s[r])}function Qw(t,e,n){const i=this.cache,a=e.length,s=ju(n,a);kt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||hS,s[r])}function Jw(t){switch(t){case 5126:return Lw;case 35664:return Fw;case 35665:return Ow;case 35666:return Pw;case 35674:return zw;case 35675:return Bw;case 35676:return Iw;case 5124:case 35670:return Hw;case 35667:case 35671:return Vw;case 35668:case 35672:return Gw;case 35669:case 35673:return jw;case 5125:return kw;case 36294:return Xw;case 36295:return Ww;case 36296:return Yw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Qw}}class $w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Uw(n.type)}}class eC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jw(n.type)}}class tC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,n[o.id],i)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function tv(t,e){t.seq.push(e),t.map[e.id]=e}function nC(t,e,n){const i=t.name,a=i.length;for(ah.lastIndex=0;;){const s=ah.exec(i),r=ah.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){tv(n,c===void 0?new $w(o,t,e):new eC(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new tC(o),tv(n,f)),n=f}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(n,a),r=e.getUniformLocation(n,s.name);nC(s,r,this)}}setValue(e,n,i,a){const s=this.map[n];s!==void 0&&s.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let s=0,r=n.length;s!==r;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in n&&i.push(r)}return i}}function nv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const iC=37297;let aC=0;function sC(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let r=a;r<s;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}const iv=new He;function rC(t){nt._getMatrix(iv,nt.workingColorSpace,t);const e=`mat3( ${iv.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case gu:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function av(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),a=t.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return n.toUpperCase()+`

`+a+`

`+sC(t.getShaderSource(e),r)}else return a}function oC(t,e){const n=rC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function lC(t,e){let n;switch(e){case Ly:n="Linear";break;case Fy:n="Reinhard";break;case Oy:n="Cineon";break;case Py:n="ACESFilmic";break;case By:n="AgX";break;case Iy:n="Neutral";break;case zy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hc=new B;function cC(){nt.getLuminanceCoefficients(hc);const t=hc.x.toFixed(4),e=hc.y.toFixed(4),n=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function fC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function hC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=t.getActiveAttrib(e,a),r=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function yo(t){return t!==""}function sv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(t){return t.replace(dC,mC)}const pC=new Map;function mC(t,e){let n=je[e];if(n===void 0){const i=pC.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(n)}const _C=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ov(t){return t.replace(_C,gC)}function gC(t,e,n,i){let a="";for(let s=parseInt(e);s<parseInt(n);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function lv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function vC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function xC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Br:case Ir:e="ENVMAP_TYPE_CUBE";break;case Hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function SC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Uy:e="ENVMAP_BLENDING_MULTIPLY";break;case vT:e="ENVMAP_BLENDING_MIX";break;case xT:e="ENVMAP_BLENDING_ADD";break}return e}function EC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bC(t,e,n,i){const a=t.getContext(),s=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=vC(n),c=xC(n),d=yC(n),f=SC(n),h=EC(n),m=uC(n),y=fC(s),S=a.createProgram();let _,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(yo).join(`
`),_.length>0&&(_+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(yo).join(`
`),u.length>0&&(u+=`
`)):(_=[lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),u=[lv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pa?"#define TONE_MAPPING":"",n.toneMapping!==Pa?je.tonemapping_pars_fragment:"",n.toneMapping!==Pa?lC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,oC("linearToOutputTexel",n.outputColorSpace),cC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),r=Qd(r),r=sv(r,n),r=rv(r,n),o=Qd(o),o=sv(o,n),o=rv(o,n),r=ov(r),o=ov(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,u=["#define varying in",n.glslVersion===Sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+_+r,x=g+u+o,R=nv(a,a.VERTEX_SHADER,v),C=nv(a,a.FRAGMENT_SHADER,x);a.attachShader(S,R),a.attachShader(S,C),n.index0AttributeName!==void 0?a.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(S,0,"position"),a.linkProgram(S);function A(U){if(t.debug.checkShaderErrors){const W=a.getProgramInfoLog(S).trim(),X=a.getShaderInfoLog(R).trim(),te=a.getShaderInfoLog(C).trim();let ne=!0,L=!0;if(a.getProgramParameter(S,a.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,S,R,C);else{const k=av(a,R,"vertex"),z=av(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(S,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+k+`
`+z)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||te==="")&&(L=!1);L&&(U.diagnostics={runnable:ne,programLog:W,vertexShader:{log:X,prefix:_},fragmentShader:{log:te,prefix:u}})}a.deleteShader(R),a.deleteShader(C),N=new Pc(a,S),T=hC(a,S)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(S,iC)),E},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aC++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=R,this.fragmentShader=C,this}let MC=0;class TC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new AC(e),n.set(e,i)),i}}class AC{constructor(e){this.id=MC++,this.code=e,this.usedTimes=0}}function RC(t,e,n,i,a,s,r){const o=new $y,l=new TC,c=new Set,d=[],f=a.logarithmicDepthBuffer,h=a.vertexTextures;let m=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return c.add(T),T===0?"uv":`uv${T}`}function _(T,E,U,W,X){const te=W.fog,ne=X.geometry,L=T.isMeshStandardMaterial?W.environment:null,k=(T.isMeshStandardMaterial?n:e).get(T.envMap||L),z=k&&k.mapping===Hu?k.image.height:null,ae=y[T.type];T.precision!==null&&(m=a.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ce=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let ve=0;ne.morphAttributes.position!==void 0&&(ve=1),ne.morphAttributes.normal!==void 0&&(ve=2),ne.morphAttributes.color!==void 0&&(ve=3);let We,q,oe,ie;if(ae){const ct=_i[ae];We=ct.vertexShader,q=ct.fragmentShader}else We=T.vertexShader,q=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),ie=l.getFragmentShaderID(T);const ue=t.getRenderTarget(),Te=t.state.buffers.depth.getReversed(),Ye=X.isInstancedMesh===!0,Re=X.isBatchedMesh===!0,St=!!T.map,Be=!!T.matcap,Fe=!!k,D=!!T.aoMap,Wt=!!T.lightMap,qe=!!T.bumpMap,Ve=!!T.normalMap,be=!!T.displacementMap,at=!!T.emissiveMap,Me=!!T.metalnessMap,w=!!T.roughnessMap,b=T.anisotropy>0,I=T.clearcoat>0,Z=T.dispersion>0,K=T.iridescence>0,V=T.sheen>0,_e=T.transmission>0,le=b&&!!T.anisotropyMap,De=I&&!!T.clearcoatMap,Ae=I&&!!T.clearcoatNormalMap,se=I&&!!T.clearcoatRoughnessMap,xe=K&&!!T.iridescenceMap,Le=K&&!!T.iridescenceThicknessMap,Pe=V&&!!T.sheenColorMap,ye=V&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Ge=!!T.specularColorMap,gt=!!T.specularIntensityMap,F=_e&&!!T.transmissionMap,de=_e&&!!T.thicknessMap,Y=!!T.gradientMap,ee=!!T.alphaMap,me=T.alphaTest>0,pe=!!T.alphaHash,Ie=!!T.extensions;let Rt=Pa;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Rt=t.toneMapping);const an={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:q,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Re,batchingColor:Re&&X._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&X.instanceColor!==null,instancingMorph:Ye&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ue===null?t.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Hr,alphaToCoverage:!!T.alphaToCoverage,map:St,matcap:Be,envMap:Fe,envMapMode:Fe&&k.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:Wt,bumpMap:qe,normalMap:Ve,displacementMap:h&&be,emissiveMap:at,normalMapObjectSpace:Ve&&T.normalMapType===MT,normalMapTangentSpace:Ve&&T.normalMapType===bT,metalnessMap:Me,roughnessMap:w,anisotropy:b,anisotropyMap:le,clearcoat:I,clearcoatMap:De,clearcoatNormalMap:Ae,clearcoatRoughnessMap:se,dispersion:Z,iridescence:K,iridescenceMap:xe,iridescenceThicknessMap:Le,sheen:V,sheenColorMap:Pe,sheenRoughnessMap:ye,specularMap:$e,specularColorMap:Ge,specularIntensityMap:gt,transmission:_e,transmissionMap:F,thicknessMap:de,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Mr&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:pe,combine:T.combine,mapUv:St&&S(T.map.channel),aoMapUv:D&&S(T.aoMap.channel),lightMapUv:Wt&&S(T.lightMap.channel),bumpMapUv:qe&&S(T.bumpMap.channel),normalMapUv:Ve&&S(T.normalMap.channel),displacementMapUv:be&&S(T.displacementMap.channel),emissiveMapUv:at&&S(T.emissiveMap.channel),metalnessMapUv:Me&&S(T.metalnessMap.channel),roughnessMapUv:w&&S(T.roughnessMap.channel),anisotropyMapUv:le&&S(T.anisotropyMap.channel),clearcoatMapUv:De&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:ye&&S(T.sheenRoughnessMap.channel),specularMapUv:$e&&S(T.specularMap.channel),specularColorMapUv:Ge&&S(T.specularColorMap.channel),specularIntensityMapUv:gt&&S(T.specularIntensityMap.channel),transmissionMapUv:F&&S(T.transmissionMap.channel),thicknessMapUv:de&&S(T.thicknessMap.channel),alphaMapUv:ee&&S(T.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Ve||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ne.attributes.uv&&(St||ee),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Te,skinning:X.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ve,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Rt,decodeVideoTexture:St&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===ut,decodeVideoTextureEmissive:at&&T.emissiveMap.isVideoTexture===!0&&nt.getTransfer(T.emissiveMap.colorSpace)===ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===zi,flipSided:T.side===Sn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return an.vertexUv1s=c.has(1),an.vertexUv2s=c.has(2),an.vertexUv3s=c.has(3),c.clear(),an}function u(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)E.push(U),E.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(g(E,T),v(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function g(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function v(T,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),T.push(o.mask)}function x(T){const E=y[T.type];let U;if(E){const W=_i[E];U=sl.clone(W.uniforms)}else U=T.uniforms;return U}function R(T,E){let U;for(let W=0,X=d.length;W<X;W++){const te=d[W];if(te.cacheKey===E){U=te,++U.usedTimes;break}}return U===void 0&&(U=new bC(t,E,T,s),d.push(U)),U}function C(T){if(--T.usedTimes===0){const E=d.indexOf(T);d[E]=d[d.length-1],d.pop(),T.destroy()}}function A(T){l.remove(T)}function N(){l.dispose()}return{getParameters:_,getProgramCacheKey:u,getUniforms:x,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:N}}function wC(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function i(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:s}}function CC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function cv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function uv(){const t=[];let e=0;const n=[],i=[],a=[];function s(){e=0,n.length=0,i.length=0,a.length=0}function r(f,h,m,y,S,_){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:y,renderOrder:f.renderOrder,z:S,group:_},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=S,u.group=_),e++,u}function o(f,h,m,y,S,_){const u=r(f,h,m,y,S,_);m.transmission>0?i.push(u):m.transparent===!0?a.push(u):n.push(u)}function l(f,h,m,y,S,_){const u=r(f,h,m,y,S,_);m.transmission>0?i.unshift(u):m.transparent===!0?a.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||CC),i.length>1&&i.sort(h||cv),a.length>1&&a.sort(h||cv)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:a,init:s,push:o,unshift:l,finish:d,sort:c}}function NC(){let t=new WeakMap;function e(i,a){const s=t.get(i);let r;return s===void 0?(r=new uv,t.set(i,[r])):a>=s.length?(r=new uv,s.push(r)):r=s[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function DC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Je};break;case"SpotLight":n={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function UC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LC=0;function FC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function OC(t){const e=new DC,n=UC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const a=new B,s=new It,r=new It;function o(c){let d=0,f=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,y=0,S=0,_=0,u=0,g=0,v=0,x=0,R=0,C=0,A=0;c.sort(FC);for(let T=0,E=c.length;T<E;T++){const U=c[T],W=U.color,X=U.intensity,te=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=W.r*X,f+=W.g*X,h+=W.b*X;else if(U.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(U.sh.coefficients[L],X);A++}else if(U.isDirectionalLight){const L=e.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const k=U.shadow,z=n.get(U);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=U.shadow.matrix,g++}i.directional[m]=L,m++}else if(U.isSpotLight){const L=e.get(U);L.position.setFromMatrixPosition(U.matrixWorld),L.color.copy(W).multiplyScalar(X),L.distance=te,L.coneCos=Math.cos(U.angle),L.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),L.decay=U.decay,i.spot[S]=L;const k=U.shadow;if(U.map&&(i.spotLightMap[R]=U.map,R++,k.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[S]=k.matrix,U.castShadow){const z=n.get(U);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,i.spotShadow[S]=z,i.spotShadowMap[S]=ne,x++}S++}else if(U.isRectAreaLight){const L=e.get(U);L.color.copy(W).multiplyScalar(X),L.halfWidth.set(U.width*.5,0,0),L.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=L,_++}else if(U.isPointLight){const L=e.get(U);if(L.color.copy(U.color).multiplyScalar(U.intensity),L.distance=U.distance,L.decay=U.decay,U.castShadow){const k=U.shadow,z=n.get(U);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,i.pointShadow[y]=z,i.pointShadowMap[y]=ne,i.pointShadowMatrix[y]=U.shadow.matrix,v++}i.point[y]=L,y++}else if(U.isHemisphereLight){const L=e.get(U);L.skyColor.copy(U.color).multiplyScalar(X),L.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[u]=L,u++}}_>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==m||N.pointLength!==y||N.spotLength!==S||N.rectAreaLength!==_||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==v||N.numSpotShadows!==x||N.numSpotMaps!==R||N.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=_,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=m,N.pointLength=y,N.spotLength=S,N.rectAreaLength=_,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=v,N.numSpotShadows=x,N.numSpotMaps=R,N.numLightProbes=A,i.version=LC++)}function l(c,d){let f=0,h=0,m=0,y=0,S=0;const _=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(_),f++}else if(v.isSpotLight){const x=i.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(a),x.direction.transformDirection(_),m++}else if(v.isRectAreaLight){const x=i.rectArea[y];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),r.identity(),s.copy(v.matrixWorld),s.premultiply(_),r.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),y++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),h++}else if(v.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),S++}}}return{setup:o,setupView:l,state:i}}function fv(t){const e=new OC(t),n=[],i=[];function a(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function r(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function PC(t){let e=new WeakMap;function n(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new fv(t),e.set(a,[o])):s>=r.length?(o=new fv(t),r.push(o)):o=r[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const zC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BC=`uniform sampler2D shadow_pass;
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
}`;function IC(t,e,n){let i=new rS;const a=new Ce,s=new Ce,r=new Lt,o=new fA({depthPacking:ET}),l=new hA,c={},d=n.maxTextureSize,f={[Va]:Sn,[Sn]:Va,[zi]:zi},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:zC,fragmentShader:BC}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const y=new ia;y.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new oi(y,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dy;let u=this.type;this.render=function(C,A,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Yi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=u!==Oi&&this.type===Oi,te=u===Oi&&this.type!==Oi;for(let ne=0,L=C.length;ne<L;ne++){const k=C[ne],z=k.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const ae=z.getFrameExtents();if(a.multiply(ae),s.copy(z.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/ae.x),a.x=s.x*ae.x,z.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/ae.y),a.y=s.y*ae.y,z.mapSize.y=s.y)),z.map===null||X===!0||te===!0){const Ee=this.type!==Oi?{minFilter:ci,magFilter:ci}:{};z.map!==null&&z.map.dispose(),z.map=new ui(a.x,a.y,Ee),z.map.texture.name=k.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const ce=z.getViewportCount();for(let Ee=0;Ee<ce;Ee++){const ve=z.getViewport(Ee);r.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),W.viewport(r),z.updateMatrices(k,Ee),i=z.getFrustum(),x(A,N,z.camera,k,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&g(z,N),z.needsUpdate=!1}u=this.type,_.needsUpdate=!1,t.setRenderTarget(T,E,U)};function g(C,A){const N=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ui(a.x,a.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,N,h,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,N,m,S,null)}function v(C,A,N,T){let E=null;const U=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)E=U;else if(E=N.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const W=E.uuid,X=A.uuid;let te=c[W];te===void 0&&(te={},c[W]=te);let ne=te[X];ne===void 0&&(ne=E.clone(),te[X]=ne,A.addEventListener("dispose",R)),E=ne}if(E.visible=A.visible,E.wireframe=A.wireframe,T===Oi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=t.properties.get(E);W.light=N}return E}function x(C,A,N,T,E){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const X=e.update(C),te=C.material;if(Array.isArray(te)){const ne=X.groups;for(let L=0,k=ne.length;L<k;L++){const z=ne[L],ae=te[z.materialIndex];if(ae&&ae.visible){const ce=v(C,ae,T,E);C.onBeforeShadow(t,C,A,N,X,ce,z),t.renderBufferDirect(N,null,X,ce,C,z),C.onAfterShadow(t,C,A,N,X,ce,z)}}}else if(te.visible){const ne=v(C,te,T,E);C.onBeforeShadow(t,C,A,N,X,ne,null),t.renderBufferDirect(N,null,X,ne,C,null),C.onAfterShadow(t,C,A,N,X,ne,null)}}const W=C.children;for(let X=0,te=W.length;X<te;X++)x(W[X],A,N,T,E)}function R(C){C.target.removeEventListener("dispose",R);for(const N in c){const T=c[N],E=C.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const HC={[dd]:pd,[md]:vd,[_d]:xd,[zr]:gd,[pd]:dd,[vd]:md,[xd]:_d,[gd]:zr};function VC(t,e){function n(){let F=!1;const de=new Lt;let Y=null;const ee=new Lt(0,0,0,0);return{setMask:function(me){Y!==me&&!F&&(t.colorMask(me,me,me,me),Y=me)},setLocked:function(me){F=me},setClear:function(me,pe,Ie,Rt,an){an===!0&&(me*=Rt,pe*=Rt,Ie*=Rt),de.set(me,pe,Ie,Rt),ee.equals(de)===!1&&(t.clearColor(me,pe,Ie,Rt),ee.copy(de))},reset:function(){F=!1,Y=null,ee.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,Y=null,ee=null,me=null;return{setReversed:function(pe){if(de!==pe){const Ie=e.get("EXT_clip_control");pe?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),de=pe;const Rt=me;me=null,this.setClear(Rt)}},getReversed:function(){return de},setTest:function(pe){pe?ue(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!F&&(t.depthMask(pe),Y=pe)},setFunc:function(pe){if(de&&(pe=HC[pe]),ee!==pe){switch(pe){case dd:t.depthFunc(t.NEVER);break;case pd:t.depthFunc(t.ALWAYS);break;case md:t.depthFunc(t.LESS);break;case zr:t.depthFunc(t.LEQUAL);break;case _d:t.depthFunc(t.EQUAL);break;case gd:t.depthFunc(t.GEQUAL);break;case vd:t.depthFunc(t.GREATER);break;case xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=pe}},setLocked:function(pe){F=pe},setClear:function(pe){me!==pe&&(de&&(pe=1-pe),t.clearDepth(pe),me=pe)},reset:function(){F=!1,Y=null,ee=null,me=null,de=!1}}}function a(){let F=!1,de=null,Y=null,ee=null,me=null,pe=null,Ie=null,Rt=null,an=null;return{setTest:function(ct){F||(ct?ue(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(ct){de!==ct&&!F&&(t.stencilMask(ct),de=ct)},setFunc:function(ct,$n,Ai){(Y!==ct||ee!==$n||me!==Ai)&&(t.stencilFunc(ct,$n,Ai),Y=ct,ee=$n,me=Ai)},setOp:function(ct,$n,Ai){(pe!==ct||Ie!==$n||Rt!==Ai)&&(t.stencilOp(ct,$n,Ai),pe=ct,Ie=$n,Rt=Ai)},setLocked:function(ct){F=ct},setClear:function(ct){an!==ct&&(t.clearStencil(ct),an=ct)},reset:function(){F=!1,de=null,Y=null,ee=null,me=null,pe=null,Ie=null,Rt=null,an=null}}}const s=new n,r=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],y=null,S=!1,_=null,u=null,g=null,v=null,x=null,R=null,C=null,A=new Je(0,0,0),N=0,T=!1,E=null,U=null,W=null,X=null,te=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,k=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(z)[1]),L=k>=1):z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),L=k>=2);let ae=null,ce={};const Ee=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),We=new Lt().fromArray(Ee),q=new Lt().fromArray(ve);function oe(F,de,Y,ee){const me=new Uint8Array(4),pe=t.createTexture();t.bindTexture(F,pe),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<Y;Ie++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return pe}const ie={};ie[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),r.setFunc(zr),qe(!1),Ve(_g),ue(t.CULL_FACE),D(Yi);function ue(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function Te(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Ye(F,de){return f[F]!==de?(t.bindFramebuffer(F,de),f[F]=de,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(F,de){let Y=m,ee=!1;if(F){Y=h.get(de),Y===void 0&&(Y=[],h.set(de,Y));const me=F.textures;if(Y.length!==me.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Ie=me.length;pe<Ie;pe++)Y[pe]=t.COLOR_ATTACHMENT0+pe;Y.length=me.length,ee=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,ee=!0);ee&&t.drawBuffers(Y)}function St(F){return y!==F?(t.useProgram(F),y=F,!0):!1}const Be={[ss]:t.FUNC_ADD,[tT]:t.FUNC_SUBTRACT,[nT]:t.FUNC_REVERSE_SUBTRACT};Be[iT]=t.MIN,Be[aT]=t.MAX;const Fe={[sT]:t.ZERO,[rT]:t.ONE,[oT]:t.SRC_COLOR,[fd]:t.SRC_ALPHA,[dT]:t.SRC_ALPHA_SATURATE,[fT]:t.DST_COLOR,[cT]:t.DST_ALPHA,[lT]:t.ONE_MINUS_SRC_COLOR,[hd]:t.ONE_MINUS_SRC_ALPHA,[hT]:t.ONE_MINUS_DST_COLOR,[uT]:t.ONE_MINUS_DST_ALPHA,[pT]:t.CONSTANT_COLOR,[mT]:t.ONE_MINUS_CONSTANT_COLOR,[_T]:t.CONSTANT_ALPHA,[gT]:t.ONE_MINUS_CONSTANT_ALPHA};function D(F,de,Y,ee,me,pe,Ie,Rt,an,ct){if(F===Yi){S===!0&&(Te(t.BLEND),S=!1);return}if(S===!1&&(ue(t.BLEND),S=!0),F!==eT){if(F!==_||ct!==T){if((u!==ss||x!==ss)&&(t.blendEquation(t.FUNC_ADD),u=ss,x=ss),ct)switch(F){case Mr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.ONE,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Mr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ud:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,v=null,R=null,C=null,A.set(0,0,0),N=0,_=F,T=ct}return}me=me||de,pe=pe||Y,Ie=Ie||ee,(de!==u||me!==x)&&(t.blendEquationSeparate(Be[de],Be[me]),u=de,x=me),(Y!==g||ee!==v||pe!==R||Ie!==C)&&(t.blendFuncSeparate(Fe[Y],Fe[ee],Fe[pe],Fe[Ie]),g=Y,v=ee,R=pe,C=Ie),(Rt.equals(A)===!1||an!==N)&&(t.blendColor(Rt.r,Rt.g,Rt.b,an),A.copy(Rt),N=an),_=F,T=!1}function Wt(F,de){F.side===zi?Te(t.CULL_FACE):ue(t.CULL_FACE);let Y=F.side===Sn;de&&(Y=!Y),qe(Y),F.blending===Mr&&F.transparent===!1?D(Yi):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),at(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){E!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),E=F)}function Ve(F){F!==Q1?(ue(t.CULL_FACE),F!==U&&(F===_g?t.cullFace(t.BACK):F===J1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),U=F}function be(F){F!==W&&(L&&t.lineWidth(F),W=F)}function at(F,de,Y){F?(ue(t.POLYGON_OFFSET_FILL),(X!==de||te!==Y)&&(t.polygonOffset(de,Y),X=de,te=Y)):Te(t.POLYGON_OFFSET_FILL)}function Me(F){F?ue(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function w(F){F===void 0&&(F=t.TEXTURE0+ne-1),ae!==F&&(t.activeTexture(F),ae=F)}function b(F,de,Y){Y===void 0&&(ae===null?Y=t.TEXTURE0+ne-1:Y=ae);let ee=ce[Y];ee===void 0&&(ee={type:void 0,texture:void 0},ce[Y]=ee),(ee.type!==F||ee.texture!==de)&&(ae!==Y&&(t.activeTexture(Y),ae=Y),t.bindTexture(F,de||ie[F]),ee.type=F,ee.texture=de)}function I(){const F=ce[ae];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{t.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{t.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{t.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{t.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{t.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){We.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),We.copy(F))}function ye(F){q.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function $e(F,de){let Y=c.get(de);Y===void 0&&(Y=new WeakMap,c.set(de,Y));let ee=Y.get(F);ee===void 0&&(ee=t.getUniformBlockIndex(de,F.name),Y.set(F,ee))}function Ge(F,de){const ee=c.get(de).get(F);l.get(de)!==ee&&(t.uniformBlockBinding(de,ee,F.__bindingPointIndex),l.set(de,ee))}function gt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ae=null,ce={},f={},h=new WeakMap,m=[],y=null,S=!1,_=null,u=null,g=null,v=null,x=null,R=null,C=null,A=new Je(0,0,0),N=0,T=!1,E=null,U=null,W=null,X=null,te=null,We.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ue,disable:Te,bindFramebuffer:Ye,drawBuffers:Re,useProgram:St,setBlending:D,setMaterial:Wt,setFlipSided:qe,setCullFace:Ve,setLineWidth:be,setPolygonOffset:at,setScissorTest:Me,activeTexture:w,bindTexture:b,unbindTexture:I,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:xe,texImage3D:Le,updateUBOMapping:$e,uniformBlockBinding:Ge,texStorage2D:Ae,texStorage3D:se,texSubImage2D:V,texSubImage3D:_e,compressedTexSubImage2D:le,compressedTexSubImage3D:De,scissor:Pe,viewport:ye,reset:gt}}function GC(t,e,n,i,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,b){return m?new OffscreenCanvas(w,b):xu("canvas")}function S(w,b,I){let Z=1;const K=Me(w);if((K.width>I||K.height>I)&&(Z=I/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(Z*K.width),_e=Math.floor(Z*K.height);f===void 0&&(f=y(V,_e));const le=b?y(V,_e):f;return le.width=V,le.height=_e,le.getContext("2d").drawImage(w,0,0,V,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+_e+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function _(w){return w.generateMipmaps}function u(w){t.generateMipmap(w)}function g(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(w,b,I,Z,K=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=b;if(b===t.RED&&(I===t.FLOAT&&(V=t.R32F),I===t.HALF_FLOAT&&(V=t.R16F),I===t.UNSIGNED_BYTE&&(V=t.R8)),b===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.R8UI),I===t.UNSIGNED_SHORT&&(V=t.R16UI),I===t.UNSIGNED_INT&&(V=t.R32UI),I===t.BYTE&&(V=t.R8I),I===t.SHORT&&(V=t.R16I),I===t.INT&&(V=t.R32I)),b===t.RG&&(I===t.FLOAT&&(V=t.RG32F),I===t.HALF_FLOAT&&(V=t.RG16F),I===t.UNSIGNED_BYTE&&(V=t.RG8)),b===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RG8UI),I===t.UNSIGNED_SHORT&&(V=t.RG16UI),I===t.UNSIGNED_INT&&(V=t.RG32UI),I===t.BYTE&&(V=t.RG8I),I===t.SHORT&&(V=t.RG16I),I===t.INT&&(V=t.RG32I)),b===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RGB8UI),I===t.UNSIGNED_SHORT&&(V=t.RGB16UI),I===t.UNSIGNED_INT&&(V=t.RGB32UI),I===t.BYTE&&(V=t.RGB8I),I===t.SHORT&&(V=t.RGB16I),I===t.INT&&(V=t.RGB32I)),b===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),I===t.UNSIGNED_INT&&(V=t.RGBA32UI),I===t.BYTE&&(V=t.RGBA8I),I===t.SHORT&&(V=t.RGBA16I),I===t.INT&&(V=t.RGBA32I)),b===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),b===t.RGBA){const _e=K?gu:nt.getTransfer(Z);I===t.FLOAT&&(V=t.RGBA32F),I===t.HALF_FLOAT&&(V=t.RGBA16F),I===t.UNSIGNED_BYTE&&(V=_e===ut?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(w,b){let I;return w?b===null||b===ys||b===nl?I=t.DEPTH24_STENCIL8:b===ji?I=t.DEPTH32F_STENCIL8:b===tl&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ys||b===nl?I=t.DEPTH_COMPONENT24:b===ji?I=t.DEPTH_COMPONENT32F:b===tl&&(I=t.DEPTH_COMPONENT16),I}function R(w,b){return _(w)===!0||w.isFramebufferTexture&&w.minFilter!==ci&&w.minFilter!==xi?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function C(w){const b=w.target;b.removeEventListener("dispose",C),N(b),b.isVideoTexture&&d.delete(b)}function A(w){const b=w.target;b.removeEventListener("dispose",A),E(b)}function N(w){const b=i.get(w);if(b.__webglInit===void 0)return;const I=w.source,Z=h.get(I);if(Z){const K=Z[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(w),Object.keys(Z).length===0&&h.delete(I)}i.remove(w)}function T(w){const b=i.get(w);t.deleteTexture(b.__webglTexture);const I=w.source,Z=h.get(I);delete Z[b.__cacheKey],r.memory.textures--}function E(w){const b=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let K=0;K<b.__webglFramebuffer[Z].length;K++)t.deleteFramebuffer(b.__webglFramebuffer[Z][K]);else t.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)t.deleteFramebuffer(b.__webglFramebuffer[Z]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const I=w.textures;for(let Z=0,K=I.length;Z<K;Z++){const V=i.get(I[Z]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(I[Z])}i.remove(w)}let U=0;function W(){U=0}function X(){const w=U;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),U+=1,w}function te(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function ne(w,b){const I=i.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(I,w,b);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+b)}function L(w,b){const I=i.get(w);if(w.version>0&&I.__version!==w.version){q(I,w,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+b)}function k(w,b){const I=i.get(w);if(w.version>0&&I.__version!==w.version){q(I,w,b);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+b)}function z(w,b){const I=i.get(w);if(w.version>0&&I.__version!==w.version){oe(I,w,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+b)}const ae={[Ed]:t.REPEAT,[os]:t.CLAMP_TO_EDGE,[bd]:t.MIRRORED_REPEAT},ce={[ci]:t.NEAREST,[yT]:t.NEAREST_MIPMAP_NEAREST,[Xl]:t.NEAREST_MIPMAP_LINEAR,[xi]:t.LINEAR,[Nf]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},Ee={[TT]:t.NEVER,[DT]:t.ALWAYS,[AT]:t.LESS,[Zy]:t.LEQUAL,[RT]:t.EQUAL,[NT]:t.GEQUAL,[wT]:t.GREATER,[CT]:t.NOTEQUAL};function ve(w,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===xi||b.magFilter===Nf||b.magFilter===Xl||b.magFilter===ls||b.minFilter===xi||b.minFilter===Nf||b.minFilter===Xl||b.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,ae[b.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ae[b.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,ae[b.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ce[b.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,Ee[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ci||b.minFilter!==Xl&&b.minFilter!==ls||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function We(w,b){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",C));const Z=b.source;let K=h.get(Z);K===void 0&&(K={},h.set(Z,K));const V=te(b);if(V!==w.__cacheKey){K[V]===void 0&&(K[V]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,I=!0),K[V].usedTimes++;const _e=K[w.__cacheKey];_e!==void 0&&(K[w.__cacheKey].usedTimes--,_e.usedTimes===0&&T(b)),w.__cacheKey=V,w.__webglTexture=K[V].texture}return I}function q(w,b,I){let Z=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=t.TEXTURE_3D);const K=We(w,b),V=b.source;n.bindTexture(Z,w.__webglTexture,t.TEXTURE0+I);const _e=i.get(V);if(V.version!==_e.__version||K===!0){n.activeTexture(t.TEXTURE0+I);const le=nt.getPrimaries(nt.workingColorSpace),De=b.colorSpace===ya?null:nt.getPrimaries(b.colorSpace),Ae=b.colorSpace===ya||le===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=S(b.image,!1,a.maxTextureSize);se=at(b,se);const xe=s.convert(b.format,b.colorSpace),Le=s.convert(b.type);let Pe=v(b.internalFormat,xe,Le,b.colorSpace,b.isVideoTexture);ve(Z,b);let ye;const $e=b.mipmaps,Ge=b.isVideoTexture!==!0,gt=_e.__version===void 0||K===!0,F=V.dataReady,de=R(b,se);if(b.isDepthTexture)Pe=x(b.format===al,b.type),gt&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Pe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,xe,Le,null));else if(b.isDataTexture)if($e.length>0){Ge&&gt&&n.texStorage2D(t.TEXTURE_2D,de,Pe,$e[0].width,$e[0].height);for(let Y=0,ee=$e.length;Y<ee;Y++)ye=$e[Y],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,Le,ye.data):n.texImage2D(t.TEXTURE_2D,Y,Pe,ye.width,ye.height,0,xe,Le,ye.data);b.generateMipmaps=!1}else Ge?(gt&&n.texStorage2D(t.TEXTURE_2D,de,Pe,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,xe,Le,se.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,se.width,se.height,0,xe,Le,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ge&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Pe,$e[0].width,$e[0].height,se.depth);for(let Y=0,ee=$e.length;Y<ee;Y++)if(ye=$e[Y],b.format!==ri)if(xe!==null)if(Ge){if(F)if(b.layerUpdates.size>0){const me=Vg(ye.width,ye.height,b.format,b.type);for(const pe of b.layerUpdates){const Ie=ye.data.subarray(pe*me/ye.data.BYTES_PER_ELEMENT,(pe+1)*me/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,pe,ye.width,ye.height,1,xe,Ie)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,xe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Pe,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,xe,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,Pe,ye.width,ye.height,se.depth,0,xe,Le,ye.data)}else{Ge&&gt&&n.texStorage2D(t.TEXTURE_2D,de,Pe,$e[0].width,$e[0].height);for(let Y=0,ee=$e.length;Y<ee;Y++)ye=$e[Y],b.format!==ri?xe!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ye.width,ye.height,xe,Le,ye.data):n.texImage2D(t.TEXTURE_2D,Y,Pe,ye.width,ye.height,0,xe,Le,ye.data)}else if(b.isDataArrayTexture)if(Ge){if(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Pe,se.width,se.height,se.depth),F)if(b.layerUpdates.size>0){const Y=Vg(se.width,se.height,b.format,b.type);for(const ee of b.layerUpdates){const me=se.data.subarray(ee*Y/se.data.BYTES_PER_ELEMENT,(ee+1)*Y/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,xe,Le,me)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Le,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,xe,Le,se.data);else if(b.isData3DTexture)Ge?(gt&&n.texStorage3D(t.TEXTURE_3D,de,Pe,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Le,se.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,xe,Le,se.data);else if(b.isFramebufferTexture){if(gt)if(Ge)n.texStorage2D(t.TEXTURE_2D,de,Pe,se.width,se.height);else{let Y=se.width,ee=se.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,Pe,Y,ee,0,xe,Le,null),Y>>=1,ee>>=1}}else if($e.length>0){if(Ge&&gt){const Y=Me($e[0]);n.texStorage2D(t.TEXTURE_2D,de,Pe,Y.width,Y.height)}for(let Y=0,ee=$e.length;Y<ee;Y++)ye=$e[Y],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,xe,Le,ye):n.texImage2D(t.TEXTURE_2D,Y,Pe,xe,Le,ye);b.generateMipmaps=!1}else if(Ge){if(gt){const Y=Me(se);n.texStorage2D(t.TEXTURE_2D,de,Pe,Y.width,Y.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Le,se)}else n.texImage2D(t.TEXTURE_2D,0,Pe,xe,Le,se);_(b)&&u(Z),_e.__version=V.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function oe(w,b,I){if(b.image.length!==6)return;const Z=We(w,b),K=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+I);const V=i.get(K);if(K.version!==V.__version||Z===!0){n.activeTexture(t.TEXTURE0+I);const _e=nt.getPrimaries(nt.workingColorSpace),le=b.colorSpace===ya?null:nt.getPrimaries(b.colorSpace),De=b.colorSpace===ya||_e===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Ae=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!Ae&&!se?xe[ee]=S(b.image[ee],!0,a.maxCubemapSize):xe[ee]=se?b.image[ee].image:b.image[ee],xe[ee]=at(b,xe[ee]);const Le=xe[0],Pe=s.convert(b.format,b.colorSpace),ye=s.convert(b.type),$e=v(b.internalFormat,Pe,ye,b.colorSpace),Ge=b.isVideoTexture!==!0,gt=V.__version===void 0||Z===!0,F=K.dataReady;let de=R(b,Le);ve(t.TEXTURE_CUBE_MAP,b);let Y;if(Ae){Ge&&gt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,$e,Le.width,Le.height);for(let ee=0;ee<6;ee++){Y=xe[ee].mipmaps;for(let me=0;me<Y.length;me++){const pe=Y[me];b.format!==ri?Pe!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,pe.width,pe.height,Pe,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,pe.width,pe.height,Pe,ye,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,$e,pe.width,pe.height,0,Pe,ye,pe.data)}}}else{if(Y=b.mipmaps,Ge&&gt){Y.length>0&&de++;const ee=Me(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,Pe,ye,xe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,xe[ee].width,xe[ee].height,0,Pe,ye,xe[ee].data);for(let me=0;me<Y.length;me++){const Ie=Y[me].image[ee].image;Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Ie.width,Ie.height,Pe,ye,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,$e,Ie.width,Ie.height,0,Pe,ye,Ie.data)}}else{Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,ye,xe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Pe,ye,xe[ee]);for(let me=0;me<Y.length;me++){const pe=Y[me];Ge?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Pe,ye,pe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,$e,Pe,ye,pe.image[ee])}}}_(b)&&u(t.TEXTURE_CUBE_MAP),V.__version=K.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function ie(w,b,I,Z,K,V){const _e=s.convert(I.format,I.colorSpace),le=s.convert(I.type),De=v(I.internalFormat,_e,le,I.colorSpace),Ae=i.get(b),se=i.get(I);if(se.__renderTarget=b,!Ae.__hasExternalTextures){const xe=Math.max(1,b.width>>V),Le=Math.max(1,b.height>>V);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,V,De,xe,Le,b.depth,0,_e,le,null):n.texImage2D(K,V,De,xe,Le,0,_e,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Ve(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,K,se.__webglTexture,0,qe(b)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,K,se.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(w,b,I){if(t.bindRenderbuffer(t.RENDERBUFFER,w),b.depthBuffer){const Z=b.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,V=x(b.stencilBuffer,K),_e=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=qe(b);Ve(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,V,b.width,b.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,V,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,V,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,w)}else{const Z=b.textures;for(let K=0;K<Z.length;K++){const V=Z[K],_e=s.convert(V.format,V.colorSpace),le=s.convert(V.type),De=v(V.internalFormat,_e,le,V.colorSpace),Ae=qe(b);I&&Ve(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,De,b.width,b.height):Ve(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,De,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,De,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ne(b.depthTexture,0);const K=Z.__webglTexture,V=qe(b);if(b.depthTexture.format===il)Ve(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(b.depthTexture.format===al)Ve(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ye(w){const b=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Z}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const Z=w.texture.mipmaps;Z&&Z.length>0?Te(b.__webglFramebuffer[0],w):Te(b.__webglFramebuffer,w)}else if(I){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=t.createRenderbuffer(),ue(b.__webglDepthbuffer[Z],w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,V)}}else{const Z=w.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),ue(b.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,V)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(w,b,I){const Z=i.get(w);b!==void 0&&ie(Z.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Ye(w)}function St(w){const b=w.texture,I=i.get(w),Z=i.get(b);w.addEventListener("dispose",A);const K=w.textures,V=w.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=b.version,r.memory.textures++),V){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let De=0;De<b.mipmaps.length;De++)I.__webglFramebuffer[le][De]=t.createFramebuffer()}else I.__webglFramebuffer[le]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)I.__webglFramebuffer[le]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(_e)for(let le=0,De=K.length;le<De;le++){const Ae=i.get(K[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),r.memory.textures++)}if(w.samples>0&&Ve(w)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const De=K[le];I.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[le]);const Ae=s.convert(De.format,De.colorSpace),se=s.convert(De.type),xe=v(De.internalFormat,Ae,se,De.colorSpace,w.isXRRenderTarget===!0),Le=qe(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,xe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,I.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(I.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(t.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)ie(I.__webglFramebuffer[le][De],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De);else ie(I.__webglFramebuffer[le],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);_(b)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let le=0,De=K.length;le<De;le++){const Ae=K[le],se=i.get(Ae);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ve(t.TEXTURE_2D,Ae),ie(I.__webglFramebuffer,w,Ae,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),_(Ae)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Z.__webglTexture),ve(le,b),b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)ie(I.__webglFramebuffer[De],w,b,t.COLOR_ATTACHMENT0,le,De);else ie(I.__webglFramebuffer,w,b,t.COLOR_ATTACHMENT0,le,0);_(b)&&u(le),n.unbindTexture()}w.depthBuffer&&Ye(w)}function Be(w){const b=w.textures;for(let I=0,Z=b.length;I<Z;I++){const K=b[I];if(_(K)){const V=g(w),_e=i.get(K).__webglTexture;n.bindTexture(V,_e),u(V),n.unbindTexture()}}}const Fe=[],D=[];function Wt(w){if(w.samples>0){if(Ve(w)===!1){const b=w.textures,I=w.width,Z=w.height;let K=t.COLOR_BUFFER_BIT;const V=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(w),le=b.length>1;if(le)for(let Ae=0;Ae<b.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const De=w.texture.mipmaps;De&&De.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ae=0;Ae<b.length;Ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const se=i.get(b[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,I,Z,0,0,I,Z,K,t.NEAREST),l===!0&&(Fe.length=0,D.length=0,Fe.push(t.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Fe.push(V),D.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<b.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ae]);const se=i.get(b[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const b=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function qe(w){return Math.min(a.maxSamples,w.samples)}function Ve(w){const b=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function be(w){const b=r.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}function at(w,b){const I=w.colorSpace,Z=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||I!==Hr&&I!==ya&&(nt.getTransfer(I)===ut?(Z!==ri||K!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),b}function Me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=L,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=Re,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ve}function jC(t,e){function n(i,a=ya){let s;const r=nt.getTransfer(a);if(i===ea)return t.UNSIGNED_BYTE;if(i===rm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===om)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vy)return t.BYTE;if(i===Gy)return t.SHORT;if(i===tl)return t.UNSIGNED_SHORT;if(i===sm)return t.INT;if(i===ys)return t.UNSIGNED_INT;if(i===ji)return t.FLOAT;if(i===qi)return t.HALF_FLOAT;if(i===ky)return t.ALPHA;if(i===Xy)return t.RGB;if(i===ri)return t.RGBA;if(i===il)return t.DEPTH_COMPONENT;if(i===al)return t.DEPTH_STENCIL;if(i===Wy)return t.RED;if(i===lm)return t.RED_INTEGER;if(i===Yy)return t.RG;if(i===cm)return t.RG_INTEGER;if(i===um)return t.RGBA_INTEGER;if(i===Cc||i===Nc||i===Dc||i===Uc)if(r===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Dc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===Td||i===Ad||i===Rd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wd||i===Cd||i===Nd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wd||i===Cd)return r===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dd||i===Ud||i===Ld||i===Fd||i===Od||i===Pd||i===zd||i===Bd||i===Id||i===Hd||i===Vd||i===Gd||i===jd||i===kd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ud)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Od)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Id)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kd)return r===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===Xd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lc)return r===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qy||i===Yd||i===qd||i===Zd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const kC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
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

}`;class WC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const a=new En,s=e.properties.get(a);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new cn({vertexShader:kC,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new Gu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YC extends Ns{constructor(e,n){super();const i=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,y=null;const S=new WC,_=n.getContextAttributes();let u=null,g=null;const v=[],x=[],R=new Ce;let C=null;const A=new Wn;A.viewport=new Lt;const N=new Wn;N.viewport=new Lt;const T=[A,N],E=new dA;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=v[q];return oe===void 0&&(oe=new Qf,v[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=v[q];return oe===void 0&&(oe=new Qf,v[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=v[q];return oe===void 0&&(oe=new Qf,v[q]=oe),oe.getHandSpace()};function X(q){const oe=x.indexOf(q.inputSource);if(oe===-1)return;const ie=v[oe];ie!==void 0&&(ie.update(q.inputSource,q.frame,c||r),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function te(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",ne);for(let q=0;q<v.length;q++){const oe=x[q];oe!==null&&(x[q]=null,v[q].disconnect(oe))}U=null,W=null,S.reset(),e.setRenderTarget(u),m=null,h=null,f=null,a=null,g=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(u=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",te),a.addEventListener("inputsourceschange",ne),_.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ue=null,Te=null;_.depth&&(Te=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=_.stencil?al:il,ue=_.stencil?nl:ys);const Ye={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};f=new XRWebGLBinding(a,n),h=f.createProjectionLayer(Ye),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new ui(h.textureWidth,h.textureHeight,{format:ri,type:ea,depthTexture:new oS(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,n,ie),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new ui(m.framebufferWidth,m.framebufferHeight,{format:ri,type:ea,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),We.setContext(a),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ne(q){for(let oe=0;oe<q.removed.length;oe++){const ie=q.removed[oe],ue=x.indexOf(ie);ue>=0&&(x[ue]=null,v[ue].disconnect(ie))}for(let oe=0;oe<q.added.length;oe++){const ie=q.added[oe];let ue=x.indexOf(ie);if(ue===-1){for(let Ye=0;Ye<v.length;Ye++)if(Ye>=x.length){x.push(ie),ue=Ye;break}else if(x[Ye]===null){x[Ye]=ie,ue=Ye;break}if(ue===-1)break}const Te=v[ue];Te&&Te.connect(ie)}}const L=new B,k=new B;function z(q,oe,ie){L.setFromMatrixPosition(oe.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const ue=L.distanceTo(k),Te=oe.projectionMatrix.elements,Ye=ie.projectionMatrix.elements,Re=Te[14]/(Te[10]-1),St=Te[14]/(Te[10]+1),Be=(Te[9]+1)/Te[5],Fe=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],Wt=(Ye[8]+1)/Ye[0],qe=Re*D,Ve=Re*Wt,be=ue/(-D+Wt),at=be*-D;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(at),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Me=Re+be,w=St+be,b=qe-at,I=Ve+(ue-at),Z=Be*St/w*Me,K=Fe*St/w*Me;q.projectionMatrix.makePerspective(b,I,Z,K,Me,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let oe=q.near,ie=q.far;S.texture!==null&&(S.depthNear>0&&(oe=S.depthNear),S.depthFar>0&&(ie=S.depthFar)),E.near=N.near=A.near=oe,E.far=N.far=A.far=ie,(U!==E.near||W!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,W=E.far),A.layers.mask=q.layers.mask|2,N.layers.mask=q.layers.mask|4,E.layers.mask=A.layers.mask|N.layers.mask;const ue=q.parent,Te=E.cameras;ae(E,ue);for(let Ye=0;Ye<Te.length;Ye++)ae(Te[Ye],ue);Te.length===2?z(E,A,N):E.projectionMatrix.copy(A.projectionMatrix),ce(q,E,ue)};function ce(q,oe,ie){ie===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Kd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(E)};let Ee=null;function ve(q,oe){if(d=oe.getViewerPose(c||r),y=oe,d!==null){const ie=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ue=!1;ie.length!==E.cameras.length&&(E.cameras.length=0,ue=!0);for(let Re=0;Re<ie.length;Re++){const St=ie[Re];let Be=null;if(m!==null)Be=m.getViewport(St);else{const D=f.getViewSubImage(h,St);Be=D.viewport,Re===0&&(e.setRenderTargetTextures(g,D.colorTexture,D.depthStencilTexture),e.setRenderTarget(g))}let Fe=T[Re];Fe===void 0&&(Fe=new Wn,Fe.layers.enable(Re),Fe.viewport=new Lt,T[Re]=Fe),Fe.matrix.fromArray(St.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(St.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Re===0&&(E.matrix.copy(Fe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ue===!0&&E.cameras.push(Fe)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&f){const Re=f.getDepthInformation(ie[0]);Re&&Re.isValid&&Re.texture&&S.init(e,Re,a.renderState)}}for(let ie=0;ie<v.length;ie++){const ue=x[ie],Te=v[ie];ue!==null&&Te!==void 0&&Te.update(ue,oe,c||r)}Ee&&Ee(q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),y=null}const We=new uS;We.setAnimationLoop(ve),this.setAnimationLoop=function(q){Ee=q},this.dispose=function(){}}}const es=new ta,qC=new It;function ZC(t,e){function n(_,u){_.matrixAutoUpdate===!0&&_.updateMatrix(),u.value.copy(_.matrix)}function i(_,u){u.color.getRGB(_.fogColor.value,iS(t)),u.isFog?(_.fogNear.value=u.near,_.fogFar.value=u.far):u.isFogExp2&&(_.fogDensity.value=u.density)}function a(_,u,g,v,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(_,u):u.isMeshToonMaterial?(s(_,u),f(_,u)):u.isMeshPhongMaterial?(s(_,u),d(_,u)):u.isMeshStandardMaterial?(s(_,u),h(_,u),u.isMeshPhysicalMaterial&&m(_,u,x)):u.isMeshMatcapMaterial?(s(_,u),y(_,u)):u.isMeshDepthMaterial?s(_,u):u.isMeshDistanceMaterial?(s(_,u),S(_,u)):u.isMeshNormalMaterial?s(_,u):u.isLineBasicMaterial?(r(_,u),u.isLineDashedMaterial&&o(_,u)):u.isPointsMaterial?l(_,u,g,v):u.isSpriteMaterial?c(_,u):u.isShadowMaterial?(_.color.value.copy(u.color),_.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(_,u){_.opacity.value=u.opacity,u.color&&_.diffuse.value.copy(u.color),u.emissive&&_.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.bumpMap&&(_.bumpMap.value=u.bumpMap,n(u.bumpMap,_.bumpMapTransform),_.bumpScale.value=u.bumpScale,u.side===Sn&&(_.bumpScale.value*=-1)),u.normalMap&&(_.normalMap.value=u.normalMap,n(u.normalMap,_.normalMapTransform),_.normalScale.value.copy(u.normalScale),u.side===Sn&&_.normalScale.value.negate()),u.displacementMap&&(_.displacementMap.value=u.displacementMap,n(u.displacementMap,_.displacementMapTransform),_.displacementScale.value=u.displacementScale,_.displacementBias.value=u.displacementBias),u.emissiveMap&&(_.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,_.emissiveMapTransform)),u.specularMap&&(_.specularMap.value=u.specularMap,n(u.specularMap,_.specularMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,x=g.envMapRotation;v&&(_.envMap.value=v,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),_.envMapRotation.value.setFromMatrix4(qC.makeRotationFromEuler(es)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=u.reflectivity,_.ior.value=u.ior,_.refractionRatio.value=u.refractionRatio),u.lightMap&&(_.lightMap.value=u.lightMap,_.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,_.lightMapTransform)),u.aoMap&&(_.aoMap.value=u.aoMap,_.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,_.aoMapTransform))}function r(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform))}function o(_,u){_.dashSize.value=u.dashSize,_.totalSize.value=u.dashSize+u.gapSize,_.scale.value=u.scale}function l(_,u,g,v){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.size.value=u.size*g,_.scale.value=v*.5,u.map&&(_.map.value=u.map,n(u.map,_.uvTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function c(_,u){_.diffuse.value.copy(u.color),_.opacity.value=u.opacity,_.rotation.value=u.rotation,u.map&&(_.map.value=u.map,n(u.map,_.mapTransform)),u.alphaMap&&(_.alphaMap.value=u.alphaMap,n(u.alphaMap,_.alphaMapTransform)),u.alphaTest>0&&(_.alphaTest.value=u.alphaTest)}function d(_,u){_.specular.value.copy(u.specular),_.shininess.value=Math.max(u.shininess,1e-4)}function f(_,u){u.gradientMap&&(_.gradientMap.value=u.gradientMap)}function h(_,u){_.metalness.value=u.metalness,u.metalnessMap&&(_.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,_.metalnessMapTransform)),_.roughness.value=u.roughness,u.roughnessMap&&(_.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,_.roughnessMapTransform)),u.envMap&&(_.envMapIntensity.value=u.envMapIntensity)}function m(_,u,g){_.ior.value=u.ior,u.sheen>0&&(_.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),_.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(_.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,_.sheenColorMapTransform)),u.sheenRoughnessMap&&(_.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,_.sheenRoughnessMapTransform))),u.clearcoat>0&&(_.clearcoat.value=u.clearcoat,_.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(_.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,_.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(_.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Sn&&_.clearcoatNormalScale.value.negate())),u.dispersion>0&&(_.dispersion.value=u.dispersion),u.iridescence>0&&(_.iridescence.value=u.iridescence,_.iridescenceIOR.value=u.iridescenceIOR,_.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(_.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,_.iridescenceMapTransform)),u.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),u.transmission>0&&(_.transmission.value=u.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(_.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,_.transmissionMapTransform)),_.thickness.value=u.thickness,u.thicknessMap&&(_.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=u.attenuationDistance,_.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(_.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(_.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=u.specularIntensity,_.specularColor.value.copy(u.specularColor),u.specularColorMap&&(_.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,_.specularColorMapTransform)),u.specularIntensityMap&&(_.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,u){u.matcap&&(_.matcap.value=u.matcap)}function S(_,u){const g=e.get(u).light;_.referencePosition.value.setFromMatrixPosition(g.matrixWorld),_.nearDistance.value=g.shadow.camera.near,_.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function KC(t,e,n,i){let a={},s={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function c(g,v){let x=a[g.id];x===void 0&&(y(g),x=d(g),a[g.id]=x,g.addEventListener("dispose",_));const R=v.program;i.updateUBOMapping(g,R);const C=e.render.frame;s[g.id]!==C&&(h(g),s[g.id]=C)}function d(g){const v=f();g.__bindingPointIndex=v;const x=t.createBuffer(),R=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function f(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=a[g.id],x=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=x.length;C<A;C++){const N=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,E=N.length;T<E;T++){const U=N[T];if(m(U,C,T,R)===!0){const W=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let te=0;for(let ne=0;ne<X.length;ne++){const L=X[ne],k=S(L);typeof L=="number"||typeof L=="boolean"?(U.__data[0]=L,t.bufferSubData(t.UNIFORM_BUFFER,W+te,U.__data)):L.isMatrix3?(U.__data[0]=L.elements[0],U.__data[1]=L.elements[1],U.__data[2]=L.elements[2],U.__data[3]=0,U.__data[4]=L.elements[3],U.__data[5]=L.elements[4],U.__data[6]=L.elements[5],U.__data[7]=0,U.__data[8]=L.elements[6],U.__data[9]=L.elements[7],U.__data[10]=L.elements[8],U.__data[11]=0):(L.toArray(U.__data,te),te+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,x,R){const C=g.value,A=v+"_"+x;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const N=R[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return R[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function y(g){const v=g.uniforms;let x=0;const R=16;for(let A=0,N=v.length;A<N;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let E=0,U=T.length;E<U;E++){const W=T[E],X=Array.isArray(W.value)?W.value:[W.value];for(let te=0,ne=X.length;te<ne;te++){const L=X[te],k=S(L),z=x%R,ae=z%k.boundary,ce=z+ae;x+=ae,ce!==0&&R-ce<k.storage&&(x+=R-ce),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=k.storage}}}const C=x%R;return C>0&&(x+=R-C),g.__size=x,g.__cache={},this}function S(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function _(g){const v=g.target;v.removeEventListener("dispose",_);const x=r.indexOf(v.__bindingPointIndex);r.splice(x,1),t.deleteBuffer(a[v.id]),delete a[v.id],delete s[v.id]}function u(){for(const g in a)t.deleteBuffer(a[g]);r=[],a={},s={}}return{bind:l,update:c,dispose:u}}class QC{constructor(e={}){const{canvas:n=FT(),context:i=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;const y=new Uint32Array(4),S=new Int32Array(4);let _=null,u=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=Dn;let C=0,A=0,N=null,T=-1,E=null;const U=new Lt,W=new Lt;let X=null;const te=new Je(0);let ne=0,L=n.width,k=n.height,z=1,ae=null,ce=null;const Ee=new Lt(0,0,L,k),ve=new Lt(0,0,L,k);let We=!1;const q=new rS;let oe=!1,ie=!1;const ue=new It,Te=new It,Ye=new B,Re=new Lt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Fe(){return N===null?z:1}let D=i;function Wt(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${am}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",pe,!1),D===null){const O="webgl2";if(D=Wt(O,M),D===null)throw Wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let qe,Ve,be,at,Me,w,b,I,Z,K,V,_e,le,De,Ae,se,xe,Le,Pe,ye,$e,Ge,gt,F;function de(){qe=new ow(D),qe.init(),Ge=new jC(D,qe),Ve=new ew(D,qe,e,Ge),be=new VC(D,qe),Ve.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),at=new uw(D),Me=new wC,w=new GC(D,qe,be,Me,Ve,Ge,at),b=new nw(x),I=new rw(x),Z=new _A(D),gt=new JR(D,Z),K=new lw(D,Z,at,gt),V=new hw(D,K,Z,at),Pe=new fw(D,Ve,w),se=new tw(Me),_e=new RC(x,b,I,qe,Ve,gt,se),le=new ZC(x,Me),De=new NC,Ae=new PC(qe),Le=new QR(x,b,I,be,V,m,l),xe=new IC(x,V,Ve),F=new KC(D,at,Ve,be),ye=new $R(D,qe,at),$e=new cw(D,qe,at),at.programs=_e.programs,x.capabilities=Ve,x.extensions=qe,x.properties=Me,x.renderLists=De,x.shadowMap=xe,x.state=be,x.info=at}de();const Y=new YC(x,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize(L,k,!1))},this.getSize=function(M){return M.set(L,k)},this.setSize=function(M,O,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,k=O,n.width=Math.floor(M*z),n.height=Math.floor(O*z),G===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(L*z,k*z).floor()},this.setDrawingBufferSize=function(M,O,G){L=M,k=O,z=G,n.width=Math.floor(M*G),n.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,O,G,j){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,O,G,j),be.viewport(U.copy(Ee).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,O,G,j){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,O,G,j),be.scissor(W.copy(ve).multiplyScalar(z).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(M){be.setScissorTest(We=M)},this.setOpaqueSort=function(M){ae=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,G=!0){let j=0;if(M){let P=!1;if(N!==null){const re=N.texture.format;P=re===um||re===cm||re===lm}if(P){const re=N.texture.type,he=re===ea||re===ys||re===tl||re===nl||re===rm||re===om,ge=Le.getClearColor(),Se=Le.getClearAlpha(),ze=ge.r,Oe=ge.g,we=ge.b;he?(y[0]=ze,y[1]=Oe,y[2]=we,y[3]=Se,D.clearBufferuiv(D.COLOR,0,y)):(S[0]=ze,S[1]=Oe,S[2]=we,S[3]=Se,D.clearBufferiv(D.COLOR,0,S))}else j|=D.COLOR_BUFFER_BIT}O&&(j|=D.DEPTH_BUFFER_BIT),G&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Le.dispose(),De.dispose(),Ae.dispose(),Me.dispose(),b.dispose(),I.dispose(),V.dispose(),gt.dispose(),F.dispose(),_e.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",xm),Y.removeEventListener("sessionend",ym),Wa.stop()};function ee(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=at.autoReset,O=xe.enabled,G=xe.autoUpdate,j=xe.needsUpdate,P=xe.type;de(),at.autoReset=M,xe.enabled=O,xe.autoUpdate=G,xe.needsUpdate=j,xe.type=P}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ie(M){const O=M.target;O.removeEventListener("dispose",Ie),Rt(O)}function Rt(M){an(M),Me.remove(M)}function an(M){const O=Me.get(M).programs;O!==void 0&&(O.forEach(function(G){_e.releaseProgram(G)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,j,P,re){O===null&&(O=St);const he=P.isMesh&&P.matrixWorld.determinant()<0,ge=vS(M,O,G,j,P);be.setMaterial(j,he);let Se=G.index,ze=1;if(j.wireframe===!0){if(Se=K.getWireframeAttribute(G),Se===void 0)return;ze=2}const Oe=G.drawRange,we=G.attributes.position;let tt=Oe.start*ze,ot=(Oe.start+Oe.count)*ze;re!==null&&(tt=Math.max(tt,re.start*ze),ot=Math.min(ot,(re.start+re.count)*ze)),Se!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Se.count)):we!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,we.count));const Ft=ot-tt;if(Ft<0||Ft===1/0)return;gt.setup(P,j,ge,G,Se);let wt,it=ye;if(Se!==null&&(wt=Z.get(Se),it=$e,it.setIndex(wt)),P.isMesh)j.wireframe===!0?(be.setLineWidth(j.wireframeLinewidth*Fe()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(P.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),be.setLineWidth(Ne*Fe()),P.isLineSegments?it.setMode(D.LINES):P.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else P.isPoints?it.setMode(D.POINTS):P.isSprite&&it.setMode(D.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Oc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))it.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ne=P._multiDrawStarts,$t=P._multiDrawCounts,lt=P._multiDrawCount,ei=Se?Z.get(Se).bytesPerElement:1,Ds=Me.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<lt;Tn++)Ds.setValue(D,"_gl_DrawID",Tn),it.render(Ne[Tn]/ei,$t[Tn])}else if(P.isInstancedMesh)it.renderInstances(tt,Ft,P.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,$t=Math.min(G.instanceCount,Ne);it.renderInstances(tt,Ft,$t)}else it.render(tt,Ft)};function ct(M,O,G){M.transparent===!0&&M.side===zi&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,Rl(M,O,G),M.side=Va,M.needsUpdate=!0,Rl(M,O,G),M.side=zi):Rl(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),u=Ae.get(G),u.init(O),v.push(u),G.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),M!==G&&M.traverseVisible(function(P){P.isLight&&P.layers.test(O.layers)&&(u.pushLight(P),P.castShadow&&u.pushShadow(P))}),u.setupLights();const j=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const re=P.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ge=re[he];ct(ge,G,P),j.add(ge)}else ct(re,G,P),j.add(re)}),u=v.pop(),j},this.compileAsync=function(M,O,G=null){const j=this.compile(M,O,G);return new Promise(P=>{function re(){if(j.forEach(function(he){Me.get(he).currentProgram.isReady()&&j.delete(he)}),j.size===0){P(M);return}setTimeout(re,10)}qe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let $n=null;function Ai(M){$n&&$n(M)}function xm(){Wa.stop()}function ym(){Wa.start()}const Wa=new uS;Wa.setAnimationLoop(Ai),typeof self<"u"&&Wa.setContext(self),this.setAnimationLoop=function(M){$n=M,Y.setAnimationLoop(M),M===null?Wa.stop():Wa.start()},Y.addEventListener("sessionstart",xm),Y.addEventListener("sessionend",ym),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,O,N),u=Ae.get(M,v.length),u.init(O),v.push(u),Te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Te),ie=this.localClippingEnabled,oe=se.init(this.clippingPlanes,ie),_=De.get(M,g.length),_.init(),g.push(_),Y.enabled===!0&&Y.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&ku(re,O,-1/0,x.sortObjects)}ku(M,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ae,ce),Be=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Be&&Le.addToRenderList(_,M),this.info.render.frame++,oe===!0&&se.beginShadows();const G=u.state.shadowsArray;xe.render(G,M,O),oe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,P=_.transmissive;if(u.setupLights(),O.isArrayCamera){const re=O.cameras;if(P.length>0)for(let he=0,ge=re.length;he<ge;he++){const Se=re[he];Em(j,P,M,Se)}Be&&Le.render(M);for(let he=0,ge=re.length;he<ge;he++){const Se=re[he];Sm(_,M,Se,Se.viewport)}}else P.length>0&&Em(j,P,M,O),Be&&Le.render(M),Sm(_,M,O);N!==null&&A===0&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(x,M,O),gt.resetDefaultState(),T=-1,E=null,v.pop(),v.length>0?(u=v[v.length-1],oe===!0&&se.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function ku(M,O,G,j){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){j&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Te);const he=V.update(M),ge=M.material;ge.visible&&_.push(M,he,ge,G,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const he=V.update(M),ge=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Re.copy(he.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(Te)),Array.isArray(ge)){const Se=he.groups;for(let ze=0,Oe=Se.length;ze<Oe;ze++){const we=Se[ze],tt=ge[we.materialIndex];tt&&tt.visible&&_.push(M,he,tt,G,Re.z,we)}}else ge.visible&&_.push(M,he,ge,G,Re.z,null)}}const re=M.children;for(let he=0,ge=re.length;he<ge;he++)ku(re[he],O,G,j)}function Sm(M,O,G,j){const P=M.opaque,re=M.transmissive,he=M.transparent;u.setupLightsView(G),oe===!0&&se.setGlobalState(x.clippingPlanes,G),j&&be.viewport(U.copy(j)),P.length>0&&Al(P,O,G),re.length>0&&Al(re,O,G),he.length>0&&Al(he,O,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Em(M,O,G,j){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new ui(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?qi:ea,minFilter:ls,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const re=u.state.transmissionRenderTarget[j.id],he=j.viewport||U;re.setSize(he.z*x.transmissionResolutionScale,he.w*x.transmissionResolutionScale);const ge=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(te),ne=x.getClearAlpha(),ne<1&&x.setClearColor(16777215,.5),x.clear(),Be&&Le.render(G);const Se=x.toneMapping;x.toneMapping=Pa;const ze=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),oe===!0&&se.setGlobalState(x.clippingPlanes,j),Al(M,G,j),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let we=0,tt=O.length;we<tt;we++){const ot=O[we],Ft=ot.object,wt=ot.geometry,it=ot.material,Ne=ot.group;if(it.side===zi&&Ft.layers.test(j.layers)){const $t=it.side;it.side=Sn,it.needsUpdate=!0,bm(Ft,G,j,wt,it,Ne),it.side=$t,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re))}x.setRenderTarget(ge),x.setClearColor(te,ne),ze!==void 0&&(j.viewport=ze),x.toneMapping=Se}function Al(M,O,G){const j=O.isScene===!0?O.overrideMaterial:null;for(let P=0,re=M.length;P<re;P++){const he=M[P],ge=he.object,Se=he.geometry,ze=he.group;let Oe=he.material;Oe.allowOverride===!0&&j!==null&&(Oe=j),ge.layers.test(G.layers)&&bm(ge,O,G,Se,Oe,ze)}}function bm(M,O,G,j,P,re){M.onBeforeRender(x,O,G,j,P,re),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(x,O,G,j,M,re),P.transparent===!0&&P.side===zi&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,x.renderBufferDirect(G,O,j,P,M,re),P.side=Va,P.needsUpdate=!0,x.renderBufferDirect(G,O,j,P,M,re),P.side=zi):x.renderBufferDirect(G,O,j,P,M,re),M.onAfterRender(x,O,G,j,P,re)}function Rl(M,O,G){O.isScene!==!0&&(O=St);const j=Me.get(M),P=u.state.lights,re=u.state.shadowsArray,he=P.state.version,ge=_e.getParameters(M,P.state,re,O,G),Se=_e.getProgramCacheKey(ge);let ze=j.programs;j.environment=M.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(M.isMeshStandardMaterial?I:b).get(M.envMap||j.environment),j.envMapRotation=j.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",Ie),ze=new Map,j.programs=ze);let Oe=ze.get(Se);if(Oe!==void 0){if(j.currentProgram===Oe&&j.lightsStateVersion===he)return Tm(M,ge),Oe}else ge.uniforms=_e.getUniforms(M),M.onBeforeCompile(ge,x),Oe=_e.acquireProgram(ge,Se),ze.set(Se,Oe),j.uniforms=ge.uniforms;const we=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(we.clippingPlanes=se.uniform),Tm(M,ge),j.needsLights=yS(M),j.lightsStateVersion=he,j.needsLights&&(we.ambientLightColor.value=P.state.ambient,we.lightProbe.value=P.state.probe,we.directionalLights.value=P.state.directional,we.directionalLightShadows.value=P.state.directionalShadow,we.spotLights.value=P.state.spot,we.spotLightShadows.value=P.state.spotShadow,we.rectAreaLights.value=P.state.rectArea,we.ltc_1.value=P.state.rectAreaLTC1,we.ltc_2.value=P.state.rectAreaLTC2,we.pointLights.value=P.state.point,we.pointLightShadows.value=P.state.pointShadow,we.hemisphereLights.value=P.state.hemi,we.directionalShadowMap.value=P.state.directionalShadowMap,we.directionalShadowMatrix.value=P.state.directionalShadowMatrix,we.spotShadowMap.value=P.state.spotShadowMap,we.spotLightMatrix.value=P.state.spotLightMatrix,we.spotLightMap.value=P.state.spotLightMap,we.pointShadowMap.value=P.state.pointShadowMap,we.pointShadowMatrix.value=P.state.pointShadowMatrix),j.currentProgram=Oe,j.uniformsList=null,Oe}function Mm(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Pc.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Tm(M,O){const G=Me.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function vS(M,O,G,j,P){O.isScene!==!0&&(O=St),w.resetTextureUnits();const re=O.fog,he=j.isMeshStandardMaterial?O.environment:null,ge=N===null?x.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Hr,Se=(j.isMeshStandardMaterial?I:b).get(j.envMap||he),ze=j.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),we=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,ot=!!G.morphAttributes.color;let Ft=Pa;j.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const wt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=wt!==void 0?wt.length:0,Ne=Me.get(j),$t=u.state.lights;if(oe===!0&&(ie===!0||M!==E)){const un=M===E&&j.id===T;se.setState(j,M,un)}let lt=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==$t.state.version||Ne.outputColorSpace!==ge||P.isBatchedMesh&&Ne.batching===!1||!P.isBatchedMesh&&Ne.batching===!0||P.isBatchedMesh&&Ne.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ne.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ne.instancing===!1||!P.isInstancedMesh&&Ne.instancing===!0||P.isSkinnedMesh&&Ne.skinning===!1||!P.isSkinnedMesh&&Ne.skinning===!0||P.isInstancedMesh&&Ne.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ne.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ne.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ne.instancingMorph===!1&&P.morphTexture!==null||Ne.envMap!==Se||j.fog===!0&&Ne.fog!==re||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Oe||Ne.morphTargets!==we||Ne.morphNormals!==tt||Ne.morphColors!==ot||Ne.toneMapping!==Ft||Ne.morphTargetsCount!==it)&&(lt=!0):(lt=!0,Ne.__version=j.version);let ei=Ne.currentProgram;lt===!0&&(ei=Rl(j,O,P));let Ds=!1,Tn=!1,Jr=!1;const Et=ei.getUniforms(),In=Ne.uniforms;if(be.useProgram(ei.program)&&(Ds=!0,Tn=!0,Jr=!0),j.id!==T&&(T=j.id,Tn=!0),Ds||E!==M){be.buffers.depth.getReversed()?(ue.copy(M.projectionMatrix),PT(ue),zT(ue),Et.setValue(D,"projectionMatrix",ue)):Et.setValue(D,"projectionMatrix",M.projectionMatrix),Et.setValue(D,"viewMatrix",M.matrixWorldInverse);const mn=Et.map.cameraPosition;mn!==void 0&&mn.setValue(D,Ye.setFromMatrixPosition(M.matrixWorld)),Ve.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Et.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Tn=!0,Jr=!0)}if(P.isSkinnedMesh){Et.setOptional(D,P,"bindMatrix"),Et.setOptional(D,P,"bindMatrixInverse");const un=P.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Et.setValue(D,"boneTexture",un.boneTexture,w))}P.isBatchedMesh&&(Et.setOptional(D,P,"batchingTexture"),Et.setValue(D,"batchingTexture",P._matricesTexture,w),Et.setOptional(D,P,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",P._indirectTexture,w),Et.setOptional(D,P,"batchingColorTexture"),P._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",P._colorsTexture,w));const Hn=G.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Pe.update(P,G,ei),(Tn||Ne.receiveShadow!==P.receiveShadow)&&(Ne.receiveShadow=P.receiveShadow,Et.setValue(D,"receiveShadow",P.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(In.envMap.value=Se,In.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(In.envMapIntensity.value=O.environmentIntensity),Tn&&(Et.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&xS(In,Jr),re&&j.fog===!0&&le.refreshFogUniforms(In,re),le.refreshMaterialUniforms(In,j,z,k,u.state.transmissionRenderTarget[M.id]),Pc.upload(D,Mm(Ne),In,w)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Pc.upload(D,Mm(Ne),In,w),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Et.setValue(D,"center",P.center),Et.setValue(D,"modelViewMatrix",P.modelViewMatrix),Et.setValue(D,"normalMatrix",P.normalMatrix),Et.setValue(D,"modelMatrix",P.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const un=j.uniformsGroups;for(let mn=0,Xu=un.length;mn<Xu;mn++){const Ya=un[mn];F.update(Ya,ei),F.bind(Ya,ei)}}return ei}function xS(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function yS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,O,G){const j=Me.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Me.get(M.texture).__webglTexture=O,Me.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:G,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const G=Me.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const SS=D.createFramebuffer();this.setRenderTarget=function(M,O=0,G=0){N=M,C=O,A=G;let j=!0,P=null,re=!1,he=!1;if(M){const Se=Me.get(M);if(Se.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(Se.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(Se.__hasExternalTextures)w.rebindTextures(M,Me.get(M.texture).__webglTexture,Me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const we=M.depthTexture;if(Se.__boundDepthTexture!==we){if(we!==null&&Me.has(we)&&(M.width!==we.image.width||M.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(he=!0);const Oe=Me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?P=Oe[O][G]:P=Oe[O],re=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?P=Me.get(M).__webglMultisampledFramebuffer:Array.isArray(Oe)?P=Oe[G]:P=Oe,U.copy(M.viewport),W.copy(M.scissor),X=M.scissorTest}else U.copy(Ee).multiplyScalar(z).floor(),W.copy(ve).multiplyScalar(z).floor(),X=We;if(G!==0&&(P=SS),be.bindFramebuffer(D.FRAMEBUFFER,P)&&j&&be.drawBuffers(M,P),be.viewport(U),be.scissor(W),be.setScissorTest(X),re){const Se=Me.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,G)}else if(he){const Se=Me.get(M.texture),ze=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,G,ze)}else if(M!==null&&G!==0){const Se=Me.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,G)}T=-1},this.readRenderTargetPixels=function(M,O,G,j,P,re,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge){be.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Se=M.texture,ze=Se.format,Oe=Se.type;if(!Ve.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-j&&G>=0&&G<=M.height-P&&D.readPixels(O,G,j,P,Ge.convert(ze),Ge.convert(Oe),re)}finally{const Se=N!==null?Me.get(N).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,O,G,j,P,re,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(ge=ge[he]),ge)if(O>=0&&O<=M.width-j&&G>=0&&G<=M.height-P){be.bindFramebuffer(D.FRAMEBUFFER,ge);const Se=M.texture,ze=Se.format,Oe=Se.type;if(!Ve.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(O,G,j,P,Ge.convert(ze),Ge.convert(Oe),0);const tt=N!==null?Me.get(N).__webglFramebuffer:null;be.bindFramebuffer(D.FRAMEBUFFER,tt);const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await OT(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(we),D.deleteSync(ot),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,G=0){const j=Math.pow(2,-G),P=Math.floor(M.image.width*j),re=Math.floor(M.image.height*j),he=O!==null?O.x:0,ge=O!==null?O.y:0;w.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,he,ge,P,re),be.unbindTexture()};const ES=D.createFramebuffer(),bS=D.createFramebuffer();this.copyTextureToTexture=function(M,O,G=null,j=null,P=0,re=null){re===null&&(P!==0?(Oc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=P,P=0):re=0);let he,ge,Se,ze,Oe,we,tt,ot,Ft;const wt=M.isCompressedTexture?M.mipmaps[re]:M.image;if(G!==null)he=G.max.x-G.min.x,ge=G.max.y-G.min.y,Se=G.isBox3?G.max.z-G.min.z:1,ze=G.min.x,Oe=G.min.y,we=G.isBox3?G.min.z:0;else{const Hn=Math.pow(2,-P);he=Math.floor(wt.width*Hn),ge=Math.floor(wt.height*Hn),M.isDataArrayTexture?Se=wt.depth:M.isData3DTexture?Se=Math.floor(wt.depth*Hn):Se=1,ze=0,Oe=0,we=0}j!==null?(tt=j.x,ot=j.y,Ft=j.z):(tt=0,ot=0,Ft=0);const it=Ge.convert(O.format),Ne=Ge.convert(O.type);let $t;O.isData3DTexture?(w.setTexture3D(O,0),$t=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),$t=D.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),$t=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),ei=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ds=D.getParameter(D.UNPACK_SKIP_PIXELS),Tn=D.getParameter(D.UNPACK_SKIP_ROWS),Jr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we);const Et=M.isDataArrayTexture||M.isData3DTexture,In=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Hn=Me.get(M),un=Me.get(O),mn=Me.get(Hn.__renderTarget),Xu=Me.get(un.__renderTarget);be.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xu.__webglFramebuffer);for(let Ya=0;Ya<Se;Ya++)Et&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(M).__webglTexture,P,we+Ya),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(O).__webglTexture,re,Ft+Ya)),D.blitFramebuffer(ze,Oe,he,ge,tt,ot,he,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(P!==0||M.isRenderTargetTexture||Me.has(M)){const Hn=Me.get(M),un=Me.get(O);be.bindFramebuffer(D.READ_FRAMEBUFFER,ES),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,bS);for(let mn=0;mn<Se;mn++)Et?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,P,we+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,P),In?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,un.__webglTexture,re,Ft+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,un.__webglTexture,re),P!==0?D.blitFramebuffer(ze,Oe,he,ge,tt,ot,he,ge,D.COLOR_BUFFER_BIT,D.NEAREST):In?D.copyTexSubImage3D($t,re,tt,ot,Ft+mn,ze,Oe,he,ge):D.copyTexSubImage2D($t,re,tt,ot,ze,Oe,he,ge);be.bindFramebuffer(D.READ_FRAMEBUFFER,null),be.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else In?M.isDataTexture||M.isData3DTexture?D.texSubImage3D($t,re,tt,ot,Ft,he,ge,Se,it,Ne,wt.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D($t,re,tt,ot,Ft,he,ge,Se,it,wt.data):D.texSubImage3D($t,re,tt,ot,Ft,he,ge,Se,it,Ne,wt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,tt,ot,he,ge,it,Ne,wt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,tt,ot,wt.width,wt.height,it,wt.data):D.texSubImage2D(D.TEXTURE_2D,re,tt,ot,he,ge,it,Ne,wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ei),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ds),D.pixelStorei(D.UNPACK_SKIP_ROWS,Tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jr),re===0&&O.generateMipmaps&&D.generateMipmap($t),be.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G=null,j=null,P=0){return Oc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,G,j,P)},this.initRenderTarget=function(M){Me.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),be.unbindTexture()},this.resetState=function(){C=0,A=0,N=null,be.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}const hv={type:"change"},gm={type:"start"},mS={type:"end"},dc=new Jy,dv=new ma,JC=Math.cos(70*LT.DEG2RAD),Ht=new B,gn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sh=1e-6;class $C extends pA{constructor(e,n=null){super(e,n),this.state=mt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:dr.ROTATE,TWO:dr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ss,this._lastTargetPosition=new B,this._quat=new Ss().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hg,this._sphericalDelta=new Hg,this._scale=1,this._panOffset=new B,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new B,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tN.bind(this),this._onPointerDown=eN.bind(this),this._onPointerUp=nN.bind(this),this._onContextMenu=cN.bind(this),this._onMouseWheel=sN.bind(this),this._onKeyDown=rN.bind(this),this._onTouchStart=oN.bind(this),this._onTouchMove=lN.bind(this),this._onMouseDown=iN.bind(this),this._onMouseMove=aN.bind(this),this._interceptControlDown=uN.bind(this),this._interceptControlUp=fN.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hv),this.update(),this.state=mt.NONE}update(e=null){const n=this.object.position;Ht.copy(n).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),a<-Math.PI?a+=gn:a>Math.PI&&(a-=gn),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Ht.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(dc.origin.copy(this.object.position),dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dc.direction))<JC?this.object.lookAt(this.target):(dv.setFromNormalAndCoplanarPoint(this.object.up,this.target),dc.intersectPlane(dv,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sh||this._lastTargetPosition.distanceToSquared(this.target)>sh?(this.dispatchEvent(hv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ht.setFromMatrixColumn(n,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,n){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(n,1):(Ht.setFromMatrixColumn(n,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Ht.copy(a).sub(this.target);let s=Ht.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,s=n-i.top,r=i.width,o=i.height;this._mouse.x=a/r*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,a=e.pageY-n.y,s=Math.sqrt(i*i+a*a);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(a,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/n.clientHeight),this._rotateUp(gn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,a=e.pageY-n.y,s=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eN(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function tN(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function nN(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mS),this.state=mt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function iN(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=mt.DOLLY;break;case br.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=mt.ROTATE}break;case br.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(gm)}function aN(t){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function sN(t){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(t.preventDefault(),this.dispatchEvent(gm),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(mS))}function rN(t){this.enabled!==!1&&this._handleKeyDown(t)}function oN(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case dr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=mt.TOUCH_ROTATE;break;case dr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case dr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=mt.TOUCH_DOLLY_PAN;break;case dr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(gm)}function lN(t){switch(this._trackPointer(t),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=mt.NONE}}function cN(t){this.enabled!==!1&&t.preventDefault()}function uN(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fN(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const zc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hN=new lS(-1,1,1,-1,0,1);class dN extends ia{constructor(){super(),this.setAttribute("position",new Kn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kn([0,2,0,0,2,0],2))}}const pN=new dN;class vm{constructor(e){this._mesh=new oi(pN,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,hN)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mN extends Qr{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sl.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new vm(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class pv extends Qr{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}}class _N extends Qr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gN{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ce);this._width=i.width,this._height=i.height,n=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mN(zc),this.copyPass.material.blending=Yi,this.clock=new cS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let a=0,s=this.passes.length;a<s;a++){const r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pv!==void 0&&(r instanceof pv?i=!0:r instanceof _N&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vN extends Qr{constructor(e,n,i=null,a=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,n,i){const a=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}}const xN={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Gr extends Qr{constructor(e,n=1,i,a){super(),this.strength=n,this.radius=i,this.threshold=a,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(s,r,{type:qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new ui(s,r,{type:qi});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new ui(s,r,{type:qi});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),r=Math.round(r/2)}const o=xN;this.highPassUniforms=sl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ce(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sl.clone(zc.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:zc.vertexShader,fragmentShader:zc.fragmentShader,blending:ud,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new dm,this._fsQuad=new vm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),a=Math.round(n/2);this.renderTargetBright.setSize(i,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,a),this.renderTargetsVertical[s].setSize(i,a),this.separableBlurMaterials[s].uniforms.invSize.value=new Ce(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(e,n,i,a,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Gr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Gr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Gr.BlurDirectionX=new Ce(1,0);Gr.BlurDirectionY=new Ce(0,1);const pc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class yN extends Qr{constructor(){super(),this.uniforms=sl.clone(pc.uniforms),this.material=new uA({name:pc.name,uniforms:this.uniforms,vertexShader:pc.vertexShader,fragmentShader:pc.fragmentShader}),this._fsQuad=new vm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ly?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Py?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===By?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Iy?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zy&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const SN=`
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
`,EN=`
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
`,_S=({audioData:t,isListening:e,initialQuality:n="medium",orbColors:i,canvasColor:a=0,initialGlow:s,enableOrbitControls:r=!0,autoRotate:o=!1,showGui:l=!1,guiPositionTop:c=100,inertiaEnabled:d=!0,inertiaLevel:f=.05,zoomEnabled:h=!1,spikeLevel:m=5.5,smoothnessLevel:y=.7,className:S="",containerStyle:_={}})=>{var q,oe;const u=$.useRef(null),g=$.useRef(null),v=$.useRef(null),x=$.useRef(null),R=$.useRef(null),C=$.useRef(null),A=$.useRef(null),N=$.useRef(null),T=$.useRef(null),E=$.useRef(null),U=$.useRef(0);$.useRef([]);const[W,X]=$.useState({x:0,y:0}),[te,ne]=$.useState(0),[L,k]=$.useState(n),z=$.useMemo(()=>{if(typeof window>"u")return{isMobile:!1,isLowEndDevice:!1,initialQuality:n};const ie=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),ue=ie||(window.navigator.hardwareConcurrency||4)<=4;return{isMobile:ie,isLowEndDevice:ue,initialQuality:ue?"low":n}},[n]),ae=ie=>typeof ie=="number"?new Je(ie):typeof ie=="string"?new Je(ie):ie&&typeof ie=="object"&&"r"in ie&&"g"in ie&&"b"in ie?new Je(ie.r/255,ie.g/255,ie.b/255):new Je(0),ce=ie=>typeof ie=="number"?`#${ie.toString(16).padStart(6,"0")}`:typeof ie=="string"?ie.startsWith("#")||ie.startsWith("rgb")||/^[a-z]+$/i.test(ie)?ie:/^[0-9A-F]{6}$/i.test(ie)?`#${ie}`:"#000000":ie&&typeof ie=="object"&&"r"in ie&&"g"in ie&&"b"in ie?`rgb(${ie.r}, ${ie.g}, ${ie.b})`:"#000000";$.useEffect(()=>{k(z.initialQuality)},[z.initialQuality]);const Ee=ie=>{switch(ie){case"low":return .8;case"high":return 2;default:return 1.2}},ve=$.useRef({u_time:{value:0},u_amplitude:{value:1.5},u_bass:{value:.5},u_mid:{value:.5},u_treble:{value:.5},u_red:{value:i!=null&&i.red?(i==null?void 0:i.red)/255:1},u_green:{value:i!=null&&i.green?(i==null?void 0:i.green)/255:1},u_blue:{value:i!=null&&i.blue?(i==null?void 0:i.blue)/255:1},u_detail:{value:Ee(L)}}),We=$.useRef({threshold:(s==null?void 0:s.threshold)??.5,strength:(s==null?void 0:s.strength)??.2,radius:(s==null?void 0:s.radius)??.5});return $.useEffect(()=>{var be,at,Me,w,b,I,Z,K;if(!u.current)return;ve.current.u_detail.value=Ee(L);const ie=new oA;ie.background=ae(a),x.current=ie;const ue=new cS;C.current=ue;const Te=new Wn(45,((be=u.current)==null?void 0:be.clientWidth)/((at=u.current)==null?void 0:at.clientHeight),.1,1e3);Te.position.set(0,-2,14),Te.lookAt(0,0,0),R.current=Te;try{const V=new QC({antialias:!0,alpha:!0,powerPreference:"high-performance",precision:L==="low"?"mediump":"highp"});V.setSize((Me=u.current)==null?void 0:Me.clientWidth,(w=u.current)==null?void 0:w.clientHeight);const _e=()=>{const le=window.devicePixelRatio||1;return z.isLowEndDevice?Math.min(le,1):L==="low"?Math.min(le,1.5):L==="medium"?Math.min(le,2):le};if(V.setPixelRatio(_e()),V.setClearColor(ae(a).getHex(),1),V.outputColorSpace=Dn,u.current.firstChild&&u.current.removeChild(u.current.firstChild),u.current.appendChild(V.domElement),g.current=V,r){const le=new $C(Te,V.domElement);le.enableDamping=d,le.dampingFactor=f,le.enableZoom=h,le.autoRotate=o,le.update()}}catch(V){console.error("Error creating WebGL renderer:",V)}const Ye=new cn({vertexShader:SN,fragmentShader:EN,wireframe:!0,uniforms:ve.current}),St=(V=>{switch(V){case"low":return 20;case"high":return 40;default:return 30}})(L),Be=new mm(4,Math.min(St,30));Be.index&&(Be.index.needsUpdate=!0),Be.attributes.position.needsUpdate=!0,Be.attributes.normal.needsUpdate=!0;const Fe=new oi(Be,Ye);ie.add(Fe),v.current=Fe;const D=new vN(x.current,R.current),Wt=new Gr(new Ce((b=u.current)==null?void 0:b.clientWidth,(I=u.current)==null?void 0:I.clientHeight),We.current.strength,We.current.radius,We.current.threshold);N.current=Wt;const qe=new yN;if(g.current){const V=new gN(g.current);V.addPass(D),V.addPass(Wt),V.addPass(qe),V.setSize((Z=u.current)==null?void 0:Z.clientWidth,(K=u.current)==null?void 0:K.clientHeight),A.current=V}if(l){const V=new K1;V.domElement.style.position="absolute",V.domElement.style.top=`${c}px`,V.domElement.style.right="0px",T.current=V;const _e=V.addFolder("Colors");_e.add(ve.current.u_red,"value",0,1).name("Red"),_e.add(ve.current.u_green,"value",0,1).name("Green"),_e.add(ve.current.u_blue,"value",0,1).name("Blue");const le=V.addFolder("Bloom");le.add(We.current,"threshold",0,1).name("Threshold").onChange(Ae=>{N.current&&(N.current.threshold=Ae)}),le.add(We.current,"strength",0,3).name("Strength").onChange(Ae=>{N.current&&(N.current.strength=Ae)}),le.add(We.current,"radius",0,1).name("Radius").onChange(Ae=>{N.current&&(N.current.radius=Ae)}),V.addFolder("Settings").add({quality:L},"quality",["low","medium","high"]).name("Quality").onChange(Ae=>{k(Ae)})}const Ve=()=>{if(!u.current||!g.current||!R.current)return;const V=u.current.clientWidth,_e=u.current.clientHeight;R.current.aspect=V/_e,R.current.updateProjectionMatrix(),g.current.setSize(V,_e),A.current&&A.current.setSize(V,_e)};return window.addEventListener("resize",Ve),()=>{window.removeEventListener("resize",Ve),E.current&&(cancelAnimationFrame(E.current),E.current=null),g.current&&u.current&&u.current.removeChild(g.current.domElement),v.current&&(v.current.geometry.dispose(),v.current.material.dispose()),T.current&&T.current.destroy()}},[(q=u.current)==null?void 0:q.clientWidth,(oe=u.current)==null?void 0:oe.clientHeight,L,z.isLowEndDevice,r,o,l,d,f,h]),$.useEffect(()=>{const ie=ue=>{const Te=window.innerWidth/2,Ye=window.innerHeight/2;X({x:(ue.clientX-Te)/100,y:(ue.clientY-Ye)/100})};return window.addEventListener("mousemove",ie),()=>{window.removeEventListener("mousemove",ie)}},[]),$.useEffect(()=>{if(!x.current||!R.current||!C.current||!g.current||!v.current)return;const Te=1e3/(Re=>{switch(Re){case"low":return 30;case"high":return 60;default:return 45}})(L),Ye=()=>{if(E.current=requestAnimationFrame(Ye),!R.current||!x.current||!C.current||!g.current||!ve.current||!v.current)return;const Re=performance.now();if(!(Re-U.current<Te)){R.current.position.x+=(W.x-R.current.position.x)*.05,R.current.position.y+=(-W.y-R.current.position.y)*.5,R.current.lookAt(x.current.position),ve.current.u_time.value=C.current.getElapsedTime();try{if(t&&e&&t.length>0)try{const Be=t.length,Fe=Math.max(1,Math.floor(Be/64)),D=Math.floor(Be*.1);let Wt=0;for(let K=0;K<D;K+=Fe)Wt+=t[K]||0;const qe=Wt/Math.ceil(D/Fe)||0,Ve=D,be=Math.floor(Be*.5);let at=0;for(let K=Ve;K<be;K+=Fe)at+=t[K]||0;const Me=at/Math.ceil((be-Ve)/Fe)||0,w=be;let b=0;for(let K=w;K<Be;K+=Fe)b+=t[K]||0;const I=b/Math.ceil((Be-w)/Fe)||0;ve.current.u_bass.value=ve.current.u_bass.value*(1-y)+qe/255*m*y,ve.current.u_mid.value=ve.current.u_mid.value*(1-y)+Me/255*m*y,ve.current.u_treble.value=ve.current.u_treble.value*(1-y)+I/255*m*y;const Z=(qe+Me+I)/3;ve.current.u_amplitude.value=ve.current.u_amplitude.value*(1-y)+(.5+Z/255*m)*y}catch(Be){console.error("Error in animation loop:",Be);const Fe=C.current.getElapsedTime();ve.current.u_amplitude.value=1+Math.sin(Fe*.2)*.3}else ve.current.u_amplitude.value=0,ve.current.u_bass.value=0,ve.current.u_mid.value=0,ve.current.u_treble.value=0,v.current&&(v.current.rotation.y+=.001);if(v.current&&(v.current.rotation.y+=.001),A.current)try{A.current.render()}catch(Be){console.error("Error during composer render:",Be),g.current.render(x.current,R.current)}else g.current.render(x.current,R.current);U.current=Re}catch(Be){console.error("Error in animation loop:",Be)}}};return E.current=requestAnimationFrame(Ye),()=>{E.current&&(cancelAnimationFrame(E.current),E.current=null)}},[W,t,e,L,y,m]),p.jsx("div",{ref:u,"aria-label":"3D Audio Visualizer",style:{width:"100%",height:"100%",overflow:"hidden",backgroundColor:ce(a),position:"relative",..._},className:S})},gS=()=>{const[t,e]=$.useState(!1),[n,i]=$.useState(()=>{const y=new Uint8Array(128);for(let S=0;S<y.length;S++)y[S]=Math.floor(40+20*Math.sin(S*.1));return y}),[a,s]=$.useState(null),r=$.useRef(null),o=$.useRef(null),l=$.useRef(null),c=$.useRef(null),d=$.useRef(null),f=$.useCallback(()=>{c.current&&(cancelAnimationFrame(c.current),c.current=null),l.current&&(l.current.getTracks().forEach(y=>y.stop()),l.current=null),r.current&&r.current.state!=="closed"&&(r.current.close().catch(console.error),r.current=null),o.current=null,d.current=null},[]);$.useEffect(()=>(typeof window<"u"&&(typeof window.AudioContext<"u"||typeof window.webkitAudioContext<"u")&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||s("Your browser does not support the required audio APIs"),f),[f]);const h=$.useCallback(async()=>{try{if(f(),s(null),typeof window>"u"||typeof window.AudioContext>"u"&&typeof window.webkitAudioContext>"u")throw new Error("Your browser does not support Web Audio API");if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Media Devices API not supported in this browser");const y=await navigator.mediaDevices.getUserMedia({audio:!0});l.current=y;const S=window.AudioContext||window.webkitAudioContext,_=new S;r.current=_,_.state==="suspended"&&await _.resume();const u=_.createAnalyser();u.fftSize=512,u.smoothingTimeConstant=.7,u.minDecibels=-90,u.maxDecibels=-10,o.current=u,_.createMediaStreamSource(y).connect(u);const v=new Uint8Array(u.frequencyBinCount);d.current=v,u.getByteFrequencyData(v),i(new Uint8Array(v));const x=()=>{if(!(!o.current||!d.current))try{o.current.getByteFrequencyData(d.current);const R=new Uint8Array(d.current);i(R),c.current=requestAnimationFrame(x)}catch(R){console.error("Error updating audio data:",R),c.current&&(cancelAnimationFrame(c.current),setTimeout(()=>{c.current=requestAnimationFrame(x)},100))}};c.current=requestAnimationFrame(x),e(!0)}catch(y){f();const S=y instanceof Error?y.message:"Failed to access microphone";s(S),console.error("Error accessing microphone:",y)}},[f]),m=$.useCallback(()=>{f(),e(!1);const y=new Uint8Array(128);for(let S=0;S<y.length;S++)y[S]=Math.floor(30+15*Math.sin(S*.1));i(y)},[f]);return{isListening:t,audioData:n,error:a,startListening:h,stopListening:m}},bN=()=>{const{isListening:t,audioData:e,error:n,startListening:i,stopListening:a}=gS(),[s,r]=$.useState(!1),o=()=>{t?a():(r(!1),i())};return p.jsxs("div",{className:"h-[70vh] w-full md:h-full md:flex-1 flex flex-col items-center justify-center bg-black text-white relative",children:[p.jsx("div",{className:"flex flex-1 w-full h-[400px] md:h-[70vh] relative mb-8 p-0",children:p.jsx(_S,{audioData:e,isListening:t})}),p.jsxs("div",{className:"text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md",children:[p.jsx("button",{onClick:o,className:"px-6 py-3 bg-gradient-to-r from-rose-600 to-fuchsia-700 text-white rounded-lg transition-colors",children:t?"Stop Listening":"Start Listening"}),p.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Note: This will request microphone access"})]}),s&&n&&p.jsx("div",{className:"text-center z-10 p-8 bg-black/80 rounded-lg backdrop-blur-md",children:p.jsx("p",{className:"text-sm text-red-500",children:n})})]})},MN=()=>p.jsxs("div",{className:"w-full md:w-1/3 overflow-auto bg-[#272822] rounded-lg p-4 h-[85vh] border border-gray-700",children:[p.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Basic Example Code"}),p.jsxs("div",{className:"relative text-sm font-mono p-4 text-[#F8F8F2] overflow-auto leading-relaxed",children:[p.jsxs("div",{className:"",children:[p.jsx("span",{className:"text-[#F92672]",children:"import"}),p.jsxs("span",{className:"text-[#F8F8F2]",children:[" React, { useState }"," "]}),p.jsx("span",{className:"text-[#F92672]",children:" from"}),p.jsx("span",{className:"text-[#E6DB74]",children:' "react"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:";"})]}),p.jsxs("div",{className:"",children:[p.jsx("span",{className:"text-[#F92672]",children:"import"}),p.jsxs("span",{className:"text-[#F8F8F2]",children:[" { AudioVisualizer, useAudioListener }"," "]}),p.jsx("span",{className:"text-[#F92672]",children:" from"}),p.jsx("span",{className:"text-[#E6DB74]",children:'  "audio-visualizer"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:";"})]}),p.jsx("div",{className:"h-4"}),p.jsxs("div",{className:"",children:[p.jsx("span",{className:"text-[#F92672]",children:"export const  "}),p.jsx("span",{className:"text-[#A6E22E]",children:" BasicExample"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" = () => {"})]}),p.jsx("div",{className:"pl-4",children:p.jsx("span",{className:"text-[#75715E]",children:"// Use the hook to access microphone and get audio data"})}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" {"})]}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"isListening,"})}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"audioData,"})}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"error,"})}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"startListening,"})}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"stopListening"})}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"} = "}),p.jsx("span",{className:"text-[#66D9EF]",children:" useAudioListener"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"();"})]}),p.jsx("div",{className:"h-4"}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#A6E22E]",children:" handleToggleListening"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" = () => {"})]}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"if"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" (isListening) {"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"stopListening();"})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"} "}),p.jsx("span",{className:"text-[#F92672]",children:"else"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" {"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"startListening();"})}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"}"})}),p.jsx("div",{className:"pl-4",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"};"})}),p.jsx("div",{className:"h-4"}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"return"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" ("})]}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"container"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#75715E]",children:"{/* Visualizer component */}"})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"visualizer-container"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-16 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#66D9EF]",children:"AudioVisualizer"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"audioData"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{audioData}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"isListening"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{isListening}"})]}),p.jsx("div",{className:"pl-16 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"/>"})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"h-4"}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#75715E]",children:"{/* Controls */}"})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"button"}),p.jsx("span",{className:"text-[#66D9EF]",children:" onClick"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{handleToggleListening}"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-16",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"{isListening ? "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"Stop Listening"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:" : "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"Start Listening"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:"}"})]}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"button"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"pl-4",children:p.jsx("span",{className:"text-[#F8F8F2]",children:");"})}),p.jsx("div",{children:p.jsx("span",{className:"text-[#F8F8F2]",children:"};"})})]})]}),TN=()=>p.jsx(em,{children:p.jsx("div",{className:"mx-4",children:p.jsxs("div",{className:"w-full h-full md:h-screen flex flex-col-reverse md:flex-row justify-center items-start gap-4 bg-black text-white relative pt-32 pb-10",children:[p.jsx(MN,{}),p.jsx(bN,{})]})})}),AN=t=>{const[e,n]=$.useState(!1);return $.useEffect(()=>{const i=window.matchMedia(t);n(i.matches);const a=s=>{n(s.matches)};return i.addEventListener("change",a),()=>{i.removeEventListener("change",a)}},[t]),e},RN=()=>AN("(max-width: 550px)"),wN=()=>{const t=RN(),{isListening:e,audioData:n,error:i,startListening:a,stopListening:s}=gS(),[r,o]=$.useState(!1),[l,c]=$.useState({initialQuality:"medium",orbColors:{red:249,green:115,blue:22},canvasColor:"#0a0a0a",initialGlow:{threshold:.3,strength:.2,radius:.5},inertiaEnabled:!0,inertiaLevel:.05,zoomEnabled:!0,spikeLevel:5.5,smoothnessLevel:.7,enableOrbitControls:!0,autoRotate:!0,showGui:!0,className:"custom-visualizer",containerStyle:{height:"65vh"}}),d=()=>{e?s():(o(!1),a())};return $.useEffect(()=>{c(f=>({...f,containerStyle:{showGui:!t,height:t?"400px":"65vh"}}))},[t]),p.jsxs("div",{className:"h-[70vh] w-full md:h-full md:flex-1 flex flex-col items-center justify-center bg-black text-white",children:[p.jsx("div",{className:"h-[400px] md:flex-1 w-full",children:p.jsx(_S,{audioData:n,isListening:e,initialQuality:l.initialQuality,orbColors:l.orbColors,canvasColor:l.canvasColor,initialGlow:l.initialGlow,enableOrbitControls:l.enableOrbitControls,autoRotate:l.autoRotate,showGui:l.showGui,className:l.className,containerStyle:l.containerStyle})}),p.jsx("div",{className:"p-6 bg-black",children:p.jsxs("div",{className:"max-w-6xl mx-auto",children:[p.jsxs("div",{className:"flex flex-col flex-wrap justify-center items-center mb-6",children:[p.jsx("button",{onClick:d,className:`px-6 py-3 text-white rounded-lg transition-colors ${e?"bg-red-600 hover:bg-red-700":"bg-gradient-to-r from-rose-600 to-fuchsia-700"}`,children:e?"Stop Listening":"Start Listening"}),p.jsx("p",{className:"mt-4 text-sm text-gray-400",children:"Note: This will request microphone access"})]}),r&&i&&p.jsx("div",{className:"mb-4 p-4 bg-red-900/50 rounded-lg",children:p.jsx("p",{className:"text-red-300",children:i})})]})})]})},CN=()=>p.jsxs("div",{className:"w-full md:w-1/3 overflow-auto bg-[#272822] rounded-lg p-4 h-[85vh] border border-gray-700",children:[p.jsx("h2",{className:"text-xl font-bold mb-4 text-white",children:"Advanced Example Code"}),p.jsxs("div",{className:"relative text-sm font-mono p-4 text-[#F8F8F2] overflow-auto leading-relaxed",children:[p.jsxs("div",{className:"flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"import"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" React, { useState }"}),p.jsx("span",{className:"text-[#F92672]",children:" from"}),p.jsx("span",{className:"text-[#E6DB74]",children:' "react"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:";"})]}),p.jsxs("div",{className:"flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"import"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" { AudioVisualizer, useAudioListener }"}),p.jsx("span",{className:"text-[#F92672]",children:" from"}),p.jsx("span",{className:"text-[#E6DB74]",children:' "../../src"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:";"})]}),p.jsxs("div",{className:"flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"import"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" type { VisualizerOptions }"}),p.jsx("span",{className:"text-[#F92672]",children:" from"}),p.jsx("span",{className:"text-[#E6DB74]",children:' "../../src/types"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:";"})]}),p.jsx("div",{className:"h-4"}),p.jsxs("div",{className:"flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#A6E22E]",children:" AdvancedExample"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": React.FC = () => {"})]}),p.jsxs("div",{className:"pl-4",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" { isListening, audioData, error, startListening, stopListening } = "}),p.jsx("span",{className:"text-[#66D9EF]",children:"useAudioListener"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"();"})]}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" [showError, setShowError] = "}),p.jsx("span",{className:"text-[#66D9EF]",children:"useState"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"<boolean>(false);"})]}),p.jsx("div",{className:"h-4"}),p.jsx("div",{className:"pl-4",children:p.jsx("span",{className:"text-[#75715E]",children:"// Customizable options"})}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" options: VisualizerOptions = {"})]}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#75715E]",children:"// Controls the overall visual quality and performance"})}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:['// "low": Lower resolution and effects for better performance on weaker devices',p.jsx("br",{}),' // "medium": Balanced quality and performance (default)',p.jsx("br",{}),' // "high": Maximum visual quality but may impact performance on some devices']})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"initialQuality"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"medium"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:" as "}),p.jsx("span",{className:"text-[#66D9EF]",children:'"low"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:" | "}),p.jsx("span",{className:"text-[#66D9EF]",children:'"medium"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:" | "}),p.jsx("span",{className:"text-[#66D9EF]",children:'"high"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Defines the color of the visual elements (orbs) in the visualizer",p.jsx("br",{}),"// Values range from 0-255 for each RGB component",p.jsx("br",{}),"// This example shows orange"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"orbColors"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": {"})]}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"red"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"249"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"green"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"115"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"blue"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"22"})]}),p.jsx("div",{className:"pl-8 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"},"})}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Sets the background color of the visualizer",p.jsx("br",{}),'// Can be a hex color string (like "#0a0a0a"), RGB object',p.jsx("br",{}),"// This is a dark gray background"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"canvasColor"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"#0a0a0a"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#75715E]",children:"// Controls the glow/bloom effect that makes bright parts of the visualization shine"})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"initialGlow"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": {"})]}),p.jsx("div",{className:"pl-12",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Brightness level required before glow is applied (0-1) ",p.jsx("br",{}),"// Lower values make more elements glow"]})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"threshold"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"0.3"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-12",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Intensity of the glow effect (0-3) ",p.jsx("br",{}),"// Higher values create stronger glow"]})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"strength"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"0.2"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-12",children:p.jsxs("span",{className:"text-[#75715E]",children:["// How far the glow spreads (0-1) ",p.jsx("br",{}),"// Higher values create a more diffuse glow"]})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"radius"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"0.5"})]}),p.jsx("div",{className:"pl-8 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"},"})}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// When enabled, the visualization continues to move slightly after you drag it ",p.jsx("br",{}),"// Like how a globe continues to spin after you push it"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"inertiaEnabled"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"true"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Controls how much momentum/inertia is applied when moving the visualization ",p.jsx("br",{}),"// Range: 0-1 (higher values = more inertia) ",p.jsx("br",{}),"// Higher values make the visualization continue moving longer after interaction"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"inertiaLevel"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"0.05"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Allows zooming in and out of the visualization (usually with mouse wheel) ",p.jsx("br",{}),"// When enabled, you can zoom in to see details or zoom out for a wider view"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"zoomEnabled"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"true"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Controls how dramatically the visualization reacts to audio"," ",p.jsx("br",{}),"// Higher values create larger, more pronounced spikes in response to sound ",p.jsx("br",{}),'// Think of this as the "sensitivity" to sound']})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"spikeLevel"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"5.5"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Controls how quickly the visualization responds to changes in audio",p.jsx("br",{}),"// Range: 0-1 (higher values = more responsive/less smooth)",p.jsx("br",{}),"// Lower values make transitions more gradual, higher values make it react more immediately"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"smoothnessLevel"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"0.7"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Enables mouse/touch controls to rotate and move around the visualization ",p.jsx("br",{}),"// When enabled, you can drag to rotate the visualization in 3D space"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"enableOrbitControls"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"true"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Makes the visualization slowly rotate automatically without user input ",p.jsx("br",{}),"// Creates a dynamic, always-moving effect even when nobody is interacting with it"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"autoRotate"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"true"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Shows or hides an interactive control panel for adjusting visualizer settings ",p.jsx("br",{}),"// When enabled, displays sliders and controls to change colors, effects, etc. in real-time"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"showGui"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#AE81FF]",children:"true"}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Adds a custom CSS class to the visualizer container for styling"," ",p.jsx("br",{}),"// Allows you to apply custom CSS styles to the visualizer"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"custom-visualizer"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:","})]}),p.jsx("div",{className:"pl-8",children:p.jsxs("span",{className:"text-[#75715E]",children:["// Applies inline CSS styles directly to the visualizer container",p.jsx("br",{}),"// Standard React inline style object"]})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"containerStyle"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": {"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#75715E]",children:"// Sets the height to 80% of the viewport height"})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#A6E22E]",children:"height"}),p.jsx("span",{className:"text-[#F8F8F2]",children:": "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"70vh"'})]}),p.jsx("div",{className:"pl-8 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"}"})}),p.jsx("div",{className:"pl-4 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"};"})}),p.jsx("div",{className:"h-4"}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"const"}),p.jsx("span",{className:"text-[#A6E22E]",children:" handleToggleListening"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" = () => {"})]}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"if"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" (isListening) {"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"stopListening();"})}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"} "}),p.jsx("span",{className:"text-[#F92672]",children:"else"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" {"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"setShowError(false);"})}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"startListening();"})}),p.jsx("div",{className:"pl-8",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"}"})}),p.jsx("div",{className:"pl-4",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"};"})}),p.jsx("div",{className:"h-4"}),p.jsxs("div",{className:"pl-4 flex",children:[p.jsx("span",{className:"text-[#F92672]",children:"return"}),p.jsx("span",{className:"text-[#F8F8F2]",children:" ("})]}),p.jsxs("div",{className:"pl-8",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"h-full flex-1 flex flex-col items-center justify-center bg-black text-white"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#75715E]",children:"{/* Visualizer container */}"})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"flex-1 w-full"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-16 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#66D9EF]",children:"AudioVisualizer"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"audioData"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{audioData}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"isListening"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{isListening}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"initialQuality"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.initialQuality}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"orbColors"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.orbColors}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"canvasColor"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.canvasColor}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"initialGlow"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.initialGlow}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"enableOrbitControls"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.enableOrbitControls}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"autoRotate"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.autoRotate}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"showGui"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.showGui}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.className}"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#66D9EF]",children:"containerStyle"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{options.containerStyle}"})]}),p.jsx("div",{className:"pl-16 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"/>"})}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"pl-12",children:p.jsx("span",{className:"text-[#75715E]",children:"{/* Controls panel */}"})}),p.jsxs("div",{className:"pl-12",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"p-6 bg-black"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-16",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"max-w-6xl mx-auto"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-20",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"flex flex-col flex-wrap justify-center items-center mb-6"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-24",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"button"}),p.jsx("span",{className:"text-[#66D9EF]",children:" onClick"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#F8F8F2]",children:"{handleToggleListening}"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"px-6 py-3 text-white rounded-lg transition-colors bg-gradient-to-r from-rose-600 to-fuchsia-700"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-28",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"{isListening ? "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"Stop Listening"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:" : "}),p.jsx("span",{className:"text-[#E6DB74]",children:'"Start Listening"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:"}"})]}),p.jsxs("div",{className:"pl-24 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"button"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-24",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"<"}),p.jsx("span",{className:"text-[#F92672]",children:"p"}),p.jsx("span",{className:"text-[#66D9EF]",children:" className"}),p.jsx("span",{className:"text-[#F8F8F2]",children:"="}),p.jsx("span",{className:"text-[#E6DB74]",children:'"mt-4 text-sm text-gray-400"'}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"pl-28",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"Note: This will request microphone access"})}),p.jsxs("div",{className:"pl-24 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"p"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-20 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-16 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-12 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsxs("div",{className:"pl-8 flex",children:[p.jsx("span",{className:"text-[#F8F8F2]",children:"</"}),p.jsx("span",{className:"text-[#F92672]",children:"div"}),p.jsx("span",{className:"text-[#F8F8F2]",children:">"})]}),p.jsx("div",{className:"pl-4 flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:");"})}),p.jsx("div",{className:"flex",children:p.jsx("span",{className:"text-[#F8F8F2]",children:"};"})})]})]}),NN=()=>p.jsx(em,{children:p.jsx("div",{className:"mx-4",children:p.jsxs("div",{className:"w-full h-full md:h-screen flex flex-col-reverse md:flex-row justify-center items-start gap-4 bg-black text-white relative pt-32 pb-10",children:[p.jsx(CN,{}),p.jsx(wN,{})]})})}),DN=()=>p.jsx(S1,{children:p.jsxs(p1,{children:[p.jsx(wc,{path:"/",element:p.jsx(w1,{})}),p.jsx(wc,{path:"/basic",element:p.jsx(TN,{})}),p.jsx(wc,{path:"/advanced",element:p.jsx(NN,{})})]})}),UN=()=>p.jsx(DN,{});EM.createRoot(document.getElementById("root")).render(p.jsx(Tv.StrictMode,{children:p.jsx(UN,{})}));
