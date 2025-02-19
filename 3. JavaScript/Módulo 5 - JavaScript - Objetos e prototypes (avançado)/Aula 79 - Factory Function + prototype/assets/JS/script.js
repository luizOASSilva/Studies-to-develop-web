// podemos utiliizar o prototype juntamente à factory functions

const falar = { // desacoplando o método para fora da factory function. Criando um objeto com o método "falar()"
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = { // criando um objeto contendo o método "comer()" como chave
    comer(){
        console.log(`${this.nome} está comendo.`);
    },
};

// fazendo uma concatenação dos métodos
const pessoaPrototype = Object.assign({}, falar, comer); // atribuindo as propriedades dos objetos ã um objeto que englobará os métodos

// pode ser feito também por meio do spread operator(...)
// exemplo:
// pessoaPrototype = {...falar, ...comer}
// no exemplo a cima, espalhamos os objetos em um, fazendo assim uma cópia com todos os objetos concatenados


function criaPessoa(nome, sobrenome) { // factory function que retorna uma pessoa
    return Object.create(pessoaPrototype, { // cria o objeto que será retornado pela factory function e atribui seu prototype, como sendo o objeto(pessoaPrototype) contendo todas as funções desacopladas
        // agora os métodos "falar()" e "comer()" fazem parte do prototype de toda instância da função fábrica "criaPessoa()"
        nome: { // definindo as propriedades do objeto retornado, e suas property descriptors
            value: nome,
            enumerable: true,
            writable: true
        },
        sobrenome: { 
            value: sobrenome,
            writable: true,
            enumerable: true,
        }
    });
}

const p1 = criaPessoa('Luiz', 'Otavio'); // instanciando 
console.log(p1);
p1.falar(); // p1 contém em seu prototype o método "falar()"
