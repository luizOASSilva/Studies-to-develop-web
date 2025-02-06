// "for of" é uma estrutura de repetição para objetos iteráveis (podem ser percorridos por um laço de repetição) pois possuem índice (index)

// índices    12345678910
const nome = 'Luiz Silva';

for (let valor of nome) { // diferende de "for" ou "for in", a variável de controle assume a posição de retornar o valor ao invés do índice
    console.log(valor);
}

// índices          1       2
const listaNome = ['Luiz', 'Helena'];

for (let valor of listaNome){ // em for of, o índice é descartado e a variável de controle assume o valor da posição percorrida
    console.log(valor);
}

listaNome.forEach((element) => console.log('exemplo de forEach:', element)); // "forEach é um método que executa uma função en cada elemento de um array enquanto o percorre"

listaNome.forEach((elemento, indice, array) => { 
    console.log(`índice: ${indice} - valor:${elemento} com forEach e array: ${array}`);
});

// for of não funciona para objetos, pois o mesmo não é iterável

const pessoa = {
    nome: 'Helena',
    sobrenome: 'Daher',
    idade: 18,
    foiReprovadaNoPsicotecnico: true
}

/*
for (i of pessoa) {
   console.log(); 
} erro: pessoa is not iterable -> pessoa não é iterável
*/

