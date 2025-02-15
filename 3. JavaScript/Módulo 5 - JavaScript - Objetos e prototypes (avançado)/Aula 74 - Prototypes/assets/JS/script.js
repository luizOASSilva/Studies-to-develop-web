// funções construtoras são moldes que geram novos objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
}

// instanciação é o nome que se dá ao processo por meio do qual se cria a cópia de um objeto (classe) existente. A qual definimos como sendo um objeto referente ao tipo de dado que foi definido pela classe
const pessoa1 = new Pessoa('Luiz', 'O'); // nesse caso a instanciação do objeto "Pessoa", se dá em uma variável chamada pessoa1
const pessoa2 = new Pessoa('Helena', 'D');

console.dir(pessoa1); // quando instanciamos um objeto, o método dentro do objeto também é copiado para dentro da instância
// por exemplo, toda instância da função geradora de objetos (classe) "Pessoa"
// toda instância de "Pessoa" terá o método "nomeCompleto()" declarado no próprio escopo do objeto. Em 1000 instâncias diferentes, o sistema terá uma demanda maior de processamento, consumindo mais recurso do servidor / computador
console.dir(pessoa2);

// para resolver isso, temos os prototypes

// toda vez que usamos uma função construtora que gera um objeto, criamos junto um prototype
// prototype é um objeto modelo que herda métodos e propriedades
// toda instância de um objeto possui um prototype
// nesse caso toda instância da função construtora "Pessoa()" terá um prototype referenciado internamente, e esse prototype terá os valores que forem definidos em com ".prototype"

Pessoa.prototype.nomeCompleto = function () { // desta forma, separamos o método das definições do objeto e passamos uma herança a toda instância criada por Pessoa
    return `${this.nome} ${this.sobrenome}`;
}; // toda instância do objeto Pessoa, possuirá um método individual chamado "nomeCompleto()", fora do seu escopo de objeto, porém referenciado internamente

console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());
