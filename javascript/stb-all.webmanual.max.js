/* Modernizr 2.8.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransitions-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.0",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.csstransitions=function(){return D("transition")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
;/**
* jquery.matchHeight.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function($) {
  $.fn.matchHeight = function(byRow) {
    // handle matchHeight('remove')
    if (byRow === 'remove') {
      var that = this;
      // remove fixed height from all selected elements
      this.css('height', '');
      // remove selected elements from all groups
      $.each($.fn.matchHeight._groups, function(key, group) {
        group.elements = group.elements.not(that);
      });
      return this;
    }

    if (this.length <= 1)
      return this;
      // byRow default to true
    byRow = (typeof byRow !== 'undefined') ? byRow : true;

    // keep track of this group so we can re-apply later on load and resize events
    $.fn.matchHeight._groups.push({
      elements: this,
      byRow: byRow
    });

    // match each element's height to the tallest element in the selection
    $.fn.matchHeight._apply(this, byRow);
    return this;
  };

  $.fn.matchHeight._apply = function(elements, byRow) {
    var $elements = $(elements),
        rows = [$elements];
    // get rows if using byRow, otherwise assume one row
    if (byRow) {
      // must first force an arbitrary equal height so floating elements break evenly
      $elements.css({
        'display': 'block',
        'padding-top': '0',
        'padding-bottom': '0',
        'border-top-width': '0',
        'border-bottom-width': '0',
        'height': '100px'
      });

      // get the array of rows (based on element top position)
      rows = _rows($elements);
      // revert the temporary forced style
      $elements.css({
        'display': '',
        'padding-top': '',
        'padding-bottom': '',
        'border-top-width': '',
        'border-bottom-width': '',
        'height': ''
      });
    }

    $.each(rows, function(key, row) {
      var $row = $(row),
          maxHeight = 0;
      // iterate the row and find the max height
      $row.each(function() {
        var $that = $(this);
        // ensure we get the correct actual height (and not a previously set height value)
        $that.css({ 'display': 'block', 'height': '' });
        // find the max height (including padding, but not margin)
        if ($that.outerHeight(false) > maxHeight)
          maxHeight = $that.outerHeight(false);
        // revert display block
        $that.css({ 'display': '' });
      });

      // iterate the row and apply the height to all elements
      $row.each(function(){
        var $that = $(this),
            verticalPadding = 0;
        // handle padding and border correctly (required when not using border-box)
        if ($that.css('box-sizing') !== 'border-box') {
          verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
          verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
        }
        // set the height (accounting for padding and border)
        $that.css('height', maxHeight - verticalPadding);
      });
    });
    return this;
  };

  /*
  *  _applyDataApi will apply matchHeight to all elements with a data-match-height attribute
  */
   
  $.fn.matchHeight._applyDataApi = function() {
    var groups = {};
    // generate groups by their groupId set by elements using data-match-height
    $('[data-match-height], [data-mh]').each(function() {
      var $this = $(this),
          groupId = $this.attr('data-match-height');
      if (groupId in groups) {
        groups[groupId] = groups[groupId].add($this);
      } else {
        groups[groupId] = $this;
      }
    });

    // apply matchHeight to each group
    $.each(groups, function() {
      this.matchHeight(true);
    });
  };

  /* 
  *  _update function will re-apply matchHeight to all groups with the correct options
  */
   
  $.fn.matchHeight._groups = [];
  $.fn.matchHeight._throttle = 80;

  var previousResizeWidth = -1,
      updateTimeout = -1;
  $.fn.matchHeight._update = function(event) {
    // prevent update if fired from a resize event 
    // where the viewport width hasn't actually changed
    // fixes an event looping bug in IE8
    if (event && event.type === 'resize') {
      var windowWidth = $(window).width();
      if (windowWidth === previousResizeWidth)
        return;
      previousResizeWidth = windowWidth;
    }

    // throttle updates
    if (updateTimeout === -1) {
      updateTimeout = setTimeout(function() {
        $.each($.fn.matchHeight._groups, function() {
          $.fn.matchHeight._apply(this.elements, this.byRow);
        });
        updateTimeout = -1;
      }, $.fn.matchHeight._throttle);
    }
  };

  /* 
  *  bind events
  */

  // apply on DOM ready event
  $($.fn.matchHeight._applyDataApi);

  // update heights on load and resize events
  $(window).bind('load resize orientationchange', $.fn.matchHeight._update);

  /*
  *  rows utility function
  *  returns array of jQuery selections representing each row 
  *  (as displayed after float wrapping applied by browser)
  */

  var _rows = function(elements) {
    var tolerance = 1,
        $elements = $(elements),
        lastTop = null,
        rows = [];

    // group elements by their top position
    $elements.each(function(){
      var $that = $(this),
          top = $that.offset().top - _parse($that.css('margin-top')),
          lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
      if (lastRow === null) {
        // first item on the row, so just push it
        rows.push($that);
      } else {
        // if the row top is the same, add to the row group
        if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
          rows[rows.length - 1] = lastRow.add($that);
        } else {
          // otherwise start a new row group
          rows.push($that);
        }
      }

      // keep track of the last row top
      lastTop = top;
    });
    return rows;
  };

  var _parse = function(value) {
    // parse value and convert NaN to 0
    return parseFloat(value) || 0;
  };

})(jQuery);;/*! jQuery UI - v1.11.0 - 2014-08-12
* http://jqueryui.com
* Includes: core.js, widget.js, accordion.js, datepicker.js, effect.js, effect-fade.js, effect-slide.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Core 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */


// $.ui might exist from components with no dependencies, e.g., $.ui.position
$.ui = $.ui || {};

$.extend( $.ui, {
	version: "1.11.0",

	keyCode: {
		BACKSPACE: 8,
		COMMA: 188,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		LEFT: 37,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SPACE: 32,
		TAB: 9,
		UP: 38
	}
});

// plugins
$.fn.extend({
	scrollParent: function() {
		var position = this.css( "position" ),
			excludeStaticParent = position === "absolute",
			scrollParent = this.parents().filter( function() {
				var parent = $( this );
				if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
					return false;
				}
				return (/(auto|scroll)/).test( parent.css( "overflow" ) + parent.css( "overflow-y" ) + parent.css( "overflow-x" ) );
			}).eq( 0 );

		return position === "fixed" || !scrollParent.length ? $( this[ 0 ].ownerDocument || document ) : scrollParent;
	},

	uniqueId: (function() {
		var uuid = 0;

		return function() {
			return this.each(function() {
				if ( !this.id ) {
					this.id = "ui-id-" + ( ++uuid );
				}
			});
		};
	})(),

	removeUniqueId: function() {
		return this.each(function() {
			if ( /^ui-id-\d+$/.test( this.id ) ) {
				$( this ).removeAttr( "id" );
			}
		});
	}
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var map, mapName, img,
		nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		map = element.parentNode;
		mapName = map.name;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName ) ?
		!element.disabled :
		"a" === nodeName ?
			element.href || isTabIndexNotNaN :
			isTabIndexNotNaN) &&
		// the element and all of its ancestors must be visible
		visible( element );
}

function visible( element ) {
	return $.expr.filters.visible( element ) &&
		!$( element ).parents().addBack().filter(function() {
			return $.css( this, "visibility" ) === "hidden";
		}).length;
}

$.extend( $.expr[ ":" ], {
	data: $.expr.createPseudo ?
		$.expr.createPseudo(function( dataName ) {
			return function( elem ) {
				return !!$.data( elem, dataName );
			};
		}) :
		// support: jQuery <1.8
		function( elem, i, match ) {
			return !!$.data( elem, match[ 3 ] );
		},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support: jQuery <1.8
if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
	$.each( [ "Width", "Height" ], function( i, name ) {
		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
			type = name.toLowerCase(),
			orig = {
				innerWidth: $.fn.innerWidth,
				innerHeight: $.fn.innerHeight,
				outerWidth: $.fn.outerWidth,
				outerHeight: $.fn.outerHeight
			};

		function reduce( elem, size, border, margin ) {
			$.each( side, function() {
				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
				if ( border ) {
					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
				}
				if ( margin ) {
					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
				}
			});
			return size;
		}

		$.fn[ "inner" + name ] = function( size ) {
			if ( size === undefined ) {
				return orig[ "inner" + name ].call( this );
			}

			return this.each(function() {
				$( this ).css( type, reduce( this, size ) + "px" );
			});
		};

		$.fn[ "outer" + name] = function( size, margin ) {
			if ( typeof size !== "number" ) {
				return orig[ "outer" + name ].call( this, size );
			}

			return this.each(function() {
				$( this).css( type, reduce( this, size, true, margin ) + "px" );
			});
		};
	});
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

// support: jQuery 1.6.1, 1.6.2 (http://bugs.jquery.com/ticket/9413)
if ( $( "<a>" ).data( "a-b", "a" ).removeData( "a-b" ).data( "a-b" ) ) {
	$.fn.removeData = (function( removeData ) {
		return function( key ) {
			if ( arguments.length ) {
				return removeData.call( this, $.camelCase( key ) );
			} else {
				return removeData.call( this );
			}
		};
	})( $.fn.removeData );
}

// deprecated
$.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );

$.fn.extend({
	focus: (function( orig ) {
		return function( delay, fn ) {
			return typeof delay === "number" ?
				this.each(function() {
					var elem = this;
					setTimeout(function() {
						$( elem ).focus();
						if ( fn ) {
							fn.call( elem );
						}
					}, delay );
				}) :
				orig.apply( this, arguments );
		};
	})( $.fn.focus ),

	disableSelection: (function() {
		var eventType = "onselectstart" in document.createElement( "div" ) ?
			"selectstart" :
			"mousedown";

		return function() {
			return this.bind( eventType + ".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
		};
	})(),

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	}
});

// $.ui.plugin is deprecated. Use $.widget() extensions instead.
$.ui.plugin = {
	add: function( module, option, set ) {
		var i,
			proto = $.ui[ module ].prototype;
		for ( i in set ) {
			proto.plugins[ i ] = proto.plugins[ i ] || [];
			proto.plugins[ i ].push( [ option, set[ i ] ] );
		}
	},
	call: function( instance, name, args, allowDisconnected ) {
		var i,
			set = instance.plugins[ name ];

		if ( !set ) {
			return;
		}

		if ( !allowDisconnected && ( !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) ) {
			return;
		}

		for ( i = 0; i < set.length; i++ ) {
			if ( instance.options[ set[ i ][ 0 ] ] ) {
				set[ i ][ 1 ].apply( instance.element, args );
			}
		}
	}
};


/*!
 * jQuery UI Widget 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.widget.extend.apply( null, [ options ].concat(args) ) :
			options;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;
		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;


/*!
 * jQuery UI Accordion 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/accordion/
 */


var accordion = $.widget( "ui.accordion", {
	version: "1.11.0",
	options: {
		active: 0,
		animate: {},
		collapsible: false,
		event: "click",
		header: "> li > :first-child,> :not(li):even",
		heightStyle: "auto",
		icons: {
			activeHeader: "ui-icon-triangle-1-s",
			header: "ui-icon-triangle-1-e"
		},

		// callbacks
		activate: null,
		beforeActivate: null
	},

	hideProps: {
		borderTopWidth: "hide",
		borderBottomWidth: "hide",
		paddingTop: "hide",
		paddingBottom: "hide",
		height: "hide"
	},

	showProps: {
		borderTopWidth: "show",
		borderBottomWidth: "show",
		paddingTop: "show",
		paddingBottom: "show",
		height: "show"
	},

	_create: function() {
		var options = this.options;
		this.prevShow = this.prevHide = $();
		this.element.addClass( "ui-accordion ui-widget ui-helper-reset" )
			// ARIA
			.attr( "role", "tablist" );

		// don't allow collapsible: false and active: false / null
		if ( !options.collapsible && (options.active === false || options.active == null) ) {
			options.active = 0;
		}

		this._processPanels();
		// handle negative values
		if ( options.active < 0 ) {
			options.active += this.headers.length;
		}
		this._refresh();
	},

	_getCreateEventData: function() {
		return {
			header: this.active,
			panel: !this.active.length ? $() : this.active.next()
		};
	},

	_createIcons: function() {
		var icons = this.options.icons;
		if ( icons ) {
			$( "<span>" )
				.addClass( "ui-accordion-header-icon ui-icon " + icons.header )
				.prependTo( this.headers );
			this.active.children( ".ui-accordion-header-icon" )
				.removeClass( icons.header )
				.addClass( icons.activeHeader );
			this.headers.addClass( "ui-accordion-icons" );
		}
	},

	_destroyIcons: function() {
		this.headers
			.removeClass( "ui-accordion-icons" )
			.children( ".ui-accordion-header-icon" )
				.remove();
	},

	_destroy: function() {
		var contents;

		// clean up main element
		this.element
			.removeClass( "ui-accordion ui-widget ui-helper-reset" )
			.removeAttr( "role" );

		// clean up headers
		this.headers
			.removeClass( "ui-accordion-header ui-accordion-header-active ui-state-default " +
				"ui-corner-all ui-state-active ui-state-disabled ui-corner-top" )
			.removeAttr( "role" )
			.removeAttr( "aria-expanded" )
			.removeAttr( "aria-selected" )
			.removeAttr( "aria-controls" )
			.removeAttr( "tabIndex" )
			.removeUniqueId();

		this._destroyIcons();

		// clean up content panels
		contents = this.headers.next()
			.removeClass( "ui-helper-reset ui-widget-content ui-corner-bottom " +
				"ui-accordion-content ui-accordion-content-active ui-state-disabled" )
			.css( "display", "" )
			.removeAttr( "role" )
			.removeAttr( "aria-hidden" )
			.removeAttr( "aria-labelledby" )
			.removeUniqueId();

		if ( this.options.heightStyle !== "content" ) {
			contents.css( "height", "" );
		}
	},

	_setOption: function( key, value ) {
		if ( key === "active" ) {
			// _activate() will handle invalid values and update this.options
			this._activate( value );
			return;
		}

		if ( key === "event" ) {
			if ( this.options.event ) {
				this._off( this.headers, this.options.event );
			}
			this._setupEvents( value );
		}

		this._super( key, value );

		// setting collapsible: false while collapsed; open first panel
		if ( key === "collapsible" && !value && this.options.active === false ) {
			this._activate( 0 );
		}

		if ( key === "icons" ) {
			this._destroyIcons();
			if ( value ) {
				this._createIcons();
			}
		}

		// #5332 - opacity doesn't cascade to positioned elements in IE
		// so we need to add the disabled class to the headers and panels
		if ( key === "disabled" ) {
			this.element
				.toggleClass( "ui-state-disabled", !!value )
				.attr( "aria-disabled", value );
			this.headers.add( this.headers.next() )
				.toggleClass( "ui-state-disabled", !!value );
		}
	},

	_keydown: function( event ) {
		if ( event.altKey || event.ctrlKey ) {
			return;
		}

		var keyCode = $.ui.keyCode,
			length = this.headers.length,
			currentIndex = this.headers.index( event.target ),
			toFocus = false;

		switch ( event.keyCode ) {
			case keyCode.RIGHT:
			case keyCode.DOWN:
				toFocus = this.headers[ ( currentIndex + 1 ) % length ];
				break;
			case keyCode.LEFT:
			case keyCode.UP:
				toFocus = this.headers[ ( currentIndex - 1 + length ) % length ];
				break;
			case keyCode.SPACE:
			case keyCode.ENTER:
				this._eventHandler( event );
				break;
			case keyCode.HOME:
				toFocus = this.headers[ 0 ];
				break;
			case keyCode.END:
				toFocus = this.headers[ length - 1 ];
				break;
		}

		if ( toFocus ) {
			$( event.target ).attr( "tabIndex", -1 );
			$( toFocus ).attr( "tabIndex", 0 );
			toFocus.focus();
			event.preventDefault();
		}
	},

	_panelKeyDown: function( event ) {
		if ( event.keyCode === $.ui.keyCode.UP && event.ctrlKey ) {
			$( event.currentTarget ).prev().focus();
		}
	},

	refresh: function() {
		var options = this.options;
		this._processPanels();

		// was collapsed or no panel
		if ( ( options.active === false && options.collapsible === true ) || !this.headers.length ) {
			options.active = false;
			this.active = $();
		// active false only when collapsible is true
		} else if ( options.active === false ) {
			this._activate( 0 );
		// was active, but active panel is gone
		} else if ( this.active.length && !$.contains( this.element[ 0 ], this.active[ 0 ] ) ) {
			// all remaining panel are disabled
			if ( this.headers.length === this.headers.find(".ui-state-disabled").length ) {
				options.active = false;
				this.active = $();
			// activate previous panel
			} else {
				this._activate( Math.max( 0, options.active - 1 ) );
			}
		// was active, active panel still exists
		} else {
			// make sure active index is correct
			options.active = this.headers.index( this.active );
		}

		this._destroyIcons();

		this._refresh();
	},

	_processPanels: function() {
		this.headers = this.element.find( this.options.header )
			.addClass( "ui-accordion-header ui-state-default ui-corner-all" );

		this.headers.next()
			.addClass( "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom" )
			.filter( ":not(.ui-accordion-content-active)" )
			.hide();
	},

	_refresh: function() {
		var maxHeight,
			options = this.options,
			heightStyle = options.heightStyle,
			parent = this.element.parent();

		this.active = this._findActive( options.active )
			.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" )
			.removeClass( "ui-corner-all" );
		this.active.next()
			.addClass( "ui-accordion-content-active" )
			.show();

		this.headers
			.attr( "role", "tab" )
			.each(function() {
				var header = $( this ),
					headerId = header.uniqueId().attr( "id" ),
					panel = header.next(),
					panelId = panel.uniqueId().attr( "id" );
				header.attr( "aria-controls", panelId );
				panel.attr( "aria-labelledby", headerId );
			})
			.next()
				.attr( "role", "tabpanel" );

		this.headers
			.not( this.active )
			.attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			})
			.next()
				.attr({
					"aria-hidden": "true"
				})
				.hide();

		// make sure at least one header is in the tab order
		if ( !this.active.length ) {
			this.headers.eq( 0 ).attr( "tabIndex", 0 );
		} else {
			this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			})
			.next()
				.attr({
					"aria-hidden": "false"
				});
		}

		this._createIcons();

		this._setupEvents( options.event );

		if ( heightStyle === "fill" ) {
			maxHeight = parent.height();
			this.element.siblings( ":visible" ).each(function() {
				var elem = $( this ),
					position = elem.css( "position" );

				if ( position === "absolute" || position === "fixed" ) {
					return;
				}
				maxHeight -= elem.outerHeight( true );
			});

			this.headers.each(function() {
				maxHeight -= $( this ).outerHeight( true );
			});

			this.headers.next()
				.each(function() {
					$( this ).height( Math.max( 0, maxHeight -
						$( this ).innerHeight() + $( this ).height() ) );
				})
				.css( "overflow", "auto" );
		} else if ( heightStyle === "auto" ) {
			maxHeight = 0;
			this.headers.next()
				.each(function() {
					maxHeight = Math.max( maxHeight, $( this ).css( "height", "" ).height() );
				})
				.height( maxHeight );
		}
	},

	_activate: function( index ) {
		var active = this._findActive( index )[ 0 ];

		// trying to activate the already active panel
		if ( active === this.active[ 0 ] ) {
			return;
		}

		// trying to collapse, simulate a click on the currently active header
		active = active || this.active[ 0 ];

		this._eventHandler({
			target: active,
			currentTarget: active,
			preventDefault: $.noop
		});
	},

	_findActive: function( selector ) {
		return typeof selector === "number" ? this.headers.eq( selector ) : $();
	},

	_setupEvents: function( event ) {
		var events = {
			keydown: "_keydown"
		};
		if ( event ) {
			$.each( event.split( " " ), function( index, eventName ) {
				events[ eventName ] = "_eventHandler";
			});
		}

		this._off( this.headers.add( this.headers.next() ) );
		this._on( this.headers, events );
		this._on( this.headers.next(), { keydown: "_panelKeyDown" });
		this._hoverable( this.headers );
		this._focusable( this.headers );
	},

	_eventHandler: function( event ) {
		var options = this.options,
			active = this.active,
			clicked = $( event.currentTarget ),
			clickedIsActive = clicked[ 0 ] === active[ 0 ],
			collapsing = clickedIsActive && options.collapsible,
			toShow = collapsing ? $() : clicked.next(),
			toHide = active.next(),
			eventData = {
				oldHeader: active,
				oldPanel: toHide,
				newHeader: collapsing ? $() : clicked,
				newPanel: toShow
			};

		event.preventDefault();

		if (
				// click on active header, but not collapsible
				( clickedIsActive && !options.collapsible ) ||
				// allow canceling activation
				( this._trigger( "beforeActivate", event, eventData ) === false ) ) {
			return;
		}

		options.active = collapsing ? false : this.headers.index( clicked );

		// when the call to ._toggle() comes after the class changes
		// it causes a very odd bug in IE 8 (see #6720)
		this.active = clickedIsActive ? $() : clicked;
		this._toggle( eventData );

		// switch classes
		// corner classes on the previously active header stay after the animation
		active.removeClass( "ui-accordion-header-active ui-state-active" );
		if ( options.icons ) {
			active.children( ".ui-accordion-header-icon" )
				.removeClass( options.icons.activeHeader )
				.addClass( options.icons.header );
		}

		if ( !clickedIsActive ) {
			clicked
				.removeClass( "ui-corner-all" )
				.addClass( "ui-accordion-header-active ui-state-active ui-corner-top" );
			if ( options.icons ) {
				clicked.children( ".ui-accordion-header-icon" )
					.removeClass( options.icons.header )
					.addClass( options.icons.activeHeader );
			}

			clicked
				.next()
				.addClass( "ui-accordion-content-active" );
		}
	},

	_toggle: function( data ) {
		var toShow = data.newPanel,
			toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

		// handle activating a panel during the animation for another activation
		this.prevShow.add( this.prevHide ).stop( true, true );
		this.prevShow = toShow;
		this.prevHide = toHide;

		if ( this.options.animate ) {
			this._animate( toShow, toHide, data );
		} else {
			toHide.hide();
			toShow.show();
			this._toggleComplete( data );
		}

		toHide.attr({
			"aria-hidden": "true"
		});
		toHide.prev().attr( "aria-selected", "false" );
		// if we're switching panels, remove the old header from the tab order
		// if we're opening from collapsed state, remove the previous header from the tab order
		// if we're collapsing, then keep the collapsing header in the tab order
		if ( toShow.length && toHide.length ) {
			toHide.prev().attr({
				"tabIndex": -1,
				"aria-expanded": "false"
			});
		} else if ( toShow.length ) {
			this.headers.filter(function() {
				return $( this ).attr( "tabIndex" ) === 0;
			})
			.attr( "tabIndex", -1 );
		}

		toShow
			.attr( "aria-hidden", "false" )
			.prev()
				.attr({
					"aria-selected": "true",
					tabIndex: 0,
					"aria-expanded": "true"
				});
	},

	_animate: function( toShow, toHide, data ) {
		var total, easing, duration,
			that = this,
			adjust = 0,
			down = toShow.length &&
				( !toHide.length || ( toShow.index() < toHide.index() ) ),
			animate = this.options.animate || {},
			options = down && animate.down || animate,
			complete = function() {
				that._toggleComplete( data );
			};

		if ( typeof options === "number" ) {
			duration = options;
		}
		if ( typeof options === "string" ) {
			easing = options;
		}
		// fall back from options to animation in case of partial down settings
		easing = easing || options.easing || animate.easing;
		duration = duration || options.duration || animate.duration;

		if ( !toHide.length ) {
			return toShow.animate( this.showProps, duration, easing, complete );
		}
		if ( !toShow.length ) {
			return toHide.animate( this.hideProps, duration, easing, complete );
		}

		total = toShow.show().outerHeight();
		toHide.animate( this.hideProps, {
			duration: duration,
			easing: easing,
			step: function( now, fx ) {
				fx.now = Math.round( now );
			}
		});
		toShow
			.hide()
			.animate( this.showProps, {
				duration: duration,
				easing: easing,
				complete: complete,
				step: function( now, fx ) {
					fx.now = Math.round( now );
					if ( fx.prop !== "height" ) {
						adjust += fx.now;
					} else if ( that.options.heightStyle !== "content" ) {
						fx.now = Math.round( total - toHide.outerHeight() - adjust );
						adjust = 0;
					}
				}
			});
	},

	_toggleComplete: function( data ) {
		var toHide = data.oldPanel;

		toHide
			.removeClass( "ui-accordion-content-active" )
			.prev()
				.removeClass( "ui-corner-top" )
				.addClass( "ui-corner-all" );

		// Work around for rendering bug in IE (#5421)
		if ( toHide.length ) {
			toHide.parent()[ 0 ].className = toHide.parent()[ 0 ].className;
		}
		this._trigger( "activate", null, data );
	}
});


/*!
 * jQuery UI Datepicker 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/datepicker/
 */


$.extend($.ui, { datepicker: { version: "1.11.0" } });

var datepicker_instActive;

function datepicker_getZindex( elem ) {
	var position, value;
	while ( elem.length && elem[ 0 ] !== document ) {
		// Ignore z-index if position is set to a value where z-index is ignored by the browser
		// This makes behavior of this function consistent across browsers
		// WebKit always returns auto if the element is positioned
		position = elem.css( "position" );
		if ( position === "absolute" || position === "relative" || position === "fixed" ) {
			// IE returns 0 when zIndex is not specified
			// other browsers return a string
			// we ignore the case of nested elements with an explicit value of 0
			// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
			value = parseInt( elem.css( "zIndex" ), 10 );
			if ( !isNaN( value ) && value !== 0 ) {
				return value;
			}
		}
		elem = elem.parent();
	}

	return 0;
}
/* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepicker() {
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
	this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
	this._appendClass = "ui-datepicker-append"; // The name of the append marker class
	this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
	this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
	this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
	this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
	this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
	this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[""] = { // Default regional settings
		closeText: "Done", // Display text for close link
		prevText: "Prev", // Display text for previous month link
		nextText: "Next", // Display text for next month link
		currentText: "Today", // Display text for current month link
		monthNames: ["January","February","March","April","May","June",
			"July","August","September","October","November","December"], // Names of months for drop-down and formatting
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
		dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
		dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
		dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"], // Column headings for days starting at Sunday
		weekHeader: "Wk", // Column header for week of the year
		dateFormat: "mm/dd/yy", // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: "" // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		showOn: "focus", // "focus" for popup on focus,
			// "button" for trigger button, or "both" for either
		showAnim: "fadeIn", // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		appendText: "", // Display text following the input box, e.g. showing the format
		buttonText: "...", // Text for trigger button
		buttonImage: "", // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: false, // True if month can be selected directly, false if only prev/next
		changeYear: false, // True if year can be selected directly, false if only prev/next
		yearRange: "c-10:c+10", // Range of years to display in drop-down,
			// either relative to today's year (-nn:+nn), relative to currently displayed year
			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		showWeek: false, // True to show week of the year, false to not show it
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: "+10", // Short year values < this are in the current century,
			// > this are in the previous century,
			// string value starting with "+" for current year + value
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		duration: "fast", // Duration of display/closure
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		onSelect: null, // Define a callback function when a date is selected
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onClose: null, // Define a callback function when the datepicker is closed
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		altField: "", // Selector for an alternate field to store selected dates into
		altFormat: "", // The date format to use for the alternate field
		constrainInput: true, // The input is constrained by the current date format
		showButtonPanel: false, // True to show button panel, false to not show it
		autoSize: false, // True to size the input for the date format, false to leave as is
		disabled: false // The initial disabled state
	};
	$.extend(this._defaults, this.regional[""]);
	this.regional.en = $.extend( true, {}, this.regional[ "" ]);
	this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
	this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}

$.extend(Datepicker.prototype, {
	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: "hasDatepicker",

	//Keep track of the maximum number of rows displayed (see #7043)
	maxRows: 4,

	// TODO rename to "widget" when switching to widget factory
	_widgetDatepicker: function() {
		return this.dpDiv;
	},

	/* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
	setDefaults: function(settings) {
		datepicker_extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
	_attachDatepicker: function(target, settings) {
		var nodeName, inline, inst;
		nodeName = target.nodeName.toLowerCase();
		inline = (nodeName === "div" || nodeName === "span");
		if (!target.id) {
			this.uuid += 1;
			target.id = "dp" + this.uuid;
		}
		inst = this._newInst($(target), inline);
		inst.settings = $.extend({}, settings || {});
		if (nodeName === "input") {
			this._connectDatepicker(target, inst);
		} else if (inline) {
			this._inlineDatepicker(target, inst);
		}
	},

	/* Create a new instance object. */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
		return {id: id, input: target, // associated target
			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
			drawMonth: 0, drawYear: 0, // month being drawn
			inline: inline, // is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : // presentation div
			datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))};
	},

	/* Attach the date picker to an input field. */
	_connectDatepicker: function(target, inst) {
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName)) {
			return;
		}
		this._attachments(input, inst);
		input.addClass(this.markerClassName).keydown(this._doKeyDown).
			keypress(this._doKeyPress).keyup(this._doKeyUp);
		this._autoSize(inst);
		$.data(target, "datepicker", inst);
		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
	},

	/* Make attachments based on settings. */
	_attachments: function(input, inst) {
		var showOn, buttonText, buttonImage,
			appendText = this._get(inst, "appendText"),
			isRTL = this._get(inst, "isRTL");

		if (inst.append) {
			inst.append.remove();
		}
		if (appendText) {
			inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
			input[isRTL ? "before" : "after"](inst.append);
		}

		input.unbind("focus", this._showDatepicker);

		if (inst.trigger) {
			inst.trigger.remove();
		}

		showOn = this._get(inst, "showOn");
		if (showOn === "focus" || showOn === "both") { // pop-up date picker when in the marked field
			input.focus(this._showDatepicker);
		}
		if (showOn === "button" || showOn === "both") { // pop-up date picker when button clicked
			buttonText = this._get(inst, "buttonText");
			buttonImage = this._get(inst, "buttonImage");
			inst.trigger = $(this._get(inst, "buttonImageOnly") ?
				$("<img/>").addClass(this._triggerClass).
					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
				$("<button type='button'></button>").addClass(this._triggerClass).
					html(!buttonImage ? buttonText : $("<img/>").attr(
					{ src:buttonImage, alt:buttonText, title:buttonText })));
			input[isRTL ? "before" : "after"](inst.trigger);
			inst.trigger.click(function() {
				if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
					$.datepicker._hideDatepicker();
				} else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
					$.datepicker._hideDatepicker();
					$.datepicker._showDatepicker(input[0]);
				} else {
					$.datepicker._showDatepicker(input[0]);
				}
				return false;
			});
		}
	},

	/* Apply the maximum length for the date format. */
	_autoSize: function(inst) {
		if (this._get(inst, "autoSize") && !inst.inline) {
			var findMax, max, maxI, i,
				date = new Date(2009, 12 - 1, 20), // Ensure double digits
				dateFormat = this._get(inst, "dateFormat");

			if (dateFormat.match(/[DM]/)) {
				findMax = function(names) {
					max = 0;
					maxI = 0;
					for (i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					"monthNames" : "monthNamesShort"))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					"dayNames" : "dayNamesShort"))) + 20 - date.getDay());
			}
			inst.input.attr("size", this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div. */
	_inlineDatepicker: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName)) {
			return;
		}
		divSpan.addClass(this.markerClassName).append(inst.dpDiv);
		$.data(target, "datepicker", inst);
		this._setDate(inst, this._getDefaultDate(inst), true);
		this._updateDatepicker(inst);
		this._updateAlternate(inst);
		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
		if( inst.settings.disabled ) {
			this._disableDatepicker( target );
		}
		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
		inst.dpDiv.css( "display", "block" );
	},

	/* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
		var id, browserWidth, browserHeight, scrollX, scrollY,
			inst = this._dialogInst; // internal instance

		if (!inst) {
			this.uuid += 1;
			id = "dp" + this.uuid;
			this._dialogInput = $("<input type='text' id='" + id +
				"' style='position: absolute; top: -100px; width: 0px;'/>");
			this._dialogInput.keydown(this._doKeyDown);
			$("body").append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], "datepicker", inst);
		}
		datepicker_extendRemove(inst.settings, settings || {});
		date = (date && date.constructor === Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);

		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			browserWidth = document.documentElement.clientWidth;
			browserHeight = document.documentElement.clientHeight;
			scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // should use actual width/height below
				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
		}

		// move input on screen for focus, but hidden behind dialog
		this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass);
		this._showDatepicker(this._dialogInput[0]);
		if ($.blockUI) {
			$.blockUI(this.dpDiv);
		}
		$.data(this._dialogInput[0], "datepicker", inst);
		return this;
	},

	/* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
	_destroyDatepicker: function(target) {
		var nodeName,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		$.removeData(target, "datepicker");
		if (nodeName === "input") {
			inst.append.remove();
			inst.trigger.remove();
			$target.removeClass(this.markerClassName).
				unbind("focus", this._showDatepicker).
				unbind("keydown", this._doKeyDown).
				unbind("keypress", this._doKeyPress).
				unbind("keyup", this._doKeyUp);
		} else if (nodeName === "div" || nodeName === "span") {
			$target.removeClass(this.markerClassName).empty();
		}
	},

	/* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_enableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = false;
			inst.trigger.filter("button").
				each(function() { this.disabled = false; }).end().
				filter("img").css({opacity: "1.0", cursor: ""});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().removeClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", false);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
	},

	/* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
	_disableDatepicker: function(target) {
		var nodeName, inline,
			$target = $(target),
			inst = $.data(target, "datepicker");

		if (!$target.hasClass(this.markerClassName)) {
			return;
		}

		nodeName = target.nodeName.toLowerCase();
		if (nodeName === "input") {
			target.disabled = true;
			inst.trigger.filter("button").
				each(function() { this.disabled = true; }).end().
				filter("img").css({opacity: "0.5", cursor: "default"});
		} else if (nodeName === "div" || nodeName === "span") {
			inline = $target.children("." + this._inlineClass);
			inline.children().addClass("ui-state-disabled");
			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
				prop("disabled", true);
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value === target ? null : value); }); // delete entry
		this._disabledInputs[this._disabledInputs.length] = target;
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
	_isDisabledDatepicker: function(target) {
		if (!target) {
			return false;
		}
		for (var i = 0; i < this._disabledInputs.length; i++) {
			if (this._disabledInputs[i] === target) {
				return true;
			}
		}
		return false;
	},

	/* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
	_getInst: function(target) {
		try {
			return $.data(target, "datepicker");
		}
		catch (err) {
			throw "Missing instance data for this datepicker";
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
	_optionDatepicker: function(target, name, value) {
		var settings, date, minDate, maxDate,
			inst = this._getInst(target);

		if (arguments.length === 2 && typeof name === "string") {
			return (name === "defaults" ? $.extend({}, $.datepicker._defaults) :
				(inst ? (name === "all" ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}

		settings = name || {};
		if (typeof name === "string") {
			settings = {};
			settings[name] = value;
		}

		if (inst) {
			if (this._curInst === inst) {
				this._hideDatepicker();
			}

			date = this._getDateDatepicker(target, true);
			minDate = this._getMinMaxDate(inst, "min");
			maxDate = this._getMinMaxDate(inst, "max");
			datepicker_extendRemove(inst.settings, settings);
			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
			if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
				inst.settings.minDate = this._formatDate(inst, minDate);
			}
			if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
				inst.settings.maxDate = this._formatDate(inst, maxDate);
			}
			if ( "disabled" in settings ) {
				if ( settings.disabled ) {
					this._disableDatepicker(target);
				} else {
					this._enableDatepicker(target);
				}
			}
			this._attachments($(target), inst);
			this._autoSize(inst);
			this._setDate(inst, date);
			this._updateAlternate(inst);
			this._updateDatepicker(inst);
		}
	},

	// change method deprecated
	_changeDatepicker: function(target, name, value) {
		this._optionDatepicker(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
	_refreshDatepicker: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepicker(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
	_setDateDatepicker: function(target, date) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date);
			this._updateDatepicker(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
	_getDateDatepicker: function(target, noDefault) {
		var inst = this._getInst(target);
		if (inst && !inst.inline) {
			this._setDateFromField(inst, noDefault);
		}
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes. */
	_doKeyDown: function(event) {
		var onSelect, dateStr, sel,
			inst = $.datepicker._getInst(event.target),
			handled = true,
			isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

		inst._keyEvent = true;
		if ($.datepicker._datepickerShowing) {
			switch (event.keyCode) {
				case 9: $.datepicker._hideDatepicker();
						handled = false;
						break; // hide on tab out
				case 13: sel = $("td." + $.datepicker._dayOverClass + ":not(." +
									$.datepicker._currentClass + ")", inst.dpDiv);
						if (sel[0]) {
							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
						}

						onSelect = $.datepicker._get(inst, "onSelect");
						if (onSelect) {
							dateStr = $.datepicker._formatDate(inst);

							// trigger custom callback
							onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
						} else {
							$.datepicker._hideDatepicker();
						}

						return false; // don't submit the form
				case 27: $.datepicker._hideDatepicker();
						break; // hide on escape
				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							-$.datepicker._get(inst, "stepBigMonths") :
							-$.datepicker._get(inst, "stepMonths")), "M");
						break; // previous month/year on page up/+ ctrl
				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
							+$.datepicker._get(inst, "stepBigMonths") :
							+$.datepicker._get(inst, "stepMonths")), "M");
						break; // next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey) {
							$.datepicker._clearDate(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // clear on ctrl or command +end
				case 36: if (event.ctrlKey || event.metaKey) {
							$.datepicker._gotoToday(event.target);
						}
						handled = event.ctrlKey || event.metaKey;
						break; // current on ctrl or command +home
				case 37: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command +left
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								-$.datepicker._get(inst, "stepBigMonths") :
								-$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +left on Mac
						break;
				case 38: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, -7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command +up
				case 39: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), "D");
						}
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command +right
						if (event.originalEvent.altKey) {
							$.datepicker._adjustDate(event.target, (event.ctrlKey ?
								+$.datepicker._get(inst, "stepBigMonths") :
								+$.datepicker._get(inst, "stepMonths")), "M");
						}
						// next month/year on alt +right
						break;
				case 40: if (event.ctrlKey || event.metaKey) {
							$.datepicker._adjustDate(event.target, +7, "D");
						}
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command +down
				default: handled = false;
			}
		} else if (event.keyCode === 36 && event.ctrlKey) { // display the date picker on ctrl+home
			$.datepicker._showDatepicker(this);
		} else {
			handled = false;
		}

		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
	},

	/* Filter entered characters - based on date format. */
	_doKeyPress: function(event) {
		var chars, chr,
			inst = $.datepicker._getInst(event.target);

		if ($.datepicker._get(inst, "constrainInput")) {
			chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
			chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
			return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field. */
	_doKeyUp: function(event) {
		var date,
			inst = $.datepicker._getInst(event.target);

		if (inst.input.val() !== inst.lastVal) {
			try {
				date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
					(inst.input ? inst.input.val() : null),
					$.datepicker._getFormatConfig(inst));

				if (date) { // only if valid
					$.datepicker._setDateFromField(inst);
					$.datepicker._updateAlternate(inst);
					$.datepicker._updateDatepicker(inst);
				}
			}
			catch (err) {
			}
		}
		return true;
	},

	/* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
	_showDatepicker: function(input) {
		input = input.target || input;
		if (input.nodeName.toLowerCase() !== "input") { // find from button/image trigger
			input = $("input", input.parentNode)[0];
		}

		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) { // already here
			return;
		}

		var inst, beforeShow, beforeShowSettings, isFixed,
			offset, showAnim, duration;

		inst = $.datepicker._getInst(input);
		if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
			$.datepicker._curInst.dpDiv.stop(true, true);
			if ( inst && $.datepicker._datepickerShowing ) {
				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
			}
		}

		beforeShow = $.datepicker._get(inst, "beforeShow");
		beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
		if(beforeShowSettings === false){
			return;
		}
		datepicker_extendRemove(inst.settings, beforeShowSettings);

		inst.lastVal = null;
		$.datepicker._lastInput = input;
		$.datepicker._setDateFromField(inst);

		if ($.datepicker._inDialog) { // hide cursor
			input.value = "";
		}
		if (!$.datepicker._pos) { // position below input
			$.datepicker._pos = $.datepicker._findPos(input);
			$.datepicker._pos[1] += input.offsetHeight; // add the height
		}

		isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css("position") === "fixed";
			return !isFixed;
		});

		offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
		$.datepicker._pos = null;
		//to avoid flashes on Firefox
		inst.dpDiv.empty();
		// determine sizing offscreen
		inst.dpDiv.css({position: "absolute", display: "block", top: "-1000px"});
		$.datepicker._updateDatepicker(inst);
		// fix width for dynamic number of date pickers
		// and adjust position before showing
		offset = $.datepicker._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
			"static" : (isFixed ? "fixed" : "absolute")), display: "none",
			left: offset.left + "px", top: offset.top + "px"});

		if (!inst.inline) {
			showAnim = $.datepicker._get(inst, "showAnim");
			duration = $.datepicker._get(inst, "duration");
			inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
			$.datepicker._datepickerShowing = true;

			if ( $.effects && $.effects.effect[ showAnim ] ) {
				inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
			} else {
				inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
			}

			if ( $.datepicker._shouldFocusInput( inst ) ) {
				inst.input.focus();
			}

			$.datepicker._curInst = inst;
		}
	},

	/* Generate the date picker content. */
	_updateDatepicker: function(inst) {
		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
		datepicker_instActive = inst; // for delegate hover events
		inst.dpDiv.empty().append(this._generateHTML(inst));
		this._attachHandlers(inst);
		inst.dpDiv.find("." + this._dayOverClass + " a");

		var origyearshtml,
			numMonths = this._getNumberOfMonths(inst),
			cols = numMonths[1],
			width = 17;

		inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
		if (cols > 1) {
			inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", (width * cols) + "em");
		}
		inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") +
			"Class"]("ui-datepicker-multi");
		inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") +
			"Class"]("ui-datepicker-rtl");

		if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
			inst.input.focus();
		}

		// deffered render of the years select (to avoid flashes on Firefox)
		if( inst.yearshtml ){
			origyearshtml = inst.yearshtml;
			setTimeout(function(){
				//assure that inst.yearshtml didn't change.
				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
					inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
				}
				origyearshtml = inst.yearshtml = null;
			}, 0);
		}
	},

	// #6694 - don't focus the input if it's already focused
	// this breaks the change event in IE
	// Support: IE and jQuery <1.9
	_shouldFocusInput: function( inst ) {
		return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
	},

	/* Check positioning to remain on screen. */
	_checkOffset: function(inst, offset, isFixed) {
		var dpWidth = inst.dpDiv.outerWidth(),
			dpHeight = inst.dpDiv.outerHeight(),
			inputWidth = inst.input ? inst.input.outerWidth() : 0,
			inputHeight = inst.input ? inst.input.outerHeight() : 0,
			viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
			viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

		offset.left -= (this._get(inst, "isRTL") ? (dpWidth - inputWidth) : 0);
		offset.left -= (isFixed && offset.left === inst.input.offset().left) ? $(document).scrollLeft() : 0;
		offset.top -= (isFixed && offset.top === (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

		// now check if datepicker is showing outside window viewport - move to a better place if so.
		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
			Math.abs(offset.left + dpWidth - viewWidth) : 0);
		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
			Math.abs(dpHeight + inputHeight) : 0);

		return offset;
	},

	/* Find an object's position on the screen. */
	_findPos: function(obj) {
		var position,
			inst = this._getInst(obj),
			isRTL = this._get(inst, "isRTL");

		while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
			obj = obj[isRTL ? "previousSibling" : "nextSibling"];
		}

		position = $(obj).offset();
		return [position.left, position.top];
	},

	/* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
	_hideDatepicker: function(input) {
		var showAnim, duration, postProcess, onClose,
			inst = this._curInst;

		if (!inst || (input && inst !== $.data(input, "datepicker"))) {
			return;
		}

		if (this._datepickerShowing) {
			showAnim = this._get(inst, "showAnim");
			duration = this._get(inst, "duration");
			postProcess = function() {
				$.datepicker._tidyDialog(inst);
			};

			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
			} else {
				inst.dpDiv[(showAnim === "slideDown" ? "slideUp" :
					(showAnim === "fadeIn" ? "fadeOut" : "hide"))]((showAnim ? duration : null), postProcess);
			}

			if (!showAnim) {
				postProcess();
			}
			this._datepickerShowing = false;

			onClose = this._get(inst, "onClose");
			if (onClose) {
				onClose.apply((inst.input ? inst.input[0] : null), [(inst.input ? inst.input.val() : ""), inst]);
			}

			this._lastInput = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
				if ($.blockUI) {
					$.unblockUI();
					$("body").append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
	},

	/* Tidy up after a dialog display. */
	_tidyDialog: function(inst) {
		inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
	},

	/* Close date picker if clicked elsewhere. */
	_checkExternalClick: function(event) {
		if (!$.datepicker._curInst) {
			return;
		}

		var $target = $(event.target),
			inst = $.datepicker._getInst($target[0]);

		if ( ( ( $target[0].id !== $.datepicker._mainDivId &&
				$target.parents("#" + $.datepicker._mainDivId).length === 0 &&
				!$target.hasClass($.datepicker.markerClassName) &&
				!$target.closest("." + $.datepicker._triggerClass).length &&
				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst ) ) {
				$.datepicker._hideDatepicker();
		}
	},

	/* Adjust one of the date sub-fields. */
	_adjustDate: function(id, offset, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		if (this._isDisabledDatepicker(target[0])) {
			return;
		}
		this._adjustInstDate(inst, offset +
			(period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
			period);
		this._updateDatepicker(inst);
	},

	/* Action for current link. */
	_gotoToday: function(id) {
		var date,
			target = $(id),
			inst = this._getInst(target[0]);

		if (this._get(inst, "gotoCurrent") && inst.currentDay) {
			inst.selectedDay = inst.currentDay;
			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
			inst.drawYear = inst.selectedYear = inst.currentYear;
		} else {
			date = new Date();
			inst.selectedDay = date.getDate();
			inst.drawMonth = inst.selectedMonth = date.getMonth();
			inst.drawYear = inst.selectedYear = date.getFullYear();
		}
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a new month/year. */
	_selectMonthYear: function(id, select, period) {
		var target = $(id),
			inst = this._getInst(target[0]);

		inst["selected" + (period === "M" ? "Month" : "Year")] =
		inst["draw" + (period === "M" ? "Month" : "Year")] =
			parseInt(select.options[select.selectedIndex].value,10);

		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Action for selecting a day. */
	_selectDay: function(id, month, year, td) {
		var inst,
			target = $(id);

		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
			return;
		}

		inst = this._getInst(target[0]);
		inst.selectedDay = inst.currentDay = $("a", td).html();
		inst.selectedMonth = inst.currentMonth = month;
		inst.selectedYear = inst.currentYear = year;
		this._selectDate(id, this._formatDate(inst,
			inst.currentDay, inst.currentMonth, inst.currentYear));
	},

	/* Erase the input field and hide the date picker. */
	_clearDate: function(id) {
		var target = $(id);
		this._selectDate(target, "");
	},

	/* Update the input field with the selected date. */
	_selectDate: function(id, dateStr) {
		var onSelect,
			target = $(id),
			inst = this._getInst(target[0]);

		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
		if (inst.input) {
			inst.input.val(dateStr);
		}
		this._updateAlternate(inst);

		onSelect = this._get(inst, "onSelect");
		if (onSelect) {
			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
		} else if (inst.input) {
			inst.input.trigger("change"); // fire the change event
		}

		if (inst.inline){
			this._updateDatepicker(inst);
		} else {
			this._hideDatepicker();
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) !== "object") {
				inst.input.focus(); // restore focus
			}
			this._lastInput = null;
		}
	},

	/* Update any alternate field to synchronise with the main field. */
	_updateAlternate: function(inst) {
		var altFormat, date, dateStr,
			altField = this._get(inst, "altField");

		if (altField) { // update alternate field too
			altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
			date = this._getDate(inst);
			dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
			$(altField).each(function() { $(this).val(dateStr); });
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
	noWeekends: function(date) {
		var day = date.getDay();
		return [(day > 0 && day < 6), ""];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
	iso8601Week: function(date) {
		var time,
			checkDate = new Date(date.getTime());

		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

		time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
	parseDate: function (format, value, settings) {
		if (format == null || value == null) {
			throw "Invalid arguments";
		}

		value = (typeof value === "object" ? value.toString() : value + "");
		if (value === "") {
			return null;
		}

		var iFormat, dim, extra,
			iValue = 0,
			shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			shortYearCutoff = (typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
				new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			year = -1,
			month = -1,
			day = -1,
			doy = -1,
			literal = false,
			date,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Extract a number from the string value
			getNumber = function(match) {
				var isDoubled = lookAhead(match),
					size = (match === "@" ? 14 : (match === "!" ? 20 :
					(match === "y" && isDoubled ? 4 : (match === "o" ? 3 : 2)))),
					digits = new RegExp("^\\d{1," + size + "}"),
					num = value.substring(iValue).match(digits);
				if (!num) {
					throw "Missing number at position " + iValue;
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			},
			// Extract a name from the string value and convert to an index
			getName = function(match, shortNames, longNames) {
				var index = -1,
					names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
						return [ [k, v] ];
					}).sort(function (a, b) {
						return -(a[1].length - b[1].length);
					});

				$.each(names, function (i, pair) {
					var name = pair[1];
					if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
						index = pair[0];
						iValue += name.length;
						return false;
					}
				});
				if (index !== -1) {
					return index + 1;
				} else {
					throw "Unknown name at position " + iValue;
				}
			},
			// Confirm that a literal character matches the string value
			checkLiteral = function() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw "Unexpected literal at position " + iValue;
				}
				iValue++;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					checkLiteral();
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d":
						day = getNumber("d");
						break;
					case "D":
						getName("D", dayNamesShort, dayNames);
						break;
					case "o":
						doy = getNumber("o");
						break;
					case "m":
						month = getNumber("m");
						break;
					case "M":
						month = getName("M", monthNamesShort, monthNames);
						break;
					case "y":
						year = getNumber("y");
						break;
					case "@":
						date = new Date(getNumber("@"));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "!":
						date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'")){
							checkLiteral();
						} else {
							literal = true;
						}
						break;
					default:
						checkLiteral();
				}
			}
		}

		if (iValue < value.length){
			extra = value.substr(iValue);
			if (!/^\s+/.test(extra)) {
				throw "Extra/unparsed characters found in date: " + extra;
			}
		}

		if (year === -1) {
			year = new Date().getFullYear();
		} else if (year < 100) {
			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
				(year <= shortYearCutoff ? 0 : -100);
		}

		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim) {
					break;
				}
				month++;
				day -= dim;
			} while (true);
		}

		date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
			throw "Invalid date"; // E.g. 31/02/00
		}
		return date;
	},

	/* Standard date formats. */
	ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
	COOKIE: "D, dd M yy",
	ISO_8601: "yy-mm-dd",
	RFC_822: "D, d M y",
	RFC_850: "DD, dd-M-y",
	RFC_1036: "D, d M y",
	RFC_1123: "D, d M yy",
	RFC_2822: "D, d M yy",
	RSS: "D, d M y", // RFC 822
	TICKS: "!",
	TIMESTAMP: "@",
	W3C: "yy-mm-dd", // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
	formatDate: function (format, date, settings) {
		if (!date) {
			return "";
		}

		var iFormat,
			dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
			dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
			monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
			monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			},
			// Format a number, with leading zero if necessary
			formatNumber = function(match, value, len) {
				var num = "" + value;
				if (lookAhead(match)) {
					while (num.length < len) {
						num = "0" + num;
					}
				}
				return num;
			},
			// Format a name, short or long as requested
			formatName = function(match, value, shortNames, longNames) {
				return (lookAhead(match) ? longNames[value] : shortNames[value]);
			},
			output = "",
			literal = false;

		if (date) {
			for (iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
						literal = false;
					} else {
						output += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case "d":
							output += formatNumber("d", date.getDate(), 2);
							break;
						case "D":
							output += formatName("D", date.getDay(), dayNamesShort, dayNames);
							break;
						case "o":
							output += formatNumber("o",
								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
							break;
						case "m":
							output += formatNumber("m", date.getMonth() + 1, 2);
							break;
						case "M":
							output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
							break;
						case "y":
							output += (lookAhead("y") ? date.getFullYear() :
								(date.getYear() % 100 < 10 ? "0" : "") + date.getYear() % 100);
							break;
						case "@":
							output += date.getTime();
							break;
						case "!":
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'")) {
								output += "'";
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
		}
		return output;
	},

	/* Extract all possible characters from the date format. */
	_possibleChars: function (format) {
		var iFormat,
			chars = "",
			literal = false,
			// Check whether a format character is doubled
			lookAhead = function(match) {
				var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) === match);
				if (matches) {
					iFormat++;
				}
				return matches;
			};

		for (iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal) {
				if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
					literal = false;
				} else {
					chars += format.charAt(iFormat);
				}
			} else {
				switch (format.charAt(iFormat)) {
					case "d": case "m": case "y": case "@":
						chars += "0123456789";
						break;
					case "D": case "M":
						return null; // Accept anything
					case "'":
						if (lookAhead("'")) {
							chars += "'";
						} else {
							literal = true;
						}
						break;
					default:
						chars += format.charAt(iFormat);
				}
			}
		}
		return chars;
	},

	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker. */
	_setDateFromField: function(inst, noDefault) {
		if (inst.input.val() === inst.lastVal) {
			return;
		}

		var dateFormat = this._get(inst, "dateFormat"),
			dates = inst.lastVal = inst.input ? inst.input.val() : null,
			defaultDate = this._getDefaultDate(inst),
			date = defaultDate,
			settings = this._getFormatConfig(inst);

		try {
			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
		} catch (event) {
			dates = (noDefault ? "" : dates);
		}
		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		inst.currentDay = (dates ? date.getDate() : 0);
		inst.currentMonth = (dates ? date.getMonth() : 0);
		inst.currentYear = (dates ? date.getFullYear() : 0);
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening. */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
	},

	/* A date may be specified as an exact value or a relative one. */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
				var date = new Date();
				date.setDate(date.getDate() + offset);
				return date;
			},
			offsetString = function(offset) {
				try {
					return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
						offset, $.datepicker._getFormatConfig(inst));
				}
				catch (e) {
					// Ignore
				}

				var date = (offset.toLowerCase().match(/^c/) ?
					$.datepicker._getDate(inst) : null) || new Date(),
					year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate(),
					pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
					matches = pattern.exec(offset);

				while (matches) {
					switch (matches[2] || "d") {
						case "d" : case "D" :
							day += parseInt(matches[1],10); break;
						case "w" : case "W" :
							day += parseInt(matches[1],10) * 7; break;
						case "m" : case "M" :
							month += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
						case "y": case "Y" :
							year += parseInt(matches[1],10);
							day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
							break;
					}
					matches = pattern.exec(offset);
				}
				return new Date(year, month, day);
			},
			newDate = (date == null || date === "" ? defaultDate : (typeof date === "string" ? offsetString(date) :
				(typeof date === "number" ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));

		newDate = (newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate);
		if (newDate) {
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			newDate.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(newDate);
	},

	/* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
	_daylightSavingAdjust: function(date) {
		if (!date) {
			return null;
		}
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly. */
	_setDate: function(inst, date, noChange) {
		var clear = !date,
			origMonth = inst.selectedMonth,
			origYear = inst.selectedYear,
			newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

		inst.selectedDay = inst.currentDay = newDate.getDate();
		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
		if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
			this._notifyChange(inst);
		}
		this._adjustInstDate(inst);
		if (inst.input) {
			inst.input.val(clear ? "" : this._formatDate(inst));
		}
	},

	/* Retrieve the date(s) directly. */
	_getDate: function(inst) {
		var startDate = (!inst.currentYear || (inst.input && inst.input.val() === "") ? null :
			this._daylightSavingAdjust(new Date(
			inst.currentYear, inst.currentMonth, inst.currentDay)));
			return startDate;
	},

	/* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
	_attachHandlers: function(inst) {
		var stepMonths = this._get(inst, "stepMonths"),
			id = "#" + inst.id.replace( /\\\\/g, "\\" );
		inst.dpDiv.find("[data-handler]").map(function () {
			var handler = {
				prev: function () {
					$.datepicker._adjustDate(id, -stepMonths, "M");
				},
				next: function () {
					$.datepicker._adjustDate(id, +stepMonths, "M");
				},
				hide: function () {
					$.datepicker._hideDatepicker();
				},
				today: function () {
					$.datepicker._gotoToday(id);
				},
				selectDay: function () {
					$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
					return false;
				},
				selectMonth: function () {
					$.datepicker._selectMonthYear(id, this, "M");
					return false;
				},
				selectYear: function () {
					$.datepicker._selectMonthYear(id, this, "Y");
					return false;
				}
			};
			$(this).bind(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
		});
	},

	/* Generate the HTML for the current state of the date picker. */
	_generateHTML: function(inst) {
		var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
			controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
			monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
			selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
			cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
			printDate, dRow, tbody, daySettings, otherMonth, unselectable,
			tempDate = new Date(),
			today = this._daylightSavingAdjust(
				new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), // clear time
			isRTL = this._get(inst, "isRTL"),
			showButtonPanel = this._get(inst, "showButtonPanel"),
			hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
			navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
			numMonths = this._getNumberOfMonths(inst),
			showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
			stepMonths = this._get(inst, "stepMonths"),
			isMultiMonth = (numMonths[0] !== 1 || numMonths[1] !== 1),
			currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
				new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			drawMonth = inst.drawMonth - showCurrentAtPos,
			drawYear = inst.drawYear;

		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) {
			maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;

		prevText = this._get(inst, "prevText");
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));

		prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
			" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ prevText +"'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w") + "'>" + prevText + "</span></a>"));

		nextText = this._get(inst, "nextText");
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));

		next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
			" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" :
			(hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+ nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e") + "'>" + nextText + "</span></a>"));

		currentText = this._get(inst, "currentText");
		gotoDate = (this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));

		controls = (!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
			this._get(inst, "closeText") + "</button>" : "");

		buttonPanel = (showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") +
			(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
			">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

		firstDay = parseInt(this._get(inst, "firstDay"),10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);

		showWeek = this._get(inst, "showWeek");
		dayNames = this._get(inst, "dayNames");
		dayNamesMin = this._get(inst, "dayNamesMin");
		monthNames = this._get(inst, "monthNames");
		monthNamesShort = this._get(inst, "monthNamesShort");
		beforeShowDay = this._get(inst, "beforeShowDay");
		showOtherMonths = this._get(inst, "showOtherMonths");
		selectOtherMonths = this._get(inst, "selectOtherMonths");
		defaultDate = this._getDefaultDate(inst);
		html = "";
		dow;
		for (row = 0; row < numMonths[0]; row++) {
			group = "";
			this.maxRows = 4;
			for (col = 0; col < numMonths[1]; col++) {
				selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
				cornerClass = " ui-corner-all";
				calender = "";
				if (isMultiMonth) {
					calender += "<div class='ui-datepicker-group";
					if (numMonths[1] > 1) {
						switch (col) {
							case 0: calender += " ui-datepicker-group-first";
								cornerClass = " ui-corner-" + (isRTL ? "right" : "left"); break;
							case numMonths[1]-1: calender += " ui-datepicker-group-last";
								cornerClass = " ui-corner-" + (isRTL ? "left" : "right"); break;
							default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
						}
					}
					calender += "'>";
				}
				calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
					(/all|left/.test(cornerClass) && row === 0 ? (isRTL ? next : prev) : "") +
					(/all|right/.test(cornerClass) && row === 0 ? (isRTL ? prev : next) : "") +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
					"</div><table class='ui-datepicker-calendar'><thead>" +
					"<tr>";
				thead = (showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "");
				for (dow = 0; dow < 7; dow++) { // days of the week
					day = (dow + firstDay) % 7;
					thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" +
						"<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
				}
				calender += thead + "</tr></thead><tbody>";
				daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
				}
				leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
				numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
				this.maxRows = numRows;
				printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (dRow = 0; dRow < numRows; dRow++) { // create date picker rows
					calender += "<tr>";
					tbody = (!showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
						this._get(inst, "calculateWeek")(printDate) + "</td>");
					for (dow = 0; dow < 7; dow++) { // create date picker days
						daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, ""]);
						otherMonth = (printDate.getMonth() !== drawMonth);
						unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						tbody += "<td class='" +
							((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + // highlight weekends
							(otherMonth ? " ui-datepicker-other-month" : "") + // highlight days from other months
							((printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent) || // user pressed key
							(defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime()) ?
							// or defaultDate is current printedDate and defaultDate is selectedDate
							" " + this._dayOverClass : "") + // highlight selected day
							(unselectable ? " " + this._unselectableClass + " ui-state-disabled": "") +  // highlight unselectable days
							(otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + // highlight custom dates
							(printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + // highlight selected day
							(printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + // highlight today (if different)
							((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + // cell title
							(unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + // actions
							(otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
							(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
							(printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") +
							(printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + // highlight selected day
							(otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
							"' href='#'>" + printDate.getDate() + "</a>")) + "</td>"; // display selectable date
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					calender += tbody + "</tr>";
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				calender += "</tbody></table>" + (isMultiMonth ? "</div>" +
							((numMonths[0] > 0 && col === numMonths[1]-1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
				group += calender;
			}
			html += group;
		}
		html += buttonPanel;
		inst._keyEvent = false;
		return html;
	},

	/* Generate the month and year header. */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			secondary, monthNames, monthNamesShort) {

		var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
			changeMonth = this._get(inst, "changeMonth"),
			changeYear = this._get(inst, "changeYear"),
			showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
			html = "<div class='ui-datepicker-title'>",
			monthHtml = "";

		// month selection
		if (secondary || !changeMonth) {
			monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
		} else {
			inMinYear = (minDate && minDate.getFullYear() === drawYear);
			inMaxYear = (maxDate && maxDate.getFullYear() === drawYear);
			monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
			for ( month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
					monthHtml += "<option value='" + month + "'" +
						(month === drawMonth ? " selected='selected'" : "") +
						">" + monthNamesShort[month] + "</option>";
				}
			}
			monthHtml += "</select>";
		}

		if (!showMonthAfterYear) {
			html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
		}

		// year selection
		if ( !inst.yearshtml ) {
			inst.yearshtml = "";
			if (secondary || !changeYear) {
				html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
			} else {
				// determine range of years to display
				years = this._get(inst, "yearRange").split(":");
				thisYear = new Date().getFullYear();
				determineYear = function(value) {
					var year = (value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
						(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
						parseInt(value, 10)));
					return (isNaN(year) ? thisYear : year);
				};
				year = determineYear(years[0]);
				endYear = Math.max(year, determineYear(years[1] || ""));
				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
				inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
				for (; year <= endYear; year++) {
					inst.yearshtml += "<option value='" + year + "'" +
						(year === drawYear ? " selected='selected'" : "") +
						">" + year + "</option>";
				}
				inst.yearshtml += "</select>";

				html += inst.yearshtml;
				inst.yearshtml = null;
			}
		}

		html += this._get(inst, "yearSuffix");
		if (showMonthAfterYear) {
			html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
		}
		html += "</div>"; // Close datepicker_header
		return html;
	},

	/* Adjust one of the date sub-fields. */
	_adjustInstDate: function(inst, offset, period) {
		var year = inst.drawYear + (period === "Y" ? offset : 0),
			month = inst.drawMonth + (period === "M" ? offset : 0),
			day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
			date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

		inst.selectedDay = date.getDate();
		inst.drawMonth = inst.selectedMonth = date.getMonth();
		inst.drawYear = inst.selectedYear = date.getFullYear();
		if (period === "M" || period === "Y") {
			this._notifyChange(inst);
		}
	},

	/* Ensure a date is within any min/max bounds. */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			newDate = (minDate && date < minDate ? minDate : date);
		return (maxDate && newDate > maxDate ? maxDate : newDate);
	},

	/* Notify change of month/year. */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, "onChangeMonthYear");
		if (onChange) {
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.selectedYear, inst.selectedMonth + 1, inst]);
		}
	},

	/* Determine the number of months to show. */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, "numberOfMonths");
		return (numMonths == null ? [1, 1] : (typeof numMonths === "number" ? [1, numMonths] : numMonths));
	},

	/* Determine the current maximum date - ensure no time components are set. */
	_getMinMaxDate: function(inst, minMax) {
		return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
	},

	/* Find the number of days in a given month. */
	_getDaysInMonth: function(year, month) {
		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
	},

	/* Find the day of the week of the first of a month. */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "next/prev" month display change. */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst),
			date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

		if (offset < 0) {
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		}
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range? */
	_isInRange: function(inst, date) {
		var yearSplit, currentYear,
			minDate = this._getMinMaxDate(inst, "min"),
			maxDate = this._getMinMaxDate(inst, "max"),
			minYear = null,
			maxYear = null,
			years = this._get(inst, "yearRange");
			if (years){
				yearSplit = years.split(":");
				currentYear = new Date().getFullYear();
				minYear = parseInt(yearSplit[0], 10);
				maxYear = parseInt(yearSplit[1], 10);
				if ( yearSplit[0].match(/[+\-].*/) ) {
					minYear += currentYear;
				}
				if ( yearSplit[1].match(/[+\-].*/) ) {
					maxYear += currentYear;
				}
			}

		return ((!minDate || date.getTime() >= minDate.getTime()) &&
			(!maxDate || date.getTime() <= maxDate.getTime()) &&
			(!minYear || date.getFullYear() >= minYear) &&
			(!maxYear || date.getFullYear() <= maxYear));
	},

	/* Provide the configuration settings for formatting/parsing. */
	_getFormatConfig: function(inst) {
		var shortYearCutoff = this._get(inst, "shortYearCutoff");
		shortYearCutoff = (typeof shortYearCutoff !== "string" ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		return {shortYearCutoff: shortYearCutoff,
			dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
			monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames")};
	},

	/* Format the given date for display. */
	_formatDate: function(inst, day, month, year) {
		if (!day) {
			inst.currentDay = inst.selectedDay;
			inst.currentMonth = inst.selectedMonth;
			inst.currentYear = inst.selectedYear;
		}
		var date = (day ? (typeof day === "object" ? day :
			this._daylightSavingAdjust(new Date(year, month, day))) :
			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
		return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
	}
});

/*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
function datepicker_bindHover(dpDiv) {
	var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
	return dpDiv.delegate(selector, "mouseout", function() {
			$(this).removeClass("ui-state-hover");
			if (this.className.indexOf("ui-datepicker-prev") !== -1) {
				$(this).removeClass("ui-datepicker-prev-hover");
			}
			if (this.className.indexOf("ui-datepicker-next") !== -1) {
				$(this).removeClass("ui-datepicker-next-hover");
			}
		})
		.delegate(selector, "mouseover", function(){
			if (!$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? dpDiv.parent()[0] : datepicker_instActive.input[0])) {
				$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
				$(this).addClass("ui-state-hover");
				if (this.className.indexOf("ui-datepicker-prev") !== -1) {
					$(this).addClass("ui-datepicker-prev-hover");
				}
				if (this.className.indexOf("ui-datepicker-next") !== -1) {
					$(this).addClass("ui-datepicker-next-hover");
				}
			}
		});
}

/* jQuery extend now ignores nulls! */
function datepicker_extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] == null) {
			target[name] = props[name];
		}
	}
	return target;
}

/* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
$.fn.datepicker = function(options){

	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}

	/* Initialise the date picker. */
	if (!$.datepicker.initialized) {
		$(document).mousedown($.datepicker._checkExternalClick);
		$.datepicker.initialized = true;
	}

	/* Append datepicker main container to body if not exist. */
	if ($("#"+$.datepicker._mainDivId).length === 0) {
		$("body").append($.datepicker.dpDiv);
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
		return $.datepicker["_" + options + "Datepicker"].
			apply($.datepicker, [this[0]].concat(otherArgs));
	}
	return this.each(function() {
		typeof options === "string" ?
			$.datepicker["_" + options + "Datepicker"].
				apply($.datepicker, [this].concat(otherArgs)) :
			$.datepicker._attachDatepicker(this, options);
	});
};

$.datepicker = new Datepicker(); // singleton instance
$.datepicker.initialized = false;
$.datepicker.uuid = new Date().getTime();
$.datepicker.version = "1.11.0";

var datepicker = $.datepicker;


/*!
 * jQuery UI Effects 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */


var dataSpace = "ui-effects-";

$.effects = {
	effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function( jQuery, undefined ) {

	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

	// plusequals test for += 100 -= 100
	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
	// a set of RE's that can match strings and generate color tuples.
	stringParsers = [ {
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ], 16 )
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
				];
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ] / 100,
					execResult[ 3 ] / 100,
					execResult[ 4 ]
				];
			}
		} ],

	// jQuery.Color( )
	color = jQuery.Color = function( color, green, blue, alpha ) {
		return new jQuery.Color.fn.parse( color, green, blue, alpha );
	},
	spaces = {
		rgba: {
			props: {
				red: {
					idx: 0,
					type: "byte"
				},
				green: {
					idx: 1,
					type: "byte"
				},
				blue: {
					idx: 2,
					type: "byte"
				}
			}
		},

		hsla: {
			props: {
				hue: {
					idx: 0,
					type: "degrees"
				},
				saturation: {
					idx: 1,
					type: "percent"
				},
				lightness: {
					idx: 2,
					type: "percent"
				}
			}
		}
	},
	propTypes = {
		"byte": {
			floor: true,
			max: 255
		},
		"percent": {
			max: 1
		},
		"degrees": {
			mod: 360,
			floor: true
		}
	},
	support = color.support = {},

	// element for support tests
	supportElem = jQuery( "<p>" )[ 0 ],

	// colors = jQuery.Color.names
	colors,

	// local aliases of functions called often
	each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
	space.cache = "_" + spaceName;
	space.props.alpha = {
		idx: 3,
		type: "percent",
		def: 1
	};
});

function clamp( value, prop, allowEmpty ) {
	var type = propTypes[ prop.type ] || {};

	if ( value == null ) {
		return (allowEmpty || !prop.def) ? null : prop.def;
	}

	// ~~ is an short way of doing floor for positive numbers
	value = type.floor ? ~~value : parseFloat( value );

	// IE will pass in empty strings as value for alpha,
	// which will hit this case
	if ( isNaN( value ) ) {
		return prop.def;
	}

	if ( type.mod ) {
		// we add mod before modding to make sure that negatives values
		// get converted properly: -10 -> 350
		return (value + type.mod) % type.mod;
	}

	// for now all property types without mod have min and max
	return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
	var inst = color(),
		rgba = inst._rgba = [];

	string = string.toLowerCase();

	each( stringParsers, function( i, parser ) {
		var parsed,
			match = parser.re.exec( string ),
			values = match && parser.parse( match ),
			spaceName = parser.space || "rgba";

		if ( values ) {
			parsed = inst[ spaceName ]( values );

			// if this was an rgba parse the assignment might happen twice
			// oh well....
			inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
			rgba = inst._rgba = parsed._rgba;

			// exit each( stringParsers ) here because we matched
			return false;
		}
	});

	// Found a stringParser that handled it
	if ( rgba.length ) {

		// if this came from a parsed string, force "transparent" when alpha is 0
		// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
		if ( rgba.join() === "0,0,0,0" ) {
			jQuery.extend( rgba, colors.transparent );
		}
		return inst;
	}

	// named colors
	return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
	parse: function( red, green, blue, alpha ) {
		if ( red === undefined ) {
			this._rgba = [ null, null, null, null ];
			return this;
		}
		if ( red.jquery || red.nodeType ) {
			red = jQuery( red ).css( green );
			green = undefined;
		}

		var inst = this,
			type = jQuery.type( red ),
			rgba = this._rgba = [];

		// more than 1 argument specified - assume ( red, green, blue, alpha )
		if ( green !== undefined ) {
			red = [ red, green, blue, alpha ];
			type = "array";
		}

		if ( type === "string" ) {
			return this.parse( stringParse( red ) || colors._default );
		}

		if ( type === "array" ) {
			each( spaces.rgba.props, function( key, prop ) {
				rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
			});
			return this;
		}

		if ( type === "object" ) {
			if ( red instanceof color ) {
				each( spaces, function( spaceName, space ) {
					if ( red[ space.cache ] ) {
						inst[ space.cache ] = red[ space.cache ].slice();
					}
				});
			} else {
				each( spaces, function( spaceName, space ) {
					var cache = space.cache;
					each( space.props, function( key, prop ) {

						// if the cache doesn't exist, and we know how to convert
						if ( !inst[ cache ] && space.to ) {

							// if the value was null, we don't need to copy it
							// if the key was alpha, we don't need to copy it either
							if ( key === "alpha" || red[ key ] == null ) {
								return;
							}
							inst[ cache ] = space.to( inst._rgba );
						}

						// this is the only case where we allow nulls for ALL properties.
						// call clamp with alwaysAllowEmpty
						inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
					});

					// everything defined but alpha?
					if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
						// use the default of 1
						inst[ cache ][ 3 ] = 1;
						if ( space.from ) {
							inst._rgba = space.from( inst[ cache ] );
						}
					}
				});
			}
			return this;
		}
	},
	is: function( compare ) {
		var is = color( compare ),
			same = true,
			inst = this;

		each( spaces, function( _, space ) {
			var localCache,
				isCache = is[ space.cache ];
			if (isCache) {
				localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
				each( space.props, function( _, prop ) {
					if ( isCache[ prop.idx ] != null ) {
						same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
						return same;
					}
				});
			}
			return same;
		});
		return same;
	},
	_space: function() {
		var used = [],
			inst = this;
		each( spaces, function( spaceName, space ) {
			if ( inst[ space.cache ] ) {
				used.push( spaceName );
			}
		});
		return used.pop();
	},
	transition: function( other, distance ) {
		var end = color( other ),
			spaceName = end._space(),
			space = spaces[ spaceName ],
			startColor = this.alpha() === 0 ? color( "transparent" ) : this,
			start = startColor[ space.cache ] || space.to( startColor._rgba ),
			result = start.slice();

		end = end[ space.cache ];
		each( space.props, function( key, prop ) {
			var index = prop.idx,
				startValue = start[ index ],
				endValue = end[ index ],
				type = propTypes[ prop.type ] || {};

			// if null, don't override start value
			if ( endValue === null ) {
				return;
			}
			// if null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		});
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {
		// if we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		}));
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
				return v == null ? ( i > 2 ? 1 : 0 ) : v;
			});

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			});

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// default to 0 when nulls exist
			v = ( v || 0 ).toString( 16 );
			return v.length === 1 ? "0" + v : v;
		}).join("");
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + ( q - p ) * h * 6;
	}
	if ( h * 2 < 1) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
	}
	return p;
}

spaces.hsla.to = function( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {
		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};

each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// generate a cache for this space if it doesn't exist
		if ( to && !this[ cache ] ) {
			this[ cache ] = to( this._rgba );
		}
		if ( value === undefined ) {
			return this[ cache ].slice();
		}

		var ret,
			type = jQuery.type( value ),
			arr = ( type === "array" || type === "object" ) ? value : arguments,
			local = this[ cache ].slice();

		each( props, function( key, prop ) {
			var val = arr[ type === "object" ? key : prop.idx ];
			if ( val == null ) {
				val = local[ prop.idx ];
			}
			local[ prop.idx ] = clamp( val, prop );
		});

		if ( from ) {
			ret = color( from( local ) );
			ret[ cache ] = local;
			return ret;
		} else {
			return color( local );
		}
	};

	// makes red() green() blue() alpha() hue() saturation() lightness()
	each( props, function( key, prop ) {
		// alpha is included in more than one space
		if ( color.fn[ key ] ) {
			return;
		}
		color.fn[ key ] = function( value ) {
			var vtype = jQuery.type( value ),
				fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
				local = this[ fn ](),
				cur = local[ prop.idx ],
				match;

			if ( vtype === "undefined" ) {
				return cur;
			}

			if ( vtype === "function" ) {
				value = value.call( this, cur );
				vtype = jQuery.type( value );
			}
			if ( value == null && prop.empty ) {
				return this;
			}
			if ( vtype === "string" ) {
				match = rplusequals.exec( value );
				if ( match ) {
					value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
				}
			}
			local[ prop.idx ] = value;
			return this[ fn ]( local );
		};
	});
});

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
	var hooks = hook.split( " " );
	each( hooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed, curElem,
					backgroundColor = "";

				if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						while (
							(backgroundColor === "" || backgroundColor === "transparent") &&
							curElem && curElem.style
						) {
							try {
								backgroundColor = jQuery.css( curElem, "backgroundColor" );
								curElem = curElem.parentNode;
							} catch ( e ) {
							}
						}

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				try {
					elem.style[ hook ] = value;
				} catch( e ) {
					// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
				}
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
	expand: function( value ) {
		var expanded = {};

		each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
			expanded[ "border" + part + "Color" ] = value;
		});
		return expanded;
	}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
	// 4.1. Basic color keywords
	aqua: "#00ffff",
	black: "#000000",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	gray: "#808080",
	green: "#008000",
	lime: "#00ff00",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	purple: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	teal: "#008080",
	white: "#ffffff",
	yellow: "#ffff00",

	// 4.2.3. "transparent" color keyword
	transparent: [ null, null, null, 0 ],

	_default: "#ffffff"
};

})( jQuery );

/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
(function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
	$.fx.step[ prop ] = function( fx ) {
		if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
			jQuery.style( fx.elem, prop, fx.end );
			fx.setAttr = true;
		}
	};
});

function getElementStyles( elem ) {
	var key, len,
		style = elem.ownerDocument.defaultView ?
			elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
			elem.currentStyle,
		styles = {};

	if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
		len = style.length;
		while ( len-- ) {
			key = style[ len ];
			if ( typeof style[ key ] === "string" ) {
				styles[ $.camelCase( key ) ] = style[ key ];
			}
		}
	// support: Opera, IE <9
	} else {
		for ( key in style ) {
			if ( typeof style[ key ] === "string" ) {
				styles[ key ] = style[ key ];
			}
		}
	}

	return styles;
}

function styleDifference( oldStyle, newStyle ) {
	var diff = {},
		name, value;

	for ( name in newStyle ) {
		value = newStyle[ name ];
		if ( oldStyle[ name ] !== value ) {
			if ( !shorthandStyles[ name ] ) {
				if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
					diff[ name ] = value;
				}
			}
		}
	}

	return diff;
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

$.effects.animateClass = function( value, duration, easing, callback ) {
	var o = $.speed( duration, easing, callback );

	return this.queue( function() {
		var animated = $( this ),
			baseClass = animated.attr( "class" ) || "",
			applyClassChange,
			allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

		// map the animated objects to store the original styles.
		allAnimations = allAnimations.map(function() {
			var el = $( this );
			return {
				el: el,
				start: getElementStyles( this )
			};
		});

		// apply class change
		applyClassChange = function() {
			$.each( classAnimationActions, function(i, action) {
				if ( value[ action ] ) {
					animated[ action + "Class" ]( value[ action ] );
				}
			});
		};
		applyClassChange();

		// map all animated objects again - calculate new styles and diff
		allAnimations = allAnimations.map(function() {
			this.end = getElementStyles( this.el[ 0 ] );
			this.diff = styleDifference( this.start, this.end );
			return this;
		});

		// apply original class
		animated.attr( "class", baseClass );

		// map all animated objects again - this time collecting a promise
		allAnimations = allAnimations.map(function() {
			var styleInfo = this,
				dfd = $.Deferred(),
				opts = $.extend({}, o, {
					queue: false,
					complete: function() {
						dfd.resolve( styleInfo );
					}
				});

			this.el.animate( this.diff, opts );
			return dfd.promise();
		});

		// once all animations have completed:
		$.when.apply( $, allAnimations.get() ).done(function() {

			// set the final class
			applyClassChange();

			// for each animated element,
			// clear all css properties that were animated
			$.each( arguments, function() {
				var el = this.el;
				$.each( this.diff, function(key) {
					el.css( key, "" );
				});
			});

			// this is guarnteed to be there if you use jQuery.speed()
			// it also handles dequeuing the next anim...
			o.complete.call( animated[ 0 ] );
		});
	});
};

$.fn.extend({
	addClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return speed ?
				$.effects.animateClass.call( this,
					{ add: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.addClass ),

	removeClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return arguments.length > 1 ?
				$.effects.animateClass.call( this,
					{ remove: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.removeClass ),

	toggleClass: (function( orig ) {
		return function( classNames, force, speed, easing, callback ) {
			if ( typeof force === "boolean" || force === undefined ) {
				if ( !speed ) {
					// without speed parameter
					return orig.apply( this, arguments );
				} else {
					return $.effects.animateClass.call( this,
						(force ? { add: classNames } : { remove: classNames }),
						speed, easing, callback );
				}
			} else {
				// without force parameter
				return $.effects.animateClass.call( this,
					{ toggle: classNames }, force, speed, easing );
			}
		};
	})( $.fn.toggleClass ),

	switchClass: function( remove, add, speed, easing, callback) {
		return $.effects.animateClass.call( this, {
			add: add,
			remove: remove
		}, speed, easing, callback );
	}
});

})();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

(function() {

$.extend( $.effects, {
	version: "1.11.0",

	// Saves a set of properties in a data storage
	save: function( element, set ) {
		for ( var i = 0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
			}
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function( element, set ) {
		var val, i;
		for ( i = 0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				val = element.data( dataSpace + set[ i ] );
				// support: jQuery 1.6.2
				// http://bugs.jquery.com/ticket/9917
				// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
				// We can't differentiate between "" and 0 here, so we just assume
				// empty string since it's likely to be a more common value...
				if ( val === undefined ) {
					val = "";
				}
				element.css( set[ i ], val );
			}
		}
	},

	setMode: function( el, mode ) {
		if (mode === "toggle") {
			mode = el.is( ":hidden" ) ? "show" : "hide";
		}
		return mode;
	},

	// Translates a [top,left] array into a baseline value
	// this should be a little more flexible in the future to handle a string & hash
	getBaseline: function( origin, original ) {
		var y, x;
		switch ( origin[ 0 ] ) {
			case "top": y = 0; break;
			case "middle": y = 0.5; break;
			case "bottom": y = 1; break;
			default: y = origin[ 0 ] / original.height;
		}
		switch ( origin[ 1 ] ) {
			case "left": x = 0; break;
			case "center": x = 0.5; break;
			case "right": x = 1; break;
			default: x = origin[ 1 ] / original.width;
		}
		return {
			x: x,
			y: y
		};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function( element ) {

		// if the element is already wrapped, return it
		if ( element.parent().is( ".ui-effects-wrapper" )) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				"float": element.css( "float" )
			},
			wrapper = $( "<div></div>" )
				.addClass( "ui-effects-wrapper" )
				.css({
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
			// Store the size in case width/height are defined in % - Fixes #5245
			size = {
				width: element.width(),
				height: element.height()
			},
			active = document.activeElement;

		// support: Firefox
		// Firefox incorrectly exposes anonymous content
		// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
		try {
			active.id;
		} catch( e ) {
			active = document.body;
		}

		element.wrap( wrapper );

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}

		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if ( element.css( "position" ) === "static" ) {
			wrapper.css({ position: "relative" });
			element.css({ position: "relative" });
		} else {
			$.extend( props, {
				position: element.css( "position" ),
				zIndex: element.css( "z-index" )
			});
			$.each([ "top", "left", "bottom", "right" ], function(i, pos) {
				props[ pos ] = element.css( pos );
				if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
					props[ pos ] = "auto";
				}
			});
			element.css({
				position: "relative",
				top: 0,
				left: 0,
				right: "auto",
				bottom: "auto"
			});
		}
		element.css(size);

		return wrapper.css( props ).show();
	},

	removeWrapper: function( element ) {
		var active = document.activeElement;

		if ( element.parent().is( ".ui-effects-wrapper" ) ) {
			element.parent().replaceWith( element );

			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
		}

		return element;
	},

	setTransition: function( element, list, factor, value ) {
		value = value || {};
		$.each( list, function( i, x ) {
			var unit = element.cssUnit( x );
			if ( unit[ 0 ] > 0 ) {
				value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
			}
		});
		return value;
	}
});

// return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

	// allow passing all options as the first parameter
	if ( $.isPlainObject( effect ) ) {
		options = effect;
		effect = effect.effect;
	}

	// convert to an object
	effect = { effect: effect };

	// catch (effect, null, ...)
	if ( options == null ) {
		options = {};
	}

	// catch (effect, callback)
	if ( $.isFunction( options ) ) {
		callback = options;
		speed = null;
		options = {};
	}

	// catch (effect, speed, ?)
	if ( typeof options === "number" || $.fx.speeds[ options ] ) {
		callback = speed;
		speed = options;
		options = {};
	}

	// catch (effect, options, callback)
	if ( $.isFunction( speed ) ) {
		callback = speed;
		speed = null;
	}

	// add options to effect
	if ( options ) {
		$.extend( effect, options );
	}

	speed = speed || options.duration;
	effect.duration = $.fx.off ? 0 :
		typeof speed === "number" ? speed :
		speed in $.fx.speeds ? $.fx.speeds[ speed ] :
		$.fx.speeds._default;

	effect.complete = callback || options.complete;

	return effect;
}

function standardAnimationOption( option ) {
	// Valid standard speeds (nothing, number, named speed)
	if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
		return true;
	}

	// Invalid strings - treat as "normal" speed
	if ( typeof option === "string" && !$.effects.effect[ option ] ) {
		return true;
	}

	// Complete callback
	if ( $.isFunction( option ) ) {
		return true;
	}

	// Options hash (but not naming an effect)
	if ( typeof option === "object" && !option.effect ) {
		return true;
	}

	// Didn't match any standard API
	return false;
}

$.fn.extend({
	effect: function( /* effect, options, speed, callback */ ) {
		var args = _normalizeArguments.apply( this, arguments ),
			mode = args.mode,
			queue = args.queue,
			effectMethod = $.effects.effect[ args.effect ];

		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args.duration, args.complete );
			} else {
				return this.each( function() {
					if ( args.complete ) {
						args.complete.call( this );
					}
				});
			}
		}

		function run( next ) {
			var elem = $( this ),
				complete = args.complete,
				mode = args.mode;

			function done() {
				if ( $.isFunction( complete ) ) {
					complete.call( elem[0] );
				}
				if ( $.isFunction( next ) ) {
					next();
				}
			}

			// If the element already has the correct final state, delegate to
			// the core methods so the internal tracking of "olddisplay" works.
			if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
				elem[ mode ]();
				done();
			} else {
				effectMethod.call( elem[0], args, done );
			}
		}

		return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
	},

	show: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "show";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.show ),

	hide: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "hide";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.hide ),

	toggle: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "toggle";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.toggle ),

	// helper functions
	cssUnit: function(key) {
		var style = this.css( key ),
			val = [];

		$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
			if ( style.indexOf( unit ) > 0 ) {
				val = [ parseFloat( style ), unit ];
			}
		});
		return val;
	}
});

})();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

(function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
	baseEasings[ name ] = function( p ) {
		return Math.pow( p, i + 2 );
	};
});

$.extend( baseEasings, {
	Sine: function( p ) {
		return 1 - Math.cos( p * Math.PI / 2 );
	},
	Circ: function( p ) {
		return 1 - Math.sqrt( 1 - p * p );
	},
	Elastic: function( p ) {
		return p === 0 || p === 1 ? p :
			-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
	},
	Back: function( p ) {
		return p * p * ( 3 * p - 2 );
	},
	Bounce: function( p ) {
		var pow2,
			bounce = 4;

		while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
		return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
	}
});

$.each( baseEasings, function( name, easeIn ) {
	$.easing[ "easeIn" + name ] = easeIn;
	$.easing[ "easeOut" + name ] = function( p ) {
		return 1 - easeIn( 1 - p );
	};
	$.easing[ "easeInOut" + name ] = function( p ) {
		return p < 0.5 ?
			easeIn( p * 2 ) / 2 :
			1 - easeIn( p * -2 + 2 ) / 2;
	};
});

})();

var effect = $.effects;


/*!
 * jQuery UI Effects Fade 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 */


var effectFade = $.effects.effect.fade = function( o, done ) {
	var el = $( this ),
		mode = $.effects.setMode( el, o.mode || "toggle" );

	el.animate({
		opacity: mode
	}, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: done
	});
};


/*!
 * jQuery UI Effects Slide 1.11.0
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 */


var effectSlide = $.effects.effect.slide = function( o, done ) {

	// Create element
	var el = $( this ),
		props = [ "position", "top", "bottom", "left", "right", "width", "height" ],
		mode = $.effects.setMode( el, o.mode || "show" ),
		show = mode === "show",
		direction = o.direction || "left",
		ref = (direction === "up" || direction === "down") ? "top" : "left",
		positiveMotion = (direction === "up" || direction === "left"),
		distance,
		animation = {};

	// Adjust
	$.effects.save( el, props );
	el.show();
	distance = o.distance || el[ ref === "top" ? "outerHeight" : "outerWidth" ]( true );

	$.effects.createWrapper( el ).css({
		overflow: "hidden"
	});

	if ( show ) {
		el.css( ref, positiveMotion ? (isNaN(distance) ? "-" + distance : -distance) : distance );
	}

	// Animation
	animation[ ref ] = ( show ?
		( positiveMotion ? "+=" : "-=") :
		( positiveMotion ? "-=" : "+=")) +
		distance;

	// Animate
	el.animate( animation, {
		queue: false,
		duration: o.duration,
		easing: o.easing,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};



}));;/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */

(function(jQuery){
  jQuery.hotkeys = {
    version: "0.8",
    specialKeys: {
      8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
      20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
      37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=",
      96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
      104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
      112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
      120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=",
      188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'"
    },

    shiftNums: {
      "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", 
      "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
      ".": ">",  "/": "?",  "\\": "|"
    },

    // excludes: button, checkbox, file, hidden, image, password, radio, reset, search, submit, url
    textAcceptingInputTypes: [
      "text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime",
      "datetime-local", "search", "color", "tel"],

    options: {
      filterTextInputs: true
	}
  };

  function keyHandler( handleObj ) {
    if ( typeof handleObj.data === "string" ) {
      handleObj.data = { keys: handleObj.data };
    }

	// Only care when a possible input has been specified
	if ( !handleObj.data || !handleObj.data.keys || typeof handleObj.data.keys !== "string" ) {
      return;
	}

	var origHandler = handleObj.handler,
	keys = handleObj.data.keys.toLowerCase().split(" ");

    handleObj.handler = function( event ) {
      // Don't fire in text-accepting inputs that we didn't directly bind to
      if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) || ( jQuery.hotkeys.options.filterTextInputs && jQuery.inArray(event.target.type, jQuery.hotkeys.textAcceptingInputTypes) > -1 ) ) ) {
	    return;
	  }

	  var special = jQuery.hotkeys.specialKeys[ event.keyCode ],
        character = String.fromCharCode( event.which ).toLowerCase(),
			modif = "", possible = {};

      jQuery.each([ "alt", "ctrl", "meta", "shift" ], function(index, specialKey) {
        if (event[specialKey + 'Key'] && special !== specialKey) {
          modif += specialKey + '+';
        }
      });


      modif = modif.replace('alt+ctrl+meta+shift', 'hyper');

	  if ( special ) {
	    possible[ modif + special ] = true;
	  }

	  if ( character ) {
	    possible[ modif + character ] = true;
		possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;

		// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
		if ( modif === "shift+" ) {
		  possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;
		}
      }

	  for ( var i = 0, l = keys.length; i < l; i++ ) {
	    if ( possible[ keys[i] ] ) {
		  return origHandler.apply( this, arguments );
		}
	  }
	};
  }

  jQuery.each([ "keydown", "keyup", "keypress" ], function() {
    jQuery.event.special[ this ] = { add: keyHandler };
  });

})( this.jQuery );
;/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.2.0",d.prototype.close=function(b){function c(){f.detach().trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",c).emulateTransitionEnd(150):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.2.0",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),d[e](null==f[b]?this.options[b]:f[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b).on("keydown.bs.carousel",a.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.2.0",c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},c.prototype.keydown=function(a){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.to=function(b){var c=this,d=this.getItemIndex(this.$active=this.$element.find(".item.active"));return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=e[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:g});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,f&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(e)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:g});return a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one("bsTransitionEnd",function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger(m)),f&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(b=!b),e||d.data("bs.collapse",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};c.VERSION="3.2.0",c.DEFAULTS={toggle:!0},c.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var c=a.Event("show.bs.collapse");if(this.$element.trigger(c),!c.isDefaultPrevented()){var d=this.$parent&&this.$parent.find("> .panel > .in");if(d&&d.length){var e=d.data("bs.collapse");if(e&&e.transitioning)return;b.call(d,"hide"),e||d.data("bs.collapse",null)}var f=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[f](0),this.transitioning=1;var g=function(){this.$element.removeClass("collapsing").addClass("collapse in")[f](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return g.call(this);var h=a.camelCase(["scroll",f].join("-"));this.$element.one("bsTransitionEnd",a.proxy(g,this)).emulateTransitionEnd(350)[f](this.$element[0][h])}}},c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var d=a.fn.collapse;a.fn.collapse=b,a.fn.collapse.Constructor=c,a.fn.collapse.noConflict=function(){return a.fn.collapse=d,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(c){var d,e=a(this),f=e.attr("data-target")||c.preventDefault()||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),g=a(f),h=g.data("bs.collapse"),i=h?"toggle":e.data(),j=e.attr("data-parent"),k=j&&a(j);h&&h.transitioning||(k&&k.find('[data-toggle="collapse"][data-parent="'+j+'"]').not(e).addClass("collapsed"),e[g.hasClass("in")?"addClass":"removeClass"]("collapsed")),b.call(g,i)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.2.0",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f+', [role="menu"], [role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.2.0",c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(300):c.$element.trigger("focus").trigger(e)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;if(this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(150):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var f=function(){c.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",f).emulateTransitionEnd(150):f()}else b&&b()},c.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.2.0",c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var c=a.contains(document.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!c)return;var d=this,e=this.tip(),f=this.getUID(this.type);this.setContent(),e.attr("id",f),this.$element.attr("aria-describedby",f),this.options.animation&&e.addClass("fade");var g="function"==typeof this.options.placement?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,h=/\s?auto?\s?/i,i=h.test(g);i&&(g=g.replace(h,"")||"top"),e.detach().css({top:0,left:0,display:"block"}).addClass(g).data("bs."+this.type,this),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element);var j=this.getPosition(),k=e[0].offsetWidth,l=e[0].offsetHeight;if(i){var m=g,n=this.$element.parent(),o=this.getPosition(n);g="bottom"==g&&j.top+j.height+l-o.scroll>o.height?"top":"top"==g&&j.top-o.scroll-l<0?"bottom":"right"==g&&j.right+k>o.width?"left":"left"==g&&j.left-k<o.left?"right":g,e.removeClass(m).addClass(g)}var p=this.getCalculatedOffset(g,j,k,l);this.applyPlacement(p,g);var q=function(){d.$element.trigger("shown.bs."+d.type),d.hoverState=null};a.support.transition&&this.$tip.hasClass("fade")?e.one("bsTransitionEnd",q).emulateTransitionEnd(150):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=k.left?2*k.left-e+i:2*k.top-f+j,m=k.left?"left":"top",n=k.left?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(l,d[0][n],m)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.removeAttr("aria-describedby"),this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one("bsTransitionEnd",b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName;return a.extend({},"function"==typeof c.getBoundingClientRect?c.getBoundingClientRect():null,{scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop(),width:d?a(window).width():b.outerWidth(),height:d?a(window).height():b.outerHeight()},d?{top:0,left:0}:b.offset())},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.2.0",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").empty()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.2.0",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.2.0",c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.closest("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},c.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one("bsTransitionEnd",e).emulateTransitionEnd(150):e(),f.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(c){c.preventDefault(),b.call(a(this),"show")})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.2.0",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=a(document).height(),d=this.$target.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=b-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){null!=this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:b-this.$element.height()-h}))}}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},d.offsetBottom&&(d.offset.bottom=d.offsetBottom),d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

!function(a){var b=function(){"use strict";return{isMsie:function(){return/(msie|trident)/i.test(navigator.userAgent)?navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]:!1},isBlankString:function(a){return!a||/^\s*$/.test(a)},escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a},isArray:a.isArray,isFunction:a.isFunction,isObject:a.isPlainObject,isUndefined:function(a){return"undefined"==typeof a},toStr:function(a){return b.isUndefined(a)||null===a?"":a+""},bind:a.proxy,each:function(b,c){function d(a,b){return c(b,a)}a.each(b,d)},map:a.map,filter:a.grep,every:function(b,c){var d=!0;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?void 0:!1}),!!d):d},some:function(b,c){var d=!1;return b?(a.each(b,function(a,e){return(d=c.call(null,e,a,b))?!1:void 0}),!!d):d},mixin:a.extend,getUniqueId:function(){var a=0;return function(){return a++}}(),templatify:function(b){function c(){return String(b)}return a.isFunction(b)?b:c},defer:function(a){setTimeout(a,0)},debounce:function(a,b,c){var d,e;return function(){var f,g,h=this,i=arguments;return f=function(){d=null,c||(e=a.apply(h,i))},g=c&&!d,clearTimeout(d),d=setTimeout(f,b),g&&(e=a.apply(h,i)),e}},throttle:function(a,b){var c,d,e,f,g,h;return g=0,h=function(){g=new Date,e=null,f=a.apply(c,d)},function(){var i=new Date,j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(e),e=null,g=i,f=a.apply(c,d)):e||(e=setTimeout(h,j)),f}},noop:function(){}}}(),c="0.10.5",d=function(){"use strict";function a(a){return a=b.toStr(a),a?a.split(/\s+/):[]}function c(a){return a=b.toStr(a),a?a.split(/\W+/):[]}function d(a){return function(){var c=[].slice.call(arguments,0);return function(d){var e=[];return b.each(c,function(c){e=e.concat(a(b.toStr(d[c])))}),e}}}return{nonword:c,whitespace:a,obj:{nonword:d(c),whitespace:d(a)}}}(),e=function(){"use strict";function c(c){this.maxSize=b.isNumber(c)?c:100,this.reset(),this.maxSize<=0&&(this.set=this.get=a.noop)}function d(){this.head=this.tail=null}function e(a,b){this.key=a,this.val=b,this.prev=this.next=null}return b.mixin(c.prototype,{set:function(a,b){var c,d=this.list.tail;this.size>=this.maxSize&&(this.list.remove(d),delete this.hash[d.key]),(c=this.hash[a])?(c.val=b,this.list.moveToFront(c)):(c=new e(a,b),this.list.add(c),this.hash[a]=c,this.size++)},get:function(a){var b=this.hash[a];return b?(this.list.moveToFront(b),b.val):void 0},reset:function(){this.size=0,this.hash={},this.list=new d}}),b.mixin(d.prototype,{add:function(a){this.head&&(a.next=this.head,this.head.prev=a),this.head=a,this.tail=this.tail||a},remove:function(a){a.prev?a.prev.next=a.next:this.head=a.next,a.next?a.next.prev=a.prev:this.tail=a.prev},moveToFront:function(a){this.remove(a),this.add(a)}}),c}(),f=function(){"use strict";function a(a){this.prefix=["__",a,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+b.escapeRegExChars(this.prefix))}function c(){return(new Date).getTime()}function d(a){return JSON.stringify(b.isUndefined(a)?null:a)}function e(a){return JSON.parse(a)}var f,g;try{f=window.localStorage,f.setItem("~~~","!"),f.removeItem("~~~")}catch(h){f=null}return g=f&&window.JSON?{_prefix:function(a){return this.prefix+a},_ttlKey:function(a){return this._prefix(a)+this.ttlKey},get:function(a){return this.isExpired(a)&&this.remove(a),e(f.getItem(this._prefix(a)))},set:function(a,e,g){return b.isNumber(g)?f.setItem(this._ttlKey(a),d(c()+g)):f.removeItem(this._ttlKey(a)),f.setItem(this._prefix(a),d(e))},remove:function(a){return f.removeItem(this._ttlKey(a)),f.removeItem(this._prefix(a)),this},clear:function(){var a,b,c=[],d=f.length;for(a=0;d>a;a++)(b=f.key(a)).match(this.keyMatcher)&&c.push(b.replace(this.keyMatcher,""));for(a=c.length;a--;)this.remove(c[a]);return this},isExpired:function(a){var d=e(f.getItem(this._ttlKey(a)));return b.isNumber(d)&&c()>d?!0:!1}}:{get:b.noop,set:b.noop,remove:b.noop,clear:b.noop,isExpired:b.noop},b.mixin(a.prototype,g),a}(),g=function(){"use strict";function c(b){b=b||{},this.cancelled=!1,this.lastUrl=null,this._send=b.transport?d(b.transport):a.ajax,this._get=b.rateLimiter?b.rateLimiter(this._get):this._get,this._cache=b.cache===!1?new e(0):i}function d(c){return function(d,e){function f(a){b.defer(function(){h.resolve(a)})}function g(a){b.defer(function(){h.reject(a)})}var h=a.Deferred();return c(d,e,f,g),h}}var f=0,g={},h=6,i=new e(10);return c.setMaxPendingRequests=function(a){h=a},c.resetCache=function(){i.reset()},b.mixin(c.prototype,{_get:function(a,b,c){function d(b){c&&c(null,b),k._cache.set(a,b)}function e(){c&&c(!0)}function i(){f--,delete g[a],k.onDeckRequestArgs&&(k._get.apply(k,k.onDeckRequestArgs),k.onDeckRequestArgs=null)}var j,k=this;this.cancelled||a!==this.lastUrl||((j=g[a])?j.done(d).fail(e):h>f?(f++,g[a]=this._send(a,b).done(d).fail(e).always(i)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(a,c,d){var e;return b.isFunction(c)&&(d=c,c={}),this.cancelled=!1,this.lastUrl=a,(e=this._cache.get(a))?b.defer(function(){d&&d(null,e)}):this._get(a,c,d),!!e},cancel:function(){this.cancelled=!0}}),c}(),h=function(){"use strict";function c(b){b=b||{},b.datumTokenizer&&b.queryTokenizer||a.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=b.datumTokenizer,this.queryTokenizer=b.queryTokenizer,this.reset()}function d(a){return a=b.filter(a,function(a){return!!a}),a=b.map(a,function(a){return a.toLowerCase()})}function e(){return{ids:[],children:{}}}function f(a){for(var b={},c=[],d=0,e=a.length;e>d;d++)b[a[d]]||(b[a[d]]=!0,c.push(a[d]));return c}function g(a,b){function c(a,b){return a-b}var d=0,e=0,f=[];a=a.sort(c),b=b.sort(c);for(var g=a.length,h=b.length;g>d&&h>e;)a[d]<b[e]?d++:a[d]>b[e]?e++:(f.push(a[d]),d++,e++);return f}return b.mixin(c.prototype,{bootstrap:function(a){this.datums=a.datums,this.trie=a.trie},add:function(a){var c=this;a=b.isArray(a)?a:[a],b.each(a,function(a){var f,g;f=c.datums.push(a)-1,g=d(c.datumTokenizer(a)),b.each(g,function(a){var b,d,g;for(b=c.trie,d=a.split("");g=d.shift();)b=b.children[g]||(b.children[g]=e()),b.ids.push(f)})})},get:function(a){var c,e,h=this;return c=d(this.queryTokenizer(a)),b.each(c,function(a){var b,c,d,f;if(e&&0===e.length)return!1;for(b=h.trie,c=a.split("");b&&(d=c.shift());)b=b.children[d];return b&&0===c.length?(f=b.ids.slice(0),void(e=e?g(e,f):f)):(e=[],!1)}),e?b.map(f(e),function(a){return h.datums[a]}):[]},reset:function(){this.datums=[],this.trie=e()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),c}(),i=function(){"use strict";function d(a){return a.local||null}function e(d){var e,f;return f={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(e=d.prefetch||null)&&(e=b.isString(e)?{url:e}:e,e=b.mixin(f,e),e.thumbprint=c+e.thumbprint,e.ajax.type=e.ajax.type||"GET",e.ajax.dataType=e.ajax.dataType||"json",!e.url&&a.error("prefetch requires url to be set")),e}function f(c){function d(a){return function(c){return b.debounce(c,a)}}function e(a){return function(c){return b.throttle(c,a)}}var f,g;return g={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(f=c.remote||null)&&(f=b.isString(f)?{url:f}:f,f=b.mixin(g,f),f.rateLimiter=/^throttle$/i.test(f.rateLimitBy)?e(f.rateLimitWait):d(f.rateLimitWait),f.ajax.type=f.ajax.type||"GET",f.ajax.dataType=f.ajax.dataType||"json",delete f.rateLimitBy,delete f.rateLimitWait,!f.url&&a.error("remote requires url to be set")),f}return{local:d,prefetch:e,remote:f}}();!function(c){"use strict";function e(b){b&&(b.local||b.prefetch||b.remote)||a.error("one of local, prefetch, or remote is required"),this.limit=b.limit||5,this.sorter=j(b.sorter),this.dupDetector=b.dupDetector||k,this.local=i.local(b),this.prefetch=i.prefetch(b),this.remote=i.remote(b),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new h({datumTokenizer:b.datumTokenizer,queryTokenizer:b.queryTokenizer}),this.storage=this.cacheKey?new f(this.cacheKey):null}function j(a){function c(b){return b.sort(a)}function d(a){return a}return b.isFunction(a)?c:d}function k(){return!1}var l,m;return l=c.Bloodhound,m={data:"data",protocol:"protocol",thumbprint:"thumbprint"},c.Bloodhound=e,e.noConflict=function(){return c.Bloodhound=l,e},e.tokenizers=d,b.mixin(e.prototype,{_loadPrefetch:function(b){function c(a){f.clear(),f.add(b.filter?b.filter(a):a),f._saveToStorage(f.index.serialize(),b.thumbprint,b.ttl)}var d,e,f=this;return(d=this._readFromStorage(b.thumbprint))?(this.index.bootstrap(d),e=a.Deferred().resolve()):e=a.ajax(b.url,b.ajax).done(c),e},_getFromRemote:function(a,b){function c(a,c){b(a?[]:f.remote.filter?f.remote.filter(c):c)}var d,e,f=this;if(this.transport)return a=a||"",e=encodeURIComponent(a),d=this.remote.replace?this.remote.replace(this.remote.url,a):this.remote.url.replace(this.remote.wildcard,e),this.transport.get(d,this.remote.ajax,c)},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()},_saveToStorage:function(a,b,c){this.storage&&(this.storage.set(m.data,a,c),this.storage.set(m.protocol,location.protocol,c),this.storage.set(m.thumbprint,b,c))},_readFromStorage:function(a){var b,c={};return this.storage&&(c.data=this.storage.get(m.data),c.protocol=this.storage.get(m.protocol),c.thumbprint=this.storage.get(m.thumbprint)),b=c.thumbprint!==a||c.protocol!==location.protocol,c.data&&!b?c.data:null},_initialize:function(){function c(){e.add(b.isFunction(f)?f():f)}var d,e=this,f=this.local;return d=this.prefetch?this._loadPrefetch(this.prefetch):a.Deferred().resolve(),f&&d.done(c),this.transport=this.remote?new g(this.remote):null,this.initPromise=d.promise()},initialize:function(a){return!this.initPromise||a?this._initialize():this.initPromise},add:function(a){this.index.add(a)},get:function(a,c){function d(a){var d=f.slice(0);b.each(a,function(a){var c;return c=b.some(d,function(b){return e.dupDetector(a,b)}),!c&&d.push(a),d.length<e.limit}),c&&c(e.sorter(d))}var e=this,f=[],g=!1;f=this.index.get(a),f=this.sorter(f).slice(0,this.limit),f.length<this.limit?g=this._getFromRemote(a,d):this._cancelLastRemoteRequest(),g||(f.length>0||!this.transport)&&c&&c(f)},clear:function(){this.index.reset()},clearPrefetchCache:function(){this.storage&&this.storage.clear()},clearRemoteCache:function(){this.transport&&g.resetCache()},ttAdapter:function(){return b.bind(this.get,this)}}),e}(this);var j=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}}(),k=function(){"use strict";var a={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return b.isMsie()&&b.mixin(a.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),b.isMsie()&&b.isMsie()<=7&&b.mixin(a.input,{marginTop:"-1px"}),a}(),l=function(){"use strict";function c(b){b&&b.el||a.error("EventBus initialized without el"),this.$el=a(b.el)}var d="typeahead:";return b.mixin(c.prototype,{trigger:function(a){var b=[].slice.call(arguments,1);this.$el.trigger(d+a,b)}}),c}(),m=function(){"use strict";function a(a,b,c,d){var e;if(!c)return this;for(b=b.split(i),c=d?h(c,d):c,this._callbacks=this._callbacks||{};e=b.shift();)this._callbacks[e]=this._callbacks[e]||{sync:[],async:[]},this._callbacks[e][a].push(c);return this}function b(b,c,d){return a.call(this,"async",b,c,d)}function c(b,c,d){return a.call(this,"sync",b,c,d)}function d(a){var b;if(!this._callbacks)return this;for(a=a.split(i);b=a.shift();)delete this._callbacks[b];return this}function e(a){var b,c,d,e,g;if(!this._callbacks)return this;for(a=a.split(i),d=[].slice.call(arguments,1);(b=a.shift())&&(c=this._callbacks[b]);)e=f(c.sync,this,[b].concat(d)),g=f(c.async,this,[b].concat(d)),e()&&j(g);return this}function f(a,b,c){function d(){for(var d,e=0,f=a.length;!d&&f>e;e+=1)d=a[e].apply(b,c)===!1;return!d}return d}function g(){var a;return a=window.setImmediate?function(a){setImmediate(function(){a()})}:function(a){setTimeout(function(){a()},0)}}function h(a,b){return a.bind?a.bind(b):function(){a.apply(b,[].slice.call(arguments,0))}}var i=/\s+/,j=g();return{onSync:c,onAsync:b,off:d,trigger:e}}(),n=function(a){"use strict";function c(a,c,d){for(var e,f=[],g=0,h=a.length;h>g;g++)f.push(b.escapeRegExChars(a[g]));return e=d?"\\b("+f.join("|")+")\\b":"("+f.join("|")+")",c?new RegExp(e):new RegExp(e,"i")}var d={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(e){function f(b){var c,d,f;return(c=h.exec(b.data))&&(f=a.createElement(e.tagName),e.className&&(f.className=e.className),d=b.splitText(c.index),d.splitText(c[0].length),f.appendChild(d.cloneNode(!0)),b.parentNode.replaceChild(f,d)),!!c}function g(a,b){for(var c,d=3,e=0;e<a.childNodes.length;e++)c=a.childNodes[e],c.nodeType===d?e+=b(c)?1:0:g(c,b)}var h;e=b.mixin({},d,e),e.node&&e.pattern&&(e.pattern=b.isArray(e.pattern)?e.pattern:[e.pattern],h=c(e.pattern,e.caseSensitive,e.wordsOnly),g(e.node,f))}}(window.document),o=function(){"use strict";function c(c){var e,f,h,i,j=this;c=c||{},c.input||a.error("input is missing"),e=b.bind(this._onBlur,this),f=b.bind(this._onFocus,this),h=b.bind(this._onKeydown,this),i=b.bind(this._onInput,this),this.$hint=a(c.hint),this.$input=a(c.input).on("blur.tt",e).on("focus.tt",f).on("keydown.tt",h),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=b.noop),b.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(a){g[a.which||a.keyCode]||b.defer(b.bind(j._onInput,j,a))}):this.$input.on("input.tt",i),this.query=this.$input.val(),this.$overflowHelper=d(this.$input)}function d(b){return a('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:b.css("font-family"),fontSize:b.css("font-size"),fontStyle:b.css("font-style"),fontVariant:b.css("font-variant"),fontWeight:b.css("font-weight"),wordSpacing:b.css("word-spacing"),letterSpacing:b.css("letter-spacing"),textIndent:b.css("text-indent"),textRendering:b.css("text-rendering"),textTransform:b.css("text-transform")}).insertAfter(b)}function e(a,b){return c.normalizeQuery(a)===c.normalizeQuery(b)}function f(a){return a.altKey||a.ctrlKey||a.metaKey||a.shiftKey}var g;return g={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},c.normalizeQuery=function(a){return(a||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},b.mixin(c.prototype,m,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(a){var b=g[a.which||a.keyCode];this._managePreventDefault(b,a),b&&this._shouldTrigger(b,a)&&this.trigger(b+"Keyed",a)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(a,b){var c,d,e;switch(a){case"tab":d=this.getHint(),e=this.getInputValue(),c=d&&d!==e&&!f(b);break;case"up":case"down":c=!f(b);break;default:c=!1}c&&b.preventDefault()},_shouldTrigger:function(a,b){var c;switch(a){case"tab":c=!f(b);break;default:c=!0}return c},_checkInputValue:function(){var a,b,c;a=this.getInputValue(),b=e(a,this.query),c=b?this.query.length!==a.length:!1,this.query=a,b?c&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(a){this.query=a},getInputValue:function(){return this.$input.val()},setInputValue:function(a,b){this.$input.val(a),b?this.clearHint():this._checkInputValue()},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(a){this.$hint.val(a)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var a,b,c,d;a=this.getInputValue(),b=this.getHint(),c=a!==b&&0===b.indexOf(a),d=""!==a&&c&&!this.hasOverflow(),!d&&this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var a=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=a},isCursorAtEnd:function(){var a,c,d;return a=this.$input.val().length,c=this.$input[0].selectionStart,b.isNumber(c)?c===a:document.selection?(d=document.selection.createRange(),d.moveStart("character",-a),a===d.text.length):!0},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),c}(),p=function(){"use strict";function c(c){c=c||{},c.templates=c.templates||{},c.source||a.error("missing source"),c.name&&!f(c.name)&&a.error("invalid dataset name: "+c.name),this.query=null,this.highlight=!!c.highlight,this.name=c.name||b.getUniqueId(),this.source=c.source,this.displayFn=d(c.display||c.displayKey),this.templates=e(c.templates,this.displayFn),this.$el=a(j.dataset.replace("%CLASS%",this.name))}function d(a){function c(b){return b[a]}return a=a||"value",b.isFunction(a)?a:c}function e(a,c){function d(a){return"<p>"+c(a)+"</p>"}return{empty:a.empty&&b.templatify(a.empty),header:a.header&&b.templatify(a.header),footer:a.footer&&b.templatify(a.footer),suggestion:a.suggestion||d}}function f(a){return/^[_a-zA-Z0-9-]+$/.test(a)}var g="ttDataset",h="ttValue",i="ttDatum";return c.extractDatasetName=function(b){return a(b).data(g)},c.extractValue=function(b){return a(b).data(h)},c.extractDatum=function(b){return a(b).data(i)},b.mixin(c.prototype,m,{_render:function(c,d){function e(){return p.templates.empty({query:c,isEmpty:!0})}function f(){function e(b){var c;return c=a(j.suggestion).append(p.templates.suggestion(b)).data(g,p.name).data(h,p.displayFn(b)).data(i,b),c.children().each(function(){a(this).css(k.suggestionChild)}),c}var f,l;return f=a(j.suggestions).css(k.suggestions),l=b.map(d,e),f.append.apply(f,l),p.highlight&&n({className:"tt-highlight",node:f[0],pattern:c}),f}function l(){return p.templates.header({query:c,isEmpty:!o})}function m(){return p.templates.footer({query:c,isEmpty:!o})}if(this.$el){var o,p=this;this.$el.empty(),o=d&&d.length,!o&&this.templates.empty?this.$el.html(e()).prepend(p.templates.header?l():null).append(p.templates.footer?m():null):o&&this.$el.html(f()).prepend(p.templates.header?l():null).append(p.templates.footer?m():null),this.trigger("rendered")}},getRoot:function(){return this.$el},update:function(a){function b(b){c.canceled||a!==c.query||c._render(a,b)}var c=this;this.query=a,this.canceled=!1,this.source(a,b)},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),c}(),q=function(){"use strict";function c(c){var e,f,g,h=this;c=c||{},c.menu||a.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=b.map(c.datasets,d),e=b.bind(this._onSuggestionClick,this),f=b.bind(this._onSuggestionMouseEnter,this),g=b.bind(this._onSuggestionMouseLeave,this),this.$menu=a(c.menu).on("click.tt",".tt-suggestion",e).on("mouseenter.tt",".tt-suggestion",f).on("mouseleave.tt",".tt-suggestion",g),b.each(this.datasets,function(a){h.$menu.append(a.getRoot()),a.onSync("rendered",h._onRendered,h)})}function d(a){return new p(a)}return b.mixin(c.prototype,m,{_onSuggestionClick:function(b){this.trigger("suggestionClicked",a(b.currentTarget))},_onSuggestionMouseEnter:function(b){this._removeCursor(),this._setCursor(a(b.currentTarget),!0)},_onSuggestionMouseLeave:function(){this._removeCursor()},_onRendered:function(){function a(a){return a.isEmpty()}this.isEmpty=b.every(this.datasets,a),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")},_getCursor:function(){return this.$menu.find(".tt-cursor").first()},_setCursor:function(a,b){a.first().addClass("tt-cursor"),!b&&this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function(a){var b,c,d,e;if(this.isOpen){if(c=this._getCursor(),b=this._getSuggestions(),this._removeCursor(),d=b.index(c)+a,d=(d+1)%(b.length+1)-1,-1===d)return void this.trigger("cursorRemoved");-1>d&&(d=b.length-1),this._setCursor(e=b.eq(d)),this._ensureVisible(e)}},_ensureVisible:function(a){var b,c,d,e;b=a.position().top,c=b+a.outerHeight(!0),d=this.$menu.scrollTop(),e=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),0>b?this.$menu.scrollTop(d+b):c>e&&this.$menu.scrollTop(d+(c-e))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(a){this.$menu.css("ltr"===a?k.ltr:k.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(a){var b=null;return a.length&&(b={raw:p.extractDatum(a),value:p.extractValue(a),datasetName:p.extractDatasetName(a)}),b},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(a){function c(b){b.update(a)}b.each(this.datasets,c)},empty:function(){function a(a){a.clear()}b.each(this.datasets,a),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function a(a){a.destroy()}this.$menu.off(".tt"),this.$menu=null,b.each(this.datasets,a)}}),c}(),r=function(){"use strict";function c(c){var e,f,g;c=c||{},c.input||a.error("missing input"),this.isActivated=!1,this.autoselect=!!c.autoselect,this.minLength=b.isNumber(c.minLength)?c.minLength:1,this.$node=d(c.input,c.withHint),e=this.$node.find(".tt-dropdown-menu"),f=this.$node.find(".tt-input"),g=this.$node.find(".tt-hint"),f.on("blur.tt",function(a){var c,d,g;c=document.activeElement,d=e.is(c),g=e.has(c).length>0,b.isMsie()&&(d||g)&&(a.preventDefault(),a.stopImmediatePropagation(),b.defer(function(){f.focus()}))}),e.on("mousedown.tt",function(a){a.preventDefault()}),this.eventBus=c.eventBus||new l({el:f}),this.dropdown=new q({menu:e,datasets:c.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new o({input:f,hint:g}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function d(b,c){var d,f,h,i;d=a(b),f=a(j.wrapper).css(k.wrapper),h=a(j.dropdown).css(k.dropdown),i=d.clone().css(k.hint).css(e(d)),i.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),d.data(g,{dir:d.attr("dir"),autocomplete:d.attr("autocomplete"),spellcheck:d.attr("spellcheck"),style:d.attr("style")}),d.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(c?k.input:k.inputWithNoHint);try{!d.attr("dir")&&d.attr("dir","auto")}catch(l){}return d.wrap(f).parent().prepend(c?i:null).append(h)}function e(a){return{backgroundAttachment:a.css("background-attachment"),backgroundClip:a.css("background-clip"),backgroundColor:a.css("background-color"),backgroundImage:a.css("background-image"),backgroundOrigin:a.css("background-origin"),backgroundPosition:a.css("background-position"),backgroundRepeat:a.css("background-repeat"),backgroundSize:a.css("background-size")}}function f(a){var c=a.find(".tt-input");b.each(c.data(g),function(a,d){b.isUndefined(a)?c.removeAttr(d):c.attr(d,a)}),c.detach().removeData(g).removeClass("tt-input").insertAfter(a),a.remove()}var g="ttAttrs";return b.mixin(c.prototype,{_onSuggestionClicked:function(a,b){var c;(c=this.dropdown.getDatumForSuggestion(b))&&this._select(c)},_onCursorMoved:function(){var a=this.dropdown.getDatumForCursor();this.input.setInputValue(a.value,!0),this.eventBus.trigger("cursorchanged",a.raw,a.datasetName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function(){this._updateHint()},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function(a,b){var c,d;c=this.dropdown.getDatumForCursor(),d=this.dropdown.getDatumForTopSuggestion(),c?(this._select(c),b.preventDefault()):this.autoselect&&d&&(this._select(d),b.preventDefault())},_onTabKeyed:function(a,b){var c;(c=this.dropdown.getDatumForCursor())?(this._select(c),b.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var a=this.input.getQuery();this.dropdown.isEmpty&&a.length>=this.minLength?this.dropdown.update(a):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(a,b){this.input.clearHintIfInvalid(),b.length>=this.minLength?this.dropdown.update(b):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var a;this.dir!==(a=this.input.getLanguageDirection())&&(this.dir=a,this.$node.css("direction",a),this.dropdown.setLanguageDirection(a))},_updateHint:function(){var a,c,d,e,f,g;a=this.dropdown.getDatumForTopSuggestion(),a&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(c=this.input.getInputValue(),d=o.normalizeQuery(c),e=b.escapeRegExChars(d),f=new RegExp("^(?:"+e+")(.+$)","i"),g=f.exec(a.value),g?this.input.setHint(c+g[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(a){var b,c,d,e;b=this.input.getHint(),c=this.input.getQuery(),d=a||this.input.isCursorAtEnd(),b&&c!==b&&d&&(e=this.dropdown.getDatumForTopSuggestion(),e&&this.input.setInputValue(e.value),this.eventBus.trigger("autocompleted",e.raw,e.datasetName))},_select:function(a){this.input.setQuery(a.value),this.input.setInputValue(a.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",a.raw,a.datasetName),this.dropdown.close(),b.defer(b.bind(this.dropdown.empty,this.dropdown))},open:function(){this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(a){a=b.toStr(a),this.isActivated?this.input.setInputValue(a):(this.input.setQuery(a),this.input.setInputValue(a,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),f(this.$node),this.$node=null}}),c}();!function(){"use strict";var c,d,e;c=a.fn.typeahead,d="ttTypeahead",e={initialize:function(c,e){function f(){var f,g,h=a(this);b.each(e,function(a){a.highlight=!!c.highlight}),g=new r({input:h,eventBus:f=new l({el:h}),withHint:b.isUndefined(c.hint)?!0:!!c.hint,minLength:c.minLength,autoselect:c.autoselect,datasets:e}),h.data(d,g)}return e=b.isArray(e)?e:[].slice.call(arguments,1),c=c||{},this.each(f)},open:function(){function b(){var b,c=a(this);(b=c.data(d))&&b.open()}return this.each(b)},close:function(){function b(){var b,c=a(this);(b=c.data(d))&&b.close()}return this.each(b)},val:function(b){function c(){var c,e=a(this);(c=e.data(d))&&c.setVal(b)}function e(a){var b,c;return(b=a.data(d))&&(c=b.getVal()),c}return arguments.length?this.each(c):e(this.first())},destroy:function(){function b(){var b,c=a(this);(b=c.data(d))&&(b.destroy(),c.removeData(d))}return this.each(b)}},a.fn.typeahead=function(b){var c;return e[b]&&"initialize"!==b?(c=this.filter(function(){return!!a(this).data(d)}),e[b].apply(c,[].slice.call(arguments,1))):e.initialize.apply(this,arguments)},a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this}}()}(window.jQuery);;// This Javascript file contains functions required for the site search function with type-ahead
// The search.js needs typeahead.bundle.min.js to function.
// It also needs some data to function. It is for now stored in data/searchdata.js as global variables.

var s,search = {

  settings : {
    start : 0,
    searchParentWidthPercent : "",
    backgroundColor : "",
    maximized : "",
    animating : "",
    animSpeed : "",
    searchIsRunning : false,
    hitcounter : 0,
    hasURL :  false,
    urlParams : undefined,
    initialWidth: ""
  },

  categoryConfig : [{
    hint: true,
    highlight: true,
    minLength: 3,
    limit: 10
   }],

  promotions : "",
  typeaheads : {},

  init : function(){
    s = this.settings;

    if (typeof enonicSearchData === 'undefined') {
      //console.log("Could not find searchdata for autocomplete and typeahead. Search will have less functionality on this page.");
      return;
    } else if (enonicSearchData === null) {
      //console.log("Search data was empty. Typeahead and autocomplete will not work.");
      return;
    }

    search.promotions = enonicSearchData.search.promotions !== undefined ? enonicSearchData.search.promotions.promotion :  undefined;

    if(enonicSearchData.search.autocomplete !== undefined && enonicSearchData.search.autocomplete.anbefalt !== undefined){
       search.typeaheads.anbefalte = enonicSearchData.search.autocomplete.anbefalt;
    }

    if(enonicSearchData.search.typeahead !== undefined && enonicSearchData.search.typeahead.direkte !== undefined){
       search.typeaheads.direkte = enonicSearchData.search.typeahead.direkte;
    }

    //typeaheads['anbefalte'] = anbefalte;
    // Make search in menu header visible
    search.activateSearch();
    // Perform the search
    search.performSearch();
  },
  performSearch : function(){
    // Perform search only on the search results page (add other pages if necessary)
    if ($('#main_search').length > 0 ){
      //Get the search term from the URL
      s.urlParams = this.getQuery();
      s.searchIsRunning=false;

      s.start = 0; // Start from the first group of search results from Google

      //If the start parameter is something else than nothing, get the new starting point for the up-coming Google search
      if (s.urlParams.start!==undefined && s.urlParams.start.length > 0 ) {
        s.start = s.urlParams.start;
      }

      // If there is a search term to use, perform the search
      if (s.urlParams.q!==undefined && s.urlParams.q.length > 0 ) {
        var strQuery =  search.stripChars(s.urlParams.q);
        $("form.stb-form-inline input.searchbox").val(strQuery);
        search.getPromotions();
        search.searchQuery(strQuery, s.start);
      }
    }
  },
  activateSearch : function () {
    $('#desktop-menu ul.nav li.search').show();

    // Prepare for type-ahead
    if(search.typeaheads !== ""){
      search.initTypeahead();
    }
    // The search field on desktop must be made extendable upon click
    search.initExtendedSearch();

  },
  initTypeahead : function(){

    //Make sure to initiate anbefalte søkeord first
    if("anbefalte" in search.typeaheads){
      this.createDatasets("anbefalte");
    }
    if("direkte" in search.typeaheads){
      this.createDatasets("direkte");
    }

    // Call  the typeahead with the category config
    $.fn.typeahead.apply( $('.searchbox.typeahead'), search.categoryConfig);

    $('input.searchbox').bind('typeahead:selected', function(event,data) {
      //Check whether Google Analytics is initialized, and if so, send event logging there
      if( typeof(ga) === 'function' ) {
        ga('send', 'event', 'search', 'selected', 'Search for: '+data.name);
      }
      if (data.url) {
        //Go to the defined URL for the current search keyword
        s.hasURL = true;
        window.location.href = data.url;
      }
      $('.typeahead').typeahead('close');
    });

    // Call checkSearch when hitting Enter while in the input area

  },
  createDatasets : function (index){

    // Make use of the Bloodhound suggestion engine in order to use an array of datums(js objects)
    var category =  new Bloodhound( {
      // A function with the signature (datum) that transforms a datum into an array of string tokens.
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('query'),
      // A function with the signature (query) that transforms a query into an array of string tokens.
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // An array of datums
      local: this.typeaheads[index]
    });

    category.initialize();

    var catObj = {
      name : index,
      displayKey: 'name',
      source: category.ttAdapter(),
      templates: {
      }
    };
    this.categoryConfig.push(catObj);
  },
  // Remove certain special characters from search, in order to not break the Google search URL
  checkSearch : function (query) {
    //absURL is defined elsewhere so not initialized here again
    window.location = $('input.searchbox.tt-input.tt-desktop').attr('data-search-url')+"?action=search&q=" + search.stripChars(query);  // link to the search result page
  },
  initExtendedSearch : function() {

    // Save the state of the search box. The search box is not in focus by default.
    s.maximized=false;

    // Save the animation state, whether the element is being animated or not.
    s.animating=false;

    // Animation speed
    s.animSpeed = 800;

    // Set initial width
    s.initialWidth =  $('.navbar-nav .twitter-typeahead').css('width');

    // Close search if Escape button is pressed
    $("input.searchbox").keydown(function(event){
      if(event.which === 27){
        $(this).blur();
      }
    });

    // Close search if close icon is clicked
    $('.navbar-nav .search .remove').click(function(){
      search.minimizeSearch();
    });

   $('.navbar-nav .typeahead.tt-input').blur(function(e) {
       e.preventDefault();
       if(s.maximized && !s.animating && $('.tt-desktop.typeahead.tt-input').typeahead('val').trim().length === 0) {
         search.minimizeSearch();
       }
   });
   $('.navbar-nav .typeahead.tt-hint').focus(function(e) {
	   e.preventDefault();
	   $('input.searchbox.tt-input.tt-desktop').focus();
   });
    // If the search icon or the input element itself gets clicked, do not pass the click event to the document.
   $('.navbar-nav .typeahead.tt-input').focus(function(e) {
       e.preventDefault();
       // If it's currently minimized and not animating, maximize it.
       if (!s.maximized && !s.animating) {
         search.maximizeSearch();
       }
       // This will prevent the minimizeSearch from being called too early.
    });

    $("input.searchbox").keydown(function(event){
	  if(!s.hasURL){
		if(event.which === 13 && this.value.trim()){
		   var searchVal = $('.tt-desktop.typeahead.tt-input').typeahead('val').trim();
		   if(/\d{11}/.test(searchVal) || /\d{10}/.test(searchVal)){
			   search.minimizeSearch();
			   setTimeout(function(){
					 $('li.login>a').click();
					 var field =  $('#start-login-form input');
					 field.val(searchVal);
					 $('#start-login-form').data('bootstrapValidator').updateStatus(field, 'NOT_VALIDATED').validateField(field);
					 $('#start-login-form').submit();
			  }, s.animSpeed);
		   }else{
			   search.checkSearch( this.value );
		   }
		   return false;
		}
	  }
	});

	$('.search-icon').on('click',function(event){
	  event.preventDefault();
	  if($(event.target).closest('form').is('#searchMobile')){
		  if($('.tt-mobile .typeahead.tt-input').typeahead('val').trim()){
		   search.checkSearch($('.tt-mobile .typeahead.tt-input').typeahead('val'));
		  }
	  }else{
		var searchVal = $('.tt-desktop.typeahead.tt-input').typeahead('val').trim();
		if(/\d{11}/.test(searchVal) || /\d{10}/.test(searchVal)){
			if(s.maximized){
             search.minimizeSearch();
			 setTimeout(function(){$('li.login>a').click();
					var field =  $('#start-login-form input');
					field.val(searchVal);
					$('#start-login-form').data('bootstrapValidator').updateStatus(field, 'NOT_VALIDATED').validateField(field);
					$('#start-login-form').submit();
			 }, s.animSpeed);
			}else{
			  setTimeout(function(){ $('input.searchbox.tt-input.tt-desktop').focus(); }, s.animSpeed);
			}
		}else{
			if(s.maximized && searchVal){
			  search.checkSearch(searchVal);
			}else if(s.maximized && !s.animating){
			   $('.navbar-nav .typeahead.tt-input').blur();
			}else if(!s.maximized && !s.animating){
               $('.navbar-nav .typeahead.tt-input').focus();
            }
		}
	  }
	});

	// Call checkSearch when clicking the submit button
	$(".searchcontainer .stb-form-inline button[type=submit]").click(function(event) {
	  //alert($('input#main_search').val());
	  search.checkSearch($('input#main_search').val());
	  return false;

	});
  },
  minimizeSearch : function(){
	if(s.maximized && !s.animating){
		// Save the animating state, and reset it once the animations complete
		s.animating = true;
		$('.navbar-nav .typeahead').prop('disabled', true);

		// Hide the remove icon
		$('.navbar-nav li.search .remove').toggle();

		// Reset the searchParent to the original width. The text box will fit on its own as its width is 100 %.
		$('.navbar-nav > li.search').animate({width: s.searchParentWidthPercent+'%'},  s.animSpeed);
		$('.navbar-nav .typeahead').animate({backgroundColor: s.backgroundColor,color:"#fff"},  s.animSpeed);

		// Fade out the white search icon
		$('.navbar-nav .search-icon .search').fadeOut( s.animSpeed/4);

		// After half the animation time has passed, fade in the inverted icon
		setTimeout(function(){
		  $('.navbar-nav .search-icon .search').removeClass("charcoal").addClass("white").fadeIn( s.animSpeed/2);
		}, s.animSpeed/4);

		$('.navbar-nav .search-icon').animate({backgroundColor: s.backgroundColor}, s.animSpeed);

		// Reset all the states after the animations complete
		setTimeout(function(){
		  // Show the menu
		  $('.navbar-nav > li.group').toggle();

		  // Reset the span container to initial value
		  $('.navbar-nav .twitter-typeahead').css('width',s.initialWidth);
      // Save the new state
      s.maximized = false;
      s.animating = false;
      $('.navbar-nav .typeahead').prop('disabled', false);
		},  s.animSpeed);
    }
  },
  maximizeSearch : function (){
   if(!s.maximized && !s.animating){
    // Save the animation state, and reset it once the animations complete
    s.animating = true;
		s.maximized = true;

		//Hide overlay when search is focus
		$('.shadow-overlay').hide();

		// Store the current width
		var searchParentWidth = $('.navbar-nav > li.search').css('width');
		s.backgroundColor = $('.navbar-nav .typeahead').css('background-color');
		// Since the width is given in pixels instead of percentage, we need to calculate it ourselves
		s.searchParentWidthPercent = Math.round(100*(parseInt(searchParentWidth) / $('.navbar-nav').width()));

		// Hide the menu
		$('.navbar-nav > li.group').toggle();

		// Expand the search parent to take 95 % of the available width
		$('.navbar-nav > li.search').css('width','95%');

		// Fade out the white search icon
		$('.navbar-nav .search-icon .search').fadeOut( s.animSpeed/4);

		// After fading out icon, fade in inverted (charcoal) icon with new background
		setTimeout(function(){
		  $('.navbar-nav .search-icon .search').removeClass("white").fadeIn(s.animSpeed/2);
		}, s.animSpeed/4);

		$('.navbar-nav .search-icon').animate({backgroundColor:'"fff'}, s.animSpeed);

		// Animate span parent container to 100 %
		$('.navbar-nav .typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"}, s.animSpeed);

		// Animate the text box
		$('.navbar-nav .twitter-typeahead').animate({width:'100%',backgroundColor:'"fff',color:"#000"}, s.animSpeed);

		// Show the "Close search" icon
		setTimeout(function(){
		  $('.navbar-nav li.search .remove').toggle();
      s.animating = false;
    }, s.animSpeed);
    }
  },
  getQuery : function (){
    // Get the query from the location URL
    var get = [];
    var decodeurl = decodeURI(location.search);
    decodeurl.replace('?', '').split('&').forEach(function (val) {
      var split = val.split("=", 2);
      get[split[0]] = split[1];
    });
    return get;
  },
  searchQuery : function ( inputQuery, start ) {
    // loader image
    $(".searchresults").append("<row><div class='col-12' style='text-align: center;'><img id='loadingimage' src='./_public/theme-storebrand.ny/images/ajax-loader.gif'></div></div>");
    s.searchIsRunning = true;

    var query = encodeURI(inputQuery); // Used because of the yahoo api. Replace with Storebrand proxy later.
    //Internet explorer ajax fix
    jQuery.support.cors = true;
    $.ajax({
      type: "GET",
      url: "https://www.storebrand.no/site/stb.nsf/domproxs?OpenAgent&url=https://www.google.com/cse?cx=005330830390972510741%3A_ylpvikmny8&client=google-csbe&gl=no&start="+start+"&num=20&output=xml_no_dtd&ie=utf8&oe=latin1&q="+query,
      dataType: "xml",
      success: search.xmlParser,
      error: function(error){
        //console.log(JSON.stringify(error));
      }
    });
  },
  getPromotions : function () {
    // Populate the promotion area
    if (s.start===0 && search.promotions !== undefined){
      search.promotions.forEach(function (promotionObj){
        if (promotionObj.query.match(new RegExp("\\b"+s.urlParams.q+"\\b",'gi'))){
          $(".searchresults").append('<div class="promotion' + '"><h3>'+promotionObj.header + '<' + '/h3><' + 'p class="description">' + promotionObj.text + '</p' + ' ><p class="showurl"' + '><a href="' + promotionObj.url + '">' + promotionObj.name + '<' + '/a><' + '/p><' + '/div>');
        }
      });
    }
  },
  xmlParser : function (xml) {
    $("#loadingimage").remove();
    s.searchIsRunning = false;
    var noresult = false;

    // If this is the first set of results to be parsed
    if(s.start===0){

      // Prepare the result summary for populating the status of the search result ( found or not)
      var resultSummary = '<div class="resultsummary row"><div class="col-sm-12"></div></div>';
      $(resultSummary).insertAfter($('.stb-form-inline #main_search.searchbox').closest('form').parent().parent());

      // Show search suggestions
      if($(xml).find("R").length===0 && $(xml).find("Spelling").length > 0){
        $(xml).find("Spelling").each(function() {
          var suggestedSpelling = $(this).find("Suggestion").attr("q");
          $(".resultsummary div").append('<div id="suggestion"' + '>Vi har f&aring; eller ingen treff p&aring; det s&oslash;keordet, men pr&oslash;v <a href="?action=search&q=' + suggestedSpelling + '">' + suggestedSpelling + '<' + '/a>.<' + '/div>');
          noresult= true;
        });
      }

      // If we don't get anything initially, show corresponding message
      if ($(xml).find("R").length===0 && $(xml).find("Spelling").length===0 ) {
        $(".resultsummary div").append('<div class="nogo"' + '>Fant ingen treff ved s&oslash;k etter <' + 'strong>'+ unescape($(xml).find("Q").text())+'<' + '/strong>.<' + '/div>');
        noresult=true;
      }

      // Store number of results
      s.hitcounter = parseInt($(xml).find("M").text());

      // Populate the result summary for the search result (search term and total number of results)
      if (!noresult) {
        $(".resultsummary div").append('<p>Ditt s&oslash;k etter &laquo;'+$(xml).find("Q").text()+'&raquo; gav '+( s.hitcounter>100?" mer enn 100 " :  s.hitcounter)+' treff.</p>');
      }
    }

    // Display the results
    if(!noresult) {
      search.displaySearchResult(xml);
    }
  },
  displaySearchResult : function (xml) {
    // Parse the results elements
    $(xml).find("R").each(function () {
      //Get the search result item's string and sanitize it
      var strippedS = $(this).find("S").text();
      var stripRE = new RegExp("<br>", "g");
      strippedS = strippedS.replace(stripRE, "");

      //Get the search result item's page URL and shorten it
      var showU = $(this).find("U").text();
      var strippedU = showU;
      var stripU = new RegExp("http://www.", "g");
      strippedU = strippedU.replace(stripU, "");
      stripU = new RegExp("https://www.", "g");
      strippedU = strippedU.replace(stripU, "");
      var shortenedU = "";
      if(strippedU.length > 85) {
        shortenedU =  strippedU.substring(0,35) + "..." + strippedU.substring(strippedU.length-40, strippedU.length);
      } else {
        shortenedU = strippedU;
      }
      //get the index of the last / in the url
      var lastSlashIndex = shortenedU.lastIndexOf("/");
      //if the last / was at the end of the URL, for example in storebrand.no/bank/
      if( lastSlashIndex+1 === shortenedU.length ) {
        //remove the last /
        shortenedU = shortenedU.substr( 0, shortenedU.length-1 );
        //now look for the new last /
        lastSlashIndex = shortenedU.lastIndexOf("/", lastSlashIndex);
      }
      //if no slash was found, reset it to 0
      if( lastSlashIndex === -1 ) {
        lastSlashIndex = 0;
      }
      //if there are more than 1 slash, then we want to add "/..." to the start of the short URL
      var numOfSlashes = (shortenedU.split("/").length - 1);
      shortenedU = decodeURI(unescape(( numOfSlashes > 1?"/...":"" ) + shortenedU.substr( lastSlashIndex )));

      //Setup any special classes to identify result type
      var linkDecoration = "";
      if (strippedU.indexOf(".pdf") > 0) {
        linkDecoration = ' class="pdf_document" ';
      }

      //Prepare and display the result markup
      var resultMarkup = '<div><h4><a ' + linkDecoration + ' href="'  + $(this).find("U").text() + '">' + $(this).find("T").text() + '<' + '/a><' + '/h1><' + 'p class="description">' + strippedS + '</p' + ' ><p class="showurl"' + '><a href="' + showU + '">' + shortenedU + '<' + '/a><' + '/p><' + '/div>';
      $(".searchresults").append(resultMarkup);
    });
  },
  scroll : function(){
   if ($('#main_search').length > 0 ){
      // Prevent the scroll from searching again while the search is still running, or if the search result limit has been reached
      if (s.searchIsRunning===true || (s.start+20)> s.hitcounter ) {
        return false;
      }

      // If the page has search query and the user has scrolled to the bottom of the page, load more search results
      if((s.urlParams.q!==undefined &&  s.urlParams.q.length>0) && $(window).scrollTop() + $(window).height() === $(document).height()) {
        // Show message after searching 40 items
        if(s.start>=40) {
          $(".searchresults").append("<row><div class='col-12' style='text-align: center;'> <p class='intro'>Kanskje du b&oslash;r pr&oslash;ve et <a href='#'> annet s&oslash;keord</a>?</p></div></div>");
          s.hitcounter = 0;
          return false;
        }

        //Start from the next 20 search results
        s.start =  s.start + 20;
        search.searchQuery( s.urlParams.q , s.start);
      }
   }
  },
  stripChars: function(query){
    var reg1 = new RegExp("\"","g");
    var reg2 = new RegExp("'", "g");
    var reg3 = new RegExp("<", "g");
    var reg4 = new RegExp(">", "g");
    query = query.replace(reg1, "");
    query = query.replace(reg2, "");
    query = query.replace(reg3, "");
    query = query.replace(reg4, "");

    return query;
  }
};

$(document).ready(function(){
  search.init();
});

//Detect page scrolling to load new search results
$(document).scroll(function(event){
  search.scroll();
});;
/*
 * Common functions for general use
 /*

 /* ***** SCROLL TO ***** */
function scrollTo(id,more){
  $('html,body').animate({scrollTop: $('#'+id).height()}, 800);
}

// Take a hash as input and smooth-scroll to the related target element
function scrollToHash(hash) {
  var target = $(hash);
  target = target.length ? target : $('[name=' + hash.slice(1) +']');
  if (target.length) {
    var scrollToPosition = target.offset().top;
    // Checking if the navigation header is fixed. If yes, set the scrollto position by subtracting the height of the fixed header
    if($('.navbar-fixed-top').css("display") === "block") {
      scrollToPosition -= $('.navbar-fixed-top').height();
    }
    $('html,body').animate({ scrollTop: scrollToPosition }, 1000);
    // Highlighting the clicked heading for a brief period to make it easier to see what just happened.
    $(target).animate({backgroundColor:"#FFF0F0"},1000);
    $(target).animate({backgroundColor:"#FFFFFF"},1000);
  }
}

/* ***** Verify National Identity Number ***** */
function verifyIDNumber(nr) {
  var pn = [];
  var v1 = [3,7,6,1,8,9,4,5,2,1,0];
  var v2 = [5,4,3,2,7,6,5,4,3,2,1];
  for(var i=0; i<nr.length; i++) {
    pn[i] = nr.charAt(i);
  }
  var k1=0;
  for(i=0; i<v1.length; i++) {
    k1 += pn[i]*v1[i];
  }
  var k2=0;
  for(i=0; i<v2.length; i++) {
    k2 += pn[i]*v2[i];
  }
  if (k1%11===0 && k2%11===0 ) {
    return true;
  } else {
    return false;
  }
}

/* ***** ENCODE AND DECODE BASE64 ***** */
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf(" chrome/") >= 0 || ua.indexOf(" firefox/") >= 0 || ua.indexOf(' gecko/') >= 0) {
  var StringMaker = function () {
    this.str = "";
    this.length = 0;
    this.append = function (s) {
      this.str += s;
      this.length += s.length;
    };
    this.prepend = function (s) {
      this.str = s + this.str;
      this.length += s.length;
    };
    this.toString = function () {
      return this.str;
    };
  };
} else {
  var StringMaker = function () {
    this.parts = [];
    this.length = 0;
    this.append = function (s) {
      this.parts.push(s);
      this.length += s.length;
    };
    this.prepend = function (s) {
      this.parts.unshift(s);
      this.length += s.length;
    };
    this.toString = function () {
      return this.parts.join('');
    };
  };
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function encode64(input) {
  var output = new StringMaker();
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output.append(keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4));
  }
  return output.toString();
}

function decode64(input) {
  var output = new StringMaker();
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    enc1 = keyStr.indexOf(input.charAt(i++));
    enc2 = keyStr.indexOf(input.charAt(i++));
    enc3 = keyStr.indexOf(input.charAt(i++));
    enc4 = keyStr.indexOf(input.charAt(i++));
    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;
    output.append(String.fromCharCode(chr1));
    if (enc3 !== 64) {
      output.append(String.fromCharCode(chr2));
    }
    if (enc4 !== 64) {
      output.append(String.fromCharCode(chr3));
    }
  }
  return output.toString();
}
/* ***** END OF BASE64 OPERATIONS ***** */

/* ***** GET URL PARAMETER BY NAME ****** */
function gup(name){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results === null ) {
    return "";
  } else {
    return results[1];
  }
}
/* ***** END OF GET URL PARAMETER BY NAME ***** */

/* ***** START TOGGLING "important messages" ***** */

function showImportantNotice() {
  $('.important-notice').each(function() {
    if (readCookie($(this).attr('id')) === null) {
      $(this).slideDown('slow');
    }
  });
}

function hideImportantNotice(element){
  var notice = $(element).closest('.important-notice');
  $(notice).slideUp('fast');
  createCookie($(notice).attr('id'),'true');
}

function showCommonMsg(element) {
  if(element !== undefined){
    $(element).parent().next('.commonmessage').slideToggle('fast');
  }else{
    $('.commonmessage').slideDown('fast');
  }
}

function hideCommonMsg(element) {
  $(element).closest('.commonmessage').slideUp('fast');
  createCookie('commonMessageRead','Yes');
}

function showErrorMsg() {
  $('.errormessage').slideDown('slow');
}

function hideErrorMsg(element) {
  $(element).closest('.errormessage').slideUp('slow');
  createCookie('errorMessageRead','Yes');
}
/* ***** END TOGGLING "important messages" ***** */

/* ***** CREATE COOKIE ***** */
function createCookie(n,value,days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires="+date.toGMTString();
  } else {
    expires = "";
  }
  dom = "; domain=.storebrand.no";
  document.cookie = n+"="+value+expires+"; path=/"+dom;
}

/* ***** READ COOKIE ***** */
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

/* ***** ERASE COOKIE ***** */
function eraseCookie(name) {
  createCookie(name,"",-1);
}

/* ***** Functionality for login ***** */
function loginFromMenu(fnr){
  var pid64= encode64(fnr);
  window.location.href="https://www2.storebrand.no/site/guiding.nsf/bankCheck?openpage&pid64="+pid64;
}
/* ***** End of functionality for login ***** */

/* ***** Function for opening chat ***** */
$.fn.extend({
  openChat: function(){
    var width = 650;
    var height = 450;
    var leftPosition = (screen.width/2)-(width/2);
    var topPosition = (screen.height/2)-(height/2);
    var url = $(this).attr("href");
    var parameters = 'toolbar=no,menubar=no,scrollbars=no,resizable=yes,width='+width+',height='+height+',left='+leftPosition+',top='+topPosition;
    window.open(url, '_blank', parameters);
  }
});
/* ***** End of Function for opening chat ***** */

/* ***** Function for initializing bootstrap validator ***** */
function initBootstrapValidator (formSelector,validatorFields,successcallback,errorcallback,live) {
  formSelector.bootstrapValidator({
    live: live === undefined ? 'disabled' : live,
    group: '.stb-form-group',
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: validatorFields
  }).on('success.form.bv',successcallback).on('err.form.fv',errorcallback);
}
/* ***** End of Function for initializing bootstrap validator ***** */


/* ***** Function for finding the bootstrap environment ***** */
function findBootstrapEnvironment() {
  var envs = ['xs', 'sm', 'md', 'lg'];

  $el = $('<div>');
  $el.appendTo($('body'));

  for (var i = envs.length - 1; i >= 0; i--) {
    var env = envs[i];

    $el.addClass('hidden-'+env);
    if ($el.is(':hidden')) {
      $el.remove();
      return env;
    }
  }
}
/* ***** End of Function for finding the bootstrap environment ***** */
;(function($){
// Start navigation padding

  $(document).ready(function(){
    $(".dropdown").on("hide.bs.dropdown", function(){
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        if( $(this).closest('#top-menu-nav').length ) {
          $(".shadow-overlay").css("display","none");
          $('.current').css("background-color", "#da291c;");
        }
      }
    });

    $(".dropdown").on("show.bs.dropdown", function(){
      if( $(this).find('.dropdown-menu') ) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        if( $(this).closest('#top-menu-nav').length ) {
          $(".shadow-overlay").css("display","block");
          if(!$(this).is($('.current'))){
            $('.current').css("background-color", "#bb1b18");
          }
        }
      }
    });

    $(".dropdown").on("shown.bs.dropdown", function(){
      if(!$(this).is($('.current.login'))){
        $('#start-login-form input').focus();
      }
    });

    // Slide up the dropdown on clicking the remove icon
    $(".dropdown-menu > li > a").click(function(){
      $(".dropdown").removeClass('open');
      $(".dropdown").trigger("hide.bs.dropdown");
    });


  });

// Showing/hiding the overlay on clicking the dropdown toggle
  $(document).ready(function(){
    //initialize the overlay to get the document's dimensions
    $(".shadow-overlay").css("width",$(document).width());
    $(".shadow-overlay").css("height",$(document).height());
    showImportantNotice();
  });

  $(window).resize(function() {
    //Recalculate the overlay when window is resized
    $(".shadow-overlay").css("width",$(document).width());
    $(".shadow-overlay").css("height",$(document).height());
  });

  // Script for populating the dropdown with the selected tab link
  $(document).ready(function() {
    $(".dropdown-tabs .dropdown .heading").html($(".dropdown-tabs .dropdown-menu li.active a").html());
    $(".dropdown-tabs .dropdown-menu li a").click(function() {
      $(".dropdown-tabs .dropdown-menu li.active").removeClass("active");
      $(".dropdown-tabs .dropdown .heading").html($(this).html());
    });

    $(".dropdown-tabs button").click(function() {
      $(".dropdown-tabs button span.icon").toggleClass('chevron-up chevron-down');
    });
  });

 $(document).ready(function() {
    $(".dropdown-tabs .dropdown-select").change(function() {
      $("#main-tab-content > .tab-pane.active").removeClass("active");
      $(".tab-content #tab-"+this.value).addClass("active");
    });
  });
  
// Start prevent top menu clicks from running away with the page
  $(document).on('click', '.yamm .dropdown-menu', function(e) {
    e.stopPropagation();
  });
// End prevent top menu clicks from running away with the page

// End navigation padding

// Start content padding

// Start Adding twister effect to accordion/FAQ
  $(document).ready(function () {
    $("ul[data-widget=stbFaq]").stbFaq();
  });

  $.fn.stbFaq = function () {
      $(this).find("a").on("click", function (b) {
        if ($(this).hasClass("twister")) {
          b.preventDefault();
          var c = $(this).siblings("ul.accordion li .answer");
          $(this).hasClass("open") ? ($(this).removeClass("open"), c.slideUp(200)) : ($(this).addClass("open"), c.slideDown(200));
        }
      });
  };

  $(document).ready(function(){
    $('.stb-accordion').on('show.bs.collapse', function (event) {
      if($(event.target).parents('.stb-accordion').is('.toggle-red-chevron')){
        $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up red');
      }else{
        $(event.target).prev().find('span:last').toggleClass('chevron-down chevron-up');
      }
      $(event.target).parent().addClass('active');
    });

    $('.stb-accordion').on('hide.bs.collapse', function () {
      if($(event.target).parents('.stb-accordion').is('.toggle-red-chevron')){
        $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up red');
      }else{
        $('.panel-collapse.collapse.in').prev().find('span:last').toggleClass('chevron-down chevron-up');
      }
      $('.panel-collapse.collapse.in').parent().removeClass('active');
    });
  });
// End twister effect on accordion/FAQ

// Achieve Equal height columns
  $("document").ready(function(){
    $(".row .column").matchHeight(true);
  });

  $(window).resize(function() {
    $(".row .column").matchHeight(true);
  });

  //Equalheights fix for elements in hidden tabs
  $(document).ready(function(){
    $('ul[data-tabs="tabs"] a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.tab-pane.active .row .column').matchHeight(true);
    });
  });
  // End achieve Equal heights

  // Handling automatic generation of TOC lists on article pages
  // Prepare the TOC link for a given header tag
  function prepareTocLink(headerTag, prefix) {
    //take the header text
    var headerText = headerTag.text();
    //prepare the header ID from its text
    headerTag.attr("id",prefix.replace(/ /g,"-").toLowerCase() + "--" + headerText.replace(/\-/g,'').replace(/ /g,"-").replace(/[æå]/gi,'a').replace(/ø/gi,'o').toLowerCase()); // generating id for the h3
    var headerId = headerTag.attr("id").replace(/\W/g, ''); // set the id
    headerTag.attr('name', headerId);
    //create the link and return it
    return '<li><a href="#'+headerId+'">'+headerText+'</a></li>';
  }

  $(document).ready(function() {
    // Prepare the row that contains the table of contents
    var tocList ='<div class="row"><div class="col-md-8 toc-list top-padding-10 border-top-and-bottom stbcolor-background fifth"><p class="intro">G&aring; direkte til<span class="stb-sprite-medium chevron-down pull-right"></span></p><ul class="items"></ul></div></div>';

    // Place the table of content above the first h3.toc-header
    $(tocList).insertBefore( $('h3.toc-header:first').closest("div.row") );

    // Find all the top level TOC headings (h3)
    var tocHeaders= $('h3.toc-header');

    // Iterate through all the top level headings (h3)
    for(var i=0; i<tocHeaders.length; i++) {
      var heading = $(tocHeaders[i]);

      // Appending heading text to table to contents and also preparing links
      $('.toc-list .items').append( prepareTocLink(heading, "") );

      // Find all sub-headings(h4) inside each heading(h3)
      var subHeading = heading.nextUntil('h3','h4');

      // Check if there are any h4 elements. If there are none, we should not run the code below.
      if(subHeading.length === 0) continue;
    }

    //check if URL already has a hash and scroll to the correct heading
    if( window.location.hash.length > 0 && window.location.hash.indexOf("/") === -1 ) {  // only do scrolling now, since the has tag is present and it does not have a / which is for angular JS
      try {
        var hashId = window.location.hash;
        //if a matching heading has the hash ID, then scroll to it.

        if( hashId.length > 0 ){
          scrollToHash( hashId );
        }

      } catch(e) {
        // Don't do a thing!
      }
    }

    // Perform a smooth page scroll to an anchor on the same page.
    $(function() {
      $('.toc-list .items a[href*=#]:not([href=#])').click(function(event) {
        event.preventDefault();
        //if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        scrollToHash( this.hash);
        //}
      });
    });


    // replace medium with small chevron icon in mobile view
    if( $( window ).width() <= 768){
      $('.toc-list p span').toggleClass("stb-sprite-small stb-sprite-medium");
    }

    // hide and show articles list
    $('.toc-list p').click(function() {
      // if the media screen width is large, then don't do anything
      // the following will apply for mobile view
      $('.toc-list .items').slideToggle();
      $('.toc-list p span').toggleClass("chevron-down red chevron-up");
    });

  });
// End of automatic generation of toc lists on article pages

// Opens the href in the relattribute to the clickable class
  $(document).ready(function($) {
    $(".clickable").click(function() {
      if ($(this).find("a").first().attr("target") === '_blank') {
        window.open($(this).attr("rel"));
      } else {
        window.document.location = $(this).attr("rel");
      }
    });

    $(".clickable a").click(function(e){
      e.preventDefault();
      //Do nothing, as the clickable will handle this click.
    });
  });

//Appending arrow after link for clickable links
  $(document).ready(function() {
    var arrowCode ='<span class="stb-sprite-small arrow-right pull-right"></span>';
    $('a.list-group-item').append(arrowCode);
  });

//Adding link visibility to contents in first column in clickable rows in tables
  $(document).ready(function() {
    $('tr.clickable td:first-child').each(function() {
      if($(this).parent().hasClass('analyze')){
        $(this).html('<a href="#"' + ' class="analyze">' + $(this).text() + '</' + 'a>');
      }else{
        $(this).html('<a href="#"' + '>' + $(this).text() + '</' + 'a>');
      }
    });
  });

// End content padding

// Adding hotkeys based on Resig
  $("document").ready(function(){

    //Hotkey for search
    if($('.typeahead').length){
      $(document).bind('keydown', 'shift+s', function(event){event.preventDefault();$('.navbar-nav .typeahead').focus();});
    }

    //Hotkey for bottom
    if( $('footer').length){
      $(document).bind('keydown', 'shift+b', function(){$('html, body').animate({ scrollTop: $('footer').offset().top}, 500);});
    }

    //Hotkey for login
    if($('li.login > a').length) {
      $(document).bind('keydown', 'shift+l', function(){$('li.login > a').click();});
    }

    //Hotkey for top
    $(document).bind('keydown', 'shift+t', function(){$('html, body').animate({ scrollTop: 0}, 500);});
  });

// Check  for list groups with .expandable class and make them expandable
  $(document).ready(function(){
    $('ul.stb-list-group.expandable').each(function(index){
      makeExpandableList($(this),2);
    });
  });
  /* ***** START Make lists expandable ***** */
  function makeExpandableList(selector){
    initialExpandable(selector);

    var showMore = selector.find('.showMore');

    showMore.click(function() {
      if(showMore.hasClass('open')){
        initialExpandable(selector);
        showMore.find('span').toggleClass('chevron-up red chevron-down');
      }else{
        selector.children('li').show(400);
        showMore.find('span').toggleClass('chevron-up red chevron-down');
      }
      showMore.find("span.show-detail, span.hide-detail").toggle();
      showMore.toggleClass('open');
    });
  }
  /* ***** END Make lists expandable ***** */
  /* ***** START Loop through list, showing li elements with summary class and hide all other li elements ***** */
  function initialExpandable(selector){
    selector.children('li').each(function(index){
      if(!$(this).is('.summary, .showMore')){
        $(this).hide(400);
      }
    });
  }
  /* ***** END Loop through list, showing li elements with summary class and hide all other li elements ***** */

  // Google Analytics event tagging - automated for various design elements
  // To enable analytics the element needs a 'analyze' class
  $(document).ready(function(){
    //Analytics for buttons
    $('button.analyze').bind( "click", function() {
      var btnTxt = $(this).html();
      var path = window.location.pathname;
      //console.log(btnTxt);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på knappen', btnTxt);
    });
    //Analytics for links
    $('a.analyze').bind( "click", function() {
      var linkTxt = $(this).html();
      var path = window.location.pathname;
      //console.log(linkTxt);
      //console.log(path;
      ga('send', 'event', path , 'Klikk på lenke', linkTxt);
    });
    //Analytics for miniboxes
    $('.mini.clickable.analyze').bind( "click", function() {
      var boxId = $(this).attr('alt');
      var path = window.location.pathname;
      //console.log(boxId);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på miniboks', boxId);
    });
    //Analytics for big boxes
    $('.big.clickable.analyze').bind( "click", function() {
      var boxId = $(this).attr('alt');
      var path = window.location.pathname;
      //console.log(boxId);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på store boks ', boxId);
    });
    //Analytics for accordion
    $('.accordion.analyze a').bind( "click", function() {
      //console.log('faq');
      var q = $(this).find('.question').html();
      var path = window.location.pathname;
      //console.log(q);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på accordion ', q);
    });

    //Analytics for list group
    $('.list-group-item.analyze').bind( "click", function() {
      var q = $(this).prev('.header').html();
      var path = window.location.pathname;
      //console.log(q);
      //console.log(path);
      ga('send', 'event', path , 'Klikk på list group ', q);
    });
    //Analytics for radio buttons and checkboxes
    $('label.analyze').bind( "click", function() {
      var parent = $(this).parent();
      var q = $(this).html();
      var label = $(this).parent().prev('label').length > 0 ? $(this).parent().prev('label').html() : "" ;
      var path = window.location.pathname;
      //console.log(q);
      //console.log(path);
      if(parent.hasClass('radiobuttons')){
        ga('send', 'event', path , 'Radiobutton: '+label+' checked', q);
      }else if(parent.hasClass('checkboxes')){
        ga('send', 'event', path , 'Checkbox: '+label+' checked', q);
      }
    });
    //Analytics for select
    $('select.analyze').bind( "change", function() {
      var q = $(this).val();
      var label = $(this).prev('label').length > 0 ? $(this).prev('label').html() : "" ;
      var path = window.location.pathname;
      //console.log(q);
      //console.log(path);
      ga('send', 'event', path , 'Dropdown:'+label+' endret valg.', q);
    });
    //Analytics for datepicker
    $('.datePicker.analyze').bind('dp.change dp.show', function(){
      var q = $(this).find('input').val();
      var label = $(this).prev('label').length > 0 ? $(this).prev('label').html() : "" ;
      var path = window.location.pathname;
      //console.log(q);
      //console.log(path);
      ga('send', 'event', path , 'Date changed for: '+label, q);

    });

  });

  //Adjustments to Bootstraps Modal window
  var modalDialog = {
    triggerModal : function(type,options){
      if(type === 'confirm'){
        var markup = '<div class="modal stb-modal fade" id="dialogModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-span6">' +
            '<div class="modal-content">' +
            '<div class="modal-header stbcolor-secondary fifth">' +
            '<button type="button" class="close" data-dismiss="modal" onclick="options.onCloseAction();"><p class="pull-left">Lukk</p><span class="stb-sprite-medium remove pull-left"></span></button>' +
            '<h4 class="modal-title"><span class="stb-color-sprite-medium info"></span></h4>' +
            '</div>' +
            '<div class="modal-body">' +
            '<h3>'+options.title+'</h3>' +
            '<p>'+options.text+'</p>' +
            '<form>' +
            '<button class="stb-btn" onclick="options.onConfirmAction();">Yes</button>' +
            '<button class="stb-btn transparent light" onclick="options.onCancelAction();">No</button>' +
            '</form>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        if($('#dialogModal').length === 0){
          $('body').append(markup);
        }

        $('#dialogModal').show();
        $('#dialogModal').modal();
      }
    }
  };
  //End Adjustments to Bootstraps Modal window

  // Script to highlight anchor tags in mini and big boxes on mouseenter
  $("document").ready(function() {
    $( ".mini" ).mouseenter(function() {
      $(this).find('a').css('color', '#DA291C');
      $(this).find('a').css('border-color', '#DA291C');
    });
    $( ".mini" ).mouseleave(function() {
      $(this).find('a').css('color', '#404040');
      $(this).find('a').css('border-color', '#404040');
    });
    $( ".big" ).mouseenter(function() {
      $(this).find('a').css('color', '#DA291C');
      $(this).find('a').css('border-color', '#DA291C');
    });
    $( ".big" ).mouseleave(function() {
      $(this).find('a').css('color', '#404040');
      $(this).find('a').css('border-color', '#404040');
    });

    $('.stbcolor-secondary.sixth .stb-box.mini,.stbcolor-secondary.sixth .stb-box.big').css('background-color', '#fff');
  });


// login
  $(document).ready(function(){
    /* Verify National Identity Number ***********************************************/
    var loginFields=  {
      nationalIdentityNumber: {
        container: '#menulogin-message',
        validators: {
          callback: idValidator,
          notEmpty: {
            message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
          }
        }
      }
    };
    var frontpageLoginFields =  {
      nationalIdentityNumber: {
        container: '#startlogin-message',
        validators: {
          callback: idValidator,
          notEmpty: {
            message: '<span class="stb-color-sprite-small warning"></span> Oppgi fødselsnummer'
          }
        }
      }
    };

    var callback = function(e) {
      // Prevent form submission
      e.preventDefault();
      loginFromMenu($(e.target).find("input[name='nationalIdentityNumber']").val());
    };

    try{
      initBootstrapValidator ($('#start-login-form'),loginFields,callback);
      initBootstrapValidator ($('#start-login-form-mobile'),loginFields,callback);
    }catch(err){}
  });


  $(document).ready(function() {
    $('.table-responsive').each(function() {
      if($(this).hasScrollBar()) {
        $(this).addClass('scrollable').prevAll('.scroll-indicator').show();
      }
    });
    $('.table-responsive-pinned').each(function() {
      if($(this).hasScrollBar()) {
        $(this).addClass('scrollable').prevAll('.scroll-indicator').show();
      }
    });
    makeTableScrollable();
  });

  /* ***** Function for making tables responsive ***** */
  function makeTableScrollable(){
    var switched = false;
    var updateTables = function() {
      if (($(window).width() < 767) && !switched ){
        switched = true;
        $(".table-responsive-pinned.scrollable table.responsive").each(function(i, element) {
          splitTable($(element));
        });
        return true;
      }
      else if (switched && ($(window).width() > 767)) {
        switched = false;
        $(".table-responsive-pinned.scrollable table.responsive").each(function(i, element) {
          unsplitTable($(element));
        });
      }
    };

    $(window).load(updateTables);
    $(window).on("redraw",function(){switched=false;updateTables();}); // An event to listen for
    $(window).on("resize", updateTables);

    function splitTable(original)
    {
      original.wrap("<div class='table-wrapper' />");

      var copy = original.clone();
      copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
      copy.removeClass("responsive");

      original.closest(".table-wrapper").append(copy);
      copy.wrap("<div class='pinned' />");
      original.wrap("<div class='scrollable' />");

      setCellHeights(original, copy);
    }

    function unsplitTable(original) {
      original.closest(".table-wrapper").find(".pinned").remove();
      original.unwrap();
      original.unwrap();
    }

    function setCellHeights(original, copy) {
      var tr = original.find('tr'),
          tr_copy = copy.find('tr'),
          heights = [];

      tr.each(function (index) {
        var self = $(this),
            tx = self.find('th, td');
        tx.each(function () {
          var height = $(this).outerHeight(true);
          heights[index] = heights[index] || 0;
          if (height > heights[index]) heights[index] = height;
        });

      });

      tr_copy.each(function (index) {
        //Integration with boostrap fix
        $(this).height(heights[index]);
      });
      tr.each(function (index){
        $(this).height(heights[index]);
      });
    }
  }
  /* ***** End of Function for making tables responsive ***** */

  $.fn.hasScrollBar = function() {
    return this.get(0).scrollWidth > this.get(0).clientWidth;
  };

  //Show and hide contactus links
  $(document).ready(function(){
    $('a.contact').click(function(){
      showHideForm(this);
    });

    $('.contactus-cancel').click( function(){
      showHideForm($(this).parents('.contactus-form').prev('div').find('.contact'));
    });

    $('.contactus').submit(function(event){
      event.preventDefault();
      var form = $(this);
      $(form).find(".help-block").remove();
      var phoneNumber = $(form).find('input.phone').val();
      if(!isNaN(phoneNumber) && phoneNumber.length === 8){
        var callbackUrl = $(form).find(".callback-channel").val() + phoneNumber;
        $.ajax({
          url: callbackUrl,
          success: function(data) {
            $(form).next('.contactus-receipt').find('.contact-number').append(phoneNumber);
            $(form).next('.contactus-receipt').show();
            $(form).hide();
          },
          error: function(data, textStatus) {
            $(form).find('input.phone').before("<span class='help-block has-error'><small class='help-block'><span class='stb-color-sprite-small warning'></span> Beklager, vi har problemer med denne tjenesten. Prøv igjen seinere.</small></span>");
          }
        });
      } else {
        $(form).find('input.phone').before("<span class='help-block has-error'><small class='help-block'><span class='stb-color-sprite-small warning'></span> Ugyldig telefonnummer!</small></span>");
      }
    });
  });

  function showHideForm(elem){
    $(elem).parent('div').next('div').slideToggle('fast');
    $(elem).find('span:last').toggleClass('chevron-down chevron-up');
  }

  $(document).ready(function(){
    $(".contactElements a.chat.open").click(function(event){
      var contactElement = $(this);
      var contentKey = $(this).attr('data-key');
      var elementId = $(this).attr('data-element-id');
      var chatStatusUrl = $('#chat-status').attr('data-url');
      if (chatStatusUrl !== '' && contentKey !== null) {
        $.getJSON(chatStatusUrl + '?key=' + contentKey, function(chatData) {
          if (chatData.status === 'true') {
            try {
              $(contactElement).openChat();
            } catch (e) {
              return true;
            }
          } else {
            $(contactElement).removeAttr('href').removeClass('open').addClass('closed');
            $(contactElement).next().children().text(chatData.text);
            var icon = $(contactElement).children('.circle-16');
            $(icon).removeClass("stbcolor-secondary");
            $(icon).addClass("stbcolor-gray");
          }
        });
      }
      event.preventDefault();
    });
  });

  $(document).ready(function(){
    $('.attachmentUpload input.file').change(function(e){
      if(e.target.files.length > 0){
        var attachments = e.target.files.length > 1 ? "<p><b>"+e.target.files.length+" filer valgt:</b></p>" :  "<p><b>1 fil valgt:</b></p>";

        for(var i = 0; i < e.target.files.length; i++){
          attachments += '<ul class="stb"><li>'+e.target.files[i].name+'</li></ul>';
        }

        $(this).parent().prev('.uploadedAttachments').empty().append(attachments);
      }else{
        $(this).parent().prev('.uploadedAttachments').empty();
      }

    });

    $('.stb-btn.uploadFile').click(function(e){
      e.preventDefault();
      $(this).prev('.attachmentUpload').find('input.file').click();
    });

  });

}(jQuery));
/* ***** Validator for national identity number ***** */

var idValidator = {
  message: '<span class="stb-color-sprite-small warning"></span> Ugyldig fødselsnummer!',
  callback: function(value, validor){
    return verifyIDNumber(value);
  }
};
;// This loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var bootstrapEnv;

// This function creates an <iframe> (and YouTube player) after the API code downloads.

function onYouTubeIframeAPIReady() {
  bootstrapEnv = findBootstrapEnvironment();
  $('.video-player-banner').each(function(index, element){
    new YT.Player($(element).attr('id'), {
      videoId: $(element).attr('data-youtube-id'),
      playerVars: { autohide:1, modestbranding: 1, controls: 1,theme:'light',html5:1, showinfo:0, rel:0},
      events: {
        'onReady': onPlayerReadyBanner,
        'onStateChange': onPlayerStateChangeBanner
      }
    });
  });

  $('.video-player-inline').each(function(index, element) {
    new YT.Player($(element).attr('id'), {
      videoId: $(element).attr('data-youtube-id'),
      playerVars: { autohide:1, modestbranding: 1, controls: 1,theme:'light',html5:1, showinfo:0, rel:0}
    });
  });
}

function onPlayerReadyBanner(event) {
  $('.playVideoBtn').click(function() {
    playVideoBanner(event.target,this);
  });

  $('.video-close').click(function() {
    stopVideoBanner(event.target,this);
  });
}

// The API calls this function when the player's state changes.
// The function indicates that when playing a video (state=1), the player should play for six seconds and then stop.

function onPlayerStateChangeBanner(event) {
  if(event.data === 0) {
    stopVideoBanner(event.target);
  }
}

function stopVideoBanner(player, btn) {
  if(bootstrapEnv === 'md' || bootstrapEnv === 'lg') {
    player.stopVideo();
    player.seekTo(0, false);
  }
  var bannerVideo = $(btn).closest('.banner-video');
  bannerVideo.children('.video-container').hide(500);
  bannerVideo.children('.video-text').show(500);
  bannerVideo.parent().addClass('top-padding-30');
}

function playVideoBanner(player, btn) {
  var bannerVideo = $(btn).closest('.banner-video');
  bannerVideo.parent().removeClass('top-padding-30');
  bannerVideo.children('.video-text').hide(500);
  bannerVideo.children('.video-container').show(500, function() {
   if(bootstrapEnv === 'md' || bootstrapEnv === 'lg'){
     player.playVideo();
   }
  });
};/*!
 * BootstrapValidator (http://bootstrapvalidator.com)
 * The best jQuery plugin to validate form fields. Designed to use with Bootstrap 3
 *
 * @version     v0.5.3, built on 2014-11-05 9:14:18 PM
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2014 Nguyen Huu Phuoc
 * @license     Commercial: http://bootstrapvalidator.com/license/
 *              Non-commercial: http://creativecommons.org/licenses/by-nc-nd/3.0/
 *
 * NB! Customization line 360: Replaced .insertAfter($field); with .insertAfter(('checkbox' === type || 'radio' === type) ? $field.parent() : $field);
 */
if (typeof jQuery === 'undefined') {
  throw new Error('BootstrapValidator requires jQuery');
}

(function($) {
  var version = $.fn.jquery.split(' ')[0].split('.');
  if ((+version[0] < 2 && +version[1] < 9) || (+version[0] === 1 && +version[1] === 9 && +version[2] < 1)) {
    throw new Error('BootstrapValidator requires jQuery version 1.9.1 or higher');
  }
}(window.jQuery));

(function($) {
  var BootstrapValidator = function(form, options) {
    this.$form   = $(form);
    this.options = $.extend({}, $.fn.bootstrapValidator.DEFAULT_OPTIONS, options);

    this.$invalidFields = $([]);    // Array of invalid fields
    this.$submitButton  = null;     // The submit button which is clicked to submit form
    this.$hiddenButton  = null;

    // Validating status
    this.STATUS_NOT_VALIDATED = 'NOT_VALIDATED';
    this.STATUS_VALIDATING    = 'VALIDATING';
    this.STATUS_INVALID       = 'INVALID';
    this.STATUS_VALID         = 'VALID';

    // Determine the event that is fired when user change the field value
    // Most modern browsers supports input event except IE 7, 8.
    // IE 9 supports input event but the event is still not fired if I press the backspace key.
    // Get IE version
    // https://gist.github.com/padolsey/527683/#comment-7595
    var ieVersion = (function() {
      var v = 3, div = document.createElement('div'), a = div.all || [];
      while (div.innerHTML = '<!--[if gt IE '+(++v)+']><br><![endif]-->', a[0]) {}
      return v > 4 ? v : !v;
    }());

    var el = document.createElement('div');
    this._changeEvent = (ieVersion === 9 || !('oninput' in el)) ? 'keyup' : 'input';

    // The flag to indicate that the form is ready to submit when a remote/callback validator returns
    this._submitIfValid = null;

    // Field elements
    this._cacheFields = {};

    this._init();
  };

  BootstrapValidator.prototype = {
    constructor: BootstrapValidator,

    /**
     * Init form
     */
    _init: function() {
      var that    = this,
          options = {
            autoFocus:      this.$form.attr('data-bv-autofocus'),
            container:      this.$form.attr('data-bv-container'),
            events: {
              formInit:         this.$form.attr('data-bv-events-form-init'),
              formError:        this.$form.attr('data-bv-events-form-error'),
              formSuccess:      this.$form.attr('data-bv-events-form-success'),
              fieldAdded:       this.$form.attr('data-bv-events-field-added'),
              fieldRemoved:     this.$form.attr('data-bv-events-field-removed'),
              fieldInit:        this.$form.attr('data-bv-events-field-init'),
              fieldError:       this.$form.attr('data-bv-events-field-error'),
              fieldSuccess:     this.$form.attr('data-bv-events-field-success'),
              fieldStatus:      this.$form.attr('data-bv-events-field-status'),
              validatorError:   this.$form.attr('data-bv-events-validator-error'),
              validatorSuccess: this.$form.attr('data-bv-events-validator-success')
            },
            excluded:       this.$form.attr('data-bv-excluded'),
            feedbackIcons: {
              valid:      this.$form.attr('data-bv-feedbackicons-valid'),
              invalid:    this.$form.attr('data-bv-feedbackicons-invalid'),
              validating: this.$form.attr('data-bv-feedbackicons-validating')
            },
            group:          this.$form.attr('data-bv-group'),
            live:           this.$form.attr('data-bv-live'),
            message:        this.$form.attr('data-bv-message'),
            onError:        this.$form.attr('data-bv-onerror'),
            onSuccess:      this.$form.attr('data-bv-onsuccess'),
            submitButtons:  this.$form.attr('data-bv-submitbuttons'),
            threshold:      this.$form.attr('data-bv-threshold'),
            trigger:        this.$form.attr('data-bv-trigger'),
            verbose:        this.$form.attr('data-bv-verbose'),
            fields:         {}
          };

      this.$form
        // Disable client side validation in HTML 5
          .attr('novalidate', 'novalidate')
          .addClass(this.options.elementClass)
        // Disable the default submission first
          .on('submit.bv', function(e) {
            e.preventDefault();
            that.validate();
          })
          .on('click.bv', this.options.submitButtons, function() {
            that.$submitButton  = $(this);
            // The user just click the submit button
            that._submitIfValid = true;
          })
        // Find all fields which have either "name" or "data-bv-field" attribute
          .find('[name], [data-bv-field]')
          .each(function() {
            var $field = $(this),
                field  = $field.attr('name') || $field.attr('data-bv-field'),
                opts   = that._parseOptions($field);
            if (opts) {
              $field.attr('data-bv-field', field);
              options.fields[field] = $.extend({}, opts, options.fields[field]);
            }
          });

      this.options = $.extend(true, this.options, options);

      // When pressing Enter on any field in the form, the first submit button will do its job.
      // The form then will be submitted.
      // I create a first hidden submit button
      this.$hiddenButton = $('<button/>')
          .attr('type', 'submit')
          .prependTo(this.$form)
          .addClass('bv-hidden-submit')
          .css({ display: 'none', width: 0, height: 0 });

      this.$form
          .on('click.bv', '[type="submit"]', function(e) {
            // #746: Check if the button click handler returns false
            if (!e.isDefaultPrevented()) {
              var $target = $(e.target),
              // The button might contain HTML tag
                  $button = $target.is('[type="submit"]') ? $target.eq(0) : $target.parent('[type="submit"]').eq(0);

              // Don't perform validation when clicking on the submit button/input
              // which aren't defined by the 'submitButtons' option
              if (that.options.submitButtons && !$button.is(that.options.submitButtons) && !$button.is(that.$hiddenButton)) {
                that.$form.off('submit.bv').submit();
              }
            }
          });

      for (var field in this.options.fields) {
        this._initField(field);
      }

      this.$form.trigger($.Event(this.options.events.formInit), {
        bv: this,
        options: this.options
      });

      // Prepare the events
      if (this.options.onSuccess) {
        this.$form.on(this.options.events.formSuccess, function(e) {
          $.fn.bootstrapValidator.helpers.call(that.options.onSuccess, [e]);
        });
      }
      if (this.options.onError) {
        this.$form.on(this.options.events.formError, function(e) {
          $.fn.bootstrapValidator.helpers.call(that.options.onError, [e]);
        });
      }
    },

    /**
     * Parse the validator options from HTML attributes
     *
     * @param {jQuery} $field The field element
     * @returns {Object}
     */
    _parseOptions: function($field) {
      var field      = $field.attr('name') || $field.attr('data-bv-field'),
          validators = {},
          validator,
          v,          // Validator name
          attrName,
          enabled,
          optionName,
          optionAttrName,
          optionValue,
          html5AttrName,
          html5AttrMap;

      for (v in $.fn.bootstrapValidator.validators) {
        validator    = $.fn.bootstrapValidator.validators[v];
        attrName     = 'data-bv-' + v.toLowerCase(),
            enabled      = $field.attr(attrName) + '';
        html5AttrMap = ('function' === typeof validator.enableByHtml5) ? validator.enableByHtml5($field) : null;

        if ((html5AttrMap && enabled !== 'false')
            || (html5AttrMap !== true && ('' === enabled || 'true' === enabled || attrName === enabled.toLowerCase())))
        {
          // Try to parse the options via attributes
          validator.html5Attributes = $.extend({}, { message: 'message', onerror: 'onError', onsuccess: 'onSuccess' }, validator.html5Attributes);
          validators[v] = $.extend({}, html5AttrMap === true ? {} : html5AttrMap, validators[v]);

          for (html5AttrName in validator.html5Attributes) {
            optionName  = validator.html5Attributes[html5AttrName];
            optionAttrName = 'data-bv-' + v.toLowerCase() + '-' + html5AttrName,
                optionValue = $field.attr(optionAttrName);
            if (optionValue) {
              if ('true' === optionValue || optionAttrName === optionValue.toLowerCase()) {
                optionValue = true;
              } else if ('false' === optionValue) {
                optionValue = false;
              }
              validators[v][optionName] = optionValue;
            }
          }
        }
      }

      var opts = {
            autoFocus:     $field.attr('data-bv-autofocus'),
            container:     $field.attr('data-bv-container'),
            excluded:      $field.attr('data-bv-excluded'),
            feedbackIcons: $field.attr('data-bv-feedbackicons'),
            group:         $field.attr('data-bv-group'),
            message:       $field.attr('data-bv-message'),
            onError:       $field.attr('data-bv-onerror'),
            onStatus:      $field.attr('data-bv-onstatus'),
            onSuccess:     $field.attr('data-bv-onsuccess'),
            selector:      $field.attr('data-bv-selector'),
            threshold:     $field.attr('data-bv-threshold'),
            trigger:       $field.attr('data-bv-trigger'),
            verbose:       $field.attr('data-bv-verbose'),
            validators:    validators
          },
          emptyOptions    = $.isEmptyObject(opts),        // Check if the field options are set using HTML attributes
          emptyValidators = $.isEmptyObject(validators);  // Check if the field validators are set using HTML attributes

      if (!emptyValidators || (!emptyOptions && this.options.fields && this.options.fields[field])) {
        opts.validators = validators;
        return opts;
      } else {
        return null;
      }
    },

    /**
     * Init field
     *
     * @param {String|jQuery} field The field name or field element
     */
    _initField: function(field) {
      var fields = $([]);
      switch (typeof field) {
        case 'object':
          fields = field;
          field  = field.attr('data-bv-field');
          break;
        case 'string':
          fields = this.getFieldElements(field);
          fields.attr('data-bv-field', field);
          break;
        default:
          break;
      }

      // We don't need to validate non-existing fields
      if (fields.length === 0) {
        return;
      }

      if (this.options.fields[field] === null || this.options.fields[field].validators === null) {
        return;
      }

      var validatorName;
      for (validatorName in this.options.fields[field].validators) {
        if (!$.fn.bootstrapValidator.validators[validatorName]) {
          delete this.options.fields[field].validators[validatorName];
        }
      }
      if (this.options.fields[field].enabled === null) {
        this.options.fields[field].enabled = true;
      }

      var that      = this,
          total     = fields.length,
          type      = fields.attr('type'),
          updateAll = (total === 1) || ('radio' === type) || ('checkbox' === type),
          event     = ('radio' === type || 'checkbox' === type || 'file' === type || 'SELECT' === fields.eq(0).get(0).tagName) ? 'change' : this._changeEvent,
          trigger   = (this.options.fields[field].trigger || this.options.trigger || event).split(' '),
          events    = $.map(trigger, function(item) {
            return item + '.update.bv';
          }).join(' ');

      for (var i = 0; i < total; i++) {
        var $field    = fields.eq(i),
            group     = this.options.fields[field].group || this.options.group,
            $parent   = $field.parents(group),
        // Allow user to indicate where the error messages are shown
            container = ('function' === typeof (this.options.fields[field].container || this.options.container)) ? (this.options.fields[field].container || this.options.container).call(this, $field, this) : (this.options.fields[field].container || this.options.container),
            $message  = (container && container !== 'tooltip' && container !== 'popover') ? $(container) : this._getMessageContainer($field, group);

        if (container && container !== 'tooltip' && container !== 'popover') {
          $message.addClass('has-error');
        }

        // Remove all error messages and feedback icons
        $message.find('.help-block[data-bv-validator][data-bv-for="' + field + '"]').remove();
        $parent.find('i[data-bv-icon-for="' + field + '"]').remove();

        // Whenever the user change the field value, mark it as not validated yet
        $field.off(events).on(events, function() {
          that.updateStatus($(this), that.STATUS_NOT_VALIDATED);
        });

        // Create help block elements for showing the error messages
        $field.data('bv.messages', $message);
        for (validatorName in this.options.fields[field].validators) {
          $field.data('bv.result.' + validatorName, this.STATUS_NOT_VALIDATED);

          if (!updateAll || i === total - 1) {
            $('<small/>')
                .css('display', 'none')
                .addClass('help-block')
                .attr('data-bv-validator', validatorName)
                .attr('data-bv-for', field)
                .attr('data-bv-result', this.STATUS_NOT_VALIDATED)
                .html(this._getMessage(field, validatorName))
                .appendTo($message);
          }

          // Init the validator
          if ('function' === typeof $.fn.bootstrapValidator.validators[validatorName].init) {
            $.fn.bootstrapValidator.validators[validatorName].init(this, $field, this.options.fields[field].validators[validatorName]);
          }
        }

        // Prepare the feedback icons
        // Available from Bootstrap 3.1 (http://getbootstrap.com/css/#forms-control-validation)
        if (this.options.fields[field].feedbackIcons !== false && this.options.fields[field].feedbackIcons !== 'false'
            && this.options.feedbackIcons
            && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid
            && (!updateAll || i === total - 1))
        {
          // $parent.removeClass('has-success').removeClass('has-error').addClass('has-feedback');
          // Keep error messages which are populated from back-end
          $parent.addClass('has-feedback');
          var $icon = $('<i/>')
              .css('display', 'none')
              .addClass('form-control-feedback')
              .attr('data-bv-icon-for', field)
              .insertAfter(('checkbox' === type || 'radio' === type) ? $field.parent() : $field);

          // Place it after the container of checkbox/radio
          // so when clicking the icon, it doesn't effect to the checkbox/radio element
          if ('checkbox' === type || 'radio' === type) {
            var $fieldParent = $field.parent();
            if ($fieldParent.hasClass(type)) {
              $icon.insertAfter($fieldParent);
            } else if ($fieldParent.parent().hasClass(type)) {
              $icon.insertAfter($fieldParent.parent());
            }
          }

          // The feedback icon does not render correctly if there is no label
          // https://github.com/twbs/bootstrap/issues/12873
          if ($parent.find('label').length === 0) {
            $icon.addClass('bv-no-label');
          }
          // Fix feedback icons in input-group
          if ($parent.find('.input-group').length !== 0) {
            $icon.addClass('bv-icon-input-group')
                .insertAfter($parent.find('.input-group').eq(0));
          }

          // Store the icon as a data of field element
          if (!updateAll) {
            $field.data('bv.icon', $icon);
          } else if (i === total - 1) {
            // All fields with the same name have the same icon
            fields.data('bv.icon', $icon);
          }

          if (container) {
            $field
              // Show tooltip/popover message when field gets focus
                .off('focus.container.bv')
                .on('focus.container.bv', function() {
                  switch (container) {
                    case 'tooltip':
                      $(this).data('bv.icon').tooltip('show');
                      break;
                    case 'popover':
                      $(this).data('bv.icon').popover('show');
                      break;
                    default:
                      break;
                  }
                })
              // and hide them when losing focus
                .off('blur.container.bv')
                .on('blur.container.bv', function() {
                  switch (container) {
                    case 'tooltip':
                      $(this).data('bv.icon').tooltip('hide');
                      break;
                    case 'popover':
                      $(this).data('bv.icon').popover('hide');
                      break;
                    default:
                      break;
                  }
                });
          }
        }
      }

      // Prepare the events
      fields
          .on(this.options.events.fieldSuccess, function(e, data) {
            var onSuccess = that.getOptions(data.field, null, 'onSuccess');
            if (onSuccess) {
              $.fn.bootstrapValidator.helpers.call(onSuccess, [e, data]);
            }
          })
          .on(this.options.events.fieldError, function(e, data) {
            var onError = that.getOptions(data.field, null, 'onError');
            if (onError) {
              $.fn.bootstrapValidator.helpers.call(onError, [e, data]);
            }
          })
          .on(this.options.events.fieldStatus, function(e, data) {
            var onStatus = that.getOptions(data.field, null, 'onStatus');
            if (onStatus) {
              $.fn.bootstrapValidator.helpers.call(onStatus, [e, data]);
            }
          })
          .on(this.options.events.validatorError, function(e, data) {
            var onError = that.getOptions(data.field, data.validator, 'onError');
            if (onError) {
              $.fn.bootstrapValidator.helpers.call(onError, [e, data]);
            }
          })
          .on(this.options.events.validatorSuccess, function(e, data) {
            var onSuccess = that.getOptions(data.field, data.validator, 'onSuccess');
            if (onSuccess) {
              $.fn.bootstrapValidator.helpers.call(onSuccess, [e, data]);
            }
          });

      // Set live mode
      events = $.map(trigger, function(item) {
        return item + '.live.bv';
      }).join(' ');
      switch (this.options.live) {
        case 'submitted':
          break;
        case 'disabled':
          fields.off(events);
          break;
        case 'enabled':
        /* falls through */
        default:
          fields.off(events).on(events, function() {
            if (that._exceedThreshold($(this))) {
              that.validateField($(this));
            }
          });
          break;
      }

      fields.trigger($.Event(this.options.events.fieldInit), {
        bv: this,
        field: field,
        element: fields
      });
    },

    /**
     * Get the error message for given field and validator
     *
     * @param {String} field The field name
     * @param {String} validatorName The validator name
     * @returns {String}
     */
    _getMessage: function(field, validatorName) {
      if (!this.options.fields[field] || !$.fn.bootstrapValidator.validators[validatorName]
          || !this.options.fields[field].validators || !this.options.fields[field].validators[validatorName])
      {
        return '';
      }

      var options = this.options.fields[field].validators[validatorName];
      switch (true) {
        case (!!options.message):
          return options.message;
        case (!!this.options.fields[field].message):
          return this.options.fields[field].message;
        case (!!$.fn.bootstrapValidator.i18n[validatorName]):
          return $.fn.bootstrapValidator.i18n[validatorName]['default'];
        default:
          return this.options.message;
      }
    },

    /**
     * Get the element to place the error messages
     *
     * @param {jQuery} $field The field element
     * @param {String} group
     * @returns {jQuery}
     */
    _getMessageContainer: function($field, group) {
      var $parent = $field.parent();
      if ($parent.is(group)) {
        return $parent;
      }

      var cssClasses = $parent.attr('class');
      if (!cssClasses) {
        return this._getMessageContainer($parent, group);
      }

      cssClasses = cssClasses.split(' ');
      var n = cssClasses.length;
      for (var i = 0; i < n; i++) {
        if (/^col-(xs|sm|md|lg)-\d+$/.test(cssClasses[i]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(cssClasses[i])) {
          return $parent;
        }
      }

      return this._getMessageContainer($parent, group);
    },

    /**
     * Called when all validations are completed
     */
    _submit: function() {
      var isValid   = this.isValid(),
          eventType = isValid ? this.options.events.formSuccess : this.options.events.formError,
          e         = $.Event(eventType);

      this.$form.trigger(e);

      // Call default handler
      // Check if whether the submit button is clicked
      if (this.$submitButton) {
        isValid ? this._onSuccess(e) : this._onError(e);
      }
    },

    /**
     * Check if the field is excluded.
     * Returning true means that the field will not be validated
     *
     * @param {jQuery} $field The field element
     * @returns {Boolean}
     */
    _isExcluded: function($field) {
      var excludedAttr = $field.attr('data-bv-excluded'),
      // I still need to check the 'name' attribute while initializing the field
          field        = $field.attr('data-bv-field') || $field.attr('name');

      switch (true) {
        case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'true' || this.options.fields[field].excluded === true)):
        case (excludedAttr === 'true'):
        case (excludedAttr === ''):
          return true;

        case (!!field && this.options.fields && this.options.fields[field] && (this.options.fields[field].excluded === 'false' || this.options.fields[field].excluded === false)):
        case (excludedAttr === 'false'):
          return false;

        default:
          if (this.options.excluded) {
            // Convert to array first
            if ('string' === typeof this.options.excluded) {
              this.options.excluded = $.map(this.options.excluded.split(','), function(item) {
                // Trim the spaces
                return $.trim(item);
              });
            }

            var length = this.options.excluded.length;
            for (var i = 0; i < length; i++) {
              if (('string' === typeof this.options.excluded[i] && $field.is(this.options.excluded[i]))
                  || ('function' === typeof this.options.excluded[i] && this.options.excluded[i].call(this, $field, this) === true))
              {
                return true;
              }
            }
          }
          return false;
      }
    },

    /**
     * Check if the number of characters of field value exceed the threshold or not
     *
     * @param {jQuery} $field The field element
     * @returns {Boolean}
     */
    _exceedThreshold: function($field) {
      var field     = $field.attr('data-bv-field'),
          threshold = this.options.fields[field].threshold || this.options.threshold;
      if (!threshold) {
        return true;
      }
      var cannotType = $.inArray($field.attr('type'), ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'reset', 'submit']) !== -1;
      return (cannotType || $field.val().length >= threshold);
    },

    // ---
    // Events
    // ---

    /**
     * The default handler of error.form.bv event.
     * It will be called when there is a invalid field
     *
     * @param {jQuery.Event} e The jQuery event object
     */
    _onError: function(e) {
      if (e.isDefaultPrevented()) {
        return;
      }

      if ('submitted' === this.options.live) {
        // Enable live mode
        this.options.live = 'enabled';
        var that = this;
        for (var field in this.options.fields) {
          (function(f) {
            var fields  = that.getFieldElements(f);
            if (fields.length) {
              var type    = $(fields[0]).attr('type'),
                  event   = ('radio' === type || 'checkbox' === type || 'file' === type || 'SELECT' === $(fields[0]).get(0).tagName) ? 'change' : that._changeEvent,
                  trigger = that.options.fields[field].trigger || that.options.trigger || event,
                  events  = $.map(trigger.split(' '), function(item) {
                    return item + '.live.bv';
                  }).join(' ');

              fields.off(events).on(events, function() {
                if (that._exceedThreshold($(this))) {
                  that.validateField($(this));
                }
              });
            }
          })(field);
        }
      }

      // Determined the first invalid field which will be focused on automatically
      for (var i = 0; i < this.$invalidFields.length; i++) {
        var $field    = this.$invalidFields.eq(i),
            autoFocus = this._isOptionEnabled($field.attr('data-bv-field'), 'autoFocus');
        if (autoFocus) {
          // Activate the tab containing the field if exists
          var $tabPane = $field.parents('.tab-pane'), tabId;
          if ($tabPane && (tabId = $tabPane.attr('id'))) {
            $('a[href="#' + tabId + '"][data-toggle="tab"]').tab('show');
          }

          // Focus the field
          $field.focus();
          break;
        }
      }
    },

    /**
     * The default handler of success.form.bv event.
     * It will be called when all the fields are valid
     *
     * @param {jQuery.Event} e The jQuery event object
     */
    _onSuccess: function(e) {
      if (e.isDefaultPrevented()) {
        return;
      }

      // Submit the form
      this.disableSubmitButtons(true).defaultSubmit();
    },

    /**
     * Called after validating a field element
     *
     * @param {jQuery} $field The field element
     * @param {String} [validatorName] The validator name
     */
    _onFieldValidated: function($field, validatorName) {
      var field         = $field.attr('data-bv-field'),
          validators    = this.options.fields[field].validators,
          counter       = {},
          numValidators = 0,
          data          = {
            bv: this,
            field: field,
            element: $field,
            validator: validatorName,
            result: $field.data('bv.response.' + validatorName)
          };

      // Trigger an event after given validator completes
      if (validatorName) {
        switch ($field.data('bv.result.' + validatorName)) {
          case this.STATUS_INVALID:
            $field.trigger($.Event(this.options.events.validatorError), data);
            break;
          case this.STATUS_VALID:
            $field.trigger($.Event(this.options.events.validatorSuccess), data);
            break;
          default:
            break;
        }
      }

      counter[this.STATUS_NOT_VALIDATED] = 0;
      counter[this.STATUS_VALIDATING]    = 0;
      counter[this.STATUS_INVALID]       = 0;
      counter[this.STATUS_VALID]         = 0;

      for (var v in validators) {
        if (validators[v].enabled === false) {
          continue;
        }

        numValidators++;
        var result = $field.data('bv.result.' + v);
        if (result) {
          counter[result]++;
        }
      }

      if (counter[this.STATUS_VALID] === numValidators) {
        // Remove from the list of invalid fields
        this.$invalidFields = this.$invalidFields.not($field);

        $field.trigger($.Event(this.options.events.fieldSuccess), data);
      }
      // If all validators are completed and there is at least one validator which doesn't pass
      else if ((counter[this.STATUS_NOT_VALIDATED] === 0 || !this._isOptionEnabled(field, 'verbose')) && counter[this.STATUS_VALIDATING] === 0 && counter[this.STATUS_INVALID] > 0) {
        // Add to the list of invalid fields
        this.$invalidFields = this.$invalidFields.add($field);

        $field.trigger($.Event(this.options.events.fieldError), data);
      }
    },

    /**
     * Check whether or not a field option is enabled
     *
     * @param {String} field The field name
     * @param {String} option The option name, "verbose", "autoFocus", for example
     * @returns {Boolean}
     */
    _isOptionEnabled: function(field, option) {
      if (this.options.fields[field] && (this.options.fields[field][option] === 'true' || this.options.fields[field][option] === true)) {
        return true;
      }
      if (this.options.fields[field] && (this.options.fields[field][option] === 'false' || this.options.fields[field][option] === false)) {
        return false;
      }
      return this.options[option] === 'true' || this.options[option] === true;
    },

    // ---
    // Public methods
    // ---

    /**
     * Retrieve the field elements by given name
     *
     * @param {String} field The field name
     * @returns {null|jQuery[]}
     */
    getFieldElements: function(field) {
      if (!this._cacheFields[field]) {
        this._cacheFields[field] = (this.options.fields[field] && this.options.fields[field].selector)
            ? $(this.options.fields[field].selector)
            : this.$form.find('[name="' + field + '"]');
      }

      return this._cacheFields[field];
    },

    /**
     * Get the field options
     *
     * @param {String|jQuery} [field] The field name or field element. If it is not set, the method returns the form options
     * @param {String} [validator] The name of validator. It null, the method returns form options
     * @param {String} [option] The option name
     * @return {String|Object}
     */
    getOptions: function(field, validator, option) {
      if (!field) {
        return option ? this.options[option] : this.options;
      }
      if ('object' === typeof field) {
        field = field.attr('data-bv-field');
      }
      if (!this.options.fields[field]) {
        return null;
      }

      var options = this.options.fields[field];
      if (!validator) {
        return option ? options[option] : options;
      }
      if (!options.validators || !options.validators[validator]) {
        return null;
      }

      return option ? options.validators[validator][option] : options.validators[validator];
    },

    /**
     * Disable/enable submit buttons
     *
     * @param {Boolean} disabled Can be true or false
     * @returns {BootstrapValidator}
     */
    disableSubmitButtons: function(disabled) {
      if (!disabled) {
        this.$form.find(this.options.submitButtons).removeAttr('disabled');
      } else if (this.options.live !== 'disabled') {
        // Don't disable if the live validating mode is disabled
        this.$form.find(this.options.submitButtons).attr('disabled', 'disabled');
      }

      return this;
    },

    /**
     * Validate the form
     *
     * @returns {BootstrapValidator}
     */
    validate: function() {
      if (!this.options.fields) {
        return this;
      }
      this.disableSubmitButtons(true);

      this._submitIfValid = false;
      for (var field in this.options.fields) {
        this.validateField(field);
      }

      this._submit();
      this._submitIfValid = true;

      return this;
    },

    /**
     * Validate given field
     *
     * @param {String|jQuery} field The field name or field element
     * @returns {BootstrapValidator}
     */
    validateField: function(field) {
      var fields = $([]);
      switch (typeof field) {
        case 'object':
          fields = field;
          field  = field.attr('data-bv-field');
          break;
        case 'string':
          fields = this.getFieldElements(field);
          break;
        default:
          break;
      }

      if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
        return this;
      }

      var that       = this,
          type       = fields.attr('type'),
          total      = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
          updateAll  = ('radio' === type || 'checkbox' === type),
          validators = this.options.fields[field].validators,
          verbose    = this._isOptionEnabled(field, 'verbose'),
          validatorName,
          validateResult;

      for (var i = 0; i < total; i++) {
        var $field = fields.eq(i);
        if (this._isExcluded($field)) {
          continue;
        }

        var stop = false;
        for (validatorName in validators) {
          if ($field.data('bv.dfs.' + validatorName)) {
            $field.data('bv.dfs.' + validatorName).reject();
          }
          if (stop) {
            break;
          }

          // Don't validate field if it is already done
          var result = $field.data('bv.result.' + validatorName);
          if (result === this.STATUS_VALID || result === this.STATUS_INVALID) {
            this._onFieldValidated($field, validatorName);
            continue;
          } else if (validators[validatorName].enabled === false) {
            this.updateStatus(updateAll ? field : $field, this.STATUS_VALID, validatorName);
            continue;
          }

          $field.data('bv.result.' + validatorName, this.STATUS_VALIDATING);
          validateResult = $.fn.bootstrapValidator.validators[validatorName].validate(this, $field, validators[validatorName]);

          // validateResult can be a $.Deferred object ...
          if ('object' === typeof validateResult && validateResult.resolve) {
            this.updateStatus(updateAll ? field : $field, this.STATUS_VALIDATING, validatorName);
            $field.data('bv.dfs.' + validatorName, validateResult);

            validateResult.done(function($f, v, response) {
              // v is validator name
              $f.removeData('bv.dfs.' + v).data('bv.response.' + v, response);
              if (response.message) {
                that.updateMessage($f, v, response.message);
              }

              that.updateStatus(updateAll ? $f.attr('data-bv-field') : $f, response.valid ? that.STATUS_VALID : that.STATUS_INVALID, v);

              if (response.valid && that._submitIfValid === true) {
                // If a remote validator returns true and the form is ready to submit, then do it
                that._submit();
              } else if (!response.valid && !verbose) {
                stop = true;
              }
            });
          }
          // ... or object { valid: true/false, message: 'dynamic message' }
          else if ('object' === typeof validateResult && validateResult.valid !== undefined && validateResult.message !== undefined) {
            $field.data('bv.response.' + validatorName, validateResult);
            this.updateMessage(updateAll ? field : $field, validatorName, validateResult.message);
            this.updateStatus(updateAll ? field : $field, validateResult.valid ? this.STATUS_VALID : this.STATUS_INVALID, validatorName);
            if (!validateResult.valid && !verbose) {
              break;
            }
          }
          // ... or a boolean value
          else if ('boolean' === typeof validateResult) {
            $field.data('bv.response.' + validatorName, validateResult);
            this.updateStatus(updateAll ? field : $field, validateResult ? this.STATUS_VALID : this.STATUS_INVALID, validatorName);
            if (!validateResult && !verbose) {
              break;
            }
          }
        }
      }

      return this;
    },

    /**
     * Update the error message
     *
     * @param {String|jQuery} field The field name or field element
     * @param {String} validator The validator name
     * @param {String} message The message
     * @returns {BootstrapValidator}
     */
    updateMessage: function(field, validator, message) {
      var $fields = $([]);
      switch (typeof field) {
        case 'object':
          $fields = field;
          field   = field.attr('data-bv-field');
          break;
        case 'string':
          $fields = this.getFieldElements(field);
          break;
        default:
          break;
      }

      $fields.each(function() {
        $(this).data('bv.messages').find('.help-block[data-bv-validator="' + validator + '"][data-bv-for="' + field + '"]').html(message);
      });
    },

    /**
     * Update all validating results of field
     *
     * @param {String|jQuery} field The field name or field element
     * @param {String} status The status. Can be 'NOT_VALIDATED', 'VALIDATING', 'INVALID' or 'VALID'
     * @param {String} [validatorName] The validator name. If null, the method updates validity result for all validators
     * @returns {BootstrapValidator}
     */
    updateStatus: function(field, status, validatorName) {
      var fields = $([]);
      switch (typeof field) {
        case 'object':
          fields = field;
          field  = field.attr('data-bv-field');
          break;
        case 'string':
          fields = this.getFieldElements(field);
          break;
        default:
          break;
      }

      if (status === this.STATUS_NOT_VALIDATED) {
        // Reset the flag
        // To prevent the form from doing submit when a deferred validator returns true while typing
        this._submitIfValid = false;
      }

      var that  = this,
          type  = fields.attr('type'),
          group = this.options.fields[field].group || this.options.group,
          total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

      for (var i = 0; i < total; i++) {
        var $field       = fields.eq(i);
        if (this._isExcluded($field)) {
          continue;
        }

        var $parent      = $field.parents(group),
            $message     = $field.data('bv.messages'),
            $allErrors   = $message.find('.help-block[data-bv-validator][data-bv-for="' + field + '"]'),
            $errors      = validatorName ? $allErrors.filter('[data-bv-validator="' + validatorName + '"]') : $allErrors,
            $icon        = $field.data('bv.icon'),
            container    = ('function' === typeof (this.options.fields[field].container || this.options.container)) ? (this.options.fields[field].container || this.options.container).call(this, $field, this) : (this.options.fields[field].container || this.options.container),
            isValidField = null;

        // Update status
        if (validatorName) {
          $field.data('bv.result.' + validatorName, status);
        } else {
          for (var v in this.options.fields[field].validators) {
            $field.data('bv.result.' + v, status);
          }
        }

        // Show/hide error elements and feedback icons
        $errors.attr('data-bv-result', status);

        // Determine the tab containing the element
        var $tabPane = $field.parents('.tab-pane'),
            tabId, $tab;
        if ($tabPane && (tabId = $tabPane.attr('id'))) {
          $tab = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent();
        }

        switch (status) {
          case this.STATUS_VALIDATING:
            isValidField = null;
            this.disableSubmitButtons(true);
            $parent.removeClass('has-success').removeClass('has-error');
            if ($icon) {
              $icon.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show();
            }
            if ($tab) {
              $tab.removeClass('bv-tab-success').removeClass('bv-tab-error');
            }
            break;

          case this.STATUS_INVALID:
            isValidField = false;
            this.disableSubmitButtons(true);
            $parent.removeClass('has-success').addClass('has-error');
            if ($icon) {
              $icon.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show();
            }
            if ($tab) {
              $tab.removeClass('bv-tab-success').addClass('bv-tab-error');
            }
            break;

          case this.STATUS_VALID:
            // If the field is valid (passes all validators)
            isValidField = ($allErrors.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED +'"]').length === 0)
                ? ($allErrors.filter('[data-bv-result="' + this.STATUS_VALID +'"]').length === $allErrors.length)  // All validators are completed
                : null;                                                                                            // There are some validators that have not done
            if (isValidField !== null) {
              this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !isValidField);
              if ($icon) {
                $icon
                    .removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid)
                    .addClass(isValidField ? this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid)
                    .show();
              }
            }

            $parent.removeClass('has-error has-success').addClass(this.isValidContainer($parent) ? 'has-success' : 'has-error');
            if ($tab) {
              $tab.removeClass('bv-tab-success').removeClass('bv-tab-error').addClass(this.isValidContainer($tabPane) ? 'bv-tab-success' : 'bv-tab-error');
            }
            break;

          case this.STATUS_NOT_VALIDATED:
          /* falls through */
          default:
            isValidField = null;
            this.disableSubmitButtons(false);
            $parent.removeClass('has-success').removeClass('has-error');
            if ($icon) {
              $icon.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide();
            }
            if ($tab) {
              $tab.removeClass('bv-tab-success').removeClass('bv-tab-error');
            }
            break;
        }

        switch (true) {
          // Only show the first error message if it is placed inside a tooltip ...
          case ($icon && 'tooltip' === container):
            (isValidField === false)
                ? $icon.css('cursor', 'pointer').tooltip('destroy').tooltip({
              container: 'body',
              html: true,
              placement: 'auto top',
              title: $allErrors.filter('[data-bv-result="' + that.STATUS_INVALID + '"]').eq(0).html()
            })
                : $icon.css('cursor', '').tooltip('destroy');
            break;
          // ... or popover
          case ($icon && 'popover' === container):
            (isValidField === false)
                ? $icon.css('cursor', 'pointer').popover('destroy').popover({
              container: 'body',
              content: $allErrors.filter('[data-bv-result="' + that.STATUS_INVALID + '"]').eq(0).html(),
              html: true,
              placement: 'auto top',
              trigger: 'hover click'
            })
                : $icon.css('cursor', '').popover('destroy');
            break;
          default:
            (status === this.STATUS_INVALID) ? $errors.show() : $errors.hide();
            break;
        }

        // Trigger an event
        $field.trigger($.Event(this.options.events.fieldStatus), {
          bv: this,
          field: field,
          element: $field,
          status: status
        });
        this._onFieldValidated($field, validatorName);
      }

      return this;
    },

    /**
     * Check the form validity
     *
     * @returns {Boolean}
     */
    isValid: function() {
      for (var field in this.options.fields) {
        if (!this.isValidField(field)) {
          return false;
        }
      }

      return true;
    },

    /**
     * Check if the field is valid or not
     *
     * @param {String|jQuery} field The field name or field element
     * @returns {Boolean}
     */
    isValidField: function(field) {
      var fields = $([]);
      switch (typeof field) {
        case 'object':
          fields = field;
          field  = field.attr('data-bv-field');
          break;
        case 'string':
          fields = this.getFieldElements(field);
          break;
        default:
          break;
      }
      if (fields.length === 0 || !this.options.fields[field] || this.options.fields[field].enabled === false) {
        return true;
      }

      var type  = fields.attr('type'),
          total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length,
          $field, validatorName, status;
      for (var i = 0; i < total; i++) {
        $field = fields.eq(i);
        if (this._isExcluded($field)) {
          continue;
        }

        for (validatorName in this.options.fields[field].validators) {
          if (this.options.fields[field].validators[validatorName].enabled === false) {
            continue;
          }

          status = $field.data('bv.result.' + validatorName);
          if (status !== this.STATUS_VALID) {
            return false;
          }
        }
      }

      return true;
    },

    /**
     * Check if all fields inside a given container are valid.
     * It's useful when working with a wizard-like such as tab, collapse
     *
     * @param {String|jQuery} container The container selector or element
     * @returns {Boolean}
     */
    isValidContainer: function(container) {
      var that       = this,
          map        = {},
          $container = ('string' === typeof container) ? $(container) : container;
      if ($container.length === 0) {
        return true;
      }

      $container.find('[data-bv-field]').each(function() {
        var $field = $(this),
            field  = $field.attr('data-bv-field');
        if (!that._isExcluded($field) && !map[field]) {
          map[field] = $field;
        }
      });

      for (var field in map) {
        var $f = map[field];
        if ($f.data('bv.messages')
            .find('.help-block[data-bv-validator][data-bv-for="' + field + '"]')
            .filter('[data-bv-result="' + this.STATUS_INVALID +'"]')
            .length > 0)
        {
          return false;
        }
      }

      return true;
    },

    /**
     * Submit the form using default submission.
     * It also does not perform any validations when submitting the form
     */
    defaultSubmit: function() {
      if (this.$submitButton) {
        // Create hidden input to send the submit buttons
        $('<input/>')
            .attr('type', 'hidden')
            .attr('data-bv-submit-hidden', '')
            .attr('name', this.$submitButton.attr('name'))
            .val(this.$submitButton.val())
            .appendTo(this.$form);
      }

      // Submit form
      this.$form.off('submit.bv').submit();
    },

    // ---
    // Useful APIs which aren't used internally
    // ---

    /**
     * Get the list of invalid fields
     *
     * @returns {jQuery[]}
     */
    getInvalidFields: function() {
      return this.$invalidFields;
    },

    /**
     * Returns the clicked submit button
     *
     * @returns {jQuery}
     */
    getSubmitButton: function() {
      return this.$submitButton;
    },

    /**
     * Get the error messages
     *
     * @param {String|jQuery} [field] The field name or field element
     * If the field is not defined, the method returns all error messages of all fields
     * @param {String} [validator] The name of validator
     * If the validator is not defined, the method returns error messages of all validators
     * @returns {String[]}
     */
    getMessages: function(field, validator) {
      var that     = this,
          messages = [],
          $fields  = $([]);

      switch (true) {
        case (field && 'object' === typeof field):
          $fields = field;
          break;
        case (field && 'string' === typeof field):
          var f = this.getFieldElements(field);
          if (f.length > 0) {
            var type = f.attr('type');
            $fields = ('radio' === type || 'checkbox' === type) ? f.eq(0) : f;
          }
          break;
        default:
          $fields = this.$invalidFields;
          break;
      }

      var filter = validator ? '[data-bv-validator="' + validator + '"]' : '';
      $fields.each(function() {
        messages = messages.concat(
            $(this)
                .data('bv.messages')
                .find('.help-block[data-bv-for="' + $(this).attr('data-bv-field') + '"][data-bv-result="' + that.STATUS_INVALID + '"]' + filter)
                .map(function() {
                  var v = $(this).attr('data-bv-validator'),
                      f = $(this).attr('data-bv-for');
                  return (that.options.fields[f].validators[v].enabled === false) ? '' : $(this).html();
                })
                .get()
        );
      });

      return messages;
    },

    /**
     * Update the option of a specific validator
     *
     * @param {String|jQuery} field The field name or field element
     * @param {String} validator The validator name
     * @param {String} option The option name
     * @param {String} value The value to set
     * @returns {BootstrapValidator}
     */
    updateOption: function(field, validator, option, value) {
      if ('object' === typeof field) {
        field = field.attr('data-bv-field');
      }
      if (this.options.fields[field] && this.options.fields[field].validators[validator]) {
        this.options.fields[field].validators[validator][option] = value;
        this.updateStatus(field, this.STATUS_NOT_VALIDATED, validator);
      }

      return this;
    },

    /**
     * Add a new field
     *
     * @param {String|jQuery} field The field name or field element
     * @param {Object} [options] The validator rules
     * @returns {BootstrapValidator}
     */
    addField: function(field, options) {
      var fields = $([]);
      switch (typeof field) {
        case 'object':
          fields = field;
          field  = field.attr('data-bv-field') || field.attr('name');
          break;
        case 'string':
          delete this._cacheFields[field];
          fields = this.getFieldElements(field);
          break;
        default:
          break;
      }

      fields.attr('data-bv-field', field);

      var type  = fields.attr('type'),
          total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

      for (var i = 0; i < total; i++) {
        var $field = fields.eq(i);

        // Try to parse the options from HTML attributes
        var opts = this._parseOptions($field);
        opts = (opts === null) ? options : $.extend(true, options, opts);

        this.options.fields[field] = $.extend(true, this.options.fields[field], opts);

        // Update the cache
        this._cacheFields[field] = this._cacheFields[field] ? this._cacheFields[field].add($field) : $field;

        // Init the element
        this._initField(('checkbox' === type || 'radio' === type) ? field : $field);
      }

      this.disableSubmitButtons(false);
      // Trigger an event
      this.$form.trigger($.Event(this.options.events.fieldAdded), {
        field: field,
        element: fields,
        options: this.options.fields[field]
      });

      return this;
    },

    /**
     * Remove a given field
     *
     * @param {String|jQuery} field The field name or field element
     * @returns {BootstrapValidator}
     */
    removeField: function(field) {
      var fields = $([]);
      switch (typeof field) {
        case 'object':
          fields = field;
          field  = field.attr('data-bv-field') || field.attr('name');
          fields.attr('data-bv-field', field);
          break;
        case 'string':
          fields = this.getFieldElements(field);
          break;
        default:
          break;
      }

      if (fields.length === 0) {
        return this;
      }

      var type  = fields.attr('type'),
          total = ('radio' === type || 'checkbox' === type) ? 1 : fields.length;

      for (var i = 0; i < total; i++) {
        var $field = fields.eq(i);

        // Remove from the list of invalid fields
        this.$invalidFields = this.$invalidFields.not($field);

        // Update the cache
        this._cacheFields[field] = this._cacheFields[field].not($field);
      }

      if (!this._cacheFields[field] || this._cacheFields[field].length === 0) {
        delete this.options.fields[field];
      }
      if ('checkbox' === type || 'radio' === type) {
        this._initField(field);
      }

      this.disableSubmitButtons(false);
      // Trigger an event
      this.$form.trigger($.Event(this.options.events.fieldRemoved), {
        field: field,
        element: fields
      });

      return this;
    },

    /**
     * Reset given field
     *
     * @param {String|jQuery} field The field name or field element
     * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
     * @returns {BootstrapValidator}
     */
    resetField: function(field, resetValue) {
      var $fields = $([]);
      switch (typeof field) {
        case 'object':
          $fields = field;
          field   = field.attr('data-bv-field');
          break;
        case 'string':
          $fields = this.getFieldElements(field);
          break;
        default:
          break;
      }

      var total = $fields.length;
      if (this.options.fields[field]) {
        for (var i = 0; i < total; i++) {
          for (var validator in this.options.fields[field].validators) {
            $fields.eq(i).removeData('bv.dfs.' + validator);
          }
        }
      }

      // Mark field as not validated yet
      this.updateStatus(field, this.STATUS_NOT_VALIDATED);

      if (resetValue) {
        var type = $fields.attr('type');
        ('radio' === type || 'checkbox' === type) ? $fields.removeAttr('checked').removeAttr('selected') : $fields.val('');
      }

      return this;
    },

    /**
     * Reset the form
     *
     * @param {Boolean} [resetValue] If true, the method resets field value to empty or remove checked/selected attribute (for radio/checkbox)
     * @returns {BootstrapValidator}
     */
    resetForm: function(resetValue) {
      for (var field in this.options.fields) {
        this.resetField(field, resetValue);
      }

      this.$invalidFields = $([]);
      this.$submitButton  = null;

      // Enable submit buttons
      this.disableSubmitButtons(false);

      return this;
    },

    /**
     * Revalidate given field
     * It's used when you need to revalidate the field which its value is updated by other plugin
     *
     * @param {String|jQuery} field The field name of field element
     * @returns {BootstrapValidator}
     */
    revalidateField: function(field) {
      this.updateStatus(field, this.STATUS_NOT_VALIDATED)
          .validateField(field);

      return this;
    },

    /**
     * Enable/Disable all validators to given field
     *
     * @param {String} field The field name
     * @param {Boolean} enabled Enable/Disable field validators
     * @param {String} [validatorName] The validator name. If null, all validators will be enabled/disabled
     * @returns {BootstrapValidator}
     */
    enableFieldValidators: function(field, enabled, validatorName) {
      var validators = this.options.fields[field].validators;

      // Enable/disable particular validator
      if (validatorName
          && validators
          && validators[validatorName] && validators[validatorName].enabled !== enabled)
      {
        this.options.fields[field].validators[validatorName].enabled = enabled;
        this.updateStatus(field, this.STATUS_NOT_VALIDATED, validatorName);
      }
      // Enable/disable all validators
      else if (!validatorName && this.options.fields[field].enabled !== enabled) {
        this.options.fields[field].enabled = enabled;
        for (var v in validators) {
          this.enableFieldValidators(field, enabled, v);
        }
      }

      return this;
    },

    /**
     * Some validators have option which its value is dynamic.
     * For example, the zipCode validator has the country option which might be changed dynamically by a select element.
     *
     * @param {jQuery|String} field The field name or element
     * @param {String|Function} option The option which can be determined by:
     * - a string
     * - name of field which defines the value
     * - name of function which returns the value
     * - a function returns the value
     *
     * The callback function has the format of
     *      callback: function(value, validator, $field) {
         *          // value is the value of field
         *          // validator is the BootstrapValidator instance
         *          // $field is the field element
         *      }
     *
     * @returns {String}
     */
    getDynamicOption: function(field, option) {
      var $field = ('string' === typeof field) ? this.getFieldElements(field) : field,
          value  = $field.val();

      // Option can be determined by
      // ... a function
      if ('function' === typeof option) {
        return $.fn.bootstrapValidator.helpers.call(option, [value, this, $field]);
      }
      // ... value of other field
      else if ('string' === typeof option) {
        var $f = this.getFieldElements(option);
        if ($f.length) {
          return $f.val();
        }
        // ... return value of callback
        else {
          return $.fn.bootstrapValidator.helpers.call(option, [value, this, $field]) || option;
        }
      }

      return null;
    },

    /**
     * Destroy the plugin
     * It will remove all error messages, feedback icons and turn off the events
     */
    destroy: function() {
      var field, fields, $field, validator, $icon, group;
      for (field in this.options.fields) {
        fields    = this.getFieldElements(field);
        group     = this.options.fields[field].group || this.options.group;
        for (var i = 0; i < fields.length; i++) {
          $field = fields.eq(i);
          $field
            // Remove all error messages
              .data('bv.messages')
              .find('.help-block[data-bv-validator][data-bv-for="' + field + '"]').remove().end()
              .end()
              .removeData('bv.messages')
            // Remove feedback classes
              .parents(group)
              .removeClass('has-feedback has-error has-success')
              .end()
            // Turn off events
              .off('.bv')
              .removeAttr('data-bv-field');

          // Remove feedback icons, tooltip/popover container
          $icon = $field.data('bv.icon');
          if ($icon) {
            var container = ('function' === typeof (this.options.fields[field].container || this.options.container)) ? (this.options.fields[field].container || this.options.container).call(this, $field, this) : (this.options.fields[field].container || this.options.container);
            switch (container) {
              case 'tooltip':
                $icon.tooltip('destroy').remove();
                break;
              case 'popover':
                $icon.popover('destroy').remove();
                break;
              default:
                $icon.remove();
                break;
            }
          }
          $field.removeData('bv.icon');

          for (validator in this.options.fields[field].validators) {
            if ($field.data('bv.dfs.' + validator)) {
              $field.data('bv.dfs.' + validator).reject();
            }
            $field.removeData('bv.result.' + validator)
                .removeData('bv.response.' + validator)
                .removeData('bv.dfs.' + validator);

            // Destroy the validator
            if ('function' === typeof $.fn.bootstrapValidator.validators[validator].destroy) {
              $.fn.bootstrapValidator.validators[validator].destroy(this, $field, this.options.fields[field].validators[validator]);
            }
          }
        }
      }

      this.disableSubmitButtons(false);   // Enable submit buttons
      this.$hiddenButton.remove();        // Remove the hidden button

      this.$form
          .removeClass(this.options.elementClass)
          .off('.bv')
          .removeData('bootstrapValidator')
        // Remove generated hidden elements
          .find('[data-bv-submit-hidden]').remove().end()
          .find('[type="submit"]').off('click.bv');
    }
  };

  // Plugin definition
  $.fn.bootstrapValidator = function(option) {
    var params = arguments;
    return this.each(function() {
      var $this   = $(this),
          data    = $this.data('bootstrapValidator'),
          options = 'object' === typeof option && option;
      if (!data) {
        data = new BootstrapValidator(this, options);
        $this.data('bootstrapValidator', data);
      }

      // Allow to call plugin method
      if ('string' === typeof option) {
        data[option].apply(data, Array.prototype.slice.call(params, 1));
      }
    });
  };

  // The default options
  // Sorted in alphabetical order
  $.fn.bootstrapValidator.DEFAULT_OPTIONS = {
    // The first invalid field will be focused automatically
    autoFocus: true,

    //The error messages container. It can be:
    // - 'tooltip' if you want to use Bootstrap tooltip to show error messages
    // - 'popover' if you want to use Bootstrap popover to show error messages
    // - a CSS selector indicating the container
    // In the first two cases, since the tooltip/popover should be small enough, the plugin only shows only one error message
    // You also can define the message container for particular field
    container: null,

    // The form CSS class
    elementClass: 'bv-form',

    // Use custom event name to avoid window.onerror being invoked by jQuery
    // See https://github.com/nghuuphuoc/bootstrapvalidator/issues/630
    events: {
      formInit: 'init.form.bv',
      formError: 'error.form.bv',
      formSuccess: 'success.form.bv',
      fieldAdded: 'added.field.bv',
      fieldRemoved: 'removed.field.bv',
      fieldInit: 'init.field.bv',
      fieldError: 'error.field.bv',
      fieldSuccess: 'success.field.bv',
      fieldStatus: 'status.field.bv',
      validatorError: 'error.validator.bv',
      validatorSuccess: 'success.validator.bv'
    },

    // Indicate fields which won't be validated
    // By default, the plugin will not validate the following kind of fields:
    // - disabled
    // - hidden
    // - invisible
    //
    // The setting consists of jQuery filters. Accept 3 formats:
    // - A string. Use a comma to separate filter
    // - An array. Each element is a filter
    // - An array. Each element can be a callback function
    //      function($field, validator) {
    //          $field is jQuery object representing the field element
    //          validator is the BootstrapValidator instance
    //          return true or false;
    //      }
    //
    // The 3 following settings are equivalent:
    //
    // 1) ':disabled, :hidden, :not(:visible)'
    // 2) [':disabled', ':hidden', ':not(:visible)']
    // 3) [':disabled', ':hidden', function($field) {
    //        return !$field.is(':visible');
    //    }]
    excluded: [':disabled', ':hidden', ':not(:visible)'],

    // Shows ok/error/loading icons based on the field validity.
    // This feature requires Bootstrap v3.1.0 or later (http://getbootstrap.com/css/#forms-control-validation).
    // Since Bootstrap doesn't provide any methods to know its version, this option cannot be on/off automatically.
    // In other word, to use this feature you have to upgrade your Bootstrap to v3.1.0 or later.
    //
    // Examples:
    // - Use Glyphicons icons:
    //  feedbackIcons: {
    //      valid: 'glyphicon glyphicon-ok',
    //      invalid: 'glyphicon glyphicon-remove',
    //      validating: 'glyphicon glyphicon-refresh'
    //  }
    // - Use FontAwesome icons:
    //  feedbackIcons: {
    //      valid: 'fa fa-check',
    //      invalid: 'fa fa-times',
    //      validating: 'fa fa-refresh'
    //  }
    feedbackIcons: {
      valid:      null,
      invalid:    null,
      validating: null
    },

    // Map the field name with validator rules
    fields: null,

    // The CSS selector for indicating the element consists the field
    // By default, each field is placed inside the <div class="form-group"></div>
    // You should adjust this option if your form group consists of many fields which not all of them need to be validated
    group: '.form-group',

    // Live validating option
    // Can be one of 3 values:
    // - enabled: The plugin validates fields as soon as they are changed
    // - disabled: Disable the live validating. The error messages are only shown after the form is submitted
    // - submitted: The live validating is enabled after the form is submitted
    live: 'enabled',

    // Default invalid message
    message: 'This value is not valid',

    // The submit buttons selector
    // These buttons will be disabled to prevent the valid form from multiple submissions
    submitButtons: '[type="submit"]',

    // The field will not be live validated if its length is less than this number of characters
    threshold: null,

    // Whether to be verbose when validating a field or not.
    // Possible values:
    // - true:  when a field has multiple validators, all of them will be checked, and respectively - if errors occur in
    //          multiple validators, all of them will be displayed to the user
    // - false: when a field has multiple validators, validation for this field will be terminated upon the first encountered error.
    //          Thus, only the very first error message related to this field will be displayed to the user
    verbose: true
  };

  // Available validators
  $.fn.bootstrapValidator.validators  = {};

  // i18n
  $.fn.bootstrapValidator.i18n        = {};

  $.fn.bootstrapValidator.Constructor = BootstrapValidator;

  // Helper methods, which can be used in validator class
  $.fn.bootstrapValidator.helpers = {
    /**
     * Execute a callback function
     *
     * @param {String|Function} functionName Can be
     * - name of global function
     * - name of namespace function (such as A.B.C)
     * - a function
     * @param {Array} args The callback arguments
     */
    call: function(functionName, args) {
      if ('function' === typeof functionName) {
        return functionName.apply(this, args);
      } else if ('string' === typeof functionName) {
        if ('()' === functionName.substring(functionName.length - 2)) {
          functionName = functionName.substring(0, functionName.length - 2);
        }
        var ns      = functionName.split('.'),
            func    = ns.pop(),
            context = window;
        for (var i = 0; i < ns.length; i++) {
          context = context[ns[i]];
        }

        return (typeof context[func] === 'undefined') ? null : context[func].apply(this, args);
      }
    },

    /**
     * Format a string
     * It's used to format the error message
     * format('The field must between %s and %s', [10, 20]) = 'The field must between 10 and 20'
     *
     * @param {String} message
     * @param {Array} parameters
     * @returns {String}
     */
    format: function(message, parameters) {
      if (!$.isArray(parameters)) {
        parameters = [parameters];
      }

      for (var i in parameters) {
        message = message.replace('%s', parameters[i]);
      }

      return message;
    },

    /**
     * Validate a date
     *
     * @param {Number} year The full year in 4 digits
     * @param {Number} month The month number
     * @param {Number} day The day number
     * @param {Boolean} [notInFuture] If true, the date must not be in the future
     * @returns {Boolean}
     */
    date: function(year, month, day, notInFuture) {
      if (isNaN(year) || isNaN(month) || isNaN(day)) {
        return false;
      }
      if (day.length > 2 || month.length > 2 || year.length > 4) {
        return false;
      }

      day   = parseInt(day, 10);
      month = parseInt(month, 10);
      year  = parseInt(year, 10);

      if (year < 1000 || year > 9999 || month <= 0 || month > 12) {
        return false;
      }
      var numDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      // Update the number of days in Feb of leap year
      if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        numDays[1] = 29;
      }

      // Check the day
      if (day <= 0 || day > numDays[month - 1]) {
        return false;
      }

      if (notInFuture === true) {
        var currentDate  = new Date(),
            currentYear  = currentDate.getFullYear(),
            currentMonth = currentDate.getMonth(),
            currentDay   = currentDate.getDate();
        return (year < currentYear
            || (year === currentYear && month - 1 < currentMonth)
            || (year === currentYear && month - 1 === currentMonth && day < currentDay));
      }

      return true;
    },

    /**
     * Implement Luhn validation algorithm
     * Credit to https://gist.github.com/ShirtlessKirk/2134376
     *
     * @see http://en.wikipedia.org/wiki/Luhn
     * @param {String} value
     * @returns {Boolean}
     */
    luhn: function(value) {
      var length  = value.length,
          mul     = 0,
          prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
          sum     = 0;

      while (length--) {
        sum += prodArr[mul][parseInt(value.charAt(length), 10)];
        mul ^= 1;
      }

      return (sum % 10 === 0 && sum > 0);
    },

    /**
     * Implement modulus 11, 10 (ISO 7064) algorithm
     *
     * @param {String} value
     * @returns {Boolean}
     */
    mod11And10: function(value) {
      var check  = 5,
          length = value.length;
      for (var i = 0; i < length; i++) {
        check = (((check || 10) * 2) % 11 + parseInt(value.charAt(i), 10)) % 10;
      }
      return (check === 1);
    },

    /**
     * Implements Mod 37, 36 (ISO 7064) algorithm
     * Usages:
     * mod37And36('A12425GABC1234002M')
     * mod37And36('002006673085', '0123456789')
     *
     * @param {String} value
     * @param {String} [alphabet]
     * @returns {Boolean}
     */
    mod37And36: function(value, alphabet) {
      alphabet = alphabet || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var modulus = alphabet.length,
          length  = value.length,
          check   = Math.floor(modulus / 2);
      for (var i = 0; i < length; i++) {
        check = (((check || modulus) * 2) % (modulus + 1) + alphabet.indexOf(value.charAt(i))) % modulus;
      }
      return (check === 1);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.base64 = $.extend($.fn.bootstrapValidator.i18n.base64 || {}, {
    'default': 'Please enter a valid base 64 encoded'
  });

  $.fn.bootstrapValidator.validators.base64 = {
    /**
     * Return true if the input value is a base 64 encoded string.
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.between = $.extend($.fn.bootstrapValidator.i18n.between || {}, {
    'default': 'Please enter a value between %s and %s',
    notInclusive: 'Please enter a value between %s and %s strictly'
  });

  $.fn.bootstrapValidator.validators.between = {
    html5Attributes: {
      message: 'message',
      min: 'min',
      max: 'max',
      inclusive: 'inclusive'
    },

    enableByHtml5: function($field) {
      if ('range' === $field.attr('type')) {
        return {
          min: $field.attr('min'),
          max: $field.attr('max')
        };
      }

      return false;
    },

    /**
     * Return true if the input value is between (strictly or not) two given numbers
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - min
     * - max
     *
     * The min, max keys define the number which the field value compares to. min, max can be
     *      - A number
     *      - Name of field which its value defines the number
     *      - Name of callback function that returns the number
     *      - A callback function that returns the number
     *
     * - inclusive [optional]: Can be true or false. Default is true
     * - message: The invalid message
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = this._format(value);
      if (!$.isNumeric(value)) {
        return false;
      }

      var min      = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
          max      = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
          minValue = this._format(min),
          maxValue = this._format(max);

      value = parseFloat(value);
      return (options.inclusive === true || options.inclusive === undefined)
          ? {
        valid: value >= minValue && value <= maxValue,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.between['default'], [min, max])
      }
          : {
        valid: value > minValue  && value <  maxValue,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.between.notInclusive, [min, max])
      };
    },

    _format: function(value) {
      return (value + '').replace(',', '.');
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.validators.blank = {
    /**
     * Placeholder validator that can be used to display a custom validation message
     * returned from the server
     * Example:
     *
     * (1) a "blank" validator is applied to an input field.
     * (2) data is entered via the UI that is unable to be validated client-side.
     * (3) server returns a 400 with JSON data that contains the field that failed
     *     validation and an associated message.
     * (4) ajax 400 call handler does the following:
     *
     *      bv.updateMessage(field, 'blank', errorMessage);
     *      bv.updateStatus(field, 'INVALID');
     *
     * @see https://github.com/nghuuphuoc/bootstrapvalidator/issues/542
     * @see https://github.com/nghuuphuoc/bootstrapvalidator/pull/666
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      return true;
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.callback = $.extend($.fn.bootstrapValidator.i18n.callback || {}, {
    'default': 'Please enter a valid value'
  });

  $.fn.bootstrapValidator.validators.callback = {
    html5Attributes: {
      message: 'message',
      callback: 'callback'
    },

    /**
     * Return result from the callback method
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - callback: The callback method that passes 2 parameters:
     *      callback: function(fieldValue, validator, $field) {
         *          // fieldValue is the value of field
         *          // validator is instance of BootstrapValidator
         *          // $field is the field element
         *      }
     * - message: The invalid message
     * @returns {Deferred}
     */
    validate: function(validator, $field, options) {
      var value  = $field.val(),
          dfd    = new $.Deferred(),
          result = { valid: true };

      if (options.callback) {
        var response = $.fn.bootstrapValidator.helpers.call(options.callback, [value, validator, $field]);
        result = ('boolean' === typeof response) ? { valid: response } :  response;
      }

      dfd.resolve($field, 'callback', result);
      return dfd;
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.choice = $.extend($.fn.bootstrapValidator.i18n.choice || {}, {
    'default': 'Please enter a valid value',
    less: 'Please choose %s options at minimum',
    more: 'Please choose %s options at maximum',
    between: 'Please choose %s - %s options'
  });

  $.fn.bootstrapValidator.validators.choice = {
    html5Attributes: {
      message: 'message',
      min: 'min',
      max: 'max'
    },

    /**
     * Check if the number of checked boxes are less or more than a given number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consists of following keys:
     * - min
     * - max
     *
     * At least one of two keys is required
     * The min, max keys define the number which the field value compares to. min, max can be
     *      - A number
     *      - Name of field which its value defines the number
     *      - Name of callback function that returns the number
     *      - A callback function that returns the number
     *
     * - message: The invalid message
     * @returns {Object}
     */
    validate: function(validator, $field, options) {
      var numChoices = $field.is('select')
              ? validator.getFieldElements($field.attr('data-bv-field')).find('option').filter(':selected').length
              : validator.getFieldElements($field.attr('data-bv-field')).filter(':checked').length,
          min        = options.min ? ($.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min)) : null,
          max        = options.max ? ($.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max)) : null,
          isValid    = true,
          message    = options.message || $.fn.bootstrapValidator.i18n.choice['default'];

      if ((min && numChoices < parseInt(min, 10)) || (max && numChoices > parseInt(max, 10))) {
        isValid = false;
      }

      switch (true) {
        case (!!min && !!max):
          message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.choice.between, [parseInt(min, 10), parseInt(max, 10)]);
          break;

        case (!!min):
          message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.choice.less, parseInt(min, 10));
          break;

        case (!!max):
          message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.choice.more, parseInt(max, 10));
          break;

        default:
          break;
      }

      return { valid: isValid, message: message };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.color = $.extend($.fn.bootstrapValidator.i18n.color || {}, {
    'default': 'Please enter a valid color'
  });

  $.fn.bootstrapValidator.validators.color = {
    SUPPORTED_TYPES: [
      'hex', 'rgb', 'rgba', 'hsl', 'hsla', 'keyword'
    ],

    KEYWORD_COLORS: [
      // Colors start with A
      'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
      // B
      'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood',
      // C
      'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
      // D
      'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
      'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
      'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray',
      'dimgrey', 'dodgerblue',
      // F
      'firebrick', 'floralwhite', 'forestgreen', 'fuchsia',
      // G
      'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey',
      // H
      'honeydew', 'hotpink',
      // I
      'indianred', 'indigo', 'ivory',
      // K
      'khaki',
      // L
      'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
      'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen',
      'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
      'linen',
      // M
      'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen',
      'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
      'mistyrose', 'moccasin',
      // N
      'navajowhite', 'navy',
      // O
      'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid',
      // P
      'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink',
      'plum', 'powderblue', 'purple',
      // R
      'red', 'rosybrown', 'royalblue',
      // S
      'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue',
      'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue',
      // T
      'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise',
      // V
      'violet',
      // W
      'wheat', 'white', 'whitesmoke',
      // Y
      'yellow', 'yellowgreen'
    ],

    /**
     * Return true if the input value is a valid color
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * - type: The array of valid color types
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var types = options.type || this.SUPPORTED_TYPES;
      if (!$.isArray(types)) {
        types = types.replace(/s/g, '').split(',');
      }

      var method,
          type,
          isValid = false;

      for (var i = 0; i < types.length; i++) {
        type    = types[i];
        method  = '_' + type.toLowerCase();
        isValid = isValid || this[method](value);
        if (isValid) {
          return true;
        }
      }

      return false;
    },

    _hex: function(value) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    },

    _hsl: function(value) {
      return /^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(value);
    },

    _hsla: function(value) {
      return /^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(value);
    },

    _keyword: function(value) {
      return $.inArray(value, this.KEYWORD_COLORS) >= 0;
    },

    _rgb: function(value) {
      var regexInteger = /^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/,
          regexPercent = /^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;
      return regexInteger.test(value) || regexPercent.test(value);
    },

    _rgba: function(value) {
      var regexInteger = /^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/,
          regexPercent = /^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;
      return regexInteger.test(value) || regexPercent.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.creditCard = $.extend($.fn.bootstrapValidator.i18n.creditCard || {}, {
    'default': 'Please enter a valid credit card number'
  });

  $.fn.bootstrapValidator.validators.creditCard = {
    /**
     * Return true if the input value is valid credit card number
     * Based on https://gist.github.com/DiegoSalazar/4075533
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} [options] Can consist of the following key:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) {
        return false;
      }
      value = value.replace(/\D/g, '');

      if (!$.fn.bootstrapValidator.helpers.luhn(value)) {
        return false;
      }

      // Validate the card number based on prefix (IIN ranges) and length
      var cards = {
        AMERICAN_EXPRESS: {
          length: [15],
          prefix: ['34', '37']
        },
        DINERS_CLUB: {
          length: [14],
          prefix: ['300', '301', '302', '303', '304', '305', '36']
        },
        DINERS_CLUB_US: {
          length: [16],
          prefix: ['54', '55']
        },
        DISCOVER: {
          length: [16],
          prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
            '62214', '62215', '62216', '62217', '62218', '62219',
            '6222', '6223', '6224', '6225', '6226', '6227', '6228',
            '62290', '62291', '622920', '622921', '622922', '622923',
            '622924', '622925', '644', '645', '646', '647', '648',
            '649', '65']
        },
        JCB: {
          length: [16],
          prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
        },
        LASER: {
          length: [16, 17, 18, 19],
          prefix: ['6304', '6706', '6771', '6709']
        },
        MAESTRO: {
          length: [12, 13, 14, 15, 16, 17, 18, 19],
          prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
        },
        MASTERCARD: {
          length: [16],
          prefix: ['51', '52', '53', '54', '55']
        },
        SOLO: {
          length: [16, 18, 19],
          prefix: ['6334', '6767']
        },
        UNIONPAY: {
          length: [16, 17, 18, 19],
          prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
            '62215', '62216', '62217', '62218', '62219', '6222', '6223',
            '6224', '6225', '6226', '6227', '6228', '62290', '62291',
            '622920', '622921', '622922', '622923', '622924', '622925']
        },
        VISA: {
          length: [16],
          prefix: ['4']
        }
      };

      var type, i;
      for (type in cards) {
        for (i in cards[type].prefix) {
          if (value.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]     // Check the prefix
              && $.inArray(value.length, cards[type].length) !== -1)                      // and length
          {
            return true;
          }
        }
      }

      return false;
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.cusip = $.extend($.fn.bootstrapValidator.i18n.cusip || {}, {
    'default': 'Please enter a valid CUSIP number'
  });

  $.fn.bootstrapValidator.validators.cusip = {
    /**
     * Validate a CUSIP
     * Examples:
     * - Valid: 037833100, 931142103, 14149YAR8, 126650BG6
     * - Invalid: 31430F200, 022615AC2
     *
     * @see http://en.wikipedia.org/wiki/CUSIP
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} [options] Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = value.toUpperCase();
      if (!/^[0-9A-Z]{9}$/.test(value)) {
        return false;
      }

      var converted = $.map(value.split(''), function(item) {
            var code = item.charCodeAt(0);
            return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
              // Replace A, B, C, ..., Z with 10, 11, ..., 35
                ? (code - 'A'.charCodeAt(0) + 10)
                : item;
          }),
          length    = converted.length,
          sum       = 0;
      for (var i = 0; i < length - 1; i++) {
        var num = parseInt(converted[i], 10);
        if (i % 2 !== 0) {
          num *= 2;
        }
        if (num > 9) {
          num -= 9;
        }
        sum += num;
      }

      sum = (10 - (sum % 10)) % 10;
      return sum === converted[length - 1];
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.cvv = $.extend($.fn.bootstrapValidator.i18n.cvv || {}, {
    'default': 'Please enter a valid CVV number'
  });

  $.fn.bootstrapValidator.validators.cvv = {
    html5Attributes: {
      message: 'message',
      ccfield: 'creditCardField'
    },

    /**
     * Return true if the input value is a valid CVV number.
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - creditCardField: The credit card number field. It can be null
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      if (!/^[0-9]{3,4}$/.test(value)) {
        return false;
      }

      if (!options.creditCardField) {
        return true;
      }

      // Get the credit card number
      var creditCard = validator.getFieldElements(options.creditCardField).val();
      if (creditCard === '') {
        return true;
      }

      creditCard = creditCard.replace(/\D/g, '');

      // Supported credit card types
      var cards = {
        AMERICAN_EXPRESS: {
          length: [15],
          prefix: ['34', '37']
        },
        DINERS_CLUB: {
          length: [14],
          prefix: ['300', '301', '302', '303', '304', '305', '36']
        },
        DINERS_CLUB_US: {
          length: [16],
          prefix: ['54', '55']
        },
        DISCOVER: {
          length: [16],
          prefix: ['6011', '622126', '622127', '622128', '622129', '62213',
            '62214', '62215', '62216', '62217', '62218', '62219',
            '6222', '6223', '6224', '6225', '6226', '6227', '6228',
            '62290', '62291', '622920', '622921', '622922', '622923',
            '622924', '622925', '644', '645', '646', '647', '648',
            '649', '65']
        },
        JCB: {
          length: [16],
          prefix: ['3528', '3529', '353', '354', '355', '356', '357', '358']
        },
        LASER: {
          length: [16, 17, 18, 19],
          prefix: ['6304', '6706', '6771', '6709']
        },
        MAESTRO: {
          length: [12, 13, 14, 15, 16, 17, 18, 19],
          prefix: ['5018', '5020', '5038', '6304', '6759', '6761', '6762', '6763', '6764', '6765', '6766']
        },
        MASTERCARD: {
          length: [16],
          prefix: ['51', '52', '53', '54', '55']
        },
        SOLO: {
          length: [16, 18, 19],
          prefix: ['6334', '6767']
        },
        UNIONPAY: {
          length: [16, 17, 18, 19],
          prefix: ['622126', '622127', '622128', '622129', '62213', '62214',
            '62215', '62216', '62217', '62218', '62219', '6222', '6223',
            '6224', '6225', '6226', '6227', '6228', '62290', '62291',
            '622920', '622921', '622922', '622923', '622924', '622925']
        },
        VISA: {
          length: [16],
          prefix: ['4']
        }
      };
      var type, i, creditCardType = null;
      for (type in cards) {
        for (i in cards[type].prefix) {
          if (creditCard.substr(0, cards[type].prefix[i].length) === cards[type].prefix[i]    // Check the prefix
              && $.inArray(creditCard.length, cards[type].length) !== -1)                     // and length
          {
            creditCardType = type;
            break;
          }
        }
      }

      return (creditCardType === null)
          ? false
          : (('AMERICAN_EXPRESS' === creditCardType) ? (value.length === 4) : (value.length === 3));
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.date = $.extend($.fn.bootstrapValidator.i18n.date || {}, {
    'default': 'Please enter a valid date',
    min: 'Please enter a date after %s',
    max: 'Please enter a date before %s',
    range: 'Please enter a date in the range %s - %s'
  });

  $.fn.bootstrapValidator.validators.date = {
    html5Attributes: {
      message: 'message',
      format: 'format',
      min: 'min',
      max: 'max',
      separator: 'separator'
    },

    /**
     * Return true if the input value is valid date
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * - min: the minimum date
     * - max: the maximum date
     * - separator: Use to separate the date, month, and year.
     * By default, it is /
     * - format: The date format. Default is MM/DD/YYYY
     * The format can be:
     *
     * i) date: Consist of DD, MM, YYYY parts which are separated by the separator option
     * ii) date and time:
     * The time can consist of h, m, s parts which are separated by :
     * ii) date, time and A (indicating AM or PM)
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      options.format = options.format || 'MM/DD/YYYY';

      // #683: Force the format to YYYY-MM-DD as the default browser behaviour when using type="date" attribute
      if ($field.attr('type') === 'date') {
        options.format = 'YYYY-MM-DD';
      }

      var formats    = options.format.split(' '),
          dateFormat = formats[0],
          timeFormat = (formats.length > 1) ? formats[1] : null,
          amOrPm     = (formats.length > 2) ? formats[2] : null,
          sections   = value.split(' '),
          date       = sections[0],
          time       = (sections.length > 1) ? sections[1] : null;

      if (formats.length !== sections.length) {
        return {
          valid: false,
          message: options.message || $.fn.bootstrapValidator.i18n.date['default']
        };
      }

      // Determine the separator
      var separator = options.separator;
      if (!separator) {
        separator = (date.indexOf('/') !== -1) ? '/' : ((date.indexOf('-') !== -1) ? '-' : null);
      }
      if (separator === null || date.indexOf(separator) === -1) {
        return {
          valid: false,
          message: options.message || $.fn.bootstrapValidator.i18n.date['default']
        };
      }

      // Determine the date
      date       = date.split(separator);
      dateFormat = dateFormat.split(separator);
      if (date.length !== dateFormat.length) {
        return {
          valid: false,
          message: options.message || $.fn.bootstrapValidator.i18n.date['default']
        };
      }

      var year  = date[$.inArray('YYYY', dateFormat)],
          month = date[$.inArray('MM', dateFormat)],
          day   = date[$.inArray('DD', dateFormat)];

      if (!year || !month || !day || year.length !== 4) {
        return {
          valid: false,
          message: options.message || $.fn.bootstrapValidator.i18n.date['default']
        };
      }

      // Determine the time
      var minutes = null, hours = null, seconds = null;
      if (timeFormat) {
        timeFormat = timeFormat.split(':');
        time       = time.split(':');

        if (timeFormat.length !== time.length) {
          return {
            valid: false,
            message: options.message || $.fn.bootstrapValidator.i18n.date['default']
          };
        }

        hours   = time.length > 0 ? time[0] : null;
        minutes = time.length > 1 ? time[1] : null;
        seconds = time.length > 2 ? time[2] : null;

        // Validate seconds
        if (seconds) {
          if (isNaN(seconds) || seconds.length > 2) {
            return {
              valid: false,
              message: options.message || $.fn.bootstrapValidator.i18n.date['default']
            };
          }
          seconds = parseInt(seconds, 10);
          if (seconds < 0 || seconds > 60) {
            return {
              valid: false,
              message: options.message || $.fn.bootstrapValidator.i18n.date['default']
            };
          }
        }

        // Validate hours
        if (hours) {
          if (isNaN(hours) || hours.length > 2) {
            return {
              valid: false,
              message: options.message || $.fn.bootstrapValidator.i18n.date['default']
            };
          }
          hours = parseInt(hours, 10);
          if (hours < 0 || hours >= 24 || (amOrPm && hours > 12)) {
            return {
              valid: false,
              message: options.message || $.fn.bootstrapValidator.i18n.date['default']
            };
          }
        }

        // Validate minutes
        if (minutes) {
          if (isNaN(minutes) || minutes.length > 2) {
            return {
              valid: false,
              message: options.message || $.fn.bootstrapValidator.i18n.date['default']
            };
          }
          minutes = parseInt(minutes, 10);
          if (minutes < 0 || minutes > 59) {
            return {
              valid: false,
              message: options.message || $.fn.bootstrapValidator.i18n.date['default']
            };
          }
        }
      }

      // Validate day, month, and year
      var valid   = $.fn.bootstrapValidator.helpers.date(year, month, day),
          message = options.message || $.fn.bootstrapValidator.i18n.date['default'];

      // declare the date, min and max objects
      var min       = null,
          max       = null,
          minOption = options.min,
          maxOption = options.max;

      if (minOption) {
        if (isNaN(Date.parse(minOption))) {
          minOption = validator.getDynamicOption($field, minOption);
        }
        min = this._parseDate(minOption, dateFormat, separator);
      }

      if (maxOption) {
        if (isNaN(Date.parse(maxOption))) {
          maxOption = validator.getDynamicOption($field, maxOption);
        }
        max = this._parseDate(maxOption, dateFormat, separator);
      }

      date = new Date(year, month, day, hours, minutes, seconds);

      switch (true) {
        case (minOption && !maxOption && valid):
          valid   = date.getTime() >= min.getTime();
          message = options.message || $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.date.min, minOption);
          break;

        case (maxOption && !minOption && valid):
          valid   = date.getTime() <= max.getTime();
          message = options.message || $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.date.max, maxOption);
          break;

        case (maxOption && minOption && valid):
          valid   = date.getTime() <= max.getTime() && date.getTime() >= min.getTime();
          message = options.message || $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.date.range, [minOption, maxOption]);
          break;

        default:
          break;
      }

      return {
        valid: valid,
        message: message
      };
    },

    /**
     * Return a date object after parsing the date string
     *
     * @param {String} date   The date string to parse
     * @param {String} format The date format
     * The format can be:
     *   - date: Consist of DD, MM, YYYY parts which are separated by the separator option
     *   - date and time:
     *     The time can consist of h, m, s parts which are separated by :
     * @param {String} separator The separator used to separate the date, month, and year
     * @returns {Date}
     */
    _parseDate: function(date, format, separator) {
      var minutes     = 0, hours = 0, seconds = 0,
          sections    = date.split(' '),
          dateSection = sections[0],
          timeSection = (sections.length > 1) ? sections[1] : null;

      dateSection = dateSection.split(separator);
      var year  = dateSection[$.inArray('YYYY', format)],
          month = dateSection[$.inArray('MM', format)],
          day   = dateSection[$.inArray('DD', format)];
      if (timeSection) {
        timeSection = timeSection.split(':');
        hours       = timeSection.length > 0 ? timeSection[0] : null;
        minutes     = timeSection.length > 1 ? timeSection[1] : null;
        seconds     = timeSection.length > 2 ? timeSection[2] : null;
      }

      return new Date(year, month, day, hours, minutes, seconds);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.different = $.extend($.fn.bootstrapValidator.i18n.different || {}, {
    'default': 'Please enter a different value'
  });

  $.fn.bootstrapValidator.validators.different = {
    html5Attributes: {
      message: 'message',
      field: 'field'
    },

    /**
     * Return true if the input value is different with given field's value
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consists of the following key:
     * - field: The name of field that will be used to compare with current one
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var fields  = options.field.split(','),
          isValid = true;

      for (var i = 0; i < fields.length; i++) {
        var compareWith = validator.getFieldElements(fields[i]);
        if (compareWith == null || compareWith.length === 0) {
          continue;
        }

        var compareValue = compareWith.val();
        if (value === compareValue) {
          isValid = false;
        } else if (compareValue !== '') {
          validator.updateStatus(compareWith, validator.STATUS_VALID, 'different');
        }
      }

      return isValid;
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.digits = $.extend($.fn.bootstrapValidator.i18n.digits || {}, {
    'default': 'Please enter only digits'
  });

  $.fn.bootstrapValidator.validators.digits = {
    /**
     * Return true if the input value contains digits only
     *
     * @param {BootstrapValidator} validator Validate plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} [options]
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      return /^\d+$/.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.ean = $.extend($.fn.bootstrapValidator.i18n.ean || {}, {
    'default': 'Please enter a valid EAN number'
  });

  $.fn.bootstrapValidator.validators.ean = {
    /**
     * Validate EAN (International Article Number)
     * Examples:
     * - Valid: 73513537, 9780471117094, 4006381333931
     * - Invalid: 73513536
     *
     * @see http://en.wikipedia.org/wiki/European_Article_Number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      if (!/^(\d{8}|\d{12}|\d{13})$/.test(value)) {
        return false;
      }

      var length = value.length,
          sum    = 0,
          weight = (length === 8) ? [3, 1] : [1, 3];
      for (var i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i % 2];
      }
      sum = (10 - sum % 10) % 10;
      return (sum + '' === value.charAt(length - 1));
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.emailAddress = $.extend($.fn.bootstrapValidator.i18n.emailAddress || {}, {
    'default': 'Please enter a valid email address'
  });

  $.fn.bootstrapValidator.validators.emailAddress = {
    html5Attributes: {
      message: 'message',
      multiple: 'multiple',
      separator: 'separator'
    },

    enableByHtml5: function($field) {
      return ('email' === $field.attr('type'));
    },

    /**
     * Return true if and only if the input value is a valid email address
     *
     * @param {BootstrapValidator} validator Validate plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} [options]
     * - multiple: Allow multiple email addresses, separated by a comma or semicolon; default is false.
     * - separator: Regex for character or characters expected as separator between addresses; default is comma /[,;]/, i.e. comma or semicolon.
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // Email address regular expression
      // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
      var emailRegExp   = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          allowMultiple = options.multiple === true || options.multiple === 'true';

      if (allowMultiple) {
        var separator = options.separator || /[,;]/,
            addresses = this._splitEmailAddresses(value, separator);

        for (var i = 0; i < addresses.length; i++) {
          if (!emailRegExp.test(addresses[i])) {
            return false;
          }
        }

        return true;
      } else {
        return emailRegExp.test(value);
      }
    },

    _splitEmailAddresses: function(emailAddresses, separator) {
      var quotedFragments     = emailAddresses.split(/"/),
          quotedFragmentCount = quotedFragments.length,
          emailAddressArray   = [],
          nextEmailAddress    = '';

      for (var i = 0; i < quotedFragmentCount; i++) {
        if (i % 2 === 0) {
          var splitEmailAddressFragments     = quotedFragments[i].split(separator),
              splitEmailAddressFragmentCount = splitEmailAddressFragments.length;

          if (splitEmailAddressFragmentCount === 1) {
            nextEmailAddress += splitEmailAddressFragments[0];
          } else {
            emailAddressArray.push(nextEmailAddress + splitEmailAddressFragments[0]);

            for (var j = 1; j < splitEmailAddressFragmentCount - 1; j++) {
              emailAddressArray.push(splitEmailAddressFragments[j]);
            }
            nextEmailAddress = splitEmailAddressFragments[splitEmailAddressFragmentCount - 1];
          }
        } else {
          nextEmailAddress += '"' + quotedFragments[i];
          if (i < quotedFragmentCount - 1) {
            nextEmailAddress += '"';
          }
        }
      }

      emailAddressArray.push(nextEmailAddress);
      return emailAddressArray;
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.file = $.extend($.fn.bootstrapValidator.i18n.file || {}, {
    'default': 'Please choose a valid file'
  });

  $.fn.bootstrapValidator.validators.file = {
    html5Attributes: {
      extension: 'extension',
      maxfiles: 'maxFiles',
      minfiles: 'minFiles',
      maxsize: 'maxSize',
      minsize: 'minSize',
      maxtotalsize: 'maxTotalSize',
      mintotalsize: 'minTotalSize',
      message: 'message',
      type: 'type'
    },

    /**
     * Validate upload file. Use HTML 5 API if the browser supports
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - extension: The allowed extensions, separated by a comma
     * - maxFiles: The maximum number of files
     * - minFiles: The minimum number of files
     * - maxSize: The maximum size in bytes
     * - minSize: The minimum size in bytes
     * - maxTotalSize: The maximum size in bytes for all files
     * - minTotalSize: The minimum size in bytes for all files
     * - message: The invalid message
     * - type: The allowed MIME type, separated by a comma
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var ext,
          extensions = options.extension ? options.extension.toLowerCase().split(',') : null,
          types      = options.type      ? options.type.toLowerCase().split(',')      : null,
          html5      = (window.File && window.FileList && window.FileReader);

      if (html5) {
        // Get FileList instance
        var files     = $field.get(0).files,
            total     = files.length,
            totalSize = 0;

        if ((options.maxFiles && total > parseInt(options.maxFiles, 10))        // Check the maxFiles
            || (options.minFiles && total < parseInt(options.minFiles, 10)))    // Check the minFiles
        {
          return false;
        }

        for (var i = 0; i < total; i++) {
          totalSize += files[i].size;
          ext        = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);

          if ((options.minSize && files[i].size < parseInt(options.minSize, 10))                      // Check the minSize
              || (options.maxSize && files[i].size > parseInt(options.maxSize, 10))                   // Check the maxSize
              || (extensions && $.inArray(ext.toLowerCase(), extensions) === -1)                      // Check file extension
              || (files[i].type && types && $.inArray(files[i].type.toLowerCase(), types) === -1))    // Check file type
          {
            return false;
          }
        }

        if ((options.maxTotalSize && totalSize > parseInt(options.maxTotalSize, 10))        // Check the maxTotalSize
            || (options.minTotalSize && totalSize < parseInt(options.minTotalSize, 10)))    // Check the minTotalSize
        {
          return false;
        }
      } else {
        // Check file extension
        ext = value.substr(value.lastIndexOf('.') + 1);
        if (extensions && $.inArray(ext.toLowerCase(), extensions) === -1) {
          return false;
        }
      }

      return true;
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.greaterThan = $.extend($.fn.bootstrapValidator.i18n.greaterThan || {}, {
    'default': 'Please enter a value greater than or equal to %s',
    notInclusive: 'Please enter a value greater than %s'
  });

  $.fn.bootstrapValidator.validators.greaterThan = {
    html5Attributes: {
      message: 'message',
      value: 'value',
      inclusive: 'inclusive'
    },

    enableByHtml5: function($field) {
      var type = $field.attr('type'),
          min  = $field.attr('min');
      if (min && type !== 'date') {
        return {
          value: min
        };
      }

      return false;
    },

    /**
     * Return true if the input value is greater than or equals to given number
     *
     * @param {BootstrapValidator} validator Validate plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - value: Define the number to compare with. It can be
     *      - A number
     *      - Name of field which its value defines the number
     *      - Name of callback function that returns the number
     *      - A callback function that returns the number
     *
     * - inclusive [optional]: Can be true or false. Default is true
     * - message: The invalid message
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = this._format(value);
      if (!$.isNumeric(value)) {
        return false;
      }

      var compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
          compareToValue = this._format(compareTo);

      value = parseFloat(value);
      return (options.inclusive === true || options.inclusive === undefined)
          ? {
        valid: value >= compareToValue,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.greaterThan['default'], compareTo)
      }
          : {
        valid: value > compareToValue,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.greaterThan.notInclusive, compareTo)
      };
    },

    _format: function(value) {
      return (value + '').replace(',', '.');
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.grid = $.extend($.fn.bootstrapValidator.i18n.grid || {}, {
    'default': 'Please enter a valid GRId number'
  });

  $.fn.bootstrapValidator.validators.grid = {
    /**
     * Validate GRId (Global Release Identifier)
     * Examples:
     * - Valid: A12425GABC1234002M, A1-2425G-ABC1234002-M, A1 2425G ABC1234002 M, Grid:A1-2425G-ABC1234002-M
     * - Invalid: A1-2425G-ABC1234002-Q
     *
     * @see http://en.wikipedia.org/wiki/Global_Release_Identifier
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = value.toUpperCase();
      if (!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(value)) {
        return false;
      }
      value = value.replace(/\s/g, '').replace(/-/g, '');
      if ('GRID:' === value.substr(0, 5)) {
        value = value.substr(5);
      }
      return $.fn.bootstrapValidator.helpers.mod37And36(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.hex = $.extend($.fn.bootstrapValidator.i18n.hex || {}, {
    'default': 'Please enter a valid hexadecimal number'
  });

  $.fn.bootstrapValidator.validators.hex = {
    /**
     * Return true if and only if the input value is a valid hexadecimal number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      return /^[0-9a-fA-F]+$/.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.hexColor = $.extend($.fn.bootstrapValidator.i18n.hexColor || {}, {
    'default': 'Please enter a valid hex color'
  });

  $.fn.bootstrapValidator.validators.hexColor = {
    enableByHtml5: function($field) {
      return ('color' === $field.attr('type'));
    },

    /**
     * Return true if the input value is a valid hex color
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      return ('color' === $field.attr('type'))
        // Only accept 6 hex character values due to the HTML 5 spec
        // See http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value
          ? /^#[0-9A-F]{6}$/i.test(value)
          : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.iban = $.extend($.fn.bootstrapValidator.i18n.iban || {}, {
    'default': 'Please enter a valid IBAN number',
    countryNotSupported: 'The country code %s is not supported',
    country: 'Please enter a valid IBAN number in %s',
    countries: {
      AD: 'Andorra',
      AE: 'United Arab Emirates',
      AL: 'Albania',
      AO: 'Angola',
      AT: 'Austria',
      AZ: 'Azerbaijan',
      BA: 'Bosnia and Herzegovina',
      BE: 'Belgium',
      BF: 'Burkina Faso',
      BG: 'Bulgaria',
      BH: 'Bahrain',
      BI: 'Burundi',
      BJ: 'Benin',
      BR: 'Brazil',
      CH: 'Switzerland',
      CI: 'Ivory Coast',
      CM: 'Cameroon',
      CR: 'Costa Rica',
      CV: 'Cape Verde',
      CY: 'Cyprus',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DK: 'Denmark',
      DO: 'Dominican Republic',
      DZ: 'Algeria',
      EE: 'Estonia',
      ES: 'Spain',
      FI: 'Finland',
      FO: 'Faroe Islands',
      FR: 'France',
      GB: 'United Kingdom',
      GE: 'Georgia',
      GI: 'Gibraltar',
      GL: 'Greenland',
      GR: 'Greece',
      GT: 'Guatemala',
      HR: 'Croatia',
      HU: 'Hungary',
      IE: 'Ireland',
      IL: 'Israel',
      IR: 'Iran',
      IS: 'Iceland',
      IT: 'Italy',
      JO: 'Jordan',
      KW: 'Kuwait',
      KZ: 'Kazakhstan',
      LB: 'Lebanon',
      LI: 'Liechtenstein',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      LV: 'Latvia',
      MC: 'Monaco',
      MD: 'Moldova',
      ME: 'Montenegro',
      MG: 'Madagascar',
      MK: 'Macedonia',
      ML: 'Mali',
      MR: 'Mauritania',
      MT: 'Malta',
      MU: 'Mauritius',
      MZ: 'Mozambique',
      NL: 'Netherlands',
      NO: 'Norway',
      PK: 'Pakistan',
      PL: 'Poland',
      PS: 'Palestine',
      PT: 'Portugal',
      QA: 'Qatar',
      RO: 'Romania',
      RS: 'Serbia',
      SA: 'Saudi Arabia',
      SE: 'Sweden',
      SI: 'Slovenia',
      SK: 'Slovakia',
      SM: 'San Marino',
      SN: 'Senegal',
      TN: 'Tunisia',
      TR: 'Turkey',
      VG: 'Virgin Islands, British'
    }
  });

  $.fn.bootstrapValidator.validators.iban = {
    html5Attributes: {
      message: 'message',
      country: 'country'
    },

    // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
    // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
    REGEX: {
      AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',                       // Andorra
      AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',                                  // United Arab Emirates
      AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',                               // Albania
      AO: 'AO[0-9]{2}[0-9]{21}',                                          // Angola
      AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Austria
      AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',                               // Azerbaijan
      BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',                   // Bosnia and Herzegovina
      BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',                           // Belgium
      BF: 'BF[0-9]{2}[0-9]{23}',                                          // Burkina Faso
      BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',                // Bulgaria
      BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',                               // Bahrain
      BI: 'BI[0-9]{2}[0-9]{12}',                                          // Burundi
      BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Benin
      BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',             // Brazil
      CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Switzerland
      CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Ivory Coast
      CM: 'CM[0-9]{2}[0-9]{23}',                                          // Cameroon
      CR: 'CR[0-9]{2}[0-9]{3}[0-9]{14}',                                  // Costa Rica
      CV: 'CV[0-9]{2}[0-9]{21}',                                          // Cape Verde
      CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',                       // Cyprus
      CZ: 'CZ[0-9]{2}[0-9]{20}',                                          // Czech Republic
      DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',                                  // Germany
      DK: 'DK[0-9]{2}[0-9]{14}',                                          // Denmark
      DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',                               // Dominican Republic
      DZ: 'DZ[0-9]{2}[0-9]{20}',                                          // Algeria
      EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',                  // Estonia
      ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',          // Spain
      FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',                           // Finland
      FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Faroe Islands
      FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // France
      GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // United Kingdom
      GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',                                  // Georgia
      GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',                               // Gibraltar
      GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',                           // Greenland
      GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',                       // Greece
      GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',                            // Guatemala
      HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',                                  // Croatia
      HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',          // Hungary
      IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',                           // Ireland
      IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',                          // Israel
      IR: 'IR[0-9]{2}[0-9]{22}',                                          // Iran
      IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',                  // Iceland
      IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // Italy
      JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',                 // Jordan
      KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',                                  // Kuwait
      KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Kazakhstan
      LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',                               // Lebanon
      LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',                               // Liechtenstein
      LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',                                  // Lithuania
      LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',                               // Luxembourg
      LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',                               // Latvia
      MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',               // Monaco
      MD: 'MD[0-9]{2}[A-Z0-9]{20}',                                       // Moldova
      ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Montenegro
      MG: 'MG[0-9]{2}[0-9]{23}',                                          // Madagascar
      MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',                       // Macedonia
      ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Mali
      MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',                        // Mauritania
      MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',                       // Malta
      MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',  // Mauritius
      MZ: 'MZ[0-9]{2}[0-9]{21}',                                          // Mozambique
      NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',                                  // Netherlands
      NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',                           // Norway
      PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Pakistan
      PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',                                  // Poland
      PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Palestinian
      PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',                  // Portugal
      QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',                               // Qatar
      RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',                               // Romania
      RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                          // Serbia
      SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',                               // Saudi Arabia
      SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',                          // Sweden
      SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',                           // Slovenia
      SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',                          // Slovakia
      SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',               // San Marino
      SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',                                  // Senegal
      TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',                        // Tunisia
      TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',                    // Turkey
      VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}'                                   // Virgin Islands, British
    },

    /**
     * Validate an International Bank Account Number (IBAN)
     * To test it, take the sample IBAN from
     * http://www.nordea.com/Our+services/International+products+and+services/Cash+Management/IBAN+countries/908462.html
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * - country: The ISO 3166-1 country code. It can be
     *      - A country code
     *      - Name of field which its value defines the country code
     *      - Name of callback function that returns the country code
     *      - A callback function that returns the country code
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
      var country = options.country;
      if (!country) {
        country = value.substr(0, 2);
      } else if (typeof country !== 'string' || !this.REGEX[country]) {
        // Determine the country code
        country = validator.getDynamicOption($field, country);
      }

      if (!this.REGEX[country]) {
        return {
          valid: false,
          message: $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.iban.countryNotSupported, country)
        };
      }

      if (!(new RegExp('^' + this.REGEX[country] + '$')).test(value)) {
        return {
          valid: false,
          message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.iban.country, $.fn.bootstrapValidator.i18n.iban.countries[country])
        };
      }

      value = value.substr(4) + value.substr(0, 4);
      value = $.map(value.split(''), function(n) {
        var code = n.charCodeAt(0);
        return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
          // Replace A, B, C, ..., Z with 10, 11, ..., 35
            ? (code - 'A'.charCodeAt(0) + 10)
            : n;
      });
      value = value.join('');

      var temp   = parseInt(value.substr(0, 1), 10),
          length = value.length;
      for (var i = 1; i < length; ++i) {
        temp = (temp * 10 + parseInt(value.substr(i, 1), 10)) % 97;
      }

      return {
        valid: (temp === 1),
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.iban.country, $.fn.bootstrapValidator.i18n.iban.countries[country])
      };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.id = $.extend($.fn.bootstrapValidator.i18n.id || {}, {
    'default': 'Please enter a valid identification number',
    countryNotSupported: 'The country code %s is not supported',
    country: 'Please enter a valid identification number in %s',
    countries: {
      BA: 'Bosnia and Herzegovina',
      BG: 'Bulgaria',
      BR: 'Brazil',
      CH: 'Switzerland',
      CL: 'Chile',
      CN: 'China',
      CZ: 'Czech Republic',
      DK: 'Denmark',
      EE: 'Estonia',
      ES: 'Spain',
      FI: 'Finland',
      HR: 'Croatia',
      IE: 'Ireland',
      IS: 'Iceland',
      LT: 'Lithuania',
      LV: 'Latvia',
      ME: 'Montenegro',
      MK: 'Macedonia',
      NL: 'Netherlands',
      RO: 'Romania',
      RS: 'Serbia',
      SE: 'Sweden',
      SI: 'Slovenia',
      SK: 'Slovakia',
      SM: 'San Marino',
      TH: 'Thailand',
      ZA: 'South Africa'
    }
  });

  $.fn.bootstrapValidator.validators.id = {
    html5Attributes: {
      message: 'message',
      country: 'country'
    },

    // Supported country codes
    COUNTRY_CODES: [
      'BA', 'BG', 'BR', 'CH', 'CL', 'CN', 'CZ', 'DK', 'EE', 'ES', 'FI', 'HR', 'IE', 'IS', 'LT', 'LV', 'ME', 'MK', 'NL',
      'RO', 'RS', 'SE', 'SI', 'SK', 'SM', 'TH', 'ZA'
    ],

    /**
     * Validate identification number in different countries
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - country: The ISO 3166-1 country code. It can be
     *      - One of country code defined in COUNTRY_CODES
     *      - Name of field which its value defines the country code
     *      - Name of callback function that returns the country code
     *      - A callback function that returns the country code
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var country = options.country;
      if (!country) {
        country = value.substr(0, 2);
      } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
        // Determine the country code
        country = validator.getDynamicOption($field, country);
      }

      if ($.inArray(country, this.COUNTRY_CODES) === -1) {
        return { valid: false, message: $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.id.countryNotSupported, country) };
      }

      var method  = ['_', country.toLowerCase()].join('');
      return this[method](value)
          ? true
          : {
        valid: false,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.id.country, $.fn.bootstrapValidator.i18n.id.countries[country.toUpperCase()])
      };
    },

    /**
     * Validate Unique Master Citizen Number which uses in
     * - Bosnia and Herzegovina (country code: BA)
     * - Macedonia (MK)
     * - Montenegro (ME)
     * - Serbia (RS)
     * - Slovenia (SI)
     *
     * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
     * @param {String} value The ID
     * @param {String} countryCode The ISO country code, can be BA, MK, ME, RS, SI
     * @returns {Boolean}
     */
    _validateJMBG: function(value, countryCode) {
      if (!/^\d{13}$/.test(value)) {
        return false;
      }
      var day   = parseInt(value.substr(0, 2), 10),
          month = parseInt(value.substr(2, 2), 10),
          year  = parseInt(value.substr(4, 3), 10),
          rr    = parseInt(value.substr(7, 2), 10),
          k     = parseInt(value.substr(12, 1), 10);

      // Validate date of birth
      // FIXME: Validate the year of birth
      if (day > 31 || month > 12) {
        return false;
      }

      // Validate checksum
      var sum = 0;
      for (var i = 0; i < 6; i++) {
        sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
      }
      sum = 11 - sum % 11;
      if (sum === 10 || sum === 11) {
        sum = 0;
      }
      if (sum !== k) {
        return false;
      }

      // Validate political region
      // rr is the political region of birth, which can be in ranges:
      // 10-19: Bosnia and Herzegovina
      // 20-29: Montenegro
      // 30-39: Croatia (not used anymore)
      // 41-49: Macedonia
      // 50-59: Slovenia (only 50 is used)
      // 70-79: Central Serbia
      // 80-89: Serbian province of Vojvodina
      // 90-99: Kosovo
      switch (countryCode.toUpperCase()) {
        case 'BA':
          return (10 <= rr && rr <= 19);
        case 'MK':
          return (41 <= rr && rr <= 49);
        case 'ME':
          return (20 <= rr && rr <= 29);
        case 'RS':
          return (70 <= rr && rr <= 99);
        case 'SI':
          return (50 <= rr && rr <= 59);
        default:
          return true;
      }
    },

    _ba: function(value) {
      return this._validateJMBG(value, 'BA');
    },
    _mk: function(value) {
      return this._validateJMBG(value, 'MK');
    },
    _me: function(value) {
      return this._validateJMBG(value, 'ME');
    },
    _rs: function(value) {
      return this._validateJMBG(value, 'RS');
    },

    /**
     * Examples: 0101006500006
     */
    _si: function(value) {
      return this._validateJMBG(value, 'SI');
    },

    /**
     * Validate Bulgarian national identification number (EGN)
     * Examples:
     * - Valid: 7523169263, 8032056031, 803205 603 1, 8001010008, 7501020018, 7552010005, 7542011030
     * - Invalid: 8019010008
     *
     * @see http://en.wikipedia.org/wiki/Uniform_civil_number
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _bg: function(value) {
      if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
        return false;
      }
      value = value.replace(/\s/g, '');
      // Check the birth date
      var year  = parseInt(value.substr(0, 2), 10) + 1900,
          month = parseInt(value.substr(2, 2), 10),
          day   = parseInt(value.substr(4, 2), 10);
      if (month > 40) {
        year += 100;
        month -= 40;
      } else if (month > 20) {
        year -= 100;
        month -= 20;
      }

      if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
        return false;
      }

      var sum    = 0,
          weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      for (var i = 0; i < 9; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = (sum % 11) % 10;
      return (sum + '' === value.substr(9, 1));
    },

    /**
     * Validate Brazilian national identification number (CPF)
     * Examples:
     * - Valid: 39053344705, 390.533.447-05, 111.444.777-35
     * - Invalid: 231.002.999-00
     *
     * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _br: function(value) {
      if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(value)) {
        return false;
      }
      if (!/^\d{11}$/.test(value) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) {
        return false;
      }
      value = value.replace(/\./g, '').replace(/-/g, '');

      var d1 = 0;
      for (var i = 0; i < 9; i++) {
        d1 += (10 - i) * parseInt(value.charAt(i), 10);
      }
      d1 = 11 - d1 % 11;
      if (d1 === 10 || d1 === 11) {
        d1 = 0;
      }
      if (d1 + '' !== value.charAt(9)) {
        return false;
      }

      var d2 = 0;
      for (i = 0; i < 10; i++) {
        d2 += (11 - i) * parseInt(value.charAt(i), 10);
      }
      d2 = 11 - d2 % 11;
      if (d2 === 10 || d2 === 11) {
        d2 = 0;
      }

      return (d2 + '' === value.charAt(10));
    },

    /**
     * Validate Swiss Social Security Number (AHV-Nr/No AVS)
     * Examples:
     * - Valid: 756.1234.5678.95, 7561234567895
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
     * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _ch: function(value) {
      if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(value)) {
        return false;
      }
      value = value.replace(/\D/g, '').substr(3);
      var length = value.length,
          sum    = 0,
          weight = (length === 8) ? [3, 1] : [1, 3];
      for (var i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i % 2];
      }
      sum = 10 - sum % 10;
      return (sum + '' === value.charAt(length - 1));
    },

    /**
     * Validate Chilean national identification number (RUN/RUT)
     * Examples:
     * - Valid: 76086428-5, 22060449-7, 12531909-2
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
     * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _cl: function(value) {
      if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
        return false;
      }
      value = value.replace(/\-/g, '');
      while (value.length < 9) {
        value = '0' + value;
      }
      var sum    = 0,
          weight = [3, 2, 7, 6, 5, 4, 3, 2];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = 11 - sum % 11;
      if (sum === 11) {
        sum = 0;
      } else if (sum === 10) {
        sum = 'K';
      }
      return sum + '' === value.charAt(8).toUpperCase();
    },

    /**
     * Validate Chinese citizen identification number
     *
     * Rules:
     * - For current 18-digit system (since 1st Oct 1999, defined by GB11643â€”1999 national standard):
     *     - Digit 0-5: Must be a valid administrative division code of China PR.
     *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
     *     - Digit 14-16: Order code, any integer.
     *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
     *       Both upper/lower case of X are tolerated.
     * - For deprecated 15-digit system:
     *     - Digit 0-5: Must be a valid administrative division code of China PR.
     *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
     *     - Digit 12-14: Order code, any integer.
     * Lists of valid administrative division codes of China PR can be seen here:
     * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
     * Published and maintained by National Bureau of Statistics of China PR.
     * NOTE: Current and deprecated codes MUST BOTH be considered valid.
     * Many Chinese citizens born in once existed administrative divisions!
     *
     * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _cn: function(value) {
      // Basic format check (18 or 15 digits, considering X in checksum)
      value = value.trim();
      if (!/^\d{15}$/.test(value) && !/^\d{17}[\dXx]{1}$/.test(value)) {
        return false;
      }

      // Check China PR Administrative division code
      var adminDivisionCodes = {
        11: {
          0: [0],
          1: [[0, 9], [11, 17]],
          2: [0, 28, 29]
        },
        12: {
          0: [0],
          1: [[0, 16]],
          2: [0, 21, 23, 25]
        },
        13: {
          0: [0],
          1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
          2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
          3: [[0, 4], [21, 24]],
          4: [[0, 4], 6, 21, [23, 35], 81],
          5: [[0, 3], [21, 35], 81, 82],
          6: [[0, 4], [21, 38], [81, 84]],
          7: [[0, 3], 5, 6, [21, 33]],
          8: [[0, 4], [21, 28]],
          9: [[0, 3], [21, 30], [81, 84]],
          10: [[0, 3], [22, 26], 28, 81, 82],
          11: [[0, 2], [21, 28], 81, 82]
        },
        14: {
          0: [0],
          1: [0, 1, [5, 10], [21, 23], 81],
          2: [[0, 3], 11, 12, [21, 27]],
          3: [[0, 3], 11, 21, 22],
          4: [[0, 2], 11, 21, [23, 31], 81],
          5: [[0, 2], 21, 22, 24, 25, 81],
          6: [[0, 3], [21, 24]],
          7: [[0, 2], [21, 29], 81],
          8: [[0, 2], [21, 30], 81, 82],
          9: [[0, 2], [21, 32], 81],
          10: [[0, 2], [21, 34], 81, 82],
          11: [[0, 2], [21, 30], 81, 82],
          23: [[0, 3], 22, 23, [25, 30], 32, 33]
        },
        15: {
          0: [0],
          1: [[0, 5], [21, 25]],
          2: [[0, 7], [21, 23]],
          3: [[0, 4]],
          4: [[0, 4], [21, 26], [28, 30]],
          5: [[0, 2], [21, 26], 81],
          6: [[0, 2], [21, 27]],
          7: [[0, 3], [21, 27], [81, 85]],
          8: [[0, 2], [21, 26]],
          9: [[0, 2], [21, 29], 81],
          22: [[0, 2], [21, 24]],
          25: [[0, 2], [22, 31]],
          26: [[0, 2], [24, 27], [29, 32], 34],
          28: [0, 1, [22, 27]],
          29: [0, [21, 23]]
        },
        21: {
          0: [0],
          1: [[0, 6], [11, 14], [22, 24], 81],
          2: [[0, 4], [11, 13], 24, [81, 83]],
          3: [[0, 4], 11, 21, 23, 81],
          4: [[0, 4], 11, [21, 23]],
          5: [[0, 5], 21, 22],
          6: [[0, 4], 24, 81, 82],
          7: [[0, 3], 11, 26, 27, 81, 82],
          8: [[0, 4], 11, 81, 82],
          9: [[0, 5], 11, 21, 22],
          10: [[0, 5], 11, 21, 81],
          11: [[0, 3], 21, 22],
          12: [[0, 2], 4, 21, 23, 24, 81, 82],
          13: [[0, 3], 21, 22, 24, 81, 82],
          14: [[0, 4], 21, 22, 81]
        },
        22: {
          0: [0],
          1: [[0, 6], 12, 22, [81, 83]],
          2: [[0, 4], 11, 21, [81, 84]],
          3: [[0, 3], 22, 23, 81, 82],
          4: [[0, 3], 21, 22],
          5: [[0, 3], 21, 23, 24, 81, 82],
          6: [[0, 2], 4, 5, [21, 23], 25, 81],
          7: [[0, 2], [21, 24], 81],
          8: [[0, 2], 21, 22, 81, 82],
          24: [[0, 6], 24, 26]
        },
        23: {
          0: [0],
          1: [[0, 12], 21, [23, 29], [81, 84]],
          2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
          3: [[0, 7], 21, 81, 82],
          4: [[0, 7], 21, 22],
          5: [[0, 3], 5, 6, [21, 24]],
          6: [[0, 6], [21, 24]],
          7: [[0, 16], 22, 81],
          8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
          9: [[0, 4], 21],
          10: [[0, 5], 24, 25, 81, [83, 85]],
          11: [[0, 2], 21, 23, 24, 81, 82],
          12: [[0, 2], [21, 26], [81, 83]],
          27: [[0, 4], [21, 23]]
        },
        31: {
          0: [0],
          1: [0, 1, [3, 10], [12, 20]],
          2: [0, 30]
        },
        32: {
          0: [0],
          1: [[0, 7], 11, [13, 18], 24, 25],
          2: [[0, 6], 11, 81, 82],
          3: [[0, 5], 11, 12, [21, 24], 81, 82],
          4: [[0, 2], 4, 5, 11, 12, 81, 82],
          5: [[0, 9], [81, 85]],
          6: [[0, 2], 11, 12, 21, 23, [81, 84]],
          7: [0, 1, 3, 5, 6, [21, 24]],
          8: [[0, 4], 11, 26, [29, 31]],
          9: [[0, 3], [21, 25], 28, 81, 82],
          10: [[0, 3], 11, 12, 23, 81, 84, 88],
          11: [[0, 2], 11, 12, [81, 83]],
          12: [[0, 4], [81, 84]],
          13: [[0, 2], 11, [21, 24]]
        },
        33: {
          0: [0],
          1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
          2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
          3: [[0, 4], 22, 24, [26, 29], 81, 82],
          4: [[0, 2], 11, 21, 24, [81, 83]],
          5: [[0, 3], [21, 23]],
          6: [[0, 2], 21, 24, [81, 83]],
          7: [[0, 3], 23, 26, 27, [81, 84]],
          8: [[0, 3], 22, 24, 25, 81],
          9: [[0, 3], 21, 22],
          10: [[0, 4], [21, 24], 81, 82],
          11: [[0, 2], [21, 27], 81]
        },
        34: {
          0: [0],
          1: [[0, 4], 11, [21, 24], 81],
          2: [[0, 4], 7, 8, [21, 23], 25],
          3: [[0, 4], 11, [21, 23]],
          4: [[0, 6], 21],
          5: [[0, 4], 6, [21, 23]],
          6: [[0, 4], 21],
          7: [[0, 3], 11, 21],
          8: [[0, 3], 11, [22, 28], 81],
          10: [[0, 4], [21, 24]],
          11: [[0, 3], 22, [24, 26], 81, 82],
          12: [[0, 4], 21, 22, 25, 26, 82],
          13: [[0, 2], [21, 24]],
          14: [[0, 2], [21, 24]],
          15: [[0, 3], [21, 25]],
          16: [[0, 2], [21, 23]],
          17: [[0, 2], [21, 23]],
          18: [[0, 2], [21, 25], 81]
        },
        35: {
          0: [0],
          1: [[0, 5], 11, [21, 25], 28, 81, 82],
          2: [[0, 6], [11, 13]],
          3: [[0, 5], 22],
          4: [[0, 3], 21, [23, 30], 81],
          5: [[0, 5], 21, [24, 27], [81, 83]],
          6: [[0, 3], [22, 29], 81],
          7: [[0, 2], [21, 25], [81, 84]],
          8: [[0, 2], [21, 25], 81],
          9: [[0, 2], [21, 26], 81, 82]
        },
        36: {
          0: [0],
          1: [[0, 5], 11, [21, 24]],
          2: [[0, 3], 22, 81],
          3: [[0, 2], 13, [21, 23]],
          4: [[0, 3], 21, [23, 30], 81, 82],
          5: [[0, 2], 21],
          6: [[0, 2], 22, 81],
          7: [[0, 2], [21, 35], 81, 82],
          8: [[0, 3], [21, 30], 81],
          9: [[0, 2], [21, 26], [81, 83]],
          10: [[0, 2], [21, 30]],
          11: [[0, 2], [21, 30], 81]
        },
        37: {
          0: [0],
          1: [[0, 5], 12, 13, [24, 26], 81],
          2: [[0, 3], 5, [11, 14], [81, 85]],
          3: [[0, 6], [21, 23]],
          4: [[0, 6], 81],
          5: [[0, 3], [21, 23]],
          6: [[0, 2], [11, 13], 34, [81, 87]],
          7: [[0, 5], 24, 25, [81, 86]],
          8: [[0, 2], 11, [26, 32], [81, 83]],
          9: [[0, 3], 11, 21, 23, 82, 83],
          10: [[0, 2], [81, 83]],
          11: [[0, 3], 21, 22],
          12: [[0, 3]],
          13: [[0, 2], 11, 12, [21, 29]],
          14: [[0, 2], [21, 28], 81, 82],
          15: [[0, 2], [21, 26], 81],
          16: [[0, 2], [21, 26]],
          17: [[0, 2], [21, 28]]
        },
        41: {
          0: [0],
          1: [[0, 6], 8, 22, [81, 85]],
          2: [[0, 5], 11, [21, 25]],
          3: [[0, 7], 11, [22, 29], 81],
          4: [[0, 4], 11, [21, 23], 25, 81, 82],
          5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
          6: [[0, 3], 11, 21, 22],
          7: [[0, 4], 11, 21, [24, 28], 81, 82],
          8: [[0, 4], 11, [21, 23], 25, [81, 83]],
          9: [[0, 2], 22, 23, [26, 28]],
          10: [[0, 2], [23, 25], 81, 82],
          11: [[0, 4], [21, 23]],
          12: [[0, 2], 21, 22, 24, 81, 82],
          13: [[0, 3], [21, 30], 81],
          14: [[0, 3], [21, 26], 81],
          15: [[0, 3], [21, 28]],
          16: [[0, 2], [21, 28], 81],
          17: [[0, 2], [21, 29]],
          90: [0, 1]
        },
        42: {
          0: [0],
          1: [[0, 7], [11, 17]],
          2: [[0, 5], 22, 81],
          3: [[0, 3], [21, 25], 81],
          5: [[0, 6], [25, 29], [81, 83]],
          6: [[0, 2], 6, 7, [24, 26], [82, 84]],
          7: [[0, 4]],
          8: [[0, 2], 4, 21, 22, 81],
          9: [[0, 2], [21, 23], 81, 82, 84],
          10: [[0, 3], [22, 24], 81, 83, 87],
          11: [[0, 2], [21, 27], 81, 82],
          12: [[0, 2], [21, 24], 81],
          13: [[0, 3], 21, 81],
          28: [[0, 2], 22, 23, [25, 28]],
          90: [0, [4, 6], 21]
        },
        43: {
          0: [0],
          1: [[0, 5], 11, 12, 21, 22, 24, 81],
          2: [[0, 4], 11, 21, [23, 25], 81],
          3: [[0, 2], 4, 21, 81, 82],
          4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
          5: [[0, 3], 11, [21, 25], [27, 29], 81],
          6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
          7: [[0, 3], [21, 26], 81],
          8: [[0, 2], 11, 21, 22],
          9: [[0, 3], [21, 23], 81],
          10: [[0, 3], [21, 28], 81],
          11: [[0, 3], [21, 29]],
          12: [[0, 2], [21, 30], 81],
          13: [[0, 2], 21, 22, 81, 82],
          31: [0, 1, [22, 27], 30]
        },
        44: {
          0: [0],
          1: [[0, 7], [11, 16], 83, 84],
          2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
          3: [0, 1, [3, 8]],
          4: [[0, 4]],
          5: [0, 1, [6, 15], 23, 82, 83],
          6: [0, 1, [4, 8]],
          7: [0, 1, [3, 5], 81, [83, 85]],
          8: [[0, 4], 11, 23, 25, [81, 83]],
          9: [[0, 3], 23, [81, 83]],
          12: [[0, 3], [23, 26], 83, 84],
          13: [[0, 3], [22, 24], 81],
          14: [[0, 2], [21, 24], 26, 27, 81],
          15: [[0, 2], 21, 23, 81],
          16: [[0, 2], [21, 25]],
          17: [[0, 2], 21, 23, 81],
          18: [[0, 3], 21, 23, [25, 27], 81, 82],
          19: [0],
          20: [0],
          51: [[0, 3], 21, 22],
          52: [[0, 3], 21, 22, 24, 81],
          53: [[0, 2], [21, 23], 81]
        },
        45: {
          0: [0],
          1: [[0, 9], [21, 27]],
          2: [[0, 5], [21, 26]],
          3: [[0, 5], 11, 12, [21, 32]],
          4: [0, 1, [3, 6], 11, [21, 23], 81],
          5: [[0, 3], 12, 21],
          6: [[0, 3], 21, 81],
          7: [[0, 3], 21, 22],
          8: [[0, 4], 21, 81],
          9: [[0, 3], [21, 24], 81],
          10: [[0, 2], [21, 31]],
          11: [[0, 2], [21, 23]],
          12: [[0, 2], [21, 29], 81],
          13: [[0, 2], [21, 24], 81],
          14: [[0, 2], [21, 25], 81]
        },
        46: {
          0: [0],
          1: [0, 1, [5, 8]],
          2: [0, 1],
          3: [0, [21, 23]],
          90: [[0, 3], [5, 7], [21, 39]]
        },
        50: {
          0: [0],
          1: [[0, 19]],
          2: [0, [22, 38], [40, 43]],
          3: [0, [81, 84]]
        },
        51: {
          0: [0],
          1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
          3: [[0, 4], 11, 21, 22],
          4: [[0, 3], 11, 21, 22],
          5: [[0, 4], 21, 22, 24, 25],
          6: [0, 1, 3, 23, 26, [81, 83]],
          7: [0, 1, 3, 4, [22, 27], 81],
          8: [[0, 2], 11, 12, [21, 24]],
          9: [[0, 4], [21, 23]],
          10: [[0, 2], 11, 24, 25, 28],
          11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
          13: [[0, 4], [21, 25], 81],
          14: [[0, 2], [21, 25]],
          15: [[0, 3], [21, 29]],
          16: [[0, 3], [21, 23], 81],
          17: [[0, 3], [21, 25], 81],
          18: [[0, 3], [21, 27]],
          19: [[0, 3], [21, 23]],
          20: [[0, 2], 21, 22, 81],
          32: [0, [21, 33]],
          33: [0, [21, 38]],
          34: [0, 1, [22, 37]]
        },
        52: {
          0: [0],
          1: [[0, 3], [11, 15], [21, 23], 81],
          2: [0, 1, 3, 21, 22],
          3: [[0, 3], [21, 30], 81, 82],
          4: [[0, 2], [21, 25]],
          5: [[0, 2], [21, 27]],
          6: [[0, 3], [21, 28]],
          22: [0, 1, [22, 30]],
          23: [0, 1, [22, 28]],
          24: [0, 1, [22, 28]],
          26: [0, 1, [22, 36]],
          27: [[0, 2], 22, 23, [25, 32]]
        },
        53: {
          0: [0],
          1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
          3: [[0, 2], [21, 26], 28, 81],
          4: [[0, 2], [21, 28]],
          5: [[0, 2], [21, 24]],
          6: [[0, 2], [21, 30]],
          7: [[0, 2], [21, 24]],
          8: [[0, 2], [21, 29]],
          9: [[0, 2], [21, 27]],
          23: [0, 1, [22, 29], 31],
          25: [[0, 4], [22, 32]],
          26: [0, 1, [21, 28]],
          27: [0, 1, [22, 30]], 28: [0, 1, 22, 23],
          29: [0, 1, [22, 32]],
          31: [0, 2, 3, [22, 24]],
          34: [0, [21, 23]],
          33: [0, 21, [23, 25]],
          35: [0, [21, 28]]
        },
        54: {
          0: [0],
          1: [[0, 2], [21, 27]],
          21: [0, [21, 29], 32, 33],
          22: [0, [21, 29], [31, 33]],
          23: [0, 1, [22, 38]],
          24: [0, [21, 31]],
          25: [0, [21, 27]],
          26: [0, [21, 27]]
        },
        61: {
          0: [0],
          1: [[0, 4], [11, 16], 22, [24, 26]],
          2: [[0, 4], 22],
          3: [[0, 4], [21, 24], [26, 31]],
          4: [[0, 4], [22, 31], 81],
          5: [[0, 2], [21, 28], 81, 82],
          6: [[0, 2], [21, 32]],
          7: [[0, 2], [21, 30]],
          8: [[0, 2], [21, 31]],
          9: [[0, 2], [21, 29]],
          10: [[0, 2], [21, 26]]
        },
        62: {
          0: [0],
          1: [[0, 5], 11, [21, 23]],
          2: [0, 1],
          3: [[0, 2], 21],
          4: [[0, 3], [21, 23]],
          5: [[0, 3], [21, 25]],
          6: [[0, 2], [21, 23]],
          7: [[0, 2], [21, 25]],
          8: [[0, 2], [21, 26]],
          9: [[0, 2], [21, 24], 81, 82],
          10: [[0, 2], [21, 27]],
          11: [[0, 2], [21, 26]],
          12: [[0, 2], [21, 28]],
          24: [0, 21, [24, 29]],
          26: [0, 21, [23, 30]],
          29: [0, 1, [21, 27]],
          30: [0, 1, [21, 27]]
        },
        63: {
          0: [0],
          1: [[0, 5], [21, 23]],
          2: [0, 2, [21, 25]],
          21: [0, [21, 23], [26, 28]],
          22: [0, [21, 24]],
          23: [0, [21, 24]],
          25: [0, [21, 25]],
          26: [0, [21, 26]],
          27: [0, 1, [21, 26]],
          28: [[0, 2], [21, 23]]
        },
        64: {
          0: [0],
          1: [0, 1, [4, 6], 21, 22, 81],
          2: [[0, 3], 5, [21, 23]],
          3: [[0, 3], [21, 24], 81],
          4: [[0, 2], [21, 25]],
          5: [[0, 2], 21, 22]
        },
        65: {
          0: [0],
          1: [[0, 9], 21],
          2: [[0, 5]],
          21: [0, 1, 22, 23],
          22: [0, 1, 22, 23],
          23: [[0, 3], [23, 25], 27, 28],
          28: [0, 1, [22, 29]],
          29: [0, 1, [22, 29]],
          30: [0, 1, [22, 24]], 31: [0, 1, [21, 31]],
          32: [0, 1, [21, 27]],
          40: [0, 2, 3, [21, 28]],
          42: [[0, 2], 21, [23, 26]],
          43: [0, 1, [21, 26]],
          90: [[0, 4]], 27: [[0, 2], 22, 23]
        },
        71: { 0: [0] },
        81: { 0: [0] },
        82: { 0: [0] }
      };

      var provincial  = parseInt(value.substr(0, 2), 10),
          prefectural = parseInt(value.substr(2, 2), 10),
          county      = parseInt(value.substr(4, 2), 10);

      if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
        return false;
      }
      var inRange  = false,
          rangeDef = adminDivisionCodes[provincial][prefectural];
      for (var i = 0; i < rangeDef.length; i++) {
        if (($.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1])
            || (!$.isArray(rangeDef[i]) && county === rangeDef[i]))
        {
          inRange = true;
          break;
        }
      }

      if (!inRange) {
        return false;
      }

      // Check date of birth
      var dob;
      if (value.length === 18) {
        dob = value.substr(6, 8);
      } else /* length == 15 */ {
        dob = '19' + value.substr(6, 6);
      }
      var year  = parseInt(dob.substr(0, 4), 10),
          month = parseInt(dob.substr(4, 2), 10),
          day   = parseInt(dob.substr(6, 2), 10);
      if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
        return false;
      }

      // Check checksum (18-digit system only)
      if (value.length === 18) {
        var sum    = 0,
            weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        for (i = 0; i < 17; i++) {
          sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = (12 - (sum % 11)) % 11;
        var checksum = (value.charAt(17).toUpperCase() !== 'X') ? parseInt(value.charAt(17), 10) : 10;
        return checksum === sum;
      }

      return true;
    },

    /**
     * Validate Czech national identification number (RC)
     * Examples:
     * - Valid: 7103192745, 991231123
     * - Invalid: 1103492745, 590312123
     *
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _cz: function(value) {
      if (!/^\d{9,10}$/.test(value)) {
        return false;
      }
      var year  = 1900 + parseInt(value.substr(0, 2), 10),
          month = parseInt(value.substr(2, 2), 10) % 50 % 20,
          day   = parseInt(value.substr(4, 2), 10);
      if (value.length === 9) {
        if (year >= 1980) {
          year -= 100;
        }
        if (year > 1953) {
          return false;
        }
      } else if (year < 1954) {
        year += 100;
      }

      if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
        return false;
      }

      // Check that the birth date is not in the future
      if (value.length === 10) {
        var check = parseInt(value.substr(0, 9), 10) % 11;
        if (year < 1985) {
          check = check % 10;
        }
        return (check + '' === value.substr(9, 1));
      }

      return true;
    },

    /**
     * Validate Danish Personal Identification number (CPR)
     * Examples:
     * - Valid: 2110625629, 211062-5629
     * - Invalid: 511062-5629
     *
     * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _dk: function(value) {
      if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
        return false;
      }
      value = value.replace(/-/g, '');
      var day   = parseInt(value.substr(0, 2), 10),
          month = parseInt(value.substr(2, 2), 10),
          year  = parseInt(value.substr(4, 2), 10);

      switch (true) {
        case ('5678'.indexOf(value.charAt(6)) !== -1 && year >= 58):
          year += 1800;
          break;
        case ('0123'.indexOf(value.charAt(6)) !== -1):
        case ('49'.indexOf(value.charAt(6)) !== -1 && year >= 37):
          year += 1900;
          break;
        default:
          year += 2000;
          break;
      }

      return $.fn.bootstrapValidator.helpers.date(year, month, day);
    },

    /**
     * Validate Estonian Personal Identification Code (isikukood)
     * Examples:
     * - Valid: 37605030299
     *
     * @see http://et.wikipedia.org/wiki/Isikukood
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _ee: function(value) {
      // Use the same format as Lithuanian Personal Code
      return this._lt(value);
    },

    /**
     * Validate Spanish personal identity code (DNI)
     * Support i) DNI (for Spanish citizens) and ii) NIE (for foreign people)
     *
     * Examples:
     * - Valid: i) 54362315K, 54362315-K; ii) X2482300W, X-2482300W, X-2482300-W
     * - Invalid: i) 54362315Z; ii) X-2482300A
     *
     * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _es: function(value) {
      if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(value)                    // DNI
          && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(value)) {    // NIE
        return false;
      }

      value = value.replace(/-/g, '');
      var index = 'XYZ'.indexOf(value.charAt(0));
      if (index !== -1) {
        // It is NIE number
        value = index + value.substr(1) + '';
      }

      var check = parseInt(value.substr(0, 8), 10);
      check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
      return (check === value.substr(8, 1));
    },

    /**
     * Validate Finnish Personal Identity Code (HETU)
     * Examples:
     * - Valid: 311280-888Y, 131052-308T
     * - Invalid: 131052-308U, 310252-308Y
     *
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _fi: function(value) {
      if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
        return false;
      }
      var day       = parseInt(value.substr(0, 2), 10),
          month     = parseInt(value.substr(2, 2), 10),
          year      = parseInt(value.substr(4, 2), 10),
          centuries = {
            '+': 1800,
            '-': 1900,
            'A': 2000
          };
      year = centuries[value.charAt(6)] + year;

      if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
        return false;
      }

      var individual = parseInt(value.substr(7, 3), 10);
      if (individual < 2) {
        return false;
      }
      var n = value.substr(0, 6) + value.substr(7, 3) + '';
      n = parseInt(n, 10);
      return '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10);
    },

    /**
     * Validate Croatian personal identification number (OIB)
     * Examples:
     * - Valid: 33392005961
     * - Invalid: 33392005962
     *
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _hr: function(value) {
      if (!/^[0-9]{11}$/.test(value)) {
        return false;
      }
      return $.fn.bootstrapValidator.helpers.mod11And10(value);
    },

    /**
     * Validate Irish Personal Public Service Number (PPS)
     * Examples:
     * - Valid: 6433435F, 6433435FT, 6433435FW, 6433435OA, 6433435IH, 1234567TW, 1234567FA
     * - Invalid: 6433435E, 6433435VH
     *
     * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _ie: function(value) {
      if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
        return false;
      }

      var getCheckDigit = function(value) {
        while (value.length < 7) {
          value = '0' + value;
        }
        var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
            sum      = 0;
        for (var i = 0; i < 7; i++) {
          sum += parseInt(value.charAt(i), 10) * (8 - i);
        }
        sum += 9 * alphabet.indexOf(value.substr(7));
        return alphabet[sum % 23];
      };

      // 2013 format
      if (value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))) {
        return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
      }
      // The old format
      else {
        return value.charAt(7) === getCheckDigit(value.substr(0, 7));
      }
    },

    /**
     * Validate Iceland national identification number (Kennitala)
     * Examples:
     * - Valid: 120174-3399, 1201743399, 0902862349
     *
     * @see http://en.wikipedia.org/wiki/Kennitala
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _is: function(value) {
      if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
        return false;
      }
      value = value.replace(/-/g, '');
      var day     = parseInt(value.substr(0, 2), 10),
          month   = parseInt(value.substr(2, 2), 10),
          year    = parseInt(value.substr(4, 2), 10),
          century = parseInt(value.charAt(9), 10);

      year = (century === 9) ? (1900 + year) : ((20 + century) * 100 + year);
      if (!$.fn.bootstrapValidator.helpers.date(year, month, day, true)) {
        return false;
      }
      // Validate the check digit
      var sum    = 0,
          weight = [3, 2, 7, 6, 5, 4, 3, 2];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = 11 - sum % 11;
      return (sum + '' === value.charAt(8));
    },

    /**
     * Validate Lithuanian Personal Code (Asmens kodas)
     * Examples:
     * - Valid: 38703181745
     * - Invalid: 38703181746, 78703181745, 38703421745
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
     * @see http://www.adomas.org/midi2007/pcode.html
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _lt: function(value) {
      if (!/^[0-9]{11}$/.test(value)) {
        return false;
      }
      var gender  = parseInt(value.charAt(0), 10),
          year    = parseInt(value.substr(1, 2), 10),
          month   = parseInt(value.substr(3, 2), 10),
          day     = parseInt(value.substr(5, 2), 10),
          century = (gender % 2 === 0) ? (17 + gender / 2) : (17 + (gender + 1) / 2);
      year = century * 100 + year;
      if (!$.fn.bootstrapValidator.helpers.date(year, month, day, true)) {
        return false;
      }

      // Validate the check digit
      var sum    = 0,
          weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
      for (var i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = sum % 11;
      if (sum !== 10) {
        return sum + '' === value.charAt(10);
      }

      // Re-calculate the check digit
      sum    = 0;
      weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
      for (i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = sum % 11;
      if (sum === 10) {
        sum = 0;
      }
      return (sum + '' === value.charAt(10));
    },

    /**
     * Validate Latvian Personal Code (Personas kods)
     * Examples:
     * - Valid: 161175-19997, 16117519997
     * - Invalid: 161375-19997
     *
     * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _lv: function(value) {
      if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
        return false;
      }
      value = value.replace(/\D/g, '');
      // Check birth date
      var day   = parseInt(value.substr(0, 2), 10),
          month = parseInt(value.substr(2, 2), 10),
          year  = parseInt(value.substr(4, 2), 10);
      year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

      if (!$.fn.bootstrapValidator.helpers.date(year, month, day, true)) {
        return false;
      }

      // Check personal code
      var sum    = 0,
          weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
      for (var i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = (sum + 1) % 11 % 10;
      return (sum + '' === value.charAt(10));
    },

    /**
     * Validate Dutch national identification number (BSN)
     * Examples:
     * - Valid: 111222333, 941331490, 9413.31.490
     * - Invalid: 111252333
     *
     * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _nl: function(value) {
      while (value.length < 9) {
        value = '0' + value;
      }
      if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(value)) {
        return false;
      }
      value = value.replace(/\./g, '');
      if (parseInt(value, 10) === 0) {
        return false;
      }
      var sum    = 0,
          length = value.length;
      for (var i = 0; i < length - 1; i++) {
        sum += (9 - i) * parseInt(value.charAt(i), 10);
      }
      sum = sum % 11;
      if (sum === 10) {
        sum = 0;
      }
      return (sum + '' === value.charAt(length - 1));
    },

    /**
     * Validate Romanian numerical personal code (CNP)
     * Examples:
     * - Valid: 1630615123457, 1800101221144
     * - Invalid: 8800101221144, 1632215123457, 1630615123458
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _ro: function(value) {
      if (!/^[0-9]{13}$/.test(value)) {
        return false;
      }
      var gender = parseInt(value.charAt(0), 10);
      if (gender === 0 || gender === 7 || gender === 8) {
        return false;
      }

      // Determine the date of birth
      var year      = parseInt(value.substr(1, 2), 10),
          month     = parseInt(value.substr(3, 2), 10),
          day       = parseInt(value.substr(5, 2), 10),
      // The year of date is determined base on the gender
          centuries = {
            '1': 1900,  // Male born between 1900 and 1999
            '2': 1900,  // Female born between 1900 and 1999
            '3': 1800,  // Male born between 1800 and 1899
            '4': 1800,  // Female born between 1800 and 1899
            '5': 2000,  // Male born after 2000
            '6': 2000   // Female born after 2000
          };
      if (day > 31 && month > 12) {
        return false;
      }
      if (gender !== 9) {
        year = centuries[gender + ''] + year;
        if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
          return false;
        }
      }

      // Validate the check digit
      var sum    = 0,
          weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
          length = value.length;
      for (var i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = sum % 11;
      if (sum === 10) {
        sum = 1;
      }
      return (sum + '' === value.charAt(length - 1));
    },

    /**
     * Validate Swedish personal identity number (personnummer)
     * Examples:
     * - Valid: 8112289874, 811228-9874, 811228+9874
     * - Invalid: 811228-9873
     *
     * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _se: function(value) {
      if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
        return false;
      }
      value = value.replace(/[^0-9]/g, '');

      var year  = parseInt(value.substr(0, 2), 10) + 1900,
          month = parseInt(value.substr(2, 2), 10),
          day   = parseInt(value.substr(4, 2), 10);
      if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
        return false;
      }

      // Validate the last check digit
      return $.fn.bootstrapValidator.helpers.luhn(value);
    },

    /**
     * Validate Slovak national identifier number (RC)
     * Examples:
     * - Valid: 7103192745, 991231123
     * - Invalid: 7103192746, 1103492745
     *
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _sk: function(value) {
      // Slovakia uses the same format as Czech Republic
      return this._cz(value);
    },

    /**
     * Validate San Marino citizen number
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _sm: function(value) {
      return /^\d{5}$/.test(value);
    },

    /**
     * Validate Thailand citizen number
     * Examples:
     * - Valid: 7145620509547, 3688699975685, 2368719339716
     * - Invalid: 1100800092310
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _th: function(value) {
      if (value.length !== 13) {
        return false;
      }

      var sum = 0;
      for (var i = 0; i < 12; i++) {
        sum += parseInt(value.charAt(i), 10) * (13 - i);
      }

      return (11 - sum % 11) % 10 === parseInt(value.charAt(12), 10);
    },

    /**
     * Validate South African ID
     * Example:
     * - Valid: 8001015009087
     * - Invalid: 8001015009287, 8001015009086
     *
     * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
     * @param {String} value The ID
     * @returns {Boolean}
     */
    _za: function(value) {
      if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
        return false;
      }
      var year        = parseInt(value.substr(0, 2), 10),
          currentYear = new Date().getFullYear() % 100,
          month       = parseInt(value.substr(2, 2), 10),
          day         = parseInt(value.substr(4, 2), 10);
      year = (year >= currentYear) ? (year + 1900) : (year + 2000);

      if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
        return false;
      }

      // Validate the last check digit
      return $.fn.bootstrapValidator.helpers.luhn(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.identical = $.extend($.fn.bootstrapValidator.i18n.identical || {}, {
    'default': 'Please enter the same value'
  });

  $.fn.bootstrapValidator.validators.identical = {
    html5Attributes: {
      message: 'message',
      field: 'field'
    },

    /**
     * Check if input value equals to value of particular one
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consists of the following key:
     * - field: The name of field that will be used to compare with current one
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var compareWith = validator.getFieldElements(options.field);
      if (compareWith === null || compareWith.length === 0) {
        return true;
      }

      if (value === compareWith.val()) {
        validator.updateStatus(options.field, validator.STATUS_VALID, 'identical');
        return true;
      } else {
        return false;
      }
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.imei = $.extend($.fn.bootstrapValidator.i18n.imei || {}, {
    'default': 'Please enter a valid IMEI number'
  });

  $.fn.bootstrapValidator.validators.imei = {
    /**
     * Validate IMEI (International Mobile Station Equipment Identity)
     * Examples:
     * - Valid: 35-209900-176148-1, 35-209900-176148-23, 3568680000414120, 490154203237518
     * - Invalid: 490154203237517
     *
     * @see http://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      switch (true) {
        case /^\d{15}$/.test(value):
        case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(value):
        case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(value):
          value = value.replace(/[^0-9]/g, '');
          return $.fn.bootstrapValidator.helpers.luhn(value);

        case /^\d{14}$/.test(value):
        case /^\d{16}$/.test(value):
        case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(value):
        case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(value):
          return true;

        default:
          return false;
      }
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.imo = $.extend($.fn.bootstrapValidator.i18n.imo || {}, {
    'default': 'Please enter a valid IMO number'
  });

  $.fn.bootstrapValidator.validators.imo = {
    /**
     * Validate IMO (International Maritime Organization)
     * Examples:
     * - Valid: IMO 8814275, IMO 9176187
     * - Invalid: IMO 8814274
     *
     * @see http://en.wikipedia.org/wiki/IMO_Number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      if (!/^IMO \d{7}$/i.test(value)) {
        return false;
      }

      // Grab just the digits
      var sum    = 0,
          digits = value.replace(/^.*(\d{7})$/, '$1');

      // Go over each char, multiplying by the inverse of it's position
      // IMO 9176187
      // (9 * 7) + (1 * 6) + (7 * 5) + (6 * 4) + (1 * 3) + (8 * 2) = 147
      // Take the last digit of that, that's the check digit (7)
      for (var i = 6; i >= 1; i--) {
        sum += (digits.slice((6 - i), -i) * (i + 1));
      }

      return sum % 10 === parseInt(digits.charAt(6), 10);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.integer = $.extend($.fn.bootstrapValidator.i18n.integer || {}, {
    'default': 'Please enter a valid number'
  });

  $.fn.bootstrapValidator.validators.integer = {
    enableByHtml5: function($field) {
      return ('number' === $field.attr('type')) && ($field.attr('step') === undefined || $field.attr('step') % 1 === 0);
    },

    /**
     * Return true if the input value is an integer
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following key:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
        return false;
      }

      var value = $field.val();
      if (value === '') {
        return true;
      }
      return /^(?:-?(?:0|[1-9][0-9]*))$/.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.ip = $.extend($.fn.bootstrapValidator.i18n.ip || {}, {
    'default': 'Please enter a valid IP address',
    ipv4: 'Please enter a valid IPv4 address',
    ipv6: 'Please enter a valid IPv6 address'
  });

  $.fn.bootstrapValidator.validators.ip = {
    html5Attributes: {
      message: 'message',
      ipv4: 'ipv4',
      ipv6: 'ipv6'
    },

    /**
     * Return true if the input value is a IP address.
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - ipv4: Enable IPv4 validator, default to true
     * - ipv6: Enable IPv6 validator, default to true
     * - message: The invalid message
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }
      options = $.extend({}, { ipv4: true, ipv6: true }, options);

      var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
          ipv6Regex = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
          valid     = false,
          message;

      switch (true) {
        case (options.ipv4 && !options.ipv6):
          valid   = ipv4Regex.test(value);
          message = options.message || $.fn.bootstrapValidator.i18n.ip.ipv4;
          break;

        case (!options.ipv4 && options.ipv6):
          valid   = ipv6Regex.test(value);
          message = options.message || $.fn.bootstrapValidator.i18n.ip.ipv6;
          break;

        case (options.ipv4 && options.ipv6):
        /* falls through */
        default:
          valid   = ipv4Regex.test(value) || ipv6Regex.test(value);
          message = options.message || $.fn.bootstrapValidator.i18n.ip['default'];
          break;
      }

      return {
        valid: valid,
        message: message
      };
    }
  };
}(window.jQuery));;(function($) {
  $.fn.bootstrapValidator.i18n.isbn = $.extend($.fn.bootstrapValidator.i18n.isbn || {}, {
    'default': 'Please enter a valid ISBN number'
  });

  $.fn.bootstrapValidator.validators.isbn = {
    /**
     * Return true if the input value is a valid ISBN 10 or ISBN 13 number
     * Examples:
     * - Valid:
     * ISBN 10: 99921-58-10-7, 9971-5-0210-0, 960-425-059-0, 80-902734-1-6, 85-359-0277-5, 1-84356-028-3, 0-684-84328-5, 0-8044-2957-X, 0-85131-041-9, 0-943396-04-2, 0-9752298-0-X
     * ISBN 13: 978-0-306-40615-7
     * - Invalid:
     * ISBN 10: 99921-58-10-6
     * ISBN 13: 978-0-306-40615-6
     *
     * @see http://en.wikipedia.org/wiki/International_Standard_Book_Number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} [options] Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // http://en.wikipedia.org/wiki/International_Standard_Book_Number#Overview
      // Groups are separated by a hyphen or a space
      var type;
      switch (true) {
        case /^\d{9}[\dX]$/.test(value):
        case (value.length === 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
        case (value.length === 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
          type = 'ISBN10';
          break;
        case /^(978|979)\d{9}[\dX]$/.test(value):
        case (value.length === 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(value)):
        case (value.length === 17 && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(value)):
          type = 'ISBN13';
          break;
        default:
          return false;
      }

      // Replace all special characters except digits and X
      value = value.replace(/[^0-9X]/gi, '');
      var chars  = value.split(''),
          length = chars.length,
          sum    = 0,
          i,
          checksum;

      switch (type) {
        case 'ISBN10':
          sum = 0;
          for (i = 0; i < length - 1; i++) {
            sum += parseInt(chars[i], 10) * (10 - i);
          }
          checksum = 11 - (sum % 11);
          if (checksum === 11) {
            checksum = 0;
          } else if (checksum === 10) {
            checksum = 'X';
          }
          return (checksum + '' === chars[length - 1]);

        case 'ISBN13':
          sum = 0;
          for (i = 0; i < length - 1; i++) {
            sum += ((i % 2 === 0) ? parseInt(chars[i], 10) : (parseInt(chars[i], 10) * 3));
          }
          checksum = 10 - (sum % 10);
          if (checksum === 10) {
            checksum = '0';
          }
          return (checksum + '' === chars[length - 1]);

        default:
          return false;
      }
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.isin = $.extend($.fn.bootstrapValidator.i18n.isin || {}, {
    'default': 'Please enter a valid ISIN number'
  });

  $.fn.bootstrapValidator.validators.isin = {
    // Available country codes
    // See http://isin.net/country-codes/
    COUNTRY_CODES: 'AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW',

    /**
     * Validate an ISIN (International Securities Identification Number)
     * Examples:
     * - Valid: US0378331005, AU0000XVGZA3, GB0002634946
     * - Invalid: US0378331004, AA0000XVGZA3
     *
     * @see http://en.wikipedia.org/wiki/International_Securities_Identifying_Number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = value.toUpperCase();
      var regex = new RegExp('^(' + this.COUNTRY_CODES + ')[0-9A-Z]{10}$');
      if (!regex.test(value)) {
        return false;
      }

      var converted = '',
          length    = value.length;
      // Convert letters to number
      for (var i = 0; i < length - 1; i++) {
        var c = value.charCodeAt(i);
        converted += ((c > 57) ? (c - 55).toString() : value.charAt(i));
      }

      var digits = '',
          n      = converted.length,
          group  = (n % 2 !== 0) ? 0 : 1;
      for (i = 0; i < n; i++) {
        digits += (parseInt(converted[i], 10) * ((i % 2) === group ? 2 : 1) + '');
      }

      var sum = 0;
      for (i = 0; i < digits.length; i++) {
        sum += parseInt(digits.charAt(i), 10);
      }
      sum = (10 - (sum % 10)) % 10;
      return sum + '' === value.charAt(length - 1);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.ismn = $.extend($.fn.bootstrapValidator.i18n.ismn || {}, {
    'default': 'Please enter a valid ISMN number'
  });

  $.fn.bootstrapValidator.validators.ismn = {
    /**
     * Validate ISMN (International Standard Music Number)
     * Examples:
     * - Valid: M230671187, 979-0-0601-1561-5, 979 0 3452 4680 5, 9790060115615
     * - Invalid: 9790060115614
     *
     * @see http://en.wikipedia.org/wiki/International_Standard_Music_Number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // Groups are separated by a hyphen or a space
      var type;
      switch (true) {
        case /^M\d{9}$/.test(value):
        case /^M-\d{4}-\d{4}-\d{1}$/.test(value):
        case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(value):
          type = 'ISMN10';
          break;
        case /^9790\d{9}$/.test(value):
        case /^979-0-\d{4}-\d{4}-\d{1}$/.test(value):
        case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(value):
          type = 'ISMN13';
          break;
        default:
          return false;
      }

      if ('ISMN10' === type) {
        value = '9790' + value.substr(1);
      }

      // Replace all special characters except digits
      value = value.replace(/[^0-9]/gi, '');
      var length = value.length,
          sum    = 0,
          weight = [1, 3];
      for (var i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i % 2];
      }
      sum = 10 - sum % 10;
      return (sum + '' === value.charAt(length - 1));
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.issn = $.extend($.fn.bootstrapValidator.i18n.issn || {}, {
    'default': 'Please enter a valid ISSN number'
  });

  $.fn.bootstrapValidator.validators.issn = {
    /**
     * Validate ISSN (International Standard Serial Number)
     * Examples:
     * - Valid: 0378-5955, 0024-9319, 0032-1478
     * - Invalid: 0032-147X
     *
     * @see http://en.wikipedia.org/wiki/International_Standard_Serial_Number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // Groups are separated by a hyphen or a space
      if (!/^\d{4}\-\d{3}[\dX]$/.test(value)) {
        return false;
      }

      // Replace all special characters except digits and X
      value = value.replace(/[^0-9X]/gi, '');
      var chars  = value.split(''),
          length = chars.length,
          sum    = 0;

      if (chars[7] === 'X') {
        chars[7] = 10;
      }
      for (var i = 0; i < length; i++) {
        sum += parseInt(chars[i], 10) * (8 - i);
      }
      return (sum % 11 === 0);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.lessThan = $.extend($.fn.bootstrapValidator.i18n.lessThan || {}, {
    'default': 'Please enter a value less than or equal to %s',
    notInclusive: 'Please enter a value less than %s'
  });

  $.fn.bootstrapValidator.validators.lessThan = {
    html5Attributes: {
      message: 'message',
      value: 'value',
      inclusive: 'inclusive'
    },

    enableByHtml5: function($field) {
      var type = $field.attr('type'),
          max  = $field.attr('max');
      if (max && type !== 'date') {
        return {
          value: max
        };
      }

      return false;
    },

    /**
     * Return true if the input value is less than or equal to given number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - value: The number used to compare to. It can be
     *      - A number
     *      - Name of field which its value defines the number
     *      - Name of callback function that returns the number
     *      - A callback function that returns the number
     *
     * - inclusive [optional]: Can be true or false. Default is true
     * - message: The invalid message
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = this._format(value);
      if (!$.isNumeric(value)) {
        return false;
      }

      var compareTo      = $.isNumeric(options.value) ? options.value : validator.getDynamicOption($field, options.value),
          compareToValue = this._format(compareTo);

      value = parseFloat(value);
      return (options.inclusive === true || options.inclusive === undefined)
          ? {
        valid: value <= compareToValue,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.lessThan['default'], compareTo)
      }
          : {
        valid: value < compareToValue,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.lessThan.notInclusive, compareTo)
      };
    },

    _format: function(value) {
      return (value + '').replace(',', '.');
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.mac = $.extend($.fn.bootstrapValidator.i18n.mac || {}, {
    'default': 'Please enter a valid MAC address'
  });

  $.fn.bootstrapValidator.validators.mac = {
    /**
     * Return true if the input value is a MAC address.
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.meid = $.extend($.fn.bootstrapValidator.i18n.meid || {}, {
    'default': 'Please enter a valid MEID number'
  });

  $.fn.bootstrapValidator.validators.meid = {
    /**
     * Validate MEID (Mobile Equipment Identifier)
     * Examples:
     * - Valid: 293608736500703710, 29360-87365-0070-3710, AF0123450ABCDE, AF-012345-0ABCDE
     * - Invalid: 2936087365007037101
     *
     * @see http://en.wikipedia.org/wiki/Mobile_equipment_identifier
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      switch (true) {
        // 14 digit hex representation (no check digit)
        case /^[0-9A-F]{15}$/i.test(value):
        // 14 digit hex representation + dashes or spaces (no check digit)
        case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(value):
        // 18 digit decimal representation (no check digit)
        case /^\d{19}$/.test(value):
        // 18 digit decimal representation + dashes or spaces (no check digit)
        case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(value):
          // Grab the check digit
          var cd = value.charAt(value.length - 1);

          // Strip any non-hex chars
          value = value.replace(/[- ]/g, '');

          // If it's all digits, luhn base 10 is used
          if (value.match(/^\d*$/i)) {
            return $.fn.bootstrapValidator.helpers.luhn(value);
          }

          // Strip the check digit
          value = value.slice(0, -1);

          // Get every other char, and double it
          var cdCalc = '';
          for (var i = 1; i <= 13; i += 2) {
            cdCalc += (parseInt(value.charAt(i), 16) * 2).toString(16);
          }

          // Get the sum of each char in the string
          var sum = 0;
          for (i = 0; i < cdCalc.length; i++) {
            sum += parseInt(cdCalc.charAt(i), 16);
          }

          // If the last digit of the calc is 0, the check digit is 0
          return (sum % 10 === 0)
              ? (cd === '0')
            // Subtract it from the next highest 10s number (64 goes to 70) and subtract the sum
            // Double it and turn it into a hex char
              : (cd === ((Math.floor((sum + 10) / 10) * 10 - sum) * 2).toString(16));

        // 14 digit hex representation (no check digit)
        case /^[0-9A-F]{14}$/i.test(value):
        // 14 digit hex representation + dashes or spaces (no check digit)
        case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(value):
        // 18 digit decimal representation (no check digit)
        case /^\d{18}$/.test(value):
        // 18 digit decimal representation + dashes or spaces (no check digit)
        case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(value):
          return true;

        default:
          return false;
      }
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.notEmpty = $.extend($.fn.bootstrapValidator.i18n.notEmpty || {}, {
    'default': 'Please enter a value'
  });

  $.fn.bootstrapValidator.validators.notEmpty = {
    enableByHtml5: function($field) {
      var required = $field.attr('required') + '';
      return ('required' === required || 'true' === required);
    },

    /**
     * Check if input value is empty or not
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var type = $field.attr('type');
      if ('radio' === type || 'checkbox' === type) {
        return validator
            .getFieldElements($field.attr('data-bv-field'))
            .filter(':checked')
            .length > 0;
      }

      if ('number' === type && $field.get(0).validity && $field.get(0).validity.badInput === true) {
        return true;
      }

      return $.trim($field.val()) !== '';
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.numeric = $.extend($.fn.bootstrapValidator.i18n.numeric || {}, {
    'default': 'Please enter a valid float number'
  });

  $.fn.bootstrapValidator.validators.numeric = {
    html5Attributes: {
      message: 'message',
      separator: 'separator'
    },

    enableByHtml5: function($field) {
      return ('number' === $field.attr('type')) && ($field.attr('step') !== undefined) && ($field.attr('step') % 1 !== 0);
    },

    /**
     * Validate decimal number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - separator: The decimal separator. Can be "." (default), ","
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      if (this.enableByHtml5($field) && $field.get(0).validity && $field.get(0).validity.badInput === true) {
        return false;
      }

      var value = $field.val();
      if (value === '') {
        return true;
      }
      var separator = options.separator || '.';
      if (separator !== '.') {
        value = value.replace(separator, '.');
      }

      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.phone = $.extend($.fn.bootstrapValidator.i18n.phone || {}, {
    'default': 'Please enter a valid phone number',
    countryNotSupported: 'The country code %s is not supported',
    country: 'Please enter a valid phone number in %s',
    countries: {
      BR: 'Brazil',
      CN: 'China',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DK: 'Denmark',
      ES: 'Spain',
      FR: 'France',
      GB: 'United Kingdom',
      MA: 'Morocco',
      PK: 'Pakistan',
      RO: 'Romania',
      RU: 'Russia',
      SK: 'Slovakia',
      TH: 'Thailand',
      US: 'USA',
      VE: 'Venezuela'
    }
  });

  $.fn.bootstrapValidator.validators.phone = {
    html5Attributes: {
      message: 'message',
      country: 'country'
    },

    // The supported countries
    COUNTRY_CODES: ['BR', 'CN', 'CZ', 'DE', 'DK', 'ES', 'FR', 'GB', 'MA', 'PK', 'RO', 'RU', 'SK', 'TH', 'US', 'VE'],

    /**
     * Return true if the input value contains a valid phone number for the country
     * selected in the options
     *
     * @param {BootstrapValidator} validator Validate plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - country: The ISO-3166 country code. It can be
     *      - A country code
     *      - Name of field which its value defines the country code
     *      - Name of callback function that returns the country code
     *      - A callback function that returns the country code
     *
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var country = options.country;
      if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
        // Try to determine the country
        country = validator.getDynamicOption($field, country);
      }

      if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
        return {
          valid: false,
          message: $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.phone.countryNotSupported, country)
        };
      }

      var isValid = true;
      switch (country.toUpperCase()) {
        case 'BR':
          // Test: http://regexr.com/399m1
          value   = $.trim(value);
          isValid = (/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/).test(value);
          break;

        case 'CN':
          // http://regexr.com/39dq4
          value   = $.trim(value);
          isValid = (/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/).test(value);
          break;

        case 'CZ':
          // Test: http://regexr.com/39hhl
          isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
          break;

        case 'DE':
          // Test: http://regexr.com/39pkg
          value   = $.trim(value);
          isValid = (/^(((((((00|\+)49[ \-/]?)|0)[1-9][0-9]{1,4})[ \-/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[ \-/]?))[0-9]{1,7}([ \-/]?[0-9]{1,5})?)$/).test(value);
          break;

        case 'DK':
          // Mathing DK phone numbers with country code in 1 of 3 formats and an
          // 8 digit phone number not starting with a 0 or 1. Can have 1 space
          // between each character except inside the country code.
          // Test: http://regex101.com/r/sS8fO4/1
          value   = $.trim(value);
          isValid = (/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/).test(value);
          break;

        case 'ES':
          // http://regex101.com/r/rB9mA9/1
          value   = $.trim(value);
          isValid = (/^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/).test(value);
          break;

        case 'FR':
          // http://regexr.com/39a2p
          value   = $.trim(value);
          isValid = (/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/).test(value);
          break;

        case 'GB':
          // http://aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers#Match_GB_telephone_number_in_any_format
          // Test: http://regexr.com/38uhv
          value   = $.trim(value);
          isValid = (/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/).test(value);
          break;

        case 'MA':
          // http://en.wikipedia.org/wiki/Telephone_numbers_in_Morocco
          // Test: http://regexr.com/399n8
          value   = $.trim(value);
          isValid = (/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/).test(value);
          break;

        case 'PK':
          // http://regex101.com/r/yH8aV9/2
          value   = $.trim(value);
          isValid = (/^0?3[0-9]{2}[0-9]{7}$/).test(value);
          break;

        case 'RO':
          // All mobile network and land line
          // http://regexr.com/39fv1
          isValid = (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g).test(value);
          break;

        case 'RU':
          // http://regex101.com/r/gW7yT5/5
          isValid = (/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g).test(value);
          break;

        case 'SK':
          // Test: http://regexr.com/39hhl
          isValid = /^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(value);
          break;

        case 'TH':
          // http://regex101.com/r/vM5mZ4/2
          isValid = (/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/).test(value);
          break;

        case 'VE':
          // http://regex101.com/r/eM2yY0/6
          value   = $.trim(value);
          isValid = (/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/).test(value);
          break;

        case 'US':
        /* falls through */
        default:
          // Make sure US phone numbers have 10 digits
          // May start with 1, +1, or 1-; should discard
          // Area code may be delimited with (), & sections may be delimited with . or -
          // Test: http://regexr.com/38mqi
          value   = value.replace(/\D/g, '');
          isValid = (/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/).test(value) && (value.length === 10);
          break;
      }

      return {
        valid: isValid,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.phone.country, $.fn.bootstrapValidator.i18n.phone.countries[country])
      };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.regexp = $.extend($.fn.bootstrapValidator.i18n.regexp || {}, {
    'default': 'Please enter a value matching the pattern'
  });

  $.fn.bootstrapValidator.validators.regexp = {
    html5Attributes: {
      message: 'message',
      regexp: 'regexp'
    },

    enableByHtml5: function($field) {
      var pattern = $field.attr('pattern');
      if (pattern) {
        return {
          regexp: pattern
        };
      }

      return false;
    },

    /**
     * Check if the element value matches given regular expression
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consists of the following key:
     * - regexp: The regular expression you need to check
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var regexp = ('string' === typeof options.regexp) ? new RegExp(options.regexp) : options.regexp;
      return regexp.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.remote = $.extend($.fn.bootstrapValidator.i18n.remote || {}, {
    'default': 'Please enter a valid value'
  });

  $.fn.bootstrapValidator.validators.remote = {
    html5Attributes: {
      message: 'message',
      name: 'name',
      type: 'type',
      url: 'url',
      data: 'data',
      delay: 'delay'
    },

    /**
     * Destroy the timer when destroying the bootstrapValidator (using validator.destroy() method)
     */
    destroy: function(validator, $field, options) {
      if ($field.data('bv.remote.timer')) {
        clearTimeout($field.data('bv.remote.timer'));
        $field.removeData('bv.remote.timer');
      }
    },

    /**
     * Request a remote server to check the input value
     *
     * @param {BootstrapValidator} validator Plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - url {String|Function}
     * - type {String} [optional] Can be GET or POST (default)
     * - data {Object|Function} [optional]: By default, it will take the value
     *  {
         *      <fieldName>: <fieldValue>
         *  }
     * - delay
     * - name {String} [optional]: Override the field name for the request.
     * - message: The invalid message
     * - headers: Additional headers
     * @returns {Deferred}
     */
    validate: function(validator, $field, options) {
      var value = $field.val(),
          dfd   = new $.Deferred();
      if (value === '') {
        dfd.resolve($field, 'remote', { valid: true });
        return dfd;
      }

      var name    = $field.attr('data-bv-field'),
          data    = options.data || {},
          url     = options.url,
          type    = options.type || 'GET',
          headers = options.headers || {};

      // Support dynamic data
      if ('function' === typeof data) {
        data = data.call(this, validator);
      }

      // Parse string data from HTML5 attribute
      if ('string' === typeof data) {
        data = JSON.parse(data);
      }

      // Support dynamic url
      if ('function' === typeof url) {
        url = url.call(this, validator);
      }

      data[options.name || name] = value;
      function runCallback() {
        var xhr = $.ajax({
          type: type,
          headers: headers,
          url: url,
          dataType: 'json',
          data: data
        });
        xhr.then(function(response) {
          response.valid = response.valid === true || response.valid === 'true';
          dfd.resolve($field, 'remote', response);
        });

        dfd.fail(function() {
          xhr.abort();
        });

        return dfd;
      }

      if (options.delay) {
        // Since the form might have multiple fields with the same name
        // I have to attach the timer to the field element
        if ($field.data('bv.remote.timer')) {
          clearTimeout($field.data('bv.remote.timer'));
        }

        $field.data('bv.remote.timer', setTimeout(runCallback, options.delay));
        return dfd;
      } else {
        return runCallback();
      }
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.rtn = $.extend($.fn.bootstrapValidator.i18n.rtn || {}, {
    'default': 'Please enter a valid RTN number'
  });

  $.fn.bootstrapValidator.validators.rtn = {
    /**
     * Validate a RTN (Routing transit number)
     * Examples:
     * - Valid: 021200025, 789456124
     *
     * @see http://en.wikipedia.org/wiki/Routing_transit_number
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      if (!/^\d{9}$/.test(value)) {
        return false;
      }

      var sum = 0;
      for (var i = 0; i < value.length; i += 3) {
        sum += parseInt(value.charAt(i),     10) * 3
            +  parseInt(value.charAt(i + 1), 10) * 7
            +  parseInt(value.charAt(i + 2), 10);
      }
      return (sum !== 0 && sum % 10 === 0);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.sedol = $.extend($.fn.bootstrapValidator.i18n.sedol || {}, {
    'default': 'Please enter a valid SEDOL number'
  });

  $.fn.bootstrapValidator.validators.sedol = {
    /**
     * Validate a SEDOL (Stock Exchange Daily Official List)
     * Examples:
     * - Valid: 0263494, B0WNLY7
     *
     * @see http://en.wikipedia.org/wiki/SEDOL
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      value = value.toUpperCase();
      if (!/^[0-9A-Z]{7}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [1, 3, 1, 7, 3, 9, 1],
          length = value.length;
      for (var i = 0; i < length - 1; i++) {
        sum += weight[i] * parseInt(value.charAt(i), 36);
      }
      sum = (10 - sum % 10) % 10;
      return sum + '' === value.charAt(length - 1);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.siren = $.extend($.fn.bootstrapValidator.i18n.siren || {}, {
    'default': 'Please enter a valid SIREN number'
  });

  $.fn.bootstrapValidator.validators.siren = {
    /**
     * Check if a string is a siren number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      if (!/^\d{9}$/.test(value)) {
        return false;
      }
      return $.fn.bootstrapValidator.helpers.luhn(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.siret = $.extend($.fn.bootstrapValidator.i18n.siret || {}, {
    'default': 'Please enter a valid SIRET number'
  });

  $.fn.bootstrapValidator.validators.siret = {
    /**
     * Check if a string is a siret number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var sum    = 0,
          length = value.length,
          tmp;
      for (var i = 0; i < length; i++) {
        tmp = parseInt(value.charAt(i), 10);
        if ((i % 2) === 0) {
          tmp = tmp * 2;
          if (tmp > 9) {
            tmp -= 9;
          }
        }
        sum += tmp;
      }
      return (sum % 10 === 0);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.step = $.extend($.fn.bootstrapValidator.i18n.step || {}, {
    'default': 'Please enter a valid step of %s'
  });

  $.fn.bootstrapValidator.validators.step = {
    html5Attributes: {
      message: 'message',
      base: 'baseValue',
      step: 'step'
    },

    /**
     * Return true if the input value is valid step one
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Can consist of the following keys:
     * - baseValue: The base value
     * - step: The step
     * - message: The invalid message
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      options = $.extend({}, { baseValue: 0, step: 1 }, options);
      value   = parseFloat(value);
      if (!$.isNumeric(value)) {
        return false;
      }

      var round = function(x, precision) {
            var m = Math.pow(10, precision);
            x = x * m;
            var sign   = (x > 0) | -(x < 0),
                isHalf = (x % 1 === 0.5 * sign);
            if (isHalf) {
              return (Math.floor(x) + (sign > 0)) / m;
            } else {
              return Math.round(x) / m;
            }
          },
          floatMod = function(x, y) {
            if (y === 0.0) {
              return 1.0;
            }
            var dotX      = (x + '').split('.'),
                dotY      = (y + '').split('.'),
                precision = ((dotX.length === 1) ? 0 : dotX[1].length) + ((dotY.length === 1) ? 0 : dotY[1].length);
            return round(x - y * Math.floor(x / y), precision);
          };

      var mod = floatMod(value - options.baseValue, options.step);
      return {
        valid: mod === 0.0 || mod === options.step,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.step['default'], [options.step])
      };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.stringCase = $.extend($.fn.bootstrapValidator.i18n.stringCase || {}, {
    'default': 'Please enter only lowercase characters',
    upper: 'Please enter only uppercase characters'
  });

  $.fn.bootstrapValidator.validators.stringCase = {
    html5Attributes: {
      message: 'message',
      'case': 'case'
    },

    /**
     * Check if a string is a lower or upper case one
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - case: Can be 'lower' (default) or 'upper'
     * @returns {Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var stringCase = (options['case'] || 'lower').toLowerCase();
      return {
        valid: ('upper' === stringCase) ? value === value.toUpperCase() : value === value.toLowerCase(),
        message: options.message || (('upper' === stringCase) ? $.fn.bootstrapValidator.i18n.stringCase.upper : $.fn.bootstrapValidator.i18n.stringCase['default'])
      };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.stringLength = $.extend($.fn.bootstrapValidator.i18n.stringLength || {}, {
    'default': 'Please enter a value with valid length',
    less: 'Please enter less than %s characters',
    more: 'Please enter more than %s characters',
    between: 'Please enter value between %s and %s characters long'
  });

  $.fn.bootstrapValidator.validators.stringLength = {
    html5Attributes: {
      message: 'message',
      min: 'min',
      max: 'max',
      trim: 'trim',
      utf8bytes: 'utf8Bytes'
    },

    enableByHtml5: function($field) {
      var options   = {},
          maxLength = $field.attr('maxlength'),
          minLength = $field.attr('minlength');
      if (maxLength) {
        options.max = parseInt(maxLength, 10);
      }
      if (minLength) {
        options.min = parseInt(minLength, 10);
      }

      return $.isEmptyObject(options) ? false : options;
    },

    /**
     * Check if the length of element value is less or more than given number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consists of following keys:
     * - min
     * - max
     * At least one of two keys is required
     * The min, max keys define the number which the field value compares to. min, max can be
     *      - A number
     *      - Name of field which its value defines the number
     *      - Name of callback function that returns the number
     *      - A callback function that returns the number
     *
     * - message: The invalid message
     * - trim: Indicate the length will be calculated after trimming the value or not. It is false, by default
     * - utf8bytes: Evaluate string length in UTF-8 bytes, default to false
     * @returns {Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (options.trim === true || options.trim === 'true') {
        value = $.trim(value);
      }

      if (value === '') {
        return true;
      }

      var min        = $.isNumeric(options.min) ? options.min : validator.getDynamicOption($field, options.min),
          max        = $.isNumeric(options.max) ? options.max : validator.getDynamicOption($field, options.max),
      // Credit to http://stackoverflow.com/a/23329386 (@lovasoa) for UTF-8 byte length code
          utf8Length = function(str) {
            var s = str.length;
            for (var i = str.length - 1; i >= 0; i--) {
              var code = str.charCodeAt(i);
              if (code > 0x7f && code <= 0x7ff) {
                s++;
              } else if (code > 0x7ff && code <= 0xffff) {
                s += 2;
              }
              if (code >= 0xDC00 && code <= 0xDFFF) {
                i--;
              }
            }
            return s;
          },
          length     = options.utf8Bytes ? utf8Length(value) : value.length,
          isValid    = true,
          message    = options.message || $.fn.bootstrapValidator.i18n.stringLength['default'];

      if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
        isValid = false;
      }

      switch (true) {
        case (!!min && !!max):
          message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(min, 10), parseInt(max, 10)]);
          break;

        case (!!min):
          message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.stringLength.more, parseInt(min, 10));
          break;

        case (!!max):
          message = $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.stringLength.less, parseInt(max, 10));
          break;

        default:
          break;
      }

      return { valid: isValid, message: message };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.uri = $.extend($.fn.bootstrapValidator.i18n.uri || {}, {
    'default': 'Please enter a valid URI'
  });

  $.fn.bootstrapValidator.validators.uri = {
    html5Attributes: {
      message: 'message',
      allowlocal: 'allowLocal',
      protocol: 'protocol'
    },

    enableByHtml5: function($field) {
      return ('url' === $field.attr('type'));
    },

    /**
     * Return true if the input value is a valid URL
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options
     * - message: The error message
     * - allowLocal: Allow the private and local network IP. Default to false
     * - protocol: The protocols, separated by a comma. Default to "http, https, ftp"
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // Credit to https://gist.github.com/dperini/729294
      //
      // Regular Expression for URL validation
      //
      // Author: Diego Perini
      // Updated: 2010/12/05
      //
      // the regular expression composed & commented
      // could be easily tweaked for RFC compliance,
      // it was expressly modified to fit & satisfy
      // these test for an URL shortener:
      //
      //   http://mathiasbynens.be/demo/url-regex
      //
      // Notes on possible differences from a standard/generic validation:
      //
      // - utf-8 char class take in consideration the full Unicode range
      // - TLDs are mandatory unless `allowLocal` is true
      // - protocols have been restricted to ftp, http and https only as requested
      //
      // Changes:
      //
      // - IP address dotted notation validation, range: 1.0.0.0 - 223.255.255.255
      //   first and last IP address of each class is considered invalid
      //   (since they are broadcast/network addresses)
      //
      // - Added exclusion of private, reserved and/or local networks ranges
      //   unless `allowLocal` is true
      //
      // - Added possibility of choosing a custom protocol
      //
      var allowLocal = options.allowLocal === true || options.allowLocal === 'true',
          protocol   = (options.protocol || 'http, https, ftp').split(',').join('|').replace(/\s/g, ''),
          urlExp     = new RegExp(
              "^" +
                // protocol identifier
                  "(?:(?:" + protocol + ")://)" +
                // user:pass authentication
                  "(?:\\S+(?::\\S*)?@)?" +
                  "(?:" +
                // IP address exclusion
                // private & local networks
                  (allowLocal
                      ? ''
                      : ("(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                      "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                      "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")) +
                // IP address dotted notation octets
                // excludes loopback network 0.0.0.0
                // excludes reserved space >= 224.0.0.0
                // excludes network & broadcast addresses
                // (first & last IP address of each class)
                  "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                  "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                  "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                  "|" +
                // host name
                  "(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)" +
                // domain name
                  "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*" +
                // TLD identifier
                  "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                // Allow intranet sites (no TLD) if `allowLocal` is true
                  (allowLocal ? '?' : '') +
                  ")" +
                // port number
                  "(?::\\d{2,5})?" +
                // resource path
                  "(?:/[^\\s]*)?" +
                  "$", "i"
          );

      return urlExp.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.uuid = $.extend($.fn.bootstrapValidator.i18n.uuid || {}, {
    'default': 'Please enter a valid UUID number',
    version: 'Please enter a valid UUID version %s number'
  });

  $.fn.bootstrapValidator.validators.uuid = {
    html5Attributes: {
      message: 'message',
      version: 'version'
    },

    /**
     * Return true if and only if the input value is a valid UUID string
     *
     * @see http://en.wikipedia.org/wiki/Universally_unique_identifier
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - version: Can be 3, 4, 5, null
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // See the format at http://en.wikipedia.org/wiki/Universally_unique_identifier#Variants_and_versions
      var patterns = {
            '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
          },
          version = options.version ? (options.version + '') : 'all';
      return {
        valid: (null === patterns[version]) ? true : patterns[version].test(value),
        message: options.version
            ? $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.uuid.version, options.version)
            : (options.message || $.fn.bootstrapValidator.i18n.uuid['default'])
      };
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.vat = $.extend($.fn.bootstrapValidator.i18n.vat || {}, {
    'default': 'Please enter a valid VAT number',
    countryNotSupported: 'The country code %s is not supported',
    country: 'Please enter a valid VAT number in %s',
    countries: {
      AT: 'Austria',
      BE: 'Belgium',
      BG: 'Bulgaria',
      BR: 'Brazil',
      CH: 'Switzerland',
      CY: 'Cyprus',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DK: 'Denmark',
      EE: 'Estonia',
      ES: 'Spain',
      FI: 'Finland',
      FR: 'France',
      GB: 'United Kingdom',
      GR: 'Greek',
      EL: 'Greek',
      HU: 'Hungary',
      HR: 'Croatia',
      IE: 'Ireland',
      IS: 'Iceland',
      IT: 'Italy',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      LV: 'Latvia',
      MT: 'Malta',
      NL: 'Netherlands',
      NO: 'Norway',
      PL: 'Poland',
      PT: 'Portugal',
      RO: 'Romania',
      RU: 'Russia',
      RS: 'Serbia',
      SE: 'Sweden',
      SI: 'Slovenia',
      SK: 'Slovakia',
      VE: 'Venezuela',
      ZA: 'South Africa'
    }
  });

  $.fn.bootstrapValidator.validators.vat = {
    html5Attributes: {
      message: 'message',
      country: 'country'
    },

    // Supported country codes
    COUNTRY_CODES: [
      'AT', 'BE', 'BG', 'BR', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU',
      'IE', 'IS', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RU', 'RS', 'SE', 'SK', 'SI', 'VE',
      'ZA'
    ],

    /**
     * Validate an European VAT number
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - country: The ISO 3166-1 country code. It can be
     *      - One of country code defined in COUNTRY_CODES
     *      - Name of field which its value defines the country code
     *      - Name of callback function that returns the country code
     *      - A callback function that returns the country code
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      var country = options.country;
      if (!country) {
        country = value.substr(0, 2);
      } else if (typeof country !== 'string' || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
        // Determine the country code
        country = validator.getDynamicOption($field, country);
      }

      if ($.inArray(country, this.COUNTRY_CODES) === -1) {
        return {
          valid: false,
          message: $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.vat.countryNotSupported, country)
        };
      }

      var method  = ['_', country.toLowerCase()].join('');
      return this[method](value)
          ? true
          : {
        valid: false,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.vat.country, $.fn.bootstrapValidator.i18n.vat.countries[country.toUpperCase()])
      };
    },

    // VAT validators

    /**
     * Validate Austrian VAT number
     * Example:
     * - Valid: ATU13585627
     * - Invalid: ATU13585626
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _at: function(value) {
      if (/^ATU[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^U[0-9]{8}$/.test(value)) {
        return false;
      }

      value = value.substr(1);
      var sum    = 0,
          weight = [1, 2, 1, 2, 1, 2, 1],
          temp   = 0;
      for (var i = 0; i < 7; i++) {
        temp = parseInt(value.charAt(i), 10) * weight[i];
        if (temp > 9) {
          temp = Math.floor(temp / 10) + temp % 10;
        }
        sum += temp;
      }

      sum = 10 - (sum + 4) % 10;
      if (sum === 10) {
        sum = 0;
      }

      return (sum + '' === value.substr(7, 1));
    },

    /**
     * Validate Belgian VAT number
     * Example:
     * - Valid: BE0428759497
     * - Invalid: BE431150351
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _be: function(value) {
      if (/^BE[0]{0,1}[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0]{0,1}[0-9]{9}$/.test(value)) {
        return false;
      }

      if (value.length === 9) {
        value = '0' + value;
      }
      if (value.substr(1, 1) === '0') {
        return false;
      }

      var sum = parseInt(value.substr(0, 8), 10) + parseInt(value.substr(8, 2), 10);
      return (sum % 97 === 0);
    },

    /**
     * Validate Bulgarian VAT number
     * Example:
     * - Valid: BG175074752,
     * BG7523169263, BG8032056031,
     * BG7542011030,
     * BG7111042925
     * - Invalid: BG175074753, BG7552A10004, BG7111042922
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _bg: function(value) {
      if (/^BG[0-9]{9,10}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9,10}$/.test(value)) {
        return false;
      }

      var sum = 0, i = 0;

      // Legal entities
      if (value.length === 9) {
        for (i = 0; i < 8; i++) {
          sum += parseInt(value.charAt(i), 10) * (i + 1);
        }
        sum = sum % 11;
        if (sum === 10) {
          sum = 0;
          for (i = 0; i < 8; i++) {
            sum += parseInt(value.charAt(i), 10) * (i + 3);
          }
        }
        sum = sum % 10;
        return (sum + '' === value.substr(8));
      }
      // Physical persons, foreigners and others
      else if (value.length === 10) {
        // Validate Bulgarian national identification numbers
        var egn = function(value) {
              // Check the birth date
              var year  = parseInt(value.substr(0, 2), 10) + 1900,
                  month = parseInt(value.substr(2, 2), 10),
                  day   = parseInt(value.substr(4, 2), 10);
              if (month > 40) {
                year += 100;
                month -= 40;
              } else if (month > 20) {
                year -= 100;
                month -= 20;
              }

              if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
                return false;
              }

              var sum    = 0,
                  weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
              for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
              }
              sum = (sum % 11) % 10;
              return (sum + '' === value.substr(9, 1));
            },
        // Validate Bulgarian personal number of a foreigner
            pnf = function(value) {
              var sum    = 0,
                  weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
              for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
              }
              sum = sum % 10;
              return (sum + '' === value.substr(9, 1));
            },
        // Finally, consider it as a VAT number
            vat = function(value) {
              var sum    = 0,
                  weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
              for (var i = 0; i < 9; i++) {
                sum += parseInt(value.charAt(i), 10) * weight[i];
              }
              sum = 11 - sum % 11;
              if (sum === 10) {
                return false;
              }
              if (sum === 11) {
                sum = 0;
              }
              return (sum + '' === value.substr(9, 1));
            };
        return (egn(value) || pnf(value) || vat(value));
      }

      return false;
    },

    /**
     * Validate Brazilian VAT number (CNPJ)
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _br: function(value) {
      if (value === '') {
        return true;
      }
      var cnpj = value.replace(/[^\d]+/g, '');
      if (cnpj === '' || cnpj.length !== 14) {
        return false;
      }

      // Remove invalids CNPJs
      if (cnpj === '00000000000000' || cnpj === '11111111111111' || cnpj === '22222222222222' ||
          cnpj === '33333333333333' || cnpj === '44444444444444' || cnpj === '55555555555555' ||
          cnpj === '66666666666666' || cnpj === '77777777777777' || cnpj === '88888888888888' ||
          cnpj === '99999999999999')
      {
        return false;
      }

      // Validate verification digits
      var length  = cnpj.length - 2,
          numbers = cnpj.substring(0, length),
          digits  = cnpj.substring(length),
          sum     = 0,
          pos     = length - 7;

      for (var i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }

      var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(digits.charAt(0), 10)) {
        return false;
      }

      length  = length + 1;
      numbers = cnpj.substring(0, length);
      sum     = 0;
      pos     = length - 7;
      for (i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
        if (pos < 2) {
          pos = 9;
        }
      }

      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      return (result === parseInt(digits.charAt(1), 10));
    },

    /**
     * Validate Swiss VAT number
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _ch: function(value) {
      if (/^CHE[0-9]{9}(MWST)?$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^E[0-9]{9}(MWST)?$/.test(value)) {
        return false;
      }

      value = value.substr(1);
      var sum    = 0,
          weight = [5, 4, 3, 2, 7, 6, 5, 4];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      sum = 11 - sum % 11;
      if (sum === 10) {
        return false;
      }
      if (sum === 11) {
        sum = 0;
      }

      return (sum + '' === value.substr(8, 1));
    },

    /**
     * Validate Cypriot VAT number
     * Examples:
     * - Valid: CY10259033P
     * - Invalid: CY10259033Z
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _cy: function(value) {
      if (/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(value)) {
        return false;
      }

      // Do not allow to start with "12"
      if (value.substr(0, 2) === '12') {
        return false;
      }

      // Extract the next digit and multiply by the counter.
      var sum         = 0,
          translation = {
            '0': 1,  '1': 0,  '2': 5,  '3': 7,  '4': 9,
            '5': 13, '6': 15, '7': 17, '8': 19, '9': 21
          };
      for (var i = 0; i < 8; i++) {
        var temp = parseInt(value.charAt(i), 10);
        if (i % 2 === 0) {
          temp = translation[temp + ''];
        }
        sum += temp;
      }

      sum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26];
      return (sum + '' === value.substr(8, 1));
    },

    /**
     * Validate Czech Republic VAT number
     * Can be:
     * i) Legal entities (8 digit numbers)
     * ii) Individuals with a RC (the 9 or 10 digit Czech birth number)
     * iii) Individuals without a RC (9 digit numbers beginning with 6)
     *
     * Examples:
     * - Valid: i) CZ25123891; ii) CZ7103192745, CZ991231123; iii) CZ640903926
     * - Invalid: i) CZ25123890; ii) CZ1103492745, CZ590312123
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _cz: function(value) {
      if (/^CZ[0-9]{8,10}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8,10}$/.test(value)) {
        return false;
      }

      var sum = 0,
          i   = 0;
      if (value.length === 8) {
        // Do not allow to start with '9'
        if (value.charAt(0) + '' === '9') {
          return false;
        }

        sum = 0;
        for (i = 0; i < 7; i++) {
          sum += parseInt(value.charAt(i), 10) * (8 - i);
        }
        sum = 11 - sum % 11;
        if (sum === 10) {
          sum = 0;
        }
        if (sum === 11) {
          sum = 1;
        }

        return (sum + '' === value.substr(7, 1));
      } else if (value.length === 9 && (value.charAt(0) + '' === '6')) {
        sum = 0;
        // Skip the first (which is 6)
        for (i = 0; i < 7; i++) {
          sum += parseInt(value.charAt(i + 1), 10) * (8 - i);
        }
        sum = 11 - sum % 11;
        if (sum === 10) {
          sum = 0;
        }
        if (sum === 11) {
          sum = 1;
        }
        sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
        return (sum + '' === value.substr(8, 1));
      } else if (value.length === 9 || value.length === 10) {
        // Validate Czech birth number (RodnÃ© ÄÃ­slo), which is also national identifier
        var year  = 1900 + parseInt(value.substr(0, 2), 10),
            month = parseInt(value.substr(2, 2), 10) % 50 % 20,
            day   = parseInt(value.substr(4, 2), 10);
        if (value.length === 9) {
          if (year >= 1980) {
            year -= 100;
          }
          if (year > 1953) {
            return false;
          }
        } else if (year < 1954) {
          year += 100;
        }

        if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
          return false;
        }

        // Check that the birth date is not in the future
        if (value.length === 10) {
          var check = parseInt(value.substr(0, 9), 10) % 11;
          if (year < 1985) {
            check = check % 10;
          }
          return (check + '' === value.substr(9, 1));
        }

        return true;
      }

      return false;
    },

    /**
     * Validate German VAT number
     * Examples:
     * - Valid: DE136695976
     * - Invalid: DE136695978
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _de: function(value) {
      if (/^DE[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)) {
        return false;
      }

      return $.fn.bootstrapValidator.helpers.mod11And10(value);
    },

    /**
     * Validate Danish VAT number
     * Example:
     * - Valid: DK13585628
     * - Invalid: DK13585627
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _dk: function(value) {
      if (/^DK[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [2, 7, 6, 5, 4, 3, 2, 1];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      return (sum % 11 === 0);
    },

    /**
     * Validate Estonian VAT number
     * Examples:
     * - Valid: EE100931558, EE100594102
     * - Invalid: EE100594103
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _ee: function(value) {
      if (/^EE[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
      for (var i = 0; i < 9; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      return (sum % 10 === 0);
    },

    /**
     * Validate Spanish VAT number (NIF - NÃºmero de IdentificaciÃ³n Fiscal)
     * Can be:
     * i) DNI (Documento nacional de identidad), for Spaniards
     * ii) NIE (NÃºmero de IdentificaciÃ³n de Extranjeros), for foreigners
     * iii) CIF (Certificado de IdentificaciÃ³n Fiscal), for legal entities and others
     *
     * Examples:
     * - Valid: i) ES54362315K; ii) ESX2482300W, ESX5253868R; iii) ESM1234567L, ESJ99216582, ESB58378431, ESB64717838
     * - Invalid: i) ES54362315Z; ii) ESX2482300A; iii) ESJ99216583
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _es: function(value) {
      if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(value)) {
        return false;
      }

      var dni = function(value) {
            var check = parseInt(value.substr(0, 8), 10);
            check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
            return (check + '' === value.substr(8, 1));
          },
          nie = function(value) {
            var check = ['XYZ'.indexOf(value.charAt(0)), value.substr(1)].join('');
            check = parseInt(check, 10);
            check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
            return (check + '' === value.substr(8, 1));
          },
          cif = function(value) {
            var first = value.charAt(0), check;
            if ('KLM'.indexOf(first) !== -1) {
              // K: Spanish younger than 14 year old
              // L: Spanish living outside Spain without DNI
              // M: Granted the tax to foreigners who have no NIE
              check = parseInt(value.substr(1, 8), 10);
              check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
              return (check + '' === value.substr(8, 1));
            } else if ('ABCDEFGHJNPQRSUVW'.indexOf(first) !== -1) {
              var sum    = 0,
                  weight = [2, 1, 2, 1, 2, 1, 2],
                  temp   = 0;

              for (var i = 0; i < 7; i++) {
                temp = parseInt(value.charAt(i + 1), 10) * weight[i];
                if (temp > 9) {
                  temp = Math.floor(temp / 10) + temp % 10;
                }
                sum += temp;
              }
              sum = 10 - sum % 10;
              return (sum + '' === value.substr(8, 1) || 'JABCDEFGHI'[sum] === value.substr(8, 1));
            }

            return false;
          };

      var first = value.charAt(0);
      if (/^[0-9]$/.test(first)) {
        return dni(value);
      } else if (/^[XYZ]$/.test(first)) {
        return nie(value);
      } else {
        return cif(value);
      }
    },

    /**
     * Validate Finnish VAT number
     * Examples:
     * - Valid: FI20774740
     * - Invalid: FI20774741
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _fi: function(value) {
      if (/^FI[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [7, 9, 10, 5, 8, 4, 2, 1];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      return (sum % 11 === 0);
    },

    /**
     * Validate French VAT number (TVA - taxe sur la valeur ajoutÃ©e)
     * It's constructed by a SIREN number, prefixed by two characters.
     *
     * Examples:
     * - Valid: FR40303265045, FR23334175221, FRK7399859412, FR4Z123456782
     * - Invalid: FR84323140391
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _fr: function(value) {
      if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(value)) {
        return false;
      }

      if (!$.fn.bootstrapValidator.helpers.luhn(value.substr(2))) {
        return false;
      }

      if (/^[0-9]{2}$/.test(value.substr(0, 2))) {
        // First two characters are digits
        return value.substr(0, 2) === (parseInt(value.substr(2) + '12', 10) % 97 + '');
      } else {
        // The first characters cann't be O and I
        var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
            check;
        // First one is digit
        if (/^[0-9]{1}$/.test(value.charAt(0))) {
          check = alphabet.indexOf(value.charAt(0)) * 24 + alphabet.indexOf(value.charAt(1)) - 10;
        } else {
          check = alphabet.indexOf(value.charAt(0)) * 34 + alphabet.indexOf(value.charAt(1)) - 100;
        }
        return ((parseInt(value.substr(2), 10) + 1 + Math.floor(check / 11)) % 11) === (check % 11);
      }
    },

    /**
     * Validate United Kingdom VAT number
     * Example:
     * - Valid: GB980780684
     * - Invalid: GB802311781
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _gb: function(value) {
      if (/^GB[0-9]{9}$/.test(value)             /* Standard */
          || /^GB[0-9]{12}$/.test(value)         /* Branches */
          || /^GBGD[0-9]{3}$/.test(value)        /* Government department */
          || /^GBHA[0-9]{3}$/.test(value)        /* Health authority */
          || /^GB(GD|HA)8888[0-9]{5}$/.test(value))
      {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)
          && !/^[0-9]{12}$/.test(value)
          && !/^GD[0-9]{3}$/.test(value)
          && !/^HA[0-9]{3}$/.test(value)
          && !/^(GD|HA)8888[0-9]{5}$/.test(value))
      {
        return false;
      }

      var length = value.length;
      if (length === 5) {
        var firstTwo  = value.substr(0, 2),
            lastThree = parseInt(value.substr(2), 10);
        return ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500);
      } else if (length === 11 && ('GD8888' === value.substr(0, 6) || 'HA8888' === value.substr(0, 6))) {
        if (('GD' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) >= 500)
            || ('HA' === value.substr(0, 2) && parseInt(value.substr(6, 3), 10) < 500))
        {
          return false;
        }
        return (parseInt(value.substr(6, 3), 10) % 97 === parseInt(value.substr(9, 2), 10));
      } else if (length === 9 || length === 12) {
        var sum    = 0,
            weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
        for (var i = 0; i < 9; i++) {
          sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 97;

        if (parseInt(value.substr(0, 3), 10) >= 100) {
          return (sum === 0 || sum === 42 || sum === 55);
        } else {
          return (sum === 0);
        }
      }

      return true;
    },

    /**
     * Validate Greek VAT number
     * Examples:
     * - Valid: GR023456780, EL094259216
     * - Invalid: EL123456781
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _gr: function(value) {
      if (/^(GR|EL)[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)) {
        return false;
      }

      if (value.length === 8) {
        value = '0' + value;
      }

      var sum    = 0,
          weight = [256, 128, 64, 32, 16, 8, 4, 2];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = (sum % 11) % 10;

      return (sum + '' === value.substr(8, 1));
    },

    // EL is traditionally prefix of Greek VAT numbers
    _el: function(value) {
      return this._gr(value);
    },

    /**
     * Validate Hungarian VAT number
     * Examples:
     * - Valid: HU12892312
     * - Invalid: HU12892313
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _hu: function(value) {
      if (/^HU[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [9, 7, 3, 1, 9, 7, 3, 1];

      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      return (sum % 10 === 0);
    },

    /**
     * Validate Croatian VAT number
     * Examples:
     * - Valid: HR33392005961
     * - Invalid: HR33392005962
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _hr: function(value) {
      if (/^HR[0-9]{11}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{11}$/.test(value)) {
        return false;
      }

      return $.fn.bootstrapValidator.helpers.mod11And10(value);
    },

    /**
     * Validate Irish VAT number
     * Examples:
     * - Valid: IE6433435F, IE6433435OA, IE8D79739I
     * - Invalid: IE8D79738J
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _ie: function(value) {
      if (/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(value)) {
        return false;
      }

      var getCheckDigit = function(value) {
        while (value.length < 7) {
          value = '0' + value;
        }
        var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV',
            sum      = 0;
        for (var i = 0; i < 7; i++) {
          sum += parseInt(value.charAt(i), 10) * (8 - i);
        }
        sum += 9 * alphabet.indexOf(value.substr(7));
        return alphabet[sum % 23];
      };

      // The first 7 characters are digits
      if (/^[0-9]+$/.test(value.substr(0, 7))) {
        // New system
        return value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '');
      } else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(value.charAt(1)) !== -1) {
        // Old system
        return value.charAt(7) === getCheckDigit(value.substr(2, 5) + value.substr(0, 1) + '');
      }

      return true;
    },

    /**
     * Validate Icelandic VAT (VSK) number
     * Examples:
     * - Valid: 12345, 123456
     * - Invalid: 1234567
     *
     * @params {String} value VAT number
     * @returns {Boolean}
     */
    _is: function(value) {
      if (/^IS[0-9]{5,6}$/.test(value)) {
        value = value.substr(2);
      }
      return /^[0-9]{5,6}$/.test(value);
    },

    /**
     * Validate Italian VAT number, which consists of 11 digits.
     * - First 7 digits are a company identifier
     * - Next 3 are the province of residence
     * - The last one is a check digit
     *
     * Examples:
     * - Valid: IT00743110157
     * - Invalid: IT00743110158
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _it: function(value) {
      if (/^IT[0-9]{11}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{11}$/.test(value)) {
        return false;
      }

      if (parseInt(value.substr(0, 7), 10) === 0) {
        return false;
      }

      var lastThree = parseInt(value.substr(7, 3), 10);
      if ((lastThree < 1) || (lastThree > 201) && lastThree !== 999 && lastThree !== 888) {
        return false;
      }

      return $.fn.bootstrapValidator.helpers.luhn(value);
    },

    /**
     * Validate Lithuanian VAT number
     * It can be:
     * - 9 digits, for legal entities
     * - 12 digits, for temporarily registered taxpayers
     *
     * Examples:
     * - Valid: LT119511515, LT100001919017, LT100004801610
     * - Invalid: LT100001919018
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _lt: function(value) {
      if (/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(value)) {
        return false;
      }

      var length = value.length,
          sum    = 0,
          i;
      for (i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * (1 + i % 9);
      }
      var check = sum % 11;
      if (check === 10) {
        sum = 0;
        for (i = 0; i < length - 1; i++) {
          sum += parseInt(value.charAt(i), 10) * (1 + (i + 2) % 9);
        }
      }
      check = check % 11 % 10;
      return (check + '' === value.charAt(length - 1));
    },

    /**
     * Validate Luxembourg VAT number
     * Examples:
     * - Valid: LU15027442
     * - Invalid: LU15027443
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _lu: function(value) {
      if (/^LU[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8}$/.test(value)) {
        return false;
      }

      return ((parseInt(value.substr(0, 6), 10) % 89) + '' === value.substr(6, 2));
    },

    /**
     * Validate Latvian VAT number
     * Examples:
     * - Valid: LV40003521600, LV16117519997
     * - Invalid: LV40003521601, LV16137519997
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _lv: function(value) {
      if (/^LV[0-9]{11}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{11}$/.test(value)) {
        return false;
      }

      var first  = parseInt(value.charAt(0), 10),
          sum    = 0,
          weight = [],
          i,
          length = value.length;
      if (first > 3) {
        // Legal entity
        sum    = 0;
        weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
        for (i = 0; i < length; i++) {
          sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        return (sum === 3);
      } else {
        // Check birth date
        var day   = parseInt(value.substr(0, 2), 10),
            month = parseInt(value.substr(2, 2), 10),
            year  = parseInt(value.substr(4, 2), 10);
        year = year + 1800 + parseInt(value.charAt(6), 10) * 100;

        if (!$.fn.bootstrapValidator.helpers.date(year, month, day)) {
          return false;
        }

        // Check personal code
        sum    = 0;
        weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (i = 0; i < length - 1; i++) {
          sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = (sum + 1) % 11 % 10;
        return (sum + '' === value.charAt(length - 1));
      }
    },

    /**
     * Validate Maltese VAT number
     * Examples:
     * - Valid: MT11679112
     * - Invalid: MT11679113
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _mt: function(value) {
      if (/^MT[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [3, 4, 6, 7, 8, 9, 10, 1];

      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      return (sum % 37 === 0);
    },

    /**
     * Validate Dutch VAT number
     * Examples:
     * - Valid: NL004495445B01
     * - Invalid: NL123456789B90
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _nl: function(value) {
      if (/^NL[0-9]{9}B[0-9]{2}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}B[0-9]{2}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [9, 8, 7, 6, 5, 4, 3, 2];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      sum = sum % 11;
      if (sum > 9) {
        sum = 0;
      }
      return (sum + '' === value.substr(8, 1));
    },

    /**
     * Validate Norwegian VAT number
     *
     * @see http://www.brreg.no/english/coordination/number.html
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _no: function(value) {
      if (/^NO[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [3, 2, 7, 6, 5, 4, 3, 2];
      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      sum = 11 - sum % 11;
      if (sum === 11) {
        sum = 0;
      }
      return (sum + '' === value.substr(8, 1));
    },

    /**
     * Validate Polish VAT number
     * Examples:
     * - Valid: PL8567346215
     * - Invalid: PL8567346216
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _pl: function(value) {
      if (/^PL[0-9]{10}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{10}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];

      for (var i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      return (sum % 11 === 0);
    },

    /**
     * Validate Portuguese VAT number
     * Examples:
     * - Valid: PT501964843
     * - Invalid: PT501964842
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _pt: function(value) {
      if (/^PT[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [9, 8, 7, 6, 5, 4, 3, 2];

      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = 11 - sum % 11;
      if (sum > 9) {
        sum = 0;
      }
      return (sum + '' === value.substr(8, 1));
    },

    /**
     * Validate Romanian VAT number
     * Examples:
     * - Valid: RO18547290
     * - Invalid: RO18547291
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _ro: function(value) {
      if (/^RO[1-9][0-9]{1,9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[1-9][0-9]{1,9}$/.test(value)) {
        return false;
      }

      var length = value.length,
          weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length),
          sum    = 0;
      for (var i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }

      sum = (10 * sum) % 11 % 10;
      return (sum + '' === value.substr(length - 1, 1));
    },

    /**
     * Validate Russian VAT number (Taxpayer Identification Number - INN)
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _ru: function(value) {
      if (/^RU([0-9]{10}|[0-9]{12})$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^([0-9]{10}|[0-9]{12})$/.test(value)) {
        return false;
      }

      var i = 0;
      if (value.length === 10) {
        var sum    = 0,
            weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        for (i = 0; i < 10; i++) {
          sum += parseInt(value.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum > 9) {
          sum = sum % 10;
        }

        return (sum + '' === value.substr(9, 1));
      } else if (value.length === 12) {
        var sum1    = 0,
            weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
            sum2    = 0,
            weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];

        for (i = 0; i < 11; i++) {
          sum1 += parseInt(value.charAt(i), 10) * weight1[i];
          sum2 += parseInt(value.charAt(i), 10) * weight2[i];
        }
        sum1 = sum1 % 11;
        if (sum1 > 9) {
          sum1 = sum1 % 10;
        }
        sum2 = sum2 % 11;
        if (sum2 > 9) {
          sum2 = sum2 % 10;
        }

        return (sum1 + '' === value.substr(10, 1) && sum2 + '' === value.substr(11, 1));
      }

      return false;
    },

    /**
     * Validate Serbian VAT number
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _rs: function(value) {
      if (/^RS[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{9}$/.test(value)) {
        return false;
      }

      var sum  = 10,
          temp = 0;
      for (var i = 0; i < 8; i++) {
        temp = (parseInt(value.charAt(i), 10) + sum) % 10;
        if (temp === 0) {
          temp = 10;
        }
        sum = (2 * temp) % 11;
      }

      return ((sum + parseInt(value.substr(8, 1), 10)) % 10 === 1);
    },

    /**
     * Validate Swedish VAT number
     * Examples:
     * - Valid: SE123456789701
     * - Invalid: SE123456789101
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _se: function(value) {
      if (/^SE[0-9]{10}01$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{10}01$/.test(value)) {
        return false;
      }

      value = value.substr(0, 10);
      return $.fn.bootstrapValidator.helpers.luhn(value);
    },

    /**
     * Validate Slovenian VAT number
     * Examples:
     * - Valid: SI50223054
     * - Invalid: SI50223055
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _si: function(value) {
      if (/^SI[0-9]{8}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[0-9]{8}$/.test(value)) {
        return false;
      }

      var sum    = 0,
          weight = [8, 7, 6, 5, 4, 3, 2];

      for (var i = 0; i < 7; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
      }
      sum = 11 - sum % 11;
      if (sum === 10) {
        sum = 0;
      }
      return (sum + '' === value.substr(7, 1));
    },

    /**
     * Validate Slovak VAT number
     * Examples:
     * - Valid: SK2022749619
     * - Invalid: SK2022749618
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _sk: function(value) {
      if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(value)) {
        return false;
      }

      return (parseInt(value, 10) % 11 === 0);
    },

    /**
     * Validate Venezuelan VAT number (RIF)
     * Examples:
     * - Valid: VEJ309272292, VEV242818101, VEJ000126518, VEJ000458324, J309272292, V242818101, J000126518, J000458324
     * - Invalid: VEJ309272293, VEV242818100, J000126519, J000458323
     *
     * @param {String} value VAT number
     * @returns {Boolean}
     */
    _ve: function(value) {
      if (/^VE[VEJPG][0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }
      if (!/^[VEJPG][0-9]{9}$/.test(value)) {
        return false;
      }

      var types  = {
            'V': 4,
            'E': 8,
            'J': 12,
            'P': 16,
            'G': 20
          },
          sum    = types[value.charAt(0)],
          weight = [3, 2, 7, 6, 5, 4, 3, 2];

      for (var i = 0; i < 8; i++) {
        sum += parseInt(value.charAt(i + 1), 10) * weight[i];
      }

      sum = 11 - sum % 11;
      if (sum === 11 || sum === 10) {
        sum = 0;
      }
      return (sum + '' === value.substr(9, 1));
    },

    /**
     * Validate South African VAT number
     * Examples:
     * - Valid: 4012345678
     * - Invalid: 40123456789, 3012345678
     *
     * @params {String} value VAT number
     * @returns {Boolean}
     */
    _za: function(value) {
      if (/^ZA4[0-9]{9}$/.test(value)) {
        value = value.substr(2);
      }

      return /^4[0-9]{9}$/.test(value);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.vin = $.extend($.fn.bootstrapValidator.i18n.vin || {}, {
    'default': 'Please enter a valid VIN number'
  });

  $.fn.bootstrapValidator.validators.vin = {
    /**
     * Validate an US VIN (Vehicle Identification Number)
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * @returns {Boolean}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '') {
        return true;
      }

      // Don't accept I, O, Q characters
      if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(value)) {
        return false;
      }

      value = value.toUpperCase();
      var chars   = {
            A: 1,   B: 2,   C: 3,   D: 4,   E: 5,   F: 6,   G: 7,   H: 8,
            J: 1,   K: 2,   L: 3,   M: 4,   N: 5,           P: 7,           R: 9,
            S: 2,   T: 3,   U: 4,   V: 5,   W: 6,   X: 7,   Y: 8,   Z: 9,
            '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '0': 0
          },
          weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
          sum     = 0,
          length  = value.length;
      for (var i = 0; i < length; i++) {
        sum += chars[value.charAt(i) + ''] * weights[i];
      }

      var reminder = sum % 11;
      if (reminder === 10) {
        reminder = 'X';
      }

      return (reminder + '') === value.charAt(8);
    }
  };
}(window.jQuery));
;(function($) {
  $.fn.bootstrapValidator.i18n.zipCode = $.extend($.fn.bootstrapValidator.i18n.zipCode || {}, {
    'default': 'Please enter a valid postal code',
    countryNotSupported: 'The country code %s is not supported',
    country: 'Please enter a valid postal code in %s',
    countries: {
      AT: 'Austria',
      BR: 'Brazil',
      CA: 'Canada',
      CH: 'Switzerland',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DK: 'Denmark',
      FR: 'France',
      GB: 'United Kingdom',
      IE: 'Ireland',
      IT: 'Italy',
      MA: 'Morocco',
      NL: 'Netherlands',
      PT: 'Portugal',
      RO: 'Romania',
      RU: 'Russia',
      SE: 'Sweden',
      SG: 'Singapore',
      SK: 'Slovakia',
      US: 'USA'
    }
  });

  $.fn.bootstrapValidator.validators.zipCode = {
    html5Attributes: {
      message: 'message',
      country: 'country'
    },

    COUNTRY_CODES: [ 'AT', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'FR', 'GB', 'IE', 'IT', 'MA', 'NL', 'PT', 'RO', 'RU', 'SE', 'SG', 'SK', 'US'],

    /**
     * Return true if and only if the input value is a valid country zip code
     *
     * @param {BootstrapValidator} validator The validator plugin instance
     * @param {jQuery} $field Field element
     * @param {Object} options Consist of key:
     * - message: The invalid message
     * - country: The country
     *
     * The country can be defined by:
     * - An ISO 3166 country code
     * - Name of field which its value defines the country code
     * - Name of callback function that returns the country code
     * - A callback function that returns the country code
     *
     * callback: function(value, validator, $field) {
         *      // value is the value of field
         *      // validator is the BootstrapValidator instance
         *      // $field is jQuery element representing the field
         * }
     *
     * @returns {Boolean|Object}
     */
    validate: function(validator, $field, options) {
      var value = $field.val();
      if (value === '' || !options.country) {
        return true;
      }

      var country = options.country;
      if (typeof country !== 'string' || $.inArray(country, this.COUNTRY_CODES) === -1) {
        // Try to determine the country
        country = validator.getDynamicOption($field, country);
      }

      if (!country || $.inArray(country.toUpperCase(), this.COUNTRY_CODES) === -1) {
        return { valid: false, message: $.fn.bootstrapValidator.helpers.format($.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, country) };
      }

      var isValid = false;
      country = country.toUpperCase();
      switch (country) {
        // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Austria
        case 'AT':
          isValid = /^([1-9]{1})(\d{3})$/.test(value);
          break;

        case 'BR':
          isValid = /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(value);
          break;

        case 'CA':
          isValid = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(value);
          break;

        case 'CH':
          isValid = /^([1-9]{1})(\d{3})$/.test(value);
          break;

        case 'CZ':
          // Test: http://regexr.com/39hhr
          isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
          break;

        // http://stackoverflow.com/questions/7926687/regular-expression-german-zip-codes
        case 'DE':
          isValid = /^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(value);
          break;

        case 'DK':
          isValid = /^(DK(-|\s)?)?\d{4}$/i.test(value);
          break;

        // http://en.wikipedia.org/wiki/Postal_codes_in_France
        case 'FR':
          isValid = /^[0-9]{5}$/i.test(value);
          break;

        case 'GB':
          isValid = this._gb(value);
          break;

        // http://www.eircode.ie/docs/default-source/Common/prepare-your-business-for-eircode---published-v2.pdf?sfvrsn=2
        // Test: http://refiddle.com/1kpl
        case 'IE':
          isValid = /^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(value);
          break;

        // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Italy
        case 'IT':
          isValid = /^(I-|IT-)?\d{5}$/i.test(value);
          break;

        // http://en.wikipedia.org/wiki/List_of_postal_codes_in_Morocco
        case 'MA':
          isValid = /^[1-9][0-9]{4}$/i.test(value);
          break;

        // http://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
        case 'NL':
          isValid = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(value);
          break;

        // Test: http://refiddle.com/1l2t
        case 'PT':
          isValid = /^[1-9]\d{3}-\d{3}$/.test(value);
          break;

        case 'RO':
          isValid = /^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(value);
          break;

        case 'RU':
          isValid = /^[0-9]{6}$/i.test(value);
          break;

        case 'SE':
          isValid = /^(S-)?\d{3}\s?\d{2}$/i.test(value);
          break;

        case 'SG':
          isValid = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(value);
          break;

        case 'SK':
          // Test: http://regexr.com/39hhr
          isValid = /^(\d{3})([ ]?)(\d{2})$/.test(value);
          break;

        case 'US':
        /* falls through */
        default:
          isValid = /^\d{4,5}([\-]?\d{4})?$/.test(value);
          break;
      }

      return {
        valid: isValid,
        message: $.fn.bootstrapValidator.helpers.format(options.message || $.fn.bootstrapValidator.i18n.zipCode.country, $.fn.bootstrapValidator.i18n.zipCode.countries[country])
      };
    },

    /**
     * Validate United Kingdom postcode
     * Examples:
     * - Standard: EC1A 1BB, W1A 1HQ, M1 1AA, B33 8TH, CR2 6XH, DN55 1PT
     * - Special cases:
     * AI-2640, ASCN 1ZZ, GIR 0AA
     *
     * @see http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
     * @param {String} value The postcode
     * @returns {Boolean}
     */
    _gb: function(value) {
      var firstChar  = '[ABCDEFGHIJKLMNOPRSTUWYZ]',     // Does not accept QVX
          secondChar = '[ABCDEFGHKLMNOPQRSTUVWXY]',     // Does not accept IJZ
          thirdChar  = '[ABCDEFGHJKPMNRSTUVWXY]',
          fourthChar = '[ABEHMNPRVWXY]',
          fifthChar  = '[ABDEFGHJLNPQRSTUWXYZ]',
          regexps    = [
            // AN NAA, ANN NAA, AAN NAA, AANN NAA format
            new RegExp('^(' + firstChar + '{1}' + secondChar + '?[0-9]{1,2})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
            // ANA NAA
            new RegExp('^(' + firstChar + '{1}[0-9]{1}' + thirdChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),
            // AANA NAA
            new RegExp('^(' + firstChar + '{1}' + secondChar + '{1}?[0-9]{1}' + fourthChar + '{1})(\\s*)([0-9]{1}' + fifthChar + '{2})$', 'i'),

            new RegExp('^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$', 'i'),        // BFPO postcodes
            /^(GIR)(\s*)(0AA)$/i,                       // Special postcode GIR 0AA
            /^(BFPO)(\s*)([0-9]{1,4})$/i,               // Standard BFPO numbers
            /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,        // c/o BFPO numbers
            /^([A-Z]{4})(\s*)(1ZZ)$/i,                  // Overseas Territories
            /^(AI-2640)$/i                              // Anguilla
          ];
      for (var i = 0; i < regexps.length; i++) {
        if (regexps[i].test(value)) {
          return true;
        }
      }

      return false;
    }
  };
}(window.jQuery));;//! moment.js
//! version : 2.8.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>23?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){return b._isUTC?tb(a).zone(b._offset||0):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"X":return Xb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return Yb;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===tb.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Nb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),pc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Db]<12&&(a._a[Db]+=12),a._isPm===!1&&12===a._a[Db]&&(a._a[Db]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c=b._i,d=b._f;return b._locale=b._locale||tb.localeData(b._l),null===c||d===a&&""===c?tb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),tb.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):bb(b),new k(b)))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.3",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+(\.\d{1,3})?/,Yb=/\d{1,2}/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=tb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):+this.clone().startOf(b)>+tb(a).startOf(b)},isBefore:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):+this.clone().startOf(b)<+tb(a).startOf(b)},isSame:function(a,b){return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+qb(this._months/12),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";
return a+c}}),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);;!function(a,b){"use strict";if("function"==typeof define&&define.amd)define(["../bower_components/jquery/jquery","moment"],b);else if("object"==typeof exports)b(require("jquery"),require("moment"));else{if(!jQuery)throw new Error("bootstrap-datetimepicker requires jQuery to be loaded first");if(!moment)throw new Error("bootstrap-datetimepicker requires moment.js to be loaded first");b(a.jQuery,moment)}}(this,function(a,b){"use strict";if("undefined"==typeof b)throw new Error("momentjs is required");var c=0,d=function(d,e){var f,g=a.fn.datetimepicker.defaults,h={time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down"},i=this,j=!1,k=function(){var f,j,k=!1;if(i.options=a.extend({},g,e),i.options.icons=a.extend({},h,i.options.icons),i.element=a(d),m(),!i.options.pickTime&&!i.options.pickDate)throw new Error("Must choose at least one picker");if(i.id=c++,b.locale(i.options.language),i.date=b(),i.unset=!1,i.isInput=i.element.is("input"),i.component=!1,i.element.hasClass("input-group")&&(i.component=i.element.find(0===i.element.find(".datepickerbutton").size()?'[class^="input-group-"]':".datepickerbutton")),i.format=i.options.format,f=b().localeData(),i.format||(i.format=i.options.pickDate?f.longDateFormat("L"):"",i.options.pickDate&&i.options.pickTime&&(i.format+=" "),i.format+=i.options.pickTime?f.longDateFormat("LT"):"",i.options.useSeconds&&(-1!==f.longDateFormat("LT").indexOf(" A")?i.format=i.format.split(" A")[0]+":ss A":i.format+=":ss")),i.use24hours=i.format.toLowerCase().indexOf("a")<0&&i.format.indexOf("h")<0,i.component&&(k=i.component.find("span")),i.options.pickTime&&k&&k.addClass(i.options.icons.time),i.options.pickDate&&k&&(k.removeClass(i.options.icons.time),k.addClass(i.options.icons.date)),i.options.widgetParent="string"==typeof i.options.widgetParent&&i.options.widgetParent||i.element.parents().filter(function(){return"scroll"===a(this).css("overflow-y")}).get(0)||"body",i.widget=a(Q()).appendTo(i.options.widgetParent),i.minViewMode=i.options.minViewMode||0,"string"==typeof i.minViewMode)switch(i.minViewMode){case"months":i.minViewMode=1;break;case"years":i.minViewMode=2;break;default:i.minViewMode=0}if(i.viewMode=i.options.viewMode||0,"string"==typeof i.viewMode)switch(i.viewMode){case"months":i.viewMode=1;break;case"years":i.viewMode=2;break;default:i.viewMode=0}i.viewMode=Math.max(i.viewMode,i.minViewMode),i.options.disabledDates=O(i.options.disabledDates),i.options.enabledDates=O(i.options.enabledDates),i.startViewMode=i.viewMode,i.setMinDate(i.options.minDate),i.setMaxDate(i.options.maxDate),r(),s(),u(),v(),w(),q(),E(),l().prop("disabled")||F(),""!==i.options.defaultDate&&""===l().val()&&i.setValue(i.options.defaultDate),1!==i.options.minuteStepping&&(j=i.options.minuteStepping,i.date.minutes(Math.round(i.date.minutes()/j)*j%60).seconds(0))},l=function(){var a;if(i.isInput)return i.element;if(a=i.element.find(".datepickerinput"),0===a.size())a=i.element.find("input");else if(!a.is("input"))throw new Error('CSS class "datepickerinput" cannot be applied to non input element');return a},m=function(){var a;a=i.element.is("input")?i.element.data():i.element.find("input").data(),void 0!==a.dateFormat&&(i.options.format=a.dateFormat),void 0!==a.datePickdate&&(i.options.pickDate=a.datePickdate),void 0!==a.datePicktime&&(i.options.pickTime=a.datePicktime),void 0!==a.dateUseminutes&&(i.options.useMinutes=a.dateUseminutes),void 0!==a.dateUseseconds&&(i.options.useSeconds=a.dateUseseconds),void 0!==a.dateUsecurrent&&(i.options.useCurrent=a.dateUsecurrent),void 0!==a.calendarWeeks&&(i.options.calendarWeeks=a.calendarWeeks),void 0!==a.dateMinutestepping&&(i.options.minuteStepping=a.dateMinutestepping),void 0!==a.dateMindate&&(i.options.minDate=a.dateMindate),void 0!==a.dateMaxdate&&(i.options.maxDate=a.dateMaxdate),void 0!==a.dateShowtoday&&(i.options.showToday=a.dateShowtoday),void 0!==a.dateCollapse&&(i.options.collapse=a.dateCollapse),void 0!==a.dateLanguage&&(i.options.language=a.dateLanguage),void 0!==a.dateDefaultdate&&(i.options.defaultDate=a.dateDefaultdate),void 0!==a.dateDisableddates&&(i.options.disabledDates=a.dateDisableddates),void 0!==a.dateEnableddates&&(i.options.enabledDates=a.dateEnableddates),void 0!==a.dateIcons&&(i.options.icons=a.dateIcons),void 0!==a.dateUsestrict&&(i.options.useStrict=a.dateUsestrict),void 0!==a.dateDirection&&(i.options.direction=a.dateDirection),void 0!==a.dateSidebyside&&(i.options.sideBySide=a.dateSidebyside),void 0!==a.dateDaysofweekdisabled&&(i.options.daysOfWeekDisabled=a.dateDaysofweekdisabled)},n=function(){var b,c="absolute",d=i.component?i.component.offset():i.element.offset(),e=a(window);i.width=i.component?i.component.outerWidth():i.element.outerWidth(),d.top=d.top+i.element.outerHeight(),"up"===i.options.direction?b="top":"bottom"===i.options.direction?b="bottom":"auto"===i.options.direction&&(b=d.top+i.widget.height()>e.height()+e.scrollTop()&&i.widget.height()+i.element.outerHeight()<d.top?"top":"bottom"),"top"===b?(d.bottom=e.height()-d.top+i.element.outerHeight()+3,i.widget.addClass("top").removeClass("bottom")):(d.top+=1,i.widget.addClass("bottom").removeClass("top")),void 0!==i.options.width&&i.widget.width(i.options.width),"left"===i.options.orientation&&(i.widget.addClass("left-oriented"),d.left=d.left-i.widget.width()+20),J()&&(c="fixed",d.top-=e.scrollTop(),d.left-=e.scrollLeft()),e.width()<d.left+i.widget.outerWidth()?(d.right=e.width()-d.left-i.width,d.left="auto",i.widget.addClass("pull-right")):(d.right="auto",i.widget.removeClass("pull-right")),i.widget.css("top"===b?{position:c,bottom:d.bottom,top:"auto",left:d.left,right:d.right}:{position:c,top:d.top,bottom:"auto",left:d.left,right:d.right})},o=function(a,c){(!b(i.date).isSame(b(a))||j)&&(j=!1,i.element.trigger({type:"dp.change",date:b(i.date),oldDate:b(a)}),"change"!==c&&i.element.change())},p=function(a){j=!0,i.element.trigger({type:"dp.error",date:b(a,i.format,i.options.useStrict)})},q=function(a){b.locale(i.options.language);var c=a;c||(c=l().val(),c&&(i.date=b(c,i.format,i.options.useStrict)),i.date||(i.date=b())),i.viewDate=b(i.date).startOf("month"),t(),x()},r=function(){b.locale(i.options.language);var c,d=a("<tr>"),e=b.weekdaysMin();if(i.options.calendarWeeks===!0&&d.append('<th class="cw">#</th>'),0===b().localeData()._week.dow)for(c=0;7>c;c++)d.append('<th class="dow">'+e[c]+"</th>");else for(c=1;8>c;c++)d.append(7===c?'<th class="dow">'+e[0]+"</th>":'<th class="dow">'+e[c]+"</th>");i.widget.find(".datepicker-days thead").append(d)},s=function(){b.locale(i.options.language);var a,c="",d=b.monthsShort();for(a=0;12>a;a++)c+='<span class="month">'+d[a]+"</span>";i.widget.find(".datepicker-months td").append(c)},t=function(){if(i.options.pickDate){b.locale(i.options.language);var c,d,e,f,g,h,j,k,l,m=i.viewDate.year(),n=i.viewDate.month(),o=i.options.minDate.year(),p=i.options.minDate.month(),q=i.options.maxDate.year(),r=i.options.maxDate.month(),s=[],t=b.months();for(i.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"),i.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"),i.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"),i.widget.find(".datepicker-days th:eq(1)").text(t[n]+" "+m),d=b(i.viewDate,i.format,i.options.useStrict).subtract(1,"months"),j=d.daysInMonth(),d.date(j).startOf("week"),(m===o&&p>=n||o>m)&&i.widget.find(".datepicker-days th:eq(0)").addClass("disabled"),(m===q&&n>=r||m>q)&&i.widget.find(".datepicker-days th:eq(2)").addClass("disabled"),e=b(d).add(42,"d");d.isBefore(e);){if(d.weekday()===b().startOf("week").weekday()&&(f=a("<tr>"),s.push(f),i.options.calendarWeeks===!0&&f.append('<td class="cw">'+d.week()+"</td>")),g="",d.year()<m||d.year()===m&&d.month()<n?g+=" old":(d.year()>m||d.year()===m&&d.month()>n)&&(g+=" new"),d.isSame(b({y:i.date.year(),M:i.date.month(),d:i.date.date()}))&&(g+=" active"),(M(d,"day")||!N(d))&&(g+=" disabled"),i.options.showToday===!0&&d.isSame(b(),"day")&&(g+=" today"),i.options.daysOfWeekDisabled)for(h=0;h<i.options.daysOfWeekDisabled.length;h++)if(d.day()===i.options.daysOfWeekDisabled[h]){g+=" disabled";break}f.append('<td class="day'+g+'">'+d.date()+"</td>"),c=d.date(),d.add(1,"d"),c===d.date()&&d.add(1,"d")}for(i.widget.find(".datepicker-days tbody").empty().append(s),l=i.date.year(),t=i.widget.find(".datepicker-months").find("th:eq(1)").text(m).end().find("span").removeClass("active"),l===m&&t.eq(i.date.month()).addClass("active"),o>m-1&&i.widget.find(".datepicker-months th:eq(0)").addClass("disabled"),m+1>q&&i.widget.find(".datepicker-months th:eq(2)").addClass("disabled"),h=0;12>h;h++)m===o&&p>h||o>m?a(t[h]).addClass("disabled"):(m===q&&h>r||m>q)&&a(t[h]).addClass("disabled");for(s="",m=10*parseInt(m/10,10),k=i.widget.find(".datepicker-years").find("th:eq(1)").text(m+"-"+(m+9)).parents("table").find("td"),i.widget.find(".datepicker-years").find("th").removeClass("disabled"),o>m&&i.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"),m+9>q&&i.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"),m-=1,h=-1;11>h;h++)s+='<span class="year'+(-1===h||10===h?" old":"")+(l===m?" active":"")+(o>m||m>q?" disabled":"")+'">'+m+"</span>",m+=1;k.html(s)}},u=function(){b.locale(i.options.language);var a,c,d,e=i.widget.find(".timepicker .timepicker-hours table"),f="";if(e.parent().hide(),i.use24hours)for(a=0,c=0;6>c;c+=1){for(f+="<tr>",d=0;4>d;d+=1)f+='<td class="hour">'+P(a.toString())+"</td>",a++;f+="</tr>"}else for(a=1,c=0;3>c;c+=1){for(f+="<tr>",d=0;4>d;d+=1)f+='<td class="hour">'+P(a.toString())+"</td>",a++;f+="</tr>"}e.html(f)},v=function(){var a,b,c=i.widget.find(".timepicker .timepicker-minutes table"),d="",e=0,f=i.options.minuteStepping;for(c.parent().hide(),1===f&&(f=5),a=0;a<Math.ceil(60/f/4);a++){for(d+="<tr>",b=0;4>b;b+=1)60>e?(d+='<td class="minute">'+P(e.toString())+"</td>",e+=f):d+="<td></td>";d+="</tr>"}c.html(d)},w=function(){var a,b,c=i.widget.find(".timepicker .timepicker-seconds table"),d="",e=0;for(c.parent().hide(),a=0;3>a;a++){for(d+="<tr>",b=0;4>b;b+=1)d+='<td class="second">'+P(e.toString())+"</td>",e+=5;d+="</tr>"}c.html(d)},x=function(){if(i.date){var a=i.widget.find(".timepicker span[data-time-component]"),b=i.date.hours(),c=i.date.format("A");i.use24hours||(0===b?b=12:12!==b&&(b%=12),i.widget.find(".timepicker [data-action=togglePeriod]").text(c)),a.filter("[data-time-component=hours]").text(P(b)),a.filter("[data-time-component=minutes]").text(P(i.date.minutes())),a.filter("[data-time-component=seconds]").text(P(i.date.second()))}},y=function(c){c.stopPropagation(),c.preventDefault(),i.unset=!1;var d,e,f,g,h=a(c.target).closest("span, td, th"),j=b(i.date);if(1===h.length&&!h.is(".disabled"))switch(h[0].nodeName.toLowerCase()){case"th":switch(h[0].className){case"picker-switch":E(1);break;case"prev":case"next":f=R.modes[i.viewMode].navStep,"prev"===h[0].className&&(f=-1*f),i.viewDate.add(f,R.modes[i.viewMode].navFnc),t()}break;case"span":h.is(".month")?(d=h.parent().find("span").index(h),i.viewDate.month(d)):(e=parseInt(h.text(),10)||0,i.viewDate.year(e)),i.viewMode===i.minViewMode&&(i.date=b({y:i.viewDate.year(),M:i.viewDate.month(),d:i.viewDate.date(),h:i.date.hours(),m:i.date.minutes(),s:i.date.seconds()}),K(),o(j,c.type)),E(-1),t();break;case"td":h.is(".day")&&(g=parseInt(h.text(),10)||1,d=i.viewDate.month(),e=i.viewDate.year(),h.is(".old")?0===d?(d=11,e-=1):d-=1:h.is(".new")&&(11===d?(d=0,e+=1):d+=1),i.date=b({y:e,M:d,d:g,h:i.date.hours(),m:i.date.minutes(),s:i.date.seconds()}),i.viewDate=b({y:e,M:d,d:Math.min(28,g)}),t(),K(),o(j,c.type))}},z={incrementHours:function(){L("add","hours",1)},incrementMinutes:function(){L("add","minutes",i.options.minuteStepping)},incrementSeconds:function(){L("add","seconds",1)},decrementHours:function(){L("subtract","hours",1)},decrementMinutes:function(){L("subtract","minutes",i.options.minuteStepping)},decrementSeconds:function(){L("subtract","seconds",1)},togglePeriod:function(){var a=i.date.hours();a>=12?a-=12:a+=12,i.date.hours(a)},showPicker:function(){i.widget.find(".timepicker > div:not(.timepicker-picker)").hide(),i.widget.find(".timepicker .timepicker-picker").show()},showHours:function(){i.widget.find(".timepicker .timepicker-picker").hide(),i.widget.find(".timepicker .timepicker-hours").show()},showMinutes:function(){i.widget.find(".timepicker .timepicker-picker").hide(),i.widget.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){i.widget.find(".timepicker .timepicker-picker").hide(),i.widget.find(".timepicker .timepicker-seconds").show()},selectHour:function(b){var c=parseInt(a(b.target).text(),10);i.use24hours||(i.date.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),i.date.hours(c),z.showPicker.call(i)},selectMinute:function(b){i.date.minutes(parseInt(a(b.target).text(),10)),z.showPicker.call(i)},selectSecond:function(b){i.date.seconds(parseInt(a(b.target).text(),10)),z.showPicker.call(i)}},A=function(c){var d=b(i.date),e=a(c.currentTarget).data("action"),f=z[e].apply(i,arguments);return B(c),i.date||(i.date=b({y:1970})),K(),x(),o(d,c.type),f},B=function(a){a.stopPropagation(),a.preventDefault()},C=function(a){27===a.keyCode&&i.hide()},D=function(c){b.locale(i.options.language);var d=a(c.target),e=b(i.date),f=b(d.val(),i.format,i.options.useStrict);f.isValid()&&!M(f)&&N(f)?(q(),i.setValue(f),o(e,c.type),K()):(i.viewDate=e,i.unset=!0,o(e,c.type),p(f))},E=function(a){a&&(i.viewMode=Math.max(i.minViewMode,Math.min(2,i.viewMode+a))),i.widget.find(".datepicker > div").hide().filter(".datepicker-"+R.modes[i.viewMode].clsName).show()},F=function(){var b,c,d,e,f;i.widget.on("click",".datepicker *",a.proxy(y,this)),i.widget.on("click","[data-action]",a.proxy(A,this)),i.widget.on("mousedown",a.proxy(B,this)),i.element.on("keydown",a.proxy(C,this)),i.options.pickDate&&i.options.pickTime&&i.widget.on("click.togglePicker",".accordion-toggle",function(g){if(g.stopPropagation(),b=a(this),c=b.closest("ul"),d=c.find(".in"),e=c.find(".collapse:not(.in)"),d&&d.length){if(f=d.data("collapse"),f&&f.transitioning)return;d.collapse("hide"),e.collapse("show"),b.find("span").toggleClass(i.options.icons.time+" "+i.options.icons.date),i.component&&i.component.find("span").toggleClass(i.options.icons.time+" "+i.options.icons.date)}}),i.isInput?i.element.on({click:a.proxy(i.show,this),focus:a.proxy(i.show,this),change:a.proxy(D,this),blur:a.proxy(i.hide,this)}):(i.element.on({change:a.proxy(D,this)},"input"),i.component?(i.component.on("click",a.proxy(i.show,this)),i.component.on("mousedown",a.proxy(B,this))):i.element.on("click",a.proxy(i.show,this)))},G=function(){a(window).on("resize.datetimepicker"+i.id,a.proxy(n,this)),i.isInput||a(document).on("mousedown.datetimepicker"+i.id,a.proxy(i.hide,this))},H=function(){i.widget.off("click",".datepicker *",i.click),i.widget.off("click","[data-action]"),i.widget.off("mousedown",i.stopEvent),i.options.pickDate&&i.options.pickTime&&i.widget.off("click.togglePicker"),i.isInput?i.element.off({focus:i.show,change:D,click:i.show,blur:i.hide}):(i.element.off({change:D},"input"),i.component?(i.component.off("click",i.show),i.component.off("mousedown",i.stopEvent)):i.element.off("click",i.show))},I=function(){a(window).off("resize.datetimepicker"+i.id),i.isInput||a(document).off("mousedown.datetimepicker"+i.id)},J=function(){if(i.element){var b,c=i.element.parents(),d=!1;for(b=0;b<c.length;b++)if("fixed"===a(c[b]).css("position")){d=!0;break}return d}return!1},K=function(){b.locale(i.options.language);var a="";i.unset||(a=b(i.date).format(i.format)),l().val(a),i.element.data("date",a),i.options.pickTime||i.hide()},L=function(a,c,d){b.locale(i.options.language);var e;return"add"===a?(e=b(i.date),23===e.hours()&&e.add(d,c),e.add(d,c)):e=b(i.date).subtract(d,c),M(b(e.subtract(d,c)))||M(e)?void p(e.format(i.format)):("add"===a?i.date.add(d,c):i.date.subtract(d,c),void(i.unset=!1))},M=function(a,c){b.locale(i.options.language);var d=b(i.options.maxDate,i.format,i.options.useStrict),e=b(i.options.minDate,i.format,i.options.useStrict);return c&&(d=d.endOf(c),e=e.startOf(c)),a.isAfter(d)||a.isBefore(e)?!0:i.options.disabledDates===!1?!1:i.options.disabledDates[a.format("YYYY-MM-DD")]===!0},N=function(a){return b.locale(i.options.language),i.options.enabledDates===!1?!0:i.options.enabledDates[a.format("YYYY-MM-DD")]===!0},O=function(a){var c,d={},e=0;for(c=0;c<a.length;c++)f=b.isMoment(a[c])||a[c]instanceof Date?b(a[c]):b(a[c],i.format,i.options.useStrict),f.isValid()&&(d[f.format("YYYY-MM-DD")]=!0,e++);return e>0?d:!1},P=function(a){return a=a.toString(),a.length>=2?a:"0"+a},Q=function(){var a='<thead><tr><th class="prev">&lsaquo;</th><th colspan="'+(i.options.calendarWeeks?"6":"5")+'" class="picker-switch"></th><th class="next">&rsaquo;</th></tr></thead>',b='<tbody><tr><td colspan="'+(i.options.calendarWeeks?"8":"7")+'"></td></tr></tbody>',c='<div class="datepicker-days"><table class="table-condensed">'+a+'<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">'+a+b+'</table></div><div class="datepicker-years"><table class="table-condensed">'+a+b+"</table></div>",d="";return i.options.pickDate&&i.options.pickTime?(d='<div class="bootstrap-datetimepicker-widget'+(i.options.sideBySide?" timepicker-sbs":"")+(i.use24hours?" usetwentyfour":"")+' dropdown-menu" style="z-index:9999 !important;">',d+=i.options.sideBySide?'<div class="row"><div class="col-sm-6 datepicker">'+c+'</div><div class="col-sm-6 timepicker">'+S.getTemplate()+"</div></div>":'<ul class="list-unstyled"><li'+(i.options.collapse?' class="collapse in"':"")+'><div class="datepicker">'+c+'</div></li><li class="picker-switch accordion-toggle"><a class="btn" style="width:100%"><span class="'+i.options.icons.time+'"></span></a></li><li'+(i.options.collapse?' class="collapse"':"")+'><div class="timepicker">'+S.getTemplate()+"</div></li></ul>",d+="</div>"):i.options.pickTime?'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">'+S.getTemplate()+"</div></div>":'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">'+c+"</div></div>"},R={modes:[{clsName:"days",navFnc:"month",navStep:1},{clsName:"months",navFnc:"year",navStep:1},{clsName:"years",navFnc:"year",navStep:10}]},S={hourTemplate:'<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',minuteTemplate:'<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',secondTemplate:'<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'};S.getTemplate=function(){return'<div class="timepicker-picker"><table class="table-condensed"><tr><td><a href="#" class="btn" data-action="incrementHours"><span class="'+i.options.icons.up+'"></span></a></td><td class="separator"></td><td>'+(i.options.useMinutes?'<a href="#" class="btn" data-action="incrementMinutes"><span class="'+i.options.icons.up+'"></span></a>':"")+"</td>"+(i.options.useSeconds?'<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="'+i.options.icons.up+'"></span></a></td>':"")+(i.use24hours?"":'<td class="separator"></td>')+"</tr><tr><td>"+S.hourTemplate+'</td> <td class="separator">:</td><td>'+(i.options.useMinutes?S.minuteTemplate:'<span class="timepicker-minute">00</span>')+"</td> "+(i.options.useSeconds?'<td class="separator">:</td><td>'+S.secondTemplate+"</td>":"")+(i.use24hours?"":'<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>')+'</tr><tr><td><a href="#" class="btn" data-action="decrementHours"><span class="'+i.options.icons.down+'"></span></a></td><td class="separator"></td><td>'+(i.options.useMinutes?'<a href="#" class="btn" data-action="decrementMinutes"><span class="'+i.options.icons.down+'"></span></a>':"")+"</td>"+(i.options.useSeconds?'<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="'+i.options.icons.down+'"></span></a></td>':"")+(i.use24hours?"":'<td class="separator"></td>')+'</tr></table></div><div class="timepicker-hours" data-action="selectHour"><table class="table-condensed"></table></div><div class="timepicker-minutes" data-action="selectMinute"><table class="table-condensed"></table></div>'+(i.options.useSeconds?'<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>':"")},i.destroy=function(){H(),I(),i.widget.remove(),i.element.removeData("DateTimePicker"),i.component&&i.component.removeData("DateTimePicker")},i.show=function(a){if(!l().prop("disabled")){if(i.options.useCurrent&&""===l().val()){if(1!==i.options.minuteStepping){var c=b(),d=i.options.minuteStepping;c.minutes(Math.round(c.minutes()/d)*d%60).seconds(0),i.setValue(c.format(i.format))}else i.setValue(b().format(i.format));o("",a.type)}a&&"click"===a.type&&i.isInput&&i.widget.hasClass("picker-open")||(i.widget.hasClass("picker-open")?(i.widget.hide(),i.widget.removeClass("picker-open")):(i.widget.show(),i.widget.addClass("picker-open")),i.height=i.component?i.component.outerHeight():i.element.outerHeight(),n(),i.element.trigger({type:"dp.show",date:b(i.date)}),G(),a&&B(a))}},i.disable=function(){var a=l();a.prop("disabled")||(a.prop("disabled",!0),H())},i.enable=function(){var a=l();a.prop("disabled")&&(a.prop("disabled",!1),F())},i.hide=function(){var a,c,d=i.widget.find(".collapse");for(a=0;a<d.length;a++)if(c=d.eq(a).data("collapse"),c&&c.transitioning)return;i.widget.hide(),i.widget.removeClass("picker-open"),i.viewMode=i.startViewMode,E(),i.element.trigger({type:"dp.hide",date:b(i.date)}),I()},i.setValue=function(a){b.locale(i.options.language),a?i.unset=!1:(i.unset=!0,K()),a=b.isMoment(a)?a.locale(i.options.language):a instanceof Date?b(a):b(a,i.format,i.options.useStrict),a.isValid()?(i.date=a,K(),i.viewDate=b({y:i.date.year(),M:i.date.month()}),t(),x()):p(a)},i.getDate=function(){return i.unset?null:b(i.date)},i.setDate=function(a){var c=b(i.date);i.setValue(a?a:null),o(c,"function")},i.setDisabledDates=function(a){i.options.disabledDates=O(a),i.viewDate&&q()},i.setEnabledDates=function(a){i.options.enabledDates=O(a),i.viewDate&&q()},i.setMaxDate=function(a){void 0!==a&&(i.options.maxDate=b.isMoment(a)||a instanceof Date?b(a):b(a,i.format,i.options.useStrict),i.viewDate&&q())},i.setMinDate=function(a){void 0!==a&&(i.options.minDate=b.isMoment(a)||a instanceof Date?b(a):b(a,i.format,i.options.useStrict),i.viewDate&&q())},k()};a.fn.datetimepicker=function(b){return this.each(function(){var c=a(this),e=c.data("DateTimePicker");e||c.data("DateTimePicker",new d(this,b))})},a.fn.datetimepicker.defaults={format:!1,pickDate:!0,pickTime:!0,useMinutes:!0,useSeconds:!1,useCurrent:!0,calendarWeeks:!1,minuteStepping:1,minDate:b({y:1900}),maxDate:b().add(100,"y"),showToday:!0,collapse:!0,language:b.locale(),defaultDate:"",disabledDates:!1,enabledDates:!1,icons:{},useStrict:!1,direction:"auto",sideBySide:!1,daysOfWeekDisabled:[],widgetParent:!1}});;// moment.js language configuration
// language : norwegian bokmål (nb)
// authors : Espen Hovlandsdal : https://github.com/rexxars
//           Sigurd Gartmann : https://github.com/sigurdga

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../moment')); // Node
    } else {
        factory(window.moment); // Browser global
    }
}(function (moment) {
    return moment.lang('nb', {
        months : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort : "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort : "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin : "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat : {
            LT : "H.mm",
            L : "DD.MM.YYYY",
            LL : "D. MMMM YYYY",
            LLL : "D. MMMM YYYY [kl.] LT",
            LLLL : "dddd D. MMMM YYYY [kl.] LT"
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : "om %s",
            past : "for %s siden",
            s : "noen sekunder",
            m : "ett minutt",
            mm : "%d minutter",
            h : "en time",
            hh : "%d timer",
            d : "en dag",
            dd : "%d dager",
            M : "en måned",
            MM : "%d måneder",
            y : "ett år",
            yy : "%d år"
        },
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });
}));
;// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();














/**
 * Copyright 2010 Tim Down.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * jshashtable
 *
 * jshashtable is a JavaScript implementation of a hash table. It creates a single constructor function called Hashtable
 * in the global scope.
 *
 * Author: Tim Down <tim@timdown.co.uk>
 * Version: 2.1
 * Build date: 21 March 2010
 * Website: http://www.timdown.co.uk/jshashtable
 */

var Hashtable = (function() {
  var FUNCTION = "function";

  var arrayRemoveAt = (typeof Array.prototype.splice == FUNCTION) ?
    function(arr, idx) {
      arr.splice(idx, 1);
    } :

    function(arr, idx) {
      var itemsAfterDeleted, i, len;
      if (idx === arr.length - 1) {
        arr.length = idx;
      } else {
        itemsAfterDeleted = arr.slice(idx + 1);
        arr.length = idx;
        for (i = 0, len = itemsAfterDeleted.length; i < len; ++i) {
          arr[idx + i] = itemsAfterDeleted[i];
        }
      }
    };

  function hashObject(obj) {
    var hashCode;
    if (typeof obj == "string") {
      return obj;
    } else if (typeof obj.hashCode == FUNCTION) {
      // Check the hashCode method really has returned a string
      hashCode = obj.hashCode();
      return (typeof hashCode == "string") ? hashCode : hashObject(hashCode);
    } else if (typeof obj.toString == FUNCTION) {
      return obj.toString();
    } else {
      try {
        return String(obj);
      } catch (ex) {
        // For host objects (such as ActiveObjects in IE) that have no toString() method and throw an error when
        // passed to String()
        return Object.prototype.toString.call(obj);
      }
    }
  }

  function equals_fixedValueHasEquals(fixedValue, variableValue) {
    return fixedValue.equals(variableValue);
  }

  function equals_fixedValueNoEquals(fixedValue, variableValue) {
    return (typeof variableValue.equals == FUNCTION) ?
         variableValue.equals(fixedValue) : (fixedValue === variableValue);
  }

  function createKeyValCheck(kvStr) {
    return function(kv) {
      if (kv === null) {
        throw new Error("null is not a valid " + kvStr);
      } else if (typeof kv == "undefined") {
        throw new Error(kvStr + " must not be undefined");
      }
    };
  }

  var checkKey = createKeyValCheck("key"), checkValue = createKeyValCheck("value");

  /*----------------------------------------------------------------------------------------------------------------*/

  function Bucket(hash, firstKey, firstValue, equalityFunction) {
        this[0] = hash;
    this.entries = [];
    this.addEntry(firstKey, firstValue);

    if (equalityFunction !== null) {
      this.getEqualityFunction = function() {
        return equalityFunction;
      };
    }
  }

  var EXISTENCE = 0, ENTRY = 1, ENTRY_INDEX_AND_VALUE = 2;

  function createBucketSearcher(mode) {
    return function(key) {
      var i = this.entries.length, entry, equals = this.getEqualityFunction(key);
      while (i--) {
        entry = this.entries[i];
        if ( equals(key, entry[0]) ) {
          switch (mode) {
            case EXISTENCE:
              return true;
            case ENTRY:
              return entry;
            case ENTRY_INDEX_AND_VALUE:
              return [ i, entry[1] ];
          }
        }
      }
      return false;
    };
  }

  function createBucketLister(entryProperty) {
    return function(aggregatedArr) {
      var startIndex = aggregatedArr.length;
      for (var i = 0, len = this.entries.length; i < len; ++i) {
        aggregatedArr[startIndex + i] = this.entries[i][entryProperty];
      }
    };
  }

  Bucket.prototype = {
    getEqualityFunction: function(searchValue) {
      return (typeof searchValue.equals == FUNCTION) ? equals_fixedValueHasEquals : equals_fixedValueNoEquals;
    },

    getEntryForKey: createBucketSearcher(ENTRY),

    getEntryAndIndexForKey: createBucketSearcher(ENTRY_INDEX_AND_VALUE),

    removeEntryForKey: function(key) {
      var result = this.getEntryAndIndexForKey(key);
      if (result) {
        arrayRemoveAt(this.entries, result[0]);
        return result[1];
      }
      return null;
    },

    addEntry: function(key, value) {
      this.entries[this.entries.length] = [key, value];
    },

    keys: createBucketLister(0),

    values: createBucketLister(1),

    getEntries: function(entries) {
      var startIndex = entries.length;
      for (var i = 0, len = this.entries.length; i < len; ++i) {
        // Clone the entry stored in the bucket before adding to array
        entries[startIndex + i] = this.entries[i].slice(0);
      }
    },

    containsKey: createBucketSearcher(EXISTENCE),

    containsValue: function(value) {
      var i = this.entries.length;
      while (i--) {
        if ( value === this.entries[i][1] ) {
          return true;
        }
      }
      return false;
    }
  };

  /*----------------------------------------------------------------------------------------------------------------*/

  // Supporting functions for searching hashtable buckets

  function searchBuckets(buckets, hash) {
    var i = buckets.length, bucket;
    while (i--) {
      bucket = buckets[i];
      if (hash === bucket[0]) {
        return i;
      }
    }
    return null;
  }

  function getBucketForHash(bucketsByHash, hash) {
    var bucket = bucketsByHash[hash];

    // Check that this is a genuine bucket and not something inherited from the bucketsByHash's prototype
    return ( bucket && (bucket instanceof Bucket) ) ? bucket : null;
  }

  /*----------------------------------------------------------------------------------------------------------------*/

  function Hashtable(hashingFunctionParam, equalityFunctionParam) {
    var that = this;
    var buckets = [];
    var bucketsByHash = {};

    var hashingFunction = (typeof hashingFunctionParam == FUNCTION) ? hashingFunctionParam : hashObject;
    var equalityFunction = (typeof equalityFunctionParam == FUNCTION) ? equalityFunctionParam : null;

    this.put = function(key, value) {
      checkKey(key);
      checkValue(value);
      var hash = hashingFunction(key), bucket, bucketEntry, oldValue = null;

      // Check if a bucket exists for the bucket key
      bucket = getBucketForHash(bucketsByHash, hash);
      if (bucket) {
        // Check this bucket to see if it already contains this key
        bucketEntry = bucket.getEntryForKey(key);
        if (bucketEntry) {
          // This bucket entry is the current mapping of key to value, so replace old value and we're done.
          oldValue = bucketEntry[1];
          bucketEntry[1] = value;
        } else {
          // The bucket does not contain an entry for this key, so add one
          bucket.addEntry(key, value);
        }
      } else {
        // No bucket exists for the key, so create one and put our key/value mapping in
        bucket = new Bucket(hash, key, value, equalityFunction);
        buckets[buckets.length] = bucket;
        bucketsByHash[hash] = bucket;
      }
      return oldValue;
    };

    this.get = function(key) {
      checkKey(key);

      var hash = hashingFunction(key);

      // Check if a bucket exists for the bucket key
      var bucket = getBucketForHash(bucketsByHash, hash);
      if (bucket) {
        // Check this bucket to see if it contains this key
        var bucketEntry = bucket.getEntryForKey(key);
        if (bucketEntry) {
          // This bucket entry is the current mapping of key to value, so return the value.
          return bucketEntry[1];
        }
      }
      return null;
    };

    this.containsKey = function(key) {
      checkKey(key);
      var bucketKey = hashingFunction(key);

      // Check if a bucket exists for the bucket key
      var bucket = getBucketForHash(bucketsByHash, bucketKey);

      return bucket ? bucket.containsKey(key) : false;
    };

    this.containsValue = function(value) {
      checkValue(value);
      var i = buckets.length;
      while (i--) {
        if (buckets[i].containsValue(value)) {
          return true;
        }
      }
      return false;
    };

    this.clear = function() {
      buckets.length = 0;
      bucketsByHash = {};
    };

    this.isEmpty = function() {
      return !buckets.length;
    };

    var createBucketAggregator = function(bucketFuncName) {
      return function() {
        var aggregated = [], i = buckets.length;
        while (i--) {
          buckets[i][bucketFuncName](aggregated);
        }
        return aggregated;
      };
    };

    this.keys = createBucketAggregator("keys");
    this.values = createBucketAggregator("values");
    this.entries = createBucketAggregator("getEntries");

    this.remove = function(key) {
      checkKey(key);

      var hash = hashingFunction(key), bucketIndex, oldValue = null;

      // Check if a bucket exists for the bucket key
      var bucket = getBucketForHash(bucketsByHash, hash);

      if (bucket) {
        // Remove entry from this bucket for this key
        oldValue = bucket.removeEntryForKey(key);
        if (oldValue !== null) {
          // Entry was removed, so check if bucket is empty
          if (!bucket.entries.length) {
            // Bucket is empty, so remove it from the bucket collections
            bucketIndex = searchBuckets(buckets, hash);
            arrayRemoveAt(buckets, bucketIndex);
            delete bucketsByHash[hash];
          }
        }
      }
      return oldValue;
    };

    this.size = function() {
      var total = 0, i = buckets.length;
      while (i--) {
        total += buckets[i].entries.length;
      }
      return total;
    };

    this.each = function(callback) {
      var entries = that.entries(), i = entries.length, entry;
      while (i--) {
        entry = entries[i];
        callback(entry[0], entry[1]);
      }
    };

    this.putAll = function(hashtable, conflictCallback) {
      var entries = hashtable.entries();
      var entry, key, value, thisValue, i = entries.length;
      var hasConflictCallback = (typeof conflictCallback == FUNCTION);
      while (i--) {
        entry = entries[i];
        key = entry[0];
        value = entry[1];

        // Check for a conflict. The default behaviour is to overwrite the value for an existing key
        if ( hasConflictCallback && (thisValue = that.get(key)) ) {
          value = conflictCallback(key, thisValue, value);
        }
        that.put(key, value);
      }
    };

    this.clone = function() {
      var clone = new Hashtable(hashingFunctionParam, equalityFunctionParam);
      clone.putAll(that);
      return clone;
    };
  }

  return Hashtable;
})();









/**
 * jquery.numberformatter - Formatting/Parsing Numbers in jQuery
 *
 * Written by
 * Michael Abernethy (mike@abernethysoft.com),
 * Andrew Parry (aparry0@gmail.com)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * @author Michael Abernethy, Andrew Parry
 * @version 1.2.3-SNAPSHOT ($Id$)
 *
 * Dependencies
 *
 * jQuery (http://jquery.com)
 * jshashtable (http://www.timdown.co.uk/jshashtable)
 *
 * Notes & Thanks
 *
 * many thanks to advweb.nanasi.jp for his bug fixes
 * jsHashtable is now used also, so thanks to the author for that excellent little class.
 *
 * This plugin can be used to format numbers as text and parse text as Numbers
 * Because we live in an international world, we cannot assume that everyone
 * uses "," to divide thousands, and "." as a decimal point.
 *
 * As of 1.2 the way this plugin works has changed slightly, parsing text to a number
 * has 1 set of functions, formatting a number to text has it's own. Before things
 * were a little confusing, so I wanted to separate the 2 out more.
 *
 *
 * jQuery extension functions:
 *
 * formatNumber(options, writeBack, giveReturnValue) - Reads the value from the subject, parses to
 * a Javascript Number object, then formats back to text using the passed options and write back to
 * the subject.
 *
 * parseNumber(options) - Parses the value in the subject to a Number object using the passed options
 * to decipher the actual number from the text, then writes the value as text back to the subject.
 *
 *
 * Generic functions:
 *
 * formatNumber(numberString, options) - Takes a plain number as a string (e.g. '1002.0123') and returns
 * a string of the given format options.
 *
 * parseNumber(numberString, options) - Takes a number as text that is formatted the same as the given
 * options then and returns it as a plain Number object.
 *
 * To achieve the old way of combining parsing and formatting to keep say a input field always formatted
 * to a given format after it has lost focus you'd simply use a combination of the functions.
 *
 * e.g.
 * $("#salary").blur(function(){
 *    $(this).parseNumber({format:"#,###.00", locale:"us"});
 *    $(this).formatNumber({format:"#,###.00", locale:"us"});
 * });
 *
 * The syntax for the formatting is:
 * 0 = Digit
 * # = Digit, zero shows as absent
 * . = Decimal separator
 * - = Negative sign
 * , = Grouping Separator
 * % = Percent (multiplies the number by 100)
 *
 * For example, a format of "#,###.00" and text of 4500.20 will
 * display as "4.500,20" with a locale of "de", and "4,500.20" with a locale of "us"
 *
 *
 * As of now, the only acceptable locales are
 * Arab Emirates -> "ae"
 * Australia -> "au"
 * Austria -> "at"
 * Brazil -> "br"
 * Canada -> "ca"
 * China -> "cn"
 * Czech -> "cz"
 * Denmark -> "dk"
 * Egypt -> "eg"
 * Finland -> "fi"
 * France  -> "fr"
 * Germany -> "de"
 * Greece -> "gr"
 * Great Britain -> "gb"
 * Hong Kong -> "hk"
 * India -> "in"
 * Israel -> "il"
 * Japan -> "jp"
 * Russia -> "ru"
 * South Korea -> "kr"
 * Spain -> "es"
 * Sweden -> "se"
 * Switzerland -> "ch"
 * Taiwan -> "tw"
 * Thailand -> "th"
 * United States -> "us"
 * Vietnam -> "vn"
 **/

(function(jQuery) {

  var nfLocales = new Hashtable();

  var nfLocalesLikeUS = [ 'ae','au','ca','cn','eg','gb','hk','il','in','jp','sk','th','tw','us' ];
  var nfLocalesLikeDE = [ 'at','br','de','dk','es','gr','it','nl','pt','tr','vn' ];
  var nfLocalesLikeFR = [ 'cz','fi','fr','ru','se','pl' ];
  var nfLocalesLikeCH = [ 'ch' ];

  var nfLocaleFormatting = [ [".", ","], [",", "."], [",", " "], [".", "'"] ];
  var nfAllLocales = [ nfLocalesLikeUS, nfLocalesLikeDE, nfLocalesLikeFR, nfLocalesLikeCH ]

  function FormatData(dec, group, neg) {
    this.dec = dec;
    this.group = group;
    this.neg = neg;
  };

  function init() {
    // write the arrays into the hashtable
    for (var localeGroupIdx = 0; localeGroupIdx < nfAllLocales.length; localeGroupIdx++) {
      localeGroup = nfAllLocales[localeGroupIdx];
      for (var i = 0; i < localeGroup.length; i++) {
        nfLocales.put(localeGroup[i], localeGroupIdx);
      }
    }
  };

  function formatCodes(locale, isFullLocale) {
    if (nfLocales.size() == 0)
      init();

         // default values
         var dec = ".";
         var group = ",";
         var neg = "-";

         if (isFullLocale == false) {
           // Extract and convert to lower-case any language code from a real 'locale' formatted string, if not use as-is
           // (To prevent locale format like : "fr_FR", "en_US", "de_DE", "fr_FR", "en-US", "de-DE")
           if (locale.indexOf('_') != -1)
        locale = locale.split('_')[1].toLowerCase();
       else if (locale.indexOf('-') != -1)
        locale = locale.split('-')[1].toLowerCase();
    }

     // hashtable lookup to match locale with codes
     var codesIndex = nfLocales.get(locale);
     if (codesIndex) {
      var codes = nfLocaleFormatting[codesIndex];
      if (codes) {
        dec = codes[0];
        group = codes[1];
      }
     }
     return new FormatData(dec, group, neg);
    };


  /*  Formatting Methods  */


  /**
   * Formats anything containing a number in standard js number notation.
   *
   * @param {Object}  options     The formatting options to use
   * @param {Boolean} writeBack   (true) If the output value should be written back to the subject
   * @param {Boolean} giveReturnValue (true) If the function should return the output string
   */
  jQuery.fn.formatNumber = function(options, writeBack, giveReturnValue) {

    return this.each(function() {
      // enforce defaults
      if (writeBack == null)
        writeBack = true;
      if (giveReturnValue == null)
        giveReturnValue = true;

      // get text
      var text;
      if (jQuery(this).is(":input"))
        text = new String(jQuery(this).val());
      else
        text = new String(jQuery(this).text());

      // format
      var returnString = jQuery.formatNumber(text, options);

      // set formatted string back, only if a success
//      if (returnString) {
        if (writeBack) {
          if (jQuery(this).is(":input"))
            jQuery(this).val(returnString);
          else
            jQuery(this).text(returnString);
        }
        if (giveReturnValue)
          return returnString;
//      }
//      return '';
    });
  };

  /**
   * First parses a string and reformats it with the given options.
   *
   * @param {Object} numberString
   * @param {Object} options
   */
  jQuery.formatNumber = function(numberString, options){
    var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options);
    var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);

    var dec = formatData.dec;
    var group = formatData.group;
    var neg = formatData.neg;

    var validFormat = "0#-,.";

    // strip all the invalid characters at the beginning and the end
    // of the format, and we'll stick them back on at the end
    // make a special case for the negative sign "-" though, so
    // we can have formats like -$23.32
    var prefix = "";
    var negativeInFront = false;
    for (var i = 0; i < options.format.length; i++) {
      if (validFormat.indexOf(options.format.charAt(i)) == -1)
        prefix = prefix + options.format.charAt(i);
      else
        if (i == 0 && options.format.charAt(i) == '-') {
          negativeInFront = true;
          continue;
        }
        else
          break;
    }
    var suffix = "";
    for (var i = options.format.length - 1; i >= 0; i--) {
      if (validFormat.indexOf(options.format.charAt(i)) == -1)
        suffix = options.format.charAt(i) + suffix;
      else
        break;
    }

    options.format = options.format.substring(prefix.length);
    options.format = options.format.substring(0, options.format.length - suffix.length);

    // now we need to convert it into a number
    //while (numberString.indexOf(group) > -1)
    //  numberString = numberString.replace(group, '');
    //var number = new Number(numberString.replace(dec, ".").replace(neg, "-"));
    var number = new Number(numberString);

    return jQuery._formatNumber(number, options, suffix, prefix, negativeInFront);
  };

  /**
   * Formats a Number object into a string, using the given formatting options
   *
   * @param {Object} numberString
   * @param {Object} options
   */
  jQuery._formatNumber = function(number, options, suffix, prefix, negativeInFront) {
    var options = jQuery.extend({}, jQuery.fn.formatNumber.defaults, options);
    var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);

    var dec = formatData.dec;
    var group = formatData.group;
    var neg = formatData.neg;

    var forcedToZero = false;
    if (isNaN(number)) {
      if (options.nanForceZero == true) {
        number = 0;
        forcedToZero = true;
      } else
        return null;
    }

    // special case for percentages
        if (suffix == "%")
          number = number * 100;

    var returnString = "";
    if (options.format.indexOf(".") > -1) {
      var decimalPortion = dec;
      var decimalFormat = options.format.substring(options.format.lastIndexOf(".") + 1);

      // round or truncate number as needed
      if (options.round == true)
        number = new Number(number.toFixed(decimalFormat.length));
      else {
        var numStr = number.toString();
        numStr = numStr.substring(0, numStr.lastIndexOf('.') + decimalFormat.length + 1);
        number = new Number(numStr);
      }

      var decimalValue = number % 1;
      var decimalString = new String(decimalValue.toFixed(decimalFormat.length));
      decimalString = decimalString.substring(decimalString.lastIndexOf(".") + 1);

      for (var i = 0; i < decimalFormat.length; i++) {
        if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) != '0') {
                  decimalPortion += decimalString.charAt(i);
          continue;
        } else if (decimalFormat.charAt(i) == '#' && decimalString.charAt(i) == '0') {
          var notParsed = decimalString.substring(i);
          if (notParsed.match('[1-9]')) {
            decimalPortion += decimalString.charAt(i);
            continue;
          } else
            break;
        } else if (decimalFormat.charAt(i) == "0")
          decimalPortion += decimalString.charAt(i);
      }
      returnString += decimalPortion
         } else
      number = Math.round(number);

    var ones = Math.floor(number);
    if (number < 0)
      ones = Math.ceil(number);

    var onesFormat = "";
    if (options.format.indexOf(".") == -1)
      onesFormat = options.format;
    else
      onesFormat = options.format.substring(0, options.format.indexOf("."));

    var onePortion = "";
    if (!(ones == 0 && onesFormat.substr(onesFormat.length - 1) == '#') || forcedToZero) {
      // find how many digits are in the group
      var oneText = new String(Math.abs(ones));
      var groupLength = 9999;
      if (onesFormat.lastIndexOf(",") != -1)
        groupLength = onesFormat.length - onesFormat.lastIndexOf(",") - 1;
      var groupCount = 0;
      for (var i = oneText.length - 1; i > -1; i--) {
        onePortion = oneText.charAt(i) + onePortion;
        groupCount++;
        if (groupCount == groupLength && i != 0) {
          onePortion = group + onePortion;
          groupCount = 0;
        }
      }

      // account for any pre-data padding
      if (onesFormat.length > onePortion.length) {
        var padStart = onesFormat.indexOf('0');
        if (padStart != -1) {
          var padLen = onesFormat.length - padStart;

          // pad to left with 0's or group char
          var pos = onesFormat.length - onePortion.length - 1;
          while (onePortion.length < padLen) {
            var padChar = onesFormat.charAt(pos);
            // replace with real group char if needed
            if (padChar == ',')
              padChar = group;
            onePortion = padChar + onePortion;
            pos--;
          }
        }
      }
    }

    if (!onePortion && onesFormat.indexOf('0', onesFormat.length - 1) !== -1)
        onePortion = '0';

    returnString = onePortion + returnString;

    // handle special case where negative is in front of the invalid characters
    if (number < 0 && negativeInFront && prefix.length > 0)
      prefix = neg + prefix;
    else if (number < 0)
      returnString = neg + returnString;

    if (!options.decimalSeparatorAlwaysShown) {
      if (returnString.lastIndexOf(dec) == returnString.length - 1) {
        returnString = returnString.substring(0, returnString.length - 1);
      }
    }
    returnString = prefix + returnString + suffix;
    return returnString;
  };


  /*  Parsing Methods */


  /**
   * Parses a number of given format from the element and returns a Number object.
   * @param {Object} options
   */
  jQuery.fn.parseNumber = function(options, writeBack, giveReturnValue) {
    // enforce defaults
    if (writeBack == null)
      writeBack = true;
    if (giveReturnValue == null)
      giveReturnValue = true;

    // get text
    var text;
    if (jQuery(this).is(":input"))
      text = new String(jQuery(this).val());
    else
      text = new String(jQuery(this).text());

    // parse text
    var number = jQuery.parseNumber(text, options);

    if (number) {
      if (writeBack) {
        if (jQuery(this).is(":input"))
          jQuery(this).val(number.toString());
        else
          jQuery(this).text(number.toString());
      }
      if (giveReturnValue)
        return number;
    }
  };

  /**
   * Parses a string of given format into a Number object.
   *
   * @param {Object} string
   * @param {Object} options
   */
  jQuery.parseNumber = function(numberString, options) {
    var options = jQuery.extend({}, jQuery.fn.parseNumber.defaults, options);
    var formatData = formatCodes(options.locale.toLowerCase(), options.isFullLocale);

    var dec = formatData.dec;
    var group = formatData.group;
    var neg = formatData.neg;

    var valid = "1234567890.-";

    // now we need to convert it into a number
    while (numberString.indexOf(group)>-1)
      numberString = numberString.replace(group,'');
    numberString = numberString.replace(dec,".").replace(neg,"-");
    var validText = "";
    var hasPercent = false;
    if (numberString.charAt(numberString.length - 1) == "%" || options.isPercentage == true)
      hasPercent = true;
    for (var i=0; i<numberString.length; i++) {
      if (valid.indexOf(numberString.charAt(i))>-1)
        validText = validText + numberString.charAt(i);
    }
    var number = new Number(validText);
    if (hasPercent) {
      number = number / 100;
      var decimalPos = validText.indexOf('.');
      if (decimalPos != -1) {
        var decimalPoints = validText.length - decimalPos - 1;
        number = number.toFixed(decimalPoints + 2);
      } else {
        number = number.toFixed(validText.length - 1);
      }
    }

    return number;
  };

  jQuery.fn.parseNumber.defaults = {
    locale: "us",
    decimalSeparatorAlwaysShown: false,
    isPercentage: false,
    isFullLocale: false
  };

  jQuery.fn.formatNumber.defaults = {
    format: "#,###.00",
    locale: "us",
    decimalSeparatorAlwaysShown: false,
    nanForceZero: true,
    round: true,
    isFullLocale: false
  };

  Number.prototype.toFixed = function(precision) {
      return jQuery._roundNumber(this, precision);
  };

  jQuery._roundNumber = function(number, decimalPlaces) {
    var power = Math.pow(10, decimalPlaces || 0);
      var value = String(Math.round(number * power) / power);

      // ensure the decimal places are there
      if (decimalPlaces > 0) {
        var dp = value.indexOf(".");
        if (dp == -1) {
          value += '.';
          dp = 0;
        } else {
          dp = value.length - (dp + 1);
        }

        while (dp < decimalPlaces) {
          value += '0';
          dp++;
        }
      }
      return value;
  };

 })(jQuery);













/**
 * jquery.dependClass - Attach class based on first class in list of current element
 *
 * Written by
 * Egor Khmelev (hmelyoff@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Egor Khmelev
 * @version 0.1.0-BETA ($Id$)
 *
 **/

(function($) {
  $.baseClass = function(obj){
    obj = $(obj);
    return obj.get(0).className.match(/([^ ]+)/)[1];
  };

  $.fn.addDependClass = function(className, delimiter){
    var options = {
      delimiter: delimiter ? delimiter : '-'
    }
    return this.each(function(){
      var baseClass = $.baseClass(this);
      if(baseClass)
        $(this).addClass(baseClass + options.delimiter + className);
    });
  };

  $.fn.removeDependClass = function(className, delimiter){
    var options = {
      delimiter: delimiter ? delimiter : '-'
    }
    return this.each(function(){
      var baseClass = $.baseClass(this);
      if(baseClass)
        $(this).removeClass(baseClass + options.delimiter + className);
    });
  };

  $.fn.toggleDependClass = function(className, delimiter){
    var options = {
      delimiter: delimiter ? delimiter : '-'
    }
    return this.each(function(){
      var baseClass = $.baseClass(this);
      if(baseClass)
        if($(this).is("." + baseClass + options.delimiter + className))
          $(this).removeClass(baseClass + options.delimiter + className);
        else
          $(this).addClass(baseClass + options.delimiter + className);
    });
  };

})(jQuery);


















/**
 * draggable - Class allows to make any element draggable
 *
 * Written by
 * Egor Khmelev (hmelyoff@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Egor Khmelev
 * @version 0.1.0-BETA ($Id$)
 *
 **/

(function( $ ){

  function Draggable(){
    this._init.apply( this, arguments );
  };

  Draggable.prototype.oninit = function(){

  };

  Draggable.prototype.events = function(){

  };

  Draggable.prototype.onmousedown = function(){
    this.ptr.css({ position: "absolute" });
  };

  Draggable.prototype.onmousemove = function( evt, x, y ){
    this.ptr.css({ left: x, top: y });
  };

  Draggable.prototype.onmouseup = function(){

  };

  Draggable.prototype.isDefault = {
    drag: false,
    clicked: false,
    toclick: true,
    mouseup: false
  };

  Draggable.prototype._init = function(){
    if( arguments.length > 0 ){
      this.ptr = $(arguments[0]);
      this.outer = $(".draggable-outer");

      this.is = {};
      $.extend( this.is, this.isDefault );

      var _offset = this.ptr.offset();
      this.d = {
        left: _offset.left,
        top: _offset.top,
        width: this.ptr.width(),
        height: this.ptr.height()
      };

      this.oninit.apply( this, arguments );

      this._events();
    }
  };

  Draggable.prototype._getPageCoords = function( event ){
    if( event.targetTouches && event.targetTouches[0] ){
      return { x: event.targetTouches[0].pageX, y: event.targetTouches[0].pageY };
    } else
      return { x: event.pageX, y: event.pageY };
  };

  Draggable.prototype._bindEvent = function( ptr, eventType, handler ){
    var self = this;

    if( this.supportTouches_ )
      ptr.get(0).addEventListener( this.events_[ eventType ], handler, false );

    else
      ptr.bind( this.events_[ eventType ], handler );
  };

  Draggable.prototype._events = function(){
    var self = this;

    this.supportTouches_ = 'ontouchend' in document;
    this.events_ = {
      "click": this.supportTouches_ ? "touchstart" : "click",
      "down": this.supportTouches_ ? "touchstart" : "mousedown",
      "move": this.supportTouches_ ? "touchmove" : "mousemove",
      "up"  : this.supportTouches_ ? "touchend" : "mouseup"
    };

    this._bindEvent( $( document ), "move", function( event ){
      if( self.is.drag ){
        event.stopPropagation();
        event.preventDefault();
        self._mousemove( event );
      }
    });
    this._bindEvent( $( document ), "down", function( event ){
      if( self.is.drag ){
        event.stopPropagation();
        event.preventDefault();
      }
    });
    this._bindEvent( $( document ), "up", function( event ){
      self._mouseup( event );
    });

    this._bindEvent( this.ptr, "down", function( event ){
      self._mousedown( event );
      return false;
    });
    this._bindEvent( this.ptr, "up", function( event ){
      self._mouseup( event );
    });

    this.ptr.find("a")
      .click(function(){
        self.is.clicked = true;

        if( !self.is.toclick ){
          self.is.toclick = true;
          return false;
        }
      })
      .mousedown(function( event ){
        self._mousedown( event );
        return false;
      });

    this.events();
  };

  Draggable.prototype._mousedown = function( evt ){
    this.is.drag = true;
    this.is.clicked = false;
    this.is.mouseup = false;

    var _offset = this.ptr.offset();
    var coords = this._getPageCoords( evt );
    this.cx = coords.x - _offset.left;
    this.cy = coords.y - _offset.top;

    $.extend(this.d, {
      left: _offset.left,
      top: _offset.top,
      width: this.ptr.width(),
      height: this.ptr.height()
    });

    if( this.outer && this.outer.get(0) ){
      this.outer.css({ height: Math.max(this.outer.height(), $(document.body).height()), overflow: "hidden" });
    }

    this.onmousedown( evt );
  };

  Draggable.prototype._mousemove = function( evt ){
    this.is.toclick = false;
    var coords = this._getPageCoords( evt );
    this.onmousemove( evt, coords.x - this.cx, coords.y - this.cy );
  };

  Draggable.prototype._mouseup = function( evt ){
    var oThis = this;

    if( this.is.drag ){
      this.is.drag = false;

      if( this.outer && this.outer.get(0) ){

        if( $.browser.mozilla ){
          this.outer.css({ overflow: "hidden" });
        } else {
          this.outer.css({ overflow: "visible" });
        }

        if( $.browser.msie && $.browser.version == '6.0' ){
         this.outer.css({ height: "100%" });
        } else {
         this.outer.css({ height: "auto" });
        }
      }

      this.onmouseup( evt );
    }
  };

  window.Draggable = Draggable;

})( jQuery );


















/**
 * jquery.slider - Slider ui control in jQuery
 *
 * Written by
 * Egor Khmelev (hmelyoff@gmail.com)
 *
 * Licensed under the MIT (MIT-LICENSE.txt).
 *
 * @author Egor Khmelev
 * @version 1.1.0-RELEASE ($Id$)
 *
 * Dependencies
 *
 * jQuery (http://jquery.com)
 * jquery.numberformatter (http://code.google.com/p/jquery-numberformatter/)
 * tmpl (http://ejohn.org/blog/javascript-micro-templating/)
 * jquery.dependClass
 * draggable
 *
 **/

(function( $ ) {

  function isArray( value ){
    if( typeof value == "undefined" ) return false;

    if (value instanceof Array || (!(value instanceof Object) &&
         (Object.prototype.toString.call((value)) == '[object Array]') ||
         typeof value.length == 'number' &&
         typeof value.splice != 'undefined' &&
         typeof value.propertyIsEnumerable != 'undefined' &&
         !value.propertyIsEnumerable('splice')
        )) {
      return true;
    }

    return false;
  }

  $.slider = function( node, settings ){
    var jNode = $(node);
    if( !jNode.data( "jslider" ) )
      jNode.data( "jslider", new jSlider( node, settings ) );

    return jNode.data( "jslider" );
  };

  $.fn.slider = function( action, opt_value ){
    var returnValue, args = arguments;

    function isDef( val ){
      return val !== undefined;
    };

    function isDefAndNotNull( val ){
      return val != null;
    };

    this.each(function(){
      var self = $.slider( this, action );

      // do actions
      if( typeof action == "string" ){
        switch( action ){
          case "value":
            if( isDef( args[ 1 ] ) && isDef( args[ 2 ] ) ){
              var pointers = self.getPointers();
              if( isDefAndNotNull( pointers[0] ) && isDefAndNotNull( args[1] ) ){
                pointers[0].set( args[ 1 ] );
                pointers[0].setIndexOver();
              }

              if( isDefAndNotNull( pointers[1] ) && isDefAndNotNull( args[2] ) ){
                pointers[1].set( args[ 2 ] );
                pointers[1].setIndexOver();
              }
            }

            else if( isDef( args[ 1 ] ) ){
              var pointers = self.getPointers();
              if( isDefAndNotNull( pointers[0] ) && isDefAndNotNull( args[1] ) ){
                pointers[0].set( args[ 1 ] );
                pointers[0].setIndexOver();
              }
            }

            else
              returnValue = self.getValue();

            break;

          case "prc":
            if( isDef( args[ 1 ] ) && isDef( args[ 2 ] ) ){
              var pointers = self.getPointers();
              if( isDefAndNotNull( pointers[0] ) && isDefAndNotNull( args[1] ) ){
                pointers[0]._set( args[ 1 ] );
                pointers[0].setIndexOver();
              }

              if( isDefAndNotNull( pointers[1] ) && isDefAndNotNull( args[2] ) ){
                pointers[1]._set( args[ 2 ] );
                pointers[1].setIndexOver();
              }
            }

            else if( isDef( args[ 1 ] ) ){
              var pointers = self.getPointers();
              if( isDefAndNotNull( pointers[0] ) && isDefAndNotNull( args[1] ) ){
                pointers[0]._set( args[ 1 ] );
                pointers[0].setIndexOver();
              }
            }

            else
              returnValue = self.getPrcValue();

            break;

          case "calculatedValue":
            var value = self.getValue().split(";");
            returnValue = "";
            for (var i=0; i < value.length; i++) {
              returnValue += (i > 0 ? ";" : "") + self.nice( value[i] );
            };

            break;

          case "skin":
            self.setSkin( args[1] );

          break;

          case "redraw":
            self.domNode.remove();

            if(isDefAndNotNull(args[1])){
            $.extend(true,self.settings,args[1]);

            self.settings.interval = self.settings.to - self.settings.from;
            self.settings.value = self.inputNode.attr("value");
            self.is = {
            init: false
            };
            self.o = {};
            }
            self.create();
          break;
        };

      }

      // return actual object
      else if( !action && !opt_value ){
        if( !isArray( returnValue ) )
          returnValue = [];

        returnValue.push( self );
      }
    });

    // flatten array just with one slider
    if( isArray( returnValue ) && returnValue.length == 1 )
      returnValue = returnValue[ 0 ];

    return returnValue || this;
  };

  var OPTIONS = {

    settings: {
      from: 1,
      to: 10,
      step: 1,
      smooth: true,
      limits: true,
      round: 0,
      format: { format: "#,##0.##" },
      value: "5;7",
      dimension: ""
    },

    className: "jslider",
    selector: ".jslider-",

    template: tmpl(
      '<span class="<%=className%>">' +
        '<table><tr><td>' +
          '<div class="<%=className%>-bg">' +
            '<i class="l"></i><i class="r"></i>' +
            '<i class="v"></i>' +
          '</div>' +

          '<div class="<%=className%>-pointer"><div class="<%=className%>-value"><span></span><%=settings.dimension%></div></div>' +
          '<div class="<%=className%>-pointer <%=className%>-pointer-to"></div>' +

          '<div class="<%=className%>-label"><span><%=settings.from%></span><%=settings.dimension%></div>' +
          '<div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div>' +

          '<div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div>' +

          '<div class="<%=className%>-scale"><%=scale%></div>'+

        '</td></tr></table>' +
      '</span>'
/*      '<span class="<%=className%>">' +
        '<table><tr><td>' +
          '<div class="<%=className%>-bg">' +
            '<i class="l"></i><i class="f"></i><i class="r"></i>' +
            '<i class="v"></i>' +
          '</div>' +

          '<div class="<%=className%>-pointer"></div>' +
          '<div class="<%=className%>-pointer <%=className%>-pointer-to"></div>' +

          '<div class="<%=className%>-label"><span><%=settings.from%></span></div>' +
          '<div class="<%=className%>-label <%=className%>-label-to"><span><%=settings.to%></span><%=settings.dimension%></div>' +

          '<div class="<%=className%>-value"><span></span><%=settings.dimension%></div>' +
          '<div class="<%=className%>-value <%=className%>-value-to"><span></span><%=settings.dimension%></div>' +

          '<div class="<%=className%>-scale"><%=scale%></div>'+

        '</td></tr></table>' +
      '</span>'*/
    )

  };

  function jSlider(){
    return this.init.apply( this, arguments );
  };

  /**
   * Destroys this slider.
   * Code borrowed a bit from JavaScriptMVC Controller
   * via: https://github.com/egorkhmelev/jslider/issues/39
   * via: https://github.com/egorkhmelev/jslider/pull/62
   */
  jSlider.prototype.destroy = function(){
      if (this._destroyed)
          throw "this slider was already deleted";

      //mark as destroyed
      this._destroyed = true;

      //unhide the input node
      this.inputNode.css('display', '');

      //destroy bindings on input node, keep the dom element itself.
      $(document).off("click", this.inputNode);

      //delete the slider data
      this.inputNode.removeData("jslider");

      //destroy the created slider dom element
      this.domNode.remove();
      this.domNode = null;
  };

  jSlider.prototype.init = function( node, settings ){
    this.settings = $.extend(true, {}, OPTIONS.settings, settings ? settings : {});

    // obj.sliderHandler = this;
    this.inputNode = $( node ).hide();

    this.settings.interval = this.settings.to-this.settings.from;
    this.settings.value = this.inputNode.attr("value");

    if( this.settings.calculate && $.isFunction( this.settings.calculate ) )
      this.nice = this.settings.calculate;

    if( this.settings.onstatechange && $.isFunction( this.settings.onstatechange ) )
      this.onstatechange = this.settings.onstatechange;

    this.is = {
      init: false
    };
    this.o = {};

    this.create();
  };

  jSlider.prototype.onstatechange = function(){

  };

  jSlider.prototype.create = function(){
    var $this = this;

    this.domNode = $( OPTIONS.template({
      className: OPTIONS.className,
      settings: {
        from: this.nice( this.settings.from ),
        to: this.nice( this.settings.to ),
        dimension: this.settings.dimension
      },
      scale: this.generateScale()
    }) );

    this.inputNode.after( this.domNode );
    this.drawScale();

    // set skin class
    if( this.settings.skin && this.settings.skin.length > 0 )
      this.setSkin( this.settings.skin );

    this.sizes = {
      domWidth: this.domNode.width(),
      domOffset: this.domNode.offset()
    };

    // find some objects
    $.extend(this.o, {
      pointers: {},
      labels: {
        0: {
          o: this.domNode.find(OPTIONS.selector + "value").not(OPTIONS.selector + "value-to")
        },
        1: {
          o: this.domNode.find(OPTIONS.selector + "value").filter(OPTIONS.selector + "value-to")
        }
      },
      limits: {
        0: this.domNode.find(OPTIONS.selector + "label").not(OPTIONS.selector + "label-to"),
        1: this.domNode.find(OPTIONS.selector + "label").filter(OPTIONS.selector + "label-to")
      }
    });

    $.extend(this.o.labels[0], {
      value: this.o.labels[0].o.find("span")
    });

    $.extend(this.o.labels[1], {
      value: this.o.labels[1].o.find("span")
    });


    if( !$this.settings.value.split(";")[1] ){
      this.settings.single = true;
      this.domNode.addDependClass("single");
    }

    if( !$this.settings.limits )
      this.domNode.addDependClass("limitless");

    this.domNode.find(OPTIONS.selector + "pointer").each(function( i ){
      var value = $this.settings.value.split(";")[i];
      if( value ){
        $this.o.pointers[i] = new jSliderPointer( this, i, $this );

        var prev = $this.settings.value.split(";")[i-1];
        if( prev && new Number(value) < new Number(prev) ) value = prev;

        value = value < $this.settings.from ? $this.settings.from : value;
        value = value > $this.settings.to ? $this.settings.to : value;

        $this.o.pointers[i].set( value, true );
      }
    });

    this.o.value = this.domNode.find(".v");
    this.is.init = true;

    $.each(this.o.pointers, function(i){
      $this.redraw(this);
    });

    (function(self){
      $(window).resize(function(){
        self.onresize();
      });
    })(this);

  };

  jSlider.prototype.setSkin = function( skin ){
    if( this.skin_ )
      this.domNode.removeDependClass( this.skin_, "_" );

    this.domNode.addDependClass( this.skin_ = skin, "_" );
  };

  jSlider.prototype.setPointersIndex = function( i ){
    $.each(this.getPointers(), function(i){
      this.index( i );
    });
  };

  jSlider.prototype.getPointers = function(){
    return this.o.pointers;
  };

  jSlider.prototype.generateScale = function(){
    if( this.settings.scale && this.settings.scale.length > 0 ){
      var str = "";
      var s = this.settings.scale;
      var prc = Math.round((100/(s.length-1))*10)/10;
      for( var i=0; i < s.length; i++ ){
        str += '<span style="left: ' + i*prc + '%">' + ( s[i] != '|' ? '<ins>' + s[i] + '</ins>' : '' ) + '</span>';
      };
      return str;
    } else return "";

    return "";
  };

  jSlider.prototype.drawScale = function(){
    this.domNode.find(OPTIONS.selector + "scale span ins").each(function(){
      $(this).css({ marginLeft: -$(this).outerWidth()/2 });
    });
  };

  jSlider.prototype.onresize = function(){
    var self = this;
    this.sizes = {
      domWidth: this.domNode.width(),
      domOffset: this.domNode.offset()
    };

    $.each(this.o.pointers, function(i){
      self.redraw(this);
    });
  };

  jSlider.prototype.update = function(){
    this.onresize();
    this.drawScale();
  };

  jSlider.prototype.limits = function( x, pointer ){
    // smooth
    if( !this.settings.smooth ){
      var step = this.settings.step*100 / ( this.settings.interval );
      x = Math.round( x/step ) * step;
    }

    var another = this.o.pointers[1-pointer.uid];
    if( another && pointer.uid && x < another.value.prc ) x = another.value.prc;
    if( another && !pointer.uid && x > another.value.prc ) x = another.value.prc;

    // base limit
    if( x < 0 ) x = 0;
    if( x > 100 ) x = 100;

    return Math.round( x*10 ) / 10;
  };

  jSlider.prototype.redraw = function( pointer ){
    if( !this.is.init ) return false;

    this.setValue();

    // redraw range line
    if( this.o.pointers[0] && this.o.pointers[1] )
      this.o.value.css({ left: this.o.pointers[0].value.prc + "%", width: ( this.o.pointers[1].value.prc - this.o.pointers[0].value.prc ) + "%" });

    this.o.labels[pointer.uid].value.html(
      this.nice(
        pointer.value.origin
      )
    );

    // redraw position of labels
    this.redrawLabels( pointer );

  };

  jSlider.prototype.redrawLabels = function( pointer ){

    function setPosition( label, sizes, prc ){
      sizes.margin = 0;//-sizes.label/2;

      // left limit
      label_left = sizes.border + sizes.margin;
      if( label_left < 0 )
        sizes.margin -= label_left;

      // right limit
      if( sizes.border+sizes.label / 2 > self.sizes.domWidth ){
        sizes.margin = 0;
        sizes.right = true;
      } else
        sizes.right = false;

      label.o.css({ left: prc + "%", marginLeft: sizes.margin, right: "auto" });
      if( sizes.right ) label.o.css({ left: "auto", right: 0 });
      return sizes;
    }

    var self = this;
    var label = this.o.labels[pointer.uid];
    var prc = pointer.value.prc;

    var sizes = {
      label: label.o.outerWidth(),
      right: false,
      border: ( prc * this.sizes.domWidth ) / 100
    };

    if( !this.settings.single ){
      // glue if near;
      var another = this.o.pointers[1-pointer.uid];
      var another_label = this.o.labels[another.uid];

      switch( pointer.uid ){
        case 0:
          if( sizes.border+sizes.label / 2 > another_label.o.offset().left-this.sizes.domOffset.left ){
            another_label.o.css({ visibility: "hidden" });
            another_label.value.html( this.nice( another.value.origin ) );

            label.o.css({ visibility: "visible" });

            prc = ( another.value.prc - prc ) / 2 + prc;
            if( another.value.prc != pointer.value.prc ){
              label.value.html( this.nice(pointer.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(another.value.origin) );
              sizes.label = label.o.outerWidth();
              sizes.border = ( prc * this.sizes.domWidth ) / 100;
            }
          } else {
            another_label.o.css({ visibility: "visible" });
          }
          break;

        case 1:
          if( sizes.border - sizes.label / 2 < another_label.o.offset().left - this.sizes.domOffset.left + another_label.o.outerWidth() ){
            another_label.o.css({ visibility: "hidden" });
            another_label.value.html( this.nice(another.value.origin) );

            label.o.css({ visibility: "visible" });

            prc = ( prc - another.value.prc ) / 2 + another.value.prc;
            if( another.value.prc != pointer.value.prc ){
              label.value.html( this.nice(another.value.origin) + "&nbsp;&ndash;&nbsp;" + this.nice(pointer.value.origin) );
              sizes.label = label.o.outerWidth();
              sizes.border = ( prc * this.sizes.domWidth ) / 100;
            }
          } else {
            another_label.o.css({ visibility: "visible" });
          }
          break;
      }
    }

    sizes = setPosition( label, sizes, prc );

    /* draw second label */
    if( another_label ){
      var sizes = {
        label: another_label.o.outerWidth(),
        right: false,
        border: ( another.value.prc * this.sizes.domWidth ) / 100
      };
      sizes = setPosition( another_label, sizes, another.value.prc );
    }

    this.redrawLimits();
  };

  jSlider.prototype.redrawLimits = function(){
    if( this.settings.limits ){

      var limits = [ true, true ];

      for( key in this.o.pointers ){

        if( !this.settings.single || key == 0 ){

          var pointer = this.o.pointers[key];
          var label = this.o.labels[pointer.uid];
          var label_left = label.o.offset().left - this.sizes.domOffset.left;

          var limit = this.o.limits[0];
          if( label_left < limit.outerWidth() )
            limits[0] = false;

          // MODIFIED: adding widthHack to cope with labels being hidden too early with big slider-handles
          var widthHack = 30;// (this.style_ == "round_big") ? 0 : 60;

          var limit = this.o.limits[1];
          if( label_left + label.o.outerWidth() > (this.sizes.domWidth+widthHack) - limit.outerWidth() ) {
              limits[1] = false;
            }
      }

      };

      for( var i=0; i < limits.length; i++ ){
        if( limits[i] )
          this.o.limits[i].fadeIn("fast");
        else
          this.o.limits[i].fadeOut("fast");
      };

    }
  };

  jSlider.prototype.setValue = function(){
    var value = this.getValue();
    this.inputNode.attr( "value", value );
    this.onstatechange.call( this, value );
  };

  jSlider.prototype.getValue = function(){
    if(!this.is.init) return false;
    var $this = this;

    var value = "";
    $.each( this.o.pointers, function(i){
      if( this.value.prc != undefined && !isNaN(this.value.prc) ) value += (i > 0 ? ";" : "") + $this.prcToValue( this.value.prc );
    });
    return value;
  };

  jSlider.prototype.getPrcValue = function(){
    if(!this.is.init) return false;
    var $this = this;

    var value = "";
    $.each( this.o.pointers, function(i){
      if( this.value.prc != undefined && !isNaN(this.value.prc) ) value += (i > 0 ? ";" : "") + this.value.prc;
    });
    return value;
  };

  jSlider.prototype.prcToValue = function( prc ){

    if( this.settings.heterogeneity && this.settings.heterogeneity.length > 0 ){
      var h = this.settings.heterogeneity;

      var _start = 0;
      var _from = this.settings.from;

      for( var i=0; i <= h.length; i++ ){
        if( h[i] ) var v = h[i].split("/");
        else       var v = [100, this.settings.to];

        v[0] = new Number(v[0]);
        v[1] = new Number(v[1]);

        if( prc >= _start && prc <= v[0] ) {
          var value = _from + ( (prc-_start) * (v[1]-_from) ) / (v[0]-_start);
        }

        _start = v[0];
        _from = v[1];
      };

    } else {
      var value = this.settings.from + ( prc * this.settings.interval ) / 100;
    }

    return this.round( value );
  };

  jSlider.prototype.valueToPrc = function( value, pointer ){
    if( this.settings.heterogeneity && this.settings.heterogeneity.length > 0 ){
      var h = this.settings.heterogeneity;

      var _start = 0;
      var _from = this.settings.from;

      for (var i=0; i <= h.length; i++) {
        if(h[i]) var v = h[i].split("/");
        else     var v = [100, this.settings.to];
        v[0] = new Number(v[0]); v[1] = new Number(v[1]);

        if(value >= _from && value <= v[1]){
          var prc = pointer.limits(_start + (value-_from)*(v[0]-_start)/(v[1]-_from));
        }

        _start = v[0]; _from = v[1];
      };

    } else {
      var prc = pointer.limits((value-this.settings.from)*100/this.settings.interval);
    }

    return prc;
  };

  jSlider.prototype.round = function( value ){
    value = Math.round( value / this.settings.step ) * this.settings.step;
    if( this.settings.round ) value = Math.round( value * Math.pow(10, this.settings.round) ) / Math.pow(10, this.settings.round);
    else value = Math.round( value );
    return value;
  };

  jSlider.prototype.nice = function( value ){
    value = value.toString().replace(/,/gi, ".").replace(/ /gi, "");;

    if( $.formatNumber ){
      return $.formatNumber( new Number(value), this.settings.format || {} ).replace( /-/gi, "&minus;" );
    }

    else {
      return new Number(value);
    }
  };


  function jSliderPointer(){
    Draggable.apply( this, arguments );
  }
  jSliderPointer.prototype = new Draggable();

  jSliderPointer.prototype.oninit = function( ptr, id, _constructor ){
    this.uid = id;
    this.parent = _constructor;
    this.value = {};
    this.settings = this.parent.settings;
  };

  jSliderPointer.prototype.onmousedown = function(evt){
    this._parent = {
      offset: this.parent.domNode.offset(),
      width: this.parent.domNode.width()
    };
    this.ptr.addDependClass("hover");
    this.setIndexOver();
  };

  jSliderPointer.prototype.onmousemove = function( evt, x ){
    var coords = this._getPageCoords( evt );
    this._set( this.calc( coords.x ) );
  };

  jSliderPointer.prototype.onmouseup = function( evt ){
    if( this.parent.settings.callback && $.isFunction(this.parent.settings.callback) )
      this.parent.settings.callback.call( this.parent, this.parent.getValue() );

    this.ptr.removeDependClass("hover");
  };

  jSliderPointer.prototype.setIndexOver = function(){
    this.parent.setPointersIndex( 1 );
    this.index( 2 );
  };

  jSliderPointer.prototype.index = function( i ){
    this.ptr.css({ zIndex: i });
  };

  jSliderPointer.prototype.limits = function( x ){
    return this.parent.limits( x, this );
  };

  jSliderPointer.prototype.calc = function(coords){
    var x = this.limits(((coords-this._parent.offset.left)*100)/this._parent.width);
    return x;
  };

  jSliderPointer.prototype.set = function( value, opt_origin ){
    this.value.origin = this.parent.round(value);
    this._set( this.parent.valueToPrc( value, this ), opt_origin );
  };

  jSliderPointer.prototype._set = function( prc, opt_origin ){
    if( !opt_origin )
      this.value.origin = this.parent.prcToValue(prc);

    this.value.prc = prc;
    this.ptr.css({ left: prc + "%" });
    this.parent.redraw(this);
  };

})(jQuery);
;/** 
 *   Various code to allow the web manual to show some demos
 */
 
// Take a hash as input and scroll smoothly to the related target element
function scrollToHash(hash) {
  var target = $(hash);
  target = target.length ? target : $('[name=' + hash.slice(1) +']');
  if (target.length) {
    scrollToPosition = target.offset().top;
    // Checking if the navigation header is fixed. If yes, set the scrollto position by subtracting the height of the fixed header
    if($('.navbar-fixed-top').css("display") == "block") {
      scrollToPosition -= $('.navbar-fixed-top').height();
    }
    $('html,body').animate({ scrollTop: scrollToPosition }, 1000);
    // Highlighting the clicked heading for a brief period to make it easier to see what just happened.
    $(target).animate({backgroundColor:"#fff0f0"},1000);
    $(target).animate({backgroundColor:"#fff"},1000);
  }
}

function hexc(a) {
  var b = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete b[0];
  for (var c = 1; 3 >= c; ++c) b[c] = parseInt(b[c], 10).toString(16), 1 == b[c].length && (b[c] = "0" + b[c]);
  return color = "#" + b.join("");
}

//Code for toogle demonstration of Notification boxes
function toggleMsg(){
  hideErrorMsg();
  hideCommonMsg();
  setTimeout(function(){
    showErrorMsg();
    showCommonMsg();
  }, 1000);
}

$(document).ready(function() {
  $.datepicker.regional.no = {
    closeText: "Lukk",
    prevText: "&laquo;",
    nextText: "&raquo;",
    currentText: "I dag",
    monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
    dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
    weekHeader: "Uke",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: !1,
    showMonthAfterYear: !1,
    yearSuffix: ""
  }, $.datepicker.setDefaults($.datepicker.regional.no), $("input[data-widget=stb-datepicker]").datepicker().children().show();
});

$(document).ready(function(){
  if($('.datePicker').length > 0){
    $('.datePicker').datetimepicker(
        {language: 'nb',
          pickTime: false,
          icons: {
            date: 'stb-sprite-small white calendar'
          }
        }
    );
    $('.datePicker')
        .on('dp.change dp.show', function(e) {
          var name = $(e.target).find('input').attr('name');
          // Validate the date when user change it
          if($(this).parents('form.validateForm').length > 0){
            $(this).parents('form.validateForm')
              // Get the bootstrapValidator instance
                .data('bootstrapValidator')
              // Mark the field as not validated, so it'll be re-validated when the user change date
                .updateStatus(name, 'NOT_VALIDATED', null)
              // Validate the field
                .validateField(name);
          }
        });
  }
});


$(document).ready(function() {
  var sliderObj = {
    from: 0,
    to: 100,
    domNode: "#stb-slider",
    valueElem: "#stb-slider-value",
    calculate: function(a) {
      return $(this.domNode).siblings(this.valueElem).val(a), a;
    },
    complete: function() {},
    onstatechange: function() {
      var a = $(this.domNode).find(".jslider-bg .l"),
          b = $(this.domNode).find(".jslider-bg .r"),
          c = $(this.domNode).find(".jslider-pointer");
      if (c && c.length > 0) {
        var d = c[0].style.left.split("%")[0],
            e = 100 - d;
        a.css({
          width: d + "%"
        }), 
        b.css({
          width: e + "%",
          left: d + "%"
        });
      }
    },
    getPercentVal: function(a) {
      var b = a,
          c = 0,
          d = 100;
      if (b && b.length > 0) {
        var e = b[0].style.left.split("%")[0];
            c = e, 
            d = 100 - c;
      }
      return d;
    }
  };
  var sliderEl = $("#stb-slider");
  initiateSlider(sliderEl, sliderObj, "år", "percent");
});

/*$("document").ready(function() {
  $("#progressbar-trigger").on("click", function() {
    var a = Math.floor(101 * Math.random()) + 0;
    $(".stb-progress div[data-widget=progressExample]").css({
      width: a + "%"
    });
  }), $("#demo-popover").popover(), $("#demo-a-popover").popover(), $("select[data-widget=chosenSelect]").chosen(), $("select.stb-select").customSelectMenu({
    menuClass: "stb-select"
  }), $("input[name=customStyleSelect]").on("change", function() {}), $(".color-swatch").each(function() {
    var a = $(this).css("background-color"),
    b = hexc(a).toUpperCase();
    $(this).append('<div class="color-code">' + b + "</div>");
  })
});
*/

// Begin code for Web Manual Table of Contents 
$("document").ready(function(){
  // Prepare the row that contains the table of contents written specifically for the web manual
  var toclist ='<div class="row"><div class="col-md-12 toc-list top-margin-20 top-padding-10 border-top-and-bottom"><p class="intro stb-font">Jump down to <span class="stb-sprite-medium chevron-up red pull-right"></span></p><ul class="items"></ul></div></div>';
  var tocHeaders= null;
  // Place the table of content where we want it to be
  $(toclist).insertAfter($('p.lead')); 
  tocHeaders= $('h2.toc-header');
  // Iterate through all the top level headings
  for(var i=0; i<tocHeaders.length; i++) {
    listMade = false;
    var headingtag = tocHeaders[i];
    $(headingtag).attr('name', headingtag.textContent.replace(/\W/g, '').toLowerCase());
    // Append relevant heading text to table to contents
    $('.toc-list .items').append( prepareTocLink(headingtag, "") );
    // Find all sub-headings(h4) inside each heading(h3)
    var allh4 = $(headingtag).nextUntil('h3','h4');
    // Check if there are any h4 elements. If there are none, we should not run the code below.
    if (allh4.length == 0) continue;
    // Prepare a list mark-up for all sub-headings in the table of contents
    var h4list = '<ul style="margin-left: 20px">';
  }
            
  // Check if URL already has a hash and scroll to the correct heading
  if (window.location.hash.length > 0) {
    try {
      var hashId = window.location.hash;
      // If there is a matching h3 or h4 with the hash ID, scroll to it.
      if($("h3"+hashId).length > 0 || $("h4"+hashId).length > 0) {
        scrollToHash( hashId );
      }
    } catch(e) {
      // Don't do a thing!
    }
  }

  // Perform a smooth page scroll to an anchor on the same page.
  $('.toc-list .items a[href*=#]:not([href=#])').click(function(event) {
    event.preventDefault();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      scrollToHash( this.hash);
    }
  });

  // Prepare the TOC link for a given header tag
  function prepareTocLink(headerTag, prefix) {
    // Get the header text
    var headerText = $(headerTag).text();
    // Get the header ID from its text
    $(headerTag).attr("id",prefix.replace(/ /g,"-").toLowerCase() + "--" + headerText.replace(/\-/g,'').replace(/ /g,"-").toLowerCase()); 
    // Generate id for the h3
    var headerId = $(headerTag).attr("id").replace(/\W/g, ''); // set the id
    // Create the link and return it
    return '<li><a href="#'+headerId+'">'+headerText+'</a></li>';
  }
});

$(document).ready( function(){
  // Use the small chevron icon in mobile view
  if( $( window ).width() <= 768){
	  $('.toc-list p span').toggleClass("stb-sprite-small stb-sprite-medium");
  }
  // hide and show articles list
  $('.toc-list p').click(function() {
    // if the media screen width is large, then don't do anything
    // the following will apply for mobile view
    $('.toc-list .items').slideToggle();
    $('.toc-list p span').toggleClass("chevron-down red chevron-up");
  });
});
// End code for Web Manual Table of Contents


$(document).ready(function(){
  if($('#validateDate').length > 0){
    $('#validateDate').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: {
        date: {
          trigger: 'blur',
          container: '#date-message',
          message: 'Oppgi en gyldig dato',
          validators: {
            callback: dateValidator
          }
        },
        periode : {
          container: '.periode-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi periode'
            }
          }
        }
      }
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form        = $(e.target),
              validator    = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          // Do whatever you want here ...
        });
  };

  if($('#validateRadiobuttons').length > 0){
    $('#validateRadiobuttons').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: {
        birds : {
          container: '.bird-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi Fugler'
            }
          }
        },
      birds2 : {
        container: '.bird-message',
        validators: {
          notEmpty: {
            message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi Fugler'
          }
        }
      }
      }
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form        = $(e.target),
              validator    = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          // Do whatever you want here ...
        });
  };

  if($('#validateCheckboxes').length > 0){
    $('#validateCheckboxes').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: {
          checkers: {
          container: '.checker-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi en checked'
             }
            }
          },
          checkers2: {
            container: '.checker-message',
            validators: {
              notEmpty: {
                message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi en checked'
              }
            }
          }
      }
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form        = $(e.target),
              validator    = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          // Do whatever you want here ...
        });
  };


  if($('#validateSelect').length > 0){
    $('#validateSelect').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: {
        picknumber: {
          container: '.select-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi en select'
            }
          }
        }
      }
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form        = $(e.target),
              validator    = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          // Do whatever you want here ...
        });
  };

  if($('#validateChosen').length > 0){
    $('#validateChosen').bootstrapValidator({
      excluded: ':disabled',
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: {
        picknumber: {
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi en select'
            }
          }
        }
      }
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form        = $(e.target),
              validator    = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          // Do whatever you want here ...
        });
  };
  if($('#validateInputs').length > 0){
    $('#validateInputs').bootstrapValidator({
      message: 'This value is not valid',
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      group: '.stb-form-group',
      fields: {
        input1: {
          container: '.input1-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi input'
            }
          }
        },
        input2: {
          container: '.input2-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi input'
            }
          }
        },
        input3: {
          container: '.input3-message',
          validators: {
            notEmpty: {
              message: '<span class="stb-color-sprite-medium warning circle"></span> Oppgi input'
            }
          }
        }
      }
    }).on('success.form.bv', function(e) {
          // Prevent form submission
          e.preventDefault();

          var $form        = $(e.target),
              validator    = $form.data('bootstrapValidator'),
              submitButton = validator.getSubmitButton();

          // Do whatever you want here ...
        });
  };
})

function acceptCookies(){
  createCookie('acceptCookies','Yes', '90');
  $('#cookieNote').hide('slow');
}

/* ***** Date validator for boootstrap validator and datetimepicker ***** */
var dateValidator = {
  message: '<span class="glyphicon glyphicon-exclamation-sign"></span> Verdien er ikke en gyldig dato.',
  callback: function(value,validator){
    var m = new moment(value, 'DD.MM.YYYY', true);
    return m.isValid();
  }
};
/* ***** End of date validator for boootstrap validator and datetimepicker ***** */
/* ***** Function for intitiating a slider with a input element on the side ***** */
function initiateSlider(sliderEl, sliderObj, unit, name){

  var sliderInput = '<input id="'+name+'" type="number" class="text-center sliderInput" name="'+name+'"/>';
  sliderEl.parent().prepend(sliderInput+'<p class="unit">'+unit+'</p>');
  sliderEl.slider(sliderObj);

  $('#'+name).on('change',function(){
    sliderEl.slider('value', $(this).val());
  });
}
/* ***** End of slider function ***** */