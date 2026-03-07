"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
var pessoa1 = new Pessoa('Luiz', 20);
var pessoa2 = new Pessoa(['Luiz'], { idade: 20 });
var Stack = /** @class */ (function () {
    function Stack() {
        this.contador = 0;
        this.elementos = []; // o elemento pode ser acessado com um number do tipo K, maso valor armazenado é do tipo T
    }
    Stack.prototype.push = function (elemento) {
        this.elementos[this.contador] = elemento;
        this.contador++;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        this.contador--;
        var elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    };
    Stack.prototype.isEmpty = function () {
        return this.contador === 0;
    };
    Stack.prototype.size = function () {
        return this.contador;
    };
    Stack.prototype.show = function () {
        for (var chave in this.elementos) {
            console.log(this.elementos[chave]);
        }
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack(); // nesse caso devemos inferir o tipo na chamada da classe para dizer ao typescript que estamos enviando number 
stack.push(1);
stack.push(2);
stack.push(3);
stack.show();
