!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=["https://1boon.kakao.com/ch/trending.json","https://1boon.kakao.com/ch/issue.json","https://1boon.kakao.com/ch/enter.json"];var r=function(e){return a[e]},o=document.getElementById("contents");var c=function(e,t,n,a,r,c){for(var u=0;u<e;u++){var d=document.createElement("div");d.className="basket",d.id="basket"+c,o.append(d),d=document.getElementById("basket"+c);var l=document.createElement("a");l.className="url",l.id="url"+c,l.href="https://1boon.kakao.com/"+a[u],d.append(l),l=document.getElementById("url"+c);var i=document.createElement("img");i.src=""+n[u],l.append(i);var s=""+t[u];l.append(s);var f=document.createElement("br");l.append(f);var m=""+r[u];l.append(m),c+=1}document.getElementById("loading").style.display="none"};var u=function(e){var t=new Array,n=new Array,a=new Array,r=new Array;document.getElementById("loading").style.display="block",fetch(e).then((function(e){return e.json()})).then((function(e){for(var o=0;o<e.data.length;o++)t.push(e.data[o].title),n.push(e.data[o].coverImage),a.push(e.data[o].path),r.push(e.data[o].totalView);c(e.data.length,t,n,a,r,0)}))};var d=function(e,t,n){document.getElementById("loading").style.display="block";var a=new Array,r=new Array,o=new Array,u=new Array;fetch(e+"?pagesize="+t+"&page="+n).then((function(e){return e.json()})).then((function(e){for(var t=0;t<e.data.length;t++)a.push(e.data[t].title),r.push(e.data[t].coverImage),o.push(e.data[t].path),u.push(e.data[t].totalView);var d=20*(n-1);c(e.data.length,a,r,o,u,d)}))},l=document.getElementsByClassName("basket"),i=document.getElementById("contents");var s=function(){for(var e=l.length-1;e>-1;e--)i.removeChild(l[e])},f=document.getElementsByTagName("li"),m=0,p=2;function v(e){for(var t=0;t<f.length;t++)if(f[t]===e.parentNode){e.parentNode.className="active",s();var n=r(t);u(n),m=t,p=2}else f[t].className=""}!function(){for(var e=0;e<f.length;e++)f[e].addEventListener("click",(function(){v(event.target)}));window.onload=function(){var e=r(0);u(e)},document.getElementsByTagName("button")[0].addEventListener("click",(function(){var e=r(m);d(e,20,p),p+=1}))}()}]);
//# sourceMappingURL=bundle.8e01075671bfb116f3fc.js.map