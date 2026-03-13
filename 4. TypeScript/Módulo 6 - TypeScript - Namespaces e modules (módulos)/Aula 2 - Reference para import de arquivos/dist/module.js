"use strict";
var MeuNamespace;
(function (MeuNamespace) {
    console.log('Luiz');
    MeuNamespace.nomeDoNameSpace = 'Luiz';
    class PessoaDoNamespace {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    const pessoa = new PessoaDoNamespace('Luiz');
    let OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nomeDoNameSpace = 'Nome do outro namespace'; // tem o mesmo nome, não verifica escopo e por isso permite criação de nome igual
    })(OutroNameSpace = MeuNamespace.OutroNameSpace || (MeuNamespace.OutroNameSpace = {}));
})(MeuNamespace || (MeuNamespace = {}));
// const pessoa = new PessoaDoNamespace('Luiz'); -> gera erro
const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz'); // para utilizar a função exportada de dentro do namespace, precisamos chamar seu nome
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNameSpace); // funciona como objetivo
console.log(MeuNamespace.OutroNameSpace.nomeDoNameSpace); // posso acessar e empilhar namespaces
//# sourceMappingURL=module.js.map