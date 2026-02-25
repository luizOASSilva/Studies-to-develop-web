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
exports.Aluno = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, salario, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.salario = salario;
        this.cpf = cpf;
    }
    Pessoa.prototype.getsalario = function () {
        return this.salario;
    };
    Pessoa.prototype.getCpf = function () {
        return this.cpf;
    };
    Pessoa.prototype.getNomeCompleto = function () {
        return "".concat(this.nome, " ").concat(this.sobrenome);
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, sobrenome, salario, cpf, sala) {
        var _this = _super.call(this, nome, sobrenome, salario, cpf) || this;
        _this.sala = sala;
        return _this;
    }
    Aluno.prototype.getNomeCompleto = function () {
        console.log('algo antes do método da super classe'); // executa primeiro e depois retoma o comportamento da classe super
        return _super.prototype.getNomeCompleto.call(this); // quando dizemos super, estamos nos referindo a classe pai, ou seja, podemos resgatar um método que está presente na classe superior 
    };
    return Aluno;
}(Pessoa));
exports.Aluno = Aluno;
var aluno = new Aluno('Luiz', 'Silva', 3000, '511.598.868-22', 'Lab Redes');
console.log(aluno, aluno.getNomeCompleto());
