"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, idade, _cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this._cpf = _cpf;
        this.cpf = _cpf; // agora todo valor enviado mesmo que 
    }
    Object.defineProperty(Pessoa.prototype, "cpf", {
        get: function () {
            return this._cpf.replace(/\D/g, '');
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa = new Pessoa('Luiz', 'Otávio', 20, '000-000-000-00'); // valores atribuídos diretamente, não passam pelo getter nem pelo setter
pessoa.cpf = '511-598-868-22'; // assim chamamos o setter para atribuição de valor
console.log(pessoa.cpf); // assim chamamos o getter, valor retornado já vem formatado pelo getter
