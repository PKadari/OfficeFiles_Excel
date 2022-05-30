(this["webpackJsonpmaker-code-editor"]=this["webpackJsonpmaker-code-editor"]||[]).push([[9],{1504:function(e,r,t){"use strict";t.r(r),t.d(r,"LocalStorageSharedScript",(function(){return p}));var n=t(5),a=t(706),o=t(710),i=t(865);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r,t,n,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void t(s)}u.done?r(c):Promise.resolve(c).then(n,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){c(o,n,a,i,u,"next",e)}function u(e){c(o,n,a,i,u,"throw",e)}i(void 0)}))}}var p=function(){var e=this;Object.defineProperty(this,"fetchAllDocAttachedScripts",{configurable:!0,enumerable:!0,writable:!0,value:function(){var r=s(regeneratorRuntime.mark((function r(t){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Promise.all(t.map(function(){var r=s(regeneratorRuntime.mark((function r(t){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e.getSharedScript(t).catch((function(){})));case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())),a=n.then((function(e){return e.filter((function(e){return void 0!==e}))})),r.abrupt("return",a);case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}),Object.defineProperty(this,"getSharedScript",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=s(regeneratorRuntime.mark((function e(r,t){var o,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.a.getSharedScriptsMap(),c=null,o.forEach((function(e){e.shareId===r&&(c=e)})),!c){e.next=8;break}return s=u({},Object(a.a)(c,{shareId:r})),e.abrupt("return",s);case 8:throw new n.MakerStorageError("Shared script does not exist!",n.StorageErrorCode.ItemNotFound);case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}),Object.defineProperty(this,"shareScript",{configurable:!0,enumerable:!0,writable:!0,value:function(){var r=s(regeneratorRuntime.mark((function r(t){var a,c,s,p,f,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=i.a.getSharedScriptsMap(),!(c=a.get(t))){r.next=6;break}return r.abrupt("return",c.shareId||"");case 6:if(s=e.generateTestShareId(t),p=i.a.getScriptsMap(),f=p.get(t)){r.next=11;break}throw new n.MakerStorageError("Script does not exist!",n.StorageErrorCode.ItemNotFound);case 11:return l=u({},f,{shareId:s}),p.set(t,l),i.a.updateLocalStorageScriptsMap(o.a.sharedScriptsKey,p),r.abrupt("return",s);case 15:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}),Object.defineProperty(this,"unshareScriptFromAllWorkbooks",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=s(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=i.a.getSharedScriptsMap()).has(r)&&t.delete(r)&&i.a.updateLocalStorageScriptsMap(o.a.sharedScriptsKey,t);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),Object.defineProperty(this,"generateTestShareId",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return"shareId-"+e}})}},1533:function(e,r,t){"use strict";t.r(r),t.d(r,"LocalStorageScript",(function(){return R}));var n=t(865),a=t(706),o=t(839),i=t(710),u=t(5),c=t(695),s=t(783),p=(t(78),t(234));t(705);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var r="function"===typeof Map?new Map:void 0;return(l=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof r){if(r.has(e))return r.get(e);r.set(e,n)}function n(){return d(e,arguments,g(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,e)})(e)}function d(e,r,t){return(d=b()?Reflect.construct:function(e,r,t){var n=[null];n.push.apply(n,r);var a=new(Function.bind.apply(e,n));return t&&h(a,t.prototype),a}).apply(null,arguments)}function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e,r){return(h=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(){return(v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function m(e){var r=v({},Object(s.a)(),S,e);return{storageScript:r,localUpdates:y(r)}}var S={description:"Default example description",dateFirstPublished:1565634144474,dateLastPublished:1565634199999,parameterInfo:"parameterInfo",lastModifiedBy:"lastModifiedBy",creatorId:p.b,creatorDisplayName:"Creator Display Name",isCreator:!0,creatorEmail:"test-creator@microsoft.com"},y=function(e){return{dateLastModified:15659e8,body:e.body,parameterInfo:e.parameterInfo}},w=(Error,t(679));function O(){return(O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function j(e,r,t,n,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void t(s)}u.done?r(c):Promise.resolve(c).then(n,a)}function P(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){j(o,n,a,i,u,"next",e)}function u(e){j(o,n,a,i,u,"throw",e)}i(void 0)}))}}var R=function(){var e=this;Object.defineProperty(this,"getScripts",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=P(regeneratorRuntime.mark((function e(){var r,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n.a.getScriptsMap().forEach((function(e){return r.push({id:e.id,name:e.name,dateFirstPublished:e.dateFirstPublished,dateLastPublished:e.dateLastPublished,creatorId:e.creatorId})})),t=r.map((function(e){return Object(a.a)(O({},e,{isCreator:!0}))})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),Object.defineProperty(this,"getRecentScripts",{configurable:!0,enumerable:!0,writable:!0,value:function(){var r=P(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e.getScripts());case 1:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}()}),Object.defineProperty(this,"saveScript",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=P(regeneratorRuntime.mark((function e(r,t){var u,c,s,p,f,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(o.a)(r,t),s=n.a.getScriptsMap(),p=Date.now(),f=O({},c,{id:Object(w.a)(r)?c.id+"-published":c.id,dateFirstPublished:null!=(u=c.dateFirstPublished)?u:p,dateLastPublished:p}),s.set(f.id,f),n.a.updateLocalStorageScriptsMap(i.a.recordedScriptsKey,s),l=Object(a.a)(f,{shareId:r.localUpdates.shareId}),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}),Object.defineProperty(this,"getGraphScript",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=P(regeneratorRuntime.mark((function e(r,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m());case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()}),Object.defineProperty(this,"getScript",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=P(regeneratorRuntime.mark((function e(r){var t,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.a.getScriptsMap(),o=t.get(r.id)){e.next=4;break}throw new u.MakerStorageError("Script does not exist!",u.StorageErrorCode.ItemNotFound);case 4:return i=Object(a.a)(O({},o,{isCreator:!0}),{shareId:r.shareId}),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}),Object.defineProperty(this,"removeScript",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=P(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(c.a)(r)&&(t=n.a.getScriptsMap()).has(r.storageScript.id)&&t.delete(r.storageScript.id)&&n.a.updateLocalStorageScriptsMap(i.a.recordedScriptsKey,t),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()})}},865:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t(710),a=function(){};Object.defineProperty(a,"getScriptsMap",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=JSON.parse(localStorage.getItem(n.a.recordedScriptsKey)||"{}");return new Map(Object.entries(e))}}),Object.defineProperty(a,"updateLocalStorageScriptsMap",{configurable:!0,enumerable:!0,writable:!0,value:function(e,r){window.localStorage.setItem(e,JSON.stringify(a.convertMapToObject(r)))}}),Object.defineProperty(a,"updateLocalStorageGeneral",{configurable:!0,enumerable:!0,writable:!0,value:function(e,r){window.localStorage.setItem(e,r)}}),Object.defineProperty(a,"convertMapToObject",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var r={};return e.forEach((function(e,t){return r[t]=e})),r}}),Object.defineProperty(a,"getSharedScriptsMap",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=JSON.parse(localStorage.getItem(n.a.sharedScriptsKey)||"{}");return new Map(Object.entries(e))}}),Object.defineProperty(a,"getAttachedIds",{configurable:!0,enumerable:!0,writable:!0,value:function(){return JSON.parse(localStorage.getItem(n.a.attachedIdsKey)||"[]")}})}}]);
//# sourceMappingURL=LocalStorageScript.987977a4.chunk.js.map