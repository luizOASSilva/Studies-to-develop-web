const a1 = [10, 20, 30, 40];
let total = 0;
let total2 = 0;

a1.forEach((valor, indice, array) => { // forEach executa uma função para cada elemento do array
    // console.log(valor); valor: valor que foreach aponta naquela iteração
    // console.log(indice); indice: posição do elemento apontado no array. Começando por 0
    // console.log(array); array: array completo
    total += valor; // soma cada valor recebido por parâmetro à variável global "valor"
});

console.log(total);

// forma reduzida, utilizando arrow function

a1.forEach(valor => total2 -= valor); // diminui cada valor recebido por parâmetro à variável global "valor"

console.log(total2);