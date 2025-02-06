const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrConcatenado = arr1.concat(arr2); // o método concat para array junta dois arrays em um só, formando um úncio array com dois diferentes arrays
// array vai receber a concatenação.concat(array que deseja juntar(concatenar))

console.log(arr1); // saída = [ 1, 2, 3 ]
console.log(arr2); // saída = [ 4, 5, 6 ]
console.log(arrConcatenado); // saída = [ 1, 2, 3, 4, 5, 6 ]

const arrConcatenado2 = arr1.concat(arr2, [7,8,9], 'Luiz'); // concatena também outros valores passados por argumento para o método concat()

// podemos concatenar também com ... (spread)

const arrConcatenadoSpread = [...arr1, ...arr2]; // spread pegará todo o valor de um array e colocará dentro de outro array maior

console.log(arrConcatenadoSpread);

const arrConcatenadoSpread2 = [...arr1, ...arr2, 'Luiz', ...[7,8,9]]; // pode-se concatenar valores dentro do prórpio array, para concatenar com um array literal, deve-se usar ... (spread operator) seguido do array
