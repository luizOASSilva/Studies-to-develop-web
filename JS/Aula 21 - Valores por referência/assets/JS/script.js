/*
primitivos dados (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

referência dados (mutável) - array, object, function
*/

let a = 'A';
let b = a;  

console.log(a);
a = 'B'; 
console.log(a, b);

let arr1 = [1,2,3];
let arr2 = arr1; // arrays por serem mutáveis, apontam para o mesmo lugar na memória e por isso se modificam juntos
arr1.push(4); 

console.log(arr1);
console.log(arr1, arr2);

const arrayNomes = ['Luiz', 'Helena', 'Pedro'];
const arrayNomes2 = [...arrayNomes]; // chamado de spread, realiza uma cópia do array, onde mesmo apontando para o mesmo lugar na memória e posteriormente modificado, o valor se mantém
console.log(arrayNomes);

arrayNomes.pop(); // removendo o último valor do array

console.log(arrayNomes);
console.log(arrayNomes2); // o array continua o mesmo de quando foi copiado


