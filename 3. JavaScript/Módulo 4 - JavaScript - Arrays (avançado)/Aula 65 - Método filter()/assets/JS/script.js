// o método filter() cria um novo array a partir dos elementos testados e retornados pelo teste implementado pela função fornecida a filter
// filter() filtra o array

// suponha que você deseja extrair apenas valores maiores que 10 de um array de números

const num = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor, indice, array) { 
// uma função interna ao filter recebe os seguintes parâmetros:
// - valor: valor do elemento do array
// - indice: posição (elemento) que o método filter aponta no array
// - array: o próprio array que está sendo filtrado
    console.log(`indice: ${indice} \nvalor: ${valor} \narray: ${array} \n`); // verificando como trabalha filter()
    if (valor > 10) { // verifica se o valor é 10 
        return true; // retorna true e adiciona o valor do elemento a um novo array
    } else {
        return false; // se não pula para o outro elemento do array
    }
}

const result = num.filter(callbackFilter) 
// filter realiza uma checagem com base na função de vallback passada a ele como referência
// após filter receber o retorno, da função de callback, se true armazena em um novo array e se falso, verifica o próximo elemento do array

console.log(result); // saída = [ 50, 80, 11, 15, 22, 27 ]

// fazendo de forma mais simplificada

const than10 = num.filter(value => value > 10); // arrow function com apenas um parâmetro que retorna "true" ou "false" de acordo com a condição "value > 10"

console.log(than10); // saída = [ 50, 80, 11, 15, 22, 27 ]

// exemplo mais real

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a letra "a"

const pessoas = [
    { nome: 'Luiz', idade: 19 },
    { nome: 'Helena', idade: 18 },
    { nome: 'Clarisse', idade: 48 },
    { nome: 'Márcio', idade: 58 },
    { nome: 'Milena', idade: 29 },
    { nome: 'Matheus', idade: 27 }, 
];

const res1 = pessoas.filter(obj => obj.nome.length > 5);
console.log(res1);

const res2 = pessoas.filter(obj => obj.idade > 50);
console.log(res2);

const res3 = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(res3);
