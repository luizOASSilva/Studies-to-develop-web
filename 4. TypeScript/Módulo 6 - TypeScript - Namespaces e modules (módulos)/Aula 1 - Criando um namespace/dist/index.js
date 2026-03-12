"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeuNamespace;
(function (MeuNamespace) {
    console.log('Luiz');
    class PessoaDoNamespace {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    const pessoa = new PessoaDoNamespace('Luiz');
})(MeuNamespace || (MeuNamespace = {}));
// const pessoa = new PessoaDoNamespace('Luiz'); -> gera erro
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz'); // para utilizar a função exportada de dentro do namespace, precisamos chamar seu nome
console.log(pessoaDoNamespace);
//# sourceMappingURL=index.js.map