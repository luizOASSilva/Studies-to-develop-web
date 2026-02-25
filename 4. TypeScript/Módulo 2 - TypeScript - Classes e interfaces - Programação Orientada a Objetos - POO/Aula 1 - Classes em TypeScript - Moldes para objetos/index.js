"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colaborador = exports.Empresa3 = exports.Empresa2 = exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.nome = 'Luiz'; // public é redundante, é um valor padrão se não adicionado
    }
    return Empresa;
}());
exports.Empresa = Empresa;
var Empresa2 = /** @class */ (function () {
    function Empresa2(nome) {
        this.nome = 'Luiz'; // mesmo com readonly, só é possível essa atribuição de valor por ser a sua linha de inicialização
    }
    return Empresa2;
}());
exports.Empresa2 = Empresa2;
var empresa1 = new Empresa2('Udemy');
console.log(empresa1);
console.log(empresa1.nome);
// empresa1.nome = 'Júlia'; -> não é possivel reatribuir valores a atributos definidos como readonly
var Empresa3 = /** @class */ (function () {
    function Empresa3(cnpj) {
        this.colaboradores = []; // iniciando o array diretamente com valor vazio
        this.cnpj = cnpj;
    }
    Empresa3.prototype.adicionaColaborador = function (colaborador) {
        this.colaboradores.push(colaborador); // push é possível em array readonly
    };
    Empresa3.prototype.mostrarColaboradores = function () {
        for (var _i = 0, _a = this.colaboradores; _i < _a.length; _i++) {
            var colaborador = _a[_i];
            console.log(colaborador);
        }
    };
    return Empresa3;
}());
exports.Empresa3 = Empresa3;
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    return Colaborador;
}()); // classes também funcionam como tipos
exports.Colaborador = Colaborador;
var empresa3 = new Empresa3('11.111.1111/001-11');
var colaborador1 = new Colaborador('Luiz', 'Otávio');
var colaborador2 = new Colaborador('Joao', 'Jose');
var colaborador3 = new Colaborador('Julia', 'Isabelly');
empresa3.adicionaColaborador(colaborador1); // adicionando colaboradores a empresa
empresa3.adicionaColaborador(colaborador2);
empresa3.adicionaColaborador(colaborador3);
empresa3.mostrarColaboradores();
