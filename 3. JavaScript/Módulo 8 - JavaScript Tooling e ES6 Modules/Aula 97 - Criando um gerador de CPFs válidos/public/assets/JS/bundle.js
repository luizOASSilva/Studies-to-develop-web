(()=>{"use strict";var t="Luiz",o="Silva";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function r(t,o,e){return o&&n(t.prototype,o),e&&n(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){var o=function(t){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(o)?o:o+""}var a=r((function t(o,e){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.nome=o,this.especie=e}));function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function l(t){var o=function(t){if("object"!=c(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var e=o.call(t,"string");if("object"!=c(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(o)?o:o+""}var f=function(){return t=function t(o,e,n){!function(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}(this,t),this.nome=o,this.peso=e,this.altura=n},(o=[{key:"imc",get:function(){return this.peso/(this.altura*this.altura)}},{key:"apresentaImc",value:function(){console.log("".concat(this.nome,", seu IMC É: ").concat(this.imc))}}])&&u(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o}();console.log(t,o,19),console.log(10),console.log("Helena"),function(t,o){console.log("Olá ".concat(t," ").concat(o))}(t,o);var s=new a("Ayla","Cachorro");console.log(s),new f("Luiz",80,1.75).apresentaImc();var y=new f("Helena",65,1.73);console.log(y),y.apresentaImc(),console.log("Esta é uma função default")})();
//# sourceMappingURL=bundle.js.map