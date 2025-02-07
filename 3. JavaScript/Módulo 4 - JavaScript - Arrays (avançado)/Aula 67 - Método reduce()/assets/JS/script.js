// reduce reduz um array à um único valor que será retornado pela função executada dentro da chamada de "reduce"

// suponha que você precise retornar a soma de todos os números de um array

// índices   0  1   2   3  4  5  6  7  8...

const num = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const total2 = num.reduce((acumulador, valor, index, array) => console.log(acumulador) + valor);
console.log(total2)

const total = num.reduce((acumulador, valor, index, array) => acumulador + valor); // reduce soma ao acumulador, o valor atual que a função dentro do método reduce aponta no array
// acumulador recebe o primeiro valor do array e é ele quem irá guardar o valor do retorno da função
// valor na primeira vez, é o segundo elemento do array. O valor percorre cada índice do elementos do array e o retorna
// indice é o índice do valor que o método reduce() aponta no array
// array é o array completo

console.log(total); // saída = 240

// retorne a soma dos valores pares do array "num"]

const sumPares = num.reduce((a, v) => { 
    if (v % 2 === 0) {
        a += v;
    }
    return a;
}, 0); // mandamos um valor depois da vírgula, dizemos à função reduce, que estamos enviando um valor inicial para a variável acumuladora (a). Desta forma o parâmetro "valor" assume o valor do próximo elemento no array

console.log(sumPares);

// exemplo real

// retorne a pessoa com maior idade
const pessoas = [
    { nome: 'Luiz', idade: 19 },
    { nome: 'Helena', idade: 18 },
    { nome: 'Clarisse', idade: 48 },
    { nome: 'Márcio', idade: 58 },
    { nome: 'Milena', idade: 23 },
    { nome: 'Matheus', idade: 27 }, 
];

const res = pessoas.reduce((acumulador, valor) => { return acumulador.idade > valor.idade ? acumulador : valor}); // operação ternária, se acumulador.idade for maior que valor.idade, retorna acumulador, senão retorna o valor
// acumulador sempre vai receber o valor retornado pela função dentro do método splice(). Já "valor" é sempre o valor sequente do array que reduce itera

console.log(res);
