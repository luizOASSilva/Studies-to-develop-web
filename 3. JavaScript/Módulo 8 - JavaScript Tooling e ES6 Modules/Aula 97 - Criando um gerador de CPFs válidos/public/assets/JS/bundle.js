(()=>{"use strict";var n={56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],A=t.base?s[0]+t.base:s[0],u=i[A]||0,l="".concat(A," ").concat(u);i[A]=u+1;var p=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),A=0;A<i.length;A++){var u=e(i[A]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}i=s}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var A=0;A<n.length;A++){var u=[].concat(n[A]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},534:(n,r,e)=>{e.d(r,{A:()=>c});var t=e(354),o=e.n(t),i=e(314),a=e.n(i)()(o());a.push([n.id,":root {\n    --primary-color: #676a71;\n    --secondary-color: #e4e5e6; \n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: sans-serif;\n}\nh1 {\n    color: var(--primary-color);\n    padding-bottom: 50px;\n    font-size: 48px;\n}\n.main-section {\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n.main-section .main-content {\n    display: flex;\n    flex-direction: row;\n}\nform button {\n    cursor: pointer;\n    background: white;\n    border: 4px var(--primary-color) solid;\n    border-radius: 5px;\n    color: var(--primary-color);\n    width: 200px;\n    font-size: 20px;\n    padding: 24px;\n    margin-right: 14px;\n    font-weight: bolder;\n}\n.main-section .main-content #result{\n    border-left: 5px var(--secondary-color) solid;\n    padding-left: 18px;\n    font-size: 32px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    letter-spacing: 2px;\n    color: var(--primary-color);\n    text-align: justify;\n}\n@media (max-width: 575px){\n    h1 {\n        font-size: 36px;\n    } \n    .main-section .main-content {\n        flex-direction: column;\n    } \n    .main-section .main-content #result{\n        border-left: none;\n        padding-left: 0;\n        border-top: 5px var(--secondary-color) solid;\n        padding-top: 18px;\n        font-size: 22px;\n    }\n    form button {\n        margin-bottom: 14px;\n        margin-right: 0;\n    }\n}\n@media (max-width: 420px){\n    h1 {\n        font-size: 24px;\n    } \n    form button {\n        width: 175px;\n    }\n    .main-section .main-content #result{\n        font-size: 18px;\n    }\n}","",{version:3,sources:["webpack://./src/assets/CSS/style.css"],names:[],mappings:"AAAA;IACI,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;AACA;IACI,2BAA2B;IAC3B,oBAAoB;IACpB,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,sCAAsC;IACtC,kBAAkB;IAClB,2BAA2B;IAC3B,YAAY;IACZ,eAAe;IACf,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,6CAA6C;IAC7C,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI;QACI,eAAe;IACnB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,iBAAiB;QACjB,eAAe;QACf,4CAA4C;QAC5C,iBAAiB;QACjB,eAAe;IACnB;IACA;QACI,mBAAmB;QACnB,eAAe;IACnB;AACJ;AACA;IACI;QACI,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;AACJ",sourcesContent:[":root {\r\n    --primary-color: #676a71;\r\n    --secondary-color: #e4e5e6; \r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: sans-serif;\r\n}\r\nh1 {\r\n    color: var(--primary-color);\r\n    padding-bottom: 50px;\r\n    font-size: 48px;\r\n}\r\n.main-section {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n.main-section .main-content {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\nform button {\r\n    cursor: pointer;\r\n    background: white;\r\n    border: 4px var(--primary-color) solid;\r\n    border-radius: 5px;\r\n    color: var(--primary-color);\r\n    width: 200px;\r\n    font-size: 20px;\r\n    padding: 24px;\r\n    margin-right: 14px;\r\n    font-weight: bolder;\r\n}\r\n.main-section .main-content #result{\r\n    border-left: 5px var(--secondary-color) solid;\r\n    padding-left: 18px;\r\n    font-size: 32px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    letter-spacing: 2px;\r\n    color: var(--primary-color);\r\n    text-align: justify;\r\n}\r\n@media (max-width: 575px){\r\n    h1 {\r\n        font-size: 36px;\r\n    } \r\n    .main-section .main-content {\r\n        flex-direction: column;\r\n    } \r\n    .main-section .main-content #result{\r\n        border-left: none;\r\n        padding-left: 0;\r\n        border-top: 5px var(--secondary-color) solid;\r\n        padding-top: 18px;\r\n        font-size: 22px;\r\n    }\r\n    form button {\r\n        margin-bottom: 14px;\r\n        margin-right: 0;\r\n    }\r\n}\r\n@media (max-width: 420px){\r\n    h1 {\r\n        font-size: 24px;\r\n    } \r\n    form button {\r\n        width: 175px;\r\n    }\r\n    .main-section .main-content #result{\r\n        font-size: 18px;\r\n    }\r\n}"],sourceRoot:""}]);const c=a},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},t(n)}function o(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,i(t.key),t)}}function i(n){var r=function(n){if("object"!=t(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!=t(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==t(r)?r:r+""}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var a=function(){return n=function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{enumerable:!0,get:function(){return r.replace(/\D+/g,"")}})},(r=[{key:"valida",value:function(){var n=this.cpfLimpo.slice(0,9),r=this.criaDigito(n);return n+r+this.criaDigito(n+r)===this.cpfLimpo}},{key:"criaDigito",value:function(n){var r=Array.from(n),e=r.length+1,t=11-r.reduce((function(n,r){return n+=Number(r)*e,e--,n}),0)%11;return t>9?"0":String(t)}}])&&o(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}();function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c(n)}function s(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,A(t.key),t)}}function A(n){var r=function(n){if("object"!=c(n)||!n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!=c(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==c(r)?r:r+""}var u=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},r=[{key:"CriaCPF",value:function(){var n=this.randomCPF(),r=new a,e=r.criaDigito(n),t=n+e+r.criaDigito(n+e);return this.formataCPF(t)}},{key:"randomCPF",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formataCPF",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}}],r&&s(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(),l=e(72),p=e.n(l),f=e(825),m=e.n(f),d=e(659),y=e.n(d),v=e(56),C=e.n(v),b=e(540),B=e.n(b),h=e(113),x=e.n(h),g=e(534),I={};I.styleTagTransform=x(),I.setAttributes=C(),I.insert=y().bind(null,"head"),I.domAPI=m(),I.insertStyleElement=B(),p()(g.A,I),g.A&&g.A.locals&&g.A.locals,document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();var r=(new u).CriaCPF();document.querySelector("#result").innerHTML=r}))})();
//# sourceMappingURL=bundle.js.map