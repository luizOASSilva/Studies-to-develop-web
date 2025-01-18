// funções em JavaScript executam uma ação. São delimitadas por chaves e restritas à elas.
function saudacao(nome) { // no escopo -> (), pode ser passado uma variável chamada parâmetro, que servirá de transporte para o valor a ser tratado dentro da função e posteriormente retornado
    return `Olá ${nome}!`; // return é o valor que será devolvido ao final da execução da função
}

saudacao('Luiz'); // para enviar um valor à função por meio do parâmetro
saudacao('Helena'); // funções são reutilizáveis 

const variavel = saudacao('Otávio'); // const variavel recebe o return da função ("Olá Luiz")
console.log(variavel);

// exemplos mais reais

function soma(x, y) {
    const resultado = x + y;
    return resultado; // return delimita o final de uma função, nada que estiver abaixo não é executado
}

console.log(soma(4, 4)); // funções possuem seu próprio escopo, o que é declarado dentro da função está apenas no escopo da função

// funções podem ser enviadas dentro de uma variável recebem trativas anônimas, sem ter nome
const raiz = function (n) {
    return Math.sqrt(n);
}; 

console.log(raiz(9));

// funções podem ser criadas por arrow functions que servem para facilitar a criação de funções

const potencia = (num1, num2) => {
    return Math.pow(num1, num2);
};

console.log(potencia(2, 2));

// ou dessa maneira mais simplificada

const sub = (n1, n2) => n1 - n2;

console.log(sub(10, 5));

const integerTest = numero => Number.isInteger(numero); // caso haja apenas um parâmetro, a arrow function não precisa de parêntese

console.log(integerTest(10.5));