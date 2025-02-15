// todo objeto literal criado, recebe a chamada automática da função construtora new Object()
// toda função construtora tem um Object.prototype
const objA = { 
    chaveA: 'A'
    // implicitamente todo objeto tem um __proto__ criado por Object.prototype
};

const objB = { 
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA); // podemos atrelar o prototype de um objeto como outro objeto, usando a função setPrototypeOf()
// agora "objB" tem em seu prototype, o "objA"
// "objB" agora tem em seu prototype a propriedade presente no "objA" (chaveA: 'A')

console.log(objB);

const objC = {
    chaveC: 'C'
};

Object.setPrototypeOf(objC, objB); // podemos criar uma cadeia de prototypes, nesse caso objC vai herdar em seu prototype, as propriedades do objB, que irá herdar no protype de objB as propriedades do objA
console.log(objC);

// desta forma, podemos reutilizar propriedades e métodos de outros objetos, sem gerar processamento extra

/*
chaveC: 
    "C"
[[Prototype]]: 
    Object
        chaveB: "B"
[[Prototype]]: 
    Object
        chaveA: "A"
*/

console.log(Object.getPrototypeOf(objC)); // pega o prototype de "objC". No caso a propriedade de "objB" está no prototype do objC

// exemplo real

function Produto(nome, preco) { // função construtora, responsável por gerar um objeto
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) { // adiciona ao prototype da função construtora o método que aplica desconto sobre o valor do produto
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const prod1 = new Produto('Camiseta', 150); // criando uma instância prod1 que recebe o objeto criado pela função Produto()
console.log(prod1); // objeto produto criado com o valor de 150

prod1.desconto(50); // busca o desconto no protype para aplicação do desconto. Isso torna o objeto flexícel, podendo receber ou não o desconto que está embutido sendo herdado por cada produto com seu desconto infividual 
// aplicando 50% de desconto sobre o produto, utilizando o método em prototype

console.log(prod1); // prod2 agora com o novo valor aplicado sobre 50% de desconto

const prod2 = {
    nome: 'Caneca',
    preco: 50
};

// prod2.desconto não será encontrado nem nos prototypes, pois "prod2" não é uma instância de "Produto()"

// para atribuir o prototype da função construtora "Produto()", podemos utilizar "Object.setPrototypeOf()"

Object.setPrototypeOf(prod2, Produto.prototype); // atribuindo ao objeto "prod2" o prototype do objeto gerado pela função construtora "Produto()"

console.log(prod2); // prod2 agora possui protype herdado do objeto gerado por "Produto()", mesmo não sendo uma instância 

prod2.desconto(10); // desconto de 10% sobre o produto é aplicado
console.log(prod2); // prod2 agora com o novo valor aplicado sobre 10% de desconto

const p3 = Object.create(Produto.prototype); // podemos criar um objeto instância, buscando pelo prototype passado como parâmetro
// cria um objeto vazio e já define seu prototype, como herança do objeto gerado pela função construtora "Produto()";

console.log(p3); // p3 agora é um objeto vazio, com o prototype herdado, contendo o método "desconto()"

p3.preco = 10; // devemos atribuir ao objeto vazio a chave preco, para que possa ser possível o cálculo do desconto
p3.desconto(50); // aplica o desconto sobre o preco já atribuido a propriedade do objeto

console.log(p3); // apresenta o preço já com desconto

// é possível também passar o objeto criado diretamente na chamada de Object.create()

const p4 = Object.create(Produto.prototype, { // assim como no anterior, podemos herdar o prototype diretamente em sua criação, por meio do método crate(). Para criar um objeto, devemos passar as propriedades e seus respectivos descriptors
    nome: {
        writable: true,
        enumerable: true,
        configurable: false,
        value: 'Action Figure'
    },
    preco: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 200
    }
});

console.log(p4); // p4 agora é uma instância de "Produto()"

p4.desconto(25); // também foi herdado seu prototype

console.log(p4); // valor agora calculado sobre o desconto de 25%
