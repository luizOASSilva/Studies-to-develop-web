// funções construtoras são moldes que geram novos objetos
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
}

// instanciação é o nome que se dá ao processo por meio do qual se cria a cópia de um objeto (classe) existente. A qual definimos como sendo um objeto referente ao tipo de dado que foi definido pela classe
const pessoa1 = new Pessoa('Luiz', 'O'); // nesse caso a instanciação do objeto "Pessoa", se dá em uma variável chamada pessoa1
const pessoa2 = new Pessoa('Helena', 'D');

console.dir(pessoa1); // quando instanciamos um objeto, o método dentro do objeto também é copiado para dentro da instância
// por exemplo, toda instância da função geradora de objetos (classe) "Pessoa"
// toda instância de "Pessoa" terá o método "nomeCompleto()" declarado no próprio escopo do objeto. Em 1000 instâncias diferentes, o sistema terá uma demanda maior de processamento, consumindo mais recurso do servidor / computador
console.dir(pessoa2);