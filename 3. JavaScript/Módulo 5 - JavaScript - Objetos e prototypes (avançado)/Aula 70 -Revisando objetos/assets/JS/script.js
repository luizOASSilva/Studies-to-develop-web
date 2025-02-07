// objetos podem ser literais
const pessoa = {
    nome: 'Luiz', // propriedade do objeto
    sobrenome: 'Otávio' 
}
console.log(pessoa.nome, pessoa['sobrenome']); // as propriedades do objeto podem ser acessadas por notação de ponto ou de colchetes. Em caso da notação de colchetes, o nome da propriedade deve vir entre aspas dentro do colchete
// **obs: objetos podem ser conhecidos muitas vezes também como arrays associativos

// no caso da notação de colchetes, podemos utilizar valores dinâmicos

const animal = {
    nome: 'Berenice',
    tipoAnimal: 'Gato'
};

const raca = 'tipoAnimal'; // nesse caso raca recebe uma string
console.log(animal[raca]); // acessa raca cujo valor é "tipoAnimal" no objeto animal

const pessoa2 = new Object(); // podemos criar o objeto por meio do seu construtor também
pessoa2.idade = 19; // e definir proprieades à eles por meio de notação de pontos
pessoa2.estaTrabalhando = false;
console.log(pessoa2); // saída = { idade: 19, estaTrabalhando: false }

delete pessoa2.estaTrabalhando; // com "delete", podemos deletar uma propriedade do valor. Nesse caso deletamos a propriedade "estaTrabalhando"
console.log(pessoa2); // saída = { idade: 19 }

const op = {
    num1: 10,
    num2: 10,
    sum: function () {
        console.log(this.num1 + this.num2);
    },
    sub: function () {
        console.log(this.num1 - this.num2);
    }
}

// funções dentro de objetos são chamadas de métodos. A vantagem é o livre acesso às propriedades definidas no objeto

const teste = op; // atribuindo o objeto "op" à variável "teste"

teste.sum(); // sum() é um método do ob op1

teste.mult = function() { // podemos atribuir métodos diretamente por notação de ponto
    console.log(this.num1 * this.num2); // 10 * 10 = 100
};

teste.mult(); // acessa o método mult() do objeto op1

// exemplo mais real

const newPeople = {
    namePeople: 'Luiz',
    age: 19,
    getBirthDate: function() {
        const currentDate = new Date(); // pega a data atual e atribui à variável currentDate
        const year = currentDate.getFullYear(); // pega o ano atual da data em "currentDate"
        return year - this.age; // faz o ano atual - a idade atual
    }
};

console.log(newPeople.getBirthDate()); // acessando o método do objeto "newPeople"

for(let propriedade in newPeople) { // variável "propriedade" passa por todas as propriedades do objeto
    console.log(propriedade);
}

// factory functions

function criapessoa(nome, sobrenome) { // factory functions retornam um objeto
    return {
        nome,
        sobrenome,
        get nomeCompleto() { // métodos com get se transformam em uma propriedade do objeto
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const pessoa1 = criapessoa('Luiz', 'Otávio');
console.log(pessoa1.nomeCompleto);

// constructor function 

function Pessoa2(nome, sobrenome) {
    this.nome = nome; // this é individual a cada objeto, atrela this a esse escopo do próprio objeto e o retorna de forma implícita
    this.sobrenome = sobrenome;
}

const pessoa3 = new Pessoa2('Helena', 'Daher');
// new cria um objeto vazio
// new atrela a referência this ao objeto


console.log(pessoa3); // a saída deixa explicito o construtor. Nesse caso "Pessoa"

Object.freeze(pessoa3); // freeze() impossiblita o objeto de ser modificado

function Pessoa3(nome, sobrenome) {
    this.nome = nome; // this é individual a cada objeto, atrela this a esse escopo do próprio objeto e o retorna de forma implícita
    this.sobrenome = sobrenome;
    Object.freeze(this); // podemos usar freeze() para travar this. Desta forma os valores do objeto não poderão ser modificados, nem criados e nem deletados
}