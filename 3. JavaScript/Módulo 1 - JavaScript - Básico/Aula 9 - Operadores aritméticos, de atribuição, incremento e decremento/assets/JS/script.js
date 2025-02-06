/* Operadores aritméticos
+ -> soma
- -> subtração
/ -> divisão
* -> multiplicação
** -> potenciação
% -> resto da divisão
*/

/* Operadores de incremento e decremento
++ -> incremento de + 1
-- -> decremento de - 1
*/

/* Operadores de atribuição
+= -> atribuição de soma
-= -> atribuição de subtração
*= -> atribuição de multiplicação
/= -> atribuição de divisão
**= -> atribuição de potenciação
%= -> atribuição de resto
*/

const num1 = 5;
const num2 = 10;
const num3 = 2;
let contador = 0;

console.log(num1 + num2 + num3); // 5+10+2 = 17
console.log(num1 * num2); // 5 * 10 = 50
console.log(num2 / num1); // 10 / 5 = 2
console.log(num2 ** num3); // 10 ^ 2 = 100
console.log(num2 % num3); // 10 / 2 = resto 0

contador++ // 0 + 1 = 1
console.log(contador); // saída = 1

contador--; // 1 - 1 = 0
console.log(contador); //saída = 0

let contador2 = 0;
contador2 += 2; // mesmo que contador2 = contador2 + 2
// pode ser realizado com qualquer operador

console.log(contador2);

let contador3 = 0;
contador3 -= 2; // mesmo que contador3 = contador3 - 2
console.log(contador3);

let contador4 = 2;
contador4 *= 2; // mesmo que contador4 = contador4 * 2
console.log(contador4);

let contador5 = 4;
contador5 /= 2; // mesmo que contador5 = contador5 / 2
console.log(contador5);

let contador6 = 10;
contador6 **= 2; // mesmo que contador6 = contador6 ** 2
console.log(contador6);

let contador7 = 10;
contador7 %=3; // mesmo que contador7 = contador7 % 3
console.log(contador7);

const num4 = 10;
const num5 = parseInt('5'); // a função parseInt transforma string em number do tipo inteiro

console.log(num4 * num5);

const num6 = 10;
const num7 = parseFloat('5.5'); // a função parseInt transforma string em number do tipo flutuante

console.log(num6 * num7);

const num8 = 10;
const num9 = Number('5.5'); // a função Number indentifica o tipo de variável e faz a conversão para number

console.log(num8 * num9);

