"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCalculadora = exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora(numero) {
        this.numero = numero;
    }
    Calculadora.prototype.add = function (n) {
        this.numero += n;
        return this;
    };
    Calculadora.prototype.sub = function (n) {
        this.numero -= n;
        return this;
    };
    Calculadora.prototype.div = function (n) {
        this.numero /= n;
        return this;
    };
    Calculadora.prototype.mul = function (n) {
        this.numero *= n;
        return this;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
var SubCalculadora = /** @class */ (function (_super) {
    __extends(SubCalculadora, _super);
    function SubCalculadora() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubCalculadora.prototype.pow = function (n) {
        var _a;
        (_a = this).numero = Math.pow(_a.numero, n);
        return this;
    };
    return SubCalculadora;
}(Calculadora));
exports.SubCalculadora = SubCalculadora;
var calculadora = new Calculadora(10);
calculadora.add(5).mul(2);
console.log(calculadora);
var calculadora2 = new SubCalculadora(20); // quando retornamos this. subclasses herdam o this da classe pai, todos os métodos então serãa acessíveis por subCalculadora.
console.log(calculadora2.add(5).pow(2)); // subclasse agora conhece os métodos da classe pai e permite cadeia de métodos
