const nome = 'Luiz';


const coisa1 = 1;
const coisa2 = 2;
const coisa3 = 3;

const falaNome = (nome, sobrenome) => `${nome} ${sobrenome}`;

// console.log(module); // module é uma bibilioteca representando um conjunto de funções

// module.exports.receba.nome = nome; exportando um módulo utilizando o método "module"
// console.log(module.exports) objeto "module" agora tem como chave nome e seu respectivo valor
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome; // podemos utilizar um atalho para se reperir ao module\
exports.falaNome = falaNome;
this.qualquerCoisa = 'o que eu quiser exportar'; // this faz referência ao module

exports.coisa1 = coisa1;
exports.coisa2 = coisa2;
exports.coisa3 = coisa3;

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa; // exportando a classe pessoa na chave pessoa do objeto exportado

exports.teste = 'teste'; // é possível exportar um móculo criado em sua sintaxe de atribuição. Nesse caso, teste só é iniciada quando ocorre sua exportação

const key1 = 'chave 1';
const key2 = 'chave 2';
const key3 = 'chave 3';

// module.exports = { 
//     key1, key2, key3
// };  é possível também exportar o objeto e exportar diversas chaves de uma vez