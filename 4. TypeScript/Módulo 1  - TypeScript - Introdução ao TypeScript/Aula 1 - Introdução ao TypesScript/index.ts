// TypeString faz inferência de tipos, ou seja, se um tipo pode ser inferido automaticamente, não precisamos definir seu tipo
const nome : string = 'Luiz' // é chamado de type anotation quando definimos o tipo da variável, já em sua declaração
// typescript já instancia o tipo automaticamente, por este motivo ": string" fica inútil

// tipos básico

let texto: string = 'abc'; 
let idade: number = 30;
let adulto: boolean = true; // att: não aceita valores truthy e falsy, ex: 1 e 0 / isNaN (todos os outros valores qu podem ser considerados true ou false)
let simbolo: symbol = Symbol('symbol-qualquer');
let big: bigint = 10n;

// outros tipos

// array

let arrayDeNumeros: Array<number> = [1, 2, 3]; // Array é o tipo da variável, entre <> passamos o tipo dos valores que estarão presente dentro do array
let arrayDeNumeros2: number[] = [1, 2, 3]; // assim como a linha de cima, definimos um array que receberá valores do tipo number
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b']; // mesma função da linha 19 mas com sintaxe diferente

// objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = { // para definirmos os tipos de um objeto, utilizamos as chaves e dentro as propriedades do objeot e seus respectivos tipos
    // quando utilizamos o sinal de interrogação "?", estamos dizendo que o tipo é opcional e não obrigatório. Nesse exemplo adulto pode receber tanto o valor boleean, quanto undefined
    nome: 'Jão',
    idade: 20,
    adulto
};

// funções

function soma(x: number, y: number) {// definimos os tipos diretamente no argumento da função
    return x + y;
}

const result = soma(2, 2); // javascript faz inferência de tipo, detecta automaticamente o valor retornado pela função

function sub(x: number, y: number): number { // podemos definir qual o tipo do retorno da função, colocando ":" depois dos parênteses e antes da chave. Nesse caso estamos dizendo que a função retorna um valor numérico.
    return x - y;
}

const result2 = sub(10, 5);

const outroCalc: (x: number, y: number) => number = (x, y) => x * y; // type annotation para funções em variáveis

