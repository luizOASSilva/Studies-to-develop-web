// com interfaces criamos formas mais compatíveis com classes e objetos. Em interfaces não utilizamos o sinal de = em sua sintaxe, pois são moldes como objetos.

interface TipoPessoa {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
};

type Number = number | string; // com type, podemos criar tipos simples

interface String {
    teste: string;
}

interface TipoPessoaComNumber extends String, TipoPessoa {} // fazendo agregação entre duas intefaces, juntando interfaces


export class Pessoa implements TipoPessoa {

    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

const pssoaObj: TipoPessoaComNumber = { // agora o objeto deve ser idêntico a sua forma em interface.
    nome: 'Luiz',
    sobrenome: 'Silva',
     nomeCompleto() {
        return 'aaaaaaa';
     },
     teste: 'teste'

}

const pessoa = new Pessoa('Luiz', 'Silva');
console.log(pessoa.nomeCompleto);