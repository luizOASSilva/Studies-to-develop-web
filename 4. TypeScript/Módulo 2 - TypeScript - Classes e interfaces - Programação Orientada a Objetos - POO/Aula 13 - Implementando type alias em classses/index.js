"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro() {
        this.motor = new Motor();
    }
    Carro.prototype.ligar = function () {
        this.motor.ligar();
    };
    Carro.prototype.acelerar = function () {
        this.motor.acelerar();
    };
    Carro.prototype.parar = function () {
        this.motor.parar();
    };
    Carro.prototype.desligar = function () {
        this.motor.desligar();
    };
    return Carro;
}());
exports.Carro = Carro;
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.ligar = function () {
        console.log('Motor está ligando...');
    };
    Motor.prototype.acelerar = function () {
        console.log('Motor está acelerando...');
    };
    Motor.prototype.parar = function () {
        console.log('Motor está parando...');
    };
    Motor.prototype.desligar = function () {
        console.log('Motor está desligando');
    };
    return Motor;
}());
exports.Motor = Motor;
var carro = new Carro();
carro.ligar();
carro.acelerar();
carro.desligar();
carro.parar();
