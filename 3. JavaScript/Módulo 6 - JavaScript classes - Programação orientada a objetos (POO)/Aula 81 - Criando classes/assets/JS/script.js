// classes atuam exatamente como funções construtoras, são maneiras simplificadas de gerar objetos e lidar com heranças
// classes são templates para criação de objetos, declarações de classes não são "hoisted", não sendo possível acessá-la antes de sua criação - como variáveis e funções

class Pessoa {
    constructor(nome, sobrenome) { // "constructor" é um tipo de método já presente em "class". Este método é responsável por criar e iniciar um objeto criado pela classe
        this.nome = nome; // assim como constructor function, a função gera por meio de "clonstructor()", um objeto
        this.sobrenome = sobrenome;
    }

    falar() { // métodos criados dentro de classes são automaticamente atrelados ao prototype
        console.log(`${this.nome} está falando.`)
    }

    comer() { // podemos também passar parâmeteros ao método
        console.log(`${this.nome} está comendo.`)
    }
}

const p1 = new Pessoa('Luiz', 'Otávio'); // toda pessoa terá os métodos em seu prototype
console.log(p1)

// exemplificando como ficaria em funções construtoras

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} está comendo`);
};

const p2 = new Pessoa2('Helena', 'Daher');
console.log(p2);