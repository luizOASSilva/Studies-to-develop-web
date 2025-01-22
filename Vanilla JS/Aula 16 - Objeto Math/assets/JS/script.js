// math é um objeto predefinido pelo JavaScript que permite realizar cálculos matemáticos, como operações aritméticas, arredondamentos e comparações.

const num1 = 10.5;
const num2 = 10.5;
const num3 = 10.75;
const num4 = 100;
const numInteiro = 10;

console.log(Math.floor(num1)); 
// floor é um metódo do objeto math que permite arredondar o número para o menor valor mais próximo

console.log(Math.ceil(num1)); 
// ceil é um metódo do objeto math que permite arredondar o número para o maior valor mais próximo. entre x.5 e acima arredonda para cima, abnaixo para baixo

console.log(Math.round(num3)); 
// round é um metódo do objeto math que permite arredondar o valor para o número inteiro mais próximo

console.log(Math.pow(numInteiro, 2));
// pow é um metódo do objeto math que permite fazer o cálculo de potência de um número, pelo valor estipulado depois da vírgula

console.log(Math.max(1, 2, 15, 20, 21.199, 21.200)); 
// max é um metódo do objeto math que permite resgatar o maior número de uma lista

console.log(Math.min(1, 2, 15, 20, 21.199, 21.200, -100)); 
// min é um metódo do objeto math que permite resgatar o menor número de uma lista

console.log(Math.random()); 
// o método random do objeto math gera um número decimal aleatório entre 0 e 1, exceto 1

console.log(Math.sqrt(num4)); 
// o método sqrt do objeto math resolve a raíz quadrada do número

