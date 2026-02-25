"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome) {
        this.colaboradores = []; // quando dizemos que um atributo é privado, estamos dizendo que ele só poe ser acessado de dentro de sua própria classe
        this.nome = nome;
    }
    /* public */ Empresa.prototype.adicionaColaborador = function (colaborador) {
        this.colaboradores.push(colaborador); // readonly diz que o valor não pode ser alterado, mas permite a utilização de métodos como push para atribuição de valores
    }; // quando não definimos um modificador de acesso, por padrão, o valor é public
    return Empresa;
}());
exports.Empresa = Empresa;
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}());
exports.Colaborador = Colaborador;
// private é um modificador de acesso que permite tornar métodos e atributos privados e acessados somente dentro da função de seu escopo, isso é o encapsulamento (fornecimento de métodos para manipulação de atributos privados)
var empresa1 = new Empresa('Fatec');
var colaborador = new Colaborador('Luiz', 'Silva');
empresa1.adicionaColaborador(colaborador);
console.log(empresa1);
